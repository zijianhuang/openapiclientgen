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
	/// A managed database security alert policy.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ManagedDatabaseSecurityAlertPolicy
	{
		
		/// <summary>
		/// Properties of a security alert policy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public SecurityAlertPolicyProperties Properties { get; set; }
	}
	
	/// <summary>
	/// Properties of a security alert policy.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class SecurityAlertPolicyProperties
	{
		
		/// <summary>
		/// Specifies the UTC creation time of the policy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="creationTime")]
		public System.Nullable<System.DateTimeOffset> CreationTime { get; set; }
		
		/// <summary>
		/// Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="disabledAlerts")]
		public string[] DisabledAlerts { get; set; }
		
		/// <summary>
		/// Specifies that the alert is sent to the account administrators.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="emailAccountAdmins")]
		public System.Nullable<System.Boolean> EmailAccountAdmins { get; set; }
		
		/// <summary>
		/// Specifies an array of e-mail addresses to which the alert is sent.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="emailAddresses")]
		public string[] EmailAddresses { get; set; }
		
		/// <summary>
		/// Specifies the number of days to keep in the Threat Detection audit logs.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="retentionDays")]
		public System.Nullable<System.Int32> RetentionDays { get; set; }
		
		/// <summary>
		/// Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="state")]
		public SecurityAlertPolicyPropertiesState State { get; set; }
		
		/// <summary>
		/// Specifies the identifier key of the Threat Detection audit storage account.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="storageAccountAccessKey")]
		public string StorageAccountAccessKey { get; set; }
		
		/// <summary>
		/// Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="storageEndpoint")]
		public string StorageEndpoint { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum SecurityAlertPolicyPropertiesState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		New = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Enabled = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Disabled = 2,
	}
	
	/// <summary>
	/// A list of the managed database's security alert policies.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ManagedDatabaseSecurityAlertPolicyListResult
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
		public ManagedDatabaseSecurityAlertPolicy[] Value { get; set; }
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
		/// Gets a list of managed database's security alert policies.
		/// ManagedDatabaseSecurityAlertPolicies_ListByDatabase subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="managedInstanceName">The name of the managed instance.</param>
		/// <param name="databaseName">The name of the managed database for which the security alert policies are defined.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully retrieved the managed database security alert policies.</returns>
		public async Task<ManagedDatabaseSecurityAlertPolicyListResult> ManagedDatabaseSecurityAlertPolicies_ListByDatabaseAsync(string resourceGroupName, string managedInstanceName, string databaseName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/managedInstances/"+ (managedInstanceName==null? "" : System.Uri.EscapeDataString(managedInstanceName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/securityAlertPolicies&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ManagedDatabaseSecurityAlertPolicyListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets a managed database's security alert policy.
		/// ManagedDatabaseSecurityAlertPolicies_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies/{securityAlertPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="managedInstanceName">The name of the managed instance.</param>
		/// <param name="databaseName">The name of the managed database for which the security alert policy is defined.</param>
		/// <param name="securityAlertPolicyName">The name of the security alert policy.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <returns>Successfully retrieved the managed database security alert policy.</returns>
		public async Task<ManagedDatabaseSecurityAlertPolicy> ManagedDatabaseSecurityAlertPolicies_GetAsync(string resourceGroupName, string managedInstanceName, string databaseName, ManagedDatabaseSecurityAlertPolicies_GetSecurityAlertPolicyName securityAlertPolicyName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/managedInstances/"+ (managedInstanceName==null? "" : System.Uri.EscapeDataString(managedInstanceName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/securityAlertPolicies/"+securityAlertPolicyName+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ManagedDatabaseSecurityAlertPolicy>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates or updates a database's security alert policy.
		/// ManagedDatabaseSecurityAlertPolicies_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies/{securityAlertPolicyName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.</param>
		/// <param name="managedInstanceName">The name of the managed instance.</param>
		/// <param name="databaseName">The name of the managed database for which the security alert policy is defined.</param>
		/// <param name="securityAlertPolicyName">The name of the security alert policy.</param>
		/// <param name="subscriptionId">The subscription ID that identifies an Azure subscription.</param>
		/// <param name="api_version">The API version to use for the request.</param>
		/// <param name="requestBody">The database security alert policy.</param>
		/// <returns>Successfully set the managed database security alert policy.</returns>
		public async Task<ManagedDatabaseSecurityAlertPolicy> ManagedDatabaseSecurityAlertPolicies_CreateOrUpdateAsync(string resourceGroupName, string managedInstanceName, string databaseName, ManagedDatabaseSecurityAlertPolicies_CreateOrUpdateSecurityAlertPolicyName securityAlertPolicyName, string subscriptionId, string api_version, ManagedDatabaseSecurityAlertPolicy requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Sql/managedInstances/"+ (managedInstanceName==null? "" : System.Uri.EscapeDataString(managedInstanceName))+"/databases/"+ (databaseName==null? "" : System.Uri.EscapeDataString(databaseName))+"/securityAlertPolicies/"+securityAlertPolicyName+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ManagedDatabaseSecurityAlertPolicy>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum ManagedDatabaseSecurityAlertPolicies_GetSecurityAlertPolicyName
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="default")]
		_default = 0,
	}
	
	public enum ManagedDatabaseSecurityAlertPolicies_CreateOrUpdateSecurityAlertPolicyName
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="default")]
		_default = 0,
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
