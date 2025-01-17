import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get 
		 * @return {{[id: string]: any }} Return information about the running Instance.
		 */
		Server_info(): Observable<{[id: string]: any }> {
			return this.http.get<{[id: string]: any }>(this.baseUri + '', {});
		}

		/**
		 * Get __api__
		 * @return {{[id: string]: any }} Return an OpenAPI description of the running instance.
		 */
		Get_openapi_spec(): Observable<{[id: string]: any }> {
			return this.http.get<{[id: string]: any }>(this.baseUri + '__api__', {});
		}

		/**
		 * Get __heartbeat__
		 * @return {{[id: string]: any }} Server is working properly.
		 */
		__heartbeat__(): Observable<{[id: string]: any }> {
			return this.http.get<{[id: string]: any }>(this.baseUri + '__heartbeat__', {});
		}

		/**
		 * Get __lbheartbeat__
		 * @return {string} Returned if server is reachable.
		 */
		__lbheartbeat__(): Observable<string> {
			return this.http.get(this.baseUri + '__lbheartbeat__', { responseType: 'text' });
		}

		/**
		 * Get __version__
		 * @return {{[id: string]: any }} Return the running Instance version information.
		 */
		__version__(): Observable<{[id: string]: any }> {
			return this.http.get<{[id: string]: any }>(this.baseUri + '__version__', {});
		}

		/**
		 * Post batch
		 * @return {BatchReturn} Return a list of operation responses.
		 */
		Batch(requestBody: BatchPostBody): Observable<BatchReturn> {
			return this.http.post<BatchReturn>(this.baseUri + 'batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get buckets
		 * @param {number} _limit Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} _since Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} _to Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} _before Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} last_modified Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @return {Get_bucketsReturn} Return a list of matching objects.
		 */
		Get_buckets(_limit: number | null | undefined, _sort: Array<string> | null | undefined, _token: string | null | undefined, _since: number | null | undefined, _to: number | null | undefined, _before: number | null | undefined, id: string | null | undefined, last_modified: number | null | undefined, _fields: Array<string> | null | undefined): Observable<Get_bucketsReturn> {
			return this.http.get<Get_bucketsReturn>(this.baseUri + 'buckets?_limit=' + _limit + '&' + _sort?.map(z => `_sort=${encodeURIComponent(z)}`).join('&') + '&_token=' + (_token == null ? '' : encodeURIComponent(_token)) + '&_since=' + _since + '&_to=' + _to + '&_before=' + _before + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&last_modified=' + last_modified + '&' + _fields?.map(z => `_fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get buckets/monitor/collections/changes/records
		 * @param {number} _limit Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} _since Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} _to Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} _before Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} last_modified Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @return {Get_changessReturn} Return a list of matching objects.
		 */
		Get_changess(_limit: number | null | undefined, _sort: Array<string> | null | undefined, _token: string | null | undefined, _since: number | null | undefined, _to: number | null | undefined, _before: number | null | undefined, id: string | null | undefined, last_modified: number | null | undefined, _fields: Array<string> | null | undefined): Observable<Get_changessReturn> {
			return this.http.get<Get_changessReturn>(this.baseUri + 'buckets/monitor/collections/changes/records?_limit=' + _limit + '&' + _sort?.map(z => `_sort=${encodeURIComponent(z)}`).join('&') + '&_token=' + (_token == null ? '' : encodeURIComponent(_token)) + '&_since=' + _since + '&_to=' + _to + '&_before=' + _before + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&last_modified=' + last_modified + '&' + _fields?.map(z => `_fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get buckets/{bid}/collections/{cid}/changeset
		 * @param {number} _limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Get_collection_changeset(_since: string | null | undefined, _expected: string, _limit: number | null | undefined, bucket: string | null | undefined, collection: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'buckets/{bid}/collections/{cid}/changeset?_since=' + (_since == null ? '' : encodeURIComponent(_since)) + '&_expected=' + (_expected == null ? '' : encodeURIComponent(_expected)) + '&_limit=' + _limit + '&bucket=' + (bucket == null ? '' : encodeURIComponent(bucket)) + '&collection=' + (collection == null ? '' : encodeURIComponent(collection)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get buckets/{bucket_id}/collections
		 * @param {number} _limit Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} _since Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} _to Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} _before Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} last_modified Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @return {Get_collectionsReturn} Return a list of matching objects.
		 */
		Get_collections(_limit: number | null | undefined, _sort: Array<string> | null | undefined, _token: string | null | undefined, _since: number | null | undefined, _to: number | null | undefined, _before: number | null | undefined, id: string | null | undefined, last_modified: number | null | undefined, _fields: Array<string> | null | undefined): Observable<Get_collectionsReturn> {
			return this.http.get<Get_collectionsReturn>(this.baseUri + 'buckets/{bucket_id}/collections?_limit=' + _limit + '&' + _sort?.map(z => `_sort=${encodeURIComponent(z)}`).join('&') + '&_token=' + (_token == null ? '' : encodeURIComponent(_token)) + '&_since=' + _since + '&_to=' + _to + '&_before=' + _before + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&last_modified=' + last_modified + '&' + _fields?.map(z => `_fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get buckets/{bucket_id}/collections/{collection_id}/records
		 * @param {number} _limit Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} _since Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} _to Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} _before Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} last_modified Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @return {Get_recordsReturn} Return a list of matching objects.
		 */
		Get_records(_limit: number | null | undefined, _sort: Array<string> | null | undefined, _token: string | null | undefined, _since: number | null | undefined, _to: number | null | undefined, _before: number | null | undefined, id: string | null | undefined, last_modified: number | null | undefined, _fields: Array<string> | null | undefined): Observable<Get_recordsReturn> {
			return this.http.get<Get_recordsReturn>(this.baseUri + 'buckets/{bucket_id}/collections/{collection_id}/records?_limit=' + _limit + '&' + _sort?.map(z => `_sort=${encodeURIComponent(z)}`).join('&') + '&_token=' + (_token == null ? '' : encodeURIComponent(_token)) + '&_since=' + _since + '&_to=' + _to + '&_before=' + _before + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&last_modified=' + last_modified + '&' + _fields?.map(z => `_fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get buckets/{bucket_id}/collections/{collection_id}/records/{id}
		 * @return {Get_recordReturn} Return the target object.
		 */
		Get_record(_fields: Array<string> | null | undefined): Observable<Get_recordReturn> {
			return this.http.get<Get_recordReturn>(this.baseUri + 'buckets/{bucket_id}/collections/{collection_id}/records/{id}?' + _fields?.map(z => `_fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Delete buckets/{bucket_id}/collections/{collection_id}/records/{id}/attachment
		 * @return {void} 
		 */
		Delete_attachment(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'buckets/{bucket_id}/collections/{collection_id}/records/{id}/attachment', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post buckets/{bucket_id}/collections/{collection_id}/records/{id}/attachment
		 * @return {void} 
		 */
		Create_attachment(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'buckets/{bucket_id}/collections/{collection_id}/records/{id}/attachment', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get buckets/{bucket_id}/collections/{id}
		 * @return {Get_collectionReturn} Return the target object.
		 */
		Get_collection(_fields: Array<string> | null | undefined): Observable<Get_collectionReturn> {
			return this.http.get<Get_collectionReturn>(this.baseUri + 'buckets/{bucket_id}/collections/{id}?' + _fields?.map(z => `_fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get buckets/{bucket_id}/groups
		 * @param {number} _limit Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} _since Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} _to Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} _before Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @param {number} last_modified Minimum: 0
		 *     Maximum: 9223372036854776000
		 * @return {Get_groupsReturn} Return a list of matching objects.
		 */
		Get_groups(_limit: number | null | undefined, _sort: Array<string> | null | undefined, _token: string | null | undefined, _since: number | null | undefined, _to: number | null | undefined, _before: number | null | undefined, id: string | null | undefined, last_modified: number | null | undefined, _fields: Array<string> | null | undefined): Observable<Get_groupsReturn> {
			return this.http.get<Get_groupsReturn>(this.baseUri + 'buckets/{bucket_id}/groups?_limit=' + _limit + '&' + _sort?.map(z => `_sort=${encodeURIComponent(z)}`).join('&') + '&_token=' + (_token == null ? '' : encodeURIComponent(_token)) + '&_since=' + _since + '&_to=' + _to + '&_before=' + _before + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&last_modified=' + last_modified + '&' + _fields?.map(z => `_fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get buckets/{bucket_id}/groups/{id}
		 * @return {Get_groupReturn} Return the target object.
		 */
		Get_group(_fields: Array<string> | null | undefined): Observable<Get_groupReturn> {
			return this.http.get<Get_groupReturn>(this.baseUri + 'buckets/{bucket_id}/groups/{id}?' + _fields?.map(z => `_fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get buckets/{id}
		 * @return {Get_bucketReturn} Return the target object.
		 */
		Get_bucket(_fields: Array<string> | null | undefined): Observable<Get_bucketReturn> {
			return this.http.get<Get_bucketReturn>(this.baseUri + 'buckets/{id}?' + _fields?.map(z => `_fields=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get contribute.json
		 * @return {{[id: string]: any }} Return open source contributing information.
		 */
		Contribute(): Observable<{[id: string]: any }> {
			return this.http.get<{[id: string]: any }>(this.baseUri + 'contribute.json', {});
		}
	}

	export interface BatchPostBody {
		defaults?: BatchPostBodyDefaults;

		/** Required */
		BatchPostBodyRequests: Array<BatchPostBodyRequests>;
	}
	export interface BatchPostBodyFormProperties {
	}
	export function CreateBatchPostBodyFormGroup() {
		return new FormGroup<BatchPostBodyFormProperties>({
		});

	}

	export interface BatchPostBodyDefaults {
		body?: {[id: string]: any };
		headers?: {[id: string]: any };
		method?: BatchPostBodyDefaultsMethod | null;
		path?: string | null;
	}
	export interface BatchPostBodyDefaultsFormProperties {
		body: FormControl<{[id: string]: any } | null | undefined>,
		headers: FormControl<{[id: string]: any } | null | undefined>,
		method: FormControl<BatchPostBodyDefaultsMethod | null | undefined>,
		path: FormControl<string | null | undefined>,
	}
	export function CreateBatchPostBodyDefaultsFormGroup() {
		return new FormGroup<BatchPostBodyDefaultsFormProperties>({
			body: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			headers: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			method: new FormControl<BatchPostBodyDefaultsMethod | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^/')]),
		});

	}

	export enum BatchPostBodyDefaultsMethod { GET = 'GET', HEAD = 'HEAD', DELETE = 'DELETE', TRACE = 'TRACE', POST = 'POST', PUT = 'PUT', PATCH = 'PATCH' }

	export interface BatchPostBodyRequests {
		body?: {[id: string]: any };
		headers?: {[id: string]: any };
		method?: BatchPostBodyDefaultsMethod | null;

		/** Required */
		path: string;
	}
	export interface BatchPostBodyRequestsFormProperties {
		body: FormControl<{[id: string]: any } | null | undefined>,
		headers: FormControl<{[id: string]: any } | null | undefined>,
		method: FormControl<BatchPostBodyDefaultsMethod | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,
	}
	export function CreateBatchPostBodyRequestsFormGroup() {
		return new FormGroup<BatchPostBodyRequestsFormProperties>({
			body: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			headers: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			method: new FormControl<BatchPostBodyDefaultsMethod | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^/')]),
		});

	}

	export interface BatchReturn {

		/** Required */
		BatchReturnResponses: Array<BatchReturnResponses>;
	}
	export interface BatchReturnFormProperties {
	}
	export function CreateBatchReturnFormGroup() {
		return new FormGroup<BatchReturnFormProperties>({
		});

	}

	export interface BatchReturnResponses {
		body?: {[id: string]: any };
		headers?: {[id: string]: any };

		/** Required */
		path: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;
	}
	export interface BatchReturnResponsesFormProperties {
		body: FormControl<{[id: string]: any } | null | undefined>,
		headers: FormControl<{[id: string]: any } | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateBatchReturnResponsesFormGroup() {
		return new FormGroup<BatchReturnResponsesFormProperties>({
			body: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			headers: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Get_bucketsReturn {
		Get_bucketsReturnData?: Array<Get_bucketsReturnData>;
	}
	export interface Get_bucketsReturnFormProperties {
	}
	export function CreateGet_bucketsReturnFormGroup() {
		return new FormGroup<Get_bucketsReturnFormProperties>({
		});

	}

	export interface Get_bucketsReturnData {
		'collection:schema'?: {[id: string]: any };
		'group:schema'?: {[id: string]: any };
		'record:schema'?: {[id: string]: any };
	}
	export interface Get_bucketsReturnDataFormProperties {
		'collection:schema': FormControl<{[id: string]: any } | null | undefined>,
		'group:schema': FormControl<{[id: string]: any } | null | undefined>,
		'record:schema': FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGet_bucketsReturnDataFormGroup() {
		return new FormGroup<Get_bucketsReturnDataFormProperties>({
			'collection:schema': new FormControl<{[id: string]: any } | null | undefined>(undefined),
			'group:schema': new FormControl<{[id: string]: any } | null | undefined>(undefined),
			'record:schema': new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export interface Get_changessReturn {
		Get_changessReturnData?: Array<Get_changessReturnData>;
	}
	export interface Get_changessReturnFormProperties {
	}
	export function CreateGet_changessReturnFormGroup() {
		return new FormGroup<Get_changessReturnFormProperties>({
		});

	}

	export interface Get_changessReturnData {

		/** Required */
		bucket: string;

		/** Required */
		collection: string;

		/** Required */
		host: string;
	}
	export interface Get_changessReturnDataFormProperties {

		/** Required */
		bucket: FormControl<string | null | undefined>,

		/** Required */
		collection: FormControl<string | null | undefined>,

		/** Required */
		host: FormControl<string | null | undefined>,
	}
	export function CreateGet_changessReturnDataFormGroup() {
		return new FormGroup<Get_changessReturnDataFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collection: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Get_collectionsReturn {
		Get_collectionsReturnData?: Array<Get_collectionsReturnData>;
	}
	export interface Get_collectionsReturnFormProperties {
	}
	export function CreateGet_collectionsReturnFormGroup() {
		return new FormGroup<Get_collectionsReturnFormProperties>({
		});

	}

	export interface Get_collectionsReturnData {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cache_expires?: number | null;
		schema?: {[id: string]: any };
	}
	export interface Get_collectionsReturnDataFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cache_expires: FormControl<number | null | undefined>,
		schema: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGet_collectionsReturnDataFormGroup() {
		return new FormGroup<Get_collectionsReturnDataFormProperties>({
			cache_expires: new FormControl<number | null | undefined>(undefined),
			schema: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export interface Get_recordsReturn {
		data?: Array<string>;
	}
	export interface Get_recordsReturnFormProperties {
	}
	export function CreateGet_recordsReturnFormGroup() {
		return new FormGroup<Get_recordsReturnFormProperties>({
		});

	}

	export interface Get_recordReturn {
		data?: {[id: string]: any };
		permissions?: Get_recordReturnPermissions;
	}
	export interface Get_recordReturnFormProperties {
		data: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGet_recordReturnFormGroup() {
		return new FormGroup<Get_recordReturnFormProperties>({
			data: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export interface Get_recordReturnPermissions {
		read?: Array<string>;
		write?: Array<string>;
	}
	export interface Get_recordReturnPermissionsFormProperties {
	}
	export function CreateGet_recordReturnPermissionsFormGroup() {
		return new FormGroup<Get_recordReturnPermissionsFormProperties>({
		});

	}

	export interface Get_collectionReturn {
		data?: Get_collectionReturnData;
		permissions?: Get_collectionReturnPermissions;
	}
	export interface Get_collectionReturnFormProperties {
	}
	export function CreateGet_collectionReturnFormGroup() {
		return new FormGroup<Get_collectionReturnFormProperties>({
		});

	}

	export interface Get_collectionReturnData {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cache_expires?: number | null;
		schema?: {[id: string]: any };
	}
	export interface Get_collectionReturnDataFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cache_expires: FormControl<number | null | undefined>,
		schema: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGet_collectionReturnDataFormGroup() {
		return new FormGroup<Get_collectionReturnDataFormProperties>({
			cache_expires: new FormControl<number | null | undefined>(undefined),
			schema: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export interface Get_collectionReturnPermissions {
		read?: Array<string>;
		'record:create'?: Array<string>;
		write?: Array<string>;
	}
	export interface Get_collectionReturnPermissionsFormProperties {
	}
	export function CreateGet_collectionReturnPermissionsFormGroup() {
		return new FormGroup<Get_collectionReturnPermissionsFormProperties>({
		});

	}

	export interface Get_groupsReturn {
		Get_groupsReturnData?: Array<Get_groupsReturnData>;
	}
	export interface Get_groupsReturnFormProperties {
	}
	export function CreateGet_groupsReturnFormGroup() {
		return new FormGroup<Get_groupsReturnFormProperties>({
		});

	}

	export interface Get_groupsReturnData {
		members?: Array<string>;
	}
	export interface Get_groupsReturnDataFormProperties {
	}
	export function CreateGet_groupsReturnDataFormGroup() {
		return new FormGroup<Get_groupsReturnDataFormProperties>({
		});

	}

	export interface Get_groupReturn {
		data?: Get_groupReturnData;
		permissions?: Get_groupReturnPermissions;
	}
	export interface Get_groupReturnFormProperties {
	}
	export function CreateGet_groupReturnFormGroup() {
		return new FormGroup<Get_groupReturnFormProperties>({
		});

	}

	export interface Get_groupReturnData {
		members?: Array<string>;
	}
	export interface Get_groupReturnDataFormProperties {
	}
	export function CreateGet_groupReturnDataFormGroup() {
		return new FormGroup<Get_groupReturnDataFormProperties>({
		});

	}

	export interface Get_groupReturnPermissions {
		read?: Array<string>;
		write?: Array<string>;
	}
	export interface Get_groupReturnPermissionsFormProperties {
	}
	export function CreateGet_groupReturnPermissionsFormGroup() {
		return new FormGroup<Get_groupReturnPermissionsFormProperties>({
		});

	}

	export interface Get_bucketReturn {
		data?: Get_bucketReturnData;
		permissions?: Get_bucketReturnPermissions;
	}
	export interface Get_bucketReturnFormProperties {
	}
	export function CreateGet_bucketReturnFormGroup() {
		return new FormGroup<Get_bucketReturnFormProperties>({
		});

	}

	export interface Get_bucketReturnData {
		'collection:schema'?: {[id: string]: any };
		'group:schema'?: {[id: string]: any };
		'record:schema'?: {[id: string]: any };
	}
	export interface Get_bucketReturnDataFormProperties {
		'collection:schema': FormControl<{[id: string]: any } | null | undefined>,
		'group:schema': FormControl<{[id: string]: any } | null | undefined>,
		'record:schema': FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGet_bucketReturnDataFormGroup() {
		return new FormGroup<Get_bucketReturnDataFormProperties>({
			'collection:schema': new FormControl<{[id: string]: any } | null | undefined>(undefined),
			'group:schema': new FormControl<{[id: string]: any } | null | undefined>(undefined),
			'record:schema': new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export interface Get_bucketReturnPermissions {
		'collection:create'?: Array<string>;
		'group:create'?: Array<string>;
		read?: Array<string>;
		write?: Array<string>;
	}
	export interface Get_bucketReturnPermissionsFormProperties {
	}
	export function CreateGet_bucketReturnPermissionsFormGroup() {
		return new FormGroup<Get_bucketReturnPermissionsFormProperties>({
		});

	}

}

