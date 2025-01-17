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
	/// Information about a container with data for a given resource.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class DataContainer
	{
		
		/// <summary>
		/// Information about a Log Analytics Workspace.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="workspace")]
		public WorkspaceInfo Workspace { get; set; }
	}
	
	/// <summary>
	/// Information about a Log Analytics Workspace.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class WorkspaceInfo
	{
		
		/// <summary>
		/// Azure Resource Manager identifier of the Log Analytics Workspace.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Location of the Log Analytics workspace.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="location")]
		public string Location { get; set; }
		
		/// <summary>
		/// Resource properties.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public WorkspaceInfoProperties Properties { get; set; }
	}
	
	public class WorkspaceInfoProperties
	{
		
		/// <summary>
		/// Log Analytics workspace identifier.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="customerId")]
		public string CustomerId { get; set; }
	}
	
	/// <summary>
	/// Error details.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Error
	{
		
		/// <summary>
		/// Error code identifying the specific error.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// Error message in the caller's locale.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// An azure resource object
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ProxyResource
	{
		
		/// <summary>
		/// Azure resource Id
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Azure resource name
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Azure resource type
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	/// <summary>
	/// An error response from the API.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ResponseWithError
	{
		
		/// <summary>
		/// Error details.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="error")]
		public Error Error { get; set; }
	}
	
	/// <summary>
	/// VM Insights onboarding status for a resource.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class VMInsightsOnboardingStatus : ProxyResource
	{
		
		/// <summary>
		/// Resource properties.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public VMInsightsOnboardingStatusProperties Properties { get; set; }
	}
	
	public class VMInsightsOnboardingStatusProperties
	{
		
		/// <summary>
		/// Containers that currently store VM Insights data for the specified resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="data")]
		public DataContainer[] Data { get; set; }
		
		/// <summary>
		/// The status of VM Insights data from the resource. When reported as `present` the data array will contain information about the data containers to which data for the specified resource is being routed.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="dataStatus")]
		public VMInsightsOnboardingStatusPropertiesDataStatus DataStatus { get; set; }
		
		/// <summary>
		/// The onboarding status for the resource. Note that, a higher level scope, e.g., resource group or subscription, is considered onboarded if at least one resource under it is onboarded.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="onboardingStatus")]
		public VMInsightsOnboardingStatusPropertiesOnboardingStatus OnboardingStatus { get; set; }
		
		/// <summary>
		/// Azure Resource Manager identifier of the resource whose onboarding status is being represented.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="resourceId")]
		public string ResourceId { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum VMInsightsOnboardingStatusPropertiesDataStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		present = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		notPresent = 1,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum VMInsightsOnboardingStatusPropertiesOnboardingStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		onboarded = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		notOnboarded = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		unknown = 2,
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
		/// Retrieves the VM Insights onboarding status for the specified resource or resource scope.
		/// VMInsights_GetOnboardingStatus {resourceUri}/providers/Microsoft.Insights/vmInsightsOnboardingStatuses/default
		/// </summary>
		/// <param name="api_version">API version.</param>
		/// <param name="resourceUri">The fully qualified Azure Resource manager identifier of the resource, or scope, whose status to retrieve.</param>
		/// <returns>The operation completed successfully.</returns>
		public async Task<VMInsightsOnboardingStatus> VMInsights_GetOnboardingStatusAsync(string api_version, string resourceUri)
		{
			var requestUri = ""+ (resourceUri==null? "" : System.Uri.EscapeDataString(resourceUri))+"/providers/Microsoft.Insights/vmInsightsOnboardingStatuses/default?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<VMInsightsOnboardingStatus>(streamContent, jsonSerializerSettings);
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
