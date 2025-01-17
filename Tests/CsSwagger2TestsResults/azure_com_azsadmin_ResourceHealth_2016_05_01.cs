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
	
	
	public class ResourceHealth
	{
	}
	
	/// <summary>
	/// Pageable list of resource health objects.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ResourceHealthList
	{
		
		/// <summary>
		/// URI to next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of resource health objects.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public ResourceHealth[] Value { get; set; }
	}
	
	public class ResourceHealthModel
	{
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
		/// Returns a list of each resource's health under a service.
		/// ResourceHealths_List subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/{location}/serviceHealths/{serviceRegistrationId}/resourceHealths
		/// </summary>
		/// <param name="subscriptionId">Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="location">Name of the region</param>
		/// <param name="serviceRegistrationId">Service registration ID.</param>
		/// <param name="api_version">Client API Version.</param>
		/// <param name="filter">OData filter parameter.</param>
		/// <returns>OK</returns>
		public async Task<ResourceHealthList> ResourceHealths_ListAsync(string subscriptionId, string resourceGroupName, string location, string serviceRegistrationId, string api_version, string filter)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/"+ (location==null? "" : System.Uri.EscapeDataString(location))+"/serviceHealths/"+ (serviceRegistrationId==null? "" : System.Uri.EscapeDataString(serviceRegistrationId))+"/resourceHealths&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version))+"&$filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ResourceHealthList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns the requested health information about a resource.
		/// ResourceHealths_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/{location}/serviceHealths/{serviceRegistrationId}/resourceHealths/{resourceRegistrationId}
		/// </summary>
		/// <param name="subscriptionId">Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="location">Name of the region</param>
		/// <param name="serviceRegistrationId">Service registration ID.</param>
		/// <param name="resourceRegistrationId">Resource registration ID.</param>
		/// <param name="api_version">Client API Version.</param>
		/// <param name="filter">OData filter parameter.</param>
		/// <returns>OK</returns>
		public async Task<ResourceHealth> ResourceHealths_GetAsync(string subscriptionId, string resourceGroupName, string location, string serviceRegistrationId, string resourceRegistrationId, string api_version, string filter)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/"+ (location==null? "" : System.Uri.EscapeDataString(location))+"/serviceHealths/"+ (serviceRegistrationId==null? "" : System.Uri.EscapeDataString(serviceRegistrationId))+"/resourceHealths/"+ (resourceRegistrationId==null? "" : System.Uri.EscapeDataString(resourceRegistrationId))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version))+"&$filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ResourceHealth>(streamContent, jsonSerializerSettings);
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
