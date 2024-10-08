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
	using Newtonsoft.Json;
	using Fonlow.Net.Http;
	
	
	public class SessionToken
	{
		
		public string AccessId { get; set; }
		
		/// <summary>
		/// This is populated when user requests a compact token. The alternate token value is self describing token.
		/// </summary>
		public string AlternateToken { get; set; }
		
		public string AuthorizationId { get; set; }
		
		public System.Collections.Generic.Dictionary<string, string> Claims { get; set; }
		
		public string ClientId { get; set; }
		
		public string DisplayName { get; set; }
		
		public string HostAuthorizationId { get; set; }
		
		public System.Nullable<System.Boolean> IsPublic { get; set; }
		
		public System.Nullable<System.Boolean> IsValid { get; set; }
		
		public string PublicData { get; set; }
		
		public string Scope { get; set; }
		
		public string Source { get; set; }
		
		public string[] TargetAccounts { get; set; }
		
		/// <summary>
		/// This is computed and not returned in Get queries
		/// </summary>
		public string Token { get; set; }
		
		public string UserId { get; set; }
		
		public System.Nullable<System.DateTimeOffset> ValidFrom { get; set; }
		
		public System.Nullable<System.DateTimeOffset> ValidTo { get; set; }
	}
	
	public class TokenAdministrationRevocation
	{
		
		/// <summary>
		/// A list of audience (target accounts) to limit the revocations to
		/// </summary>
		public string[] Audience { get; set; }
		
		/// <summary>
		/// A list of authorization ID of the OAuth authorization to revoke.
		/// </summary>
		public string[] AuthorizationIds { get; set; }
	}
	
	/// <summary>
	/// A paginated list of session tokens. Session tokens correspond to OAuth credentials such as personal access tokens (PATs) and other OAuth authorizations.
	/// </summary>
	public class TokenAdminPagedSessionTokens
	{
		
		/// <summary>
		/// The continuation token that can be used to retrieve the next page of session tokens, or <code>null</code> if there is no next page.
		/// </summary>
		public string ContinuationToken { get; set; }
		
		/// <summary>
		/// The list of all session tokens in the current page.
		/// </summary>
		public SessionToken[] Value { get; set; }
	}
	
	/// <summary>
	/// A request to revoke a particular delegated authorization.
	/// </summary>
	public class TokenAdminRevocation
	{
		
		/// <summary>
		/// The authorization ID of the OAuth authorization to revoke.
		/// </summary>
		public string AuthorizationId { get; set; }
	}
	
	/// <summary>
	/// This class is used to serialized collections as a single JSON object on the wire, to avoid serializing JSON arrays directly to the client, which can be a security hole
	/// </summary>
	public class VssJsonCollectionWrapper
	{
		
		public string Value { get; set; }
	}
	
	public class VssJsonCollectionWrapperBase
	{
		
		public System.Nullable<System.Int32> Count { get; set; }
	}
	
	public partial class MyClient
	{
		
		private System.Net.Http.HttpClient httpClient;
		
		private JsonSerializerSettings jsonSerializerSettings;
		
		public MyClient(System.Net.Http.HttpClient httpClient, JsonSerializerSettings jsonSerializerSettings=null)
		{
			if (httpClient == null)
				throw new ArgumentNullException("Null HttpClient.", "httpClient");

			if (httpClient.BaseAddress == null)
				throw new ArgumentNullException("HttpClient has no BaseAddress", "httpClient");

			this.httpClient = httpClient;
			this.jsonSerializerSettings = jsonSerializerSettings;
		}
		
		/// <summary>
		/// Revokes the listed OAuth authorizations.
		/// List _apis/tokenadministration/tokenlistglobalidentities
		/// </summary>
		/// <param name="isPublic">Set to false for PAT tokens and true for SSH tokens.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '5.2-preview.1' to use this version of the api.</param>
		/// <param name="requestBody">The list of identities containing the authorization IDs of the OAuth authorizations, such as session tokens retrieved by listed a users PATs, that should be checked for global access tokens.</param>
		public async Task ListAsync(bool isPublic, string api_version, TokenAdminRevocation[] requestBody)
		{
			var requestUri = "_apis/tokenadministration/tokenlistglobalidentities?isPublic="+isPublic+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
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
		/// Revokes the listed OAuth authorizations.
		/// List _apis/tokenadministration/tokenlistglobalidentities
		/// </summary>
		/// <param name="isPublic">Set to false for PAT tokens and true for SSH tokens.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '5.2-preview.1' to use this version of the api.</param>
		/// <param name="requestBody">The list of identities containing the authorization IDs of the OAuth authorizations, such as session tokens retrieved by listed a users PATs, that should be checked for global access tokens.</param>
		public void List(bool isPublic, string api_version, TokenAdminRevocation[] requestBody)
		{
			var requestUri = "_apis/tokenadministration/tokenlistglobalidentities?isPublic="+isPublic+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			var responseMessage = httpClient.SendAsync(httpRequestMessage).Result;
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
		/// Lists of all the session token details of the personal access tokens (PATs) for a particular user.
		/// List _apis/tokenadministration/tokenpersonalaccesstokens/{subjectDescriptor}
		/// </summary>
		/// <param name="subjectDescriptor">The descriptor of the target user.</param>
		/// <param name="pageSize">The maximum number of results to return on each page.</param>
		/// <param name="continuationToken">An opaque data blob that allows the next page of data to resume immediately after where the previous page ended. The only reliable way to know if there is more data left is the presence of a continuation token.</param>
		/// <param name="isPublic">Set to false for PAT tokens and true for SSH tokens.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '5.2-preview.1' to use this version of the api.</param>
		/// <returns>An an array containing all the session token objects corresponding to the user's PATs.</returns>
		public async Task<TokenAdminPagedSessionTokens> ListAsync(string subjectDescriptor, int pageSize, string continuationToken, bool isPublic, string api_version, string[] requestBody)
		{
			var requestUri = "_apis/tokenadministration/tokenpersonalaccesstokens/"+ (subjectDescriptor==null? "" : System.Uri.EscapeDataString(subjectDescriptor))+"&pageSize="+pageSize+"&continuationToken=" + (continuationToken==null? "" : System.Uri.EscapeDataString(continuationToken))+"&isPublic="+isPublic+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<TokenAdminPagedSessionTokens>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists of all the session token details of the personal access tokens (PATs) for a particular user.
		/// List _apis/tokenadministration/tokenpersonalaccesstokens/{subjectDescriptor}
		/// </summary>
		/// <param name="subjectDescriptor">The descriptor of the target user.</param>
		/// <param name="pageSize">The maximum number of results to return on each page.</param>
		/// <param name="continuationToken">An opaque data blob that allows the next page of data to resume immediately after where the previous page ended. The only reliable way to know if there is more data left is the presence of a continuation token.</param>
		/// <param name="isPublic">Set to false for PAT tokens and true for SSH tokens.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '5.2-preview.1' to use this version of the api.</param>
		/// <returns>An an array containing all the session token objects corresponding to the user's PATs.</returns>
		public TokenAdminPagedSessionTokens List(string subjectDescriptor, int pageSize, string continuationToken, bool isPublic, string api_version, string[] requestBody)
		{
			var requestUri = "_apis/tokenadministration/tokenpersonalaccesstokens/"+ (subjectDescriptor==null? "" : System.Uri.EscapeDataString(subjectDescriptor))+"&pageSize="+pageSize+"&continuationToken=" + (continuationToken==null? "" : System.Uri.EscapeDataString(continuationToken))+"&isPublic="+isPublic+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			var responseMessage = httpClient.SendAsync(httpRequestMessage).Result;
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = responseMessage.Content.ReadAsStream();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<TokenAdminPagedSessionTokens>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Revokes the listed OAuth authorizations.
		/// Revoke_Authorizations _apis/tokenadministration/tokenrevocations
		/// </summary>
		/// <param name="hostId">Host Id to display on the notification page to manage tokens.</param>
		/// <param name="isPublic">Set to false for PAT tokens and true for SSH tokens.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '5.2-preview.1' to use this version of the api.</param>
		/// <param name="requestBody">The list of objects containing the authorization IDs of the OAuth authorizations, such as session tokens retrieved by listed a users PATs, that should be revoked.</param>
		public async Task Revoke_AuthorizationsAsync(string hostId, bool isPublic, string api_version, TokenAdministrationRevocation requestBody)
		{
			var requestUri = "_apis/tokenadministration/tokenrevocations?hostId=" + (hostId==null? "" : System.Uri.EscapeDataString(hostId))+"&isPublic="+isPublic+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
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
		/// Revokes the listed OAuth authorizations.
		/// Revoke_Authorizations _apis/tokenadministration/tokenrevocations
		/// </summary>
		/// <param name="hostId">Host Id to display on the notification page to manage tokens.</param>
		/// <param name="isPublic">Set to false for PAT tokens and true for SSH tokens.</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '5.2-preview.1' to use this version of the api.</param>
		/// <param name="requestBody">The list of objects containing the authorization IDs of the OAuth authorizations, such as session tokens retrieved by listed a users PATs, that should be revoked.</param>
		public void Revoke_Authorizations(string hostId, bool isPublic, string api_version, TokenAdministrationRevocation requestBody)
		{
			var requestUri = "_apis/tokenadministration/tokenrevocations?hostId=" + (hostId==null? "" : System.Uri.EscapeDataString(hostId))+"&isPublic="+isPublic+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			var responseMessage = httpClient.SendAsync(httpRequestMessage).Result;
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
