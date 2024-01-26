import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** OIDC Address structure */
	export interface Address {
		country?: string | null;
		locality?: string | null;
		postal_code?: string | null;
		region?: string | null;
		street_address?: string | null;
	}

	/** OIDC Address structure */
	export interface AddressFormProperties {
		country: FormControl<string | null | undefined>,
		locality: FormControl<string | null | undefined>,
		postal_code: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		street_address: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			street_address: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Client object */
	export interface Client {
		application_type?: string | null;
		client_id?: string | null;

		/** Required */
		client_name: string;

		/** Required */
		client_uri: string;
		contacts?: Array<string>;
		default_max_age?: number | null;
		default_scopes?: Array<string>;
		grant_types?: Array<string>;
		logo_uri?: string | null;
		policy_uri?: string | null;
		redirect_uris?: Array<string>;
		response_types?: Array<string>;
		tos_uri?: string | null;
	}

	/** Client object */
	export interface ClientFormProperties {
		application_type: FormControl<string | null | undefined>,
		client_id: FormControl<string | null | undefined>,

		/** Required */
		client_name: FormControl<string | null | undefined>,

		/** Required */
		client_uri: FormControl<string | null | undefined>,
		default_max_age: FormControl<number | null | undefined>,
		logo_uri: FormControl<string | null | undefined>,
		policy_uri: FormControl<string | null | undefined>,
		tos_uri: FormControl<string | null | undefined>,
	}
	export function CreateClientFormGroup() {
		return new FormGroup<ClientFormProperties>({
			application_type: new FormControl<string | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined),
			client_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			client_uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			default_max_age: new FormControl<number | null | undefined>(undefined),
			logo_uri: new FormControl<string | null | undefined>(undefined),
			policy_uri: new FormControl<string | null | undefined>(undefined),
			tos_uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Error Response defined as in Section 5.2 of OAuth 2.0 [RFC6749].
	 */
	export interface OAuth2Error {

		/** Required */
		error: string;
		error_description?: string | null;
	}

	/**
	 * Error Response defined as in Section 5.2 of OAuth 2.0 [RFC6749].
	 */
	export interface OAuth2ErrorFormProperties {

		/** Required */
		error: FormControl<string | null | undefined>,
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateOAuth2ErrorFormGroup() {
		return new FormGroup<OAuth2ErrorFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * HTTP Problem Detail
	 */
	export interface ProblemDetail {

		/**
		 * Human-readable explanation specific to this occurrence of the problem.
		 */
		detail?: string | null;

		/**
		 * The HTTP status code for this occurrence of the problem.
		 * Required
		 */
		status: number;

		/**
		 * Human-readable summary of the problem type.
		 */
		title?: string | null;

		/** Required */
		type: string;
	}

	/**
	 * HTTP Problem Detail
	 */
	export interface ProblemDetailFormProperties {

		/**
		 * Human-readable explanation specific to this occurrence of the problem.
		 */
		detail: FormControl<string | null | undefined>,

		/**
		 * The HTTP status code for this occurrence of the problem.
		 * Required
		 */
		status: FormControl<number | null | undefined>,

		/**
		 * Human-readable summary of the problem type.
		 */
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProblemDetailFormGroup() {
		return new FormGroup<ProblemDetailFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Session object */
	export interface Session {
		authenticated_at?: Date | null;
		client_id?: string | null;
		client_name?: string | null;
		client_uri?: string | null;
		concluded_at?: Date | null;
		connected_at?: Date | null;
		contacts?: Array<string>;
		created_at?: string | null;
		deleted_at?: Date | null;
		logo_uri?: string | null;
		nonce?: string | null;
		policy_uri?: string | null;
		redirect_uri?: string | null;
		response_mode?: string | null;
		response_type?: string | null;
		scopes?: Array<string>;
		scopes_optional?: Array<string>;
		scopes_required?: Array<string>;
		scopes_seen?: Array<string>;
		scopes_signed?: Array<string>;
		session_id?: string | null;
		session_state?: string | null;
		session_uri?: string | null;
		sub?: string | null;
		tokens_seen?: Array<string>;
		tos_uri?: string | null;
		version?: number | null;
	}

	/** Session object */
	export interface SessionFormProperties {
		authenticated_at: FormControl<Date | null | undefined>,
		client_id: FormControl<string | null | undefined>,
		client_name: FormControl<string | null | undefined>,
		client_uri: FormControl<string | null | undefined>,
		concluded_at: FormControl<Date | null | undefined>,
		connected_at: FormControl<Date | null | undefined>,
		created_at: FormControl<string | null | undefined>,
		deleted_at: FormControl<Date | null | undefined>,
		logo_uri: FormControl<string | null | undefined>,
		nonce: FormControl<string | null | undefined>,
		policy_uri: FormControl<string | null | undefined>,
		redirect_uri: FormControl<string | null | undefined>,
		response_mode: FormControl<string | null | undefined>,
		response_type: FormControl<string | null | undefined>,
		session_id: FormControl<string | null | undefined>,
		session_state: FormControl<string | null | undefined>,
		session_uri: FormControl<string | null | undefined>,
		sub: FormControl<string | null | undefined>,
		tos_uri: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			authenticated_at: new FormControl<Date | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined),
			client_name: new FormControl<string | null | undefined>(undefined),
			client_uri: new FormControl<string | null | undefined>(undefined),
			concluded_at: new FormControl<Date | null | undefined>(undefined),
			connected_at: new FormControl<Date | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			deleted_at: new FormControl<Date | null | undefined>(undefined),
			logo_uri: new FormControl<string | null | undefined>(undefined),
			nonce: new FormControl<string | null | undefined>(undefined),
			policy_uri: new FormControl<string | null | undefined>(undefined),
			redirect_uri: new FormControl<string | null | undefined>(undefined),
			response_mode: new FormControl<string | null | undefined>(undefined),
			response_type: new FormControl<string | null | undefined>(undefined),
			session_id: new FormControl<string | null | undefined>(undefined),
			session_state: new FormControl<string | null | undefined>(undefined),
			session_uri: new FormControl<string | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined),
			tos_uri: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Successful token response
	 */
	export interface Token {

		/** The access token issued by the authorization server. */
		access_token?: string | null;

		/** The time the access token will expire in seconds since epoch. */
		expires_at?: number | null;

		/** The lifetime in seconds of the access token. */
		expires_in?: number | null;

		/** ID Token value associated with the authenticated session. */
		id_token?: string | null;

		/** The refresh token issued to the client, if any. */
		refresh_token?: string | null;

		/** The scope of the granted tokens. */
		scope?: string | null;

		/** Required */
		token_type: string;
	}

	/**
	 * Successful token response
	 */
	export interface TokenFormProperties {

		/** The access token issued by the authorization server. */
		access_token: FormControl<string | null | undefined>,

		/** The time the access token will expire in seconds since epoch. */
		expires_at: FormControl<number | null | undefined>,

		/** The lifetime in seconds of the access token. */
		expires_in: FormControl<number | null | undefined>,

		/** ID Token value associated with the authenticated session. */
		id_token: FormControl<string | null | undefined>,

		/** The refresh token issued to the client, if any. */
		refresh_token: FormControl<string | null | undefined>,

		/** The scope of the granted tokens. */
		scope: FormControl<string | null | undefined>,

		/** Required */
		token_type: FormControl<string | null | undefined>,
	}
	export function CreateTokenFormGroup() {
		return new FormGroup<TokenFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			expires_at: new FormControl<number | null | undefined>(undefined),
			expires_in: new FormControl<number | null | undefined>(undefined),
			id_token: new FormControl<string | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			token_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** OIDC UserInfo structure */
	export interface UserInfo {

		/** OIDC Address structure */
		address?: Address;

		/** Geolocation structure */
		'aq:location'?: any;
		email?: string | null;
		email_verified?: boolean | null;
		family_name?: string | null;
		given_name?: string | null;
		name?: string | null;
		phone_number?: string | null;
		phone_number_verified?: boolean | null;

		/** Required */
		sub: string;
	}

	/** OIDC UserInfo structure */
	export interface UserInfoFormProperties {

		/** Geolocation structure */
		'aq:location': FormControl<any | null | undefined>,
		email: FormControl<string | null | undefined>,
		email_verified: FormControl<boolean | null | undefined>,
		family_name: FormControl<string | null | undefined>,
		given_name: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
		phone_number_verified: FormControl<boolean | null | undefined>,

		/** Required */
		sub: FormControl<string | null | undefined>,
	}
	export function CreateUserInfoFormGroup() {
		return new FormGroup<UserInfoFormProperties>({
			'aq:location': new FormControl<any | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			email_verified: new FormControl<boolean | null | undefined>(undefined),
			family_name: new FormControl<string | null | undefined>(undefined),
			given_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			phone_number_verified: new FormControl<boolean | null | undefined>(undefined),
			sub: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Authenticate a user
		 * Start a session with Authentiq Connect to authenticate a user.
		 * ```
		 * GET https://connect.authentiq.io/authorize?client_id=<your-client-id>&response_type=code+id_token&scope=openid+email&redirect_uri=<your-redirect-uri>&state=0123456789
		 * ```
		 * This endpoint also supports the POST method.
		 * Get authorize
		 * @param {string} client_id A client ID obtained from the [Dashboard](https://dashboard.authentiq.com/).
		 * @param {string} response_type The OIDC response type to use for this authentication flow. Valid choices are `code`, `id_token`, `token`, `token id_token`, `code id_token` `code token` and `code token id_token`, but a client can be configured with a more restricted set.
		 * @param {string} scope The space-separated identity claims to request from the end-user. Always include `openid` as a scope for compatibility with OIDC.
		 * @param {string} redirect_uri The location to redirect to after (un)successful authentication. See OIDC for the parameters passed in the query string (`response_mode=query`) or as fragments (`response_mode=fragment`). Unless the client is in test-mode this must be one of the registered redirect URLs.
		 * @param {string} state An opaque string that will be passed back to the redirect URL and therefore can be used to communicate client side state and prevent CSRF attacks.
		 * @param {string} response_mode Whether to append parameters to the redirect URL in the query string (`query`) or as fragments (`fragment`). This option usually has a sensible default for each of the response types.
		 * @param {string} nonce An nonce provided by the client (and opaque to Authentiq Connect) that will be included in any ID Token generated for this session. Clients should use the nonce to mitigate replay attacks.
		 * @param {string} display The authentication display mode, which can be one of `page`, `popup` or `modal`. Defaults to `page`.
		 * @param {string} prompt Space-delimited, case sensitive list of ASCII string values that specifies whether the Authorization Server prompts the End-User for reauthentication and consent. The supported values are: `none`, `login`, `consent`. If `consent` the end-user is asked to (re)confirm what claims they share. Use `none` to check for an active session.
		 * @param {number} max_age Specifies the allowable elapsed time in seconds since the last time the end-user was actively authenticated.
		 * @param {string} ui_locales Specifies the preferred language to use on the authorization page, as a space-separated list of BCP47 language tags. Ignored at the moment.
		 * @return {void} 
		 */
		Authorize(client_id: string, response_type: string, scope: string, redirect_uri: string, state: string, response_mode: string | null | undefined, nonce: string | null | undefined, display: string | null | undefined, prompt: string | null | undefined, max_age: number | null | undefined, ui_locales: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'authorize?client_id=' + (client_id == null ? '' : encodeURIComponent(client_id)) + '&response_type=' + (response_type == null ? '' : encodeURIComponent(response_type)) + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)) + '&redirect_uri=' + (redirect_uri == null ? '' : encodeURIComponent(redirect_uri)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&response_mode=' + (response_mode == null ? '' : encodeURIComponent(response_mode)) + '&nonce=' + (nonce == null ? '' : encodeURIComponent(nonce)) + '&display=' + (display == null ? '' : encodeURIComponent(display)) + '&prompt=' + (prompt == null ? '' : encodeURIComponent(prompt)) + '&max_age=' + max_age + '&ui_locales=' + (ui_locales == null ? '' : encodeURIComponent(ui_locales)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List clients
		 * Retrieve a list of clients.
		 * Get client
		 * @return {Array<Client>} A list of Client Objects.
		 */
		Client(): Observable<Array<Client>> {
			return this.http.get<Array<Client>>(this.baseUri + 'client', {});
		}

		/**
		 * Register a client
		 * Register a new client with this Authentiq Connect provider.
		 * This endpoint is compatible with [OIDC's Client Registration](http://openid.net/specs/openid-connect-registration-1_0.html) extension.
		 * Post client
		 * @param {Client} requestBody Client Object
		 * @return {void} 
		 */
		CreateClient(requestBody: Client): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'client', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a client
		 * Delete a previously registered client.
		 * Delete client/{client_id}
		 * @param {string} client_id Client identifier
		 * @return {void} 
		 */
		ClientClient_id(client_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'client/' + (client_id == null ? '' : encodeURIComponent(client_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * View a client
		 * Retrieve the configuration of a previously registered client.
		 * Get client/{client_id}
		 * @param {string} client_id Client identifier
		 * @return {Client} Client found
		 */
		GetClient(client_id: string): Observable<Client> {
			return this.http.get<Client>(this.baseUri + 'client/' + (client_id == null ? '' : encodeURIComponent(client_id)), {});
		}

		/**
		 * Update a client
		 * Update the configuration of a previously registered client.
		 * Put client/{client_id}
		 * @param {string} client_id Client identifier
		 * @param {Client} requestBody Client Object
		 * @return {Client} Client updated
		 */
		UpdateClient(client_id: string, requestBody: Client): Observable<Client> {
			return this.http.put<Client>(this.baseUri + 'client/' + (client_id == null ? '' : encodeURIComponent(client_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a user profile
		 * Use this endpoint to retrieve a user's profile in case you are unable to parse an ID Token or you've not already obtained enough details from the ID Token via the Token Endpoint.
		 * Get userinfo
		 * @return {UserInfo} UserInfo response
		 */
		UserInfo(): Observable<UserInfo> {
			return this.http.get<UserInfo>(this.baseUri + 'userinfo', {});
		}

		/**
		 * Include a session iframe
		 * An OpenID Connect Session Management iframe to facilitate e.g. single sign-on or remote logouts.
		 * The iframe implements the OIDC postMessage-based [change notification protocol](http://openid.net/specs/openid-connect-session-1_0.html#ChangeNotification) via which a client can receive notifications about session state changes.
		 * Get {client_id}/iframe
		 * @param {string} client_id Client identifier
		 * @return {void} OK
		 */
		AuthorizeIframe(client_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (client_id == null ? '' : encodeURIComponent(client_id)) + '/iframe', { observe: 'response', responseType: 'text' });
		}
	}

}

