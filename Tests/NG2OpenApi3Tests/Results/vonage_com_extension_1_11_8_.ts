import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BasicUser {

		/** Email address of the user */
		email?: string | null;

		/** First name of the user */
		first_name?: string | null;

		/** Last name of the user */
		last_name?: string | null;

		/** Login name of the user */
		login_name?: string | null;
	}
	export interface BasicUserFormProperties {

		/** Email address of the user */
		email: FormControl<string | null | undefined>,

		/** First name of the user */
		first_name: FormControl<string | null | undefined>,

		/** Last name of the user */
		last_name: FormControl<string | null | undefined>,

		/** Login name of the user */
		login_name: FormControl<string | null | undefined>,
	}
	export function CreateBasicUserFormGroup() {
		return new FormGroup<BasicUserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			login_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DID {

		/** Custom tag associated with the phone number */
		custom_tag?: string | null;

		/** Phone number */
		phone_number?: string | null;
	}
	export interface DIDFormProperties {

		/** Custom tag associated with the phone number */
		custom_tag: FormControl<string | null | undefined>,

		/** Phone number */
		phone_number: FormControl<string | null | undefined>,
	}
	export function CreateDIDFormGroup() {
		return new FormGroup<DIDFormProperties>({
			custom_tag: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetailedInvalidParam {

		/** Invalid property name */
		name?: string | null;

		/** Invalid property reason */
		reason?: string | null;
	}
	export interface DetailedInvalidParamFormProperties {

		/** Invalid property name */
		name: FormControl<string | null | undefined>,

		/** Invalid property reason */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateDetailedInvalidParamFormGroup() {
		return new FormGroup<DetailedInvalidParamFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EndUserRoute {

		/** Block Caller ID status of the extension */
		block_caller_id?: boolean | null;

		/** Caller ID of the extension */
		caller_id?: string | null;

		/** Collection of phone numbers assigned to the extension */
		dids?: Array<DID>;

		/** Do Not Disturb status of the extension */
		dnd_enabled?: boolean | null;

		/** Collection of handsets assigned to the extension */
		extension_handsets?: Array<Line>;

		/** Extension number */
		extension_number?: string | null;

		/** Unique identifier of the assigned location */
		location_id?: number | null;
		user?: BasicUser;

		/** Voicemail transcription status of the location */
		vtt_enabled?: boolean | null;
	}
	export interface EndUserRouteFormProperties {

		/** Block Caller ID status of the extension */
		block_caller_id: FormControl<boolean | null | undefined>,

		/** Caller ID of the extension */
		caller_id: FormControl<string | null | undefined>,

		/** Do Not Disturb status of the extension */
		dnd_enabled: FormControl<boolean | null | undefined>,

		/** Extension number */
		extension_number: FormControl<string | null | undefined>,

		/** Unique identifier of the assigned location */
		location_id: FormControl<number | null | undefined>,

		/** Voicemail transcription status of the location */
		vtt_enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEndUserRouteFormGroup() {
		return new FormGroup<EndUserRouteFormProperties>({
			block_caller_id: new FormControl<boolean | null | undefined>(undefined),
			caller_id: new FormControl<string | null | undefined>(undefined),
			dnd_enabled: new FormControl<boolean | null | undefined>(undefined),
			extension_number: new FormControl<string | null | undefined>(undefined),
			location_id: new FormControl<number | null | undefined>(undefined),
			vtt_enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Line {

		/** Name of the handset */
		handset_name?: string | null;

		/** SIP identifier of the handset */
		sip_id?: string | null;
	}
	export interface LineFormProperties {

		/** Name of the handset */
		handset_name: FormControl<string | null | undefined>,

		/** SIP identifier of the handset */
		sip_id: FormControl<string | null | undefined>,
	}
	export function CreateLineFormGroup() {
		return new FormGroup<LineFormProperties>({
			handset_name: new FormControl<string | null | undefined>(undefined),
			sip_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EndUserRouteEmbeddedObject {
		data?: EndUserRoute;
	}
	export interface EndUserRouteEmbeddedObjectFormProperties {
	}
	export function CreateEndUserRouteEmbeddedObjectFormGroup() {
		return new FormGroup<EndUserRouteEmbeddedObjectFormProperties>({
		});

	}

	export interface EndUserRouteHalResponse {
		_embedded?: EndUserRouteEmbeddedObject;
		_links?: Links;

		/** Current page number */
		page?: number | null;

		/** Number of records per page */
		page_size?: number | null;

		/** Total number of records */
		total_items?: number | null;

		/** Total number of pages */
		total_pages?: number | null;
	}
	export interface EndUserRouteHalResponseFormProperties {

		/** Current page number */
		page: FormControl<number | null | undefined>,

		/** Number of records per page */
		page_size: FormControl<number | null | undefined>,

		/** Total number of records */
		total_items: FormControl<number | null | undefined>,

		/** Total number of pages */
		total_pages: FormControl<number | null | undefined>,
	}
	export function CreateEndUserRouteHalResponseFormGroup() {
		return new FormGroup<EndUserRouteHalResponseFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			total_items: new FormControl<number | null | undefined>(undefined),
			total_pages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Links {

		/** URL to the first page of records */
		first?: FirstHref;

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

	export interface ErrorResponse {

		/** Error message */
		msg?: string | null;

		/** Http Response Code */
		status?: number | null;
	}
	export interface ErrorResponseFormProperties {

		/** Error message */
		msg: FormControl<string | null | undefined>,

		/** Http Response Code */
		status: FormControl<number | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
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

	export interface ValidationErrorsResponse {

		/** Error Track ID */
		instance?: string | null;

		/** Invalid parameters and their reason for failing */
		invalid_parameters?: Array<DetailedInvalidParam>;

		/** Error status code */
		status?: number | null;

		/** Error title */
		title?: string | null;
	}
	export interface ValidationErrorsResponseFormProperties {

		/** Error Track ID */
		instance: FormControl<string | null | undefined>,

		/** Error status code */
		status: FormControl<number | null | undefined>,

		/** Error title */
		title: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorsResponseFormGroup() {
		return new FormGroup<ValidationErrorsResponseFormProperties>({
			instance: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get account extensions data by account ID
		 * Get api/accounts/{account_id}/extensions
		 * @param {string} account_id The Vonage Business Cloud account ID
		 * @param {number} page_size Number of records per page
		 * @param {number} page Current page number
		 * @param {number} location_id Filter by location id
		 * @param {string} phone_number Filter by phone number
		 * @param {string} login_name Filter by login name
		 * @param {string} email Filter by email address
		 * @return {EndUserRouteHalResponse} Success
		 */
		ExtensionCtrl_getAccountExtensions(account_id: string, page_size: number | null | undefined, page: number | null | undefined, location_id: number | null | undefined, phone_number: string | null | undefined, login_name: string | null | undefined, email: string | null | undefined): Observable<EndUserRouteHalResponse> {
			return this.http.get<EndUserRouteHalResponse>(this.baseUri + 'api/accounts/' + (account_id == null ? '' : encodeURIComponent(account_id)) + '/extensions&page_size=' + page_size + '&page=' + page + '&location_id=' + location_id + '&phone_number=' + (phone_number == null ? '' : encodeURIComponent(phone_number)) + '&login_name=' + (login_name == null ? '' : encodeURIComponent(login_name)) + '&email=' + (email == null ? '' : encodeURIComponent(email)), {});
		}

		/**
		 * Get extension data by account ID and extension number
		 * Get api/accounts/{account_id}/extensions/{extension_number}
		 * @param {string} account_id The Vonage Business Cloud account ID
		 * @param {number} extension_number The extension number
		 * @return {EndUserRouteHalResponse} Success
		 */
		ExtensionCtrl_getAccountExtensionByID(account_id: string, extension_number: number): Observable<EndUserRouteHalResponse> {
			return this.http.get<EndUserRouteHalResponse>(this.baseUri + 'api/accounts/' + (account_id == null ? '' : encodeURIComponent(account_id)) + '/extensions/' + extension_number, {});
		}
	}

}

