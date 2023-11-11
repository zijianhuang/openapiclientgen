import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Tracking parameters supported by Dynamic Link. */
	export interface AnalyticsInfo {

		/**
		 * Parameters for Google Play Campaign Measurements.
		 * [Learn
		 * more](https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#campaign-params)
		 */
		googlePlayAnalytics?: GooglePlayAnalytics | null;

		/** Parameters for iTunes Connect App Analytics. */
		itunesConnectAnalytics?: ITunesConnectAnalytics | null;
	}


	/**
	 * Parameters for Google Play Campaign Measurements.
	 * [Learn
	 * more](https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#campaign-params)
	 */
	export interface GooglePlayAnalytics {

		/**
		 * [AdWords autotagging
		 * parameter](https://support.google.com/analytics/answer/1033981?hl=en); used
		 * to measure Google AdWords ads. This value is generated dynamically and
		 * should never be modified.
		 */
		gclid?: string | null;

		/**
		 * Campaign name; used for keyword analysis to identify a specific product
		 * promotion or strategic campaign.
		 */
		utmCampaign?: string | null;

		/**
		 * Campaign content; used for A/B testing and content-targeted ads to
		 * differentiate ads or links that point to the same URL.
		 */
		utmContent?: string | null;

		/** Campaign medium; used to identify a medium such as email or cost-per-click. */
		utmMedium?: string | null;

		/**
		 * Campaign source; used to identify a search engine, newsletter, or other
		 * source.
		 */
		utmSource?: string | null;

		/** Campaign term; used with paid search to supply the keywords for ads. */
		utmTerm?: string | null;
	}


	/** Parameters for iTunes Connect App Analytics. */
	export interface ITunesConnectAnalytics {

		/** Affiliate token used to create affiliate-coded links. */
		at?: string | null;

		/**
		 * Campaign text that developers can optionally add to any link in order to
		 * track sales from a specific marketing campaign.
		 */
		ct?: string | null;

		/** iTune media types, including music, podcasts, audiobooks and so on. */
		mt?: string | null;

		/**
		 * Provider token that enables analytics for Dynamic Links from within iTunes
		 * Connect.
		 */
		pt?: string | null;
	}


	/** Android related attributes to the Dynamic Link. */
	export interface AndroidInfo {

		/** Link to open on Android if the app is not installed. */
		androidFallbackLink?: string | null;

		/** If specified, this overrides the ‘link’ parameter on Android. */
		androidLink?: string | null;

		/**
		 * Minimum version code for the Android app. If the installed app’s version
		 * code is lower, then the user is taken to the Play Store.
		 */
		androidMinPackageVersionCode?: string | null;

		/** Android package name of the app. */
		androidPackageName?: string | null;
	}


	/** Request to create a managed Short Dynamic Link. */
	export interface CreateManagedShortLinkRequest {

		/** Information about a Dynamic Link. */
		dynamicLinkInfo?: DynamicLinkInfo | null;

		/**
		 * Full long Dynamic Link URL with desired query parameters specified.
		 * For example,
		 * "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample",
		 * [Learn
		 * more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
		 */
		longDynamicLink?: string | null;

		/**
		 * Link name to associate with the link. It's used for marketer to identify
		 * manually-created links in the Firebase console
		 * (https://console.firebase.google.com/).
		 * Links must be named to be tracked.
		 */
		name?: string | null;

		/** Google SDK version. Version takes the form "$major.$minor.$patch" */
		sdkVersion?: string | null;

		/** Short Dynamic Link suffix. */
		suffix?: Suffix | null;
	}


	/** Information about a Dynamic Link. */
	export interface DynamicLinkInfo {

		/** Tracking parameters supported by Dynamic Link. */
		analyticsInfo?: AnalyticsInfo | null;

		/** Android related attributes to the Dynamic Link. */
		androidInfo?: AndroidInfo | null;

		/** Desktop related attributes to the Dynamic Link. */
		desktopInfo?: DesktopInfo | null;

		/**
		 * E.g. https://maps.app.goo.gl, https://maps.page.link, https://g.co/maps
		 * More examples can be found in description of getNormalizedUriPrefix in
		 * j/c/g/firebase/dynamiclinks/uri/DdlDomain.java
		 * Will fallback to dynamic_link_domain is this field is missing
		 */
		domainUriPrefix?: string | null;

		/**
		 * Dynamic Links domain that the project owns, e.g. abcd.app.goo.gl
		 * [Learn
		 * more](https://firebase.google.com/docs/dynamic-links/android/receive) on
		 * how to set up Dynamic Link domain associated with your Firebase project.
		 * Required if missing domain_uri_prefix.
		 */
		dynamicLinkDomain?: string | null;

		/** iOS related attributes to the Dynamic Link.. */
		iosInfo?: IosInfo | null;

		/**
		 * The link your app will open, You can specify any URL your app can handle.
		 * This link must be a well-formatted URL, be properly URL-encoded, and use
		 * the HTTP or HTTPS scheme. See 'link' parameters in the
		 * [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
		 * Required.
		 */
		link?: string | null;

		/** Information of navigation behavior. */
		navigationInfo?: NavigationInfo | null;

		/**
		 * Parameters for social meta tag params.
		 * Used to set meta tag data for link previews on social sites.
		 */
		socialMetaTagInfo?: SocialMetaTagInfo | null;
	}


	/** Desktop related attributes to the Dynamic Link. */
	export interface DesktopInfo {

		/** Link to open on desktop. */
		desktopFallbackLink?: string | null;
	}


	/** iOS related attributes to the Dynamic Link.. */
	export interface IosInfo {

		/** iOS App Store ID. */
		iosAppStoreId?: string | null;

		/** iOS bundle ID of the app. */
		iosBundleId?: string | null;

		/**
		 * Custom (destination) scheme to use for iOS. By default, we’ll use the
		 * bundle ID as the custom scheme. Developer can override this behavior using
		 * this param.
		 */
		iosCustomScheme?: string | null;

		/** Link to open on iOS if the app is not installed. */
		iosFallbackLink?: string | null;

		/** iPad bundle ID of the app. */
		iosIpadBundleId?: string | null;

		/** If specified, this overrides the ios_fallback_link value on iPads. */
		iosIpadFallbackLink?: string | null;

		/** iOS minimum version. */
		iosMinimumVersion?: string | null;
	}


	/** Information of navigation behavior. */
	export interface NavigationInfo {

		/**
		 * If this option is on, FDL click will be forced to redirect rather than
		 * show an interstitial page.
		 */
		enableForcedRedirect?: boolean | null;
	}


	/**
	 * Parameters for social meta tag params.
	 * Used to set meta tag data for link previews on social sites.
	 */
	export interface SocialMetaTagInfo {

		/** A short description of the link. Optional. */
		socialDescription?: string | null;

		/** An image url string. Optional. */
		socialImageLink?: string | null;

		/** Title to be displayed. Optional. */
		socialTitle?: string | null;
	}


	/** Short Dynamic Link suffix. */
	export interface Suffix {

		/** Only applies to Option.CUSTOM. */
		customSuffix?: string | null;

		/** Suffix option. */
		option?: SuffixOption | null;
	}

	export enum SuffixOption { OPTION_UNSPECIFIED = 0, UNGUESSABLE = 1, SHORT = 2, CUSTOM = 3 }


	/** Response to create a short Dynamic Link. */
	export interface CreateManagedShortLinkResponse {

		/** Managed Short Link. */
		managedShortLink?: ManagedShortLink | null;

		/** Preview link to show the link flow chart. (debug info.) */
		previewLink?: string | null;

		/** Information about potential warnings on link creation. */
		warning?: Array<DynamicLinkWarning> | null;
	}


	/** Managed Short Link. */
	export interface ManagedShortLink {

		/** Creation timestamp of the short link. */
		creationTime?: string | null;

		/** Attributes that have been flagged about this short url. */
		flaggedAttribute?: Array<string> | null;

		/** Information about a Dynamic Link. */
		info?: DynamicLinkInfo | null;

		/**
		 * Short durable link url, for example, "https://sample.app.goo.gl/xyz123".
		 * Required.
		 */
		link?: string | null;

		/**
		 * Link name defined by the creator.
		 * Required.
		 */
		linkName?: string | null;

		/** Visibility status of link. */
		visibility?: ManagedShortLinkVisibility | null;
	}

	export enum ManagedShortLinkVisibility { UNSPECIFIED_VISIBILITY = 0, UNARCHIVED = 1, ARCHIVED = 2, NEVER_SHOWN = 3 }


	/** Dynamic Links warning messages. */
	export interface DynamicLinkWarning {

		/** The warning code. */
		warningCode?: DynamicLinkWarningWarningCode | null;

		/** The document describing the warning, and helps resolve. */
		warningDocumentLink?: string | null;

		/** The warning message to help developers improve their requests. */
		warningMessage?: string | null;
	}

	export enum DynamicLinkWarningWarningCode { CODE_UNSPECIFIED = 0, NOT_IN_PROJECT_ANDROID_PACKAGE_NAME = 1, NOT_INTEGER_ANDROID_PACKAGE_MIN_VERSION = 2, UNNECESSARY_ANDROID_PACKAGE_MIN_VERSION = 3, NOT_URI_ANDROID_LINK = 4, UNNECESSARY_ANDROID_LINK = 5, NOT_URI_ANDROID_FALLBACK_LINK = 6, BAD_URI_SCHEME_ANDROID_FALLBACK_LINK = 7, NOT_IN_PROJECT_IOS_BUNDLE_ID = 8, NOT_IN_PROJECT_IPAD_BUNDLE_ID = 9, UNNECESSARY_IOS_URL_SCHEME = 10, NOT_NUMERIC_IOS_APP_STORE_ID = 11, UNNECESSARY_IOS_APP_STORE_ID = 12, NOT_URI_IOS_FALLBACK_LINK = 13, BAD_URI_SCHEME_IOS_FALLBACK_LINK = 14, NOT_URI_IPAD_FALLBACK_LINK = 15, BAD_URI_SCHEME_IPAD_FALLBACK_LINK = 16, BAD_DEBUG_PARAM = 17, BAD_AD_PARAM = 18, DEPRECATED_PARAM = 19, UNRECOGNIZED_PARAM = 20, TOO_LONG_PARAM = 21, NOT_URI_SOCIAL_IMAGE_LINK = 22, BAD_URI_SCHEME_SOCIAL_IMAGE_LINK = 23, NOT_URI_SOCIAL_URL = 24, BAD_URI_SCHEME_SOCIAL_URL = 25, LINK_LENGTH_TOO_LONG = 26, LINK_WITH_FRAGMENTS = 27, NOT_MATCHING_IOS_BUNDLE_ID_AND_STORE_ID = 28 }


	/** Request to create a short Dynamic Link. */
	export interface CreateShortDynamicLinkRequest {

		/** Information about a Dynamic Link. */
		dynamicLinkInfo?: DynamicLinkInfo | null;

		/**
		 * Full long Dynamic Link URL with desired query parameters specified.
		 * For example,
		 * "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample",
		 * [Learn
		 * more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
		 */
		longDynamicLink?: string | null;

		/** Google SDK version. Version takes the form "$major.$minor.$patch" */
		sdkVersion?: string | null;

		/** Short Dynamic Link suffix. */
		suffix?: Suffix | null;
	}


	/** Response to create a short Dynamic Link. */
	export interface CreateShortDynamicLinkResponse {

		/** Preview link to show the link flow chart. (debug info.) */
		previewLink?: string | null;

		/** Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz */
		shortLink?: string | null;

		/** Information about potential warnings on link creation. */
		warning?: Array<DynamicLinkWarning> | null;
	}


	/** Signals associated with the device making the request. */
	export interface DeviceInfo {

		/** Device model name. */
		deviceModelName?: string | null;

		/** Device language code setting. */
		languageCode?: string | null;

		/**
		 * Device language code setting obtained by executing JavaScript code in
		 * WebView.
		 */
		languageCodeFromWebview?: string | null;

		/**
		 * Device language code raw setting.
		 * iOS does returns language code in different format than iOS WebView.
		 * For example WebView returns en_US, but iOS returns en-US.
		 * Field below will return raw value returned by iOS.
		 */
		languageCodeRaw?: string | null;

		/** Device display resolution height. */
		screenResolutionHeight?: string | null;

		/** Device display resolution width. */
		screenResolutionWidth?: string | null;

		/** Device timezone setting. */
		timezone?: string | null;
	}


	/** Dynamic Link event stat. */
	export interface DynamicLinkEventStat {

		/** The number of times this event occurred. */
		count?: string | null;

		/** Link event. */
		event?: DynamicLinkEventStatEvent | null;

		/** Requested platform. */
		platform?: DynamicLinkEventStatPlatform | null;
	}

	export enum DynamicLinkEventStatEvent { DYNAMIC_LINK_EVENT_UNSPECIFIED = 0, CLICK = 1, REDIRECT = 2, APP_INSTALL = 3, APP_FIRST_OPEN = 4, APP_RE_OPEN = 5 }

	export enum DynamicLinkEventStatPlatform { DYNAMIC_LINK_PLATFORM_UNSPECIFIED = 0, ANDROID = 1, IOS = 2, DESKTOP = 3, OTHER = 4 }


	/** Analytics stats of a Dynamic Link for a given timeframe. */
	export interface DynamicLinkStats {

		/** Dynamic Link event stats. */
		linkEventStats?: Array<DynamicLinkEventStat> | null;
	}


	/**
	 * Request for iSDK to execute strong match flow for post-install attribution.
	 * This is meant for iOS requests only. Requests from other platforms will
	 * not be honored.
	 */
	export interface GetIosPostInstallAttributionRequest {

		/**
		 * App installation epoch time (https://en.wikipedia.org/wiki/Unix_time).
		 * This is a client signal for a more accurate weak match.
		 */
		appInstallationTime?: string | null;

		/** APP bundle ID. */
		bundleId?: string | null;

		/** Signals associated with the device making the request. */
		device?: DeviceInfo | null;

		/**
		 * iOS version, ie: 9.3.5.
		 * Consider adding "build".
		 */
		iosVersion?: string | null;

		/**
		 * App post install attribution retrieval information. Disambiguates
		 * mechanism (iSDK or developer invoked) to retrieve payload from
		 * clicked link.
		 */
		retrievalMethod?: GetIosPostInstallAttributionRequestRetrievalMethod | null;

		/** Google SDK version. Version takes the form "$major.$minor.$patch" */
		sdkVersion?: string | null;

		/**
		 * Possible unique matched link that server need to check before performing
		 * fingerprint match. If passed link is short server need to expand the link.
		 * If link is long server need to vslidate the link.
		 */
		uniqueMatchLinkToCheck?: string | null;

		/**
		 * Strong match page information. Disambiguates between default UI and
		 * custom page to present when strong match succeeds/fails to find cookie.
		 */
		visualStyle?: GetIosPostInstallAttributionRequestVisualStyle | null;
	}

	export enum GetIosPostInstallAttributionRequestRetrievalMethod { UNKNOWN_PAYLOAD_RETRIEVAL_METHOD = 0, IMPLICIT_WEAK_MATCH = 1, EXPLICIT_WEAK_MATCH = 2, EXPLICIT_STRONG_AFTER_WEAK_MATCH = 3 }

	export enum GetIosPostInstallAttributionRequestVisualStyle { UNKNOWN_VISUAL_STYLE = 0, DEFAULT_STYLE = 1, CUSTOM_STYLE = 2 }


	/** Response for iSDK to execute strong match flow for post-install attribution. */
	export interface GetIosPostInstallAttributionResponse {

		/**
		 * The minimum version for app, specified by dev through ?imv= parameter.
		 * Return to iSDK to allow app to evaluate if current version meets this.
		 */
		appMinimumVersion?: string | null;

		/** The confidence of the returned attribution. */
		attributionConfidence?: GetIosPostInstallAttributionResponseAttributionConfidence | null;

		/**
		 * The deep-link attributed post-install via one of several techniques
		 * (fingerprint, copy unique).
		 */
		deepLink?: string | null;

		/**
		 * User-agent specific custom-scheme URIs for iSDK to open. This will be set
		 * according to the user-agent tha the click was originally made in. There is
		 * no Safari-equivalent custom-scheme open URLs.
		 * ie: googlechrome://www.example.com
		 * ie: firefox://open-url?url=http://www.example.com
		 * ie: opera-http://example.com
		 */
		externalBrowserDestinationLink?: string | null;

		/**
		 * The link to navigate to update the app if min version is not met.
		 * This is either (in order): 1) fallback link (from ?ifl= parameter, if
		 * specified by developer) or 2) AppStore URL (from ?isi= parameter, if
		 * specified), or 3) the payload link (from required link= parameter).
		 */
		fallbackLink?: string | null;

		/**
		 * Invitation ID attributed post-install via one of several techniques
		 * (fingerprint, copy unique).
		 */
		invitationId?: string | null;

		/**
		 * Instruction for iSDK to attemmpt to perform strong match. For instance,
		 * if browser does not support/allow cookie or outside of support browsers,
		 * this will be false.
		 */
		isStrongMatchExecutable?: boolean | null;

		/**
		 * Describes why match failed, ie: "discarded due to low confidence".
		 * This message will be publicly visible.
		 */
		matchMessage?: string | null;

		/** Which IP version the request was made from. */
		requestIpVersion?: GetIosPostInstallAttributionResponseRequestIpVersion | null;

		/**
		 * Entire FDL (short or long) attributed post-install via one of several
		 * techniques (fingerprint, copy unique).
		 */
		requestedLink?: string | null;

		/**
		 * The entire FDL, expanded from a short link. It is the same as the
		 * requested_link, if it is long. Parameters from this should not be
		 * used directly (ie: server can default utm_[campaign|medium|source]
		 * to a value when requested_link lack them, server determine the best
		 * fallback_link when requested_link specifies >1 fallback links).
		 */
		resolvedLink?: string | null;

		/** Scion campaign value to be propagated by iSDK to Scion at post-install. */
		utmCampaign?: string | null;

		/** Scion content value to be propagated by iSDK to Scion at app-reopen. */
		utmContent?: string | null;

		/** Scion medium value to be propagated by iSDK to Scion at post-install. */
		utmMedium?: string | null;

		/** Scion source value to be propagated by iSDK to Scion at post-install. */
		utmSource?: string | null;

		/** Scion term value to be propagated by iSDK to Scion at app-reopen. */
		utmTerm?: string | null;
	}

	export enum GetIosPostInstallAttributionResponseAttributionConfidence { UNKNOWN_ATTRIBUTION_CONFIDENCE = 0, WEAK = 1, DEFAULT = 2, UNIQUE = 3 }

	export enum GetIosPostInstallAttributionResponseRequestIpVersion { UNKNOWN_IP_VERSION = 0, IP_V4 = 1, IP_V6 = 2 }


	/**
	 * Request for iSDK to get reopen attribution for app universal link open
	 * deeplinking. This endpoint is meant for only iOS requests.
	 */
	export interface GetIosReopenAttributionRequest {

		/** APP bundle ID. */
		bundleId?: string | null;

		/**
		 * FDL link to be verified from an app universal link open.
		 * The FDL link can be one of:
		 * 1) short FDL.
		 * e.g. <app_code>.page.link/<ddl_id>, or
		 * 2) long FDL.
		 * e.g. <app_code>.page.link/?{query params}, or
		 * 3) Invite FDL.
		 * e.g. <app_code>.page.link/i/<invite_id_or_alias>
		 */
		requestedLink?: string | null;

		/** Google SDK version. Version takes the form "$major.$minor.$patch" */
		sdkVersion?: string | null;
	}


	/**
	 * Response for iSDK to get reopen attribution for app universal link open
	 * deeplinking. This endpoint is meant for only iOS requests.
	 */
	export interface GetIosReopenAttributionResponse {

		/**
		 * The deep-link attributed the app universal link open. For both regular
		 * FDL links and invite FDL links.
		 */
		deepLink?: string | null;

		/** Optional invitation ID, for only invite typed requested FDL links. */
		invitationId?: string | null;

		/**
		 * FDL input value of the "&imv=" parameter, minimum app version to be
		 * returned to Google Firebase SDK running on iOS-9.
		 */
		iosMinAppVersion?: string | null;

		/**
		 * The entire FDL, expanded from a short link. It is the same as the
		 * requested_link, if it is long.
		 */
		resolvedLink?: string | null;

		/** Scion campaign value to be propagated by iSDK to Scion at app-reopen. */
		utmCampaign?: string | null;

		/** Scion content value to be propagated by iSDK to Scion at app-reopen. */
		utmContent?: string | null;

		/** Scion medium value to be propagated by iSDK to Scion at app-reopen. */
		utmMedium?: string | null;

		/** Scion source value to be propagated by iSDK to Scion at app-reopen. */
		utmSource?: string | null;

		/** Scion term value to be propagated by iSDK to Scion at app-reopen. */
		utmTerm?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get iOS strong/weak-match info for post-install attribution.
		 * Post v1/installAttribution
		 * @return {void} Successful response
		 */
		Firebasedynamiclinks_installAttribution(requestBody: GetIosPostInstallAttributionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/installAttribution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a managed short Dynamic Link given either a valid long Dynamic Link
		 * or details such as Dynamic Link domain, Android and iOS app information.
		 * The created short Dynamic Link will not expire.
		 * This differs from CreateShortDynamicLink in the following ways:
		 * - The request will also contain a name for the link (non unique name
		 * for the front end).
		 * - The response must be authenticated with an auth token (generated with
		 * the admin service account).
		 * - The link will appear in the FDL list of links in the console front end.
		 * The Dynamic Link domain in the request must be owned by requester's
		 * Firebase project.
		 * Post v1/managedShortLinks:create
		 * @return {void} Successful response
		 */
		Firebasedynamiclinks_managedShortLinks_create(requestBody: CreateManagedShortLinkRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/managedShortLinks:create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get iOS reopen attribution for app universal link open deeplinking.
		 * Post v1/reopenAttribution
		 * @return {void} Successful response
		 */
		Firebasedynamiclinks_reopenAttribution(requestBody: GetIosReopenAttributionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/reopenAttribution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a short Dynamic Link given either a valid long Dynamic Link or
		 * details such as Dynamic Link domain, Android and iOS app information.
		 * The created short Dynamic Link will not expire.
		 * Repeated calls with the same long Dynamic Link or Dynamic Link information
		 * will produce the same short Dynamic Link.
		 * The Dynamic Link domain in the request must be owned by requester's
		 * Firebase project.
		 * Post v1/shortLinks
		 * @return {void} Successful response
		 */
		Firebasedynamiclinks_shortLinks_create(requestBody: CreateShortDynamicLinkRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/shortLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches analytics stats of a short Dynamic Link for a given
		 * duration. Metrics include number of clicks, redirects, installs,
		 * app first opens, and app reopens.
		 * Get v1/{dynamicLink}/linkStats
		 * @param {string} dynamicLink Dynamic Link URL. e.g. https://abcd.app.goo.gl/wxyz
		 * @param {string} durationDays The span of time requested in days.
		 * @param {string} sdkVersion Google SDK version. Version takes the form "$major.$minor.$patch"
		 * @return {void} Successful response
		 */
		Firebasedynamiclinks_getLinkStats(dynamicLink: string, durationDays: string, sdkVersion: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (dynamicLink == null ? '' : encodeURIComponent(dynamicLink)) + '/linkStats&durationDays=' + (durationDays == null ? '' : encodeURIComponent(durationDays)) + '&sdkVersion=' + (sdkVersion == null ? '' : encodeURIComponent(sdkVersion)), { observe: 'response', responseType: 'text' });
		}
	}

}

