using Fonlow.TypeScriptCodeDom;
using System;
using System.CodeDom;
using System.Diagnostics;
using System.Linq;
using Fonlow.OpenApiClientGen.ClientTypes;

namespace Fonlow.CodeDom.Web.Ts
{
	/// <summary>
	/// Generate a client function upon ApiDescription for Fetch
	/// </summary>
	public class ClientApiTsFetchFunctionGen : ClientApiTsFunctionGenBase
	{
		const string FetchHttpResponse = "Response";
		const string FetchtHttpBlobResponse = "Blob";
		//const string FetchHttpStringResponse = "string";
	
		string returnTypeText = null;
		string typeCast = null;
		readonly string contentType;
		readonly ISettings settings;

		public ClientApiTsFetchFunctionGen(ISettings settings, JSOutput jsOutput) : base()
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
			returnTypeText = TypeMapper.MapCodeTypeReferenceToTsText(ReturnTypeReference);
			if (returnTypeText == "any" || returnTypeText == "void")
			{
				returnTypeText = FetchHttpResponse;
			}
			else if (returnTypeText == "response")
			{
				returnTypeText = FetchHttpResponse;
			}
			else if (returnTypeText == "blobresponse")
			{
				returnTypeText = FetchtHttpBlobResponse;
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
			const string returnNullOrText = "{if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;}";
			const string returnBolb = "{if (d.status<=202) return d.blob(); else if (d.status==204) return null; throw d;}";
			const string returnJson = "{if (d.status<=202) return d.json(); else if (d.status==204) return null; throw d;}";

			string contentOptionsWithHeadersHandlerForString = $"{{ method: '{HttpMethodName}', headers: headersHandler ? Object.assign(headersHandler(), {{ 'Content-Type': '{contentType}' }}): {{ 'Content-Type': '{contentType}' }}, body: JSON.stringify(requestBody) }}";
			var ContentOptionsForString = settings.HandleHttpRequestHeaders ? contentOptionsWithHeadersHandlerForString : $"{{ method: '{HttpMethodName}', headers: {{ 'Content-Type': '{contentType}' }}, body: JSON.stringify(requestBody) }}";

			string contentOptionsWithHeadersHandlerForResponse = $"{{ method: '{HttpMethodName}', headers: headersHandler ? Object.assign(headersHandler(), {{ 'Content-Type': '{contentType}' }}): {{ 'Content-Type': '{contentType}' }}, body: JSON.stringify(requestBody) }}";
			var ContentOptionsForResponse = settings.HandleHttpRequestHeaders ? contentOptionsWithHeadersHandlerForResponse : $"{{ method: '{HttpMethodName}', headers: {{ 'Content-Type': '{contentType}' }}, body: JSON.stringify(requestBody) }}";

			string optionsWithHeadersHandlerAndContent = $"{{ method: '{HttpMethodName}', headers: headersHandler ? Object.assign(headersHandler(), {{ 'Content-Type': '{contentType}' }}): {{ 'Content-Type': '{contentType}' }}, body: JSON.stringify(requestBody) }}";
			var OptionsWithContent = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandlerAndContent : $"{{ method: '{HttpMethodName}', headers: {{ 'Content-Type': '{contentType}' }}, body: JSON.stringify(requestBody) }}";

			string optionsWithHeadersHandlerForString = $"{{ method: '{HttpMethodName}', headers: headersHandler ? headersHandler() : undefined }}";
			var OptionsForString = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandlerForString : $"{{ method: '{HttpMethodName}' }}";

			string optionsWithHeadersHandlerForResponse = $"{{ method: '{HttpMethodName}', headers: headersHandler ? headersHandler() : undefined }}";
			var OptionsForResponse = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandlerForResponse : $"{{ method: '{HttpMethodName}' }}";

			string optionsWithHeadersHandler = $"{{ method: '{HttpMethodName}', headers: headersHandler ? headersHandler() : undefined }}";
			var Options = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandler : $"{{ method: '{HttpMethodName}' }}";

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
				if (HttpMethodName == "get" || HttpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return fetch({uriText}, {OptionsForString}).then(d => {{if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;}});")); //todo: type cast is not really needed.
					return;
				}

				if (HttpMethodName == "post" || HttpMethodName == "put" || HttpMethodName == "patch")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return fetch({uriText}, {OptionsForString}).then(d => {{if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;}});"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return fetch({uriText}, {ContentOptionsForString}).then(d => {{if (d.status<=204) return d.status == 204 ? null : d.text(); throw d;}});"));
					}

					return;
				}
			}
			else if (returnTypeText == FetchHttpResponse) // client should care about only status
			{
				if (HttpMethodName == "get" || HttpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return fetch({uriText}, {Options});"));
					return;
				}

				if (HttpMethodName == "post" || HttpMethodName == "put" || HttpMethodName == "patch")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return fetch({uriText}, {Options});"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return fetch({uriText}, {OptionsWithContent});"));
					}

					return;
				}

			}
			else
			{
				string returnTypeCast = returnTypeText == null ? String.Empty : $"<{returnTypeText}>";

				if (HttpMethodName == "get" || HttpMethodName == "delete")
				{
					if (returnTypeText == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return fetch({uriText}, {OptionsForResponse});")); //only http response needed
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return fetch({uriText}, {Options}).then(d => {{if (d.status<=204) return d.json(); throw d;}});"));
					}
				}
				else if (HttpMethodName == "post" || HttpMethodName == "put" || HttpMethodName == "patch")
				{
					if (returnTypeText == null)//http response
					{
						if (RequestBodyCodeTypeReference == null)//no content body
						{
							Method.Statements.Add(new CodeSnippetStatement($"return fetch({uriText}, {OptionsForResponse});"));
						}
						else
						{
							Method.Statements.Add(new CodeSnippetStatement($"return fetch({uriText}, {ContentOptionsForResponse});"));
						}
					}
					else // type is returned
					{
						if (RequestBodyCodeTypeReference == null) // no body
						{
							Method.Statements.Add(new CodeSnippetStatement($"return fetch({uriText}, {Options}).then(d => {{if (d.status<=204) return d.json(); throw d;}});"));
						}
						else
						{
							Method.Statements.Add(new CodeSnippetStatement($"return fetch({uriText}, {OptionsWithContent}).then(d => {{if (d.status<=204) return d.json(); throw d;}});"));
						}
					}
				}
				else
				{
					Debug.Assert(false, $"How come with {HttpMethodName}?");
				}
			}


		}

	}

}
