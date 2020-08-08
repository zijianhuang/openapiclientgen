import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * Contains metadata about the user who performed an action, such as creating
	 * a release or finalizing a version.
	 */
	export interface ActingUser {

		/** The email address of the user when the user performed the action. */
		email?: string;

		/**
		 * A profile image URL for the user. May not be present if the user has
		 * changed their email address or deleted their account.
		 */
		imageUrl?: string;
	}


	/** Represents a DNS certificate challenge. */
	export interface CertDnsChallenge {

		/** The domain name upon which the DNS challenge must be satisfied. */
		domainName?: string;

		/**
		 * The value that must be present as a TXT record on the domain name to
		 * satisfy the challenge.
		 */
		token?: string;
	}


	/** Represents an HTTP certificate challenge. */
	export interface CertHttpChallenge {

		/**
		 * The URL path on which to serve the specified token to satisfy the
		 * certificate challenge.
		 */
		path?: string;

		/**
		 * The token to serve at the specified URL path to satisfy the certificate
		 * challenge.
		 */
		token?: string;
	}


	/** The request sent to CloneVersion. */
	export interface CloneVersionRequest {

		/** A representation of filter path. */
		exclude?: PathFilter;

		/** If true, immediately finalize the version after cloning is complete. */
		finalize?: boolean;

		/** A representation of filter path. */
		include?: PathFilter;

		/**
		 * Required. The name of the version to be cloned, in the format:
		 * `sites/{site}/versions/{version}`
		 */
		sourceVersion?: string;
	}


	/** A representation of filter path. */
	export interface PathFilter {

		/** An array of regexes to filter by. */
		regexes?: Array<string>;
	}


	/**
	 * A configured rewrite that directs requests to a Cloud Run service. If the
	 * Cloud Run service does not exist when setting or updating your Firebase
	 * Hosting configuration, then the request fails. Any errors from the Cloud Run
	 * service are passed to the end user (for example, if you delete a service, any
	 * requests directed to that service receive a `404` error).
	 */
	export interface CloudRunRewrite {

		/**
		 * Optional. User-provided region where the Cloud Run service is hosted.<br>
		 * Defaults to `us-central1` if not supplied.
		 */
		region?: string;

		/** Required. User-defined ID of the Cloud Run service. */
		serviceId?: string;
	}


	/** The intended behavior and status information of a domain. */
	export interface Domain {

		/** Required. The domain name of the association. */
		domainName?: string;

		/**
		 * Defines the behavior of a domain-level redirect. Domain redirects preserve
		 * the path of the redirect but replace the requested domain with the one
		 * specified in the redirect configuration.
		 */
		domainRedirect?: DomainRedirect;

		/** The current certificate provisioning status information for a domain. */
		provisioning?: DomainProvisioning;

		/** Required. The site name of the association. */
		site?: string;

		/** Output only. Additional status of the domain association. */
		status?: DomainStatus;

		/** Output only. The time at which the domain was last updated. */
		updateTime?: string;
	}


	/**
	 * Defines the behavior of a domain-level redirect. Domain redirects preserve
	 * the path of the redirect but replace the requested domain with the one
	 * specified in the redirect configuration.
	 */
	export interface DomainRedirect {

		/** Required. The domain name to redirect to. */
		domainName?: string;

		/** Required. The redirect status code. */
		type?: DomainRedirectType;
	}

	export enum DomainRedirectType { REDIRECT_TYPE_UNSPECIFIED = 0, MOVED_PERMANENTLY = 1 }


	/** The current certificate provisioning status information for a domain. */
	export interface DomainProvisioning {

		/**
		 * The TXT records (for the certificate challenge) that were found at the last
		 * DNS fetch.
		 */
		certChallengeDiscoveredTxt?: Array<string>;

		/** Represents a DNS certificate challenge. */
		certChallengeDns?: CertDnsChallenge;

		/** Represents an HTTP certificate challenge. */
		certChallengeHttp?: CertHttpChallenge;

		/**
		 * The certificate provisioning status; updated when Firebase Hosting
		 * provisions an SSL certificate for the domain.
		 */
		certStatus?: DomainProvisioningCertStatus;

		/** The IPs found at the last DNS fetch. */
		discoveredIps?: Array<string>;

		/** The time at which the last DNS fetch occurred. */
		dnsFetchTime?: string;

		/** The DNS record match status as of the last DNS fetch. */
		dnsStatus?: DomainProvisioningDnsStatus;

		/** The list of IPs to which the domain is expected to resolve. */
		expectedIps?: Array<string>;
	}

	export enum DomainProvisioningCertStatus { CERT_STATUS_UNSPECIFIED = 0, CERT_PENDING = 1, CERT_MISSING = 2, CERT_PROCESSING = 3, CERT_PROPAGATING = 4, CERT_ACTIVE = 5, CERT_ERROR = 6 }

	export enum DomainProvisioningDnsStatus { DNS_STATUS_UNSPECIFIED = 0, DNS_PENDING = 1, DNS_MISSING = 2, DNS_PARTIAL_MATCH = 3, DNS_MATCH = 4, DNS_EXTRANEOUS_MATCH = 5 }

	export enum DomainStatus { DOMAIN_STATUS_UNSPECIFIED = 0, DOMAIN_CHANGE_PENDING = 1, DOMAIN_ACTIVE = 2, DOMAIN_VERIFICATION_REQUIRED = 3, DOMAIN_VERIFICATION_LOST = 4 }


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/**
	 * A [`header`](/docs/hosting/full-config#headers) defines custom headers to
	 * add to a response should the request URL path match the pattern.
	 */
	export interface Header {

		/**
		 * The user-supplied [glob
		 * pattern](/docs/hosting/full-config#glob_pattern_matching) to match
		 * against the request URL path.
		 */
		glob?: string;

		/** Required. The additional headers to add to the response. */
		headers?: {[id: string]: any };

		/**
		 * The user-supplied RE2 regular expression to match against the request
		 * URL path.
		 */
		regex?: string;
	}


	/** The response to listing Domains. */
	export interface ListDomainsResponse {

		/** The list of domains, if any exist. */
		domains?: Array<Domain>;

		/** The pagination token, if more results exist. */
		nextPageToken?: string;
	}


	/** The response when listing Releases. */
	export interface ListReleasesResponse {

		/**
		 * If there are additional releases remaining beyond the ones in this
		 * response, then supply this token in the next
		 * [`list`](../sites.versions.files/list) call to continue with the next set
		 * of releases.
		 */
		nextPageToken?: string;

		/** The list of hashes of files that still need to be uploaded, if any exist. */
		releases?: Array<Release>;
	}


	/**
	 * A `Release` is a particular
	 * [collection of configurations and files](sites.versions)
	 * that is set to be public at a particular time.
	 */
	export interface Release {

		/**
		 * The deploy description when the release was created. The value can be up to
		 * 512&nbsp;characters.
		 */
		message?: string;

		/**
		 * Output only. The unique identifier for the release, in the format:
		 * <code>sites/<var>site-name</var>/releases/<var>releaseID</var></code>
		 * This name is provided in the response body when you call the
		 * [`CreateRelease`](sites.releases/create) endpoint.
		 */
		name?: string;

		/** Output only. The time at which the version is set to be public. */
		releaseTime?: string;

		/**
		 * Contains metadata about the user who performed an action, such as creating
		 * a release or finalizing a version.
		 */
		releaseUser?: ActingUser;

		/**
		 * Explains the reason for the release.
		 * <br>Specify a value for this field only when creating a `SITE_DISABLE`
		 * type release.
		 */
		type?: ReleaseType;

		/**
		 * A `Version` is the collection of configuration and
		 * [static files](sites.versions.files) that determine how a site is displayed.
		 */
		version?: Version;
	}

	export enum ReleaseType { TYPE_UNSPECIFIED = 0, DEPLOY = 1, ROLLBACK = 2, SITE_DISABLE = 3 }


	/**
	 * A `Version` is the collection of configuration and
	 * [static files](sites.versions.files) that determine how a site is displayed.
	 */
	export interface Version {

		/**
		 * The configuration for how incoming requests to a site should be routed and
		 * processed before serving content. The patterns are matched and applied
		 * according to a specific
		 * [priority order](/docs/hosting/full-config#hosting_priority_order).
		 */
		config?: ServingConfig;

		/** Output only. The time at which the version was created. */
		createTime?: string;

		/**
		 * Contains metadata about the user who performed an action, such as creating
		 * a release or finalizing a version.
		 */
		createUser?: ActingUser;

		/** Output only. The time at which the version was `DELETED`. */
		deleteTime?: string;

		/**
		 * Contains metadata about the user who performed an action, such as creating
		 * a release or finalizing a version.
		 */
		deleteUser?: ActingUser;

		/**
		 * Output only. The total number of files associated with the version.
		 * <br>This value is calculated after a version is `FINALIZED`.
		 */
		fileCount?: string;

		/** Output only. The time at which the version was `FINALIZED`. */
		finalizeTime?: string;

		/**
		 * Contains metadata about the user who performed an action, such as creating
		 * a release or finalizing a version.
		 */
		finalizeUser?: ActingUser;

		/** The labels used for extra metadata and/or filtering. */
		labels?: {[id: string]: any };

		/**
		 * The unique identifier for a version, in the format:
		 * <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
		 * This name is provided in the response body when you call the
		 * [`CreateVersion`](../sites.versions/create) endpoint.
		 */
		name?: string;

		/**
		 * Version preview configuration. If active and unexpired,
		 * this version will be accessible via a custom URL even
		 * if it is not the currently released version.
		 */
		preview?: PreviewConfig;

		/**
		 * The deploy status of a version.
		 * <br>
		 * <br>For a successful deploy, call the
		 * [`CreateVersion`](sites.versions/create) endpoint to make a new version
		 * (`CREATED` status),
		 * [upload all desired files](sites.versions/populateFiles) to the version,
		 * then [update](sites.versions/patch) the version to the `FINALIZED` status.
		 * <br>
		 * <br>Note that if you leave the version in the `CREATED` state for more
		 * than 12&nbsp;hours, the system will automatically mark the version as
		 * `ABANDONED`.
		 * <br>
		 * <br>You can also change the status of a version to `DELETED` by calling the
		 * [`DeleteVersion`](sites.versions/delete) endpoint.
		 */
		status?: VersionStatus;

		/**
		 * Output only. The total stored bytesize of the version.
		 * <br>This value is calculated after a version is `FINALIZED`.
		 */
		versionBytes?: string;
	}


	/**
	 * The configuration for how incoming requests to a site should be routed and
	 * processed before serving content. The patterns are matched and applied
	 * according to a specific
	 * [priority order](/docs/hosting/full-config#hosting_priority_order).
	 */
	export interface ServingConfig {

		/** How to handle well known App Association files. */
		appAssociation?: ServingConfigAppAssociation;

		/** Defines whether to drop the file extension from uploaded files. */
		cleanUrls?: boolean;

		/**
		 * A list of custom response headers that are added to the content if the
		 * request URL path matches the glob.
		 */
		headers?: Array<Header>;

		/**
		 * A list of globs that will cause the response to redirect to another
		 * location.
		 */
		redirects?: Array<Redirect>;

		/**
		 * A list of rewrites that will act as if the service were given the
		 * destination URL.
		 */
		rewrites?: Array<Rewrite>;

		/** Defines how to handle a trailing slash in the URL path. */
		trailingSlashBehavior?: ServingConfigTrailingSlashBehavior;
	}

	export enum ServingConfigAppAssociation { AUTO = 0, NONE = 1 }


	/**
	 * A [`redirect`](/docs/hosting/full-config#redirects) represents the
	 * configuration for returning an HTTP redirect response given a matching
	 * request URL path.
	 */
	export interface Redirect {

		/**
		 * The user-supplied [glob
		 * pattern](/docs/hosting/full-config#glob_pattern_matching) to match
		 * against the request URL path.
		 */
		glob?: string;

		/**
		 * Required. The value to put in the HTTP location header of the response.
		 * <br>The location can contain capture group values from the pattern using
		 * a `:` prefix to identify the segment and an optional `*` to capture the
		 * rest of the URL.
		 * For example:
		 * <code>"glob": "/:capture*",
		 * <br>"statusCode": 301,
		 * <br>"location": "https://example.com/foo/:capture"</code>
		 */
		location?: string;

		/**
		 * The user-supplied RE2 regular expression to match against the request
		 * URL path.
		 */
		regex?: string;

		/**
		 * Required. The status HTTP code to return in the response. It must be a
		 * valid 3xx status code.
		 */
		statusCode?: number;
	}


	/**
	 * A [`rewrite`](/docs/hosting/full-config#rewrites) represents an internal
	 * content rewrite on the version. If the pattern matches, the request will be
	 * handled as if it were to the destination path specified in the
	 * configuration.
	 */
	export interface Rewrite {

		/** The request will be forwarded to Firebase Dynamic Links. */
		dynamicLinks?: boolean;

		/**
		 * The function to proxy requests to. Must match the exported function
		 * name exactly.
		 */
		function?: string;

		/**
		 * The user-supplied [glob
		 * pattern](/docs/hosting/full-config#glob_pattern_matching) to match
		 * against the request URL path.
		 */
		glob?: string;

		/** The URL path to rewrite the request to. */
		path?: string;

		/**
		 * The user-supplied RE2 regular expression to match against the request
		 * URL path.
		 */
		regex?: string;

		/**
		 * A configured rewrite that directs requests to a Cloud Run service. If the
		 * Cloud Run service does not exist when setting or updating your Firebase
		 * Hosting configuration, then the request fails. Any errors from the Cloud Run
		 * service are passed to the end user (for example, if you delete a service, any
		 * requests directed to that service receive a `404` error).
		 */
		run?: CloudRunRewrite;
	}

	export enum ServingConfigTrailingSlashBehavior { TRAILING_SLASH_BEHAVIOR_UNSPECIFIED = 0, ADD = 1, REMOVE = 2 }


	/**
	 * Version preview configuration. If active and unexpired,
	 * this version will be accessible via a custom URL even
	 * if it is not the currently released version.
	 */
	export interface PreviewConfig {

		/** If true, preview URLs are enabled for this version. */
		active?: boolean;

		/**
		 * Indicates the expiration time for previewing this
		 * version; preview URL requests received after this time will 404.
		 */
		expireTime?: string;
	}

	export enum VersionStatus { VERSION_STATUS_UNSPECIFIED = 0, CREATED = 1, FINALIZED = 2, DELETED = 3, ABANDONED = 4, EXPIRED = 5, CLONING = 6 }


	/** The response when listing a Version's Files.. */
	export interface ListVersionFilesResponse {

		/** The list path/hashes in the specified version. */
		files?: Array<VersionFile>;

		/** The pagination token, if more results exist. */
		nextPageToken?: string;
	}


	/** A static content file that is part of a version. */
	export interface VersionFile {

		/** The SHA256 content hash of the file. */
		hash?: string;

		/** The URI at which the file's content should display. */
		path?: string;

		/**
		 * Output only. The current status of a particular file in the specified
		 * version.
		 * <br>The value will be either `pending upload` or `uploaded`.
		 */
		status?: VersionFileStatus;
	}

	export enum VersionFileStatus { STATUS_UNSPECIFIED = 0, EXPECTED = 1, ACTIVE = 2 }


	/** The response when listing Versions. */
	export interface ListVersionsResponse {

		/** The pagination token, if more results exist */
		nextPageToken?: string;

		/** The list of versions, if any exist. */
		versions?: Array<Version>;
	}


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any };

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string;

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
		response?: {[id: string]: any };
	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string;
	}


	/** The request to populate a Version's Files. */
	export interface PopulateVersionFilesRequest {

		/**
		 * A set of file paths to the hashes corresponding to assets that should be
		 * added to the version. Note that a file path to an empty hash will remove
		 * the path from the version. Calculate a hash by Gzipping the file then
		 * taking the SHA256 hash of the newly compressed file.
		 */
		files?: {[id: string]: any };
	}


	/** The response to a PopulateVersionFilesRequest. */
	export interface PopulateVersionFilesResponse {

		/**
		 * The content hashes of the specified files that need to be uploaded to the
		 * specified endpoint.
		 */
		uploadRequiredHashes?: Array<string>;

		/**
		 * The URL to which the files should be uploaded, in the format:
		 * <br>"https://upload-firebasehosting.googleapis.com/upload/sites/<var>site-name</var>/versions/<var>versionID</var>/files".
		 * <br>Perform a multipart `POST` of the Gzipped file contents to the URL
		 * using a forward slash and the hash of the file appended to the end.
		 */
		uploadUrl?: string;
	}


	/**
	 * A `SiteConfig` contains metadata associated with a specific site that
	 * controls Firebase Hosting serving behavior
	 */
	export interface SiteConfig {

		/**
		 * The number of FINALIZED versions that will be held for a site before
		 * automatic deletion. When a new version is deployed, content for versions
		 * in storage in excess of this number will be deleted, and will no longer be
		 * billed for storage usage. Oldest versions will be deleted first; sites are
		 * created with an unlimited number of max_versions by default.
		 */
		maxVersions?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes the specified version.
		 * Delete v1beta1/{name}
		 * @param {string} name Required. The name of the version to be deleted, in the format:
		 * <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
		 * @return {void} Successful response
		 */
		Firebasehosting_sites_versions_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a domain mapping on the specified site.
		 * Get v1beta1/{name}
		 * @param {string} name Required. The name of the domain configuration to get.
		 * @return {void} Successful response
		 */
		Firebasehosting_sites_domains_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified metadata for a version. Note that this method will
		 * fail with `FAILED_PRECONDITION` in the event of an invalid state
		 * transition. The only valid transition for a version is currently from a
		 * `CREATED` status to a `FINALIZED` status.
		 * Use [`DeleteVersion`](../sites.versions/delete) to set the status of a
		 * version to `DELETED`.
		 * Patch v1beta1/{name}
		 * @param {string} name The unique identifier for a version, in the format:
		 * <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
		 * This name is provided in the response body when you call the
		 * [`CreateVersion`](../sites.versions/create) endpoint.
		 * @param {string} updateMask A set of field names from your [version](../sites.versions) that you want
		 * to update.
		 * <br>A field will be overwritten if, and only if, it's in the mask.
		 * <br>If a mask is not provided then a default mask of only
		 * [`status`](../sites.versions#Version.FIELDS.status) will be used.
		 * @return {void} Successful response
		 */
		Firebasehosting_sites_versions_patch(name: string, updateMask: string, requestBody: Version): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified domain mapping, creating the mapping as if it does
		 * not exist.
		 * Put v1beta1/{name}
		 * @param {string} name Required. The name of the domain association to update or create, if an
		 * association doesn't already exist.
		 * @return {void} Successful response
		 */
		Firebasehosting_sites_domains_update(name: string, requestBody: Domain): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the domains for the specified site.
		 * Get v1beta1/{parent}/domains
		 * @param {string} parent Required. The parent for which to list domains, in the format:
		 * <code>sites/<var>site-name</var></code>
		 * @param {number} pageSize The page size to return. Defaults to 50.
		 * @param {string} pageToken The next_page_token from a previous request, if provided.
		 * @return {void} Successful response
		 */
		Firebasehosting_sites_domains_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/domains&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a domain mapping on the specified site.
		 * Post v1beta1/{parent}/domains
		 * @param {string} parent Required. The parent to create the domain association for, in the format:
		 * <code>sites/<var>site-name</var></code>
		 * @return {void} Successful response
		 */
		Firebasehosting_sites_domains_create(parent: string, requestBody: Domain): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/domains', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the remaining files to be uploaded for the specified version.
		 * Get v1beta1/{parent}/files
		 * @param {string} parent Required. The parent to list files for, in the format:
		 * <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
		 * @param {number} pageSize The page size to return. Defaults to 1000.
		 * @param {string} pageToken The next_page_token from a previous request, if provided. This will be the
		 * encoded version of a firebase.hosting.proto.metadata.ListFilesPageToken.
		 * @param {VersionFileStatus} status The type of files in the version that should be listed.
		 * @return {void} Successful response
		 */
		Firebasehosting_sites_versions_files_list(parent: string, pageSize: number, pageToken: string, status: VersionFileStatus): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/files&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&status=' + status, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the releases that have been created on the specified site.
		 * Get v1beta1/{parent}/releases
		 * @param {string} parent Required. The parent for which to list files, in the format:
		 * <code>sites/<var>site-name</var></code>
		 * @param {number} pageSize The page size to return. Defaults to 100.
		 * @param {string} pageToken The next_page_token from a previous request, if provided.
		 * @return {void} Successful response
		 */
		Firebasehosting_sites_releases_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/releases&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new release which makes the content of the specified version
		 * actively display on the appropriate URL(s).
		 * Post v1beta1/{parent}/releases
		 * @param {string} parent Required. The site that the release belongs to, in the format:
		 * <code>sites/<var>site-name</var></code>
		 * @param {string} versionName The unique identifier for a version, in the format:
		 * <code>/sites/<var>site-name</var>/versions/<var>versionID</var></code>
		 * The <var>site-name</var> in this version identifier must match the
		 * <var>site-name</var> in the `parent` parameter.
		 * <br>
		 * <br>This query parameter must be empty if the `type` field in the
		 * request body is `SITE_DISABLE`.
		 * @return {void} Successful response
		 */
		Firebasehosting_sites_releases_create(parent: string, versionName: string, requestBody: Release): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/releases&versionName=' + (versionName == null ? '' : encodeURIComponent(versionName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the versions that have been created on the specified site.
		 * Will include filtering in the future.
		 * Get v1beta1/{parent}/versions
		 * @param {string} parent Required. The parent for which to list files, in the format:
		 * <code>sites/<var>site-name</var></code>
		 * @param {string} filter The filter string used to return a subset of versions in the response.
		 * Currently supported fields for filtering are: name, status,
		 * and create_time. Filter processing will be implemented in accordance
		 * with go/filtering.
		 * @param {number} pageSize The maximum number of versions to return. The service may return fewer than
		 * this value.
		 * If unspecified, at most 25 versions will be returned.
		 * The maximum value is 100; values above 100 will be coerced to 100
		 * @param {string} pageToken The next_page_token from a previous request, if provided.
		 * @return {void} Successful response
		 */
		Firebasehosting_sites_versions_list(parent: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new version for a site.
		 * Post v1beta1/{parent}/versions
		 * @param {string} parent Required. The parent to create the version for, in the format:
		 * <code>sites/<var>site-name</var></code>
		 * @param {string} sizeBytes The self-reported size of the version. This value is used for a pre-emptive
		 * quota check for legacy version uploads.
		 * @param {string} versionId A unique id for the new version. This is only specified for legacy version
		 * creations.
		 * @return {void} Successful response
		 */
		Firebasehosting_sites_versions_create(parent: string, sizeBytes: string, versionId: string, requestBody: Version): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions&sizeBytes=' + (sizeBytes == null ? '' : encodeURIComponent(sizeBytes)) + '&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new version on the target site using the content
		 * of the specified version.
		 * Post v1beta1/{parent}/versions:clone
		 * @param {string} parent Required. The target site where the cloned version will reside,
		 * in the format: `sites/{site}`
		 * @return {void} Successful response
		 */
		Firebasehosting_sites_versions_clone(parent: string, requestBody: CloneVersionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions:clone', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds content files to a version.
		 * Post v1beta1/{parent}:populateFiles
		 * @param {string} parent Required. The version to add files to, in the format:
		 * <code>sites/<var>site-name</var>/versions/<var>versionID</var></code>
		 * @return {void} Successful response
		 */
		Firebasehosting_sites_versions_populateFiles(parent: string, requestBody: PopulateVersionFilesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':populateFiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

