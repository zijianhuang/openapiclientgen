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
	
	
	public class BastionHost
	{
	}
	
	public class BastionHostIPConfiguration
	{
	}
	
	/// <summary>
	/// Properties of IP configuration of an Bastion Host.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class BastionHostIPConfigurationPropertiesFormat
	{
		
		/// <summary>
		/// IP address allocation method.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="privateIPAllocationMethod")]
		public System.Nullable<BastionHostIPConfigurationPropertiesFormatPrivateIPAllocationMethod> PrivateIPAllocationMethod { get; set; }
		
		/// <summary>
		/// The current provisioning state.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisioningState")]
		public System.Nullable<BastionHostIPConfigurationPropertiesFormatProvisioningState> ProvisioningState { get; set; }
		
		/// <summary>
		/// Reference to another subresource.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="publicIPAddress")]
		public object PublicIPAddress { get; set; }
		
		/// <summary>
		/// Reference to another subresource.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="subnet")]
		public object Subnet { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum BastionHostIPConfigurationPropertiesFormatPrivateIPAllocationMethod
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Static = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Dynamic = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum BastionHostIPConfigurationPropertiesFormatProvisioningState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Succeeded = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Updating = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Deleting = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Failed = 3,
	}
	
	/// <summary>
	/// Response for ListBastionHosts API service call.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class BastionHostListResult
	{
		
		/// <summary>
		/// URL to get the next set of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of Bastion Hosts in a resource group.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public BastionHost[] Value { get; set; }
	}
	
	/// <summary>
	/// Properties of the Bastion Host.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class BastionHostPropertiesFormat
	{
		
		/// <summary>
		/// FQDN for the endpoint on which bastion host is accessible.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dnsName")]
		public string DnsName { get; set; }
		
		/// <summary>
		/// IP configuration of the Bastion Host resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="ipConfigurations")]
		public BastionHostIPConfiguration[] IpConfigurations { get; set; }
		
		/// <summary>
		/// The current provisioning state.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisioningState")]
		public BastionHostIPConfigurationPropertiesFormatProvisioningState ProvisioningState { get; set; }
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
		/// Lists all Bastion Hosts in a subscription.
		/// BastionHosts_List subscriptions/{subscriptionId}/providers/Microsoft.Network/bastionHosts
		/// </summary>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>Success. The operation returns a list of Bastion Host resources.</returns>
		public async Task<BastionHostListResult> BastionHosts_ListAsync(string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/providers/Microsoft.Network/bastionHosts?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<BastionHostListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists all Bastion Hosts in a resource group.
		/// BastionHosts_ListByResourceGroup subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/bastionHosts
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>Success. The operation returns a list of BastionHost resources.</returns>
		public async Task<BastionHostListResult> BastionHosts_ListByResourceGroupAsync(string resourceGroupName, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/bastionHosts&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<BastionHostListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets the specified Bastion Host.
		/// BastionHosts_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/bastionHosts/{bastionHostName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="bastionHostName">The name of the Bastion Host.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>Request successful. The operation returns an BastionHost resource.</returns>
		public async Task<BastionHost> BastionHosts_GetAsync(string resourceGroupName, string bastionHostName, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/bastionHosts/"+ (bastionHostName==null? "" : System.Uri.EscapeDataString(bastionHostName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<BastionHost>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates the specified Bastion Host.
		/// BastionHosts_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/bastionHosts/{bastionHostName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="bastionHostName">The name of the Bastion Host.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="requestBody">Parameters supplied to the create or update Bastion Host operation.</param>
		/// <returns>Update successful. The operation returns the resulting Bastion Host resource.</returns>
		public async Task<BastionHost> BastionHosts_CreateOrUpdateAsync(string resourceGroupName, string bastionHostName, string api_version, string subscriptionId, BastionHost requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/bastionHosts/"+ (bastionHostName==null? "" : System.Uri.EscapeDataString(bastionHostName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<BastionHost>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes the specified Bastion Host.
		/// BastionHosts_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/bastionHosts/{bastionHostName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="bastionHostName">The name of the Bastion Host.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>Delete successful.</returns>
		public async Task BastionHosts_DeleteAsync(string resourceGroupName, string bastionHostName, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/bastionHosts/"+ (bastionHostName==null? "" : System.Uri.EscapeDataString(bastionHostName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
