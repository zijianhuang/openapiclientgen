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
		/// <param name="com2CodeDom">Provide some CodeCOM lookup functions for registered components.</param>
		/// <param name="actionName">for prefix of casual types.</param>
		public ParametersRefBuilder(IComponentToCodeDom com2CodeDom, string actionName)
		{
			this.clientNamespace = com2CodeDom.ClientNamespace;
			this.classNamespaces = com2CodeDom.ClassNamespaces;
			this.typeAliasDic = com2CodeDom.TypeAliasDic;
			this.com2CodeDom = com2CodeDom;
			this.actionName = actionName;
		}

		readonly CodeNamespace clientNamespace;
		readonly List<CodeNamespace> classNamespaces;
		readonly TypeAliasDic typeAliasDic;
		readonly IComponentToCodeDom com2CodeDom;
		readonly string actionName;

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
			bool isPrimitiveType = TypeRefHelper.IsPrimitiveType(schemaType);
			if (String.IsNullOrEmpty(schemaType))
			{
				if (apiParameterSchema.Reference != null)
				{
					string propertyTypeNs = NameFunc.GetNamespaceOfClassName(apiParameterSchema.Reference.Id);
					string propertyTypeName = NameFunc.RefineTypeName(apiParameterSchema.Reference.Id, propertyTypeNs);
					string propertyTypeWithNs = NameFunc.CombineNamespaceWithClassName(propertyTypeNs, propertyTypeName);
					return ComponentsHelper.TranslateTypeNameToClientTypeReference(propertyTypeWithNs);
				}
				else
				{
					if (apiParameterSchema.Enum.Count > 0) //for casual enum
					{
						var r = com2CodeDom.GenerateCasualEnum(apiParameterSchema, actionName, apiParameterName, null);
						return r.Item1;
					}
					else
					{
						OpenApiSchema refToType = null;
						if (apiParameterSchema.AllOf.Count > 0)
						{
							refToType = apiParameterSchema.AllOf[0];
						}
						else if (apiParameterSchema.OneOf.Count > 0)
						{
							refToType = apiParameterSchema.OneOf[0];
						}
						else if (apiParameterSchema.AnyOf.Count > 0)
						{
							refToType = apiParameterSchema.AnyOf[0];
						}
						else if (refToType == null)
						{
							//Trace.TraceWarning($"Property '{p.Key}' of {currentTypeName} may be of type object.");
						}

						string customPropertyType = refToType == null ? "System.Object" : refToType.Type;
						string customPropertyFormat = refToType?.Format;
						Type customType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(customPropertyType, customPropertyFormat);
						return new CodeTypeReference(customType);
					}
				}
			}
			else
			{
				if (schemaType == "array") // for array
				{
					var r = com2CodeDom.CreateArrayCodeTypeReference(apiParameterSchema, actionName, apiParameterName, null, null);
					return r.Item1;
				}
				else if (apiParameterSchema.Enum.Count == 0 && apiParameterSchema.Reference != null && !isPrimitiveType) // for complex type
				{
					CodeTypeReference complexCodeTypeReference = com2CodeDom.CreateComplexCodeTypeReference(apiParameterSchema);
					return complexCodeTypeReference;
				}
				else if (apiParameterSchema.Reference == null && apiParameterSchema.Properties != null && apiParameterSchema.Properties.Count > 0) // for casual type
				{
					string casualTypeName = actionName + NameFunc.RefinePropertyName(apiParameterName);
					var found = com2CodeDom.FindTypeDeclarationInNamespaces(casualTypeName, null); //It could happenen when generating sync and async functions in C#
					if (found == null)
					{
						CodeTypeDeclaration casualTypeDeclaration = com2CodeDom.AddTypeToClassNamespace(casualTypeName, null);//stay with the namespace of the host class
						com2CodeDom.AddProperties(casualTypeDeclaration, apiParameterSchema, casualTypeName, null);
					}

					return TypeRefHelper.TranslateToClientTypeReference(casualTypeName);
				}
				else if (schemaType == "object" && apiParameterSchema.AdditionalProperties != null) // for dictionary
				{
					CodeTypeReference dicKeyTypeRef = TypeRefHelper.TranslateToClientTypeReference(typeof(string));
					CodeTypeReference dicValueTypeRef = OpenApiParameterSchemaToCodeTypeReference(apiParameterSchema.AdditionalProperties, apiParameterName);
					return new CodeTypeReference(typeof(Dictionary<,>).FullName, dicKeyTypeRef, dicValueTypeRef); //for client codes, Dictionary is better than IDictionary, no worry of different implementation of IDictionary
				}
				else if (apiParameterSchema.Enum.Count == 0) // for primitive type
				{
					Type t = TypeRefHelper.PrimitiveSwaggerTypeToClrType(schemaType, apiParameterSchema.Format);
					return new CodeTypeReference(t);
				}
				else if (apiParameterSchema.Enum.Count > 0 && schemaType == "string") // for enum
				{
					string[] enumMemberNames;
					try
					{
						enumMemberNames = (String.IsNullOrEmpty(apiParameterSchema.Type) || apiParameterSchema.Type == "string")
							? apiParameterSchema.Enum.Cast<OpenApiString>().Select(m => m.Value).ToArray()
							: apiParameterSchema.Enum.Cast<OpenApiInteger>().Select(m => "_" + m.Value.ToString()).ToArray();

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
					else
					{
						var r = com2CodeDom.GenerateCasualEnum(apiParameterSchema, actionName, apiParameterName, null);
						return r.Item1;
					}
				}
				else if (schemaType != "string" && typeAliasDic.TryGet(schemaType, out string aliasTypeName)) //check TypeAliasDic
				{
					return new CodeTypeReference(aliasTypeName);
				}
				else if (apiParameterSchema.Reference != null)
				{
					CodeTypeReference complexCodeTypeReference = com2CodeDom.CreateComplexCodeTypeReference(apiParameterSchema);
					return complexCodeTypeReference;
				}
				else // for casual enum
				{
					var r = com2CodeDom.GenerateCasualEnum(apiParameterSchema, actionName, apiParameterName, null);
					return r.Item1;
				}
			}
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
