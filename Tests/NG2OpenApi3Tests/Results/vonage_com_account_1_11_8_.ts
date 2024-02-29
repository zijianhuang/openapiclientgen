import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Account {
		address?: Address;

		/**
		 * Unique identifier of the account
		 * Type: double
		 */
		id?: number | null;

		/** Name of the account */
		name?: string | null;

		/** Status of the account */
		status?: string | null;
	}
	export interface AccountFormProperties {

		/**
		 * Unique identifier of the account
		 * Type: double
		 */
		id: FormControl<number | null | undefined>,

		/** Name of the account */
		name: FormControl<string | null | undefined>,

		/** Status of the account */
		status: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface AddressFormProperties {

		/** Street portion of the address */
		address_1: FormControl<string | null | undefined>,

		/** Additional address information */
		address_2: FormControl<string | null | undefined>,

		/** City name */
		city: FormControl<string | null | undefined>,

		/** Country code */
		country: FormControl<string | null | undefined>,

		/** Postal code */
		postal_code: FormControl<string | null | undefined>,

		/** State/Province code */
		state: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			address_1: new FormControl<string | null | undefined>(undefined),
			address_2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Account object */
	export interface AccountEmbeddedObject {
		data?: Account;
	}

	/** Account object */
	export interface AccountEmbeddedObjectFormProperties {
	}
	export function CreateAccountEmbeddedObjectFormGroup() {
		return new FormGroup<AccountEmbeddedObjectFormProperties>({
		});

	}

	export interface AccountHalResponse {

		/** Account object */
		_embedded?: AccountEmbeddedObject;
		_links?: Links;

		/**
		 * Current page number
		 * Type: double
		 */
		page?: number | null;

		/**
		 * Number of records per page
		 * Type: double
		 */
		page_size?: number | null;

		/**
		 * Total number of records
		 * Type: double
		 */
		total_items?: number | null;

		/**
		 * Total number of pages
		 * Type: double
		 */
		total_pages?: number | null;
	}
	export interface AccountHalResponseFormProperties {

		/**
		 * Current page number
		 * Type: double
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Number of records per page
		 * Type: double
		 */
		page_size: FormControl<number | null | undefined>,

		/**
		 * Total number of records
		 * Type: double
		 */
		total_items: FormControl<number | null | undefined>,

		/**
		 * Total number of pages
		 * Type: double
		 */
		total_pages: FormControl<number | null | undefined>,
	}
	export function CreateAccountHalResponseFormGroup() {
		return new FormGroup<AccountHalResponseFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			total_items: new FormControl<number | null | undefined>(undefined),
			total_pages: new FormControl<number | null | undefined>(undefined),
		});

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
	export interface LinksFormProperties {
	}
	export function CreateLinksFormGroup() {
		return new FormGroup<LinksFormProperties>({
		});

	}


	/** URL to the first page of records */
	export interface FirstHref {
		href?: string | null;
	}

	/** URL to the first page of records */
	export interface FirstHrefFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateFirstHrefFormGroup() {
		return new FormGroup<FirstHrefFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** URL to the last page of records */
	export interface LastHref {
		href?: string | null;
	}

	/** URL to the last page of records */
	export interface LastHrefFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateLastHrefFormGroup() {
		return new FormGroup<LastHrefFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** URL to the next page of records */
	export interface NextHref {
		href?: string | null;
	}

	/** URL to the next page of records */
	export interface NextHrefFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateNextHrefFormGroup() {
		return new FormGroup<NextHrefFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** URL to the previous page of records */
	export interface PrevHref {
		href?: string | null;
	}

	/** URL to the previous page of records */
	export interface PrevHrefFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreatePrevHrefFormGroup() {
		return new FormGroup<PrevHrefFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** URL to the current page of records */
	export interface SelfHref {
		href?: string | null;
	}

	/** URL to the current page of records */
	export interface SelfHrefFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateSelfHrefFormGroup() {
		return new FormGroup<SelfHrefFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface AddressWithTimeZoneFormProperties {

		/** Street portion of the address */
		address_1: FormControl<string | null | undefined>,

		/** Additional address information */
		address_2: FormControl<string | null | undefined>,

		/** City name */
		city: FormControl<string | null | undefined>,

		/** Country code */
		country: FormControl<string | null | undefined>,

		/** Postal code */
		postal_code: FormControl<string | null | undefined>,

		/** State/Province code */
		state: FormControl<string | null | undefined>,

		/** Time zone */
		time_zone: FormControl<string | null | undefined>,
	}
	export function CreateAddressWithTimeZoneFormGroup() {
		return new FormGroup<AddressWithTimeZoneFormProperties>({
			address_1: new FormControl<string | null | undefined>(undefined),
			address_2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			time_zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Location {
		address?: AddressWithTimeZone;

		/**
		 * Unique identifier of the location
		 * Type: double
		 */
		id?: number | null;

		/** Name of the location */
		name?: string | null;
	}
	export interface LocationFormProperties {

		/**
		 * Unique identifier of the location
		 * Type: double
		 */
		id: FormControl<number | null | undefined>,

		/** Name of the location */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location object */
	export interface LocationEmbeddedObject {
		data?: Location;
	}

	/** Location object */
	export interface LocationEmbeddedObjectFormProperties {
	}
	export function CreateLocationEmbeddedObjectFormGroup() {
		return new FormGroup<LocationEmbeddedObjectFormProperties>({
		});

	}

	export interface LocationHalResponse {

		/** Location object */
		_embedded?: LocationEmbeddedObject;
		_links?: Links;

		/**
		 * Current page number
		 * Type: double
		 */
		page?: number | null;

		/**
		 * Number of records per page
		 * Type: double
		 */
		page_size?: number | null;

		/**
		 * Total number of records
		 * Type: double
		 */
		total_items?: number | null;

		/**
		 * Total number of pages
		 * Type: double
		 */
		total_pages?: number | null;
	}
	export interface LocationHalResponseFormProperties {

		/**
		 * Current page number
		 * Type: double
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * Number of records per page
		 * Type: double
		 */
		page_size: FormControl<number | null | undefined>,

		/**
		 * Total number of records
		 * Type: double
		 */
		total_items: FormControl<number | null | undefined>,

		/**
		 * Total number of pages
		 * Type: double
		 */
		total_pages: FormControl<number | null | undefined>,
	}
	export function CreateLocationHalResponseFormGroup() {
		return new FormGroup<LocationHalResponseFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			total_items: new FormControl<number | null | undefined>(undefined),
			total_pages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Collection of location objects */
	export interface LocationsEmbeddedObject {
		data?: Array<Location>;
	}

	/** Collection of location objects */
	export interface LocationsEmbeddedObjectFormProperties {
	}
	export function CreateLocationsEmbeddedObjectFormGroup() {
		return new FormGroup<LocationsEmbeddedObjectFormProperties>({
		});

	}

	export interface LocationsHalResponse {

		/** Collection of location objects */
		_embedded?: LocationsEmbeddedObject;
		_links?: Links;

		/** Type: double */
		page?: number | null;

		/** Type: double */
		page_size?: number | null;

		/** Type: double */
		total_items?: number | null;

		/** Type: double */
		total_pages?: number | null;
	}
	export interface LocationsHalResponseFormProperties {

		/** Type: double */
		page: FormControl<number | null | undefined>,

		/** Type: double */
		page_size: FormControl<number | null | undefined>,

		/** Type: double */
		total_items: FormControl<number | null | undefined>,

		/** Type: double */
		total_pages: FormControl<number | null | undefined>,
	}
	export function CreateLocationsHalResponseFormGroup() {
		return new FormGroup<LocationsHalResponseFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			total_items: new FormControl<number | null | undefined>(undefined),
			total_pages: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get account data by ID
		 * Get api/accounts/{account_id}
		 * @param {number} account_id The Vonage Business Cloud account ID
		 *     Type: double
		 * @return {AccountHalResponse} Success
		 */
		AccountCtrl_getAccountServicesByAccountID(account_id: number): Observable<AccountHalResponse> {
			return this.http.get<AccountHalResponse>(this.baseUri + 'api/accounts/' + account_id, {});
		}

		/**
		 * Get account locations data by account ID
		 * Get api/accounts/{account_id}/locations
		 * @param {number} account_id The Vonage Business Cloud account ID
		 *     Type: double
		 * @return {LocationsHalResponse} Success
		 */
		AccountCtrl_getLocationsByAccountID(account_id: number): Observable<LocationsHalResponse> {
			return this.http.get<LocationsHalResponse>(this.baseUri + 'api/accounts/' + account_id + '/locations', {});
		}

		/**
		 * Get location data by account ID and location ID
		 * Get api/accounts/{account_id}/locations/{location_id}
		 * @param {number} account_id The Vonage Business Cloud account ID
		 *     Type: double
		 * @param {number} location_id The Vonage Business Cloud location ID
		 *     Type: double
		 * @return {LocationHalResponse} Success
		 */
		AccountCtrl_getLocationByID(account_id: number, location_id: number): Observable<LocationHalResponse> {
			return this.http.get<LocationHalResponse>(this.baseUri + 'api/accounts/' + account_id + '/locations/' + location_id, {});
		}
	}

}

