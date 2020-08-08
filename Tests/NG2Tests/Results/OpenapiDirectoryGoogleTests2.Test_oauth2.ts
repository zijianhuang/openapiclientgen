import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Tokeninfo {

		/** Who is the intended audience for this token. In general the same as issued_to. */
		audience?: string;

		/** The email address of the user. Present only if the email scope is present in the request. */
		email?: string;

		/** The expiry time of the token, as number of seconds left until expiry. */
		expires_in?: number;

		/** To whom was the token issued to. In general the same as audience. */
		issued_to?: string;

		/** The space separated list of scopes granted to this token. */
		scope?: string;

		/** The obfuscated user id. */
		user_id?: string;

		/** Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request. */
		verified_email?: boolean;
	}

	export interface Userinfo {

		/** The user's email address. */
		email?: string;

		/** The user's last name. */
		family_name?: string;

		/** The user's gender. */
		gender?: string;

		/** The user's first name. */
		given_name?: string;

		/** The hosted domain e.g. example.com if the user is Google apps user. */
		hd?: string;

		/** The obfuscated ID of the user. */
		id?: string;

		/** URL of the profile page. */
		link?: string;

		/** The user's preferred locale. */
		locale?: string;

		/** The user's full name. */
		name?: string;

		/** URL of the user's picture image. */
		picture?: string;

		/** Boolean flag which is true if the email address is verified. Always verified because we only return the user's primary email address. */
		verified_email?: boolean;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Post oauth2/v2/tokeninfo
		 * @return {void} Successful response
		 */
		Oauth2_tokeninfo(access_token: string, id_token: string): Observable<HttpResponse<string>> {
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

