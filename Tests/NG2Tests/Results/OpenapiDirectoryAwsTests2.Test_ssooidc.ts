import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateTokenResponse {
		accessToken?: string;
		tokenType?: string;
		expiresIn?: number;
		refreshToken?: string;
		idToken?: string;
	}

	export interface InvalidRequestException {
	}

	export interface InvalidClientException {
	}

	export interface InvalidGrantException {
	}

	export interface UnauthorizedClientException {
	}

	export interface UnsupportedGrantTypeException {
	}

	export interface InvalidScopeException {
	}

	export interface AuthorizationPendingException {
	}

	export interface SlowDownException {
	}

	export interface AccessDeniedException {
	}

	export interface ExpiredTokenException {
	}

	export interface InternalServerException {
	}

	export interface RegisterClientResponse {
		clientId?: string;
		clientSecret?: string;
		clientIdIssuedAt?: number;
		clientSecretExpiresAt?: number;
		authorizationEndpoint?: string;
		tokenEndpoint?: string;
	}

	export interface InvalidClientMetadataException {
	}

	export interface StartDeviceAuthorizationResponse {
		deviceCode?: string;
		userCode?: string;
		verificationUri?: string;
		verificationUriComplete?: string;
		expiresIn?: number;
		interval?: number;
	}

	export interface CreateTokenRequest {
		clientId: string;
		clientSecret: string;
		grantType: string;
		deviceCode: string;
		code?: string;
		refreshToken?: string;
		scope?: Array<string>;
		redirectUri?: string;
	}

	export interface RegisterClientRequest {
		clientName: string;
		clientType: string;
		scopes?: Array<string>;
	}

	export interface StartDeviceAuthorizationRequest {
		clientId: string;
		clientSecret: string;
		startUrl: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates and returns an access token for the authorized client. The access token issued will be used to fetch short-term credentials for the assigned roles in the AWS account.
		 * Post token
		 * @return {CreateTokenResponse} Success
		 */
		CreateToken(requestBody: CreateTokenPostBody): Observable<CreateTokenResponse> {
			return this.http.post<CreateTokenResponse>(this.baseUri + 'token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers a client with AWS SSO. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests.
		 * Post client/register
		 * @return {RegisterClientResponse} Success
		 */
		RegisterClient(requestBody: RegisterClientPostBody): Observable<RegisterClientResponse> {
			return this.http.post<RegisterClientResponse>(this.baseUri + 'client/register', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates device authorization by requesting a pair of verification codes from the authorization service.
		 * Post device_authorization
		 * @return {StartDeviceAuthorizationResponse} Success
		 */
		StartDeviceAuthorization(requestBody: StartDeviceAuthorizationPostBody): Observable<StartDeviceAuthorizationResponse> {
			return this.http.post<StartDeviceAuthorizationResponse>(this.baseUri + 'device_authorization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateTokenPostBody {

		/** The unique identifier string for each client. This value should come from the persisted result of the <a>RegisterClient</a> API. */
		clientId: string;

		/** A secret string generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API. */
		clientSecret: string;

		/** Supports grant types for authorization code, refresh token, and device code request. */
		grantType: string;

		/** Used only when calling this API for the device code grant type. This short-term code is used to identify this authentication attempt. This should come from an in-memory reference to the result of the <a>StartDeviceAuthorization</a> API. */
		deviceCode: string;

		/** The authorization code received from the authorization service. This parameter is required to perform an authorization grant request to get access to a token. */
		code?: string;

		/** The token used to obtain an access token in the event that the access token is invalid or expired. This token is not issued by the service. */
		refreshToken?: string;

		/** The list of scopes that is defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token. */
		scope?: Array<string>;

		/** The location of the application that will receive the authorization code. Users authorize the service to send the request to this location. */
		redirectUri?: string;
	}

	export interface RegisterClientPostBody {

		/** The friendly name of the client. */
		clientName: string;

		/** The type of client. The service supports only <code>public</code> as a client type. Anything other than public will be rejected by the service. */
		clientType: string;

		/** The list of scopes that are defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token. */
		scopes?: Array<string>;
	}

	export interface StartDeviceAuthorizationPostBody {

		/** The unique identifier string for the client that is registered with AWS SSO. This value should come from the persisted result of the <a>RegisterClient</a> API operation. */
		clientId: string;

		/** A secret string that is generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API operation. */
		clientSecret: string;

		/** The URL for the AWS SSO user portal. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/using-the-portal.html">Using the User Portal</a> in the <i>AWS Single Sign-On User Guide</i>. */
		startUrl: string;
	}

}

