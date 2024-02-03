import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Defines a policy of allowing every region by default and adding disallowed regions to a disallow list. */
	export interface GoogleCloudIdentitytoolkitAdminV2AllowByDefault {

		/** Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json */
		disallowedRegions?: Array<string>;
	}

	/** Defines a policy of allowing every region by default and adding disallowed regions to a disallow list. */
	export interface GoogleCloudIdentitytoolkitAdminV2AllowByDefaultFormProperties {
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2AllowByDefaultFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2AllowByDefaultFormProperties>({
		});

	}


	/** Defines a policy of only allowing regions by explicitly adding them to an allowlist. */
	export interface GoogleCloudIdentitytoolkitAdminV2AllowlistOnly {

		/** Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json */
		allowedRegions?: Array<string>;
	}

	/** Defines a policy of only allowing regions by explicitly adding them to an allowlist. */
	export interface GoogleCloudIdentitytoolkitAdminV2AllowlistOnlyFormProperties {
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2AllowlistOnlyFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2AllowlistOnlyFormProperties>({
		});

	}


	/** Configuration options related to authenticating an anonymous user. */
	export interface GoogleCloudIdentitytoolkitAdminV2Anonymous {

		/** Whether anonymous user auth is enabled for the project or not. */
		enabled?: boolean | null;
	}

	/** Configuration options related to authenticating an anonymous user. */
	export interface GoogleCloudIdentitytoolkitAdminV2AnonymousFormProperties {

		/** Whether anonymous user auth is enabled for the project or not. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2AnonymousFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2AnonymousFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Additional config for SignInWithApple. */
	export interface GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig {

		/** A list of Bundle ID's usable by this project */
		bundleIds?: Array<string>;

		/** Additional config for Apple for code flow. */
		codeFlowConfig?: GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig;
	}

	/** Additional config for SignInWithApple. */
	export interface GoogleCloudIdentitytoolkitAdminV2AppleSignInConfigFormProperties {
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2AppleSignInConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2AppleSignInConfigFormProperties>({
		});

	}


	/** Additional config for Apple for code flow. */
	export interface GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig {

		/** Key ID for the private key. */
		keyId?: string | null;

		/** Private key used for signing the client secret JWT. */
		privateKey?: string | null;

		/** Apple Developer Team ID. */
		teamId?: string | null;
	}

	/** Additional config for Apple for code flow. */
	export interface GoogleCloudIdentitytoolkitAdminV2CodeFlowConfigFormProperties {

		/** Key ID for the private key. */
		keyId: FormControl<string | null | undefined>,

		/** Private key used for signing the client secret JWT. */
		privateKey: FormControl<string | null | undefined>,

		/** Apple Developer Team ID. */
		teamId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2CodeFlowConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2CodeFlowConfigFormProperties>({
			keyId: new FormControl<string | null | undefined>(undefined),
			privateKey: new FormControl<string | null | undefined>(undefined),
			teamId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration related to Blocking Functions. */
	export interface GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig {

		/** Indicates which credentials to pass to the registered Blocking Functions. */
		forwardInboundCredentials?: GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials;

		/** Map of Trigger to event type. Key should be one of the supported event types: "beforeCreate", "beforeSignIn" */
		triggers?: {[id: string]: GoogleCloudIdentitytoolkitAdminV2Trigger };
	}

	/** Configuration related to Blocking Functions. */
	export interface GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfigFormProperties {

		/** Map of Trigger to event type. Key should be one of the supported event types: "beforeCreate", "beforeSignIn" */
		triggers: FormControl<{[id: string]: GoogleCloudIdentitytoolkitAdminV2Trigger } | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfigFormProperties>({
			triggers: new FormControl<{[id: string]: GoogleCloudIdentitytoolkitAdminV2Trigger } | null | undefined>(undefined),
		});

	}


	/** Indicates which credentials to pass to the registered Blocking Functions. */
	export interface GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials {

		/** Whether to pass the user's OAuth identity provider's access token. */
		accessToken?: boolean | null;

		/** Whether to pass the user's OIDC identity provider's ID token. */
		idToken?: boolean | null;

		/** Whether to pass the user's OAuth identity provider's refresh token. */
		refreshToken?: boolean | null;
	}

	/** Indicates which credentials to pass to the registered Blocking Functions. */
	export interface GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentialsFormProperties {

		/** Whether to pass the user's OAuth identity provider's access token. */
		accessToken: FormControl<boolean | null | undefined>,

		/** Whether to pass the user's OIDC identity provider's ID token. */
		idToken: FormControl<boolean | null | undefined>,

		/** Whether to pass the user's OAuth identity provider's refresh token. */
		refreshToken: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentialsFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentialsFormProperties>({
			accessToken: new FormControl<boolean | null | undefined>(undefined),
			idToken: new FormControl<boolean | null | undefined>(undefined),
			refreshToken: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Synchronous Cloud Function with HTTP Trigger */
	export interface GoogleCloudIdentitytoolkitAdminV2Trigger {

		/** HTTP URI trigger for the Cloud Function. */
		functionUri?: string | null;

		/** When the trigger was changed. */
		updateTime?: string | null;
	}

	/** Synchronous Cloud Function with HTTP Trigger */
	export interface GoogleCloudIdentitytoolkitAdminV2TriggerFormProperties {

		/** HTTP URI trigger for the Cloud Function. */
		functionUri: FormControl<string | null | undefined>,

		/** When the trigger was changed. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2TriggerFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2TriggerFormProperties>({
			functionUri: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options related to how clients making requests on behalf of a project should be configured. */
	export interface GoogleCloudIdentitytoolkitAdminV2ClientConfig {

		/** Output only. API key that can be used when making requests for this project. */
		apiKey?: string | null;

		/** Output only. Firebase subdomain. */
		firebaseSubdomain?: string | null;

		/** Configuration related to restricting a user's ability to affect their account. */
		permissions?: GoogleCloudIdentitytoolkitAdminV2Permissions;
	}

	/** Options related to how clients making requests on behalf of a project should be configured. */
	export interface GoogleCloudIdentitytoolkitAdminV2ClientConfigFormProperties {

		/** Output only. API key that can be used when making requests for this project. */
		apiKey: FormControl<string | null | undefined>,

		/** Output only. Firebase subdomain. */
		firebaseSubdomain: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2ClientConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2ClientConfigFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined),
			firebaseSubdomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration related to restricting a user's ability to affect their account. */
	export interface GoogleCloudIdentitytoolkitAdminV2Permissions {

		/** When true, end users cannot delete their account on the associated project through any of our API methods */
		disabledUserDeletion?: boolean | null;

		/** When true, end users cannot sign up for a new account on the associated project through any of our API methods */
		disabledUserSignup?: boolean | null;
	}

	/** Configuration related to restricting a user's ability to affect their account. */
	export interface GoogleCloudIdentitytoolkitAdminV2PermissionsFormProperties {

		/** When true, end users cannot delete their account on the associated project through any of our API methods */
		disabledUserDeletion: FormControl<boolean | null | undefined>,

		/** When true, end users cannot sign up for a new account on the associated project through any of our API methods */
		disabledUserSignup: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2PermissionsFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2PermissionsFormProperties>({
			disabledUserDeletion: new FormControl<boolean | null | undefined>(undefined),
			disabledUserSignup: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options related to how clients making requests on behalf of a tenant should be configured. */
	export interface GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig {

		/** Configuration related to restricting a user's ability to affect their account. */
		permissions?: GoogleCloudIdentitytoolkitAdminV2ClientPermissions;
	}

	/** Options related to how clients making requests on behalf of a tenant should be configured. */
	export interface GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfigFormProperties {
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2ClientPermissionConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfigFormProperties>({
		});

	}


	/** Configuration related to restricting a user's ability to affect their account. */
	export interface GoogleCloudIdentitytoolkitAdminV2ClientPermissions {

		/** When true, end users cannot delete their account on the associated project through any of our API methods */
		disabledUserDeletion?: boolean | null;

		/** When true, end users cannot sign up for a new account on the associated project through any of our API methods */
		disabledUserSignup?: boolean | null;
	}

	/** Configuration related to restricting a user's ability to affect their account. */
	export interface GoogleCloudIdentitytoolkitAdminV2ClientPermissionsFormProperties {

		/** When true, end users cannot delete their account on the associated project through any of our API methods */
		disabledUserDeletion: FormControl<boolean | null | undefined>,

		/** When true, end users cannot sign up for a new account on the associated project through any of our API methods */
		disabledUserSignup: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2ClientPermissionsFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2ClientPermissionsFormProperties>({
			disabledUserDeletion: new FormControl<boolean | null | undefined>(undefined),
			disabledUserSignup: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents an Identity Toolkit project. */
	export interface GoogleCloudIdentitytoolkitAdminV2Config {

		/** List of domains authorized for OAuth redirects */
		authorizedDomains?: Array<string>;

		/** Whether anonymous users will be auto-deleted after a period of 30 days. */
		autodeleteAnonymousUsers?: boolean | null;

		/** Configuration related to Blocking Functions. */
		blockingFunctions?: GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig;

		/** Options related to how clients making requests on behalf of a project should be configured. */
		client?: GoogleCloudIdentitytoolkitAdminV2ClientConfig;

		/** Configuration for settings related to email privacy and public visibility. Settings in this config protect against email enumeration, but may make some trade-offs in user-friendliness. */
		emailPrivacyConfig?: GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig;

		/** Options related to MultiFactor Authentication for the project. */
		mfa?: GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig;

		/** Configuration related to monitoring project activity. */
		monitoring?: GoogleCloudIdentitytoolkitAdminV2MonitoringConfig;

		/** Configuration related to multi-tenant functionality. */
		multiTenant?: GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig;

		/** Output only. The name of the Config resource. Example: "projects/my-awesome-project/config" */
		name?: string | null;

		/** Configuration related to sending notifications to users. */
		notification?: GoogleCloudIdentitytoolkitAdminV2NotificationConfig;

		/** The configuration for the password policy on the project. */
		passwordPolicyConfig?: GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig;

		/** Configuration related to quotas. */
		quota?: GoogleCloudIdentitytoolkitAdminV2QuotaConfig;

		/** The reCAPTCHA Enterprise integration config. */
		recaptchaConfig?: GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig;

		/** Configuration related to local sign in methods. */
		signIn?: GoogleCloudIdentitytoolkitAdminV2SignInConfig;

		/** Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number. */
		smsRegionConfig?: GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig;

		/** Output only. The subtype of this config. */
		subtype?: GoogleCloudIdentitytoolkitAdminV2ConfigSubtype | null;
	}

	/** Represents an Identity Toolkit project. */
	export interface GoogleCloudIdentitytoolkitAdminV2ConfigFormProperties {

		/** Whether anonymous users will be auto-deleted after a period of 30 days. */
		autodeleteAnonymousUsers: FormControl<boolean | null | undefined>,

		/** Output only. The name of the Config resource. Example: "projects/my-awesome-project/config" */
		name: FormControl<string | null | undefined>,

		/** Output only. The subtype of this config. */
		subtype: FormControl<GoogleCloudIdentitytoolkitAdminV2ConfigSubtype | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2ConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2ConfigFormProperties>({
			autodeleteAnonymousUsers: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subtype: new FormControl<GoogleCloudIdentitytoolkitAdminV2ConfigSubtype | null | undefined>(undefined),
		});

	}


	/** Configuration for settings related to email privacy and public visibility. Settings in this config protect against email enumeration, but may make some trade-offs in user-friendliness. */
	export interface GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig {

		/** Migrates the project to a state of improved email privacy. For example certain error codes are more generic to avoid giving away information on whether the account exists. In addition, this disables certain features that as a side-effect allow user enumeration. Enabling this toggle disables the fetchSignInMethodsForEmail functionality and changing the user's email to an unverified email. It is recommended to remove dependence on this functionality and enable this toggle to improve user privacy. */
		enableImprovedEmailPrivacy?: boolean | null;
	}

	/** Configuration for settings related to email privacy and public visibility. Settings in this config protect against email enumeration, but may make some trade-offs in user-friendliness. */
	export interface GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfigFormProperties {

		/** Migrates the project to a state of improved email privacy. For example certain error codes are more generic to avoid giving away information on whether the account exists. In addition, this disables certain features that as a side-effect allow user enumeration. Enabling this toggle disables the fetchSignInMethodsForEmail functionality and changing the user's email to an unverified email. It is recommended to remove dependence on this functionality and enable this toggle to improve user privacy. */
		enableImprovedEmailPrivacy: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfigFormProperties>({
			enableImprovedEmailPrivacy: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options related to MultiFactor Authentication for the project. */
	export interface GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig {

		/** A list of usable second factors for this project. */
		enabledProviders?: Array<string>;

		/** A list of usable second factors for this project along with their configurations. This field does not support phone based MFA, for that use the 'enabled_providers' field. */
		providerConfigs?: Array<GoogleCloudIdentitytoolkitAdminV2ProviderConfig>;

		/** Whether MultiFactor Authentication has been enabled for this project. */
		state?: GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigState | null;
	}

	/** Options related to MultiFactor Authentication for the project. */
	export interface GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigFormProperties {

		/** Whether MultiFactor Authentication has been enabled for this project. */
		state: FormControl<GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigState | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigFormProperties>({
			state: new FormControl<GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigState | null | undefined>(undefined),
		});

	}


	/** ProviderConfig describes the supported MFA providers along with their configurations. */
	export interface GoogleCloudIdentitytoolkitAdminV2ProviderConfig {

		/** Describes the state of the MultiFactor Authentication type. */
		state?: GoogleCloudIdentitytoolkitAdminV2ProviderConfigState | null;

		/** TotpMFAProviderConfig represents the TOTP based MFA provider. */
		totpProviderConfig?: GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig;
	}

	/** ProviderConfig describes the supported MFA providers along with their configurations. */
	export interface GoogleCloudIdentitytoolkitAdminV2ProviderConfigFormProperties {

		/** Describes the state of the MultiFactor Authentication type. */
		state: FormControl<GoogleCloudIdentitytoolkitAdminV2ProviderConfigState | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2ProviderConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2ProviderConfigFormProperties>({
			state: new FormControl<GoogleCloudIdentitytoolkitAdminV2ProviderConfigState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIdentitytoolkitAdminV2ProviderConfigState { MFA_STATE_UNSPECIFIED = 'MFA_STATE_UNSPECIFIED', DISABLED = 'DISABLED', ENABLED = 'ENABLED', MANDATORY = 'MANDATORY' }


	/** TotpMFAProviderConfig represents the TOTP based MFA provider. */
	export interface GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig {

		/** The allowed number of adjacent intervals that will be used for verification to avoid clock skew. */
		adjacentIntervals?: number | null;
	}

	/** TotpMFAProviderConfig represents the TOTP based MFA provider. */
	export interface GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfigFormProperties {

		/** The allowed number of adjacent intervals that will be used for verification to avoid clock skew. */
		adjacentIntervals: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfigFormProperties>({
			adjacentIntervals: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', DISABLED = 'DISABLED', ENABLED = 'ENABLED', MANDATORY = 'MANDATORY' }


	/** Configuration related to monitoring project activity. */
	export interface GoogleCloudIdentitytoolkitAdminV2MonitoringConfig {

		/** Configuration for logging requests made to this project to Stackdriver Logging */
		requestLogging?: GoogleCloudIdentitytoolkitAdminV2RequestLogging;
	}

	/** Configuration related to monitoring project activity. */
	export interface GoogleCloudIdentitytoolkitAdminV2MonitoringConfigFormProperties {
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2MonitoringConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2MonitoringConfigFormProperties>({
		});

	}


	/** Configuration for logging requests made to this project to Stackdriver Logging */
	export interface GoogleCloudIdentitytoolkitAdminV2RequestLogging {

		/** Whether logging is enabled for this project or not. */
		enabled?: boolean | null;
	}

	/** Configuration for logging requests made to this project to Stackdriver Logging */
	export interface GoogleCloudIdentitytoolkitAdminV2RequestLoggingFormProperties {

		/** Whether logging is enabled for this project or not. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2RequestLoggingFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2RequestLoggingFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration related to multi-tenant functionality. */
	export interface GoogleCloudIdentitytoolkitAdminV2MultiTenantConfig {

		/** Whether this project can have tenants or not. */
		allowTenants?: boolean | null;

		/** The default cloud parent org or folder that the tenant project should be created under. The parent resource name should be in the format of "/", such as "folders/123" or "organizations/456". If the value is not set, the tenant will be created under the same organization or folder as the agent project. */
		defaultTenantLocation?: string | null;
	}

	/** Configuration related to multi-tenant functionality. */
	export interface GoogleCloudIdentitytoolkitAdminV2MultiTenantConfigFormProperties {

		/** Whether this project can have tenants or not. */
		allowTenants: FormControl<boolean | null | undefined>,

		/** The default cloud parent org or folder that the tenant project should be created under. The parent resource name should be in the format of "/", such as "folders/123" or "organizations/456". If the value is not set, the tenant will be created under the same organization or folder as the agent project. */
		defaultTenantLocation: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2MultiTenantConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2MultiTenantConfigFormProperties>({
			allowTenants: new FormControl<boolean | null | undefined>(undefined),
			defaultTenantLocation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration related to sending notifications to users. */
	export interface GoogleCloudIdentitytoolkitAdminV2NotificationConfig {

		/** Default locale used for email and SMS in IETF BCP 47 format. */
		defaultLocale?: string | null;

		/** Options for email sending. */
		sendEmail?: GoogleCloudIdentitytoolkitAdminV2SendEmail;

		/** Options for SMS sending. */
		sendSms?: GoogleCloudIdentitytoolkitAdminV2SendSms;
	}

	/** Configuration related to sending notifications to users. */
	export interface GoogleCloudIdentitytoolkitAdminV2NotificationConfigFormProperties {

		/** Default locale used for email and SMS in IETF BCP 47 format. */
		defaultLocale: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2NotificationConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2NotificationConfigFormProperties>({
			defaultLocale: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for email sending. */
	export interface GoogleCloudIdentitytoolkitAdminV2SendEmail {

		/** action url in email template. */
		callbackUri?: string | null;

		/** Email template. The subject and body fields can contain the following placeholders which will be replaced with the appropriate values: %LINK% - The link to use to redeem the send OOB code. %EMAIL% - The email where the email is being sent. %NEW_EMAIL% - The new email being set for the account (when applicable). %APP_NAME% - The GCP project's display name. %DISPLAY_NAME% - The user's display name. */
		changeEmailTemplate?: GoogleCloudIdentitytoolkitAdminV2EmailTemplate;

		/** Information of custom domain DNS verification. By default, default_domain will be used. A custom domain can be configured using VerifyCustomDomain. */
		dnsInfo?: GoogleCloudIdentitytoolkitAdminV2DnsInfo;

		/** Email template. The subject and body fields can contain the following placeholders which will be replaced with the appropriate values: %LINK% - The link to use to redeem the send OOB code. %EMAIL% - The email where the email is being sent. %NEW_EMAIL% - The new email being set for the account (when applicable). %APP_NAME% - The GCP project's display name. %DISPLAY_NAME% - The user's display name. */
		legacyResetPasswordTemplate?: GoogleCloudIdentitytoolkitAdminV2EmailTemplate;

		/** The method used for sending an email. */
		method?: GoogleCloudIdentitytoolkitAdminV2SendEmailMethod | null;

		/** Email template. The subject and body fields can contain the following placeholders which will be replaced with the appropriate values: %LINK% - The link to use to redeem the send OOB code. %EMAIL% - The email where the email is being sent. %NEW_EMAIL% - The new email being set for the account (when applicable). %APP_NAME% - The GCP project's display name. %DISPLAY_NAME% - The user's display name. */
		resetPasswordTemplate?: GoogleCloudIdentitytoolkitAdminV2EmailTemplate;

		/** Email template. The subject and body fields can contain the following placeholders which will be replaced with the appropriate values: %LINK% - The link to use to redeem the send OOB code. %EMAIL% - The email where the email is being sent. %NEW_EMAIL% - The new email being set for the account (when applicable). %APP_NAME% - The GCP project's display name. %DISPLAY_NAME% - The user's display name. */
		revertSecondFactorAdditionTemplate?: GoogleCloudIdentitytoolkitAdminV2EmailTemplate;

		/** Configuration for SMTP relay */
		smtp?: GoogleCloudIdentitytoolkitAdminV2Smtp;

		/** Email template. The subject and body fields can contain the following placeholders which will be replaced with the appropriate values: %LINK% - The link to use to redeem the send OOB code. %EMAIL% - The email where the email is being sent. %NEW_EMAIL% - The new email being set for the account (when applicable). %APP_NAME% - The GCP project's display name. %DISPLAY_NAME% - The user's display name. */
		verifyEmailTemplate?: GoogleCloudIdentitytoolkitAdminV2EmailTemplate;
	}

	/** Options for email sending. */
	export interface GoogleCloudIdentitytoolkitAdminV2SendEmailFormProperties {

		/** action url in email template. */
		callbackUri: FormControl<string | null | undefined>,

		/** The method used for sending an email. */
		method: FormControl<GoogleCloudIdentitytoolkitAdminV2SendEmailMethod | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2SendEmailFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2SendEmailFormProperties>({
			callbackUri: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<GoogleCloudIdentitytoolkitAdminV2SendEmailMethod | null | undefined>(undefined),
		});

	}


	/** Email template. The subject and body fields can contain the following placeholders which will be replaced with the appropriate values: %LINK% - The link to use to redeem the send OOB code. %EMAIL% - The email where the email is being sent. %NEW_EMAIL% - The new email being set for the account (when applicable). %APP_NAME% - The GCP project's display name. %DISPLAY_NAME% - The user's display name. */
	export interface GoogleCloudIdentitytoolkitAdminV2EmailTemplate {

		/** Email body */
		body?: string | null;

		/** Email body format */
		bodyFormat?: GoogleCloudIdentitytoolkitAdminV2EmailTemplateBodyFormat | null;

		/** Output only. Whether the body or subject of the email is customized. */
		customized?: boolean | null;

		/** Reply-to address */
		replyTo?: string | null;

		/** Sender display name */
		senderDisplayName?: string | null;

		/** Local part of From address */
		senderLocalPart?: string | null;

		/** Subject of the email */
		subject?: string | null;
	}

	/** Email template. The subject and body fields can contain the following placeholders which will be replaced with the appropriate values: %LINK% - The link to use to redeem the send OOB code. %EMAIL% - The email where the email is being sent. %NEW_EMAIL% - The new email being set for the account (when applicable). %APP_NAME% - The GCP project's display name. %DISPLAY_NAME% - The user's display name. */
	export interface GoogleCloudIdentitytoolkitAdminV2EmailTemplateFormProperties {

		/** Email body */
		body: FormControl<string | null | undefined>,

		/** Email body format */
		bodyFormat: FormControl<GoogleCloudIdentitytoolkitAdminV2EmailTemplateBodyFormat | null | undefined>,

		/** Output only. Whether the body or subject of the email is customized. */
		customized: FormControl<boolean | null | undefined>,

		/** Reply-to address */
		replyTo: FormControl<string | null | undefined>,

		/** Sender display name */
		senderDisplayName: FormControl<string | null | undefined>,

		/** Local part of From address */
		senderLocalPart: FormControl<string | null | undefined>,

		/** Subject of the email */
		subject: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2EmailTemplateFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2EmailTemplateFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			bodyFormat: new FormControl<GoogleCloudIdentitytoolkitAdminV2EmailTemplateBodyFormat | null | undefined>(undefined),
			customized: new FormControl<boolean | null | undefined>(undefined),
			replyTo: new FormControl<string | null | undefined>(undefined),
			senderDisplayName: new FormControl<string | null | undefined>(undefined),
			senderLocalPart: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIdentitytoolkitAdminV2EmailTemplateBodyFormat { BODY_FORMAT_UNSPECIFIED = 'BODY_FORMAT_UNSPECIFIED', PLAIN_TEXT = 'PLAIN_TEXT', HTML = 'HTML' }


	/** Information of custom domain DNS verification. By default, default_domain will be used. A custom domain can be configured using VerifyCustomDomain. */
	export interface GoogleCloudIdentitytoolkitAdminV2DnsInfo {

		/** Output only. The applied verified custom domain. */
		customDomain?: string | null;

		/** Output only. The current verification state of the custom domain. The custom domain will only be used once the domain verification is successful. */
		customDomainState?: GoogleCloudIdentitytoolkitAdminV2DnsInfoCustomDomainState | null;

		/** Output only. The timestamp of initial request for the current domain verification. */
		domainVerificationRequestTime?: string | null;

		/** Output only. The custom domain that's to be verified. */
		pendingCustomDomain?: string | null;

		/** Whether to use custom domain. */
		useCustomDomain?: boolean | null;
	}

	/** Information of custom domain DNS verification. By default, default_domain will be used. A custom domain can be configured using VerifyCustomDomain. */
	export interface GoogleCloudIdentitytoolkitAdminV2DnsInfoFormProperties {

		/** Output only. The applied verified custom domain. */
		customDomain: FormControl<string | null | undefined>,

		/** Output only. The current verification state of the custom domain. The custom domain will only be used once the domain verification is successful. */
		customDomainState: FormControl<GoogleCloudIdentitytoolkitAdminV2DnsInfoCustomDomainState | null | undefined>,

		/** Output only. The timestamp of initial request for the current domain verification. */
		domainVerificationRequestTime: FormControl<string | null | undefined>,

		/** Output only. The custom domain that's to be verified. */
		pendingCustomDomain: FormControl<string | null | undefined>,

		/** Whether to use custom domain. */
		useCustomDomain: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2DnsInfoFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2DnsInfoFormProperties>({
			customDomain: new FormControl<string | null | undefined>(undefined),
			customDomainState: new FormControl<GoogleCloudIdentitytoolkitAdminV2DnsInfoCustomDomainState | null | undefined>(undefined),
			domainVerificationRequestTime: new FormControl<string | null | undefined>(undefined),
			pendingCustomDomain: new FormControl<string | null | undefined>(undefined),
			useCustomDomain: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIdentitytoolkitAdminV2DnsInfoCustomDomainState { VERIFICATION_STATE_UNSPECIFIED = 'VERIFICATION_STATE_UNSPECIFIED', NOT_STARTED = 'NOT_STARTED', IN_PROGRESS = 'IN_PROGRESS', FAILED = 'FAILED', SUCCEEDED = 'SUCCEEDED' }

	export enum GoogleCloudIdentitytoolkitAdminV2SendEmailMethod { METHOD_UNSPECIFIED = 'METHOD_UNSPECIFIED', DEFAULT = 'DEFAULT', CUSTOM_SMTP = 'CUSTOM_SMTP' }


	/** Configuration for SMTP relay */
	export interface GoogleCloudIdentitytoolkitAdminV2Smtp {

		/** SMTP relay host */
		host?: string | null;

		/** SMTP relay password */
		password?: string | null;

		/** SMTP relay port */
		port?: number | null;

		/** SMTP security mode. */
		securityMode?: GoogleCloudIdentitytoolkitAdminV2SmtpSecurityMode | null;

		/** Sender email for the SMTP relay */
		senderEmail?: string | null;

		/** SMTP relay username */
		username?: string | null;
	}

	/** Configuration for SMTP relay */
	export interface GoogleCloudIdentitytoolkitAdminV2SmtpFormProperties {

		/** SMTP relay host */
		host: FormControl<string | null | undefined>,

		/** SMTP relay password */
		password: FormControl<string | null | undefined>,

		/** SMTP relay port */
		port: FormControl<number | null | undefined>,

		/** SMTP security mode. */
		securityMode: FormControl<GoogleCloudIdentitytoolkitAdminV2SmtpSecurityMode | null | undefined>,

		/** Sender email for the SMTP relay */
		senderEmail: FormControl<string | null | undefined>,

		/** SMTP relay username */
		username: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2SmtpFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2SmtpFormProperties>({
			host: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			securityMode: new FormControl<GoogleCloudIdentitytoolkitAdminV2SmtpSecurityMode | null | undefined>(undefined),
			senderEmail: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIdentitytoolkitAdminV2SmtpSecurityMode { SECURITY_MODE_UNSPECIFIED = 'SECURITY_MODE_UNSPECIFIED', SSL = 'SSL', START_TLS = 'START_TLS' }


	/** Options for SMS sending. */
	export interface GoogleCloudIdentitytoolkitAdminV2SendSms {

		/** The template to use when sending an SMS. */
		smsTemplate?: GoogleCloudIdentitytoolkitAdminV2SmsTemplate;

		/** Whether to use the accept_language header for SMS. */
		useDeviceLocale?: boolean | null;
	}

	/** Options for SMS sending. */
	export interface GoogleCloudIdentitytoolkitAdminV2SendSmsFormProperties {

		/** Whether to use the accept_language header for SMS. */
		useDeviceLocale: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2SendSmsFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2SendSmsFormProperties>({
			useDeviceLocale: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The template to use when sending an SMS. */
	export interface GoogleCloudIdentitytoolkitAdminV2SmsTemplate {

		/** Output only. The SMS's content. Can contain the following placeholders which will be replaced with the appropriate values: %APP_NAME% - For Android or iOS apps, the app's display name. For web apps, the domain hosting the application. %LOGIN_CODE% - The OOB code being sent in the SMS. */
		content?: string | null;
	}

	/** The template to use when sending an SMS. */
	export interface GoogleCloudIdentitytoolkitAdminV2SmsTemplateFormProperties {

		/** Output only. The SMS's content. Can contain the following placeholders which will be replaced with the appropriate values: %APP_NAME% - For Android or iOS apps, the app's display name. For web apps, the domain hosting the application. %LOGIN_CODE% - The OOB code being sent in the SMS. */
		content: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2SmsTemplateFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2SmsTemplateFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for the password policy on the project. */
	export interface GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig {

		/** Users must have a password compliant with the password policy to sign-in. */
		forceUpgradeOnSignin?: boolean | null;

		/** Output only. The last time the password policy on the project was updated. */
		lastUpdateTime?: string | null;

		/** Which enforcement mode to use for the password policy. */
		passwordPolicyEnforcementState?: GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfigPasswordPolicyEnforcementState | null;

		/** Must be of length 1. Contains the strength attributes for the password policy. */
		passwordPolicyVersions?: Array<GoogleCloudIdentitytoolkitAdminV2PasswordPolicyVersion>;
	}

	/** The configuration for the password policy on the project. */
	export interface GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfigFormProperties {

		/** Users must have a password compliant with the password policy to sign-in. */
		forceUpgradeOnSignin: FormControl<boolean | null | undefined>,

		/** Output only. The last time the password policy on the project was updated. */
		lastUpdateTime: FormControl<string | null | undefined>,

		/** Which enforcement mode to use for the password policy. */
		passwordPolicyEnforcementState: FormControl<GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfigPasswordPolicyEnforcementState | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfigFormProperties>({
			forceUpgradeOnSignin: new FormControl<boolean | null | undefined>(undefined),
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			passwordPolicyEnforcementState: new FormControl<GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfigPasswordPolicyEnforcementState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfigPasswordPolicyEnforcementState { PASSWORD_POLICY_ENFORCEMENT_STATE_UNSPECIFIED = 'PASSWORD_POLICY_ENFORCEMENT_STATE_UNSPECIFIED', OFF = 'OFF', ENFORCE = 'ENFORCE' }


	/** The strength attributes for the password policy on the project. */
	export interface GoogleCloudIdentitytoolkitAdminV2PasswordPolicyVersion {

		/** Custom strength options to enforce on user passwords. */
		customStrengthOptions?: GoogleCloudIdentitytoolkitAdminV2CustomStrengthOptions;

		/** Output only. schema version number for the password policy */
		schemaVersion?: number | null;
	}

	/** The strength attributes for the password policy on the project. */
	export interface GoogleCloudIdentitytoolkitAdminV2PasswordPolicyVersionFormProperties {

		/** Output only. schema version number for the password policy */
		schemaVersion: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2PasswordPolicyVersionFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2PasswordPolicyVersionFormProperties>({
			schemaVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Custom strength options to enforce on user passwords. */
	export interface GoogleCloudIdentitytoolkitAdminV2CustomStrengthOptions {

		/** The password must contain a lower case character. */
		containsLowercaseCharacter?: boolean | null;

		/** The password must contain a non alpha numeric character. */
		containsNonAlphanumericCharacter?: boolean | null;

		/** The password must contain a number. */
		containsNumericCharacter?: boolean | null;

		/** The password must contain an upper case character. */
		containsUppercaseCharacter?: boolean | null;

		/** Maximum password length. No default max length */
		maxPasswordLength?: number | null;

		/** Minimum password length. Range from 6 to 30 */
		minPasswordLength?: number | null;
	}

	/** Custom strength options to enforce on user passwords. */
	export interface GoogleCloudIdentitytoolkitAdminV2CustomStrengthOptionsFormProperties {

		/** The password must contain a lower case character. */
		containsLowercaseCharacter: FormControl<boolean | null | undefined>,

		/** The password must contain a non alpha numeric character. */
		containsNonAlphanumericCharacter: FormControl<boolean | null | undefined>,

		/** The password must contain a number. */
		containsNumericCharacter: FormControl<boolean | null | undefined>,

		/** The password must contain an upper case character. */
		containsUppercaseCharacter: FormControl<boolean | null | undefined>,

		/** Maximum password length. No default max length */
		maxPasswordLength: FormControl<number | null | undefined>,

		/** Minimum password length. Range from 6 to 30 */
		minPasswordLength: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2CustomStrengthOptionsFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2CustomStrengthOptionsFormProperties>({
			containsLowercaseCharacter: new FormControl<boolean | null | undefined>(undefined),
			containsNonAlphanumericCharacter: new FormControl<boolean | null | undefined>(undefined),
			containsNumericCharacter: new FormControl<boolean | null | undefined>(undefined),
			containsUppercaseCharacter: new FormControl<boolean | null | undefined>(undefined),
			maxPasswordLength: new FormControl<number | null | undefined>(undefined),
			minPasswordLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration related to quotas. */
	export interface GoogleCloudIdentitytoolkitAdminV2QuotaConfig {

		/** Temporary quota increase / decrease */
		signUpQuotaConfig?: GoogleCloudIdentitytoolkitAdminV2TemporaryQuota;
	}

	/** Configuration related to quotas. */
	export interface GoogleCloudIdentitytoolkitAdminV2QuotaConfigFormProperties {
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2QuotaConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2QuotaConfigFormProperties>({
		});

	}


	/** Temporary quota increase / decrease */
	export interface GoogleCloudIdentitytoolkitAdminV2TemporaryQuota {

		/** Corresponds to the 'refill_token_count' field in QuotaServer config */
		quota?: string | null;

		/** How long this quota will be active for */
		quotaDuration?: string | null;

		/** When this quota will take effect */
		startTime?: string | null;
	}

	/** Temporary quota increase / decrease */
	export interface GoogleCloudIdentitytoolkitAdminV2TemporaryQuotaFormProperties {

		/** Corresponds to the 'refill_token_count' field in QuotaServer config */
		quota: FormControl<string | null | undefined>,

		/** How long this quota will be active for */
		quotaDuration: FormControl<string | null | undefined>,

		/** When this quota will take effect */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2TemporaryQuotaFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2TemporaryQuotaFormProperties>({
			quota: new FormControl<string | null | undefined>(undefined),
			quotaDuration: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The reCAPTCHA Enterprise integration config. */
	export interface GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig {

		/** The reCAPTCHA config for email/password provider, containing the enforcement status. The email/password provider contains all related user flows protected by reCAPTCHA. */
		emailPasswordEnforcementState?: GoogleCloudIdentitytoolkitAdminV2RecaptchaConfigEmailPasswordEnforcementState | null;

		/** The managed rules for authentication action based on reCAPTCHA scores. The rules are shared across providers for a given tenant project. */
		managedRules?: Array<GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule>;

		/** Output only. The reCAPTCHA keys. */
		recaptchaKeys?: Array<GoogleCloudIdentitytoolkitAdminV2RecaptchaKey>;

		/** Whether to use the account defender for reCAPTCHA assessment. Defaults to `false`. */
		useAccountDefender?: boolean | null;
	}

	/** The reCAPTCHA Enterprise integration config. */
	export interface GoogleCloudIdentitytoolkitAdminV2RecaptchaConfigFormProperties {

		/** The reCAPTCHA config for email/password provider, containing the enforcement status. The email/password provider contains all related user flows protected by reCAPTCHA. */
		emailPasswordEnforcementState: FormControl<GoogleCloudIdentitytoolkitAdminV2RecaptchaConfigEmailPasswordEnforcementState | null | undefined>,

		/** Whether to use the account defender for reCAPTCHA assessment. Defaults to `false`. */
		useAccountDefender: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2RecaptchaConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2RecaptchaConfigFormProperties>({
			emailPasswordEnforcementState: new FormControl<GoogleCloudIdentitytoolkitAdminV2RecaptchaConfigEmailPasswordEnforcementState | null | undefined>(undefined),
			useAccountDefender: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIdentitytoolkitAdminV2RecaptchaConfigEmailPasswordEnforcementState { RECAPTCHA_PROVIDER_ENFORCEMENT_STATE_UNSPECIFIED = 'RECAPTCHA_PROVIDER_ENFORCEMENT_STATE_UNSPECIFIED', OFF = 'OFF', AUDIT = 'AUDIT', ENFORCE = 'ENFORCE' }


	/** The config for a reCAPTCHA managed rule. Models a single interval [start_score, end_score]. The start_score is implicit. It is either the closest smaller end_score (if one is available) or 0. Intervals in aggregate span [0, 1] without overlapping. */
	export interface GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule {

		/** The action taken if the reCAPTCHA score of a request is within the interval [start_score, end_score]. */
		action?: GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRuleAction | null;

		/** The end score (inclusive) of the score range for an action. Must be a value between 0.0 and 1.0, at 11 discrete values; e.g. 0, 0.1, 0.2, 0.3, ... 0.9, 1.0. A score of 0.0 indicates the riskiest request (likely a bot), whereas 1.0 indicates the safest request (likely a human). See https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment. */
		endScore?: number | null;
	}

	/** The config for a reCAPTCHA managed rule. Models a single interval [start_score, end_score]. The start_score is implicit. It is either the closest smaller end_score (if one is available) or 0. Intervals in aggregate span [0, 1] without overlapping. */
	export interface GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRuleFormProperties {

		/** The action taken if the reCAPTCHA score of a request is within the interval [start_score, end_score]. */
		action: FormControl<GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRuleAction | null | undefined>,

		/** The end score (inclusive) of the score range for an action. Must be a value between 0.0 and 1.0, at 11 discrete values; e.g. 0, 0.1, 0.2, 0.3, ... 0.9, 1.0. A score of 0.0 indicates the riskiest request (likely a bot), whereas 1.0 indicates the safest request (likely a human). See https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment. */
		endScore: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRuleFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRuleFormProperties>({
			action: new FormControl<GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRuleAction | null | undefined>(undefined),
			endScore: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRuleAction { RECAPTCHA_ACTION_UNSPECIFIED = 'RECAPTCHA_ACTION_UNSPECIFIED', BLOCK = 'BLOCK' }


	/** The reCAPTCHA key config. reCAPTCHA Enterprise offers different keys for different client platforms. */
	export interface GoogleCloudIdentitytoolkitAdminV2RecaptchaKey {

		/** The reCAPTCHA Enterprise key resource name, e.g. "projects/{project}/keys/{key}" */
		key?: string | null;

		/** The client's platform type. */
		type?: GoogleCloudIdentitytoolkitAdminV2RecaptchaKeyType | null;
	}

	/** The reCAPTCHA key config. reCAPTCHA Enterprise offers different keys for different client platforms. */
	export interface GoogleCloudIdentitytoolkitAdminV2RecaptchaKeyFormProperties {

		/** The reCAPTCHA Enterprise key resource name, e.g. "projects/{project}/keys/{key}" */
		key: FormControl<string | null | undefined>,

		/** The client's platform type. */
		type: FormControl<GoogleCloudIdentitytoolkitAdminV2RecaptchaKeyType | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2RecaptchaKeyFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2RecaptchaKeyFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudIdentitytoolkitAdminV2RecaptchaKeyType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIdentitytoolkitAdminV2RecaptchaKeyType { CLIENT_TYPE_UNSPECIFIED = 'CLIENT_TYPE_UNSPECIFIED', WEB = 'WEB', IOS = 'IOS', ANDROID = 'ANDROID' }


	/** Configuration related to local sign in methods. */
	export interface GoogleCloudIdentitytoolkitAdminV2SignInConfig {

		/** Whether to allow more than one account to have the same email. */
		allowDuplicateEmails?: boolean | null;

		/** Configuration options related to authenticating an anonymous user. */
		anonymous?: GoogleCloudIdentitytoolkitAdminV2Anonymous;

		/** Configuration options related to authenticating a user by their email address. */
		email?: GoogleCloudIdentitytoolkitAdminV2Email;

		/** History information of the hash algorithm and key. Different accounts' passwords may be generated by different version. */
		hashConfig?: GoogleCloudIdentitytoolkitAdminV2HashConfig;

		/** Configuration options related to authenticated a user by their phone number. */
		phoneNumber?: GoogleCloudIdentitytoolkitAdminV2PhoneNumber;
	}

	/** Configuration related to local sign in methods. */
	export interface GoogleCloudIdentitytoolkitAdminV2SignInConfigFormProperties {

		/** Whether to allow more than one account to have the same email. */
		allowDuplicateEmails: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2SignInConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2SignInConfigFormProperties>({
			allowDuplicateEmails: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration options related to authenticating a user by their email address. */
	export interface GoogleCloudIdentitytoolkitAdminV2Email {

		/** Whether email auth is enabled for the project or not. */
		enabled?: boolean | null;

		/** Whether a password is required for email auth or not. If true, both an email and password must be provided to sign in. If false, a user may sign in via either email/password or email link. */
		passwordRequired?: boolean | null;
	}

	/** Configuration options related to authenticating a user by their email address. */
	export interface GoogleCloudIdentitytoolkitAdminV2EmailFormProperties {

		/** Whether email auth is enabled for the project or not. */
		enabled: FormControl<boolean | null | undefined>,

		/** Whether a password is required for email auth or not. If true, both an email and password must be provided to sign in. If false, a user may sign in via either email/password or email link. */
		passwordRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2EmailFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2EmailFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			passwordRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** History information of the hash algorithm and key. Different accounts' passwords may be generated by different version. */
	export interface GoogleCloudIdentitytoolkitAdminV2HashConfig {

		/** Output only. Different password hash algorithms used in Identity Toolkit. */
		algorithm?: GoogleCloudIdentitytoolkitAdminV2HashConfigAlgorithm | null;

		/** Output only. Memory cost for hash calculation. Used by scrypt and other similar password derivation algorithms. See https://tools.ietf.org/html/rfc7914 for explanation of field. */
		memoryCost?: number | null;

		/** Output only. How many rounds for hash calculation. Used by scrypt and other similar password derivation algorithms. */
		rounds?: number | null;

		/** Output only. Non-printable character to be inserted between the salt and plain text password in base64. */
		saltSeparator?: string | null;

		/** Output only. Signer key in base64. */
		signerKey?: string | null;
	}

	/** History information of the hash algorithm and key. Different accounts' passwords may be generated by different version. */
	export interface GoogleCloudIdentitytoolkitAdminV2HashConfigFormProperties {

		/** Output only. Different password hash algorithms used in Identity Toolkit. */
		algorithm: FormControl<GoogleCloudIdentitytoolkitAdminV2HashConfigAlgorithm | null | undefined>,

		/** Output only. Memory cost for hash calculation. Used by scrypt and other similar password derivation algorithms. See https://tools.ietf.org/html/rfc7914 for explanation of field. */
		memoryCost: FormControl<number | null | undefined>,

		/** Output only. How many rounds for hash calculation. Used by scrypt and other similar password derivation algorithms. */
		rounds: FormControl<number | null | undefined>,

		/** Output only. Non-printable character to be inserted between the salt and plain text password in base64. */
		saltSeparator: FormControl<string | null | undefined>,

		/** Output only. Signer key in base64. */
		signerKey: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2HashConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2HashConfigFormProperties>({
			algorithm: new FormControl<GoogleCloudIdentitytoolkitAdminV2HashConfigAlgorithm | null | undefined>(undefined),
			memoryCost: new FormControl<number | null | undefined>(undefined),
			rounds: new FormControl<number | null | undefined>(undefined),
			saltSeparator: new FormControl<string | null | undefined>(undefined),
			signerKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIdentitytoolkitAdminV2HashConfigAlgorithm { HASH_ALGORITHM_UNSPECIFIED = 'HASH_ALGORITHM_UNSPECIFIED', HMAC_SHA256 = 'HMAC_SHA256', HMAC_SHA1 = 'HMAC_SHA1', HMAC_MD5 = 'HMAC_MD5', SCRYPT = 'SCRYPT', PBKDF_SHA1 = 'PBKDF_SHA1', MD5 = 'MD5', HMAC_SHA512 = 'HMAC_SHA512', SHA1 = 'SHA1', BCRYPT = 'BCRYPT', PBKDF2_SHA256 = 'PBKDF2_SHA256', SHA256 = 'SHA256', SHA512 = 'SHA512', STANDARD_SCRYPT = 'STANDARD_SCRYPT' }


	/** Configuration options related to authenticated a user by their phone number. */
	export interface GoogleCloudIdentitytoolkitAdminV2PhoneNumber {

		/** Whether phone number auth is enabled for the project or not. */
		enabled?: boolean | null;

		/** A map of that can be used for phone auth testing. */
		testPhoneNumbers?: {[id: string]: string };
	}

	/** Configuration options related to authenticated a user by their phone number. */
	export interface GoogleCloudIdentitytoolkitAdminV2PhoneNumberFormProperties {

		/** Whether phone number auth is enabled for the project or not. */
		enabled: FormControl<boolean | null | undefined>,

		/** A map of that can be used for phone auth testing. */
		testPhoneNumbers: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2PhoneNumberFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2PhoneNumberFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			testPhoneNumbers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number. */
	export interface GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig {

		/** Defines a policy of allowing every region by default and adding disallowed regions to a disallow list. */
		allowByDefault?: GoogleCloudIdentitytoolkitAdminV2AllowByDefault;

		/** Defines a policy of only allowing regions by explicitly adding them to an allowlist. */
		allowlistOnly?: GoogleCloudIdentitytoolkitAdminV2AllowlistOnly;
	}

	/** Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number. */
	export interface GoogleCloudIdentitytoolkitAdminV2SmsRegionConfigFormProperties {
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2SmsRegionConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2SmsRegionConfigFormProperties>({
		});

	}

	export enum GoogleCloudIdentitytoolkitAdminV2ConfigSubtype { SUBTYPE_UNSPECIFIED = 'SUBTYPE_UNSPECIFIED', IDENTITY_PLATFORM = 'IDENTITY_PLATFORM', FIREBASE_AUTH = 'FIREBASE_AUTH' }


	/** Standard Identity Toolkit-trusted IDPs. */
	export interface GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp {

		/** Description of the Idp */
		description?: string | null;

		/** Id the of Idp */
		idpId?: string | null;
	}

	/** Standard Identity Toolkit-trusted IDPs. */
	export interface GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpFormProperties {

		/** Description of the Idp */
		description: FormControl<string | null | undefined>,

		/** Id the of Idp */
		idpId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			idpId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configurations options for authenticating with a the standard set of Identity Toolkit-trusted IDPs. */
	export interface GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig {

		/** Additional config for SignInWithApple. */
		appleSignInConfig?: GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig;

		/** OAuth client ID. */
		clientId?: string | null;

		/** OAuth client secret. */
		clientSecret?: string | null;

		/** True if allows the user to sign in with the provider. */
		enabled?: boolean | null;

		/** The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com" */
		name?: string | null;
	}

	/** Configurations options for authenticating with a the standard set of Identity Toolkit-trusted IDPs. */
	export interface GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfigFormProperties {

		/** OAuth client ID. */
		clientId: FormControl<string | null | undefined>,

		/** OAuth client secret. */
		clientSecret: FormControl<string | null | undefined>,

		/** True if allows the user to sign in with the provider. */
		enabled: FormControl<boolean | null | undefined>,

		/** The name of the DefaultSupportedIdpConfig resource, for example: "projects/my-awesome-project/defaultSupportedIdpConfigs/google.com" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfigFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP. */
	export interface GoogleCloudIdentitytoolkitAdminV2IdpCertificate {

		/** The x509 certificate */
		x509Certificate?: string | null;
	}

	/** The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP. */
	export interface GoogleCloudIdentitytoolkitAdminV2IdpCertificateFormProperties {

		/** The x509 certificate */
		x509Certificate: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2IdpCertificateFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2IdpCertificateFormProperties>({
			x509Certificate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The SAML IdP (Identity Provider) configuration when the project acts as the relying party. */
	export interface GoogleCloudIdentitytoolkitAdminV2IdpConfig {

		/** IDP's public keys for verifying signature in the assertions. */
		idpCertificates?: Array<GoogleCloudIdentitytoolkitAdminV2IdpCertificate>;

		/** Unique identifier for all SAML entities. */
		idpEntityId?: string | null;

		/** Indicates if outbounding SAMLRequest should be signed. */
		signRequest?: boolean | null;

		/** URL to send Authentication request to. */
		ssoUrl?: string | null;
	}

	/** The SAML IdP (Identity Provider) configuration when the project acts as the relying party. */
	export interface GoogleCloudIdentitytoolkitAdminV2IdpConfigFormProperties {

		/** Unique identifier for all SAML entities. */
		idpEntityId: FormControl<string | null | undefined>,

		/** Indicates if outbounding SAMLRequest should be signed. */
		signRequest: FormControl<boolean | null | undefined>,

		/** URL to send Authentication request to. */
		ssoUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2IdpConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2IdpConfigFormProperties>({
			idpEntityId: new FormControl<string | null | undefined>(undefined),
			signRequest: new FormControl<boolean | null | undefined>(undefined),
			ssoUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A pair of SAML RP-IDP configurations when the project acts as the relying party. */
	export interface GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig {

		/** The config's display name set by developers. */
		displayName?: string | null;

		/** True if allows the user to sign in with the provider. */
		enabled?: boolean | null;

		/** The SAML IdP (Identity Provider) configuration when the project acts as the relying party. */
		idpConfig?: GoogleCloudIdentitytoolkitAdminV2IdpConfig;

		/** The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests. */
		name?: string | null;

		/** The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider. */
		spConfig?: GoogleCloudIdentitytoolkitAdminV2SpConfig;
	}

	/** A pair of SAML RP-IDP configurations when the project acts as the relying party. */
	export interface GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigFormProperties {

		/** The config's display name set by developers. */
		displayName: FormControl<string | null | undefined>,

		/** True if allows the user to sign in with the provider. */
		enabled: FormControl<boolean | null | undefined>,

		/** The name of the InboundSamlConfig resource, for example: 'projects/my-awesome-project/inboundSamlConfigs/my-config-id'. Ignored during create requests. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2InboundSamlConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider. */
	export interface GoogleCloudIdentitytoolkitAdminV2SpConfig {

		/** Callback URI where responses from IDP are handled. */
		callbackUri?: string | null;

		/** Output only. Public certificates generated by the server to verify the signature in SAMLRequest in the SP-initiated flow. */
		spCertificates?: Array<GoogleCloudIdentitytoolkitAdminV2SpCertificate>;

		/** Unique identifier for all SAML entities. */
		spEntityId?: string | null;
	}

	/** The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider. */
	export interface GoogleCloudIdentitytoolkitAdminV2SpConfigFormProperties {

		/** Callback URI where responses from IDP are handled. */
		callbackUri: FormControl<string | null | undefined>,

		/** Unique identifier for all SAML entities. */
		spEntityId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2SpConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2SpConfigFormProperties>({
			callbackUri: new FormControl<string | null | undefined>(undefined),
			spEntityId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The SP's certificate data for IDP to verify the SAMLRequest generated by the SP. */
	export interface GoogleCloudIdentitytoolkitAdminV2SpCertificate {

		/** Timestamp of the cert expiration instance. */
		expiresAt?: string | null;

		/** Self-signed public certificate. */
		x509Certificate?: string | null;
	}

	/** The SP's certificate data for IDP to verify the SAMLRequest generated by the SP. */
	export interface GoogleCloudIdentitytoolkitAdminV2SpCertificateFormProperties {

		/** Timestamp of the cert expiration instance. */
		expiresAt: FormControl<string | null | undefined>,

		/** Self-signed public certificate. */
		x509Certificate: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2SpCertificateFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2SpCertificateFormProperties>({
			expiresAt: new FormControl<string | null | undefined>(undefined),
			x509Certificate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings that the tenants will inherit from project level. */
	export interface GoogleCloudIdentitytoolkitAdminV2Inheritance {

		/** Whether to allow the tenant to inherit custom domains, email templates, and custom SMTP settings. If true, email sent from tenant will follow the project level email sending configurations. If false (by default), emails will go with the default settings with no customizations. */
		emailSendingConfig?: boolean | null;
	}

	/** Settings that the tenants will inherit from project level. */
	export interface GoogleCloudIdentitytoolkitAdminV2InheritanceFormProperties {

		/** Whether to allow the tenant to inherit custom domains, email templates, and custom SMTP settings. If true, email sent from tenant will follow the project level email sending configurations. If false (by default), emails will go with the default settings with no customizations. */
		emailSendingConfig: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2InheritanceFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2InheritanceFormProperties>({
			emailSendingConfig: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request for InitializeIdentityPlatform. */
	export interface GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequest {
	}

	/** Request for InitializeIdentityPlatform. */
	export interface GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequestFormProperties {
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequestFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequestFormProperties>({
		});

	}


	/** Response for InitializeIdentityPlatform. Empty for now. */
	export interface GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse {
	}

	/** Response for InitializeIdentityPlatform. Empty for now. */
	export interface GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponseFormProperties {
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponseFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponseFormProperties>({
		});

	}


	/** Response for DefaultSupportedIdpConfigs */
	export interface GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse {

		/** The set of configs. */
		defaultSupportedIdpConfigs?: Array<GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** Response for DefaultSupportedIdpConfigs */
	export interface GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponseFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListDefaultSupportedIdps */
	export interface GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse {

		/** The set of configs. */
		defaultSupportedIdps?: Array<GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** Response for ListDefaultSupportedIdps */
	export interface GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponseFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListInboundSamlConfigs */
	export interface GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse {

		/** The set of configs. */
		inboundSamlConfigs?: Array<GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** Response for ListInboundSamlConfigs */
	export interface GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponseFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListOAuthIdpConfigs */
	export interface GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The set of configs. */
		oauthIdpConfigs?: Array<GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>;
	}

	/** Response for ListOAuthIdpConfigs */
	export interface GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponseFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration options for authenticating with an OAuth IDP. */
	export interface GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig {

		/** The client id of an OAuth client. */
		clientId?: string | null;

		/** The client secret of the OAuth client, to enable OIDC code flow. */
		clientSecret?: string | null;

		/** The config's display name set by developers. */
		displayName?: string | null;

		/** True if allows the user to sign in with the provider. */
		enabled?: boolean | null;

		/** For OIDC Idps, the issuer identifier. */
		issuer?: string | null;

		/** The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests. */
		name?: string | null;

		/** The response type to request for in the OAuth authorization flow. You can set either `id_token` or `code` to true, but not both. Setting both types to be simultaneously true (`{code: true, id_token: true}`) is not yet supported. See https://openid.net/specs/openid-connect-core-1_0.html#Authentication for a mapping of response type to OAuth 2.0 flow. */
		responseType?: GoogleCloudIdentitytoolkitAdminV2OAuthResponseType;
	}

	/** Configuration options for authenticating with an OAuth IDP. */
	export interface GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfigFormProperties {

		/** The client id of an OAuth client. */
		clientId: FormControl<string | null | undefined>,

		/** The client secret of the OAuth client, to enable OIDC code flow. */
		clientSecret: FormControl<string | null | undefined>,

		/** The config's display name set by developers. */
		displayName: FormControl<string | null | undefined>,

		/** True if allows the user to sign in with the provider. */
		enabled: FormControl<boolean | null | undefined>,

		/** For OIDC Idps, the issuer identifier. */
		issuer: FormControl<string | null | undefined>,

		/** The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2OAuthIdpConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfigFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response type to request for in the OAuth authorization flow. You can set either `id_token` or `code` to true, but not both. Setting both types to be simultaneously true (`{code: true, id_token: true}`) is not yet supported. See https://openid.net/specs/openid-connect-core-1_0.html#Authentication for a mapping of response type to OAuth 2.0 flow. */
	export interface GoogleCloudIdentitytoolkitAdminV2OAuthResponseType {

		/** If true, authorization code is returned from IdP's authorization endpoint. */
		code?: boolean | null;

		/** If true, ID token is returned from IdP's authorization endpoint. */
		idToken?: boolean | null;

		/** Do not use. The `token` response type is not supported at the moment. */
		token?: boolean | null;
	}

	/** The response type to request for in the OAuth authorization flow. You can set either `id_token` or `code` to true, but not both. Setting both types to be simultaneously true (`{code: true, id_token: true}`) is not yet supported. See https://openid.net/specs/openid-connect-core-1_0.html#Authentication for a mapping of response type to OAuth 2.0 flow. */
	export interface GoogleCloudIdentitytoolkitAdminV2OAuthResponseTypeFormProperties {

		/** If true, authorization code is returned from IdP's authorization endpoint. */
		code: FormControl<boolean | null | undefined>,

		/** If true, ID token is returned from IdP's authorization endpoint. */
		idToken: FormControl<boolean | null | undefined>,

		/** Do not use. The `token` response type is not supported at the moment. */
		token: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2OAuthResponseTypeFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2OAuthResponseTypeFormProperties>({
			code: new FormControl<boolean | null | undefined>(undefined),
			idToken: new FormControl<boolean | null | undefined>(undefined),
			token: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for ListTenants. */
	export interface GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse {

		/** The token to get the next page of results. */
		nextPageToken?: string | null;

		/** A list of tenants under the given agent project. */
		tenants?: Array<GoogleCloudIdentitytoolkitAdminV2Tenant>;
	}

	/** Response message for ListTenants. */
	export interface GoogleCloudIdentitytoolkitAdminV2ListTenantsResponseFormProperties {

		/** The token to get the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2ListTenantsResponseFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2ListTenantsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Tenant contains configuration for the tenant in a multi-tenant project. */
	export interface GoogleCloudIdentitytoolkitAdminV2Tenant {

		/** Whether to allow email/password user authentication. */
		allowPasswordSignup?: boolean | null;

		/** Whether anonymous users will be auto-deleted after a period of 30 days. */
		autodeleteAnonymousUsers?: boolean | null;

		/** Options related to how clients making requests on behalf of a tenant should be configured. */
		client?: GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig;

		/** Whether authentication is disabled for the tenant. If true, the users under the disabled tenant are not allowed to sign-in. Admins of the disabled tenant are not able to manage its users. */
		disableAuth?: boolean | null;

		/** Display name of the tenant. */
		displayName?: string | null;

		/** Configuration for settings related to email privacy and public visibility. Settings in this config protect against email enumeration, but may make some trade-offs in user-friendliness. */
		emailPrivacyConfig?: GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig;

		/** Whether to enable anonymous user authentication. */
		enableAnonymousUser?: boolean | null;

		/** Whether to enable email link user authentication. */
		enableEmailLinkSignin?: boolean | null;

		/** History information of the hash algorithm and key. Different accounts' passwords may be generated by different version. */
		hashConfig?: GoogleCloudIdentitytoolkitAdminV2HashConfig;

		/** Settings that the tenants will inherit from project level. */
		inheritance?: GoogleCloudIdentitytoolkitAdminV2Inheritance;

		/** Options related to MultiFactor Authentication for the project. */
		mfaConfig?: GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig;

		/** Configuration related to monitoring project activity. */
		monitoring?: GoogleCloudIdentitytoolkitAdminV2MonitoringConfig;

		/** Output only. Resource name of a tenant. For example: "projects/{project-id}/tenants/{tenant-id}" */
		name?: string | null;

		/** The configuration for the password policy on the project. */
		passwordPolicyConfig?: GoogleCloudIdentitytoolkitAdminV2PasswordPolicyConfig;

		/** The reCAPTCHA Enterprise integration config. */
		recaptchaConfig?: GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig;

		/** Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number. */
		smsRegionConfig?: GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig;

		/** A map of pairs that can be used for MFA. The phone number should be in E.164 format (https://www.itu.int/rec/T-REC-E.164/) and a maximum of 10 pairs can be added (error will be thrown once exceeded). */
		testPhoneNumbers?: {[id: string]: string };
	}

	/** A Tenant contains configuration for the tenant in a multi-tenant project. */
	export interface GoogleCloudIdentitytoolkitAdminV2TenantFormProperties {

		/** Whether to allow email/password user authentication. */
		allowPasswordSignup: FormControl<boolean | null | undefined>,

		/** Whether anonymous users will be auto-deleted after a period of 30 days. */
		autodeleteAnonymousUsers: FormControl<boolean | null | undefined>,

		/** Whether authentication is disabled for the tenant. If true, the users under the disabled tenant are not allowed to sign-in. Admins of the disabled tenant are not able to manage its users. */
		disableAuth: FormControl<boolean | null | undefined>,

		/** Display name of the tenant. */
		displayName: FormControl<string | null | undefined>,

		/** Whether to enable anonymous user authentication. */
		enableAnonymousUser: FormControl<boolean | null | undefined>,

		/** Whether to enable email link user authentication. */
		enableEmailLinkSignin: FormControl<boolean | null | undefined>,

		/** Output only. Resource name of a tenant. For example: "projects/{project-id}/tenants/{tenant-id}" */
		name: FormControl<string | null | undefined>,

		/** A map of pairs that can be used for MFA. The phone number should be in E.164 format (https://www.itu.int/rec/T-REC-E.164/) and a maximum of 10 pairs can be added (error will be thrown once exceeded). */
		testPhoneNumbers: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitAdminV2TenantFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitAdminV2TenantFormProperties>({
			allowPasswordSignup: new FormControl<boolean | null | undefined>(undefined),
			autodeleteAnonymousUsers: new FormControl<boolean | null | undefined>(undefined),
			disableAuth: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enableAnonymousUser: new FormControl<boolean | null | undefined>(undefined),
			enableEmailLinkSignin: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			testPhoneNumbers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The information required to auto-retrieve an SMS. */
	export interface GoogleCloudIdentitytoolkitV2AutoRetrievalInfo {

		/** The Android app's signature hash for Google Play Service's SMS Retriever API. */
		appSignatureHash?: string | null;
	}

	/** The information required to auto-retrieve an SMS. */
	export interface GoogleCloudIdentitytoolkitV2AutoRetrievalInfoFormProperties {

		/** The Android app's signature hash for Google Play Service's SMS Retriever API. */
		appSignatureHash: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2AutoRetrievalInfoFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2AutoRetrievalInfoFormProperties>({
			appSignatureHash: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Custom strength options to enforce on user passwords. */
	export interface GoogleCloudIdentitytoolkitV2CustomStrengthOptions {

		/** The password must contain a lower case character. */
		containsLowercaseCharacter?: boolean | null;

		/** The password must contain a non alpha numeric character. */
		containsNonAlphanumericCharacter?: boolean | null;

		/** The password must contain a number. */
		containsNumericCharacter?: boolean | null;

		/** The password must contain an upper case character. */
		containsUppercaseCharacter?: boolean | null;

		/** Maximum password length. No default max length */
		maxPasswordLength?: number | null;

		/** Minimum password length. Range from 6 to 30 */
		minPasswordLength?: number | null;
	}

	/** Custom strength options to enforce on user passwords. */
	export interface GoogleCloudIdentitytoolkitV2CustomStrengthOptionsFormProperties {

		/** The password must contain a lower case character. */
		containsLowercaseCharacter: FormControl<boolean | null | undefined>,

		/** The password must contain a non alpha numeric character. */
		containsNonAlphanumericCharacter: FormControl<boolean | null | undefined>,

		/** The password must contain a number. */
		containsNumericCharacter: FormControl<boolean | null | undefined>,

		/** The password must contain an upper case character. */
		containsUppercaseCharacter: FormControl<boolean | null | undefined>,

		/** Maximum password length. No default max length */
		maxPasswordLength: FormControl<number | null | undefined>,

		/** Minimum password length. Range from 6 to 30 */
		minPasswordLength: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2CustomStrengthOptionsFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2CustomStrengthOptionsFormProperties>({
			containsLowercaseCharacter: new FormControl<boolean | null | undefined>(undefined),
			containsNonAlphanumericCharacter: new FormControl<boolean | null | undefined>(undefined),
			containsNumericCharacter: new FormControl<boolean | null | undefined>(undefined),
			containsUppercaseCharacter: new FormControl<boolean | null | undefined>(undefined),
			maxPasswordLength: new FormControl<number | null | undefined>(undefined),
			minPasswordLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Finishes enrolling a second factor for the user. */
	export interface GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest {

		/** Display name which is entered by users to distinguish between different second factors with same type or different type. */
		displayName?: string | null;

		/** Required. ID token. */
		idToken?: string | null;

		/** Phone Verification info for a FinalizeMfa request. */
		phoneVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;

		/** The ID of the Identity Platform tenant that the user enrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project. */
		tenantId?: string | null;

		/** Mfa request info specific to TOTP auth for FinalizeMfa. */
		totpVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo;
	}

	/** Finishes enrolling a second factor for the user. */
	export interface GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequestFormProperties {

		/** Display name which is entered by users to distinguish between different second factors with same type or different type. */
		displayName: FormControl<string | null | undefined>,

		/** Required. ID token. */
		idToken: FormControl<string | null | undefined>,

		/** The ID of the Identity Platform tenant that the user enrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequestFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequestFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Phone Verification info for a FinalizeMfa request. */
	export interface GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo {

		/** Android only. Uses for "instant" phone number verification though GmsCore. */
		androidVerificationProof?: string | null;

		/** User-entered verification code. */
		code?: string | null;

		/** Required if Android verification proof is presented. */
		phoneNumber?: string | null;

		/** An opaque string that represents the enrollment session. */
		sessionInfo?: string | null;
	}

	/** Phone Verification info for a FinalizeMfa request. */
	export interface GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfoFormProperties {

		/** Android only. Uses for "instant" phone number verification though GmsCore. */
		androidVerificationProof: FormControl<string | null | undefined>,

		/** User-entered verification code. */
		code: FormControl<string | null | undefined>,

		/** Required if Android verification proof is presented. */
		phoneNumber: FormControl<string | null | undefined>,

		/** An opaque string that represents the enrollment session. */
		sessionInfo: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfoFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfoFormProperties>({
			androidVerificationProof: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			sessionInfo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Mfa request info specific to TOTP auth for FinalizeMfa. */
	export interface GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo {

		/** An opaque string that represents the enrollment session. */
		sessionInfo?: string | null;

		/** User-entered verification code. */
		verificationCode?: string | null;
	}

	/** Mfa request info specific to TOTP auth for FinalizeMfa. */
	export interface GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfoFormProperties {

		/** An opaque string that represents the enrollment session. */
		sessionInfo: FormControl<string | null | undefined>,

		/** User-entered verification code. */
		verificationCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfoFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfoFormProperties>({
			sessionInfo: new FormControl<string | null | undefined>(undefined),
			verificationCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** FinalizeMfaEnrollment response. */
	export interface GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse {

		/** ID token updated to reflect MFA enrollment. */
		idToken?: string | null;

		/** Phone Verification info for a FinalizeMfa response. */
		phoneAuthInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo;

		/** Refresh token updated to reflect MFA enrollment. */
		refreshToken?: string | null;

		/** Mfa response info specific to TOTP auth for FinalizeMfa. */
		totpAuthInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfo;
	}

	/** FinalizeMfaEnrollment response. */
	export interface GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponseFormProperties {

		/** ID token updated to reflect MFA enrollment. */
		idToken: FormControl<string | null | undefined>,

		/** Refresh token updated to reflect MFA enrollment. */
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponseFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponseFormProperties>({
			idToken: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Phone Verification info for a FinalizeMfa response. */
	export interface GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo {

		/** Android only. Long-lived replacement for valid code tied to android device. */
		androidVerificationProof?: string | null;

		/** Android only. Expiration time of verification proof in seconds. */
		androidVerificationProofExpireTime?: string | null;

		/** For Android verification proof. */
		phoneNumber?: string | null;
	}

	/** Phone Verification info for a FinalizeMfa response. */
	export interface GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfoFormProperties {

		/** Android only. Long-lived replacement for valid code tied to android device. */
		androidVerificationProof: FormControl<string | null | undefined>,

		/** Android only. Expiration time of verification proof in seconds. */
		androidVerificationProofExpireTime: FormControl<string | null | undefined>,

		/** For Android verification proof. */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfoFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfoFormProperties>({
			androidVerificationProof: new FormControl<string | null | undefined>(undefined),
			androidVerificationProofExpireTime: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Mfa response info specific to TOTP auth for FinalizeMfa. */
	export interface GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfo {
	}

	/** Mfa response info specific to TOTP auth for FinalizeMfa. */
	export interface GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfoFormProperties {
	}
	export function CreateGoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfoFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfoFormProperties>({
		});

	}


	/** Finalizes sign-in by verifying MFA challenge. */
	export interface GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest {

		/** The MFA enrollment ID from the user's list of current MFA enrollments. */
		mfaEnrollmentId?: string | null;

		/** Required. Pending credential from first factor sign-in. */
		mfaPendingCredential?: string | null;

		/** Phone Verification info for a FinalizeMfa request. */
		phoneVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;

		/** The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project. */
		tenantId?: string | null;

		/** TOTP verification info for FinalizeMfaSignInRequest. */
		totpVerificationInfo?: GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo;
	}

	/** Finalizes sign-in by verifying MFA challenge. */
	export interface GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequestFormProperties {

		/** The MFA enrollment ID from the user's list of current MFA enrollments. */
		mfaEnrollmentId: FormControl<string | null | undefined>,

		/** Required. Pending credential from first factor sign-in. */
		mfaPendingCredential: FormControl<string | null | undefined>,

		/** The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequestFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequestFormProperties>({
			mfaEnrollmentId: new FormControl<string | null | undefined>(undefined),
			mfaPendingCredential: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TOTP verification info for FinalizeMfaSignInRequest. */
	export interface GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo {

		/** User-entered verification code. */
		verificationCode?: string | null;
	}

	/** TOTP verification info for FinalizeMfaSignInRequest. */
	export interface GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfoFormProperties {

		/** User-entered verification code. */
		verificationCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfoFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfoFormProperties>({
			verificationCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** FinalizeMfaSignIn response. */
	export interface GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse {

		/** ID token for the authenticated user. */
		idToken?: string | null;

		/** Phone Verification info for a FinalizeMfa response. */
		phoneAuthInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo;

		/** Refresh token for the authenticated user. */
		refreshToken?: string | null;
	}

	/** FinalizeMfaSignIn response. */
	export interface GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponseFormProperties {

		/** ID token for the authenticated user. */
		idToken: FormControl<string | null | undefined>,

		/** Refresh token for the authenticated user. */
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponseFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponseFormProperties>({
			idToken: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for password policy. */
	export interface GoogleCloudIdentitytoolkitV2PasswordPolicy {

		/** Output only. Allowed characters which satisfy the non_alphanumeric requirement. */
		allowedNonAlphanumericCharacters?: Array<string>;

		/** Custom strength options to enforce on user passwords. */
		customStrengthOptions?: GoogleCloudIdentitytoolkitV2CustomStrengthOptions;

		/** Output only. Which enforcement mode to use for the password policy. */
		enforcementState?: GoogleCloudIdentitytoolkitV2PasswordPolicyEnforcementState | null;

		/** Users must have a password compliant with the password policy to sign-in. */
		forceUpgradeOnSignin?: boolean | null;

		/** Output only. schema version number for the password policy */
		schemaVersion?: number | null;
	}

	/** Configuration for password policy. */
	export interface GoogleCloudIdentitytoolkitV2PasswordPolicyFormProperties {

		/** Output only. Which enforcement mode to use for the password policy. */
		enforcementState: FormControl<GoogleCloudIdentitytoolkitV2PasswordPolicyEnforcementState | null | undefined>,

		/** Users must have a password compliant with the password policy to sign-in. */
		forceUpgradeOnSignin: FormControl<boolean | null | undefined>,

		/** Output only. schema version number for the password policy */
		schemaVersion: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2PasswordPolicyFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2PasswordPolicyFormProperties>({
			enforcementState: new FormControl<GoogleCloudIdentitytoolkitV2PasswordPolicyEnforcementState | null | undefined>(undefined),
			forceUpgradeOnSignin: new FormControl<boolean | null | undefined>(undefined),
			schemaVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIdentitytoolkitV2PasswordPolicyEnforcementState { ENFORCEMENT_STATE_UNSPECIFIED = 'ENFORCEMENT_STATE_UNSPECIFIED', OFF = 'OFF', ENFORCE = 'ENFORCE' }


	/** Configuration for reCAPTCHA */
	export interface GoogleCloudIdentitytoolkitV2RecaptchaConfig {

		/** The reCAPTCHA enforcement state for the providers that GCIP supports reCAPTCHA protection. */
		recaptchaEnforcementState?: Array<GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState>;

		/** The reCAPTCHA Enterprise key resource name, e.g. "projects/{project}/keys/{key}". This will only be returned when the reCAPTCHA enforcement state is AUDIT or ENFORCE on at least one of the reCAPTCHA providers. */
		recaptchaKey?: string | null;
	}

	/** Configuration for reCAPTCHA */
	export interface GoogleCloudIdentitytoolkitV2RecaptchaConfigFormProperties {

		/** The reCAPTCHA Enterprise key resource name, e.g. "projects/{project}/keys/{key}". This will only be returned when the reCAPTCHA enforcement state is AUDIT or ENFORCE on at least one of the reCAPTCHA providers. */
		recaptchaKey: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2RecaptchaConfigFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2RecaptchaConfigFormProperties>({
			recaptchaKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Enforcement states for reCAPTCHA protection. */
	export interface GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState {

		/** The reCAPTCHA enforcement state for the provider. */
		enforcementState?: GoogleCloudIdentitytoolkitV2RecaptchaEnforcementStateEnforcementState | null;

		/** The provider that has reCAPTCHA protection. */
		provider?: GoogleCloudIdentitytoolkitV2RecaptchaEnforcementStateProvider | null;
	}

	/** Enforcement states for reCAPTCHA protection. */
	export interface GoogleCloudIdentitytoolkitV2RecaptchaEnforcementStateFormProperties {

		/** The reCAPTCHA enforcement state for the provider. */
		enforcementState: FormControl<GoogleCloudIdentitytoolkitV2RecaptchaEnforcementStateEnforcementState | null | undefined>,

		/** The provider that has reCAPTCHA protection. */
		provider: FormControl<GoogleCloudIdentitytoolkitV2RecaptchaEnforcementStateProvider | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2RecaptchaEnforcementStateFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2RecaptchaEnforcementStateFormProperties>({
			enforcementState: new FormControl<GoogleCloudIdentitytoolkitV2RecaptchaEnforcementStateEnforcementState | null | undefined>(undefined),
			provider: new FormControl<GoogleCloudIdentitytoolkitV2RecaptchaEnforcementStateProvider | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIdentitytoolkitV2RecaptchaEnforcementStateEnforcementState { ENFORCEMENT_STATE_UNSPECIFIED = 'ENFORCEMENT_STATE_UNSPECIFIED', OFF = 'OFF', AUDIT = 'AUDIT', ENFORCE = 'ENFORCE' }

	export enum GoogleCloudIdentitytoolkitV2RecaptchaEnforcementStateProvider { RECAPTCHA_PROVIDER_UNSPECIFIED = 'RECAPTCHA_PROVIDER_UNSPECIFIED', EMAIL_PASSWORD_PROVIDER = 'EMAIL_PASSWORD_PROVIDER' }


	/** Request message for RevokeToken. */
	export interface GoogleCloudIdentitytoolkitV2RevokeTokenRequest {

		/** Required. A valid Identity Platform ID token to link the account. If there was a successful token revocation request on the account and no tokens are generated after the revocation, the duplicate requests will be ignored and returned immediately. */
		idToken?: string | null;

		/** Required. The idp provider for the token. Currently only supports Apple Idp. The format should be "apple.com". */
		providerId?: string | null;

		/** The redirect URI provided in the initial authorization request made by the client to the IDP. The URI must use the HTTPS protocol, include a domain name, and can't contain an IP address or localhost. Required if token_type is CODE. */
		redirectUri?: string | null;

		/** The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project. */
		tenantId?: string | null;

		/** Required. The token to be revoked. If an authorization_code is passed in, the API will first exchange the code for access token and then revoke the token exchanged. */
		token?: string | null;

		/** Required. The type of the token to be revoked. */
		tokenType?: GoogleCloudIdentitytoolkitV2RevokeTokenRequestTokenType | null;
	}

	/** Request message for RevokeToken. */
	export interface GoogleCloudIdentitytoolkitV2RevokeTokenRequestFormProperties {

		/** Required. A valid Identity Platform ID token to link the account. If there was a successful token revocation request on the account and no tokens are generated after the revocation, the duplicate requests will be ignored and returned immediately. */
		idToken: FormControl<string | null | undefined>,

		/** Required. The idp provider for the token. Currently only supports Apple Idp. The format should be "apple.com". */
		providerId: FormControl<string | null | undefined>,

		/** The redirect URI provided in the initial authorization request made by the client to the IDP. The URI must use the HTTPS protocol, include a domain name, and can't contain an IP address or localhost. Required if token_type is CODE. */
		redirectUri: FormControl<string | null | undefined>,

		/** The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project. */
		tenantId: FormControl<string | null | undefined>,

		/** Required. The token to be revoked. If an authorization_code is passed in, the API will first exchange the code for access token and then revoke the token exchanged. */
		token: FormControl<string | null | undefined>,

		/** Required. The type of the token to be revoked. */
		tokenType: FormControl<GoogleCloudIdentitytoolkitV2RevokeTokenRequestTokenType | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2RevokeTokenRequestFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2RevokeTokenRequestFormProperties>({
			idToken: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
			redirectUri: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			tokenType: new FormControl<GoogleCloudIdentitytoolkitV2RevokeTokenRequestTokenType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIdentitytoolkitV2RevokeTokenRequestTokenType { TOKEN_TYPE_UNSPECIFIED = 'TOKEN_TYPE_UNSPECIFIED', REFRESH_TOKEN = 'REFRESH_TOKEN', ACCESS_TOKEN = 'ACCESS_TOKEN', CODE = 'CODE' }


	/** Response message for RevokeToken. Empty for now. */
	export interface GoogleCloudIdentitytoolkitV2RevokeTokenResponse {
	}

	/** Response message for RevokeToken. Empty for now. */
	export interface GoogleCloudIdentitytoolkitV2RevokeTokenResponseFormProperties {
	}
	export function CreateGoogleCloudIdentitytoolkitV2RevokeTokenResponseFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2RevokeTokenResponseFormProperties>({
		});

	}


	/** Sends MFA enrollment verification SMS for a user. */
	export interface GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest {

		/** Required. User's ID token. */
		idToken?: string | null;

		/** App Verification info for a StartMfa request. */
		phoneEnrollmentInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;

		/** The ID of the Identity Platform tenant that the user enrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project. */
		tenantId?: string | null;

		/** Mfa request info specific to TOTP auth for StartMfa. */
		totpEnrollmentInfo?: GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfo;
	}

	/** Sends MFA enrollment verification SMS for a user. */
	export interface GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequestFormProperties {

		/** Required. User's ID token. */
		idToken: FormControl<string | null | undefined>,

		/** The ID of the Identity Platform tenant that the user enrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequestFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequestFormProperties>({
			idToken: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** App Verification info for a StartMfa request. */
	export interface GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo {

		/** The information required to auto-retrieve an SMS. */
		autoRetrievalInfo?: GoogleCloudIdentitytoolkitV2AutoRetrievalInfo;

		/** iOS only. Receipt of successful app token validation with APNS. */
		iosReceipt?: string | null;

		/** iOS only. Secret delivered to iOS app via APNS. */
		iosSecret?: string | null;

		/** Required for enrollment. Phone number to be enrolled as MFA. */
		phoneNumber?: string | null;

		/** Android only. Used to assert application identity in place of a recaptcha token (or safety net token). A Play Integrity Token can be generated via the [PlayIntegrity API] (https://developer.android.com/google/play/integrity) with applying SHA256 to the `phone_number` field as the nonce. */
		playIntegrityToken?: string | null;

		/** Web only. Recaptcha solution. */
		recaptchaToken?: string | null;

		/** Android only. Used to assert application identity in place of a recaptcha token. A SafetyNet Token can be generated via the [SafetyNet Android Attestation API](https://developer.android.com/training/safetynet/attestation.html), with the Base64 encoding of the `phone_number` field as the nonce. */
		safetyNetToken?: string | null;
	}

	/** App Verification info for a StartMfa request. */
	export interface GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfoFormProperties {

		/** iOS only. Receipt of successful app token validation with APNS. */
		iosReceipt: FormControl<string | null | undefined>,

		/** iOS only. Secret delivered to iOS app via APNS. */
		iosSecret: FormControl<string | null | undefined>,

		/** Required for enrollment. Phone number to be enrolled as MFA. */
		phoneNumber: FormControl<string | null | undefined>,

		/** Android only. Used to assert application identity in place of a recaptcha token (or safety net token). A Play Integrity Token can be generated via the [PlayIntegrity API] (https://developer.android.com/google/play/integrity) with applying SHA256 to the `phone_number` field as the nonce. */
		playIntegrityToken: FormControl<string | null | undefined>,

		/** Web only. Recaptcha solution. */
		recaptchaToken: FormControl<string | null | undefined>,

		/** Android only. Used to assert application identity in place of a recaptcha token. A SafetyNet Token can be generated via the [SafetyNet Android Attestation API](https://developer.android.com/training/safetynet/attestation.html), with the Base64 encoding of the `phone_number` field as the nonce. */
		safetyNetToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfoFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfoFormProperties>({
			iosReceipt: new FormControl<string | null | undefined>(undefined),
			iosSecret: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			playIntegrityToken: new FormControl<string | null | undefined>(undefined),
			recaptchaToken: new FormControl<string | null | undefined>(undefined),
			safetyNetToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Mfa request info specific to TOTP auth for StartMfa. */
	export interface GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfo {
	}

	/** Mfa request info specific to TOTP auth for StartMfa. */
	export interface GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfoFormProperties {
	}
	export function CreateGoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfoFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfoFormProperties>({
		});

	}


	/** StartMfaEnrollment response. */
	export interface GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse {

		/** Phone Verification info for a StartMfa response. */
		phoneSessionInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo;

		/** Mfa response info specific to TOTP auth for StartMfa. */
		totpSessionInfo?: GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo;
	}

	/** StartMfaEnrollment response. */
	export interface GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponseFormProperties {
	}
	export function CreateGoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponseFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponseFormProperties>({
		});

	}


	/** Phone Verification info for a StartMfa response. */
	export interface GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo {

		/** An opaque string that represents the enrollment session. */
		sessionInfo?: string | null;
	}

	/** Phone Verification info for a StartMfa response. */
	export interface GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfoFormProperties {

		/** An opaque string that represents the enrollment session. */
		sessionInfo: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfoFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfoFormProperties>({
			sessionInfo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Mfa response info specific to TOTP auth for StartMfa. */
	export interface GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo {

		/** The time by which the enrollment must finish. */
		finalizeEnrollmentTime?: string | null;

		/** The hashing algorithm used to generate the verification code. */
		hashingAlgorithm?: string | null;

		/** Duration in seconds at which the verification code will change. */
		periodSec?: number | null;

		/** An encoded string that represents the enrollment session. */
		sessionInfo?: string | null;

		/** A base 32 encoded string that represents the shared TOTP secret. The base 32 encoding is the one specified by [RFC4648#section-6](https://datatracker.ietf.org/doc/html/rfc4648#section-6). (This is the same as the base 32 encoding from [RFC3548#section-5](https://datatracker.ietf.org/doc/html/rfc3548#section-5).) */
		sharedSecretKey?: string | null;

		/** The length of the verification code that needs to be generated. */
		verificationCodeLength?: number | null;
	}

	/** Mfa response info specific to TOTP auth for StartMfa. */
	export interface GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfoFormProperties {

		/** The time by which the enrollment must finish. */
		finalizeEnrollmentTime: FormControl<string | null | undefined>,

		/** The hashing algorithm used to generate the verification code. */
		hashingAlgorithm: FormControl<string | null | undefined>,

		/** Duration in seconds at which the verification code will change. */
		periodSec: FormControl<number | null | undefined>,

		/** An encoded string that represents the enrollment session. */
		sessionInfo: FormControl<string | null | undefined>,

		/** A base 32 encoded string that represents the shared TOTP secret. The base 32 encoding is the one specified by [RFC4648#section-6](https://datatracker.ietf.org/doc/html/rfc4648#section-6). (This is the same as the base 32 encoding from [RFC3548#section-5](https://datatracker.ietf.org/doc/html/rfc3548#section-5).) */
		sharedSecretKey: FormControl<string | null | undefined>,

		/** The length of the verification code that needs to be generated. */
		verificationCodeLength: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfoFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfoFormProperties>({
			finalizeEnrollmentTime: new FormControl<string | null | undefined>(undefined),
			hashingAlgorithm: new FormControl<string | null | undefined>(undefined),
			periodSec: new FormControl<number | null | undefined>(undefined),
			sessionInfo: new FormControl<string | null | undefined>(undefined),
			sharedSecretKey: new FormControl<string | null | undefined>(undefined),
			verificationCodeLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Starts multi-factor sign-in by sending the multi-factor auth challenge. */
	export interface GoogleCloudIdentitytoolkitV2StartMfaSignInRequest {

		/** Required. MFA enrollment id from the user's list of current MFA enrollments. */
		mfaEnrollmentId?: string | null;

		/** Required. Pending credential from first factor sign-in. */
		mfaPendingCredential?: string | null;

		/** App Verification info for a StartMfa request. */
		phoneSignInInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;

		/** The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project. */
		tenantId?: string | null;
	}

	/** Starts multi-factor sign-in by sending the multi-factor auth challenge. */
	export interface GoogleCloudIdentitytoolkitV2StartMfaSignInRequestFormProperties {

		/** Required. MFA enrollment id from the user's list of current MFA enrollments. */
		mfaEnrollmentId: FormControl<string | null | undefined>,

		/** Required. Pending credential from first factor sign-in. */
		mfaPendingCredential: FormControl<string | null | undefined>,

		/** The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2StartMfaSignInRequestFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2StartMfaSignInRequestFormProperties>({
			mfaEnrollmentId: new FormControl<string | null | undefined>(undefined),
			mfaPendingCredential: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** StartMfaSignIn response. */
	export interface GoogleCloudIdentitytoolkitV2StartMfaSignInResponse {

		/** Phone Verification info for a StartMfa response. */
		phoneResponseInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo;
	}

	/** StartMfaSignIn response. */
	export interface GoogleCloudIdentitytoolkitV2StartMfaSignInResponseFormProperties {
	}
	export function CreateGoogleCloudIdentitytoolkitV2StartMfaSignInResponseFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2StartMfaSignInResponseFormProperties>({
		});

	}


	/** Withdraws MFA. */
	export interface GoogleCloudIdentitytoolkitV2WithdrawMfaRequest {

		/** Required. User's ID token. */
		idToken?: string | null;

		/** Required. MFA enrollment id from a current MFA enrollment. */
		mfaEnrollmentId?: string | null;

		/** The ID of the Identity Platform tenant that the user unenrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project. */
		tenantId?: string | null;
	}

	/** Withdraws MFA. */
	export interface GoogleCloudIdentitytoolkitV2WithdrawMfaRequestFormProperties {

		/** Required. User's ID token. */
		idToken: FormControl<string | null | undefined>,

		/** Required. MFA enrollment id from a current MFA enrollment. */
		mfaEnrollmentId: FormControl<string | null | undefined>,

		/** The ID of the Identity Platform tenant that the user unenrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2WithdrawMfaRequestFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2WithdrawMfaRequestFormProperties>({
			idToken: new FormControl<string | null | undefined>(undefined),
			mfaEnrollmentId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Withdraws MultiFactorAuth response. */
	export interface GoogleCloudIdentitytoolkitV2WithdrawMfaResponse {

		/** ID token updated to reflect removal of the second factor. */
		idToken?: string | null;

		/** Refresh token updated to reflect removal of the second factor. */
		refreshToken?: string | null;
	}

	/** Withdraws MultiFactorAuth response. */
	export interface GoogleCloudIdentitytoolkitV2WithdrawMfaResponseFormProperties {

		/** ID token updated to reflect removal of the second factor. */
		idToken: FormControl<string | null | undefined>,

		/** Refresh token updated to reflect removal of the second factor. */
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIdentitytoolkitV2WithdrawMfaResponseFormGroup() {
		return new FormGroup<GoogleCloudIdentitytoolkitV2WithdrawMfaResponseFormProperties>({
			idToken: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface GoogleIamV1AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<GoogleIamV1AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface GoogleIamV1AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1AuditConfigFormGroup() {
		return new FormGroup<GoogleIamV1AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface GoogleIamV1AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: GoogleIamV1AuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface GoogleIamV1AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<GoogleIamV1AuditLogConfigLogType | null | undefined>,
	}
	export function CreateGoogleIamV1AuditLogConfigFormGroup() {
		return new FormGroup<GoogleIamV1AuditLogConfigFormProperties>({
			logType: new FormControl<GoogleIamV1AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum GoogleIamV1AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 'LOG_TYPE_UNSPECIFIED', ADMIN_READ = 'ADMIN_READ', DATA_WRITE = 'DATA_WRITE', DATA_READ = 'DATA_READ' }


	/** Associates `members`, or principals, with a `role`. */
	export interface GoogleIamV1Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: GoogleTypeExpr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface GoogleIamV1BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1BindingFormGroup() {
		return new FormGroup<GoogleIamV1BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface GoogleTypeExpr {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression?: string | null;

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface GoogleTypeExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeExprFormGroup() {
		return new FormGroup<GoogleTypeExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `GetIamPolicy` method. */
	export interface GoogleIamV1GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GoogleIamV1GetPolicyOptions;
	}

	/** Request message for `GetIamPolicy` method. */
	export interface GoogleIamV1GetIamPolicyRequestFormProperties {
	}
	export function CreateGoogleIamV1GetIamPolicyRequestFormGroup() {
		return new FormGroup<GoogleIamV1GetIamPolicyRequestFormProperties>({
		});

	}


	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GoogleIamV1GetPolicyOptions {

		/** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		requestedPolicyVersion?: number | null;
	}

	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GoogleIamV1GetPolicyOptionsFormProperties {

		/** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		requestedPolicyVersion: FormControl<number | null | undefined>,
	}
	export function CreateGoogleIamV1GetPolicyOptionsFormGroup() {
		return new FormGroup<GoogleIamV1GetPolicyOptionsFormProperties>({
			requestedPolicyVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface GoogleIamV1Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<GoogleIamV1AuditConfig>;

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<GoogleIamV1Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface GoogleIamV1PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreateGoogleIamV1PolicyFormGroup() {
		return new FormGroup<GoogleIamV1PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface GoogleIamV1SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: GoogleIamV1Policy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask?: string | null;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface GoogleIamV1SetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1SetIamPolicyRequestFormGroup() {
		return new FormGroup<GoogleIamV1SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface GoogleIamV1TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface GoogleIamV1TestIamPermissionsRequestFormProperties {
	}
	export function CreateGoogleIamV1TestIamPermissionsRequestFormGroup() {
		return new FormGroup<GoogleIamV1TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface GoogleIamV1TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface GoogleIamV1TestIamPermissionsResponseFormProperties {
	}
	export function CreateGoogleIamV1TestIamPermissionsResponseFormGroup() {
		return new FormGroup<GoogleIamV1TestIamPermissionsResponseFormProperties>({
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Finishes enrolling a second factor for the user.
		 * Post v2/accounts/mfaEnrollment:finalize
		 * @return {GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse} Successful response
		 */
		Identitytoolkit_accounts_mfaEnrollment_finalize(requestBody: GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest): Observable<GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse> {
			return this.http.post<GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse>(this.baseUri + 'v2/accounts/mfaEnrollment:finalize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
		 * Post v2/accounts/mfaEnrollment:start
		 * @return {GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse} Successful response
		 */
		Identitytoolkit_accounts_mfaEnrollment_start(requestBody: GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest): Observable<GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse> {
			return this.http.post<GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse>(this.baseUri + 'v2/accounts/mfaEnrollment:start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revokes one second factor from the enrolled second factors for an account.
		 * Post v2/accounts/mfaEnrollment:withdraw
		 * @return {GoogleCloudIdentitytoolkitV2WithdrawMfaResponse} Successful response
		 */
		Identitytoolkit_accounts_mfaEnrollment_withdraw(requestBody: GoogleCloudIdentitytoolkitV2WithdrawMfaRequest): Observable<GoogleCloudIdentitytoolkitV2WithdrawMfaResponse> {
			return this.http.post<GoogleCloudIdentitytoolkitV2WithdrawMfaResponse>(this.baseUri + 'v2/accounts/mfaEnrollment:withdraw', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Verifies the MFA challenge and performs sign-in
		 * Post v2/accounts/mfaSignIn:finalize
		 * @return {GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse} Successful response
		 */
		Identitytoolkit_accounts_mfaSignIn_finalize(requestBody: GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest): Observable<GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse> {
			return this.http.post<GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse>(this.baseUri + 'v2/accounts/mfaSignIn:finalize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sends the MFA challenge
		 * Post v2/accounts/mfaSignIn:start
		 * @return {GoogleCloudIdentitytoolkitV2StartMfaSignInResponse} Successful response
		 */
		Identitytoolkit_accounts_mfaSignIn_start(requestBody: GoogleCloudIdentitytoolkitV2StartMfaSignInRequest): Observable<GoogleCloudIdentitytoolkitV2StartMfaSignInResponse> {
			return this.http.post<GoogleCloudIdentitytoolkitV2StartMfaSignInResponse>(this.baseUri + 'v2/accounts/mfaSignIn:start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revokes a user's token from an Identity Provider (IdP). This is done by manually providing an IdP credential, and the token types for revocation. An [API key](https://cloud.google.com/docs/authentication/api-keys) is required in the request in order to identify the Google Cloud project.
		 * Post v2/accounts:revokeToken
		 * @return {GoogleCloudIdentitytoolkitV2RevokeTokenResponse} Successful response
		 */
		Identitytoolkit_accounts_revokeToken(requestBody: GoogleCloudIdentitytoolkitV2RevokeTokenRequest): Observable<GoogleCloudIdentitytoolkitV2RevokeTokenResponse> {
			return this.http.post<GoogleCloudIdentitytoolkitV2RevokeTokenResponse>(this.baseUri + 'v2/accounts:revokeToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all default supported Idps.
		 * Get v2/defaultSupportedIdps
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse} Successful response
		 */
		Identitytoolkit_defaultSupportedIdps_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse> {
			return this.http.get<GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse>(this.baseUri + 'v2/defaultSupportedIdps?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets password policy config set on the project or tenant.
		 * Get v2/passwordPolicy
		 * @param {string} tenantId The id of a tenant.
		 * @return {GoogleCloudIdentitytoolkitV2PasswordPolicy} Successful response
		 */
		Identitytoolkit_getPasswordPolicy(tenantId: string | null | undefined): Observable<GoogleCloudIdentitytoolkitV2PasswordPolicy> {
			return this.http.get<GoogleCloudIdentitytoolkitV2PasswordPolicy>(this.baseUri + 'v2/passwordPolicy?tenantId=' + (tenantId == null ? '' : encodeURIComponent(tenantId)), {});
		}

		/**
		 * Gets parameters needed for reCAPTCHA analysis.
		 * Get v2/recaptchaConfig
		 * @param {Identitytoolkit_getRecaptchaConfigClientType} clientType reCAPTCHA Enterprise uses separate site keys for different client types. Specify the client type to get the corresponding key.
		 * @param {string} tenantId The id of a tenant.
		 * @param {Identitytoolkit_getRecaptchaConfigVersion} version The reCAPTCHA version.
		 * @return {GoogleCloudIdentitytoolkitV2RecaptchaConfig} Successful response
		 */
		Identitytoolkit_getRecaptchaConfig(clientType: Identitytoolkit_getRecaptchaConfigClientType | null | undefined, tenantId: string | null | undefined, version: Identitytoolkit_getRecaptchaConfigVersion | null | undefined): Observable<GoogleCloudIdentitytoolkitV2RecaptchaConfig> {
			return this.http.get<GoogleCloudIdentitytoolkitV2RecaptchaConfig>(this.baseUri + 'v2/recaptchaConfig?clientType=' + clientType + '&tenantId=' + (tenantId == null ? '' : encodeURIComponent(tenantId)) + '&version=' + version, {});
		}

		/**
		 * Delete an Oidc Idp configuration for an Identity Toolkit project.
		 * Delete v2/{name}
		 * @param {string} name The resource name of the config to be deleted, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Identitytoolkit_projects_tenants_oauthIdpConfigs_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Retrieve an Oidc Idp configuration for an Identity Toolkit project.
		 * Get v2/{name}
		 * @param {string} name The resource name of the config, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'.
		 * @return {GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig} Successful response
		 */
		Identitytoolkit_projects_tenants_oauthIdpConfigs_get(name: string): Observable<GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig> {
			return this.http.get<GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update an Oidc Idp configuration for an Identity Toolkit project.
		 * Patch v2/{name}
		 * @param {string} name The name of the OAuthIdpConfig resource, for example: 'projects/my-awesome-project/oauthIdpConfigs/oauth-config-id'. Ignored during create requests.
		 * @param {string} updateMask The update mask applies to the resource. Empty update mask will result in updating nothing. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
		 * @return {GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig} Successful response
		 */
		Identitytoolkit_projects_tenants_oauthIdpConfigs_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig): Observable<GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig> {
			return this.http.patch<GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all default supported Idp configurations for an Identity Toolkit project.
		 * Get v2/{parent}/defaultSupportedIdpConfigs
		 * @param {string} parent The parent resource name, for example, "projects/my-awesome-project".
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse} Successful response
		 */
		Identitytoolkit_projects_tenants_defaultSupportedIdpConfigs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse> {
			return this.http.get<GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/defaultSupportedIdpConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a default supported Idp configuration for an Identity Toolkit project.
		 * Post v2/{parent}/defaultSupportedIdpConfigs
		 * @param {string} parent The parent resource name where the config to be created, for example: "projects/my-awesome-project"
		 * @param {string} idpId The id of the Idp to create a config for. Call ListDefaultSupportedIdps for list of all default supported Idps.
		 * @return {GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig} Successful response
		 */
		Identitytoolkit_projects_tenants_defaultSupportedIdpConfigs_create(parent: string, idpId: string | null | undefined, requestBody: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig): Observable<GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig> {
			return this.http.post<GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/defaultSupportedIdpConfigs&idpId=' + (idpId == null ? '' : encodeURIComponent(idpId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all inbound SAML configurations for an Identity Toolkit project.
		 * Get v2/{parent}/inboundSamlConfigs
		 * @param {string} parent The parent resource name, for example, "projects/my-awesome-project".
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse} Successful response
		 */
		Identitytoolkit_projects_tenants_inboundSamlConfigs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse> {
			return this.http.get<GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/inboundSamlConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create an inbound SAML configuration for an Identity Toolkit project.
		 * Post v2/{parent}/inboundSamlConfigs
		 * @param {string} parent The parent resource name where the config to be created, for example: "projects/my-awesome-project"
		 * @param {string} inboundSamlConfigId The id to use for this config.
		 * @return {GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig} Successful response
		 */
		Identitytoolkit_projects_tenants_inboundSamlConfigs_create(parent: string, inboundSamlConfigId: string | null | undefined, requestBody: GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig): Observable<GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig> {
			return this.http.post<GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/inboundSamlConfigs&inboundSamlConfigId=' + (inboundSamlConfigId == null ? '' : encodeURIComponent(inboundSamlConfigId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all Oidc Idp configurations for an Identity Toolkit project.
		 * Get v2/{parent}/oauthIdpConfigs
		 * @param {string} parent The parent resource name, for example, "projects/my-awesome-project".
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse} Successful response
		 */
		Identitytoolkit_projects_tenants_oauthIdpConfigs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse> {
			return this.http.get<GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/oauthIdpConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create an Oidc Idp configuration for an Identity Toolkit project.
		 * Post v2/{parent}/oauthIdpConfigs
		 * @param {string} parent The parent resource name where the config to be created, for example: "projects/my-awesome-project"
		 * @param {string} oauthIdpConfigId The id to use for this config.
		 * @return {GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig} Successful response
		 */
		Identitytoolkit_projects_tenants_oauthIdpConfigs_create(parent: string, oauthIdpConfigId: string | null | undefined, requestBody: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig): Observable<GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig> {
			return this.http.post<GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/oauthIdpConfigs&oauthIdpConfigId=' + (oauthIdpConfigId == null ? '' : encodeURIComponent(oauthIdpConfigId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List tenants under the given agent project. Requires read permission on the Agent project.
		 * Get v2/{parent}/tenants
		 * @param {string} parent Required. The parent resource name to list tenants for.
		 * @param {number} pageSize The maximum number of results to return, capped at 1000. If not specified, the default value is 20.
		 * @param {string} pageToken The pagination token from the response of a previous request.
		 * @return {GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse} Successful response
		 */
		Identitytoolkit_projects_tenants_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse> {
			return this.http.get<GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tenants&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a tenant. Requires write permission on the Agent project.
		 * Post v2/{parent}/tenants
		 * @param {string} parent The parent resource name where the tenant will be created. For example, "projects/project1".
		 * @return {GoogleCloudIdentitytoolkitAdminV2Tenant} Successful response
		 */
		Identitytoolkit_projects_tenants_create(parent: string, requestBody: GoogleCloudIdentitytoolkitAdminV2Tenant): Observable<GoogleCloudIdentitytoolkitAdminV2Tenant> {
			return this.http.post<GoogleCloudIdentitytoolkitAdminV2Tenant>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tenants', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
		 * Post v2/{project}/identityPlatform:initializeAuth
		 * @param {string} project The resource name of the target project the developer wants to enable Identity Platform for.
		 * @return {GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse} Successful response
		 */
		Identitytoolkit_projects_identityPlatform_initializeAuth(project: string, requestBody: GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequest): Observable<GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse> {
			return this.http.post<GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse>(this.baseUri + 'v2/' + (project == null ? '' : encodeURIComponent(project)) + '/identityPlatform:initializeAuth', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
		 * Post v2/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {GoogleIamV1Policy} Successful response
		 */
		Identitytoolkit_projects_tenants_getIamPolicy(resource: string, requestBody: GoogleIamV1GetIamPolicyRequest): Observable<GoogleIamV1Policy> {
			return this.http.post<GoogleIamV1Policy>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
		 * Post v2/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {GoogleIamV1Policy} Successful response
		 */
		Identitytoolkit_projects_tenants_setIamPolicy(resource: string, requestBody: GoogleIamV1SetIamPolicyRequest): Observable<GoogleIamV1Policy> {
			return this.http.post<GoogleIamV1Policy>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.
		 * Post v2/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {GoogleIamV1TestIamPermissionsResponse} Successful response
		 */
		Identitytoolkit_projects_tenants_testIamPermissions(resource: string, requestBody: GoogleIamV1TestIamPermissionsRequest): Observable<GoogleIamV1TestIamPermissionsResponse> {
			return this.http.post<GoogleIamV1TestIamPermissionsResponse>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Identitytoolkit_getRecaptchaConfigClientType { CLIENT_TYPE_UNSPECIFIED = 'CLIENT_TYPE_UNSPECIFIED', CLIENT_TYPE_WEB = 'CLIENT_TYPE_WEB', CLIENT_TYPE_ANDROID = 'CLIENT_TYPE_ANDROID', CLIENT_TYPE_IOS = 'CLIENT_TYPE_IOS' }

	export enum Identitytoolkit_getRecaptchaConfigVersion { RECAPTCHA_VERSION_UNSPECIFIED = 'RECAPTCHA_VERSION_UNSPECIFIED', RECAPTCHA_ENTERPRISE = 'RECAPTCHA_ENTERPRISE' }

}

