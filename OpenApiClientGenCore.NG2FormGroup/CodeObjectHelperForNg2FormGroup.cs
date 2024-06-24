using System.CodeDom;
using System.CodeDom.Compiler;
using System.Diagnostics;

namespace Fonlow.TypeScriptCodeDom
{
	/// <summary>
	/// Output TS codes through TextWriter, for Angular FormGroup. This is almost a copy from WebApiClientGenCore.NG2FormGroup -- public class CodeObjectHelperForNg2FormGroup : CodeObjectHelper, except:
	/// in CodeTypeDeclaration FindCodeTypeDeclaration(string typeName), found is not checking namespace, because there's only one namespace, and typeName does not contains namespace prefix.
	/// </summary>
	public class CodeObjectHelperForNg2FormGroup : CodeObjectHelper
	{
		readonly CodeNamespaceCollection codeNamespaceCollection;

		public CodeObjectHelperForNg2FormGroup(CodeNamespaceCollection codeNamespaceCollection) : base(true)
		{
			this.codeNamespaceCollection = codeNamespaceCollection;
		}

		/// <summary>
		/// Generate type declarations as interfaces, typed FormGroup declarations as interfaces, 
		/// </summary>
		/// <param name="e"></param>
		/// <param name="w"></param>
		/// <param name="o"></param>
		public override void GenerateCodeFromNamespace(CodeNamespace e, TextWriter w, CodeGeneratorOptions o)
		{
			WriteCodeCommentStatementCollection(e.Comments, w, o);

			var refinedNamespaceText = e.Name.Replace('.', '_');
			var namespaceOrModule = asModule ? "export namespace" : "namespace";
			w.WriteLine($"{namespaceOrModule} {refinedNamespaceText} {{");

			for (int i = 0; i < e.Imports.Count; i++)
			{
				var ns = e.Imports[i];
				var nsText = ns.Namespace;
				var alias = nsText.Replace('.', '_');
				w.WriteLine($"{o.IndentString}import {alias} = {nsText};");
			}

			e.Types.OfType<CodeTypeDeclaration>().ToList().ForEach(t =>
			{
				GenerateCodeFromType(t, w, o);

				var typeExpression = GetTypeParametersExpression(t);
				var isGeneric = typeExpression.Contains('<');
				if (!t.IsPartial && !isGeneric) //controllerClass is partial, as declared in CreateControllerClientClass()
				{
					GenerateAngularFormFromType(t, w, o);
					GenerateAngularFormGroupFunctionFromType(t, w, o);
				}

				w.WriteLine();
			});

			w.WriteLine($"}}");
		}

		/// <summary>
		/// Find CodeTypeDeclaration among namespaces in the CodeDOM.
		/// </summary>
		/// <param name="typeNameNoNs">Type name without namespace.</param>
		/// <returns></returns>
		CodeTypeDeclaration FindCodeTypeDeclarationInNamespaces(string typeNameNoNs)
		{
			//Console.WriteLine("All TypeDeclarations: " + string.Join("; ", currentCodeNamespace.Types.OfType<CodeTypeDeclaration>().Select(d=>d.Name)));
			for (int i = 0; i < codeNamespaceCollection.Count; i++)
			{
				var ns = codeNamespaceCollection[i];
				//var found = ns.Types.OfType<CodeTypeDeclaration>().ToList().Find(t => ns.Name + "." + t.Name == typeName);
				var found = ns.Types.OfType<CodeTypeDeclaration>().ToList().Find(t => t.Name == typeNameNoNs);
				if (found != null)
				{
					return found;
				}
			}

			return null;
		}

