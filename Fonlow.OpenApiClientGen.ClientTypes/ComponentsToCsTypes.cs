using Fonlow.Poco2Client;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Globalization;
using System.Data;
using System.Diagnostics.Tracing;
using System.Diagnostics.CodeAnalysis;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	/// <summary>
	/// Create CS Types CodeDOM from OpenApiComponents
	/// </summary>
	public class ComponentsToCsTypes : IComponentToCodeDom
	{
		public ComponentsToCsTypes(Settings settings, CodeCompileUnit codeCompileUnit, CodeNamespace clientNamespace)
		{
			this.codeCompileUnit = codeCompileUnit;
			this.settings = settings;
			this.ClientNamespace = clientNamespace;
			TypeAliasDic = new TypeAliasDic();
		}

		public CodeNamespace ClientNamespace { get; private set; }

		readonly CodeCompileUnit codeCompileUnit;

		readonly Settings settings;

		IDictionary<string, OpenApiSchema> ComponentsSchemas;

		readonly List<string> registeredSchemaRefIds = new List<string>();

		public List<CodeNamespace> ClassNamespaces { get; private set; } = new List<CodeNamespace>();

		public TypeAliasDic TypeAliasDic { get; private set; }

		void RegisterSchemaRefIdToBeAdded(string t)
		{
			registeredSchemaRefIds.Add(t);
		}

		void RemoveRegisteredSchemaRefId(string t)
		{
			registeredSchemaRefIds.Remove(t);
		}

		public bool RegisteredSchemaRefIdExists(string t)
		{
			return registeredSchemaRefIds.Exists(d => d == t);
		}

		/// <summary>
		/// Save TypeScript codes generated into a file.
		/// </summary>
		/// <param name="fileName"></param>
		public void SaveCodeToFile(string fileName)
		{
			if (String.IsNullOrEmpty(fileName))
				throw new ArgumentException("A valid fileName is not defined.", nameof(fileName));

			try
			{
				using MemoryStream stream = new MemoryStream();
				using StreamWriter writer = new StreamWriter(stream);
				WriteCode(writer);
				writer.Flush();
				stream.Position = 0;
				using StreamReader stringReader = new StreamReader(stream);
				using StreamWriter fileWriter = new StreamWriter(fileName);
				string s = stringReader.ReadToEnd();
				fileWriter.Write(s.Replace("//;", ""));
			}
			catch (IOException e)
			{
				Trace.TraceWarning(e.Message);
			}
			catch (UnauthorizedAccessException e)
			{
				Trace.TraceWarning(e.Message);
			}
			catch (System.Security.SecurityException e)
			{
				Trace.TraceWarning(e.Message);
			}
		}

		void WriteCode(TextWriter writer)
		{
			//if (writer == null)
			//	throw new ArgumentNullException(nameof(writer), "No TextWriter instance is defined.");

			using CodeDomProvider provider = CodeDomProvider.CreateProvider("CSharp");
			CodeGeneratorOptions options = new CodeGeneratorOptions() { BracingStyle = "C", IndentString = "\t" };
			provider.GenerateCodeFromCompileUnit(codeCompileUnit, writer, options);
		}

		public string WriteToText()
		{
			using StringWriter writer = new StringWriter();
			WriteCode(writer);
			return writer.ToString();
		}

		public void CreateCodeDom(OpenApiComponents components)
		{
			if (components == null)
			{
				return;
			}

			ComponentsSchemas = components.Schemas;//.OrderBy(d => d.Value.Reference != null).OrderBy(k => k.Value.Properties.Count > 0).OrderBy(g => g.Value.AllOf.Count > 0).OrderBy(d => d.Value.Type != "array"); //so simple complex types will be handled first to be referenced by more complex ones.
			var classNamespaceNames = NameFunc.FindNamespacesInClassNames(ComponentsSchemas.Keys);

			if (classNamespaceNames.Length > 0)
			{
				var groupedComponentsSchemas = ComponentsSchemas
					.GroupBy(d => NameFunc.GetNamespaceOfClassName(d.Key))
					.OrderBy(k => k.Key);
				var namespacesOfTypes = groupedComponentsSchemas.Select(d => d.Key).ToArray();
				foreach (var groupedTypes in groupedComponentsSchemas)
				{
					var classNamespaceText = groupedTypes.Key;
					var classNamespace = new CodeNamespace(classNamespaceText);
					codeCompileUnit.Namespaces.Add(classNamespace);
					ClassNamespaces.Add(classNamespace);
					foreach (var kv in groupedTypes.OrderBy(t => t.Key))
					{
						var existingType = FindTypeDeclaration(NameFunc.RefineTypeName(kv.Key, classNamespaceText), classNamespace);
						if (existingType == null)
						{
							AddTypeToCodeDom(kv);
						}
					}
				}
			}
			else
			{
				foreach (KeyValuePair<string, OpenApiSchema> item in ComponentsSchemas)
				{
					var existingType = FindTypeDeclarationInNamespaces(NameFunc.RefineTypeName(item.Key, null), null);
					if (existingType == null)
					{
						AddTypeToCodeDom(item);
					}
				}
			}

		}

		/// <summary>
		/// Check if schema key exists in ComponentsSchemas
		/// </summary>
		/// <param name="key"></param>
		/// <returns></returns>
		OpenApiSchema FindSchema(string key)
		{
			if (ComponentsSchemas.TryGetValue(key, out OpenApiSchema v))
			{
				return v;
			}

			return null;
		}

		CodeTypeDeclaration AddTypeToClassNamespace(string typeName, string ns)
		{
			if (String.IsNullOrEmpty(ns))
			{
				return PodGenHelper.CreatePodClientClass(ClientNamespace, typeName);
			}
			else
			{
				var foundNamespace = ClassNamespaces.Find(d => d.Name == ns);
				if (foundNamespace == null)
				{
					foundNamespace = new CodeNamespace(ns);
					codeCompileUnit.Namespaces.Add(foundNamespace);
					ClassNamespaces.Add(foundNamespace);
				}

				return PodGenHelper.CreatePodClientClass(foundNamespace, typeName);
			}
		}

		/// <summary>
		/// The Id will be translated to proper C# type name and namespace if the YAML does support namespace in components.
		/// </summary>
		/// <param name="item">Reference Id and its schema</param>
		public void AddTypeToCodeDom(KeyValuePair<string, OpenApiSchema> item)
		{
			var ns = NameFunc.GetNamespaceOfClassName(item.Key);
			var currentTypeName = NameFunc.RefineTypeName(item.Key, ns);
			RegisterSchemaRefIdToBeAdded(item.Key);
			OpenApiSchema schema = item.Value;

			string type = schema.Type;
			IList<OpenApiSchema> allOfBaseTypeSchemaList = schema.AllOf; //maybe empty
			IList<IOpenApiAny> enumTypeList = schema.Enum; //maybe empty
			bool isForClass = enumTypeList.Count == 0;
			//IDictionary<string, OpenApiSchema> schemaProperties = schema.Properties;
			CodeTypeDeclaration typeDeclaration = null;
			if (isForClass)
			{
				if (schema.Properties.Count > 0 || (schema.Properties.Count == 0 && allOfBaseTypeSchemaList.Count > 1))
				{
					typeDeclaration = AddTypeToClassNamespace(currentTypeName, ns);
					if (String.IsNullOrEmpty(type) && allOfBaseTypeSchemaList.Count > 0)
					{
						OpenApiSchema allOfRef = allOfBaseTypeSchemaList[0];
						if (allOfRef.Reference == null)
						{
							Trace.TraceWarning($"Not yet support Type {item.Key} having allOf[0] without Reference. Skipped.");
							RemoveRegisteredSchemaRefId(item.Key);
							return;
						}

						string baseTypeName = NameFunc.RefineTypeName(allOfRef.Reference.Id, ns); //pointing to parent class
						typeDeclaration.BaseTypes.Add(baseTypeName);

						if (allOfBaseTypeSchemaList.Count > 1)
						{
							OpenApiSchema allOfProperteisSchema = allOfBaseTypeSchemaList[1]; //the 2nd one points to properties of the derived type, while the 1st one points to the base type.
							AddProperties(typeDeclaration, allOfProperteisSchema, currentTypeName, ns);
						}
					}

					CreateTypeDocComment(item, typeDeclaration);

					AddProperties(typeDeclaration, schema, currentTypeName, ns);

					if (settings.DecorateDataModelWithDataContract)
					{
						typeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.DataContract", new CodeAttributeArgument("Name", new CodeSnippetExpression($"\"{settings.DataContractNamespace}\""))));
					}

					if (settings.DecorateDataModelWithSerializable)
					{
						typeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.SerializableAttribute"));
					}
				}
				else if (type == "array") // wrapper of array. Microsoft OpenApi library could not intepret this as type alias, so I have to register the alias myself.
				{
					OpenApiReference itemsRef = schema.Items.Reference;
					if (itemsRef == null) //Array type with casual schema
					{
						if (schema.Items.Properties.Count > 0) //casual member type definition in an array type
						{
							var newTypeName = currentTypeName + "Element";
							if (FindTypeDeclarationInNamespaces(newTypeName, ns) == null)
							{
								AddTypeToCodeDom(new KeyValuePair<string, OpenApiSchema>(newTypeName, schema.Items));//so add casual type recursively
								TypeAliasDic.Add(item.Key, $"{newTypeName}[]");
								Trace.TraceInformation($"TypeAliasDic.Add({item.Key}, {newTypeName}[]) -- generated: {newTypeName}");
							}
						}
						else
						{
							RemoveRegisteredSchemaRefId(item.Key);
							Trace.TraceWarning($"Not yet support array type with casual items type without reference and without casual properties: {item.Key}. Skipped.");
						}

						return;
					}

					string typeNs = NameFunc.GetNamespaceOfClassName(itemsRef.Id);
					string typeName = NameFunc.RefineTypeName(itemsRef.Id, typeNs);
					var existing = FindTypeDeclarationInNamespaces(typeName, typeNs);
					if (existing == null)
					{
						AddTypeToCodeDom(new KeyValuePair<string, OpenApiSchema>(itemsRef.Id, FindSchema(itemsRef.Id)));
						RemoveRegisteredSchemaRefId(itemsRef.Id);
					}

					//Array type with ref to the other type
					if (TypeAliasDic.TryGet(itemsRef.Id, out string arrayTypeAlias))
					{
						TypeAliasDic.Add(item.Key, $"{arrayTypeAlias}[]");
						Trace.TraceInformation($"TypeAliasDic.Add({item.Key}, {arrayTypeAlias}[]) with existing ({itemsRef.Id}, {arrayTypeAlias})");
					}
					else
					{
						TypeAliasDic.Add(item.Key, $"{itemsRef.Id}[]");
						Trace.TraceInformation($"TypeAliasDic.Add({item.Key}, {itemsRef.Id}[])");
					}
				}
				else if (type != "object" && !String.IsNullOrEmpty(type))
				{
					var clrType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(type, null);
					TypeAliasDic.Add(item.Key, clrType.FullName);
					Trace.TraceInformation($"TypeAliasDic.Add({item.Key}, {clrType.FullName}) -- clrType: {clrType.FullName}");
				}
				else if (type == "object" || String.IsNullOrEmpty(type))//object alias without properties
				{
					typeDeclaration = AddTypeToClassNamespace(currentTypeName, ns);
					CreateTypeDocComment(item, typeDeclaration);

					if (settings.DecorateDataModelWithDataContract)
					{
						typeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.DataContract", new CodeAttributeArgument("Name", new CodeSnippetExpression($"\"{settings.DataContractNamespace}\""))));
					}

					if (settings.DecorateDataModelWithSerializable)
					{
						typeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.SerializableAttribute"));
					}
				}
				else
				{
					Trace.TraceInformation($"Type Alias {item.Key} for type {type} is skipped.");
					RemoveRegisteredSchemaRefId(item.Key);
					return;
				}

				if (typeDeclaration != null)
				{
					Trace.TraceInformation($"clientClass {currentTypeName} created for {item.Key}");
				}
				else
				{
					Trace.TraceInformation($"Candidate clientClass {currentTypeName} for {item.Key} is skipped");
				}
			}
			else
			{
				typeDeclaration = PodGenHelper.CreatePodClientEnum(ClientNamespace, currentTypeName);
				CreateTypeDocComment(item, typeDeclaration);
				AddEnumMembers(typeDeclaration, enumTypeList);

				if (settings.DecorateDataModelWithDataContract)
				{
					typeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.DataContract", new CodeAttributeArgument("Name", new CodeSnippetExpression($"\"{settings.DataContractNamespace}\""))));
				}

				if (settings.DecorateDataModelWithSerializable)
				{
					typeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.SerializableAttribute"));
				}

				Trace.TraceInformation("client enum: " + currentTypeName);
			}

			RemoveRegisteredSchemaRefId(item.Key);
		}

		void AddEnumMembers(CodeTypeDeclaration typeDeclaration, IList<IOpenApiAny> enumTypeList)
		{
			int k = 0;
			foreach (IOpenApiAny enumMember in enumTypeList)
			{
				if (enumMember is OpenApiString stringMember)
				{
					string memberName = NameFunc.RefineEnumMemberName(stringMember.Value);
					bool hasFunkyMemberName = memberName != stringMember.Value;
					int intValue = k;
					CodeMemberField clientField = new CodeMemberField()
					{
						Name = memberName,
						InitExpression = new CodePrimitiveExpression(intValue),
					};

					if (settings.DecorateDataModelWithDataContract)
					{
						if (hasFunkyMemberName)
						{
							clientField.CustomAttributes.Add(new CodeAttributeDeclaration($"System.Runtime.Serialization.EnumMemberAttribute", new CodeAttributeArgument("Value", new CodeSnippetExpression($"\"{stringMember.Value}\""))));
						}
						else
						{
							clientField.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.EnumMemberAttribute"));
						}
					}

					typeDeclaration.Members.Add(clientField);
					k++;
				}
				else if (enumMember is OpenApiInteger intMember)
				{
					string memberName = "_" + intMember.Value.ToString();
					int intValue = k;
					CodeMemberField clientField = new CodeMemberField()
					{
						Name = memberName,
						InitExpression = new CodePrimitiveExpression(intValue),
					};

					if (settings.DecorateDataModelWithDataContract)
					{
						clientField.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.EnumMemberAttribute"));
					}

					typeDeclaration.Members.Add(clientField);
					k++;
				}
				else if (enumMember is OpenApiLong longMember)
				{
					string memberName = "_" + longMember.Value.ToString();
					int intValue = k;
					CodeMemberField clientField = new CodeMemberField()
					{
						Name = memberName,
						InitExpression = new CodePrimitiveExpression(intValue),
					};

					if (settings.DecorateDataModelWithDataContract)
					{
						clientField.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.EnumMemberAttribute"));
					}

					typeDeclaration.Members.Add(clientField);
					k++;
				}
				else if (enumMember is OpenApiPassword passwordMember) // aws alexaforbusiness has PhoneNumberType defined as password format
				{
					string memberName = NameFunc.RefineEnumMemberName(passwordMember.Value);
					int intValue = k;
					CodeMemberField clientField = new CodeMemberField()
					{
						Name = memberName,
						InitExpression = new CodePrimitiveExpression(intValue),
					};

					if (settings.DecorateDataModelWithDataContract)
					{
						clientField.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.EnumMemberAttribute"));
					}

					typeDeclaration.Members.Add(clientField);
					k++;
				}
				else if (enumMember is OpenApiDouble doubleMember) //listennotes.com\2.0 has funky definition of casual enum of type double
				{
					string memberName = "_" + doubleMember.Value.ToString();
					int intValue = k;
					CodeMemberField clientField = new CodeMemberField()
					{
						Name = memberName,
						InitExpression = new CodePrimitiveExpression(intValue),
					};

					if (settings.DecorateDataModelWithDataContract)
					{
						clientField.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.EnumMemberAttribute"));
					}

					typeDeclaration.Members.Add(clientField);
					k++;
				}
				else
				{
					throw new ArgumentException($"Not yet supported enumMember of {enumMember.GetType()} with {typeDeclaration.Name}");
				}
			}
		}

		void AddProperties(CodeTypeDeclaration typeDeclaration, OpenApiSchema schema, string currentTypeName, string ns)
		{
			foreach (KeyValuePair<string, OpenApiSchema> p in schema.Properties)
			{
				string propertyName = NameFunc.RefinePropertyName(p.Key);
				if (propertyName == currentTypeName)
				{
					Trace.TraceWarning($"Property {propertyName} found with the same name of type {currentTypeName}, and it is renamed to {propertyName}1.");
					propertyName += "1";
				}

				if (!Char.IsLetter(propertyName[0]) && propertyName[0] != '_')
				{
					propertyName = "_" + propertyName;
				}

				bool propertyNameAdjusted = propertyName != p.Key;

				OpenApiSchema propertySchema = p.Value;
				string primitivePropertyType = propertySchema.Type;
				bool isPrimitiveType = TypeRefBuilder.IsPrimitiveType(primitivePropertyType);
				bool isRequired = schema.Required.Contains(p.Key); //compare with the original key
				string defaultValue = GetDefaultValue(propertySchema);
				CodeMemberField clientProperty;

				void GenerateCasualEnum()
				{
					string casualEnumName = typeDeclaration.Name + NameFunc.RefinePropertyName(propertyName);
					CodeTypeDeclaration existingType = FindTypeDeclarationInNamespaces(casualEnumName, ns);
					if (existingType == null)
					{
						CodeTypeDeclaration casualEnumTypeDeclaration = PodGenHelper.CreatePodClientEnum(ClientNamespace, casualEnumName);
						AddEnumMembers(casualEnumTypeDeclaration, propertySchema.Enum);

						if (settings.DecorateDataModelWithDataContract)
						{
							casualEnumTypeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.DataContract", new CodeAttributeArgument("Name", new CodeSnippetExpression($"\"{settings.DataContractNamespace}\""))));
						}

						if (settings.DecorateDataModelWithSerializable)
						{
							casualEnumTypeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.SerializableAttribute"));
						}

						clientProperty = CreateProperty(propertyName, casualEnumName, defaultValue == null ? null : (casualEnumName + "." + defaultValue));

						Trace.TraceInformation($"Casual enum {casualEnumName} added for {typeDeclaration.Name}/{propertyName}.");
					}
					else
					{
						clientProperty = CreateProperty(propertyName, casualEnumName, defaultValue == null ? null : (casualEnumName + "." + defaultValue));
					}
				}

				if (String.IsNullOrEmpty(primitivePropertyType))
				{
					OpenApiSchema refToType = null;

					if (propertySchema.Reference != null)
					{
						string propertyTypeNs = NameFunc.GetNamespaceOfClassName(propertySchema.Reference.Id);
						string propertyTypeName = NameFunc.RefineTypeName(propertySchema.Reference.Id, propertyTypeNs);
						string propertyTypeWithNs = NameFunc.CombineNamespaceWithClassName(propertyTypeNs, propertyTypeName);
						clientProperty = CreateProperty(propertyName, propertyTypeWithNs, defaultValue);
					}
					else
					{
						if (propertySchema.Enum.Count > 0) //for casual enum
						{
							GenerateCasualEnum();
						}
						else
						{
							if (propertySchema.AllOf.Count > 0)
							{
								refToType = propertySchema.AllOf[0];
							}
							else if (propertySchema.OneOf.Count > 0)
							{
								refToType = propertySchema.OneOf[0];
							}
							else if (propertySchema.AnyOf.Count > 0)
							{
								refToType = propertySchema.AnyOf[0];
							}
							else if (refToType == null)
							{
								Trace.TraceWarning($"Property '{p.Key}' of {currentTypeName} may be of type object.");
							}

							string customPropertyType = refToType == null ? "System.Object" : refToType.Type;
							string customPropertyFormat = refToType?.Format;
							Type customType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(customPropertyType, customPropertyFormat);
							if (!customType.IsClass && !isRequired)
							{
								clientProperty = CreateNullableProperty(propertyName, customType);
							}
							else
							{
								clientProperty = CreateProperty(propertyName, customType, defaultValue);
							}
						}
					}
				}
				else
				{
					if (propertySchema.Type == "array") // for array
					{
						OpenApiSchema arrayItemsSchema = propertySchema.Items;

						if (arrayItemsSchema.Reference != null) //array of custom type
						{
							string arrayTypeSchemaRefId = arrayItemsSchema.Reference.Id;
							var arrayTypeNs = NameFunc.GetNamespaceOfClassName(arrayTypeSchemaRefId);
							var arrayTypeName = NameFunc.RefineTypeName(arrayTypeSchemaRefId, arrayTypeNs);
							var arrayTypeWithNs = NameFunc.CombineNamespaceWithClassName(arrayTypeNs, arrayTypeName);
							var existingType = FindTypeDeclarationInNamespaces(arrayTypeName, arrayTypeNs);
							if (existingType == null) // Referencing to a type not yet added to namespace
							{
								var existingSchema = FindSchema(arrayTypeSchemaRefId);
								if (existingSchema != null && !RegisteredSchemaRefIdExists(arrayTypeSchemaRefId))
								{
									AddTypeToCodeDom(new KeyValuePair<string, OpenApiSchema>(arrayTypeSchemaRefId, existingSchema));
								}
							}

							if (TypeAliasDic.TryGet(arrayTypeSchemaRefId, out string arrayTypeNameAlias))
							{
								if (!TypeRefBuilder.IsSwaggerPrimitive(arrayTypeNameAlias))
								{
									CodeTypeReference arrayCodeTypeReference = CreateArrayOfCustomTypeReference(arrayTypeNameAlias, 1);
									clientProperty = CreateProperty(arrayCodeTypeReference, propertyName, defaultValue);
								}
								else
								{
									var clrType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(arrayTypeNameAlias, null);
									CodeTypeReference arrayCodeTypeReference = CreateArrayOfCustomTypeReference(clrType.FullName, 1);
									clientProperty = CreateProperty(arrayCodeTypeReference, propertyName, defaultValue);
								}
							}
							else
							{
								CodeTypeReference arrayCodeTypeReference = CreateArrayOfCustomTypeReference(arrayTypeWithNs, 1);
								clientProperty = CreateProperty(arrayCodeTypeReference, propertyName, defaultValue);
							}
						}
						else
						{
							string arrayType = arrayItemsSchema.Type;
							if (arrayItemsSchema.Properties != null && arrayItemsSchema.Properties.Count > 0) // for casual type
							{
								string casualTypeName = typeDeclaration.Name + NameFunc.RefinePropertyName(propertyName);
								CodeTypeDeclaration casualTypeDeclaration = AddTypeToClassNamespace(casualTypeName, ns);//stay with the namespace of the host class
								AddProperties(casualTypeDeclaration, arrayItemsSchema, currentTypeName, ns);
								CodeTypeReference arrayCodeTypeReference = CreateArrayOfCustomTypeReference(casualTypeName, 1);
								clientProperty = CreateProperty(arrayCodeTypeReference, casualTypeName, defaultValue);
							}
							else
							{
								Type clrType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(arrayType, null);
								CodeTypeReference arrayCodeTypeReference = CreateArrayTypeReference(clrType, 1);
								clientProperty = CreateProperty(arrayCodeTypeReference, propertyName, defaultValue);
							}
						}
					}
					else if (propertySchema.Enum.Count == 0 && propertySchema.Reference != null && !isPrimitiveType) // for complex type
					{
						string propertyTypeNs = NameFunc.GetNamespaceOfClassName(propertySchema.Reference.Id);
						string complexType = NameFunc.RefineTypeName(propertySchema.Reference.Id, propertyTypeNs);
						var existingType = FindTypeDeclarationInNamespaces(complexType, propertyTypeNs);
						if (existingType == null && !RegisteredSchemaRefIdExists(propertySchema.Reference.Id)) // Referencing to a type not yet added to namespace
						{
							AddTypeToCodeDom(new KeyValuePair<string, OpenApiSchema>(complexType, propertySchema));
						}

						var typeWithNs = NameFunc.CombineNamespaceWithClassName(propertyTypeNs, complexType);
						clientProperty = CreateProperty(propertyName, typeWithNs, defaultValue);
					}
					else if (propertySchema.Enum.Count == 0) // for primitive type
					{
						Type simpleType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(primitivePropertyType, propertySchema.Format);
						if (!simpleType.IsClass && !isRequired)
						{
							clientProperty = CreateNullableProperty(propertyName, simpleType);
						}
						else
						{
							clientProperty = CreateProperty(propertyName, simpleType, defaultValue);
						}
					}
					else // for enum
					{
						if (propertySchema.Reference != null)
						{
							var propertyTypeNs = NameFunc.GetNamespaceOfClassName(propertySchema.Reference.Id);
							string complexType = NameFunc.RefineTypeName(propertySchema.Reference.Id, propertyTypeNs);
							string typeWithNs = NameFunc.CombineNamespaceWithClassName(propertyTypeNs, complexType);
							var existingType = FindTypeDeclarationInNamespaces(complexType, propertyTypeNs);
							if (existingType == null && !RegisteredSchemaRefIdExists(propertySchema.Reference.Id)) // Referencing to a type not yet added to namespace
							{
								AddTypeToCodeDom(new KeyValuePair<string, OpenApiSchema>(propertySchema.Reference.Id, propertySchema));
							}

							clientProperty = CreateProperty(propertyName, typeWithNs, defaultValue);
						}
						else //for casual enum
						{
							GenerateCasualEnum();
						}

						if (isRequired)
						{
							clientProperty.CustomAttributes.Add(new CodeAttributeDeclaration("System.ComponentModel.DataAnnotations.Required"));
						}

						CreateMemberDocComment(p, clientProperty);
						typeDeclaration.Members.Add(clientProperty);
						continue;
					}
				}

				if (isRequired)
				{
					clientProperty.CustomAttributes.Add(new CodeAttributeDeclaration("System.ComponentModel.DataAnnotations.Required"));
				}

				if (settings.DecorateDataModelWithDataContract)
				{
					if (propertyNameAdjusted)
					{
						var originalPropertyName = p.Key;
						clientProperty.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.DataMember", new CodeAttributeArgument("Name", new CodeSnippetExpression($"\"{originalPropertyName}\""))));
					}
					else
					{
						clientProperty.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.DataMember"));
					}
				}

				CreateMemberDocComment(p, clientProperty);

				if (settings.DataAnnotationsEnabled)
				{
					AddValidationAttributes(propertySchema, clientProperty);
				}

				typeDeclaration.Members.Add(clientProperty);
			}
		}

		static void AddValidationAttributes(OpenApiSchema fieldSchema, CodeMemberField memberField)
		{
			if (fieldSchema.MaxLength.HasValue || fieldSchema.MinLength.HasValue)
			{
				if (fieldSchema.Type == "string")
				{
					List<CodeAttributeArgument> attributeParams = new List<CodeAttributeArgument>();

					if (fieldSchema.MaxLength.HasValue)
					{
						CodeSnippetExpression max = new CodeSnippetExpression(fieldSchema.MaxLength.Value.ToString());
						attributeParams.Add(new CodeAttributeArgument(max));
					}
					else
					{
						CodeSnippetExpression max = new CodeSnippetExpression("int.MaxValue");
						attributeParams.Add(new CodeAttributeArgument(max));
					}

					if (fieldSchema.MinLength.HasValue)
					{
						CodeSnippetExpression min = new CodeSnippetExpression(fieldSchema.MinLength.Value.ToString());
						attributeParams.Add(new CodeAttributeArgument("MinimumLength", min));
					}

					CodeAttributeDeclaration cad = new CodeAttributeDeclaration("System.ComponentModel.DataAnnotations.StringLength", attributeParams.ToArray());
					memberField.CustomAttributes.Add(cad);
				}
				else
				{
					if (fieldSchema.MinLength.HasValue)
					{
						CodeSnippetExpression len = new CodeSnippetExpression(fieldSchema.MinLength.Value.ToString());
						CodeAttributeArgument[] attributeParams = new CodeAttributeArgument[] { new CodeAttributeArgument(len) };
						CodeAttributeDeclaration cad = new CodeAttributeDeclaration("System.ComponentModel.DataAnnotations.MinLength", attributeParams);
						memberField.CustomAttributes.Add(cad);
					}

					if (fieldSchema.MaxLength.HasValue)
					{
						CodeSnippetExpression len = new CodeSnippetExpression(fieldSchema.MaxLength.Value.ToString());
						CodeAttributeArgument[] attributeParams = new CodeAttributeArgument[] { new CodeAttributeArgument(len) };
						CodeAttributeDeclaration cad = new CodeAttributeDeclaration("System.ComponentModel.DataAnnotations.MaxLength", attributeParams);
						memberField.CustomAttributes.Add(cad);
					}

				}
			}

			if (fieldSchema.Maximum.HasValue || fieldSchema.Minimum.HasValue)
			{
				Type type = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(fieldSchema.Type, fieldSchema.Format);
				List<CodeAttributeArgument> attributeParams = new List<CodeAttributeArgument>();

				if (fieldSchema.Minimum.HasValue)
				{
					CodeSnippetExpression min = new CodeSnippetExpression($"{fieldSchema.Minimum.Value}");
					attributeParams.Add(new CodeAttributeArgument(min));
				}
				else
				{
					CodeSnippetExpression min = new CodeSnippetExpression($"{type.FullName}.MinValue");
					attributeParams.Add(new CodeAttributeArgument(min));
				}

				if (fieldSchema.Maximum.HasValue)
				{
					CodeSnippetExpression max = new CodeSnippetExpression($"{fieldSchema.Maximum.Value}");
					attributeParams.Add(new CodeAttributeArgument(max));
				}
				else
				{
					CodeSnippetExpression max = new CodeSnippetExpression($"{type.FullName}.MaxValue");
					attributeParams.Add(new CodeAttributeArgument(max));
				}

				CodeAttributeDeclaration cad = new CodeAttributeDeclaration("System.ComponentModel.DataAnnotations.Range", attributeParams.ToArray());
				memberField.CustomAttributes.Add(cad);
			}

			if (fieldSchema.MinItems.HasValue)
			{
				CodeSnippetExpression len = new CodeSnippetExpression(fieldSchema.MinItems.Value.ToString());
				CodeAttributeArgument[] attributeParams = new CodeAttributeArgument[] { new CodeAttributeArgument(len) };
				CodeAttributeDeclaration cad = new CodeAttributeDeclaration("System.ComponentModel.DataAnnotations.MinLength", attributeParams);
				memberField.CustomAttributes.Add(cad);
			}

			if (fieldSchema.MaxItems.HasValue)
			{
				CodeSnippetExpression len = new CodeSnippetExpression(fieldSchema.MaxItems.Value.ToString());
				CodeAttributeArgument[] attributeParams = new CodeAttributeArgument[] { new CodeAttributeArgument(len) };
				CodeAttributeDeclaration cad = new CodeAttributeDeclaration("System.ComponentModel.DataAnnotations.MaxLength", attributeParams);
				memberField.CustomAttributes.Add(cad);
			}

		}

		static string GetDefaultValue(OpenApiSchema s)
		{
			if (s.Default == null)
			{
				return null;
			}

			if (s.Default is OpenApiString stringValue)
			{
				if ((s.Enum == null || s.Enum.Count == 0) && s.Type == "string") //Sometimes people make make a number default with value string. And this mistake seems common. Better to tolerate.
				{
					return "\"" + EscapeString(stringValue.Value) + "\"";
				}
				else //enum
				{
					return NameFunc.RefineEnumValue(stringValue.Value);
				}
			}

			if (s.Default is OpenApiInteger integerValue)
			{
				return integerValue.Value.ToString();
			}

			if (s.Default is OpenApiBoolean boolValue)
			{
				return boolValue.Value.ToString();
			}

			if (s.Default is OpenApiFloat floatValue)
			{
				return floatValue.Value.ToString();
			}

			if (s.Default is OpenApiDouble doubleValue)
			{
				return doubleValue.Value.ToString();
			}

			Trace.TraceWarning($"Default as {s.Default.GetType().FullName} is not yet supported.");
			return null;
		}

		static string EscapeString(string s)
		{
			if (String.IsNullOrWhiteSpace(s))
			{
				return s;
			}

			return s.Replace("\"", "\\\"");
		}

		static void CreateTypeDocComment(KeyValuePair<string, OpenApiSchema> item, CodeTypeMember typeDeclaration)
		{
			string typeComment = item.Value.Description;
			AddDocComments(typeComment, typeDeclaration.Comments);

		}

		void CreateMemberDocComment(KeyValuePair<string, OpenApiSchema> item, CodeMemberField property)
		{
			string typeComment = item.Value.Description;
			if (settings.DataAnnotationsToComments)
			{
				List<string> ss = CommentsHelper.GetCommentsFromAnnotations(item.Value);
				if (!String.IsNullOrEmpty(typeComment))
				{
					ss.Insert(0, typeComment);
				}

				AddDocComments(ss, property.Comments);
			}
			else
			{
				AddDocComments(typeComment, property.Comments);
			}

		}

		static void AddDocComments(string description, CodeCommentStatementCollection comments)
		{
			if (description != null && comments != null)
			{
				comments.Add(new CodeCommentStatement("<summary>", true));
				comments.Add(new CodeCommentStatement(description, true));
				comments.Add(new CodeCommentStatement("</summary>", true));
			}
		}

		static void AddDocComments(List<string> ss, CodeCommentStatementCollection comments)
		{
			if (ss != null && ss.Count > 0 && comments != null)
			{
				comments.Add(new CodeCommentStatement("<summary>", true));
				ss.ForEach(s => comments.Add(new CodeCommentStatement(s, true)));
				comments.Add(new CodeCommentStatement("</summary>", true));
			}
		}

		CodeMemberField CreateProperty(string propertyName, Type type, string defaultValue)
		{
			// This is a little hack. Since you cant create auto properties in CodeDOM,
			//  we make the getter and setter part of the member name.
			// This leaves behind a trailing semicolon that we comment out.
			//  Later, we remove the commented out semicolons.
			string memberName = propertyName + (defaultValue == null || !settings.DataAnnotationsEnabled ? " { get; set; }//" : $" {{ get; set; }} = {defaultValue};//");

			CodeMemberField result = new CodeMemberField() { Type = TranslateToClientTypeReference(type), Name = memberName };
			result.Attributes = MemberAttributes.Public | MemberAttributes.Final;
			return result;
		}

		static CodeMemberField CreateNullableProperty(string propertyName, Type type)
		{
			Debug.Assert(type.IsValueType);
			// This is a little hack. Since you cant create auto properties in CodeDOM,
			//  we make the getter and setter part of the member name.
			// This leaves behind a trailing semicolon that we comment out.
			//  Later, we remove the commented out semicolons.
			string memberName = propertyName + " { get; set; }//";

			CodeMemberField result = new CodeMemberField($"System.Nullable<{type.FullName}>", memberName)
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final
			};
			return result;
		}

		CodeMemberField CreateProperty(string propertyName, string typeName, string defaultValue)
		{
			string memberName = propertyName + (defaultValue == null || !settings.DataAnnotationsEnabled ? " { get; set; }//" : $" {{ get; set; }} = {defaultValue};//");

			CodeMemberField result = new CodeMemberField() { Type = TranslateToClientTypeReference(typeName), Name = memberName };
			result.Attributes = MemberAttributes.Public | MemberAttributes.Final;
			return result;
		}

		CodeMemberField CreateProperty(CodeTypeReference codeTypeReference, string propertyName, string defaultValue)
		{
			string memberName = propertyName + (defaultValue == null || !settings.DataAnnotationsEnabled ? " { get; set; }//" : $" {{ get; set; }} = {defaultValue};//");

			CodeMemberField result = new CodeMemberField(codeTypeReference, memberName)
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final
			};
			return result;
		}

		public CodeTypeReference TranslateToClientTypeReference(Type type)
		{
			if (type == null)
				return null;// new CodeTypeReference("void");
			if (type.IsArray)
			{
				Debug.Assert(type.Name.EndsWith("]"));
				Type elementType = type.GetElementType();
				int arrayRank = type.GetArrayRank();
				return CreateArrayTypeReference(elementType, arrayRank);
			}

			return new CodeTypeReference(type);

		}

		public static CodeTypeReference TranslateToClientTypeReference(string typeName)
		{
			if (typeName == null)
				return null;// new CodeTypeReference("void");

			return new CodeTypeReference(typeName);

		}

		CodeTypeReference CreateArrayTypeReference(Type elementType, int arrayRank)
		{
			CodeTypeReference otherArrayType = new CodeTypeReference(new CodeTypeReference(), arrayRank)//CodeDom does not care. The baseType is always overwritten by ArrayElementType.
			{
				ArrayElementType = TranslateToClientTypeReference(elementType),
			};
			return otherArrayType;
		}

		static CodeTypeReference CreateArrayOfCustomTypeReference(string typeName, int arrayRank)
		{
			CodeTypeReference elementTypeReference = new CodeTypeReference(typeName);
			CodeTypeReference typeReference = new CodeTypeReference(new CodeTypeReference(), arrayRank)
			{
				ArrayElementType = elementTypeReference,
			};
			return typeReference;
		}

		/// <summary>
		/// Find in ClientNamespace if ns is not defined, or in ClassNamespaces and ClientNamespace.
		/// </summary>
		/// <param name="typeNameNoNs"></param>
		/// <param name="ns"></param>
		/// <returns></returns>
		public CodeTypeDeclaration FindTypeDeclarationInNamespaces(string typeNameNoNs, string ns)
		{
			if (String.IsNullOrEmpty(ns))
			{
				var cd = ClientNamespace.FindTypeDeclaration(typeNameNoNs);
				if (cd != null)
				{
					return cd;
				}

				return null;
			}

			foreach (var cs in ClassNamespaces)
			{
				if (cs.Name == ns)
				{
					var ctd = cs.FindTypeDeclaration(typeNameNoNs);
					if (ctd != null)
					{
						return ctd;
					}
				}
			}

			var cg = ClientNamespace.FindTypeDeclaration(typeNameNoNs);
			if (cg != null)
			{
				return cg;
			}

			return null;
		}

		/// <summary>
		/// Find in specific namespace
		/// </summary>
		/// <param name="typeName"></param>
		/// <param name="ns"></param>
		/// <returns></returns>
		public static CodeTypeDeclaration FindTypeDeclaration(string typeName, CodeNamespace ns)
		{
			return ns.FindTypeDeclaration(typeName);
		}

	}

}
