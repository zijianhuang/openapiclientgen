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

		string returnTypeText = null;
		string typeCast = null;
		string contentType;

		public ClientApiTsAxiosFunctionGen(string contentType) : base()
		{
			this.contentType = contentType;
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

			var jsUriQuery = UriQueryHelper.CreateUriQueryForTs(RelativePath, ParameterDescriptions);
			var uriText = jsUriQuery == null ? $"this.baseUri + '{RelativePath}'" :
				RemoveTrialEmptyString($"this.baseUri + '{jsUriQuery}'");

			if (ReturnTypeReference != null && ReturnTypeReference.BaseType == "System.String" && ReturnTypeReference.ArrayElementType == null)//stringAsString is for .NET Core Web API
			{
				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, {{ responseType: 'text' }}).then(d => d.data as {typeCast});")); //todo: type cast is not really needed.
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, null, {{headers: {{ 'Content-Type': '{contentType}' }}, responseType: 'text' }}).then(d => d.data as {typeCast});"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, JSON.stringify(requestBody), {{ headers: {{ 'Content-Type': '{contentType}' }}, responseType: 'text' }}).then(d => d.data as {typeCast});"));
					}

					return;
				}
			}
			else if (returnTypeText == AxiostHttpBlobResponse)//translated from blobresponse to this
			{
				const string optionForStream = "{ responseType: 'blob' }";

				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, {optionForStream}).then(d => d.data as {typeCast});"));
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, null, {optionForStream}).then(d => d.data as {typeCast});"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, JSON.stringify(requestBody), {optionForStream}).then(d => d.data as {typeCast});"));
					}

					return;
				}
			}
			else if (returnTypeText == AxiosHttpStringResponse)//translated from response to this
			{
				const string optionForActionResult = "{ responseType: 'text' }";

				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, {optionForActionResult}).then(d => d.data as {typeCast});"));
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, null, {optionForActionResult}).then(d => d.data as {typeCast});"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, JSON.stringify(requestBody), {{ headers: {{ 'Content-Type': '{contentType}' }}, responseType: 'text' }});"));
					}

					return;
				}

			}
			else if (returnTypeText == AxiosHttpResponse) // client should care about only status
			{
				const string optionForActionResult = "{ responseType: 'text' }";

				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, {optionForActionResult});"));
					return;
				}

				if (httpMethodName == "post" || httpMethodName == "put")
				{
					if (RequestBodyCodeTypeReference == null)
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, null, {optionForActionResult});"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, JSON.stringify(requestBody), {{ headers: {{ 'Content-Type': '{contentType}' }}, responseType: 'text' }});"));
					}

					return;
				}

			}
			else
			{
				if (httpMethodName == "get" || httpMethodName == "delete")
				{
					Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}).then(d => d.data as {typeCast});"));
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
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, null, {{ headers: {{ 'Content-Type': '{contentType}' }} }}).then(d => d.data as {typeCast});"));
					}
					else
					{
						Method.Statements.Add(new CodeSnippetStatement($"return Axios.{httpMethodName}({uriText}, JSON.stringify(requestBody), {{ headers: {{ 'Content-Type': '{contentType}' }} }}).then(d => d.data as {typeCast});"));
					}

					return;
				}
			}

			Debug.Assert(false, "How come?");
		}

	}

}
