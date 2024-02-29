import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifier of an Android application for key use. */
	export interface V2AndroidApplication {

		/** The package name of the application. */
		packageName?: string | null;

		/** The SHA1 fingerprint of the application. For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter. */
		sha1Fingerprint?: string | null;
	}

	/** Identifier of an Android application for key use. */
	export interface V2AndroidApplicationFormProperties {

		/** The package name of the application. */
		packageName: FormControl<string | null | undefined>,

		/** The SHA1 fingerprint of the application. For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter. */
		sha1Fingerprint: FormControl<string | null | undefined>,
	}
	export function CreateV2AndroidApplicationFormGroup() {
		return new FormGroup<V2AndroidApplicationFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined),
			sha1Fingerprint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Android apps that are allowed to use the key. */
	export interface V2AndroidKeyRestrictions {

		/** A list of Android applications that are allowed to make API calls with this key. */
		allowedApplications?: Array<V2AndroidApplication>;
	}

	/** The Android apps that are allowed to use the key. */
	export interface V2AndroidKeyRestrictionsFormProperties {
	}
	export function CreateV2AndroidKeyRestrictionsFormGroup() {
		return new FormGroup<V2AndroidKeyRestrictionsFormProperties>({
		});

	}


	/** A restriction for a specific service and optionally one or multiple specific methods. Both fields are case insensitive. */
	export interface V2ApiTarget {

		/** Optional. List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (*) can be used as the last symbol. Valid examples: `google.cloud.translate.v2.TranslateService.GetSupportedLanguage` `TranslateText` `Get*` `translate.googleapis.com.Get*` */
		methods?: Array<string>;

		/** The service for this restriction. It should be the canonical service name, for example: `translate.googleapis.com`. You can use [`gcloud services list`](/sdk/gcloud/reference/services/list) to get a list of services that are enabled in the project. */
		service?: string | null;
	}

	/** A restriction for a specific service and optionally one or multiple specific methods. Both fields are case insensitive. */
	export interface V2ApiTargetFormProperties {

		/** The service for this restriction. It should be the canonical service name, for example: `translate.googleapis.com`. You can use [`gcloud services list`](/sdk/gcloud/reference/services/list) to get a list of services that are enabled in the project. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateV2ApiTargetFormGroup() {
		return new FormGroup<V2ApiTargetFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The HTTP referrers (websites) that are allowed to use the key. */
	export interface V2BrowserKeyRestrictions {

		/** A list of regular expressions for the referrer URLs that are allowed to make API calls with this key. */
		allowedReferrers?: Array<string>;
	}

	/** The HTTP referrers (websites) that are allowed to use the key. */
	export interface V2BrowserKeyRestrictionsFormProperties {
	}
	export function CreateV2BrowserKeyRestrictionsFormGroup() {
		return new FormGroup<V2BrowserKeyRestrictionsFormProperties>({
		});

	}


	/** Response message for `GetKeyString` method. */
	export interface V2GetKeyStringResponse {

		/** An encrypted and signed value of the key. */
		keyString?: string | null;
	}

	/** Response message for `GetKeyString` method. */
	export interface V2GetKeyStringResponseFormProperties {

		/** An encrypted and signed value of the key. */
		keyString: FormControl<string | null | undefined>,
	}
	export function CreateV2GetKeyStringResponseFormGroup() {
		return new FormGroup<V2GetKeyStringResponseFormProperties>({
			keyString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The iOS apps that are allowed to use the key. */
	export interface V2IosKeyRestrictions {

		/** A list of bundle IDs that are allowed when making API calls with this key. */
		allowedBundleIds?: Array<string>;
	}

	/** The iOS apps that are allowed to use the key. */
	export interface V2IosKeyRestrictionsFormProperties {
	}
	export function CreateV2IosKeyRestrictionsFormGroup() {
		return new FormGroup<V2IosKeyRestrictionsFormProperties>({
		});

	}


	/** The representation of a key managed by the API Keys API. */
	export interface V2Key {

		/** Annotations is an unstructured key-value map stored with a policy that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
		annotations?: {[id: string]: string };

		/** Output only. A timestamp identifying the time this key was originally created. */
		createTime?: string | null;

		/** Output only. A timestamp when this key was deleted. If the resource is not deleted, this must be empty. */
		deleteTime?: string | null;

		/** Human-readable display name of this key that you can modify. The maximum length is 63 characters. */
		displayName?: string | null;

		/** Output only. A checksum computed by the server based on the current value of the Key resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. See https://google.aip.dev/154. */
		etag?: string | null;

		/** Output only. An encrypted and signed value held by this key. This field can be accessed only through the `GetKeyString` method. */
		keyString?: string | null;

		/** Output only. The resource name of the key. The `name` has the form: `projects//locations/global/keys/`. For example: `projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2` NOTE: Key is a global resource; hence the only supported value for location is `global`. */
		name?: string | null;

		/** Describes the restrictions on the key. */
		restrictions?: V2Restrictions;

		/** Output only. Unique id in UUID4 format. */
		uid?: string | null;

		/** Output only. A timestamp identifying the time this key was last updated. */
		updateTime?: string | null;
	}

	/** The representation of a key managed by the API Keys API. */
	export interface V2KeyFormProperties {

		/** Annotations is an unstructured key-value map stored with a policy that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. A timestamp identifying the time this key was originally created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. A timestamp when this key was deleted. If the resource is not deleted, this must be empty. */
		deleteTime: FormControl<string | null | undefined>,

		/** Human-readable display name of this key that you can modify. The maximum length is 63 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. A checksum computed by the server based on the current value of the Key resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. See https://google.aip.dev/154. */
		etag: FormControl<string | null | undefined>,

		/** Output only. An encrypted and signed value held by this key. This field can be accessed only through the `GetKeyString` method. */
		keyString: FormControl<string | null | undefined>,

		/** Output only. The resource name of the key. The `name` has the form: `projects//locations/global/keys/`. For example: `projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2` NOTE: Key is a global resource; hence the only supported value for location is `global`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Unique id in UUID4 format. */
		uid: FormControl<string | null | undefined>,

		/** Output only. A timestamp identifying the time this key was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateV2KeyFormGroup() {
		return new FormGroup<V2KeyFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			keyString: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the restrictions on the key. */
	export interface V2Restrictions {

		/** The Android apps that are allowed to use the key. */
		androidKeyRestrictions?: V2AndroidKeyRestrictions;

		/** A restriction for a specific service and optionally one or more specific methods. Requests are allowed if they match any of these restrictions. If no restrictions are specified, all targets are allowed. */
		apiTargets?: Array<V2ApiTarget>;

		/** The HTTP referrers (websites) that are allowed to use the key. */
		browserKeyRestrictions?: V2BrowserKeyRestrictions;

		/** The iOS apps that are allowed to use the key. */
		iosKeyRestrictions?: V2IosKeyRestrictions;

		/** The IP addresses of callers that are allowed to use the key. */
		serverKeyRestrictions?: V2ServerKeyRestrictions;
	}

	/** Describes the restrictions on the key. */
	export interface V2RestrictionsFormProperties {
	}
	export function CreateV2RestrictionsFormGroup() {
		return new FormGroup<V2RestrictionsFormProperties>({
		});

	}


	/** The IP addresses of callers that are allowed to use the key. */
	export interface V2ServerKeyRestrictions {

		/** A list of the caller IP addresses that are allowed to make API calls with this key. */
		allowedIps?: Array<string>;
	}

	/** The IP addresses of callers that are allowed to use the key. */
	export interface V2ServerKeyRestrictionsFormProperties {
	}
	export function CreateV2ServerKeyRestrictionsFormGroup() {
		return new FormGroup<V2ServerKeyRestrictionsFormProperties>({
		});

	}


	/** Response message for `ListKeys` method. */
	export interface V2ListKeysResponse {

		/** A list of API keys. */
		keys?: Array<V2Key>;

		/** The pagination token for the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for `ListKeys` method. */
	export interface V2ListKeysResponseFormProperties {

		/** The pagination token for the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateV2ListKeysResponseFormGroup() {
		return new FormGroup<V2ListKeysResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for `LookupKey` method. */
	export interface V2LookupKeyResponse {

		/** The resource name of the API key. If the API key has been purged, resource name is empty. */
		name?: string | null;

		/** The project that owns the key with the value specified in the request. */
		parent?: string | null;
	}

	/** Response message for `LookupKey` method. */
	export interface V2LookupKeyResponseFormProperties {

		/** The resource name of the API key. If the API key has been purged, resource name is empty. */
		name: FormControl<string | null | undefined>,

		/** The project that owns the key with the value specified in the request. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateV2LookupKeyResponseFormGroup() {
		return new FormGroup<V2LookupKeyResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `UndeleteKey` method. */
	export interface V2UndeleteKeyRequest {
	}

	/** Request message for `UndeleteKey` method. */
	export interface V2UndeleteKeyRequestFormProperties {
	}
	export function CreateV2UndeleteKeyRequestFormGroup() {
		return new FormGroup<V2UndeleteKeyRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Find the parent project and resource name of the API key that matches the key string in the request. If the API key has been purged, resource name will not be set. The service account must have the `apikeys.keys.lookup` permission on the parent project.
		 * Get v2/keys:lookupKey
		 * @param {string} keyString Required. Finds the project that owns the key string value.
		 * @return {V2LookupKeyResponse} Successful response
		 */
		Apikeys_keys_lookupKey(keyString: string | null | undefined): Observable<V2LookupKeyResponse> {
			return this.http.get<V2LookupKeyResponse>(this.baseUri + 'v2/keys:lookupKey?keyString=' + (keyString == null ? '' : encodeURIComponent(keyString)), {});
		}

		/**
		 * Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.
		 * Delete v2/{name}
		 * @param {string} name Required. The resource name of the API key to be deleted.
		 * @param {string} etag Optional. The etag known to the client for the expected state of the key. This is to be used for optimistic concurrency.
		 * @return {Operation} Successful response
		 */
		Apikeys_projects_locations_keys_delete(name: string, etag: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)), {});
		}

		/**
		 * Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
		 * Get v2/{name}
		 * @param {string} name Required. The resource name of the API key to get.
		 * @return {V2Key} Successful response
		 */
		Apikeys_projects_locations_keys_get(name: string): Observable<V2Key> {
			return this.http.get<V2Key>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
		 * Patch v2/{name}
		 * @param {string} name Output only. The resource name of the key. The `name` has the form: `projects//locations/global/keys/`. For example: `projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2` NOTE: Key is a global resource; hence the only supported value for location is `global`.
		 * @param {string} updateMask The field mask specifies which fields to be updated as part of this request. All other fields are ignored. Mutable fields are: `display_name`, `restrictions`, and `annotations`. If an update mask is not provided, the service treats it as an implied mask equivalent to all allowed fields that are set on the wire. If the field mask has a special value "*", the service treats it equivalent to replace all allowed mutable fields.
		 * @return {Operation} Successful response
		 */
		Apikeys_projects_locations_keys_patch(name: string, updateMask: string | null | undefined, requestBody: V2Key): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
		 * Get v2/{name}/keyString
		 * @param {string} name Required. The resource name of the API key to be retrieved.
		 * @return {V2GetKeyStringResponse} Successful response
		 */
		Apikeys_projects_locations_keys_getKeyString(name: string): Observable<V2GetKeyStringResponse> {
			return this.http.get<V2GetKeyStringResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/keyString', {});
		}

		/**
		 * Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.
		 * Post v2/{name}:undelete
		 * @param {string} name Required. The resource name of the API key to be undeleted.
		 * @return {Operation} Successful response
		 */
		Apikeys_projects_locations_keys_undelete(name: string, requestBody: V2UndeleteKeyRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
		 * Get v2/{parent}/keys
		 * @param {string} parent Required. Lists all API keys associated with this project.
		 * @param {number} pageSize Optional. Specifies the maximum number of results to be returned at a time.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. Requests a specific page of results.
		 * @param {boolean} showDeleted Optional. Indicate that keys deleted in the past 30 days should also be returned.
		 * @return {V2ListKeysResponse} Successful response
		 */
		Apikeys_projects_locations_keys_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<V2ListKeysResponse> {
			return this.http.get<V2ListKeysResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/keys&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
		 * Post v2/{parent}/keys
		 * @param {string} parent Required. The project in which the API key is created.
		 * @param {string} keyId User specified key id (optional). If specified, it will become the final component of the key resource name. The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the id must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. The id must NOT be a UUID-like string.
		 * @return {Operation} Successful response
		 */
		Apikeys_projects_locations_keys_create(parent: string, keyId: string | null | undefined, requestBody: V2Key): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/keys&keyId=' + (keyId == null ? '' : encodeURIComponent(keyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

