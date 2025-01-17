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
	/// Describes the format of Error response.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ErrorResponse
	{
		
		/// <summary>
		/// Error code
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public string Code { get; set; }
		
		/// <summary>
		/// Error message indicating why the operation failed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// An alert incident indicates the activation status of an alert rule.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Incident
	{
		
		/// <summary>
		/// The time at which the incident was activated in ISO8601 format.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="activatedTime")]
		public System.Nullable<System.DateTimeOffset> ActivatedTime { get; set; }
		
		/// <summary>
		/// A boolean to indicate whether the incident is active or resolved.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="isActive")]
		public System.Nullable<System.Boolean> IsActive { get; set; }
		
		/// <summary>
		/// Incident name.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The time at which the incident was resolved in ISO8601 format. If null, it means the incident is still active.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resolvedTime")]
		public System.Nullable<System.DateTimeOffset> ResolvedTime { get; set; }
		
		/// <summary>
		/// Rule name that is associated with the incident.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="ruleName")]
		public string RuleName { get; set; }
	}
	
	/// <summary>
	/// The List incidents operation response.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class IncidentListResult
	{
		
		/// <summary>
		/// the incident collection.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public Incident[] Value { get; set; }
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
		/// Gets a list of incidents associated to an alert rule
		/// AlertRuleIncidents_ListByAlertRule subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName}/incidents
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="ruleName">The name of the rule.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <returns>Successful request for a list of alert rule related incidents</returns>
		public async Task<IncidentListResult> AlertRuleIncidents_ListByAlertRuleAsync(string resourceGroupName, string ruleName, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/microsoft.insights/alertrules/"+ (ruleName==null? "" : System.Uri.EscapeDataString(ruleName))+"/incidents&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<IncidentListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets an incident associated to an alert rule
		/// AlertRuleIncidents_Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName}/incidents/{incidentName}
		/// </summary>
		/// <param name="resourceGroupName">The name of the resource group.</param>
		/// <param name="ruleName">The name of the rule.</param>
		/// <param name="incidentName">The name of the incident to retrieve.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="subscriptionId">The Azure subscription Id.</param>
		/// <returns>Successful request for one alert rule related incident</returns>
		public async Task<Incident> AlertRuleIncidents_GetAsync(string resourceGroupName, string ruleName, string incidentName, string api_version, string subscriptionId)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/microsoft.insights/alertrules/"+ (ruleName==null? "" : System.Uri.EscapeDataString(ruleName))+"/incidents/"+ (incidentName==null? "" : System.Uri.EscapeDataString(incidentName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Incident>(streamContent, jsonSerializerSettings);
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
