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
	/// The HDInsight cluster application
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Application
	{
		
		/// <summary>
		/// The ETag for the application
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="etag")]
		public string Etag { get; set; }
		
		/// <summary>
		/// The HDInsight cluster application GET response.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ApplicationProperties Properties { get; set; }
		
		/// <summary>
		/// The tags for the application.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public System.Collections.Generic.Dictionary<string, string> Tags { get; set; }
	}
	
	/// <summary>
	/// The HDInsight cluster application GET response.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ApplicationProperties
	{
		
		/// <summary>
		/// The application state.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="applicationState")]
		public string ApplicationState { get; set; }
		
		/// <summary>
		/// The application type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="applicationType")]
		public string ApplicationType { get; set; }
		
		/// <summary>
		/// Describes the compute profile.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="computeProfile")]
		public object ComputeProfile { get; set; }
		
		/// <summary>
		/// The application create date time.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="createdDate")]
		public string CreatedDate { get; set; }
		
		/// <summary>
		/// The list of errors.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errors")]
		public ApplicationPropertiesErrors[] ApplicationPropertiesErrors { get; set; }
		
		/// <summary>
		/// The list of application HTTPS endpoints.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="httpsEndpoints")]
		public ApplicationGetHttpsEndpoint[] HttpsEndpoints { get; set; }
		
		/// <summary>
		/// The list of install script actions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="installScriptActions")]
		public ApplicationPropertiesInstallScriptActions[] ApplicationPropertiesInstallScriptActions { get; set; }
		
		/// <summary>
		/// The marketplace identifier.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="marketplaceIdentifier")]
		public string MarketplaceIdentifier { get; set; }
		
		/// <summary>
		/// The provisioning state of the application.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="provisioningState")]
		public string ProvisioningState { get; set; }
		
		/// <summary>
		/// The list of application SSH endpoints.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sshEndpoints")]
		public ApplicationGetEndpoint[] SshEndpoints { get; set; }
		
		/// <summary>
		/// The list of uninstall script actions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="uninstallScriptActions")]
		public ApplicationPropertiesUninstallScriptActions[] ApplicationPropertiesUninstallScriptActions { get; set; }
	}
	
	public class ApplicationPropertiesErrors
	{
		
		/// <summary>
		/// The error code.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// The error message.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// Gets the application HTTP endpoints.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ApplicationGetHttpsEndpoint
	{
		
		/// <summary>
		/// The list of access modes for the application.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="accessModes")]
		public string[] AccessModes { get; set; }
		
		/// <summary>
		/// The destination port to connect to.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="destinationPort")]
		public System.Nullable<System.Int32> DestinationPort { get; set; }
		
		/// <summary>
		/// The value indicates whether to disable GatewayAuth.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="disableGatewayAuth")]
		public System.Nullable<System.Boolean> DisableGatewayAuth { get; set; }
		
		/// <summary>
		/// The location of the endpoint.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		/// <summary>
		/// The public port to connect to.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="publicPort")]
		public System.Nullable<System.Int32> PublicPort { get; set; }
		
		/// <summary>
		/// The subdomain suffix of the application.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="subDomainSuffix")]
		public string SubDomainSuffix { get; set; }
	}
	
	public class ApplicationPropertiesInstallScriptActions
	{
		
		/// <summary>
		/// The application name of the script action, if any.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="applicationName")]
		public string ApplicationName { get; set; }
		
		/// <summary>
		/// The name of the script action.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The parameters for the script
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="parameters")]
		public string Parameters { get; set; }
		
		/// <summary>
		/// The list of roles where script will be executed.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="roles")]
		public string[] Roles { get; set; }
		
		/// <summary>
		/// The URI to the script.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="uri")]
		public string Uri { get; set; }
	}
	
	/// <summary>
	/// Gets the application SSH endpoint
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ApplicationGetEndpoint
	{
		
		/// <summary>
		/// The destination port to connect to.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="destinationPort")]
		public System.Nullable<System.Int32> DestinationPort { get; set; }
		
		/// <summary>
		/// The location of the endpoint.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		/// <summary>
		/// The public port to connect to.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="publicPort")]
		public System.Nullable<System.Int32> PublicPort { get; set; }
	}
	
	public class ApplicationPropertiesUninstallScriptActions
	{
		
		/// <summary>
		/// The application name of the script action, if any.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="applicationName")]
		public string ApplicationName { get; set; }
		
		/// <summary>
		/// The name of the script action.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The parameters for the script
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="parameters")]
		public string Parameters { get; set; }
		
		/// <summary>
		/// The list of roles where script will be executed.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="roles")]
		public string[] Roles { get; set; }
		
		/// <summary>
		/// The URI to the script.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="uri")]
		public string Uri { get; set; }
	}
	
	/// <summary>
	/// Result of the request to list cluster Applications. It contains a list of operations and a URL link to get the next set of results.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ApplicationListResult
	{
		
		/// <summary>
		/// The URL to get the next set of operation list results if there are any.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// The list of HDInsight applications installed on HDInsight cluster.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public Application[] Value { get; set; }
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
		/// Lists all of the applications for the HDInsight cluster.
		/// Applications_ListByCluster subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications
		/// </summary>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="clusterName">The name of the cluster.</param>
		/// <param name="api_version">The HDInsight client API Version.</param>
		/// <returns>OK. The request has succeeded.</returns>
		public async Task<ApplicationListResult> Applications_ListByClusterAsync(string subscriptionId, string resourceGroupName, string clusterName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.HDInsight/clusters/"+ (clusterName==null? "" : System.Uri.EscapeDataString(clusterName))+"/applications&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ApplicationListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets properties of the specified application.
		/// Applications_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications/{applicationName}
		/// </summary>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="clusterName">The name of the cluster.</param>
		/// <param name="applicationName">The constant value for the application name.</param>
		/// <param name="api_version">The HDInsight client API Version.</param>
		/// <returns>OK. The request has succeeded.</returns>
		public async Task<Application> Applications_GetAsync(string subscriptionId, string resourceGroupName, string clusterName, string applicationName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.HDInsight/clusters/"+ (clusterName==null? "" : System.Uri.EscapeDataString(clusterName))+"/applications/"+ (applicationName==null? "" : System.Uri.EscapeDataString(applicationName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Application>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates applications for the HDInsight cluster.
		/// Applications_Create subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications/{applicationName}
		/// </summary>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="clusterName">The name of the cluster.</param>
		/// <param name="applicationName">The constant value for the application name.</param>
		/// <param name="api_version">The HDInsight client API Version.</param>
		/// <param name="requestBody">The application create request.</param>
		/// <returns>OK. The request has succeeded.</returns>
		public async Task<Application> Applications_CreateAsync(string subscriptionId, string resourceGroupName, string clusterName, string applicationName, string api_version, Application requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.HDInsight/clusters/"+ (clusterName==null? "" : System.Uri.EscapeDataString(clusterName))+"/applications/"+ (applicationName==null? "" : System.Uri.EscapeDataString(applicationName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Application>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes the specified application on the HDInsight cluster.
		/// Applications_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications/{applicationName}
		/// </summary>
		/// <param name="subscriptionId">The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="clusterName">The name of the cluster.</param>
		/// <param name="applicationName">The constant value for the application name.</param>
		/// <param name="api_version">The HDInsight client API Version.</param>
		/// <returns>OK. The request has succeeded.</returns>
		public async Task Applications_DeleteAsync(string subscriptionId, string resourceGroupName, string clusterName, string applicationName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.HDInsight/clusters/"+ (clusterName==null? "" : System.Uri.EscapeDataString(clusterName))+"/applications/"+ (applicationName==null? "" : System.Uri.EscapeDataString(applicationName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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