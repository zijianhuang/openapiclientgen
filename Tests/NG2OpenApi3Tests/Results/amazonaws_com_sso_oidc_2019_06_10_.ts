import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateTokenResponse {
		accessToken?: string;
		tokenType?: string;
		expiresIn?: number | null;
		refreshToken?: string;
		idToken?: string;
	}
	export interface CreateTokenResponseFormProperties {
		accessToken: FormControl<string | null | undefined>,
		tokenType: FormControl<string | null | undefined>,
		expiresIn: FormControl<number | null | undefined>,
		refreshToken: FormControl<string | null | undefined>,
		idToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateTokenResponseFormGroup() {
		return new FormGroup<CreateTokenResponseFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			tokenType: new FormControl<string | null | undefined>(undefined),
			expiresIn: new FormControl<number | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface InvalidClientException {
	}
	export interface InvalidClientExceptionFormProperties {
	}
	export function CreateInvalidClientExceptionFormGroup() {
		return new FormGroup<InvalidClientExceptionFormProperties>({
		});

	}

	export interface InvalidGrantException {
	}
	export interface InvalidGrantExceptionFormProperties {
	}
	export function CreateInvalidGrantExceptionFormGroup() {
		return new FormGroup<InvalidGrantExceptionFormProperties>({
		});

	}

	export interface UnauthorizedClientException {
	}
	export interface UnauthorizedClientExceptionFormProperties {
	}
	export function CreateUnauthorizedClientExceptionFormGroup() {
		return new FormGroup<UnauthorizedClientExceptionFormProperties>({
		});

	}

	export interface UnsupportedGrantTypeException {
	}
	export interface UnsupportedGrantTypeExceptionFormProperties {
	}
	export function CreateUnsupportedGrantTypeExceptionFormGroup() {
		return new FormGroup<UnsupportedGrantTypeExceptionFormProperties>({
		});

	}

	export interface InvalidScopeException {
	}
	export interface InvalidScopeExceptionFormProperties {
	}
	export function CreateInvalidScopeExceptionFormGroup() {
		return new FormGroup<InvalidScopeExceptionFormProperties>({
		});

	}

	export interface AuthorizationPendingException {
	}
	export interface AuthorizationPendingExceptionFormProperties {
	}
	export function CreateAuthorizationPendingExceptionFormGroup() {
		return new FormGroup<AuthorizationPendingExceptionFormProperties>({
		});

	}

	export interface SlowDownException {
	}
	export interface SlowDownExceptionFormProperties {
	}
	export function CreateSlowDownExceptionFormGroup() {
		return new FormGroup<SlowDownExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ExpiredTokenException {
	}
	export interface ExpiredTokenExceptionFormProperties {
	}
	export function CreateExpiredTokenExceptionFormGroup() {
		return new FormGroup<ExpiredTokenExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface RegisterClientResponse {
		clientId?: string;
		clientSecret?: string;
		clientIdIssuedAt?: number | null;
		clientSecretExpiresAt?: number | null;
		authorizationEndpoint?: string;
		tokenEndpoint?: string;
	}
	export interface RegisterClientResponseFormProperties {
		clientId: FormControl<string | null | undefined>,
		clientSecret: FormControl<string | null | undefined>,
		clientIdIssuedAt: FormControl<number | null | undefined>,
		clientSecretExpiresAt: FormControl<number | null | undefined>,
		authorizationEndpoint: FormControl<string | null | undefined>,
		tokenEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateRegisterClientResponseFormGroup() {
		return new FormGroup<RegisterClientResponseFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			clientIdIssuedAt: new FormControl<number | null | undefined>(undefined),
			clientSecretExpiresAt: new FormControl<number | null | undefined>(undefined),
			authorizationEndpoint: new FormControl<string | null | undefined>(undefined),
			tokenEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidClientMetadataException {
	}
	export interface InvalidClientMetadataExceptionFormProperties {
	}
	export function CreateInvalidClientMetadataExceptionFormGroup() {
		return new FormGroup<InvalidClientMetadataExceptionFormProperties>({
		});

	}

	export interface StartDeviceAuthorizationResponse {
		deviceCode?: string;
		userCode?: string;
		verificationUri?: string;
		verificationUriComplete?: string;
		expiresIn?: number | null;
		interval?: number | null;
	}
	export interface StartDeviceAuthorizationResponseFormProperties {
		deviceCode: FormControl<string | null | undefined>,
		userCode: FormControl<string | null | undefined>,
		verificationUri: FormControl<string | null | undefined>,
		verificationUriComplete: FormControl<string | null | undefined>,
		expiresIn: FormControl<number | null | undefined>,
		interval: FormControl<number | null | undefined>,
	}
	export function CreateStartDeviceAuthorizationResponseFormGroup() {
		return new FormGroup<StartDeviceAuthorizationResponseFormProperties>({
			deviceCode: new FormControl<string | null | undefined>(undefined),
			userCode: new FormControl<string | null | undefined>(undefined),
			verificationUri: new FormControl<string | null | undefined>(undefined),
			verificationUriComplete: new FormControl<string | null | undefined>(undefined),
			expiresIn: new FormControl<number | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateTokenRequest {

		/** Required */
		clientId: string;

		/** Required */
		clientSecret: string;

		/** Required */
		grantType: string;
		deviceCode?: string;
		code?: string;
		refreshToken?: string;
		scope?: Array<string>;
		redirectUri?: string;
	}
	export interface CreateTokenRequestFormProperties {

		/** Required */
		clientId: FormControl<string | null | undefined>,

		/** Required */
		clientSecret: FormControl<string | null | undefined>,

		/** Required */
		grantType: FormControl<string | null | undefined>,
		deviceCode: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		refreshToken: FormControl<string | null | undefined>,
		redirectUri: FormControl<string | null | undefined>,
	}
	export function CreateCreateTokenRequestFormGroup() {
		return new FormGroup<CreateTokenRequestFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			grantType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceCode: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
			redirectUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterClientRequest {

		/** Required */
		clientName: string;

		/** Required */
		clientType: string;
		scopes?: Array<string>;
	}
	export interface RegisterClientRequestFormProperties {

		/** Required */
		clientName: FormControl<string | null | undefined>,

		/** Required */
		clientType: FormControl<string | null | undefined>,
	}
	export function CreateRegisterClientRequestFormGroup() {
		return new FormGroup<RegisterClientRequestFormProperties>({
			clientName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartDeviceAuthorizationRequest {

		/** Required */
		clientId: string;

		/** Required */
		clientSecret: string;

		/** Required */
		startUrl: string;
	}
	export interface StartDeviceAuthorizationRequestFormProperties {

		/** Required */
		clientId: FormControl<string | null | undefined>,

		/** Required */
		clientSecret: FormControl<string | null | undefined>,

		/** Required */
		startUrl: FormControl<string | null | undefined>,
	}
	export function CreateStartDeviceAuthorizationRequestFormGroup() {
		return new FormGroup<StartDeviceAuthorizationRequestFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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
		 * Registers a client with IAM Identity Center. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests.
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

		/**
		 * The unique identifier string for each client. This value should come from the persisted result of the <a>RegisterClient</a> API.
		 * Required
		 */
		clientId: string;

		/**
		 * A secret string generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API.
		 * Required
		 */
		clientSecret: string;

		/**
		 * <p>Supports grant types for the authorization code, refresh token, and device code request. For device code requests, specify the following value:</p> <p> <code>urn:ietf:params:oauth:grant-type:<i>device_code</i> </code> </p> <p>For information about how to obtain the device code, see the <a>StartDeviceAuthorization</a> topic.</p>
		 * Required
		 */
		grantType: string;

		/** Used only when calling this API for the device code grant type. This short-term code is used to identify this authentication attempt. This should come from an in-memory reference to the result of the <a>StartDeviceAuthorization</a> API. */
		deviceCode?: string | null;

		/** The authorization code received from the authorization service. This parameter is required to perform an authorization grant request to get access to a token. */
		code?: string | null;

		/** <p>Currently, <code>refreshToken</code> is not yet implemented and is not supported. For more information about the features and limitations of the current IAM Identity Center OIDC implementation, see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center OIDC API Reference</a>.</p> <p>The token used to obtain an access token in the event that the access token is invalid or expired.</p> */
		refreshToken?: string | null;

		/** The list of scopes that is defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token. */
		scope?: Array<string>;

		/** The location of the application that will receive the authorization code. Users authorize the service to send the request to this location. */
		redirectUri?: string | null;
	}
	export interface CreateTokenPostBodyFormProperties {

		/**
		 * The unique identifier string for each client. This value should come from the persisted result of the <a>RegisterClient</a> API.
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/**
		 * A secret string generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API.
		 * Required
		 */
		clientSecret: FormControl<string | null | undefined>,

		/**
		 * <p>Supports grant types for the authorization code, refresh token, and device code request. For device code requests, specify the following value:</p> <p> <code>urn:ietf:params:oauth:grant-type:<i>device_code</i> </code> </p> <p>For information about how to obtain the device code, see the <a>StartDeviceAuthorization</a> topic.</p>
		 * Required
		 */
		grantType: FormControl<string | null | undefined>,

		/** Used only when calling this API for the device code grant type. This short-term code is used to identify this authentication attempt. This should come from an in-memory reference to the result of the <a>StartDeviceAuthorization</a> API. */
		deviceCode: FormControl<string | null | undefined>,

		/** The authorization code received from the authorization service. This parameter is required to perform an authorization grant request to get access to a token. */
		code: FormControl<string | null | undefined>,

		/** <p>Currently, <code>refreshToken</code> is not yet implemented and is not supported. For more information about the features and limitations of the current IAM Identity Center OIDC implementation, see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center OIDC API Reference</a>.</p> <p>The token used to obtain an access token in the event that the access token is invalid or expired.</p> */
		refreshToken: FormControl<string | null | undefined>,

		/** The location of the application that will receive the authorization code. Users authorize the service to send the request to this location. */
		redirectUri: FormControl<string | null | undefined>,
	}
	export function CreateCreateTokenPostBodyFormGroup() {
		return new FormGroup<CreateTokenPostBodyFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			grantType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceCode: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
			redirectUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterClientPostBody {

		/**
		 * The friendly name of the client.
		 * Required
		 */
		clientName: string;

		/**
		 * The type of client. The service supports only <code>public</code> as a client type. Anything other than public will be rejected by the service.
		 * Required
		 */
		clientType: string;

		/** The list of scopes that are defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token. */
		scopes?: Array<string>;
	}
	export interface RegisterClientPostBodyFormProperties {

		/**
		 * The friendly name of the client.
		 * Required
		 */
		clientName: FormControl<string | null | undefined>,

		/**
		 * The type of client. The service supports only <code>public</code> as a client type. Anything other than public will be rejected by the service.
		 * Required
		 */
		clientType: FormControl<string | null | undefined>,
	}
	export function CreateRegisterClientPostBodyFormGroup() {
		return new FormGroup<RegisterClientPostBodyFormProperties>({
			clientName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartDeviceAuthorizationPostBody {

		/**
		 * The unique identifier string for the client that is registered with IAM Identity Center. This value should come from the persisted result of the <a>RegisterClient</a> API operation.
		 * Required
		 */
		clientId: string;

		/**
		 * A secret string that is generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API operation.
		 * Required
		 */
		clientSecret: string;

		/**
		 * The URL for the AWS access portal. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/using-the-portal.html">Using the AWS access portal</a> in the <i>IAM Identity Center User Guide</i>.
		 * Required
		 */
		startUrl: string;
	}
	export interface StartDeviceAuthorizationPostBodyFormProperties {

		/**
		 * The unique identifier string for the client that is registered with IAM Identity Center. This value should come from the persisted result of the <a>RegisterClient</a> API operation.
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/**
		 * A secret string that is generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API operation.
		 * Required
		 */
		clientSecret: FormControl<string | null | undefined>,

		/**
		 * The URL for the AWS access portal. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/using-the-portal.html">Using the AWS access portal</a> in the <i>IAM Identity Center User Guide</i>.
		 * Required
		 */
		startUrl: FormControl<string | null | undefined>,
	}
	export function CreateStartDeviceAuthorizationPostBodyFormGroup() {
		return new FormGroup<StartDeviceAuthorizationPostBodyFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

