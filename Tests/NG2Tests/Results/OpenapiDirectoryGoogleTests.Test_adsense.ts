import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Account {
		creation_time?: string;

		/** Unique identifier of this account. */
		id?: string;

		/** Kind of resource this is, in this case adsense#account. */
		kind?: string;

		/** Name of this account. */
		name?: string;

		/** Whether this account is premium. */
		premium?: boolean;

		/** Sub accounts of the this account. */
		subAccounts?: Array<Account>;

		/** AdSense timezone of this account. */
		timezone?: string;
	}

	export interface Accounts {

		/** ETag of this response for caching purposes. */
		etag?: string;

		/** The accounts returned in this list response. */
		items?: Array<Account>;

		/** Kind of list this is, in this case adsense#accounts. */
		kind?: string;

		/** Continuation token used to page through accounts. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string;
	}

	export interface AdClient {

		/** Whether this ad client is opted in to ARC. */
		arcOptIn?: boolean;

		/** Unique identifier of this ad client. */
		id?: string;

		/** Kind of resource this is, in this case adsense#adClient. */
		kind?: string;

		/** This ad client's product code, which corresponds to the PRODUCT_CODE report dimension. */
		productCode?: string;

		/** Whether this ad client supports being reported on. */
		supportsReporting?: boolean;
	}

	export interface AdClients {

		/** ETag of this response for caching purposes. */
		etag?: string;

		/** The ad clients returned in this list response. */
		items?: Array<AdClient>;

		/** Kind of list this is, in this case adsense#adClients. */
		kind?: string;

		/** Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string;
	}

	export interface AdCode {

		/** The Auto ad code snippet. The ad code snippet. */
		adCode?: string;

		/** The AMP Auto ad code snippet that goes in the body of an AMP page. */
		ampBody?: string;

		/** The AMP Auto ad code snippet that goes in the head of an AMP page. */
		ampHead?: string;

		/** Kind this is, in this case adsense#adCode. */
		kind?: string;
	}

	export interface AdStyle {

		/** The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash. */
		colors?: AdStyleColors;

		/** The style of the corners in the ad (deprecated: never populated, ignored). */
		corners?: string;

		/** The font which is included in the style. */
		font?: AdStyleFont;

		/** Kind this is, in this case adsense#adStyle. */
		kind?: string;
	}

	export interface AdStyleColors {

		/** The color of the ad background. */
		background?: string;

		/** The color of the ad border. */
		border?: string;

		/** The color of the ad text. */
		text?: string;

		/** The color of the ad title. */
		title?: string;

		/** The color of the ad url. */
		url?: string;
	}

	export interface AdStyleFont {

		/** The family of the font. */
		family?: string;

		/** The size of the font. */
		size?: string;
	}

	export interface AdUnit {

		/** Identity code of this ad unit, not necessarily unique across ad clients. */
		code?: string;

		/** Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated). */
		contentAdsSettings?: AdUnitContentAdsSettings;
		customStyle?: AdStyle;

		/** Settings specific to feed ads (AFF) - deprecated. */
		feedAdsSettings?: AdUnitFeedAdsSettings;

		/** Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
		id?: string;

		/** Kind of resource this is, in this case adsense#adUnit. */
		kind?: string;

		/** Settings specific to WAP mobile content ads (AFMC) - deprecated. */
		mobileContentAdsSettings?: AdUnitMobileContentAdsSettings;

		/** Name of this ad unit. */
		name?: string;

		/** ID of the saved ad style which holds this ad unit's style information. */
		savedStyleId?: string;

		/**
		 * Status of this ad unit. Possible values are:
		 * NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.
		 * ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.
		 * INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.
		 */
		status?: string;
	}

	export interface AdUnitContentAdsSettings {

		/** The backup option to be used in instances where no ad is available. */
		backupOption?: AdUnitContentAdsSettingsBackupOption;

		/** Size of this ad unit. */
		size?: string;

		/** Type of this ad unit. */
		type?: string;
	}

	export interface AdUnitContentAdsSettingsBackupOption {

		/** Color to use when type is set to COLOR. */
		color?: string;

		/** Type of the backup option. Possible values are BLANK, COLOR and URL. */
		type?: string;

		/** URL to use when type is set to URL. */
		url?: string;
	}

	export interface AdUnitFeedAdsSettings {

		/** The position of the ads relative to the feed entries. */
		adPosition?: string;

		/** The frequency at which ads should appear in the feed (i.e. every N entries). */
		frequency?: number;

		/** The minimum length an entry should be in order to have attached ads. */
		minimumWordCount?: number;

		/** The type of ads which should appear. */
		type?: string;
	}

	export interface AdUnitMobileContentAdsSettings {

		/** The markup language to use for this ad unit. */
		markupLanguage?: string;

		/** The scripting language to use for this ad unit. */
		scriptingLanguage?: string;

		/** Size of this ad unit. */
		size?: string;

		/** Type of this ad unit. */
		type?: string;
	}

	export interface AdUnits {

		/** ETag of this response for caching purposes. */
		etag?: string;

		/** The ad units returned in this list response. */
		items?: Array<AdUnit>;

		/** Kind of list this is, in this case adsense#adUnits. */
		kind?: string;

		/** Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string;
	}

	export interface AdsenseReportsGenerateResponse {

		/** The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty. */
		averages?: Array<string>;

		/** The requested end date in yyyy-mm-dd format. */
		endDate?: string;

		/** The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request. */
		AdsenseReportsGenerateResponseHeaders?: Array<AdsenseReportsGenerateResponseHeaders>;

		/** Kind this is, in this case adsense#report. */
		kind?: string;

		/** The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers. */
		rows?: Array<string>;

		/** The requested start date in yyyy-mm-dd format. */
		startDate?: string;

		/** The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit. */
		totalMatchedRows?: string;

		/** The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty. */
		totals?: Array<string>;

		/** Any warnings associated with generation of the report. */
		warnings?: Array<string>;
	}

	export interface AdsenseReportsGenerateResponseHeaders {

		/** The currency of this column. Only present if the header type is METRIC_CURRENCY. */
		currency?: string;

		/** The name of the header. */
		name?: string;

		/** The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY. */
		type?: string;
	}

	export interface Alert {

		/** Unique identifier of this alert. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
		id?: string;

		/** Whether this alert can be dismissed. */
		isDismissible?: boolean;

		/** Kind of resource this is, in this case adsense#alert. */
		kind?: string;

		/** The localized alert message. */
		message?: string;

		/** Severity of this alert. Possible values: INFO, WARNING, SEVERE. */
		severity?: string;

		/** Type of this alert. Possible values: SELF_HOLD, MIGRATED_TO_BILLING3, ADDRESS_PIN_VERIFICATION, PHONE_PIN_VERIFICATION, CORPORATE_ENTITY, GRAYLISTED_PUBLISHER, API_HOLD. */
		type?: string;
	}

	export interface Alerts {

		/** The alerts returned in this list response. */
		items?: Array<Alert>;

		/** Kind of list this is, in this case adsense#alerts. */
		kind?: string;
	}

	export interface CustomChannel {

		/** Code of this custom channel, not necessarily unique across ad clients. */
		code?: string;

		/** Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
		id?: string;

		/** Kind of resource this is, in this case adsense#customChannel. */
		kind?: string;

		/** Name of this custom channel. */
		name?: string;

		/** The targeting information of this custom channel, if activated. */
		targetingInfo?: CustomChannelTargetingInfo;
	}

	export interface CustomChannelTargetingInfo {

		/** The name used to describe this channel externally. */
		adsAppearOn?: string;

		/** The external description of the channel. */
		description?: string;

		/** The locations in which ads appear. (Only valid for content and mobile content ads (deprecated)). Acceptable values for content ads are: TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, MIDDLE_CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT, MULTIPLE_LOCATIONS. Acceptable values for mobile content ads (deprecated) are: TOP, MIDDLE, BOTTOM, MULTIPLE_LOCATIONS. */
		location?: string;

		/** The language of the sites ads will be displayed on. */
		siteLanguage?: string;
	}

	export interface CustomChannels {

		/** ETag of this response for caching purposes. */
		etag?: string;

		/** The custom channels returned in this list response. */
		items?: Array<CustomChannel>;

		/** Kind of list this is, in this case adsense#customChannels. */
		kind?: string;

		/** Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string;
	}

	export interface Metadata {
		items?: Array<ReportingMetadataEntry>;

		/** Kind of list this is, in this case adsense#metadata. */
		kind?: string;
	}

	export interface ReportingMetadataEntry {

		/** For metrics this is a list of dimension IDs which the metric is compatible with, for dimensions it is a list of compatibility groups the dimension belongs to. */
		compatibleDimensions?: Array<string>;

		/** The names of the metrics the dimension or metric this reporting metadata entry describes is compatible with. */
		compatibleMetrics?: Array<string>;

		/** Unique identifier of this reporting metadata entry, corresponding to the name of the appropriate dimension or metric. */
		id?: string;

		/** Kind of resource this is, in this case adsense#reportingMetadataEntry. */
		kind?: string;

		/** The names of the dimensions which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted. */
		requiredDimensions?: Array<string>;

		/** The names of the metrics which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted. */
		requiredMetrics?: Array<string>;

		/** The codes of the projects supported by the dimension or metric this reporting metadata entry describes. */
		supportedProducts?: Array<string>;
	}

	export interface Payment {

		/** Unique identifier of this Payment. */
		id?: string;

		/** Kind of resource this is, in this case adsense#payment. */
		kind?: string;

		/** The amount to be paid. */
		paymentAmount?: string;

		/** The currency code for the amount to be paid. */
		paymentAmountCurrencyCode?: string;

		/** The date this payment was/will be credited to the user, or none if the payment threshold has not been met. */
		paymentDate?: string;
	}

	export interface Payments {

		/** The list of Payments for the account. One or both of a) the account's most recent payment; and b) the account's upcoming payment. */
		items?: Array<Payment>;

		/** Kind of list this is, in this case adsense#payments. */
		kind?: string;
	}

	export interface SavedAdStyle {
		adStyle?: AdStyle;

		/** Unique identifier of this saved ad style. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
		id?: string;

		/** Kind of resource this is, in this case adsense#savedAdStyle. */
		kind?: string;

		/** The user selected name of this SavedAdStyle. */
		name?: string;
	}

	export interface SavedAdStyles {

		/** ETag of this response for caching purposes. */
		etag?: string;

		/** The saved ad styles returned in this list response. */
		items?: Array<SavedAdStyle>;

		/** Kind of list this is, in this case adsense#savedAdStyles. */
		kind?: string;

		/** Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string;
	}

	export interface SavedReport {

		/** Unique identifier of this saved report. */
		id?: string;

		/** Kind of resource this is, in this case adsense#savedReport. */
		kind?: string;

		/** This saved report's name. */
		name?: string;
	}

	export interface SavedReports {

		/** ETag of this response for caching purposes. */
		etag?: string;

		/** The saved reports returned in this list response. */
		items?: Array<SavedReport>;

		/** Kind of list this is, in this case adsense#savedReports. */
		kind?: string;

		/** Continuation token used to page through saved reports. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string;
	}

	export interface UrlChannel {

		/** Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
		id?: string;

		/** Kind of resource this is, in this case adsense#urlChannel. */
		kind?: string;

		/** URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home */
		urlPattern?: string;
	}

	export interface UrlChannels {

		/** ETag of this response for caching purposes. */
		etag?: string;

		/** The URL channels returned in this list response. */
		items?: Array<UrlChannel>;

		/** Kind of list this is, in this case adsense#urlChannels. */
		kind?: string;

		/** Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all accounts available to this AdSense account.
		 * Get accounts
		 * @param {number} maxResults The maximum number of accounts to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through accounts. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_accounts_list(maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about the selected AdSense account.
		 * Get accounts/{accountId}
		 * @param {string} accountId Account to get information about.
		 * @param {boolean} tree Whether the tree of sub accounts should be returned.
		 * @return {void} Successful response
		 */
		Adsense_accounts_get(accountId: string, tree: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&tree=' + tree, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all ad clients in the specified account.
		 * Get accounts/{accountId}/adclients
		 * @param {string} accountId Account for which to list ad clients.
		 * @param {number} maxResults The maximum number of ad clients to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_accounts_adclients_list(accountId: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Auto ad code for a given ad client.
		 * Get accounts/{accountId}/adclients/{adClientId}/adcode
		 * @param {string} accountId Account which contains the ad client.
		 * @param {string} adClientId Ad client to get the code for.
		 * @return {void} Successful response
		 */
		Adsense_accounts_adclients_getAdCode(accountId: string, adClientId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adcode', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all ad units in the specified ad client for the specified account.
		 * Get accounts/{accountId}/adclients/{adClientId}/adunits
		 * @param {string} accountId Account to which the ad client belongs.
		 * @param {string} adClientId Ad client for which to list ad units.
		 * @param {boolean} includeInactive Whether to include inactive ad units. Default: true.
		 * @param {number} maxResults The maximum number of ad units to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_accounts_adunits_list(accountId: string, adClientId: string, includeInactive: boolean, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits&includeInactive=' + includeInactive + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified ad unit in the specified ad client for the specified account.
		 * Get accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}
		 * @param {string} accountId Account to which the ad client belongs.
		 * @param {string} adClientId Ad client for which to get the ad unit.
		 * @param {string} adUnitId Ad unit to retrieve.
		 * @return {void} Successful response
		 */
		Adsense_accounts_adunits_get(accountId: string, adClientId: string, adUnitId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits/' + (adUnitId == null ? '' : encodeURIComponent(adUnitId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get ad code for the specified ad unit.
		 * Get accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/adcode
		 * @param {string} accountId Account which contains the ad client.
		 * @param {string} adClientId Ad client with contains the ad unit.
		 * @param {string} adUnitId Ad unit to get the code for.
		 * @return {void} Successful response
		 */
		Adsense_accounts_adunits_getAdCode(accountId: string, adClientId: string, adUnitId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits/' + (adUnitId == null ? '' : encodeURIComponent(adUnitId)) + '/adcode', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all custom channels which the specified ad unit belongs to.
		 * Get accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/customchannels
		 * @param {string} accountId Account to which the ad client belongs.
		 * @param {string} adClientId Ad client which contains the ad unit.
		 * @param {string} adUnitId Ad unit for which to list custom channels.
		 * @param {number} maxResults The maximum number of custom channels to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_accounts_adunits_customchannels_list(accountId: string, adClientId: string, adUnitId: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits/' + (adUnitId == null ? '' : encodeURIComponent(adUnitId)) + '/customchannels&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all custom channels in the specified ad client for the specified account.
		 * Get accounts/{accountId}/adclients/{adClientId}/customchannels
		 * @param {string} accountId Account to which the ad client belongs.
		 * @param {string} adClientId Ad client for which to list custom channels.
		 * @param {number} maxResults The maximum number of custom channels to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_accounts_customchannels_list(accountId: string, adClientId: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the specified custom channel from the specified ad client for the specified account.
		 * Get accounts/{accountId}/adclients/{adClientId}/customchannels/{customChannelId}
		 * @param {string} accountId Account to which the ad client belongs.
		 * @param {string} adClientId Ad client which contains the custom channel.
		 * @param {string} customChannelId Custom channel to retrieve.
		 * @return {void} Successful response
		 */
		Adsense_accounts_customchannels_get(accountId: string, adClientId: string, customChannelId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels/' + (customChannelId == null ? '' : encodeURIComponent(customChannelId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all ad units in the specified custom channel.
		 * Get accounts/{accountId}/adclients/{adClientId}/customchannels/{customChannelId}/adunits
		 * @param {string} accountId Account to which the ad client belongs.
		 * @param {string} adClientId Ad client which contains the custom channel.
		 * @param {string} customChannelId Custom channel for which to list ad units.
		 * @param {boolean} includeInactive Whether to include inactive ad units. Default: true.
		 * @param {number} maxResults The maximum number of ad units to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_accounts_customchannels_adunits_list(accountId: string, adClientId: string, customChannelId: string, includeInactive: boolean, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels/' + (customChannelId == null ? '' : encodeURIComponent(customChannelId)) + '/adunits&includeInactive=' + includeInactive + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all URL channels in the specified ad client for the specified account.
		 * Get accounts/{accountId}/adclients/{adClientId}/urlchannels
		 * @param {string} accountId Account to which the ad client belongs.
		 * @param {string} adClientId Ad client for which to list URL channels.
		 * @param {number} maxResults The maximum number of URL channels to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_accounts_urlchannels_list(accountId: string, adClientId: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/urlchannels&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List the alerts for the specified AdSense account.
		 * Get accounts/{accountId}/alerts
		 * @param {string} accountId Account for which to retrieve the alerts.
		 * @param {string} locale The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
		 * @return {void} Successful response
		 */
		Adsense_accounts_alerts_list(accountId: string, locale: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/alerts&locale=' + (locale == null ? '' : encodeURIComponent(locale)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Dismiss (delete) the specified alert from the specified publisher AdSense account.
		 * Delete accounts/{accountId}/alerts/{alertId}
		 * @param {string} accountId Account which contains the ad unit.
		 * @param {string} alertId Alert to delete.
		 * @return {void} Successful response
		 */
		Adsense_accounts_alerts_delete(accountId: string, alertId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List the payments for the specified AdSense account.
		 * Get accounts/{accountId}/payments
		 * @param {string} accountId Account for which to retrieve the payments.
		 * @return {void} Successful response
		 */
		Adsense_accounts_payments_list(accountId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/payments', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
		 * Get accounts/{accountId}/reports
		 * @param {string} accountId Account upon which to report.
		 * @param {string} startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
		 * @param {string} endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
		 * @param {string} currency Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
		 * @param {Array<string>} dimension Dimensions to base the report on.
		 * @param {Array<string>} filter Filters to be run on the report.
		 * @param {string} locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
		 * @param {number} maxResults The maximum number of rows of report data to return.
		 * @param {Array<string>} metric Numeric columns to include in the report.
		 * @param {Array<string>} sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
		 * @param {number} startIndex Index of the first row of report data to return.
		 * @param {boolean} useTimezoneReporting Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
		 * @return {void} Successful response
		 */
		Adsense_accounts_reports_generate(accountId: string, startDate: string, endDate: string, currency: string, dimension: Array<string>, filter: Array<string>, locale: string, maxResults: number, metric: Array<string>, sort: Array<string>, startIndex: number, useTimezoneReporting: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/reports&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&currency=' + (currency == null ? '' : encodeURIComponent(currency)) + '&' + dimension.map(z => `dimension=${encodeURIComponent(z)}`).join('&') + '&' + filter.map(z => `filter=${encodeURIComponent(z)}`).join('&') + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxResults=' + maxResults + '&' + metric.map(z => `metric=${encodeURIComponent(z)}`).join('&') + '&' + sort.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&startIndex=' + startIndex + '&useTimezoneReporting=' + useTimezoneReporting, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all saved reports in the specified AdSense account.
		 * Get accounts/{accountId}/reports/saved
		 * @param {string} accountId Account to which the saved reports belong.
		 * @param {number} maxResults The maximum number of saved reports to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_accounts_reports_saved_list(accountId: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/reports/saved&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate an AdSense report based on the saved report ID sent in the query parameters.
		 * Get accounts/{accountId}/reports/{savedReportId}
		 * @param {string} accountId Account to which the saved reports belong.
		 * @param {string} savedReportId The saved report to retrieve.
		 * @param {string} locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
		 * @param {number} maxResults The maximum number of rows of report data to return.
		 * @param {number} startIndex Index of the first row of report data to return.
		 * @return {void} Successful response
		 */
		Adsense_accounts_reports_saved_generate(accountId: string, savedReportId: string, locale: string, maxResults: number, startIndex: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/reports/' + (savedReportId == null ? '' : encodeURIComponent(savedReportId)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxResults=' + maxResults + '&startIndex=' + startIndex, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all saved ad styles in the specified account.
		 * Get accounts/{accountId}/savedadstyles
		 * @param {string} accountId Account for which to list saved ad styles.
		 * @param {number} maxResults The maximum number of saved ad styles to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_accounts_savedadstyles_list(accountId: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/savedadstyles&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List a specific saved ad style for the specified account.
		 * Get accounts/{accountId}/savedadstyles/{savedAdStyleId}
		 * @param {string} accountId Account for which to get the saved ad style.
		 * @param {string} savedAdStyleId Saved ad style to retrieve.
		 * @return {void} Successful response
		 */
		Adsense_accounts_savedadstyles_get(accountId: string, savedAdStyleId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/savedadstyles/' + (savedAdStyleId == null ? '' : encodeURIComponent(savedAdStyleId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all ad clients in this AdSense account.
		 * Get adclients
		 * @param {number} maxResults The maximum number of ad clients to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_adclients_list(maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'adclients?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all ad units in the specified ad client for this AdSense account.
		 * Get adclients/{adClientId}/adunits
		 * @param {string} adClientId Ad client for which to list ad units.
		 * @param {boolean} includeInactive Whether to include inactive ad units. Default: true.
		 * @param {number} maxResults The maximum number of ad units to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_adunits_list(adClientId: string, includeInactive: boolean, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits&includeInactive=' + includeInactive + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified ad unit in the specified ad client.
		 * Get adclients/{adClientId}/adunits/{adUnitId}
		 * @param {string} adClientId Ad client for which to get the ad unit.
		 * @param {string} adUnitId Ad unit to retrieve.
		 * @return {void} Successful response
		 */
		Adsense_adunits_get(adClientId: string, adUnitId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits/' + (adUnitId == null ? '' : encodeURIComponent(adUnitId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get ad code for the specified ad unit.
		 * Get adclients/{adClientId}/adunits/{adUnitId}/adcode
		 * @param {string} adClientId Ad client with contains the ad unit.
		 * @param {string} adUnitId Ad unit to get the code for.
		 * @return {void} Successful response
		 */
		Adsense_adunits_getAdCode(adClientId: string, adUnitId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits/' + (adUnitId == null ? '' : encodeURIComponent(adUnitId)) + '/adcode', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all custom channels which the specified ad unit belongs to.
		 * Get adclients/{adClientId}/adunits/{adUnitId}/customchannels
		 * @param {string} adClientId Ad client which contains the ad unit.
		 * @param {string} adUnitId Ad unit for which to list custom channels.
		 * @param {number} maxResults The maximum number of custom channels to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_adunits_customchannels_list(adClientId: string, adUnitId: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits/' + (adUnitId == null ? '' : encodeURIComponent(adUnitId)) + '/customchannels&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all custom channels in the specified ad client for this AdSense account.
		 * Get adclients/{adClientId}/customchannels
		 * @param {string} adClientId Ad client for which to list custom channels.
		 * @param {number} maxResults The maximum number of custom channels to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_customchannels_list(adClientId: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the specified custom channel from the specified ad client.
		 * Get adclients/{adClientId}/customchannels/{customChannelId}
		 * @param {string} adClientId Ad client which contains the custom channel.
		 * @param {string} customChannelId Custom channel to retrieve.
		 * @return {void} Successful response
		 */
		Adsense_customchannels_get(adClientId: string, customChannelId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels/' + (customChannelId == null ? '' : encodeURIComponent(customChannelId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all ad units in the specified custom channel.
		 * Get adclients/{adClientId}/customchannels/{customChannelId}/adunits
		 * @param {string} adClientId Ad client which contains the custom channel.
		 * @param {string} customChannelId Custom channel for which to list ad units.
		 * @param {boolean} includeInactive Whether to include inactive ad units. Default: true.
		 * @param {number} maxResults The maximum number of ad units to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_customchannels_adunits_list(adClientId: string, customChannelId: string, includeInactive: boolean, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels/' + (customChannelId == null ? '' : encodeURIComponent(customChannelId)) + '/adunits&includeInactive=' + includeInactive + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all URL channels in the specified ad client for this AdSense account.
		 * Get adclients/{adClientId}/urlchannels
		 * @param {string} adClientId Ad client for which to list URL channels.
		 * @param {number} maxResults The maximum number of URL channels to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_urlchannels_list(adClientId: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/urlchannels&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List the alerts for this AdSense account.
		 * Get alerts
		 * @param {string} locale The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
		 * @return {void} Successful response
		 */
		Adsense_alerts_list(locale: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'alerts?locale=' + (locale == null ? '' : encodeURIComponent(locale)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Dismiss (delete) the specified alert from the publisher's AdSense account.
		 * Delete alerts/{alertId}
		 * @param {string} alertId Alert to delete.
		 * @return {void} Successful response
		 */
		Adsense_alerts_delete(alertId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List the metadata for the dimensions available to this AdSense account.
		 * Get metadata/dimensions
		 * @return {void} Successful response
		 */
		Adsense_metadata_dimensions_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'metadata/dimensions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List the metadata for the metrics available to this AdSense account.
		 * Get metadata/metrics
		 * @return {void} Successful response
		 */
		Adsense_metadata_metrics_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'metadata/metrics', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List the payments for this AdSense account.
		 * Get payments
		 * @return {void} Successful response
		 */
		Adsense_payments_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'payments', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
		 * Get reports
		 * @param {string} startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
		 * @param {string} endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
		 * @param {Array<string>} accountId Accounts upon which to report.
		 * @param {string} currency Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
		 * @param {Array<string>} dimension Dimensions to base the report on.
		 * @param {Array<string>} filter Filters to be run on the report.
		 * @param {string} locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
		 * @param {number} maxResults The maximum number of rows of report data to return.
		 * @param {Array<string>} metric Numeric columns to include in the report.
		 * @param {Array<string>} sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
		 * @param {number} startIndex Index of the first row of report data to return.
		 * @param {boolean} useTimezoneReporting Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
		 * @return {void} Successful response
		 */
		Adsense_reports_generate(startDate: string, endDate: string, accountId: Array<string>, currency: string, dimension: Array<string>, filter: Array<string>, locale: string, maxResults: number, metric: Array<string>, sort: Array<string>, startIndex: number, useTimezoneReporting: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reports?startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&' + accountId.map(z => `accountId=${encodeURIComponent(z)}`).join('&') + '&currency=' + (currency == null ? '' : encodeURIComponent(currency)) + '&' + dimension.map(z => `dimension=${encodeURIComponent(z)}`).join('&') + '&' + filter.map(z => `filter=${encodeURIComponent(z)}`).join('&') + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxResults=' + maxResults + '&' + metric.map(z => `metric=${encodeURIComponent(z)}`).join('&') + '&' + sort.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&startIndex=' + startIndex + '&useTimezoneReporting=' + useTimezoneReporting, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all saved reports in this AdSense account.
		 * Get reports/saved
		 * @param {number} maxResults The maximum number of saved reports to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_reports_saved_list(maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reports/saved?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate an AdSense report based on the saved report ID sent in the query parameters.
		 * Get reports/{savedReportId}
		 * @param {string} savedReportId The saved report to retrieve.
		 * @param {string} locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
		 * @param {number} maxResults The maximum number of rows of report data to return.
		 * @param {number} startIndex Index of the first row of report data to return.
		 * @return {void} Successful response
		 */
		Adsense_reports_saved_generate(savedReportId: string, locale: string, maxResults: number, startIndex: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reports/' + (savedReportId == null ? '' : encodeURIComponent(savedReportId)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxResults=' + maxResults + '&startIndex=' + startIndex, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all saved ad styles in the user's account.
		 * Get savedadstyles
		 * @param {number} maxResults The maximum number of saved ad styles to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsense_savedadstyles_list(maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'savedadstyles?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific saved ad style from the user's account.
		 * Get savedadstyles/{savedAdStyleId}
		 * @param {string} savedAdStyleId Saved ad style to retrieve.
		 * @return {void} Successful response
		 */
		Adsense_savedadstyles_get(savedAdStyleId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'savedadstyles/' + (savedAdStyleId == null ? '' : encodeURIComponent(savedAdStyleId)), { observe: 'response', responseType: 'text' });
		}
	}

}

