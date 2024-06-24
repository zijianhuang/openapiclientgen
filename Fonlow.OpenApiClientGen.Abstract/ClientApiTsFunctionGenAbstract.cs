using Fonlow.OpenApiClientGen.ClientTypes;
using Fonlow.TypeScriptCodeDom;
using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
using System.Diagnostics;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using Fonlow.Poco2Client;
using System.Globalization;

namespace Fonlow.CodeDom.Web.Ts
{
	/// <summary>
	/// Generate a client function in CodeDOM upon ApiDescription
	/// </summary>
	public abstract class ClientApiTsFunctionGenAbstract
	{
		OpenApiOperation apiOperation;
		protected ParameterDescription[] ParameterDescriptions { get; private set; }
		protected CodeTypeReference RequestBodyCodeTypeReference { get; private set; }
		string requestBodyComment;

		protected string RelativePath { get; private set; }
		protected CodeTypeReference ReturnTypeReference { get; private set; }

		protected CodeMemberMethod Method { get; private set; }
		NameComposer nameComposer;
		ParametersRefBuilder parametersRefBuilder;
		BodyContentRefBuilder bodyContentRefBuilder;
		protected string ActionName { get; private set; }
		protected OperationType HttpMethod { get; private set; }
		protected string HttpMethodName { get; private set; }

		readonly IRenamer renamer;

		readonly IDictionary<Type, string> dotNetTypeCommentDic;

		ISettings settings;

		protected ClientApiTsFunctionGenAbstract()
		{
			renamer = new TypeScriptRenamer();
			dotNetTypeCommentDic = DotNetTypeCommentGenerator.Get();
		}

		public CodeMemberMethod CreateApiFunction(ISettings settings, string relativePath, OperationType httpMethod, OpenApiOperation apiOperation, ComponentsToTsTypes com2TsTypes)
		{
			if (!(new OperationType[] { OperationType.Get, OperationType.Post, OperationType.Put, OperationType.Delete, OperationType.Patch }).Any(d => d == httpMethod))
			{
				Trace.TraceWarning("This HTTP method {0} is not yet supported", httpMethod);
				return null;
			}

			this.settings = settings;
			this.nameComposer = new NameComposer(settings, renamer);
			this.apiOperation = apiOperation;
			this.HttpMethod = httpMethod;
			this.HttpMethodName= HttpMethod.ToString().ToLower(CultureInfo.CurrentCulture); //Method is always uppercase. 
			this.ActionName = nameComposer.GetActionName(apiOperation, httpMethod.ToString(), relativePath);
			this.bodyContentRefBuilder = new BodyContentRefBuilder(com2TsTypes, ActionName, renamer);
			this.parametersRefBuilder = new ParametersRefBuilder(com2TsTypes, ActionName, renamer);
			this.ParameterDescriptions = parametersRefBuilder.OpenApiParametersToParameterDescriptions(apiOperation.Parameters);
			if (httpMethod == OperationType.Post || httpMethod == OperationType.Put || httpMethod == OperationType.Patch)
			{
				Tuple<CodeTypeReference, string, bool> kc = bodyContentRefBuilder.GetBodyContent(apiOperation, httpMethod.ToString(), relativePath, settings.DotsToNamespaces);
				if (kc != null)
				{
					this.RequestBodyCodeTypeReference = kc.Item1;
					this.requestBodyComment = kc.Item2;
					if (!kc.Item3)
					{
						return null; // not to generate for unsupported POST content type.
					}
				}
			}

			this.RelativePath = RemovePrefixSlash(relativePath);
			this.RelativePath = RegexFunctions.RefineUrlWithHyphenInParameters(RelativePath);

			Tuple<CodeTypeReference, bool> r;
			try
			{
				var returnRefBuilder = new ReturnRefBuilder(com2TsTypes, ActionName);
				r = returnRefBuilder.GetOperationReturnTypeReference(apiOperation);

			}
			catch (CodeGenOperationException ex)
			{
				if (ex.Pending)
				{
					throw new CodeGenOperationException($"When generating TS scripts, definition {relativePath}=>{httpMethod} triggers error {ex.Message}");
				}

				throw;
			}

			ReturnTypeReference = r.Item1;

			//create method
			Method = CreateMethodName();

			CreateDocComments();

			switch (HttpMethod)
			{
				case OperationType.Get:
				case OperationType.Delete:
				case OperationType.Post:
				case OperationType.Put:
				case OperationType.Patch:
					RenderImplementation();
					break;
				default:
					Trace.TraceWarning("This HTTP method {0} is not yet supported in TS gen", HttpMethod);
					break;
			}

			return Method;
		}

