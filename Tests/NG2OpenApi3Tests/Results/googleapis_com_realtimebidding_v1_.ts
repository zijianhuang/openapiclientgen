import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A request to activate a pretargeting configuration. Sets the configuration's state to ACTIVE. */
	export interface ActivatePretargetingConfigRequest {
	}

	/** A request to activate a pretargeting configuration. Sets the configuration's state to ACTIVE. */
	export interface ActivatePretargetingConfigRequestFormProperties {
	}
	export function CreateActivatePretargetingConfigRequestFormGroup() {
		return new FormGroup<ActivatePretargetingConfigRequestFormProperties>({
		});

	}


	/** The list of detected Ad Technology Providers for this creative. Bids placed for inventory that will serve to EEA or UK users are expected to comply with GDPR requirements. You must ensure that the creatives used in such bids should contain only user consented ad technology providers as indicated in the bid request. Google reserves the right to filter non-compliant bids. User consented ad technology providers can be found in the [Google Protocol](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) with the `BidRequest.adslot.consented_providers_settings` field, and can be found as an [OpenRTB extension](https://developers.google.com/authorized-buyers/rtb/downloads/openrtb-adx-proto) with the `BidRequest.user.ext.consented_providers_settings` and `BidRequest.user.ext.consent` fields. See https://support.google.com/authorizedbuyers/answer/9789378 for additional information about the Google TCF v2 integration. */
	export interface AdTechnologyProviders {

		/** The detected IAB Global Vendor List (GVL) IDs for this creative. See the IAB Global Vendor List at https://vendor-list.consensu.org/v2/vendor-list.json for details about the vendors. */
		detectedGvlIds?: Array<string>;

		/** The detected [Google Ad Tech Providers (ATP)](https://support.google.com/admanager/answer/9012903) for this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/providers.csv for mapping of provider ID to provided name, a privacy policy URL, and a list of domains which can be attributed to the provider. */
		detectedProviderIds?: Array<string>;

		/** Domains of detected unidentified ad technology providers (if any). You must ensure that the creatives used in bids placed for inventory that will serve to EEA or UK users does not contain unidentified ad technology providers. Google reserves the right to filter non-compliant bids. */
		unidentifiedProviderDomains?: Array<string>;
	}

	/** The list of detected Ad Technology Providers for this creative. Bids placed for inventory that will serve to EEA or UK users are expected to comply with GDPR requirements. You must ensure that the creatives used in such bids should contain only user consented ad technology providers as indicated in the bid request. Google reserves the right to filter non-compliant bids. User consented ad technology providers can be found in the [Google Protocol](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) with the `BidRequest.adslot.consented_providers_settings` field, and can be found as an [OpenRTB extension](https://developers.google.com/authorized-buyers/rtb/downloads/openrtb-adx-proto) with the `BidRequest.user.ext.consented_providers_settings` and `BidRequest.user.ext.consent` fields. See https://support.google.com/authorizedbuyers/answer/9789378 for additional information about the Google TCF v2 integration. */
	export interface AdTechnologyProvidersFormProperties {
	}
	export function CreateAdTechnologyProvidersFormGroup() {
		return new FormGroup<AdTechnologyProvidersFormProperties>({
		});

	}


	/** A request to start targeting the provided app IDs in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting. */
	export interface AddTargetedAppsRequest {

		/** A list of app IDs to target in the pretargeting configuration. These values will be added to the list of targeted app IDs in PretargetingConfig.appTargeting.mobileAppTargeting.values. */
		appIds?: Array<string>;

		/** Required. The targeting mode that should be applied to the list of app IDs. If there are existing targeted app IDs, must be equal to the existing PretargetingConfig.appTargeting.mobileAppTargeting.targetingMode or a 400 bad request error will be returned. */
		targetingMode?: AddTargetedAppsRequestTargetingMode | null;
	}

	/** A request to start targeting the provided app IDs in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting. */
	export interface AddTargetedAppsRequestFormProperties {

		/** Required. The targeting mode that should be applied to the list of app IDs. If there are existing targeted app IDs, must be equal to the existing PretargetingConfig.appTargeting.mobileAppTargeting.targetingMode or a 400 bad request error will be returned. */
		targetingMode: FormControl<AddTargetedAppsRequestTargetingMode | null | undefined>,
	}
	export function CreateAddTargetedAppsRequestFormGroup() {
		return new FormGroup<AddTargetedAppsRequestFormProperties>({
			targetingMode: new FormControl<AddTargetedAppsRequestTargetingMode | null | undefined>(undefined),
		});

	}

	export enum AddTargetedAppsRequestTargetingMode { TARGETING_MODE_UNSPECIFIED = 'TARGETING_MODE_UNSPECIFIED', INCLUSIVE = 'INCLUSIVE', EXCLUSIVE = 'EXCLUSIVE' }


	/** A request to start targeting the provided publishers in a specific pretargeting configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting. */
	export interface AddTargetedPublishersRequest {

		/** A list of publisher IDs to target in the pretargeting configuration. These values will be added to the list of targeted publisher IDs in PretargetingConfig.publisherTargeting.values. Publishers are identified by their publisher ID from ads.txt / app-ads.txt. See https://iabtechlab.com/ads-txt/ and https://iabtechlab.com/app-ads-txt/ for more details. */
		publisherIds?: Array<string>;

		/** Required. The targeting mode that should be applied to the list of publisher IDs. If are existing publisher IDs, must be equal to the existing PretargetingConfig.publisherTargeting.targetingMode or a 400 bad request error will be returned. */
		targetingMode?: AddTargetedAppsRequestTargetingMode | null;
	}

	/** A request to start targeting the provided publishers in a specific pretargeting configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting. */
	export interface AddTargetedPublishersRequestFormProperties {

		/** Required. The targeting mode that should be applied to the list of publisher IDs. If are existing publisher IDs, must be equal to the existing PretargetingConfig.publisherTargeting.targetingMode or a 400 bad request error will be returned. */
		targetingMode: FormControl<AddTargetedAppsRequestTargetingMode | null | undefined>,
	}
	export function CreateAddTargetedPublishersRequestFormGroup() {
		return new FormGroup<AddTargetedPublishersRequestFormProperties>({
			targetingMode: new FormControl<AddTargetedAppsRequestTargetingMode | null | undefined>(undefined),
		});

	}


	/** A request to start targeting the provided sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting. */
	export interface AddTargetedSitesRequest {

		/** A list of site URLs to target in the pretargeting configuration. These values will be added to the list of targeted URLs in PretargetingConfig.webTargeting.values. */
		sites?: Array<string>;

		/** Required. The targeting mode that should be applied to the list of site URLs. If there are existing targeted sites, must be equal to the existing PretargetingConfig.webTargeting.targetingMode or a 400 bad request error will be returned. */
		targetingMode?: AddTargetedAppsRequestTargetingMode | null;
	}

	/** A request to start targeting the provided sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting. */
	export interface AddTargetedSitesRequestFormProperties {

		/** Required. The targeting mode that should be applied to the list of site URLs. If there are existing targeted sites, must be equal to the existing PretargetingConfig.webTargeting.targetingMode or a 400 bad request error will be returned. */
		targetingMode: FormControl<AddTargetedAppsRequestTargetingMode | null | undefined>,
	}
	export function CreateAddTargetedSitesRequestFormGroup() {
		return new FormGroup<AddTargetedSitesRequestFormProperties>({
			targetingMode: new FormControl<AddTargetedAppsRequestTargetingMode | null | undefined>(undefined),
		});

	}


	/** Detected advertiser and brand information. */
	export interface AdvertiserAndBrand {

		/** See https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt for the list of possible values. Can be used to filter the response of the creatives.list method. */
		advertiserId?: string | null;

		/** Advertiser name. Can be used to filter the response of the creatives.list method. */
		advertiserName?: string | null;

		/** Detected brand ID or zero if no brand has been detected. See https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt for the list of possible values. Can be used to filter the response of the creatives.list method. */
		brandId?: string | null;

		/** Brand name. Can be used to filter the response of the creatives.list method. */
		brandName?: string | null;
	}

	/** Detected advertiser and brand information. */
	export interface AdvertiserAndBrandFormProperties {

		/** See https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt for the list of possible values. Can be used to filter the response of the creatives.list method. */
		advertiserId: FormControl<string | null | undefined>,

		/** Advertiser name. Can be used to filter the response of the creatives.list method. */
		advertiserName: FormControl<string | null | undefined>,

		/** Detected brand ID or zero if no brand has been detected. See https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt for the list of possible values. Can be used to filter the response of the creatives.list method. */
		brandId: FormControl<string | null | undefined>,

		/** Brand name. Can be used to filter the response of the creatives.list method. */
		brandName: FormControl<string | null | undefined>,
	}
	export function CreateAdvertiserAndBrandFormGroup() {
		return new FormGroup<AdvertiserAndBrandFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			advertiserName: new FormControl<string | null | undefined>(undefined),
			brandId: new FormControl<string | null | undefined>(undefined),
			brandName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A subset of app inventory to target. Bid requests that match criteria in at least one of the specified dimensions will be sent. */
	export interface AppTargeting {

		/** Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting. */
		mobileAppCategoryTargeting?: NumericTargetingDimension;

		/** Generic targeting with string values used in app, website and publisher targeting. */
		mobileAppTargeting?: StringTargetingDimension;
	}

	/** A subset of app inventory to target. Bid requests that match criteria in at least one of the specified dimensions will be sent. */
	export interface AppTargetingFormProperties {
	}
	export function CreateAppTargetingFormGroup() {
		return new FormGroup<AppTargetingFormProperties>({
		});

	}


	/** Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting. */
	export interface NumericTargetingDimension {

		/** The IDs excluded in a configuration. */
		excludedIds?: Array<string>;

		/** The IDs included in a configuration. */
		includedIds?: Array<string>;
	}

	/** Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting. */
	export interface NumericTargetingDimensionFormProperties {
	}
	export function CreateNumericTargetingDimensionFormGroup() {
		return new FormGroup<NumericTargetingDimensionFormProperties>({
		});

	}


	/** Generic targeting with string values used in app, website and publisher targeting. */
	export interface StringTargetingDimension {

		/** How the items in this list should be targeted. */
		targetingMode?: AddTargetedAppsRequestTargetingMode | null;

		/** The values specified. */
		values?: Array<string>;
	}

	/** Generic targeting with string values used in app, website and publisher targeting. */
	export interface StringTargetingDimensionFormProperties {

		/** How the items in this list should be targeted. */
		targetingMode: FormControl<AddTargetedAppsRequestTargetingMode | null | undefined>,
	}
	export function CreateStringTargetingDimensionFormGroup() {
		return new FormGroup<StringTargetingDimensionFormProperties>({
			targetingMode: new FormControl<AddTargetedAppsRequestTargetingMode | null | undefined>(undefined),
		});

	}


	/** A request to approve a batch of publisher connections. */
	export interface BatchApprovePublisherConnectionsRequest {

		/** Required. The names of the publishers with which connections will be approved. In the pattern `bidders/{bidder}/publisherConnections/{publisher}` where `{bidder}` is the account ID of the bidder, and `{publisher}` is the ads.txt/app-ads.txt publisher ID. */
		names?: Array<string>;
	}

	/** A request to approve a batch of publisher connections. */
	export interface BatchApprovePublisherConnectionsRequestFormProperties {
	}
	export function CreateBatchApprovePublisherConnectionsRequestFormGroup() {
		return new FormGroup<BatchApprovePublisherConnectionsRequestFormProperties>({
		});

	}


	/** A response for the request to approve a batch of publisher connections. */
	export interface BatchApprovePublisherConnectionsResponse {

		/** The publisher connections that have been approved. */
		publisherConnections?: Array<PublisherConnection>;
	}

	/** A response for the request to approve a batch of publisher connections. */
	export interface BatchApprovePublisherConnectionsResponseFormProperties {
	}
	export function CreateBatchApprovePublisherConnectionsResponseFormGroup() {
		return new FormGroup<BatchApprovePublisherConnectionsResponseFormProperties>({
		});

	}


	/** An Open Bidding exchange's connection to a publisher. This is initiated by the publisher for the bidder to review. If approved by the bidder, this means that the bidder agrees to receive bid requests from the publisher. */
	export interface PublisherConnection {

		/** Whether the publisher has been approved by the bidder. */
		biddingState?: PublisherConnectionBiddingState | null;

		/** Output only. The time at which the publisher initiated a connection with the bidder (irrespective of if or when the bidder approves it). This is subsequently updated if the publisher revokes and re-initiates the connection. */
		createTime?: string | null;

		/** Output only. Publisher display name. */
		displayName?: string | null;

		/** Output only. Name of the publisher connection. This follows the pattern `bidders/{bidder}/publisherConnections/{publisher}`, where `{bidder}` represents the account ID of the bidder, and `{publisher}` is the ads.txt/app-ads.txt publisher ID. */
		name?: string | null;

		/** Output only. Whether the publisher is an Ad Manager or AdMob publisher. */
		publisherPlatform?: PublisherConnectionPublisherPlatform | null;
	}

	/** An Open Bidding exchange's connection to a publisher. This is initiated by the publisher for the bidder to review. If approved by the bidder, this means that the bidder agrees to receive bid requests from the publisher. */
	export interface PublisherConnectionFormProperties {

		/** Whether the publisher has been approved by the bidder. */
		biddingState: FormControl<PublisherConnectionBiddingState | null | undefined>,

		/** Output only. The time at which the publisher initiated a connection with the bidder (irrespective of if or when the bidder approves it). This is subsequently updated if the publisher revokes and re-initiates the connection. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Publisher display name. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Name of the publisher connection. This follows the pattern `bidders/{bidder}/publisherConnections/{publisher}`, where `{bidder}` represents the account ID of the bidder, and `{publisher}` is the ads.txt/app-ads.txt publisher ID. */
		name: FormControl<string | null | undefined>,

		/** Output only. Whether the publisher is an Ad Manager or AdMob publisher. */
		publisherPlatform: FormControl<PublisherConnectionPublisherPlatform | null | undefined>,
	}
	export function CreatePublisherConnectionFormGroup() {
		return new FormGroup<PublisherConnectionFormProperties>({
			biddingState: new FormControl<PublisherConnectionBiddingState | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			publisherPlatform: new FormControl<PublisherConnectionPublisherPlatform | null | undefined>(undefined),
		});

	}

	export enum PublisherConnectionBiddingState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', REJECTED = 'REJECTED', APPROVED = 'APPROVED' }

	export enum PublisherConnectionPublisherPlatform { PUBLISHER_PLATFORM_UNSPECIFIED = 'PUBLISHER_PLATFORM_UNSPECIFIED', GOOGLE_AD_MANAGER = 'GOOGLE_AD_MANAGER', ADMOB = 'ADMOB' }


	/** A request to reject a batch of publisher connections. */
	export interface BatchRejectPublisherConnectionsRequest {

		/** Required. The names of the publishers with whom connection will be rejected. In the pattern `bidders/{bidder}/publisherConnections/{publisher}` where `{bidder}` is the account ID of the bidder, and `{publisher}` is the ads.txt/app-ads.txt publisher ID. */
		names?: Array<string>;
	}

	/** A request to reject a batch of publisher connections. */
	export interface BatchRejectPublisherConnectionsRequestFormProperties {
	}
	export function CreateBatchRejectPublisherConnectionsRequestFormGroup() {
		return new FormGroup<BatchRejectPublisherConnectionsRequestFormProperties>({
		});

	}


	/** A response for the request to reject a batch of publisher connections. */
	export interface BatchRejectPublisherConnectionsResponse {

		/** The publisher connections that have been rejected. */
		publisherConnections?: Array<PublisherConnection>;
	}

	/** A response for the request to reject a batch of publisher connections. */
	export interface BatchRejectPublisherConnectionsResponseFormProperties {
	}
	export function CreateBatchRejectPublisherConnectionsResponseFormGroup() {
		return new FormGroup<BatchRejectPublisherConnectionsResponseFormProperties>({
		});

	}


	/** Bidder settings. */
	export interface Bidder {

		/** Output only. An option to bypass pretargeting for private auctions and preferred deals. When true, bid requests from these nonguaranteed deals will always be sent. When false, bid requests will be subject to regular pretargeting configurations. Programmatic Guaranteed deals will always be sent to the bidder, regardless of the value for this flag. Auction packages are not impacted by this value and are subject to the regular pretargeting configurations. */
		bypassNonguaranteedDealsPretargeting?: boolean | null;

		/** Output only. The buyer's network ID used for cookie matching. This ID corresponds to the `google_nid` parameter in the URL used in cookie match requests. Refer to https://developers.google.com/authorized-buyers/rtb/cookie-guide for further information. */
		cookieMatchingNetworkId?: string | null;

		/** Output only. The base URL used in cookie match requests. Refer to https://developers.google.com/authorized-buyers/rtb/cookie-guide for further information. */
		cookieMatchingUrl?: string | null;

		/** Output only. The billing ID for the deals pretargeting config. This billing ID is sent on the bid request for guaranteed and nonguaranteed deals matched in pretargeting. */
		dealsBillingId?: string | null;

		/** Output only. Name of the bidder resource that must follow the pattern `bidders/{bidderAccountId}`, where `{bidderAccountId}` is the account ID of the bidder whose information is to be received. One can get their account ID on the Authorized Buyers or Open Bidding UI, or by contacting their Google account manager. */
		name?: string | null;
	}

	/** Bidder settings. */
	export interface BidderFormProperties {

		/** Output only. An option to bypass pretargeting for private auctions and preferred deals. When true, bid requests from these nonguaranteed deals will always be sent. When false, bid requests will be subject to regular pretargeting configurations. Programmatic Guaranteed deals will always be sent to the bidder, regardless of the value for this flag. Auction packages are not impacted by this value and are subject to the regular pretargeting configurations. */
		bypassNonguaranteedDealsPretargeting: FormControl<boolean | null | undefined>,

		/** Output only. The buyer's network ID used for cookie matching. This ID corresponds to the `google_nid` parameter in the URL used in cookie match requests. Refer to https://developers.google.com/authorized-buyers/rtb/cookie-guide for further information. */
		cookieMatchingNetworkId: FormControl<string | null | undefined>,

		/** Output only. The base URL used in cookie match requests. Refer to https://developers.google.com/authorized-buyers/rtb/cookie-guide for further information. */
		cookieMatchingUrl: FormControl<string | null | undefined>,

		/** Output only. The billing ID for the deals pretargeting config. This billing ID is sent on the bid request for guaranteed and nonguaranteed deals matched in pretargeting. */
		dealsBillingId: FormControl<string | null | undefined>,

		/** Output only. Name of the bidder resource that must follow the pattern `bidders/{bidderAccountId}`, where `{bidderAccountId}` is the account ID of the bidder whose information is to be received. One can get their account ID on the Authorized Buyers or Open Bidding UI, or by contacting their Google account manager. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBidderFormGroup() {
		return new FormGroup<BidderFormProperties>({
			bypassNonguaranteedDealsPretargeting: new FormControl<boolean | null | undefined>(undefined),
			cookieMatchingNetworkId: new FormControl<string | null | undefined>(undefined),
			cookieMatchingUrl: new FormControl<string | null | undefined>(undefined),
			dealsBillingId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RTB Buyer account information. */
	export interface Buyer {

		/** Output only. The number of creatives that this buyer submitted through the API or bid with in the last 30 days. This is counted against the maximum number of active creatives. */
		activeCreativeCount?: string | null;

		/** Output only. The name of the bidder resource that is responsible for receiving bidding traffic for this account. The bidder name must follow the pattern `bidders/{bidderAccountId}`, where `{bidderAccountId}` is the account ID of the bidder receiving traffic for this buyer. */
		bidder?: string | null;

		/** Output only. A list of billing IDs associated with this account. These IDs appear on: 1. A bid request, to signal which buyers are eligible to bid on a given opportunity, and which pretargeting configurations were matched for each eligible buyer. 2. The bid response, to attribute a winning impression to a specific account for billing, reporting, policy and publisher block enforcement. */
		billingIds?: Array<string>;

		/** Output only. The diplay name associated with this buyer account, as visible to sellers. */
		displayName?: string | null;

		/** Output only. The maximum number of active creatives that this buyer can have. */
		maximumActiveCreativeCount?: string | null;

		/** Output only. Name of the buyer resource that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` is the account ID of the buyer account whose information is to be received. One can get their account ID on the Authorized Buyers or Open Bidding UI, or by contacting their Google account manager. */
		name?: string | null;
	}

	/** RTB Buyer account information. */
	export interface BuyerFormProperties {

		/** Output only. The number of creatives that this buyer submitted through the API or bid with in the last 30 days. This is counted against the maximum number of active creatives. */
		activeCreativeCount: FormControl<string | null | undefined>,

		/** Output only. The name of the bidder resource that is responsible for receiving bidding traffic for this account. The bidder name must follow the pattern `bidders/{bidderAccountId}`, where `{bidderAccountId}` is the account ID of the bidder receiving traffic for this buyer. */
		bidder: FormControl<string | null | undefined>,

		/** Output only. The diplay name associated with this buyer account, as visible to sellers. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The maximum number of active creatives that this buyer can have. */
		maximumActiveCreativeCount: FormControl<string | null | undefined>,

		/** Output only. Name of the buyer resource that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` is the account ID of the buyer account whose information is to be received. One can get their account ID on the Authorized Buyers or Open Bidding UI, or by contacting their Google account manager. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBuyerFormGroup() {
		return new FormGroup<BuyerFormProperties>({
			activeCreativeCount: new FormControl<string | null | undefined>(undefined),
			bidder: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			maximumActiveCreativeCount: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to close a specified user list. */
	export interface CloseUserListRequest {
	}

	/** A request to close a specified user list. */
	export interface CloseUserListRequestFormProperties {
	}
	export function CreateCloseUserListRequestFormGroup() {
		return new FormGroup<CloseUserListRequestFormProperties>({
		});

	}


	/** A creative and its classification data. */
	export interface Creative {

		/** Output only. ID of the buyer account that this creative is owned by. Can be used to filter the response of the creatives.list method with equality and inequality check. */
		accountId?: string | null;

		/** The link to AdChoices destination page. This is only supported for native ads. */
		adChoicesDestinationUrl?: string | null;

		/** The name of the company being advertised in the creative. Can be used to filter the response of the creatives.list method. */
		advertiserName?: string | null;

		/** The agency ID for this creative. */
		agencyId?: string | null;

		/** Output only. The last update timestamp of the creative through the API. */
		apiUpdateTime?: string | null;

		/** Output only. The format of this creative. Can be used to filter the response of the creatives.list method. */
		creativeFormat?: CreativeCreativeFormat | null;

		/** Buyer-specific creative ID that references this creative in bid responses. This field is Ignored in update operations. Can be used to filter the response of the creatives.list method. The maximum length of the creative ID is 128 bytes. */
		creativeId?: string | null;

		/** Top level status and detected attributes of a creative. */
		creativeServingDecision?: CreativeServingDecision;

		/** Output only. IDs of all of the deals with which this creative has been used in bidding. Can be used to filter the response of the creatives.list method. */
		dealIds?: Array<string>;

		/** All declared attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method. If the `excluded_attribute` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto") contains one of the attributes that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction. */
		declaredAttributes?: Array<string>;

		/** The set of declared destination URLs for the creative. Can be used to filter the response of the creatives.list method. */
		declaredClickThroughUrls?: Array<string>;

		/** All declared restricted categories for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method. */
		declaredRestrictedCategories?: Array<string>;

		/** IDs for the declared ad technology vendors that may be used by this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values. Can be used to filter the response of the creatives.list method. */
		declaredVendorIds?: Array<number>;

		/** HTML content for a creative. */
		html?: HtmlContent;

		/** The set of URLs to be called to record an impression. */
		impressionTrackingUrls?: Array<string>;

		/** Output only. Name of the creative. Follows the pattern `buyers/{buyer}/creatives/{creative}`, where `{buyer}` represents the account ID of the buyer who owns the creative, and `{creative}` is the buyer-specific creative ID that references this creative in the bid response. */
		name?: string | null;

		/** Native content for a creative. */
		native?: NativeContent;

		/** Experimental field that can be used during the [FLEDGE Origin Trial](/authorized-buyers/rtb/fledge-origin-trial). The URL to fetch an interest group ad used in [TURTLEDOVE on-device auction](https://github.com/WICG/turtledove/blob/main/FLEDGE.md#1-browsers-record-interest-groups"). This should be unique among all creatives for a given `accountId`. This URL should be the same as the URL returned by [generateBid()](https://github.com/WICG/turtledove/blob/main/FLEDGE.md#32-on-device-bidding). */
		renderUrl?: string | null;

		/** All restricted categories for the ads that may be shown from this creative. */
		restrictedCategories?: Array<string>;

		/** Output only. The version of the creative. Version for a new creative is 1 and it increments during subsequent creative updates. */
		version?: number | null;

		/** Video content for a creative. */
		video?: VideoContent;
	}

	/** A creative and its classification data. */
	export interface CreativeFormProperties {

		/** Output only. ID of the buyer account that this creative is owned by. Can be used to filter the response of the creatives.list method with equality and inequality check. */
		accountId: FormControl<string | null | undefined>,

		/** The link to AdChoices destination page. This is only supported for native ads. */
		adChoicesDestinationUrl: FormControl<string | null | undefined>,

		/** The name of the company being advertised in the creative. Can be used to filter the response of the creatives.list method. */
		advertiserName: FormControl<string | null | undefined>,

		/** The agency ID for this creative. */
		agencyId: FormControl<string | null | undefined>,

		/** Output only. The last update timestamp of the creative through the API. */
		apiUpdateTime: FormControl<string | null | undefined>,

		/** Output only. The format of this creative. Can be used to filter the response of the creatives.list method. */
		creativeFormat: FormControl<CreativeCreativeFormat | null | undefined>,

		/** Buyer-specific creative ID that references this creative in bid responses. This field is Ignored in update operations. Can be used to filter the response of the creatives.list method. The maximum length of the creative ID is 128 bytes. */
		creativeId: FormControl<string | null | undefined>,

		/** Output only. Name of the creative. Follows the pattern `buyers/{buyer}/creatives/{creative}`, where `{buyer}` represents the account ID of the buyer who owns the creative, and `{creative}` is the buyer-specific creative ID that references this creative in the bid response. */
		name: FormControl<string | null | undefined>,

		/** Experimental field that can be used during the [FLEDGE Origin Trial](/authorized-buyers/rtb/fledge-origin-trial). The URL to fetch an interest group ad used in [TURTLEDOVE on-device auction](https://github.com/WICG/turtledove/blob/main/FLEDGE.md#1-browsers-record-interest-groups"). This should be unique among all creatives for a given `accountId`. This URL should be the same as the URL returned by [generateBid()](https://github.com/WICG/turtledove/blob/main/FLEDGE.md#32-on-device-bidding). */
		renderUrl: FormControl<string | null | undefined>,

		/** Output only. The version of the creative. Version for a new creative is 1 and it increments during subsequent creative updates. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateCreativeFormGroup() {
		return new FormGroup<CreativeFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			adChoicesDestinationUrl: new FormControl<string | null | undefined>(undefined),
			advertiserName: new FormControl<string | null | undefined>(undefined),
			agencyId: new FormControl<string | null | undefined>(undefined),
			apiUpdateTime: new FormControl<string | null | undefined>(undefined),
			creativeFormat: new FormControl<CreativeCreativeFormat | null | undefined>(undefined),
			creativeId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			renderUrl: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CreativeCreativeFormat { CREATIVE_FORMAT_UNSPECIFIED = 'CREATIVE_FORMAT_UNSPECIFIED', HTML = 'HTML', VIDEO = 'VIDEO', NATIVE = 'NATIVE' }


	/** Top level status and detected attributes of a creative. */
	export interface CreativeServingDecision {

		/** The list of detected Ad Technology Providers for this creative. Bids placed for inventory that will serve to EEA or UK users are expected to comply with GDPR requirements. You must ensure that the creatives used in such bids should contain only user consented ad technology providers as indicated in the bid request. Google reserves the right to filter non-compliant bids. User consented ad technology providers can be found in the [Google Protocol](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) with the `BidRequest.adslot.consented_providers_settings` field, and can be found as an [OpenRTB extension](https://developers.google.com/authorized-buyers/rtb/downloads/openrtb-adx-proto) with the `BidRequest.user.ext.consented_providers_settings` and `BidRequest.user.ext.consent` fields. See https://support.google.com/authorizedbuyers/answer/9789378 for additional information about the Google TCF v2 integration. */
		adTechnologyProviders?: AdTechnologyProviders;

		/** Policy compliance of the creative for a transaction type or a region. */
		chinaPolicyCompliance?: PolicyCompliance;

		/** Policy compliance of the creative for a transaction type or a region. */
		dealsPolicyCompliance?: PolicyCompliance;

		/** Detected advertisers and brands. */
		detectedAdvertisers?: Array<AdvertiserAndBrand>;

		/** Publisher-excludable attributes that were detected for this creative. Can be used to filter the response of the creatives.list method. If the `excluded_attribute` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) contains one of the attributes that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction. */
		detectedAttributes?: Array<string>;

		/** The set of detected destination URLs for the creative. Can be used to filter the response of the creatives.list method. */
		detectedClickThroughUrls?: Array<string>;

		/** The detected domains for this creative. */
		detectedDomains?: Array<string>;

		/** The detected languages for this creative. The order is arbitrary. The codes are 2 or 5 characters and are documented at https://developers.google.com/adwords/api/docs/appendix/languagecodes. Can be used to filter the response of the creatives.list method. */
		detectedLanguages?: Array<string>;

		/** Detected product categories, if any. See the ad-product-categories.txt file in the technical documentation for a list of IDs. Can be used to filter the response of the creatives.list method. */
		detectedProductCategories?: Array<number>;

		/** Detected sensitive categories, if any. Can be used to filter the response of the creatives.list method. See the ad-sensitive-categories.txt file in the technical documentation for a list of IDs. You should use these IDs along with the excluded-sensitive-category field in the bid request to filter your bids. */
		detectedSensitiveCategories?: Array<number>;

		/** IDs of the ad technology vendors that were detected to be used by this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values. Can be used to filter the response of the creatives.list method. If the `allowed_vendor_type` field of a [bid request](https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto) does not contain one of the vendor type IDs that were declared or detected for a given creative, and a bid is submitted with that creative, the bid will be filtered before the auction. */
		detectedVendorIds?: Array<number>;

		/** The last time the creative status was updated. Can be used to filter the response of the creatives.list method. */
		lastStatusUpdate?: string | null;

		/** Policy compliance of the creative for a transaction type or a region. */
		networkPolicyCompliance?: PolicyCompliance;

		/** Policy compliance of the creative for a transaction type or a region. */
		platformPolicyCompliance?: PolicyCompliance;

		/** Policy compliance of the creative for a transaction type or a region. */
		russiaPolicyCompliance?: PolicyCompliance;
	}

	/** Top level status and detected attributes of a creative. */
	export interface CreativeServingDecisionFormProperties {

		/** The last time the creative status was updated. Can be used to filter the response of the creatives.list method. */
		lastStatusUpdate: FormControl<string | null | undefined>,
	}
	export function CreateCreativeServingDecisionFormGroup() {
		return new FormGroup<CreativeServingDecisionFormProperties>({
			lastStatusUpdate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Policy compliance of the creative for a transaction type or a region. */
	export interface PolicyCompliance {

		/** Serving status for the given transaction type (for example, open auction, deals) or region (for example, China, Russia). Can be used to filter the response of the creatives.list method. */
		status?: PolicyComplianceStatus | null;

		/** Topics related to the policy compliance for this transaction type (for example, open auction, deals) or region (for example, China, Russia). Topics may be present only if status is DISAPPROVED. */
		topics?: Array<PolicyTopicEntry>;
	}

	/** Policy compliance of the creative for a transaction type or a region. */
	export interface PolicyComplianceFormProperties {

		/** Serving status for the given transaction type (for example, open auction, deals) or region (for example, China, Russia). Can be used to filter the response of the creatives.list method. */
		status: FormControl<PolicyComplianceStatus | null | undefined>,
	}
	export function CreatePolicyComplianceFormGroup() {
		return new FormGroup<PolicyComplianceFormProperties>({
			status: new FormControl<PolicyComplianceStatus | null | undefined>(undefined),
		});

	}

	export enum PolicyComplianceStatus { STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED', PENDING_REVIEW = 'PENDING_REVIEW', DISAPPROVED = 'DISAPPROVED', APPROVED = 'APPROVED', CERTIFICATE_REQUIRED = 'CERTIFICATE_REQUIRED' }


	/** Each policy topic entry will represent a violation of a policy topic for a creative, with the policy topic information and optional evidence for the policy violation. */
	export interface PolicyTopicEntry {

		/** Pieces of evidence associated with this policy topic entry. */
		evidences?: Array<PolicyTopicEvidence>;

		/** URL of the help center article describing this policy topic. */
		helpCenterUrl?: string | null;

		/** Whether or not the policy topic is missing a certificate. Some policy topics require a certificate to unblock serving in some regions. For more information about creative certification, refer to: https://support.google.com/authorizedbuyers/answer/7450776 */
		missingCertificate?: boolean | null;

		/** Policy topic this entry refers to. For example, "ALCOHOL", "TRADEMARKS_IN_AD_TEXT", or "DESTINATION_NOT_WORKING". The set of possible policy topics is not fixed for a particular API version and may change at any time. Can be used to filter the response of the creatives.list method */
		policyTopic?: string | null;
	}

	/** Each policy topic entry will represent a violation of a policy topic for a creative, with the policy topic information and optional evidence for the policy violation. */
	export interface PolicyTopicEntryFormProperties {

		/** URL of the help center article describing this policy topic. */
		helpCenterUrl: FormControl<string | null | undefined>,

		/** Whether or not the policy topic is missing a certificate. Some policy topics require a certificate to unblock serving in some regions. For more information about creative certification, refer to: https://support.google.com/authorizedbuyers/answer/7450776 */
		missingCertificate: FormControl<boolean | null | undefined>,

		/** Policy topic this entry refers to. For example, "ALCOHOL", "TRADEMARKS_IN_AD_TEXT", or "DESTINATION_NOT_WORKING". The set of possible policy topics is not fixed for a particular API version and may change at any time. Can be used to filter the response of the creatives.list method */
		policyTopic: FormControl<string | null | undefined>,
	}
	export function CreatePolicyTopicEntryFormGroup() {
		return new FormGroup<PolicyTopicEntryFormProperties>({
			helpCenterUrl: new FormControl<string | null | undefined>(undefined),
			missingCertificate: new FormControl<boolean | null | undefined>(undefined),
			policyTopic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Evidence associated with a policy topic entry. */
	export interface PolicyTopicEvidence {

		/** Evidence that the creative's destination URL was not crawlable by Google. */
		destinationNotCrawlable?: DestinationNotCrawlableEvidence;

		/** Evidence of the creative's destination URL not functioning properly or having been incorrectly set up. */
		destinationNotWorking?: DestinationNotWorkingEvidence;

		/** The full landing page URL of the destination. */
		destinationUrl?: DestinationUrlEvidence;

		/** Number of HTTP calls made by a creative, broken down by domain. */
		domainCall?: DomainCallEvidence;

		/** Total download size and URL-level download size breakdown for resources in a creative. */
		downloadSize?: DownloadSizeEvidence;

		/** HTTP calls made by a creative that resulted in policy violations. */
		httpCall?: HttpCallEvidence;

		/** Evidence for HTTP cookie-related policy violations. */
		httpCookie?: HttpCookieEvidence;
	}

	/** Evidence associated with a policy topic entry. */
	export interface PolicyTopicEvidenceFormProperties {
	}
	export function CreatePolicyTopicEvidenceFormGroup() {
		return new FormGroup<PolicyTopicEvidenceFormProperties>({
		});

	}


	/** Evidence that the creative's destination URL was not crawlable by Google. */
	export interface DestinationNotCrawlableEvidence {

		/** Approximate time of the crawl. */
		crawlTime?: string | null;

		/** Destination URL that was attempted to be crawled. */
		crawledUrl?: string | null;

		/** Reason of destination not crawlable. */
		reason?: DestinationNotCrawlableEvidenceReason | null;
	}

	/** Evidence that the creative's destination URL was not crawlable by Google. */
	export interface DestinationNotCrawlableEvidenceFormProperties {

		/** Approximate time of the crawl. */
		crawlTime: FormControl<string | null | undefined>,

		/** Destination URL that was attempted to be crawled. */
		crawledUrl: FormControl<string | null | undefined>,

		/** Reason of destination not crawlable. */
		reason: FormControl<DestinationNotCrawlableEvidenceReason | null | undefined>,
	}
	export function CreateDestinationNotCrawlableEvidenceFormGroup() {
		return new FormGroup<DestinationNotCrawlableEvidenceFormProperties>({
			crawlTime: new FormControl<string | null | undefined>(undefined),
			crawledUrl: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<DestinationNotCrawlableEvidenceReason | null | undefined>(undefined),
		});

	}

	export enum DestinationNotCrawlableEvidenceReason { REASON_UNSPECIFIED = 'REASON_UNSPECIFIED', UNREACHABLE_ROBOTS = 'UNREACHABLE_ROBOTS', TIMEOUT_ROBOTS = 'TIMEOUT_ROBOTS', ROBOTED_DENIED = 'ROBOTED_DENIED', UNKNOWN = 'UNKNOWN' }


	/** Evidence of the creative's destination URL not functioning properly or having been incorrectly set up. */
	export interface DestinationNotWorkingEvidence {

		/** DNS lookup errors. */
		dnsError?: DestinationNotWorkingEvidenceDnsError | null;

		/** The full non-working URL. */
		expandedUrl?: string | null;

		/** HTTP error code (for example, 404 or 5xx) */
		httpError?: number | null;

		/** Page was crawled successfully, but was detected as either a page with no content or an error page. */
		invalidPage?: DestinationNotWorkingEvidenceInvalidPage | null;

		/** Approximate time when the ad destination was last checked. */
		lastCheckTime?: string | null;

		/** Platform of the non-working URL. */
		platform?: DestinationNotWorkingEvidencePlatform | null;

		/** HTTP redirect chain error. */
		redirectionError?: DestinationNotWorkingEvidenceRedirectionError | null;

		/** Rejected because of malformed URLs or invalid requests. */
		urlRejected?: DestinationNotWorkingEvidenceUrlRejected | null;
	}

	/** Evidence of the creative's destination URL not functioning properly or having been incorrectly set up. */
	export interface DestinationNotWorkingEvidenceFormProperties {

		/** DNS lookup errors. */
		dnsError: FormControl<DestinationNotWorkingEvidenceDnsError | null | undefined>,

		/** The full non-working URL. */
		expandedUrl: FormControl<string | null | undefined>,

		/** HTTP error code (for example, 404 or 5xx) */
		httpError: FormControl<number | null | undefined>,

		/** Page was crawled successfully, but was detected as either a page with no content or an error page. */
		invalidPage: FormControl<DestinationNotWorkingEvidenceInvalidPage | null | undefined>,

		/** Approximate time when the ad destination was last checked. */
		lastCheckTime: FormControl<string | null | undefined>,

		/** Platform of the non-working URL. */
		platform: FormControl<DestinationNotWorkingEvidencePlatform | null | undefined>,

		/** HTTP redirect chain error. */
		redirectionError: FormControl<DestinationNotWorkingEvidenceRedirectionError | null | undefined>,

		/** Rejected because of malformed URLs or invalid requests. */
		urlRejected: FormControl<DestinationNotWorkingEvidenceUrlRejected | null | undefined>,
	}
	export function CreateDestinationNotWorkingEvidenceFormGroup() {
		return new FormGroup<DestinationNotWorkingEvidenceFormProperties>({
			dnsError: new FormControl<DestinationNotWorkingEvidenceDnsError | null | undefined>(undefined),
			expandedUrl: new FormControl<string | null | undefined>(undefined),
			httpError: new FormControl<number | null | undefined>(undefined),
			invalidPage: new FormControl<DestinationNotWorkingEvidenceInvalidPage | null | undefined>(undefined),
			lastCheckTime: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<DestinationNotWorkingEvidencePlatform | null | undefined>(undefined),
			redirectionError: new FormControl<DestinationNotWorkingEvidenceRedirectionError | null | undefined>(undefined),
			urlRejected: new FormControl<DestinationNotWorkingEvidenceUrlRejected | null | undefined>(undefined),
		});

	}

	export enum DestinationNotWorkingEvidenceDnsError { DNS_ERROR_UNSPECIFIED = 'DNS_ERROR_UNSPECIFIED', ERROR_DNS = 'ERROR_DNS', GOOGLE_CRAWLER_DNS_ISSUE = 'GOOGLE_CRAWLER_DNS_ISSUE' }

	export enum DestinationNotWorkingEvidenceInvalidPage { INVALID_PAGE_UNSPECIFIED = 'INVALID_PAGE_UNSPECIFIED', EMPTY_OR_ERROR_PAGE = 'EMPTY_OR_ERROR_PAGE' }

	export enum DestinationNotWorkingEvidencePlatform { PLATFORM_UNSPECIFIED = 'PLATFORM_UNSPECIFIED', PERSONAL_COMPUTER = 'PERSONAL_COMPUTER', ANDROID = 'ANDROID', IOS = 'IOS' }

	export enum DestinationNotWorkingEvidenceRedirectionError { REDIRECTION_ERROR_UNSPECIFIED = 'REDIRECTION_ERROR_UNSPECIFIED', TOO_MANY_REDIRECTS = 'TOO_MANY_REDIRECTS', INVALID_REDIRECT = 'INVALID_REDIRECT', EMPTY_REDIRECT = 'EMPTY_REDIRECT', REDIRECT_ERROR_UNKNOWN = 'REDIRECT_ERROR_UNKNOWN' }

	export enum DestinationNotWorkingEvidenceUrlRejected { URL_REJECTED_UNSPECIFIED = 'URL_REJECTED_UNSPECIFIED', BAD_REQUEST = 'BAD_REQUEST', MALFORMED_URL = 'MALFORMED_URL', URL_REJECTED_UNKNOWN = 'URL_REJECTED_UNKNOWN' }


	/** The full landing page URL of the destination. */
	export interface DestinationUrlEvidence {

		/** The full landing page URL of the destination. */
		destinationUrl?: string | null;
	}

	/** The full landing page URL of the destination. */
	export interface DestinationUrlEvidenceFormProperties {

		/** The full landing page URL of the destination. */
		destinationUrl: FormControl<string | null | undefined>,
	}
	export function CreateDestinationUrlEvidenceFormGroup() {
		return new FormGroup<DestinationUrlEvidenceFormProperties>({
			destinationUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Number of HTTP calls made by a creative, broken down by domain. */
	export interface DomainCallEvidence {

		/** Breakdown of the most frequent domains called through HTTP by the creative. */
		topHttpCallDomains?: Array<DomainCalls>;

		/** The total number of HTTP calls made by the creative, including but not limited to the number of calls in the top_http_call_domains. */
		totalHttpCallCount?: number | null;
	}

	/** Number of HTTP calls made by a creative, broken down by domain. */
	export interface DomainCallEvidenceFormProperties {

		/** The total number of HTTP calls made by the creative, including but not limited to the number of calls in the top_http_call_domains. */
		totalHttpCallCount: FormControl<number | null | undefined>,
	}
	export function CreateDomainCallEvidenceFormGroup() {
		return new FormGroup<DomainCallEvidenceFormProperties>({
			totalHttpCallCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The number of HTTP calls made to the given domain. */
	export interface DomainCalls {

		/** The domain name. */
		domain?: string | null;

		/** Number of HTTP calls made to the domain. */
		httpCallCount?: number | null;
	}

	/** The number of HTTP calls made to the given domain. */
	export interface DomainCallsFormProperties {

		/** The domain name. */
		domain: FormControl<string | null | undefined>,

		/** Number of HTTP calls made to the domain. */
		httpCallCount: FormControl<number | null | undefined>,
	}
	export function CreateDomainCallsFormGroup() {
		return new FormGroup<DomainCallsFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			httpCallCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Total download size and URL-level download size breakdown for resources in a creative. */
	export interface DownloadSizeEvidence {

		/** Download size broken down by URLs with the top download size. */
		topUrlDownloadSizeBreakdowns?: Array<UrlDownloadSize>;

		/** Total download size (in kilobytes) for all the resources in the creative. */
		totalDownloadSizeKb?: number | null;
	}

	/** Total download size and URL-level download size breakdown for resources in a creative. */
	export interface DownloadSizeEvidenceFormProperties {

		/** Total download size (in kilobytes) for all the resources in the creative. */
		totalDownloadSizeKb: FormControl<number | null | undefined>,
	}
	export function CreateDownloadSizeEvidenceFormGroup() {
		return new FormGroup<DownloadSizeEvidenceFormProperties>({
			totalDownloadSizeKb: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The URL-level breakdown for the download size. */
	export interface UrlDownloadSize {

		/** Download size of the URL in kilobytes. */
		downloadSizeKb?: number | null;

		/** The normalized URL with query parameters and fragment removed. */
		normalizedUrl?: string | null;
	}

	/** The URL-level breakdown for the download size. */
	export interface UrlDownloadSizeFormProperties {

		/** Download size of the URL in kilobytes. */
		downloadSizeKb: FormControl<number | null | undefined>,

		/** The normalized URL with query parameters and fragment removed. */
		normalizedUrl: FormControl<string | null | undefined>,
	}
	export function CreateUrlDownloadSizeFormGroup() {
		return new FormGroup<UrlDownloadSizeFormProperties>({
			downloadSizeKb: new FormControl<number | null | undefined>(undefined),
			normalizedUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** HTTP calls made by a creative that resulted in policy violations. */
	export interface HttpCallEvidence {

		/** URLs of HTTP calls made by the creative. */
		urls?: Array<string>;
	}

	/** HTTP calls made by a creative that resulted in policy violations. */
	export interface HttpCallEvidenceFormProperties {
	}
	export function CreateHttpCallEvidenceFormGroup() {
		return new FormGroup<HttpCallEvidenceFormProperties>({
		});

	}


	/** Evidence for HTTP cookie-related policy violations. */
	export interface HttpCookieEvidence {

		/** Names of cookies that violate Google policies. For TOO_MANY_COOKIES policy, this will be the cookie names of top domains with the largest number of cookies. For other policies, this will be all the cookie names that violate the policy. */
		cookieNames?: Array<string>;

		/** The largest number of cookies set by a creative. If this field is set, cookie_names above will be set to the cookie names of top domains with the largest number of cookies. This field will only be set for TOO_MANY_COOKIES policy. */
		maxCookieCount?: number | null;
	}

	/** Evidence for HTTP cookie-related policy violations. */
	export interface HttpCookieEvidenceFormProperties {

		/** The largest number of cookies set by a creative. If this field is set, cookie_names above will be set to the cookie names of top domains with the largest number of cookies. This field will only be set for TOO_MANY_COOKIES policy. */
		maxCookieCount: FormControl<number | null | undefined>,
	}
	export function CreateHttpCookieEvidenceFormGroup() {
		return new FormGroup<HttpCookieEvidenceFormProperties>({
			maxCookieCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** HTML content for a creative. */
	export interface HtmlContent {

		/** The height of the HTML snippet in pixels. Can be used to filter the response of the creatives.list method. */
		height?: number | null;

		/** The HTML snippet that displays the ad when inserted in the web page. */
		snippet?: string | null;

		/** The width of the HTML snippet in pixels. Can be used to filter the response of the creatives.list method. */
		width?: number | null;
	}

	/** HTML content for a creative. */
	export interface HtmlContentFormProperties {

		/** The height of the HTML snippet in pixels. Can be used to filter the response of the creatives.list method. */
		height: FormControl<number | null | undefined>,

		/** The HTML snippet that displays the ad when inserted in the web page. */
		snippet: FormControl<string | null | undefined>,

		/** The width of the HTML snippet in pixels. Can be used to filter the response of the creatives.list method. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateHtmlContentFormGroup() {
		return new FormGroup<HtmlContentFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			snippet: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Native content for a creative. */
	export interface NativeContent {

		/** The name of the advertiser or sponsor, to be displayed in the ad creative. */
		advertiserName?: string | null;

		/** An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved. */
		appIcon?: Image;

		/** A long description of the ad. */
		body?: string | null;

		/** A label for the button that the user is supposed to click. */
		callToAction?: string | null;

		/** The URL that the browser/SDK will load when the user clicks the ad. */
		clickLinkUrl?: string | null;

		/** The URL to use for click tracking. */
		clickTrackingUrl?: string | null;

		/** A short title for the ad. */
		headline?: string | null;

		/** An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved. */
		image?: Image;

		/** An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved. */
		logo?: Image;

		/** The price of the promoted app including currency info. */
		priceDisplayText?: string | null;

		/** The app rating in the app store. Must be in the range [0-5]. */
		starRating?: number | null;

		/** The URL to fetch a native video ad. */
		videoUrl?: string | null;

		/** The contents of a VAST document for a native video ad. */
		videoVastXml?: string | null;
	}

	/** Native content for a creative. */
	export interface NativeContentFormProperties {

		/** The name of the advertiser or sponsor, to be displayed in the ad creative. */
		advertiserName: FormControl<string | null | undefined>,

		/** A long description of the ad. */
		body: FormControl<string | null | undefined>,

		/** A label for the button that the user is supposed to click. */
		callToAction: FormControl<string | null | undefined>,

		/** The URL that the browser/SDK will load when the user clicks the ad. */
		clickLinkUrl: FormControl<string | null | undefined>,

		/** The URL to use for click tracking. */
		clickTrackingUrl: FormControl<string | null | undefined>,

		/** A short title for the ad. */
		headline: FormControl<string | null | undefined>,

		/** The price of the promoted app including currency info. */
		priceDisplayText: FormControl<string | null | undefined>,

		/** The app rating in the app store. Must be in the range [0-5]. */
		starRating: FormControl<number | null | undefined>,

		/** The URL to fetch a native video ad. */
		videoUrl: FormControl<string | null | undefined>,

		/** The contents of a VAST document for a native video ad. */
		videoVastXml: FormControl<string | null | undefined>,
	}
	export function CreateNativeContentFormGroup() {
		return new FormGroup<NativeContentFormProperties>({
			advertiserName: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			callToAction: new FormControl<string | null | undefined>(undefined),
			clickLinkUrl: new FormControl<string | null | undefined>(undefined),
			clickTrackingUrl: new FormControl<string | null | undefined>(undefined),
			headline: new FormControl<string | null | undefined>(undefined),
			priceDisplayText: new FormControl<string | null | undefined>(undefined),
			starRating: new FormControl<number | null | undefined>(undefined),
			videoUrl: new FormControl<string | null | undefined>(undefined),
			videoVastXml: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved. */
	export interface Image {

		/** Image height in pixels. */
		height?: number | null;

		/** The URL of the image. */
		url?: string | null;

		/** Image width in pixels. */
		width?: number | null;
	}

	/** An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved. */
	export interface ImageFormProperties {

		/** Image height in pixels. */
		height: FormControl<number | null | undefined>,

		/** The URL of the image. */
		url: FormControl<string | null | undefined>,

		/** Image width in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Video content for a creative. */
	export interface VideoContent {

		/** Video metadata for a creative. */
		videoMetadata?: VideoMetadata;

		/** The URL to fetch a video ad. */
		videoUrl?: string | null;

		/** The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard. */
		videoVastXml?: string | null;
	}

	/** Video content for a creative. */
	export interface VideoContentFormProperties {

		/** The URL to fetch a video ad. */
		videoUrl: FormControl<string | null | undefined>,

		/** The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard. */
		videoVastXml: FormControl<string | null | undefined>,
	}
	export function CreateVideoContentFormGroup() {
		return new FormGroup<VideoContentFormProperties>({
			videoUrl: new FormControl<string | null | undefined>(undefined),
			videoVastXml: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video metadata for a creative. */
	export interface VideoMetadata {

		/** The duration of the ad. Can be used to filter the response of the creatives.list method. */
		duration?: string | null;

		/** Is this a valid VAST ad? Can be used to filter the response of the creatives.list method. */
		isValidVast?: boolean | null;

		/** Is this a VPAID ad? Can be used to filter the response of the creatives.list method. */
		isVpaid?: boolean | null;

		/** The list of all media files declared in the VAST. If there are multiple VASTs in a wrapper chain, this includes the media files from the deepest one in the chain. */
		mediaFiles?: Array<MediaFile>;

		/** The minimum duration that the user has to watch before being able to skip this ad. If the field is not set, the ad is not skippable. If the field is set, the ad is skippable. Can be used to filter the response of the creatives.list method. */
		skipOffset?: string | null;

		/** The maximum VAST version across all wrapped VAST documents. Can be used to filter the response of the creatives.list method. */
		vastVersion?: VideoMetadataVastVersion | null;
	}

	/** Video metadata for a creative. */
	export interface VideoMetadataFormProperties {

		/** The duration of the ad. Can be used to filter the response of the creatives.list method. */
		duration: FormControl<string | null | undefined>,

		/** Is this a valid VAST ad? Can be used to filter the response of the creatives.list method. */
		isValidVast: FormControl<boolean | null | undefined>,

		/** Is this a VPAID ad? Can be used to filter the response of the creatives.list method. */
		isVpaid: FormControl<boolean | null | undefined>,

		/** The minimum duration that the user has to watch before being able to skip this ad. If the field is not set, the ad is not skippable. If the field is set, the ad is skippable. Can be used to filter the response of the creatives.list method. */
		skipOffset: FormControl<string | null | undefined>,

		/** The maximum VAST version across all wrapped VAST documents. Can be used to filter the response of the creatives.list method. */
		vastVersion: FormControl<VideoMetadataVastVersion | null | undefined>,
	}
	export function CreateVideoMetadataFormGroup() {
		return new FormGroup<VideoMetadataFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			isValidVast: new FormControl<boolean | null | undefined>(undefined),
			isVpaid: new FormControl<boolean | null | undefined>(undefined),
			skipOffset: new FormControl<string | null | undefined>(undefined),
			vastVersion: new FormControl<VideoMetadataVastVersion | null | undefined>(undefined),
		});

	}


	/** Information about each media file in the VAST. */
	export interface MediaFile {

		/** Bitrate of the video file, in Kbps. Can be used to filter the response of the creatives.list method. */
		bitrate?: string | null;

		/** The MIME type of this media file. Can be used to filter the response of the creatives.list method. */
		mimeType?: MediaFileMimeType | null;
	}

	/** Information about each media file in the VAST. */
	export interface MediaFileFormProperties {

		/** Bitrate of the video file, in Kbps. Can be used to filter the response of the creatives.list method. */
		bitrate: FormControl<string | null | undefined>,

		/** The MIME type of this media file. Can be used to filter the response of the creatives.list method. */
		mimeType: FormControl<MediaFileMimeType | null | undefined>,
	}
	export function CreateMediaFileFormGroup() {
		return new FormGroup<MediaFileFormProperties>({
			bitrate: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<MediaFileMimeType | null | undefined>(undefined),
		});

	}

	export enum MediaFileMimeType { VIDEO_MIME_TYPE_UNSPECIFIED = 'VIDEO_MIME_TYPE_UNSPECIFIED', MIME_VIDEO_XFLV = 'MIME_VIDEO_XFLV', MIME_VIDEO_WEBM = 'MIME_VIDEO_WEBM', MIME_VIDEO_MP4 = 'MIME_VIDEO_MP4', MIME_VIDEO_OGG = 'MIME_VIDEO_OGG', MIME_VIDEO_YT_HOSTED = 'MIME_VIDEO_YT_HOSTED', MIME_VIDEO_X_MS_WMV = 'MIME_VIDEO_X_MS_WMV', MIME_VIDEO_3GPP = 'MIME_VIDEO_3GPP', MIME_VIDEO_MOV = 'MIME_VIDEO_MOV', MIME_APPLICATION_SWF = 'MIME_APPLICATION_SWF', MIME_APPLICATION_SURVEY = 'MIME_APPLICATION_SURVEY', MIME_APPLICATION_JAVASCRIPT = 'MIME_APPLICATION_JAVASCRIPT', MIME_APPLICATION_SILVERLIGHT = 'MIME_APPLICATION_SILVERLIGHT', MIME_APPLICATION_MPEGURL = 'MIME_APPLICATION_MPEGURL', MIME_APPLICATION_MPEGDASH = 'MIME_APPLICATION_MPEGDASH', MIME_AUDIO_MP4A = 'MIME_AUDIO_MP4A', MIME_AUDIO_MP3 = 'MIME_AUDIO_MP3', MIME_AUDIO_OGG = 'MIME_AUDIO_OGG' }

	export enum VideoMetadataVastVersion { VAST_VERSION_UNSPECIFIED = 'VAST_VERSION_UNSPECIFIED', VAST_VERSION_1_0 = 'VAST_VERSION_1_0', VAST_VERSION_2_0 = 'VAST_VERSION_2_0', VAST_VERSION_3_0 = 'VAST_VERSION_3_0', VAST_VERSION_4_0 = 'VAST_VERSION_4_0' }


	/** The dimensions of a creative. This applies to only HTML and Native creatives. */
	export interface CreativeDimensions {

		/** The height of the creative in pixels. */
		height?: string | null;

		/** The width of the creative in pixels. */
		width?: string | null;
	}

	/** The dimensions of a creative. This applies to only HTML and Native creatives. */
	export interface CreativeDimensionsFormProperties {

		/** The height of the creative in pixels. */
		height: FormControl<string | null | undefined>,

		/** The width of the creative in pixels. */
		width: FormControl<string | null | undefined>,
	}
	export function CreateCreativeDimensionsFormGroup() {
		return new FormGroup<CreativeDimensionsFormProperties>({
			height: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
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


	/** Bidder endpoint that receives bid requests. */
	export interface Endpoint {

		/** The protocol that the bidder endpoint is using. */
		bidProtocol?: EndpointBidProtocol | null;

		/** The maximum number of queries per second allowed to be sent to this server. */
		maximumQps?: string | null;

		/** Output only. Name of the endpoint resource that must follow the pattern `bidders/{bidderAccountId}/endpoints/{endpointId}`, where {bidderAccountId} is the account ID of the bidder who operates this endpoint, and {endpointId} is a unique ID assigned by the server. */
		name?: string | null;

		/** The trading location that bid requests should be sent from. See https://developers.google.com/authorized-buyers/rtb/peer-guide#trading-locations for further information. */
		tradingLocation?: EndpointTradingLocation | null;

		/** Output only. The URL that bid requests should be sent to. */
		url?: string | null;
	}

	/** Bidder endpoint that receives bid requests. */
	export interface EndpointFormProperties {

		/** The protocol that the bidder endpoint is using. */
		bidProtocol: FormControl<EndpointBidProtocol | null | undefined>,

		/** The maximum number of queries per second allowed to be sent to this server. */
		maximumQps: FormControl<string | null | undefined>,

		/** Output only. Name of the endpoint resource that must follow the pattern `bidders/{bidderAccountId}/endpoints/{endpointId}`, where {bidderAccountId} is the account ID of the bidder who operates this endpoint, and {endpointId} is a unique ID assigned by the server. */
		name: FormControl<string | null | undefined>,

		/** The trading location that bid requests should be sent from. See https://developers.google.com/authorized-buyers/rtb/peer-guide#trading-locations for further information. */
		tradingLocation: FormControl<EndpointTradingLocation | null | undefined>,

		/** Output only. The URL that bid requests should be sent to. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			bidProtocol: new FormControl<EndpointBidProtocol | null | undefined>(undefined),
			maximumQps: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tradingLocation: new FormControl<EndpointTradingLocation | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EndpointBidProtocol { BID_PROTOCOL_UNSPECIFIED = 'BID_PROTOCOL_UNSPECIFIED', GOOGLE_RTB = 'GOOGLE_RTB', OPENRTB_JSON = 'OPENRTB_JSON', OPENRTB_PROTOBUF = 'OPENRTB_PROTOBUF' }

	export enum EndpointTradingLocation { TRADING_LOCATION_UNSPECIFIED = 'TRADING_LOCATION_UNSPECIFIED', US_WEST = 'US_WEST', US_EAST = 'US_EAST', EUROPE = 'EUROPE', ASIA = 'ASIA' }


	/** This has been sunset as of October 2023, and will return an error response if called. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Response for a request to get remarketing tag. */
	export interface GetRemarketingTagResponse {

		/** An HTML tag that can be placed on the advertiser's page to add users to a user list. For more information and code samples on using snippets on your website, refer to [Tag your site for remarketing](https://support.google.com/google-ads/answer/2476688). */
		snippet?: string | null;
	}

	/** This has been sunset as of October 2023, and will return an error response if called. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Response for a request to get remarketing tag. */
	export interface GetRemarketingTagResponseFormProperties {

		/** An HTML tag that can be placed on the advertiser's page to add users to a user list. For more information and code samples on using snippets on your website, refer to [Tag your site for remarketing](https://support.google.com/google-ads/answer/2476688). */
		snippet: FormControl<string | null | undefined>,
	}
	export function CreateGetRemarketingTagResponseFormGroup() {
		return new FormGroup<GetRemarketingTagResponseFormProperties>({
			snippet: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing bidders. */
	export interface ListBiddersResponse {

		/** List of bidders. */
		bidders?: Array<Bidder>;

		/** A token which can be passed to a subsequent call to the `ListBidders` method to retrieve the next page of results in ListBiddersRequest.pageToken. */
		nextPageToken?: string | null;
	}

	/** A response containing bidders. */
	export interface ListBiddersResponseFormProperties {

		/** A token which can be passed to a subsequent call to the `ListBidders` method to retrieve the next page of results in ListBiddersRequest.pageToken. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBiddersResponseFormGroup() {
		return new FormGroup<ListBiddersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing buyer account information. */
	export interface ListBuyersResponse {

		/** List of buyers. */
		buyers?: Array<Buyer>;

		/** A token which can be passed to a subsequent call to the `ListBuyers` method to retrieve the next page of results in ListBuyersRequest.pageToken. */
		nextPageToken?: string | null;
	}

	/** A response containing buyer account information. */
	export interface ListBuyersResponseFormProperties {

		/** A token which can be passed to a subsequent call to the `ListBuyers` method to retrieve the next page of results in ListBuyersRequest.pageToken. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBuyersResponseFormGroup() {
		return new FormGroup<ListBuyersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response for listing creatives. */
	export interface ListCreativesResponse {

		/** The list of creatives. */
		creatives?: Array<Creative>;

		/** A token to retrieve the next page of results. Pass this value in the ListCreativesRequest.pageToken field in the subsequent call to the `ListCreatives` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** A response for listing creatives. */
	export interface ListCreativesResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListCreativesRequest.pageToken field in the subsequent call to the `ListCreatives` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCreativesResponseFormGroup() {
		return new FormGroup<ListCreativesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing bidder endpoints. */
	export interface ListEndpointsResponse {

		/** List of bidder endpoints. */
		endpoints?: Array<Endpoint>;

		/** A token which can be passed to a subsequent call to the `ListEndpoints` method to retrieve the next page of results in ListEndpointsRequest.pageToken. */
		nextPageToken?: string | null;
	}

	/** A response containing bidder endpoints. */
	export interface ListEndpointsResponseFormProperties {

		/** A token which can be passed to a subsequent call to the `ListEndpoints` method to retrieve the next page of results in ListEndpointsRequest.pageToken. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEndpointsResponseFormGroup() {
		return new FormGroup<ListEndpointsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response containing pretargeting configurations. */
	export interface ListPretargetingConfigsResponse {

		/** A token which can be passed to a subsequent call to the `ListPretargetingConfigs` method to retrieve the next page of results in ListPretargetingConfigsRequest.pageToken. */
		nextPageToken?: string | null;

		/** List of pretargeting configurations. */
		pretargetingConfigs?: Array<PretargetingConfig>;
	}

	/** A response containing pretargeting configurations. */
	export interface ListPretargetingConfigsResponseFormProperties {

		/** A token which can be passed to a subsequent call to the `ListPretargetingConfigs` method to retrieve the next page of results in ListPretargetingConfigsRequest.pageToken. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPretargetingConfigsResponseFormGroup() {
		return new FormGroup<ListPretargetingConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pretargeting configuration: a set of targeting dimensions applied at the pretargeting stage of the RTB funnel. These control which inventory a bidder will receive bid requests for. */
	export interface PretargetingConfig {

		/** Targeting modes included by this configuration. A bid request must allow all the specified targeting modes. An unset value allows all bid requests to be sent, regardless of which targeting modes they allow. */
		allowedUserTargetingModes?: Array<string>;

		/** A subset of app inventory to target. Bid requests that match criteria in at least one of the specified dimensions will be sent. */
		appTargeting?: AppTargeting;

		/** Output only. The identifier that corresponds to this pretargeting configuration that helps buyers track and attribute their spend across their own arbitrary divisions. If a bid request matches more than one configuration, the buyer chooses which billing_id to attribute each of their bids. */
		billingId?: string | null;

		/** The diplay name associated with this configuration. This name must be unique among all the pretargeting configurations a bidder has. */
		displayName?: string | null;

		/** The sensitive content category label IDs excluded in this configuration. Bid requests for inventory with any of the specified content label IDs will not be sent. Refer to this file https://storage.googleapis.com/adx-rtb-dictionaries/content-labels.txt for category IDs. */
		excludedContentLabelIds?: Array<string>;

		/** Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting. */
		geoTargeting?: NumericTargetingDimension;

		/** Creative dimensions included by this configuration. Only bid requests eligible for at least one of the specified creative dimensions will be sent. An unset value allows all bid requests to be sent, regardless of creative dimension. */
		includedCreativeDimensions?: Array<CreativeDimensions>;

		/** Environments that are being included. Bid requests will not be sent for a given environment if it is not included. Further restrictions can be applied to included environments to target only a subset of its inventory. An unset value includes all environments. */
		includedEnvironments?: Array<string>;

		/** Creative formats included by this configuration. Only bid requests eligible for at least one of the specified creative formats will be sent. An unset value will allow all bid requests to be sent, regardless of format. */
		includedFormats?: Array<string>;

		/** The languages included in this configuration, represented by their language code. See https://developers.google.com/adwords/api/docs/appendix/languagecodes. */
		includedLanguages?: Array<string>;

		/** The mobile operating systems included in this configuration as defined in https://storage.googleapis.com/adx-rtb-dictionaries/mobile-os.csv */
		includedMobileOperatingSystemIds?: Array<string>;

		/** The platforms included by this configration. Bid requests for devices with the specified platform types will be sent. An unset value allows all bid requests to be sent, regardless of platform. */
		includedPlatforms?: Array<string>;

		/** User identifier types included in this configuration. At least one of the user identifier types specified in this list must be available for the bid request to be sent. */
		includedUserIdTypes?: Array<string>;

		/** The interstitial targeting specified for this configuration. The unset value will allow bid requests to be sent regardless of whether they are for interstitials or not. */
		interstitialTargeting?: PretargetingConfigInterstitialTargeting | null;

		/** Output only. Existing included or excluded geos that are invalid. Previously targeted geos may become invalid due to privacy restrictions. */
		invalidGeoIds?: Array<string>;

		/** The maximum QPS threshold for this configuration. The bidder should receive no more than this number of bid requests matching this configuration per second across all their bidding endpoints among all trading locations. Further information available at https://developers.google.com/authorized-buyers/rtb/peer-guide */
		maximumQps?: string | null;

		/** The targeted minimum viewability decile, ranging in values [0, 10]. A value of 5 means that the configuration will only match adslots for which we predict at least 50% viewability. Values > 10 will be rounded down to 10. An unset value or a value of 0 indicates that bid requests will be sent regardless of viewability. */
		minimumViewabilityDecile?: number | null;

		/** Output only. Name of the pretargeting configuration that must follow the pattern `bidders/{bidder_account_id}/pretargetingConfigs/{config_id}` */
		name?: string | null;

		/** Generic targeting with string values used in app, website and publisher targeting. */
		publisherTargeting?: StringTargetingDimension;

		/** Output only. The state of this pretargeting configuration. */
		state?: PretargetingConfigState | null;

		/** Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting. */
		userListTargeting?: NumericTargetingDimension;

		/** Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting. */
		verticalTargeting?: NumericTargetingDimension;

		/** Generic targeting with string values used in app, website and publisher targeting. */
		webTargeting?: StringTargetingDimension;
	}

	/** Pretargeting configuration: a set of targeting dimensions applied at the pretargeting stage of the RTB funnel. These control which inventory a bidder will receive bid requests for. */
	export interface PretargetingConfigFormProperties {

		/** Output only. The identifier that corresponds to this pretargeting configuration that helps buyers track and attribute their spend across their own arbitrary divisions. If a bid request matches more than one configuration, the buyer chooses which billing_id to attribute each of their bids. */
		billingId: FormControl<string | null | undefined>,

		/** The diplay name associated with this configuration. This name must be unique among all the pretargeting configurations a bidder has. */
		displayName: FormControl<string | null | undefined>,

		/** The interstitial targeting specified for this configuration. The unset value will allow bid requests to be sent regardless of whether they are for interstitials or not. */
		interstitialTargeting: FormControl<PretargetingConfigInterstitialTargeting | null | undefined>,

		/** The maximum QPS threshold for this configuration. The bidder should receive no more than this number of bid requests matching this configuration per second across all their bidding endpoints among all trading locations. Further information available at https://developers.google.com/authorized-buyers/rtb/peer-guide */
		maximumQps: FormControl<string | null | undefined>,

		/** The targeted minimum viewability decile, ranging in values [0, 10]. A value of 5 means that the configuration will only match adslots for which we predict at least 50% viewability. Values > 10 will be rounded down to 10. An unset value or a value of 0 indicates that bid requests will be sent regardless of viewability. */
		minimumViewabilityDecile: FormControl<number | null | undefined>,

		/** Output only. Name of the pretargeting configuration that must follow the pattern `bidders/{bidder_account_id}/pretargetingConfigs/{config_id}` */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of this pretargeting configuration. */
		state: FormControl<PretargetingConfigState | null | undefined>,
	}
	export function CreatePretargetingConfigFormGroup() {
		return new FormGroup<PretargetingConfigFormProperties>({
			billingId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			interstitialTargeting: new FormControl<PretargetingConfigInterstitialTargeting | null | undefined>(undefined),
			maximumQps: new FormControl<string | null | undefined>(undefined),
			minimumViewabilityDecile: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<PretargetingConfigState | null | undefined>(undefined),
		});

	}

	export enum PretargetingConfigInterstitialTargeting { INTERSTITIAL_TARGETING_UNSPECIFIED = 'INTERSTITIAL_TARGETING_UNSPECIFIED', ONLY_INTERSTITIAL_REQUESTS = 'ONLY_INTERSTITIAL_REQUESTS', ONLY_NON_INTERSTITIAL_REQUESTS = 'ONLY_NON_INTERSTITIAL_REQUESTS' }

	export enum PretargetingConfigState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', SUSPENDED = 'SUSPENDED' }


	/** A response to a request for listing publisher connections. */
	export interface ListPublisherConnectionsResponse {

		/** A token to retrieve the next page of results. Pass this value in the ListPublisherConnectionsRequest.pageToken field in the subsequent call to the `ListPublisherConnections` method to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The list of publisher connections. */
		publisherConnections?: Array<PublisherConnection>;
	}

	/** A response to a request for listing publisher connections. */
	export interface ListPublisherConnectionsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListPublisherConnectionsRequest.pageToken field in the subsequent call to the `ListPublisherConnections` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPublisherConnectionsResponseFormGroup() {
		return new FormGroup<ListPublisherConnectionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list user list response. */
	export interface ListUserListsResponse {

		/** The continuation page token to send back to the server in a subsequent request. Due to a currently known issue, it is recommended that the caller keep invoking the list method until the time a next page token is not returned, even if the result set is empty. */
		nextPageToken?: string | null;

		/** List of user lists from the search. */
		userLists?: Array<UserList>;
	}

	/** The list user list response. */
	export interface ListUserListsResponseFormProperties {

		/** The continuation page token to send back to the server in a subsequent request. Due to a currently known issue, it is recommended that the caller keep invoking the list method until the time a next page token is not returned, even if the result set is empty. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserListsResponseFormGroup() {
		return new FormGroup<ListUserListsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page. */
	export interface UserList {

		/** The description for the user list. */
		description?: string | null;

		/** Required. Display name of the user list. This must be unique across all user lists for a given account. */
		displayName?: string | null;

		/** Required. The number of days a user's cookie stays on the user list. The field must be between 0 and 540 inclusive. */
		membershipDurationDays?: string | null;

		/** Output only. Name of the user list that must follow the pattern `buyers/{buyer}/userLists/{user_list}`, where `{buyer}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer}` represents the account ID of the child seat buyer. `{user_list}` is an int64 identifier assigned by Google to uniquely identify a user list. */
		name?: string | null;

		/** Output only. The status of the user list. A new user list starts out as open. */
		status?: UserListStatus | null;

		/** Deprecated. This will be removed in October 2023. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Represents the URL restriction (for the URL captured by the pixel callback) for a user list. */
		urlRestriction?: UrlRestriction;
	}

	/** Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page. */
	export interface UserListFormProperties {

		/** The description for the user list. */
		description: FormControl<string | null | undefined>,

		/** Required. Display name of the user list. This must be unique across all user lists for a given account. */
		displayName: FormControl<string | null | undefined>,

		/** Required. The number of days a user's cookie stays on the user list. The field must be between 0 and 540 inclusive. */
		membershipDurationDays: FormControl<string | null | undefined>,

		/** Output only. Name of the user list that must follow the pattern `buyers/{buyer}/userLists/{user_list}`, where `{buyer}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer}` represents the account ID of the child seat buyer. `{user_list}` is an int64 identifier assigned by Google to uniquely identify a user list. */
		name: FormControl<string | null | undefined>,

		/** Output only. The status of the user list. A new user list starts out as open. */
		status: FormControl<UserListStatus | null | undefined>,
	}
	export function CreateUserListFormGroup() {
		return new FormGroup<UserListFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			membershipDurationDays: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<UserListStatus | null | undefined>(undefined),
		});

	}

	export enum UserListStatus { STATUS_UNSPECIFIED = 'STATUS_UNSPECIFIED', OPEN = 'OPEN', CLOSED = 'CLOSED' }


	/** Deprecated. This will be removed in October 2023. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Represents the URL restriction (for the URL captured by the pixel callback) for a user list. */
	export interface UrlRestriction {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		endDate?: Date;

		/** The restriction type for the specified URL. */
		restrictionType?: UrlRestrictionRestrictionType | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		startDate?: Date;

		/** Required. The URL to use for applying the restriction on the user list. */
		url?: string | null;
	}

	/** Deprecated. This will be removed in October 2023. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Represents the URL restriction (for the URL captured by the pixel callback) for a user list. */
	export interface UrlRestrictionFormProperties {

		/** The restriction type for the specified URL. */
		restrictionType: FormControl<UrlRestrictionRestrictionType | null | undefined>,

		/** Required. The URL to use for applying the restriction on the user list. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUrlRestrictionFormGroup() {
		return new FormGroup<UrlRestrictionFormProperties>({
			restrictionType: new FormControl<UrlRestrictionRestrictionType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UrlRestrictionRestrictionType { RESTRICTION_TYPE_UNSPECIFIED = 'RESTRICTION_TYPE_UNSPECIFIED', CONTAINS = 'CONTAINS', EQUALS = 'EQUALS', STARTS_WITH = 'STARTS_WITH', ENDS_WITH = 'ENDS_WITH', DOES_NOT_EQUAL = 'DOES_NOT_EQUAL', DOES_NOT_CONTAIN = 'DOES_NOT_CONTAIN', DOES_NOT_START_WITH = 'DOES_NOT_START_WITH', DOES_NOT_END_WITH = 'DOES_NOT_END_WITH' }


	/** A request to open a specified user list. */
	export interface OpenUserListRequest {
	}

	/** A request to open a specified user list. */
	export interface OpenUserListRequestFormProperties {
	}
	export function CreateOpenUserListRequestFormGroup() {
		return new FormGroup<OpenUserListRequestFormProperties>({
		});

	}


	/** A request to stop targeting the provided apps in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting. */
	export interface RemoveTargetedAppsRequest {

		/** A list of app IDs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted app IDs in PretargetingConfig.appTargeting.mobileAppTargeting.values. */
		appIds?: Array<string>;
	}

	/** A request to stop targeting the provided apps in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting. */
	export interface RemoveTargetedAppsRequestFormProperties {
	}
	export function CreateRemoveTargetedAppsRequestFormGroup() {
		return new FormGroup<RemoveTargetedAppsRequestFormProperties>({
		});

	}


	/** A request to stop targeting publishers in a specific configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting. */
	export interface RemoveTargetedPublishersRequest {

		/** A list of publisher IDs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted publisher IDs in PretargetingConfig.publisherTargeting.values. Publishers are identified by their publisher ID from ads.txt / app-ads.txt. See https://iabtechlab.com/ads-txt/ and https://iabtechlab.com/app-ads-txt/ for more details. */
		publisherIds?: Array<string>;
	}

	/** A request to stop targeting publishers in a specific configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting. */
	export interface RemoveTargetedPublishersRequestFormProperties {
	}
	export function CreateRemoveTargetedPublishersRequestFormGroup() {
		return new FormGroup<RemoveTargetedPublishersRequestFormProperties>({
		});

	}


	/** A request to stop targeting sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting. */
	export interface RemoveTargetedSitesRequest {

		/** A list of site URLs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted URLs in PretargetingConfig.webTargeting.values. */
		sites?: Array<string>;
	}

	/** A request to stop targeting sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting. */
	export interface RemoveTargetedSitesRequestFormProperties {
	}
	export function CreateRemoveTargetedSitesRequestFormGroup() {
		return new FormGroup<RemoveTargetedSitesRequestFormProperties>({
		});

	}


	/** A request to suspend a pretargeting configuration. Sets the configuration's state to SUSPENDED. */
	export interface SuspendPretargetingConfigRequest {
	}

	/** A request to suspend a pretargeting configuration. Sets the configuration's state to SUSPENDED. */
	export interface SuspendPretargetingConfigRequestFormProperties {
	}
	export function CreateSuspendPretargetingConfigRequestFormGroup() {
		return new FormGroup<SuspendPretargetingConfigRequestFormProperties>({
		});

	}


	/** A request to receive push notifications when any of the creatives belonging to the bidder changes status. */
	export interface WatchCreativesRequest {
	}

	/** A request to receive push notifications when any of the creatives belonging to the bidder changes status. */
	export interface WatchCreativesRequestFormProperties {
	}
	export function CreateWatchCreativesRequestFormGroup() {
		return new FormGroup<WatchCreativesRequestFormProperties>({
		});

	}


	/** A response for the request to receive push notification when a bidder's creatives change status. */
	export interface WatchCreativesResponse {

		/** The Pub/Sub subscription that can be used to pull creative status notifications. This would be of the format `projects/{project_id}/subscriptions/{subscription_id}`. Subscription is created with pull delivery. All service accounts belonging to the bidder will have read access to this subscription. Subscriptions that are inactive for more than 90 days will be disabled. Use watchCreatives to re-enable the subscription. */
		subscription?: string | null;

		/** The Pub/Sub topic that will be used to publish creative serving status notifications. This would be of the format `projects/{project_id}/topics/{topic_id}`. */
		topic?: string | null;
	}

	/** A response for the request to receive push notification when a bidder's creatives change status. */
	export interface WatchCreativesResponseFormProperties {

		/** The Pub/Sub subscription that can be used to pull creative status notifications. This would be of the format `projects/{project_id}/subscriptions/{subscription_id}`. Subscription is created with pull delivery. All service accounts belonging to the bidder will have read access to this subscription. Subscriptions that are inactive for more than 90 days will be disabled. Use watchCreatives to re-enable the subscription. */
		subscription: FormControl<string | null | undefined>,

		/** The Pub/Sub topic that will be used to publish creative serving status notifications. This would be of the format `projects/{project_id}/topics/{topic_id}`. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreateWatchCreativesResponseFormGroup() {
		return new FormGroup<WatchCreativesResponseFormProperties>({
			subscription: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all the bidder accounts that belong to the caller.
		 * Get v1/bidders
		 * @param {number} pageSize The maximum number of bidders to return. If unspecified, at most 100 bidders will be returned. The maximum value is 500; values above 500 will be coerced to 500.
		 * @param {string} pageToken A token identifying a page of results the server should return. This value is received from a previous `ListBidders` call in ListBiddersResponse.nextPageToken.
		 * @return {ListBiddersResponse} Successful response
		 */
		Realtimebidding_bidders_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBiddersResponse> {
			return this.http.get<ListBiddersResponse>(this.baseUri + 'v1/bidders?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists all buyer account information the calling buyer user or service account is permissioned to manage.
		 * Get v1/buyers
		 * @param {number} pageSize The maximum number of buyers to return. If unspecified, at most 100 buyers will be returned. The maximum value is 500; values above 500 will be coerced to 500.
		 * @param {string} pageToken A token identifying a page of results the server should return. This value is received from a previous `ListBuyers` call in ListBuyersResponse.nextPageToken.
		 * @return {ListBuyersResponse} Successful response
		 */
		Realtimebidding_buyers_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBuyersResponse> {
			return this.http.get<ListBuyersResponse>(this.baseUri + 'v1/buyers?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Deletes a pretargeting configuration.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the pretargeting configuration to delete. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
		 * @return {Empty} Successful response
		 */
		Realtimebidding_bidders_pretargetingConfigs_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets a user list by its name.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the user list to be retrieved. See UserList.name.
		 * @param {Realtimebidding_buyers_userLists_getView} view Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL".
		 * @return {UserList} Successful response
		 */
		Realtimebidding_buyers_userLists_get(name: string, view: Realtimebidding_buyers_userLists_getView | null | undefined): Observable<UserList> {
			return this.http.get<UserList>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Updates a creative.
		 * Patch v1/{name}
		 * @param {string} name Output only. Name of the creative. Follows the pattern `buyers/{buyer}/creatives/{creative}`, where `{buyer}` represents the account ID of the buyer who owns the creative, and `{creative}` is the buyer-specific creative ID that references this creative in the bid response.
		 * @param {string} updateMask Field mask to use for partial in-place updates.
		 * @return {Creative} Successful response
		 */
		Realtimebidding_buyers_creatives_patch(name: string, updateMask: string | null | undefined, requestBody: Creative): Observable<Creative> {
			return this.http.patch<Creative>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the given user list. Only user lists with URLRestrictions can be updated.
		 * Put v1/{name}
		 * @param {string} name Output only. Name of the user list that must follow the pattern `buyers/{buyer}/userLists/{user_list}`, where `{buyer}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer}` represents the account ID of the child seat buyer. `{user_list}` is an int64 identifier assigned by Google to uniquely identify a user list.
		 * @return {UserList} Successful response
		 */
		Realtimebidding_buyers_userLists_update(name: string, requestBody: UserList): Observable<UserList> {
			return this.http.put<UserList>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activates a pretargeting configuration.
		 * Post v1/{name}:activate
		 * @param {string} name Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
		 * @return {PretargetingConfig} Successful response
		 */
		Realtimebidding_bidders_pretargetingConfigs_activate(name: string, requestBody: ActivatePretargetingConfigRequest): Observable<PretargetingConfig> {
			return this.http.post<PretargetingConfig>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':activate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Changes the status of a user list to CLOSED. This prevents new users from being added to the user list.
		 * Post v1/{name}:close
		 * @param {string} name Required. The name of the user list to close. See UserList.name
		 * @return {UserList} Successful response
		 */
		Realtimebidding_buyers_userLists_close(name: string, requestBody: CloseUserListRequest): Observable<UserList> {
			return this.http.post<UserList>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':close', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This has been sunset as of October 2023, and will return an error response if called. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.
		 * Get v1/{name}:getRemarketingTag
		 * @param {string} name Required. To fetch the remarketing tag for an account, the name must follow the pattern `buyers/{accountId}`, where `{accountId}` represents the ID of the buyer that owns the remarketing tag. For a bidder accessing the remarketing tag on behalf of a child seat buyer, `{accountId}` should represent the ID of the child seat buyer. To fetch the remarketing tag for a specific user list, the name must follow the pattern `buyers/{accountId}/userLists/{userListId}`. See UserList.name.
		 * @return {GetRemarketingTagResponse} Successful response
		 */
		Realtimebidding_buyers_userLists_getRemarketingTag(name: string): Observable<GetRemarketingTagResponse> {
			return this.http.get<GetRemarketingTagResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':getRemarketingTag', {});
		}

		/**
		 * Changes the status of a user list to OPEN. This allows new users to be added to the user list.
		 * Post v1/{name}:open
		 * @param {string} name Required. The name of the user list to open. See UserList.name
		 * @return {UserList} Successful response
		 */
		Realtimebidding_buyers_userLists_open(name: string, requestBody: OpenUserListRequest): Observable<UserList> {
			return this.http.post<UserList>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':open', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Suspends a pretargeting configuration.
		 * Post v1/{name}:suspend
		 * @param {string} name Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
		 * @return {PretargetingConfig} Successful response
		 */
		Realtimebidding_bidders_pretargetingConfigs_suspend(name: string, requestBody: SuspendPretargetingConfigRequest): Observable<PretargetingConfig> {
			return this.http.post<PretargetingConfig>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':suspend', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.
		 * Get v1/{parent}/creatives
		 * @param {string} parent Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId}` or `bidders/{bidderAccountId}`. For `buyers/{buyerAccountId}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId}`, for example, for all creatives pertaining to bidder (`123`), use `bidders/123`.
		 * @param {string} filter Query string to filter creatives. If no filter is specified, all active creatives will be returned. Example: 'accountId=12345 AND (dealsStatus:DISAPPROVED AND disapprovalReason:UNACCEPTABLE_CONTENT) OR declaredAttributes:IS_COOKIE_TARGETED'
		 * @param {number} pageSize Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method. Page tokens for continued pages are valid for up to five hours, counting from the call to 'ListCreatives' for the first page.
		 * @param {Realtimebidding_buyers_userLists_getView} view Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL".
		 * @return {ListCreativesResponse} Successful response
		 */
		Realtimebidding_buyers_creatives_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Realtimebidding_buyers_userLists_getView | null | undefined): Observable<ListCreativesResponse> {
			return this.http.get<ListCreativesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/creatives&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a creative.
		 * Post v1/{parent}/creatives
		 * @param {string} parent Required. The name of the parent buyer that the new creative belongs to that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns a creative. For a bidder accessing creatives on behalf of a child seat buyer, `{buyerAccountId}` should represent the account ID of the child seat buyer.
		 * @return {Creative} Successful response
		 */
		Realtimebidding_buyers_creatives_create(parent: string, requestBody: Creative): Observable<Creative> {
			return this.http.post<Creative>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/creatives', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
		 * Post v1/{parent}/creatives:watch
		 * @param {string} parent Required. To watch all creatives pertaining to the bidder and all its child seat accounts, the bidder must follow the pattern `bidders/{bidderAccountId}`.
		 * @return {WatchCreativesResponse} Successful response
		 */
		Realtimebidding_bidders_creatives_watch(parent: string, requestBody: WatchCreativesRequest): Observable<WatchCreativesResponse> {
			return this.http.post<WatchCreativesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/creatives:watch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the bidder's endpoints.
		 * Get v1/{parent}/endpoints
		 * @param {string} parent Required. Name of the bidder whose endpoints will be listed. Format: `bidders/{bidderAccountId}`
		 * @param {number} pageSize The maximum number of endpoints to return. If unspecified, at most 100 endpoints will be returned. The maximum value is 500; values above 500 will be coerced to 500.
		 * @param {string} pageToken A token identifying a page of results the server should return. This value is received from a previous `ListEndpoints` call in ListEndpointsResponse.nextPageToken.
		 * @return {ListEndpointsResponse} Successful response
		 */
		Realtimebidding_bidders_endpoints_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListEndpointsResponse> {
			return this.http.get<ListEndpointsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/endpoints&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists all pretargeting configurations for a single bidder.
		 * Get v1/{parent}/pretargetingConfigs
		 * @param {string} parent Required. Name of the bidder whose pretargeting configurations will be listed. Format: bidders/{bidderAccountId}
		 * @param {number} pageSize The maximum number of pretargeting configurations to return. If unspecified, at most 10 pretargeting configurations will be returned. The maximum value is 100; values above 100 will be coerced to 100.
		 * @param {string} pageToken A token identifying a page of results the server should return. This value is received from a previous `ListPretargetingConfigs` call in ListPretargetingConfigsResponse.nextPageToken.
		 * @return {ListPretargetingConfigsResponse} Successful response
		 */
		Realtimebidding_bidders_pretargetingConfigs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPretargetingConfigsResponse> {
			return this.http.get<ListPretargetingConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/pretargetingConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
		 * Post v1/{parent}/pretargetingConfigs
		 * @param {string} parent Required. Name of the bidder to create the pretargeting configuration for. Format: bidders/{bidderAccountId}
		 * @return {PretargetingConfig} Successful response
		 */
		Realtimebidding_bidders_pretargetingConfigs_create(parent: string, requestBody: PretargetingConfig): Observable<PretargetingConfig> {
			return this.http.post<PretargetingConfig>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/pretargetingConfigs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists publisher connections for a given bidder.
		 * Get v1/{parent}/publisherConnections
		 * @param {string} parent Required. Name of the bidder for which publishers have initiated connections. The pattern for this resource is `bidders/{bidder}` where `{bidder}` represents the account ID of the bidder.
		 * @param {string} filter Query string to filter publisher connections. Connections can be filtered by `displayName`, `publisherPlatform`, and `biddingState`. If no filter is specified, all publisher connections will be returned. Example: 'displayName="Great Publisher*" AND publisherPlatform=ADMOB AND biddingState != PENDING' See https://google.aip.dev/160 for more information about filtering syntax.
		 * @param {string} orderBy Order specification by which results should be sorted. If no sort order is specified, the results will be returned in alphabetic order based on the publisher's publisher code. Results can be sorted by `createTime`. Example: 'createTime DESC'.
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested (due to timeout constraint) even if more are available through another call. If unspecified, the server will pick an appropriate default. Acceptable values are 1 to 5000, inclusive.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListPublisherConnectionsResponse.nextPageToken returned from the previous call to the 'ListPublisherConnections' method.
		 * @return {ListPublisherConnectionsResponse} Successful response
		 */
		Realtimebidding_bidders_publisherConnections_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPublisherConnectionsResponse> {
			return this.http.get<ListPublisherConnectionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/publisherConnections&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Batch approves multiple publisher connections.
		 * Post v1/{parent}/publisherConnections:batchApprove
		 * @param {string} parent Required. The bidder for whom publisher connections will be approved. Format: `bidders/{bidder}` where `{bidder}` is the account ID of the bidder.
		 * @return {BatchApprovePublisherConnectionsResponse} Successful response
		 */
		Realtimebidding_bidders_publisherConnections_batchApprove(parent: string, requestBody: BatchApprovePublisherConnectionsRequest): Observable<BatchApprovePublisherConnectionsResponse> {
			return this.http.post<BatchApprovePublisherConnectionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/publisherConnections:batchApprove', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batch rejects multiple publisher connections.
		 * Post v1/{parent}/publisherConnections:batchReject
		 * @param {string} parent Required. The bidder for whom publisher connections will be rejected. Format: `bidders/{bidder}` where `{bidder}` is the account ID of the bidder.
		 * @return {BatchRejectPublisherConnectionsResponse} Successful response
		 */
		Realtimebidding_bidders_publisherConnections_batchReject(parent: string, requestBody: BatchRejectPublisherConnectionsRequest): Observable<BatchRejectPublisherConnectionsResponse> {
			return this.http.post<BatchRejectPublisherConnectionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/publisherConnections:batchReject', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the user lists visible to the current user.
		 * Get v1/{parent}/userLists
		 * @param {string} parent Required. The name of the parent buyer for the user lists to be returned that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns user lists. For a bidder accessing user lists on behalf of a child seat buyer , `{buyerAccountId}` should represent the account ID of the child seat buyer.
		 * @param {number} pageSize The number of results to return per page.
		 * @param {string} pageToken Continuation page token as received from a previous response.
		 * @return {ListUserListsResponse} Successful response
		 */
		Realtimebidding_buyers_userLists_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListUserListsResponse> {
			return this.http.get<ListUserListsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userLists&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new user list.
		 * Post v1/{parent}/userLists
		 * @param {string} parent Required. The name of the parent buyer of the user list to be retrieved, which must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyerAccountId}` should represent the account ID of the child seat buyer.
		 * @return {UserList} Successful response
		 */
		Realtimebidding_buyers_userLists_create(parent: string, requestBody: UserList): Observable<UserList> {
			return this.http.post<UserList>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userLists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds targeted apps to the pretargeting configuration.
		 * Post v1/{pretargetingConfig}:addTargetedApps
		 * @param {string} pretargetingConfig Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
		 * @return {PretargetingConfig} Successful response
		 */
		Realtimebidding_bidders_pretargetingConfigs_addTargetedApps(pretargetingConfig: string, requestBody: AddTargetedAppsRequest): Observable<PretargetingConfig> {
			return this.http.post<PretargetingConfig>(this.baseUri + 'v1/' + (pretargetingConfig == null ? '' : encodeURIComponent(pretargetingConfig)) + ':addTargetedApps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds targeted publishers to the pretargeting config.
		 * Post v1/{pretargetingConfig}:addTargetedPublishers
		 * @param {string} pretargetingConfig Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
		 * @return {PretargetingConfig} Successful response
		 */
		Realtimebidding_bidders_pretargetingConfigs_addTargetedPublishers(pretargetingConfig: string, requestBody: AddTargetedPublishersRequest): Observable<PretargetingConfig> {
			return this.http.post<PretargetingConfig>(this.baseUri + 'v1/' + (pretargetingConfig == null ? '' : encodeURIComponent(pretargetingConfig)) + ':addTargetedPublishers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds targeted sites to the pretargeting configuration.
		 * Post v1/{pretargetingConfig}:addTargetedSites
		 * @param {string} pretargetingConfig Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
		 * @return {PretargetingConfig} Successful response
		 */
		Realtimebidding_bidders_pretargetingConfigs_addTargetedSites(pretargetingConfig: string, requestBody: AddTargetedSitesRequest): Observable<PretargetingConfig> {
			return this.http.post<PretargetingConfig>(this.baseUri + 'v1/' + (pretargetingConfig == null ? '' : encodeURIComponent(pretargetingConfig)) + ':addTargetedSites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes targeted apps from the pretargeting configuration.
		 * Post v1/{pretargetingConfig}:removeTargetedApps
		 * @param {string} pretargetingConfig Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
		 * @return {PretargetingConfig} Successful response
		 */
		Realtimebidding_bidders_pretargetingConfigs_removeTargetedApps(pretargetingConfig: string, requestBody: RemoveTargetedAppsRequest): Observable<PretargetingConfig> {
			return this.http.post<PretargetingConfig>(this.baseUri + 'v1/' + (pretargetingConfig == null ? '' : encodeURIComponent(pretargetingConfig)) + ':removeTargetedApps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes targeted publishers from the pretargeting config.
		 * Post v1/{pretargetingConfig}:removeTargetedPublishers
		 * @param {string} pretargetingConfig Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
		 * @return {PretargetingConfig} Successful response
		 */
		Realtimebidding_bidders_pretargetingConfigs_removeTargetedPublishers(pretargetingConfig: string, requestBody: RemoveTargetedPublishersRequest): Observable<PretargetingConfig> {
			return this.http.post<PretargetingConfig>(this.baseUri + 'v1/' + (pretargetingConfig == null ? '' : encodeURIComponent(pretargetingConfig)) + ':removeTargetedPublishers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes targeted sites from the pretargeting configuration.
		 * Post v1/{pretargetingConfig}:removeTargetedSites
		 * @param {string} pretargetingConfig Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId}
		 * @return {PretargetingConfig} Successful response
		 */
		Realtimebidding_bidders_pretargetingConfigs_removeTargetedSites(pretargetingConfig: string, requestBody: RemoveTargetedSitesRequest): Observable<PretargetingConfig> {
			return this.http.post<PretargetingConfig>(this.baseUri + 'v1/' + (pretargetingConfig == null ? '' : encodeURIComponent(pretargetingConfig)) + ':removeTargetedSites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Realtimebidding_buyers_userLists_getView { CREATIVE_VIEW_UNSPECIFIED = 'CREATIVE_VIEW_UNSPECIFIED', SERVING_DECISION_ONLY = 'SERVING_DECISION_ONLY', FULL = 'FULL' }

}

