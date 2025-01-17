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
	/// AMP URL response for a requested URL.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AmpUrl
	{
		
		/// <summary>
		/// The AMP URL pointing to the publisher's web server.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="ampUrl")]
		public string AmpUrl1 { get; set; }
		
		/// <summary>
		/// The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to the cached document in the Google AMP Cache.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="cdnAmpUrl")]
		public string CdnAmpUrl { get; set; }
		
		/// <summary>
		/// The original non-AMP URL.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="originalUrl")]
		public string OriginalUrl { get; set; }
	}
	
	/// <summary>
	/// AMP URL Error resource for a requested URL that couldn't be found.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AmpUrlError
	{
		
		/// <summary>
		/// The error code of an API call.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errorCode")]
		public System.Nullable<AmpUrlErrorErrorCode> ErrorCode { get; set; }
		
		/// <summary>
		/// An optional descriptive error message.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errorMessage")]
		public string ErrorMessage { get; set; }
		
		/// <summary>
		/// The original non-AMP URL.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="originalUrl")]
		public string OriginalUrl { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum AmpUrlErrorErrorCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ERROR_CODE_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		INPUT_URL_NOT_FOUND = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		NO_AMP_URL = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		APPLICATION_ERROR = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		URL_IS_VALID_AMP = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		URL_IS_INVALID_AMP = 5,
	}
	
	/// <summary>
	/// AMP URL request for a batch of URLs.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BatchGetAmpUrlsRequest
	{
		
		/// <summary>
		/// The lookup_strategy being requested.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="lookupStrategy")]
		public System.Nullable<BatchGetAmpUrlsRequestLookupStrategy> LookupStrategy { get; set; }
		
		/// <summary>
		/// List of URLs to look up for the paired AMP URLs. The URLs are case-sensitive. Up to 50 URLs per lookup (see [Usage Limits](/amp/cache/reference/limits)).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="urls")]
		public string[] Urls { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum BatchGetAmpUrlsRequestLookupStrategy
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FETCH_LIVE_DOC = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		IN_INDEX_DOC = 1,
	}
	
	/// <summary>
	/// Batch AMP URL response.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BatchGetAmpUrlsResponse
	{
		
		/// <summary>
		/// For each URL in BatchAmpUrlsRequest, the URL response. The response might not be in the same order as URLs in the batch request. If BatchAmpUrlsRequest contains duplicate URLs, AmpUrl is generated only once.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="ampUrls")]
		public AmpUrl[] AmpUrls { get; set; }
		
		/// <summary>
		/// The errors for requested URLs that have no AMP URL.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="urlErrors")]
		public AmpUrlError[] UrlErrors { get; set; }
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
		/// Returns AMP URL(s) and equivalent [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).
		/// Acceleratedmobilepageurl_ampUrls_batchGet v1/ampUrls:batchGet
		/// </summary>
		/// <returns>Successful response</returns>
		public async Task<BatchGetAmpUrlsResponse> Acceleratedmobilepageurl_ampUrls_batchGetAsync(BatchGetAmpUrlsRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/ampUrls:batchGet";
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
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<BatchGetAmpUrlsResponse>(streamContent, jsonSerializerSettings);
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
