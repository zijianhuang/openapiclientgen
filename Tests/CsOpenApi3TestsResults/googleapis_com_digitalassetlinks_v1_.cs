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
	/// Describes an android app asset.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class AndroidAppAsset
	{
		
		/// <summary>
		/// Describes an X509 certificate.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="certificate")]
		public CertificateInfo Certificate { get; set; }
		
		/// <summary>
		/// Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name `com.google.android.apps.maps`. REQUIRED
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="packageName")]
		public string PackageName { get; set; }
	}
	
	/// <summary>
	/// Describes an X509 certificate.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CertificateInfo
	{
		
		/// <summary>
		/// The uppercase SHA-265 fingerprint of the certificate. From the PEM certificate, it can be acquired like this: $ keytool -printcert -file $CERTFILE | grep SHA256: SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \ 42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5 or like this: $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256 SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \ 16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5 In this example, the contents of this field would be `14:6D:E9:83:C5:73: 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF: 44:E5`. If these tools are not available to you, you can convert the PEM certificate into the DER format, compute the SHA-256 hash of that string and represent the result as a hexstring (that is, uppercase hexadecimal representations of each octet, separated by colons).
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="sha256Fingerprint")]
		public string Sha256Fingerprint { get; set; }
	}
	
	/// <summary>
	/// Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Asset
	{
		
		/// <summary>
		/// Describes an android app asset.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="androidApp")]
		public AndroidAppAsset AndroidApp { get; set; }
		
		/// <summary>
		/// Describes a web asset.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="web")]
		public WebAsset Web { get; set; }
	}
	
	/// <summary>
	/// Describes a web asset.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class WebAsset
	{
		
		/// <summary>
		/// Web assets are identified by a URL that contains only the scheme, hostname and port parts. The format is http[s]://[:] Hostnames must be fully qualified: they must end in a single period ("`.`"). Only the schemes "http" and "https" are currently allowed. Port numbers are given as a decimal number, and they must be omitted if the standard port numbers are used: 80 for http and 443 for https. We call this limited URL the "site". All URLs that share the same scheme, hostname and port are considered to be a part of the site and thus belong to the web asset. Example: the asset with the site `https://www.google.com` contains all these URLs: * `https://www.google.com/` * `https://www.google.com:443/` * `https://www.google.com/foo` * `https://www.google.com/foo?bar` * `https://www.google.com/foo#bar` * `https://user@password:www.google.com/` But it does not contain these URLs: * `http://www.google.com/` (wrong scheme) * `https://google.com/` (hostname does not match) * `https://www.google.com:444/` (port does not match) REQUIRED
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="site")]
		public string Site { get; set; }
	}
	
	/// <summary>
	/// Message used to check for the existence of multiple digital asset links within a single RPC.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BulkCheckRequest
	{
		
		/// <summary>
		/// Same configuration as in Check request, all statements checks will use same configurations.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="allowGoogleInternalDataSources")]
		public System.Nullable<System.Boolean> AllowGoogleInternalDataSources { get; set; }
		
		/// <summary>
		/// If specified, will be used in any given template statement that doesn’t specify a relation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="defaultRelation")]
		public string DefaultRelation { get; set; }
		
		/// <summary>
		/// Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="defaultSource")]
		public Asset DefaultSource { get; set; }
		
		/// <summary>
		/// Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="defaultTarget")]
		public Asset DefaultTarget { get; set; }
		
		/// <summary>
		/// Same configuration as in Check request, all statements checks will use same configurations.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="skipCacheLookup")]
		public System.Nullable<System.Boolean> SkipCacheLookup { get; set; }
		
		/// <summary>
		/// List of statements to check. For each statement, you can omit a field if the corresponding default_* field below was supplied. Minimum 1 statement; maximum 1,000 statements. Any additional statements will be ignored.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="statements")]
		public StatementTemplate[] Statements { get; set; }
	}
	
	/// <summary>
	/// A single statement to check in a bulk call using BulkCheck. See CheckRequest for details about each field.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class StatementTemplate
	{
		
		/// <summary>
		/// The relationship being asserted between the source and target. If omitted, you must specify a BulkCheckRequest.default_relation value to use here.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="relation")]
		public string Relation { get; set; }
		
		/// <summary>
		/// Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="source")]
		public Asset Source { get; set; }
		
		/// <summary>
		/// Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="target")]
		public Asset Target { get; set; }
	}
	
	/// <summary>
	/// Response for BulkCheck call. Results are sent in a list in the same order in which they were sent. Individual check errors are described in the appropriate check_results entry. If the entire call fails, the response will include a bulk_error_code field describing the error.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class BulkCheckResponse
	{
		
		/// <summary>
		/// Error code for the entire request. Present only if the entire request failed. Individual check errors will not trigger the presence of this field.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="bulkErrorCode")]
		public System.Nullable<BulkCheckResponseBulkErrorCode> BulkErrorCode { get; set; }
		
		/// <summary>
		/// List of results for each check request. Results are returned in the same order in which they were sent in the request.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="checkResults")]
		public CheckResponse[] CheckResults { get; set; }
	}
	
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public enum BulkCheckResponseBulkErrorCode
	{
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ERROR_CODE_UNSPECIFIED = 0,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ERROR_CODE_INVALID_QUERY = 1,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ERROR_CODE_FETCH_ERROR = 2,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ERROR_CODE_FAILED_SSL_VALIDATION = 3,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ERROR_CODE_REDIRECT = 4,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ERROR_CODE_TOO_LARGE = 5,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ERROR_CODE_MALFORMED_HTTP_RESPONSE = 6,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ERROR_CODE_WRONG_CONTENT_TYPE = 7,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ERROR_CODE_MALFORMED_CONTENT = 8,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ERROR_CODE_SECURE_ASSET_INCLUDES_INSECURE = 9,
		
		[System.Runtime.Serialization.EnumMemberAttribute()]
		ERROR_CODE_FETCH_BUDGET_EXHAUSTED = 10,
	}
	
	/// <summary>
	/// Response message for the CheckAssetLinks call.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class CheckResponse
	{
		
		/// <summary>
		/// Human-readable message containing information intended to help end users understand, reproduce and debug the result. The message will be in English and we are currently not planning to offer any translations. Please note that no guarantees are made about the contents or format of this string. Any aspect of it may be subject to change without notice. You should not attempt to programmatically parse this data. For programmatic access, use the error_code field below.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="debugString")]
		public string DebugString { get; set; }
		
		/// <summary>
		/// Error codes that describe the result of the Check operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errorCode")]
		public BulkCheckResponseBulkErrorCode[] ErrorCode { get; set; }
		
		/// <summary>
		/// Set to true if the assets specified in the request are linked by the relation specified in the request.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="linked")]
		public System.Nullable<System.Boolean> Linked { get; set; }
		
		/// <summary>
		/// From serving time, how much longer the response should be considered valid barring further updates. REQUIRED
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="maxAge")]
		public string MaxAge { get; set; }
	}
	
	/// <summary>
	/// Response message for the List call.
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class ListResponse
	{
		
		/// <summary>
		/// Human-readable message containing information intended to help end users understand, reproduce and debug the result. The message will be in English and we are currently not planning to offer any translations. Please note that no guarantees are made about the contents or format of this string. Any aspect of it may be subject to change without notice. You should not attempt to programmatically parse this data. For programmatic access, use the error_code field below.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="debugString")]
		public string DebugString { get; set; }
		
		/// <summary>
		/// Error codes that describe the result of the List operation.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="errorCode")]
		public BulkCheckResponseBulkErrorCode[] ErrorCode { get; set; }
		
		/// <summary>
		/// From serving time, how much longer the response should be considered valid barring further updates. REQUIRED
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="maxAge")]
		public string MaxAge { get; set; }
		
		/// <summary>
		/// A list of all the matching statements that have been found.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="statements")]
		public Statement[] Statements { get; set; }
	}
	
	/// <summary>
	/// Describes a reliable statement that has been made about the relationship between a source asset and a target asset. Statements are always made by the source asset, either directly or by delegating to a statement list that is stored elsewhere. For more detailed definitions of statements and assets, please refer to our [API documentation landing page](/digital-asset-links/v1/getting-started).
	/// </summary>
	[System.Runtime.Serialization.DataContract(Namespace="http://fonlow.com/TestOpenApi/2024/04")]
	public class Statement
	{
		
		/// <summary>
		/// The relation identifies the use of the statement as intended by the source asset's owner (that is, the person or entity who issued the statement). Every complete statement has a relation. We identify relations with strings of the format `/`, where `` must be one of a set of pre-defined purpose categories, and `` is a free-form lowercase alphanumeric string that describes the specific use case of the statement. Refer to [our API documentation](/digital-asset-links/v1/relation-strings) for the current list of supported relations. Example: `delegate_permission/common.handle_all_urls` REQUIRED
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="relation")]
		public string Relation { get; set; }
		
		/// <summary>
		/// Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="source")]
		public Asset Source { get; set; }
		
		/// <summary>
		/// Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
		/// </summary>
		[System.Runtime.Serialization.DataMember(Name="target")]
		public Asset Target { get; set; }
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
		/// Send a bundle of statement checks in a single RPC to minimize latency and service load. Statements need not be all for the same source and/or target. We recommend using this method when you need to check more than one statement in a short period of time.
		/// Digitalassetlinks_assetlinks_bulkCheck v1/assetlinks:bulkCheck
		/// </summary>
		/// <returns>Successful response</returns>
		public async Task<BulkCheckResponse> Digitalassetlinks_assetlinks_bulkCheckAsync(BulkCheckRequest requestBody, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/assetlinks:bulkCheck";
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
				return JsonSerializer.Deserialize<BulkCheckResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Determines whether the specified (directional) relationship exists between the specified source and target assets. The relation describes the intent of the link between the two assets as claimed by the source asset. An example for such relationships is the delegation of privileges or permissions. This command is most often used by infrastructure systems to check preconditions for an action. For example, a client may want to know if it is OK to send a web URL to a particular mobile app instead. The client can check for the relevant asset link from the website to the mobile app to decide if the operation should be allowed. A note about security: if you specify a secure asset as the source, such as an HTTPS website or an Android app, the API will ensure that any statements used to generate the response have been made in a secure way by the owner of that asset. Conversely, if the source asset is an insecure HTTP website (that is, the URL starts with `http://` instead of `https://`), the API cannot verify its statements securely, and it is not possible to ensure that the website's statements have not been altered by a third party. For more information, see the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md).
		/// Digitalassetlinks_assetlinks_check v1/assetlinks:check
		/// </summary>
		/// <param name="relation">Query string for the relation. We identify relations with strings of the format `/`, where `` must be one of a set of pre-defined purpose categories, and `` is a free-form lowercase alphanumeric string that describes the specific use case of the statement. Refer to [our API documentation](/digital-asset-links/v1/relation-strings) for the current list of supported relations. For a query to match an asset link, both the query's and the asset link's relation strings must match exactly. Example: A query with relation `delegate_permission/common.handle_all_urls` matches an asset link with relation `delegate_permission/common.handle_all_urls`.</param>
		/// <param name="source_androidApp_certificate_sha256Fingerprint">The uppercase SHA-265 fingerprint of the certificate. From the PEM certificate, it can be acquired like this: $ keytool -printcert -file $CERTFILE | grep SHA256: SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \ 42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5 or like this: $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256 SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \ 16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5 In this example, the contents of this field would be `14:6D:E9:83:C5:73: 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF: 44:E5`. If these tools are not available to you, you can convert the PEM certificate into the DER format, compute the SHA-256 hash of that string and represent the result as a hexstring (that is, uppercase hexadecimal representations of each octet, separated by colons).</param>
		/// <param name="source_androidApp_packageName">Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name `com.google.android.apps.maps`. REQUIRED</param>
		/// <param name="source_web_site">Web assets are identified by a URL that contains only the scheme, hostname and port parts. The format is http[s]://[:] Hostnames must be fully qualified: they must end in a single period ("`.`"). Only the schemes "http" and "https" are currently allowed. Port numbers are given as a decimal number, and they must be omitted if the standard port numbers are used: 80 for http and 443 for https. We call this limited URL the "site". All URLs that share the same scheme, hostname and port are considered to be a part of the site and thus belong to the web asset. Example: the asset with the site `https://www.google.com` contains all these URLs: * `https://www.google.com/` * `https://www.google.com:443/` * `https://www.google.com/foo` * `https://www.google.com/foo?bar` * `https://www.google.com/foo#bar` * `https://user@password:www.google.com/` But it does not contain these URLs: * `http://www.google.com/` (wrong scheme) * `https://google.com/` (hostname does not match) * `https://www.google.com:444/` (port does not match) REQUIRED</param>
		/// <param name="target_androidApp_certificate_sha256Fingerprint">The uppercase SHA-265 fingerprint of the certificate. From the PEM certificate, it can be acquired like this: $ keytool -printcert -file $CERTFILE | grep SHA256: SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \ 42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5 or like this: $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256 SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \ 16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5 In this example, the contents of this field would be `14:6D:E9:83:C5:73: 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF: 44:E5`. If these tools are not available to you, you can convert the PEM certificate into the DER format, compute the SHA-256 hash of that string and represent the result as a hexstring (that is, uppercase hexadecimal representations of each octet, separated by colons).</param>
		/// <param name="target_androidApp_packageName">Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name `com.google.android.apps.maps`. REQUIRED</param>
		/// <param name="target_web_site">Web assets are identified by a URL that contains only the scheme, hostname and port parts. The format is http[s]://[:] Hostnames must be fully qualified: they must end in a single period ("`.`"). Only the schemes "http" and "https" are currently allowed. Port numbers are given as a decimal number, and they must be omitted if the standard port numbers are used: 80 for http and 443 for https. We call this limited URL the "site". All URLs that share the same scheme, hostname and port are considered to be a part of the site and thus belong to the web asset. Example: the asset with the site `https://www.google.com` contains all these URLs: * `https://www.google.com/` * `https://www.google.com:443/` * `https://www.google.com/foo` * `https://www.google.com/foo?bar` * `https://www.google.com/foo#bar` * `https://user@password:www.google.com/` But it does not contain these URLs: * `http://www.google.com/` (wrong scheme) * `https://google.com/` (hostname does not match) * `https://www.google.com:444/` (port does not match) REQUIRED</param>
		/// <returns>Successful response</returns>
		public async Task<CheckResponse> Digitalassetlinks_assetlinks_checkAsync(string relation, string source_androidApp_certificate_sha256Fingerprint, string source_androidApp_packageName, string source_web_site, string target_androidApp_certificate_sha256Fingerprint, string target_androidApp_packageName, string target_web_site, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/assetlinks:check?relation=" + (relation==null? "" : System.Uri.EscapeDataString(relation))+"&source.androidApp.certificate.sha256Fingerprint=" + (source_androidApp_certificate_sha256Fingerprint==null? "" : System.Uri.EscapeDataString(source_androidApp_certificate_sha256Fingerprint))+"&source.androidApp.packageName=" + (source_androidApp_packageName==null? "" : System.Uri.EscapeDataString(source_androidApp_packageName))+"&source.web.site=" + (source_web_site==null? "" : System.Uri.EscapeDataString(source_web_site))+"&target.androidApp.certificate.sha256Fingerprint=" + (target_androidApp_certificate_sha256Fingerprint==null? "" : System.Uri.EscapeDataString(target_androidApp_certificate_sha256Fingerprint))+"&target.androidApp.packageName=" + (target_androidApp_packageName==null? "" : System.Uri.EscapeDataString(target_androidApp_packageName))+"&target.web.site=" + (target_web_site==null? "" : System.Uri.EscapeDataString(target_web_site));
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
				return JsonSerializer.Deserialize<CheckResponse>(streamContent, jsonSerializerSettings);
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
		
		/// <summary>
		/// Retrieves a list of all statements from a given source that match the specified target and statement string. The API guarantees that all statements with secure source assets, such as HTTPS websites or Android apps, have been made in a secure way by the owner of those assets, as described in the [Digital Asset Links technical design specification](https://github.com/google/digitalassetlinks/blob/master/well-known/details.md). Specifically, you should consider that for insecure websites (that is, where the URL starts with `http://` instead of `https://`), this guarantee cannot be made. The `List` command is most useful in cases where the API client wants to know all the ways in which two assets are related, or enumerate all the relationships from a particular source asset. Example: a feature that helps users navigate to related items. When a mobile app is running on a device, the feature would make it easy to navigate to the corresponding web site or Google+ profile.
		/// Digitalassetlinks_statements_list v1/statements:list
		/// </summary>
		/// <param name="relation">Use only associations that match the specified relation. See the [`Statement`](#Statement) message for a detailed definition of relation strings. For a query to match a statement, one of the following must be true: * both the query's and the statement's relation strings match exactly, or * the query's relation string is empty or missing. Example: A query with relation `delegate_permission/common.handle_all_urls` matches an asset link with relation `delegate_permission/common.handle_all_urls`.</param>
		/// <param name="source_androidApp_certificate_sha256Fingerprint">The uppercase SHA-265 fingerprint of the certificate. From the PEM certificate, it can be acquired like this: $ keytool -printcert -file $CERTFILE | grep SHA256: SHA256: 14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83: \ 42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5 or like this: $ openssl x509 -in $CERTFILE -noout -fingerprint -sha256 SHA256 Fingerprint=14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64: \ 16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5 In this example, the contents of this field would be `14:6D:E9:83:C5:73: 06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF: 44:E5`. If these tools are not available to you, you can convert the PEM certificate into the DER format, compute the SHA-256 hash of that string and represent the result as a hexstring (that is, uppercase hexadecimal representations of each octet, separated by colons).</param>
		/// <param name="source_androidApp_packageName">Android App assets are naturally identified by their Java package name. For example, the Google Maps app uses the package name `com.google.android.apps.maps`. REQUIRED</param>
		/// <param name="source_web_site">Web assets are identified by a URL that contains only the scheme, hostname and port parts. The format is http[s]://[:] Hostnames must be fully qualified: they must end in a single period ("`.`"). Only the schemes "http" and "https" are currently allowed. Port numbers are given as a decimal number, and they must be omitted if the standard port numbers are used: 80 for http and 443 for https. We call this limited URL the "site". All URLs that share the same scheme, hostname and port are considered to be a part of the site and thus belong to the web asset. Example: the asset with the site `https://www.google.com` contains all these URLs: * `https://www.google.com/` * `https://www.google.com:443/` * `https://www.google.com/foo` * `https://www.google.com/foo?bar` * `https://www.google.com/foo#bar` * `https://user@password:www.google.com/` But it does not contain these URLs: * `http://www.google.com/` (wrong scheme) * `https://google.com/` (hostname does not match) * `https://www.google.com:444/` (port does not match) REQUIRED</param>
		/// <returns>Successful response</returns>
		public async Task<ListResponse> Digitalassetlinks_statements_listAsync(string relation, string source_androidApp_certificate_sha256Fingerprint, string source_androidApp_packageName, string source_web_site, Action<System.Net.Http.Headers.HttpRequestHeaders> handleHeaders = null)
		{
			var requestUri = "v1/statements:list?relation=" + (relation==null? "" : System.Uri.EscapeDataString(relation))+"&source.androidApp.certificate.sha256Fingerprint=" + (source_androidApp_certificate_sha256Fingerprint==null? "" : System.Uri.EscapeDataString(source_androidApp_certificate_sha256Fingerprint))+"&source.androidApp.packageName=" + (source_androidApp_packageName==null? "" : System.Uri.EscapeDataString(source_androidApp_packageName))+"&source.web.site=" + (source_web_site==null? "" : System.Uri.EscapeDataString(source_web_site));
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
				return JsonSerializer.Deserialize<ListResponse>(streamContent, jsonSerializerSettings);
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