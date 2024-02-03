import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}


	/** The expected state of a client's local database. */
	export interface GoogleSecuritySafebrowsingV4Checksum {

		/** The SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database. */
		sha256?: string | null;
	}

	/** The expected state of a client's local database. */
	export interface GoogleSecuritySafebrowsingV4ChecksumFormProperties {

		/** The SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database. */
		sha256: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4ChecksumFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4ChecksumFormProperties>({
			sha256: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The client metadata associated with Safe Browsing API requests. */
	export interface GoogleSecuritySafebrowsingV4ClientInfo {

		/** A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API. */
		clientId?: string | null;

		/** The version of the client implementation. */
		clientVersion?: string | null;
	}

	/** The client metadata associated with Safe Browsing API requests. */
	export interface GoogleSecuritySafebrowsingV4ClientInfoFormProperties {

		/** A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API. */
		clientId: FormControl<string | null | undefined>,

		/** The version of the client implementation. */
		clientVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4ClientInfoFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4ClientInfoFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			clientVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a Safe Browsing API update request. Clients can request updates for multiple lists in a single request. The server may not respond to all requests, if the server has no updates for that list. NOTE: Field index 2 is unused. NEXT: 5 */
	export interface GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest {

		/** The client metadata associated with Safe Browsing API requests. */
		client?: GoogleSecuritySafebrowsingV4ClientInfo;

		/** The requested threat list updates. */
		listUpdateRequests?: Array<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest>;
	}

	/** Describes a Safe Browsing API update request. Clients can request updates for multiple lists in a single request. The server may not respond to all requests, if the server has no updates for that list. NOTE: Field index 2 is unused. NEXT: 5 */
	export interface GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestFormProperties {
	}
	export function CreateGoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestFormProperties>({
		});

	}


	/** A single list update request. */
	export interface GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest {

		/** The constraints for this update. */
		constraints?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints;

		/** The type of platform at risk by entries present in the list. */
		platformType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType | null;

		/** The current state of the client for the requested list (the encrypted client state that was received from the last successful list update). */
		state?: string | null;

		/** The types of entries present in the list. */
		threatEntryType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryType | null;

		/** The type of threat posed by entries present in the list. */
		threatType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType | null;
	}

	/** A single list update request. */
	export interface GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestFormProperties {

		/** The type of platform at risk by entries present in the list. */
		platformType: FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType | null | undefined>,

		/** The current state of the client for the requested list (the encrypted client state that was received from the last successful list update). */
		state: FormControl<string | null | undefined>,

		/** The types of entries present in the list. */
		threatEntryType: FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryType | null | undefined>,

		/** The type of threat posed by entries present in the list. */
		threatType: FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestFormProperties>({
			platformType: new FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			threatEntryType: new FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryType | null | undefined>(undefined),
			threatType: new FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType | null | undefined>(undefined),
		});

	}


	/** The constraints for this update. */
	export interface GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints {

		/** A client's physical location, expressed as a ISO 31166-1 alpha-2 region code. */
		deviceLocation?: string | null;

		/** Requests the lists for a specific language. Expects ISO 639 alpha-2 format. */
		language?: string | null;

		/** Sets the maximum number of entries that the client is willing to have in the local database for the specified list. This should be a power of 2 between 2**10 and 2**20. If zero, no database size limit is set. */
		maxDatabaseEntries?: number | null;

		/** The maximum size in number of entries. The update will not contain more entries than this value. This should be a power of 2 between 2**10 and 2**20. If zero, no update size limit is set. */
		maxUpdateEntries?: number | null;

		/** Requests the list for a specific geographic location. If not set the server may pick that value based on the user's IP address. Expects ISO 3166-1 alpha-2 format. */
		region?: string | null;

		/** The compression types supported by the client. */
		supportedCompressions?: Array<string>;
	}

	/** The constraints for this update. */
	export interface GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsFormProperties {

		/** A client's physical location, expressed as a ISO 31166-1 alpha-2 region code. */
		deviceLocation: FormControl<string | null | undefined>,

		/** Requests the lists for a specific language. Expects ISO 639 alpha-2 format. */
		language: FormControl<string | null | undefined>,

		/** Sets the maximum number of entries that the client is willing to have in the local database for the specified list. This should be a power of 2 between 2**10 and 2**20. If zero, no database size limit is set. */
		maxDatabaseEntries: FormControl<number | null | undefined>,

		/** The maximum size in number of entries. The update will not contain more entries than this value. This should be a power of 2 between 2**10 and 2**20. If zero, no update size limit is set. */
		maxUpdateEntries: FormControl<number | null | undefined>,

		/** Requests the list for a specific geographic location. If not set the server may pick that value based on the user's IP address. Expects ISO 3166-1 alpha-2 format. */
		region: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsFormProperties>({
			deviceLocation: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			maxDatabaseEntries: new FormControl<number | null | undefined>(undefined),
			maxUpdateEntries: new FormControl<number | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType { PLATFORM_TYPE_UNSPECIFIED = 'PLATFORM_TYPE_UNSPECIFIED', WINDOWS = 'WINDOWS', LINUX = 'LINUX', ANDROID = 'ANDROID', OSX = 'OSX', IOS = 'IOS', ANY_PLATFORM = 'ANY_PLATFORM', ALL_PLATFORMS = 'ALL_PLATFORMS', CHROME = 'CHROME' }

	export enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryType { THREAT_ENTRY_TYPE_UNSPECIFIED = 'THREAT_ENTRY_TYPE_UNSPECIFIED', URL = 'URL', EXECUTABLE = 'EXECUTABLE', IP_RANGE = 'IP_RANGE', CHROME_EXTENSION = 'CHROME_EXTENSION', FILENAME = 'FILENAME', CERT = 'CERT' }

	export enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType { THREAT_TYPE_UNSPECIFIED = 'THREAT_TYPE_UNSPECIFIED', MALWARE = 'MALWARE', SOCIAL_ENGINEERING = 'SOCIAL_ENGINEERING', UNWANTED_SOFTWARE = 'UNWANTED_SOFTWARE', POTENTIALLY_HARMFUL_APPLICATION = 'POTENTIALLY_HARMFUL_APPLICATION', SOCIAL_ENGINEERING_INTERNAL = 'SOCIAL_ENGINEERING_INTERNAL', API_ABUSE = 'API_ABUSE', MALICIOUS_BINARY = 'MALICIOUS_BINARY', CSD_WHITELIST = 'CSD_WHITELIST', CSD_DOWNLOAD_WHITELIST = 'CSD_DOWNLOAD_WHITELIST', CLIENT_INCIDENT = 'CLIENT_INCIDENT', CLIENT_INCIDENT_WHITELIST = 'CLIENT_INCIDENT_WHITELIST', APK_MALWARE_OFFLINE = 'APK_MALWARE_OFFLINE', SUBRESOURCE_FILTER = 'SUBRESOURCE_FILTER', SUSPICIOUS = 'SUSPICIOUS', TRICK_TO_BILL = 'TRICK_TO_BILL', HIGH_CONFIDENCE_ALLOWLIST = 'HIGH_CONFIDENCE_ALLOWLIST', ACCURACY_TIPS = 'ACCURACY_TIPS' }

	export interface GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse {

		/** The list updates requested by the clients. The number of responses here may be less than the number of requests sent by clients. This is the case, for example, if the server has no updates for a particular list. */
		listUpdateResponses?: Array<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse>;

		/** The minimum duration the client must wait before issuing any update request. If this field is not set clients may update as soon as they want. */
		minimumWaitDuration?: string | null;
	}
	export interface GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseFormProperties {

		/** The minimum duration the client must wait before issuing any update request. If this field is not set clients may update as soon as they want. */
		minimumWaitDuration: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseFormProperties>({
			minimumWaitDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An update to an individual list. */
	export interface GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse {

		/** A set of entries to add to a local threat type's list. Repeated to allow for a combination of compressed and raw data to be sent in a single response. */
		additions?: Array<GoogleSecuritySafebrowsingV4ThreatEntrySet>;

		/** The expected state of a client's local database. */
		checksum?: GoogleSecuritySafebrowsingV4Checksum;

		/** The new client state, in encrypted format. Opaque to clients. */
		newClientState?: string | null;

		/** The platform type for which data is returned. */
		platformType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType | null;

		/** A set of entries to remove from a local threat type's list. In practice, this field is empty or contains exactly one ThreatEntrySet. */
		removals?: Array<GoogleSecuritySafebrowsingV4ThreatEntrySet>;

		/** The type of response. This may indicate that an action is required by the client when the response is received. */
		responseType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseType | null;

		/** The format of the threats. */
		threatEntryType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryType | null;

		/** The threat type for which data is returned. */
		threatType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType | null;
	}

	/** An update to an individual list. */
	export interface GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseFormProperties {

		/** The new client state, in encrypted format. Opaque to clients. */
		newClientState: FormControl<string | null | undefined>,

		/** The platform type for which data is returned. */
		platformType: FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType | null | undefined>,

		/** The type of response. This may indicate that an action is required by the client when the response is received. */
		responseType: FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseType | null | undefined>,

		/** The format of the threats. */
		threatEntryType: FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryType | null | undefined>,

		/** The threat type for which data is returned. */
		threatType: FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseFormProperties>({
			newClientState: new FormControl<string | null | undefined>(undefined),
			platformType: new FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType | null | undefined>(undefined),
			responseType: new FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseType | null | undefined>(undefined),
			threatEntryType: new FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryType | null | undefined>(undefined),
			threatType: new FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType | null | undefined>(undefined),
		});

	}


	/** A set of threats that should be added or removed from a client's local database. */
	export interface GoogleSecuritySafebrowsingV4ThreatEntrySet {

		/** The compression type for the entries in this set. */
		compressionType?: GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionType | null;

		/** The uncompressed threat entries in hash format of a particular prefix length. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URL. Used for sending ThreatEntrySet to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression. */
		rawHashes?: GoogleSecuritySafebrowsingV4RawHashes;

		/** A set of raw indices to remove from a local list. */
		rawIndices?: GoogleSecuritySafebrowsingV4RawIndices;

		/** The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices. */
		riceHashes?: GoogleSecuritySafebrowsingV4RiceDeltaEncoding;

		/** The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices. */
		riceIndices?: GoogleSecuritySafebrowsingV4RiceDeltaEncoding;
	}

	/** A set of threats that should be added or removed from a client's local database. */
	export interface GoogleSecuritySafebrowsingV4ThreatEntrySetFormProperties {

		/** The compression type for the entries in this set. */
		compressionType: FormControl<GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionType | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4ThreatEntrySetFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4ThreatEntrySetFormProperties>({
			compressionType: new FormControl<GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionType | null | undefined>(undefined),
		});

	}

	export enum GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionType { COMPRESSION_TYPE_UNSPECIFIED = 'COMPRESSION_TYPE_UNSPECIFIED', RAW = 'RAW', RICE = 'RICE' }


	/** The uncompressed threat entries in hash format of a particular prefix length. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URL. Used for sending ThreatEntrySet to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression. */
	export interface GoogleSecuritySafebrowsingV4RawHashes {

		/** The number of bytes for each prefix encoded below. This field can be anywhere from 4 (shortest prefix) to 32 (full SHA256 hash). */
		prefixSize?: number | null;

		/** The hashes, in binary format, concatenated into one long string. Hashes are sorted in lexicographic order. For JSON API users, hashes are base64-encoded. */
		rawHashes?: string | null;
	}

	/** The uncompressed threat entries in hash format of a particular prefix length. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URL. Used for sending ThreatEntrySet to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression. */
	export interface GoogleSecuritySafebrowsingV4RawHashesFormProperties {

		/** The number of bytes for each prefix encoded below. This field can be anywhere from 4 (shortest prefix) to 32 (full SHA256 hash). */
		prefixSize: FormControl<number | null | undefined>,

		/** The hashes, in binary format, concatenated into one long string. Hashes are sorted in lexicographic order. For JSON API users, hashes are base64-encoded. */
		rawHashes: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4RawHashesFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4RawHashesFormProperties>({
			prefixSize: new FormControl<number | null | undefined>(undefined),
			rawHashes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of raw indices to remove from a local list. */
	export interface GoogleSecuritySafebrowsingV4RawIndices {

		/** The indices to remove from a lexicographically-sorted local list. */
		indices?: Array<number>;
	}

	/** A set of raw indices to remove from a local list. */
	export interface GoogleSecuritySafebrowsingV4RawIndicesFormProperties {
	}
	export function CreateGoogleSecuritySafebrowsingV4RawIndicesFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4RawIndicesFormProperties>({
		});

	}


	/** The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices. */
	export interface GoogleSecuritySafebrowsingV4RiceDeltaEncoding {

		/** The encoded deltas that are encoded using the Golomb-Rice coder. */
		encodedData?: string | null;

		/** The offset of the first entry in the encoded data, or, if only a single integer was encoded, that single integer's value. If the field is empty or missing, assume zero. */
		firstValue?: string | null;

		/** The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in `first_value`. */
		numEntries?: number | null;

		/** The Golomb-Rice parameter, which is a number between 2 and 28. This field is missing (that is, zero) if `num_entries` is zero. */
		riceParameter?: number | null;
	}

	/** The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices. */
	export interface GoogleSecuritySafebrowsingV4RiceDeltaEncodingFormProperties {

		/** The encoded deltas that are encoded using the Golomb-Rice coder. */
		encodedData: FormControl<string | null | undefined>,

		/** The offset of the first entry in the encoded data, or, if only a single integer was encoded, that single integer's value. If the field is empty or missing, assume zero. */
		firstValue: FormControl<string | null | undefined>,

		/** The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in `first_value`. */
		numEntries: FormControl<number | null | undefined>,

		/** The Golomb-Rice parameter, which is a number between 2 and 28. This field is missing (that is, zero) if `num_entries` is zero. */
		riceParameter: FormControl<number | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4RiceDeltaEncodingFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4RiceDeltaEncodingFormProperties>({
			encodedData: new FormControl<string | null | undefined>(undefined),
			firstValue: new FormControl<string | null | undefined>(undefined),
			numEntries: new FormControl<number | null | undefined>(undefined),
			riceParameter: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponseResponseType { RESPONSE_TYPE_UNSPECIFIED = 'RESPONSE_TYPE_UNSPECIFIED', PARTIAL_UPDATE = 'PARTIAL_UPDATE', FULL_UPDATE = 'FULL_UPDATE' }


	/** Request to return full hashes matched by the provided hash prefixes. */
	export interface GoogleSecuritySafebrowsingV4FindFullHashesRequest {

		/** The client metadata associated with Safe Browsing API requests. */
		apiClient?: GoogleSecuritySafebrowsingV4ClientInfo;

		/** The client metadata associated with Safe Browsing API requests. */
		client?: GoogleSecuritySafebrowsingV4ClientInfo;

		/** The current client states for each of the client's local threat lists. */
		clientStates?: Array<string>;

		/** The information regarding one or more threats that a client submits when checking for matches in threat lists. */
		threatInfo?: GoogleSecuritySafebrowsingV4ThreatInfo;
	}

	/** Request to return full hashes matched by the provided hash prefixes. */
	export interface GoogleSecuritySafebrowsingV4FindFullHashesRequestFormProperties {
	}
	export function CreateGoogleSecuritySafebrowsingV4FindFullHashesRequestFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4FindFullHashesRequestFormProperties>({
		});

	}


	/** The information regarding one or more threats that a client submits when checking for matches in threat lists. */
	export interface GoogleSecuritySafebrowsingV4ThreatInfo {

		/** The platform types to be checked. */
		platformTypes?: Array<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType>;

		/** The threat entries to be checked. */
		threatEntries?: Array<GoogleSecuritySafebrowsingV4ThreatEntry>;

		/** The entry types to be checked. */
		threatEntryTypes?: Array<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryType>;

		/** The threat types to be checked. */
		threatTypes?: Array<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType>;
	}

	/** The information regarding one or more threats that a client submits when checking for matches in threat lists. */
	export interface GoogleSecuritySafebrowsingV4ThreatInfoFormProperties {
	}
	export function CreateGoogleSecuritySafebrowsingV4ThreatInfoFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4ThreatInfoFormProperties>({
		});

	}


	/** An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set. */
	export interface GoogleSecuritySafebrowsingV4ThreatEntry {

		/** The digest of an executable in SHA256 format. The API supports both binary and hex digests. For JSON requests, digests are base64-encoded. */
		digest?: string | null;

		/** A hash prefix, consisting of the most significant 4-32 bytes of a SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded. */
		hash?: string | null;

		/** A URL. */
		url?: string | null;
	}

	/** An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set. */
	export interface GoogleSecuritySafebrowsingV4ThreatEntryFormProperties {

		/** The digest of an executable in SHA256 format. The API supports both binary and hex digests. For JSON requests, digests are base64-encoded. */
		digest: FormControl<string | null | undefined>,

		/** A hash prefix, consisting of the most significant 4-32 bytes of a SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded. */
		hash: FormControl<string | null | undefined>,

		/** A URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4ThreatEntryFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4ThreatEntryFormProperties>({
			digest: new FormControl<string | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleSecuritySafebrowsingV4FindFullHashesResponse {

		/** The full hashes that matched the requested prefixes. */
		matches?: Array<GoogleSecuritySafebrowsingV4ThreatMatch>;

		/** The minimum duration the client must wait before issuing any find hashes request. If this field is not set, clients can issue a request as soon as they want. */
		minimumWaitDuration?: string | null;

		/** For requested entities that did not match the threat list, how long to cache the response. */
		negativeCacheDuration?: string | null;
	}
	export interface GoogleSecuritySafebrowsingV4FindFullHashesResponseFormProperties {

		/** The minimum duration the client must wait before issuing any find hashes request. If this field is not set, clients can issue a request as soon as they want. */
		minimumWaitDuration: FormControl<string | null | undefined>,

		/** For requested entities that did not match the threat list, how long to cache the response. */
		negativeCacheDuration: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4FindFullHashesResponseFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4FindFullHashesResponseFormProperties>({
			minimumWaitDuration: new FormControl<string | null | undefined>(undefined),
			negativeCacheDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A match when checking a threat entry in the Safe Browsing threat lists. */
	export interface GoogleSecuritySafebrowsingV4ThreatMatch {

		/** The cache lifetime for the returned match. Clients must not cache this response for more than this duration to avoid false positives. */
		cacheDuration?: string | null;

		/** The platform type matching this threat. */
		platformType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType | null;

		/** An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set. */
		threat?: GoogleSecuritySafebrowsingV4ThreatEntry;

		/** The metadata associated with a specific threat entry. The client is expected to know the metadata key/value pairs associated with each threat type. */
		threatEntryMetadata?: GoogleSecuritySafebrowsingV4ThreatEntryMetadata;

		/** The threat entry type matching this threat. */
		threatEntryType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryType | null;

		/** The threat type matching this threat. */
		threatType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType | null;
	}

	/** A match when checking a threat entry in the Safe Browsing threat lists. */
	export interface GoogleSecuritySafebrowsingV4ThreatMatchFormProperties {

		/** The cache lifetime for the returned match. Clients must not cache this response for more than this duration to avoid false positives. */
		cacheDuration: FormControl<string | null | undefined>,

		/** The platform type matching this threat. */
		platformType: FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType | null | undefined>,

		/** The threat entry type matching this threat. */
		threatEntryType: FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryType | null | undefined>,

		/** The threat type matching this threat. */
		threatType: FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4ThreatMatchFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4ThreatMatchFormProperties>({
			cacheDuration: new FormControl<string | null | undefined>(undefined),
			platformType: new FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType | null | undefined>(undefined),
			threatEntryType: new FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryType | null | undefined>(undefined),
			threatType: new FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType | null | undefined>(undefined),
		});

	}


	/** The metadata associated with a specific threat entry. The client is expected to know the metadata key/value pairs associated with each threat type. */
	export interface GoogleSecuritySafebrowsingV4ThreatEntryMetadata {

		/** The metadata entries. */
		entries?: Array<GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry>;
	}

	/** The metadata associated with a specific threat entry. The client is expected to know the metadata key/value pairs associated with each threat type. */
	export interface GoogleSecuritySafebrowsingV4ThreatEntryMetadataFormProperties {
	}
	export function CreateGoogleSecuritySafebrowsingV4ThreatEntryMetadataFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4ThreatEntryMetadataFormProperties>({
		});

	}


	/** A single metadata entry. */
	export interface GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry {

		/** The metadata entry key. For JSON requests, the key is base64-encoded. */
		key?: string | null;

		/** The metadata entry value. For JSON requests, the value is base64-encoded. */
		value?: string | null;
	}

	/** A single metadata entry. */
	export interface GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntryFormProperties {

		/** The metadata entry key. For JSON requests, the key is base64-encoded. */
		key: FormControl<string | null | undefined>,

		/** The metadata entry value. For JSON requests, the value is base64-encoded. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntryFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to check entries against lists. */
	export interface GoogleSecuritySafebrowsingV4FindThreatMatchesRequest {

		/** The client metadata associated with Safe Browsing API requests. */
		client?: GoogleSecuritySafebrowsingV4ClientInfo;

		/** The information regarding one or more threats that a client submits when checking for matches in threat lists. */
		threatInfo?: GoogleSecuritySafebrowsingV4ThreatInfo;
	}

	/** Request to check entries against lists. */
	export interface GoogleSecuritySafebrowsingV4FindThreatMatchesRequestFormProperties {
	}
	export function CreateGoogleSecuritySafebrowsingV4FindThreatMatchesRequestFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4FindThreatMatchesRequestFormProperties>({
		});

	}

	export interface GoogleSecuritySafebrowsingV4FindThreatMatchesResponse {

		/** The threat list matches. */
		matches?: Array<GoogleSecuritySafebrowsingV4ThreatMatch>;
	}
	export interface GoogleSecuritySafebrowsingV4FindThreatMatchesResponseFormProperties {
	}
	export function CreateGoogleSecuritySafebrowsingV4FindThreatMatchesResponseFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4FindThreatMatchesResponseFormProperties>({
		});

	}

	export interface GoogleSecuritySafebrowsingV4ListThreatListsResponse {

		/** The lists available for download by the client. */
		threatLists?: Array<GoogleSecuritySafebrowsingV4ThreatListDescriptor>;
	}
	export interface GoogleSecuritySafebrowsingV4ListThreatListsResponseFormProperties {
	}
	export function CreateGoogleSecuritySafebrowsingV4ListThreatListsResponseFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4ListThreatListsResponseFormProperties>({
		});

	}


	/** Describes an individual threat list. A list is defined by three parameters: the type of threat posed, the type of platform targeted by the threat, and the type of entries in the list. */
	export interface GoogleSecuritySafebrowsingV4ThreatListDescriptor {

		/** The platform type targeted by the list's entries. */
		platformType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType | null;

		/** The entry types contained in the list. */
		threatEntryType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryType | null;

		/** The threat type posed by the list's entries. */
		threatType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType | null;
	}

	/** Describes an individual threat list. A list is defined by three parameters: the type of threat posed, the type of platform targeted by the threat, and the type of entries in the list. */
	export interface GoogleSecuritySafebrowsingV4ThreatListDescriptorFormProperties {

		/** The platform type targeted by the list's entries. */
		platformType: FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType | null | undefined>,

		/** The entry types contained in the list. */
		threatEntryType: FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryType | null | undefined>,

		/** The threat type posed by the list's entries. */
		threatType: FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4ThreatListDescriptorFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4ThreatListDescriptorFormProperties>({
			platformType: new FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType | null | undefined>(undefined),
			threatEntryType: new FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatEntryType | null | undefined>(undefined),
			threatType: new FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType | null | undefined>(undefined),
		});

	}

	export interface GoogleSecuritySafebrowsingV4ThreatHit {

		/** The client metadata associated with Safe Browsing API requests. */
		clientInfo?: GoogleSecuritySafebrowsingV4ClientInfo;

		/** An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set. */
		entry?: GoogleSecuritySafebrowsingV4ThreatEntry;

		/** The platform type reported. */
		platformType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType | null;

		/** The resources related to the threat hit. */
		resources?: Array<GoogleSecuritySafebrowsingV4ThreatHitThreatSource>;

		/** The threat type reported. */
		threatType?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType | null;

		/** Details about the user that encountered the threat. */
		userInfo?: GoogleSecuritySafebrowsingV4ThreatHitUserInfo;
	}
	export interface GoogleSecuritySafebrowsingV4ThreatHitFormProperties {

		/** The platform type reported. */
		platformType: FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType | null | undefined>,

		/** The threat type reported. */
		threatType: FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4ThreatHitFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4ThreatHitFormProperties>({
			platformType: new FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestPlatformType | null | undefined>(undefined),
			threatType: new FormControl<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestThreatType | null | undefined>(undefined),
		});

	}


	/** A single resource related to a threat hit. */
	export interface GoogleSecuritySafebrowsingV4ThreatHitThreatSource {

		/** Referrer of the resource. Only set if the referrer is available. */
		referrer?: string | null;

		/** The remote IP of the resource in ASCII format. Either IPv4 or IPv6. */
		remoteIp?: string | null;

		/** The type of source reported. */
		type?: GoogleSecuritySafebrowsingV4ThreatHitThreatSourceType | null;

		/** The URL of the resource. */
		url?: string | null;
	}

	/** A single resource related to a threat hit. */
	export interface GoogleSecuritySafebrowsingV4ThreatHitThreatSourceFormProperties {

		/** Referrer of the resource. Only set if the referrer is available. */
		referrer: FormControl<string | null | undefined>,

		/** The remote IP of the resource in ASCII format. Either IPv4 or IPv6. */
		remoteIp: FormControl<string | null | undefined>,

		/** The type of source reported. */
		type: FormControl<GoogleSecuritySafebrowsingV4ThreatHitThreatSourceType | null | undefined>,

		/** The URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4ThreatHitThreatSourceFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4ThreatHitThreatSourceFormProperties>({
			referrer: new FormControl<string | null | undefined>(undefined),
			remoteIp: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleSecuritySafebrowsingV4ThreatHitThreatSourceType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleSecuritySafebrowsingV4ThreatHitThreatSourceType { THREAT_SOURCE_TYPE_UNSPECIFIED = 'THREAT_SOURCE_TYPE_UNSPECIFIED', MATCHING_URL = 'MATCHING_URL', TAB_URL = 'TAB_URL', TAB_REDIRECT = 'TAB_REDIRECT', TAB_RESOURCE = 'TAB_RESOURCE' }


	/** Details about the user that encountered the threat. */
	export interface GoogleSecuritySafebrowsingV4ThreatHitUserInfo {

		/** The UN M.49 region code associated with the user's location. */
		regionCode?: string | null;

		/** Unique user identifier defined by the client. */
		userId?: string | null;
	}

	/** Details about the user that encountered the threat. */
	export interface GoogleSecuritySafebrowsingV4ThreatHitUserInfoFormProperties {

		/** The UN M.49 region code associated with the user's location. */
		regionCode: FormControl<string | null | undefined>,

		/** Unique user identifier defined by the client. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSecuritySafebrowsingV4ThreatHitUserInfoFormGroup() {
		return new FormGroup<GoogleSecuritySafebrowsingV4ThreatHitUserInfoFormProperties>({
			regionCode: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get v4/encodedFullHashes/{encodedRequest}
		 * @param {string} encodedRequest A serialized FindFullHashesRequest proto.
		 * @param {string} clientId A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API.
		 * @param {string} clientVersion The version of the client implementation.
		 * @return {GoogleSecuritySafebrowsingV4FindFullHashesResponse} Successful response
		 */
		Safebrowsing_encodedFullHashes_get(encodedRequest: string, clientId: string | null | undefined, clientVersion: string | null | undefined): Observable<GoogleSecuritySafebrowsingV4FindFullHashesResponse> {
			return this.http.get<GoogleSecuritySafebrowsingV4FindFullHashesResponse>(this.baseUri + 'v4/encodedFullHashes/' + (encodedRequest == null ? '' : encodeURIComponent(encodedRequest)) + '&clientId=' + (clientId == null ? '' : encodeURIComponent(clientId)) + '&clientVersion=' + (clientVersion == null ? '' : encodeURIComponent(clientVersion)), {});
		}

		/**
		 * Get v4/encodedUpdates/{encodedRequest}
		 * @param {string} encodedRequest A serialized FetchThreatListUpdatesRequest proto.
		 * @param {string} clientId A client ID that uniquely identifies the client implementation of the Safe Browsing API.
		 * @param {string} clientVersion The version of the client implementation.
		 * @return {GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse} Successful response
		 */
		Safebrowsing_encodedUpdates_get(encodedRequest: string, clientId: string | null | undefined, clientVersion: string | null | undefined): Observable<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse> {
			return this.http.get<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse>(this.baseUri + 'v4/encodedUpdates/' + (encodedRequest == null ? '' : encodeURIComponent(encodedRequest)) + '&clientId=' + (clientId == null ? '' : encodeURIComponent(clientId)) + '&clientVersion=' + (clientVersion == null ? '' : encodeURIComponent(clientVersion)), {});
		}

		/**
		 * Finds the full hashes that match the requested hash prefixes.
		 * Post v4/fullHashes:find
		 * @return {GoogleSecuritySafebrowsingV4FindFullHashesResponse} Successful response
		 */
		Safebrowsing_fullHashes_find(requestBody: GoogleSecuritySafebrowsingV4FindFullHashesRequest): Observable<GoogleSecuritySafebrowsingV4FindFullHashesResponse> {
			return this.http.post<GoogleSecuritySafebrowsingV4FindFullHashesResponse>(this.baseUri + 'v4/fullHashes:find', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.
		 * Post v4/threatHits
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Safebrowsing_threatHits_create(requestBody: GoogleSecuritySafebrowsingV4ThreatHit): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v4/threatHits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetches the most recent threat list updates. A client can request updates for multiple lists at once.
		 * Post v4/threatListUpdates:fetch
		 * @return {GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse} Successful response
		 */
		Safebrowsing_threatListUpdates_fetch(requestBody: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest): Observable<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse> {
			return this.http.post<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse>(this.baseUri + 'v4/threatListUpdates:fetch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Safe Browsing threat lists available for download.
		 * Get v4/threatLists
		 * @return {GoogleSecuritySafebrowsingV4ListThreatListsResponse} Successful response
		 */
		Safebrowsing_threatLists_list(): Observable<GoogleSecuritySafebrowsingV4ListThreatListsResponse> {
			return this.http.get<GoogleSecuritySafebrowsingV4ListThreatListsResponse>(this.baseUri + 'v4/threatLists', {});
		}

		/**
		 * Finds the threat entries that match the Safe Browsing lists.
		 * Post v4/threatMatches:find
		 * @return {GoogleSecuritySafebrowsingV4FindThreatMatchesResponse} Successful response
		 */
		Safebrowsing_threatMatches_find(requestBody: GoogleSecuritySafebrowsingV4FindThreatMatchesRequest): Observable<GoogleSecuritySafebrowsingV4FindThreatMatchesResponse> {
			return this.http.post<GoogleSecuritySafebrowsingV4FindThreatMatchesResponse>(this.baseUri + 'v4/threatMatches:find', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

