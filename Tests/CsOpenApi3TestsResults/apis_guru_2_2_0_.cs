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
	/// Meta information about API
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class API
	{
		
		/// <summary>
		/// Timestamp when the API was first added to the directory
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="added")]
		public System.DateTimeOffset Added { get; set; }
		
		/// <summary>
		/// Recommended version
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="preferred")]
		public string Preferred { get; set; }
		
		/// <summary>
		/// List of supported versions of the API
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="versions")]
		public System.Collections.Generic.Dictionary<string, ApiVersion> Versions { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ApiVersion
	{
		
		/// <summary>
		/// Timestamp when the version was added
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="added")]
		public System.DateTimeOffset Added { get; set; }
		
		/// <summary>
		/// Copy of `externalDocs` section from OpenAPI definition
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="externalDocs")]
		public string ExternalDocs { get; set; }
		
		/// <summary>
		/// Copy of `info` section from OpenAPI definition
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="info")]
		public string Info { get; set; }
		
		/// <summary>
		/// Link to the individual API entry for this API
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="link")]
		public string Link { get; set; }
		
		/// <summary>
		/// The value of the `openapi` or `swagger` property of the source definition
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="openapiVer")]
		public string OpenapiVer { get; set; }
		
		/// <summary>
		/// URL to OpenAPI definition in JSON format
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="swaggerUrl")]
		public string SwaggerUrl { get; set; }
		
		/// <summary>
		/// URL to OpenAPI definition in YAML format
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="swaggerYamlUrl")]
		public string SwaggerYamlUrl { get; set; }
		
		/// <summary>
		/// Timestamp when the version was updated
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="updated")]
		public System.DateTimeOffset Updated { get; set; }
	}
	
	/// <summary>
	/// List of API details.
	///It is a JSON object with API IDs(`<provider>[:<service>]`) as keys.
	///
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class APIs
	{
	}
	
	/// <summary>
	/// List of basic metrics
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Metrics
	{
		
		/// <summary>
		/// Data used for charting etc
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="datasets")]
		public string[] Datasets { get; set; }
		
		/// <summary>
		/// Percentage of all APIs where auto fixes have been applied
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fixedPct")]
		public System.Nullable<System.Int32> FixedPct { get; set; }
		
		/// <summary>
		/// Total number of fixes applied across all APIs
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fixes")]
		public System.Nullable<System.Int32> Fixes { get; set; }
		
		/// <summary>
		/// Number of newly invalid APIs
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="invalid")]
		public System.Nullable<System.Int32> Invalid { get; set; }
		
		/// <summary>
		/// Open GitHub issues on our main repo
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="issues")]
		public System.Nullable<System.Int32> Issues { get; set; }
		
		/// <summary>
		/// Number of unique APIs
		/// Required
		/// Minimum: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="numAPIs")]
		[System.ComponentModel.DataAnnotations.Range(1, System.Int32.MaxValue)]
		public int NumAPIs { get; set; }
		
		/// <summary>
		/// Number of methods of API retrieval
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="numDrivers")]
		public System.Nullable<System.Int32> NumDrivers { get; set; }
		
		/// <summary>
		/// Total number of endpoints inside all definitions
		/// Required
		/// Minimum: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="numEndpoints")]
		[System.ComponentModel.DataAnnotations.Range(1, System.Int32.MaxValue)]
		public int NumEndpoints { get; set; }
		
		/// <summary>
		/// Number of API providers in directory
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="numProviders")]
		public System.Nullable<System.Int32> NumProviders { get; set; }
		
		/// <summary>
		/// Number of API definitions including different versions of the same API
		/// Required
		/// Minimum: 1
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="numSpecs")]
		[System.ComponentModel.DataAnnotations.Range(1, System.Int32.MaxValue)]
		public int NumSpecs { get; set; }
		
		/// <summary>
		/// GitHub stars for our main repo
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="stars")]
		public System.Nullable<System.Int32> Stars { get; set; }
		
		/// <summary>
		/// Summary totals for the last 7 days
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="thisWeek")]
		public MetricsThisWeek ThisWeek { get; set; }
		
		/// <summary>
		/// Number of unofficial APIs
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="unofficial")]
		public System.Nullable<System.Int32> Unofficial { get; set; }
		
		/// <summary>
		/// Number of unreachable (4XX,5XX status) APIs
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="unreachable")]
		public System.Nullable<System.Int32> Unreachable { get; set; }
	}
	
	public class MetricsThisWeek
	{
		
		/// <summary>
		/// APIs added in the last week
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="added")]
		public System.Nullable<System.Int32> Added { get; set; }
		
		/// <summary>
		/// APIs updated in the last week
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="updated")]
		public System.Nullable<System.Int32> Updated { get; set; }
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
		/// List all APIs
		/// List all APIs in the directory.
		/// Returns links to the OpenAPI definitions for each API in the directory.
		/// If API exist in multiple versions `preferred` one is explicitly marked.
		/// Some basic info from the OpenAPI definition is cached inside each object.
		/// This allows you to generate some simple views without needing to fetch the OpenAPI definition for each API.
		/// 
		/// ListAPIs list.json
		/// </summary>
		/// <returns>OK</returns>
		public async Task<APIs> ListAPIsAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "list.json";
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
				return JsonSerializer.Deserialize<APIs>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get basic metrics
		/// Some basic metrics for the entire directory.
		/// Just stunning numbers to put on a front page and are intended purely for WoW effect :)
		/// 
		/// GetMetrics metrics.json
		/// </summary>
		/// <returns>OK</returns>
		public async Task<Metrics> GetMetricsAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "metrics.json";
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
				return JsonSerializer.Deserialize<Metrics>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List all providers
		/// List all the providers in the directory
		/// 
		/// GetProviders providers.json
		/// </summary>
		/// <returns>OK</returns>
		public async Task<GetProvidersReturn> GetProvidersAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "providers.json";
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
				return JsonSerializer.Deserialize<GetProvidersReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieve one version of a particular API
		/// Returns the API entry for one specific version of an API where there is no serviceName.
		/// GetAPI specs/{provider}/{api}.json
		/// </summary>
		/// <param name="provider">Min length: 1
		/// Max length: 255
		// </param>
		/// <param name="api">Min length: 1
		/// Max length: 255
		// </param>
		/// <returns>OK</returns>
		public async Task<API> GetAPIAsync(string provider, string api, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "specs/"+ (provider==null? "" : System.Uri.EscapeDataString(provider))+"/"+ (api==null? "" : System.Uri.EscapeDataString(api))+".json";
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
				return JsonSerializer.Deserialize<API>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieve one version of a particular API with a serviceName.
		/// Returns the API entry for one specific version of an API where there is a serviceName.
		/// GetServiceAPI specs/{provider}/{service}/{api}.json
		/// </summary>
		/// <param name="provider">Min length: 1
		/// Max length: 255
		// </param>
		/// <param name="service">Min length: 1
		/// Max length: 255
		// </param>
		/// <param name="api">Min length: 1
		/// Max length: 255
		// </param>
		/// <returns>OK</returns>
		public async Task<API> GetServiceAPIAsync(string provider, string service, string api, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "specs/"+ (provider==null? "" : System.Uri.EscapeDataString(provider))+"/"+ (service==null? "" : System.Uri.EscapeDataString(service))+"/"+ (api==null? "" : System.Uri.EscapeDataString(api))+".json";
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
				return JsonSerializer.Deserialize<API>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List all APIs for a particular provider
		/// List all APIs in the directory for a particular providerName
		/// Returns links to the individual API entry for each API.
		/// 
		/// GetProvider {provider}.json
		/// </summary>
		/// <param name="provider">Min length: 1
		/// Max length: 255
		// </param>
		/// <returns>OK</returns>
		public async Task<APIs> GetProviderAsync(string provider, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+ (provider==null? "" : System.Uri.EscapeDataString(provider))+".json";
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
				return JsonSerializer.Deserialize<APIs>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// List all serviceNames for a particular provider
		/// List all serviceNames in the directory for a particular providerName
		/// 
		/// GetServices {provider}/services.json
		/// </summary>
		/// <param name="provider">Min length: 1
		/// Max length: 255
		// </param>
		/// <returns>OK</returns>
		public async Task<GetServicesReturn> GetServicesAsync(string provider, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = ""+ (provider==null? "" : System.Uri.EscapeDataString(provider))+"/services.json";
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
				return JsonSerializer.Deserialize<GetServicesReturn>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
	
	public class GetProvidersReturn
	{
		
		/// <summary>
		/// Minimum items: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="data")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string[] Data { get; set; }
	}
	
	public class GetServicesReturn
	{
		
		/// <summary>
		/// Minimum items: 1
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="data")]
		[System.ComponentModel.DataAnnotations.MinLength(1)]
		public string[] Data { get; set; }
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