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
	public class AccessToken
	{
		
		/// <summary>
		/// access token provided during authentication flow
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="access_token")]
		public string Access_token { get; set; }
		
		/// <summary>
		/// time in milliseconds until access token expires.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="expires_in")]
		public string Expires_in { get; set; }
		
		/// <summary>
		/// Xero unique identifier
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id_token")]
		public string Id_token { get; set; }
		
		/// <summary>
		/// token used to refresh an expired access token
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="refresh_token")]
		public string Refresh_token { get; set; }
		
		/// <summary>
		/// type of token i.e. Bearer
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="token_type")]
		public string Token_type { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Connection
	{
		
		/// <summary>
		/// Identifier shared across connections authorised at the same time
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="authEventId")]
		public string AuthEventId { get; set; }
		
		/// <summary>
		/// The date when the user connected this tenant to your app
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="createdDateUtc")]
		public System.Nullable<System.DateTimeOffset> CreatedDateUtc { get; set; }
		
		/// <summary>
		/// Xero identifier
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		/// <summary>
		/// Xero identifier of organisation
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tenantId")]
		public string TenantId { get; set; }
		
		/// <summary>
		/// Xero tenant name
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tenantName")]
		public string TenantName { get; set; }
		
		/// <summary>
		/// Xero tenant type (i.e. ORGANISATION, PRACTICE)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="tenantType")]
		public string TenantType { get; set; }
		
		/// <summary>
		/// The date when the user most recently connected this tenant to your app. May differ to the created date if the user has disconnected and subsequently reconnected this tenant to your app.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="updatedDateUtc")]
		public System.Nullable<System.DateTimeOffset> UpdatedDateUtc { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class RefreshToken
	{
		
		/// <summary>
		/// client id for Xero app
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="client_id")]
		public string Client_id { get; set; }
		
		/// <summary>
		/// client secret for Xero app 2
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="client_secret")]
		public string Client_secret { get; set; }
		
		/// <summary>
		/// Xero grant type
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="grant_type")]
		public string Grant_type { get; set; }
		
		/// <summary>
		/// refresh token provided during authentication flow
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="refresh_token")]
		public string Refresh_token { get; set; }
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
		/// Retrieves the connections for this user
		/// Override the base server url that include version
		/// GetConnections Connections
		/// </summary>
		/// <param name="authEventId">Filter by authEventId</param>
		/// <returns>Success - return response of type Connections array with 0 to n Connection</returns>
		public async Task<Connection[]> GetConnectionsAsync(string authEventId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "Connections?authEventId=" + (authEventId==null? "" : System.Uri.EscapeDataString(authEventId));
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
				return JsonSerializer.Deserialize<Connection[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes a connection for this user (i.e. disconnect a tenant)
		/// Override the base server url that include version
		/// DeleteConnection Connections/{id}
		/// </summary>
		/// <param name="id">Unique identifier for retrieving single object</param>
		public async Task DeleteConnectionAsync(string id, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "Connections/"+ (id==null? "" : System.Uri.EscapeDataString(id));
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