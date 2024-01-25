import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GenerateAccessTokenRequest {

		/**
		 * The sequence of service accounts in a delegation chain. Each service
		 * account must be granted the `roles/iam.serviceAccountTokenCreator` role
		 * on its next service account in the chain. The last service account in the
		 * chain must be granted the `roles/iam.serviceAccountTokenCreator` role
		 * on the service account that is specified in the `name` field of the
		 * request.
		 * The delegates must have the following format:
		 * `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
		 * character is required; replacing it with a project ID is invalid.
		 */
		delegates?: Array<string>;

		/**
		 * The desired lifetime duration of the access token in seconds.
		 * Must be set to a value less than or equal to 3600 (1 hour). If a value is
		 * not specified, the token's lifetime will be set to a default value of one
		 * hour.
		 */
		lifetime?: string | null;

		/**
		 * Required. Code to identify the scopes to be included in the OAuth 2.0 access token.
		 * See https://developers.google.com/identity/protocols/googlescopes for more
		 * information.
		 * At least one value required.
		 */
		scope?: Array<string>;
	}
	export interface GenerateAccessTokenRequestFormProperties {

		/**
		 * The desired lifetime duration of the access token in seconds.
		 * Must be set to a value less than or equal to 3600 (1 hour). If a value is
		 * not specified, the token's lifetime will be set to a default value of one
		 * hour.
		 */
		lifetime: FormControl<string | null | undefined>,
	}
	export function CreateGenerateAccessTokenRequestFormGroup() {
		return new FormGroup<GenerateAccessTokenRequestFormProperties>({
			lifetime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GenerateAccessTokenResponse {

		/** The OAuth 2.0 access token. */
		accessToken?: string | null;

		/**
		 * Token expiration time.
		 * The expiration time is always set.
		 */
		expireTime?: string | null;
	}
	export interface GenerateAccessTokenResponseFormProperties {

		/** The OAuth 2.0 access token. */
		accessToken: FormControl<string | null | undefined>,

		/**
		 * Token expiration time.
		 * The expiration time is always set.
		 */
		expireTime: FormControl<string | null | undefined>,
	}
	export function CreateGenerateAccessTokenResponseFormGroup() {
		return new FormGroup<GenerateAccessTokenResponseFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GenerateIdTokenRequest {

		/**
		 * Required. The audience for the token, such as the API or account that this token
		 * grants access to.
		 */
		audience?: string | null;

		/**
		 * The sequence of service accounts in a delegation chain. Each service
		 * account must be granted the `roles/iam.serviceAccountTokenCreator` role
		 * on its next service account in the chain. The last service account in the
		 * chain must be granted the `roles/iam.serviceAccountTokenCreator` role
		 * on the service account that is specified in the `name` field of the
		 * request.
		 * The delegates must have the following format:
		 * `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
		 * character is required; replacing it with a project ID is invalid.
		 */
		delegates?: Array<string>;

		/**
		 * Include the service account email in the token. If set to `true`, the
		 * token will contain `email` and `email_verified` claims.
		 */
		includeEmail?: boolean | null;
	}
	export interface GenerateIdTokenRequestFormProperties {

		/**
		 * Required. The audience for the token, such as the API or account that this token
		 * grants access to.
		 */
		audience: FormControl<string | null | undefined>,

		/**
		 * Include the service account email in the token. If set to `true`, the
		 * token will contain `email` and `email_verified` claims.
		 */
		includeEmail: FormControl<boolean | null | undefined>,
	}
	export function CreateGenerateIdTokenRequestFormGroup() {
		return new FormGroup<GenerateIdTokenRequestFormProperties>({
			audience: new FormControl<string | null | undefined>(undefined),
			includeEmail: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GenerateIdTokenResponse {

		/** The OpenId Connect ID token. */
		token?: string | null;
	}
	export interface GenerateIdTokenResponseFormProperties {

		/** The OpenId Connect ID token. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateGenerateIdTokenResponseFormGroup() {
		return new FormGroup<GenerateIdTokenResponseFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SignBlobRequest {

		/**
		 * The sequence of service accounts in a delegation chain. Each service
		 * account must be granted the `roles/iam.serviceAccountTokenCreator` role
		 * on its next service account in the chain. The last service account in the
		 * chain must be granted the `roles/iam.serviceAccountTokenCreator` role
		 * on the service account that is specified in the `name` field of the
		 * request.
		 * The delegates must have the following format:
		 * `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
		 * character is required; replacing it with a project ID is invalid.
		 */
		delegates?: Array<string>;

		/** Required. The bytes to sign. */
		payload?: string | null;
	}
	export interface SignBlobRequestFormProperties {

		/** Required. The bytes to sign. */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateSignBlobRequestFormGroup() {
		return new FormGroup<SignBlobRequestFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SignBlobResponse {

		/** The ID of the key used to sign the blob. */
		keyId?: string | null;

		/** The signed blob. */
		signedBlob?: string | null;
	}
	export interface SignBlobResponseFormProperties {

		/** The ID of the key used to sign the blob. */
		keyId: FormControl<string | null | undefined>,

		/** The signed blob. */
		signedBlob: FormControl<string | null | undefined>,
	}
	export function CreateSignBlobResponseFormGroup() {
		return new FormGroup<SignBlobResponseFormProperties>({
			keyId: new FormControl<string | null | undefined>(undefined),
			signedBlob: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SignJwtRequest {

		/**
		 * The sequence of service accounts in a delegation chain. Each service
		 * account must be granted the `roles/iam.serviceAccountTokenCreator` role
		 * on its next service account in the chain. The last service account in the
		 * chain must be granted the `roles/iam.serviceAccountTokenCreator` role
		 * on the service account that is specified in the `name` field of the
		 * request.
		 * The delegates must have the following format:
		 * `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
		 * character is required; replacing it with a project ID is invalid.
		 */
		delegates?: Array<string>;

		/** Required. The JWT payload to sign: a JSON object that contains a JWT Claims Set. */
		payload?: string | null;
	}
	export interface SignJwtRequestFormProperties {

		/** Required. The JWT payload to sign: a JSON object that contains a JWT Claims Set. */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateSignJwtRequestFormGroup() {
		return new FormGroup<SignJwtRequestFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SignJwtResponse {

		/** The ID of the key used to sign the JWT. */
		keyId?: string | null;

		/** The signed JWT. */
		signedJwt?: string | null;
	}
	export interface SignJwtResponseFormProperties {

		/** The ID of the key used to sign the JWT. */
		keyId: FormControl<string | null | undefined>,

		/** The signed JWT. */
		signedJwt: FormControl<string | null | undefined>,
	}
	export function CreateSignJwtResponseFormGroup() {
		return new FormGroup<SignJwtResponseFormProperties>({
			keyId: new FormControl<string | null | undefined>(undefined),
			signedJwt: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Generates an OAuth 2.0 access token for a service account.
		 * Post v1/{name}:generateAccessToken
		 * @param {string} name Required. The resource name of the service account for which the credentials
		 * are requested, in the following format:
		 * `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
		 * character is required; replacing it with a project ID is invalid.
		 * @return {void} Successful response
		 */
		Iamcredentials_projects_serviceAccounts_generateAccessToken(name: string, requestBody: GenerateAccessTokenRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':generateAccessToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates an OpenID Connect ID token for a service account.
		 * Post v1/{name}:generateIdToken
		 * @param {string} name Required. The resource name of the service account for which the credentials
		 * are requested, in the following format:
		 * `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
		 * character is required; replacing it with a project ID is invalid.
		 * @return {void} Successful response
		 */
		Iamcredentials_projects_serviceAccounts_generateIdToken(name: string, requestBody: GenerateIdTokenRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':generateIdToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Signs a blob using a service account's system-managed private key.
		 * Post v1/{name}:signBlob
		 * @param {string} name Required. The resource name of the service account for which the credentials
		 * are requested, in the following format:
		 * `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
		 * character is required; replacing it with a project ID is invalid.
		 * @return {void} Successful response
		 */
		Iamcredentials_projects_serviceAccounts_signBlob(name: string, requestBody: SignBlobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':signBlob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Signs a JWT using a service account's system-managed private key.
		 * Post v1/{name}:signJwt
		 * @param {string} name Required. The resource name of the service account for which the credentials
		 * are requested, in the following format:
		 * `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard
		 * character is required; replacing it with a project ID is invalid.
		 * @return {void} Successful response
		 */
		Iamcredentials_projects_serviceAccounts_signJwt(name: string, requestBody: SignJwtRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':signJwt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

