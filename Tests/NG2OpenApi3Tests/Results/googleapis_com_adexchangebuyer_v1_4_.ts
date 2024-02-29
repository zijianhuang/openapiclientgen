import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Configuration data for an Ad Exchange buyer account. */
	export interface Account {

		/** When this is false, bid requests that include a deal ID for a private auction or preferred deal are always sent to your bidder. When true, all active pretargeting configs will be applied to private auctions and preferred deals. Programmatic Guaranteed deals (when enabled) are always sent to your bidder. */
		applyPretargetingToNonGuaranteedDeals?: boolean | null;

		/** Your bidder locations that have distinct URLs. */
		AccountBidderLocation?: Array<AccountBidderLocation>;

		/** The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this. */
		cookieMatchingNid?: string | null;

		/** The base URL used in cookie match requests. */
		cookieMatchingUrl?: string | null;

		/**
		 * Account id.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Resource type. */
		kind?: string | null;

		/**
		 * The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximumActiveCreatives?: number | null;

		/**
		 * The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximumTotalQps?: number | null;

		/**
		 * The number of creatives that this account inserted or bid with in the last 30 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberActiveCreatives?: number | null;
	}

	/** Configuration data for an Ad Exchange buyer account. */
	export interface AccountFormProperties {

		/** When this is false, bid requests that include a deal ID for a private auction or preferred deal are always sent to your bidder. When true, all active pretargeting configs will be applied to private auctions and preferred deals. Programmatic Guaranteed deals (when enabled) are always sent to your bidder. */
		applyPretargetingToNonGuaranteedDeals: FormControl<boolean | null | undefined>,

		/** The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this. */
		cookieMatchingNid: FormControl<string | null | undefined>,

		/** The base URL used in cookie match requests. */
		cookieMatchingUrl: FormControl<string | null | undefined>,

		/**
		 * Account id.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximumActiveCreatives: FormControl<number | null | undefined>,

		/**
		 * The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximumTotalQps: FormControl<number | null | undefined>,

		/**
		 * The number of creatives that this account inserted or bid with in the last 30 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberActiveCreatives: FormControl<number | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			applyPretargetingToNonGuaranteedDeals: new FormControl<boolean | null | undefined>(undefined),
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
		bidProtocol?: string | null;

		/**
		 * The maximum queries per second the Ad Exchange will send.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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
		bidProtocol: FormControl<string | null | undefined>,

		/**
		 * The maximum queries per second the Ad Exchange will send.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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
			bidProtocol: new FormControl<string | null | undefined>(undefined),
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

	export interface AddOrderDealsRequest {

		/** The list of deals to add */
		deals?: Array<MarketplaceDeal>;

		/** The last known proposal revision number. */
		proposalRevisionNumber?: string | null;

		/** Indicates an optional action to take on the proposal */
		updateAction?: string | null;
	}
	export interface AddOrderDealsRequestFormProperties {

		/** The last known proposal revision number. */
		proposalRevisionNumber: FormControl<string | null | undefined>,

		/** Indicates an optional action to take on the proposal */
		updateAction: FormControl<string | null | undefined>,
	}
	export function CreateAddOrderDealsRequestFormGroup() {
		return new FormGroup<AddOrderDealsRequestFormProperties>({
			proposalRevisionNumber: new FormControl<string | null | undefined>(undefined),
			updateAction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving. */
	export interface MarketplaceDeal {
		buyerPrivateData?: PrivateData;

		/** The time (ms since epoch) of the deal creation. (readonly) */
		creationTimeMs?: string | null;

		/** Specifies the creative pre-approval policy (buyer-readonly) */
		creativePreApprovalPolicy?: string | null;

		/** Specifies whether the creative is safeFrame compatible (buyer-readonly) */
		creativeSafeFrameCompatibility?: string | null;

		/** A unique deal-id for the deal (readonly). */
		dealId?: string | null;
		dealServingMetadata?: DealServingMetadata;
		deliveryControl?: DeliveryControl;

		/** The external deal id assigned to this deal once the deal is finalized. This is the deal-id that shows up in serving/reporting etc. (readonly) */
		externalDealId?: string | null;

		/** Proposed flight end time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable) */
		flightEndTimeMs?: string | null;

		/** Proposed flight start time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable) */
		flightStartTimeMs?: string | null;

		/** Description for the deal terms. (buyer-readonly) */
		inventoryDescription?: string | null;

		/** Indicates whether the current deal is a RFP template. RFP template is created by buyer and not based on seller created products. */
		isRfpTemplate?: boolean | null;

		/** True, if the buyside inventory setup is complete for this deal. (readonly, except via OrderSetupCompleted action) */
		isSetupComplete?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#marketplaceDeal". */
		kind?: string | null;

		/** The time (ms since epoch) when the deal was last updated. (readonly) */
		lastUpdateTimeMs?: string | null;
		makegoodRequestedReason?: string | null;

		/** The name of the deal. (updatable) */
		name?: string | null;

		/** The product-id from which this deal was created. (readonly, except on create) */
		productId?: string | null;

		/** The revision number of the product that the deal was created from (readonly, except on create) */
		productRevisionNumber?: string | null;

		/** Specifies the creative source for programmatic deals, PUBLISHER means creative is provided by seller and ADVERTISR means creative is provided by buyer. (buyer-readonly) */
		programmaticCreativeSource?: string | null;
		proposalId?: string | null;

		/** Optional Seller contact information for the deal (buyer-readonly) */
		sellerContacts?: Array<ContactInformation>;

		/** The shared targeting visible to buyers and sellers. Each shared targeting entity is AND'd together. (updatable) */
		sharedTargetings?: Array<SharedTargeting>;

		/** The syndication product associated with the deal. (readonly, except on create) */
		syndicationProduct?: string | null;
		terms?: DealTerms;
		webPropertyCode?: string | null;
	}

	/** A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving. */
	export interface MarketplaceDealFormProperties {

		/** The time (ms since epoch) of the deal creation. (readonly) */
		creationTimeMs: FormControl<string | null | undefined>,

		/** Specifies the creative pre-approval policy (buyer-readonly) */
		creativePreApprovalPolicy: FormControl<string | null | undefined>,

		/** Specifies whether the creative is safeFrame compatible (buyer-readonly) */
		creativeSafeFrameCompatibility: FormControl<string | null | undefined>,

		/** A unique deal-id for the deal (readonly). */
		dealId: FormControl<string | null | undefined>,

		/** The external deal id assigned to this deal once the deal is finalized. This is the deal-id that shows up in serving/reporting etc. (readonly) */
		externalDealId: FormControl<string | null | undefined>,

		/** Proposed flight end time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable) */
		flightEndTimeMs: FormControl<string | null | undefined>,

		/** Proposed flight start time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable) */
		flightStartTimeMs: FormControl<string | null | undefined>,

		/** Description for the deal terms. (buyer-readonly) */
		inventoryDescription: FormControl<string | null | undefined>,

		/** Indicates whether the current deal is a RFP template. RFP template is created by buyer and not based on seller created products. */
		isRfpTemplate: FormControl<boolean | null | undefined>,

		/** True, if the buyside inventory setup is complete for this deal. (readonly, except via OrderSetupCompleted action) */
		isSetupComplete: FormControl<boolean | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#marketplaceDeal". */
		kind: FormControl<string | null | undefined>,

		/** The time (ms since epoch) when the deal was last updated. (readonly) */
		lastUpdateTimeMs: FormControl<string | null | undefined>,
		makegoodRequestedReason: FormControl<string | null | undefined>,

		/** The name of the deal. (updatable) */
		name: FormControl<string | null | undefined>,

		/** The product-id from which this deal was created. (readonly, except on create) */
		productId: FormControl<string | null | undefined>,

		/** The revision number of the product that the deal was created from (readonly, except on create) */
		productRevisionNumber: FormControl<string | null | undefined>,

		/** Specifies the creative source for programmatic deals, PUBLISHER means creative is provided by seller and ADVERTISR means creative is provided by buyer. (buyer-readonly) */
		programmaticCreativeSource: FormControl<string | null | undefined>,
		proposalId: FormControl<string | null | undefined>,

		/** The syndication product associated with the deal. (readonly, except on create) */
		syndicationProduct: FormControl<string | null | undefined>,
		webPropertyCode: FormControl<string | null | undefined>,
	}
	export function CreateMarketplaceDealFormGroup() {
		return new FormGroup<MarketplaceDealFormProperties>({
			creationTimeMs: new FormControl<string | null | undefined>(undefined),
			creativePreApprovalPolicy: new FormControl<string | null | undefined>(undefined),
			creativeSafeFrameCompatibility: new FormControl<string | null | undefined>(undefined),
			dealId: new FormControl<string | null | undefined>(undefined),
			externalDealId: new FormControl<string | null | undefined>(undefined),
			flightEndTimeMs: new FormControl<string | null | undefined>(undefined),
			flightStartTimeMs: new FormControl<string | null | undefined>(undefined),
			inventoryDescription: new FormControl<string | null | undefined>(undefined),
			isRfpTemplate: new FormControl<boolean | null | undefined>(undefined),
			isSetupComplete: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastUpdateTimeMs: new FormControl<string | null | undefined>(undefined),
			makegoodRequestedReason: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			productRevisionNumber: new FormControl<string | null | undefined>(undefined),
			programmaticCreativeSource: new FormControl<string | null | undefined>(undefined),
			proposalId: new FormControl<string | null | undefined>(undefined),
			syndicationProduct: new FormControl<string | null | undefined>(undefined),
			webPropertyCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PrivateData {
		referenceId?: string | null;
		referencePayload?: string | null;
	}
	export interface PrivateDataFormProperties {
		referenceId: FormControl<string | null | undefined>,
		referencePayload: FormControl<string | null | undefined>,
	}
	export function CreatePrivateDataFormGroup() {
		return new FormGroup<PrivateDataFormProperties>({
			referenceId: new FormControl<string | null | undefined>(undefined),
			referencePayload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DealServingMetadata {

		/** True if alcohol ads are allowed for this deal (read-only). This field is only populated when querying for finalized orders using the method GetFinalizedOrderDeals */
		alcoholAdsAllowed?: boolean | null;

		/** Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently. */
		dealPauseStatus?: DealServingMetadataDealPauseStatus;
	}
	export interface DealServingMetadataFormProperties {

		/** True if alcohol ads are allowed for this deal (read-only). This field is only populated when querying for finalized orders using the method GetFinalizedOrderDeals */
		alcoholAdsAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateDealServingMetadataFormGroup() {
		return new FormGroup<DealServingMetadataFormProperties>({
			alcoholAdsAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently. */
	export interface DealServingMetadataDealPauseStatus {
		buyerPauseReason?: string | null;

		/** If the deal is paused, records which party paused the deal first. */
		firstPausedBy?: string | null;
		hasBuyerPaused?: boolean | null;
		hasSellerPaused?: boolean | null;
		sellerPauseReason?: string | null;
	}

	/** Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently. */
	export interface DealServingMetadataDealPauseStatusFormProperties {
		buyerPauseReason: FormControl<string | null | undefined>,

		/** If the deal is paused, records which party paused the deal first. */
		firstPausedBy: FormControl<string | null | undefined>,
		hasBuyerPaused: FormControl<boolean | null | undefined>,
		hasSellerPaused: FormControl<boolean | null | undefined>,
		sellerPauseReason: FormControl<string | null | undefined>,
	}
	export function CreateDealServingMetadataDealPauseStatusFormGroup() {
		return new FormGroup<DealServingMetadataDealPauseStatusFormProperties>({
			buyerPauseReason: new FormControl<string | null | undefined>(undefined),
			firstPausedBy: new FormControl<string | null | undefined>(undefined),
			hasBuyerPaused: new FormControl<boolean | null | undefined>(undefined),
			hasSellerPaused: new FormControl<boolean | null | undefined>(undefined),
			sellerPauseReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeliveryControl {
		creativeBlockingLevel?: string | null;
		deliveryRateType?: string | null;
		frequencyCaps?: Array<DeliveryControlFrequencyCap>;
	}
	export interface DeliveryControlFormProperties {
		creativeBlockingLevel: FormControl<string | null | undefined>,
		deliveryRateType: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryControlFormGroup() {
		return new FormGroup<DeliveryControlFormProperties>({
			creativeBlockingLevel: new FormControl<string | null | undefined>(undefined),
			deliveryRateType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeliveryControlFrequencyCap {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maxImpressions?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numTimeUnits?: number | null;
		timeUnitType?: string | null;
	}
	export interface DeliveryControlFrequencyCapFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maxImpressions: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numTimeUnits: FormControl<number | null | undefined>,
		timeUnitType: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryControlFrequencyCapFormGroup() {
		return new FormGroup<DeliveryControlFrequencyCapFormProperties>({
			maxImpressions: new FormControl<number | null | undefined>(undefined),
			numTimeUnits: new FormControl<number | null | undefined>(undefined),
			timeUnitType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactInformation {

		/** Email address of the contact. */
		email?: string | null;

		/** The name of the contact. */
		name?: string | null;
	}
	export interface ContactInformationFormProperties {

		/** Email address of the contact. */
		email: FormControl<string | null | undefined>,

		/** The name of the contact. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateContactInformationFormGroup() {
		return new FormGroup<ContactInformationFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedTargeting {

		/** The list of values to exclude from targeting. Each value is AND'd together. */
		exclusions?: Array<TargetingValue>;

		/** The list of value to include as part of the targeting. Each value is OR'd together. */
		inclusions?: Array<TargetingValue>;

		/** The key representing the shared targeting criterion. */
		key?: string | null;
	}
	export interface SharedTargetingFormProperties {

		/** The key representing the shared targeting criterion. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateSharedTargetingFormGroup() {
		return new FormGroup<SharedTargetingFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TargetingValue {

		/** Next Id: 7 */
		creativeSizeValue?: TargetingValueCreativeSize;
		dayPartTargetingValue?: TargetingValueDayPartTargeting;
		demogAgeCriteriaValue?: TargetingValueDemogAgeCriteria;
		demogGenderCriteriaValue?: TargetingValueDemogGenderCriteria;

		/** The long value to exclude/include. */
		longValue?: string | null;
		requestPlatformTargetingValue?: TargetingValueRequestPlatformTargeting;

		/** The string value to exclude/include. */
		stringValue?: string | null;
	}
	export interface TargetingValueFormProperties {

		/** The long value to exclude/include. */
		longValue: FormControl<string | null | undefined>,

		/** The string value to exclude/include. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateTargetingValueFormGroup() {
		return new FormGroup<TargetingValueFormProperties>({
			longValue: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Next Id: 7 */
	export interface TargetingValueCreativeSize {

		/** The formats allowed by the publisher. */
		allowedFormats?: Array<string>;

		/** For video size type, the list of companion sizes. */
		companionSizes?: Array<TargetingValueSize>;

		/** The Creative size type. */
		creativeSizeType?: string | null;

		/** The native template for native ad. */
		nativeTemplate?: string | null;
		size?: TargetingValueSize;

		/** The skippable ad type for video size. */
		skippableAdType?: string | null;
	}

	/** Next Id: 7 */
	export interface TargetingValueCreativeSizeFormProperties {

		/** The Creative size type. */
		creativeSizeType: FormControl<string | null | undefined>,

		/** The native template for native ad. */
		nativeTemplate: FormControl<string | null | undefined>,

		/** The skippable ad type for video size. */
		skippableAdType: FormControl<string | null | undefined>,
	}
	export function CreateTargetingValueCreativeSizeFormGroup() {
		return new FormGroup<TargetingValueCreativeSizeFormProperties>({
			creativeSizeType: new FormControl<string | null | undefined>(undefined),
			nativeTemplate: new FormControl<string | null | undefined>(undefined),
			skippableAdType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TargetingValueSize {

		/**
		 * The height of the creative.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/**
		 * The width of the creative.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}
	export interface TargetingValueSizeFormProperties {

		/**
		 * The height of the creative.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * The width of the creative.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateTargetingValueSizeFormGroup() {
		return new FormGroup<TargetingValueSizeFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TargetingValueDayPartTargeting {
		dayParts?: Array<TargetingValueDayPartTargetingDayPart>;
		timeZoneType?: string | null;
	}
	export interface TargetingValueDayPartTargetingFormProperties {
		timeZoneType: FormControl<string | null | undefined>,
	}
	export function CreateTargetingValueDayPartTargetingFormGroup() {
		return new FormGroup<TargetingValueDayPartTargetingFormProperties>({
			timeZoneType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TargetingValueDayPartTargetingDayPart {
		dayOfWeek?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endHour?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endMinute?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startHour?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startMinute?: number | null;
	}
	export interface TargetingValueDayPartTargetingDayPartFormProperties {
		dayOfWeek: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endHour: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endMinute: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startHour: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startMinute: FormControl<number | null | undefined>,
	}
	export function CreateTargetingValueDayPartTargetingDayPartFormGroup() {
		return new FormGroup<TargetingValueDayPartTargetingDayPartFormProperties>({
			dayOfWeek: new FormControl<string | null | undefined>(undefined),
			endHour: new FormControl<number | null | undefined>(undefined),
			endMinute: new FormControl<number | null | undefined>(undefined),
			startHour: new FormControl<number | null | undefined>(undefined),
			startMinute: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TargetingValueDemogAgeCriteria {
		demogAgeCriteriaIds?: Array<string>;
	}
	export interface TargetingValueDemogAgeCriteriaFormProperties {
	}
	export function CreateTargetingValueDemogAgeCriteriaFormGroup() {
		return new FormGroup<TargetingValueDemogAgeCriteriaFormProperties>({
		});

	}

	export interface TargetingValueDemogGenderCriteria {
		demogGenderCriteriaIds?: Array<string>;
	}
	export interface TargetingValueDemogGenderCriteriaFormProperties {
	}
	export function CreateTargetingValueDemogGenderCriteriaFormGroup() {
		return new FormGroup<TargetingValueDemogGenderCriteriaFormProperties>({
		});

	}

	export interface TargetingValueRequestPlatformTargeting {
		requestPlatforms?: Array<string>;
	}
	export interface TargetingValueRequestPlatformTargetingFormProperties {
	}
	export function CreateTargetingValueRequestPlatformTargetingFormGroup() {
		return new FormGroup<TargetingValueRequestPlatformTargetingFormProperties>({
		});

	}

	export interface DealTerms {

		/** Visibility of the URL in bid requests. */
		brandingType?: string | null;

		/** Indicates that this ExternalDealId exists under at least two different AdxInventoryDeals. Currently, the only case that the same ExternalDealId will exist is programmatic cross sell case. */
		crossListedExternalDealIdType?: string | null;

		/** Description for the proposed terms of the deal. */
		description?: string | null;
		estimatedGrossSpend?: Price;

		/** Non-binding estimate of the impressions served per day Can be set by buyer or seller. */
		estimatedImpressionsPerDay?: string | null;
		guaranteedFixedPriceTerms?: DealTermsGuaranteedFixedPriceTerms;
		nonGuaranteedAuctionTerms?: DealTermsNonGuaranteedAuctionTerms;
		nonGuaranteedFixedPriceTerms?: DealTermsNonGuaranteedFixedPriceTerms;
		rubiconNonGuaranteedTerms?: DealTermsRubiconNonGuaranteedTerms;

		/** For deals with Cost Per Day billing, defines the timezone used to mark the boundaries of a day (buyer-readonly) */
		sellerTimeZone?: string | null;
	}
	export interface DealTermsFormProperties {

		/** Visibility of the URL in bid requests. */
		brandingType: FormControl<string | null | undefined>,

		/** Indicates that this ExternalDealId exists under at least two different AdxInventoryDeals. Currently, the only case that the same ExternalDealId will exist is programmatic cross sell case. */
		crossListedExternalDealIdType: FormControl<string | null | undefined>,

		/** Description for the proposed terms of the deal. */
		description: FormControl<string | null | undefined>,

		/** Non-binding estimate of the impressions served per day Can be set by buyer or seller. */
		estimatedImpressionsPerDay: FormControl<string | null | undefined>,

		/** For deals with Cost Per Day billing, defines the timezone used to mark the boundaries of a day (buyer-readonly) */
		sellerTimeZone: FormControl<string | null | undefined>,
	}
	export function CreateDealTermsFormGroup() {
		return new FormGroup<DealTermsFormProperties>({
			brandingType: new FormControl<string | null | undefined>(undefined),
			crossListedExternalDealIdType: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			estimatedImpressionsPerDay: new FormControl<string | null | undefined>(undefined),
			sellerTimeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Price {

		/**
		 * The price value in micros.
		 * Type: double
		 */
		amountMicros?: number | null;

		/** The currency code for the price. */
		currencyCode?: string | null;

		/**
		 * In case of CPD deals, the expected CPM in micros.
		 * Type: double
		 */
		expectedCpmMicros?: number | null;

		/** The pricing type for the deal/product. */
		pricingType?: string | null;
	}
	export interface PriceFormProperties {

		/**
		 * The price value in micros.
		 * Type: double
		 */
		amountMicros: FormControl<number | null | undefined>,

		/** The currency code for the price. */
		currencyCode: FormControl<string | null | undefined>,

		/**
		 * In case of CPD deals, the expected CPM in micros.
		 * Type: double
		 */
		expectedCpmMicros: FormControl<number | null | undefined>,

		/** The pricing type for the deal/product. */
		pricingType: FormControl<string | null | undefined>,
	}
	export function CreatePriceFormGroup() {
		return new FormGroup<PriceFormProperties>({
			amountMicros: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			expectedCpmMicros: new FormControl<number | null | undefined>(undefined),
			pricingType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DealTermsGuaranteedFixedPriceTerms {
		billingInfo?: DealTermsGuaranteedFixedPriceTermsBillingInfo;

		/** Fixed price for the specified buyer. */
		fixedPrices?: Array<PricePerBuyer>;

		/** Guaranteed impressions as a percentage. This is the percentage of guaranteed looks that the buyer is guaranteeing to buy. */
		guaranteedImpressions?: string | null;

		/** Count of guaranteed looks. Required for deal, optional for product. For CPD deals, buyer changes to guaranteed_looks will be ignored. */
		guaranteedLooks?: string | null;

		/** Count of minimum daily looks for a CPD deal. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks. */
		minimumDailyLooks?: string | null;
	}
	export interface DealTermsGuaranteedFixedPriceTermsFormProperties {

		/** Guaranteed impressions as a percentage. This is the percentage of guaranteed looks that the buyer is guaranteeing to buy. */
		guaranteedImpressions: FormControl<string | null | undefined>,

		/** Count of guaranteed looks. Required for deal, optional for product. For CPD deals, buyer changes to guaranteed_looks will be ignored. */
		guaranteedLooks: FormControl<string | null | undefined>,

		/** Count of minimum daily looks for a CPD deal. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks. */
		minimumDailyLooks: FormControl<string | null | undefined>,
	}
	export function CreateDealTermsGuaranteedFixedPriceTermsFormGroup() {
		return new FormGroup<DealTermsGuaranteedFixedPriceTermsFormProperties>({
			guaranteedImpressions: new FormControl<string | null | undefined>(undefined),
			guaranteedLooks: new FormControl<string | null | undefined>(undefined),
			minimumDailyLooks: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DealTermsGuaranteedFixedPriceTermsBillingInfo {

		/** The timestamp (in ms since epoch) when the original reservation price for the deal was first converted to DFP currency. This is used to convert the contracted price into buyer's currency without discrepancy. */
		currencyConversionTimeMs?: string | null;

		/** The DFP line item id associated with this deal. For features like CPD, buyers can retrieve the DFP line item for billing reconciliation. */
		dfpLineItemId?: string | null;

		/** The original contracted quantity (# impressions) for this deal. To ensure delivery, sometimes the publisher will book the deal with a impression buffer, such that guaranteed_looks is greater than the contracted quantity. However clients are billed using the original contracted quantity. */
		originalContractedQuantity?: string | null;
		price?: Price;
	}
	export interface DealTermsGuaranteedFixedPriceTermsBillingInfoFormProperties {

		/** The timestamp (in ms since epoch) when the original reservation price for the deal was first converted to DFP currency. This is used to convert the contracted price into buyer's currency without discrepancy. */
		currencyConversionTimeMs: FormControl<string | null | undefined>,

		/** The DFP line item id associated with this deal. For features like CPD, buyers can retrieve the DFP line item for billing reconciliation. */
		dfpLineItemId: FormControl<string | null | undefined>,

		/** The original contracted quantity (# impressions) for this deal. To ensure delivery, sometimes the publisher will book the deal with a impression buffer, such that guaranteed_looks is greater than the contracted quantity. However clients are billed using the original contracted quantity. */
		originalContractedQuantity: FormControl<string | null | undefined>,
	}
	export function CreateDealTermsGuaranteedFixedPriceTermsBillingInfoFormGroup() {
		return new FormGroup<DealTermsGuaranteedFixedPriceTermsBillingInfoFormProperties>({
			currencyConversionTimeMs: new FormControl<string | null | undefined>(undefined),
			dfpLineItemId: new FormControl<string | null | undefined>(undefined),
			originalContractedQuantity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to specify pricing rules for buyers. Each PricePerBuyer in a product can become [0,1] deals. To check if there is a PricePerBuyer for a particular buyer we look for the most specific matching rule - we first look for a rule matching the buyer and otherwise look for a matching rule where no buyer is set. */
	export interface PricePerBuyer {

		/** Optional access type for this buyer. */
		auctionTier?: string | null;
		billedBuyer?: Buyer;
		buyer?: Buyer;
		price?: Price;
	}

	/** Used to specify pricing rules for buyers. Each PricePerBuyer in a product can become [0,1] deals. To check if there is a PricePerBuyer for a particular buyer we look for the most specific matching rule - we first look for a rule matching the buyer and otherwise look for a matching rule where no buyer is set. */
	export interface PricePerBuyerFormProperties {

		/** Optional access type for this buyer. */
		auctionTier: FormControl<string | null | undefined>,
	}
	export function CreatePricePerBuyerFormGroup() {
		return new FormGroup<PricePerBuyerFormProperties>({
			auctionTier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Buyer {

		/** Adx account id of the buyer. */
		accountId?: string | null;
	}
	export interface BuyerFormProperties {

		/** Adx account id of the buyer. */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateBuyerFormGroup() {
		return new FormGroup<BuyerFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DealTermsNonGuaranteedAuctionTerms {

		/** True if open auction buyers are allowed to compete with invited buyers in this private auction (buyer-readonly). */
		autoOptimizePrivateAuction?: boolean | null;

		/** Reserve price for the specified buyer. */
		reservePricePerBuyers?: Array<PricePerBuyer>;
	}
	export interface DealTermsNonGuaranteedAuctionTermsFormProperties {

		/** True if open auction buyers are allowed to compete with invited buyers in this private auction (buyer-readonly). */
		autoOptimizePrivateAuction: FormControl<boolean | null | undefined>,
	}
	export function CreateDealTermsNonGuaranteedAuctionTermsFormGroup() {
		return new FormGroup<DealTermsNonGuaranteedAuctionTermsFormProperties>({
			autoOptimizePrivateAuction: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DealTermsNonGuaranteedFixedPriceTerms {

		/** Fixed price for the specified buyer. */
		fixedPrices?: Array<PricePerBuyer>;
	}
	export interface DealTermsNonGuaranteedFixedPriceTermsFormProperties {
	}
	export function CreateDealTermsNonGuaranteedFixedPriceTermsFormGroup() {
		return new FormGroup<DealTermsNonGuaranteedFixedPriceTermsFormProperties>({
		});

	}

	export interface DealTermsRubiconNonGuaranteedTerms {
		priorityPrice?: Price;
		standardPrice?: Price;
	}
	export interface DealTermsRubiconNonGuaranteedTermsFormProperties {
	}
	export function CreateDealTermsRubiconNonGuaranteedTermsFormGroup() {
		return new FormGroup<DealTermsRubiconNonGuaranteedTermsFormProperties>({
		});

	}

	export interface AddOrderDealsResponse {

		/** List of deals added (in the same proposal as passed in the request) */
		deals?: Array<MarketplaceDeal>;

		/** The updated revision number for the proposal. */
		proposalRevisionNumber?: string | null;
	}
	export interface AddOrderDealsResponseFormProperties {

		/** The updated revision number for the proposal. */
		proposalRevisionNumber: FormControl<string | null | undefined>,
	}
	export function CreateAddOrderDealsResponseFormGroup() {
		return new FormGroup<AddOrderDealsResponseFormProperties>({
			proposalRevisionNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddOrderNotesRequest {

		/** The list of notes to add. */
		notes?: Array<MarketplaceNote>;
	}
	export interface AddOrderNotesRequestFormProperties {
	}
	export function CreateAddOrderNotesRequestFormGroup() {
		return new FormGroup<AddOrderNotesRequestFormProperties>({
		});

	}


	/** A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number. */
	export interface MarketplaceNote {

		/** The role of the person (buyer/seller) creating the note. (readonly) */
		creatorRole?: string | null;

		/** Notes can optionally be associated with a deal. (readonly, except on create) */
		dealId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#marketplaceNote". */
		kind?: string | null;

		/** The actual note to attach. (readonly, except on create) */
		note?: string | null;

		/** The unique id for the note. (readonly) */
		noteId?: string | null;

		/** The proposalId that a note is attached to. (readonly) */
		proposalId?: string | null;

		/** If the note is associated with a proposal revision number, then store that here. (readonly, except on create) */
		proposalRevisionNumber?: string | null;

		/** The timestamp (ms since epoch) that this note was created. (readonly) */
		timestampMs?: string | null;
	}

	/** A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number. */
	export interface MarketplaceNoteFormProperties {

		/** The role of the person (buyer/seller) creating the note. (readonly) */
		creatorRole: FormControl<string | null | undefined>,

		/** Notes can optionally be associated with a deal. (readonly, except on create) */
		dealId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#marketplaceNote". */
		kind: FormControl<string | null | undefined>,

		/** The actual note to attach. (readonly, except on create) */
		note: FormControl<string | null | undefined>,

		/** The unique id for the note. (readonly) */
		noteId: FormControl<string | null | undefined>,

		/** The proposalId that a note is attached to. (readonly) */
		proposalId: FormControl<string | null | undefined>,

		/** If the note is associated with a proposal revision number, then store that here. (readonly, except on create) */
		proposalRevisionNumber: FormControl<string | null | undefined>,

		/** The timestamp (ms since epoch) that this note was created. (readonly) */
		timestampMs: FormControl<string | null | undefined>,
	}
	export function CreateMarketplaceNoteFormGroup() {
		return new FormGroup<MarketplaceNoteFormProperties>({
			creatorRole: new FormControl<string | null | undefined>(undefined),
			dealId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			noteId: new FormControl<string | null | undefined>(undefined),
			proposalId: new FormControl<string | null | undefined>(undefined),
			proposalRevisionNumber: new FormControl<string | null | undefined>(undefined),
			timestampMs: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddOrderNotesResponse {
		notes?: Array<MarketplaceNote>;
	}
	export interface AddOrderNotesResponseFormProperties {
	}
	export function CreateAddOrderNotesResponseFormGroup() {
		return new FormGroup<AddOrderNotesResponseFormProperties>({
		});

	}


	/** The configuration data for an Ad Exchange billing info. */
	export interface BillingInfo {

		/**
		 * Account id.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/**
		 * Account id.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

	export interface CreateOrdersRequest {

		/** The list of proposals to create. */
		proposals?: Array<Proposal>;

		/** Web property id of the seller creating these orders */
		webPropertyCode?: string | null;
	}
	export interface CreateOrdersRequestFormProperties {

		/** Web property id of the seller creating these orders */
		webPropertyCode: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrdersRequestFormGroup() {
		return new FormGroup<CreateOrdersRequestFormProperties>({
			webPropertyCode: new FormControl<string | null | undefined>(undefined),
		});

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
		hasBuyerSignedOff?: boolean | null;

		/** When an proposal is in an accepted state, indicates whether the buyer has signed off Once both sides have signed off on a deal, the proposal can be finalized by the seller. (buyer-readonly) */
		hasSellerSignedOff?: boolean | null;

		/** What exchange will provide this inventory (readonly, except on create). */
		inventorySource?: string | null;

		/** True if the proposal is being renegotiated (readonly). */
		isRenegotiating?: boolean | null;

		/** True, if the buyside inventory setup is complete for this proposal. (readonly, except via OrderSetupCompleted action) Deprecated in favor of deal level setup complete flag. */
		isSetupComplete?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#proposal". */
		kind?: string | null;

		/** List of labels associated with the proposal. (readonly) */
		labels?: Array<MarketplaceLabel>;

		/** The role of the last user that either updated the proposal or left a comment. (readonly) */
		lastUpdaterOrCommentorRole?: string | null;

		/** The name for the proposal (updatable) */
		name?: string | null;

		/** Optional negotiation id if this proposal is a preferred deal proposal. */
		negotiationId?: string | null;

		/** Indicates whether the buyer/seller created the proposal.(readonly) */
		originatorRole?: string | null;

		/** Optional private auction id if this proposal is a private auction proposal. */
		privateAuctionId?: string | null;

		/** The unique id of the proposal. (readonly). */
		proposalId?: string | null;

		/** The current state of the proposal. (readonly) */
		proposalState?: string | null;

		/** The revision number for the proposal (readonly). */
		revisionNumber?: string | null;

		/** The time (ms since epoch) when the proposal was last revised (readonly). */
		revisionTimeMs?: string | null;
		seller?: Seller;

		/** Optional contact information of the seller (buyer-readonly). */
		sellerContacts?: Array<ContactInformation>;
	}

	/**
	 * Represents a proposal in the marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Each field in a proposal can have one of the following setting:
	 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
	 */
	export interface ProposalFormProperties {

		/** When an proposal is in an accepted state, indicates whether the buyer has signed off. Once both sides have signed off on a deal, the proposal can be finalized by the seller. (seller-readonly) */
		hasBuyerSignedOff: FormControl<boolean | null | undefined>,

		/** When an proposal is in an accepted state, indicates whether the buyer has signed off Once both sides have signed off on a deal, the proposal can be finalized by the seller. (buyer-readonly) */
		hasSellerSignedOff: FormControl<boolean | null | undefined>,

		/** What exchange will provide this inventory (readonly, except on create). */
		inventorySource: FormControl<string | null | undefined>,

		/** True if the proposal is being renegotiated (readonly). */
		isRenegotiating: FormControl<boolean | null | undefined>,

		/** True, if the buyside inventory setup is complete for this proposal. (readonly, except via OrderSetupCompleted action) Deprecated in favor of deal level setup complete flag. */
		isSetupComplete: FormControl<boolean | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#proposal". */
		kind: FormControl<string | null | undefined>,

		/** The role of the last user that either updated the proposal or left a comment. (readonly) */
		lastUpdaterOrCommentorRole: FormControl<string | null | undefined>,

		/** The name for the proposal (updatable) */
		name: FormControl<string | null | undefined>,

		/** Optional negotiation id if this proposal is a preferred deal proposal. */
		negotiationId: FormControl<string | null | undefined>,

		/** Indicates whether the buyer/seller created the proposal.(readonly) */
		originatorRole: FormControl<string | null | undefined>,

		/** Optional private auction id if this proposal is a private auction proposal. */
		privateAuctionId: FormControl<string | null | undefined>,

		/** The unique id of the proposal. (readonly). */
		proposalId: FormControl<string | null | undefined>,

		/** The current state of the proposal. (readonly) */
		proposalState: FormControl<string | null | undefined>,

		/** The revision number for the proposal (readonly). */
		revisionNumber: FormControl<string | null | undefined>,

		/** The time (ms since epoch) when the proposal was last revised (readonly). */
		revisionTimeMs: FormControl<string | null | undefined>,
	}
	export function CreateProposalFormGroup() {
		return new FormGroup<ProposalFormProperties>({
			hasBuyerSignedOff: new FormControl<boolean | null | undefined>(undefined),
			hasSellerSignedOff: new FormControl<boolean | null | undefined>(undefined),
			inventorySource: new FormControl<string | null | undefined>(undefined),
			isRenegotiating: new FormControl<boolean | null | undefined>(undefined),
			isSetupComplete: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastUpdaterOrCommentorRole: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			negotiationId: new FormControl<string | null | undefined>(undefined),
			originatorRole: new FormControl<string | null | undefined>(undefined),
			privateAuctionId: new FormControl<string | null | undefined>(undefined),
			proposalId: new FormControl<string | null | undefined>(undefined),
			proposalState: new FormControl<string | null | undefined>(undefined),
			revisionNumber: new FormControl<string | null | undefined>(undefined),
			revisionTimeMs: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MarketplaceLabel {

		/** The accountId of the party that created the label. */
		accountId?: string | null;

		/** The creation time (in ms since epoch) for the label. */
		createTimeMs?: string | null;
		deprecatedMarketplaceDealParty?: MarketplaceDealParty;

		/** The label to use. */
		label?: string | null;
	}
	export interface MarketplaceLabelFormProperties {

		/** The accountId of the party that created the label. */
		accountId: FormControl<string | null | undefined>,

		/** The creation time (in ms since epoch) for the label. */
		createTimeMs: FormControl<string | null | undefined>,

		/** The label to use. */
		label: FormControl<string | null | undefined>,
	}
	export function CreateMarketplaceLabelFormGroup() {
		return new FormGroup<MarketplaceLabelFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			createTimeMs: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MarketplaceDealParty {
		buyer?: Buyer;
		seller?: Seller;
	}
	export interface MarketplaceDealPartyFormProperties {
	}
	export function CreateMarketplaceDealPartyFormGroup() {
		return new FormGroup<MarketplaceDealPartyFormProperties>({
		});

	}

	export interface Seller {

		/** The unique id for the seller. The seller fills in this field. The seller account id is then available to buyer in the product. */
		accountId?: string | null;

		/** Optional sub-account id for the seller. */
		subAccountId?: string | null;
	}
	export interface SellerFormProperties {

		/** The unique id for the seller. The seller fills in this field. The seller account id is then available to buyer in the product. */
		accountId: FormControl<string | null | undefined>,

		/** Optional sub-account id for the seller. */
		subAccountId: FormControl<string | null | undefined>,
	}
	export function CreateSellerFormGroup() {
		return new FormGroup<SellerFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			subAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateOrdersResponse {

		/** The list of proposals successfully created. */
		proposals?: Array<Proposal>;
	}
	export interface CreateOrdersResponseFormProperties {
	}
	export function CreateCreateOrdersResponseFormGroup() {
		return new FormGroup<CreateOrdersResponseFormProperties>({
		});

	}


	/** A creative and its classification data. */
	export interface Creative {

		/** The HTML snippet that displays the ad when inserted in the web page. If set, videoURL, videoVastXML, and nativeAd should not be set. */
		HTMLSnippet?: string | null;

		/**
		 * Account id.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accountId?: number | null;

		/** The link to the Ad Preferences page. This is only supported for native ads. */
		adChoicesDestinationUrl?: string | null;
		adTechnologyProviders?: CreativeAdTechnologyProviders;

		/** Detected advertiser id, if any. Read-only. This field should not be set in requests. */
		advertiserId?: Array<string>;

		/** The name of the company being advertised in the creative. A list of advertisers is provided in the advertisers.txt file. */
		advertiserName?: string | null;

		/** The agency id for this creative. */
		agencyId?: string | null;

		/** The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp). */
		apiUploadTimestamp?: Date | null;

		/** List of buyer selectable attributes for the ads that may be shown from this snippet. Each attribute is represented by an integer as defined in  buyer-declarable-creative-attributes.txt. */
		attribute?: Array<number>;

		/** A buyer-specific id identifying the creative in this ad. */
		buyerCreativeId?: string | null;

		/** The set of destination urls for the snippet. */
		clickThroughUrl?: Array<string>;

		/** Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests. */
		CreativeCorrections?: Array<CreativeCorrections>;

		/** Creative status identity type that the creative item applies to. Ad Exchange real-time bidding is migrating to the sizeless creative verification. Originally, Ad Exchange assigned creative verification status to a unique combination of a buyer creative ID and creative dimensions. Post-migration, a single verification status will be assigned at the buyer creative ID level. This field allows to distinguish whether a given creative status applies to a unique combination of a buyer creative ID and creative dimensions, or to a buyer creative ID as a whole. */
		creativeStatusIdentityType?: string | null;

		/** Top-level deals status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=DIRECT_DEALS (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from servingRestrictions directly. */
		dealsStatus?: string | null;

		/** Detected domains for this creative. Read-only. This field should not be set in requests. */
		detectedDomains?: Array<string>;

		/** The filtering reasons for the creative. Read-only. This field should not be set in requests. */
		filteringReasons?: CreativeFilteringReasons;

		/**
		 * Ad height.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** The set of urls to be called to record an impression. */
		impressionTrackingUrl?: Array<string>;

		/** Resource type. */
		kind?: string | null;

		/** Detected languages for this creative. Read-only. This field should not be set in requests. */
		languages?: Array<string>;

		/** If nativeAd is set, HTMLSnippet, videoVastXML, and the videoURL outside of nativeAd should not be set. (The videoURL inside nativeAd can be set.) */
		nativeAd?: CreativeNativeAd;

		/** Top-level open auction status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=OPEN_AUCTION (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from ServingRestrictions directly. */
		openAuctionStatus?: string | null;

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

		/**
		 * The version for this creative. Read-only. This field should not be set in requests.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;

		/** The URL to fetch a video ad. If set, HTMLSnippet, videoVastXML, and nativeAd should not be set. Note, this is different from resource.native_ad.video_url above. */
		videoURL?: string | null;

		/** The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard. If set, HTMLSnippet, videoURL, and nativeAd and should not be set. */
		videoVastXML?: string | null;

		/**
		 * Ad width.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** A creative and its classification data. */
	export interface CreativeFormProperties {

		/** The HTML snippet that displays the ad when inserted in the web page. If set, videoURL, videoVastXML, and nativeAd should not be set. */
		HTMLSnippet: FormControl<string | null | undefined>,

		/**
		 * Account id.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accountId: FormControl<number | null | undefined>,

		/** The link to the Ad Preferences page. This is only supported for native ads. */
		adChoicesDestinationUrl: FormControl<string | null | undefined>,

		/** The name of the company being advertised in the creative. A list of advertisers is provided in the advertisers.txt file. */
		advertiserName: FormControl<string | null | undefined>,

		/** The agency id for this creative. */
		agencyId: FormControl<string | null | undefined>,

		/** The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp). */
		apiUploadTimestamp: FormControl<Date | null | undefined>,

		/** A buyer-specific id identifying the creative in this ad. */
		buyerCreativeId: FormControl<string | null | undefined>,

		/** Creative status identity type that the creative item applies to. Ad Exchange real-time bidding is migrating to the sizeless creative verification. Originally, Ad Exchange assigned creative verification status to a unique combination of a buyer creative ID and creative dimensions. Post-migration, a single verification status will be assigned at the buyer creative ID level. This field allows to distinguish whether a given creative status applies to a unique combination of a buyer creative ID and creative dimensions, or to a buyer creative ID as a whole. */
		creativeStatusIdentityType: FormControl<string | null | undefined>,

		/** Top-level deals status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=DIRECT_DEALS (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from servingRestrictions directly. */
		dealsStatus: FormControl<string | null | undefined>,

		/**
		 * Ad height.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/** Top-level open auction status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=OPEN_AUCTION (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from ServingRestrictions directly. */
		openAuctionStatus: FormControl<string | null | undefined>,

		/**
		 * The version for this creative. Read-only. This field should not be set in requests.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,

		/** The URL to fetch a video ad. If set, HTMLSnippet, videoVastXML, and nativeAd should not be set. Note, this is different from resource.native_ad.video_url above. */
		videoURL: FormControl<string | null | undefined>,

		/** The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard. If set, HTMLSnippet, videoURL, and nativeAd and should not be set. */
		videoVastXML: FormControl<string | null | undefined>,

		/**
		 * Ad width.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateCreativeFormGroup() {
		return new FormGroup<CreativeFormProperties>({
			HTMLSnippet: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<number | null | undefined>(undefined),
			adChoicesDestinationUrl: new FormControl<string | null | undefined>(undefined),
			advertiserName: new FormControl<string | null | undefined>(undefined),
			agencyId: new FormControl<string | null | undefined>(undefined),
			apiUploadTimestamp: new FormControl<Date | null | undefined>(undefined),
			buyerCreativeId: new FormControl<string | null | undefined>(undefined),
			creativeStatusIdentityType: new FormControl<string | null | undefined>(undefined),
			dealsStatus: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			openAuctionStatus: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
			videoURL: new FormControl<string | null | undefined>(undefined),
			videoVastXML: new FormControl<string | null | undefined>(undefined),
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

		/** All known serving contexts containing serving status information. */
		CreativeCorrectionsContexts?: Array<CreativeCorrectionsContexts>;

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

	export interface CreativeCorrectionsContexts {

		/** Only set when contextType=AUCTION_TYPE. Represents the auction types this correction applies to. */
		auctionType?: Array<string>;

		/** The type of context (e.g., location, platform, auction type, SSL-ness). */
		contextType?: string | null;

		/** Only set when contextType=LOCATION. Represents the geo criterias this correction applies to. */
		geoCriteriaId?: Array<number>;

		/** Only set when contextType=PLATFORM. Represents the platforms this correction applies to. */
		platform?: Array<string>;
	}
	export interface CreativeCorrectionsContextsFormProperties {

		/** The type of context (e.g., location, platform, auction type, SSL-ness). */
		contextType: FormControl<string | null | undefined>,
	}
	export function CreateCreativeCorrectionsContextsFormGroup() {
		return new FormGroup<CreativeCorrectionsContextsFormProperties>({
			contextType: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * The filtering status code as defined in  creative-status-codes.txt.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		filteringStatus?: number | null;
	}
	export interface CreativeFilteringReasonsReasonsFormProperties {

		/** The number of times the creative was filtered for the status. The count is aggregated across all publishers on the exchange. */
		filteringCount: FormControl<string | null | undefined>,

		/**
		 * The filtering status code as defined in  creative-status-codes.txt.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/** The URL that the browser/SDK will load when the user clicks the ad. */
		clickLinkUrl?: string | null;

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

		/**
		 * The app rating in the app store. Must be in the range [0-5].
		 * Type: double
		 */
		starRating?: number | null;

		/** The URL of the XML VAST for a native ad. Note this is a separate field from resource.video_url. */
		videoURL?: string | null;
	}
	export interface CreativeNativeAdFormProperties {
		advertiser: FormControl<string | null | undefined>,

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

		/** The price of the promoted app including the currency info. */
		price: FormControl<string | null | undefined>,

		/**
		 * The app rating in the app store. Must be in the range [0-5].
		 * Type: double
		 */
		starRating: FormControl<number | null | undefined>,

		/** The URL of the XML VAST for a native ad. Note this is a separate field from resource.video_url. */
		videoURL: FormControl<string | null | undefined>,
	}
	export function CreateCreativeNativeAdFormGroup() {
		return new FormGroup<CreativeNativeAdFormProperties>({
			advertiser: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			callToAction: new FormControl<string | null | undefined>(undefined),
			clickLinkUrl: new FormControl<string | null | undefined>(undefined),
			clickTrackingUrl: new FormControl<string | null | undefined>(undefined),
			headline: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			starRating: new FormControl<number | null | undefined>(undefined),
			videoURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreativeNativeAdAppIcon {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height?: number | null;
		url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width?: number | null;
	}
	export interface CreativeNativeAdAppIconFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height?: number | null;
		url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width?: number | null;
	}
	export interface CreativeNativeAdImageFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height?: number | null;
		url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width?: number | null;
	}
	export interface CreativeNativeAdLogoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateCreativeNativeAdLogoFormGroup() {
		return new FormGroup<CreativeNativeAdLogoFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreativeServingRestrictions {

		/** All known contexts/restrictions. */
		CreativeServingRestrictionsContexts?: Array<CreativeServingRestrictionsContexts>;

		/** The reasons for disapproval within this restriction, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED or CONDITIONALLY_APPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue. */
		CreativeServingRestrictionsDisapprovalReasons?: Array<CreativeServingRestrictionsDisapprovalReasons>;

		/** Why the creative is ineligible to serve in this context (e.g., it has been explicitly disapproved or is pending review). */
		reason?: string | null;
	}
	export interface CreativeServingRestrictionsFormProperties {

		/** Why the creative is ineligible to serve in this context (e.g., it has been explicitly disapproved or is pending review). */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCreativeServingRestrictionsFormGroup() {
		return new FormGroup<CreativeServingRestrictionsFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreativeServingRestrictionsContexts {

		/** Only set when contextType=AUCTION_TYPE. Represents the auction types this restriction applies to. */
		auctionType?: Array<string>;

		/** The type of context (e.g., location, platform, auction type, SSL-ness). */
		contextType?: string | null;

		/** Only set when contextType=LOCATION. Represents the geo criterias this restriction applies to. Impressions are considered to match a context if either the user location or publisher location matches a given geoCriteriaId. */
		geoCriteriaId?: Array<number>;

		/** Only set when contextType=PLATFORM. Represents the platforms this restriction applies to. */
		platform?: Array<string>;
	}
	export interface CreativeServingRestrictionsContextsFormProperties {

		/** The type of context (e.g., location, platform, auction type, SSL-ness). */
		contextType: FormControl<string | null | undefined>,
	}
	export function CreateCreativeServingRestrictionsContextsFormGroup() {
		return new FormGroup<CreativeServingRestrictionsContextsFormProperties>({
			contextType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreativeServingRestrictionsDisapprovalReasons {

		/** Additional details about the reason for disapproval. */
		details?: Array<string>;

		/** The categorized reason for disapproval. */
		reason?: string | null;
	}
	export interface CreativeServingRestrictionsDisapprovalReasonsFormProperties {

		/** The categorized reason for disapproval. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCreativeServingRestrictionsDisapprovalReasonsFormGroup() {
		return new FormGroup<CreativeServingRestrictionsDisapprovalReasonsFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The external deal ids associated with a creative. */
	export interface CreativeDealIds {

		/** A list of external deal ids and ARC approval status. */
		CreativeDealIdsDealStatuses?: Array<CreativeDealIdsDealStatuses>;

		/** Resource type. */
		kind?: string | null;
	}

	/** The external deal ids associated with a creative. */
	export interface CreativeDealIdsFormProperties {

		/** Resource type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateCreativeDealIdsFormGroup() {
		return new FormGroup<CreativeDealIdsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreativeDealIdsDealStatuses {

		/** ARC approval status. */
		arcStatus?: string | null;

		/** External deal ID. */
		dealId?: string | null;

		/**
		 * Publisher ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		webPropertyId?: number | null;
	}
	export interface CreativeDealIdsDealStatusesFormProperties {

		/** ARC approval status. */
		arcStatus: FormControl<string | null | undefined>,

		/** External deal ID. */
		dealId: FormControl<string | null | undefined>,

		/**
		 * Publisher ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		webPropertyId: FormControl<number | null | undefined>,
	}
	export function CreateCreativeDealIdsDealStatusesFormGroup() {
		return new FormGroup<CreativeDealIdsDealStatusesFormProperties>({
			arcStatus: new FormControl<string | null | undefined>(undefined),
			dealId: new FormControl<string | null | undefined>(undefined),
			webPropertyId: new FormControl<number | null | undefined>(undefined),
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

	export interface DeleteOrderDealsRequest {

		/** List of deals to delete for a given proposal */
		dealIds?: Array<string>;

		/** The last known proposal revision number. */
		proposalRevisionNumber?: string | null;

		/** Indicates an optional action to take on the proposal */
		updateAction?: string | null;
	}
	export interface DeleteOrderDealsRequestFormProperties {

		/** The last known proposal revision number. */
		proposalRevisionNumber: FormControl<string | null | undefined>,

		/** Indicates an optional action to take on the proposal */
		updateAction: FormControl<string | null | undefined>,
	}
	export function CreateDeleteOrderDealsRequestFormGroup() {
		return new FormGroup<DeleteOrderDealsRequestFormProperties>({
			proposalRevisionNumber: new FormControl<string | null | undefined>(undefined),
			updateAction: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteOrderDealsResponse {

		/** List of deals deleted (in the same proposal as passed in the request) */
		deals?: Array<MarketplaceDeal>;

		/** The updated revision number for the proposal. */
		proposalRevisionNumber?: string | null;
	}
	export interface DeleteOrderDealsResponseFormProperties {

		/** The updated revision number for the proposal. */
		proposalRevisionNumber: FormControl<string | null | undefined>,
	}
	export function CreateDeleteOrderDealsResponseFormGroup() {
		return new FormGroup<DeleteOrderDealsResponseFormProperties>({
			proposalRevisionNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message carries publisher provided breakdown. E.g. {dimension_type: 'COUNTRY', [{dimension_value: {id: 1, name: 'US'}}, {dimension_value: {id: 2, name: 'UK'}}]} */
	export interface Dimension {
		dimensionType?: string | null;
		dimensionValues?: Array<DimensionDimensionValue>;
	}

	/** This message carries publisher provided breakdown. E.g. {dimension_type: 'COUNTRY', [{dimension_value: {id: 1, name: 'US'}}, {dimension_value: {id: 2, name: 'UK'}}]} */
	export interface DimensionFormProperties {
		dimensionType: FormControl<string | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			dimensionType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Value of the dimension. */
	export interface DimensionDimensionValue {

		/**
		 * Id of the dimension.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/** Name of the dimension mainly for debugging purposes, except for the case of CREATIVE_SIZE. For CREATIVE_SIZE, strings are used instead of ids. */
		name?: string | null;

		/**
		 * Percent of total impressions for a dimension type. e.g. {dimension_type: 'GENDER', [{dimension_value: {id: 1, name: 'MALE', percentage: 60}}]} Gender MALE is 60% of all impressions which have gender.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage?: number | null;
	}

	/** Value of the dimension. */
	export interface DimensionDimensionValueFormProperties {

		/**
		 * Id of the dimension.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Name of the dimension mainly for debugging purposes, except for the case of CREATIVE_SIZE. For CREATIVE_SIZE, strings are used instead of ids. */
		name: FormControl<string | null | undefined>,

		/**
		 * Percent of total impressions for a dimension type. e.g. {dimension_type: 'GENDER', [{dimension_value: {id: 1, name: 'MALE', percentage: 60}}]} Gender MALE is 60% of all impressions which have gender.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateDimensionDimensionValueFormGroup() {
		return new FormGroup<DimensionDimensionValueFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

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
		proposalRevisionNumber?: string | null;

		/** Indicates an optional action to take on the proposal */
		updateAction?: string | null;
	}
	export interface EditAllOrderDealsRequestFormProperties {

		/** The last known revision number for the proposal. */
		proposalRevisionNumber: FormControl<string | null | undefined>,

		/** Indicates an optional action to take on the proposal */
		updateAction: FormControl<string | null | undefined>,
	}
	export function CreateEditAllOrderDealsRequestFormGroup() {
		return new FormGroup<EditAllOrderDealsRequestFormProperties>({
			proposalRevisionNumber: new FormControl<string | null | undefined>(undefined),
			updateAction: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EditAllOrderDealsResponse {

		/** List of all deals in the proposal after edit. */
		deals?: Array<MarketplaceDeal>;

		/** The latest revision number after the update has been applied. */
		orderRevisionNumber?: string | null;
	}
	export interface EditAllOrderDealsResponseFormProperties {

		/** The latest revision number after the update has been applied. */
		orderRevisionNumber: FormControl<string | null | undefined>,
	}
	export function CreateEditAllOrderDealsResponseFormGroup() {
		return new FormGroup<EditAllOrderDealsResponseFormProperties>({
			orderRevisionNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOffersResponse {

		/** The returned list of products. */
		products?: Array<Product>;
	}
	export interface GetOffersResponseFormProperties {
	}
	export function CreateGetOffersResponseFormGroup() {
		return new FormGroup<GetOffersResponseFormProperties>({
		});

	}


	/**
	 * A product is segment of inventory that a seller wishes to sell. It is associated with certain terms and targeting information which helps buyer know more about the inventory. Each field in a product can have one of the following setting:
	 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
	 */
	export interface Product {
		billedBuyer?: Buyer;
		buyer?: Buyer;

		/** Creation time in ms. since epoch (readonly) */
		creationTimeMs?: string | null;

		/** Optional contact information for the creator of this product. (buyer-readonly) */
		creatorContacts?: Array<ContactInformation>;

		/** The role that created the offer. Set to BUYER for buyer initiated offers. */
		creatorRole?: string | null;
		deliveryControl?: DeliveryControl;

		/** The proposed end time for the deal (ms since epoch) (buyer-readonly) */
		flightEndTimeMs?: string | null;

		/** Inventory availability dates. (times are in ms since epoch) The granularity is generally in the order of seconds. (buyer-readonly) */
		flightStartTimeMs?: string | null;

		/** If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false. */
		hasCreatorSignedOff?: boolean | null;

		/** What exchange will provide this inventory (readonly, except on create). */
		inventorySource?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#product". */
		kind?: string | null;

		/** Optional List of labels for the product (optional, buyer-readonly). */
		labels?: Array<MarketplaceLabel>;

		/** Time of last update in ms. since epoch (readonly) */
		lastUpdateTimeMs?: string | null;

		/** Optional legacy offer id if this offer is a preferred deal offer. */
		legacyOfferId?: string | null;

		/** Marketplace publisher profile Id. This Id differs from the regular publisher_profile_id in that 1. This is a new id, the old Id will be deprecated in 2017. 2. This id uniquely identifies a publisher profile by itself. */
		marketplacePublisherProfileId?: string | null;

		/** The name for this product as set by the seller. (buyer-readonly) */
		name?: string | null;

		/** Optional private auction id if this offer is a private auction offer. */
		privateAuctionId?: string | null;

		/** The unique id for the product (readonly) */
		productId?: string | null;

		/** Id of the publisher profile for a given seller. A (seller.account_id, publisher_profile_id) pair uniquely identifies a publisher profile. Buyers can call the PublisherProfiles::List endpoint to get a list of publisher profiles for a given seller. */
		publisherProfileId?: string | null;

		/** This message carries publisher provided forecasting information. */
		publisherProvidedForecast?: PublisherProvidedForecast;

		/** The revision number of the product. (readonly) */
		revisionNumber?: string | null;
		seller?: Seller;

		/** Targeting that is shared between the buyer and the seller. Each targeting criteria has a specified key and for each key there is a list of inclusion value or exclusion values. (buyer-readonly) */
		sharedTargetings?: Array<SharedTargeting>;

		/** The state of the product. (buyer-readonly) */
		state?: string | null;

		/** The syndication product associated with the deal. (readonly, except on create) */
		syndicationProduct?: string | null;
		terms?: DealTerms;

		/** The web property code for the seller. This field is meant to be copied over as is when creating deals. */
		webPropertyCode?: string | null;
	}

	/**
	 * A product is segment of inventory that a seller wishes to sell. It is associated with certain terms and targeting information which helps buyer know more about the inventory. Each field in a product can have one of the following setting:
	 * (readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.
	 */
	export interface ProductFormProperties {

		/** Creation time in ms. since epoch (readonly) */
		creationTimeMs: FormControl<string | null | undefined>,

		/** The role that created the offer. Set to BUYER for buyer initiated offers. */
		creatorRole: FormControl<string | null | undefined>,

		/** The proposed end time for the deal (ms since epoch) (buyer-readonly) */
		flightEndTimeMs: FormControl<string | null | undefined>,

		/** Inventory availability dates. (times are in ms since epoch) The granularity is generally in the order of seconds. (buyer-readonly) */
		flightStartTimeMs: FormControl<string | null | undefined>,

		/** If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false. */
		hasCreatorSignedOff: FormControl<boolean | null | undefined>,

		/** What exchange will provide this inventory (readonly, except on create). */
		inventorySource: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#product". */
		kind: FormControl<string | null | undefined>,

		/** Time of last update in ms. since epoch (readonly) */
		lastUpdateTimeMs: FormControl<string | null | undefined>,

		/** Optional legacy offer id if this offer is a preferred deal offer. */
		legacyOfferId: FormControl<string | null | undefined>,

		/** Marketplace publisher profile Id. This Id differs from the regular publisher_profile_id in that 1. This is a new id, the old Id will be deprecated in 2017. 2. This id uniquely identifies a publisher profile by itself. */
		marketplacePublisherProfileId: FormControl<string | null | undefined>,

		/** The name for this product as set by the seller. (buyer-readonly) */
		name: FormControl<string | null | undefined>,

		/** Optional private auction id if this offer is a private auction offer. */
		privateAuctionId: FormControl<string | null | undefined>,

		/** The unique id for the product (readonly) */
		productId: FormControl<string | null | undefined>,

		/** Id of the publisher profile for a given seller. A (seller.account_id, publisher_profile_id) pair uniquely identifies a publisher profile. Buyers can call the PublisherProfiles::List endpoint to get a list of publisher profiles for a given seller. */
		publisherProfileId: FormControl<string | null | undefined>,

		/** The revision number of the product. (readonly) */
		revisionNumber: FormControl<string | null | undefined>,

		/** The state of the product. (buyer-readonly) */
		state: FormControl<string | null | undefined>,

		/** The syndication product associated with the deal. (readonly, except on create) */
		syndicationProduct: FormControl<string | null | undefined>,

		/** The web property code for the seller. This field is meant to be copied over as is when creating deals. */
		webPropertyCode: FormControl<string | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			creationTimeMs: new FormControl<string | null | undefined>(undefined),
			creatorRole: new FormControl<string | null | undefined>(undefined),
			flightEndTimeMs: new FormControl<string | null | undefined>(undefined),
			flightStartTimeMs: new FormControl<string | null | undefined>(undefined),
			hasCreatorSignedOff: new FormControl<boolean | null | undefined>(undefined),
			inventorySource: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastUpdateTimeMs: new FormControl<string | null | undefined>(undefined),
			legacyOfferId: new FormControl<string | null | undefined>(undefined),
			marketplacePublisherProfileId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			privateAuctionId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			publisherProfileId: new FormControl<string | null | undefined>(undefined),
			revisionNumber: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			syndicationProduct: new FormControl<string | null | undefined>(undefined),
			webPropertyCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message carries publisher provided forecasting information. */
	export interface PublisherProvidedForecast {

		/** Publisher provided dimensions. E.g. geo, sizes etc... */
		dimensions?: Array<Dimension>;

		/** Publisher provided weekly impressions. */
		weeklyImpressions?: string | null;

		/** Publisher provided weekly uniques. */
		weeklyUniques?: string | null;
	}

	/** This message carries publisher provided forecasting information. */
	export interface PublisherProvidedForecastFormProperties {

		/** Publisher provided weekly impressions. */
		weeklyImpressions: FormControl<string | null | undefined>,

		/** Publisher provided weekly uniques. */
		weeklyUniques: FormControl<string | null | undefined>,
	}
	export function CreatePublisherProvidedForecastFormGroup() {
		return new FormGroup<PublisherProvidedForecastFormProperties>({
			weeklyImpressions: new FormControl<string | null | undefined>(undefined),
			weeklyUniques: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOrderDealsResponse {

		/** List of deals for the proposal */
		deals?: Array<MarketplaceDeal>;
	}
	export interface GetOrderDealsResponseFormProperties {
	}
	export function CreateGetOrderDealsResponseFormGroup() {
		return new FormGroup<GetOrderDealsResponseFormProperties>({
		});

	}

	export interface GetOrderNotesResponse {

		/** The list of matching notes. The notes for a proposal are ordered from oldest to newest. If the notes span multiple proposals, they will be grouped by proposal, with the notes for the most recently modified proposal appearing first. */
		notes?: Array<MarketplaceNote>;
	}
	export interface GetOrderNotesResponseFormProperties {
	}
	export function CreateGetOrderNotesResponseFormGroup() {
		return new FormGroup<GetOrderNotesResponseFormProperties>({
		});

	}

	export interface GetOrdersResponse {

		/** The list of matching proposals. */
		proposals?: Array<Proposal>;
	}
	export interface GetOrdersResponseFormProperties {
	}
	export function CreateGetOrdersResponseFormGroup() {
		return new FormGroup<GetOrdersResponseFormProperties>({
		});

	}

	export interface GetPublisherProfilesByAccountIdResponse {

		/** Profiles for the requested publisher */
		profiles?: Array<PublisherProfileApiProto>;
	}
	export interface GetPublisherProfilesByAccountIdResponseFormProperties {
	}
	export function CreateGetPublisherProfilesByAccountIdResponseFormGroup() {
		return new FormGroup<GetPublisherProfilesByAccountIdResponseFormProperties>({
		});

	}

	export interface PublisherProfileApiProto {

		/** Publisher provided info on its audience. */
		audience?: string | null;

		/** A pitch statement for the buyer */
		buyerPitchStatement?: string | null;

		/** Direct contact for the publisher profile. */
		directContact?: string | null;

		/** Exchange where this publisher profile is from. E.g. AdX, Rubicon etc... */
		exchange?: string | null;
		forecastInventory?: string | null;

		/** Link to publisher's Google+ page. */
		googlePlusLink?: string | null;

		/** True, if this is the parent profile, which represents all domains owned by the publisher. */
		isParent?: boolean | null;

		/** True, if this profile is published. Deprecated for state. */
		isPublished?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#publisherProfileApiProto". */
		kind?: string | null;

		/** The url to the logo for the publisher. */
		logoUrl?: string | null;

		/** The url for additional marketing and sales materials. */
		mediaKitLink?: string | null;
		name?: string | null;

		/** Publisher provided overview. */
		overview?: string | null;

		/**
		 * The pair of (seller.account_id, profile_id) uniquely identifies a publisher profile for a given publisher.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		profileId?: number | null;

		/** Programmatic contact for the publisher profile. */
		programmaticContact?: string | null;

		/** The list of app IDs represented in this publisher profile. Empty if this is a parent profile. Deprecated in favor of publisher_app. */
		publisherAppIds?: Array<string>;

		/** The list of apps represented in this publisher profile. Empty if this is a parent profile. */
		publisherApps?: Array<MobileApplication>;

		/** The list of domains represented in this publisher profile. Empty if this is a parent profile. */
		publisherDomains?: Array<string>;

		/** Unique Id for publisher profile. */
		publisherProfileId?: string | null;

		/** This message carries publisher provided forecasting information. */
		publisherProvidedForecast?: PublisherProvidedForecast;

		/** Link to publisher rate card */
		rateCardInfoLink?: string | null;

		/** Link for a sample content page. */
		samplePageLink?: string | null;
		seller?: Seller;

		/** State of the publisher profile. */
		state?: string | null;

		/** Publisher provided key metrics and rankings. */
		topHeadlines?: Array<string>;
	}
	export interface PublisherProfileApiProtoFormProperties {

		/** Publisher provided info on its audience. */
		audience: FormControl<string | null | undefined>,

		/** A pitch statement for the buyer */
		buyerPitchStatement: FormControl<string | null | undefined>,

		/** Direct contact for the publisher profile. */
		directContact: FormControl<string | null | undefined>,

		/** Exchange where this publisher profile is from. E.g. AdX, Rubicon etc... */
		exchange: FormControl<string | null | undefined>,
		forecastInventory: FormControl<string | null | undefined>,

		/** Link to publisher's Google+ page. */
		googlePlusLink: FormControl<string | null | undefined>,

		/** True, if this is the parent profile, which represents all domains owned by the publisher. */
		isParent: FormControl<boolean | null | undefined>,

		/** True, if this profile is published. Deprecated for state. */
		isPublished: FormControl<boolean | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#publisherProfileApiProto". */
		kind: FormControl<string | null | undefined>,

		/** The url to the logo for the publisher. */
		logoUrl: FormControl<string | null | undefined>,

		/** The url for additional marketing and sales materials. */
		mediaKitLink: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Publisher provided overview. */
		overview: FormControl<string | null | undefined>,

		/**
		 * The pair of (seller.account_id, profile_id) uniquely identifies a publisher profile for a given publisher.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		profileId: FormControl<number | null | undefined>,

		/** Programmatic contact for the publisher profile. */
		programmaticContact: FormControl<string | null | undefined>,

		/** Unique Id for publisher profile. */
		publisherProfileId: FormControl<string | null | undefined>,

		/** Link to publisher rate card */
		rateCardInfoLink: FormControl<string | null | undefined>,

		/** Link for a sample content page. */
		samplePageLink: FormControl<string | null | undefined>,

		/** State of the publisher profile. */
		state: FormControl<string | null | undefined>,
	}
	export function CreatePublisherProfileApiProtoFormGroup() {
		return new FormGroup<PublisherProfileApiProtoFormProperties>({
			audience: new FormControl<string | null | undefined>(undefined),
			buyerPitchStatement: new FormControl<string | null | undefined>(undefined),
			directContact: new FormControl<string | null | undefined>(undefined),
			exchange: new FormControl<string | null | undefined>(undefined),
			forecastInventory: new FormControl<string | null | undefined>(undefined),
			googlePlusLink: new FormControl<string | null | undefined>(undefined),
			isParent: new FormControl<boolean | null | undefined>(undefined),
			isPublished: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			logoUrl: new FormControl<string | null | undefined>(undefined),
			mediaKitLink: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			overview: new FormControl<string | null | undefined>(undefined),
			profileId: new FormControl<number | null | undefined>(undefined),
			programmaticContact: new FormControl<string | null | undefined>(undefined),
			publisherProfileId: new FormControl<string | null | undefined>(undefined),
			rateCardInfoLink: new FormControl<string | null | undefined>(undefined),
			samplePageLink: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MobileApplication {
		appStore?: string | null;
		externalAppId?: string | null;
	}
	export interface MobileApplicationFormProperties {
		appStore: FormControl<string | null | undefined>,
		externalAppId: FormControl<string | null | undefined>,
	}
	export function CreateMobileApplicationFormGroup() {
		return new FormGroup<MobileApplicationFormProperties>({
			appStore: new FormControl<string | null | undefined>(undefined),
			externalAppId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration data for an Ad Exchange performance report list. */
	export interface PerformanceReport {

		/**
		 * The number of bid responses with an ad.
		 * Type: double
		 */
		bidRate?: number | null;

		/**
		 * The number of bid requests sent to your bidder.
		 * Type: double
		 */
		bidRequestRate?: number | null;

		/** Rate of various prefiltering statuses per match. Please refer to the callout-status-codes.txt file for different statuses. */
		calloutStatusRate?: Array<string>;

		/** Average QPS for cookie matcher operations. */
		cookieMatcherStatusRate?: Array<string>;

		/** Rate of ads with a given status. Please refer to the creative-status-codes.txt file for different statuses. */
		creativeStatusRate?: Array<string>;

		/**
		 * The number of bid responses that were filtered due to a policy violation or other errors.
		 * Type: double
		 */
		filteredBidRate?: number | null;

		/** Average QPS for hosted match operations. */
		hostedMatchStatusRate?: Array<string>;

		/**
		 * The number of potential queries based on your pretargeting settings.
		 * Type: double
		 */
		inventoryMatchRate?: number | null;

		/** Resource type. */
		kind?: string | null;

		/**
		 * The 50th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
		 * Type: double
		 */
		latency50thPercentile?: number | null;

		/**
		 * The 85th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
		 * Type: double
		 */
		latency85thPercentile?: number | null;

		/**
		 * The 95th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
		 * Type: double
		 */
		latency95thPercentile?: number | null;

		/**
		 * Rate of various quota account statuses per quota check.
		 * Type: double
		 */
		noQuotaInRegion?: number | null;

		/**
		 * Rate of various quota account statuses per quota check.
		 * Type: double
		 */
		outOfQuota?: number | null;

		/**
		 * Average QPS for pixel match requests from clients.
		 * Type: double
		 */
		pixelMatchRequests?: number | null;

		/**
		 * Average QPS for pixel match responses from clients.
		 * Type: double
		 */
		pixelMatchResponses?: number | null;

		/**
		 * The configured quota limits for this account.
		 * Type: double
		 */
		quotaConfiguredLimit?: number | null;

		/**
		 * The throttled quota limits for this account.
		 * Type: double
		 */
		quotaThrottledLimit?: number | null;

		/** The trading location of this data. */
		region?: string | null;

		/**
		 * The number of properly formed bid responses received by our servers within the deadline.
		 * Type: double
		 */
		successfulRequestRate?: number | null;

		/** The unix timestamp of the starting time of this performance data. */
		timestamp?: string | null;

		/**
		 * The number of bid responses that were unsuccessful due to timeouts, incorrect formatting, etc.
		 * Type: double
		 */
		unsuccessfulRequestRate?: number | null;
	}

	/** The configuration data for an Ad Exchange performance report list. */
	export interface PerformanceReportFormProperties {

		/**
		 * The number of bid responses with an ad.
		 * Type: double
		 */
		bidRate: FormControl<number | null | undefined>,

		/**
		 * The number of bid requests sent to your bidder.
		 * Type: double
		 */
		bidRequestRate: FormControl<number | null | undefined>,

		/**
		 * The number of bid responses that were filtered due to a policy violation or other errors.
		 * Type: double
		 */
		filteredBidRate: FormControl<number | null | undefined>,

		/**
		 * The number of potential queries based on your pretargeting settings.
		 * Type: double
		 */
		inventoryMatchRate: FormControl<number | null | undefined>,

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The 50th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
		 * Type: double
		 */
		latency50thPercentile: FormControl<number | null | undefined>,

		/**
		 * The 85th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
		 * Type: double
		 */
		latency85thPercentile: FormControl<number | null | undefined>,

		/**
		 * The 95th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
		 * Type: double
		 */
		latency95thPercentile: FormControl<number | null | undefined>,

		/**
		 * Rate of various quota account statuses per quota check.
		 * Type: double
		 */
		noQuotaInRegion: FormControl<number | null | undefined>,

		/**
		 * Rate of various quota account statuses per quota check.
		 * Type: double
		 */
		outOfQuota: FormControl<number | null | undefined>,

		/**
		 * Average QPS for pixel match requests from clients.
		 * Type: double
		 */
		pixelMatchRequests: FormControl<number | null | undefined>,

		/**
		 * Average QPS for pixel match responses from clients.
		 * Type: double
		 */
		pixelMatchResponses: FormControl<number | null | undefined>,

		/**
		 * The configured quota limits for this account.
		 * Type: double
		 */
		quotaConfiguredLimit: FormControl<number | null | undefined>,

		/**
		 * The throttled quota limits for this account.
		 * Type: double
		 */
		quotaThrottledLimit: FormControl<number | null | undefined>,

		/** The trading location of this data. */
		region: FormControl<string | null | undefined>,

		/**
		 * The number of properly formed bid responses received by our servers within the deadline.
		 * Type: double
		 */
		successfulRequestRate: FormControl<number | null | undefined>,

		/** The unix timestamp of the starting time of this performance data. */
		timestamp: FormControl<string | null | undefined>,

		/**
		 * The number of bid responses that were unsuccessful due to timeouts, incorrect formatting, etc.
		 * Type: double
		 */
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

		/**
		 * Requests where the predicted viewability is below the specified decile will not match. E.g. if the buyer sets this value to 5, requests from slots where the predicted viewability is below 50% will not match. If the predicted viewability is unknown this field will be ignored.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumViewabilityDecile?: number | null;

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

		/**
		 * Requests where the predicted viewability is below the specified decile will not match. E.g. if the buyer sets this value to 5, requests from slots where the predicted viewability is below 50% will not match. If the predicted viewability is unknown this field will be ignored.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumViewabilityDecile: FormControl<number | null | undefined>,
	}
	export function CreatePretargetingConfigFormGroup() {
		return new FormGroup<PretargetingConfigFormProperties>({
			billingId: new FormControl<string | null | undefined>(undefined),
			configId: new FormControl<string | null | undefined>(undefined),
			configName: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			maximumQps: new FormControl<string | null | undefined>(undefined),
			minimumViewabilityDecile: new FormControl<number | null | undefined>(undefined),
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

	export interface PretargetingConfigVideoPlayerSizes {

		/** The type of aspect ratio. Leave this field blank to match all aspect ratios. */
		aspectRatio?: string | null;

		/** The minimum player height in pixels. Leave this field blank to match any player height. */
		minHeight?: string | null;

		/** The minimum player width in pixels. Leave this field blank to match any player width. */
		minWidth?: string | null;
	}
	export interface PretargetingConfigVideoPlayerSizesFormProperties {

		/** The type of aspect ratio. Leave this field blank to match all aspect ratios. */
		aspectRatio: FormControl<string | null | undefined>,

		/** The minimum player height in pixels. Leave this field blank to match any player height. */
		minHeight: FormControl<string | null | undefined>,

		/** The minimum player width in pixels. Leave this field blank to match any player width. */
		minWidth: FormControl<string | null | undefined>,
	}
	export function CreatePretargetingConfigVideoPlayerSizesFormGroup() {
		return new FormGroup<PretargetingConfigVideoPlayerSizesFormProperties>({
			aspectRatio: new FormControl<string | null | undefined>(undefined),
			minHeight: new FormControl<string | null | undefined>(undefined),
			minWidth: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdatePrivateAuctionProposalRequest {

		/** The externalDealId of the deal to be updated. */
		externalDealId?: string | null;

		/** A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number. */
		note?: MarketplaceNote;

		/** The current revision number of the proposal to be updated. */
		proposalRevisionNumber?: string | null;

		/** The proposed action on the private auction proposal. */
		updateAction?: string | null;
	}
	export interface UpdatePrivateAuctionProposalRequestFormProperties {

		/** The externalDealId of the deal to be updated. */
		externalDealId: FormControl<string | null | undefined>,

		/** The current revision number of the proposal to be updated. */
		proposalRevisionNumber: FormControl<string | null | undefined>,

		/** The proposed action on the private auction proposal. */
		updateAction: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePrivateAuctionProposalRequestFormGroup() {
		return new FormGroup<UpdatePrivateAuctionProposalRequestFormProperties>({
			externalDealId: new FormControl<string | null | undefined>(undefined),
			proposalRevisionNumber: new FormControl<string | null | undefined>(undefined),
			updateAction: new FormControl<string | null | undefined>(undefined),
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
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Account} Successful response
		 */
		Adexchangebuyer_accounts_get(id: number): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'accounts/' + id, {});
		}

		/**
		 * Updates an existing account. This method supports patch semantics.
		 * Patch accounts/{id}
		 * @param {number} id The account id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} confirmUnsafeAccountChange Confirmation for erasing bidder and cookie matching urls.
		 * @return {Account} Successful response
		 */
		Adexchangebuyer_accounts_patch(id: number, confirmUnsafeAccountChange: boolean | null | undefined, requestBody: Account): Observable<Account> {
			return this.http.patch<Account>(this.baseUri + 'accounts/' + id + '?confirmUnsafeAccountChange=' + confirmUnsafeAccountChange, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing account.
		 * Put accounts/{id}
		 * @param {number} id The account id
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} confirmUnsafeAccountChange Confirmation for erasing bidder and cookie matching urls.
		 * @return {Account} Successful response
		 */
		Adexchangebuyer_accounts_update(id: number, confirmUnsafeAccountChange: boolean | null | undefined, requestBody: Account): Observable<Account> {
			return this.http.put<Account>(this.baseUri + 'accounts/' + id + '?confirmUnsafeAccountChange=' + confirmUnsafeAccountChange, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 *     Type: int, -2,147,483,648 to 2,147,483,647
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
		 * @param {Adexchangebuyer_creatives_listDealsStatusFilter} dealsStatusFilter When specified, only creatives having the given deals status are returned.
		 * @param {number} maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
		 *     Minimum: 1    Maximum: 1000
		 * @param {Adexchangebuyer_creatives_listDealsStatusFilter} openAuctionStatusFilter When specified, only creatives having the given open auction status are returned.
		 * @param {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
		 * @return {CreativesList} Successful response
		 */
		Adexchangebuyer_creatives_list(accountId: Array<number> | null | undefined, buyerCreativeId: Array<string> | null | undefined, dealsStatusFilter: Adexchangebuyer_creatives_listDealsStatusFilter | null | undefined, maxResults: number | null | undefined, openAuctionStatusFilter: Adexchangebuyer_creatives_listDealsStatusFilter | null | undefined, pageToken: string | null | undefined): Observable<CreativesList> {
			return this.http.get<CreativesList>(this.baseUri + 'creatives?' + accountId?.map(z => `accountId=${z}`).join('&') + '&' + buyerCreativeId?.map(z => `buyerCreativeId=${encodeURIComponent(z)}`).join('&') + '&dealsStatusFilter=' + dealsStatusFilter + '&maxResults=' + maxResults + '&openAuctionStatusFilter=' + openAuctionStatusFilter + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
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
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} buyerCreativeId The buyer-specific id for this creative.
		 * @return {Creative} Successful response
		 */
		Adexchangebuyer_creatives_get(accountId: number, buyerCreativeId: string): Observable<Creative> {
			return this.http.get<Creative>(this.baseUri + 'creatives/' + accountId + '/' + (buyerCreativeId == null ? '' : encodeURIComponent(buyerCreativeId)), {});
		}

		/**
		 * Add a deal id association for the creative.
		 * Post creatives/{accountId}/{buyerCreativeId}/addDeal/{dealId}
		 * @param {number} accountId The id for the account that will serve this creative.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
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
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} buyerCreativeId The buyer-specific id for this creative.
		 * @return {CreativeDealIds} Successful response
		 */
		Adexchangebuyer_creatives_listDeals(accountId: number, buyerCreativeId: string): Observable<CreativeDealIds> {
			return this.http.get<CreativeDealIds>(this.baseUri + 'creatives/' + accountId + '/' + (buyerCreativeId == null ? '' : encodeURIComponent(buyerCreativeId)) + '/listDeals', {});
		}

		/**
		 * Remove a deal id associated with the creative.
		 * Post creatives/{accountId}/{buyerCreativeId}/removeDeal/{dealId}
		 * @param {number} accountId The id for the account that will serve this creative.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
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
		 *     Minimum: 1    Maximum: 1000
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

		/**
		 * Update a given private auction proposal
		 * Post privateauction/{privateAuctionId}/updateproposal
		 * @param {string} privateAuctionId The private auction id to be updated.
		 * @return {void} Successful response
		 */
		Adexchangebuyer_marketplaceprivateauction_updateproposal(privateAuctionId: string, requestBody: UpdatePrivateAuctionProposalRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'privateauction/' + (privateAuctionId == null ? '' : encodeURIComponent(privateAuctionId)) + '/updateproposal', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the requested product.
		 * Get products/search
		 * @param {string} pqlQuery The pql query used to query for products.
		 * @return {GetOffersResponse} Successful response
		 */
		Adexchangebuyer_products_search(pqlQuery: string | null | undefined): Observable<GetOffersResponse> {
			return this.http.get<GetOffersResponse>(this.baseUri + 'products/search?pqlQuery=' + (pqlQuery == null ? '' : encodeURIComponent(pqlQuery)), {});
		}

		/**
		 * Gets the requested product by id.
		 * Get products/{productId}
		 * @param {string} productId The id for the product to get the head revision for.
		 * @return {Product} Successful response
		 */
		Adexchangebuyer_products_get(productId: string): Observable<Product> {
			return this.http.get<Product>(this.baseUri + 'products/' + (productId == null ? '' : encodeURIComponent(productId)), {});
		}

		/**
		 * Create the given list of proposals
		 * Post proposals/insert
		 * @return {CreateOrdersResponse} Successful response
		 */
		Adexchangebuyer_proposals_insert(requestBody: CreateOrdersRequest): Observable<CreateOrdersResponse> {
			return this.http.post<CreateOrdersResponse>(this.baseUri + 'proposals/insert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search for proposals using pql query
		 * Get proposals/search
		 * @param {string} pqlQuery Query string to retrieve specific proposals.
		 * @return {GetOrdersResponse} Successful response
		 */
		Adexchangebuyer_proposals_search(pqlQuery: string | null | undefined): Observable<GetOrdersResponse> {
			return this.http.get<GetOrdersResponse>(this.baseUri + 'proposals/search?pqlQuery=' + (pqlQuery == null ? '' : encodeURIComponent(pqlQuery)), {});
		}

		/**
		 * Get a proposal given its id
		 * Get proposals/{proposalId}
		 * @param {string} proposalId Id of the proposal to retrieve.
		 * @return {Proposal} Successful response
		 */
		Adexchangebuyer_proposals_get(proposalId: string): Observable<Proposal> {
			return this.http.get<Proposal>(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)), {});
		}

		/**
		 * List all the deals for a given proposal
		 * Get proposals/{proposalId}/deals
		 * @param {string} proposalId The proposalId to get deals for. To search across all proposals specify order_id = '-' as part of the URL.
		 * @param {string} pqlQuery Query string to retrieve specific deals.
		 * @return {GetOrderDealsResponse} Successful response
		 */
		Adexchangebuyer_marketplacedeals_list(proposalId: string, pqlQuery: string | null | undefined): Observable<GetOrderDealsResponse> {
			return this.http.get<GetOrderDealsResponse>(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/deals&pqlQuery=' + (pqlQuery == null ? '' : encodeURIComponent(pqlQuery)), {});
		}

		/**
		 * Delete the specified deals from the proposal
		 * Post proposals/{proposalId}/deals/delete
		 * @param {string} proposalId The proposalId to delete deals from.
		 * @return {DeleteOrderDealsResponse} Successful response
		 */
		Adexchangebuyer_marketplacedeals_delete(proposalId: string, requestBody: DeleteOrderDealsRequest): Observable<DeleteOrderDealsResponse> {
			return this.http.post<DeleteOrderDealsResponse>(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/deals/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add new deals for the specified proposal
		 * Post proposals/{proposalId}/deals/insert
		 * @param {string} proposalId proposalId for which deals need to be added.
		 * @return {AddOrderDealsResponse} Successful response
		 */
		Adexchangebuyer_marketplacedeals_insert(proposalId: string, requestBody: AddOrderDealsRequest): Observable<AddOrderDealsResponse> {
			return this.http.post<AddOrderDealsResponse>(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/deals/insert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replaces all the deals in the proposal with the passed in deals
		 * Post proposals/{proposalId}/deals/update
		 * @param {string} proposalId The proposalId to edit deals on.
		 * @return {EditAllOrderDealsResponse} Successful response
		 */
		Adexchangebuyer_marketplacedeals_update(proposalId: string, requestBody: EditAllOrderDealsRequest): Observable<EditAllOrderDealsResponse> {
			return this.http.post<EditAllOrderDealsResponse>(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/deals/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the notes associated with a proposal
		 * Get proposals/{proposalId}/notes
		 * @param {string} proposalId The proposalId to get notes for. To search across all proposals specify order_id = '-' as part of the URL.
		 * @param {string} pqlQuery Query string to retrieve specific notes. To search the text contents of notes, please use syntax like "WHERE note.note = "foo" or "WHERE note.note LIKE "%bar%"
		 * @return {GetOrderNotesResponse} Successful response
		 */
		Adexchangebuyer_marketplacenotes_list(proposalId: string, pqlQuery: string | null | undefined): Observable<GetOrderNotesResponse> {
			return this.http.get<GetOrderNotesResponse>(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/notes&pqlQuery=' + (pqlQuery == null ? '' : encodeURIComponent(pqlQuery)), {});
		}

		/**
		 * Add notes to the proposal
		 * Post proposals/{proposalId}/notes/insert
		 * @param {string} proposalId The proposalId to add notes for.
		 * @return {AddOrderNotesResponse} Successful response
		 */
		Adexchangebuyer_marketplacenotes_insert(proposalId: string, requestBody: AddOrderNotesRequest): Observable<AddOrderNotesResponse> {
			return this.http.post<AddOrderNotesResponse>(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/notes/insert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @return {Proposal} Successful response
		 */
		Adexchangebuyer_proposals_patch(proposalId: string, revisionNumber: string, updateAction: Adexchangebuyer_proposals_patchUpdateAction, requestBody: Proposal): Observable<Proposal> {
			return this.http.patch<Proposal>(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/' + (revisionNumber == null ? '' : encodeURIComponent(revisionNumber)) + '/' + updateAction, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update the given proposal
		 * Put proposals/{proposalId}/{revisionNumber}/{updateAction}
		 * @param {string} proposalId The proposal id to update.
		 * @param {string} revisionNumber The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.
		 * @param {Adexchangebuyer_proposals_patchUpdateAction} updateAction The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
		 * @return {Proposal} Successful response
		 */
		Adexchangebuyer_proposals_update(proposalId: string, revisionNumber: string, updateAction: Adexchangebuyer_proposals_patchUpdateAction, requestBody: Proposal): Observable<Proposal> {
			return this.http.put<Proposal>(this.baseUri + 'proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + '/' + (revisionNumber == null ? '' : encodeURIComponent(revisionNumber)) + '/' + updateAction, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the requested publisher profile(s) by publisher accountId.
		 * Get publisher/{accountId}/profiles
		 * @param {number} accountId The accountId of the publisher to get profiles for.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GetPublisherProfilesByAccountIdResponse} Successful response
		 */
		Adexchangebuyer_pubprofiles_list(accountId: number): Observable<GetPublisherProfilesByAccountIdResponse> {
			return this.http.get<GetPublisherProfilesByAccountIdResponse>(this.baseUri + 'publisher/' + accountId + '/profiles', {});
		}
	}

	export enum Adexchangebuyer_creatives_listDealsStatusFilter { approved = 'approved', conditionally_approved = 'conditionally_approved', disapproved = 'disapproved', not_checked = 'not_checked' }

	export enum Adexchangebuyer_proposals_patchUpdateAction { accept = 'accept', cancel = 'cancel', propose = 'propose', proposeAndAccept = 'proposeAndAccept', unknownAction = 'unknownAction', updateNonTerms = 'updateNonTerms' }

}

