import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Contact {

		/** Contact type */
		type?: string | null;

		/** Contact value */
		value?: string | null;
	}
	export interface ContactFormProperties {

		/** Contact type */
		type: FormControl<string | null | undefined>,

		/** Contact value */
		value: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
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

	export interface ErrorResponse {

		/** Error message */
		msg?: string | null;

		/**
		 * Http Response Code
		 * Type: double
		 */
		status?: number | null;
	}
	export interface ErrorResponseFormProperties {

		/** Error message */
		msg: FormControl<string | null | undefined>,

		/**
		 * Http Response Code
		 * Type: double
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
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

	export interface User {

		/** Collection of contact objects */
		contact_numbers?: Array<Contact>;

		/** Email address of the user */
		email?: string | null;

		/** Collection of extension objects */
		extensions?: Array<UserExtension>;

		/** First name of the user */
		first_name?: string | null;

		/**
		 * Unique identifier of the user
		 * Type: double
		 */
		id?: number | null;

		/** Last name of the user */
		last_name?: string | null;

		/** Login name of the user */
		login_name?: string | null;
	}
	export interface UserFormProperties {

		/** Email address of the user */
		email: FormControl<string | null | undefined>,

		/** First name of the user */
		first_name: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the user
		 * Type: double
		 */
		id: FormControl<number | null | undefined>,

		/** Last name of the user */
		last_name: FormControl<string | null | undefined>,

		/** Login name of the user */
		login_name: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			login_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserExtension {

		/** Collection of phone numbers assigned to the extension */
		dids?: Array<DID>;

		/** Extension number */
		extension_number?: string | null;
	}
	export interface UserExtensionFormProperties {

		/** Extension number */
		extension_number: FormControl<string | null | undefined>,
	}
	export function CreateUserExtensionFormGroup() {
		return new FormGroup<UserExtensionFormProperties>({
			extension_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserEmbeddedObject {
		data?: User;
	}
	export interface UserEmbeddedObjectFormProperties {
	}
	export function CreateUserEmbeddedObjectFormGroup() {
		return new FormGroup<UserEmbeddedObjectFormProperties>({
		});

	}

	export interface UserHalResponse {
		_embedded?: UserEmbeddedObject;
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
	export interface UserHalResponseFormProperties {

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
	export function CreateUserHalResponseFormGroup() {
		return new FormGroup<UserHalResponseFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			total_items: new FormControl<number | null | undefined>(undefined),
			total_pages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UsersEmbeddedObject {
		data?: Array<User>;
	}
	export interface UsersEmbeddedObjectFormProperties {
	}
	export function CreateUsersEmbeddedObjectFormGroup() {
		return new FormGroup<UsersEmbeddedObjectFormProperties>({
		});

	}

	export interface UsersHalResponse {
		_embedded?: UsersEmbeddedObject;
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
	export interface UsersHalResponseFormProperties {

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
	export function CreateUsersHalResponseFormGroup() {
		return new FormGroup<UsersHalResponseFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			total_items: new FormControl<number | null | undefined>(undefined),
			total_pages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ValidationErrorsResponse {

		/** Error Track ID */
		instance?: string | null;

		/** Invalid parameters and their reason for failing */
		invalid_parameters?: Array<DetailedInvalidParam>;

		/**
		 * Error status code
		 * Type: double
		 */
		status?: number | null;

		/** Error title */
		title?: string | null;
	}
	export interface ValidationErrorsResponseFormProperties {

		/** Error Track ID */
		instance: FormControl<string | null | undefined>,

		/**
		 * Error status code
		 * Type: double
		 */
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
		 * Get account users data by account ID
		 * Get api/accounts/{account_id}/users
		 * @param {string} account_id The Vonage Business Cloud account ID
		 * @param {number} page_size Number of records per page
		 *     Type: double
		 * @param {number} page Current page number
		 *     Type: double
		 * @param {string} first_name Filter by first name
		 * @param {string} last_name Filter by last name
		 * @param {string} login_name Filter by login name
		 * @param {string} email Filter by email address
		 * @return {UsersHalResponse} Success
		 */
		UserCtrl_getUsers(account_id: string, page_size: number | null | undefined, page: number | null | undefined, first_name: string | null | undefined, last_name: string | null | undefined, login_name: string | null | undefined, email: string | null | undefined): Observable<UsersHalResponse> {
			return this.http.get<UsersHalResponse>(this.baseUri + 'api/accounts/' + (account_id == null ? '' : encodeURIComponent(account_id)) + '/users&page_size=' + page_size + '&page=' + page + '&first_name=' + (first_name == null ? '' : encodeURIComponent(first_name)) + '&last_name=' + (last_name == null ? '' : encodeURIComponent(last_name)) + '&login_name=' + (login_name == null ? '' : encodeURIComponent(login_name)) + '&email=' + (email == null ? '' : encodeURIComponent(email)), {});
		}

		/**
		 * Get user data by account ID and user ID
		 * Get api/accounts/{account_id}/users/{user_id}
		 * @param {string} account_id The Vonage Business Cloud account ID
		 * @param {number} user_id The Vonage Business Cloud user ID
		 *     Type: double
		 * @return {UserHalResponse} Success
		 */
		UserCtrl_getUserByID(account_id: string, user_id: number): Observable<UserHalResponse> {
			return this.http.get<UserHalResponse>(this.baseUri + 'api/accounts/' + (account_id == null ? '' : encodeURIComponent(account_id)) + '/users/' + user_id, {});
		}
	}

}

