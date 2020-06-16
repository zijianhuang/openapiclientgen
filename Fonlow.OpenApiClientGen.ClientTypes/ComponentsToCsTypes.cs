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
		}

		public CodeNamespace ClientNamespace { get; private set; }

		readonly CodeCompileUnit codeCompileUnit;

		readonly Settings settings;

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

			var schemas = components.Schemas;//.OrderBy(d => d.Value.Reference != null).OrderBy(k => k.Value.Properties.Count > 0).OrderBy(g => g.Value.AllOf.Count > 0).OrderBy(d => d.Value.Type != "array"); //so simple complex types will be handled first to be referenced by more complex ones.

			foreach (KeyValuePair<string, OpenApiSchema> item in schemas)
			{
				var existingType = FindTypeDeclaration(ToTitleCase(item.Key));
				if (existingType == null)
				{
					AddTypeToClientNamespace(item);
				}
			}

		}

		public void AddTypeToClientNamespace(KeyValuePair<string, OpenApiSchema> item)
		{
			currentTypeName = ToTitleCase(item.Key);
			OpenApiSchema schema = item.Value;

			string type = schema.Type;
			IList<OpenApiSchema> allOfBaseTypeSchemaList = schema.AllOf; //maybe empty
			IList<IOpenApiAny> enumTypeList = schema.Enum; //maybe empty
			bool isForClass = enumTypeList.Count == 0;
			//IDictionary<string, OpenApiSchema> schemaProperties = schema.Properties;
			CodeTypeDeclaration typeDeclaration;
			if (isForClass)
			{
				if (schema.Properties.Count > 0 || (schema.Properties.Count == 0 && allOfBaseTypeSchemaList.Count > 1))
				{
					typeDeclaration = PodGenHelper.CreatePodClientClass(ClientNamespace, currentTypeName);
					if (String.IsNullOrEmpty(type) && allOfBaseTypeSchemaList.Count > 0)
					{
						OpenApiSchema allOfRef = allOfBaseTypeSchemaList[0];
						string baseTypeName = allOfRef.Reference.Id; //pointing to parent class
						typeDeclaration.BaseTypes.Add(baseTypeName);

						OpenApiSchema allOfProperteisSchema = allOfBaseTypeSchemaList[1]; //the 2nd one points to properties of the derived type, while the 1st one points to the base type.
						AddProperties(typeDeclaration, allOfProperteisSchema);
					}

					CreateTypeDocComment(item, typeDeclaration);

					AddProperties(typeDeclaration, schema);

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
					if (TypeAliasDic.Instance.TryGet(itemsRef.Id, out string arrayTypeAlias))
					{
						TypeAliasDic.Instance.Add(item.Key, $"{arrayTypeAlias}[]");
						Trace.TraceInformation($"arrayTypeAlias: {arrayTypeAlias} for {item.Key} added.");

						//typeDeclaration = PodGenHelper.CreatePodClientClass(ClientNamespace, currentTypeName);
						//typeDeclaration.BaseTypes.Add($"System.Collections.ObjectModel.Collection<{arrayTypeAlias}>");
					}
					else
					{
						TypeAliasDic.Instance.Add(item.Key, $"{itemsRef.Id}[]");
						Trace.TraceInformation($"arrayTypeAlias: {itemsRef.Id}[] for {item.Key} added.");
					}
				}
				else if (type != "object" && !String.IsNullOrEmpty(type))
				{
					var clrType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(type, null);
					TypeAliasDic.Instance.Add(item.Key, clrType.FullName);
					Trace.TraceInformation($"TypeAlias {item.Key} for {clrType.FullName} added.");
				}
				else
				{
					Trace.TraceInformation($"Type Alias {item.Key} is skipped:.");
					return;
				}

				Trace.TraceInformation("clientClass: " + currentTypeName);
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

		}

		void AddEnumMembers(CodeTypeDeclaration typeDeclaration, IList<IOpenApiAny> enumTypeList)
		{
			int k = 0;
			foreach (IOpenApiAny enumMember in enumTypeList)
			{
				if (enumMember is OpenApiString stringMember)
				{
					string memberName = stringMember.Value.Replace('.', '_').Replace('-', '_').Replace(' ', '_').Replace('/', '_').Replace("(", "").Replace(")", "");//amazon ec2 api , enum with dot and hyphen in enum members
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
					string memberName = passwordMember.Value.Replace('.', '_').Replace('-', '_').Replace(' ', '_').Replace('/', '_').Replace("(", "").Replace(")", "");
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

		string currentTypeName;

		void AddProperties(CodeTypeDeclaration typeDeclaration, OpenApiSchema schema)
		{
			foreach (KeyValuePair<string, OpenApiSchema> p in schema.Properties)
			{
				string propertyName = ToTitleCase(p.Key);
				if (propertyName == currentTypeName)
				{
					propertyName += "1";
				}

				OpenApiSchema propertySchema = p.Value;
				string primitivePropertyType = propertySchema.Type;
				bool isPrimitiveType = TypeRefBuilder.IsPrimitiveType(primitivePropertyType);
				bool isRequired = schema.Required.Contains(p.Key); //compare with the original key
				string defaultValue = GetDefaultValue(propertySchema);
				//Debug.Assert(propertyName != "HuntingSkill");
				CodeMemberField clientProperty;
				if (String.IsNullOrEmpty(primitivePropertyType))
				{
					OpenApiSchema refToType = null;
					if (propertySchema.Reference != null)
					{
						string typeId = ToTitleCase(propertySchema.Reference.Id);
						clientProperty = CreateProperty(propertyName, typeId, defaultValue);
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

						string customPropertyType = refToType.Type;
						string customPropertyFormat = refToType.Format;
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
				else
				{
					if (propertySchema.Type == "array") // for array
					{
						OpenApiSchema arrayItemsSchema = propertySchema.Items;

						if (arrayItemsSchema.Reference != null) //array of custom type
						{
							string arrayTypeName = arrayItemsSchema.Reference.Id;
							if (TypeAliasDic.Instance.TryGet(arrayTypeName, out string arrayTypeNameAlias))
							{
								var clrType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(arrayTypeNameAlias, null);
								CodeTypeReference arrayCodeTypeReference = CreateArrayOfCustomTypeReference(clrType.FullName, 1);
								clientProperty = CreateProperty(arrayCodeTypeReference, propertyName, defaultValue);
							}
							else
							{
								CodeTypeReference arrayCodeTypeReference = CreateArrayOfCustomTypeReference(arrayTypeName, 1);
								clientProperty = CreateProperty(arrayCodeTypeReference, propertyName, defaultValue);
							}
						}
						else
						{
							string arrayType = arrayItemsSchema.Type;
							if (arrayItemsSchema.Properties != null && arrayItemsSchema.Properties.Count > 0) // for casual type
							{
								string casualTypeName = typeDeclaration.Name + ToTitleCase(propertyName);
								CodeTypeDeclaration casualTypeDeclaration = PodGenHelper.CreatePodClientClass(ClientNamespace, casualTypeName);
								AddProperties(casualTypeDeclaration, arrayItemsSchema);
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
						string complexType = ToTitleCase(propertySchema.Reference.Id);
						var existingType = FindTypeDeclaration(complexType);
						if (existingType == null) // Referencing to a type not yet added to namespace
						{
							AddTypeToClientNamespace(new KeyValuePair<string, OpenApiSchema>(complexType, propertySchema));
							complexType = ToTitleCase(complexType);
						}

						clientProperty = CreateProperty(propertyName, complexType, defaultValue);
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
						string complexType = propertySchema.Reference == null ? null : propertySchema.Reference.Id;
						if (complexType != null)
						{
							complexType = ToTitleCase(complexType);
							var existingType = FindTypeDeclaration(complexType);
							if (existingType == null) // Referencing to a type not yet added to namespace
							{
								AddTypeToClientNamespace(new KeyValuePair<string, OpenApiSchema>(complexType, propertySchema));
							}

							clientProperty = CreateProperty(propertyName, complexType, defaultValue);
						}
						else //for casual enum
						{
							string casualEnumName = typeDeclaration.Name + ToTitleCase(propertyName);
							CodeTypeDeclaration existingType = FindTypeDeclaration(ToTitleCase(casualEnumName));
							if (existingType == null)
							{
								CodeTypeDeclaration casualEnumTypeDeclaration = PodGenHelper.CreatePodClientEnum(ClientNamespace, casualEnumName);
								AddEnumMembers(casualEnumTypeDeclaration, propertySchema.Enum);

								if (settings.DecorateDataModelWithSerializable)
								{
									casualEnumTypeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.SerializableAttribute"));
								}

								clientProperty = CreateProperty(propertyName, casualEnumName, defaultValue == null ? null : (casualEnumName + "." + defaultValue));

								if (settings.DecorateDataModelWithDataContract)
								{
									casualEnumTypeDeclaration.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.DataContract", new CodeAttributeArgument("Name", new CodeSnippetExpression($"\"{settings.DataContractNamespace}\""))));
									clientProperty.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.DataMember"));
								}

								Trace.TraceInformation($"Casual enum {casualEnumName} added for {typeDeclaration.Name}/{propertyName}.");
							}
							else
							{
								clientProperty = CreateProperty(propertyName, casualEnumName, defaultValue == null ? null : (casualEnumName + "." + defaultValue));
							}
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
					clientProperty.CustomAttributes.Add(new CodeAttributeDeclaration("System.Runtime.Serialization.DataMember"));
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
				if (s.Enum == null || s.Enum.Count == 0)
				{
					return "\"" + stringValue.Value + "\"";
				}
				else
				{
					//var enumMemberNames = s.Enum.Cast<OpenApiString>().Select(m => m.Value).ToArray();
					//var existingEnumDeclaration = ClientNamespace.LocateEnumDeclaration(enumMemberNames);
					//return existingEnumDeclaration.Name + "." + stringValue.Value;
					return stringValue.Value;
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

		static string ToTitleCase(string s)
		{
			return String.IsNullOrEmpty(s) ? s : (char.ToUpper(s[0]) + (s.Length > 1 ? s.Substring(1) : String.Empty));
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

		public CodeTypeDeclaration FindTypeDeclaration(string typeName)
		{
			return ClientNamespace.FindTypeDeclaration(typeName);
		}
	}
}
