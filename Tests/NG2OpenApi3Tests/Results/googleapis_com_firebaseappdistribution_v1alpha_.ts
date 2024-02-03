import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A release of a Firebase app. */
	export interface GoogleFirebaseAppdistroV1Release {

		/** Output only. A signed link (which expires in one hour) to directly download the app binary (IPA/APK/AAB) file. */
		binaryDownloadUri?: string | null;

		/** Output only. Build version of the release. For an Android release, the build version is the `versionCode`. For an iOS release, the build version is the `CFBundleVersion`. */
		buildVersion?: string | null;

		/** Output only. The time the release was created. */
		createTime?: string | null;

		/** Output only. Display version of the release. For an Android release, the display version is the `versionName`. For an iOS release, the display version is the `CFBundleShortVersionString`. */
		displayVersion?: string | null;

		/** Output only. A link to the Firebase console displaying a single release. */
		firebaseConsoleUri?: string | null;

		/** The name of the release resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}` */
		name?: string | null;

		/** Notes that belong to a release. */
		releaseNotes?: GoogleFirebaseAppdistroV1ReleaseNotes;

		/** Output only. A link to the release in the tester web clip or Android app that lets testers (which were granted access to the app) view release notes and install the app onto their devices. */
		testingUri?: string | null;
	}

	/** A release of a Firebase app. */
	export interface GoogleFirebaseAppdistroV1ReleaseFormProperties {

		/** Output only. A signed link (which expires in one hour) to directly download the app binary (IPA/APK/AAB) file. */
		binaryDownloadUri: FormControl<string | null | undefined>,

		/** Output only. Build version of the release. For an Android release, the build version is the `versionCode`. For an iOS release, the build version is the `CFBundleVersion`. */
		buildVersion: FormControl<string | null | undefined>,

		/** Output only. The time the release was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Display version of the release. For an Android release, the display version is the `versionName`. For an iOS release, the display version is the `CFBundleShortVersionString`. */
		displayVersion: FormControl<string | null | undefined>,

		/** Output only. A link to the Firebase console displaying a single release. */
		firebaseConsoleUri: FormControl<string | null | undefined>,

		/** The name of the release resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}` */
		name: FormControl<string | null | undefined>,

		/** Output only. A link to the release in the tester web clip or Android app that lets testers (which were granted access to the app) view release notes and install the app onto their devices. */
		testingUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1ReleaseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1ReleaseFormProperties>({
			binaryDownloadUri: new FormControl<string | null | undefined>(undefined),
			buildVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			displayVersion: new FormControl<string | null | undefined>(undefined),
			firebaseConsoleUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			testingUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Notes that belong to a release. */
	export interface GoogleFirebaseAppdistroV1ReleaseNotes {

		/** The text of the release notes. */
		text?: string | null;
	}

	/** Notes that belong to a release. */
	export interface GoogleFirebaseAppdistroV1ReleaseNotesFormProperties {

		/** The text of the release notes. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1ReleaseNotesFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1ReleaseNotesFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation metadata for `UploadRelease`. */
	export interface GoogleFirebaseAppdistroV1UploadReleaseMetadata {
	}

	/** Operation metadata for `UploadRelease`. */
	export interface GoogleFirebaseAppdistroV1UploadReleaseMetadataFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1UploadReleaseMetadataFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1UploadReleaseMetadataFormProperties>({
		});

	}


	/** Response message for `UploadRelease`. */
	export interface GoogleFirebaseAppdistroV1UploadReleaseResponse {

		/** A release of a Firebase app. */
		release?: GoogleFirebaseAppdistroV1Release;

		/** Result of upload release. */
		result?: GoogleFirebaseAppdistroV1UploadReleaseResponseResult | null;
	}

	/** Response message for `UploadRelease`. */
	export interface GoogleFirebaseAppdistroV1UploadReleaseResponseFormProperties {

		/** Result of upload release. */
		result: FormControl<GoogleFirebaseAppdistroV1UploadReleaseResponseResult | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1UploadReleaseResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1UploadReleaseResponseFormProperties>({
			result: new FormControl<GoogleFirebaseAppdistroV1UploadReleaseResponseResult | null | undefined>(undefined),
		});

	}

	export enum GoogleFirebaseAppdistroV1UploadReleaseResponseResult { UPLOAD_RELEASE_RESULT_UNSPECIFIED = 'UPLOAD_RELEASE_RESULT_UNSPECIFIED', RELEASE_CREATED = 'RELEASE_CREATED', RELEASE_UPDATED = 'RELEASE_UPDATED', RELEASE_UNMODIFIED = 'RELEASE_UNMODIFIED' }


	/** App bundle test certificate */
	export interface GoogleFirebaseAppdistroV1alphaAabCertificate {

		/** MD5 hash of the certificate used to resign the AAB */
		certificateHashMd5?: string | null;

		/** SHA1 hash of the certificate used to resign the AAB */
		certificateHashSha1?: string | null;

		/** SHA256 hash of the certificate used to resign the AAB */
		certificateHashSha256?: string | null;
	}

	/** App bundle test certificate */
	export interface GoogleFirebaseAppdistroV1alphaAabCertificateFormProperties {

		/** MD5 hash of the certificate used to resign the AAB */
		certificateHashMd5: FormControl<string | null | undefined>,

		/** SHA1 hash of the certificate used to resign the AAB */
		certificateHashSha1: FormControl<string | null | undefined>,

		/** SHA256 hash of the certificate used to resign the AAB */
		certificateHashSha256: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaAabCertificateFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaAabCertificateFormProperties>({
			certificateHashMd5: new FormControl<string | null | undefined>(undefined),
			certificateHashSha1: new FormControl<string | null | undefined>(undefined),
			certificateHashSha256: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleFirebaseAppdistroV1alphaApp {

		/** App bundle test certificate */
		aabCertificate?: GoogleFirebaseAppdistroV1alphaAabCertificate;

		/** App bundle state. Only valid for android apps. The app_view field in the request must be set to FULL in order for this to be populated. */
		aabState?: GoogleFirebaseAppdistroV1alphaAppAabState | null;

		/** Firebase gmp app id */
		appId?: string | null;

		/** Bundle identifier */
		bundleId?: string | null;

		/** Developer contact email for testers to reach out to about privacy or support issues. */
		contactEmail?: string | null;

		/** iOS or Android */
		platform?: string | null;

		/** Project number of the Firebase project, for example 300830567303. */
		projectNumber?: string | null;
	}
	export interface GoogleFirebaseAppdistroV1alphaAppFormProperties {

		/** App bundle state. Only valid for android apps. The app_view field in the request must be set to FULL in order for this to be populated. */
		aabState: FormControl<GoogleFirebaseAppdistroV1alphaAppAabState | null | undefined>,

		/** Firebase gmp app id */
		appId: FormControl<string | null | undefined>,

		/** Bundle identifier */
		bundleId: FormControl<string | null | undefined>,

		/** Developer contact email for testers to reach out to about privacy or support issues. */
		contactEmail: FormControl<string | null | undefined>,

		/** iOS or Android */
		platform: FormControl<string | null | undefined>,

		/** Project number of the Firebase project, for example 300830567303. */
		projectNumber: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaAppFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaAppFormProperties>({
			aabState: new FormControl<GoogleFirebaseAppdistroV1alphaAppAabState | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			bundleId: new FormControl<string | null | undefined>(undefined),
			contactEmail: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
			projectNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleFirebaseAppdistroV1alphaAppAabState { AAB_STATE_UNSPECIFIED = 'AAB_STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', PLAY_ACCOUNT_NOT_LINKED = 'PLAY_ACCOUNT_NOT_LINKED', NO_APP_WITH_GIVEN_BUNDLE_ID_IN_PLAY_ACCOUNT = 'NO_APP_WITH_GIVEN_BUNDLE_ID_IN_PLAY_ACCOUNT', APP_NOT_PUBLISHED = 'APP_NOT_PUBLISHED', AAB_STATE_UNAVAILABLE = 'AAB_STATE_UNAVAILABLE', PLAY_IAS_TERMS_NOT_ACCEPTED = 'PLAY_IAS_TERMS_NOT_ACCEPTED' }


	/** An app crash that occurred during an automated test. */
	export interface GoogleFirebaseAppdistroV1alphaAppCrash {

		/** Output only. The message associated with the crash. */
		message?: string | null;

		/** Output only. The raw stack trace. */
		stackTrace?: string | null;
	}

	/** An app crash that occurred during an automated test. */
	export interface GoogleFirebaseAppdistroV1alphaAppCrashFormProperties {

		/** Output only. The message associated with the crash. */
		message: FormControl<string | null | undefined>,

		/** Output only. The raw stack trace. */
		stackTrace: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaAppCrashFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaAppCrashFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			stackTrace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleFirebaseAppdistroV1alphaCreateReleaseNotesRequest {
		releaseNotes?: GoogleFirebaseAppdistroV1alphaReleaseNotes;
	}
	export interface GoogleFirebaseAppdistroV1alphaCreateReleaseNotesRequestFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1alphaCreateReleaseNotesRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaCreateReleaseNotesRequestFormProperties>({
		});

	}

	export interface GoogleFirebaseAppdistroV1alphaReleaseNotes {
		releaseNotes?: string | null;
	}
	export interface GoogleFirebaseAppdistroV1alphaReleaseNotesFormProperties {
		releaseNotes: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaReleaseNotesFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaReleaseNotesFormProperties>({
			releaseNotes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse {
	}
	export interface GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponseFormProperties>({
		});

	}


	/** The results of running an automated test on a particular device. */
	export interface GoogleFirebaseAppdistroV1alphaDeviceExecution {

		/** An app crash that occurred during an automated test. */
		appCrash?: GoogleFirebaseAppdistroV1alphaAppCrash;

		/** Output only. A URI to an image of the Robo crawl graph. */
		crawlGraphUri?: string | null;

		/** A device on which automated tests can be run. */
		device?: GoogleFirebaseAppdistroV1alphaTestDevice;

		/** Output only. The reason why the test failed. */
		failedReason?: GoogleFirebaseAppdistroV1alphaDeviceExecutionFailedReason | null;

		/** Output only. The reason why the test was inconclusive. */
		inconclusiveReason?: GoogleFirebaseAppdistroV1alphaDeviceExecutionInconclusiveReason | null;

		/** Output only. The path to a directory in Cloud Storage that will eventually contain the results for this execution. For example, gs://bucket/Nexus5-18-en-portrait. */
		resultsStoragePath?: string | null;

		/** Statistics collected during a Robo test. */
		roboStats?: GoogleFirebaseAppdistroV1alphaRoboStats;

		/** Output only. A list of screenshot image URIs taken from the Robo crawl. The file names are numbered by the order in which they were taken. */
		screenshotUris?: Array<string>;

		/** Output only. The state of the test. */
		state?: GoogleFirebaseAppdistroV1alphaDeviceExecutionState | null;

		/** Output only. A URI to a video of the test run. */
		videoUri?: string | null;
	}

	/** The results of running an automated test on a particular device. */
	export interface GoogleFirebaseAppdistroV1alphaDeviceExecutionFormProperties {

		/** Output only. A URI to an image of the Robo crawl graph. */
		crawlGraphUri: FormControl<string | null | undefined>,

		/** Output only. The reason why the test failed. */
		failedReason: FormControl<GoogleFirebaseAppdistroV1alphaDeviceExecutionFailedReason | null | undefined>,

		/** Output only. The reason why the test was inconclusive. */
		inconclusiveReason: FormControl<GoogleFirebaseAppdistroV1alphaDeviceExecutionInconclusiveReason | null | undefined>,

		/** Output only. The path to a directory in Cloud Storage that will eventually contain the results for this execution. For example, gs://bucket/Nexus5-18-en-portrait. */
		resultsStoragePath: FormControl<string | null | undefined>,

		/** Output only. The state of the test. */
		state: FormControl<GoogleFirebaseAppdistroV1alphaDeviceExecutionState | null | undefined>,

		/** Output only. A URI to a video of the test run. */
		videoUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaDeviceExecutionFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaDeviceExecutionFormProperties>({
			crawlGraphUri: new FormControl<string | null | undefined>(undefined),
			failedReason: new FormControl<GoogleFirebaseAppdistroV1alphaDeviceExecutionFailedReason | null | undefined>(undefined),
			inconclusiveReason: new FormControl<GoogleFirebaseAppdistroV1alphaDeviceExecutionInconclusiveReason | null | undefined>(undefined),
			resultsStoragePath: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleFirebaseAppdistroV1alphaDeviceExecutionState | null | undefined>(undefined),
			videoUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A device on which automated tests can be run. */
	export interface GoogleFirebaseAppdistroV1alphaTestDevice {

		/** Optional. The locale of the device (e.g. "en_US" for US English) during the test. */
		locale?: string | null;

		/** Required. The device model. */
		model?: string | null;

		/** Optional. The orientation of the device during the test. */
		orientation?: string | null;

		/** Required. The version of the device (API level on Android). */
		version?: string | null;
	}

	/** A device on which automated tests can be run. */
	export interface GoogleFirebaseAppdistroV1alphaTestDeviceFormProperties {

		/** Optional. The locale of the device (e.g. "en_US" for US English) during the test. */
		locale: FormControl<string | null | undefined>,

		/** Required. The device model. */
		model: FormControl<string | null | undefined>,

		/** Optional. The orientation of the device during the test. */
		orientation: FormControl<string | null | undefined>,

		/** Required. The version of the device (API level on Android). */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaTestDeviceFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaTestDeviceFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			orientation: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleFirebaseAppdistroV1alphaDeviceExecutionFailedReason { FAILED_REASON_UNSPECIFIED = 'FAILED_REASON_UNSPECIFIED', CRASHED = 'CRASHED', NOT_INSTALLED = 'NOT_INSTALLED', UNABLE_TO_CRAWL = 'UNABLE_TO_CRAWL', DEVICE_OUT_OF_MEMORY = 'DEVICE_OUT_OF_MEMORY' }

	export enum GoogleFirebaseAppdistroV1alphaDeviceExecutionInconclusiveReason { INCONCLUSIVE_REASON_UNSPECIFIED = 'INCONCLUSIVE_REASON_UNSPECIFIED', QUOTA_EXCEEDED = 'QUOTA_EXCEEDED', INFRASTRUCTURE_FAILURE = 'INFRASTRUCTURE_FAILURE', SERVICE_NOT_ACTIVATED = 'SERVICE_NOT_ACTIVATED', NO_SIGNATURE = 'NO_SIGNATURE', NO_LAUNCHER_ACTIVITY = 'NO_LAUNCHER_ACTIVITY', FORBIDDEN_PERMISSIONS = 'FORBIDDEN_PERMISSIONS', DEVICE_ADMIN_RECEIVER = 'DEVICE_ADMIN_RECEIVER', NO_CODE_APK = 'NO_CODE_APK', INVALID_APK_PREVIEW_SDK = 'INVALID_APK_PREVIEW_SDK' }


	/** Statistics collected during a Robo test. */
	export interface GoogleFirebaseAppdistroV1alphaRoboStats {

		/** Output only. Number of actions that crawler performed. */
		actionsPerformed?: number | null;

		/** Output only. Duration of crawl. */
		crawlDuration?: string | null;

		/** Output only. Number of distinct screens visited. */
		distinctVisitedScreens?: number | null;

		/** Output only. Whether the main activity crawl timed out. */
		mainActivityCrawlTimedOut?: boolean | null;
	}

	/** Statistics collected during a Robo test. */
	export interface GoogleFirebaseAppdistroV1alphaRoboStatsFormProperties {

		/** Output only. Number of actions that crawler performed. */
		actionsPerformed: FormControl<number | null | undefined>,

		/** Output only. Duration of crawl. */
		crawlDuration: FormControl<string | null | undefined>,

		/** Output only. Number of distinct screens visited. */
		distinctVisitedScreens: FormControl<number | null | undefined>,

		/** Output only. Whether the main activity crawl timed out. */
		mainActivityCrawlTimedOut: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaRoboStatsFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaRoboStatsFormProperties>({
			actionsPerformed: new FormControl<number | null | undefined>(undefined),
			crawlDuration: new FormControl<string | null | undefined>(undefined),
			distinctVisitedScreens: new FormControl<number | null | undefined>(undefined),
			mainActivityCrawlTimedOut: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleFirebaseAppdistroV1alphaDeviceExecutionState { TEST_STATE_UNSPECIFIED = 'TEST_STATE_UNSPECIFIED', IN_PROGRESS = 'IN_PROGRESS', PASSED = 'PASSED', FAILED = 'FAILED', INCONCLUSIVE = 'INCONCLUSIVE' }

	export interface GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest {

		/** Optional. Ignored. Used to be build version of the app release if an instance identifier was provided for the release_id. */
		buildVersion?: string | null;

		/** Optional. Ignored. Used to be display version of the app release if an instance identifier was provided for the release_id. */
		displayVersion?: string | null;

		/** Optional. An email address which should get access to this release, for example rebeccahe@google.com */
		emails?: Array<string>;

		/** Optional. A repeated list of group aliases to enable access to a release for Note: This field is misnamed, but can't be changed because we need to maintain compatibility with old build tools */
		groupIds?: Array<string>;
	}
	export interface GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequestFormProperties {

		/** Optional. Ignored. Used to be build version of the app release if an instance identifier was provided for the release_id. */
		buildVersion: FormControl<string | null | undefined>,

		/** Optional. Ignored. Used to be display version of the app release if an instance identifier was provided for the release_id. */
		displayVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequestFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequestFormProperties>({
			buildVersion: new FormControl<string | null | undefined>(undefined),
			displayVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse {
	}
	export interface GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponseFormProperties>({
		});

	}


	/** Response object to get the release given a upload hash */
	export interface GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse {

		/** Proto defining a release object */
		release?: GoogleFirebaseAppdistroV1alphaRelease;
	}

	/** Response object to get the release given a upload hash */
	export interface GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponseFormProperties>({
		});

	}


	/** Proto defining a release object */
	export interface GoogleFirebaseAppdistroV1alphaRelease {

		/** Release build version */
		buildVersion?: string | null;

		/** Release version */
		displayVersion?: string | null;

		/** Timestamp when the release was created */
		distributedAt?: string | null;

		/** Release Id */
		id?: string | null;

		/** Instance id of the release */
		instanceId?: string | null;

		/** Last activity timestamp */
		lastActivityAt?: string | null;

		/** Number of testers who have open invitations for the release */
		openInvitationCount?: number | null;

		/** unused. */
		receivedAt?: string | null;

		/** Release notes summary */
		releaseNotesSummary?: string | null;

		/** Count of testers added to the release */
		testerCount?: number | null;

		/** Number of testers who have installed the release */
		testerWithInstallCount?: number | null;
	}

	/** Proto defining a release object */
	export interface GoogleFirebaseAppdistroV1alphaReleaseFormProperties {

		/** Release build version */
		buildVersion: FormControl<string | null | undefined>,

		/** Release version */
		displayVersion: FormControl<string | null | undefined>,

		/** Timestamp when the release was created */
		distributedAt: FormControl<string | null | undefined>,

		/** Release Id */
		id: FormControl<string | null | undefined>,

		/** Instance id of the release */
		instanceId: FormControl<string | null | undefined>,

		/** Last activity timestamp */
		lastActivityAt: FormControl<string | null | undefined>,

		/** Number of testers who have open invitations for the release */
		openInvitationCount: FormControl<number | null | undefined>,

		/** unused. */
		receivedAt: FormControl<string | null | undefined>,

		/** Release notes summary */
		releaseNotesSummary: FormControl<string | null | undefined>,

		/** Count of testers added to the release */
		testerCount: FormControl<number | null | undefined>,

		/** Number of testers who have installed the release */
		testerWithInstallCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaReleaseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaReleaseFormProperties>({
			buildVersion: new FormControl<string | null | undefined>(undefined),
			displayVersion: new FormControl<string | null | undefined>(undefined),
			distributedAt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			instanceId: new FormControl<string | null | undefined>(undefined),
			lastActivityAt: new FormControl<string | null | undefined>(undefined),
			openInvitationCount: new FormControl<number | null | undefined>(undefined),
			receivedAt: new FormControl<string | null | undefined>(undefined),
			releaseNotesSummary: new FormControl<string | null | undefined>(undefined),
			testerCount: new FormControl<number | null | undefined>(undefined),
			testerWithInstallCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response containing the UDIDs of tester iOS devices in a project */
	export interface GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse {

		/** The UDIDs of tester iOS devices in a project */
		testerUdids?: Array<GoogleFirebaseAppdistroV1alphaTesterUdid>;
	}

	/** Response containing the UDIDs of tester iOS devices in a project */
	export interface GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1alphaGetTesterUdidsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponseFormProperties>({
		});

	}


	/** The UDIDs of a tester's iOS device */
	export interface GoogleFirebaseAppdistroV1alphaTesterUdid {

		/** The name of the tester's device */
		name?: string | null;

		/** The platform of the tester's device */
		platform?: string | null;

		/** The UDID of the tester's device */
		udid?: string | null;
	}

	/** The UDIDs of a tester's iOS device */
	export interface GoogleFirebaseAppdistroV1alphaTesterUdidFormProperties {

		/** The name of the tester's device */
		name: FormControl<string | null | undefined>,

		/** The platform of the tester's device */
		platform: FormControl<string | null | undefined>,

		/** The UDID of the tester's device */
		udid: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaTesterUdidFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaTesterUdidFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
			udid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse {

		/** The error code associated with (only set on "FAILURE") */
		errorCode?: GoogleFirebaseAppdistroV1alphaGetUploadStatusResponseErrorCode | null;

		/** Any additional context for the given upload status (e.g. error message) Meant to be displayed to the client */
		message?: string | null;

		/** Proto defining a release object */
		release?: GoogleFirebaseAppdistroV1alphaRelease;

		/** The status of the upload */
		status?: GoogleFirebaseAppdistroV1alphaGetUploadStatusResponseStatus | null;
	}
	export interface GoogleFirebaseAppdistroV1alphaGetUploadStatusResponseFormProperties {

		/** The error code associated with (only set on "FAILURE") */
		errorCode: FormControl<GoogleFirebaseAppdistroV1alphaGetUploadStatusResponseErrorCode | null | undefined>,

		/** Any additional context for the given upload status (e.g. error message) Meant to be displayed to the client */
		message: FormControl<string | null | undefined>,

		/** The status of the upload */
		status: FormControl<GoogleFirebaseAppdistroV1alphaGetUploadStatusResponseStatus | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaGetUploadStatusResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaGetUploadStatusResponseFormProperties>({
			errorCode: new FormControl<GoogleFirebaseAppdistroV1alphaGetUploadStatusResponseErrorCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleFirebaseAppdistroV1alphaGetUploadStatusResponseStatus | null | undefined>(undefined),
		});

	}

	export enum GoogleFirebaseAppdistroV1alphaGetUploadStatusResponseErrorCode { ERROR_UNSPECIFIED = 'ERROR_UNSPECIFIED', INVALID_ZIP = 'INVALID_ZIP', MISSING_PLIST = 'MISSING_PLIST', MISSING_PROFILE = 'MISSING_PROFILE', VERSION_TOO_LONG = 'VERSION_TOO_LONG', MISSING_UUIDS = 'MISSING_UUIDS', MISSING_RESOURCES = 'MISSING_RESOURCES', MISSING_MANIFEST = 'MISSING_MANIFEST', IOS_METADATA_ERROR = 'IOS_METADATA_ERROR', ANDROID_METADATA_ERROR = 'ANDROID_METADATA_ERROR', UNSUPPORTED_PLATFORM_TYPE = 'UNSUPPORTED_PLATFORM_TYPE', BUNDLE_ID_MISMATCH = 'BUNDLE_ID_MISMATCH', APK_NOT_ZIP_ALIGNED = 'APK_NOT_ZIP_ALIGNED', INVALID_CERTIFICATE = 'INVALID_CERTIFICATE', APK_TOO_LARGE = 'APK_TOO_LARGE', AAB_NOT_PUBLISHED = 'AAB_NOT_PUBLISHED', INVALID_PLIST_DEVICE_FAMILIES = 'INVALID_PLIST_DEVICE_FAMILIES', AAB_TOS_NOT_ACCEPTED = 'AAB_TOS_NOT_ACCEPTED', APP_NAME_TOO_LONG = 'APP_NAME_TOO_LONG', AAB_DEVELOPER_ACCOUNT_NOT_LINKED = 'AAB_DEVELOPER_ACCOUNT_NOT_LINKED', AAB_NO_APP_WITH_GIVEN_PACKAGE_NAME_IN_ACCOUNT = 'AAB_NO_APP_WITH_GIVEN_PACKAGE_NAME_IN_ACCOUNT', AAB_UPLOAD_ERROR = 'AAB_UPLOAD_ERROR' }

	export enum GoogleFirebaseAppdistroV1alphaGetUploadStatusResponseStatus { STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED', IN_PROGRESS = 'IN_PROGRESS', ALREADY_UPLOADED = 'ALREADY_UPLOADED', SUCCESS = 'SUCCESS', ERROR = 'ERROR' }

	export interface GoogleFirebaseAppdistroV1alphaJwt {
		token?: string | null;
	}
	export interface GoogleFirebaseAppdistroV1alphaJwtFormProperties {
		token: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaJwtFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaJwtFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for `ListReleaseTests`. */
	export interface GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse {

		/** A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The tests listed. */
		releaseTests?: Array<GoogleFirebaseAppdistroV1alphaReleaseTest>;
	}

	/** The response message for `ListReleaseTests`. */
	export interface GoogleFirebaseAppdistroV1alphaListReleaseTestsResponseFormProperties {

		/** A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaListReleaseTestsResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaListReleaseTestsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The results of running an automated test on a release. */
	export interface GoogleFirebaseAppdistroV1alphaReleaseTest {

		/** Output only. Timestamp when the test was run. */
		createTime?: string | null;

		/** Required. The results of the test on each device. */
		deviceExecutions?: Array<GoogleFirebaseAppdistroV1alphaDeviceExecution>;

		/** Login credential for automated tests */
		loginCredential?: GoogleFirebaseAppdistroV1alphaLoginCredential;

		/** The name of the release test resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}/tests/{test_id}` */
		name?: string | null;
	}

	/** The results of running an automated test on a release. */
	export interface GoogleFirebaseAppdistroV1alphaReleaseTestFormProperties {

		/** Output only. Timestamp when the test was run. */
		createTime: FormControl<string | null | undefined>,

		/** The name of the release test resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}/tests/{test_id}` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaReleaseTestFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaReleaseTestFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Login credential for automated tests */
	export interface GoogleFirebaseAppdistroV1alphaLoginCredential {

		/** Hints to the crawler for identifying input fields */
		fieldHints?: GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints;

		/** Optional. Are these credentials for Google? */
		google?: boolean | null;

		/** Optional. Password for automated tests */
		password?: string | null;

		/** Optional. Username for automated tests */
		username?: string | null;
	}

	/** Login credential for automated tests */
	export interface GoogleFirebaseAppdistroV1alphaLoginCredentialFormProperties {

		/** Optional. Are these credentials for Google? */
		google: FormControl<boolean | null | undefined>,

		/** Optional. Password for automated tests */
		password: FormControl<string | null | undefined>,

		/** Optional. Username for automated tests */
		username: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaLoginCredentialFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaLoginCredentialFormProperties>({
			google: new FormControl<boolean | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Hints to the crawler for identifying input fields */
	export interface GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHints {

		/** Required. The Android resource name of the password UI element. For example, in Java: R.string.foo in xml: @string/foo Only the "foo" part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html */
		passwordResourceName?: string | null;

		/** Required. The Android resource name of the username UI element. For example, in Java: R.string.foo in xml: @string/foo Only the "foo" part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html */
		usernameResourceName?: string | null;
	}

	/** Hints to the crawler for identifying input fields */
	export interface GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHintsFormProperties {

		/** Required. The Android resource name of the password UI element. For example, in Java: R.string.foo in xml: @string/foo Only the "foo" part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html */
		passwordResourceName: FormControl<string | null | undefined>,

		/** Required. The Android resource name of the username UI element. For example, in Java: R.string.foo in xml: @string/foo Only the "foo" part is needed. Reference doc: https://developer.android.com/guide/topics/resources/accessing-resources.html */
		usernameResourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaLoginCredentialFieldHintsFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaLoginCredentialFieldHintsFormProperties>({
			passwordResourceName: new FormControl<string | null | undefined>(undefined),
			usernameResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleFirebaseAppdistroV1alphaProvisionAppResponse {
	}
	export interface GoogleFirebaseAppdistroV1alphaProvisionAppResponseFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1alphaProvisionAppResponseFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaProvisionAppResponseFormProperties>({
		});

	}


	/** Configuration for Robo crawler */
	export interface GoogleFirebaseAppdistroV1alphaRoboCrawler {

		/** Login credential for automated tests */
		loginCredential?: GoogleFirebaseAppdistroV1alphaLoginCredential;
	}

	/** Configuration for Robo crawler */
	export interface GoogleFirebaseAppdistroV1alphaRoboCrawlerFormProperties {
	}
	export function CreateGoogleFirebaseAppdistroV1alphaRoboCrawlerFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaRoboCrawlerFormProperties>({
		});

	}


	/** Configuration for automated tests */
	export interface GoogleFirebaseAppdistroV1alphaTestConfig {

		/** Identifier. The name of the test configuration resource. Format: `projects/{project_number}/apps/{app_id}/testConfig` */
		name?: string | null;

		/** Configuration for Robo crawler */
		roboCrawler?: GoogleFirebaseAppdistroV1alphaRoboCrawler;

		/** Optional. Tests will be run on this list of devices */
		testDevices?: Array<GoogleFirebaseAppdistroV1alphaTestDevice>;
	}

	/** Configuration for automated tests */
	export interface GoogleFirebaseAppdistroV1alphaTestConfigFormProperties {

		/** Identifier. The name of the test configuration resource. Format: `projects/{project_number}/apps/{app_id}/testConfig` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseAppdistroV1alphaTestConfigFormGroup() {
		return new FormGroup<GoogleFirebaseAppdistroV1alphaTestConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the app, if it exists
		 * Get v1alpha/apps/{mobilesdkAppId}
		 * @param {string} mobilesdkAppId Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
		 * @param {Firebaseappdistribution_apps_getAppView} appView App view. When unset or set to BASIC, returns an App with everything set except for aab_state. When set to FULL, returns an App with aab_state set.
		 * @return {GoogleFirebaseAppdistroV1alphaApp} Successful response
		 */
		Firebaseappdistribution_apps_get(mobilesdkAppId: string, appView: Firebaseappdistribution_apps_getAppView | null | undefined): Observable<GoogleFirebaseAppdistroV1alphaApp> {
			return this.http.get<GoogleFirebaseAppdistroV1alphaApp>(this.baseUri + 'v1alpha/apps/' + (mobilesdkAppId == null ? '' : encodeURIComponent(mobilesdkAppId)) + '&appView=' + appView, {});
		}

		/**
		 * Provision app distribution for an existing Firebase app, enabling it to subsequently be used by appdistro.
		 * Post v1alpha/apps/{mobilesdkAppId}
		 * @param {string} mobilesdkAppId Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
		 * @return {GoogleFirebaseAppdistroV1alphaProvisionAppResponse} Successful response
		 */
		Firebaseappdistribution_apps_provisionApp(mobilesdkAppId: string): Observable<GoogleFirebaseAppdistroV1alphaProvisionAppResponse> {
			return this.http.post<GoogleFirebaseAppdistroV1alphaProvisionAppResponse>(this.baseUri + 'v1alpha/apps/' + (mobilesdkAppId == null ? '' : encodeURIComponent(mobilesdkAppId)), null, {});
		}

		/**
		 * Get a JWT token
		 * Get v1alpha/apps/{mobilesdkAppId}/jwt
		 * @param {string} mobilesdkAppId Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
		 * @return {GoogleFirebaseAppdistroV1alphaJwt} Successful response
		 */
		Firebaseappdistribution_apps_getJwt(mobilesdkAppId: string): Observable<GoogleFirebaseAppdistroV1alphaJwt> {
			return this.http.get<GoogleFirebaseAppdistroV1alphaJwt>(this.baseUri + 'v1alpha/apps/' + (mobilesdkAppId == null ? '' : encodeURIComponent(mobilesdkAppId)) + '/jwt', {});
		}

		/**
		 * GET Release by binary upload hash
		 * Get v1alpha/apps/{mobilesdkAppId}/release_by_hash/{uploadHash}
		 * @param {string} mobilesdkAppId Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
		 * @param {string} uploadHash The hash for the upload
		 * @return {GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse} Successful response
		 */
		Firebaseappdistribution_apps_release_by_hash_get(mobilesdkAppId: string, uploadHash: string): Observable<GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse> {
			return this.http.get<GoogleFirebaseAppdistroV1alphaGetReleaseByUploadHashResponse>(this.baseUri + 'v1alpha/apps/' + (mobilesdkAppId == null ? '' : encodeURIComponent(mobilesdkAppId)) + '/release_by_hash/' + (uploadHash == null ? '' : encodeURIComponent(uploadHash)), {});
		}

		/**
		 * Enable access on a release for testers.
		 * Post v1alpha/apps/{mobilesdkAppId}/releases/{releaseId}/enable_access
		 * @param {string} mobilesdkAppId Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
		 * @param {string} releaseId Release identifier
		 * @return {GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse} Successful response
		 */
		Firebaseappdistribution_apps_releases_enable_access(mobilesdkAppId: string, releaseId: string, requestBody: GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseRequest): Observable<GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse> {
			return this.http.post<GoogleFirebaseAppdistroV1alphaEnableAccessOnReleaseResponse>(this.baseUri + 'v1alpha/apps/' + (mobilesdkAppId == null ? '' : encodeURIComponent(mobilesdkAppId)) + '/releases/' + (releaseId == null ? '' : encodeURIComponent(releaseId)) + '/enable_access', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create release notes on a release.
		 * Post v1alpha/apps/{mobilesdkAppId}/releases/{releaseId}/notes
		 * @param {string} mobilesdkAppId Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
		 * @param {string} releaseId Release identifier
		 * @return {GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse} Successful response
		 */
		Firebaseappdistribution_apps_releases_notes_create(mobilesdkAppId: string, releaseId: string, requestBody: GoogleFirebaseAppdistroV1alphaCreateReleaseNotesRequest): Observable<GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse> {
			return this.http.post<GoogleFirebaseAppdistroV1alphaCreateReleaseNotesResponse>(this.baseUri + 'v1alpha/apps/' + (mobilesdkAppId == null ? '' : encodeURIComponent(mobilesdkAppId)) + '/releases/' + (releaseId == null ? '' : encodeURIComponent(releaseId)) + '/notes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get UDIDs of tester iOS devices in a project
		 * Get v1alpha/apps/{mobilesdkAppId}/testers:getTesterUdids
		 * @param {string} mobilesdkAppId Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
		 * @param {string} project The name of the project, which is the parent of testers Format: `projects/{project_number}`
		 * @return {GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse} Successful response
		 */
		Firebaseappdistribution_apps_testers_getTesterUdids(mobilesdkAppId: string, project: string | null | undefined): Observable<GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse> {
			return this.http.get<GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>(this.baseUri + 'v1alpha/apps/' + (mobilesdkAppId == null ? '' : encodeURIComponent(mobilesdkAppId)) + '/testers:getTesterUdids&project=' + (project == null ? '' : encodeURIComponent(project)), {});
		}

		/**
		 * GET Binary upload status by token
		 * Get v1alpha/apps/{mobilesdkAppId}/upload_status/{uploadToken}
		 * @param {string} mobilesdkAppId Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
		 * @param {string} uploadToken The token for the upload
		 * @return {GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse} Successful response
		 */
		Firebaseappdistribution_apps_upload_status_get(mobilesdkAppId: string, uploadToken: string): Observable<GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse> {
			return this.http.get<GoogleFirebaseAppdistroV1alphaGetUploadStatusResponse>(this.baseUri + 'v1alpha/apps/' + (mobilesdkAppId == null ? '' : encodeURIComponent(mobilesdkAppId)) + '/upload_status/' + (uploadToken == null ? '' : encodeURIComponent(uploadToken)), {});
		}

		/**
		 * Get results for automated test run on release.
		 * Get v1alpha/{name}
		 * @param {string} name Required. The name of the release test resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}/tests/{test_id}`
		 * @return {GoogleFirebaseAppdistroV1alphaReleaseTest} Successful response
		 */
		Firebaseappdistribution_projects_apps_releases_tests_get(name: string): Observable<GoogleFirebaseAppdistroV1alphaReleaseTest> {
			return this.http.get<GoogleFirebaseAppdistroV1alphaReleaseTest>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a release.
		 * Patch v1alpha/{name}
		 * @param {string} name Identifier. The name of the test configuration resource. Format: `projects/{project_number}/apps/{app_id}/testConfig`
		 * @param {string} updateMask Optional. The list of fields to update.
		 * @return {GoogleFirebaseAppdistroV1alphaTestConfig} Successful response
		 */
		Firebaseappdistribution_projects_apps_updateTestConfig(name: string, updateMask: string | null | undefined, requestBody: GoogleFirebaseAppdistroV1alphaTestConfig): Observable<GoogleFirebaseAppdistroV1alphaTestConfig> {
			return this.http.patch<GoogleFirebaseAppdistroV1alphaTestConfig>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List results for automated tests run on release.
		 * Get v1alpha/{parent}/tests
		 * @param {string} parent Required. The name of the release resource, which is the parent of the tests Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}`
		 * @param {number} pageSize Optional. The maximum number of tests to return. The service may return fewer than this value.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListReleaseTests` call. Provide this to retrieve the subsequent page.
		 * @return {GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse} Successful response
		 */
		Firebaseappdistribution_projects_apps_releases_tests_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse> {
			return this.http.get<GoogleFirebaseAppdistroV1alphaListReleaseTestsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tests&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Run automated test(s) on release.
		 * Post v1alpha/{parent}/tests
		 * @param {string} parent Required. The name of the release resource, which is the parent of the test Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}`
		 * @param {string} releaseTestId Optional. The ID to use for the test, which will become the final component of the tests's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. If it is not provided one will be automatically generated.
		 * @return {GoogleFirebaseAppdistroV1alphaReleaseTest} Successful response
		 */
		Firebaseappdistribution_projects_apps_releases_tests_create(parent: string, releaseTestId: string | null | undefined, requestBody: GoogleFirebaseAppdistroV1alphaReleaseTest): Observable<GoogleFirebaseAppdistroV1alphaReleaseTest> {
			return this.http.post<GoogleFirebaseAppdistroV1alphaReleaseTest>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tests&releaseTestId=' + (releaseTestId == null ? '' : encodeURIComponent(releaseTestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get UDIDs of tester iOS devices in a project
		 * Get v1alpha/{project}/testers:udids
		 * @param {string} project The name of the project, which is the parent of testers Format: `projects/{project_number}`
		 * @param {string} mobilesdkAppId Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
		 * @return {GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse} Successful response
		 */
		Firebaseappdistribution_projects_testers_getUdids(project: string, mobilesdkAppId: string | null | undefined): Observable<GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse> {
			return this.http.get<GoogleFirebaseAppdistroV1alphaGetTesterUdidsResponse>(this.baseUri + 'v1alpha/' + (project == null ? '' : encodeURIComponent(project)) + '/testers:udids&mobilesdkAppId=' + (mobilesdkAppId == null ? '' : encodeURIComponent(mobilesdkAppId)), {});
		}
	}

	export enum Firebaseappdistribution_apps_getAppView { APP_VIEW_UNSPECIFIED = 'APP_VIEW_UNSPECIFIED', BASIC = 'BASIC', FULL = 'FULL' }

}

