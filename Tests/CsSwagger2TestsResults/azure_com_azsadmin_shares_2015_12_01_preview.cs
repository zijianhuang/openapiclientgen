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
	/// Storage share.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class Share
	{
		
		/// <summary>
		/// Storage share properties.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ShareProperties Properties { get; set; }
	}
	
	/// <summary>
	/// Storage share properties.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ShareProperties
	{
		
		/// <summary>
		/// The free space of the storage share in bytes.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="freeCapacity")]
		public System.Nullable<System.Int64> FreeCapacity { get; set; }
		
		/// <summary>
		/// Current health status.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="healthStatus")]
		public System.Nullable<SharePropertiesHealthStatus> HealthStatus { get; set; }
		
		/// <summary>
		/// The name of the storage share.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="shareName")]
		public string ShareName { get; set; }
		
		/// <summary>
		/// The total capacity of the storage share in bytes.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="totalCapacity")]
		public System.Nullable<System.Int64> TotalCapacity { get; set; }
		
		/// <summary>
		/// The UNC path to the storage share.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="uncPath")]
		public string UncPath { get; set; }
		
		/// <summary>
		/// The used capacity of the storage share in bytes.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="usedCapacity")]
		public System.Nullable<System.Int64> UsedCapacity { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum SharePropertiesHealthStatus
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Unknown = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Healthy = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Warning = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Critical = 3,
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
		/// Returns a list of storage shares.
		/// Shares_List subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/shares
		/// </summary>
		/// <param name="subscriptionId">Subscription Id.</param>
		/// <param name="resourceGroupName">Resource group name.</param>
		/// <param name="farmId">Farm Id.</param>
		/// <param name="api_version">REST Api Version.</param>
		/// <returns>OK -- The list of storage shares has been returned.</returns>
		public async Task<Share[]> Shares_ListAsync(string subscriptionId, string resourceGroupName, string farmId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Storage.Admin/farms/"+ (farmId==null? "" : System.Uri.EscapeDataString(farmId))+"/shares&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Share[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns a storage share.
		/// Shares_Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/shares/{shareName}
		/// </summary>
		/// <param name="subscriptionId">Subscription Id.</param>
		/// <param name="resourceGroupName">Resource group name.</param>
		/// <param name="farmId">Farm Id.</param>
		/// <param name="shareName">Share name.</param>
		/// <param name="api_version">REST Api Version.</param>
		/// <returns>OK -- The storage share has been returned.</returns>
		public async Task<Share> Shares_GetAsync(string subscriptionId, string resourceGroupName, string farmId, string shareName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Storage.Admin/farms/"+ (farmId==null? "" : System.Uri.EscapeDataString(farmId))+"/shares/"+ (shareName==null? "" : System.Uri.EscapeDataString(shareName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Share>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns a list of metric definitions for a storage share.
		/// Shares_ListMetricDefinitions subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/shares/{shareName}/metricdefinitions
		/// </summary>
		/// <param name="subscriptionId">Subscription Id.</param>
		/// <param name="resourceGroupName">Resource group name.</param>
		/// <param name="farmId">Farm Id.</param>
		/// <param name="shareName">Share name.</param>
		/// <param name="api_version">REST Api Version.</param>
		/// <returns>OK -- The list of metric definitions has been returned.</returns>
		public async Task<Shares_ListMetricDefinitionsReturn> Shares_ListMetricDefinitionsAsync(string subscriptionId, string resourceGroupName, string farmId, string shareName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Storage.Admin/farms/"+ (farmId==null? "" : System.Uri.EscapeDataString(farmId))+"/shares/"+ (shareName==null? "" : System.Uri.EscapeDataString(shareName))+"/metricdefinitions&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Shares_ListMetricDefinitionsReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns a list of metrics for a storage share.
		/// Shares_ListMetrics subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/shares/{shareName}/metrics
		/// </summary>
		/// <param name="subscriptionId">Subscription Id.</param>
		/// <param name="resourceGroupName">Resource group name.</param>
		/// <param name="farmId">Farm Id.</param>
		/// <param name="shareName">Share name.</param>
		/// <param name="api_version">REST Api Version.</param>
		/// <returns>OK -- The list of metrics has been returned.</returns>
		public async Task<Shares_ListMetricsReturn> Shares_ListMetricsAsync(string subscriptionId, string resourceGroupName, string farmId, string shareName, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourcegroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Storage.Admin/farms/"+ (farmId==null? "" : System.Uri.EscapeDataString(farmId))+"/shares/"+ (shareName==null? "" : System.Uri.EscapeDataString(shareName))+"/metrics&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Shares_ListMetricsReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public class Shares_ListMetricDefinitionsReturn
	{
		
		/// <summary>
		/// URI to the next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of metric definitions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public Shares_ListMetricDefinitionsReturnValue[] Shares_ListMetricDefinitionsReturnValue { get; set; }
	}
	
	public class Shares_ListMetricDefinitionsReturnValue
	{
		
		/// <summary>
		/// Metric availabilities.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="metricAvailabilities")]
		public Shares_ListMetricDefinitionsReturnValueMetricAvailabilities[] Shares_ListMetricDefinitionsReturnValueMetricAvailabilities { get; set; }
		
		/// <summary>
		/// Localizable string.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public Shares_ListMetricDefinitionsReturnValueName Name { get; set; }
		
		/// <summary>
		/// Aggregate type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="primaryAggregationType")]
		public System.Nullable<Shares_ListMetricDefinitionsReturnValuePrimaryAggregationType> PrimaryAggregationType { get; set; }
		
		/// <summary>
		/// Metric unit.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="unit")]
		public System.Nullable<Shares_ListMetricDefinitionsReturnValueUnit> Unit { get; set; }
	}
	
	public class Shares_ListMetricDefinitionsReturnValueMetricAvailabilities
	{
		
		/// <summary>
		/// Retention of metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="retention")]
		public string Retention { get; set; }
		
		/// <summary>
		/// Time grain.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timeGrain")]
		public string TimeGrain { get; set; }
	}
	
	public class Shares_ListMetricDefinitionsReturnValueName
	{
		
		/// <summary>
		/// Localized value of the string.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="localizedValue")]
		public string LocalizedValue { get; set; }
		
		/// <summary>
		/// Value of the string.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public string Value { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum Shares_ListMetricDefinitionsReturnValuePrimaryAggregationType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		None = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Average = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Total = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Minimum = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Maximum = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Last = 5,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum Shares_ListMetricDefinitionsReturnValueUnit
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Count = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Bytes = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Seconds = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CountPerSecond = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BytesPerSecond = 4,
	}
	
	public class Shares_ListMetricsReturn
	{
		
		/// <summary>
		/// URI to the next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of metrics.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public Shares_ListMetricsReturnValue[] Shares_ListMetricsReturnValue { get; set; }
	}
	
	public class Shares_ListMetricsReturnValue
	{
		
		/// <summary>
		/// Metric end time.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="endTime")]
		public System.Nullable<System.DateTimeOffset> EndTime { get; set; }
		
		/// <summary>
		/// Metric unit.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="metricUnit")]
		public Shares_ListMetricDefinitionsReturnValueUnit MetricUnit { get; set; }
		
		/// <summary>
		/// List of metric values.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="metricValues")]
		public Shares_ListMetricsReturnValueMetricValues[] Shares_ListMetricsReturnValueMetricValues { get; set; }
		
		/// <summary>
		/// Localizable string.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public Shares_ListMetricsReturnValueName Name { get; set; }
		
		/// <summary>
		/// Metric start time.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="startTime")]
		public System.Nullable<System.DateTimeOffset> StartTime { get; set; }
		
		/// <summary>
		/// Metric time grain.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timeGrain")]
		public string TimeGrain { get; set; }
	}
	
	public class Shares_ListMetricsReturnValueMetricValues
	{
		
		/// <summary>
		/// Average value of metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="average")]
		public System.Nullable<System.Single> Average { get; set; }
		
		/// <summary>
		/// Count of metric values.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="count")]
		public System.Nullable<System.Int32> Count { get; set; }
		
		/// <summary>
		/// Maximum value of metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="maximum")]
		public System.Nullable<System.Single> Maximum { get; set; }
		
		/// <summary>
		/// Minimum value of metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="minimum")]
		public System.Nullable<System.Single> Minimum { get; set; }
		
		/// <summary>
		/// Metric value properties.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public string Properties { get; set; }
		
		/// <summary>
		/// Timestamp of metric value.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timeStamp")]
		public System.Nullable<System.DateTimeOffset> TimeStamp { get; set; }
		
		/// <summary>
		/// Total value of metric.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="total")]
		public System.Nullable<System.Single> Total { get; set; }
	}
	
	public class Shares_ListMetricsReturnValueName
	{
		
		/// <summary>
		/// Localized value of the string.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="localizedValue")]
		public string LocalizedValue { get; set; }
		
		/// <summary>
		/// Value of the string.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public string Value { get; set; }
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
