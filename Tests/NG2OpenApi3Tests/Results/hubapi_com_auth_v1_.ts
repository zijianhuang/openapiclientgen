import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AccessTokenInfoResponse {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		app_id: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_in: number;
		hub_domain?: string | null;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hub_id: number;

		/** Required */
		scope_to_scope_group_pks: Array<number>;

		/** Required */
		scopes: Array<string>;

		/** Required */
		token: string;

		/** Required */
		token_type: string;

		/** Required */
		trial_scope_to_scope_group_pks: Array<number>;

		/** Required */
		trial_scopes: Array<string>;
		user?: string | null;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		user_id: number;
	}
	export interface AccessTokenInfoResponseFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		app_id: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_in: FormControl<number | null | undefined>,
		hub_domain: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hub_id: FormControl<number | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,

		/** Required */
		token_type: FormControl<string | null | undefined>,
		user: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateAccessTokenInfoResponseFormGroup() {
		return new FormGroup<AccessTokenInfoResponseFormProperties>({
			app_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			expires_in: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hub_domain: new FormControl<string | null | undefined>(undefined),
			hub_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error {

		/**
		 * The error category
		 * Required
		 */
		category: string;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: string;

		/** further information about the error */
		errors?: Array<ErrorDetail>;

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links?: {[id: string]: string };

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorFormProperties {

		/**
		 * The error category
		 * Required
		 */
		category: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: FormControl<string | null | undefined>,

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorDetail {

		/** The status code associated with the error detail */
		code?: string | null;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/** The name of the field or parameter in which the error was found. */
		in?: string | null;

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorDetailFormProperties {

		/** The status code associated with the error detail */
		code: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** The name of the field or parameter in which the error was found. */
		in: FormControl<string | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			in: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RefreshTokenInfoResponse {

		/** Required */
		client_id: string;
		hub_domain?: string | null;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hub_id: number;

		/** Required */
		scopes: Array<string>;

		/** Required */
		token: string;

		/** Required */
		token_type: string;
		user?: string | null;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		user_id: number;
	}
	export interface RefreshTokenInfoResponseFormProperties {

		/** Required */
		client_id: FormControl<string | null | undefined>,
		hub_domain: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hub_id: FormControl<number | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,

		/** Required */
		token_type: FormControl<string | null | undefined>,
		user: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateRefreshTokenInfoResponseFormGroup() {
		return new FormGroup<RefreshTokenInfoResponseFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hub_domain: new FormControl<string | null | undefined>(undefined),
			hub_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TokenResponseIF {

		/** Required */
		access_token: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_in: number;
		id_token?: string | null;

		/** Required */
		refresh_token: string;

		/** Required */
		token_type: string;
	}
	export interface TokenResponseIFFormProperties {

		/** Required */
		access_token: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_in: FormControl<number | null | undefined>,
		id_token: FormControl<string | null | undefined>,

		/** Required */
		refresh_token: FormControl<string | null | undefined>,

		/** Required */
		token_type: FormControl<string | null | undefined>,
	}
	export function CreateTokenResponseIFFormGroup() {
		return new FormGroup<TokenResponseIFFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expires_in: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id_token: new FormControl<string | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get oauth/v1/access-tokens/{token}
		 * @return {AccessTokenInfoResponse} successful operation
		 */
		Get_SlashoauthSlashv1Slashaccess_tokensSlashtoken_get(token: string): Observable<AccessTokenInfoResponse> {
			return this.http.get<AccessTokenInfoResponse>(this.baseUri + 'oauth/v1/access-tokens/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Delete oauth/v1/refresh-tokens/{token}
		 * @return {void} 
		 */
		Delete_SlashoauthSlashv1Slashrefresh_tokensSlashtoken_archive(token: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'oauth/v1/refresh-tokens/' + (token == null ? '' : encodeURIComponent(token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get oauth/v1/refresh-tokens/{token}
		 * @return {RefreshTokenInfoResponse} successful operation
		 */
		Get_SlashoauthSlashv1Slashrefresh_tokensSlashtoken_get(token: string): Observable<RefreshTokenInfoResponse> {
			return this.http.get<RefreshTokenInfoResponse>(this.baseUri + 'oauth/v1/refresh-tokens/' + (token == null ? '' : encodeURIComponent(token)), {});
		}
	}

}

