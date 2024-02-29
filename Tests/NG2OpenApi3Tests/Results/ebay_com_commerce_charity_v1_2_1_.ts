import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The physical location of the item. */
	export interface Address {

		/** The city of the charitable organization. */
		city?: string | null;

		/** The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html ">ISO 3166</a> standard of the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/charity/types/bas:CountryCodeEnum'>eBay API documentation</a> */
		country?: string | null;

		/** The postal code of the charitable organization. */
		postalCode?: string | null;

		/** The state or province of the charitable organization. */
		stateOrProvince?: string | null;
	}

	/** The physical location of the item. */
	export interface AddressFormProperties {

		/** The city of the charitable organization. */
		city: FormControl<string | null | undefined>,

		/** The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html ">ISO 3166</a> standard of the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/charity/types/bas:CountryCodeEnum'>eBay API documentation</a> */
		country: FormControl<string | null | undefined>,

		/** The postal code of the charitable organization. */
		postalCode: FormControl<string | null | undefined>,

		/** The state or province of the charitable organization. */
		stateOrProvince: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			stateOrProvince: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The full location, ID, logo and other details of the charity organization. */
	export interface CharityOrg {

		/** The ID of the charitable organization. */
		charityOrgId?: string | null;

		/** The description of the charitable organization. */
		description?: string | null;
		location?: Location;

		/** The logo of the charitable organization. */
		logoImage?: Image;

		/** The mission statement of the charitable organization. */
		missionStatement?: string | null;

		/** The name of the charitable organization. */
		name?: string | null;

		/** The registration ID for the charitable organization.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> For the US marketplace, this is the EIN.</span> */
		registrationId?: string | null;

		/** The link to the website for the charitable organization. */
		website?: string | null;
	}

	/** The full location, ID, logo and other details of the charity organization. */
	export interface CharityOrgFormProperties {

		/** The ID of the charitable organization. */
		charityOrgId: FormControl<string | null | undefined>,

		/** The description of the charitable organization. */
		description: FormControl<string | null | undefined>,

		/** The mission statement of the charitable organization. */
		missionStatement: FormControl<string | null | undefined>,

		/** The name of the charitable organization. */
		name: FormControl<string | null | undefined>,

		/** The registration ID for the charitable organization.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> For the US marketplace, this is the EIN.</span> */
		registrationId: FormControl<string | null | undefined>,

		/** The link to the website for the charitable organization. */
		website: FormControl<string | null | undefined>,
	}
	export function CreateCharityOrgFormGroup() {
		return new FormGroup<CharityOrgFormProperties>({
			charityOrgId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			missionStatement: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			registrationId: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Location {

		/** The physical location of the item. */
		address?: Address;

		/** Defines the format of a geographic coordinate. */
		geoCoordinates?: GeoCoordinates;
	}
	export interface LocationFormProperties {
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
		});

	}


	/** Defines the format of a geographic coordinate. */
	export interface GeoCoordinates {

		/**
		 * The latitude component of the geographic coordinate.
		 * Type: double
		 */
		latitude?: number | null;

		/**
		 * The longitude component of the geographic coordinate.
		 * Type: double
		 */
		longitude?: number | null;
	}

	/** Defines the format of a geographic coordinate. */
	export interface GeoCoordinatesFormProperties {

		/**
		 * The latitude component of the geographic coordinate.
		 * Type: double
		 */
		latitude: FormControl<number | null | undefined>,

		/**
		 * The longitude component of the geographic coordinate.
		 * Type: double
		 */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateGeoCoordinatesFormGroup() {
		return new FormGroup<GeoCoordinatesFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The logo of the charitable organization. */
	export interface Image {

		/** The height of the logo image. */
		height?: string | null;

		/** The URL to the logo image location. */
		imageUrl?: string | null;

		/** The width of the logo image. */
		width?: string | null;
	}

	/** The logo of the charitable organization. */
	export interface ImageFormProperties {

		/** The height of the logo image. */
		height: FormControl<string | null | undefined>,

		/** The URL to the logo image location. */
		imageUrl: FormControl<string | null | undefined>,

		/** The width of the logo image. */
		width: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			height: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single set of search results, with information for accessing other sets. */
	export interface CharitySearchResponse {

		/** The list of charitable organizations that match the search criteria. */
		charityOrgs?: Array<CharityOrg>;

		/** The relative path to the current set of results. */
		href?: string | null;

		/**
		 * The number of items, from the result set, returned in a single page.<br /><br /><b>Valid Values:</b> <code>1-100</code><br /><br /><b>Default:</b> <code>20</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;

		/** The relative path to the next set of results. */
		next?: string | null;

		/**
		 * The number of items that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.<br /><br /><b>Valid Values:</b> <code>0-10,000</code><br /><br /><b>Default:</b> <code>0</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** The relative path to the previous set of results. */
		prev?: string | null;

		/**
		 * The total number of matches for the search criteria.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total?: number | null;
	}

	/** A single set of search results, with information for accessing other sets. */
	export interface CharitySearchResponseFormProperties {

		/** The relative path to the current set of results. */
		href: FormControl<string | null | undefined>,

		/**
		 * The number of items, from the result set, returned in a single page.<br /><br /><b>Valid Values:</b> <code>1-100</code><br /><br /><b>Default:</b> <code>20</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,

		/** The relative path to the next set of results. */
		next: FormControl<string | null | undefined>,

		/**
		 * The number of items that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.<br /><br /><b>Valid Values:</b> <code>0-10,000</code><br /><br /><b>Default:</b> <code>0</code>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The relative path to the previous set of results. */
		prev: FormControl<string | null | undefined>,

		/**
		 * The total number of matches for the search criteria.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateCharitySearchResponseFormGroup() {
		return new FormGroup<CharitySearchResponseFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This type defines the fields that can be returned in an error. */
	export interface Error {

		/** Identifies the type of erro. */
		category?: string | null;

		/** Name for the primary system where the error occurred. This is relevant for application errors. */
		domain?: string | null;

		/**
		 * A unique number to identify the error.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorId?: number | null;

		/** An array of request elements most closely associated to the error. */
		inputRefIds?: Array<string>;

		/** A more detailed explanation of the error. */
		longMessage?: string | null;

		/** Information on how to correct the problem, in the end user's terms and language where applicable. */
		message?: string | null;

		/** An array of request elements most closely associated to the error. */
		outputRefIds?: Array<string>;

		/** An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned. */
		parameters?: Array<ErrorParameter>;

		/** Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc. */
		subdomain?: string | null;
	}

	/** This type defines the fields that can be returned in an error. */
	export interface ErrorFormProperties {

		/** Identifies the type of erro. */
		category: FormControl<string | null | undefined>,

		/** Name for the primary system where the error occurred. This is relevant for application errors. */
		domain: FormControl<string | null | undefined>,

		/**
		 * A unique number to identify the error.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorId: FormControl<number | null | undefined>,

		/** A more detailed explanation of the error. */
		longMessage: FormControl<string | null | undefined>,

		/** Information on how to correct the problem, in the end user's terms and language where applicable. */
		message: FormControl<string | null | undefined>,

		/** Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc. */
		subdomain: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			errorId: new FormControl<number | null | undefined>(undefined),
			longMessage: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			subdomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorParameter {

		/** The object of the error. */
		name?: string | null;

		/** The value of the object. */
		value?: string | null;
	}
	export interface ErrorParameterFormProperties {

		/** The object of the error. */
		name: FormControl<string | null | undefined>,

		/** The value of the object. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorParameterFormGroup() {
		return new FormGroup<ErrorParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This call is used to search for supported charitable organizations. It allows users to search for a specific charitable organization, or for multiple charitable organizations, from a particular charitable domain and/or geographical region, or by using search criteria.<br /><br />The call returns paginated search results containing the charitable organizations that match the specified criteria.
		 * Get charity_org
		 * @param {string} limit The number of items, from the result set, returned in a single page.<br /><br /><b>Valid Values:</b> <code>1-100</code><br /><br /><b>Default:</b> <code>20</code>
		 * @param {string} offset The number of items that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.<br /><br /><b>Valid Values:</b> <code>0-10,000</code><br /><br /><b>Default:</b> <code>0</code>
		 * @param {string} q A query string that matches the keywords in name, mission statement, or description.
		 * @param {string} registration_ids A comma-separated list of charitable organization registration IDs.<br /><br /><span class="tablenote"><b>Note: </b>Do not specify this parameter for query-based searches. Specify either the <b>q</b> or <b>registration_ids</b> parameter, but not both.</span><br /><br /><b>Maximum Limit:</b> <code>20</code>
		 * @return {CharitySearchResponse} OK
		 */
		GetCharityOrgs(limit: string | null | undefined, offset: string | null | undefined, q: string | null | undefined, registration_ids: string | null | undefined): Observable<CharitySearchResponse> {
			return this.http.get<CharitySearchResponse>(this.baseUri + 'charity_org?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&registration_ids=' + (registration_ids == null ? '' : encodeURIComponent(registration_ids)), {});
		}

		/**
		 * This call is used to retrieve detailed information about supported charitable organizations. It allows users to retrieve the details for a specific charitable organization using its charity organization ID.
		 * Get charity_org/{charity_org_id}
		 * @param {string} charity_org_id The unique ID of the charitable organization.
		 * @return {CharityOrg} OK
		 */
		GetCharityOrg(charity_org_id: string): Observable<CharityOrg> {
			return this.http.get<CharityOrg>(this.baseUri + 'charity_org/' + (charity_org_id == null ? '' : encodeURIComponent(charity_org_id)), {});
		}
	}

}

