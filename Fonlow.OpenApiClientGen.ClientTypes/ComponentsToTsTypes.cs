using Fonlow.Poco2Client;
using Fonlow.Reflection;
using Fonlow.TypeScriptCodeDom;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;

namespace Fonlow.OpenApiClientGen.ClientTypes
{
	/// <summary>
	/// POCO to TypeScript interfaces generator. Create TypeScriptCodeDom CodeDOM and output TS codes, with TypeScript CodeDOM provider
	/// </summary>
	public class ComponentsToTsTypes : ComponentsToTypesBase
	{
		readonly JSOutput jsOutput;
		public ComponentsToTsTypes(Settings settings, JSOutput jsOutput, CodeCompileUnit codeCompileUnit, CodeNamespace clientNamespace) : base(settings, codeCompileUnit, clientNamespace)
		{
			this.jsOutput = jsOutput;
		}

		/// <summary>
		/// Save TypeScript codes generated into a file.
		/// </summary>
		/// <param name="fileName"></param>
		public override void SaveCodeToFile(string fileName)
		{
			if (String.IsNullOrEmpty(fileName))
				throw new ArgumentException("A valid TypeScript filename is not defined.", nameof(fileName));

			try
			{
				using StreamWriter writer = new(fileName);
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
		protected override void WriteCode(TextWriter writer)
		{
			using var provider = new TypeScriptCodeProvider(new Fonlow.TypeScriptCodeDom.TsCodeGenerator(CreateCodeObjectHelper(jsOutput.AsModule)));
			CodeGeneratorOptions options = new() { BracingStyle = "JS", IndentString = "\t" };
			provider.GenerateCodeFromCompileUnit(codeCompileUnit, writer, options);
		}

		CodeObjectHelper CreateCodeObjectHelper(bool asModule)
		{
			return new CodeObjectHelper(asModule);
		}

		public override void AddTypeToCodeDom(KeyValuePair<string, OpenApiSchema> item)
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
					if (FindCodeTypeDeclarationInNamespaces(currentTypeName, ns) != null)
					{
						return;
					}

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
							if (FindCodeTypeDeclarationInNamespaces(newTypeName, ns) == null)
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
					var existing = FindCodeTypeDeclarationInNamespaces(typeName, typeNs);
					if (existing == null) //so process itemsRef.Id first before considering type alias
					{
						AddTypeToCodeDom(new KeyValuePair<string, OpenApiSchema>(itemsRef.Id, FindSchema(itemsRef.Id))); // add type recursively
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
					if (FindCodeTypeDeclarationInNamespaces(currentTypeName, ns) != null)
					{
						return;
					}

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
			else //for enum
			{
				typeDeclaration = PodGenHelper.CreatePodClientEnum(ClientNamespace, currentTypeName);
				CreateTypeDocComment(item, typeDeclaration);
				AddEnumMembers(typeDeclaration, enumTypeList);
				Trace.TraceInformation("TS client enum: " + currentTypeName);
			}

			RemoveRegisteredSchemaRefId(item.Key);
		}

		protected override void AddProperty(KeyValuePair<string, OpenApiSchema> p, CodeTypeDeclaration typeDeclaration, OpenApiSchema schema, string currentTypeName, string ns)
		{
			var isKeyNameValidTsPropertyName = NameFunc.IsKeyNameValidTsPropertyName(p.Key);
			string tsInterfacePropertyName = isKeyNameValidTsPropertyName ? p.Key : $"'{p.Key}'";
			string refinedPropertyName = isKeyNameValidTsPropertyName ? p.Key : NameFunc.RefinePropertyName(p.Key);
			if (tsInterfacePropertyName == currentTypeName)
			{
				Trace.TraceWarning($"Property {tsInterfacePropertyName} found with the same name of type {currentTypeName}, and it is renamed to {tsInterfacePropertyName}1.");
				tsInterfacePropertyName += "1";
			}

			OpenApiSchema propertySchema = p.Value;
			string primitivePropertyType = propertySchema.Type;
			bool isPrimitiveType = TypeRefHelper.IsPrimitiveTypeOfOA(primitivePropertyType);
			bool isRequired = schema.Required.Contains(p.Key); //compare with the original key
			CodeMemberField clientProperty;

			if (String.IsNullOrEmpty(primitivePropertyType))
			{
				if (propertySchema.Reference != null)
				{
					string propertyTypeNs = NameFunc.GetNamespaceOfClassName(propertySchema.Reference.Id);
					string propertyTypeName = NameFunc.RefineTypeName(propertySchema.Reference.Id, propertyTypeNs);
					string propertyTypeWithNs = NameFunc.CombineNamespaceWithClassName(propertyTypeNs, propertyTypeName);
					CodeTypeReference ctr = ComponentsHelper.TranslateTypeNameToClientTypeReference(propertyTypeWithNs);
					clientProperty = CreateProperty(ctr, tsInterfacePropertyName, isRequired); //TS
					SetClientPropertyTypeInfo(clientProperty, true, false);
				}
				else
				{
					if (propertySchema.Enum.Count > 0) //for casual enum
					{
						clientProperty = GenerateCasualEnumForProperty(propertySchema, typeDeclaration.Name, tsInterfacePropertyName, p.Key, ns, isRequired);
						SetClientPropertyTypeInfo(clientProperty, false, false);
					}
					else
					{
						var r = CreateCodeTypeReferenceSchemaOf(propertySchema, currentTypeName, p.Key);
						clientProperty = CreateProperty(r.Item1, tsInterfacePropertyName, isRequired);
						SetClientPropertyTypeInfo(clientProperty, r.Item2, false);
					}
				}
			}
			else
			{
				if (primitivePropertyType == "array") // for array
				{
					var r = CreateArrayCodeTypeReference(propertySchema, typeDeclaration.Name, tsInterfacePropertyName, currentTypeName, ns);
					CodeTypeReference arrayCodeTypeReference = r.Item1;
					var n = String.IsNullOrEmpty(r.Item2) ? tsInterfacePropertyName : r.Item2;
					clientProperty = CreateProperty(arrayCodeTypeReference, n, isRequired);
					SetClientPropertyTypeInfo(clientProperty, true, true);
				}
				else if (propertySchema.Enum.Count == 0 && propertySchema.Reference != null && !isPrimitiveType) // for complex type
				{
					CodeTypeReference complexCodeTypeReference = CreateComplexCodeTypeReference(propertySchema);
					clientProperty = CreateProperty(complexCodeTypeReference, tsInterfacePropertyName, isRequired);
					SetClientPropertyTypeInfo(clientProperty, true, false);
				}
				else if (propertySchema.Reference == null && propertySchema.Properties != null && propertySchema.Properties.Count > 0) // for casual type like Category.sub => CategorySub
				{
					string casualTypeName = currentTypeName + NameFunc.ToTitleCase(refinedPropertyName);
					if (FindCodeTypeDeclarationInNamespaces(casualTypeName, ns) != null)
					{
						return;
					}

					CodeTypeDeclaration casualTypeDeclaration = AddTypeToClassNamespace(casualTypeName, null);//stay with the namespace of the host class
					AddProperties(casualTypeDeclaration, propertySchema, casualTypeName, null);
					var ctr = TypeRefHelper.TranslateToClientTypeReference(casualTypeName);
					clientProperty = CreateProperty(ctr, tsInterfacePropertyName, isRequired);
					SetClientPropertyTypeInfo(clientProperty, true, false);
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
						dicValueTypeRef = PropertySchemaToCodeTypeReference(propertySchema.AdditionalProperties, typeDeclaration.Name, refinedPropertyName);
					}

					CodeTypeReference dicCtr = new(typeof(Dictionary<,>).FullName, dicKeyTypeRef, dicValueTypeRef); //for client codes, Dictionary is better than IDictionary, no worry of different implementation of IDictionary
					clientProperty = CreateProperty(dicCtr, tsInterfacePropertyName, isRequired);
					SetClientPropertyTypeInfo(clientProperty, true, false);
				}
				else if (propertySchema.Enum.Count == 0) // for primitive type
				{
					Type simpleType = TypeRefHelper.PrimitiveSwaggerTypeToClrType(primitivePropertyType, propertySchema.Format);
					clientProperty = CreatePropertyOfType(tsInterfacePropertyName, simpleType, isRequired);
					SetClientPropertyTypeInfo(clientProperty, false, false);
				}
				else if (propertySchema.Enum.Count > 0 && primitivePropertyType == "string") // for string enum
				{
					string[] enumMemberNames;
					try
					{
						enumMemberNames = (String.IsNullOrEmpty(primitivePropertyType) || primitivePropertyType == "string")
							? propertySchema.Enum.Cast<OpenApiString>().Select(m =>
							{
								var isValidEnumName = NameFunc.IsKeyNameValidTsPropertyName(m.Value);
								return isValidEnumName ? m.Value
								: (!string.IsNullOrEmpty(m.Value) && Char.IsDigit(m.Value[0]) ? NameFunc.RefineEnumMemberName(m.Value) : $"'{m.Value}'");
							}).ToArray()
							: propertySchema.Enum.Cast<OpenApiInteger>().Select(m => "_" + m.Value.ToString()).ToArray();

					}
					catch (InvalidCastException ex)
					{
						throw new CodeGenException($"When dealing with {tsInterfacePropertyName} of {primitivePropertyType}, error: {ex.Message}");
					}

					CodeTypeDeclaration existingDeclaration = FindEnumDeclaration(enumMemberNames);
					if (existingDeclaration != null)
					{
						string existingTypeName = existingDeclaration.Name;
						CodeTypeReference enumReference = TypeRefHelper.TranslateToClientTypeReference(existingTypeName);
						clientProperty = CreateProperty(enumReference, tsInterfacePropertyName, isRequired);
					}
					else
					{
						clientProperty = GenerateCasualEnumForProperty(propertySchema, typeDeclaration.Name, tsInterfacePropertyName, p.Key, ns, isRequired);
					}

					SetClientPropertyTypeInfo(clientProperty, false, false);
				}
				else if (primitivePropertyType != "string" && TypeAliasDic.TryGet(primitivePropertyType, out string aliasTypeName)) //check TypeAliasDic
				{
					var r = new CodeTypeReference(aliasTypeName);
					clientProperty = CreateProperty(r, tsInterfacePropertyName, isRequired);
					SetClientPropertyTypeInfo(clientProperty, true, false);
				}
				else if (propertySchema.Reference != null)
				{
					CodeTypeReference complexCodeTypeReference = CreateComplexCodeTypeReference(propertySchema);
					clientProperty = CreateProperty(complexCodeTypeReference, tsInterfacePropertyName, isRequired);
					SetClientPropertyTypeInfo(clientProperty, true, false);
				}
				else // for casual enum
				{
					clientProperty = GenerateCasualEnumForProperty(propertySchema, typeDeclaration.Name, tsInterfacePropertyName, p.Key, ns, isRequired);
					SetClientPropertyTypeInfo(clientProperty, true, false);
				}
			}

			if (isRequired)
			{
				clientProperty.CustomAttributes.Add(new CodeAttributeDeclaration("System.ComponentModel.DataAnnotations.Required"));
			}

			AddValidationAttributes(propertySchema, clientProperty);
			CreateMemberDocComment(p, clientProperty, schema);
			typeDeclaration.Members.Add(clientProperty);
		}

		void SetClientPropertyTypeInfo(CodeMemberField p, bool isComplex, bool isArray)
		{
			p.Type.UserData.Add("FieldTypeInfo",
			new FieldTypeInfo
			{
				IsComplex = isComplex,
				IsArray = isArray,
			});
		}

		/// <summary>
		/// Create casual enum type, then create property.
		/// </summary>
		/// <param name="propertySchema"></param>
		/// <param name="typeDeclarationName"></param>
		/// <param name="propertyName">It may contain 2 single quotes</param>
		/// <param name="ns"></param>
		/// <param name="isRequired"></param>
		/// <returns></returns>
		CodeMemberField GenerateCasualEnumForProperty(OpenApiSchema propertySchema, string typeDeclarationName, string propertyName, string keyName, string ns, bool isRequired)
		{
			string casualEnumName = typeDeclarationName + NameFunc.RefinePropertyName(keyName); // make Pascal case like OrderStatus
			CodeTypeDeclaration existingType = FindCodeTypeDeclarationInNamespaces(casualEnumName, ns);
			if (existingType == null)
			{
				CodeTypeDeclaration casualEnumTypeDeclaration = PodGenHelper.CreatePodClientEnum(ClientNamespace, casualEnumName);
				AddEnumMembers(casualEnumTypeDeclaration, propertySchema.Enum);
				Trace.TraceInformation($"Casual enum {casualEnumName} added for {typeDeclarationName}/{propertyName}.");
			}

			return CreateProperty(propertyName, casualEnumName, isRequired);

		}

		CodeMemberField CreatePropertyOfType(string propertyName, Type type, bool isRequired)
		{
			string memberName = propertyName + (isRequired ? String.Empty : "?");
			CodeMemberField result = new() { Type = TranslateToClientTypeReference(type), Name = memberName };
			result.Attributes = MemberAttributes.Public | MemberAttributes.Final;
			return result;
		}

		protected override void CreateMemberDocComment(KeyValuePair<string, OpenApiSchema> item, CodeMemberField property, OpenApiSchema modelSchema)
		{
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
				List<string> ss = ComponentsHelper.GetCommentsFromAnnotations(item.Value, item.Key, modelSchema, true);
				if (!String.IsNullOrEmpty(typeComment))
				{
					ss.Insert(0, typeComment);
				}

				if (ss.Count > 0)
				{
					property.Comments.Add(new CodeCommentStatement(Fonlow.DocComment.StringFunctions.IndentedArrayToString(ss), true));
				}
			}
			else
			{
				if (!string.IsNullOrEmpty(typeComment))
				{
					property.Comments.Add(new CodeCommentStatement(typeComment, true));
				}
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

			if (TypeHelper.IsDotNetSimpleType(type))
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
			CodeTypeReference otherArrayType = new(new CodeTypeReference(), arrayRank)//CodeDom does not care. The baseType is always overwritten by ArrayElementType.
			{
				ArrayElementType = TranslateToClientTypeReference(elementType),
			};
			return otherArrayType;
		}

		static CodeMemberField CreateProperty(string propertyName, string typeName, bool isRequired)
		{
			string memberName = propertyName + (isRequired ? String.Empty : "?");
			CodeMemberField result = new() { Type = ComponentsHelper.TranslateTypeNameToClientTypeReference(typeName), Name = memberName };
			result.Attributes = MemberAttributes.Public | MemberAttributes.Final;
			return result;
		}

		static CodeMemberField CreateProperty(CodeTypeReference codeTypeReference, string propertyName, bool isRequired)
		{
			string memberName = propertyName + (isRequired ? String.Empty : "?");
			CodeMemberField result = new(codeTypeReference, memberName)
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

		protected override void CreateTypeDocComment(KeyValuePair<string, OpenApiSchema> item, CodeTypeMember declaration)
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

		public override void AddEnumMembers(CodeTypeDeclaration typeDeclaration, IList<IOpenApiAny> enumTypeList)
		{
			int k = 0;
			foreach (IOpenApiAny enumMember in enumTypeList)
			{
				if (enumMember is OpenApiString stringMember)
				{
					var isValidEnumName = NameFunc.IsKeyNameValidTsPropertyName(stringMember.Value);
					string memberName = isValidEnumName ? stringMember.Value : (!string.IsNullOrEmpty(stringMember.Value) && Char.IsDigit(stringMember.Value[0]) ? NameFunc.RefineEnumMemberName(stringMember.Value)
						: $"'{stringMember.Value}'");
					int intValue = k;
					CodeMemberField clientField = new()
					{
						Name = memberName,
						InitExpression = settings.EnumToString ? new CodePrimitiveExpression("'" + memberName + "'") : new CodePrimitiveExpression(intValue),
					};

					typeDeclaration.Members.Add(clientField);
					k++;
				}
				else if (enumMember is OpenApiInteger intMember)
				{
					string memberName = "_" + intMember.Value.ToString();
					int intValue = k;
					CodeMemberField clientField = new()
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
					CodeMemberField clientField = new()
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
					CodeMemberField clientField = new()
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
					CodeMemberField clientField = new()
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

		public override CodeTypeDeclaration AddTypeToClassNamespace(string typeName, string ns)
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

		protected override void AddValidationAttributes(OpenApiSchema fieldSchema, CodeMemberField memberField)
		{
			base.AddValidationAttributes(fieldSchema, memberField);

			if (!string.IsNullOrEmpty(fieldSchema.Pattern))
			{
				var escapedPattern = fieldSchema.Pattern
					.Replace("\\'", "\\\\'") // must run first before escaping single quote
					.Replace("'", "\\'")
					.Replace("\\0", "0o")
					;

				var escapedPattern2 = RegexFunctions.EscapeRegexCapturingGroup(escapedPattern);
				/* sometimes the regex contains symbols of single quote. And https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_octal
				openapi-directory\APIs\amazonaws.com\AWSMigrationHub\2017-05-31 has the deprecated expression of octal

				OpenApi yaml uses double quote to escape quote, while json prefers backslash quote.
				for example: openapi-directory\APIs\amazonaws.com\cur\2017-01-06
				*/
				CodeSnippetExpression patternTextExpression = new(escapedPattern2);
				CodeAttributeDeclaration pa = new("System.ComponentModel.DataAnnotations.RegularExpressionAttribute", new CodeAttributeArgument(patternTextExpression));
				memberField.CustomAttributes.Add(pa);
			}
		}
	}

}
