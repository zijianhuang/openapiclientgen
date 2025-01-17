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
	public class ApiResponse
	{
		
		[System.Runtime.Serialization.DataMember(Name="page")]
		public string Page { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="status")]
		public string Status { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class FindingsElement
	{
		
		[System.Runtime.Serialization.DataMember(Name="confidence")]
		public string Confidence { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="issue_id")]
		public System.Nullable<System.Int32> Issue_id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta_links")]
		public string[] Meta_links { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta_risk")]
		public FindingsElementMeta_risk Meta_risk { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta_tags")]
		public string[] Meta_tags { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta_vuln_refs")]
		public FindingsElementMeta_vuln_refs Meta_vuln_refs { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="raw")]
		public string Raw { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="severity")]
		public System.Nullable<FindingsElementSeverity> Severity { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="solution")]
		public string Solution { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="target_addrs")]
		public string[] Target_addrs { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="target_proto")]
		public string[] Target_proto { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="timestamp")]
		public System.Nullable<System.DateTimeOffset> Timestamp { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	public class FindingsElementMeta_risk
	{
		
		[System.Runtime.Serialization.DataMember(Name="cvss_base_score")]
		public string[] Cvss_base_score { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="cvss_vector")]
		public string[] Cvss_vector { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="exploit_available")]
		public string[] Exploit_available { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="exploitability_ease")]
		public string[] Exploitability_ease { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="patch_publication_date")]
		public string[] Patch_publication_date { get; set; }
	}
	
	public class FindingsElementMeta_vuln_refs
	{
		
		[System.Runtime.Serialization.DataMember(Name="bid")]
		public string[] Bid { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="cpe")]
		public string[] Cpe { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="cve")]
		public string[] Cve { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="cwe")]
		public string[] Cwe { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum FindingsElementSeverity
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		info = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		low = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		medium = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		high = 3,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ScanDefinition
	{
		
		[System.Runtime.Serialization.DataMember(Name="assets")]
		public ScanDefinitionAssets[] ScanDefinitionAssets { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="options")]
		public string Options { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="scan_id")]
		public System.Nullable<System.Int32> Scan_id { get; set; }
	}
	
	public class ScanDefinitionAssets
	{
		
		[System.Runtime.Serialization.DataMember(Name="criticity")]
		public System.Nullable<ScanDefinitionAssetsCriticity> Criticity { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="datatype")]
		public System.Nullable<ScanDefinitionAssetsDatatype> Datatype { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="id")]
		public string Id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="value")]
		public string Value { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum ScanDefinitionAssetsCriticity
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		low = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		medium = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		high = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum ScanDefinitionAssetsDatatype
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ip = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="ip-range")]
		ipMinusrange = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute(Value="ip-subnet")]
		ipMinussubnet = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		fqdn = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		domain = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		url = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		keyword = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		person = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		organisation = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		path = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		application = 10,
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
		/// Index page
		/// Return index page
		/// GetDefaultPage 
		/// </summary>
		/// <returns>successful operation</returns>
		public async Task<ApiResponse> GetDefaultPageAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "";
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
				return JsonSerializer.Deserialize<ApiResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Clean all scans
		/// Clean all current scans.
		/// CleanScansPage clean
		/// </summary>
		/// <returns>successful operation</returns>
		public async Task<ApiResponse> CleanScansPageAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "clean";
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
				return JsonSerializer.Deserialize<ApiResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Clean scan
		/// Clean scan identified by id.
		/// CleanScanPage clean/{scanId}
		/// </summary>
		/// <param name="scanId">Numeric ID of the scan to clean</param>
		/// <returns>successful operation</returns>
		public async Task<ApiResponse> CleanScanPageAsync(int scanId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "clean/"+scanId;
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
				return JsonSerializer.Deserialize<ApiResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get findings on finished scans
		/// Get findings on finished scans.
		/// GetFindingPage getfindings/{scanId}
		/// </summary>
		/// <param name="scanId">Numeric ID of the scan to get findings</param>
		/// <returns>successful operation</returns>
		public async Task<GetFindingPageReturn[]> GetFindingPageAsync(int scanId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "getfindings/"+scanId;
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
				return JsonSerializer.Deserialize<GetFindingPageReturn[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Engine info page
		/// Return information on engine.
		/// GetInfoPage info
		/// </summary>
		/// <returns>successful operation</returns>
		public async Task<ApiResponse> GetInfoPageAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "info";
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
				return JsonSerializer.Deserialize<ApiResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Liveness page
		/// Return liveness page
		/// GetLivenessPage liveness
		/// </summary>
		/// <returns>successful operation</returns>
		public async Task GetLivenessPageAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "liveness";
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
		/// Readiness page
		/// Return liveness page
		/// GetReadinessPage readiness
		/// </summary>
		/// <returns>successful operation</returns>
		public async Task GetReadinessPageAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "readiness";
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
		/// Configuration reloading page
		/// Reload the configuration file.
		/// ReloadConfigurationPage reloadconfig
		/// </summary>
		/// <returns>successful operation</returns>
		public async Task<ApiResponse> ReloadConfigurationPageAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "reloadconfig";
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
				return JsonSerializer.Deserialize<ApiResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Start a new scan
		/// Start a new scan.
		/// StartScanPage startscan
		/// </summary>
		/// <returns>successful operation</returns>
		public async Task<ApiResponse> StartScanPageAsync(ScanDefinition requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "startscan";
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
				return JsonSerializer.Deserialize<ApiResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Status on all scans
		/// Status all current scans.
		/// StatusScansPage status
		/// </summary>
		/// <returns>successful operation</returns>
		public async Task<ApiResponse> StatusScansPageAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "status";
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
				return JsonSerializer.Deserialize<ApiResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Status of a scan
		/// Status of a scan identified by id.
		/// StatusScanPage status/{scanId}
		/// </summary>
		/// <param name="scanId">Numeric ID of the scan to get status</param>
		/// <returns>successful operation</returns>
		public async Task<ApiResponse> StatusScanPageAsync(int scanId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "status/"+scanId;
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
				return JsonSerializer.Deserialize<ApiResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Stop a scan
		/// Stop a scan identified by id.
		/// StopScanPage stop/{scanId}
		/// </summary>
		/// <param name="scanId">Numeric ID of the scan to stop</param>
		/// <returns>successful operation</returns>
		public async Task<ApiResponse> StopScanPageAsync(int scanId, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "stop/"+scanId;
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
				return JsonSerializer.Deserialize<ApiResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Stop all scans
		/// Stop all current scans.
		/// StopScansPage stopscans
		/// </summary>
		/// <returns>successful operation</returns>
		public async Task<ApiResponse> StopScansPageAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "stopscans";
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
				return JsonSerializer.Deserialize<ApiResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Test page
		/// Return test page
		/// GetTestPage test
		/// </summary>
		/// <returns>successful operation</returns>
		public async Task GetTestPageAsync(Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "test";
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
	}
	
	public class GetFindingPageReturn
	{
		
		[System.Runtime.Serialization.DataMember(Name="confidence")]
		public string Confidence { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="description")]
		public string Description { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="issue_id")]
		public System.Nullable<System.Int32> Issue_id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta_links")]
		public string[] Meta_links { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta_risk")]
		public GetFindingPageReturnMeta_risk Meta_risk { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta_tags")]
		public string[] Meta_tags { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="meta_vuln_refs")]
		public GetFindingPageReturnMeta_vuln_refs Meta_vuln_refs { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="raw")]
		public string Raw { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="severity")]
		public FindingsElementSeverity Severity { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="solution")]
		public string Solution { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="target_addrs")]
		public string[] Target_addrs { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="target_proto")]
		public string[] Target_proto { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="timestamp")]
		public System.Nullable<System.DateTimeOffset> Timestamp { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="title")]
		public string Title { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	public class GetFindingPageReturnMeta_risk
	{
		
		[System.Runtime.Serialization.DataMember(Name="cvss_base_score")]
		public string[] Cvss_base_score { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="cvss_vector")]
		public string[] Cvss_vector { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="exploit_available")]
		public string[] Exploit_available { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="exploitability_ease")]
		public string[] Exploitability_ease { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="patch_publication_date")]
		public string[] Patch_publication_date { get; set; }
	}
	
	public class GetFindingPageReturnMeta_vuln_refs
	{
		
		[System.Runtime.Serialization.DataMember(Name="bid")]
		public string[] Bid { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="cpe")]
		public string[] Cpe { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="cve")]
		public string[] Cve { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="cwe")]
		public string[] Cwe { get; set; }
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
