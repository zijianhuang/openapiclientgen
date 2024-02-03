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


	/** The configuration data for an Ad Exchange billing info. */
	export interface BillingInfo {

		/** Account id. */
		accountId?: number | null;

		/** Account name. */
		accountName?: string | null;

		/** A list of adgroup IDs associated with this particular account. These IDs may show up as part of a realtime bidding BidRequest, which indicates a bid request for this account. */
		billingId?: Array<string>;

		/** Resource type. */
		kind?: string | null;
	}

	/** The configuration data for an Ad Exchange billing info. */
	export interface BillingInfoFormProperties {

		/** Account id. */
		accountId: FormControl<number | null | undefined>,

		/** Account name. */
		accountName: FormControl<string | null | undefined>,

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBillingInfoFormGroup() {
		return new FormGroup<BillingInfoFormProperties>({
			accountId: new FormControl<number | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A billing info feed lists Billing Info the Ad Exchange buyer account has access to. Each entry in the feed corresponds to a single billing info. */
	export interface BillingInfoList {

		/** A list of billing info relevant for your account. */
		items?: Array<BillingInfo>;

		/** Resource type. */
		kind?: string | null;
	}

	/** A billing info feed lists Billing Info the Ad Exchange buyer account has access to. Each entry in the feed corresponds to a single billing info. */
	export interface BillingInfoListFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBillingInfoListFormGroup() {
		return new FormGroup<BillingInfoListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration data for Ad Exchange RTB - Budget API. */
	export interface Budget {

		/** The id of the account. This is required for get and update requests. */
		accountId?: string | null;

		/** The billing id to determine which adgroup to provide budget information for. This is required for get and update requests. */
		billingId?: string | null;

		/** The daily budget amount in unit amount of the account currency to apply for the billingId provided. This is required for update requests. */
		budgetAmount?: string | null;

		/** The currency code for the buyer. This cannot be altered here. */
		currencyCode?: string | null;

		/** The unique id that describes this item. */
		id?: string | null;

		/** The kind of the resource, i.e. "adexchangebuyer#budget". */
		kind?: string | null;
	}

	/** The configuration data for Ad Exchange RTB - Budget API. */
	export interface BudgetFormProperties {

		/** The id of the account. This is required for get and update requests. */
		accountId: FormControl<string | null | undefined>,

		/** The billing id to determine which adgroup to provide budget information for. This is required for get and update requests. */
		billingId: FormControl<string | null | undefined>,

		/** The daily budget amount in unit amount of the account currency to apply for the billingId provided. This is required for update requests. */
		budgetAmount: FormControl<string | null | undefined>,

		/** The currency code for the buyer. This cannot be altered here. */
		currencyCode: FormControl<string | null | undefined>,

		/** The unique id that describes this item. */
		id: FormControl<string | null | undefined>,

		/** The kind of the resource, i.e. "adexchangebuyer#budget". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBudgetFormGroup() {
		return new FormGroup<BudgetFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			billingId: new FormControl<string | null | undefined>(undefined),
			budgetAmount: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A creative and its classification data. */
	export interface Creative {

		/** The HTML snippet that displays the ad when inserted in the web page. If set, videoURL should not be set. */
		HTMLSnippet?: string | null;

		/** Account id. */
		accountId?: number | null;
		adTechnologyProviders?: CreativeAdTechnologyProviders;

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

		/** If nativeAd is set, HTMLSnippet and videoURL should not be set. */
		nativeAd?: CreativeNativeAd;

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

		/** The URL to fetch a video ad. If set, HTMLSnippet and the nativeAd should not be set. */
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

		/** The URL to fetch a video ad. If set, HTMLSnippet and the nativeAd should not be set. */
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

	export interface CreativeAdTechnologyProviders {

		/** The detected ad technology provider IDs for this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/providers.csv for mapping of provider ID to provided name, a privacy policy URL, and a list of domains which can be attributed to the provider. If this creative contains provider IDs that are outside of those listed in the `BidRequest.adslot.consented_providers_settings.consented_providers` field on the  Authorized Buyers Real-Time Bidding protocol or the `BidRequest.user.ext.consented_providers_settings.consented_providers` field on the OpenRTB protocol, a bid submitted for a European Economic Area (EEA) user with this creative is not compliant with the GDPR policies as mentioned in the "Third-party Ad Technology Vendors" section of Authorized Buyers Program Guidelines. */
		detectedProviderIds?: Array<string>;

		/** Whether the creative contains an unidentified ad technology provider. If true, a bid submitted for a European Economic Area (EEA) user with this creative is not compliant with the GDPR policies as mentioned in the "Third-party Ad Technology Vendors" section of Authorized Buyers Program Guidelines. */
		hasUnidentifiedProvider?: boolean | null;
	}
	export interface CreativeAdTechnologyProvidersFormProperties {

		/** Whether the creative contains an unidentified ad technology provider. If true, a bid submitted for a European Economic Area (EEA) user with this creative is not compliant with the GDPR policies as mentioned in the "Third-party Ad Technology Vendors" section of Authorized Buyers Program Guidelines. */
		hasUnidentifiedProvider: FormControl<boolean | null | undefined>,
	}
	export function CreateCreativeAdTechnologyProvidersFormGroup() {
		return new FormGroup<CreativeAdTechnologyProvidersFormProperties>({
			hasUnidentifiedProvider: new FormControl<boolean | null | undefined>(undefined),
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

	export interface CreativeNativeAd {
		advertiser?: string | null;

		/** The app icon, for app download ads. */
		appIcon?: CreativeNativeAdAppIcon;

		/** A long description of the ad. */
		body?: string | null;

		/** A label for the button that the user is supposed to click. */
		callToAction?: string | null;

		/** The URL to use for click tracking. */
		clickTrackingUrl?: string | null;

		/** A short title for the ad. */
		headline?: string | null;

		/** A large image. */
		image?: CreativeNativeAdImage;

		/** The URLs are called when the impression is rendered. */
		impressionTrackingUrl?: Array<string>;

		/** A smaller image, for the advertiser logo. */
		logo?: CreativeNativeAdLogo;

		/** The price of the promoted app including the currency info. */
		price?: string | null;

		/** The app rating in the app store. Must be in the range [0-5]. */
		starRating?: number | null;
	}
	export interface CreativeNativeAdFormProperties {
		advertiser: FormControl<string | null | undefined>,

		/** A long description of the ad. */
		body: FormControl<string | null | undefined>,

		/** A label for the button that the user is supposed to click. */
		callToAction: FormControl<string | null | undefined>,

		/** The URL to use for click tracking. */
		clickTrackingUrl: FormControl<string | null | undefined>,

		/** A short title for the ad. */
		headline: FormControl<string | null | undefined>,

		/** The price of the promoted app including the currency info. */
		price: FormControl<string | null | undefined>,

		/** The app rating in the app store. Must be in the range [0-5]. */
		starRating: FormControl<number | null | undefined>,
	}
	export function CreateCreativeNativeAdFormGroup() {
		return new FormGroup<CreativeNativeAdFormProperties>({
			advertiser: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			callToAction: new FormControl<string | null | undefined>(undefined),
			clickTrackingUrl: new FormControl<string | null | undefined>(undefined),
			headline: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			starRating: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreativeNativeAdAppIcon {
		height?: number | null;
		url?: string | null;
		width?: number | null;
	}
	export interface CreativeNativeAdAppIconFormProperties {
		height: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreateCreativeNativeAdAppIconFormGroup() {
		return new FormGroup<CreativeNativeAdAppIconFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreativeNativeAdImage {
		height?: number | null;
		url?: string | null;
		width?: number | null;
	}
	export interface CreativeNativeAdImageFormProperties {
		height: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreateCreativeNativeAdImageFormGroup() {
		return new FormGroup<CreativeNativeAdImageFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreativeNativeAdLogo {
		height?: number | null;
		url?: string | null;
		width?: number | null;
	}
	export interface CreativeNativeAdLogoFormProperties {
		height: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreateCreativeNativeAdLogoFormGroup() {
		return new FormGroup<CreativeNativeAdLogoFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
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


	/** The configuration data for an Ad Exchange direct deal. */
	export interface DirectDeal {

		/** The account id of the buyer this deal is for. */
		accountId?: number | null;

		/** The name of the advertiser this deal is for. */
		advertiser?: string | null;

		/** Whether the publisher for this deal is eligible for alcohol ads. */
		allowsAlcohol?: boolean | null;

		/** The account id that this deal was negotiated for. It is either the buyer or the client that this deal was negotiated on behalf of. */
		buyerAccountId?: string | null;

		/** The currency code that applies to the fixed_cpm value. If not set then assumed to be USD. */
		currencyCode?: string | null;

		/** The deal type such as programmatic reservation or fixed price and so on. */
		dealTier?: string | null;

		/** End time for when this deal stops being active. If not set then this deal is valid until manually disabled by the publisher. In seconds since the epoch. */
		endTime?: string | null;

		/** The fixed price for this direct deal. In cpm micros of currency according to currency_code. If set, then this deal is eligible for the fixed price tier of buying (highest priority, pay exactly the configured fixed price). */
		fixedCpm?: string | null;

		/** Deal id. */
		id?: string | null;

		/** Resource type. */
		kind?: string | null;

		/** Deal name. */
		name?: string | null;

		/** The minimum price for this direct deal. In cpm micros of currency according to currency_code. If set, then this deal is eligible for the private exchange tier of buying (below fixed price priority, run as a second price auction). */
		privateExchangeMinCpm?: string | null;

		/** If true, the publisher has opted to have their blocks ignored when a creative is bid with for this deal. */
		publisherBlocksOverriden?: boolean | null;

		/** The name of the publisher offering this direct deal. */
		sellerNetwork?: string | null;

		/** Start time for when this deal becomes active. If not set then this deal is active immediately upon creation. In seconds since the epoch. */
		startTime?: string | null;
	}

	/** The configuration data for an Ad Exchange direct deal. */
	export interface DirectDealFormProperties {

		/** The account id of the buyer this deal is for. */
		accountId: FormControl<number | null | undefined>,

		/** The name of the advertiser this deal is for. */
		advertiser: FormControl<string | null | undefined>,

		/** Whether the publisher for this deal is eligible for alcohol ads. */
		allowsAlcohol: FormControl<boolean | null | undefined>,

		/** The account id that this deal was negotiated for. It is either the buyer or the client that this deal was negotiated on behalf of. */
		buyerAccountId: FormControl<string | null | undefined>,

		/** The currency code that applies to the fixed_cpm value. If not set then assumed to be USD. */
		currencyCode: FormControl<string | null | undefined>,

		/** The deal type such as programmatic reservation or fixed price and so on. */
		dealTier: FormControl<string | null | undefined>,

		/** End time for when this deal stops being active. If not set then this deal is valid until manually disabled by the publisher. In seconds since the epoch. */
		endTime: FormControl<string | null | undefined>,

		/** The fixed price for this direct deal. In cpm micros of currency according to currency_code. If set, then this deal is eligible for the fixed price tier of buying (highest priority, pay exactly the configured fixed price). */
		fixedCpm: FormControl<string | null | undefined>,

		/** Deal id. */
		id: FormControl<string | null | undefined>,

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/** Deal name. */
		name: FormControl<string | null | undefined>,

		/** The minimum price for this direct deal. In cpm micros of currency according to currency_code. If set, then this deal is eligible for the private exchange tier of buying (below fixed price priority, run as a second price auction). */
		privateExchangeMinCpm: FormControl<string | null | undefined>,

		/** If true, the publisher has opted to have their blocks ignored when a creative is bid with for this deal. */
		publisherBlocksOverriden: FormControl<boolean | null | undefined>,

		/** The name of the publisher offering this direct deal. */
		sellerNetwork: FormControl<string | null | undefined>,

		/** Start time for when this deal becomes active. If not set then this deal is active immediately upon creation. In seconds since the epoch. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateDirectDealFormGroup() {
		return new FormGroup<DirectDealFormProperties>({
			accountId: new FormControl<number | null | undefined>(undefined),
			advertiser: new FormControl<string | null | undefined>(undefined),
			allowsAlcohol: new FormControl<boolean | null | undefined>(undefined),
			buyerAccountId: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			dealTier: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			fixedCpm: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			privateExchangeMinCpm: new FormControl<string | null | undefined>(undefined),
			publisherBlocksOverriden: new FormControl<boolean | null | undefined>(undefined),
			sellerNetwork: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A direct deals feed lists Direct Deals the Ad Exchange buyer account has access to. This includes direct deals set up for the buyer account as well as its merged stream seats. */
	export interface DirectDealsList {

		/** A list of direct deals relevant for your account. */
		directDeals?: Array<DirectDeal>;

		/** Resource type. */
		kind?: string | null;
	}

	/** A direct deals feed lists Direct Deals the Ad Exchange buyer account has access to. This includes direct deals set up for the buyer account as well as its merged stream seats. */
	export interface DirectDealsListFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDirectDealsListFormGroup() {
		return new FormGroup<DirectDealsListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration data for an Ad Exchange performance report list. */
	export interface PerformanceReport {

		/** The number of bid responses with an ad. */
		bidRate?: number | null;

		/** The number of bid requests sent to your bidder. */
		bidRequestRate?: number | null;

		/** Rate of various prefiltering statuses per match. Please refer to the callout-status-codes.txt file for different statuses. */
		calloutStatusRate?: Array<string>;

		/** Average QPS for cookie matcher operations. */
		cookieMatcherStatusRate?: Array<string>;

		/** Rate of ads with a given status. Please refer to the creative-status-codes.txt file for different statuses. */
		creativeStatusRate?: Array<string>;

		/** The number of bid responses that were filtered due to a policy violation or other errors. */
		filteredBidRate?: number | null;

		/** Average QPS for hosted match operations. */
		hostedMatchStatusRate?: Array<string>;

		/** The number of potential queries based on your pretargeting settings. */
		inventoryMatchRate?: number | null;

		/** Resource type. */
		kind?: string | null;

		/** The 50th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report. */
		latency50thPercentile?: number | null;

		/** The 85th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report. */
		latency85thPercentile?: number | null;

		/** The 95th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report. */
		latency95thPercentile?: number | null;

		/** Rate of various quota account statuses per quota check. */
		noQuotaInRegion?: number | null;

		/** Rate of various quota account statuses per quota check. */
		outOfQuota?: number | null;

		/** Average QPS for pixel match requests from clients. */
		pixelMatchRequests?: number | null;

		/** Average QPS for pixel match responses from clients. */
		pixelMatchResponses?: number | null;

		/** The configured quota limits for this account. */
		quotaConfiguredLimit?: number | null;

		/** The throttled quota limits for this account. */
		quotaThrottledLimit?: number | null;

		/** The trading location of this data. */
		region?: string | null;

		/** The number of properly formed bid responses received by our servers within the deadline. */
		successfulRequestRate?: number | null;

		/** The unix timestamp of the starting time of this performance data. */
		timestamp?: string | null;

		/** The number of bid responses that were unsuccessful due to timeouts, incorrect formatting, etc. */
		unsuccessfulRequestRate?: number | null;
	}

	/** The configuration data for an Ad Exchange performance report list. */
	export interface PerformanceReportFormProperties {

		/** The number of bid responses with an ad. */
		bidRate: FormControl<number | null | undefined>,

		/** The number of bid requests sent to your bidder. */
		bidRequestRate: FormControl<number | null | undefined>,

		/** The number of bid responses that were filtered due to a policy violation or other errors. */
		filteredBidRate: FormControl<number | null | undefined>,

		/** The number of potential queries based on your pretargeting settings. */
		inventoryMatchRate: FormControl<number | null | undefined>,

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/** The 50th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report. */
		latency50thPercentile: FormControl<number | null | undefined>,

		/** The 85th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report. */
		latency85thPercentile: FormControl<number | null | undefined>,

		/** The 95th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report. */
		latency95thPercentile: FormControl<number | null | undefined>,

		/** Rate of various quota account statuses per quota check. */
		noQuotaInRegion: FormControl<number | null | undefined>,

		/** Rate of various quota account statuses per quota check. */
		outOfQuota: FormControl<number | null | undefined>,

		/** Average QPS for pixel match requests from clients. */
		pixelMatchRequests: FormControl<number | null | undefined>,

		/** Average QPS for pixel match responses from clients. */
		pixelMatchResponses: FormControl<number | null | undefined>,

		/** The configured quota limits for this account. */
		quotaConfiguredLimit: FormControl<number | null | undefined>,

		/** The throttled quota limits for this account. */
		quotaThrottledLimit: FormControl<number | null | undefined>,

		/** The trading location of this data. */
		region: FormControl<string | null | undefined>,

		/** The number of properly formed bid responses received by our servers within the deadline. */
		successfulRequestRate: FormControl<number | null | undefined>,

		/** The unix timestamp of the starting time of this performance data. */
		timestamp: FormControl<string | null | undefined>,

		/** The number of bid responses that were unsuccessful due to timeouts, incorrect formatting, etc. */
		unsuccessfulRequestRate: FormControl<number | null | undefined>,
	}
	export function CreatePerformanceReportFormGroup() {
		return new FormGroup<PerformanceReportFormProperties>({
			bidRate: new FormControl<number | null | undefined>(undefined),
			bidRequestRate: new FormControl<number | null | undefined>(undefined),
			filteredBidRate: new FormControl<number | null | undefined>(undefined),
			inventoryMatchRate: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			latency50thPercentile: new FormControl<number | null | undefined>(undefined),
			latency85thPercentile: new FormControl<number | null | undefined>(undefined),
			latency95thPercentile: new FormControl<number | null | undefined>(undefined),
			noQuotaInRegion: new FormControl<number | null | undefined>(undefined),
			outOfQuota: new FormControl<number | null | undefined>(undefined),
			pixelMatchRequests: new FormControl<number | null | undefined>(undefined),
			pixelMatchResponses: new FormControl<number | null | undefined>(undefined),
			quotaConfiguredLimit: new FormControl<number | null | undefined>(undefined),
			quotaThrottledLimit: new FormControl<number | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			successfulRequestRate: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			unsuccessfulRequestRate: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The configuration data for an Ad Exchange performance report list. */
	export interface PerformanceReportList {

		/** Resource type. */
		kind?: string | null;

		/** A list of performance reports relevant for the account. */
		performanceReport?: Array<PerformanceReport>;
	}

	/** The configuration data for an Ad Exchange performance report list. */
	export interface PerformanceReportListFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePerformanceReportListFormGroup() {
		return new FormGroup<PerformanceReportListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PretargetingConfig {

		/** The id for billing purposes, provided for reference. Leave this field blank for insert requests; the id will be generated automatically. */
		billingId?: string | null;

		/** The config id; generated automatically. Leave this field blank for insert requests. */
		configId?: string | null;

		/** The name of the config. Must be unique. Required for all requests. */
		configName?: string | null;

		/** List must contain exactly one of PRETARGETING_CREATIVE_TYPE_HTML or PRETARGETING_CREATIVE_TYPE_VIDEO. */
		creativeType?: Array<string>;

		/** Requests which allow one of these (width, height) pairs will match. All pairs must be supported ad dimensions. */
		PretargetingConfigDimensions?: Array<PretargetingConfigDimensions>;

		/** Requests with any of these content labels will not match. Values are from content-labels.txt in the downloadable files section. */
		excludedContentLabels?: Array<string>;

		/** Requests containing any of these geo criteria ids will not match. */
		excludedGeoCriteriaIds?: Array<string>;

		/** Requests containing any of these placements will not match. */
		PretargetingConfigExcludedPlacements?: Array<PretargetingConfigExcludedPlacements>;

		/** Requests containing any of these users list ids will not match. */
		excludedUserLists?: Array<string>;

		/** Requests containing any of these vertical ids will not match. Values are from the publisher-verticals.txt file in the downloadable files section. */
		excludedVerticals?: Array<string>;

		/** Requests containing any of these geo criteria ids will match. */
		geoCriteriaIds?: Array<string>;

		/** Whether this config is active. Required for all requests. */
		isActive?: boolean | null;

		/** The kind of the resource, i.e. "adexchangebuyer#pretargetingConfig". */
		kind?: string | null;

		/** Request containing any of these language codes will match. */
		languages?: Array<string>;

		/** The maximum QPS allocated to this pretargeting configuration, used for pretargeting-level QPS limits. By default, this is not set, which indicates that there is no QPS limit at the configuration level (a global or account-level limit may still be imposed). */
		maximumQps?: string | null;

		/** Requests containing any of these mobile carrier ids will match. Values are from mobile-carriers.csv in the downloadable files section. */
		mobileCarriers?: Array<string>;

		/** Requests containing any of these mobile device ids will match. Values are from mobile-devices.csv in the downloadable files section. */
		mobileDevices?: Array<string>;

		/** Requests containing any of these mobile operating system version ids will match. Values are from mobile-os.csv in the downloadable files section. */
		mobileOperatingSystemVersions?: Array<string>;

		/** Requests containing any of these placements will match. */
		PretargetingConfigPlacements?: Array<PretargetingConfigPlacements>;

		/** Requests matching any of these platforms will match. Possible values are PRETARGETING_PLATFORM_MOBILE, PRETARGETING_PLATFORM_DESKTOP, and PRETARGETING_PLATFORM_TABLET. */
		platforms?: Array<string>;

		/** Creative attributes should be declared here if all creatives corresponding to this pretargeting configuration have that creative attribute. Values are from pretargetable-creative-attributes.txt in the downloadable files section. */
		supportedCreativeAttributes?: Array<string>;

		/** Requests containing any of these user list ids will match. */
		userLists?: Array<string>;

		/** Requests that allow any of these vendor ids will match. Values are from vendors.txt in the downloadable files section. */
		vendorTypes?: Array<string>;

		/** Requests containing any of these vertical ids will match. */
		verticals?: Array<string>;
	}
	export interface PretargetingConfigFormProperties {

		/** The id for billing purposes, provided for reference. Leave this field blank for insert requests; the id will be generated automatically. */
		billingId: FormControl<string | null | undefined>,

		/** The config id; generated automatically. Leave this field blank for insert requests. */
		configId: FormControl<string | null | undefined>,

		/** The name of the config. Must be unique. Required for all requests. */
		configName: FormControl<string | null | undefined>,

		/** Whether this config is active. Required for all requests. */
		isActive: FormControl<boolean | null | undefined>,

		/** The kind of the resource, i.e. "adexchangebuyer#pretargetingConfig". */
		kind: FormControl<string | null | undefined>,

		/** The maximum QPS allocated to this pretargeting configuration, used for pretargeting-level QPS limits. By default, this is not set, which indicates that there is no QPS limit at the configuration level (a global or account-level limit may still be imposed). */
		maximumQps: FormControl<string | null | undefined>,
	}
	export function CreatePretargetingConfigFormGroup() {
		return new FormGroup<PretargetingConfigFormProperties>({
			billingId: new FormControl<string | null | undefined>(undefined),
			configId: new FormControl<string | null | undefined>(undefined),
			configName: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			maximumQps: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PretargetingConfigDimensions {

		/** Height in pixels. */
		height?: string | null;

		/** Width in pixels. */
		width?: string | null;
	}
	export interface PretargetingConfigDimensionsFormProperties {

		/** Height in pixels. */
		height: FormControl<string | null | undefined>,

		/** Width in pixels. */
		width: FormControl<string | null | undefined>,
	}
	export function CreatePretargetingConfigDimensionsFormGroup() {
		return new FormGroup<PretargetingConfigDimensionsFormProperties>({
			height: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PretargetingConfigExcludedPlacements {

		/** The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement. */
		token?: string | null;

		/** The type of the placement. */
		type?: string | null;
	}
	export interface PretargetingConfigExcludedPlacementsFormProperties {

		/** The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement. */
		token: FormControl<string | null | undefined>,

		/** The type of the placement. */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePretargetingConfigExcludedPlacementsFormGroup() {
		return new FormGroup<PretargetingConfigExcludedPlacementsFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PretargetingConfigPlacements {

		/** The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement. */
		token?: string | null;

		/** The type of the placement. */
		type?: string | null;
	}
	export interface PretargetingConfigPlacementsFormProperties {

		/** The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement. */
		token: FormControl<string | null | undefined>,

		/** The type of the placement. */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePretargetingConfigPlacementsFormGroup() {
		return new FormGroup<PretargetingConfigPlacementsFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PretargetingConfigList {

		/** A list of pretargeting configs */
		items?: Array<PretargetingConfig>;

		/** Resource type. */
		kind?: string | null;
	}
	export interface PretargetingConfigListFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePretargetingConfigListFormGroup() {
		return new FormGroup<PretargetingConfigListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
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
		 * Retrieves a list of billing information for all accounts of the authenticated user.
		 * Get billinginfo
		 * @return {BillingInfoList} Successful response
		 */
		Adexchangebuyer_billingInfo_list(): Observable<BillingInfoList> {
			return this.http.get<BillingInfoList>(this.baseUri + 'billinginfo', {});
		}

		/**
		 * Returns the billing information for one account specified by account ID.
		 * Get billinginfo/{accountId}
		 * @param {number} accountId The account id.
		 * @return {BillingInfo} Successful response
		 */
		Adexchangebuyer_billingInfo_get(accountId: number): Observable<BillingInfo> {
			return this.http.get<BillingInfo>(this.baseUri + 'billinginfo/' + accountId, {});
		}

		/**
		 * Returns the budget information for the adgroup specified by the accountId and billingId.
		 * Get billinginfo/{accountId}/{billingId}
		 * @param {string} accountId The account id to get the budget information for.
		 * @param {string} billingId The billing id to get the budget information for.
		 * @return {Budget} Successful response
		 */
		Adexchangebuyer_budget_get(accountId: string, billingId: string): Observable<Budget> {
			return this.http.get<Budget>(this.baseUri + 'billinginfo/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/' + (billingId == null ? '' : encodeURIComponent(billingId)), {});
		}

		/**
		 * Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
		 * Patch billinginfo/{accountId}/{billingId}
		 * @param {string} accountId The account id associated with the budget being updated.
		 * @param {string} billingId The billing id associated with the budget being updated.
		 * @return {Budget} Successful response
		 */
		Adexchangebuyer_budget_patch(accountId: string, billingId: string, requestBody: Budget): Observable<Budget> {
			return this.http.patch<Budget>(this.baseUri + 'billinginfo/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/' + (billingId == null ? '' : encodeURIComponent(billingId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.
		 * Put billinginfo/{accountId}/{billingId}
		 * @param {string} accountId The account id associated with the budget being updated.
		 * @param {string} billingId The billing id associated with the budget being updated.
		 * @return {Budget} Successful response
		 */
		Adexchangebuyer_budget_update(accountId: string, billingId: string, requestBody: Budget): Observable<Budget> {
			return this.http.put<Budget>(this.baseUri + 'billinginfo/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/' + (billingId == null ? '' : encodeURIComponent(billingId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
		 * Get creatives
		 * @param {Array<number>} accountId When specified, only creatives for the given account ids are returned.
		 * @param {Array<string>} buyerCreativeId When specified, only creatives for the given buyer creative ids are returned.
		 * @param {number} maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
		 * @param {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
		 * @param {Adexchangebuyer_creatives_listStatusFilter} statusFilter When specified, only creatives having the given status are returned.
		 * @return {CreativesList} Successful response
		 */
		Adexchangebuyer_creatives_list(accountId: Array<number> | null | undefined, buyerCreativeId: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, statusFilter: Adexchangebuyer_creatives_listStatusFilter | null | undefined): Observable<CreativesList> {
			return this.http.get<CreativesList>(this.baseUri + 'creatives?' + accountId?.map(z => `accountId=${z}`).join('&') + '&' + buyerCreativeId?.map(z => `buyerCreativeId=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&statusFilter=' + statusFilter, {});
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

		/**
		 * Retrieves the authenticated user's list of direct deals.
		 * Get directdeals
		 * @return {DirectDealsList} Successful response
		 */
		Adexchangebuyer_directDeals_list(): Observable<DirectDealsList> {
			return this.http.get<DirectDealsList>(this.baseUri + 'directdeals', {});
		}

		/**
		 * Gets one direct deal by ID.
		 * Get directdeals/{id}
		 * @param {string} id The direct deal id
		 * @return {DirectDeal} Successful response
		 */
		Adexchangebuyer_directDeals_get(id: string): Observable<DirectDeal> {
			return this.http.get<DirectDeal>(this.baseUri + 'directdeals/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves the authenticated user's list of performance metrics.
		 * Get performancereport
		 * @param {string} accountId The account id to get the reports.
		 * @param {string} endDateTime The end time of the report in ISO 8601 timestamp format using UTC.
		 * @param {string} startDateTime The start time of the report in ISO 8601 timestamp format using UTC.
		 * @param {number} maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
		 * @param {string} pageToken A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
		 * @return {PerformanceReportList} Successful response
		 */
		Adexchangebuyer_performanceReport_list(accountId: string, endDateTime: string, startDateTime: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<PerformanceReportList> {
			return this.http.get<PerformanceReportList>(this.baseUri + 'performancereport?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&endDateTime=' + (endDateTime == null ? '' : encodeURIComponent(endDateTime)) + '&startDateTime=' + (startDateTime == null ? '' : encodeURIComponent(startDateTime)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Retrieves a list of the authenticated user's pretargeting configurations.
		 * Get pretargetingconfigs/{accountId}
		 * @param {string} accountId The account id to get the pretargeting configs for.
		 * @return {PretargetingConfigList} Successful response
		 */
		Adexchangebuyer_pretargetingConfig_list(accountId: string): Observable<PretargetingConfigList> {
			return this.http.get<PretargetingConfigList>(this.baseUri + 'pretargetingconfigs/' + (accountId == null ? '' : encodeURIComponent(accountId)), {});
		}

		/**
		 * Inserts a new pretargeting configuration.
		 * Post pretargetingconfigs/{accountId}
		 * @param {string} accountId The account id to insert the pretargeting config for.
		 * @return {PretargetingConfig} Successful response
		 */
		Adexchangebuyer_pretargetingConfig_insert(accountId: string, requestBody: PretargetingConfig): Observable<PretargetingConfig> {
			return this.http.post<PretargetingConfig>(this.baseUri + 'pretargetingconfigs/' + (accountId == null ? '' : encodeURIComponent(accountId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing pretargeting config.
		 * Delete pretargetingconfigs/{accountId}/{configId}
		 * @param {string} accountId The account id to delete the pretargeting config for.
		 * @param {string} configId The specific id of the configuration to delete.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_pretargetingConfig_delete(accountId: string, configId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'pretargetingconfigs/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/' + (configId == null ? '' : encodeURIComponent(configId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a specific pretargeting configuration
		 * Get pretargetingconfigs/{accountId}/{configId}
		 * @param {string} accountId The account id to get the pretargeting config for.
		 * @param {string} configId The specific id of the configuration to retrieve.
		 * @return {PretargetingConfig} Successful response
		 */
		Adexchangebuyer_pretargetingConfig_get(accountId: string, configId: string): Observable<PretargetingConfig> {
			return this.http.get<PretargetingConfig>(this.baseUri + 'pretargetingconfigs/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/' + (configId == null ? '' : encodeURIComponent(configId)), {});
		}

		/**
		 * Updates an existing pretargeting config. This method supports patch semantics.
		 * Patch pretargetingconfigs/{accountId}/{configId}
		 * @param {string} accountId The account id to update the pretargeting config for.
		 * @param {string} configId The specific id of the configuration to update.
		 * @return {PretargetingConfig} Successful response
		 */
		Adexchangebuyer_pretargetingConfig_patch(accountId: string, configId: string, requestBody: PretargetingConfig): Observable<PretargetingConfig> {
			return this.http.patch<PretargetingConfig>(this.baseUri + 'pretargetingconfigs/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/' + (configId == null ? '' : encodeURIComponent(configId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing pretargeting config.
		 * Put pretargetingconfigs/{accountId}/{configId}
		 * @param {string} accountId The account id to update the pretargeting config for.
		 * @param {string} configId The specific id of the configuration to update.
		 * @return {PretargetingConfig} Successful response
		 */
		Adexchangebuyer_pretargetingConfig_update(accountId: string, configId: string, requestBody: PretargetingConfig): Observable<PretargetingConfig> {
			return this.http.put<PretargetingConfig>(this.baseUri + 'pretargetingconfigs/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/' + (configId == null ? '' : encodeURIComponent(configId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Adexchangebuyer_creatives_listStatusFilter { approved = 'approved', disapproved = 'disapproved', not_checked = 'not_checked' }

}

