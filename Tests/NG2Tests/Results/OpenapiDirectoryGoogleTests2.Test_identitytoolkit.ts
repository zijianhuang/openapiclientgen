import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Response of creating the IDP authentication URL. */
	export interface CreateAuthUriResponse {

		/** all providers the user has once used to do federated login */
		allProviders?: Array<string>;

		/** The URI used by the IDP to authenticate the user. */
		authUri?: string | null;

		/** True if captcha is required. */
		captchaRequired?: boolean | null;

		/** True if the authUri is for user's existing provider. */
		forExistingProvider?: boolean | null;

		/** The fixed string identitytoolkit#CreateAuthUriResponse". */
		kind?: string | null;

		/** The provider ID of the auth URI. */
		providerId?: string | null;

		/** Whether the user is registered if the identifier is an email. */
		registered?: boolean | null;

		/** Session ID which should be passed in the following verifyAssertion request. */
		sessionId?: string | null;

		/** All sign-in methods this user has used. */
		signinMethods?: Array<string>;
	}

	/** Response of creating the IDP authentication URL. */
	export interface CreateAuthUriResponseFormProperties {

		/** The URI used by the IDP to authenticate the user. */
		authUri: FormControl<string | null | undefined>,

		/** True if captcha is required. */
		captchaRequired: FormControl<boolean | null | undefined>,

		/** True if the authUri is for user's existing provider. */
		forExistingProvider: FormControl<boolean | null | undefined>,

		/** The fixed string identitytoolkit#CreateAuthUriResponse". */
		kind: FormControl<string | null | undefined>,

		/** The provider ID of the auth URI. */
		providerId: FormControl<string | null | undefined>,

		/** Whether the user is registered if the identifier is an email. */
		registered: FormControl<boolean | null | undefined>,

		/** Session ID which should be passed in the following verifyAssertion request. */
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthUriResponseFormGroup() {
		return new FormGroup<CreateAuthUriResponseFormProperties>({
			authUri: new FormControl<string | null | undefined>(undefined),
			captchaRequired: new FormControl<boolean | null | undefined>(undefined),
			forExistingProvider: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			registered: new FormControl<boolean | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Respone of deleting account. */
	export interface DeleteAccountResponse {

		/** The fixed string "identitytoolkit#DeleteAccountResponse". */
		kind?: string | null;
	}

	/** Respone of deleting account. */
	export interface DeleteAccountResponseFormProperties {

		/** The fixed string "identitytoolkit#DeleteAccountResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAccountResponseFormGroup() {
		return new FormGroup<DeleteAccountResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of downloading accounts in batch. */
	export interface DownloadAccountResponse {

		/** The fixed string "identitytoolkit#DownloadAccountResponse". */
		kind?: string | null;

		/** The next page token. To be used in a subsequent request to return the next page of results. */
		nextPageToken?: string | null;

		/** The user accounts data. */
		users?: Array<UserInfo>;
	}

	/** Response of downloading accounts in batch. */
	export interface DownloadAccountResponseFormProperties {

		/** The fixed string "identitytoolkit#DownloadAccountResponse". */
		kind: FormControl<string | null | undefined>,

		/** The next page token. To be used in a subsequent request to return the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDownloadAccountResponseFormGroup() {
		return new FormGroup<DownloadAccountResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Template for an individual account info. */
	export interface UserInfo {

		/** User creation timestamp. */
		createdAt?: string | null;

		/** The custom attributes to be set in the user's id token. */
		customAttributes?: string | null;

		/** Whether the user is authenticated by the developer. */
		customAuth?: boolean | null;

		/** Whether the user is disabled. */
		disabled?: boolean | null;

		/** The name of the user. */
		displayName?: string | null;

		/** The email of the user. */
		email?: string | null;

		/** Whether the email has been verified. */
		emailVerified?: boolean | null;

		/** last login timestamp. */
		lastLoginAt?: string | null;

		/** The local ID of the user. */
		localId?: string | null;

		/** The user's hashed password. */
		passwordHash?: string | null;

		/** The timestamp when the password was last updated. */
		passwordUpdatedAt?: number | null;

		/** User's phone number. */
		phoneNumber?: string | null;

		/** The URL of the user profile photo. */
		photoUrl?: string | null;

		/** The IDP of the user. */
		UserInfoProviderUserInfo?: Array<UserInfoProviderUserInfo>;

		/** The user's plain text password. */
		rawPassword?: string | null;

		/** The user's password salt. */
		salt?: string | null;

		/** User's screen name at Twitter or login name at Github. */
		screenName?: string | null;

		/** Timestamp in seconds for valid login token. */
		validSince?: string | null;

		/** Version of the user's password. */
		version?: number | null;
	}

	/** Template for an individual account info. */
	export interface UserInfoFormProperties {

		/** User creation timestamp. */
		createdAt: FormControl<string | null | undefined>,

		/** The custom attributes to be set in the user's id token. */
		customAttributes: FormControl<string | null | undefined>,

		/** Whether the user is authenticated by the developer. */
		customAuth: FormControl<boolean | null | undefined>,

		/** Whether the user is disabled. */
		disabled: FormControl<boolean | null | undefined>,

		/** The name of the user. */
		displayName: FormControl<string | null | undefined>,

		/** The email of the user. */
		email: FormControl<string | null | undefined>,

		/** Whether the email has been verified. */
		emailVerified: FormControl<boolean | null | undefined>,

		/** last login timestamp. */
		lastLoginAt: FormControl<string | null | undefined>,

		/** The local ID of the user. */
		localId: FormControl<string | null | undefined>,

		/** The user's hashed password. */
		passwordHash: FormControl<string | null | undefined>,

		/** The timestamp when the password was last updated. */
		passwordUpdatedAt: FormControl<number | null | undefined>,

		/** User's phone number. */
		phoneNumber: FormControl<string | null | undefined>,

		/** The URL of the user profile photo. */
		photoUrl: FormControl<string | null | undefined>,

		/** The user's plain text password. */
		rawPassword: FormControl<string | null | undefined>,

		/** The user's password salt. */
		salt: FormControl<string | null | undefined>,

		/** User's screen name at Twitter or login name at Github. */
		screenName: FormControl<string | null | undefined>,

		/** Timestamp in seconds for valid login token. */
		validSince: FormControl<string | null | undefined>,

		/** Version of the user's password. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateUserInfoFormGroup() {
		return new FormGroup<UserInfoFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			customAttributes: new FormControl<string | null | undefined>(undefined),
			customAuth: new FormControl<boolean | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			emailVerified: new FormControl<boolean | null | undefined>(undefined),
			lastLoginAt: new FormControl<string | null | undefined>(undefined),
			localId: new FormControl<string | null | undefined>(undefined),
			passwordHash: new FormControl<string | null | undefined>(undefined),
			passwordUpdatedAt: new FormControl<number | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			photoUrl: new FormControl<string | null | undefined>(undefined),
			rawPassword: new FormControl<string | null | undefined>(undefined),
			salt: new FormControl<string | null | undefined>(undefined),
			screenName: new FormControl<string | null | undefined>(undefined),
			validSince: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UserInfoProviderUserInfo {

		/** The user's display name at the IDP. */
		displayName?: string | null;

		/** User's email at IDP. */
		email?: string | null;

		/** User's identifier at IDP. */
		federatedId?: string | null;

		/** User's phone number. */
		phoneNumber?: string | null;

		/** The user's photo url at the IDP. */
		photoUrl?: string | null;

		/** The IdP ID. For white listed IdPs it's a short domain name, e.g., google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier. */
		providerId?: string | null;

		/** User's raw identifier directly returned from IDP. */
		rawId?: string | null;

		/** User's screen name at Twitter or login name at Github. */
		screenName?: string | null;
	}
	export interface UserInfoProviderUserInfoFormProperties {

		/** The user's display name at the IDP. */
		displayName: FormControl<string | null | undefined>,

		/** User's email at IDP. */
		email: FormControl<string | null | undefined>,

		/** User's identifier at IDP. */
		federatedId: FormControl<string | null | undefined>,

		/** User's phone number. */
		phoneNumber: FormControl<string | null | undefined>,

		/** The user's photo url at the IDP. */
		photoUrl: FormControl<string | null | undefined>,

		/** The IdP ID. For white listed IdPs it's a short domain name, e.g., google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier. */
		providerId: FormControl<string | null | undefined>,

		/** User's raw identifier directly returned from IDP. */
		rawId: FormControl<string | null | undefined>,

		/** User's screen name at Twitter or login name at Github. */
		screenName: FormControl<string | null | undefined>,
	}
	export function CreateUserInfoProviderUserInfoFormGroup() {
		return new FormGroup<UserInfoProviderUserInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			federatedId: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			photoUrl: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			rawId: new FormControl<string | null | undefined>(undefined),
			screenName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of email signIn. */
	export interface EmailLinkSigninResponse {

		/** The user's email. */
		email?: string | null;

		/** Expiration time of STS id token in seconds. */
		expiresIn?: string | null;

		/** The STS id token to login the newly signed in user. */
		idToken?: string | null;

		/** Whether the user is new. */
		isNewUser?: boolean | null;

		/** The fixed string "identitytoolkit#EmailLinkSigninResponse". */
		kind?: string | null;

		/** The RP local ID of the user. */
		localId?: string | null;

		/** The refresh token for the signed in user. */
		refreshToken?: string | null;
	}

	/** Response of email signIn. */
	export interface EmailLinkSigninResponseFormProperties {

		/** The user's email. */
		email: FormControl<string | null | undefined>,

		/** Expiration time of STS id token in seconds. */
		expiresIn: FormControl<string | null | undefined>,

		/** The STS id token to login the newly signed in user. */
		idToken: FormControl<string | null | undefined>,

		/** Whether the user is new. */
		isNewUser: FormControl<boolean | null | undefined>,

		/** The fixed string "identitytoolkit#EmailLinkSigninResponse". */
		kind: FormControl<string | null | undefined>,

		/** The RP local ID of the user. */
		localId: FormControl<string | null | undefined>,

		/** The refresh token for the signed in user. */
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateEmailLinkSigninResponseFormGroup() {
		return new FormGroup<EmailLinkSigninResponseFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			expiresIn: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			isNewUser: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			localId: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Template for an email template. */
	export interface EmailTemplate {

		/** Email body. */
		body?: string | null;

		/** Email body format. */
		format?: string | null;

		/** From address of the email. */
		from?: string | null;

		/** From display name. */
		fromDisplayName?: string | null;

		/** Reply-to address. */
		replyTo?: string | null;

		/** Subject of the email. */
		subject?: string | null;
	}

	/** Template for an email template. */
	export interface EmailTemplateFormProperties {

		/** Email body. */
		body: FormControl<string | null | undefined>,

		/** Email body format. */
		format: FormControl<string | null | undefined>,

		/** From address of the email. */
		from: FormControl<string | null | undefined>,

		/** From display name. */
		fromDisplayName: FormControl<string | null | undefined>,

		/** Reply-to address. */
		replyTo: FormControl<string | null | undefined>,

		/** Subject of the email. */
		subject: FormControl<string | null | undefined>,
	}
	export function CreateEmailTemplateFormGroup() {
		return new FormGroup<EmailTemplateFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			fromDisplayName: new FormControl<string | null | undefined>(undefined),
			replyTo: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of getting account information. */
	export interface GetAccountInfoResponse {

		/** The fixed string "identitytoolkit#GetAccountInfoResponse". */
		kind?: string | null;

		/** The info of the users. */
		users?: Array<UserInfo>;
	}

	/** Response of getting account information. */
	export interface GetAccountInfoResponseFormProperties {

		/** The fixed string "identitytoolkit#GetAccountInfoResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateGetAccountInfoResponseFormGroup() {
		return new FormGroup<GetAccountInfoResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of getting a code for user confirmation (reset password, change email etc.). */
	export interface GetOobConfirmationCodeResponse {

		/** The email address that the email is sent to. */
		email?: string | null;

		/** The fixed string "identitytoolkit#GetOobConfirmationCodeResponse". */
		kind?: string | null;

		/** The code to be send to the user. */
		oobCode?: string | null;
	}

	/** Response of getting a code for user confirmation (reset password, change email etc.). */
	export interface GetOobConfirmationCodeResponseFormProperties {

		/** The email address that the email is sent to. */
		email: FormControl<string | null | undefined>,

		/** The fixed string "identitytoolkit#GetOobConfirmationCodeResponse". */
		kind: FormControl<string | null | undefined>,

		/** The code to be send to the user. */
		oobCode: FormControl<string | null | undefined>,
	}
	export function CreateGetOobConfirmationCodeResponseFormGroup() {
		return new FormGroup<GetOobConfirmationCodeResponseFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			oobCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of getting recaptcha param. */
	export interface GetRecaptchaParamResponse {

		/** The fixed string "identitytoolkit#GetRecaptchaParamResponse". */
		kind?: string | null;

		/** Site key registered at recaptcha. */
		recaptchaSiteKey?: string | null;

		/** The stoken field for the recaptcha widget, used to request captcha challenge. */
		recaptchaStoken?: string | null;
	}

	/** Response of getting recaptcha param. */
	export interface GetRecaptchaParamResponseFormProperties {

		/** The fixed string "identitytoolkit#GetRecaptchaParamResponse". */
		kind: FormControl<string | null | undefined>,

		/** Site key registered at recaptcha. */
		recaptchaSiteKey: FormControl<string | null | undefined>,

		/** The stoken field for the recaptcha widget, used to request captcha challenge. */
		recaptchaStoken: FormControl<string | null | undefined>,
	}
	export function CreateGetRecaptchaParamResponseFormGroup() {
		return new FormGroup<GetRecaptchaParamResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			recaptchaSiteKey: new FormControl<string | null | undefined>(undefined),
			recaptchaStoken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to get the IDP authentication URL. */
	export interface IdentitytoolkitRelyingpartyCreateAuthUriRequest {

		/** The app ID of the mobile app, base64(CERT_SHA1):PACKAGE_NAME for Android, BUNDLE_ID for iOS. */
		appId?: string | null;

		/** Explicitly specify the auth flow type. Currently only support "CODE_FLOW" type. The field is only used for Google provider. */
		authFlowType?: string | null;

		/** The relying party OAuth client ID. */
		clientId?: string | null;

		/** The opaque value used by the client to maintain context info between the authentication request and the IDP callback. */
		context?: string | null;

		/** The URI to which the IDP redirects the user after the federated login flow. */
		continueUri?: string | null;

		/** The query parameter that client can customize by themselves in auth url. The following parameters are reserved for server so that they cannot be customized by clients: client_id, response_type, scope, redirect_uri, state, oauth_token. */
		customParameter?: {[id: string]: string };

		/** The hosted domain to restrict sign-in to accounts at that domain for Google Apps hosted accounts. */
		hostedDomain?: string | null;

		/** The email or federated ID of the user. */
		identifier?: string | null;

		/** The developer's consumer key for OpenId OAuth Extension */
		oauthConsumerKey?: string | null;

		/** Additional oauth scopes, beyond the basid user profile, that the user would be prompted to grant */
		oauthScope?: string | null;

		/** Optional realm for OpenID protocol. The sub string "scheme://domain:port" of the param "continueUri" is used if this is not set. */
		openidRealm?: string | null;

		/** The native app package for OTA installation. */
		otaApp?: string | null;

		/** The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier. */
		providerId?: string | null;

		/** The session_id passed by client. */
		sessionId?: string | null;

		/** For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from. */
		tenantId?: string | null;

		/** Tenant project number to be used for idp discovery. */
		tenantProjectNumber?: string | null;
	}

	/** Request to get the IDP authentication URL. */
	export interface IdentitytoolkitRelyingpartyCreateAuthUriRequestFormProperties {

		/** The app ID of the mobile app, base64(CERT_SHA1):PACKAGE_NAME for Android, BUNDLE_ID for iOS. */
		appId: FormControl<string | null | undefined>,

		/** Explicitly specify the auth flow type. Currently only support "CODE_FLOW" type. The field is only used for Google provider. */
		authFlowType: FormControl<string | null | undefined>,

		/** The relying party OAuth client ID. */
		clientId: FormControl<string | null | undefined>,

		/** The opaque value used by the client to maintain context info between the authentication request and the IDP callback. */
		context: FormControl<string | null | undefined>,

		/** The URI to which the IDP redirects the user after the federated login flow. */
		continueUri: FormControl<string | null | undefined>,

		/** The query parameter that client can customize by themselves in auth url. The following parameters are reserved for server so that they cannot be customized by clients: client_id, response_type, scope, redirect_uri, state, oauth_token. */
		customParameter: FormControl<{[id: string]: string } | null | undefined>,

		/** The hosted domain to restrict sign-in to accounts at that domain for Google Apps hosted accounts. */
		hostedDomain: FormControl<string | null | undefined>,

		/** The email or federated ID of the user. */
		identifier: FormControl<string | null | undefined>,

		/** The developer's consumer key for OpenId OAuth Extension */
		oauthConsumerKey: FormControl<string | null | undefined>,

		/** Additional oauth scopes, beyond the basid user profile, that the user would be prompted to grant */
		oauthScope: FormControl<string | null | undefined>,

		/** Optional realm for OpenID protocol. The sub string "scheme://domain:port" of the param "continueUri" is used if this is not set. */
		openidRealm: FormControl<string | null | undefined>,

		/** The native app package for OTA installation. */
		otaApp: FormControl<string | null | undefined>,

		/** The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier. */
		providerId: FormControl<string | null | undefined>,

		/** The session_id passed by client. */
		sessionId: FormControl<string | null | undefined>,

		/** For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from. */
		tenantId: FormControl<string | null | undefined>,

		/** Tenant project number to be used for idp discovery. */
		tenantProjectNumber: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartyCreateAuthUriRequestFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartyCreateAuthUriRequestFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			authFlowType: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<string | null | undefined>(undefined),
			continueUri: new FormControl<string | null | undefined>(undefined),
			customParameter: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			hostedDomain: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			oauthConsumerKey: new FormControl<string | null | undefined>(undefined),
			oauthScope: new FormControl<string | null | undefined>(undefined),
			openidRealm: new FormControl<string | null | undefined>(undefined),
			otaApp: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			tenantProjectNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to delete account. */
	export interface IdentitytoolkitRelyingpartyDeleteAccountRequest {

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber?: string | null;

		/** The GITKit token or STS id token of the authenticated user. */
		idToken?: string | null;

		/** The local ID of the user. */
		localId?: string | null;
	}

	/** Request to delete account. */
	export interface IdentitytoolkitRelyingpartyDeleteAccountRequestFormProperties {

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber: FormControl<string | null | undefined>,

		/** The GITKit token or STS id token of the authenticated user. */
		idToken: FormControl<string | null | undefined>,

		/** The local ID of the user. */
		localId: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartyDeleteAccountRequestFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartyDeleteAccountRequestFormProperties>({
			delegatedProjectNumber: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			localId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to download user account in batch. */
	export interface IdentitytoolkitRelyingpartyDownloadAccountRequest {

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber?: string | null;

		/** The max number of results to return in the response. */
		maxResults?: string | null;

		/** The token for the next page. This should be taken from the previous response. */
		nextPageToken?: string | null;

		/** Specify which project (field value is actually project id) to operate. Only used when provided credential. */
		targetProjectId?: string | null;
	}

	/** Request to download user account in batch. */
	export interface IdentitytoolkitRelyingpartyDownloadAccountRequestFormProperties {

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber: FormControl<string | null | undefined>,

		/** The max number of results to return in the response. */
		maxResults: FormControl<string | null | undefined>,

		/** The token for the next page. This should be taken from the previous response. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Specify which project (field value is actually project id) to operate. Only used when provided credential. */
		targetProjectId: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartyDownloadAccountRequestFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartyDownloadAccountRequestFormProperties>({
			delegatedProjectNumber: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			targetProjectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to sign in with email. */
	export interface IdentitytoolkitRelyingpartyEmailLinkSigninRequest {

		/** The email address of the user. */
		email?: string | null;

		/** Token for linking flow. */
		idToken?: string | null;

		/** The confirmation code. */
		oobCode?: string | null;
	}

	/** Request to sign in with email. */
	export interface IdentitytoolkitRelyingpartyEmailLinkSigninRequestFormProperties {

		/** The email address of the user. */
		email: FormControl<string | null | undefined>,

		/** Token for linking flow. */
		idToken: FormControl<string | null | undefined>,

		/** The confirmation code. */
		oobCode: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartyEmailLinkSigninRequestFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartyEmailLinkSigninRequestFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			oobCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to get the account information. */
	export interface IdentitytoolkitRelyingpartyGetAccountInfoRequest {

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber?: string | null;

		/** The list of emails of the users to inquiry. */
		email?: Array<string>;

		/** The GITKit token of the authenticated user. */
		idToken?: string | null;

		/** The list of local ID's of the users to inquiry. */
		localId?: Array<string>;

		/** Privileged caller can query users by specified phone number. */
		phoneNumber?: Array<string>;
	}

	/** Request to get the account information. */
	export interface IdentitytoolkitRelyingpartyGetAccountInfoRequestFormProperties {

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber: FormControl<string | null | undefined>,

		/** The GITKit token of the authenticated user. */
		idToken: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartyGetAccountInfoRequestFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartyGetAccountInfoRequestFormProperties>({
			delegatedProjectNumber: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of getting the project configuration. */
	export interface IdentitytoolkitRelyingpartyGetProjectConfigResponse {

		/** Whether to allow password user sign in or sign up. */
		allowPasswordUser?: boolean | null;

		/** Browser API key, needed when making http request to Apiary. */
		apiKey?: string | null;

		/** Authorized domains. */
		authorizedDomains?: Array<string>;

		/** Template for an email template. */
		changeEmailTemplate?: EmailTemplate;
		dynamicLinksDomain?: string | null;

		/** Whether anonymous user is enabled. */
		enableAnonymousUser?: boolean | null;

		/** OAuth2 provider configuration. */
		idpConfig?: Array<IdpConfig>;

		/** Template for an email template. */
		legacyResetPasswordTemplate?: EmailTemplate;

		/** Project ID of the relying party. */
		projectId?: string | null;

		/** Template for an email template. */
		resetPasswordTemplate?: EmailTemplate;

		/** Whether to use email sending provided by Firebear. */
		useEmailSending?: boolean | null;

		/** Template for an email template. */
		verifyEmailTemplate?: EmailTemplate;
	}

	/** Response of getting the project configuration. */
	export interface IdentitytoolkitRelyingpartyGetProjectConfigResponseFormProperties {

		/** Whether to allow password user sign in or sign up. */
		allowPasswordUser: FormControl<boolean | null | undefined>,

		/** Browser API key, needed when making http request to Apiary. */
		apiKey: FormControl<string | null | undefined>,
		dynamicLinksDomain: FormControl<string | null | undefined>,

		/** Whether anonymous user is enabled. */
		enableAnonymousUser: FormControl<boolean | null | undefined>,

		/** Project ID of the relying party. */
		projectId: FormControl<string | null | undefined>,

		/** Whether to use email sending provided by Firebear. */
		useEmailSending: FormControl<boolean | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartyGetProjectConfigResponseFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartyGetProjectConfigResponseFormProperties>({
			allowPasswordUser: new FormControl<boolean | null | undefined>(undefined),
			apiKey: new FormControl<string | null | undefined>(undefined),
			dynamicLinksDomain: new FormControl<string | null | undefined>(undefined),
			enableAnonymousUser: new FormControl<boolean | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			useEmailSending: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Template for a single idp configuration. */
	export interface IdpConfig {

		/** OAuth2 client ID. */
		clientId?: string | null;

		/** Whether this IDP is enabled. */
		enabled?: boolean | null;

		/** Percent of users who will be prompted/redirected federated login for this IDP. */
		experimentPercent?: number | null;

		/** OAuth2 provider. */
		provider?: string | null;

		/** OAuth2 client secret. */
		secret?: string | null;

		/** Whitelisted client IDs for audience check. */
		whitelistedAudiences?: Array<string>;
	}

	/** Template for a single idp configuration. */
	export interface IdpConfigFormProperties {

		/** OAuth2 client ID. */
		clientId: FormControl<string | null | undefined>,

		/** Whether this IDP is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** Percent of users who will be prompted/redirected federated login for this IDP. */
		experimentPercent: FormControl<number | null | undefined>,

		/** OAuth2 provider. */
		provider: FormControl<string | null | undefined>,

		/** OAuth2 client secret. */
		secret: FormControl<string | null | undefined>,
	}
	export function CreateIdpConfigFormGroup() {
		return new FormGroup<IdpConfigFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			experimentPercent: new FormControl<number | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Respone of getting public keys. */
	export interface IdentitytoolkitRelyingpartyGetPublicKeysResponse {
	}

	/** Respone of getting public keys. */
	export interface IdentitytoolkitRelyingpartyGetPublicKeysResponseFormProperties {
	}
	export function CreateIdentitytoolkitRelyingpartyGetPublicKeysResponseFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartyGetPublicKeysResponseFormProperties>({
		});

	}


	/** Request to reset the password. */
	export interface IdentitytoolkitRelyingpartyResetPasswordRequest {

		/** The email address of the user. */
		email?: string | null;

		/** The new password inputted by the user. */
		newPassword?: string | null;

		/** The old password inputted by the user. */
		oldPassword?: string | null;

		/** The confirmation code. */
		oobCode?: string | null;
	}

	/** Request to reset the password. */
	export interface IdentitytoolkitRelyingpartyResetPasswordRequestFormProperties {

		/** The email address of the user. */
		email: FormControl<string | null | undefined>,

		/** The new password inputted by the user. */
		newPassword: FormControl<string | null | undefined>,

		/** The old password inputted by the user. */
		oldPassword: FormControl<string | null | undefined>,

		/** The confirmation code. */
		oobCode: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartyResetPasswordRequestFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartyResetPasswordRequestFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			newPassword: new FormControl<string | null | undefined>(undefined),
			oldPassword: new FormControl<string | null | undefined>(undefined),
			oobCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for Identitytoolkit-SendVerificationCode */
	export interface IdentitytoolkitRelyingpartySendVerificationCodeRequest {

		/** Receipt of successful app token validation with APNS. */
		iosReceipt?: string | null;

		/** Secret delivered to iOS app via APNS. */
		iosSecret?: string | null;

		/** The phone number to send the verification code to in E.164 format. */
		phoneNumber?: string | null;

		/** Recaptcha solution. */
		recaptchaToken?: string | null;
	}

	/** Request for Identitytoolkit-SendVerificationCode */
	export interface IdentitytoolkitRelyingpartySendVerificationCodeRequestFormProperties {

		/** Receipt of successful app token validation with APNS. */
		iosReceipt: FormControl<string | null | undefined>,

		/** Secret delivered to iOS app via APNS. */
		iosSecret: FormControl<string | null | undefined>,

		/** The phone number to send the verification code to in E.164 format. */
		phoneNumber: FormControl<string | null | undefined>,

		/** Recaptcha solution. */
		recaptchaToken: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartySendVerificationCodeRequestFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartySendVerificationCodeRequestFormProperties>({
			iosReceipt: new FormControl<string | null | undefined>(undefined),
			iosSecret: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			recaptchaToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for Identitytoolkit-SendVerificationCode */
	export interface IdentitytoolkitRelyingpartySendVerificationCodeResponse {

		/** Encrypted session information */
		sessionInfo?: string | null;
	}

	/** Response for Identitytoolkit-SendVerificationCode */
	export interface IdentitytoolkitRelyingpartySendVerificationCodeResponseFormProperties {

		/** Encrypted session information */
		sessionInfo: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartySendVerificationCodeResponseFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartySendVerificationCodeResponseFormProperties>({
			sessionInfo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to set the account information. */
	export interface IdentitytoolkitRelyingpartySetAccountInfoRequest {

		/** The captcha challenge. */
		captchaChallenge?: string | null;

		/** Response to the captcha. */
		captchaResponse?: string | null;

		/** The timestamp when the account is created. */
		createdAt?: string | null;

		/** The custom attributes to be set in the user's id token. */
		customAttributes?: string | null;

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber?: string | null;

		/** The attributes users request to delete. */
		deleteAttribute?: Array<string>;

		/** The IDPs the user request to delete. */
		deleteProvider?: Array<string>;

		/** Whether to disable the user. */
		disableUser?: boolean | null;

		/** The name of the user. */
		displayName?: string | null;

		/** The email of the user. */
		email?: string | null;

		/** Mark the email as verified or not. */
		emailVerified?: boolean | null;

		/** The GITKit token of the authenticated user. */
		idToken?: string | null;

		/** Instance id token of the app. */
		instanceId?: string | null;

		/** Last login timestamp. */
		lastLoginAt?: string | null;

		/** The local ID of the user. */
		localId?: string | null;

		/** The out-of-band code of the change email request. */
		oobCode?: string | null;

		/** The new password of the user. */
		password?: string | null;

		/** Privileged caller can update user with specified phone number. */
		phoneNumber?: string | null;

		/** The photo url of the user. */
		photoUrl?: string | null;

		/** The associated IDPs of the user. */
		provider?: Array<string>;

		/** Whether return sts id token and refresh token instead of gitkit token. */
		returnSecureToken?: boolean | null;

		/** Mark the user to upgrade to federated login. */
		upgradeToFederatedLogin?: boolean | null;

		/** Timestamp in seconds for valid login token. */
		validSince?: string | null;
	}

	/** Request to set the account information. */
	export interface IdentitytoolkitRelyingpartySetAccountInfoRequestFormProperties {

		/** The captcha challenge. */
		captchaChallenge: FormControl<string | null | undefined>,

		/** Response to the captcha. */
		captchaResponse: FormControl<string | null | undefined>,

		/** The timestamp when the account is created. */
		createdAt: FormControl<string | null | undefined>,

		/** The custom attributes to be set in the user's id token. */
		customAttributes: FormControl<string | null | undefined>,

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber: FormControl<string | null | undefined>,

		/** Whether to disable the user. */
		disableUser: FormControl<boolean | null | undefined>,

		/** The name of the user. */
		displayName: FormControl<string | null | undefined>,

		/** The email of the user. */
		email: FormControl<string | null | undefined>,

		/** Mark the email as verified or not. */
		emailVerified: FormControl<boolean | null | undefined>,

		/** The GITKit token of the authenticated user. */
		idToken: FormControl<string | null | undefined>,

		/** Instance id token of the app. */
		instanceId: FormControl<string | null | undefined>,

		/** Last login timestamp. */
		lastLoginAt: FormControl<string | null | undefined>,

		/** The local ID of the user. */
		localId: FormControl<string | null | undefined>,

		/** The out-of-band code of the change email request. */
		oobCode: FormControl<string | null | undefined>,

		/** The new password of the user. */
		password: FormControl<string | null | undefined>,

		/** Privileged caller can update user with specified phone number. */
		phoneNumber: FormControl<string | null | undefined>,

		/** The photo url of the user. */
		photoUrl: FormControl<string | null | undefined>,

		/** Whether return sts id token and refresh token instead of gitkit token. */
		returnSecureToken: FormControl<boolean | null | undefined>,

		/** Mark the user to upgrade to federated login. */
		upgradeToFederatedLogin: FormControl<boolean | null | undefined>,

		/** Timestamp in seconds for valid login token. */
		validSince: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartySetAccountInfoRequestFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartySetAccountInfoRequestFormProperties>({
			captchaChallenge: new FormControl<string | null | undefined>(undefined),
			captchaResponse: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			customAttributes: new FormControl<string | null | undefined>(undefined),
			delegatedProjectNumber: new FormControl<string | null | undefined>(undefined),
			disableUser: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			emailVerified: new FormControl<boolean | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			lastLoginAt: new FormControl<string | null | undefined>(undefined),
			localId: new FormControl<string | null | undefined>(undefined),
			oobCode: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			photoUrl: new FormControl<string | null | undefined>(undefined),
			returnSecureToken: new FormControl<boolean | null | undefined>(undefined),
			upgradeToFederatedLogin: new FormControl<boolean | null | undefined>(undefined),
			validSince: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to set the project configuration. */
	export interface IdentitytoolkitRelyingpartySetProjectConfigRequest {

		/** Whether to allow password user sign in or sign up. */
		allowPasswordUser?: boolean | null;

		/** Browser API key, needed when making http request to Apiary. */
		apiKey?: string | null;

		/** Authorized domains for widget redirect. */
		authorizedDomains?: Array<string>;

		/** Template for an email template. */
		changeEmailTemplate?: EmailTemplate;

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber?: string | null;

		/** Whether to enable anonymous user. */
		enableAnonymousUser?: boolean | null;

		/** Oauth2 provider configuration. */
		idpConfig?: Array<IdpConfig>;

		/** Template for an email template. */
		legacyResetPasswordTemplate?: EmailTemplate;

		/** Template for an email template. */
		resetPasswordTemplate?: EmailTemplate;

		/** Whether to use email sending provided by Firebear. */
		useEmailSending?: boolean | null;

		/** Template for an email template. */
		verifyEmailTemplate?: EmailTemplate;
	}

	/** Request to set the project configuration. */
	export interface IdentitytoolkitRelyingpartySetProjectConfigRequestFormProperties {

		/** Whether to allow password user sign in or sign up. */
		allowPasswordUser: FormControl<boolean | null | undefined>,

		/** Browser API key, needed when making http request to Apiary. */
		apiKey: FormControl<string | null | undefined>,

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber: FormControl<string | null | undefined>,

		/** Whether to enable anonymous user. */
		enableAnonymousUser: FormControl<boolean | null | undefined>,

		/** Whether to use email sending provided by Firebear. */
		useEmailSending: FormControl<boolean | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartySetProjectConfigRequestFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartySetProjectConfigRequestFormProperties>({
			allowPasswordUser: new FormControl<boolean | null | undefined>(undefined),
			apiKey: new FormControl<string | null | undefined>(undefined),
			delegatedProjectNumber: new FormControl<string | null | undefined>(undefined),
			enableAnonymousUser: new FormControl<boolean | null | undefined>(undefined),
			useEmailSending: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response of setting the project configuration. */
	export interface IdentitytoolkitRelyingpartySetProjectConfigResponse {

		/** Project ID of the relying party. */
		projectId?: string | null;
	}

	/** Response of setting the project configuration. */
	export interface IdentitytoolkitRelyingpartySetProjectConfigResponseFormProperties {

		/** Project ID of the relying party. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartySetProjectConfigResponseFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartySetProjectConfigResponseFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to sign out user. */
	export interface IdentitytoolkitRelyingpartySignOutUserRequest {

		/** Instance id token of the app. */
		instanceId?: string | null;

		/** The local ID of the user. */
		localId?: string | null;
	}

	/** Request to sign out user. */
	export interface IdentitytoolkitRelyingpartySignOutUserRequestFormProperties {

		/** Instance id token of the app. */
		instanceId: FormControl<string | null | undefined>,

		/** The local ID of the user. */
		localId: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartySignOutUserRequestFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartySignOutUserRequestFormProperties>({
			instanceId: new FormControl<string | null | undefined>(undefined),
			localId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of signing out user. */
	export interface IdentitytoolkitRelyingpartySignOutUserResponse {

		/** The local ID of the user. */
		localId?: string | null;
	}

	/** Response of signing out user. */
	export interface IdentitytoolkitRelyingpartySignOutUserResponseFormProperties {

		/** The local ID of the user. */
		localId: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartySignOutUserResponseFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartySignOutUserResponseFormProperties>({
			localId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to signup new user, create anonymous user or anonymous user reauth. */
	export interface IdentitytoolkitRelyingpartySignupNewUserRequest {

		/** The captcha challenge. */
		captchaChallenge?: string | null;

		/** Response to the captcha. */
		captchaResponse?: string | null;

		/** Whether to disable the user. Only can be used by service account. */
		disabled?: boolean | null;

		/** The name of the user. */
		displayName?: string | null;

		/** The email of the user. */
		email?: string | null;

		/** Mark the email as verified or not. Only can be used by service account. */
		emailVerified?: boolean | null;

		/** The GITKit token of the authenticated user. */
		idToken?: string | null;

		/** Instance id token of the app. */
		instanceId?: string | null;

		/** Privileged caller can create user with specified user id. */
		localId?: string | null;

		/** The new password of the user. */
		password?: string | null;

		/** Privileged caller can create user with specified phone number. */
		phoneNumber?: string | null;

		/** The photo url of the user. */
		photoUrl?: string | null;

		/** For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from. */
		tenantId?: string | null;

		/** Tenant project number to be used for idp discovery. */
		tenantProjectNumber?: string | null;
	}

	/** Request to signup new user, create anonymous user or anonymous user reauth. */
	export interface IdentitytoolkitRelyingpartySignupNewUserRequestFormProperties {

		/** The captcha challenge. */
		captchaChallenge: FormControl<string | null | undefined>,

		/** Response to the captcha. */
		captchaResponse: FormControl<string | null | undefined>,

		/** Whether to disable the user. Only can be used by service account. */
		disabled: FormControl<boolean | null | undefined>,

		/** The name of the user. */
		displayName: FormControl<string | null | undefined>,

		/** The email of the user. */
		email: FormControl<string | null | undefined>,

		/** Mark the email as verified or not. Only can be used by service account. */
		emailVerified: FormControl<boolean | null | undefined>,

		/** The GITKit token of the authenticated user. */
		idToken: FormControl<string | null | undefined>,

		/** Instance id token of the app. */
		instanceId: FormControl<string | null | undefined>,

		/** Privileged caller can create user with specified user id. */
		localId: FormControl<string | null | undefined>,

		/** The new password of the user. */
		password: FormControl<string | null | undefined>,

		/** Privileged caller can create user with specified phone number. */
		phoneNumber: FormControl<string | null | undefined>,

		/** The photo url of the user. */
		photoUrl: FormControl<string | null | undefined>,

		/** For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from. */
		tenantId: FormControl<string | null | undefined>,

		/** Tenant project number to be used for idp discovery. */
		tenantProjectNumber: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartySignupNewUserRequestFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartySignupNewUserRequestFormProperties>({
			captchaChallenge: new FormControl<string | null | undefined>(undefined),
			captchaResponse: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			emailVerified: new FormControl<boolean | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			localId: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			photoUrl: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			tenantProjectNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to upload user account in batch. */
	export interface IdentitytoolkitRelyingpartyUploadAccountRequest {

		/** Whether allow overwrite existing account when user local_id exists. */
		allowOverwrite?: boolean | null;
		blockSize?: number | null;

		/** The following 4 fields are for standard scrypt algorithm. */
		cpuMemCost?: number | null;

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber?: string | null;
		dkLen?: number | null;

		/** The password hash algorithm. */
		hashAlgorithm?: string | null;

		/** Memory cost for hash calculation. Used by scrypt similar algorithms. */
		memoryCost?: number | null;
		parallelization?: number | null;

		/** Rounds for hash calculation. Used by scrypt and similar algorithms. */
		rounds?: number | null;

		/** The salt separator. */
		saltSeparator?: string | null;

		/** If true, backend will do sanity check(including duplicate email and federated id) when uploading account. */
		sanityCheck?: boolean | null;

		/** The key for to hash the password. */
		signerKey?: string | null;

		/** Specify which project (field value is actually project id) to operate. Only used when provided credential. */
		targetProjectId?: string | null;

		/** The account info to be stored. */
		users?: Array<UserInfo>;
	}

	/** Request to upload user account in batch. */
	export interface IdentitytoolkitRelyingpartyUploadAccountRequestFormProperties {

		/** Whether allow overwrite existing account when user local_id exists. */
		allowOverwrite: FormControl<boolean | null | undefined>,
		blockSize: FormControl<number | null | undefined>,

		/** The following 4 fields are for standard scrypt algorithm. */
		cpuMemCost: FormControl<number | null | undefined>,

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber: FormControl<string | null | undefined>,
		dkLen: FormControl<number | null | undefined>,

		/** The password hash algorithm. */
		hashAlgorithm: FormControl<string | null | undefined>,

		/** Memory cost for hash calculation. Used by scrypt similar algorithms. */
		memoryCost: FormControl<number | null | undefined>,
		parallelization: FormControl<number | null | undefined>,

		/** Rounds for hash calculation. Used by scrypt and similar algorithms. */
		rounds: FormControl<number | null | undefined>,

		/** The salt separator. */
		saltSeparator: FormControl<string | null | undefined>,

		/** If true, backend will do sanity check(including duplicate email and federated id) when uploading account. */
		sanityCheck: FormControl<boolean | null | undefined>,

		/** The key for to hash the password. */
		signerKey: FormControl<string | null | undefined>,

		/** Specify which project (field value is actually project id) to operate. Only used when provided credential. */
		targetProjectId: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartyUploadAccountRequestFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartyUploadAccountRequestFormProperties>({
			allowOverwrite: new FormControl<boolean | null | undefined>(undefined),
			blockSize: new FormControl<number | null | undefined>(undefined),
			cpuMemCost: new FormControl<number | null | undefined>(undefined),
			delegatedProjectNumber: new FormControl<string | null | undefined>(undefined),
			dkLen: new FormControl<number | null | undefined>(undefined),
			hashAlgorithm: new FormControl<string | null | undefined>(undefined),
			memoryCost: new FormControl<number | null | undefined>(undefined),
			parallelization: new FormControl<number | null | undefined>(undefined),
			rounds: new FormControl<number | null | undefined>(undefined),
			saltSeparator: new FormControl<string | null | undefined>(undefined),
			sanityCheck: new FormControl<boolean | null | undefined>(undefined),
			signerKey: new FormControl<string | null | undefined>(undefined),
			targetProjectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to verify the IDP assertion. */
	export interface IdentitytoolkitRelyingpartyVerifyAssertionRequest {

		/** When it's true, automatically creates a new account if the user doesn't exist. When it's false, allows existing user to sign in normally and throws exception if the user doesn't exist. */
		autoCreate?: boolean | null;

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber?: string | null;

		/** The GITKit token of the authenticated user. */
		idToken?: string | null;

		/** Instance id token of the app. */
		instanceId?: string | null;

		/** The GITKit token for the non-trusted IDP pending to be confirmed by the user. */
		pendingIdToken?: string | null;

		/** The post body if the request is a HTTP POST. */
		postBody?: string | null;

		/** The URI to which the IDP redirects the user back. It may contain federated login result params added by the IDP. */
		requestUri?: string | null;

		/** Whether return 200 and IDP credential rather than throw exception when federated id is already linked. */
		returnIdpCredential?: boolean | null;

		/** Whether to return refresh tokens. */
		returnRefreshToken?: boolean | null;

		/** Whether return sts id token and refresh token instead of gitkit token. */
		returnSecureToken?: boolean | null;

		/** Session ID, which should match the one in previous createAuthUri request. */
		sessionId?: string | null;

		/** For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from. */
		tenantId?: string | null;

		/** Tenant project number to be used for idp discovery. */
		tenantProjectNumber?: string | null;
	}

	/** Request to verify the IDP assertion. */
	export interface IdentitytoolkitRelyingpartyVerifyAssertionRequestFormProperties {

		/** When it's true, automatically creates a new account if the user doesn't exist. When it's false, allows existing user to sign in normally and throws exception if the user doesn't exist. */
		autoCreate: FormControl<boolean | null | undefined>,

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber: FormControl<string | null | undefined>,

		/** The GITKit token of the authenticated user. */
		idToken: FormControl<string | null | undefined>,

		/** Instance id token of the app. */
		instanceId: FormControl<string | null | undefined>,

		/** The GITKit token for the non-trusted IDP pending to be confirmed by the user. */
		pendingIdToken: FormControl<string | null | undefined>,

		/** The post body if the request is a HTTP POST. */
		postBody: FormControl<string | null | undefined>,

		/** The URI to which the IDP redirects the user back. It may contain federated login result params added by the IDP. */
		requestUri: FormControl<string | null | undefined>,

		/** Whether return 200 and IDP credential rather than throw exception when federated id is already linked. */
		returnIdpCredential: FormControl<boolean | null | undefined>,

		/** Whether to return refresh tokens. */
		returnRefreshToken: FormControl<boolean | null | undefined>,

		/** Whether return sts id token and refresh token instead of gitkit token. */
		returnSecureToken: FormControl<boolean | null | undefined>,

		/** Session ID, which should match the one in previous createAuthUri request. */
		sessionId: FormControl<string | null | undefined>,

		/** For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from. */
		tenantId: FormControl<string | null | undefined>,

		/** Tenant project number to be used for idp discovery. */
		tenantProjectNumber: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartyVerifyAssertionRequestFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartyVerifyAssertionRequestFormProperties>({
			autoCreate: new FormControl<boolean | null | undefined>(undefined),
			delegatedProjectNumber: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			pendingIdToken: new FormControl<string | null | undefined>(undefined),
			postBody: new FormControl<string | null | undefined>(undefined),
			requestUri: new FormControl<string | null | undefined>(undefined),
			returnIdpCredential: new FormControl<boolean | null | undefined>(undefined),
			returnRefreshToken: new FormControl<boolean | null | undefined>(undefined),
			returnSecureToken: new FormControl<boolean | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			tenantProjectNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to verify a custom token */
	export interface IdentitytoolkitRelyingpartyVerifyCustomTokenRequest {

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber?: string | null;

		/** Instance id token of the app. */
		instanceId?: string | null;

		/** Whether return sts id token and refresh token instead of gitkit token. */
		returnSecureToken?: boolean | null;

		/** The custom token to verify */
		token?: string | null;
	}

	/** Request to verify a custom token */
	export interface IdentitytoolkitRelyingpartyVerifyCustomTokenRequestFormProperties {

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber: FormControl<string | null | undefined>,

		/** Instance id token of the app. */
		instanceId: FormControl<string | null | undefined>,

		/** Whether return sts id token and refresh token instead of gitkit token. */
		returnSecureToken: FormControl<boolean | null | undefined>,

		/** The custom token to verify */
		token: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartyVerifyCustomTokenRequestFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartyVerifyCustomTokenRequestFormProperties>({
			delegatedProjectNumber: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			returnSecureToken: new FormControl<boolean | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to verify the password. */
	export interface IdentitytoolkitRelyingpartyVerifyPasswordRequest {

		/** The captcha challenge. */
		captchaChallenge?: string | null;

		/** Response to the captcha. */
		captchaResponse?: string | null;

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber?: string | null;

		/** The email of the user. */
		email?: string | null;

		/** The GITKit token of the authenticated user. */
		idToken?: string | null;

		/** Instance id token of the app. */
		instanceId?: string | null;

		/** The password inputed by the user. */
		password?: string | null;

		/** The GITKit token for the non-trusted IDP, which is to be confirmed by the user. */
		pendingIdToken?: string | null;

		/** Whether return sts id token and refresh token instead of gitkit token. */
		returnSecureToken?: boolean | null;

		/** For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from. */
		tenantId?: string | null;

		/** Tenant project number to be used for idp discovery. */
		tenantProjectNumber?: string | null;
	}

	/** Request to verify the password. */
	export interface IdentitytoolkitRelyingpartyVerifyPasswordRequestFormProperties {

		/** The captcha challenge. */
		captchaChallenge: FormControl<string | null | undefined>,

		/** Response to the captcha. */
		captchaResponse: FormControl<string | null | undefined>,

		/** GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. */
		delegatedProjectNumber: FormControl<string | null | undefined>,

		/** The email of the user. */
		email: FormControl<string | null | undefined>,

		/** The GITKit token of the authenticated user. */
		idToken: FormControl<string | null | undefined>,

		/** Instance id token of the app. */
		instanceId: FormControl<string | null | undefined>,

		/** The password inputed by the user. */
		password: FormControl<string | null | undefined>,

		/** The GITKit token for the non-trusted IDP, which is to be confirmed by the user. */
		pendingIdToken: FormControl<string | null | undefined>,

		/** Whether return sts id token and refresh token instead of gitkit token. */
		returnSecureToken: FormControl<boolean | null | undefined>,

		/** For multi-tenant use cases, in order to construct sign-in URL with the correct IDP parameters, Firebear needs to know which Tenant to retrieve IDP configs from. */
		tenantId: FormControl<string | null | undefined>,

		/** Tenant project number to be used for idp discovery. */
		tenantProjectNumber: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartyVerifyPasswordRequestFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartyVerifyPasswordRequestFormProperties>({
			captchaChallenge: new FormControl<string | null | undefined>(undefined),
			captchaResponse: new FormControl<string | null | undefined>(undefined),
			delegatedProjectNumber: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			pendingIdToken: new FormControl<string | null | undefined>(undefined),
			returnSecureToken: new FormControl<boolean | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			tenantProjectNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for Identitytoolkit-VerifyPhoneNumber */
	export interface IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest {
		code?: string | null;
		idToken?: string | null;
		operation?: string | null;
		phoneNumber?: string | null;

		/** The session info previously returned by IdentityToolkit-SendVerificationCode. */
		sessionInfo?: string | null;
		temporaryProof?: string | null;
		verificationProof?: string | null;
	}

	/** Request for Identitytoolkit-VerifyPhoneNumber */
	export interface IdentitytoolkitRelyingpartyVerifyPhoneNumberRequestFormProperties {
		code: FormControl<string | null | undefined>,
		idToken: FormControl<string | null | undefined>,
		operation: FormControl<string | null | undefined>,
		phoneNumber: FormControl<string | null | undefined>,

		/** The session info previously returned by IdentityToolkit-SendVerificationCode. */
		sessionInfo: FormControl<string | null | undefined>,
		temporaryProof: FormControl<string | null | undefined>,
		verificationProof: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartyVerifyPhoneNumberRequestFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartyVerifyPhoneNumberRequestFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			sessionInfo: new FormControl<string | null | undefined>(undefined),
			temporaryProof: new FormControl<string | null | undefined>(undefined),
			verificationProof: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for Identitytoolkit-VerifyPhoneNumber */
	export interface IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse {
		expiresIn?: string | null;
		idToken?: string | null;
		isNewUser?: boolean | null;
		localId?: string | null;
		phoneNumber?: string | null;
		refreshToken?: string | null;
		temporaryProof?: string | null;
		temporaryProofExpiresIn?: string | null;
		verificationProof?: string | null;
		verificationProofExpiresIn?: string | null;
	}

	/** Response for Identitytoolkit-VerifyPhoneNumber */
	export interface IdentitytoolkitRelyingpartyVerifyPhoneNumberResponseFormProperties {
		expiresIn: FormControl<string | null | undefined>,
		idToken: FormControl<string | null | undefined>,
		isNewUser: FormControl<boolean | null | undefined>,
		localId: FormControl<string | null | undefined>,
		phoneNumber: FormControl<string | null | undefined>,
		refreshToken: FormControl<string | null | undefined>,
		temporaryProof: FormControl<string | null | undefined>,
		temporaryProofExpiresIn: FormControl<string | null | undefined>,
		verificationProof: FormControl<string | null | undefined>,
		verificationProofExpiresIn: FormControl<string | null | undefined>,
	}
	export function CreateIdentitytoolkitRelyingpartyVerifyPhoneNumberResponseFormGroup() {
		return new FormGroup<IdentitytoolkitRelyingpartyVerifyPhoneNumberResponseFormProperties>({
			expiresIn: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			isNewUser: new FormControl<boolean | null | undefined>(undefined),
			localId: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
			temporaryProof: new FormControl<string | null | undefined>(undefined),
			temporaryProofExpiresIn: new FormControl<string | null | undefined>(undefined),
			verificationProof: new FormControl<string | null | undefined>(undefined),
			verificationProofExpiresIn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request of getting a code for user confirmation (reset password, change email etc.) */
	export interface Relyingparty {

		/** whether or not to install the android app on the device where the link is opened */
		androidInstallApp?: boolean | null;

		/** minimum version of the app. if the version on the device is lower than this version then the user is taken to the play store to upgrade the app */
		androidMinimumVersion?: string | null;

		/** android package name of the android app to handle the action code */
		androidPackageName?: string | null;

		/** whether or not the app can handle the oob code without first going to web */
		canHandleCodeInApp?: boolean | null;

		/** The recaptcha response from the user. */
		captchaResp?: string | null;

		/** The recaptcha challenge presented to the user. */
		challenge?: string | null;

		/** The url to continue to the Gitkit app */
		continueUrl?: string | null;

		/** The email of the user. */
		email?: string | null;

		/** iOS app store id to download the app if it's not already installed */
		iOSAppStoreId?: string | null;

		/** the iOS bundle id of iOS app to handle the action code */
		iOSBundleId?: string | null;

		/** The user's Gitkit login token for email change. */
		idToken?: string | null;

		/** The fixed string "identitytoolkit#relyingparty". */
		kind?: string | null;

		/** The new email if the code is for email change. */
		newEmail?: string | null;

		/** The request type. */
		requestType?: string | null;

		/** The IP address of the user. */
		userIp?: string | null;
	}

	/** Request of getting a code for user confirmation (reset password, change email etc.) */
	export interface RelyingpartyFormProperties {

		/** whether or not to install the android app on the device where the link is opened */
		androidInstallApp: FormControl<boolean | null | undefined>,

		/** minimum version of the app. if the version on the device is lower than this version then the user is taken to the play store to upgrade the app */
		androidMinimumVersion: FormControl<string | null | undefined>,

		/** android package name of the android app to handle the action code */
		androidPackageName: FormControl<string | null | undefined>,

		/** whether or not the app can handle the oob code without first going to web */
		canHandleCodeInApp: FormControl<boolean | null | undefined>,

		/** The recaptcha response from the user. */
		captchaResp: FormControl<string | null | undefined>,

		/** The recaptcha challenge presented to the user. */
		challenge: FormControl<string | null | undefined>,

		/** The url to continue to the Gitkit app */
		continueUrl: FormControl<string | null | undefined>,

		/** The email of the user. */
		email: FormControl<string | null | undefined>,

		/** iOS app store id to download the app if it's not already installed */
		iOSAppStoreId: FormControl<string | null | undefined>,

		/** the iOS bundle id of iOS app to handle the action code */
		iOSBundleId: FormControl<string | null | undefined>,

		/** The user's Gitkit login token for email change. */
		idToken: FormControl<string | null | undefined>,

		/** The fixed string "identitytoolkit#relyingparty". */
		kind: FormControl<string | null | undefined>,

		/** The new email if the code is for email change. */
		newEmail: FormControl<string | null | undefined>,

		/** The request type. */
		requestType: FormControl<string | null | undefined>,

		/** The IP address of the user. */
		userIp: FormControl<string | null | undefined>,
	}
	export function CreateRelyingpartyFormGroup() {
		return new FormGroup<RelyingpartyFormProperties>({
			androidInstallApp: new FormControl<boolean | null | undefined>(undefined),
			androidMinimumVersion: new FormControl<string | null | undefined>(undefined),
			androidPackageName: new FormControl<string | null | undefined>(undefined),
			canHandleCodeInApp: new FormControl<boolean | null | undefined>(undefined),
			captchaResp: new FormControl<string | null | undefined>(undefined),
			challenge: new FormControl<string | null | undefined>(undefined),
			continueUrl: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			iOSAppStoreId: new FormControl<string | null | undefined>(undefined),
			iOSBundleId: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			newEmail: new FormControl<string | null | undefined>(undefined),
			requestType: new FormControl<string | null | undefined>(undefined),
			userIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of resetting the password. */
	export interface ResetPasswordResponse {

		/** The user's email. If the out-of-band code is for email recovery, the user's original email. */
		email?: string | null;

		/** The fixed string "identitytoolkit#ResetPasswordResponse". */
		kind?: string | null;

		/** If the out-of-band code is for email recovery, the user's new email. */
		newEmail?: string | null;

		/** The request type. */
		requestType?: string | null;
	}

	/** Response of resetting the password. */
	export interface ResetPasswordResponseFormProperties {

		/** The user's email. If the out-of-band code is for email recovery, the user's original email. */
		email: FormControl<string | null | undefined>,

		/** The fixed string "identitytoolkit#ResetPasswordResponse". */
		kind: FormControl<string | null | undefined>,

		/** If the out-of-band code is for email recovery, the user's new email. */
		newEmail: FormControl<string | null | undefined>,

		/** The request type. */
		requestType: FormControl<string | null | undefined>,
	}
	export function CreateResetPasswordResponseFormGroup() {
		return new FormGroup<ResetPasswordResponseFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			newEmail: new FormControl<string | null | undefined>(undefined),
			requestType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Respone of setting the account information. */
	export interface SetAccountInfoResponse {

		/** The name of the user. */
		displayName?: string | null;

		/** The email of the user. */
		email?: string | null;

		/** If email has been verified. */
		emailVerified?: boolean | null;

		/** If idToken is STS id token, then this field will be expiration time of STS id token in seconds. */
		expiresIn?: string | null;

		/** The Gitkit id token to login the newly sign up user. */
		idToken?: string | null;

		/** The fixed string "identitytoolkit#SetAccountInfoResponse". */
		kind?: string | null;

		/** The local ID of the user. */
		localId?: string | null;

		/** The new email the user attempts to change to. */
		newEmail?: string | null;

		/** The user's hashed password. */
		passwordHash?: string | null;

		/** The photo url of the user. */
		photoUrl?: string | null;

		/** The user's profiles at the associated IdPs. */
		SetAccountInfoResponseProviderUserInfo?: Array<SetAccountInfoResponseProviderUserInfo>;

		/** If idToken is STS id token, then this field will be refresh token. */
		refreshToken?: string | null;
	}

	/** Respone of setting the account information. */
	export interface SetAccountInfoResponseFormProperties {

		/** The name of the user. */
		displayName: FormControl<string | null | undefined>,

		/** The email of the user. */
		email: FormControl<string | null | undefined>,

		/** If email has been verified. */
		emailVerified: FormControl<boolean | null | undefined>,

		/** If idToken is STS id token, then this field will be expiration time of STS id token in seconds. */
		expiresIn: FormControl<string | null | undefined>,

		/** The Gitkit id token to login the newly sign up user. */
		idToken: FormControl<string | null | undefined>,

		/** The fixed string "identitytoolkit#SetAccountInfoResponse". */
		kind: FormControl<string | null | undefined>,

		/** The local ID of the user. */
		localId: FormControl<string | null | undefined>,

		/** The new email the user attempts to change to. */
		newEmail: FormControl<string | null | undefined>,

		/** The user's hashed password. */
		passwordHash: FormControl<string | null | undefined>,

		/** The photo url of the user. */
		photoUrl: FormControl<string | null | undefined>,

		/** If idToken is STS id token, then this field will be refresh token. */
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateSetAccountInfoResponseFormGroup() {
		return new FormGroup<SetAccountInfoResponseFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			emailVerified: new FormControl<boolean | null | undefined>(undefined),
			expiresIn: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			localId: new FormControl<string | null | undefined>(undefined),
			newEmail: new FormControl<string | null | undefined>(undefined),
			passwordHash: new FormControl<string | null | undefined>(undefined),
			photoUrl: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetAccountInfoResponseProviderUserInfo {

		/** The user's display name at the IDP. */
		displayName?: string | null;

		/** User's identifier at IDP. */
		federatedId?: string | null;

		/** The user's photo url at the IDP. */
		photoUrl?: string | null;

		/** The IdP ID. For whitelisted IdPs it's a short domain name, e.g., google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier. */
		providerId?: string | null;
	}
	export interface SetAccountInfoResponseProviderUserInfoFormProperties {

		/** The user's display name at the IDP. */
		displayName: FormControl<string | null | undefined>,

		/** User's identifier at IDP. */
		federatedId: FormControl<string | null | undefined>,

		/** The user's photo url at the IDP. */
		photoUrl: FormControl<string | null | undefined>,

		/** The IdP ID. For whitelisted IdPs it's a short domain name, e.g., google.com, aol.com, live.net and yahoo.com. For other OpenID IdPs it's the OP identifier. */
		providerId: FormControl<string | null | undefined>,
	}
	export function CreateSetAccountInfoResponseProviderUserInfoFormGroup() {
		return new FormGroup<SetAccountInfoResponseProviderUserInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			federatedId: new FormControl<string | null | undefined>(undefined),
			photoUrl: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of signing up new user, creating anonymous user or anonymous user reauth. */
	export interface SignupNewUserResponse {

		/** The name of the user. */
		displayName?: string | null;

		/** The email of the user. */
		email?: string | null;

		/** If idToken is STS id token, then this field will be expiration time of STS id token in seconds. */
		expiresIn?: string | null;

		/** The Gitkit id token to login the newly sign up user. */
		idToken?: string | null;

		/** The fixed string "identitytoolkit#SignupNewUserResponse". */
		kind?: string | null;

		/** The RP local ID of the user. */
		localId?: string | null;

		/** If idToken is STS id token, then this field will be refresh token. */
		refreshToken?: string | null;
	}

	/** Response of signing up new user, creating anonymous user or anonymous user reauth. */
	export interface SignupNewUserResponseFormProperties {

		/** The name of the user. */
		displayName: FormControl<string | null | undefined>,

		/** The email of the user. */
		email: FormControl<string | null | undefined>,

		/** If idToken is STS id token, then this field will be expiration time of STS id token in seconds. */
		expiresIn: FormControl<string | null | undefined>,

		/** The Gitkit id token to login the newly sign up user. */
		idToken: FormControl<string | null | undefined>,

		/** The fixed string "identitytoolkit#SignupNewUserResponse". */
		kind: FormControl<string | null | undefined>,

		/** The RP local ID of the user. */
		localId: FormControl<string | null | undefined>,

		/** If idToken is STS id token, then this field will be refresh token. */
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateSignupNewUserResponseFormGroup() {
		return new FormGroup<SignupNewUserResponseFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			expiresIn: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			localId: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Respone of uploading accounts in batch. */
	export interface UploadAccountResponse {

		/** The error encountered while processing the account info. */
		UploadAccountResponseError?: Array<UploadAccountResponseError>;

		/** The fixed string "identitytoolkit#UploadAccountResponse". */
		kind?: string | null;
	}

	/** Respone of uploading accounts in batch. */
	export interface UploadAccountResponseFormProperties {

		/** The fixed string "identitytoolkit#UploadAccountResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateUploadAccountResponseFormGroup() {
		return new FormGroup<UploadAccountResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UploadAccountResponseError {

		/** The index of the malformed account, starting from 0. */
		index?: number | null;

		/** Detailed error message for the account info. */
		message?: string | null;
	}
	export interface UploadAccountResponseErrorFormProperties {

		/** The index of the malformed account, starting from 0. */
		index: FormControl<number | null | undefined>,

		/** Detailed error message for the account info. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateUploadAccountResponseErrorFormGroup() {
		return new FormGroup<UploadAccountResponseErrorFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of verifying the IDP assertion. */
	export interface VerifyAssertionResponse {

		/** The action code. */
		action?: string | null;

		/** URL for OTA app installation. */
		appInstallationUrl?: string | null;

		/** The custom scheme used by mobile app. */
		appScheme?: string | null;

		/** The opaque value used by the client to maintain context info between the authentication request and the IDP callback. */
		context?: string | null;

		/** The birth date of the IdP account. */
		dateOfBirth?: string | null;

		/** The display name of the user. */
		displayName?: string | null;

		/** The email returned by the IdP. NOTE: The federated login user may not own the email. */
		email?: string | null;

		/** It's true if the email is recycled. */
		emailRecycled?: boolean | null;

		/** The value is true if the IDP is also the email provider. It means the user owns the email. */
		emailVerified?: boolean | null;

		/** Client error code. */
		errorMessage?: string | null;

		/** If idToken is STS id token, then this field will be expiration time of STS id token in seconds. */
		expiresIn?: string | null;

		/** The unique ID identifies the IdP account. */
		federatedId?: string | null;

		/** The first name of the user. */
		firstName?: string | null;

		/** The full name of the user. */
		fullName?: string | null;

		/** The ID token. */
		idToken?: string | null;

		/** It's the identifier param in the createAuthUri request if the identifier is an email. It can be used to check whether the user input email is different from the asserted email. */
		inputEmail?: string | null;

		/** True if it's a new user sign-in, false if it's a returning user. */
		isNewUser?: boolean | null;

		/** The fixed string "identitytoolkit#VerifyAssertionResponse". */
		kind?: string | null;

		/** The language preference of the user. */
		language?: string | null;

		/** The last name of the user. */
		lastName?: string | null;

		/** The RP local ID if it's already been mapped to the IdP account identified by the federated ID. */
		localId?: string | null;

		/** Whether the assertion is from a non-trusted IDP and need account linking confirmation. */
		needConfirmation?: boolean | null;

		/** Whether need client to supply email to complete the federated login flow. */
		needEmail?: boolean | null;

		/** The nick name of the user. */
		nickName?: string | null;

		/** The OAuth2 access token. */
		oauthAccessToken?: string | null;

		/** The OAuth2 authorization code. */
		oauthAuthorizationCode?: string | null;

		/** The lifetime in seconds of the OAuth2 access token. */
		oauthExpireIn?: number | null;

		/** The OIDC id token. */
		oauthIdToken?: string | null;

		/** The user approved request token for the OpenID OAuth extension. */
		oauthRequestToken?: string | null;

		/** The scope for the OpenID OAuth extension. */
		oauthScope?: string | null;

		/** The OAuth1 access token secret. */
		oauthTokenSecret?: string | null;

		/** The original email stored in the mapping storage. It's returned when the federated ID is associated to a different email. */
		originalEmail?: string | null;

		/** The URI of the public accessible profiel picture. */
		photoUrl?: string | null;

		/** The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. If the "providerId" param is set to OpenID OP identifer other than the whilte listed IdPs the OP identifier is returned. If the "identifier" param is federated ID in the createAuthUri request. The domain part of the federated ID is returned. */
		providerId?: string | null;

		/** Raw IDP-returned user info. */
		rawUserInfo?: string | null;

		/** If idToken is STS id token, then this field will be refresh token. */
		refreshToken?: string | null;

		/** The screen_name of a Twitter user or the login name at Github. */
		screenName?: string | null;

		/** The timezone of the user. */
		timeZone?: string | null;

		/** When action is 'map', contains the idps which can be used for confirmation. */
		verifiedProvider?: Array<string>;
	}

	/** Response of verifying the IDP assertion. */
	export interface VerifyAssertionResponseFormProperties {

		/** The action code. */
		action: FormControl<string | null | undefined>,

		/** URL for OTA app installation. */
		appInstallationUrl: FormControl<string | null | undefined>,

		/** The custom scheme used by mobile app. */
		appScheme: FormControl<string | null | undefined>,

		/** The opaque value used by the client to maintain context info between the authentication request and the IDP callback. */
		context: FormControl<string | null | undefined>,

		/** The birth date of the IdP account. */
		dateOfBirth: FormControl<string | null | undefined>,

		/** The display name of the user. */
		displayName: FormControl<string | null | undefined>,

		/** The email returned by the IdP. NOTE: The federated login user may not own the email. */
		email: FormControl<string | null | undefined>,

		/** It's true if the email is recycled. */
		emailRecycled: FormControl<boolean | null | undefined>,

		/** The value is true if the IDP is also the email provider. It means the user owns the email. */
		emailVerified: FormControl<boolean | null | undefined>,

		/** Client error code. */
		errorMessage: FormControl<string | null | undefined>,

		/** If idToken is STS id token, then this field will be expiration time of STS id token in seconds. */
		expiresIn: FormControl<string | null | undefined>,

		/** The unique ID identifies the IdP account. */
		federatedId: FormControl<string | null | undefined>,

		/** The first name of the user. */
		firstName: FormControl<string | null | undefined>,

		/** The full name of the user. */
		fullName: FormControl<string | null | undefined>,

		/** The ID token. */
		idToken: FormControl<string | null | undefined>,

		/** It's the identifier param in the createAuthUri request if the identifier is an email. It can be used to check whether the user input email is different from the asserted email. */
		inputEmail: FormControl<string | null | undefined>,

		/** True if it's a new user sign-in, false if it's a returning user. */
		isNewUser: FormControl<boolean | null | undefined>,

		/** The fixed string "identitytoolkit#VerifyAssertionResponse". */
		kind: FormControl<string | null | undefined>,

		/** The language preference of the user. */
		language: FormControl<string | null | undefined>,

		/** The last name of the user. */
		lastName: FormControl<string | null | undefined>,

		/** The RP local ID if it's already been mapped to the IdP account identified by the federated ID. */
		localId: FormControl<string | null | undefined>,

		/** Whether the assertion is from a non-trusted IDP and need account linking confirmation. */
		needConfirmation: FormControl<boolean | null | undefined>,

		/** Whether need client to supply email to complete the federated login flow. */
		needEmail: FormControl<boolean | null | undefined>,

		/** The nick name of the user. */
		nickName: FormControl<string | null | undefined>,

		/** The OAuth2 access token. */
		oauthAccessToken: FormControl<string | null | undefined>,

		/** The OAuth2 authorization code. */
		oauthAuthorizationCode: FormControl<string | null | undefined>,

		/** The lifetime in seconds of the OAuth2 access token. */
		oauthExpireIn: FormControl<number | null | undefined>,

		/** The OIDC id token. */
		oauthIdToken: FormControl<string | null | undefined>,

		/** The user approved request token for the OpenID OAuth extension. */
		oauthRequestToken: FormControl<string | null | undefined>,

		/** The scope for the OpenID OAuth extension. */
		oauthScope: FormControl<string | null | undefined>,

		/** The OAuth1 access token secret. */
		oauthTokenSecret: FormControl<string | null | undefined>,

		/** The original email stored in the mapping storage. It's returned when the federated ID is associated to a different email. */
		originalEmail: FormControl<string | null | undefined>,

		/** The URI of the public accessible profiel picture. */
		photoUrl: FormControl<string | null | undefined>,

		/** The IdP ID. For white listed IdPs it's a short domain name e.g. google.com, aol.com, live.net and yahoo.com. If the "providerId" param is set to OpenID OP identifer other than the whilte listed IdPs the OP identifier is returned. If the "identifier" param is federated ID in the createAuthUri request. The domain part of the federated ID is returned. */
		providerId: FormControl<string | null | undefined>,

		/** Raw IDP-returned user info. */
		rawUserInfo: FormControl<string | null | undefined>,

		/** If idToken is STS id token, then this field will be refresh token. */
		refreshToken: FormControl<string | null | undefined>,

		/** The screen_name of a Twitter user or the login name at Github. */
		screenName: FormControl<string | null | undefined>,

		/** The timezone of the user. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateVerifyAssertionResponseFormGroup() {
		return new FormGroup<VerifyAssertionResponseFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			appInstallationUrl: new FormControl<string | null | undefined>(undefined),
			appScheme: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<string | null | undefined>(undefined),
			dateOfBirth: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			emailRecycled: new FormControl<boolean | null | undefined>(undefined),
			emailVerified: new FormControl<boolean | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			expiresIn: new FormControl<string | null | undefined>(undefined),
			federatedId: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			inputEmail: new FormControl<string | null | undefined>(undefined),
			isNewUser: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			localId: new FormControl<string | null | undefined>(undefined),
			needConfirmation: new FormControl<boolean | null | undefined>(undefined),
			needEmail: new FormControl<boolean | null | undefined>(undefined),
			nickName: new FormControl<string | null | undefined>(undefined),
			oauthAccessToken: new FormControl<string | null | undefined>(undefined),
			oauthAuthorizationCode: new FormControl<string | null | undefined>(undefined),
			oauthExpireIn: new FormControl<number | null | undefined>(undefined),
			oauthIdToken: new FormControl<string | null | undefined>(undefined),
			oauthRequestToken: new FormControl<string | null | undefined>(undefined),
			oauthScope: new FormControl<string | null | undefined>(undefined),
			oauthTokenSecret: new FormControl<string | null | undefined>(undefined),
			originalEmail: new FormControl<string | null | undefined>(undefined),
			photoUrl: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			rawUserInfo: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
			screenName: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response from verifying a custom token */
	export interface VerifyCustomTokenResponse {

		/** If idToken is STS id token, then this field will be expiration time of STS id token in seconds. */
		expiresIn?: string | null;

		/** The GITKit token for authenticated user. */
		idToken?: string | null;

		/** True if it's a new user sign-in, false if it's a returning user. */
		isNewUser?: boolean | null;

		/** The fixed string "identitytoolkit#VerifyCustomTokenResponse". */
		kind?: string | null;

		/** If idToken is STS id token, then this field will be refresh token. */
		refreshToken?: string | null;
	}

	/** Response from verifying a custom token */
	export interface VerifyCustomTokenResponseFormProperties {

		/** If idToken is STS id token, then this field will be expiration time of STS id token in seconds. */
		expiresIn: FormControl<string | null | undefined>,

		/** The GITKit token for authenticated user. */
		idToken: FormControl<string | null | undefined>,

		/** True if it's a new user sign-in, false if it's a returning user. */
		isNewUser: FormControl<boolean | null | undefined>,

		/** The fixed string "identitytoolkit#VerifyCustomTokenResponse". */
		kind: FormControl<string | null | undefined>,

		/** If idToken is STS id token, then this field will be refresh token. */
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateVerifyCustomTokenResponseFormGroup() {
		return new FormGroup<VerifyCustomTokenResponseFormProperties>({
			expiresIn: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			isNewUser: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request of verifying the password. */
	export interface VerifyPasswordResponse {

		/** The name of the user. */
		displayName?: string | null;

		/** The email returned by the IdP. NOTE: The federated login user may not own the email. */
		email?: string | null;

		/** If idToken is STS id token, then this field will be expiration time of STS id token in seconds. */
		expiresIn?: string | null;

		/** The GITKit token for authenticated user. */
		idToken?: string | null;

		/** The fixed string "identitytoolkit#VerifyPasswordResponse". */
		kind?: string | null;

		/** The RP local ID if it's already been mapped to the IdP account identified by the federated ID. */
		localId?: string | null;

		/** The OAuth2 access token. */
		oauthAccessToken?: string | null;

		/** The OAuth2 authorization code. */
		oauthAuthorizationCode?: string | null;

		/** The lifetime in seconds of the OAuth2 access token. */
		oauthExpireIn?: number | null;

		/** The URI of the user's photo at IdP */
		photoUrl?: string | null;

		/** If idToken is STS id token, then this field will be refresh token. */
		refreshToken?: string | null;

		/** Whether the email is registered. */
		registered?: boolean | null;
	}

	/** Request of verifying the password. */
	export interface VerifyPasswordResponseFormProperties {

		/** The name of the user. */
		displayName: FormControl<string | null | undefined>,

		/** The email returned by the IdP. NOTE: The federated login user may not own the email. */
		email: FormControl<string | null | undefined>,

		/** If idToken is STS id token, then this field will be expiration time of STS id token in seconds. */
		expiresIn: FormControl<string | null | undefined>,

		/** The GITKit token for authenticated user. */
		idToken: FormControl<string | null | undefined>,

		/** The fixed string "identitytoolkit#VerifyPasswordResponse". */
		kind: FormControl<string | null | undefined>,

		/** The RP local ID if it's already been mapped to the IdP account identified by the federated ID. */
		localId: FormControl<string | null | undefined>,

		/** The OAuth2 access token. */
		oauthAccessToken: FormControl<string | null | undefined>,

		/** The OAuth2 authorization code. */
		oauthAuthorizationCode: FormControl<string | null | undefined>,

		/** The lifetime in seconds of the OAuth2 access token. */
		oauthExpireIn: FormControl<number | null | undefined>,

		/** The URI of the user's photo at IdP */
		photoUrl: FormControl<string | null | undefined>,

		/** If idToken is STS id token, then this field will be refresh token. */
		refreshToken: FormControl<string | null | undefined>,

		/** Whether the email is registered. */
		registered: FormControl<boolean | null | undefined>,
	}
	export function CreateVerifyPasswordResponseFormGroup() {
		return new FormGroup<VerifyPasswordResponseFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			expiresIn: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			localId: new FormControl<string | null | undefined>(undefined),
			oauthAccessToken: new FormControl<string | null | undefined>(undefined),
			oauthAuthorizationCode: new FormControl<string | null | undefined>(undefined),
			oauthExpireIn: new FormControl<number | null | undefined>(undefined),
			photoUrl: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
			registered: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates the URI used by the IdP to authenticate the user.
		 * Post createAuthUri
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_createAuthUri(requestBody: IdentitytoolkitRelyingpartyCreateAuthUriRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'createAuthUri', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete user account.
		 * Post deleteAccount
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_deleteAccount(requestBody: IdentitytoolkitRelyingpartyDeleteAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'deleteAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Batch download user accounts.
		 * Post downloadAccount
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_downloadAccount(requestBody: IdentitytoolkitRelyingpartyDownloadAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'downloadAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset password for a user.
		 * Post emailLinkSignin
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_emailLinkSignin(requestBody: IdentitytoolkitRelyingpartyEmailLinkSigninRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'emailLinkSignin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the account info.
		 * Post getAccountInfo
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_getAccountInfo(requestBody: IdentitytoolkitRelyingpartyGetAccountInfoRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'getAccountInfo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a code for user action confirmation.
		 * Post getOobConfirmationCode
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_getOobConfirmationCode(requestBody: Relyingparty): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'getOobConfirmationCode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get project configuration.
		 * Get getProjectConfig
		 * @param {string} delegatedProjectNumber Delegated GCP project number of the request.
		 * @param {string} projectNumber GCP project number of the request.
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_getProjectConfig(delegatedProjectNumber: string | null | undefined, projectNumber: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getProjectConfig?delegatedProjectNumber=' + (delegatedProjectNumber == null ? '' : encodeURIComponent(delegatedProjectNumber)) + '&projectNumber=' + (projectNumber == null ? '' : encodeURIComponent(projectNumber)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get recaptcha secure param.
		 * Get getRecaptchaParam
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_getRecaptchaParam(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'getRecaptchaParam', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get token signing public key.
		 * Get publicKeys
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_getPublicKeys(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'publicKeys', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset password for a user.
		 * Post resetPassword
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_resetPassword(requestBody: IdentitytoolkitRelyingpartyResetPasswordRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'resetPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Send SMS verification code.
		 * Post sendVerificationCode
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_sendVerificationCode(requestBody: IdentitytoolkitRelyingpartySendVerificationCodeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sendVerificationCode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Set account info for a user.
		 * Post setAccountInfo
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_setAccountInfo(requestBody: IdentitytoolkitRelyingpartySetAccountInfoRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'setAccountInfo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Set project configuration.
		 * Post setProjectConfig
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_setProjectConfig(requestBody: IdentitytoolkitRelyingpartySetProjectConfigRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'setProjectConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sign out user.
		 * Post signOutUser
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_signOutUser(requestBody: IdentitytoolkitRelyingpartySignOutUserRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'signOutUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Signup new user.
		 * Post signupNewUser
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_signupNewUser(requestBody: IdentitytoolkitRelyingpartySignupNewUserRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'signupNewUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Batch upload existing user accounts.
		 * Post uploadAccount
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_uploadAccount(requestBody: IdentitytoolkitRelyingpartyUploadAccountRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'uploadAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verifies the assertion returned by the IdP.
		 * Post verifyAssertion
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_verifyAssertion(requestBody: IdentitytoolkitRelyingpartyVerifyAssertionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'verifyAssertion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verifies the developer asserted ID token.
		 * Post verifyCustomToken
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_verifyCustomToken(requestBody: IdentitytoolkitRelyingpartyVerifyCustomTokenRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'verifyCustomToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verifies the user entered password.
		 * Post verifyPassword
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_verifyPassword(requestBody: IdentitytoolkitRelyingpartyVerifyPasswordRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'verifyPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verifies ownership of a phone number and creates/updates the user account accordingly.
		 * Post verifyPhoneNumber
		 * @return {void} Successful response
		 */
		Identitytoolkit_relyingparty_verifyPhoneNumber(requestBody: IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'verifyPhoneNumber', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

