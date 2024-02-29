import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface SearchResponse {
		SearchResponseResults?: Array<SearchResponseResults>;
	}
	export interface SearchResponseFormProperties {
	}
	export function CreateSearchResponseFormGroup() {
		return new FormGroup<SearchResponseFormProperties>({
		});

	}

	export interface SearchResponseResults {

		/** The currency that the price is in */
		currency_code?: string | null;

		/** The description of the product */
		description?: string | null;

		/** The price of the product */
		price?: string | null;

		/** The title of the product */
		title?: string | null;

		/** The url of the product page for this product */
		url?: string | null;
	}
	export interface SearchResponseResultsFormProperties {

		/** The currency that the price is in */
		currency_code: FormControl<string | null | undefined>,

		/** The description of the product */
		description: FormControl<string | null | undefined>,

		/** The price of the product */
		price: FormControl<string | null | undefined>,

		/** The title of the product */
		title: FormControl<string | null | undefined>,

		/** The url of the product page for this product */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSearchResponseResultsFormGroup() {
		return new FormGroup<SearchResponseResultsFormProperties>({
			currency_code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Return more details about a list of products.
		 * Get openai/details
		 * @param {string} ids Comma separated list of product ids
		 * @return {SearchResponse} OK
		 */
		Details(ids: string): Observable<SearchResponse> {
			return this.http.get<SearchResponse>(this.baseUri + 'openai/details?ids=' + (ids == null ? '' : encodeURIComponent(ids)), {});
		}

		/**
		 * Search for products
		 * Get openai/search
		 * @param {string} query Query string to search for items.
		 * @param {number} price_min The minimum price to filter by.
		 *     Type: double
		 * @param {number} price_max The maximum price to filter by.
		 *     Type: double
		 * @param {string} similar_to_id A product id that you want to find similar products for. (Only include one)
		 * @param {string} num_results How many results to return. Defaults to 5. It can be a number between 1 and 10.
		 * @return {SearchResponse} OK
		 */
		Search(query: string | null | undefined, price_min: number | null | undefined, price_max: number | null | undefined, similar_to_id: string | null | undefined, num_results: string | null | undefined): Observable<SearchResponse> {
			return this.http.get<SearchResponse>(this.baseUri + 'openai/search?query=' + (query == null ? '' : encodeURIComponent(query)) + '&price_min=' + price_min + '&price_max=' + price_max + '&similar_to_id=' + (similar_to_id == null ? '' : encodeURIComponent(similar_to_id)) + '&num_results=' + (num_results == null ? '' : encodeURIComponent(num_results)), {});
		}
	}

}

