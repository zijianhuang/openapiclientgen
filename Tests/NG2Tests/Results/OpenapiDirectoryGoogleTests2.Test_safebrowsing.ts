import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** The expected state of a client's local database. */
	export interface Checksum {

		/**
		 * The SHA256 hash of the client state; that is, of the sorted list of all
		 * hashes present in the database.
		 */
		sha256?: string | null;
	}


	/** The client metadata associated with Safe Browsing API requests. */
	export interface ClientInfo {

		/**
		 * A client ID that (hopefully) uniquely identifies the client implementation
		 * of the Safe Browsing API.
		 */
		clientId?: string | null;

		/** The version of the client implementation. */
		clientVersion?: string | null;
	}


	/** The constraints for this update. */
	export interface Constraints {

		/**
		 * A client's physical location, expressed as a ISO 31166-1 alpha-2
		 * region code.
		 */
		deviceLocation?: string | null;

		/**
		 * Requests the lists for a specific language. Expects ISO 639 alpha-2
		 * format.
		 */
		language?: string | null;

		/**
		 * Sets the maximum number of entries that the client is willing to have
		 * in the local database for the specified list. This should be a power of
		 * 2 between 2**10 and 2**20. If zero, no database size limit is set.
		 */
		maxDatabaseEntries?: number | null;

		/**
		 * The maximum size in number of entries. The update will not contain more
		 * entries than this value.  This should be a power of 2 between 2**10 and
		 * 2**20.  If zero, no update size limit is set.
		 */
		maxUpdateEntries?: number | null;

		/**
		 * Requests the list for a specific geographic location. If not set the
		 * server may pick that value based on the user's IP address. Expects ISO
		 * 3166-1 alpha-2 format.
		 */
		region?: string | null;

		/** The compression types supported by the client. */
		supportedCompressions?: Array<string> | null;
	}


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
	 * Describes a Safe Browsing API update request. Clients can request updates for
	 * multiple lists in a single request.
	 * NOTE: Field index 2 is unused.
	 * NEXT: 5
	 */
	export interface FetchThreatListUpdatesRequest {

		/** The client metadata associated with Safe Browsing API requests. */
		client?: ClientInfo | null;

		/** The requested threat list updates. */
		listUpdateRequests?: Array<ListUpdateRequest> | null;
	}


	/** A single list update request. */
	export interface ListUpdateRequest {

		/** The constraints for this update. */
		constraints?: Constraints | null;

		/** The type of platform at risk by entries present in the list. */
		platformType?: ListUpdateRequestPlatformType | null;

		/**
		 * The current state of the client for the requested list (the encrypted
		 * client state that was received from the last successful list update).
		 */
		state?: string | null;

		/** The types of entries present in the list. */
		threatEntryType?: ListUpdateRequestThreatEntryType | null;

		/** The type of threat posed by entries present in the list. */
		threatType?: ListUpdateRequestThreatType | null;
	}

	export enum ListUpdateRequestPlatformType { PLATFORM_TYPE_UNSPECIFIED = 0, WINDOWS = 1, LINUX = 2, ANDROID = 3, OSX = 4, IOS = 5, ANY_PLATFORM = 6, ALL_PLATFORMS = 7, CHROME = 8 }

	export enum ListUpdateRequestThreatEntryType { THREAT_ENTRY_TYPE_UNSPECIFIED = 0, URL = 1, EXECUTABLE = 2, IP_RANGE = 3, CHROME_EXTENSION = 4, FILENAME = 5, CERT = 6 }

	export enum ListUpdateRequestThreatType { THREAT_TYPE_UNSPECIFIED = 0, MALWARE = 1, SOCIAL_ENGINEERING = 2, UNWANTED_SOFTWARE = 3, POTENTIALLY_HARMFUL_APPLICATION = 4, SOCIAL_ENGINEERING_INTERNAL = 5, API_ABUSE = 6, MALICIOUS_BINARY = 7, CSD_WHITELIST = 8, CSD_DOWNLOAD_WHITELIST = 9, CLIENT_INCIDENT = 10, CLIENT_INCIDENT_WHITELIST = 11, APK_MALWARE_OFFLINE = 12, SUBRESOURCE_FILTER = 13, SUSPICIOUS = 14, TRICK_TO_BILL = 15, HIGH_CONFIDENCE_ALLOWLIST = 16 }

	export interface FetchThreatListUpdatesResponse {

		/** The list updates requested by the clients. */
		listUpdateResponses?: Array<ListUpdateResponse> | null;

		/**
		 * The minimum duration the client must wait before issuing any update
		 * request. If this field is not set clients may update as soon as they want.
		 */
		minimumWaitDuration?: string | null;
	}


	/** An update to an individual list. */
	export interface ListUpdateResponse {

		/**
		 * A set of entries to add to a local threat type's list. Repeated to allow
		 * for a combination of compressed and raw data to be sent in a single
		 * response.
		 */
		additions?: Array<ThreatEntrySet> | null;

		/** The expected state of a client's local database. */
		checksum?: Checksum | null;

		/** The new client state, in encrypted format. Opaque to clients. */
		newClientState?: string | null;

		/** The platform type for which data is returned. */
		platformType?: ListUpdateRequestPlatformType | null;

		/**
		 * A set of entries to remove from a local threat type's list. In practice,
		 * this field is empty or contains exactly one ThreatEntrySet.
		 */
		removals?: Array<ThreatEntrySet> | null;

		/**
		 * The type of response. This may indicate that an action is required by the
		 * client when the response is received.
		 */
		responseType?: ListUpdateResponseResponseType | null;

		/** The format of the threats. */
		threatEntryType?: ListUpdateRequestThreatEntryType | null;

		/** The threat type for which data is returned. */
		threatType?: ListUpdateRequestThreatType | null;
	}


	/**
	 * A set of threats that should be added or removed from a client's local
	 * database.
	 */
	export interface ThreatEntrySet {

		/** The compression type for the entries in this set. */
		compressionType?: ThreatEntrySetCompressionType | null;

		/**
		 * The uncompressed threat entries in hash format of a particular prefix length.
		 * Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4
		 * bytes, but some hashes are lengthened if they collide with the hash of a
		 * popular URL.
		 * Used for sending ThreatEntrySet to clients that do not support compression,
		 * or when sending non-4-byte hashes to clients that do support compression.
		 */
		rawHashes?: RawHashes | null;

		/** A set of raw indices to remove from a local list. */
		rawIndices?: RawIndices | null;

		/**
		 * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or
		 * compressed removal indices.
		 */
		riceHashes?: RiceDeltaEncoding | null;

		/**
		 * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or
		 * compressed removal indices.
		 */
		riceIndices?: RiceDeltaEncoding | null;
	}

	export enum ThreatEntrySetCompressionType { COMPRESSION_TYPE_UNSPECIFIED = 0, RAW = 1, RICE = 2 }


	/**
	 * The uncompressed threat entries in hash format of a particular prefix length.
	 * Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4
	 * bytes, but some hashes are lengthened if they collide with the hash of a
	 * popular URL.
	 * Used for sending ThreatEntrySet to clients that do not support compression,
	 * or when sending non-4-byte hashes to clients that do support compression.
	 */
	export interface RawHashes {

		/**
		 * The number of bytes for each prefix encoded below.  This field can be
		 * anywhere from 4 (shortest prefix) to 32 (full SHA256 hash).
		 */
		prefixSize?: number | null;

		/**
		 * The hashes, in binary format, concatenated into one long string. Hashes are
		 * sorted in lexicographic order. For JSON API users, hashes are
		 * base64-encoded.
		 */
		rawHashes?: string | null;
	}


	/** A set of raw indices to remove from a local list. */
	export interface RawIndices {

		/** The indices to remove from a lexicographically-sorted local list. */
		indices?: Array<number> | null;
	}


	/**
	 * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or
	 * compressed removal indices.
	 */
	export interface RiceDeltaEncoding {

		/** The encoded deltas that are encoded using the Golomb-Rice coder. */
		encodedData?: string | null;

		/**
		 * The offset of the first entry in the encoded data, or, if only a single
		 * integer was encoded, that single integer's value. If the field is empty or
		 * missing, assume zero.
		 */
		firstValue?: string | null;

		/**
		 * The number of entries that are delta encoded in the encoded data. If only a
		 * single integer was encoded, this will be zero and the single value will be
		 * stored in `first_value`.
		 */
		numEntries?: number | null;

		/**
		 * The Golomb-Rice parameter, which is a number between 2 and 28. This field
		 * is missing (that is, zero) if `num_entries` is zero.
		 */
		riceParameter?: number | null;
	}

	export enum ListUpdateResponseResponseType { RESPONSE_TYPE_UNSPECIFIED = 0, PARTIAL_UPDATE = 1, FULL_UPDATE = 2 }


	/** Request to return full hashes matched by the provided hash prefixes. */
	export interface FindFullHashesRequest {

		/** The client metadata associated with Safe Browsing API requests. */
		apiClient?: ClientInfo | null;

		/** The client metadata associated with Safe Browsing API requests. */
		client?: ClientInfo | null;

		/** The current client states for each of the client's local threat lists. */
		clientStates?: Array<string> | null;

		/**
		 * The information regarding one or more threats that a client submits when
		 * checking for matches in threat lists.
		 */
		threatInfo?: ThreatInfo | null;
	}


	/**
	 * The information regarding one or more threats that a client submits when
	 * checking for matches in threat lists.
	 */
	export interface ThreatInfo {

		/** The platform types to be checked. */
		platformTypes?: Array<ListUpdateRequestPlatformType> | null;

		/** The threat entries to be checked. */
		threatEntries?: Array<ThreatEntry> | null;

		/** The entry types to be checked. */
		threatEntryTypes?: Array<ListUpdateRequestThreatEntryType> | null;

		/** The threat types to be checked. */
		threatTypes?: Array<ListUpdateRequestThreatType> | null;
	}


	/**
	 * An individual threat; for example, a malicious URL or its hash
	 * representation. Only one of these fields should be set.
	 */
	export interface ThreatEntry {

		/**
		 * The digest of an executable in SHA256 format. The API supports both
		 * binary and hex digests. For JSON requests, digests are base64-encoded.
		 */
		digest?: string | null;

		/**
		 * A hash prefix, consisting of the most significant 4-32 bytes of a SHA256
		 * hash. This field is in binary format. For JSON requests, hashes are
		 * base64-encoded.
		 */
		hash?: string | null;

		/** A URL. */
		url?: string | null;
	}

	export interface FindFullHashesResponse {

		/** The full hashes that matched the requested prefixes. */
		matches?: Array<ThreatMatch> | null;

		/**
		 * The minimum duration the client must wait before issuing any find hashes
		 * request. If this field is not set, clients can issue a request as soon as
		 * they want.
		 */
		minimumWaitDuration?: string | null;

		/**
		 * For requested entities that did not match the threat list, how long to
		 * cache the response.
		 */
		negativeCacheDuration?: string | null;
	}


	/** A match when checking a threat entry in the Safe Browsing threat lists. */
	export interface ThreatMatch {

		/**
		 * The cache lifetime for the returned match. Clients must not cache this
		 * response for more than this duration to avoid false positives.
		 */
		cacheDuration?: string | null;

		/** The platform type matching this threat. */
		platformType?: ListUpdateRequestPlatformType | null;

		/**
		 * An individual threat; for example, a malicious URL or its hash
		 * representation. Only one of these fields should be set.
		 */
		threat?: ThreatEntry | null;

		/**
		 * The metadata associated with a specific threat entry. The client is expected
		 * to know the metadata key/value pairs associated with each threat type.
		 */
		threatEntryMetadata?: ThreatEntryMetadata | null;

		/** The threat entry type matching this threat. */
		threatEntryType?: ListUpdateRequestThreatEntryType | null;

		/** The threat type matching this threat. */
		threatType?: ListUpdateRequestThreatType | null;
	}


	/**
	 * The metadata associated with a specific threat entry. The client is expected
	 * to know the metadata key/value pairs associated with each threat type.
	 */
	export interface ThreatEntryMetadata {

		/** The metadata entries. */
		entries?: Array<MetadataEntry> | null;
	}


	/** A single metadata entry. */
	export interface MetadataEntry {

		/** The metadata entry key. For JSON requests, the key is base64-encoded. */
		key?: string | null;

		/** The metadata entry value. For JSON requests, the value is base64-encoded. */
		value?: string | null;
	}


	/** Request to check entries against lists. */
	export interface FindThreatMatchesRequest {

		/** The client metadata associated with Safe Browsing API requests. */
		client?: ClientInfo | null;

		/**
		 * The information regarding one or more threats that a client submits when
		 * checking for matches in threat lists.
		 */
		threatInfo?: ThreatInfo | null;
	}

	export interface FindThreatMatchesResponse {

		/** The threat list matches. */
		matches?: Array<ThreatMatch> | null;
	}

	export interface ListThreatListsResponse {

		/** The lists available for download by the client. */
		threatLists?: Array<ThreatListDescriptor> | null;
	}


	/**
	 * Describes an individual threat list. A list is defined by three parameters:
	 * the type of threat posed, the type of platform targeted by the threat, and
	 * the type of entries in the list.
	 */
	export interface ThreatListDescriptor {

		/** The platform type targeted by the list's entries. */
		platformType?: ListUpdateRequestPlatformType | null;

		/** The entry types contained in the list. */
		threatEntryType?: ListUpdateRequestThreatEntryType | null;

		/** The threat type posed by the list's entries. */
		threatType?: ListUpdateRequestThreatType | null;
	}

	export interface ThreatHit {

		/** The client metadata associated with Safe Browsing API requests. */
		clientInfo?: ClientInfo | null;

		/**
		 * An individual threat; for example, a malicious URL or its hash
		 * representation. Only one of these fields should be set.
		 */
		entry?: ThreatEntry | null;

		/** The platform type reported. */
		platformType?: ListUpdateRequestPlatformType | null;

		/** The resources related to the threat hit. */
		resources?: Array<ThreatSource> | null;

		/** The threat type reported. */
		threatType?: ListUpdateRequestThreatType | null;

		/** Details about the user that encountered the threat. */
		userInfo?: UserInfo | null;
	}


	/** A single resource related to a threat hit. */
	export interface ThreatSource {

		/** Referrer of the resource. Only set if the referrer is available. */
		referrer?: string | null;

		/** The remote IP of the resource in ASCII format. Either IPv4 or IPv6. */
		remoteIp?: string | null;

		/** The type of source reported. */
		type?: ThreatSourceType | null;

		/** The URL of the resource. */
		url?: string | null;
	}

	export enum ThreatSourceType { THREAT_SOURCE_TYPE_UNSPECIFIED = 0, MATCHING_URL = 1, TAB_URL = 2, TAB_REDIRECT = 3, TAB_RESOURCE = 4 }


	/** Details about the user that encountered the threat. */
	export interface UserInfo {

		/** The UN M.49 region code associated with the user's location. */
		regionCode?: string | null;

		/** Unique user identifier defined by the client. */
		userId?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get v4/encodedFullHashes/{encodedRequest}
		 * @param {string} encodedRequest A serialized FindFullHashesRequest proto.
		 * @param {string} clientId A client ID that (hopefully) uniquely identifies the client implementation
		 * of the Safe Browsing API.
		 * @param {string} clientVersion The version of the client implementation.
		 * @return {void} Successful response
		 */
		Safebrowsing_encodedFullHashes_get(encodedRequest: string, clientId: string | null | undefined, clientVersion: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/encodedFullHashes/' + (encodedRequest == null ? '' : encodeURIComponent(encodedRequest)) + '&clientId=' + (clientId == null ? '' : encodeURIComponent(clientId)) + '&clientVersion=' + (clientVersion == null ? '' : encodeURIComponent(clientVersion)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v4/encodedUpdates/{encodedRequest}
		 * @param {string} encodedRequest A serialized FetchThreatListUpdatesRequest proto.
		 * @param {string} clientId A client ID that uniquely identifies the client implementation of the Safe
		 * Browsing API.
		 * @param {string} clientVersion The version of the client implementation.
		 * @return {void} Successful response
		 */
		Safebrowsing_encodedUpdates_get(encodedRequest: string, clientId: string | null | undefined, clientVersion: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/encodedUpdates/' + (encodedRequest == null ? '' : encodeURIComponent(encodedRequest)) + '&clientId=' + (clientId == null ? '' : encodeURIComponent(clientId)) + '&clientVersion=' + (clientVersion == null ? '' : encodeURIComponent(clientVersion)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Finds the full hashes that match the requested hash prefixes.
		 * Post v4/fullHashes:find
		 * @return {void} Successful response
		 */
		Safebrowsing_fullHashes_find(requestBody: FindFullHashesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/fullHashes:find', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reports a Safe Browsing threat list hit to Google. Only projects with
		 * TRUSTED_REPORTER visibility can use this method.
		 * Post v4/threatHits
		 * @return {void} Successful response
		 */
		Safebrowsing_threatHits_create(requestBody: ThreatHit): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/threatHits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches the most recent threat list updates. A client can request updates
		 * for multiple lists at once.
		 * Post v4/threatListUpdates:fetch
		 * @return {void} Successful response
		 */
		Safebrowsing_threatListUpdates_fetch(requestBody: FetchThreatListUpdatesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/threatListUpdates:fetch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Safe Browsing threat lists available for download.
		 * Get v4/threatLists
		 * @return {void} Successful response
		 */
		Safebrowsing_threatLists_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/threatLists', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Finds the threat entries that match the Safe Browsing lists.
		 * Post v4/threatMatches:find
		 * @return {void} Successful response
		 */
		Safebrowsing_threatMatches_find(requestBody: FindThreatMatchesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/threatMatches:find', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

