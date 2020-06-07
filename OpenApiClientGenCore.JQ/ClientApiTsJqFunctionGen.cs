using Fonlow.TypeScriptCodeDom;
using System;
using System.CodeDom;
using System.Diagnostics;
using System.Linq;
using Fonlow.OpenApiClientGen.ClientTypes;

namespace Fonlow.CodeDom.Web.Ts
{
	/// <summary>
	/// Generate a client function upon ApiDescription for AXIOS
	/// </summary>
	public class ClientApiTsJqFunctionGen : ClientApiTsFunctionGenBase
	{
		readonly Settings settings;
		readonly string contentType;

		public ClientApiTsJqFunctionGen(Settings settings, JSOutput jsOutput) : base()
		{
			this.settings = settings;

			contentType = jsOutput.ContentType;
			if (String.IsNullOrEmpty(contentType))
			{
				contentType = "application/json;charset=UTF-8";
			}
		}

		protected override CodeMemberMethod CreateMethodName()
		{
			return new CodeMemberMethod()
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final,
				Name = ActionName,
			};
		}

		protected override void RenderImplementation()
		{
			string httpMethodName = HttpMethod.ToString().ToLower(); //Method is always uppercase.
																	 //deal with parameters
			var parameters = ParameterDescriptions.Select(d =>
				new CodeParameterDeclarationExpression(TypeMapper.MapCodeTypeReferenceToTsText(d.ParameterTypeReference), d.Name))
				.ToList();

			var returnTypeText = TypeMapper.MapCodeTypeReferenceToTsText(ReturnTypeReference);
			if (returnTypeText == "any" || String.IsNullOrEmpty(returnTypeText) || returnTypeText == "response")
			{
				returnTypeText = "void";
			}
			var callbackTypeText = String.Format("(data : {0}) => any", returnTypeText);

			Debug.WriteLine("callback: " + callbackTypeText);
			var callbackTypeReference = new CodeSnipetTypeReference(callbackTypeText);
			parameters.Add(new CodeParameterDeclarationExpression(callbackTypeReference, "callback"));
			Method.Parameters.AddRange(parameters.ToArray());

			if (RequestBodyCodeTypeReference != null)
			{
				CodeParameterDeclarationExpression p = new CodeParameterDeclarationExpression(RequestBodyCodeTypeReference, "requestBody");
				Method.Parameters.Add(p);
			}

			if (settings.HandleHttpRequestHeaders)
			{
				Method.Parameters.Add(new CodeParameterDeclarationExpression(
					"() => {[header: string]: string}", "headersHandler?"));
			}

			var jsUriQuery = UriQueryHelper.CreateUriQueryForTs(RelativePath, ParameterDescriptions);
			//var hasArrayJoin = jsUriQuery != null && jsUriQuery.Contains(".join(");
			//var uriText = jsUriQuery == null ? $"this.baseUri + '{RelativePath}'" :
			//	RemoveTrialEmptyString(hasArrayJoin ? $"this.baseUri + '{jsUriQuery}" : $"this.baseUri + '{jsUriQuery}'");
			string uriText = jsUriQuery == null ? $"this.baseUri + '{RelativePath}'" :
				RemoveTrialEmptyString($"this.baseUri + '{jsUriQuery}'");

			if (httpMethodName == "get" || httpMethodName == "delete")
			{
				Method.Statements.Add(new CodeSnippetStatement($"this.httpClient.{httpMethodName}({uriText}, callback, this.error, this.statusCode, headersHandler);"));
				return;
			}

			if (httpMethodName == "post" || httpMethodName == "put")
			{
				Method.Statements.Add(new CodeSnippetStatement($"this.httpClient.{httpMethodName}({uriText}, requestBody, callback, this.error, this.statusCode, '{contentType}', headersHandler);"));
				return;
			}

			Debug.Assert(false, "How come?");
		}

	}

}
