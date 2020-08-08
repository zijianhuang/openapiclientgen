import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Contact {

		/** Contact type */
		type?: string;

		/** Contact value */
		value?: string;
	}

	export interface DID {

		/** Custom tag associated with the phone number */
		custom_tag?: string;

		/** Phone number */
		phone_number?: string;
	}

	export interface DetailedInvalidParam {

		/** Invalid property name */
		name?: string;

		/** Invalid property reason */
		reason?: string;
	}

	export interface ErrorResponse {

		/** Error message */
		msg?: string;

		/** Http Response Code */
		status?: number;
	}


	/** URL to the first page of records */
	export interface FirstHref {
		href?: string;
	}


	/** URL to the last page of records */
	export interface LastHref {
		href?: string;
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

	export interface User {

		/** Collection of contact objects */
		contact_numbers?: Array<Contact>;

		/** Email address of the user */
		email?: string;

		/** Collection of extension objects */
		extensions?: Array<UserExtension>;

		/** First name of the user */
		first_name?: string;

		/** Unique identifier of the user */
		id?: number;

		/** Last name of the user */
		last_name?: string;

		/** Login name of the user */
		login_name?: string;
	}

	export interface UserExtension {

		/** Collection of phone numbers assigned to the extension */
		dids?: Array<DID>;

		/** Extension number */
		extension_number?: string;
	}

	export interface UserEmbeddedObject {
		data?: User;
	}

	export interface UserHalResponse {
		_embedded?: UserEmbeddedObject;
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

	export interface UsersEmbeddedObject {
		data?: Array<User>;
	}

	export interface UsersHalResponse {
		_embedded?: UsersEmbeddedObject;
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

	export interface ValidationErrorsResponse {

		/** Error Track ID */
		instance?: string;

		/** Invalid parameters and their reason for failing */
		invalid_parameters?: Array<DetailedInvalidParam>;

		/** Error status code */
		status?: number;

		/** Error title */
		title?: string;
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
		UserCtrl_getUsers(account_id: string, page_size: number, page: number, first_name: string, last_name: string, login_name: string, email: string): Observable<UsersHalResponse> {
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

