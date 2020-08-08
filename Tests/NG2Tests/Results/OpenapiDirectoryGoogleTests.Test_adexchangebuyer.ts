import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Configuration data for an Ad Exchange buyer account. */
	export interface Account {

		/** When this is false, bid requests that include a deal ID for a private auction or preferred deal are always sent to your bidder. When true, all active pretargeting configs will be applied to private auctions and preferred deals. Programmatic Guaranteed deals (when enabled) are always sent to your bidder. */
		applyPretargetingToNonGuaranteedDeals?: boolean;

		/** Your bidder locations that have distinct URLs. */
		AccountBidderLocation?: Array<AccountBidderLocation>;

		/** The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this. */
		cookieMatchingNid?: string;

		/** The base URL used in cookie match requests. */
		cookieMatchingUrl?: string;

		/** Account id. */
		id?: number;

		/** Resource type. */
		kind?: string;

		/** The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this. */
		maximumActiveCreatives?: number;

		/** The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this. */
		maximumTotalQps?: number;

		/** The number of creatives that this account inserted or bid with in the last 30 days. */
		numberActiveCreatives?: number;
	}

	export interface AccountBidderLocation {

		/**
		 * The protocol that the bidder endpoint is using. OpenRTB protocols with prefix PROTOCOL_OPENRTB_PROTOBUF use proto buffer, otherwise use JSON.  Allowed values:
		 * - PROTOCOL_ADX
		 * - PROTOCOL_OPENRTB_2_2
		 * - PROTOCOL_OPENRTB_2_3
		 * - PROTOCOL_OPENRTB_2_4
		 * - PROTOCOL_OPENRTB_2_5
		 * - PROTOCOL_OPENRTB_PROTOBUF_2_3
		 * - PROTOCOL_OPENRTB_PROTOBUF_2_4
		 * - PROTOCOL_OPENRTB_PROTOBUF_2_5
		 */
		bidProtocol?: string;

		/** The maximum queries per second the Ad Exchange will send. */
		maximumQps?: number;

		/**
		 * The geographical region the Ad Exchange should send requests from. Only used by some quota systems, but always setting the value is recommended. Allowed values:
		 * - ASIA
		 * - EUROPE
		 * - US_EAST
		 * - US_WEST
		 */
		region?: string;

		/** The URL to which the Ad Exchange will send bid requests. */
		url?: string;
	}


	/** An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account. */
	export interface AccountsList {

		/** A list of accounts. */
		items?: Array<Account>;

		/** Resource type. */
		kind?: string;
	}

	export interface AddOrderDealsRequest {

		/** The list of deals to add */
		deals?: Array<MarketplaceDeal>;

		/** The last known proposal revision number. */
		proposalRevisionNumber?: string;

		/** Indicates an optional action to take on the proposal */
		updateAction?: string;
	}


	/** A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving. */
	export interface MarketplaceDeal {
		buyerPrivateData?: PrivateData;

		/** The time (ms since epoch) of the deal creation. (readonly) */
		creationTimeMs?: string;

		/** Specifies the creative pre-approval policy (buyer-readonly) */
		creativePreApprovalPolicy?: string;

		/** Specifies whether the creative is safeFrame compatible (buyer-readonly) */
		creativeSafeFrameCompatibility?: string;

		/** A unique deal-id for the deal (readonly). */
		dealId?: string;
		dealServingMetadata?: DealServingMetadata;
		deliveryControl?: DeliveryControl;

		/** The external deal id assigned to this deal once the deal is finalized. This is the deal-id that shows up in serving/reporting etc. (readonly) */
		externalDealId?: string;

		/** Proposed flight end time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable) */
		flightEndTimeMs?: string;

		/** Proposed flight start time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable) */
		flightStartTimeMs?: string;

		/** Description for the deal terms. (buyer-readonly) */
		inventoryDescription?: string;

		/** Indicates whether the current deal is a RFP template. RFP template is created by buyer and not based on seller created products. */
		isRfpTemplate?: boolean;

		/** True, if the buyside inventory setup is complete for this deal. (readonly, except via OrderSetupCompleted action) */
		isSetupComplete?: boolean;

		/** Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#marketplaceDeal". */
		kind?: string;

		/** The time (ms since epoch) when the deal was last updated. (readonly) */
		lastUpdateTimeMs?: string;

		/** The name of the deal. (updatable) */
		name?: string;

		/** The product-id from which this deal was created. (readonly, except on create) */
		productId?: string;

		/** The revision number of the product that the deal was created from (readonly, except on create) */
		productRevisionNumber?: string;

		/** Specifies the creative source for programmatic deals, PUBLISHER means creative is provided by seller and ADVERTISR means creative is provided by buyer. (buyer-readonly) */
		programmaticCreativeSource?: string;
		proposalId?: string;

		/** Optional Seller contact information for the deal (buyer-readonly) */
		sellerContacts?: Array<ContactInformation>;

		/** The shared targeting visible to buyers and sellers. Each shared targeting entity is AND'd together. (updatable) */
		sharedTargetings?: Array<SharedTargeting>;

		/** The syndication product associated with the deal. (readonly, except on create) */
		syndicationProduct?: string;
		terms?: DealTerms;
		webPropertyCode?: string;
	}

	export interface PrivateData {
		referenceId?: string;
		referencePayload?: string;
	}

	export interface DealServingMetadata {

		/** True if alcohol ads are allowed for this deal (read-only). This field is only populated when querying for finalized orders using the method GetFinalizedOrderDeals */
		alcoholAdsAllowed?: boolean;

		/** Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently. */
		dealPauseStatus?: DealServingMetadataDealPauseStatus;
	}


	/** Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently. */
	export interface DealServingMetadataDealPauseStatus {
		buyerPauseReason?: string;

		/** If the deal is paused, records which party paused the deal first. */
		firstPausedBy?: string;
		hasBuyerPaused?: boolean;
		hasSellerPaused?: boolean;
		sellerPauseReason?: string;
	}

	export interface DeliveryControl {
		creativeBlockingLevel?: string;
		deliveryRateType?: string;
		frequencyCaps?: Array<DeliveryControlFrequencyCap>;
	}

	export interface DeliveryControlFrequencyCap {
		maxImpressions?: number;
		numTimeUnits?: number;
		timeUnitType?: string;
	}

	export interface ContactInformation {

		/** Email address of the contact. */
		email?: string;

		/** The name of the contact. */
		name?: string;
	}

	export interface SharedTargeting {

		/** The list of values to exclude from targeting. Each value is AND'd together. */
		exclusions?: Array<TargetingValue>;

		/** The list of value to include as part of the targeting. Each value is OR'd together. */
		inclusions?: Array<TargetingValue>;

		/** The key representing the shared targeting criterion. */
		key?: string;
	}

	export interface TargetingValue {

		/** Next Id: 7 */
		creativeSizeValue?: TargetingValueCreativeSize;
		dayPartTargetingValue?: TargetingValueDayPartTargeting;
		demogAgeCriteriaValue?: TargetingValueDemogAgeCriteria;
		demogGenderCriteriaValue?: TargetingValueDemogGenderCriteria;

		/** The long value to exclude/include. */
		longValue?: string;

		/** The string value to exclude/include. */
		stringValue?: string;
	}


	/** Next Id: 7 */
	export interface TargetingValueCreativeSize {

		/** The formats allowed by the publisher. */
		allowedFormats?: Array<string>;

		/** For video size type, the list of companion sizes. */
		companionSizes?: Array<TargetingValueSize>;

		/** The Creative size type. */
		creativeSizeType?: string;

		/** The native template for native ad. */
		nativeTemplate?: string;
		size?: TargetingValueSize;

		/** The skippable ad type for video size. */
		skippableAdType?: string;
	}

	export interface TargetingValueSize {

		/** The height of the creative. */
		height?: number;

		/** The width of the creative. */
		width?: number;
	}

	export interface TargetingValueDayPartTargeting {
		dayParts?: Array<TargetingValueDayPartTargetingDayPart>;
		timeZoneType?: string;
	}

	export interface TargetingValueDayPartTargetingDayPart {
		dayOfWeek?: string;
		endHour?: number;
		endMinute?: number;
		startHour?: number;
		startMinute?: number;
	}

	export interface TargetingValueDemogAgeCriteria {
		demogAgeCriteriaIds?: Array<string>;
	}

	export interface TargetingValueDemogGenderCriteria {
		demogGenderCriteriaIds?: Array<string>;
	}

	export interface DealTerms {

		/** Visibility of the URL in bid requests. */
		brandingType?: string;

		/** Indicates that this ExternalDealId exists under at least two different AdxInventoryDeals. Currently, the only case that the same ExternalDealId will exist is programmatic cross sell case. */
		crossListedExternalDealIdType?: string;

		/** Description for the proposed terms of the deal. */
		description?: string;
		estimatedGrossSpend?: Price;

		/** Non-binding estimate of the impressions served per day Can be set by buyer or seller. */
		estimatedImpressionsPerDay?: string;
		guaranteedFixedPriceTerms?: DealTermsGuaranteedFixedPriceTerms;
		nonGuaranteedAuctionTerms?: DealTermsNonGuaranteedAuctionTerms;
		nonGuaranteedFixedPriceTerms?: DealTermsNonGuaranteedFixedPriceTerms;
		rubiconNonGuaranteedTerms?: DealTermsRubiconNonGuaranteedTerms;

		/** For deals with Cost Per Day billing, defines the timezone used to mark the boundaries of a day (buyer-readonly) */
		sellerTimeZone?: string;
	}

	export interface Price {

		/** The price value in micros. */
		amountMicros?: number;

		/** The currency code for the price. */
		currencyCode?: string;

		/** In case of CPD deals, the expected CPM in micros. */
		expectedCpmMicros?: number;

		/** The pricing type for the deal/product. */
		pricingType?: string;
	}

	export interface DealTermsGuaranteedFixedPriceTerms {
		billingInfo?: DealTermsGuaranteedFixedPriceTermsBillingInfo;

		/** Fixed price for the specified buyer. */
		fixedPrices?: Array<PricePerBuyer>;

		/** Guaranteed impressions as a percentage. This is the percentage of guaranteed looks that the buyer is guaranteeing to buy. */
		guaranteedImpressions?: string;

		/** Count of guaranteed looks. Required for deal, optional for product. For CPD deals, buyer changes to guaranteed_looks will be ignored. */
		guaranteedLooks?: string;

		/** Count of minimum daily looks for a CPD deal. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks. */
		minimumDailyLooks?: string;
	}

	export interface DealTermsGuaranteedFixedPriceTermsBillingInfo {

		/** The timestamp (in ms since epoch) when the original reservation price for the deal was first converted to DFP currency. This is used to convert the contracted price into buyer's currency without discrepancy. */
		currencyConversionTimeMs?: string;

		/** The DFP line item id associated with this deal. For features like CPD, buyers can retrieve the DFP line item for billing reconciliation. */
		dfpLineItemId?: string;

		/** The original contracted quantity (# impressions) for this deal. To ensure delivery, sometimes the publisher will book the deal with a impression buffer, such that guaranteed_looks is greater than the contracted quantity. However clients are billed using the original contracted quantity. */
		originalContractedQuantity?: string;
		price?: Price;
	}


	/** Used to specify pricing rules for buyers. Each PricePerBuyer in a product can become [0,1] deals. To check if there is a PricePerBuyer for a particular buyer we look for the most specific matching rule - we first look for a rule matching the buyer and otherwise look for a matching rule where no buyer is set. */
	export interface PricePerBuyer {

		/** Optional access type for this buyer. */
		auctionTier?: string;
		billedBuyer?: Buyer;
		buyer?: Buyer;
		price?: Price;
	}

	export interface Buyer {

		/** Adx account id of the buyer. */
		accountId?: string;
	}

	export interface DealTermsNonGuaranteedAuctionTerms {

		/** True if open auction buyers are allowed to compete with invited buyers in this private auction (buyer-readonly). */
		autoOptimizePrivateAuction?: boolean;

		/** Reserve price for the specified buyer. */
		reservePricePerBuyers?: Array<PricePerBuyer>;
	}

	export interface DealTermsNonGuaranteedFixedPriceTerms {

		/** Fixed price for the specified buyer. */
		fixedPrices?: Array<PricePerBuyer>;
	}

	export interface DealTermsRubiconNonGuaranteedTerms {
		priorityPrice?: Price;
		standardPrice?: Price;
	}

	export interface AddOrderDealsResponse {

		/** List of deals added (in the same proposal as passed in the request) */
		deals?: Array<MarketplaceDeal>;

		/** The updated revision number for the proposal. */
		proposalRevisionNumber?: string;
	}

	export interface AddOrderNotesRequest {

		/** The list of notes to add. */
		notes?: Array<MarketplaceNote>;
	}


	/** A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number. */
	export interface MarketplaceNote {

		/** The role of the person (buyer/seller) creating the note. (readonly) */
		creatorRole?: string;

		/** Notes can optionally be associated with a deal. (readonly, except on create) */
		dealId?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#marketplaceNote". */
		kind?: string;

		/** The actual note to attach. (readonly, except on create) */
		note?: string;

		/** The unique id for the note. (readonly) */
		noteId?: string;

		/** The proposalId that a note is attached to. (readonly) */
		proposalId?: string;

		/** If the note is associated with a proposal revision number, then store that here. (readonly, except on create) */
		proposalRevisionNumber?: string;

		/** The timestamp (ms since epoch) that this note was created. (readonly) */
		timestampMs?: string;
	}

	export interface AddOrderNotesResponse {
		notes?: Array<MarketplaceNote>;
	}


	/** The configuration data for an Ad Exchange billing info. */
	export interface BillingInfo {

		/** Account id. */
		accountId?: number;

		/** Account name. */
		accountName?: string;

		/** A list of adgroup IDs associated with this particular account. These IDs may show up as part of a realtime bidding BidRequest, which indicates a bid request for this account. */
		billingId?: Array<string>;

		/** Resource type. */
		kind?: string;
	}


	/** A billing info feed lists Billing Info the Ad Exchange buyer account has access to. Each entry in the feed corresponds to a single billing info. */
	export interface BillingInfoList {

		/** A list of billing info relevant for your account. */
		items?: Array<BillingInfo>;

		/** Resource type. */
		kind?: string;
	}


	/** The configuration data for Ad Exchange RTB - Budget API. */
	export interface Budget {

		/** The id of the account. This is required for get and update requests. */
		accountId?: string;

		/** The billing id to determine which adgroup to provide budget information for. This is required for get and update requests. */
		billingId?: string;

		/** The daily budget amount in unit amount of the account currency to apply for the billingId provided. This is required for update requests. */
		budgetAmount?: string;

		/** The currency code for the buyer. This cannot be altered here. */
		currencyCode?: string;

		/** The unique id that describes this item. */
		id?: string;

		/** The kind of the resource, i.e. "adexchangebuyer#budget". */
		kind?: string;
	}

	export interface CreateOrdersRequest {

		/** The list of proposals to create. */
		proposals?: Array<Proposal>;

		/** Web property id of the seller creating these orders */
		webPropertyCode?: string;
	}


	/**
	 * Represents a proposal in the marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Each field in a proposal can have one of the following setting:
	 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
	 */
	export interface Proposal {
		billedBuyer?: Buyer;
		buyer?: Buyer;

		/** Optional contact information of the buyer. (seller-readonly) */
		buyerContacts?: Array<ContactInformation>;
		buyerPrivateData?: PrivateData;

		/** IDs of DBM advertisers permission to this proposal. */
		dbmAdvertiserIds?: Array<string>;

		/** When an proposal is in an accepted state, indicates whether the buyer has signed off. Once both sides have signed off on a deal, the proposal can be finalized by the seller. (seller-readonly) */
		hasBuyerSignedOff?: boolean;

		/** When an proposal is in an accepted state, indicates whether the buyer has signed off Once both sides have signed off on a deal, the proposal can be finalized by the seller. (buyer-readonly) */
		hasSellerSignedOff?: boolean;

		/** What exchange will provide this inventory (readonly, except on create). */
		inventorySource?: string;

		/** True if the proposal is being renegotiated (readonly). */
		isRenegotiating?: boolean;

		/** True, if the buyside inventory setup is complete for this proposal. (readonly, except via OrderSetupCompleted action) Deprecated in favor of deal level setup complete flag. */
		isSetupComplete?: boolean;

		/** Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#proposal". */
		kind?: string;

		/** List of labels associated with the proposal. (readonly) */
		labels?: Array<MarketplaceLabel>;

		/** The role of the last user that either updated the proposal or left a comment. (readonly) */
		lastUpdaterOrCommentorRole?: string;

		/** The name for the proposal (updatable) */
		name?: string;

		/** Optional negotiation id if this proposal is a preferred deal proposal. */
		negotiationId?: string;

		/** Indicates whether the buyer/seller created the proposal.(readonly) */
		originatorRole?: string;

		/** Optional private auction id if this proposal is a private auction proposal. */
		privateAuctionId?: string;

		/** The unique id of the proposal. (readonly). */
		proposalId?: string;

		/** The current state of the proposal. (readonly) */
		proposalState?: string;

		/** The revision number for the proposal (readonly). */
		revisionNumber?: string;

		/** The time (ms since epoch) when the proposal was last revised (readonly). */
		revisionTimeMs?: string;
		seller?: Seller;

		/** Optional contact information of the seller (buyer-readonly). */
		sellerContacts?: Array<ContactInformation>;
	}

	export interface MarketplaceLabel {

		/** The accountId of the party that created the label. */
		accountId?: string;

		/** The creation time (in ms since epoch) for the label. */
		createTimeMs?: string;
		deprecatedMarketplaceDealParty?: MarketplaceDealParty;

		/** The label to use. */
		label?: string;
	}

	export interface MarketplaceDealParty {
		buyer?: Buyer;
		seller?: Seller;
	}

	export interface Seller {

		/** The unique id for the seller. The seller fills in this field. The seller account id is then available to buyer in the product. */
		accountId?: string;

		/** Optional sub-account id for the seller. */
		subAccountId?: string;
	}

	export interface CreateOrdersResponse {

		/** The list of proposals successfully created. */
		proposals?: Array<Proposal>;
	}


	/** A creative and its classification data. */
	export interface Creative {

		/** The HTML snippet that displays the ad when inserted in the web page. If set, videoURL, videoVastXML, and nativeAd should not be set. */
		HTMLSnippet?: string;

		/** Account id. */
		accountId?: number;

		/** The link to the Ad Preferences page. This is only supported for native ads. */
		adChoicesDestinationUrl?: string;
		adTechnologyProviders?: CreativeAdTechnologyProviders;

		/** Detected advertiser id, if any. Read-only. This field should not be set in requests. */
		advertiserId?: Array<string>;

		/** The name of the company being advertised in the creative. The value provided must exist in the advertisers.txt file. */
		advertiserName?: string;

		/** The agency id for this creative. */
		agencyId?: string;

		/** The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp). */
		apiUploadTimestamp?: Date;

		/** List of buyer selectable attributes for the ads that may be shown from this snippet. Each attribute is represented by an integer as defined in  buyer-declarable-creative-attributes.txt. */
		attribute?: Array<number>;

		/** A buyer-specific id identifying the creative in this ad. */
		buyerCreativeId?: string;

		/** The set of destination urls for the snippet. */
		clickThroughUrl?: Array<string>;

		/** Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests. */
		CreativeCorrections?: Array<CreativeCorrections>;

		/** Creative status identity type that the creative item applies to. Ad Exchange real-time bidding is migrating to the sizeless creative verification. Originally, Ad Exchange assigned creative verification status to a unique combination of a buyer creative ID and creative dimensions. Post-migration, a single verification status will be assigned at the buyer creative ID level. This field allows to distinguish whether a given creative status applies to a unique combination of a buyer creative ID and creative dimensions, or to a buyer creative ID as a whole. */
		creativeStatusIdentityType?: string;

		/** Top-level deals status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=DIRECT_DEALS (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from servingRestrictions directly. */
		dealsStatus?: string;

		/** Detected domains for this creative. Read-only. This field should not be set in requests. */
		detectedDomains?: Array<string>;

		/** The filtering reasons for the creative. Read-only. This field should not be set in requests. */
		filteringReasons?: CreativeFilteringReasons;

		/** Ad height. */
		height?: number;

		/** The set of urls to be called to record an impression. */
		impressionTrackingUrl?: Array<string>;

		/** Resource type. */
		kind?: string;

		/** Detected languages for this creative. Read-only. This field should not be set in requests. */
		languages?: Array<string>;

		/** If nativeAd is set, HTMLSnippet, videoVastXML, and the videoURL outside of nativeAd should not be set. (The videoURL inside nativeAd can be set.) */
		nativeAd?: CreativeNativeAd;

		/** Top-level open auction status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=OPEN_AUCTION (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from ServingRestrictions directly. */
		openAuctionStatus?: string;

		/** Detected product categories, if any. Each category is represented by an integer as defined in  ad-product-categories.txt. Read-only. This field should not be set in requests. */
		productCategories?: Array<number>;

		/** All restricted categories for the ads that may be shown from this snippet. Each category is represented by an integer as defined in the  ad-restricted-categories.txt. */
		restrictedCategories?: Array<number>;

		/** Detected sensitive categories, if any. Each category is represented by an integer as defined in  ad-sensitive-categories.txt. Read-only. This field should not be set in requests. */
		sensitiveCategories?: Array<number>;

		/** The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS vs HTTP request, or the type of auction). Read-only. This field should not be set in requests. See the examples in the Creatives guide for more details. */
		CreativeServingRestrictions?: Array<CreativeServingRestrictions>;

		/** List of vendor types for the ads that may be shown from this snippet. Each vendor type is represented by an integer as defined in vendors.txt. */
		vendorType?: Array<number>;

		/** The version for this creative. Read-only. This field should not be set in requests. */
		version?: number;

		/** The URL to fetch a video ad. If set, HTMLSnippet, videoVastXML, and nativeAd should not be set. Note, this is different from resource.native_ad.video_url above. */
		videoURL?: string;

		/** The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard. If set, HTMLSnippet, videoURL, and nativeAd and should not be set. */
		videoVastXML?: string;

		/** Ad width. */
		width?: number;
	}

	export interface CreativeAdTechnologyProviders {

		/** The detected ad technology provider IDs for this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/providers.csv for mapping of provider ID to provided name, a privacy policy URL, and a list of domains which can be attributed to the provider. If this creative contains provider IDs that are outside of those listed in the `BidRequest.adslot.consented_providers_settings.consented_providers` field on the  Authorized Buyers Real-Time Bidding protocol or the `BidRequest.user.ext.consented_providers_settings.consented_providers` field on the OpenRTB protocol, a bid submitted for a European Economic Area (EEA) user with this creative is not compliant with the GDPR policies as mentioned in the "Third-party Ad Technology Vendors" section of Authorized Buyers Program Guidelines. */
		detectedProviderIds?: Array<string>;

		/** Whether the creative contains an unidentified ad technology provider. If true, a bid submitted for a European Economic Area (EEA) user with this creative is not compliant with the GDPR policies as mentioned in the "Third-party Ad Technology Vendors" section of Authorized Buyers Program Guidelines. */
		hasUnidentifiedProvider?: boolean;
	}

	export interface CreativeCorrections {

		/** All known serving contexts containing serving status information. */
		CreativeCorrectionsContexts?: Array<CreativeCorrectionsContexts>;

		/** Additional details about the correction. */
		details?: Array<string>;

		/** The type of correction that was applied to the creative. */
		reason?: string;
	}

	export interface CreativeCorrectionsContexts {

		/** Only set when contextType=AUCTION_TYPE. Represents the auction types this correction applies to. */
		auctionType?: Array<string>;

		/** The type of context (e.g., location, platform, auction type, SSL-ness). */
		contextType?: string;

		/** Only set when contextType=LOCATION. Represents the geo criterias this correction applies to. */
		geoCriteriaId?: Array<number>;

		/** Only set when contextType=PLATFORM. Represents the platforms this correction applies to. */
		platform?: Array<string>;
	}

	export interface CreativeFilteringReasons {

		/** The date in ISO 8601 format for the data. The data is collected from 00:00:00 to 23:59:59 in PST. */
		date?: string;

		/** The filtering reasons. */
		CreativeFilteringReasonsReasons?: Array<CreativeFilteringReasonsReasons>;
	}

	export interface CreativeFilteringReasonsReasons {

		/** The number of times the creative was filtered for the status. The count is aggregated across all publishers on the exchange. */
		filteringCount?: string;

		/** The filtering status code as defined in  creative-status-codes.txt. */
		filteringStatus?: number;
	}

	export interface CreativeNativeAd {
		advertiser?: string;

		/** The app icon, for app download ads. */
		appIcon?: CreativeNativeAdAppIcon;

		/** A long description of the ad. */
		body?: string;

		/** A label for the button that the user is supposed to click. */
		callToAction?: string;

		/** The URL that the browser/SDK will load when the user clicks the ad. */
		clickLinkUrl?: string;

		/** The URL to use for click tracking. */
		clickTrackingUrl?: string;

		/** A short title for the ad. */
		headline?: string;

		/** A large image. */
		image?: CreativeNativeAdImage;

		/** The URLs are called when the impression is rendered. */
		impressionTrackingUrl?: Array<string>;

		/** A smaller image, for the advertiser logo. */
		logo?: CreativeNativeAdLogo;

		/** The price of the promoted app including the currency info. */
		price?: string;

		/** The app rating in the app store. Must be in the range [0-5]. */
		starRating?: number;

		/** The URL of the XML VAST for a native ad. Note this is a separate field from resource.video_url. */
		videoURL?: string;
	}

	export interface CreativeNativeAdAppIcon {
		height?: number;
		url?: string;
		width?: number;
	}

	export interface CreativeNativeAdImage {
		height?: number;
		url?: string;
		width?: number;
	}

	export interface CreativeNativeAdLogo {
		height?: number;
		url?: string;
		width?: number;
	}

	export interface CreativeServingRestrictions {

		/** All known contexts/restrictions. */
		CreativeServingRestrictionsContexts?: Array<CreativeServingRestrictionsContexts>;

		/** The reasons for disapproval within this restriction, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED or CONDITIONALLY_APPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue. */
		CreativeServingRestrictionsDisapprovalReasons?: Array<CreativeServingRestrictionsDisapprovalReasons>;

		/** Why the creative is ineligible to serve in this context (e.g., it has been explicitly disapproved or is pending review). */
		reason?: string;
	}

	export interface CreativeServingRestrictionsContexts {

		/** Only set when contextType=AUCTION_TYPE. Represents the auction types this restriction applies to. */
		auctionType?: Array<string>;

		/** The type of context (e.g., location, platform, auction type, SSL-ness). */
		contextType?: string;

		/** Only set when contextType=LOCATION. Represents the geo criterias this restriction applies to. Impressions are considered to match a context if either the user location or publisher location matches a given geoCriteriaId. */
		geoCriteriaId?: Array<number>;

		/** Only set when contextType=PLATFORM. Represents the platforms this restriction applies to. */
		platform?: Array<string>;
	}

	export interface CreativeServingRestrictionsDisapprovalReasons {

		/** Additional details about the reason for disapproval. */
		details?: Array<string>;

		/** The categorized reason for disapproval. */
		reason?: string;
	}


	/** The external deal ids associated with a creative. */
	export interface CreativeDealIds {

		/** A list of external deal ids and ARC approval status. */
		CreativeDealIdsDealStatuses?: Array<CreativeDealIdsDealStatuses>;

		/** Resource type. */
		kind?: string;
	}

	export interface CreativeDealIdsDealStatuses {

		/** ARC approval status. */
		arcStatus?: string;

		/** External deal ID. */
		dealId?: string;

		/** Publisher ID. */
		webPropertyId?: number;
	}


	/** The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative. */
	export interface CreativesList {

		/** A list of creatives. */
		items?: Array<Creative>;

		/** Resource type. */
		kind?: string;

		/** Continuation token used to page through creatives. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string;
	}

	export interface DeleteOrderDealsRequest {

		/** List of deals to delete for a given proposal */
		dealIds?: Array<string>;

		/** The last known proposal revision number. */
		proposalRevisionNumber?: string;

		/** Indicates an optional action to take on the proposal */
		updateAction?: string;
	}

	export interface DeleteOrderDealsResponse {

		/** List of deals deleted (in the same proposal as passed in the request) */
		deals?: Array<MarketplaceDeal>;

		/** The updated revision number for the proposal. */
		proposalRevisionNumber?: string;
	}


	/** This message carries publisher provided breakdown. E.g. {dimension_type: 'COUNTRY', [{dimension_value: {id: 1, name: 'US'}}, {dimension_value: {id: 2, name: 'UK'}}]} */
	export interface Dimension {
		dimensionType?: string;
		dimensionValues?: Array<DimensionDimensionValue>;
	}


	/** Value of the dimension. */
	export interface DimensionDimensionValue {

		/** Id of the dimension. */
		id?: number;

		/** Name of the dimension mainly for debugging purposes, except for the case of CREATIVE_SIZE. For CREATIVE_SIZE, strings are used instead of ids. */
		name?: string;

		/** Percent of total impressions for a dimension type. e.g. {dimension_type: 'GENDER', [{dimension_value: {id: 1, name: 'MALE', percentage: 60}}]} Gender MALE is 60% of all impressions which have gender. */
		percentage?: number;
	}

	export interface EditAllOrderDealsRequest {

		/** List of deals to edit. Service may perform 3 different operations based on comparison of deals in this list vs deals already persisted in database: 1. Add new deal to proposal If a deal in this list does not exist in the proposal, the service will create a new deal and add it to the proposal. Validation will follow AddOrderDealsRequest. 2. Update existing deal in the proposal If a deal in this list already exist in the proposal, the service will update that existing deal to this new deal in the request. Validation will follow UpdateOrderDealsRequest. 3. Delete deals from the proposal (just need the id) If a existing deal in the proposal is not present in this list, the service will delete that deal from the proposal. Validation will follow DeleteOrderDealsRequest. */
		deals?: Array<MarketplaceDeal>;

		/**
		 * Represents a proposal in the marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Each field in a proposal can have one of the following setting:
		 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
		 */
		proposal?: Proposal;

		/** The last known revision number for the proposal. */
		proposalRevisionNumber?: string;

		/** Indicates an optional action to take on the proposal */
		updateAction?: string;
	}

	export interface EditAllOrderDealsResponse {

		/** List of all deals in the proposal after edit. */
		deals?: Array<MarketplaceDeal>;

		/** The latest revision number after the update has been applied. */
		orderRevisionNumber?: string;
	}

	export interface GetOffersResponse {

		/** The returned list of products. */
		products?: Array<Product>;
	}


	/**
	 * A product is segment of inventory that a seller wishes to sell. It is associated with certain terms and targeting information which helps buyer know more about the inventory. Each field in a product can have one of the following setting:
	 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
	 */
	export interface Product {
		billedBuyer?: Buyer;
		buyer?: Buyer;

		/** Creation time in ms. since epoch (readonly) */
		creationTimeMs?: string;

		/** Optional contact information for the creator of this product. (buyer-readonly) */
		creatorContacts?: Array<ContactInformation>;

		/** The role that created the offer. Set to BUYER for buyer initiated offers. */
		creatorRole?: string;
		deliveryControl?: DeliveryControl;

		/** The proposed end time for the deal (ms since epoch) (buyer-readonly) */
		flightEndTimeMs?: string;

		/** Inventory availability dates. (times are in ms since epoch) The granularity is generally in the order of seconds. (buyer-readonly) */
		flightStartTimeMs?: string;

		/** If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false. */
		hasCreatorSignedOff?: boolean;

		/** What exchange will provide this inventory (readonly, except on create). */
		inventorySource?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#product". */
		kind?: string;

		/** Optional List of labels for the product (optional, buyer-readonly). */
		labels?: Array<MarketplaceLabel>;

		/** Time of last update in ms. since epoch (readonly) */
		lastUpdateTimeMs?: string;

		/** Optional legacy offer id if this offer is a preferred deal offer. */
		legacyOfferId?: string;

		/** Marketplace publisher profile Id. This Id differs from the regular publisher_profile_id in that 1. This is a new id, the old Id will be deprecated in 2017. 2. This id uniquely identifies a publisher profile by itself. */
		marketplacePublisherProfileId?: string;

		/** The name for this product as set by the seller. (buyer-readonly) */
		name?: string;

		/** Optional private auction id if this offer is a private auction offer. */
		privateAuctionId?: string;

		/** The unique id for the product (readonly) */
		productId?: string;

		/** Id of the publisher profile for a given seller. A (seller.account_id, publisher_profile_id) pair uniquely identifies a publisher profile. Buyers can call the PublisherProfiles::List endpoint to get a list of publisher profiles for a given seller. */
		publisherProfileId?: string;

		/** This message carries publisher provided forecasting information. */
		publisherProvidedForecast?: PublisherProvidedForecast;

		/** The revision number of the product. (readonly) */
		revisionNumber?: string;
		seller?: Seller;

		/** Targeting that is shared between the buyer and the seller. Each targeting criteria has a specified key and for each key there is a list of inclusion value or exclusion values. (buyer-readonly) */
		sharedTargetings?: Array<SharedTargeting>;

		/** The state of the product. (buyer-readonly) */
		state?: string;

		/** The syndication product associated with the deal. (readonly, except on create) */
		syndicationProduct?: string;
		terms?: DealTerms;

		/** The web property code for the seller. This field is meant to be copied over as is when creating deals. */
		webPropertyCode?: string;
	}


	/** This message carries publisher provided forecasting information. */
	export interface PublisherProvidedForecast {

		/** Publisher provided dimensions. E.g. geo, sizes etc... */
		dimensions?: Array<Dimension>;

		/** Publisher provided weekly impressions. */
		weeklyImpressions?: string;

		/** Publisher provided weekly uniques. */
		weeklyUniques?: string;
	}

	export interface GetOrderDealsResponse {

		/** List of deals for the proposal */
		deals?: Array<MarketplaceDeal>;
	}

	export interface GetOrderNotesResponse {

		/** The list of matching notes. The notes for a proposal are ordered from oldest to newest. If the notes span multiple proposals, they will be grouped by proposal, with the notes for the most recently modified proposal appearing first. */
		notes?: Array<MarketplaceNote>;
	}

	export interface GetOrdersResponse {

		/** The list of matching proposals. */
		proposals?: Array<Proposal>;
	}

	export interface GetPublisherProfilesByAccountIdResponse {

		/** Profiles for the requested publisher */
		profiles?: Array<PublisherProfileApiProto>;
	}

	export interface PublisherProfileApiProto {

		/** Publisher provided info on its audience. */
		audience?: string;

		/** A pitch statement for the buyer */
		buyerPitchStatement?: string;

		/** Direct contact for the publisher profile. */
		directContact?: string;

		/** Exchange where this publisher profile is from. E.g. AdX, Rubicon etc... */
		exchange?: string;

		/** Link to publisher's Google+ page. */
		googlePlusLink?: string;

		/** True, if this is the parent profile, which represents all domains owned by the publisher. */
		isParent?: boolean;

		/** True, if this profile is published. Deprecated for state. */
		isPublished?: boolean;

		/** Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#publisherProfileApiProto". */
		kind?: string;

		/** The url to the logo for the publisher. */
		logoUrl?: string;

		/** The url for additional marketing and sales materials. */
		mediaKitLink?: string;
		name?: string;

		/** Publisher provided overview. */
		overview?: string;

		/** The pair of (seller.account_id, profile_id) uniquely identifies a publisher profile for a given publisher. */
		profileId?: number;

		/** Programmatic contact for the publisher profile. */
		programmaticContact?: string;

		/** The list of domains represented in this publisher profile. Empty if this is a parent profile. */
		publisherDomains?: Array<string>;

		/** Unique Id for publisher profile. */
		publisherProfileId?: string;

		/** This message carries publisher provided forecasting information. */
		publisherProvidedForecast?: PublisherProvidedForecast;

		/** Link to publisher rate card */
		rateCardInfoLink?: string;

		/** Link for a sample content page. */
		samplePageLink?: string;
		seller?: Seller;

		/** State of the publisher profile. */
		state?: string;

		/** Publisher provided key metrics and rankings. */
		topHeadlines?: Array<string>;
	}


	/** The configuration data for an Ad Exchange performance report list. */
	export interface PerformanceReport {

		/** The number of bid responses with an ad. */
		bidRate?: number;

		/** The number of bid requests sent to your bidder. */
		bidRequestRate?: number;

		/** Rate of various prefiltering statuses per match. Please refer to the callout-status-codes.txt file for different statuses. */
		calloutStatusRate?: Array<string>;

		/** Average QPS for cookie matcher operations. */
		cookieMatcherStatusRate?: Array<string>;

		/** Rate of ads with a given status. Please refer to the creative-status-codes.txt file for different statuses. */
		creativeStatusRate?: Array<string>;

		/** The number of bid responses that were filtered due to a policy violation or other errors. */
		filteredBidRate?: number;

		/** Average QPS for hosted match operations. */
		hostedMatchStatusRate?: Array<string>;

		/** The number of potential queries based on your pretargeting settings. */
		inventoryMatchRate?: number;

		/** Resource type. */
		kind?: string;

		/** The 50th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report. */
		latency50thPercentile?: number;

		/** The 85th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report. */
		latency85thPercentile?: number;

		/** The 95th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report. */
		latency95thPercentile?: number;

		/** Rate of various quota account statuses per quota check. */
		noQuotaInRegion?: number;

		/** Rate of various quota account statuses per quota check. */
		outOfQuota?: number;

		/** Average QPS for pixel match requests from clients. */
		pixelMatchRequests?: number;

		/** Average QPS for pixel match responses from clients. */
		pixelMatchResponses?: number;

		/** The configured quota limits for this account. */
		quotaConfiguredLimit?: number;

		/** The throttled quota limits for this account. */
		quotaThrottledLimit?: number;

		/** The trading location of this data. */
		region?: string;

		/** The number of properly formed bid responses received by our servers within the deadline. */
		successfulRequestRate?: number;

		/** The unix timestamp of the starting time of this performance data. */
		timestamp?: string;

		/** The number of bid responses that were unsuccessful due to timeouts, incorrect formatting, etc. */
		unsuccessfulRequestRate?: number;
	}


	/** The configuration data for an Ad Exchange performance report list. */
	export interface PerformanceReportList {

		/** Resource type. */
		kind?: string;

		/** A list of performance reports relevant for the account. */
		performanceReport?: Array<PerformanceReport>;
	}

	export interface PretargetingConfig {

		/** The id for billing purposes, provided for reference. Leave this field blank for insert requests; the id will be generated automatically. */
		billingId?: string;

		/** The config id; generated automatically. Leave this field blank for insert requests. */
		configId?: string;

		/** The name of the config. Must be unique. Required for all requests. */
		configName?: string;

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
		isActive?: boolean;

		/** The kind of the resource, i.e. "adexchangebuyer#pretargetingConfig". */
		kind?: string;

		/** Request containing any of these language codes will match. */
		languages?: Array<string>;

		/** The maximum QPS allocated to this pretargeting configuration, used for pretargeting-level QPS limits. By default, this is not set, which indicates that there is no QPS limit at the configuration level (a global or account-level limit may still be imposed). */
		maximumQps?: string;

		/** Requests where the predicted viewability is below the specified decile will not match. E.g. if the buyer sets this value to 5, requests from slots where the predicted viewability is below 50% will not match. If the predicted viewability is unknown this field will be ignored. */
		minimumViewabilityDecile?: number;

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

		/** Requests containing the specified type of user data will match. Possible values are HOSTED_MATCH_DATA, which means the request is cookie-targetable and has a match in the buyer's hosted match table, and COOKIE_OR_IDFA, which means the request has either a targetable cookie or an iOS IDFA. */
		userIdentifierDataRequired?: Array<string>;

		/** Requests containing any of these user list ids will match. */
		userLists?: Array<string>;

		/** Requests that allow any of these vendor ids will match. Values are from vendors.txt in the downloadable files section. */
		vendorTypes?: Array<string>;

		/** Requests containing any of these vertical ids will match. */
		verticals?: Array<string>;

		/** Video requests satisfying any of these player size constraints will match. */
		PretargetingConfigVideoPlayerSizes?: Array<PretargetingConfigVideoPlayerSizes>;
	}

	export interface PretargetingConfigDimensions {

		/** Height in pixels. */
		height?: string;

		/** Width in pixels. */
		width?: string;
	}

	export interface PretargetingConfigExcludedPlacements {

		/** The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement. */
		token?: string;

		/** The type of the placement. */
		type?: string;
	}

	export interface PretargetingConfigPlacements {

		/** The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement. */
		token?: string;

		/** The type of the placement. */
		type?: string;
	}

	export interface PretargetingConfigVideoPlayerSizes {

		/** The type of aspect ratio. Leave this field blank to match all aspect ratios. */
		aspectRatio?: string;

		/** The minimum player height in pixels. Leave this field blank to match any player height. */
		minHeight?: string;

		/** The minimum player width in pixels. Leave this field blank to match any player width. */
		minWidth?: string;
	}

	export interface PretargetingConfigList {

		/** A list of pretargeting configs */
		items?: Array<PretargetingConfig>;

		/** Resource type. */
		kind?: string;
	}

	export interface UpdatePrivateAuctionProposalRequest {

		/** The externalDealId of the deal to be updated. */
		externalDealId?: string;

		/** A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number. */
		note?: MarketplaceNote;

		/** The current revision number of the proposal to be updated. */
		proposalRevisionNumber?: string;

		/** The proposed action on the private auction proposal. */
		updateAction?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves the authenticated user's list of accounts.
		 * Get accounts
		 * @return {void} Successful response
		 */
		Adexchangebuyer_accounts_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one account by ID.
		 * Get accounts/{id}
		 * @param {number} id The account id
		 * @return {void} Successful response
		 */
		Adexchangebuyer_accounts_get(id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing account. This method supports patch semantics.
		 * Patch accounts/{id}
		 * @param {number} id The account id
		 * @param {boolean} confirmUnsafeAccountChange Confirmation for erasing bidder and cookie matching urls.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_accounts_patch(id: number, confirmUnsafeAccountChange: boolean, requestBody: Account): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'accounts/' + id + '?confirmUnsafeAccountChange=' + confirmUnsafeAccountChange, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing account.
		 * Put accounts/{id}
		 * @param {number} id The account id
		 * @param {boolean} confirmUnsafeAccountChange Confirmation for erasing bidder and cookie matching urls.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_accounts_update(id: number, confirmUnsafeAccountChange: boolean, requestBody: Account): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'accounts/' + id + '?confirmUnsafeAccountChange=' + confirmUnsafeAccountChange, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of billing information for all accounts of the authenticated user.
		 * Get billinginfo
		 * @return {void} Successful response
		 */
		Adexchangebuyer_billingInfo_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'billinginfo', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the billing information for one account specified by account ID.
		 * Get billinginfo/{accountId}
		 * @param {number} accountId The account id.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_billingInfo_get(accountId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'billinginfo/' + accountId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the budget information for the adgroup specified by the accountId and billingId.
		 * Get billinginfo/{accountId}/{billingId}
		 * @param {string} accountId The account id to get the budget information for.
		 * @param {string} billingId The billing id to get the budget information for.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_budget_get(accountId: string, billingId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'billinginfo/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/' + (billingId == null ? '' : encodeURIComponent(billingId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
		 * Patch billinginfo/{accountId}/{billingId}
		 * @param {string} accountId The account id associated with the budget being updated.
		 * @param {string} billingId The billing id associated with the budget being updated.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_budget_patch(accountId: string, billingId: string, requestBody: Budget): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'billinginfo/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/' + (billingId == null ? '' : encodeURIComponent(billingId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.
		 * Put billinginfo/{accountId}/{billingId}
		 * @param {string} accountId The account id associated with the budget being updated.
		 * @param {string} billingId The billing id associated with the budget being updated.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_budget_update(accountId: string, billingId: string, requestBody: Budget): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'billinginfo/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/' + (billingId == null ? '' : encodeURIComponent(billingId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
		 * Get creatives
		 * @param {Array<number>} accountId When specified, only creatives for the given account ids are returned.
		 * @param {Array<string>} buyerCreativeId When specified, only creatives for the given buyer creative ids are returned.
		 * @param {Adexchangebuyer_creatives_listDealsStatusFilter} dealsStatusFilter When specified, only creatives having the given deals status are returned.
		 * @param {number} maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
		 * @param {Adexchangebuyer_creatives_listDealsStatusFilter} openAuctionStatusFilter When specified, only creatives having the given open auction status are returned.
		 * @param {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_creatives_list(accountId: Array<number>, buyerCreativeId: Array<string>, dealsStatusFilter: Adexchangebuyer_creatives_listDealsStatusFilter, maxResults: number, openAuctionStatusFilter: Adexchangebuyer_creatives_listDealsStatusFilter, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'creatives?' + accountId.map(z => `accountId=${z}`).join('&') + '&' + buyerCreativeId.map(z => `buyerCreativeId=${encodeURIComponent(z)}`).join('&') + '&dealsStatusFilter=' + dealsStatusFilter + '&maxResults=' + maxResults + '&openAuctionStatusFilter=' + openAuctionStatusFilter + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Submit a new creative.
		 * Post creatives
		 * @return {void} Successful response
		 */
		Adexchangebuyer_creatives_insert(requestBody: Creative): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'creatives', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
		 * Get creatives/{accountId}/{buyerCreativeId}
		 * @param {number} accountId The id for the account that will serve this creative.
		 * @param {string} buyerCreativeId The buyer-specific id for this creative.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_creatives_get(accountId: number, buyerCreativeId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'creatives/' + accountId + '/' + (buyerCreativeId == null ? '' : encodeURIComponent(buyerCreativeId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a deal id association for the creative.
		 * Post creatives/{accountId}/{buyerCreativeId}/addDeal/{dealId}
		 * @param {number} accountId The id for the account that will serve this creative.
		 * @param {string} buyerCreativeId The buyer-specific id for this creative.
		 * @param {string} dealId The id of the deal id to associate with this creative.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_creatives_addDeal(accountId: number, buyerCreativeId: string, dealId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'creatives/' + accountId + '/' + (buyerCreativeId == null ? '' : encodeURIComponent(buyerCreativeId)) + '/addDeal/' + (dealId == null ? '' : encodeURIComponent(dealId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the external deal ids associated with the creative.
		 * Get creatives/{accountId}/{buyerCreativeId}/listDeals
		 * @param {number} accountId The id for the account that will serve this creative.
		 * @param {string} buyerCreativeId The buyer-specific id for this creative.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_creatives_listDeals(accountId: number, buyerCreativeId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'creatives/' + accountId + '/' + (buyerCreativeId == null ? '' : encodeURIComponent(buyerCreativeId)) + '/listDeals', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a deal id associated with the creative.
		 * Post creatives/{accountId}/{buyerCreativeId}/removeDeal/{dealId}
		 * @param {number} accountId The id for the account that will serve this creative.
		 * @param {string} buyerCreativeId The buyer-specific id for this creative.
		 * @param {string} dealId The id of the deal id to disassociate with this creative.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_creatives_removeDeal(accountId: number, buyerCreativeId: string, dealId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'creatives/' + accountId + '/' + (buyerCreativeId == null ? '' : encodeURIComponent(buyerCreativeId)) + '/removeDeal/' + (dealId == null ? '' : encodeURIComponent(dealId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the authenticated user's list of performance metrics.
		 * Get performancereport
		 * @param {string} accountId The account id to get the reports.
		 * @param {string} endDateTime The end time of the report in ISO 8601 timestamp format using UTC.
		 * @param {string} startDateTime The start time of the report in ISO 8601 timestamp format using UTC.
		 * @param {number} maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
		 * @param {string} pageToken A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_performanceReport_list(accountId: string, endDateTime: string, startDateTime: string, maxResults: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'performancereport?accountId=' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&endDateTime=' + (endDateTime == null ? '' : encodeURIComponent(endDateTime)) + '&startDateTime=' + (startDateTime == null ? '' : encodeURIComponent(startDateTime)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of the authenticated user's pretargeting configurations.
		 * Get pretargetingconfigs/{accountId}
		 * @param {string} accountId The account id to get the pretargeting configs for.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_pretargetingConfig_list(accountId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pretargetingconfigs/' + (accountId == null ? '' : encodeURIComponent(accountId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new pretargeting configuration.
		 * Post pretargetingconfigs/{accountId}
		 * @param {string} accountId The account id to insert the pretargeting config for.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_pretargetingConfig_insert(accountId: string, requestBody: PretargetingConfig): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pretargetingconfigs/' + (accountId == null ? '' : encodeURIComponent(accountId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @return {void} Successful response
		 */
		Adexchangebuyer_pretargetingConfig_get(accountId: string, configId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pretargetingconfigs/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/' + (configId == null ? '' : encodeURIComponent(configId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing pretargeting config. This method supports patch semantics.
		 * Patch pretargetingconfigs/{accountId}/{configId}
		 * @param {string} accountId The account id to update the pretargeting config for.
		 * @param {string} configId The specific id of the configuration to update.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_pretargetingConfig_patch(accountId: string, configId: string, requestBody: PretargetingConfig): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'pretargetingconfigs/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/' + (configId == null ? '' : encodeURIComponent(configId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing pretargeting config.
		 * Put pretargetingconfigs/{accountId}/{configId}
		 * @param {string} accountId The account id to update the pretargeting config for.
		 * @param {string} configId The specific id of the configuration to update.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_pretargetingConfig_update(accountId: string, configId: string, requestBody: PretargetingConfig): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'pretargetingconfigs/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/' + (configId == null ? '' : encodeURIComponent(configId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a given private auction proposal
		 * Post privateauction/{privateAuctionId}/updateproposal
		 * @return {void} Successful response
		 */
		Adexchangebuyer_marketplaceprivateauction_updateproposal(privateAuctionId: string, requestBody: UpdatePrivateAuctionProposalRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'privateauction/' + (privateAuctionId == null ? '' : encodeURIComponent(privateAuctionId)) + '/updateproposal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the requested product.
		 * Get products/search
		 * @param {string} pqlQuery The pql query used to query for products.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_products_search(pqlQuery: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'products/search?pqlQuery=' + (pqlQuery == null ? '' : encodeURIComponent(pqlQuery)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the requested product by id.
		 * Get products/{productId}
		 * @param {string} productId The id for the product to get the head revision for.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_products_get(productId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'products/' + (productId == null ? '' : encodeURIComponent(productId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create the given list of proposals
		 * Post proposals/insert
		 * @return {void} Successful response
		 */
		Adexchangebuyer_proposals_insert(requestBody: CreateOrdersRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'proposals/insert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search for proposals using pql query
		 * Get proposals/search
		 * @param {string} pqlQuery Query string to retrieve specific proposals.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_proposals_search(pqlQuery: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'proposals/search?pqlQuery=' + (pqlQuery == null ? '' : encodeURIComponent(pqlQuery)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a proposal given its id
		 * Get proposals/{proposalId}
		 * @param {string} proposalId Id of the proposal to retrieve.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_proposals_get(proposalId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all the deals for a given proposal
		 * Get proposals/{proposalId}/deals
		 * @param {string} proposalId The proposalId to get deals for. To search across all proposals specify order_id = '-' as part of the URL.
		 * @param {string} pqlQuery Query string to retrieve specific deals.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_marketplacedeals_list(proposalId: string, pqlQuery: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/deals&pqlQuery=' + (pqlQuery == null ? '' : encodeURIComponent(pqlQuery)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the specified deals from the proposal
		 * Post proposals/{proposalId}/deals/delete
		 * @param {string} proposalId The proposalId to delete deals from.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_marketplacedeals_delete(proposalId: string, requestBody: DeleteOrderDealsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/deals/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add new deals for the specified proposal
		 * Post proposals/{proposalId}/deals/insert
		 * @param {string} proposalId proposalId for which deals need to be added.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_marketplacedeals_insert(proposalId: string, requestBody: AddOrderDealsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/deals/insert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Replaces all the deals in the proposal with the passed in deals
		 * Post proposals/{proposalId}/deals/update
		 * @param {string} proposalId The proposalId to edit deals on.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_marketplacedeals_update(proposalId: string, requestBody: EditAllOrderDealsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/deals/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the notes associated with a proposal
		 * Get proposals/{proposalId}/notes
		 * @param {string} proposalId The proposalId to get notes for. To search across all proposals specify order_id = '-' as part of the URL.
		 * @param {string} pqlQuery Query string to retrieve specific notes. To search the text contents of notes, please use syntax like "WHERE note.note = "foo" or "WHERE note.note LIKE "%bar%"
		 * @return {void} Successful response
		 */
		Adexchangebuyer_marketplacenotes_list(proposalId: string, pqlQuery: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/notes&pqlQuery=' + (pqlQuery == null ? '' : encodeURIComponent(pqlQuery)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Add notes to the proposal
		 * Post proposals/{proposalId}/notes/insert
		 * @param {string} proposalId The proposalId to add notes for.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_marketplacenotes_insert(proposalId: string, requestBody: AddOrderNotesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/notes/insert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the given proposal to indicate that setup has been completed.
		 * Post proposals/{proposalId}/setupcomplete
		 * @param {string} proposalId The proposal id for which the setup is complete
		 * @return {void} Successful response
		 */
		Adexchangebuyer_proposals_setupcomplete(proposalId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/setupcomplete', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the given proposal. This method supports patch semantics.
		 * Patch proposals/{proposalId}/{revisionNumber}/{updateAction}
		 * @param {string} proposalId The proposal id to update.
		 * @param {string} revisionNumber The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.
		 * @param {Adexchangebuyer_proposals_patchUpdateAction} updateAction The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_proposals_patch(proposalId: string, revisionNumber: string, updateAction: Adexchangebuyer_proposals_patchUpdateAction, requestBody: Proposal): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/' + (revisionNumber == null ? '' : encodeURIComponent(revisionNumber)) + '/' + updateAction, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the given proposal
		 * Put proposals/{proposalId}/{revisionNumber}/{updateAction}
		 * @param {string} proposalId The proposal id to update.
		 * @param {string} revisionNumber The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.
		 * @param {Adexchangebuyer_proposals_patchUpdateAction} updateAction The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_proposals_update(proposalId: string, revisionNumber: string, updateAction: Adexchangebuyer_proposals_patchUpdateAction, requestBody: Proposal): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/' + (revisionNumber == null ? '' : encodeURIComponent(revisionNumber)) + '/' + updateAction, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the requested publisher profile(s) by publisher accountId.
		 * Get publisher/{accountId}/profiles
		 * @param {number} accountId The accountId of the publisher to get profiles for.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_pubprofiles_list(accountId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'publisher/' + accountId + '/profiles', { observe: 'response', responseType: 'text' });
		}
	}

	export enum Adexchangebuyer_creatives_listDealsStatusFilter { approved = 0, conditionally_approved = 1, disapproved = 2, not_checked = 3 }

	export enum Adexchangebuyer_proposals_patchUpdateAction { accept = 0, cancel = 1, propose = 2, proposeAndAccept = 3, unknownAction = 4, updateNonTerms = 5 }

}

