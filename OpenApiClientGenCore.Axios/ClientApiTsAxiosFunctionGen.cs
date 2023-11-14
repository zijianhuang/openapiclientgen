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
	public class ClientApiTsAxiosFunctionGen : ClientApiTsFunctionGenBase
	{
		const string AxiosHttpResponse = "AxiosResponse";
		const string AxiostHttpBlobResponse = "AxiosResponse<Blob>";
		const string AxiosHttpStringResponse = "AxiosResponse<string>";

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

		public ClientApiTsAxiosFunctionGen(Settings settings, JSOutput jsOutput) : base()
		{
			this.settings = settings;

			string contentType = jsOutput.ContentType;
			if (String.IsNullOrEmpty(contentType))
			{
				contentType = "application/json;charset=UTF-8";
			}

			string contentOptionsWithHeadersHandlerForString = $"{{ headers: headersHandler ? Object.assign(headersHandler(), {{ 'Content-Type': '{contentType}' }}): {{ 'Content-Type': '{contentType}' }},  responseType: 'text' }}";
			ContentOptionsForString = settings.HandleHttpRequestHeaders ? contentOptionsWithHeadersHandlerForString : $"{{ headers: {{ 'Content-Type': '{contentType}' }}, responseType: 'text' }}";

			string contentOptionsWithHeadersHandlerForResponse = $"{{ headers: headersHandler ? Object.assign(headersHandler(), {{ 'Content-Type': '{contentType}' }}): {{ 'Content-Type': '{contentType}' }}, responseType: 'text' }}";
			ContentOptionsForResponse = settings.HandleHttpRequestHeaders ? contentOptionsWithHeadersHandlerForResponse : $"{{ headers: {{ 'Content-Type': '{contentType}' }}, responseType: 'text' }}";

			string optionsWithHeadersHandlerAndContent = $"{{ headers: headersHandler ? Object.assign(headersHandler(), {{ 'Content-Type': '{contentType}' }}): {{ 'Content-Type': '{contentType}' }} }}";
			OptionsWithContent = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandlerAndContent : $"{{ headers: {{ 'Content-Type': '{contentType}' }} }}";

			const string optionsWithHeadersHandlerForString = "{ headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }";
			OptionsForString = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandlerForString : "{ responseType: 'text' }";

			const string optionsWithHeadersHandlerForResponse = "{ headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }";
			OptionsForResponse = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandlerForResponse : "{ responseType: 'text' }";

			string optionsWithHeadersHandler = "{ headers: headersHandler ? headersHandler() : undefined }";
			Options = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandler : "{}";
		}

		protected override CodeMemberMethod CreateMethodName()
		{
			returnTypeText = TypeMapper.MapCodeTypeReferenceToTsText(ReturnTypeReference);
			if (returnTypeText == "any" || returnTypeText == "void")
			{
				returnTypeText = AxiosHttpResponse;
			}
			else if (returnTypeText == "response")
			{
				returnTypeText = AxiosHttpStringResponse;
			}
			else if (returnTypeText == "blobresponse")
			{
				returnTypeText = AxiostHttpBlobResponse;
			}

			typeCast = returnTypeText == null ? "AxiosResponse<string>" : $"{returnTypeText}";

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

			Method.Parameters.AddRange(parameters);

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
			string uriText = jsUriQuery == null ? $"this.baseUri + '{RelativePath}'" :
				RemoveTrialEmptyString($"this.baseUri + '{jsUriQuery}'");

			if (ReturnTypeReference != null && ReturnTypeReference.BaseType == "System.String" && ReturnTypeReference.ArrayElementType == null)//stringAsString is for .NET Core Web API
			{
				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, {OptionsForString}).then(d => d.data);")); //todo: type cast is not really needed.
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put" || httpMethodName == "patch")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, null, {OptionsForString}).then(d => d.data);"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, JSON.stringify(requestBody), {ContentOptionsForString}).then(d => d.data);"));
					}

					return;
				}
			}
			else if (returnTypeText == AxiosHttpStringResponse)//translated from response to this
			{
				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, {OptionsForResponse});"));
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put" || httpMethodName == "patch")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, null, {OptionsForResponse});"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, JSON.stringify(requestBody), {ContentOptionsForResponse});"));
					}

					return;
				}

			}
			else if (returnTypeText == AxiosHttpResponse) // client should care about only status
			{
				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, {Options});"));
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put" || httpMethodName == "patch")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, null, {Options});"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, JSON.stringify(requestBody), {ContentOptionsForString});"));
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
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, {OptionsForResponse});")); //only http response needed
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}{returnTypeCast}({uriText}, {Options}).then(d => d.data);"));
					}
				}
				else if (httpMethodName == "post" || httpMethodName == "put" || httpMethodName == "patch")
				{
					if (returnTypeText == null)//http response
					{
						if (RequestBodyCodeTypeReference == null)//no content body
						{
							Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, null, {OptionsForResponse});"));
						}
						else
						{
							Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, JSON.stringify(requestBody), {ContentOptionsForResponse});"));
						}
					}
					else // type is returned
					{
						if (RequestBodyCodeTypeReference == null) // no body
						{
							Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}{returnTypeCast}({uriText}, null, {Options}).then(d => d.data);"));
						}
						else
						{
							Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}{returnTypeCast}({uriText}, JSON.stringify(requestBody), {OptionsWithContent}).then(d => d.data);"));
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
