using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	public class ParametersHelper
	{
		public ParametersHelper(IComponentToCodeDom com2TsTypes)
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
						ParameterType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(p.Schema.Type, p.Schema.Format),
						ParameterBinder = ParameterLocationToParameterBinder(p.In),
					},

					ParameterTypeReference = OpenApiParameterToCodeTypeReference(p)
				};

				return r;
			}
			).Where(k => k.ParameterDescriptor.ParameterBinder != ParameterBinder.None).ToArray();
		}

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
			string schemaType = apiParameter.Schema.Type;
			if (schemaType != null)
			{
				if (schemaType == "array") // for array
				{
					OpenApiSchema arrayItemsSchema = apiParameter.Schema.Items;
					if (arrayItemsSchema == null)//ritekit.com has parameter as array but without items type. Presumbly it may be string.
					{
						Type clrType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType("string", null);
						CodeTypeReference arrayCodeTypeReference = TypeRefBuilder.CreateArrayTypeReference(clrType, 1);
						return arrayCodeTypeReference;
					}
					else if (arrayItemsSchema.Reference != null) //array of custom type
					{
						string arrayTypeName = arrayItemsSchema.Reference.Id;
						if (typeAliasDic.TryGet(arrayTypeName, out string aliasTypeName))
						{
							return TypeRefBuilder.CreateArrayOfCustomTypeReference(aliasTypeName, 1);
						}

						CodeTypeReference arrayCodeTypeReference = TypeRefBuilder.CreateArrayOfCustomTypeReference(arrayTypeName, 1);
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
								CodeTypeReference enumArrayReference = TypeRefBuilder.CreateArrayOfCustomTypeReference(existingTypeName, 1);
								return enumArrayReference;
							}

							//warning about bad yaml design.
							Trace.TraceWarning($"Parameter {NameFunc.RefineParameterName(apiParameter.Name)} has referenced some enum members {String.Join(", ", enumMemberNames)} which are not of any declared components.");
						}

						Type clrType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(arrayType, null);
						CodeTypeReference arrayCodeTypeReference = TypeRefBuilder.CreateArrayTypeReference(clrType, 1);
						return arrayCodeTypeReference;
					}
				}
				else if (apiParameter.Schema.Enum.Count > 0 && schemaType == "string") // for enum
				{
					string[] enumMemberNames;
					try
					{
						enumMemberNames = apiParameter.Schema.Enum.Cast<OpenApiString>().Select(m => m.Value).ToArray();

					}
					catch (InvalidCastException ex)
					{
						throw new CodeGenException($"When dealing with {apiParameter.Name} of {schemaType}, error: {ex.Message}");
					}

					CodeTypeDeclaration existingDeclaration = FindEnumDeclaration(enumMemberNames);
					if (existingDeclaration != null)
					{
						string existingTypeName = existingDeclaration.Name;
						CodeTypeReference enumReference = TypeRefBuilder.TranslateToClientTypeReference(existingTypeName);
						return enumReference;
					}
				}
				else if (schemaType != "string" && typeAliasDic.TryGet(schemaType, out string aliasTypeName))
				{
					return new CodeTypeReference(aliasTypeName);
				}

				Type simpleType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(schemaType, apiParameter.Schema.Format);
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
