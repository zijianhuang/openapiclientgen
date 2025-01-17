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
	/// Each Channel is owned by a Platform and owns a collection of versions. Possible Channels are listed in the Channel enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Channel
	{
		
		/// <summary>
		/// Type of channel.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="channelType")]
		public System.Nullable<ChannelChannelType> ChannelType { get; set; }
		
		/// <summary>
		/// Channel name. Format is "{product}/platforms/{platform}/channels/{channel}"
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum ChannelChannelType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CHANNEL_TYPE_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		STABLE = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		BETA = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		DEV = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CANARY = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CANARY_ASAN = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ALL = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		EXTENDED = 7,
	}
	
	/// <summary>
	/// Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Interval
	{
		
		/// <summary>
		/// Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="endTime")]
		public string EndTime { get; set; }
		
		/// <summary>
		/// Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="startTime")]
		public string StartTime { get; set; }
	}
	
	/// <summary>
	/// Response message for ListChannels.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListChannelsResponse
	{
		
		/// <summary>
		/// The list of channels.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="channels")]
		public Channel[] Channels { get; set; }
		
		/// <summary>
		/// A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextPageToken")]
		public string NextPageToken { get; set; }
	}
	
	/// <summary>
	/// Response message for ListPlatforms.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListPlatformsResponse
	{
		
		/// <summary>
		/// A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextPageToken")]
		public string NextPageToken { get; set; }
		
		/// <summary>
		/// The list of platforms.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="platforms")]
		public Platform[] Platforms { get; set; }
	}
	
	/// <summary>
	/// Each Platform is owned by a Product and owns a collection of channels. Available platforms are listed in Platform enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Platform
	{
		
		/// <summary>
		/// Platform name. Format is "{product}/platforms/{platform}"
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Type of platform.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="platformType")]
		public System.Nullable<PlatformPlatformType> PlatformType { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum PlatformPlatformType
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		PLATFORM_TYPE_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WIN = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WIN64 = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MAC = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LINUX = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ANDROID = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		WEBVIEW = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		IOS = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ALL = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		MAC_ARM64 = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LACROS = 10,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LACROS_ARM32 = 11,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		CHROMEOS = 12,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		LACROS_ARM64 = 13,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		FUCHSIA = 14,
	}
	
	/// <summary>
	/// Response message for ListReleases.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListReleasesResponse
	{
		
		/// <summary>
		/// A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextPageToken")]
		public string NextPageToken { get; set; }
		
		/// <summary>
		/// The list of releases.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="releases")]
		public Release[] Releases { get; set; }
	}
	
	/// <summary>
	/// A Release is owned by a Version. A Release contains information about the release(s) of its parent version. This includes when the release began and ended, as well as what percentage it was released at. If the version is released again, or if the serving percentage changes, it will create another release under the version.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Release
	{
		
		/// <summary>
		/// Rollout fraction. This fraction indicates the fraction of people that should receive this version in this release. If the fraction is not specified in ReleaseManager, the API will assume fraction is 1.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fraction")]
		public System.Nullable<System.Double> Fraction { get; set; }
		
		/// <summary>
		/// Rollout fraction group. Only fractions with the same fraction_group are statistically comparable: there may be non-fractional differences between different fraction groups.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="fractionGroup")]
		public string FractionGroup { get; set; }
		
		/// <summary>
		/// Release name. Format is "{product}/platforms/{platform}/channels/{channel}/versions/{version}/releases/{release}"
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="serving")]
		public Interval Serving { get; set; }
		
		/// <summary>
		/// String containing just the version number. e.g. "84.0.4147.38"
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="version")]
		public string Version { get; set; }
	}
	
	/// <summary>
	/// Response message for ListVersions.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListVersionsResponse
	{
		
		/// <summary>
		/// A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="nextPageToken")]
		public string NextPageToken { get; set; }
		
		/// <summary>
		/// The list of versions.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="versions")]
		public Version[] Versions { get; set; }
	}
	
	/// <summary>
	/// Each Version is owned by a Channel. A Version only displays the Version number (e.g. 84.0.4147.38). A Version owns a collection of releases.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Version
	{
		
		/// <summary>
		/// Version name. Format is "{product}/platforms/{platform}/channels/{channel}/versions/{version}" e.g. "chrome/platforms/win/channels/beta/versions/84.0.4147.38"
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="name")]
		public string Name { get; set; }
		
		/// <summary>
		/// String containing just the version number. e.g. "84.0.4147.38"
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="version")]
		public string Version1 { get; set; }
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
		/// Returns list of channels that are available for a given platform.
		/// Versionhistory_platforms_channels_list v1/{parent}/channels
		/// </summary>
		/// <param name="parent">Required. The platform, which owns this collection of channels. Format: {product}/platforms/{platform}</param>
		/// <param name="pageSize">Optional. Optional limit on the number of channels to include in the response. If unspecified, the server will pick an appropriate default.</param>
		/// <param name="pageToken">Optional. A page token, received from a previous `ListChannels` call. Provide this to retrieve the subsequent page.</param>
		/// <returns>Successful response</returns>
		public async Task<ListChannelsResponse> Versionhistory_platforms_channels_listAsync(string parent, int pageSize, string pageToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/channels&pageSize="+pageSize+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken));
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
				return JsonSerializer.Deserialize<ListChannelsResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns list of platforms that are available for a given product. The resource "product" has no resource name in its name.
		/// Versionhistory_platforms_list v1/{parent}/platforms
		/// </summary>
		/// <param name="parent">Required. The product, which owns this collection of platforms. Format: {product}</param>
		/// <param name="pageSize">Optional. Optional limit on the number of channels to include in the response. If unspecified, the server will pick an appropriate default.</param>
		/// <param name="pageToken">Optional. A page token, received from a previous `ListChannels` call. Provide this to retrieve the subsequent page.</param>
		/// <returns>Successful response</returns>
		public async Task<ListPlatformsResponse> Versionhistory_platforms_listAsync(string parent, int pageSize, string pageToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/platforms&pageSize="+pageSize+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken));
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
				return JsonSerializer.Deserialize<ListPlatformsResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns list of releases of the given version.
		/// Versionhistory_platforms_channels_versions_releases_list v1/{parent}/releases
		/// </summary>
		/// <param name="parent">Required. The version, which owns this collection of releases. Format: {product}/platforms/{platform}/channels/{channel}/versions/{version}</param>
		/// <param name="filter">Optional. Filter string. Format is a comma separated list of All comma separated filter clauses are conjoined with a logical "and". Valid field_names are "version", "name", "platform", "channel", "fraction" "starttime", and "endtime". Valid operators are "<", "<=", "=", ">=", and ">". Channel comparison is done by distance from stable. must be a valid channel when filtering by channel. Ex) stable < beta, beta < dev, canary < canary_asan. Version comparison is done numerically. Ex) 1.0.0.8 < 1.0.0.10. If version is not entirely written, the version will be appended with 0 for the missing fields. Ex) version > 80 becoms version > 80.0.0.0 When filtering by starttime or endtime, string must be in RFC 3339 date string format. Name and platform are filtered by string comparison. Ex) "...?filter=channel<=beta, version >= 80 Ex) "...?filter=version > 80, version < 81 Ex) "...?filter=starttime>2020-01-01T00:00:00Z</param>
		/// <param name="orderBy">Optional. Ordering string. Valid order_by strings are "version", "name", "starttime", "endtime", "platform", "channel", and "fraction". Optionally, you can append "desc" or "asc" to specify the sorting order. Multiple order_by strings can be used in a comma separated list. Ordering by channel will sort by distance from the stable channel (not alphabetically). A list of channels sorted in this order is: stable, beta, dev, canary, and canary_asan. Sorting by name may cause unexpected behaviour as it is a naive string sort. For example, 1.0.0.8 will be before 1.0.0.10 in descending order. If order_by is not specified the response will be sorted by starttime in descending order. Ex) "...?order_by=starttime asc" Ex) "...?order_by=platform desc, channel, startime desc"</param>
		/// <param name="pageSize">Optional. Optional limit on the number of releases to include in the response. If unspecified, the server will pick an appropriate default.</param>
		/// <param name="pageToken">Optional. A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page.</param>
		/// <returns>Successful response</returns>
		public async Task<ListReleasesResponse> Versionhistory_platforms_channels_versions_releases_listAsync(string parent, string filter, string orderBy, int pageSize, string pageToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/releases&filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter))+"&orderBy=" + (orderBy==null? "" : System.Uri.EscapeDataString(orderBy))+"&pageSize="+pageSize+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken));
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
				return JsonSerializer.Deserialize<ListReleasesResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Returns list of version for the given platform/channel.
		/// Versionhistory_platforms_channels_versions_list v1/{parent}/versions
		/// </summary>
		/// <param name="parent">Required. The channel, which owns this collection of versions. Format: {product}/platforms/{platform}/channels/{channel}</param>
		/// <param name="filter">Optional. Filter string. Format is a comma separated list of All comma separated filter clauses are conjoined with a logical "and". Valid field_names are "version", "name", "platform", and "channel". Valid operators are "<", "<=", "=", ">=", and ">". Channel comparison is done by distance from stable. Ex) stable < beta, beta < dev, canary < canary_asan. Version comparison is done numerically. If version is not entirely written, the version will be appended with 0 in missing fields. Ex) version > 80 becoms version > 80.0.0.0 Name and platform are filtered by string comparison. Ex) "...?filter=channel<=beta, version >= 80 Ex) "...?filter=version > 80, version < 81</param>
		/// <param name="orderBy">Optional. Ordering string. Valid order_by strings are "version", "name", "platform", and "channel". Optionally, you can append " desc" or " asc" to specify the sorting order. Multiple order_by strings can be used in a comma separated list. Ordering by channel will sort by distance from the stable channel (not alphabetically). A list of channels sorted in this order is: stable, beta, dev, canary, and canary_asan. Sorting by name may cause unexpected behaviour as it is a naive string sort. For example, 1.0.0.8 will be before 1.0.0.10 in descending order. If order_by is not specified the response will be sorted by version in descending order. Ex) "...?order_by=version asc" Ex) "...?order_by=platform desc, channel, version"</param>
		/// <param name="pageSize">Optional. Optional limit on the number of versions to include in the response. If unspecified, the server will pick an appropriate default.</param>
		/// <param name="pageToken">Optional. A page token, received from a previous `ListVersions` call. Provide this to retrieve the subsequent page.</param>
		/// <returns>Successful response</returns>
		public async Task<ListVersionsResponse> Versionhistory_platforms_channels_versions_listAsync(string parent, string filter, string orderBy, int pageSize, string pageToken, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/"+ (parent==null? "" : System.Uri.EscapeDataString(parent))+"/versions&filter=" + (filter==null? "" : System.Uri.EscapeDataString(filter))+"&orderBy=" + (orderBy==null? "" : System.Uri.EscapeDataString(orderBy))+"&pageSize="+pageSize+"&pageToken=" + (pageToken==null? "" : System.Uri.EscapeDataString(pageToken));
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
				return JsonSerializer.Deserialize<ListVersionsResponse>(streamContent, jsonSerializerSettings);
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
