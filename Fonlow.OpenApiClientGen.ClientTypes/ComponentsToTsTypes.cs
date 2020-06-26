using Fonlow.Poco2Client;
using Fonlow.Reflection;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using System;
using System.Linq;
using System.CodeDom;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	/// <summary>
	/// POCO to TypeScript interfaces generator. Create CodeDOM and output TS codes, with TypeScript CodeDOM provider
	/// </summary>
	public class ComponentsToTsTypes : IComponentToCodeDom
	{
		public ComponentsToTsTypes(Settings settings, CodeCompileUnit codeCompileUnit, CodeNamespace clientNamespace)
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
				using StreamWriter writer = new StreamWriter(fileName);
				WriteCode(writer);
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
		/// Write code with TypeScript CodeDOM
		/// </summary>
		/// <param name="writer"></param>
		void WriteCode(TextWriter writer)
		{
			//if (writer == null)
			//	throw new ArgumentNullException("writer", "No TextWriter instance is defined.");

			using CodeDomProvider provider = new Fonlow.TypeScriptCodeDom.TypeScriptCodeProvider(true);
			CodeGeneratorOptions options = new CodeGeneratorOptions() { BracingStyle = "JS", IndentString = "\t" };
			provider.GenerateCodeFromCompileUnit(codeCompileUnit, writer, options);
		}

		public string WriteToText()
		{
			using StringWriter writer = new StringWriter();
			WriteCode(writer);
			return writer.ToString();
		}

		/// <summary>
		/// Create TypeScript CodeDOM for POCO types. 
		/// For an enum type, all members will be processed regardless of EnumMemberAttribute.
		/// </summary>
		/// <param name="types">POCO types.</param>
		/// <param name="methods"></param>
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

		public void AddTypeToCodeDom(KeyValuePair<string, OpenApiSchema> item)
		{
			var ns = NameFunc.GetNamespaceOfClassName(item.Key);
			string typeName = ToTitleCase(item.Key);
			RegisterSchemaRefIdToBeAdded(item.Key);
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
					typeDeclaration = PodGenHelper.CreatePodClientInterface(ClientNamespace, typeName);
					if (String.IsNullOrEmpty(type) && allOfBaseTypeSchemaList.Count > 0)
					{
						OpenApiSchema allOfRef = allOfBaseTypeSchemaList[0];
						if (allOfRef.Reference == null)
						{
							Trace.TraceWarning($"Not yet support Type {item.Key} having allOf[0] without Reference. Skipped TS gen.");
							return;
						}

						string baseTypeName = NameFunc.RefineTypeName(allOfRef.Reference.Id, ns); //pointing to parent class
						typeDeclaration.BaseTypes.Add(baseTypeName);

						OpenApiSchema allOfProperteisSchema = allOfBaseTypeSchemaList[1];
						AddProperties(typeDeclaration, allOfProperteisSchema, typeName);
					}

					CreateTypeDocComment(item, typeDeclaration);
					//	typeDeclarationDic.Add(typeName, typeDeclaration);

					AddProperties(typeDeclaration, schema, typeName);
				}
				else if (type == "array") // wrapper of array
				{
					OpenApiReference itemsRef = schema.Items.Reference;
					if (itemsRef == null)
					{
						Trace.TraceWarning($"Not yet support array type with casual items type without reference: {item.Key}. Skipped TS gen.");
						return;
					}

					TypeAliasDic.Add(typeName, $"{itemsRef.Id}[]");
				}
				else
				{
					Trace.TraceInformation($"TS Type Alias {typeName} is skipped:.");
					RemoveRegisteredSchemaRefId(item.Key);
					return;
				}

				Trace.TraceInformation("TS client class: " + typeName);
			}
			else
			{
				typeDeclaration = PodGenHelper.CreatePodClientEnum(ClientNamespace, typeName);
				CreateTypeDocComment(item, typeDeclaration);
				AddEnumMembers(typeDeclaration, enumTypeList);
				Trace.TraceInformation("TS client enum: " + typeName);
			}

			RemoveRegisteredSchemaRefId(item.Key);
		}

		static void AddEnumMembers(CodeTypeDeclaration typeDeclaration, IList<IOpenApiAny> enumTypeList)
		{
			int k = 0;
			foreach (IOpenApiAny enumMember in enumTypeList)
			{
				if (enumMember is OpenApiString stringMember)
				{
					string memberName = stringMember.Value;
					int intValue = k;
					CodeMemberField clientField = new CodeMemberField()
					{
						Name = memberName,
						InitExpression = new CodePrimitiveExpression(intValue),
					};

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

					typeDeclaration.Members.Add(clientField);
					k++;
				}
				else if (enumMember is OpenApiInteger longMember)
				{
					string memberName = "_" + longMember.Value.ToString();
					int intValue = k;
					CodeMemberField clientField = new CodeMemberField()
					{
						Name = memberName,
						InitExpression = new CodePrimitiveExpression(intValue),
					};

					typeDeclaration.Members.Add(clientField);
					k++;
				}
				else if (enumMember is OpenApiPassword passwordMember) // aws alexaforbusiness has PhoneNumberType defined as password format
				{
					string memberName = passwordMember.Value;
					int intValue = k;
					CodeMemberField clientField = new CodeMemberField()
					{
						Name = memberName,
						InitExpression = new CodePrimitiveExpression(intValue),
					};

					typeDeclaration.Members.Add(clientField);
					k++;
				}
				else
				{
					throw new ArgumentException($"Not yet supported enumMember of {enumMember.GetType()} with {typeDeclaration.Name}");
				}
			}
		}

		void AddProperties(CodeTypeDeclaration typeDeclaration, OpenApiSchema schema, string currentTypeName)
		{
			foreach (KeyValuePair<string, OpenApiSchema> p in schema.Properties)
			{
				string propertyName = p.Key;
				OpenApiSchema propertySchema = p.Value;
				string primitivePropertyType = propertySchema.Type;
				bool isPrimitiveType = TypeRefBuilder.IsPrimitiveType(primitivePropertyType);
				bool isRequired = schema.Required.Contains(p.Key);//compare with the original key

				CodeMemberField clientProperty;

				void GenerateCasualEnum()
				{
					string casualEnumName = typeDeclaration.Name + ToTitleCase(propertyName);
					CodeTypeDeclaration casualEnumTypeDeclaration = PodGenHelper.CreatePodClientEnum(ClientNamespace, casualEnumName);
					AddEnumMembers(casualEnumTypeDeclaration, propertySchema.Enum);
					clientProperty = CreateProperty(propertyName, casualEnumName, isRequired);
				}

				if (String.IsNullOrEmpty(primitivePropertyType)) // for custom type, pointing to a custom type "$ref": "#/components/schemas/PhoneType"
				{
					OpenApiSchema refToType = null;
					if (propertySchema.Reference != null)
					{
						string typeId = propertySchema.Reference.Id;
						clientProperty = CreateProperty(propertyName, typeId, isRequired);
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
						}

						string customPropertyType = refToType == null ? "System.Object" : refToType.Type;
						string customPropertyFormat = refToType?.Format;
						Type customType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(customPropertyType, customPropertyFormat);
						clientProperty = CreateProperty(propertyName, customType, isRequired);
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
							CodeTypeReference arrayCodeTypeReference = CreateArrayOfCustomTypeReference(arrayTypeName, 1);
							clientProperty = CreateProperty(arrayCodeTypeReference, propertyName, isRequired);
						}
						else
						{
							string arrayType = arrayItemsSchema.Type;
							if (arrayItemsSchema.Properties != null && arrayItemsSchema.Properties.Count > 0) // for casual type
							{
								string casualTypeName = typeDeclaration.Name + ToTitleCase(propertyName);
								CodeTypeDeclaration casualTypeDeclaration = PodGenHelper.CreatePodClientInterface(ClientNamespace, casualTypeName);
								AddProperties(casualTypeDeclaration, arrayItemsSchema, currentTypeName);
								CodeTypeReference arrayCodeTypeReference = CreateArrayOfCustomTypeReference(casualTypeName, 1);
								clientProperty = CreateProperty(arrayCodeTypeReference, casualTypeName, isRequired);
							}
							else
							{
								Type clrType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(arrayType, null);
								CodeTypeReference arrayCodeTypeReference = CreateArrayTypeReference(clrType, 1);
								clientProperty = CreateProperty(arrayCodeTypeReference, propertyName, isRequired);
							}
						}
					}
					else if (propertySchema.Enum.Count == 0 && propertySchema.Reference != null && !isPrimitiveType) // for complex type
					{
						string complexType = propertySchema.Reference.Id;
						clientProperty = CreateProperty(propertyName, complexType, isRequired);
					}
					else if (propertySchema.Enum.Count == 0) // for primitive type
					{
						Type simpleType = TypeRefBuilder.PrimitiveSwaggerTypeToClrType(primitivePropertyType, propertySchema.Format);
						clientProperty = CreateProperty(propertyName, simpleType, isRequired);
					}
					else // for casual enum
					{
						GenerateCasualEnum();
					}
				}

				CreateMemberDocComment(p, clientProperty);

				typeDeclaration.Members.Add(clientProperty);
			}
		}

		static void CreateTypeDocComment(KeyValuePair<string, OpenApiSchema> item, CodeTypeMember declaration)
		{
			if (String.IsNullOrEmpty(item.Value.Description))
				return;

			declaration.Comments.Add(new CodeCommentStatement(item.Value.Description, true));
		}

		void CreateMemberDocComment(KeyValuePair<string, OpenApiSchema> item, CodeMemberField property)
		{
			if (String.IsNullOrEmpty(item.Value.Description))
				return;


			string typeComment = item.Value.Description;
			if (settings.DataAnnotationsToComments)
			{
				List<string> ss = CommentsHelper.GetCommentsFromAnnotations(item.Value);
				if (!String.IsNullOrEmpty(typeComment))
				{
					ss.Insert(0, typeComment);
				}

				property.Comments.Add(new CodeCommentStatement(Fonlow.DocComment.StringFunctions.IndentedArrayToString(ss), true));
			}
			else
			{
				property.Comments.Add(new CodeCommentStatement(typeComment, true));
			}
		}

		CodeMemberField CreateProperty(string propertyName, Type type, bool isRequired)
		{
			string memberName = propertyName + (isRequired ? String.Empty : "?");
			CodeMemberField result = new CodeMemberField() { Type = TranslateToClientTypeReference(type), Name = memberName };
			result.Attributes = MemberAttributes.Public | MemberAttributes.Final;
			return result;
		}

		static CodeMemberField CreateProperty(string propertyName, string typeName, bool isRequired)
		{
			string memberName = propertyName + (isRequired ? String.Empty : "?");
			CodeMemberField result = new CodeMemberField() { Type = TranslateToClientTypeReference(typeName), Name = memberName };
			result.Attributes = MemberAttributes.Public | MemberAttributes.Final;
			return result;
		}

		static CodeMemberField CreateProperty(CodeTypeReference codeTypeReference, string propertyName, bool isRequired)
		{
			string memberName = propertyName + (isRequired ? String.Empty : "?");
			CodeMemberField result = new CodeMemberField(codeTypeReference, memberName)
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final
			};
			return result;
		}

		static string ToTitleCase(string s)
		{
			return String.IsNullOrEmpty(s) ? s : (char.ToUpper(s[0]) + (s.Length > 1 ? s.Substring(1) : String.Empty));
		}

		/// <summary>
		/// Translate a service type into a CodeTypeReference for client.
		/// </summary>
		/// <param name="type">CLR type of the service</param>
		/// <returns></returns>
		public CodeTypeReference TranslateToClientTypeReference(Type type)
		{
			if (type == null)
				return new CodeTypeReference("void");

			if (TypeHelper.IsSimpleType(type))
			{
				string typeText = Fonlow.TypeScriptCodeDom.TypeMapper.MapToTsBasicType(type);
				return new CodeTypeReference(typeText);
			}
			else if (type.IsArray)
			{
				Debug.Assert(type.Name.EndsWith("]"));
				Type elementType = type.GetElementType();
				int arrayRank = type.GetArrayRank();
				return CreateArrayTypeReference(elementType, arrayRank);
			}

			string tsBasicTypeText = Fonlow.TypeScriptCodeDom.TypeMapper.MapToTsBasicType(type);
			if (tsBasicTypeText != null)
				return new CodeTypeReference(tsBasicTypeText);

			CodeTypeReference actionResultTypeReference = TranslateActionResultToClientTypeReference(type);
			if (actionResultTypeReference != null)
			{
				return actionResultTypeReference;
			}

			return new CodeTypeReference("any");
		}

		public static CodeTypeReference TranslateToClientTypeReference(string typeName)
		{
			if (typeName == null)
				return null;// new CodeTypeReference("void");

			return new CodeTypeReference(typeName);

		}

		virtual protected CodeTypeReference TranslateActionResultToClientTypeReference(Type type)
		{
			if (type.FullName.Contains("System.Net.Http.HttpResponseMessage") || type.FullName.Contains("System.Web.Http.IHttpActionResult") || type.FullName.Contains("Microsoft.AspNetCore.Mvc.IActionResult") || type.FullName.Contains("Microsoft.AspNetCore.Mvc.ActionResult"))
			{
				return new CodeTypeReference("response");
			}

			return null;
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

		public CodeTypeDeclaration FindTypeDeclarationInNamespaces(string typeName, string ns)//todo: fix this like C# one.
		{
			return ClientNamespace.FindTypeDeclaration(typeName);
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
