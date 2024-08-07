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
	/// Response to deleting a reader of a publication.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class DeleteReaderResponse
	{
	}
	
	/// <summary>
	/// A single entitlement for a publication reader
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Entitlement
	{
		
		/// <summary>
		/// The detail field can carry a description of the SKU that corresponds to what the user has been granted access to. This description, which is opaque to Google, can be displayed in the Google user subscription console for users who linked the subscription to a Google Account. Max 80 character limit.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="detail")]
		public string Detail { get; set; }
		
		/// <summary>
		/// Required. Expiration time of the entitlement. Entitlements that have expired over 30 days will be purged. Required. LINT.IfChange(expire_time) The max expire_time is 398 days from now(). LINT.ThenChange(//depot/google3/java/com/google/subscribewithgoogle/accountlinking/subscriptionlink/service/config/protoconf.pi:max_expiry_age)
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="expireTime")]
		public string ExpireTime { get; set; }
		
		/// <summary>
		/// Required. The publication's product ID that the user has access to. This is the same product ID as can be found in Schema.org markup (http://schema.org/productID). E.g. "dailybugle.com:basic"
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="productId")]
		public string ProductId { get; set; }
		
		/// <summary>
		/// A source-specific subscription token. This is an opaque string that the publisher provides to Google. This token is opaque and has no meaning to Google.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="subscriptionToken")]
		public string SubscriptionToken { get; set; }
	}
	
	/// <summary>
	/// A reader of a publication.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Reader
	{
		
		/// <summary>
		/// Output only. Time the publication reader was created and associated with a Google user.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="createTime")]
		public string CreateTime { get; set; }
		
		/// <summary>
		/// Output only. The resource name of the reader. The last part of ppid in the resource name is the publisher provided id.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	/// <summary>
	/// A singleton containing all of a reader's entitlements for a publication.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ReaderEntitlements
	{
		
		/// <summary>
		/// All of the entitlements for a publication reader.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="entitlements")]
		public Entitlement[] Entitlements { get; set; }
		
		/// <summary>
		/// Output only. The resource name of the singleton.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
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
		/// Removes a publication reader, effectively severing the association with a Google user. If `force` is set to true, any entitlements for this reader will also be deleted. (Otherwise, the request will only work if the reader has no entitlements.) - If the reader does not exist, return NOT_FOUND. - Return FAILED_PRECONDITION if the force field is false (or unset) and entitlements are present.
		/// Readerrevenuesubscriptionlinking_publications_readers_delete v1/{name}
		/// </summary>
		/// <param name="name">Required. The resource name of the reader. Format: publications/{publication_id}/readers/{ppid}</param>
		/// <param name="force">If set to true, any entitlements under the reader will also be purged.</param>
		/// <returns>Successful response</returns>
		public async Task<DeleteReaderResponse> Readerrevenuesubscriptionlinking_publications_readers_deleteAsync(string name, bool force, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (name==null? "" : System.Uri.EscapeDataString(name))+"&force="+force;
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Delete, requestUri);
			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}

			var responseMessage = await httpClient.SendAsync(httpRequestMessage);
			try
			{
				responseMessage.EnsureSuccessStatusCodeEx();
				var streamContent = await responseMessage.Content.ReadAsStreamAsync();
				return JsonSerializer.Deserialize<DeleteReaderResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets the reader entitlements for a publication reader. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
		/// Readerrevenuesubscriptionlinking_publications_readers_getEntitlements v1/{name}
		/// </summary>
		/// <param name="name">Required. The name of the reader entitlements to retrieve. Format: publications/{publication_id}/readers/{reader_id}/entitlements</param>
		/// <returns>Successful response</returns>
		public async Task<ReaderEntitlements> Readerrevenuesubscriptionlinking_publications_readers_getEntitlementsAsync(string name, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (name==null? "" : System.Uri.EscapeDataString(name));
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
				return JsonSerializer.Deserialize<ReaderEntitlements>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Updates the reader entitlements for a publication reader. The entire reader entitlements will be overwritten by the new reader entitlements in the payload, like a PUT. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
		/// Readerrevenuesubscriptionlinking_publications_readers_updateEntitlements v1/{name}
		/// </summary>
		/// <param name="name">Output only. The resource name of the singleton.</param>
		/// <param name="updateMask">Optional. The list of fields to update. Defaults to all fields.</param>
		/// <returns>Successful response</returns>
		public async Task<ReaderEntitlements> Readerrevenuesubscriptionlinking_publications_readers_updateEntitlementsAsync(string name, string updateMask, ReaderEntitlements requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (name==null? "" : System.Uri.EscapeDataString(name))+"&updateMask=" + (updateMask==null? "" : System.Uri.EscapeDataString(updateMask));
			using var httpRequestMessage = new System.Net.Http.HttpRequestMessage(System.Net.Http.HttpMethod.Patch, requestUri);
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
				return JsonSerializer.Deserialize<ReaderEntitlements>(streamContent, jsonSerializerSettings);
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
