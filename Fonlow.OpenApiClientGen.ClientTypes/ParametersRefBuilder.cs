using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	/// <summary>
	/// Helper functions for openapi operation parameters
	/// </summary>
	public class ParametersRefBuilder
	{
		/// <summary>
		/// 
		/// </summary>
		/// <param name="com2TsTypes">Provide some CodeCOM lookup functions for registered components.</param>
		public ParametersRefBuilder(IComponentToCodeDom com2TsTypes)
		{
			this.clientNamespace = com2TsTypes.ClientNamespace;
			this.classNamespaces = com2TsTypes.ClassNamespaces;
			this.typeAliasDic = com2TsTypes.TypeAliasDic;
		}

		readonly CodeNamespace clientNamespace;
		readonly List<CodeNamespace> classNamespaces;
		readonly TypeAliasDic typeAliasDic;

		public ParameterDescriptionEx[] OpenApiParametersToParameterDescriptions(IList<OpenApiParameter> ps)
		{
			return ps.Select(p =>
			{
				var refinedName = NameFunc.RefineParameterName(p.Name);
				var r = new ParameterDescriptionEx()
				{
					Name = refinedName, //azure.com\apimanagement-apimapis has $ in query parameter
					QName = p.Name,
					Documentation = p.Description,
					ParameterDescriptor = new ParameterDescriptor()
					{
						IsOptional = !p.Required,
						ParameterName = refinedName,
						ParameterType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(p.Schema.Type, p.Schema.Format),
						ParameterBinder = ParameterLocationToParameterBinder(p.In),
					},

					ParameterTypeReference = OpenApiParameterToCodeTypeReference(p)
				};

				return r;
			}
			).Where(k => k.ParameterDescriptor.ParameterBinder != ParameterBinder.None).ToArray();
		}

		/// <summary>
		/// Find existing CodeTypeDeclaration in clientNamespace and classNamespaces.
		/// </summary>
		/// <param name="enumMemberNames"></param>
		/// <returns></returns>
		CodeTypeDeclaration FindEnumDeclaration(string[] enumMemberNames)
		{
			var t = clientNamespace.FindEnumDeclaration(enumMemberNames);
			if (t != null)
			{
				return t;
			}

			foreach (var cs in classNamespaces)
			{
				var cd = cs.FindEnumDeclaration(enumMemberNames);
				if (cd != null)
				{
					return cd;
				}
			}

			return null;
		}

		public CodeTypeReference OpenApiParameterToCodeTypeReference(OpenApiParameter apiParameter)
		{
			return OpenApiParameterSchemaToCodeTypeReference(apiParameter.Schema, apiParameter.Name);
		}

		public CodeTypeReference OpenApiParameterSchemaToCodeTypeReference(OpenApiSchema apiParameterSchema, string apiParameterName)
		{
			string schemaType = apiParameterSchema.Type;
			if (schemaType != null)
			{
				if (schemaType == "array") // for array
				{
					OpenApiSchema arrayItemsSchema = apiParameterSchema.Items;
					if (arrayItemsSchema == null)//ritekit.com has parameter as array but without items type. Presumbly it may be string.
					{
						Type clrType = TypeRefHelper.PrimitiveSwaggerTypeToClrType("string", null);
						CodeTypeReference arrayCodeTypeReference = TypeRefHelper.CreateArrayTypeReference(clrType, 1);
						return arrayCodeTypeReference;
					}
					else if (arrayItemsSchema.Reference != null) //array of custom type
					{
						string arrayTypeName = arrayItemsSchema.Reference.Id;
						if (typeAliasDic.TryGet(arrayTypeName, out string aliasTypeName))
						{
							return TypeRefHelper.CreateArrayOfCustomTypeReference(aliasTypeName, 1);
						}

						CodeTypeReference arrayCodeTypeReference = TypeRefHelper.CreateArrayOfCustomTypeReference(arrayTypeName, 1);
						return arrayCodeTypeReference;
					}
					else
					{
						string arrayType = arrayItemsSchema.Type;
						if (arrayItemsSchema.Enum != null && arrayItemsSchema.Enum.Count > 0)
						{
							string[] enumMemberNames = arrayItemsSchema.Enum.Cast<OpenApiString>().Select(m => m.Value).ToArray();
							CodeTypeDeclaration existingDeclaration = FindEnumDeclaration(enumMemberNames);
							if (existingDeclaration != null)
							{
								string existingTypeName = existingDeclaration.Name;
								CodeTypeReference enumArrayReference = TypeRefHelper.CreateArrayOfCustomTypeReference(existingTypeName, 1);
								return enumArrayReference;
							}

							//warning about bad yaml design.
							Trace.TraceWarning($"Parameter {NameFunc.RefineParameterName(apiParameterName)} has referenced some enum members {String.Join(", ", enumMemberNames)} which are not of any declared components.");
						}

						Type clrType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(arrayType, null);
						CodeTypeReference arrayCodeTypeReference = TypeRefHelper.CreateArrayTypeReference(clrType, 1);
						return arrayCodeTypeReference;
					}
				}
				else if (apiParameterSchema.Enum.Count > 0 && schemaType == "string") // for enum
				{
					string[] enumMemberNames;
					try
					{
						enumMemberNames = apiParameterSchema.Enum.Cast<OpenApiString>().Select(m => m.Value).ToArray();

					}
					catch (InvalidCastException ex)
					{
						throw new CodeGenException($"When dealing with {apiParameterName} of {schemaType}, error: {ex.Message}");
					}

					CodeTypeDeclaration existingDeclaration = FindEnumDeclaration(enumMemberNames);
					if (existingDeclaration != null)
					{
						string existingTypeName = existingDeclaration.Name;
						CodeTypeReference enumReference = TypeRefHelper.TranslateToClientTypeReference(existingTypeName);
						return enumReference;
					}
				}
				else if (schemaType != "string" && typeAliasDic.TryGet(schemaType, out string aliasTypeName))
				{
					return new CodeTypeReference(aliasTypeName);
				}

				Type simpleType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(schemaType, apiParameterSchema.Format);
				CodeTypeReference codeTypeReference = new CodeTypeReference(simpleType);
				return codeTypeReference;

				//var schemaFormat = content.Schema.Format;
				//return new CodeTypeReference(nameComposer.PrimitiveSwaggerTypeToClrType(schemaType, schemaFormat));
			}

			return null;
		}

		static ParameterBinder ParameterLocationToParameterBinder(ParameterLocation? lo)
		{
			if (!lo.HasValue)
			{
				throw new System.IO.InvalidDataException("ParameterLocation is REQUIRED");
			}

			return lo switch
			{
				ParameterLocation.Query => ParameterBinder.FromQuery,
				ParameterLocation.Path => ParameterBinder.FromUri,
				_ => ParameterBinder.None,//so to be skiped/ignored
			};
		}
	}

}
