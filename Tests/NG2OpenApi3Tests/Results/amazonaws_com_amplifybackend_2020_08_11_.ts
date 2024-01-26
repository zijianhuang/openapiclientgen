import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CloneBackendResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		Error?: string;
		JobId?: string;
		Operation?: string;
		Status?: string;
	}
	export interface CloneBackendResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateCloneBackendResponseFormGroup() {
		return new FormGroup<CloneBackendResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface GatewayTimeoutException {
	}
	export interface GatewayTimeoutExceptionFormProperties {
	}
	export function CreateGatewayTimeoutExceptionFormGroup() {
		return new FormGroup<GatewayTimeoutExceptionFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface CreateBackendResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		Error?: string;
		JobId?: string;
		Operation?: string;
		Status?: string;
	}
	export interface CreateBackendResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendResponseFormGroup() {
		return new FormGroup<CreateBackendResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackendAPIResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		Error?: string;
		JobId?: string;
		Operation?: string;
		Status?: string;
	}
	export interface CreateBackendAPIResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendAPIResponseFormGroup() {
		return new FormGroup<CreateBackendAPIResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the auth types for your configured data models. */
	export interface BackendAPIAuthType {
		Mode?: Mode;
		Settings?: BackendAPIAppSyncAuthSettings;
	}

	/** Describes the auth types for your configured data models. */
	export interface BackendAPIAuthTypeFormProperties {
		Mode: FormControl<Mode | null | undefined>,
	}
	export function CreateBackendAPIAuthTypeFormGroup() {
		return new FormGroup<BackendAPIAuthTypeFormProperties>({
			Mode: new FormControl<Mode | null | undefined>(undefined),
		});

	}

	export enum Mode { API_KEY = 0, AWS_IAM = 1, AMAZON_COGNITO_USER_POOLS = 2, OPENID_CONNECT = 3 }


	/** The authentication settings for accessing provisioned data models in your Amplify project. */
	export interface BackendAPIAppSyncAuthSettings {
		CognitoUserPoolId?: string;
		Description?: string;
		ExpirationTime?: number | null;
		OpenIDAuthTTL?: string;
		OpenIDClientId?: string;
		OpenIDIatTTL?: string;
		OpenIDIssueURL?: string;
		OpenIDProviderName?: string;
	}

	/** The authentication settings for accessing provisioned data models in your Amplify project. */
	export interface BackendAPIAppSyncAuthSettingsFormProperties {
		CognitoUserPoolId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ExpirationTime: FormControl<number | null | undefined>,
		OpenIDAuthTTL: FormControl<string | null | undefined>,
		OpenIDClientId: FormControl<string | null | undefined>,
		OpenIDIatTTL: FormControl<string | null | undefined>,
		OpenIDIssueURL: FormControl<string | null | undefined>,
		OpenIDProviderName: FormControl<string | null | undefined>,
	}
	export function CreateBackendAPIAppSyncAuthSettingsFormGroup() {
		return new FormGroup<BackendAPIAppSyncAuthSettingsFormProperties>({
			CognitoUserPoolId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ExpirationTime: new FormControl<number | null | undefined>(undefined),
			OpenIDAuthTTL: new FormControl<string | null | undefined>(undefined),
			OpenIDClientId: new FormControl<string | null | undefined>(undefined),
			OpenIDIatTTL: new FormControl<string | null | undefined>(undefined),
			OpenIDIssueURL: new FormControl<string | null | undefined>(undefined),
			OpenIDProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the conflict resolution configuration for your data model configured in your Amplify project. */
	export interface BackendAPIConflictResolution {
		ResolutionStrategy?: ResolutionStrategy;
	}

	/** Describes the conflict resolution configuration for your data model configured in your Amplify project. */
	export interface BackendAPIConflictResolutionFormProperties {
		ResolutionStrategy: FormControl<ResolutionStrategy | null | undefined>,
	}
	export function CreateBackendAPIConflictResolutionFormGroup() {
		return new FormGroup<BackendAPIConflictResolutionFormProperties>({
			ResolutionStrategy: new FormControl<ResolutionStrategy | null | undefined>(undefined),
		});

	}

	export enum ResolutionStrategy { OPTIMISTIC_CONCURRENCY = 0, LAMBDA = 1, AUTOMERGE = 2, NONE = 3 }

	export interface CreateBackendAuthResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		Error?: string;
		JobId?: string;
		Operation?: string;
		Status?: string;
	}
	export interface CreateBackendAuthResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendAuthResponseFormGroup() {
		return new FormGroup<CreateBackendAuthResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuthResources { USER_POOL_ONLY = 0, IDENTITY_POOL_AND_USER_POOL = 1 }


	/** Describes authorization configurations for the auth resources, configured as a part of your Amplify project. */
	export interface CreateBackendAuthIdentityPoolConfig {

		/** Required */
		IdentityPoolName: string;

		/** Required */
		UnauthenticatedLogin: boolean;
	}

	/** Describes authorization configurations for the auth resources, configured as a part of your Amplify project. */
	export interface CreateBackendAuthIdentityPoolConfigFormProperties {

		/** Required */
		IdentityPoolName: FormControl<string | null | undefined>,

		/** Required */
		UnauthenticatedLogin: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateBackendAuthIdentityPoolConfigFormGroup() {
		return new FormGroup<CreateBackendAuthIdentityPoolConfigFormProperties>({
			IdentityPoolName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UnauthenticatedLogin: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Service { COGNITO = 0 }


	/** Describes the Amazon Cognito user pool configuration for the auth resource to be configured for your Amplify project. */
	export interface CreateBackendAuthUserPoolConfig {
		ForgotPassword?: CreateBackendAuthForgotPasswordConfig;
		Mfa?: CreateBackendAuthMFAConfig;
		OAuth?: CreateBackendAuthOAuthConfig;
		PasswordPolicy?: CreateBackendAuthPasswordPolicyConfig;

		/** Required */
		RequiredSignUpAttributes: Array<RequiredSignUpAttributesElement>;

		/** Required */
		SignInMethod: SignInMethod;

		/** Required */
		UserPoolName: string;
		VerificationMessage?: CreateBackendAuthVerificationMessageConfig;
	}

	/** Describes the Amazon Cognito user pool configuration for the auth resource to be configured for your Amplify project. */
	export interface CreateBackendAuthUserPoolConfigFormProperties {

		/** Required */
		SignInMethod: FormControl<SignInMethod | null | undefined>,

		/** Required */
		UserPoolName: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendAuthUserPoolConfigFormGroup() {
		return new FormGroup<CreateBackendAuthUserPoolConfigFormProperties>({
			SignInMethod: new FormControl<SignInMethod | null | undefined>(undefined, [Validators.required]),
			UserPoolName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <b>(DEPRECATED)</b> Describes the forgot password policy for authenticating into the Amplify app. */
	export interface CreateBackendAuthForgotPasswordConfig {

		/** Required */
		DeliveryMethod: DeliveryMethod;
		EmailSettings?: EmailSettings;
		SmsSettings?: SmsSettings;
	}

	/** <b>(DEPRECATED)</b> Describes the forgot password policy for authenticating into the Amplify app. */
	export interface CreateBackendAuthForgotPasswordConfigFormProperties {

		/** Required */
		DeliveryMethod: FormControl<DeliveryMethod | null | undefined>,
	}
	export function CreateCreateBackendAuthForgotPasswordConfigFormGroup() {
		return new FormGroup<CreateBackendAuthForgotPasswordConfigFormProperties>({
			DeliveryMethod: new FormControl<DeliveryMethod | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The type of verification message to send. */
	export enum DeliveryMethod { EMAIL = 0, SMS = 1 }


	/** The configuration for the email sent when an app user forgets their password. */
	export interface EmailSettings {
		EmailMessage?: string;
		EmailSubject?: string;
	}

	/** The configuration for the email sent when an app user forgets their password. */
	export interface EmailSettingsFormProperties {
		EmailMessage: FormControl<string | null | undefined>,
		EmailSubject: FormControl<string | null | undefined>,
	}
	export function CreateEmailSettingsFormGroup() {
		return new FormGroup<EmailSettingsFormProperties>({
			EmailMessage: new FormControl<string | null | undefined>(undefined),
			EmailSubject: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SMS settings for authentication. */
	export interface SmsSettings {
		SmsMessage?: string;
	}

	/** SMS settings for authentication. */
	export interface SmsSettingsFormProperties {
		SmsMessage: FormControl<string | null | undefined>,
	}
	export function CreateSmsSettingsFormGroup() {
		return new FormGroup<SmsSettingsFormProperties>({
			SmsMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project. */
	export interface CreateBackendAuthMFAConfig {

		/** Required */
		MFAMode: MFAMode;
		Settings?: Settings;
	}

	/** Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project. */
	export interface CreateBackendAuthMFAConfigFormProperties {

		/** Required */
		MFAMode: FormControl<MFAMode | null | undefined>,
	}
	export function CreateCreateBackendAuthMFAConfigFormGroup() {
		return new FormGroup<CreateBackendAuthMFAConfigFormProperties>({
			MFAMode: new FormControl<MFAMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MFAMode { ON = 0, OFF = 1, OPTIONAL = 2 }


	/** The settings of your MFA configuration for the backend of your Amplify project. */
	export interface Settings {
		MfaTypes?: Array<MfaTypesElement>;
		SmsMessage?: string;
	}

	/** The settings of your MFA configuration for the backend of your Amplify project. */
	export interface SettingsFormProperties {
		SmsMessage: FormControl<string | null | undefined>,
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
			SmsMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MfaTypesElement { SMS = 0, TOTP = 1 }


	/** Creates the OAuth configuration for your Amplify project. */
	export interface CreateBackendAuthOAuthConfig {
		DomainPrefix?: string;

		/** Required */
		OAuthGrantType: OAuthGrantType;

		/** Required */
		OAuthScopes: Array<OAuthScopesElement>;

		/** Required */
		RedirectSignInURIs: Array<string>;

		/** Required */
		RedirectSignOutURIs: Array<string>;
		SocialProviderSettings?: SocialProviderSettings;
	}

	/** Creates the OAuth configuration for your Amplify project. */
	export interface CreateBackendAuthOAuthConfigFormProperties {
		DomainPrefix: FormControl<string | null | undefined>,

		/** Required */
		OAuthGrantType: FormControl<OAuthGrantType | null | undefined>,
	}
	export function CreateCreateBackendAuthOAuthConfigFormGroup() {
		return new FormGroup<CreateBackendAuthOAuthConfigFormProperties>({
			DomainPrefix: new FormControl<string | null | undefined>(undefined),
			OAuthGrantType: new FormControl<OAuthGrantType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OAuthGrantType { CODE = 0, IMPLICIT = 1 }

	export enum OAuthScopesElement { PHONE = 0, EMAIL = 1, OPENID = 2, PROFILE = 3, AWS_COGNITO_SIGNIN_USER_ADMIN = 4 }


	/** The settings for using the social identity providers for access to your Amplify app. */
	export interface SocialProviderSettings {

		/** Describes third-party social federation configurations for allowing your app users to sign in using OAuth. */
		Facebook?: BackendAuthSocialProviderConfig;

		/** Describes third-party social federation configurations for allowing your app users to sign in using OAuth. */
		Google?: BackendAuthSocialProviderConfig;

		/** Describes third-party social federation configurations for allowing your app users to sign in using OAuth. */
		LoginWithAmazon?: BackendAuthSocialProviderConfig;

		/** Describes Apple social federation configurations for allowing your app users to sign in using OAuth. */
		SignInWithApple?: BackendAuthAppleProviderConfig;
	}

	/** The settings for using the social identity providers for access to your Amplify app. */
	export interface SocialProviderSettingsFormProperties {
	}
	export function CreateSocialProviderSettingsFormGroup() {
		return new FormGroup<SocialProviderSettingsFormProperties>({
		});

	}


	/** Describes third-party social federation configurations for allowing your app users to sign in using OAuth. */
	export interface BackendAuthSocialProviderConfig {
		ClientId?: string;
		ClientSecret?: string;
	}

	/** Describes third-party social federation configurations for allowing your app users to sign in using OAuth. */
	export interface BackendAuthSocialProviderConfigFormProperties {
		ClientId: FormControl<string | null | undefined>,
		ClientSecret: FormControl<string | null | undefined>,
	}
	export function CreateBackendAuthSocialProviderConfigFormGroup() {
		return new FormGroup<BackendAuthSocialProviderConfigFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined),
			ClientSecret: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes Apple social federation configurations for allowing your app users to sign in using OAuth. */
	export interface BackendAuthAppleProviderConfig {
		ClientId?: string;
		KeyId?: string;
		PrivateKey?: string;
		TeamId?: string;
	}

	/** Describes Apple social federation configurations for allowing your app users to sign in using OAuth. */
	export interface BackendAuthAppleProviderConfigFormProperties {
		ClientId: FormControl<string | null | undefined>,
		KeyId: FormControl<string | null | undefined>,
		PrivateKey: FormControl<string | null | undefined>,
		TeamId: FormControl<string | null | undefined>,
	}
	export function CreateBackendAuthAppleProviderConfigFormGroup() {
		return new FormGroup<BackendAuthAppleProviderConfigFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined),
			KeyId: new FormControl<string | null | undefined>(undefined),
			PrivateKey: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The password policy configuration for the backend to your Amplify project. */
	export interface CreateBackendAuthPasswordPolicyConfig {
		AdditionalConstraints?: Array<AdditionalConstraintsElement>;

		/** Required */
		MinimumLength: number;
	}

	/** The password policy configuration for the backend to your Amplify project. */
	export interface CreateBackendAuthPasswordPolicyConfigFormProperties {

		/** Required */
		MinimumLength: FormControl<number | null | undefined>,
	}
	export function CreateCreateBackendAuthPasswordPolicyConfigFormGroup() {
		return new FormGroup<CreateBackendAuthPasswordPolicyConfigFormProperties>({
			MinimumLength: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AdditionalConstraintsElement { REQUIRE_DIGIT = 0, REQUIRE_LOWERCASE = 1, REQUIRE_SYMBOL = 2, REQUIRE_UPPERCASE = 3 }

	export enum RequiredSignUpAttributesElement { ADDRESS = 0, BIRTHDATE = 1, EMAIL = 2, FAMILY_NAME = 3, GENDER = 4, GIVEN_NAME = 5, LOCALE = 6, MIDDLE_NAME = 7, NAME = 8, NICKNAME = 9, PHONE_NUMBER = 10, PICTURE = 11, PREFERRED_USERNAME = 12, PROFILE = 13, UPDATED_AT = 14, WEBSITE = 15, ZONE_INFO = 16 }

	export enum SignInMethod { EMAIL = 0, EMAIL_AND_PHONE_NUMBER = 1, PHONE_NUMBER = 2, USERNAME = 3 }


	/** Creates an email or SMS verification message for the auth resource configured for your Amplify project. */
	export interface CreateBackendAuthVerificationMessageConfig {

		/** Required */
		DeliveryMethod: DeliveryMethod;
		EmailSettings?: EmailSettings;
		SmsSettings?: SmsSettings;
	}

	/** Creates an email or SMS verification message for the auth resource configured for your Amplify project. */
	export interface CreateBackendAuthVerificationMessageConfigFormProperties {

		/** Required */
		DeliveryMethod: FormControl<DeliveryMethod | null | undefined>,
	}
	export function CreateCreateBackendAuthVerificationMessageConfigFormGroup() {
		return new FormGroup<CreateBackendAuthVerificationMessageConfigFormProperties>({
			DeliveryMethod: new FormControl<DeliveryMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBackendConfigResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		JobId?: string;
		Status?: string;
	}
	export interface CreateBackendConfigResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendConfigResponseFormGroup() {
		return new FormGroup<CreateBackendConfigResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackendStorageResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		JobId?: string;
		Status?: string;
	}
	export interface CreateBackendStorageResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendStorageResponseFormGroup() {
		return new FormGroup<CreateBackendStorageResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the read, write, and delete permissions users have against your storage S3 bucket. */
	export interface BackendStoragePermissions {

		/** Required */
		Authenticated: Array<AuthenticatedElement>;
		UnAuthenticated?: Array<UnAuthenticatedElement>;
	}

	/** Describes the read, write, and delete permissions users have against your storage S3 bucket. */
	export interface BackendStoragePermissionsFormProperties {
	}
	export function CreateBackendStoragePermissionsFormGroup() {
		return new FormGroup<BackendStoragePermissionsFormProperties>({
		});

	}

	export enum AuthenticatedElement { READ = 0, CREATE_AND_UPDATE = 1, DELETE = 2 }

	export enum UnAuthenticatedElement { READ = 0, CREATE_AND_UPDATE = 1, DELETE = 2 }

	export enum ServiceName { S3 = 0 }

	export interface CreateTokenResponse {
		AppId?: string;
		ChallengeCode?: string;
		SessionId?: string;
		Ttl?: string;
	}
	export interface CreateTokenResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		ChallengeCode: FormControl<string | null | undefined>,
		SessionId: FormControl<string | null | undefined>,
		Ttl: FormControl<string | null | undefined>,
	}
	export function CreateCreateTokenResponseFormGroup() {
		return new FormGroup<CreateTokenResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			ChallengeCode: new FormControl<string | null | undefined>(undefined),
			SessionId: new FormControl<string | null | undefined>(undefined),
			Ttl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteBackendResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		Error?: string;
		JobId?: string;
		Operation?: string;
		Status?: string;
	}
	export interface DeleteBackendResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackendResponseFormGroup() {
		return new FormGroup<DeleteBackendResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteBackendAPIResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		Error?: string;
		JobId?: string;
		Operation?: string;
		Status?: string;
	}
	export interface DeleteBackendAPIResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackendAPIResponseFormGroup() {
		return new FormGroup<DeleteBackendAPIResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteBackendAuthResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		Error?: string;
		JobId?: string;
		Operation?: string;
		Status?: string;
	}
	export interface DeleteBackendAuthResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackendAuthResponseFormGroup() {
		return new FormGroup<DeleteBackendAuthResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteBackendStorageResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		JobId?: string;
		Status?: string;
	}
	export interface DeleteBackendStorageResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackendStorageResponseFormGroup() {
		return new FormGroup<DeleteBackendStorageResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteTokenResponse {
		IsSuccess?: boolean | null;
	}
	export interface DeleteTokenResponseFormProperties {
		IsSuccess: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteTokenResponseFormGroup() {
		return new FormGroup<DeleteTokenResponseFormProperties>({
			IsSuccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GenerateBackendAPIModelsResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		Error?: string;
		JobId?: string;
		Operation?: string;
		Status?: string;
	}
	export interface GenerateBackendAPIModelsResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateGenerateBackendAPIModelsResponseFormGroup() {
		return new FormGroup<GenerateBackendAPIModelsResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBackendResponse {
		AmplifyFeatureFlags?: string;
		AmplifyMetaConfig?: string;
		AppId?: string;
		AppName?: string;
		BackendEnvironmentList?: Array<string>;
		BackendEnvironmentName?: string;
		Error?: string;
	}
	export interface GetBackendResponseFormProperties {
		AmplifyFeatureFlags: FormControl<string | null | undefined>,
		AmplifyMetaConfig: FormControl<string | null | undefined>,
		AppId: FormControl<string | null | undefined>,
		AppName: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendResponseFormGroup() {
		return new FormGroup<GetBackendResponseFormProperties>({
			AmplifyFeatureFlags: new FormControl<string | null | undefined>(undefined),
			AmplifyMetaConfig: new FormControl<string | null | undefined>(undefined),
			AppId: new FormControl<string | null | undefined>(undefined),
			AppName: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBackendAPIResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		Error?: string;
		ResourceConfig?: BackendAPIResourceConfig;
		ResourceName?: string;
	}
	export interface GetBackendAPIResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendAPIResponseFormGroup() {
		return new FormGroup<GetBackendAPIResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource config for the data model, configured as a part of the Amplify project. */
	export interface BackendAPIResourceConfig {
		AdditionalAuthTypes?: Array<BackendAPIAuthType>;
		ApiName?: string;
		ConflictResolution?: BackendAPIConflictResolution;
		DefaultAuthType?: BackendAPIAuthType;
		Service?: string;
		TransformSchema?: string;
	}

	/** The resource config for the data model, configured as a part of the Amplify project. */
	export interface BackendAPIResourceConfigFormProperties {
		ApiName: FormControl<string | null | undefined>,
		Service: FormControl<string | null | undefined>,
		TransformSchema: FormControl<string | null | undefined>,
	}
	export function CreateBackendAPIResourceConfigFormGroup() {
		return new FormGroup<BackendAPIResourceConfigFormProperties>({
			ApiName: new FormControl<string | null | undefined>(undefined),
			Service: new FormControl<string | null | undefined>(undefined),
			TransformSchema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBackendAPIModelsResponse {
		Models?: string;
		Status?: Status;
		ModelIntrospectionSchema?: string;
	}
	export interface GetBackendAPIModelsResponseFormProperties {
		Models: FormControl<string | null | undefined>,
		Status: FormControl<Status | null | undefined>,
		ModelIntrospectionSchema: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendAPIModelsResponseFormGroup() {
		return new FormGroup<GetBackendAPIModelsResponseFormProperties>({
			Models: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
			ModelIntrospectionSchema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Status { LATEST = 0, STALE = 1 }

	export interface GetBackendAuthResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		Error?: string;
		ResourceConfig?: CreateBackendAuthResourceConfig;
		ResourceName?: string;
	}
	export interface GetBackendAuthResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendAuthResponseFormGroup() {
		return new FormGroup<GetBackendAuthResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the resource configuration when creating an auth resource in your Amplify project. */
	export interface CreateBackendAuthResourceConfig {

		/** Required */
		AuthResources: AuthResources;
		IdentityPoolConfigs?: CreateBackendAuthIdentityPoolConfig;

		/** Required */
		Service: Service;

		/** Required */
		UserPoolConfigs: CreateBackendAuthUserPoolConfig;
	}

	/** Defines the resource configuration when creating an auth resource in your Amplify project. */
	export interface CreateBackendAuthResourceConfigFormProperties {

		/** Required */
		AuthResources: FormControl<AuthResources | null | undefined>,

		/** Required */
		Service: FormControl<Service | null | undefined>,
	}
	export function CreateCreateBackendAuthResourceConfigFormGroup() {
		return new FormGroup<CreateBackendAuthResourceConfigFormProperties>({
			AuthResources: new FormControl<AuthResources | null | undefined>(undefined, [Validators.required]),
			Service: new FormControl<Service | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBackendJobResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		CreateTime?: string;
		Error?: string;
		JobId?: string;
		Operation?: string;
		Status?: string;
		UpdateTime?: string;
	}
	export interface GetBackendJobResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		CreateTime: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		UpdateTime: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendJobResponseFormGroup() {
		return new FormGroup<GetBackendJobResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			CreateTime: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			UpdateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBackendStorageResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		ResourceConfig?: GetBackendStorageResourceConfig;
		ResourceName?: string;
	}
	export interface GetBackendStorageResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendStorageResponseFormGroup() {
		return new FormGroup<GetBackendStorageResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details for a backend storage resource. */
	export interface GetBackendStorageResourceConfig {
		BucketName?: string;

		/** Required */
		Imported: boolean;
		Permissions?: BackendStoragePermissions;

		/** Required */
		ServiceName: ServiceName;
	}

	/** The details for a backend storage resource. */
	export interface GetBackendStorageResourceConfigFormProperties {
		BucketName: FormControl<string | null | undefined>,

		/** Required */
		Imported: FormControl<boolean | null | undefined>,

		/** Required */
		ServiceName: FormControl<ServiceName | null | undefined>,
	}
	export function CreateGetBackendStorageResourceConfigFormGroup() {
		return new FormGroup<GetBackendStorageResourceConfigFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			Imported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ServiceName: new FormControl<ServiceName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTokenResponse {
		AppId?: string;
		ChallengeCode?: string;
		SessionId?: string;
		Ttl?: string;
	}
	export interface GetTokenResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		ChallengeCode: FormControl<string | null | undefined>,
		SessionId: FormControl<string | null | undefined>,
		Ttl: FormControl<string | null | undefined>,
	}
	export function CreateGetTokenResponseFormGroup() {
		return new FormGroup<GetTokenResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			ChallengeCode: new FormControl<string | null | undefined>(undefined),
			SessionId: new FormControl<string | null | undefined>(undefined),
			Ttl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportBackendAuthResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		Error?: string;
		JobId?: string;
		Operation?: string;
		Status?: string;
	}
	export interface ImportBackendAuthResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateImportBackendAuthResponseFormGroup() {
		return new FormGroup<ImportBackendAuthResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportBackendStorageResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		JobId?: string;
		Status?: string;
	}
	export interface ImportBackendStorageResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateImportBackendStorageResponseFormGroup() {
		return new FormGroup<ImportBackendStorageResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBackendJobsResponse {
		Jobs?: Array<BackendJobRespObj>;
		NextToken?: string;
	}
	export interface ListBackendJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackendJobsResponseFormGroup() {
		return new FormGroup<ListBackendJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response object for this operation. */
	export interface BackendJobRespObj {

		/** Required */
		AppId: string;

		/** Required */
		BackendEnvironmentName: string;
		CreateTime?: string;
		Error?: string;
		JobId?: string;
		Operation?: string;
		Status?: string;
		UpdateTime?: string;
	}

	/** The response object for this operation. */
	export interface BackendJobRespObjFormProperties {

		/** Required */
		AppId: FormControl<string | null | undefined>,

		/** Required */
		BackendEnvironmentName: FormControl<string | null | undefined>,
		CreateTime: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		UpdateTime: FormControl<string | null | undefined>,
	}
	export function CreateBackendJobRespObjFormGroup() {
		return new FormGroup<BackendJobRespObjFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreateTime: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			UpdateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListS3BucketsResponse {
		Buckets?: Array<S3BucketInfo>;
		NextToken?: string;
	}
	export interface ListS3BucketsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListS3BucketsResponseFormGroup() {
		return new FormGroup<ListS3BucketsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the metadata of the S3 bucket. */
	export interface S3BucketInfo {
		CreationDate?: string;
		Name?: string;
	}

	/** Describes the metadata of the S3 bucket. */
	export interface S3BucketInfoFormProperties {
		CreationDate: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateS3BucketInfoFormGroup() {
		return new FormGroup<S3BucketInfoFormProperties>({
			CreationDate: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveAllBackendsResponse {
		AppId?: string;
		Error?: string;
		JobId?: string;
		Operation?: string;
		Status?: string;
	}
	export interface RemoveAllBackendsResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateRemoveAllBackendsResponseFormGroup() {
		return new FormGroup<RemoveAllBackendsResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveBackendConfigResponse {
		Error?: string;
	}
	export interface RemoveBackendConfigResponseFormProperties {
		Error: FormControl<string | null | undefined>,
	}
	export function CreateRemoveBackendConfigResponseFormGroup() {
		return new FormGroup<RemoveBackendConfigResponseFormProperties>({
			Error: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBackendAPIResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		Error?: string;
		JobId?: string;
		Operation?: string;
		Status?: string;
	}
	export interface UpdateBackendAPIResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackendAPIResponseFormGroup() {
		return new FormGroup<UpdateBackendAPIResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBackendAuthResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		Error?: string;
		JobId?: string;
		Operation?: string;
		Status?: string;
	}
	export interface UpdateBackendAuthResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackendAuthResponseFormGroup() {
		return new FormGroup<UpdateBackendAuthResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project. */
	export interface UpdateBackendAuthIdentityPoolConfig {
		UnauthenticatedLogin?: boolean | null;
	}

	/** Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project. */
	export interface UpdateBackendAuthIdentityPoolConfigFormProperties {
		UnauthenticatedLogin: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateBackendAuthIdentityPoolConfigFormGroup() {
		return new FormGroup<UpdateBackendAuthIdentityPoolConfigFormProperties>({
			UnauthenticatedLogin: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes the Amazon Cognito user pool configuration for the authorization resource to be configured for your Amplify project on an update. */
	export interface UpdateBackendAuthUserPoolConfig {
		ForgotPassword?: UpdateBackendAuthForgotPasswordConfig;
		Mfa?: UpdateBackendAuthMFAConfig;
		OAuth?: UpdateBackendAuthOAuthConfig;
		PasswordPolicy?: UpdateBackendAuthPasswordPolicyConfig;
		VerificationMessage?: UpdateBackendAuthVerificationMessageConfig;
	}

	/** Describes the Amazon Cognito user pool configuration for the authorization resource to be configured for your Amplify project on an update. */
	export interface UpdateBackendAuthUserPoolConfigFormProperties {
	}
	export function CreateUpdateBackendAuthUserPoolConfigFormGroup() {
		return new FormGroup<UpdateBackendAuthUserPoolConfigFormProperties>({
		});

	}


	/** <b>(DEPRECATED)</b> Describes the forgot password policy for authenticating into the Amplify app. */
	export interface UpdateBackendAuthForgotPasswordConfig {
		DeliveryMethod?: DeliveryMethod;
		EmailSettings?: EmailSettings;
		SmsSettings?: SmsSettings;
	}

	/** <b>(DEPRECATED)</b> Describes the forgot password policy for authenticating into the Amplify app. */
	export interface UpdateBackendAuthForgotPasswordConfigFormProperties {
		DeliveryMethod: FormControl<DeliveryMethod | null | undefined>,
	}
	export function CreateUpdateBackendAuthForgotPasswordConfigFormGroup() {
		return new FormGroup<UpdateBackendAuthForgotPasswordConfigFormProperties>({
			DeliveryMethod: new FormControl<DeliveryMethod | null | undefined>(undefined),
		});

	}


	/** Updates the multi-factor authentication (MFA) configuration for the backend of your Amplify project. */
	export interface UpdateBackendAuthMFAConfig {
		MFAMode?: MFAMode;
		Settings?: Settings;
	}

	/** Updates the multi-factor authentication (MFA) configuration for the backend of your Amplify project. */
	export interface UpdateBackendAuthMFAConfigFormProperties {
		MFAMode: FormControl<MFAMode | null | undefined>,
	}
	export function CreateUpdateBackendAuthMFAConfigFormGroup() {
		return new FormGroup<UpdateBackendAuthMFAConfigFormProperties>({
			MFAMode: new FormControl<MFAMode | null | undefined>(undefined),
		});

	}


	/** The OAuth configurations for authenticating users into your Amplify app. */
	export interface UpdateBackendAuthOAuthConfig {
		DomainPrefix?: string;
		OAuthGrantType?: OAuthGrantType;
		OAuthScopes?: Array<OAuthScopesElement>;
		RedirectSignInURIs?: Array<string>;
		RedirectSignOutURIs?: Array<string>;
		SocialProviderSettings?: SocialProviderSettings;
	}

	/** The OAuth configurations for authenticating users into your Amplify app. */
	export interface UpdateBackendAuthOAuthConfigFormProperties {
		DomainPrefix: FormControl<string | null | undefined>,
		OAuthGrantType: FormControl<OAuthGrantType | null | undefined>,
	}
	export function CreateUpdateBackendAuthOAuthConfigFormGroup() {
		return new FormGroup<UpdateBackendAuthOAuthConfigFormProperties>({
			DomainPrefix: new FormControl<string | null | undefined>(undefined),
			OAuthGrantType: new FormControl<OAuthGrantType | null | undefined>(undefined),
		});

	}


	/** Describes the password policy for your Amazon Cognito user pool configured as a part of your Amplify project. */
	export interface UpdateBackendAuthPasswordPolicyConfig {
		AdditionalConstraints?: Array<AdditionalConstraintsElement>;
		MinimumLength?: number | null;
	}

	/** Describes the password policy for your Amazon Cognito user pool configured as a part of your Amplify project. */
	export interface UpdateBackendAuthPasswordPolicyConfigFormProperties {
		MinimumLength: FormControl<number | null | undefined>,
	}
	export function CreateUpdateBackendAuthPasswordPolicyConfigFormGroup() {
		return new FormGroup<UpdateBackendAuthPasswordPolicyConfigFormProperties>({
			MinimumLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Updates the configuration of the email or SMS message for the auth resource configured for your Amplify project. */
	export interface UpdateBackendAuthVerificationMessageConfig {

		/** Required */
		DeliveryMethod: DeliveryMethod;
		EmailSettings?: EmailSettings;
		SmsSettings?: SmsSettings;
	}

	/** Updates the configuration of the email or SMS message for the auth resource configured for your Amplify project. */
	export interface UpdateBackendAuthVerificationMessageConfigFormProperties {

		/** Required */
		DeliveryMethod: FormControl<DeliveryMethod | null | undefined>,
	}
	export function CreateUpdateBackendAuthVerificationMessageConfigFormGroup() {
		return new FormGroup<UpdateBackendAuthVerificationMessageConfigFormProperties>({
			DeliveryMethod: new FormControl<DeliveryMethod | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateBackendConfigResponse {
		AppId?: string;
		BackendManagerAppId?: string;
		Error?: string;
		LoginAuthConfig?: LoginAuthConfigReqObj;
	}
	export interface UpdateBackendConfigResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendManagerAppId: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackendConfigResponseFormGroup() {
		return new FormGroup<UpdateBackendConfigResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendManagerAppId: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request object for this operation. */
	export interface LoginAuthConfigReqObj {
		AwsCognitoIdentityPoolId?: string;
		AwsCognitoRegion?: string;
		AwsUserPoolsId?: string;
		AwsUserPoolsWebClientId?: string;
	}

	/** The request object for this operation. */
	export interface LoginAuthConfigReqObjFormProperties {
		AwsCognitoIdentityPoolId: FormControl<string | null | undefined>,
		AwsCognitoRegion: FormControl<string | null | undefined>,
		AwsUserPoolsId: FormControl<string | null | undefined>,
		AwsUserPoolsWebClientId: FormControl<string | null | undefined>,
	}
	export function CreateLoginAuthConfigReqObjFormGroup() {
		return new FormGroup<LoginAuthConfigReqObjFormProperties>({
			AwsCognitoIdentityPoolId: new FormControl<string | null | undefined>(undefined),
			AwsCognitoRegion: new FormControl<string | null | undefined>(undefined),
			AwsUserPoolsId: new FormControl<string | null | undefined>(undefined),
			AwsUserPoolsWebClientId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBackendJobResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		CreateTime?: string;
		Error?: string;
		JobId?: string;
		Operation?: string;
		Status?: string;
		UpdateTime?: string;
	}
	export interface UpdateBackendJobResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		CreateTime: FormControl<string | null | undefined>,
		Error: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		UpdateTime: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackendJobResponseFormGroup() {
		return new FormGroup<UpdateBackendJobResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			CreateTime: new FormControl<string | null | undefined>(undefined),
			Error: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			UpdateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBackendStorageResponse {
		AppId?: string;
		BackendEnvironmentName?: string;
		JobId?: string;
		Status?: string;
	}
	export interface UpdateBackendStorageResponseFormProperties {
		AppId: FormControl<string | null | undefined>,
		BackendEnvironmentName: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackendStorageResponseFormGroup() {
		return new FormGroup<UpdateBackendStorageResponseFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request body for CloneBackend. */
	export interface CloneBackendRequest {

		/** Required */
		TargetEnvironmentName: string;
	}

	/** The request body for CloneBackend. */
	export interface CloneBackendRequestFormProperties {

		/** Required */
		TargetEnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateCloneBackendRequestFormGroup() {
		return new FormGroup<CloneBackendRequestFormProperties>({
			TargetEnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request body for CreateBackendAPI. */
	export interface CreateBackendAPIRequest {

		/** Required */
		BackendEnvironmentName: string;

		/** Required */
		ResourceConfig: BackendAPIResourceConfig;

		/** Required */
		ResourceName: string;
	}

	/** The request body for CreateBackendAPI. */
	export interface CreateBackendAPIRequestFormProperties {

		/** Required */
		BackendEnvironmentName: FormControl<string | null | undefined>,

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendAPIRequestFormGroup() {
		return new FormGroup<CreateBackendAPIRequestFormProperties>({
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request body for CreateBackendAuth. */
	export interface CreateBackendAuthRequest {

		/** Required */
		BackendEnvironmentName: string;

		/** Required */
		ResourceConfig: CreateBackendAuthResourceConfig;

		/** Required */
		ResourceName: string;
	}

	/** The request body for CreateBackendAuth. */
	export interface CreateBackendAuthRequestFormProperties {

		/** Required */
		BackendEnvironmentName: FormControl<string | null | undefined>,

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendAuthRequestFormGroup() {
		return new FormGroup<CreateBackendAuthRequestFormProperties>({
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request body for CreateBackendConfig. */
	export interface CreateBackendConfigRequest {
		BackendManagerAppId?: string;
	}

	/** The request body for CreateBackendConfig. */
	export interface CreateBackendConfigRequestFormProperties {
		BackendManagerAppId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendConfigRequestFormGroup() {
		return new FormGroup<CreateBackendConfigRequestFormProperties>({
			BackendManagerAppId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the resource configuration for the data model in your Amplify project. */
	export interface ResourceConfig {
	}

	/** Defines the resource configuration for the data model in your Amplify project. */
	export interface ResourceConfigFormProperties {
	}
	export function CreateResourceConfigFormGroup() {
		return new FormGroup<ResourceConfigFormProperties>({
		});

	}


	/** The request body for CreateBackend. */
	export interface CreateBackendRequest {

		/** Required */
		AppId: string;

		/** Required */
		AppName: string;

		/** Required */
		BackendEnvironmentName: string;
		ResourceConfig?: ResourceConfig;
		ResourceName?: string;
	}

	/** The request body for CreateBackend. */
	export interface CreateBackendRequestFormProperties {

		/** Required */
		AppId: FormControl<string | null | undefined>,

		/** Required */
		AppName: FormControl<string | null | undefined>,

		/** Required */
		BackendEnvironmentName: FormControl<string | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendRequestFormGroup() {
		return new FormGroup<CreateBackendRequestFormProperties>({
			AppId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AppName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource configuration for creating backend storage. */
	export interface CreateBackendStorageResourceConfig {
		BucketName?: string;

		/** Required */
		Permissions: BackendStoragePermissions;

		/** Required */
		ServiceName: ServiceName;
	}

	/** The resource configuration for creating backend storage. */
	export interface CreateBackendStorageResourceConfigFormProperties {
		BucketName: FormControl<string | null | undefined>,

		/** Required */
		ServiceName: FormControl<ServiceName | null | undefined>,
	}
	export function CreateCreateBackendStorageResourceConfigFormGroup() {
		return new FormGroup<CreateBackendStorageResourceConfigFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<ServiceName | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request body for CreateBackendStorage. */
	export interface CreateBackendStorageRequest {

		/** Required */
		BackendEnvironmentName: string;

		/** Required */
		ResourceConfig: CreateBackendStorageResourceConfig;

		/** Required */
		ResourceName: string;
	}

	/** The request body for CreateBackendStorage. */
	export interface CreateBackendStorageRequestFormProperties {

		/** Required */
		BackendEnvironmentName: FormControl<string | null | undefined>,

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendStorageRequestFormGroup() {
		return new FormGroup<CreateBackendStorageRequestFormProperties>({
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTokenRequest {
	}
	export interface CreateTokenRequestFormProperties {
	}
	export function CreateCreateTokenRequestFormGroup() {
		return new FormGroup<CreateTokenRequestFormProperties>({
		});

	}


	/** The request body for DeleteBackendAPI. */
	export interface DeleteBackendAPIRequest {
		ResourceConfig?: BackendAPIResourceConfig;

		/** Required */
		ResourceName: string;
	}

	/** The request body for DeleteBackendAPI. */
	export interface DeleteBackendAPIRequestFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackendAPIRequestFormGroup() {
		return new FormGroup<DeleteBackendAPIRequestFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request body for DeleteBackendAuth. */
	export interface DeleteBackendAuthRequest {

		/** Required */
		ResourceName: string;
	}

	/** The request body for DeleteBackendAuth. */
	export interface DeleteBackendAuthRequestFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackendAuthRequestFormGroup() {
		return new FormGroup<DeleteBackendAuthRequestFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteBackendRequest {
	}
	export interface DeleteBackendRequestFormProperties {
	}
	export function CreateDeleteBackendRequestFormGroup() {
		return new FormGroup<DeleteBackendRequestFormProperties>({
		});

	}


	/** The request body for DeleteBackendStorage. */
	export interface DeleteBackendStorageRequest {

		/** Required */
		ResourceName: string;

		/** Required */
		ServiceName: ServiceName;
	}

	/** The request body for DeleteBackendStorage. */
	export interface DeleteBackendStorageRequestFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,

		/** Required */
		ServiceName: FormControl<ServiceName | null | undefined>,
	}
	export function CreateDeleteBackendStorageRequestFormGroup() {
		return new FormGroup<DeleteBackendStorageRequestFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceName: new FormControl<ServiceName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTokenRequest {
	}
	export interface DeleteTokenRequestFormProperties {
	}
	export function CreateDeleteTokenRequestFormGroup() {
		return new FormGroup<DeleteTokenRequestFormProperties>({
		});

	}


	/** The request body for GenerateBackendAPIModels. */
	export interface GenerateBackendAPIModelsRequest {

		/** Required */
		ResourceName: string;
	}

	/** The request body for GenerateBackendAPIModels. */
	export interface GenerateBackendAPIModelsRequestFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateGenerateBackendAPIModelsRequestFormGroup() {
		return new FormGroup<GenerateBackendAPIModelsRequestFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request body for GetBackendAPIModels. */
	export interface GetBackendAPIModelsRequest {

		/** Required */
		ResourceName: string;
	}

	/** The request body for GetBackendAPIModels. */
	export interface GetBackendAPIModelsRequestFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendAPIModelsRequestFormGroup() {
		return new FormGroup<GetBackendAPIModelsRequestFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request body for GetBackendAPI. */
	export interface GetBackendAPIRequest {
		ResourceConfig?: BackendAPIResourceConfig;

		/** Required */
		ResourceName: string;
	}

	/** The request body for GetBackendAPI. */
	export interface GetBackendAPIRequestFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendAPIRequestFormGroup() {
		return new FormGroup<GetBackendAPIRequestFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request body for GetBackendAuth. */
	export interface GetBackendAuthRequest {

		/** Required */
		ResourceName: string;
	}

	/** The request body for GetBackendAuth. */
	export interface GetBackendAuthRequestFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendAuthRequestFormGroup() {
		return new FormGroup<GetBackendAuthRequestFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBackendJobRequest {
	}
	export interface GetBackendJobRequestFormProperties {
	}
	export function CreateGetBackendJobRequestFormGroup() {
		return new FormGroup<GetBackendJobRequestFormProperties>({
		});

	}


	/** The request body for GetBackend. */
	export interface GetBackendRequest {
		BackendEnvironmentName?: string;
	}

	/** The request body for GetBackend. */
	export interface GetBackendRequestFormProperties {
		BackendEnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendRequestFormGroup() {
		return new FormGroup<GetBackendRequestFormProperties>({
			BackendEnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request body for GetBackendStorage. */
	export interface GetBackendStorageRequest {

		/** Required */
		ResourceName: string;
	}

	/** The request body for GetBackendStorage. */
	export interface GetBackendStorageRequestFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendStorageRequestFormGroup() {
		return new FormGroup<GetBackendStorageRequestFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTokenRequest {
	}
	export interface GetTokenRequestFormProperties {
	}
	export function CreateGetTokenRequestFormGroup() {
		return new FormGroup<GetTokenRequestFormProperties>({
		});

	}


	/** The request body for ImportBackendAuth. */
	export interface ImportBackendAuthRequest {
		IdentityPoolId?: string;

		/** Required */
		NativeClientId: string;

		/** Required */
		UserPoolId: string;

		/** Required */
		WebClientId: string;
	}

	/** The request body for ImportBackendAuth. */
	export interface ImportBackendAuthRequestFormProperties {
		IdentityPoolId: FormControl<string | null | undefined>,

		/** Required */
		NativeClientId: FormControl<string | null | undefined>,

		/** Required */
		UserPoolId: FormControl<string | null | undefined>,

		/** Required */
		WebClientId: FormControl<string | null | undefined>,
	}
	export function CreateImportBackendAuthRequestFormGroup() {
		return new FormGroup<ImportBackendAuthRequestFormProperties>({
			IdentityPoolId: new FormControl<string | null | undefined>(undefined),
			NativeClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WebClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request body for ImportBackendStorage. */
	export interface ImportBackendStorageRequest {
		BucketName?: string;

		/** Required */
		ServiceName: ServiceName;
	}

	/** The request body for ImportBackendStorage. */
	export interface ImportBackendStorageRequestFormProperties {
		BucketName: FormControl<string | null | undefined>,

		/** Required */
		ServiceName: FormControl<ServiceName | null | undefined>,
	}
	export function CreateImportBackendStorageRequestFormGroup() {
		return new FormGroup<ImportBackendStorageRequestFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<ServiceName | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request body for ListBackendJobs. */
	export interface ListBackendJobsRequest {
		JobId?: string;
		MaxResults?: number | null;
		NextToken?: string;
		Operation?: string;
		Status?: string;
	}

	/** The request body for ListBackendJobs. */
	export interface ListBackendJobsRequestFormProperties {
		JobId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateListBackendJobsRequestFormGroup() {
		return new FormGroup<ListBackendJobsRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request body for S3Buckets. */
	export interface ListS3BucketsRequest {
		NextToken?: string;
	}

	/** The request body for S3Buckets. */
	export interface ListS3BucketsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListS3BucketsRequestFormGroup() {
		return new FormGroup<ListS3BucketsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request body for RemoveAllBackends. */
	export interface RemoveAllBackendsRequest {
		CleanAmplifyApp?: boolean | null;
	}

	/** The request body for RemoveAllBackends. */
	export interface RemoveAllBackendsRequestFormProperties {
		CleanAmplifyApp: FormControl<boolean | null | undefined>,
	}
	export function CreateRemoveAllBackendsRequestFormGroup() {
		return new FormGroup<RemoveAllBackendsRequestFormProperties>({
			CleanAmplifyApp: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RemoveBackendConfigRequest {
	}
	export interface RemoveBackendConfigRequestFormProperties {
	}
	export function CreateRemoveBackendConfigRequestFormGroup() {
		return new FormGroup<RemoveBackendConfigRequestFormProperties>({
		});

	}


	/** The request body for UpdateBackendAPI. */
	export interface UpdateBackendAPIRequest {
		ResourceConfig?: BackendAPIResourceConfig;

		/** Required */
		ResourceName: string;
	}

	/** The request body for UpdateBackendAPI. */
	export interface UpdateBackendAPIRequestFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackendAPIRequestFormGroup() {
		return new FormGroup<UpdateBackendAPIRequestFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the resource configuration when updating an authentication resource in your Amplify project. */
	export interface UpdateBackendAuthResourceConfig {

		/** Required */
		AuthResources: AuthResources;
		IdentityPoolConfigs?: UpdateBackendAuthIdentityPoolConfig;

		/** Required */
		Service: Service;

		/** Required */
		UserPoolConfigs: UpdateBackendAuthUserPoolConfig;
	}

	/** Defines the resource configuration when updating an authentication resource in your Amplify project. */
	export interface UpdateBackendAuthResourceConfigFormProperties {

		/** Required */
		AuthResources: FormControl<AuthResources | null | undefined>,

		/** Required */
		Service: FormControl<Service | null | undefined>,
	}
	export function CreateUpdateBackendAuthResourceConfigFormGroup() {
		return new FormGroup<UpdateBackendAuthResourceConfigFormProperties>({
			AuthResources: new FormControl<AuthResources | null | undefined>(undefined, [Validators.required]),
			Service: new FormControl<Service | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request body for UpdateBackendAuth. */
	export interface UpdateBackendAuthRequest {

		/** Required */
		ResourceConfig: UpdateBackendAuthResourceConfig;

		/** Required */
		ResourceName: string;
	}

	/** The request body for UpdateBackendAuth. */
	export interface UpdateBackendAuthRequestFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackendAuthRequestFormGroup() {
		return new FormGroup<UpdateBackendAuthRequestFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request body for UpdateBackendConfig. */
	export interface UpdateBackendConfigRequest {
		LoginAuthConfig?: LoginAuthConfigReqObj;
	}

	/** The request body for UpdateBackendConfig. */
	export interface UpdateBackendConfigRequestFormProperties {
	}
	export function CreateUpdateBackendConfigRequestFormGroup() {
		return new FormGroup<UpdateBackendConfigRequestFormProperties>({
		});

	}


	/** The request body for GetBackendJob. */
	export interface UpdateBackendJobRequest {
		Operation?: string;
		Status?: string;
	}

	/** The request body for GetBackendJob. */
	export interface UpdateBackendJobRequestFormProperties {
		Operation: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackendJobRequestFormGroup() {
		return new FormGroup<UpdateBackendJobRequestFormProperties>({
			Operation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource configuration for updating backend storage. */
	export interface UpdateBackendStorageResourceConfig {

		/** Required */
		Permissions: BackendStoragePermissions;

		/** Required */
		ServiceName: ServiceName;
	}

	/** The resource configuration for updating backend storage. */
	export interface UpdateBackendStorageResourceConfigFormProperties {

		/** Required */
		ServiceName: FormControl<ServiceName | null | undefined>,
	}
	export function CreateUpdateBackendStorageResourceConfigFormGroup() {
		return new FormGroup<UpdateBackendStorageResourceConfigFormProperties>({
			ServiceName: new FormControl<ServiceName | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The request body for UpdateBackendStorage. */
	export interface UpdateBackendStorageRequest {

		/** Required */
		ResourceConfig: UpdateBackendStorageResourceConfig;

		/** Required */
		ResourceName: string;
	}

	/** The request body for UpdateBackendStorage. */
	export interface UpdateBackendStorageRequestFormProperties {

		/** Required */
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackendStorageRequestFormGroup() {
		return new FormGroup<UpdateBackendStorageRequestFormProperties>({
			ResourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This operation clones an existing backend.
		 * Post backend/{appId}/environments/{backendEnvironmentName}/clone
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @return {CloneBackendResponse} Success
		 */
		CloneBackend(appId: string, backendEnvironmentName: string, requestBody: CloneBackendPostBody): Observable<CloneBackendResponse> {
			return this.http.post<CloneBackendResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environments/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)) + '/clone', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.
		 * Post backend
		 * @return {CreateBackendResponse} Success
		 */
		CreateBackend(requestBody: CreateBackendPostBody): Observable<CreateBackendResponse> {
			return this.http.post<CreateBackendResponse>(this.baseUri + 'backend', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new backend API resource.
		 * Post backend/{appId}/api
		 * @param {string} appId The app ID.
		 * @return {CreateBackendAPIResponse} Success
		 */
		CreateBackendAPI(appId: string, requestBody: CreateBackendAPIPostBody): Observable<CreateBackendAPIResponse> {
			return this.http.post<CreateBackendAPIResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/api', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new backend authentication resource.
		 * Post backend/{appId}/auth
		 * @param {string} appId The app ID.
		 * @return {CreateBackendAuthResponse} Success
		 */
		CreateBackendAuth(appId: string, requestBody: CreateBackendAuthPostBody): Observable<CreateBackendAuthResponse> {
			return this.http.post<CreateBackendAuthResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/auth', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a config object for a backend.
		 * Post backend/{appId}/config
		 * @param {string} appId The app ID.
		 * @return {CreateBackendConfigResponse} Success
		 */
		CreateBackendConfig(appId: string, requestBody: CreateBackendConfigPostBody): Observable<CreateBackendConfigResponse> {
			return this.http.post<CreateBackendConfigResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a backend storage resource.
		 * Post backend/{appId}/storage
		 * @param {string} appId The app ID.
		 * @return {CreateBackendStorageResponse} Success
		 */
		CreateBackendStorage(appId: string, requestBody: CreateBackendStoragePostBody): Observable<CreateBackendStorageResponse> {
			return this.http.post<CreateBackendStorageResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/storage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.
		 * Post backend/{appId}/challenge
		 * @param {string} appId The app ID.
		 * @return {CreateTokenResponse} Success
		 */
		CreateToken(appId: string): Observable<CreateTokenResponse> {
			return this.http.post<CreateTokenResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/challenge', null, {});
		}

		/**
		 * Removes an existing environment from your Amplify project.
		 * Post backend/{appId}/environments/{backendEnvironmentName}/remove
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @return {DeleteBackendResponse} Success
		 */
		DeleteBackend(appId: string, backendEnvironmentName: string): Observable<DeleteBackendResponse> {
			return this.http.post<DeleteBackendResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environments/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)) + '/remove', null, {});
		}

		/**
		 * Deletes an existing backend API resource.
		 * Post backend/{appId}/api/{backendEnvironmentName}/remove
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @return {DeleteBackendAPIResponse} Success
		 */
		DeleteBackendAPI(appId: string, backendEnvironmentName: string, requestBody: DeleteBackendAPIPostBody): Observable<DeleteBackendAPIResponse> {
			return this.http.post<DeleteBackendAPIResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/api/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)) + '/remove', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing backend authentication resource.
		 * Post backend/{appId}/auth/{backendEnvironmentName}/remove
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @return {DeleteBackendAuthResponse} Success
		 */
		DeleteBackendAuth(appId: string, backendEnvironmentName: string, requestBody: DeleteBackendAuthPostBody): Observable<DeleteBackendAuthResponse> {
			return this.http.post<DeleteBackendAuthResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/auth/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)) + '/remove', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified backend storage resource.
		 * Post backend/{appId}/storage/{backendEnvironmentName}/remove
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @return {DeleteBackendStorageResponse} Success
		 */
		DeleteBackendStorage(appId: string, backendEnvironmentName: string, requestBody: DeleteBackendStoragePostBody): Observable<DeleteBackendStorageResponse> {
			return this.http.post<DeleteBackendStorageResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/storage/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)) + '/remove', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the challenge token based on the given appId and sessionId.
		 * Post backend/{appId}/challenge/{sessionId}/remove
		 * @param {string} appId The app ID.
		 * @param {string} sessionId The session ID.
		 * @return {DeleteTokenResponse} Success
		 */
		DeleteToken(appId: string, sessionId: string): Observable<DeleteTokenResponse> {
			return this.http.post<DeleteTokenResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/challenge/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/remove', null, {});
		}

		/**
		 * Generates a model schema for an existing backend API resource.
		 * Post backend/{appId}/api/{backendEnvironmentName}/generateModels
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @return {GenerateBackendAPIModelsResponse} Success
		 */
		GenerateBackendAPIModels(appId: string, backendEnvironmentName: string, requestBody: GenerateBackendAPIModelsPostBody): Observable<GenerateBackendAPIModelsResponse> {
			return this.http.post<GenerateBackendAPIModelsResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/api/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)) + '/generateModels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides project-level details for your Amplify UI project.
		 * Post backend/{appId}/details
		 * @param {string} appId The app ID.
		 * @return {GetBackendResponse} Success
		 */
		GetBackend(appId: string, requestBody: GetBackendPostBody): Observable<GetBackendResponse> {
			return this.http.post<GetBackendResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/details', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the details for a backend API.
		 * Post backend/{appId}/api/{backendEnvironmentName}/details
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @return {GetBackendAPIResponse} Success
		 */
		GetBackendAPI(appId: string, backendEnvironmentName: string, requestBody: GetBackendAPIPostBody): Observable<GetBackendAPIResponse> {
			return this.http.post<GetBackendAPIResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/api/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)) + '/details', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a model introspection schema for an existing backend API resource.
		 * Post backend/{appId}/api/{backendEnvironmentName}/getModels
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @return {GetBackendAPIModelsResponse} Success
		 */
		GetBackendAPIModels(appId: string, backendEnvironmentName: string, requestBody: GetBackendAPIModelsPostBody): Observable<GetBackendAPIModelsResponse> {
			return this.http.post<GetBackendAPIModelsResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/api/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)) + '/getModels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a backend auth details.
		 * Post backend/{appId}/auth/{backendEnvironmentName}/details
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @return {GetBackendAuthResponse} Success
		 */
		GetBackendAuth(appId: string, backendEnvironmentName: string, requestBody: GetBackendAuthPostBody): Observable<GetBackendAuthResponse> {
			return this.http.post<GetBackendAuthResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/auth/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)) + '/details', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific job.
		 * Get backend/{appId}/job/{backendEnvironmentName}/{jobId}
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @param {string} jobId The ID for the job.
		 * @return {GetBackendJobResponse} Success
		 */
		GetBackendJob(appId: string, backendEnvironmentName: string, jobId: string): Observable<GetBackendJobResponse> {
			return this.http.get<GetBackendJobResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/job/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)) + '/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Updates a specific job.
		 * Post backend/{appId}/job/{backendEnvironmentName}/{jobId}
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @param {string} jobId The ID for the job.
		 * @return {UpdateBackendJobResponse} Success
		 */
		UpdateBackendJob(appId: string, backendEnvironmentName: string, jobId: string, requestBody: UpdateBackendJobPostBody): Observable<UpdateBackendJobResponse> {
			return this.http.post<UpdateBackendJobResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/job/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)) + '/' + (jobId == null ? '' : encodeURIComponent(jobId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets details for a backend storage resource.
		 * Post backend/{appId}/storage/{backendEnvironmentName}/details
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @return {GetBackendStorageResponse} Success
		 */
		GetBackendStorage(appId: string, backendEnvironmentName: string, requestBody: GetBackendStoragePostBody): Observable<GetBackendStorageResponse> {
			return this.http.post<GetBackendStorageResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/storage/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)) + '/details', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the challenge token based on the given appId and sessionId.
		 * Get backend/{appId}/challenge/{sessionId}
		 * @param {string} appId The app ID.
		 * @param {string} sessionId The session ID.
		 * @return {GetTokenResponse} Success
		 */
		GetToken(appId: string, sessionId: string): Observable<GetTokenResponse> {
			return this.http.get<GetTokenResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/challenge/' + (sessionId == null ? '' : encodeURIComponent(sessionId)), {});
		}

		/**
		 * Imports an existing backend authentication resource.
		 * Post backend/{appId}/auth/{backendEnvironmentName}/import
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @return {ImportBackendAuthResponse} Success
		 */
		ImportBackendAuth(appId: string, backendEnvironmentName: string, requestBody: ImportBackendAuthPostBody): Observable<ImportBackendAuthResponse> {
			return this.http.post<ImportBackendAuthResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/auth/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)) + '/import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports an existing backend storage resource.
		 * Post backend/{appId}/storage/{backendEnvironmentName}/import
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @return {ImportBackendStorageResponse} Success
		 */
		ImportBackendStorage(appId: string, backendEnvironmentName: string, requestBody: ImportBackendStoragePostBody): Observable<ImportBackendStorageResponse> {
			return this.http.post<ImportBackendStorageResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/storage/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)) + '/import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the jobs for the backend of an Amplify app.
		 * Post backend/{appId}/job/{backendEnvironmentName}
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBackendJobsResponse} Success
		 */
		ListBackendJobs(appId: string, backendEnvironmentName: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListBackendJobsPostBody): Observable<ListBackendJobsResponse> {
			return this.http.post<ListBackendJobsResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/job/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The list of S3 buckets in your account.
		 * Post s3Buckets
		 * @return {ListS3BucketsResponse} Success
		 */
		ListS3Buckets(requestBody: ListS3BucketsPostBody): Observable<ListS3BucketsResponse> {
			return this.http.post<ListS3BucketsResponse>(this.baseUri + 's3Buckets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes all backend environments from your Amplify project.
		 * Post backend/{appId}/remove
		 * @param {string} appId The app ID.
		 * @return {RemoveAllBackendsResponse} Success
		 */
		RemoveAllBackends(appId: string, requestBody: RemoveAllBackendsPostBody): Observable<RemoveAllBackendsResponse> {
			return this.http.post<RemoveAllBackendsResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/remove', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the AWS resources required to access the Amplify Admin UI.
		 * Post backend/{appId}/config/remove
		 * @param {string} appId The app ID.
		 * @return {RemoveBackendConfigResponse} Success
		 */
		RemoveBackendConfig(appId: string): Observable<RemoveBackendConfigResponse> {
			return this.http.post<RemoveBackendConfigResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/config/remove', null, {});
		}

		/**
		 * Updates an existing backend API resource.
		 * Post backend/{appId}/api/{backendEnvironmentName}
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @return {UpdateBackendAPIResponse} Success
		 */
		UpdateBackendAPI(appId: string, backendEnvironmentName: string, requestBody: UpdateBackendAPIPostBody): Observable<UpdateBackendAPIResponse> {
			return this.http.post<UpdateBackendAPIResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/api/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing backend authentication resource.
		 * Post backend/{appId}/auth/{backendEnvironmentName}
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @return {UpdateBackendAuthResponse} Success
		 */
		UpdateBackendAuth(appId: string, backendEnvironmentName: string, requestBody: UpdateBackendAuthPostBody): Observable<UpdateBackendAuthResponse> {
			return this.http.post<UpdateBackendAuthResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/auth/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the AWS resources required to access the Amplify Admin UI.
		 * Post backend/{appId}/config/update
		 * @param {string} appId The app ID.
		 * @return {UpdateBackendConfigResponse} Success
		 */
		UpdateBackendConfig(appId: string, requestBody: UpdateBackendConfigPostBody): Observable<UpdateBackendConfigResponse> {
			return this.http.post<UpdateBackendConfigResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/config/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing backend storage resource.
		 * Post backend/{appId}/storage/{backendEnvironmentName}
		 * @param {string} appId The app ID.
		 * @param {string} backendEnvironmentName The name of the backend environment.
		 * @return {UpdateBackendStorageResponse} Success
		 */
		UpdateBackendStorage(appId: string, backendEnvironmentName: string, requestBody: UpdateBackendStoragePostBody): Observable<UpdateBackendStorageResponse> {
			return this.http.post<UpdateBackendStorageResponse>(this.baseUri + 'backend/' + (appId == null ? '' : encodeURIComponent(appId)) + '/storage/' + (backendEnvironmentName == null ? '' : encodeURIComponent(backendEnvironmentName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CloneBackendPostBody {

		/**
		 * The name of the destination backend environment to be created.
		 * Required
		 */
		targetEnvironmentName: string;
	}
	export interface CloneBackendPostBodyFormProperties {

		/**
		 * The name of the destination backend environment to be created.
		 * Required
		 */
		targetEnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateCloneBackendPostBodyFormGroup() {
		return new FormGroup<CloneBackendPostBodyFormProperties>({
			targetEnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBackendPostBody {

		/**
		 * The app ID.
		 * Required
		 */
		appId: string;

		/**
		 * The name of the app.
		 * Required
		 */
		appName: string;

		/**
		 * The name of the backend environment.
		 * Required
		 */
		backendEnvironmentName: string;

		/** Defines the resource configuration for the data model in your Amplify project. */
		resourceConfig?: string | null;

		/** The name of the resource. */
		resourceName?: string | null;
	}
	export interface CreateBackendPostBodyFormProperties {

		/**
		 * The app ID.
		 * Required
		 */
		appId: FormControl<string | null | undefined>,

		/**
		 * The name of the app.
		 * Required
		 */
		appName: FormControl<string | null | undefined>,

		/**
		 * The name of the backend environment.
		 * Required
		 */
		backendEnvironmentName: FormControl<string | null | undefined>,

		/** Defines the resource configuration for the data model in your Amplify project. */
		resourceConfig: FormControl<string | null | undefined>,

		/** The name of the resource. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendPostBodyFormGroup() {
		return new FormGroup<CreateBackendPostBodyFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			backendEnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceConfig: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackendAPIPostBody {

		/**
		 * The name of the backend environment.
		 * Required
		 */
		backendEnvironmentName: string;

		/**
		 * The resource config for the data model, configured as a part of the Amplify project.
		 * Required
		 */
		resourceConfig: CreateBackendAPIPostBodyResourceConfig;

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: string;
	}
	export interface CreateBackendAPIPostBodyFormProperties {

		/**
		 * The name of the backend environment.
		 * Required
		 */
		backendEnvironmentName: FormControl<string | null | undefined>,

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendAPIPostBodyFormGroup() {
		return new FormGroup<CreateBackendAPIPostBodyFormProperties>({
			backendEnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBackendAPIPostBodyResourceConfig {
		AdditionalAuthTypes?: Array<BackendAPIAuthType>;
		ApiName?: string;
		ConflictResolution?: BackendAPIConflictResolution;
		DefaultAuthType?: BackendAPIAuthType;
		Service?: string;
		TransformSchema?: string;
	}
	export interface CreateBackendAPIPostBodyResourceConfigFormProperties {
		ApiName: FormControl<string | null | undefined>,
		Service: FormControl<string | null | undefined>,
		TransformSchema: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendAPIPostBodyResourceConfigFormGroup() {
		return new FormGroup<CreateBackendAPIPostBodyResourceConfigFormProperties>({
			ApiName: new FormControl<string | null | undefined>(undefined),
			Service: new FormControl<string | null | undefined>(undefined),
			TransformSchema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackendAuthPostBody {

		/**
		 * The name of the backend environment.
		 * Required
		 */
		backendEnvironmentName: string;

		/**
		 * Defines the resource configuration when creating an auth resource in your Amplify project.
		 * Required
		 */
		resourceConfig: CreateBackendAuthPostBodyResourceConfig;

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: string;
	}
	export interface CreateBackendAuthPostBodyFormProperties {

		/**
		 * The name of the backend environment.
		 * Required
		 */
		backendEnvironmentName: FormControl<string | null | undefined>,

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendAuthPostBodyFormGroup() {
		return new FormGroup<CreateBackendAuthPostBodyFormProperties>({
			backendEnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBackendAuthPostBodyResourceConfig {
		AuthResources?: AuthResources;
		IdentityPoolConfigs?: CreateBackendAuthIdentityPoolConfig;
		Service?: Service;
		UserPoolConfigs?: CreateBackendAuthUserPoolConfig;
	}
	export interface CreateBackendAuthPostBodyResourceConfigFormProperties {
		AuthResources: FormControl<AuthResources | null | undefined>,
		Service: FormControl<Service | null | undefined>,
	}
	export function CreateCreateBackendAuthPostBodyResourceConfigFormGroup() {
		return new FormGroup<CreateBackendAuthPostBodyResourceConfigFormProperties>({
			AuthResources: new FormControl<AuthResources | null | undefined>(undefined),
			Service: new FormControl<Service | null | undefined>(undefined),
		});

	}

	export interface CreateBackendConfigPostBody {

		/** The app ID for the backend manager. */
		backendManagerAppId?: string | null;
	}
	export interface CreateBackendConfigPostBodyFormProperties {

		/** The app ID for the backend manager. */
		backendManagerAppId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendConfigPostBodyFormGroup() {
		return new FormGroup<CreateBackendConfigPostBodyFormProperties>({
			backendManagerAppId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBackendStoragePostBody {

		/**
		 * The name of the backend environment.
		 * Required
		 */
		backendEnvironmentName: string;

		/**
		 * The resource configuration for creating backend storage.
		 * Required
		 */
		resourceConfig: CreateBackendStoragePostBodyResourceConfig;

		/**
		 * The name of the storage resource.
		 * Required
		 */
		resourceName: string;
	}
	export interface CreateBackendStoragePostBodyFormProperties {

		/**
		 * The name of the backend environment.
		 * Required
		 */
		backendEnvironmentName: FormControl<string | null | undefined>,

		/**
		 * The name of the storage resource.
		 * Required
		 */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateBackendStoragePostBodyFormGroup() {
		return new FormGroup<CreateBackendStoragePostBodyFormProperties>({
			backendEnvironmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBackendStoragePostBodyResourceConfig {
		BucketName?: string;
		Permissions?: BackendStoragePermissions;
		ServiceName?: ServiceName;
	}
	export interface CreateBackendStoragePostBodyResourceConfigFormProperties {
		BucketName: FormControl<string | null | undefined>,
		ServiceName: FormControl<ServiceName | null | undefined>,
	}
	export function CreateCreateBackendStoragePostBodyResourceConfigFormGroup() {
		return new FormGroup<CreateBackendStoragePostBodyResourceConfigFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<ServiceName | null | undefined>(undefined),
		});

	}

	export interface DeleteBackendAPIPostBody {

		/** The resource config for the data model, configured as a part of the Amplify project. */
		resourceConfig?: DeleteBackendAPIPostBodyResourceConfig;

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: string;
	}
	export interface DeleteBackendAPIPostBodyFormProperties {

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackendAPIPostBodyFormGroup() {
		return new FormGroup<DeleteBackendAPIPostBodyFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteBackendAPIPostBodyResourceConfig {
		AdditionalAuthTypes?: Array<BackendAPIAuthType>;
		ApiName?: string;
		ConflictResolution?: BackendAPIConflictResolution;
		DefaultAuthType?: BackendAPIAuthType;
		Service?: string;
		TransformSchema?: string;
	}
	export interface DeleteBackendAPIPostBodyResourceConfigFormProperties {
		ApiName: FormControl<string | null | undefined>,
		Service: FormControl<string | null | undefined>,
		TransformSchema: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackendAPIPostBodyResourceConfigFormGroup() {
		return new FormGroup<DeleteBackendAPIPostBodyResourceConfigFormProperties>({
			ApiName: new FormControl<string | null | undefined>(undefined),
			Service: new FormControl<string | null | undefined>(undefined),
			TransformSchema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteBackendAuthPostBody {

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: string;
	}
	export interface DeleteBackendAuthPostBodyFormProperties {

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackendAuthPostBodyFormGroup() {
		return new FormGroup<DeleteBackendAuthPostBodyFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteBackendStoragePostBody {

		/**
		 * The name of the storage resource.
		 * Required
		 */
		resourceName: string;

		/**
		 * The name of the storage service.
		 * Required
		 */
		serviceName: ServiceName;
	}
	export interface DeleteBackendStoragePostBodyFormProperties {

		/**
		 * The name of the storage resource.
		 * Required
		 */
		resourceName: FormControl<string | null | undefined>,

		/**
		 * The name of the storage service.
		 * Required
		 */
		serviceName: FormControl<ServiceName | null | undefined>,
	}
	export function CreateDeleteBackendStoragePostBodyFormGroup() {
		return new FormGroup<DeleteBackendStoragePostBodyFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<ServiceName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GenerateBackendAPIModelsPostBody {

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: string;
	}
	export interface GenerateBackendAPIModelsPostBodyFormProperties {

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGenerateBackendAPIModelsPostBodyFormGroup() {
		return new FormGroup<GenerateBackendAPIModelsPostBodyFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBackendPostBody {

		/** The name of the backend environment. */
		backendEnvironmentName?: string | null;
	}
	export interface GetBackendPostBodyFormProperties {

		/** The name of the backend environment. */
		backendEnvironmentName: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendPostBodyFormGroup() {
		return new FormGroup<GetBackendPostBodyFormProperties>({
			backendEnvironmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBackendAPIPostBody {

		/** The resource config for the data model, configured as a part of the Amplify project. */
		resourceConfig?: GetBackendAPIPostBodyResourceConfig;

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: string;
	}
	export interface GetBackendAPIPostBodyFormProperties {

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendAPIPostBodyFormGroup() {
		return new FormGroup<GetBackendAPIPostBodyFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBackendAPIPostBodyResourceConfig {
		AdditionalAuthTypes?: Array<BackendAPIAuthType>;
		ApiName?: string;
		ConflictResolution?: BackendAPIConflictResolution;
		DefaultAuthType?: BackendAPIAuthType;
		Service?: string;
		TransformSchema?: string;
	}
	export interface GetBackendAPIPostBodyResourceConfigFormProperties {
		ApiName: FormControl<string | null | undefined>,
		Service: FormControl<string | null | undefined>,
		TransformSchema: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendAPIPostBodyResourceConfigFormGroup() {
		return new FormGroup<GetBackendAPIPostBodyResourceConfigFormProperties>({
			ApiName: new FormControl<string | null | undefined>(undefined),
			Service: new FormControl<string | null | undefined>(undefined),
			TransformSchema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBackendAPIModelsPostBody {

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: string;
	}
	export interface GetBackendAPIModelsPostBodyFormProperties {

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendAPIModelsPostBodyFormGroup() {
		return new FormGroup<GetBackendAPIModelsPostBodyFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBackendAuthPostBody {

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: string;
	}
	export interface GetBackendAuthPostBodyFormProperties {

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendAuthPostBodyFormGroup() {
		return new FormGroup<GetBackendAuthPostBodyFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateBackendJobPostBody {

		/** Filters the list of response objects to include only those with the specified operation name. */
		operation?: string | null;

		/** Filters the list of response objects to include only those with the specified status. */
		status?: string | null;
	}
	export interface UpdateBackendJobPostBodyFormProperties {

		/** Filters the list of response objects to include only those with the specified operation name. */
		operation: FormControl<string | null | undefined>,

		/** Filters the list of response objects to include only those with the specified status. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackendJobPostBodyFormGroup() {
		return new FormGroup<UpdateBackendJobPostBodyFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBackendStoragePostBody {

		/**
		 * The name of the storage resource.
		 * Required
		 */
		resourceName: string;
	}
	export interface GetBackendStoragePostBodyFormProperties {

		/**
		 * The name of the storage resource.
		 * Required
		 */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGetBackendStoragePostBodyFormGroup() {
		return new FormGroup<GetBackendStoragePostBodyFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportBackendAuthPostBody {

		/** The ID of the Amazon Cognito identity pool. */
		identityPoolId?: string | null;

		/**
		 * The ID of the Amazon Cognito native client.
		 * Required
		 */
		nativeClientId: string;

		/**
		 * The ID of the Amazon Cognito user pool.
		 * Required
		 */
		userPoolId: string;

		/**
		 * The ID of the Amazon Cognito web client.
		 * Required
		 */
		webClientId: string;
	}
	export interface ImportBackendAuthPostBodyFormProperties {

		/** The ID of the Amazon Cognito identity pool. */
		identityPoolId: FormControl<string | null | undefined>,

		/**
		 * The ID of the Amazon Cognito native client.
		 * Required
		 */
		nativeClientId: FormControl<string | null | undefined>,

		/**
		 * The ID of the Amazon Cognito user pool.
		 * Required
		 */
		userPoolId: FormControl<string | null | undefined>,

		/**
		 * The ID of the Amazon Cognito web client.
		 * Required
		 */
		webClientId: FormControl<string | null | undefined>,
	}
	export function CreateImportBackendAuthPostBodyFormGroup() {
		return new FormGroup<ImportBackendAuthPostBodyFormProperties>({
			identityPoolId: new FormControl<string | null | undefined>(undefined),
			nativeClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			webClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportBackendStoragePostBody {

		/** The name of the S3 bucket. */
		bucketName?: string | null;

		/**
		 * The name of the storage service.
		 * Required
		 */
		serviceName: ServiceName;
	}
	export interface ImportBackendStoragePostBodyFormProperties {

		/** The name of the S3 bucket. */
		bucketName: FormControl<string | null | undefined>,

		/**
		 * The name of the storage service.
		 * Required
		 */
		serviceName: FormControl<ServiceName | null | undefined>,
	}
	export function CreateImportBackendStoragePostBodyFormGroup() {
		return new FormGroup<ImportBackendStoragePostBodyFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<ServiceName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListBackendJobsPostBody {

		/** The ID for the job. */
		jobId?: string | null;

		/**
		 * The maximum number of results that you want in the response.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults?: number | null;

		/** The token for the next set of results. */
		nextToken?: string | null;

		/** Filters the list of response objects to include only those with the specified operation name. */
		operation?: string | null;

		/** Filters the list of response objects to include only those with the specified status. */
		status?: string | null;
	}
	export interface ListBackendJobsPostBodyFormProperties {

		/** The ID for the job. */
		jobId: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results that you want in the response.
		 * Minimum: 1
		 * Maximum: 25
		 */
		maxResults: FormControl<number | null | undefined>,

		/** The token for the next set of results. */
		nextToken: FormControl<string | null | undefined>,

		/** Filters the list of response objects to include only those with the specified operation name. */
		operation: FormControl<string | null | undefined>,

		/** Filters the list of response objects to include only those with the specified status. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateListBackendJobsPostBodyFormGroup() {
		return new FormGroup<ListBackendJobsPostBodyFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListS3BucketsPostBody {

		/** Reserved for future use. */
		nextToken?: string | null;
	}
	export interface ListS3BucketsPostBodyFormProperties {

		/** Reserved for future use. */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListS3BucketsPostBodyFormGroup() {
		return new FormGroup<ListS3BucketsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveAllBackendsPostBody {

		/** Cleans up the Amplify Console app if this value is set to true. */
		cleanAmplifyApp?: boolean | null;
	}
	export interface RemoveAllBackendsPostBodyFormProperties {

		/** Cleans up the Amplify Console app if this value is set to true. */
		cleanAmplifyApp: FormControl<boolean | null | undefined>,
	}
	export function CreateRemoveAllBackendsPostBodyFormGroup() {
		return new FormGroup<RemoveAllBackendsPostBodyFormProperties>({
			cleanAmplifyApp: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateBackendAPIPostBody {

		/** The resource config for the data model, configured as a part of the Amplify project. */
		resourceConfig?: UpdateBackendAPIPostBodyResourceConfig;

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: string;
	}
	export interface UpdateBackendAPIPostBodyFormProperties {

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackendAPIPostBodyFormGroup() {
		return new FormGroup<UpdateBackendAPIPostBodyFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateBackendAPIPostBodyResourceConfig {
		AdditionalAuthTypes?: Array<BackendAPIAuthType>;
		ApiName?: string;
		ConflictResolution?: BackendAPIConflictResolution;
		DefaultAuthType?: BackendAPIAuthType;
		Service?: string;
		TransformSchema?: string;
	}
	export interface UpdateBackendAPIPostBodyResourceConfigFormProperties {
		ApiName: FormControl<string | null | undefined>,
		Service: FormControl<string | null | undefined>,
		TransformSchema: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackendAPIPostBodyResourceConfigFormGroup() {
		return new FormGroup<UpdateBackendAPIPostBodyResourceConfigFormProperties>({
			ApiName: new FormControl<string | null | undefined>(undefined),
			Service: new FormControl<string | null | undefined>(undefined),
			TransformSchema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBackendAuthPostBody {

		/**
		 * Defines the resource configuration when updating an authentication resource in your Amplify project.
		 * Required
		 */
		resourceConfig: UpdateBackendAuthPostBodyResourceConfig;

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: string;
	}
	export interface UpdateBackendAuthPostBodyFormProperties {

		/**
		 * The name of this resource.
		 * Required
		 */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackendAuthPostBodyFormGroup() {
		return new FormGroup<UpdateBackendAuthPostBodyFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateBackendAuthPostBodyResourceConfig {
		AuthResources?: AuthResources;
		IdentityPoolConfigs?: UpdateBackendAuthIdentityPoolConfig;
		Service?: Service;
		UserPoolConfigs?: UpdateBackendAuthUserPoolConfig;
	}
	export interface UpdateBackendAuthPostBodyResourceConfigFormProperties {
		AuthResources: FormControl<AuthResources | null | undefined>,
		Service: FormControl<Service | null | undefined>,
	}
	export function CreateUpdateBackendAuthPostBodyResourceConfigFormGroup() {
		return new FormGroup<UpdateBackendAuthPostBodyResourceConfigFormProperties>({
			AuthResources: new FormControl<AuthResources | null | undefined>(undefined),
			Service: new FormControl<Service | null | undefined>(undefined),
		});

	}

	export interface UpdateBackendConfigPostBody {

		/** The request object for this operation. */
		loginAuthConfig?: UpdateBackendConfigPostBodyLoginAuthConfig;
	}
	export interface UpdateBackendConfigPostBodyFormProperties {
	}
	export function CreateUpdateBackendConfigPostBodyFormGroup() {
		return new FormGroup<UpdateBackendConfigPostBodyFormProperties>({
		});

	}

	export interface UpdateBackendConfigPostBodyLoginAuthConfig {
		AwsCognitoIdentityPoolId?: string;
		AwsCognitoRegion?: string;
		AwsUserPoolsId?: string;
		AwsUserPoolsWebClientId?: string;
	}
	export interface UpdateBackendConfigPostBodyLoginAuthConfigFormProperties {
		AwsCognitoIdentityPoolId: FormControl<string | null | undefined>,
		AwsCognitoRegion: FormControl<string | null | undefined>,
		AwsUserPoolsId: FormControl<string | null | undefined>,
		AwsUserPoolsWebClientId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackendConfigPostBodyLoginAuthConfigFormGroup() {
		return new FormGroup<UpdateBackendConfigPostBodyLoginAuthConfigFormProperties>({
			AwsCognitoIdentityPoolId: new FormControl<string | null | undefined>(undefined),
			AwsCognitoRegion: new FormControl<string | null | undefined>(undefined),
			AwsUserPoolsId: new FormControl<string | null | undefined>(undefined),
			AwsUserPoolsWebClientId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBackendStoragePostBody {

		/**
		 * The resource configuration for updating backend storage.
		 * Required
		 */
		resourceConfig: UpdateBackendStoragePostBodyResourceConfig;

		/**
		 * The name of the storage resource.
		 * Required
		 */
		resourceName: string;
	}
	export interface UpdateBackendStoragePostBodyFormProperties {

		/**
		 * The name of the storage resource.
		 * Required
		 */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBackendStoragePostBodyFormGroup() {
		return new FormGroup<UpdateBackendStoragePostBodyFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateBackendStoragePostBodyResourceConfig {
		Permissions?: BackendStoragePermissions;
		ServiceName?: ServiceName;
	}
	export interface UpdateBackendStoragePostBodyResourceConfigFormProperties {
		ServiceName: FormControl<ServiceName | null | undefined>,
	}
	export function CreateUpdateBackendStoragePostBodyResourceConfigFormGroup() {
		return new FormGroup<UpdateBackendStoragePostBodyResourceConfigFormProperties>({
			ServiceName: new FormControl<ServiceName | null | undefined>(undefined),
		});

	}

}

