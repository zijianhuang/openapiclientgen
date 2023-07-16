import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Account {

		/** Unique identifier of this account. */
		id?: string;

		/** Kind of resource this is, in this case adsensehost#account. */
		kind?: string;

		/** Name of this account. */
		name?: string;

		/** Approval status of this account. One of: PENDING, APPROVED, DISABLED. */
		status?: string;
	}

	export interface Accounts {

		/** ETag of this response for caching purposes. */
		etag?: string;

		/** The accounts returned in this list response. */
		items?: Array<Account>;

		/** Kind of list this is, in this case adsensehost#accounts. */
		kind?: string;
	}

	export interface AdClient {

		/** Whether this ad client is opted in to ARC. */
		arcOptIn?: boolean;

		/** Unique identifier of this ad client. */
		id?: string;

		/** Kind of resource this is, in this case adsensehost#adClient. */
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

		/** Kind of list this is, in this case adsensehost#adClients. */
		kind?: string;

		/** Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string;
	}

	export interface AdCode {

		/** The ad code snippet. */
		adCode?: string;

		/** Kind this is, in this case adsensehost#adCode. */
		kind?: string;
	}

	export interface AdStyle {

		/** The colors included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash. */
		colors?: AdStyleColors;

		/** The style of the corners in the ad (deprecated: never populated, ignored). */
		corners?: string;

		/** The font which is included in the style. */
		font?: AdStyleFont;

		/** Kind this is, in this case adsensehost#adStyle. */
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

		/** The family of the font. Possible values are: ACCOUNT_DEFAULT_FAMILY, ADSENSE_DEFAULT_FAMILY, ARIAL, TIMES and VERDANA. */
		family?: string;

		/** The size of the font. Possible values are: ACCOUNT_DEFAULT_SIZE, ADSENSE_DEFAULT_SIZE, SMALL, MEDIUM and LARGE. */
		size?: string;
	}

	export interface AdUnit {

		/** Identity code of this ad unit, not necessarily unique across ad clients. */
		code?: string;

		/** Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated). */
		contentAdsSettings?: AdUnitContentAdsSettings;
		customStyle?: AdStyle;

		/** Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
		id?: string;

		/** Kind of resource this is, in this case adsensehost#adUnit. */
		kind?: string;

		/** Settings specific to WAP mobile content ads (AFMC - deprecated). */
		mobileContentAdsSettings?: AdUnitMobileContentAdsSettings;

		/** Name of this ad unit. */
		name?: string;

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

		/** Size of this ad unit. Size values are in the form SIZE_{width}_{height}. */
		size?: string;

		/** Type of this ad unit. Possible values are TEXT, TEXT_IMAGE, IMAGE and LINK. */
		type?: string;
	}

	export interface AdUnitContentAdsSettingsBackupOption {

		/** Color to use when type is set to COLOR. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash. */
		color?: string;

		/** Type of the backup option. Possible values are BLANK, COLOR and URL. */
		type?: string;

		/** URL to use when type is set to URL. */
		url?: string;
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

		/** Kind of list this is, in this case adsensehost#adUnits. */
		kind?: string;

		/** Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string;
	}

	export interface AssociationSession {

		/** Hosted account id of the associated publisher after association. Present if status is ACCEPTED. */
		accountId?: string;

		/** Unique identifier of this association session. */
		id?: string;

		/** Kind of resource this is, in this case adsensehost#associationSession. */
		kind?: string;

		/** The products to associate with the user. Options: AFC, AFG, AFV, AFS (deprecated), AFMC (deprecated) */
		productCodes?: Array<string>;

		/** Redirect URL of this association session. Used to redirect users into the AdSense association flow. */
		redirectUrl?: string;

		/** Status of the completed association, available once the association callback token has been verified. One of ACCEPTED, REJECTED, or ERROR. */
		status?: string;

		/** The preferred locale of the user themselves when going through the AdSense association flow. */
		userLocale?: string;

		/** The locale of the user's hosted website. */
		websiteLocale?: string;

		/** The URL of the user's hosted website. */
		websiteUrl?: string;
	}

	export interface CustomChannel {

		/** Code of this custom channel, not necessarily unique across ad clients. */
		code?: string;

		/** Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
		id?: string;

		/** Kind of resource this is, in this case adsensehost#customChannel. */
		kind?: string;

		/** Name of this custom channel. */
		name?: string;
	}

	export interface CustomChannels {

		/** ETag of this response for caching purposes. */
		etag?: string;

		/** The custom channels returned in this list response. */
		items?: Array<CustomChannel>;

		/** Kind of list this is, in this case adsensehost#customChannels. */
		kind?: string;

		/** Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string;
	}

	export interface Report {

		/** The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty. */
		averages?: Array<string>;

		/** The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request. */
		ReportHeaders?: Array<ReportHeaders>;

		/** Kind this is, in this case adsensehost#report. */
		kind?: string;

		/** The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers. */
		rows?: Array<string>;

		/** The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit. */
		totalMatchedRows?: string;

		/** The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty. */
		totals?: Array<string>;

		/** Any warnings associated with generation of the report. */
		warnings?: Array<string>;
	}

	export interface ReportHeaders {

		/** The currency of this column. Only present if the header type is METRIC_CURRENCY. */
		currency?: string;

		/** The name of the header. */
		name?: string;

		/** The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY. */
		type?: string;
	}

	export interface UrlChannel {

		/** Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
		id?: string;

		/** Kind of resource this is, in this case adsensehost#urlChannel. */
		kind?: string;

		/** URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home */
		urlPattern?: string;
	}

	export interface UrlChannels {

		/** ETag of this response for caching purposes. */
		etag?: string;

		/** The URL channels returned in this list response. */
		items?: Array<UrlChannel>;

		/** Kind of list this is, in this case adsensehost#urlChannels. */
		kind?: string;

		/** Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List hosted accounts associated with this AdSense account by ad client id.
		 * Get accounts
		 * @param {Array<string>} filterAdClientId Ad clients to list accounts for.
		 * @return {void} Successful response
		 */
		Adsensehost_accounts_list(filterAdClientId: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts?' + filterAdClientId.map(z => `filterAdClientId=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about the selected associated AdSense account.
		 * Get accounts/{accountId}
		 * @param {string} accountId Account to get information about.
		 * @return {void} Successful response
		 */
		Adsensehost_accounts_get(accountId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all hosted ad clients in the specified hosted account.
		 * Get accounts/{accountId}/adclients
		 * @param {string} accountId Account for which to list ad clients.
		 * @param {number} maxResults The maximum number of ad clients to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsensehost_accounts_adclients_list(accountId: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about one of the ad clients in the specified publisher's AdSense account.
		 * Get accounts/{accountId}/adclients/{adClientId}
		 * @param {string} accountId Account which contains the ad client.
		 * @param {string} adClientId Ad client to get.
		 * @return {void} Successful response
		 */
		Adsensehost_accounts_adclients_get(accountId: string, adClientId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all ad units in the specified publisher's AdSense account.
		 * Get accounts/{accountId}/adclients/{adClientId}/adunits
		 * @param {string} accountId Account which contains the ad client.
		 * @param {string} adClientId Ad client for which to list ad units.
		 * @param {boolean} includeInactive Whether to include inactive ad units. Default: true.
		 * @param {number} maxResults The maximum number of ad units to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsensehost_accounts_adunits_list(accountId: string, adClientId: string, includeInactive: boolean, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits&includeInactive=' + includeInactive + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
		 * Patch accounts/{accountId}/adclients/{adClientId}/adunits
		 * @param {string} accountId Account which contains the ad client.
		 * @param {string} adClientId Ad client which contains the ad unit.
		 * @param {string} adUnitId Ad unit to get.
		 * @return {void} Successful response
		 */
		Adsensehost_accounts_adunits_patch(accountId: string, adClientId: string, adUnitId: string, requestBody: AdUnit): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits&adUnitId=' + (adUnitId == null ? '' : encodeURIComponent(adUnitId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Insert the supplied ad unit into the specified publisher AdSense account.
		 * Post accounts/{accountId}/adclients/{adClientId}/adunits
		 * @param {string} accountId Account which will contain the ad unit.
		 * @param {string} adClientId Ad client into which to insert the ad unit.
		 * @return {void} Successful response
		 */
		Adsensehost_accounts_adunits_insert(accountId: string, adClientId: string, requestBody: AdUnit): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the supplied ad unit in the specified publisher AdSense account.
		 * Put accounts/{accountId}/adclients/{adClientId}/adunits
		 * @param {string} accountId Account which contains the ad client.
		 * @param {string} adClientId Ad client which contains the ad unit.
		 * @return {void} Successful response
		 */
		Adsensehost_accounts_adunits_update(accountId: string, adClientId: string, requestBody: AdUnit): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the specified ad unit from the specified publisher AdSense account.
		 * Delete accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}
		 * @param {string} accountId Account which contains the ad unit.
		 * @param {string} adClientId Ad client for which to get ad unit.
		 * @param {string} adUnitId Ad unit to delete.
		 * @return {void} Successful response
		 */
		Adsensehost_accounts_adunits_delete(accountId: string, adClientId: string, adUnitId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits/' + (adUnitId == null ? '' : encodeURIComponent(adUnitId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the specified host ad unit in this AdSense account.
		 * Get accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}
		 * @param {string} accountId Account which contains the ad unit.
		 * @param {string} adClientId Ad client for which to get ad unit.
		 * @param {string} adUnitId Ad unit to get.
		 * @return {void} Successful response
		 */
		Adsensehost_accounts_adunits_get(accountId: string, adClientId: string, adUnitId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits/' + (adUnitId == null ? '' : encodeURIComponent(adUnitId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get ad code for the specified ad unit, attaching the specified host custom channels.
		 * Get accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/adcode
		 * @param {string} accountId Account which contains the ad client.
		 * @param {string} adClientId Ad client with contains the ad unit.
		 * @param {string} adUnitId Ad unit to get the code for.
		 * @param {Array<string>} hostCustomChannelId Host custom channel to attach to the ad code.
		 * @return {void} Successful response
		 */
		Adsensehost_accounts_adunits_getAdCode(accountId: string, adClientId: string, adUnitId: string, hostCustomChannelId: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits/' + (adUnitId == null ? '' : encodeURIComponent(adUnitId)) + '/adcode&' + hostCustomChannelId.map(z => `hostCustomChannelId=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
		 * Get accounts/{accountId}/reports
		 * @param {string} accountId Hosted account upon which to report.
		 * @param {string} startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
		 * @param {string} endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
		 * @param {Array<string>} dimension Dimensions to base the report on.
		 * @param {Array<string>} filter Filters to be run on the report.
		 * @param {string} locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
		 * @param {number} maxResults The maximum number of rows of report data to return.
		 * @param {Array<string>} metric Numeric columns to include in the report.
		 * @param {Array<string>} sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
		 * @param {number} startIndex Index of the first row of report data to return.
		 * @return {void} Successful response
		 */
		Adsensehost_accounts_reports_generate(accountId: string, startDate: string, endDate: string, dimension: Array<string>, filter: Array<string>, locale: string, maxResults: number, metric: Array<string>, sort: Array<string>, startIndex: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/reports&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&' + dimension.map(z => `dimension=${encodeURIComponent(z)}`).join('&') + '&' + filter.map(z => `filter=${encodeURIComponent(z)}`).join('&') + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxResults=' + maxResults + '&' + metric.map(z => `metric=${encodeURIComponent(z)}`).join('&') + '&' + sort.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&startIndex=' + startIndex, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all host ad clients in this AdSense account.
		 * Get adclients
		 * @param {number} maxResults The maximum number of ad clients to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsensehost_adclients_list(maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'adclients?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about one of the ad clients in the Host AdSense account.
		 * Get adclients/{adClientId}
		 * @param {string} adClientId Ad client to get.
		 * @return {void} Successful response
		 */
		Adsensehost_adclients_get(adClientId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all host custom channels in this AdSense account.
		 * Get adclients/{adClientId}/customchannels
		 * @param {string} adClientId Ad client for which to list custom channels.
		 * @param {number} maxResults The maximum number of custom channels to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsensehost_customchannels_list(adClientId: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a custom channel in the host AdSense account. This method supports patch semantics.
		 * Patch adclients/{adClientId}/customchannels
		 * @param {string} adClientId Ad client in which the custom channel will be updated.
		 * @param {string} customChannelId Custom channel to get.
		 * @return {void} Successful response
		 */
		Adsensehost_customchannels_patch(adClientId: string, customChannelId: string, requestBody: CustomChannel): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels&customChannelId=' + (customChannelId == null ? '' : encodeURIComponent(customChannelId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a new custom channel to the host AdSense account.
		 * Post adclients/{adClientId}/customchannels
		 * @param {string} adClientId Ad client to which the new custom channel will be added.
		 * @return {void} Successful response
		 */
		Adsensehost_customchannels_insert(adClientId: string, requestBody: CustomChannel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a custom channel in the host AdSense account.
		 * Put adclients/{adClientId}/customchannels
		 * @param {string} adClientId Ad client in which the custom channel will be updated.
		 * @return {void} Successful response
		 */
		Adsensehost_customchannels_update(adClientId: string, requestBody: CustomChannel): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a specific custom channel from the host AdSense account.
		 * Delete adclients/{adClientId}/customchannels/{customChannelId}
		 * @param {string} adClientId Ad client from which to delete the custom channel.
		 * @param {string} customChannelId Custom channel to delete.
		 * @return {void} Successful response
		 */
		Adsensehost_customchannels_delete(adClientId: string, customChannelId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels/' + (customChannelId == null ? '' : encodeURIComponent(customChannelId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific custom channel from the host AdSense account.
		 * Get adclients/{adClientId}/customchannels/{customChannelId}
		 * @param {string} adClientId Ad client from which to get the custom channel.
		 * @param {string} customChannelId Custom channel to get.
		 * @return {void} Successful response
		 */
		Adsensehost_customchannels_get(adClientId: string, customChannelId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels/' + (customChannelId == null ? '' : encodeURIComponent(customChannelId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all host URL channels in the host AdSense account.
		 * Get adclients/{adClientId}/urlchannels
		 * @param {string} adClientId Ad client for which to list URL channels.
		 * @param {number} maxResults The maximum number of URL channels to include in the response, used for paging.
		 * @param {string} pageToken A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {void} Successful response
		 */
		Adsensehost_urlchannels_list(adClientId: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/urlchannels&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a new URL channel to the host AdSense account.
		 * Post adclients/{adClientId}/urlchannels
		 * @param {string} adClientId Ad client to which the new URL channel will be added.
		 * @return {void} Successful response
		 */
		Adsensehost_urlchannels_insert(adClientId: string, requestBody: UrlChannel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/urlchannels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a URL channel from the host AdSense account.
		 * Delete adclients/{adClientId}/urlchannels/{urlChannelId}
		 * @param {string} adClientId Ad client from which to delete the URL channel.
		 * @param {string} urlChannelId URL channel to delete.
		 * @return {void} Successful response
		 */
		Adsensehost_urlchannels_delete(adClientId: string, urlChannelId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/urlchannels/' + (urlChannelId == null ? '' : encodeURIComponent(urlChannelId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create an association session for initiating an association with an AdSense user.
		 * Get associationsessions/start
		 * @param {Array<string>} productCode Products to associate with the user.
		 * @param {string} websiteUrl The URL of the user's hosted website.
		 * @param {string} callbackUrl The URL to redirect the user to once association is completed. It receives a token parameter that can then be used to retrieve the associated account.
		 * @param {string} userLocale The preferred locale of the user.
		 * @param {string} websiteLocale The locale of the user's hosted website.
		 * @return {void} Successful response
		 */
		Adsensehost_associationsessions_start(productCode: Array<string>, websiteUrl: string, callbackUrl: string, userLocale: string, websiteLocale: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'associationsessions/start?' + productCode.map(z => `productCode=${encodeURIComponent(z)}`).join('&') + '&websiteUrl=' + (websiteUrl == null ? '' : encodeURIComponent(websiteUrl)) + '&callbackUrl=' + (callbackUrl == null ? '' : encodeURIComponent(callbackUrl)) + '&userLocale=' + (userLocale == null ? '' : encodeURIComponent(userLocale)) + '&websiteLocale=' + (websiteLocale == null ? '' : encodeURIComponent(websiteLocale)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify an association session after the association callback returns from AdSense signup.
		 * Get associationsessions/verify
		 * @param {string} token The token returned to the association callback URL.
		 * @return {void} Successful response
		 */
		Adsensehost_associationsessions_verify(token: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'associationsessions/verify?token=' + (token == null ? '' : encodeURIComponent(token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
		 * Get reports
		 * @param {string} startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
		 * @param {string} endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
		 * @param {Array<string>} dimension Dimensions to base the report on.
		 * @param {Array<string>} filter Filters to be run on the report.
		 * @param {string} locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
		 * @param {number} maxResults The maximum number of rows of report data to return.
		 * @param {Array<string>} metric Numeric columns to include in the report.
		 * @param {Array<string>} sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
		 * @param {number} startIndex Index of the first row of report data to return.
		 * @return {void} Successful response
		 */
		Adsensehost_reports_generate(startDate: string, endDate: string, dimension: Array<string>, filter: Array<string>, locale: string, maxResults: number, metric: Array<string>, sort: Array<string>, startIndex: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reports?startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&' + dimension.map(z => `dimension=${encodeURIComponent(z)}`).join('&') + '&' + filter.map(z => `filter=${encodeURIComponent(z)}`).join('&') + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxResults=' + maxResults + '&' + metric.map(z => `metric=${encodeURIComponent(z)}`).join('&') + '&' + sort.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&startIndex=' + startIndex, { observe: 'response', responseType: 'text' });
		}
	}

}

