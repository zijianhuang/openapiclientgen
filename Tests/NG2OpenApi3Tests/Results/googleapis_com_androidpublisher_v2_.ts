import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Apk {

		/** Represents the binary payload of an APK. */
		binary?: ApkBinary;

		/** The version code of the APK, as specified in the APK's manifest file. */
		versionCode?: number | null;
	}
	export interface ApkFormProperties {

		/** The version code of the APK, as specified in the APK's manifest file. */
		versionCode: FormControl<number | null | undefined>,
	}
	export function CreateApkFormGroup() {
		return new FormGroup<ApkFormProperties>({
			versionCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the binary payload of an APK. */
	export interface ApkBinary {

		/** A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command. */
		sha1?: string | null;

		/** A sha256 hash of the APK payload, encoded as a hex string and matching the output of the sha256sum command. */
		sha256?: string | null;
	}

	/** Represents the binary payload of an APK. */
	export interface ApkBinaryFormProperties {

		/** A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command. */
		sha1: FormControl<string | null | undefined>,

		/** A sha256 hash of the APK payload, encoded as a hex string and matching the output of the sha256sum command. */
		sha256: FormControl<string | null | undefined>,
	}
	export function CreateApkBinaryFormGroup() {
		return new FormGroup<ApkBinaryFormProperties>({
			sha1: new FormControl<string | null | undefined>(undefined),
			sha256: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApkListing {

		/** The language code, in BCP 47 format (eg "en-US"). */
		language?: string | null;

		/** Describe what's new in your APK. */
		recentChanges?: string | null;
	}
	export interface ApkListingFormProperties {

		/** The language code, in BCP 47 format (eg "en-US"). */
		language: FormControl<string | null | undefined>,

		/** Describe what's new in your APK. */
		recentChanges: FormControl<string | null | undefined>,
	}
	export function CreateApkListingFormGroup() {
		return new FormGroup<ApkListingFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
			recentChanges: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApkListingsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#apkListingsListResponse". */
		kind?: string | null;
		listings?: Array<ApkListing>;
	}
	export interface ApkListingsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#apkListingsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateApkListingsListResponseFormGroup() {
		return new FormGroup<ApkListingsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApksAddExternallyHostedRequest {

		/** Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel */
		externallyHostedApk?: ExternallyHostedApk;
	}
	export interface ApksAddExternallyHostedRequestFormProperties {
	}
	export function CreateApksAddExternallyHostedRequestFormGroup() {
		return new FormGroup<ApksAddExternallyHostedRequestFormProperties>({
		});

	}


	/** Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel */
	export interface ExternallyHostedApk {

		/** The application label. */
		applicationLabel?: string | null;

		/** A certificate (or array of certificates if a certificate-chain is used) used to signed this APK, represented as a base64 encoded byte array. */
		certificateBase64s?: Array<string>;

		/** The URL at which the APK is hosted. This must be an https URL. */
		externallyHostedUrl?: string | null;

		/** The SHA1 checksum of this APK, represented as a base64 encoded byte array. */
		fileSha1Base64?: string | null;

		/** The SHA256 checksum of this APK, represented as a base64 encoded byte array. */
		fileSha256Base64?: string | null;

		/** The file size in bytes of this APK. */
		fileSize?: string | null;

		/** The icon image from the APK, as a base64 encoded byte array. */
		iconBase64?: string | null;

		/** The maximum SDK supported by this APK (optional). */
		maximumSdk?: number | null;

		/** The minimum SDK targeted by this APK. */
		minimumSdk?: number | null;

		/** The native code environments supported by this APK (optional). */
		nativeCodes?: Array<string>;

		/** The package name. */
		packageName?: string | null;

		/** The features required by this APK (optional). */
		usesFeatures?: Array<string>;

		/** The permissions requested by this APK. */
		usesPermissions?: Array<ExternallyHostedApkUsesPermission>;

		/** The version code of this APK. */
		versionCode?: number | null;

		/** The version name of this APK. */
		versionName?: string | null;
	}

	/** Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel */
	export interface ExternallyHostedApkFormProperties {

		/** The application label. */
		applicationLabel: FormControl<string | null | undefined>,

		/** The URL at which the APK is hosted. This must be an https URL. */
		externallyHostedUrl: FormControl<string | null | undefined>,

		/** The SHA1 checksum of this APK, represented as a base64 encoded byte array. */
		fileSha1Base64: FormControl<string | null | undefined>,

		/** The SHA256 checksum of this APK, represented as a base64 encoded byte array. */
		fileSha256Base64: FormControl<string | null | undefined>,

		/** The file size in bytes of this APK. */
		fileSize: FormControl<string | null | undefined>,

		/** The icon image from the APK, as a base64 encoded byte array. */
		iconBase64: FormControl<string | null | undefined>,

		/** The maximum SDK supported by this APK (optional). */
		maximumSdk: FormControl<number | null | undefined>,

		/** The minimum SDK targeted by this APK. */
		minimumSdk: FormControl<number | null | undefined>,

		/** The package name. */
		packageName: FormControl<string | null | undefined>,

		/** The version code of this APK. */
		versionCode: FormControl<number | null | undefined>,

		/** The version name of this APK. */
		versionName: FormControl<string | null | undefined>,
	}
	export function CreateExternallyHostedApkFormGroup() {
		return new FormGroup<ExternallyHostedApkFormProperties>({
			applicationLabel: new FormControl<string | null | undefined>(undefined),
			externallyHostedUrl: new FormControl<string | null | undefined>(undefined),
			fileSha1Base64: new FormControl<string | null | undefined>(undefined),
			fileSha256Base64: new FormControl<string | null | undefined>(undefined),
			fileSize: new FormControl<string | null | undefined>(undefined),
			iconBase64: new FormControl<string | null | undefined>(undefined),
			maximumSdk: new FormControl<number | null | undefined>(undefined),
			minimumSdk: new FormControl<number | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			versionCode: new FormControl<number | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A permission used by this APK. */
	export interface ExternallyHostedApkUsesPermission {

		/** Optionally, the maximum SDK version for which the permission is required. */
		maxSdkVersion?: number | null;

		/** The name of the permission requested. */
		name?: string | null;
	}

	/** A permission used by this APK. */
	export interface ExternallyHostedApkUsesPermissionFormProperties {

		/** Optionally, the maximum SDK version for which the permission is required. */
		maxSdkVersion: FormControl<number | null | undefined>,

		/** The name of the permission requested. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateExternallyHostedApkUsesPermissionFormGroup() {
		return new FormGroup<ExternallyHostedApkUsesPermissionFormProperties>({
			maxSdkVersion: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApksAddExternallyHostedResponse {

		/** Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel */
		externallyHostedApk?: ExternallyHostedApk;
	}
	export interface ApksAddExternallyHostedResponseFormProperties {
	}
	export function CreateApksAddExternallyHostedResponseFormGroup() {
		return new FormGroup<ApksAddExternallyHostedResponseFormProperties>({
		});

	}

	export interface ApksListResponse {
		apks?: Array<Apk>;

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#apksListResponse". */
		kind?: string | null;
	}
	export interface ApksListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#apksListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateApksListResponseFormGroup() {
		return new FormGroup<ApksListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppDetails {

		/** The user-visible support email for this app. */
		contactEmail?: string | null;

		/** The user-visible support telephone number for this app. */
		contactPhone?: string | null;

		/** The user-visible website for this app. */
		contactWebsite?: string | null;

		/** Default language code, in BCP 47 format (eg "en-US"). */
		defaultLanguage?: string | null;
	}
	export interface AppDetailsFormProperties {

		/** The user-visible support email for this app. */
		contactEmail: FormControl<string | null | undefined>,

		/** The user-visible support telephone number for this app. */
		contactPhone: FormControl<string | null | undefined>,

		/** The user-visible website for this app. */
		contactWebsite: FormControl<string | null | undefined>,

		/** Default language code, in BCP 47 format (eg "en-US"). */
		defaultLanguage: FormControl<string | null | undefined>,
	}
	export function CreateAppDetailsFormGroup() {
		return new FormGroup<AppDetailsFormProperties>({
			contactEmail: new FormControl<string | null | undefined>(undefined),
			contactPhone: new FormControl<string | null | undefined>(undefined),
			contactWebsite: new FormControl<string | null | undefined>(undefined),
			defaultLanguage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an edit of an app. An edit allows clients to make multiple changes before committing them in one operation. */
	export interface AppEdit {

		/** The time at which the edit will expire and will be no longer valid for use in any subsequent API calls (encoded as seconds since the Epoch). */
		expiryTimeSeconds?: string | null;

		/** The ID of the edit that can be used in subsequent API calls. */
		id?: string | null;
	}

	/** Represents an edit of an app. An edit allows clients to make multiple changes before committing them in one operation. */
	export interface AppEditFormProperties {

		/** The time at which the edit will expire and will be no longer valid for use in any subsequent API calls (encoded as seconds since the Epoch). */
		expiryTimeSeconds: FormControl<string | null | undefined>,

		/** The ID of the edit that can be used in subsequent API calls. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAppEditFormGroup() {
		return new FormGroup<AppEditFormProperties>({
			expiryTimeSeconds: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Bundle {

		/** A sha1 hash of the upload payload, encoded as a hex string and matching the output of the sha1sum command. */
		sha1?: string | null;

		/** A sha256 hash of the upload payload, encoded as a hex string and matching the output of the sha256sum command. */
		sha256?: string | null;

		/** The version code of the Android App Bundle. As specified in the Android App Bundle's base module APK manifest file. */
		versionCode?: number | null;
	}
	export interface BundleFormProperties {

		/** A sha1 hash of the upload payload, encoded as a hex string and matching the output of the sha1sum command. */
		sha1: FormControl<string | null | undefined>,

		/** A sha256 hash of the upload payload, encoded as a hex string and matching the output of the sha256sum command. */
		sha256: FormControl<string | null | undefined>,

		/** The version code of the Android App Bundle. As specified in the Android App Bundle's base module APK manifest file. */
		versionCode: FormControl<number | null | undefined>,
	}
	export function CreateBundleFormGroup() {
		return new FormGroup<BundleFormProperties>({
			sha1: new FormControl<string | null | undefined>(undefined),
			sha256: new FormControl<string | null | undefined>(undefined),
			versionCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BundlesListResponse {
		bundles?: Array<Bundle>;

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#bundlesListResponse". */
		kind?: string | null;
	}
	export interface BundlesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#bundlesListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBundlesListResponseFormGroup() {
		return new FormGroup<BundlesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Comment {
		developerComment?: DeveloperComment;
		userComment?: UserComment;
	}
	export interface CommentFormProperties {
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
		});

	}

	export interface DeveloperComment {
		lastModified?: Timestamp;

		/** The content of the comment, i.e. reply body. */
		text?: string | null;
	}
	export interface DeveloperCommentFormProperties {

		/** The content of the comment, i.e. reply body. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateDeveloperCommentFormGroup() {
		return new FormGroup<DeveloperCommentFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Timestamp {
		nanos?: number | null;
		seconds?: string | null;
	}
	export interface TimestampFormProperties {
		nanos: FormControl<number | null | undefined>,
		seconds: FormControl<string | null | undefined>,
	}
	export function CreateTimestampFormGroup() {
		return new FormGroup<TimestampFormProperties>({
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserComment {

		/** Integer Android SDK version of the user's device at the time the review was written, e.g. 23 is Marshmallow. May be absent. */
		androidOsVersion?: number | null;

		/** Integer version code of the app as installed at the time the review was written. May be absent. */
		appVersionCode?: number | null;

		/** String version name of the app as installed at the time the review was written. May be absent. */
		appVersionName?: string | null;

		/** Codename for the reviewer's device, e.g. klte, flounder. May be absent. */
		device?: string | null;
		deviceMetadata?: DeviceMetadata;
		lastModified?: Timestamp;

		/** Untranslated text of the review, in the case where the review has been translated. If the review has not been translated this is left blank. */
		originalText?: string | null;

		/** Language code for the reviewer. This is taken from the device settings so is not guaranteed to match the language the review is written in. May be absent. */
		reviewerLanguage?: string | null;

		/** The star rating associated with the review, from 1 to 5. */
		starRating?: number | null;

		/** The content of the comment, i.e. review body. In some cases users have been able to write a review with separate title and body; in those cases the title and body are concatenated and separated by a tab character. */
		text?: string | null;

		/** Number of users who have given this review a thumbs down */
		thumbsDownCount?: number | null;

		/** Number of users who have given this review a thumbs up */
		thumbsUpCount?: number | null;
	}
	export interface UserCommentFormProperties {

		/** Integer Android SDK version of the user's device at the time the review was written, e.g. 23 is Marshmallow. May be absent. */
		androidOsVersion: FormControl<number | null | undefined>,

		/** Integer version code of the app as installed at the time the review was written. May be absent. */
		appVersionCode: FormControl<number | null | undefined>,

		/** String version name of the app as installed at the time the review was written. May be absent. */
		appVersionName: FormControl<string | null | undefined>,

		/** Codename for the reviewer's device, e.g. klte, flounder. May be absent. */
		device: FormControl<string | null | undefined>,

		/** Untranslated text of the review, in the case where the review has been translated. If the review has not been translated this is left blank. */
		originalText: FormControl<string | null | undefined>,

		/** Language code for the reviewer. This is taken from the device settings so is not guaranteed to match the language the review is written in. May be absent. */
		reviewerLanguage: FormControl<string | null | undefined>,

		/** The star rating associated with the review, from 1 to 5. */
		starRating: FormControl<number | null | undefined>,

		/** The content of the comment, i.e. review body. In some cases users have been able to write a review with separate title and body; in those cases the title and body are concatenated and separated by a tab character. */
		text: FormControl<string | null | undefined>,

		/** Number of users who have given this review a thumbs down */
		thumbsDownCount: FormControl<number | null | undefined>,

		/** Number of users who have given this review a thumbs up */
		thumbsUpCount: FormControl<number | null | undefined>,
	}
	export function CreateUserCommentFormGroup() {
		return new FormGroup<UserCommentFormProperties>({
			androidOsVersion: new FormControl<number | null | undefined>(undefined),
			appVersionCode: new FormControl<number | null | undefined>(undefined),
			appVersionName: new FormControl<string | null | undefined>(undefined),
			device: new FormControl<string | null | undefined>(undefined),
			originalText: new FormControl<string | null | undefined>(undefined),
			reviewerLanguage: new FormControl<string | null | undefined>(undefined),
			starRating: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			thumbsDownCount: new FormControl<number | null | undefined>(undefined),
			thumbsUpCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeviceMetadata {

		/** Device CPU make e.g. "Qualcomm" */
		cpuMake?: string | null;

		/** Device CPU model e.g. "MSM8974" */
		cpuModel?: string | null;

		/** Device class (e.g. tablet) */
		deviceClass?: string | null;

		/** OpenGL version */
		glEsVersion?: number | null;

		/** Device manufacturer (e.g. Motorola) */
		manufacturer?: string | null;

		/** Comma separated list of native platforms (e.g. "arm", "arm7") */
		nativePlatform?: string | null;

		/** Device model name (e.g. Droid) */
		productName?: string | null;

		/** Device RAM in Megabytes e.g. "2048" */
		ramMb?: number | null;

		/** Screen density in DPI */
		screenDensityDpi?: number | null;

		/** Screen height in pixels */
		screenHeightPx?: number | null;

		/** Screen width in pixels */
		screenWidthPx?: number | null;
	}
	export interface DeviceMetadataFormProperties {

		/** Device CPU make e.g. "Qualcomm" */
		cpuMake: FormControl<string | null | undefined>,

		/** Device CPU model e.g. "MSM8974" */
		cpuModel: FormControl<string | null | undefined>,

		/** Device class (e.g. tablet) */
		deviceClass: FormControl<string | null | undefined>,

		/** OpenGL version */
		glEsVersion: FormControl<number | null | undefined>,

		/** Device manufacturer (e.g. Motorola) */
		manufacturer: FormControl<string | null | undefined>,

		/** Comma separated list of native platforms (e.g. "arm", "arm7") */
		nativePlatform: FormControl<string | null | undefined>,

		/** Device model name (e.g. Droid) */
		productName: FormControl<string | null | undefined>,

		/** Device RAM in Megabytes e.g. "2048" */
		ramMb: FormControl<number | null | undefined>,

		/** Screen density in DPI */
		screenDensityDpi: FormControl<number | null | undefined>,

		/** Screen height in pixels */
		screenHeightPx: FormControl<number | null | undefined>,

		/** Screen width in pixels */
		screenWidthPx: FormControl<number | null | undefined>,
	}
	export function CreateDeviceMetadataFormGroup() {
		return new FormGroup<DeviceMetadataFormProperties>({
			cpuMake: new FormControl<string | null | undefined>(undefined),
			cpuModel: new FormControl<string | null | undefined>(undefined),
			deviceClass: new FormControl<string | null | undefined>(undefined),
			glEsVersion: new FormControl<number | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			nativePlatform: new FormControl<string | null | undefined>(undefined),
			productName: new FormControl<string | null | undefined>(undefined),
			ramMb: new FormControl<number | null | undefined>(undefined),
			screenDensityDpi: new FormControl<number | null | undefined>(undefined),
			screenHeightPx: new FormControl<number | null | undefined>(undefined),
			screenWidthPx: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a deobfuscation file. */
	export interface DeobfuscationFile {

		/** The type of the deobfuscation file. */
		symbolType?: string | null;
	}

	/** Represents a deobfuscation file. */
	export interface DeobfuscationFileFormProperties {

		/** The type of the deobfuscation file. */
		symbolType: FormControl<string | null | undefined>,
	}
	export function CreateDeobfuscationFileFormGroup() {
		return new FormGroup<DeobfuscationFileFormProperties>({
			symbolType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeobfuscationFilesUploadResponse {

		/** Represents a deobfuscation file. */
		deobfuscationFile?: DeobfuscationFile;
	}
	export interface DeobfuscationFilesUploadResponseFormProperties {
	}
	export function CreateDeobfuscationFilesUploadResponseFormGroup() {
		return new FormGroup<DeobfuscationFilesUploadResponseFormProperties>({
		});

	}

	export interface ExpansionFile {

		/** If set this field indicates that this APK has an Expansion File uploaded to it: this APK does not reference another APK's Expansion File. The field's value is the size of the uploaded Expansion File in bytes. */
		fileSize?: string | null;

		/** If set this APK's Expansion File references another APK's Expansion File. The file_size field will not be set. */
		referencesVersion?: number | null;
	}
	export interface ExpansionFileFormProperties {

		/** If set this field indicates that this APK has an Expansion File uploaded to it: this APK does not reference another APK's Expansion File. The field's value is the size of the uploaded Expansion File in bytes. */
		fileSize: FormControl<string | null | undefined>,

		/** If set this APK's Expansion File references another APK's Expansion File. The file_size field will not be set. */
		referencesVersion: FormControl<number | null | undefined>,
	}
	export function CreateExpansionFileFormGroup() {
		return new FormGroup<ExpansionFileFormProperties>({
			fileSize: new FormControl<string | null | undefined>(undefined),
			referencesVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ExpansionFilesUploadResponse {
		expansionFile?: ExpansionFile;
	}
	export interface ExpansionFilesUploadResponseFormProperties {
	}
	export function CreateExpansionFilesUploadResponseFormGroup() {
		return new FormGroup<ExpansionFilesUploadResponseFormProperties>({
		});

	}

	export interface Image {

		/** A unique id representing this image. */
		id?: string | null;

		/** A sha1 hash of the image that was uploaded. */
		sha1?: string | null;

		/** A sha256 hash of the image that was uploaded. */
		sha256?: string | null;

		/** A URL that will serve a preview of the image. */
		url?: string | null;
	}
	export interface ImageFormProperties {

		/** A unique id representing this image. */
		id: FormControl<string | null | undefined>,

		/** A sha1 hash of the image that was uploaded. */
		sha1: FormControl<string | null | undefined>,

		/** A sha256 hash of the image that was uploaded. */
		sha256: FormControl<string | null | undefined>,

		/** A URL that will serve a preview of the image. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			sha1: new FormControl<string | null | undefined>(undefined),
			sha256: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImagesDeleteAllResponse {
		deleted?: Array<Image>;
	}
	export interface ImagesDeleteAllResponseFormProperties {
	}
	export function CreateImagesDeleteAllResponseFormGroup() {
		return new FormGroup<ImagesDeleteAllResponseFormProperties>({
		});

	}

	export interface ImagesListResponse {
		images?: Array<Image>;
	}
	export interface ImagesListResponseFormProperties {
	}
	export function CreateImagesListResponseFormGroup() {
		return new FormGroup<ImagesListResponseFormProperties>({
		});

	}

	export interface ImagesUploadResponse {
		image?: Image;
	}
	export interface ImagesUploadResponseFormProperties {
	}
	export function CreateImagesUploadResponseFormGroup() {
		return new FormGroup<ImagesUploadResponseFormProperties>({
		});

	}

	export interface InAppProduct {

		/** The default language of the localized data, as defined by BCP 47. e.g. "en-US", "en-GB". */
		defaultLanguage?: string | null;
		defaultPrice?: Price;

		/** Grace period of the subscription, specified in ISO 8601 format. It will allow developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values = "P3D" (three days), "P7D" (seven days), "P14D" (fourteen days), and "P30D" (thirty days) */
		gracePeriod?: string | null;

		/** List of localized title and description data. */
		listings?: {[id: string]: InAppProductListing };

		/** The package name of the parent app. */
		packageName?: string | null;

		/** Prices per buyer region. None of these prices should be zero. In-app products can never be free. */
		prices?: {[id: string]: Price };

		/** Purchase type enum value. Unmodifiable after creation. */
		purchaseType?: string | null;

		/** The stock-keeping-unit (SKU) of the product, unique within an app. */
		sku?: string | null;
		status?: string | null;

		/** Subscription period, specified in ISO 8601 format. Acceptable values are "P1W" (one week), "P1M" (one month), "P3M" (three months), "P6M" (six months), and "P1Y" (one year). */
		subscriptionPeriod?: string | null;

		/** Trial period, specified in ISO 8601 format. Acceptable values are anything between "P7D" (seven days) and "P999D" (999 days). Seasonal subscriptions cannot have a trial period. */
		trialPeriod?: string | null;
	}
	export interface InAppProductFormProperties {

		/** The default language of the localized data, as defined by BCP 47. e.g. "en-US", "en-GB". */
		defaultLanguage: FormControl<string | null | undefined>,

		/** Grace period of the subscription, specified in ISO 8601 format. It will allow developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values = "P3D" (three days), "P7D" (seven days), "P14D" (fourteen days), and "P30D" (thirty days) */
		gracePeriod: FormControl<string | null | undefined>,

		/** List of localized title and description data. */
		listings: FormControl<{[id: string]: InAppProductListing } | null | undefined>,

		/** The package name of the parent app. */
		packageName: FormControl<string | null | undefined>,

		/** Prices per buyer region. None of these prices should be zero. In-app products can never be free. */
		prices: FormControl<{[id: string]: Price } | null | undefined>,

		/** Purchase type enum value. Unmodifiable after creation. */
		purchaseType: FormControl<string | null | undefined>,

		/** The stock-keeping-unit (SKU) of the product, unique within an app. */
		sku: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,

		/** Subscription period, specified in ISO 8601 format. Acceptable values are "P1W" (one week), "P1M" (one month), "P3M" (three months), "P6M" (six months), and "P1Y" (one year). */
		subscriptionPeriod: FormControl<string | null | undefined>,

		/** Trial period, specified in ISO 8601 format. Acceptable values are anything between "P7D" (seven days) and "P999D" (999 days). Seasonal subscriptions cannot have a trial period. */
		trialPeriod: FormControl<string | null | undefined>,
	}
	export function CreateInAppProductFormGroup() {
		return new FormGroup<InAppProductFormProperties>({
			defaultLanguage: new FormControl<string | null | undefined>(undefined),
			gracePeriod: new FormControl<string | null | undefined>(undefined),
			listings: new FormControl<{[id: string]: InAppProductListing } | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			prices: new FormControl<{[id: string]: Price } | null | undefined>(undefined),
			purchaseType: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subscriptionPeriod: new FormControl<string | null | undefined>(undefined),
			trialPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Price {

		/** 3 letter Currency code, as defined by ISO 4217. */
		currency?: string | null;

		/** The price in millionths of the currency base unit represented as a string. */
		priceMicros?: string | null;
	}
	export interface PriceFormProperties {

		/** 3 letter Currency code, as defined by ISO 4217. */
		currency: FormControl<string | null | undefined>,

		/** The price in millionths of the currency base unit represented as a string. */
		priceMicros: FormControl<string | null | undefined>,
	}
	export function CreatePriceFormGroup() {
		return new FormGroup<PriceFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			priceMicros: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InAppProductListing {
		description?: string | null;
		title?: string | null;
	}
	export interface InAppProductListingFormProperties {
		description: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateInAppProductListingFormGroup() {
		return new FormGroup<InAppProductListingFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InappproductsListResponse {
		inappproduct?: Array<InAppProduct>;

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#inappproductsListResponse". */
		kind?: string | null;
		pageInfo?: PageInfo;
		tokenPagination?: TokenPagination;
	}
	export interface InappproductsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#inappproductsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateInappproductsListResponseFormGroup() {
		return new FormGroup<InappproductsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageInfo {
		resultPerPage?: number | null;
		startIndex?: number | null;
		totalResults?: number | null;
	}
	export interface PageInfoFormProperties {
		resultPerPage: FormControl<number | null | undefined>,
		startIndex: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreatePageInfoFormGroup() {
		return new FormGroup<PageInfoFormProperties>({
			resultPerPage: new FormControl<number | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TokenPagination {
		nextPageToken?: string | null;
		previousPageToken?: string | null;
	}
	export interface TokenPaginationFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
		previousPageToken: FormControl<string | null | undefined>,
	}
	export function CreateTokenPaginationFormGroup() {
		return new FormGroup<TokenPaginationFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			previousPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listing {

		/** Full description of the app; this may be up to 4000 characters in length. */
		fullDescription?: string | null;

		/** Language localization code (for example, "de-AT" for Austrian German). */
		language?: string | null;

		/** Short description of the app (previously known as promo text); this may be up to 80 characters in length. */
		shortDescription?: string | null;

		/** App's localized title. */
		title?: string | null;

		/** URL of a promotional YouTube video for the app. */
		video?: string | null;
	}
	export interface ListingFormProperties {

		/** Full description of the app; this may be up to 4000 characters in length. */
		fullDescription: FormControl<string | null | undefined>,

		/** Language localization code (for example, "de-AT" for Austrian German). */
		language: FormControl<string | null | undefined>,

		/** Short description of the app (previously known as promo text); this may be up to 80 characters in length. */
		shortDescription: FormControl<string | null | undefined>,

		/** App's localized title. */
		title: FormControl<string | null | undefined>,

		/** URL of a promotional YouTube video for the app. */
		video: FormControl<string | null | undefined>,
	}
	export function CreateListingFormGroup() {
		return new FormGroup<ListingFormProperties>({
			fullDescription: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			shortDescription: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			video: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListingsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#listingsListResponse". */
		kind?: string | null;
		listings?: Array<Listing>;
	}
	export interface ListingsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#listingsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateListingsListResponseFormGroup() {
		return new FormGroup<ListingsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A ProductPurchase resource indicates the status of a user's inapp product purchase. */
	export interface ProductPurchase {

		/**
		 * The consumption state of the inapp product. Possible values are:
		 * - Yet to be consumed
		 * - Consumed
		 */
		consumptionState?: number | null;

		/** A developer-specified string that contains supplemental information about an order. */
		developerPayload?: string | null;

		/** This kind represents an inappPurchase object in the androidpublisher service. */
		kind?: string | null;

		/** The order id associated with the purchase of the inapp product. */
		orderId?: string | null;

		/**
		 * The purchase state of the order. Possible values are:
		 * - Purchased
		 * - Canceled
		 * - Pending
		 */
		purchaseState?: number | null;

		/** The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970). */
		purchaseTimeMillis?: string | null;

		/**
		 * The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:
		 * - Test (i.e. purchased from a license testing account)
		 * - Promo (i.e. purchased using a promo code)
		 * - Rewarded (i.e. from watching a video ad instead of paying)
		 */
		purchaseType?: number | null;
	}

	/** A ProductPurchase resource indicates the status of a user's inapp product purchase. */
	export interface ProductPurchaseFormProperties {

		/**
		 * The consumption state of the inapp product. Possible values are:
		 * - Yet to be consumed
		 * - Consumed
		 */
		consumptionState: FormControl<number | null | undefined>,

		/** A developer-specified string that contains supplemental information about an order. */
		developerPayload: FormControl<string | null | undefined>,

		/** This kind represents an inappPurchase object in the androidpublisher service. */
		kind: FormControl<string | null | undefined>,

		/** The order id associated with the purchase of the inapp product. */
		orderId: FormControl<string | null | undefined>,

		/**
		 * The purchase state of the order. Possible values are:
		 * - Purchased
		 * - Canceled
		 * - Pending
		 */
		purchaseState: FormControl<number | null | undefined>,

		/** The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970). */
		purchaseTimeMillis: FormControl<string | null | undefined>,

		/**
		 * The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:
		 * - Test (i.e. purchased from a license testing account)
		 * - Promo (i.e. purchased using a promo code)
		 * - Rewarded (i.e. from watching a video ad instead of paying)
		 */
		purchaseType: FormControl<number | null | undefined>,
	}
	export function CreateProductPurchaseFormGroup() {
		return new FormGroup<ProductPurchaseFormProperties>({
			consumptionState: new FormControl<number | null | undefined>(undefined),
			developerPayload: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			purchaseState: new FormControl<number | null | undefined>(undefined),
			purchaseTimeMillis: new FormControl<string | null | undefined>(undefined),
			purchaseType: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Review {

		/** The name of the user who wrote the review. */
		authorName?: string | null;

		/** A repeated field containing comments for the review. */
		comments?: Array<Comment>;

		/** Unique identifier for this review. */
		reviewId?: string | null;
	}
	export interface ReviewFormProperties {

		/** The name of the user who wrote the review. */
		authorName: FormControl<string | null | undefined>,

		/** Unique identifier for this review. */
		reviewId: FormControl<string | null | undefined>,
	}
	export function CreateReviewFormGroup() {
		return new FormGroup<ReviewFormProperties>({
			authorName: new FormControl<string | null | undefined>(undefined),
			reviewId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReviewReplyResult {
		lastEdited?: Timestamp;

		/** The reply text that was applied. */
		replyText?: string | null;
	}
	export interface ReviewReplyResultFormProperties {

		/** The reply text that was applied. */
		replyText: FormControl<string | null | undefined>,
	}
	export function CreateReviewReplyResultFormGroup() {
		return new FormGroup<ReviewReplyResultFormProperties>({
			replyText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReviewsListResponse {
		pageInfo?: PageInfo;
		reviews?: Array<Review>;
		tokenPagination?: TokenPagination;
	}
	export interface ReviewsListResponseFormProperties {
	}
	export function CreateReviewsListResponseFormGroup() {
		return new FormGroup<ReviewsListResponseFormProperties>({
		});

	}

	export interface ReviewsReplyRequest {

		/** The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped. */
		replyText?: string | null;
	}
	export interface ReviewsReplyRequestFormProperties {

		/** The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped. */
		replyText: FormControl<string | null | undefined>,
	}
	export function CreateReviewsReplyRequestFormGroup() {
		return new FormGroup<ReviewsReplyRequestFormProperties>({
			replyText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReviewsReplyResponse {
		result?: ReviewReplyResult;
	}
	export interface ReviewsReplyResponseFormProperties {
	}
	export function CreateReviewsReplyResponseFormGroup() {
		return new FormGroup<ReviewsReplyResponseFormProperties>({
		});

	}


	/** Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey). */
	export interface SubscriptionCancelSurveyResult {

		/**
		 * The cancellation reason the user chose in the survey. Possible values are:
		 * - Other
		 * - I don't use this service enough
		 * - Technical issues
		 * - Cost-related reasons
		 * - I found a better app
		 */
		cancelSurveyReason?: number | null;

		/** The customized input cancel reason from the user. Only present when cancelReason is 0. */
		userInputCancelReason?: string | null;
	}

	/** Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey). */
	export interface SubscriptionCancelSurveyResultFormProperties {

		/**
		 * The cancellation reason the user chose in the survey. Possible values are:
		 * - Other
		 * - I don't use this service enough
		 * - Technical issues
		 * - Cost-related reasons
		 * - I found a better app
		 */
		cancelSurveyReason: FormControl<number | null | undefined>,

		/** The customized input cancel reason from the user. Only present when cancelReason is 0. */
		userInputCancelReason: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionCancelSurveyResultFormGroup() {
		return new FormGroup<SubscriptionCancelSurveyResultFormProperties>({
			cancelSurveyReason: new FormControl<number | null | undefined>(undefined),
			userInputCancelReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time. */
	export interface SubscriptionDeferralInfo {

		/** The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription. */
		desiredExpiryTimeMillis?: string | null;

		/** The expected expiry time for the subscription. If the current expiry time for the subscription is not the value specified here, the deferral will not occur. */
		expectedExpiryTimeMillis?: string | null;
	}

	/** A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time. */
	export interface SubscriptionDeferralInfoFormProperties {

		/** The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription. */
		desiredExpiryTimeMillis: FormControl<string | null | undefined>,

		/** The expected expiry time for the subscription. If the current expiry time for the subscription is not the value specified here, the deferral will not occur. */
		expectedExpiryTimeMillis: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionDeferralInfoFormGroup() {
		return new FormGroup<SubscriptionDeferralInfoFormProperties>({
			desiredExpiryTimeMillis: new FormControl<string | null | undefined>(undefined),
			expectedExpiryTimeMillis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion. */
	export interface SubscriptionPriceChange {
		newPrice?: Price;

		/**
		 * The current state of the price change. Possible values are:
		 * - Outstanding: State for a pending price change waiting for the user to agree. In this state, you can optionally seek confirmation from the user using the In-App API.
		 * - Accepted: State for an accepted price change that the subscription will renew with unless it's canceled. The price change takes effect on a future date when the subscription renews. Note that the change might not occur when the subscription is renewed next.
		 */
		state?: number | null;
	}

	/** Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion. */
	export interface SubscriptionPriceChangeFormProperties {

		/**
		 * The current state of the price change. Possible values are:
		 * - Outstanding: State for a pending price change waiting for the user to agree. In this state, you can optionally seek confirmation from the user using the In-App API.
		 * - Accepted: State for an accepted price change that the subscription will renew with unless it's canceled. The price change takes effect on a future date when the subscription renews. Note that the change might not occur when the subscription is renewed next.
		 */
		state: FormControl<number | null | undefined>,
	}
	export function CreateSubscriptionPriceChangeFormGroup() {
		return new FormGroup<SubscriptionPriceChangeFormProperties>({
			state: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A SubscriptionPurchase resource indicates the status of a user's subscription purchase. */
	export interface SubscriptionPurchase {

		/** Whether the subscription will automatically be renewed when it reaches its current expiry time. */
		autoRenewing?: boolean | null;

		/**
		 * The reason why a subscription was canceled or is not auto-renewing. Possible values are:
		 * - User canceled the subscription
		 * - Subscription was canceled by the system, for example because of a billing problem
		 * - Subscription was replaced with a new subscription
		 * - Subscription was canceled by the developer
		 */
		cancelReason?: number | null;

		/** Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey). */
		cancelSurveyResult?: SubscriptionCancelSurveyResult;

		/** ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted. */
		countryCode?: string | null;

		/** A developer-specified string that contains supplemental information about an order. */
		developerPayload?: string | null;

		/** The email address of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		emailAddress?: string | null;

		/** Time at which the subscription will expire, in milliseconds since the Epoch. */
		expiryTimeMillis?: string | null;

		/** The family name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		familyName?: string | null;

		/** The given name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		givenName?: string | null;

		/** This kind represents a subscriptionPurchase object in the androidpublisher service. */
		kind?: string | null;

		/**
		 * The purchase token of the originating purchase if this subscription is one of the following:
		 * - Re-signup of a canceled but non-lapsed subscription
		 * - Upgrade/downgrade from a previous subscription  For example, suppose a user originally signs up and you receive purchase token X, then the user cancels and goes through the resignup flow (before their subscription lapses) and you receive purchase token Y, and finally the user upgrades their subscription and you receive purchase token Z. If you call this API with purchase token Z, this field will be set to Y. If you call this API with purchase token Y, this field will be set to X. If you call this API with purchase token X, this field will not be set.
		 */
		linkedPurchaseToken?: string | null;

		/** The order id of the latest recurring order associated with the purchase of the subscription. */
		orderId?: string | null;

		/**
		 * The payment state of the subscription. Possible values are:
		 * - Payment pending
		 * - Payment received
		 * - Free trial
		 * - Pending deferred upgrade/downgrade
		 */
		paymentState?: number | null;

		/** Price of the subscription, not including tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000. */
		priceAmountMicros?: string | null;

		/** Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion. */
		priceChange?: SubscriptionPriceChange;

		/** ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP". */
		priceCurrencyCode?: string | null;

		/** The Google profile id of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		profileId?: string | null;

		/** The profile name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		profileName?: string | null;

		/**
		 * The type of purchase of the subscription. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:
		 * - Test (i.e. purchased from a license testing account)
		 * - Promo (i.e. purchased using a promo code)
		 */
		purchaseType?: number | null;

		/** Time at which the subscription was granted, in milliseconds since the Epoch. */
		startTimeMillis?: string | null;

		/** The time at which the subscription was canceled by the user, in milliseconds since the epoch. Only present if cancelReason is 0. */
		userCancellationTimeMillis?: string | null;
	}

	/** A SubscriptionPurchase resource indicates the status of a user's subscription purchase. */
	export interface SubscriptionPurchaseFormProperties {

		/** Whether the subscription will automatically be renewed when it reaches its current expiry time. */
		autoRenewing: FormControl<boolean | null | undefined>,

		/**
		 * The reason why a subscription was canceled or is not auto-renewing. Possible values are:
		 * - User canceled the subscription
		 * - Subscription was canceled by the system, for example because of a billing problem
		 * - Subscription was replaced with a new subscription
		 * - Subscription was canceled by the developer
		 */
		cancelReason: FormControl<number | null | undefined>,

		/** ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted. */
		countryCode: FormControl<string | null | undefined>,

		/** A developer-specified string that contains supplemental information about an order. */
		developerPayload: FormControl<string | null | undefined>,

		/** The email address of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		emailAddress: FormControl<string | null | undefined>,

		/** Time at which the subscription will expire, in milliseconds since the Epoch. */
		expiryTimeMillis: FormControl<string | null | undefined>,

		/** The family name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		familyName: FormControl<string | null | undefined>,

		/** The given name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		givenName: FormControl<string | null | undefined>,

		/** This kind represents a subscriptionPurchase object in the androidpublisher service. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The purchase token of the originating purchase if this subscription is one of the following:
		 * - Re-signup of a canceled but non-lapsed subscription
		 * - Upgrade/downgrade from a previous subscription  For example, suppose a user originally signs up and you receive purchase token X, then the user cancels and goes through the resignup flow (before their subscription lapses) and you receive purchase token Y, and finally the user upgrades their subscription and you receive purchase token Z. If you call this API with purchase token Z, this field will be set to Y. If you call this API with purchase token Y, this field will be set to X. If you call this API with purchase token X, this field will not be set.
		 */
		linkedPurchaseToken: FormControl<string | null | undefined>,

		/** The order id of the latest recurring order associated with the purchase of the subscription. */
		orderId: FormControl<string | null | undefined>,

		/**
		 * The payment state of the subscription. Possible values are:
		 * - Payment pending
		 * - Payment received
		 * - Free trial
		 * - Pending deferred upgrade/downgrade
		 */
		paymentState: FormControl<number | null | undefined>,

		/** Price of the subscription, not including tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000. */
		priceAmountMicros: FormControl<string | null | undefined>,

		/** ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP". */
		priceCurrencyCode: FormControl<string | null | undefined>,

		/** The Google profile id of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		profileId: FormControl<string | null | undefined>,

		/** The profile name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		profileName: FormControl<string | null | undefined>,

		/**
		 * The type of purchase of the subscription. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:
		 * - Test (i.e. purchased from a license testing account)
		 * - Promo (i.e. purchased using a promo code)
		 */
		purchaseType: FormControl<number | null | undefined>,

		/** Time at which the subscription was granted, in milliseconds since the Epoch. */
		startTimeMillis: FormControl<string | null | undefined>,

		/** The time at which the subscription was canceled by the user, in milliseconds since the epoch. Only present if cancelReason is 0. */
		userCancellationTimeMillis: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionPurchaseFormGroup() {
		return new FormGroup<SubscriptionPurchaseFormProperties>({
			autoRenewing: new FormControl<boolean | null | undefined>(undefined),
			cancelReason: new FormControl<number | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			developerPayload: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			expiryTimeMillis: new FormControl<string | null | undefined>(undefined),
			familyName: new FormControl<string | null | undefined>(undefined),
			givenName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			linkedPurchaseToken: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			paymentState: new FormControl<number | null | undefined>(undefined),
			priceAmountMicros: new FormControl<string | null | undefined>(undefined),
			priceCurrencyCode: new FormControl<string | null | undefined>(undefined),
			profileId: new FormControl<string | null | undefined>(undefined),
			profileName: new FormControl<string | null | undefined>(undefined),
			purchaseType: new FormControl<number | null | undefined>(undefined),
			startTimeMillis: new FormControl<string | null | undefined>(undefined),
			userCancellationTimeMillis: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscriptionPurchasesDeferRequest {

		/** A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time. */
		deferralInfo?: SubscriptionDeferralInfo;
	}
	export interface SubscriptionPurchasesDeferRequestFormProperties {
	}
	export function CreateSubscriptionPurchasesDeferRequestFormGroup() {
		return new FormGroup<SubscriptionPurchasesDeferRequestFormProperties>({
		});

	}

	export interface SubscriptionPurchasesDeferResponse {

		/** The new expiry time for the subscription in milliseconds since the Epoch. */
		newExpiryTimeMillis?: string | null;
	}
	export interface SubscriptionPurchasesDeferResponseFormProperties {

		/** The new expiry time for the subscription in milliseconds since the Epoch. */
		newExpiryTimeMillis: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionPurchasesDeferResponseFormGroup() {
		return new FormGroup<SubscriptionPurchasesDeferResponseFormProperties>({
			newExpiryTimeMillis: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Testers {

		/** A list of all Google Groups, as email addresses, that define testers for this track. */
		googleGroups?: Array<string>;
	}
	export interface TestersFormProperties {
	}
	export function CreateTestersFormGroup() {
		return new FormGroup<TestersFormProperties>({
		});

	}

	export interface Track {

		/** Identifier for this track. */
		track?: string | null;
		userFraction?: number | null;

		/** Version codes to make active on this track. Note that this list should contain all versions you wish to be active, including those you wish to retain from previous releases. */
		versionCodes?: Array<number>;
	}
	export interface TrackFormProperties {

		/** Identifier for this track. */
		track: FormControl<string | null | undefined>,
		userFraction: FormControl<number | null | undefined>,
	}
	export function CreateTrackFormGroup() {
		return new FormGroup<TrackFormProperties>({
			track: new FormControl<string | null | undefined>(undefined),
			userFraction: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TracksListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#tracksListResponse". */
		kind?: string | null;
		tracks?: Array<Track>;
	}
	export interface TracksListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#tracksListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateTracksListResponseFormGroup() {
		return new FormGroup<TracksListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back. */
	export interface VoidedPurchase {

		/** This kind represents a voided purchase object in the androidpublisher service. */
		kind?: string | null;

		/** The time at which the purchase was made, in milliseconds since the epoch (Jan 1, 1970). */
		purchaseTimeMillis?: string | null;

		/** The token which uniquely identifies a one-time purchase or subscription. To uniquely identify subscription renewals use order_id (available starting from version 3 of the API). */
		purchaseToken?: string | null;

		/** The time at which the purchase was canceled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970). */
		voidedTimeMillis?: string | null;
	}

	/** A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back. */
	export interface VoidedPurchaseFormProperties {

		/** This kind represents a voided purchase object in the androidpublisher service. */
		kind: FormControl<string | null | undefined>,

		/** The time at which the purchase was made, in milliseconds since the epoch (Jan 1, 1970). */
		purchaseTimeMillis: FormControl<string | null | undefined>,

		/** The token which uniquely identifies a one-time purchase or subscription. To uniquely identify subscription renewals use order_id (available starting from version 3 of the API). */
		purchaseToken: FormControl<string | null | undefined>,

		/** The time at which the purchase was canceled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970). */
		voidedTimeMillis: FormControl<string | null | undefined>,
	}
	export function CreateVoidedPurchaseFormGroup() {
		return new FormGroup<VoidedPurchaseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			purchaseTimeMillis: new FormControl<string | null | undefined>(undefined),
			purchaseToken: new FormControl<string | null | undefined>(undefined),
			voidedTimeMillis: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VoidedPurchasesListResponse {
		pageInfo?: PageInfo;
		tokenPagination?: TokenPagination;
		voidedPurchases?: Array<VoidedPurchase>;
	}
	export interface VoidedPurchasesListResponseFormProperties {
	}
	export function CreateVoidedPurchasesListResponseFormGroup() {
		return new FormGroup<VoidedPurchasesListResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a new edit for an app, populated with the app's current state.
		 * Post {packageName}/edits
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_insert(packageName: string, requestBody: AppEdit): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
		 * Delete {packageName}/edits/{editId}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_delete(packageName: string, editId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
		 * Get {packageName}/edits/{editId}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_get(packageName: string, editId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {packageName}/edits/{editId}/apks
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_apks_list(packageName: string, editId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post {packageName}/edits/{editId}/apks
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_apks_upload(packageName: string, editId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.
		 * Post {packageName}/edits/{editId}/apks/externallyHosted
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_apks_addexternallyhosted(packageName: string, editId: string, requestBody: ApksAddExternallyHostedRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/externallyHosted', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Uploads the deobfuscation file of the specified APK. If a deobfuscation or symbolication file already exists, it will be replaced. See https://developer.android.com/studio/build/shrink-code to learn more about deobfuscation files.
		 * Post {packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}
		 * @param {string} packageName Unique identifier of the Android app for which the deobfuscation files are being uploaded; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {number} apkVersionCode The version code of the APK whose deobfuscation file is being uploaded.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_deobfuscationfiles_upload(packageName: string, editId: string, apkVersionCode: number, deobfuscationFileType: Androidpublisher_edits_deobfuscationfiles_uploadDeobfuscationFileType): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/' + apkVersionCode + '/deobfuscationFiles/' + deobfuscationFileType + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches the Expansion File configuration for the APK specified.
		 * Get {packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {number} apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_expansionfiles_get(packageName: string, editId: string, apkVersionCode: number, expansionFileType: Androidpublisher_edits_expansionfiles_getExpansionFileType): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/' + apkVersionCode + '/expansionFiles/' + expansionFileType + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
		 * Patch {packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {number} apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_expansionfiles_patch(packageName: string, editId: string, apkVersionCode: number, expansionFileType: Androidpublisher_edits_expansionfiles_getExpansionFileType, requestBody: ExpansionFile): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/' + apkVersionCode + '/expansionFiles/' + expansionFileType + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Uploads and attaches a new Expansion File to the APK specified.
		 * Post {packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {number} apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_expansionfiles_upload(packageName: string, editId: string, apkVersionCode: number, expansionFileType: Androidpublisher_edits_expansionfiles_getExpansionFileType): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/' + apkVersionCode + '/expansionFiles/' + expansionFileType + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
		 * Put {packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {number} apkVersionCode The version code of the APK whose Expansion File configuration is being read or modified.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_expansionfiles_update(packageName: string, editId: string, apkVersionCode: number, expansionFileType: Androidpublisher_edits_expansionfiles_getExpansionFileType, requestBody: ExpansionFile): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/' + apkVersionCode + '/expansionFiles/' + expansionFileType + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes all the APK-specific localized listings for a specified APK.
		 * Delete {packageName}/edits/{editId}/apks/{apkVersionCode}/listings
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {number} apkVersionCode The APK version code whose APK-specific listings should be read or modified.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_apklistings_deleteall(packageName: string, editId: string, apkVersionCode: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/' + apkVersionCode + '/listings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the APK-specific localized listings for a specified APK.
		 * Get {packageName}/edits/{editId}/apks/{apkVersionCode}/listings
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {number} apkVersionCode The APK version code whose APK-specific listings should be read or modified.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_apklistings_list(packageName: string, editId: string, apkVersionCode: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/' + apkVersionCode + '/listings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the APK-specific localized listing for a specified APK and language code.
		 * Delete {packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {number} apkVersionCode The APK version code whose APK-specific listings should be read or modified.
		 * @param {string} language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_apklistings_delete(packageName: string, editId: string, apkVersionCode: number, language: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/' + apkVersionCode + '/listings/' + (language == null ? '' : encodeURIComponent(language)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches the APK-specific localized listing for a specified APK and language code.
		 * Get {packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {number} apkVersionCode The APK version code whose APK-specific listings should be read or modified.
		 * @param {string} language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_apklistings_get(packageName: string, editId: string, apkVersionCode: number, language: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/' + apkVersionCode + '/listings/' + (language == null ? '' : encodeURIComponent(language)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.
		 * Patch {packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {number} apkVersionCode The APK version code whose APK-specific listings should be read or modified.
		 * @param {string} language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_apklistings_patch(packageName: string, editId: string, apkVersionCode: number, language: string, requestBody: ApkListing): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/' + apkVersionCode + '/listings/' + (language == null ? '' : encodeURIComponent(language)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates or creates the APK-specific localized listing for a specified APK and language code.
		 * Put {packageName}/edits/{editId}/apks/{apkVersionCode}/listings/{language}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {number} apkVersionCode The APK version code whose APK-specific listings should be read or modified.
		 * @param {string} language The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_apklistings_update(packageName: string, editId: string, apkVersionCode: number, language: string, requestBody: ApkListing): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/apks/' + apkVersionCode + '/listings/' + (language == null ? '' : encodeURIComponent(language)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {packageName}/edits/{editId}/bundles
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_bundles_list(packageName: string, editId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/bundles', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
		 * Post {packageName}/edits/{editId}/bundles
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {boolean} ackBundleInstallationWarning Must be set to true if the bundle installation may trigger a warning on user devices (for example, if installation size may be over a threshold, typically 100 MB).
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_bundles_upload(packageName: string, editId: string, ackBundleInstallationWarning: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/bundles&ackBundleInstallationWarning=' + ackBundleInstallationWarning + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches app details for this edit. This includes the default language and developer support contact information.
		 * Get {packageName}/edits/{editId}/details
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_details_get(packageName: string, editId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/details', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates app details for this edit. This method supports patch semantics.
		 * Patch {packageName}/edits/{editId}/details
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_details_patch(packageName: string, editId: string, requestBody: AppDetails): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/details', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates app details for this edit.
		 * Put {packageName}/edits/{editId}/details
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_details_update(packageName: string, editId: string, requestBody: AppDetails): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/details', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes all localized listings from an edit.
		 * Delete {packageName}/edits/{editId}/listings
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_listings_deleteall(packageName: string, editId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all of the localized store listings attached to this edit.
		 * Get {packageName}/edits/{editId}/listings
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_listings_list(packageName: string, editId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified localized store listing from an edit.
		 * Delete {packageName}/edits/{editId}/listings/{language}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {string} language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_listings_delete(packageName: string, editId: string, language: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings/' + (language == null ? '' : encodeURIComponent(language)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches information about a localized store listing.
		 * Get {packageName}/edits/{editId}/listings/{language}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {string} language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_listings_get(packageName: string, editId: string, language: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings/' + (language == null ? '' : encodeURIComponent(language)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates or updates a localized store listing. This method supports patch semantics.
		 * Patch {packageName}/edits/{editId}/listings/{language}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {string} language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_listings_patch(packageName: string, editId: string, language: string, requestBody: Listing): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings/' + (language == null ? '' : encodeURIComponent(language)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates or updates a localized store listing.
		 * Put {packageName}/edits/{editId}/listings/{language}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {string} language The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_listings_update(packageName: string, editId: string, language: string, requestBody: Listing): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings/' + (language == null ? '' : encodeURIComponent(language)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes all images for the specified language and image type.
		 * Delete {packageName}/edits/{editId}/listings/{language}/{imageType}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {string} language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_images_deleteall(packageName: string, editId: string, language: string, imageType: Androidpublisher_edits_images_deleteallImageType): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings/' + (language == null ? '' : encodeURIComponent(language)) + '/' + imageType + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all images for the specified language and image type.
		 * Get {packageName}/edits/{editId}/listings/{language}/{imageType}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {string} language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_images_list(packageName: string, editId: string, language: string, imageType: Androidpublisher_edits_images_deleteallImageType): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings/' + (language == null ? '' : encodeURIComponent(language)) + '/' + imageType + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Uploads a new image and adds it to the list of images for the specified language and image type.
		 * Post {packageName}/edits/{editId}/listings/{language}/{imageType}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {string} language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_images_upload(packageName: string, editId: string, language: string, imageType: Androidpublisher_edits_images_deleteallImageType): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings/' + (language == null ? '' : encodeURIComponent(language)) + '/' + imageType + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the image (specified by id) from the edit.
		 * Delete {packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {string} language The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
		 * @param {string} imageId Unique identifier an image within the set of images attached to this edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_images_delete(packageName: string, editId: string, language: string, imageType: Androidpublisher_edits_images_deleteallImageType, imageId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/listings/' + (language == null ? '' : encodeURIComponent(language)) + '/' + imageType + '/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get {packageName}/edits/{editId}/testers/{track}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {string} track The track to read or modify.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_testers_get(packageName: string, editId: string, track: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/testers/' + (track == null ? '' : encodeURIComponent(track)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patch {packageName}/edits/{editId}/testers/{track}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {string} track The track to read or modify.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_testers_patch(packageName: string, editId: string, track: string, requestBody: Testers): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/testers/' + (track == null ? '' : encodeURIComponent(track)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put {packageName}/edits/{editId}/testers/{track}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {string} track The track to read or modify.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_testers_update(packageName: string, editId: string, track: string, requestBody: Testers): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/testers/' + (track == null ? '' : encodeURIComponent(track)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the track configurations for this edit.
		 * Get {packageName}/edits/{editId}/tracks
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_tracks_list(packageName: string, editId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/tracks', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
		 * Get {packageName}/edits/{editId}/tracks/{track}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {string} track The track to read or modify.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_tracks_get(packageName: string, editId: string, track: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/tracks/' + (track == null ? '' : encodeURIComponent(track)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the track configuration for the specified track type. This method supports patch semantics.
		 * Patch {packageName}/edits/{editId}/tracks/{track}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {string} track The track to read or modify.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_tracks_patch(packageName: string, editId: string, track: string, requestBody: Track): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/tracks/' + (track == null ? '' : encodeURIComponent(track)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the track configuration for the specified track type.
		 * Put {packageName}/edits/{editId}/tracks/{track}
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @param {string} track The track to read or modify.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_tracks_update(packageName: string, editId: string, track: string, requestBody: Track): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + '/tracks/' + (track == null ? '' : encodeURIComponent(track)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Commits/applies the changes made in this edit back to the app.
		 * Post {packageName}/edits/{editId}:commit
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_commit(packageName: string, editId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + ':commit', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.
		 * Post {packageName}/edits/{editId}:validate
		 * @param {string} packageName Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
		 * @param {string} editId Unique identifier for this edit.
		 * @return {void} Successful response
		 */
		Androidpublisher_edits_validate(packageName: string, editId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/edits/' + (editId == null ? '' : encodeURIComponent(editId)) + ':validate', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all the in-app products for an Android app, both subscriptions and managed in-app products..
		 * Get {packageName}/inappproducts
		 * @param {string} packageName Unique identifier for the Android app with in-app products; for example, "com.spiffygame".
		 * @return {void} Successful response
		 */
		Androidpublisher_inappproducts_list(packageName: string, maxResults: number | null | undefined, startIndex: number | null | undefined, token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inappproducts&maxResults=' + maxResults + '&startIndex=' + startIndex + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new in-app product for an app.
		 * Post {packageName}/inappproducts
		 * @param {string} packageName Unique identifier for the Android app; for example, "com.spiffygame".
		 * @param {boolean} autoConvertMissingPrices If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
		 * @return {void} Successful response
		 */
		Androidpublisher_inappproducts_insert(packageName: string, autoConvertMissingPrices: boolean | null | undefined, requestBody: InAppProduct): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inappproducts&autoConvertMissingPrices=' + autoConvertMissingPrices + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an in-app product for an app.
		 * Delete {packageName}/inappproducts/{sku}
		 * @param {string} packageName Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
		 * @param {string} sku Unique identifier for the in-app product.
		 * @return {void} Successful response
		 */
		Androidpublisher_inappproducts_delete(packageName: string, sku: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inappproducts/' + (sku == null ? '' : encodeURIComponent(sku)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about the in-app product specified.
		 * Get {packageName}/inappproducts/{sku}
		 * @param {string} sku Unique identifier for the in-app product.
		 * @return {void} Successful response
		 */
		Androidpublisher_inappproducts_get(packageName: string, sku: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inappproducts/' + (sku == null ? '' : encodeURIComponent(sku)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the details of an in-app product. This method supports patch semantics.
		 * Patch {packageName}/inappproducts/{sku}
		 * @param {string} packageName Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
		 * @param {string} sku Unique identifier for the in-app product.
		 * @param {boolean} autoConvertMissingPrices If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
		 * @return {void} Successful response
		 */
		Androidpublisher_inappproducts_patch(packageName: string, sku: string, autoConvertMissingPrices: boolean | null | undefined, requestBody: InAppProduct): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inappproducts/' + (sku == null ? '' : encodeURIComponent(sku)) + '&autoConvertMissingPrices=' + autoConvertMissingPrices + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the details of an in-app product.
		 * Put {packageName}/inappproducts/{sku}
		 * @param {string} packageName Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
		 * @param {string} sku Unique identifier for the in-app product.
		 * @param {boolean} autoConvertMissingPrices If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
		 * @return {void} Successful response
		 */
		Androidpublisher_inappproducts_update(packageName: string, sku: string, autoConvertMissingPrices: boolean | null | undefined, requestBody: InAppProduct): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inappproducts/' + (sku == null ? '' : encodeURIComponent(sku)) + '&autoConvertMissingPrices=' + autoConvertMissingPrices + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Refund a user's subscription or in-app purchase order.
		 * Post {packageName}/orders/{orderId}:refund
		 * @param {string} packageName The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').
		 * @param {string} orderId The order ID provided to the user when the subscription or in-app order was purchased.
		 * @param {boolean} revoke Whether to revoke the purchased item. If set to true, access to the subscription or in-app item will be terminated immediately. If the item is a recurring subscription, all future payments will also be terminated. Consumed in-app items need to be handled by developer's app. (optional)
		 * @return {void} Successful response
		 */
		Androidpublisher_orders_refund(packageName: string, orderId: string, revoke: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + ':refund&revoke=' + revoke + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks the purchase and consumption status of an inapp item.
		 * Get {packageName}/purchases/products/{productId}/tokens/{token}
		 * @param {string} packageName The package name of the application the inapp product was sold in (for example, 'com.some.thing').
		 * @param {string} productId The inapp product SKU (for example, 'com.some.thing.inapp1').
		 * @param {string} token The token provided to the user's device when the inapp product was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_products_get(packageName: string, productId: string, token: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether a user's subscription purchase is valid and returns its expiry time.
		 * Get {packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}
		 * @param {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
		 * @param {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
		 * @param {string} token The token provided to the user's device when the subscription was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_subscriptions_get(packageName: string, subscriptionId: string, token: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
		 * Post {packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel
		 * @param {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
		 * @param {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
		 * @param {string} token The token provided to the user's device when the subscription was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_subscriptions_cancel(packageName: string, subscriptionId: string, token: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)) + ':cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Defers a user's subscription purchase until a specified future expiration time.
		 * Post {packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer
		 * @param {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
		 * @param {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
		 * @param {string} token The token provided to the user's device when the subscription was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_subscriptions_defer(packageName: string, subscriptionId: string, token: string, requestBody: SubscriptionPurchasesDeferRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)) + ':defer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
		 * Post {packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund
		 * @param {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
		 * @param {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
		 * @param {string} token The token provided to the user's device when the subscription was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_subscriptions_refund(packageName: string, subscriptionId: string, token: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)) + ':refund', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
		 * Post {packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke
		 * @param {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
		 * @param {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
		 * @param {string} token The token provided to the user's device when the subscription was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_subscriptions_revoke(packageName: string, subscriptionId: string, token: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)) + ':revoke', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the purchases that were canceled, refunded or charged-back.
		 * Get {packageName}/purchases/voidedpurchases
		 * @param {string} packageName The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').
		 * @param {string} endTime The time, in milliseconds since the Epoch, of the newest voided purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
		 * @param {string} startTime The time, in milliseconds since the Epoch, of the oldest voided purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_voidedpurchases_list(packageName: string, endTime: string | null | undefined, maxResults: number | null | undefined, startIndex: number | null | undefined, startTime: string | null | undefined, token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/voidedpurchases&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)) + '&maxResults=' + maxResults + '&startIndex=' + startIndex + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)) + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of reviews. Only reviews from last week will be returned.
		 * Get {packageName}/reviews
		 * @param {string} packageName Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
		 * @return {void} Successful response
		 */
		Androidpublisher_reviews_list(packageName: string, maxResults: number | null | undefined, startIndex: number | null | undefined, token: string | null | undefined, translationLanguage: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/reviews&maxResults=' + maxResults + '&startIndex=' + startIndex + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&translationLanguage=' + (translationLanguage == null ? '' : encodeURIComponent(translationLanguage)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single review.
		 * Get {packageName}/reviews/{reviewId}
		 * @param {string} packageName Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
		 * @return {void} Successful response
		 */
		Androidpublisher_reviews_get(packageName: string, reviewId: string, translationLanguage: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/reviews/' + (reviewId == null ? '' : encodeURIComponent(reviewId)) + '&translationLanguage=' + (translationLanguage == null ? '' : encodeURIComponent(translationLanguage)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reply to a single review, or update an existing reply.
		 * Post {packageName}/reviews/{reviewId}:reply
		 * @param {string} packageName Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
		 * @return {void} Successful response
		 */
		Androidpublisher_reviews_reply(packageName: string, reviewId: string, requestBody: ReviewsReplyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/reviews/' + (reviewId == null ? '' : encodeURIComponent(reviewId)) + ':reply', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Androidpublisher_edits_deobfuscationfiles_uploadDeobfuscationFileType { nativeCode = 0, proguard = 1 }

	export enum Androidpublisher_edits_expansionfiles_getExpansionFileType { main = 0, patch = 1 }

	export enum Androidpublisher_edits_images_deleteallImageType { featureGraphic = 0, icon = 1, phoneScreenshots = 2, promoGraphic = 3, sevenInchScreenshots = 4, tenInchScreenshots = 5, tvBanner = 6, tvScreenshots = 7, wearScreenshots = 8 }

}

