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
		/// Gets email validation information for an email address
		/// Get email validation information and other demographics for an email address.
		/// Getemailinfo getemailinfo
		/// </summary>
		/// <param name="license">Your Interzoid license API key. Register at www.interzoid.com/register</param>
		/// <param name="email">Email address to retrieve validation information</param>
		/// <returns>Email validation and demographic information</returns>
		public async Task<GetemailinfoReturn> GetemailinfoAsync(string license, string email, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "getemailinfo?license=" + (license==null? "" : System.Uri.EscapeDataString(license))+"&email=" + (email==null? "" : System.Uri.EscapeDataString(email));
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
				return JsonSerializer.Deserialize<GetemailinfoReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public class GetemailinfoReturn
	{
		
		[System.Runtime.Serialization.DataMember()]
		public string Code { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Credits { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Email { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Geolocation { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Info { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string IsDisposable { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string IsEducational { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string IsGeneric { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string IsGovernment { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string IsOrganizational { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string IsVulgar { get; set; }
		
		[System.Runtime.Serialization.DataMember()]
		public string Response { get; set; }
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
