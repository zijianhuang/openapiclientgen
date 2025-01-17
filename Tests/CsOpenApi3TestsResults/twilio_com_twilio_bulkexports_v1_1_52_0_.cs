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
	
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Bulkexportsv1export
	{
		
		/// <summary>
		/// Contains a dictionary of URL links to nested resources of this Export.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="links")]
		public string Links { get; set; }
		
		/// <summary>
		/// The type of communication – Messages, Calls, Conferences, and Participants
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resource_type")]
		public string Resource_type { get; set; }
		
		/// <summary>
		/// The URL of this resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Bulkexportsv1exportday
	{
		
		/// <summary>
		/// The ISO 8601 format date when resources is created
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="create_date")]
		public string Create_date { get; set; }
		
		/// <summary>
		/// The ISO 8601 format date of the resources in the file, for a UTC day
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="day")]
		public string Day { get; set; }
		
		/// <summary>
		/// The friendly name specified when creating the job
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="friendly_name")]
		public string Friendly_name { get; set; }
		
		/// <summary>
		/// The type of communication – Messages, Calls, Conferences, and Participants
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resource_type")]
		public string Resource_type { get; set; }
		
		/// <summary>
		/// The size of the day's data file in bytes
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="size")]
		public System.Nullable<System.Int32> Size { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Bulkexportsv1exportday_instance
	{
		
		[System.Runtime.Serialization.DataMember(Name="redirect_to")]
		public string Redirect_to { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Bulkexportsv1exportexport_custom_job
	{
		
		/// <summary>
		/// The details of a job which is an object that contains an array of status grouped by `status` state.  Each `status` object has a `status` string, a count which is the number of days in that `status`, and list of days in that `status`. The day strings are in the format yyyy-MM-dd. As an example, a currently running job may have a status object for COMPLETED and a `status` object for SUBMITTED each with its own count and list of days.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="details")]
		public object Details { get; set; }
		
		/// <summary>
		/// The optional email to send the completion notification to
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="email")]
		public string Email { get; set; }
		
		/// <summary>
		/// The end day for the export specified when creating the job
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="end_day")]
		public string End_day { get; set; }
		
		/// <summary>
		/// this is the time estimated until your job is complete. This is calculated each time you request the job list. The time is calculated based on the current rate of job completion (which may vary) and your job queue position
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="estimated_completion_time")]
		public string Estimated_completion_time { get; set; }
		
		/// <summary>
		/// The friendly name specified when creating the job
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="friendly_name")]
		public string Friendly_name { get; set; }
		
		/// <summary>
		/// This is the job position from the 1st in line. Your queue position will never increase. As jobs ahead of yours in the queue are processed, the queue position number will decrease
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="job_queue_position")]
		public string Job_queue_position { get; set; }
		
		/// <summary>
		/// The unique job_sid returned when the custom export was created
		/// Min length: 34
		/// Max length: 34
		/// Pattern: ^JS[0-9a-fA-F]{32}$
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="job_sid")]
		[System.ComponentModel.DataAnnotations.Length(34, 34)]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^JS[0-9a-fA-F]{32}$")]
		public string Job_sid { get; set; }
		
		/// <summary>
		/// The type of communication – Messages, Calls, Conferences, and Participants
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resource_type")]
		public string Resource_type { get; set; }
		
		/// <summary>
		/// The start day for the custom export specified when creating the job
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="start_day")]
		public string Start_day { get; set; }
		
		/// <summary>
		/// This is the method used to call the webhook on completion of the job. If this is supplied, `WebhookUrl` must also be supplied.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="webhook_method")]
		public string Webhook_method { get; set; }
		
		/// <summary>
		/// The optional webhook url called on completion of the job. If this is supplied, `WebhookMethod` must also be supplied.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="webhook_url")]
		public string Webhook_url { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Bulkexportsv1exportjob
	{
		
		/// <summary>
		/// The details of a job which is an object that contains an array of status grouped by `status` state.  Each `status` object has a `status` string, a count which is the number of days in that `status`, and list of days in that `status`. The day strings are in the format yyyy-MM-dd. As an example, a currently running job may have a status object for COMPLETED and a `status` object for SUBMITTED each with its own count and list of days.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="details")]
		public object Details { get; set; }
		
		/// <summary>
		/// The optional email to send the completion notification to
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="email")]
		public string Email { get; set; }
		
		/// <summary>
		/// The end time for the export specified when creating the job
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="end_day")]
		public string End_day { get; set; }
		
		/// <summary>
		/// this is the time estimated until your job is complete. This is calculated each time you request the job list. The time is calculated based on the current rate of job completion (which may vary) and your job queue position
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="estimated_completion_time")]
		public string Estimated_completion_time { get; set; }
		
		/// <summary>
		/// The friendly name specified when creating the job
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="friendly_name")]
		public string Friendly_name { get; set; }
		
		/// <summary>
		/// This is the job position from the 1st in line. Your queue position will never increase. As jobs ahead of yours in the queue are processed, the queue position number will decrease
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="job_queue_position")]
		public string Job_queue_position { get; set; }
		
		/// <summary>
		/// The job_sid returned when the export was created
		/// Min length: 34
		/// Max length: 34
		/// Pattern: ^JS[0-9a-fA-F]{32}$
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="job_sid")]
		[System.ComponentModel.DataAnnotations.Length(34, 34)]
		[System.ComponentModel.DataAnnotations.RegularExpressionAttribute(@"^JS[0-9a-fA-F]{32}$")]
		public string Job_sid { get; set; }
		
		/// <summary>
		/// The type of communication – Messages, Calls, Conferences, and Participants
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resource_type")]
		public string Resource_type { get; set; }
		
		/// <summary>
		/// The start time for the export specified when creating the job
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="start_day")]
		public string Start_day { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
		
		/// <summary>
		/// This is the method used to call the webhook
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="webhook_method")]
		public string Webhook_method { get; set; }
		
		/// <summary>
		/// The optional webhook url called on completion
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="webhook_url")]
		public string Webhook_url { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Bulkexportsv1export_configuration
	{
		
		/// <summary>
		/// If true, Twilio will automatically generate every day's file when the day is over.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="enabled")]
		public System.Nullable<System.Boolean> Enabled { get; set; }
		
		/// <summary>
		/// The type of communication – Messages, Calls, Conferences, and Participants
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="resource_type")]
		public string Resource_type { get; set; }
		
		/// <summary>
		/// The URL of this resource.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
		
		/// <summary>
		/// Sets whether Twilio should call a webhook URL when the automatic generation is complete, using GET or POST. The actual destination is set in the webhook_url
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="webhook_method")]
		public string Webhook_method { get; set; }
		
		/// <summary>
		/// Stores the URL destination for the method specified in webhook_method.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="webhook_url")]
		public string Webhook_url { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum Export_custom_job_enum_status
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ErrorDuringRun = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Submitted = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Running = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CompletedEmptyRecords = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Completed = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Failed = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RunningToBeDeleted = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DeletedByUserRequest = 7,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum Job_enum_status
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ErrorDuringRun = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Submitted = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Running = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CompletedEmptyRecords = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Completed = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		Failed = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		RunningToBeDeleted = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DeletedByUserRequest = 7,
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
		/// DeleteJob v1/Exports/Jobs/{JobSid}
		/// </summary>
		/// <param name="JobSid">The unique string that that we created to identify the Bulk Export job
		/// Min length: 34
		/// Max length: 34
		// </param>
		public async Task DeleteJobAsync(string JobSid, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/Exports/Jobs/"+ (JobSid==null? "" : System.Uri.EscapeDataString(JobSid));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

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
		/// FetchJob v1/Exports/Jobs/{JobSid}
		/// </summary>
		/// <param name="JobSid">The unique string that that we created to identify the Bulk Export job
		/// Min length: 34
		/// Max length: 34
		// </param>
		/// <returns>OK</returns>
		public async Task<Bulkexportsv1exportjob> FetchJobAsync(string JobSid, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/Exports/Jobs/"+ (JobSid==null? "" : System.Uri.EscapeDataString(JobSid));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Bulkexportsv1exportjob>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Fetch a specific Export.
		/// FetchExport v1/Exports/{ResourceType}
		/// </summary>
		/// <param name="ResourceType">The type of communication – Messages, Calls, Conferences, and Participants</param>
		/// <returns>OK</returns>
		public async Task<Bulkexportsv1export> FetchExportAsync(string ResourceType, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/Exports/"+ (ResourceType==null? "" : System.Uri.EscapeDataString(ResourceType));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Bulkexportsv1export>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Fetch a specific Export Configuration.
		/// FetchExportConfiguration v1/Exports/{ResourceType}/Configuration
		/// </summary>
		/// <param name="ResourceType">The type of communication – Messages, Calls, Conferences, and Participants</param>
		/// <returns>OK</returns>
		public async Task<Bulkexportsv1export_configuration> FetchExportConfigurationAsync(string ResourceType, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/Exports/"+ (ResourceType==null? "" : System.Uri.EscapeDataString(ResourceType))+"/Configuration";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<Bulkexportsv1export_configuration>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieve a list of all Days for a resource.
		/// ListDay v1/Exports/{ResourceType}/Days
		/// </summary>
		/// <param name="ResourceType">The type of communication – Messages, Calls, Conferences, and Participants</param>
		/// <param name="PageSize">How many resources to return in each list page. The default is 50, and the maximum is 1000.
		/// Minimum: 1
		/// Maximum: 1000
		// </param>
		/// <param name="Page">The page index. This value is simply for client state.
		/// Minimum: 0
		// </param>
		/// <param name="PageToken">The page token. This is provided by the API.</param>
		/// <returns>OK</returns>
		public async Task<ListDayReturn> ListDayAsync(string ResourceType, int PageSize, int Page, string PageToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/Exports/"+ (ResourceType==null? "" : System.Uri.EscapeDataString(ResourceType))+"/Days&PageSize="+PageSize+"&Page="+Page+"&PageToken=" + (PageToken==null? "" : System.Uri.EscapeDataString(PageToken));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ListDayReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Fetch a specific Day.
		/// FetchDay v1/Exports/{ResourceType}/Days/{Day}
		/// </summary>
		/// <param name="ResourceType">The type of communication – Messages, Calls, Conferences, and Participants</param>
		/// <param name="Day">The ISO 8601 format date of the resources in the file, for a UTC day</param>
		public async Task FetchDayAsync(string ResourceType, string Day, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/Exports/"+ (ResourceType==null? "" : System.Uri.EscapeDataString(ResourceType))+"/Days/"+ (Day==null? "" : System.Uri.EscapeDataString(Day));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

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
		/// ListExportCustomJob v1/Exports/{ResourceType}/Jobs
		/// </summary>
		/// <param name="ResourceType">The type of communication – Messages, Calls, Conferences, and Participants</param>
		/// <param name="PageSize">How many resources to return in each list page. The default is 50, and the maximum is 1000.
		/// Minimum: 1
		/// Maximum: 1000
		// </param>
		/// <param name="Page">The page index. This value is simply for client state.
		/// Minimum: 0
		// </param>
		/// <param name="PageToken">The page token. This is provided by the API.</param>
		/// <returns>OK</returns>
		public async Task<ListExportCustomJobReturn> ListExportCustomJobAsync(string ResourceType, int PageSize, int Page, string PageToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/Exports/"+ (ResourceType==null? "" : System.Uri.EscapeDataString(ResourceType))+"/Jobs&PageSize="+PageSize+"&Page="+Page+"&PageToken=" + (PageToken==null? "" : System.Uri.EscapeDataString(PageToken));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Get, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<ListExportCustomJobReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public class ListDayReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="days")]
		public Bulkexportsv1exportday[] Days { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public ListDayReturnMeta Meta { get; set; }
	}
	
	public class ListDayReturnMeta
	{
		
		[System.Runtime.Serialization.DataMember(Name="first_page_url")]
		public string First_page_url { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="key")]
		public string Key { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="next_page_url")]
		public string Next_page_url { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="page")]
		public System.Nullable<System.Int32> Page { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="page_size")]
		public System.Nullable<System.Int32> Page_size { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="previous_page_url")]
		public string Previous_page_url { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
	}
	
	public class ListExportCustomJobReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="jobs")]
		public Bulkexportsv1exportexport_custom_job[] Jobs { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public ListExportCustomJobReturnMeta Meta { get; set; }
	}
	
	public class ListExportCustomJobReturnMeta
	{
		
		[System.Runtime.Serialization.DataMember(Name="first_page_url")]
		public string First_page_url { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="key")]
		public string Key { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="next_page_url")]
		public string Next_page_url { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="page")]
		public System.Nullable<System.Int32> Page { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="page_size")]
		public System.Nullable<System.Int32> Page_size { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="previous_page_url")]
		public string Previous_page_url { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="url")]
		public string Url { get; set; }
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