		/// <summary>
		/// Generate TS interface for FormGroup, like:
		/// 	export interface AddressFormProperties {
		/// 	city: FormControl<string | null | undefined>,
		/// 	country: FormControl<string | null | undefined>,
		///		id: FormControl<string | null | undefined> 
		///		}
		/// </summary>
		/// <param name="e"></param>
		/// <param name="w"></param>
		/// <param name="o"></param>
		void GenerateAngularFormFromType(CodeTypeDeclaration e, TextWriter w, CodeGeneratorOptions o)
		{
			if (e.IsEnum)
			{
				return;
			}

			WriteCodeCommentStatementCollection(e.Comments, w, o);

			GenerateCodeFromAttributeDeclarationCollection(e.CustomAttributes, w, o);

			var accessModifier = ((e.TypeAttributes & System.Reflection.TypeAttributes.Public) == System.Reflection.TypeAttributes.Public) ? "export " : String.Empty;
			var typeOfType = GetTypeOfType(e);
			var name = e.Name;
			var typeParametersExpression = GetTypeParametersExpression(e);
			var baseTypesExpression = GetBaseTypeExpression(e);
			if (typeOfType == TypeOfType.IsInterface)
			{
				var extendsExpression = $"{typeParametersExpression}{baseTypesExpression}";
				var isGeneric = extendsExpression.Contains('<');
				var formPropertiesSuffix = isGeneric ? String.Empty : "FormProperties";
#pragma warning disable CA1820 // Test for empty strings using string length
				var extendsExpressionForNg = extendsExpression == String.Empty ? String.Empty : $"{extendsExpression}{formPropertiesSuffix}";
#pragma warning restore CA1820 // Test for empty strings using string length
				var formGroupInterface = $"{name}FormProperties";
				w.Write($"{o.IndentString}{accessModifier}{GetTypeOfTypeText(e)} {formGroupInterface}{extendsExpressionForNg} {{");
				WriteAngularFormTypeMembersAndCloseBracing(e, w, o);
			}
			else
			{
				throw new ArgumentException("Expect TypeOfType is interface if e is not enum", nameof(e));
			}
		}

		/// <summary>
		/// Generate TS helper function of creating FormGroup object.
		/// </summary>
		/// <param name="e"></param>
		/// <param name="w"></param>
		/// <param name="o"></param>
		void GenerateAngularFormGroupFunctionFromType(CodeTypeDeclaration e, TextWriter w, CodeGeneratorOptions o)
		{
			if (e.IsEnum)
			{
				return;
			}

			var accessModifier = ((e.TypeAttributes & System.Reflection.TypeAttributes.Public) == System.Reflection.TypeAttributes.Public) ? "export " : String.Empty;
			var typeOfType = GetTypeOfType(e);
			var name = e.Name;
			var typeParametersExpression = GetTypeParametersExpression(e);
			var baseTypesExpression = GetBaseTypeExpression(e);
			if (typeOfType == TypeOfType.IsInterface)
			{
				var extendsExpression = $"{typeParametersExpression}{baseTypesExpression}";
				var isGeneric = extendsExpression.Contains('<');
				var formPropertiesSuffix = isGeneric ? String.Empty : "FormProperties";
				var formGroupInterface = $"{name}FormProperties";
				w.Write($"{o.IndentString}{accessModifier}function Create{name}FormGroup() {{");
				w.WriteLine();
				w.Write($"{o.IndentString}{o.IndentString}return new FormGroup<{formGroupInterface}>({{");

				WriteAngularFormGroupMembersAndCloseBracing(e, w, o);
				w.WriteLine($"{o.IndentString}}}");
			}
			else
			{
				throw new ArgumentException("Expect TypeOfType is interface if e is not enum", nameof(e));
			}
		}

		/// <summary>
		/// Return the text of a FormControl field, like:
		/// dob : FormControl&lt;Date&gt;
		/// </summary>
		/// <param name="codeMemberField"></param>
		/// <returns></returns>
		static string GetCodeMemberFieldTextForAngularFormControl(CodeMemberField codeMemberField)
		{
			var tsTypeName = RefineAngularFormControlTypeName(codeMemberField);
			var fieldName = codeMemberField.Name.EndsWith('?') ? codeMemberField.Name.Substring(0, codeMemberField.Name.Length - 1) : codeMemberField.Name;
			return $"{fieldName}: FormControl<{tsTypeName}>";
		}

