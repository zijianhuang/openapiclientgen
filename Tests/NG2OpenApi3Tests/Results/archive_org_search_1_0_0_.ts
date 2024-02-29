import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Error {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		message?: string | null;
	}
	export interface ErrorFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One item returned (object of fields and values) */
	export interface Hit {
	}

	/** One item returned (object of fields and values) */
	export interface HitFormProperties {
	}
	export function CreateHitFormGroup() {
		return new FormGroup<HitFormProperties>({
		});

	}


	/** The result of a organic search request */
	export interface OrganicResult {

		/**
		 * Number of results returned
		 * Minimum: 0
		 * Maximum: 10000
		 */
		count?: number | null;
		items?: Array<Hit>;

		/**
		 * Approximate number of results meeting query
		 * Minimum: 0
		 */
		total?: number | null;
	}

	/** The result of a organic search request */
	export interface OrganicResultFormProperties {

		/**
		 * Number of results returned
		 * Minimum: 0
		 * Maximum: 10000
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Approximate number of results meeting query
		 * Minimum: 0
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateOrganicResultFormGroup() {
		return new FormGroup<OrganicResultFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10000)]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** The result of a scrape request */
	export interface ScrapeResult {

		/**
		 * Number of results returned
		 * Minimum: 0
		 * Maximum: 10000
		 */
		count?: number | null;

		/** A scroll handle */
		cursor?: string | null;
		items?: Array<Hit>;

		/** A scroll handle */
		previous?: string | null;

		/**
		 * Total number of results from this cursor point
		 * Minimum: 0
		 */
		total?: number | null;
	}

	/** The result of a scrape request */
	export interface ScrapeResultFormProperties {

		/**
		 * Number of results returned
		 * Minimum: 0
		 * Maximum: 10000
		 */
		count: FormControl<number | null | undefined>,

		/** A scroll handle */
		cursor: FormControl<string | null | undefined>,

		/** A scroll handle */
		previous: FormControl<string | null | undefined>,

		/**
		 * Total number of results from this cursor point
		 * Minimum: 0
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateScrapeResultFormGroup() {
		return new FormGroup<ScrapeResultFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10000)]),
			cursor: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Fields that can be requested
		 * Get search/v1/fields
		 * @param {string} callback Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.
		 * @return {Array<string>} Fields that can be requested
		 */
		SearchV1FieldsGetByCallback(callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'search/v1/fields?callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return relevance-based results from search queries
		 * Get search/v1/organic
		 * @param {string} q Lucene-type search query
		 * @param {string} field Metadata field
		 *     Min length: 1    Max length: 250
		 * @param {number} size Number of query results to return
		 *     Minimum: 10    Maximum: 10000
		 * @param {boolean} total_only Request total only; do not return hits
		 * @param {string} callback Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.
		 * @return {OrganicResult} Organic Search API. Returns results in descending relevance order
		 */
		SearchV1OrganicGetByQAndFieldAndSizeAndTotal_onlyAndCallback(q: string | null | undefined, field: string | null | undefined, size: number | null | undefined, total_only: boolean | null | undefined, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<OrganicResult> {
			return this.http.get<OrganicResult>(this.baseUri + 'search/v1/organic?q=' + (q == null ? '' : encodeURIComponent(q)) + '&field=' + (field == null ? '' : encodeURIComponent(field)) + '&size=' + size + '&total_only=' + total_only + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Scrape search results from Internet Archive, allowing a scrolling cursor
		 * Get search/v1/scrape
		 * @param {string} q Lucene-type search query
		 * @param {string} field Metadata field
		 *     Min length: 1    Max length: 250
		 * @param {string} sort sort collations
		 *     Min length: 5    Max length: 250
		 * @param {number} size Number of query results to return
		 *     Minimum: 10    Maximum: 10000
		 * @param {string} cursor Cursor for scrolling (used for subsequent calls)
		 * @param {boolean} total_only Request total only; do not return hits
		 * @param {string} callback Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and the returned MIME type is application/javascript. This causes the caller to automatically run the func with the JSON results as its argument.
		 * @return {ScrapeResult} Scaping API
		 */
		SearchV1ScrapeGetByQAndFieldAndSortAndSizeAndCursorAndTotal_onlyAndCallback(q: string | null | undefined, field: string | null | undefined, sort: string | null | undefined, size: number | null | undefined, cursor: string | null | undefined, total_only: boolean | null | undefined, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ScrapeResult> {
			return this.http.get<ScrapeResult>(this.baseUri + 'search/v1/scrape?q=' + (q == null ? '' : encodeURIComponent(q)) + '&field=' + (field == null ? '' : encodeURIComponent(field)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&size=' + size + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&total_only=' + total_only + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

