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
	/// CreateProfileRequest describes a profile resource online creation request. The deployment field must be populated. The profile_type specifies the list of profile types supported by the agent. The creation call will hang until a profile of one of these types needs to be collected. 
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CreateProfileRequest
	{
		
		/// <summary>
		/// Deployment contains the deployment identification information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deployment")]
		public Deployment Deployment { get; set; }
		
		/// <summary>
		/// One or more profile types that the agent is capable of providing.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="profileType")]
		public string[] ProfileType { get; set; }
	}
	
	/// <summary>
	/// Deployment contains the deployment identification information.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Deployment
	{
		
		/// <summary>
		/// Labels identify the deployment within the user universe and same target. Validation regex for label names: `^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$`. Value for an individual label must be <= 512 bytes, the total size of all label names and values must be <= 1024 bytes. Label named "language" can be used to record the programming language of the profiled deployment. The standard choices for the value include "java", "go", "python", "ruby", "nodejs", "php", "dotnet". For deployments running on Google Cloud Platform, "zone" or "region" label should be present describing the deployment location. An example of a zone is "us-central1-a", an example of a region is "us-central1" or "us-central".
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="labels")]
		public System.Collections.Generic.Dictionary<string, string> Labels { get; set; }
		
		/// <summary>
		/// Project ID is the ID of a cloud project. Validation regex: `^a-z{4,61}[a-z0-9]$`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="projectId")]
		public string ProjectId { get; set; }
		
		/// <summary>
		/// Target is the service name used to group related deployments: * Service name for App Engine Flex / Standard. * Cluster and container name for GKE. * User-specified string for direct Compute Engine profiling (e.g. Java). * Job name for Dataflow. Validation regex: `^[a-z0-9]([-a-z0-9_.]{0,253}[a-z0-9])?$`.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="target")]
		public string Target { get; set; }
	}
	
	/// <summary>
	/// ListProfileResponse contains the list of collected profiles for deployments in projects which the user has permissions to view.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListProfilesResponse
	{
		
		/// <summary>
		/// Token to receive the next page of results. This field maybe empty if there are no more profiles to fetch.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextPageToken")]
		public string NextPageToken { get; set; }
		
		/// <summary>
		/// List of profiles fetched.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="profiles")]
		public Profile[] Profiles { get; set; }
		
		/// <summary>
		/// Number of profiles that were skipped in the current page since they were not able to be fetched successfully. This should typically be zero. A non-zero value may indicate a transient failure, in which case if the number is too high for your use case, the call may be retried.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="skippedProfiles")]
		public System.Nullable<System.Int32> SkippedProfiles { get; set; }
	}
	
	/// <summary>
	/// Profile resource.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Profile
	{
		
		/// <summary>
		/// Deployment contains the deployment identification information.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="deployment")]
		public Deployment Deployment { get; set; }
		
		/// <summary>
		/// Duration of the profiling session. Input (for the offline mode) or output (for the online mode). The field represents requested profiling duration. It may slightly differ from the effective profiling duration, which is recorded in the profile data, in case the profiling can't be stopped immediately (e.g. in case stopping the profiling is handled asynchronously).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="duration")]
		public string Duration { get; set; }
		
		/// <summary>
		/// Input only. Labels associated to this specific profile. These labels will get merged with the deployment labels for the final data set. See documentation on deployment labels for validation rules and limits.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="labels")]
		public System.Collections.Generic.Dictionary<string, string> Labels { get; set; }
		
		/// <summary>
		/// Output only. Opaque, server-assigned, unique ID for this profile.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Input only. Profile bytes, as a gzip compressed serialized proto, the format is https://github.com/google/pprof/blob/master/proto/profile.proto.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="profileBytes")]
		public string ProfileBytes { get; set; }
		
		/// <summary>
		/// Type of profile. For offline mode, this must be specified when creating the profile. For online mode it is assigned and returned by the server.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="profileType")]
		public System.Nullable<ProfileProfileType> ProfileType { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum ProfileProfileType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PROFILE_TYPE_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CPU = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WALL = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		HEAP = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		THREADS = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CONTENTION = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PEAK_HEAP = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		HEAP_ALLOC = 7,
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
		/// UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.
		/// Cloudprofiler_projects_profiles_patch v2/{name}
		/// </summary>
		/// <param name="name">Output only. Opaque, server-assigned, unique ID for this profile.</param>
		/// <param name="updateMask">Field mask used to specify the fields to be overwritten. Currently only profile_bytes and labels fields are supported by UpdateProfile, so only those fields can be specified in the mask. When no mask is provided, all fields are overwritten.</param>
		/// <returns>Successful response</returns>
		public async Task<Profile> Cloudprofiler_projects_profiles_patchAsync(string name, string updateMask, Profile requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
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
				return JsonSerializer.Deserialize<Profile>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Lists profiles which have been collected so far and for which the caller has permission to view.
		/// Cloudprofiler_projects_profiles_list v2/{parent}/profiles
		/// </summary>
		/// <param name="parent">Required. The parent, which owns this collection of profiles. Format: projects/{user_project_id}</param>
		/// <param name="pageSize">The maximum number of items to return. Default page_size is 1000. Max limit is 1000.</param>
		/// <param name="pageToken">The token to continue pagination and get profiles from a particular page. When paginating, all other parameters provided to `ListProfiles` must match the call that provided the page token.</param>
		/// <returns>Successful response</returns>
		public async Task<ListProfilesResponse> Cloudprofiler_projects_profiles_listAsync(string parent, int pageSize, string pageToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/profiles&pageSize="+pageSize+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken));
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
				return JsonSerializer.Deserialize<ListProfilesResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// CreateProfile creates a new profile resource in the online mode. The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin".
		/// Cloudprofiler_projects_profiles_create v2/{parent}/profiles
		/// </summary>
		/// <param name="parent">Parent project to create the profile in.</param>
		/// <returns>Successful response</returns>
		public async Task<Profile> Cloudprofiler_projects_profiles_createAsync(string parent, CreateProfileRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/profiles";
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
				return JsonSerializer.Deserialize<Profile>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.
		/// Cloudprofiler_projects_profiles_createOffline v2/{parent}/profiles:createOffline
		/// </summary>
		/// <param name="parent">Parent project to create the profile in.</param>
		/// <returns>Successful response</returns>
		public async Task<Profile> Cloudprofiler_projects_profiles_createOfflineAsync(string parent, Profile requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v2/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/profiles:createOffline";
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
				return JsonSerializer.Deserialize<Profile>(streamContent, jsonSerializerSettings);
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
