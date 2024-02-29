import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface RequestPattern {

		/** Pre-emptive basic auth credentials to match against */
		basicAuthCredentials?: RequestPatternBasicAuthCredentials;

		/** Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		bodyPatterns?: Array<string>;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method e.g. GET */
		method?: string | null;

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters?: string | null;

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url?: string | null;

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath?: string | null;

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern?: string | null;

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern?: string | null;
	}
	export interface RequestPatternFormProperties {

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method e.g. GET */
		method: FormControl<string | null | undefined>,

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters: FormControl<string | null | undefined>,

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url: FormControl<string | null | undefined>,

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath: FormControl<string | null | undefined>,

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern: FormControl<string | null | undefined>,

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function CreateRequestPatternFormGroup() {
		return new FormGroup<RequestPatternFormProperties>({
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			queryParameters: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlPath: new FormControl<string | null | undefined>(undefined),
			urlPathPattern: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RequestPatternBasicAuthCredentials {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface RequestPatternBasicAuthCredentialsFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function CreateRequestPatternBasicAuthCredentialsFormGroup() {
		return new FormGroup<RequestPatternBasicAuthCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StubMapping {

		/** This stub mapping's unique identifier */
		id?: string | null;

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata?: string | null;

		/** The stub mapping's name */
		name?: string | null;

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState?: string | null;

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent?: boolean | null;

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions?: string | null;

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority?: number | null;
		request?: StubMappingRequest;

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState?: string | null;
		response?: StubMappingResponse;

		/** The name of the scenario that this stub mapping is part of */
		scenarioName?: string | null;

		/** Alias for the id */
		uuid?: string | null;
	}
	export interface StubMappingFormProperties {

		/** This stub mapping's unique identifier */
		id: FormControl<string | null | undefined>,

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata: FormControl<string | null | undefined>,

		/** The stub mapping's name */
		name: FormControl<string | null | undefined>,

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState: FormControl<string | null | undefined>,

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent: FormControl<boolean | null | undefined>,

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions: FormControl<string | null | undefined>,

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority: FormControl<number | null | undefined>,

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState: FormControl<string | null | undefined>,

		/** The name of the scenario that this stub mapping is part of */
		scenarioName: FormControl<string | null | undefined>,

		/** Alias for the id */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateStubMappingFormGroup() {
		return new FormGroup<StubMappingFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			newScenarioState: new FormControl<string | null | undefined>(undefined),
			persistent: new FormControl<boolean | null | undefined>(undefined),
			postServeActions: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			requiredScenarioState: new FormControl<string | null | undefined>(undefined),
			scenarioName: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StubMappingRequest {

		/** Pre-emptive basic auth credentials to match against */
		basicAuthCredentials?: StubMappingRequestBasicAuthCredentials;

		/** Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		bodyPatterns?: Array<string>;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method e.g. GET */
		method?: string | null;

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters?: string | null;

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url?: string | null;

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath?: string | null;

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern?: string | null;

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern?: string | null;
	}
	export interface StubMappingRequestFormProperties {

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method e.g. GET */
		method: FormControl<string | null | undefined>,

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters: FormControl<string | null | undefined>,

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url: FormControl<string | null | undefined>,

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath: FormControl<string | null | undefined>,

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern: FormControl<string | null | undefined>,

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function CreateStubMappingRequestFormGroup() {
		return new FormGroup<StubMappingRequestFormProperties>({
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			queryParameters: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlPath: new FormControl<string | null | undefined>(undefined),
			urlPathPattern: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StubMappingRequestBasicAuthCredentials {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface StubMappingRequestBasicAuthCredentialsFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function CreateStubMappingRequestBasicAuthCredentialsFormGroup() {
		return new FormGroup<StubMappingRequestBasicAuthCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StubMappingResponse {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders?: string | null;

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body?: string | null;

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body?: string | null;

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName?: string | null;

		/** The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper. */
		delayDistribution?: StubMappingResponseDelayDistribution;

		/** The fault to apply (instead of a full, valid response). */
		fault?: StubMappingResponseFault | null;

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds?: number | null;

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub?: boolean | null;

		/** Map of response headers to send */
		headers?: string | null;

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody?: string | null;

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl?: string | null;

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** The HTTP status message to be returned */
		statusMessage?: string | null;

		/** Parameters to apply to response transformers. */
		transformerParameters?: string | null;

		/** List of names of transformers to apply to this response. */
		transformers?: Array<string>;
	}
	export interface StubMappingResponseFormProperties {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders: FormControl<string | null | undefined>,

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body: FormControl<string | null | undefined>,

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body: FormControl<string | null | undefined>,

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName: FormControl<string | null | undefined>,

		/** The fault to apply (instead of a full, valid response). */
		fault: FormControl<StubMappingResponseFault | null | undefined>,

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds: FormControl<number | null | undefined>,

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub: FormControl<boolean | null | undefined>,

		/** Map of response headers to send */
		headers: FormControl<string | null | undefined>,

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody: FormControl<string | null | undefined>,

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl: FormControl<string | null | undefined>,

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** The HTTP status message to be returned */
		statusMessage: FormControl<string | null | undefined>,

		/** Parameters to apply to response transformers. */
		transformerParameters: FormControl<string | null | undefined>,
	}
	export function CreateStubMappingResponseFormGroup() {
		return new FormGroup<StubMappingResponseFormProperties>({
			additionalProxyRequestHeaders: new FormControl<string | null | undefined>(undefined),
			base64Body: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			bodyFileName: new FormControl<string | null | undefined>(undefined),
			fault: new FormControl<StubMappingResponseFault | null | undefined>(undefined),
			fixedDelayMilliseconds: new FormControl<number | null | undefined>(undefined),
			fromConfiguredStub: new FormControl<boolean | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			jsonBody: new FormControl<string | null | undefined>(undefined),
			proxyBaseUrl: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			transformerParameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StubMappingResponseDelayDistribution {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median?: number | null;

		/** Type: double */
		sigma?: number | null;
		type?: StubMappingResponseDelayDistributionType | null;
	}
	export interface StubMappingResponseDelayDistributionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median: FormControl<number | null | undefined>,

		/** Type: double */
		sigma: FormControl<number | null | undefined>,
		type: FormControl<StubMappingResponseDelayDistributionType | null | undefined>,
	}
	export function CreateStubMappingResponseDelayDistributionFormGroup() {
		return new FormGroup<StubMappingResponseDelayDistributionFormProperties>({
			median: new FormControl<number | null | undefined>(undefined),
			sigma: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<StubMappingResponseDelayDistributionType | null | undefined>(undefined),
		});

	}

	export enum StubMappingResponseDelayDistributionType { lognormal = 'lognormal' }

	export enum StubMappingResponseFault { CONNECTION_RESET_BY_PEER = 'CONNECTION_RESET_BY_PEER', EMPTY_RESPONSE = 'EMPTY_RESPONSE', MALFORMED_RESPONSE_CHUNK = 'MALFORMED_RESPONSE_CHUNK', RANDOM_DATA_THEN_CLOSE = 'RANDOM_DATA_THEN_CLOSE' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete all stub mappings
		 * Delete __admin/mappings
		 * @return {void} Successfully deleted
		 */
		__adminMappingsDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '__admin/mappings', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all stub mappings
		 * Get __admin/mappings
		 * @param {number} limit The maximum number of results to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset The start index of the results to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {__adminMappingsGetByLimitAndOffsetReturn} All stub mappings
		 */
		__adminMappingsGetByLimitAndOffset(limit: number | null | undefined, offset: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<__adminMappingsGetByLimitAndOffsetReturn> {
			return this.http.get<__adminMappingsGetByLimitAndOffsetReturn>(this.baseUri + '__admin/mappings?limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new stub mapping
		 * Post __admin/mappings
		 * @return {void} 
		 */
		__adminMappingsPost(requestBody: __adminMappingsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '__admin/mappings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Find stubs by matching on their metadata
		 * Post __admin/mappings/find-by-metadata
		 * @return {__adminMappingsFind_by_metadataPostReturn} Matched stub mappings
		 */
		__adminMappingsFind_by_metadataPost(requestBody: __adminMappingsFind_by_metadataPostPostBody, headersHandler?: () => HttpHeaders): Observable<__adminMappingsFind_by_metadataPostReturn> {
			return this.http.post<__adminMappingsFind_by_metadataPostReturn>(this.baseUri + '__admin/mappings/find-by-metadata', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Import stub mappings
		 * Import given stub mappings to the backing store
		 * Post __admin/mappings/import
		 * @return {void} Successfully imported
		 */
		__adminMappingsImportPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '__admin/mappings/import', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete stub mappings matching metadata
		 * Post __admin/mappings/remove-by-metadata
		 * @return {void} The stub mappings were successfully removed
		 */
		__adminMappingsRemove_by_metadataPost(requestBody: __adminMappingsRemove_by_metadataPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '__admin/mappings/remove-by-metadata', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset stub mappings
		 * Restores stub mappings to the defaults defined back in the backing store
		 * Post __admin/mappings/reset
		 * @return {void} Successfully reset
		 */
		__adminMappingsResetPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '__admin/mappings/reset', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Persist stub mappings
		 * Save all persistent stub mappings to the backing store
		 * Post __admin/mappings/save
		 * @return {void} Successfully saved
		 */
		__adminMappingsSavePost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '__admin/mappings/save', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a stub mapping
		 * Delete __admin/mappings/{stubMappingId}
		 * @return {void} OK
		 */
		__adminMappings_stubMappingIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '__admin/mappings/{stubMappingId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get stub mapping by ID
		 * Get __admin/mappings/{stubMappingId}
		 * @return {__adminMappings_stubMappingIdGetReturn} The stub mapping
		 */
		__adminMappings_stubMappingIdGet(headersHandler?: () => HttpHeaders): Observable<__adminMappings_stubMappingIdGetReturn> {
			return this.http.get<__adminMappings_stubMappingIdGetReturn>(this.baseUri + '__admin/mappings/{stubMappingId}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a stub mapping
		 * Put __admin/mappings/{stubMappingId}
		 * @return {__adminMappings_stubMappingIdPutReturn} The stub mapping
		 */
		__adminMappings_stubMappingIdPut(requestBody: __adminMappings_stubMappingIdPutPutBody, headersHandler?: () => HttpHeaders): Observable<__adminMappings_stubMappingIdPutReturn> {
			return this.http.put<__adminMappings_stubMappingIdPutReturn>(this.baseUri + '__admin/mappings/{stubMappingId}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Find near misses matching specific request
		 * Find at most 3 near misses for closest stub mappings to the specified request
		 * Post __admin/near-misses/request
		 * @return {__adminNear_missesRequestPostReturn} Near misses matching criteria
		 */
		__adminNear_missesRequestPost(requestBody: __adminNear_missesRequestPostPostBody, headersHandler?: () => HttpHeaders): Observable<__adminNear_missesRequestPostReturn> {
			return this.http.post<__adminNear_missesRequestPostReturn>(this.baseUri + '__admin/near-misses/request', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Find near misses matching request pattern
		 * Find at most 3 near misses for closest logged requests to the specified request pattern
		 * Post __admin/near-misses/request-pattern
		 * @return {__adminNear_missesRequest_patternPostReturn} Near misses matching criteria
		 */
		__adminNear_missesRequest_patternPost(requestBody: __adminNear_missesRequest_patternPostPostBody, headersHandler?: () => HttpHeaders): Observable<__adminNear_missesRequest_patternPostReturn> {
			return this.http.post<__adminNear_missesRequest_patternPostReturn>(this.baseUri + '__admin/near-misses/request-pattern', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Take a snapshot recording
		 * Post __admin/recordings/snapshot
		 * @return {__adminRecordingsSnapshotPostReturn} Successfully took a snapshot recording
		 */
		__adminRecordingsSnapshotPost(requestBody: string, headersHandler?: () => HttpHeaders): Observable<__adminRecordingsSnapshotPostReturn> {
			return this.http.post<__adminRecordingsSnapshotPostReturn>(this.baseUri + '__admin/recordings/snapshot', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Start recording
		 * Begin recording stub mappings
		 * Post __admin/recordings/start
		 * @return {void} Successfully started recording
		 */
		__adminRecordingsStartPost(requestBody: __adminRecordingsStartPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '__admin/recordings/start', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get recording status
		 * Get __admin/recordings/status
		 * @return {__adminRecordingsStatusGetReturn} Successfully got the record status
		 */
		__adminRecordingsStatusGet(headersHandler?: () => HttpHeaders): Observable<__adminRecordingsStatusGetReturn> {
			return this.http.get<__adminRecordingsStatusGetReturn>(this.baseUri + '__admin/recordings/status', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Stop recording
		 * End recording of stub mappings
		 * Post __admin/recordings/stop
		 * @return {__adminRecordingsStopPostReturn} Successfully stopped recording
		 */
		__adminRecordingsStopPost(headersHandler?: () => HttpHeaders): Observable<__adminRecordingsStopPostReturn> {
			return this.http.post<__adminRecordingsStopPostReturn>(this.baseUri + '__admin/recordings/stop', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete all requests in journal
		 * Delete __admin/requests
		 * @return {void} Successfully deleted
		 */
		__adminRequestsDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '__admin/requests', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all requests in journal
		 * Get __admin/requests
		 * @param {string} limit The maximum number of results to return
		 * @param {string} since Only return logged requests after this date
		 * @return {void} List of received requests
		 */
		__adminRequestsGetByLimitAndSince(limit: string | null | undefined, since: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '__admin/requests?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&since=' + (since == null ? '' : encodeURIComponent(since)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Count requests by criteria
		 * Count requests logged in the journal matching the specified criteria
		 * Post __admin/requests/count
		 * @return {__adminRequestsCountPostReturn} Number of matching requests
		 */
		__adminRequestsCountPost(requestBody: __adminRequestsCountPostPostBody, headersHandler?: () => HttpHeaders): Observable<__adminRequestsCountPostReturn> {
			return this.http.post<__adminRequestsCountPostReturn>(this.baseUri + '__admin/requests/count', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Find requests by criteria
		 * Retrieve details of requests logged in the journal matching the specified criteria
		 * Post __admin/requests/find
		 * @return {void} Matching request details
		 */
		__adminRequestsFindPost(requestBody: __adminRequestsFindPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '__admin/requests/find', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove requests by criteria
		 * Removed requests logged in the journal matching the specified criteria
		 * Post __admin/requests/remove
		 * @return {void} Removed request details
		 */
		__adminRequestsRemovePost(requestBody: __adminRequestsRemovePostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '__admin/requests/remove', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete requests mappings matching metadata
		 * Post __admin/requests/remove-by-metadata
		 * @return {void} Removed request details
		 */
		__adminRequestsRemove_by_metadataPost(requestBody: __adminRequestsRemove_by_metadataPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '__admin/requests/remove-by-metadata', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Empty the request journal
		 * Post __admin/requests/reset
		 * @return {void} Successfully reset
		 */
		__adminRequestsResetPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '__admin/requests/reset', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Find unmatched requests
		 * Get details of logged requests that weren't matched by any stub mapping
		 * Get __admin/requests/unmatched
		 * @return {void} Unmatched request details
		 */
		__adminRequestsUnmatchedGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '__admin/requests/unmatched', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve near-misses for all unmatched requests
		 * Get __admin/requests/unmatched/near-misses
		 * @return {__adminRequestsUnmatchedNear_missesGetReturn} Near misses matching criteria
		 */
		__adminRequestsUnmatchedNear_missesGet(headersHandler?: () => HttpHeaders): Observable<__adminRequestsUnmatchedNear_missesGetReturn> {
			return this.http.get<__adminRequestsUnmatchedNear_missesGetReturn>(this.baseUri + '__admin/requests/unmatched/near-misses', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete request by ID
		 * Delete __admin/requests/{requestId}
		 * @param {string} requestId The UUID of the logged request
		 * @return {void} Successfully deleted
		 */
		__adminRequests_requestIdDelete(requestId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '__admin/requests/' + (requestId == null ? '' : encodeURIComponent(requestId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get request by ID
		 * Get __admin/requests/{requestId}
		 * @param {string} requestId The UUID of the logged request
		 * @return {void} OK
		 */
		__adminRequests_requestIdGet(requestId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '__admin/requests/' + (requestId == null ? '' : encodeURIComponent(requestId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset mappings and request journal
		 * Reset mappings to the default state and reset the request journal
		 * Post __admin/reset
		 * @return {void} Successfully reset
		 */
		__adminResetPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '__admin/reset', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all scenarios
		 * Get __admin/scenarios
		 * @return {__adminScenariosGetReturn} All scenarios
		 */
		__adminScenariosGet(headersHandler?: () => HttpHeaders): Observable<__adminScenariosGetReturn> {
			return this.http.get<__adminScenariosGetReturn>(this.baseUri + '__admin/scenarios', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Reset the state of all scenarios
		 * Post __admin/scenarios/reset
		 * @return {void} Successfully reset
		 */
		__adminScenariosResetPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '__admin/scenarios/reset', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update global settings
		 * Post __admin/settings
		 * @return {void} Settings successfully updated
		 */
		__adminSettingsPost(requestBody: __adminSettingsPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '__admin/settings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Shutdown the WireMock server
		 * Post __admin/shutdown
		 * @return {void} Server will be shut down
		 */
		__adminShutdownPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '__admin/shutdown', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export interface __adminMappingsGetByLimitAndOffsetReturn {
		__adminMappingsGetByLimitAndOffsetReturnMappings?: Array<__adminMappingsGetByLimitAndOffsetReturnMappings>;
		meta?: __adminMappingsGetByLimitAndOffsetReturnMeta;
	}
	export interface __adminMappingsGetByLimitAndOffsetReturnFormProperties {
	}
	export function Create__adminMappingsGetByLimitAndOffsetReturnFormGroup() {
		return new FormGroup<__adminMappingsGetByLimitAndOffsetReturnFormProperties>({
		});

	}

	export interface __adminMappingsGetByLimitAndOffsetReturnMappings {

		/** This stub mapping's unique identifier */
		id?: string | null;

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata?: string | null;

		/** The stub mapping's name */
		name?: string | null;

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState?: string | null;

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent?: boolean | null;

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions?: string | null;

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority?: number | null;
		request?: __adminMappingsGetByLimitAndOffsetReturnMappingsRequest;

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState?: string | null;
		response?: __adminMappingsGetByLimitAndOffsetReturnMappingsResponse;

		/** The name of the scenario that this stub mapping is part of */
		scenarioName?: string | null;

		/** Alias for the id */
		uuid?: string | null;
	}
	export interface __adminMappingsGetByLimitAndOffsetReturnMappingsFormProperties {

		/** This stub mapping's unique identifier */
		id: FormControl<string | null | undefined>,

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata: FormControl<string | null | undefined>,

		/** The stub mapping's name */
		name: FormControl<string | null | undefined>,

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState: FormControl<string | null | undefined>,

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent: FormControl<boolean | null | undefined>,

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions: FormControl<string | null | undefined>,

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority: FormControl<number | null | undefined>,

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState: FormControl<string | null | undefined>,

		/** The name of the scenario that this stub mapping is part of */
		scenarioName: FormControl<string | null | undefined>,

		/** Alias for the id */
		uuid: FormControl<string | null | undefined>,
	}
	export function Create__adminMappingsGetByLimitAndOffsetReturnMappingsFormGroup() {
		return new FormGroup<__adminMappingsGetByLimitAndOffsetReturnMappingsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			newScenarioState: new FormControl<string | null | undefined>(undefined),
			persistent: new FormControl<boolean | null | undefined>(undefined),
			postServeActions: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			requiredScenarioState: new FormControl<string | null | undefined>(undefined),
			scenarioName: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappingsGetByLimitAndOffsetReturnMappingsRequest {

		/** Pre-emptive basic auth credentials to match against */
		basicAuthCredentials?: __adminMappingsGetByLimitAndOffsetReturnMappingsRequestBasicAuthCredentials;

		/** Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		bodyPatterns?: Array<string>;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method e.g. GET */
		method?: string | null;

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters?: string | null;

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url?: string | null;

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath?: string | null;

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern?: string | null;

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern?: string | null;
	}
	export interface __adminMappingsGetByLimitAndOffsetReturnMappingsRequestFormProperties {

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method e.g. GET */
		method: FormControl<string | null | undefined>,

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters: FormControl<string | null | undefined>,

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url: FormControl<string | null | undefined>,

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath: FormControl<string | null | undefined>,

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern: FormControl<string | null | undefined>,

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function Create__adminMappingsGetByLimitAndOffsetReturnMappingsRequestFormGroup() {
		return new FormGroup<__adminMappingsGetByLimitAndOffsetReturnMappingsRequestFormProperties>({
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			queryParameters: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlPath: new FormControl<string | null | undefined>(undefined),
			urlPathPattern: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappingsGetByLimitAndOffsetReturnMappingsRequestBasicAuthCredentials {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface __adminMappingsGetByLimitAndOffsetReturnMappingsRequestBasicAuthCredentialsFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function Create__adminMappingsGetByLimitAndOffsetReturnMappingsRequestBasicAuthCredentialsFormGroup() {
		return new FormGroup<__adminMappingsGetByLimitAndOffsetReturnMappingsRequestBasicAuthCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminMappingsGetByLimitAndOffsetReturnMappingsResponse {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders?: string | null;

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body?: string | null;

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body?: string | null;

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName?: string | null;

		/** The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper. */
		delayDistribution?: __adminMappingsGetByLimitAndOffsetReturnMappingsResponseDelayDistribution;

		/** The fault to apply (instead of a full, valid response). */
		fault?: StubMappingResponseFault | null;

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds?: number | null;

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub?: boolean | null;

		/** Map of response headers to send */
		headers?: string | null;

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody?: string | null;

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl?: string | null;

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** The HTTP status message to be returned */
		statusMessage?: string | null;

		/** Parameters to apply to response transformers. */
		transformerParameters?: string | null;

		/** List of names of transformers to apply to this response. */
		transformers?: Array<string>;
	}
	export interface __adminMappingsGetByLimitAndOffsetReturnMappingsResponseFormProperties {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders: FormControl<string | null | undefined>,

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body: FormControl<string | null | undefined>,

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body: FormControl<string | null | undefined>,

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName: FormControl<string | null | undefined>,

		/** The fault to apply (instead of a full, valid response). */
		fault: FormControl<StubMappingResponseFault | null | undefined>,

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds: FormControl<number | null | undefined>,

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub: FormControl<boolean | null | undefined>,

		/** Map of response headers to send */
		headers: FormControl<string | null | undefined>,

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody: FormControl<string | null | undefined>,

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl: FormControl<string | null | undefined>,

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** The HTTP status message to be returned */
		statusMessage: FormControl<string | null | undefined>,

		/** Parameters to apply to response transformers. */
		transformerParameters: FormControl<string | null | undefined>,
	}
	export function Create__adminMappingsGetByLimitAndOffsetReturnMappingsResponseFormGroup() {
		return new FormGroup<__adminMappingsGetByLimitAndOffsetReturnMappingsResponseFormProperties>({
			additionalProxyRequestHeaders: new FormControl<string | null | undefined>(undefined),
			base64Body: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			bodyFileName: new FormControl<string | null | undefined>(undefined),
			fault: new FormControl<StubMappingResponseFault | null | undefined>(undefined),
			fixedDelayMilliseconds: new FormControl<number | null | undefined>(undefined),
			fromConfiguredStub: new FormControl<boolean | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			jsonBody: new FormControl<string | null | undefined>(undefined),
			proxyBaseUrl: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			transformerParameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappingsGetByLimitAndOffsetReturnMappingsResponseDelayDistribution {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median?: number | null;

		/** Type: double */
		sigma?: number | null;
		type?: StubMappingResponseDelayDistributionType | null;
	}
	export interface __adminMappingsGetByLimitAndOffsetReturnMappingsResponseDelayDistributionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median: FormControl<number | null | undefined>,

		/** Type: double */
		sigma: FormControl<number | null | undefined>,
		type: FormControl<StubMappingResponseDelayDistributionType | null | undefined>,
	}
	export function Create__adminMappingsGetByLimitAndOffsetReturnMappingsResponseDelayDistributionFormGroup() {
		return new FormGroup<__adminMappingsGetByLimitAndOffsetReturnMappingsResponseDelayDistributionFormProperties>({
			median: new FormControl<number | null | undefined>(undefined),
			sigma: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<StubMappingResponseDelayDistributionType | null | undefined>(undefined),
		});

	}

	export interface __adminMappingsGetByLimitAndOffsetReturnMeta {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface __adminMappingsGetByLimitAndOffsetReturnMetaFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function Create__adminMappingsGetByLimitAndOffsetReturnMetaFormGroup() {
		return new FormGroup<__adminMappingsGetByLimitAndOffsetReturnMetaFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminMappingsPostPostBody {

		/** This stub mapping's unique identifier */
		id?: string | null;

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata?: string | null;

		/** The stub mapping's name */
		name?: string | null;

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState?: string | null;

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent?: boolean | null;

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions?: string | null;

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority?: number | null;
		request?: __adminMappingsPostPostBodyRequest;

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState?: string | null;
		response?: __adminMappingsPostPostBodyResponse;

		/** The name of the scenario that this stub mapping is part of */
		scenarioName?: string | null;

		/** Alias for the id */
		uuid?: string | null;
	}
	export interface __adminMappingsPostPostBodyFormProperties {

		/** This stub mapping's unique identifier */
		id: FormControl<string | null | undefined>,

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata: FormControl<string | null | undefined>,

		/** The stub mapping's name */
		name: FormControl<string | null | undefined>,

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState: FormControl<string | null | undefined>,

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent: FormControl<boolean | null | undefined>,

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions: FormControl<string | null | undefined>,

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority: FormControl<number | null | undefined>,

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState: FormControl<string | null | undefined>,

		/** The name of the scenario that this stub mapping is part of */
		scenarioName: FormControl<string | null | undefined>,

		/** Alias for the id */
		uuid: FormControl<string | null | undefined>,
	}
	export function Create__adminMappingsPostPostBodyFormGroup() {
		return new FormGroup<__adminMappingsPostPostBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			newScenarioState: new FormControl<string | null | undefined>(undefined),
			persistent: new FormControl<boolean | null | undefined>(undefined),
			postServeActions: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			requiredScenarioState: new FormControl<string | null | undefined>(undefined),
			scenarioName: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappingsPostPostBodyRequest {

		/** Pre-emptive basic auth credentials to match against */
		basicAuthCredentials?: __adminMappingsPostPostBodyRequestBasicAuthCredentials;

		/** Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		bodyPatterns?: Array<string>;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method e.g. GET */
		method?: string | null;

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters?: string | null;

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url?: string | null;

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath?: string | null;

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern?: string | null;

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern?: string | null;
	}
	export interface __adminMappingsPostPostBodyRequestFormProperties {

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method e.g. GET */
		method: FormControl<string | null | undefined>,

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters: FormControl<string | null | undefined>,

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url: FormControl<string | null | undefined>,

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath: FormControl<string | null | undefined>,

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern: FormControl<string | null | undefined>,

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function Create__adminMappingsPostPostBodyRequestFormGroup() {
		return new FormGroup<__adminMappingsPostPostBodyRequestFormProperties>({
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			queryParameters: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlPath: new FormControl<string | null | undefined>(undefined),
			urlPathPattern: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappingsPostPostBodyRequestBasicAuthCredentials {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface __adminMappingsPostPostBodyRequestBasicAuthCredentialsFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function Create__adminMappingsPostPostBodyRequestBasicAuthCredentialsFormGroup() {
		return new FormGroup<__adminMappingsPostPostBodyRequestBasicAuthCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminMappingsPostPostBodyResponse {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders?: string | null;

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body?: string | null;

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body?: string | null;

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName?: string | null;

		/** The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper. */
		delayDistribution?: __adminMappingsPostPostBodyResponseDelayDistribution;

		/** The fault to apply (instead of a full, valid response). */
		fault?: StubMappingResponseFault | null;

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds?: number | null;

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub?: boolean | null;

		/** Map of response headers to send */
		headers?: string | null;

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody?: string | null;

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl?: string | null;

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** The HTTP status message to be returned */
		statusMessage?: string | null;

		/** Parameters to apply to response transformers. */
		transformerParameters?: string | null;

		/** List of names of transformers to apply to this response. */
		transformers?: Array<string>;
	}
	export interface __adminMappingsPostPostBodyResponseFormProperties {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders: FormControl<string | null | undefined>,

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body: FormControl<string | null | undefined>,

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body: FormControl<string | null | undefined>,

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName: FormControl<string | null | undefined>,

		/** The fault to apply (instead of a full, valid response). */
		fault: FormControl<StubMappingResponseFault | null | undefined>,

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds: FormControl<number | null | undefined>,

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub: FormControl<boolean | null | undefined>,

		/** Map of response headers to send */
		headers: FormControl<string | null | undefined>,

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody: FormControl<string | null | undefined>,

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl: FormControl<string | null | undefined>,

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** The HTTP status message to be returned */
		statusMessage: FormControl<string | null | undefined>,

		/** Parameters to apply to response transformers. */
		transformerParameters: FormControl<string | null | undefined>,
	}
	export function Create__adminMappingsPostPostBodyResponseFormGroup() {
		return new FormGroup<__adminMappingsPostPostBodyResponseFormProperties>({
			additionalProxyRequestHeaders: new FormControl<string | null | undefined>(undefined),
			base64Body: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			bodyFileName: new FormControl<string | null | undefined>(undefined),
			fault: new FormControl<StubMappingResponseFault | null | undefined>(undefined),
			fixedDelayMilliseconds: new FormControl<number | null | undefined>(undefined),
			fromConfiguredStub: new FormControl<boolean | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			jsonBody: new FormControl<string | null | undefined>(undefined),
			proxyBaseUrl: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			transformerParameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappingsPostPostBodyResponseDelayDistribution {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median?: number | null;

		/** Type: double */
		sigma?: number | null;
		type?: StubMappingResponseDelayDistributionType | null;
	}
	export interface __adminMappingsPostPostBodyResponseDelayDistributionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median: FormControl<number | null | undefined>,

		/** Type: double */
		sigma: FormControl<number | null | undefined>,
		type: FormControl<StubMappingResponseDelayDistributionType | null | undefined>,
	}
	export function Create__adminMappingsPostPostBodyResponseDelayDistributionFormGroup() {
		return new FormGroup<__adminMappingsPostPostBodyResponseDelayDistributionFormProperties>({
			median: new FormControl<number | null | undefined>(undefined),
			sigma: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<StubMappingResponseDelayDistributionType | null | undefined>(undefined),
		});

	}

	export interface __adminMappingsFind_by_metadataPostPostBody {
		caseInsensitive?: boolean | null;

		/** Required */
		equalTo: boolean;
	}
	export interface __adminMappingsFind_by_metadataPostPostBodyFormProperties {
		caseInsensitive: FormControl<boolean | null | undefined>,

		/** Required */
		equalTo: FormControl<boolean | null | undefined>,
	}
	export function Create__adminMappingsFind_by_metadataPostPostBodyFormGroup() {
		return new FormGroup<__adminMappingsFind_by_metadataPostPostBodyFormProperties>({
			caseInsensitive: new FormControl<boolean | null | undefined>(undefined),
			equalTo: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminMappingsFind_by_metadataPostReturn {
		__adminMappingsFind_by_metadataPostReturnMappings?: Array<__adminMappingsFind_by_metadataPostReturnMappings>;
		meta?: __adminMappingsFind_by_metadataPostReturnMeta;
	}
	export interface __adminMappingsFind_by_metadataPostReturnFormProperties {
	}
	export function Create__adminMappingsFind_by_metadataPostReturnFormGroup() {
		return new FormGroup<__adminMappingsFind_by_metadataPostReturnFormProperties>({
		});

	}

	export interface __adminMappingsFind_by_metadataPostReturnMappings {

		/** This stub mapping's unique identifier */
		id?: string | null;

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata?: string | null;

		/** The stub mapping's name */
		name?: string | null;

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState?: string | null;

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent?: boolean | null;

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions?: string | null;

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority?: number | null;
		request?: __adminMappingsFind_by_metadataPostReturnMappingsRequest;

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState?: string | null;
		response?: __adminMappingsFind_by_metadataPostReturnMappingsResponse;

		/** The name of the scenario that this stub mapping is part of */
		scenarioName?: string | null;

		/** Alias for the id */
		uuid?: string | null;
	}
	export interface __adminMappingsFind_by_metadataPostReturnMappingsFormProperties {

		/** This stub mapping's unique identifier */
		id: FormControl<string | null | undefined>,

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata: FormControl<string | null | undefined>,

		/** The stub mapping's name */
		name: FormControl<string | null | undefined>,

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState: FormControl<string | null | undefined>,

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent: FormControl<boolean | null | undefined>,

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions: FormControl<string | null | undefined>,

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority: FormControl<number | null | undefined>,

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState: FormControl<string | null | undefined>,

		/** The name of the scenario that this stub mapping is part of */
		scenarioName: FormControl<string | null | undefined>,

		/** Alias for the id */
		uuid: FormControl<string | null | undefined>,
	}
	export function Create__adminMappingsFind_by_metadataPostReturnMappingsFormGroup() {
		return new FormGroup<__adminMappingsFind_by_metadataPostReturnMappingsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			newScenarioState: new FormControl<string | null | undefined>(undefined),
			persistent: new FormControl<boolean | null | undefined>(undefined),
			postServeActions: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			requiredScenarioState: new FormControl<string | null | undefined>(undefined),
			scenarioName: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappingsFind_by_metadataPostReturnMappingsRequest {

		/** Pre-emptive basic auth credentials to match against */
		basicAuthCredentials?: __adminMappingsFind_by_metadataPostReturnMappingsRequestBasicAuthCredentials;

		/** Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		bodyPatterns?: Array<string>;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method e.g. GET */
		method?: string | null;

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters?: string | null;

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url?: string | null;

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath?: string | null;

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern?: string | null;

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern?: string | null;
	}
	export interface __adminMappingsFind_by_metadataPostReturnMappingsRequestFormProperties {

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method e.g. GET */
		method: FormControl<string | null | undefined>,

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters: FormControl<string | null | undefined>,

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url: FormControl<string | null | undefined>,

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath: FormControl<string | null | undefined>,

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern: FormControl<string | null | undefined>,

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function Create__adminMappingsFind_by_metadataPostReturnMappingsRequestFormGroup() {
		return new FormGroup<__adminMappingsFind_by_metadataPostReturnMappingsRequestFormProperties>({
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			queryParameters: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlPath: new FormControl<string | null | undefined>(undefined),
			urlPathPattern: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappingsFind_by_metadataPostReturnMappingsRequestBasicAuthCredentials {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface __adminMappingsFind_by_metadataPostReturnMappingsRequestBasicAuthCredentialsFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function Create__adminMappingsFind_by_metadataPostReturnMappingsRequestBasicAuthCredentialsFormGroup() {
		return new FormGroup<__adminMappingsFind_by_metadataPostReturnMappingsRequestBasicAuthCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminMappingsFind_by_metadataPostReturnMappingsResponse {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders?: string | null;

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body?: string | null;

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body?: string | null;

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName?: string | null;

		/** The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper. */
		delayDistribution?: __adminMappingsFind_by_metadataPostReturnMappingsResponseDelayDistribution;

		/** The fault to apply (instead of a full, valid response). */
		fault?: StubMappingResponseFault | null;

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds?: number | null;

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub?: boolean | null;

		/** Map of response headers to send */
		headers?: string | null;

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody?: string | null;

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl?: string | null;

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** The HTTP status message to be returned */
		statusMessage?: string | null;

		/** Parameters to apply to response transformers. */
		transformerParameters?: string | null;

		/** List of names of transformers to apply to this response. */
		transformers?: Array<string>;
	}
	export interface __adminMappingsFind_by_metadataPostReturnMappingsResponseFormProperties {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders: FormControl<string | null | undefined>,

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body: FormControl<string | null | undefined>,

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body: FormControl<string | null | undefined>,

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName: FormControl<string | null | undefined>,

		/** The fault to apply (instead of a full, valid response). */
		fault: FormControl<StubMappingResponseFault | null | undefined>,

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds: FormControl<number | null | undefined>,

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub: FormControl<boolean | null | undefined>,

		/** Map of response headers to send */
		headers: FormControl<string | null | undefined>,

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody: FormControl<string | null | undefined>,

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl: FormControl<string | null | undefined>,

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** The HTTP status message to be returned */
		statusMessage: FormControl<string | null | undefined>,

		/** Parameters to apply to response transformers. */
		transformerParameters: FormControl<string | null | undefined>,
	}
	export function Create__adminMappingsFind_by_metadataPostReturnMappingsResponseFormGroup() {
		return new FormGroup<__adminMappingsFind_by_metadataPostReturnMappingsResponseFormProperties>({
			additionalProxyRequestHeaders: new FormControl<string | null | undefined>(undefined),
			base64Body: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			bodyFileName: new FormControl<string | null | undefined>(undefined),
			fault: new FormControl<StubMappingResponseFault | null | undefined>(undefined),
			fixedDelayMilliseconds: new FormControl<number | null | undefined>(undefined),
			fromConfiguredStub: new FormControl<boolean | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			jsonBody: new FormControl<string | null | undefined>(undefined),
			proxyBaseUrl: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			transformerParameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappingsFind_by_metadataPostReturnMappingsResponseDelayDistribution {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median?: number | null;

		/** Type: double */
		sigma?: number | null;
		type?: StubMappingResponseDelayDistributionType | null;
	}
	export interface __adminMappingsFind_by_metadataPostReturnMappingsResponseDelayDistributionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median: FormControl<number | null | undefined>,

		/** Type: double */
		sigma: FormControl<number | null | undefined>,
		type: FormControl<StubMappingResponseDelayDistributionType | null | undefined>,
	}
	export function Create__adminMappingsFind_by_metadataPostReturnMappingsResponseDelayDistributionFormGroup() {
		return new FormGroup<__adminMappingsFind_by_metadataPostReturnMappingsResponseDelayDistributionFormProperties>({
			median: new FormControl<number | null | undefined>(undefined),
			sigma: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<StubMappingResponseDelayDistributionType | null | undefined>(undefined),
		});

	}

	export interface __adminMappingsFind_by_metadataPostReturnMeta {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface __adminMappingsFind_by_metadataPostReturnMetaFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function Create__adminMappingsFind_by_metadataPostReturnMetaFormGroup() {
		return new FormGroup<__adminMappingsFind_by_metadataPostReturnMetaFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminMappingsRemove_by_metadataPostPostBody {
		caseInsensitive?: boolean | null;

		/** Required */
		equalTo: boolean;
	}
	export interface __adminMappingsRemove_by_metadataPostPostBodyFormProperties {
		caseInsensitive: FormControl<boolean | null | undefined>,

		/** Required */
		equalTo: FormControl<boolean | null | undefined>,
	}
	export function Create__adminMappingsRemove_by_metadataPostPostBodyFormGroup() {
		return new FormGroup<__adminMappingsRemove_by_metadataPostPostBodyFormProperties>({
			caseInsensitive: new FormControl<boolean | null | undefined>(undefined),
			equalTo: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminMappings_stubMappingIdGetReturn {

		/** This stub mapping's unique identifier */
		id?: string | null;

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata?: string | null;

		/** The stub mapping's name */
		name?: string | null;

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState?: string | null;

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent?: boolean | null;

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions?: string | null;

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority?: number | null;
		request?: __adminMappings_stubMappingIdGetReturnRequest;

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState?: string | null;
		response?: __adminMappings_stubMappingIdGetReturnResponse;

		/** The name of the scenario that this stub mapping is part of */
		scenarioName?: string | null;

		/** Alias for the id */
		uuid?: string | null;
	}
	export interface __adminMappings_stubMappingIdGetReturnFormProperties {

		/** This stub mapping's unique identifier */
		id: FormControl<string | null | undefined>,

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata: FormControl<string | null | undefined>,

		/** The stub mapping's name */
		name: FormControl<string | null | undefined>,

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState: FormControl<string | null | undefined>,

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent: FormControl<boolean | null | undefined>,

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions: FormControl<string | null | undefined>,

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority: FormControl<number | null | undefined>,

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState: FormControl<string | null | undefined>,

		/** The name of the scenario that this stub mapping is part of */
		scenarioName: FormControl<string | null | undefined>,

		/** Alias for the id */
		uuid: FormControl<string | null | undefined>,
	}
	export function Create__adminMappings_stubMappingIdGetReturnFormGroup() {
		return new FormGroup<__adminMappings_stubMappingIdGetReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			newScenarioState: new FormControl<string | null | undefined>(undefined),
			persistent: new FormControl<boolean | null | undefined>(undefined),
			postServeActions: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			requiredScenarioState: new FormControl<string | null | undefined>(undefined),
			scenarioName: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappings_stubMappingIdGetReturnRequest {

		/** Pre-emptive basic auth credentials to match against */
		basicAuthCredentials?: __adminMappings_stubMappingIdGetReturnRequestBasicAuthCredentials;

		/** Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		bodyPatterns?: Array<string>;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method e.g. GET */
		method?: string | null;

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters?: string | null;

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url?: string | null;

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath?: string | null;

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern?: string | null;

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern?: string | null;
	}
	export interface __adminMappings_stubMappingIdGetReturnRequestFormProperties {

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method e.g. GET */
		method: FormControl<string | null | undefined>,

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters: FormControl<string | null | undefined>,

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url: FormControl<string | null | undefined>,

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath: FormControl<string | null | undefined>,

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern: FormControl<string | null | undefined>,

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function Create__adminMappings_stubMappingIdGetReturnRequestFormGroup() {
		return new FormGroup<__adminMappings_stubMappingIdGetReturnRequestFormProperties>({
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			queryParameters: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlPath: new FormControl<string | null | undefined>(undefined),
			urlPathPattern: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappings_stubMappingIdGetReturnRequestBasicAuthCredentials {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface __adminMappings_stubMappingIdGetReturnRequestBasicAuthCredentialsFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function Create__adminMappings_stubMappingIdGetReturnRequestBasicAuthCredentialsFormGroup() {
		return new FormGroup<__adminMappings_stubMappingIdGetReturnRequestBasicAuthCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminMappings_stubMappingIdGetReturnResponse {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders?: string | null;

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body?: string | null;

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body?: string | null;

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName?: string | null;

		/** The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper. */
		delayDistribution?: __adminMappings_stubMappingIdGetReturnResponseDelayDistribution;

		/** The fault to apply (instead of a full, valid response). */
		fault?: StubMappingResponseFault | null;

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds?: number | null;

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub?: boolean | null;

		/** Map of response headers to send */
		headers?: string | null;

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody?: string | null;

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl?: string | null;

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** The HTTP status message to be returned */
		statusMessage?: string | null;

		/** Parameters to apply to response transformers. */
		transformerParameters?: string | null;

		/** List of names of transformers to apply to this response. */
		transformers?: Array<string>;
	}
	export interface __adminMappings_stubMappingIdGetReturnResponseFormProperties {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders: FormControl<string | null | undefined>,

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body: FormControl<string | null | undefined>,

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body: FormControl<string | null | undefined>,

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName: FormControl<string | null | undefined>,

		/** The fault to apply (instead of a full, valid response). */
		fault: FormControl<StubMappingResponseFault | null | undefined>,

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds: FormControl<number | null | undefined>,

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub: FormControl<boolean | null | undefined>,

		/** Map of response headers to send */
		headers: FormControl<string | null | undefined>,

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody: FormControl<string | null | undefined>,

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl: FormControl<string | null | undefined>,

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** The HTTP status message to be returned */
		statusMessage: FormControl<string | null | undefined>,

		/** Parameters to apply to response transformers. */
		transformerParameters: FormControl<string | null | undefined>,
	}
	export function Create__adminMappings_stubMappingIdGetReturnResponseFormGroup() {
		return new FormGroup<__adminMappings_stubMappingIdGetReturnResponseFormProperties>({
			additionalProxyRequestHeaders: new FormControl<string | null | undefined>(undefined),
			base64Body: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			bodyFileName: new FormControl<string | null | undefined>(undefined),
			fault: new FormControl<StubMappingResponseFault | null | undefined>(undefined),
			fixedDelayMilliseconds: new FormControl<number | null | undefined>(undefined),
			fromConfiguredStub: new FormControl<boolean | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			jsonBody: new FormControl<string | null | undefined>(undefined),
			proxyBaseUrl: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			transformerParameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappings_stubMappingIdGetReturnResponseDelayDistribution {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median?: number | null;

		/** Type: double */
		sigma?: number | null;
		type?: StubMappingResponseDelayDistributionType | null;
	}
	export interface __adminMappings_stubMappingIdGetReturnResponseDelayDistributionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median: FormControl<number | null | undefined>,

		/** Type: double */
		sigma: FormControl<number | null | undefined>,
		type: FormControl<StubMappingResponseDelayDistributionType | null | undefined>,
	}
	export function Create__adminMappings_stubMappingIdGetReturnResponseDelayDistributionFormGroup() {
		return new FormGroup<__adminMappings_stubMappingIdGetReturnResponseDelayDistributionFormProperties>({
			median: new FormControl<number | null | undefined>(undefined),
			sigma: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<StubMappingResponseDelayDistributionType | null | undefined>(undefined),
		});

	}

	export interface __adminMappings_stubMappingIdPutPutBody {

		/** This stub mapping's unique identifier */
		id?: string | null;

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata?: string | null;

		/** The stub mapping's name */
		name?: string | null;

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState?: string | null;

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent?: boolean | null;

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions?: string | null;

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority?: number | null;
		request?: __adminMappings_stubMappingIdPutPutBodyRequest;

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState?: string | null;
		response?: __adminMappings_stubMappingIdPutPutBodyResponse;

		/** The name of the scenario that this stub mapping is part of */
		scenarioName?: string | null;

		/** Alias for the id */
		uuid?: string | null;
	}
	export interface __adminMappings_stubMappingIdPutPutBodyFormProperties {

		/** This stub mapping's unique identifier */
		id: FormControl<string | null | undefined>,

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata: FormControl<string | null | undefined>,

		/** The stub mapping's name */
		name: FormControl<string | null | undefined>,

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState: FormControl<string | null | undefined>,

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent: FormControl<boolean | null | undefined>,

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions: FormControl<string | null | undefined>,

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority: FormControl<number | null | undefined>,

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState: FormControl<string | null | undefined>,

		/** The name of the scenario that this stub mapping is part of */
		scenarioName: FormControl<string | null | undefined>,

		/** Alias for the id */
		uuid: FormControl<string | null | undefined>,
	}
	export function Create__adminMappings_stubMappingIdPutPutBodyFormGroup() {
		return new FormGroup<__adminMappings_stubMappingIdPutPutBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			newScenarioState: new FormControl<string | null | undefined>(undefined),
			persistent: new FormControl<boolean | null | undefined>(undefined),
			postServeActions: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			requiredScenarioState: new FormControl<string | null | undefined>(undefined),
			scenarioName: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappings_stubMappingIdPutPutBodyRequest {

		/** Pre-emptive basic auth credentials to match against */
		basicAuthCredentials?: __adminMappings_stubMappingIdPutPutBodyRequestBasicAuthCredentials;

		/** Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		bodyPatterns?: Array<string>;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method e.g. GET */
		method?: string | null;

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters?: string | null;

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url?: string | null;

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath?: string | null;

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern?: string | null;

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern?: string | null;
	}
	export interface __adminMappings_stubMappingIdPutPutBodyRequestFormProperties {

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method e.g. GET */
		method: FormControl<string | null | undefined>,

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters: FormControl<string | null | undefined>,

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url: FormControl<string | null | undefined>,

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath: FormControl<string | null | undefined>,

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern: FormControl<string | null | undefined>,

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function Create__adminMappings_stubMappingIdPutPutBodyRequestFormGroup() {
		return new FormGroup<__adminMappings_stubMappingIdPutPutBodyRequestFormProperties>({
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			queryParameters: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlPath: new FormControl<string | null | undefined>(undefined),
			urlPathPattern: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappings_stubMappingIdPutPutBodyRequestBasicAuthCredentials {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface __adminMappings_stubMappingIdPutPutBodyRequestBasicAuthCredentialsFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function Create__adminMappings_stubMappingIdPutPutBodyRequestBasicAuthCredentialsFormGroup() {
		return new FormGroup<__adminMappings_stubMappingIdPutPutBodyRequestBasicAuthCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminMappings_stubMappingIdPutPutBodyResponse {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders?: string | null;

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body?: string | null;

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body?: string | null;

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName?: string | null;

		/** The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper. */
		delayDistribution?: __adminMappings_stubMappingIdPutPutBodyResponseDelayDistribution;

		/** The fault to apply (instead of a full, valid response). */
		fault?: StubMappingResponseFault | null;

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds?: number | null;

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub?: boolean | null;

		/** Map of response headers to send */
		headers?: string | null;

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody?: string | null;

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl?: string | null;

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** The HTTP status message to be returned */
		statusMessage?: string | null;

		/** Parameters to apply to response transformers. */
		transformerParameters?: string | null;

		/** List of names of transformers to apply to this response. */
		transformers?: Array<string>;
	}
	export interface __adminMappings_stubMappingIdPutPutBodyResponseFormProperties {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders: FormControl<string | null | undefined>,

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body: FormControl<string | null | undefined>,

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body: FormControl<string | null | undefined>,

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName: FormControl<string | null | undefined>,

		/** The fault to apply (instead of a full, valid response). */
		fault: FormControl<StubMappingResponseFault | null | undefined>,

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds: FormControl<number | null | undefined>,

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub: FormControl<boolean | null | undefined>,

		/** Map of response headers to send */
		headers: FormControl<string | null | undefined>,

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody: FormControl<string | null | undefined>,

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl: FormControl<string | null | undefined>,

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** The HTTP status message to be returned */
		statusMessage: FormControl<string | null | undefined>,

		/** Parameters to apply to response transformers. */
		transformerParameters: FormControl<string | null | undefined>,
	}
	export function Create__adminMappings_stubMappingIdPutPutBodyResponseFormGroup() {
		return new FormGroup<__adminMappings_stubMappingIdPutPutBodyResponseFormProperties>({
			additionalProxyRequestHeaders: new FormControl<string | null | undefined>(undefined),
			base64Body: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			bodyFileName: new FormControl<string | null | undefined>(undefined),
			fault: new FormControl<StubMappingResponseFault | null | undefined>(undefined),
			fixedDelayMilliseconds: new FormControl<number | null | undefined>(undefined),
			fromConfiguredStub: new FormControl<boolean | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			jsonBody: new FormControl<string | null | undefined>(undefined),
			proxyBaseUrl: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			transformerParameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappings_stubMappingIdPutPutBodyResponseDelayDistribution {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median?: number | null;

		/** Type: double */
		sigma?: number | null;
		type?: StubMappingResponseDelayDistributionType | null;
	}
	export interface __adminMappings_stubMappingIdPutPutBodyResponseDelayDistributionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median: FormControl<number | null | undefined>,

		/** Type: double */
		sigma: FormControl<number | null | undefined>,
		type: FormControl<StubMappingResponseDelayDistributionType | null | undefined>,
	}
	export function Create__adminMappings_stubMappingIdPutPutBodyResponseDelayDistributionFormGroup() {
		return new FormGroup<__adminMappings_stubMappingIdPutPutBodyResponseDelayDistributionFormProperties>({
			median: new FormControl<number | null | undefined>(undefined),
			sigma: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<StubMappingResponseDelayDistributionType | null | undefined>(undefined),
		});

	}

	export interface __adminMappings_stubMappingIdPutReturn {

		/** This stub mapping's unique identifier */
		id?: string | null;

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata?: string | null;

		/** The stub mapping's name */
		name?: string | null;

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState?: string | null;

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent?: boolean | null;

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions?: string | null;

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority?: number | null;
		request?: __adminMappings_stubMappingIdPutReturnRequest;

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState?: string | null;
		response?: __adminMappings_stubMappingIdPutReturnResponse;

		/** The name of the scenario that this stub mapping is part of */
		scenarioName?: string | null;

		/** Alias for the id */
		uuid?: string | null;
	}
	export interface __adminMappings_stubMappingIdPutReturnFormProperties {

		/** This stub mapping's unique identifier */
		id: FormControl<string | null | undefined>,

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata: FormControl<string | null | undefined>,

		/** The stub mapping's name */
		name: FormControl<string | null | undefined>,

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState: FormControl<string | null | undefined>,

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent: FormControl<boolean | null | undefined>,

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions: FormControl<string | null | undefined>,

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority: FormControl<number | null | undefined>,

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState: FormControl<string | null | undefined>,

		/** The name of the scenario that this stub mapping is part of */
		scenarioName: FormControl<string | null | undefined>,

		/** Alias for the id */
		uuid: FormControl<string | null | undefined>,
	}
	export function Create__adminMappings_stubMappingIdPutReturnFormGroup() {
		return new FormGroup<__adminMappings_stubMappingIdPutReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			newScenarioState: new FormControl<string | null | undefined>(undefined),
			persistent: new FormControl<boolean | null | undefined>(undefined),
			postServeActions: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			requiredScenarioState: new FormControl<string | null | undefined>(undefined),
			scenarioName: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappings_stubMappingIdPutReturnRequest {

		/** Pre-emptive basic auth credentials to match against */
		basicAuthCredentials?: __adminMappings_stubMappingIdPutReturnRequestBasicAuthCredentials;

		/** Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		bodyPatterns?: Array<string>;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method e.g. GET */
		method?: string | null;

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters?: string | null;

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url?: string | null;

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath?: string | null;

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern?: string | null;

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern?: string | null;
	}
	export interface __adminMappings_stubMappingIdPutReturnRequestFormProperties {

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method e.g. GET */
		method: FormControl<string | null | undefined>,

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters: FormControl<string | null | undefined>,

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url: FormControl<string | null | undefined>,

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath: FormControl<string | null | undefined>,

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern: FormControl<string | null | undefined>,

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function Create__adminMappings_stubMappingIdPutReturnRequestFormGroup() {
		return new FormGroup<__adminMappings_stubMappingIdPutReturnRequestFormProperties>({
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			queryParameters: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlPath: new FormControl<string | null | undefined>(undefined),
			urlPathPattern: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappings_stubMappingIdPutReturnRequestBasicAuthCredentials {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface __adminMappings_stubMappingIdPutReturnRequestBasicAuthCredentialsFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function Create__adminMappings_stubMappingIdPutReturnRequestBasicAuthCredentialsFormGroup() {
		return new FormGroup<__adminMappings_stubMappingIdPutReturnRequestBasicAuthCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminMappings_stubMappingIdPutReturnResponse {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders?: string | null;

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body?: string | null;

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body?: string | null;

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName?: string | null;

		/** The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper. */
		delayDistribution?: __adminMappings_stubMappingIdPutReturnResponseDelayDistribution;

		/** The fault to apply (instead of a full, valid response). */
		fault?: StubMappingResponseFault | null;

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds?: number | null;

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub?: boolean | null;

		/** Map of response headers to send */
		headers?: string | null;

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody?: string | null;

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl?: string | null;

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** The HTTP status message to be returned */
		statusMessage?: string | null;

		/** Parameters to apply to response transformers. */
		transformerParameters?: string | null;

		/** List of names of transformers to apply to this response. */
		transformers?: Array<string>;
	}
	export interface __adminMappings_stubMappingIdPutReturnResponseFormProperties {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders: FormControl<string | null | undefined>,

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body: FormControl<string | null | undefined>,

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body: FormControl<string | null | undefined>,

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName: FormControl<string | null | undefined>,

		/** The fault to apply (instead of a full, valid response). */
		fault: FormControl<StubMappingResponseFault | null | undefined>,

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds: FormControl<number | null | undefined>,

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub: FormControl<boolean | null | undefined>,

		/** Map of response headers to send */
		headers: FormControl<string | null | undefined>,

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody: FormControl<string | null | undefined>,

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl: FormControl<string | null | undefined>,

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** The HTTP status message to be returned */
		statusMessage: FormControl<string | null | undefined>,

		/** Parameters to apply to response transformers. */
		transformerParameters: FormControl<string | null | undefined>,
	}
	export function Create__adminMappings_stubMappingIdPutReturnResponseFormGroup() {
		return new FormGroup<__adminMappings_stubMappingIdPutReturnResponseFormProperties>({
			additionalProxyRequestHeaders: new FormControl<string | null | undefined>(undefined),
			base64Body: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			bodyFileName: new FormControl<string | null | undefined>(undefined),
			fault: new FormControl<StubMappingResponseFault | null | undefined>(undefined),
			fixedDelayMilliseconds: new FormControl<number | null | undefined>(undefined),
			fromConfiguredStub: new FormControl<boolean | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			jsonBody: new FormControl<string | null | undefined>(undefined),
			proxyBaseUrl: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			transformerParameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminMappings_stubMappingIdPutReturnResponseDelayDistribution {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median?: number | null;

		/** Type: double */
		sigma?: number | null;
		type?: StubMappingResponseDelayDistributionType | null;
	}
	export interface __adminMappings_stubMappingIdPutReturnResponseDelayDistributionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median: FormControl<number | null | undefined>,

		/** Type: double */
		sigma: FormControl<number | null | undefined>,
		type: FormControl<StubMappingResponseDelayDistributionType | null | undefined>,
	}
	export function Create__adminMappings_stubMappingIdPutReturnResponseDelayDistributionFormGroup() {
		return new FormGroup<__adminMappings_stubMappingIdPutReturnResponseDelayDistributionFormProperties>({
			median: new FormControl<number | null | undefined>(undefined),
			sigma: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<StubMappingResponseDelayDistributionType | null | undefined>(undefined),
		});

	}

	export interface __adminNear_missesRequestPostPostBody {

		/** The full URL to match against */
		absoluteUrl?: string | null;

		/** Body string to match against */
		body?: string | null;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method */
		method?: string | null;

		/** The path and query to match exactly against */
		url?: string | null;
	}
	export interface __adminNear_missesRequestPostPostBodyFormProperties {

		/** The full URL to match against */
		absoluteUrl: FormControl<string | null | undefined>,

		/** Body string to match against */
		body: FormControl<string | null | undefined>,

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method */
		method: FormControl<string | null | undefined>,

		/** The path and query to match exactly against */
		url: FormControl<string | null | undefined>,
	}
	export function Create__adminNear_missesRequestPostPostBodyFormGroup() {
		return new FormGroup<__adminNear_missesRequestPostPostBodyFormProperties>({
			absoluteUrl: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminNear_missesRequestPostReturn {
		__adminNear_missesRequestPostReturnNearMisses?: Array<__adminNear_missesRequestPostReturnNearMisses>;
	}
	export interface __adminNear_missesRequestPostReturnFormProperties {
	}
	export function Create__adminNear_missesRequestPostReturnFormGroup() {
		return new FormGroup<__adminNear_missesRequestPostReturnFormProperties>({
		});

	}

	export interface __adminNear_missesRequestPostReturnNearMisses {

		/** The full URL to match against */
		absoluteUrl?: string | null;

		/** Body string to match against */
		body?: string | null;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method */
		method?: string | null;

		/** The path and query to match exactly against */
		url?: string | null;
	}
	export interface __adminNear_missesRequestPostReturnNearMissesFormProperties {

		/** The full URL to match against */
		absoluteUrl: FormControl<string | null | undefined>,

		/** Body string to match against */
		body: FormControl<string | null | undefined>,

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method */
		method: FormControl<string | null | undefined>,

		/** The path and query to match exactly against */
		url: FormControl<string | null | undefined>,
	}
	export function Create__adminNear_missesRequestPostReturnNearMissesFormGroup() {
		return new FormGroup<__adminNear_missesRequestPostReturnNearMissesFormProperties>({
			absoluteUrl: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminNear_missesRequest_patternPostPostBody {

		/** Pre-emptive basic auth credentials to match against */
		basicAuthCredentials?: __adminNear_missesRequest_patternPostPostBodyBasicAuthCredentials;

		/** Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		bodyPatterns?: Array<string>;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method e.g. GET */
		method?: string | null;

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters?: string | null;

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url?: string | null;

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath?: string | null;

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern?: string | null;

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern?: string | null;
	}
	export interface __adminNear_missesRequest_patternPostPostBodyFormProperties {

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method e.g. GET */
		method: FormControl<string | null | undefined>,

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters: FormControl<string | null | undefined>,

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url: FormControl<string | null | undefined>,

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath: FormControl<string | null | undefined>,

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern: FormControl<string | null | undefined>,

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function Create__adminNear_missesRequest_patternPostPostBodyFormGroup() {
		return new FormGroup<__adminNear_missesRequest_patternPostPostBodyFormProperties>({
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			queryParameters: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlPath: new FormControl<string | null | undefined>(undefined),
			urlPathPattern: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminNear_missesRequest_patternPostPostBodyBasicAuthCredentials {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface __adminNear_missesRequest_patternPostPostBodyBasicAuthCredentialsFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function Create__adminNear_missesRequest_patternPostPostBodyBasicAuthCredentialsFormGroup() {
		return new FormGroup<__adminNear_missesRequest_patternPostPostBodyBasicAuthCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminNear_missesRequest_patternPostReturn {
		__adminNear_missesRequest_patternPostReturnNearMisses?: Array<__adminNear_missesRequest_patternPostReturnNearMisses>;
	}
	export interface __adminNear_missesRequest_patternPostReturnFormProperties {
	}
	export function Create__adminNear_missesRequest_patternPostReturnFormGroup() {
		return new FormGroup<__adminNear_missesRequest_patternPostReturnFormProperties>({
		});

	}

	export interface __adminNear_missesRequest_patternPostReturnNearMisses {

		/** The full URL to match against */
		absoluteUrl?: string | null;

		/** Body string to match against */
		body?: string | null;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method */
		method?: string | null;

		/** The path and query to match exactly against */
		url?: string | null;
	}
	export interface __adminNear_missesRequest_patternPostReturnNearMissesFormProperties {

		/** The full URL to match against */
		absoluteUrl: FormControl<string | null | undefined>,

		/** Body string to match against */
		body: FormControl<string | null | undefined>,

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method */
		method: FormControl<string | null | undefined>,

		/** The path and query to match exactly against */
		url: FormControl<string | null | undefined>,
	}
	export function Create__adminNear_missesRequest_patternPostReturnNearMissesFormGroup() {
		return new FormGroup<__adminNear_missesRequest_patternPostReturnNearMissesFormProperties>({
			absoluteUrl: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminRecordingsSnapshotPostReturn {
		__adminRecordingsSnapshotPostReturnMappings?: Array<__adminRecordingsSnapshotPostReturnMappings>;
		meta?: __adminRecordingsSnapshotPostReturnMeta;
	}
	export interface __adminRecordingsSnapshotPostReturnFormProperties {
	}
	export function Create__adminRecordingsSnapshotPostReturnFormGroup() {
		return new FormGroup<__adminRecordingsSnapshotPostReturnFormProperties>({
		});

	}

	export interface __adminRecordingsSnapshotPostReturnMappings {

		/** This stub mapping's unique identifier */
		id?: string | null;

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata?: string | null;

		/** The stub mapping's name */
		name?: string | null;

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState?: string | null;

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent?: boolean | null;

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions?: string | null;

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority?: number | null;
		request?: __adminRecordingsSnapshotPostReturnMappingsRequest;

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState?: string | null;
		response?: __adminRecordingsSnapshotPostReturnMappingsResponse;

		/** The name of the scenario that this stub mapping is part of */
		scenarioName?: string | null;

		/** Alias for the id */
		uuid?: string | null;
	}
	export interface __adminRecordingsSnapshotPostReturnMappingsFormProperties {

		/** This stub mapping's unique identifier */
		id: FormControl<string | null | undefined>,

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata: FormControl<string | null | undefined>,

		/** The stub mapping's name */
		name: FormControl<string | null | undefined>,

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState: FormControl<string | null | undefined>,

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent: FormControl<boolean | null | undefined>,

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions: FormControl<string | null | undefined>,

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority: FormControl<number | null | undefined>,

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState: FormControl<string | null | undefined>,

		/** The name of the scenario that this stub mapping is part of */
		scenarioName: FormControl<string | null | undefined>,

		/** Alias for the id */
		uuid: FormControl<string | null | undefined>,
	}
	export function Create__adminRecordingsSnapshotPostReturnMappingsFormGroup() {
		return new FormGroup<__adminRecordingsSnapshotPostReturnMappingsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			newScenarioState: new FormControl<string | null | undefined>(undefined),
			persistent: new FormControl<boolean | null | undefined>(undefined),
			postServeActions: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			requiredScenarioState: new FormControl<string | null | undefined>(undefined),
			scenarioName: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminRecordingsSnapshotPostReturnMappingsRequest {

		/** Pre-emptive basic auth credentials to match against */
		basicAuthCredentials?: __adminRecordingsSnapshotPostReturnMappingsRequestBasicAuthCredentials;

		/** Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		bodyPatterns?: Array<string>;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method e.g. GET */
		method?: string | null;

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters?: string | null;

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url?: string | null;

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath?: string | null;

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern?: string | null;

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern?: string | null;
	}
	export interface __adminRecordingsSnapshotPostReturnMappingsRequestFormProperties {

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method e.g. GET */
		method: FormControl<string | null | undefined>,

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters: FormControl<string | null | undefined>,

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url: FormControl<string | null | undefined>,

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath: FormControl<string | null | undefined>,

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern: FormControl<string | null | undefined>,

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function Create__adminRecordingsSnapshotPostReturnMappingsRequestFormGroup() {
		return new FormGroup<__adminRecordingsSnapshotPostReturnMappingsRequestFormProperties>({
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			queryParameters: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlPath: new FormControl<string | null | undefined>(undefined),
			urlPathPattern: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminRecordingsSnapshotPostReturnMappingsRequestBasicAuthCredentials {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface __adminRecordingsSnapshotPostReturnMappingsRequestBasicAuthCredentialsFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function Create__adminRecordingsSnapshotPostReturnMappingsRequestBasicAuthCredentialsFormGroup() {
		return new FormGroup<__adminRecordingsSnapshotPostReturnMappingsRequestBasicAuthCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminRecordingsSnapshotPostReturnMappingsResponse {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders?: string | null;

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body?: string | null;

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body?: string | null;

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName?: string | null;

		/** The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper. */
		delayDistribution?: __adminRecordingsSnapshotPostReturnMappingsResponseDelayDistribution;

		/** The fault to apply (instead of a full, valid response). */
		fault?: StubMappingResponseFault | null;

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds?: number | null;

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub?: boolean | null;

		/** Map of response headers to send */
		headers?: string | null;

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody?: string | null;

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl?: string | null;

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** The HTTP status message to be returned */
		statusMessage?: string | null;

		/** Parameters to apply to response transformers. */
		transformerParameters?: string | null;

		/** List of names of transformers to apply to this response. */
		transformers?: Array<string>;
	}
	export interface __adminRecordingsSnapshotPostReturnMappingsResponseFormProperties {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders: FormControl<string | null | undefined>,

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body: FormControl<string | null | undefined>,

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body: FormControl<string | null | undefined>,

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName: FormControl<string | null | undefined>,

		/** The fault to apply (instead of a full, valid response). */
		fault: FormControl<StubMappingResponseFault | null | undefined>,

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds: FormControl<number | null | undefined>,

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub: FormControl<boolean | null | undefined>,

		/** Map of response headers to send */
		headers: FormControl<string | null | undefined>,

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody: FormControl<string | null | undefined>,

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl: FormControl<string | null | undefined>,

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** The HTTP status message to be returned */
		statusMessage: FormControl<string | null | undefined>,

		/** Parameters to apply to response transformers. */
		transformerParameters: FormControl<string | null | undefined>,
	}
	export function Create__adminRecordingsSnapshotPostReturnMappingsResponseFormGroup() {
		return new FormGroup<__adminRecordingsSnapshotPostReturnMappingsResponseFormProperties>({
			additionalProxyRequestHeaders: new FormControl<string | null | undefined>(undefined),
			base64Body: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			bodyFileName: new FormControl<string | null | undefined>(undefined),
			fault: new FormControl<StubMappingResponseFault | null | undefined>(undefined),
			fixedDelayMilliseconds: new FormControl<number | null | undefined>(undefined),
			fromConfiguredStub: new FormControl<boolean | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			jsonBody: new FormControl<string | null | undefined>(undefined),
			proxyBaseUrl: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			transformerParameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminRecordingsSnapshotPostReturnMappingsResponseDelayDistribution {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median?: number | null;

		/** Type: double */
		sigma?: number | null;
		type?: StubMappingResponseDelayDistributionType | null;
	}
	export interface __adminRecordingsSnapshotPostReturnMappingsResponseDelayDistributionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median: FormControl<number | null | undefined>,

		/** Type: double */
		sigma: FormControl<number | null | undefined>,
		type: FormControl<StubMappingResponseDelayDistributionType | null | undefined>,
	}
	export function Create__adminRecordingsSnapshotPostReturnMappingsResponseDelayDistributionFormGroup() {
		return new FormGroup<__adminRecordingsSnapshotPostReturnMappingsResponseDelayDistributionFormProperties>({
			median: new FormControl<number | null | undefined>(undefined),
			sigma: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<StubMappingResponseDelayDistributionType | null | undefined>(undefined),
		});

	}

	export interface __adminRecordingsSnapshotPostReturnMeta {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface __adminRecordingsSnapshotPostReturnMetaFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function Create__adminRecordingsSnapshotPostReturnMetaFormGroup() {
		return new FormGroup<__adminRecordingsSnapshotPostReturnMetaFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminRecordingsStartPostPostBody {

		/** Headers from the request to include in the generated stub mappings, mapped to parameter objects. The only parameter available is "caseInsensitive", which defaults to false */
		captureHeaders?: {[id: string]: __adminRecordingsStartPostPostBodyCaptureHeaders };

		/** Criteria for extracting response bodies to a separate file instead of including it in the stub mapping */
		extractBodyCriteria?: __adminRecordingsStartPostPostBodyExtractBodyCriteria;

		/** Whether to save stub mappings to the file system or just return them */
		persist?: boolean | null;

		/** When true, duplicate requests will be added to a Scenario. When false, duplicates are discarded */
		repeatsAsScenarios?: boolean | null;

		/** Control the request body matcher used in generated stub mappings */
		requestBodyPattern?: string | null;

		/** List of names of stub mappings transformers to apply to generated stubs */
		transformerParameters?: string | null;

		/** Parameters to pass to stub mapping transformers */
		transformers?: Array<string>;
	}
	export interface __adminRecordingsStartPostPostBodyFormProperties {

		/** Headers from the request to include in the generated stub mappings, mapped to parameter objects. The only parameter available is "caseInsensitive", which defaults to false */
		captureHeaders: FormControl<{[id: string]: __adminRecordingsStartPostPostBodyCaptureHeaders } | null | undefined>,

		/** Whether to save stub mappings to the file system or just return them */
		persist: FormControl<boolean | null | undefined>,

		/** When true, duplicate requests will be added to a Scenario. When false, duplicates are discarded */
		repeatsAsScenarios: FormControl<boolean | null | undefined>,

		/** Control the request body matcher used in generated stub mappings */
		requestBodyPattern: FormControl<string | null | undefined>,

		/** List of names of stub mappings transformers to apply to generated stubs */
		transformerParameters: FormControl<string | null | undefined>,
	}
	export function Create__adminRecordingsStartPostPostBodyFormGroup() {
		return new FormGroup<__adminRecordingsStartPostPostBodyFormProperties>({
			captureHeaders: new FormControl<{[id: string]: __adminRecordingsStartPostPostBodyCaptureHeaders } | null | undefined>(undefined),
			persist: new FormControl<boolean | null | undefined>(undefined),
			repeatsAsScenarios: new FormControl<boolean | null | undefined>(undefined),
			requestBodyPattern: new FormControl<string | null | undefined>(undefined),
			transformerParameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminRecordingsStartPostPostBodyCaptureHeaders {
		caseInsensitive?: boolean | null;
	}
	export interface __adminRecordingsStartPostPostBodyCaptureHeadersFormProperties {
		caseInsensitive: FormControl<boolean | null | undefined>,
	}
	export function Create__adminRecordingsStartPostPostBodyCaptureHeadersFormGroup() {
		return new FormGroup<__adminRecordingsStartPostPostBodyCaptureHeadersFormProperties>({
			caseInsensitive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface __adminRecordingsStartPostPostBodyExtractBodyCriteria {

		/** Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes. */
		binarySizeThreshold?: string | null;

		/** Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes. */
		textSizeThreshold?: string | null;
	}
	export interface __adminRecordingsStartPostPostBodyExtractBodyCriteriaFormProperties {

		/** Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes. */
		binarySizeThreshold: FormControl<string | null | undefined>,

		/** Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. "56 Mb". Default unit is bytes. */
		textSizeThreshold: FormControl<string | null | undefined>,
	}
	export function Create__adminRecordingsStartPostPostBodyExtractBodyCriteriaFormGroup() {
		return new FormGroup<__adminRecordingsStartPostPostBodyExtractBodyCriteriaFormProperties>({
			binarySizeThreshold: new FormControl<string | null | undefined>(undefined),
			textSizeThreshold: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminRecordingsStatusGetReturn {
		status?: __adminRecordingsStatusGetReturnStatus | null;
	}
	export interface __adminRecordingsStatusGetReturnFormProperties {
		status: FormControl<__adminRecordingsStatusGetReturnStatus | null | undefined>,
	}
	export function Create__adminRecordingsStatusGetReturnFormGroup() {
		return new FormGroup<__adminRecordingsStatusGetReturnFormProperties>({
			status: new FormControl<__adminRecordingsStatusGetReturnStatus | null | undefined>(undefined),
		});

	}

	export enum __adminRecordingsStatusGetReturnStatus { NeverStarted = 'NeverStarted', Recording = 'Recording', Stopped = 'Stopped' }

	export interface __adminRecordingsStopPostReturn {
		__adminRecordingsStopPostReturnMappings?: Array<__adminRecordingsStopPostReturnMappings>;
		meta?: __adminRecordingsStopPostReturnMeta;
	}
	export interface __adminRecordingsStopPostReturnFormProperties {
	}
	export function Create__adminRecordingsStopPostReturnFormGroup() {
		return new FormGroup<__adminRecordingsStopPostReturnFormProperties>({
		});

	}

	export interface __adminRecordingsStopPostReturnMappings {

		/** This stub mapping's unique identifier */
		id?: string | null;

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata?: string | null;

		/** The stub mapping's name */
		name?: string | null;

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState?: string | null;

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent?: boolean | null;

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions?: string | null;

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority?: number | null;
		request?: __adminRecordingsStopPostReturnMappingsRequest;

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState?: string | null;
		response?: __adminRecordingsStopPostReturnMappingsResponse;

		/** The name of the scenario that this stub mapping is part of */
		scenarioName?: string | null;

		/** Alias for the id */
		uuid?: string | null;
	}
	export interface __adminRecordingsStopPostReturnMappingsFormProperties {

		/** This stub mapping's unique identifier */
		id: FormControl<string | null | undefined>,

		/** Arbitrary metadata to be used for e.g. tagging, documentation. Can also be used to find and remove stubs. */
		metadata: FormControl<string | null | undefined>,

		/** The stub mapping's name */
		name: FormControl<string | null | undefined>,

		/** The new state for the scenario to be updated to after this stub is served. */
		newScenarioState: FormControl<string | null | undefined>,

		/** Indicates that the stub mapping should be persisted immediately on create/update/delete and survive resets to default. */
		persistent: FormControl<boolean | null | undefined>,

		/** A map of the names of post serve action extensions to trigger and their parameters. */
		postServeActions: FormControl<string | null | undefined>,

		/**
		 * This stub mapping's priority relative to others. 1 is highest.
		 * Minimum: 1
		 */
		priority: FormControl<number | null | undefined>,

		/** The required state of the scenario in order for this stub to be matched. */
		requiredScenarioState: FormControl<string | null | undefined>,

		/** The name of the scenario that this stub mapping is part of */
		scenarioName: FormControl<string | null | undefined>,

		/** Alias for the id */
		uuid: FormControl<string | null | undefined>,
	}
	export function Create__adminRecordingsStopPostReturnMappingsFormGroup() {
		return new FormGroup<__adminRecordingsStopPostReturnMappingsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			newScenarioState: new FormControl<string | null | undefined>(undefined),
			persistent: new FormControl<boolean | null | undefined>(undefined),
			postServeActions: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			requiredScenarioState: new FormControl<string | null | undefined>(undefined),
			scenarioName: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminRecordingsStopPostReturnMappingsRequest {

		/** Pre-emptive basic auth credentials to match against */
		basicAuthCredentials?: __adminRecordingsStopPostReturnMappingsRequestBasicAuthCredentials;

		/** Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		bodyPatterns?: Array<string>;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method e.g. GET */
		method?: string | null;

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters?: string | null;

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url?: string | null;

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath?: string | null;

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern?: string | null;

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern?: string | null;
	}
	export interface __adminRecordingsStopPostReturnMappingsRequestFormProperties {

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method e.g. GET */
		method: FormControl<string | null | undefined>,

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters: FormControl<string | null | undefined>,

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url: FormControl<string | null | undefined>,

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath: FormControl<string | null | undefined>,

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern: FormControl<string | null | undefined>,

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function Create__adminRecordingsStopPostReturnMappingsRequestFormGroup() {
		return new FormGroup<__adminRecordingsStopPostReturnMappingsRequestFormProperties>({
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			queryParameters: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlPath: new FormControl<string | null | undefined>(undefined),
			urlPathPattern: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminRecordingsStopPostReturnMappingsRequestBasicAuthCredentials {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface __adminRecordingsStopPostReturnMappingsRequestBasicAuthCredentialsFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function Create__adminRecordingsStopPostReturnMappingsRequestBasicAuthCredentialsFormGroup() {
		return new FormGroup<__adminRecordingsStopPostReturnMappingsRequestBasicAuthCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminRecordingsStopPostReturnMappingsResponse {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders?: string | null;

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body?: string | null;

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body?: string | null;

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName?: string | null;

		/** The delay distribution. Valid property configuration is either median/sigma/type or lower/type/upper. */
		delayDistribution?: __adminRecordingsStopPostReturnMappingsResponseDelayDistribution;

		/** The fault to apply (instead of a full, valid response). */
		fault?: StubMappingResponseFault | null;

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds?: number | null;

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub?: boolean | null;

		/** Map of response headers to send */
		headers?: string | null;

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody?: string | null;

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl?: string | null;

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** The HTTP status message to be returned */
		statusMessage?: string | null;

		/** Parameters to apply to response transformers. */
		transformerParameters?: string | null;

		/** List of names of transformers to apply to this response. */
		transformers?: Array<string>;
	}
	export interface __adminRecordingsStopPostReturnMappingsResponseFormProperties {

		/** Extra request headers to send when proxying to another host. */
		additionalProxyRequestHeaders: FormControl<string | null | undefined>,

		/** The response body as a base64 encoded string (useful for binary content). Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		base64Body: FormControl<string | null | undefined>,

		/** The response body as a string. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		body: FormControl<string | null | undefined>,

		/** The path to the file containing the response body, relative to the configured file root. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		bodyFileName: FormControl<string | null | undefined>,

		/** The fault to apply (instead of a full, valid response). */
		fault: FormControl<StubMappingResponseFault | null | undefined>,

		/**
		 * Number of milliseconds to delay be before sending the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fixedDelayMilliseconds: FormControl<number | null | undefined>,

		/** Read-only flag indicating false if this was the default, unmatched response. Not present otherwise. */
		fromConfiguredStub: FormControl<boolean | null | undefined>,

		/** Map of response headers to send */
		headers: FormControl<string | null | undefined>,

		/** The response body as a JSON object. Only one of body, base64Body, jsonBody or bodyFileName may be specified. */
		jsonBody: FormControl<string | null | undefined>,

		/** The base URL of the target to proxy matching requests to. */
		proxyBaseUrl: FormControl<string | null | undefined>,

		/**
		 * The HTTP status code to be returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** The HTTP status message to be returned */
		statusMessage: FormControl<string | null | undefined>,

		/** Parameters to apply to response transformers. */
		transformerParameters: FormControl<string | null | undefined>,
	}
	export function Create__adminRecordingsStopPostReturnMappingsResponseFormGroup() {
		return new FormGroup<__adminRecordingsStopPostReturnMappingsResponseFormProperties>({
			additionalProxyRequestHeaders: new FormControl<string | null | undefined>(undefined),
			base64Body: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			bodyFileName: new FormControl<string | null | undefined>(undefined),
			fault: new FormControl<StubMappingResponseFault | null | undefined>(undefined),
			fixedDelayMilliseconds: new FormControl<number | null | undefined>(undefined),
			fromConfiguredStub: new FormControl<boolean | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			jsonBody: new FormControl<string | null | undefined>(undefined),
			proxyBaseUrl: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			transformerParameters: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminRecordingsStopPostReturnMappingsResponseDelayDistribution {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median?: number | null;

		/** Type: double */
		sigma?: number | null;
		type?: StubMappingResponseDelayDistributionType | null;
	}
	export interface __adminRecordingsStopPostReturnMappingsResponseDelayDistributionFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median: FormControl<number | null | undefined>,

		/** Type: double */
		sigma: FormControl<number | null | undefined>,
		type: FormControl<StubMappingResponseDelayDistributionType | null | undefined>,
	}
	export function Create__adminRecordingsStopPostReturnMappingsResponseDelayDistributionFormGroup() {
		return new FormGroup<__adminRecordingsStopPostReturnMappingsResponseDelayDistributionFormProperties>({
			median: new FormControl<number | null | undefined>(undefined),
			sigma: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<StubMappingResponseDelayDistributionType | null | undefined>(undefined),
		});

	}

	export interface __adminRecordingsStopPostReturnMeta {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: number;
	}
	export interface __adminRecordingsStopPostReturnMetaFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function Create__adminRecordingsStopPostReturnMetaFormGroup() {
		return new FormGroup<__adminRecordingsStopPostReturnMetaFormProperties>({
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminRequestsCountPostPostBody {

		/** Pre-emptive basic auth credentials to match against */
		basicAuthCredentials?: __adminRequestsCountPostPostBodyBasicAuthCredentials;

		/** Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		bodyPatterns?: Array<string>;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method e.g. GET */
		method?: string | null;

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters?: string | null;

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url?: string | null;

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath?: string | null;

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern?: string | null;

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern?: string | null;
	}
	export interface __adminRequestsCountPostPostBodyFormProperties {

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method e.g. GET */
		method: FormControl<string | null | undefined>,

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters: FormControl<string | null | undefined>,

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url: FormControl<string | null | undefined>,

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath: FormControl<string | null | undefined>,

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern: FormControl<string | null | undefined>,

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function Create__adminRequestsCountPostPostBodyFormGroup() {
		return new FormGroup<__adminRequestsCountPostPostBodyFormProperties>({
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			queryParameters: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlPath: new FormControl<string | null | undefined>(undefined),
			urlPathPattern: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminRequestsCountPostPostBodyBasicAuthCredentials {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface __adminRequestsCountPostPostBodyBasicAuthCredentialsFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function Create__adminRequestsCountPostPostBodyBasicAuthCredentialsFormGroup() {
		return new FormGroup<__adminRequestsCountPostPostBodyBasicAuthCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminRequestsCountPostReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
	}
	export interface __adminRequestsCountPostReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
	}
	export function Create__adminRequestsCountPostReturnFormGroup() {
		return new FormGroup<__adminRequestsCountPostReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface __adminRequestsFindPostPostBody {

		/** Pre-emptive basic auth credentials to match against */
		basicAuthCredentials?: __adminRequestsFindPostPostBodyBasicAuthCredentials;

		/** Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		bodyPatterns?: Array<string>;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method e.g. GET */
		method?: string | null;

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters?: string | null;

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url?: string | null;

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath?: string | null;

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern?: string | null;

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern?: string | null;
	}
	export interface __adminRequestsFindPostPostBodyFormProperties {

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method e.g. GET */
		method: FormControl<string | null | undefined>,

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters: FormControl<string | null | undefined>,

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url: FormControl<string | null | undefined>,

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath: FormControl<string | null | undefined>,

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern: FormControl<string | null | undefined>,

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function Create__adminRequestsFindPostPostBodyFormGroup() {
		return new FormGroup<__adminRequestsFindPostPostBodyFormProperties>({
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			queryParameters: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlPath: new FormControl<string | null | undefined>(undefined),
			urlPathPattern: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminRequestsFindPostPostBodyBasicAuthCredentials {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface __adminRequestsFindPostPostBodyBasicAuthCredentialsFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function Create__adminRequestsFindPostPostBodyBasicAuthCredentialsFormGroup() {
		return new FormGroup<__adminRequestsFindPostPostBodyBasicAuthCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminRequestsRemovePostPostBody {

		/** Pre-emptive basic auth credentials to match against */
		basicAuthCredentials?: __adminRequestsRemovePostPostBodyBasicAuthCredentials;

		/** Request body patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		bodyPatterns?: Array<string>;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method e.g. GET */
		method?: string | null;

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters?: string | null;

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url?: string | null;

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath?: string | null;

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern?: string | null;

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern?: string | null;
	}
	export interface __adminRequestsRemovePostPostBodyFormProperties {

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method e.g. GET */
		method: FormControl<string | null | undefined>,

		/** Query parameter patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		queryParameters: FormControl<string | null | undefined>,

		/** The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		url: FormControl<string | null | undefined>,

		/** The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPath: FormControl<string | null | undefined>,

		/** The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPathPattern: FormControl<string | null | undefined>,

		/** The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function Create__adminRequestsRemovePostPostBodyFormGroup() {
		return new FormGroup<__adminRequestsRemovePostPostBodyFormProperties>({
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			queryParameters: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlPath: new FormControl<string | null | undefined>(undefined),
			urlPathPattern: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminRequestsRemovePostPostBodyBasicAuthCredentials {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface __adminRequestsRemovePostPostBodyBasicAuthCredentialsFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function Create__adminRequestsRemovePostPostBodyBasicAuthCredentialsFormGroup() {
		return new FormGroup<__adminRequestsRemovePostPostBodyBasicAuthCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminRequestsRemove_by_metadataPostPostBody {
		caseInsensitive?: boolean | null;

		/** Required */
		equalTo: boolean;
	}
	export interface __adminRequestsRemove_by_metadataPostPostBodyFormProperties {
		caseInsensitive: FormControl<boolean | null | undefined>,

		/** Required */
		equalTo: FormControl<boolean | null | undefined>,
	}
	export function Create__adminRequestsRemove_by_metadataPostPostBodyFormGroup() {
		return new FormGroup<__adminRequestsRemove_by_metadataPostPostBodyFormProperties>({
			caseInsensitive: new FormControl<boolean | null | undefined>(undefined),
			equalTo: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface __adminRequestsUnmatchedNear_missesGetReturn {
		__adminRequestsUnmatchedNear_missesGetReturnNearMisses?: Array<__adminRequestsUnmatchedNear_missesGetReturnNearMisses>;
	}
	export interface __adminRequestsUnmatchedNear_missesGetReturnFormProperties {
	}
	export function Create__adminRequestsUnmatchedNear_missesGetReturnFormGroup() {
		return new FormGroup<__adminRequestsUnmatchedNear_missesGetReturnFormProperties>({
		});

	}

	export interface __adminRequestsUnmatchedNear_missesGetReturnNearMisses {

		/** The full URL to match against */
		absoluteUrl?: string | null;

		/** Body string to match against */
		body?: string | null;

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies?: string | null;

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers?: string | null;

		/** The HTTP request method */
		method?: string | null;

		/** The path and query to match exactly against */
		url?: string | null;
	}
	export interface __adminRequestsUnmatchedNear_missesGetReturnNearMissesFormProperties {

		/** The full URL to match against */
		absoluteUrl: FormControl<string | null | undefined>,

		/** Body string to match against */
		body: FormControl<string | null | undefined>,

		/** Cookie patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		cookies: FormControl<string | null | undefined>,

		/** Header patterns to match against in the <key>: { "<predicate>": "<value>" } form */
		headers: FormControl<string | null | undefined>,

		/** The HTTP request method */
		method: FormControl<string | null | undefined>,

		/** The path and query to match exactly against */
		url: FormControl<string | null | undefined>,
	}
	export function Create__adminRequestsUnmatchedNear_missesGetReturnNearMissesFormGroup() {
		return new FormGroup<__adminRequestsUnmatchedNear_missesGetReturnNearMissesFormProperties>({
			absoluteUrl: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			cookies: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminScenariosGetReturn {
		__adminScenariosGetReturnScenarios?: Array<__adminScenariosGetReturnScenarios>;
	}
	export interface __adminScenariosGetReturnFormProperties {
	}
	export function Create__adminScenariosGetReturnFormGroup() {
		return new FormGroup<__adminScenariosGetReturnFormProperties>({
		});

	}

	export interface __adminScenariosGetReturnScenarios {

		/** The scenario ID */
		id?: string | null;

		/** The scenario name */
		name?: string | null;
		possibleStates?: Array<string>;

		/** The current state of this scenario */
		state?: string | null;
	}
	export interface __adminScenariosGetReturnScenariosFormProperties {

		/** The scenario ID */
		id: FormControl<string | null | undefined>,

		/** The scenario name */
		name: FormControl<string | null | undefined>,

		/** The current state of this scenario */
		state: FormControl<string | null | undefined>,
	}
	export function Create__adminScenariosGetReturnScenariosFormGroup() {
		return new FormGroup<__adminScenariosGetReturnScenariosFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface __adminSettingsPostPostBody {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median?: number | null;

		/** Type: double */
		sigma?: number | null;
		type?: StubMappingResponseDelayDistributionType | null;
	}
	export interface __adminSettingsPostPostBodyFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		median: FormControl<number | null | undefined>,

		/** Type: double */
		sigma: FormControl<number | null | undefined>,
		type: FormControl<StubMappingResponseDelayDistributionType | null | undefined>,
	}
	export function Create__adminSettingsPostPostBodyFormGroup() {
		return new FormGroup<__adminSettingsPostPostBodyFormProperties>({
			median: new FormControl<number | null | undefined>(undefined),
			sigma: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<StubMappingResponseDelayDistributionType | null | undefined>(undefined),
		});

	}

}

