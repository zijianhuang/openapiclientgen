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
	/// An error response from the Batch service.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class CloudError
	{
		
		/// <summary>
		/// An error response from the Batch service.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error")]
		public CloudErrorBody Error { get; set; }
	}
	
	/// <summary>
	/// An error response from the Batch service.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class CloudErrorBody
	{
		
		/// <summary>
		/// An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// A list of additional details about the error.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="details")]
		public CloudErrorBody[] Details { get; set; }
		
		/// <summary>
		/// A message describing the error, intended to be suitable for display in a user interface.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
		
		/// <summary>
		/// The target of the particular error. For example, the name of the property in error.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="target")]
		public string Target { get; set; }
	}
	
	public class DdosCustomPolicy
	{
	}
	
	/// <summary>
	/// DDoS custom policy properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DdosCustomPolicyPropertiesFormat
	{
		
		/// <summary>
		/// The protocol-specific DDoS policy customization parameters.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="protocolCustomSettings")]
		public ProtocolCustomSettingsFormat[] ProtocolCustomSettings { get; set; }
		
		/// <summary>
		/// The current provisioning state.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisioningState")]
		public System.Nullable<DdosCustomPolicyPropertiesFormatProvisioningState> ProvisioningState { get; set; }
		
		/// <summary>
		/// The list of public IPs associated with the DDoS custom policy resource. This list is read-only.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="publicIPAddresses")]
		public DdosCustomPolicyPropertiesFormatPublicIPAddresses[] DdosCustomPolicyPropertiesFormatPublicIPAddresses { get; set; }
		
		/// <summary>
		/// The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resourceGuid")]
		public string ResourceGuid { get; set; }
	}
	
	/// <summary>
	/// DDoS custom policy properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ProtocolCustomSettingsFormat
	{
		
		/// <summary>
		/// The protocol for which the DDoS protection policy is being customized.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="protocol")]
		public System.Nullable<ProtocolCustomSettingsFormatProtocol> Protocol { get; set; }
		
		/// <summary>
		/// The customized DDoS protection source rate.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sourceRateOverride")]
		public string SourceRateOverride { get; set; }
		
		/// <summary>
		/// The customized DDoS protection trigger rate.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="triggerRateOverride")]
		public string TriggerRateOverride { get; set; }
		
		/// <summary>
		/// The customized DDoS protection trigger rate sensitivity degrees. High: Trigger rate set with most sensitivity w.r.t. normal traffic. Default: Trigger rate set with moderate sensitivity w.r.t. normal traffic. Low: Trigger rate set with less sensitivity w.r.t. normal traffic. Relaxed: Trigger rate set with least sensitivity w.r.t. normal traffic.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="triggerSensitivityOverride")]
		public System.Nullable<ProtocolCustomSettingsFormatTriggerSensitivityOverride> TriggerSensitivityOverride { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ProtocolCustomSettingsFormatProtocol
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Tcp = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Udp = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Syn = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ProtocolCustomSettingsFormatTriggerSensitivityOverride
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Relaxed = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Low = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Default = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		High = 3,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum DdosCustomPolicyPropertiesFormatProvisioningState
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
	
	public class DdosCustomPolicyPropertiesFormatPublicIPAddresses
	{
		
		/// <summary>
		/// Resource ID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
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
		/// Gets information about the specified DDoS custom policy.
		/// DdosCustomPolicies_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosCustomPolicies/{ddosCustomPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="ddosCustomPolicyName">The name of the DDoS custom policy.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>Request successful. The operation returns the specified DDoS custom policy resource.</returns>
		public async Task<DdosCustomPolicy> DdosCustomPolicies_GetAsync(string resourceGroupName, string ddosCustomPolicyName, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/ddosCustomPolicies/"+ (ddosCustomPolicyName==null? "" : System.Uri.EscapeDataString(ddosCustomPolicyName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DdosCustomPolicy>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates a DDoS custom policy.
		/// DdosCustomPolicies_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosCustomPolicies/{ddosCustomPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="ddosCustomPolicyName">The name of the DDoS custom policy.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="requestBody">Parameters supplied to the create or update operation.</param>
		/// <returns>Update successful. The operation returns the resulting DDoS custom policy resource.</returns>
		public async Task<DdosCustomPolicy> DdosCustomPolicies_CreateOrUpdateAsync(string resourceGroupName, string ddosCustomPolicyName, string api_version, string subscriptionId, DdosCustomPolicy requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/ddosCustomPolicies/"+ (ddosCustomPolicyName==null? "" : System.Uri.EscapeDataString(ddosCustomPolicyName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DdosCustomPolicy>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes the specified DDoS custom policy.
		/// DdosCustomPolicies_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosCustomPolicies/{ddosCustomPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="ddosCustomPolicyName">The name of the DDoS custom policy.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <returns>Delete successful.</returns>
		public async Task DdosCustomPolicies_DeleteAsync(string resourceGroupName, string ddosCustomPolicyName, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/ddosCustomPolicies/"+ (ddosCustomPolicyName==null? "" : System.Uri.EscapeDataString(ddosCustomPolicyName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
		/// Update a DDoS custom policy tags.
		/// DdosCustomPolicies_UpdateTags subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ddosCustomPolicies/{ddosCustomPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="ddosCustomPolicyName">The name of the DDoS custom policy.</param>
		/// <param name="api_version">Client API version.</param>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="requestBody">Parameters supplied to the update DDoS custom policy resource tags.</param>
		/// <returns>Update successful. The operation returns the resulting DDoS custom policy resource.</returns>
		public async Task<DdosCustomPolicy> DdosCustomPolicies_UpdateTagsAsync(string resourceGroupName, string ddosCustomPolicyName, string api_version, string subscriptionId, object requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Network/ddosCustomPolicies/"+ (ddosCustomPolicyName==null? "" : System.Uri.EscapeDataString(ddosCustomPolicyName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DdosCustomPolicy>(streamContent, jsonSerializerSettings);
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