import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Apk {

		/** Represents the binary payload of an APK. */
		binary?: ApkBinary;

		/** Represents the binary payload of an APK. */
		testBinary?: ApkBinary;

		/** The version code of the APK, as specified in the APK's manifest file. */
		versionCode?: number;
	}


	/** Represents the binary payload of an APK. */
	export interface ApkBinary {

		/** A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command. */
		sha1?: string;

		/** A sha256 hash of the APK payload, encoded as a hex string and matching the output of the sha256sum command. */
		sha256?: string;
	}

	export interface ApksAddExternallyHostedRequest {

		/** Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel */
		externallyHostedApk?: ExternallyHostedApk;
	}


	/** Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel */
	export interface ExternallyHostedApk {

		/** The application label. */
		applicationLabel?: string;

		/** A certificate (or array of certificates if a certificate-chain is used) used to signed this APK, represented as a base64 encoded byte array. */
		certificateBase64s?: Array<string>;

		/** The URL at which the APK is hosted. This must be an https URL. */
		externallyHostedUrl?: string;

		/** The SHA1 checksum of this APK, represented as a base64 encoded byte array. */
		fileSha1Base64?: string;

		/** The SHA256 checksum of this APK, represented as a base64 encoded byte array. */
		fileSha256Base64?: string;

		/** The file size in bytes of this APK. */
		fileSize?: string;

		/** The icon image from the APK, as a base64 encoded byte array. */
		iconBase64?: string;

		/** The maximum SDK supported by this APK (optional). */
		maximumSdk?: number;

		/** The minimum SDK targeted by this APK. */
		minimumSdk?: number;

		/** The native code environments supported by this APK (optional). */
		nativeCodes?: Array<string>;

		/** The package name. */
		packageName?: string;

		/** The features required by this APK (optional). */
		usesFeatures?: Array<string>;

		/** The permissions requested by this APK. */
		usesPermissions?: Array<ExternallyHostedApkUsesPermission>;

		/** The version code of this APK. */
		versionCode?: number;

		/** The version name of this APK. */
		versionName?: string;
	}


	/** A permission used by this APK. */
	export interface ExternallyHostedApkUsesPermission {

		/** Optionally, the maximum SDK version for which the permission is required. */
		maxSdkVersion?: number;

		/** The name of the permission requested. */
		name?: string;
	}

	export interface ApksAddExternallyHostedResponse {

		/** Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel */
		externallyHostedApk?: ExternallyHostedApk;
	}

	export interface ApksListResponse {
		apks?: Array<Apk>;

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#apksListResponse". */
		kind?: string;
	}

	export interface AppDetails {

		/** The user-visible support email for this app. */
		contactEmail?: string;

		/** The user-visible support telephone number for this app. */
		contactPhone?: string;

		/** The user-visible website for this app. */
		contactWebsite?: string;

		/** Default language code, in BCP 47 format (eg "en-US"). */
		defaultLanguage?: string;
	}


	/** Represents an edit of an app. An edit allows clients to make multiple changes before committing them in one operation. */
	export interface AppEdit {

		/** The time at which the edit will expire and will be no longer valid for use in any subsequent API calls (encoded as seconds since the Epoch). */
		expiryTimeSeconds?: string;

		/** The ID of the edit that can be used in subsequent API calls. */
		id?: string;
	}

	export interface Bundle {

		/** A sha1 hash of the upload payload, encoded as a hex string and matching the output of the sha1sum command. */
		sha1?: string;

		/** A sha256 hash of the upload payload, encoded as a hex string and matching the output of the sha256sum command. */
		sha256?: string;

		/** The version code of the Android App Bundle. As specified in the Android App Bundle's base module APK manifest file. */
		versionCode?: number;
	}

	export interface BundlesListResponse {
		bundles?: Array<Bundle>;

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#bundlesListResponse". */
		kind?: string;
	}

	export interface Comment {
		developerComment?: DeveloperComment;
		userComment?: UserComment;
	}

	export interface DeveloperComment {
		lastModified?: Timestamp;

		/** The content of the comment, i.e. reply body. */
		text?: string;
	}

	export interface Timestamp {
		nanos?: number;
		seconds?: string;
	}

	export interface UserComment {

		/** Integer Android SDK version of the user's device at the time the review was written, e.g. 23 is Marshmallow. May be absent. */
		androidOsVersion?: number;

		/** Integer version code of the app as installed at the time the review was written. May be absent. */
		appVersionCode?: number;

		/** String version name of the app as installed at the time the review was written. May be absent. */
		appVersionName?: string;

		/** Codename for the reviewer's device, e.g. klte, flounder. May be absent. */
		device?: string;
		deviceMetadata?: DeviceMetadata;
		lastModified?: Timestamp;

		/** Untranslated text of the review, in the case where the review has been translated. If the review has not been translated this is left blank. */
		originalText?: string;

		/** Language code for the reviewer. This is taken from the device settings so is not guaranteed to match the language the review is written in. May be absent. */
		reviewerLanguage?: string;

		/** The star rating associated with the review, from 1 to 5. */
		starRating?: number;

		/** The content of the comment, i.e. review body. In some cases users have been able to write a review with separate title and body; in those cases the title and body are concatenated and separated by a tab character. */
		text?: string;

		/** Number of users who have given this review a thumbs down */
		thumbsDownCount?: number;

		/** Number of users who have given this review a thumbs up */
		thumbsUpCount?: number;
	}

	export interface DeviceMetadata {

		/** Device CPU make e.g. "Qualcomm" */
		cpuMake?: string;

		/** Device CPU model e.g. "MSM8974" */
		cpuModel?: string;

		/** Device class (e.g. tablet) */
		deviceClass?: string;

		/** OpenGL version */
		glEsVersion?: number;

		/** Device manufacturer (e.g. Motorola) */
		manufacturer?: string;

		/** Comma separated list of native platforms (e.g. "arm", "arm7") */
		nativePlatform?: string;

		/** Device model name (e.g. Droid) */
		productName?: string;

		/** Device RAM in Megabytes e.g. "2048" */
		ramMb?: number;

		/** Screen density in DPI */
		screenDensityDpi?: number;

		/** Screen height in pixels */
		screenHeightPx?: number;

		/** Screen width in pixels */
		screenWidthPx?: number;
	}

	export interface Control {
		modRanges?: Array<ModRange>;
		stratifiedSamplings?: Array<StratifiedSampling>;
		versionCodes?: Array<string>;
	}

	export interface ModRange {
		end?: string;
		start?: string;
	}

	export interface StratifiedSampling {
		modRanges?: Array<ModRange>;
		stratum?: Stratum;
	}

	export interface Stratum {
		brand?: string;
	}

	export interface CountryTargeting {
		countries?: Array<string>;
		includeRestOfWorld?: boolean;
	}


	/** Represents a deobfuscation file. */
	export interface DeobfuscationFile {

		/** The type of the deobfuscation file. */
		symbolType?: string;
	}

	export interface DeobfuscationFilesUploadResponse {

		/** Represents a deobfuscation file. */
		deobfuscationFile?: DeobfuscationFile;
	}

	export interface DeviceSpec {
		screenDensity?: string;
		supportedAbis?: Array<string>;
		supportedLocales?: Array<string>;
	}

	export interface ExpansionFile {

		/** If set this field indicates that this APK has an Expansion File uploaded to it: this APK does not reference another APK's Expansion File. The field's value is the size of the uploaded Expansion File in bytes. */
		fileSize?: string;

		/** If set this APK's Expansion File references another APK's Expansion File. The file_size field will not be set. */
		referencesVersion?: number;
	}

	export interface ExpansionFilesUploadResponse {
		expansionFile?: ExpansionFile;
	}

	export interface Image {

		/** A unique id representing this image. */
		id?: string;

		/** A sha1 hash of the image that was uploaded. */
		sha1?: string;

		/** A sha256 hash of the image that was uploaded. */
		sha256?: string;

		/** A URL that will serve a preview of the image. */
		url?: string;
	}

	export interface ImagesDeleteAllResponse {
		deleted?: Array<Image>;
	}

	export interface ImagesListResponse {
		images?: Array<Image>;
	}

	export interface ImagesUploadResponse {
		image?: Image;
	}

	export interface InAppProduct {

		/** The default language of the localized data, as defined by BCP 47. e.g. "en-US", "en-GB". */
		defaultLanguage?: string;
		defaultPrice?: Price;

		/** Grace period of the subscription, specified in ISO 8601 format. It will allow developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values = "P3D" (three days), "P7D" (seven days), "P14D" (fourteen days), and "P30D" (thirty days) */
		gracePeriod?: string;

		/** List of localized title and description data. */
		listings?: {[id: string]: InAppProductListing };

		/** The package name of the parent app. */
		packageName?: string;

		/** Prices per buyer region. None of these prices should be zero. In-app products can never be free. */
		prices?: {[id: string]: Price };

		/** Purchase type enum value. Unmodifiable after creation. */
		purchaseType?: string;

		/** The stock-keeping-unit (SKU) of the product, unique within an app. */
		sku?: string;
		status?: string;

		/** Subscription period, specified in ISO 8601 format. Acceptable values are "P1W" (one week), "P1M" (one month), "P3M" (three months), "P6M" (six months), and "P1Y" (one year). */
		subscriptionPeriod?: string;

		/** Trial period, specified in ISO 8601 format. Acceptable values are anything between "P7D" (seven days) and "P999D" (999 days). Seasonal subscriptions cannot have a trial period. */
		trialPeriod?: string;
	}

	export interface Price {

		/** 3 letter Currency code, as defined by ISO 4217. */
		currency?: string;

		/** The price in millionths of the currency base unit represented as a string. */
		priceMicros?: string;
	}

	export interface InAppProductListing {
		description?: string;
		title?: string;
	}

	export interface InappproductsListResponse {
		inappproduct?: Array<InAppProduct>;

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#inappproductsListResponse". */
		kind?: string;
		pageInfo?: PageInfo;
		tokenPagination?: TokenPagination;
	}

	export interface PageInfo {
		resultPerPage?: number;
		startIndex?: number;
		totalResults?: number;
	}

	export interface TokenPagination {
		nextPageToken?: string;
		previousPageToken?: string;
	}


	/** An artifact resource which gets created when uploading an APK or Android App Bundle through internal app sharing. */
	export interface InternalAppSharingArtifact {

		/** The SHA256 fingerprint of the certificate used to signed the generated artifact. */
		certificateFingerprint?: string;

		/** The download URL generated for the uploaded artifact. Users that are authorized to download can follow the link to the Play Store app to install it. */
		downloadUrl?: string;

		/** The SHA-256 hash of the artifact represented as a lowercase hexadecimal number, matching the output of the sha256sum command. */
		sha256?: string;
	}


	/** Contains the introductory price information for a subscription. */
	export interface IntroductoryPriceInfo {

		/** Introductory price of the subscription, not including tax. The currency is the same as price_currency_code. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000. */
		introductoryPriceAmountMicros?: string;

		/** ISO 4217 currency code for the introductory subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP". */
		introductoryPriceCurrencyCode?: string;

		/** The number of billing period to offer introductory pricing. */
		introductoryPriceCycles?: number;

		/** Introductory price period, specified in ISO 8601 format. Common values are (but not limited to) "P1W" (one week), "P1M" (one month), "P3M" (three months), "P6M" (six months), and "P1Y" (one year). */
		introductoryPricePeriod?: string;
	}

	export interface Listing {

		/** Full description of the app; this may be up to 4000 characters in length. */
		fullDescription?: string;

		/** Language localization code (for example, "de-AT" for Austrian German). */
		language?: string;

		/** Short description of the app (previously known as promo text); this may be up to 80 characters in length. */
		shortDescription?: string;

		/** App's localized title. */
		title?: string;

		/** URL of a promotional YouTube video for the app. */
		video?: string;
	}

	export interface ListingsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#listingsListResponse". */
		kind?: string;
		listings?: Array<Listing>;
	}

	export interface LocalizedText {

		/** The language code, in BCP 47 format (eg "en-US"). */
		language?: string;

		/** The text in the given `language`. */
		text?: string;
	}


	/** A ProductPurchase resource indicates the status of a user's inapp product purchase. */
	export interface ProductPurchase {

		/**
		 * The acknowledgement state of the inapp product. Possible values are:
		 * - Yet to be acknowledged
		 * - Acknowledged
		 */
		acknowledgementState?: number;

		/**
		 * The consumption state of the inapp product. Possible values are:
		 * - Yet to be consumed
		 * - Consumed
		 */
		consumptionState?: number;

		/** A developer-specified string that contains supplemental information about an order. */
		developerPayload?: string;

		/** This kind represents an inappPurchase object in the androidpublisher service. */
		kind?: string;

		/** The order id associated with the purchase of the inapp product. */
		orderId?: string;

		/** The inapp product SKU. */
		productId?: string;

		/**
		 * The purchase state of the order. Possible values are:
		 * - Purchased
		 * - Canceled
		 * - Pending
		 */
		purchaseState?: number;

		/** The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970). */
		purchaseTimeMillis?: string;

		/** The purchase token generated to identify this purchase. */
		purchaseToken?: string;

		/**
		 * The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:
		 * - Test (i.e. purchased from a license testing account)
		 * - Promo (i.e. purchased using a promo code)
		 * - Rewarded (i.e. from watching a video ad instead of paying)
		 */
		purchaseType?: number;

		/** The quantity associated with the purchase of the inapp product. */
		quantity?: number;
	}

	export interface ProductPurchasesAcknowledgeRequest {

		/** Payload to attach to the purchase. */
		developerPayload?: string;
	}

	export interface Review {

		/** The name of the user who wrote the review. */
		authorName?: string;

		/** A repeated field containing comments for the review. */
		comments?: Array<Comment>;

		/** Unique identifier for this review. */
		reviewId?: string;
	}

	export interface ReviewReplyResult {
		lastEdited?: Timestamp;

		/** The reply text that was applied. */
		replyText?: string;
	}

	export interface ReviewsListResponse {
		pageInfo?: PageInfo;
		reviews?: Array<Review>;
		tokenPagination?: TokenPagination;
	}

	export interface ReviewsReplyRequest {

		/** The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped. */
		replyText?: string;
	}

	export interface ReviewsReplyResponse {
		result?: ReviewReplyResult;
	}

	export interface Sampling {
		modRanges?: Array<ModRange>;
		modulus?: string;
		salt?: number;
		stratifiedSamplings?: Array<StratifiedSampling>;
		useAndroidId?: boolean;
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
		cancelSurveyReason?: number;

		/** The customized input cancel reason from the user. Only present when cancelReason is 0. */
		userInputCancelReason?: string;
	}


	/** A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time. */
	export interface SubscriptionDeferralInfo {

		/** The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription. */
		desiredExpiryTimeMillis?: string;

		/** The expected expiry time for the subscription. If the current expiry time for the subscription is not the value specified here, the deferral will not occur. */
		expectedExpiryTimeMillis?: string;
	}


	/** Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion. */
	export interface SubscriptionPriceChange {
		newPrice?: Price;

		/**
		 * The current state of the price change. Possible values are:
		 * - Outstanding: State for a pending price change waiting for the user to agree. In this state, you can optionally seek confirmation from the user using the In-App API.
		 * - Accepted: State for an accepted price change that the subscription will renew with unless it's canceled. The price change takes effect on a future date when the subscription renews. Note that the change might not occur when the subscription is renewed next.
		 */
		state?: number;
	}


	/** A SubscriptionPurchase resource indicates the status of a user's subscription purchase. */
	export interface SubscriptionPurchase {

		/**
		 * The acknowledgement state of the subscription product. Possible values are:
		 * - Yet to be acknowledged
		 * - Acknowledged
		 */
		acknowledgementState?: number;

		/** Whether the subscription will automatically be renewed when it reaches its current expiry time. */
		autoRenewing?: boolean;

		/** Time at which the subscription will be automatically resumed, in milliseconds since the Epoch. Only present if the user has requested to pause the subscription. */
		autoResumeTimeMillis?: string;

		/**
		 * The reason why a subscription was canceled or is not auto-renewing. Possible values are:
		 * - User canceled the subscription
		 * - Subscription was canceled by the system, for example because of a billing problem
		 * - Subscription was replaced with a new subscription
		 * - Subscription was canceled by the developer
		 */
		cancelReason?: number;

		/** Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey). */
		cancelSurveyResult?: SubscriptionCancelSurveyResult;

		/** ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted. */
		countryCode?: string;

		/** A developer-specified string that contains supplemental information about an order. */
		developerPayload?: string;

		/** The email address of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		emailAddress?: string;

		/** Time at which the subscription will expire, in milliseconds since the Epoch. */
		expiryTimeMillis?: string;

		/** User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow. */
		externalAccountId?: string;

		/** The family name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		familyName?: string;

		/** The given name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		givenName?: string;

		/** Contains the introductory price information for a subscription. */
		introductoryPriceInfo?: IntroductoryPriceInfo;

		/** This kind represents a subscriptionPurchase object in the androidpublisher service. */
		kind?: string;

		/**
		 * The purchase token of the originating purchase if this subscription is one of the following:
		 * - Re-signup of a canceled but non-lapsed subscription
		 * - Upgrade/downgrade from a previous subscription  For example, suppose a user originally signs up and you receive purchase token X, then the user cancels and goes through the resignup flow (before their subscription lapses) and you receive purchase token Y, and finally the user upgrades their subscription and you receive purchase token Z. If you call this API with purchase token Z, this field will be set to Y. If you call this API with purchase token Y, this field will be set to X. If you call this API with purchase token X, this field will not be set.
		 */
		linkedPurchaseToken?: string;

		/** The order id of the latest recurring order associated with the purchase of the subscription. */
		orderId?: string;

		/**
		 * The payment state of the subscription. Possible values are:
		 * - Payment pending
		 * - Payment received
		 * - Free trial
		 * - Pending deferred upgrade/downgrade
		 */
		paymentState?: number;

		/** Price of the subscription, not including tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000. */
		priceAmountMicros?: string;

		/** Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion. */
		priceChange?: SubscriptionPriceChange;

		/** ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP". */
		priceCurrencyCode?: string;

		/** The Google profile id of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		profileId?: string;

		/** The profile name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'. */
		profileName?: string;

		/** The promotion code applied on this purchase. This field is only set if a vanity code promotion is applied when the subscription was purchased. */
		promotionCode?: string;

		/**
		 * The type of promotion applied on this purchase. This field is only set if a promotion is applied when the subscription was purchased. Possible values are:
		 * - One time code
		 * - Vanity code
		 */
		promotionType?: number;

		/**
		 * The type of purchase of the subscription. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:
		 * - Test (i.e. purchased from a license testing account)
		 * - Promo (i.e. purchased using a promo code)
		 */
		purchaseType?: number;

		/** Time at which the subscription was granted, in milliseconds since the Epoch. */
		startTimeMillis?: string;

		/** The time at which the subscription was canceled by the user, in milliseconds since the epoch. Only present if cancelReason is 0. */
		userCancellationTimeMillis?: string;
	}

	export interface SubscriptionPurchasesAcknowledgeRequest {

		/** Payload to attach to the purchase. */
		developerPayload?: string;
	}

	export interface SubscriptionPurchasesDeferRequest {

		/** A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time. */
		deferralInfo?: SubscriptionDeferralInfo;
	}

	export interface SubscriptionPurchasesDeferResponse {

		/** The new expiry time for the subscription in milliseconds since the Epoch. */
		newExpiryTimeMillis?: string;
	}

	export interface SystemApkVariantsCreateRequest {
		deviceSpec?: DeviceSpec;
	}

	export interface SystemApkVariantsListResponse {
		variants?: Array<Variant>;
	}


	/** Represents the variant of a generated system APK from an uploaded App Bundle. */
	export interface Variant {
		deviceSpec?: DeviceSpec;
		variantId?: string;
	}

	export interface Testers {
		autoEnrolledAndroidGroups?: Array<string>;
		autoEnrolledGoogleGroups?: Array<string>;
		excludedGoogleGroups?: Array<string>;

		/** A list of all Google Groups, as email addresses, that define testers for this track. */
		googleGroups?: Array<string>;
	}

	export interface Track {

		/** A list of all active releases in this track during a read request. On an update request, it represents desired changes. */
		releases?: Array<TrackRelease>;

		/** Identifier for this track. */
		track?: string;
	}

	export interface TrackRelease {
		controls?: Array<Control>;
		countryTargeting?: CountryTargeting;

		/** In-app update priority of the release. All newly added APKs in the release will be considered at this priority. in_app_update_priority can take values between [0, 5]. 5 is the highest priority. Default priority is 0. in_app_update_priority can not be updated once the release is rolled out. See https://developer.android.com/guide/playcore/in-app-updates. */
		inAppUpdatePriority?: number;

		/** The release name, used to identify this release in the Play Console UI. Not required to be unique. This is optional, if not set it will be generated from the version_name in the APKs. */
		name?: string;
		pinnedVersions?: Array<TrackReleasePin>;

		/** The description of what is new in the app in this release. */
		releaseNotes?: Array<LocalizedText>;
		rollbackEnabled?: boolean;
		sampling?: Sampling;

		/** The desired status of this release. */
		status?: string;

		/** Fraction of users who are eligible to receive the release. 0 < fraction < 1. To be set, release status must be "inProgress" or "halted". */
		userFraction?: number;

		/** A list of all version codes of APKs that will be exposed to the users of this track when this release is rolled out. Note that this list should contain all versions you wish to be active, including those you wish to retain from previous releases. */
		versionCodes?: Array<string>;
	}

	export interface TrackReleasePin {
		targetings?: Array<TrackReleasePinPinTargeting>;
		versionCodes?: Array<string>;
	}

	export interface TrackReleasePinPinTargeting {
		countryCodes?: Array<string>;
		devices?: Array<TrackReleasePinPinTargetingDevicePin>;
		phoneskyVersions?: Array<string>;
		sdkVersions?: Array<number>;
	}

	export interface TrackReleasePinPinTargetingDevicePin {
		brand?: string;
		device?: string;
		product?: string;
	}

	export interface TracksListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "androidpublisher#tracksListResponse". */
		kind?: string;
		tracks?: Array<Track>;
	}


	/** A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back. */
	export interface VoidedPurchase {

		/** This kind represents a voided purchase object in the androidpublisher service. */
		kind?: string;

		/** The order id which uniquely identifies a one-time purchase, subscription purchase, or subscription renewal. */
		orderId?: string;

		/** The time at which the purchase was made, in milliseconds since the epoch (Jan 1, 1970). */
		purchaseTimeMillis?: string;

		/** The token which uniquely identifies a one-time purchase or subscription. To uniquely identify subscription renewals use order_id (available starting from version 3 of the API). */
		purchaseToken?: string;

		/**
		 * The reason why the purchase was voided, possible values are:
		 * - Other
		 * - Remorse
		 * - Not_received
		 * - Defective
		 * - Accidental_purchase
		 * - Fraud
		 * - Friendly_fraud
		 * - Chargeback
		 */
		voidedReason?: number;

		/**
		 * The initiator of voided purchase, possible values are:
		 * - User
		 * - Developer
		 * - Google
		 */
		voidedSource?: number;

		/** The time at which the purchase was canceled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970). */
		voidedTimeMillis?: string;
	}

	export interface VoidedPurchasesListResponse {
		pageInfo?: PageInfo;
		tokenPagination?: TokenPagination;
		voidedPurchases?: Array<VoidedPurchase>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
		 * Post internalappsharing/{packageName}/artifacts/apk
		 * @param {string} packageName Unique identifier for the Android app; for example, "com.spiffygame".
		 * @return {void} Successful response
		 */
		Androidpublisher_internalappsharingartifacts_uploadapk(packageName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'internalappsharing/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/artifacts/apk', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
		 * Post internalappsharing/{packageName}/artifacts/bundle
		 * @param {string} packageName Unique identifier for the Android app; for example, "com.spiffygame".
		 * @return {void} Successful response
		 */
		Androidpublisher_internalappsharingartifacts_uploadbundle(packageName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'internalappsharing/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/artifacts/bundle', null, { observe: 'response', responseType: 'text' });
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
		Androidpublisher_edits_bundles_upload(packageName: string, editId: string, ackBundleInstallationWarning: boolean): Observable<HttpResponse<string>> {
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
		Androidpublisher_inappproducts_list(packageName: string, maxResults: number, startIndex: number, token: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inappproducts&maxResults=' + maxResults + '&startIndex=' + startIndex + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new in-app product for an app.
		 * Post {packageName}/inappproducts
		 * @param {string} packageName Unique identifier for the Android app; for example, "com.spiffygame".
		 * @param {boolean} autoConvertMissingPrices If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
		 * @return {void} Successful response
		 */
		Androidpublisher_inappproducts_insert(packageName: string, autoConvertMissingPrices: boolean, requestBody: InAppProduct): Observable<HttpResponse<string>> {
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
		Androidpublisher_inappproducts_patch(packageName: string, sku: string, autoConvertMissingPrices: boolean, requestBody: InAppProduct): Observable<HttpResponse<string>> {
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
		Androidpublisher_inappproducts_update(packageName: string, sku: string, autoConvertMissingPrices: boolean, requestBody: InAppProduct): Observable<HttpResponse<string>> {
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
		Androidpublisher_orders_refund(packageName: string, orderId: string, revoke: boolean): Observable<HttpResponse<string>> {
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
		 * Acknowledges a purchase of an inapp item.
		 * Post {packageName}/purchases/products/{productId}/tokens/{token}:acknowledge
		 * @param {string} packageName The package name of the application the inapp product was sold in (for example, 'com.some.thing').
		 * @param {string} productId The inapp product SKU (for example, 'com.some.thing.inapp1').
		 * @param {string} token The token provided to the user's device when the subscription was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_products_acknowledge(packageName: string, productId: string, token: string, requestBody: ProductPurchasesAcknowledgeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)) + ':acknowledge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * Acknowledges a subscription purchase.
		 * Post {packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:acknowledge
		 * @param {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
		 * @param {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
		 * @param {string} token The token provided to the user's device when the subscription was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_subscriptions_acknowledge(packageName: string, subscriptionId: string, token: string, requestBody: SubscriptionPurchasesAcknowledgeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/tokens/' + (token == null ? '' : encodeURIComponent(token)) + ':acknowledge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @param {number} type The type of voided purchases that you want to see in the response. Possible values are:  
		 * - 0: Only voided in-app product purchases will be returned in the response. This is the default value.
		 * - 1: Both voided in-app purchases and voided subscription purchases will be returned in the response.  Note: Before requesting to receive voided subscription purchases, you must switch to use orderId in the response which uniquely identifies one-time purchases and subscriptions. Otherwise, you will receive multiple subscription orders with the same PurchaseToken, because subscription renewal orders share the same PurchaseToken.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_voidedpurchases_list(packageName: string, endTime: string, maxResults: number, startIndex: number, startTime: string, token: string, type: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/purchases/voidedpurchases&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)) + '&maxResults=' + maxResults + '&startIndex=' + startIndex + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)) + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&type=' + type + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of reviews. Only reviews from last week will be returned.
		 * Get {packageName}/reviews
		 * @param {string} packageName Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
		 * @return {void} Successful response
		 */
		Androidpublisher_reviews_list(packageName: string, maxResults: number, startIndex: number, token: string, translationLanguage: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/reviews&maxResults=' + maxResults + '&startIndex=' + startIndex + '&token=' + (token == null ? '' : encodeURIComponent(token)) + '&translationLanguage=' + (translationLanguage == null ? '' : encodeURIComponent(translationLanguage)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single review.
		 * Get {packageName}/reviews/{reviewId}
		 * @param {string} packageName Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
		 * @return {void} Successful response
		 */
		Androidpublisher_reviews_get(packageName: string, reviewId: string, translationLanguage: string): Observable<HttpResponse<string>> {
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

		/**
		 * Returns the list of previously created system APK variants.
		 * Get {packageName}/systemApks/{versionCode}/variants
		 * @param {string} packageName Unique identifier for the Android app; for example, "com.spiffygame".
		 * @param {string} versionCode The version code of the App Bundle.
		 * @return {void} Successful response
		 */
		Androidpublisher_systemapks_variants_list(packageName: string, versionCode: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/systemApks/' + (versionCode == null ? '' : encodeURIComponent(versionCode)) + '/variants', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new variant of APK which is suitable for inclusion in a system image.
		 * Post {packageName}/systemApks/{versionCode}/variants
		 * @param {string} packageName Unique identifier for the Android app; for example, "com.spiffygame".
		 * @param {string} versionCode The version code of the App Bundle.
		 * @return {void} Successful response
		 */
		Androidpublisher_systemapks_variants_create(packageName: string, versionCode: string, requestBody: SystemApkVariantsCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/systemApks/' + (versionCode == null ? '' : encodeURIComponent(versionCode)) + '/variants', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a previously created system APK variant.
		 * Get {packageName}/systemApks/{versionCode}/variants/{variantId}
		 * @param {string} packageName Unique identifier for the Android app; for example, "com.spiffygame".
		 * @param {string} versionCode The version code of the App Bundle.
		 * @param {number} variantId Unique identifier for this variant.
		 * @return {void} Successful response
		 */
		Androidpublisher_systemapks_variants_get(packageName: string, versionCode: string, variantId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/systemApks/' + (versionCode == null ? '' : encodeURIComponent(versionCode)) + '/variants/' + variantId + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Download a previously created APK which is suitable for inclusion in a system image.
		 * Get {packageName}/systemApks/{versionCode}/variants/{variantId}:download
		 * @param {string} packageName Unique identifier for the Android app; for example, "com.spiffygame".
		 * @param {string} versionCode The version code of the App Bundle.
		 * @return {void} Successful response
		 */
		Androidpublisher_systemapks_variants_download(packageName: string, versionCode: string, variantId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/systemApks/' + (versionCode == null ? '' : encodeURIComponent(versionCode)) + '/variants/' + variantId + ':download', { observe: 'response', responseType: 'text' });
		}
	}

	export enum Androidpublisher_edits_deobfuscationfiles_uploadDeobfuscationFileType { nativeCode = 0, proguard = 1 }

	export enum Androidpublisher_edits_expansionfiles_getExpansionFileType { main = 0, patch = 1 }

	export enum Androidpublisher_edits_images_deleteallImageType { automotiveScreenshots = 0, daydreamStereoImage = 1, featureGraphic = 2, icon = 3, phoneScreenshots = 4, promoGraphic = 5, sevenInchScreenshots = 6, tenInchScreenshots = 7, tvBanner = 8, tvScreenshots = 9, wearScreenshots = 10 }

}

