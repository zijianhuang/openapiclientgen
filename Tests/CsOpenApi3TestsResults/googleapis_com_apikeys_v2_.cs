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
	/// This resource represents a long-running operation that is the result of a network API call.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Operation
	{
		
		/// <summary>
		/// If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="done")]
		public System.Nullable<System.Boolean> Done { get; set; }
		
		/// <summary>
		/// The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="error")]
		public Status Error { get; set; }
		
		/// <summary>
		/// Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="metadata")]
		public System.Collections.Generic.Dictionary<string, object> Metadata { get; set; }
		
		/// <summary>
		/// The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="response")]
		public System.Collections.Generic.Dictionary<string, object> Response { get; set; }
	}
	
	/// <summary>
	/// The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Status
	{
		
		/// <summary>
		/// The status code, which should be an enum value of google.rpc.Code.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="code")]
		public System.Nullable<System.Int32> Code { get; set; }
		
		/// <summary>
		/// A list of messages that carry the error details. There is a common set of message types for APIs to use.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="details")]
		public string[] Details { get; set; }
		
		/// <summary>
		/// A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="message")]
		public string Message { get; set; }
	}
	
	/// <summary>
	/// Identifier of an Android application for key use.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class V2AndroidApplication
	{
		
		/// <summary>
		/// The package name of the application.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="packageName")]
		public string PackageName { get; set; }
		
		/// <summary>
		/// The SHA1 fingerprint of the application. For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sha1Fingerprint")]
		public string Sha1Fingerprint { get; set; }
	}
	
	/// <summary>
	/// The Android apps that are allowed to use the key.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class V2AndroidKeyRestrictions
	{
		
		/// <summary>
		/// A list of Android applications that are allowed to make API calls with this key.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="allowedApplications")]
		public V2AndroidApplication[] AllowedApplications { get; set; }
	}
	
	/// <summary>
	/// A restriction for a specific service and optionally one or multiple specific methods. Both fields are case insensitive.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class V2ApiTarget
	{
		
		/// <summary>
		/// Optional. List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (*) can be used as the last symbol. Valid examples: `google.cloud.translate.v2.TranslateService.GetSupportedLanguage` `TranslateText` `Get*` `translate.googleapis.com.Get*`
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="methods")]
		public string[] Methods { get; set; }
		
		/// <summary>
		/// The service for this restriction. It should be the canonical service name, for example: `translate.googleapis.com`. You can use [`gcloud services list`](/sdk/gcloud/reference/services/list) to get a list of services that are enabled in the project.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="service")]
		public string Service { get; set; }
	}
	
	/// <summary>
	/// The HTTP referrers (websites) that are allowed to use the key.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class V2BrowserKeyRestrictions
	{
		
		/// <summary>
		/// A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="allowedReferrers")]
		public string[] AllowedReferrers { get; set; }
	}
	
	/// <summary>
	/// Response message for `GetKeyString` method.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class V2GetKeyStringResponse
	{
		
		/// <summary>
		/// An encrypted and signed value of the key.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="keyString")]
		public string KeyString { get; set; }
	}
	
	/// <summary>
	/// The iOS apps that are allowed to use the key.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class V2IosKeyRestrictions
	{
		
		/// <summary>
		/// A list of bundle IDs that are allowed when making API calls with this key.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="allowedBundleIds")]
		public string[] AllowedBundleIds { get; set; }
	}
	
	/// <summary>
	/// The representation of a key managed by the API Keys API.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class V2Key
	{
		
		/// <summary>
		/// Annotations is an unstructured key-value map stored with a policy that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="annotations")]
		public System.Collections.Generic.Dictionary<string, string> Annotations { get; set; }
		
		/// <summary>
		/// Output only. A timestamp identifying the time this key was originally created.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="createTime")]
		public string CreateTime { get; set; }
		
		/// <summary>
		/// Output only. A timestamp when this key was deleted. If the resource is not deleted, this must be empty.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deleteTime")]
		public string DeleteTime { get; set; }
		
		/// <summary>
		/// Human-readable display name of this key that you can modify. The maximum length is 63 characters.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="displayName")]
		public string DisplayName { get; set; }
		
		/// <summary>
		/// Output only. A checksum computed by the server based on the current value of the Key resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. See https://google.aip.dev/154.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="etag")]
		public string Etag { get; set; }
		
		/// <summary>
		/// Output only. An encrypted and signed value held by this key. This field can be accessed only through the `GetKeyString` method.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="keyString")]
		public string KeyString { get; set; }
		
		/// <summary>
		/// Output only. The resource name of the key. The `name` has the form: `projects//locations/global/keys/`. For example: `projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2` NOTE: Key is a global resource; hence the only supported value for location is `global`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Describes the restrictions on the key.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="restrictions")]
		public V2Restrictions Restrictions { get; set; }
		
		/// <summary>
		/// Output only. Unique id in UUID4 format.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="uid")]
		public string Uid { get; set; }
		
		/// <summary>
		/// Output only. A timestamp identifying the time this key was last updated.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="updateTime")]
		public string UpdateTime { get; set; }
	}
	
	/// <summary>
	/// Describes the restrictions on the key.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class V2Restrictions
	{
		
		/// <summary>
		/// The Android apps that are allowed to use the key.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="androidKeyRestrictions")]
		public V2AndroidKeyRestrictions AndroidKeyRestrictions { get; set; }
		
		/// <summary>
		/// A restriction for a specific service and optionally one or more specific methods. Requests are allowed if they match any of these restrictions. If no restrictions are specified, all targets are allowed.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="apiTargets")]
		public V2ApiTarget[] ApiTargets { get; set; }
		
		/// <summary>
		/// The HTTP referrers (websites) that are allowed to use the key.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="browserKeyRestrictions")]
		public V2BrowserKeyRestrictions BrowserKeyRestrictions { get; set; }
		
		/// <summary>
		/// The iOS apps that are allowed to use the key.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="iosKeyRestrictions")]
		public V2IosKeyRestrictions IosKeyRestrictions { get; set; }
		
		/// <summary>
		/// The IP addresses of callers that are allowed to use the key.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="serverKeyRestrictions")]
		public V2ServerKeyRestrictions ServerKeyRestrictions { get; set; }
	}
	
	/// <summary>
	/// The IP addresses of callers that are allowed to use the key.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class V2ServerKeyRestrictions
	{
		
		/// <summary>
		/// A list of the caller IP addresses that are allowed to make API calls with this key.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="allowedIps")]
		public string[] AllowedIps { get; set; }
	}
	
	/// <summary>
	/// Response message for `ListKeys` method.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class V2ListKeysResponse
	{
		
		/// <summary>
		/// A list of API keys.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="keys")]
		public V2Key[] Keys { get; set; }
		
		/// <summary>
		/// The pagination token for the next page of results.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextPageToken")]
		public string NextPageToken { get; set; }
	}
	
	/// <summary>
	/// Response message for `LookupKey` method.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class V2LookupKeyResponse
	{
		
		/// <summary>
		/// The resource name of the API key. If the API key has been purged, resource name is empty.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// The project that owns the key with the value specified in the request.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="parent")]
		public string Parent { get; set; }
	}
	
	/// <summary>
	/// Request message for `UndeleteKey` method.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class V2UndeleteKeyRequest
	{
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
		/// Find the parent project and resource name of the API key that matches the key string in the request. If the API key has been purged, resource name will not be set. The service account must have the `apikeys.keys.lookup` permission on the parent project.
		/// Apikeys_keys_lookupKey v2/keys:lookupKey
		/// </summary>
		/// <param name="keyString">Required. Finds the project that owns the key string value.</param>
		/// <returns>Successful response</returns>
		public async Task<V2LookupKeyResponse> Apikeys_keys_lookupKeyAsync(string keyString, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/keys:lookupKey?keyString=" + (keyString==null? "" : System.Uri.EscapeDataString(keyString));
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
				return JsonSerializer.Deserialize<V2LookupKeyResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.
		/// Apikeys_projects_locations_keys_delete v2/{name}
		/// </summary>
		/// <param name="name">Required. The resource name of the API key to be deleted.</param>
		/// <param name="etag">Optional. The etag known to the client for the expected state of the key. This is to be used for optimistic concurrency.</param>
		/// <returns>Successful response</returns>
		public async Task<Operation> Apikeys_projects_locations_keys_deleteAsync(string name, string etag, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/"+ (name==null? "" : System.Uri.EscapeDataString(name))+"&etag=" + (etag==null? "" : System.Uri.EscapeDataString(etag));
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
				return JsonSerializer.Deserialize<Operation>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
		/// Apikeys_projects_locations_keys_get v2/{name}
		/// </summary>
		/// <param name="name">Required. The resource name of the API key to get.</param>
		/// <returns>Successful response</returns>
		public async Task<V2Key> Apikeys_projects_locations_keys_getAsync(string name, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/"+ (name==null? "" : System.Uri.EscapeDataString(name));
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
				return JsonSerializer.Deserialize<V2Key>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
		/// Apikeys_projects_locations_keys_patch v2/{name}
		/// </summary>
		/// <param name="name">Output only. The resource name of the key. The `name` has the form: `projects//locations/global/keys/`. For example: `projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2` NOTE: Key is a global resource; hence the only supported value for location is `global`.</param>
		/// <param name="updateMask">The field mask specifies which fields to be updated as part of this request. All other fields are ignored. Mutable fields are: `display_name`, `restrictions`, and `annotations`. If an update mask is not provided, the service treats it as an implied mask equivalent to all allowed fields that are set on the wire. If the field mask has a special value "*", the service treats it equivalent to replace all allowed mutable fields.</param>
		/// <returns>Successful response</returns>
		public async Task<Operation> Apikeys_projects_locations_keys_patchAsync(string name, string updateMask, V2Key requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/"+ (name==null? "" : System.Uri.EscapeDataString(name))+"&updateMask=" + (updateMask==null? "" : System.Uri.EscapeDataString(updateMask));
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
				return JsonSerializer.Deserialize<Operation>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
		/// Apikeys_projects_locations_keys_getKeyString v2/{name}/keyString
		/// </summary>
		/// <param name="name">Required. The resource name of the API key to be retrieved.</param>
		/// <returns>Successful response</returns>
		public async Task<V2GetKeyStringResponse> Apikeys_projects_locations_keys_getKeyStringAsync(string name, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/"+ (name==null? "" : System.Uri.EscapeDataString(name))+"/keyString";
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
				return JsonSerializer.Deserialize<V2GetKeyStringResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.
		/// Apikeys_projects_locations_keys_undelete v2/{name}:undelete
		/// </summary>
		/// <param name="name">Required. The resource name of the API key to be undeleted.</param>
		/// <returns>Successful response</returns>
		public async Task<Operation> Apikeys_projects_locations_keys_undeleteAsync(string name, V2UndeleteKeyRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/"+ (name==null? "" : System.Uri.EscapeDataString(name))+":undelete";
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
				return JsonSerializer.Deserialize<Operation>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
		/// Apikeys_projects_locations_keys_list v2/{parent}/keys
		/// </summary>
		/// <param name="parent">Required. Lists all API keys associated with this project.</param>
		/// <param name="pageSize">Optional. Specifies the maximum number of results to be returned at a time.</param>
		/// <param name="pageToken">Optional. Requests a specific page of results.</param>
		/// <param name="showDeleted">Optional. Indicate that keys deleted in the past 30 days should also be returned.</param>
		/// <returns>Successful response</returns>
		public async Task<V2ListKeysResponse> Apikeys_projects_locations_keys_listAsync(string parent, int pageSize, string pageToken, bool showDeleted, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/keys&pageSize="+pageSize+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken))+"&showDeleted="+showDeleted;
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
				return JsonSerializer.Deserialize<V2ListKeysResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
		/// Apikeys_projects_locations_keys_create v2/{parent}/keys
		/// </summary>
		/// <param name="parent">Required. The project in which the API key is created.</param>
		/// <param name="keyId">User specified key id (optional). If specified, it will become the final component of the key resource name. The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the id must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. The id must NOT be a UUID-like string.</param>
		/// <returns>Successful response</returns>
		public async Task<Operation> Apikeys_projects_locations_keys_createAsync(string parent, string keyId, V2Key requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/keys&keyId=" + (keyId==null? "" : System.Uri.EscapeDataString(keyId));
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
				return JsonSerializer.Deserialize<Operation>(streamContent, jsonSerializerSettings);
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
