//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	using System;
	using System.Linq;
	using System.Collections.Generic;
	using System.Threading.Tasks;
	using System.Text.Json;
	using System.Text.Json.Serialization;
	using Fonlow.Net.Http;
	
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ErrorResponse
	{
		
		/// <summary>
		/// Error message.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="error")]
		public string Error { get; set; }
	}
	
	/// <summary>
	/// This extends from ExecuteRequestBase to add the preview_only option.
	///
	///(1) Providers who allow side effects or (2) actions that do not have a side effect should use this class.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ExecuteRequest
	{
		
		/// <summary>
		/// Plain english instructions. Provide as much detail as possible, even if other fields are present.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="instructions")]
		public string Instructions { get; set; }
		
		/// <summary>
		/// If true, we will not execute the action, but will return the params of the preview.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="preview_only")]
		public System.Nullable<System.Boolean> Preview_only { get; set; }
	}
	
	/// <summary>
	/// This is a summary of the results given the action that was executed.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ExecuteResponse
	{
		
		/// <summary>
		/// The name of the action that was executed.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="action_used")]
		public string Action_used { get; set; }
		
		/// <summary>
		/// The rest of the full results. Always returns an array of objects
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="additional_results")]
		public string[] Additional_results { get; set; }
		
		/// <summary>
		/// A hint for the assistant on what to do next.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="assistant_hint")]
		public string Assistant_hint { get; set; }
		
		/// <summary>
		/// The error message if the execution failed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error")]
		public string Error { get; set; }
		
		/// <summary>
		/// The id of the execution log.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// The params we used / will use to execute the action.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="input_params")]
		public string Input_params { get; set; }
		
		/// <summary>
		/// A trimmed down result of the first item of the full results. Ideal for humans and language models!
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="result")]
		public string Result { get; set; }
		
		/// <summary>
		/// Human readable labels for some of the keys in the result.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="result_field_labels")]
		public string Result_field_labels { get; set; }
		
		/// <summary>
		/// The URL to run the action or review the AI choices the AI made for input_params given instructions.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="review_url")]
		public string Review_url { get; set; }
		
		/// <summary>
		/// The status of the execution.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="status")]
		public System.Nullable<ExecuteResponseStatus> Status { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum ExecuteResponseStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		success = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		error = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		empty = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		preview = 3,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ExposedActionResponseSchema
	{
		
		/// <summary>
		/// URL to configure and expose more actions.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="configuration_link")]
		public string Configuration_link { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="results")]
		public ExposedActionSchema[] Results { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ExposedActionSchema
	{
		
		/// <summary>
		/// Description of the action.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// The unique ID of the exposed action.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// The operation ID of the exposed action.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="operation_id")]
		public string Operation_id { get; set; }
		
		/// <summary>
		/// Available hint fields for the action.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="params")]
		public string Params { get; set; }
	}
	
	public partial class Misc
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerOptions jsonSerializerSettings;
		
		public Misc(System.Net.Http.HttpClient httpClient, JsonSerializerOptions jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// Check
		/// Test that the API and auth are working.
		/// Check api/v1/check/
		/// </summary>
		/// <returns>OK</returns>
		public async Task CheckAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/check/";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get Configuration Link
		/// Provides a link to configure more actions. Alternatively, searching through apps and actions will provide more specific configuration links.
		/// Get_configuration_link api/v1/configuration-link/
		/// </summary>
		/// <returns>OK</returns>
		public async Task Get_configuration_linkAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/configuration-link/";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get Execution Log Endpoint
		/// Get the execution log for a given execution log id.
		/// Get_execution_log_endpoint api/v1/execution-log/{execution_log_id}/
		/// </summary>
		/// <returns>OK</returns>
		public async Task<ExecuteResponse> Get_execution_log_endpointAsync(string execution_log_id, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/execution-log/"+ (execution_log_id==null? "" : System.Uri.EscapeDataString(execution_log_id))+"/";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ExecuteResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List Exposed Actions
		/// List all the currently exposed actions for the given account.
		/// List_exposed_actions api/v1/exposed/
		/// </summary>
		/// <returns>OK</returns>
		public async Task<ExposedActionResponseSchema> List_exposed_actionsAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/exposed/";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ExposedActionResponseSchema>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Execute App Action Endpoint
		/// Give us a plain english description of exact action you want to do. There should be dynamically generated documentation for this endpoint for each action that is exposed.
		/// Execute_app_action_endpoint api/v1/exposed/{exposed_app_action_id}/execute/
		/// </summary>
		/// <returns>OK</returns>
		public async Task<ExecuteResponse> Execute_app_action_endpointAsync(string exposed_app_action_id, ExecuteRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "api/v1/exposed/"+ (exposed_app_action_id==null? "" : System.Uri.EscapeDataString(exposed_app_action_id))+"/execute/";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ExecuteResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
}

namespace Fonlow.Net.Http
{
	using System.Net.Http;

	public class WebApiRequestException : HttpRequestException
	{
		public new System.Net.HttpStatusCode StatusCode { get; private set; }

		public string Response { get; private set; }

		public System.Net.Http.Headers.HttpResponseHeaders Headers { get; private set; }

		public System.Net.Http.Headers.MediaTypeHeaderValue ContentType { get; private set; }

		public WebApiRequestException(string message, System.Net.HttpStatusCode statusCode, string response, System.Net.Http.Headers.HttpResponseHeaders headers, System.Net.Http.Headers.MediaTypeHeaderValue contentType) : base(message)
		{
			StatusCode = statusCode;
			Response = response;
			Headers = headers;
			ContentType = contentType;
		}
	}

	public static class ResponseMessageExtensions
	{
		public static void EnsureSuccessStatusCodeEx(this HttpResponseMessage responseMessage)
		{
			if (!responseMessage.IsSuccessStatusCode)
			{
				var responseText = responseMessage.Content.ReadAsStringAsync().Result;
				var contentType = responseMessage.Content.Headers.ContentType;
				throw new WebApiRequestException(responseMessage.ReasonPhrase, responseMessage.StatusCode, responseText, responseMessage.Headers, contentType);
			}
		}
	}
}