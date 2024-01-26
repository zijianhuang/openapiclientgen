import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Product {
		attributes?: Array<string>;
		name?: string | null;
		price?: string | null;
		url?: string | null;
	}
	export interface ProductFormProperties {
		name: FormControl<string | null | undefined>,
		price: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductResponse {
		products?: Array<Product>;
	}
	export interface ProductResponseFormProperties {
	}
	export function CreateProductResponseFormGroup() {
		return new FormGroup<ProductResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * API for fetching Klarna product information
		 * Get public/openai/v0/products
		 * @param {string} q A precise query that matches one very small category or product that needs to be searched for to find the products the user is looking for. If the user explicitly stated what they want, use that as a query. The query is as specific as possible to the product name or category mentioned by the user in its singular form, and don't contain any clarifiers like latest, newest, cheapest, budget, premium, expensive or similar. The query is always taken from the latest topic, if there is a new topic a new query is started.
		 * @param {number} size number of products returned
		 * @param {number} budget maximum price of the matching product in local currency, filters results
		 * @return {ProductResponse} Products found
		 */
		ProductsUsingGET(q: string, size: number | null | undefined, budget: number | null | undefined): Observable<ProductResponse> {
			return this.http.get<ProductResponse>(this.baseUri + 'public/openai/v0/products?q=' + (q == null ? '' : encodeURIComponent(q)) + '&size=' + size + '&budget=' + budget, {});
		}
	}

}

