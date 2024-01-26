import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GenerateAccessTokenRequest {

		/** The sequence of service accounts in a delegation chain. This field is required for [delegated requests](https://cloud.google.com/iam/help/credentials/delegated-request). For [direct requests](https://cloud.google.com/iam/help/credentials/direct-request), which are more common, do not specify this field. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request. The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid. */
		delegates?: Array<string>;

		/** The desired lifetime duration of the access token in seconds. By default, the maximum allowed value is 1 hour. To set a lifetime of up to 12 hours, you can add the service account as an allowed value in an Organization Policy that enforces the `constraints/iam.allowServiceAccountCredentialLifetimeExtension` constraint. See detailed instructions at https://cloud.google.com/iam/help/credentials/lifetime If a value is not specified, the token's lifetime will be set to a default value of 1 hour. */
		lifetime?: string | null;

		/** Required. Code to identify the scopes to be included in the OAuth 2.0 access token. See https://developers.google.com/identity/protocols/googlescopes for more information. At least one value required. */
		scope?: Array<string>;
	}
	export interface GenerateAccessTokenRequestFormProperties {

		/** The desired lifetime duration of the access token in seconds. By default, the maximum allowed value is 1 hour. To set a lifetime of up to 12 hours, you can add the service account as an allowed value in an Organization Policy that enforces the `constraints/iam.allowServiceAccountCredentialLifetimeExtension` constraint. See detailed instructions at https://cloud.google.com/iam/help/credentials/lifetime If a value is not specified, the token's lifetime will be set to a default value of 1 hour. */
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

		/** Token expiration time. The expiration time is always set. */
		expireTime?: string | null;
	}
	export interface GenerateAccessTokenResponseFormProperties {

		/** The OAuth 2.0 access token. */
		accessToken: FormControl<string | null | undefined>,

		/** Token expiration time. The expiration time is always set. */
		expireTime: FormControl<string | null | undefined>,
	}
	export function CreateGenerateAccessTokenResponseFormGroup() {
		return new FormGroup<GenerateAccessTokenResponseFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GenerateIdTokenRequest {

		/** Required. The audience for the token, such as the API or account that this token grants access to. */
		audience?: string | null;

		/** The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request. The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid. */
		delegates?: Array<string>;

		/** Include the service account email in the token. If set to `true`, the token will contain `email` and `email_verified` claims. */
		includeEmail?: boolean | null;
	}
	export interface GenerateIdTokenRequestFormProperties {

		/** Required. The audience for the token, such as the API or account that this token grants access to. */
		audience: FormControl<string | null | undefined>,

		/** Include the service account email in the token. If set to `true`, the token will contain `email` and `email_verified` claims. */
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

		/** The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request. The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid. */
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

		/** The ID of the key used to sign the blob. The key used for signing will remain valid for at least 12 hours after the blob is signed. To verify the signature, you can retrieve the public key in several formats from the following endpoints: - RSA public key wrapped in an X.509 v3 certificate: `https://www.googleapis.com/service_accounts/v1/metadata/x509/{ACCOUNT_EMAIL}` - Raw key in JSON format: `https://www.googleapis.com/service_accounts/v1/metadata/raw/{ACCOUNT_EMAIL}` - JSON Web Key (JWK): `https://www.googleapis.com/service_accounts/v1/metadata/jwk/{ACCOUNT_EMAIL}` */
		keyId?: string | null;

		/** The signature for the blob. Does not include the original blob. After the key pair referenced by the `key_id` response field expires, Google no longer exposes the public key that can be used to verify the blob. As a result, the receiver can no longer verify the signature. */
		signedBlob?: string | null;
	}
	export interface SignBlobResponseFormProperties {

		/** The ID of the key used to sign the blob. The key used for signing will remain valid for at least 12 hours after the blob is signed. To verify the signature, you can retrieve the public key in several formats from the following endpoints: - RSA public key wrapped in an X.509 v3 certificate: `https://www.googleapis.com/service_accounts/v1/metadata/x509/{ACCOUNT_EMAIL}` - Raw key in JSON format: `https://www.googleapis.com/service_accounts/v1/metadata/raw/{ACCOUNT_EMAIL}` - JSON Web Key (JWK): `https://www.googleapis.com/service_accounts/v1/metadata/jwk/{ACCOUNT_EMAIL}` */
		keyId: FormControl<string | null | undefined>,

		/** The signature for the blob. Does not include the original blob. After the key pair referenced by the `key_id` response field expires, Google no longer exposes the public key that can be used to verify the blob. As a result, the receiver can no longer verify the signature. */
		signedBlob: FormControl<string | null | undefined>,
	}
	export function CreateSignBlobResponseFormGroup() {
		return new FormGroup<SignBlobResponseFormProperties>({
			keyId: new FormControl<string | null | undefined>(undefined),
			signedBlob: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SignJwtRequest {

		/** The sequence of service accounts in a delegation chain. Each service account must be granted the `roles/iam.serviceAccountTokenCreator` role on its next service account in the chain. The last service account in the chain must be granted the `roles/iam.serviceAccountTokenCreator` role on the service account that is specified in the `name` field of the request. The delegates must have the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid. */
		delegates?: Array<string>;

		/** Required. The JWT payload to sign. Must be a serialized JSON object that contains a JWT Claims Set. For example: `{"sub": "user@example.com", "iat": 313435}` If the JWT Claims Set contains an expiration time (`exp`) claim, it must be an integer timestamp that is not in the past and no more than 12 hours in the future. */
		payload?: string | null;
	}
	export interface SignJwtRequestFormProperties {

		/** Required. The JWT payload to sign. Must be a serialized JSON object that contains a JWT Claims Set. For example: `{"sub": "user@example.com", "iat": 313435}` If the JWT Claims Set contains an expiration time (`exp`) claim, it must be an integer timestamp that is not in the past and no more than 12 hours in the future. */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateSignJwtRequestFormGroup() {
		return new FormGroup<SignJwtRequestFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SignJwtResponse {

		/** The ID of the key used to sign the JWT. The key used for signing will remain valid for at least 12 hours after the JWT is signed. To verify the signature, you can retrieve the public key in several formats from the following endpoints: - RSA public key wrapped in an X.509 v3 certificate: `https://www.googleapis.com/service_accounts/v1/metadata/x509/{ACCOUNT_EMAIL}` - Raw key in JSON format: `https://www.googleapis.com/service_accounts/v1/metadata/raw/{ACCOUNT_EMAIL}` - JSON Web Key (JWK): `https://www.googleapis.com/service_accounts/v1/metadata/jwk/{ACCOUNT_EMAIL}` */
		keyId?: string | null;

		/** The signed JWT. Contains the automatically generated header; the client-supplied payload; and the signature, which is generated using the key referenced by the `kid` field in the header. After the key pair referenced by the `key_id` response field expires, Google no longer exposes the public key that can be used to verify the JWT. As a result, the receiver can no longer verify the signature. */
		signedJwt?: string | null;
	}
	export interface SignJwtResponseFormProperties {

		/** The ID of the key used to sign the JWT. The key used for signing will remain valid for at least 12 hours after the JWT is signed. To verify the signature, you can retrieve the public key in several formats from the following endpoints: - RSA public key wrapped in an X.509 v3 certificate: `https://www.googleapis.com/service_accounts/v1/metadata/x509/{ACCOUNT_EMAIL}` - Raw key in JSON format: `https://www.googleapis.com/service_accounts/v1/metadata/raw/{ACCOUNT_EMAIL}` - JSON Web Key (JWK): `https://www.googleapis.com/service_accounts/v1/metadata/jwk/{ACCOUNT_EMAIL}` */
		keyId: FormControl<string | null | undefined>,

		/** The signed JWT. Contains the automatically generated header; the client-supplied payload; and the signature, which is generated using the key referenced by the `kid` field in the header. After the key pair referenced by the `key_id` response field expires, Google no longer exposes the public key that can be used to verify the JWT. As a result, the receiver can no longer verify the signature. */
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
		 * @param {string} name Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
		 * @return {GenerateAccessTokenResponse} Successful response
		 */
		Iamcredentials_projects_serviceAccounts_generateAccessToken(name: string, requestBody: GenerateAccessTokenRequest): Observable<GenerateAccessTokenResponse> {
			return this.http.post<GenerateAccessTokenResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':generateAccessToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates an OpenID Connect ID token for a service account.
		 * Post v1/{name}:generateIdToken
		 * @param {string} name Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
		 * @return {GenerateIdTokenResponse} Successful response
		 */
		Iamcredentials_projects_serviceAccounts_generateIdToken(name: string, requestBody: GenerateIdTokenRequest): Observable<GenerateIdTokenResponse> {
			return this.http.post<GenerateIdTokenResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':generateIdToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Signs a blob using a service account's system-managed private key.
		 * Post v1/{name}:signBlob
		 * @param {string} name Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
		 * @return {SignBlobResponse} Successful response
		 */
		Iamcredentials_projects_serviceAccounts_signBlob(name: string, requestBody: SignBlobRequest): Observable<SignBlobResponse> {
			return this.http.post<SignBlobResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':signBlob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Signs a JWT using a service account's system-managed private key.
		 * Post v1/{name}:signJwt
		 * @param {string} name Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
		 * @return {SignJwtResponse} Successful response
		 */
		Iamcredentials_projects_serviceAccounts_signJwt(name: string, requestBody: SignJwtRequest): Observable<SignJwtResponse> {
			return this.http.post<SignJwtResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':signJwt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