		static string RemovePrefixSlash(string uriText)
		{
			if (uriText[0] == '/')
			{
				return uriText.Remove(0, 1);
			}

			return uriText;
		}

		void CreateDocComments()
		{
			StringBuilder builder = new();
			string[] linesNoIndent = Fonlow.DocComment.StringFunctions.TrimIndentedMultiLineTextToArray(
				apiOperation.Summary
				+ ((String.IsNullOrEmpty(apiOperation.Summary) || string.IsNullOrEmpty(apiOperation.Description)) ? String.Empty : Environment.NewLine)
				+ apiOperation.Description);
			if (linesNoIndent != null)
			{
				foreach (string line in linesNoIndent)
				{
					bool funky = line.Contains("*/");
					var lineComment = funky ? line.Replace("*/", "") : line;
					builder.AppendLine(lineComment);
					if (funky)
					{
						Trace.TraceWarning("Doc comments contain '*/' which is invalid in JSDoc. Please remove it in the definition.");
					}
				}
			}

			builder.AppendLine(HttpMethod + " " + RelativePath);
			foreach (ParameterDescription item in this.ParameterDescriptions)
			{
				ParameterDescriptionToDocComment(builder, item);
			}

			if (!String.IsNullOrEmpty(requestBodyComment))
			{
				var funky = requestBodyComment.Contains("*/");
				var docComment = funky ? requestBodyComment.Replace("*/", "") : requestBodyComment;
				builder.AppendLine($"@param {{{TypeMapper.MapCodeTypeReferenceToTsText(RequestBodyCodeTypeReference)}}} requestBody {docComment}");
				if (funky)
				{
					Trace.TraceWarning($"param {TypeMapper.MapCodeTypeReferenceToTsText(RequestBodyCodeTypeReference)} requestBody has Doc comments containing '*/' which is invalid in JSDoc. Please remove it in the definition.");
				}
			}


			string returnTypeOfResponse = ReturnTypeReference == null ? "void" : TypeMapper.MapCodeTypeReferenceToTsText(ReturnTypeReference);
			var returnComment = NameComposer.GetOperationReturnComment(apiOperation);
			if (settings.DataAnnotationsToComments)
			{
				if (ReturnTypeReference != null)
				{
					var fieldTypeInfo = ReturnTypeReference.UserData.Contains(Fonlow.TypeScriptCodeDom.UserDataKeys.FieldTypeInfo)
						?
						ReturnTypeReference.UserData[Fonlow.TypeScriptCodeDom.UserDataKeys.FieldTypeInfo] as FieldTypeInfo
						: null;

					List<string> ss = new();
					if (!string.IsNullOrEmpty(returnComment))
					{
						ss.Add(returnComment);
					}

					if (fieldTypeInfo != null && fieldTypeInfo.ClrType != null && dotNetTypeCommentDic.TryGetValue(fieldTypeInfo.ClrType, out string ctm))
					{
						ss.Add(ctm);
					}

					if (ss.Count > 0)
					{
						var linesOfParamComment = LinesToIndentedLines(ss);
						builder.AppendLine($"@return {{{returnTypeOfResponse}}} {linesOfParamComment}");
					}
				}
				else
				{
					builder.AppendLine($"@return {{{returnTypeOfResponse}}} {returnComment}");
				}
			}
			else
			{
				builder.AppendLine($"@return {{{returnTypeOfResponse}}} {returnComment}");
			}

			Method.Comments.Add(new CodeCommentStatement(builder.ToString(), true));
		}

