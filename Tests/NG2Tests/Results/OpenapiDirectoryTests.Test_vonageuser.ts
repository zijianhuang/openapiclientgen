import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Contact {

		/** Contact type */
		type?: string | null;

		/** Contact value */
		value?: string | null;
	}

	export interface DID {

		/** Custom tag associated with the phone number */
		custom_tag?: string | null;

		/** Phone number */
		phone_number?: string | null;
	}

	export interface DetailedInvalidParam {

		/** Invalid property name */
		name?: string | null;

		/** Invalid property reason */
		reason?: string | null;
	}

	export interface ErrorResponse {

		/** Error message */
		msg?: string | null;

		/** Http Response Code */
		status?: number | null;
	}


	/** URL to the first page of records */
	export interface FirstHref {
		href?: string | null;
	}


	/** URL to the last page of records */
	export interface LastHref {
		href?: string | null;
	}

	export interface Links {

		/** URL to the first page of records */
		first?: FirstHref | null;

		/** URL to the next page of records */
		next?: NextHref | null;

		/** URL to the previous page of records */
		prev?: PrevHref | null;

		/** URL to the current page of records */
		self?: SelfHref | null;
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

	export interface User {

		/** Collection of contact objects */
		contact_numbers?: Array<Contact> | null;

		/** Email address of the user */
		email?: string | null;

		/** Collection of extension objects */
		extensions?: Array<UserExtension> | null;

		/** First name of the user */
		first_name?: string | null;

		/** Unique identifier of the user */
		id?: number | null;

		/** Last name of the user */
		last_name?: string | null;

		/** Login name of the user */
		login_name?: string | null;
	}

	export interface UserExtension {

		/** Collection of phone numbers assigned to the extension */
		dids?: Array<DID> | null;

		/** Extension number */
		extension_number?: string | null;
	}

	export interface UserEmbeddedObject {
		data?: User | null;
	}

	export interface UserHalResponse {
		_embedded?: UserEmbeddedObject | null;
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

	export interface UsersEmbeddedObject {
		data?: Array<User> | null;
	}

	export interface UsersHalResponse {
		_embedded?: UsersEmbeddedObject | null;
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

	export interface ValidationErrorsResponse {

		/** Error Track ID */
		instance?: string | null;

		/** Invalid parameters and their reason for failing */
		invalid_parameters?: Array<DetailedInvalidParam> | null;

		/** Error status code */
		status?: number | null;

		/** Error title */
		title?: string | null;
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
		 * @param {number} page Current page number
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
		 * @return {UserHalResponse} Success
		 */
		UserCtrl_getUserByID(account_id: string, user_id: number): Observable<UserHalResponse> {
			return this.http.get<UserHalResponse>(this.baseUri + 'api/accounts/' + (account_id == null ? '' : encodeURIComponent(account_id)) + '/users/' + user_id, {});
		}
	}

}

