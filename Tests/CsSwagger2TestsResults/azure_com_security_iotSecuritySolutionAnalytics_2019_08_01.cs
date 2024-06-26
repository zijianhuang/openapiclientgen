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
	/// Security Solution Aggregated Alert information
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class IoTSecurityAggregatedAlert
	{
		
		/// <summary>
		/// IoT Security solution aggregated alert details.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public IoTSecurityAggregatedAlertProperties Properties { get; set; }
	}
	
	/// <summary>
	/// IoT Security solution aggregated alert details.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class IoTSecurityAggregatedAlertProperties
	{
		
		/// <summary>
		/// IoT Security solution alert response.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="actionTaken")]
		public string ActionTaken { get; set; }
		
		/// <summary>
		/// Date of detection.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="aggregatedDateUtc")]
		public System.Nullable<System.DateOnly> AggregatedDateUtc { get; set; }
		
		/// <summary>
		/// Display name of the alert type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="alertDisplayName")]
		public string AlertDisplayName { get; set; }
		
		/// <summary>
		/// Name of the alert type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="alertType")]
		public string AlertType { get; set; }
		
		/// <summary>
		/// Number of alerts occurrences within the aggregated time window.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="count")]
		public System.Nullable<System.Int32> Count { get; set; }
		
		/// <summary>
		/// Description of the suspected vulnerability and meaning.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Azure resource ID of the resource that received the alerts.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="effectedResourceType")]
		public string EffectedResourceType { get; set; }
		
		/// <summary>
		/// Log analytics query for getting the list of affected devices/alerts.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="logAnalyticsQuery")]
		public string LogAnalyticsQuery { get; set; }
		
		/// <summary>
		/// Recommended steps for remediation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="remediationSteps")]
		public string RemediationSteps { get; set; }
		
		/// <summary>
		/// Assessed alert severity.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="reportedSeverity")]
		public System.Nullable<IoTSecurityAggregatedAlertPropertiesReportedSeverity> ReportedSeverity { get; set; }
		
		/// <summary>
		/// The type of the alerted resource (Azure, Non-Azure).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="systemSource")]
		public string SystemSource { get; set; }
		
		/// <summary>
		/// 10 devices with the highest number of occurrences of this alert type, on this day.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="topDevicesList")]
		public IoTSecurityAggregatedAlertPropertiesTopDevicesList[] IoTSecurityAggregatedAlertPropertiesTopDevicesList { get; set; }
		
		/// <summary>
		/// Name of the organization that raised the alert.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="vendorName")]
		public string VendorName { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum IoTSecurityAggregatedAlertPropertiesReportedSeverity
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Informational = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Low = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Medium = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		High = 3,
	}
	
	public class IoTSecurityAggregatedAlertPropertiesTopDevicesList
	{
		
		/// <summary>
		/// Number of alerts raised for this device.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="alertsCount")]
		public System.Nullable<System.Int32> AlertsCount { get; set; }
		
		/// <summary>
		/// Name of the device.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deviceId")]
		public string DeviceId { get; set; }
		
		/// <summary>
		/// Most recent time this alert was raised for this device, on this day.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="lastOccurrence")]
		public string LastOccurrence { get; set; }
	}
	
	/// <summary>
	/// List of IoT Security solution aggregated alert data.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class IoTSecurityAggregatedAlertList
	{
		
		/// <summary>
		/// When there is too much alert data for one page, use this URI to fetch the next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of aggregated alerts data.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="value")]
		public IoTSecurityAggregatedAlert[] Value { get; set; }
	}
	
	/// <summary>
	/// IoT Security solution recommendation information.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class IoTSecurityAggregatedRecommendation
	{
		
		/// <summary>
		/// IoT Security solution aggregated recommendation information
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public IoTSecurityAggregatedRecommendationProperties Properties { get; set; }
	}
	
	/// <summary>
	/// IoT Security solution aggregated recommendation information
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class IoTSecurityAggregatedRecommendationProperties
	{
		
		/// <summary>
		/// Description of the suspected vulnerability and meaning.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Name of the organization that made the recommendation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="detectedBy")]
		public string DetectedBy { get; set; }
		
		/// <summary>
		/// Number of healthy devices within the IoT Security solution.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="healthyDevices")]
		public System.Nullable<System.Int32> HealthyDevices { get; set; }
		
		/// <summary>
		/// Log analytics query for getting the list of affected devices/alerts.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="logAnalyticsQuery")]
		public string LogAnalyticsQuery { get; set; }
		
		/// <summary>
		/// Display name of the recommendation type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="recommendationDisplayName")]
		public string RecommendationDisplayName { get; set; }
		
		/// <summary>
		/// Name of the recommendation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="recommendationName")]
		public string RecommendationName { get; set; }
		
		/// <summary>
		/// Recommendation-type GUID.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="recommendationTypeId")]
		public string RecommendationTypeId { get; set; }
		
		/// <summary>
		/// Recommended steps for remediation
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="remediationSteps")]
		public string RemediationSteps { get; set; }
		
		/// <summary>
		/// Assessed recommendation severity.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="reportedSeverity")]
		public IoTSecurityAggregatedAlertPropertiesReportedSeverity ReportedSeverity { get; set; }
		
		/// <summary>
		/// Number of unhealthy devices within the IoT Security solution.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="unhealthyDeviceCount")]
		public System.Nullable<System.Int32> UnhealthyDeviceCount { get; set; }
	}
	
	/// <summary>
	/// List of IoT Security solution aggregated recommendations.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class IoTSecurityAggregatedRecommendationList
	{
		
		/// <summary>
		/// When there is too much alert data for one page, use this URI to fetch the next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of aggregated recommendations data.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="value")]
		public IoTSecurityAggregatedRecommendation[] Value { get; set; }
	}
	
	/// <summary>
	/// Statistical information about the number of alerts per device during last set number of days.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class IoTSecurityAlertedDevice
	{
		
		/// <summary>
		/// Number of alerts raised for this device.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="alertsCount")]
		public System.Nullable<System.Int32> AlertsCount { get; set; }
		
		/// <summary>
		/// Device identifier.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deviceId")]
		public string DeviceId { get; set; }
	}
	
	/// <summary>
	/// Statistical information about the number of alerts per alert type during last set number of days
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class IoTSecurityDeviceAlert
	{
		
		/// <summary>
		/// Display name of the alert
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="alertDisplayName")]
		public string AlertDisplayName { get; set; }
		
		/// <summary>
		/// Number of alerts raised for this alert type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="alertsCount")]
		public System.Nullable<System.Int32> AlertsCount { get; set; }
		
		/// <summary>
		/// Assessed Alert severity.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="reportedSeverity")]
		public IoTSecurityAggregatedAlertPropertiesReportedSeverity ReportedSeverity { get; set; }
	}
	
	/// <summary>
	/// Statistical information about the number of recommendations per device, per recommendation type.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class IoTSecurityDeviceRecommendation
	{
		
		/// <summary>
		/// Number of devices with this recommendation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="devicesCount")]
		public System.Nullable<System.Int32> DevicesCount { get; set; }
		
		/// <summary>
		/// Display name of the recommendation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="recommendationDisplayName")]
		public string RecommendationDisplayName { get; set; }
		
		/// <summary>
		/// Assessed recommendation severity.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="reportedSeverity")]
		public IoTSecurityAggregatedAlertPropertiesReportedSeverity ReportedSeverity { get; set; }
	}
	
	/// <summary>
	/// Security analytics of your IoT Security solution
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class IoTSecuritySolutionAnalyticsModel
	{
		
		/// <summary>
		/// Security analytics properties of your IoT Security solution
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public IoTSecuritySolutionAnalyticsModelProperties Properties { get; set; }
	}
	
	/// <summary>
	/// List of Security analytics of your IoT Security solution
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class IoTSecuritySolutionAnalyticsModelList
	{
		
		/// <summary>
		/// When there is too much alert data for one page, use this URI to fetch the next page.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// List of Security analytics of your IoT Security solution
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="value")]
		public IoTSecuritySolutionAnalyticsModel[] Value { get; set; }
	}
	
	/// <summary>
	/// Security analytics properties of your IoT Security solution
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class IoTSecuritySolutionAnalyticsModelProperties
	{
		
		/// <summary>
		/// List of device metrics by the aggregation date.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="devicesMetrics")]
		public IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetrics[] IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetrics { get; set; }
		
		/// <summary>
		/// IoT Security solution analytics severity metrics.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="metrics")]
		public IoTSeverityMetrics Metrics { get; set; }
		
		/// <summary>
		/// List of alerts with the count of raised alerts
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="mostPrevalentDeviceAlerts")]
		public IoTSecurityDeviceAlert[] MostPrevalentDeviceAlerts { get; set; }
		
		/// <summary>
		/// List of aggregated recommendation data, per recommendation type, per device.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="mostPrevalentDeviceRecommendations")]
		public IoTSecurityDeviceRecommendation[] MostPrevalentDeviceRecommendations { get; set; }
		
		/// <summary>
		/// List of devices with open alerts including the count of alerts per device.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="topAlertedDevices")]
		public IoTSecurityAlertedDevice[] TopAlertedDevices { get; set; }
		
		/// <summary>
		/// Number of unhealthy devices within your IoT Security solution.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="unhealthyDeviceCount")]
		public System.Nullable<System.Int32> UnhealthyDeviceCount { get; set; }
	}
	
	public class IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetrics
	{
		
		/// <summary>
		/// Aggregation of IoT Security solution device alert metrics by date.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="date")]
		public System.Nullable<System.DateTimeOffset> Date { get; set; }
		
		/// <summary>
		/// IoT Security solution analytics severity metrics.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="devicesMetrics")]
		public IoTSeverityMetrics DevicesMetrics { get; set; }
	}
	
	/// <summary>
	/// IoT Security solution analytics severity metrics.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class IoTSeverityMetrics
	{
		
		/// <summary>
		/// Count of high severity alerts/recommendations.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="high")]
		public System.Nullable<System.Int32> High { get; set; }
		
		/// <summary>
		/// Count of low severity alerts/recommendations.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="low")]
		public System.Nullable<System.Int32> Low { get; set; }
		
		/// <summary>
		/// Count of medium severity alerts/recommendations.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="medium")]
		public System.Nullable<System.Int32> Medium { get; set; }
	}
	
	/// <summary>
	/// A container holding only the Tags for a resource, allowing the user to update the tags.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class TagsResource
	{
		
		/// <summary>
		/// Resource tags
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tags")]
		public System.Collections.Generic.Dictionary<string, string> Tags { get; set; }
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
		/// Use this method to get IoT security Analytics metrics in an array.
		/// IotSecuritySolutionAnalytics_List subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels
		/// </summary>
		/// <param name="api_version">API version for the operation</param>
		/// <param name="subscriptionId">Azure subscription ID</param>
		/// <param name="resourceGroupName">The name of the resource group within the user's subscription. The name is case insensitive.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="solutionName">The name of the IoT Security solution.</param>
		/// <returns>OK</returns>
		public async Task<IoTSecuritySolutionAnalyticsModelList> IotSecuritySolutionAnalytics_ListAsync(string api_version, string subscriptionId, string resourceGroupName, string solutionName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Security/iotSecuritySolutions/"+ (solutionName==null? "" : System.Uri.EscapeDataString(solutionName))+"/analyticsModels?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<IoTSecuritySolutionAnalyticsModelList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Use this method to get IoT Security Analytics metrics.
		/// IotSecuritySolutionAnalytics_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default
		/// </summary>
		/// <param name="api_version">API version for the operation</param>
		/// <param name="subscriptionId">Azure subscription ID</param>
		/// <param name="resourceGroupName">The name of the resource group within the user's subscription. The name is case insensitive.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="solutionName">The name of the IoT Security solution.</param>
		/// <returns>OK</returns>
		public async Task<IoTSecuritySolutionAnalyticsModel> IotSecuritySolutionAnalytics_GetAsync(string api_version, string subscriptionId, string resourceGroupName, string solutionName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Security/iotSecuritySolutions/"+ (solutionName==null? "" : System.Uri.EscapeDataString(solutionName))+"/analyticsModels/default?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<IoTSecuritySolutionAnalyticsModel>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Use this method to get the aggregated alert list of yours IoT Security solution.
		/// IotSecuritySolutionsAnalyticsAggregatedAlert_List subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedAlerts
		/// </summary>
		/// <param name="api_version">API version for the operation</param>
		/// <param name="subscriptionId">Azure subscription ID</param>
		/// <param name="resourceGroupName">The name of the resource group within the user's subscription. The name is case insensitive.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="solutionName">The name of the IoT Security solution.</param>
		/// <param name="top">Number of results to retrieve.</param>
		/// <returns>OK</returns>
		public async Task<IoTSecurityAggregatedAlertList> IotSecuritySolutionsAnalyticsAggregatedAlert_ListAsync(string api_version, string subscriptionId, string resourceGroupName, string solutionName, int top)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Security/iotSecuritySolutions/"+ (solutionName==null? "" : System.Uri.EscapeDataString(solutionName))+"/analyticsModels/default/aggregatedAlerts?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version))+"&$top="+top;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<IoTSecurityAggregatedAlertList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Use this method to get a single the aggregated alert of yours IoT Security solution. This aggregation is performed by alert name.
		/// IotSecuritySolutionsAnalyticsAggregatedAlert_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedAlerts/{aggregatedAlertName}
		/// </summary>
		/// <param name="api_version">API version for the operation</param>
		/// <param name="subscriptionId">Azure subscription ID</param>
		/// <param name="resourceGroupName">The name of the resource group within the user's subscription. The name is case insensitive.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="solutionName">The name of the IoT Security solution.</param>
		/// <param name="aggregatedAlertName">Identifier of the aggregated alert.</param>
		/// <returns>OK</returns>
		public async Task<IoTSecurityAggregatedAlert> IotSecuritySolutionsAnalyticsAggregatedAlert_GetAsync(string api_version, string subscriptionId, string resourceGroupName, string solutionName, string aggregatedAlertName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Security/iotSecuritySolutions/"+ (solutionName==null? "" : System.Uri.EscapeDataString(solutionName))+"/analyticsModels/default/aggregatedAlerts/"+ (aggregatedAlertName==null? "" : System.Uri.EscapeDataString(aggregatedAlertName))+"?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<IoTSecurityAggregatedAlert>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Use this method to dismiss an aggregated IoT Security Solution Alert.
		/// IotSecuritySolutionsAnalyticsAggregatedAlert_Dismiss subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedAlerts/{aggregatedAlertName}/dismiss
		/// </summary>
		/// <param name="api_version">API version for the operation</param>
		/// <param name="subscriptionId">Azure subscription ID</param>
		/// <param name="resourceGroupName">The name of the resource group within the user's subscription. The name is case insensitive.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="solutionName">The name of the IoT Security solution.</param>
		/// <param name="aggregatedAlertName">Identifier of the aggregated alert.</param>
		/// <returns>This aggregate alert is permanently dismissed.</returns>
		public async Task IotSecuritySolutionsAnalyticsAggregatedAlert_DismissAsync(string api_version, string subscriptionId, string resourceGroupName, string solutionName, string aggregatedAlertName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Security/iotSecuritySolutions/"+ (solutionName==null? "" : System.Uri.EscapeDataString(solutionName))+"/analyticsModels/default/aggregatedAlerts/"+ (aggregatedAlertName==null? "" : System.Uri.EscapeDataString(aggregatedAlertName))+"/dismiss?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
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
		/// Use this method to get the list of aggregated security analytics recommendations of yours IoT Security solution.
		/// IotSecuritySolutionsAnalyticsRecommendation_List subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedRecommendations
		/// </summary>
		/// <param name="api_version">API version for the operation</param>
		/// <param name="subscriptionId">Azure subscription ID</param>
		/// <param name="resourceGroupName">The name of the resource group within the user's subscription. The name is case insensitive.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="solutionName">The name of the IoT Security solution.</param>
		/// <param name="top">Number of results to retrieve.</param>
		/// <returns>OK</returns>
		public async Task<IoTSecurityAggregatedRecommendationList> IotSecuritySolutionsAnalyticsRecommendation_ListAsync(string api_version, string subscriptionId, string resourceGroupName, string solutionName, int top)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Security/iotSecuritySolutions/"+ (solutionName==null? "" : System.Uri.EscapeDataString(solutionName))+"/analyticsModels/default/aggregatedRecommendations?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version))+"&$top="+top;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<IoTSecurityAggregatedRecommendationList>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Use this method to get the aggregated security analytics recommendation of yours IoT Security solution. This aggregation is performed by recommendation name.
		/// IotSecuritySolutionsAnalyticsRecommendation_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedRecommendations/{aggregatedRecommendationName}
		/// </summary>
		/// <param name="api_version">API version for the operation</param>
		/// <param name="subscriptionId">Azure subscription ID</param>
		/// <param name="resourceGroupName">The name of the resource group within the user's subscription. The name is case insensitive.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="solutionName">The name of the IoT Security solution.</param>
		/// <param name="aggregatedRecommendationName">Name of the recommendation aggregated for this query.</param>
		/// <returns>OK</returns>
		public async Task<IoTSecurityAggregatedRecommendation> IotSecuritySolutionsAnalyticsRecommendation_GetAsync(string api_version, string subscriptionId, string resourceGroupName, string solutionName, string aggregatedRecommendationName)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Security/iotSecuritySolutions/"+ (solutionName==null? "" : System.Uri.EscapeDataString(solutionName))+"/analyticsModels/default/aggregatedRecommendations/"+ (aggregatedRecommendationName==null? "" : System.Uri.EscapeDataString(aggregatedRecommendationName))+"?api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<IoTSecurityAggregatedRecommendation>(streamContent, jsonSerializerSettings);
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
