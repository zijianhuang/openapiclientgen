import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Oauthv1certs {

		/** A collection of certificates where are signed Twilio-issued tokens. */
		keys?: any;
		url?: string | null;
	}
	export interface Oauthv1certsFormProperties {

		/** A collection of certificates where are signed Twilio-issued tokens. */
		keys: FormControl<any | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateOauthv1certsFormGroup() {
		return new FormGroup<Oauthv1certsFormProperties>({
			keys: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Oauthv1device_code {

		/** The device verification code. */
		device_code?: string | null;

		/**
		 * The expiration time of the device_code and user_code in seconds.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		expires_in?: string | null;

		/**
		 * The minimum amount of time in seconds that the client should wait between polling requests to the token endpoint.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interval?: number | null;

		/** The verification code which end user uses to verify authorization request. */
		user_code?: string | null;

		/** The URI that the end user visits to verify authorization request. */
		verification_uri?: string | null;

		/** The URI with user_code that the end-user alternatively visits to verify authorization request. */
		verification_uri_complete?: string | null;
	}
	export interface Oauthv1device_codeFormProperties {

		/** The device verification code. */
		device_code: FormControl<string | null | undefined>,

		/**
		 * The expiration time of the device_code and user_code in seconds.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		expires_in: FormControl<string | null | undefined>,

		/**
		 * The minimum amount of time in seconds that the client should wait between polling requests to the token endpoint.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interval: FormControl<number | null | undefined>,

		/** The verification code which end user uses to verify authorization request. */
		user_code: FormControl<string | null | undefined>,

		/** The URI that the end user visits to verify authorization request. */
		verification_uri: FormControl<string | null | undefined>,

		/** The URI with user_code that the end-user alternatively visits to verify authorization request. */
		verification_uri_complete: FormControl<string | null | undefined>,
	}
	export function CreateOauthv1device_codeFormGroup() {
		return new FormGroup<Oauthv1device_codeFormProperties>({
			device_code: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<string | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
			user_code: new FormControl<string | null | undefined>(undefined),
			verification_uri: new FormControl<string | null | undefined>(undefined),
			verification_uri_complete: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Oauthv1openid_discovery {

		/** The endpoint that validates all authorization requests. */
		authorization_endpoint?: string | null;

		/** A collection of claims supported by authorization server for identity token */
		claims_supported?: Array<string>;

		/** The endpoint that validates all device code related authorization requests. */
		device_authorization_endpoint?: string | null;

		/** A collection of JWS signing algorithms supported by authorization server to sign identity token. */
		id_token_signing_alg_values_supported?: Array<string>;

		/** The URL of the party that will create the token and sign it with its private key. */
		issuer?: string | null;

		/** The URL of your JSON Web Key Set. This set is a collection of JSON Web Keys, a standard method for representing cryptographic keys in a JSON structure. */
		jwk_uri?: string | null;

		/** A collection of response type supported by authorization server. */
		response_type_supported?: Array<string>;

		/** The endpoint used to revoke access or refresh tokens issued by the authorization server. */
		revocation_endpoint?: string | null;

		/** A collection of scopes supported by authorization server for identity token */
		scopes_supported?: Array<string>;

		/** A collection of subject by authorization server. */
		subject_type_supported?: Array<string>;

		/** The URL of the token endpoint. After a client has received an authorization code, that code is presented to the token endpoint and exchanged for an identity token, an access token, and a refresh token. */
		token_endpoint?: string | null;
		url?: string | null;

		/** The URL of the user info endpoint, which returns user profile information to a client. Keep in mind that the user info endpoint returns only the information that has been requested. */
		userinfo_endpoint?: string | null;
	}
	export interface Oauthv1openid_discoveryFormProperties {

		/** The endpoint that validates all authorization requests. */
		authorization_endpoint: FormControl<string | null | undefined>,

		/** The endpoint that validates all device code related authorization requests. */
		device_authorization_endpoint: FormControl<string | null | undefined>,

		/** The URL of the party that will create the token and sign it with its private key. */
		issuer: FormControl<string | null | undefined>,

		/** The URL of your JSON Web Key Set. This set is a collection of JSON Web Keys, a standard method for representing cryptographic keys in a JSON structure. */
		jwk_uri: FormControl<string | null | undefined>,

		/** The endpoint used to revoke access or refresh tokens issued by the authorization server. */
		revocation_endpoint: FormControl<string | null | undefined>,

		/** The URL of the token endpoint. After a client has received an authorization code, that code is presented to the token endpoint and exchanged for an identity token, an access token, and a refresh token. */
		token_endpoint: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** The URL of the user info endpoint, which returns user profile information to a client. Keep in mind that the user info endpoint returns only the information that has been requested. */
		userinfo_endpoint: FormControl<string | null | undefined>,
	}
	export function CreateOauthv1openid_discoveryFormGroup() {
		return new FormGroup<Oauthv1openid_discoveryFormProperties>({
			authorization_endpoint: new FormControl<string | null | undefined>(undefined),
			device_authorization_endpoint: new FormControl<string | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined),
			jwk_uri: new FormControl<string | null | undefined>(undefined),
			revocation_endpoint: new FormControl<string | null | undefined>(undefined),
			token_endpoint: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			userinfo_endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Oauthv1token {

		/** Token which carries the necessary information to access a Twilio resource directly. */
		access_token?: string | null;

		/** The date and time in GMT when the refresh token expires in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		access_token_expires_at?: Date | null;
		id_token?: string | null;

		/** Token which carries the information necessary to get a new access token. */
		refresh_token?: string | null;

		/** The date and time in GMT when the refresh token expires in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		refresh_token_expires_at?: Date | null;
	}
	export interface Oauthv1tokenFormProperties {

		/** Token which carries the necessary information to access a Twilio resource directly. */
		access_token: FormControl<string | null | undefined>,

		/** The date and time in GMT when the refresh token expires in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		access_token_expires_at: FormControl<Date | null | undefined>,
		id_token: FormControl<string | null | undefined>,

		/** Token which carries the information necessary to get a new access token. */
		refresh_token: FormControl<string | null | undefined>,

		/** The date and time in GMT when the refresh token expires in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format. */
		refresh_token_expires_at: FormControl<Date | null | undefined>,
	}
	export function CreateOauthv1tokenFormGroup() {
		return new FormGroup<Oauthv1tokenFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			access_token_expires_at: new FormControl<Date | null | undefined>(undefined),
			id_token: new FormControl<string | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
			refresh_token_expires_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Oauthv1user_info {

		/** The end-user's preferred email address. */
		email?: string | null;

		/** The first name of the end-user. */
		first_name?: string | null;

		/** The friendly name of the end-user. */
		friendly_name?: string | null;

		/** The last name of the end-user. */
		last_name?: string | null;
		url?: string | null;

		/**
		 * The URL of the party that will create the token and sign it with its private key.
		 * Min length: 34
		 * Max length: 34
		 */
		user_sid?: string | null;
	}
	export interface Oauthv1user_infoFormProperties {

		/** The end-user's preferred email address. */
		email: FormControl<string | null | undefined>,

		/** The first name of the end-user. */
		first_name: FormControl<string | null | undefined>,

		/** The friendly name of the end-user. */
		friendly_name: FormControl<string | null | undefined>,

		/** The last name of the end-user. */
		last_name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,

		/**
		 * The URL of the party that will create the token and sign it with its private key.
		 * Min length: 34
		 * Max length: 34
		 */
		user_sid: FormControl<string | null | undefined>,
	}
	export function CreateOauthv1user_infoFormGroup() {
		return new FormGroup<Oauthv1user_infoFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			user_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^US[0-9a-fA-F]{32}$')]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Fetch configuration details about the OpenID Connect Authorization Server
		 * Get v1/.well-known/openid-configuration
		 * @return {Oauthv1openid_discovery} OK
		 */
		FetchOpenidDiscovery(): Observable<Oauthv1openid_discovery> {
			return this.http.get<Oauthv1openid_discovery>(this.baseUri + 'v1/.well-known/openid-configuration', {});
		}

		/**
		 * Fetches public JWKs
		 * Get v1/certs
		 * @return {Oauthv1certs} OK
		 */
		FetchCerts(): Observable<Oauthv1certs> {
			return this.http.get<Oauthv1certs>(this.baseUri + 'v1/certs', {});
		}

		/**
		 * Retrieves the consented UserInfo and other claims about the logged-in subject (end-user).
		 * Get v1/userinfo
		 * @return {Oauthv1user_info} OK
		 */
		FetchUserInfo(): Observable<Oauthv1user_info> {
			return this.http.get<Oauthv1user_info>(this.baseUri + 'v1/userinfo', {});
		}
	}

}