		/// <summary>
		/// Refine the FormControl type of the FormGroup type interface, and add " | null | undefined".
		/// </summary>
		/// <param name="codeMemberField"></param>
		/// <returns></returns>
		static string RefineAngularFormControlTypeName(CodeMemberField codeMemberField)
		{
			var tsTypeName = GetCodeTypeReferenceText(codeMemberField.Type);
			var alreadyNullable = tsTypeName.Contains("| null");
			if (alreadyNullable)
			{
				tsTypeName += " | undefined";
			}
			else
			{
				tsTypeName += " | null | undefined"; // optional null
			}

			return tsTypeName;
		}

		/// <summary>
		/// For FormGroup creation, return something like:
		/// "name: new FormControl&lt;string | null | undefined&gt;(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(255)])"
		/// https://spec.openapis.org/oas/v3.0.3 4.7.24.1 Properties
		/// 
		/// </summary>
		/// <param name="codeMemberField"></param>
		/// <returns>Text of FormControl creation.</returns>
		static string GetCodeMemberFieldTextForAngularFormGroup(CodeMemberField codeMemberField)
		{
			var customAttributes = codeMemberField.CustomAttributes;
			var fieldName = codeMemberField.Name.EndsWith('?') ? codeMemberField.Name.Substring(0, codeMemberField.Name.Length - 1) : codeMemberField.Name;
			if (customAttributes.Count > 0)
			{
				//Console.WriteLine("customAttributes: " + string.Join(", ",  customAttributes));
				var validatorList = new List<string>();
				Console.Write("CustomAttributes: ");
				for (int i = 0; i < customAttributes.Count; i++)
				{
					var ca = customAttributes[i];
					var attributeName = ca.Name;
					Console.Write(attributeName + ", ");
					switch (attributeName)
					{
						case "System.ComponentModel.DataAnnotations.Required":
							validatorList.Add("Validators.required");
							break;
						case "System.ComponentModel.DataAnnotations.MaxLength":
							AddMaxLengthValidations(ca, validatorList);
							break;
						case "System.ComponentModel.DataAnnotations.MinLength":
							AddMinLengthValidations(ca, validatorList);
							break;
						case "System.ComponentModel.DataAnnotations.Range": // for minimum and maximum
							AddNumberRangeValidations(ca, validatorList);
							break;
						//case "System.ComponentModel.DataAnnotations.StringLength":
						//	AddStringLengthValidations(ca, validatorList);
						//	break;
						//case "System.ComponentModel.DataAnnotations.EmailAddress":
						//	validatorList.Add("Validators.email");
						//	break;
						case "System.ComponentModel.DataAnnotations.RegularExpressionAttribute":
							AddRegexValidations(ca, validatorList);
							break;
						default:
							break;
					}
				}
				Console.WriteLine();

				var text = String.Join(", ", validatorList);
				var tsTypeName = RefineAngularFormControlTypeName(codeMemberField);
				return string.IsNullOrEmpty(text) ? $"{fieldName}: new FormControl<{tsTypeName}>(undefined)" :
					$"{fieldName}: new FormControl<{tsTypeName}>(undefined, [{text}])";
			}
			else
			{
				var tsTypeName = RefineAngularFormControlTypeName(codeMemberField);
				return $"{fieldName}: new FormControl<{tsTypeName}>(undefined)";
			}
		}

