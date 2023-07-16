import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Account {
		address?: Address;

		/** Unique identifier of the account */
		id?: number;

		/** Name of the account */
		name?: string;

		/** Status of the account */
		status?: string;
	}

	export interface Address {

		/** Street portion of the address */
		address_1?: string;

		/** Additional address information */
		address_2?: string;

		/** City name */
		city?: string;

		/** Country code */
		country?: string;

		/** Postal code */
		postal_code?: string;

		/** State/Province code */
		state?: string;
	}


	/** Account object */
	export interface AccountEmbeddedObject {
		data?: Account;
	}

	export interface AccountHalResponse {

		/** Account object */
		_embedded?: AccountEmbeddedObject;
		_links?: Links;

		/** Current page number */
		page?: number;

		/** Number of records per page */
		page_size?: number;

		/** Total number of records */
		total_items?: number;

		/** Total number of pages */
		total_pages?: number;
	}

	export interface Links {

		/** URL to the first page of records */
		first?: FirstHref;

		/** URL to the last page of records */
		last?: LastHref;

		/** URL to the next page of records */
		next?: NextHref;

		/** URL to the previous page of records */
		prev?: PrevHref;

		/** URL to the current page of records */
		self?: SelfHref;
	}


	/** URL to the first page of records */
	export interface FirstHref {
		href?: string;
	}


	/** URL to the last page of records */
	export interface LastHref {
		href?: string;
	}


	/** URL to the next page of records */
	export interface NextHref {
		href?: string;
	}


	/** URL to the previous page of records */
	export interface PrevHref {
		href?: string;
	}


	/** URL to the current page of records */
	export interface SelfHref {
		href?: string;
	}

	export interface AddressWithTimeZone {

		/** Street portion of the address */
		address_1?: string;

		/** Additional address information */
		address_2?: string;

		/** City name */
		city?: string;

		/** Country code */
		country?: string;

		/** Postal code */
		postal_code?: string;

		/** State/Province code */
		state?: string;

		/** Time zone */
		time_zone?: string;
	}

	export interface Location {
		address?: AddressWithTimeZone;

		/** Unique identifier of the location */
		id?: number;

		/** Name of the location */
		name?: string;
	}


	/** Location object */
	export interface LocationEmbeddedObject {
		data?: Location;
	}

	export interface LocationHalResponse {

		/** Location object */
		_embedded?: LocationEmbeddedObject;
		_links?: Links;

		/** Current page number */
		page?: number;

		/** Number of records per page */
		page_size?: number;

		/** Total number of records */
		total_items?: number;

		/** Total number of pages */
		total_pages?: number;
	}


	/** Collection of location objects */
	export interface LocationsEmbeddedObject {
		data?: Array<Location>;
	}

	export interface LocationsHalResponse {

		/** Collection of location objects */
		_embedded?: LocationsEmbeddedObject;
		_links?: Links;
		page?: number;
		page_size?: number;
		total_items?: number;
		total_pages?: number;
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

