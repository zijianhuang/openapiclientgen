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
	
	
	public class SessionRequest
	{
		
		/// <summary>
		/// Generic property bag to store data about the session
		/// </summary>
		public System.Collections.Generic.Dictionary<string, string> Data { get; set; }
		
		/// <summary>
		/// The feed name or id for the session
		/// </summary>
		public string Feed { get; set; }
		
		/// <summary>
		/// The type of session If a known value is provided, the Data dictionary will be validated for the presence of properties required by that type
		/// </summary>
		public string Source { get; set; }
	}
	
	public class SessionResponse
	{
		
		/// <summary>
		/// The unique identifier for the session
		/// </summary>
		public string SessionId { get; set; }
		
		/// <summary>
		/// The name for the session
		/// </summary>
		public string SessionName { get; set; }
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
		/// Creates a session, a wrapper around a feed that can store additional metadata on the packages published to it.
		/// Provenance_CreateSession {organization}/{project}/_apis/provenance/session/{protocol}
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="protocol">The protocol that the session will target</param>
		/// <param name="project">Project ID or project name</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <param name="requestBody">The feed and metadata for the session</param>
		/// <returns>successful operation</returns>
		public async Task<SessionResponse> Provenance_CreateSessionAsync(string organization, string protocol, string project, string api_version, SessionRequest requestBody)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/"+ (project==null? "" : System.Uri.EscapeDataString(project))+"/_apis/provenance/session/"+ (protocol==null? "" : System.Uri.EscapeDataString(protocol))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
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
				return serializer.Deserialize<SessionResponse>(jsonReader);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates a session, a wrapper around a feed that can store additional metadata on the packages published to it.
		/// Provenance_CreateSession {organization}/{project}/_apis/provenance/session/{protocol}
		/// </summary>
		/// <param name="organization">The name of the Azure DevOps organization.</param>
		/// <param name="protocol">The protocol that the session will target</param>
		/// <param name="project">Project ID or project name</param>
		/// <param name="api_version">Version of the API to use.  This should be set to '6.0-preview.1' to use this version of the api.</param>
		/// <param name="requestBody">The feed and metadata for the session</param>
		/// <returns>successful operation</returns>
		public SessionResponse Provenance_CreateSession(string organization, string protocol, string project, string api_version, SessionRequest requestBody)
		{
			var requestUri = ""+ (organization==null? "" : System.Uri.EscapeDataString(organization))+"/"+ (project==null? "" : System.Uri.EscapeDataString(project))+"/_apis/provenance/session/"+ (protocol==null? "" : System.Uri.EscapeDataString(protocol))+"&api-version=" + (api_version==null? "" : System.Uri.EscapeDataString(api_version));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Post, requestUri);
			using var requestWriter = new System.IO.StringWriter();
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);
			requestSerializer.Serialize(requestWriter, requestBody);
			var content = new System.Net.Http.StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
			httpRequestMessage.Content = content;
			var responseMessage = httpClient.Send(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = responseMessage.Content.ReadAsStream();
				using JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(streamContent));
				var serializer = JsonSerializer.Create(jsonSerializerSettings);
				return serializer.Deserialize<SessionResponse>(jsonReader);
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