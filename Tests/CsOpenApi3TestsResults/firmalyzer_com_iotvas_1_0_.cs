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
	public class ConfigIssue
	{
		
		[System.Runtime.Serialization.DataMember(Name="config_file")]
		public string Config_file { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="issues")]
		public string[] Issues { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="service_name")]
		public string Service_name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="suggestions")]
		public string[] Suggestions { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CryptoKey
	{
		
		[System.Runtime.Serialization.DataMember(Name="algorithm")]
		public string Algorithm { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="bits")]
		public System.Nullable<System.Int32> Bits { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="file_hash")]
		public string File_hash { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="file_name")]
		public string File_name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="pem_type")]
		public string Pem_type { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DefaultAccount
	{
		
		[System.Runtime.Serialization.DataMember(Name="gid")]
		public System.Nullable<System.Int32> Gid { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="hash_algorithm")]
		public string Hash_algorithm { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="home_dir")]
		public string Home_dir { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="pwd_hash")]
		public string Pwd_hash { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="shell")]
		public string Shell { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="uid")]
		public System.Nullable<System.Int32> Uid { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DeviceFeatures
	{
		
		[System.ComponentModel.DefaultValue("")]
		[System.Runtime.Serialization.DataMember(Name="ftp_banner")]
		public string Ftp_banner { get; set; } = "";
		
		[System.ComponentModel.DefaultValue("")]
		[System.Runtime.Serialization.DataMember(Name="hostname")]
		public string Hostname { get; set; } = "";
		
		[System.ComponentModel.DefaultValue("")]
		[System.Runtime.Serialization.DataMember(Name="http_response")]
		public string Http_response { get; set; } = "";
		
		[System.ComponentModel.DefaultValue("")]
		[System.Runtime.Serialization.DataMember(Name="https_response")]
		public string Https_response { get; set; } = "";
		
		[System.ComponentModel.DefaultValue("")]
		[System.Runtime.Serialization.DataMember(Name="nic_mac")]
		public string Nic_mac { get; set; } = "";
		
		[System.ComponentModel.DefaultValue("")]
		[System.Runtime.Serialization.DataMember(Name="snmp_sysdescr")]
		public string Snmp_sysdescr { get; set; } = "";
		
		[System.ComponentModel.DefaultValue("")]
		[System.Runtime.Serialization.DataMember(Name="snmp_sysoid")]
		public string Snmp_sysoid { get; set; } = "";
		
		[System.ComponentModel.DefaultValue("")]
		[System.Runtime.Serialization.DataMember(Name="telnet_banner")]
		public string Telnet_banner { get; set; } = "";
		
		[System.ComponentModel.DefaultValue("")]
		[System.Runtime.Serialization.DataMember(Name="upnp_response")]
		public string Upnp_response { get; set; } = "";
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DeviceInfo
	{
		
		[System.Runtime.Serialization.DataMember(Name="cve_list")]
		public Vulnerability[] Cve_list { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="device_type")]
		public string Device_type { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="firmware_info")]
		public FirmwareInfo Firmware_info { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="firmware_version")]
		public string Firmware_version { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="is_discontinued")]
		public System.Nullable<System.Boolean> Is_discontinued { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="latest_firmware_info")]
		public FirmwareInfo Latest_firmware_info { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="manufacturer")]
		public string Manufacturer { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="model_name")]
		public string Model_name { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Vulnerability
	{
		
		[System.Runtime.Serialization.DataMember(Name="cve_id")]
		public string Cve_id { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="cvss")]
		public System.Nullable<System.Double> Cvss { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class FirmwareInfo
	{
		
		[System.Runtime.Serialization.DataMember(Name="download_url")]
		public string Download_url { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="release_date")]
		public string Release_date { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sha2")]
		public string Sha2 { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="version")]
		public string Version { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ExpiredCert
	{
		
		[System.Runtime.Serialization.DataMember(Name="file_hash")]
		public string File_hash { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="file_name")]
		public string File_name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="public_key")]
		public PublicKey Public_key { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="subject_name")]
		public string Subject_name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="thumb_print")]
		public string Thumb_print { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="valid_from")]
		public string Valid_from { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="valid_to")]
		public string Valid_to { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class PublicKey
	{
		
		[System.Runtime.Serialization.DataMember(Name="algorithm")]
		public string Algorithm { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="bits")]
		public System.Nullable<System.Int32> Bits { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class FirmwareRisk
	{
		
		[System.Runtime.Serialization.DataMember(Name="risk_summary")]
		public RiskSummary Risk_summary { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="vulnerable_components")]
		public VulnerableComponent[] Vulnerable_components { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class RiskSummary
	{
		
		[System.Runtime.Serialization.DataMember(Name="client_tools_risk")]
		public string Client_tools_risk { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="crypto_risk")]
		public string Crypto_risk { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="kernel_risk")]
		public string Kernel_risk { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="net_services_risk")]
		public string Net_services_risk { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class VulnerableComponent
	{
		
		[System.Runtime.Serialization.DataMember(Name="category")]
		public string Category { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="cvss_max")]
		public System.Nullable<System.Double> Cvss_max { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="version")]
		public string Version { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="vulnerabilities")]
		public Vulnerability[] Vulnerabilities { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class HTTPValidationError
	{
		
		[System.Runtime.Serialization.DataMember(Name="detail")]
		public ValidationError[] Detail { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ValidationError
	{
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="loc")]
		public string[] Loc { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="msg")]
		public string Msg { get; set; }
		
		/// <summary>
		/// Required
		/// </summary>
		[System.ComponentModel.DataAnnotations.Required()]
		[System.Runtime.Serialization.DataMember(Name="type")]
		public string Type { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class WeakCert
	{
		
		[System.Runtime.Serialization.DataMember(Name="file_hash")]
		public string File_hash { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="file_name")]
		public string File_name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="sign_algorithm")]
		public string Sign_algorithm { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="subject_name")]
		public string Subject_name { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="thumb_print")]
		public string Thumb_print { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="valid_from")]
		public string Valid_from { get; set; }
		
		[System.Runtime.Serialization.DataMember(Name="valid_to")]
		public string Valid_to { get; set; }
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
		/// Detect iot device by service banners and mac address
		/// Use device service banners and mac address captured by your network port scanner, vulnerability assessment or asset discovery tools to detect device maker, model and firmware information
		/// Detect_device device/detect
		/// </summary>
		/// <returns>Successful Response</returns>
		public async Task<DeviceInfo> Detect_deviceAsync(DeviceFeatures requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "device/detect";
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
				return JsonSerializer.Deserialize<DeviceInfo>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get default accounts and password hashes of a firmware
		/// Get_accounts firmware/{firmware_hash}/accounts
		/// </summary>
		/// <param name="firmware_hash">SHA2 hash of device firmware</param>
		/// <returns>Successful Response</returns>
		public async Task<DefaultAccount[]> Get_accountsAsync(string firmware_hash, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "firmware/"+ (firmware_hash==null? "" : System.Uri.EscapeDataString(firmware_hash))+"/accounts";
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
				return JsonSerializer.Deserialize<DefaultAccount[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get default OS configuration issues of a device firmware
		/// Get_config_issues firmware/{firmware_hash}/config-issues
		/// </summary>
		/// <param name="firmware_hash">SHA2 hash of device firmware</param>
		/// <returns>Successful Response</returns>
		public async Task<ConfigIssue[]> Get_config_issuesAsync(string firmware_hash, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "firmware/"+ (firmware_hash==null? "" : System.Uri.EscapeDataString(firmware_hash))+"/config-issues";
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
				return JsonSerializer.Deserialize<ConfigIssue[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get expired digital certificates embedded in a device firmware
		/// Get_expired_certs firmware/{firmware_hash}/expired-certs
		/// </summary>
		/// <param name="firmware_hash">SHA2 hash of device firmware</param>
		/// <returns>Successful Response</returns>
		public async Task<ExpiredCert[]> Get_expired_certsAsync(string firmware_hash, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "firmware/"+ (firmware_hash==null? "" : System.Uri.EscapeDataString(firmware_hash))+"/expired-certs";
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
				return JsonSerializer.Deserialize<ExpiredCert[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get private crypto keys embedded in a device firmware
		/// Get_private_keys firmware/{firmware_hash}/private-keys
		/// </summary>
		/// <param name="firmware_hash">SHA2 hash of device firmware</param>
		/// <returns>Successful Response</returns>
		public async Task<CryptoKey[]> Get_private_keysAsync(string firmware_hash, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "firmware/"+ (firmware_hash==null? "" : System.Uri.EscapeDataString(firmware_hash))+"/private-keys";
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
				return JsonSerializer.Deserialize<CryptoKey[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get iot device firmware risk analysis
		/// Get_risk firmware/{firmware_hash}/risk
		/// </summary>
		/// <param name="firmware_hash">SHA2 hash of device firmware</param>
		/// <returns>Successful Response</returns>
		public async Task<FirmwareRisk> Get_riskAsync(string firmware_hash, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "firmware/"+ (firmware_hash==null? "" : System.Uri.EscapeDataString(firmware_hash))+"/risk";
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
				return JsonSerializer.Deserialize<FirmwareRisk>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
		/// Get_weak_certs firmware/{firmware_hash}/weak-certs
		/// </summary>
		/// <param name="firmware_hash">SHA2 hash of device firmware</param>
		/// <returns>Successful Response</returns>
		public async Task<WeakCert[]> Get_weak_certsAsync(string firmware_hash, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "firmware/"+ (firmware_hash==null? "" : System.Uri.EscapeDataString(firmware_hash))+"/weak-certs";
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
				return JsonSerializer.Deserialize<WeakCert[]>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get weak crypto keys with short length
		/// Get_weak_keys firmware/{firmware_hash}/weak-keys
		/// </summary>
		/// <param name="firmware_hash">SHA2 hash of device firmware</param>
		/// <returns>Successful Response</returns>
		public async Task<CryptoKey[]> Get_weak_keysAsync(string firmware_hash, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "firmware/"+ (firmware_hash==null? "" : System.Uri.EscapeDataString(firmware_hash))+"/weak-keys";
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
				return JsonSerializer.Deserialize<CryptoKey[]>(streamContent, jsonSerializerSettings);
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