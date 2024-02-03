import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request to accept a proposal. Accepting a proposal implies acceptance of the publisher terms_and_conditions, if any. */
	export interface AcceptProposalRequest {

		/** The last known client revision number of the proposal. */
		proposalRevision?: string | null;
	}

	/** Request to accept a proposal. Accepting a proposal implies acceptance of the publisher terms_and_conditions, if any. */
	export interface AcceptProposalRequestFormProperties {

		/** The last known client revision number of the proposal. */
		proposalRevision: FormControl<string | null | undefined>,
	}
	export function CreateAcceptProposalRequestFormGroup() {
		return new FormGroup<AcceptProposalRequestFormProperties>({
			proposalRevision: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for activating a client. */
	export interface ActivateClientRequest {
	}

	/** Request message for activating a client. */
	export interface ActivateClientRequestFormProperties {
	}
	export function CreateActivateClientRequestFormGroup() {
		return new FormGroup<ActivateClientRequestFormProperties>({
		});

	}


	/** Request message for activating a client user. */
	export interface ActivateClientUserRequest {
	}

	/** Request message for activating a client user. */
	export interface ActivateClientUserRequestFormProperties {
	}
	export function CreateActivateClientUserRequestFormGroup() {
		return new FormGroup<ActivateClientUserRequestFormProperties>({
		});

	}


	/** Represents size of a single ad slot, or a creative. */
	export interface AdSize {

		/** The height of the ad slot in pixels. This field will be present only when size type is `PIXEL`. */
		height?: string | null;

		/** The type of the ad slot size. */
		type?: AdSizeType | null;

		/** The width of the ad slot in pixels. This field will be present only when size type is `PIXEL`. */
		width?: string | null;
	}

	/** Represents size of a single ad slot, or a creative. */
	export interface AdSizeFormProperties {

		/** The height of the ad slot in pixels. This field will be present only when size type is `PIXEL`. */
		height: FormControl<string | null | undefined>,

		/** The type of the ad slot size. */
		type: FormControl<AdSizeType | null | undefined>,

		/** The width of the ad slot in pixels. This field will be present only when size type is `PIXEL`. */
		width: FormControl<string | null | undefined>,
	}
	export function CreateAdSizeFormGroup() {
		return new FormGroup<AdSizeFormProperties>({
			height: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AdSizeType | null | undefined>(undefined),
			width: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AdSizeType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', PIXEL = 'PIXEL', INTERSTITIAL = 'INTERSTITIAL', NATIVE = 'NATIVE', FLUID = 'FLUID' }


	/** Request message for adding creative to be used in the bidding process for the finalized deal. */
	export interface AddCreativeRequest {

		/** Name of the creative to add to the finalized deal, in the format `buyers/{buyerAccountId}/creatives/{creativeId}`. See creative.name. */
		creative?: string | null;
	}

	/** Request message for adding creative to be used in the bidding process for the finalized deal. */
	export interface AddCreativeRequestFormProperties {

		/** Name of the creative to add to the finalized deal, in the format `buyers/{buyerAccountId}/creatives/{creativeId}`. See creative.name. */
		creative: FormControl<string | null | undefined>,
	}
	export function CreateAddCreativeRequestFormGroup() {
		return new FormGroup<AddCreativeRequestFormProperties>({
			creative: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to add a note. */
	export interface AddNoteRequest {

		/** A text note attached to the proposal to facilitate the communication between buyers and sellers. */
		note?: Note;
	}

	/** Request to add a note. */
	export interface AddNoteRequestFormProperties {
	}
	export function CreateAddNoteRequestFormGroup() {
		return new FormGroup<AddNoteRequestFormProperties>({
		});

	}


	/** A text note attached to the proposal to facilitate the communication between buyers and sellers. */
	export interface Note {

		/** Output only. When this note was created. */
		createTime?: string | null;

		/** Output only. The role who created the note. */
		creatorRole?: NoteCreatorRole | null;

		/** The text of the note. Maximum length is 1024 characters. */
		note?: string | null;
	}

	/** A text note attached to the proposal to facilitate the communication between buyers and sellers. */
	export interface NoteFormProperties {

		/** Output only. When this note was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The role who created the note. */
		creatorRole: FormControl<NoteCreatorRole | null | undefined>,

		/** The text of the note. Maximum length is 1024 characters. */
		note: FormControl<string | null | undefined>,
	}
	export function CreateNoteFormGroup() {
		return new FormGroup<NoteFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			creatorRole: new FormControl<NoteCreatorRole | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NoteCreatorRole { BUYER_SELLER_ROLE_UNSPECIFIED = 'BUYER_SELLER_ROLE_UNSPECIFIED', BUYER = 'BUYER', SELLER = 'SELLER' }


	/** Defines a segment of inventory that buyer wants to buy. It's created by buyer and could be shared with multiple buyers. */
	export interface AuctionPackage {

		/** Output only. Time the auction package was created. */
		createTime?: string | null;

		/** Output only. The buyer that created this auction package. Format: `buyers/{buyerAccountId}` */
		creator?: string | null;

		/** Output only. A description of the auction package. */
		description?: string | null;

		/** The display_name assigned to the auction package. */
		displayName?: string | null;

		/** Immutable. The unique identifier for the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}` The auction_package_id part of name is sent in the BidRequest to all RTB bidders and is returned as deal_id by the bidder in the BidResponse. */
		name?: string | null;

		/** Output only. The list of clients of the current buyer that are subscribed to the AuctionPackage. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}` */
		subscribedClients?: Array<string>;

		/** Output only. Time the auction package was last updated. This value is only increased when this auction package is updated but never when a buyer subscribed. */
		updateTime?: string | null;
	}

	/** Defines a segment of inventory that buyer wants to buy. It's created by buyer and could be shared with multiple buyers. */
	export interface AuctionPackageFormProperties {

		/** Output only. Time the auction package was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The buyer that created this auction package. Format: `buyers/{buyerAccountId}` */
		creator: FormControl<string | null | undefined>,

		/** Output only. A description of the auction package. */
		description: FormControl<string | null | undefined>,

		/** The display_name assigned to the auction package. */
		displayName: FormControl<string | null | undefined>,

		/** Immutable. The unique identifier for the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}` The auction_package_id part of name is sent in the BidRequest to all RTB bidders and is returned as deal_id by the bidder in the BidResponse. */
		name: FormControl<string | null | undefined>,

		/** Output only. Time the auction package was last updated. This value is only increased when this auction package is updated but never when a buyer subscribed. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateAuctionPackageFormGroup() {
		return new FormGroup<AuctionPackageFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			creator: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for batch updating deals. */
	export interface BatchUpdateDealsRequest {

		/** Required. List of request messages to update deals. */
		requests?: Array<UpdateDealRequest>;
	}

	/** Request message for batch updating deals. */
	export interface BatchUpdateDealsRequestFormProperties {
	}
	export function CreateBatchUpdateDealsRequestFormGroup() {
		return new FormGroup<BatchUpdateDealsRequestFormProperties>({
		});

	}


	/** Request message for updating the deal at the given revision number. */
	export interface UpdateDealRequest {

		/** A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals. */
		deal?: Deal;

		/** List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. */
		updateMask?: string | null;
	}

	/** Request message for updating the deal at the given revision number. */
	export interface UpdateDealRequestFormProperties {

		/** List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDealRequestFormGroup() {
		return new FormGroup<UpdateDealRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals. */
	export interface Deal {

		/** Output only. When the client field is populated, this field refers to the buyer who creates and manages the client buyer and gets billed on behalf of the client buyer; when the buyer field is populated, this field is the same value as buyer. Format : `buyers/{buyerAccountId}` */
		billedBuyer?: string | null;

		/** Output only. Refers to a buyer in The Realtime-bidding API. Format: `buyers/{buyerAccountId}` */
		buyer?: string | null;

		/** Output only. Refers to a Client. Format: `buyers/{buyerAccountId}/clients/{clientAccountid}` */
		client?: string | null;

		/** Output only. The time of the deal creation. */
		createTime?: string | null;

		/** Message captures data about the creatives in the deal. */
		creativeRequirements?: CreativeRequirements;

		/** Output only. Type of deal. */
		dealType?: DealDealType | null;

		/** Message contains details about how the deal will be paced. */
		deliveryControl?: DeliveryControl;

		/** Output only. Free text description for the deal terms. */
		description?: string | null;

		/** Output only. The name of the deal. Maximum length of 255 unicode characters is allowed. Control characters are not allowed. Buyers cannot update this field. Note: Not to be confused with name, which is a unique identifier of the deal. */
		displayName?: string | null;

		/** Represents an amount of money with its currency type. */
		estimatedGrossSpend?: Money;

		/** Proposed flight end time of the deal. This will generally be stored in a granularity of a second. A value is not necessary for Private Auction deals. */
		flightEndTime?: string | null;

		/** Proposed flight start time of the deal. This will generally be stored in the granularity of one second since deal serving starts at seconds boundary. Any time specified with more granularity (for example, in milliseconds) will be truncated towards the start of time in seconds. */
		flightStartTime?: string | null;

		/** Immutable. The unique identifier of the deal. Auto-generated by the server when a deal is created. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId} */
		name?: string | null;

		/** Pricing terms for Preferred Deals. */
		preferredDealTerms?: PreferredDealTerms;

		/** Pricing terms for Private Auctions. */
		privateAuctionTerms?: PrivateAuctionTerms;

		/** Pricing terms for Programmatic Guaranteed Deals. */
		programmaticGuaranteedTerms?: ProgrammaticGuaranteedTerms;

		/** Output only. The revision number for the proposal and is the same value as proposal.proposal_revision. Each update to deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made. */
		proposalRevision?: string | null;

		/** Immutable. Reference to the seller on the deal. Format: `buyers/{buyerAccountId}/publisherProfiles/{publisherProfileId}` */
		publisherProfile?: string | null;

		/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
		sellerTimeZone?: TimeZone;

		/** Targeting represents different criteria that can be used to target inventory. For example, they can choose to target inventory only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise. */
		targeting?: MarketplaceTargeting;

		/** Output only. The time when the deal was last updated. */
		updateTime?: string | null;
	}

	/** A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals. */
	export interface DealFormProperties {

		/** Output only. When the client field is populated, this field refers to the buyer who creates and manages the client buyer and gets billed on behalf of the client buyer; when the buyer field is populated, this field is the same value as buyer. Format : `buyers/{buyerAccountId}` */
		billedBuyer: FormControl<string | null | undefined>,

		/** Output only. Refers to a buyer in The Realtime-bidding API. Format: `buyers/{buyerAccountId}` */
		buyer: FormControl<string | null | undefined>,

		/** Output only. Refers to a Client. Format: `buyers/{buyerAccountId}/clients/{clientAccountid}` */
		client: FormControl<string | null | undefined>,

		/** Output only. The time of the deal creation. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Type of deal. */
		dealType: FormControl<DealDealType | null | undefined>,

		/** Output only. Free text description for the deal terms. */
		description: FormControl<string | null | undefined>,

		/** Output only. The name of the deal. Maximum length of 255 unicode characters is allowed. Control characters are not allowed. Buyers cannot update this field. Note: Not to be confused with name, which is a unique identifier of the deal. */
		displayName: FormControl<string | null | undefined>,

		/** Proposed flight end time of the deal. This will generally be stored in a granularity of a second. A value is not necessary for Private Auction deals. */
		flightEndTime: FormControl<string | null | undefined>,

		/** Proposed flight start time of the deal. This will generally be stored in the granularity of one second since deal serving starts at seconds boundary. Any time specified with more granularity (for example, in milliseconds) will be truncated towards the start of time in seconds. */
		flightStartTime: FormControl<string | null | undefined>,

		/** Immutable. The unique identifier of the deal. Auto-generated by the server when a deal is created. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId} */
		name: FormControl<string | null | undefined>,

		/** Output only. The revision number for the proposal and is the same value as proposal.proposal_revision. Each update to deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made. */
		proposalRevision: FormControl<string | null | undefined>,

		/** Immutable. Reference to the seller on the deal. Format: `buyers/{buyerAccountId}/publisherProfiles/{publisherProfileId}` */
		publisherProfile: FormControl<string | null | undefined>,

		/** Output only. The time when the deal was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateDealFormGroup() {
		return new FormGroup<DealFormProperties>({
			billedBuyer: new FormControl<string | null | undefined>(undefined),
			buyer: new FormControl<string | null | undefined>(undefined),
			client: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			dealType: new FormControl<DealDealType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			flightEndTime: new FormControl<string | null | undefined>(undefined),
			flightStartTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			proposalRevision: new FormControl<string | null | undefined>(undefined),
			publisherProfile: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message captures data about the creatives in the deal. */
	export interface CreativeRequirements {

		/** Output only. The format of the creative, only applicable for programmatic guaranteed and preferred deals. */
		creativeFormat?: CreativeRequirementsCreativeFormat | null;

		/** Output only. Specifies the creative pre-approval policy. */
		creativePreApprovalPolicy?: CreativeRequirementsCreativePreApprovalPolicy | null;

		/** Output only. Specifies whether the creative is safeFrame compatible. */
		creativeSafeFrameCompatibility?: CreativeRequirementsCreativeSafeFrameCompatibility | null;

		/** Output only. The max duration of the video creative in milliseconds. only applicable for deals with video creatives. */
		maxAdDurationMs?: string | null;

		/** Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by the buyer. */
		programmaticCreativeSource?: CreativeRequirementsProgrammaticCreativeSource | null;

		/** Output only. Skippable video ads allow viewers to skip ads after 5 seconds. Only applicable for deals with video creatives. */
		skippableAdType?: CreativeRequirementsSkippableAdType | null;
	}

	/** Message captures data about the creatives in the deal. */
	export interface CreativeRequirementsFormProperties {

		/** Output only. The format of the creative, only applicable for programmatic guaranteed and preferred deals. */
		creativeFormat: FormControl<CreativeRequirementsCreativeFormat | null | undefined>,

		/** Output only. Specifies the creative pre-approval policy. */
		creativePreApprovalPolicy: FormControl<CreativeRequirementsCreativePreApprovalPolicy | null | undefined>,

		/** Output only. Specifies whether the creative is safeFrame compatible. */
		creativeSafeFrameCompatibility: FormControl<CreativeRequirementsCreativeSafeFrameCompatibility | null | undefined>,

		/** Output only. The max duration of the video creative in milliseconds. only applicable for deals with video creatives. */
		maxAdDurationMs: FormControl<string | null | undefined>,

		/** Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by the buyer. */
		programmaticCreativeSource: FormControl<CreativeRequirementsProgrammaticCreativeSource | null | undefined>,

		/** Output only. Skippable video ads allow viewers to skip ads after 5 seconds. Only applicable for deals with video creatives. */
		skippableAdType: FormControl<CreativeRequirementsSkippableAdType | null | undefined>,
	}
	export function CreateCreativeRequirementsFormGroup() {
		return new FormGroup<CreativeRequirementsFormProperties>({
			creativeFormat: new FormControl<CreativeRequirementsCreativeFormat | null | undefined>(undefined),
			creativePreApprovalPolicy: new FormControl<CreativeRequirementsCreativePreApprovalPolicy | null | undefined>(undefined),
			creativeSafeFrameCompatibility: new FormControl<CreativeRequirementsCreativeSafeFrameCompatibility | null | undefined>(undefined),
			maxAdDurationMs: new FormControl<string | null | undefined>(undefined),
			programmaticCreativeSource: new FormControl<CreativeRequirementsProgrammaticCreativeSource | null | undefined>(undefined),
			skippableAdType: new FormControl<CreativeRequirementsSkippableAdType | null | undefined>(undefined),
		});

	}

	export enum CreativeRequirementsCreativeFormat { CREATIVE_FORMAT_UNSPECIFIED = 'CREATIVE_FORMAT_UNSPECIFIED', DISPLAY = 'DISPLAY', VIDEO = 'VIDEO', AUDIO = 'AUDIO' }

	export enum CreativeRequirementsCreativePreApprovalPolicy { CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED = 'CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED', SELLER_PRE_APPROVAL_REQUIRED = 'SELLER_PRE_APPROVAL_REQUIRED', SELLER_PRE_APPROVAL_NOT_REQUIRED = 'SELLER_PRE_APPROVAL_NOT_REQUIRED' }

	export enum CreativeRequirementsCreativeSafeFrameCompatibility { CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED = 'CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED', COMPATIBLE = 'COMPATIBLE', INCOMPATIBLE = 'INCOMPATIBLE' }

	export enum CreativeRequirementsProgrammaticCreativeSource { PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED = 'PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED', ADVERTISER = 'ADVERTISER', PUBLISHER = 'PUBLISHER' }

	export enum CreativeRequirementsSkippableAdType { SKIPPABLE_AD_TYPE_UNSPECIFIED = 'SKIPPABLE_AD_TYPE_UNSPECIFIED', SKIPPABLE = 'SKIPPABLE', INSTREAM_SELECT = 'INSTREAM_SELECT', NOT_SKIPPABLE = 'NOT_SKIPPABLE', ANY = 'ANY' }

	export enum DealDealType { DEAL_TYPE_UNSPECIFIED = 'DEAL_TYPE_UNSPECIFIED', PREFERRED_DEAL = 'PREFERRED_DEAL', PRIVATE_AUCTION = 'PRIVATE_AUCTION', PROGRAMMATIC_GUARANTEED = 'PROGRAMMATIC_GUARANTEED' }


	/** Message contains details about how the deal will be paced. */
	export interface DeliveryControl {

		/** Output only. Specifies roadblocking in a main companion lineitem. */
		companionDeliveryType?: DeliveryControlCompanionDeliveryType | null;

		/** Output only. Specifies strategy to use for selecting a creative when multiple creatives of the same size are available. */
		creativeRotationType?: DeliveryControlCreativeRotationType | null;

		/** Output only. Specifies how the impression delivery will be paced. */
		deliveryRateType?: DeliveryControlDeliveryRateType | null;

		/** Output only. Specifies any frequency caps. Cannot be filtered within ListDealsRequest. */
		frequencyCap?: Array<FrequencyCap>;

		/** Output only. Specifies the roadblocking type in display creatives. */
		roadblockingType?: DeliveryControlRoadblockingType | null;
	}

	/** Message contains details about how the deal will be paced. */
	export interface DeliveryControlFormProperties {

		/** Output only. Specifies roadblocking in a main companion lineitem. */
		companionDeliveryType: FormControl<DeliveryControlCompanionDeliveryType | null | undefined>,

		/** Output only. Specifies strategy to use for selecting a creative when multiple creatives of the same size are available. */
		creativeRotationType: FormControl<DeliveryControlCreativeRotationType | null | undefined>,

		/** Output only. Specifies how the impression delivery will be paced. */
		deliveryRateType: FormControl<DeliveryControlDeliveryRateType | null | undefined>,

		/** Output only. Specifies the roadblocking type in display creatives. */
		roadblockingType: FormControl<DeliveryControlRoadblockingType | null | undefined>,
	}
	export function CreateDeliveryControlFormGroup() {
		return new FormGroup<DeliveryControlFormProperties>({
			companionDeliveryType: new FormControl<DeliveryControlCompanionDeliveryType | null | undefined>(undefined),
			creativeRotationType: new FormControl<DeliveryControlCreativeRotationType | null | undefined>(undefined),
			deliveryRateType: new FormControl<DeliveryControlDeliveryRateType | null | undefined>(undefined),
			roadblockingType: new FormControl<DeliveryControlRoadblockingType | null | undefined>(undefined),
		});

	}

	export enum DeliveryControlCompanionDeliveryType { COMPANION_DELIVERY_TYPE_UNSPECIFIED = 'COMPANION_DELIVERY_TYPE_UNSPECIFIED', DELIVERY_OPTIONAL = 'DELIVERY_OPTIONAL', DELIVERY_AT_LEAST_ONE = 'DELIVERY_AT_LEAST_ONE', DELIVERY_ALL = 'DELIVERY_ALL' }

	export enum DeliveryControlCreativeRotationType { CREATIVE_ROTATION_TYPE_UNSPECIFIED = 'CREATIVE_ROTATION_TYPE_UNSPECIFIED', ROTATION_EVEN = 'ROTATION_EVEN', ROTATION_OPTIMIZED = 'ROTATION_OPTIMIZED', ROTATION_MANUAL = 'ROTATION_MANUAL', ROTATION_SEQUENTIAL = 'ROTATION_SEQUENTIAL' }

	export enum DeliveryControlDeliveryRateType { DELIVERY_RATE_TYPE_UNSPECIFIED = 'DELIVERY_RATE_TYPE_UNSPECIFIED', EVENLY = 'EVENLY', FRONT_LOADED = 'FRONT_LOADED', AS_FAST_AS_POSSIBLE = 'AS_FAST_AS_POSSIBLE' }


	/** Message contains details about publisher-set frequency caps of the delivery. */
	export interface FrequencyCap {

		/** The maximum number of impressions that can be served to a user within the specified time period. */
		maxImpressions?: number | null;

		/** The time unit. Along with num_time_units defines the amount of time over which impressions per user are counted and capped. */
		timeUnitType?: FrequencyCapTimeUnitType | null;

		/** The amount of time, in the units specified by time_unit_type. Defines the amount of time over which impressions per user are counted and capped. */
		timeUnitsCount?: number | null;
	}

	/** Message contains details about publisher-set frequency caps of the delivery. */
	export interface FrequencyCapFormProperties {

		/** The maximum number of impressions that can be served to a user within the specified time period. */
		maxImpressions: FormControl<number | null | undefined>,

		/** The time unit. Along with num_time_units defines the amount of time over which impressions per user are counted and capped. */
		timeUnitType: FormControl<FrequencyCapTimeUnitType | null | undefined>,

		/** The amount of time, in the units specified by time_unit_type. Defines the amount of time over which impressions per user are counted and capped. */
		timeUnitsCount: FormControl<number | null | undefined>,
	}
	export function CreateFrequencyCapFormGroup() {
		return new FormGroup<FrequencyCapFormProperties>({
			maxImpressions: new FormControl<number | null | undefined>(undefined),
			timeUnitType: new FormControl<FrequencyCapTimeUnitType | null | undefined>(undefined),
			timeUnitsCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FrequencyCapTimeUnitType { TIME_UNIT_TYPE_UNSPECIFIED = 'TIME_UNIT_TYPE_UNSPECIFIED', MINUTE = 'MINUTE', HOUR = 'HOUR', DAY = 'DAY', WEEK = 'WEEK', MONTH = 'MONTH', LIFETIME = 'LIFETIME', POD = 'POD', STREAM = 'STREAM' }

	export enum DeliveryControlRoadblockingType { ROADBLOCKING_TYPE_UNSPECIFIED = 'ROADBLOCKING_TYPE_UNSPECIFIED', ONLY_ONE = 'ONLY_ONE', ONE_OR_MORE = 'ONE_OR_MORE', AS_MANY_AS_POSSIBLE = 'AS_MANY_AS_POSSIBLE', ALL_ROADBLOCK = 'ALL_ROADBLOCK', CREATIVE_SET = 'CREATIVE_SET' }


	/** Represents an amount of money with its currency type. */
	export interface Money {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode?: string | null;

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos?: number | null;

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units?: string | null;
	}

	/** Represents an amount of money with its currency type. */
	export interface MoneyFormProperties {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode: FormControl<string | null | undefined>,

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos: FormControl<number | null | undefined>,

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units: FormControl<string | null | undefined>,
	}
	export function CreateMoneyFormGroup() {
		return new FormGroup<MoneyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pricing terms for Preferred Deals. */
	export interface PreferredDealTerms {

		/** Represents a price and a pricing type for a deal. */
		fixedPrice?: Price;
	}

	/** Pricing terms for Preferred Deals. */
	export interface PreferredDealTermsFormProperties {
	}
	export function CreatePreferredDealTermsFormGroup() {
		return new FormGroup<PreferredDealTermsFormProperties>({
		});

	}


	/** Represents a price and a pricing type for a deal. */
	export interface Price {

		/** Represents an amount of money with its currency type. */
		amount?: Money;

		/** The pricing type for the deal. */
		type?: PriceType | null;
	}

	/** Represents a price and a pricing type for a deal. */
	export interface PriceFormProperties {

		/** The pricing type for the deal. */
		type: FormControl<PriceType | null | undefined>,
	}
	export function CreatePriceFormGroup() {
		return new FormGroup<PriceFormProperties>({
			type: new FormControl<PriceType | null | undefined>(undefined),
		});

	}

	export enum PriceType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', CPM = 'CPM', CPD = 'CPD' }


	/** Pricing terms for Private Auctions. */
	export interface PrivateAuctionTerms {

		/** Represents a price and a pricing type for a deal. */
		floorPrice?: Price;

		/** Output only. True if open auction buyers are allowed to compete with invited buyers in this private auction. */
		openAuctionAllowed?: boolean | null;
	}

	/** Pricing terms for Private Auctions. */
	export interface PrivateAuctionTermsFormProperties {

		/** Output only. True if open auction buyers are allowed to compete with invited buyers in this private auction. */
		openAuctionAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreatePrivateAuctionTermsFormGroup() {
		return new FormGroup<PrivateAuctionTermsFormProperties>({
			openAuctionAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Pricing terms for Programmatic Guaranteed Deals. */
	export interface ProgrammaticGuaranteedTerms {

		/** Represents a price and a pricing type for a deal. */
		fixedPrice?: Price;

		/** Count of guaranteed looks. For CPD deals, buyer changes to guaranteed_looks will be ignored. */
		guaranteedLooks?: string | null;

		/** The lifetime impression cap for CPM Sponsorship deals. Deal will stop serving when cap is reached. */
		impressionCap?: string | null;

		/** Daily minimum looks for CPD deal types. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks. */
		minimumDailyLooks?: string | null;

		/** For sponsorship deals, this is the percentage of the seller's eligible impressions that the deal will serve until the cap is reached. Valid value is within range 0~100. */
		percentShareOfVoice?: string | null;

		/** The reservation type for a Programmatic Guaranteed deal. This indicates whether the number of impressions is fixed, or a percent of available impressions. If not specified, the default reservation type is STANDARD. */
		reservationType?: ProgrammaticGuaranteedTermsReservationType | null;
	}

	/** Pricing terms for Programmatic Guaranteed Deals. */
	export interface ProgrammaticGuaranteedTermsFormProperties {

		/** Count of guaranteed looks. For CPD deals, buyer changes to guaranteed_looks will be ignored. */
		guaranteedLooks: FormControl<string | null | undefined>,

		/** The lifetime impression cap for CPM Sponsorship deals. Deal will stop serving when cap is reached. */
		impressionCap: FormControl<string | null | undefined>,

		/** Daily minimum looks for CPD deal types. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks. */
		minimumDailyLooks: FormControl<string | null | undefined>,

		/** For sponsorship deals, this is the percentage of the seller's eligible impressions that the deal will serve until the cap is reached. Valid value is within range 0~100. */
		percentShareOfVoice: FormControl<string | null | undefined>,

		/** The reservation type for a Programmatic Guaranteed deal. This indicates whether the number of impressions is fixed, or a percent of available impressions. If not specified, the default reservation type is STANDARD. */
		reservationType: FormControl<ProgrammaticGuaranteedTermsReservationType | null | undefined>,
	}
	export function CreateProgrammaticGuaranteedTermsFormGroup() {
		return new FormGroup<ProgrammaticGuaranteedTermsFormProperties>({
			guaranteedLooks: new FormControl<string | null | undefined>(undefined),
			impressionCap: new FormControl<string | null | undefined>(undefined),
			minimumDailyLooks: new FormControl<string | null | undefined>(undefined),
			percentShareOfVoice: new FormControl<string | null | undefined>(undefined),
			reservationType: new FormControl<ProgrammaticGuaranteedTermsReservationType | null | undefined>(undefined),
		});

	}

	export enum ProgrammaticGuaranteedTermsReservationType { RESERVATION_TYPE_UNSPECIFIED = 'RESERVATION_TYPE_UNSPECIFIED', STANDARD = 'STANDARD', SPONSORSHIP = 'SPONSORSHIP' }


	/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
	export interface TimeZone {

		/** IANA Time Zone Database time zone, e.g. "America/New_York". */
		id?: string | null;

		/** Optional. IANA Time Zone Database version number, e.g. "2019a". */
		version?: string | null;
	}

	/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
	export interface TimeZoneFormProperties {

		/** IANA Time Zone Database time zone, e.g. "America/New_York". */
		id: FormControl<string | null | undefined>,

		/** Optional. IANA Time Zone Database version number, e.g. "2019a". */
		version: FormControl<string | null | undefined>,
	}
	export function CreateTimeZoneFormGroup() {
		return new FormGroup<TimeZoneFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Targeting represents different criteria that can be used to target inventory. For example, they can choose to target inventory only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise. */
	export interface MarketplaceTargeting {

		/** Represents Daypart targeting. */
		daypartTargeting?: DayPartTargeting;

		/** Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax. */
		geoTargeting?: CriteriaTargeting;

		/** Represents the size of an ad unit that can be targeted on a bid request. */
		inventorySizeTargeting?: InventorySizeTargeting;

		/** Targeting of the inventory types a bid request can originate from. */
		inventoryTypeTargeting?: InventoryTypeTargeting;

		/** Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed. */
		placementTargeting?: PlacementTargeting;

		/** Represents targeting about various types of technology. */
		technologyTargeting?: TechnologyTargeting;

		/** Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax. */
		userListTargeting?: CriteriaTargeting;

		/** Represents targeting information about video. */
		videoTargeting?: VideoTargeting;
	}

	/** Targeting represents different criteria that can be used to target inventory. For example, they can choose to target inventory only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise. */
	export interface MarketplaceTargetingFormProperties {
	}
	export function CreateMarketplaceTargetingFormGroup() {
		return new FormGroup<MarketplaceTargetingFormProperties>({
		});

	}


	/** Represents Daypart targeting. */
	export interface DayPartTargeting {

		/** The targeted weekdays and times */
		dayParts?: Array<DayPart>;

		/** The time zone type of the day parts */
		timeZoneType?: DayPartTargetingTimeZoneType | null;
	}

	/** Represents Daypart targeting. */
	export interface DayPartTargetingFormProperties {

		/** The time zone type of the day parts */
		timeZoneType: FormControl<DayPartTargetingTimeZoneType | null | undefined>,
	}
	export function CreateDayPartTargetingFormGroup() {
		return new FormGroup<DayPartTargetingFormProperties>({
			timeZoneType: new FormControl<DayPartTargetingTimeZoneType | null | undefined>(undefined),
		});

	}


	/** Defines targeting for a period of time on a specific week day. */
	export interface DayPart {

		/** Day of week for the period. */
		dayOfWeek?: DayPartDayOfWeek | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		endTime?: TimeOfDay;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** Defines targeting for a period of time on a specific week day. */
	export interface DayPartFormProperties {

		/** Day of week for the period. */
		dayOfWeek: FormControl<DayPartDayOfWeek | null | undefined>,
	}
	export function CreateDayPartFormGroup() {
		return new FormGroup<DayPartFormProperties>({
			dayOfWeek: new FormControl<DayPartDayOfWeek | null | undefined>(undefined),
		});

	}

	export enum DayPartDayOfWeek { DAY_OF_WEEK_UNSPECIFIED = 'DAY_OF_WEEK_UNSPECIFIED', MONDAY = 'MONDAY', TUESDAY = 'TUESDAY', WEDNESDAY = 'WEDNESDAY', THURSDAY = 'THURSDAY', FRIDAY = 'FRIDAY', SATURDAY = 'SATURDAY', SUNDAY = 'SUNDAY' }


	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDay {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours?: number | null;

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes?: number | null;

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos?: number | null;

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds?: number | null;
	}

	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDayFormProperties {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours: FormControl<number | null | undefined>,

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes: FormControl<number | null | undefined>,

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos: FormControl<number | null | undefined>,

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateTimeOfDayFormGroup() {
		return new FormGroup<TimeOfDayFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DayPartTargetingTimeZoneType { TIME_ZONE_TYPE_UNSPECIFIED = 'TIME_ZONE_TYPE_UNSPECIFIED', SELLER = 'SELLER', USER = 'USER' }


	/** Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax. */
	export interface CriteriaTargeting {

		/** A list of numeric IDs to be excluded. */
		excludedCriteriaIds?: Array<string>;

		/** A list of numeric IDs to be included. */
		targetedCriteriaIds?: Array<string>;
	}

	/** Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax. */
	export interface CriteriaTargetingFormProperties {
	}
	export function CreateCriteriaTargetingFormGroup() {
		return new FormGroup<CriteriaTargetingFormProperties>({
		});

	}


	/** Represents the size of an ad unit that can be targeted on a bid request. */
	export interface InventorySizeTargeting {

		/** A list of inventory sizes to be excluded. */
		excludedInventorySizes?: Array<AdSize>;

		/** A list of inventory sizes to be included. */
		targetedInventorySizes?: Array<AdSize>;
	}

	/** Represents the size of an ad unit that can be targeted on a bid request. */
	export interface InventorySizeTargetingFormProperties {
	}
	export function CreateInventorySizeTargetingFormGroup() {
		return new FormGroup<InventorySizeTargetingFormProperties>({
		});

	}


	/** Targeting of the inventory types a bid request can originate from. */
	export interface InventoryTypeTargeting {

		/** The list of targeted inventory types for the bid request. */
		inventoryTypes?: Array<string>;
	}

	/** Targeting of the inventory types a bid request can originate from. */
	export interface InventoryTypeTargetingFormProperties {
	}
	export function CreateInventoryTypeTargetingFormGroup() {
		return new FormGroup<InventoryTypeTargetingFormProperties>({
		});

	}


	/** Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed. */
	export interface PlacementTargeting {

		/** Mobile application targeting settings. */
		mobileApplicationTargeting?: MobileApplicationTargeting;

		/** Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply. */
		uriTargeting?: UriTargeting;
	}

	/** Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed. */
	export interface PlacementTargetingFormProperties {
	}
	export function CreatePlacementTargetingFormGroup() {
		return new FormGroup<PlacementTargetingFormProperties>({
		});

	}


	/** Mobile application targeting settings. */
	export interface MobileApplicationTargeting {

		/** Represents a list of targeted and excluded mobile application IDs that publishers own. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded. */
		firstPartyTargeting?: FirstPartyMobileApplicationTargeting;
	}

	/** Mobile application targeting settings. */
	export interface MobileApplicationTargetingFormProperties {
	}
	export function CreateMobileApplicationTargetingFormGroup() {
		return new FormGroup<MobileApplicationTargetingFormProperties>({
		});

	}


	/** Represents a list of targeted and excluded mobile application IDs that publishers own. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded. */
	export interface FirstPartyMobileApplicationTargeting {

		/** A list of application IDs to be excluded. */
		excludedAppIds?: Array<string>;

		/** A list of application IDs to be included. */
		targetedAppIds?: Array<string>;
	}

	/** Represents a list of targeted and excluded mobile application IDs that publishers own. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded. */
	export interface FirstPartyMobileApplicationTargetingFormProperties {
	}
	export function CreateFirstPartyMobileApplicationTargetingFormGroup() {
		return new FormGroup<FirstPartyMobileApplicationTargetingFormProperties>({
		});

	}


	/** Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply. */
	export interface UriTargeting {

		/** A list of URLs to be excluded. */
		excludedUris?: Array<string>;

		/** A list of URLs to be included. */
		targetedUris?: Array<string>;
	}

	/** Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply. */
	export interface UriTargetingFormProperties {
	}
	export function CreateUriTargetingFormGroup() {
		return new FormGroup<UriTargetingFormProperties>({
		});

	}


	/** Represents targeting about various types of technology. */
	export interface TechnologyTargeting {

		/** Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax. */
		deviceCapabilityTargeting?: CriteriaTargeting;

		/** Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax. */
		deviceCategoryTargeting?: CriteriaTargeting;

		/** Represents targeting information for operating systems. */
		operatingSystemTargeting?: OperatingSystemTargeting;
	}

	/** Represents targeting about various types of technology. */
	export interface TechnologyTargetingFormProperties {
	}
	export function CreateTechnologyTargetingFormGroup() {
		return new FormGroup<TechnologyTargetingFormProperties>({
		});

	}


	/** Represents targeting information for operating systems. */
	export interface OperatingSystemTargeting {

		/** Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax. */
		operatingSystemCriteria?: CriteriaTargeting;

		/** Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax. */
		operatingSystemVersionCriteria?: CriteriaTargeting;
	}

	/** Represents targeting information for operating systems. */
	export interface OperatingSystemTargetingFormProperties {
	}
	export function CreateOperatingSystemTargetingFormGroup() {
		return new FormGroup<OperatingSystemTargetingFormProperties>({
		});

	}


	/** Represents targeting information about video. */
	export interface VideoTargeting {

		/** A list of video positions to be excluded. When this field is populated, the targeted_position_types field must be empty. */
		excludedPositionTypes?: Array<string>;

		/** A list of video positions to be included. When this field is populated, the excluded_position_types field must be empty. */
		targetedPositionTypes?: Array<string>;
	}

	/** Represents targeting information about video. */
	export interface VideoTargetingFormProperties {
	}
	export function CreateVideoTargetingFormGroup() {
		return new FormGroup<VideoTargetingFormProperties>({
		});

	}


	/** Response message for batch updating deals. */
	export interface BatchUpdateDealsResponse {

		/** Deals updated. */
		deals?: Array<Deal>;
	}

	/** Response message for batch updating deals. */
	export interface BatchUpdateDealsResponseFormProperties {
	}
	export function CreateBatchUpdateDealsResponseFormGroup() {
		return new FormGroup<BatchUpdateDealsResponseFormProperties>({
		});

	}


	/** Request to cancel an ongoing negotiation. */
	export interface CancelNegotiationRequest {
	}

	/** Request to cancel an ongoing negotiation. */
	export interface CancelNegotiationRequestFormProperties {
	}
	export function CreateCancelNegotiationRequestFormGroup() {
		return new FormGroup<CancelNegotiationRequestFormProperties>({
		});

	}


	/** A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI. */
	export interface Client {

		/** Required. Display name shown to publishers. Must be unique for clients without partnerClientId specified. Maximum length of 255 characters is allowed. */
		displayName?: string | null;

		/** Output only. The resource name of the client. Format: `buyers/{accountId}/clients/{clientAccountId}` */
		name?: string | null;

		/** Arbitrary unique identifier provided by the buyer. This field can be used to associate a client with an identifier in the namespace of the buyer, lookup clients by that identifier and verify whether an Authorized Buyers account of the client already exists. If present, must be unique across all the clients. */
		partnerClientId?: string | null;

		/** Required. The role assigned to the client. Each role implies a set of permissions granted to the client. */
		role?: ClientRole | null;

		/** Whether the client will be visible to sellers. */
		sellerVisible?: boolean | null;

		/** Output only. The state of the client. */
		state?: ClientState | null;
	}

	/** A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI. */
	export interface ClientFormProperties {

		/** Required. Display name shown to publishers. Must be unique for clients without partnerClientId specified. Maximum length of 255 characters is allowed. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The resource name of the client. Format: `buyers/{accountId}/clients/{clientAccountId}` */
		name: FormControl<string | null | undefined>,

		/** Arbitrary unique identifier provided by the buyer. This field can be used to associate a client with an identifier in the namespace of the buyer, lookup clients by that identifier and verify whether an Authorized Buyers account of the client already exists. If present, must be unique across all the clients. */
		partnerClientId: FormControl<string | null | undefined>,

		/** Required. The role assigned to the client. Each role implies a set of permissions granted to the client. */
		role: FormControl<ClientRole | null | undefined>,

		/** Whether the client will be visible to sellers. */
		sellerVisible: FormControl<boolean | null | undefined>,

		/** Output only. The state of the client. */
		state: FormControl<ClientState | null | undefined>,
	}
	export function CreateClientFormGroup() {
		return new FormGroup<ClientFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			partnerClientId: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<ClientRole | null | undefined>(undefined),
			sellerVisible: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<ClientState | null | undefined>(undefined),
		});

	}

	export enum ClientRole { CLIENT_ROLE_UNSPECIFIED = 'CLIENT_ROLE_UNSPECIFIED', CLIENT_DEAL_VIEWER = 'CLIENT_DEAL_VIEWER', CLIENT_DEAL_NEGOTIATOR = 'CLIENT_DEAL_NEGOTIATOR', CLIENT_DEAL_APPROVER = 'CLIENT_DEAL_APPROVER' }

	export enum ClientState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }


	/** A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client. */
	export interface ClientUser {

		/** Required. The client user's email address that has to be unique across all users for the same client. */
		email?: string | null;

		/** Output only. The resource name of the client user. Format: `buyers/{accountId}/clients/{clientAccountId}/users/{userId}` */
		name?: string | null;

		/** Output only. The state of the client user. */
		state?: ClientUserState | null;
	}

	/** A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client. */
	export interface ClientUserFormProperties {

		/** Required. The client user's email address that has to be unique across all users for the same client. */
		email: FormControl<string | null | undefined>,

		/** Output only. The resource name of the client user. Format: `buyers/{accountId}/clients/{clientAccountId}/users/{userId}` */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the client user. */
		state: FormControl<ClientUserState | null | undefined>,
	}
	export function CreateClientUserFormGroup() {
		return new FormGroup<ClientUserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ClientUserState | null | undefined>(undefined),
		});

	}

	export enum ClientUserState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', INVITED = 'INVITED', ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }


	/** Contains information on how a buyer or seller can be reached. */
	export interface Contact {

		/** The display_name of the contact. */
		displayName?: string | null;

		/** Email address for the contact. */
		email?: string | null;
	}

	/** Contains information on how a buyer or seller can be reached. */
	export interface ContactFormProperties {

		/** The display_name of the contact. */
		displayName: FormControl<string | null | undefined>,

		/** Email address for the contact. */
		email: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for disabling a client. */
	export interface DeactivateClientRequest {
	}

	/** Request message for disabling a client. */
	export interface DeactivateClientRequestFormProperties {
	}
	export function CreateDeactivateClientRequestFormGroup() {
		return new FormGroup<DeactivateClientRequestFormProperties>({
		});

	}


	/** Request message for deactivating a client user. */
	export interface DeactivateClientUserRequest {
	}

	/** Request message for deactivating a client user. */
	export interface DeactivateClientUserRequestFormProperties {
	}
	export function CreateDeactivateClientUserRequestFormGroup() {
		return new FormGroup<DeactivateClientUserRequestFormProperties>({
		});

	}


	/** Information related to deal pausing. */
	export interface DealPausingInfo {

		/** The reason for the pausing of the deal; empty for active deals. */
		pauseReason?: string | null;

		/** The party that first paused the deal; unspecified for active deals. */
		pauseRole?: NoteCreatorRole | null;

		/** Whether pausing is consented between buyer and seller for the deal. */
		pausingConsented?: boolean | null;
	}

	/** Information related to deal pausing. */
	export interface DealPausingInfoFormProperties {

		/** The reason for the pausing of the deal; empty for active deals. */
		pauseReason: FormControl<string | null | undefined>,

		/** The party that first paused the deal; unspecified for active deals. */
		pauseRole: FormControl<NoteCreatorRole | null | undefined>,

		/** Whether pausing is consented between buyer and seller for the deal. */
		pausingConsented: FormControl<boolean | null | undefined>,
	}
	export function CreateDealPausingInfoFormGroup() {
		return new FormGroup<DealPausingInfoFormProperties>({
			pauseReason: new FormControl<string | null | undefined>(undefined),
			pauseRole: new FormControl<NoteCreatorRole | null | undefined>(undefined),
			pausingConsented: new FormControl<boolean | null | undefined>(undefined),
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


	/** A finalized deal is a snapshot of the deal when both buyer and seller accept the deal. The buyer or seller can update the deal after it's been finalized and renegotiate on the deal targeting, terms and other fields, while at the same time the finalized snapshot of the deal can still be retrieved using this API. The finalized deal contains a copy of the deal as it existed when most recently finalized, as well as fields related to deal serving such as pause/resume status, RTB metrics, and more. */
	export interface FinalizedDeal {

		/** A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals. */
		deal?: Deal;

		/** Information related to deal pausing. */
		dealPausingInfo?: DealPausingInfo;

		/** Serving status of the deal. */
		dealServingStatus?: FinalizedDealDealServingStatus | null;

		/** The resource name of the finalized deal. Format: `buyers/{accountId}/finalizedDeals/{finalizedDealId}` */
		name?: string | null;

		/** Whether the Programmatic Guaranteed deal is ready for serving. */
		readyToServe?: boolean | null;

		/** Real-time bidding metrics. For what each metric means refer to [Report metrics](https://support.google.com/adxbuyer/answer/6115195#report-metrics) */
		rtbMetrics?: RtbMetrics;
	}

	/** A finalized deal is a snapshot of the deal when both buyer and seller accept the deal. The buyer or seller can update the deal after it's been finalized and renegotiate on the deal targeting, terms and other fields, while at the same time the finalized snapshot of the deal can still be retrieved using this API. The finalized deal contains a copy of the deal as it existed when most recently finalized, as well as fields related to deal serving such as pause/resume status, RTB metrics, and more. */
	export interface FinalizedDealFormProperties {

		/** Serving status of the deal. */
		dealServingStatus: FormControl<FinalizedDealDealServingStatus | null | undefined>,

		/** The resource name of the finalized deal. Format: `buyers/{accountId}/finalizedDeals/{finalizedDealId}` */
		name: FormControl<string | null | undefined>,

		/** Whether the Programmatic Guaranteed deal is ready for serving. */
		readyToServe: FormControl<boolean | null | undefined>,
	}
	export function CreateFinalizedDealFormGroup() {
		return new FormGroup<FinalizedDealFormProperties>({
			dealServingStatus: new FormControl<FinalizedDealDealServingStatus | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			readyToServe: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum FinalizedDealDealServingStatus { DEAL_SERVING_STATUS_UNSPECIFIED = 'DEAL_SERVING_STATUS_UNSPECIFIED', ACTIVE = 'ACTIVE', ENDED = 'ENDED', PAUSED_BY_BUYER = 'PAUSED_BY_BUYER', PAUSED_BY_SELLER = 'PAUSED_BY_SELLER' }


	/** Real-time bidding metrics. For what each metric means refer to [Report metrics](https://support.google.com/adxbuyer/answer/6115195#report-metrics) */
	export interface RtbMetrics {

		/** Ad impressions in last 7 days. */
		adImpressions7Days?: string | null;

		/** Bid rate in last 7 days, calculated by (bids / bid requests). */
		bidRate7Days?: number | null;

		/** Bid requests in last 7 days. */
		bidRequests7Days?: string | null;

		/** Bids in last 7 days. */
		bids7Days?: string | null;

		/** Filtered bid rate in last 7 days, calculated by (filtered bids / bids). */
		filteredBidRate7Days?: number | null;

		/** Must bid rate for current month. */
		mustBidRateCurrentMonth?: number | null;
	}

	/** Real-time bidding metrics. For what each metric means refer to [Report metrics](https://support.google.com/adxbuyer/answer/6115195#report-metrics) */
	export interface RtbMetricsFormProperties {

		/** Ad impressions in last 7 days. */
		adImpressions7Days: FormControl<string | null | undefined>,

		/** Bid rate in last 7 days, calculated by (bids / bid requests). */
		bidRate7Days: FormControl<number | null | undefined>,

		/** Bid requests in last 7 days. */
		bidRequests7Days: FormControl<string | null | undefined>,

		/** Bids in last 7 days. */
		bids7Days: FormControl<string | null | undefined>,

		/** Filtered bid rate in last 7 days, calculated by (filtered bids / bids). */
		filteredBidRate7Days: FormControl<number | null | undefined>,

		/** Must bid rate for current month. */
		mustBidRateCurrentMonth: FormControl<number | null | undefined>,
	}
	export function CreateRtbMetricsFormGroup() {
		return new FormGroup<RtbMetricsFormProperties>({
			adImpressions7Days: new FormControl<string | null | undefined>(undefined),
			bidRate7Days: new FormControl<number | null | undefined>(undefined),
			bidRequests7Days: new FormControl<string | null | undefined>(undefined),
			bids7Days: new FormControl<string | null | undefined>(undefined),
			filteredBidRate7Days: new FormControl<number | null | undefined>(undefined),
			mustBidRateCurrentMonth: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for listing auction packages. */
	export interface ListAuctionPackagesResponse {

		/** The list of auction packages. */
		auctionPackages?: Array<AuctionPackage>;

		/** Continuation token for fetching the next page of results. Pass this value in the ListAuctionPackagesRequest.pageToken field in the subsequent call to the `ListAuctionPackages` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for listing auction packages. */
	export interface ListAuctionPackagesResponseFormProperties {

		/** Continuation token for fetching the next page of results. Pass this value in the ListAuctionPackagesRequest.pageToken field in the subsequent call to the `ListAuctionPackages` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAuctionPackagesResponseFormGroup() {
		return new FormGroup<ListAuctionPackagesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the list method. */
	export interface ListClientUsersResponse {

		/** The returned list of client users. */
		clientUsers?: Array<ClientUser>;

		/** A token to retrieve the next page of results. Pass this value in the ListClientUsersRequest.pageToken field in the subsequent call to the list method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for the list method. */
	export interface ListClientUsersResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListClientUsersRequest.pageToken field in the subsequent call to the list method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListClientUsersResponseFormGroup() {
		return new FormGroup<ListClientUsersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the list method. */
	export interface ListClientsResponse {

		/** The returned list of clients. */
		clients?: Array<Client>;

		/** A token to retrieve the next page of results. Pass this value in the ListClientsRequest.pageToken field in the subsequent call to the list method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for the list method. */
	export interface ListClientsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListClientsRequest.pageToken field in the subsequent call to the list method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListClientsResponseFormGroup() {
		return new FormGroup<ListClientsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing deals in a proposal. */
	export interface ListDealsResponse {

		/** The list of deals. */
		deals?: Array<Deal>;

		/** Token to fetch the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for listing deals in a proposal. */
	export interface ListDealsResponseFormProperties {

		/** Token to fetch the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDealsResponseFormGroup() {
		return new FormGroup<ListDealsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing finalized deals. */
	export interface ListFinalizedDealsResponse {

		/** The list of finalized deals. */
		finalizedDeals?: Array<FinalizedDeal>;

		/** Token to fetch the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for listing finalized deals. */
	export interface ListFinalizedDealsResponseFormProperties {

		/** Token to fetch the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFinalizedDealsResponseFormGroup() {
		return new FormGroup<ListFinalizedDealsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing proposals. */
	export interface ListProposalsResponse {

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;

		/** The list of proposals. */
		proposals?: Array<Proposal>;
	}

	/** Response message for listing proposals. */
	export interface ListProposalsResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProposalsResponseFormGroup() {
		return new FormGroup<ListProposalsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer. */
	export interface Proposal {

		/** Output only. When the client field is populated, this field refers to the buyer who creates and manages the client buyer and gets billed on behalf of the client buyer; when the buyer field is populated, this field is the same value as buyer. Format : `buyers/{buyerAccountId}` */
		billedBuyer?: string | null;

		/** Output only. Refers to a buyer in The Realtime-bidding API. Format: `buyers/{buyerAccountId}` */
		buyer?: string | null;

		/** Contact information for the buyer. */
		buyerContacts?: Array<Contact>;

		/** Buyers are allowed to store certain types of private data in a proposal or deal. */
		buyerPrivateData?: PrivateData;

		/** Output only. Refers to a Client. Format: `buyers/{buyerAccountId}/clients/{clientAccountid}` */
		client?: string | null;

		/** Output only. Type of deal the proposal contains. */
		dealType?: DealDealType | null;

		/** Output only. The descriptive name for the proposal. Maximum length of 255 unicode characters is allowed. Control characters are not allowed. Buyers cannot update this field. Note: Not to be confused with name, which is a unique identifier of the proposal. */
		displayName?: string | null;

		/** Output only. True if the proposal was previously finalized and is now being renegotiated. */
		isRenegotiating?: boolean | null;

		/** Output only. The role of the last user that either updated the proposal or left a comment. */
		lastUpdaterOrCommentorRole?: NoteCreatorRole | null;

		/** Immutable. The name of the proposal serving as a unique identifier. Format: buyers/{accountId}/proposals/{proposalId} */
		name?: string | null;

		/** A list of notes from the buyer and the seller attached to this proposal. */
		notes?: Array<Note>;

		/** Output only. Indicates whether the buyer/seller created the proposal. */
		originatorRole?: NoteCreatorRole | null;

		/** Whether pausing is allowed for the proposal. This is a negotiable term between buyers and publishers. */
		pausingConsented?: boolean | null;

		/** Output only. The revision number for the proposal. Each update to the proposal or deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made. */
		proposalRevision?: string | null;

		/** Immutable. Reference to the seller on the proposal. Format: `buyers/{buyerAccountId}/publisherProfiles/{publisherProfileId}` Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error. */
		publisherProfile?: string | null;

		/** Output only. Contact information for the seller. */
		sellerContacts?: Array<Contact>;

		/** Output only. Indicates the state of the proposal. */
		state?: ProposalState | null;

		/** Output only. The terms and conditions associated with this proposal. Accepting a proposal implies acceptance of this field. This is created by the seller, the buyer can only view it. */
		termsAndConditions?: string | null;

		/** Output only. The time when the proposal was last revised. */
		updateTime?: string | null;
	}

	/** Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer. */
	export interface ProposalFormProperties {

		/** Output only. When the client field is populated, this field refers to the buyer who creates and manages the client buyer and gets billed on behalf of the client buyer; when the buyer field is populated, this field is the same value as buyer. Format : `buyers/{buyerAccountId}` */
		billedBuyer: FormControl<string | null | undefined>,

		/** Output only. Refers to a buyer in The Realtime-bidding API. Format: `buyers/{buyerAccountId}` */
		buyer: FormControl<string | null | undefined>,

		/** Output only. Refers to a Client. Format: `buyers/{buyerAccountId}/clients/{clientAccountid}` */
		client: FormControl<string | null | undefined>,

		/** Output only. Type of deal the proposal contains. */
		dealType: FormControl<DealDealType | null | undefined>,

		/** Output only. The descriptive name for the proposal. Maximum length of 255 unicode characters is allowed. Control characters are not allowed. Buyers cannot update this field. Note: Not to be confused with name, which is a unique identifier of the proposal. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. True if the proposal was previously finalized and is now being renegotiated. */
		isRenegotiating: FormControl<boolean | null | undefined>,

		/** Output only. The role of the last user that either updated the proposal or left a comment. */
		lastUpdaterOrCommentorRole: FormControl<NoteCreatorRole | null | undefined>,

		/** Immutable. The name of the proposal serving as a unique identifier. Format: buyers/{accountId}/proposals/{proposalId} */
		name: FormControl<string | null | undefined>,

		/** Output only. Indicates whether the buyer/seller created the proposal. */
		originatorRole: FormControl<NoteCreatorRole | null | undefined>,

		/** Whether pausing is allowed for the proposal. This is a negotiable term between buyers and publishers. */
		pausingConsented: FormControl<boolean | null | undefined>,

		/** Output only. The revision number for the proposal. Each update to the proposal or deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made. */
		proposalRevision: FormControl<string | null | undefined>,

		/** Immutable. Reference to the seller on the proposal. Format: `buyers/{buyerAccountId}/publisherProfiles/{publisherProfileId}` Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error. */
		publisherProfile: FormControl<string | null | undefined>,

		/** Output only. Indicates the state of the proposal. */
		state: FormControl<ProposalState | null | undefined>,

		/** Output only. The terms and conditions associated with this proposal. Accepting a proposal implies acceptance of this field. This is created by the seller, the buyer can only view it. */
		termsAndConditions: FormControl<string | null | undefined>,

		/** Output only. The time when the proposal was last revised. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateProposalFormGroup() {
		return new FormGroup<ProposalFormProperties>({
			billedBuyer: new FormControl<string | null | undefined>(undefined),
			buyer: new FormControl<string | null | undefined>(undefined),
			client: new FormControl<string | null | undefined>(undefined),
			dealType: new FormControl<DealDealType | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isRenegotiating: new FormControl<boolean | null | undefined>(undefined),
			lastUpdaterOrCommentorRole: new FormControl<NoteCreatorRole | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			originatorRole: new FormControl<NoteCreatorRole | null | undefined>(undefined),
			pausingConsented: new FormControl<boolean | null | undefined>(undefined),
			proposalRevision: new FormControl<string | null | undefined>(undefined),
			publisherProfile: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ProposalState | null | undefined>(undefined),
			termsAndConditions: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Buyers are allowed to store certain types of private data in a proposal or deal. */
	export interface PrivateData {

		/** A buyer specified reference ID. This can be queried in the list operations (max-length: 1024 unicode code units). */
		referenceId?: string | null;
	}

	/** Buyers are allowed to store certain types of private data in a proposal or deal. */
	export interface PrivateDataFormProperties {

		/** A buyer specified reference ID. This can be queried in the list operations (max-length: 1024 unicode code units). */
		referenceId: FormControl<string | null | undefined>,
	}
	export function CreatePrivateDataFormGroup() {
		return new FormGroup<PrivateDataFormProperties>({
			referenceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProposalState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', BUYER_REVIEW_REQUESTED = 'BUYER_REVIEW_REQUESTED', SELLER_REVIEW_REQUESTED = 'SELLER_REVIEW_REQUESTED', BUYER_ACCEPTANCE_REQUESTED = 'BUYER_ACCEPTANCE_REQUESTED', FINALIZED = 'FINALIZED', TERMINATED = 'TERMINATED' }


	/** Response message for profiles visible to the buyer. */
	export interface ListPublisherProfilesResponse {

		/** Token to fetch the next page of results. */
		nextPageToken?: string | null;

		/** The list of matching publisher profiles. */
		publisherProfiles?: Array<PublisherProfile>;
	}

	/** Response message for profiles visible to the buyer. */
	export interface ListPublisherProfilesResponseFormProperties {

		/** Token to fetch the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPublisherProfilesResponseFormGroup() {
		return new FormGroup<ListPublisherProfilesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The values in the publisher profile are supplied by the publisher. All fields are not filterable unless stated otherwise. */
	export interface PublisherProfile {

		/** Description on the publisher's audience. */
		audienceDescription?: string | null;

		/** Contact information for direct reservation deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses. */
		directDealsContact?: string | null;

		/** Display name of the publisher profile. Can be used to filter the response of the publisherProfiles.list method. */
		displayName?: string | null;

		/** The list of domains represented in this publisher profile. Empty if this is a parent profile. These are top private domains, meaning that these will not contain a string like "photos.google.co.uk/123", but will instead contain "google.co.uk". Can be used to filter the response of the publisherProfiles.list method. */
		domains?: Array<string>;

		/** Indicates if this profile is the parent profile of the seller. A parent profile represents all the inventory from the seller, as opposed to child profile that is created to brand a portion of inventory. One seller has only one parent publisher profile, and can have multiple child profiles. See https://support.google.com/admanager/answer/6035806 for details. Can be used to filter the response of the publisherProfiles.list method by setting the filter to "is_parent: true". */
		isParent?: boolean | null;

		/** A Google public URL to the logo for this publisher profile. The logo is stored as a PNG, JPG, or GIF image. */
		logoUrl?: string | null;

		/** URL to additional marketing and sales materials. */
		mediaKitUrl?: string | null;

		/** The list of apps represented in this publisher profile. Empty if this is a parent profile. */
		mobileApps?: Array<PublisherProfileMobileApplication>;

		/** Name of the publisher profile. Format: `buyers/{buyer}/publisherProfiles/{publisher_profile}` */
		name?: string | null;

		/** Overview of the publisher. */
		overview?: string | null;

		/** Statement explaining what's unique about publisher's business, and why buyers should partner with the publisher. */
		pitchStatement?: string | null;

		/** Contact information for programmatic deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses. */
		programmaticDealsContact?: string | null;

		/** A unique identifying code for the seller. This value is the same for all of the seller's parent and child publisher profiles. Can be used to filter the response of the publisherProfiles.list method. */
		publisherCode?: string | null;

		/** URL to a sample content page. */
		samplePageUrl?: string | null;

		/** Up to three key metrics and rankings. For example, "#1 Mobile News Site for 20 Straight Months". */
		topHeadlines?: Array<string>;
	}

	/** The values in the publisher profile are supplied by the publisher. All fields are not filterable unless stated otherwise. */
	export interface PublisherProfileFormProperties {

		/** Description on the publisher's audience. */
		audienceDescription: FormControl<string | null | undefined>,

		/** Contact information for direct reservation deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses. */
		directDealsContact: FormControl<string | null | undefined>,

		/** Display name of the publisher profile. Can be used to filter the response of the publisherProfiles.list method. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates if this profile is the parent profile of the seller. A parent profile represents all the inventory from the seller, as opposed to child profile that is created to brand a portion of inventory. One seller has only one parent publisher profile, and can have multiple child profiles. See https://support.google.com/admanager/answer/6035806 for details. Can be used to filter the response of the publisherProfiles.list method by setting the filter to "is_parent: true". */
		isParent: FormControl<boolean | null | undefined>,

		/** A Google public URL to the logo for this publisher profile. The logo is stored as a PNG, JPG, or GIF image. */
		logoUrl: FormControl<string | null | undefined>,

		/** URL to additional marketing and sales materials. */
		mediaKitUrl: FormControl<string | null | undefined>,

		/** Name of the publisher profile. Format: `buyers/{buyer}/publisherProfiles/{publisher_profile}` */
		name: FormControl<string | null | undefined>,

		/** Overview of the publisher. */
		overview: FormControl<string | null | undefined>,

		/** Statement explaining what's unique about publisher's business, and why buyers should partner with the publisher. */
		pitchStatement: FormControl<string | null | undefined>,

		/** Contact information for programmatic deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses. */
		programmaticDealsContact: FormControl<string | null | undefined>,

		/** A unique identifying code for the seller. This value is the same for all of the seller's parent and child publisher profiles. Can be used to filter the response of the publisherProfiles.list method. */
		publisherCode: FormControl<string | null | undefined>,

		/** URL to a sample content page. */
		samplePageUrl: FormControl<string | null | undefined>,
	}
	export function CreatePublisherProfileFormGroup() {
		return new FormGroup<PublisherProfileFormProperties>({
			audienceDescription: new FormControl<string | null | undefined>(undefined),
			directDealsContact: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isParent: new FormControl<boolean | null | undefined>(undefined),
			logoUrl: new FormControl<string | null | undefined>(undefined),
			mediaKitUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			overview: new FormControl<string | null | undefined>(undefined),
			pitchStatement: new FormControl<string | null | undefined>(undefined),
			programmaticDealsContact: new FormControl<string | null | undefined>(undefined),
			publisherCode: new FormControl<string | null | undefined>(undefined),
			samplePageUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A mobile application that contains a external app ID, name, and app store. */
	export interface PublisherProfileMobileApplication {

		/** The app store the app belongs to. Can be used to filter the response of the publisherProfiles.list method. */
		appStore?: PublisherProfileMobileApplicationAppStore | null;

		/** The external ID for the app from its app store. Can be used to filter the response of the publisherProfiles.list method. */
		externalAppId?: string | null;

		/** The name of the app. */
		name?: string | null;
	}

	/** A mobile application that contains a external app ID, name, and app store. */
	export interface PublisherProfileMobileApplicationFormProperties {

		/** The app store the app belongs to. Can be used to filter the response of the publisherProfiles.list method. */
		appStore: FormControl<PublisherProfileMobileApplicationAppStore | null | undefined>,

		/** The external ID for the app from its app store. Can be used to filter the response of the publisherProfiles.list method. */
		externalAppId: FormControl<string | null | undefined>,

		/** The name of the app. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePublisherProfileMobileApplicationFormGroup() {
		return new FormGroup<PublisherProfileMobileApplicationFormProperties>({
			appStore: new FormControl<PublisherProfileMobileApplicationAppStore | null | undefined>(undefined),
			externalAppId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PublisherProfileMobileApplicationAppStore { APP_STORE_TYPE_UNSPECIFIED = 'APP_STORE_TYPE_UNSPECIFIED', APPLE_ITUNES = 'APPLE_ITUNES', GOOGLE_PLAY = 'GOOGLE_PLAY', ROKU = 'ROKU', AMAZON_FIRE_TV = 'AMAZON_FIRE_TV', PLAYSTATION = 'PLAYSTATION', XBOX = 'XBOX', SAMSUNG_TV = 'SAMSUNG_TV', AMAZON = 'AMAZON', OPPO = 'OPPO', SAMSUNG = 'SAMSUNG', VIVO = 'VIVO', XIAOMI = 'XIAOMI', LG_TV = 'LG_TV' }


	/** Request message for pausing a finalized deal. */
	export interface PauseFinalizedDealRequest {

		/** The reason to pause the finalized deal, will be displayed to the seller. Maximum length is 1000 characters. */
		reason?: string | null;
	}

	/** Request message for pausing a finalized deal. */
	export interface PauseFinalizedDealRequestFormProperties {

		/** The reason to pause the finalized deal, will be displayed to the seller. Maximum length is 1000 characters. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreatePauseFinalizedDealRequestFormGroup() {
		return new FormGroup<PauseFinalizedDealRequestFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for resuming a finalized deal. */
	export interface ResumeFinalizedDealRequest {
	}

	/** Request message for resuming a finalized deal. */
	export interface ResumeFinalizedDealRequestFormProperties {
	}
	export function CreateResumeFinalizedDealRequestFormGroup() {
		return new FormGroup<ResumeFinalizedDealRequestFormProperties>({
		});

	}


	/** Request to send an RFP. All fields in this request are proposed to publisher and subject to changes by publisher during later negotiation. */
	export interface SendRfpRequest {

		/** Contact information for the buyer. */
		buyerContacts?: Array<Contact>;

		/** If the current buyer is sending the RFP on behalf of its client, use this field to specify the name of the client in the format: `buyers/{accountId}/clients/{clientAccountid}`. */
		client?: string | null;

		/** Required. The display name of the proposal being created by this RFP. */
		displayName?: string | null;

		/** Represents an amount of money with its currency type. */
		estimatedGrossSpend?: Money;

		/** Required. Proposed flight end time of the RFP. A timestamp in RFC3339 UTC "Zulu" format. Note that the specified value will be truncated to a granularity of one second. */
		flightEndTime?: string | null;

		/** Required. Proposed flight start time of the RFP. A timestamp in RFC3339 UTC "Zulu" format. Note that the specified value will be truncated to a granularity of one second. */
		flightStartTime?: string | null;

		/** Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax. */
		geoTargeting?: CriteriaTargeting;

		/** Represents the size of an ad unit that can be targeted on a bid request. */
		inventorySizeTargeting?: InventorySizeTargeting;

		/** A message that is sent to the publisher. Maximum length is 1024 characters. */
		note?: string | null;

		/** Pricing terms for Preferred Deals. */
		preferredDealTerms?: PreferredDealTerms;

		/** Pricing terms for Programmatic Guaranteed Deals. */
		programmaticGuaranteedTerms?: ProgrammaticGuaranteedTerms;

		/** Required. The profile of the publisher who will receive this RFP in the format: `buyers/{accountId}/publisherProfiles/{publisherProfileId}`. */
		publisherProfile?: string | null;
	}

	/** Request to send an RFP. All fields in this request are proposed to publisher and subject to changes by publisher during later negotiation. */
	export interface SendRfpRequestFormProperties {

		/** If the current buyer is sending the RFP on behalf of its client, use this field to specify the name of the client in the format: `buyers/{accountId}/clients/{clientAccountid}`. */
		client: FormControl<string | null | undefined>,

		/** Required. The display name of the proposal being created by this RFP. */
		displayName: FormControl<string | null | undefined>,

		/** Required. Proposed flight end time of the RFP. A timestamp in RFC3339 UTC "Zulu" format. Note that the specified value will be truncated to a granularity of one second. */
		flightEndTime: FormControl<string | null | undefined>,

		/** Required. Proposed flight start time of the RFP. A timestamp in RFC3339 UTC "Zulu" format. Note that the specified value will be truncated to a granularity of one second. */
		flightStartTime: FormControl<string | null | undefined>,

		/** A message that is sent to the publisher. Maximum length is 1024 characters. */
		note: FormControl<string | null | undefined>,

		/** Required. The profile of the publisher who will receive this RFP in the format: `buyers/{accountId}/publisherProfiles/{publisherProfileId}`. */
		publisherProfile: FormControl<string | null | undefined>,
	}
	export function CreateSendRfpRequestFormGroup() {
		return new FormGroup<SendRfpRequestFormProperties>({
			client: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			flightEndTime: new FormControl<string | null | undefined>(undefined),
			flightStartTime: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			publisherProfile: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for setting ready to serve for a finalized deal. */
	export interface SetReadyToServeRequest {
	}

	/** Request message for setting ready to serve for a finalized deal. */
	export interface SetReadyToServeRequestFormProperties {
	}
	export function CreateSetReadyToServeRequestFormGroup() {
		return new FormGroup<SetReadyToServeRequestFormProperties>({
		});

	}


	/** Request message for SubscribeAuctionPackage. */
	export interface SubscribeAuctionPackageRequest {
	}

	/** Request message for SubscribeAuctionPackage. */
	export interface SubscribeAuctionPackageRequestFormProperties {
	}
	export function CreateSubscribeAuctionPackageRequestFormGroup() {
		return new FormGroup<SubscribeAuctionPackageRequestFormProperties>({
		});

	}


	/** Request message for SubscribeAuctionPackageClients. */
	export interface SubscribeClientsRequest {

		/** Optional. A list of client buyers to subscribe to the auction package, with client buyer in the format `buyers/{accountId}/clients/{clientAccountId}`. The current buyer will be subscribed to the auction package regardless of the list contents if not already. */
		clients?: Array<string>;
	}

	/** Request message for SubscribeAuctionPackageClients. */
	export interface SubscribeClientsRequestFormProperties {
	}
	export function CreateSubscribeClientsRequestFormGroup() {
		return new FormGroup<SubscribeClientsRequestFormProperties>({
		});

	}


	/** Request message for UnsubscribeAuctionPackage. */
	export interface UnsubscribeAuctionPackageRequest {
	}

	/** Request message for UnsubscribeAuctionPackage. */
	export interface UnsubscribeAuctionPackageRequestFormProperties {
	}
	export function CreateUnsubscribeAuctionPackageRequestFormGroup() {
		return new FormGroup<UnsubscribeAuctionPackageRequestFormProperties>({
		});

	}


	/** Request message for UnsubscribeAuctionPackage. */
	export interface UnsubscribeClientsRequest {

		/** Optional. A list of client buyers to unsubscribe from the auction package, with client buyer in the format `buyers/{accountId}/clients/{clientAccountId}`. */
		clients?: Array<string>;
	}

	/** Request message for UnsubscribeAuctionPackage. */
	export interface UnsubscribeClientsRequestFormProperties {
	}
	export function CreateUnsubscribeClientsRequestFormGroup() {
		return new FormGroup<UnsubscribeClientsRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Subscribe the specified clients of the buyer to the auction package. If a client in the list does not belong to the buyer, an error response will be returned, and all of the following clients in the list will not be subscribed. Subscribing an already subscribed client will have no effect.
		 * Post v1/{auctionPackage}:subscribeClients
		 * @param {string} auctionPackage Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`
		 * @return {AuctionPackage} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_auctionPackages_subscribeClients(auctionPackage: string, requestBody: SubscribeClientsRequest): Observable<AuctionPackage> {
			return this.http.post<AuctionPackage>(this.baseUri + 'v1/' + (auctionPackage == null ? '' : encodeURIComponent(auctionPackage)) + ':subscribeClients', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unsubscribe from the auction package for the specified clients of the buyer. Unsubscribing a client that is not subscribed will have no effect.
		 * Post v1/{auctionPackage}:unsubscribeClients
		 * @param {string} auctionPackage Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`
		 * @return {AuctionPackage} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_auctionPackages_unsubscribeClients(auctionPackage: string, requestBody: UnsubscribeClientsRequest): Observable<AuctionPackage> {
			return this.http.post<AuctionPackage>(this.baseUri + 'v1/' + (auctionPackage == null ? '' : encodeURIComponent(auctionPackage)) + ':unsubscribeClients', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sends a request for proposal (RFP) to a publisher to initiate the negotiation regarding certain inventory. In the RFP, buyers can specify the deal type, deal terms, start and end dates, targeting, and a message to the publisher. Once the RFP is sent, a proposal in `SELLER_REVIEW_REQUESTED` state will be created and returned in the response. The publisher may review your request and respond with detailed deals in the proposal.
		 * Post v1/{buyer}/proposals:sendRfp
		 * @param {string} buyer Required. The current buyer who is sending the RFP in the format: `buyers/{accountId}`.
		 * @return {Proposal} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_proposals_sendRfp(buyer: string, requestBody: SendRfpRequest): Observable<Proposal> {
			return this.http.post<Proposal>(this.baseUri + 'v1/' + (buyer == null ? '' : encodeURIComponent(buyer)) + '/proposals:sendRfp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add creative to be used in the bidding process for a finalized deal. For programmatic guaranteed deals, it's recommended that you associate at least one approved creative with the deal before calling SetReadyToServe, to help reduce the number of bid responses filtered because they don't contain approved creatives. Creatives successfully added to a deal can be found in the Realtime-bidding Creatives API creative.deal_ids. This method only applies to programmatic guaranteed deals. Maximum number of 1000 creatives can be added to a finalized deal.
		 * Post v1/{deal}:addCreative
		 * @param {string} deal Required. Name of the finalized deal in the format of: `buyers/{accountId}/finalizedDeals/{dealId}`
		 * @return {FinalizedDeal} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_finalizedDeals_addCreative(deal: string, requestBody: AddCreativeRequest): Observable<FinalizedDeal> {
			return this.http.post<FinalizedDeal>(this.baseUri + 'v1/' + (deal == null ? '' : encodeURIComponent(deal)) + ':addCreative', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. This method only applies to programmatic guaranteed deals.
		 * Post v1/{deal}:setReadyToServe
		 * @param {string} deal Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}`
		 * @return {FinalizedDeal} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_finalizedDeals_setReadyToServe(deal: string, requestBody: SetReadyToServeRequest): Observable<FinalizedDeal> {
			return this.http.post<FinalizedDeal>(this.baseUri + 'v1/' + (deal == null ? '' : encodeURIComponent(deal)) + ':setReadyToServe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing client user. The client user will lose access to the Authorized Buyers UI. Note that if a client user is deleted, the user's access to the UI can't be restored unless a new client user is created and activated.
		 * Delete v1/{name}
		 * @param {string} name Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}`
		 * @return {Empty} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_clients_users_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the requested publisher profile by name.
		 * Get v1/{name}
		 * @param {string} name Required. Name of the publisher profile. Format: `buyers/{buyerId}/publisherProfiles/{publisherProfileId}`
		 * @return {PublisherProfile} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_publisherProfiles_get(name: string): Observable<PublisherProfile> {
			return this.http.get<PublisherProfile>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the given deal at the buyer known revision number. If the server revision has advanced since the passed-in proposal.proposal_revision an ABORTED error message will be returned. The revision number is incremented by the server whenever the proposal or its constituent deals are updated. Note: The revision number is kept at a proposal level. The buyer of the API is expected to keep track of the revision number after the last update operation and send it in as part of the next update request. This way, if there are further changes on the server (for example, seller making new updates), then the server can detect conflicts and reject the proposed changes.
		 * Patch v1/{name}
		 * @param {string} name Immutable. The unique identifier of the deal. Auto-generated by the server when a deal is created. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId}
		 * @param {string} updateMask List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
		 * @return {Deal} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_proposals_deals_patch(name: string, updateMask: string | null | undefined, requestBody: Deal): Observable<Deal> {
			return this.http.patch<Deal>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Accepts the proposal at the given revision number. If the revision number in the request is behind the latest from the server, an error message will be returned. This call updates the Proposal.state from `BUYER_ACCEPTANCE_REQUESTED` to `FINALIZED`; it has no side effect if the Proposal.state is already `FINALIZED` and throws exception if the Proposal.state is not either `BUYER_ACCEPTANCE_REQUESTED` or `FINALIZED`. Accepting a proposal means the buyer understands and accepts the Proposal.terms_and_conditions proposed by the seller.
		 * Post v1/{name}:accept
		 * @param {string} name Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}`
		 * @return {Proposal} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_proposals_accept(name: string, requestBody: AcceptProposalRequest): Observable<Proposal> {
			return this.http.post<Proposal>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':accept', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activates an existing client user. The state of the client user will be updated from "INACTIVE" to "ACTIVE". This method has no effect if the client user is already in "ACTIVE" state. An error will be returned if the client user to activate is still in "INVITED" state.
		 * Post v1/{name}:activate
		 * @param {string} name Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}`
		 * @return {ClientUser} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_clients_users_activate(name: string, requestBody: ActivateClientUserRequest): Observable<ClientUser> {
			return this.http.post<ClientUser>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':activate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deactivates an existing client user. The state of the client user will be updated from "ACTIVE" to "INACTIVE". This method has no effect if the client user is already in "INACTIVE" state. An error will be returned if the client user to deactivate is still in "INVITED" state.
		 * Post v1/{name}:deactivate
		 * @param {string} name Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}`
		 * @return {ClientUser} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_clients_users_deactivate(name: string, requestBody: DeactivateClientUserRequest): Observable<ClientUser> {
			return this.http.post<ClientUser>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':deactivate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Pauses serving of the given finalized deal. This call only pauses the serving status, and does not affect other fields of the finalized deal. Calling this method for an already paused deal has no effect. This method only applies to programmatic guaranteed deals.
		 * Post v1/{name}:pause
		 * @param {string} name Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}`
		 * @return {FinalizedDeal} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_finalizedDeals_pause(name: string, requestBody: PauseFinalizedDealRequest): Observable<FinalizedDeal> {
			return this.http.post<FinalizedDeal>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':pause', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resumes serving of the given finalized deal. Calling this method for an running deal has no effect. If a deal is initially paused by the seller, calling this method will not resume serving of the deal until the seller also resumes the deal. This method only applies to programmatic guaranteed deals.
		 * Post v1/{name}:resume
		 * @param {string} name Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}`
		 * @return {FinalizedDeal} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_finalizedDeals_resume(name: string, requestBody: ResumeFinalizedDealRequest): Observable<FinalizedDeal> {
			return this.http.post<FinalizedDeal>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':resume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Subscribe to the auction package for the specified buyer. Once subscribed, the bidder will receive a call out for inventory matching the auction package targeting criteria with the auction package deal ID and the specified buyer.
		 * Post v1/{name}:subscribe
		 * @param {string} name Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`
		 * @return {AuctionPackage} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_auctionPackages_subscribe(name: string, requestBody: SubscribeAuctionPackageRequest): Observable<AuctionPackage> {
			return this.http.post<AuctionPackage>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':subscribe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unsubscribe from the auction package for the specified buyer. Once unsubscribed, the bidder will no longer receive a call out for the auction package deal ID and the specified buyer.
		 * Post v1/{name}:unsubscribe
		 * @param {string} name Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`
		 * @return {AuctionPackage} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_auctionPackages_unsubscribe(name: string, requestBody: UnsubscribeAuctionPackageRequest): Observable<AuctionPackage> {
			return this.http.post<AuctionPackage>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':unsubscribe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the auction packages subscribed by a buyer and its clients.
		 * Get v1/{parent}/auctionPackages
		 * @param {string} parent Required. Name of the parent buyer that can access the auction package. Format: `buyers/{accountId}`
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. Max allowed page size is 500.
		 * @param {string} pageToken The page token as returned. ListAuctionPackagesResponse.nextPageToken
		 * @return {ListAuctionPackagesResponse} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_auctionPackages_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAuctionPackagesResponse> {
			return this.http.get<ListAuctionPackagesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/auctionPackages&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists all the clients for the current buyer.
		 * Get v1/{parent}/clients
		 * @param {string} parent Required. The name of the buyer. Format: `buyers/{accountId}`
		 * @param {string} filter Query string using the [Filtering Syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported fields for filtering are: * partnerClientId Use this field to filter the clients by the partnerClientId. For example, if the partnerClientId of the client is "1234", the value of this field should be `partnerClientId = "1234"`, in order to get only the client whose partnerClientId is "1234" in the response.
		 * @param {number} pageSize Requested page size. If left blank, a default page size of 500 will be applied.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the list method.
		 * @return {ListClientsResponse} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_clients_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListClientsResponse> {
			return this.http.get<ListClientsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clients&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new client.
		 * Post v1/{parent}/clients
		 * @param {string} parent Required. The name of the buyer. Format: `buyers/{accountId}`
		 * @return {Client} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_clients_create(parent: string, requestBody: Client): Observable<Client> {
			return this.http.post<Client>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clients', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all deals in a proposal. To retrieve only the finalized revision deals regardless if a deal is being renegotiated, see the FinalizedDeals resource.
		 * Get v1/{parent}/deals
		 * @param {string} parent Required. The name of the proposal containing the deals to retrieve. Format: buyers/{accountId}/proposals/{proposalId}
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.
		 * @param {string} pageToken The page token as returned from ListDealsResponse.
		 * @return {ListDealsResponse} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_proposals_deals_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDealsResponse> {
			return this.http.get<ListDealsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/deals&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Batch updates multiple deals in the same proposal.
		 * Post v1/{parent}/deals:batchUpdate
		 * @param {string} parent Required. The name of the proposal containing the deals to batch update. Format: buyers/{accountId}/proposals/{proposalId}
		 * @return {BatchUpdateDealsResponse} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_proposals_deals_batchUpdate(parent: string, requestBody: BatchUpdateDealsRequest): Observable<BatchUpdateDealsResponse> {
			return this.http.post<BatchUpdateDealsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/deals:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists finalized deals. Use the URL path "/v1/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.
		 * Get v1/{parent}/finalizedDeals
		 * @param {string} parent Required. The buyer to list the finalized deals for, in the format: `buyers/{accountId}`. When used to list finalized deals for a bidder, its buyers and clients, in the format `bidders/{accountId}`.
		 * @param {string} filter Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported columns for filtering are: * deal.displayName * deal.dealType * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * dealServingStatus
		 * @param {string} orderBy An optional query string to sort finalized deals using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Supported columns for sorting are: * deal.displayName * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * rtbMetrics.bidRequests7Days * rtbMetrics.bids7Days * rtbMetrics.adImpressions7Days * rtbMetrics.bidRate7Days * rtbMetrics.filteredBidRate7Days * rtbMetrics.mustBidRateCurrentMonth Example: 'deal.displayName, deal.updateTime desc'
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.
		 * @param {string} pageToken The page token as returned from ListFinalizedDealsResponse.
		 * @return {ListFinalizedDealsResponse} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_finalizedDeals_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListFinalizedDealsResponse> {
			return this.http.get<ListFinalizedDealsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/finalizedDeals&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists proposals. A filter expression using [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) may be specified to filter the results.
		 * Get v1/{parent}/proposals
		 * @param {string} parent Required. Parent that owns the collection of proposals Format: `buyers/{accountId}`
		 * @param {string} filter Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported columns for filtering are: * displayName * dealType * updateTime * state
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will put a size of 500.
		 * @param {string} pageToken The page token as returned from ListProposalsResponse.
		 * @return {ListProposalsResponse} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_proposals_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListProposalsResponse> {
			return this.http.get<ListProposalsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/proposals&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists publisher profiles. The returned publisher profiles aren't in any defined order. The order of the results might change. A new publisher profile can appear in any place in the list of returned results.
		 * Get v1/{parent}/publisherProfiles
		 * @param {string} parent Required. Parent that owns the collection of publisher profiles Format: `buyers/{buyerId}`
		 * @param {string} filter Optional query string using the [Cloud API list filtering] (https://developers.google.com/authorized-buyers/apis/guides/list-filters) syntax.
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.
		 * @param {string} pageToken The page token as returned from a previous ListPublisherProfilesResponse.
		 * @return {ListPublisherProfilesResponse} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_publisherProfiles_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPublisherProfilesResponse> {
			return this.http.get<ListPublisherProfilesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/publisherProfiles&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists all client users for a specified client.
		 * Get v1/{parent}/users
		 * @param {string} parent Required. The name of the client. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}`
		 * @param {number} pageSize Requested page size. If left blank, a default page size of 500 will be applied.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the list method.
		 * @return {ListClientUsersResponse} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_clients_users_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListClientUsersResponse> {
			return this.http.get<ListClientUsersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/users&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new client user in "INVITED" state. An email invitation will be sent to the new user, once accepted the user will become active.
		 * Post v1/{parent}/users
		 * @param {string} parent Required. The name of the client. Format: `buyers/{accountId}/clients/{clientAccountId}`
		 * @return {ClientUser} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_clients_users_create(parent: string, requestBody: ClientUser): Observable<ClientUser> {
			return this.http.post<ClientUser>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a note for this proposal and sends to the seller.
		 * Post v1/{proposal}:addNote
		 * @param {string} proposal Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}`
		 * @return {Proposal} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_proposals_addNote(proposal: string, requestBody: AddNoteRequest): Observable<Proposal> {
			return this.http.post<Proposal>(this.baseUri + 'v1/' + (proposal == null ? '' : encodeURIComponent(proposal)) + ':addNote', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized. If the proposal has not been finalized before, calling this method will set the Proposal.state to `TERMINATED` and increment the Proposal.proposal_revision. If the proposal has been finalized before and is under renegotiation now, calling this method will reset the Proposal.state to `FINALIZED` and increment the Proposal.proposal_revision. This method does not support private auction proposals whose Proposal.deal_type is 'PRIVATE_AUCTION'.
		 * Post v1/{proposal}:cancelNegotiation
		 * @param {string} proposal Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}`
		 * @return {Proposal} Successful response
		 */
		Authorizedbuyersmarketplace_buyers_proposals_cancelNegotiation(proposal: string, requestBody: CancelNegotiationRequest): Observable<Proposal> {
			return this.http.post<Proposal>(this.baseUri + 'v1/' + (proposal == null ? '' : encodeURIComponent(proposal)) + ':cancelNegotiation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

