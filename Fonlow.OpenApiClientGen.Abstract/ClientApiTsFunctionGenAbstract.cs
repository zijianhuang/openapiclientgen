using Fonlow.OpenApiClientGen.ClientTypes;
using Fonlow.TypeScriptCodeDom;
using Microsoft.OpenApi.Models;
using System;
using System.CodeDom;
using System.Diagnostics;
using System.Text;

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
		//bool returnTypeIsStream;

		protected CodeMemberMethod Method { get; private set; }
		protected ComponentsToTsTypes ComToTsTypes { get; private set; }
		NameComposer nameComposer;
		ParametersHelper parametersHelper;
		BodyContentRefBuilder bodyContentRefBuilder;
		protected string ActionName { get; private set; }
		protected OperationType HttpMethod { get; private set; }

		protected ClientApiTsFunctionGenAbstract()
		{
		}

		public CodeMemberMethod CreateApiFunction(Settings settings, string relativePath, OperationType httpMethod, OpenApiOperation apiOperation, ComponentsToTsTypes com2TsTypes)
		{
			this.nameComposer = new NameComposer(settings);
			this.parametersHelper = new ParametersHelper(com2TsTypes.ClientNamespace);
			this.bodyContentRefBuilder = new BodyContentRefBuilder(com2TsTypes, nameComposer);
			this.apiOperation = apiOperation;
			this.HttpMethod = httpMethod;
			this.ParameterDescriptions = parametersHelper.OpenApiParametersToParameterDescriptions(apiOperation.Parameters);
			if (httpMethod == OperationType.Post || httpMethod == OperationType.Put)
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

			this.ActionName = nameComposer.GetActionName(apiOperation, httpMethod.ToString(), relativePath);
			this.ComToTsTypes = com2TsTypes;

			this.RelativePath = RemovePrefixSlash(relativePath);
			if (ActionName.EndsWith("Async"))
				ActionName = ActionName[0..^5];

			Tuple<CodeTypeReference, bool, bool> r = TypeRefBuilder.GetOperationReturnTypeReference(apiOperation);
			ReturnTypeReference = r.Item1;

			//todo: stream, byte and ActionResult later.
			//returnTypeIsStream = returnType!=null && ( (returnType.FullName == typeNameOfHttpResponseMessage) 
			//	|| (returnType.FullName == typeOfIHttpActionResult) 
			//	|| (returnType.FullName == typeOfIActionResult) 
			//	|| (returnType.FullName == typeOfActionResult)
			//	|| (returnType.FullName.StartsWith("System.Threading.Tasks.Task`1[[Microsoft.AspNetCore.Mvc.IActionResult")) // .net core is not translating Task<IActionResult> properly.
			//	|| (returnType.FullName.StartsWith("System.Threading.Tasks.Task`1[[Microsoft.AspNetCore.Mvc.IHttpActionResult"))
			//	|| (returnType.FullName.StartsWith("System.Threading.Tasks.Task`1[[Microsoft.AspNetCore.Mvc.ActionResult"))
			//	);

			//create method
			Method = CreateMethodName();

			CreateDocComments();

			switch (HttpMethod)
			{
				case OperationType.Get:
				case OperationType.Delete:
				case OperationType.Post:
				case OperationType.Put:
					RenderImplementation();
					break;
				default:
					Trace.TraceWarning("This HTTP method {0} is not yet supported", HttpMethod);
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
			StringBuilder builder = new StringBuilder();
			string[] noIndent = Fonlow.DocComment.StringFunctions.TrimIndentedMultiLineTextToArray(
				apiOperation.Summary
				+ ((String.IsNullOrEmpty(apiOperation.Summary) || string.IsNullOrEmpty(apiOperation.Description)) ? String.Empty : "\n")
				+ apiOperation.Description);
			if (noIndent != null)
			{
				foreach (string item in noIndent)
				{
					builder.AppendLine(item);
				}
			}

			builder.AppendLine(HttpMethod + " " + RelativePath);
			foreach (ParameterDescriptionEx item in ParameterDescriptions)
			{
				CodeTypeReference tsParameterType = item.ParameterTypeReference;// Poco2TsGen.TranslateToClientTypeReference(item.ParameterDescriptor.ParameterType);
				if (!String.IsNullOrEmpty(item.Documentation))
				{
					builder.AppendLine($"@param {{{TypeMapper.MapCodeTypeReferenceToTsText(tsParameterType)}}} {item.Name} {item.Documentation}");
				}
			}

			if (!String.IsNullOrEmpty(requestBodyComment))
			{
				builder.AppendLine($"@param {{{TypeMapper.MapCodeTypeReferenceToTsText(RequestBodyCodeTypeReference)}}} requestBody {requestBodyComment}");
			}


			string returnTypeOfResponse = ReturnTypeReference == null ? "void" : TypeMapper.MapCodeTypeReferenceToTsText(ReturnTypeReference);
			builder.AppendLine($"@return {{{returnTypeOfResponse}}} {nameComposer.GetOperationReturnComment(apiOperation)}");

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
