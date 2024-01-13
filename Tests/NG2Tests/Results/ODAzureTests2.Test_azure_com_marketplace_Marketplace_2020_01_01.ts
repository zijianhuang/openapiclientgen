import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Error response indicates Microsoft.Marketplace service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponse {

		/** The details of the error. */
		error?: any;
	}

	/** Error response indicates Microsoft.Marketplace service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponseFormProperties {

		/** The details of the error. */
		error: FormControl<any | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			error: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface Offer {

		/** Description of offer */
		description?: string | null;

		/** It will be displayed prominently in the marketplace */
		displayName?: string | null;

		/** Identifier for purposes of race condition */
		eTag?: string | null;

		/** Offers unique id */
		id?: string | null;

		/** Purpose or function of offer */
		longSummary?: string | null;
		plans?: Array<Plan>;

		/** Publisher name that will be displayed prominently in the marketplace */
		publisherDisplayName?: string | null;

		/** Brief purpose or function of offer */
		summary?: string | null;
	}
	export interface OfferFormProperties {

		/** Description of offer */
		description: FormControl<string | null | undefined>,

		/** It will be displayed prominently in the marketplace */
		displayName: FormControl<string | null | undefined>,

		/** Identifier for purposes of race condition */
		eTag: FormControl<string | null | undefined>,

		/** Offers unique id */
		id: FormControl<string | null | undefined>,

		/** Purpose or function of offer */
		longSummary: FormControl<string | null | undefined>,

		/** Publisher name that will be displayed prominently in the marketplace */
		publisherDisplayName: FormControl<string | null | undefined>,

		/** Brief purpose or function of offer */
		summary: FormControl<string | null | undefined>,
	}
	export function CreateOfferFormGroup() {
		return new FormGroup<OfferFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			eTag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			longSummary: new FormControl<string | null | undefined>(undefined),
			publisherDisplayName: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Plan {

		/** Friendly name for the plan for display in the marketplace */
		displayName?: string | null;

		/** Identifier for this plan */
		planId?: string | null;
	}
	export interface PlanFormProperties {

		/** Friendly name for the plan for display in the marketplace */
		displayName: FormControl<string | null | undefined>,

		/** Identifier for this plan */
		planId: FormControl<string | null | undefined>,
	}
	export function CreatePlanFormGroup() {
		return new FormGroup<PlanFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			planId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OfferListResponse {

		/** URL to get the next set of offer list results if there are any. */
		nextLink?: string | null;
		value?: Array<Offer>;
	}
	export interface OfferListResponseFormProperties {

		/** URL to get the next set of offer list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOfferListResponseFormGroup() {
		return new FormGroup<OfferListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Microsoft.Marketplace REST API operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** Microsoft.Marketplace REST API operation */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Marketplace operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Microsoft.Marketplace operations supported by the Microsoft.Marketplace resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Marketplace operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the json payload for the list of available private stores (between zero and one, inclusive) */
	export interface PrivateStoreList {

		/** URL to get the next set of PrivateStore list results if there are any. */
		nextLink?: string | null;
		value?: Array<PrivateStoreProperties>;
	}

	/** Describes the json payload for the list of available private stores (between zero and one, inclusive) */
	export interface PrivateStoreListFormProperties {

		/** URL to get the next set of PrivateStore list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePrivateStoreListFormGroup() {
		return new FormGroup<PrivateStoreListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the json payload on whether or not the private store is enabled for a given tenant */
	export interface PrivateStoreProperties {

		/** Indicates private store availability */
		availability?: PrivateStorePropertiesAvailability | null;

		/** Private Store name */
		name?: string | null;
	}

	/** Describes the json payload on whether or not the private store is enabled for a given tenant */
	export interface PrivateStorePropertiesFormProperties {

		/** Indicates private store availability */
		availability: FormControl<PrivateStorePropertiesAvailability | null | undefined>,

		/** Private Store name */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePrivateStorePropertiesFormGroup() {
		return new FormGroup<PrivateStorePropertiesFormProperties>({
			availability: new FormControl<PrivateStorePropertiesAvailability | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PrivateStorePropertiesAvailability { enabled = 0, disabled = 1 }

	export interface OfferObject {

		/** Required */
		isAvailable: boolean;
	}
	export interface OfferObjectFormProperties {

		/** Required */
		isAvailable: FormControl<boolean | null | undefined>,
	}
	export function CreateOfferObjectFormGroup() {
		return new FormGroup<OfferObjectFormProperties>({
			isAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OfferSkuObject {

		/** Required */
		isAvailable: boolean;
	}
	export interface OfferSkuObjectFormProperties {

		/** Required */
		isAvailable: FormControl<boolean | null | undefined>,
	}
	export function CreateOfferSkuObjectFormGroup() {
		return new FormGroup<OfferSkuObjectFormProperties>({
			isAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Microsoft.Marketplace REST API operations.
		 * Get providers/Microsoft.Marketplace/operations
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'providers/Microsoft.Marketplace/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the list of available private stores
		 * Get providers/Microsoft.Marketplace/privateStores
		 * @return {PrivateStoreList} OK. The request has succeeded.
		 */
		PrivateStore_List(): Observable<PrivateStoreList> {
			return this.http.get<PrivateStoreList>(this.baseUri + 'providers/Microsoft.Marketplace/privateStores', {});
		}

		/**
		 * Get information about the private store
		 * Get providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}
		 * @return {PrivateStoreProperties} OK. The request has succeeded.
		 */
		PrivateStore_Get(): Observable<PrivateStoreProperties> {
			return this.http.get<PrivateStoreProperties>(this.baseUri + 'providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}', {});
		}

		/**
		 * Changes private store properties
		 * Put providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}
		 * @return {PrivateStoreProperties} Change successful
		 */
		PrivateStore_CreateOrUpdate(requestBody: PrivateStoreProperties): Observable<PrivateStoreProperties> {
			return this.http.put<PrivateStoreProperties>(this.baseUri + 'providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the private store. All that is not saved will be lost.
		 * Delete providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}
		 * @return {void} Private store was deleted successfully .
		 */
		PrivateStore_Delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of all private offers in the given private store
		 * Get providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}/offers
		 * @return {OfferListResponse} OK
		 */
		PrivateStoreOffers_List(): Observable<OfferListResponse> {
			return this.http.get<OfferListResponse>(this.baseUri + 'providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}/offers', {});
		}

		/**
		 * Gets information about a specific offer.
		 * Get providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}/offers/{OfferId}
		 * @return {Offer} Offer information retrieved
		 */
		PrivateStoreOffer_Get(): Observable<Offer> {
			return this.http.get<Offer>(this.baseUri + 'providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}/offers/{OfferId}', {});
		}

		/**
		 * Update or add an offer to the default collection of the private store.
		 * Put providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}/offers/{OfferId}
		 * @return {Offer} OK
		 */
		PrivateStoreOffer_CreateOrUpdate(requestBody: Offer): Observable<Offer> {
			return this.http.put<Offer>(this.baseUri + 'providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}/offers/{OfferId}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an offer from the given private store.
		 * Delete providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}/offers/{OfferId}
		 * @return {void} Offer was deleted successfully
		 */
		PrivateStoreOffer_Delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}/offers/{OfferId}', { observe: 'response', responseType: 'text' });
		}
	}

}