		/// <summary>
		/// For CodeAttributeDeclaration of StringLengthAttribute
		/// </summary>
		/// <param name="ca"></param>
		/// <param name="validatorList"></param>
		static void AddStringLengthValidations(CodeAttributeDeclaration ca, List<string> validatorList)
		{
			//StringLengthAttribute has only one optional named attribute argument MinimumLength
			// total number of arguments could be 1 or 2. If there's only one, it it max, otherwise, max and min
			Debug.Assert(ca.Arguments.Count > 0);
			var arg0 = ca.Arguments[0];
			var arg0VExpression = arg0.Value as CodeSnippetExpression;
			if (!arg0VExpression.Value.Contains("MaxValue"))
			{
				validatorList.Add($"Validators.maxLength({arg0VExpression.Value})");
			}


			if (ca.Arguments.Count == 2)
			{
				var arg1 = ca.Arguments[1];
				var arg1Expression = arg1.Value as CodeSnippetExpression;
				if (!arg1Expression.Value.Contains("MinValue"))
				{
					validatorList.Add($"Validators.minLength({arg1Expression.Value})");
				}
			}
		}

		/// <summary>
		/// ca is with RangeAttrribute
		/// </summary>
		/// <param name="ca"></param>
		/// <param name="validatorList"></param>
		static void AddNumberRangeValidations(CodeAttributeDeclaration ca, List<string> validatorList)
		{
			Debug.Assert(ca.Arguments.Count == 2);
			var arg0 = ca.Arguments[0];
			var arg0VExpression = arg0.Value as CodeSnippetExpression;
			var arg1 = ca.Arguments[1];
			var arg1VExpression = arg1.Value as CodeSnippetExpression;
			if (!arg0VExpression.Value.Contains("MinValue"))
			{
				validatorList.Add($"Validators.min({arg0VExpression.Value})");
			}

			if (!arg1VExpression.Value.Contains("MaxValue"))
			{
				validatorList.Add($"Validators.max({arg1VExpression.Value})");
			}
		}

		static void AddMinLengthValidations(CodeAttributeDeclaration ca, List<string> validatorList)
		{
			Debug.Assert(ca.Arguments.Count == 1);
			var arg0 = ca.Arguments[0];
			var arg0VExpression = arg0.Value as CodeSnippetExpression;
			validatorList.Add($"Validators.minLength({arg0VExpression.Value})");
		}

		static void AddMaxLengthValidations(CodeAttributeDeclaration ca, List<string> validatorList)
		{
			Debug.Assert(ca.Arguments.Count == 1);
			var arg0 = ca.Arguments[0];
			var arg0VExpression = arg0.Value as CodeSnippetExpression;
			validatorList.Add($"Validators.maxLength({arg0VExpression.Value})");
		}

		static void AddRegexValidations(CodeAttributeDeclaration ca, List<string> validatorList)
		{
			Debug.Assert(ca.Arguments.Count == 1);
			var arg0 = ca.Arguments[0];
			var arg0VExpression = arg0.Value as CodeSnippetExpression;
			validatorList.Add($"Validators.pattern('{arg0VExpression.Value}')"); // overall better than quoting with / /g.
		}

		void WriteAngularFormTypeMembersAndCloseBracing(CodeTypeDeclaration typeDeclaration, TextWriter w, CodeGeneratorOptions o)
		{

			if (typeDeclaration.IsEnum)
			{
				throw new NotSupportedException("Should run to here");
				//w.WriteLine($"{typeDeclaration.Name}: {typeDeclaration.BaseTypes}");
			}
			else
			{
				var currentIndent = o.IndentString;
				o.IndentString += BasicIndent;
				w.WriteLine();
				for (int i = 0; i < typeDeclaration.Members.Count; i++)
				{
					WriteCodeTypeMemberOfAngularForm(typeDeclaration.Members[i], w, o);
				};
				w.WriteLine(currentIndent + "}");
				o.IndentString = currentIndent;
			}
		}

		void WriteAngularFormGroupMembersAndCloseBracing(CodeTypeDeclaration typeDeclaration, TextWriter w, CodeGeneratorOptions o)
		{
			if (typeDeclaration == null)
			{
				return;
			}

			if (typeDeclaration.IsEnum)
			{
				throw new NotSupportedException("Should run to here");
				//w.WriteLine($"{typeDeclaration.Name}: {typeDeclaration.BaseTypes}");
			}
			else
			{
				var currentIndent = o.IndentString;
				o.IndentString += BasicIndent;
				w.WriteLine();
				WriteParentFormGroupMembers(typeDeclaration, w, o);

				for (int i = 0; i < typeDeclaration.Members.Count; i++)
				{
					WriteCodeTypeMemberOfAngularFormGroup(typeDeclaration.Members[i], w, o);
				};
				w.WriteLine(currentIndent + BasicIndent + "});");
				w.WriteLine();
				o.IndentString = currentIndent;
			}
		}

