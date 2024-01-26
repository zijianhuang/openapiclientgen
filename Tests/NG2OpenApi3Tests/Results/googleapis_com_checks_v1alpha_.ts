import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Represents an app in Checks. */
	export interface GoogleChecksAccountV1alphaApp {

		/** The resource name of the app. Example: `accounts/123/apps/456` */
		name?: string | null;

		/** The app's title. */
		title?: string | null;
	}

	/** Represents an app in Checks. */
	export interface GoogleChecksAccountV1alphaAppFormProperties {

		/** The resource name of the app. Example: `accounts/123/apps/456` */
		name: FormControl<string | null | undefined>,

		/** The app's title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChecksAccountV1alphaAppFormGroup() {
		return new FormGroup<GoogleChecksAccountV1alphaAppFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for AccountService.ListApps. */
	export interface GoogleChecksAccountV1alphaListAppsResponse {

		/** The apps. */
		apps?: Array<GoogleChecksAccountV1alphaApp>;

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** The response message for AccountService.ListApps. */
	export interface GoogleChecksAccountV1alphaListAppsResponseFormProperties {

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChecksAccountV1alphaListAppsResponseFormGroup() {
		return new FormGroup<GoogleChecksAccountV1alphaListAppsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for ReportService.AnalyzeUpload. */
	export interface GoogleChecksReportV1alphaAnalyzeUploadRequest {

		/** Optional. The type of the uploaded app binary. If not provided, the server assumes APK file for Android and IPA file for iOS. */
		appBinaryFileType?: GoogleChecksReportV1alphaAnalyzeUploadRequestAppBinaryFileType | null;

		/** Optional. Git commit hash or changelist number associated with the upload. */
		codeReferenceId?: string | null;
	}

	/** The request message for ReportService.AnalyzeUpload. */
	export interface GoogleChecksReportV1alphaAnalyzeUploadRequestFormProperties {

		/** Optional. The type of the uploaded app binary. If not provided, the server assumes APK file for Android and IPA file for iOS. */
		appBinaryFileType: FormControl<GoogleChecksReportV1alphaAnalyzeUploadRequestAppBinaryFileType | null | undefined>,

		/** Optional. Git commit hash or changelist number associated with the upload. */
		codeReferenceId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaAnalyzeUploadRequestFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaAnalyzeUploadRequestFormProperties>({
			appBinaryFileType: new FormControl<GoogleChecksReportV1alphaAnalyzeUploadRequestAppBinaryFileType | null | undefined>(undefined),
			codeReferenceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleChecksReportV1alphaAnalyzeUploadRequestAppBinaryFileType { APP_BINARY_FILE_TYPE_UNSPECIFIED = 0, ANDROID_APK = 1, ANDROID_AAB = 2, IOS_IPA = 3 }


	/** Information about the analyzed app bundle. */
	export interface GoogleChecksReportV1alphaAppBundle {

		/** Unique id of the bundle. For example: "com.google.Gmail". */
		bundleId?: string | null;

		/** Git commit hash or changelist number associated with the release. */
		codeReferenceId?: string | null;

		/** Identifies the type of release. */
		releaseType?: GoogleChecksReportV1alphaAppBundleReleaseType | null;

		/** The user-visible version of the bundle such as the Android `versionName` or iOS `CFBundleShortVersionString`. For example: "7.21.1". */
		version?: string | null;

		/** The version used throughout the operating system and store to identify the build such as the Android `versionCode` or iOS `CFBundleVersion`. */
		versionId?: string | null;
	}

	/** Information about the analyzed app bundle. */
	export interface GoogleChecksReportV1alphaAppBundleFormProperties {

		/** Unique id of the bundle. For example: "com.google.Gmail". */
		bundleId: FormControl<string | null | undefined>,

		/** Git commit hash or changelist number associated with the release. */
		codeReferenceId: FormControl<string | null | undefined>,

		/** Identifies the type of release. */
		releaseType: FormControl<GoogleChecksReportV1alphaAppBundleReleaseType | null | undefined>,

		/** The user-visible version of the bundle such as the Android `versionName` or iOS `CFBundleShortVersionString`. For example: "7.21.1". */
		version: FormControl<string | null | undefined>,

		/** The version used throughout the operating system and store to identify the build such as the Android `versionCode` or iOS `CFBundleVersion`. */
		versionId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaAppBundleFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaAppBundleFormProperties>({
			bundleId: new FormControl<string | null | undefined>(undefined),
			codeReferenceId: new FormControl<string | null | undefined>(undefined),
			releaseType: new FormControl<GoogleChecksReportV1alphaAppBundleReleaseType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			versionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleChecksReportV1alphaAppBundleReleaseType { APP_BUNDLE_RELEASE_TYPE_UNSPECIFIED = 0, PUBLIC = 1, PRE_RELEASE = 2 }


	/** A check that was run on your app. */
	export interface GoogleChecksReportV1alphaCheck {

		/** Regulations and policies that serve as the legal basis for the check. */
		citations?: Array<GoogleChecksReportV1alphaCheckCitation>;

		/** Evidence for a check. */
		evidence?: GoogleChecksReportV1alphaCheckEvidence;

		/** Regions that are impacted by the check. For more info, see https://google.aip.dev/143#countries-and-regions. */
		regionCodes?: Array<string>;

		/** The urgency or risk level of the check. */
		severity?: GoogleChecksReportV1alphaCheckSeverity | null;

		/** The result after running the check. */
		state?: GoogleChecksReportV1alphaCheckState | null;

		/** Additional information about the check state in relation to past reports. */
		stateMetadata?: GoogleChecksReportV1alphaCheckStateMetadata;

		/** The type of check that was run. A type will only appear once in a report's list of checks. */
		type?: GoogleChecksReportV1alphaCheckType | null;
	}

	/** A check that was run on your app. */
	export interface GoogleChecksReportV1alphaCheckFormProperties {

		/** The urgency or risk level of the check. */
		severity: FormControl<GoogleChecksReportV1alphaCheckSeverity | null | undefined>,

		/** The result after running the check. */
		state: FormControl<GoogleChecksReportV1alphaCheckState | null | undefined>,

		/** The type of check that was run. A type will only appear once in a report's list of checks. */
		type: FormControl<GoogleChecksReportV1alphaCheckType | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaCheckFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckFormProperties>({
			severity: new FormControl<GoogleChecksReportV1alphaCheckSeverity | null | undefined>(undefined),
			state: new FormControl<GoogleChecksReportV1alphaCheckState | null | undefined>(undefined),
			type: new FormControl<GoogleChecksReportV1alphaCheckType | null | undefined>(undefined),
		});

	}


	/** Regulation or policy that serves as the legal basis for the check. */
	export interface GoogleChecksReportV1alphaCheckCitation {

		/** Citation type. */
		type?: GoogleChecksReportV1alphaCheckCitationType | null;
	}

	/** Regulation or policy that serves as the legal basis for the check. */
	export interface GoogleChecksReportV1alphaCheckCitationFormProperties {

		/** Citation type. */
		type: FormControl<GoogleChecksReportV1alphaCheckCitationType | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaCheckCitationFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckCitationFormProperties>({
			type: new FormControl<GoogleChecksReportV1alphaCheckCitationType | null | undefined>(undefined),
		});

	}

	export enum GoogleChecksReportV1alphaCheckCitationType { CITATION_TYPE_UNSPECIFIED = 0, COPPA = 1, GDPR = 2, FERPA = 3, CAL_OPPA = 4, CCPA = 5, SOPIPA = 6, LGPD = 7, CPRA = 8, VCDPA = 9, GOOGLE_PLAY_POLICY = 10, APP_STORE_POLICY = 11, CPA = 12, CTDPA = 13, UCPA = 14, PIPEDA = 15, ALBERTA_PIPA = 16, QUEBEC_ACT = 17, QUEBEC_BILL_64 = 18, CHINA_PIPL = 19 }


	/** Evidence for a check. */
	export interface GoogleChecksReportV1alphaCheckEvidence {

		/** Evidence concerning data security. */
		dataSecurity?: GoogleChecksReportV1alphaCheckDataSecurityEvidence;

		/** Evidence concerning data types found in your app. */
		dataTypes?: Array<GoogleChecksReportV1alphaCheckDataTypeEvidence>;

		/** Evidence collected from endpoint restriction violation analysis. */
		endpointRestrictionViolations?: Array<GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidence>;

		/** Evidence concerning endpoints that were contacted by your app. */
		endpoints?: Array<GoogleChecksReportV1alphaCheckEndpointEvidence>;

		/** Evidence collected from permission restriction violation analysis. */
		permissionRestrictionViolations?: Array<GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidence>;

		/** Evidence concerning permissions that were found in your app. */
		permissions?: Array<GoogleChecksReportV1alphaCheckPermissionEvidence>;

		/** Evidence collected from your privacy policy(s). */
		privacyPolicyTexts?: Array<GoogleChecksReportV1alphaCheckPrivacyPolicyTextEvidence>;

		/** Evidence concerning SDK issues. */
		sdkIssues?: Array<GoogleChecksReportV1alphaCheckSdkIssueEvidence>;

		/** Evidence collected from SDK restriction violation analysis. */
		sdkRestrictionViolations?: Array<GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidence>;

		/** Evidence concerning SDKs that were found in your app. */
		sdks?: Array<GoogleChecksReportV1alphaCheckSdkEvidence>;
	}

	/** Evidence for a check. */
	export interface GoogleChecksReportV1alphaCheckEvidenceFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaCheckEvidenceFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckEvidenceFormProperties>({
		});

	}


	/** Evidence concerning data security. */
	export interface GoogleChecksReportV1alphaCheckDataSecurityEvidence {

		/** Evidence related to data in transit. */
		dataInTransitInfo?: Array<GoogleChecksReportV1alphaCheckDataSecurityEvidenceDataInTransitInfo>;
	}

	/** Evidence concerning data security. */
	export interface GoogleChecksReportV1alphaCheckDataSecurityEvidenceFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaCheckDataSecurityEvidenceFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckDataSecurityEvidenceFormProperties>({
		});

	}


	/** Evidence related to data in transit detected in your app. */
	export interface GoogleChecksReportV1alphaCheckDataSecurityEvidenceDataInTransitInfo {

		/** The URL contacted by your app. This includes the protocol, domain, and URL parameters. */
		uri?: string | null;
	}

	/** Evidence related to data in transit detected in your app. */
	export interface GoogleChecksReportV1alphaCheckDataSecurityEvidenceDataInTransitInfoFormProperties {

		/** The URL contacted by your app. This includes the protocol, domain, and URL parameters. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaCheckDataSecurityEvidenceDataInTransitInfoFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckDataSecurityEvidenceDataInTransitInfoFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Evidence concerning a data type that was found in your app. */
	export interface GoogleChecksReportV1alphaCheckDataTypeEvidence {

		/** The data type that was found in your app. */
		dataType?: GoogleChecksReportV1alphaCheckDataTypeEvidenceDataType | null;

		/** Evidence collected about a data type. */
		dataTypeEvidence?: GoogleChecksReportV1alphaDataTypeEvidence;
	}

	/** Evidence concerning a data type that was found in your app. */
	export interface GoogleChecksReportV1alphaCheckDataTypeEvidenceFormProperties {

		/** The data type that was found in your app. */
		dataType: FormControl<GoogleChecksReportV1alphaCheckDataTypeEvidenceDataType | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaCheckDataTypeEvidenceFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckDataTypeEvidenceFormProperties>({
			dataType: new FormControl<GoogleChecksReportV1alphaCheckDataTypeEvidenceDataType | null | undefined>(undefined),
		});

	}

	export enum GoogleChecksReportV1alphaCheckDataTypeEvidenceDataType { DATA_TYPE_UNSPECIFIED = 0, DATA_TYPE_APPROXIMATE_LOCATION = 1, DATA_TYPE_PRECISE_LOCATION = 2, DATA_TYPE_PERSONAL_NAME = 3, DATA_TYPE_EMAIL_ADDRESS = 4, DATA_TYPE_USER_IDS = 5, DATA_TYPE_PHYSICAL_ADDRESS = 6, DATA_TYPE_PHONE_NUMBER = 7, DATA_TYPE_RACE_AND_ETHNICITY = 8, DATA_TYPE_POLITICAL_OR_RELIGIOUS_BELIEFS = 9, DATA_TYPE_SEXUAL_ORIENTATION = 10, DATA_TYPE_OTHER_PERSONAL_INFO = 11, DATA_TYPE_PAYMENT_INFO = 12, DATA_TYPE_PURCHASE_HISTORY = 13, DATA_TYPE_CREDIT_SCORE = 14, DATA_TYPE_OTHER_FINANCIAL_INFO = 15, DATA_TYPE_HEALTH_INFO = 16, DATA_TYPE_FITNESS_INFO = 17, DATA_TYPE_EMAILS = 18, DATA_TYPE_TEXT_MESSAGES = 19, DATA_TYPE_PHOTOS = 20, DATA_TYPE_VIDEOS = 21, DATA_TYPE_VOICE_OR_SOUND_RECORDINGS = 22, DATA_TYPE_MUSIC_FILES = 23, DATA_TYPE_OTHER_AUDIO_FILES = 24, DATA_TYPE_FILES_AND_DOCS = 25, DATA_TYPE_CALENDAR_EVENTS = 26, DATA_TYPE_CONTACTS = 27, DATA_TYPE_APP_INTERACTIONS = 28, DATA_TYPE_IN_APP_SEARCH_HISTORY = 29, DATA_TYPE_INSTALLED_APPS = 30, DATA_TYPE_OTHER_USER_GENERATED_CONTENT = 31, DATA_TYPE_OTHER_ACTIONS = 32, DATA_TYPE_WEB_BROWSING_HISTORY = 33, DATA_TYPE_CRASH_LOGS = 34, DATA_TYPE_PERFORMANCE_DIAGNOSTICS = 35, DATA_TYPE_OTHER_APP_PERFORMANCE_DATA = 36, DATA_TYPE_DEVICE_OR_OTHER_IDS = 37 }


	/** Evidence collected about a data type. */
	export interface GoogleChecksReportV1alphaDataTypeEvidence {

		/** List of endpoints the data type was sent to. */
		endpoints?: Array<GoogleChecksReportV1alphaDataTypeEndpointEvidence>;

		/** List of included permissions that imply collection of the data type. */
		permissions?: Array<GoogleChecksReportV1alphaDataTypePermissionEvidence>;

		/** List of privacy policy texts that imply collection of the data type. */
		privacyPolicyTexts?: Array<GoogleChecksReportV1alphaDataTypePrivacyPolicyTextEvidence>;
	}

	/** Evidence collected about a data type. */
	export interface GoogleChecksReportV1alphaDataTypeEvidenceFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaDataTypeEvidenceFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaDataTypeEvidenceFormProperties>({
		});

	}


	/** Evidence based on an endpoint that data was sent to. */
	export interface GoogleChecksReportV1alphaDataTypeEndpointEvidence {

		/** Set of SDKs that are attributed to the exfiltration. */
		attributedSdks?: Array<GoogleChecksReportV1alphaDataTypeEndpointEvidenceAttributedSdk>;

		/** Endpoints the data type was sent to. */
		endpointDetails?: Array<GoogleChecksReportV1alphaDataTypeEndpointEvidenceEndpointDetails>;

		/** Type of data that was exfiltrated. */
		exfiltratedDataType?: GoogleChecksReportV1alphaDataTypeEndpointEvidenceExfiltratedDataType | null;
	}

	/** Evidence based on an endpoint that data was sent to. */
	export interface GoogleChecksReportV1alphaDataTypeEndpointEvidenceFormProperties {

		/** Type of data that was exfiltrated. */
		exfiltratedDataType: FormControl<GoogleChecksReportV1alphaDataTypeEndpointEvidenceExfiltratedDataType | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaDataTypeEndpointEvidenceFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaDataTypeEndpointEvidenceFormProperties>({
			exfiltratedDataType: new FormControl<GoogleChecksReportV1alphaDataTypeEndpointEvidenceExfiltratedDataType | null | undefined>(undefined),
		});

	}


	/** Details of SDK that is attributed to the exfiltration. */
	export interface GoogleChecksReportV1alphaDataTypeEndpointEvidenceAttributedSdk {

		/** Information about an SDK. */
		sdk?: GoogleChecksReportV1alphaSdk;
	}

	/** Details of SDK that is attributed to the exfiltration. */
	export interface GoogleChecksReportV1alphaDataTypeEndpointEvidenceAttributedSdkFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaDataTypeEndpointEvidenceAttributedSdkFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaDataTypeEndpointEvidenceAttributedSdkFormProperties>({
		});

	}


	/** Information about an SDK. */
	export interface GoogleChecksReportV1alphaSdk {

		/** SDK identifier. */
		id?: string | null;
	}

	/** Information about an SDK. */
	export interface GoogleChecksReportV1alphaSdkFormProperties {

		/** SDK identifier. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaSdkFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaSdkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the endpoint the data type was sent to. */
	export interface GoogleChecksReportV1alphaDataTypeEndpointEvidenceEndpointDetails {

		/** Information about an endpoint. */
		endpoint?: GoogleChecksReportV1alphaEndpoint;
	}

	/** Details of the endpoint the data type was sent to. */
	export interface GoogleChecksReportV1alphaDataTypeEndpointEvidenceEndpointDetailsFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaDataTypeEndpointEvidenceEndpointDetailsFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaDataTypeEndpointEvidenceEndpointDetailsFormProperties>({
		});

	}


	/** Information about an endpoint. */
	export interface GoogleChecksReportV1alphaEndpoint {

		/** Domain name (e.g. ads.google.com). */
		domain?: string | null;
	}

	/** Information about an endpoint. */
	export interface GoogleChecksReportV1alphaEndpointFormProperties {

		/** Domain name (e.g. ads.google.com). */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaEndpointFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaEndpointFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleChecksReportV1alphaDataTypeEndpointEvidenceExfiltratedDataType { EXFILTRATED_DATA_TYPE_UNSPECIFIED = 0, EXFILTRATED_DATA_TYPE_PHONE_NUMBER = 1, EXFILTRATED_DATA_TYPE_PRECISE_LOCATION = 2, EXFILTRATED_DATA_TYPE_CONTACT_NAME = 3, EXFILTRATED_DATA_TYPE_CONTACT_EMAIL = 4, EXFILTRATED_DATA_TYPE_CONTACT_PHONE_NUMBER = 5, EXFILTRATED_DATA_TYPE_INCOMING_TEXT_NUMBER = 6, EXFILTRATED_DATA_TYPE_INCOMING_TEXT_MESSAGE = 7, EXFILTRATED_DATA_TYPE_OUTGOING_TEXT_NUMBER = 8, EXFILTRATED_DATA_TYPE_OUTGOING_TEXT_MESSAGE = 9, EXFILTRATED_DATA_TYPE_ADVERTISING_ID = 10, EXFILTRATED_DATA_TYPE_ANDROID_ID = 11, EXFILTRATED_DATA_TYPE_IMEI = 12, EXFILTRATED_DATA_TYPE_IMSI = 13, EXFILTRATED_DATA_TYPE_SIM_SERIAL_NUMBER = 14, EXFILTRATED_DATA_TYPE_SSID = 15, EXFILTRATED_DATA_TYPE_ACCOUNT = 16, EXFILTRATED_DATA_TYPE_EXTERNAL_ACCOUNT = 17, EXFILTRATED_DATA_TYPE_INSTALLED_PACKAGES = 18 }


	/** Evidence based on the inclusion of a permission. */
	export interface GoogleChecksReportV1alphaDataTypePermissionEvidence {

		/** Information about a permission. */
		permission?: GoogleChecksReportV1alphaPermission;
	}

	/** Evidence based on the inclusion of a permission. */
	export interface GoogleChecksReportV1alphaDataTypePermissionEvidenceFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaDataTypePermissionEvidenceFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaDataTypePermissionEvidenceFormProperties>({
		});

	}


	/** Information about a permission. */
	export interface GoogleChecksReportV1alphaPermission {

		/** Permission identifier. */
		id?: string | null;
	}

	/** Information about a permission. */
	export interface GoogleChecksReportV1alphaPermissionFormProperties {

		/** Permission identifier. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaPermissionFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaPermissionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Evidence based on information from the privacy policy. */
	export interface GoogleChecksReportV1alphaDataTypePrivacyPolicyTextEvidence {

		/** Information about a policy fragment. */
		policyFragment?: GoogleChecksReportV1alphaPolicyFragment;
	}

	/** Evidence based on information from the privacy policy. */
	export interface GoogleChecksReportV1alphaDataTypePrivacyPolicyTextEvidenceFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaDataTypePrivacyPolicyTextEvidenceFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaDataTypePrivacyPolicyTextEvidenceFormProperties>({
		});

	}


	/** Information about a policy fragment. */
	export interface GoogleChecksReportV1alphaPolicyFragment {

		/** HTML content. */
		htmlContent?: string | null;

		/** Policy URL. */
		sourceUri?: string | null;
	}

	/** Information about a policy fragment. */
	export interface GoogleChecksReportV1alphaPolicyFragmentFormProperties {

		/** HTML content. */
		htmlContent: FormControl<string | null | undefined>,

		/** Policy URL. */
		sourceUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaPolicyFragmentFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaPolicyFragmentFormProperties>({
			htmlContent: new FormControl<string | null | undefined>(undefined),
			sourceUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Evidence collected from endpoint restriction violation analysis. */
	export interface GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidence {

		/** Endpoints in violation. */
		endpointDetails?: Array<GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidenceEndpointDetails>;
	}

	/** Evidence collected from endpoint restriction violation analysis. */
	export interface GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidenceFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidenceFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidenceFormProperties>({
		});

	}


	/** Details of the endpoint in violation. */
	export interface GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidenceEndpointDetails {

		/** Information about an endpoint. */
		endpoint?: GoogleChecksReportV1alphaEndpoint;
	}

	/** Details of the endpoint in violation. */
	export interface GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidenceEndpointDetailsFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidenceEndpointDetailsFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckEndpointRestrictionViolationEvidenceEndpointDetailsFormProperties>({
		});

	}


	/** Evidence concerning an endpoint that was contacted by your app. */
	export interface GoogleChecksReportV1alphaCheckEndpointEvidence {

		/** Information about an endpoint. */
		endpoint?: GoogleChecksReportV1alphaEndpoint;
	}

	/** Evidence concerning an endpoint that was contacted by your app. */
	export interface GoogleChecksReportV1alphaCheckEndpointEvidenceFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaCheckEndpointEvidenceFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckEndpointEvidenceFormProperties>({
		});

	}


	/** Evidence collected from permission restriction violation analysis. */
	export interface GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidence {

		/** Permissions in violation. */
		permissionDetails?: Array<GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidencePermissionDetails>;
	}

	/** Evidence collected from permission restriction violation analysis. */
	export interface GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidenceFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidenceFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidenceFormProperties>({
		});

	}


	/** Details of the permission in violation. */
	export interface GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidencePermissionDetails {

		/** Information about a permission. */
		permission?: GoogleChecksReportV1alphaPermission;
	}

	/** Details of the permission in violation. */
	export interface GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidencePermissionDetailsFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidencePermissionDetailsFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckPermissionRestrictionViolationEvidencePermissionDetailsFormProperties>({
		});

	}


	/** Evidence concerning a permission that was found in your app. */
	export interface GoogleChecksReportV1alphaCheckPermissionEvidence {

		/** Information about a permission. */
		permission?: GoogleChecksReportV1alphaPermission;
	}

	/** Evidence concerning a permission that was found in your app. */
	export interface GoogleChecksReportV1alphaCheckPermissionEvidenceFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaCheckPermissionEvidenceFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckPermissionEvidenceFormProperties>({
		});

	}


	/** Evidence collected from your privacy policy(s). */
	export interface GoogleChecksReportV1alphaCheckPrivacyPolicyTextEvidence {

		/** Information about a policy fragment. */
		policyFragment?: GoogleChecksReportV1alphaPolicyFragment;
	}

	/** Evidence collected from your privacy policy(s). */
	export interface GoogleChecksReportV1alphaCheckPrivacyPolicyTextEvidenceFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaCheckPrivacyPolicyTextEvidenceFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckPrivacyPolicyTextEvidenceFormProperties>({
		});

	}


	/** Evidence concerning an SDK issue. */
	export interface GoogleChecksReportV1alphaCheckSdkIssueEvidence {

		/** Information about an SDK. */
		sdk?: GoogleChecksReportV1alphaSdk;

		/** The SDK version. */
		sdkVersion?: string | null;
	}

	/** Evidence concerning an SDK issue. */
	export interface GoogleChecksReportV1alphaCheckSdkIssueEvidenceFormProperties {

		/** The SDK version. */
		sdkVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaCheckSdkIssueEvidenceFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckSdkIssueEvidenceFormProperties>({
			sdkVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Evidence collected from SDK restriction violation analysis. */
	export interface GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidence {

		/** SDKs in violation. */
		sdkDetails?: Array<GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidenceSdkDetails>;
	}

	/** Evidence collected from SDK restriction violation analysis. */
	export interface GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidenceFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidenceFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidenceFormProperties>({
		});

	}


	/** Details of the SDK in violation. */
	export interface GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidenceSdkDetails {

		/** Information about an SDK. */
		sdk?: GoogleChecksReportV1alphaSdk;
	}

	/** Details of the SDK in violation. */
	export interface GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidenceSdkDetailsFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidenceSdkDetailsFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckSdkRestrictionViolationEvidenceSdkDetailsFormProperties>({
		});

	}


	/** Evidence conerning an SDK that was found in your app. */
	export interface GoogleChecksReportV1alphaCheckSdkEvidence {

		/** Information about an SDK. */
		sdk?: GoogleChecksReportV1alphaSdk;
	}

	/** Evidence conerning an SDK that was found in your app. */
	export interface GoogleChecksReportV1alphaCheckSdkEvidenceFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaCheckSdkEvidenceFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckSdkEvidenceFormProperties>({
		});

	}

	export enum GoogleChecksReportV1alphaCheckSeverity { CHECK_SEVERITY_UNSPECIFIED = 0, PRIORITY = 1, POTENTIAL = 2, OPPORTUNITY = 3 }

	export enum GoogleChecksReportV1alphaCheckState { CHECK_STATE_UNSPECIFIED = 0, PASSED = 1, FAILED = 2, UNCHECKED = 3 }


	/** Additional information about the check state in relation to past reports. */
	export interface GoogleChecksReportV1alphaCheckStateMetadata {

		/** Indicators related to the check state. */
		badges?: Array<string>;

		/** The time when the check first started failing. */
		firstFailingTime?: string | null;

		/** The last time the check failed. */
		lastFailingTime?: string | null;
	}

	/** Additional information about the check state in relation to past reports. */
	export interface GoogleChecksReportV1alphaCheckStateMetadataFormProperties {

		/** The time when the check first started failing. */
		firstFailingTime: FormControl<string | null | undefined>,

		/** The last time the check failed. */
		lastFailingTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaCheckStateMetadataFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaCheckStateMetadataFormProperties>({
			firstFailingTime: new FormControl<string | null | undefined>(undefined),
			lastFailingTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleChecksReportV1alphaCheckType { CHECK_TYPE_UNSPECIFIED = 0, STORE_LISTING_PRIVACY_POLICY_LINK_PRESENT = 1, PRIVACY_POLICY_UPDATE_DATE_RECENT = 2, PRIVACY_POLICY_GDPR_GENERAL_RULES = 3, PRIVACY_POLICY_CCPA_GENERAL_RULES = 4, PRIVACY_POLICY_COLLECTION_CATEGORIES_DATA_NOTICE = 5, PRIVACY_POLICY_PROCESSING_PURPOSE_DATA_NOTICE = 6, PRIVACY_POLICY_SHARING_CATEGORIES_DATA_NOTICE = 7, PRIVACY_POLICY_DATA_RETENTION_NOTICE = 8, PRIVACY_POLICY_CONTACT_DETAILS_NOTICE = 9, PRIVACY_POLICY_CHILDREN_GENERAL_RULES = 10, PRIVACY_POLICY_DATA_TYPE_PHONE_NUMBER = 11, PRIVACY_POLICY_DATA_TYPE_USER_ACCOUNT_INFO = 12, PRIVACY_POLICY_DATA_TYPE_PRECISE_LOCATION = 13, PRIVACY_POLICY_DATA_TYPE_DEVICE_ID = 14, PRIVACY_POLICY_DATA_TYPE_APPS_ON_DEVICE = 15, PRIVACY_POLICY_DATA_TYPE_CONTACTS = 16, PRIVACY_POLICY_DATA_TYPE_TEXT_MESSAGES = 17, PRIVACY_POLICY_DATA_TYPE_PII = 18, PRIVACY_POLICY_DATA_TYPE_PII_CATEGORIES = 19, PRIVACY_POLICY_DATA_TYPE_HEALTH_AND_BIOMETRIC = 20, PRIVACY_POLICY_BRAZIL_LGPD_GENERAL_RULES = 21, PRIVACY_POLICY_VIRGINIA_VCDPA_GENERAL_RULES = 22, PRIVACY_POLICY_AFFILIATION_MENTION = 23, PRIVACY_POLICY_RIGHT_TO_DELETE_NOTICE = 24, PRIVACY_POLICY_RIGHT_TO_ACCESS_NOTICE = 25, PRIVACY_POLICY_RIGHT_TO_RECTIFICATION_NOTICE = 26, PRIVACY_POLICY_RIGHT_TO_KNOW_ABOUT_SELLING_NOTICE = 27, PRIVACY_POLICY_RIGHT_TO_KNOW_ABOUT_SHARING_NOTICE = 28, PRIVACY_POLICY_RIGHT_TO_OPT_OUT_FROM_SELLING_NOTICE = 29, PRIVACY_POLICY_METHOD_TO_OPT_OUT_FROM_SELLING_OR_SHARING_NOTICE = 30, PRIVACY_POLICY_DATA_CONTROLLER_IDENTITY = 31, PRIVACY_POLICY_DPO_CONTACT_DETAILS = 32, PRIVACY_POLICY_RIGHT_TO_LODGE_A_COMPLAINT = 33, PRIVACY_POLICY_LEGAL_BASIS = 34, PRIVACY_POLICY_CHILDREN_INFO_COLLECTION = 35, PRIVACY_POLICY_CHILDREN_INFO_USAGE_PURPOSES = 36, PRIVACY_POLICY_CHILDREN_INFO_DISCLOSURE_PRACTICES = 37, PRIVACY_POLICY_CHILDREN_INFO_PUBLICITY = 38, PRIVACY_POLICY_PARENTS_METHOD_OF_INFO_DELETION = 39, PRIVACY_POLICY_PARENTS_METHOD_TO_INFO_REVIEW = 40, PRIVACY_POLICY_PARENTS_METHOD_TO_STOP_FURTHER_INFO_COLLECTION_USE = 41, PRIVACY_POLICY_PARENTS_RIGHT_TO_INFO_DELETION = 42, PRIVACY_POLICY_PARENTS_RIGHT_TO_INFO_REVIEW = 43, PRIVACY_POLICY_PARENTS_RIGHT_TO_STOP_FURTHER_INFO_COLLECTION_USE = 44, PRIVACY_POLICY_PSL_APPROXIMATE_LOCATION = 45, PRIVACY_POLICY_PSL_PRECISE_LOCATION = 46, PRIVACY_POLICY_PSL_NAME = 47, PRIVACY_POLICY_PSL_EMAIL_ADDRESS = 48, PRIVACY_POLICY_PSL_USER_IDENTIFIERS = 49, PRIVACY_POLICY_PSL_ADDRESS = 50, PRIVACY_POLICY_PSL_PHONE_NUMBER = 51, PRIVACY_POLICY_PSL_RACE_AND_ETHNICITY = 52, PRIVACY_POLICY_PSL_CREDIT_SCORE = 53, PRIVACY_POLICY_PSL_PURCHASE_HISTORY = 54, PRIVACY_POLICY_PSL_HEALTH_INFO = 55, PRIVACY_POLICY_PSL_FITNESS_INFO = 56, PRIVACY_POLICY_PSL_EMAIL_MESSAGES = 57, PRIVACY_POLICY_PSL_TEXT_MESSAGES = 58, PRIVACY_POLICY_PSL_PHOTOS = 59, PRIVACY_POLICY_PSL_VIDEOS = 60, PRIVACY_POLICY_PSL_MUSIC_FILES = 61, PRIVACY_POLICY_PSL_VOICE_OR_SOUND_RECORDINGS = 62, PRIVACY_POLICY_PSL_FILES_AND_DOCS = 63, PRIVACY_POLICY_PSL_CALENDAR_EVENTS = 64, PRIVACY_POLICY_PSL_CONTACTS = 65, PRIVACY_POLICY_PSL_APP_INTERACTIONS = 66, PRIVACY_POLICY_PSL_IN_APP_SEARCH_HISTORY = 67, PRIVACY_POLICY_PSL_WEB_BROWSING_HISTORY = 68, PRIVACY_POLICY_PSL_INSTALLED_APPS = 69, PRIVACY_POLICY_PSL_CRASH_LOGS = 70, PRIVACY_POLICY_PSL_DIAGNOSTICS = 71, PRIVACY_POLICY_PSL_DEVICE_OR_OTHER_IDS = 72, DATA_MONITORING_NEW_ENDPOINT = 73, DATA_MONITORING_NEW_PERMISSION = 74, DATA_MONITORING_NEW_DATA_TYPE = 75, DATA_MONITORING_NEW_SDK = 76, DATA_MONITORING_ENCRYPTION = 77, DATA_MONITORING_NEW_DATA_TYPE_VERSION_DIFF = 78, DATA_MONITORING_NEW_ENDPOINT_VERSION_DIFF = 79, DATA_MONITORING_NEW_PERMISSION_VERSION_DIFF = 80, DATA_MONITORING_NEW_SDK_VERSION_DIFF = 81, DATA_MONITORING_SDKS_DENYLIST_VIOLATION = 82, DATA_MONITORING_PERMISSIONS_DENYLIST_VIOLATION = 83, DATA_MONITORING_ENDPOINTS_DENYLIST_VIOLATION = 84, DATA_MONITORING_OUTDATED_SDK_VERSION = 85, DATA_MONITORING_CRITICAL_SDK_ISSUE = 86 }


	/** Represents the data monitoring section of the report. */
	export interface GoogleChecksReportV1alphaDataMonitoring {

		/** Data types that your app shares or collects. */
		dataTypes?: Array<GoogleChecksReportV1alphaDataMonitoringDataTypeResult>;

		/** Endpoints that were found by dynamic analysis of your app. */
		endpoints?: Array<GoogleChecksReportV1alphaDataMonitoringEndpointResult>;

		/** Permissions that your app uses. */
		permissions?: Array<GoogleChecksReportV1alphaDataMonitoringPermissionResult>;

		/** SDKs that your app uses. */
		sdks?: Array<GoogleChecksReportV1alphaDataMonitoringSdkResult>;
	}

	/** Represents the data monitoring section of the report. */
	export interface GoogleChecksReportV1alphaDataMonitoringFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaDataMonitoringFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaDataMonitoringFormProperties>({
		});

	}


	/** Information about a data type that was found in your app. */
	export interface GoogleChecksReportV1alphaDataMonitoringDataTypeResult {

		/** The data type that was shared or collected by your app. */
		dataType?: GoogleChecksReportV1alphaCheckDataTypeEvidenceDataType | null;

		/** Evidence collected about a data type. */
		dataTypeEvidence?: GoogleChecksReportV1alphaDataTypeEvidence;

		/** Information about a data monitoring result. */
		metadata?: GoogleChecksReportV1alphaDataMonitoringResultMetadata;
	}

	/** Information about a data type that was found in your app. */
	export interface GoogleChecksReportV1alphaDataMonitoringDataTypeResultFormProperties {

		/** The data type that was shared or collected by your app. */
		dataType: FormControl<GoogleChecksReportV1alphaCheckDataTypeEvidenceDataType | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaDataMonitoringDataTypeResultFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaDataMonitoringDataTypeResultFormProperties>({
			dataType: new FormControl<GoogleChecksReportV1alphaCheckDataTypeEvidenceDataType | null | undefined>(undefined),
		});

	}


	/** Information about a data monitoring result. */
	export interface GoogleChecksReportV1alphaDataMonitoringResultMetadata {

		/** Badges that apply to this result. */
		badges?: Array<string>;

		/** The timestamp when this result was first detected within the last 8 weeks. If not set, it wasn't detected within the last 8 weeks. */
		firstDetectedTime?: string | null;

		/** Your app's version name when this result was last detected within the last 8 weeks. If not set, it wasn't detected within the last 8 weeks. */
		lastDetectedAppVersion?: string | null;

		/** The timestamp when this result was last detected within the last 8 weeks. If not set, it wasn't detected within the last 8 weeks. */
		lastDetectedTime?: string | null;
	}

	/** Information about a data monitoring result. */
	export interface GoogleChecksReportV1alphaDataMonitoringResultMetadataFormProperties {

		/** The timestamp when this result was first detected within the last 8 weeks. If not set, it wasn't detected within the last 8 weeks. */
		firstDetectedTime: FormControl<string | null | undefined>,

		/** Your app's version name when this result was last detected within the last 8 weeks. If not set, it wasn't detected within the last 8 weeks. */
		lastDetectedAppVersion: FormControl<string | null | undefined>,

		/** The timestamp when this result was last detected within the last 8 weeks. If not set, it wasn't detected within the last 8 weeks. */
		lastDetectedTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaDataMonitoringResultMetadataFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaDataMonitoringResultMetadataFormProperties>({
			firstDetectedTime: new FormControl<string | null | undefined>(undefined),
			lastDetectedAppVersion: new FormControl<string | null | undefined>(undefined),
			lastDetectedTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an endpoint that was contacted by your app. */
	export interface GoogleChecksReportV1alphaDataMonitoringEndpointResult {

		/** Information about an endpoint. */
		endpoint?: GoogleChecksReportV1alphaEndpoint;

		/** The number of times this endpoint was contacted by your app. */
		hitCount?: number | null;

		/** Information about a data monitoring result. */
		metadata?: GoogleChecksReportV1alphaDataMonitoringResultMetadata;
	}

	/** Information about an endpoint that was contacted by your app. */
	export interface GoogleChecksReportV1alphaDataMonitoringEndpointResultFormProperties {

		/** The number of times this endpoint was contacted by your app. */
		hitCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaDataMonitoringEndpointResultFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaDataMonitoringEndpointResultFormProperties>({
			hitCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a permission that was found in your app. */
	export interface GoogleChecksReportV1alphaDataMonitoringPermissionResult {

		/** Information about a data monitoring result. */
		metadata?: GoogleChecksReportV1alphaDataMonitoringResultMetadata;

		/** Information about a permission. */
		permission?: GoogleChecksReportV1alphaPermission;
	}

	/** Information about a permission that was found in your app. */
	export interface GoogleChecksReportV1alphaDataMonitoringPermissionResultFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaDataMonitoringPermissionResultFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaDataMonitoringPermissionResultFormProperties>({
		});

	}


	/** Information about an SDK that was found in your app. */
	export interface GoogleChecksReportV1alphaDataMonitoringSdkResult {

		/** Information about a data monitoring result. */
		metadata?: GoogleChecksReportV1alphaDataMonitoringResultMetadata;

		/** Information about an SDK. */
		sdk?: GoogleChecksReportV1alphaSdk;
	}

	/** Information about an SDK that was found in your app. */
	export interface GoogleChecksReportV1alphaDataMonitoringSdkResultFormProperties {
	}
	export function CreateGoogleChecksReportV1alphaDataMonitoringSdkResultFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaDataMonitoringSdkResultFormProperties>({
		});

	}


	/** The response message for ReportService.ListReports. */
	export interface GoogleChecksReportV1alphaListReportsResponse {

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The reports for the specified app. */
		reports?: Array<GoogleChecksReportV1alphaReport>;
	}

	/** The response message for ReportService.ListReports. */
	export interface GoogleChecksReportV1alphaListReportsResponseFormProperties {

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaListReportsResponseFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaListReportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Privacy report. */
	export interface GoogleChecksReportV1alphaReport {

		/** Information about the analyzed app bundle. */
		appBundle?: GoogleChecksReportV1alphaAppBundle;

		/** List of checks that were run on the app bundle. */
		checks?: Array<GoogleChecksReportV1alphaCheck>;

		/** Represents the data monitoring section of the report. */
		dataMonitoring?: GoogleChecksReportV1alphaDataMonitoring;

		/** Resource name of the report. */
		name?: string | null;

		/** A URL to view results. */
		resultsUri?: string | null;
	}

	/** Privacy report. */
	export interface GoogleChecksReportV1alphaReportFormProperties {

		/** Resource name of the report. */
		name: FormControl<string | null | undefined>,

		/** A URL to view results. */
		resultsUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleChecksReportV1alphaReportFormGroup() {
		return new FormGroup<GoogleChecksReportV1alphaReportFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			resultsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Operations.WaitOperation. */
	export interface WaitOperationRequest {

		/** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
		timeout?: string | null;
	}

	/** The request message for Operations.WaitOperation. */
	export interface WaitOperationRequestFormProperties {

		/** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateWaitOperationRequestFormGroup() {
		return new FormGroup<WaitOperationRequestFormProperties>({
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1alpha/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {Empty} Successful response
		 */
		Checks_accounts_apps_operations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets a report. By default, only the name and results_uri fields are returned. You can include other fields by listing them in the `fields` URL query parameter. For example, `?fields=name,checks` will return the name and checks fields.
		 * Get v1alpha/{name}
		 * @param {string} name Required. Resource name of the report. Example: `accounts/123/apps/456/reports/789`
		 * @param {string} checksFilter Optional. An [AIP-160](https://google.aip.dev/160) filter string to filter checks within the report. Only checks that match the filter string are included in the response. Example: `state = FAILED`
		 * @return {GoogleChecksReportV1alphaReport} Successful response
		 */
		Checks_accounts_apps_reports_get(name: string, checksFilter: string | null | undefined): Observable<GoogleChecksReportV1alphaReport> {
			return this.http.get<GoogleChecksReportV1alphaReport>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + '&checksFilter=' + (checksFilter == null ? '' : encodeURIComponent(checksFilter)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1alpha/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Checks_accounts_apps_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1alpha/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Checks_accounts_apps_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
		 * Post v1alpha/{name}:wait
		 * @param {string} name The name of the operation resource to wait on.
		 * @return {Operation} Successful response
		 */
		Checks_accounts_apps_operations_wait(name: string, requestBody: WaitOperationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':wait', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the apps under the given account.
		 * Get v1alpha/{parent}/apps
		 * @param {string} parent Required. The parent account. Example: `accounts/123`
		 * @param {number} pageSize Optional. The maximum number of results to return. The server may further constrain the maximum number of results returned in a single page. If unspecified, the server will decide the number of results to be returned.
		 * @param {string} pageToken Optional. A page token received from a previous `ListApps` call. Provide this to retrieve the subsequent page.
		 * @return {GoogleChecksAccountV1alphaListAppsResponse} Successful response
		 */
		Checks_accounts_apps_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleChecksAccountV1alphaListAppsResponse> {
			return this.http.get<GoogleChecksAccountV1alphaListAppsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists reports for the specified app. By default, only the name and results_uri fields are returned. You can include other fields by listing them in the `fields` URL query parameter. For example, `?fields=reports(name,checks)` will return the name and checks fields.
		 * Get v1alpha/{parent}/reports
		 * @param {string} parent Required. Resource name of the app. Example: `accounts/123/apps/456`
		 * @param {string} checksFilter Optional. An [AIP-160](https://google.aip.dev/160) filter string to filter checks within reports. Only checks that match the filter string are included in the response. Example: `state = FAILED`
		 * @param {string} filter Optional. An [AIP-160](https://google.aip.dev/160) filter string to filter reports. Example: `appBundle.releaseType = PRE_RELEASE`
		 * @param {number} pageSize Optional. The maximum number of reports to return. If unspecified, at most 10 reports will be returned. The maximum value is 50; values above 50 will be coerced to 50.
		 * @param {string} pageToken Optional. A page token received from a previous `ListReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReports` must match the call that provided the page token.
		 * @return {GoogleChecksReportV1alphaListReportsResponse} Successful response
		 */
		Checks_accounts_apps_reports_list(parent: string, checksFilter: string | null | undefined, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleChecksReportV1alphaListReportsResponse> {
			return this.http.get<GoogleChecksReportV1alphaListReportsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reports&checksFilter=' + (checksFilter == null ? '' : encodeURIComponent(checksFilter)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

