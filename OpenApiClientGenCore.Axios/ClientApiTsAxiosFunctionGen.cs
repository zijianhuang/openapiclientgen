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
		string contentType;
		readonly Settings settings;

		public ClientApiTsAxiosFunctionGen(Settings settings, JSOutput jsOutput) : base()
		{
			this.settings = settings;

			var contentType = jsOutput.ContentType;
			if (String.IsNullOrEmpty(contentType))
			{
				contentType = "application/json;charset=UTF-8";
			}

			var contentOptionsWithHeadersHandlerForString = $"{{ headers: headersHandler ? Object.assign(headersHandler(), {{ 'Content-Type': '{contentType}' }}): {{ 'Content-Type': '{contentType}' }},  responseType: 'text' }}";
			ContentOptionsForString = settings.HandleHttpRequestHeaders ? contentOptionsWithHeadersHandlerForString : $"{{ headers: {{ 'Content-Type': '{contentType}' }}, responseType: 'text' }}";

			var contentOptionsWithHeadersHandlerForResponse = $"{{ headers: headersHandler ? Object.assign(headersHandler(), {{ 'Content-Type': '{contentType}' }}): {{ 'Content-Type': '{contentType}' }}, observe: 'response', responseType: 'text' }}";
			ContentOptionsForResponse = settings.HandleHttpRequestHeaders ? contentOptionsWithHeadersHandlerForResponse : $"{{ headers: {{ 'Content-Type': '{contentType}' }}, observe: 'response', responseType: 'text' }}";

			var optionsWithHeadersHandlerAndContent = $"{{ headers: headersHandler ? Object.assign(headersHandler(), {{ 'Content-Type': '{contentType}' }}): {{ 'Content-Type': '{contentType}' }} }}";
			OptionsWithContent = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandlerAndContent : $"{{ headers: {{ 'Content-Type': '{contentType}' }} }}";

			const string optionsWithHeadersHandlerForString = "{ headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }";
			OptionsForString = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandlerForString : "{ responseType: 'text' }";

			const string optionsWithHeadersHandlerForResponse = "{ headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }";
			OptionsForResponse = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandlerForResponse : "{ responseType: 'text' }";

			var optionsWithHeadersHandler = "{ headers: headersHandler ? headersHandler() : undefined }";
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

			var callbackTypeText = $"Promise<{typeCast}>";
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
					"() => {[header: string]: string}", "headersHandler?"));
			}

			var jsUriQuery = UriQueryHelper.CreateUriQueryForTs(RelativePath, ParameterDescriptions);
			var uriText = jsUriQuery == null ? $"this.baseUri + '{RelativePath}'" :
				RemoveTrialEmptyString($"this.baseUri + '{jsUriQuery}'");

			if (ReturnTypeReference != null && ReturnTypeReference.BaseType == "System.String" && ReturnTypeReference.ArrayElementType == null)//stringAsString is for .NET Core Web API
			{
				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, {OptionsForString}).then(d => d.data);")); //todo: type cast is not really needed.
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, null, {ContentOptionsForString}).then(d => d.data);"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, JSON.stringify(requestBody), {ContentOptionsForString}).then(d => d.data);"));
					}

					return;
				}
			}
			//else if (returnTypeText == AxiostHttpBlobResponse)//translated from blobresponse to this
			//{
			//	const string optionForStream = "{ responseType: 'blob' }";

			//	if (httpMethodName == "get" || httpMethodName == "delete")
			//	{
			//		Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, {optionForStream}).then(d => d.data);"));
			//		return;
			//	}

			//	if (httpMethodName == "post" || httpMethodName == "put")
			//	{
			//		if (RequestBodyCodeTypeReference == null)
			//		{
			//			Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, null, {optionForStream}).then(d => d.data);"));
			//		}
			//		else
			//		{
			//			Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, JSON.stringify(requestBody), {optionForStream}).then(d => d.data);"));
			//		}

			//		return;
			//	}
			//}
			else if (returnTypeText == AxiosHttpStringResponse)//translated from response to this
			{
				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, {OptionsForResponse}).then(d => d.data);"));
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, null, {OptionsForResponse}).then(d => d.data);"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, JSON.stringify(requestBody), {OptionsForResponse});"));
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

				if (httpMethodName == "post" || httpMethodName == "put")
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
				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}).then(d => d.data);"));
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
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, null, {Options}).then(d => d.data);"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, JSON.stringify(requestBody), {OptionsWithContent}).then(d => d.data);"));
					}

					return;
				}
			}

			Debug.Assert(false, "How come?");
		}

	}

}
