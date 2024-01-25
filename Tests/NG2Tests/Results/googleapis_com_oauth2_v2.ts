import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Tokeninfo {

		/** Who is the intended audience for this token. In general the same as issued_to. */
		audience?: string | null;

		/** The email address of the user. Present only if the email scope is present in the request. */
		email?: string | null;

		/** The expiry time of the token, as number of seconds left until expiry. */
		expires_in?: number | null;

		/** To whom was the token issued to. In general the same as audience. */
		issued_to?: string | null;

		/** The space separated list of scopes granted to this token. */
		scope?: string | null;

		/** The obfuscated user id. */
		user_id?: string | null;

		/** Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request. */
		verified_email?: boolean | null;
	}
	export interface TokeninfoFormProperties {

		/** Who is the intended audience for this token. In general the same as issued_to. */
		audience: FormControl<string | null | undefined>,

		/** The email address of the user. Present only if the email scope is present in the request. */
		email: FormControl<string | null | undefined>,

		/** The expiry time of the token, as number of seconds left until expiry. */
		expires_in: FormControl<number | null | undefined>,

		/** To whom was the token issued to. In general the same as audience. */
		issued_to: FormControl<string | null | undefined>,

		/** The space separated list of scopes granted to this token. */
		scope: FormControl<string | null | undefined>,

		/** The obfuscated user id. */
		user_id: FormControl<string | null | undefined>,

		/** Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request. */
		verified_email: FormControl<boolean | null | undefined>,
	}
	export function CreateTokeninfoFormGroup() {
		return new FormGroup<TokeninfoFormProperties>({
			audience: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<number | null | undefined>(undefined),
			issued_to: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
			verified_email: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Userinfo {

		/** The user's email address. */
		email?: string | null;

		/** The user's last name. */
		family_name?: string | null;

		/** The user's gender. */
		gender?: string | null;

		/** The user's first name. */
		given_name?: string | null;

		/** The hosted domain e.g. example.com if the user is Google apps user. */
		hd?: string | null;

		/** The obfuscated ID of the user. */
		id?: string | null;

		/** URL of the profile page. */
		link?: string | null;

		/** The user's preferred locale. */
		locale?: string | null;

		/** The user's full name. */
		name?: string | null;

		/** URL of the user's picture image. */
		picture?: string | null;

		/** Boolean flag which is true if the email address is verified. Always verified because we only return the user's primary email address. */
		verified_email?: boolean | null;
	}
	export interface UserinfoFormProperties {

		/** The user's email address. */
		email: FormControl<string | null | undefined>,

		/** The user's last name. */
		family_name: FormControl<string | null | undefined>,

		/** The user's gender. */
		gender: FormControl<string | null | undefined>,

		/** The user's first name. */
		given_name: FormControl<string | null | undefined>,

		/** The hosted domain e.g. example.com if the user is Google apps user. */
		hd: FormControl<string | null | undefined>,

		/** The obfuscated ID of the user. */
		id: FormControl<string | null | undefined>,

		/** URL of the profile page. */
		link: FormControl<string | null | undefined>,

		/** The user's preferred locale. */
		locale: FormControl<string | null | undefined>,

		/** The user's full name. */
		name: FormControl<string | null | undefined>,

		/** URL of the user's picture image. */
		picture: FormControl<string | null | undefined>,

		/** Boolean flag which is true if the email address is verified. Always verified because we only return the user's primary email address. */
		verified_email: FormControl<boolean | null | undefined>,
	}
	export function CreateUserinfoFormGroup() {
		return new FormGroup<UserinfoFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			family_name: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			given_name: new FormControl<string | null | undefined>(undefined),
			hd: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			picture: new FormControl<string | null | undefined>(undefined),
			verified_email: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Post oauth2/v2/tokeninfo
		 * @return {void} Successful response
		 */
		Oauth2_tokeninfo(access_token: string | null | undefined, id_token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'oauth2/v2/tokeninfo?access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)) + '&id_token=' + (id_token == null ? '' : encodeURIComponent(id_token)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get oauth2/v2/userinfo
		 * @return {void} Successful response
		 */
		Oauth2_userinfo_get(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'oauth2/v2/userinfo', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get userinfo/v2/me
		 * @return {void} Successful response
		 */
		Oauth2_userinfo_v2_me_get(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userinfo/v2/me', { observe: 'response', responseType: 'text' });
		}
	}

}

