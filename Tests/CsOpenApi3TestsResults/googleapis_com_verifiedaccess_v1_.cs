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
	/// Result message for VerifiedAccess.CreateChallenge.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Challenge
	{
		
		/// <summary>
		/// The wrapper message of any data and its signature.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="alternativeChallenge")]
		public SignedData AlternativeChallenge { get; set; }
		
		/// <summary>
		/// The wrapper message of any data and its signature.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="challenge")]
		public SignedData Challenge1 { get; set; }
	}
	
	/// <summary>
	/// The wrapper message of any data and its signature.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class SignedData
	{
		
		/// <summary>
		/// The data to be signed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="data")]
		public string Data { get; set; }
		
		/// <summary>
		/// The signature of the data field.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="signature")]
		public string Signature { get; set; }
	}
	
	/// <summary>
	/// A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Empty
	{
	}
	
	/// <summary>
	/// signed ChallengeResponse
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class VerifyChallengeResponseRequest
	{
		
		/// <summary>
		/// The wrapper message of any data and its signature.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="challengeResponse")]
		public SignedData ChallengeResponse { get; set; }
		
		/// <summary>
		/// Service can optionally provide identity information about the device or user associated with the key. For an EMK, this value is the enrolled domain. For an EUK, this value is the user's email address. If present, this value will be checked against contents of the response, and verification will fail if there is no match.
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
		/// Attested device id (ADID) of the device, read from the verified data.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="attestedDeviceId")]
		public string AttestedDeviceId { get; set; }
		
		/// <summary>
		/// Device enrollment id is returned in this field (for the machine response only).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deviceEnrollmentId")]
		public string DeviceEnrollmentId { get; set; }
		
		/// <summary>
		/// Device permanent id is returned in this field (for the machine response only).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="devicePermanentId")]
		public string DevicePermanentId { get; set; }
		
		/// <summary>
		/// Certificate Signing Request (in the SPKAC format, base64 encoded) is returned in this field. This field will be set only if device has included CSR in its challenge response. (the option to include CSR is now available for both user and machine responses)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="signedPublicKeyAndChallenge")]
		public string SignedPublicKeyAndChallenge { get; set; }
		
		/// <summary>
		/// For EMCert check, device permanent id is returned here. For EUCert check, signed_public_key_and_challenge [base64 encoded] is returned if present, otherwise empty string is returned. This field is deprecated, please use device_permanent_id or signed_public_key_and_challenge fields.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="verificationOutput")]
		public string VerificationOutput { get; set; }
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
		/// CreateChallenge API
		/// Verifiedaccess_challenge_create v1/challenge
		/// </summary>
		/// <returns>Successful response</returns>
		public async Task<Challenge> Verifiedaccess_challenge_createAsync(Empty requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/challenge";
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
		/// VerifyChallengeResponse API
		/// Verifiedaccess_challenge_verify v1/challenge:verify
		/// </summary>
		/// <returns>Successful response</returns>
		public async Task<VerifyChallengeResponseResult> Verifiedaccess_challenge_verifyAsync(VerifyChallengeResponseRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/challenge:verify";
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