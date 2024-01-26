import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GoogleCloudWebriskV1ComputeThreatListDiffResponse {

		/** Contains the set of entries to add to a local database. May contain a combination of compressed and raw data in a single response. */
		additions?: GoogleCloudWebriskV1ThreatEntryAdditions;

		/** The expected state of a client's local database. */
		checksum?: GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum;

		/** The new opaque client version token. This should be retained by the client and passed into the next call of ComputeThreatListDiff as 'version_token'. A separate version token should be stored and used for each threatList. */
		newVersionToken?: string | null;

		/** The soonest the client should wait before issuing any diff request. Querying sooner is unlikely to produce a meaningful diff. Waiting longer is acceptable considering the use case. If this field is not set clients may update as soon as they want. */
		recommendedNextDiff?: string | null;

		/** Contains the set of entries to remove from a local database. */
		removals?: GoogleCloudWebriskV1ThreatEntryRemovals;

		/** The type of response. This may indicate that an action must be taken by the client when the response is received. */
		responseType?: GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseType | null;
	}
	export interface GoogleCloudWebriskV1ComputeThreatListDiffResponseFormProperties {

		/** The new opaque client version token. This should be retained by the client and passed into the next call of ComputeThreatListDiff as 'version_token'. A separate version token should be stored and used for each threatList. */
		newVersionToken: FormControl<string | null | undefined>,

		/** The soonest the client should wait before issuing any diff request. Querying sooner is unlikely to produce a meaningful diff. Waiting longer is acceptable considering the use case. If this field is not set clients may update as soon as they want. */
		recommendedNextDiff: FormControl<string | null | undefined>,

		/** The type of response. This may indicate that an action must be taken by the client when the response is received. */
		responseType: FormControl<GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseType | null | undefined>,
	}
	export function CreateGoogleCloudWebriskV1ComputeThreatListDiffResponseFormGroup() {
		return new FormGroup<GoogleCloudWebriskV1ComputeThreatListDiffResponseFormProperties>({
			newVersionToken: new FormControl<string | null | undefined>(undefined),
			recommendedNextDiff: new FormControl<string | null | undefined>(undefined),
			responseType: new FormControl<GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseType | null | undefined>(undefined),
		});

	}


	/** Contains the set of entries to add to a local database. May contain a combination of compressed and raw data in a single response. */
	export interface GoogleCloudWebriskV1ThreatEntryAdditions {

		/** The raw SHA256-formatted entries. Repeated to allow returning sets of hashes with different prefix sizes. */
		rawHashes?: Array<GoogleCloudWebriskV1RawHashes>;

		/** The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices. */
		riceHashes?: GoogleCloudWebriskV1RiceDeltaEncoding;
	}

	/** Contains the set of entries to add to a local database. May contain a combination of compressed and raw data in a single response. */
	export interface GoogleCloudWebriskV1ThreatEntryAdditionsFormProperties {
	}
	export function CreateGoogleCloudWebriskV1ThreatEntryAdditionsFormGroup() {
		return new FormGroup<GoogleCloudWebriskV1ThreatEntryAdditionsFormProperties>({
		});

	}


	/** The uncompressed threat entries in hash format. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URI. Used for sending ThreatEntryAdditons to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression. */
	export interface GoogleCloudWebriskV1RawHashes {

		/** The number of bytes for each prefix encoded below. This field can be anywhere from 4 (shortest prefix) to 32 (full SHA256 hash). In practice this is almost always 4, except in exceptional circumstances. */
		prefixSize?: number | null;

		/** The hashes, in binary format, concatenated into one long string. Hashes are sorted in lexicographic order. For JSON API users, hashes are base64-encoded. */
		rawHashes?: string | null;
	}

	/** The uncompressed threat entries in hash format. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URI. Used for sending ThreatEntryAdditons to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression. */
	export interface GoogleCloudWebriskV1RawHashesFormProperties {

		/** The number of bytes for each prefix encoded below. This field can be anywhere from 4 (shortest prefix) to 32 (full SHA256 hash). In practice this is almost always 4, except in exceptional circumstances. */
		prefixSize: FormControl<number | null | undefined>,

		/** The hashes, in binary format, concatenated into one long string. Hashes are sorted in lexicographic order. For JSON API users, hashes are base64-encoded. */
		rawHashes: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudWebriskV1RawHashesFormGroup() {
		return new FormGroup<GoogleCloudWebriskV1RawHashesFormProperties>({
			prefixSize: new FormControl<number | null | undefined>(undefined),
			rawHashes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices. */
	export interface GoogleCloudWebriskV1RiceDeltaEncoding {

		/** The encoded deltas that are encoded using the Golomb-Rice coder. */
		encodedData?: string | null;

		/** The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in `first_value`. */
		entryCount?: number | null;

		/** The offset of the first entry in the encoded data, or, if only a single integer was encoded, that single integer's value. If the field is empty or missing, assume zero. */
		firstValue?: string | null;

		/** The Golomb-Rice parameter, which is a number between 2 and 28. This field is missing (that is, zero) if `num_entries` is zero. */
		riceParameter?: number | null;
	}

	/** The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices. */
	export interface GoogleCloudWebriskV1RiceDeltaEncodingFormProperties {

		/** The encoded deltas that are encoded using the Golomb-Rice coder. */
		encodedData: FormControl<string | null | undefined>,

		/** The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in `first_value`. */
		entryCount: FormControl<number | null | undefined>,

		/** The offset of the first entry in the encoded data, or, if only a single integer was encoded, that single integer's value. If the field is empty or missing, assume zero. */
		firstValue: FormControl<string | null | undefined>,

		/** The Golomb-Rice parameter, which is a number between 2 and 28. This field is missing (that is, zero) if `num_entries` is zero. */
		riceParameter: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudWebriskV1RiceDeltaEncodingFormGroup() {
		return new FormGroup<GoogleCloudWebriskV1RiceDeltaEncodingFormProperties>({
			encodedData: new FormControl<string | null | undefined>(undefined),
			entryCount: new FormControl<number | null | undefined>(undefined),
			firstValue: new FormControl<string | null | undefined>(undefined),
			riceParameter: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The expected state of a client's local database. */
	export interface GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum {

		/** The SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database. */
		sha256?: string | null;
	}

	/** The expected state of a client's local database. */
	export interface GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksumFormProperties {

		/** The SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database. */
		sha256: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudWebriskV1ComputeThreatListDiffResponseChecksumFormGroup() {
		return new FormGroup<GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksumFormProperties>({
			sha256: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the set of entries to remove from a local database. */
	export interface GoogleCloudWebriskV1ThreatEntryRemovals {

		/** A set of raw indices to remove from a local list. */
		rawIndices?: GoogleCloudWebriskV1RawIndices;

		/** The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices. */
		riceIndices?: GoogleCloudWebriskV1RiceDeltaEncoding;
	}

	/** Contains the set of entries to remove from a local database. */
	export interface GoogleCloudWebriskV1ThreatEntryRemovalsFormProperties {
	}
	export function CreateGoogleCloudWebriskV1ThreatEntryRemovalsFormGroup() {
		return new FormGroup<GoogleCloudWebriskV1ThreatEntryRemovalsFormProperties>({
		});

	}


	/** A set of raw indices to remove from a local list. */
	export interface GoogleCloudWebriskV1RawIndices {

		/** The indices to remove from a lexicographically-sorted local list. */
		indices?: Array<number>;
	}

	/** A set of raw indices to remove from a local list. */
	export interface GoogleCloudWebriskV1RawIndicesFormProperties {
	}
	export function CreateGoogleCloudWebriskV1RawIndicesFormGroup() {
		return new FormGroup<GoogleCloudWebriskV1RawIndicesFormProperties>({
		});

	}

	export enum GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseType { RESPONSE_TYPE_UNSPECIFIED = 0, DIFF = 1, RESET = 2 }

	export interface GoogleCloudWebriskV1SearchHashesResponse {

		/** For requested entities that did not match the threat list, how long to cache the response until. */
		negativeExpireTime?: string | null;

		/** The full hashes that matched the requested prefixes. The hash will be populated in the key. */
		threats?: Array<GoogleCloudWebriskV1SearchHashesResponseThreatHash>;
	}
	export interface GoogleCloudWebriskV1SearchHashesResponseFormProperties {

		/** For requested entities that did not match the threat list, how long to cache the response until. */
		negativeExpireTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudWebriskV1SearchHashesResponseFormGroup() {
		return new FormGroup<GoogleCloudWebriskV1SearchHashesResponseFormProperties>({
			negativeExpireTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains threat information on a matching hash. */
	export interface GoogleCloudWebriskV1SearchHashesResponseThreatHash {

		/** The cache lifetime for the returned match. Clients must not cache this response past this timestamp to avoid false positives. */
		expireTime?: string | null;

		/** A 32 byte SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded. */
		hash?: string | null;

		/** The ThreatList this threat belongs to. This must contain at least one entry. */
		threatTypes?: Array<string>;
	}

	/** Contains threat information on a matching hash. */
	export interface GoogleCloudWebriskV1SearchHashesResponseThreatHashFormProperties {

		/** The cache lifetime for the returned match. Clients must not cache this response past this timestamp to avoid false positives. */
		expireTime: FormControl<string | null | undefined>,

		/** A 32 byte SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded. */
		hash: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudWebriskV1SearchHashesResponseThreatHashFormGroup() {
		return new FormGroup<GoogleCloudWebriskV1SearchHashesResponseThreatHashFormProperties>({
			expireTime: new FormControl<string | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudWebriskV1SearchUrisResponse {

		/** Contains threat information on a matching uri. */
		threat?: GoogleCloudWebriskV1SearchUrisResponseThreatUri;
	}
	export interface GoogleCloudWebriskV1SearchUrisResponseFormProperties {
	}
	export function CreateGoogleCloudWebriskV1SearchUrisResponseFormGroup() {
		return new FormGroup<GoogleCloudWebriskV1SearchUrisResponseFormProperties>({
		});

	}


	/** Contains threat information on a matching uri. */
	export interface GoogleCloudWebriskV1SearchUrisResponseThreatUri {

		/** The cache lifetime for the returned match. Clients must not cache this response past this timestamp to avoid false positives. */
		expireTime?: string | null;

		/** The ThreatList this threat belongs to. */
		threatTypes?: Array<string>;
	}

	/** Contains threat information on a matching uri. */
	export interface GoogleCloudWebriskV1SearchUrisResponseThreatUriFormProperties {

		/** The cache lifetime for the returned match. Clients must not cache this response past this timestamp to avoid false positives. */
		expireTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudWebriskV1SearchUrisResponseThreatUriFormGroup() {
		return new FormGroup<GoogleCloudWebriskV1SearchUrisResponseThreatUriFormProperties>({
			expireTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Wraps a URI that might be displaying malicious content. */
	export interface GoogleCloudWebriskV1Submission {

		/** Required. The URI that is being reported for malicious content to be analyzed. */
		uri?: string | null;
	}

	/** Wraps a URI that might be displaying malicious content. */
	export interface GoogleCloudWebriskV1SubmissionFormProperties {

		/** Required. The URI that is being reported for malicious content to be analyzed. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudWebriskV1SubmissionFormGroup() {
		return new FormGroup<GoogleCloudWebriskV1SubmissionFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequestFormProperties {
	}
	export function CreateGoogleLongrunningCancelOperationRequestFormGroup() {
		return new FormGroup<GoogleLongrunningCancelOperationRequestFormProperties>({
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunningListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Contains a `SubmitUriMetadata` object. */
		metadata?: {[id: string]: any };

		/** Matches the `/v1/{project-name}/operations/{operation-id}` pattern. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Contains a `SubmitUriMetadata` object. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Matches the `/v1/{project-name}/operations/{operation-id}` pattern. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunningOperationFormGroup() {
		return new FormGroup<GoogleLongrunningOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the full hashes that match the requested hash prefix. This is used after a hash prefix is looked up in a threatList and there is a match. The client side threatList only holds partial hashes so the client must query this method to determine if there is a full hash match of a threat.
		 * Get v1/hashes:search
		 * @param {string} hashPrefix A hash prefix, consisting of the most significant 4-32 bytes of a SHA256 hash. For JSON requests, this field is base64-encoded. Note that if this parameter is provided by a URI, it must be encoded using the web safe base64 variant (RFC 4648).
		 * @param {Array<string>} threatTypes Required. The ThreatLists to search in. Multiple ThreatLists may be specified.
		 * @return {GoogleCloudWebriskV1SearchHashesResponse} Successful response
		 */
		Webrisk_hashes_search(hashPrefix: string | null | undefined, threatTypes: Array<string> | null | undefined): Observable<GoogleCloudWebriskV1SearchHashesResponse> {
			return this.http.get<GoogleCloudWebriskV1SearchHashesResponse>(this.baseUri + 'v1/hashes:search?hashPrefix=' + (hashPrefix == null ? '' : encodeURIComponent(hashPrefix)) + '&' + threatTypes?.map(z => `threatTypes=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Gets the most recent threat list diffs. These diffs should be applied to a local database of hashes to keep it up-to-date. If the local database is empty or excessively out-of-date, a complete snapshot of the database will be returned. This Method only updates a single ThreatList at a time. To update multiple ThreatList databases, this method needs to be called once for each list.
		 * Get v1/threatLists:computeDiff
		 * @param {number} constraints_maxDatabaseEntries Sets the maximum number of entries that the client is willing to have in the local database. This should be a power of 2 between 2**10 and 2**20. If zero, no database size limit is set.
		 * @param {number} constraints_maxDiffEntries The maximum size in number of entries. The diff will not contain more entries than this value. This should be a power of 2 between 2**10 and 2**20. If zero, no diff size limit is set.
		 * @param {Array<string>} constraints_supportedCompressions The compression types supported by the client.
		 * @param {Webrisk_threatLists_computeDiffThreatType} threatType Required. The threat list to update. Only a single ThreatType should be specified per request. If you want to handle multiple ThreatTypes, you must make one request per ThreatType.
		 * @param {string} versionToken The current version token of the client for the requested list (the client version that was received from the last successful diff). If the client does not have a version token (this is the first time calling ComputeThreatListDiff), this may be left empty and a full database snapshot will be returned.
		 * @return {GoogleCloudWebriskV1ComputeThreatListDiffResponse} Successful response
		 */
		Webrisk_threatLists_computeDiff(constraints_maxDatabaseEntries: number | null | undefined, constraints_maxDiffEntries: number | null | undefined, constraints_supportedCompressions: Array<string> | null | undefined, threatType: Webrisk_threatLists_computeDiffThreatType | null | undefined, versionToken: string | null | undefined): Observable<GoogleCloudWebriskV1ComputeThreatListDiffResponse> {
			return this.http.get<GoogleCloudWebriskV1ComputeThreatListDiffResponse>(this.baseUri + 'v1/threatLists:computeDiff?constraints_maxDatabaseEntries=' + constraints_maxDatabaseEntries + '&constraints_maxDiffEntries=' + constraints_maxDiffEntries + '&' + constraints_supportedCompressions?.map(z => `constraints.supportedCompressions=${encodeURIComponent(z)}`).join('&') + '&threatType=' + threatType + '&versionToken=' + (versionToken == null ? '' : encodeURIComponent(versionToken)), {});
		}

		/**
		 * This method is used to check whether a URI is on a given threatList. Multiple threatLists may be searched in a single query. The response will list all requested threatLists the URI was found to match. If the URI is not found on any of the requested ThreatList an empty response will be returned.
		 * Get v1/uris:search
		 * @param {Array<Webrisk_threatLists_computeDiffThreatType>} threatTypes Required. The ThreatLists to search in. Multiple ThreatLists may be specified.
		 * @param {string} uri Required. The URI to be checked for matches.
		 * @return {GoogleCloudWebriskV1SearchUrisResponse} Successful response
		 */
		Webrisk_uris_search(threatTypes: Array<Webrisk_threatLists_computeDiffThreatType> | null | undefined, uri: string | null | undefined): Observable<GoogleCloudWebriskV1SearchUrisResponse> {
			return this.http.get<GoogleCloudWebriskV1SearchUrisResponse>(this.baseUri + 'v1/uris:search?' + threatTypes?.map(z => `threatTypes=${z}`).join('&') + '&uri=' + (uri == null ? '' : encodeURIComponent(uri)), {});
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Webrisk_projects_operations_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Webrisk_projects_operations_get(name: string): Observable<GoogleLongrunningOperation> {
			return this.http.get<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Webrisk_projects_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Webrisk_projects_operations_cancel(name: string, requestBody: GoogleLongrunningCancelOperationRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a Submission of a URI suspected of containing phishing content to be reviewed. If the result verifies the existence of malicious phishing content, the site will be added to the [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) in order to protect users that could get exposed to this threat in the future. Only allowlisted projects can use this method during Early Access. Please reach out to Sales or your customer engineer to obtain access.
		 * Post v1/{parent}/submissions
		 * @param {string} parent Required. The name of the project that is making the submission. This string is in the format "projects/{project_number}".
		 * @return {GoogleCloudWebriskV1Submission} Successful response
		 */
		Webrisk_projects_submissions_create(parent: string, requestBody: GoogleCloudWebriskV1Submission): Observable<GoogleCloudWebriskV1Submission> {
			return this.http.post<GoogleCloudWebriskV1Submission>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/submissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Webrisk_threatLists_computeDiffThreatType { THREAT_TYPE_UNSPECIFIED = 0, MALWARE = 1, SOCIAL_ENGINEERING = 2, UNWANTED_SOFTWARE = 3, SOCIAL_ENGINEERING_EXTENDED_COVERAGE = 4 }

}