		void ParameterDescriptionToDocComment(StringBuilder builder, ParameterDescription item)
		{
			var memberSchema = item.ParameterDescriptor.Schema;
			string memberComment = item.Documentation; //memberSchema.Description is always null
			if (!String.IsNullOrEmpty(memberComment))
			{
				bool funky = memberComment.Contains("*/");
				if (funky)
				{
					memberComment = memberComment.Replace("*/", "");
					Trace.TraceWarning($"{item.Name} has Doc comments containing '*/' which is invalid in JSDoc. Please remove it in the definition.");
				}
			}

			CodeTypeReference tsParameterType = item.ParameterTypeReference;
			if (settings.DataAnnotationsToComments)
			{
				List<string> ss = ComponentsHelper.GetParamCommentsFromAnnotations(memberSchema, true);
				if (!String.IsNullOrEmpty(memberComment))
				{
					ss.Insert(0, memberComment);
				}

				if (!ComponentsHelper.FieldSchemaContainsValueConstraints(item.ParameterDescriptor.Schema))
				{
					bool paramTypeCommentExists = dotNetTypeCommentDic.TryGetValue(item.ParameterDescriptor.ParameterType, out string paramTypeComment);
					if (paramTypeCommentExists)
					{
						ss.Add(paramTypeComment);
					}
				}

				if (ss.Count > 0)
				{
					var linesOfParamComment = LinesToIndentedLines(ss);
					builder.AppendLine($"@param {{{TypeMapper.MapCodeTypeReferenceToTsText(tsParameterType)}}} {item.Name} {linesOfParamComment}");
				}
			}
			else
			{
				if (!string.IsNullOrEmpty(memberComment))
				{
					builder.AppendLine($"@param {{{TypeMapper.MapCodeTypeReferenceToTsText(tsParameterType)}}} {item.Name} {memberComment}");
				}
			}
		}

		/// <summary>
		/// Wraping according to https://google.github.io/styleguide/jsguide.html#jsdoc-line-wrapping. 
		/// </summary>
		/// <param name="lines"></param>
		/// <returns></returns>
		static string LinesToIndentedLines(IList<string> lines)
		{
			if (lines == null || lines.Count == 0)
			{
				return null;
			}

			if (lines.Count == 1)
			{
				return lines[0];
			}

			StringBuilder builder = new();
			builder.AppendLine(lines[0]);
			for (int i = 1; i < lines.Count; i++)
			{
				builder.Append("    ");
				builder.Append(lines[i]);
			}

			return builder.ToString();
		}

		protected static string RemoveTrialEmptyString(string s)
		{
			int p = s.IndexOf(" + ''", StringComparison.Ordinal);
			//Debug.Assert(p > -1, "Must match the end string in RemoveTrialEmptyString");
			if (p > -1)
			{
				return s.Remove(p, 5);
			}

			int p2 = s.IndexOf(")'", StringComparison.Ordinal);
			if (p2 > -1)
			{
				return s.Remove(p2 + 1, 1);
			}

			return s;
		}

		protected CodeParameterDeclarationExpression[] CreateCodeParameterDeclarationExpressions()
		{
			return this.ParameterDescriptions.Select(d =>
			{
				var optionalNullTypeText = d.ParameterDescriptor.IsRequired ? String.Empty : " | null | undefined";
				//var optionalParamText = d.ParameterDescriptor.IsRequired ? String.Empty : "?";
				return new CodeParameterDeclarationExpression(TypeMapper.MapCodeTypeReferenceToTsText(d.ParameterTypeReference) + optionalNullTypeText, d.Name);
			}).ToArray();
		}

		protected abstract CodeMemberMethod CreateMethodName();

		protected abstract void RenderImplementation();

		protected abstract string CreateUriQueryForTs(string uriText, ParameterDescription[] parameterDescriptions);
	}

}