		void WriteParentFormGroupMembers(CodeTypeDeclaration typeDeclaration, TextWriter w, CodeGeneratorOptions o)
		{
			if (typeDeclaration.BaseTypes.Count > 0)
			{
				var parentTypeReference = typeDeclaration.BaseTypes[0];
				var parentTypeName = TypeMapper.MapCodeTypeReferenceToTsText(parentTypeReference); //namspace prefix included
																								   //Console.WriteLine("parentTypeName: " + parentTypeName);
				var parentCodeTypeDeclaration = FindCodeTypeDeclarationInNamespaces(parentTypeName);

				if (parentCodeTypeDeclaration != null)
				{
					WriteParentFormGroupMembers(parentCodeTypeDeclaration, w, o); //recrusively check parent's parent

					for (int i = 0; i < parentCodeTypeDeclaration.Members.Count; i++)
					{
						WriteCodeTypeMemberOfAngularFormGroup(parentCodeTypeDeclaration.Members[i], w, o);
					};
				}
			}

		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="ctm"></param>
		/// <param name="w"></param>
		/// <param name="o"></param>
		void WriteCodeTypeMemberOfAngularForm(CodeTypeMember ctm, TextWriter w, CodeGeneratorOptions o)
		{
			if (ctm is CodeMemberField codeMemberField)
			{
				var codeTypeDeclaration = FindCodeTypeDeclarationInNamespaces(codeMemberField.Type.BaseType);
				if (codeTypeDeclaration != null && !codeTypeDeclaration.IsEnum)
				{
					return; // is custom complex type
				}
				else if (codeMemberField.Type.ArrayRank > 0)
				{
					return;
				}

				WriteCodeCommentStatementCollection(ctm.Comments, w, o);

				w.Write(o.IndentString);
				w.WriteLine(GetCodeMemberFieldTextForAngularFormControl(codeMemberField) + ",");
				return;
			}

			//if (WriteCodeMemberProperty(ctm as CodeMemberProperty, w, o))
			//	return;

			//if (ctm is CodeSnippetTypeMember snippetTypeMember)
			//{
			//	w.WriteLine(snippetTypeMember.Text);
			//	return;
			//}

			throw new ArgumentException("Expect CodeMemberField", nameof(ctm));
		}

		/// <summary>
		/// Write FormControl creation codes, for member fields of simple types. Complex types and array types are skipped.
		/// </summary>
		/// <param name="ctm"></param>
		/// <param name="w"></param>
		/// <param name="o"></param>
		/// <exception cref="ArgumentException">If ctm is not CodeMemberField.</exception>
		void WriteCodeTypeMemberOfAngularFormGroup(CodeTypeMember ctm, TextWriter w, CodeGeneratorOptions o)
		{
			if (ctm is CodeMemberField codeMemberField)
			{
				var codeTypeDeclaration = FindCodeTypeDeclarationInNamespaces(codeMemberField.Type.BaseType);
				if (codeTypeDeclaration != null && !codeTypeDeclaration.IsEnum)
				{
					return; // is custom complex type
				}
				else if (codeMemberField.Type.ArrayRank > 0)
				{
					return;
				}

				w.Write(o.IndentString + BasicIndent);
				w.WriteLine(GetCodeMemberFieldTextForAngularFormGroup(codeMemberField) + ",");
				return;
			}

			//CodeMemberProperty is not supported

			throw new ArgumentException("Expect CodeMemberField", nameof(ctm));
		}

	}

}
