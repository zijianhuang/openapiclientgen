import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BuyRecommendationResponse {
		buyRecommendations?: Array<string>;
		numberOfProducts?: number | null;
		responseMessage?: string | null;
		responseStatus?: string | null;
	}
	export interface BuyRecommendationResponseFormProperties {
		numberOfProducts: FormControl<number | null | undefined>,
		responseMessage: FormControl<string | null | undefined>,
		responseStatus: FormControl<string | null | undefined>,
	}
	export function CreateBuyRecommendationResponseFormGroup() {
		return new FormGroup<BuyRecommendationResponseFormProperties>({
			numberOfProducts: new FormControl<number | null | undefined>(undefined),
			responseMessage: new FormControl<string | null | undefined>(undefined),
			responseStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface KeywordSearchResponse {
		domainCode?: string | null;
		foundProducts?: Array<string>;
		keyword?: string | null;
		numberOfProducts?: number | null;
		responseMessage?: string | null;
		responseStatus?: string | null;
		sortStrategy?: string | null;
	}
	export interface KeywordSearchResponseFormProperties {
		domainCode: FormControl<string | null | undefined>,
		keyword: FormControl<string | null | undefined>,
		numberOfProducts: FormControl<number | null | undefined>,
		responseMessage: FormControl<string | null | undefined>,
		responseStatus: FormControl<string | null | undefined>,
		sortStrategy: FormControl<string | null | undefined>,
	}
	export function CreateKeywordSearchResponseFormGroup() {
		return new FormGroup<KeywordSearchResponseFormProperties>({
			domainCode: new FormControl<string | null | undefined>(undefined),
			keyword: new FormControl<string | null | undefined>(undefined),
			numberOfProducts: new FormControl<number | null | undefined>(undefined),
			responseMessage: new FormControl<string | null | undefined>(undefined),
			responseStatus: new FormControl<string | null | undefined>(undefined),
			sortStrategy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductDetailsResponse {
		answeredQuestions?: number | null;
		asin?: string | null;
		countReview?: number | null;
		features?: Array<string>;
		fulfilledBy?: string | null;
		manufacturer?: string | null;
		price?: number | null;
		priceSaving?: string | null;
		priceShippingInformation?: string | null;
		prime?: boolean | null;
		productRating?: string | null;
		productTitle?: string | null;
		responseMessage?: string | null;
		responseStatus?: string | null;
		retailPrice?: number | null;
		sizeSelection?: Array<string>;
		soldBy?: string | null;
		warehouseAvailability?: string | null;
	}
	export interface ProductDetailsResponseFormProperties {
		answeredQuestions: FormControl<number | null | undefined>,
		asin: FormControl<string | null | undefined>,
		countReview: FormControl<number | null | undefined>,
		fulfilledBy: FormControl<string | null | undefined>,
		manufacturer: FormControl<string | null | undefined>,
		price: FormControl<number | null | undefined>,
		priceSaving: FormControl<string | null | undefined>,
		priceShippingInformation: FormControl<string | null | undefined>,
		prime: FormControl<boolean | null | undefined>,
		productRating: FormControl<string | null | undefined>,
		productTitle: FormControl<string | null | undefined>,
		responseMessage: FormControl<string | null | undefined>,
		responseStatus: FormControl<string | null | undefined>,
		retailPrice: FormControl<number | null | undefined>,
		soldBy: FormControl<string | null | undefined>,
		warehouseAvailability: FormControl<string | null | undefined>,
	}
	export function CreateProductDetailsResponseFormGroup() {
		return new FormGroup<ProductDetailsResponseFormProperties>({
			answeredQuestions: new FormControl<number | null | undefined>(undefined),
			asin: new FormControl<string | null | undefined>(undefined),
			countReview: new FormControl<number | null | undefined>(undefined),
			fulfilledBy: new FormControl<string | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			priceSaving: new FormControl<string | null | undefined>(undefined),
			priceShippingInformation: new FormControl<string | null | undefined>(undefined),
			prime: new FormControl<boolean | null | undefined>(undefined),
			productRating: new FormControl<string | null | undefined>(undefined),
			productTitle: new FormControl<string | null | undefined>(undefined),
			responseMessage: new FormControl<string | null | undefined>(undefined),
			responseStatus: new FormControl<string | null | undefined>(undefined),
			retailPrice: new FormControl<number | null | undefined>(undefined),
			soldBy: new FormControl<string | null | undefined>(undefined),
			warehouseAvailability: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SortOptionResponse {
		responseMessage?: string | null;
		responseStatus?: string | null;
		resultSize?: number | null;
		SortOptionResponseSortOptions?: Array<SortOptionResponseSortOptions>;
	}
	export interface SortOptionResponseFormProperties {
		responseMessage: FormControl<string | null | undefined>,
		responseStatus: FormControl<string | null | undefined>,
		resultSize: FormControl<number | null | undefined>,
	}
	export function CreateSortOptionResponseFormGroup() {
		return new FormGroup<SortOptionResponseFormProperties>({
			responseMessage: new FormControl<string | null | undefined>(undefined),
			responseStatus: new FormControl<string | null | undefined>(undefined),
			resultSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SortOptionResponseSortOptions {
		order?: number | null;
		sortName?: string | null;
		strategy?: string | null;
	}
	export interface SortOptionResponseSortOptionsFormProperties {
		order: FormControl<number | null | undefined>,
		sortName: FormControl<string | null | undefined>,
		strategy: FormControl<string | null | undefined>,
	}
	export function CreateSortOptionResponseSortOptionsFormGroup() {
		return new FormGroup<SortOptionResponseSortOptionsFormProperties>({
			order: new FormControl<number | null | undefined>(undefined),
			sortName: new FormControl<string | null | undefined>(undefined),
			strategy: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * request buy recommendations to a given product
		 * Get amz/amazon-lookup-buy-recommendations
		 * @param {string} url The url of the requested product.
		 * @return {BuyRecommendationResponse} successful operation
		 */
		RequestBuyRecommendation(url: string): Observable<BuyRecommendationResponse> {
			return this.http.get<BuyRecommendationResponse>(this.baseUri + 'amz/amazon-lookup-buy-recommendations?url=' + (url == null ? '' : encodeURIComponent(url)), {});
		}

		/**
		 * lookup product information
		 * Get amz/amazon-lookup-product
		 * @param {string} url The url of the requested product.
		 * @param {string} size Size parameter if available.
		 * @return {ProductDetailsResponse} successful operation
		 */
		RequestProduct(url: string, size: string | null | undefined): Observable<ProductDetailsResponse> {
			return this.http.get<ProductDetailsResponse>(this.baseUri + 'amz/amazon-lookup-product?url=' + (url == null ? '' : encodeURIComponent(url)) + '&size=' + (size == null ? '' : encodeURIComponent(size)), {});
		}

		/**
		 * fetch results auf a keyword search on Amazon
		 * Get amz/amazon-search-by-keyword
		 * @param {string} keyword keyword to search
		 * @param {string} domainCode domain for the search
		 * @param {string} sortBy sort option
		 * @param {number} numberOfProducts number of the results (max 20)
		 * @return {KeywordSearchResponse} successful operation
		 */
		KeywordSearch(keyword: string, domainCode: string, sortBy: string | null | undefined, numberOfProducts: number | null | undefined): Observable<KeywordSearchResponse> {
			return this.http.get<KeywordSearchResponse>(this.baseUri + 'amz/amazon-search-by-keyword?keyword=' + (keyword == null ? '' : encodeURIComponent(keyword)) + '&domainCode=' + (domainCode == null ? '' : encodeURIComponent(domainCode)) + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&numberOfProducts=' + numberOfProducts, {});
		}

		/**
		 * request available sort options to use in keyword search
		 * Get amz/sort-options
		 * @return {SortOptionResponse} successful operation
		 */
		SortOptions(): Observable<SortOptionResponse> {
			return this.http.get<SortOptionResponse>(this.baseUri + 'amz/sort-options', {});
		}
	}

}

