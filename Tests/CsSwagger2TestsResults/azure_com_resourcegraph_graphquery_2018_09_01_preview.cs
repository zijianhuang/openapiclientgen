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
	/// Error Field contract.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ErrorFieldContract
	{
		
		/// <summary>
		/// Property level error code.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// Human-readable representation of property-level error.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
		
		/// <summary>
		/// Property name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="target")]
		public string Target { get; set; }
	}
	
	/// <summary>
	/// Error message body that will indicate why the operation failed.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class GraphQueryError
	{
		
		/// <summary>
		/// Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// The list of invalid fields send in request, in case of validation error.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="details")]
		public ErrorFieldContract[] Details { get; set; }
		
		/// <summary>
		/// Human-readable representation of the error.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// Graph query list result.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class GraphQueryListResult
	{
		
		/// <summary>
		/// URL to fetch the next set of queries.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// An array of graph queries.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public GraphQueryResource[] Value { get; set; }
	}
	
	/// <summary>
	/// Graph Query entity definition.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class GraphQueryResource : Resource
	{
		
		/// <summary>
		/// Properties that contain a graph query.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public GraphQueryProperties Properties { get; set; }
	}
	
	/// <summary>
	/// Properties that contain a graph query.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class GraphQueryProperties
	{
		
		/// <summary>
		/// The description of a graph query.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// KQL query that will be graph.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="query")]
		public string Query { get; set; }
		
		/// <summary>
		/// Enum indicating a type of graph query.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resultKind")]
		public System.Nullable<GraphQueryPropertiesResultKind> ResultKind { get; set; }
		
		/// <summary>
		/// Date and time in UTC of the last modification that was made to this graph query definition.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timeModified")]
		public System.Nullable<System.DateTimeOffset> TimeModified { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum GraphQueryPropertiesResultKind
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		basic = 0,
	}
	
	/// <summary>
	/// Properties that contain a workbook for PATCH operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class GraphQueryPropertiesUpdateParameters
	{
		
		/// <summary>
		/// The description of a graph query.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// KQL query that will be graph.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="query")]
		public string Query { get; set; }
	}
	
	/// <summary>
	/// The parameters that can be provided when updating workbook properties properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class GraphQueryUpdateParameters
	{
		
		/// <summary>
		/// This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="eTag")]
		public string ETag { get; set; }
		
		/// <summary>
		/// Properties that contain a workbook for PATCH operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public GraphQueryPropertiesUpdateParameters Properties { get; set; }
		
		/// <summary>
		/// Resource tags
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public System.Collections.Generic.Dictionary<string, string> Tags { get; set; }
	}
	
	/// <summary>
	/// An azure resource object
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Resource
	{
		
		/// <summary>
		/// This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="eTag")]
		public string ETag { get; set; }
		
		/// <summary>
		/// Azure resource Id
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Azure resource name. This is GUID value. The display name should be assigned within properties field.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Resource tags
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public System.Collections.Generic.Dictionary<string, string> Tags { get; set; }
		
		/// <summary>
		/// Azure resource type
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
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
		/// Get all graph queries defined within a specified subscription and resource group.
		/// GraphQuery_List subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries
		/// </summary>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>A list containing 0 or more graph queries.</returns>
		public async Task<GraphQueryListResult> GraphQuery_ListAsync(string subscriptionId, string resourceGroupName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.ResourceGraph/queries&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<GraphQueryListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get a single graph query by its resourceName.
		/// GraphQuery_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries/{resourceName}
		/// </summary>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="resourceName">The name of the Graph Query resource.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>A graph query definition.</returns>
		public async Task<GraphQueryResource> GraphQuery_GetAsync(string subscriptionId, string resourceGroupName, string resourceName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.ResourceGraph/queries/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<GraphQueryResource>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Create a new graph query.
		/// GraphQuery_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries/{resourceName}
		/// </summary>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="resourceName">The name of the Graph Query resource.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="requestBody">Properties that need to be specified to create a new graph query.</param>
		/// <returns>The newly created graph query.</returns>
		public async Task<GraphQueryResource> GraphQuery_CreateOrUpdateAsync(string subscriptionId, string resourceGroupName, string resourceName, string api_version, GraphQueryResource requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.ResourceGraph/queries/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<GraphQueryResource>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Delete a graph query.
		/// GraphQuery_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries/{resourceName}
		/// </summary>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="resourceName">The name of the Graph Query resource.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>The graph query has been successfully deleted.</returns>
		public async Task GraphQuery_DeleteAsync(string subscriptionId, string resourceGroupName, string resourceName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.ResourceGraph/queries/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
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
		/// Updates a graph query that has already been added.
		/// GraphQuery_Update subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceGraph/queries/{resourceName}
		/// </summary>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="resourceName">The name of the Graph Query resource.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="requestBody">Properties that need to be specified to create a new graph query.</param>
		/// <returns>The graph query definition updated.</returns>
		public async Task<GraphQueryResource> GraphQuery_UpdateAsync(string subscriptionId, string resourceGroupName, string resourceName, string api_version, GraphQueryUpdateParameters requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.ResourceGraph/queries/"+ (resourceName==null? "" : System.Uri.EscapeDataString(resourceName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<GraphQueryResource>(streamContent, jsonSerializerSettings);
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