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

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	/// <summary>
	/// Create CS Types CodeDOM from OpenApiComponents
	/// </summary>
	public class ComponentsToCsTypes : ComponentsToTypesBase
	{
		public ComponentsToCsTypes(Settings settings, CodeCompileUnit codeCompileUnit, CodeNamespace clientNamespace) : base(settings, codeCompileUnit, clientNamespace)
		{
		}


		/// <summary>
		/// Save CS codes generated into a file.
		/// </summary>
		/// <param name="fileName"></param>
		public override void SaveCodeToFile(string fileName)
		{
			if (String.IsNullOrEmpty(fileName))
				throw new ArgumentException("A valid filename is not defined.", nameof(fileName));

			try
			{
				using MemoryStream stream = new();
				using StreamWriter writer = new(stream);
				WriteCode(writer);
				writer.Flush();
				stream.Position = 0;
				using StreamReader stringReader = new(stream);
				using StreamWriter fileWriter = new(fileName);
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

		/// <summary>
		/// Write code with C# CodeDOM
		/// </summary>
		/// <param name="writer"></param>
		protected override void WriteCode(TextWriter writer)
		{
			using CodeDomProvider provider = CodeDomProvider.CreateProvider("CSharp");
			CodeGeneratorOptions options = new() { BracingStyle = "C", IndentString = "\t" };
			provider.GenerateCodeFromCompileUnit(codeCompileUnit, writer, options);
		}

		/// <summary>
		/// The Id will be translated to proper C# type name and namespace if the YAML does support namespace in components.
		/// The namespace is extracted from refId if refId contains dots.
		/// </summary>
		/// <param name="item">Reference Id and its schema</param>
		public override void AddTypeToCodeDom(string refId, OpenApiSchema schema)
		{
			if (refId == "StatusCodes")
			{
				Console.WriteLine(refId);
			}
			string ns = NameFunc.GetNamespaceOfClassName(refId);
			string currentTypeName = NameFunc.RefineTypeName(refId, ns);
			if (settings.UsePascalCase)
			{
				currentTypeName = currentTypeName.ToPascalCase();
			}

			RegisterSchemaRefIdToBeAdded(refId);

			string type = schema.Type;
			IList<OpenApiSchema> allOfBaseTypeSchemaList = schema.AllOf; //maybe empty
			IList<IOpenApiAny> enumTypeList = schema.Enum; //maybe empty
			bool isForClass = enumTypeList.Count == 0;
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
							Trace.TraceWarning($"Not yet support Type {refId} having allOf[0] without Reference. Skipped.");
							RemoveRegisteredSchemaRefId(refId);
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

					CreateTypeDocComment(refId, schema, typeDeclaration);

					AddProperties(typeDeclaration, schema, currentTypeName, ns);

					if (settings.DecorateDataModelWithDataContract)
					{
						typeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.DataContract", new CodeAttributeArgument("Namespace", new CodeSnippetExpression($"\"{settings.DataContractNamespace}\""))));
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
							string newTypeName = currentTypeName + "Element";
							if (FindCodeTypeDeclarationInNamespaces(newTypeName, ns) == null)
							{
								AddTypeToCodeDom(newTypeName, schema.Items);//so add casual type recursively
								var typeNameX = TypeRefHelper.ArrayAsIEnumerableDerivedToType(newTypeName, settings.ArrayAs);
								TypeAliasDic.Add(refId, typeNameX);
								Trace.TraceInformation($"TypeAliasDic.Add({refId}, {typeNameX}) -- generated: {newTypeName}");
							}
						}
						else if (!String.IsNullOrEmpty(schema.Items.Type)) // add type alias as something like "using Code_frequency_stat = int[];"
						{
							var clrType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(schema.Items.Type, schema.Items.Format);
							var typeNameX = TypeRefHelper.ArrayAsIEnumerableDerivedToType(clrType.Name, settings.ArrayAs);
							TypeAliasDic.Add(refId, typeNameX);
						}
						else
						{
							RemoveRegisteredSchemaRefId(refId);
							Trace.TraceWarning($"Not yet support array type with casual items type without reference and without casual properties: {refId}. Skipped.");
						}

						return;
					}

					string typeNs = NameFunc.GetNamespaceOfClassName(itemsRef.Id);
					string typeName = NameFunc.RefineTypeName(itemsRef.Id, typeNs);
					CodeTypeDeclaration existing = FindCodeTypeDeclarationInNamespaces(typeName, typeNs);
					if (existing == null) //so process itemsRef.Id first before considering type alias
					{
						AddTypeToCodeDom(itemsRef.Id, FindSchema(itemsRef.Id));
						RemoveRegisteredSchemaRefId(itemsRef.Id);
					}

					//Array type with ref to the other type
					if (TypeAliasDic.TryGet(itemsRef.Id, out string arrayTypeAlias))
					{
						var typeNameX = TypeRefHelper.ArrayAsIEnumerableDerivedToType(arrayTypeAlias, settings.ArrayAs);
						TypeAliasDic.Add(refId, typeNameX);
						Trace.TraceInformation($"TypeAliasDic.Add({refId}, {typeNameX}) with existing ({itemsRef.Id}, {arrayTypeAlias})");
					}
					else
					{
						var typeNameX = TypeRefHelper.ArrayAsIEnumerableDerivedToType(itemsRef.Id, settings.ArrayAs);
						TypeAliasDic.Add(refId, typeNameX);
						Trace.TraceInformation($"TypeAliasDic.Add({refId}, {typeNameX})");
					}
				}
				else if (type != "object" && !String.IsNullOrEmpty(type))
				{
					Type clrType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(type, null);
					TypeAliasDic.Add(refId, clrType.FullName);
					Trace.TraceInformation($"TypeAliasDic.Add({refId}, {clrType.FullName}) -- clrType: {clrType.FullName}");
				}
				else if (type == "object" || String.IsNullOrEmpty(type))//object alias without properties
				{
					typeDeclaration = AddTypeToClassNamespace(currentTypeName, ns);
					CreateTypeDocComment(refId, schema, typeDeclaration);

					if (settings.DecorateDataModelWithDataContract)
					{
						typeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.DataContract", new CodeAttributeArgument("Namespace", new CodeSnippetExpression($"\"{settings.DataContractNamespace}\""))));
					}

					if (settings.DecorateDataModelWithSerializable)
					{
						typeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.SerializableAttribute"));
					}
				}
				else
				{
					Trace.TraceInformation($"Type Alias {refId} for type {type} is skipped.");
					RemoveRegisteredSchemaRefId(refId);
					return;
				}

				if (typeDeclaration != null)
				{
					Trace.TraceInformation($"clientClass {currentTypeName} created for {refId}");
				}
				else
				{
					Trace.TraceInformation($"Candidate clientClass {currentTypeName} for {refId} is skipped");
				}
			}
			else //for enum
			{
				typeDeclaration = PodGenHelper.CreatePodClientEnum(ClientNamespace, currentTypeName);
				CreateTypeDocComment(refId, schema, typeDeclaration);
				AddEnumMembers(typeDeclaration, enumTypeList);

				if (settings.DecorateDataModelWithDataContract)
				{
					typeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.DataContract", new CodeAttributeArgument("Namespace", new CodeSnippetExpression($"\"{settings.DataContractNamespace}\""))));
					//net 5.0 https://docs.microsoft.com/en-us/dotnet/standard/serialization/system-text-json-customize-properties#enums-as-strings
					if (settings.EnumToString)
					{
						if (settings.UseSystemTextJson)
						{
							//[System.Text.Json.Serialization.JsonConverter(typeof(System.Text.Json.Serialization.JsonStringEnumConverter))]
							typeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.Text.Json.Serialization.JsonConverter", new CodeAttributeArgument(new CodeSnippetExpression("typeof(System.Text.Json.Serialization.JsonStringEnumConverter)"))));
						}
						else
						{
							//[JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]
							typeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("Newtonsoft.Json.JsonConverter", new CodeAttributeArgument(new CodeSnippetExpression("typeof(Newtonsoft.Json.Converters.StringEnumConverter)"))));
						}
					}
				}

				if (settings.DecorateDataModelWithSerializable)
				{
					typeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.SerializableAttribute"));
				}

				Trace.TraceInformation("client enum: " + currentTypeName);
			}

			RemoveRegisteredSchemaRefId(refId);
		}

		public override void AddEnumMembers(CodeTypeDeclaration typeDeclaration, IList<IOpenApiAny> enumTypeList)
		{
			//if (typeDeclaration.Name== "ResourceType")
			//{
			//	Console.WriteLine("here");
			//}
			int k = 0;
			foreach (IOpenApiAny enumMember in enumTypeList)
			{
				if (enumMember is OpenApiString stringMember)
				{
					var stringMemberValue = stringMember.Value;
					if (settings.UsePascalCase)
					{
						stringMemberValue = stringMemberValue.ToPascalCase();
					}

					string memberName = NameFunc.RefineEnumMemberName(stringMemberValue, settings);
					bool hasFunkyMemberName = memberName != stringMemberValue;
					int intValue = k;
					CodeMemberField clientField = new()
					{
						Name = memberName,
						InitExpression = new CodePrimitiveExpression(intValue),
					};

					if (settings.DecorateDataModelWithDataContract)
					{
						if (hasFunkyMemberName || settings.EnumToString)
						{
							clientField.CustomAttributes.Add(new CodeAttributeDeclaration($"System.Runtime.Serialization.EnumMemberAttribute", new CodeAttributeArgument("Value", new CodeSnippetExpression($"\"{stringMemberValue}\""))));
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
					string memberName = NameFunc.RefineEnumMemberName(intMember.Value.ToString());//take care of negative value
					int intValue = intMember.Value;
					CodeMemberField clientField = new()
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
					string memberName = NameFunc.RefineEnumMemberName(longMember.Value.ToString());
					long longValue = longMember.Value;
					CodeMemberField clientField = new()
					{
						Name = memberName,
						InitExpression = new CodePrimitiveExpression(longValue),
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
					CodeMemberField clientField = new()
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
					double doubleValue = doubleMember.Value;
					CodeMemberField clientField = new()
					{
						Name = memberName,
						InitExpression = new CodePrimitiveExpression(doubleValue),
					};

					if (settings.DecorateDataModelWithDataContract)
					{
						clientField.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.EnumMemberAttribute"));
					}

					typeDeclaration.Members.Add(clientField);
					k++;
				}
				else if (enumMember is OpenApiFloat floatMember)
				{
					string memberName = "_" + floatMember.Value.ToString();
					double floatValue = floatMember.Value;
					CodeMemberField clientField = new()
					{
						Name = memberName,
						InitExpression = new CodePrimitiveExpression(floatValue),
					};

					if (settings.DecorateDataModelWithDataContract)
					{
						clientField.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.EnumMemberAttribute"));
					}

					typeDeclaration.Members.Add(clientField);
					k++;
				}
				else if (enumMember is OpenApiNull nullMember) //listennotes.com\2.0 has funky definition of casual enum of type double
				{
					string memberName = "_null";
					CodeMemberField clientField = new()
					{
						Name = memberName,
						InitExpression = new CodePrimitiveExpression(k),
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
					var enumMemberType = enumMember.GetType();
					throw new ArgumentException($"Not yet supported enumMember of {enumMemberType} with {typeDeclaration.Name}");
				}
			}
		}

		protected override void AddProperty(string refId, OpenApiSchema propertySchema, CodeTypeDeclaration typeDeclaration, OpenApiSchema schema, string currentTypeName, string ns)
		{
			string propertyName = NameFunc.RefinePropertyName(refId);
			if (refId == "sortOrder")
			{
				Console.WriteLine("OK");
			}
			if (settings.UsePascalCase)
			{
				propertyName = propertyName.ToPascalCase();
			}

			if (propertyName == currentTypeName)
			{
				Trace.TraceWarning($"Property {propertyName} found with the same name of type {currentTypeName}, and it is renamed to {propertyName}1.");
				propertyName += "1";
			}

			if (!Char.IsLetter(propertyName[0]) && propertyName[0] != '_')
			{
				propertyName = "_" + propertyName;
			}

			bool propertyNameAdjusted = propertyName != refId;

			string primitivePropertyType = propertySchema.Type;
			bool isPrimitiveType = TypeRefHelper.IsPrimitiveTypeOfOA(primitivePropertyType);
			bool isRequired = schema.Required.Contains(refId); //compare with the original key
			string defaultValue = GetDefaultValue(propertySchema);
			CodeMemberField clientProperty;

			if (String.IsNullOrEmpty(primitivePropertyType))
			{
				if (propertySchema.Reference != null)
				{
					string propertyTypeNs = NameFunc.GetNamespaceOfClassName(propertySchema.Reference.Id);
					string propertyTypeName = NameFunc.RefineTypeName(propertySchema.Reference.Id, propertyTypeNs);
					string propertyTypeWithNs = NameFunc.CombineNamespaceWithClassName(propertyTypeNs, propertyTypeName);
					CodeTypeReference ctr = ComponentsHelper.TranslateTypeNameToClientTypeReference(propertyTypeWithNs);
					clientProperty = CreateProperty(ctr, propertyName, defaultValue); //C#
				}
				//else if (propertySchema.AllOf != null && propertySchema.AllOf.Count > 0)
				//{
				//	var reference = propertySchema.AllOf[0].Reference;
				//	string propertyTypeNs = NameFunc.GetNamespaceOfClassName(reference.Id);
				//	string propertyTypeName = NameFunc.RefineTypeName(reference.Id, propertyTypeNs);
				//	string propertyTypeWithNs = NameFunc.CombineNamespaceWithClassName(propertyTypeNs, propertyTypeName);
				//	CodeTypeReference ctr = ComponentsHelper.TranslateTypeNameToClientTypeReference(propertyTypeWithNs);
				//	clientProperty = CreateProperty(ctr, propertyName, defaultValue); //C#
				//}
				else
				{
					if (propertySchema.Enum.Count > 0) //for casual enum along with defaultValue
					{
						clientProperty = GenerateCasualEnumForProperty(propertySchema, typeDeclaration.Name, propertyName, ns ?? settings.ClientNamespace, defaultValue, !isRequired || propertySchema.Nullable);
					}
					else
					{
						Tuple<CodeTypeReference, bool> r = CreateCodeTypeReferenceSchemaOf(propertySchema, currentTypeName, refId);
						bool isClass = r.Item2;
						if ((!settings.DisableSystemNullableByDefault && !isRequired || propertySchema.Nullable) && !isClass) //C#. 
																															  //if (!settings.DisableSystemNullableByDefault && !isClass && !isRequired || propertySchema.Nullable) //C#
						{
							clientProperty = CreateNullableProperty(r.Item1, propertyName);
						}
						else if (isClass && propertySchema.Nullable && settings.UseNullableReferenceType) //vimeo yaml declares a reference type as nullable.
						{
							clientProperty = CreateNullableProperty(r.Item1, propertyName);
						}
						else
						{
							clientProperty = CreateProperty(r.Item1, propertyName, defaultValue);
						}
					}
				}
			}
			else
			{
				if (primitivePropertyType == "array") // for array
				{
					CodeTypeReference arrayCodeTypeReference;
					var foundCodeTypeDeclaration = FindCodeTypeDeclarationInNamespaces(currentTypeName, ns);
					string n;
					if (foundCodeTypeDeclaration == null)
					{
						Tuple<CodeTypeReference, string> r = CreateArrayCodeTypeReference(propertySchema, typeDeclaration.Name, propertyName, currentTypeName, ns);
						arrayCodeTypeReference = r.Item1;
						n = String.IsNullOrEmpty(r.Item2) ? propertyName : r.Item2;
					}
					else
					{
						if (TypeAliasDic.TryGet(propertySchema.Reference?.Id, out string aliasTypeName))
						{
							arrayCodeTypeReference = new CodeTypeReference(aliasTypeName);
							n = propertyName;
						}
						else
						{
							Tuple<CodeTypeReference, string> r = CreateArrayCodeTypeReference(propertySchema, typeDeclaration.Name, propertyName, currentTypeName, ns);
							arrayCodeTypeReference = r.Item1;
							n = String.IsNullOrEmpty(r.Item2) ? propertyName : r.Item2;
						}
					}

					clientProperty = CreateProperty(arrayCodeTypeReference, n, defaultValue);
				}
				else if (propertySchema.Enum.Count == 0 && propertySchema.Reference != null && !isPrimitiveType) // for complex type
				{
					CodeTypeReference complexCodeTypeReference = CreateComplexCodeTypeReference(propertySchema);
					clientProperty = CreateProperty(complexCodeTypeReference, propertyName, defaultValue);
				}
				else if (propertySchema.Reference == null && propertySchema.Properties != null && propertySchema.Properties.Count > 0) // for casual type
				{
					var casualTypeName = settings.PrefixWithTypeName ? currentTypeName + NameFunc.RefinePropertyName(propertyName) : NameFunc.RefinePropertyName(propertyName);
					CodeTypeDeclaration found = FindCodeTypeDeclarationInNamespaces(casualTypeName, null); //It could happenen when generating sync and async functions in C#
					if (found == null)
					{
						CodeTypeDeclaration casualTypeDeclaration = AddTypeToClassNamespace(casualTypeName, null);//stay with the namespace of the host class
						AddProperties(casualTypeDeclaration, propertySchema, casualTypeName, null);
					}

					CodeTypeReference ctr = TypeRefHelper.TranslateToClientTypeReference(casualTypeName);
					clientProperty = CreateProperty(ctr, propertyName, defaultValue);
				}
				else if (primitivePropertyType == "object" && propertySchema.AdditionalProperties != null) // for dictionary
				{
					CodeTypeReference dicKeyTypeRef = TypeRefHelper.TranslateToClientTypeReference(typeof(string));
					CodeTypeReference dicValueTypeRef;
					if (propertySchema.AdditionalProperties.Properties.Count == 0 //not casual type
						&& propertySchema.AdditionalProperties.Reference == null // not complex type
						&& propertySchema.AdditionalProperties.Items == null // not casual array type
						&& (propertySchema.AdditionalProperties.Type == null || propertySchema.AdditionalProperties.Type == "object"))
					{
						dicValueTypeRef = new CodeTypeReference(typeof(object));
					}
					else
					{
						dicValueTypeRef = PropertySchemaToCodeTypeReference(propertySchema.AdditionalProperties, typeDeclaration.Name, propertyName);
					}

					CodeTypeReference dicCtr = new(typeof(Dictionary<,>).FullName, dicKeyTypeRef, dicValueTypeRef); //for client codes, Dictionary is better than IDictionary, no worry of different implementation of IDictionary
					clientProperty = CreateProperty(dicCtr, propertyName, null);
				}
				else if (propertySchema.Enum.Count == 0) // for primitive type
				{
					Type simpleType;
					bool isDateOnly = false;
					if (primitivePropertyType == "string" && propertySchema.Format == "date" && !settings.DateToDateOnly)
					{
						simpleType = typeof(DateTimeOffset);
						isDateOnly = true;
					}
					else if (primitivePropertyType == "string" && propertySchema.Format == "uuid" && settings.UseGuid)
					{
						simpleType = typeof(Guid);
					}
					else
					{
						simpleType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(primitivePropertyType, propertySchema.Format);
					}

					if ((!settings.DisableSystemNullableByDefault && !isRequired || propertySchema.Nullable) && !simpleType.IsClass) //C#
					{
						clientProperty = CreateNullableProperty(propertyName, simpleType, settings, propertySchema.Nullable);
					}
					else if (propertySchema.Nullable && simpleType.IsClass && settings.UseNullableReferenceType)
					{
						clientProperty = CreateNullableProperty(propertyName, simpleType, settings, propertySchema.Nullable);
					}
					else
					{
						clientProperty = CreateProperty(propertyName, simpleType, defaultValue);
					}

					if (isDateOnly)
					{
						clientProperty.CustomAttributes.Add(new CodeAttributeDeclaration("System.ComponentModel.DataAnnotations.DataTypeAttribute", new CodeAttributeArgument(new CodeSnippetExpression("System.ComponentModel.DataAnnotationsDataType.Date"))));
					}
				}
				else if (propertySchema.Enum.Count > 0 && primitivePropertyType == "string") // for enum
				{
					string[] enumMemberNames;
					try
					{
						enumMemberNames = (String.IsNullOrEmpty(primitivePropertyType) || primitivePropertyType == "string")
							? GetStringsFromEnumList(propertySchema.Enum)
							: propertySchema.Enum.Cast<OpenApiInteger>().Select(m => "_" + m.Value.ToString()).ToArray();

						// It's also needed here to provide enums in correct case for the FindEnumDeclaration function
						if (settings.UsePascalCase)
						{
							for (var i = 0; i < propertySchema.Enum.Count; i++)
							{
								if (propertySchema.Enum[i] is OpenApiString str)
								{
									propertySchema.Enum[i] = new OpenApiString(str.Value.ToPascalCase());
								}
							}
							enumMemberNames = enumMemberNames.Select(e => e.ToPascalCase()).ToArray();
						}

					}
					catch (InvalidCastException ex)
					{
						throw new CodeGenException($"When dealing with {propertyName} of {primitivePropertyType}, error: {ex.Message}");
					}

					CodeTypeDeclaration existingDeclaration = FindEnumDeclaration(enumMemberNames);
					if (existingDeclaration != null)
					{
						string existingTypeName = existingDeclaration.Name;
						CodeTypeReference enumReference = TypeRefHelper.TranslateToClientTypeReference(existingTypeName);
						clientProperty = CreateProperty(enumReference, propertyName, String.IsNullOrEmpty(defaultValue) ? null : enumReference.BaseType + "." + defaultValue);
					}
					else
					{
						clientProperty = GenerateCasualEnumForProperty(propertySchema, typeDeclaration.Name, propertyName, ns ?? settings.ClientNamespace, defaultValue, !isRequired || propertySchema.Nullable);
					}
				}
				else if (primitivePropertyType != "string" && TypeAliasDic.TryGet(primitivePropertyType, out string aliasTypeName)) //check TypeAliasDic
				{
					CodeTypeReference r = new(aliasTypeName);
					clientProperty = CreateProperty(r, propertyName, defaultValue);
				}
				else if (propertySchema.Reference != null)
				{
					CodeTypeReference complexCodeTypeReference = CreateComplexCodeTypeReference(propertySchema);
					clientProperty = CreateProperty(complexCodeTypeReference, propertyName, String.IsNullOrEmpty(defaultValue) ? null : complexCodeTypeReference.BaseType + "." + defaultValue);
				}
				else // for casual enum
				{
					clientProperty = GenerateCasualEnumForProperty(propertySchema, typeDeclaration.Name, propertyName, ns ?? settings.ClientNamespace, defaultValue, !isRequired || propertySchema.Nullable);
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
					string originalPropertyName = refId;
					clientProperty.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.DataMember", new CodeAttributeArgument("Name", new CodeSnippetExpression($"\"{originalPropertyName}\""))));
				}
				else
				{
					clientProperty.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.DataMember"));
				}
			}

			if (settings.DataAnnotationsEnabled) //C#
			{
				AddValidationAttributes(propertySchema, clientProperty);
			}

			if (settings.DecorateDataModelWithPropertyName) //C#
			{
				string originalPropertyName = refId;
				if (settings.UseSystemTextJson)
				{
					//[System.Text.Json.Serialization.JsonPropertyName("name")]
					clientProperty.CustomAttributes.Add(new CodeAttributeDeclaration("System.Text.Json.Serialization.JsonPropertyName", new CodeAttributeArgument(new CodeSnippetExpression($"\"{originalPropertyName}\""))));
				}
				else
				{
					//[Newtonsoft.Json.JsonProperty(PropertyName = "name")]
					clientProperty.CustomAttributes.Add(new CodeAttributeDeclaration("Newtonsoft.Json.JsonProperty", new CodeAttributeArgument("PropertyName", new CodeSnippetExpression($"\"{originalPropertyName}\""))));
				}
			}

			CreateMemberDocComment(refId, propertySchema, clientProperty, schema);
			typeDeclaration.Members.Add(clientProperty);
		}

		CodeMemberField GenerateCasualEnumForProperty(OpenApiSchema propertySchema, string typeDeclarationName, string propertyName, string ns, string defaultValue, bool isNullable)
		{
			Tuple<CodeTypeReference, CodeTypeDeclaration> r = GenerateCasualEnum(propertySchema, typeDeclarationName, propertyName, ns);
			if (r.Item2 != null)
			{
				if (settings.DecorateDataModelWithDataContract) // C# specific
				{
					r.Item2.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.DataContract", new CodeAttributeArgument("Namespace", new CodeSnippetExpression($"\"{settings.DataContractNamespace}\""))));

					if (settings.EnumToString)
					{
						if (settings.UseSystemTextJson)
						{
							//[System.Text.Json.Serialization.JsonConverter(typeof(System.Text.Json.Serialization.JsonStringEnumConverter))]
							r.Item2.CustomAttributes.Add(new CodeAttributeDeclaration("System.Text.Json.Serialization.JsonConverter", new CodeAttributeArgument(new CodeSnippetExpression("typeof(System.Text.Json.Serialization.JsonStringEnumConverter)"))));

						}
						else
						{
							//[JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]
							r.Item2.CustomAttributes.Add(new CodeAttributeDeclaration("JsonConverter", new CodeAttributeArgument(new CodeSnippetExpression("typeof(Newtonsoft.Json.Converters.StringEnumConverter)"))));
						}
					}
				}

				if (settings.DecorateDataModelWithSerializable)
				{
					r.Item2.CustomAttributes.Add(new CodeAttributeDeclaration("System.SerializableAttribute"));
				}
			}

			return isNullable ? CreateNullableProperty(r.Item1, propertyName)
				: CreateProperty(r.Item1, propertyName,
				defaultValue == null ? null : (r.Item2 == null ? "" : r.Item2.Name + "." + defaultValue));
		}

		string GetDefaultValue(OpenApiSchema s)
		{
			if (s.Default == null)
			{
				return null;
			}

			if (s.Default is OpenApiString stringValue)
			{
				if (s.Enum == null || s.Enum.Count == 0) //Sometimes people make make a number default with value string. And this mistake seems common. Better to tolerate.
				{
					if (s.Type == "string")
					{
						// Handle a blank default date/date-time otherwise the code generated is invalid DateOnly or DateTimeOffset name { get; set; } = "";
						if (s.Format is "date" or "date-time")
						{
							if (string.IsNullOrEmpty(stringValue.Value))
							{
								return null;
							}
						}

						return "\"" + EscapeString(stringValue.Value) + "\"";
					}

					if (s.AllOf != null && s.AllOf.Count > 0)
					{
						var typeRef = s.AllOf[0].Reference.Id;
						var refinedTypeName = NameFunc.RefineTypeName(typeRef, "");
						return $"{refinedTypeName}.{stringValue.Value}";
					}

					return stringValue.Value;
				}
				else //enum
				{
					return NameFunc.RefineEnumValue(stringValue.Value);
				}
			}

			if (s.Default is OpenApiInteger integerValue)
			{
				return (s.Enum == null || s.Enum.Count == 0) ? integerValue.Value.ToString() : NameFunc.RefineEnumValue(integerValue.Value.ToString());
			}

			if (s.Default is OpenApiBoolean boolValue)
			{
				return boolValue.Value ? "true" : "false";
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

		protected override void CreateMemberDocComment(string refId, OpenApiSchema memberSchema, CodeMemberField property, OpenApiSchema modelSchema)
		{
			string typeComment = memberSchema.Description;
			if (settings.DataAnnotationsToComments)
			{
				List<string> ss = ComponentsHelper.GetCommentsFromAnnotations(memberSchema, refId, modelSchema);
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

		protected override void CreateTypeDocComment(string refId, OpenApiSchema typeSchema, CodeTypeMember typeDeclaration)
		{
			string typeComment = typeSchema.Description;
			if (String.IsNullOrEmpty(typeComment))
			{
				return;
			}

			AddDocComments(typeComment, typeDeclaration.Comments);

		}

		static CodeMemberField CreateNullableProperty(string propertyName, Type type, Settings settings, bool propertyNullable = false)
		{
			//if (!propertyNullable && !settings.UseNullableValueType)
			//{
			//	Debug.Assert(type.IsValueType);
			//}

			// This is a little hack. Since you cant create auto properties in CodeDOM,
			//  we make the getter and setter part of the member name.
			// This leaves behind a trailing semicolon that we comment out.
			//  Later, we remove the commented out semicolons.
			string memberName = propertyName + " { get; set; }//";

			var typeName = settings.UseNullableQuestionMark ? $"{type.FullName}?" : $"System.Nullable<{type.FullName}>";
			//c# 8.0 - compat for types that don't support nullable and openapi is set to nullable and not using UseCSharpNullable
			//i.e: OpenapiDirectoryTests Test_randommer, Test_vimeo and Test_wheretocredit
			if (propertyNullable)
			{
				if (typeof(String) == type)
					typeName = $"{type.FullName}?";
			}

			CodeMemberField result = new(typeName, memberName)
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final,
			};
			return result;
		}

		CodeMemberField CreateNullableProperty(CodeTypeReference codeTypeReference, string propertyName)
		{
			// This is a little hack. Since you cant create auto properties in CodeDOM,
			//  we make the getter and setter part of the member name.
			// This leaves behind a trailing semicolon that we comment out.
			//  Later, we remove the commented out semicolons.
			string memberName = propertyName + " { get; set; }//";

			CodeMemberField result = new(settings.UseNullableQuestionMark ? $"{codeTypeReference.BaseType}?" : $"System.Nullable<{codeTypeReference.BaseType}>", memberName)
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final
			};
			return result;
		}

		//CodeMemberField CreateProperty(string propertyName, string typeName, string defaultValue)
		//{
		//	string memberName = propertyName + (defaultValue == null || !settings.DataAnnotationsEnabled ? " { get; set; }//" : $" {{ get; set; }} = {defaultValue};//");

		//	CodeMemberField result = new CodeMemberField() { Type = ComponentsHelper.TranslateTypeNameToClientTypeReference(typeName), Name = memberName };
		//	result.Attributes = MemberAttributes.Public | MemberAttributes.Final;
		//	return result;
		//}

		CodeMemberField CreateProperty(string propertyName, Type type, string defaultValue)
		{
			// This is a little hack. Since you cant create auto properties in CodeDOM,
			//  we make the getter and setter part of the member name.
			// This leaves behind a trailing semicolon that we comment out.
			//  Later, we remove the commented out semicolons.
			string memberName = propertyName + (defaultValue == null || !settings.DataAnnotationsEnabled ? " { get; set; }//" : $" {{ get; set; }} = {defaultValue};//");

			CodeMemberField result = new() { Type = TypeRefHelper.TranslateToClientTypeReference(type), Name = memberName };
			result.Attributes = MemberAttributes.Public | MemberAttributes.Final;

			if (!String.IsNullOrEmpty(defaultValue))
			{
				result.CustomAttributes.Add(new CodeAttributeDeclaration("System.ComponentModel.DefaultValue", new CodeAttributeArgument(new CodeSnippetExpression(defaultValue))));
			}

			return result;
		}

		CodeMemberField CreateProperty(CodeTypeReference codeTypeReference, string propertyName, string defaultValue)
		{
			string memberName = propertyName + (defaultValue == null || !settings.DataAnnotationsEnabled ? " { get; set; }//" : $" {{ get; set; }} = {defaultValue};//");

			CodeMemberField result = new(codeTypeReference, memberName)
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final
			};

			if (!String.IsNullOrEmpty(defaultValue))
			{
				result.CustomAttributes.Add(new CodeAttributeDeclaration("System.ComponentModel.DefaultValue", new CodeAttributeArgument(new CodeSnippetExpression(defaultValue))));
			}

			return result;
		}

		/// <summary>
		/// Add Type as class.
		/// </summary>
		/// <param name="typeName"></param>
		/// <param name="ns"></param>
		/// <returns></returns>
		public override CodeTypeDeclaration AddTypeToClassNamespace(string typeName, string ns)
		{
			if (String.IsNullOrEmpty(ns))
			{
				return PodGenHelper.CreatePodClientClass(ClientNamespace, typeName);
			}
			else
			{
				CodeNamespace foundNamespace = ClassNamespaces.Find(d => d.Name == ns);
				if (foundNamespace == null)
				{
					foundNamespace = AddNamespaceDeclarationIfNotExist(ns);

				}

				return PodGenHelper.CreatePodClientClass(foundNamespace, typeName);
			}
		}

		protected override void AddValidationAttributes(OpenApiSchema fieldSchema, CodeMemberField memberField)
		{
			base.AddValidationAttributes(fieldSchema, memberField);

			if (!string.IsNullOrEmpty(fieldSchema.Pattern))
			{
				var escapedPattern = fieldSchema.Pattern.Replace("\"", "\"\"").Replace("\\0", "0o"); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_octal
																									 //openapi-directory\APIs\amazonaws.com\AWSMigrationHub\2017-05-31 has the deprecated expression of octal
				var ps = $"@\"{escapedPattern}\"";
				CodeSnippetExpression patternTextExpression = new(ps);
				CodeAttributeDeclaration pa = new("System.ComponentModel.DataAnnotations.RegularExpressionAttribute", new CodeAttributeArgument(patternTextExpression));
				//Console.WriteLine(ps);
				memberField.CustomAttributes.Add(pa);
			}
		}

		void AddTypeAlias(string typeName, string alias)
		{
			ClientNamespace.Imports.Add(new CodeNamespaceImport($"{typeName} = {alias}"));
		}
	}

}
