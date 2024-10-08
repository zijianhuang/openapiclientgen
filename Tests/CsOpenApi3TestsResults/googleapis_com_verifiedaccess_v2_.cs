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
	/// Result message for VerifiedAccess.GenerateChallenge.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Challenge
	{
		
		/// <summary>
		/// Generated challenge, the bytes representation of SignedData.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="challenge")]
		public string Challenge1 { get; set; }
	}
	
	/// <summary>
	/// Properties of the CrowdStrike agent installed on a device.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CrowdStrikeAgent
	{
		
		/// <summary>
		/// The Agent ID of the Crowdstrike agent.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="agentId")]
		public string AgentId { get; set; }
		
		/// <summary>
		/// The Customer ID to which the agent belongs to.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="customerId")]
		public string CustomerId { get; set; }
	}
	
	/// <summary>
	/// The device signals as reported by Chrome. Unless otherwise specified, signals are available on all platforms.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DeviceSignals
	{
		
		/// <summary>
		/// Value of the AllowScreenLock policy on the device. See https://chromeenterprise.google/policies/?policy=AllowScreenLock for more details. Available on ChromeOS only.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="allowScreenLock")]
		public System.Nullable<System.Boolean> AllowScreenLock { get; set; }
		
		/// <summary>
		/// Current version of the Chrome browser which generated this set of signals. Example value: "107.0.5286.0".
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="browserVersion")]
		public string BrowserVersion { get; set; }
		
		/// <summary>
		/// Whether Chrome's built-in DNS client is used. The OS DNS client is otherwise used. This value may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#BuiltInDnsClientEnabled.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="builtInDnsClientEnabled")]
		public System.Nullable<System.Boolean> BuiltInDnsClientEnabled { get; set; }
		
		/// <summary>
		/// Whether access to the Chrome Remote Desktop application is blocked via a policy.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="chromeRemoteDesktopAppBlocked")]
		public System.Nullable<System.Boolean> ChromeRemoteDesktopAppBlocked { get; set; }
		
		/// <summary>
		/// Properties of the CrowdStrike agent installed on a device.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="crowdStrikeAgent")]
		public CrowdStrikeAgent CrowdStrikeAgent { get; set; }
		
		/// <summary>
		/// Affiliation IDs of the organizations that are affiliated with the organization that is currently managing the device. When the sets of device and profile affiliation IDs overlap, it means that the organizations managing the device and user are affiliated. To learn more about user affiliation, visit https://support.google.com/chrome/a/answer/12801245?ref_topic=9027936.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deviceAffiliationIds")]
		public string[] DeviceAffiliationIds { get; set; }
		
		/// <summary>
		/// Enrollment domain of the customer which is currently managing the device.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deviceEnrollmentDomain")]
		public string DeviceEnrollmentDomain { get; set; }
		
		/// <summary>
		/// The name of the device's manufacturer.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deviceManufacturer")]
		public string DeviceManufacturer { get; set; }
		
		/// <summary>
		/// The name of the device's model.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deviceModel")]
		public string DeviceModel { get; set; }
		
		/// <summary>
		/// The encryption state of the disk. On ChromeOS, the main disk is always ENCRYPTED.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="diskEncryption")]
		public System.Nullable<DeviceSignalsDiskEncryption> DiskEncryption { get; set; }
		
		/// <summary>
		/// The display name of the device, as defined by the user.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="displayName")]
		public string DisplayName { get; set; }
		
		/// <summary>
		/// Hostname of the device.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="hostname")]
		public string Hostname { get; set; }
		
		/// <summary>
		/// International Mobile Equipment Identity (IMEI) of the device. Available on ChromeOS only.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="imei")]
		public string[] Imei { get; set; }
		
		/// <summary>
		/// MAC addresses of the device.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="macAddresses")]
		public string[] MacAddresses { get; set; }
		
		/// <summary>
		/// Mobile Equipment Identifier (MEID) of the device. Available on ChromeOS only.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="meid")]
		public string[] Meid { get; set; }
		
		/// <summary>
		/// The type of the Operating System currently running on the device.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="operatingSystem")]
		public System.Nullable<DeviceSignalsOperatingSystem> OperatingSystem { get; set; }
		
		/// <summary>
		/// The state of the OS level firewall. On ChromeOS, the value will always be ENABLED on regular devices and UNKNOWN on devices in developer mode.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="osFirewall")]
		public System.Nullable<DeviceSignalsOsFirewall> OsFirewall { get; set; }
		
		/// <summary>
		/// The current version of the Operating System. On Windows and linux, the value will also include the security patch information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="osVersion")]
		public string OsVersion { get; set; }
		
		/// <summary>
		/// Whether the Password Protection Warning feature is enabled or not. Password protection alerts users when they reuse their protected password on potentially suspicious sites. This setting is controlled by an enterprise policy: https://chromeenterprise.google/policies/#PasswordProtectionWarningTrigger. Note that the policy unset does not have the same effects as having the policy explicitly set to `PASSWORD_PROTECTION_OFF`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="passwordProtectionWarningTrigger")]
		public System.Nullable<DeviceSignalsPasswordProtectionWarningTrigger> PasswordProtectionWarningTrigger { get; set; }
		
		/// <summary>
		/// Affiliation IDs of the organizations that are affiliated with the organization that is currently managing the Chrome Profile’s user or ChromeOS user.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="profileAffiliationIds")]
		public string[] ProfileAffiliationIds { get; set; }
		
		/// <summary>
		/// Whether Enterprise-grade (i.e. custom) unsafe URL scanning is enabled or not. This setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#EnterpriseRealTimeUrlCheckMode
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="realtimeUrlCheckMode")]
		public System.Nullable<DeviceSignalsRealtimeUrlCheckMode> RealtimeUrlCheckMode { get; set; }
		
		/// <summary>
		/// Safe Browsing Protection Level. That setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#SafeBrowsingProtectionLevel.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="safeBrowsingProtectionLevel")]
		public System.Nullable<DeviceSignalsSafeBrowsingProtectionLevel> SafeBrowsingProtectionLevel { get; set; }
		
		/// <summary>
		/// The state of the Screen Lock password protection. On ChromeOS, this value will always be ENABLED as there is not way to disable requiring a password or pin when unlocking the device.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="screenLockSecured")]
		public System.Nullable<DeviceSignalsScreenLockSecured> ScreenLockSecured { get; set; }
		
		/// <summary>
		/// Whether the device's startup software has its Secure Boot feature enabled. Available on Windows only.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="secureBootMode")]
		public System.Nullable<DeviceSignalsSecureBootMode> SecureBootMode { get; set; }
		
		/// <summary>
		/// The serial number of the device. On Windows, this represents the BIOS's serial number. Not available on most Linux distributions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="serialNumber")]
		public string SerialNumber { get; set; }
		
		/// <summary>
		/// Whether the Site Isolation (a.k.a Site Per Process) setting is enabled. That setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#SitePerProcess
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="siteIsolationEnabled")]
		public System.Nullable<System.Boolean> SiteIsolationEnabled { get; set; }
		
		/// <summary>
		/// List of the addesses of all OS level DNS servers configured in the device's network settings.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="systemDnsServers")]
		public string[] SystemDnsServers { get; set; }
		
		/// <summary>
		/// Whether Chrome is blocking third-party software injection or not. This setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/?policy=ThirdPartyBlockingEnabled. Available on Windows only.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="thirdPartyBlockingEnabled")]
		public System.Nullable<System.Boolean> ThirdPartyBlockingEnabled { get; set; }
		
		/// <summary>
		/// The trigger which generated this set of signals.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="trigger")]
		public System.Nullable<DeviceSignalsTrigger> Trigger { get; set; }
		
		/// <summary>
		/// Windows domain that the current machine has joined. Available on Windows only.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="windowsMachineDomain")]
		public string WindowsMachineDomain { get; set; }
		
		/// <summary>
		/// Windows domain for the current OS user. Available on Windows only.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="windowsUserDomain")]
		public string WindowsUserDomain { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum DeviceSignalsDiskEncryption
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DISK_ENCRYPTION_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DISK_ENCRYPTION_UNKNOWN = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DISK_ENCRYPTION_DISABLED = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DISK_ENCRYPTION_ENCRYPTED = 3,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum DeviceSignalsOperatingSystem
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OPERATING_SYSTEM_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CHROME_OS = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CHROMIUM_OS = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WINDOWS = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MAC_OS_X = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LINUX = 5,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum DeviceSignalsOsFirewall
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OS_FIREWALL_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OS_FIREWALL_UNKNOWN = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OS_FIREWALL_DISABLED = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		OS_FIREWALL_ENABLED = 3,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum DeviceSignalsPasswordProtectionWarningTrigger
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PASSWORD_PROTECTION_WARNING_TRIGGER_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		POLICY_UNSET = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PASSWORD_PROTECTION_OFF = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PASSWORD_REUSE = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PHISHING_REUSE = 4,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum DeviceSignalsRealtimeUrlCheckMode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		REALTIME_URL_CHECK_MODE_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		REALTIME_URL_CHECK_MODE_DISABLED = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		REALTIME_URL_CHECK_MODE_ENABLED_MAIN_FRAME = 2,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum DeviceSignalsSafeBrowsingProtectionLevel
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SAFE_BROWSING_PROTECTION_LEVEL_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		INACTIVE = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		STANDARD = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ENHANCED = 3,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum DeviceSignalsScreenLockSecured
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SCREEN_LOCK_SECURED_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SCREEN_LOCK_SECURED_UNKNOWN = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SCREEN_LOCK_SECURED_DISABLED = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SCREEN_LOCK_SECURED_ENABLED = 3,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum DeviceSignalsSecureBootMode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SECURE_BOOT_MODE_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SECURE_BOOT_MODE_UNKNOWN = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SECURE_BOOT_MODE_DISABLED = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		SECURE_BOOT_MODE_ENABLED = 3,
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum DeviceSignalsTrigger
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TRIGGER_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TRIGGER_BROWSER_NAVIGATION = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		TRIGGER_LOGIN_SCREEN = 2,
	}
	
	/// <summary>
	/// A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Empty
	{
	}
	
	/// <summary>
	/// Signed ChallengeResponse.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class VerifyChallengeResponseRequest
	{
		
		/// <summary>
		/// Required. The generated response to the challenge, the bytes representation of SignedData.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="challengeResponse")]
		public string ChallengeResponse { get; set; }
		
		/// <summary>
		/// Optional. Service can optionally provide identity information about the device or user associated with the key. For an EMK, this value is the enrolled domain. For an EUK, this value is the user's email address. If present, this value will be checked against contents of the response, and verification will fail if there is no match.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="expectedIdentity")]
		public string ExpectedIdentity { get; set; }
	}
	
	/// <summary>
	/// Result message for VerifiedAccess.VerifyChallengeResponse.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class VerifyChallengeResponseResult
	{
		
		/// <summary>
		/// Attested device ID (ADID).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="attestedDeviceId")]
		public string AttestedDeviceId { get; set; }
		
		/// <summary>
		/// Unique customer id that this device belongs to, as defined by the Google Admin SDK at https://developers.google.com/admin-sdk/directory/v1/guides/manage-customers
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="customerId")]
		public string CustomerId { get; set; }
		
		/// <summary>
		/// Device enrollment id for ChromeOS devices.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deviceEnrollmentId")]
		public string DeviceEnrollmentId { get; set; }
		
		/// <summary>
		/// Device permanent id is returned in this field (for the machine response only).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="devicePermanentId")]
		public string DevicePermanentId { get; set; }
		
		/// <summary>
		/// Deprecated. Device signal in json string representation. Prefer using `device_signals` instead.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deviceSignal")]
		public string DeviceSignal { get; set; }
		
		/// <summary>
		/// The device signals as reported by Chrome. Unless otherwise specified, signals are available on all platforms.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deviceSignals")]
		public DeviceSignals DeviceSignals { get; set; }
		
		/// <summary>
		/// Device attested key trust level.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="keyTrustLevel")]
		public System.Nullable<VerifyChallengeResponseResultKeyTrustLevel> KeyTrustLevel { get; set; }
		
		/// <summary>
		/// Unique customer id that this profile belongs to, as defined by the Google Admin SDK at https://developers.google.com/admin-sdk/directory/v1/guides/manage-customers
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="profileCustomerId")]
		public string ProfileCustomerId { get; set; }
		
		/// <summary>
		/// Profile attested key trust level.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="profileKeyTrustLevel")]
		public VerifyChallengeResponseResultKeyTrustLevel ProfileKeyTrustLevel { get; set; }
		
		/// <summary>
		/// Certificate Signing Request (in the SPKAC format, base64 encoded) is returned in this field. This field will be set only if device has included CSR in its challenge response. (the option to include CSR is now available for both user and machine responses)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="signedPublicKeyAndChallenge")]
		public string SignedPublicKeyAndChallenge { get; set; }
		
		/// <summary>
		/// Virtual device id of the device. The definition of virtual device id is platform-specific.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="virtualDeviceId")]
		public string VirtualDeviceId { get; set; }
		
		/// <summary>
		/// The ID of a profile on the device.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="virtualProfileId")]
		public string VirtualProfileId { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum VerifyChallengeResponseResultKeyTrustLevel
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		KEY_TRUST_LEVEL_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CHROME_OS_VERIFIED_MODE = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CHROME_OS_DEVELOPER_MODE = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CHROME_BROWSER_HW_KEY = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CHROME_BROWSER_OS_KEY = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CHROME_BROWSER_NO_KEY = 5,
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
		/// Generates a new challenge.
		/// Verifiedaccess_challenge_generate v2/challenge:generate
		/// </summary>
		/// <returns>Successful response</returns>
		public async Task<Challenge> Verifiedaccess_challenge_generateAsync(Empty requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/challenge:generate";
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
				return JsonSerializer.Deserialize<Challenge>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Verifies the challenge response.
		/// Verifiedaccess_challenge_verify v2/challenge:verify
		/// </summary>
		/// <returns>Successful response</returns>
		public async Task<VerifyChallengeResponseResult> Verifiedaccess_challenge_verifyAsync(VerifyChallengeResponseRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/challenge:verify";
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
				return JsonSerializer.Deserialize<VerifyChallengeResponseResult>(streamContent, jsonSerializerSettings);
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
