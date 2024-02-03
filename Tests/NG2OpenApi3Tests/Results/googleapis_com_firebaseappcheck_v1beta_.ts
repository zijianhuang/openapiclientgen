import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An app's App Attest configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeAppAttestAttestation and ExchangeAppAttestAssertion, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.iosApps/patch). */
	export interface GoogleFirebaseAppcheckV1betaAppAttestConfig {

		/** Required. The relative resource name of the App Attest configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` */
		name?: string | null;

		/** Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl?: string | null;
	}

	/** An app's App Attest configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeAppAttestAttestation and ExchangeAppAttestAssertion, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.iosApps/patch). */
	export interface GoogleFirebaseAppcheckV1betaAppAttestConfigFormProperties {

		/** Required. The relative resource name of the App Attest configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` */
		name: FormControl<string | null | undefined>,

		/** Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaAppAttestConfigFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaAppAttestConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			tokenTtl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check. */
	export interface GoogleFirebaseAppcheckV1betaAppCheckToken {

		/** An App Check token. App Check tokens are signed [JWTs](https://tools.ietf.org/html/rfc7519) containing claims that identify the attested app and Firebase project. This token is used to access Firebase services protected by App Check. */
		attestationToken?: string | null;

		/** An App Check token. App Check tokens are signed [JWTs](https://tools.ietf.org/html/rfc7519) containing claims that identify the attested app and Firebase project. This token is used to access Firebase services protected by App Check. */
		token?: string | null;

		/** The duration from the time this token is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
		ttl?: string | null;
	}

	/** Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check. */
	export interface GoogleFirebaseAppcheckV1betaAppCheckTokenFormProperties {

		/** An App Check token. App Check tokens are signed [JWTs](https://tools.ietf.org/html/rfc7519) containing claims that identify the attested app and Firebase project. This token is used to access Firebase services protected by App Check. */
		attestationToken: FormControl<string | null | undefined>,

		/** An App Check token. App Check tokens are signed [JWTs](https://tools.ietf.org/html/rfc7519) containing claims that identify the attested app and Firebase project. This token is used to access Firebase services protected by App Check. */
		token: FormControl<string | null | undefined>,

		/** The duration from the time this token is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaAppCheckTokenFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaAppCheckTokenFormProperties>({
			attestationToken: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check. */
	export interface GoogleFirebaseAppcheckV1betaAttestationTokenResponse {

		/** An App Check token. App Check tokens are signed [JWTs](https://tools.ietf.org/html/rfc7519) containing claims that identify the attested app and Firebase project. This token is used to access Firebase services protected by App Check. */
		attestationToken?: string | null;

		/** The duration from the time this token is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
		ttl?: string | null;
	}

	/** Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check. */
	export interface GoogleFirebaseAppcheckV1betaAttestationTokenResponseFormProperties {

		/** An App Check token. App Check tokens are signed [JWTs](https://tools.ietf.org/html/rfc7519) containing claims that identify the attested app and Firebase project. This token is used to access Firebase services protected by App Check. */
		attestationToken: FormControl<string | null | undefined>,

		/** The duration from the time this token is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaAttestationTokenResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaAttestationTokenResponseFormProperties>({
			attestationToken: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the BatchGetAppAttestConfigs method. */
	export interface GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse {

		/** AppAttestConfigs retrieved. */
		configs?: Array<GoogleFirebaseAppcheckV1betaAppAttestConfig>;
	}

	/** Response message for the BatchGetAppAttestConfigs method. */
	export interface GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponseFormProperties>({
		});

	}


	/** Response message for the BatchGetDeviceCheckConfigs method. */
	export interface GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse {

		/** DeviceCheckConfigs retrieved. */
		configs?: Array<GoogleFirebaseAppcheckV1betaDeviceCheckConfig>;
	}

	/** Response message for the BatchGetDeviceCheckConfigs method. */
	export interface GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponseFormProperties>({
		});

	}


	/** An app's DeviceCheck configuration object. This configuration is used by ExchangeDeviceCheckToken to validate device tokens issued to apps by DeviceCheck. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.iosApps/patch). */
	export interface GoogleFirebaseAppcheckV1betaDeviceCheckConfig {

		/** Required. The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account. */
		keyId?: string | null;

		/** Required. The relative resource name of the DeviceCheck configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ``` */
		name?: string | null;

		/** Required. Input only. The contents of the private key (`.p8`) file associated with the key specified by `key_id`. For security reasons, this field will never be populated in any response. */
		privateKey?: string | null;

		/** Output only. Whether the `private_key` field was previously set. Since we will never return the `private_key` field, this field is the only way to find out whether it was previously set. */
		privateKeySet?: boolean | null;

		/** Specifies the duration for which App Check tokens exchanged from DeviceCheck tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl?: string | null;
	}

	/** An app's DeviceCheck configuration object. This configuration is used by ExchangeDeviceCheckToken to validate device tokens issued to apps by DeviceCheck. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.iosApps/patch). */
	export interface GoogleFirebaseAppcheckV1betaDeviceCheckConfigFormProperties {

		/** Required. The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account. */
		keyId: FormControl<string | null | undefined>,

		/** Required. The relative resource name of the DeviceCheck configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ``` */
		name: FormControl<string | null | undefined>,

		/** Required. Input only. The contents of the private key (`.p8`) file associated with the key specified by `key_id`. For security reasons, this field will never be populated in any response. */
		privateKey: FormControl<string | null | undefined>,

		/** Output only. Whether the `private_key` field was previously set. Since we will never return the `private_key` field, this field is the only way to find out whether it was previously set. */
		privateKeySet: FormControl<boolean | null | undefined>,

		/** Specifies the duration for which App Check tokens exchanged from DeviceCheck tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaDeviceCheckConfigFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaDeviceCheckConfigFormProperties>({
			keyId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			privateKey: new FormControl<string | null | undefined>(undefined),
			privateKeySet: new FormControl<boolean | null | undefined>(undefined),
			tokenTtl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the BatchGetPlayIntegrityConfigs method. */
	export interface GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse {

		/** PlayIntegrityConfigs retrieved. */
		configs?: Array<GoogleFirebaseAppcheckV1betaPlayIntegrityConfig>;
	}

	/** Response message for the BatchGetPlayIntegrityConfigs method. */
	export interface GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponseFormProperties>({
		});

	}


	/** An app's Play Integrity configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangePlayIntegrityToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by the Play Integrity API; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.androidApps.sha/create). */
	export interface GoogleFirebaseAppcheckV1betaPlayIntegrityConfig {

		/** Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` */
		name?: string | null;

		/** Specifies the duration for which App Check tokens exchanged from Play Integrity tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl?: string | null;
	}

	/** An app's Play Integrity configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangePlayIntegrityToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by the Play Integrity API; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.androidApps.sha/create). */
	export interface GoogleFirebaseAppcheckV1betaPlayIntegrityConfigFormProperties {

		/** Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` */
		name: FormControl<string | null | undefined>,

		/** Specifies the duration for which App Check tokens exchanged from Play Integrity tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaPlayIntegrityConfigFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaPlayIntegrityConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			tokenTtl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the BatchGetRecaptchaConfigs method. */
	export interface GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse {

		/** RecaptchaConfigs retrieved. */
		configs?: Array<GoogleFirebaseAppcheckV1betaRecaptchaConfig>;
	}

	/** Response message for the BatchGetRecaptchaConfigs method. */
	export interface GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponseFormProperties>({
		});

	}


	/** An app's reCAPTCHA v3 configuration object. This configuration is used by ExchangeRecaptchaToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA v3. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. */
	export interface GoogleFirebaseAppcheckV1betaRecaptchaConfig {

		/** Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaConfig ``` */
		name?: string | null;

		/** Required. Input only. The site secret used to identify your service for reCAPTCHA v3 verification. For security reasons, this field will never be populated in any response. */
		siteSecret?: string | null;

		/** Output only. Whether the `site_secret` field was previously set. Since we will never return the `site_secret` field, this field is the only way to find out whether it was previously set. */
		siteSecretSet?: boolean | null;

		/** Specifies the duration for which App Check tokens exchanged from reCAPTCHA tokens will be valid. If unset, a default value of 1 day is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl?: string | null;
	}

	/** An app's reCAPTCHA v3 configuration object. This configuration is used by ExchangeRecaptchaToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA v3. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. */
	export interface GoogleFirebaseAppcheckV1betaRecaptchaConfigFormProperties {

		/** Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaConfig ``` */
		name: FormControl<string | null | undefined>,

		/** Required. Input only. The site secret used to identify your service for reCAPTCHA v3 verification. For security reasons, this field will never be populated in any response. */
		siteSecret: FormControl<string | null | undefined>,

		/** Output only. Whether the `site_secret` field was previously set. Since we will never return the `site_secret` field, this field is the only way to find out whether it was previously set. */
		siteSecretSet: FormControl<boolean | null | undefined>,

		/** Specifies the duration for which App Check tokens exchanged from reCAPTCHA tokens will be valid. If unset, a default value of 1 day is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaRecaptchaConfigFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaRecaptchaConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			siteSecret: new FormControl<string | null | undefined>(undefined),
			siteSecretSet: new FormControl<boolean | null | undefined>(undefined),
			tokenTtl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the BatchGetRecaptchaEnterpriseConfigs method. */
	export interface GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse {

		/** RecaptchaEnterpriseConfigs retrieved. */
		configs?: Array<GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig>;
	}

	/** Response message for the BatchGetRecaptchaEnterpriseConfigs method. */
	export interface GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponseFormProperties>({
		});

	}


	/** An app's reCAPTCHA Enterprise configuration object. This configuration is used by ExchangeRecaptchaEnterpriseToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA Enterprise. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. */
	export interface GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig {

		/** Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` */
		name?: string | null;

		/** The score-based site key [created in reCAPTCHA Enterprise](https://cloud.google.com/recaptcha-enterprise/docs/create-key#creating_a_site_key) used to [invoke reCAPTCHA and generate the reCAPTCHA tokens](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages) for your application. Important: This is *not* the `site_secret` (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key. */
		siteKey?: string | null;

		/** Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl?: string | null;
	}

	/** An app's reCAPTCHA Enterprise configuration object. This configuration is used by ExchangeRecaptchaEnterpriseToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA Enterprise. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. */
	export interface GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfigFormProperties {

		/** Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` */
		name: FormControl<string | null | undefined>,

		/** The score-based site key [created in reCAPTCHA Enterprise](https://cloud.google.com/recaptcha-enterprise/docs/create-key#creating_a_site_key) used to [invoke reCAPTCHA and generate the reCAPTCHA tokens](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages) for your application. Important: This is *not* the `site_secret` (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key. */
		siteKey: FormControl<string | null | undefined>,

		/** Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfigFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			siteKey: new FormControl<string | null | undefined>(undefined),
			tokenTtl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the BatchGetRecaptchaV3Configs method. */
	export interface GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse {

		/** RecaptchaV3Configs retrieved. */
		configs?: Array<GoogleFirebaseAppcheckV1betaRecaptchaV3Config>;
	}

	/** Response message for the BatchGetRecaptchaV3Configs method. */
	export interface GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponseFormProperties>({
		});

	}


	/** An app's reCAPTCHA v3 configuration object. This configuration is used by ExchangeRecaptchaV3Token to validate reCAPTCHA tokens issued to apps by reCAPTCHA v3. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. */
	export interface GoogleFirebaseAppcheckV1betaRecaptchaV3Config {

		/** Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` */
		name?: string | null;

		/** Required. Input only. The site secret used to identify your service for reCAPTCHA v3 verification. For security reasons, this field will never be populated in any response. */
		siteSecret?: string | null;

		/** Output only. Whether the `site_secret` field was previously set. Since we will never return the `site_secret` field, this field is the only way to find out whether it was previously set. */
		siteSecretSet?: boolean | null;

		/** Specifies the duration for which App Check tokens exchanged from reCAPTCHA tokens will be valid. If unset, a default value of 1 day is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl?: string | null;
	}

	/** An app's reCAPTCHA v3 configuration object. This configuration is used by ExchangeRecaptchaV3Token to validate reCAPTCHA tokens issued to apps by reCAPTCHA v3. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. */
	export interface GoogleFirebaseAppcheckV1betaRecaptchaV3ConfigFormProperties {

		/** Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` */
		name: FormControl<string | null | undefined>,

		/** Required. Input only. The site secret used to identify your service for reCAPTCHA v3 verification. For security reasons, this field will never be populated in any response. */
		siteSecret: FormControl<string | null | undefined>,

		/** Output only. Whether the `site_secret` field was previously set. Since we will never return the `site_secret` field, this field is the only way to find out whether it was previously set. */
		siteSecretSet: FormControl<boolean | null | undefined>,

		/** Specifies the duration for which App Check tokens exchanged from reCAPTCHA tokens will be valid. If unset, a default value of 1 day is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaRecaptchaV3ConfigFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaRecaptchaV3ConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			siteSecret: new FormControl<string | null | undefined>(undefined),
			siteSecretSet: new FormControl<boolean | null | undefined>(undefined),
			tokenTtl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the BatchGetSafetyNetConfigs method. */
	export interface GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse {

		/** SafetyNetConfigs retrieved. */
		configs?: Array<GoogleFirebaseAppcheckV1betaSafetyNetConfig>;
	}

	/** Response message for the BatchGetSafetyNetConfigs method. */
	export interface GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponseFormProperties>({
		});

	}


	/** An app's SafetyNet configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeSafetyNetToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by SafetyNet; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.androidApps.sha/create). */
	export interface GoogleFirebaseAppcheckV1betaSafetyNetConfig {

		/** Required. The relative resource name of the SafetyNet configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` */
		name?: string | null;

		/** Specifies the duration for which App Check tokens exchanged from SafetyNet tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl?: string | null;
	}

	/** An app's SafetyNet configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeSafetyNetToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by SafetyNet; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.androidApps.sha/create). */
	export interface GoogleFirebaseAppcheckV1betaSafetyNetConfigFormProperties {

		/** Required. The relative resource name of the SafetyNet configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` */
		name: FormControl<string | null | undefined>,

		/** Specifies the duration for which App Check tokens exchanged from SafetyNet tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaSafetyNetConfigFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaSafetyNetConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			tokenTtl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the BatchUpdateResourcePolicies method. */
	export interface GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequest {

		/** Required. The request messages specifying the ResourcePolicys to update. A maximum of 100 objects can be updated in a batch. */
		requests?: Array<GoogleFirebaseAppcheckV1betaUpdateResourcePolicyRequest>;

		/** Optional. A comma-separated list of names of fields in the ResourceConfigurations to update. Example: `enforcement_mode`. If this field is present, the `update_mask` field in the UpdateResourcePolicyRequest messages must all match this field, or the entire batch fails and no updates will be committed. */
		updateMask?: string | null;
	}

	/** Request message for the BatchUpdateResourcePolicies method. */
	export interface GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequestFormProperties {

		/** Optional. A comma-separated list of names of fields in the ResourceConfigurations to update. Example: `enforcement_mode`. If this field is present, the `update_mask` field in the UpdateResourcePolicyRequest messages must all match this field, or the entire batch fails and no updates will be committed. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the UpdateResourcePolicy method as well as an individual update message for the BatchUpdateResourcePolicies method. */
	export interface GoogleFirebaseAppcheckV1betaUpdateResourcePolicyRequest {

		/** App Check enforcement policy for a specific resource of a Firebase service supported by App Check. Note that this policy will override the Service level enforcement mode configuration. */
		resourcePolicy?: GoogleFirebaseAppcheckV1betaResourcePolicy;

		/** Required. A comma-separated list of names of fields in the ResourcePolicy to update. Example: `enforcement_mode`. */
		updateMask?: string | null;
	}

	/** Request message for the UpdateResourcePolicy method as well as an individual update message for the BatchUpdateResourcePolicies method. */
	export interface GoogleFirebaseAppcheckV1betaUpdateResourcePolicyRequestFormProperties {

		/** Required. A comma-separated list of names of fields in the ResourcePolicy to update. Example: `enforcement_mode`. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaUpdateResourcePolicyRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaUpdateResourcePolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** App Check enforcement policy for a specific resource of a Firebase service supported by App Check. Note that this policy will override the Service level enforcement mode configuration. */
	export interface GoogleFirebaseAppcheckV1betaResourcePolicy {

		/** Required. The App Check enforcement mode for this resource. This will override the EnforcementMode setting on the service. For new resources that you are creating, you should consider setting an override and enable enforcement on the resource immediately, if there are no outdated clients that can use it. */
		enforcementMode?: GoogleFirebaseAppcheckV1betaResourcePolicyEnforcementMode | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. This etag is strongly validated. */
		etag?: string | null;

		/** Required. The relative name of the resource configuration object, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID used as the resource ID for the policy. */
		name?: string | null;

		/** Required. Service specific name of the resource object to which this policy applies, in the format: * `//oauth2.googleapis.com/projects/{project}/oauthClients/{oauth_client_id}` (Google Identity for iOS) NOTE that the resource must belong to the service specified in the `name` and be from the same project as this policy, but it may or may not exist at the time of creation of the policy. */
		targetResource?: string | null;

		/** Output only. Timestamp when this service configuration object was most recently updated. */
		updateTime?: string | null;
	}

	/** App Check enforcement policy for a specific resource of a Firebase service supported by App Check. Note that this policy will override the Service level enforcement mode configuration. */
	export interface GoogleFirebaseAppcheckV1betaResourcePolicyFormProperties {

		/** Required. The App Check enforcement mode for this resource. This will override the EnforcementMode setting on the service. For new resources that you are creating, you should consider setting an override and enable enforcement on the resource immediately, if there are no outdated clients that can use it. */
		enforcementMode: FormControl<GoogleFirebaseAppcheckV1betaResourcePolicyEnforcementMode | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. This etag is strongly validated. */
		etag: FormControl<string | null | undefined>,

		/** Required. The relative name of the resource configuration object, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID used as the resource ID for the policy. */
		name: FormControl<string | null | undefined>,

		/** Required. Service specific name of the resource object to which this policy applies, in the format: * `//oauth2.googleapis.com/projects/{project}/oauthClients/{oauth_client_id}` (Google Identity for iOS) NOTE that the resource must belong to the service specified in the `name` and be from the same project as this policy, but it may or may not exist at the time of creation of the policy. */
		targetResource: FormControl<string | null | undefined>,

		/** Output only. Timestamp when this service configuration object was most recently updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaResourcePolicyFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaResourcePolicyFormProperties>({
			enforcementMode: new FormControl<GoogleFirebaseAppcheckV1betaResourcePolicyEnforcementMode | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			targetResource: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleFirebaseAppcheckV1betaResourcePolicyEnforcementMode { OFF = 'OFF', UNENFORCED = 'UNENFORCED', ENFORCED = 'ENFORCED' }


	/** Response message for the BatchUpdateResourcePolicies method. */
	export interface GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesResponse {

		/** ResourcePolicy objects after the updates have been applied. */
		resourcePolicies?: Array<GoogleFirebaseAppcheckV1betaResourcePolicy>;
	}

	/** Response message for the BatchUpdateResourcePolicies method. */
	export interface GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesResponseFormProperties>({
		});

	}


	/** Request message for the BatchUpdateServices method. */
	export interface GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest {

		/** Required. The request messages specifying the Services to update. A maximum of 100 objects can be updated in a batch. */
		requests?: Array<GoogleFirebaseAppcheckV1betaUpdateServiceRequest>;

		/** Optional. A comma-separated list of names of fields in the Services to update. Example: `display_name`. If this field is present, the `update_mask` field in the UpdateServiceRequest messages must all match this field, or the entire batch fails and no updates will be committed. */
		updateMask?: string | null;
	}

	/** Request message for the BatchUpdateServices method. */
	export interface GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequestFormProperties {

		/** Optional. A comma-separated list of names of fields in the Services to update. Example: `display_name`. If this field is present, the `update_mask` field in the UpdateServiceRequest messages must all match this field, or the entire batch fails and no updates will be committed. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaBatchUpdateServicesRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method. */
	export interface GoogleFirebaseAppcheckV1betaUpdateServiceRequest {

		/** The enforcement configuration for a Firebase service supported by App Check. */
		service?: GoogleFirebaseAppcheckV1betaService;

		/** Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`. */
		updateMask?: string | null;
	}

	/** Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method. */
	export interface GoogleFirebaseAppcheckV1betaUpdateServiceRequestFormProperties {

		/** Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaUpdateServiceRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaUpdateServiceRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The enforcement configuration for a Firebase service supported by App Check. */
	export interface GoogleFirebaseAppcheckV1betaService {

		/** Required. The App Check enforcement mode for this service. */
		enforcementMode?: GoogleFirebaseAppcheckV1betaResourcePolicyEnforcementMode | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. This etag is strongly validated as defined by RFC 7232. */
		etag?: string | null;

		/** Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `identitytoolkit.googleapis.com` (Firebase Authentication with Identity Platform) */
		name?: string | null;

		/** Output only. Timestamp when this service configuration object was most recently updated. */
		updateTime?: string | null;
	}

	/** The enforcement configuration for a Firebase service supported by App Check. */
	export interface GoogleFirebaseAppcheckV1betaServiceFormProperties {

		/** Required. The App Check enforcement mode for this service. */
		enforcementMode: FormControl<GoogleFirebaseAppcheckV1betaResourcePolicyEnforcementMode | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. This etag is strongly validated as defined by RFC 7232. */
		etag: FormControl<string | null | undefined>,

		/** Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) * `identitytoolkit.googleapis.com` (Firebase Authentication with Identity Platform) */
		name: FormControl<string | null | undefined>,

		/** Output only. Timestamp when this service configuration object was most recently updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaServiceFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaServiceFormProperties>({
			enforcementMode: new FormControl<GoogleFirebaseAppcheckV1betaResourcePolicyEnforcementMode | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the BatchUpdateServices method. */
	export interface GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse {

		/** Service objects after the updates have been applied. */
		services?: Array<GoogleFirebaseAppcheckV1betaService>;
	}

	/** Response message for the BatchUpdateServices method. */
	export interface GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1betaBatchUpdateServicesResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponseFormProperties>({
		});

	}


	/** A *debug token* is a secret used during the development or integration testing of an app. It essentially allows the development or integration testing to bypass app attestation while still allowing App Check to enforce protection on supported production Firebase services. */
	export interface GoogleFirebaseAppcheckV1betaDebugToken {

		/** Required. A human readable display name used to identify this debug token. */
		displayName?: string | null;

		/** Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ``` */
		name?: string | null;

		/** Required. Input only. Immutable. The secret token itself. Must be provided during creation, and must be a UUID4, case insensitive. This field is immutable once set, and cannot be provided during an UpdateDebugToken request. You can, however, delete this debug token using DeleteDebugToken to revoke it. For security reasons, this field will never be populated in any response. */
		token?: string | null;
	}

	/** A *debug token* is a secret used during the development or integration testing of an app. It essentially allows the development or integration testing to bypass app attestation while still allowing App Check to enforce protection on supported production Firebase services. */
	export interface GoogleFirebaseAppcheckV1betaDebugTokenFormProperties {

		/** Required. A human readable display name used to identify this debug token. */
		displayName: FormControl<string | null | undefined>,

		/** Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ``` */
		name: FormControl<string | null | undefined>,

		/** Required. Input only. Immutable. The secret token itself. Must be provided during creation, and must be a UUID4, case insensitive. This field is immutable once set, and cannot be provided during an UpdateDebugToken request. You can, however, delete this debug token using DeleteDebugToken to revoke it. For security reasons, this field will never be populated in any response. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaDebugTokenFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaDebugTokenFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeAppAttestAssertion method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest {

		/** Required. The artifact returned by a previous call to ExchangeAppAttestAttestation. */
		artifact?: string | null;

		/** Required. The CBOR-encoded assertion returned by the client-side App Attest API. */
		assertion?: string | null;

		/** Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge. */
		challenge?: string | null;

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse?: boolean | null;
	}

	/** Request message for the ExchangeAppAttestAssertion method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequestFormProperties {

		/** Required. The artifact returned by a previous call to ExchangeAppAttestAttestation. */
		artifact: FormControl<string | null | undefined>,

		/** Required. The CBOR-encoded assertion returned by the client-side App Attest API. */
		assertion: FormControl<string | null | undefined>,

		/** Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge. */
		challenge: FormControl<string | null | undefined>,

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequestFormProperties>({
			artifact: new FormControl<string | null | undefined>(undefined),
			assertion: new FormControl<string | null | undefined>(undefined),
			challenge: new FormControl<string | null | undefined>(undefined),
			limitedUse: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeAppAttestAttestation method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest {

		/** Required. The App Attest statement returned by the client-side App Attest API. This is a base64url encoded CBOR object in the JSON response. */
		attestationStatement?: string | null;

		/** Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge. */
		challenge?: string | null;

		/** Required. The key ID generated by App Attest for the client app. */
		keyId?: string | null;

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse?: boolean | null;
	}

	/** Request message for the ExchangeAppAttestAttestation method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequestFormProperties {

		/** Required. The App Attest statement returned by the client-side App Attest API. This is a base64url encoded CBOR object in the JSON response. */
		attestationStatement: FormControl<string | null | undefined>,

		/** Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge. */
		challenge: FormControl<string | null | undefined>,

		/** Required. The key ID generated by App Attest for the client app. */
		keyId: FormControl<string | null | undefined>,

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequestFormProperties>({
			attestationStatement: new FormControl<string | null | undefined>(undefined),
			challenge: new FormControl<string | null | undefined>(undefined),
			keyId: new FormControl<string | null | undefined>(undefined),
			limitedUse: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for the ExchangeAppAttestAttestation method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse {

		/** Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check. */
		appCheckToken?: GoogleFirebaseAppcheckV1betaAppCheckToken;

		/** An artifact that can be used in future calls to ExchangeAppAttestAssertion. */
		artifact?: string | null;

		/** Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check. */
		attestationToken?: GoogleFirebaseAppcheckV1betaAttestationTokenResponse;
	}

	/** Response message for the ExchangeAppAttestAttestation method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponseFormProperties {

		/** An artifact that can be used in future calls to ExchangeAppAttestAssertion. */
		artifact: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponseFormProperties>({
			artifact: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeCustomToken method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest {

		/** Required. A custom token signed using your project's Admin SDK service account credentials. */
		customToken?: string | null;

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse?: boolean | null;
	}

	/** Request message for the ExchangeCustomToken method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequestFormProperties {

		/** Required. A custom token signed using your project's Admin SDK service account credentials. */
		customToken: FormControl<string | null | undefined>,

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaExchangeCustomTokenRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequestFormProperties>({
			customToken: new FormControl<string | null | undefined>(undefined),
			limitedUse: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeDebugToken method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest {

		/** Required. A debug token secret. This string must match a debug token secret previously created using CreateDebugToken. */
		debugToken?: string | null;

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse?: boolean | null;
	}

	/** Request message for the ExchangeDebugToken method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequestFormProperties {

		/** Required. A debug token secret. This string must match a debug token secret previously created using CreateDebugToken. */
		debugToken: FormControl<string | null | undefined>,

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaExchangeDebugTokenRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequestFormProperties>({
			debugToken: new FormControl<string | null | undefined>(undefined),
			limitedUse: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeDeviceCheckToken method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest {

		/** Required. The `device_token` as returned by Apple's client-side [DeviceCheck API](https://developer.apple.com/documentation/devicecheck/dcdevice). This is the base64 encoded `Data` (Swift) or `NSData` (ObjC) object. */
		deviceToken?: string | null;

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse?: boolean | null;
	}

	/** Request message for the ExchangeDeviceCheckToken method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequestFormProperties {

		/** Required. The `device_token` as returned by Apple's client-side [DeviceCheck API](https://developer.apple.com/documentation/devicecheck/dcdevice). This is the base64 encoded `Data` (Swift) or `NSData` (ObjC) object. */
		deviceToken: FormControl<string | null | undefined>,

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequestFormProperties>({
			deviceToken: new FormControl<string | null | undefined>(undefined),
			limitedUse: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangePlayIntegrityToken method. */
	export interface GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest {

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse?: boolean | null;

		/** Required. The [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify) issued to your app. */
		playIntegrityToken?: string | null;
	}

	/** Request message for the ExchangePlayIntegrityToken method. */
	export interface GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequestFormProperties {

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse: FormControl<boolean | null | undefined>,

		/** Required. The [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify) issued to your app. */
		playIntegrityToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequestFormProperties>({
			limitedUse: new FormControl<boolean | null | undefined>(undefined),
			playIntegrityToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeRecaptchaEnterpriseToken method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest {

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse?: boolean | null;

		/** Required. The reCAPTCHA token as returned by the [reCAPTCHA Enterprise JavaScript API](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages). */
		recaptchaEnterpriseToken?: string | null;
	}

	/** Request message for the ExchangeRecaptchaEnterpriseToken method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequestFormProperties {

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse: FormControl<boolean | null | undefined>,

		/** Required. The reCAPTCHA token as returned by the [reCAPTCHA Enterprise JavaScript API](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages). */
		recaptchaEnterpriseToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequestFormProperties>({
			limitedUse: new FormControl<boolean | null | undefined>(undefined),
			recaptchaEnterpriseToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeRecaptchaToken method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest {

		/** Required. The reCAPTCHA token as returned by the [reCAPTCHA v3 JavaScript API](https://developers.google.com/recaptcha/docs/v3). */
		recaptchaToken?: string | null;
	}

	/** Request message for the ExchangeRecaptchaToken method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequestFormProperties {

		/** Required. The reCAPTCHA token as returned by the [reCAPTCHA v3 JavaScript API](https://developers.google.com/recaptcha/docs/v3). */
		recaptchaToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequestFormProperties>({
			recaptchaToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeRecaptchaV3Token method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest {

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse?: boolean | null;

		/** Required. The reCAPTCHA token as returned by the [reCAPTCHA v3 JavaScript API](https://developers.google.com/recaptcha/docs/v3). */
		recaptchaV3Token?: string | null;
	}

	/** Request message for the ExchangeRecaptchaV3Token method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequestFormProperties {

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse: FormControl<boolean | null | undefined>,

		/** Required. The reCAPTCHA token as returned by the [reCAPTCHA v3 JavaScript API](https://developers.google.com/recaptcha/docs/v3). */
		recaptchaV3Token: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequestFormProperties>({
			limitedUse: new FormControl<boolean | null | undefined>(undefined),
			recaptchaV3Token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeSafetyNetToken method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest {

		/** Required. The [SafetyNet attestation response](https://developer.android.com/training/safetynet/attestation#request-attestation-step) issued to your app. */
		safetyNetToken?: string | null;
	}

	/** Request message for the ExchangeSafetyNetToken method. */
	export interface GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequestFormProperties {

		/** Required. The [SafetyNet attestation response](https://developer.android.com/training/safetynet/attestation#request-attestation-step) issued to your app. */
		safetyNetToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequestFormProperties>({
			safetyNetToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the GenerateAppAttestChallenge method. */
	export interface GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeRequest {
	}

	/** Request message for the GenerateAppAttestChallenge method. */
	export interface GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeRequestFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeRequestFormProperties>({
		});

	}


	/** Response message for the GenerateAppAttestChallenge method. */
	export interface GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse {

		/** A one-time use challenge for the client to pass to the App Attest API. */
		challenge?: string | null;

		/** The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
		ttl?: string | null;
	}

	/** Response message for the GenerateAppAttestChallenge method. */
	export interface GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponseFormProperties {

		/** A one-time use challenge for the client to pass to the App Attest API. */
		challenge: FormControl<string | null | undefined>,

		/** The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponseFormProperties>({
			challenge: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the GeneratePlayIntegrityChallenge method. */
	export interface GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeRequest {
	}

	/** Request message for the GeneratePlayIntegrityChallenge method. */
	export interface GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeRequestFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeRequestFormProperties>({
		});

	}


	/** Response message for the GeneratePlayIntegrityChallenge method. */
	export interface GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse {

		/** A one-time use [challenge](https://developer.android.com/google/play/integrity/verdict#protect-against-replay-attacks) for the client to pass to the Play Integrity API. */
		challenge?: string | null;

		/** The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
		ttl?: string | null;
	}

	/** Response message for the GeneratePlayIntegrityChallenge method. */
	export interface GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponseFormProperties {

		/** A one-time use [challenge](https://developer.android.com/google/play/integrity/verdict#protect-against-replay-attacks) for the client to pass to the Play Integrity API. */
		challenge: FormControl<string | null | undefined>,

		/** The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponseFormProperties>({
			challenge: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ListDebugTokens method. */
	export interface GoogleFirebaseAppcheckV1betaListDebugTokensResponse {

		/** The DebugTokens retrieved. */
		debugTokens?: Array<GoogleFirebaseAppcheckV1betaDebugToken>;

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListDebugTokens to find the next group of DebugTokens. Page tokens are short-lived and should not be persisted. */
		nextPageToken?: string | null;
	}

	/** Response message for the ListDebugTokens method. */
	export interface GoogleFirebaseAppcheckV1betaListDebugTokensResponseFormProperties {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListDebugTokens to find the next group of DebugTokens. Page tokens are short-lived and should not be persisted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaListDebugTokensResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaListDebugTokensResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ListResourcePolicies method. */
	export interface GoogleFirebaseAppcheckV1betaListResourcePoliciesResponse {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListResourcePolicies to find the next group of ResourcePolicys. Page tokens are short-lived and should not be persisted. */
		nextPageToken?: string | null;

		/** The ResourcePolicys retrieved. */
		resourcePolicies?: Array<GoogleFirebaseAppcheckV1betaResourcePolicy>;
	}

	/** Response message for the ListResourcePolicies method. */
	export interface GoogleFirebaseAppcheckV1betaListResourcePoliciesResponseFormProperties {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListResourcePolicies to find the next group of ResourcePolicys. Page tokens are short-lived and should not be persisted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaListResourcePoliciesResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaListResourcePoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ListServices method. */
	export interface GoogleFirebaseAppcheckV1betaListServicesResponse {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListServices to find the next group of Services. Page tokens are short-lived and should not be persisted. */
		nextPageToken?: string | null;

		/** The Services retrieved. */
		services?: Array<GoogleFirebaseAppcheckV1betaService>;
	}

	/** Response message for the ListServices method. */
	export interface GoogleFirebaseAppcheckV1betaListServicesResponseFormProperties {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListServices to find the next group of Services. Page tokens are short-lived and should not be persisted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaListServicesResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaListServicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A JWK as specified by [section 4 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4) and [section 6.3.1 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1). */
	export interface GoogleFirebaseAppcheckV1betaPublicJwk {

		/** See [section 4.4 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.4). */
		alg?: string | null;

		/** See [section 6.3.1.2 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1.2). */
		e?: string | null;

		/** See [section 4.5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.5). */
		kid?: string | null;

		/** See [section 4.1 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.1). */
		kty?: string | null;

		/** See [section 6.3.1.1 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1.1). */
		n?: string | null;

		/** See [section 4.2 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.2). */
		use?: string | null;
	}

	/** A JWK as specified by [section 4 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4) and [section 6.3.1 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1). */
	export interface GoogleFirebaseAppcheckV1betaPublicJwkFormProperties {

		/** See [section 4.4 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.4). */
		alg: FormControl<string | null | undefined>,

		/** See [section 6.3.1.2 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1.2). */
		e: FormControl<string | null | undefined>,

		/** See [section 4.5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.5). */
		kid: FormControl<string | null | undefined>,

		/** See [section 4.1 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.1). */
		kty: FormControl<string | null | undefined>,

		/** See [section 6.3.1.1 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1.1). */
		n: FormControl<string | null | undefined>,

		/** See [section 4.2 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4.2). */
		use: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaPublicJwkFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaPublicJwkFormProperties>({
			alg: new FormControl<string | null | undefined>(undefined),
			e: new FormControl<string | null | undefined>(undefined),
			kid: new FormControl<string | null | undefined>(undefined),
			kty: new FormControl<string | null | undefined>(undefined),
			n: new FormControl<string | null | undefined>(undefined),
			use: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The currently active set of public keys that can be used to verify App Check tokens. This object is a JWK set as specified by [section 5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5). For security, the response **must not** be cached for longer than six hours. */
	export interface GoogleFirebaseAppcheckV1betaPublicJwkSet {

		/** The set of public keys. See [section 5.1 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5). */
		keys?: Array<GoogleFirebaseAppcheckV1betaPublicJwk>;
	}

	/** The currently active set of public keys that can be used to verify App Check tokens. This object is a JWK set as specified by [section 5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5). For security, the response **must not** be cached for longer than six hours. */
	export interface GoogleFirebaseAppcheckV1betaPublicJwkSetFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1betaPublicJwkSetFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaPublicJwkSetFormProperties>({
		});

	}


	/** Request message for the VerifyAppCheckToken method. */
	export interface GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest {

		/** Required. The App Check token to verify. App Check tokens exchanged from the SafetyNet provider are not supported; an HTTP 400 error will be returned. */
		appCheckToken?: string | null;
	}

	/** Request message for the VerifyAppCheckToken method. */
	export interface GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequestFormProperties {

		/** Required. The App Check token to verify. App Check tokens exchanged from the SafetyNet provider are not supported; an HTTP 400 error will be returned. */
		appCheckToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequestFormProperties>({
			appCheckToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the VerifyAppCheckToken method. */
	export interface GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse {

		/** Whether this token was already consumed. If this is the first time this method has seen the given App Check token, this field will be omitted from the response. The given token will then be marked as `already_consumed` (set to `true`) for all future invocations of this method for that token. Note that if the given App Check token is invalid, an HTTP 403 error is returned instead of a response containing this field, regardless whether the token was already consumed. */
		alreadyConsumed?: boolean | null;
	}

	/** Response message for the VerifyAppCheckToken method. */
	export interface GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponseFormProperties {

		/** Whether this token was already consumed. If this is the first time this method has seen the given App Check token, this field will be omitted from the response. The given token will then be marked as `already_consumed` (set to `true`) for all future invocations of this method for that token. Note that if the given App Check token is invalid, an HTTP 403 error is returned instead of a response containing this field, regardless whether the token was already consumed. */
		alreadyConsumed: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponseFormProperties>({
			alreadyConsumed: new FormControl<boolean | null | undefined>(undefined),
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
		 * Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
		 * Post v1beta/{app}:exchangeAppAttestAssertion
		 * @param {string} app Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1betaAppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeAppAttestAssertion(app: string, requestBody: GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest): Observable<GoogleFirebaseAppcheckV1betaAppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1betaAppCheckToken>(this.baseUri + 'v1beta/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeAppAttestAssertion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
		 * Post v1beta/{app}:exchangeAppAttestAttestation
		 * @param {string} app Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeAppAttestAttestation(app: string, requestBody: GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest): Observable<GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse> {
			return this.http.post<GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse>(this.baseUri + 'v1beta/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeAppAttestAttestation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
		 * Post v1beta/{app}:exchangeCustomToken
		 * @param {string} app Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1betaAppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeCustomToken(app: string, requestBody: GoogleFirebaseAppcheckV1betaExchangeCustomTokenRequest): Observable<GoogleFirebaseAppcheckV1betaAppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1betaAppCheckToken>(this.baseUri + 'v1beta/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeCustomToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
		 * Post v1beta/{app}:exchangeDebugToken
		 * @param {string} app Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1betaAppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeDebugToken(app: string, requestBody: GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest): Observable<GoogleFirebaseAppcheckV1betaAppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1betaAppCheckToken>(this.baseUri + 'v1beta/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeDebugToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
		 * Post v1beta/{app}:exchangeDeviceCheckToken
		 * @param {string} app Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1betaAppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeDeviceCheckToken(app: string, requestBody: GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest): Observable<GoogleFirebaseAppcheckV1betaAppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1betaAppCheckToken>(this.baseUri + 'v1beta/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeDeviceCheckToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
		 * Post v1beta/{app}:exchangePlayIntegrityToken
		 * @param {string} app Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1betaAppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangePlayIntegrityToken(app: string, requestBody: GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest): Observable<GoogleFirebaseAppcheckV1betaAppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1betaAppCheckToken>(this.baseUri + 'v1beta/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangePlayIntegrityToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an App Check token AppCheckToken.
		 * Post v1beta/{app}:exchangeRecaptchaEnterpriseToken
		 * @param {string} app Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1betaAppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeRecaptchaEnterpriseToken(app: string, requestBody: GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest): Observable<GoogleFirebaseAppcheckV1betaAppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1betaAppCheckToken>(this.baseUri + 'v1beta/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeRecaptchaEnterpriseToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
		 * Post v1beta/{app}:exchangeRecaptchaToken
		 * @param {string} app Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1betaAppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeRecaptchaToken(app: string, requestBody: GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest): Observable<GoogleFirebaseAppcheckV1betaAppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1betaAppCheckToken>(this.baseUri + 'v1beta/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeRecaptchaToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
		 * Post v1beta/{app}:exchangeRecaptchaV3Token
		 * @param {string} app Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1betaAppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeRecaptchaV3Token(app: string, requestBody: GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest): Observable<GoogleFirebaseAppcheckV1betaAppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1betaAppCheckToken>(this.baseUri + 'v1beta/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeRecaptchaV3Token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
		 * Post v1beta/{app}:exchangeSafetyNetToken
		 * @param {string} app Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1betaAppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeSafetyNetToken(app: string, requestBody: GoogleFirebaseAppcheckV1betaExchangeSafetyNetTokenRequest): Observable<GoogleFirebaseAppcheckV1betaAppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1betaAppCheckToken>(this.baseUri + 'v1beta/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeSafetyNetToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
		 * Post v1beta/{app}:generateAppAttestChallenge
		 * @param {string} app Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_generateAppAttestChallenge(app: string, requestBody: GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeRequest): Observable<GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse> {
			return this.http.post<GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse>(this.baseUri + 'v1beta/' + (app == null ? '' : encodeURIComponent(app)) + ':generateAppAttestChallenge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
		 * Post v1beta/{app}:generatePlayIntegrityChallenge
		 * @param {string} app Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_generatePlayIntegrityChallenge(app: string, requestBody: GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeRequest): Observable<GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse> {
			return this.http.post<GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse>(this.baseUri + 'v1beta/' + (app == null ? '' : encodeURIComponent(app)) + ':generatePlayIntegrityChallenge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified ResourcePolicy configuration.
		 * Delete v1beta/{name}
		 * @param {string} name Required. The relative resource name of the ResourcePolicy to delete, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_name} ```
		 * @param {string} etag The checksum to be validated against the current ResourcePolicy, to ensure the client has an up-to-date value before proceeding. The user can obtain this from the ResourcePolicy object that they last received. This etag is strongly validated.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Firebaseappcheck_projects_services_resourcePolicies_delete(name: string, etag: string | null | undefined): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)), {});
		}

		/**
		 * Gets the requested ResourcePolicy configuration.
		 * Get v1beta/{name}
		 * @param {string} name Required. The relative resource name of the ResourcePolicy to retrieve, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID used as the resource ID for the policy.
		 * @return {GoogleFirebaseAppcheckV1betaResourcePolicy} Successful response
		 */
		Firebaseappcheck_projects_services_resourcePolicies_get(name: string): Observable<GoogleFirebaseAppcheckV1betaResourcePolicy> {
			return this.http.get<GoogleFirebaseAppcheckV1betaResourcePolicy>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the specified ResourcePolicy configuration.
		 * Patch v1beta/{name}
		 * @param {string} name Required. The relative name of the resource configuration object, in the format: ``` projects/{project_number}/services/{service_id}/resourcePolicies/{resource_policy_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS) `resource_policy_id` is a system-generated UID used as the resource ID for the policy.
		 * @param {string} updateMask Required. A comma-separated list of names of fields in the ResourcePolicy to update. Example: `enforcement_mode`.
		 * @return {GoogleFirebaseAppcheckV1betaResourcePolicy} Successful response
		 */
		Firebaseappcheck_projects_services_resourcePolicies_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleFirebaseAppcheckV1betaResourcePolicy): Observable<GoogleFirebaseAppcheckV1betaResourcePolicy> {
			return this.http.patch<GoogleFirebaseAppcheckV1betaResourcePolicy>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Atomically gets the AppAttestConfigs for the specified list of apps.
		 * Get v1beta/{parent}/apps/-/appAttestConfig:batchGet
		 * @param {string} parent Required. The parent project name shared by all AppAttestConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
		 * @param {Array<string>} names Required. The relative resource names of the AppAttestConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` A maximum of 100 objects can be retrieved in a batch.
		 * @return {GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_appAttestConfig_batchGet(parent: string, names: Array<string> | null | undefined): Observable<GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps/-/appAttestConfig:batchGet&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
		 * Get v1beta/{parent}/apps/-/deviceCheckConfig:batchGet
		 * @param {string} parent Required. The parent project name shared by all DeviceCheckConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
		 * @param {Array<string>} names Required. The relative resource names of the DeviceCheckConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ``` A maximum of 100 objects can be retrieved in a batch.
		 * @return {GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_deviceCheckConfig_batchGet(parent: string, names: Array<string> | null | undefined): Observable<GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps/-/deviceCheckConfig:batchGet&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Atomically gets the PlayIntegrityConfigs for the specified list of apps.
		 * Get v1beta/{parent}/apps/-/playIntegrityConfig:batchGet
		 * @param {string} parent Required. The parent project name shared by all PlayIntegrityConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
		 * @param {Array<string>} names Required. The relative resource names of the PlayIntegrityConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` A maximum of 100 objects can be retrieved in a batch.
		 * @return {GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_playIntegrityConfig_batchGet(parent: string, names: Array<string> | null | undefined): Observable<GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps/-/playIntegrityConfig:batchGet&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Atomically gets the RecaptchaConfigs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
		 * Get v1beta/{parent}/apps/-/recaptchaConfig:batchGet
		 * @param {string} parent Required. The parent project name shared by all RecaptchaConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
		 * @param {Array<string>} names Required. The relative resource names of the RecaptchaConfigs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaConfig ``` A maximum of 100 objects can be retrieved in a batch.
		 * @return {GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_recaptchaConfig_batchGet(parent: string, names: Array<string> | null | undefined): Observable<GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps/-/recaptchaConfig:batchGet&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
		 * Get v1beta/{parent}/apps/-/recaptchaEnterpriseConfig:batchGet
		 * @param {string} parent Required. The parent project name shared by all RecaptchaEnterpriseConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
		 * @param {Array<string>} names Required. The relative resource names of the RecaptchaEnterpriseConfigs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` A maximum of 100 objects can be retrieved in a batch.
		 * @return {GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_recaptchaEnterpriseConfig_batchGet(parent: string, names: Array<string> | null | undefined): Observable<GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps/-/recaptchaEnterpriseConfig:batchGet&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
		 * Get v1beta/{parent}/apps/-/recaptchaV3Config:batchGet
		 * @param {string} parent Required. The parent project name shared by all RecaptchaV3Configs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
		 * @param {Array<string>} names Required. The relative resource names of the RecaptchaV3Configs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` A maximum of 100 objects can be retrieved in a batch.
		 * @return {GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_recaptchaV3Config_batchGet(parent: string, names: Array<string> | null | undefined): Observable<GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps/-/recaptchaV3Config:batchGet&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Atomically gets the SafetyNetConfigs for the specified list of apps.
		 * Get v1beta/{parent}/apps/-/safetyNetConfig:batchGet
		 * @param {string} parent Required. The parent project name shared by all SafetyNetConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
		 * @param {Array<string>} names Required. The relative resource names of the SafetyNetConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` A maximum of 100 objects can be retrieved in a batch.
		 * @return {GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_safetyNetConfig_batchGet(parent: string, names: Array<string> | null | undefined): Observable<GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps/-/safetyNetConfig:batchGet&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
		 * Get v1beta/{parent}/debugTokens
		 * @param {string} parent Required. The relative resource name of the parent app for which to list each associated DebugToken, in the format: ``` projects/{project_number}/apps/{app_id} ```
		 * @param {number} pageSize The maximum number of DebugTokens to return in the response. Note that an app can have at most 20 debug tokens. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
		 * @param {string} pageToken Token returned from a previous call to ListDebugTokens indicating where in the set of DebugTokens to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDebugTokens must match the call that provided the page token; if they do not match, the result is undefined.
		 * @return {GoogleFirebaseAppcheckV1betaListDebugTokensResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_debugTokens_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleFirebaseAppcheckV1betaListDebugTokensResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1betaListDebugTokensResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/debugTokens&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
		 * Post v1beta/{parent}/debugTokens
		 * @param {string} parent Required. The relative resource name of the parent app in which the specified DebugToken will be created, in the format: ``` projects/{project_number}/apps/{app_id} ```
		 * @return {GoogleFirebaseAppcheckV1betaDebugToken} Successful response
		 */
		Firebaseappcheck_projects_apps_debugTokens_create(parent: string, requestBody: GoogleFirebaseAppcheckV1betaDebugToken): Observable<GoogleFirebaseAppcheckV1betaDebugToken> {
			return this.http.post<GoogleFirebaseAppcheckV1betaDebugToken>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/debugTokens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all ResourcePolicy configurations for the specified project and service.
		 * Get v1beta/{parent}/resourcePolicies
		 * @param {string} parent Required. The relative resource name of the parent project and service for which to list each associated ResourcePolicy, in the format: ``` projects/{project_number}/services/{service_name} ```
		 * @param {number} pageSize The maximum number of ResourcePolicys to return in the response. Only explicitly configured policies are returned. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
		 * @param {string} pageToken Token returned from a previous call to ListResourcePolicies indicating where in the set of ResourcePolicys to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListResourcePolicies must match the call that provided the page token; if they do not match, the result is undefined.
		 * @return {GoogleFirebaseAppcheckV1betaListResourcePoliciesResponse} Successful response
		 */
		Firebaseappcheck_projects_services_resourcePolicies_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleFirebaseAppcheckV1betaListResourcePoliciesResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1betaListResourcePoliciesResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/resourcePolicies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates the specified ResourcePolicy configuration.
		 * Post v1beta/{parent}/resourcePolicies
		 * @param {string} parent Required. The relative resource name of the parent service in which the specified ResourcePolicy will be created, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `oauth2.googleapis.com` (Google Identity for iOS)
		 * @return {GoogleFirebaseAppcheckV1betaResourcePolicy} Successful response
		 */
		Firebaseappcheck_projects_services_resourcePolicies_create(parent: string, requestBody: GoogleFirebaseAppcheckV1betaResourcePolicy): Observable<GoogleFirebaseAppcheckV1betaResourcePolicy> {
			return this.http.post<GoogleFirebaseAppcheckV1betaResourcePolicy>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/resourcePolicies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Atomically updates the specified ResourcePolicy configurations.
		 * Post v1beta/{parent}/resourcePolicies:batchUpdate
		 * @param {string} parent Required. The parent project name and the service, in the format ``` projects/{project_number}/services/{service_id} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails.
		 * @return {GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesResponse} Successful response
		 */
		Firebaseappcheck_projects_services_resourcePolicies_batchUpdate(parent: string, requestBody: GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesRequest): Observable<GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesResponse> {
			return this.http.post<GoogleFirebaseAppcheckV1betaBatchUpdateResourcePoliciesResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/resourcePolicies:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
		 * Get v1beta/{parent}/services
		 * @param {string} parent Required. The relative resource name of the parent project for which to list each associated Service, in the format: ``` projects/{project_number} ```
		 * @param {number} pageSize The maximum number of Services to return in the response. Only explicitly configured services are returned. The server may return fewer than this at its own discretion. If no value is specified or set to zero (or too large a value is specified), the server will impose its own limit.
		 * @param {string} pageToken Token returned from a previous call to ListServices indicating where in the set of Services to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListServices must match the call that provided the page token; if they do not match, the result is undefined.
		 * @return {GoogleFirebaseAppcheckV1betaListServicesResponse} Successful response
		 */
		Firebaseappcheck_projects_services_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleFirebaseAppcheckV1betaListServicesResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1betaListServicesResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Atomically updates the specified Service configurations.
		 * Post v1beta/{parent}/services:batchUpdate
		 * @param {string} parent Required. The parent project name shared by all Service configurations being updated, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails.
		 * @return {GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse} Successful response
		 */
		Firebaseappcheck_projects_services_batchUpdate(parent: string, requestBody: GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest): Observable<GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse> {
			return this.http.post<GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Verifies the given App Check token and returns token usage signals that callers may act upon. This method currently only supports App Check tokens exchanged from the following attestation providers: * Play Integrity API * App Attest * DeviceCheck (`DCDevice` tokens) * reCAPTCHA Enterprise * reCAPTCHA v3 * Custom providers App Check tokens exchanged from debug secrets are also supported. Calling this method on an otherwise valid App Check token with an unsupported provider will cause an HTTP 400 error to be returned. Returns whether this token was already consumed before this call. If this is the first time this method has seen the given App Check token, the field `already_consumed` in the response will be absent. The given token will then be marked as `already_consumed` (set to `true`) for all future invocations of this method for that token. Note that if the given App Check token is invalid, an HTTP 403 error is returned instead of a response object, regardless whether the token was already consumed. Currently, when evaluating whether an App Check token was already consumed, only calls to this exact method are counted. Use of the App Check token elsewhere will not mark the token as being already consumed. The caller must have the [`firebaseappcheck.appCheckTokens.verify`](https://firebase.google.com/docs/projects/iam/permissions#app-check) permission to call this method. This permission is part of the [Firebase App Check Token Verifier role](https://firebase.google.com/docs/projects/iam/roles-predefined-product#app-check).
		 * Post v1beta/{project}:verifyAppCheckToken
		 * @param {string} project Required. The relative resource name of the project for which the token was minted, in the format: ``` projects/{project_number} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse} Successful response
		 */
		Firebaseappcheck_projects_verifyAppCheckToken(project: string, requestBody: GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenRequest): Observable<GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse> {
			return this.http.post<GoogleFirebaseAppcheckV1betaVerifyAppCheckTokenResponse>(this.baseUri + 'v1beta/' + (project == null ? '' : encodeURIComponent(project)) + ':verifyAppCheckToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

