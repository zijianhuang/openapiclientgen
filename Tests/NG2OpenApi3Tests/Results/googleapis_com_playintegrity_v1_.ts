import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** (Restricted Access) Contains a signal helping apps differentiating between likely genuine and likely non-genuine user traffic. */
	export interface AccountActivity {

		/** Required. Indicates the activity level of the account. */
		activityLevel?: AccountActivityActivityLevel | null;
	}

	/** (Restricted Access) Contains a signal helping apps differentiating between likely genuine and likely non-genuine user traffic. */
	export interface AccountActivityFormProperties {

		/** Required. Indicates the activity level of the account. */
		activityLevel: FormControl<AccountActivityActivityLevel | null | undefined>,
	}
	export function CreateAccountActivityFormGroup() {
		return new FormGroup<AccountActivityFormProperties>({
			activityLevel: new FormControl<AccountActivityActivityLevel | null | undefined>(undefined),
		});

	}

	export enum AccountActivityActivityLevel { ACTIVITY_LEVEL_UNSPECIFIED = 'ACTIVITY_LEVEL_UNSPECIFIED', UNEVALUATED = 'UNEVALUATED', UNUSUAL = 'UNUSUAL', UNKNOWN = 'UNKNOWN', TYPICAL_BASIC = 'TYPICAL_BASIC', TYPICAL_STRONG = 'TYPICAL_STRONG' }


	/** Contains the account information such as the licensing status for the user in the scope. */
	export interface AccountDetails {

		/** (Restricted Access) Contains a signal helping apps differentiating between likely genuine and likely non-genuine user traffic. */
		accountActivity?: AccountActivity;

		/** Required. Details about the licensing status of the user for the app in the scope. */
		appLicensingVerdict?: AccountDetailsAppLicensingVerdict | null;
	}

	/** Contains the account information such as the licensing status for the user in the scope. */
	export interface AccountDetailsFormProperties {

		/** Required. Details about the licensing status of the user for the app in the scope. */
		appLicensingVerdict: FormControl<AccountDetailsAppLicensingVerdict | null | undefined>,
	}
	export function CreateAccountDetailsFormGroup() {
		return new FormGroup<AccountDetailsFormProperties>({
			appLicensingVerdict: new FormControl<AccountDetailsAppLicensingVerdict | null | undefined>(undefined),
		});

	}

	export enum AccountDetailsAppLicensingVerdict { UNKNOWN = 'UNKNOWN', LICENSED = 'LICENSED', UNLICENSED = 'UNLICENSED', UNEVALUATED = 'UNEVALUATED' }


	/** Contains signals about others apps on the device which could be used to access or control the requesting app. */
	export interface AppAccessRiskVerdict {

		/** Required. App access risk verdict related to apps that are not installed by Google Play, and are not preloaded on the system image by the device manufacturer. */
		otherApps?: AppAccessRiskVerdictOtherApps | null;

		/** Required. App access risk verdict related to apps that are not installed by the Google Play Store, and are not preloaded on the system image by the device manufacturer. */
		playOrSystemApps?: AppAccessRiskVerdictOtherApps | null;
	}

	/** Contains signals about others apps on the device which could be used to access or control the requesting app. */
	export interface AppAccessRiskVerdictFormProperties {

		/** Required. App access risk verdict related to apps that are not installed by Google Play, and are not preloaded on the system image by the device manufacturer. */
		otherApps: FormControl<AppAccessRiskVerdictOtherApps | null | undefined>,

		/** Required. App access risk verdict related to apps that are not installed by the Google Play Store, and are not preloaded on the system image by the device manufacturer. */
		playOrSystemApps: FormControl<AppAccessRiskVerdictOtherApps | null | undefined>,
	}
	export function CreateAppAccessRiskVerdictFormGroup() {
		return new FormGroup<AppAccessRiskVerdictFormProperties>({
			otherApps: new FormControl<AppAccessRiskVerdictOtherApps | null | undefined>(undefined),
			playOrSystemApps: new FormControl<AppAccessRiskVerdictOtherApps | null | undefined>(undefined),
		});

	}

	export enum AppAccessRiskVerdictOtherApps { UNKNOWN = 'UNKNOWN', UNEVALUATED = 'UNEVALUATED', NOT_INSTALLED = 'NOT_INSTALLED', INSTALLED = 'INSTALLED', CAPTURING = 'CAPTURING', CONTROLLING = 'CONTROLLING' }


	/** Contains the application integrity information. */
	export interface AppIntegrity {

		/** Required. Details about the app recognition verdict */
		appRecognitionVerdict?: AppIntegrityAppRecognitionVerdict | null;

		/** The SHA256 hash of the requesting app's signing certificates (base64 web-safe encoded). Set iff app_recognition_verdict != UNEVALUATED. */
		certificateSha256Digest?: Array<string>;

		/** Package name of the application under attestation. Set iff app_recognition_verdict != UNEVALUATED. */
		packageName?: string | null;

		/** Version code of the application. Set iff app_recognition_verdict != UNEVALUATED. */
		versionCode?: string | null;
	}

	/** Contains the application integrity information. */
	export interface AppIntegrityFormProperties {

		/** Required. Details about the app recognition verdict */
		appRecognitionVerdict: FormControl<AppIntegrityAppRecognitionVerdict | null | undefined>,

		/** Package name of the application under attestation. Set iff app_recognition_verdict != UNEVALUATED. */
		packageName: FormControl<string | null | undefined>,

		/** Version code of the application. Set iff app_recognition_verdict != UNEVALUATED. */
		versionCode: FormControl<string | null | undefined>,
	}
	export function CreateAppIntegrityFormGroup() {
		return new FormGroup<AppIntegrityFormProperties>({
			appRecognitionVerdict: new FormControl<AppIntegrityAppRecognitionVerdict | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			versionCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppIntegrityAppRecognitionVerdict { UNKNOWN = 'UNKNOWN', PLAY_RECOGNIZED = 'PLAY_RECOGNIZED', UNRECOGNIZED_VERSION = 'UNRECOGNIZED_VERSION', UNEVALUATED = 'UNEVALUATED' }


	/** Request to decode the integrity token. */
	export interface DecodeIntegrityTokenRequest {

		/** Encoded integrity token. */
		integrityToken?: string | null;
	}

	/** Request to decode the integrity token. */
	export interface DecodeIntegrityTokenRequestFormProperties {

		/** Encoded integrity token. */
		integrityToken: FormControl<string | null | undefined>,
	}
	export function CreateDecodeIntegrityTokenRequestFormGroup() {
		return new FormGroup<DecodeIntegrityTokenRequestFormProperties>({
			integrityToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing the decoded integrity payload. */
	export interface DecodeIntegrityTokenResponse {

		/** Contains basic app information and integrity signals like device attestation and licensing details. */
		tokenPayloadExternal?: TokenPayloadExternal;
	}

	/** Response containing the decoded integrity payload. */
	export interface DecodeIntegrityTokenResponseFormProperties {
	}
	export function CreateDecodeIntegrityTokenResponseFormGroup() {
		return new FormGroup<DecodeIntegrityTokenResponseFormProperties>({
		});

	}


	/** Contains basic app information and integrity signals like device attestation and licensing details. */
	export interface TokenPayloadExternal {

		/** Contains the account information such as the licensing status for the user in the scope. */
		accountDetails?: AccountDetails;

		/** Contains the application integrity information. */
		appIntegrity?: AppIntegrity;

		/** Contains the device attestation information. */
		deviceIntegrity?: DeviceIntegrity;

		/** Contains information about the environment Play Integrity API runs in, e.g. Play Protect verdict. */
		environmentDetails?: EnvironmentDetails;

		/** Contains the integrity request information. */
		requestDetails?: RequestDetails;

		/** Contains additional information generated for testing responses. */
		testingDetails?: TestingDetails;
	}

	/** Contains basic app information and integrity signals like device attestation and licensing details. */
	export interface TokenPayloadExternalFormProperties {
	}
	export function CreateTokenPayloadExternalFormGroup() {
		return new FormGroup<TokenPayloadExternalFormProperties>({
		});

	}


	/** Contains the device attestation information. */
	export interface DeviceIntegrity {

		/** Details about the integrity of the device the app is running on. */
		deviceRecognitionVerdict?: Array<string>;

		/** Recent device activity can help developers identify devices that have exhibited hyperactive attestation activity, which could be a sign of an attack or token farming. */
		recentDeviceActivity?: RecentDeviceActivity;
	}

	/** Contains the device attestation information. */
	export interface DeviceIntegrityFormProperties {
	}
	export function CreateDeviceIntegrityFormGroup() {
		return new FormGroup<DeviceIntegrityFormProperties>({
		});

	}


	/** Recent device activity can help developers identify devices that have exhibited hyperactive attestation activity, which could be a sign of an attack or token farming. */
	export interface RecentDeviceActivity {

		/** Required. Indicates the activity level of the device. */
		deviceActivityLevel?: RecentDeviceActivityDeviceActivityLevel | null;
	}

	/** Recent device activity can help developers identify devices that have exhibited hyperactive attestation activity, which could be a sign of an attack or token farming. */
	export interface RecentDeviceActivityFormProperties {

		/** Required. Indicates the activity level of the device. */
		deviceActivityLevel: FormControl<RecentDeviceActivityDeviceActivityLevel | null | undefined>,
	}
	export function CreateRecentDeviceActivityFormGroup() {
		return new FormGroup<RecentDeviceActivityFormProperties>({
			deviceActivityLevel: new FormControl<RecentDeviceActivityDeviceActivityLevel | null | undefined>(undefined),
		});

	}

	export enum RecentDeviceActivityDeviceActivityLevel { DEVICE_ACTIVITY_LEVEL_UNSPECIFIED = 'DEVICE_ACTIVITY_LEVEL_UNSPECIFIED', UNEVALUATED = 'UNEVALUATED', LEVEL_1 = 'LEVEL_1', LEVEL_2 = 'LEVEL_2', LEVEL_3 = 'LEVEL_3', LEVEL_4 = 'LEVEL_4' }


	/** Contains information about the environment Play Integrity API runs in, e.g. Play Protect verdict. */
	export interface EnvironmentDetails {

		/** Contains signals about others apps on the device which could be used to access or control the requesting app. */
		appAccessRiskVerdict?: AppAccessRiskVerdict;

		/** The evaluation of Play Protect verdict. */
		playProtectVerdict?: EnvironmentDetailsPlayProtectVerdict | null;
	}

	/** Contains information about the environment Play Integrity API runs in, e.g. Play Protect verdict. */
	export interface EnvironmentDetailsFormProperties {

		/** The evaluation of Play Protect verdict. */
		playProtectVerdict: FormControl<EnvironmentDetailsPlayProtectVerdict | null | undefined>,
	}
	export function CreateEnvironmentDetailsFormGroup() {
		return new FormGroup<EnvironmentDetailsFormProperties>({
			playProtectVerdict: new FormControl<EnvironmentDetailsPlayProtectVerdict | null | undefined>(undefined),
		});

	}

	export enum EnvironmentDetailsPlayProtectVerdict { PLAY_PROTECT_VERDICT_UNSPECIFIED = 'PLAY_PROTECT_VERDICT_UNSPECIFIED', UNEVALUATED = 'UNEVALUATED', NO_ISSUES = 'NO_ISSUES', NO_DATA = 'NO_DATA', MEDIUM_RISK = 'MEDIUM_RISK', HIGH_RISK = 'HIGH_RISK', POSSIBLE_RISK = 'POSSIBLE_RISK' }


	/** Contains the integrity request information. */
	export interface RequestDetails {

		/** Nonce that was provided in the request (which is base64 web-safe no-wrap). */
		nonce?: string | null;

		/** Request hash that was provided in the request. */
		requestHash?: string | null;

		/** Required. Application package name this attestation was requested for. Note: This field makes no guarantees or promises on the caller integrity. For details on application integrity, check application_integrity. */
		requestPackageName?: string | null;

		/** Required. Timestamp, in milliseconds, of the integrity application request. */
		timestampMillis?: string | null;
	}

	/** Contains the integrity request information. */
	export interface RequestDetailsFormProperties {

		/** Nonce that was provided in the request (which is base64 web-safe no-wrap). */
		nonce: FormControl<string | null | undefined>,

		/** Request hash that was provided in the request. */
		requestHash: FormControl<string | null | undefined>,

		/** Required. Application package name this attestation was requested for. Note: This field makes no guarantees or promises on the caller integrity. For details on application integrity, check application_integrity. */
		requestPackageName: FormControl<string | null | undefined>,

		/** Required. Timestamp, in milliseconds, of the integrity application request. */
		timestampMillis: FormControl<string | null | undefined>,
	}
	export function CreateRequestDetailsFormGroup() {
		return new FormGroup<RequestDetailsFormProperties>({
			nonce: new FormControl<string | null | undefined>(undefined),
			requestHash: new FormControl<string | null | undefined>(undefined),
			requestPackageName: new FormControl<string | null | undefined>(undefined),
			timestampMillis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains additional information generated for testing responses. */
	export interface TestingDetails {

		/** Required. Indicates that the information contained in this payload is a testing response that is statically overridden for a tester. */
		isTestingResponse?: boolean | null;
	}

	/** Contains additional information generated for testing responses. */
	export interface TestingDetailsFormProperties {

		/** Required. Indicates that the information contained in this payload is a testing response that is statically overridden for a tester. */
		isTestingResponse: FormControl<boolean | null | undefined>,
	}
	export function CreateTestingDetailsFormGroup() {
		return new FormGroup<TestingDetailsFormProperties>({
			isTestingResponse: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Decodes the integrity token and returns the token payload.
		 * Post v1/{packageName}:decodeIntegrityToken
		 * @param {string} packageName  Package name of the app the attached integrity token belongs to.
		 * @return {DecodeIntegrityTokenResponse} Successful response
		 */
		Playintegrity_decodeIntegrityToken(packageName: string, requestBody: DecodeIntegrityTokenRequest): Observable<DecodeIntegrityTokenResponse> {
			return this.http.post<DecodeIntegrityTokenResponse>(this.baseUri + 'v1/' + (packageName == null ? '' : encodeURIComponent(packageName)) + ':decodeIntegrityToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

