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
		//const string NG2HttpResponse = "Response";
		const string NG2HttpBlobResponse = "HttpResponse<Blob>";
		const string NG2HttpStringResponse = "HttpResponse<string>";

		readonly string OptionsForString;
		readonly string OptionsForResponse;

		readonly string Options;

		readonly string ContentOptionsForString;
		readonly string ContentOptionsForResponse;

		readonly string OptionsWithContent;

		string returnTypeText = null;

		readonly Settings settings;

		public ClientApiTsNG2FunctionGen(Settings settings, JSOutput jsOutput) : base()
		{
			this.settings = settings;

			string contentType = jsOutput.ContentType;
			if (String.IsNullOrEmpty(contentType))
			{
				contentType = "application/json;charset=UTF-8";
			}

			string contentOptionsWithHeadersHandlerForString = $"{{ headers: headersHandler ? headersHandler().append('Content-Type', '{contentType}') : new HttpHeaders({{ 'Content-Type': '{contentType}' }}),  responseType: 'text' }}";
			ContentOptionsForString = settings.HandleHttpRequestHeaders ? contentOptionsWithHeadersHandlerForString : $"{{ headers: {{ 'Content-Type': '{contentType}' }}, responseType: 'text' }}";

			string contentOptionsWithHeadersHandlerForResponse = $"{{ headers: headersHandler ? headersHandler().append('Content-Type', '{contentType}') : new HttpHeaders({{ 'Content-Type': '{contentType}' }}), observe: 'response', responseType: 'text' }}";
			ContentOptionsForResponse = settings.HandleHttpRequestHeaders ? contentOptionsWithHeadersHandlerForResponse : $"{{ headers: {{ 'Content-Type': '{contentType}' }}, observe: 'response', responseType: 'text' }}";

			string optionsWithHeadersHandlerAndContent = $"{{ headers: headersHandler ? headersHandler().append('Content-Type', '{contentType}') : new HttpHeaders({{ 'Content-Type': '{contentType}' }}) }}";
			OptionsWithContent = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandlerAndContent : $"{{ headers: {{ 'Content-Type': '{contentType}' }} }}";

			const string optionsWithHeadersHandlerForString = "{ headers: headersHandler ? headersHandler() : undefined, responseType: 'text' }";
			OptionsForString = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandlerForString : "{ responseType: 'text' }";

			const string optionsWithHeadersHandlerForResponse = "{ headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' }";
			OptionsForResponse = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandlerForResponse : "{ observe: 'response', responseType: 'text' }";

			string optionsWithHeadersHandler = "{ headers: headersHandler ? headersHandler() : undefined }";
			Options = settings.HandleHttpRequestHeaders ? optionsWithHeadersHandler : "{}";
		}

		protected override CodeMemberMethod CreateMethodName()
		{
			returnTypeText = TypeMapper.MapCodeTypeReferenceToTsText(ReturnTypeReference);
			if (returnTypeText == "any" || returnTypeText == "void")
			{
				returnTypeText = NG2HttpStringResponse;// NG2HttpResponse;
			}
			else if (returnTypeText == "response")
			{
				returnTypeText = NG2HttpStringResponse;
			}
			else if (returnTypeText == "blobresponse")
			{
				returnTypeText = NG2HttpBlobResponse;
			}

			string typeCast = returnTypeText == null ? "<HttpResponse<string>>" : $"<{returnTypeText}>";

			string callbackTypeText = $"Observable{typeCast}";
			Debug.WriteLine("callback: " + callbackTypeText);
			CodeSnipetTypeReference returnTypeReferenceWithObservable = new CodeSnipetTypeReference(callbackTypeText);

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
			CodeParameterDeclarationExpression[] parameters = ParameterDescriptions.Select(d =>
				new CodeParameterDeclarationExpression(TypeMapper.MapCodeTypeReferenceToTsText(d.ParameterTypeReference), d.Name))
				.ToArray();

			Method.Parameters.AddRange(parameters);
			if (RequestBodyCodeTypeReference != null)
			{
				CodeParameterDeclarationExpression p = new CodeParameterDeclarationExpression(RequestBodyCodeTypeReference, "requestBody");
				Method.Parameters.Add(p);
			}

			if (settings.HandleHttpRequestHeaders)
			{
				Method.Parameters.Add(new CodeParameterDeclarationExpression(
					"() => HttpHeaders", "headersHandler?"));
			}

			string jsUriQuery = UriQueryHelper.CreateUriQueryForTs(RelativePath, ParameterDescriptions);
			string uriText = jsUriQuery == null ? $"this.baseUri + '{RelativePath}'" :
				RemoveTrialEmptyString($"this.baseUri + '{jsUriQuery}'");

			if (ReturnTypeReference != null && ReturnTypeReference.BaseType == "System.String" && ReturnTypeReference.ArrayElementType == null)//stringAsString is for .NET Core Web API
			{
				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, {OptionsForString});"));
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, null, {ContentOptionsForString});"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, JSON.stringify(requestBody), {ContentOptionsForString});"));
					}

					return;
				}

			}
			//else if (returnTypeText == NG2HttpBlobResponse)//translated from blobresponse to this
			//{
			//	const string optionForStream = "{ headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'blob' }";

			//	if (httpMethodName == "get" || httpMethodName == "delete")
			//	{
			//		Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, {optionForStream});"));
			//		return;
			//	}

			//	if (httpMethodName == "post" || httpMethodName == "put")
			//	{
			//		if (RequestBodyCodeTypeReference == null)
			//		{
			//			Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, null, {optionForStream});"));
			//		}
			//		else
			//		{
			//			Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, JSON.stringify(requestBody), {optionForStream});"));
			//		}

			//		return;
			//	}

			//}
			else if (returnTypeText == NG2HttpStringResponse)//translated from response to this
			{
				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, {OptionsForResponse});"));
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, null, {OptionsForResponse});"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, JSON.stringify(requestBody), {OptionsForResponse});"));
					}

					return;
				}

			}
			else
			{
				string returnTypeCast = returnTypeText==null? String.Empty : $"<{returnTypeText}>";

				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					if (returnTypeText == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}({uriText}, {OptionsForResponse});")); //only http response needed
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}{returnTypeCast}({uriText}, {Options});"));
					}
				}
				else if (httpMethodName == "post" || httpMethodName == "put")
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
							Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}{returnTypeCast}({uriText}, null, {Options});"));
						}
						else
						{
							Method.Statements.Add(new CodeSnippetStatement($"return this.http.{httpMethodName}{returnTypeCast}({uriText}, JSON.stringify(requestBody), {OptionsWithContent});"));
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
