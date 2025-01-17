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
	
	
	/// <summary>
	/// A elastic pool operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ElasticPoolOperation
	{
		
		/// <summary>
		/// The properties of a elastic pool operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ElasticPoolOperationProperties Properties { get; set; }
	}
	
	/// <summary>
	/// The properties of a elastic pool operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ElasticPoolOperationProperties
	{
		
		/// <summary>
		/// The operation description.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// The name of the elastic pool the operation is being performed on.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="elasticPoolName")]
		public string ElasticPoolName { get; set; }
		
		/// <summary>
		/// The operation error code.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errorCode")]
		public System.Nullable<System.Int32> ErrorCode { get; set; }
		
		/// <summary>
		/// The operation error description.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errorDescription")]
		public string ErrorDescription { get; set; }
		
		/// <summary>
		/// The operation error severity.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errorSeverity")]
		public System.Nullable<System.Int32> ErrorSeverity { get; set; }
		
		/// <summary>
		/// The estimated completion time of the operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="estimatedCompletionTime")]
		public System.Nullable<System.DateTimeOffset> EstimatedCompletionTime { get; set; }
		
		/// <summary>
		/// Whether the operation can be cancelled.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="isCancellable")]
		public System.Nullable<System.Boolean> IsCancellable { get; set; }
		
		/// <summary>
		/// Whether or not the error is a user error.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="isUserError")]
		public System.Nullable<System.Boolean> IsUserError { get; set; }
		
		/// <summary>
		/// The name of operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="operation")]
		public string Operation { get; set; }
		
		/// <summary>
		/// The friendly name of operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="operationFriendlyName")]
		public string OperationFriendlyName { get; set; }
		
		/// <summary>
		/// The percentage of the operation completed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="percentComplete")]
		public System.Nullable<System.Int32> PercentComplete { get; set; }
		
		/// <summary>
		/// The name of the server.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="serverName")]
		public string ServerName { get; set; }
		
		/// <summary>
		/// The operation start time.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="startTime")]
		public System.Nullable<System.DateTimeOffset> StartTime { get; set; }
		
		/// <summary>
		/// The operation state.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="state")]
		public string State { get; set; }
	}
	
	/// <summary>
	/// The response to a list elastic pool operations request
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ElasticPoolOperationListResult
	{
		
		/// <summary>
		/// Link to retrieve next page of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// Array of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public ElasticPoolOperation[] Value { get; set; }
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
		/// Gets a list of operations performed on the elastic pool.
		/// ElasticPoolOperations_ListByElasticPool subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/operations
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>The request for getting elastic pool operations has been executed successfully.</returns>
		public async Task<ElasticPoolOperationListResult> ElasticPoolOperations_ListByElasticPoolAsync(string resourceGroupName, string serverName, string elasticPoolName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/elasticPools/"+ (elasticPoolName==null? "" : System.Uri.EscapeDataString(elasticPoolName))+"/operations&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ElasticPoolOperationListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Cancels the asynchronous operation on the elastic pool.
		/// ElasticPoolOperations_Cancel subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/operations/{operationId}/cancel
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="serverName">The name of the server.</param>
		/// <param name="operationId">The operation identifier.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>The request for cancel has been executed successfully.</returns>
		public async Task ElasticPoolOperations_CancelAsync(string resourceGroupName, string serverName, string elasticPoolName, string operationId, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/servers/"+ (serverName==null? "" : System.Uri.EscapeDataString(serverName))+"/elasticPools/"+ (elasticPoolName==null? "" : System.Uri.EscapeDataString(elasticPoolName))+"/operations/"+ (operationId==null? "" : System.Uri.EscapeDataString(operationId))+"/cancel&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
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
