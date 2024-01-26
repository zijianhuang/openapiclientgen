import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An app's App Attest configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeAppAttestAttestation and ExchangeAppAttestAssertion, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.iosApps/patch). */
	export interface GoogleFirebaseAppcheckV1AppAttestConfig {

		/** Required. The relative resource name of the App Attest configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` */
		name?: string | null;

		/** Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl?: string | null;
	}

	/** An app's App Attest configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeAppAttestAttestation and ExchangeAppAttestAssertion, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.iosApps/patch). */
	export interface GoogleFirebaseAppcheckV1AppAttestConfigFormProperties {

		/** Required. The relative resource name of the App Attest configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` */
		name: FormControl<string | null | undefined>,

		/** Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1AppAttestConfigFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1AppAttestConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			tokenTtl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check. */
	export interface GoogleFirebaseAppcheckV1AppCheckToken {

		/** The App Check token. App Check tokens are signed [JWTs](https://tools.ietf.org/html/rfc7519) containing claims that identify the attested app and Firebase project. This token is used to access Firebase services protected by App Check. These tokens can also be [verified by your own custom backends](https://firebase.google.com/docs/app-check/custom-resource-backend) using the Firebase Admin SDK. */
		token?: string | null;

		/** The duration from the time this token is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
		ttl?: string | null;
	}

	/** Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check. */
	export interface GoogleFirebaseAppcheckV1AppCheckTokenFormProperties {

		/** The App Check token. App Check tokens are signed [JWTs](https://tools.ietf.org/html/rfc7519) containing claims that identify the attested app and Firebase project. This token is used to access Firebase services protected by App Check. These tokens can also be [verified by your own custom backends](https://firebase.google.com/docs/app-check/custom-resource-backend) using the Firebase Admin SDK. */
		token: FormControl<string | null | undefined>,

		/** The duration from the time this token is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1AppCheckTokenFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1AppCheckTokenFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the BatchGetAppAttestConfigs method. */
	export interface GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse {

		/** AppAttestConfigs retrieved. */
		configs?: Array<GoogleFirebaseAppcheckV1AppAttestConfig>;
	}

	/** Response message for the BatchGetAppAttestConfigs method. */
	export interface GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponseFormProperties>({
		});

	}


	/** Response message for the BatchGetDeviceCheckConfigs method. */
	export interface GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse {

		/** DeviceCheckConfigs retrieved. */
		configs?: Array<GoogleFirebaseAppcheckV1DeviceCheckConfig>;
	}

	/** Response message for the BatchGetDeviceCheckConfigs method. */
	export interface GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponseFormProperties>({
		});

	}


	/** An app's DeviceCheck configuration object. This configuration is used by ExchangeDeviceCheckToken to validate device tokens issued to apps by DeviceCheck. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.iosApps/patch). */
	export interface GoogleFirebaseAppcheckV1DeviceCheckConfig {

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

	/** An app's DeviceCheck configuration object. This configuration is used by ExchangeDeviceCheckToken to validate device tokens issued to apps by DeviceCheck. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.iosApps/patch). */
	export interface GoogleFirebaseAppcheckV1DeviceCheckConfigFormProperties {

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
	export function CreateGoogleFirebaseAppcheckV1DeviceCheckConfigFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1DeviceCheckConfigFormProperties>({
			keyId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			privateKey: new FormControl<string | null | undefined>(undefined),
			privateKeySet: new FormControl<boolean | null | undefined>(undefined),
			tokenTtl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the BatchGetPlayIntegrityConfigs method. */
	export interface GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse {

		/** PlayIntegrityConfigs retrieved. */
		configs?: Array<GoogleFirebaseAppcheckV1PlayIntegrityConfig>;
	}

	/** Response message for the BatchGetPlayIntegrityConfigs method. */
	export interface GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponseFormProperties>({
		});

	}


	/** An app's Play Integrity configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangePlayIntegrityToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by the Play Integrity API; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.androidApps.sha/create). */
	export interface GoogleFirebaseAppcheckV1PlayIntegrityConfig {

		/** Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` */
		name?: string | null;

		/** Specifies the duration for which App Check tokens exchanged from Play Integrity tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl?: string | null;
	}

	/** An app's Play Integrity configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangePlayIntegrityToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by the Play Integrity API; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.androidApps.sha/create). */
	export interface GoogleFirebaseAppcheckV1PlayIntegrityConfigFormProperties {

		/** Required. The relative resource name of the Play Integrity configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` */
		name: FormControl<string | null | undefined>,

		/** Specifies the duration for which App Check tokens exchanged from Play Integrity tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1PlayIntegrityConfigFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1PlayIntegrityConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			tokenTtl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the BatchGetRecaptchaEnterpriseConfigs method. */
	export interface GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse {

		/** RecaptchaEnterpriseConfigs retrieved. */
		configs?: Array<GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig>;
	}

	/** Response message for the BatchGetRecaptchaEnterpriseConfigs method. */
	export interface GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponseFormProperties>({
		});

	}


	/** An app's reCAPTCHA Enterprise configuration object. This configuration is used by ExchangeRecaptchaEnterpriseToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA Enterprise. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. */
	export interface GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig {

		/** Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` */
		name?: string | null;

		/** The score-based site key [created in reCAPTCHA Enterprise](https://cloud.google.com/recaptcha-enterprise/docs/create-key#creating_a_site_key) used to [invoke reCAPTCHA and generate the reCAPTCHA tokens](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages) for your application. Important: This is *not* the `site_secret` (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key. */
		siteKey?: string | null;

		/** Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl?: string | null;
	}

	/** An app's reCAPTCHA Enterprise configuration object. This configuration is used by ExchangeRecaptchaEnterpriseToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA Enterprise. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. */
	export interface GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfigFormProperties {

		/** Required. The relative resource name of the reCAPTCHA Enterprise configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` */
		name: FormControl<string | null | undefined>,

		/** The score-based site key [created in reCAPTCHA Enterprise](https://cloud.google.com/recaptcha-enterprise/docs/create-key#creating_a_site_key) used to [invoke reCAPTCHA and generate the reCAPTCHA tokens](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages) for your application. Important: This is *not* the `site_secret` (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key. */
		siteKey: FormControl<string | null | undefined>,

		/** Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1RecaptchaEnterpriseConfigFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			siteKey: new FormControl<string | null | undefined>(undefined),
			tokenTtl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the BatchGetRecaptchaV3Configs method. */
	export interface GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse {

		/** RecaptchaV3Configs retrieved. */
		configs?: Array<GoogleFirebaseAppcheckV1RecaptchaV3Config>;
	}

	/** Response message for the BatchGetRecaptchaV3Configs method. */
	export interface GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponseFormProperties>({
		});

	}


	/** An app's reCAPTCHA v3 configuration object. This configuration is used by ExchangeRecaptchaV3Token to validate reCAPTCHA tokens issued to apps by reCAPTCHA v3. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. */
	export interface GoogleFirebaseAppcheckV1RecaptchaV3Config {

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
	export interface GoogleFirebaseAppcheckV1RecaptchaV3ConfigFormProperties {

		/** Required. The relative resource name of the reCAPTCHA v3 configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` */
		name: FormControl<string | null | undefined>,

		/** Required. Input only. The site secret used to identify your service for reCAPTCHA v3 verification. For security reasons, this field will never be populated in any response. */
		siteSecret: FormControl<string | null | undefined>,

		/** Output only. Whether the `site_secret` field was previously set. Since we will never return the `site_secret` field, this field is the only way to find out whether it was previously set. */
		siteSecretSet: FormControl<boolean | null | undefined>,

		/** Specifies the duration for which App Check tokens exchanged from reCAPTCHA tokens will be valid. If unset, a default value of 1 day is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1RecaptchaV3ConfigFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1RecaptchaV3ConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			siteSecret: new FormControl<string | null | undefined>(undefined),
			siteSecretSet: new FormControl<boolean | null | undefined>(undefined),
			tokenTtl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the BatchGetSafetyNetConfigs method. */
	export interface GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse {

		/** SafetyNetConfigs retrieved. */
		configs?: Array<GoogleFirebaseAppcheckV1SafetyNetConfig>;
	}

	/** Response message for the BatchGetSafetyNetConfigs method. */
	export interface GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponseFormProperties>({
		});

	}


	/** An app's SafetyNet configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeSafetyNetToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by SafetyNet; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.androidApps.sha/create). */
	export interface GoogleFirebaseAppcheckV1SafetyNetConfig {

		/** Required. The relative resource name of the SafetyNet configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` */
		name?: string | null;

		/** Specifies the duration for which App Check tokens exchanged from SafetyNet tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl?: string | null;
	}

	/** An app's SafetyNet configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeSafetyNetToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by SafetyNet; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.androidApps.sha/create). */
	export interface GoogleFirebaseAppcheckV1SafetyNetConfigFormProperties {

		/** Required. The relative resource name of the SafetyNet configuration object, in the format: ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` */
		name: FormControl<string | null | undefined>,

		/** Specifies the duration for which App Check tokens exchanged from SafetyNet tokens will be valid. If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive. */
		tokenTtl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1SafetyNetConfigFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1SafetyNetConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			tokenTtl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the BatchUpdateServices method. */
	export interface GoogleFirebaseAppcheckV1BatchUpdateServicesRequest {

		/** Required. The request messages specifying the Services to update. A maximum of 100 objects can be updated in a batch. */
		requests?: Array<GoogleFirebaseAppcheckV1UpdateServiceRequest>;

		/** Optional. A comma-separated list of names of fields in the Services to update. Example: `display_name`. If the `update_mask` field is set in both this request and any of the UpdateServiceRequest messages, they must match or the entire batch fails and no updates will be committed. */
		updateMask?: string | null;
	}

	/** Request message for the BatchUpdateServices method. */
	export interface GoogleFirebaseAppcheckV1BatchUpdateServicesRequestFormProperties {

		/** Optional. A comma-separated list of names of fields in the Services to update. Example: `display_name`. If the `update_mask` field is set in both this request and any of the UpdateServiceRequest messages, they must match or the entire batch fails and no updates will be committed. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1BatchUpdateServicesRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1BatchUpdateServicesRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method. */
	export interface GoogleFirebaseAppcheckV1UpdateServiceRequest {

		/** The enforcement configuration for a Firebase service supported by App Check. */
		service?: GoogleFirebaseAppcheckV1Service;

		/** Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`. */
		updateMask?: string | null;
	}

	/** Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method. */
	export interface GoogleFirebaseAppcheckV1UpdateServiceRequestFormProperties {

		/** Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1UpdateServiceRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1UpdateServiceRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The enforcement configuration for a Firebase service supported by App Check. */
	export interface GoogleFirebaseAppcheckV1Service {

		/** Required. The App Check enforcement mode for this service. */
		enforcementMode?: GoogleFirebaseAppcheckV1ServiceEnforcementMode | null;

		/** Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) */
		name?: string | null;
	}

	/** The enforcement configuration for a Firebase service supported by App Check. */
	export interface GoogleFirebaseAppcheckV1ServiceFormProperties {

		/** Required. The App Check enforcement mode for this service. */
		enforcementMode: FormControl<GoogleFirebaseAppcheckV1ServiceEnforcementMode | null | undefined>,

		/** Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore) */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1ServiceFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1ServiceFormProperties>({
			enforcementMode: new FormControl<GoogleFirebaseAppcheckV1ServiceEnforcementMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleFirebaseAppcheckV1ServiceEnforcementMode { OFF = 0, UNENFORCED = 1, ENFORCED = 2 }


	/** Response message for the BatchUpdateServices method. */
	export interface GoogleFirebaseAppcheckV1BatchUpdateServicesResponse {

		/** Service objects after the updates have been applied. */
		services?: Array<GoogleFirebaseAppcheckV1Service>;
	}

	/** Response message for the BatchUpdateServices method. */
	export interface GoogleFirebaseAppcheckV1BatchUpdateServicesResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1BatchUpdateServicesResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1BatchUpdateServicesResponseFormProperties>({
		});

	}


	/** A *debug token* is a secret used during the development or integration testing of an app. It essentially allows the development or integration testing to bypass app attestation while still allowing App Check to enforce protection on supported production Firebase services. */
	export interface GoogleFirebaseAppcheckV1DebugToken {

		/** Required. A human readable display name used to identify this debug token. */
		displayName?: string | null;

		/** Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ``` */
		name?: string | null;

		/** Required. Input only. Immutable. The secret token itself. Must be provided during creation, and must be a UUID4, case insensitive. This field is immutable once set, and cannot be provided during an UpdateDebugToken request. You can, however, delete this debug token using DeleteDebugToken to revoke it. For security reasons, this field will never be populated in any response. */
		token?: string | null;
	}

	/** A *debug token* is a secret used during the development or integration testing of an app. It essentially allows the development or integration testing to bypass app attestation while still allowing App Check to enforce protection on supported production Firebase services. */
	export interface GoogleFirebaseAppcheckV1DebugTokenFormProperties {

		/** Required. A human readable display name used to identify this debug token. */
		displayName: FormControl<string | null | undefined>,

		/** Required. The relative resource name of the debug token, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ``` */
		name: FormControl<string | null | undefined>,

		/** Required. Input only. Immutable. The secret token itself. Must be provided during creation, and must be a UUID4, case insensitive. This field is immutable once set, and cannot be provided during an UpdateDebugToken request. You can, however, delete this debug token using DeleteDebugToken to revoke it. For security reasons, this field will never be populated in any response. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1DebugTokenFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1DebugTokenFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeAppAttestAssertion method. */
	export interface GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest {

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
	export interface GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequestFormProperties {

		/** Required. The artifact returned by a previous call to ExchangeAppAttestAttestation. */
		artifact: FormControl<string | null | undefined>,

		/** Required. The CBOR-encoded assertion returned by the client-side App Attest API. */
		assertion: FormControl<string | null | undefined>,

		/** Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge. */
		challenge: FormControl<string | null | undefined>,

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequestFormProperties>({
			artifact: new FormControl<string | null | undefined>(undefined),
			assertion: new FormControl<string | null | undefined>(undefined),
			challenge: new FormControl<string | null | undefined>(undefined),
			limitedUse: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeAppAttestAttestation method. */
	export interface GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest {

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
	export interface GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequestFormProperties {

		/** Required. The App Attest statement returned by the client-side App Attest API. This is a base64url encoded CBOR object in the JSON response. */
		attestationStatement: FormControl<string | null | undefined>,

		/** Required. A one-time challenge returned by an immediately prior call to GenerateAppAttestChallenge. */
		challenge: FormControl<string | null | undefined>,

		/** Required. The key ID generated by App Attest for the client app. */
		keyId: FormControl<string | null | undefined>,

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequestFormProperties>({
			attestationStatement: new FormControl<string | null | undefined>(undefined),
			challenge: new FormControl<string | null | undefined>(undefined),
			keyId: new FormControl<string | null | undefined>(undefined),
			limitedUse: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for the ExchangeAppAttestAttestation method. */
	export interface GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse {

		/** Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check. */
		appCheckToken?: GoogleFirebaseAppcheckV1AppCheckToken;

		/** An artifact that can be used in future calls to ExchangeAppAttestAssertion. */
		artifact?: string | null;
	}

	/** Response message for the ExchangeAppAttestAttestation method. */
	export interface GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponseFormProperties {

		/** An artifact that can be used in future calls to ExchangeAppAttestAssertion. */
		artifact: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponseFormProperties>({
			artifact: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeCustomToken method. */
	export interface GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest {

		/** Required. A custom token signed using your project's Admin SDK service account credentials. */
		customToken?: string | null;

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse?: boolean | null;
	}

	/** Request message for the ExchangeCustomToken method. */
	export interface GoogleFirebaseAppcheckV1ExchangeCustomTokenRequestFormProperties {

		/** Required. A custom token signed using your project's Admin SDK service account credentials. */
		customToken: FormControl<string | null | undefined>,

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1ExchangeCustomTokenRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1ExchangeCustomTokenRequestFormProperties>({
			customToken: new FormControl<string | null | undefined>(undefined),
			limitedUse: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeDebugToken method. */
	export interface GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest {

		/** Required. A debug token secret. This string must match a debug token secret previously created using CreateDebugToken. */
		debugToken?: string | null;

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse?: boolean | null;
	}

	/** Request message for the ExchangeDebugToken method. */
	export interface GoogleFirebaseAppcheckV1ExchangeDebugTokenRequestFormProperties {

		/** Required. A debug token secret. This string must match a debug token secret previously created using CreateDebugToken. */
		debugToken: FormControl<string | null | undefined>,

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1ExchangeDebugTokenRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1ExchangeDebugTokenRequestFormProperties>({
			debugToken: new FormControl<string | null | undefined>(undefined),
			limitedUse: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeDeviceCheckToken method. */
	export interface GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest {

		/** Required. The `device_token` as returned by Apple's client-side [DeviceCheck API](https://developer.apple.com/documentation/devicecheck/dcdevice). This is the base64 encoded `Data` (Swift) or `NSData` (ObjC) object. */
		deviceToken?: string | null;

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse?: boolean | null;
	}

	/** Request message for the ExchangeDeviceCheckToken method. */
	export interface GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequestFormProperties {

		/** Required. The `device_token` as returned by Apple's client-side [DeviceCheck API](https://developer.apple.com/documentation/devicecheck/dcdevice). This is the base64 encoded `Data` (Swift) or `NSData` (ObjC) object. */
		deviceToken: FormControl<string | null | undefined>,

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequestFormProperties>({
			deviceToken: new FormControl<string | null | undefined>(undefined),
			limitedUse: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangePlayIntegrityToken method. */
	export interface GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest {

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse?: boolean | null;

		/** Required. The [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify) issued to your app. */
		playIntegrityToken?: string | null;
	}

	/** Request message for the ExchangePlayIntegrityToken method. */
	export interface GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequestFormProperties {

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse: FormControl<boolean | null | undefined>,

		/** Required. The [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify) issued to your app. */
		playIntegrityToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequestFormProperties>({
			limitedUse: new FormControl<boolean | null | undefined>(undefined),
			playIntegrityToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeRecaptchaEnterpriseToken method. */
	export interface GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest {

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse?: boolean | null;

		/** Required. The reCAPTCHA token as returned by the [reCAPTCHA Enterprise JavaScript API](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages). */
		recaptchaEnterpriseToken?: string | null;
	}

	/** Request message for the ExchangeRecaptchaEnterpriseToken method. */
	export interface GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequestFormProperties {

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse: FormControl<boolean | null | undefined>,

		/** Required. The reCAPTCHA token as returned by the [reCAPTCHA Enterprise JavaScript API](https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages). */
		recaptchaEnterpriseToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequestFormProperties>({
			limitedUse: new FormControl<boolean | null | undefined>(undefined),
			recaptchaEnterpriseToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeRecaptchaV3Token method. */
	export interface GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest {

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse?: boolean | null;

		/** Required. The reCAPTCHA token as returned by the [reCAPTCHA v3 JavaScript API](https://developers.google.com/recaptcha/docs/v3). */
		recaptchaV3Token?: string | null;
	}

	/** Request message for the ExchangeRecaptchaV3Token method. */
	export interface GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequestFormProperties {

		/** Specifies whether this attestation is for use in a *limited use* (`true`) or *session based* (`false`) context. To enable this attestation to be used with the *replay protection* feature, set this to `true`. The default value is `false`. */
		limitedUse: FormControl<boolean | null | undefined>,

		/** Required. The reCAPTCHA token as returned by the [reCAPTCHA v3 JavaScript API](https://developers.google.com/recaptcha/docs/v3). */
		recaptchaV3Token: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequestFormProperties>({
			limitedUse: new FormControl<boolean | null | undefined>(undefined),
			recaptchaV3Token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the ExchangeSafetyNetToken method. */
	export interface GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest {

		/** Required. The [SafetyNet attestation response](https://developer.android.com/training/safetynet/attestation#request-attestation-step) issued to your app. */
		safetyNetToken?: string | null;
	}

	/** Request message for the ExchangeSafetyNetToken method. */
	export interface GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequestFormProperties {

		/** Required. The [SafetyNet attestation response](https://developer.android.com/training/safetynet/attestation#request-attestation-step) issued to your app. */
		safetyNetToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequestFormProperties>({
			safetyNetToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the GenerateAppAttestChallenge method. */
	export interface GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest {
	}

	/** Request message for the GenerateAppAttestChallenge method. */
	export interface GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequestFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequestFormProperties>({
		});

	}


	/** Response message for the GenerateAppAttestChallenge method. */
	export interface GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse {

		/** A one-time use challenge for the client to pass to the App Attest API. */
		challenge?: string | null;

		/** The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
		ttl?: string | null;
	}

	/** Response message for the GenerateAppAttestChallenge method. */
	export interface GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponseFormProperties {

		/** A one-time use challenge for the client to pass to the App Attest API. */
		challenge: FormControl<string | null | undefined>,

		/** The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponseFormProperties>({
			challenge: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the GeneratePlayIntegrityChallenge method. */
	export interface GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest {
	}

	/** Request message for the GeneratePlayIntegrityChallenge method. */
	export interface GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequestFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequestFormProperties>({
		});

	}


	/** Response message for the GeneratePlayIntegrityChallenge method. */
	export interface GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse {

		/** A one-time use [challenge](https://developer.android.com/google/play/integrity/verdict#protect-against-replay-attacks) for the client to pass to the Play Integrity API. */
		challenge?: string | null;

		/** The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
		ttl?: string | null;
	}

	/** Response message for the GeneratePlayIntegrityChallenge method. */
	export interface GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponseFormProperties {

		/** A one-time use [challenge](https://developer.android.com/google/play/integrity/verdict#protect-against-replay-attacks) for the client to pass to the Play Integrity API. */
		challenge: FormControl<string | null | undefined>,

		/** The duration from the time this challenge is minted until its expiration. This field is intended to ease client-side token management, since the client may have clock skew, but is still able to accurately measure a duration. */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponseFormProperties>({
			challenge: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ListDebugTokens method. */
	export interface GoogleFirebaseAppcheckV1ListDebugTokensResponse {

		/** The DebugTokens retrieved. */
		debugTokens?: Array<GoogleFirebaseAppcheckV1DebugToken>;

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListDebugTokens to find the next group of DebugTokens. Page tokens are short-lived and should not be persisted. */
		nextPageToken?: string | null;
	}

	/** Response message for the ListDebugTokens method. */
	export interface GoogleFirebaseAppcheckV1ListDebugTokensResponseFormProperties {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListDebugTokens to find the next group of DebugTokens. Page tokens are short-lived and should not be persisted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1ListDebugTokensResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1ListDebugTokensResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ListServices method. */
	export interface GoogleFirebaseAppcheckV1ListServicesResponse {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListServices to find the next group of Services. Page tokens are short-lived and should not be persisted. */
		nextPageToken?: string | null;

		/** The Services retrieved. */
		services?: Array<GoogleFirebaseAppcheckV1Service>;
	}

	/** Response message for the ListServices method. */
	export interface GoogleFirebaseAppcheckV1ListServicesResponseFormProperties {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty or omitted, then this response is the last page of results. This token can be used in a subsequent call to ListServices to find the next group of Services. Page tokens are short-lived and should not be persisted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppcheckV1ListServicesResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1ListServicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A JWK as specified by [section 4 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-4) and [section 6.3.1 of RFC 7518](https://tools.ietf.org/html/rfc7518#section-6.3.1). */
	export interface GoogleFirebaseAppcheckV1PublicJwk {

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
	export interface GoogleFirebaseAppcheckV1PublicJwkFormProperties {

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
	export function CreateGoogleFirebaseAppcheckV1PublicJwkFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1PublicJwkFormProperties>({
			alg: new FormControl<string | null | undefined>(undefined),
			e: new FormControl<string | null | undefined>(undefined),
			kid: new FormControl<string | null | undefined>(undefined),
			kty: new FormControl<string | null | undefined>(undefined),
			n: new FormControl<string | null | undefined>(undefined),
			use: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The currently active set of public keys that can be used to verify App Check tokens. This object is a JWK set as specified by [section 5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5). For security, the response **must not** be cached for longer than six hours. */
	export interface GoogleFirebaseAppcheckV1PublicJwkSet {

		/** The set of public keys. See [section 5.1 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5). */
		keys?: Array<GoogleFirebaseAppcheckV1PublicJwk>;
	}

	/** The currently active set of public keys that can be used to verify App Check tokens. This object is a JWK set as specified by [section 5 of RFC 7517](https://tools.ietf.org/html/rfc7517#section-5). For security, the response **must not** be cached for longer than six hours. */
	export interface GoogleFirebaseAppcheckV1PublicJwkSetFormProperties {
	}
	export function CreateGoogleFirebaseAppcheckV1PublicJwkSetFormGroup() {
		return new FormGroup<GoogleFirebaseAppcheckV1PublicJwkSetFormProperties>({
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
		 * Post v1/{app}:exchangeAppAttestAssertion
		 * @param {string} app Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1AppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeAppAttestAssertion(app: string, requestBody: GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest): Observable<GoogleFirebaseAppcheckV1AppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1AppCheckToken>(this.baseUri + 'v1/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeAppAttestAssertion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
		 * Post v1/{app}:exchangeAppAttestAttestation
		 * @param {string} app Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeAppAttestAttestation(app: string, requestBody: GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest): Observable<GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse> {
			return this.http.post<GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse>(this.baseUri + 'v1/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeAppAttestAttestation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
		 * Post v1/{app}:exchangeCustomToken
		 * @param {string} app Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1AppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeCustomToken(app: string, requestBody: GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest): Observable<GoogleFirebaseAppcheckV1AppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1AppCheckToken>(this.baseUri + 'v1/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeCustomToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
		 * Post v1/{app}:exchangeDebugToken
		 * @param {string} app Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1AppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeDebugToken(app: string, requestBody: GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest): Observable<GoogleFirebaseAppcheckV1AppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1AppCheckToken>(this.baseUri + 'v1/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeDebugToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
		 * Post v1/{app}:exchangeDeviceCheckToken
		 * @param {string} app Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1AppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeDeviceCheckToken(app: string, requestBody: GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest): Observable<GoogleFirebaseAppcheckV1AppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1AppCheckToken>(this.baseUri + 'v1/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeDeviceCheckToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
		 * Post v1/{app}:exchangePlayIntegrityToken
		 * @param {string} app Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1AppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangePlayIntegrityToken(app: string, requestBody: GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest): Observable<GoogleFirebaseAppcheckV1AppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1AppCheckToken>(this.baseUri + 'v1/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangePlayIntegrityToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.
		 * Post v1/{app}:exchangeRecaptchaEnterpriseToken
		 * @param {string} app Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1AppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeRecaptchaEnterpriseToken(app: string, requestBody: GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest): Observable<GoogleFirebaseAppcheckV1AppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1AppCheckToken>(this.baseUri + 'v1/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeRecaptchaEnterpriseToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
		 * Post v1/{app}:exchangeRecaptchaV3Token
		 * @param {string} app Required. The relative resource name of the web app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1AppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeRecaptchaV3Token(app: string, requestBody: GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest): Observable<GoogleFirebaseAppcheckV1AppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1AppCheckToken>(this.baseUri + 'v1/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeRecaptchaV3Token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
		 * Post v1/{app}:exchangeSafetyNetToken
		 * @param {string} app Required. The relative resource name of the Android app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1AppCheckToken} Successful response
		 */
		Firebaseappcheck_projects_apps_exchangeSafetyNetToken(app: string, requestBody: GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest): Observable<GoogleFirebaseAppcheckV1AppCheckToken> {
			return this.http.post<GoogleFirebaseAppcheckV1AppCheckToken>(this.baseUri + 'v1/' + (app == null ? '' : encodeURIComponent(app)) + ':exchangeSafetyNetToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
		 * Post v1/{app}:generateAppAttestChallenge
		 * @param {string} app Required. The relative resource name of the iOS app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_generateAppAttestChallenge(app: string, requestBody: GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest): Observable<GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse> {
			return this.http.post<GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse>(this.baseUri + 'v1/' + (app == null ? '' : encodeURIComponent(app)) + ':generateAppAttestChallenge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
		 * Post v1/{app}:generatePlayIntegrityChallenge
		 * @param {string} app Required. The relative resource name of the app, in the format: ``` projects/{project_number}/apps/{app_id} ``` If necessary, the `project_number` element can be replaced with the project ID of the Firebase project. Learn more about using project identifiers in Google's [AIP 2510](https://google.aip.dev/cloud/2510) standard.
		 * @return {GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_generatePlayIntegrityChallenge(app: string, requestBody: GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest): Observable<GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse> {
			return this.http.post<GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse>(this.baseUri + 'v1/' + (app == null ? '' : encodeURIComponent(app)) + ':generatePlayIntegrityChallenge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
		 * Delete v1/{name}
		 * @param {string} name Required. The relative resource name of the DebugToken to delete, in the format: ``` projects/{project_number}/apps/{app_id}/debugTokens/{debug_token_id} ```
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Firebaseappcheck_projects_apps_debugTokens_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the Service configuration for the specified service name.
		 * Get v1/{name}
		 * @param {string} name Required. The relative resource name of the Service to retrieve, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)
		 * @return {GoogleFirebaseAppcheckV1Service} Successful response
		 */
		Firebaseappcheck_projects_services_get(name: string): Observable<GoogleFirebaseAppcheckV1Service> {
			return this.http.get<GoogleFirebaseAppcheckV1Service>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the specified Service configuration.
		 * Patch v1/{name}
		 * @param {string} name Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)
		 * @param {string} updateMask Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`.
		 * @return {GoogleFirebaseAppcheckV1Service} Successful response
		 */
		Firebaseappcheck_projects_services_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleFirebaseAppcheckV1Service): Observable<GoogleFirebaseAppcheckV1Service> {
			return this.http.patch<GoogleFirebaseAppcheckV1Service>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Atomically gets the AppAttestConfigs for the specified list of apps.
		 * Get v1/{parent}/apps/-/appAttestConfig:batchGet
		 * @param {string} parent Required. The parent project name shared by all AppAttestConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
		 * @param {Array<string>} names Required. The relative resource names of the AppAttestConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/appAttestConfig ``` A maximum of 100 objects can be retrieved in a batch.
		 * @return {GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_appAttestConfig_batchGet(parent: string, names: Array<string> | null | undefined): Observable<GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps/-/appAttestConfig:batchGet&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
		 * Get v1/{parent}/apps/-/deviceCheckConfig:batchGet
		 * @param {string} parent Required. The parent project name shared by all DeviceCheckConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
		 * @param {Array<string>} names Required. The relative resource names of the DeviceCheckConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/deviceCheckConfig ``` A maximum of 100 objects can be retrieved in a batch.
		 * @return {GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_deviceCheckConfig_batchGet(parent: string, names: Array<string> | null | undefined): Observable<GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps/-/deviceCheckConfig:batchGet&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Atomically gets the PlayIntegrityConfigs for the specified list of apps.
		 * Get v1/{parent}/apps/-/playIntegrityConfig:batchGet
		 * @param {string} parent Required. The parent project name shared by all PlayIntegrityConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
		 * @param {Array<string>} names Required. The relative resource names of the PlayIntegrityConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/playIntegrityConfig ``` A maximum of 100 objects can be retrieved in a batch.
		 * @return {GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_playIntegrityConfig_batchGet(parent: string, names: Array<string> | null | undefined): Observable<GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps/-/playIntegrityConfig:batchGet&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
		 * Get v1/{parent}/apps/-/recaptchaEnterpriseConfig:batchGet
		 * @param {string} parent Required. The parent project name shared by all RecaptchaEnterpriseConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
		 * @param {Array<string>} names Required. The relative resource names of the RecaptchaEnterpriseConfigs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaEnterpriseConfig ``` A maximum of 100 objects can be retrieved in a batch.
		 * @return {GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_recaptchaEnterpriseConfig_batchGet(parent: string, names: Array<string> | null | undefined): Observable<GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps/-/recaptchaEnterpriseConfig:batchGet&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
		 * Get v1/{parent}/apps/-/recaptchaV3Config:batchGet
		 * @param {string} parent Required. The parent project name shared by all RecaptchaV3Configs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
		 * @param {Array<string>} names Required. The relative resource names of the RecaptchaV3Configs to retrieve, in the format: ``` projects/{project_number}/apps/{app_id}/recaptchaV3Config ``` A maximum of 100 objects can be retrieved in a batch.
		 * @return {GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_recaptchaV3Config_batchGet(parent: string, names: Array<string> | null | undefined): Observable<GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps/-/recaptchaV3Config:batchGet&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Atomically gets the SafetyNetConfigs for the specified list of apps.
		 * Get v1/{parent}/apps/-/safetyNetConfig:batchGet
		 * @param {string} parent Required. The parent project name shared by all SafetyNetConfigs being retrieved, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being retrieved must match this field, or the entire batch fails.
		 * @param {Array<string>} names Required. The relative resource names of the SafetyNetConfigs to retrieve, in the format ``` projects/{project_number}/apps/{app_id}/safetyNetConfig ``` A maximum of 100 objects can be retrieved in a batch.
		 * @return {GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_safetyNetConfig_batchGet(parent: string, names: Array<string> | null | undefined): Observable<GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps/-/safetyNetConfig:batchGet&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
		 * Get v1/{parent}/debugTokens
		 * @param {string} parent Required. The relative resource name of the parent app for which to list each associated DebugToken, in the format: ``` projects/{project_number}/apps/{app_id} ```
		 * @param {number} pageSize The maximum number of DebugTokens to return in the response. Note that an app can have at most 20 debug tokens. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
		 * @param {string} pageToken Token returned from a previous call to ListDebugTokens indicating where in the set of DebugTokens to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListDebugTokens must match the call that provided the page token; if they do not match, the result is undefined.
		 * @return {GoogleFirebaseAppcheckV1ListDebugTokensResponse} Successful response
		 */
		Firebaseappcheck_projects_apps_debugTokens_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleFirebaseAppcheckV1ListDebugTokensResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1ListDebugTokensResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/debugTokens&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
		 * Post v1/{parent}/debugTokens
		 * @param {string} parent Required. The relative resource name of the parent app in which the specified DebugToken will be created, in the format: ``` projects/{project_number}/apps/{app_id} ```
		 * @return {GoogleFirebaseAppcheckV1DebugToken} Successful response
		 */
		Firebaseappcheck_projects_apps_debugTokens_create(parent: string, requestBody: GoogleFirebaseAppcheckV1DebugToken): Observable<GoogleFirebaseAppcheckV1DebugToken> {
			return this.http.post<GoogleFirebaseAppcheckV1DebugToken>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/debugTokens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
		 * Get v1/{parent}/services
		 * @param {string} parent Required. The relative resource name of the parent project for which to list each associated Service, in the format: ``` projects/{project_number} ```
		 * @param {number} pageSize The maximum number of Services to return in the response. Only explicitly configured services are returned. The server may return fewer than this at its own discretion. If no value is specified (or too large a value is specified), the server will impose its own limit.
		 * @param {string} pageToken Token returned from a previous call to ListServices indicating where in the set of Services to resume listing. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListServices must match the call that provided the page token; if they do not match, the result is undefined.
		 * @return {GoogleFirebaseAppcheckV1ListServicesResponse} Successful response
		 */
		Firebaseappcheck_projects_services_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleFirebaseAppcheckV1ListServicesResponse> {
			return this.http.get<GoogleFirebaseAppcheckV1ListServicesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Atomically updates the specified Service configurations.
		 * Post v1/{parent}/services:batchUpdate
		 * @param {string} parent Required. The parent project name shared by all Service configurations being updated, in the format ``` projects/{project_number} ``` The parent collection in the `name` field of any resource being updated must match this field, or the entire batch fails.
		 * @return {GoogleFirebaseAppcheckV1BatchUpdateServicesResponse} Successful response
		 */
		Firebaseappcheck_projects_services_batchUpdate(parent: string, requestBody: GoogleFirebaseAppcheckV1BatchUpdateServicesRequest): Observable<GoogleFirebaseAppcheckV1BatchUpdateServicesResponse> {
			return this.http.post<GoogleFirebaseAppcheckV1BatchUpdateServicesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

