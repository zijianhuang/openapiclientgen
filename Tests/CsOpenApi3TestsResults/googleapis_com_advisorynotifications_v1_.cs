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
	/// Attachment with specific information about the issue.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudAdvisorynotificationsV1Attachment
	{
		
		/// <summary>
		/// A representation of a CSV file attachment, as a list of column headers and a list of data rows.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="csv")]
		public GoogleCloudAdvisorynotificationsV1Csv Csv { get; set; }
		
		/// <summary>
		/// The title of the attachment.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="displayName")]
		public string DisplayName { get; set; }
	}
	
	/// <summary>
	/// A representation of a CSV file attachment, as a list of column headers and a list of data rows.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudAdvisorynotificationsV1Csv
	{
		
		/// <summary>
		/// The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="dataRows")]
		public GoogleCloudAdvisorynotificationsV1CsvCsvRow[] DataRows { get; set; }
		
		/// <summary>
		/// The list of headers for data columns in a CSV file.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="headers")]
		public string[] Headers { get; set; }
	}
	
	/// <summary>
	/// A representation of a single data row in a CSV file.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudAdvisorynotificationsV1CsvCsvRow
	{
		
		/// <summary>
		/// The data entries in a CSV file row, as a string array rather than a single comma-separated string.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="entries")]
		public string[] Entries { get; set; }
	}
	
	/// <summary>
	/// Response of ListNotifications endpoint.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudAdvisorynotificationsV1ListNotificationsResponse
	{
		
		/// <summary>
		/// A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextPageToken")]
		public string NextPageToken { get; set; }
		
		/// <summary>
		/// List of notifications under a given parent.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="notifications")]
		public GoogleCloudAdvisorynotificationsV1Notification[] Notifications { get; set; }
		
		/// <summary>
		/// Estimation of a total number of notifications.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="totalSize")]
		public System.Nullable<System.Int32> TotalSize { get; set; }
	}
	
	/// <summary>
	/// A notification object for notifying customers about security and privacy issues.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudAdvisorynotificationsV1Notification
	{
		
		/// <summary>
		/// Output only. Time the notification was created.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="createTime")]
		public string CreateTime { get; set; }
		
		/// <summary>
		/// A list of messages in the notification.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="messages")]
		public GoogleCloudAdvisorynotificationsV1Message[] Messages { get; set; }
		
		/// <summary>
		/// The resource name of the notification. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{project}/locations/{location}/notifications/{notification}.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Type of notification
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="notificationType")]
		public System.Nullable<GoogleCloudAdvisorynotificationsV1NotificationNotificationType> NotificationType { get; set; }
		
		/// <summary>
		/// A subject line of a notification.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="subject")]
		public GoogleCloudAdvisorynotificationsV1Subject Subject { get; set; }
	}
	
	/// <summary>
	/// A message which contains notification details.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudAdvisorynotificationsV1Message
	{
		
		/// <summary>
		/// The attachments to download.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="attachments")]
		public GoogleCloudAdvisorynotificationsV1Attachment[] Attachments { get; set; }
		
		/// <summary>
		/// A message body containing text.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="body")]
		public GoogleCloudAdvisorynotificationsV1MessageBody Body { get; set; }
		
		/// <summary>
		/// The Message creation timestamp.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="createTime")]
		public string CreateTime { get; set; }
		
		/// <summary>
		/// Time when Message was localized
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="localizationTime")]
		public string LocalizationTime { get; set; }
	}
	
	/// <summary>
	/// A message body containing text.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudAdvisorynotificationsV1MessageBody
	{
		
		/// <summary>
		/// A text object containing the English text and its localized copies.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="text")]
		public GoogleCloudAdvisorynotificationsV1Text Text { get; set; }
	}
	
	/// <summary>
	/// A text object containing the English text and its localized copies.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudAdvisorynotificationsV1Text
	{
		
		/// <summary>
		/// The English copy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="enText")]
		public string EnText { get; set; }
		
		/// <summary>
		/// Status of the localization.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="localizationState")]
		public System.Nullable<GoogleCloudAdvisorynotificationsV1TextLocalizationState> LocalizationState { get; set; }
		
		/// <summary>
		/// The requested localized copy (if applicable).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="localizedText")]
		public string LocalizedText { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum GoogleCloudAdvisorynotificationsV1TextLocalizationState
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LOCALIZATION_STATE_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LOCALIZATION_STATE_NOT_APPLICABLE = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LOCALIZATION_STATE_PENDING = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LOCALIZATION_STATE_COMPLETED = 3,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum GoogleCloudAdvisorynotificationsV1NotificationNotificationType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NOTIFICATION_TYPE_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NOTIFICATION_TYPE_SECURITY_PRIVACY_ADVISORY = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NOTIFICATION_TYPE_SENSITIVE_ACTIONS = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NOTIFICATION_TYPE_SECURITY_MSA = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NOTIFICATION_TYPE_THREAT_HORIZONS = 4,
	}
	
	/// <summary>
	/// A subject line of a notification.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudAdvisorynotificationsV1Subject
	{
		
		/// <summary>
		/// A text object containing the English text and its localized copies.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="text")]
		public GoogleCloudAdvisorynotificationsV1Text Text { get; set; }
	}
	
	/// <summary>
	/// Settings for each NotificationType.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudAdvisorynotificationsV1NotificationSettings
	{
		
		/// <summary>
		/// Whether the associated NotificationType is enabled.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="enabled")]
		public System.Nullable<System.Boolean> Enabled { get; set; }
	}
	
	/// <summary>
	/// Settings for Advisory Notifications.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class GoogleCloudAdvisorynotificationsV1Settings
	{
		
		/// <summary>
		/// Required. Fingerprint for optimistic concurrency returned in Get requests. Must be provided for Update requests. If the value provided does not match the value known to the server, ABORTED will be thrown, and the client should retry the read-modify-write cycle.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="etag")]
		public string Etag { get; set; }
		
		/// <summary>
		/// Identifier. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Required. Map of each notification type and its settings to get/set all settings at once. The server will validate the value for each notification type.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="notificationSettings")]
		public System.Collections.Generic.Dictionary<string, GoogleCloudAdvisorynotificationsV1NotificationSettings> NotificationSettings { get; set; }
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
		/// Gets a notification.
		/// Advisorynotifications_projects_locations_notifications_get v1/{name}
		/// </summary>
		/// <param name="name">Required. A name of the notification to retrieve. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{projects}/locations/{location}/notifications/{notification}.</param>
		/// <param name="languageCode">ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.</param>
		/// <returns>Successful response</returns>
		public async Task<GoogleCloudAdvisorynotificationsV1Notification> Advisorynotifications_projects_locations_notifications_getAsync(string name, string languageCode, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (name==null? "" : System.Uri.EscapeDataString(name))+"&languageCode=" + (languageCode==null? "" : System.Uri.EscapeDataString(languageCode));
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
				return JsonSerializer.Deserialize<GoogleCloudAdvisorynotificationsV1Notification>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Update notification settings.
		/// Advisorynotifications_organizations_locations_updateSettings v1/{name}
		/// </summary>
		/// <param name="name">Identifier. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings.</param>
		/// <returns>Successful response</returns>
		public async Task<GoogleCloudAdvisorynotificationsV1Settings> Advisorynotifications_organizations_locations_updateSettingsAsync(string name, GoogleCloudAdvisorynotificationsV1Settings requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (name==null? "" : System.Uri.EscapeDataString(name));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
			var content = System.Net.Http.Json.JsonContent.Create(requestBody, mediaType: null, jsonSerializerSettings);
			httpRequestMessage.Content = content;
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<GoogleCloudAdvisorynotificationsV1Settings>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists notifications under a given parent.
		/// Advisorynotifications_projects_locations_notifications_list v1/{parent}/notifications
		/// </summary>
		/// <param name="parent">Required. The parent, which owns this collection of notifications. Must be of the form "organizations/{organization}/locations/{location}" or "projects/{project}/locations/{location}"</param>
		/// <param name="languageCode">ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.</param>
		/// <param name="pageSize">The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50.</param>
		/// <param name="pageToken">A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token.</param>
		/// <param name="view">Specifies which parts of the notification resource should be returned in the response.</param>
		/// <returns>Successful response</returns>
		public async Task<GoogleCloudAdvisorynotificationsV1ListNotificationsResponse> Advisorynotifications_projects_locations_notifications_listAsync(string parent, string languageCode, int pageSize, string pageToken, Advisorynotifications_projects_locations_notifications_listView view, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/notifications&languageCode=" + (languageCode==null? "" : System.Uri.EscapeDataString(languageCode))+"&pageSize="+pageSize+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken))+"&view=" + view;
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
				return JsonSerializer.Deserialize<GoogleCloudAdvisorynotificationsV1ListNotificationsResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public enum Advisorynotifications_projects_locations_notifications_listView
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NOTIFICATION_VIEW_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BASIC = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FULL = 2,
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
