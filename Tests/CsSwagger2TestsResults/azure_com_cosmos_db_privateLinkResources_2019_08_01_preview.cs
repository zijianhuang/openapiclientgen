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
	/// A private link resource
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class PrivateLinkResource
	{
		
		/// <summary>
		/// Properties of a private link resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public PrivateLinkResourceProperties Properties { get; set; }
	}
	
	/// <summary>
	/// Properties of a private link resource.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class PrivateLinkResourceProperties
	{
		
		/// <summary>
		/// The private link resource group id.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="groupId")]
		public string GroupId { get; set; }
		
		/// <summary>
		/// The private link resource required member names.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="requiredMembers")]
		public string[] RequiredMembers { get; set; }
	}
	
	/// <summary>
	/// A list of private link resources
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class PrivateLinkResourceListResult
	{
		
		/// <summary>
		/// Array of private link resources
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public PrivateLinkResource[] Value { get; set; }
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
		/// Gets the private link resources that need to be created for a Cosmos DB account.
		/// PrivateLinkResources_ListByDatabaseAccount subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateLinkResources
		/// </summary>
		/// <param name="subscriptionId">Azure subscription ID.</param>
		/// <param name="resourceGroupName">Name of an Azure resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="api_version">Version of the API to be used with the client request. The current version is 2019-08-01.</param>
		/// <param name="accountName">Cosmos DB database account name.
		/// Min length: 3
		/// Max length: 50
		// </param>
		/// <returns>Successfully retrieved private link resources.</returns>
		public async Task<PrivateLinkResourceListResult> PrivateLinkResources_ListByDatabaseAccountAsync(string subscriptionId, string resourceGroupName, string api_version, string accountName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.DocumentDB/databaseAccounts/"+ (accountName==null? "" : System.Uri.EscapeDataString(accountName))+"/privateLinkResources&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<PrivateLinkResourceListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets the private link resources that need to be created for a Cosmos DB account.
		/// PrivateLinkResources_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateLinkResources/{groupName}
		/// </summary>
		/// <param name="subscriptionId">Azure subscription ID.</param>
		/// <param name="resourceGroupName">Name of an Azure resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="api_version">Version of the API to be used with the client request. The current version is 2019-08-01.</param>
		/// <param name="accountName">Cosmos DB database account name.
		/// Min length: 3
		/// Max length: 50
		// </param>
		/// <param name="groupName">The name of the private link resource.</param>
		/// <returns>Successfully retrieved a specified private link resource.</returns>
		public async Task<PrivateLinkResource> PrivateLinkResources_GetAsync(string subscriptionId, string resourceGroupName, string api_version, string accountName, string groupName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.DocumentDB/databaseAccounts/"+ (accountName==null? "" : System.Uri.EscapeDataString(accountName))+"/privateLinkResources/"+ (groupName==null? "" : System.Uri.EscapeDataString(groupName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<PrivateLinkResource>(streamContent, jsonSerializerSettings);
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
