using Fonlow.TypeScriptCodeDom;
using System;
using System.CodeDom;
using System.Diagnostics;
using System.Linq;
using Fonlow.OpenApiClientGen.ClientTypes;

namespace Fonlow.CodeDom.Web.Ts
{
	/// <summary>
	/// Generate a client function upon ApiDescription for Angular
	/// </summary>
	public class ClientApiTsNG2FunctionGen : ClientApiTsFunctionGenBase
	{
		const string NG2HttpResponse = "Response";
		const string NG2HttpBlobResponse = "HttpResponse<Blob>";
		const string NG2HttpStringResponse = "HttpResponse<string>";

		string returnTypeText = null;
		string contentType;
		Settings settings;

		public ClientApiTsNG2FunctionGen(Settings settings, JSOutput jsOutput) : base()
		{
			this.contentType = jsOutput.ContentType;
			this.settings = settings;
		}

		protected override CodeMemberMethod CreateMethodName()
		{
			returnTypeText = TypeMapper.MapCodeTypeReferenceToTsText(ReturnTypeReference);
			if (returnTypeText == "any" || returnTypeText == "void")
			{
				returnTypeText = NG2HttpResponse;
			}
			else if (returnTypeText == "response")
			{
				returnTypeText = NG2HttpStringResponse;
			}
			else if (returnTypeText == "blobresponse")
			{
				returnTypeText = NG2HttpBlobResponse;
			}

			var typeCast = returnTypeText == null ? "<Response>" : $"<{returnTypeText}>";

			var callbackTypeText = $"Observable{typeCast}";
			Debug.WriteLine("callback: " + callbackTypeText);
			var returnTypeReferenceWithObservable = new CodeSnipetTypeReference(callbackTypeText);

			return new CodeMemberMethod()
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final,
				Name = ActionName,
				ReturnType = returnTypeReferenceWithObservable,
			};
		}


		protected override void RenderImplementation()
		{
			var httpMethodName = HttpMethod.ToString().ToLower(); //Method is always uppercase.
																  //deal with parameters
			var parameters = ParameterDescriptions.Select(d =>
				new CodeParameterDeclarationExpression(TypeMapper.MapCodeTypeReferenceToTsText(d.ParameterTypeReference), d.Name))
				.ToArray();

			Method.Parameters.AddRange(parameters);
			if (RequestBodyCodeTypeReference != null)
			{
				var p = new CodeParameterDeclarationExpression(RequestBodyCodeTypeReference, "requestBody");
				Method.Parameters.Add(p);
			}

			if (settings.HandleHttpRequestHeaders)
			{
				Method.Parameters.Add(new CodeParameterDeclarationExpression(
					"(headers: HttpHeaders)=>{}", "headersHandler?"));
			}

			var jsUriQuery = UriQueryHelper.CreateUriQueryForTs(RelativePath, ParameterDescriptions);
			var uriText = jsUriQuery == null ? $"this.baseUri + '{RelativePath}'" :
				RemoveTrialEmptyString($"this.baseUri + '{jsUriQuery}'");

			Action CreateEmptyHeadersStatement = () =>
			 {
				 Method.Statements.Add(new CodeSnippetStatement(
					 $@"let headers: HttpHeaders = new HttpHeaders();"));
			 };

			Action CreateConditionalHeadersHandling = () =>
			 {
				 if (settings.HandleHttpRequestHeaders)
				 {
					 Method.Statements.Add(new CodeSnippetStatement(
 $@"if (headersHandler) {{
	headersHandler(headers);
}}
"));
				 }
			 };

			Action CreateContentTypeHeadersStatement = () =>
			{
				Method.Statements.Add(new CodeSnippetStatement(
$@"let headers: HttpHeaders = new HttpHeaders({{ 'Content-Type': '{contentType}' }});"));
			};

			if (ReturnTypeReference != null && ReturnTypeReference.BaseType == "System.String" && ReturnTypeReference.ArrayElementType == null)//stringAsString is for .NET Core Web API
			{
				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					CreateEmptyHeadersStatement();
					CreateConditionalHeadersHandling();

					Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, {{ headers: headers, responseType: 'text' }});"));
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put")
				{
					if (String.IsNullOrEmpty(contentType))
					{
						contentType = "application/json;charset=UTF-8";
					}

					CreateContentTypeHeadersStatement();
					CreateConditionalHeadersHandling();

					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, null, {{ headers: headers, responseType: 'text' }});"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, JSON.stringify(requestBody), {{ headers: headers, responseType: 'text' }});"));
					}

					return;
				}

			}
			else if (returnTypeText == NG2HttpBlobResponse)//translated from blobresponse to this
			{
				const string optionForStream = "{ headers: headers, observe: 'response', responseType: 'blob' }";

				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					CreateEmptyHeadersStatement();
					CreateConditionalHeadersHandling();

					Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, {optionForStream});"));
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put")
				{
					CreateEmptyHeadersStatement();
					CreateConditionalHeadersHandling();

					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, null, {optionForStream});"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, JSON.stringify(requestBody), {optionForStream});"));
					}

					return;
				}

			}
			else if (returnTypeText == NG2HttpStringResponse)//translated from response to this
			{
				const string optionForActionResult = "{ headers: headers, observe: 'response', responseType: 'text' }";

				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					CreateEmptyHeadersStatement();
					CreateConditionalHeadersHandling();

					Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, {optionForActionResult});"));
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						CreateEmptyHeadersStatement();
						CreateConditionalHeadersHandling();

						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, null, {optionForActionResult});"));
					}
					else
					{
						CreateEmptyHeadersStatement();
						CreateConditionalHeadersHandling();

						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, JSON.stringify(requestBody), {optionForActionResult});"));
					}

					return;
				}

			}
			else
			{
				var typeCast = returnTypeText == null ? "<Response>" : $"<{returnTypeText}>";
				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					CreateEmptyHeadersStatement();
					CreateConditionalHeadersHandling();

					Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}{typeCast}({uriText}, {{ headers: headers }});"));
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put")
				{
					if (String.IsNullOrEmpty(contentType))
					{
						contentType = "application/json;charset=UTF-8";
					}

					if (RequestBodyCodeTypeReference == null)
					{
						CreateEmptyHeadersStatement();
						CreateConditionalHeadersHandling();

						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}{typeCast}({uriText}, null, {{ headers: headers }});"));
					}
					else
					{
						CreateContentTypeHeadersStatement();
						CreateConditionalHeadersHandling();

						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}{typeCast}({uriText}, JSON.stringify(requestBody), {{ headers: headers }});"));
					}

					return;
				}
			}

			Debug.Assert(false, "How come?");
		}

	}

}
