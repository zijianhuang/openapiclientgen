import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Configuration data for an Ad Exchange buyer account. */
	export interface Account {

		/** Your bidder locations that have distinct URLs. */
		AccountBidderLocation?: Array<AccountBidderLocation>;

		/** The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this. */
		cookieMatchingNid?: string | null;

		/** The base URL used in cookie match requests. */
		cookieMatchingUrl?: string | null;

		/** Account id. */
		id?: number | null;

		/** Resource type. */
		kind?: string | null;

		/** The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this. */
		maximumActiveCreatives?: number | null;

		/** The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this. */
		maximumTotalQps?: number | null;

		/** The number of creatives that this account inserted or bid with in the last 30 days. */
		numberActiveCreatives?: number | null;
	}

	/** Configuration data for an Ad Exchange buyer account. */
	export interface AccountFormProperties {

		/** The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this. */
		cookieMatchingNid: FormControl<string | null | undefined>,

		/** The base URL used in cookie match requests. */
		cookieMatchingUrl: FormControl<string | null | undefined>,

		/** Account id. */
		id: FormControl<number | null | undefined>,

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/** The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this. */
		maximumActiveCreatives: FormControl<number | null | undefined>,

		/** The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this. */
		maximumTotalQps: FormControl<number | null | undefined>,

		/** The number of creatives that this account inserted or bid with in the last 30 days. */
		numberActiveCreatives: FormControl<number | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			cookieMatchingNid: new FormControl<string | null | undefined>(undefined),
			cookieMatchingUrl: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			maximumActiveCreatives: new FormControl<number | null | undefined>(undefined),
			maximumTotalQps: new FormControl<number | null | undefined>(undefined),
			numberActiveCreatives: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AccountBidderLocation {

		/** The maximum queries per second the Ad Exchange will send. */
		maximumQps?: number | null;

		/**
		 * The geographical region the Ad Exchange should send requests from. Only used by some quota systems, but always setting the value is recommended. Allowed values:
		 * - ASIA
		 * - EUROPE
		 * - US_EAST
		 * - US_WEST
		 */
		region?: string | null;

		/** The URL to which the Ad Exchange will send bid requests. */
		url?: string | null;
	}
	export interface AccountBidderLocationFormProperties {

		/** The maximum queries per second the Ad Exchange will send. */
		maximumQps: FormControl<number | null | undefined>,

		/**
		 * The geographical region the Ad Exchange should send requests from. Only used by some quota systems, but always setting the value is recommended. Allowed values:
		 * - ASIA
		 * - EUROPE
		 * - US_EAST
		 * - US_WEST
		 */
		region: FormControl<string | null | undefined>,

		/** The URL to which the Ad Exchange will send bid requests. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAccountBidderLocationFormGroup() {
		return new FormGroup<AccountBidderLocationFormProperties>({
			maximumQps: new FormControl<number | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account. */
	export interface AccountsList {

		/** A list of accounts. */
		items?: Array<Account>;

		/** Resource type. */
		kind?: string | null;
	}

	/** An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account. */
	export interface AccountsListFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountsListFormGroup() {
		return new FormGroup<AccountsListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A creative and its classification data. */
	export interface Creative {

		/** The HTML snippet that displays the ad when inserted in the web page. If set, videoURL should not be set. */
		HTMLSnippet?: string | null;

		/** Account id. */
		accountId?: number | null;

		/** Detected advertiser id, if any. Read-only. This field should not be set in requests. */
		advertiserId?: Array<string>;

		/** The name of the company being advertised in the creative. */
		advertiserName?: string | null;

		/** The agency id for this creative. */
		agencyId?: string | null;

		/** The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp). */
		apiUploadTimestamp?: Date | null;

		/** All attributes for the ads that may be shown from this snippet. */
		attribute?: Array<number>;

		/** A buyer-specific id identifying the creative in this ad. */
		buyerCreativeId?: string | null;

		/** The set of destination urls for the snippet. */
		clickThroughUrl?: Array<string>;

		/** Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests. */
		CreativeCorrections?: Array<CreativeCorrections>;

		/** The reasons for disapproval, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue. Read-only. This field should not be set in requests. */
		CreativeDisapprovalReasons?: Array<CreativeDisapprovalReasons>;

		/** The filtering reasons for the creative. Read-only. This field should not be set in requests. */
		filteringReasons?: CreativeFilteringReasons;

		/** Ad height. */
		height?: number | null;

		/** The set of urls to be called to record an impression. */
		impressionTrackingUrl?: Array<string>;

		/** Resource type. */
		kind?: string | null;

		/** Detected product categories, if any. Read-only. This field should not be set in requests. */
		productCategories?: Array<number>;

		/** All restricted categories for the ads that may be shown from this snippet. */
		restrictedCategories?: Array<number>;

		/** Detected sensitive categories, if any. Read-only. This field should not be set in requests. */
		sensitiveCategories?: Array<number>;

		/** Creative serving status. Read-only. This field should not be set in requests. */
		status?: string | null;

		/** All vendor types for the ads that may be shown from this snippet. */
		vendorType?: Array<number>;

		/** The version for this creative. Read-only. This field should not be set in requests. */
		version?: number | null;

		/** The url to fetch a video ad. If set, HTMLSnippet should not be set. */
		videoURL?: string | null;

		/** Ad width. */
		width?: number | null;
	}

	/** A creative and its classification data. */
	export interface CreativeFormProperties {

		/** The HTML snippet that displays the ad when inserted in the web page. If set, videoURL should not be set. */
		HTMLSnippet: FormControl<string | null | undefined>,

		/** Account id. */
		accountId: FormControl<number | null | undefined>,

		/** The name of the company being advertised in the creative. */
		advertiserName: FormControl<string | null | undefined>,

		/** The agency id for this creative. */
		agencyId: FormControl<string | null | undefined>,

		/** The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp). */
		apiUploadTimestamp: FormControl<Date | null | undefined>,

		/** A buyer-specific id identifying the creative in this ad. */
		buyerCreativeId: FormControl<string | null | undefined>,

		/** Ad height. */
		height: FormControl<number | null | undefined>,

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/** Creative serving status. Read-only. This field should not be set in requests. */
		status: FormControl<string | null | undefined>,

		/** The version for this creative. Read-only. This field should not be set in requests. */
		version: FormControl<number | null | undefined>,

		/** The url to fetch a video ad. If set, HTMLSnippet should not be set. */
		videoURL: FormControl<string | null | undefined>,

		/** Ad width. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateCreativeFormGroup() {
		return new FormGroup<CreativeFormProperties>({
			HTMLSnippet: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<number | null | undefined>(undefined),
			advertiserName: new FormControl<string | null | undefined>(undefined),
			agencyId: new FormControl<string | null | undefined>(undefined),
			apiUploadTimestamp: new FormControl<Date | null | undefined>(undefined),
			buyerCreativeId: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
			videoURL: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreativeCorrections {

		/** Additional details about the correction. */
		details?: Array<string>;

		/** The type of correction that was applied to the creative. */
		reason?: string | null;
	}
	export interface CreativeCorrectionsFormProperties {

		/** The type of correction that was applied to the creative. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCreativeCorrectionsFormGroup() {
		return new FormGroup<CreativeCorrectionsFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreativeDisapprovalReasons {

		/** Additional details about the reason for disapproval. */
		details?: Array<string>;

		/** The categorized reason for disapproval. */
		reason?: string | null;
	}
	export interface CreativeDisapprovalReasonsFormProperties {

		/** The categorized reason for disapproval. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCreativeDisapprovalReasonsFormGroup() {
		return new FormGroup<CreativeDisapprovalReasonsFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreativeFilteringReasons {

		/** The date in ISO 8601 format for the data. The data is collected from 00:00:00 to 23:59:59 in PST. */
		date?: string | null;

		/** The filtering reasons. */
		CreativeFilteringReasonsReasons?: Array<CreativeFilteringReasonsReasons>;
	}
	export interface CreativeFilteringReasonsFormProperties {

		/** The date in ISO 8601 format for the data. The data is collected from 00:00:00 to 23:59:59 in PST. */
		date: FormControl<string | null | undefined>,
	}
	export function CreateCreativeFilteringReasonsFormGroup() {
		return new FormGroup<CreativeFilteringReasonsFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreativeFilteringReasonsReasons {

		/** The number of times the creative was filtered for the status. The count is aggregated across all publishers on the exchange. */
		filteringCount?: string | null;

		/** The filtering status code. Please refer to the creative-status-codes.txt file for different statuses. */
		filteringStatus?: number | null;
	}
	export interface CreativeFilteringReasonsReasonsFormProperties {

		/** The number of times the creative was filtered for the status. The count is aggregated across all publishers on the exchange. */
		filteringCount: FormControl<string | null | undefined>,

		/** The filtering status code. Please refer to the creative-status-codes.txt file for different statuses. */
		filteringStatus: FormControl<number | null | undefined>,
	}
	export function CreateCreativeFilteringReasonsReasonsFormGroup() {
		return new FormGroup<CreativeFilteringReasonsReasonsFormProperties>({
			filteringCount: new FormControl<string | null | undefined>(undefined),
			filteringStatus: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative. */
	export interface CreativesList {

		/** A list of creatives. */
		items?: Array<Creative>;

		/** Resource type. */
		kind?: string | null;

		/** Continuation token used to page through creatives. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string | null;
	}

	/** The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative. */
	export interface CreativesListFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/** Continuation token used to page through creatives. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateCreativesListFormGroup() {
		return new FormGroup<CreativesListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves the authenticated user's list of accounts.
		 * Get accounts
		 * @return {AccountsList} Successful response
		 */
		Adexchangebuyer_accounts_list(): Observable<AccountsList> {
			return this.http.get<AccountsList>(this.baseUri + 'accounts', {});
		}

		/**
		 * Gets one account by ID.
		 * Get accounts/{id}
		 * @param {number} id The account id
		 * @return {Account} Successful response
		 */
		Adexchangebuyer_accounts_get(id: number): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'accounts/' + id, {});
		}

		/**
		 * Updates an existing account. This method supports patch semantics.
		 * Patch accounts/{id}
		 * @param {number} id The account id
		 * @return {Account} Successful response
		 */
		Adexchangebuyer_accounts_patch(id: number, requestBody: Account): Observable<Account> {
			return this.http.patch<Account>(this.baseUri + 'accounts/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing account.
		 * Put accounts/{id}
		 * @param {number} id The account id
		 * @return {Account} Successful response
		 */
		Adexchangebuyer_accounts_update(id: number, requestBody: Account): Observable<Account> {
			return this.http.put<Account>(this.baseUri + 'accounts/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
		 * Get creatives
		 * @param {number} maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
		 * @param {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
		 * @param {Adexchangebuyer_creatives_listStatusFilter} statusFilter When specified, only creatives having the given status are returned.
		 * @return {CreativesList} Successful response
		 */
		Adexchangebuyer_creatives_list(maxResults: number | null | undefined, pageToken: string | null | undefined, statusFilter: Adexchangebuyer_creatives_listStatusFilter | null | undefined): Observable<CreativesList> {
			return this.http.get<CreativesList>(this.baseUri + 'creatives?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&statusFilter=' + statusFilter, {});
		}

		/**
		 * Submit a new creative.
		 * Post creatives
		 * @return {Creative} Successful response
		 */
		Adexchangebuyer_creatives_insert(requestBody: Creative): Observable<Creative> {
			return this.http.post<Creative>(this.baseUri + 'creatives', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
		 * Get creatives/{accountId}/{buyerCreativeId}
		 * @param {number} accountId The id for the account that will serve this creative.
		 * @param {string} buyerCreativeId The buyer-specific id for this creative.
		 * @return {Creative} Successful response
		 */
		Adexchangebuyer_creatives_get(accountId: number, buyerCreativeId: string): Observable<Creative> {
			return this.http.get<Creative>(this.baseUri + 'creatives/' + accountId + '/' + (buyerCreativeId == null ? '' : encodeURIComponent(buyerCreativeId)), {});
		}
	}

	export enum Adexchangebuyer_creatives_listStatusFilter { approved = 'approved', disapproved = 'disapproved', not_checked = 'not_checked' }

}

