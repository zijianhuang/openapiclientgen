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
	/// The properties of the create Advanced Schedule.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdvancedSchedule
	{
		
		/// <summary>
		/// Days of the month that the job should execute on. Must be between 1 and 31.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="monthDays")]
		public int[] MonthDays { get; set; }
		
		/// <summary>
		/// Occurrences of days within a month.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="monthlyOccurrences")]
		public AdvancedScheduleMonthlyOccurrence[] MonthlyOccurrences { get; set; }
		
		/// <summary>
		/// Days of the week that the job should execute on.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="weekDays")]
		public string[] WeekDays { get; set; }
	}
	
	/// <summary>
	/// The properties of the create advanced schedule monthly occurrence.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class AdvancedScheduleMonthlyOccurrence
	{
		
		/// <summary>
		/// Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="day")]
		public System.Nullable<AdvancedScheduleMonthlyOccurrenceDay> Day { get; set; }
		
		/// <summary>
		/// Occurrence of the week within the month. Must be between 1 and 5
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="occurrence")]
		public System.Nullable<System.Int32> Occurrence { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum AdvancedScheduleMonthlyOccurrenceDay
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Monday = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Tuesday = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Wednesday = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Thursday = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Friday = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Saturday = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Sunday = 6,
	}
	
	public class Schedule
	{
	}
	
	/// <summary>
	/// The parameters supplied to the create or update schedule operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ScheduleCreateOrUpdateParameters
	{
		
		/// <summary>
		/// Gets or sets the name of the Schedule.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The parameters supplied to the create or update schedule operation.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ScheduleCreateOrUpdateProperties Properties { get; set; }
	}
	
	/// <summary>
	/// The parameters supplied to the create or update schedule operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ScheduleCreateOrUpdateProperties
	{
		
		/// <summary>
		/// The properties of the create Advanced Schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="advancedSchedule")]
		public AdvancedSchedule AdvancedSchedule { get; set; }
		
		/// <summary>
		/// Gets or sets the description of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Gets or sets the end time of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="expiryTime")]
		public System.Nullable<System.DateTimeOffset> ExpiryTime { get; set; }
		
		/// <summary>
		/// Gets or sets the frequency of the schedule.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="frequency")]
		public ScheduleCreateOrUpdatePropertiesFrequency Frequency { get; set; }
		
		/// <summary>
		/// Gets or sets the interval of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="interval")]
		public object Interval { get; set; }
		
		/// <summary>
		/// Gets or sets the start time of the schedule.
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="startTime")]
		public System.DateTimeOffset StartTime { get; set; }
		
		/// <summary>
		/// Gets or sets the time zone of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timeZone")]
		public string TimeZone { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ScheduleCreateOrUpdatePropertiesFrequency
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OneTime = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Day = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Hour = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Week = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Month = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Minute = 5,
	}
	
	/// <summary>
	/// The response model for the list schedule operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ScheduleListResult
	{
		
		/// <summary>
		/// Gets or sets the next link.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextLink")]
		public string NextLink { get; set; }
		
		/// <summary>
		/// Gets or sets a list of schedules.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="value")]
		public Schedule[] Value { get; set; }
	}
	
	/// <summary>
	/// Definition of schedule parameters.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ScheduleProperties
	{
		
		/// <summary>
		/// The properties of the create Advanced Schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="advancedSchedule")]
		public AdvancedSchedule AdvancedSchedule { get; set; }
		
		/// <summary>
		/// Gets or sets the creation time.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="creationTime")]
		public System.Nullable<System.DateTimeOffset> CreationTime { get; set; }
		
		/// <summary>
		/// Gets or sets the description.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Gets or sets the end time of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="expiryTime")]
		public System.Nullable<System.DateTimeOffset> ExpiryTime { get; set; }
		
		/// <summary>
		/// Gets or sets the expiry time's offset in minutes.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="expiryTimeOffsetMinutes")]
		public System.Nullable<System.Double> ExpiryTimeOffsetMinutes { get; set; }
		
		/// <summary>
		/// Gets or sets the frequency of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="frequency")]
		public ScheduleCreateOrUpdatePropertiesFrequency Frequency { get; set; }
		
		/// <summary>
		/// Gets or sets the interval of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="interval")]
		public object Interval { get; set; }
		
		/// <summary>
		/// Gets or sets a value indicating whether this schedule is enabled.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="isEnabled")]
		public System.Nullable<System.Boolean> IsEnabled { get; set; }
		
		/// <summary>
		/// Gets or sets the last modified time.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="lastModifiedTime")]
		public System.Nullable<System.DateTimeOffset> LastModifiedTime { get; set; }
		
		/// <summary>
		/// Gets or sets the next run time of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextRun")]
		public System.Nullable<System.DateTimeOffset> NextRun { get; set; }
		
		/// <summary>
		/// Gets or sets the next run time's offset in minutes.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextRunOffsetMinutes")]
		public System.Nullable<System.Double> NextRunOffsetMinutes { get; set; }
		
		/// <summary>
		/// Gets or sets the start time of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="startTime")]
		public System.Nullable<System.DateTimeOffset> StartTime { get; set; }
		
		/// <summary>
		/// Gets the start time's offset in minutes.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="startTimeOffsetMinutes")]
		public System.Nullable<System.Double> StartTimeOffsetMinutes { get; set; }
		
		/// <summary>
		/// Gets or sets the time zone of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="timeZone")]
		public string TimeZone { get; set; }
	}
	
	/// <summary>
	/// The parameters supplied to the update schedule operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ScheduleUpdateParameters
	{
		
		/// <summary>
		/// Gets or sets the name of the Schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The parameters supplied to the update schedule operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public ScheduleUpdateProperties Properties { get; set; }
	}
	
	/// <summary>
	/// The parameters supplied to the update schedule operation.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public class ScheduleUpdateProperties
	{
		
		/// <summary>
		/// Gets or sets the description of the schedule.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		/// <summary>
		/// Gets or sets a value indicating whether this schedule is enabled.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="isEnabled")]
		public System.Nullable<System.Boolean> IsEnabled { get; set; }
	}
	
	/// <summary>
	/// Gets or sets the frequency of the schedule.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/01")]
	public enum ScheduleFrequency
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OneTime = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Day = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Hour = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Week = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Month = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Minute = 5,
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
		/// Retrieve a list of schedules.
		/// Schedule_ListByAutomationAccount subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>OK</returns>
		public async Task<ScheduleListResult> Schedule_ListByAutomationAccountAsync(string resourceGroupName, string automationAccountName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/schedules&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ScheduleListResult>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieve the schedule identified by schedule name.
		/// Schedule_Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules/{scheduleName}
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="scheduleName">The schedule name.</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>OK</returns>
		public async Task<Schedule> Schedule_GetAsync(string resourceGroupName, string automationAccountName, string scheduleName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/schedules/"+ (scheduleName==null? "" : System.Uri.EscapeDataString(scheduleName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Schedule>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Create a schedule.
		/// Schedule_CreateOrUpdate subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules/{scheduleName}
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="scheduleName">The schedule name.</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="requestBody">The parameters supplied to the create or update schedule operation.</param>
		/// <returns>OK</returns>
		public async Task<Schedule> Schedule_CreateOrUpdateAsync(string resourceGroupName, string automationAccountName, string scheduleName, string subscriptionId, string api_version, ScheduleCreateOrUpdateParameters requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/schedules/"+ (scheduleName==null? "" : System.Uri.EscapeDataString(scheduleName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Put, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Schedule>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Delete the schedule identified by schedule name.
		/// Schedule_Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules/{scheduleName}
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="scheduleName">The schedule name.</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <returns>OK</returns>
		public async Task Schedule_DeleteAsync(string resourceGroupName, string automationAccountName, string scheduleName, string subscriptionId, string api_version)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/schedules/"+ (scheduleName==null? "" : System.Uri.EscapeDataString(scheduleName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
		/// Update the schedule identified by schedule name.
		/// Schedule_Update subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/schedules/{scheduleName}
		/// </summary>
		/// <param name="resourceGroupName">Name of an Azure Resource group.
		/// Min length: 1
		/// Max length: 90
		// </param>
		/// <param name="automationAccountName">The name of the automation account.</param>
		/// <param name="scheduleName">The schedule name.</param>
		/// <param name="subscriptionId">Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.</param>
		/// <param name="api_version">Client Api Version.</param>
		/// <param name="requestBody">The parameters supplied to the update schedule operation.</param>
		/// <returns>OK</returns>
		public async Task<Schedule> Schedule_UpdateAsync(string resourceGroupName, string automationAccountName, string scheduleName, string subscriptionId, string api_version, ScheduleUpdateParameters requestBody)
		{
			var requestUri = "subscriptions/"+ (subscriptionId==null? "" : System.Uri.EscapeDataString(subscriptionId))+"/resourceGroups/"+ (resourceGroupName==null? "" : System.Uri.EscapeDataString(resourceGroupName))+"/providers/Microsoft.Automation/automationAccounts/"+ (automationAccountName==null? "" : System.Uri.EscapeDataString(automationAccountName))+"/schedules/"+ (scheduleName==null? "" : System.Uri.EscapeDataString(scheduleName))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Schedule>(streamContent, jsonSerializerSettings);
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