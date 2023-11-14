import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Account {
		address?: Address | null;

		/** Unique identifier of the account */
		id?: number | null;

		/** Name of the account */
		name?: string | null;

		/** Status of the account */
		status?: string | null;
	}

	export interface Address {

		/** Street portion of the address */
		address_1?: string | null;

		/** Additional address information */
		address_2?: string | null;

		/** City name */
		city?: string | null;

		/** Country code */
		country?: string | null;

		/** Postal code */
		postal_code?: string | null;

		/** State/Province code */
		state?: string | null;
	}


	/** Account object */
	export interface AccountEmbeddedObject {
		data?: Account | null;
	}

	export interface AccountHalResponse {

		/** Account object */
		_embedded?: AccountEmbeddedObject | null;
		_links?: Links | null;

		/** Current page number */
		page?: number | null;

		/** Number of records per page */
		page_size?: number | null;

		/** Total number of records */
		total_items?: number | null;

		/** Total number of pages */
		total_pages?: number | null;
	}

	export interface Links {

		/** URL to the first page of records */
		first?: FirstHref | null;

		/** URL to the last page of records */
		last?: LastHref | null;

		/** URL to the next page of records */
		next?: NextHref | null;

		/** URL to the previous page of records */
		prev?: PrevHref | null;

		/** URL to the current page of records */
		self?: SelfHref | null;
	}


	/** URL to the first page of records */
	export interface FirstHref {
		href?: string | null;
	}


	/** URL to the last page of records */
	export interface LastHref {
		href?: string | null;
	}


	/** URL to the next page of records */
	export interface NextHref {
		href?: string | null;
	}


	/** URL to the previous page of records */
	export interface PrevHref {
		href?: string | null;
	}


	/** URL to the current page of records */
	export interface SelfHref {
		href?: string | null;
	}

	export interface AddressWithTimeZone {

		/** Street portion of the address */
		address_1?: string | null;

		/** Additional address information */
		address_2?: string | null;

		/** City name */
		city?: string | null;

		/** Country code */
		country?: string | null;

		/** Postal code */
		postal_code?: string | null;

		/** State/Province code */
		state?: string | null;

		/** Time zone */
		time_zone?: string | null;
	}

	export interface Location {
		address?: AddressWithTimeZone | null;

		/** Unique identifier of the location */
		id?: number | null;

		/** Name of the location */
		name?: string | null;
	}


	/** Location object */
	export interface LocationEmbeddedObject {
		data?: Location | null;
	}

	export interface LocationHalResponse {

		/** Location object */
		_embedded?: LocationEmbeddedObject | null;
		_links?: Links | null;

		/** Current page number */
		page?: number | null;

		/** Number of records per page */
		page_size?: number | null;

		/** Total number of records */
		total_items?: number | null;

		/** Total number of pages */
		total_pages?: number | null;
	}


	/** Collection of location objects */
	export interface LocationsEmbeddedObject {
		data?: Array<Location> | null;
	}

	export interface LocationsHalResponse {

		/** Collection of location objects */
		_embedded?: LocationsEmbeddedObject | null;
		_links?: Links | null;
		page?: number | null;
		page_size?: number | null;
		total_items?: number | null;
		total_pages?: number | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get account data by ID
		 * Get api/accounts/{account_id}
		 * @param {number} account_id The Vonage Business Cloud account ID
		 * @return {AccountHalResponse} Success
		 */
		AccountCtrl_getAccountServicesByAccountID(account_id: number): Observable<AccountHalResponse> {
			return this.http.get<AccountHalResponse>(this.baseUri + 'api/accounts/' + account_id, {});
		}

		/**
		 * Get account locations data by account ID
		 * Get api/accounts/{account_id}/locations
		 * @param {number} account_id The Vonage Business Cloud account ID
		 * @return {LocationsHalResponse} Success
		 */
		AccountCtrl_getLocationsByAccountID(account_id: number): Observable<LocationsHalResponse> {
			return this.http.get<LocationsHalResponse>(this.baseUri + 'api/accounts/' + account_id + '/locations', {});
		}

		/**
		 * Get location data by account ID and location ID
		 * Get api/accounts/{account_id}/locations/{location_id}
		 * @param {number} account_id The Vonage Business Cloud account ID
		 * @param {number} location_id The Vonage Business Cloud location ID
		 * @return {LocationHalResponse} Success
		 */
		AccountCtrl_getLocationByID(account_id: number, location_id: number): Observable<LocationHalResponse> {
			return this.http.get<LocationHalResponse>(this.baseUri + 'api/accounts/' + account_id + '/locations/' + location_id, {});
		}
	}

}

