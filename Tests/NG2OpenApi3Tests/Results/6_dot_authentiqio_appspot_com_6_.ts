import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * Authentiq ID in JWT format, self-signed.
	 */
	export interface AuthentiqID {

		/** device token for push messages */
		devtoken?: string | null;

		/**
		 * UUID and public signing key
		 * Required
		 */
		sub: string;
	}

	/**
	 * Authentiq ID in JWT format, self-signed.
	 */
	export interface AuthentiqIDFormProperties {

		/** device token for push messages */
		devtoken: FormControl<string | null | undefined>,

		/**
		 * UUID and public signing key
		 * Required
		 */
		sub: FormControl<string | null | undefined>,
	}
	export function CreateAuthentiqIDFormGroup() {
		return new FormGroup<AuthentiqIDFormProperties>({
			devtoken: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * Claim in JWT format, self- or issuer-signed. 
	 */
	export interface Claims {
		email?: string | null;
		phone?: string | null;

		/**
		 * claim scope
		 * Required
		 */
		scope: string;

		/**
		 * UUID
		 * Required
		 */
		sub: string;
		type?: string | null;
	}

	/**
	 * Claim in JWT format, self- or issuer-signed. 
	 */
	export interface ClaimsFormProperties {
		email: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,

		/**
		 * claim scope
		 * Required
		 */
		scope: FormControl<string | null | undefined>,

		/**
		 * UUID
		 * Required
		 */
		sub: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateClaimsFormGroup() {
		return new FormGroup<ClaimsFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sub: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {
		detail?: string | null;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		error: number;
		title?: string | null;

		/** unique uri for this error */
		type?: string | null;
	}
	export interface ErrorFormProperties {
		detail: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		error: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** unique uri for this error */
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * PushToken in JWT format, self-signed. 
	 */
	export interface PushToken {

		/**
		 * audience (URI)
		 * Required
		 */
		aud: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		exp?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		iat?: number | null;

		/**
		 * issuer (URI)
		 * Required
		 */
		iss: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		nbf?: number | null;

		/**
		 * UUID and public signing key
		 * Required
		 */
		sub: string;
	}

	/**
	 * PushToken in JWT format, self-signed. 
	 */
	export interface PushTokenFormProperties {

		/**
		 * audience (URI)
		 * Required
		 */
		aud: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		exp: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		iat: FormControl<number | null | undefined>,

		/**
		 * issuer (URI)
		 * Required
		 */
		iss: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		nbf: FormControl<number | null | undefined>,

		/**
		 * UUID and public signing key
		 * Required
		 */
		sub: FormControl<string | null | undefined>,
	}
	export function CreatePushTokenFormGroup() {
		return new FormGroup<PushTokenFormProperties>({
			aud: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			exp: new FormControl<number | null | undefined>(undefined),
			iat: new FormControl<number | null | undefined>(undefined),
			iss: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nbf: new FormControl<number | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Revoke an Authentiq ID using email & phone.
		 * If called with `email` and `phone` only, a verification code
		 * will be sent by email. Do a second call adding `code` to
		 * complete the revocation.
		 * Delete key
		 * @param {string} email primary email associated to Key (ID)
		 * @param {string} phone primary phone number, international representation
		 * @param {string} code verification code sent by email
		 * @return {Key_revoke_nosecretReturn} Successfully deleted
		 */
		Key_revoke_nosecret(email: string, phone: string, code: string | null | undefined): Observable<Key_revoke_nosecretReturn> {
			return this.http.delete<Key_revoke_nosecretReturn>(this.baseUri + 'key?email=' + (email == null ? '' : encodeURIComponent(email)) + '&phone=' + (phone == null ? '' : encodeURIComponent(phone)) + '&code=' + (code == null ? '' : encodeURIComponent(code)), {});
		}

		/**
		 * Register a new ID `JWT(sub, devtoken)`
		 * v5: `JWT(sub, pk, devtoken, ...)`
		 * See: https://github.com/skion/authentiq/wiki/JWT-Examples
		 * Post key
		 * @param {AuthentiqID} requestBody Authentiq ID to register
		 * @return {void} 
		 */
		Key_register(requestBody: AuthentiqID): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'key', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Revoke an Identity (Key) with a revocation secret
		 * Delete key/{PK}
		 * @param {string} PK Public Signing Key - Authentiq ID (43 chars)
		 * @param {string} secret revokation secret
		 * @return {Key_revokeReturn} Successful response
		 */
		Key_revoke(PK: string, secret: string): Observable<Key_revokeReturn> {
			return this.http.delete<Key_revokeReturn>(this.baseUri + 'key/' + (PK == null ? '' : encodeURIComponent(PK)) + '&secret=' + (secret == null ? '' : encodeURIComponent(secret)), {});
		}

		/**
		 * Get public details of an Authentiq ID.
		 * Get key/{PK}
		 * @param {string} PK Public Signing Key - Authentiq ID (43 chars)
		 * @return {Key_retrieveReturn} Successfully retrieved
		 */
		Key_retrieve(PK: string): Observable<Key_retrieveReturn> {
			return this.http.get<Key_retrieveReturn>(this.baseUri + 'key/' + (PK == null ? '' : encodeURIComponent(PK)), {});
		}

		/**
		 * update properties of an Authentiq ID.
		 * (not operational in v4; use PUT for now)
		 * v5: POST issuer-signed email & phone scopes in
		 * a self-signed JWT
		 * See: https://github.com/skion/authentiq/wiki/JWT-Examples
		 * Post key/{PK}
		 * @param {string} PK Public Signing Key - Authentiq ID (43 chars)
		 * @param {AuthentiqID} requestBody Authentiq ID to register
		 * @return {Key_updateReturn} Successfully updated
		 */
		Key_update(PK: string, requestBody: AuthentiqID): Observable<Key_updateReturn> {
			return this.http.post<Key_updateReturn>(this.baseUri + 'key/' + (PK == null ? '' : encodeURIComponent(PK)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update Authentiq ID by replacing the object.
		 * v4: `JWT(sub,email,phone)` to bind email/phone hash;
		 * v5: POST issuer-signed email & phone scopes
		 * and PUT to update registration `JWT(sub, pk, devtoken, ...)`
		 * See: https://github.com/skion/authentiq/wiki/JWT-Examples
		 * Put key/{PK}
		 * @param {string} PK Public Signing Key - Authentiq ID (43 chars)
		 * @param {AuthentiqID} requestBody Authentiq ID to register
		 * @return {Key_bindReturn} Successfully updated
		 */
		Key_bind(PK: string, requestBody: AuthentiqID): Observable<Key_bindReturn> {
			return this.http.put<Key_bindReturn>(this.baseUri + 'key/' + (PK == null ? '' : encodeURIComponent(PK)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * delete a verification job
		 * Delete scope/{job}
		 * @param {string} job Job ID (20 chars)
		 * @return {Sign_deleteReturn} Successfully deleted
		 */
		Sign_delete(job: string): Observable<Sign_deleteReturn> {
			return this.http.delete<Sign_deleteReturn>(this.baseUri + 'scope/' + (job == null ? '' : encodeURIComponent(job)), {});
		}

		/**
		 * get the status / current content of a verification job
		 * Get scope/{job}
		 * @param {string} job Job ID (20 chars)
		 * @return {Sign_retrieveReturn} Successful response (JWT)
		 */
		Sign_retrieve(job: string): Observable<Sign_retrieveReturn> {
			return this.http.get<Sign_retrieveReturn>(this.baseUri + 'scope/' + (job == null ? '' : encodeURIComponent(job)), {});
		}

		/**
		 * this is a scope confirmation
		 * Post scope/{job}
		 * @param {string} job Job ID (20 chars)
		 * @return {void} 
		 */
		Sign_confirm(job: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'scope/' + (job == null ? '' : encodeURIComponent(job)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * authority updates a JWT with its signature
		 * See: https://github.com/skion/authentiq/wiki/JWT-Examples
		 * Put scope/{job}
		 * @param {string} job Job ID (20 chars)
		 * @return {void} Successfully updated
		 */
		Sign_update(job: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'scope/' + (job == null ? '' : encodeURIComponent(job)), null, { observe: 'response', responseType: 'text' });
		}
	}

	export interface Key_revoke_nosecretReturn {

		/** pending or done */
		status?: string | null;
	}
	export interface Key_revoke_nosecretReturnFormProperties {

		/** pending or done */
		status: FormControl<string | null | undefined>,
	}
	export function CreateKey_revoke_nosecretReturnFormGroup() {
		return new FormGroup<Key_revoke_nosecretReturnFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Key_revokeReturn {

		/** done */
		status?: string | null;
	}
	export interface Key_revokeReturnFormProperties {

		/** done */
		status: FormControl<string | null | undefined>,
	}
	export function CreateKey_revokeReturnFormGroup() {
		return new FormGroup<Key_revokeReturnFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Key_retrieveReturn {
		since?: Date | null;
		status?: string | null;

		/** base64safe encoded public signing key */
		sub?: string | null;
	}
	export interface Key_retrieveReturnFormProperties {
		since: FormControl<Date | null | undefined>,
		status: FormControl<string | null | undefined>,

		/** base64safe encoded public signing key */
		sub: FormControl<string | null | undefined>,
	}
	export function CreateKey_retrieveReturnFormGroup() {
		return new FormGroup<Key_retrieveReturnFormProperties>({
			since: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Key_updateReturn {

		/** confirmed */
		status?: string | null;
	}
	export interface Key_updateReturnFormProperties {

		/** confirmed */
		status: FormControl<string | null | undefined>,
	}
	export function CreateKey_updateReturnFormGroup() {
		return new FormGroup<Key_updateReturnFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Key_bindReturn {

		/** confirmed */
		status?: string | null;
	}
	export interface Key_bindReturnFormProperties {

		/** confirmed */
		status: FormControl<string | null | undefined>,
	}
	export function CreateKey_bindReturnFormGroup() {
		return new FormGroup<Key_bindReturnFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sign_deleteReturn {

		/** done */
		status?: string | null;
	}
	export interface Sign_deleteReturnFormProperties {

		/** done */
		status: FormControl<string | null | undefined>,
	}
	export function CreateSign_deleteReturnFormGroup() {
		return new FormGroup<Sign_deleteReturnFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sign_retrieveReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		exp?: number | null;
		field?: string | null;

		/** base64safe encoded public signing key */
		sub?: string | null;
	}
	export interface Sign_retrieveReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		exp: FormControl<number | null | undefined>,
		field: FormControl<string | null | undefined>,

		/** base64safe encoded public signing key */
		sub: FormControl<string | null | undefined>,
	}
	export function CreateSign_retrieveReturnFormGroup() {
		return new FormGroup<Sign_retrieveReturnFormProperties>({
			exp: new FormControl<number | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined),
		});

	}

}

