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
		public ParametersRefBuilder(IComponentToCodeDom com2CodeDom)
		{
			this.clientNamespace = com2CodeDom.ClientNamespace;
			this.classNamespaces = com2CodeDom.ClassNamespaces;
			this.typeAliasDic = com2CodeDom.TypeAliasDic;
			this.com2CodeDom = com2CodeDom;
		}

		readonly CodeNamespace clientNamespace;
		readonly List<CodeNamespace> classNamespaces;
		readonly TypeAliasDic typeAliasDic;
		readonly IComponentToCodeDom com2CodeDom;

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
			CodeTypeReference GenerateCasualEnum()
			{
				string casualEnumName = "Api" + NameFunc.RefinePropertyName(apiParameterName); //todo: give a proper name later.
				CodeTypeDeclaration existingType = com2CodeDom.FindTypeDeclarationInNamespaces(casualEnumName, null);
				if (existingType == null)
				{
					CodeTypeDeclaration casualEnumTypeDeclaration = Fonlow.Poco2Client.PodGenHelper.CreatePodClientEnum(com2CodeDom.ClientNamespace, casualEnumName);
					com2CodeDom.AddEnumMembers(casualEnumTypeDeclaration, apiParameterSchema.Enum);

					//if (settings.DecorateDataModelWithDataContract)
					//{
					//	casualEnumTypeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.DataContract", new CodeAttributeArgument("Name", new CodeSnippetExpression($"\"{settings.DataContractNamespace}\""))));
					//}

					//if (settings.DecorateDataModelWithSerializable)
					//{
					//	casualEnumTypeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.SerializableAttribute"));
					//}

					Trace.TraceInformation($"Casual enum {casualEnumName} added for Api/{apiParameterName}.");
				}

				return ComponentsHelper.TranslateTypeNameToClientTypeReference(casualEnumName);
			}

			string schemaType = apiParameterSchema.Type;
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
						return GenerateCasualEnum();
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
					OpenApiSchema arrayItemsSchema = apiParameterSchema.Items;
					if (arrayItemsSchema == null)//ritekit.com has parameter as array but without items type. Presumbly it may be string.
					{
						Type clrType = TypeRefHelper.PrimitiveSwaggerTypeToClrType("string", null);
						CodeTypeReference arrayCodeTypeReference = TypeRefHelper.CreateArrayTypeReference(clrType, 1);
						return arrayCodeTypeReference;
					}
					else if (arrayItemsSchema.Reference != null) //array of custom type
					{
						string arrayTypeSchemaRefId = arrayItemsSchema.Reference.Id;
						var arrayTypeNs = NameFunc.GetNamespaceOfClassName(arrayTypeSchemaRefId);
						var arrayTypeName = NameFunc.RefineTypeName(arrayTypeSchemaRefId, arrayTypeNs);
						var arrayTypeWithNs = NameFunc.CombineNamespaceWithClassName(arrayTypeNs, arrayTypeName);
						var existingType = com2CodeDom.FindTypeDeclarationInNamespaces(arrayTypeName, arrayTypeNs);
						if (existingType == null) // Referencing to a type not yet added to namespace
						{
							var existingSchema = com2CodeDom.FindSchema(arrayTypeSchemaRefId);
							if (existingSchema != null && !com2CodeDom.RegisteredSchemaRefIdExists(arrayTypeSchemaRefId))
							{
								com2CodeDom.AddTypeToCodeDom(new KeyValuePair<string, OpenApiSchema>(arrayTypeSchemaRefId, existingSchema));
							}
						}

						if (com2CodeDom.TypeAliasDic.TryGet(arrayTypeSchemaRefId, out string arrayTypeNameAlias))
						{
							if (!TypeRefHelper.IsSwaggerPrimitive(arrayTypeNameAlias))
							{
								CodeTypeReference arrayCodeTypeReference = ComponentsHelper.CreateArrayOfCustomTypeReference(arrayTypeNameAlias, 1);
								return arrayCodeTypeReference;
							}
							else
							{
								var clrType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(arrayTypeNameAlias, null);
								CodeTypeReference arrayCodeTypeReference = ComponentsHelper.CreateArrayOfCustomTypeReference(clrType.FullName, 1);
								return arrayCodeTypeReference;
							}
						}
						else
						{
							CodeTypeReference arrayCodeTypeReference = ComponentsHelper.CreateArrayOfCustomTypeReference(arrayTypeWithNs, 1);
							return arrayCodeTypeReference;
						}
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
						else if (arrayItemsSchema.Properties != null && arrayItemsSchema.Properties.Count > 0) // for casual type
						{
							string casualTypeName = "Api" + NameFunc.RefinePropertyName(apiParameterName);//todo: proper prefix later
							CodeTypeDeclaration casualTypeDeclaration = com2CodeDom.AddTypeToClassNamespace(casualTypeName, null);//stay with the namespace of the host class
							return ComponentsHelper.CreateArrayOfCustomTypeReference(casualTypeName, 1);
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
