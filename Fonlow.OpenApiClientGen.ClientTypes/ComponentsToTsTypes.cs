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

		void RegisterSchemaRefIdToBeAdded(string t)//common
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
		public void CreateCodeDom(OpenApiComponents components)//common
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
						var existingType = ComponentsHelper.FindTypeDeclarationInNamespace(NameFunc.RefineTypeName(kv.Key, classNamespaceText), classNamespace);
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
			var currentTypeName = NameFunc.RefineTypeName(item.Key, ns);
			RegisterSchemaRefIdToBeAdded(item.Key);
			OpenApiSchema schema = item.Value;

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
				}
				else if (type == "array") // wrapper of array
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
					if (existing == null) //so process itemsRef.Id first before considering type alias
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
					var clrType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(type, null);
					TypeAliasDic.Add(item.Key, clrType.FullName);
					Trace.TraceInformation($"TypeAliasDic.Add({item.Key}, {clrType.FullName}) -- clrType: {clrType.FullName}");
				}
				else if (type == "object" || String.IsNullOrEmpty(type))//object alias without properties
				{
					typeDeclaration = AddTypeToClassNamespace(currentTypeName, ns);
					CreateTypeDocComment(item, typeDeclaration);
				}
				else
				{
					Trace.TraceInformation($"Type Alias {item.Key} for type {type} is skipped.");
					RemoveRegisteredSchemaRefId(item.Key);
					return;
				}

				if (typeDeclaration != null)
				{
					Trace.TraceInformation($"TS clientClass {currentTypeName} created for {item.Key}");
				}
				else
				{
					Trace.TraceInformation($"TS Candidate clientClass {currentTypeName} for {item.Key} is skipped");
				}
			}
			else
			{
				typeDeclaration = PodGenHelper.CreatePodClientEnum(ClientNamespace, currentTypeName);
				CreateTypeDocComment(item, typeDeclaration);
				AddEnumMembers(typeDeclaration, enumTypeList);
				Trace.TraceInformation("TS client enum: " + currentTypeName);
			}

			RemoveRegisteredSchemaRefId(item.Key);
		}

		public void AddProperties(CodeTypeDeclaration typeDeclaration, OpenApiSchema schema, string currentTypeName, string ns)
		{
			foreach (KeyValuePair<string, OpenApiSchema> p in schema.Properties)
			{
				AddProperty(p, typeDeclaration, schema, currentTypeName, ns);
			}
		}

		void AddProperty(KeyValuePair<string, OpenApiSchema> p, CodeTypeDeclaration typeDeclaration, OpenApiSchema schema, string currentTypeName, string ns)
		{
			string propertyName = NameFunc.RefineTsPropertyName(p.Key);
			if (propertyName == currentTypeName)
			{
				Trace.TraceWarning($"Property {propertyName} found with the same name of type {currentTypeName}, and it is renamed to {propertyName}1.");
				propertyName += "1";
			}

			if (!Char.IsLetter(propertyName[0]) && propertyName[0] != '_')
			{
				propertyName = "_" + propertyName;
			}

			OpenApiSchema propertySchema = p.Value;
			string primitivePropertyType = propertySchema.Type;
			bool isPrimitiveType = TypeRefHelper.IsPrimitiveType(primitivePropertyType);
			bool isRequired = schema.Required.Contains(p.Key); //compare with the original key
			CodeMemberField clientProperty;

			void GenerateCasualEnum()
			{
				string casualEnumName = typeDeclaration.Name + NameFunc.RefinePropertyName(propertyName); // make Pascal case like OrderStatus
				CodeTypeDeclaration existingType = FindTypeDeclarationInNamespaces(casualEnumName, ns);
				if (existingType == null)
				{
					CodeTypeDeclaration casualEnumTypeDeclaration = PodGenHelper.CreatePodClientEnum(ClientNamespace, casualEnumName);
					AddEnumMembers(casualEnumTypeDeclaration, propertySchema.Enum);
					clientProperty = CreateProperty(propertyName, casualEnumName, isRequired);

					Trace.TraceInformation($"Casual enum {casualEnumName} added for {typeDeclaration.Name}/{propertyName}.");
				}
				else
				{
					clientProperty = CreateProperty(propertyName, casualEnumName, isRequired);
				}

			}

			if (String.IsNullOrEmpty(primitivePropertyType)) // for custom type, pointing to a custom type "$ref": "#/components/schemas/PhoneType"
			{
				OpenApiSchema refToType = null;
				if (propertySchema.Reference != null)
				{
					string propertyTypeNs = NameFunc.GetNamespaceOfClassName(propertySchema.Reference.Id);
					string propertyTypeName = NameFunc.RefineTypeName(propertySchema.Reference.Id, propertyTypeNs);
					string propertyTypeWithNs = NameFunc.CombineNamespaceWithClassName(propertyTypeNs, propertyTypeName);
					clientProperty = CreateProperty(propertyName, propertyTypeWithNs, isRequired);
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
					Type customType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(customPropertyType, customPropertyFormat);
					clientProperty = CreatePropertyOfType(propertyName, customType, isRequired);
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
							if (!TypeRefHelper.IsSwaggerPrimitive(arrayTypeNameAlias))
							{
								CodeTypeReference arrayCodeTypeReference = ComponentsHelper.CreateArrayOfCustomTypeReference(arrayTypeNameAlias, 1);
								clientProperty = CreateProperty(arrayCodeTypeReference, propertyName, isRequired);
							}
							else
							{
								var clrType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(arrayTypeNameAlias, null);
								CodeTypeReference arrayCodeTypeReference = ComponentsHelper.CreateArrayOfCustomTypeReference(clrType.FullName, 1);
								clientProperty = CreateProperty(arrayCodeTypeReference, propertyName, isRequired);
							}
						}
						else
						{
							CodeTypeReference arrayCodeTypeReference = ComponentsHelper.CreateArrayOfCustomTypeReference(arrayTypeWithNs, 1);
							clientProperty = CreateProperty(arrayCodeTypeReference, propertyName, isRequired);
						}
					}
					else
					{
						string arrayType = arrayItemsSchema.Type;
						if (arrayItemsSchema.Properties != null && arrayItemsSchema.Properties.Count > 0) // for casual type
						{
							string casualTypeName = typeDeclaration.Name + NameFunc.RefinePropertyName(propertyName); //keep Pascal case
							CodeTypeDeclaration casualTypeDeclaration = AddTypeToClassNamespace(casualTypeName, ns);//stay with the namespace of the host class
							AddProperties(casualTypeDeclaration, arrayItemsSchema, currentTypeName, ns);
							CodeTypeReference arrayCodeTypeReference = ComponentsHelper.CreateArrayOfCustomTypeReference(casualTypeName, 1);
							clientProperty = CreateProperty(arrayCodeTypeReference, casualTypeName, isRequired);
						}
						else
						{
							Type clrType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(arrayType, null);
							CodeTypeReference arrayCodeTypeReference = CreateArrayTypeReference(clrType, 1);
							clientProperty = CreateProperty(arrayCodeTypeReference, propertyName, isRequired);
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
					clientProperty = CreateProperty(propertyName, typeWithNs, isRequired);
				}
				else if (propertySchema.Enum.Count == 0) // for primitive type
				{
					Type simpleType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(primitivePropertyType, propertySchema.Format);
					clientProperty = CreatePropertyOfType(propertyName, simpleType, isRequired);
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

						clientProperty = CreateProperty(propertyName, typeWithNs, isRequired);
					}
					else //for casual enum
					{
						GenerateCasualEnum();
					}

					CreateMemberDocComment(p, clientProperty);
					typeDeclaration.Members.Add(clientProperty);
					return;
				}
			}

			CreateMemberDocComment(p, clientProperty);

			typeDeclaration.Members.Add(clientProperty);

		}

		CodeMemberField CreatePropertyOfType(string propertyName, Type type, bool isRequired)
		{
			string memberName = propertyName + (isRequired ? String.Empty : "?");
			CodeMemberField result = new CodeMemberField() { Type = TranslateToClientTypeReference(type), Name = memberName };
			result.Attributes = MemberAttributes.Public | MemberAttributes.Final;
			return result;
		}

		void CreateMemberDocComment(KeyValuePair<string, OpenApiSchema> item, CodeMemberField property)
		{
			if (String.IsNullOrEmpty(item.Value.Description))
				return;


			string typeComment = item.Value.Description;
			if (!String.IsNullOrEmpty(typeComment))
			{
				bool funky = typeComment.Contains("*/");
				if (funky)
				{
					typeComment = typeComment.Replace("*/", "");
					Trace.TraceWarning($"Component {item.Key} with property {property.Name} has Doc comments containing '*/' which is invalid in JSDoc. Please remove it in the definition.");
				}
			}

			if (settings.DataAnnotationsToComments)
			{
				List<string> ss = ComponentsHelper.GetCommentsFromAnnotations(item.Value);
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

		public CodeTypeReference CreateArrayTypeReference(Type elementType, int arrayRank)
		{
			CodeTypeReference otherArrayType = new CodeTypeReference(new CodeTypeReference(), arrayRank)//CodeDom does not care. The baseType is always overwritten by ArrayElementType.
			{
				ArrayElementType = TranslateToClientTypeReference(elementType),
			};
			return otherArrayType;
		}


		public CodeTypeDeclaration FindTypeDeclarationInNamespaces(string typeName, string ns)//todo: fix this like C# one.
		{
			return ClientNamespace.FindTypeDeclaration(typeName);
		}


		/// <summary>
		/// Check if schema key exists in ComponentsSchemas
		/// </summary>
		/// <param name="key"></param>
		/// <returns></returns>
		public OpenApiSchema FindSchema(string key)//common
		{
			if (ComponentsSchemas.TryGetValue(key, out OpenApiSchema v))
			{
				return v;
			}

			return null;
		}

		public CodeTypeDeclaration AddTypeToClassNamespace(string typeName, string ns)
		{
			if (String.IsNullOrEmpty(ns))
			{
				return PodGenHelper.CreatePodClientInterface(ClientNamespace, typeName);
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

				return PodGenHelper.CreatePodClientInterface(foundNamespace, typeName);
			}
		}

		static CodeMemberField CreateProperty(string propertyName, string typeName, bool isRequired)
		{
			string memberName = propertyName + (isRequired ? String.Empty : "?");
			CodeMemberField result = new CodeMemberField() { Type = ComponentsHelper.TranslateTypeNameToClientTypeReference(typeName), Name = memberName };
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

		static CodeTypeReference TranslateActionResultToClientTypeReference(Type type)
		{
			if (type.FullName.Contains("System.Net.Http.HttpResponseMessage") || type.FullName.Contains("System.Web.Http.IHttpActionResult") || type.FullName.Contains("Microsoft.AspNetCore.Mvc.IActionResult") || type.FullName.Contains("Microsoft.AspNetCore.Mvc.ActionResult"))
			{
				return new CodeTypeReference("response");
			}

			return null;
		}

		static void CreateTypeDocComment(KeyValuePair<string, OpenApiSchema> item, CodeTypeMember declaration)
		{
			string typeComment = item.Value.Description;
			if (String.IsNullOrEmpty(typeComment))
			{
				return;
			}

			bool funky = typeComment.Contains("*/");
			if (funky)
			{
				typeComment = typeComment.Replace("*/", "");
				Trace.TraceWarning($"Component {item.Key} has Doc comments containing '*/' which is invalid in JSDoc. Please remove it in the definition.");
			}

			declaration.Comments.Add(new CodeCommentStatement(typeComment, true));
		}

		public void AddEnumMembers(CodeTypeDeclaration typeDeclaration, IList<IOpenApiAny> enumTypeList)
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
				else if (enumMember is OpenApiLong longMember)
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
					string memberName = NameFunc.RefineEnumMemberName(passwordMember.Value);
					int intValue = k;
					CodeMemberField clientField = new CodeMemberField()
					{
						Name = memberName,
						InitExpression = new CodePrimitiveExpression(intValue),
					};

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

					typeDeclaration.Members.Add(clientField);
					k++;
				}
				else
				{
					throw new ArgumentException($"Not yet supported enumMember of {enumMember.GetType()} with {typeDeclaration.Name}");
				}
			}
		}
	}

}
