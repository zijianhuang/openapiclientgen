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
		/// Delete account
		/// Endpoint used to delete an account.
		/// DeleteAccount accounts
		/// </summary>
		public async Task DeleteAccountAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "accounts";
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
		/// Create or update account
		/// Endpoint used to create or update an account.
		/// UpsertAccount accounts/upsert
		/// </summary>
		public async Task UpsertAccountAsync(UpsertAccountPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "accounts/upsert";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
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
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Add users to an account
		/// You can add up to 100 users to an account.
		/// AddUserToAccount accounts/users/add
		/// </summary>
		public async Task AddUserToAccountAsync(AddUserToAccountPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "accounts/users/add";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
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
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Remove user from account
		/// You can remove up to 100 users from an account.
		/// 
		/// When removing a user, the user will still be stored in journy.io, but marked as "removed".
		/// 
		/// RemoveUserFromAccount accounts/users/remove
		/// </summary>
		public async Task RemoveUserFromAccountAsync(RemoveUserFromAccountPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "accounts/users/remove";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
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
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get events
		/// Endpoint to list events.
		/// GetEvents events
		/// </summary>
		/// <returns>Events</returns>
		public async Task<GetEventsReturn> GetEventsAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "events";
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
				return JsonSerializer.Deserialize<GetEventsReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Track event
		/// Endpoint used to track an event for a user or an account.
		/// 
		/// This endpoint is moved to [Track](#operation/trackEvent).
		/// TrackJourneyEvent events
		/// </summary>
		public async Task TrackJourneyEventAsync(TrackJourneyEventPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "events";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
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
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Link web activity to user
		/// 💡 You don't need to use this endpoint if you use our JavaScript snippet in your application.
		/// 
		/// This endpoint is used to link web activity to a user in your application. This will help you discover which channels and campaigns work best.
		/// 
		/// When our JavaScript snippet is embedded on your website, blog or landing pages, a cookie named "__journey" will be set.
		/// 
		/// This will only work if your website and application are under the same top level domain.
		/// 
		/// Website, blog or landing pages
		/// * www.my-domain.tld
		/// * blog.my-domain.tld
		/// * landing-page.my-domain.tld
		/// 
		/// Application
		/// * app.my-domain.tld
		/// 
		/// The cookie on my-domain.tld will also be send to your app domain.
		/// 
		/// You should call this endpoint after the user succesfully logged in (so that you know the user's ID). Use the value of the cookie as device ID.
		/// Link link
		/// </summary>
		public async Task LinkAsync(LinkPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "link";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
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
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get account properties
		/// Endpoint to list account properties.
		/// GetAccountProperties properties/accounts
		/// </summary>
		/// <returns>Account Properties</returns>
		public async Task<GetAccountPropertiesReturn> GetAccountPropertiesAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "properties/accounts";
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
				return JsonSerializer.Deserialize<GetAccountPropertiesReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get user properties
		/// Endpoint to list user properties.
		/// GetUserProperties properties/users
		/// </summary>
		/// <returns>User Properties</returns>
		public async Task<GetUserPropertiesReturn> GetUserPropertiesAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "properties/users";
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
				return JsonSerializer.Deserialize<GetUserPropertiesReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get account segments
		/// Endpoint to list account segments.
		/// GetAccountSegments segments/accounts
		/// </summary>
		/// <returns>Account Segments</returns>
		public async Task<GetAccountSegmentsReturn> GetAccountSegmentsAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "segments/accounts";
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
				return JsonSerializer.Deserialize<GetAccountSegmentsReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get user segments
		/// Endpoint to list user segments.
		/// GetUserSegments segments/users
		/// </summary>
		/// <returns>User Segments</returns>
		public async Task<GetUserSegmentsReturn> GetUserSegmentsAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "segments/users";
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
				return JsonSerializer.Deserialize<GetUserSegmentsReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Track event
		/// Endpoint used to track an event for a user or an account.
		/// TrackEvent track
		/// </summary>
		public async Task TrackEventAsync(TrackEventPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "track";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
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
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get snippet for a website
		/// Endpoint used to get a snippet for a website.
		/// GetTrackingSnippet tracking/snippet
		/// </summary>
		/// <param name="domain">The domain you want to receive a snippet for</param>
		/// <returns>Snippet</returns>
		public async Task<GetTrackingSnippetReturn> GetTrackingSnippetAsync(string domain, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "tracking/snippet?domain=" + (domain==null? "" : System.Uri.EscapeDataString(domain));
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
				return JsonSerializer.Deserialize<GetTrackingSnippetReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Delete user
		/// Endpoint to delete a user.
		/// DeleteUser users
		/// </summary>
		public async Task DeleteUserAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "users";
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
		/// Create or update user
		/// Endpoint to create or update a user.
		/// UpsertUser users/upsert
		/// </summary>
		public async Task UpsertUserAsync(UpsertUserPostBody requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "users/upsert";
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
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
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Validate API key
		/// Endpoint used to test the validity and some basic information about a specific API Key.
		/// GetValidity validate
		/// </summary>
		/// <returns>Key validation</returns>
		public async Task<GetValidityReturn> GetValidityAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "validate";
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
				return JsonSerializer.Deserialize<GetValidityReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public class UpsertAccountPostBody
	{
		
		/// <summary>
		/// Account identification requires an accountId, domain or both
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="identification")]
		public UpsertAccountPostBodyIdentification Identification { get; set; }
		
		/// <summary>
		/// The properties being set, possible values are strings, booleans, numbers and datetimes (ISO 8601)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public System.Collections.Generic.Dictionary<string, object> Properties { get; set; }
	}
	
	public class UpsertAccountPostBodyIdentification
	{
		
		/// <summary>
		/// Unique identifier for the account in your database
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="accountId")]
		public string AccountId { get; set; }
		
		/// <summary>
		/// The domain associated with the account (e.g. acme-inc.com)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="domain")]
		public string Domain { get; set; }
	}
	
	public class AddUserToAccountPostBody
	{
		
		/// <summary>
		/// Account identification requires an accountId, domain or both
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="account")]
		public AddUserToAccountPostBodyAccount Account { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="users")]
		public AddUserToAccountPostBodyUsers[] AddUserToAccountPostBodyUsers { get; set; }
	}
	
	public class AddUserToAccountPostBodyAccount
	{
		
		/// <summary>
		/// Unique identifier for the account in your database
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="accountId")]
		public string AccountId { get; set; }
		
		/// <summary>
		/// The domain associated with the account (e.g. acme-inc.com)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="domain")]
		public string Domain { get; set; }
	}
	
	public class AddUserToAccountPostBodyUsers
	{
		
		/// <summary>
		/// User identification requires a userId, email or both
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="identification")]
		public AddUserToAccountPostBodyUsersIdentification Identification { get; set; }
	}
	
	public class AddUserToAccountPostBodyUsersIdentification
	{
		
		/// <summary>
		/// Email address of the user
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="email")]
		public string Email { get; set; }
		
		/// <summary>
		/// Unique identifier for the user in your database
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="userId")]
		public string UserId { get; set; }
	}
	
	public class RemoveUserFromAccountPostBody
	{
		
		/// <summary>
		/// Account identification requires an accountId, domain or both
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="account")]
		public RemoveUserFromAccountPostBodyAccount Account { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="users")]
		public RemoveUserFromAccountPostBodyUsers[] RemoveUserFromAccountPostBodyUsers { get; set; }
	}
	
	public class RemoveUserFromAccountPostBodyAccount
	{
		
		/// <summary>
		/// Unique identifier for the account in your database
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="accountId")]
		public string AccountId { get; set; }
		
		/// <summary>
		/// The domain associated with the account (e.g. acme-inc.com)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="domain")]
		public string Domain { get; set; }
	}
	
	public class RemoveUserFromAccountPostBodyUsers
	{
		
		/// <summary>
		/// User identification requires a userId, email or both
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="identification")]
		public RemoveUserFromAccountPostBodyUsersIdentification Identification { get; set; }
	}
	
	public class RemoveUserFromAccountPostBodyUsersIdentification
	{
		
		/// <summary>
		/// Email address of the user
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="email")]
		public string Email { get; set; }
		
		/// <summary>
		/// Unique identifier for the user in your database
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="userId")]
		public string UserId { get; set; }
	}
	
	public class GetEventsReturn
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public GetEventsReturnMeta Meta { get; set; }
	}
	
	public class GetEventsReturnMeta
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="requestId")]
		public string RequestId { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="status")]
		public double Status { get; set; }
	}
	
	public class TrackJourneyEventPostBody
	{
		
		/// <summary>
		/// Event identification requires a user, account or both
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="identification")]
		public TrackJourneyEventPostBodyIdentification Identification { get; set; }
		
		/// <summary>
		/// Event metadata, possible values are strings, booleans, numbers and datetimes (ISO 8601)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="metadata")]
		public System.Collections.Generic.Dictionary<string, object> Metadata { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// If left blank this defaults to the current datetime
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="triggeredAt")]
		public string TriggeredAt { get; set; }
	}
	
	public class TrackJourneyEventPostBodyIdentification
	{
		
		/// <summary>
		/// Account identification requires an accountId, domain or both
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="account")]
		public TrackJourneyEventPostBodyIdentificationAccount Account { get; set; }
		
		/// <summary>
		/// User identification requires a userId, email or both
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="user")]
		public TrackJourneyEventPostBodyIdentificationUser User { get; set; }
	}
	
	public class TrackJourneyEventPostBodyIdentificationAccount
	{
		
		/// <summary>
		/// Unique identifier for the account in your database
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="accountId")]
		public string AccountId { get; set; }
		
		/// <summary>
		/// The domain associated with the account (e.g. acme-inc.com)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="domain")]
		public string Domain { get; set; }
	}
	
	public class TrackJourneyEventPostBodyIdentificationUser
	{
		
		/// <summary>
		/// Email address of the user
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="email")]
		public string Email { get; set; }
		
		/// <summary>
		/// Unique identifier for the user in your database
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="userId")]
		public string UserId { get; set; }
	}
	
	public class LinkPostBody
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="deviceId")]
		public string DeviceId { get; set; }
		
		/// <summary>
		/// User identification requires a userId, email or both
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="identification")]
		public LinkPostBodyIdentification Identification { get; set; }
	}
	
	public class LinkPostBodyIdentification
	{
		
		/// <summary>
		/// Email address of the user
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="email")]
		public string Email { get; set; }
		
		/// <summary>
		/// Unique identifier for the user in your database
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="userId")]
		public string UserId { get; set; }
	}
	
	public class GetAccountPropertiesReturn
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public GetAccountPropertiesReturnMeta Meta { get; set; }
	}
	
	public class GetAccountPropertiesReturnMeta
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="requestId")]
		public string RequestId { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="status")]
		public double Status { get; set; }
	}
	
	public class GetUserPropertiesReturn
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public GetUserPropertiesReturnMeta Meta { get; set; }
	}
	
	public class GetUserPropertiesReturnMeta
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="requestId")]
		public string RequestId { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="status")]
		public double Status { get; set; }
	}
	
	public class GetAccountSegmentsReturn
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public GetAccountSegmentsReturnMeta Meta { get; set; }
	}
	
	public class GetAccountSegmentsReturnMeta
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="requestId")]
		public string RequestId { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="status")]
		public double Status { get; set; }
	}
	
	public class GetUserSegmentsReturn
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public GetUserSegmentsReturnMeta Meta { get; set; }
	}
	
	public class GetUserSegmentsReturnMeta
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="requestId")]
		public string RequestId { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="status")]
		public double Status { get; set; }
	}
	
	public class TrackEventPostBody
	{
		
		/// <summary>
		/// Event identification requires a user, account or both
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="identification")]
		public TrackEventPostBodyIdentification Identification { get; set; }
		
		/// <summary>
		/// Event metadata, possible values are strings, booleans, numbers and datetimes (ISO 8601)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="metadata")]
		public System.Collections.Generic.Dictionary<string, object> Metadata { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// If left blank this defaults to the current datetime
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="triggeredAt")]
		public string TriggeredAt { get; set; }
	}
	
	public class TrackEventPostBodyIdentification
	{
		
		/// <summary>
		/// Account identification requires an accountId, domain or both
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="account")]
		public TrackEventPostBodyIdentificationAccount Account { get; set; }
		
		/// <summary>
		/// User identification requires a userId, email or both
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="user")]
		public TrackEventPostBodyIdentificationUser User { get; set; }
	}
	
	public class TrackEventPostBodyIdentificationAccount
	{
		
		/// <summary>
		/// Unique identifier for the account in your database
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="accountId")]
		public string AccountId { get; set; }
		
		/// <summary>
		/// The domain associated with the account (e.g. acme-inc.com)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="domain")]
		public string Domain { get; set; }
	}
	
	public class TrackEventPostBodyIdentificationUser
	{
		
		/// <summary>
		/// Email address of the user
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="email")]
		public string Email { get; set; }
		
		/// <summary>
		/// Unique identifier for the user in your database
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="userId")]
		public string UserId { get; set; }
	}
	
	public class GetTrackingSnippetReturn
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public GetTrackingSnippetReturnMeta Meta { get; set; }
	}
	
	public class GetTrackingSnippetReturnMeta
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="requestId")]
		public string RequestId { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="status")]
		public double Status { get; set; }
	}
	
	public class UpsertUserPostBody
	{
		
		/// <summary>
		/// User identification requires a userId, email or both
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="identification")]
		public UpsertUserPostBodyIdentification Identification { get; set; }
		
		/// <summary>
		/// The properties being set, possible values are strings, booleans, numbers and datetimes (ISO 8601)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="properties")]
		public System.Collections.Generic.Dictionary<string, object> Properties { get; set; }
	}
	
	public class UpsertUserPostBodyIdentification
	{
		
		/// <summary>
		/// Email address of the user
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="email")]
		public string Email { get; set; }
		
		/// <summary>
		/// Unique identifier for the user in your database
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="userId")]
		public string UserId { get; set; }
	}
	
	public class GetValidityReturn
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="meta")]
		public GetValidityReturnMeta Meta { get; set; }
	}
	
	public class GetValidityReturnMeta
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="requestId")]
		public string RequestId { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="status")]
		public double Status { get; set; }
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