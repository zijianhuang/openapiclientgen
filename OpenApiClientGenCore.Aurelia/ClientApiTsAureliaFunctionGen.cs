using Fonlow.TypeScriptCodeDom;
using System;
using System.CodeDom;
using System.Diagnostics;
using System.Linq;
using Fonlow.OpenApiClientGen.ClientTypes;

namespace Fonlow.CodeDom.Web.Ts
{
	/// <summary>
	/// Generate a client function upon ApiDescription for Aurelia
	/// </summary>
	public class ClientApiTsAureliaFunctionGen : ClientApiTsFunctionGenBase
	{
		const string AureliaHttpResponse = "Response";
		const string AureliatHttpBlobResponse = "Blob<Blob>";
		const string AureliaHttpStringResponse = "string";

		readonly string OptionsForString;
		readonly string OptionsForResponse;

		readonly string Options;

		readonly string ContentOptionsForString;
		readonly string ContentOptionsForResponse;

		readonly string OptionsWithContent;
		
		string returnTypeText = null;
		string typeCast = null;
		//string contentType;
		readonly Settings settings;

		public ClientApiTsAureliaFunctionGen(Settings settings, JSOutput jsOutput) : base()
		{
			this.settings = settings;

			string contentType = jsOutput.ContentType;
			if (String.IsNullOrEmpty(contentType))
			{
				contentType = "application/json;charset=UTF-8";
			}

			string contentOptionsWithHeadersHandlerForString = $"{{ headers: headersHandler ? Object.assign(headersHandler(), {{ 'Content-Type': '{contentType}' }}): {{ 'Content-Type': '{contentType}' }} }}";
			ContentOptionsForString = settings.HandleHttpRequestHeaders ? contentOptionsWithHeadersHandlerForString : $"{{ headers: {{ 'Content-Type': '{contentType}' }} }}";

			string contentOptionsWithHeadersHandlerForResponse = $"{{ headers: headersHandler ? Object.assign(headersHandler(), {{ 'Content-Type': '{contentType}' }}): {{ 'Content-Type': '{contentType}' }} }}";
			ContentOptionsForResponse = settings.HandleHttpRequestHeaders ? contentOptionsWithHeadersHandlerForResponse : $"{{ headers: {{ 'Content-Type': '{contentType}' }} }}";

			string optionsWithHeadersHandlerAndContent = $"{{ headers: headersHandler ? Object.assign(headersHandler(), {{ 'Content-Type': '{contentType}' }}): {{ 'Content-Type': '{contentType}' }} }}";
			OptionsWithContent = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandlerAndContent : $"{{ headers: {{ 'Content-Type': '{contentType}' }} }}";

			const string optionsWithHeadersHandlerForString = "{ headers: headersHandler ? headersHandler() : undefined }";
			OptionsForString = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandlerForString : "{}";

			const string optionsWithHeadersHandlerForResponse = "{ headers: headersHandler ? headersHandler() : undefined }";
			OptionsForResponse = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandlerForResponse : "{}";

			string optionsWithHeadersHandler = "{ headers: headersHandler ? headersHandler() : undefined }";
			Options = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandler : "{}";
		}

		protected override CodeMemberMethod CreateMethodName()
		{
			returnTypeText = TypeMapper.MapCodeTypeReferenceToTsText(ReturnTypeReference);
			if (returnTypeText == "any" || returnTypeText == "void")
			{
				returnTypeText = AureliaHttpResponse;
			}
			else if (returnTypeText == "response")
			{
				returnTypeText = AureliaHttpResponse;
			}
			else if (returnTypeText == "blobresponse")
			{
				returnTypeText = AureliatHttpBlobResponse;
			}

			typeCast = returnTypeText == null ? "Response" : $"{returnTypeText}";

			string callbackTypeText = $"Promise<{typeCast}>";
			Debug.WriteLine("callback: " + callbackTypeText);
			CodeSnipetTypeReference returnTypeReferenceWithObservable = new(callbackTypeText);

			return new CodeMemberMethod()
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final,
				Name = ActionName,
				ReturnType = returnTypeReferenceWithObservable,
			};
		}


		protected override void RenderImplementation()
		{
			string httpMethodName = HttpMethod.ToString().ToLower(); //Method is always uppercase.
																	 //deal with parameters
			var parameters = CreateCodeParameterDeclarationExpressions();

			Method.Parameters.AddRange(parameters.ToArray());

			if (RequestBodyCodeTypeReference != null)
			{
				CodeParameterDeclarationExpression p = new(RequestBodyCodeTypeReference, "requestBody");
				Method.Parameters.Add(p);
			}

			if (settings.HandleHttpRequestHeaders)
			{
				Method.Parameters.Add(new CodeParameterDeclarationExpression(
					"() => {[header: string]: string}", "headersHandler?"));
			}

			string jsUriQuery = UriQueryHelper.CreateUriQueryForTs(RelativePath, ParameterDescriptions);
			string uriText = jsUriQuery == null ? $"'{RelativePath}'" :
				RemoveTrialEmptyString($"'{jsUriQuery}'");

			if (ReturnTypeReference != null && ReturnTypeReference.BaseType == "System.String" && ReturnTypeReference.ArrayElementType == null)//stringAsString is for .NET Core Web API
			{
				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, {OptionsForString}).then(d => d.text());")); //todo: type cast is not really needed.
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put" || httpMethodName == "patch")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, null, {OptionsForString}).then(d => d.text());"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, JSON.stringify(requestBody), {ContentOptionsForString}).then(d => d.text());"));
					}

					return;
				}
			}
			else if (returnTypeText == AureliaHttpStringResponse)//translated from response to this
			{
				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, {OptionsForResponse}).then(d => d.json());"));
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put" || httpMethodName == "patch")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, null, {OptionsForResponse}).then(d => d.json());"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, JSON.stringify(requestBody), {ContentOptionsForResponse}).then(d => d.json());"));
					}

					return;
				}

			}
			else if (returnTypeText == AureliaHttpResponse) // client should care about only status
			{
				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, {Options});"));
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put" || httpMethodName == "patch")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, null, {Options});"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, JSON.stringify(requestBody), {OptionsWithContent});"));
					}

					return;
				}

			}
			else
			{
				string returnTypeCast = returnTypeText == null ? String.Empty : $"<{returnTypeText}>";

				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					if (returnTypeText == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, {OptionsForResponse});")); //only http response needed
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, {Options}).then(d => d.json());"));
					}
				}
				else if (httpMethodName == "post" || httpMethodName == "put" || httpMethodName == "patch")
				{
					if (returnTypeText == null)//http response
					{
						if (RequestBodyCodeTypeReference == null)//no content body
						{
							Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, null, {OptionsForResponse});"));
						}
						else
						{
							Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, JSON.stringify(requestBody), {ContentOptionsForResponse});"));
						}
					}
					else // type is returned
					{
						if (RequestBodyCodeTypeReference == null) // no body
						{
							Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, null, {Options}).then(d => d.json());"));
						}
						else
						{
							Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, JSON.stringify(requestBody), {OptionsWithContent}).then(d => d.json());"));
						}
					}
				}
				else
				{
					Debug.Assert(false, $"How come with {httpMethodName}?");
				}
			}


		}

	}

}
