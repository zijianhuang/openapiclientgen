using Fonlow.OpenApiClientGen.ClientTypes;
using Fonlow.TypeScriptCodeDom;
using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
using System.Diagnostics;
using System.Text;
using System.Linq;

namespace Fonlow.CodeDom.Web.Ts
{
	/// <summary>
	/// Generate a client function upon ApiDescription
	/// </summary>
	public abstract class ClientApiTsFunctionGenAbstract
	{
		OpenApiOperation apiOperation;
		protected ParameterDescriptionEx[] ParameterDescriptions { get; private set; }
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

		protected ClientApiTsFunctionGenAbstract()
		{
		}

		public CodeMemberMethod CreateApiFunction(Settings settings, string relativePath, OperationType httpMethod, OpenApiOperation apiOperation, ComponentsToTsTypes com2TsTypes)
		{
			if (!(new OperationType[] { OperationType.Get, OperationType.Post, OperationType.Put, OperationType.Delete, OperationType.Patch }).Any(d => d == httpMethod))
			{
				Trace.TraceWarning("This HTTP method {0} is not yet supported", httpMethod);
				return null;
			}

			this.nameComposer = new NameComposer(settings);
			this.apiOperation = apiOperation;
			this.HttpMethod = httpMethod;
			this.ActionName = nameComposer.GetActionName(apiOperation, httpMethod.ToString(), relativePath);
			this.bodyContentRefBuilder = new BodyContentRefBuilder(com2TsTypes, ActionName);
			this.parametersRefBuilder = new ParametersRefBuilder(com2TsTypes, ActionName);
			this.ParameterDescriptions = parametersRefBuilder.OpenApiParametersToParameterDescriptions(apiOperation.Parameters);
			if (httpMethod == OperationType.Post || httpMethod == OperationType.Put || httpMethod == OperationType.Patch)
			{
				Tuple<CodeTypeReference, string, bool> kc = bodyContentRefBuilder.GetBodyContent(apiOperation, httpMethod.ToString(), relativePath);
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
			catch (CodeGenException ex)
			{
				if (ex.Pending)
				{
					throw new CodeGenException($"When generating TS scripts, definition {relativePath}=>{httpMethod} triggers error {ex.Message}");
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
				+ ((String.IsNullOrEmpty(apiOperation.Summary) || string.IsNullOrEmpty(apiOperation.Description)) ? String.Empty : "\n")
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
			foreach (ParameterDescriptionEx item in ParameterDescriptions)
			{
				CodeTypeReference tsParameterType = item.ParameterTypeReference;// Poco2TsGen.TranslateToClientTypeReference(item.ParameterDescriptor.ParameterType);
				if (!String.IsNullOrEmpty(item.Documentation))
				{
					var funky = item.Documentation.Contains("*/");
					var docComment = funky ? item.Documentation.Replace("*/", "") : item.Documentation;
					builder.AppendLine($"@param {{{TypeMapper.MapCodeTypeReferenceToTsText(tsParameterType)}}} {item.Name} {docComment}");
					if (funky)
					{
						Trace.TraceWarning($"param {TypeMapper.MapCodeTypeReferenceToTsText(tsParameterType)}  {item.Name} has Doc comments containing '*/' which is invalid in JSDoc. Please remove it in the definition.");
					}
				}
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
			builder.AppendLine($"@return {{{returnTypeOfResponse}}} {NameComposer.GetOperationReturnComment(apiOperation)}");

			Method.Comments.Add(new CodeCommentStatement(builder.ToString(), true));
		}

		protected static string RemoveTrialEmptyString(string s)
		{
			int p = s.IndexOf(" + ''");
			//Debug.Assert(p > -1, "Must match the end string in RemoveTrialEmptyString");
			if (p > -1)
			{
				return s.Remove(p, 5);
			}

			int p2 = s.IndexOf(")'");
			if (p2 > -1)
			{
				return s.Remove(p2 + 1, 1);
			}

			return s;
		}

		protected abstract CodeMemberMethod CreateMethodName();

		protected abstract void RenderImplementation();

		protected abstract string CreateUriQueryForTs(string uriText, ParameterDescriptionEx[] parameterDescriptions);
	}

}
