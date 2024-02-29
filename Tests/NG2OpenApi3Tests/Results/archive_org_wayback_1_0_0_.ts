import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ArchivedResult {

		/** Required */
		snapshot: Snapshot;

		/** The user-supplied tag for use in collation */
		tag?: string | null;

		/**
		 * The _intepreted_ timestamp requested, in [RFC 3339](http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html) format
		 * Required
		 */
		timestamp: string;

		/**
		 * The URL requested
		 * Required
		 */
		url: string;
	}
	export interface ArchivedResultFormProperties {

		/** The user-supplied tag for use in collation */
		tag: FormControl<string | null | undefined>,

		/**
		 * The _intepreted_ timestamp requested, in [RFC 3339](http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html) format
		 * Required
		 */
		timestamp: FormControl<string | null | undefined>,

		/**
		 * The URL requested
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateArchivedResultFormGroup() {
		return new FormGroup<ArchivedResultFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Snapshot {

		/**
		 * The HTTP status of the URL requested
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** The timestamp of the snapshot in [RFC 3339](http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html) format */
		timestamp?: string | null;

		/** The URL requested */
		url?: string | null;
	}
	export interface SnapshotFormProperties {

		/**
		 * The HTTP status of the URL requested
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** The timestamp of the snapshot in [RFC 3339](http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html) format */
		timestamp: FormControl<string | null | undefined>,

		/** The URL requested */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			status: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AvailabilityRequest {

		/** The direction to find the closest snapshot to the requested timestamp */
		closest?: AvailabilityRequestClosest | null;

		/** A user-supplied tag, used for collation */
		tag?: string | null;

		/**
		 * Timestamp requested in ISO 8601 format. The following formats are acceptable: - YYYY - YYYY-MM - YYYY-MM-DD - YYYY-MM-DDTHH:mm:SSz - YYYY-MM-DD:HH:mm+00:00
		 */
		timestamp?: string | null;

		/**
		 * The URL requested
		 * Required
		 */
		url: string;
	}
	export interface AvailabilityRequestFormProperties {

		/** The direction to find the closest snapshot to the requested timestamp */
		closest: FormControl<AvailabilityRequestClosest | null | undefined>,

		/** A user-supplied tag, used for collation */
		tag: FormControl<string | null | undefined>,

		/**
		 * Timestamp requested in ISO 8601 format. The following formats are acceptable: - YYYY - YYYY-MM - YYYY-MM-DD - YYYY-MM-DDTHH:mm:SSz - YYYY-MM-DD:HH:mm+00:00
		 */
		timestamp: FormControl<string | null | undefined>,

		/**
		 * The URL requested
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityRequestFormGroup() {
		return new FormGroup<AvailabilityRequestFormProperties>({
			closest: new FormControl<AvailabilityRequestClosest | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AvailabilityRequestClosest { either = 'either', after = 'after', before = 'before' }

	export interface AvailabilityResults {

		/**
		 * A list of results
		 * Required
		 */
		results: Array<ArchivedResult>;
	}
	export interface AvailabilityResultsFormProperties {
	}
	export function CreateAvailabilityResultsFormGroup() {
		return new FormGroup<AvailabilityResultsFormProperties>({
		});

	}

	export interface Error {
		code?: string | null;
		message?: string | null;
	}
	export interface ErrorFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get wayback/v1/available
		 * @param {string} url A single URL to query.
		 * @param {string} timestamp Timestamp requested in ISO 8601 format. The following formats are acceptable:
		 *  - YYYY
		 *  - YYYY-MM
		 *  - YYYY-MM-DD
		 *  - YYYY-MM-DDTHH:mm:SSz
		 *  - YYYY-MM-DD:HH:mm+00:00
		 * @param {string} callback Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.
		 * @param {number} timeout Timeout is the maximum number of seconds to wait for the availability API to get its underlying results from the CDX server. The default value is 5.0.
		 *     Type: double
		 * @param {WaybackV1AvailableGetByUrlAndTimestampAndCallbackAndTimeoutAndClosestAndStatus_codeAndTagClosest} closest The direction specifies whether to match archived timestamps that are before the provided one, after, or the default either (closest in either direction). Must be before, after, or either. May be overidden by individual requests.
		 * @param {WaybackV1AvailableGetByUrlAndTimestampAndCallbackAndTimeoutAndClosestAndStatus_codeAndTagStatus_code} status_code HTTP status codes to filter by. Only results with these codes will be returned
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} tag The optional tag can have any value, and is returned with the results; it can be used to help collate input and output values.
		 * @return {AvailabilityResults} Nominal Availability results
		 */
		WaybackV1AvailableGetByUrlAndTimestampAndCallbackAndTimeoutAndClosestAndStatus_codeAndTag(url: string, timestamp: string | null | undefined, callback: string | null | undefined, timeout: number | null | undefined, closest: WaybackV1AvailableGetByUrlAndTimestampAndCallbackAndTimeoutAndClosestAndStatus_codeAndTagClosest | null | undefined, status_code: WaybackV1AvailableGetByUrlAndTimestampAndCallbackAndTimeoutAndClosestAndStatus_codeAndTagStatus_code | null | undefined, tag: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<AvailabilityResults> {
			return this.http.get<AvailabilityResults>(this.baseUri + 'wayback/v1/available?url=' + (url == null ? '' : encodeURIComponent(url)) + '&timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&timeout=' + timeout + '&closest=' + closest + '&status_code=' + status_code + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post wayback/v1/available
		 * @param {string} url A single URL to query.
		 * @param {string} timestamp Timestamp requested in ISO 8601 format. The following formats are acceptable:
		 *  - YYYY
		 *  - YYYY-MM
		 *  - YYYY-MM-DD
		 *  - YYYY-MM-DDTHH:mm:SSz
		 *  - YYYY-MM-DD:HH:mm+00:00
		 * @param {string} callback Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.
		 * @param {number} timeout Timeout is the maximum number of seconds to wait for the availability API to get its underlying results from the CDX server. The default value is 5.0.
		 *     Type: double
		 * @param {WaybackV1AvailableGetByUrlAndTimestampAndCallbackAndTimeoutAndClosestAndStatus_codeAndTagClosest} closest The direction specifies whether to match archived timestamps that are before the provided one, after, or the default either (closest in either direction). Must be before, after, or either. May be overidden by individual requests.
		 * @param {WaybackV1AvailablePostByUrlAndTimestampAndCallbackAndTimeoutAndClosestAndStatus_codeAndTagStatus_code} status_code HTTP status codes to filter by. Only results with these codes will be returned
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} tag The optional tag can have any value, and is returned with the results; it can be used to help collate input and output values.
		 * @return {AvailabilityResults} Nominal Availability results
		 */
		WaybackV1AvailablePostByUrlAndTimestampAndCallbackAndTimeoutAndClosestAndStatus_codeAndTag(url: string, timestamp: string | null | undefined, callback: string | null | undefined, timeout: number | null | undefined, closest: WaybackV1AvailableGetByUrlAndTimestampAndCallbackAndTimeoutAndClosestAndStatus_codeAndTagClosest | null | undefined, status_code: WaybackV1AvailablePostByUrlAndTimestampAndCallbackAndTimeoutAndClosestAndStatus_codeAndTagStatus_code | null | undefined, tag: string | null | undefined, requestBody: Array<AvailabilityRequest>, headersHandler?: () => HttpHeaders): Observable<AvailabilityResults> {
			return this.http.post<AvailabilityResults>(this.baseUri + 'wayback/v1/available?url=' + (url == null ? '' : encodeURIComponent(url)) + '&timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&timeout=' + timeout + '&closest=' + closest + '&status_code=' + status_code + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

	export enum WaybackV1AvailableGetByUrlAndTimestampAndCallbackAndTimeoutAndClosestAndStatus_codeAndTagClosest { either = 'either', before = 'before', after = 'after' }

	export enum WaybackV1AvailableGetByUrlAndTimestampAndCallbackAndTimeoutAndClosestAndStatus_codeAndTagStatus_code { _200 = 0, _201 = 1, _202 = 2, _203 = 3, _204 = 4, _205 = 5, _206 = 6, _300 = 7, _301 = 8, _302 = 9, _303 = 10, _304 = 11, _305 = 12, _306 = 13, _307 = 14, _308 = 15, _400 = 16, _401 = 17, _402 = 18, _403 = 19, _404 = 20, _405 = 21, _406 = 22, _407 = 23, _408 = 24, _409 = 25, _410 = 26, _411 = 27, _412 = 28, _413 = 29, _414 = 30, _415 = 31, _416 = 32, _417 = 33, _418 = 34, _421 = 35, _426 = 36, _428 = 37, _429 = 38, _431 = 39, _500 = 40, _501 = 41, _502 = 42, _503 = 43, _504 = 44, _505 = 45, _506 = 46, _507 = 47, _511 = 48 }

	export enum WaybackV1AvailablePostByUrlAndTimestampAndCallbackAndTimeoutAndClosestAndStatus_codeAndTagStatus_code { _200 = 0, _201 = 1, _202 = 2, _203 = 3, _204 = 4, _205 = 5, _206 = 6, _300 = 7, _301 = 8, _302 = 9, _303 = 10, _304 = 11, _305 = 12, _306 = 13, _307 = 14, _308 = 15, _400 = 16, _401 = 17, _402 = 18, _403 = 19, _404 = 20, _405 = 21, _406 = 22, _407 = 23, _408 = 24, _409 = 25, _410 = 26, _411 = 27, _412 = 28, _413 = 29, _414 = 30, _415 = 31, _416 = 32, _417 = 33, _418 = 34, _421 = 35, _426 = 36, _428 = 37, _429 = 38, _431 = 39, _500 = 40, _501 = 41, _502 = 42, _503 = 43, _504 = 44, _505 = 45, _506 = 46, _507 = 47, _511 = 48 }

}

