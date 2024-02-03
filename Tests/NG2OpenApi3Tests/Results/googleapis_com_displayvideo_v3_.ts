import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Configuration for custom Active View video viewability metrics. */
	export interface ActiveViewVideoViewabilityMetricConfig {

		/** Required. The display name of the custom metric. */
		displayName?: string | null;

		/** The minimum visible video duration required (in seconds) in order for an impression to be recorded. You must specify minimum_duration, minimum_quartile or both. If both are specified, an impression meets the metric criteria if either requirement is met (whichever happens first). */
		minimumDuration?: ActiveViewVideoViewabilityMetricConfigMinimumDuration | null;

		/** The minimum visible video duration required, based on the video quartiles, in order for an impression to be recorded. You must specify minimum_duration, minimum_quartile or both. If both are specified, an impression meets the metric criteria if either requirement is met (whichever happens first). */
		minimumQuartile?: ActiveViewVideoViewabilityMetricConfigMinimumQuartile | null;

		/** Required. The minimum percentage of the video ad's pixels visible on the screen in order for an impression to be recorded. */
		minimumViewability?: ActiveViewVideoViewabilityMetricConfigMinimumViewability | null;

		/** Required. The minimum percentage of the video ad's volume required in order for an impression to be recorded. */
		minimumVolume?: ActiveViewVideoViewabilityMetricConfigMinimumVolume | null;
	}

	/** Configuration for custom Active View video viewability metrics. */
	export interface ActiveViewVideoViewabilityMetricConfigFormProperties {

		/** Required. The display name of the custom metric. */
		displayName: FormControl<string | null | undefined>,

		/** The minimum visible video duration required (in seconds) in order for an impression to be recorded. You must specify minimum_duration, minimum_quartile or both. If both are specified, an impression meets the metric criteria if either requirement is met (whichever happens first). */
		minimumDuration: FormControl<ActiveViewVideoViewabilityMetricConfigMinimumDuration | null | undefined>,

		/** The minimum visible video duration required, based on the video quartiles, in order for an impression to be recorded. You must specify minimum_duration, minimum_quartile or both. If both are specified, an impression meets the metric criteria if either requirement is met (whichever happens first). */
		minimumQuartile: FormControl<ActiveViewVideoViewabilityMetricConfigMinimumQuartile | null | undefined>,

		/** Required. The minimum percentage of the video ad's pixels visible on the screen in order for an impression to be recorded. */
		minimumViewability: FormControl<ActiveViewVideoViewabilityMetricConfigMinimumViewability | null | undefined>,

		/** Required. The minimum percentage of the video ad's volume required in order for an impression to be recorded. */
		minimumVolume: FormControl<ActiveViewVideoViewabilityMetricConfigMinimumVolume | null | undefined>,
	}
	export function CreateActiveViewVideoViewabilityMetricConfigFormGroup() {
		return new FormGroup<ActiveViewVideoViewabilityMetricConfigFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			minimumDuration: new FormControl<ActiveViewVideoViewabilityMetricConfigMinimumDuration | null | undefined>(undefined),
			minimumQuartile: new FormControl<ActiveViewVideoViewabilityMetricConfigMinimumQuartile | null | undefined>(undefined),
			minimumViewability: new FormControl<ActiveViewVideoViewabilityMetricConfigMinimumViewability | null | undefined>(undefined),
			minimumVolume: new FormControl<ActiveViewVideoViewabilityMetricConfigMinimumVolume | null | undefined>(undefined),
		});

	}

	export enum ActiveViewVideoViewabilityMetricConfigMinimumDuration { VIDEO_DURATION_UNSPECIFIED = 'VIDEO_DURATION_UNSPECIFIED', VIDEO_DURATION_SECONDS_NONE = 'VIDEO_DURATION_SECONDS_NONE', VIDEO_DURATION_SECONDS_0 = 'VIDEO_DURATION_SECONDS_0', VIDEO_DURATION_SECONDS_1 = 'VIDEO_DURATION_SECONDS_1', VIDEO_DURATION_SECONDS_2 = 'VIDEO_DURATION_SECONDS_2', VIDEO_DURATION_SECONDS_3 = 'VIDEO_DURATION_SECONDS_3', VIDEO_DURATION_SECONDS_4 = 'VIDEO_DURATION_SECONDS_4', VIDEO_DURATION_SECONDS_5 = 'VIDEO_DURATION_SECONDS_5', VIDEO_DURATION_SECONDS_6 = 'VIDEO_DURATION_SECONDS_6', VIDEO_DURATION_SECONDS_7 = 'VIDEO_DURATION_SECONDS_7', VIDEO_DURATION_SECONDS_8 = 'VIDEO_DURATION_SECONDS_8', VIDEO_DURATION_SECONDS_9 = 'VIDEO_DURATION_SECONDS_9', VIDEO_DURATION_SECONDS_10 = 'VIDEO_DURATION_SECONDS_10', VIDEO_DURATION_SECONDS_11 = 'VIDEO_DURATION_SECONDS_11', VIDEO_DURATION_SECONDS_12 = 'VIDEO_DURATION_SECONDS_12', VIDEO_DURATION_SECONDS_13 = 'VIDEO_DURATION_SECONDS_13', VIDEO_DURATION_SECONDS_14 = 'VIDEO_DURATION_SECONDS_14', VIDEO_DURATION_SECONDS_15 = 'VIDEO_DURATION_SECONDS_15', VIDEO_DURATION_SECONDS_30 = 'VIDEO_DURATION_SECONDS_30', VIDEO_DURATION_SECONDS_45 = 'VIDEO_DURATION_SECONDS_45', VIDEO_DURATION_SECONDS_60 = 'VIDEO_DURATION_SECONDS_60' }

	export enum ActiveViewVideoViewabilityMetricConfigMinimumQuartile { VIDEO_DURATION_QUARTILE_UNSPECIFIED = 'VIDEO_DURATION_QUARTILE_UNSPECIFIED', VIDEO_DURATION_QUARTILE_NONE = 'VIDEO_DURATION_QUARTILE_NONE', VIDEO_DURATION_QUARTILE_FIRST = 'VIDEO_DURATION_QUARTILE_FIRST', VIDEO_DURATION_QUARTILE_SECOND = 'VIDEO_DURATION_QUARTILE_SECOND', VIDEO_DURATION_QUARTILE_THIRD = 'VIDEO_DURATION_QUARTILE_THIRD', VIDEO_DURATION_QUARTILE_FOURTH = 'VIDEO_DURATION_QUARTILE_FOURTH' }

	export enum ActiveViewVideoViewabilityMetricConfigMinimumViewability { VIEWABILITY_PERCENT_UNSPECIFIED = 'VIEWABILITY_PERCENT_UNSPECIFIED', VIEWABILITY_PERCENT_0 = 'VIEWABILITY_PERCENT_0', VIEWABILITY_PERCENT_25 = 'VIEWABILITY_PERCENT_25', VIEWABILITY_PERCENT_50 = 'VIEWABILITY_PERCENT_50', VIEWABILITY_PERCENT_75 = 'VIEWABILITY_PERCENT_75', VIEWABILITY_PERCENT_100 = 'VIEWABILITY_PERCENT_100' }

	export enum ActiveViewVideoViewabilityMetricConfigMinimumVolume { VIDEO_VOLUME_PERCENT_UNSPECIFIED = 'VIDEO_VOLUME_PERCENT_UNSPECIFIED', VIDEO_VOLUME_PERCENT_0 = 'VIDEO_VOLUME_PERCENT_0', VIDEO_VOLUME_PERCENT_10 = 'VIDEO_VOLUME_PERCENT_10' }


	/** A single ad group associated with a line item. */
	export interface AdGroup {

		/** The format of the ads in the ad group. */
		adGroupFormat?: AdGroupAdGroupFormat | null;

		/** The unique ID of the ad group. Assigned by the system. */
		adGroupId?: string | null;

		/** The unique ID of the advertiser the ad group belongs to. */
		advertiserId?: string | null;

		/** Settings that control the bid strategy. Bid strategy determines the bid price. */
		bidStrategy?: BiddingStrategy;

		/** The display name of the ad group. Must be UTF-8 encoded with a maximum size of 255 bytes. */
		displayName?: string | null;

		/** Controls whether or not the ad group can spend its budget and bid on inventory. If the ad group's parent line item is not active, the ad group can't spend its budget even if its own status is `ENTITY_STATUS_ACTIVE`. */
		entityStatus?: AdGroupEntityStatus | null;

		/** The unique ID of the line item that the ad group belongs to. */
		lineItemId?: string | null;

		/** The resource name of the ad group. */
		name?: string | null;

		/** The details of product feed. */
		productFeedData?: ProductFeedData;

		/** Settings that control the [optimized targeting](//support.google.com/displayvideo/answer/12060859) settings of the line item. */
		targetingExpansion?: TargetingExpansionConfig;
	}

	/** A single ad group associated with a line item. */
	export interface AdGroupFormProperties {

		/** The format of the ads in the ad group. */
		adGroupFormat: FormControl<AdGroupAdGroupFormat | null | undefined>,

		/** The unique ID of the ad group. Assigned by the system. */
		adGroupId: FormControl<string | null | undefined>,

		/** The unique ID of the advertiser the ad group belongs to. */
		advertiserId: FormControl<string | null | undefined>,

		/** The display name of the ad group. Must be UTF-8 encoded with a maximum size of 255 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Controls whether or not the ad group can spend its budget and bid on inventory. If the ad group's parent line item is not active, the ad group can't spend its budget even if its own status is `ENTITY_STATUS_ACTIVE`. */
		entityStatus: FormControl<AdGroupEntityStatus | null | undefined>,

		/** The unique ID of the line item that the ad group belongs to. */
		lineItemId: FormControl<string | null | undefined>,

		/** The resource name of the ad group. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAdGroupFormGroup() {
		return new FormGroup<AdGroupFormProperties>({
			adGroupFormat: new FormControl<AdGroupAdGroupFormat | null | undefined>(undefined),
			adGroupId: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			entityStatus: new FormControl<AdGroupEntityStatus | null | undefined>(undefined),
			lineItemId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AdGroupAdGroupFormat { AD_GROUP_FORMAT_UNSPECIFIED = 'AD_GROUP_FORMAT_UNSPECIFIED', AD_GROUP_FORMAT_IN_STREAM = 'AD_GROUP_FORMAT_IN_STREAM', AD_GROUP_FORMAT_VIDEO_DISCOVERY = 'AD_GROUP_FORMAT_VIDEO_DISCOVERY', AD_GROUP_FORMAT_BUMPER = 'AD_GROUP_FORMAT_BUMPER', AD_GROUP_FORMAT_NON_SKIPPABLE_IN_STREAM = 'AD_GROUP_FORMAT_NON_SKIPPABLE_IN_STREAM', AD_GROUP_FORMAT_AUDIO = 'AD_GROUP_FORMAT_AUDIO', AD_GROUP_FORMAT_RESPONSIVE = 'AD_GROUP_FORMAT_RESPONSIVE', AD_GROUP_FORMAT_REACH = 'AD_GROUP_FORMAT_REACH', AD_GROUP_FORMAT_MASTHEAD = 'AD_GROUP_FORMAT_MASTHEAD' }


	/** Settings that control the bid strategy. Bid strategy determines the bid price. */
	export interface BiddingStrategy {

		/** A strategy that uses a fixed bidding price. */
		fixedBid?: FixedBidStrategy;

		/** A strategy that automatically adjusts the bid to optimize a specified performance goal while spending the full budget. */
		maximizeSpendAutoBid?: MaximizeSpendBidStrategy;

		/** A strategy that automatically adjusts the bid to meet or beat a specified performance goal. */
		performanceGoalAutoBid?: PerformanceGoalBidStrategy;

		/** Settings that control the bid strategy for YouTube and Partners resources. */
		youtubeAndPartnersBid?: YoutubeAndPartnersBiddingStrategy;
	}

	/** Settings that control the bid strategy. Bid strategy determines the bid price. */
	export interface BiddingStrategyFormProperties {
	}
	export function CreateBiddingStrategyFormGroup() {
		return new FormGroup<BiddingStrategyFormProperties>({
		});

	}


	/** A strategy that uses a fixed bidding price. */
	export interface FixedBidStrategy {

		/** The fixed bid amount, in micros of the advertiser's currency. For insertion order entity, bid_amount_micros should be set as 0. For line item entity, bid_amount_micros must be greater than or equal to billable unit of the given currency and smaller than or equal to the upper limit 1000000000. For example, 1500000 represents 1.5 standard units of the currency. */
		bidAmountMicros?: string | null;
	}

	/** A strategy that uses a fixed bidding price. */
	export interface FixedBidStrategyFormProperties {

		/** The fixed bid amount, in micros of the advertiser's currency. For insertion order entity, bid_amount_micros should be set as 0. For line item entity, bid_amount_micros must be greater than or equal to billable unit of the given currency and smaller than or equal to the upper limit 1000000000. For example, 1500000 represents 1.5 standard units of the currency. */
		bidAmountMicros: FormControl<string | null | undefined>,
	}
	export function CreateFixedBidStrategyFormGroup() {
		return new FormGroup<FixedBidStrategyFormProperties>({
			bidAmountMicros: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A strategy that automatically adjusts the bid to optimize a specified performance goal while spending the full budget. */
	export interface MaximizeSpendBidStrategy {

		/** The ID of the Custom Bidding Algorithm used by this strategy. Only applicable when performance_goal_type is set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`. */
		customBiddingAlgorithmId?: string | null;

		/** The maximum average CPM that may be bid, in micros of the advertiser's currency. Must be greater than or equal to a billable unit of the given currency. For example, 1500000 represents 1.5 standard units of the currency. */
		maxAverageCpmBidAmountMicros?: string | null;

		/** Required. The type of the performance goal that the bidding strategy tries to minimize while spending the full budget. `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM` is not supported for this strategy. */
		performanceGoalType?: MaximizeSpendBidStrategyPerformanceGoalType | null;

		/** Whether the strategy takes deal floor prices into account. */
		raiseBidForDeals?: boolean | null;
	}

	/** A strategy that automatically adjusts the bid to optimize a specified performance goal while spending the full budget. */
	export interface MaximizeSpendBidStrategyFormProperties {

		/** The ID of the Custom Bidding Algorithm used by this strategy. Only applicable when performance_goal_type is set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`. */
		customBiddingAlgorithmId: FormControl<string | null | undefined>,

		/** The maximum average CPM that may be bid, in micros of the advertiser's currency. Must be greater than or equal to a billable unit of the given currency. For example, 1500000 represents 1.5 standard units of the currency. */
		maxAverageCpmBidAmountMicros: FormControl<string | null | undefined>,

		/** Required. The type of the performance goal that the bidding strategy tries to minimize while spending the full budget. `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM` is not supported for this strategy. */
		performanceGoalType: FormControl<MaximizeSpendBidStrategyPerformanceGoalType | null | undefined>,

		/** Whether the strategy takes deal floor prices into account. */
		raiseBidForDeals: FormControl<boolean | null | undefined>,
	}
	export function CreateMaximizeSpendBidStrategyFormGroup() {
		return new FormGroup<MaximizeSpendBidStrategyFormProperties>({
			customBiddingAlgorithmId: new FormControl<string | null | undefined>(undefined),
			maxAverageCpmBidAmountMicros: new FormControl<string | null | undefined>(undefined),
			performanceGoalType: new FormControl<MaximizeSpendBidStrategyPerformanceGoalType | null | undefined>(undefined),
			raiseBidForDeals: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum MaximizeSpendBidStrategyPerformanceGoalType { BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED = 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED', BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA = 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA', BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC = 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC', BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM = 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM', BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO = 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO', BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA = 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA', BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN = 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN', BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED = 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED' }


	/** A strategy that automatically adjusts the bid to meet or beat a specified performance goal. */
	export interface PerformanceGoalBidStrategy {

		/** The ID of the Custom Bidding Algorithm used by this strategy. Only applicable when performance_goal_type is set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`. */
		customBiddingAlgorithmId?: string | null;

		/** The maximum average CPM that may be bid, in micros of the advertiser's currency. Must be greater than or equal to a billable unit of the given currency. Not applicable when performance_goal_type is set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM`. For example, 1500000 represents 1.5 standard units of the currency. */
		maxAverageCpmBidAmountMicros?: string | null;

		/** Required. The performance goal the bidding strategy will attempt to meet or beat, in micros of the advertiser's currency or in micro of the ROAS (Return On Advertising Spend) value which is also based on advertiser's currency. Must be greater than or equal to a billable unit of the given currency and smaller or equal to upper bounds. Each performance_goal_type has its upper bound: * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA`, upper bound is 10000.00 USD. * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC`, upper bound is 1000.00 USD. * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM`, upper bound is 1000.00 USD. * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`, upper bound is 1000.00 and lower bound is 0.01. Example: If set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM`, the bid price will be based on the probability that each available impression will be viewable. For example, if viewable CPM target is $2 and an impression is 40% likely to be viewable, the bid price will be $0.80 CPM (40% of $2). For example, 1500000 represents 1.5 standard units of the currency or ROAS value. */
		performanceGoalAmountMicros?: string | null;

		/** Required. The type of the performance goal that the bidding strategy will try to meet or beat. For line item level usage, the value must be one of: * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`. */
		performanceGoalType?: MaximizeSpendBidStrategyPerformanceGoalType | null;
	}

	/** A strategy that automatically adjusts the bid to meet or beat a specified performance goal. */
	export interface PerformanceGoalBidStrategyFormProperties {

		/** The ID of the Custom Bidding Algorithm used by this strategy. Only applicable when performance_goal_type is set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`. */
		customBiddingAlgorithmId: FormControl<string | null | undefined>,

		/** The maximum average CPM that may be bid, in micros of the advertiser's currency. Must be greater than or equal to a billable unit of the given currency. Not applicable when performance_goal_type is set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM`. For example, 1500000 represents 1.5 standard units of the currency. */
		maxAverageCpmBidAmountMicros: FormControl<string | null | undefined>,

		/** Required. The performance goal the bidding strategy will attempt to meet or beat, in micros of the advertiser's currency or in micro of the ROAS (Return On Advertising Spend) value which is also based on advertiser's currency. Must be greater than or equal to a billable unit of the given currency and smaller or equal to upper bounds. Each performance_goal_type has its upper bound: * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA`, upper bound is 10000.00 USD. * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC`, upper bound is 1000.00 USD. * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM`, upper bound is 1000.00 USD. * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`, upper bound is 1000.00 and lower bound is 0.01. Example: If set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM`, the bid price will be based on the probability that each available impression will be viewable. For example, if viewable CPM target is $2 and an impression is 40% likely to be viewable, the bid price will be $0.80 CPM (40% of $2). For example, 1500000 represents 1.5 standard units of the currency or ROAS value. */
		performanceGoalAmountMicros: FormControl<string | null | undefined>,

		/** Required. The type of the performance goal that the bidding strategy will try to meet or beat. For line item level usage, the value must be one of: * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`. */
		performanceGoalType: FormControl<MaximizeSpendBidStrategyPerformanceGoalType | null | undefined>,
	}
	export function CreatePerformanceGoalBidStrategyFormGroup() {
		return new FormGroup<PerformanceGoalBidStrategyFormProperties>({
			customBiddingAlgorithmId: new FormControl<string | null | undefined>(undefined),
			maxAverageCpmBidAmountMicros: new FormControl<string | null | undefined>(undefined),
			performanceGoalAmountMicros: new FormControl<string | null | undefined>(undefined),
			performanceGoalType: new FormControl<MaximizeSpendBidStrategyPerformanceGoalType | null | undefined>(undefined),
		});

	}


	/** Settings that control the bid strategy for YouTube and Partners resources. */
	export interface YoutubeAndPartnersBiddingStrategy {

		/** Output only. Source of the effective target CPA value for ad group. */
		adGroupEffectiveTargetCpaSource?: YoutubeAndPartnersBiddingStrategyAdGroupEffectiveTargetCpaSource | null;

		/** Output only. The effective target CPA for ad group, in micros of advertiser's currency. */
		adGroupEffectiveTargetCpaValue?: string | null;

		/** The type of the bidding strategy. */
		type?: YoutubeAndPartnersBiddingStrategyType | null;

		/** The value used by the bidding strategy. When the bidding strategy is assigned at the line item level, this field is only applicable for the following strategy types: * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS` When the bidding strategy is assigned at the ad group level, this field is only applicable for the following strategy types: * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS` If not using an applicable strategy, the value of this field will be 0. */
		value?: string | null;
	}

	/** Settings that control the bid strategy for YouTube and Partners resources. */
	export interface YoutubeAndPartnersBiddingStrategyFormProperties {

		/** Output only. Source of the effective target CPA value for ad group. */
		adGroupEffectiveTargetCpaSource: FormControl<YoutubeAndPartnersBiddingStrategyAdGroupEffectiveTargetCpaSource | null | undefined>,

		/** Output only. The effective target CPA for ad group, in micros of advertiser's currency. */
		adGroupEffectiveTargetCpaValue: FormControl<string | null | undefined>,

		/** The type of the bidding strategy. */
		type: FormControl<YoutubeAndPartnersBiddingStrategyType | null | undefined>,

		/** The value used by the bidding strategy. When the bidding strategy is assigned at the line item level, this field is only applicable for the following strategy types: * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS` When the bidding strategy is assigned at the ad group level, this field is only applicable for the following strategy types: * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS` If not using an applicable strategy, the value of this field will be 0. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateYoutubeAndPartnersBiddingStrategyFormGroup() {
		return new FormGroup<YoutubeAndPartnersBiddingStrategyFormProperties>({
			adGroupEffectiveTargetCpaSource: new FormControl<YoutubeAndPartnersBiddingStrategyAdGroupEffectiveTargetCpaSource | null | undefined>(undefined),
			adGroupEffectiveTargetCpaValue: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<YoutubeAndPartnersBiddingStrategyType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum YoutubeAndPartnersBiddingStrategyAdGroupEffectiveTargetCpaSource { BIDDING_SOURCE_UNSPECIFIED = 'BIDDING_SOURCE_UNSPECIFIED', BIDDING_SOURCE_LINE_ITEM = 'BIDDING_SOURCE_LINE_ITEM', BIDDING_SOURCE_AD_GROUP = 'BIDDING_SOURCE_AD_GROUP' }

	export enum YoutubeAndPartnersBiddingStrategyType { YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_UNSPECIFIED = 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_UNSPECIFIED', YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV = 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV', YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM = 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM', YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA = 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA', YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM = 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM', YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_LIFT = 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_LIFT', YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS = 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS', YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPV = 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPV', YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS = 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS', YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSION_VALUE = 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSION_VALUE' }

	export enum AdGroupEntityStatus { ENTITY_STATUS_UNSPECIFIED = 'ENTITY_STATUS_UNSPECIFIED', ENTITY_STATUS_ACTIVE = 'ENTITY_STATUS_ACTIVE', ENTITY_STATUS_ARCHIVED = 'ENTITY_STATUS_ARCHIVED', ENTITY_STATUS_DRAFT = 'ENTITY_STATUS_DRAFT', ENTITY_STATUS_PAUSED = 'ENTITY_STATUS_PAUSED', ENTITY_STATUS_SCHEDULED_FOR_DELETION = 'ENTITY_STATUS_SCHEDULED_FOR_DELETION' }


	/** The details of product feed. */
	export interface ProductFeedData {

		/** Whether the product feed has opted-out of showing products. */
		isFeedDisabled?: boolean | null;

		/** A list of dimensions used to match products. */
		productMatchDimensions?: Array<ProductMatchDimension>;

		/** How products are selected by the product feed. */
		productMatchType?: ProductFeedDataProductMatchType | null;
	}

	/** The details of product feed. */
	export interface ProductFeedDataFormProperties {

		/** Whether the product feed has opted-out of showing products. */
		isFeedDisabled: FormControl<boolean | null | undefined>,

		/** How products are selected by the product feed. */
		productMatchType: FormControl<ProductFeedDataProductMatchType | null | undefined>,
	}
	export function CreateProductFeedDataFormGroup() {
		return new FormGroup<ProductFeedDataFormProperties>({
			isFeedDisabled: new FormControl<boolean | null | undefined>(undefined),
			productMatchType: new FormControl<ProductFeedDataProductMatchType | null | undefined>(undefined),
		});

	}


	/** A dimension used to match products. */
	export interface ProductMatchDimension {

		/** The key and value of a custom label. */
		customLabel?: CustomLabel;

		/** The ID of the product offer to match with a product with the same offer ID. */
		productOfferId?: string | null;
	}

	/** A dimension used to match products. */
	export interface ProductMatchDimensionFormProperties {

		/** The ID of the product offer to match with a product with the same offer ID. */
		productOfferId: FormControl<string | null | undefined>,
	}
	export function CreateProductMatchDimensionFormGroup() {
		return new FormGroup<ProductMatchDimensionFormProperties>({
			productOfferId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The key and value of a custom label. */
	export interface CustomLabel {

		/** The key of the label. */
		key?: CustomLabelKey | null;

		/** The value of the label. */
		value?: string | null;
	}

	/** The key and value of a custom label. */
	export interface CustomLabelFormProperties {

		/** The key of the label. */
		key: FormControl<CustomLabelKey | null | undefined>,

		/** The value of the label. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustomLabelFormGroup() {
		return new FormGroup<CustomLabelFormProperties>({
			key: new FormControl<CustomLabelKey | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CustomLabelKey { CUSTOM_LABEL_KEY_UNSPECIFIED = 'CUSTOM_LABEL_KEY_UNSPECIFIED', CUSTOM_LABEL_KEY_0 = 'CUSTOM_LABEL_KEY_0', CUSTOM_LABEL_KEY_1 = 'CUSTOM_LABEL_KEY_1', CUSTOM_LABEL_KEY_2 = 'CUSTOM_LABEL_KEY_2', CUSTOM_LABEL_KEY_3 = 'CUSTOM_LABEL_KEY_3', CUSTOM_LABEL_KEY_4 = 'CUSTOM_LABEL_KEY_4' }

	export enum ProductFeedDataProductMatchType { PRODUCT_MATCH_TYPE_UNSPECIFIED = 'PRODUCT_MATCH_TYPE_UNSPECIFIED', PRODUCT_MATCH_TYPE_ALL_PRODUCTS = 'PRODUCT_MATCH_TYPE_ALL_PRODUCTS', PRODUCT_MATCH_TYPE_SPECIFIC_PRODUCTS = 'PRODUCT_MATCH_TYPE_SPECIFIC_PRODUCTS', PRODUCT_MATCH_TYPE_CUSTOM_LABEL = 'PRODUCT_MATCH_TYPE_CUSTOM_LABEL' }


	/** Settings that control the [optimized targeting](//support.google.com/displayvideo/answer/12060859) settings of the line item. */
	export interface TargetingExpansionConfig {

		/** Output only. Magnitude of expansion for eligible first-party user lists under this ad group. This field only applies to YouTube and Partners line item and ad group resources. */
		audienceExpansionLevel?: TargetingExpansionConfigAudienceExpansionLevel | null;

		/** Output only. Whether to exclude seed list for audience expansion. This field only applies to YouTube and Partners line item and ad group resources. */
		audienceExpansionSeedListExcluded?: boolean | null;

		/** Required. Whether to enable Optimized Targeting for the line item. */
		enableOptimizedTargeting?: boolean | null;
	}

	/** Settings that control the [optimized targeting](//support.google.com/displayvideo/answer/12060859) settings of the line item. */
	export interface TargetingExpansionConfigFormProperties {

		/** Output only. Magnitude of expansion for eligible first-party user lists under this ad group. This field only applies to YouTube and Partners line item and ad group resources. */
		audienceExpansionLevel: FormControl<TargetingExpansionConfigAudienceExpansionLevel | null | undefined>,

		/** Output only. Whether to exclude seed list for audience expansion. This field only applies to YouTube and Partners line item and ad group resources. */
		audienceExpansionSeedListExcluded: FormControl<boolean | null | undefined>,

		/** Required. Whether to enable Optimized Targeting for the line item. */
		enableOptimizedTargeting: FormControl<boolean | null | undefined>,
	}
	export function CreateTargetingExpansionConfigFormGroup() {
		return new FormGroup<TargetingExpansionConfigFormProperties>({
			audienceExpansionLevel: new FormControl<TargetingExpansionConfigAudienceExpansionLevel | null | undefined>(undefined),
			audienceExpansionSeedListExcluded: new FormControl<boolean | null | undefined>(undefined),
			enableOptimizedTargeting: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum TargetingExpansionConfigAudienceExpansionLevel { UNKNOWN = 'UNKNOWN', NO_REACH = 'NO_REACH', LEAST_REACH = 'LEAST_REACH', MID_REACH = 'MID_REACH', MOST_REACH = 'MOST_REACH' }


	/** A single ad associated with an ad group. */
	export interface AdGroupAd {

		/** The unique ID of the ad. Assigned by the system. */
		adGroupAdId?: string | null;

		/** The unique ID of the ad group that the ad belongs to. */
		adGroupId?: string | null;

		/** List of URLs used by the ad. */
		adUrls?: Array<AdUrl>;

		/** The unique ID of the advertiser the ad belongs to. */
		advertiserId?: string | null;

		/** Details for an audio ad. */
		audioAd?: AudioAd;

		/** Details for a bumper ad. */
		bumperAd?: BumperAd;

		/** The display name of the ad. Must be UTF-8 encoded with a maximum size of 255 bytes. */
		displayName?: string | null;

		/** The ad sourced from a DV360 creative. */
		displayVideoSourceAd?: DisplayVideoSourceAd;

		/** The entity status of the ad. */
		entityStatus?: AdGroupEntityStatus | null;

		/** Details for an in-stream ad. */
		inStreamAd?: InStreamAd;

		/** Details for a Masthead Ad. */
		mastheadAd?: MastheadAd;

		/** The resource name of the ad. */
		name?: string | null;

		/** Details for a non-skippable ad. */
		nonSkippableAd?: NonSkippableAd;

		/** Details for a video discovery ad. */
		videoDiscoverAd?: VideoDiscoveryAd;

		/** Details for a video performance ad. */
		videoPerformanceAd?: VideoPerformanceAd;
	}

	/** A single ad associated with an ad group. */
	export interface AdGroupAdFormProperties {

		/** The unique ID of the ad. Assigned by the system. */
		adGroupAdId: FormControl<string | null | undefined>,

		/** The unique ID of the ad group that the ad belongs to. */
		adGroupId: FormControl<string | null | undefined>,

		/** The unique ID of the advertiser the ad belongs to. */
		advertiserId: FormControl<string | null | undefined>,

		/** The display name of the ad. Must be UTF-8 encoded with a maximum size of 255 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** The entity status of the ad. */
		entityStatus: FormControl<AdGroupEntityStatus | null | undefined>,

		/** The resource name of the ad. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAdGroupAdFormGroup() {
		return new FormGroup<AdGroupAdFormProperties>({
			adGroupAdId: new FormControl<string | null | undefined>(undefined),
			adGroupId: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			entityStatus: new FormControl<AdGroupEntityStatus | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional URLs related to the ad, including beacons. */
	export interface AdUrl {

		/** The type of the Ad URL. */
		type?: AdUrlType | null;

		/** The URL string value. */
		url?: string | null;
	}

	/** Additional URLs related to the ad, including beacons. */
	export interface AdUrlFormProperties {

		/** The type of the Ad URL. */
		type: FormControl<AdUrlType | null | undefined>,

		/** The URL string value. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAdUrlFormGroup() {
		return new FormGroup<AdUrlFormProperties>({
			type: new FormControl<AdUrlType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AdUrlType { AD_URL_TYPE_UNSPECIFIED = 'AD_URL_TYPE_UNSPECIFIED', AD_URL_TYPE_BEACON_IMPRESSION = 'AD_URL_TYPE_BEACON_IMPRESSION', AD_URL_TYPE_BEACON_EXPANDABLE_DCM_IMPRESSION = 'AD_URL_TYPE_BEACON_EXPANDABLE_DCM_IMPRESSION', AD_URL_TYPE_BEACON_CLICK = 'AD_URL_TYPE_BEACON_CLICK', AD_URL_TYPE_BEACON_SKIP = 'AD_URL_TYPE_BEACON_SKIP' }


	/** Details for an audio ad. */
	export interface AudioAd {

		/** The webpage address that appears with the ad. */
		displayUrl?: string | null;

		/** The URL address of the webpage that people reach after they click the ad. */
		finalUrl?: string | null;

		/** The URL address loaded in the background for tracking purposes. */
		trackingUrl?: string | null;

		/** Details of a YouTube video. */
		video?: YoutubeVideoDetails;
	}

	/** Details for an audio ad. */
	export interface AudioAdFormProperties {

		/** The webpage address that appears with the ad. */
		displayUrl: FormControl<string | null | undefined>,

		/** The URL address of the webpage that people reach after they click the ad. */
		finalUrl: FormControl<string | null | undefined>,

		/** The URL address loaded in the background for tracking purposes. */
		trackingUrl: FormControl<string | null | undefined>,
	}
	export function CreateAudioAdFormGroup() {
		return new FormGroup<AudioAdFormProperties>({
			displayUrl: new FormControl<string | null | undefined>(undefined),
			finalUrl: new FormControl<string | null | undefined>(undefined),
			trackingUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a YouTube video. */
	export interface YoutubeVideoDetails {

		/** The YouTube video ID which can be searched on YouTube webpage. */
		id?: string | null;

		/** The reason why the video data is not available. */
		unavailableReason?: YoutubeVideoDetailsUnavailableReason | null;
	}

	/** Details of a YouTube video. */
	export interface YoutubeVideoDetailsFormProperties {

		/** The YouTube video ID which can be searched on YouTube webpage. */
		id: FormControl<string | null | undefined>,

		/** The reason why the video data is not available. */
		unavailableReason: FormControl<YoutubeVideoDetailsUnavailableReason | null | undefined>,
	}
	export function CreateYoutubeVideoDetailsFormGroup() {
		return new FormGroup<YoutubeVideoDetailsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			unavailableReason: new FormControl<YoutubeVideoDetailsUnavailableReason | null | undefined>(undefined),
		});

	}

	export enum YoutubeVideoDetailsUnavailableReason { VIDEO_UNAVAILABLE_REASON_UNSPECIFIED = 'VIDEO_UNAVAILABLE_REASON_UNSPECIFIED', VIDEO_UNAVAILABLE_REASON_PRIVATE = 'VIDEO_UNAVAILABLE_REASON_PRIVATE', VIDEO_UNAVAILABLE_REASON_DELETED = 'VIDEO_UNAVAILABLE_REASON_DELETED' }


	/** Details for a bumper ad. */
	export interface BumperAd {

		/** Common attributes for in-stream, non-skippable and bumper ads. */
		commonInStreamAttribute?: CommonInStreamAttribute;
	}

	/** Details for a bumper ad. */
	export interface BumperAdFormProperties {
	}
	export function CreateBumperAdFormGroup() {
		return new FormGroup<BumperAdFormProperties>({
		});

	}


	/** Common attributes for in-stream, non-skippable and bumper ads. */
	export interface CommonInStreamAttribute {

		/** The text on the call-to-action button. */
		actionButtonLabel?: string | null;

		/** The headline of the call-to-action banner. */
		actionHeadline?: string | null;

		/** Meta data of an image asset. */
		companionBanner?: ImageAsset;

		/** The webpage address that appears with the ad. */
		displayUrl?: string | null;

		/** The URL address of the webpage that people reach after they click the ad. */
		finalUrl?: string | null;

		/** The URL address loaded in the background for tracking purposes. */
		trackingUrl?: string | null;

		/** Details of a YouTube video. */
		video?: YoutubeVideoDetails;
	}

	/** Common attributes for in-stream, non-skippable and bumper ads. */
	export interface CommonInStreamAttributeFormProperties {

		/** The text on the call-to-action button. */
		actionButtonLabel: FormControl<string | null | undefined>,

		/** The headline of the call-to-action banner. */
		actionHeadline: FormControl<string | null | undefined>,

		/** The webpage address that appears with the ad. */
		displayUrl: FormControl<string | null | undefined>,

		/** The URL address of the webpage that people reach after they click the ad. */
		finalUrl: FormControl<string | null | undefined>,

		/** The URL address loaded in the background for tracking purposes. */
		trackingUrl: FormControl<string | null | undefined>,
	}
	export function CreateCommonInStreamAttributeFormGroup() {
		return new FormGroup<CommonInStreamAttributeFormProperties>({
			actionButtonLabel: new FormControl<string | null | undefined>(undefined),
			actionHeadline: new FormControl<string | null | undefined>(undefined),
			displayUrl: new FormControl<string | null | undefined>(undefined),
			finalUrl: new FormControl<string | null | undefined>(undefined),
			trackingUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Meta data of an image asset. */
	export interface ImageAsset {

		/** File size of the image asset in bytes. */
		fileSize?: string | null;

		/** Dimensions. */
		fullSize?: Dimensions;

		/** MIME type of the image asset. */
		mimeType?: string | null;
	}

	/** Meta data of an image asset. */
	export interface ImageAssetFormProperties {

		/** File size of the image asset in bytes. */
		fileSize: FormControl<string | null | undefined>,

		/** MIME type of the image asset. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateImageAssetFormGroup() {
		return new FormGroup<ImageAssetFormProperties>({
			fileSize: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dimensions. */
	export interface Dimensions {

		/** The height in pixels. */
		heightPixels?: number | null;

		/** The width in pixels. */
		widthPixels?: number | null;
	}

	/** Dimensions. */
	export interface DimensionsFormProperties {

		/** The height in pixels. */
		heightPixels: FormControl<number | null | undefined>,

		/** The width in pixels. */
		widthPixels: FormControl<number | null | undefined>,
	}
	export function CreateDimensionsFormGroup() {
		return new FormGroup<DimensionsFormProperties>({
			heightPixels: new FormControl<number | null | undefined>(undefined),
			widthPixels: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The ad sourced from a DV360 creative. */
	export interface DisplayVideoSourceAd {

		/** The ID of the source creative. */
		creativeId?: string | null;
	}

	/** The ad sourced from a DV360 creative. */
	export interface DisplayVideoSourceAdFormProperties {

		/** The ID of the source creative. */
		creativeId: FormControl<string | null | undefined>,
	}
	export function CreateDisplayVideoSourceAdFormGroup() {
		return new FormGroup<DisplayVideoSourceAdFormProperties>({
			creativeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for an in-stream ad. */
	export interface InStreamAd {

		/** Common attributes for in-stream, non-skippable and bumper ads. */
		commonInStreamAttribute?: CommonInStreamAttribute;

		/** The custom parameters to pass custom values to tracking URL template. */
		customParameters?: {[id: string]: string };
	}

	/** Details for an in-stream ad. */
	export interface InStreamAdFormProperties {

		/** The custom parameters to pass custom values to tracking URL template. */
		customParameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateInStreamAdFormGroup() {
		return new FormGroup<InStreamAdFormProperties>({
			customParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Details for a Masthead Ad. */
	export interface MastheadAd {

		/** The duration of time the video will autoplay. */
		autoplayVideoDuration?: string | null;

		/** The amount of time in milliseconds after which the video will start to play. */
		autoplayVideoStartMillisecond?: string | null;

		/** The text on the call-to-action button. */
		callToActionButtonLabel?: string | null;

		/** The destination URL for the call-to-action button. */
		callToActionFinalUrl?: string | null;

		/** The tracking URL for the call-to-action button. */
		callToActionTrackingUrl?: string | null;

		/** The videos that appear next to the Masthead Ad on desktop. Can be no more than two. */
		companionYoutubeVideos?: Array<YoutubeVideoDetails>;

		/** The description of the ad. */
		description?: string | null;

		/** The headline of the ad. */
		headline?: string | null;

		/** Whether to show a background or banner that appears at the top of a YouTube page. */
		showChannelArt?: boolean | null;

		/** Details of a YouTube video. */
		video?: YoutubeVideoDetails;

		/** The aspect ratio of the autoplaying YouTube video on the Masthead. */
		videoAspectRatio?: MastheadAdVideoAspectRatio | null;
	}

	/** Details for a Masthead Ad. */
	export interface MastheadAdFormProperties {

		/** The duration of time the video will autoplay. */
		autoplayVideoDuration: FormControl<string | null | undefined>,

		/** The amount of time in milliseconds after which the video will start to play. */
		autoplayVideoStartMillisecond: FormControl<string | null | undefined>,

		/** The text on the call-to-action button. */
		callToActionButtonLabel: FormControl<string | null | undefined>,

		/** The destination URL for the call-to-action button. */
		callToActionFinalUrl: FormControl<string | null | undefined>,

		/** The tracking URL for the call-to-action button. */
		callToActionTrackingUrl: FormControl<string | null | undefined>,

		/** The description of the ad. */
		description: FormControl<string | null | undefined>,

		/** The headline of the ad. */
		headline: FormControl<string | null | undefined>,

		/** Whether to show a background or banner that appears at the top of a YouTube page. */
		showChannelArt: FormControl<boolean | null | undefined>,

		/** The aspect ratio of the autoplaying YouTube video on the Masthead. */
		videoAspectRatio: FormControl<MastheadAdVideoAspectRatio | null | undefined>,
	}
	export function CreateMastheadAdFormGroup() {
		return new FormGroup<MastheadAdFormProperties>({
			autoplayVideoDuration: new FormControl<string | null | undefined>(undefined),
			autoplayVideoStartMillisecond: new FormControl<string | null | undefined>(undefined),
			callToActionButtonLabel: new FormControl<string | null | undefined>(undefined),
			callToActionFinalUrl: new FormControl<string | null | undefined>(undefined),
			callToActionTrackingUrl: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			headline: new FormControl<string | null | undefined>(undefined),
			showChannelArt: new FormControl<boolean | null | undefined>(undefined),
			videoAspectRatio: new FormControl<MastheadAdVideoAspectRatio | null | undefined>(undefined),
		});

	}

	export enum MastheadAdVideoAspectRatio { VIDEO_ASPECT_RATIO_UNSPECIFIED = 'VIDEO_ASPECT_RATIO_UNSPECIFIED', VIDEO_ASPECT_RATIO_WIDESCREEN = 'VIDEO_ASPECT_RATIO_WIDESCREEN', VIDEO_ASPECT_RATIO_FIXED_16_9 = 'VIDEO_ASPECT_RATIO_FIXED_16_9' }


	/** Details for a non-skippable ad. */
	export interface NonSkippableAd {

		/** Common attributes for in-stream, non-skippable and bumper ads. */
		commonInStreamAttribute?: CommonInStreamAttribute;

		/** The custom parameters to pass custom values to tracking URL template. */
		customParameters?: {[id: string]: string };
	}

	/** Details for a non-skippable ad. */
	export interface NonSkippableAdFormProperties {

		/** The custom parameters to pass custom values to tracking URL template. */
		customParameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateNonSkippableAdFormGroup() {
		return new FormGroup<NonSkippableAdFormProperties>({
			customParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Details for a video discovery ad. */
	export interface VideoDiscoveryAd {

		/** First text line for the ad. */
		description1?: string | null;

		/** Second text line for the ad. */
		description2?: string | null;

		/** The headline of ad. */
		headline?: string | null;

		/** Thumbnail image used in the ad. */
		thumbnail?: VideoDiscoveryAdThumbnail | null;

		/** Details of a YouTube video. */
		video?: YoutubeVideoDetails;
	}

	/** Details for a video discovery ad. */
	export interface VideoDiscoveryAdFormProperties {

		/** First text line for the ad. */
		description1: FormControl<string | null | undefined>,

		/** Second text line for the ad. */
		description2: FormControl<string | null | undefined>,

		/** The headline of ad. */
		headline: FormControl<string | null | undefined>,

		/** Thumbnail image used in the ad. */
		thumbnail: FormControl<VideoDiscoveryAdThumbnail | null | undefined>,
	}
	export function CreateVideoDiscoveryAdFormGroup() {
		return new FormGroup<VideoDiscoveryAdFormProperties>({
			description1: new FormControl<string | null | undefined>(undefined),
			description2: new FormControl<string | null | undefined>(undefined),
			headline: new FormControl<string | null | undefined>(undefined),
			thumbnail: new FormControl<VideoDiscoveryAdThumbnail | null | undefined>(undefined),
		});

	}

	export enum VideoDiscoveryAdThumbnail { THUMBNAIL_UNSPECIFIED = 'THUMBNAIL_UNSPECIFIED', THUMBNAIL_DEFAULT = 'THUMBNAIL_DEFAULT', THUMBNAIL_1 = 'THUMBNAIL_1', THUMBNAIL_2 = 'THUMBNAIL_2', THUMBNAIL_3 = 'THUMBNAIL_3' }


	/** Details for a video performance ad. */
	export interface VideoPerformanceAd {

		/** The list of text assets shown on the call-to-action button. */
		actionButtonLabels?: Array<string>;

		/** The list of companion banners used by this ad. */
		companionBanners?: Array<ImageAsset>;

		/** The custom parameters to pass custom values to tracking URL template. */
		customParameters?: {[id: string]: string };

		/** The list of descriptions shown on the call-to-action banner. */
		descriptions?: Array<string>;

		/** The first piece after the domain in the display URL. */
		displayUrlBreadcrumb1?: string | null;

		/** The second piece after the domain in the display URL. */
		displayUrlBreadcrumb2?: string | null;

		/** The domain of the display URL. */
		domain?: string | null;

		/** The URL address of the webpage that people reach after they click the ad. */
		finalUrl?: string | null;

		/** The list of headlines shown on the call-to-action banner. */
		headlines?: Array<string>;

		/** The list of lone headlines shown on the call-to-action banner. */
		longHeadlines?: Array<string>;

		/** The URL address loaded in the background for tracking purposes. */
		trackingUrl?: string | null;

		/** The list of YouTube video assets used by this ad. */
		videos?: Array<YoutubeVideoDetails>;
	}

	/** Details for a video performance ad. */
	export interface VideoPerformanceAdFormProperties {

		/** The custom parameters to pass custom values to tracking URL template. */
		customParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** The first piece after the domain in the display URL. */
		displayUrlBreadcrumb1: FormControl<string | null | undefined>,

		/** The second piece after the domain in the display URL. */
		displayUrlBreadcrumb2: FormControl<string | null | undefined>,

		/** The domain of the display URL. */
		domain: FormControl<string | null | undefined>,

		/** The URL address of the webpage that people reach after they click the ad. */
		finalUrl: FormControl<string | null | undefined>,

		/** The URL address loaded in the background for tracking purposes. */
		trackingUrl: FormControl<string | null | undefined>,
	}
	export function CreateVideoPerformanceAdFormGroup() {
		return new FormGroup<VideoPerformanceAdFormProperties>({
			customParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			displayUrlBreadcrumb1: new FormControl<string | null | undefined>(undefined),
			displayUrlBreadcrumb2: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			finalUrl: new FormControl<string | null | undefined>(undefined),
			trackingUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Wrapper object associating an AssignedTargetingOption resource and the ad group it is assigned to. */
	export interface AdGroupAssignedTargetingOption {

		/** The ID of the ad group the assigned targeting option is assigned to. */
		adGroupId?: string | null;

		/** A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings. */
		assignedTargetingOption?: AssignedTargetingOption;
	}

	/** Wrapper object associating an AssignedTargetingOption resource and the ad group it is assigned to. */
	export interface AdGroupAssignedTargetingOptionFormProperties {

		/** The ID of the ad group the assigned targeting option is assigned to. */
		adGroupId: FormControl<string | null | undefined>,
	}
	export function CreateAdGroupAssignedTargetingOptionFormGroup() {
		return new FormGroup<AdGroupAssignedTargetingOptionFormProperties>({
			adGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings. */
	export interface AssignedTargetingOption {

		/** Represents a targetable age range. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AGE_RANGE`. */
		ageRangeDetails?: AgeRangeAssignedTargetingOptionDetails;

		/** Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`. */
		appCategoryDetails?: AppCategoryAssignedTargetingOptionDetails;

		/** Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`. */
		appDetails?: AppAssignedTargetingOptionDetails;

		/** Output only. The unique ID of the assigned targeting option. The ID is only unique within a given resource and targeting type. It may be reused in other contexts. */
		assignedTargetingOptionId?: string | null;

		/** Output only. An alias for the assigned_targeting_option_id. This value can be used in place of `assignedTargetingOptionId` when retrieving or deleting existing targeting. This field will only be supported for all assigned targeting options of the following targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` This field is also supported for line item assigned targeting options of the following targeting types: * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` */
		assignedTargetingOptionIdAlias?: string | null;

		/** Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups. */
		audienceGroupDetails?: AudienceGroupAssignedTargetingOptionDetails;

		/** Details for audio content type assigned targeting option. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. Explicitly targeting all options is not supported. Remove all audio content type targeting options to achieve this effect. */
		audioContentTypeDetails?: AudioContentTypeAssignedTargetingOptionDetails;

		/** Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`. If a resource does not have an `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` assigned targeting option, it is using the "Authorized Direct Sellers and Resellers" option. */
		authorizedSellerStatusDetails?: AuthorizedSellerStatusAssignedTargetingOptionDetails;

		/** Details for assigned browser targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BROWSER`. */
		browserDetails?: BrowserAssignedTargetingOptionDetails;

		/** Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`. */
		businessChainDetails?: BusinessChainAssignedTargetingOptionDetails;

		/** Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`. */
		carrierAndIspDetails?: CarrierAndIspAssignedTargetingOptionDetails;

		/** Assigned category targeting option details. This will be populated in the category_details field when targeting_type is `TARGETING_TYPE_CATEGORY`. */
		categoryDetails?: CategoryAssignedTargetingOptionDetails;

		/** Details for assigned channel targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CHANNEL`. */
		channelDetails?: ChannelAssignedTargetingOptionDetails;

		/** Details for content duration assigned targeting option. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. Explicitly targeting all options is not supported. Remove all content duration targeting options to achieve this effect. */
		contentDurationDetails?: ContentDurationAssignedTargetingOptionDetails;

		/** Details for content genre assigned targeting option. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. Explicitly targeting all options is not supported. Remove all content genre targeting options to achieve this effect. */
		contentGenreDetails?: ContentGenreAssignedTargetingOptionDetails;

		/** Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`. */
		contentInstreamPositionDetails?: ContentInstreamPositionAssignedTargetingOptionDetails;

		/** Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`. */
		contentOutstreamPositionDetails?: ContentOutstreamPositionAssignedTargetingOptionDetails;

		/** Details for content stream type assigned targeting option. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. Explicitly targeting all options is not supported. Remove all content stream type targeting options to achieve this effect. */
		contentStreamTypeDetails?: ContentStreamTypeAssignedTargetingOptionDetails;

		/** Representation of a segment of time defined on a specific day of the week and with a start and end time. The time represented by `start_hour` must be before the time represented by `end_hour`. */
		dayAndTimeDetails?: DayAndTimeAssignedTargetingOptionDetails;

		/** Assigned device make and model targeting option details. This will be populated in the device_make_model_details field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`. */
		deviceMakeModelDetails?: DeviceMakeModelAssignedTargetingOptionDetails;

		/** Targeting details for device type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`. */
		deviceTypeDetails?: DeviceTypeAssignedTargetingOptionDetails;

		/** Targeting details for digital content label. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`. */
		digitalContentLabelExclusionDetails?: DigitalContentLabelAssignedTargetingOptionDetails;

		/** Assigned environment targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`. */
		environmentDetails?: EnvironmentAssignedTargetingOptionDetails;

		/** Details for assigned exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`. */
		exchangeDetails?: ExchangeAssignedTargetingOptionDetails;

		/** Details for assigned gender targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GENDER`. */
		genderDetails?: GenderAssignedTargetingOptionDetails;

		/** Details for assigned geographic region targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GEO_REGION`. */
		geoRegionDetails?: GeoRegionAssignedTargetingOptionDetails;

		/** Details for assigned household income targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`. */
		householdIncomeDetails?: HouseholdIncomeAssignedTargetingOptionDetails;

		/** Output only. The inheritance status of the assigned targeting option. */
		inheritance?: AssignedTargetingOptionInheritance | null;

		/** Targeting details for inventory source. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE`. */
		inventorySourceDetails?: InventorySourceAssignedTargetingOptionDetails;

		/** Targeting details for inventory source group. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_GROUP`. */
		inventorySourceGroupDetails?: InventorySourceGroupAssignedTargetingOptionDetails;

		/** Details for assigned keyword targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_KEYWORD`. */
		keywordDetails?: KeywordAssignedTargetingOptionDetails;

		/** Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`. */
		languageDetails?: LanguageAssignedTargetingOptionDetails;

		/** Output only. The resource name for this assigned targeting option. */
		name?: string | null;

		/** Details for native content position assigned targeting option. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. Explicitly targeting all options is not supported. Remove all native content position targeting options to achieve this effect. */
		nativeContentPositionDetails?: NativeContentPositionAssignedTargetingOptionDetails;

		/** Targeting details for negative keyword list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`. */
		negativeKeywordListDetails?: NegativeKeywordListAssignedTargetingOptionDetails;

		/** Represents a targetable Open Measurement enabled inventory type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_OMID`. */
		omidDetails?: OmidAssignedTargetingOptionDetails;

		/** On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`. */
		onScreenPositionDetails?: OnScreenPositionAssignedTargetingOptionDetails;

		/** Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`. */
		operatingSystemDetails?: OperatingSystemAssignedTargetingOptionDetails;

		/** Details for assigned parental status targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`. */
		parentalStatusDetails?: ParentalStatusAssignedTargetingOptionDetails;

		/** Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`. */
		poiDetails?: PoiAssignedTargetingOptionDetails;

		/** Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`. */
		proximityLocationListDetails?: ProximityLocationListAssignedTargetingOptionDetails;

		/** Targeting details for regional location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_REGIONAL_LOCATION_LIST`. */
		regionalLocationListDetails?: RegionalLocationListAssignedTargetingOptionDetails;

		/** Targeting details for sensitive category. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`. */
		sensitiveCategoryExclusionDetails?: SensitiveCategoryAssignedTargetingOptionDetails;

		/** Details for session position assigned targeting option. This will be populated in the session_position_details field when targeting_type is `TARGETING_TYPE_SESSION_POSITION`. */
		sessionPositionDetails?: SessionPositionAssignedTargetingOptionDetails;

		/** Details for assigned sub-exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`. */
		subExchangeDetails?: SubExchangeAssignedTargetingOptionDetails;

		/** Output only. Identifies the type of this assigned targeting option. */
		targetingType?: AssignedTargetingOptionTargetingType | null;

		/** Assigned third party verifier targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_THIRD_PARTY_VERIFIER`. */
		thirdPartyVerifierDetails?: ThirdPartyVerifierAssignedTargetingOptionDetails;

		/** Details for assigned URL targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_URL`. */
		urlDetails?: UrlAssignedTargetingOptionDetails;

		/** User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`. */
		userRewardedContentDetails?: UserRewardedContentAssignedTargetingOptionDetails;

		/** Video player size targeting option details. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`. Explicitly targeting all options is not supported. Remove all video player size targeting options to achieve this effect. */
		videoPlayerSizeDetails?: VideoPlayerSizeAssignedTargetingOptionDetails;

		/** Assigned viewability targeting option details. This will be populated in the viewability_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`. */
		viewabilityDetails?: ViewabilityAssignedTargetingOptionDetails;

		/** Details for YouTube channel assigned targeting option. This will be populated in the youtube_channel_details field when targeting_type is `TARGETING_TYPE_YOUTUBE_CHANNEL`. */
		youtubeChannelDetails?: YoutubeChannelAssignedTargetingOptionDetails;

		/** Details for YouTube video assigned targeting option. This will be populated in the youtube_video_details field when targeting_type is `TARGETING_TYPE_YOUTUBE_VIDEO`. */
		youtubeVideoDetails?: YoutubeVideoAssignedTargetingOptionDetails;
	}

	/** A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings. */
	export interface AssignedTargetingOptionFormProperties {

		/** Output only. The unique ID of the assigned targeting option. The ID is only unique within a given resource and targeting type. It may be reused in other contexts. */
		assignedTargetingOptionId: FormControl<string | null | undefined>,

		/** Output only. An alias for the assigned_targeting_option_id. This value can be used in place of `assignedTargetingOptionId` when retrieving or deleting existing targeting. This field will only be supported for all assigned targeting options of the following targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` This field is also supported for line item assigned targeting options of the following targeting types: * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` */
		assignedTargetingOptionIdAlias: FormControl<string | null | undefined>,

		/** Output only. The inheritance status of the assigned targeting option. */
		inheritance: FormControl<AssignedTargetingOptionInheritance | null | undefined>,

		/** Output only. The resource name for this assigned targeting option. */
		name: FormControl<string | null | undefined>,

		/** Output only. Identifies the type of this assigned targeting option. */
		targetingType: FormControl<AssignedTargetingOptionTargetingType | null | undefined>,
	}
	export function CreateAssignedTargetingOptionFormGroup() {
		return new FormGroup<AssignedTargetingOptionFormProperties>({
			assignedTargetingOptionId: new FormControl<string | null | undefined>(undefined),
			assignedTargetingOptionIdAlias: new FormControl<string | null | undefined>(undefined),
			inheritance: new FormControl<AssignedTargetingOptionInheritance | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			targetingType: new FormControl<AssignedTargetingOptionTargetingType | null | undefined>(undefined),
		});

	}


	/** Represents a targetable age range. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AGE_RANGE`. */
	export interface AgeRangeAssignedTargetingOptionDetails {

		/** Required. The age range of an audience. We only support targeting a continuous age range of an audience. Thus, the age range represented in this field can be 1) targeted solely, or, 2) part of a larger continuous age range. The reach of a continuous age range targeting can be expanded by also targeting an audience of an unknown age. */
		ageRange?: AgeRangeAssignedTargetingOptionDetailsAgeRange | null;
	}

	/** Represents a targetable age range. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AGE_RANGE`. */
	export interface AgeRangeAssignedTargetingOptionDetailsFormProperties {

		/** Required. The age range of an audience. We only support targeting a continuous age range of an audience. Thus, the age range represented in this field can be 1) targeted solely, or, 2) part of a larger continuous age range. The reach of a continuous age range targeting can be expanded by also targeting an audience of an unknown age. */
		ageRange: FormControl<AgeRangeAssignedTargetingOptionDetailsAgeRange | null | undefined>,
	}
	export function CreateAgeRangeAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<AgeRangeAssignedTargetingOptionDetailsFormProperties>({
			ageRange: new FormControl<AgeRangeAssignedTargetingOptionDetailsAgeRange | null | undefined>(undefined),
		});

	}

	export enum AgeRangeAssignedTargetingOptionDetailsAgeRange { AGE_RANGE_UNSPECIFIED = 'AGE_RANGE_UNSPECIFIED', AGE_RANGE_18_24 = 'AGE_RANGE_18_24', AGE_RANGE_25_34 = 'AGE_RANGE_25_34', AGE_RANGE_35_44 = 'AGE_RANGE_35_44', AGE_RANGE_45_54 = 'AGE_RANGE_45_54', AGE_RANGE_55_64 = 'AGE_RANGE_55_64', AGE_RANGE_65_PLUS = 'AGE_RANGE_65_PLUS', AGE_RANGE_UNKNOWN = 'AGE_RANGE_UNKNOWN', AGE_RANGE_18_20 = 'AGE_RANGE_18_20', AGE_RANGE_21_24 = 'AGE_RANGE_21_24', AGE_RANGE_25_29 = 'AGE_RANGE_25_29', AGE_RANGE_30_34 = 'AGE_RANGE_30_34', AGE_RANGE_35_39 = 'AGE_RANGE_35_39', AGE_RANGE_40_44 = 'AGE_RANGE_40_44', AGE_RANGE_45_49 = 'AGE_RANGE_45_49', AGE_RANGE_50_54 = 'AGE_RANGE_50_54', AGE_RANGE_55_59 = 'AGE_RANGE_55_59', AGE_RANGE_60_64 = 'AGE_RANGE_60_64' }


	/** Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`. */
	export interface AppCategoryAssignedTargetingOptionDetails {

		/** Output only. The display name of the app category. */
		displayName?: string | null;

		/** Indicates if this option is being negatively targeted. */
		negative?: boolean | null;

		/** Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_APP_CATEGORY`. */
		targetingOptionId?: string | null;
	}

	/** Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`. */
	export interface AppCategoryAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the app category. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates if this option is being negatively targeted. */
		negative: FormControl<boolean | null | undefined>,

		/** Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_APP_CATEGORY`. */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateAppCategoryAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<AppCategoryAssignedTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			negative: new FormControl<boolean | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`. */
	export interface AppAssignedTargetingOptionDetails {

		/** Required. The ID of the app. Android's Play store app uses bundle ID, for example `com.google.android.gm`. Apple's App store app ID uses 9 digit string, for example `422689480`. */
		appId?: string | null;

		/** Indicates the platform of the targeted app. If this field is not specified, the app platform will be assumed to be mobile (i.e., Android or iOS), and we will derive the appropriate mobile platform from the app ID. */
		appPlatform?: AppAssignedTargetingOptionDetailsAppPlatform | null;

		/** Output only. The display name of the app. */
		displayName?: string | null;

		/** Indicates if this option is being negatively targeted. */
		negative?: boolean | null;
	}

	/** Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`. */
	export interface AppAssignedTargetingOptionDetailsFormProperties {

		/** Required. The ID of the app. Android's Play store app uses bundle ID, for example `com.google.android.gm`. Apple's App store app ID uses 9 digit string, for example `422689480`. */
		appId: FormControl<string | null | undefined>,

		/** Indicates the platform of the targeted app. If this field is not specified, the app platform will be assumed to be mobile (i.e., Android or iOS), and we will derive the appropriate mobile platform from the app ID. */
		appPlatform: FormControl<AppAssignedTargetingOptionDetailsAppPlatform | null | undefined>,

		/** Output only. The display name of the app. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates if this option is being negatively targeted. */
		negative: FormControl<boolean | null | undefined>,
	}
	export function CreateAppAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<AppAssignedTargetingOptionDetailsFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			appPlatform: new FormControl<AppAssignedTargetingOptionDetailsAppPlatform | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			negative: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AppAssignedTargetingOptionDetailsAppPlatform { APP_PLATFORM_UNSPECIFIED = 'APP_PLATFORM_UNSPECIFIED', APP_PLATFORM_IOS = 'APP_PLATFORM_IOS', APP_PLATFORM_ANDROID = 'APP_PLATFORM_ANDROID', APP_PLATFORM_ROKU = 'APP_PLATFORM_ROKU', APP_PLATFORM_AMAZON_FIRETV = 'APP_PLATFORM_AMAZON_FIRETV', APP_PLATFORM_PLAYSTATION = 'APP_PLATFORM_PLAYSTATION', APP_PLATFORM_APPLE_TV = 'APP_PLATFORM_APPLE_TV', APP_PLATFORM_XBOX = 'APP_PLATFORM_XBOX', APP_PLATFORM_SAMSUNG_TV = 'APP_PLATFORM_SAMSUNG_TV', APP_PLATFORM_ANDROID_TV = 'APP_PLATFORM_ANDROID_TV', APP_PLATFORM_GENERIC_CTV = 'APP_PLATFORM_GENERIC_CTV' }


	/** Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups. */
	export interface AudienceGroupAssignedTargetingOptionDetails {

		/** Details of first and third party audience group. All first and third party audience targeting settings are logically ‘OR’ of each other. */
		excludedFirstAndThirdPartyAudienceGroup?: FirstAndThirdPartyAudienceGroup;

		/** Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other. */
		excludedGoogleAudienceGroup?: GoogleAudienceGroup;

		/** Details of combined audience group. All combined audience targeting settings are logically ‘OR’ of each other. */
		includedCombinedAudienceGroup?: CombinedAudienceGroup;

		/** Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other. */
		includedCustomListGroup?: CustomListGroup;

		/** The first and third party audience ids and recencies of included first and third party audience groups. Each first and third party audience group contains first and third party audience ids only. The relation between each first and third party audience group is INTERSECTION, and the result is UNION'ed with other audience groups. Repeated groups with same settings will be ignored. */
		includedFirstAndThirdPartyAudienceGroups?: Array<FirstAndThirdPartyAudienceGroup>;

		/** Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other. */
		includedGoogleAudienceGroup?: GoogleAudienceGroup;
	}

	/** Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups. */
	export interface AudienceGroupAssignedTargetingOptionDetailsFormProperties {
	}
	export function CreateAudienceGroupAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<AudienceGroupAssignedTargetingOptionDetailsFormProperties>({
		});

	}


	/** Details of first and third party audience group. All first and third party audience targeting settings are logically ‘OR’ of each other. */
	export interface FirstAndThirdPartyAudienceGroup {

		/** Required. All first and third party audience targeting settings in first and third party audience group. Repeated settings with same id are not allowed. */
		settings?: Array<FirstAndThirdPartyAudienceTargetingSetting>;
	}

	/** Details of first and third party audience group. All first and third party audience targeting settings are logically ‘OR’ of each other. */
	export interface FirstAndThirdPartyAudienceGroupFormProperties {
	}
	export function CreateFirstAndThirdPartyAudienceGroupFormGroup() {
		return new FormGroup<FirstAndThirdPartyAudienceGroupFormProperties>({
		});

	}


	/** Details of first and third party audience targeting setting. */
	export interface FirstAndThirdPartyAudienceTargetingSetting {

		/** Required. First and third party audience id of the first and third party audience targeting setting. This id is first_and_third_party_audience_id. */
		firstAndThirdPartyAudienceId?: string | null;

		/** The recency of the first and third party audience targeting setting. Only applicable to first party audiences, otherwise will be ignored. For more info, refer to https://support.google.com/displayvideo/answer/2949947#recency When unspecified, no recency limit will be used. */
		recency?: FirstAndThirdPartyAudienceTargetingSettingRecency | null;
	}

	/** Details of first and third party audience targeting setting. */
	export interface FirstAndThirdPartyAudienceTargetingSettingFormProperties {

		/** Required. First and third party audience id of the first and third party audience targeting setting. This id is first_and_third_party_audience_id. */
		firstAndThirdPartyAudienceId: FormControl<string | null | undefined>,

		/** The recency of the first and third party audience targeting setting. Only applicable to first party audiences, otherwise will be ignored. For more info, refer to https://support.google.com/displayvideo/answer/2949947#recency When unspecified, no recency limit will be used. */
		recency: FormControl<FirstAndThirdPartyAudienceTargetingSettingRecency | null | undefined>,
	}
	export function CreateFirstAndThirdPartyAudienceTargetingSettingFormGroup() {
		return new FormGroup<FirstAndThirdPartyAudienceTargetingSettingFormProperties>({
			firstAndThirdPartyAudienceId: new FormControl<string | null | undefined>(undefined),
			recency: new FormControl<FirstAndThirdPartyAudienceTargetingSettingRecency | null | undefined>(undefined),
		});

	}

	export enum FirstAndThirdPartyAudienceTargetingSettingRecency { RECENCY_NO_LIMIT = 'RECENCY_NO_LIMIT', RECENCY_1_MINUTE = 'RECENCY_1_MINUTE', RECENCY_5_MINUTES = 'RECENCY_5_MINUTES', RECENCY_10_MINUTES = 'RECENCY_10_MINUTES', RECENCY_15_MINUTES = 'RECENCY_15_MINUTES', RECENCY_30_MINUTES = 'RECENCY_30_MINUTES', RECENCY_1_HOUR = 'RECENCY_1_HOUR', RECENCY_2_HOURS = 'RECENCY_2_HOURS', RECENCY_3_HOURS = 'RECENCY_3_HOURS', RECENCY_6_HOURS = 'RECENCY_6_HOURS', RECENCY_12_HOURS = 'RECENCY_12_HOURS', RECENCY_1_DAY = 'RECENCY_1_DAY', RECENCY_2_DAYS = 'RECENCY_2_DAYS', RECENCY_3_DAYS = 'RECENCY_3_DAYS', RECENCY_5_DAYS = 'RECENCY_5_DAYS', RECENCY_7_DAYS = 'RECENCY_7_DAYS', RECENCY_10_DAYS = 'RECENCY_10_DAYS', RECENCY_14_DAYS = 'RECENCY_14_DAYS', RECENCY_15_DAYS = 'RECENCY_15_DAYS', RECENCY_21_DAYS = 'RECENCY_21_DAYS', RECENCY_28_DAYS = 'RECENCY_28_DAYS', RECENCY_30_DAYS = 'RECENCY_30_DAYS', RECENCY_40_DAYS = 'RECENCY_40_DAYS', RECENCY_45_DAYS = 'RECENCY_45_DAYS', RECENCY_60_DAYS = 'RECENCY_60_DAYS', RECENCY_90_DAYS = 'RECENCY_90_DAYS', RECENCY_120_DAYS = 'RECENCY_120_DAYS', RECENCY_180_DAYS = 'RECENCY_180_DAYS', RECENCY_270_DAYS = 'RECENCY_270_DAYS', RECENCY_365_DAYS = 'RECENCY_365_DAYS' }


	/** Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other. */
	export interface GoogleAudienceGroup {

		/** Required. All Google audience targeting settings in Google audience group. Repeated settings with same id will be ignored. */
		settings?: Array<GoogleAudienceTargetingSetting>;
	}

	/** Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other. */
	export interface GoogleAudienceGroupFormProperties {
	}
	export function CreateGoogleAudienceGroupFormGroup() {
		return new FormGroup<GoogleAudienceGroupFormProperties>({
		});

	}


	/** Details of Google audience targeting setting. */
	export interface GoogleAudienceTargetingSetting {

		/** Required. Google audience id of the Google audience targeting setting. This id is google_audience_id. */
		googleAudienceId?: string | null;
	}

	/** Details of Google audience targeting setting. */
	export interface GoogleAudienceTargetingSettingFormProperties {

		/** Required. Google audience id of the Google audience targeting setting. This id is google_audience_id. */
		googleAudienceId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAudienceTargetingSettingFormGroup() {
		return new FormGroup<GoogleAudienceTargetingSettingFormProperties>({
			googleAudienceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of combined audience group. All combined audience targeting settings are logically ‘OR’ of each other. */
	export interface CombinedAudienceGroup {

		/** Required. All combined audience targeting settings in combined audience group. Repeated settings with same id will be ignored. The number of combined audience settings should be no more than five, error will be thrown otherwise. */
		settings?: Array<CombinedAudienceTargetingSetting>;
	}

	/** Details of combined audience group. All combined audience targeting settings are logically ‘OR’ of each other. */
	export interface CombinedAudienceGroupFormProperties {
	}
	export function CreateCombinedAudienceGroupFormGroup() {
		return new FormGroup<CombinedAudienceGroupFormProperties>({
		});

	}


	/** Details of combined audience targeting setting. */
	export interface CombinedAudienceTargetingSetting {

		/** Required. Combined audience id of combined audience targeting setting. This id is combined_audience_id. */
		combinedAudienceId?: string | null;
	}

	/** Details of combined audience targeting setting. */
	export interface CombinedAudienceTargetingSettingFormProperties {

		/** Required. Combined audience id of combined audience targeting setting. This id is combined_audience_id. */
		combinedAudienceId: FormControl<string | null | undefined>,
	}
	export function CreateCombinedAudienceTargetingSettingFormGroup() {
		return new FormGroup<CombinedAudienceTargetingSettingFormProperties>({
			combinedAudienceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other. */
	export interface CustomListGroup {

		/** Required. All custom list targeting settings in custom list group. Repeated settings with same id will be ignored. */
		settings?: Array<CustomListTargetingSetting>;
	}

	/** Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other. */
	export interface CustomListGroupFormProperties {
	}
	export function CreateCustomListGroupFormGroup() {
		return new FormGroup<CustomListGroupFormProperties>({
		});

	}


	/** Details of custom list targeting setting. */
	export interface CustomListTargetingSetting {

		/** Required. Custom id of custom list targeting setting. This id is custom_list_id. */
		customListId?: string | null;
	}

	/** Details of custom list targeting setting. */
	export interface CustomListTargetingSettingFormProperties {

		/** Required. Custom id of custom list targeting setting. This id is custom_list_id. */
		customListId: FormControl<string | null | undefined>,
	}
	export function CreateCustomListTargetingSettingFormGroup() {
		return new FormGroup<CustomListTargetingSettingFormProperties>({
			customListId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for audio content type assigned targeting option. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. Explicitly targeting all options is not supported. Remove all audio content type targeting options to achieve this effect. */
	export interface AudioContentTypeAssignedTargetingOptionDetails {

		/** Required. The audio content type. */
		audioContentType?: AudioContentTypeAssignedTargetingOptionDetailsAudioContentType | null;
	}

	/** Details for audio content type assigned targeting option. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. Explicitly targeting all options is not supported. Remove all audio content type targeting options to achieve this effect. */
	export interface AudioContentTypeAssignedTargetingOptionDetailsFormProperties {

		/** Required. The audio content type. */
		audioContentType: FormControl<AudioContentTypeAssignedTargetingOptionDetailsAudioContentType | null | undefined>,
	}
	export function CreateAudioContentTypeAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<AudioContentTypeAssignedTargetingOptionDetailsFormProperties>({
			audioContentType: new FormControl<AudioContentTypeAssignedTargetingOptionDetailsAudioContentType | null | undefined>(undefined),
		});

	}

	export enum AudioContentTypeAssignedTargetingOptionDetailsAudioContentType { AUDIO_CONTENT_TYPE_UNSPECIFIED = 'AUDIO_CONTENT_TYPE_UNSPECIFIED', AUDIO_CONTENT_TYPE_UNKNOWN = 'AUDIO_CONTENT_TYPE_UNKNOWN', AUDIO_CONTENT_TYPE_MUSIC = 'AUDIO_CONTENT_TYPE_MUSIC', AUDIO_CONTENT_TYPE_BROADCAST = 'AUDIO_CONTENT_TYPE_BROADCAST', AUDIO_CONTENT_TYPE_PODCAST = 'AUDIO_CONTENT_TYPE_PODCAST' }


	/** Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`. If a resource does not have an `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` assigned targeting option, it is using the "Authorized Direct Sellers and Resellers" option. */
	export interface AuthorizedSellerStatusAssignedTargetingOptionDetails {

		/** Output only. The authorized seller status to target. */
		authorizedSellerStatus?: AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatus | null;

		/** Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`. */
		targetingOptionId?: string | null;
	}

	/** Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`. If a resource does not have an `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` assigned targeting option, it is using the "Authorized Direct Sellers and Resellers" option. */
	export interface AuthorizedSellerStatusAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The authorized seller status to target. */
		authorizedSellerStatus: FormControl<AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatus | null | undefined>,

		/** Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`. */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizedSellerStatusAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<AuthorizedSellerStatusAssignedTargetingOptionDetailsFormProperties>({
			authorizedSellerStatus: new FormControl<AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatus | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatus { AUTHORIZED_SELLER_STATUS_UNSPECIFIED = 'AUTHORIZED_SELLER_STATUS_UNSPECIFIED', AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY = 'AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY', AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS = 'AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS' }


	/** Details for assigned browser targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BROWSER`. */
	export interface BrowserAssignedTargetingOptionDetails {

		/** Output only. The display name of the browser. */
		displayName?: string | null;

		/** Indicates if this option is being negatively targeted. All assigned browser targeting options on the same resource must have the same value for this field. */
		negative?: boolean | null;

		/** Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_BROWSER`. */
		targetingOptionId?: string | null;
	}

	/** Details for assigned browser targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BROWSER`. */
	export interface BrowserAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the browser. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates if this option is being negatively targeted. All assigned browser targeting options on the same resource must have the same value for this field. */
		negative: FormControl<boolean | null | undefined>,

		/** Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_BROWSER`. */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateBrowserAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<BrowserAssignedTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			negative: new FormControl<boolean | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`. */
	export interface BusinessChainAssignedTargetingOptionDetails {

		/** Output only. The display name of a business chain, e.g. "KFC", "Chase Bank". */
		displayName?: string | null;

		/** Required. The radius of the area around the business chain that will be targeted. The units of the radius are specified by proximity_radius_unit. Must be 1 to 800 if unit is `DISTANCE_UNIT_KILOMETERS` and 1 to 500 if unit is `DISTANCE_UNIT_MILES`. The minimum increment for both cases is 0.1. Inputs will be rounded to the nearest acceptable value if it is too granular, e.g. 15.57 will become 15.6. */
		proximityRadiusAmount?: number | null;

		/** Required. The unit of distance by which the targeting radius is measured. */
		proximityRadiusUnit?: BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnit | null;

		/** Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_BUSINESS_CHAIN`. Accepted business chain targeting option IDs can be retrieved using SearchTargetingOptions. */
		targetingOptionId?: string | null;
	}

	/** Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`. */
	export interface BusinessChainAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The display name of a business chain, e.g. "KFC", "Chase Bank". */
		displayName: FormControl<string | null | undefined>,

		/** Required. The radius of the area around the business chain that will be targeted. The units of the radius are specified by proximity_radius_unit. Must be 1 to 800 if unit is `DISTANCE_UNIT_KILOMETERS` and 1 to 500 if unit is `DISTANCE_UNIT_MILES`. The minimum increment for both cases is 0.1. Inputs will be rounded to the nearest acceptable value if it is too granular, e.g. 15.57 will become 15.6. */
		proximityRadiusAmount: FormControl<number | null | undefined>,

		/** Required. The unit of distance by which the targeting radius is measured. */
		proximityRadiusUnit: FormControl<BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnit | null | undefined>,

		/** Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_BUSINESS_CHAIN`. Accepted business chain targeting option IDs can be retrieved using SearchTargetingOptions. */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateBusinessChainAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<BusinessChainAssignedTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			proximityRadiusAmount: new FormControl<number | null | undefined>(undefined),
			proximityRadiusUnit: new FormControl<BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnit | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnit { DISTANCE_UNIT_UNSPECIFIED = 'DISTANCE_UNIT_UNSPECIFIED', DISTANCE_UNIT_MILES = 'DISTANCE_UNIT_MILES', DISTANCE_UNIT_KILOMETERS = 'DISTANCE_UNIT_KILOMETERS' }


	/** Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`. */
	export interface CarrierAndIspAssignedTargetingOptionDetails {

		/** Output only. The display name of the carrier or ISP. */
		displayName?: string | null;

		/** Indicates if this option is being negatively targeted. All assigned carrier and ISP targeting options on the same resource must have the same value for this field. */
		negative?: boolean | null;

		/** Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_CARRIER_AND_ISP`. */
		targetingOptionId?: string | null;
	}

	/** Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`. */
	export interface CarrierAndIspAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the carrier or ISP. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates if this option is being negatively targeted. All assigned carrier and ISP targeting options on the same resource must have the same value for this field. */
		negative: FormControl<boolean | null | undefined>,

		/** Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_CARRIER_AND_ISP`. */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateCarrierAndIspAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<CarrierAndIspAssignedTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			negative: new FormControl<boolean | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Assigned category targeting option details. This will be populated in the category_details field when targeting_type is `TARGETING_TYPE_CATEGORY`. */
	export interface CategoryAssignedTargetingOptionDetails {

		/** Output only. The display name of the category. */
		displayName?: string | null;

		/** Indicates if this option is being negatively targeted. */
		negative?: boolean | null;

		/** Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CATEGORY`. */
		targetingOptionId?: string | null;
	}

	/** Assigned category targeting option details. This will be populated in the category_details field when targeting_type is `TARGETING_TYPE_CATEGORY`. */
	export interface CategoryAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the category. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates if this option is being negatively targeted. */
		negative: FormControl<boolean | null | undefined>,

		/** Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CATEGORY`. */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateCategoryAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<CategoryAssignedTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			negative: new FormControl<boolean | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for assigned channel targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CHANNEL`. */
	export interface ChannelAssignedTargetingOptionDetails {

		/** Required. ID of the channel. Should refer to the channel ID field on a [Partner-owned channel](partners.channels#Channel.FIELDS.channel_id) or [advertiser-owned channel](advertisers.channels#Channel.FIELDS.channel_id) resource. */
		channelId?: string | null;

		/** Indicates if this option is being negatively targeted. For advertiser level assigned targeting option, this field must be true. */
		negative?: boolean | null;
	}

	/** Details for assigned channel targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CHANNEL`. */
	export interface ChannelAssignedTargetingOptionDetailsFormProperties {

		/** Required. ID of the channel. Should refer to the channel ID field on a [Partner-owned channel](partners.channels#Channel.FIELDS.channel_id) or [advertiser-owned channel](advertisers.channels#Channel.FIELDS.channel_id) resource. */
		channelId: FormControl<string | null | undefined>,

		/** Indicates if this option is being negatively targeted. For advertiser level assigned targeting option, this field must be true. */
		negative: FormControl<boolean | null | undefined>,
	}
	export function CreateChannelAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<ChannelAssignedTargetingOptionDetailsFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			negative: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details for content duration assigned targeting option. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. Explicitly targeting all options is not supported. Remove all content duration targeting options to achieve this effect. */
	export interface ContentDurationAssignedTargetingOptionDetails {

		/** Output only. The content duration. */
		contentDuration?: ContentDurationAssignedTargetingOptionDetailsContentDuration | null;

		/** Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. */
		targetingOptionId?: string | null;
	}

	/** Details for content duration assigned targeting option. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. Explicitly targeting all options is not supported. Remove all content duration targeting options to achieve this effect. */
	export interface ContentDurationAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The content duration. */
		contentDuration: FormControl<ContentDurationAssignedTargetingOptionDetailsContentDuration | null | undefined>,

		/** Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateContentDurationAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<ContentDurationAssignedTargetingOptionDetailsFormProperties>({
			contentDuration: new FormControl<ContentDurationAssignedTargetingOptionDetailsContentDuration | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContentDurationAssignedTargetingOptionDetailsContentDuration { CONTENT_DURATION_UNSPECIFIED = 'CONTENT_DURATION_UNSPECIFIED', CONTENT_DURATION_UNKNOWN = 'CONTENT_DURATION_UNKNOWN', CONTENT_DURATION_0_TO_1_MIN = 'CONTENT_DURATION_0_TO_1_MIN', CONTENT_DURATION_1_TO_5_MIN = 'CONTENT_DURATION_1_TO_5_MIN', CONTENT_DURATION_5_TO_15_MIN = 'CONTENT_DURATION_5_TO_15_MIN', CONTENT_DURATION_15_TO_30_MIN = 'CONTENT_DURATION_15_TO_30_MIN', CONTENT_DURATION_30_TO_60_MIN = 'CONTENT_DURATION_30_TO_60_MIN', CONTENT_DURATION_OVER_60_MIN = 'CONTENT_DURATION_OVER_60_MIN' }


	/** Details for content genre assigned targeting option. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. Explicitly targeting all options is not supported. Remove all content genre targeting options to achieve this effect. */
	export interface ContentGenreAssignedTargetingOptionDetails {

		/** Output only. The display name of the content genre. */
		displayName?: string | null;

		/** Indicates if this option is being negatively targeted. */
		negative?: boolean | null;

		/** Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. */
		targetingOptionId?: string | null;
	}

	/** Details for content genre assigned targeting option. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. Explicitly targeting all options is not supported. Remove all content genre targeting options to achieve this effect. */
	export interface ContentGenreAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the content genre. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates if this option is being negatively targeted. */
		negative: FormControl<boolean | null | undefined>,

		/** Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateContentGenreAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<ContentGenreAssignedTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			negative: new FormControl<boolean | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`. */
	export interface ContentInstreamPositionAssignedTargetingOptionDetails {

		/** Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`. * `AD_TYPE_AUDIO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_AUDIO_DEFAULT`. */
		adType?: ContentInstreamPositionAssignedTargetingOptionDetailsAdType | null;

		/** Required. The content instream position for video or audio ads. */
		contentInstreamPosition?: ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPosition | null;
	}

	/** Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`. */
	export interface ContentInstreamPositionAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`. * `AD_TYPE_AUDIO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_AUDIO_DEFAULT`. */
		adType: FormControl<ContentInstreamPositionAssignedTargetingOptionDetailsAdType | null | undefined>,

		/** Required. The content instream position for video or audio ads. */
		contentInstreamPosition: FormControl<ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPosition | null | undefined>,
	}
	export function CreateContentInstreamPositionAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<ContentInstreamPositionAssignedTargetingOptionDetailsFormProperties>({
			adType: new FormControl<ContentInstreamPositionAssignedTargetingOptionDetailsAdType | null | undefined>(undefined),
			contentInstreamPosition: new FormControl<ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPosition | null | undefined>(undefined),
		});

	}

	export enum ContentInstreamPositionAssignedTargetingOptionDetailsAdType { AD_TYPE_UNSPECIFIED = 'AD_TYPE_UNSPECIFIED', AD_TYPE_DISPLAY = 'AD_TYPE_DISPLAY', AD_TYPE_VIDEO = 'AD_TYPE_VIDEO', AD_TYPE_AUDIO = 'AD_TYPE_AUDIO' }

	export enum ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPosition { CONTENT_INSTREAM_POSITION_UNSPECIFIED = 'CONTENT_INSTREAM_POSITION_UNSPECIFIED', CONTENT_INSTREAM_POSITION_PRE_ROLL = 'CONTENT_INSTREAM_POSITION_PRE_ROLL', CONTENT_INSTREAM_POSITION_MID_ROLL = 'CONTENT_INSTREAM_POSITION_MID_ROLL', CONTENT_INSTREAM_POSITION_POST_ROLL = 'CONTENT_INSTREAM_POSITION_POST_ROLL', CONTENT_INSTREAM_POSITION_UNKNOWN = 'CONTENT_INSTREAM_POSITION_UNKNOWN' }


	/** Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`. */
	export interface ContentOutstreamPositionAssignedTargetingOptionDetails {

		/** Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_DISPLAY`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_DISPLAY_DEFAULT`. * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`. */
		adType?: ContentInstreamPositionAssignedTargetingOptionDetailsAdType | null;

		/** Required. The content outstream position. */
		contentOutstreamPosition?: ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPosition | null;
	}

	/** Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`. */
	export interface ContentOutstreamPositionAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_DISPLAY`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_DISPLAY_DEFAULT`. * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`. */
		adType: FormControl<ContentInstreamPositionAssignedTargetingOptionDetailsAdType | null | undefined>,

		/** Required. The content outstream position. */
		contentOutstreamPosition: FormControl<ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPosition | null | undefined>,
	}
	export function CreateContentOutstreamPositionAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<ContentOutstreamPositionAssignedTargetingOptionDetailsFormProperties>({
			adType: new FormControl<ContentInstreamPositionAssignedTargetingOptionDetailsAdType | null | undefined>(undefined),
			contentOutstreamPosition: new FormControl<ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPosition | null | undefined>(undefined),
		});

	}

	export enum ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPosition { CONTENT_OUTSTREAM_POSITION_UNSPECIFIED = 'CONTENT_OUTSTREAM_POSITION_UNSPECIFIED', CONTENT_OUTSTREAM_POSITION_UNKNOWN = 'CONTENT_OUTSTREAM_POSITION_UNKNOWN', CONTENT_OUTSTREAM_POSITION_IN_ARTICLE = 'CONTENT_OUTSTREAM_POSITION_IN_ARTICLE', CONTENT_OUTSTREAM_POSITION_IN_BANNER = 'CONTENT_OUTSTREAM_POSITION_IN_BANNER', CONTENT_OUTSTREAM_POSITION_IN_FEED = 'CONTENT_OUTSTREAM_POSITION_IN_FEED', CONTENT_OUTSTREAM_POSITION_INTERSTITIAL = 'CONTENT_OUTSTREAM_POSITION_INTERSTITIAL' }


	/** Details for content stream type assigned targeting option. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. Explicitly targeting all options is not supported. Remove all content stream type targeting options to achieve this effect. */
	export interface ContentStreamTypeAssignedTargetingOptionDetails {

		/** Output only. The content stream type. */
		contentStreamType?: ContentStreamTypeAssignedTargetingOptionDetailsContentStreamType | null;

		/** Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. */
		targetingOptionId?: string | null;
	}

	/** Details for content stream type assigned targeting option. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. Explicitly targeting all options is not supported. Remove all content stream type targeting options to achieve this effect. */
	export interface ContentStreamTypeAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The content stream type. */
		contentStreamType: FormControl<ContentStreamTypeAssignedTargetingOptionDetailsContentStreamType | null | undefined>,

		/** Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateContentStreamTypeAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<ContentStreamTypeAssignedTargetingOptionDetailsFormProperties>({
			contentStreamType: new FormControl<ContentStreamTypeAssignedTargetingOptionDetailsContentStreamType | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContentStreamTypeAssignedTargetingOptionDetailsContentStreamType { CONTENT_STREAM_TYPE_UNSPECIFIED = 'CONTENT_STREAM_TYPE_UNSPECIFIED', CONTENT_LIVE_STREAM = 'CONTENT_LIVE_STREAM', CONTENT_ON_DEMAND = 'CONTENT_ON_DEMAND' }


	/** Representation of a segment of time defined on a specific day of the week and with a start and end time. The time represented by `start_hour` must be before the time represented by `end_hour`. */
	export interface DayAndTimeAssignedTargetingOptionDetails {

		/** Required. The day of the week for this day and time targeting setting. */
		dayOfWeek?: DayAndTimeAssignedTargetingOptionDetailsDayOfWeek | null;

		/** Required. The end hour for day and time targeting. Must be between 1 (1 hour after start of day) and 24 (end of day). */
		endHour?: number | null;

		/** Required. The start hour for day and time targeting. Must be between 0 (start of day) and 23 (1 hour before end of day). */
		startHour?: number | null;

		/** Required. The mechanism used to determine which timezone to use for this day and time targeting setting. */
		timeZoneResolution?: DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolution | null;
	}

	/** Representation of a segment of time defined on a specific day of the week and with a start and end time. The time represented by `start_hour` must be before the time represented by `end_hour`. */
	export interface DayAndTimeAssignedTargetingOptionDetailsFormProperties {

		/** Required. The day of the week for this day and time targeting setting. */
		dayOfWeek: FormControl<DayAndTimeAssignedTargetingOptionDetailsDayOfWeek | null | undefined>,

		/** Required. The end hour for day and time targeting. Must be between 1 (1 hour after start of day) and 24 (end of day). */
		endHour: FormControl<number | null | undefined>,

		/** Required. The start hour for day and time targeting. Must be between 0 (start of day) and 23 (1 hour before end of day). */
		startHour: FormControl<number | null | undefined>,

		/** Required. The mechanism used to determine which timezone to use for this day and time targeting setting. */
		timeZoneResolution: FormControl<DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolution | null | undefined>,
	}
	export function CreateDayAndTimeAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<DayAndTimeAssignedTargetingOptionDetailsFormProperties>({
			dayOfWeek: new FormControl<DayAndTimeAssignedTargetingOptionDetailsDayOfWeek | null | undefined>(undefined),
			endHour: new FormControl<number | null | undefined>(undefined),
			startHour: new FormControl<number | null | undefined>(undefined),
			timeZoneResolution: new FormControl<DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolution | null | undefined>(undefined),
		});

	}

	export enum DayAndTimeAssignedTargetingOptionDetailsDayOfWeek { DAY_OF_WEEK_UNSPECIFIED = 'DAY_OF_WEEK_UNSPECIFIED', MONDAY = 'MONDAY', TUESDAY = 'TUESDAY', WEDNESDAY = 'WEDNESDAY', THURSDAY = 'THURSDAY', FRIDAY = 'FRIDAY', SATURDAY = 'SATURDAY', SUNDAY = 'SUNDAY' }

	export enum DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolution { TIME_ZONE_RESOLUTION_UNSPECIFIED = 'TIME_ZONE_RESOLUTION_UNSPECIFIED', TIME_ZONE_RESOLUTION_END_USER = 'TIME_ZONE_RESOLUTION_END_USER', TIME_ZONE_RESOLUTION_ADVERTISER = 'TIME_ZONE_RESOLUTION_ADVERTISER' }


	/** Assigned device make and model targeting option details. This will be populated in the device_make_model_details field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`. */
	export interface DeviceMakeModelAssignedTargetingOptionDetails {

		/** Output only. The display name of the device make and model. */
		displayName?: string | null;

		/** Indicates if this option is being negatively targeted. */
		negative?: boolean | null;

		/** Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`. */
		targetingOptionId?: string | null;
	}

	/** Assigned device make and model targeting option details. This will be populated in the device_make_model_details field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`. */
	export interface DeviceMakeModelAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the device make and model. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates if this option is being negatively targeted. */
		negative: FormControl<boolean | null | undefined>,

		/** Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`. */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateDeviceMakeModelAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<DeviceMakeModelAssignedTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			negative: new FormControl<boolean | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Targeting details for device type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`. */
	export interface DeviceTypeAssignedTargetingOptionDetails {

		/** Required. The display name of the device type. */
		deviceType?: DeviceTypeAssignedTargetingOptionDetailsDeviceType | null;

		/** Output only. Bid multiplier allows you to show your ads more or less frequently based on the device type. It will apply a multiplier on the original bid price. When this field is 0, it indicates this field is not applicable instead of multiplying 0 on the original bid price. For example, if the bid price without multiplier is $10.0 and the multiplier is 1.5 for Tablet, the resulting bid price for Tablet will be $15.0. Only applicable to YouTube and Partners line items. */
		youtubeAndPartnersBidMultiplier?: number | null;
	}

	/** Targeting details for device type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`. */
	export interface DeviceTypeAssignedTargetingOptionDetailsFormProperties {

		/** Required. The display name of the device type. */
		deviceType: FormControl<DeviceTypeAssignedTargetingOptionDetailsDeviceType | null | undefined>,

		/** Output only. Bid multiplier allows you to show your ads more or less frequently based on the device type. It will apply a multiplier on the original bid price. When this field is 0, it indicates this field is not applicable instead of multiplying 0 on the original bid price. For example, if the bid price without multiplier is $10.0 and the multiplier is 1.5 for Tablet, the resulting bid price for Tablet will be $15.0. Only applicable to YouTube and Partners line items. */
		youtubeAndPartnersBidMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateDeviceTypeAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<DeviceTypeAssignedTargetingOptionDetailsFormProperties>({
			deviceType: new FormControl<DeviceTypeAssignedTargetingOptionDetailsDeviceType | null | undefined>(undefined),
			youtubeAndPartnersBidMultiplier: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DeviceTypeAssignedTargetingOptionDetailsDeviceType { DEVICE_TYPE_UNSPECIFIED = 'DEVICE_TYPE_UNSPECIFIED', DEVICE_TYPE_COMPUTER = 'DEVICE_TYPE_COMPUTER', DEVICE_TYPE_CONNECTED_TV = 'DEVICE_TYPE_CONNECTED_TV', DEVICE_TYPE_SMART_PHONE = 'DEVICE_TYPE_SMART_PHONE', DEVICE_TYPE_TABLET = 'DEVICE_TYPE_TABLET' }


	/** Targeting details for digital content label. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`. */
	export interface DigitalContentLabelAssignedTargetingOptionDetails {

		/** Required. The display name of the digital content label rating tier to be EXCLUDED. */
		excludedContentRatingTier?: DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTier | null;
	}

	/** Targeting details for digital content label. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`. */
	export interface DigitalContentLabelAssignedTargetingOptionDetailsFormProperties {

		/** Required. The display name of the digital content label rating tier to be EXCLUDED. */
		excludedContentRatingTier: FormControl<DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTier | null | undefined>,
	}
	export function CreateDigitalContentLabelAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<DigitalContentLabelAssignedTargetingOptionDetailsFormProperties>({
			excludedContentRatingTier: new FormControl<DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTier | null | undefined>(undefined),
		});

	}

	export enum DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTier { CONTENT_RATING_TIER_UNSPECIFIED = 'CONTENT_RATING_TIER_UNSPECIFIED', CONTENT_RATING_TIER_UNRATED = 'CONTENT_RATING_TIER_UNRATED', CONTENT_RATING_TIER_GENERAL = 'CONTENT_RATING_TIER_GENERAL', CONTENT_RATING_TIER_PARENTAL_GUIDANCE = 'CONTENT_RATING_TIER_PARENTAL_GUIDANCE', CONTENT_RATING_TIER_TEENS = 'CONTENT_RATING_TIER_TEENS', CONTENT_RATING_TIER_MATURE = 'CONTENT_RATING_TIER_MATURE', CONTENT_RATING_TIER_FAMILIES = 'CONTENT_RATING_TIER_FAMILIES' }


	/** Assigned environment targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`. */
	export interface EnvironmentAssignedTargetingOptionDetails {

		/** Required. The serving environment. */
		environment?: EnvironmentAssignedTargetingOptionDetailsEnvironment | null;
	}

	/** Assigned environment targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`. */
	export interface EnvironmentAssignedTargetingOptionDetailsFormProperties {

		/** Required. The serving environment. */
		environment: FormControl<EnvironmentAssignedTargetingOptionDetailsEnvironment | null | undefined>,
	}
	export function CreateEnvironmentAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<EnvironmentAssignedTargetingOptionDetailsFormProperties>({
			environment: new FormControl<EnvironmentAssignedTargetingOptionDetailsEnvironment | null | undefined>(undefined),
		});

	}

	export enum EnvironmentAssignedTargetingOptionDetailsEnvironment { ENVIRONMENT_UNSPECIFIED = 'ENVIRONMENT_UNSPECIFIED', ENVIRONMENT_WEB_OPTIMIZED = 'ENVIRONMENT_WEB_OPTIMIZED', ENVIRONMENT_WEB_NOT_OPTIMIZED = 'ENVIRONMENT_WEB_NOT_OPTIMIZED', ENVIRONMENT_APP = 'ENVIRONMENT_APP' }


	/** Details for assigned exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`. */
	export interface ExchangeAssignedTargetingOptionDetails {

		/** Required. The enum value for the exchange. */
		exchange?: ExchangeAssignedTargetingOptionDetailsExchange | null;
	}

	/** Details for assigned exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`. */
	export interface ExchangeAssignedTargetingOptionDetailsFormProperties {

		/** Required. The enum value for the exchange. */
		exchange: FormControl<ExchangeAssignedTargetingOptionDetailsExchange | null | undefined>,
	}
	export function CreateExchangeAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<ExchangeAssignedTargetingOptionDetailsFormProperties>({
			exchange: new FormControl<ExchangeAssignedTargetingOptionDetailsExchange | null | undefined>(undefined),
		});

	}

	export enum ExchangeAssignedTargetingOptionDetailsExchange { EXCHANGE_UNSPECIFIED = 'EXCHANGE_UNSPECIFIED', EXCHANGE_GOOGLE_AD_MANAGER = 'EXCHANGE_GOOGLE_AD_MANAGER', EXCHANGE_APPNEXUS = 'EXCHANGE_APPNEXUS', EXCHANGE_BRIGHTROLL = 'EXCHANGE_BRIGHTROLL', EXCHANGE_ADFORM = 'EXCHANGE_ADFORM', EXCHANGE_ADMETA = 'EXCHANGE_ADMETA', EXCHANGE_ADMIXER = 'EXCHANGE_ADMIXER', EXCHANGE_ADSMOGO = 'EXCHANGE_ADSMOGO', EXCHANGE_ADSWIZZ = 'EXCHANGE_ADSWIZZ', EXCHANGE_BIDSWITCH = 'EXCHANGE_BIDSWITCH', EXCHANGE_BRIGHTROLL_DISPLAY = 'EXCHANGE_BRIGHTROLL_DISPLAY', EXCHANGE_CADREON = 'EXCHANGE_CADREON', EXCHANGE_DAILYMOTION = 'EXCHANGE_DAILYMOTION', EXCHANGE_FIVE = 'EXCHANGE_FIVE', EXCHANGE_FLUCT = 'EXCHANGE_FLUCT', EXCHANGE_FREEWHEEL = 'EXCHANGE_FREEWHEEL', EXCHANGE_GENIEE = 'EXCHANGE_GENIEE', EXCHANGE_GUMGUM = 'EXCHANGE_GUMGUM', EXCHANGE_IMOBILE = 'EXCHANGE_IMOBILE', EXCHANGE_IBILLBOARD = 'EXCHANGE_IBILLBOARD', EXCHANGE_IMPROVE_DIGITAL = 'EXCHANGE_IMPROVE_DIGITAL', EXCHANGE_INDEX = 'EXCHANGE_INDEX', EXCHANGE_KARGO = 'EXCHANGE_KARGO', EXCHANGE_MICROAD = 'EXCHANGE_MICROAD', EXCHANGE_MOPUB = 'EXCHANGE_MOPUB', EXCHANGE_NEND = 'EXCHANGE_NEND', EXCHANGE_ONE_BY_AOL_DISPLAY = 'EXCHANGE_ONE_BY_AOL_DISPLAY', EXCHANGE_ONE_BY_AOL_MOBILE = 'EXCHANGE_ONE_BY_AOL_MOBILE', EXCHANGE_ONE_BY_AOL_VIDEO = 'EXCHANGE_ONE_BY_AOL_VIDEO', EXCHANGE_OOYALA = 'EXCHANGE_OOYALA', EXCHANGE_OPENX = 'EXCHANGE_OPENX', EXCHANGE_PERMODO = 'EXCHANGE_PERMODO', EXCHANGE_PLATFORMONE = 'EXCHANGE_PLATFORMONE', EXCHANGE_PLATFORMID = 'EXCHANGE_PLATFORMID', EXCHANGE_PUBMATIC = 'EXCHANGE_PUBMATIC', EXCHANGE_PULSEPOINT = 'EXCHANGE_PULSEPOINT', EXCHANGE_REVENUEMAX = 'EXCHANGE_REVENUEMAX', EXCHANGE_RUBICON = 'EXCHANGE_RUBICON', EXCHANGE_SMARTCLIP = 'EXCHANGE_SMARTCLIP', EXCHANGE_SMARTRTB = 'EXCHANGE_SMARTRTB', EXCHANGE_SMARTSTREAMTV = 'EXCHANGE_SMARTSTREAMTV', EXCHANGE_SOVRN = 'EXCHANGE_SOVRN', EXCHANGE_SPOTXCHANGE = 'EXCHANGE_SPOTXCHANGE', EXCHANGE_STROER = 'EXCHANGE_STROER', EXCHANGE_TEADSTV = 'EXCHANGE_TEADSTV', EXCHANGE_TELARIA = 'EXCHANGE_TELARIA', EXCHANGE_TVN = 'EXCHANGE_TVN', EXCHANGE_UNITED = 'EXCHANGE_UNITED', EXCHANGE_YIELDLAB = 'EXCHANGE_YIELDLAB', EXCHANGE_YIELDMO = 'EXCHANGE_YIELDMO', EXCHANGE_UNRULYX = 'EXCHANGE_UNRULYX', EXCHANGE_OPEN8 = 'EXCHANGE_OPEN8', EXCHANGE_TRITON = 'EXCHANGE_TRITON', EXCHANGE_TRIPLELIFT = 'EXCHANGE_TRIPLELIFT', EXCHANGE_TABOOLA = 'EXCHANGE_TABOOLA', EXCHANGE_INMOBI = 'EXCHANGE_INMOBI', EXCHANGE_SMAATO = 'EXCHANGE_SMAATO', EXCHANGE_AJA = 'EXCHANGE_AJA', EXCHANGE_SUPERSHIP = 'EXCHANGE_SUPERSHIP', EXCHANGE_NEXSTAR_DIGITAL = 'EXCHANGE_NEXSTAR_DIGITAL', EXCHANGE_WAZE = 'EXCHANGE_WAZE', EXCHANGE_SOUNDCAST = 'EXCHANGE_SOUNDCAST', EXCHANGE_SHARETHROUGH = 'EXCHANGE_SHARETHROUGH', EXCHANGE_FYBER = 'EXCHANGE_FYBER', EXCHANGE_RED_FOR_PUBLISHERS = 'EXCHANGE_RED_FOR_PUBLISHERS', EXCHANGE_MEDIANET = 'EXCHANGE_MEDIANET', EXCHANGE_TAPJOY = 'EXCHANGE_TAPJOY', EXCHANGE_VISTAR = 'EXCHANGE_VISTAR', EXCHANGE_DAX = 'EXCHANGE_DAX', EXCHANGE_JCD = 'EXCHANGE_JCD', EXCHANGE_PLACE_EXCHANGE = 'EXCHANGE_PLACE_EXCHANGE', EXCHANGE_APPLOVIN = 'EXCHANGE_APPLOVIN', EXCHANGE_CONNATIX = 'EXCHANGE_CONNATIX', EXCHANGE_RESET_DIGITAL = 'EXCHANGE_RESET_DIGITAL', EXCHANGE_HIVESTACK = 'EXCHANGE_HIVESTACK' }


	/** Details for assigned gender targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GENDER`. */
	export interface GenderAssignedTargetingOptionDetails {

		/** Required. The gender of the audience. */
		gender?: GenderAssignedTargetingOptionDetailsGender | null;
	}

	/** Details for assigned gender targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GENDER`. */
	export interface GenderAssignedTargetingOptionDetailsFormProperties {

		/** Required. The gender of the audience. */
		gender: FormControl<GenderAssignedTargetingOptionDetailsGender | null | undefined>,
	}
	export function CreateGenderAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<GenderAssignedTargetingOptionDetailsFormProperties>({
			gender: new FormControl<GenderAssignedTargetingOptionDetailsGender | null | undefined>(undefined),
		});

	}

	export enum GenderAssignedTargetingOptionDetailsGender { GENDER_UNSPECIFIED = 'GENDER_UNSPECIFIED', GENDER_MALE = 'GENDER_MALE', GENDER_FEMALE = 'GENDER_FEMALE', GENDER_UNKNOWN = 'GENDER_UNKNOWN' }


	/** Details for assigned geographic region targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GEO_REGION`. */
	export interface GeoRegionAssignedTargetingOptionDetails {

		/** Output only. The display name of the geographic region (e.g., "Ontario, Canada"). */
		displayName?: string | null;

		/** Output only. The type of geographic region targeting. */
		geoRegionType?: GeoRegionAssignedTargetingOptionDetailsGeoRegionType | null;

		/** Indicates if this option is being negatively targeted. */
		negative?: boolean | null;

		/** Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_GEO_REGION`. */
		targetingOptionId?: string | null;
	}

	/** Details for assigned geographic region targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GEO_REGION`. */
	export interface GeoRegionAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the geographic region (e.g., "Ontario, Canada"). */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The type of geographic region targeting. */
		geoRegionType: FormControl<GeoRegionAssignedTargetingOptionDetailsGeoRegionType | null | undefined>,

		/** Indicates if this option is being negatively targeted. */
		negative: FormControl<boolean | null | undefined>,

		/** Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_GEO_REGION`. */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateGeoRegionAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<GeoRegionAssignedTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			geoRegionType: new FormControl<GeoRegionAssignedTargetingOptionDetailsGeoRegionType | null | undefined>(undefined),
			negative: new FormControl<boolean | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GeoRegionAssignedTargetingOptionDetailsGeoRegionType { GEO_REGION_TYPE_UNKNOWN = 'GEO_REGION_TYPE_UNKNOWN', GEO_REGION_TYPE_OTHER = 'GEO_REGION_TYPE_OTHER', GEO_REGION_TYPE_COUNTRY = 'GEO_REGION_TYPE_COUNTRY', GEO_REGION_TYPE_REGION = 'GEO_REGION_TYPE_REGION', GEO_REGION_TYPE_TERRITORY = 'GEO_REGION_TYPE_TERRITORY', GEO_REGION_TYPE_PROVINCE = 'GEO_REGION_TYPE_PROVINCE', GEO_REGION_TYPE_STATE = 'GEO_REGION_TYPE_STATE', GEO_REGION_TYPE_PREFECTURE = 'GEO_REGION_TYPE_PREFECTURE', GEO_REGION_TYPE_GOVERNORATE = 'GEO_REGION_TYPE_GOVERNORATE', GEO_REGION_TYPE_CANTON = 'GEO_REGION_TYPE_CANTON', GEO_REGION_TYPE_UNION_TERRITORY = 'GEO_REGION_TYPE_UNION_TERRITORY', GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY = 'GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY', GEO_REGION_TYPE_DMA_REGION = 'GEO_REGION_TYPE_DMA_REGION', GEO_REGION_TYPE_METRO = 'GEO_REGION_TYPE_METRO', GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT = 'GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT', GEO_REGION_TYPE_COUNTY = 'GEO_REGION_TYPE_COUNTY', GEO_REGION_TYPE_MUNICIPALITY = 'GEO_REGION_TYPE_MUNICIPALITY', GEO_REGION_TYPE_CITY = 'GEO_REGION_TYPE_CITY', GEO_REGION_TYPE_POSTAL_CODE = 'GEO_REGION_TYPE_POSTAL_CODE', GEO_REGION_TYPE_DEPARTMENT = 'GEO_REGION_TYPE_DEPARTMENT', GEO_REGION_TYPE_AIRPORT = 'GEO_REGION_TYPE_AIRPORT', GEO_REGION_TYPE_TV_REGION = 'GEO_REGION_TYPE_TV_REGION', GEO_REGION_TYPE_OKRUG = 'GEO_REGION_TYPE_OKRUG', GEO_REGION_TYPE_BOROUGH = 'GEO_REGION_TYPE_BOROUGH', GEO_REGION_TYPE_CITY_REGION = 'GEO_REGION_TYPE_CITY_REGION', GEO_REGION_TYPE_ARRONDISSEMENT = 'GEO_REGION_TYPE_ARRONDISSEMENT', GEO_REGION_TYPE_NEIGHBORHOOD = 'GEO_REGION_TYPE_NEIGHBORHOOD', GEO_REGION_TYPE_UNIVERSITY = 'GEO_REGION_TYPE_UNIVERSITY', GEO_REGION_TYPE_DISTRICT = 'GEO_REGION_TYPE_DISTRICT' }


	/** Details for assigned household income targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`. */
	export interface HouseholdIncomeAssignedTargetingOptionDetails {

		/** Required. The household income of the audience. */
		householdIncome?: HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncome | null;
	}

	/** Details for assigned household income targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`. */
	export interface HouseholdIncomeAssignedTargetingOptionDetailsFormProperties {

		/** Required. The household income of the audience. */
		householdIncome: FormControl<HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncome | null | undefined>,
	}
	export function CreateHouseholdIncomeAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<HouseholdIncomeAssignedTargetingOptionDetailsFormProperties>({
			householdIncome: new FormControl<HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncome | null | undefined>(undefined),
		});

	}

	export enum HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncome { HOUSEHOLD_INCOME_UNSPECIFIED = 'HOUSEHOLD_INCOME_UNSPECIFIED', HOUSEHOLD_INCOME_UNKNOWN = 'HOUSEHOLD_INCOME_UNKNOWN', HOUSEHOLD_INCOME_LOWER_50_PERCENT = 'HOUSEHOLD_INCOME_LOWER_50_PERCENT', HOUSEHOLD_INCOME_TOP_41_TO_50_PERCENT = 'HOUSEHOLD_INCOME_TOP_41_TO_50_PERCENT', HOUSEHOLD_INCOME_TOP_31_TO_40_PERCENT = 'HOUSEHOLD_INCOME_TOP_31_TO_40_PERCENT', HOUSEHOLD_INCOME_TOP_21_TO_30_PERCENT = 'HOUSEHOLD_INCOME_TOP_21_TO_30_PERCENT', HOUSEHOLD_INCOME_TOP_11_TO_20_PERCENT = 'HOUSEHOLD_INCOME_TOP_11_TO_20_PERCENT', HOUSEHOLD_INCOME_TOP_10_PERCENT = 'HOUSEHOLD_INCOME_TOP_10_PERCENT' }

	export enum AssignedTargetingOptionInheritance { INHERITANCE_UNSPECIFIED = 'INHERITANCE_UNSPECIFIED', NOT_INHERITED = 'NOT_INHERITED', INHERITED_FROM_PARTNER = 'INHERITED_FROM_PARTNER', INHERITED_FROM_ADVERTISER = 'INHERITED_FROM_ADVERTISER' }


	/** Targeting details for inventory source. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE`. */
	export interface InventorySourceAssignedTargetingOptionDetails {

		/** Required. ID of the inventory source. Should refer to the inventory_source_id field of an InventorySource resource. */
		inventorySourceId?: string | null;
	}

	/** Targeting details for inventory source. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE`. */
	export interface InventorySourceAssignedTargetingOptionDetailsFormProperties {

		/** Required. ID of the inventory source. Should refer to the inventory_source_id field of an InventorySource resource. */
		inventorySourceId: FormControl<string | null | undefined>,
	}
	export function CreateInventorySourceAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<InventorySourceAssignedTargetingOptionDetailsFormProperties>({
			inventorySourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Targeting details for inventory source group. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_GROUP`. */
	export interface InventorySourceGroupAssignedTargetingOptionDetails {

		/** Required. ID of the inventory source group. Should refer to the inventory_source_group_id field of an InventorySourceGroup resource. */
		inventorySourceGroupId?: string | null;
	}

	/** Targeting details for inventory source group. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_GROUP`. */
	export interface InventorySourceGroupAssignedTargetingOptionDetailsFormProperties {

		/** Required. ID of the inventory source group. Should refer to the inventory_source_group_id field of an InventorySourceGroup resource. */
		inventorySourceGroupId: FormControl<string | null | undefined>,
	}
	export function CreateInventorySourceGroupAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<InventorySourceGroupAssignedTargetingOptionDetailsFormProperties>({
			inventorySourceGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for assigned keyword targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_KEYWORD`. */
	export interface KeywordAssignedTargetingOptionDetails {

		/** Required. The keyword, for example `car insurance`. Positive keyword cannot be offensive word. Must be UTF-8 encoded with a maximum size of 255 bytes. Maximum number of characters is 80. Maximum number of words is 10. */
		keyword?: string | null;

		/** Indicates if this option is being negatively targeted. */
		negative?: boolean | null;
	}

	/** Details for assigned keyword targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_KEYWORD`. */
	export interface KeywordAssignedTargetingOptionDetailsFormProperties {

		/** Required. The keyword, for example `car insurance`. Positive keyword cannot be offensive word. Must be UTF-8 encoded with a maximum size of 255 bytes. Maximum number of characters is 80. Maximum number of words is 10. */
		keyword: FormControl<string | null | undefined>,

		/** Indicates if this option is being negatively targeted. */
		negative: FormControl<boolean | null | undefined>,
	}
	export function CreateKeywordAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<KeywordAssignedTargetingOptionDetailsFormProperties>({
			keyword: new FormControl<string | null | undefined>(undefined),
			negative: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`. */
	export interface LanguageAssignedTargetingOptionDetails {

		/** Output only. The display name of the language (e.g., "French"). */
		displayName?: string | null;

		/** Indicates if this option is being negatively targeted. All assigned language targeting options on the same resource must have the same value for this field. */
		negative?: boolean | null;

		/** Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_LANGUAGE`. */
		targetingOptionId?: string | null;
	}

	/** Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`. */
	export interface LanguageAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the language (e.g., "French"). */
		displayName: FormControl<string | null | undefined>,

		/** Indicates if this option is being negatively targeted. All assigned language targeting options on the same resource must have the same value for this field. */
		negative: FormControl<boolean | null | undefined>,

		/** Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_LANGUAGE`. */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateLanguageAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<LanguageAssignedTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			negative: new FormControl<boolean | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for native content position assigned targeting option. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. Explicitly targeting all options is not supported. Remove all native content position targeting options to achieve this effect. */
	export interface NativeContentPositionAssignedTargetingOptionDetails {

		/** Required. The content position. */
		contentPosition?: NativeContentPositionAssignedTargetingOptionDetailsContentPosition | null;
	}

	/** Details for native content position assigned targeting option. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. Explicitly targeting all options is not supported. Remove all native content position targeting options to achieve this effect. */
	export interface NativeContentPositionAssignedTargetingOptionDetailsFormProperties {

		/** Required. The content position. */
		contentPosition: FormControl<NativeContentPositionAssignedTargetingOptionDetailsContentPosition | null | undefined>,
	}
	export function CreateNativeContentPositionAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<NativeContentPositionAssignedTargetingOptionDetailsFormProperties>({
			contentPosition: new FormControl<NativeContentPositionAssignedTargetingOptionDetailsContentPosition | null | undefined>(undefined),
		});

	}

	export enum NativeContentPositionAssignedTargetingOptionDetailsContentPosition { NATIVE_CONTENT_POSITION_UNSPECIFIED = 'NATIVE_CONTENT_POSITION_UNSPECIFIED', NATIVE_CONTENT_POSITION_UNKNOWN = 'NATIVE_CONTENT_POSITION_UNKNOWN', NATIVE_CONTENT_POSITION_IN_ARTICLE = 'NATIVE_CONTENT_POSITION_IN_ARTICLE', NATIVE_CONTENT_POSITION_IN_FEED = 'NATIVE_CONTENT_POSITION_IN_FEED', NATIVE_CONTENT_POSITION_PERIPHERAL = 'NATIVE_CONTENT_POSITION_PERIPHERAL', NATIVE_CONTENT_POSITION_RECOMMENDATION = 'NATIVE_CONTENT_POSITION_RECOMMENDATION' }


	/** Targeting details for negative keyword list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`. */
	export interface NegativeKeywordListAssignedTargetingOptionDetails {

		/** Required. ID of the negative keyword list. Should refer to the negative_keyword_list_id field of a NegativeKeywordList resource. */
		negativeKeywordListId?: string | null;
	}

	/** Targeting details for negative keyword list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`. */
	export interface NegativeKeywordListAssignedTargetingOptionDetailsFormProperties {

		/** Required. ID of the negative keyword list. Should refer to the negative_keyword_list_id field of a NegativeKeywordList resource. */
		negativeKeywordListId: FormControl<string | null | undefined>,
	}
	export function CreateNegativeKeywordListAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<NegativeKeywordListAssignedTargetingOptionDetailsFormProperties>({
			negativeKeywordListId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a targetable Open Measurement enabled inventory type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_OMID`. */
	export interface OmidAssignedTargetingOptionDetails {

		/** Required. The type of Open Measurement enabled inventory. */
		omid?: OmidAssignedTargetingOptionDetailsOmid | null;
	}

	/** Represents a targetable Open Measurement enabled inventory type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_OMID`. */
	export interface OmidAssignedTargetingOptionDetailsFormProperties {

		/** Required. The type of Open Measurement enabled inventory. */
		omid: FormControl<OmidAssignedTargetingOptionDetailsOmid | null | undefined>,
	}
	export function CreateOmidAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<OmidAssignedTargetingOptionDetailsFormProperties>({
			omid: new FormControl<OmidAssignedTargetingOptionDetailsOmid | null | undefined>(undefined),
		});

	}

	export enum OmidAssignedTargetingOptionDetailsOmid { OMID_UNSPECIFIED = 'OMID_UNSPECIFIED', OMID_FOR_MOBILE_DISPLAY_ADS = 'OMID_FOR_MOBILE_DISPLAY_ADS' }


	/** On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`. */
	export interface OnScreenPositionAssignedTargetingOptionDetails {

		/** Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_DISPLAY`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_DISPLAY_DEFAULT`. * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`. */
		adType?: ContentInstreamPositionAssignedTargetingOptionDetailsAdType | null;

		/** Output only. The on screen position. */
		onScreenPosition?: OnScreenPositionAssignedTargetingOptionDetailsOnScreenPosition | null;

		/** Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`. */
		targetingOptionId?: string | null;
	}

	/** On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`. */
	export interface OnScreenPositionAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_DISPLAY`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_DISPLAY_DEFAULT`. * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`. */
		adType: FormControl<ContentInstreamPositionAssignedTargetingOptionDetailsAdType | null | undefined>,

		/** Output only. The on screen position. */
		onScreenPosition: FormControl<OnScreenPositionAssignedTargetingOptionDetailsOnScreenPosition | null | undefined>,

		/** Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`. */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateOnScreenPositionAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<OnScreenPositionAssignedTargetingOptionDetailsFormProperties>({
			adType: new FormControl<ContentInstreamPositionAssignedTargetingOptionDetailsAdType | null | undefined>(undefined),
			onScreenPosition: new FormControl<OnScreenPositionAssignedTargetingOptionDetailsOnScreenPosition | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OnScreenPositionAssignedTargetingOptionDetailsOnScreenPosition { ON_SCREEN_POSITION_UNSPECIFIED = 'ON_SCREEN_POSITION_UNSPECIFIED', ON_SCREEN_POSITION_UNKNOWN = 'ON_SCREEN_POSITION_UNKNOWN', ON_SCREEN_POSITION_ABOVE_THE_FOLD = 'ON_SCREEN_POSITION_ABOVE_THE_FOLD', ON_SCREEN_POSITION_BELOW_THE_FOLD = 'ON_SCREEN_POSITION_BELOW_THE_FOLD' }


	/** Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`. */
	export interface OperatingSystemAssignedTargetingOptionDetails {

		/** Output only. The display name of the operating system. */
		displayName?: string | null;

		/** Indicates if this option is being negatively targeted. */
		negative?: boolean | null;

		/** Required. The targeting option ID populated in targeting_option_id field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`. */
		targetingOptionId?: string | null;
	}

	/** Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`. */
	export interface OperatingSystemAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the operating system. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates if this option is being negatively targeted. */
		negative: FormControl<boolean | null | undefined>,

		/** Required. The targeting option ID populated in targeting_option_id field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`. */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateOperatingSystemAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<OperatingSystemAssignedTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			negative: new FormControl<boolean | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for assigned parental status targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`. */
	export interface ParentalStatusAssignedTargetingOptionDetails {

		/** Required. The parental status of the audience. */
		parentalStatus?: ParentalStatusAssignedTargetingOptionDetailsParentalStatus | null;
	}

	/** Details for assigned parental status targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`. */
	export interface ParentalStatusAssignedTargetingOptionDetailsFormProperties {

		/** Required. The parental status of the audience. */
		parentalStatus: FormControl<ParentalStatusAssignedTargetingOptionDetailsParentalStatus | null | undefined>,
	}
	export function CreateParentalStatusAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<ParentalStatusAssignedTargetingOptionDetailsFormProperties>({
			parentalStatus: new FormControl<ParentalStatusAssignedTargetingOptionDetailsParentalStatus | null | undefined>(undefined),
		});

	}

	export enum ParentalStatusAssignedTargetingOptionDetailsParentalStatus { PARENTAL_STATUS_UNSPECIFIED = 'PARENTAL_STATUS_UNSPECIFIED', PARENTAL_STATUS_PARENT = 'PARENTAL_STATUS_PARENT', PARENTAL_STATUS_NOT_A_PARENT = 'PARENTAL_STATUS_NOT_A_PARENT', PARENTAL_STATUS_UNKNOWN = 'PARENTAL_STATUS_UNKNOWN' }


	/** Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`. */
	export interface PoiAssignedTargetingOptionDetails {

		/** Output only. The display name of a POI, e.g. "Times Square", "Space Needle", followed by its full address if available. */
		displayName?: string | null;

		/** Output only. Latitude of the POI rounding to 6th decimal place. */
		latitude?: number | null;

		/** Output only. Longitude of the POI rounding to 6th decimal place. */
		longitude?: number | null;

		/** Required. The radius of the area around the POI that will be targeted. The units of the radius are specified by proximity_radius_unit. Must be 1 to 800 if unit is `DISTANCE_UNIT_KILOMETERS` and 1 to 500 if unit is `DISTANCE_UNIT_MILES`. */
		proximityRadiusAmount?: number | null;

		/** Required. The unit of distance by which the targeting radius is measured. */
		proximityRadiusUnit?: BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnit | null;

		/** Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_POI`. Accepted POI targeting option IDs can be retrieved using `targetingTypes.targetingOptions.search`. If targeting a specific latitude/longitude coordinate removed from an address or POI name, you can generate the necessary targeting option ID by rounding the desired coordinate values to the 6th decimal place, removing the decimals, and concatenating the string values separated by a semicolon. For example, you can target the latitude/longitude pair of 40.7414691, -74.003387 using the targeting option ID "40741469;-74003387". **Upon** **creation, this field value will be updated to append a semicolon and** **alphanumerical hash value if only latitude/longitude coordinates are** **provided.** */
		targetingOptionId?: string | null;
	}

	/** Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`. */
	export interface PoiAssignedTargetingOptionDetailsFormProperties {

		/** Output only. The display name of a POI, e.g. "Times Square", "Space Needle", followed by its full address if available. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Latitude of the POI rounding to 6th decimal place. */
		latitude: FormControl<number | null | undefined>,

		/** Output only. Longitude of the POI rounding to 6th decimal place. */
		longitude: FormControl<number | null | undefined>,

		/** Required. The radius of the area around the POI that will be targeted. The units of the radius are specified by proximity_radius_unit. Must be 1 to 800 if unit is `DISTANCE_UNIT_KILOMETERS` and 1 to 500 if unit is `DISTANCE_UNIT_MILES`. */
		proximityRadiusAmount: FormControl<number | null | undefined>,

		/** Required. The unit of distance by which the targeting radius is measured. */
		proximityRadiusUnit: FormControl<BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnit | null | undefined>,

		/** Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_POI`. Accepted POI targeting option IDs can be retrieved using `targetingTypes.targetingOptions.search`. If targeting a specific latitude/longitude coordinate removed from an address or POI name, you can generate the necessary targeting option ID by rounding the desired coordinate values to the 6th decimal place, removing the decimals, and concatenating the string values separated by a semicolon. For example, you can target the latitude/longitude pair of 40.7414691, -74.003387 using the targeting option ID "40741469;-74003387". **Upon** **creation, this field value will be updated to append a semicolon and** **alphanumerical hash value if only latitude/longitude coordinates are** **provided.** */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreatePoiAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<PoiAssignedTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			proximityRadiusAmount: new FormControl<number | null | undefined>(undefined),
			proximityRadiusUnit: new FormControl<BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnit | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`. */
	export interface ProximityLocationListAssignedTargetingOptionDetails {

		/** Required. ID of the proximity location list. Should refer to the location_list_id field of a LocationList resource whose type is `TARGETING_LOCATION_TYPE_PROXIMITY`. */
		proximityLocationListId?: string | null;

		/** Required. Radius expressed in the distance units set in proximity_radius_unit. This represents the size of the area around a chosen location that will be targeted. Radius should be between 1 and 500 miles or 800 kilometers. */
		proximityRadius?: number | null;

		/** Required. Radius distance units. */
		proximityRadiusUnit?: ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnit | null;
	}

	/** Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`. */
	export interface ProximityLocationListAssignedTargetingOptionDetailsFormProperties {

		/** Required. ID of the proximity location list. Should refer to the location_list_id field of a LocationList resource whose type is `TARGETING_LOCATION_TYPE_PROXIMITY`. */
		proximityLocationListId: FormControl<string | null | undefined>,

		/** Required. Radius expressed in the distance units set in proximity_radius_unit. This represents the size of the area around a chosen location that will be targeted. Radius should be between 1 and 500 miles or 800 kilometers. */
		proximityRadius: FormControl<number | null | undefined>,

		/** Required. Radius distance units. */
		proximityRadiusUnit: FormControl<ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnit | null | undefined>,
	}
	export function CreateProximityLocationListAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<ProximityLocationListAssignedTargetingOptionDetailsFormProperties>({
			proximityLocationListId: new FormControl<string | null | undefined>(undefined),
			proximityRadius: new FormControl<number | null | undefined>(undefined),
			proximityRadiusUnit: new FormControl<ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnit | null | undefined>(undefined),
		});

	}

	export enum ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnit { PROXIMITY_RADIUS_UNIT_UNSPECIFIED = 'PROXIMITY_RADIUS_UNIT_UNSPECIFIED', PROXIMITY_RADIUS_UNIT_MILES = 'PROXIMITY_RADIUS_UNIT_MILES', PROXIMITY_RADIUS_UNIT_KILOMETERS = 'PROXIMITY_RADIUS_UNIT_KILOMETERS' }


	/** Targeting details for regional location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_REGIONAL_LOCATION_LIST`. */
	export interface RegionalLocationListAssignedTargetingOptionDetails {

		/** Indicates if this option is being negatively targeted. */
		negative?: boolean | null;

		/** Required. ID of the regional location list. Should refer to the location_list_id field of a LocationList resource whose type is `TARGETING_LOCATION_TYPE_REGIONAL`. */
		regionalLocationListId?: string | null;
	}

	/** Targeting details for regional location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_REGIONAL_LOCATION_LIST`. */
	export interface RegionalLocationListAssignedTargetingOptionDetailsFormProperties {

		/** Indicates if this option is being negatively targeted. */
		negative: FormControl<boolean | null | undefined>,

		/** Required. ID of the regional location list. Should refer to the location_list_id field of a LocationList resource whose type is `TARGETING_LOCATION_TYPE_REGIONAL`. */
		regionalLocationListId: FormControl<string | null | undefined>,
	}
	export function CreateRegionalLocationListAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<RegionalLocationListAssignedTargetingOptionDetailsFormProperties>({
			negative: new FormControl<boolean | null | undefined>(undefined),
			regionalLocationListId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Targeting details for sensitive category. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`. */
	export interface SensitiveCategoryAssignedTargetingOptionDetails {

		/** Required. An enum for the DV360 Sensitive category content classified to be EXCLUDED. */
		excludedSensitiveCategory?: SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategory | null;
	}

	/** Targeting details for sensitive category. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`. */
	export interface SensitiveCategoryAssignedTargetingOptionDetailsFormProperties {

		/** Required. An enum for the DV360 Sensitive category content classified to be EXCLUDED. */
		excludedSensitiveCategory: FormControl<SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategory | null | undefined>,
	}
	export function CreateSensitiveCategoryAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<SensitiveCategoryAssignedTargetingOptionDetailsFormProperties>({
			excludedSensitiveCategory: new FormControl<SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategory | null | undefined>(undefined),
		});

	}

	export enum SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategory { SENSITIVE_CATEGORY_UNSPECIFIED = 'SENSITIVE_CATEGORY_UNSPECIFIED', SENSITIVE_CATEGORY_ADULT = 'SENSITIVE_CATEGORY_ADULT', SENSITIVE_CATEGORY_DEROGATORY = 'SENSITIVE_CATEGORY_DEROGATORY', SENSITIVE_CATEGORY_DOWNLOADS_SHARING = 'SENSITIVE_CATEGORY_DOWNLOADS_SHARING', SENSITIVE_CATEGORY_WEAPONS = 'SENSITIVE_CATEGORY_WEAPONS', SENSITIVE_CATEGORY_GAMBLING = 'SENSITIVE_CATEGORY_GAMBLING', SENSITIVE_CATEGORY_VIOLENCE = 'SENSITIVE_CATEGORY_VIOLENCE', SENSITIVE_CATEGORY_SUGGESTIVE = 'SENSITIVE_CATEGORY_SUGGESTIVE', SENSITIVE_CATEGORY_PROFANITY = 'SENSITIVE_CATEGORY_PROFANITY', SENSITIVE_CATEGORY_ALCOHOL = 'SENSITIVE_CATEGORY_ALCOHOL', SENSITIVE_CATEGORY_DRUGS = 'SENSITIVE_CATEGORY_DRUGS', SENSITIVE_CATEGORY_TOBACCO = 'SENSITIVE_CATEGORY_TOBACCO', SENSITIVE_CATEGORY_POLITICS = 'SENSITIVE_CATEGORY_POLITICS', SENSITIVE_CATEGORY_RELIGION = 'SENSITIVE_CATEGORY_RELIGION', SENSITIVE_CATEGORY_TRAGEDY = 'SENSITIVE_CATEGORY_TRAGEDY', SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS = 'SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS', SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES = 'SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES', SENSITIVE_CATEGORY_SHOCKING = 'SENSITIVE_CATEGORY_SHOCKING', SENSITIVE_CATEGORY_EMBEDDED_VIDEO = 'SENSITIVE_CATEGORY_EMBEDDED_VIDEO', SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO = 'SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO' }


	/** Details for session position assigned targeting option. This will be populated in the session_position_details field when targeting_type is `TARGETING_TYPE_SESSION_POSITION`. */
	export interface SessionPositionAssignedTargetingOptionDetails {

		/** The position where the ad will show in a session. */
		sessionPosition?: SessionPositionAssignedTargetingOptionDetailsSessionPosition | null;
	}

	/** Details for session position assigned targeting option. This will be populated in the session_position_details field when targeting_type is `TARGETING_TYPE_SESSION_POSITION`. */
	export interface SessionPositionAssignedTargetingOptionDetailsFormProperties {

		/** The position where the ad will show in a session. */
		sessionPosition: FormControl<SessionPositionAssignedTargetingOptionDetailsSessionPosition | null | undefined>,
	}
	export function CreateSessionPositionAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<SessionPositionAssignedTargetingOptionDetailsFormProperties>({
			sessionPosition: new FormControl<SessionPositionAssignedTargetingOptionDetailsSessionPosition | null | undefined>(undefined),
		});

	}

	export enum SessionPositionAssignedTargetingOptionDetailsSessionPosition { SESSION_POSITION_UNSPECIFIED = 'SESSION_POSITION_UNSPECIFIED', SESSION_POSITION_FIRST_IMPRESSION = 'SESSION_POSITION_FIRST_IMPRESSION' }


	/** Details for assigned sub-exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`. */
	export interface SubExchangeAssignedTargetingOptionDetails {

		/** Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_SUB_EXCHANGE`. */
		targetingOptionId?: string | null;
	}

	/** Details for assigned sub-exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`. */
	export interface SubExchangeAssignedTargetingOptionDetailsFormProperties {

		/** Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_SUB_EXCHANGE`. */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateSubExchangeAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<SubExchangeAssignedTargetingOptionDetailsFormProperties>({
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssignedTargetingOptionTargetingType { TARGETING_TYPE_UNSPECIFIED = 'TARGETING_TYPE_UNSPECIFIED', TARGETING_TYPE_CHANNEL = 'TARGETING_TYPE_CHANNEL', TARGETING_TYPE_APP_CATEGORY = 'TARGETING_TYPE_APP_CATEGORY', TARGETING_TYPE_APP = 'TARGETING_TYPE_APP', TARGETING_TYPE_URL = 'TARGETING_TYPE_URL', TARGETING_TYPE_DAY_AND_TIME = 'TARGETING_TYPE_DAY_AND_TIME', TARGETING_TYPE_AGE_RANGE = 'TARGETING_TYPE_AGE_RANGE', TARGETING_TYPE_REGIONAL_LOCATION_LIST = 'TARGETING_TYPE_REGIONAL_LOCATION_LIST', TARGETING_TYPE_PROXIMITY_LOCATION_LIST = 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST', TARGETING_TYPE_GENDER = 'TARGETING_TYPE_GENDER', TARGETING_TYPE_VIDEO_PLAYER_SIZE = 'TARGETING_TYPE_VIDEO_PLAYER_SIZE', TARGETING_TYPE_USER_REWARDED_CONTENT = 'TARGETING_TYPE_USER_REWARDED_CONTENT', TARGETING_TYPE_PARENTAL_STATUS = 'TARGETING_TYPE_PARENTAL_STATUS', TARGETING_TYPE_CONTENT_INSTREAM_POSITION = 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION', TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION = 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION', TARGETING_TYPE_DEVICE_TYPE = 'TARGETING_TYPE_DEVICE_TYPE', TARGETING_TYPE_AUDIENCE_GROUP = 'TARGETING_TYPE_AUDIENCE_GROUP', TARGETING_TYPE_BROWSER = 'TARGETING_TYPE_BROWSER', TARGETING_TYPE_HOUSEHOLD_INCOME = 'TARGETING_TYPE_HOUSEHOLD_INCOME', TARGETING_TYPE_ON_SCREEN_POSITION = 'TARGETING_TYPE_ON_SCREEN_POSITION', TARGETING_TYPE_THIRD_PARTY_VERIFIER = 'TARGETING_TYPE_THIRD_PARTY_VERIFIER', TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION = 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION', TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION = 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION', TARGETING_TYPE_ENVIRONMENT = 'TARGETING_TYPE_ENVIRONMENT', TARGETING_TYPE_CARRIER_AND_ISP = 'TARGETING_TYPE_CARRIER_AND_ISP', TARGETING_TYPE_OPERATING_SYSTEM = 'TARGETING_TYPE_OPERATING_SYSTEM', TARGETING_TYPE_DEVICE_MAKE_MODEL = 'TARGETING_TYPE_DEVICE_MAKE_MODEL', TARGETING_TYPE_KEYWORD = 'TARGETING_TYPE_KEYWORD', TARGETING_TYPE_NEGATIVE_KEYWORD_LIST = 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST', TARGETING_TYPE_VIEWABILITY = 'TARGETING_TYPE_VIEWABILITY', TARGETING_TYPE_CATEGORY = 'TARGETING_TYPE_CATEGORY', TARGETING_TYPE_INVENTORY_SOURCE = 'TARGETING_TYPE_INVENTORY_SOURCE', TARGETING_TYPE_LANGUAGE = 'TARGETING_TYPE_LANGUAGE', TARGETING_TYPE_AUTHORIZED_SELLER_STATUS = 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS', TARGETING_TYPE_GEO_REGION = 'TARGETING_TYPE_GEO_REGION', TARGETING_TYPE_INVENTORY_SOURCE_GROUP = 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP', TARGETING_TYPE_EXCHANGE = 'TARGETING_TYPE_EXCHANGE', TARGETING_TYPE_SUB_EXCHANGE = 'TARGETING_TYPE_SUB_EXCHANGE', TARGETING_TYPE_POI = 'TARGETING_TYPE_POI', TARGETING_TYPE_BUSINESS_CHAIN = 'TARGETING_TYPE_BUSINESS_CHAIN', TARGETING_TYPE_CONTENT_DURATION = 'TARGETING_TYPE_CONTENT_DURATION', TARGETING_TYPE_CONTENT_STREAM_TYPE = 'TARGETING_TYPE_CONTENT_STREAM_TYPE', TARGETING_TYPE_NATIVE_CONTENT_POSITION = 'TARGETING_TYPE_NATIVE_CONTENT_POSITION', TARGETING_TYPE_OMID = 'TARGETING_TYPE_OMID', TARGETING_TYPE_AUDIO_CONTENT_TYPE = 'TARGETING_TYPE_AUDIO_CONTENT_TYPE', TARGETING_TYPE_CONTENT_GENRE = 'TARGETING_TYPE_CONTENT_GENRE', TARGETING_TYPE_YOUTUBE_VIDEO = 'TARGETING_TYPE_YOUTUBE_VIDEO', TARGETING_TYPE_YOUTUBE_CHANNEL = 'TARGETING_TYPE_YOUTUBE_CHANNEL', TARGETING_TYPE_SESSION_POSITION = 'TARGETING_TYPE_SESSION_POSITION' }


	/** Assigned third party verifier targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_THIRD_PARTY_VERIFIER`. */
	export interface ThirdPartyVerifierAssignedTargetingOptionDetails {

		/** Details of Adloox settings. */
		adloox?: Adloox;

		/** Details of DoubleVerify settings. */
		doubleVerify?: DoubleVerify;

		/** Details of Integral Ad Science settings. */
		integralAdScience?: IntegralAdScience;
	}

	/** Assigned third party verifier targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_THIRD_PARTY_VERIFIER`. */
	export interface ThirdPartyVerifierAssignedTargetingOptionDetailsFormProperties {
	}
	export function CreateThirdPartyVerifierAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<ThirdPartyVerifierAssignedTargetingOptionDetailsFormProperties>({
		});

	}


	/** Details of Adloox settings. */
	export interface Adloox {

		/** Adloox's brand safety settings. */
		excludedAdlooxCategories?: Array<string>;
	}

	/** Details of Adloox settings. */
	export interface AdlooxFormProperties {
	}
	export function CreateAdlooxFormGroup() {
		return new FormGroup<AdlooxFormProperties>({
		});

	}


	/** Details of DoubleVerify settings. */
	export interface DoubleVerify {

		/** Details of DoubleVerify star ratings settings. */
		appStarRating?: DoubleVerifyAppStarRating;

		/** Avoid bidding on apps with the age rating. */
		avoidedAgeRatings?: Array<string>;

		/** Settings for brand safety controls. */
		brandSafetyCategories?: DoubleVerifyBrandSafetyCategories;

		/** The custom segment ID provided by DoubleVerify. The ID must start with "51" and consist of eight digits. Custom segment ID cannot be specified along with any of the following fields: * brand_safety_categories * avoided_age_ratings * app_star_rating * fraud_invalid_traffic */
		customSegmentId?: string | null;

		/** Details of DoubleVerify display viewability settings. */
		displayViewability?: DoubleVerifyDisplayViewability;

		/** DoubleVerify Fraud & Invalid Traffic settings. */
		fraudInvalidTraffic?: DoubleVerifyFraudInvalidTraffic;

		/** Details of DoubleVerify video viewability settings. */
		videoViewability?: DoubleVerifyVideoViewability;
	}

	/** Details of DoubleVerify settings. */
	export interface DoubleVerifyFormProperties {

		/** The custom segment ID provided by DoubleVerify. The ID must start with "51" and consist of eight digits. Custom segment ID cannot be specified along with any of the following fields: * brand_safety_categories * avoided_age_ratings * app_star_rating * fraud_invalid_traffic */
		customSegmentId: FormControl<string | null | undefined>,
	}
	export function CreateDoubleVerifyFormGroup() {
		return new FormGroup<DoubleVerifyFormProperties>({
			customSegmentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of DoubleVerify star ratings settings. */
	export interface DoubleVerifyAppStarRating {

		/** Avoid bidding on apps with insufficient star ratings. */
		avoidInsufficientStarRating?: boolean | null;

		/** Avoid bidding on apps with the star ratings. */
		avoidedStarRating?: DoubleVerifyAppStarRatingAvoidedStarRating | null;
	}

	/** Details of DoubleVerify star ratings settings. */
	export interface DoubleVerifyAppStarRatingFormProperties {

		/** Avoid bidding on apps with insufficient star ratings. */
		avoidInsufficientStarRating: FormControl<boolean | null | undefined>,

		/** Avoid bidding on apps with the star ratings. */
		avoidedStarRating: FormControl<DoubleVerifyAppStarRatingAvoidedStarRating | null | undefined>,
	}
	export function CreateDoubleVerifyAppStarRatingFormGroup() {
		return new FormGroup<DoubleVerifyAppStarRatingFormProperties>({
			avoidInsufficientStarRating: new FormControl<boolean | null | undefined>(undefined),
			avoidedStarRating: new FormControl<DoubleVerifyAppStarRatingAvoidedStarRating | null | undefined>(undefined),
		});

	}

	export enum DoubleVerifyAppStarRatingAvoidedStarRating { APP_STAR_RATE_UNSPECIFIED = 'APP_STAR_RATE_UNSPECIFIED', APP_STAR_RATE_1_POINT_5_LESS = 'APP_STAR_RATE_1_POINT_5_LESS', APP_STAR_RATE_2_LESS = 'APP_STAR_RATE_2_LESS', APP_STAR_RATE_2_POINT_5_LESS = 'APP_STAR_RATE_2_POINT_5_LESS', APP_STAR_RATE_3_LESS = 'APP_STAR_RATE_3_LESS', APP_STAR_RATE_3_POINT_5_LESS = 'APP_STAR_RATE_3_POINT_5_LESS', APP_STAR_RATE_4_LESS = 'APP_STAR_RATE_4_LESS', APP_STAR_RATE_4_POINT_5_LESS = 'APP_STAR_RATE_4_POINT_5_LESS' }


	/** Settings for brand safety controls. */
	export interface DoubleVerifyBrandSafetyCategories {

		/** Unknown or unrateable. */
		avoidUnknownBrandSafetyCategory?: boolean | null;

		/** Brand safety high severity avoidance categories. */
		avoidedHighSeverityCategories?: Array<string>;

		/** Brand safety medium severity avoidance categories. */
		avoidedMediumSeverityCategories?: Array<string>;
	}

	/** Settings for brand safety controls. */
	export interface DoubleVerifyBrandSafetyCategoriesFormProperties {

		/** Unknown or unrateable. */
		avoidUnknownBrandSafetyCategory: FormControl<boolean | null | undefined>,
	}
	export function CreateDoubleVerifyBrandSafetyCategoriesFormGroup() {
		return new FormGroup<DoubleVerifyBrandSafetyCategoriesFormProperties>({
			avoidUnknownBrandSafetyCategory: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details of DoubleVerify display viewability settings. */
	export interface DoubleVerifyDisplayViewability {

		/** Target web and app inventory to maximize IAB viewable rate. */
		iab?: DoubleVerifyDisplayViewabilityIab | null;

		/** Target web and app inventory to maximize 100% viewable duration. */
		viewableDuring?: DoubleVerifyDisplayViewabilityViewableDuring | null;
	}

	/** Details of DoubleVerify display viewability settings. */
	export interface DoubleVerifyDisplayViewabilityFormProperties {

		/** Target web and app inventory to maximize IAB viewable rate. */
		iab: FormControl<DoubleVerifyDisplayViewabilityIab | null | undefined>,

		/** Target web and app inventory to maximize 100% viewable duration. */
		viewableDuring: FormControl<DoubleVerifyDisplayViewabilityViewableDuring | null | undefined>,
	}
	export function CreateDoubleVerifyDisplayViewabilityFormGroup() {
		return new FormGroup<DoubleVerifyDisplayViewabilityFormProperties>({
			iab: new FormControl<DoubleVerifyDisplayViewabilityIab | null | undefined>(undefined),
			viewableDuring: new FormControl<DoubleVerifyDisplayViewabilityViewableDuring | null | undefined>(undefined),
		});

	}

	export enum DoubleVerifyDisplayViewabilityIab { IAB_VIEWED_RATE_UNSPECIFIED = 'IAB_VIEWED_RATE_UNSPECIFIED', IAB_VIEWED_RATE_80_PERCENT_HIGHER = 'IAB_VIEWED_RATE_80_PERCENT_HIGHER', IAB_VIEWED_RATE_75_PERCENT_HIGHER = 'IAB_VIEWED_RATE_75_PERCENT_HIGHER', IAB_VIEWED_RATE_70_PERCENT_HIGHER = 'IAB_VIEWED_RATE_70_PERCENT_HIGHER', IAB_VIEWED_RATE_65_PERCENT_HIGHER = 'IAB_VIEWED_RATE_65_PERCENT_HIGHER', IAB_VIEWED_RATE_60_PERCENT_HIGHER = 'IAB_VIEWED_RATE_60_PERCENT_HIGHER', IAB_VIEWED_RATE_55_PERCENT_HIGHER = 'IAB_VIEWED_RATE_55_PERCENT_HIGHER', IAB_VIEWED_RATE_50_PERCENT_HIGHER = 'IAB_VIEWED_RATE_50_PERCENT_HIGHER', IAB_VIEWED_RATE_40_PERCENT_HIGHER = 'IAB_VIEWED_RATE_40_PERCENT_HIGHER', IAB_VIEWED_RATE_30_PERCENT_HIGHER = 'IAB_VIEWED_RATE_30_PERCENT_HIGHER' }

	export enum DoubleVerifyDisplayViewabilityViewableDuring { AVERAGE_VIEW_DURATION_UNSPECIFIED = 'AVERAGE_VIEW_DURATION_UNSPECIFIED', AVERAGE_VIEW_DURATION_5_SEC = 'AVERAGE_VIEW_DURATION_5_SEC', AVERAGE_VIEW_DURATION_10_SEC = 'AVERAGE_VIEW_DURATION_10_SEC', AVERAGE_VIEW_DURATION_15_SEC = 'AVERAGE_VIEW_DURATION_15_SEC' }


	/** DoubleVerify Fraud & Invalid Traffic settings. */
	export interface DoubleVerifyFraudInvalidTraffic {

		/** Insufficient Historical Fraud & IVT Stats. */
		avoidInsufficientOption?: boolean | null;

		/** Avoid Sites and Apps with historical Fraud & IVT. */
		avoidedFraudOption?: DoubleVerifyFraudInvalidTrafficAvoidedFraudOption | null;
	}

	/** DoubleVerify Fraud & Invalid Traffic settings. */
	export interface DoubleVerifyFraudInvalidTrafficFormProperties {

		/** Insufficient Historical Fraud & IVT Stats. */
		avoidInsufficientOption: FormControl<boolean | null | undefined>,

		/** Avoid Sites and Apps with historical Fraud & IVT. */
		avoidedFraudOption: FormControl<DoubleVerifyFraudInvalidTrafficAvoidedFraudOption | null | undefined>,
	}
	export function CreateDoubleVerifyFraudInvalidTrafficFormGroup() {
		return new FormGroup<DoubleVerifyFraudInvalidTrafficFormProperties>({
			avoidInsufficientOption: new FormControl<boolean | null | undefined>(undefined),
			avoidedFraudOption: new FormControl<DoubleVerifyFraudInvalidTrafficAvoidedFraudOption | null | undefined>(undefined),
		});

	}

	export enum DoubleVerifyFraudInvalidTrafficAvoidedFraudOption { FRAUD_UNSPECIFIED = 'FRAUD_UNSPECIFIED', AD_IMPRESSION_FRAUD_100 = 'AD_IMPRESSION_FRAUD_100', AD_IMPRESSION_FRAUD_50 = 'AD_IMPRESSION_FRAUD_50', AD_IMPRESSION_FRAUD_25 = 'AD_IMPRESSION_FRAUD_25', AD_IMPRESSION_FRAUD_10 = 'AD_IMPRESSION_FRAUD_10', AD_IMPRESSION_FRAUD_8 = 'AD_IMPRESSION_FRAUD_8', AD_IMPRESSION_FRAUD_6 = 'AD_IMPRESSION_FRAUD_6', AD_IMPRESSION_FRAUD_4 = 'AD_IMPRESSION_FRAUD_4', AD_IMPRESSION_FRAUD_2 = 'AD_IMPRESSION_FRAUD_2' }


	/** Details of DoubleVerify video viewability settings. */
	export interface DoubleVerifyVideoViewability {

		/** Target inventory to maximize impressions with 400x300 or greater player size. */
		playerImpressionRate?: DoubleVerifyVideoViewabilityPlayerImpressionRate | null;

		/** Target web inventory to maximize IAB viewable rate. */
		videoIab?: DoubleVerifyVideoViewabilityVideoIab | null;

		/** Target web inventory to maximize fully viewable rate. */
		videoViewableRate?: DoubleVerifyVideoViewabilityVideoViewableRate | null;
	}

	/** Details of DoubleVerify video viewability settings. */
	export interface DoubleVerifyVideoViewabilityFormProperties {

		/** Target inventory to maximize impressions with 400x300 or greater player size. */
		playerImpressionRate: FormControl<DoubleVerifyVideoViewabilityPlayerImpressionRate | null | undefined>,

		/** Target web inventory to maximize IAB viewable rate. */
		videoIab: FormControl<DoubleVerifyVideoViewabilityVideoIab | null | undefined>,

		/** Target web inventory to maximize fully viewable rate. */
		videoViewableRate: FormControl<DoubleVerifyVideoViewabilityVideoViewableRate | null | undefined>,
	}
	export function CreateDoubleVerifyVideoViewabilityFormGroup() {
		return new FormGroup<DoubleVerifyVideoViewabilityFormProperties>({
			playerImpressionRate: new FormControl<DoubleVerifyVideoViewabilityPlayerImpressionRate | null | undefined>(undefined),
			videoIab: new FormControl<DoubleVerifyVideoViewabilityVideoIab | null | undefined>(undefined),
			videoViewableRate: new FormControl<DoubleVerifyVideoViewabilityVideoViewableRate | null | undefined>(undefined),
		});

	}

	export enum DoubleVerifyVideoViewabilityPlayerImpressionRate { PLAYER_SIZE_400X300_UNSPECIFIED = 'PLAYER_SIZE_400X300_UNSPECIFIED', PLAYER_SIZE_400X300_95 = 'PLAYER_SIZE_400X300_95', PLAYER_SIZE_400X300_70 = 'PLAYER_SIZE_400X300_70', PLAYER_SIZE_400X300_25 = 'PLAYER_SIZE_400X300_25', PLAYER_SIZE_400X300_5 = 'PLAYER_SIZE_400X300_5' }

	export enum DoubleVerifyVideoViewabilityVideoIab { VIDEO_IAB_UNSPECIFIED = 'VIDEO_IAB_UNSPECIFIED', IAB_VIEWABILITY_80_PERCENT_HIGHER = 'IAB_VIEWABILITY_80_PERCENT_HIGHER', IAB_VIEWABILITY_75_PERCENT_HIGHER = 'IAB_VIEWABILITY_75_PERCENT_HIGHER', IAB_VIEWABILITY_70_PERCENT_HIGHER = 'IAB_VIEWABILITY_70_PERCENT_HIGHER', IAB_VIEWABILITY_65_PERCENT_HIHGER = 'IAB_VIEWABILITY_65_PERCENT_HIHGER', IAB_VIEWABILITY_60_PERCENT_HIGHER = 'IAB_VIEWABILITY_60_PERCENT_HIGHER', IAB_VIEWABILITY_55_PERCENT_HIHGER = 'IAB_VIEWABILITY_55_PERCENT_HIHGER', IAB_VIEWABILITY_50_PERCENT_HIGHER = 'IAB_VIEWABILITY_50_PERCENT_HIGHER', IAB_VIEWABILITY_40_PERCENT_HIHGER = 'IAB_VIEWABILITY_40_PERCENT_HIHGER', IAB_VIEWABILITY_30_PERCENT_HIHGER = 'IAB_VIEWABILITY_30_PERCENT_HIHGER' }

	export enum DoubleVerifyVideoViewabilityVideoViewableRate { VIDEO_VIEWABLE_RATE_UNSPECIFIED = 'VIDEO_VIEWABLE_RATE_UNSPECIFIED', VIEWED_PERFORMANCE_40_PERCENT_HIGHER = 'VIEWED_PERFORMANCE_40_PERCENT_HIGHER', VIEWED_PERFORMANCE_35_PERCENT_HIGHER = 'VIEWED_PERFORMANCE_35_PERCENT_HIGHER', VIEWED_PERFORMANCE_30_PERCENT_HIGHER = 'VIEWED_PERFORMANCE_30_PERCENT_HIGHER', VIEWED_PERFORMANCE_25_PERCENT_HIGHER = 'VIEWED_PERFORMANCE_25_PERCENT_HIGHER', VIEWED_PERFORMANCE_20_PERCENT_HIGHER = 'VIEWED_PERFORMANCE_20_PERCENT_HIGHER', VIEWED_PERFORMANCE_10_PERCENT_HIGHER = 'VIEWED_PERFORMANCE_10_PERCENT_HIGHER' }


	/** Details of Integral Ad Science settings. */
	export interface IntegralAdScience {

		/** The custom segment ID provided by Integral Ad Science. The ID must be between `1000001` and `1999999`, inclusive. */
		customSegmentId?: Array<string>;

		/** Display Viewability section (applicable to display line items only). */
		displayViewability?: IntegralAdScienceDisplayViewability | null;

		/** Brand Safety - **Unrateable**. */
		excludeUnrateable?: boolean | null;

		/** Ad Fraud settings. */
		excludedAdFraudRisk?: IntegralAdScienceExcludedAdFraudRisk | null;

		/** Brand Safety - **Adult content**. */
		excludedAdultRisk?: IntegralAdScienceExcludedAdultRisk | null;

		/** Brand Safety - **Alcohol**. */
		excludedAlcoholRisk?: IntegralAdScienceExcludedAlcoholRisk | null;

		/** Brand Safety - **Drugs**. */
		excludedDrugsRisk?: IntegralAdScienceExcludedDrugsRisk | null;

		/** Brand Safety - **Gambling**. */
		excludedGamblingRisk?: IntegralAdScienceExcludedGamblingRisk | null;

		/** Brand Safety - **Hate speech**. */
		excludedHateSpeechRisk?: IntegralAdScienceExcludedHateSpeechRisk | null;

		/** Brand Safety - **Illegal downloads**. */
		excludedIllegalDownloadsRisk?: IntegralAdScienceExcludedIllegalDownloadsRisk | null;

		/** Brand Safety - **Offensive language**. */
		excludedOffensiveLanguageRisk?: IntegralAdScienceExcludedOffensiveLanguageRisk | null;

		/** Brand Safety - **Violence**. */
		excludedViolenceRisk?: IntegralAdScienceExcludedViolenceRisk | null;

		/** True advertising quality (applicable to Display line items only). */
		traqScoreOption?: IntegralAdScienceTraqScoreOption | null;

		/** Video Viewability Section (applicable to video line items only). */
		videoViewability?: IntegralAdScienceVideoViewability | null;
	}

	/** Details of Integral Ad Science settings. */
	export interface IntegralAdScienceFormProperties {

		/** Display Viewability section (applicable to display line items only). */
		displayViewability: FormControl<IntegralAdScienceDisplayViewability | null | undefined>,

		/** Brand Safety - **Unrateable**. */
		excludeUnrateable: FormControl<boolean | null | undefined>,

		/** Ad Fraud settings. */
		excludedAdFraudRisk: FormControl<IntegralAdScienceExcludedAdFraudRisk | null | undefined>,

		/** Brand Safety - **Adult content**. */
		excludedAdultRisk: FormControl<IntegralAdScienceExcludedAdultRisk | null | undefined>,

		/** Brand Safety - **Alcohol**. */
		excludedAlcoholRisk: FormControl<IntegralAdScienceExcludedAlcoholRisk | null | undefined>,

		/** Brand Safety - **Drugs**. */
		excludedDrugsRisk: FormControl<IntegralAdScienceExcludedDrugsRisk | null | undefined>,

		/** Brand Safety - **Gambling**. */
		excludedGamblingRisk: FormControl<IntegralAdScienceExcludedGamblingRisk | null | undefined>,

		/** Brand Safety - **Hate speech**. */
		excludedHateSpeechRisk: FormControl<IntegralAdScienceExcludedHateSpeechRisk | null | undefined>,

		/** Brand Safety - **Illegal downloads**. */
		excludedIllegalDownloadsRisk: FormControl<IntegralAdScienceExcludedIllegalDownloadsRisk | null | undefined>,

		/** Brand Safety - **Offensive language**. */
		excludedOffensiveLanguageRisk: FormControl<IntegralAdScienceExcludedOffensiveLanguageRisk | null | undefined>,

		/** Brand Safety - **Violence**. */
		excludedViolenceRisk: FormControl<IntegralAdScienceExcludedViolenceRisk | null | undefined>,

		/** True advertising quality (applicable to Display line items only). */
		traqScoreOption: FormControl<IntegralAdScienceTraqScoreOption | null | undefined>,

		/** Video Viewability Section (applicable to video line items only). */
		videoViewability: FormControl<IntegralAdScienceVideoViewability | null | undefined>,
	}
	export function CreateIntegralAdScienceFormGroup() {
		return new FormGroup<IntegralAdScienceFormProperties>({
			displayViewability: new FormControl<IntegralAdScienceDisplayViewability | null | undefined>(undefined),
			excludeUnrateable: new FormControl<boolean | null | undefined>(undefined),
			excludedAdFraudRisk: new FormControl<IntegralAdScienceExcludedAdFraudRisk | null | undefined>(undefined),
			excludedAdultRisk: new FormControl<IntegralAdScienceExcludedAdultRisk | null | undefined>(undefined),
			excludedAlcoholRisk: new FormControl<IntegralAdScienceExcludedAlcoholRisk | null | undefined>(undefined),
			excludedDrugsRisk: new FormControl<IntegralAdScienceExcludedDrugsRisk | null | undefined>(undefined),
			excludedGamblingRisk: new FormControl<IntegralAdScienceExcludedGamblingRisk | null | undefined>(undefined),
			excludedHateSpeechRisk: new FormControl<IntegralAdScienceExcludedHateSpeechRisk | null | undefined>(undefined),
			excludedIllegalDownloadsRisk: new FormControl<IntegralAdScienceExcludedIllegalDownloadsRisk | null | undefined>(undefined),
			excludedOffensiveLanguageRisk: new FormControl<IntegralAdScienceExcludedOffensiveLanguageRisk | null | undefined>(undefined),
			excludedViolenceRisk: new FormControl<IntegralAdScienceExcludedViolenceRisk | null | undefined>(undefined),
			traqScoreOption: new FormControl<IntegralAdScienceTraqScoreOption | null | undefined>(undefined),
			videoViewability: new FormControl<IntegralAdScienceVideoViewability | null | undefined>(undefined),
		});

	}

	export enum IntegralAdScienceDisplayViewability { PERFORMANCE_VIEWABILITY_UNSPECIFIED = 'PERFORMANCE_VIEWABILITY_UNSPECIFIED', PERFORMANCE_VIEWABILITY_40 = 'PERFORMANCE_VIEWABILITY_40', PERFORMANCE_VIEWABILITY_50 = 'PERFORMANCE_VIEWABILITY_50', PERFORMANCE_VIEWABILITY_60 = 'PERFORMANCE_VIEWABILITY_60', PERFORMANCE_VIEWABILITY_70 = 'PERFORMANCE_VIEWABILITY_70' }

	export enum IntegralAdScienceExcludedAdFraudRisk { SUSPICIOUS_ACTIVITY_UNSPECIFIED = 'SUSPICIOUS_ACTIVITY_UNSPECIFIED', SUSPICIOUS_ACTIVITY_HR = 'SUSPICIOUS_ACTIVITY_HR', SUSPICIOUS_ACTIVITY_HMR = 'SUSPICIOUS_ACTIVITY_HMR' }

	export enum IntegralAdScienceExcludedAdultRisk { ADULT_UNSPECIFIED = 'ADULT_UNSPECIFIED', ADULT_HR = 'ADULT_HR', ADULT_HMR = 'ADULT_HMR' }

	export enum IntegralAdScienceExcludedAlcoholRisk { ALCOHOL_UNSPECIFIED = 'ALCOHOL_UNSPECIFIED', ALCOHOL_HR = 'ALCOHOL_HR', ALCOHOL_HMR = 'ALCOHOL_HMR' }

	export enum IntegralAdScienceExcludedDrugsRisk { DRUGS_UNSPECIFIED = 'DRUGS_UNSPECIFIED', DRUGS_HR = 'DRUGS_HR', DRUGS_HMR = 'DRUGS_HMR' }

	export enum IntegralAdScienceExcludedGamblingRisk { GAMBLING_UNSPECIFIED = 'GAMBLING_UNSPECIFIED', GAMBLING_HR = 'GAMBLING_HR', GAMBLING_HMR = 'GAMBLING_HMR' }

	export enum IntegralAdScienceExcludedHateSpeechRisk { HATE_SPEECH_UNSPECIFIED = 'HATE_SPEECH_UNSPECIFIED', HATE_SPEECH_HR = 'HATE_SPEECH_HR', HATE_SPEECH_HMR = 'HATE_SPEECH_HMR' }

	export enum IntegralAdScienceExcludedIllegalDownloadsRisk { ILLEGAL_DOWNLOADS_UNSPECIFIED = 'ILLEGAL_DOWNLOADS_UNSPECIFIED', ILLEGAL_DOWNLOADS_HR = 'ILLEGAL_DOWNLOADS_HR', ILLEGAL_DOWNLOADS_HMR = 'ILLEGAL_DOWNLOADS_HMR' }

	export enum IntegralAdScienceExcludedOffensiveLanguageRisk { OFFENSIVE_LANGUAGE_UNSPECIFIED = 'OFFENSIVE_LANGUAGE_UNSPECIFIED', OFFENSIVE_LANGUAGE_HR = 'OFFENSIVE_LANGUAGE_HR', OFFENSIVE_LANGUAGE_HMR = 'OFFENSIVE_LANGUAGE_HMR' }

	export enum IntegralAdScienceExcludedViolenceRisk { VIOLENCE_UNSPECIFIED = 'VIOLENCE_UNSPECIFIED', VIOLENCE_HR = 'VIOLENCE_HR', VIOLENCE_HMR = 'VIOLENCE_HMR' }

	export enum IntegralAdScienceTraqScoreOption { TRAQ_UNSPECIFIED = 'TRAQ_UNSPECIFIED', TRAQ_250 = 'TRAQ_250', TRAQ_500 = 'TRAQ_500', TRAQ_600 = 'TRAQ_600', TRAQ_700 = 'TRAQ_700', TRAQ_750 = 'TRAQ_750', TRAQ_875 = 'TRAQ_875', TRAQ_1000 = 'TRAQ_1000' }

	export enum IntegralAdScienceVideoViewability { VIDEO_VIEWABILITY_UNSPECIFIED = 'VIDEO_VIEWABILITY_UNSPECIFIED', VIDEO_VIEWABILITY_40 = 'VIDEO_VIEWABILITY_40', VIDEO_VIEWABILITY_50 = 'VIDEO_VIEWABILITY_50', VIDEO_VIEWABILITY_60 = 'VIDEO_VIEWABILITY_60', VIDEO_VIEWABILITY_70 = 'VIDEO_VIEWABILITY_70' }


	/** Details for assigned URL targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_URL`. */
	export interface UrlAssignedTargetingOptionDetails {

		/** Indicates if this option is being negatively targeted. */
		negative?: boolean | null;

		/** Required. The URL, for example `example.com`. DV360 supports two levels of subdirectory targeting, for example `www.example.com/one-subdirectory-level/second-level`, and five levels of subdomain targeting, for example `five.four.three.two.one.example.com`. */
		url?: string | null;
	}

	/** Details for assigned URL targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_URL`. */
	export interface UrlAssignedTargetingOptionDetailsFormProperties {

		/** Indicates if this option is being negatively targeted. */
		negative: FormControl<boolean | null | undefined>,

		/** Required. The URL, for example `example.com`. DV360 supports two levels of subdirectory targeting, for example `www.example.com/one-subdirectory-level/second-level`, and five levels of subdomain targeting, for example `five.four.three.two.one.example.com`. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUrlAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<UrlAssignedTargetingOptionDetailsFormProperties>({
			negative: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`. */
	export interface UserRewardedContentAssignedTargetingOptionDetails {

		/** Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`. */
		targetingOptionId?: string | null;

		/** Output only. User rewarded content status for video ads. */
		userRewardedContent?: UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContent | null;
	}

	/** User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`. */
	export interface UserRewardedContentAssignedTargetingOptionDetailsFormProperties {

		/** Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`. */
		targetingOptionId: FormControl<string | null | undefined>,

		/** Output only. User rewarded content status for video ads. */
		userRewardedContent: FormControl<UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContent | null | undefined>,
	}
	export function CreateUserRewardedContentAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<UserRewardedContentAssignedTargetingOptionDetailsFormProperties>({
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
			userRewardedContent: new FormControl<UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContent | null | undefined>(undefined),
		});

	}

	export enum UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContent { USER_REWARDED_CONTENT_UNSPECIFIED = 'USER_REWARDED_CONTENT_UNSPECIFIED', USER_REWARDED_CONTENT_USER_REWARDED = 'USER_REWARDED_CONTENT_USER_REWARDED', USER_REWARDED_CONTENT_NOT_USER_REWARDED = 'USER_REWARDED_CONTENT_NOT_USER_REWARDED' }


	/** Video player size targeting option details. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`. Explicitly targeting all options is not supported. Remove all video player size targeting options to achieve this effect. */
	export interface VideoPlayerSizeAssignedTargetingOptionDetails {

		/** Required. The video player size. */
		videoPlayerSize?: VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSize | null;
	}

	/** Video player size targeting option details. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`. Explicitly targeting all options is not supported. Remove all video player size targeting options to achieve this effect. */
	export interface VideoPlayerSizeAssignedTargetingOptionDetailsFormProperties {

		/** Required. The video player size. */
		videoPlayerSize: FormControl<VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSize | null | undefined>,
	}
	export function CreateVideoPlayerSizeAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<VideoPlayerSizeAssignedTargetingOptionDetailsFormProperties>({
			videoPlayerSize: new FormControl<VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSize | null | undefined>(undefined),
		});

	}

	export enum VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSize { VIDEO_PLAYER_SIZE_UNSPECIFIED = 'VIDEO_PLAYER_SIZE_UNSPECIFIED', VIDEO_PLAYER_SIZE_SMALL = 'VIDEO_PLAYER_SIZE_SMALL', VIDEO_PLAYER_SIZE_LARGE = 'VIDEO_PLAYER_SIZE_LARGE', VIDEO_PLAYER_SIZE_HD = 'VIDEO_PLAYER_SIZE_HD', VIDEO_PLAYER_SIZE_UNKNOWN = 'VIDEO_PLAYER_SIZE_UNKNOWN' }


	/** Assigned viewability targeting option details. This will be populated in the viewability_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`. */
	export interface ViewabilityAssignedTargetingOptionDetails {

		/** Required. The predicted viewability percentage. */
		viewability?: ViewabilityAssignedTargetingOptionDetailsViewability | null;
	}

	/** Assigned viewability targeting option details. This will be populated in the viewability_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`. */
	export interface ViewabilityAssignedTargetingOptionDetailsFormProperties {

		/** Required. The predicted viewability percentage. */
		viewability: FormControl<ViewabilityAssignedTargetingOptionDetailsViewability | null | undefined>,
	}
	export function CreateViewabilityAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<ViewabilityAssignedTargetingOptionDetailsFormProperties>({
			viewability: new FormControl<ViewabilityAssignedTargetingOptionDetailsViewability | null | undefined>(undefined),
		});

	}

	export enum ViewabilityAssignedTargetingOptionDetailsViewability { VIEWABILITY_UNSPECIFIED = 'VIEWABILITY_UNSPECIFIED', VIEWABILITY_10_PERCENT_OR_MORE = 'VIEWABILITY_10_PERCENT_OR_MORE', VIEWABILITY_20_PERCENT_OR_MORE = 'VIEWABILITY_20_PERCENT_OR_MORE', VIEWABILITY_30_PERCENT_OR_MORE = 'VIEWABILITY_30_PERCENT_OR_MORE', VIEWABILITY_40_PERCENT_OR_MORE = 'VIEWABILITY_40_PERCENT_OR_MORE', VIEWABILITY_50_PERCENT_OR_MORE = 'VIEWABILITY_50_PERCENT_OR_MORE', VIEWABILITY_60_PERCENT_OR_MORE = 'VIEWABILITY_60_PERCENT_OR_MORE', VIEWABILITY_70_PERCENT_OR_MORE = 'VIEWABILITY_70_PERCENT_OR_MORE', VIEWABILITY_80_PERCENT_OR_MORE = 'VIEWABILITY_80_PERCENT_OR_MORE', VIEWABILITY_90_PERCENT_OR_MORE = 'VIEWABILITY_90_PERCENT_OR_MORE' }


	/** Details for YouTube channel assigned targeting option. This will be populated in the youtube_channel_details field when targeting_type is `TARGETING_TYPE_YOUTUBE_CHANNEL`. */
	export interface YoutubeChannelAssignedTargetingOptionDetails {

		/** The YouTube uploader channel id or the channel code of a YouTube channel. */
		channelId?: string | null;

		/** Indicates if this option is being negatively targeted. */
		negative?: boolean | null;
	}

	/** Details for YouTube channel assigned targeting option. This will be populated in the youtube_channel_details field when targeting_type is `TARGETING_TYPE_YOUTUBE_CHANNEL`. */
	export interface YoutubeChannelAssignedTargetingOptionDetailsFormProperties {

		/** The YouTube uploader channel id or the channel code of a YouTube channel. */
		channelId: FormControl<string | null | undefined>,

		/** Indicates if this option is being negatively targeted. */
		negative: FormControl<boolean | null | undefined>,
	}
	export function CreateYoutubeChannelAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<YoutubeChannelAssignedTargetingOptionDetailsFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			negative: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details for YouTube video assigned targeting option. This will be populated in the youtube_video_details field when targeting_type is `TARGETING_TYPE_YOUTUBE_VIDEO`. */
	export interface YoutubeVideoAssignedTargetingOptionDetails {

		/** Indicates if this option is being negatively targeted. */
		negative?: boolean | null;

		/** YouTube video id as it appears on the YouTube watch page. */
		videoId?: string | null;
	}

	/** Details for YouTube video assigned targeting option. This will be populated in the youtube_video_details field when targeting_type is `TARGETING_TYPE_YOUTUBE_VIDEO`. */
	export interface YoutubeVideoAssignedTargetingOptionDetailsFormProperties {

		/** Indicates if this option is being negatively targeted. */
		negative: FormControl<boolean | null | undefined>,

		/** YouTube video id as it appears on the YouTube watch page. */
		videoId: FormControl<string | null | undefined>,
	}
	export function CreateYoutubeVideoAssignedTargetingOptionDetailsFormGroup() {
		return new FormGroup<YoutubeVideoAssignedTargetingOptionDetailsFormProperties>({
			negative: new FormControl<boolean | null | undefined>(undefined),
			videoId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single advertiser in Display & Video 360 (DV360). */
	export interface Advertiser {

		/** Ad server related settings of an advertiser. */
		adServerConfig?: AdvertiserAdServerConfig;

		/** Output only. The unique ID of the advertiser. Assigned by the system. */
		advertiserId?: string | null;

		/** Billing related settings of an advertiser. */
		billingConfig?: AdvertiserBillingConfig;

		/** Creatives related settings of an advertiser. */
		creativeConfig?: AdvertiserCreativeConfig;

		/** Settings that control how advertiser related data may be accessed. */
		dataAccessConfig?: AdvertiserDataAccessConfig;

		/** Required. The display name of the advertiser. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName?: string | null;

		/** Required. Controls whether or not insertion orders and line items of the advertiser can spend their budgets and bid on inventory. * Accepted values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_PAUSED` and `ENTITY_STATUS_SCHEDULED_FOR_DELETION`. * If set to `ENTITY_STATUS_SCHEDULED_FOR_DELETION`, the advertiser will be deleted 30 days from when it was first scheduled for deletion. */
		entityStatus?: AdGroupEntityStatus | null;

		/** General settings of an advertiser. */
		generalConfig?: AdvertiserGeneralConfig;

		/** Integration details of an entry. */
		integrationDetails?: IntegrationDetails;

		/** Output only. The resource name of the advertiser. */
		name?: string | null;

		/** Required. Immutable. The unique ID of the partner that the advertiser belongs to. */
		partnerId?: string | null;

		/** Whether integration with Mediaocean (Prisma) is enabled. By enabling this, you agree to the following: On behalf of my company, I authorize Mediaocean (Prisma) to send budget segment plans to Google, and I authorize Google to send corresponding reporting and invoices from DV360 to Mediaocean for the purposes of budget planning, billing, and reconciliation for this advertiser. */
		prismaEnabled?: boolean | null;

		/** Targeting settings related to ad serving of an advertiser. */
		servingConfig?: AdvertiserTargetingConfig;

		/** Output only. The timestamp when the advertiser was last updated. Assigned by the system. */
		updateTime?: string | null;
	}

	/** A single advertiser in Display & Video 360 (DV360). */
	export interface AdvertiserFormProperties {

		/** Output only. The unique ID of the advertiser. Assigned by the system. */
		advertiserId: FormControl<string | null | undefined>,

		/** Required. The display name of the advertiser. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Required. Controls whether or not insertion orders and line items of the advertiser can spend their budgets and bid on inventory. * Accepted values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_PAUSED` and `ENTITY_STATUS_SCHEDULED_FOR_DELETION`. * If set to `ENTITY_STATUS_SCHEDULED_FOR_DELETION`, the advertiser will be deleted 30 days from when it was first scheduled for deletion. */
		entityStatus: FormControl<AdGroupEntityStatus | null | undefined>,

		/** Output only. The resource name of the advertiser. */
		name: FormControl<string | null | undefined>,

		/** Required. Immutable. The unique ID of the partner that the advertiser belongs to. */
		partnerId: FormControl<string | null | undefined>,

		/** Whether integration with Mediaocean (Prisma) is enabled. By enabling this, you agree to the following: On behalf of my company, I authorize Mediaocean (Prisma) to send budget segment plans to Google, and I authorize Google to send corresponding reporting and invoices from DV360 to Mediaocean for the purposes of budget planning, billing, and reconciliation for this advertiser. */
		prismaEnabled: FormControl<boolean | null | undefined>,

		/** Output only. The timestamp when the advertiser was last updated. Assigned by the system. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateAdvertiserFormGroup() {
		return new FormGroup<AdvertiserFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			entityStatus: new FormControl<AdGroupEntityStatus | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			partnerId: new FormControl<string | null | undefined>(undefined),
			prismaEnabled: new FormControl<boolean | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ad server related settings of an advertiser. */
	export interface AdvertiserAdServerConfig {

		/** Settings for advertisers that use both Campaign Manager 360 (CM360) and third-party ad servers. */
		cmHybridConfig?: CmHybridConfig;

		/** Settings for advertisers that use third-party ad servers only. */
		thirdPartyOnlyConfig?: ThirdPartyOnlyConfig;
	}

	/** Ad server related settings of an advertiser. */
	export interface AdvertiserAdServerConfigFormProperties {
	}
	export function CreateAdvertiserAdServerConfigFormGroup() {
		return new FormGroup<AdvertiserAdServerConfigFormProperties>({
		});

	}


	/** Settings for advertisers that use both Campaign Manager 360 (CM360) and third-party ad servers. */
	export interface CmHybridConfig {

		/** Required. Immutable. Account ID of the CM360 Floodlight configuration linked with the DV360 advertiser. */
		cmAccountId?: string | null;

		/** Required. Immutable. ID of the CM360 Floodlight configuration linked with the DV360 advertiser. */
		cmFloodlightConfigId?: string | null;

		/** Required. Immutable. By setting this field to `true`, you, on behalf of your company, authorize the sharing of information from the given Floodlight configuration to this Display & Video 360 advertiser. */
		cmFloodlightLinkingAuthorized?: boolean | null;

		/** A list of CM360 sites whose placements will be synced to DV360 as creatives. If absent or empty in CreateAdvertiser method, the system will automatically create a CM360 site. Removing sites from this list may cause DV360 creatives synced from CM360 to be deleted. At least one site must be specified. */
		cmSyncableSiteIds?: Array<string>;

		/** Whether or not to report DV360 cost to CM360. */
		dv360ToCmCostReportingEnabled?: boolean | null;

		/** Whether or not to include DV360 data in CM360 data transfer reports. */
		dv360ToCmDataSharingEnabled?: boolean | null;
	}

	/** Settings for advertisers that use both Campaign Manager 360 (CM360) and third-party ad servers. */
	export interface CmHybridConfigFormProperties {

		/** Required. Immutable. Account ID of the CM360 Floodlight configuration linked with the DV360 advertiser. */
		cmAccountId: FormControl<string | null | undefined>,

		/** Required. Immutable. ID of the CM360 Floodlight configuration linked with the DV360 advertiser. */
		cmFloodlightConfigId: FormControl<string | null | undefined>,

		/** Required. Immutable. By setting this field to `true`, you, on behalf of your company, authorize the sharing of information from the given Floodlight configuration to this Display & Video 360 advertiser. */
		cmFloodlightLinkingAuthorized: FormControl<boolean | null | undefined>,

		/** Whether or not to report DV360 cost to CM360. */
		dv360ToCmCostReportingEnabled: FormControl<boolean | null | undefined>,

		/** Whether or not to include DV360 data in CM360 data transfer reports. */
		dv360ToCmDataSharingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCmHybridConfigFormGroup() {
		return new FormGroup<CmHybridConfigFormProperties>({
			cmAccountId: new FormControl<string | null | undefined>(undefined),
			cmFloodlightConfigId: new FormControl<string | null | undefined>(undefined),
			cmFloodlightLinkingAuthorized: new FormControl<boolean | null | undefined>(undefined),
			dv360ToCmCostReportingEnabled: new FormControl<boolean | null | undefined>(undefined),
			dv360ToCmDataSharingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Settings for advertisers that use third-party ad servers only. */
	export interface ThirdPartyOnlyConfig {

		/** Whether or not order ID reporting for pixels is enabled. This value cannot be changed once set to `true`. */
		pixelOrderIdReportingEnabled?: boolean | null;
	}

	/** Settings for advertisers that use third-party ad servers only. */
	export interface ThirdPartyOnlyConfigFormProperties {

		/** Whether or not order ID reporting for pixels is enabled. This value cannot be changed once set to `true`. */
		pixelOrderIdReportingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateThirdPartyOnlyConfigFormGroup() {
		return new FormGroup<ThirdPartyOnlyConfigFormProperties>({
			pixelOrderIdReportingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Billing related settings of an advertiser. */
	export interface AdvertiserBillingConfig {

		/** The ID of a billing profile assigned to the advertiser. */
		billingProfileId?: string | null;
	}

	/** Billing related settings of an advertiser. */
	export interface AdvertiserBillingConfigFormProperties {

		/** The ID of a billing profile assigned to the advertiser. */
		billingProfileId: FormControl<string | null | undefined>,
	}
	export function CreateAdvertiserBillingConfigFormGroup() {
		return new FormGroup<AdvertiserBillingConfigFormProperties>({
			billingProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creatives related settings of an advertiser. */
	export interface AdvertiserCreativeConfig {

		/** Whether or not the advertiser is enabled for dynamic creatives. */
		dynamicCreativeEnabled?: boolean | null;

		/** An ID for configuring campaign monitoring provided by Integral Ad Service (IAS). The DV360 system will append an IAS "Campaign Monitor" tag containing this ID to the creative tag. */
		iasClientId?: string | null;

		/** Whether or not to use DV360's Online Behavioral Advertising (OBA) compliance. Warning: Changing OBA settings may cause the audit status of your creatives to be reset by some ad exchanges, making them ineligible to serve until they are re-approved. */
		obaComplianceDisabled?: boolean | null;

		/** By setting this field to `true`, you, on behalf of your company, authorize Google to use video creatives associated with this Display & Video 360 advertiser to provide reporting and features related to the advertiser's television campaigns. Applicable only when the advertiser has a CM360 hybrid ad server configuration. */
		videoCreativeDataSharingAuthorized?: boolean | null;
	}

	/** Creatives related settings of an advertiser. */
	export interface AdvertiserCreativeConfigFormProperties {

		/** Whether or not the advertiser is enabled for dynamic creatives. */
		dynamicCreativeEnabled: FormControl<boolean | null | undefined>,

		/** An ID for configuring campaign monitoring provided by Integral Ad Service (IAS). The DV360 system will append an IAS "Campaign Monitor" tag containing this ID to the creative tag. */
		iasClientId: FormControl<string | null | undefined>,

		/** Whether or not to use DV360's Online Behavioral Advertising (OBA) compliance. Warning: Changing OBA settings may cause the audit status of your creatives to be reset by some ad exchanges, making them ineligible to serve until they are re-approved. */
		obaComplianceDisabled: FormControl<boolean | null | undefined>,

		/** By setting this field to `true`, you, on behalf of your company, authorize Google to use video creatives associated with this Display & Video 360 advertiser to provide reporting and features related to the advertiser's television campaigns. Applicable only when the advertiser has a CM360 hybrid ad server configuration. */
		videoCreativeDataSharingAuthorized: FormControl<boolean | null | undefined>,
	}
	export function CreateAdvertiserCreativeConfigFormGroup() {
		return new FormGroup<AdvertiserCreativeConfigFormProperties>({
			dynamicCreativeEnabled: new FormControl<boolean | null | undefined>(undefined),
			iasClientId: new FormControl<string | null | undefined>(undefined),
			obaComplianceDisabled: new FormControl<boolean | null | undefined>(undefined),
			videoCreativeDataSharingAuthorized: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Settings that control how advertiser related data may be accessed. */
	export interface AdvertiserDataAccessConfig {

		/** Structured Data Files (SDF) settings of an advertiser. */
		sdfConfig?: AdvertiserSdfConfig;
	}

	/** Settings that control how advertiser related data may be accessed. */
	export interface AdvertiserDataAccessConfigFormProperties {
	}
	export function CreateAdvertiserDataAccessConfigFormGroup() {
		return new FormGroup<AdvertiserDataAccessConfigFormProperties>({
		});

	}


	/** Structured Data Files (SDF) settings of an advertiser. */
	export interface AdvertiserSdfConfig {

		/** Whether or not this advertiser overrides the SDF configuration of its parent partner. By default, an advertiser inherits the SDF configuration from the parent partner. To override the partner configuration, set this field to `true` and provide the new configuration in sdfConfig. */
		overridePartnerSdfConfig?: boolean | null;

		/** Structured Data File (SDF) related settings. */
		sdfConfig?: SdfConfig;
	}

	/** Structured Data Files (SDF) settings of an advertiser. */
	export interface AdvertiserSdfConfigFormProperties {

		/** Whether or not this advertiser overrides the SDF configuration of its parent partner. By default, an advertiser inherits the SDF configuration from the parent partner. To override the partner configuration, set this field to `true` and provide the new configuration in sdfConfig. */
		overridePartnerSdfConfig: FormControl<boolean | null | undefined>,
	}
	export function CreateAdvertiserSdfConfigFormGroup() {
		return new FormGroup<AdvertiserSdfConfigFormProperties>({
			overridePartnerSdfConfig: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Structured Data File (SDF) related settings. */
	export interface SdfConfig {

		/** An administrator email address to which the SDF processing status reports will be sent. */
		adminEmail?: string | null;

		/** Required. The version of SDF being used. */
		version?: SdfConfigVersion | null;
	}

	/** Structured Data File (SDF) related settings. */
	export interface SdfConfigFormProperties {

		/** An administrator email address to which the SDF processing status reports will be sent. */
		adminEmail: FormControl<string | null | undefined>,

		/** Required. The version of SDF being used. */
		version: FormControl<SdfConfigVersion | null | undefined>,
	}
	export function CreateSdfConfigFormGroup() {
		return new FormGroup<SdfConfigFormProperties>({
			adminEmail: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<SdfConfigVersion | null | undefined>(undefined),
		});

	}

	export enum SdfConfigVersion { SDF_VERSION_UNSPECIFIED = 'SDF_VERSION_UNSPECIFIED', SDF_VERSION_3_1 = 'SDF_VERSION_3_1', SDF_VERSION_4 = 'SDF_VERSION_4', SDF_VERSION_4_1 = 'SDF_VERSION_4_1', SDF_VERSION_4_2 = 'SDF_VERSION_4_2', SDF_VERSION_5 = 'SDF_VERSION_5', SDF_VERSION_5_1 = 'SDF_VERSION_5_1', SDF_VERSION_5_2 = 'SDF_VERSION_5_2', SDF_VERSION_5_3 = 'SDF_VERSION_5_3', SDF_VERSION_5_4 = 'SDF_VERSION_5_4', SDF_VERSION_5_5 = 'SDF_VERSION_5_5', SDF_VERSION_6 = 'SDF_VERSION_6', SDF_VERSION_7 = 'SDF_VERSION_7' }


	/** General settings of an advertiser. */
	export interface AdvertiserGeneralConfig {

		/** Required. Immutable. Advertiser's currency in ISO 4217 format. Accepted codes and the currencies they represent are: Currency Code : Currency Name * `ARS` : Argentine Peso * `AUD` : Australian Dollar * `BRL` : Brazilian Real * `CAD` : Canadian Dollar * `CHF` : Swiss Franc * `CLP` : Chilean Peso * `CNY` : Chinese Yuan * `COP` : Colombian Peso * `CZK` : Czech Koruna * `DKK` : Danish Krone * `EGP` : Egyption Pound * `EUR` : Euro * `GBP` : British Pound * `HKD` : Hong Kong Dollar * `HUF` : Hungarian Forint * `IDR` : Indonesian Rupiah * `ILS` : Israeli Shekel * `INR` : Indian Rupee * `JPY` : Japanese Yen * `KRW` : South Korean Won * `MXN` : Mexican Pesos * `MYR` : Malaysian Ringgit * `NGN` : Nigerian Naira * `NOK` : Norwegian Krone * `NZD` : New Zealand Dollar * `PEN` : Peruvian Nuevo Sol * `PLN` : Polish Zloty * `RON` : New Romanian Leu * `RUB` : Russian Ruble * `SEK` : Swedish Krona * `TRY` : Turkish Lira * `TWD` : New Taiwan Dollar * `USD` : US Dollar * `ZAR` : South African Rand */
		currencyCode?: string | null;

		/** Required. The domain URL of the advertiser's primary website. The system will send this information to publishers that require website URL to associate a campaign with an advertiser. Provide a URL with no path or query string, beginning with `http:` or `https:`. For example, http://www.example.com */
		domainUrl?: string | null;

		/** Output only. The standard TZ database name of the advertiser's time zone. For example, `America/New_York`. See more at: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones For CM360 hybrid advertisers, the time zone is the same as that of the associated CM360 account; for third-party only advertisers, the time zone is the same as that of the parent partner. */
		timeZone?: string | null;
	}

	/** General settings of an advertiser. */
	export interface AdvertiserGeneralConfigFormProperties {

		/** Required. Immutable. Advertiser's currency in ISO 4217 format. Accepted codes and the currencies they represent are: Currency Code : Currency Name * `ARS` : Argentine Peso * `AUD` : Australian Dollar * `BRL` : Brazilian Real * `CAD` : Canadian Dollar * `CHF` : Swiss Franc * `CLP` : Chilean Peso * `CNY` : Chinese Yuan * `COP` : Colombian Peso * `CZK` : Czech Koruna * `DKK` : Danish Krone * `EGP` : Egyption Pound * `EUR` : Euro * `GBP` : British Pound * `HKD` : Hong Kong Dollar * `HUF` : Hungarian Forint * `IDR` : Indonesian Rupiah * `ILS` : Israeli Shekel * `INR` : Indian Rupee * `JPY` : Japanese Yen * `KRW` : South Korean Won * `MXN` : Mexican Pesos * `MYR` : Malaysian Ringgit * `NGN` : Nigerian Naira * `NOK` : Norwegian Krone * `NZD` : New Zealand Dollar * `PEN` : Peruvian Nuevo Sol * `PLN` : Polish Zloty * `RON` : New Romanian Leu * `RUB` : Russian Ruble * `SEK` : Swedish Krona * `TRY` : Turkish Lira * `TWD` : New Taiwan Dollar * `USD` : US Dollar * `ZAR` : South African Rand */
		currencyCode: FormControl<string | null | undefined>,

		/** Required. The domain URL of the advertiser's primary website. The system will send this information to publishers that require website URL to associate a campaign with an advertiser. Provide a URL with no path or query string, beginning with `http:` or `https:`. For example, http://www.example.com */
		domainUrl: FormControl<string | null | undefined>,

		/** Output only. The standard TZ database name of the advertiser's time zone. For example, `America/New_York`. See more at: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones For CM360 hybrid advertisers, the time zone is the same as that of the associated CM360 account; for third-party only advertisers, the time zone is the same as that of the parent partner. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateAdvertiserGeneralConfigFormGroup() {
		return new FormGroup<AdvertiserGeneralConfigFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			domainUrl: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Integration details of an entry. */
	export interface IntegrationDetails {

		/** Additional details of the entry in string format. Must be UTF-8 encoded with a length of no more than 1000 characters. */
		details?: string | null;

		/** An external identifier to be associated with the entry. The integration code will show up together with the entry in many places in the system, for example, reporting. Must be UTF-8 encoded with a length of no more than 500 characters. */
		integrationCode?: string | null;
	}

	/** Integration details of an entry. */
	export interface IntegrationDetailsFormProperties {

		/** Additional details of the entry in string format. Must be UTF-8 encoded with a length of no more than 1000 characters. */
		details: FormControl<string | null | undefined>,

		/** An external identifier to be associated with the entry. The integration code will show up together with the entry in many places in the system, for example, reporting. Must be UTF-8 encoded with a length of no more than 500 characters. */
		integrationCode: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationDetailsFormGroup() {
		return new FormGroup<IntegrationDetailsFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			integrationCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Targeting settings related to ad serving of an advertiser. */
	export interface AdvertiserTargetingConfig {

		/** Whether or not connected TV devices are exempt from viewability targeting for all video line items under the advertiser. */
		exemptTvFromViewabilityTargeting?: boolean | null;
	}

	/** Targeting settings related to ad serving of an advertiser. */
	export interface AdvertiserTargetingConfigFormProperties {

		/** Whether or not connected TV devices are exempt from viewability targeting for all video line items under the advertiser. */
		exemptTvFromViewabilityTargeting: FormControl<boolean | null | undefined>,
	}
	export function CreateAdvertiserTargetingConfigFormGroup() {
		return new FormGroup<AdvertiserTargetingConfigFormProperties>({
			exemptTvFromViewabilityTargeting: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a targetable age range. This will be populated in the age_range_details field when targeting_type is `TARGETING_TYPE_AGE_RANGE`. */
	export interface AgeRangeTargetingOptionDetails {

		/** Output only. The age range of an audience. */
		ageRange?: AgeRangeAssignedTargetingOptionDetailsAgeRange | null;
	}

	/** Represents a targetable age range. This will be populated in the age_range_details field when targeting_type is `TARGETING_TYPE_AGE_RANGE`. */
	export interface AgeRangeTargetingOptionDetailsFormProperties {

		/** Output only. The age range of an audience. */
		ageRange: FormControl<AgeRangeAssignedTargetingOptionDetailsAgeRange | null | undefined>,
	}
	export function CreateAgeRangeTargetingOptionDetailsFormGroup() {
		return new FormGroup<AgeRangeTargetingOptionDetailsFormProperties>({
			ageRange: new FormControl<AgeRangeAssignedTargetingOptionDetailsAgeRange | null | undefined>(undefined),
		});

	}


	/** Rule-based algorithm. */
	export interface AlgorithmRules {

		/** A ruleset consisting of a list of rules and how to aggregate the resulting values. */
		impressionSignalRuleset?: AlgorithmRulesRuleset;
	}

	/** Rule-based algorithm. */
	export interface AlgorithmRulesFormProperties {
	}
	export function CreateAlgorithmRulesFormGroup() {
		return new FormGroup<AlgorithmRulesFormProperties>({
		});

	}


	/** A ruleset consisting of a list of rules and how to aggregate the resulting values. */
	export interface AlgorithmRulesRuleset {

		/** How to aggregate values of evaluated rules. */
		aggregationType?: AlgorithmRulesRulesetAggregationType | null;

		/** Maximum value the ruleset can evaluate to. */
		maxValue?: number | null;

		/** List of rules to generate the impression value. */
		rules?: Array<AlgorithmRulesRule>;
	}

	/** A ruleset consisting of a list of rules and how to aggregate the resulting values. */
	export interface AlgorithmRulesRulesetFormProperties {

		/** How to aggregate values of evaluated rules. */
		aggregationType: FormControl<AlgorithmRulesRulesetAggregationType | null | undefined>,

		/** Maximum value the ruleset can evaluate to. */
		maxValue: FormControl<number | null | undefined>,
	}
	export function CreateAlgorithmRulesRulesetFormGroup() {
		return new FormGroup<AlgorithmRulesRulesetFormProperties>({
			aggregationType: new FormControl<AlgorithmRulesRulesetAggregationType | null | undefined>(undefined),
			maxValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AlgorithmRulesRulesetAggregationType { RULE_AGGREGATION_TYPE_UNSPECIFIED = 'RULE_AGGREGATION_TYPE_UNSPECIFIED', SUM_OF_VALUES = 'SUM_OF_VALUES', PRODUCT_OF_VALUES = 'PRODUCT_OF_VALUES', MAXIMUM_VALUE = 'MAXIMUM_VALUE' }


	/** Set of conditions. The return value of the rule is either: * The return value for single met condition or * The defined default return value if no conditions are met. */
	export interface AlgorithmRulesRule {

		/** List of conditions in this rule. The criteria among conditions should be mutually exclusive. */
		conditions?: Array<AlgorithmRulesRuleCondition>;

		/** Adjusted value of the signal used for rule evaluation. */
		defaultReturnValue?: AlgorithmRulesSignalValue;
	}

	/** Set of conditions. The return value of the rule is either: * The return value for single met condition or * The defined default return value if no conditions are met. */
	export interface AlgorithmRulesRuleFormProperties {
	}
	export function CreateAlgorithmRulesRuleFormGroup() {
		return new FormGroup<AlgorithmRulesRuleFormProperties>({
		});

	}


	/** Set of signal comparisons. Equivalent of an `if` statement. */
	export interface AlgorithmRulesRuleCondition {

		/** Adjusted value of the signal used for rule evaluation. */
		returnValue?: AlgorithmRulesSignalValue;

		/** List of comparisons that build `if` statement condition. The comparisons are combined into a single condition with `AND` logical operators. */
		signalComparisons?: Array<AlgorithmRulesSignalComparison>;
	}

	/** Set of signal comparisons. Equivalent of an `if` statement. */
	export interface AlgorithmRulesRuleConditionFormProperties {
	}
	export function CreateAlgorithmRulesRuleConditionFormGroup() {
		return new FormGroup<AlgorithmRulesRuleConditionFormProperties>({
		});

	}


	/** Adjusted value of the signal used for rule evaluation. */
	export interface AlgorithmRulesSignalValue {

		/** Value to use as result. */
		number?: number | null;
	}

	/** Adjusted value of the signal used for rule evaluation. */
	export interface AlgorithmRulesSignalValueFormProperties {

		/** Value to use as result. */
		number: FormControl<number | null | undefined>,
	}
	export function CreateAlgorithmRulesSignalValueFormGroup() {
		return new FormGroup<AlgorithmRulesSignalValueFormProperties>({
			number: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A single comparison. The comparison compares the `signal` to the `comparisonValue`. The comparison of `siteId==123` is represented with the following field values: * `signal` has an `impressionSignal` of `SITE_ID`. * `comparisonOperator` is set to `EQUAL`. * `comparisonValue` is set to 123. */
	export interface AlgorithmRulesSignalComparison {

		/** Operator used to compare the two values. In the resulting experession, the `signal` will be the first value and the `comparisonValue will be the second. */
		comparisonOperator?: AlgorithmRulesSignalComparisonComparisonOperator | null;

		/** A value to compare the signal to. */
		comparisonValue?: AlgorithmRulesComparisonValue;

		/** Signal used to evaluate rules. */
		signal?: AlgorithmRulesSignal;
	}

	/** A single comparison. The comparison compares the `signal` to the `comparisonValue`. The comparison of `siteId==123` is represented with the following field values: * `signal` has an `impressionSignal` of `SITE_ID`. * `comparisonOperator` is set to `EQUAL`. * `comparisonValue` is set to 123. */
	export interface AlgorithmRulesSignalComparisonFormProperties {

		/** Operator used to compare the two values. In the resulting experession, the `signal` will be the first value and the `comparisonValue will be the second. */
		comparisonOperator: FormControl<AlgorithmRulesSignalComparisonComparisonOperator | null | undefined>,
	}
	export function CreateAlgorithmRulesSignalComparisonFormGroup() {
		return new FormGroup<AlgorithmRulesSignalComparisonFormProperties>({
			comparisonOperator: new FormControl<AlgorithmRulesSignalComparisonComparisonOperator | null | undefined>(undefined),
		});

	}

	export enum AlgorithmRulesSignalComparisonComparisonOperator { COMPARISON_OPERATOR_UNSPECIFIED = 'COMPARISON_OPERATOR_UNSPECIFIED', EQUAL = 'EQUAL', GREATER_THAN = 'GREATER_THAN', LESS_THAN = 'LESS_THAN', GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO', LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO' }


	/** A value to compare the signal to. */
	export interface AlgorithmRulesComparisonValue {

		/** Boolean value. */
		boolValue?: boolean | null;

		/** Dimensions. */
		creativeDimensionValue?: Dimensions;

		/** Representation of time defined by day of the week and hour of the day. */
		dayAndTimeValue?: DayAndTime;

		/** Device type value. */
		deviceTypeValue?: AlgorithmRulesComparisonValueDeviceTypeValue | null;

		/** Double value. */
		doubleValue?: number | null;

		/** Environment value. */
		environmentValue?: EnvironmentAssignedTargetingOptionDetailsEnvironment | null;

		/** Exchange value. */
		exchangeValue?: ExchangeAssignedTargetingOptionDetailsExchange | null;

		/** Integer value. */
		int64Value?: string | null;

		/** Ad position value. */
		onScreenPositionValue?: OnScreenPositionAssignedTargetingOptionDetailsOnScreenPosition | null;

		/** String value. */
		stringValue?: string | null;
	}

	/** A value to compare the signal to. */
	export interface AlgorithmRulesComparisonValueFormProperties {

		/** Boolean value. */
		boolValue: FormControl<boolean | null | undefined>,

		/** Device type value. */
		deviceTypeValue: FormControl<AlgorithmRulesComparisonValueDeviceTypeValue | null | undefined>,

		/** Double value. */
		doubleValue: FormControl<number | null | undefined>,

		/** Environment value. */
		environmentValue: FormControl<EnvironmentAssignedTargetingOptionDetailsEnvironment | null | undefined>,

		/** Exchange value. */
		exchangeValue: FormControl<ExchangeAssignedTargetingOptionDetailsExchange | null | undefined>,

		/** Integer value. */
		int64Value: FormControl<string | null | undefined>,

		/** Ad position value. */
		onScreenPositionValue: FormControl<OnScreenPositionAssignedTargetingOptionDetailsOnScreenPosition | null | undefined>,

		/** String value. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateAlgorithmRulesComparisonValueFormGroup() {
		return new FormGroup<AlgorithmRulesComparisonValueFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			deviceTypeValue: new FormControl<AlgorithmRulesComparisonValueDeviceTypeValue | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			environmentValue: new FormControl<EnvironmentAssignedTargetingOptionDetailsEnvironment | null | undefined>(undefined),
			exchangeValue: new FormControl<ExchangeAssignedTargetingOptionDetailsExchange | null | undefined>(undefined),
			int64Value: new FormControl<string | null | undefined>(undefined),
			onScreenPositionValue: new FormControl<OnScreenPositionAssignedTargetingOptionDetailsOnScreenPosition | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of time defined by day of the week and hour of the day. */
	export interface DayAndTime {

		/** Required. Day of the week. */
		dayOfWeek?: DayAndTimeAssignedTargetingOptionDetailsDayOfWeek | null;

		/** Required. Hour of the day. */
		hourOfDay?: number | null;

		/** Required. The mechanism used to determine the relevant timezone. */
		timeZoneResolution?: DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolution | null;
	}

	/** Representation of time defined by day of the week and hour of the day. */
	export interface DayAndTimeFormProperties {

		/** Required. Day of the week. */
		dayOfWeek: FormControl<DayAndTimeAssignedTargetingOptionDetailsDayOfWeek | null | undefined>,

		/** Required. Hour of the day. */
		hourOfDay: FormControl<number | null | undefined>,

		/** Required. The mechanism used to determine the relevant timezone. */
		timeZoneResolution: FormControl<DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolution | null | undefined>,
	}
	export function CreateDayAndTimeFormGroup() {
		return new FormGroup<DayAndTimeFormProperties>({
			dayOfWeek: new FormControl<DayAndTimeAssignedTargetingOptionDetailsDayOfWeek | null | undefined>(undefined),
			hourOfDay: new FormControl<number | null | undefined>(undefined),
			timeZoneResolution: new FormControl<DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolution | null | undefined>(undefined),
		});

	}

	export enum AlgorithmRulesComparisonValueDeviceTypeValue { RULE_DEVICE_TYPE_UNSPECIFIED = 'RULE_DEVICE_TYPE_UNSPECIFIED', RULE_DEVICE_TYPE_COMPUTER = 'RULE_DEVICE_TYPE_COMPUTER', RULE_DEVICE_TYPE_CONNECTED_TV = 'RULE_DEVICE_TYPE_CONNECTED_TV', RULE_DEVICE_TYPE_SMART_PHONE = 'RULE_DEVICE_TYPE_SMART_PHONE', RULE_DEVICE_TYPE_TABLET = 'RULE_DEVICE_TYPE_TABLET', RULE_DEVICE_TYPE_CONNECTED_DEVICE = 'RULE_DEVICE_TYPE_CONNECTED_DEVICE', RULE_DEVICE_TYPE_SET_TOP_BOX = 'RULE_DEVICE_TYPE_SET_TOP_BOX' }


	/** Signal used to evaluate rules. */
	export interface AlgorithmRulesSignal {

		/** Signal based on impressions. */
		impressionSignal?: AlgorithmRulesSignalImpressionSignal | null;
	}

	/** Signal used to evaluate rules. */
	export interface AlgorithmRulesSignalFormProperties {

		/** Signal based on impressions. */
		impressionSignal: FormControl<AlgorithmRulesSignalImpressionSignal | null | undefined>,
	}
	export function CreateAlgorithmRulesSignalFormGroup() {
		return new FormGroup<AlgorithmRulesSignalFormProperties>({
			impressionSignal: new FormControl<AlgorithmRulesSignalImpressionSignal | null | undefined>(undefined),
		});

	}

	export enum AlgorithmRulesSignalImpressionSignal { IMPRESSION_SIGNAL_UNSPECIFIED = 'IMPRESSION_SIGNAL_UNSPECIFIED', DAY_AND_TIME = 'DAY_AND_TIME', DEVICE_TYPE = 'DEVICE_TYPE', AD_POSITION = 'AD_POSITION', OPERATING_SYSTEM_ID = 'OPERATING_SYSTEM_ID', MOBILE_MODEL_ID = 'MOBILE_MODEL_ID', EXCHANGE = 'EXCHANGE', ENVIRONMENT = 'ENVIRONMENT', COUNTRY_ID = 'COUNTRY_ID', CITY_ID = 'CITY_ID', BROWSER_ID = 'BROWSER_ID', CREATIVE_DIMENSION = 'CREATIVE_DIMENSION' }


	/** Represents a targetable collection of apps. A collection lets you target dynamic groups of related apps that are maintained by the platform, for example `All Apps/Google Play/Games`. This will be populated in the app_category_details field when targeting_type is `TARGETING_TYPE_APP_CATEGORY`. */
	export interface AppCategoryTargetingOptionDetails {

		/** Output only. The name of the app collection. */
		displayName?: string | null;
	}

	/** Represents a targetable collection of apps. A collection lets you target dynamic groups of related apps that are maintained by the platform, for example `All Apps/Google Play/Games`. This will be populated in the app_category_details field when targeting_type is `TARGETING_TYPE_APP_CATEGORY`. */
	export interface AppCategoryTargetingOptionDetailsFormProperties {

		/** Output only. The name of the app collection. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateAppCategoryTargetingOptionDetailsFormGroup() {
		return new FormGroup<AppCategoryTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single asset. */
	export interface Asset {

		/** The asset content. For uploaded assets, the content is the serving path. */
		content?: string | null;

		/** Media ID of the uploaded asset. This is a unique identifier for the asset. This ID can be passed to other API calls, e.g. CreateCreative to associate the asset with a creative. The Media ID space updated on **April 5, 2023**. Update media IDs cached before **April 5, 2023** by retrieving the new media ID from associated creative resources or re-uploading the asset. */
		mediaId?: string | null;
	}

	/** A single asset. */
	export interface AssetFormProperties {

		/** The asset content. For uploaded assets, the content is the serving path. */
		content: FormControl<string | null | undefined>,

		/** Media ID of the uploaded asset. This is a unique identifier for the asset. This ID can be passed to other API calls, e.g. CreateCreative to associate the asset with a creative. The Media ID space updated on **April 5, 2023**. Update media IDs cached before **April 5, 2023** by retrieving the new media ID from associated creative resources or re-uploading the asset. */
		mediaId: FormControl<string | null | undefined>,
	}
	export function CreateAssetFormGroup() {
		return new FormGroup<AssetFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			mediaId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Asset association for the creative. */
	export interface AssetAssociation {

		/** A single asset. */
		asset?: Asset;

		/** The role of this asset for the creative. */
		role?: AssetAssociationRole | null;
	}

	/** Asset association for the creative. */
	export interface AssetAssociationFormProperties {

		/** The role of this asset for the creative. */
		role: FormControl<AssetAssociationRole | null | undefined>,
	}
	export function CreateAssetAssociationFormGroup() {
		return new FormGroup<AssetAssociationFormProperties>({
			role: new FormControl<AssetAssociationRole | null | undefined>(undefined),
		});

	}

	export enum AssetAssociationRole { ASSET_ROLE_UNSPECIFIED = 'ASSET_ROLE_UNSPECIFIED', ASSET_ROLE_MAIN = 'ASSET_ROLE_MAIN', ASSET_ROLE_BACKUP = 'ASSET_ROLE_BACKUP', ASSET_ROLE_POLITE_LOAD = 'ASSET_ROLE_POLITE_LOAD', ASSET_ROLE_HEADLINE = 'ASSET_ROLE_HEADLINE', ASSET_ROLE_LONG_HEADLINE = 'ASSET_ROLE_LONG_HEADLINE', ASSET_ROLE_BODY = 'ASSET_ROLE_BODY', ASSET_ROLE_LONG_BODY = 'ASSET_ROLE_LONG_BODY', ASSET_ROLE_CAPTION_URL = 'ASSET_ROLE_CAPTION_URL', ASSET_ROLE_CALL_TO_ACTION = 'ASSET_ROLE_CALL_TO_ACTION', ASSET_ROLE_ADVERTISER_NAME = 'ASSET_ROLE_ADVERTISER_NAME', ASSET_ROLE_PRICE = 'ASSET_ROLE_PRICE', ASSET_ROLE_ANDROID_APP_ID = 'ASSET_ROLE_ANDROID_APP_ID', ASSET_ROLE_IOS_APP_ID = 'ASSET_ROLE_IOS_APP_ID', ASSET_ROLE_RATING = 'ASSET_ROLE_RATING', ASSET_ROLE_ICON = 'ASSET_ROLE_ICON', ASSET_ROLE_COVER_IMAGE = 'ASSET_ROLE_COVER_IMAGE' }


	/** An assignment between a targetable inventory source and an inventory source group. */
	export interface AssignedInventorySource {

		/** Output only. The unique ID of the assigned inventory source. The ID is only unique within a given inventory source group. It may be reused in other contexts. */
		assignedInventorySourceId?: string | null;

		/** Required. The ID of the inventory source entity being targeted. */
		inventorySourceId?: string | null;

		/** Output only. The resource name of the assigned inventory source. */
		name?: string | null;
	}

	/** An assignment between a targetable inventory source and an inventory source group. */
	export interface AssignedInventorySourceFormProperties {

		/** Output only. The unique ID of the assigned inventory source. The ID is only unique within a given inventory source group. It may be reused in other contexts. */
		assignedInventorySourceId: FormControl<string | null | undefined>,

		/** Required. The ID of the inventory source entity being targeted. */
		inventorySourceId: FormControl<string | null | undefined>,

		/** Output only. The resource name of the assigned inventory source. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAssignedInventorySourceFormGroup() {
		return new FormGroup<AssignedInventorySourceFormProperties>({
			assignedInventorySourceId: new FormControl<string | null | undefined>(undefined),
			inventorySourceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An assignment between a location list and a relevant targeting option. */
	export interface AssignedLocation {

		/** Output only. The unique ID of the assigned location. The ID is only unique within a location list. It may be reused in other contexts. */
		assignedLocationId?: string | null;

		/** Output only. The resource name of the assigned location. */
		name?: string | null;

		/** Required. The ID of the targeting option assigned to the location list. */
		targetingOptionId?: string | null;
	}

	/** An assignment between a location list and a relevant targeting option. */
	export interface AssignedLocationFormProperties {

		/** Output only. The unique ID of the assigned location. The ID is only unique within a location list. It may be reused in other contexts. */
		assignedLocationId: FormControl<string | null | undefined>,

		/** Output only. The resource name of the assigned location. */
		name: FormControl<string | null | undefined>,

		/** Required. The ID of the targeting option assigned to the location list. */
		targetingOptionId: FormControl<string | null | undefined>,
	}
	export function CreateAssignedLocationFormGroup() {
		return new FormGroup<AssignedLocationFormProperties>({
			assignedLocationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single assigned user role, which defines a user's authorized interaction with a specified partner or advertiser. */
	export interface AssignedUserRole {

		/** The ID of the advertiser that the assigend user role applies to. */
		advertiserId?: string | null;

		/** Output only. The ID of the assigned user role. */
		assignedUserRoleId?: string | null;

		/** The ID of the partner that the assigned user role applies to. */
		partnerId?: string | null;

		/** Required. The user role to assign to a user for the entity. */
		userRole?: AssignedUserRoleUserRole | null;
	}

	/** A single assigned user role, which defines a user's authorized interaction with a specified partner or advertiser. */
	export interface AssignedUserRoleFormProperties {

		/** The ID of the advertiser that the assigend user role applies to. */
		advertiserId: FormControl<string | null | undefined>,

		/** Output only. The ID of the assigned user role. */
		assignedUserRoleId: FormControl<string | null | undefined>,

		/** The ID of the partner that the assigned user role applies to. */
		partnerId: FormControl<string | null | undefined>,

		/** Required. The user role to assign to a user for the entity. */
		userRole: FormControl<AssignedUserRoleUserRole | null | undefined>,
	}
	export function CreateAssignedUserRoleFormGroup() {
		return new FormGroup<AssignedUserRoleFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			assignedUserRoleId: new FormControl<string | null | undefined>(undefined),
			partnerId: new FormControl<string | null | undefined>(undefined),
			userRole: new FormControl<AssignedUserRoleUserRole | null | undefined>(undefined),
		});

	}

	export enum AssignedUserRoleUserRole { USER_ROLE_UNSPECIFIED = 'USER_ROLE_UNSPECIFIED', ADMIN = 'ADMIN', ADMIN_PARTNER_CLIENT = 'ADMIN_PARTNER_CLIENT', STANDARD = 'STANDARD', STANDARD_PLANNER = 'STANDARD_PLANNER', STANDARD_PLANNER_LIMITED = 'STANDARD_PLANNER_LIMITED', STANDARD_PARTNER_CLIENT = 'STANDARD_PARTNER_CLIENT', READ_ONLY = 'READ_ONLY', REPORTING_ONLY = 'REPORTING_ONLY', LIMITED_REPORTING_ONLY = 'LIMITED_REPORTING_ONLY', CREATIVE = 'CREATIVE', CREATIVE_ADMIN = 'CREATIVE_ADMIN' }


	/** Represents a targetable audio content type. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. */
	export interface AudioContentTypeTargetingOptionDetails {

		/** Output only. The audio content type. */
		audioContentType?: AudioContentTypeAssignedTargetingOptionDetailsAudioContentType | null;
	}

	/** Represents a targetable audio content type. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. */
	export interface AudioContentTypeTargetingOptionDetailsFormProperties {

		/** Output only. The audio content type. */
		audioContentType: FormControl<AudioContentTypeAssignedTargetingOptionDetailsAudioContentType | null | undefined>,
	}
	export function CreateAudioContentTypeTargetingOptionDetailsFormGroup() {
		return new FormGroup<AudioContentTypeTargetingOptionDetailsFormProperties>({
			audioContentType: new FormControl<AudioContentTypeAssignedTargetingOptionDetailsAudioContentType | null | undefined>(undefined),
		});

	}


	/** The length an audio or a video has been played. */
	export interface AudioVideoOffset {

		/** The offset in percentage of the audio or video duration. */
		percentage?: string | null;

		/** The offset in seconds from the start of the audio or video. */
		seconds?: string | null;
	}

	/** The length an audio or a video has been played. */
	export interface AudioVideoOffsetFormProperties {

		/** The offset in percentage of the audio or video duration. */
		percentage: FormControl<string | null | undefined>,

		/** The offset in seconds from the start of the audio or video. */
		seconds: FormControl<string | null | undefined>,
	}
	export function CreateAudioVideoOffsetFormGroup() {
		return new FormGroup<AudioVideoOffsetFormProperties>({
			percentage: new FormControl<string | null | undefined>(undefined),
			seconds: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for AdvertiserService.AuditAdvertiser. */
	export interface AuditAdvertiserResponse {

		/** The number of individual targeting options from the following targeting types that are assigned to a line item under this advertiser. These individual targeting options count towards the limit of 4500000 ad group targeting options per advertiser. Qualifying Targeting types: * Channels, URLs, apps, and collections * Demographic * Google Audiences, including Affinity, Custom Affinity, and In-market audiences * Inventory source * Keyword * Mobile app category * User lists * Video targeting * Viewability */
		adGroupCriteriaCount?: string | null;

		/** The number of individual targeting options from the following targeting types that are assigned to a line item under this advertiser. These individual targeting options count towards the limit of 900000 campaign targeting options per advertiser. Qualifying Targeting types: * Position * Browser * Connection speed * Day and time * Device and operating system * Digital content label * Sensitive categories * Environment * Geography, including business chains and proximity * ISP * Language * Third-party verification */
		campaignCriteriaCount?: string | null;

		/** The number of channels created under this advertiser. These channels count towards the limit of 1000 channels per advertiser. */
		channelsCount?: string | null;

		/** The number of negative keyword lists created under this advertiser. These negative keyword lists count towards the limit of 20 negative keyword lists per advertiser. */
		negativeKeywordListsCount?: string | null;

		/** The number of negatively targeted channels created under this advertiser. These negatively targeted channels count towards the limit of 5 negatively targeted channels per advertiser. */
		negativelyTargetedChannelsCount?: string | null;

		/** The number of ACTIVE and PAUSED campaigns under this advertiser. These campaigns count towards the limit of 9999 campaigns per advertiser. */
		usedCampaignsCount?: string | null;

		/** The number of ACTIVE, PAUSED and DRAFT insertion orders under this advertiser. These insertion orders count towards the limit of 9999 insertion orders per advertiser. */
		usedInsertionOrdersCount?: string | null;

		/** The number of ACTIVE, PAUSED, and DRAFT line items under this advertiser. These line items count towards the limit of 9999 line items per advertiser. */
		usedLineItemsCount?: string | null;
	}

	/** Response message for AdvertiserService.AuditAdvertiser. */
	export interface AuditAdvertiserResponseFormProperties {

		/** The number of individual targeting options from the following targeting types that are assigned to a line item under this advertiser. These individual targeting options count towards the limit of 4500000 ad group targeting options per advertiser. Qualifying Targeting types: * Channels, URLs, apps, and collections * Demographic * Google Audiences, including Affinity, Custom Affinity, and In-market audiences * Inventory source * Keyword * Mobile app category * User lists * Video targeting * Viewability */
		adGroupCriteriaCount: FormControl<string | null | undefined>,

		/** The number of individual targeting options from the following targeting types that are assigned to a line item under this advertiser. These individual targeting options count towards the limit of 900000 campaign targeting options per advertiser. Qualifying Targeting types: * Position * Browser * Connection speed * Day and time * Device and operating system * Digital content label * Sensitive categories * Environment * Geography, including business chains and proximity * ISP * Language * Third-party verification */
		campaignCriteriaCount: FormControl<string | null | undefined>,

		/** The number of channels created under this advertiser. These channels count towards the limit of 1000 channels per advertiser. */
		channelsCount: FormControl<string | null | undefined>,

		/** The number of negative keyword lists created under this advertiser. These negative keyword lists count towards the limit of 20 negative keyword lists per advertiser. */
		negativeKeywordListsCount: FormControl<string | null | undefined>,

		/** The number of negatively targeted channels created under this advertiser. These negatively targeted channels count towards the limit of 5 negatively targeted channels per advertiser. */
		negativelyTargetedChannelsCount: FormControl<string | null | undefined>,

		/** The number of ACTIVE and PAUSED campaigns under this advertiser. These campaigns count towards the limit of 9999 campaigns per advertiser. */
		usedCampaignsCount: FormControl<string | null | undefined>,

		/** The number of ACTIVE, PAUSED and DRAFT insertion orders under this advertiser. These insertion orders count towards the limit of 9999 insertion orders per advertiser. */
		usedInsertionOrdersCount: FormControl<string | null | undefined>,

		/** The number of ACTIVE, PAUSED, and DRAFT line items under this advertiser. These line items count towards the limit of 9999 line items per advertiser. */
		usedLineItemsCount: FormControl<string | null | undefined>,
	}
	export function CreateAuditAdvertiserResponseFormGroup() {
		return new FormGroup<AuditAdvertiserResponseFormProperties>({
			adGroupCriteriaCount: new FormControl<string | null | undefined>(undefined),
			campaignCriteriaCount: new FormControl<string | null | undefined>(undefined),
			channelsCount: new FormControl<string | null | undefined>(undefined),
			negativeKeywordListsCount: new FormControl<string | null | undefined>(undefined),
			negativelyTargetedChannelsCount: new FormControl<string | null | undefined>(undefined),
			usedCampaignsCount: new FormControl<string | null | undefined>(undefined),
			usedInsertionOrdersCount: new FormControl<string | null | undefined>(undefined),
			usedLineItemsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a targetable authorized seller status. This will be populated in the authorized_seller_status_details field when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`. */
	export interface AuthorizedSellerStatusTargetingOptionDetails {

		/** Output only. The authorized seller status. */
		authorizedSellerStatus?: AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatus | null;
	}

	/** Represents a targetable authorized seller status. This will be populated in the authorized_seller_status_details field when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`. */
	export interface AuthorizedSellerStatusTargetingOptionDetailsFormProperties {

		/** Output only. The authorized seller status. */
		authorizedSellerStatus: FormControl<AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatus | null | undefined>,
	}
	export function CreateAuthorizedSellerStatusTargetingOptionDetailsFormGroup() {
		return new FormGroup<AuthorizedSellerStatusTargetingOptionDetailsFormProperties>({
			authorizedSellerStatus: new FormControl<AuthorizedSellerStatusAssignedTargetingOptionDetailsAuthorizedSellerStatus | null | undefined>(undefined),
		});

	}


	/** Represents a targetable browser. This will be populated in the browser_details field when targeting_type is `TARGETING_TYPE_BROWSER`. */
	export interface BrowserTargetingOptionDetails {

		/** Output only. The display name of the browser. */
		displayName?: string | null;
	}

	/** Represents a targetable browser. This will be populated in the browser_details field when targeting_type is `TARGETING_TYPE_BROWSER`. */
	export interface BrowserTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the browser. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateBrowserTargetingOptionDetailsFormGroup() {
		return new FormGroup<BrowserTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summarized information of an individual campaign budget. */
	export interface BudgetSummary {

		/** Corresponds to the external_budget_id of a campaign budget. If the value is not set in the campaign budget, this field will be empty. */
		externalBudgetId?: string | null;

		/** The sum of charges made under this budget before taxes, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar. */
		preTaxAmountMicros?: string | null;

		/** Google Payments Center supports searching and filtering on the component fields of this code. */
		prismaCpeCode?: PrismaCpeCode;

		/** The amount of tax applied to charges under this budget, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar. */
		taxAmountMicros?: string | null;

		/** The total sum of charges made under this budget, including tax, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar. */
		totalAmountMicros?: string | null;
	}

	/** Summarized information of an individual campaign budget. */
	export interface BudgetSummaryFormProperties {

		/** Corresponds to the external_budget_id of a campaign budget. If the value is not set in the campaign budget, this field will be empty. */
		externalBudgetId: FormControl<string | null | undefined>,

		/** The sum of charges made under this budget before taxes, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar. */
		preTaxAmountMicros: FormControl<string | null | undefined>,

		/** The amount of tax applied to charges under this budget, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar. */
		taxAmountMicros: FormControl<string | null | undefined>,

		/** The total sum of charges made under this budget, including tax, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar. */
		totalAmountMicros: FormControl<string | null | undefined>,
	}
	export function CreateBudgetSummaryFormGroup() {
		return new FormGroup<BudgetSummaryFormProperties>({
			externalBudgetId: new FormControl<string | null | undefined>(undefined),
			preTaxAmountMicros: new FormControl<string | null | undefined>(undefined),
			taxAmountMicros: new FormControl<string | null | undefined>(undefined),
			totalAmountMicros: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Google Payments Center supports searching and filtering on the component fields of this code. */
	export interface PrismaCpeCode {

		/** The Prisma client code. */
		prismaClientCode?: string | null;

		/** The Prisma estimate code. */
		prismaEstimateCode?: string | null;

		/** The Prisma product code. */
		prismaProductCode?: string | null;
	}

	/** Google Payments Center supports searching and filtering on the component fields of this code. */
	export interface PrismaCpeCodeFormProperties {

		/** The Prisma client code. */
		prismaClientCode: FormControl<string | null | undefined>,

		/** The Prisma estimate code. */
		prismaEstimateCode: FormControl<string | null | undefined>,

		/** The Prisma product code. */
		prismaProductCode: FormControl<string | null | undefined>,
	}
	export function CreatePrismaCpeCodeFormGroup() {
		return new FormGroup<PrismaCpeCodeFormProperties>({
			prismaClientCode: new FormControl<string | null | undefined>(undefined),
			prismaEstimateCode: new FormControl<string | null | undefined>(undefined),
			prismaProductCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for BulkEditAdvertiserAssignedTargetingOptions. */
	export interface BulkEditAdvertiserAssignedTargetingOptionsRequest {

		/** The assigned targeting options to create in batch, specified as a list of `CreateAssignedTargetingOptionsRequest`. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` */
		createRequests?: Array<CreateAssignedTargetingOptionsRequest>;

		/** The assigned targeting options to delete in batch, specified as a list of `DeleteAssignedTargetingOptionsRequest`. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` */
		deleteRequests?: Array<DeleteAssignedTargetingOptionsRequest>;
	}

	/** Request message for BulkEditAdvertiserAssignedTargetingOptions. */
	export interface BulkEditAdvertiserAssignedTargetingOptionsRequestFormProperties {
	}
	export function CreateBulkEditAdvertiserAssignedTargetingOptionsRequestFormGroup() {
		return new FormGroup<BulkEditAdvertiserAssignedTargetingOptionsRequestFormProperties>({
		});

	}


	/** A request listing which assigned targeting options of a given targeting type should be created and added. */
	export interface CreateAssignedTargetingOptionsRequest {

		/** Required. The assigned targeting options to create and add. */
		assignedTargetingOptions?: Array<AssignedTargetingOption>;

		/** Required. Identifies the type of this assigned targeting option. */
		targetingType?: AssignedTargetingOptionTargetingType | null;
	}

	/** A request listing which assigned targeting options of a given targeting type should be created and added. */
	export interface CreateAssignedTargetingOptionsRequestFormProperties {

		/** Required. Identifies the type of this assigned targeting option. */
		targetingType: FormControl<AssignedTargetingOptionTargetingType | null | undefined>,
	}
	export function CreateCreateAssignedTargetingOptionsRequestFormGroup() {
		return new FormGroup<CreateAssignedTargetingOptionsRequestFormProperties>({
			targetingType: new FormControl<AssignedTargetingOptionTargetingType | null | undefined>(undefined),
		});

	}


	/** A request listing which assigned targeting options of a given targeting type should be deleted. */
	export interface DeleteAssignedTargetingOptionsRequest {

		/** Required. The assigned targeting option IDs to delete. */
		assignedTargetingOptionIds?: Array<string>;

		/** Required. Identifies the type of this assigned targeting option. */
		targetingType?: AssignedTargetingOptionTargetingType | null;
	}

	/** A request listing which assigned targeting options of a given targeting type should be deleted. */
	export interface DeleteAssignedTargetingOptionsRequestFormProperties {

		/** Required. Identifies the type of this assigned targeting option. */
		targetingType: FormControl<AssignedTargetingOptionTargetingType | null | undefined>,
	}
	export function CreateDeleteAssignedTargetingOptionsRequestFormGroup() {
		return new FormGroup<DeleteAssignedTargetingOptionsRequestFormProperties>({
			targetingType: new FormControl<AssignedTargetingOptionTargetingType | null | undefined>(undefined),
		});

	}

	export interface BulkEditAdvertiserAssignedTargetingOptionsResponse {

		/** The list of assigned targeting options that have been successfully created. This list will be absent if empty. */
		createdAssignedTargetingOptions?: Array<AssignedTargetingOption>;
	}
	export interface BulkEditAdvertiserAssignedTargetingOptionsResponseFormProperties {
	}
	export function CreateBulkEditAdvertiserAssignedTargetingOptionsResponseFormGroup() {
		return new FormGroup<BulkEditAdvertiserAssignedTargetingOptionsResponseFormProperties>({
		});

	}


	/** Request message for AssignedInventorySourceService.BulkEdit. */
	export interface BulkEditAssignedInventorySourcesRequest {

		/** The ID of the advertiser that owns the parent inventory source group. The parent partner does not have access to these assigned inventory sources. */
		advertiserId?: string | null;

		/** The assigned inventory sources to create in bulk, specified as a list of AssignedInventorySources. */
		createdAssignedInventorySources?: Array<AssignedInventorySource>;

		/** The IDs of the assigned inventory sources to delete in bulk, specified as a list of assigned_inventory_source_ids. */
		deletedAssignedInventorySources?: Array<string>;

		/** The ID of the partner that owns the inventory source group. Only this partner has write access to these assigned inventory sources. */
		partnerId?: string | null;
	}

	/** Request message for AssignedInventorySourceService.BulkEdit. */
	export interface BulkEditAssignedInventorySourcesRequestFormProperties {

		/** The ID of the advertiser that owns the parent inventory source group. The parent partner does not have access to these assigned inventory sources. */
		advertiserId: FormControl<string | null | undefined>,

		/** The ID of the partner that owns the inventory source group. Only this partner has write access to these assigned inventory sources. */
		partnerId: FormControl<string | null | undefined>,
	}
	export function CreateBulkEditAssignedInventorySourcesRequestFormGroup() {
		return new FormGroup<BulkEditAssignedInventorySourcesRequestFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			partnerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for AssignedInventorySourceService.BulkEdit. */
	export interface BulkEditAssignedInventorySourcesResponse {

		/** The list of assigned inventory sources that have been successfully created. This list will be absent if empty. */
		assignedInventorySources?: Array<AssignedInventorySource>;
	}

	/** Response message for AssignedInventorySourceService.BulkEdit. */
	export interface BulkEditAssignedInventorySourcesResponseFormProperties {
	}
	export function CreateBulkEditAssignedInventorySourcesResponseFormGroup() {
		return new FormGroup<BulkEditAssignedInventorySourcesResponseFormProperties>({
		});

	}


	/** Request message for AssignedLocationService.BulkEditAssignedLocations. */
	export interface BulkEditAssignedLocationsRequest {

		/** The assigned locations to create in bulk, specified as a list of AssignedLocation resources. */
		createdAssignedLocations?: Array<AssignedLocation>;

		/** The IDs of the assigned locations to delete in bulk, specified as a list of assignedLocationId values. */
		deletedAssignedLocations?: Array<string>;
	}

	/** Request message for AssignedLocationService.BulkEditAssignedLocations. */
	export interface BulkEditAssignedLocationsRequestFormProperties {
	}
	export function CreateBulkEditAssignedLocationsRequestFormGroup() {
		return new FormGroup<BulkEditAssignedLocationsRequestFormProperties>({
		});

	}

	export interface BulkEditAssignedLocationsResponse {

		/** The list of assigned locations that have been successfully created. This list will be absent if empty. */
		assignedLocations?: Array<AssignedLocation>;
	}
	export interface BulkEditAssignedLocationsResponseFormProperties {
	}
	export function CreateBulkEditAssignedLocationsResponseFormGroup() {
		return new FormGroup<BulkEditAssignedLocationsResponseFormProperties>({
		});

	}


	/** Request message for BulkEditLineItemsAssignedTargetingOptions. */
	export interface BulkEditAssignedTargetingOptionsRequest {

		/** The assigned targeting options to create in batch, specified as a list of CreateAssignedTargetingOptionsRequest. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` */
		createRequests?: Array<CreateAssignedTargetingOptionsRequest>;

		/** The assigned targeting options to delete in batch, specified as a list of DeleteAssignedTargetingOptionsRequest. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` */
		deleteRequests?: Array<DeleteAssignedTargetingOptionsRequest>;

		/** Required. The ID of the line items whose targeting is being updated. */
		lineItemIds?: Array<string>;
	}

	/** Request message for BulkEditLineItemsAssignedTargetingOptions. */
	export interface BulkEditAssignedTargetingOptionsRequestFormProperties {
	}
	export function CreateBulkEditAssignedTargetingOptionsRequestFormGroup() {
		return new FormGroup<BulkEditAssignedTargetingOptionsRequestFormProperties>({
		});

	}

	export interface BulkEditAssignedTargetingOptionsResponse {

		/** The error information for each line item that failed to update. */
		errors?: Array<Status>;

		/** Output only. The IDs of the line items which failed. */
		failedLineItemIds?: Array<string>;

		/** Output only. The IDs of the line items which successfully updated. */
		updatedLineItemIds?: Array<string>;
	}
	export interface BulkEditAssignedTargetingOptionsResponseFormProperties {
	}
	export function CreateBulkEditAssignedTargetingOptionsResponseFormGroup() {
		return new FormGroup<BulkEditAssignedTargetingOptionsResponseFormProperties>({
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for BulkEditAssignedUserRoles. */
	export interface BulkEditAssignedUserRolesRequest {

		/** The assigned user roles to create in batch, specified as a list of AssignedUserRoles. */
		createdAssignedUserRoles?: Array<AssignedUserRole>;

		/** The assigned user roles to delete in batch, specified as a list of assigned_user_role_ids. The format of assigned_user_role_id is `entityType-entityid`, for example `partner-123`. */
		deletedAssignedUserRoles?: Array<string>;
	}

	/** Request message for BulkEditAssignedUserRoles. */
	export interface BulkEditAssignedUserRolesRequestFormProperties {
	}
	export function CreateBulkEditAssignedUserRolesRequestFormGroup() {
		return new FormGroup<BulkEditAssignedUserRolesRequestFormProperties>({
		});

	}

	export interface BulkEditAssignedUserRolesResponse {

		/** The list of assigned user roles that have been successfully created. This list will be absent if empty. */
		createdAssignedUserRoles?: Array<AssignedUserRole>;
	}
	export interface BulkEditAssignedUserRolesResponseFormProperties {
	}
	export function CreateBulkEditAssignedUserRolesResponseFormGroup() {
		return new FormGroup<BulkEditAssignedUserRolesResponseFormProperties>({
		});

	}


	/** Request message for NegativeKeywordService.BulkEditNegativeKeywords. */
	export interface BulkEditNegativeKeywordsRequest {

		/** The negative keywords to create in batch, specified as a list of NegativeKeywords. */
		createdNegativeKeywords?: Array<NegativeKeyword>;

		/** The negative keywords to delete in batch, specified as a list of keyword_values. */
		deletedNegativeKeywords?: Array<string>;
	}

	/** Request message for NegativeKeywordService.BulkEditNegativeKeywords. */
	export interface BulkEditNegativeKeywordsRequestFormProperties {
	}
	export function CreateBulkEditNegativeKeywordsRequestFormGroup() {
		return new FormGroup<BulkEditNegativeKeywordsRequestFormProperties>({
		});

	}


	/** A negatively targeted keyword that belongs to a negative keyword list. */
	export interface NegativeKeyword {

		/** Required. Immutable. The negatively targeted keyword, for example `car insurance`. Must be UTF-8 encoded with a maximum size of 255 bytes. Maximum number of characters is 80. Maximum number of words is 10. Valid characters are restricted to ASCII characters only. The only URL-escaping permitted is for representing whitespace between words. Leading or trailing whitespace is ignored. */
		keywordValue?: string | null;

		/** Output only. The resource name of the negative keyword. */
		name?: string | null;
	}

	/** A negatively targeted keyword that belongs to a negative keyword list. */
	export interface NegativeKeywordFormProperties {

		/** Required. Immutable. The negatively targeted keyword, for example `car insurance`. Must be UTF-8 encoded with a maximum size of 255 bytes. Maximum number of characters is 80. Maximum number of words is 10. Valid characters are restricted to ASCII characters only. The only URL-escaping permitted is for representing whitespace between words. Leading or trailing whitespace is ignored. */
		keywordValue: FormControl<string | null | undefined>,

		/** Output only. The resource name of the negative keyword. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNegativeKeywordFormGroup() {
		return new FormGroup<NegativeKeywordFormProperties>({
			keywordValue: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for NegativeKeywordService.BulkEditNegativeKeywords. */
	export interface BulkEditNegativeKeywordsResponse {

		/** The list of negative keywords that have been successfully created. This list will be absent if empty. */
		negativeKeywords?: Array<NegativeKeyword>;
	}

	/** Response message for NegativeKeywordService.BulkEditNegativeKeywords. */
	export interface BulkEditNegativeKeywordsResponseFormProperties {
	}
	export function CreateBulkEditNegativeKeywordsResponseFormGroup() {
		return new FormGroup<BulkEditNegativeKeywordsResponseFormProperties>({
		});

	}


	/** Request message for BulkEditPartnerAssignedTargetingOptions. */
	export interface BulkEditPartnerAssignedTargetingOptionsRequest {

		/** The assigned targeting options to create in batch, specified as a list of `CreateAssignedTargetingOptionsRequest`. Supported targeting types: * `TARGETING_TYPE_CHANNEL` */
		createRequests?: Array<CreateAssignedTargetingOptionsRequest>;

		/** The assigned targeting options to delete in batch, specified as a list of `DeleteAssignedTargetingOptionsRequest`. Supported targeting types: * `TARGETING_TYPE_CHANNEL` */
		deleteRequests?: Array<DeleteAssignedTargetingOptionsRequest>;
	}

	/** Request message for BulkEditPartnerAssignedTargetingOptions. */
	export interface BulkEditPartnerAssignedTargetingOptionsRequestFormProperties {
	}
	export function CreateBulkEditPartnerAssignedTargetingOptionsRequestFormGroup() {
		return new FormGroup<BulkEditPartnerAssignedTargetingOptionsRequestFormProperties>({
		});

	}

	export interface BulkEditPartnerAssignedTargetingOptionsResponse {

		/** The list of assigned targeting options that have been successfully created. This list will be absent if empty. */
		createdAssignedTargetingOptions?: Array<AssignedTargetingOption>;
	}
	export interface BulkEditPartnerAssignedTargetingOptionsResponseFormProperties {
	}
	export function CreateBulkEditPartnerAssignedTargetingOptionsResponseFormGroup() {
		return new FormGroup<BulkEditPartnerAssignedTargetingOptionsResponseFormProperties>({
		});

	}


	/** Request message for SiteService.BulkEditSites. */
	export interface BulkEditSitesRequest {

		/** The ID of the advertiser that owns the parent channel. */
		advertiserId?: string | null;

		/** The sites to create in batch, specified as a list of Sites. */
		createdSites?: Array<Site>;

		/** The sites to delete in batch, specified as a list of site url_or_app_ids. */
		deletedSites?: Array<string>;

		/** The ID of the partner that owns the parent channel. */
		partnerId?: string | null;
	}

	/** Request message for SiteService.BulkEditSites. */
	export interface BulkEditSitesRequestFormProperties {

		/** The ID of the advertiser that owns the parent channel. */
		advertiserId: FormControl<string | null | undefined>,

		/** The ID of the partner that owns the parent channel. */
		partnerId: FormControl<string | null | undefined>,
	}
	export function CreateBulkEditSitesRequestFormGroup() {
		return new FormGroup<BulkEditSitesRequestFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			partnerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single site. Sites are apps or websites belonging to a channel. */
	export interface Site {

		/** Output only. The resource name of the site. */
		name?: string | null;

		/** Required. The app ID or URL of the site. Must be UTF-8 encoded with a maximum length of 240 bytes. */
		urlOrAppId?: string | null;
	}

	/** A single site. Sites are apps or websites belonging to a channel. */
	export interface SiteFormProperties {

		/** Output only. The resource name of the site. */
		name: FormControl<string | null | undefined>,

		/** Required. The app ID or URL of the site. Must be UTF-8 encoded with a maximum length of 240 bytes. */
		urlOrAppId: FormControl<string | null | undefined>,
	}
	export function CreateSiteFormGroup() {
		return new FormGroup<SiteFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			urlOrAppId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for SiteService.BulkEditSites. */
	export interface BulkEditSitesResponse {

		/** The list of sites that have been successfully created. This list will be absent if empty. */
		sites?: Array<Site>;
	}

	/** Response message for SiteService.BulkEditSites. */
	export interface BulkEditSitesResponseFormProperties {
	}
	export function CreateBulkEditSitesResponseFormGroup() {
		return new FormGroup<BulkEditSitesResponseFormProperties>({
		});

	}

	export interface BulkListAdGroupAssignedTargetingOptionsResponse {

		/** The list of wrapper objects, each providing an assigned targeting option and the ad group it is assigned to. This list will be absent if empty. */
		adGroupAssignedTargetingOptions?: Array<AdGroupAssignedTargetingOption>;

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent call to `BulkListAdGroupAssignedTargetingOptions` to fetch the next page of results. This token will be absent if there are no more AdGroupAssignedTargetingOption resources to return. */
		nextPageToken?: string | null;
	}
	export interface BulkListAdGroupAssignedTargetingOptionsResponseFormProperties {

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent call to `BulkListAdGroupAssignedTargetingOptions` to fetch the next page of results. This token will be absent if there are no more AdGroupAssignedTargetingOption resources to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateBulkListAdGroupAssignedTargetingOptionsResponseFormGroup() {
		return new FormGroup<BulkListAdGroupAssignedTargetingOptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BulkListAdvertiserAssignedTargetingOptionsResponse {

		/** The list of assigned targeting options. This list will be absent if empty. */
		assignedTargetingOptions?: Array<AssignedTargetingOption>;

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent BulkListAdvertiserAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. */
		nextPageToken?: string | null;
	}
	export interface BulkListAdvertiserAssignedTargetingOptionsResponseFormProperties {

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent BulkListAdvertiserAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateBulkListAdvertiserAssignedTargetingOptionsResponseFormGroup() {
		return new FormGroup<BulkListAdvertiserAssignedTargetingOptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BulkListAssignedTargetingOptionsResponse {

		/** The list of wrapper objects, each providing an assigned targeting option and the line item it is assigned to. This list will be absent if empty. */
		lineItemAssignedTargetingOptions?: Array<LineItemAssignedTargetingOption>;

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent call to `BulkListAssignedTargetingOptions` to fetch the next page of results. This token will be absent if there are no more line_item_assigned_targeting_options to return. */
		nextPageToken?: string | null;
	}
	export interface BulkListAssignedTargetingOptionsResponseFormProperties {

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent call to `BulkListAssignedTargetingOptions` to fetch the next page of results. This token will be absent if there are no more line_item_assigned_targeting_options to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateBulkListAssignedTargetingOptionsResponseFormGroup() {
		return new FormGroup<BulkListAssignedTargetingOptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Wrapper object associating an assigned_targeting_option resource and the line item it is assigned to. */
	export interface LineItemAssignedTargetingOption {

		/** A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings. */
		assignedTargetingOption?: AssignedTargetingOption;

		/** The ID of the line item the assigned targeting option is assigned to. */
		lineItemId?: string | null;
	}

	/** Wrapper object associating an assigned_targeting_option resource and the line item it is assigned to. */
	export interface LineItemAssignedTargetingOptionFormProperties {

		/** The ID of the line item the assigned targeting option is assigned to. */
		lineItemId: FormControl<string | null | undefined>,
	}
	export function CreateLineItemAssignedTargetingOptionFormGroup() {
		return new FormGroup<LineItemAssignedTargetingOptionFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BulkListCampaignAssignedTargetingOptionsResponse {

		/** The list of assigned targeting options. This list will be absent if empty. */
		assignedTargetingOptions?: Array<AssignedTargetingOption>;

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent BulkListCampaignAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. */
		nextPageToken?: string | null;
	}
	export interface BulkListCampaignAssignedTargetingOptionsResponseFormProperties {

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent BulkListCampaignAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateBulkListCampaignAssignedTargetingOptionsResponseFormGroup() {
		return new FormGroup<BulkListCampaignAssignedTargetingOptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BulkListInsertionOrderAssignedTargetingOptionsResponse {

		/** The list of assigned targeting options. This list will be absent if empty. */
		assignedTargetingOptions?: Array<AssignedTargetingOption>;

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent BulkListInsertionOrderAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. */
		nextPageToken?: string | null;
	}
	export interface BulkListInsertionOrderAssignedTargetingOptionsResponseFormProperties {

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent BulkListInsertionOrderAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateBulkListInsertionOrderAssignedTargetingOptionsResponseFormGroup() {
		return new FormGroup<BulkListInsertionOrderAssignedTargetingOptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for LineItemService.BulkUpdateLineItems. */
	export interface BulkUpdateLineItemsRequest {

		/** Required. IDs of line items to update. */
		lineItemIds?: Array<string>;

		/** A single line item. */
		targetLineItem?: LineItem;

		/** Required. A field mask identifying which fields to update. Only the following fields are currently supported: * entityStatus */
		updateMask?: string | null;
	}

	/** Request message for LineItemService.BulkUpdateLineItems. */
	export interface BulkUpdateLineItemsRequestFormProperties {

		/** Required. A field mask identifying which fields to update. Only the following fields are currently supported: * entityStatus */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateBulkUpdateLineItemsRequestFormGroup() {
		return new FormGroup<BulkUpdateLineItemsRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single line item. */
	export interface LineItem {

		/** Output only. The unique ID of the advertiser the line item belongs to. */
		advertiserId?: string | null;

		/** Settings that control the bid strategy. Bid strategy determines the bid price. */
		bidStrategy?: BiddingStrategy;

		/** Settings that control how budget is allocated. */
		budget?: LineItemBudget;

		/** Output only. The unique ID of the campaign that the line item belongs to. */
		campaignId?: string | null;

		/** Settings that control how conversions are counted. All post-click conversions will be counted. A percentage value can be set for post-view conversions counting. */
		conversionCounting?: ConversionCountingConfig;

		/** The IDs of the creatives associated with the line item. */
		creativeIds?: Array<string>;

		/** Required. The display name of the line item. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName?: string | null;

		/** Required. Controls whether or not the line item can spend its budget and bid on inventory. * For CreateLineItem method, only `ENTITY_STATUS_DRAFT` is allowed. To activate a line item, use UpdateLineItem method and update the status to `ENTITY_STATUS_ACTIVE` after creation. * A line item cannot be changed back to `ENTITY_STATUS_DRAFT` status from any other status. * If the line item's parent insertion order is not active, the line item can't spend its budget even if its own status is `ENTITY_STATUS_ACTIVE`. */
		entityStatus?: AdGroupEntityStatus | null;

		/** Whether to exclude new exchanges from automatically being targeted by the line item. This field is false by default. */
		excludeNewExchanges?: boolean | null;

		/** Settings that control the active duration of a line item. */
		flight?: LineItemFlight;

		/** Settings that control the number of times a user may be shown with the same ad during a given time period. */
		frequencyCap?: FrequencyCap;

		/** Required. Immutable. The unique ID of the insertion order that the line item belongs to. */
		insertionOrderId?: string | null;

		/** Integration details of an entry. */
		integrationDetails?: IntegrationDetails;

		/** Output only. The unique ID of the line item. Assigned by the system. */
		lineItemId?: string | null;

		/** Required. Immutable. The type of the line item. */
		lineItemType?: LineItemLineItemType | null;

		/** A mobile app promoted by a mobile app install line item. */
		mobileApp?: MobileApp;

		/** Output only. The resource name of the line item. */
		name?: string | null;

		/** Settings that control the rate at which a budget is spent. */
		pacing?: Pacing;

		/** The partner costs associated with the line item. If absent or empty in CreateLineItem method, the newly created line item will inherit partner costs from its parent insertion order. */
		partnerCosts?: Array<PartnerCost>;

		/** Settings that control how partner revenue is calculated. */
		partnerRevenueModel?: PartnerRevenueModel;

		/** Output only. The reservation type of the line item. */
		reservationType?: LineItemReservationType | null;

		/** Settings that control the [optimized targeting](//support.google.com/displayvideo/answer/12060859) settings of the line item. */
		targetingExpansion?: TargetingExpansionConfig;

		/** Output only. The timestamp when the line item was last updated. Assigned by the system. */
		updateTime?: string | null;

		/** Output only. The warning messages generated by the line item. These warnings do not block saving the line item, but some may block the line item from running. */
		warningMessages?: Array<string>;

		/** Settings for YouTube and Partners line items. Next ID: 15 */
		youtubeAndPartnersSettings?: YoutubeAndPartnersSettings;
	}

	/** A single line item. */
	export interface LineItemFormProperties {

		/** Output only. The unique ID of the advertiser the line item belongs to. */
		advertiserId: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the campaign that the line item belongs to. */
		campaignId: FormControl<string | null | undefined>,

		/** Required. The display name of the line item. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Required. Controls whether or not the line item can spend its budget and bid on inventory. * For CreateLineItem method, only `ENTITY_STATUS_DRAFT` is allowed. To activate a line item, use UpdateLineItem method and update the status to `ENTITY_STATUS_ACTIVE` after creation. * A line item cannot be changed back to `ENTITY_STATUS_DRAFT` status from any other status. * If the line item's parent insertion order is not active, the line item can't spend its budget even if its own status is `ENTITY_STATUS_ACTIVE`. */
		entityStatus: FormControl<AdGroupEntityStatus | null | undefined>,

		/** Whether to exclude new exchanges from automatically being targeted by the line item. This field is false by default. */
		excludeNewExchanges: FormControl<boolean | null | undefined>,

		/** Required. Immutable. The unique ID of the insertion order that the line item belongs to. */
		insertionOrderId: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the line item. Assigned by the system. */
		lineItemId: FormControl<string | null | undefined>,

		/** Required. Immutable. The type of the line item. */
		lineItemType: FormControl<LineItemLineItemType | null | undefined>,

		/** Output only. The resource name of the line item. */
		name: FormControl<string | null | undefined>,

		/** Output only. The reservation type of the line item. */
		reservationType: FormControl<LineItemReservationType | null | undefined>,

		/** Output only. The timestamp when the line item was last updated. Assigned by the system. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateLineItemFormGroup() {
		return new FormGroup<LineItemFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			campaignId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			entityStatus: new FormControl<AdGroupEntityStatus | null | undefined>(undefined),
			excludeNewExchanges: new FormControl<boolean | null | undefined>(undefined),
			insertionOrderId: new FormControl<string | null | undefined>(undefined),
			lineItemId: new FormControl<string | null | undefined>(undefined),
			lineItemType: new FormControl<LineItemLineItemType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reservationType: new FormControl<LineItemReservationType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings that control how budget is allocated. */
	export interface LineItemBudget {

		/** Required. The type of the budget allocation. `LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC` is only applicable when automatic budget allocation is enabled for the parent insertion order. */
		budgetAllocationType?: LineItemBudgetBudgetAllocationType | null;

		/** Output only. The budget unit specifies whether the budget is currency based or impression based. This value is inherited from the parent insertion order. */
		budgetUnit?: LineItemBudgetBudgetUnit | null;

		/** The maximum budget amount the line item will spend. Must be greater than 0. When budget_allocation_type is: * `LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC`, this field is immutable and is set by the system. * `LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED`, if budget_unit is: - `BUDGET_UNIT_CURRENCY`, this field represents maximum budget amount to spend, in micros of the advertiser's currency. For example, 1500000 represents 1.5 standard units of the currency. - `BUDGET_UNIT_IMPRESSIONS`, this field represents the maximum number of impressions to serve. * `LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED`, this field is not applicable and will be ignored by the system. */
		maxAmount?: string | null;
	}

	/** Settings that control how budget is allocated. */
	export interface LineItemBudgetFormProperties {

		/** Required. The type of the budget allocation. `LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC` is only applicable when automatic budget allocation is enabled for the parent insertion order. */
		budgetAllocationType: FormControl<LineItemBudgetBudgetAllocationType | null | undefined>,

		/** Output only. The budget unit specifies whether the budget is currency based or impression based. This value is inherited from the parent insertion order. */
		budgetUnit: FormControl<LineItemBudgetBudgetUnit | null | undefined>,

		/** The maximum budget amount the line item will spend. Must be greater than 0. When budget_allocation_type is: * `LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC`, this field is immutable and is set by the system. * `LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED`, if budget_unit is: - `BUDGET_UNIT_CURRENCY`, this field represents maximum budget amount to spend, in micros of the advertiser's currency. For example, 1500000 represents 1.5 standard units of the currency. - `BUDGET_UNIT_IMPRESSIONS`, this field represents the maximum number of impressions to serve. * `LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED`, this field is not applicable and will be ignored by the system. */
		maxAmount: FormControl<string | null | undefined>,
	}
	export function CreateLineItemBudgetFormGroup() {
		return new FormGroup<LineItemBudgetFormProperties>({
			budgetAllocationType: new FormControl<LineItemBudgetBudgetAllocationType | null | undefined>(undefined),
			budgetUnit: new FormControl<LineItemBudgetBudgetUnit | null | undefined>(undefined),
			maxAmount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LineItemBudgetBudgetAllocationType { LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNSPECIFIED = 'LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNSPECIFIED', LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC = 'LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC', LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED = 'LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED', LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED = 'LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED' }

	export enum LineItemBudgetBudgetUnit { BUDGET_UNIT_UNSPECIFIED = 'BUDGET_UNIT_UNSPECIFIED', BUDGET_UNIT_CURRENCY = 'BUDGET_UNIT_CURRENCY', BUDGET_UNIT_IMPRESSIONS = 'BUDGET_UNIT_IMPRESSIONS' }


	/** Settings that control how conversions are counted. All post-click conversions will be counted. A percentage value can be set for post-view conversions counting. */
	export interface ConversionCountingConfig {

		/** The Floodlight activity configs used to track conversions. The number of conversions counted is the sum of all of the conversions counted by all of the Floodlight activity IDs specified in this field. */
		floodlightActivityConfigs?: Array<TrackingFloodlightActivityConfig>;

		/** The percentage of post-view conversions to count, in millis (1/1000 of a percent). Must be between 0 and 100000 inclusive. For example, to track 50% of the post-click conversions, set a value of 50000. */
		postViewCountPercentageMillis?: string | null;
	}

	/** Settings that control how conversions are counted. All post-click conversions will be counted. A percentage value can be set for post-view conversions counting. */
	export interface ConversionCountingConfigFormProperties {

		/** The percentage of post-view conversions to count, in millis (1/1000 of a percent). Must be between 0 and 100000 inclusive. For example, to track 50% of the post-click conversions, set a value of 50000. */
		postViewCountPercentageMillis: FormControl<string | null | undefined>,
	}
	export function CreateConversionCountingConfigFormGroup() {
		return new FormGroup<ConversionCountingConfigFormProperties>({
			postViewCountPercentageMillis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings that control the behavior of a single Floodlight activity config. */
	export interface TrackingFloodlightActivityConfig {

		/** Required. The ID of the Floodlight activity. */
		floodlightActivityId?: string | null;

		/** Required. The number of days after an ad has been clicked in which a conversion may be counted. Must be between 0 and 90 inclusive. */
		postClickLookbackWindowDays?: number | null;

		/** Required. The number of days after an ad has been viewed in which a conversion may be counted. Must be between 0 and 90 inclusive. */
		postViewLookbackWindowDays?: number | null;
	}

	/** Settings that control the behavior of a single Floodlight activity config. */
	export interface TrackingFloodlightActivityConfigFormProperties {

		/** Required. The ID of the Floodlight activity. */
		floodlightActivityId: FormControl<string | null | undefined>,

		/** Required. The number of days after an ad has been clicked in which a conversion may be counted. Must be between 0 and 90 inclusive. */
		postClickLookbackWindowDays: FormControl<number | null | undefined>,

		/** Required. The number of days after an ad has been viewed in which a conversion may be counted. Must be between 0 and 90 inclusive. */
		postViewLookbackWindowDays: FormControl<number | null | undefined>,
	}
	export function CreateTrackingFloodlightActivityConfigFormGroup() {
		return new FormGroup<TrackingFloodlightActivityConfigFormProperties>({
			floodlightActivityId: new FormControl<string | null | undefined>(undefined),
			postClickLookbackWindowDays: new FormControl<number | null | undefined>(undefined),
			postViewLookbackWindowDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Settings that control the active duration of a line item. */
	export interface LineItemFlight {

		/** A date range. */
		dateRange?: DateRange;

		/** Required. The type of the line item's flight dates. */
		flightDateType?: LineItemFlightFlightDateType | null;
	}

	/** Settings that control the active duration of a line item. */
	export interface LineItemFlightFormProperties {

		/** Required. The type of the line item's flight dates. */
		flightDateType: FormControl<LineItemFlightFlightDateType | null | undefined>,
	}
	export function CreateLineItemFlightFormGroup() {
		return new FormGroup<LineItemFlightFormProperties>({
			flightDateType: new FormControl<LineItemFlightFlightDateType | null | undefined>(undefined),
		});

	}


	/** A date range. */
	export interface DateRange {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		endDate?: Date;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		startDate?: Date;
	}

	/** A date range. */
	export interface DateRangeFormProperties {
	}
	export function CreateDateRangeFormGroup() {
		return new FormGroup<DateRangeFormProperties>({
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

	export enum LineItemFlightFlightDateType { LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED = 'LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED', LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED = 'LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED', LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM = 'LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM' }


	/** Settings that control the number of times a user may be shown with the same ad during a given time period. */
	export interface FrequencyCap {

		/** The maximum number of times a user may be shown the same ad during this period. Must be greater than 0. Required when unlimited is `false` and max_views is not set. */
		maxImpressions?: number | null;

		/** The maximum number of times a user may click-through or fully view an ad during this period until it is no longer served to them. Must be greater than 0. Only applicable to YouTube and Partners resources. Required when unlimited is `false` and max_impressions is not set. */
		maxViews?: number | null;

		/** The time unit in which the frequency cap will be applied. Required when unlimited is `false`. */
		timeUnit?: FrequencyCapTimeUnit | null;

		/** The number of time_unit the frequency cap will last. Required when unlimited is `false`. The following restrictions apply based on the value of time_unit: * `TIME_UNIT_LIFETIME` - this field is output only and will default to 1 * `TIME_UNIT_MONTHS` - must be between 1 and 2 * `TIME_UNIT_WEEKS` - must be between 1 and 4 * `TIME_UNIT_DAYS` - must be between 1 and 6 * `TIME_UNIT_HOURS` - must be between 1 and 23 * `TIME_UNIT_MINUTES` - must be between 1 and 59 */
		timeUnitCount?: number | null;

		/** Whether unlimited frequency capping is applied. When this field is set to `true`, the remaining frequency cap fields are not applicable. */
		unlimited?: boolean | null;
	}

	/** Settings that control the number of times a user may be shown with the same ad during a given time period. */
	export interface FrequencyCapFormProperties {

		/** The maximum number of times a user may be shown the same ad during this period. Must be greater than 0. Required when unlimited is `false` and max_views is not set. */
		maxImpressions: FormControl<number | null | undefined>,

		/** The maximum number of times a user may click-through or fully view an ad during this period until it is no longer served to them. Must be greater than 0. Only applicable to YouTube and Partners resources. Required when unlimited is `false` and max_impressions is not set. */
		maxViews: FormControl<number | null | undefined>,

		/** The time unit in which the frequency cap will be applied. Required when unlimited is `false`. */
		timeUnit: FormControl<FrequencyCapTimeUnit | null | undefined>,

		/** The number of time_unit the frequency cap will last. Required when unlimited is `false`. The following restrictions apply based on the value of time_unit: * `TIME_UNIT_LIFETIME` - this field is output only and will default to 1 * `TIME_UNIT_MONTHS` - must be between 1 and 2 * `TIME_UNIT_WEEKS` - must be between 1 and 4 * `TIME_UNIT_DAYS` - must be between 1 and 6 * `TIME_UNIT_HOURS` - must be between 1 and 23 * `TIME_UNIT_MINUTES` - must be between 1 and 59 */
		timeUnitCount: FormControl<number | null | undefined>,

		/** Whether unlimited frequency capping is applied. When this field is set to `true`, the remaining frequency cap fields are not applicable. */
		unlimited: FormControl<boolean | null | undefined>,
	}
	export function CreateFrequencyCapFormGroup() {
		return new FormGroup<FrequencyCapFormProperties>({
			maxImpressions: new FormControl<number | null | undefined>(undefined),
			maxViews: new FormControl<number | null | undefined>(undefined),
			timeUnit: new FormControl<FrequencyCapTimeUnit | null | undefined>(undefined),
			timeUnitCount: new FormControl<number | null | undefined>(undefined),
			unlimited: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum FrequencyCapTimeUnit { TIME_UNIT_UNSPECIFIED = 'TIME_UNIT_UNSPECIFIED', TIME_UNIT_LIFETIME = 'TIME_UNIT_LIFETIME', TIME_UNIT_MONTHS = 'TIME_UNIT_MONTHS', TIME_UNIT_WEEKS = 'TIME_UNIT_WEEKS', TIME_UNIT_DAYS = 'TIME_UNIT_DAYS', TIME_UNIT_HOURS = 'TIME_UNIT_HOURS', TIME_UNIT_MINUTES = 'TIME_UNIT_MINUTES' }

	export enum LineItemLineItemType { LINE_ITEM_TYPE_UNSPECIFIED = 'LINE_ITEM_TYPE_UNSPECIFIED', LINE_ITEM_TYPE_DISPLAY_DEFAULT = 'LINE_ITEM_TYPE_DISPLAY_DEFAULT', LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL = 'LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL', LINE_ITEM_TYPE_VIDEO_DEFAULT = 'LINE_ITEM_TYPE_VIDEO_DEFAULT', LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL = 'LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL', LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY = 'LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY', LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY = 'LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY', LINE_ITEM_TYPE_AUDIO_DEFAULT = 'LINE_ITEM_TYPE_AUDIO_DEFAULT', LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP = 'LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP', LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_ACTION = 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_ACTION', LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE = 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE', LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE = 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE', LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_AUDIO = 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_AUDIO', LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH = 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH', LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE = 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE', LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE_OVER_THE_TOP = 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE_OVER_THE_TOP', LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH_OVER_THE_TOP = 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH_OVER_THE_TOP', LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE_OVER_THE_TOP = 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE_OVER_THE_TOP', LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_TARGET_FREQUENCY = 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_TARGET_FREQUENCY', LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIEW = 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIEW', LINE_ITEM_TYPE_DISPLAY_OUT_OF_HOME = 'LINE_ITEM_TYPE_DISPLAY_OUT_OF_HOME', LINE_ITEM_TYPE_VIDEO_OUT_OF_HOME = 'LINE_ITEM_TYPE_VIDEO_OUT_OF_HOME' }


	/** A mobile app promoted by a mobile app install line item. */
	export interface MobileApp {

		/** Required. The ID of the app provided by the platform store. Android apps are identified by the bundle ID used by Android's Play store, such as `com.google.android.gm`. iOS apps are identified by a nine-digit app ID used by Apple's App store, such as `422689480`. */
		appId?: string | null;

		/** Output only. The app name. */
		displayName?: string | null;

		/** Output only. The app platform. */
		platform?: MobileAppPlatform | null;

		/** Output only. The app publisher. */
		publisher?: string | null;
	}

	/** A mobile app promoted by a mobile app install line item. */
	export interface MobileAppFormProperties {

		/** Required. The ID of the app provided by the platform store. Android apps are identified by the bundle ID used by Android's Play store, such as `com.google.android.gm`. iOS apps are identified by a nine-digit app ID used by Apple's App store, such as `422689480`. */
		appId: FormControl<string | null | undefined>,

		/** Output only. The app name. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The app platform. */
		platform: FormControl<MobileAppPlatform | null | undefined>,

		/** Output only. The app publisher. */
		publisher: FormControl<string | null | undefined>,
	}
	export function CreateMobileAppFormGroup() {
		return new FormGroup<MobileAppFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<MobileAppPlatform | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MobileAppPlatform { PLATFORM_UNSPECIFIED = 'PLATFORM_UNSPECIFIED', IOS = 'IOS', ANDROID = 'ANDROID' }


	/** Settings that control the rate at which a budget is spent. */
	export interface Pacing {

		/** Maximum number of impressions to serve every day. Applicable when the budget is impression based. Must be greater than 0. */
		dailyMaxImpressions?: string | null;

		/** Maximum currency amount to spend every day in micros of advertiser's currency. Applicable when the budget is currency based. Must be greater than 0. For example, for 1.5 standard unit of the currency, set this field to 1500000. The value assigned will be rounded to whole billable units for the relevant currency by the following rules: any positive value less than a single billable unit will be rounded up to one billable unit and any value larger than a single billable unit will be rounded down to the nearest billable value. For example, if the currency's billable unit is 0.01, and this field is set to 10257770, it will round down to 10250000, a value of 10.25. If set to 505, it will round up to 10000, a value of 0.01. */
		dailyMaxMicros?: string | null;

		/** Required. The time period in which the pacing budget will be spent. When automatic budget allocation is enabled at the insertion order via automationType, this field is output only and defaults to `PACING_PERIOD_FLIGHT`. */
		pacingPeriod?: PacingPacingPeriod | null;

		/** Required. The type of pacing that defines how the budget amount will be spent across the pacing_period. */
		pacingType?: PacingPacingType | null;
	}

	/** Settings that control the rate at which a budget is spent. */
	export interface PacingFormProperties {

		/** Maximum number of impressions to serve every day. Applicable when the budget is impression based. Must be greater than 0. */
		dailyMaxImpressions: FormControl<string | null | undefined>,

		/** Maximum currency amount to spend every day in micros of advertiser's currency. Applicable when the budget is currency based. Must be greater than 0. For example, for 1.5 standard unit of the currency, set this field to 1500000. The value assigned will be rounded to whole billable units for the relevant currency by the following rules: any positive value less than a single billable unit will be rounded up to one billable unit and any value larger than a single billable unit will be rounded down to the nearest billable value. For example, if the currency's billable unit is 0.01, and this field is set to 10257770, it will round down to 10250000, a value of 10.25. If set to 505, it will round up to 10000, a value of 0.01. */
		dailyMaxMicros: FormControl<string | null | undefined>,

		/** Required. The time period in which the pacing budget will be spent. When automatic budget allocation is enabled at the insertion order via automationType, this field is output only and defaults to `PACING_PERIOD_FLIGHT`. */
		pacingPeriod: FormControl<PacingPacingPeriod | null | undefined>,

		/** Required. The type of pacing that defines how the budget amount will be spent across the pacing_period. */
		pacingType: FormControl<PacingPacingType | null | undefined>,
	}
	export function CreatePacingFormGroup() {
		return new FormGroup<PacingFormProperties>({
			dailyMaxImpressions: new FormControl<string | null | undefined>(undefined),
			dailyMaxMicros: new FormControl<string | null | undefined>(undefined),
			pacingPeriod: new FormControl<PacingPacingPeriod | null | undefined>(undefined),
			pacingType: new FormControl<PacingPacingType | null | undefined>(undefined),
		});

	}

	export enum PacingPacingPeriod { PACING_PERIOD_UNSPECIFIED = 'PACING_PERIOD_UNSPECIFIED', PACING_PERIOD_DAILY = 'PACING_PERIOD_DAILY', PACING_PERIOD_FLIGHT = 'PACING_PERIOD_FLIGHT' }

	export enum PacingPacingType { PACING_TYPE_UNSPECIFIED = 'PACING_TYPE_UNSPECIFIED', PACING_TYPE_AHEAD = 'PACING_TYPE_AHEAD', PACING_TYPE_ASAP = 'PACING_TYPE_ASAP', PACING_TYPE_EVEN = 'PACING_TYPE_EVEN' }


	/** Settings that control a partner cost. A partner cost is any type of expense involved in running a campaign, other than the costs of purchasing impressions (which is called the media cost) and using third-party audience segment data (data fee). Some examples of partner costs include the fees for using DV360, a third-party ad server, or a third-party ad serving verification service. */
	export interface PartnerCost {

		/** Required. The type of the partner cost. */
		costType?: PartnerCostCostType | null;

		/** The CPM fee amount in micros of advertiser's currency. Applicable when the fee_type is `PARTNER_FEE_TYPE_CPM_FEE`. Must be greater than or equal to 0. For example, for 1.5 standard unit of the advertiser's currency, set this field to 1500000. */
		feeAmount?: string | null;

		/** The media fee percentage in millis (1/1000 of a percent). Applicable when the fee_type is `PARTNER_FEE_TYPE_MEDIA_FEE`. Must be greater than or equal to 0. For example: 100 represents 0.1%. */
		feePercentageMillis?: string | null;

		/** Required. The fee type for this partner cost. */
		feeType?: PartnerCostFeeType | null;

		/** The invoice type for this partner cost. * Required when cost_type is one of: - `PARTNER_COST_TYPE_ADLOOX` - `PARTNER_COST_TYPE_DOUBLE_VERIFY` - `PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE`. * Output only for other types. */
		invoiceType?: PartnerCostInvoiceType | null;
	}

	/** Settings that control a partner cost. A partner cost is any type of expense involved in running a campaign, other than the costs of purchasing impressions (which is called the media cost) and using third-party audience segment data (data fee). Some examples of partner costs include the fees for using DV360, a third-party ad server, or a third-party ad serving verification service. */
	export interface PartnerCostFormProperties {

		/** Required. The type of the partner cost. */
		costType: FormControl<PartnerCostCostType | null | undefined>,

		/** The CPM fee amount in micros of advertiser's currency. Applicable when the fee_type is `PARTNER_FEE_TYPE_CPM_FEE`. Must be greater than or equal to 0. For example, for 1.5 standard unit of the advertiser's currency, set this field to 1500000. */
		feeAmount: FormControl<string | null | undefined>,

		/** The media fee percentage in millis (1/1000 of a percent). Applicable when the fee_type is `PARTNER_FEE_TYPE_MEDIA_FEE`. Must be greater than or equal to 0. For example: 100 represents 0.1%. */
		feePercentageMillis: FormControl<string | null | undefined>,

		/** Required. The fee type for this partner cost. */
		feeType: FormControl<PartnerCostFeeType | null | undefined>,

		/** The invoice type for this partner cost. * Required when cost_type is one of: - `PARTNER_COST_TYPE_ADLOOX` - `PARTNER_COST_TYPE_DOUBLE_VERIFY` - `PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE`. * Output only for other types. */
		invoiceType: FormControl<PartnerCostInvoiceType | null | undefined>,
	}
	export function CreatePartnerCostFormGroup() {
		return new FormGroup<PartnerCostFormProperties>({
			costType: new FormControl<PartnerCostCostType | null | undefined>(undefined),
			feeAmount: new FormControl<string | null | undefined>(undefined),
			feePercentageMillis: new FormControl<string | null | undefined>(undefined),
			feeType: new FormControl<PartnerCostFeeType | null | undefined>(undefined),
			invoiceType: new FormControl<PartnerCostInvoiceType | null | undefined>(undefined),
		});

	}

	export enum PartnerCostCostType { PARTNER_COST_TYPE_UNSPECIFIED = 'PARTNER_COST_TYPE_UNSPECIFIED', PARTNER_COST_TYPE_ADLOOX = 'PARTNER_COST_TYPE_ADLOOX', PARTNER_COST_TYPE_ADLOOX_PREBID = 'PARTNER_COST_TYPE_ADLOOX_PREBID', PARTNER_COST_TYPE_ADSAFE = 'PARTNER_COST_TYPE_ADSAFE', PARTNER_COST_TYPE_ADXPOSE = 'PARTNER_COST_TYPE_ADXPOSE', PARTNER_COST_TYPE_AGGREGATE_KNOWLEDGE = 'PARTNER_COST_TYPE_AGGREGATE_KNOWLEDGE', PARTNER_COST_TYPE_AGENCY_TRADING_DESK = 'PARTNER_COST_TYPE_AGENCY_TRADING_DESK', PARTNER_COST_TYPE_DV360_FEE = 'PARTNER_COST_TYPE_DV360_FEE', PARTNER_COST_TYPE_COMSCORE_VCE = 'PARTNER_COST_TYPE_COMSCORE_VCE', PARTNER_COST_TYPE_DATA_MANAGEMENT_PLATFORM = 'PARTNER_COST_TYPE_DATA_MANAGEMENT_PLATFORM', PARTNER_COST_TYPE_DEFAULT = 'PARTNER_COST_TYPE_DEFAULT', PARTNER_COST_TYPE_DOUBLE_VERIFY = 'PARTNER_COST_TYPE_DOUBLE_VERIFY', PARTNER_COST_TYPE_DOUBLE_VERIFY_PREBID = 'PARTNER_COST_TYPE_DOUBLE_VERIFY_PREBID', PARTNER_COST_TYPE_EVIDON = 'PARTNER_COST_TYPE_EVIDON', PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_VIDEO = 'PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_VIDEO', PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_PREBID = 'PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_PREBID', PARTNER_COST_TYPE_MEDIA_COST_DATA = 'PARTNER_COST_TYPE_MEDIA_COST_DATA', PARTNER_COST_TYPE_MOAT_VIDEO = 'PARTNER_COST_TYPE_MOAT_VIDEO', PARTNER_COST_TYPE_NIELSEN_DAR = 'PARTNER_COST_TYPE_NIELSEN_DAR', PARTNER_COST_TYPE_SHOP_LOCAL = 'PARTNER_COST_TYPE_SHOP_LOCAL', PARTNER_COST_TYPE_TERACENT = 'PARTNER_COST_TYPE_TERACENT', PARTNER_COST_TYPE_THIRD_PARTY_AD_SERVER = 'PARTNER_COST_TYPE_THIRD_PARTY_AD_SERVER', PARTNER_COST_TYPE_TRUST_METRICS = 'PARTNER_COST_TYPE_TRUST_METRICS', PARTNER_COST_TYPE_VIZU = 'PARTNER_COST_TYPE_VIZU', PARTNER_COST_TYPE_ADLINGO_FEE = 'PARTNER_COST_TYPE_ADLINGO_FEE', PARTNER_COST_TYPE_CUSTOM_FEE_1 = 'PARTNER_COST_TYPE_CUSTOM_FEE_1', PARTNER_COST_TYPE_CUSTOM_FEE_2 = 'PARTNER_COST_TYPE_CUSTOM_FEE_2', PARTNER_COST_TYPE_CUSTOM_FEE_3 = 'PARTNER_COST_TYPE_CUSTOM_FEE_3', PARTNER_COST_TYPE_CUSTOM_FEE_4 = 'PARTNER_COST_TYPE_CUSTOM_FEE_4', PARTNER_COST_TYPE_CUSTOM_FEE_5 = 'PARTNER_COST_TYPE_CUSTOM_FEE_5', PARTNER_COST_TYPE_SCIBIDS_FEE = 'PARTNER_COST_TYPE_SCIBIDS_FEE' }

	export enum PartnerCostFeeType { PARTNER_COST_FEE_TYPE_UNSPECIFIED = 'PARTNER_COST_FEE_TYPE_UNSPECIFIED', PARTNER_COST_FEE_TYPE_CPM_FEE = 'PARTNER_COST_FEE_TYPE_CPM_FEE', PARTNER_COST_FEE_TYPE_MEDIA_FEE = 'PARTNER_COST_FEE_TYPE_MEDIA_FEE' }

	export enum PartnerCostInvoiceType { PARTNER_COST_INVOICE_TYPE_UNSPECIFIED = 'PARTNER_COST_INVOICE_TYPE_UNSPECIFIED', PARTNER_COST_INVOICE_TYPE_DV360 = 'PARTNER_COST_INVOICE_TYPE_DV360', PARTNER_COST_INVOICE_TYPE_PARTNER = 'PARTNER_COST_INVOICE_TYPE_PARTNER' }


	/** Settings that control how partner revenue is calculated. */
	export interface PartnerRevenueModel {

		/** Required. The markup amount of the partner revenue model. Must be greater than or equal to 0. * When the markup_type is set to be `PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM`, this field represents the CPM markup in micros of advertiser's currency. For example, 1500000 represents 1.5 standard units of the currency. * When the markup_type is set to be `PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP`, this field represents the media cost percent markup in millis. For example, 100 represents 0.1% (decimal 0.001). * When the markup_type is set to be `PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP`, this field represents the total media cost percent markup in millis. For example, 100 represents 0.1% (decimal 0.001). */
		markupAmount?: string | null;

		/** Required. The markup type of the partner revenue model. */
		markupType?: PartnerRevenueModelMarkupType | null;
	}

	/** Settings that control how partner revenue is calculated. */
	export interface PartnerRevenueModelFormProperties {

		/** Required. The markup amount of the partner revenue model. Must be greater than or equal to 0. * When the markup_type is set to be `PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM`, this field represents the CPM markup in micros of advertiser's currency. For example, 1500000 represents 1.5 standard units of the currency. * When the markup_type is set to be `PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP`, this field represents the media cost percent markup in millis. For example, 100 represents 0.1% (decimal 0.001). * When the markup_type is set to be `PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP`, this field represents the total media cost percent markup in millis. For example, 100 represents 0.1% (decimal 0.001). */
		markupAmount: FormControl<string | null | undefined>,

		/** Required. The markup type of the partner revenue model. */
		markupType: FormControl<PartnerRevenueModelMarkupType | null | undefined>,
	}
	export function CreatePartnerRevenueModelFormGroup() {
		return new FormGroup<PartnerRevenueModelFormProperties>({
			markupAmount: new FormControl<string | null | undefined>(undefined),
			markupType: new FormControl<PartnerRevenueModelMarkupType | null | undefined>(undefined),
		});

	}

	export enum PartnerRevenueModelMarkupType { PARTNER_REVENUE_MODEL_MARKUP_TYPE_UNSPECIFIED = 'PARTNER_REVENUE_MODEL_MARKUP_TYPE_UNSPECIFIED', PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM = 'PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM', PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP = 'PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP', PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP = 'PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP' }

	export enum LineItemReservationType { RESERVATION_TYPE_UNSPECIFIED = 'RESERVATION_TYPE_UNSPECIFIED', RESERVATION_TYPE_NOT_GUARANTEED = 'RESERVATION_TYPE_NOT_GUARANTEED', RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED = 'RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED', RESERVATION_TYPE_TAG_GUARANTEED = 'RESERVATION_TYPE_TAG_GUARANTEED', RESERVATION_TYPE_PETRA_VIRAL = 'RESERVATION_TYPE_PETRA_VIRAL', RESERVATION_TYPE_INSTANT_RESERVE = 'RESERVATION_TYPE_INSTANT_RESERVE' }


	/** Settings for YouTube and Partners line items. Next ID: 15 */
	export interface YoutubeAndPartnersSettings {

		/** The kind of content on which the YouTube and Partners ads will be shown. */
		contentCategory?: YoutubeAndPartnersSettingsContentCategory | null;

		/** Output only. The content category which takes effect when serving the line item. When content category is set in both line item and advertiser, the stricter one will take effect when serving the line item. */
		effectiveContentCategory?: YoutubeAndPartnersSettingsContentCategory | null;

		/** Settings that control what YouTube related inventories the YouTube and Partners line item will target. */
		inventorySourceSettings?: YoutubeAndPartnersInventorySourceConfig;

		/** The ID of the form to generate leads. */
		leadFormId?: string | null;

		/** The ID of the merchant which is linked to the line item for product feed. */
		linkedMerchantId?: string | null;

		/** The IDs of the videos appear below the primary video ad when the ad is playing in the YouTube app on mobile devices. */
		relatedVideoIds?: Array<string>;

		/** Setting that controls the average number of times the ads will show to the same person over a certain period of time. */
		targetFrequency?: TargetFrequency;

		/** Settings that control what third-party vendors are measuring specific line item metrics. */
		thirdPartyMeasurementConfigs?: ThirdPartyMeasurementConfigs;

		/** Settings related to VideoAdSequence. */
		videoAdSequenceSettings?: VideoAdSequenceSettings;

		/** Settings that control the number of times a user may be shown with the same ad during a given time period. */
		viewFrequencyCap?: FrequencyCap;
	}

	/** Settings for YouTube and Partners line items. Next ID: 15 */
	export interface YoutubeAndPartnersSettingsFormProperties {

		/** The kind of content on which the YouTube and Partners ads will be shown. */
		contentCategory: FormControl<YoutubeAndPartnersSettingsContentCategory | null | undefined>,

		/** Output only. The content category which takes effect when serving the line item. When content category is set in both line item and advertiser, the stricter one will take effect when serving the line item. */
		effectiveContentCategory: FormControl<YoutubeAndPartnersSettingsContentCategory | null | undefined>,

		/** The ID of the form to generate leads. */
		leadFormId: FormControl<string | null | undefined>,

		/** The ID of the merchant which is linked to the line item for product feed. */
		linkedMerchantId: FormControl<string | null | undefined>,
	}
	export function CreateYoutubeAndPartnersSettingsFormGroup() {
		return new FormGroup<YoutubeAndPartnersSettingsFormProperties>({
			contentCategory: new FormControl<YoutubeAndPartnersSettingsContentCategory | null | undefined>(undefined),
			effectiveContentCategory: new FormControl<YoutubeAndPartnersSettingsContentCategory | null | undefined>(undefined),
			leadFormId: new FormControl<string | null | undefined>(undefined),
			linkedMerchantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum YoutubeAndPartnersSettingsContentCategory { YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED = 'YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED', YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD = 'YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD', YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED = 'YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED', YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED = 'YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED' }


	/** Settings that control what YouTube related inventories the YouTube and Partners line item will target. */
	export interface YoutubeAndPartnersInventorySourceConfig {

		/** Whether to target inventory on YouTube. This includes both search, channels and videos. */
		includeYoutube?: boolean | null;

		/** Whether to target inventory on a collection of partner sites and apps that follow the same brand safety standards as YouTube. */
		includeYoutubeVideoPartners?: boolean | null;
	}

	/** Settings that control what YouTube related inventories the YouTube and Partners line item will target. */
	export interface YoutubeAndPartnersInventorySourceConfigFormProperties {

		/** Whether to target inventory on YouTube. This includes both search, channels and videos. */
		includeYoutube: FormControl<boolean | null | undefined>,

		/** Whether to target inventory on a collection of partner sites and apps that follow the same brand safety standards as YouTube. */
		includeYoutubeVideoPartners: FormControl<boolean | null | undefined>,
	}
	export function CreateYoutubeAndPartnersInventorySourceConfigFormGroup() {
		return new FormGroup<YoutubeAndPartnersInventorySourceConfigFormProperties>({
			includeYoutube: new FormControl<boolean | null | undefined>(undefined),
			includeYoutubeVideoPartners: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Setting that controls the average number of times the ads will show to the same person over a certain period of time. */
	export interface TargetFrequency {

		/** The target number of times, on average, the ads will be shown to the same person in the timespan dictated by time_unit and time_unit_count. */
		targetCount?: string | null;

		/** The unit of time in which the target frequency will be applied. The following time unit is applicable: * `TIME_UNIT_WEEKS` */
		timeUnit?: FrequencyCapTimeUnit | null;

		/** The number of time_unit the target frequency will last. The following restrictions apply based on the value of time_unit: * `TIME_UNIT_WEEKS` - must be 1 */
		timeUnitCount?: number | null;
	}

	/** Setting that controls the average number of times the ads will show to the same person over a certain period of time. */
	export interface TargetFrequencyFormProperties {

		/** The target number of times, on average, the ads will be shown to the same person in the timespan dictated by time_unit and time_unit_count. */
		targetCount: FormControl<string | null | undefined>,

		/** The unit of time in which the target frequency will be applied. The following time unit is applicable: * `TIME_UNIT_WEEKS` */
		timeUnit: FormControl<FrequencyCapTimeUnit | null | undefined>,

		/** The number of time_unit the target frequency will last. The following restrictions apply based on the value of time_unit: * `TIME_UNIT_WEEKS` - must be 1 */
		timeUnitCount: FormControl<number | null | undefined>,
	}
	export function CreateTargetFrequencyFormGroup() {
		return new FormGroup<TargetFrequencyFormProperties>({
			targetCount: new FormControl<string | null | undefined>(undefined),
			timeUnit: new FormControl<FrequencyCapTimeUnit | null | undefined>(undefined),
			timeUnitCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Settings that control what third-party vendors are measuring specific line item metrics. */
	export interface ThirdPartyMeasurementConfigs {

		/** Optional. The third-party vendors measuring brand lift. The following third-party vendors are applicable: * `THIRD_PARTY_VENDOR_DYNATA` * `THIRD_PARTY_VENDOR_KANTAR` */
		brandLiftVendorConfigs?: Array<ThirdPartyVendorConfig>;

		/** Optional. The third-party vendors measuring brand safety. The following third-party vendors are applicable: * `THIRD_PARTY_VENDOR_ZERF` * `THIRD_PARTY_VENDOR_DOUBLE_VERIFY` * `THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE` */
		brandSafetyVendorConfigs?: Array<ThirdPartyVendorConfig>;

		/** Optional. The third-party vendors measuring reach. The following third-party vendors are applicable: * `THIRD_PARTY_VENDOR_NIELSEN` * `THIRD_PARTY_VENDOR_COMSCORE` * `THIRD_PARTY_VENDOR_KANTAR` */
		reachVendorConfigs?: Array<ThirdPartyVendorConfig>;

		/** Optional. The third-party vendors measuring viewability. The following third-party vendors are applicable: * `THIRD_PARTY_VENDOR_MOAT` * `THIRD_PARTY_VENDOR_DOUBLE_VERIFY` * `THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE` * `THIRD_PARTY_VENDOR_COMSCORE` * `THIRD_PARTY_VENDOR_TELEMETRY` * `THIRD_PARTY_VENDOR_MEETRICS` */
		viewabilityVendorConfigs?: Array<ThirdPartyVendorConfig>;
	}

	/** Settings that control what third-party vendors are measuring specific line item metrics. */
	export interface ThirdPartyMeasurementConfigsFormProperties {
	}
	export function CreateThirdPartyMeasurementConfigsFormGroup() {
		return new FormGroup<ThirdPartyMeasurementConfigsFormProperties>({
		});

	}


	/** Settings that control how third-party measurement vendors are configured. */
	export interface ThirdPartyVendorConfig {

		/** The ID used by the platform of the third-party vendor to identify the line item. */
		placementId?: string | null;

		/** The third-party measurement vendor. */
		vendor?: ThirdPartyVendorConfigVendor | null;
	}

	/** Settings that control how third-party measurement vendors are configured. */
	export interface ThirdPartyVendorConfigFormProperties {

		/** The ID used by the platform of the third-party vendor to identify the line item. */
		placementId: FormControl<string | null | undefined>,

		/** The third-party measurement vendor. */
		vendor: FormControl<ThirdPartyVendorConfigVendor | null | undefined>,
	}
	export function CreateThirdPartyVendorConfigFormGroup() {
		return new FormGroup<ThirdPartyVendorConfigFormProperties>({
			placementId: new FormControl<string | null | undefined>(undefined),
			vendor: new FormControl<ThirdPartyVendorConfigVendor | null | undefined>(undefined),
		});

	}

	export enum ThirdPartyVendorConfigVendor { THIRD_PARTY_VENDOR_UNSPECIFIED = 'THIRD_PARTY_VENDOR_UNSPECIFIED', THIRD_PARTY_VENDOR_MOAT = 'THIRD_PARTY_VENDOR_MOAT', THIRD_PARTY_VENDOR_DOUBLE_VERIFY = 'THIRD_PARTY_VENDOR_DOUBLE_VERIFY', THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE = 'THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE', THIRD_PARTY_VENDOR_COMSCORE = 'THIRD_PARTY_VENDOR_COMSCORE', THIRD_PARTY_VENDOR_TELEMETRY = 'THIRD_PARTY_VENDOR_TELEMETRY', THIRD_PARTY_VENDOR_MEETRICS = 'THIRD_PARTY_VENDOR_MEETRICS', THIRD_PARTY_VENDOR_ZEFR = 'THIRD_PARTY_VENDOR_ZEFR', THIRD_PARTY_VENDOR_NIELSEN = 'THIRD_PARTY_VENDOR_NIELSEN', THIRD_PARTY_VENDOR_KANTAR = 'THIRD_PARTY_VENDOR_KANTAR', THIRD_PARTY_VENDOR_DYNATA = 'THIRD_PARTY_VENDOR_DYNATA' }


	/** Settings related to VideoAdSequence. */
	export interface VideoAdSequenceSettings {

		/** The minimum time interval before the same user sees this sequence again. */
		minimumDuration?: VideoAdSequenceSettingsMinimumDuration | null;

		/** The steps of which the sequence consists. */
		steps?: Array<VideoAdSequenceStep>;
	}

	/** Settings related to VideoAdSequence. */
	export interface VideoAdSequenceSettingsFormProperties {

		/** The minimum time interval before the same user sees this sequence again. */
		minimumDuration: FormControl<VideoAdSequenceSettingsMinimumDuration | null | undefined>,
	}
	export function CreateVideoAdSequenceSettingsFormGroup() {
		return new FormGroup<VideoAdSequenceSettingsFormProperties>({
			minimumDuration: new FormControl<VideoAdSequenceSettingsMinimumDuration | null | undefined>(undefined),
		});

	}

	export enum VideoAdSequenceSettingsMinimumDuration { VIDEO_AD_SEQUENCE_MINIMUM_DURATION_UNSPECIFIED = 'VIDEO_AD_SEQUENCE_MINIMUM_DURATION_UNSPECIFIED', VIDEO_AD_SEQUENCE_MINIMUM_DURATION_WEEK = 'VIDEO_AD_SEQUENCE_MINIMUM_DURATION_WEEK', VIDEO_AD_SEQUENCE_MINIMUM_DURATION_MONTH = 'VIDEO_AD_SEQUENCE_MINIMUM_DURATION_MONTH' }


	/** The detail of a single step in a VideoAdSequence. */
	export interface VideoAdSequenceStep {

		/** The ID of the corresponding ad group of the step. */
		adGroupId?: string | null;

		/** The interaction on the previous step that will lead the viewer to this step. The first step does not have interaction_type. */
		interactionType?: VideoAdSequenceStepInteractionType | null;

		/** The ID of the previous step. The first step does not have previous step. */
		previousStepId?: string | null;

		/** The ID of the step. */
		stepId?: string | null;
	}

	/** The detail of a single step in a VideoAdSequence. */
	export interface VideoAdSequenceStepFormProperties {

		/** The ID of the corresponding ad group of the step. */
		adGroupId: FormControl<string | null | undefined>,

		/** The interaction on the previous step that will lead the viewer to this step. The first step does not have interaction_type. */
		interactionType: FormControl<VideoAdSequenceStepInteractionType | null | undefined>,

		/** The ID of the previous step. The first step does not have previous step. */
		previousStepId: FormControl<string | null | undefined>,

		/** The ID of the step. */
		stepId: FormControl<string | null | undefined>,
	}
	export function CreateVideoAdSequenceStepFormGroup() {
		return new FormGroup<VideoAdSequenceStepFormProperties>({
			adGroupId: new FormControl<string | null | undefined>(undefined),
			interactionType: new FormControl<VideoAdSequenceStepInteractionType | null | undefined>(undefined),
			previousStepId: new FormControl<string | null | undefined>(undefined),
			stepId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VideoAdSequenceStepInteractionType { INTERACTION_TYPE_UNSPECIFIED = 'INTERACTION_TYPE_UNSPECIFIED', INTERACTION_TYPE_PAID_VIEW = 'INTERACTION_TYPE_PAID_VIEW', INTERACTION_TYPE_SKIP = 'INTERACTION_TYPE_SKIP', INTERACTION_TYPE_IMPRESSION = 'INTERACTION_TYPE_IMPRESSION', INTERACTION_TYPE_ENGAGED_IMPRESSION = 'INTERACTION_TYPE_ENGAGED_IMPRESSION' }


	/** Response message for LineItemService.BulkUpdateLineItems. */
	export interface BulkUpdateLineItemsResponse {

		/** Errors returned by line items that failed to update. */
		errors?: Array<Status>;

		/** The IDs of line items that failed to update. */
		failedLineItemIds?: Array<string>;

		/** The IDs of line items that are skipped for updates. For example, unnecessary mutates that will result in effectively no changes to line items will be skipped and corresponding line item IDs can be tracked here. */
		skippedLineItemIds?: Array<string>;

		/** The IDs of successfully updated line items. */
		updatedLineItemIds?: Array<string>;
	}

	/** Response message for LineItemService.BulkUpdateLineItems. */
	export interface BulkUpdateLineItemsResponseFormProperties {
	}
	export function CreateBulkUpdateLineItemsResponseFormGroup() {
		return new FormGroup<BulkUpdateLineItemsResponseFormProperties>({
		});

	}


	/** Search terms for Business Chain targeting options. At least one of the field should be populated. */
	export interface BusinessChainSearchTerms {

		/** The search query for the desired business chain. The query must be the full name of the business, e.g. "KFC", "mercedes-benz". */
		businessChainQuery?: string | null;

		/** The search query for the desired geo region, e.g. "Seattle", "United State". */
		regionQuery?: string | null;
	}

	/** Search terms for Business Chain targeting options. At least one of the field should be populated. */
	export interface BusinessChainSearchTermsFormProperties {

		/** The search query for the desired business chain. The query must be the full name of the business, e.g. "KFC", "mercedes-benz". */
		businessChainQuery: FormControl<string | null | undefined>,

		/** The search query for the desired geo region, e.g. "Seattle", "United State". */
		regionQuery: FormControl<string | null | undefined>,
	}
	export function CreateBusinessChainSearchTermsFormGroup() {
		return new FormGroup<BusinessChainSearchTermsFormProperties>({
			businessChainQuery: new FormControl<string | null | undefined>(undefined),
			regionQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a targetable business chain within a geo region. This will be populated in the business_chain_details field when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`. */
	export interface BusinessChainTargetingOptionDetails {

		/** Output only. The display name of the business chain, e.g. "KFC", "Chase Bank". */
		businessChain?: string | null;

		/** Output only. The display name of the geographic region, e.g. "Ontario, Canada". */
		geoRegion?: string | null;

		/** Output only. The type of the geographic region. */
		geoRegionType?: GeoRegionAssignedTargetingOptionDetailsGeoRegionType | null;
	}

	/** Represents a targetable business chain within a geo region. This will be populated in the business_chain_details field when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`. */
	export interface BusinessChainTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the business chain, e.g. "KFC", "Chase Bank". */
		businessChain: FormControl<string | null | undefined>,

		/** Output only. The display name of the geographic region, e.g. "Ontario, Canada". */
		geoRegion: FormControl<string | null | undefined>,

		/** Output only. The type of the geographic region. */
		geoRegionType: FormControl<GeoRegionAssignedTargetingOptionDetailsGeoRegionType | null | undefined>,
	}
	export function CreateBusinessChainTargetingOptionDetailsFormGroup() {
		return new FormGroup<BusinessChainTargetingOptionDetailsFormProperties>({
			businessChain: new FormControl<string | null | undefined>(undefined),
			geoRegion: new FormControl<string | null | undefined>(undefined),
			geoRegionType: new FormControl<GeoRegionAssignedTargetingOptionDetailsGeoRegionType | null | undefined>(undefined),
		});

	}


	/** A single campaign. */
	export interface Campaign {

		/** Output only. The unique ID of the advertiser the campaign belongs to. */
		advertiserId?: string | null;

		/** The list of budgets available to this campaign. If this field is not set, the campaign uses an unlimited budget. */
		campaignBudgets?: Array<CampaignBudget>;

		/** Settings that track the planned spend and duration of a campaign. */
		campaignFlight?: CampaignFlight;

		/** Settings that control the goal of a campaign. */
		campaignGoal?: CampaignGoal;

		/** Output only. The unique ID of the campaign. Assigned by the system. */
		campaignId?: string | null;

		/** Required. The display name of the campaign. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName?: string | null;

		/** Required. Controls whether or not the insertion orders under this campaign can spend their budgets and bid on inventory. * Accepted values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. * For CreateCampaign method, `ENTITY_STATUS_ARCHIVED` is not allowed. */
		entityStatus?: AdGroupEntityStatus | null;

		/** Settings that control the number of times a user may be shown with the same ad during a given time period. */
		frequencyCap?: FrequencyCap;

		/** Output only. The resource name of the campaign. */
		name?: string | null;

		/** Output only. The timestamp when the campaign was last updated. Assigned by the system. */
		updateTime?: string | null;
	}

	/** A single campaign. */
	export interface CampaignFormProperties {

		/** Output only. The unique ID of the advertiser the campaign belongs to. */
		advertiserId: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the campaign. Assigned by the system. */
		campaignId: FormControl<string | null | undefined>,

		/** Required. The display name of the campaign. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Required. Controls whether or not the insertion orders under this campaign can spend their budgets and bid on inventory. * Accepted values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. * For CreateCampaign method, `ENTITY_STATUS_ARCHIVED` is not allowed. */
		entityStatus: FormControl<AdGroupEntityStatus | null | undefined>,

		/** Output only. The resource name of the campaign. */
		name: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the campaign was last updated. Assigned by the system. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCampaignFormGroup() {
		return new FormGroup<CampaignFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			campaignId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			entityStatus: new FormControl<AdGroupEntityStatus | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings that control how the campaign budget is allocated. */
	export interface CampaignBudget {

		/** Required. The total amount the linked insertion order segments can budget. The amount is in micros. Must be greater than 0. For example, 500000000 represents 500 standard units of the currency. */
		budgetAmountMicros?: string | null;

		/** The unique ID of the campaign budget. Assigned by the system. Do not set for new budgets. Must be included when updating or adding budgets to campaign_budgets. Otherwise, a new ID will be generated and assigned. */
		budgetId?: string | null;

		/** Required. Immutable. Specifies whether the budget is measured in currency or impressions. */
		budgetUnit?: LineItemBudgetBudgetUnit | null;

		/** A date range. */
		dateRange?: DateRange;

		/** Required. The display name of the budget. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName?: string | null;

		/** Immutable. The ID identifying this budget to the external source. If this field is set and the invoice detail level of the corresponding billing profile is set to "Budget level PO", all impressions served against this budget will include this ID on the invoice. Must be unique under the campaign. */
		externalBudgetId?: string | null;

		/** Required. The external source of the budget. */
		externalBudgetSource?: CampaignBudgetExternalBudgetSource | null;

		/** Immutable. The ID used to group budgets to be included the same invoice. If this field is set and the invoice level of the corresponding billing profile is set to "Budget invoice grouping ID", all external_budget_id sharing the same invoice_grouping_id will be grouped in the same invoice. */
		invoiceGroupingId?: string | null;

		/** Settings specific to the Mediaocean Prisma tool. */
		prismaConfig?: PrismaConfig;
	}

	/** Settings that control how the campaign budget is allocated. */
	export interface CampaignBudgetFormProperties {

		/** Required. The total amount the linked insertion order segments can budget. The amount is in micros. Must be greater than 0. For example, 500000000 represents 500 standard units of the currency. */
		budgetAmountMicros: FormControl<string | null | undefined>,

		/** The unique ID of the campaign budget. Assigned by the system. Do not set for new budgets. Must be included when updating or adding budgets to campaign_budgets. Otherwise, a new ID will be generated and assigned. */
		budgetId: FormControl<string | null | undefined>,

		/** Required. Immutable. Specifies whether the budget is measured in currency or impressions. */
		budgetUnit: FormControl<LineItemBudgetBudgetUnit | null | undefined>,

		/** Required. The display name of the budget. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Immutable. The ID identifying this budget to the external source. If this field is set and the invoice detail level of the corresponding billing profile is set to "Budget level PO", all impressions served against this budget will include this ID on the invoice. Must be unique under the campaign. */
		externalBudgetId: FormControl<string | null | undefined>,

		/** Required. The external source of the budget. */
		externalBudgetSource: FormControl<CampaignBudgetExternalBudgetSource | null | undefined>,

		/** Immutable. The ID used to group budgets to be included the same invoice. If this field is set and the invoice level of the corresponding billing profile is set to "Budget invoice grouping ID", all external_budget_id sharing the same invoice_grouping_id will be grouped in the same invoice. */
		invoiceGroupingId: FormControl<string | null | undefined>,
	}
	export function CreateCampaignBudgetFormGroup() {
		return new FormGroup<CampaignBudgetFormProperties>({
			budgetAmountMicros: new FormControl<string | null | undefined>(undefined),
			budgetId: new FormControl<string | null | undefined>(undefined),
			budgetUnit: new FormControl<LineItemBudgetBudgetUnit | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			externalBudgetId: new FormControl<string | null | undefined>(undefined),
			externalBudgetSource: new FormControl<CampaignBudgetExternalBudgetSource | null | undefined>(undefined),
			invoiceGroupingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CampaignBudgetExternalBudgetSource { EXTERNAL_BUDGET_SOURCE_UNSPECIFIED = 'EXTERNAL_BUDGET_SOURCE_UNSPECIFIED', EXTERNAL_BUDGET_SOURCE_NONE = 'EXTERNAL_BUDGET_SOURCE_NONE', EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN = 'EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN' }


	/** Settings specific to the Mediaocean Prisma tool. */
	export interface PrismaConfig {

		/** Google Payments Center supports searching and filtering on the component fields of this code. */
		prismaCpeCode?: PrismaCpeCode;

		/** Required. The Prisma type. */
		prismaType?: PrismaConfigPrismaType | null;

		/** Required. The entity allocated this budget (DSP, site, etc.). */
		supplier?: string | null;
	}

	/** Settings specific to the Mediaocean Prisma tool. */
	export interface PrismaConfigFormProperties {

		/** Required. The Prisma type. */
		prismaType: FormControl<PrismaConfigPrismaType | null | undefined>,

		/** Required. The entity allocated this budget (DSP, site, etc.). */
		supplier: FormControl<string | null | undefined>,
	}
	export function CreatePrismaConfigFormGroup() {
		return new FormGroup<PrismaConfigFormProperties>({
			prismaType: new FormControl<PrismaConfigPrismaType | null | undefined>(undefined),
			supplier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PrismaConfigPrismaType { PRISMA_TYPE_UNSPECIFIED = 'PRISMA_TYPE_UNSPECIFIED', PRISMA_TYPE_DISPLAY = 'PRISMA_TYPE_DISPLAY', PRISMA_TYPE_SEARCH = 'PRISMA_TYPE_SEARCH', PRISMA_TYPE_VIDEO = 'PRISMA_TYPE_VIDEO', PRISMA_TYPE_AUDIO = 'PRISMA_TYPE_AUDIO', PRISMA_TYPE_SOCIAL = 'PRISMA_TYPE_SOCIAL', PRISMA_TYPE_FEE = 'PRISMA_TYPE_FEE' }


	/** Settings that track the planned spend and duration of a campaign. */
	export interface CampaignFlight {

		/** A date range. */
		plannedDates?: DateRange;

		/** The amount the campaign is expected to spend for its given planned_dates. This will not limit serving, but will be used for tracking spend in the DV360 UI. The amount is in micros. Must be greater than or equal to 0. For example, 500000000 represents 500 standard units of the currency. */
		plannedSpendAmountMicros?: string | null;
	}

	/** Settings that track the planned spend and duration of a campaign. */
	export interface CampaignFlightFormProperties {

		/** The amount the campaign is expected to spend for its given planned_dates. This will not limit serving, but will be used for tracking spend in the DV360 UI. The amount is in micros. Must be greater than or equal to 0. For example, 500000000 represents 500 standard units of the currency. */
		plannedSpendAmountMicros: FormControl<string | null | undefined>,
	}
	export function CreateCampaignFlightFormGroup() {
		return new FormGroup<CampaignFlightFormProperties>({
			plannedSpendAmountMicros: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings that control the goal of a campaign. */
	export interface CampaignGoal {

		/** Required. The type of the campaign goal. */
		campaignGoalType?: CampaignGoalCampaignGoalType | null;

		/** Settings that control the performance goal of a campaign. */
		performanceGoal?: PerformanceGoal;
	}

	/** Settings that control the goal of a campaign. */
	export interface CampaignGoalFormProperties {

		/** Required. The type of the campaign goal. */
		campaignGoalType: FormControl<CampaignGoalCampaignGoalType | null | undefined>,
	}
	export function CreateCampaignGoalFormGroup() {
		return new FormGroup<CampaignGoalFormProperties>({
			campaignGoalType: new FormControl<CampaignGoalCampaignGoalType | null | undefined>(undefined),
		});

	}

	export enum CampaignGoalCampaignGoalType { CAMPAIGN_GOAL_TYPE_UNSPECIFIED = 'CAMPAIGN_GOAL_TYPE_UNSPECIFIED', CAMPAIGN_GOAL_TYPE_APP_INSTALL = 'CAMPAIGN_GOAL_TYPE_APP_INSTALL', CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS = 'CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS', CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION = 'CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION', CAMPAIGN_GOAL_TYPE_ONLINE_ACTION = 'CAMPAIGN_GOAL_TYPE_ONLINE_ACTION' }


	/** Settings that control the performance goal of a campaign. */
	export interface PerformanceGoal {

		/** The goal amount, in micros of the advertiser's currency. Applicable when performance_goal_type is one of: * `PERFORMANCE_GOAL_TYPE_CPM` * `PERFORMANCE_GOAL_TYPE_CPC` * `PERFORMANCE_GOAL_TYPE_CPA` * `PERFORMANCE_GOAL_TYPE_CPIAVC` * `PERFORMANCE_GOAL_TYPE_VCPM` For example 1500000 represents 1.5 standard units of the currency. */
		performanceGoalAmountMicros?: string | null;

		/** The decimal representation of the goal percentage in micros. Applicable when performance_goal_type is one of: * `PERFORMANCE_GOAL_TYPE_CTR` * `PERFORMANCE_GOAL_TYPE_VIEWABILITY` * `PERFORMANCE_GOAL_TYPE_CLICK_CVR` * `PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR` * `PERFORMANCE_GOAL_TYPE_VTR` * `PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE` * `PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE` For example, 70000 represents 7% (decimal 0.07). */
		performanceGoalPercentageMicros?: string | null;

		/** A key performance indicator (KPI) string, which can be empty. Must be UTF-8 encoded with a length of no more than 100 characters. Applicable when performance_goal_type is set to `PERFORMANCE_GOAL_TYPE_OTHER`. */
		performanceGoalString?: string | null;

		/** Required. The type of the performance goal. */
		performanceGoalType?: PerformanceGoalPerformanceGoalType | null;
	}

	/** Settings that control the performance goal of a campaign. */
	export interface PerformanceGoalFormProperties {

		/** The goal amount, in micros of the advertiser's currency. Applicable when performance_goal_type is one of: * `PERFORMANCE_GOAL_TYPE_CPM` * `PERFORMANCE_GOAL_TYPE_CPC` * `PERFORMANCE_GOAL_TYPE_CPA` * `PERFORMANCE_GOAL_TYPE_CPIAVC` * `PERFORMANCE_GOAL_TYPE_VCPM` For example 1500000 represents 1.5 standard units of the currency. */
		performanceGoalAmountMicros: FormControl<string | null | undefined>,

		/** The decimal representation of the goal percentage in micros. Applicable when performance_goal_type is one of: * `PERFORMANCE_GOAL_TYPE_CTR` * `PERFORMANCE_GOAL_TYPE_VIEWABILITY` * `PERFORMANCE_GOAL_TYPE_CLICK_CVR` * `PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR` * `PERFORMANCE_GOAL_TYPE_VTR` * `PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE` * `PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE` For example, 70000 represents 7% (decimal 0.07). */
		performanceGoalPercentageMicros: FormControl<string | null | undefined>,

		/** A key performance indicator (KPI) string, which can be empty. Must be UTF-8 encoded with a length of no more than 100 characters. Applicable when performance_goal_type is set to `PERFORMANCE_GOAL_TYPE_OTHER`. */
		performanceGoalString: FormControl<string | null | undefined>,

		/** Required. The type of the performance goal. */
		performanceGoalType: FormControl<PerformanceGoalPerformanceGoalType | null | undefined>,
	}
	export function CreatePerformanceGoalFormGroup() {
		return new FormGroup<PerformanceGoalFormProperties>({
			performanceGoalAmountMicros: new FormControl<string | null | undefined>(undefined),
			performanceGoalPercentageMicros: new FormControl<string | null | undefined>(undefined),
			performanceGoalString: new FormControl<string | null | undefined>(undefined),
			performanceGoalType: new FormControl<PerformanceGoalPerformanceGoalType | null | undefined>(undefined),
		});

	}

	export enum PerformanceGoalPerformanceGoalType { PERFORMANCE_GOAL_TYPE_UNSPECIFIED = 'PERFORMANCE_GOAL_TYPE_UNSPECIFIED', PERFORMANCE_GOAL_TYPE_CPM = 'PERFORMANCE_GOAL_TYPE_CPM', PERFORMANCE_GOAL_TYPE_CPC = 'PERFORMANCE_GOAL_TYPE_CPC', PERFORMANCE_GOAL_TYPE_CPA = 'PERFORMANCE_GOAL_TYPE_CPA', PERFORMANCE_GOAL_TYPE_CTR = 'PERFORMANCE_GOAL_TYPE_CTR', PERFORMANCE_GOAL_TYPE_VIEWABILITY = 'PERFORMANCE_GOAL_TYPE_VIEWABILITY', PERFORMANCE_GOAL_TYPE_CPIAVC = 'PERFORMANCE_GOAL_TYPE_CPIAVC', PERFORMANCE_GOAL_TYPE_CPE = 'PERFORMANCE_GOAL_TYPE_CPE', PERFORMANCE_GOAL_TYPE_CLICK_CVR = 'PERFORMANCE_GOAL_TYPE_CLICK_CVR', PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR = 'PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR', PERFORMANCE_GOAL_TYPE_VCPM = 'PERFORMANCE_GOAL_TYPE_VCPM', PERFORMANCE_GOAL_TYPE_VTR = 'PERFORMANCE_GOAL_TYPE_VTR', PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE = 'PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE', PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE = 'PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE', PERFORMANCE_GOAL_TYPE_OTHER = 'PERFORMANCE_GOAL_TYPE_OTHER' }


	/** Represents a targetable carrier or ISP. This will be populated in the carrier_and_isp_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`. */
	export interface CarrierAndIspTargetingOptionDetails {

		/** Output only. The display name of the carrier or ISP. */
		displayName?: string | null;

		/** Output only. The type indicating if it's carrier or ISP. */
		type?: CarrierAndIspTargetingOptionDetailsType | null;
	}

	/** Represents a targetable carrier or ISP. This will be populated in the carrier_and_isp_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`. */
	export interface CarrierAndIspTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the carrier or ISP. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The type indicating if it's carrier or ISP. */
		type: FormControl<CarrierAndIspTargetingOptionDetailsType | null | undefined>,
	}
	export function CreateCarrierAndIspTargetingOptionDetailsFormGroup() {
		return new FormGroup<CarrierAndIspTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CarrierAndIspTargetingOptionDetailsType | null | undefined>(undefined),
		});

	}

	export enum CarrierAndIspTargetingOptionDetailsType { CARRIER_AND_ISP_TYPE_UNSPECIFIED = 'CARRIER_AND_ISP_TYPE_UNSPECIFIED', CARRIER_AND_ISP_TYPE_ISP = 'CARRIER_AND_ISP_TYPE_ISP', CARRIER_AND_ISP_TYPE_CARRIER = 'CARRIER_AND_ISP_TYPE_CARRIER' }


	/** Represents a targetable category. This will be populated in the category_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CATEGORY`. */
	export interface CategoryTargetingOptionDetails {

		/** Output only. The display name of the category. */
		displayName?: string | null;
	}

	/** Represents a targetable category. This will be populated in the category_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CATEGORY`. */
	export interface CategoryTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the category. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateCategoryTargetingOptionDetailsFormGroup() {
		return new FormGroup<CategoryTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single channel. Channels are custom groups of related websites and apps. */
	export interface Channel {

		/** The ID of the advertiser that owns the channel. */
		advertiserId?: string | null;

		/** Output only. The unique ID of the channel. Assigned by the system. */
		channelId?: string | null;

		/** Required. The display name of the channel. Must be UTF-8 encoded with a maximum length of 240 bytes. */
		displayName?: string | null;

		/** Output only. The resource name of the channel. */
		name?: string | null;

		/** Output only. Number of line items that are directly targeting this channel negatively. */
		negativelyTargetedLineItemCount?: string | null;

		/** The ID of the partner that owns the channel. */
		partnerId?: string | null;

		/** Output only. Number of line items that are directly targeting this channel positively. */
		positivelyTargetedLineItemCount?: string | null;
	}

	/** A single channel. Channels are custom groups of related websites and apps. */
	export interface ChannelFormProperties {

		/** The ID of the advertiser that owns the channel. */
		advertiserId: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the channel. Assigned by the system. */
		channelId: FormControl<string | null | undefined>,

		/** Required. The display name of the channel. Must be UTF-8 encoded with a maximum length of 240 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The resource name of the channel. */
		name: FormControl<string | null | undefined>,

		/** Output only. Number of line items that are directly targeting this channel negatively. */
		negativelyTargetedLineItemCount: FormControl<string | null | undefined>,

		/** The ID of the partner that owns the channel. */
		partnerId: FormControl<string | null | undefined>,

		/** Output only. Number of line items that are directly targeting this channel positively. */
		positivelyTargetedLineItemCount: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			channelId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			negativelyTargetedLineItemCount: new FormControl<string | null | undefined>(undefined),
			partnerId: new FormControl<string | null | undefined>(undefined),
			positivelyTargetedLineItemCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Campaign Manager 360 tracking ad. */
	export interface CmTrackingAd {

		/** The ad ID of the campaign manager 360 tracking Ad. */
		cmAdId?: string | null;

		/** The creative ID of the campaign manager 360 tracking Ad. */
		cmCreativeId?: string | null;

		/** The placement ID of the campaign manager 360 tracking Ad. */
		cmPlacementId?: string | null;
	}

	/** A Campaign Manager 360 tracking ad. */
	export interface CmTrackingAdFormProperties {

		/** The ad ID of the campaign manager 360 tracking Ad. */
		cmAdId: FormControl<string | null | undefined>,

		/** The creative ID of the campaign manager 360 tracking Ad. */
		cmCreativeId: FormControl<string | null | undefined>,

		/** The placement ID of the campaign manager 360 tracking Ad. */
		cmPlacementId: FormControl<string | null | undefined>,
	}
	export function CreateCmTrackingAdFormGroup() {
		return new FormGroup<CmTrackingAdFormProperties>({
			cmAdId: new FormControl<string | null | undefined>(undefined),
			cmCreativeId: new FormControl<string | null | undefined>(undefined),
			cmPlacementId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a combined audience resource. */
	export interface CombinedAudience {

		/** Output only. The unique ID of the combined audience. Assigned by the system. */
		combinedAudienceId?: string | null;

		/** Output only. The display name of the combined audience. . */
		displayName?: string | null;

		/** Output only. The resource name of the combined audience. */
		name?: string | null;
	}

	/** Describes a combined audience resource. */
	export interface CombinedAudienceFormProperties {

		/** Output only. The unique ID of the combined audience. Assigned by the system. */
		combinedAudienceId: FormControl<string | null | undefined>,

		/** Output only. The display name of the combined audience. . */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The resource name of the combined audience. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCombinedAudienceFormGroup() {
		return new FormGroup<CombinedAudienceFormProperties>({
			combinedAudienceId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User consent status. */
	export interface Consent {

		/** Represents consent for ad personalization. */
		adPersonalization?: ConsentAdPersonalization | null;

		/** Represents consent for ad user data. */
		adUserData?: ConsentAdPersonalization | null;
	}

	/** User consent status. */
	export interface ConsentFormProperties {

		/** Represents consent for ad personalization. */
		adPersonalization: FormControl<ConsentAdPersonalization | null | undefined>,

		/** Represents consent for ad user data. */
		adUserData: FormControl<ConsentAdPersonalization | null | undefined>,
	}
	export function CreateConsentFormGroup() {
		return new FormGroup<ConsentFormProperties>({
			adPersonalization: new FormControl<ConsentAdPersonalization | null | undefined>(undefined),
			adUserData: new FormControl<ConsentAdPersonalization | null | undefined>(undefined),
		});

	}

	export enum ConsentAdPersonalization { CONSENT_STATUS_UNSPECIFIED = 'CONSENT_STATUS_UNSPECIFIED', CONSENT_STATUS_GRANTED = 'CONSENT_STATUS_GRANTED', CONSENT_STATUS_DENIED = 'CONSENT_STATUS_DENIED' }


	/** Contact information defining a Customer Match audience member. */
	export interface ContactInfo {

		/** Country code of the member. Must also be set with the following fields: * hashed_first_name * hashed_last_name * zip_codes */
		countryCode?: string | null;

		/** A list of SHA256 hashed email of the member. Before hashing, remove all whitespace and make sure the string is all lowercase. */
		hashedEmails?: Array<string>;

		/** SHA256 hashed first name of the member. Before hashing, remove all whitespace and make sure the string is all lowercase. Must also be set with the following fields: * country_code * hashed_last_name * zip_codes */
		hashedFirstName?: string | null;

		/** SHA256 hashed last name of the member. Before hashing, remove all whitespace and make sure the string is all lowercase. Must also be set with the following fields: * country_code * hashed_first_name * zip_codes */
		hashedLastName?: string | null;

		/** A list of SHA256 hashed phone numbers of the member. Before hashing, all phone numbers must be formatted using the [E.164 format](//en.wikipedia.org/wiki/E.164) and include the country calling code. */
		hashedPhoneNumbers?: Array<string>;

		/** A list of zip codes of the member. Must also be set with the following fields: * country_code * hashed_first_name * hashed_last_name */
		zipCodes?: Array<string>;
	}

	/** Contact information defining a Customer Match audience member. */
	export interface ContactInfoFormProperties {

		/** Country code of the member. Must also be set with the following fields: * hashed_first_name * hashed_last_name * zip_codes */
		countryCode: FormControl<string | null | undefined>,

		/** SHA256 hashed first name of the member. Before hashing, remove all whitespace and make sure the string is all lowercase. Must also be set with the following fields: * country_code * hashed_last_name * zip_codes */
		hashedFirstName: FormControl<string | null | undefined>,

		/** SHA256 hashed last name of the member. Before hashing, remove all whitespace and make sure the string is all lowercase. Must also be set with the following fields: * country_code * hashed_first_name * zip_codes */
		hashedLastName: FormControl<string | null | undefined>,
	}
	export function CreateContactInfoFormGroup() {
		return new FormGroup<ContactInfoFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			hashedFirstName: new FormControl<string | null | undefined>(undefined),
			hashedLastName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Wrapper message for a list of contact information defining Customer Match audience members. */
	export interface ContactInfoList {

		/** User consent status. */
		consent?: Consent;

		/** A list of ContactInfo objects defining Customer Match audience members. The size of members after splitting the contact_infos mustn't be greater than 500,000. */
		contactInfos?: Array<ContactInfo>;
	}

	/** Wrapper message for a list of contact information defining Customer Match audience members. */
	export interface ContactInfoListFormProperties {
	}
	export function CreateContactInfoListFormGroup() {
		return new FormGroup<ContactInfoListFormProperties>({
		});

	}


	/** Represents a targetable content duration. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. */
	export interface ContentDurationTargetingOptionDetails {

		/** Output only. The content duration. */
		contentDuration?: ContentDurationAssignedTargetingOptionDetailsContentDuration | null;
	}

	/** Represents a targetable content duration. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. */
	export interface ContentDurationTargetingOptionDetailsFormProperties {

		/** Output only. The content duration. */
		contentDuration: FormControl<ContentDurationAssignedTargetingOptionDetailsContentDuration | null | undefined>,
	}
	export function CreateContentDurationTargetingOptionDetailsFormGroup() {
		return new FormGroup<ContentDurationTargetingOptionDetailsFormProperties>({
			contentDuration: new FormControl<ContentDurationAssignedTargetingOptionDetailsContentDuration | null | undefined>(undefined),
		});

	}


	/** Represents a targetable content genre. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. */
	export interface ContentGenreTargetingOptionDetails {

		/** Output only. The display name of the content genre */
		displayName?: string | null;
	}

	/** Represents a targetable content genre. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. */
	export interface ContentGenreTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the content genre */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateContentGenreTargetingOptionDetailsFormGroup() {
		return new FormGroup<ContentGenreTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a targetable content instream position, which could be used by video and audio ads. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`. */
	export interface ContentInstreamPositionTargetingOptionDetails {

		/** Output only. The content instream position. */
		contentInstreamPosition?: ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPosition | null;
	}

	/** Represents a targetable content instream position, which could be used by video and audio ads. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`. */
	export interface ContentInstreamPositionTargetingOptionDetailsFormProperties {

		/** Output only. The content instream position. */
		contentInstreamPosition: FormControl<ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPosition | null | undefined>,
	}
	export function CreateContentInstreamPositionTargetingOptionDetailsFormGroup() {
		return new FormGroup<ContentInstreamPositionTargetingOptionDetailsFormProperties>({
			contentInstreamPosition: new FormControl<ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPosition | null | undefined>(undefined),
		});

	}


	/** Represents a targetable content outstream position, which could be used by display and video ads. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`. */
	export interface ContentOutstreamPositionTargetingOptionDetails {

		/** Output only. The content outstream position. */
		contentOutstreamPosition?: ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPosition | null;
	}

	/** Represents a targetable content outstream position, which could be used by display and video ads. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`. */
	export interface ContentOutstreamPositionTargetingOptionDetailsFormProperties {

		/** Output only. The content outstream position. */
		contentOutstreamPosition: FormControl<ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPosition | null | undefined>,
	}
	export function CreateContentOutstreamPositionTargetingOptionDetailsFormGroup() {
		return new FormGroup<ContentOutstreamPositionTargetingOptionDetailsFormProperties>({
			contentOutstreamPosition: new FormControl<ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPosition | null | undefined>(undefined),
		});

	}


	/** Represents a targetable content stream type. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. */
	export interface ContentStreamTypeTargetingOptionDetails {

		/** Output only. The content stream type. */
		contentStreamType?: ContentStreamTypeAssignedTargetingOptionDetailsContentStreamType | null;
	}

	/** Represents a targetable content stream type. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. */
	export interface ContentStreamTypeTargetingOptionDetailsFormProperties {

		/** Output only. The content stream type. */
		contentStreamType: FormControl<ContentStreamTypeAssignedTargetingOptionDetailsContentStreamType | null | undefined>,
	}
	export function CreateContentStreamTypeTargetingOptionDetailsFormGroup() {
		return new FormGroup<ContentStreamTypeTargetingOptionDetailsFormProperties>({
			contentStreamType: new FormControl<ContentStreamTypeAssignedTargetingOptionDetailsContentStreamType | null | undefined>(undefined),
		});

	}


	/** Counter event of the creative. */
	export interface CounterEvent {

		/** Required. The name of the counter event. */
		name?: string | null;

		/** Required. The name used to identify this counter event in reports. */
		reportingName?: string | null;
	}

	/** Counter event of the creative. */
	export interface CounterEventFormProperties {

		/** Required. The name of the counter event. */
		name: FormControl<string | null | undefined>,

		/** Required. The name used to identify this counter event in reports. */
		reportingName: FormControl<string | null | undefined>,
	}
	export function CreateCounterEventFormGroup() {
		return new FormGroup<CounterEventFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reportingName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request message for CreateAsset. */
	export interface CreateAssetRequest {

		/** Required. The filename of the asset, including the file extension. The filename must be UTF-8 encoded with a maximum size of 240 bytes. */
		filename?: string | null;
	}

	/** A request message for CreateAsset. */
	export interface CreateAssetRequestFormProperties {

		/** Required. The filename of the asset, including the file extension. The filename must be UTF-8 encoded with a maximum size of 240 bytes. */
		filename: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssetRequestFormGroup() {
		return new FormGroup<CreateAssetRequestFormProperties>({
			filename: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response message for CreateAsset. */
	export interface CreateAssetResponse {

		/** A single asset. */
		asset?: Asset;
	}

	/** A response message for CreateAsset. */
	export interface CreateAssetResponseFormProperties {
	}
	export function CreateCreateAssetResponseFormGroup() {
		return new FormGroup<CreateAssetResponseFormProperties>({
		});

	}


	/** Request message for [SdfDownloadTaskService.CreateSdfDownloadTask]. */
	export interface CreateSdfDownloadTaskRequest {

		/** The ID of the advertiser to download SDF for. */
		advertiserId?: string | null;

		/** A filtering option that filters entities by their entity IDs. */
		idFilter?: IdFilter;

		/** A filtering option for filtering on Inventory Source entities. */
		inventorySourceFilter?: InventorySourceFilter;

		/** A filtering option that filters on selected file types belonging to a chosen set of filter entities. */
		parentEntityFilter?: ParentEntityFilter;

		/** The ID of the partner to download SDF for. */
		partnerId?: string | null;

		/** Required. The SDF version of the downloaded file. If set to `SDF_VERSION_UNSPECIFIED`, this will default to the version specified by the advertiser or partner identified by `root_id`. An advertiser inherits its SDF version from its partner unless configured otherwise. */
		version?: SdfConfigVersion | null;
	}

	/** Request message for [SdfDownloadTaskService.CreateSdfDownloadTask]. */
	export interface CreateSdfDownloadTaskRequestFormProperties {

		/** The ID of the advertiser to download SDF for. */
		advertiserId: FormControl<string | null | undefined>,

		/** The ID of the partner to download SDF for. */
		partnerId: FormControl<string | null | undefined>,

		/** Required. The SDF version of the downloaded file. If set to `SDF_VERSION_UNSPECIFIED`, this will default to the version specified by the advertiser or partner identified by `root_id`. An advertiser inherits its SDF version from its partner unless configured otherwise. */
		version: FormControl<SdfConfigVersion | null | undefined>,
	}
	export function CreateCreateSdfDownloadTaskRequestFormGroup() {
		return new FormGroup<CreateSdfDownloadTaskRequestFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			partnerId: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<SdfConfigVersion | null | undefined>(undefined),
		});

	}


	/** A filtering option that filters entities by their entity IDs. */
	export interface IdFilter {

		/** YouTube Ads to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. */
		adGroupAdIds?: Array<string>;

		/** YouTube Ad Groups to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. */
		adGroupIds?: Array<string>;

		/** Campaigns to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. */
		campaignIds?: Array<string>;

		/** Insertion Orders to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. */
		insertionOrderIds?: Array<string>;

		/** Line Items to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. */
		lineItemIds?: Array<string>;

		/** Media Products to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. */
		mediaProductIds?: Array<string>;
	}

	/** A filtering option that filters entities by their entity IDs. */
	export interface IdFilterFormProperties {
	}
	export function CreateIdFilterFormGroup() {
		return new FormGroup<IdFilterFormProperties>({
		});

	}


	/** A filtering option for filtering on Inventory Source entities. */
	export interface InventorySourceFilter {

		/** Inventory Sources to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. Leave empty to download all Inventory Sources for the selected Advertiser or Partner. */
		inventorySourceIds?: Array<string>;
	}

	/** A filtering option for filtering on Inventory Source entities. */
	export interface InventorySourceFilterFormProperties {
	}
	export function CreateInventorySourceFilterFormGroup() {
		return new FormGroup<InventorySourceFilterFormProperties>({
		});

	}


	/** A filtering option that filters on selected file types belonging to a chosen set of filter entities. */
	export interface ParentEntityFilter {

		/** Required. File types that will be returned. */
		fileType?: Array<string>;

		/** The IDs of the specified filter type. This is used to filter entities to fetch. If filter type is not `FILTER_TYPE_NONE`, at least one ID must be specified. */
		filterIds?: Array<string>;

		/** Required. Filter type used to filter fetched entities. */
		filterType?: ParentEntityFilterFilterType | null;
	}

	/** A filtering option that filters on selected file types belonging to a chosen set of filter entities. */
	export interface ParentEntityFilterFormProperties {

		/** Required. Filter type used to filter fetched entities. */
		filterType: FormControl<ParentEntityFilterFilterType | null | undefined>,
	}
	export function CreateParentEntityFilterFormGroup() {
		return new FormGroup<ParentEntityFilterFormProperties>({
			filterType: new FormControl<ParentEntityFilterFilterType | null | undefined>(undefined),
		});

	}

	export enum ParentEntityFilterFilterType { FILTER_TYPE_UNSPECIFIED = 'FILTER_TYPE_UNSPECIFIED', FILTER_TYPE_NONE = 'FILTER_TYPE_NONE', FILTER_TYPE_ADVERTISER_ID = 'FILTER_TYPE_ADVERTISER_ID', FILTER_TYPE_CAMPAIGN_ID = 'FILTER_TYPE_CAMPAIGN_ID', FILTER_TYPE_MEDIA_PRODUCT_ID = 'FILTER_TYPE_MEDIA_PRODUCT_ID', FILTER_TYPE_INSERTION_ORDER_ID = 'FILTER_TYPE_INSERTION_ORDER_ID', FILTER_TYPE_LINE_ITEM_ID = 'FILTER_TYPE_LINE_ITEM_ID' }


	/** A single Creative. */
	export interface Creative {

		/** Additional dimensions. Applicable when creative_type is one of: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_LIGHTBOX` * `CREATIVE_TYPE_PUBLISHER_HOSTED` If this field is specified, width_pixels and height_pixels are both required and must be greater than or equal to 0. */
		additionalDimensions?: Array<Dimensions>;

		/** Output only. The unique ID of the advertiser the creative belongs to. */
		advertiserId?: string | null;

		/** Third-party HTML tracking tag to be appended to the creative tag. */
		appendedTag?: string | null;

		/** Required. Assets associated to this creative. */
		assets?: Array<AssetAssociation>;

		/** Output only. The unique ID of the Campaign Manager 360 placement associated with the creative. This field is only applicable for creatives that are synced from Campaign Manager. */
		cmPlacementId?: string | null;

		/** A Campaign Manager 360 tracking ad. */
		cmTrackingAd?: CmTrackingAd;

		/** The IDs of companion creatives for a video creative. You can assign existing display creatives (with image or HTML5 assets) to serve surrounding the publisher's video player. Companions display around the video player while the video is playing and remain after the video has completed. Creatives contain additional dimensions can not be companion creatives. This field is only supported for following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO` */
		companionCreativeIds?: Array<string>;

		/** Counter events for a rich media creative. Counters track the number of times that a user interacts with any part of a rich media creative in a specified way (mouse-overs, mouse-outs, clicks, taps, data loading, keyboard entries, etc.). Any event that can be captured in the creative can be recorded as a counter. Leave it empty or unset for creatives containing image assets only. */
		counterEvents?: Array<CounterEvent>;

		/** Output only. The timestamp when the creative was created. Assigned by the system. */
		createTime?: string | null;

		/** Output only. A list of attributes of the creative that is generated by the system. */
		creativeAttributes?: Array<string>;

		/** Output only. The unique ID of the creative. Assigned by the system. */
		creativeId?: string | null;

		/** Required. Immutable. The type of the creative. */
		creativeType?: CreativeCreativeType | null;

		/** Dimensions. */
		dimensions?: Dimensions;

		/** Required. The display name of the creative. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName?: string | null;

		/** Output only. Indicates whether the creative is dynamic. */
		dynamic?: boolean | null;

		/** Required. Controls whether or not the creative can serve. Accepted values are: * `ENTITY_STATUS_ACTIVE` * `ENTITY_STATUS_ARCHIVED` * `ENTITY_STATUS_PAUSED` */
		entityStatus?: AdGroupEntityStatus | null;

		/** Required. Exit events for this creative. An exit (also known as a click tag) is any area in your creative that someone can click or tap to open an advertiser's landing page. Every creative must include at least one exit. You can add an exit to your creative in any of the following ways: * Use Google Web Designer's tap area. * Define a JavaScript variable called "clickTag". * Use the Enabler (Enabler.exit()) to track exits in rich media formats. */
		exitEvents?: Array<ExitEvent>;

		/** Optional. Indicates the creative will automatically expand on hover. Optional and only valid for third-party expandable creatives. Third-party expandable creatives are creatives with following hosting source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_EXPANDABLE` */
		expandOnHover?: boolean | null;

		/** Optional. Specifies the expanding direction of the creative. Required and only valid for third-party expandable creatives. Third-party expandable creatives are creatives with following hosting source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_EXPANDABLE` */
		expandingDirection?: CreativeExpandingDirection | null;

		/** Required. Indicates where the creative is hosted. */
		hostingSource?: CreativeHostingSource | null;

		/** Output only. Indicates the third-party VAST tag creative requires HTML5 Video support. Output only and only valid for third-party VAST tag creatives. Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_VIDEO` */
		html5Video?: boolean | null;

		/** Indicates whether Integral Ad Science (IAS) campaign monitoring is enabled. To enable this for the creative, make sure the Advertiser.creative_config.ias_client_id has been set to your IAS client ID. */
		iasCampaignMonitoring?: boolean | null;

		/** ID information used to link this creative to an external system. Must be UTF-8 encoded with a length of no more than 10,000 characters. */
		integrationCode?: string | null;

		/** JavaScript measurement URL from supported third-party verification providers (ComScore, DoubleVerify, IAS, Moat). HTML script tags are not supported. This field is only writeable in following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO` */
		jsTrackerUrl?: string | null;

		/** Output only. The IDs of the line items this creative is associated with. To associate a creative to a line item, use LineItem.creative_ids instead. */
		lineItemIds?: Array<string>;

		/** Output only. Media duration of the creative. Applicable when creative_type is one of: * `CREATIVE_TYPE_VIDEO` * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_NATIVE_VIDEO` * `CREATIVE_TYPE_PUBLISHER_HOSTED` */
		mediaDuration?: string | null;

		/** Output only. Indicates the third-party audio creative supports MP3. Output only and only valid for third-party audio creatives. Third-party audio creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` */
		mp3Audio?: boolean | null;

		/** Output only. The resource name of the creative. */
		name?: string | null;

		/** User notes for this creative. Must be UTF-8 encoded with a length of no more than 20,000 characters. */
		notes?: string | null;

		/** OBA Icon for a Creative */
		obaIcon?: ObaIcon;

		/** Output only. Indicates the third-party audio creative supports OGG. Output only and only valid for third-party audio creatives. Third-party audio creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` */
		oggAudio?: boolean | null;

		/** The length an audio or a video has been played. */
		progressOffset?: AudioVideoOffset;

		/** Optional. Indicates that the creative relies on HTML5 to render properly. Optional and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` */
		requireHtml5?: boolean | null;

		/** Optional. Indicates that the creative requires MRAID (Mobile Rich Media Ad Interface Definitions system). Set this if the creative relies on mobile gestures for interactivity, such as swiping or tapping. Optional and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` */
		requireMraid?: boolean | null;

		/** Optional. Indicates that the creative will wait for a return ping for attribution. Only valid when using a Campaign Manager 360 tracking ad with a third-party ad server parameter and the ${DC_DBM_TOKEN} macro. Optional and only valid for third-party tag creatives or third-party VAST tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO` */
		requirePingForAttribution?: boolean | null;

		/** Review statuses for the creative. */
		reviewStatus?: ReviewStatusInfo;

		/** The length an audio or a video has been played. */
		skipOffset?: AudioVideoOffset;

		/** Whether the user can choose to skip a video creative. This field is only supported for the following creative_type: * `CREATIVE_TYPE_VIDEO` */
		skippable?: boolean | null;

		/** Optional. The original third-party tag used for the creative. Required and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` */
		thirdPartyTag?: string | null;

		/** Tracking URLs from third parties to track interactions with a video creative. This field is only supported for the following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO` * `CREATIVE_TYPE_NATIVE_VIDEO` */
		thirdPartyUrls?: Array<ThirdPartyUrl>;

		/** Timer custom events for a rich media creative. Timers track the time during which a user views and interacts with a specified part of a rich media creative. A creative can have multiple timer events, each timed independently. Leave it empty or unset for creatives containing image assets only. */
		timerEvents?: Array<TimerEvent>;

		/** Tracking URLs for analytics providers or third-party ad technology vendors. The URLs must start with https (except on inventory that doesn't require SSL compliance). If using macros in your URL, use only macros supported by Display & Video 360. Standard URLs only, no IMG or SCRIPT tags. This field is only writeable in following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO` */
		trackerUrls?: Array<string>;

		/** Output only. Audio/Video transcodes. Display & Video 360 transcodes the main asset into a number of alternative versions that use different file formats or have different properties (resolution, audio bit rate, and video bit rate), each designed for specific video players or bandwidths. These transcodes give a publisher's system more options to choose from for each impression on your video and ensures that the appropriate file serves based on the viewer’s connection and screen size. This field is only supported in following creative_type: * `CREATIVE_TYPE_VIDEO` * `CREATIVE_TYPE_NATIVE_VIDEO` * `CREATIVE_TYPE_AUDIO` */
		transcodes?: Array<Transcode>;

		/** A creative identifier provided by a registry that is unique across all platforms. This is part of the VAST 4.0 standard. */
		universalAdId?: UniversalAdId;

		/** Output only. The timestamp when the creative was last updated, either by the user or system (e.g. creative review). Assigned by the system. */
		updateTime?: string | null;

		/** Optional. The URL of the VAST tag for a third-party VAST tag creative. Required and only valid for third-party VAST tag creatives. Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO` */
		vastTagUrl?: string | null;

		/** Output only. Indicates the third-party VAST tag creative requires VPAID (Digital Video Player-Ad Interface). Output only and only valid for third-party VAST tag creatives. Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_VIDEO` */
		vpaid?: boolean | null;
	}

	/** A single Creative. */
	export interface CreativeFormProperties {

		/** Output only. The unique ID of the advertiser the creative belongs to. */
		advertiserId: FormControl<string | null | undefined>,

		/** Third-party HTML tracking tag to be appended to the creative tag. */
		appendedTag: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the Campaign Manager 360 placement associated with the creative. This field is only applicable for creatives that are synced from Campaign Manager. */
		cmPlacementId: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the creative was created. Assigned by the system. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the creative. Assigned by the system. */
		creativeId: FormControl<string | null | undefined>,

		/** Required. Immutable. The type of the creative. */
		creativeType: FormControl<CreativeCreativeType | null | undefined>,

		/** Required. The display name of the creative. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Indicates whether the creative is dynamic. */
		dynamic: FormControl<boolean | null | undefined>,

		/** Required. Controls whether or not the creative can serve. Accepted values are: * `ENTITY_STATUS_ACTIVE` * `ENTITY_STATUS_ARCHIVED` * `ENTITY_STATUS_PAUSED` */
		entityStatus: FormControl<AdGroupEntityStatus | null | undefined>,

		/** Optional. Indicates the creative will automatically expand on hover. Optional and only valid for third-party expandable creatives. Third-party expandable creatives are creatives with following hosting source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_EXPANDABLE` */
		expandOnHover: FormControl<boolean | null | undefined>,

		/** Optional. Specifies the expanding direction of the creative. Required and only valid for third-party expandable creatives. Third-party expandable creatives are creatives with following hosting source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_EXPANDABLE` */
		expandingDirection: FormControl<CreativeExpandingDirection | null | undefined>,

		/** Required. Indicates where the creative is hosted. */
		hostingSource: FormControl<CreativeHostingSource | null | undefined>,

		/** Output only. Indicates the third-party VAST tag creative requires HTML5 Video support. Output only and only valid for third-party VAST tag creatives. Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_VIDEO` */
		html5Video: FormControl<boolean | null | undefined>,

		/** Indicates whether Integral Ad Science (IAS) campaign monitoring is enabled. To enable this for the creative, make sure the Advertiser.creative_config.ias_client_id has been set to your IAS client ID. */
		iasCampaignMonitoring: FormControl<boolean | null | undefined>,

		/** ID information used to link this creative to an external system. Must be UTF-8 encoded with a length of no more than 10,000 characters. */
		integrationCode: FormControl<string | null | undefined>,

		/** JavaScript measurement URL from supported third-party verification providers (ComScore, DoubleVerify, IAS, Moat). HTML script tags are not supported. This field is only writeable in following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO` */
		jsTrackerUrl: FormControl<string | null | undefined>,

		/** Output only. Media duration of the creative. Applicable when creative_type is one of: * `CREATIVE_TYPE_VIDEO` * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_NATIVE_VIDEO` * `CREATIVE_TYPE_PUBLISHER_HOSTED` */
		mediaDuration: FormControl<string | null | undefined>,

		/** Output only. Indicates the third-party audio creative supports MP3. Output only and only valid for third-party audio creatives. Third-party audio creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` */
		mp3Audio: FormControl<boolean | null | undefined>,

		/** Output only. The resource name of the creative. */
		name: FormControl<string | null | undefined>,

		/** User notes for this creative. Must be UTF-8 encoded with a length of no more than 20,000 characters. */
		notes: FormControl<string | null | undefined>,

		/** Output only. Indicates the third-party audio creative supports OGG. Output only and only valid for third-party audio creatives. Third-party audio creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` */
		oggAudio: FormControl<boolean | null | undefined>,

		/** Optional. Indicates that the creative relies on HTML5 to render properly. Optional and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` */
		requireHtml5: FormControl<boolean | null | undefined>,

		/** Optional. Indicates that the creative requires MRAID (Mobile Rich Media Ad Interface Definitions system). Set this if the creative relies on mobile gestures for interactivity, such as swiping or tapping. Optional and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` */
		requireMraid: FormControl<boolean | null | undefined>,

		/** Optional. Indicates that the creative will wait for a return ping for attribution. Only valid when using a Campaign Manager 360 tracking ad with a third-party ad server parameter and the ${DC_DBM_TOKEN} macro. Optional and only valid for third-party tag creatives or third-party VAST tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO` */
		requirePingForAttribution: FormControl<boolean | null | undefined>,

		/** Whether the user can choose to skip a video creative. This field is only supported for the following creative_type: * `CREATIVE_TYPE_VIDEO` */
		skippable: FormControl<boolean | null | undefined>,

		/** Optional. The original third-party tag used for the creative. Required and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` */
		thirdPartyTag: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the creative was last updated, either by the user or system (e.g. creative review). Assigned by the system. */
		updateTime: FormControl<string | null | undefined>,

		/** Optional. The URL of the VAST tag for a third-party VAST tag creative. Required and only valid for third-party VAST tag creatives. Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO` */
		vastTagUrl: FormControl<string | null | undefined>,

		/** Output only. Indicates the third-party VAST tag creative requires VPAID (Digital Video Player-Ad Interface). Output only and only valid for third-party VAST tag creatives. Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_VIDEO` */
		vpaid: FormControl<boolean | null | undefined>,
	}
	export function CreateCreativeFormGroup() {
		return new FormGroup<CreativeFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			appendedTag: new FormControl<string | null | undefined>(undefined),
			cmPlacementId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			creativeId: new FormControl<string | null | undefined>(undefined),
			creativeType: new FormControl<CreativeCreativeType | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			dynamic: new FormControl<boolean | null | undefined>(undefined),
			entityStatus: new FormControl<AdGroupEntityStatus | null | undefined>(undefined),
			expandOnHover: new FormControl<boolean | null | undefined>(undefined),
			expandingDirection: new FormControl<CreativeExpandingDirection | null | undefined>(undefined),
			hostingSource: new FormControl<CreativeHostingSource | null | undefined>(undefined),
			html5Video: new FormControl<boolean | null | undefined>(undefined),
			iasCampaignMonitoring: new FormControl<boolean | null | undefined>(undefined),
			integrationCode: new FormControl<string | null | undefined>(undefined),
			jsTrackerUrl: new FormControl<string | null | undefined>(undefined),
			mediaDuration: new FormControl<string | null | undefined>(undefined),
			mp3Audio: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			oggAudio: new FormControl<boolean | null | undefined>(undefined),
			requireHtml5: new FormControl<boolean | null | undefined>(undefined),
			requireMraid: new FormControl<boolean | null | undefined>(undefined),
			requirePingForAttribution: new FormControl<boolean | null | undefined>(undefined),
			skippable: new FormControl<boolean | null | undefined>(undefined),
			thirdPartyTag: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			vastTagUrl: new FormControl<string | null | undefined>(undefined),
			vpaid: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CreativeCreativeType { CREATIVE_TYPE_UNSPECIFIED = 'CREATIVE_TYPE_UNSPECIFIED', CREATIVE_TYPE_STANDARD = 'CREATIVE_TYPE_STANDARD', CREATIVE_TYPE_EXPANDABLE = 'CREATIVE_TYPE_EXPANDABLE', CREATIVE_TYPE_VIDEO = 'CREATIVE_TYPE_VIDEO', CREATIVE_TYPE_NATIVE = 'CREATIVE_TYPE_NATIVE', CREATIVE_TYPE_TEMPLATED_APP_INSTALL = 'CREATIVE_TYPE_TEMPLATED_APP_INSTALL', CREATIVE_TYPE_NATIVE_SITE_SQUARE = 'CREATIVE_TYPE_NATIVE_SITE_SQUARE', CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL = 'CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL', CREATIVE_TYPE_LIGHTBOX = 'CREATIVE_TYPE_LIGHTBOX', CREATIVE_TYPE_NATIVE_APP_INSTALL = 'CREATIVE_TYPE_NATIVE_APP_INSTALL', CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE = 'CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE', CREATIVE_TYPE_AUDIO = 'CREATIVE_TYPE_AUDIO', CREATIVE_TYPE_PUBLISHER_HOSTED = 'CREATIVE_TYPE_PUBLISHER_HOSTED', CREATIVE_TYPE_NATIVE_VIDEO = 'CREATIVE_TYPE_NATIVE_VIDEO', CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO = 'CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO' }


	/** Exit event of the creative. */
	export interface ExitEvent {

		/** The name of the click tag of the exit event. The name must be unique within one creative. Leave it empty or unset for creatives containing image assets only. */
		name?: string | null;

		/** The name used to identify this event in reports. Leave it empty or unset for creatives containing image assets only. */
		reportingName?: string | null;

		/** Required. The type of the exit event. */
		type?: ExitEventType | null;

		/** Required. The click through URL of the exit event. This is required when type is: * `EXIT_EVENT_TYPE_DEFAULT` * `EXIT_EVENT_TYPE_BACKUP` */
		url?: string | null;
	}

	/** Exit event of the creative. */
	export interface ExitEventFormProperties {

		/** The name of the click tag of the exit event. The name must be unique within one creative. Leave it empty or unset for creatives containing image assets only. */
		name: FormControl<string | null | undefined>,

		/** The name used to identify this event in reports. Leave it empty or unset for creatives containing image assets only. */
		reportingName: FormControl<string | null | undefined>,

		/** Required. The type of the exit event. */
		type: FormControl<ExitEventType | null | undefined>,

		/** Required. The click through URL of the exit event. This is required when type is: * `EXIT_EVENT_TYPE_DEFAULT` * `EXIT_EVENT_TYPE_BACKUP` */
		url: FormControl<string | null | undefined>,
	}
	export function CreateExitEventFormGroup() {
		return new FormGroup<ExitEventFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reportingName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ExitEventType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExitEventType { EXIT_EVENT_TYPE_UNSPECIFIED = 'EXIT_EVENT_TYPE_UNSPECIFIED', EXIT_EVENT_TYPE_DEFAULT = 'EXIT_EVENT_TYPE_DEFAULT', EXIT_EVENT_TYPE_BACKUP = 'EXIT_EVENT_TYPE_BACKUP' }

	export enum CreativeExpandingDirection { EXPANDING_DIRECTION_UNSPECIFIED = 'EXPANDING_DIRECTION_UNSPECIFIED', EXPANDING_DIRECTION_NONE = 'EXPANDING_DIRECTION_NONE', EXPANDING_DIRECTION_UP = 'EXPANDING_DIRECTION_UP', EXPANDING_DIRECTION_DOWN = 'EXPANDING_DIRECTION_DOWN', EXPANDING_DIRECTION_LEFT = 'EXPANDING_DIRECTION_LEFT', EXPANDING_DIRECTION_RIGHT = 'EXPANDING_DIRECTION_RIGHT', EXPANDING_DIRECTION_UP_AND_LEFT = 'EXPANDING_DIRECTION_UP_AND_LEFT', EXPANDING_DIRECTION_UP_AND_RIGHT = 'EXPANDING_DIRECTION_UP_AND_RIGHT', EXPANDING_DIRECTION_DOWN_AND_LEFT = 'EXPANDING_DIRECTION_DOWN_AND_LEFT', EXPANDING_DIRECTION_DOWN_AND_RIGHT = 'EXPANDING_DIRECTION_DOWN_AND_RIGHT', EXPANDING_DIRECTION_UP_OR_DOWN = 'EXPANDING_DIRECTION_UP_OR_DOWN', EXPANDING_DIRECTION_LEFT_OR_RIGHT = 'EXPANDING_DIRECTION_LEFT_OR_RIGHT', EXPANDING_DIRECTION_ANY_DIAGONAL = 'EXPANDING_DIRECTION_ANY_DIAGONAL' }

	export enum CreativeHostingSource { HOSTING_SOURCE_UNSPECIFIED = 'HOSTING_SOURCE_UNSPECIFIED', HOSTING_SOURCE_CM = 'HOSTING_SOURCE_CM', HOSTING_SOURCE_THIRD_PARTY = 'HOSTING_SOURCE_THIRD_PARTY', HOSTING_SOURCE_HOSTED = 'HOSTING_SOURCE_HOSTED', HOSTING_SOURCE_RICH_MEDIA = 'HOSTING_SOURCE_RICH_MEDIA' }


	/** OBA Icon for a Creative */
	export interface ObaIcon {

		/** Required. The click tracking URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com */
		clickTrackingUrl?: string | null;

		/** Dimensions. */
		dimensions?: Dimensions;

		/** Required. The landing page URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com */
		landingPageUrl?: string | null;

		/** The position of the OBA icon on the creative. */
		position?: ObaIconPosition | null;

		/** The program of the OBA icon. For example: “AdChoices”. */
		program?: string | null;

		/** The MIME type of the OBA icon resource. */
		resourceMimeType?: string | null;

		/** The URL of the OBA icon resource. */
		resourceUrl?: string | null;

		/** Required. The view tracking URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com */
		viewTrackingUrl?: string | null;
	}

	/** OBA Icon for a Creative */
	export interface ObaIconFormProperties {

		/** Required. The click tracking URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com */
		clickTrackingUrl: FormControl<string | null | undefined>,

		/** Required. The landing page URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com */
		landingPageUrl: FormControl<string | null | undefined>,

		/** The position of the OBA icon on the creative. */
		position: FormControl<ObaIconPosition | null | undefined>,

		/** The program of the OBA icon. For example: “AdChoices”. */
		program: FormControl<string | null | undefined>,

		/** The MIME type of the OBA icon resource. */
		resourceMimeType: FormControl<string | null | undefined>,

		/** The URL of the OBA icon resource. */
		resourceUrl: FormControl<string | null | undefined>,

		/** Required. The view tracking URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com */
		viewTrackingUrl: FormControl<string | null | undefined>,
	}
	export function CreateObaIconFormGroup() {
		return new FormGroup<ObaIconFormProperties>({
			clickTrackingUrl: new FormControl<string | null | undefined>(undefined),
			landingPageUrl: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<ObaIconPosition | null | undefined>(undefined),
			program: new FormControl<string | null | undefined>(undefined),
			resourceMimeType: new FormControl<string | null | undefined>(undefined),
			resourceUrl: new FormControl<string | null | undefined>(undefined),
			viewTrackingUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ObaIconPosition { OBA_ICON_POSITION_UNSPECIFIED = 'OBA_ICON_POSITION_UNSPECIFIED', OBA_ICON_POSITION_UPPER_RIGHT = 'OBA_ICON_POSITION_UPPER_RIGHT', OBA_ICON_POSITION_UPPER_LEFT = 'OBA_ICON_POSITION_UPPER_LEFT', OBA_ICON_POSITION_LOWER_RIGHT = 'OBA_ICON_POSITION_LOWER_RIGHT', OBA_ICON_POSITION_LOWER_LEFT = 'OBA_ICON_POSITION_LOWER_LEFT' }


	/** Review statuses for the creative. */
	export interface ReviewStatusInfo {

		/** Represents the basic approval needed for a creative to begin serving. Summary of creative_and_landing_page_review_status and content_and_policy_review_status. */
		approvalStatus?: ReviewStatusInfoApprovalStatus | null;

		/** Content and policy review status for the creative. */
		contentAndPolicyReviewStatus?: ReviewStatusInfoContentAndPolicyReviewStatus | null;

		/** Creative and landing page review status for the creative. */
		creativeAndLandingPageReviewStatus?: ReviewStatusInfoContentAndPolicyReviewStatus | null;

		/** Exchange review statuses for the creative. */
		exchangeReviewStatuses?: Array<ExchangeReviewStatus>;

		/** Publisher review statuses for the creative. */
		publisherReviewStatuses?: Array<PublisherReviewStatus>;
	}

	/** Review statuses for the creative. */
	export interface ReviewStatusInfoFormProperties {

		/** Represents the basic approval needed for a creative to begin serving. Summary of creative_and_landing_page_review_status and content_and_policy_review_status. */
		approvalStatus: FormControl<ReviewStatusInfoApprovalStatus | null | undefined>,

		/** Content and policy review status for the creative. */
		contentAndPolicyReviewStatus: FormControl<ReviewStatusInfoContentAndPolicyReviewStatus | null | undefined>,

		/** Creative and landing page review status for the creative. */
		creativeAndLandingPageReviewStatus: FormControl<ReviewStatusInfoContentAndPolicyReviewStatus | null | undefined>,
	}
	export function CreateReviewStatusInfoFormGroup() {
		return new FormGroup<ReviewStatusInfoFormProperties>({
			approvalStatus: new FormControl<ReviewStatusInfoApprovalStatus | null | undefined>(undefined),
			contentAndPolicyReviewStatus: new FormControl<ReviewStatusInfoContentAndPolicyReviewStatus | null | undefined>(undefined),
			creativeAndLandingPageReviewStatus: new FormControl<ReviewStatusInfoContentAndPolicyReviewStatus | null | undefined>(undefined),
		});

	}

	export enum ReviewStatusInfoApprovalStatus { APPROVAL_STATUS_UNSPECIFIED = 'APPROVAL_STATUS_UNSPECIFIED', APPROVAL_STATUS_PENDING_NOT_SERVABLE = 'APPROVAL_STATUS_PENDING_NOT_SERVABLE', APPROVAL_STATUS_PENDING_SERVABLE = 'APPROVAL_STATUS_PENDING_SERVABLE', APPROVAL_STATUS_APPROVED_SERVABLE = 'APPROVAL_STATUS_APPROVED_SERVABLE', APPROVAL_STATUS_REJECTED_NOT_SERVABLE = 'APPROVAL_STATUS_REJECTED_NOT_SERVABLE' }

	export enum ReviewStatusInfoContentAndPolicyReviewStatus { REVIEW_STATUS_UNSPECIFIED = 'REVIEW_STATUS_UNSPECIFIED', REVIEW_STATUS_APPROVED = 'REVIEW_STATUS_APPROVED', REVIEW_STATUS_REJECTED = 'REVIEW_STATUS_REJECTED', REVIEW_STATUS_PENDING = 'REVIEW_STATUS_PENDING' }


	/** Exchange review status for the creative. */
	export interface ExchangeReviewStatus {

		/** The exchange reviewing the creative. */
		exchange?: ExchangeAssignedTargetingOptionDetailsExchange | null;

		/** Status of the exchange review. */
		status?: ReviewStatusInfoContentAndPolicyReviewStatus | null;
	}

	/** Exchange review status for the creative. */
	export interface ExchangeReviewStatusFormProperties {

		/** The exchange reviewing the creative. */
		exchange: FormControl<ExchangeAssignedTargetingOptionDetailsExchange | null | undefined>,

		/** Status of the exchange review. */
		status: FormControl<ReviewStatusInfoContentAndPolicyReviewStatus | null | undefined>,
	}
	export function CreateExchangeReviewStatusFormGroup() {
		return new FormGroup<ExchangeReviewStatusFormProperties>({
			exchange: new FormControl<ExchangeAssignedTargetingOptionDetailsExchange | null | undefined>(undefined),
			status: new FormControl<ReviewStatusInfoContentAndPolicyReviewStatus | null | undefined>(undefined),
		});

	}


	/** Publisher review status for the creative. */
	export interface PublisherReviewStatus {

		/** The publisher reviewing the creative. */
		publisherName?: string | null;

		/** Status of the publisher review. */
		status?: ReviewStatusInfoContentAndPolicyReviewStatus | null;
	}

	/** Publisher review status for the creative. */
	export interface PublisherReviewStatusFormProperties {

		/** The publisher reviewing the creative. */
		publisherName: FormControl<string | null | undefined>,

		/** Status of the publisher review. */
		status: FormControl<ReviewStatusInfoContentAndPolicyReviewStatus | null | undefined>,
	}
	export function CreatePublisherReviewStatusFormGroup() {
		return new FormGroup<PublisherReviewStatusFormProperties>({
			publisherName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReviewStatusInfoContentAndPolicyReviewStatus | null | undefined>(undefined),
		});

	}


	/** Tracking URLs from third parties to track interactions with an audio or a video creative. */
	export interface ThirdPartyUrl {

		/** The type of interaction needs to be tracked by the tracking URL */
		type?: ThirdPartyUrlType | null;

		/** Tracking URL used to track the interaction. Provide a URL with optional path or query string, beginning with `https:`. For example, https://www.example.com/path */
		url?: string | null;
	}

	/** Tracking URLs from third parties to track interactions with an audio or a video creative. */
	export interface ThirdPartyUrlFormProperties {

		/** The type of interaction needs to be tracked by the tracking URL */
		type: FormControl<ThirdPartyUrlType | null | undefined>,

		/** Tracking URL used to track the interaction. Provide a URL with optional path or query string, beginning with `https:`. For example, https://www.example.com/path */
		url: FormControl<string | null | undefined>,
	}
	export function CreateThirdPartyUrlFormGroup() {
		return new FormGroup<ThirdPartyUrlFormProperties>({
			type: new FormControl<ThirdPartyUrlType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ThirdPartyUrlType { THIRD_PARTY_URL_TYPE_UNSPECIFIED = 'THIRD_PARTY_URL_TYPE_UNSPECIFIED', THIRD_PARTY_URL_TYPE_IMPRESSION = 'THIRD_PARTY_URL_TYPE_IMPRESSION', THIRD_PARTY_URL_TYPE_CLICK_TRACKING = 'THIRD_PARTY_URL_TYPE_CLICK_TRACKING', THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_START = 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_START', THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FIRST_QUARTILE = 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FIRST_QUARTILE', THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MIDPOINT = 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MIDPOINT', THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_THIRD_QUARTILE = 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_THIRD_QUARTILE', THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_COMPLETE = 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_COMPLETE', THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MUTE = 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MUTE', THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PAUSE = 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PAUSE', THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_REWIND = 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_REWIND', THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FULLSCREEN = 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FULLSCREEN', THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_STOP = 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_STOP', THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_CUSTOM = 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_CUSTOM', THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_SKIP = 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_SKIP', THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PROGRESS = 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PROGRESS' }


	/** Timer event of the creative. */
	export interface TimerEvent {

		/** Required. The name of the timer event. */
		name?: string | null;

		/** Required. The name used to identify this timer event in reports. */
		reportingName?: string | null;
	}

	/** Timer event of the creative. */
	export interface TimerEventFormProperties {

		/** Required. The name of the timer event. */
		name: FormControl<string | null | undefined>,

		/** Required. The name used to identify this timer event in reports. */
		reportingName: FormControl<string | null | undefined>,
	}
	export function CreateTimerEventFormGroup() {
		return new FormGroup<TimerEventFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reportingName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about the transcoded audio or video file. */
	export interface Transcode {

		/** The bit rate for the audio stream of the transcoded video, or the bit rate for the transcoded audio, in kilobits per second. */
		audioBitRateKbps?: string | null;

		/** The sample rate for the audio stream of the transcoded video, or the sample rate for the transcoded audio, in hertz. */
		audioSampleRateHz?: string | null;

		/** The transcoding bit rate of the transcoded video, in kilobits per second. */
		bitRateKbps?: string | null;

		/** Dimensions. */
		dimensions?: Dimensions;

		/** The size of the transcoded file, in bytes. */
		fileSizeBytes?: string | null;

		/** The frame rate of the transcoded video, in frames per second. */
		frameRate?: number | null;

		/** The MIME type of the transcoded file. */
		mimeType?: string | null;

		/** The name of the transcoded file. */
		name?: string | null;

		/** Indicates if the transcoding was successful. */
		transcoded?: boolean | null;
	}

	/** Represents information about the transcoded audio or video file. */
	export interface TranscodeFormProperties {

		/** The bit rate for the audio stream of the transcoded video, or the bit rate for the transcoded audio, in kilobits per second. */
		audioBitRateKbps: FormControl<string | null | undefined>,

		/** The sample rate for the audio stream of the transcoded video, or the sample rate for the transcoded audio, in hertz. */
		audioSampleRateHz: FormControl<string | null | undefined>,

		/** The transcoding bit rate of the transcoded video, in kilobits per second. */
		bitRateKbps: FormControl<string | null | undefined>,

		/** The size of the transcoded file, in bytes. */
		fileSizeBytes: FormControl<string | null | undefined>,

		/** The frame rate of the transcoded video, in frames per second. */
		frameRate: FormControl<number | null | undefined>,

		/** The MIME type of the transcoded file. */
		mimeType: FormControl<string | null | undefined>,

		/** The name of the transcoded file. */
		name: FormControl<string | null | undefined>,

		/** Indicates if the transcoding was successful. */
		transcoded: FormControl<boolean | null | undefined>,
	}
	export function CreateTranscodeFormGroup() {
		return new FormGroup<TranscodeFormProperties>({
			audioBitRateKbps: new FormControl<string | null | undefined>(undefined),
			audioSampleRateHz: new FormControl<string | null | undefined>(undefined),
			bitRateKbps: new FormControl<string | null | undefined>(undefined),
			fileSizeBytes: new FormControl<string | null | undefined>(undefined),
			frameRate: new FormControl<number | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			transcoded: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A creative identifier provided by a registry that is unique across all platforms. This is part of the VAST 4.0 standard. */
	export interface UniversalAdId {

		/** The unique creative identifier. */
		id?: string | null;

		/** The registry provides unique creative identifiers. */
		registry?: UniversalAdIdRegistry | null;
	}

	/** A creative identifier provided by a registry that is unique across all platforms. This is part of the VAST 4.0 standard. */
	export interface UniversalAdIdFormProperties {

		/** The unique creative identifier. */
		id: FormControl<string | null | undefined>,

		/** The registry provides unique creative identifiers. */
		registry: FormControl<UniversalAdIdRegistry | null | undefined>,
	}
	export function CreateUniversalAdIdFormGroup() {
		return new FormGroup<UniversalAdIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			registry: new FormControl<UniversalAdIdRegistry | null | undefined>(undefined),
		});

	}

	export enum UniversalAdIdRegistry { UNIVERSAL_AD_REGISTRY_UNSPECIFIED = 'UNIVERSAL_AD_REGISTRY_UNSPECIFIED', UNIVERSAL_AD_REGISTRY_OTHER = 'UNIVERSAL_AD_REGISTRY_OTHER', UNIVERSAL_AD_REGISTRY_AD_ID = 'UNIVERSAL_AD_REGISTRY_AD_ID', UNIVERSAL_AD_REGISTRY_CLEARCAST = 'UNIVERSAL_AD_REGISTRY_CLEARCAST', UNIVERSAL_AD_REGISTRY_DV360 = 'UNIVERSAL_AD_REGISTRY_DV360', UNIVERSAL_AD_REGISTRY_CM = 'UNIVERSAL_AD_REGISTRY_CM' }


	/** Creative requirements configuration for the inventory source. */
	export interface CreativeConfig {

		/** The type of creative that can be assigned to the inventory source. Only the following types are supported: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_VIDEO` */
		creativeType?: CreativeCreativeType | null;

		/** The configuration for display creatives. */
		displayCreativeConfig?: InventorySourceDisplayCreativeConfig;

		/** The configuration for video creatives. */
		videoCreativeConfig?: InventorySourceVideoCreativeConfig;
	}

	/** Creative requirements configuration for the inventory source. */
	export interface CreativeConfigFormProperties {

		/** The type of creative that can be assigned to the inventory source. Only the following types are supported: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_VIDEO` */
		creativeType: FormControl<CreativeCreativeType | null | undefined>,
	}
	export function CreateCreativeConfigFormGroup() {
		return new FormGroup<CreativeConfigFormProperties>({
			creativeType: new FormControl<CreativeCreativeType | null | undefined>(undefined),
		});

	}


	/** The configuration for display creatives. */
	export interface InventorySourceDisplayCreativeConfig {

		/** Dimensions. */
		creativeSize?: Dimensions;
	}

	/** The configuration for display creatives. */
	export interface InventorySourceDisplayCreativeConfigFormProperties {
	}
	export function CreateInventorySourceDisplayCreativeConfigFormGroup() {
		return new FormGroup<InventorySourceDisplayCreativeConfigFormProperties>({
		});

	}


	/** The configuration for video creatives. */
	export interface InventorySourceVideoCreativeConfig {

		/** The duration requirements for the video creatives that can be assigned to the inventory source. */
		duration?: string | null;
	}

	/** The configuration for video creatives. */
	export interface InventorySourceVideoCreativeConfigFormProperties {

		/** The duration requirements for the video creatives that can be assigned to the inventory source. */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateInventorySourceVideoCreativeConfigFormGroup() {
		return new FormGroup<InventorySourceVideoCreativeConfigFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single custom bidding algorithm. */
	export interface CustomBiddingAlgorithm {

		/** Immutable. The unique ID of the advertiser that owns the custom bidding algorithm. */
		advertiserId?: string | null;

		/** Output only. The unique ID of the custom bidding algorithm. Assigned by the system. */
		customBiddingAlgorithmId?: string | null;

		/** Required. Immutable. The type of custom bidding algorithm. */
		customBiddingAlgorithmType?: CustomBiddingAlgorithmCustomBiddingAlgorithmType | null;

		/** Required. The display name of the custom bidding algorithm. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName?: string | null;

		/** Controls whether or not the custom bidding algorithm can be used as a bidding strategy. Accepted values are: * `ENTITY_STATUS_ACTIVE` * `ENTITY_STATUS_ARCHIVED` */
		entityStatus?: AdGroupEntityStatus | null;

		/** Output only. The details of custom bidding models for each advertiser who has access. This field may only include the details of the queried advertiser if the algorithm [`owner`](/display-video/api/reference/rest/v1/customBiddingAlgorithms#CustomBiddingAlgorithm.FIELDS.oneof_owner) is a partner and is being retrieved using an advertiser [`accessor`](/display-video/api/reference/rest/v1/customBiddingAlgorithms/list#body.QUERY_PARAMETERS.oneof_accessor). */
		modelDetails?: Array<CustomBiddingModelDetails>;

		/** Output only. The resource name of the custom bidding algorithm. */
		name?: string | null;

		/** Immutable. The unique ID of the partner that owns the custom bidding algorithm. */
		partnerId?: string | null;

		/** The IDs of the advertisers who have access to this algorithm. If advertiser_id is set, this field will only consist of that value. This field will not be set if the algorithm [`owner`](/display-video/api/reference/rest/v1/customBiddingAlgorithms#CustomBiddingAlgorithm.FIELDS.oneof_owner) is a partner and is being retrieved using an advertiser [`accessor`](/display-video/api/reference/rest/v1/customBiddingAlgorithms/list#body.QUERY_PARAMETERS.oneof_accessor). */
		sharedAdvertiserIds?: Array<string>;
	}

	/** A single custom bidding algorithm. */
	export interface CustomBiddingAlgorithmFormProperties {

		/** Immutable. The unique ID of the advertiser that owns the custom bidding algorithm. */
		advertiserId: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the custom bidding algorithm. Assigned by the system. */
		customBiddingAlgorithmId: FormControl<string | null | undefined>,

		/** Required. Immutable. The type of custom bidding algorithm. */
		customBiddingAlgorithmType: FormControl<CustomBiddingAlgorithmCustomBiddingAlgorithmType | null | undefined>,

		/** Required. The display name of the custom bidding algorithm. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Controls whether or not the custom bidding algorithm can be used as a bidding strategy. Accepted values are: * `ENTITY_STATUS_ACTIVE` * `ENTITY_STATUS_ARCHIVED` */
		entityStatus: FormControl<AdGroupEntityStatus | null | undefined>,

		/** Output only. The resource name of the custom bidding algorithm. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The unique ID of the partner that owns the custom bidding algorithm. */
		partnerId: FormControl<string | null | undefined>,
	}
	export function CreateCustomBiddingAlgorithmFormGroup() {
		return new FormGroup<CustomBiddingAlgorithmFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			customBiddingAlgorithmId: new FormControl<string | null | undefined>(undefined),
			customBiddingAlgorithmType: new FormControl<CustomBiddingAlgorithmCustomBiddingAlgorithmType | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			entityStatus: new FormControl<AdGroupEntityStatus | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			partnerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CustomBiddingAlgorithmCustomBiddingAlgorithmType { CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED = 'CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED', SCRIPT_BASED = 'SCRIPT_BASED', ADS_DATA_HUB_BASED = 'ADS_DATA_HUB_BASED', GOAL_BUILDER_BASED = 'GOAL_BUILDER_BASED', RULE_BASED = 'RULE_BASED' }


	/** The details of a custom bidding algorithm model for a single shared advertiser. */
	export interface CustomBiddingModelDetails {

		/** The unique ID of the relevant advertiser. */
		advertiserId?: string | null;

		/** The readiness state of custom bidding model. */
		readinessState?: CustomBiddingModelDetailsReadinessState | null;

		/** Output only. The suspension state of custom bidding model. */
		suspensionState?: CustomBiddingModelDetailsSuspensionState | null;
	}

	/** The details of a custom bidding algorithm model for a single shared advertiser. */
	export interface CustomBiddingModelDetailsFormProperties {

		/** The unique ID of the relevant advertiser. */
		advertiserId: FormControl<string | null | undefined>,

		/** The readiness state of custom bidding model. */
		readinessState: FormControl<CustomBiddingModelDetailsReadinessState | null | undefined>,

		/** Output only. The suspension state of custom bidding model. */
		suspensionState: FormControl<CustomBiddingModelDetailsSuspensionState | null | undefined>,
	}
	export function CreateCustomBiddingModelDetailsFormGroup() {
		return new FormGroup<CustomBiddingModelDetailsFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			readinessState: new FormControl<CustomBiddingModelDetailsReadinessState | null | undefined>(undefined),
			suspensionState: new FormControl<CustomBiddingModelDetailsSuspensionState | null | undefined>(undefined),
		});

	}

	export enum CustomBiddingModelDetailsReadinessState { READINESS_STATE_UNSPECIFIED = 'READINESS_STATE_UNSPECIFIED', READINESS_STATE_ACTIVE = 'READINESS_STATE_ACTIVE', READINESS_STATE_INSUFFICIENT_DATA = 'READINESS_STATE_INSUFFICIENT_DATA', READINESS_STATE_TRAINING = 'READINESS_STATE_TRAINING', READINESS_STATE_NO_VALID_SCRIPT = 'READINESS_STATE_NO_VALID_SCRIPT', READINESS_STATE_EVALUATION_FAILURE = 'READINESS_STATE_EVALUATION_FAILURE' }

	export enum CustomBiddingModelDetailsSuspensionState { SUSPENSION_STATE_UNSPECIFIED = 'SUSPENSION_STATE_UNSPECIFIED', SUSPENSION_STATE_ENABLED = 'SUSPENSION_STATE_ENABLED', SUSPENSION_STATE_DORMANT = 'SUSPENSION_STATE_DORMANT', SUSPENSION_STATE_SUSPENDED = 'SUSPENSION_STATE_SUSPENDED' }


	/** A single custom bidding algorithm rules. */
	export interface CustomBiddingAlgorithmRules {

		/** Output only. Whether the rules resource is currently being used for scoring by the parent algorithm. */
		active?: boolean | null;

		/** Output only. The time when the rules resource was created. */
		createTime?: string | null;

		/** Output only. The unique ID of the custom bidding algorithm that the rules resource belongs to. */
		customBiddingAlgorithmId?: string | null;

		/** Output only. The unique ID of the rules resource. */
		customBiddingAlgorithmRulesId?: string | null;

		/** An error message for a CustomBiddingAlgorithmRules resource. */
		error?: CustomBiddingAlgorithmRulesError;

		/** Output only. The resource name of the rules resource. */
		name?: string | null;

		/** The reference to the uploaded AlgorithmRules file. Retrieve the location to upload new AlgorithmRules file to using customBiddingAlgorithms.uploadRules. */
		rules?: CustomBiddingAlgorithmRulesRef;

		/** Output only. The state of the rules resource. */
		state?: CustomBiddingAlgorithmRulesState | null;
	}

	/** A single custom bidding algorithm rules. */
	export interface CustomBiddingAlgorithmRulesFormProperties {

		/** Output only. Whether the rules resource is currently being used for scoring by the parent algorithm. */
		active: FormControl<boolean | null | undefined>,

		/** Output only. The time when the rules resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the custom bidding algorithm that the rules resource belongs to. */
		customBiddingAlgorithmId: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the rules resource. */
		customBiddingAlgorithmRulesId: FormControl<string | null | undefined>,

		/** Output only. The resource name of the rules resource. */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the rules resource. */
		state: FormControl<CustomBiddingAlgorithmRulesState | null | undefined>,
	}
	export function CreateCustomBiddingAlgorithmRulesFormGroup() {
		return new FormGroup<CustomBiddingAlgorithmRulesFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			customBiddingAlgorithmId: new FormControl<string | null | undefined>(undefined),
			customBiddingAlgorithmRulesId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CustomBiddingAlgorithmRulesState | null | undefined>(undefined),
		});

	}


	/** An error message for a CustomBiddingAlgorithmRules resource. */
	export interface CustomBiddingAlgorithmRulesError {

		/** The type of error. */
		errorCode?: CustomBiddingAlgorithmRulesErrorErrorCode | null;
	}

	/** An error message for a CustomBiddingAlgorithmRules resource. */
	export interface CustomBiddingAlgorithmRulesErrorFormProperties {

		/** The type of error. */
		errorCode: FormControl<CustomBiddingAlgorithmRulesErrorErrorCode | null | undefined>,
	}
	export function CreateCustomBiddingAlgorithmRulesErrorFormGroup() {
		return new FormGroup<CustomBiddingAlgorithmRulesErrorFormProperties>({
			errorCode: new FormControl<CustomBiddingAlgorithmRulesErrorErrorCode | null | undefined>(undefined),
		});

	}

	export enum CustomBiddingAlgorithmRulesErrorErrorCode { ERROR_CODE_UNSPECIFIED = 'ERROR_CODE_UNSPECIFIED', SYNTAX_ERROR = 'SYNTAX_ERROR', CONSTRAINT_VIOLATION_ERROR = 'CONSTRAINT_VIOLATION_ERROR', INTERNAL_ERROR = 'INTERNAL_ERROR' }


	/** The reference to the uploaded AlgorithmRules file. Retrieve the location to upload new AlgorithmRules file to using customBiddingAlgorithms.uploadRules. */
	export interface CustomBiddingAlgorithmRulesRef {

		/** A resource name to be used in media.download to download the rules files. Or media.upload to upload the rules files. Resource names have the format `customBiddingAlgorithms/{custom_bidding_algorithm_id}/rulesRef/{ref_id}`. */
		resourceName?: string | null;
	}

	/** The reference to the uploaded AlgorithmRules file. Retrieve the location to upload new AlgorithmRules file to using customBiddingAlgorithms.uploadRules. */
	export interface CustomBiddingAlgorithmRulesRefFormProperties {

		/** A resource name to be used in media.download to download the rules files. Or media.upload to upload the rules files. Resource names have the format `customBiddingAlgorithms/{custom_bidding_algorithm_id}/rulesRef/{ref_id}`. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateCustomBiddingAlgorithmRulesRefFormGroup() {
		return new FormGroup<CustomBiddingAlgorithmRulesRefFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CustomBiddingAlgorithmRulesState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACCEPTED = 'ACCEPTED', REJECTED = 'REJECTED' }


	/** A single custom bidding script. */
	export interface CustomBiddingScript {

		/** Output only. Whether the script is currently being used for scoring by the parent algorithm. */
		active?: boolean | null;

		/** Output only. The time when the script was created. */
		createTime?: string | null;

		/** Output only. The unique ID of the custom bidding algorithm the script belongs to. */
		customBiddingAlgorithmId?: string | null;

		/** Output only. The unique ID of the custom bidding script. */
		customBiddingScriptId?: string | null;

		/** Output only. Error details of a rejected custom bidding script. This field will only be populated when state is REJECTED. */
		errors?: Array<ScriptError>;

		/** Output only. The resource name of the custom bidding script. */
		name?: string | null;

		/** The reference to the uploaded custom bidding script file. */
		script?: CustomBiddingScriptRef;

		/** Output only. The state of the custom bidding script. */
		state?: CustomBiddingScriptState | null;
	}

	/** A single custom bidding script. */
	export interface CustomBiddingScriptFormProperties {

		/** Output only. Whether the script is currently being used for scoring by the parent algorithm. */
		active: FormControl<boolean | null | undefined>,

		/** Output only. The time when the script was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the custom bidding algorithm the script belongs to. */
		customBiddingAlgorithmId: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the custom bidding script. */
		customBiddingScriptId: FormControl<string | null | undefined>,

		/** Output only. The resource name of the custom bidding script. */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the custom bidding script. */
		state: FormControl<CustomBiddingScriptState | null | undefined>,
	}
	export function CreateCustomBiddingScriptFormGroup() {
		return new FormGroup<CustomBiddingScriptFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			customBiddingAlgorithmId: new FormControl<string | null | undefined>(undefined),
			customBiddingScriptId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CustomBiddingScriptState | null | undefined>(undefined),
		});

	}


	/** An error message for a custom bidding script. */
	export interface ScriptError {

		/** The column number in the script where the error was thrown. */
		column?: string | null;

		/** The type of error. */
		errorCode?: ScriptErrorErrorCode | null;

		/** The detailed error message. */
		errorMessage?: string | null;

		/** The line number in the script where the error was thrown. */
		line?: string | null;
	}

	/** An error message for a custom bidding script. */
	export interface ScriptErrorFormProperties {

		/** The column number in the script where the error was thrown. */
		column: FormControl<string | null | undefined>,

		/** The type of error. */
		errorCode: FormControl<ScriptErrorErrorCode | null | undefined>,

		/** The detailed error message. */
		errorMessage: FormControl<string | null | undefined>,

		/** The line number in the script where the error was thrown. */
		line: FormControl<string | null | undefined>,
	}
	export function CreateScriptErrorFormGroup() {
		return new FormGroup<ScriptErrorFormProperties>({
			column: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<ScriptErrorErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			line: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScriptErrorErrorCode { ERROR_CODE_UNSPECIFIED = 'ERROR_CODE_UNSPECIFIED', SYNTAX_ERROR = 'SYNTAX_ERROR', DEPRECATED_SYNTAX = 'DEPRECATED_SYNTAX', INTERNAL_ERROR = 'INTERNAL_ERROR' }


	/** The reference to the uploaded custom bidding script file. */
	export interface CustomBiddingScriptRef {

		/** A resource name to be used in media.download to Download the script files. Or media.upload to Upload the script files. Resource names have the format `customBiddingAlgorithms/{custom_bidding_algorithm_id}/scriptRef/{ref_id}`. */
		resourceName?: string | null;
	}

	/** The reference to the uploaded custom bidding script file. */
	export interface CustomBiddingScriptRefFormProperties {

		/** A resource name to be used in media.download to Download the script files. Or media.upload to Upload the script files. Resource names have the format `customBiddingAlgorithms/{custom_bidding_algorithm_id}/scriptRef/{ref_id}`. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateCustomBiddingScriptRefFormGroup() {
		return new FormGroup<CustomBiddingScriptRefFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CustomBiddingScriptState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACCEPTED = 'ACCEPTED', REJECTED = 'REJECTED', PENDING = 'PENDING' }


	/** Describes a custom list entity, such as a custom affinity or custom intent audience list. */
	export interface CustomList {

		/** Output only. The unique ID of the custom list. Assigned by the system. */
		customListId?: string | null;

		/** Output only. The display name of the custom list. . */
		displayName?: string | null;

		/** Output only. The resource name of the custom list. */
		name?: string | null;
	}

	/** Describes a custom list entity, such as a custom affinity or custom intent audience list. */
	export interface CustomListFormProperties {

		/** Output only. The unique ID of the custom list. Assigned by the system. */
		customListId: FormControl<string | null | undefined>,

		/** Output only. The display name of the custom list. . */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The resource name of the custom list. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomListFormGroup() {
		return new FormGroup<CustomListFormProperties>({
			customListId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a targetable device make and model. This will be populated in the device_make_model_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`. */
	export interface DeviceMakeModelTargetingOptionDetails {

		/** Output only. The display name of the device make and model. */
		displayName?: string | null;
	}

	/** Represents a targetable device make and model. This will be populated in the device_make_model_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`. */
	export interface DeviceMakeModelTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the device make and model. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateDeviceMakeModelTargetingOptionDetailsFormGroup() {
		return new FormGroup<DeviceMakeModelTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a targetable device type. This will be populated in the device_type_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`. */
	export interface DeviceTypeTargetingOptionDetails {

		/** Output only. The device type that is used to be targeted. */
		deviceType?: DeviceTypeAssignedTargetingOptionDetailsDeviceType | null;
	}

	/** Represents a targetable device type. This will be populated in the device_type_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`. */
	export interface DeviceTypeTargetingOptionDetailsFormProperties {

		/** Output only. The device type that is used to be targeted. */
		deviceType: FormControl<DeviceTypeAssignedTargetingOptionDetailsDeviceType | null | undefined>,
	}
	export function CreateDeviceTypeTargetingOptionDetailsFormGroup() {
		return new FormGroup<DeviceTypeTargetingOptionDetailsFormProperties>({
			deviceType: new FormControl<DeviceTypeAssignedTargetingOptionDetailsDeviceType | null | undefined>(undefined),
		});

	}


	/** Represents a targetable digital content label rating tier. This will be populated in the digital_content_label_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`. */
	export interface DigitalContentLabelTargetingOptionDetails {

		/** Output only. An enum for the content label brand safety tiers. */
		contentRatingTier?: DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTier | null;
	}

	/** Represents a targetable digital content label rating tier. This will be populated in the digital_content_label_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`. */
	export interface DigitalContentLabelTargetingOptionDetailsFormProperties {

		/** Output only. An enum for the content label brand safety tiers. */
		contentRatingTier: FormControl<DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTier | null | undefined>,
	}
	export function CreateDigitalContentLabelTargetingOptionDetailsFormGroup() {
		return new FormGroup<DigitalContentLabelTargetingOptionDetailsFormProperties>({
			contentRatingTier: new FormControl<DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTier | null | undefined>(undefined),
		});

	}


	/** Request message for LineItemService.DuplicateLineItem. */
	export interface DuplicateLineItemRequest {

		/** The display name of the new line item. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		targetDisplayName?: string | null;
	}

	/** Request message for LineItemService.DuplicateLineItem. */
	export interface DuplicateLineItemRequestFormProperties {

		/** The display name of the new line item. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		targetDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateDuplicateLineItemRequestFormGroup() {
		return new FormGroup<DuplicateLineItemRequestFormProperties>({
			targetDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DuplicateLineItemResponse {

		/** The ID of the created line item. */
		duplicateLineItemId?: string | null;
	}
	export interface DuplicateLineItemResponseFormProperties {

		/** The ID of the created line item. */
		duplicateLineItemId: FormControl<string | null | undefined>,
	}
	export function CreateDuplicateLineItemResponseFormGroup() {
		return new FormGroup<DuplicateLineItemResponseFormProperties>({
			duplicateLineItemId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for FirstAndThirdPartyAudienceService.EditCustomerMatchMembers. */
	export interface EditCustomerMatchMembersRequest {

		/** Wrapper message for a list of contact information defining Customer Match audience members. */
		addedContactInfoList?: ContactInfoList;

		/** Wrapper message for a list of mobile device IDs defining Customer Match audience members. */
		addedMobileDeviceIdList?: MobileDeviceIdList;

		/** Required. The ID of the owner advertiser of the updated Customer Match FirstAndThirdPartyAudience. */
		advertiserId?: string | null;
	}

	/** Request message for FirstAndThirdPartyAudienceService.EditCustomerMatchMembers. */
	export interface EditCustomerMatchMembersRequestFormProperties {

		/** Required. The ID of the owner advertiser of the updated Customer Match FirstAndThirdPartyAudience. */
		advertiserId: FormControl<string | null | undefined>,
	}
	export function CreateEditCustomerMatchMembersRequestFormGroup() {
		return new FormGroup<EditCustomerMatchMembersRequestFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Wrapper message for a list of mobile device IDs defining Customer Match audience members. */
	export interface MobileDeviceIdList {

		/** User consent status. */
		consent?: Consent;

		/** A list of mobile device IDs defining Customer Match audience members. The size of mobile_device_ids mustn't be greater than 500,000. */
		mobileDeviceIds?: Array<string>;
	}

	/** Wrapper message for a list of mobile device IDs defining Customer Match audience members. */
	export interface MobileDeviceIdListFormProperties {
	}
	export function CreateMobileDeviceIdListFormGroup() {
		return new FormGroup<MobileDeviceIdListFormProperties>({
		});

	}


	/** The response of FirstAndThirdPartyAudienceService.EditCustomerMatchMembers. */
	export interface EditCustomerMatchMembersResponse {

		/** Required. The ID of the updated Customer Match FirstAndThirdPartyAudience. */
		firstAndThirdPartyAudienceId?: string | null;
	}

	/** The response of FirstAndThirdPartyAudienceService.EditCustomerMatchMembers. */
	export interface EditCustomerMatchMembersResponseFormProperties {

		/** Required. The ID of the updated Customer Match FirstAndThirdPartyAudience. */
		firstAndThirdPartyAudienceId: FormControl<string | null | undefined>,
	}
	export function CreateEditCustomerMatchMembersResponseFormGroup() {
		return new FormGroup<EditCustomerMatchMembersResponseFormProperties>({
			firstAndThirdPartyAudienceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for GuaranteedOrderService.EditGuaranteedOrderReadAccessors. */
	export interface EditGuaranteedOrderReadAccessorsRequest {

		/** The advertisers to add as read accessors to the guaranteed order. */
		addedAdvertisers?: Array<string>;

		/** Required. The partner context in which the change is being made. */
		partnerId?: string | null;

		/** Whether to give all advertisers of the read/write accessor partner read access to the guaranteed order. Only applicable if read_write_partner_id is set in the guaranteed order. */
		readAccessInherited?: boolean | null;

		/** The advertisers to remove as read accessors to the guaranteed order. */
		removedAdvertisers?: Array<string>;
	}

	/** Request message for GuaranteedOrderService.EditGuaranteedOrderReadAccessors. */
	export interface EditGuaranteedOrderReadAccessorsRequestFormProperties {

		/** Required. The partner context in which the change is being made. */
		partnerId: FormControl<string | null | undefined>,

		/** Whether to give all advertisers of the read/write accessor partner read access to the guaranteed order. Only applicable if read_write_partner_id is set in the guaranteed order. */
		readAccessInherited: FormControl<boolean | null | undefined>,
	}
	export function CreateEditGuaranteedOrderReadAccessorsRequestFormGroup() {
		return new FormGroup<EditGuaranteedOrderReadAccessorsRequestFormProperties>({
			partnerId: new FormControl<string | null | undefined>(undefined),
			readAccessInherited: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EditGuaranteedOrderReadAccessorsResponse {

		/** Whether all advertisers of read_write_partner_id have read access to the guaranteed order. */
		readAccessInherited?: boolean | null;

		/** The IDs of advertisers with read access to the guaranteed order. */
		readAdvertiserIds?: Array<string>;
	}
	export interface EditGuaranteedOrderReadAccessorsResponseFormProperties {

		/** Whether all advertisers of read_write_partner_id have read access to the guaranteed order. */
		readAccessInherited: FormControl<boolean | null | undefined>,
	}
	export function CreateEditGuaranteedOrderReadAccessorsResponseFormGroup() {
		return new FormGroup<EditGuaranteedOrderReadAccessorsResponseFormProperties>({
			readAccessInherited: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for InventorySourceService.EditInventorySourceReadWriteAccessors. */
	export interface EditInventorySourceReadWriteAccessorsRequest {

		/** Update to the list of advertisers with read/write access to the inventory source. */
		advertisersUpdate?: EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate;

		/** Set the partner context as read/write accessor of the inventory source. This will remove all other current read/write advertiser accessors. */
		assignPartner?: boolean | null;

		/** Required. The partner context by which the accessors change is being made. */
		partnerId?: string | null;
	}

	/** Request message for InventorySourceService.EditInventorySourceReadWriteAccessors. */
	export interface EditInventorySourceReadWriteAccessorsRequestFormProperties {

		/** Set the partner context as read/write accessor of the inventory source. This will remove all other current read/write advertiser accessors. */
		assignPartner: FormControl<boolean | null | undefined>,

		/** Required. The partner context by which the accessors change is being made. */
		partnerId: FormControl<string | null | undefined>,
	}
	export function CreateEditInventorySourceReadWriteAccessorsRequestFormGroup() {
		return new FormGroup<EditInventorySourceReadWriteAccessorsRequestFormProperties>({
			assignPartner: new FormControl<boolean | null | undefined>(undefined),
			partnerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update to the list of advertisers with read/write access to the inventory source. */
	export interface EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate {

		/** The advertisers to add. */
		addedAdvertisers?: Array<string>;

		/** The advertisers to remove. */
		removedAdvertisers?: Array<string>;
	}

	/** Update to the list of advertisers with read/write access to the inventory source. */
	export interface EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdateFormProperties {
	}
	export function CreateEditInventorySourceReadWriteAccessorsRequestAdvertisersUpdateFormGroup() {
		return new FormGroup<EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdateFormProperties>({
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


	/** Represents a targetable environment. This will be populated in the environment_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`. */
	export interface EnvironmentTargetingOptionDetails {

		/** Output only. The serving environment. */
		environment?: EnvironmentAssignedTargetingOptionDetailsEnvironment | null;
	}

	/** Represents a targetable environment. This will be populated in the environment_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`. */
	export interface EnvironmentTargetingOptionDetailsFormProperties {

		/** Output only. The serving environment. */
		environment: FormControl<EnvironmentAssignedTargetingOptionDetailsEnvironment | null | undefined>,
	}
	export function CreateEnvironmentTargetingOptionDetailsFormGroup() {
		return new FormGroup<EnvironmentTargetingOptionDetailsFormProperties>({
			environment: new FormControl<EnvironmentAssignedTargetingOptionDetailsEnvironment | null | undefined>(undefined),
		});

	}


	/** Settings that control which exchanges are enabled for a partner. */
	export interface ExchangeConfig {

		/** All enabled exchanges in the partner. Duplicate enabled exchanges will be ignored. */
		enabledExchanges?: Array<ExchangeConfigEnabledExchange>;
	}

	/** Settings that control which exchanges are enabled for a partner. */
	export interface ExchangeConfigFormProperties {
	}
	export function CreateExchangeConfigFormGroup() {
		return new FormGroup<ExchangeConfigFormProperties>({
		});

	}


	/** An enabled exchange in the partner. */
	export interface ExchangeConfigEnabledExchange {

		/** The enabled exchange. */
		exchange?: ExchangeAssignedTargetingOptionDetailsExchange | null;

		/** Output only. Agency ID of Google Ad Manager. The field is only relevant when Google Ad Manager is the enabled exchange. */
		googleAdManagerAgencyId?: string | null;

		/** Output only. Network ID of Google Ad Manager. The field is only relevant when Google Ad Manager is the enabled exchange. */
		googleAdManagerBuyerNetworkId?: string | null;

		/** Output only. Seat ID of the enabled exchange. */
		seatId?: string | null;
	}

	/** An enabled exchange in the partner. */
	export interface ExchangeConfigEnabledExchangeFormProperties {

		/** The enabled exchange. */
		exchange: FormControl<ExchangeAssignedTargetingOptionDetailsExchange | null | undefined>,

		/** Output only. Agency ID of Google Ad Manager. The field is only relevant when Google Ad Manager is the enabled exchange. */
		googleAdManagerAgencyId: FormControl<string | null | undefined>,

		/** Output only. Network ID of Google Ad Manager. The field is only relevant when Google Ad Manager is the enabled exchange. */
		googleAdManagerBuyerNetworkId: FormControl<string | null | undefined>,

		/** Output only. Seat ID of the enabled exchange. */
		seatId: FormControl<string | null | undefined>,
	}
	export function CreateExchangeConfigEnabledExchangeFormGroup() {
		return new FormGroup<ExchangeConfigEnabledExchangeFormProperties>({
			exchange: new FormControl<ExchangeAssignedTargetingOptionDetailsExchange | null | undefined>(undefined),
			googleAdManagerAgencyId: new FormControl<string | null | undefined>(undefined),
			googleAdManagerBuyerNetworkId: new FormControl<string | null | undefined>(undefined),
			seatId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a targetable exchange. This will be populated in the exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`. */
	export interface ExchangeTargetingOptionDetails {

		/** Output only. The type of exchange. */
		exchange?: ExchangeAssignedTargetingOptionDetailsExchange | null;
	}

	/** Represents a targetable exchange. This will be populated in the exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`. */
	export interface ExchangeTargetingOptionDetailsFormProperties {

		/** Output only. The type of exchange. */
		exchange: FormControl<ExchangeAssignedTargetingOptionDetailsExchange | null | undefined>,
	}
	export function CreateExchangeTargetingOptionDetailsFormGroup() {
		return new FormGroup<ExchangeTargetingOptionDetailsFormProperties>({
			exchange: new FormControl<ExchangeAssignedTargetingOptionDetailsExchange | null | undefined>(undefined),
		});

	}


	/** Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers. */
	export interface FirstAndThirdPartyAudience {

		/** Output only. The estimated audience size for the Display network in the past month. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only returned in GET request. */
		activeDisplayAudienceSize?: string | null;

		/** The app_id matches with the type of the mobile_device_ids being uploaded. Only applicable to audience_type `CUSTOMER_MATCH_DEVICE_ID` */
		appId?: string | null;

		/** Output only. The source of the audience. */
		audienceSource?: FirstAndThirdPartyAudienceAudienceSource | null;

		/** The type of the audience. */
		audienceType?: FirstAndThirdPartyAudienceAudienceType | null;

		/** Wrapper message for a list of contact information defining Customer Match audience members. */
		contactInfoList?: ContactInfoList;

		/** The user-provided description of the audience. Only applicable to first party audiences. */
		description?: string | null;

		/** Output only. The estimated audience size for the Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only returned in GET request. */
		displayAudienceSize?: string | null;

		/** Output only. The estimated desktop audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. */
		displayDesktopAudienceSize?: string | null;

		/** Output only. The estimated mobile app audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. */
		displayMobileAppAudienceSize?: string | null;

		/** Output only. The estimated mobile web audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. */
		displayMobileWebAudienceSize?: string | null;

		/** The display name of the first and third party audience. */
		displayName?: string | null;

		/** Output only. The unique ID of the first and third party audience. Assigned by the system. */
		firstAndThirdPartyAudienceId?: string | null;

		/** Whether the audience is a first or third party audience. */
		firstAndThirdPartyAudienceType?: FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceType | null;

		/** Output only. The estimated audience size for Gmail network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. */
		gmailAudienceSize?: string | null;

		/** The duration in days that an entry remains in the audience after the qualifying event. If the audience has no expiration, set the value of this field to 10000. Otherwise, the set value must be greater than 0 and less than or equal to 540. Only applicable to first party audiences. This field is required if one of the following audience_type is used: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID` */
		membershipDurationDays?: string | null;

		/** Wrapper message for a list of mobile device IDs defining Customer Match audience members. */
		mobileDeviceIdList?: MobileDeviceIdList;

		/** Output only. The resource name of the first and third party audience. */
		name?: string | null;

		/** Output only. The estimated audience size for YouTube network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. */
		youtubeAudienceSize?: string | null;
	}

	/** Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers. */
	export interface FirstAndThirdPartyAudienceFormProperties {

		/** Output only. The estimated audience size for the Display network in the past month. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only returned in GET request. */
		activeDisplayAudienceSize: FormControl<string | null | undefined>,

		/** The app_id matches with the type of the mobile_device_ids being uploaded. Only applicable to audience_type `CUSTOMER_MATCH_DEVICE_ID` */
		appId: FormControl<string | null | undefined>,

		/** Output only. The source of the audience. */
		audienceSource: FormControl<FirstAndThirdPartyAudienceAudienceSource | null | undefined>,

		/** The type of the audience. */
		audienceType: FormControl<FirstAndThirdPartyAudienceAudienceType | null | undefined>,

		/** The user-provided description of the audience. Only applicable to first party audiences. */
		description: FormControl<string | null | undefined>,

		/** Output only. The estimated audience size for the Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only returned in GET request. */
		displayAudienceSize: FormControl<string | null | undefined>,

		/** Output only. The estimated desktop audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. */
		displayDesktopAudienceSize: FormControl<string | null | undefined>,

		/** Output only. The estimated mobile app audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. */
		displayMobileAppAudienceSize: FormControl<string | null | undefined>,

		/** Output only. The estimated mobile web audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. */
		displayMobileWebAudienceSize: FormControl<string | null | undefined>,

		/** The display name of the first and third party audience. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the first and third party audience. Assigned by the system. */
		firstAndThirdPartyAudienceId: FormControl<string | null | undefined>,

		/** Whether the audience is a first or third party audience. */
		firstAndThirdPartyAudienceType: FormControl<FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceType | null | undefined>,

		/** Output only. The estimated audience size for Gmail network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. */
		gmailAudienceSize: FormControl<string | null | undefined>,

		/** The duration in days that an entry remains in the audience after the qualifying event. If the audience has no expiration, set the value of this field to 10000. Otherwise, the set value must be greater than 0 and less than or equal to 540. Only applicable to first party audiences. This field is required if one of the following audience_type is used: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID` */
		membershipDurationDays: FormControl<string | null | undefined>,

		/** Output only. The resource name of the first and third party audience. */
		name: FormControl<string | null | undefined>,

		/** Output only. The estimated audience size for YouTube network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. */
		youtubeAudienceSize: FormControl<string | null | undefined>,
	}
	export function CreateFirstAndThirdPartyAudienceFormGroup() {
		return new FormGroup<FirstAndThirdPartyAudienceFormProperties>({
			activeDisplayAudienceSize: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			audienceSource: new FormControl<FirstAndThirdPartyAudienceAudienceSource | null | undefined>(undefined),
			audienceType: new FormControl<FirstAndThirdPartyAudienceAudienceType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayAudienceSize: new FormControl<string | null | undefined>(undefined),
			displayDesktopAudienceSize: new FormControl<string | null | undefined>(undefined),
			displayMobileAppAudienceSize: new FormControl<string | null | undefined>(undefined),
			displayMobileWebAudienceSize: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			firstAndThirdPartyAudienceId: new FormControl<string | null | undefined>(undefined),
			firstAndThirdPartyAudienceType: new FormControl<FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceType | null | undefined>(undefined),
			gmailAudienceSize: new FormControl<string | null | undefined>(undefined),
			membershipDurationDays: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			youtubeAudienceSize: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FirstAndThirdPartyAudienceAudienceSource { AUDIENCE_SOURCE_UNSPECIFIED = 'AUDIENCE_SOURCE_UNSPECIFIED', DISPLAY_VIDEO_360 = 'DISPLAY_VIDEO_360', CAMPAIGN_MANAGER = 'CAMPAIGN_MANAGER', AD_MANAGER = 'AD_MANAGER', SEARCH_ADS_360 = 'SEARCH_ADS_360', YOUTUBE = 'YOUTUBE', ADS_DATA_HUB = 'ADS_DATA_HUB' }

	export enum FirstAndThirdPartyAudienceAudienceType { AUDIENCE_TYPE_UNSPECIFIED = 'AUDIENCE_TYPE_UNSPECIFIED', CUSTOMER_MATCH_CONTACT_INFO = 'CUSTOMER_MATCH_CONTACT_INFO', CUSTOMER_MATCH_DEVICE_ID = 'CUSTOMER_MATCH_DEVICE_ID', CUSTOMER_MATCH_USER_ID = 'CUSTOMER_MATCH_USER_ID', ACTIVITY_BASED = 'ACTIVITY_BASED', FREQUENCY_CAP = 'FREQUENCY_CAP', TAG_BASED = 'TAG_BASED', YOUTUBE_USERS = 'YOUTUBE_USERS', LICENSED = 'LICENSED' }

	export enum FirstAndThirdPartyAudienceFirstAndThirdPartyAudienceType { FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_UNSPECIFIED = 'FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_UNSPECIFIED', FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_FIRST_PARTY = 'FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_FIRST_PARTY', FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_THIRD_PARTY = 'FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_THIRD_PARTY' }


	/** A single Floodlight group. */
	export interface FloodlightGroup {

		/** Configuration for custom Active View video viewability metrics. */
		activeViewConfig?: ActiveViewVideoViewabilityMetricConfig;

		/** User-defined custom variables owned by the Floodlight group. Use custom Floodlight variables to create reporting data that is tailored to your unique business needs. Custom Floodlight variables use the keys `U1=`, `U2=`, and so on, and can take any values that you choose to pass to them. You can use them to track virtually any type of data that you collect about your customers, such as the genre of movie that a customer purchases, the country to which the item is shipped, and so on. Custom Floodlight variables may not be used to pass any data that could be used or recognized as personally identifiable information (PII). Example: `custom_variables { fields { "U1": value { number_value: 123.4 }, "U2": value { string_value: "MyVariable2" }, "U3": value { string_value: "MyVariable3" } } }` Acceptable values for keys are "U1" through "U100", inclusive. String values must be less than 64 characters long, and cannot contain the following characters: `"<>`. */
		customVariables?: {[id: string]: any };

		/** Required. The display name of the Floodlight group. */
		displayName?: string | null;

		/** Output only. The unique ID of the Floodlight group. Assigned by the system. */
		floodlightGroupId?: string | null;

		/** Specifies how many days into the past to look when determining whether to record a conversion. */
		lookbackWindow?: LookbackWindow;

		/** Output only. The resource name of the Floodlight group. */
		name?: string | null;

		/** Required. The web tag type enabled for the Floodlight group. */
		webTagType?: FloodlightGroupWebTagType | null;
	}

	/** A single Floodlight group. */
	export interface FloodlightGroupFormProperties {

		/** User-defined custom variables owned by the Floodlight group. Use custom Floodlight variables to create reporting data that is tailored to your unique business needs. Custom Floodlight variables use the keys `U1=`, `U2=`, and so on, and can take any values that you choose to pass to them. You can use them to track virtually any type of data that you collect about your customers, such as the genre of movie that a customer purchases, the country to which the item is shipped, and so on. Custom Floodlight variables may not be used to pass any data that could be used or recognized as personally identifiable information (PII). Example: `custom_variables { fields { "U1": value { number_value: 123.4 }, "U2": value { string_value: "MyVariable2" }, "U3": value { string_value: "MyVariable3" } } }` Acceptable values for keys are "U1" through "U100", inclusive. String values must be less than 64 characters long, and cannot contain the following characters: `"<>`. */
		customVariables: FormControl<{[id: string]: any } | null | undefined>,

		/** Required. The display name of the Floodlight group. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the Floodlight group. Assigned by the system. */
		floodlightGroupId: FormControl<string | null | undefined>,

		/** Output only. The resource name of the Floodlight group. */
		name: FormControl<string | null | undefined>,

		/** Required. The web tag type enabled for the Floodlight group. */
		webTagType: FormControl<FloodlightGroupWebTagType | null | undefined>,
	}
	export function CreateFloodlightGroupFormGroup() {
		return new FormGroup<FloodlightGroupFormProperties>({
			customVariables: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			floodlightGroupId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			webTagType: new FormControl<FloodlightGroupWebTagType | null | undefined>(undefined),
		});

	}


	/** Specifies how many days into the past to look when determining whether to record a conversion. */
	export interface LookbackWindow {

		/** Lookback window, in days, from the last time a given user clicked on one of your ads. */
		clickDays?: number | null;

		/** Lookback window, in days, from the last time a given user viewed one of your ads. */
		impressionDays?: number | null;
	}

	/** Specifies how many days into the past to look when determining whether to record a conversion. */
	export interface LookbackWindowFormProperties {

		/** Lookback window, in days, from the last time a given user clicked on one of your ads. */
		clickDays: FormControl<number | null | undefined>,

		/** Lookback window, in days, from the last time a given user viewed one of your ads. */
		impressionDays: FormControl<number | null | undefined>,
	}
	export function CreateLookbackWindowFormGroup() {
		return new FormGroup<LookbackWindowFormProperties>({
			clickDays: new FormControl<number | null | undefined>(undefined),
			impressionDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FloodlightGroupWebTagType { WEB_TAG_TYPE_UNSPECIFIED = 'WEB_TAG_TYPE_UNSPECIFIED', WEB_TAG_TYPE_NONE = 'WEB_TAG_TYPE_NONE', WEB_TAG_TYPE_IMAGE = 'WEB_TAG_TYPE_IMAGE', WEB_TAG_TYPE_DYNAMIC = 'WEB_TAG_TYPE_DYNAMIC' }


	/** Represents a targetable gender. This will be populated in the gender_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_GENDER`. */
	export interface GenderTargetingOptionDetails {

		/** Output only. The gender of an audience. */
		gender?: GenderAssignedTargetingOptionDetailsGender | null;
	}

	/** Represents a targetable gender. This will be populated in the gender_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_GENDER`. */
	export interface GenderTargetingOptionDetailsFormProperties {

		/** Output only. The gender of an audience. */
		gender: FormControl<GenderAssignedTargetingOptionDetailsGender | null | undefined>,
	}
	export function CreateGenderTargetingOptionDetailsFormGroup() {
		return new FormGroup<GenderTargetingOptionDetailsFormProperties>({
			gender: new FormControl<GenderAssignedTargetingOptionDetailsGender | null | undefined>(undefined),
		});

	}


	/** Request message for LineItemService.GenerateDefaultLineItem. */
	export interface GenerateDefaultLineItemRequest {

		/** Required. The display name of the line item. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName?: string | null;

		/** Required. The unique ID of the insertion order that the line item belongs to. */
		insertionOrderId?: string | null;

		/** Required. The type of the line item. */
		lineItemType?: LineItemLineItemType | null;

		/** A mobile app promoted by a mobile app install line item. */
		mobileApp?: MobileApp;
	}

	/** Request message for LineItemService.GenerateDefaultLineItem. */
	export interface GenerateDefaultLineItemRequestFormProperties {

		/** Required. The display name of the line item. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Required. The unique ID of the insertion order that the line item belongs to. */
		insertionOrderId: FormControl<string | null | undefined>,

		/** Required. The type of the line item. */
		lineItemType: FormControl<LineItemLineItemType | null | undefined>,
	}
	export function CreateGenerateDefaultLineItemRequestFormGroup() {
		return new FormGroup<GenerateDefaultLineItemRequestFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			insertionOrderId: new FormControl<string | null | undefined>(undefined),
			lineItemType: new FormControl<LineItemLineItemType | null | undefined>(undefined),
		});

	}


	/** Search terms for geo region targeting options. */
	export interface GeoRegionSearchTerms {

		/** The search query for the desired geo region. The query can be a prefix, e.g. "New Yor", "Seattle", "USA", etc. */
		geoRegionQuery?: string | null;
	}

	/** Search terms for geo region targeting options. */
	export interface GeoRegionSearchTermsFormProperties {

		/** The search query for the desired geo region. The query can be a prefix, e.g. "New Yor", "Seattle", "USA", etc. */
		geoRegionQuery: FormControl<string | null | undefined>,
	}
	export function CreateGeoRegionSearchTermsFormGroup() {
		return new FormGroup<GeoRegionSearchTermsFormProperties>({
			geoRegionQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a targetable geographic region. This will be populated in the geo_region_details field when targeting_type is `TARGETING_TYPE_GEO_REGION`. */
	export interface GeoRegionTargetingOptionDetails {

		/** Output only. The display name of the geographic region (e.g., "Ontario, Canada"). */
		displayName?: string | null;

		/** Output only. The type of geographic region targeting. */
		geoRegionType?: GeoRegionAssignedTargetingOptionDetailsGeoRegionType | null;
	}

	/** Represents a targetable geographic region. This will be populated in the geo_region_details field when targeting_type is `TARGETING_TYPE_GEO_REGION`. */
	export interface GeoRegionTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the geographic region (e.g., "Ontario, Canada"). */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The type of geographic region targeting. */
		geoRegionType: FormControl<GeoRegionAssignedTargetingOptionDetailsGeoRegionType | null | undefined>,
	}
	export function CreateGeoRegionTargetingOptionDetailsFormGroup() {
		return new FormGroup<GeoRegionTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			geoRegionType: new FormControl<GeoRegionAssignedTargetingOptionDetailsGeoRegionType | null | undefined>(undefined),
		});

	}


	/** Describes a Google audience resource. Includes Google audience lists. */
	export interface GoogleAudience {

		/** Output only. The display name of the Google audience. . */
		displayName?: string | null;

		/** Output only. The unique ID of the Google audience. Assigned by the system. */
		googleAudienceId?: string | null;

		/** Output only. The type of Google audience. . */
		googleAudienceType?: GoogleAudienceGoogleAudienceType | null;

		/** Output only. The resource name of the google audience. */
		name?: string | null;
	}

	/** Describes a Google audience resource. Includes Google audience lists. */
	export interface GoogleAudienceFormProperties {

		/** Output only. The display name of the Google audience. . */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the Google audience. Assigned by the system. */
		googleAudienceId: FormControl<string | null | undefined>,

		/** Output only. The type of Google audience. . */
		googleAudienceType: FormControl<GoogleAudienceGoogleAudienceType | null | undefined>,

		/** Output only. The resource name of the google audience. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAudienceFormGroup() {
		return new FormGroup<GoogleAudienceFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			googleAudienceId: new FormControl<string | null | undefined>(undefined),
			googleAudienceType: new FormControl<GoogleAudienceGoogleAudienceType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAudienceGoogleAudienceType { GOOGLE_AUDIENCE_TYPE_UNSPECIFIED = 'GOOGLE_AUDIENCE_TYPE_UNSPECIFIED', GOOGLE_AUDIENCE_TYPE_AFFINITY = 'GOOGLE_AUDIENCE_TYPE_AFFINITY', GOOGLE_AUDIENCE_TYPE_IN_MARKET = 'GOOGLE_AUDIENCE_TYPE_IN_MARKET', GOOGLE_AUDIENCE_TYPE_INSTALLED_APPS = 'GOOGLE_AUDIENCE_TYPE_INSTALLED_APPS', GOOGLE_AUDIENCE_TYPE_NEW_MOBILE_DEVICES = 'GOOGLE_AUDIENCE_TYPE_NEW_MOBILE_DEVICES', GOOGLE_AUDIENCE_TYPE_LIFE_EVENT = 'GOOGLE_AUDIENCE_TYPE_LIFE_EVENT', GOOGLE_AUDIENCE_TYPE_EXTENDED_DEMOGRAPHIC = 'GOOGLE_AUDIENCE_TYPE_EXTENDED_DEMOGRAPHIC' }


	/** Media resource. */
	export interface GoogleBytestreamMedia {

		/** Name of the media resource. */
		resourceName?: string | null;
	}

	/** Media resource. */
	export interface GoogleBytestreamMediaFormProperties {

		/** Name of the media resource. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleBytestreamMediaFormGroup() {
		return new FormGroup<GoogleBytestreamMediaFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A guaranteed order. Guaranteed orders are parent entity of guaranteed inventory sources. When creating a guaranteed inventory source, a guaranteed order ID must be assigned to the inventory source. */
	export interface GuaranteedOrder {

		/** Output only. The ID of default advertiser of the guaranteed order. The default advertiser is either the read_write_advertiser_id or, if that is not set, the first advertiser listed in read_advertiser_ids. Otherwise, there is no default advertiser. */
		defaultAdvertiserId?: string | null;

		/** The ID of the default campaign that is assigned to the guaranteed order. The default campaign must belong to the default advertiser. */
		defaultCampaignId?: string | null;

		/** Required. The display name of the guaranteed order. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName?: string | null;

		/** Required. Immutable. The exchange where the guaranteed order originated. */
		exchange?: ExchangeAssignedTargetingOptionDetailsExchange | null;

		/** Output only. The unique identifier of the guaranteed order. The guaranteed order IDs have the format `{exchange}-{legacy_guaranteed_order_id}`. */
		guaranteedOrderId?: string | null;

		/** Output only. The legacy ID of the guaranteed order. Assigned by the original exchange. The legacy ID is unique within one exchange, but is not guaranteed to be unique across all guaranteed orders. This ID is used in SDF and UI. */
		legacyGuaranteedOrderId?: string | null;

		/** Output only. The resource name of the guaranteed order. */
		name?: string | null;

		/** Required. The publisher name of the guaranteed order. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		publisherName?: string | null;

		/** Whether all advertisers of read_write_partner_id have read access to the guaranteed order. Only applicable if read_write_partner_id is set. If True, overrides read_advertiser_ids. */
		readAccessInherited?: boolean | null;

		/** The IDs of advertisers with read access to the guaranteed order. This field must not include the advertiser assigned to read_write_advertiser_id if it is set. All advertisers in this field must belong to read_write_partner_id or the same partner as read_write_advertiser_id. */
		readAdvertiserIds?: Array<string>;

		/** The advertiser with read/write access to the guaranteed order. This is also the default advertiser of the guaranteed order. */
		readWriteAdvertiserId?: string | null;

		/** The partner with read/write access to the guaranteed order. */
		readWritePartnerId?: string | null;

		/** The status settings of the guaranteed order. */
		status?: GuaranteedOrderStatus;

		/** Output only. The timestamp when the guaranteed order was last updated. Assigned by the system. */
		updateTime?: string | null;
	}

	/** A guaranteed order. Guaranteed orders are parent entity of guaranteed inventory sources. When creating a guaranteed inventory source, a guaranteed order ID must be assigned to the inventory source. */
	export interface GuaranteedOrderFormProperties {

		/** Output only. The ID of default advertiser of the guaranteed order. The default advertiser is either the read_write_advertiser_id or, if that is not set, the first advertiser listed in read_advertiser_ids. Otherwise, there is no default advertiser. */
		defaultAdvertiserId: FormControl<string | null | undefined>,

		/** The ID of the default campaign that is assigned to the guaranteed order. The default campaign must belong to the default advertiser. */
		defaultCampaignId: FormControl<string | null | undefined>,

		/** Required. The display name of the guaranteed order. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Required. Immutable. The exchange where the guaranteed order originated. */
		exchange: FormControl<ExchangeAssignedTargetingOptionDetailsExchange | null | undefined>,

		/** Output only. The unique identifier of the guaranteed order. The guaranteed order IDs have the format `{exchange}-{legacy_guaranteed_order_id}`. */
		guaranteedOrderId: FormControl<string | null | undefined>,

		/** Output only. The legacy ID of the guaranteed order. Assigned by the original exchange. The legacy ID is unique within one exchange, but is not guaranteed to be unique across all guaranteed orders. This ID is used in SDF and UI. */
		legacyGuaranteedOrderId: FormControl<string | null | undefined>,

		/** Output only. The resource name of the guaranteed order. */
		name: FormControl<string | null | undefined>,

		/** Required. The publisher name of the guaranteed order. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		publisherName: FormControl<string | null | undefined>,

		/** Whether all advertisers of read_write_partner_id have read access to the guaranteed order. Only applicable if read_write_partner_id is set. If True, overrides read_advertiser_ids. */
		readAccessInherited: FormControl<boolean | null | undefined>,

		/** The advertiser with read/write access to the guaranteed order. This is also the default advertiser of the guaranteed order. */
		readWriteAdvertiserId: FormControl<string | null | undefined>,

		/** The partner with read/write access to the guaranteed order. */
		readWritePartnerId: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the guaranteed order was last updated. Assigned by the system. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGuaranteedOrderFormGroup() {
		return new FormGroup<GuaranteedOrderFormProperties>({
			defaultAdvertiserId: new FormControl<string | null | undefined>(undefined),
			defaultCampaignId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			exchange: new FormControl<ExchangeAssignedTargetingOptionDetailsExchange | null | undefined>(undefined),
			guaranteedOrderId: new FormControl<string | null | undefined>(undefined),
			legacyGuaranteedOrderId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			publisherName: new FormControl<string | null | undefined>(undefined),
			readAccessInherited: new FormControl<boolean | null | undefined>(undefined),
			readWriteAdvertiserId: new FormControl<string | null | undefined>(undefined),
			readWritePartnerId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status settings of the guaranteed order. */
	export interface GuaranteedOrderStatus {

		/** Output only. The configuration status of the guaranteed order. Acceptable values are `PENDING` and `COMPLETED`. A guaranteed order must be configured (fill in the required fields, choose creatives, and select a default campaign) before it can serve. Currently the configuration action can only be performed via UI. */
		configStatus?: GuaranteedOrderStatusConfigStatus | null;

		/** The user-provided reason for pausing this guaranteed order. Must be UTF-8 encoded with a maximum length of 100 bytes. Only applicable when entity_status is set to `ENTITY_STATUS_PAUSED`. */
		entityPauseReason?: string | null;

		/** Whether or not the guaranteed order is servable. Acceptable values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. Default value is `ENTITY_STATUS_ACTIVE`. */
		entityStatus?: AdGroupEntityStatus | null;
	}

	/** The status settings of the guaranteed order. */
	export interface GuaranteedOrderStatusFormProperties {

		/** Output only. The configuration status of the guaranteed order. Acceptable values are `PENDING` and `COMPLETED`. A guaranteed order must be configured (fill in the required fields, choose creatives, and select a default campaign) before it can serve. Currently the configuration action can only be performed via UI. */
		configStatus: FormControl<GuaranteedOrderStatusConfigStatus | null | undefined>,

		/** The user-provided reason for pausing this guaranteed order. Must be UTF-8 encoded with a maximum length of 100 bytes. Only applicable when entity_status is set to `ENTITY_STATUS_PAUSED`. */
		entityPauseReason: FormControl<string | null | undefined>,

		/** Whether or not the guaranteed order is servable. Acceptable values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. Default value is `ENTITY_STATUS_ACTIVE`. */
		entityStatus: FormControl<AdGroupEntityStatus | null | undefined>,
	}
	export function CreateGuaranteedOrderStatusFormGroup() {
		return new FormGroup<GuaranteedOrderStatusFormProperties>({
			configStatus: new FormControl<GuaranteedOrderStatusConfigStatus | null | undefined>(undefined),
			entityPauseReason: new FormControl<string | null | undefined>(undefined),
			entityStatus: new FormControl<AdGroupEntityStatus | null | undefined>(undefined),
		});

	}

	export enum GuaranteedOrderStatusConfigStatus { GUARANTEED_ORDER_CONFIG_STATUS_UNSPECIFIED = 'GUARANTEED_ORDER_CONFIG_STATUS_UNSPECIFIED', PENDING = 'PENDING', COMPLETED = 'COMPLETED' }


	/** Represents a targetable household income. This will be populated in the household_income_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`. */
	export interface HouseholdIncomeTargetingOptionDetails {

		/** Output only. The household income of an audience. */
		householdIncome?: HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncome | null;
	}

	/** Represents a targetable household income. This will be populated in the household_income_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`. */
	export interface HouseholdIncomeTargetingOptionDetailsFormProperties {

		/** Output only. The household income of an audience. */
		householdIncome: FormControl<HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncome | null | undefined>,
	}
	export function CreateHouseholdIncomeTargetingOptionDetailsFormGroup() {
		return new FormGroup<HouseholdIncomeTargetingOptionDetailsFormProperties>({
			householdIncome: new FormControl<HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncome | null | undefined>(undefined),
		});

	}


	/** A single insertion order. */
	export interface InsertionOrder {

		/** Output only. The unique ID of the advertiser the insertion order belongs to. */
		advertiserId?: string | null;

		/** Settings that control the bid strategy. Bid strategy determines the bid price. */
		bidStrategy?: BiddingStrategy;

		/** Settings that control how insertion order budget is allocated. */
		budget?: InsertionOrderBudget;

		/** Required. Immutable. The unique ID of the campaign that the insertion order belongs to. */
		campaignId?: string | null;

		/** Required. The display name of the insertion order. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName?: string | null;

		/** Required. Controls whether or not the insertion order can spend its budget and bid on inventory. * For CreateInsertionOrder method, only `ENTITY_STATUS_DRAFT` is allowed. To activate an insertion order, use UpdateInsertionOrder method and update the status to `ENTITY_STATUS_ACTIVE` after creation. * An insertion order cannot be changed back to `ENTITY_STATUS_DRAFT` status from any other status. * An insertion order cannot be set to `ENTITY_STATUS_ACTIVE` if its parent campaign is not active. */
		entityStatus?: AdGroupEntityStatus | null;

		/** Settings that control the number of times a user may be shown with the same ad during a given time period. */
		frequencyCap?: FrequencyCap;

		/** Output only. The unique ID of the insertion order. Assigned by the system. */
		insertionOrderId?: string | null;

		/** The type of insertion order. If this field is unspecified in creation, the value defaults to `RTB`. */
		insertionOrderType?: InsertionOrderInsertionOrderType | null;

		/** Integration details of an entry. */
		integrationDetails?: IntegrationDetails;

		/** Settings that control the key performance indicator, or KPI, of an insertion order. */
		kpi?: Kpi;

		/** Output only. The resource name of the insertion order. */
		name?: string | null;

		/** Settings that control the rate at which a budget is spent. */
		pacing?: Pacing;

		/** The partner costs associated with the insertion order. If absent or empty in CreateInsertionOrder method, the newly created insertion order will inherit partner costs from the partner settings. */
		partnerCosts?: Array<PartnerCost>;

		/** Output only. The reservation type of the insertion order. */
		reservationType?: LineItemReservationType | null;

		/** Output only. The timestamp when the insertion order was last updated. Assigned by the system. */
		updateTime?: string | null;
	}

	/** A single insertion order. */
	export interface InsertionOrderFormProperties {

		/** Output only. The unique ID of the advertiser the insertion order belongs to. */
		advertiserId: FormControl<string | null | undefined>,

		/** Required. Immutable. The unique ID of the campaign that the insertion order belongs to. */
		campaignId: FormControl<string | null | undefined>,

		/** Required. The display name of the insertion order. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Required. Controls whether or not the insertion order can spend its budget and bid on inventory. * For CreateInsertionOrder method, only `ENTITY_STATUS_DRAFT` is allowed. To activate an insertion order, use UpdateInsertionOrder method and update the status to `ENTITY_STATUS_ACTIVE` after creation. * An insertion order cannot be changed back to `ENTITY_STATUS_DRAFT` status from any other status. * An insertion order cannot be set to `ENTITY_STATUS_ACTIVE` if its parent campaign is not active. */
		entityStatus: FormControl<AdGroupEntityStatus | null | undefined>,

		/** Output only. The unique ID of the insertion order. Assigned by the system. */
		insertionOrderId: FormControl<string | null | undefined>,

		/** The type of insertion order. If this field is unspecified in creation, the value defaults to `RTB`. */
		insertionOrderType: FormControl<InsertionOrderInsertionOrderType | null | undefined>,

		/** Output only. The resource name of the insertion order. */
		name: FormControl<string | null | undefined>,

		/** Output only. The reservation type of the insertion order. */
		reservationType: FormControl<LineItemReservationType | null | undefined>,

		/** Output only. The timestamp when the insertion order was last updated. Assigned by the system. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateInsertionOrderFormGroup() {
		return new FormGroup<InsertionOrderFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			campaignId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			entityStatus: new FormControl<AdGroupEntityStatus | null | undefined>(undefined),
			insertionOrderId: new FormControl<string | null | undefined>(undefined),
			insertionOrderType: new FormControl<InsertionOrderInsertionOrderType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reservationType: new FormControl<LineItemReservationType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings that control how insertion order budget is allocated. */
	export interface InsertionOrderBudget {

		/** The type of automation used to manage bid and budget for the insertion order. If this field is unspecified in creation, the value defaults to `INSERTION_ORDER_AUTOMATION_TYPE_NONE`. */
		automationType?: InsertionOrderBudgetAutomationType | null;

		/** Required. The list of budget segments. Use a budget segment to specify a specific budget for a given period of time an insertion order is running. */
		budgetSegments?: Array<InsertionOrderBudgetSegment>;

		/** Required. Immutable. The budget unit specifies whether the budget is currency based or impression based. */
		budgetUnit?: LineItemBudgetBudgetUnit | null;
	}

	/** Settings that control how insertion order budget is allocated. */
	export interface InsertionOrderBudgetFormProperties {

		/** The type of automation used to manage bid and budget for the insertion order. If this field is unspecified in creation, the value defaults to `INSERTION_ORDER_AUTOMATION_TYPE_NONE`. */
		automationType: FormControl<InsertionOrderBudgetAutomationType | null | undefined>,

		/** Required. Immutable. The budget unit specifies whether the budget is currency based or impression based. */
		budgetUnit: FormControl<LineItemBudgetBudgetUnit | null | undefined>,
	}
	export function CreateInsertionOrderBudgetFormGroup() {
		return new FormGroup<InsertionOrderBudgetFormProperties>({
			automationType: new FormControl<InsertionOrderBudgetAutomationType | null | undefined>(undefined),
			budgetUnit: new FormControl<LineItemBudgetBudgetUnit | null | undefined>(undefined),
		});

	}

	export enum InsertionOrderBudgetAutomationType { INSERTION_ORDER_AUTOMATION_TYPE_UNSPECIFIED = 'INSERTION_ORDER_AUTOMATION_TYPE_UNSPECIFIED', INSERTION_ORDER_AUTOMATION_TYPE_BUDGET = 'INSERTION_ORDER_AUTOMATION_TYPE_BUDGET', INSERTION_ORDER_AUTOMATION_TYPE_NONE = 'INSERTION_ORDER_AUTOMATION_TYPE_NONE', INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET = 'INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET' }


	/** Settings that control the budget of a single budget segment. */
	export interface InsertionOrderBudgetSegment {

		/** Required. The budget amount the insertion order will spend for the given date_range. The amount is in micros. Must be greater than 0. For example, 500000000 represents 500 standard units of the currency. */
		budgetAmountMicros?: string | null;

		/** The budget_id of the campaign budget that this insertion order budget segment is a part of. */
		campaignBudgetId?: string | null;

		/** A date range. */
		dateRange?: DateRange;

		/** The budget segment description. It can be used to enter Purchase Order information for each budget segment and have that information printed on the invoices. Must be UTF-8 encoded. */
		description?: string | null;
	}

	/** Settings that control the budget of a single budget segment. */
	export interface InsertionOrderBudgetSegmentFormProperties {

		/** Required. The budget amount the insertion order will spend for the given date_range. The amount is in micros. Must be greater than 0. For example, 500000000 represents 500 standard units of the currency. */
		budgetAmountMicros: FormControl<string | null | undefined>,

		/** The budget_id of the campaign budget that this insertion order budget segment is a part of. */
		campaignBudgetId: FormControl<string | null | undefined>,

		/** The budget segment description. It can be used to enter Purchase Order information for each budget segment and have that information printed on the invoices. Must be UTF-8 encoded. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateInsertionOrderBudgetSegmentFormGroup() {
		return new FormGroup<InsertionOrderBudgetSegmentFormProperties>({
			budgetAmountMicros: new FormControl<string | null | undefined>(undefined),
			campaignBudgetId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InsertionOrderInsertionOrderType { INSERTION_ORDER_TYPE_UNSPECIFIED = 'INSERTION_ORDER_TYPE_UNSPECIFIED', RTB = 'RTB', OVER_THE_TOP = 'OVER_THE_TOP' }


	/** Settings that control the key performance indicator, or KPI, of an insertion order. */
	export interface Kpi {

		/** The goal amount, in micros of the advertiser's currency. Applicable when kpi_type is one of: * `KPI_TYPE_CPM` * `KPI_TYPE_CPC` * `KPI_TYPE_CPA` * `KPI_TYPE_CPIAVC` * `KPI_TYPE_VCPM` For example: 1500000 represents 1.5 standard units of the currency. */
		kpiAmountMicros?: string | null;

		/** The decimal representation of the goal percentage in micros. Applicable when kpi_type is one of: * `KPI_TYPE_CTR` * `KPI_TYPE_VIEWABILITY` * `KPI_TYPE_CLICK_CVR` * `KPI_TYPE_IMPRESSION_CVR` * `KPI_TYPE_VTR` * `KPI_TYPE_AUDIO_COMPLETION_RATE` * `KPI_TYPE_VIDEO_COMPLETION_RATE` For example: 70000 represents 7% (decimal 0.07). */
		kpiPercentageMicros?: string | null;

		/** A KPI string, which can be empty. Must be UTF-8 encoded with a length of no more than 100 characters. Applicable when kpi_type is `KPI_TYPE_OTHER`. */
		kpiString?: string | null;

		/** Required. The type of KPI. */
		kpiType?: KpiKpiType | null;
	}

	/** Settings that control the key performance indicator, or KPI, of an insertion order. */
	export interface KpiFormProperties {

		/** The goal amount, in micros of the advertiser's currency. Applicable when kpi_type is one of: * `KPI_TYPE_CPM` * `KPI_TYPE_CPC` * `KPI_TYPE_CPA` * `KPI_TYPE_CPIAVC` * `KPI_TYPE_VCPM` For example: 1500000 represents 1.5 standard units of the currency. */
		kpiAmountMicros: FormControl<string | null | undefined>,

		/** The decimal representation of the goal percentage in micros. Applicable when kpi_type is one of: * `KPI_TYPE_CTR` * `KPI_TYPE_VIEWABILITY` * `KPI_TYPE_CLICK_CVR` * `KPI_TYPE_IMPRESSION_CVR` * `KPI_TYPE_VTR` * `KPI_TYPE_AUDIO_COMPLETION_RATE` * `KPI_TYPE_VIDEO_COMPLETION_RATE` For example: 70000 represents 7% (decimal 0.07). */
		kpiPercentageMicros: FormControl<string | null | undefined>,

		/** A KPI string, which can be empty. Must be UTF-8 encoded with a length of no more than 100 characters. Applicable when kpi_type is `KPI_TYPE_OTHER`. */
		kpiString: FormControl<string | null | undefined>,

		/** Required. The type of KPI. */
		kpiType: FormControl<KpiKpiType | null | undefined>,
	}
	export function CreateKpiFormGroup() {
		return new FormGroup<KpiFormProperties>({
			kpiAmountMicros: new FormControl<string | null | undefined>(undefined),
			kpiPercentageMicros: new FormControl<string | null | undefined>(undefined),
			kpiString: new FormControl<string | null | undefined>(undefined),
			kpiType: new FormControl<KpiKpiType | null | undefined>(undefined),
		});

	}

	export enum KpiKpiType { KPI_TYPE_UNSPECIFIED = 'KPI_TYPE_UNSPECIFIED', KPI_TYPE_CPM = 'KPI_TYPE_CPM', KPI_TYPE_CPC = 'KPI_TYPE_CPC', KPI_TYPE_CPA = 'KPI_TYPE_CPA', KPI_TYPE_CTR = 'KPI_TYPE_CTR', KPI_TYPE_VIEWABILITY = 'KPI_TYPE_VIEWABILITY', KPI_TYPE_CPIAVC = 'KPI_TYPE_CPIAVC', KPI_TYPE_CPE = 'KPI_TYPE_CPE', KPI_TYPE_CLICK_CVR = 'KPI_TYPE_CLICK_CVR', KPI_TYPE_IMPRESSION_CVR = 'KPI_TYPE_IMPRESSION_CVR', KPI_TYPE_VCPM = 'KPI_TYPE_VCPM', KPI_TYPE_VTR = 'KPI_TYPE_VTR', KPI_TYPE_AUDIO_COMPLETION_RATE = 'KPI_TYPE_AUDIO_COMPLETION_RATE', KPI_TYPE_VIDEO_COMPLETION_RATE = 'KPI_TYPE_VIDEO_COMPLETION_RATE', KPI_TYPE_OTHER = 'KPI_TYPE_OTHER' }


	/** An inventory source. */
	export interface InventorySource {

		/** Whether the inventory source has a guaranteed or non-guaranteed delivery. */
		commitment?: InventorySourceCommitment | null;

		/** The creative requirements of the inventory source. Not applicable for auction packages. */
		creativeConfigs?: Array<CreativeConfig>;

		/** The ID in the exchange space that uniquely identifies the inventory source. Must be unique across buyers within each exchange but not necessarily unique across exchanges. */
		dealId?: string | null;

		/** The delivery method of the inventory source. * For non-guaranteed inventory sources, the only acceptable value is `INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC`. * For guaranteed inventory sources, acceptable values are `INVENTORY_SOURCE_DELIVERY_METHOD_TAG` and `INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC`. */
		deliveryMethod?: InventorySourceDeliveryMethod | null;

		/** The display name of the inventory source. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName?: string | null;

		/** The exchange to which the inventory source belongs. */
		exchange?: ExchangeAssignedTargetingOptionDetailsExchange | null;

		/** Immutable. The ID of the guaranteed order that this inventory source belongs to. Only applicable when commitment is `INVENTORY_SOURCE_COMMITMENT_GUARANTEED`. */
		guaranteedOrderId?: string | null;

		/** Output only. The unique ID of the inventory source. Assigned by the system. */
		inventorySourceId?: string | null;

		/** Output only. The product type of the inventory source, denoting the way through which it sells inventory. */
		inventorySourceProductType?: InventorySourceInventorySourceProductType | null;

		/** Denotes the type of the inventory source. */
		inventorySourceType?: InventorySourceInventorySourceType | null;

		/** Output only. The resource name of the inventory source. */
		name?: string | null;

		/** The publisher/seller name of the inventory source. */
		publisherName?: string | null;

		/** The rate related settings of the inventory source. */
		rateDetails?: RateDetails;

		/** Output only. The IDs of advertisers with read-only access to the inventory source. */
		readAdvertiserIds?: Array<string>;

		/** Output only. The IDs of partners with read-only access to the inventory source. All advertisers of partners in this field inherit read-only access to the inventory source. */
		readPartnerIds?: Array<string>;

		/** The partner or advertisers with access to the inventory source. */
		readWriteAccessors?: InventorySourceAccessors;

		/** The status related settings of the inventory source. */
		status?: InventorySourceStatus;

		/** A time range. */
		timeRange?: TimeRange;

		/** Output only. The timestamp when the inventory source was last updated. Assigned by the system. */
		updateTime?: string | null;
	}

	/** An inventory source. */
	export interface InventorySourceFormProperties {

		/** Whether the inventory source has a guaranteed or non-guaranteed delivery. */
		commitment: FormControl<InventorySourceCommitment | null | undefined>,

		/** The ID in the exchange space that uniquely identifies the inventory source. Must be unique across buyers within each exchange but not necessarily unique across exchanges. */
		dealId: FormControl<string | null | undefined>,

		/** The delivery method of the inventory source. * For non-guaranteed inventory sources, the only acceptable value is `INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC`. * For guaranteed inventory sources, acceptable values are `INVENTORY_SOURCE_DELIVERY_METHOD_TAG` and `INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC`. */
		deliveryMethod: FormControl<InventorySourceDeliveryMethod | null | undefined>,

		/** The display name of the inventory source. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** The exchange to which the inventory source belongs. */
		exchange: FormControl<ExchangeAssignedTargetingOptionDetailsExchange | null | undefined>,

		/** Immutable. The ID of the guaranteed order that this inventory source belongs to. Only applicable when commitment is `INVENTORY_SOURCE_COMMITMENT_GUARANTEED`. */
		guaranteedOrderId: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the inventory source. Assigned by the system. */
		inventorySourceId: FormControl<string | null | undefined>,

		/** Output only. The product type of the inventory source, denoting the way through which it sells inventory. */
		inventorySourceProductType: FormControl<InventorySourceInventorySourceProductType | null | undefined>,

		/** Denotes the type of the inventory source. */
		inventorySourceType: FormControl<InventorySourceInventorySourceType | null | undefined>,

		/** Output only. The resource name of the inventory source. */
		name: FormControl<string | null | undefined>,

		/** The publisher/seller name of the inventory source. */
		publisherName: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the inventory source was last updated. Assigned by the system. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateInventorySourceFormGroup() {
		return new FormGroup<InventorySourceFormProperties>({
			commitment: new FormControl<InventorySourceCommitment | null | undefined>(undefined),
			dealId: new FormControl<string | null | undefined>(undefined),
			deliveryMethod: new FormControl<InventorySourceDeliveryMethod | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			exchange: new FormControl<ExchangeAssignedTargetingOptionDetailsExchange | null | undefined>(undefined),
			guaranteedOrderId: new FormControl<string | null | undefined>(undefined),
			inventorySourceId: new FormControl<string | null | undefined>(undefined),
			inventorySourceProductType: new FormControl<InventorySourceInventorySourceProductType | null | undefined>(undefined),
			inventorySourceType: new FormControl<InventorySourceInventorySourceType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			publisherName: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InventorySourceCommitment { INVENTORY_SOURCE_COMMITMENT_UNSPECIFIED = 'INVENTORY_SOURCE_COMMITMENT_UNSPECIFIED', INVENTORY_SOURCE_COMMITMENT_GUARANTEED = 'INVENTORY_SOURCE_COMMITMENT_GUARANTEED', INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED = 'INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED' }

	export enum InventorySourceDeliveryMethod { INVENTORY_SOURCE_DELIVERY_METHOD_UNSPECIFIED = 'INVENTORY_SOURCE_DELIVERY_METHOD_UNSPECIFIED', INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC = 'INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC', INVENTORY_SOURCE_DELIVERY_METHOD_TAG = 'INVENTORY_SOURCE_DELIVERY_METHOD_TAG' }

	export enum InventorySourceInventorySourceProductType { INVENTORY_SOURCE_PRODUCT_TYPE_UNSPECIFIED = 'INVENTORY_SOURCE_PRODUCT_TYPE_UNSPECIFIED', PREFERRED_DEAL = 'PREFERRED_DEAL', PRIVATE_AUCTION = 'PRIVATE_AUCTION', PROGRAMMATIC_GUARANTEED = 'PROGRAMMATIC_GUARANTEED', TAG_GUARANTEED = 'TAG_GUARANTEED', YOUTUBE_RESERVE = 'YOUTUBE_RESERVE', INSTANT_RESERVE = 'INSTANT_RESERVE', GUARANTEED_PACKAGE = 'GUARANTEED_PACKAGE', PROGRAMMATIC_TV = 'PROGRAMMATIC_TV', AUCTION_PACKAGE = 'AUCTION_PACKAGE' }

	export enum InventorySourceInventorySourceType { INVENTORY_SOURCE_TYPE_UNSPECIFIED = 'INVENTORY_SOURCE_TYPE_UNSPECIFIED', INVENTORY_SOURCE_TYPE_PRIVATE = 'INVENTORY_SOURCE_TYPE_PRIVATE', INVENTORY_SOURCE_TYPE_AUCTION_PACKAGE = 'INVENTORY_SOURCE_TYPE_AUCTION_PACKAGE' }


	/** The rate related settings of the inventory source. */
	export interface RateDetails {

		/** The rate type. Acceptable values are `INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED`, `INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR`, and `INVENTORY_SOURCE_RATE_TYPE_CPD`. */
		inventorySourceRateType?: RateDetailsInventorySourceRateType | null;

		/** Represents an amount of money with its currency type. */
		minimumSpend?: Money;

		/** Represents an amount of money with its currency type. */
		rate?: Money;

		/** Required for guaranteed inventory sources. The number of impressions guaranteed by the seller. */
		unitsPurchased?: string | null;
	}

	/** The rate related settings of the inventory source. */
	export interface RateDetailsFormProperties {

		/** The rate type. Acceptable values are `INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED`, `INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR`, and `INVENTORY_SOURCE_RATE_TYPE_CPD`. */
		inventorySourceRateType: FormControl<RateDetailsInventorySourceRateType | null | undefined>,

		/** Required for guaranteed inventory sources. The number of impressions guaranteed by the seller. */
		unitsPurchased: FormControl<string | null | undefined>,
	}
	export function CreateRateDetailsFormGroup() {
		return new FormGroup<RateDetailsFormProperties>({
			inventorySourceRateType: new FormControl<RateDetailsInventorySourceRateType | null | undefined>(undefined),
			unitsPurchased: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RateDetailsInventorySourceRateType { INVENTORY_SOURCE_RATE_TYPE_UNSPECIFIED = 'INVENTORY_SOURCE_RATE_TYPE_UNSPECIFIED', INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED = 'INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED', INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR = 'INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR', INVENTORY_SOURCE_RATE_TYPE_CPD = 'INVENTORY_SOURCE_RATE_TYPE_CPD', INVENTORY_SOURCE_RATE_TYPE_FLAT = 'INVENTORY_SOURCE_RATE_TYPE_FLAT' }


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


	/** The partner or advertisers with access to the inventory source. */
	export interface InventorySourceAccessors {

		/** The advertisers with access to the inventory source. */
		advertisers?: InventorySourceAccessorsAdvertiserAccessors;

		/** The partner with access to the inventory source. */
		partner?: InventorySourceAccessorsPartnerAccessor;
	}

	/** The partner or advertisers with access to the inventory source. */
	export interface InventorySourceAccessorsFormProperties {
	}
	export function CreateInventorySourceAccessorsFormGroup() {
		return new FormGroup<InventorySourceAccessorsFormProperties>({
		});

	}


	/** The advertisers with access to the inventory source. */
	export interface InventorySourceAccessorsAdvertiserAccessors {

		/** The IDs of the advertisers. */
		advertiserIds?: Array<string>;
	}

	/** The advertisers with access to the inventory source. */
	export interface InventorySourceAccessorsAdvertiserAccessorsFormProperties {
	}
	export function CreateInventorySourceAccessorsAdvertiserAccessorsFormGroup() {
		return new FormGroup<InventorySourceAccessorsAdvertiserAccessorsFormProperties>({
		});

	}


	/** The partner with access to the inventory source. */
	export interface InventorySourceAccessorsPartnerAccessor {

		/** The ID of the partner. */
		partnerId?: string | null;
	}

	/** The partner with access to the inventory source. */
	export interface InventorySourceAccessorsPartnerAccessorFormProperties {

		/** The ID of the partner. */
		partnerId: FormControl<string | null | undefined>,
	}
	export function CreateInventorySourceAccessorsPartnerAccessorFormGroup() {
		return new FormGroup<InventorySourceAccessorsPartnerAccessorFormProperties>({
			partnerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status related settings of the inventory source. */
	export interface InventorySourceStatus {

		/** Output only. The configuration status of the inventory source. Only applicable for guaranteed inventory sources. Acceptable values are `INVENTORY_SOURCE_CONFIG_STATUS_PENDING` and `INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED`. An inventory source must be configured (fill in the required fields, choose creatives, and select a default campaign) before it can serve. */
		configStatus?: InventorySourceStatusConfigStatus | null;

		/** The user-provided reason for pausing this inventory source. Must not exceed 100 characters. Only applicable when entity_status is set to `ENTITY_STATUS_PAUSED`. */
		entityPauseReason?: string | null;

		/** Whether or not the inventory source is servable. Acceptable values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. Default value is `ENTITY_STATUS_ACTIVE`. */
		entityStatus?: AdGroupEntityStatus | null;

		/** Output only. The seller-provided reason for pausing this inventory source. Only applicable for inventory sources synced directly from the publishers and when seller_status is set to `ENTITY_STATUS_PAUSED`. */
		sellerPauseReason?: string | null;

		/** Output only. The status set by the seller for the inventory source. Only applicable for inventory sources synced directly from the publishers. Acceptable values are `ENTITY_STATUS_ACTIVE` and `ENTITY_STATUS_PAUSED`. */
		sellerStatus?: AdGroupEntityStatus | null;
	}

	/** The status related settings of the inventory source. */
	export interface InventorySourceStatusFormProperties {

		/** Output only. The configuration status of the inventory source. Only applicable for guaranteed inventory sources. Acceptable values are `INVENTORY_SOURCE_CONFIG_STATUS_PENDING` and `INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED`. An inventory source must be configured (fill in the required fields, choose creatives, and select a default campaign) before it can serve. */
		configStatus: FormControl<InventorySourceStatusConfigStatus | null | undefined>,

		/** The user-provided reason for pausing this inventory source. Must not exceed 100 characters. Only applicable when entity_status is set to `ENTITY_STATUS_PAUSED`. */
		entityPauseReason: FormControl<string | null | undefined>,

		/** Whether or not the inventory source is servable. Acceptable values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. Default value is `ENTITY_STATUS_ACTIVE`. */
		entityStatus: FormControl<AdGroupEntityStatus | null | undefined>,

		/** Output only. The seller-provided reason for pausing this inventory source. Only applicable for inventory sources synced directly from the publishers and when seller_status is set to `ENTITY_STATUS_PAUSED`. */
		sellerPauseReason: FormControl<string | null | undefined>,

		/** Output only. The status set by the seller for the inventory source. Only applicable for inventory sources synced directly from the publishers. Acceptable values are `ENTITY_STATUS_ACTIVE` and `ENTITY_STATUS_PAUSED`. */
		sellerStatus: FormControl<AdGroupEntityStatus | null | undefined>,
	}
	export function CreateInventorySourceStatusFormGroup() {
		return new FormGroup<InventorySourceStatusFormProperties>({
			configStatus: new FormControl<InventorySourceStatusConfigStatus | null | undefined>(undefined),
			entityPauseReason: new FormControl<string | null | undefined>(undefined),
			entityStatus: new FormControl<AdGroupEntityStatus | null | undefined>(undefined),
			sellerPauseReason: new FormControl<string | null | undefined>(undefined),
			sellerStatus: new FormControl<AdGroupEntityStatus | null | undefined>(undefined),
		});

	}

	export enum InventorySourceStatusConfigStatus { INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED = 'INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED', INVENTORY_SOURCE_CONFIG_STATUS_PENDING = 'INVENTORY_SOURCE_CONFIG_STATUS_PENDING', INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED = 'INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED' }


	/** A time range. */
	export interface TimeRange {

		/** Required. The upper bound of a time range, inclusive. */
		endTime?: string | null;

		/** Required. The lower bound of a time range, inclusive. */
		startTime?: string | null;
	}

	/** A time range. */
	export interface TimeRangeFormProperties {

		/** Required. The upper bound of a time range, inclusive. */
		endTime: FormControl<string | null | undefined>,

		/** Required. The lower bound of a time range, inclusive. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTimeRangeFormGroup() {
		return new FormGroup<TimeRangeFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of targetable inventory sources. */
	export interface InventorySourceGroup {

		/** Required. The display name of the inventory source group. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName?: string | null;

		/** Output only. The unique ID of the inventory source group. Assigned by the system. */
		inventorySourceGroupId?: string | null;

		/** Output only. The resource name of the inventory source group. */
		name?: string | null;
	}

	/** A collection of targetable inventory sources. */
	export interface InventorySourceGroupFormProperties {

		/** Required. The display name of the inventory source group. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the inventory source group. Assigned by the system. */
		inventorySourceGroupId: FormControl<string | null | undefined>,

		/** Output only. The resource name of the inventory source group. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateInventorySourceGroupFormGroup() {
		return new FormGroup<InventorySourceGroupFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			inventorySourceGroupId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single invoice. */
	export interface Invoice {

		/** The budget grouping ID for this invoice. This field will only be set if the invoice level of the corresponding billing profile was set to "Budget invoice grouping ID". */
		budgetInvoiceGroupingId?: string | null;

		/** The list of summarized information for each budget associated with this invoice. This field will only be set if the invoice detail level of the corresponding billing profile was set to "Budget level PO". */
		budgetSummaries?: Array<BudgetSummary>;

		/** The ID of the original invoice being adjusted by this invoice, if applicable. May appear on the invoice PDF as `Reference invoice number`. If replaced_invoice_ids is set, this field will be empty. */
		correctedInvoiceId?: string | null;

		/** The currency used in the invoice in ISO 4217 format. */
		currencyCode?: string | null;

		/** The display name of the invoice. */
		displayName?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		dueDate?: Date;

		/** The unique ID of the invoice. */
		invoiceId?: string | null;

		/** The type of invoice document. */
		invoiceType?: InvoiceInvoiceType | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		issueDate?: Date;

		/** The resource name of the invoice. */
		name?: string | null;

		/** The total amount of costs or adjustments not tied to a particular budget, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar. */
		nonBudgetMicros?: string | null;

		/** The ID of the payments account the invoice belongs to. Appears on the invoice PDF as `Billing Account Number`. */
		paymentsAccountId?: string | null;

		/** The ID of the payments profile the invoice belongs to. Appears on the invoice PDF as `Billing ID`. */
		paymentsProfileId?: string | null;

		/** The URL to download a PDF copy of the invoice. This URL is user specific and requires a valid OAuth 2.0 access token to access. The access token must be provided in an `Authorization: Bearer` HTTP header and be authorized for one of the following scopes: * `https://www.googleapis.com/auth/display-video-mediaplanning` * `https://www.googleapis.com/auth/display-video` The URL will be valid for 7 days after retrieval of this invoice object or until this invoice is retrieved again. */
		pdfUrl?: string | null;

		/** Purchase order number associated with the invoice. */
		purchaseOrderNumber?: string | null;

		/** The ID(s) of any originally issued invoice that is being cancelled by this invoice, if applicable. Multiple invoices may be listed if those invoices are being consolidated into a single invoice. May appear on invoice PDF as `Replaced invoice numbers`. If corrected_invoice_id is set, this field will be empty. */
		replacedInvoiceIds?: Array<string>;

		/** A date range. */
		serviceDateRange?: DateRange;

		/** The pre-tax subtotal amount, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar. */
		subtotalAmountMicros?: string | null;

		/** The invoice total amount, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar. */
		totalAmountMicros?: string | null;

		/** The sum of all taxes in invoice, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar. */
		totalTaxAmountMicros?: string | null;
	}

	/** A single invoice. */
	export interface InvoiceFormProperties {

		/** The budget grouping ID for this invoice. This field will only be set if the invoice level of the corresponding billing profile was set to "Budget invoice grouping ID". */
		budgetInvoiceGroupingId: FormControl<string | null | undefined>,

		/** The ID of the original invoice being adjusted by this invoice, if applicable. May appear on the invoice PDF as `Reference invoice number`. If replaced_invoice_ids is set, this field will be empty. */
		correctedInvoiceId: FormControl<string | null | undefined>,

		/** The currency used in the invoice in ISO 4217 format. */
		currencyCode: FormControl<string | null | undefined>,

		/** The display name of the invoice. */
		displayName: FormControl<string | null | undefined>,

		/** The unique ID of the invoice. */
		invoiceId: FormControl<string | null | undefined>,

		/** The type of invoice document. */
		invoiceType: FormControl<InvoiceInvoiceType | null | undefined>,

		/** The resource name of the invoice. */
		name: FormControl<string | null | undefined>,

		/** The total amount of costs or adjustments not tied to a particular budget, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar. */
		nonBudgetMicros: FormControl<string | null | undefined>,

		/** The ID of the payments account the invoice belongs to. Appears on the invoice PDF as `Billing Account Number`. */
		paymentsAccountId: FormControl<string | null | undefined>,

		/** The ID of the payments profile the invoice belongs to. Appears on the invoice PDF as `Billing ID`. */
		paymentsProfileId: FormControl<string | null | undefined>,

		/** The URL to download a PDF copy of the invoice. This URL is user specific and requires a valid OAuth 2.0 access token to access. The access token must be provided in an `Authorization: Bearer` HTTP header and be authorized for one of the following scopes: * `https://www.googleapis.com/auth/display-video-mediaplanning` * `https://www.googleapis.com/auth/display-video` The URL will be valid for 7 days after retrieval of this invoice object or until this invoice is retrieved again. */
		pdfUrl: FormControl<string | null | undefined>,

		/** Purchase order number associated with the invoice. */
		purchaseOrderNumber: FormControl<string | null | undefined>,

		/** The pre-tax subtotal amount, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar. */
		subtotalAmountMicros: FormControl<string | null | undefined>,

		/** The invoice total amount, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar. */
		totalAmountMicros: FormControl<string | null | undefined>,

		/** The sum of all taxes in invoice, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar. */
		totalTaxAmountMicros: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceFormGroup() {
		return new FormGroup<InvoiceFormProperties>({
			budgetInvoiceGroupingId: new FormControl<string | null | undefined>(undefined),
			correctedInvoiceId: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			invoiceId: new FormControl<string | null | undefined>(undefined),
			invoiceType: new FormControl<InvoiceInvoiceType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nonBudgetMicros: new FormControl<string | null | undefined>(undefined),
			paymentsAccountId: new FormControl<string | null | undefined>(undefined),
			paymentsProfileId: new FormControl<string | null | undefined>(undefined),
			pdfUrl: new FormControl<string | null | undefined>(undefined),
			purchaseOrderNumber: new FormControl<string | null | undefined>(undefined),
			subtotalAmountMicros: new FormControl<string | null | undefined>(undefined),
			totalAmountMicros: new FormControl<string | null | undefined>(undefined),
			totalTaxAmountMicros: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InvoiceInvoiceType { INVOICE_TYPE_UNSPECIFIED = 'INVOICE_TYPE_UNSPECIFIED', INVOICE_TYPE_CREDIT = 'INVOICE_TYPE_CREDIT', INVOICE_TYPE_INVOICE = 'INVOICE_TYPE_INVOICE' }


	/** Represents a targetable language. This will be populated in the language_details field when targeting_type is `TARGETING_TYPE_LANGUAGE`. */
	export interface LanguageTargetingOptionDetails {

		/** Output only. The display name of the language (e.g., "French"). */
		displayName?: string | null;
	}

	/** Represents a targetable language. This will be populated in the language_details field when targeting_type is `TARGETING_TYPE_LANGUAGE`. */
	export interface LanguageTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the language (e.g., "French"). */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateLanguageTargetingOptionDetailsFormGroup() {
		return new FormGroup<LanguageTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAdGroupAdsResponse {

		/** The list of ad group ads. This list will be absent if empty. */
		adGroupAds?: Array<AdGroupAd>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAdGroupAds` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListAdGroupAdsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAdGroupAds` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAdGroupAdsResponseFormGroup() {
		return new FormGroup<ListAdGroupAdsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListAdGroupAssignedTargetingOptions. */
	export interface ListAdGroupAssignedTargetingOptionsResponse {

		/** The list of assigned targeting options. This list will be absent if empty. */
		assignedTargetingOptions?: Array<AssignedTargetingOption>;

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListAdGroupAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more AssignedTargetingOption resources to return. */
		nextPageToken?: string | null;
	}

	/** Response message for ListAdGroupAssignedTargetingOptions. */
	export interface ListAdGroupAssignedTargetingOptionsResponseFormProperties {

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListAdGroupAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more AssignedTargetingOption resources to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAdGroupAssignedTargetingOptionsResponseFormGroup() {
		return new FormGroup<ListAdGroupAssignedTargetingOptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAdGroupsResponse {

		/** The list of ad groups. This list will be absent if empty. */
		adGroups?: Array<AdGroup>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAdGroups` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListAdGroupsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAdGroups` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAdGroupsResponseFormGroup() {
		return new FormGroup<ListAdGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListAdvertiserAssignedTargetingOptions. */
	export interface ListAdvertiserAssignedTargetingOptionsResponse {

		/** The list of assigned targeting options. This list will be absent if empty. */
		assignedTargetingOptions?: Array<AssignedTargetingOption>;

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListAdvertiserAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. */
		nextPageToken?: string | null;
	}

	/** Response message for ListAdvertiserAssignedTargetingOptions. */
	export interface ListAdvertiserAssignedTargetingOptionsResponseFormProperties {

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListAdvertiserAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAdvertiserAssignedTargetingOptionsResponseFormGroup() {
		return new FormGroup<ListAdvertiserAssignedTargetingOptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAdvertisersResponse {

		/** The list of advertisers. This list will be absent if empty. */
		advertisers?: Array<Advertiser>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAdvertisers` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListAdvertisersResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAdvertisers` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAdvertisersResponseFormGroup() {
		return new FormGroup<ListAdvertisersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for AssignedInventorySourceService.ListAssignedInventorySources. */
	export interface ListAssignedInventorySourcesResponse {

		/** The list of assigned inventory sources. This list will be absent if empty. */
		assignedInventorySources?: Array<AssignedInventorySource>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAssignedInventorySources` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for AssignedInventorySourceService.ListAssignedInventorySources. */
	export interface ListAssignedInventorySourcesResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAssignedInventorySources` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssignedInventorySourcesResponseFormGroup() {
		return new FormGroup<ListAssignedInventorySourcesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for AssignedLocationService.ListAssignedLocations. */
	export interface ListAssignedLocationsResponse {

		/** The list of assigned locations. This list will be absent if empty. */
		assignedLocations?: Array<AssignedLocation>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAssignedLocations` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for AssignedLocationService.ListAssignedLocations. */
	export interface ListAssignedLocationsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAssignedLocations` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssignedLocationsResponseFormGroup() {
		return new FormGroup<ListAssignedLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListCampaignAssignedTargetingOptions. */
	export interface ListCampaignAssignedTargetingOptionsResponse {

		/** The list of assigned targeting options. This list will be absent if empty. */
		assignedTargetingOptions?: Array<AssignedTargetingOption>;

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListCampaignAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. */
		nextPageToken?: string | null;
	}

	/** Response message for ListCampaignAssignedTargetingOptions. */
	export interface ListCampaignAssignedTargetingOptionsResponseFormProperties {

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListCampaignAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCampaignAssignedTargetingOptionsResponseFormGroup() {
		return new FormGroup<ListCampaignAssignedTargetingOptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCampaignsResponse {

		/** The list of campaigns. This list will be absent if empty. */
		campaigns?: Array<Campaign>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCampaigns` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListCampaignsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCampaigns` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCampaignsResponseFormGroup() {
		return new FormGroup<ListCampaignsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListChannelsResponse {

		/** The list of channels. This list will be absent if empty. */
		channels?: Array<Channel>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListChannels` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListChannelsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListChannels` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListChannelsResponseFormGroup() {
		return new FormGroup<ListChannelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCombinedAudiencesResponse {

		/** The list of combined audiences. This list will be absent if empty. */
		combinedAudiences?: Array<CombinedAudience>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCombinedAudiences` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListCombinedAudiencesResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCombinedAudiences` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCombinedAudiencesResponseFormGroup() {
		return new FormGroup<ListCombinedAudiencesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCreativesResponse {

		/** The list of creatives. This list will be absent if empty. */
		creatives?: Array<Creative>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCreativesRequest` method to retrieve the next page of results. If this field is null, it means this is the last page. */
		nextPageToken?: string | null;
	}
	export interface ListCreativesResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCreativesRequest` method to retrieve the next page of results. If this field is null, it means this is the last page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCreativesResponseFormGroup() {
		return new FormGroup<ListCreativesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomBiddingAlgorithmRulesResponse {

		/** The list of CustomBiddingAlgorithmRules resources. This list will be absent if empty. */
		customBiddingRules?: Array<CustomBiddingAlgorithmRules>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCustomBiddingAlgorithmRulesRequest` method to retrieve the next page of results. If this field is null, it means this is the last page. */
		nextPageToken?: string | null;
	}
	export interface ListCustomBiddingAlgorithmRulesResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCustomBiddingAlgorithmRulesRequest` method to retrieve the next page of results. If this field is null, it means this is the last page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomBiddingAlgorithmRulesResponseFormGroup() {
		return new FormGroup<ListCustomBiddingAlgorithmRulesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomBiddingAlgorithmsResponse {

		/** The list of custom bidding algorithms. This list will be absent if empty. */
		customBiddingAlgorithms?: Array<CustomBiddingAlgorithm>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCustomBiddingAlgorithmsRequest` method to retrieve the next page of results. If this field is null, it means this is the last page. */
		nextPageToken?: string | null;
	}
	export interface ListCustomBiddingAlgorithmsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCustomBiddingAlgorithmsRequest` method to retrieve the next page of results. If this field is null, it means this is the last page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomBiddingAlgorithmsResponseFormGroup() {
		return new FormGroup<ListCustomBiddingAlgorithmsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomBiddingScriptsResponse {

		/** The list of custom bidding scripts. This list will be absent if empty. */
		customBiddingScripts?: Array<CustomBiddingScript>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCustomBiddingScriptsRequest` method to retrieve the next page of results. If this field is null, it means this is the last page. */
		nextPageToken?: string | null;
	}
	export interface ListCustomBiddingScriptsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCustomBiddingScriptsRequest` method to retrieve the next page of results. If this field is null, it means this is the last page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomBiddingScriptsResponseFormGroup() {
		return new FormGroup<ListCustomBiddingScriptsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomListsResponse {

		/** The list of custom lists. This list will be absent if empty. */
		customLists?: Array<CustomList>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCustomLists` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListCustomListsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCustomLists` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomListsResponseFormGroup() {
		return new FormGroup<ListCustomListsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFirstAndThirdPartyAudiencesResponse {

		/** The list of first and third party audiences. Audience size properties will not be included. This list will be absent if empty. */
		firstAndThirdPartyAudiences?: Array<FirstAndThirdPartyAudience>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListFirstAndThirdPartyAudiences` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListFirstAndThirdPartyAudiencesResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListFirstAndThirdPartyAudiences` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFirstAndThirdPartyAudiencesResponseFormGroup() {
		return new FormGroup<ListFirstAndThirdPartyAudiencesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGoogleAudiencesResponse {

		/** The list of Google audiences. This list will be absent if empty. */
		googleAudiences?: Array<GoogleAudience>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListGoogleAudiences` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListGoogleAudiencesResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListGoogleAudiences` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGoogleAudiencesResponseFormGroup() {
		return new FormGroup<ListGoogleAudiencesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGuaranteedOrdersResponse {

		/** The list of guaranteed orders. This list will be absent if empty. */
		guaranteedOrders?: Array<GuaranteedOrder>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListGuaranteedOrders` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListGuaranteedOrdersResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListGuaranteedOrders` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGuaranteedOrdersResponseFormGroup() {
		return new FormGroup<ListGuaranteedOrdersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInsertionOrderAssignedTargetingOptionsResponse {

		/** The list of assigned targeting options. This list will be absent if empty. */
		assignedTargetingOptions?: Array<AssignedTargetingOption>;

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListInsertionOrderAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. */
		nextPageToken?: string | null;
	}
	export interface ListInsertionOrderAssignedTargetingOptionsResponseFormProperties {

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListInsertionOrderAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInsertionOrderAssignedTargetingOptionsResponseFormGroup() {
		return new FormGroup<ListInsertionOrderAssignedTargetingOptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInsertionOrdersResponse {

		/** The list of insertion orders. This list will be absent if empty. */
		insertionOrders?: Array<InsertionOrder>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInsertionOrders` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListInsertionOrdersResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInsertionOrders` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInsertionOrdersResponseFormGroup() {
		return new FormGroup<ListInsertionOrdersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for InventorySourceGroupService.ListInventorySourceGroups. */
	export interface ListInventorySourceGroupsResponse {

		/** The list of inventory source groups. This list will be absent if empty. */
		inventorySourceGroups?: Array<InventorySourceGroup>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInventorySourceGroups` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for InventorySourceGroupService.ListInventorySourceGroups. */
	export interface ListInventorySourceGroupsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInventorySourceGroups` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInventorySourceGroupsResponseFormGroup() {
		return new FormGroup<ListInventorySourceGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInventorySourcesResponse {

		/** The list of inventory sources. This list will be absent if empty. */
		inventorySources?: Array<InventorySource>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInventorySources` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListInventorySourcesResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInventorySources` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInventorySourcesResponseFormGroup() {
		return new FormGroup<ListInventorySourcesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInvoicesResponse {

		/** The list of invoices. This list will be absent if empty. */
		invoices?: Array<Invoice>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInvoices` method to retrieve the next page of results. This token will be absent if there are no more invoices to return. */
		nextPageToken?: string | null;
	}
	export interface ListInvoicesResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInvoices` method to retrieve the next page of results. This token will be absent if there are no more invoices to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInvoicesResponseFormGroup() {
		return new FormGroup<ListInvoicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListLineItemAssignedTargetingOptions. */
	export interface ListLineItemAssignedTargetingOptionsResponse {

		/** The list of assigned targeting options. This list will be absent if empty. */
		assignedTargetingOptions?: Array<AssignedTargetingOption>;

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListLineItemAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. */
		nextPageToken?: string | null;
	}

	/** Response message for ListLineItemAssignedTargetingOptions. */
	export interface ListLineItemAssignedTargetingOptionsResponseFormProperties {

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListLineItemAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLineItemAssignedTargetingOptionsResponseFormGroup() {
		return new FormGroup<ListLineItemAssignedTargetingOptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLineItemsResponse {

		/** The list of line items. This list will be absent if empty. */
		lineItems?: Array<LineItem>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListLineItems` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListLineItemsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListLineItems` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLineItemsResponseFormGroup() {
		return new FormGroup<ListLineItemsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLocationListsResponse {

		/** The list of location lists. This list will be absent if empty. */
		locationLists?: Array<LocationList>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListLocationLists` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListLocationListsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListLocationLists` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationListsResponseFormGroup() {
		return new FormGroup<ListLocationListsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of locations used for targeting. */
	export interface LocationList {

		/** Required. Immutable. The unique ID of the advertiser the location list belongs to. */
		advertiserId?: string | null;

		/** Required. The display name of the location list. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName?: string | null;

		/** Output only. The unique ID of the location list. Assigned by the system. */
		locationListId?: string | null;

		/** Required. Immutable. The type of location. All locations in the list will share this type. */
		locationType?: LocationListLocationType | null;

		/** Output only. The resource name of the location list. */
		name?: string | null;
	}

	/** A list of locations used for targeting. */
	export interface LocationListFormProperties {

		/** Required. Immutable. The unique ID of the advertiser the location list belongs to. */
		advertiserId: FormControl<string | null | undefined>,

		/** Required. The display name of the location list. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the location list. Assigned by the system. */
		locationListId: FormControl<string | null | undefined>,

		/** Required. Immutable. The type of location. All locations in the list will share this type. */
		locationType: FormControl<LocationListLocationType | null | undefined>,

		/** Output only. The resource name of the location list. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationListFormGroup() {
		return new FormGroup<LocationListFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			locationListId: new FormControl<string | null | undefined>(undefined),
			locationType: new FormControl<LocationListLocationType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LocationListLocationType { TARGETING_LOCATION_TYPE_UNSPECIFIED = 'TARGETING_LOCATION_TYPE_UNSPECIFIED', TARGETING_LOCATION_TYPE_PROXIMITY = 'TARGETING_LOCATION_TYPE_PROXIMITY', TARGETING_LOCATION_TYPE_REGIONAL = 'TARGETING_LOCATION_TYPE_REGIONAL' }


	/** Response message for NegativeKeywordListService.ListNegativeKeywordLists. */
	export interface ListNegativeKeywordListsResponse {

		/** The list of negative keyword lists. This list will be absent if empty. */
		negativeKeywordLists?: Array<NegativeKeywordList>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListNegativeKeywordLists` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for NegativeKeywordListService.ListNegativeKeywordLists. */
	export interface ListNegativeKeywordListsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListNegativeKeywordLists` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListNegativeKeywordListsResponseFormGroup() {
		return new FormGroup<ListNegativeKeywordListsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of negative keywords used for targeting. */
	export interface NegativeKeywordList {

		/** Output only. The unique ID of the advertiser the negative keyword list belongs to. */
		advertiserId?: string | null;

		/** Required. The display name of the negative keyword list. Must be UTF-8 encoded with a maximum size of 255 bytes. */
		displayName?: string | null;

		/** Output only. The resource name of the negative keyword list. */
		name?: string | null;

		/** Output only. The unique ID of the negative keyword list. Assigned by the system. */
		negativeKeywordListId?: string | null;

		/** Output only. Number of line items that are directly targeting this negative keyword list. */
		targetedLineItemCount?: string | null;
	}

	/** A list of negative keywords used for targeting. */
	export interface NegativeKeywordListFormProperties {

		/** Output only. The unique ID of the advertiser the negative keyword list belongs to. */
		advertiserId: FormControl<string | null | undefined>,

		/** Required. The display name of the negative keyword list. Must be UTF-8 encoded with a maximum size of 255 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The resource name of the negative keyword list. */
		name: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the negative keyword list. Assigned by the system. */
		negativeKeywordListId: FormControl<string | null | undefined>,

		/** Output only. Number of line items that are directly targeting this negative keyword list. */
		targetedLineItemCount: FormControl<string | null | undefined>,
	}
	export function CreateNegativeKeywordListFormGroup() {
		return new FormGroup<NegativeKeywordListFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			negativeKeywordListId: new FormControl<string | null | undefined>(undefined),
			targetedLineItemCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for NegativeKeywordService.ListNegativeKeywords. */
	export interface ListNegativeKeywordsResponse {

		/** The list of negative keywords. This list will be absent if empty. */
		negativeKeywords?: Array<NegativeKeyword>;

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListNegativeKeywords` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for NegativeKeywordService.ListNegativeKeywords. */
	export interface ListNegativeKeywordsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListNegativeKeywords` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListNegativeKeywordsResponseFormGroup() {
		return new FormGroup<ListNegativeKeywordsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPartnerAssignedTargetingOptionsResponse {

		/** The list of assigned targeting options. This list will be absent if empty. */
		assignedTargetingOptions?: Array<AssignedTargetingOption>;

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListPartnerAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. */
		nextPageToken?: string | null;
	}
	export interface ListPartnerAssignedTargetingOptionsResponseFormProperties {

		/** A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListPartnerAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPartnerAssignedTargetingOptionsResponseFormGroup() {
		return new FormGroup<ListPartnerAssignedTargetingOptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPartnersResponse {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListPartners` method to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The list of partners. This list will be absent if empty. */
		partners?: Array<Partner>;
	}
	export interface ListPartnersResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListPartners` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPartnersResponseFormGroup() {
		return new FormGroup<ListPartnersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single partner in Display & Video 360 (DV360). */
	export interface Partner {

		/** Ad server related settings of a partner. */
		adServerConfig?: PartnerAdServerConfig;

		/** Billing related settings of a partner. */
		billingConfig?: PartnerBillingConfig;

		/** Settings that control how partner related data may be accessed. */
		dataAccessConfig?: PartnerDataAccessConfig;

		/** The display name of the partner. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName?: string | null;

		/** Output only. The status of the partner. */
		entityStatus?: AdGroupEntityStatus | null;

		/** Settings that control which exchanges are enabled for a partner. */
		exchangeConfig?: ExchangeConfig;

		/** General settings of a partner. */
		generalConfig?: PartnerGeneralConfig;

		/** Output only. The resource name of the partner. */
		name?: string | null;

		/** Output only. The unique ID of the partner. Assigned by the system. */
		partnerId?: string | null;

		/** Output only. The timestamp when the partner was last updated. Assigned by the system. */
		updateTime?: string | null;
	}

	/** A single partner in Display & Video 360 (DV360). */
	export interface PartnerFormProperties {

		/** The display name of the partner. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The status of the partner. */
		entityStatus: FormControl<AdGroupEntityStatus | null | undefined>,

		/** Output only. The resource name of the partner. */
		name: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the partner. Assigned by the system. */
		partnerId: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the partner was last updated. Assigned by the system. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreatePartnerFormGroup() {
		return new FormGroup<PartnerFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			entityStatus: new FormControl<AdGroupEntityStatus | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			partnerId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ad server related settings of a partner. */
	export interface PartnerAdServerConfig {

		/** Measurement settings of a partner. */
		measurementConfig?: MeasurementConfig;
	}

	/** Ad server related settings of a partner. */
	export interface PartnerAdServerConfigFormProperties {
	}
	export function CreatePartnerAdServerConfigFormGroup() {
		return new FormGroup<PartnerAdServerConfigFormProperties>({
		});

	}


	/** Measurement settings of a partner. */
	export interface MeasurementConfig {

		/** Whether or not to report DV360 cost to CM360. */
		dv360ToCmCostReportingEnabled?: boolean | null;

		/** Whether or not to include DV360 data in CM360 data transfer reports. */
		dv360ToCmDataSharingEnabled?: boolean | null;
	}

	/** Measurement settings of a partner. */
	export interface MeasurementConfigFormProperties {

		/** Whether or not to report DV360 cost to CM360. */
		dv360ToCmCostReportingEnabled: FormControl<boolean | null | undefined>,

		/** Whether or not to include DV360 data in CM360 data transfer reports. */
		dv360ToCmDataSharingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateMeasurementConfigFormGroup() {
		return new FormGroup<MeasurementConfigFormProperties>({
			dv360ToCmCostReportingEnabled: new FormControl<boolean | null | undefined>(undefined),
			dv360ToCmDataSharingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Billing related settings of a partner. */
	export interface PartnerBillingConfig {

		/** The ID of a partner default billing profile. */
		billingProfileId?: string | null;
	}

	/** Billing related settings of a partner. */
	export interface PartnerBillingConfigFormProperties {

		/** The ID of a partner default billing profile. */
		billingProfileId: FormControl<string | null | undefined>,
	}
	export function CreatePartnerBillingConfigFormGroup() {
		return new FormGroup<PartnerBillingConfigFormProperties>({
			billingProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings that control how partner related data may be accessed. */
	export interface PartnerDataAccessConfig {

		/** Structured Data File (SDF) related settings. */
		sdfConfig?: SdfConfig;
	}

	/** Settings that control how partner related data may be accessed. */
	export interface PartnerDataAccessConfigFormProperties {
	}
	export function CreatePartnerDataAccessConfigFormGroup() {
		return new FormGroup<PartnerDataAccessConfigFormProperties>({
		});

	}


	/** General settings of a partner. */
	export interface PartnerGeneralConfig {

		/** Immutable. Partner's currency in ISO 4217 format. */
		currencyCode?: string | null;

		/** Immutable. The standard TZ database name of the partner's time zone. For example, `America/New_York`. See more at: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
		timeZone?: string | null;
	}

	/** General settings of a partner. */
	export interface PartnerGeneralConfigFormProperties {

		/** Immutable. Partner's currency in ISO 4217 format. */
		currencyCode: FormControl<string | null | undefined>,

		/** Immutable. The standard TZ database name of the partner's time zone. For example, `America/New_York`. See more at: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreatePartnerGeneralConfigFormGroup() {
		return new FormGroup<PartnerGeneralConfigFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for SiteService.ListSites. */
	export interface ListSitesResponse {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListSites` method to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The list of sites. This list will be absent if empty. */
		sites?: Array<Site>;
	}

	/** Response message for SiteService.ListSites. */
	export interface ListSitesResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListSites` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSitesResponseFormGroup() {
		return new FormGroup<ListSitesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListTargetingOptions. */
	export interface ListTargetingOptionsResponse {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListTargetingOptions` method to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The list of targeting options. This list will be absent if empty. */
		targetingOptions?: Array<TargetingOption>;
	}

	/** Response message for ListTargetingOptions. */
	export interface ListTargetingOptionsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListTargetingOptions` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTargetingOptionsResponseFormGroup() {
		return new FormGroup<ListTargetingOptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single targeting option, which is a targetable concept in DV360. */
	export interface TargetingOption {

		/** Represents a targetable age range. This will be populated in the age_range_details field when targeting_type is `TARGETING_TYPE_AGE_RANGE`. */
		ageRangeDetails?: AgeRangeTargetingOptionDetails;

		/** Represents a targetable collection of apps. A collection lets you target dynamic groups of related apps that are maintained by the platform, for example `All Apps/Google Play/Games`. This will be populated in the app_category_details field when targeting_type is `TARGETING_TYPE_APP_CATEGORY`. */
		appCategoryDetails?: AppCategoryTargetingOptionDetails;

		/** Represents a targetable audio content type. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. */
		audioContentTypeDetails?: AudioContentTypeTargetingOptionDetails;

		/** Represents a targetable authorized seller status. This will be populated in the authorized_seller_status_details field when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`. */
		authorizedSellerStatusDetails?: AuthorizedSellerStatusTargetingOptionDetails;

		/** Represents a targetable browser. This will be populated in the browser_details field when targeting_type is `TARGETING_TYPE_BROWSER`. */
		browserDetails?: BrowserTargetingOptionDetails;

		/** Represents a targetable business chain within a geo region. This will be populated in the business_chain_details field when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`. */
		businessChainDetails?: BusinessChainTargetingOptionDetails;

		/** Represents a targetable carrier or ISP. This will be populated in the carrier_and_isp_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`. */
		carrierAndIspDetails?: CarrierAndIspTargetingOptionDetails;

		/** Represents a targetable category. This will be populated in the category_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CATEGORY`. */
		categoryDetails?: CategoryTargetingOptionDetails;

		/** Represents a targetable content duration. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. */
		contentDurationDetails?: ContentDurationTargetingOptionDetails;

		/** Represents a targetable content genre. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. */
		contentGenreDetails?: ContentGenreTargetingOptionDetails;

		/** Represents a targetable content instream position, which could be used by video and audio ads. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`. */
		contentInstreamPositionDetails?: ContentInstreamPositionTargetingOptionDetails;

		/** Represents a targetable content outstream position, which could be used by display and video ads. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`. */
		contentOutstreamPositionDetails?: ContentOutstreamPositionTargetingOptionDetails;

		/** Represents a targetable content stream type. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. */
		contentStreamTypeDetails?: ContentStreamTypeTargetingOptionDetails;

		/** Represents a targetable device make and model. This will be populated in the device_make_model_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`. */
		deviceMakeModelDetails?: DeviceMakeModelTargetingOptionDetails;

		/** Represents a targetable device type. This will be populated in the device_type_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`. */
		deviceTypeDetails?: DeviceTypeTargetingOptionDetails;

		/** Represents a targetable digital content label rating tier. This will be populated in the digital_content_label_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`. */
		digitalContentLabelDetails?: DigitalContentLabelTargetingOptionDetails;

		/** Represents a targetable environment. This will be populated in the environment_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`. */
		environmentDetails?: EnvironmentTargetingOptionDetails;

		/** Represents a targetable exchange. This will be populated in the exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`. */
		exchangeDetails?: ExchangeTargetingOptionDetails;

		/** Represents a targetable gender. This will be populated in the gender_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_GENDER`. */
		genderDetails?: GenderTargetingOptionDetails;

		/** Represents a targetable geographic region. This will be populated in the geo_region_details field when targeting_type is `TARGETING_TYPE_GEO_REGION`. */
		geoRegionDetails?: GeoRegionTargetingOptionDetails;

		/** Represents a targetable household income. This will be populated in the household_income_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`. */
		householdIncomeDetails?: HouseholdIncomeTargetingOptionDetails;

		/** Represents a targetable language. This will be populated in the language_details field when targeting_type is `TARGETING_TYPE_LANGUAGE`. */
		languageDetails?: LanguageTargetingOptionDetails;

		/** Output only. The resource name for this targeting option. */
		name?: string | null;

		/** Represents a targetable native content position. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. */
		nativeContentPositionDetails?: NativeContentPositionTargetingOptionDetails;

		/** Represents a targetable Open Measurement enabled inventory type. This will be populated in the omid_details field when targeting_type is `TARGETING_TYPE_OMID`. */
		omidDetails?: OmidTargetingOptionDetails;

		/** Represents a targetable on screen position, which could be used by display and video ads. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`. */
		onScreenPositionDetails?: OnScreenPositionTargetingOptionDetails;

		/** Represents a targetable operating system. This will be populated in the operating_system_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`. */
		operatingSystemDetails?: OperatingSystemTargetingOptionDetails;

		/** Represents a targetable parental status. This will be populated in the parental_status_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`. */
		parentalStatusDetails?: ParentalStatusTargetingOptionDetails;

		/** Represents a targetable point of interest(POI). This will be populated in the poi_details field when targeting_type is `TARGETING_TYPE_POI`. */
		poiDetails?: PoiTargetingOptionDetails;

		/** Represents a targetable sensitive category. This will be populated in the sensitive_category_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`. */
		sensitiveCategoryDetails?: SensitiveCategoryTargetingOptionDetails;

		/** Represents a targetable sub-exchange. This will be populated in the sub_exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`. */
		subExchangeDetails?: SubExchangeTargetingOptionDetails;

		/** Output only. A unique identifier for this targeting option. The tuple {`targeting_type`, `targeting_option_id`} will be unique. */
		targetingOptionId?: string | null;

		/** Output only. The type of this targeting option. */
		targetingType?: AssignedTargetingOptionTargetingType | null;

		/** Represents a targetable user rewarded content status for video ads only. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`. */
		userRewardedContentDetails?: UserRewardedContentTargetingOptionDetails;

		/** Represents a targetable video player size. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`. */
		videoPlayerSizeDetails?: VideoPlayerSizeTargetingOptionDetails;

		/** Represents a targetable viewability. This will be populated in the viewability_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`. */
		viewabilityDetails?: ViewabilityTargetingOptionDetails;
	}

	/** Represents a single targeting option, which is a targetable concept in DV360. */
	export interface TargetingOptionFormProperties {

		/** Output only. The resource name for this targeting option. */
		name: FormControl<string | null | undefined>,

		/** Output only. A unique identifier for this targeting option. The tuple {`targeting_type`, `targeting_option_id`} will be unique. */
		targetingOptionId: FormControl<string | null | undefined>,

		/** Output only. The type of this targeting option. */
		targetingType: FormControl<AssignedTargetingOptionTargetingType | null | undefined>,
	}
	export function CreateTargetingOptionFormGroup() {
		return new FormGroup<TargetingOptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			targetingOptionId: new FormControl<string | null | undefined>(undefined),
			targetingType: new FormControl<AssignedTargetingOptionTargetingType | null | undefined>(undefined),
		});

	}


	/** Represents a targetable native content position. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. */
	export interface NativeContentPositionTargetingOptionDetails {

		/** Output only. The content position. */
		contentPosition?: NativeContentPositionAssignedTargetingOptionDetailsContentPosition | null;
	}

	/** Represents a targetable native content position. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. */
	export interface NativeContentPositionTargetingOptionDetailsFormProperties {

		/** Output only. The content position. */
		contentPosition: FormControl<NativeContentPositionAssignedTargetingOptionDetailsContentPosition | null | undefined>,
	}
	export function CreateNativeContentPositionTargetingOptionDetailsFormGroup() {
		return new FormGroup<NativeContentPositionTargetingOptionDetailsFormProperties>({
			contentPosition: new FormControl<NativeContentPositionAssignedTargetingOptionDetailsContentPosition | null | undefined>(undefined),
		});

	}


	/** Represents a targetable Open Measurement enabled inventory type. This will be populated in the omid_details field when targeting_type is `TARGETING_TYPE_OMID`. */
	export interface OmidTargetingOptionDetails {

		/** Output only. The type of Open Measurement enabled inventory. */
		omid?: OmidAssignedTargetingOptionDetailsOmid | null;
	}

	/** Represents a targetable Open Measurement enabled inventory type. This will be populated in the omid_details field when targeting_type is `TARGETING_TYPE_OMID`. */
	export interface OmidTargetingOptionDetailsFormProperties {

		/** Output only. The type of Open Measurement enabled inventory. */
		omid: FormControl<OmidAssignedTargetingOptionDetailsOmid | null | undefined>,
	}
	export function CreateOmidTargetingOptionDetailsFormGroup() {
		return new FormGroup<OmidTargetingOptionDetailsFormProperties>({
			omid: new FormControl<OmidAssignedTargetingOptionDetailsOmid | null | undefined>(undefined),
		});

	}


	/** Represents a targetable on screen position, which could be used by display and video ads. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`. */
	export interface OnScreenPositionTargetingOptionDetails {

		/** Output only. The on screen position. */
		onScreenPosition?: OnScreenPositionAssignedTargetingOptionDetailsOnScreenPosition | null;
	}

	/** Represents a targetable on screen position, which could be used by display and video ads. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`. */
	export interface OnScreenPositionTargetingOptionDetailsFormProperties {

		/** Output only. The on screen position. */
		onScreenPosition: FormControl<OnScreenPositionAssignedTargetingOptionDetailsOnScreenPosition | null | undefined>,
	}
	export function CreateOnScreenPositionTargetingOptionDetailsFormGroup() {
		return new FormGroup<OnScreenPositionTargetingOptionDetailsFormProperties>({
			onScreenPosition: new FormControl<OnScreenPositionAssignedTargetingOptionDetailsOnScreenPosition | null | undefined>(undefined),
		});

	}


	/** Represents a targetable operating system. This will be populated in the operating_system_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`. */
	export interface OperatingSystemTargetingOptionDetails {

		/** Output only. The display name of the operating system. */
		displayName?: string | null;
	}

	/** Represents a targetable operating system. This will be populated in the operating_system_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`. */
	export interface OperatingSystemTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the operating system. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateOperatingSystemTargetingOptionDetailsFormGroup() {
		return new FormGroup<OperatingSystemTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a targetable parental status. This will be populated in the parental_status_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`. */
	export interface ParentalStatusTargetingOptionDetails {

		/** Output only. The parental status of an audience. */
		parentalStatus?: ParentalStatusAssignedTargetingOptionDetailsParentalStatus | null;
	}

	/** Represents a targetable parental status. This will be populated in the parental_status_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`. */
	export interface ParentalStatusTargetingOptionDetailsFormProperties {

		/** Output only. The parental status of an audience. */
		parentalStatus: FormControl<ParentalStatusAssignedTargetingOptionDetailsParentalStatus | null | undefined>,
	}
	export function CreateParentalStatusTargetingOptionDetailsFormGroup() {
		return new FormGroup<ParentalStatusTargetingOptionDetailsFormProperties>({
			parentalStatus: new FormControl<ParentalStatusAssignedTargetingOptionDetailsParentalStatus | null | undefined>(undefined),
		});

	}


	/** Represents a targetable point of interest(POI). This will be populated in the poi_details field when targeting_type is `TARGETING_TYPE_POI`. */
	export interface PoiTargetingOptionDetails {

		/** Output only. The display name of a POI(e.g. "Times Square", "Space Needle"), followed by its full address if available. */
		displayName?: string | null;

		/** Output only. Latitude of the POI rounding to 6th decimal place. */
		latitude?: number | null;

		/** Output only. Longitude of the POI rounding to 6th decimal place. */
		longitude?: number | null;
	}

	/** Represents a targetable point of interest(POI). This will be populated in the poi_details field when targeting_type is `TARGETING_TYPE_POI`. */
	export interface PoiTargetingOptionDetailsFormProperties {

		/** Output only. The display name of a POI(e.g. "Times Square", "Space Needle"), followed by its full address if available. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Latitude of the POI rounding to 6th decimal place. */
		latitude: FormControl<number | null | undefined>,

		/** Output only. Longitude of the POI rounding to 6th decimal place. */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreatePoiTargetingOptionDetailsFormGroup() {
		return new FormGroup<PoiTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a targetable sensitive category. This will be populated in the sensitive_category_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`. */
	export interface SensitiveCategoryTargetingOptionDetails {

		/** Output only. An enum for the DV360 Sensitive category content classifier. */
		sensitiveCategory?: SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategory | null;
	}

	/** Represents a targetable sensitive category. This will be populated in the sensitive_category_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`. */
	export interface SensitiveCategoryTargetingOptionDetailsFormProperties {

		/** Output only. An enum for the DV360 Sensitive category content classifier. */
		sensitiveCategory: FormControl<SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategory | null | undefined>,
	}
	export function CreateSensitiveCategoryTargetingOptionDetailsFormGroup() {
		return new FormGroup<SensitiveCategoryTargetingOptionDetailsFormProperties>({
			sensitiveCategory: new FormControl<SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategory | null | undefined>(undefined),
		});

	}


	/** Represents a targetable sub-exchange. This will be populated in the sub_exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`. */
	export interface SubExchangeTargetingOptionDetails {

		/** Output only. The display name of the sub-exchange. */
		displayName?: string | null;
	}

	/** Represents a targetable sub-exchange. This will be populated in the sub_exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`. */
	export interface SubExchangeTargetingOptionDetailsFormProperties {

		/** Output only. The display name of the sub-exchange. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateSubExchangeTargetingOptionDetailsFormGroup() {
		return new FormGroup<SubExchangeTargetingOptionDetailsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a targetable user rewarded content status for video ads only. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`. */
	export interface UserRewardedContentTargetingOptionDetails {

		/** Output only. User rewarded content status for video ads. */
		userRewardedContent?: UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContent | null;
	}

	/** Represents a targetable user rewarded content status for video ads only. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`. */
	export interface UserRewardedContentTargetingOptionDetailsFormProperties {

		/** Output only. User rewarded content status for video ads. */
		userRewardedContent: FormControl<UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContent | null | undefined>,
	}
	export function CreateUserRewardedContentTargetingOptionDetailsFormGroup() {
		return new FormGroup<UserRewardedContentTargetingOptionDetailsFormProperties>({
			userRewardedContent: new FormControl<UserRewardedContentAssignedTargetingOptionDetailsUserRewardedContent | null | undefined>(undefined),
		});

	}


	/** Represents a targetable video player size. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`. */
	export interface VideoPlayerSizeTargetingOptionDetails {

		/** Output only. The video player size. */
		videoPlayerSize?: VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSize | null;
	}

	/** Represents a targetable video player size. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`. */
	export interface VideoPlayerSizeTargetingOptionDetailsFormProperties {

		/** Output only. The video player size. */
		videoPlayerSize: FormControl<VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSize | null | undefined>,
	}
	export function CreateVideoPlayerSizeTargetingOptionDetailsFormGroup() {
		return new FormGroup<VideoPlayerSizeTargetingOptionDetailsFormProperties>({
			videoPlayerSize: new FormControl<VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSize | null | undefined>(undefined),
		});

	}


	/** Represents a targetable viewability. This will be populated in the viewability_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`. */
	export interface ViewabilityTargetingOptionDetails {

		/** Output only. The predicted viewability percentage. */
		viewability?: ViewabilityAssignedTargetingOptionDetailsViewability | null;
	}

	/** Represents a targetable viewability. This will be populated in the viewability_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`. */
	export interface ViewabilityTargetingOptionDetailsFormProperties {

		/** Output only. The predicted viewability percentage. */
		viewability: FormControl<ViewabilityAssignedTargetingOptionDetailsViewability | null | undefined>,
	}
	export function CreateViewabilityTargetingOptionDetailsFormGroup() {
		return new FormGroup<ViewabilityTargetingOptionDetailsFormProperties>({
			viewability: new FormControl<ViewabilityAssignedTargetingOptionDetailsViewability | null | undefined>(undefined),
		});

	}

	export interface ListUsersResponse {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListUsers` method to retrieve the next page of results. This token will be absent if there are no more results to return. */
		nextPageToken?: string | null;

		/** The list of users. This list will be absent if empty. */
		users?: Array<User>;
	}
	export interface ListUsersResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListUsers` method to retrieve the next page of results. This token will be absent if there are no more results to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single user in Display & Video 360. */
	export interface User {

		/** The assigned user roles. Required in CreateUser. Output only in UpdateUser. Can only be updated through BulkEditAssignedUserRoles. */
		assignedUserRoles?: Array<AssignedUserRole>;

		/** Required. The display name of the user. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName?: string | null;

		/** Required. Immutable. The email address used to identify the user. */
		email?: string | null;

		/** Output only. The timestamp when the user last logged in DV360 UI. */
		lastLoginTime?: string | null;

		/** Output only. The resource name of the user. */
		name?: string | null;

		/** Output only. The unique ID of the user. Assigned by the system. */
		userId?: string | null;
	}

	/** A single user in Display & Video 360. */
	export interface UserFormProperties {

		/** Required. The display name of the user. Must be UTF-8 encoded with a maximum size of 240 bytes. */
		displayName: FormControl<string | null | undefined>,

		/** Required. Immutable. The email address used to identify the user. */
		email: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the user last logged in DV360 UI. */
		lastLoginTime: FormControl<string | null | undefined>,

		/** Output only. The resource name of the user. */
		name: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the user. Assigned by the system. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			lastLoginTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LookupInvoiceCurrencyResponse {

		/** Currency used by the advertiser in ISO 4217 format. */
		currencyCode?: string | null;
	}
	export interface LookupInvoiceCurrencyResponseFormProperties {

		/** Currency used by the advertiser in ISO 4217 format. */
		currencyCode: FormControl<string | null | undefined>,
	}
	export function CreateLookupInvoiceCurrencyResponseFormGroup() {
		return new FormGroup<LookupInvoiceCurrencyResponseFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Search terms for POI targeting options. */
	export interface PoiSearchTerms {

		/** The search query for the desired POI name, street address, or coordinate of the desired POI. The query can be a prefix, e.g. "Times squar", "40.7505045,-73.99562", "315 W 44th St", etc. */
		poiQuery?: string | null;
	}

	/** Search terms for POI targeting options. */
	export interface PoiSearchTermsFormProperties {

		/** The search query for the desired POI name, street address, or coordinate of the desired POI. The query can be a prefix, e.g. "Times squar", "40.7505045,-73.99562", "315 W 44th St", etc. */
		poiQuery: FormControl<string | null | undefined>,
	}
	export function CreatePoiSearchTermsFormGroup() {
		return new FormGroup<PoiSearchTermsFormProperties>({
			poiQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for NegativeKeywordService.ReplaceNegativeKeywords. */
	export interface ReplaceNegativeKeywordsRequest {

		/** The negative keywords that will replace the existing keywords in the negative keyword list, specified as a list of NegativeKeywords. */
		newNegativeKeywords?: Array<NegativeKeyword>;
	}

	/** Request message for NegativeKeywordService.ReplaceNegativeKeywords. */
	export interface ReplaceNegativeKeywordsRequestFormProperties {
	}
	export function CreateReplaceNegativeKeywordsRequestFormGroup() {
		return new FormGroup<ReplaceNegativeKeywordsRequestFormProperties>({
		});

	}


	/** Response message for NegativeKeywordService.ReplaceNegativeKeywords. */
	export interface ReplaceNegativeKeywordsResponse {

		/** The full list of negative keywords now present in the negative keyword list. */
		negativeKeywords?: Array<NegativeKeyword>;
	}

	/** Response message for NegativeKeywordService.ReplaceNegativeKeywords. */
	export interface ReplaceNegativeKeywordsResponseFormProperties {
	}
	export function CreateReplaceNegativeKeywordsResponseFormGroup() {
		return new FormGroup<ReplaceNegativeKeywordsResponseFormProperties>({
		});

	}


	/** Request message for SiteService.ReplaceSites. */
	export interface ReplaceSitesRequest {

		/** The ID of the advertiser that owns the parent channel. */
		advertiserId?: string | null;

		/** The sites that will replace the existing sites assigned to the channel, specified as a list of Sites. */
		newSites?: Array<Site>;

		/** The ID of the partner that owns the parent channel. */
		partnerId?: string | null;
	}

	/** Request message for SiteService.ReplaceSites. */
	export interface ReplaceSitesRequestFormProperties {

		/** The ID of the advertiser that owns the parent channel. */
		advertiserId: FormControl<string | null | undefined>,

		/** The ID of the partner that owns the parent channel. */
		partnerId: FormControl<string | null | undefined>,
	}
	export function CreateReplaceSitesRequestFormGroup() {
		return new FormGroup<ReplaceSitesRequestFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			partnerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for SiteService.ReplaceSites. */
	export interface ReplaceSitesResponse {

		/** The list of sites in the channel after replacing. */
		sites?: Array<Site>;
	}

	/** Response message for SiteService.ReplaceSites. */
	export interface ReplaceSitesResponseFormProperties {
	}
	export function CreateReplaceSitesResponseFormGroup() {
		return new FormGroup<ReplaceSitesResponseFormProperties>({
		});

	}


	/** Type for the response returned by [SdfDownloadTaskService.CreateSdfDownloadTask]. */
	export interface SdfDownloadTask {

		/** A resource name to be used in media.download to Download the prepared files. Resource names have the format `download/sdfdownloadtasks/media/{media_id}`. `media_id` will be made available by the long running operation service once the task status is done. */
		resourceName?: string | null;
	}

	/** Type for the response returned by [SdfDownloadTaskService.CreateSdfDownloadTask]. */
	export interface SdfDownloadTaskFormProperties {

		/** A resource name to be used in media.download to Download the prepared files. Resource names have the format `download/sdfdownloadtasks/media/{media_id}`. `media_id` will be made available by the long running operation service once the task status is done. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateSdfDownloadTaskFormGroup() {
		return new FormGroup<SdfDownloadTaskFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Type for the metadata returned by [SdfDownloadTaskService.CreateSdfDownloadTask]. */
	export interface SdfDownloadTaskMetadata {

		/** The time when the operation was created. */
		createTime?: string | null;

		/** The time when execution was completed. */
		endTime?: string | null;

		/** The SDF version used to execute this download task. */
		version?: SdfConfigVersion | null;
	}

	/** Type for the metadata returned by [SdfDownloadTaskService.CreateSdfDownloadTask]. */
	export interface SdfDownloadTaskMetadataFormProperties {

		/** The time when the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time when execution was completed. */
		endTime: FormControl<string | null | undefined>,

		/** The SDF version used to execute this download task. */
		version: FormControl<SdfConfigVersion | null | undefined>,
	}
	export function CreateSdfDownloadTaskMetadataFormGroup() {
		return new FormGroup<SdfDownloadTaskMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<SdfConfigVersion | null | undefined>(undefined),
		});

	}


	/** Request message for SearchTargetingOptions. */
	export interface SearchTargetingOptionsRequest {

		/** Required. The Advertiser this request is being made in the context of. */
		advertiserId?: string | null;

		/** Search terms for Business Chain targeting options. At least one of the field should be populated. */
		businessChainSearchTerms?: BusinessChainSearchTerms;

		/** Search terms for geo region targeting options. */
		geoRegionSearchTerms?: GeoRegionSearchTerms;

		/** Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. */
		pageSize?: number | null;

		/** A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `SearchTargetingOptions` method. If not specified, the first page of results will be returned. */
		pageToken?: string | null;

		/** Search terms for POI targeting options. */
		poiSearchTerms?: PoiSearchTerms;
	}

	/** Request message for SearchTargetingOptions. */
	export interface SearchTargetingOptionsRequestFormProperties {

		/** Required. The Advertiser this request is being made in the context of. */
		advertiserId: FormControl<string | null | undefined>,

		/** Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. */
		pageSize: FormControl<number | null | undefined>,

		/** A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `SearchTargetingOptions` method. If not specified, the first page of results will be returned. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchTargetingOptionsRequestFormGroup() {
		return new FormGroup<SearchTargetingOptionsRequestFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for SearchTargetingOptions. */
	export interface SearchTargetingOptionsResponse {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `SearchTargetingOptions` method to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The list of targeting options that match the search criteria. This list will be absent if empty. */
		targetingOptions?: Array<TargetingOption>;
	}

	/** Response message for SearchTargetingOptions. */
	export interface SearchTargetingOptionsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `SearchTargetingOptions` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchTargetingOptionsResponseFormGroup() {
		return new FormGroup<SearchTargetingOptionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.
		 * Get download/{resourceName}
		 * @param {string} resourceName Name of the media that is being downloaded. See ReadRequest.resource_name.
		 * @return {GoogleBytestreamMedia} Successful response
		 */
		Displayvideo_media_download(resourceName: string): Observable<GoogleBytestreamMedia> {
			return this.http.get<GoogleBytestreamMedia>(this.baseUri + 'download/' + (resourceName == null ? '' : encodeURIComponent(resourceName)), {});
		}

		/**
		 * Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.
		 * Get v3/advertisers
		 * @param {string} filter Allows filtering by advertiser fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `advertiserId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All active advertisers under a partner: `entityStatus="ENTITY_STATUS_ACTIVE"` * All advertisers with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All advertisers with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdvertisers` method. If not specified, the first page of results will be returned.
		 * @param {string} partnerId Required. The ID of the partner that the fetched advertisers should all belong to. The system only supports listing advertisers for one partner at a time.
		 * @return {ListAdvertisersResponse} Successful response
		 */
		Displayvideo_advertisers_list(filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, partnerId: string | null | undefined): Observable<ListAdvertisersResponse> {
			return this.http.get<ListAdvertisersResponse>(this.baseUri + 'v3/advertisers?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Creates a new advertiser. Returns the newly created advertiser if successful. This method can take up to 180 seconds to complete.
		 * Post v3/advertisers
		 * @return {Advertiser} Successful response
		 */
		Displayvideo_advertisers_create(requestBody: Advertiser): Observable<Advertiser> {
			return this.http.post<Advertiser>(this.baseUri + 'v3/advertisers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.
		 * Delete v3/advertisers/{advertiserId}
		 * @param {string} advertiserId The ID of the advertiser we need to delete.
		 * @return {Empty} Successful response
		 */
		Displayvideo_advertisers_delete(advertiserId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)), {});
		}

		/**
		 * Gets an advertiser.
		 * Get v3/advertisers/{advertiserId}
		 * @param {string} advertiserId Required. The ID of the advertiser to fetch.
		 * @return {Advertiser} Successful response
		 */
		Displayvideo_advertisers_get(advertiserId: string): Observable<Advertiser> {
			return this.http.get<Advertiser>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)), {});
		}

		/**
		 * Updates an existing advertiser. Returns the updated advertiser if successful.
		 * Patch v3/advertisers/{advertiserId}
		 * @param {string} advertiserId Output only. The unique ID of the advertiser. Assigned by the system.
		 * @param {string} updateMask Required. The mask to control which fields to update.
		 * @return {Advertiser} Successful response
		 */
		Displayvideo_advertisers_patch(advertiserId: string, updateMask: string | null | undefined, requestBody: Advertiser): Observable<Advertiser> {
			return this.http.patch<Advertiser>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists ad group ads.
		 * Get v3/advertisers/{advertiserId}/adGroupAds
		 * @param {string} advertiserId Required. The ID of the advertiser the ad groups belongs to.
		 * @param {string} filter Optional. Allows filtering by custom ad group ad fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` and `OR`. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `adGroupId` * `displayName` * `entityStatus` * `adGroupAdId` Examples: * All ad group ads under an ad group: `adGroupId="1234"` * All ad group ads under an ad group with an entityStatus of `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED`: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED") AND adGroupId="12345"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Optional. Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
		 * @param {number} pageSize Optional. Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdGroupAds` method. If not specified, the first page of results will be returned.
		 * @return {ListAdGroupAdsResponse} Successful response
		 */
		Displayvideo_advertisers_adGroupAds_list(advertiserId: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAdGroupAdsResponse> {
			return this.http.get<ListAdGroupAdsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/adGroupAds&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets an ad group ad.
		 * Get v3/advertisers/{advertiserId}/adGroupAds/{adGroupAdId}
		 * @param {string} advertiserId Required. The ID of the advertiser this ad group ad belongs to.
		 * @param {string} adGroupAdId Required. The ID of the ad group ad to fetch.
		 * @return {AdGroupAd} Successful response
		 */
		Displayvideo_advertisers_adGroupAds_get(advertiserId: string, adGroupAdId: string): Observable<AdGroupAd> {
			return this.http.get<AdGroupAd>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/adGroupAds/' + (adGroupAdId == null ? '' : encodeURIComponent(adGroupAdId)), {});
		}

		/**
		 * Lists ad groups.
		 * Get v3/advertisers/{advertiserId}/adGroups
		 * @param {string} advertiserId Required. The ID of the advertiser the ad groups belongs to.
		 * @param {string} filter Optional. Allows filtering by custom ad group fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` and `OR`. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported properties: * `adGroupId` * `displayName` * `entityStatus` * `lineItemId` * `adGroupFormat` Examples: * All ad groups under an line item: `lineItemId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` `AD_GROUP_FORMAT_IN_STREAM` ad groups under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED") AND adGroupFormat="AD_GROUP_FORMAT_IN_STREAM"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Optional. Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
		 * @param {number} pageSize Optional. Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdGroups` method. If not specified, the first page of results will be returned.
		 * @return {ListAdGroupsResponse} Successful response
		 */
		Displayvideo_advertisers_adGroups_list(advertiserId: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAdGroupsResponse> {
			return this.http.get<ListAdGroupsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/adGroups&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets an ad group.
		 * Get v3/advertisers/{advertiserId}/adGroups/{adGroupId}
		 * @param {string} advertiserId Required. The ID of the advertiser this ad group belongs to.
		 * @param {string} adGroupId Required. The ID of the ad group to fetch.
		 * @return {AdGroup} Successful response
		 */
		Displayvideo_advertisers_adGroups_get(advertiserId: string, adGroupId: string): Observable<AdGroup> {
			return this.http.get<AdGroup>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/adGroups/' + (adGroupId == null ? '' : encodeURIComponent(adGroupId)), {});
		}

		/**
		 * Lists the targeting options assigned to an ad group. Inherited assigned targeting options are not included.
		 * Get v3/advertisers/{advertiserId}/adGroups/{adGroupId}/targetingTypes/{targetingType}/assignedTargetingOptions
		 * @param {string} advertiserId Required. The ID of the advertiser the ad group belongs to.
		 * @param {string} adGroupId Required. The ID of the ad group to list assigned targeting options for.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SESSION_POSITION` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_YOUTUBE_VIDEO`
		 * @param {string} filter Optional. Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` Examples: * `AssignedTargetingOption` resources with ID 1 or 2: `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Optional. Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
		 * @param {number} pageSize Optional. Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdGroupAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
		 * @return {ListAdGroupAssignedTargetingOptionsResponse} Successful response
		 */
		Displayvideo_advertisers_adGroups_targetingTypes_assignedTargetingOptions_list(advertiserId: string, adGroupId: string, targetingType: AssignedTargetingOptionTargetingType, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAdGroupAssignedTargetingOptionsResponse> {
			return this.http.get<ListAdGroupAssignedTargetingOptionsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/adGroups/' + (adGroupId == null ? '' : encodeURIComponent(adGroupId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets a single targeting option assigned to an ad group. Inherited assigned targeting options are not included.
		 * Get v3/advertisers/{advertiserId}/adGroups/{adGroupId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
		 * @param {string} advertiserId Required. The ID of the advertiser the ad group belongs to.
		 * @param {string} adGroupId Required. The ID of the ad group the assigned targeting option belongs to.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SESSION_POSITION` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_YOUTUBE_VIDEO`
		 * @param {string} assignedTargetingOptionId Required. An identifier unique to the targeting type in this line item that identifies the assigned targeting option being requested.
		 * @return {AssignedTargetingOption} Successful response
		 */
		Displayvideo_advertisers_adGroups_targetingTypes_assignedTargetingOptions_get(advertiserId: string, adGroupId: string, targetingType: AssignedTargetingOptionTargetingType, assignedTargetingOptionId: string): Observable<AssignedTargetingOption> {
			return this.http.get<AssignedTargetingOption>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/adGroups/' + (adGroupId == null ? '' : encodeURIComponent(adGroupId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions/' + (assignedTargetingOptionId == null ? '' : encodeURIComponent(assignedTargetingOptionId)), {});
		}

		/**
		 * Lists assigned targeting options for multiple ad groups across targeting types. Inherited assigned targeting options are not included.
		 * Get v3/advertisers/{advertiserId}/adGroups:bulkListAdGroupAssignedTargetingOptions
		 * @param {string} advertiserId Required. The ID of the advertiser the line items belongs to.
		 * @param {Array<string>} adGroupIds Required. The IDs of the ad groups to list assigned targeting options for.
		 * @param {string} filter Optional. Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_YOUTUBE_VIDEO` or `TARGETING_TYPE_YOUTUBE_CHANNEL`: `targetingType="TARGETING_TYPE_YOUTUBE_VIDEO" OR targetingType="TARGETING_TYPE_YOUTUBE_CHANNEL"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Optional. Field by which to sort the list. Acceptable values are: * `adGroupId` (default) * `assignedTargetingOption.targetingType` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.
		 * @param {number} pageSize Optional. Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken Optional. A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to the `BulkListAdGroupAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
		 * @return {BulkListAdGroupAssignedTargetingOptionsResponse} Successful response
		 */
		Displayvideo_advertisers_adGroups_bulkListAdGroupAssignedTargetingOptions(advertiserId: string, adGroupIds: Array<string> | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<BulkListAdGroupAssignedTargetingOptionsResponse> {
			return this.http.get<BulkListAdGroupAssignedTargetingOptionsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/adGroups:bulkListAdGroupAssignedTargetingOptions&' + adGroupIds?.map(z => `adGroupIds=${encodeURIComponent(z)}`).join('&') + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
		 * Get v3/advertisers/{advertiserId}/campaigns
		 * @param {string} advertiserId The ID of the advertiser to list campaigns for.
		 * @param {string} filter Allows filtering by campaign fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` campaigns under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED")` * All campaigns with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All campaigns with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCampaigns` method. If not specified, the first page of results will be returned.
		 * @return {ListCampaignsResponse} Successful response
		 */
		Displayvideo_advertisers_campaigns_list(advertiserId: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCampaignsResponse> {
			return this.http.get<ListCampaignsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/campaigns&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new campaign. Returns the newly created campaign if successful.
		 * Post v3/advertisers/{advertiserId}/campaigns
		 * @param {string} advertiserId Output only. The unique ID of the advertiser the campaign belongs to.
		 * @return {Campaign} Successful response
		 */
		Displayvideo_advertisers_campaigns_create(advertiserId: string, requestBody: Campaign): Observable<Campaign> {
			return this.http.post<Campaign>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/campaigns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
		 * Delete v3/advertisers/{advertiserId}/campaigns/{campaignId}
		 * @param {string} advertiserId The ID of the advertiser this campaign belongs to.
		 * @param {string} campaignId The ID of the campaign we need to delete.
		 * @return {Empty} Successful response
		 */
		Displayvideo_advertisers_campaigns_delete(advertiserId: string, campaignId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/campaigns/' + (campaignId == null ? '' : encodeURIComponent(campaignId)), {});
		}

		/**
		 * Gets a campaign.
		 * Get v3/advertisers/{advertiserId}/campaigns/{campaignId}
		 * @param {string} advertiserId Required. The ID of the advertiser this campaign belongs to.
		 * @param {string} campaignId Required. The ID of the campaign to fetch.
		 * @return {Campaign} Successful response
		 */
		Displayvideo_advertisers_campaigns_get(advertiserId: string, campaignId: string): Observable<Campaign> {
			return this.http.get<Campaign>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/campaigns/' + (campaignId == null ? '' : encodeURIComponent(campaignId)), {});
		}

		/**
		 * Updates an existing campaign. Returns the updated campaign if successful.
		 * Patch v3/advertisers/{advertiserId}/campaigns/{campaignId}
		 * @param {string} advertiserId Output only. The unique ID of the advertiser the campaign belongs to.
		 * @param {string} campaignId Output only. The unique ID of the campaign. Assigned by the system.
		 * @param {string} updateMask Required. The mask to control which fields to update.
		 * @return {Campaign} Successful response
		 */
		Displayvideo_advertisers_campaigns_patch(advertiserId: string, campaignId: string, updateMask: string | null | undefined, requestBody: Campaign): Observable<Campaign> {
			return this.http.patch<Campaign>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/campaigns/' + (campaignId == null ? '' : encodeURIComponent(campaignId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the targeting options assigned to a campaign for a specified targeting type.
		 * Get v3/advertisers/{advertiserId}/campaigns/{campaignId}/targetingTypes/{targetingType}/assignedTargetingOptions
		 * @param {string} advertiserId Required. The ID of the advertiser the campaign belongs to.
		 * @param {string} campaignId Required. The ID of the campaign to list assigned targeting options for.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_VIEWABILITY`
		 * @param {string} filter Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` * `inheritance` Examples: * `AssignedTargetingOption` resources with ID 1 or 2 `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER` `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCampaignAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
		 * @return {ListCampaignAssignedTargetingOptionsResponse} Successful response
		 */
		Displayvideo_advertisers_campaigns_targetingTypes_assignedTargetingOptions_list(advertiserId: string, campaignId: string, targetingType: AssignedTargetingOptionTargetingType, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCampaignAssignedTargetingOptionsResponse> {
			return this.http.get<ListCampaignAssignedTargetingOptionsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/campaigns/' + (campaignId == null ? '' : encodeURIComponent(campaignId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets a single targeting option assigned to a campaign.
		 * Get v3/advertisers/{advertiserId}/campaigns/{campaignId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
		 * @param {string} advertiserId Required. The ID of the advertiser the campaign belongs to.
		 * @param {string} campaignId Required. The ID of the campaign the assigned targeting option belongs to.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_VIEWABILITY`
		 * @param {string} assignedTargetingOptionId Required. An identifier unique to the targeting type in this campaign that identifies the assigned targeting option being requested.
		 * @return {AssignedTargetingOption} Successful response
		 */
		Displayvideo_advertisers_campaigns_targetingTypes_assignedTargetingOptions_get(advertiserId: string, campaignId: string, targetingType: AssignedTargetingOptionTargetingType, assignedTargetingOptionId: string): Observable<AssignedTargetingOption> {
			return this.http.get<AssignedTargetingOption>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/campaigns/' + (campaignId == null ? '' : encodeURIComponent(campaignId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions/' + (assignedTargetingOptionId == null ? '' : encodeURIComponent(assignedTargetingOptionId)), {});
		}

		/**
		 * Lists assigned targeting options of a campaign across targeting types.
		 * Get v3/advertisers/{advertiserId}/campaigns/{campaignId}:listAssignedTargetingOptions
		 * @param {string} advertiserId Required. The ID of the advertiser the campaign belongs to.
		 * @param {string} campaignId Required. The ID of the campaign to list assigned targeting options for.
		 * @param {string} filter Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` * `inheritance` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_LANGUAGE` or `TARGETING_TYPE_GENDER`: `targetingType="TARGETING_TYPE_LANGUAGE" OR targetingType="TARGETING_TYPE_GENDER"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `targetingType` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.
		 * @param {number} pageSize Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to `BulkListCampaignAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
		 * @return {BulkListCampaignAssignedTargetingOptionsResponse} Successful response
		 */
		Displayvideo_advertisers_campaigns_listAssignedTargetingOptions(advertiserId: string, campaignId: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<BulkListCampaignAssignedTargetingOptionsResponse> {
			return this.http.get<BulkListCampaignAssignedTargetingOptionsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/campaigns/' + (campaignId == null ? '' : encodeURIComponent(campaignId)) + ':listAssignedTargetingOptions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists channels for a partner or advertiser.
		 * Get v3/advertisers/{advertiserId}/channels
		 * @param {string} advertiserId The ID of the advertiser that owns the channels.
		 * @param {string} filter Allows filtering by channel fields. Supported syntax: * Filter expressions for channel can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All channels for which the display name contains "google": `displayName : "google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `displayName` (default) * `channelId` The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListChannels` method. If not specified, the first page of results will be returned.
		 * @param {string} partnerId The ID of the partner that owns the channels.
		 * @return {ListChannelsResponse} Successful response
		 */
		Displayvideo_advertisers_channels_list(advertiserId: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, partnerId: string | null | undefined): Observable<ListChannelsResponse> {
			return this.http.get<ListChannelsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/channels&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Creates a new channel. Returns the newly created channel if successful.
		 * Post v3/advertisers/{advertiserId}/channels
		 * @param {string} advertiserId The ID of the advertiser that owns the created channel.
		 * @param {string} partnerId The ID of the partner that owns the created channel.
		 * @return {Channel} Successful response
		 */
		Displayvideo_advertisers_channels_create(advertiserId: string, partnerId: string | null | undefined, requestBody: Channel): Observable<Channel> {
			return this.http.post<Channel>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/channels&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a channel. Returns the updated channel if successful.
		 * Patch v3/advertisers/{advertiserId}/channels/{channelId}
		 * @param {string} advertiserId The ID of the advertiser that owns the created channel.
		 * @param {string} channelId Output only. The unique ID of the channel. Assigned by the system.
		 * @param {string} partnerId The ID of the partner that owns the created channel.
		 * @param {string} updateMask Required. The mask to control which fields to update.
		 * @return {Channel} Successful response
		 */
		Displayvideo_advertisers_channels_patch(advertiserId: string, channelId: string, partnerId: string | null | undefined, updateMask: string | null | undefined, requestBody: Channel): Observable<Channel> {
			return this.http.patch<Channel>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists sites in a channel.
		 * Get v3/advertisers/{advertiserId}/channels/{channelId}/sites
		 * @param {string} advertiserId The ID of the advertiser that owns the parent channel.
		 * @param {string} channelId Required. The ID of the parent channel to which the requested sites belong.
		 * @param {string} filter Allows filtering by site fields. Supported syntax: * Filter expressions for site retrieval can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `urlOrAppId` Examples: * All sites for which the URL or app ID contains "google": `urlOrAppId : "google"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `urlOrAppId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `urlOrAppId desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `10000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListSites` method. If not specified, the first page of results will be returned.
		 * @param {string} partnerId The ID of the partner that owns the parent channel.
		 * @return {ListSitesResponse} Successful response
		 */
		Displayvideo_advertisers_channels_sites_list(advertiserId: string, channelId: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, partnerId: string | null | undefined): Observable<ListSitesResponse> {
			return this.http.get<ListSitesResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/sites&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Deletes a site from a channel.
		 * Delete v3/advertisers/{advertiserId}/channels/{channelId}/sites/{urlOrAppId}
		 * @param {string} advertiserId The ID of the advertiser that owns the parent channel.
		 * @param {string} channelId Required. The ID of the parent channel to which the site belongs.
		 * @param {string} urlOrAppId Required. The URL or app ID of the site to delete.
		 * @param {string} partnerId The ID of the partner that owns the parent channel.
		 * @return {Empty} Successful response
		 */
		Displayvideo_advertisers_channels_sites_delete(advertiserId: string, channelId: string, urlOrAppId: string, partnerId: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/sites/' + (urlOrAppId == null ? '' : encodeURIComponent(urlOrAppId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
		 * Post v3/advertisers/{advertiserId}/channels/{channelId}/sites:bulkEdit
		 * @param {string} advertiserId The ID of the advertiser that owns the parent channel.
		 * @param {string} channelId Required. The ID of the parent channel to which the sites belong.
		 * @return {BulkEditSitesResponse} Successful response
		 */
		Displayvideo_advertisers_channels_sites_bulkEdit(advertiserId: string, channelId: string, requestBody: BulkEditSitesRequest): Observable<BulkEditSitesResponse> {
			return this.http.post<BulkEditSitesResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/sites:bulkEdit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
		 * Post v3/advertisers/{advertiserId}/channels/{channelId}/sites:replace
		 * @param {string} advertiserId The ID of the advertiser that owns the parent channel.
		 * @param {string} channelId Required. The ID of the parent channel whose sites will be replaced.
		 * @return {ReplaceSitesResponse} Successful response
		 */
		Displayvideo_advertisers_channels_sites_replace(advertiserId: string, channelId: string, requestBody: ReplaceSitesRequest): Observable<ReplaceSitesResponse> {
			return this.http.post<ReplaceSitesResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/sites:replace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
		 * Get v3/advertisers/{advertiserId}/creatives
		 * @param {string} advertiserId Required. The ID of the advertiser to list creatives for.
		 * @param {string} filter Allows filtering by creative fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `lineItemIds` field must use the `HAS (:)` operator. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. * For `entityStatus`, `minDuration`, `maxDuration`, `updateTime`, and `dynamic` fields, there may be at most one restriction. Supported Fields: * `approvalStatus` * `creativeId` * `creativeType` * `dimensions` (input in the form of `{width}x{height}`) * `dynamic` * `entityStatus` * `exchangeReviewStatus` (input in the form of `{exchange}-{reviewStatus}`) * `lineItemIds` * `maxDuration` (input in the form of `{duration}s`. Only seconds are supported) * `minDuration` (input in the form of `{duration}s`. Only seconds are supported) * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Notes: * For `updateTime`, a creative resource's field value reflects the last time that a creative has been updated, which includes updates made by the system (e.g. creative review updates). Examples: * All native creatives: `creativeType="CREATIVE_TYPE_NATIVE"` * All active creatives with 300x400 or 50x100 dimensions: `entityStatus="ENTITY_STATUS_ACTIVE" AND (dimensions="300x400" OR dimensions="50x100")` * All dynamic creatives that are approved by AdX or AppNexus, with a minimum duration of 5 seconds and 200ms: `dynamic="true" AND minDuration="5.2s" AND (exchangeReviewStatus="EXCHANGE_GOOGLE_AD_MANAGER-REVIEW_STATUS_APPROVED" OR exchangeReviewStatus="EXCHANGE_APPNEXUS-REVIEW_STATUS_APPROVED")` * All video creatives that are associated with line item ID 1 or 2: `creativeType="CREATIVE_TYPE_VIDEO" AND (lineItemIds:1 OR lineItemIds:2)` * Find creatives by multiple creative IDs: `creativeId=1 OR creativeId=2` * All creatives with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `creativeId` (default) * `createTime` * `mediaDuration` * `dimensions` (sorts by width first, then by height) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `createTime desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCreatives` method. If not specified, the first page of results will be returned.
		 * @return {ListCreativesResponse} Successful response
		 */
		Displayvideo_advertisers_creatives_list(advertiserId: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCreativesResponse> {
			return this.http.get<ListCreativesResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/creatives&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new creative. Returns the newly created creative if successful. A ["Standard" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.
		 * Post v3/advertisers/{advertiserId}/creatives
		 * @param {string} advertiserId Output only. The unique ID of the advertiser the creative belongs to.
		 * @return {Creative} Successful response
		 */
		Displayvideo_advertisers_creatives_create(advertiserId: string, requestBody: Creative): Observable<Creative> {
			return this.http.post<Creative>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/creatives', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted. A ["Standard" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.
		 * Delete v3/advertisers/{advertiserId}/creatives/{creativeId}
		 * @param {string} advertiserId The ID of the advertiser this creative belongs to.
		 * @param {string} creativeId The ID of the creative to be deleted.
		 * @return {Empty} Successful response
		 */
		Displayvideo_advertisers_creatives_delete(advertiserId: string, creativeId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/creatives/' + (creativeId == null ? '' : encodeURIComponent(creativeId)), {});
		}

		/**
		 * Gets a creative.
		 * Get v3/advertisers/{advertiserId}/creatives/{creativeId}
		 * @param {string} advertiserId Required. The ID of the advertiser this creative belongs to.
		 * @param {string} creativeId Required. The ID of the creative to fetch.
		 * @return {Creative} Successful response
		 */
		Displayvideo_advertisers_creatives_get(advertiserId: string, creativeId: string): Observable<Creative> {
			return this.http.get<Creative>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/creatives/' + (creativeId == null ? '' : encodeURIComponent(creativeId)), {});
		}

		/**
		 * Updates an existing creative. Returns the updated creative if successful. A ["Standard" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.
		 * Patch v3/advertisers/{advertiserId}/creatives/{creativeId}
		 * @param {string} advertiserId Output only. The unique ID of the advertiser the creative belongs to.
		 * @param {string} creativeId Output only. The unique ID of the creative. Assigned by the system.
		 * @param {string} updateMask Required. The mask to control which fields to update.
		 * @return {Creative} Successful response
		 */
		Displayvideo_advertisers_creatives_patch(advertiserId: string, creativeId: string, updateMask: string | null | undefined, requestBody: Creative): Observable<Creative> {
			return this.http.patch<Creative>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/creatives/' + (creativeId == null ? '' : encodeURIComponent(creativeId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
		 * Get v3/advertisers/{advertiserId}/insertionOrders
		 * @param {string} advertiserId Required. The ID of the advertiser to list insertion orders for.
		 * @param {string} filter Allows filtering by insertion order fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All insertion orders under a campaign: `campaignId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` insertion orders under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED")` * All insertion orders with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All insertion orders with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * "displayName" (default) * "entityStatus" * "updateTime" The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInsertionOrders` method. If not specified, the first page of results will be returned.
		 * @return {ListInsertionOrdersResponse} Successful response
		 */
		Displayvideo_advertisers_insertionOrders_list(advertiserId: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInsertionOrdersResponse> {
			return this.http.get<ListInsertionOrdersResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/insertionOrders&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new insertion order. Returns the newly created insertion order if successful.
		 * Post v3/advertisers/{advertiserId}/insertionOrders
		 * @param {string} advertiserId Output only. The unique ID of the advertiser the insertion order belongs to.
		 * @return {InsertionOrder} Successful response
		 */
		Displayvideo_advertisers_insertionOrders_create(advertiserId: string, requestBody: InsertionOrder): Observable<InsertionOrder> {
			return this.http.post<InsertionOrder>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/insertionOrders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
		 * Delete v3/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}
		 * @param {string} advertiserId The ID of the advertiser this insertion order belongs to.
		 * @param {string} insertionOrderId The ID of the insertion order to delete.
		 * @return {Empty} Successful response
		 */
		Displayvideo_advertisers_insertionOrders_delete(advertiserId: string, insertionOrderId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/insertionOrders/' + (insertionOrderId == null ? '' : encodeURIComponent(insertionOrderId)), {});
		}

		/**
		 * Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.
		 * Get v3/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}
		 * @param {string} advertiserId Required. The ID of the advertiser this insertion order belongs to.
		 * @param {string} insertionOrderId Required. The ID of the insertion order to fetch.
		 * @return {InsertionOrder} Successful response
		 */
		Displayvideo_advertisers_insertionOrders_get(advertiserId: string, insertionOrderId: string): Observable<InsertionOrder> {
			return this.http.get<InsertionOrder>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/insertionOrders/' + (insertionOrderId == null ? '' : encodeURIComponent(insertionOrderId)), {});
		}

		/**
		 * Updates an existing insertion order. Returns the updated insertion order if successful.
		 * Patch v3/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}
		 * @param {string} advertiserId Output only. The unique ID of the advertiser the insertion order belongs to.
		 * @param {string} insertionOrderId Output only. The unique ID of the insertion order. Assigned by the system.
		 * @param {string} updateMask Required. The mask to control which fields to update.
		 * @return {InsertionOrder} Successful response
		 */
		Displayvideo_advertisers_insertionOrders_patch(advertiserId: string, insertionOrderId: string, updateMask: string | null | undefined, requestBody: InsertionOrder): Observable<InsertionOrder> {
			return this.http.patch<InsertionOrder>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/insertionOrders/' + (insertionOrderId == null ? '' : encodeURIComponent(insertionOrderId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the targeting options assigned to an insertion order.
		 * Get v3/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions
		 * @param {string} advertiserId Required. The ID of the advertiser the insertion order belongs to.
		 * @param {string} insertionOrderId Required. The ID of the insertion order to list assigned targeting options for.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`
		 * @param {string} filter Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` * `inheritance` Examples: * `AssignedTargetingOption` resources with ID 1 or 2: `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInsertionOrderAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
		 * @return {ListInsertionOrderAssignedTargetingOptionsResponse} Successful response
		 */
		Displayvideo_advertisers_insertionOrders_targetingTypes_assignedTargetingOptions_list(advertiserId: string, insertionOrderId: string, targetingType: AssignedTargetingOptionTargetingType, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInsertionOrderAssignedTargetingOptionsResponse> {
			return this.http.get<ListInsertionOrderAssignedTargetingOptionsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/insertionOrders/' + (insertionOrderId == null ? '' : encodeURIComponent(insertionOrderId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Assigns a targeting option to an insertion order. Returns the assigned targeting option if successful. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
		 * Post v3/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions
		 * @param {string} advertiserId Required. The ID of the advertiser the insertion order belongs to.
		 * @param {string} insertionOrderId Required. The ID of the insertion order the assigned targeting option will belong to.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
		 * @return {AssignedTargetingOption} Successful response
		 */
		Displayvideo_advertisers_insertionOrders_targetingTypes_assignedTargetingOptions_create(advertiserId: string, insertionOrderId: string, targetingType: AssignedTargetingOptionTargetingType, requestBody: AssignedTargetingOption): Observable<AssignedTargetingOption> {
			return this.http.post<AssignedTargetingOption>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/insertionOrders/' + (insertionOrderId == null ? '' : encodeURIComponent(insertionOrderId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an assigned targeting option from an insertion order. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
		 * Delete v3/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
		 * @param {string} advertiserId Required. The ID of the advertiser the insertion order belongs to.
		 * @param {string} insertionOrderId Required. The ID of the insertion order the assigned targeting option belongs to.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
		 * @param {string} assignedTargetingOptionId Required. The ID of the assigned targeting option to delete.
		 * @return {Empty} Successful response
		 */
		Displayvideo_advertisers_insertionOrders_targetingTypes_assignedTargetingOptions_delete(advertiserId: string, insertionOrderId: string, targetingType: AssignedTargetingOptionTargetingType, assignedTargetingOptionId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/insertionOrders/' + (insertionOrderId == null ? '' : encodeURIComponent(insertionOrderId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions/' + (assignedTargetingOptionId == null ? '' : encodeURIComponent(assignedTargetingOptionId)), {});
		}

		/**
		 * Gets a single targeting option assigned to an insertion order.
		 * Get v3/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
		 * @param {string} advertiserId Required. The ID of the advertiser the insertion order belongs to.
		 * @param {string} insertionOrderId Required. The ID of the insertion order the assigned targeting option belongs to.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`
		 * @param {string} assignedTargetingOptionId Required. An identifier unique to the targeting type in this insertion order that identifies the assigned targeting option being requested.
		 * @return {AssignedTargetingOption} Successful response
		 */
		Displayvideo_advertisers_insertionOrders_targetingTypes_assignedTargetingOptions_get(advertiserId: string, insertionOrderId: string, targetingType: AssignedTargetingOptionTargetingType, assignedTargetingOptionId: string): Observable<AssignedTargetingOption> {
			return this.http.get<AssignedTargetingOption>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/insertionOrders/' + (insertionOrderId == null ? '' : encodeURIComponent(insertionOrderId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions/' + (assignedTargetingOptionId == null ? '' : encodeURIComponent(assignedTargetingOptionId)), {});
		}

		/**
		 * Lists assigned targeting options of an insertion order across targeting types.
		 * Get v3/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}:listAssignedTargetingOptions
		 * @param {string} advertiserId Required. The ID of the advertiser the insertion order belongs to.
		 * @param {string} insertionOrderId Required. The ID of the insertion order to list assigned targeting options for.
		 * @param {string} filter Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` * `inheritance` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` or `TARGETING_TYPE_CHANNEL`: `targetingType="TARGETING_TYPE_PROXIMITY_LOCATION_LIST" OR targetingType="TARGETING_TYPE_CHANNEL"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `targetingType` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.
		 * @param {number} pageSize Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to `BulkListInsertionOrderAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
		 * @return {BulkListInsertionOrderAssignedTargetingOptionsResponse} Successful response
		 */
		Displayvideo_advertisers_insertionOrders_listAssignedTargetingOptions(advertiserId: string, insertionOrderId: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<BulkListInsertionOrderAssignedTargetingOptionsResponse> {
			return this.http.get<BulkListInsertionOrderAssignedTargetingOptionsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/insertionOrders/' + (insertionOrderId == null ? '' : encodeURIComponent(insertionOrderId)) + ':listAssignedTargetingOptions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.
		 * Get v3/advertisers/{advertiserId}/invoices
		 * @param {string} advertiserId Required. The ID of the advertiser to list invoices for.
		 * @param {string} issueMonth The month to list the invoices for. If not set, the request will retrieve invoices for the previous month. Must be in the format YYYYMM.
		 * @param {Displayvideo_advertisers_invoices_listLoiSapinInvoiceType} loiSapinInvoiceType Select type of invoice to retrieve for Loi Sapin advertisers. Only applicable to Loi Sapin advertisers. Will be ignored otherwise.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInvoices` method. If not specified, the first page of results will be returned.
		 * @return {ListInvoicesResponse} Successful response
		 */
		Displayvideo_advertisers_invoices_list(advertiserId: string, issueMonth: string | null | undefined, loiSapinInvoiceType: Displayvideo_advertisers_invoices_listLoiSapinInvoiceType | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInvoicesResponse> {
			return this.http.get<ListInvoicesResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/invoices&issueMonth=' + (issueMonth == null ? '' : encodeURIComponent(issueMonth)) + '&loiSapinInvoiceType=' + loiSapinInvoiceType + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Retrieves the invoice currency used by an advertiser in a given month.
		 * Get v3/advertisers/{advertiserId}/invoices:lookupInvoiceCurrency
		 * @param {string} advertiserId Required. The ID of the advertiser to lookup currency for.
		 * @param {string} invoiceMonth Month for which the currency is needed. If not set, the request will return existing currency settings for the advertiser. Must be in the format YYYYMM.
		 * @return {LookupInvoiceCurrencyResponse} Successful response
		 */
		Displayvideo_advertisers_invoices_lookupInvoiceCurrency(advertiserId: string, invoiceMonth: string | null | undefined): Observable<LookupInvoiceCurrencyResponse> {
			return this.http.get<LookupInvoiceCurrencyResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/invoices:lookupInvoiceCurrency&invoiceMonth=' + (invoiceMonth == null ? '' : encodeURIComponent(invoiceMonth)), {});
		}

		/**
		 * Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
		 * Get v3/advertisers/{advertiserId}/lineItems
		 * @param {string} advertiserId Required. The ID of the advertiser to list line items for.
		 * @param {string} filter Allows filtering by line item fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `insertionOrderId` * `lineItemId` * `lineItemType` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All line items under an insertion order: `insertionOrderId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` and `LINE_ITEM_TYPE_DISPLAY_DEFAULT` line items under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED") AND lineItemType="LINE_ITEM_TYPE_DISPLAY_DEFAULT"` * All line items with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All line items with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLineItems` method. If not specified, the first page of results will be returned.
		 * @return {ListLineItemsResponse} Successful response
		 */
		Displayvideo_advertisers_lineItems_list(advertiserId: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLineItemsResponse> {
			return this.http.get<ListLineItemsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/lineItems&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new line item. Returns the newly created line item if successful. YouTube & Partners line items cannot be created or updated using the API.
		 * Post v3/advertisers/{advertiserId}/lineItems
		 * @param {string} advertiserId Output only. The unique ID of the advertiser the line item belongs to.
		 * @return {LineItem} Successful response
		 */
		Displayvideo_advertisers_lineItems_create(advertiserId: string, requestBody: LineItem): Observable<LineItem> {
			return this.http.post<LineItem>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/lineItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it. YouTube & Partners line items cannot be created or updated using the API.
		 * Delete v3/advertisers/{advertiserId}/lineItems/{lineItemId}
		 * @param {string} advertiserId The ID of the advertiser this line item belongs to.
		 * @param {string} lineItemId The ID of the line item to delete.
		 * @return {Empty} Successful response
		 */
		Displayvideo_advertisers_lineItems_delete(advertiserId: string, lineItemId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/lineItems/' + (lineItemId == null ? '' : encodeURIComponent(lineItemId)), {});
		}

		/**
		 * Gets a line item.
		 * Get v3/advertisers/{advertiserId}/lineItems/{lineItemId}
		 * @param {string} advertiserId Required. The ID of the advertiser this line item belongs to.
		 * @param {string} lineItemId Required. The ID of the line item to fetch.
		 * @return {LineItem} Successful response
		 */
		Displayvideo_advertisers_lineItems_get(advertiserId: string, lineItemId: string): Observable<LineItem> {
			return this.http.get<LineItem>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/lineItems/' + (lineItemId == null ? '' : encodeURIComponent(lineItemId)), {});
		}

		/**
		 * Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * assignedTargetingOptions.create * assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API.
		 * Patch v3/advertisers/{advertiserId}/lineItems/{lineItemId}
		 * @param {string} advertiserId Output only. The unique ID of the advertiser the line item belongs to.
		 * @param {string} lineItemId Output only. The unique ID of the line item. Assigned by the system.
		 * @param {string} updateMask Required. The mask to control which fields to update.
		 * @return {LineItem} Successful response
		 */
		Displayvideo_advertisers_lineItems_patch(advertiserId: string, lineItemId: string, updateMask: string | null | undefined, requestBody: LineItem): Observable<LineItem> {
			return this.http.patch<LineItem>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/lineItems/' + (lineItemId == null ? '' : encodeURIComponent(lineItemId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the targeting options assigned to a line item.
		 * Get v3/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions
		 * @param {string} advertiserId Required. The ID of the advertiser the line item belongs to.
		 * @param {string} lineItemId Required. The ID of the line item to list assigned targeting options for.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_YOUTUBE_CHANNEL` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items) * `TARGETING_TYPE_YOUTUBE_VIDEO` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items)
		 * @param {string} filter Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` * `inheritance` Examples: * `AssignedTargetingOption` resources with ID 1 or 2: `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLineItemAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
		 * @return {ListLineItemAssignedTargetingOptionsResponse} Successful response
		 */
		Displayvideo_advertisers_lineItems_targetingTypes_assignedTargetingOptions_list(advertiserId: string, lineItemId: string, targetingType: AssignedTargetingOptionTargetingType, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLineItemAssignedTargetingOptionsResponse> {
			return this.http.get<ListLineItemAssignedTargetingOptionsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/lineItems/' + (lineItemId == null ? '' : encodeURIComponent(lineItemId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * lineItems.bulkEditAssignedTargetingOptions * lineItems.bulkUpdate * lineItems.patch * DeleteLineItemAssignedTargetingOption YouTube & Partners line items cannot be created or updated using the API.
		 * Post v3/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions
		 * @param {string} advertiserId Required. The ID of the advertiser the line item belongs to.
		 * @param {string} lineItemId Required. The ID of the line item the assigned targeting option will belong to.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`
		 * @return {AssignedTargetingOption} Successful response
		 */
		Displayvideo_advertisers_lineItems_targetingTypes_assignedTargetingOptions_create(advertiserId: string, lineItemId: string, targetingType: AssignedTargetingOptionTargetingType, requestBody: AssignedTargetingOption): Observable<AssignedTargetingOption> {
			return this.http.post<AssignedTargetingOption>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/lineItems/' + (lineItemId == null ? '' : encodeURIComponent(lineItemId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * lineItems.bulkEditAssignedTargetingOptions * lineItems.bulkUpdate * lineItems.patch * CreateLineItemAssignedTargetingOption YouTube & Partners line items cannot be created or updated using the API.
		 * Delete v3/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
		 * @param {string} advertiserId Required. The ID of the advertiser the line item belongs to.
		 * @param {string} lineItemId Required. The ID of the line item the assigned targeting option belongs to.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`
		 * @param {string} assignedTargetingOptionId Required. The ID of the assigned targeting option to delete.
		 * @return {Empty} Successful response
		 */
		Displayvideo_advertisers_lineItems_targetingTypes_assignedTargetingOptions_delete(advertiserId: string, lineItemId: string, targetingType: AssignedTargetingOptionTargetingType, assignedTargetingOptionId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/lineItems/' + (lineItemId == null ? '' : encodeURIComponent(lineItemId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions/' + (assignedTargetingOptionId == null ? '' : encodeURIComponent(assignedTargetingOptionId)), {});
		}

		/**
		 * Gets a single targeting option assigned to a line item.
		 * Get v3/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
		 * @param {string} advertiserId Required. The ID of the advertiser the line item belongs to.
		 * @param {string} lineItemId Required. The ID of the line item the assigned targeting option belongs to.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_YOUTUBE_CHANNEL` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items) * `TARGETING_TYPE_YOUTUBE_VIDEO` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items)
		 * @param {string} assignedTargetingOptionId Required. An identifier unique to the targeting type in this line item that identifies the assigned targeting option being requested.
		 * @return {AssignedTargetingOption} Successful response
		 */
		Displayvideo_advertisers_lineItems_targetingTypes_assignedTargetingOptions_get(advertiserId: string, lineItemId: string, targetingType: AssignedTargetingOptionTargetingType, assignedTargetingOptionId: string): Observable<AssignedTargetingOption> {
			return this.http.get<AssignedTargetingOption>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/lineItems/' + (lineItemId == null ? '' : encodeURIComponent(lineItemId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions/' + (assignedTargetingOptionId == null ? '' : encodeURIComponent(assignedTargetingOptionId)), {});
		}

		/**
		 * Duplicates a line item. Returns the ID of the created line item if successful. YouTube & Partners line items cannot be created or updated using the API.
		 * Post v3/advertisers/{advertiserId}/lineItems/{lineItemId}:duplicate
		 * @param {string} advertiserId Required. The ID of the advertiser this line item belongs to.
		 * @param {string} lineItemId Required. The ID of the line item to duplicate.
		 * @return {DuplicateLineItemResponse} Successful response
		 */
		Displayvideo_advertisers_lineItems_duplicate(advertiserId: string, lineItemId: string, requestBody: DuplicateLineItemRequest): Observable<DuplicateLineItemResponse> {
			return this.http.post<DuplicateLineItemResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/lineItems/' + (lineItemId == null ? '' : encodeURIComponent(lineItemId)) + ':duplicate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * lineItems.bulkUpdate * lineItems.patch * assignedTargetingOptions.create * assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API.
		 * Post v3/advertisers/{advertiserId}/lineItems:bulkEditAssignedTargetingOptions
		 * @param {string} advertiserId Required. The ID of the advertiser the line items belong to.
		 * @return {BulkEditAssignedTargetingOptionsResponse} Successful response
		 */
		Displayvideo_advertisers_lineItems_bulkEditAssignedTargetingOptions(advertiserId: string, requestBody: BulkEditAssignedTargetingOptionsRequest): Observable<BulkEditAssignedTargetingOptionsResponse> {
			return this.http.post<BulkEditAssignedTargetingOptionsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/lineItems:bulkEditAssignedTargetingOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists assigned targeting options for multiple line items across targeting types.
		 * Get v3/advertisers/{advertiserId}/lineItems:bulkListAssignedTargetingOptions
		 * @param {string} advertiserId Required. The ID of the advertiser the line items belongs to.
		 * @param {string} filter Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR` on the same field. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` * `inheritance` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` or `TARGETING_TYPE_CHANNEL`: `targetingType="TARGETING_TYPE_PROXIMITY_LOCATION_LIST" OR targetingType="TARGETING_TYPE_CHANNEL"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {Array<string>} lineItemIds Required. The IDs of the line items to list assigned targeting options for.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `lineItemId` (default) * `assignedTargetingOption.targetingType` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.
		 * @param {number} pageSize Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to the `BulkListAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
		 * @return {BulkListAssignedTargetingOptionsResponse} Successful response
		 */
		Displayvideo_advertisers_lineItems_bulkListAssignedTargetingOptions(advertiserId: string, filter: string | null | undefined, lineItemIds: Array<string> | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<BulkListAssignedTargetingOptionsResponse> {
			return this.http.get<BulkListAssignedTargetingOptionsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/lineItems:bulkListAssignedTargetingOptions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&' + lineItemIds?.map(z => `lineItemIds=${encodeURIComponent(z)}`).join('&') + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * UpdateLineItem * assignedTargetingOptions.create * assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API.
		 * Post v3/advertisers/{advertiserId}/lineItems:bulkUpdate
		 * @param {string} advertiserId Required. The ID of the advertiser this line item belongs to.
		 * @return {BulkUpdateLineItemsResponse} Successful response
		 */
		Displayvideo_advertisers_lineItems_bulkUpdate(advertiserId: string, requestBody: BulkUpdateLineItemsRequest): Observable<BulkUpdateLineItemsResponse> {
			return this.http.post<BulkUpdateLineItemsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/lineItems:bulkUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type YouTube & Partners line items cannot be created or updated using the API.
		 * Post v3/advertisers/{advertiserId}/lineItems:generateDefault
		 * @param {string} advertiserId Required. The ID of the advertiser this line item belongs to.
		 * @return {LineItem} Successful response
		 */
		Displayvideo_advertisers_lineItems_generateDefault(advertiserId: string, requestBody: GenerateDefaultLineItemRequest): Observable<LineItem> {
			return this.http.post<LineItem>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/lineItems:generateDefault', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists location lists based on a given advertiser id.
		 * Get v3/advertisers/{advertiserId}/locationLists
		 * @param {string} advertiserId Required. The ID of the DV360 advertiser to which the fetched location lists belong.
		 * @param {string} filter Allows filtering by location list fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `locationType` Examples: * All regional location list: `locationType="TARGETING_LOCATION_TYPE_REGIONAL"` * All proximity location list: `locationType="TARGETING_LOCATION_TYPE_PROXIMITY"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `locationListId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. Defaults to `100` if not set. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLocationLists` method. If not specified, the first page of results will be returned.
		 * @return {ListLocationListsResponse} Successful response
		 */
		Displayvideo_advertisers_locationLists_list(advertiserId: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationListsResponse> {
			return this.http.get<ListLocationListsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/locationLists&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new location list. Returns the newly created location list if successful.
		 * Post v3/advertisers/{advertiserId}/locationLists
		 * @param {string} advertiserId Required. The ID of the DV360 advertiser to which the location list belongs.
		 * @return {LocationList} Successful response
		 */
		Displayvideo_advertisers_locationLists_create(advertiserId: string, requestBody: LocationList): Observable<LocationList> {
			return this.http.post<LocationList>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/locationLists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a location list. Returns the updated location list if successful.
		 * Patch v3/advertisers/{advertiserId}/locationLists/{locationListId}
		 * @param {string} advertiserId Required. The ID of the DV360 advertiser to which the location lists belongs.
		 * @param {string} locationListId Output only. The unique ID of the location list. Assigned by the system.
		 * @param {string} updateMask Required. The mask to control which fields to update.
		 * @return {LocationList} Successful response
		 */
		Displayvideo_advertisers_locationLists_patch(advertiserId: string, locationListId: string, updateMask: string | null | undefined, requestBody: LocationList): Observable<LocationList> {
			return this.http.patch<LocationList>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/locationLists/' + (locationListId == null ? '' : encodeURIComponent(locationListId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists locations assigned to a location list.
		 * Get v3/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations
		 * @param {string} advertiserId Required. The ID of the DV360 advertiser to which the location list belongs.
		 * @param {string} locationListId Required. The ID of the location list to which these assignments are assigned.
		 * @param {string} filter Allows filtering by location list assignment fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedLocationId` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `assignedLocationId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `assignedLocationId desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAssignedLocations` method. If not specified, the first page of results will be returned.
		 * @return {ListAssignedLocationsResponse} Successful response
		 */
		Displayvideo_advertisers_locationLists_assignedLocations_list(advertiserId: string, locationListId: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAssignedLocationsResponse> {
			return this.http.get<ListAssignedLocationsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/locationLists/' + (locationListId == null ? '' : encodeURIComponent(locationListId)) + '/assignedLocations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an assignment between a location and a location list.
		 * Post v3/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations
		 * @param {string} advertiserId Required. The ID of the DV360 advertiser to which the location list belongs.
		 * @param {string} locationListId Required. The ID of the location list for which the assignment will be created.
		 * @return {AssignedLocation} Successful response
		 */
		Displayvideo_advertisers_locationLists_assignedLocations_create(advertiserId: string, locationListId: string, requestBody: AssignedLocation): Observable<AssignedLocation> {
			return this.http.post<AssignedLocation>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/locationLists/' + (locationListId == null ? '' : encodeURIComponent(locationListId)) + '/assignedLocations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the assignment between a location and a location list.
		 * Delete v3/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations/{assignedLocationId}
		 * @param {string} advertiserId Required. The ID of the DV360 advertiser to which the location list belongs.
		 * @param {string} locationListId Required. The ID of the location list to which this assignment is assigned.
		 * @param {string} assignedLocationId Required. The ID of the assigned location to delete.
		 * @return {Empty} Successful response
		 */
		Displayvideo_advertisers_locationLists_assignedLocations_delete(advertiserId: string, locationListId: string, assignedLocationId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/locationLists/' + (locationListId == null ? '' : encodeURIComponent(locationListId)) + '/assignedLocations/' + (assignedLocationId == null ? '' : encodeURIComponent(assignedLocationId)), {});
		}

		/**
		 * Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in deletedAssignedLocations and then create the assigned locations provided in createdAssignedLocations.
		 * Post v3/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations:bulkEdit
		 * @param {string} advertiserId Required. The ID of the DV360 advertiser to which the location list belongs.
		 * @param {string} locationListId Required. The ID of the location list to which these assignments are assigned.
		 * @return {BulkEditAssignedLocationsResponse} Successful response
		 */
		Displayvideo_advertisers_locationLists_assignedLocations_bulkEdit(advertiserId: string, locationListId: string, requestBody: BulkEditAssignedLocationsRequest): Observable<BulkEditAssignedLocationsResponse> {
			return this.http.post<BulkEditAssignedLocationsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/locationLists/' + (locationListId == null ? '' : encodeURIComponent(locationListId)) + '/assignedLocations:bulkEdit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists negative keyword lists based on a given advertiser id.
		 * Get v3/advertisers/{advertiserId}/negativeKeywordLists
		 * @param {string} advertiserId Required. The ID of the DV360 advertiser to which the fetched negative keyword lists belong.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. Defaults to `100` if not set. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListNegativeKeywordLists` method. If not specified, the first page of results will be returned.
		 * @return {ListNegativeKeywordListsResponse} Successful response
		 */
		Displayvideo_advertisers_negativeKeywordLists_list(advertiserId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNegativeKeywordListsResponse> {
			return this.http.get<ListNegativeKeywordListsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/negativeKeywordLists&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new negative keyword list. Returns the newly created negative keyword list if successful.
		 * Post v3/advertisers/{advertiserId}/negativeKeywordLists
		 * @param {string} advertiserId Required. The ID of the DV360 advertiser to which the negative keyword list will belong.
		 * @return {NegativeKeywordList} Successful response
		 */
		Displayvideo_advertisers_negativeKeywordLists_create(advertiserId: string, requestBody: NegativeKeywordList): Observable<NegativeKeywordList> {
			return this.http.post<NegativeKeywordList>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/negativeKeywordLists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a negative keyword list. Returns the updated negative keyword list if successful.
		 * Patch v3/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}
		 * @param {string} advertiserId Required. The ID of the DV360 advertiser to which the negative keyword list belongs.
		 * @param {string} negativeKeywordListId Output only. The unique ID of the negative keyword list. Assigned by the system.
		 * @param {string} updateMask Required. The mask to control which fields to update.
		 * @return {NegativeKeywordList} Successful response
		 */
		Displayvideo_advertisers_negativeKeywordLists_patch(advertiserId: string, negativeKeywordListId: string, updateMask: string | null | undefined, requestBody: NegativeKeywordList): Observable<NegativeKeywordList> {
			return this.http.patch<NegativeKeywordList>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/negativeKeywordLists/' + (negativeKeywordListId == null ? '' : encodeURIComponent(negativeKeywordListId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists negative keywords in a negative keyword list.
		 * Get v3/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords
		 * @param {string} advertiserId Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
		 * @param {string} negativeKeywordListId Required. The ID of the parent negative keyword list to which the requested negative keywords belong.
		 * @param {string} filter Allows filtering by negative keyword fields. Supported syntax: * Filter expressions for negative keywords can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `keywordValue` Examples: * All negative keywords for which the keyword value contains "google": `keywordValue : "google"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `keywordValue` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `keywordValue desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `1000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListNegativeKeywords` method. If not specified, the first page of results will be returned.
		 * @return {ListNegativeKeywordsResponse} Successful response
		 */
		Displayvideo_advertisers_negativeKeywordLists_negativeKeywords_list(advertiserId: string, negativeKeywordListId: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNegativeKeywordsResponse> {
			return this.http.get<ListNegativeKeywordsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/negativeKeywordLists/' + (negativeKeywordListId == null ? '' : encodeURIComponent(negativeKeywordListId)) + '/negativeKeywords&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Deletes a negative keyword from a negative keyword list.
		 * Delete v3/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords/{keywordValue}
		 * @param {string} advertiserId Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
		 * @param {string} negativeKeywordListId Required. The ID of the parent negative keyword list to which the negative keyword belongs.
		 * @param {string} keywordValue Required. The keyword value of the negative keyword to delete.
		 * @return {Empty} Successful response
		 */
		Displayvideo_advertisers_negativeKeywordLists_negativeKeywords_delete(advertiserId: string, negativeKeywordListId: string, keywordValue: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/negativeKeywordLists/' + (negativeKeywordListId == null ? '' : encodeURIComponent(negativeKeywordListId)) + '/negativeKeywords/' + (keywordValue == null ? '' : encodeURIComponent(keywordValue)), {});
		}

		/**
		 * Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.
		 * Post v3/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords:bulkEdit
		 * @param {string} advertiserId Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
		 * @param {string} negativeKeywordListId Required. The ID of the parent negative keyword list to which the negative keywords belong.
		 * @return {BulkEditNegativeKeywordsResponse} Successful response
		 */
		Displayvideo_advertisers_negativeKeywordLists_negativeKeywords_bulkEdit(advertiserId: string, negativeKeywordListId: string, requestBody: BulkEditNegativeKeywordsRequest): Observable<BulkEditNegativeKeywordsResponse> {
			return this.http.post<BulkEditNegativeKeywordsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/negativeKeywordLists/' + (negativeKeywordListId == null ? '' : encodeURIComponent(negativeKeywordListId)) + '/negativeKeywords:bulkEdit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.
		 * Post v3/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords:replace
		 * @param {string} advertiserId Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.
		 * @param {string} negativeKeywordListId Required. The ID of the parent negative keyword list to which the negative keywords belong.
		 * @return {ReplaceNegativeKeywordsResponse} Successful response
		 */
		Displayvideo_advertisers_negativeKeywordLists_negativeKeywords_replace(advertiserId: string, negativeKeywordListId: string, requestBody: ReplaceNegativeKeywordsRequest): Observable<ReplaceNegativeKeywordsResponse> {
			return this.http.post<ReplaceNegativeKeywordsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/negativeKeywordLists/' + (negativeKeywordListId == null ? '' : encodeURIComponent(negativeKeywordListId)) + '/negativeKeywords:replace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the targeting options assigned to an advertiser.
		 * Get v3/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions
		 * @param {string} advertiserId Required. The ID of the advertiser.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_YOUTUBE_VIDEO` * `TARGETING_TYPE_YOUTUBE_CHANNEL`
		 * @param {string} filter Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` Examples: * `AssignedTargetingOption` with ID 123456: `assignedTargetingOptionId="123456"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdvertiserAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
		 * @return {ListAdvertiserAssignedTargetingOptionsResponse} Successful response
		 */
		Displayvideo_advertisers_targetingTypes_assignedTargetingOptions_list(advertiserId: string, targetingType: AssignedTargetingOptionTargetingType, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAdvertiserAssignedTargetingOptionsResponse> {
			return this.http.get<ListAdvertiserAssignedTargetingOptionsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.
		 * Post v3/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions
		 * @param {string} advertiserId Required. The ID of the advertiser.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`
		 * @return {AssignedTargetingOption} Successful response
		 */
		Displayvideo_advertisers_targetingTypes_assignedTargetingOptions_create(advertiserId: string, targetingType: AssignedTargetingOptionTargetingType, requestBody: AssignedTargetingOption): Observable<AssignedTargetingOption> {
			return this.http.post<AssignedTargetingOption>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an assigned targeting option from an advertiser.
		 * Delete v3/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
		 * @param {string} advertiserId Required. The ID of the advertiser.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`
		 * @param {string} assignedTargetingOptionId Required. The ID of the assigned targeting option to delete.
		 * @return {Empty} Successful response
		 */
		Displayvideo_advertisers_targetingTypes_assignedTargetingOptions_delete(advertiserId: string, targetingType: AssignedTargetingOptionTargetingType, assignedTargetingOptionId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions/' + (assignedTargetingOptionId == null ? '' : encodeURIComponent(assignedTargetingOptionId)), {});
		}

		/**
		 * Gets a single targeting option assigned to an advertiser.
		 * Get v3/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
		 * @param {string} advertiserId Required. The ID of the advertiser.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_YOUTUBE_VIDEO` * `TARGETING_TYPE_YOUTUBE_CHANNEL`
		 * @param {string} assignedTargetingOptionId Required. An identifier unique to the targeting type in this advertiser that identifies the assigned targeting option being requested.
		 * @return {AssignedTargetingOption} Successful response
		 */
		Displayvideo_advertisers_targetingTypes_assignedTargetingOptions_get(advertiserId: string, targetingType: AssignedTargetingOptionTargetingType, assignedTargetingOptionId: string): Observable<AssignedTargetingOption> {
			return this.http.get<AssignedTargetingOption>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions/' + (assignedTargetingOptionId == null ? '' : encodeURIComponent(assignedTargetingOptionId)), {});
		}

		/**
		 * Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.
		 * Get v3/advertisers/{advertiserId}:audit
		 * @param {string} advertiserId Required. The ID of the advertiser to audit.
		 * @param {string} readMask Optional. The specific fields to return. If no mask is specified, all fields in the response proto will be filled. Valid values are: * usedLineItemsCount * usedInsertionOrdersCount * usedCampaignsCount * channelsCount * negativelyTargetedChannelsCount * negativeKeywordListsCount * adGroupCriteriaCount * campaignCriteriaCount
		 * @return {AuditAdvertiserResponse} Successful response
		 */
		Displayvideo_advertisers_audit(advertiserId: string, readMask: string | null | undefined): Observable<AuditAdvertiserResponse> {
			return this.http.get<AuditAdvertiserResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + ':audit&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
		 * Post v3/advertisers/{advertiserId}:editAssignedTargetingOptions
		 * @param {string} advertiserId Required. The ID of the advertiser.
		 * @return {BulkEditAdvertiserAssignedTargetingOptionsResponse} Successful response
		 */
		Displayvideo_advertisers_editAssignedTargetingOptions(advertiserId: string, requestBody: BulkEditAdvertiserAssignedTargetingOptionsRequest): Observable<BulkEditAdvertiserAssignedTargetingOptionsResponse> {
			return this.http.post<BulkEditAdvertiserAssignedTargetingOptionsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + ':editAssignedTargetingOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists assigned targeting options of an advertiser across targeting types.
		 * Get v3/advertisers/{advertiserId}:listAssignedTargetingOptions
		 * @param {string} advertiserId Required. The ID of the advertiser the line item belongs to.
		 * @param {string} filter Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=) operator`. Supported fields: * `targetingType` Examples: * targetingType with value TARGETING_TYPE_CHANNEL `targetingType="TARGETING_TYPE_CHANNEL"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `targetingType` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.
		 * @param {number} pageSize Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is '5000'. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to `BulkListAdvertiserAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
		 * @return {BulkListAdvertiserAssignedTargetingOptionsResponse} Successful response
		 */
		Displayvideo_advertisers_listAssignedTargetingOptions(advertiserId: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<BulkListAdvertiserAssignedTargetingOptionsResponse> {
			return this.http.get<BulkListAdvertiserAssignedTargetingOptionsResponse>(this.baseUri + 'v3/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + ':listAssignedTargetingOptions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists combined audiences. The order is defined by the order_by parameter.
		 * Get v3/combinedAudiences
		 * @param {string} advertiserId The ID of the advertiser that has access to the fetched combined audiences.
		 * @param {string} filter Allows filtering by combined audience fields. Supported syntax: * Filter expressions for combined audiences can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All combined audiences for which the display name contains "Google": `displayName : "Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `combinedAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCombinedAudiences` method. If not specified, the first page of results will be returned.
		 * @param {string} partnerId The ID of the partner that has access to the fetched combined audiences.
		 * @return {ListCombinedAudiencesResponse} Successful response
		 */
		Displayvideo_combinedAudiences_list(advertiserId: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, partnerId: string | null | undefined): Observable<ListCombinedAudiencesResponse> {
			return this.http.get<ListCombinedAudiencesResponse>(this.baseUri + 'v3/combinedAudiences?advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Gets a combined audience.
		 * Get v3/combinedAudiences/{combinedAudienceId}
		 * @param {string} combinedAudienceId Required. The ID of the combined audience to fetch.
		 * @param {string} advertiserId The ID of the advertiser that has access to the fetched combined audience.
		 * @param {string} partnerId The ID of the partner that has access to the fetched combined audience.
		 * @return {CombinedAudience} Successful response
		 */
		Displayvideo_combinedAudiences_get(combinedAudienceId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined): Observable<CombinedAudience> {
			return this.http.get<CombinedAudience>(this.baseUri + 'v3/combinedAudiences/' + (combinedAudienceId == null ? '' : encodeURIComponent(combinedAudienceId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.
		 * Get v3/customBiddingAlgorithms
		 * @param {string} advertiserId The ID of the DV360 advertiser that has access to the custom bidding algorithm.
		 * @param {string} filter Allows filtering by custom bidding algorithm fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND`. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `customBiddingAlgorithmType` field must use the `EQUALS (=)` operator. * The `displayName` field must use the `HAS (:)` operator. Supported fields: * `customBiddingAlgorithmType` * `displayName` Examples: * All custom bidding algorithms for which the display name contains "politics": `displayName:"politics"`. * All custom bidding algorithms for which the type is "SCRIPT_BASED": `customBiddingAlgorithmType=SCRIPT_BASED` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomBiddingAlgorithms` method. If not specified, the first page of results will be returned.
		 * @param {string} partnerId The ID of the DV360 partner that has access to the custom bidding algorithm.
		 * @return {ListCustomBiddingAlgorithmsResponse} Successful response
		 */
		Displayvideo_customBiddingAlgorithms_list(advertiserId: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, partnerId: string | null | undefined): Observable<ListCustomBiddingAlgorithmsResponse> {
			return this.http.get<ListCustomBiddingAlgorithmsResponse>(this.baseUri + 'v3/customBiddingAlgorithms?advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.
		 * Post v3/customBiddingAlgorithms
		 * @return {CustomBiddingAlgorithm} Successful response
		 */
		Displayvideo_customBiddingAlgorithms_create(requestBody: CustomBiddingAlgorithm): Observable<CustomBiddingAlgorithm> {
			return this.http.post<CustomBiddingAlgorithm>(this.baseUri + 'v3/customBiddingAlgorithms', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a custom bidding algorithm.
		 * Get v3/customBiddingAlgorithms/{customBiddingAlgorithmId}
		 * @param {string} customBiddingAlgorithmId Required. The ID of the custom bidding algorithm to fetch.
		 * @param {string} advertiserId The ID of the DV360 partner that has access to the custom bidding algorithm.
		 * @param {string} partnerId The ID of the DV360 partner that has access to the custom bidding algorithm.
		 * @return {CustomBiddingAlgorithm} Successful response
		 */
		Displayvideo_customBiddingAlgorithms_get(customBiddingAlgorithmId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined): Observable<CustomBiddingAlgorithm> {
			return this.http.get<CustomBiddingAlgorithm>(this.baseUri + 'v3/customBiddingAlgorithms/' + (customBiddingAlgorithmId == null ? '' : encodeURIComponent(customBiddingAlgorithmId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.
		 * Patch v3/customBiddingAlgorithms/{customBiddingAlgorithmId}
		 * @param {string} customBiddingAlgorithmId Output only. The unique ID of the custom bidding algorithm. Assigned by the system.
		 * @param {string} updateMask Required. The mask to control which fields to update.
		 * @return {CustomBiddingAlgorithm} Successful response
		 */
		Displayvideo_customBiddingAlgorithms_patch(customBiddingAlgorithmId: string, updateMask: string | null | undefined, requestBody: CustomBiddingAlgorithm): Observable<CustomBiddingAlgorithm> {
			return this.http.patch<CustomBiddingAlgorithm>(this.baseUri + 'v3/customBiddingAlgorithms/' + (customBiddingAlgorithmId == null ? '' : encodeURIComponent(customBiddingAlgorithmId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists rules resources that belong to the given algorithm. The order is defined by the order_by parameter.
		 * Get v3/customBiddingAlgorithms/{customBiddingAlgorithmId}/rules
		 * @param {string} customBiddingAlgorithmId Required. The ID of the custom bidding algorithm that owns the rules resource.
		 * @param {string} advertiserId The ID of the advertiser that owns the parent custom bidding algorithm.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `createTime desc` (default) The default sorting order is descending. To specify ascending order for a field, the suffix "desc" should be removed. Example: `createTime`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomBiddingAlgorithmRules` method. If not specified, the first page of results will be returned.
		 * @param {string} partnerId The ID of the partner that owns the parent custom bidding algorithm.
		 * @return {ListCustomBiddingAlgorithmRulesResponse} Successful response
		 */
		Displayvideo_customBiddingAlgorithms_rules_list(customBiddingAlgorithmId: string, advertiserId: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, partnerId: string | null | undefined): Observable<ListCustomBiddingAlgorithmRulesResponse> {
			return this.http.get<ListCustomBiddingAlgorithmRulesResponse>(this.baseUri + 'v3/customBiddingAlgorithms/' + (customBiddingAlgorithmId == null ? '' : encodeURIComponent(customBiddingAlgorithmId)) + '/rules&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Creates a new rules resource. Returns the newly created rules resource if successful.
		 * Post v3/customBiddingAlgorithms/{customBiddingAlgorithmId}/rules
		 * @param {string} customBiddingAlgorithmId Required. The ID of the custom bidding algorithm that owns the rules resource.
		 * @param {string} advertiserId The ID of the advertiser that owns the parent custom bidding algorithm.
		 * @param {string} partnerId The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this rules resource.
		 * @return {CustomBiddingAlgorithmRules} Successful response
		 */
		Displayvideo_customBiddingAlgorithms_rules_create(customBiddingAlgorithmId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined, requestBody: CustomBiddingAlgorithmRules): Observable<CustomBiddingAlgorithmRules> {
			return this.http.post<CustomBiddingAlgorithmRules>(this.baseUri + 'v3/customBiddingAlgorithms/' + (customBiddingAlgorithmId == null ? '' : encodeURIComponent(customBiddingAlgorithmId)) + '/rules&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a rules resource.
		 * Get v3/customBiddingAlgorithms/{customBiddingAlgorithmId}/rules/{customBiddingAlgorithmRulesId}
		 * @param {string} customBiddingAlgorithmId Required. The ID of the custom bidding algorithm that owns the rules resource.
		 * @param {string} customBiddingAlgorithmRulesId Required. The ID of the rules resource to fetch.
		 * @param {string} advertiserId The ID of the advertiser that owns the parent custom bidding algorithm.
		 * @param {string} partnerId The ID of the partner that owns the parent custom bidding algorithm.
		 * @return {CustomBiddingAlgorithmRules} Successful response
		 */
		Displayvideo_customBiddingAlgorithms_rules_get(customBiddingAlgorithmId: string, customBiddingAlgorithmRulesId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined): Observable<CustomBiddingAlgorithmRules> {
			return this.http.get<CustomBiddingAlgorithmRules>(this.baseUri + 'v3/customBiddingAlgorithms/' + (customBiddingAlgorithmId == null ? '' : encodeURIComponent(customBiddingAlgorithmId)) + '/rules/' + (customBiddingAlgorithmRulesId == null ? '' : encodeURIComponent(customBiddingAlgorithmRulesId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.
		 * Get v3/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts
		 * @param {string} customBiddingAlgorithmId Required. The ID of the custom bidding algorithm owns the script.
		 * @param {string} advertiserId The ID of the advertiser that owns the parent custom bidding algorithm.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `createTime desc` (default) The default sorting order is descending. To specify ascending order for a field, the suffix "desc" should be removed. Example: `createTime`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomBiddingScripts` method. If not specified, the first page of results will be returned.
		 * @param {string} partnerId The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script.
		 * @return {ListCustomBiddingScriptsResponse} Successful response
		 */
		Displayvideo_customBiddingAlgorithms_scripts_list(customBiddingAlgorithmId: string, advertiserId: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, partnerId: string | null | undefined): Observable<ListCustomBiddingScriptsResponse> {
			return this.http.get<ListCustomBiddingScriptsResponse>(this.baseUri + 'v3/customBiddingAlgorithms/' + (customBiddingAlgorithmId == null ? '' : encodeURIComponent(customBiddingAlgorithmId)) + '/scripts&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Creates a new custom bidding script. Returns the newly created script if successful.
		 * Post v3/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts
		 * @param {string} customBiddingAlgorithmId Required. The ID of the custom bidding algorithm that owns the script.
		 * @param {string} advertiserId The ID of the advertiser that owns the parent custom bidding algorithm.
		 * @param {string} partnerId The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script.
		 * @return {CustomBiddingScript} Successful response
		 */
		Displayvideo_customBiddingAlgorithms_scripts_create(customBiddingAlgorithmId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined, requestBody: CustomBiddingScript): Observable<CustomBiddingScript> {
			return this.http.post<CustomBiddingScript>(this.baseUri + 'v3/customBiddingAlgorithms/' + (customBiddingAlgorithmId == null ? '' : encodeURIComponent(customBiddingAlgorithmId)) + '/scripts&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a custom bidding script.
		 * Get v3/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts/{customBiddingScriptId}
		 * @param {string} customBiddingAlgorithmId Required. The ID of the custom bidding algorithm owns the script.
		 * @param {string} customBiddingScriptId Required. The ID of the custom bidding script to fetch.
		 * @param {string} advertiserId The ID of the advertiser that owns the parent custom bidding algorithm.
		 * @param {string} partnerId The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script.
		 * @return {CustomBiddingScript} Successful response
		 */
		Displayvideo_customBiddingAlgorithms_scripts_get(customBiddingAlgorithmId: string, customBiddingScriptId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined): Observable<CustomBiddingScript> {
			return this.http.get<CustomBiddingScript>(this.baseUri + 'v3/customBiddingAlgorithms/' + (customBiddingAlgorithmId == null ? '' : encodeURIComponent(customBiddingAlgorithmId)) + '/scripts/' + (customBiddingScriptId == null ? '' : encodeURIComponent(customBiddingScriptId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Creates a rules reference object for an AlgorithmRules file. The resulting reference object provides a resource path where the AlgorithmRules file should be uploaded. This reference object should be included when creating a new CustomBiddingAlgorithmRules resource.
		 * Get v3/customBiddingAlgorithms/{customBiddingAlgorithmId}:uploadRules
		 * @param {string} customBiddingAlgorithmId Required. The ID of the custom bidding algorithm that owns the rules resource.
		 * @param {string} advertiserId The ID of the advertiser that owns the parent custom bidding algorithm.
		 * @param {string} partnerId The ID of the partner that owns the parent custom bidding algorithm.
		 * @return {CustomBiddingAlgorithmRulesRef} Successful response
		 */
		Displayvideo_customBiddingAlgorithms_uploadRules(customBiddingAlgorithmId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined): Observable<CustomBiddingAlgorithmRulesRef> {
			return this.http.get<CustomBiddingAlgorithmRulesRef>(this.baseUri + 'v3/customBiddingAlgorithms/' + (customBiddingAlgorithmId == null ? '' : encodeURIComponent(customBiddingAlgorithmId)) + ':uploadRules&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.
		 * Get v3/customBiddingAlgorithms/{customBiddingAlgorithmId}:uploadScript
		 * @param {string} customBiddingAlgorithmId Required. The ID of the custom bidding algorithm owns the script.
		 * @param {string} advertiserId The ID of the advertiser that owns the parent custom bidding algorithm.
		 * @param {string} partnerId The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script.
		 * @return {CustomBiddingScriptRef} Successful response
		 */
		Displayvideo_customBiddingAlgorithms_uploadScript(customBiddingAlgorithmId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined): Observable<CustomBiddingScriptRef> {
			return this.http.get<CustomBiddingScriptRef>(this.baseUri + 'v3/customBiddingAlgorithms/' + (customBiddingAlgorithmId == null ? '' : encodeURIComponent(customBiddingAlgorithmId)) + ':uploadScript&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Lists custom lists. The order is defined by the order_by parameter.
		 * Get v3/customLists
		 * @param {string} advertiserId The ID of the DV360 advertiser that has access to the fetched custom lists.
		 * @param {string} filter Allows filtering by custom list fields. Supported syntax: * Filter expressions for custom lists can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All custom lists for which the display name contains "Google": `displayName:"Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `customListId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomLists` method. If not specified, the first page of results will be returned.
		 * @return {ListCustomListsResponse} Successful response
		 */
		Displayvideo_customLists_list(advertiserId: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCustomListsResponse> {
			return this.http.get<ListCustomListsResponse>(this.baseUri + 'v3/customLists?advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets a custom list.
		 * Get v3/customLists/{customListId}
		 * @param {string} customListId Required. The ID of the custom list to fetch.
		 * @param {string} advertiserId The ID of the DV360 advertiser that has access to the fetched custom lists.
		 * @return {CustomList} Successful response
		 */
		Displayvideo_customLists_get(customListId: string, advertiserId: string | null | undefined): Observable<CustomList> {
			return this.http.get<CustomList>(this.baseUri + 'v3/customLists/' + (customListId == null ? '' : encodeURIComponent(customListId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)), {});
		}

		/**
		 * Lists first and third party audiences. The order is defined by the order_by parameter.
		 * Get v3/firstAndThirdPartyAudiences
		 * @param {string} advertiserId The ID of the advertiser that has access to the fetched first and third party audiences.
		 * @param {string} filter Allows filtering by first and third party audience fields. Supported syntax: * Filter expressions for first and third party audiences can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All first and third party audiences for which the display name contains "Google": `displayName:"Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `firstAndThirdPartyAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListFirstAndThirdPartyAudiences` method. If not specified, the first page of results will be returned.
		 * @param {string} partnerId The ID of the partner that has access to the fetched first and third party audiences.
		 * @return {ListFirstAndThirdPartyAudiencesResponse} Successful response
		 */
		Displayvideo_firstAndThirdPartyAudiences_list(advertiserId: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, partnerId: string | null | undefined): Observable<ListFirstAndThirdPartyAudiencesResponse> {
			return this.http.get<ListFirstAndThirdPartyAudiencesResponse>(this.baseUri + 'v3/firstAndThirdPartyAudiences?advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
		 * Post v3/firstAndThirdPartyAudiences
		 * @param {string} advertiserId Required. The ID of the advertiser under whom the FirstAndThirdPartyAudience will be created.
		 * @return {FirstAndThirdPartyAudience} Successful response
		 */
		Displayvideo_firstAndThirdPartyAudiences_create(advertiserId: string | null | undefined, requestBody: FirstAndThirdPartyAudience): Observable<FirstAndThirdPartyAudience> {
			return this.http.post<FirstAndThirdPartyAudience>(this.baseUri + 'v3/firstAndThirdPartyAudiences?advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a first and third party audience.
		 * Get v3/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}
		 * @param {string} firstAndThirdPartyAudienceId Required. The ID of the first and third party audience to fetch.
		 * @param {string} advertiserId The ID of the advertiser that has access to the fetched first and third party audience.
		 * @param {string} partnerId The ID of the partner that has access to the fetched first and third party audience.
		 * @return {FirstAndThirdPartyAudience} Successful response
		 */
		Displayvideo_firstAndThirdPartyAudiences_get(firstAndThirdPartyAudienceId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined): Observable<FirstAndThirdPartyAudience> {
			return this.http.get<FirstAndThirdPartyAudience>(this.baseUri + 'v3/firstAndThirdPartyAudiences/' + (firstAndThirdPartyAudienceId == null ? '' : encodeURIComponent(firstAndThirdPartyAudienceId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
		 * Patch v3/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}
		 * @param {string} firstAndThirdPartyAudienceId Output only. The unique ID of the first and third party audience. Assigned by the system.
		 * @param {string} advertiserId Required. The ID of the owner advertiser of the updated FirstAndThirdPartyAudience.
		 * @param {string} updateMask Required. The mask to control which fields to update. Updates are only supported for the following fields: * `displayName` * `description` * `membershipDurationDays`
		 * @return {FirstAndThirdPartyAudience} Successful response
		 */
		Displayvideo_firstAndThirdPartyAudiences_patch(firstAndThirdPartyAudienceId: string, advertiserId: string | null | undefined, updateMask: string | null | undefined, requestBody: FirstAndThirdPartyAudience): Observable<FirstAndThirdPartyAudience> {
			return this.http.patch<FirstAndThirdPartyAudience>(this.baseUri + 'v3/firstAndThirdPartyAudiences/' + (firstAndThirdPartyAudienceId == null ? '' : encodeURIComponent(firstAndThirdPartyAudienceId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
		 * Post v3/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}:editCustomerMatchMembers
		 * @param {string} firstAndThirdPartyAudienceId Required. The ID of the Customer Match FirstAndThirdPartyAudience whose members will be edited.
		 * @return {EditCustomerMatchMembersResponse} Successful response
		 */
		Displayvideo_firstAndThirdPartyAudiences_editCustomerMatchMembers(firstAndThirdPartyAudienceId: string, requestBody: EditCustomerMatchMembersRequest): Observable<EditCustomerMatchMembersResponse> {
			return this.http.post<EditCustomerMatchMembersResponse>(this.baseUri + 'v3/firstAndThirdPartyAudiences/' + (firstAndThirdPartyAudienceId == null ? '' : encodeURIComponent(firstAndThirdPartyAudienceId)) + ':editCustomerMatchMembers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a Floodlight group.
		 * Get v3/floodlightGroups/{floodlightGroupId}
		 * @param {string} floodlightGroupId Required. The ID of the Floodlight group to fetch.
		 * @param {string} partnerId Required. The partner context by which the Floodlight group is being accessed.
		 * @return {FloodlightGroup} Successful response
		 */
		Displayvideo_floodlightGroups_get(floodlightGroupId: string, partnerId: string | null | undefined): Observable<FloodlightGroup> {
			return this.http.get<FloodlightGroup>(this.baseUri + 'v3/floodlightGroups/' + (floodlightGroupId == null ? '' : encodeURIComponent(floodlightGroupId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Lists Google audiences. The order is defined by the order_by parameter.
		 * Get v3/googleAudiences
		 * @param {string} advertiserId The ID of the advertiser that has access to the fetched Google audiences.
		 * @param {string} filter Allows filtering by Google audience fields. Supported syntax: * Filter expressions for Google audiences can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All Google audiences for which the display name contains "Google": `displayName:"Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `googleAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListGoogleAudiences` method. If not specified, the first page of results will be returned.
		 * @param {string} partnerId The ID of the partner that has access to the fetched Google audiences.
		 * @return {ListGoogleAudiencesResponse} Successful response
		 */
		Displayvideo_googleAudiences_list(advertiserId: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, partnerId: string | null | undefined): Observable<ListGoogleAudiencesResponse> {
			return this.http.get<ListGoogleAudiencesResponse>(this.baseUri + 'v3/googleAudiences?advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Gets a Google audience.
		 * Get v3/googleAudiences/{googleAudienceId}
		 * @param {string} googleAudienceId Required. The ID of the Google audience to fetch.
		 * @param {string} advertiserId The ID of the advertiser that has access to the fetched Google audience.
		 * @param {string} partnerId The ID of the partner that has access to the fetched Google audience.
		 * @return {GoogleAudience} Successful response
		 */
		Displayvideo_googleAudiences_get(googleAudienceId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined): Observable<GoogleAudience> {
			return this.http.get<GoogleAudience>(this.baseUri + 'v3/googleAudiences/' + (googleAudienceId == null ? '' : encodeURIComponent(googleAudienceId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
		 * Get v3/guaranteedOrders
		 * @param {string} advertiserId The ID of the advertiser that has access to the guaranteed order.
		 * @param {string} filter Allows filtering by guaranteed order fields. * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `guaranteed_order_id` * `exchange` * `display_name` * `status.entityStatus` Examples: * All active guaranteed orders: `status.entityStatus="ENTITY_STATUS_ACTIVE"` * Guaranteed orders belonging to Google Ad Manager or Rubicon exchanges: `exchange="EXCHANGE_GOOGLE_AD_MANAGER" OR exchange="EXCHANGE_RUBICON"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListGuaranteedOrders` method. If not specified, the first page of results will be returned.
		 * @param {string} partnerId The ID of the partner that has access to the guaranteed order.
		 * @return {ListGuaranteedOrdersResponse} Successful response
		 */
		Displayvideo_guaranteedOrders_list(advertiserId: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, partnerId: string | null | undefined): Observable<ListGuaranteedOrdersResponse> {
			return this.http.get<ListGuaranteedOrdersResponse>(this.baseUri + 'v3/guaranteedOrders?advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Creates a new guaranteed order. Returns the newly created guaranteed order if successful.
		 * Post v3/guaranteedOrders
		 * @param {string} advertiserId The ID of the advertiser that the request is being made within.
		 * @param {string} partnerId The ID of the partner that the request is being made within.
		 * @return {GuaranteedOrder} Successful response
		 */
		Displayvideo_guaranteedOrders_create(advertiserId: string | null | undefined, partnerId: string | null | undefined, requestBody: GuaranteedOrder): Observable<GuaranteedOrder> {
			return this.http.post<GuaranteedOrder>(this.baseUri + 'v3/guaranteedOrders?advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a guaranteed order.
		 * Get v3/guaranteedOrders/{guaranteedOrderId}
		 * @param {string} guaranteedOrderId Required. The ID of the guaranteed order to fetch. The ID is of the format `{exchange}-{legacy_guaranteed_order_id}`
		 * @param {string} advertiserId The ID of the advertiser that has access to the guaranteed order.
		 * @param {string} partnerId The ID of the partner that has access to the guaranteed order.
		 * @return {GuaranteedOrder} Successful response
		 */
		Displayvideo_guaranteedOrders_get(guaranteedOrderId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined): Observable<GuaranteedOrder> {
			return this.http.get<GuaranteedOrder>(this.baseUri + 'v3/guaranteedOrders/' + (guaranteedOrderId == null ? '' : encodeURIComponent(guaranteedOrderId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Updates an existing guaranteed order. Returns the updated guaranteed order if successful.
		 * Patch v3/guaranteedOrders/{guaranteedOrderId}
		 * @param {string} guaranteedOrderId Output only. The unique identifier of the guaranteed order. The guaranteed order IDs have the format `{exchange}-{legacy_guaranteed_order_id}`.
		 * @param {string} advertiserId The ID of the advertiser that the request is being made within.
		 * @param {string} partnerId The ID of the partner that the request is being made within.
		 * @param {string} updateMask Required. The mask to control which fields to update.
		 * @return {GuaranteedOrder} Successful response
		 */
		Displayvideo_guaranteedOrders_patch(guaranteedOrderId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined, updateMask: string | null | undefined, requestBody: GuaranteedOrder): Observable<GuaranteedOrder> {
			return this.http.patch<GuaranteedOrder>(this.baseUri + 'v3/guaranteedOrders/' + (guaranteedOrderId == null ? '' : encodeURIComponent(guaranteedOrderId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Edits read advertisers of a guaranteed order.
		 * Post v3/guaranteedOrders/{guaranteedOrderId}:editGuaranteedOrderReadAccessors
		 * @param {string} guaranteedOrderId Required. The ID of the guaranteed order to edit. The ID is of the format `{exchange}-{legacy_guaranteed_order_id}`
		 * @return {EditGuaranteedOrderReadAccessorsResponse} Successful response
		 */
		Displayvideo_guaranteedOrders_editGuaranteedOrderReadAccessors(guaranteedOrderId: string, requestBody: EditGuaranteedOrderReadAccessorsRequest): Observable<EditGuaranteedOrderReadAccessorsResponse> {
			return this.http.post<EditGuaranteedOrderReadAccessorsResponse>(this.baseUri + 'v3/guaranteedOrders/' + (guaranteedOrderId == null ? '' : encodeURIComponent(guaranteedOrderId)) + ':editGuaranteedOrderReadAccessors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.
		 * Get v3/inventorySourceGroups
		 * @param {string} advertiserId The ID of the advertiser that has access to the inventory source group. If an inventory source group is partner-owned, only advertisers to which the group is explicitly shared can access the group.
		 * @param {string} filter Allows filtering by inventory source group fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `inventorySourceGroupId` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `displayName` (default) * `inventorySourceGroupId` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInventorySources` method. If not specified, the first page of results will be returned.
		 * @param {string} partnerId The ID of the partner that has access to the inventory source group. A partner cannot access advertiser-owned inventory source groups.
		 * @return {ListInventorySourceGroupsResponse} Successful response
		 */
		Displayvideo_inventorySourceGroups_list(advertiserId: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, partnerId: string | null | undefined): Observable<ListInventorySourceGroupsResponse> {
			return this.http.get<ListInventorySourceGroupsResponse>(this.baseUri + 'v3/inventorySourceGroups?advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Creates a new inventory source group. Returns the newly created inventory source group if successful.
		 * Post v3/inventorySourceGroups
		 * @param {string} advertiserId The ID of the advertiser that owns the inventory source group. The parent partner will not have access to this group.
		 * @param {string} partnerId The ID of the partner that owns the inventory source group. Only this partner will have write access to this group. Only advertisers to which this group is explicitly shared will have read access to this group.
		 * @return {InventorySourceGroup} Successful response
		 */
		Displayvideo_inventorySourceGroups_create(advertiserId: string | null | undefined, partnerId: string | null | undefined, requestBody: InventorySourceGroup): Observable<InventorySourceGroup> {
			return this.http.post<InventorySourceGroup>(this.baseUri + 'v3/inventorySourceGroups?advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an inventory source group.
		 * Delete v3/inventorySourceGroups/{inventorySourceGroupId}
		 * @param {string} inventorySourceGroupId Required. The ID of the inventory source group to delete.
		 * @param {string} advertiserId The ID of the advertiser that owns the inventory source group. The parent partner does not have access to this group.
		 * @param {string} partnerId The ID of the partner that owns the inventory source group. Only this partner has write access to this group.
		 * @return {Empty} Successful response
		 */
		Displayvideo_inventorySourceGroups_delete(inventorySourceGroupId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/inventorySourceGroups/' + (inventorySourceGroupId == null ? '' : encodeURIComponent(inventorySourceGroupId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Gets an inventory source group.
		 * Get v3/inventorySourceGroups/{inventorySourceGroupId}
		 * @param {string} inventorySourceGroupId Required. The ID of the inventory source group to fetch.
		 * @param {string} advertiserId The ID of the advertiser that has access to the inventory source group. If an inventory source group is partner-owned, only advertisers to which the group is explicitly shared can access the group.
		 * @param {string} partnerId The ID of the partner that has access to the inventory source group. A partner cannot access an advertiser-owned inventory source group.
		 * @return {InventorySourceGroup} Successful response
		 */
		Displayvideo_inventorySourceGroups_get(inventorySourceGroupId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined): Observable<InventorySourceGroup> {
			return this.http.get<InventorySourceGroup>(this.baseUri + 'v3/inventorySourceGroups/' + (inventorySourceGroupId == null ? '' : encodeURIComponent(inventorySourceGroupId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Lists inventory sources assigned to an inventory source group.
		 * Get v3/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources
		 * @param {string} inventorySourceGroupId Required. The ID of the inventory source group to which these assignments are assigned.
		 * @param {string} advertiserId The ID of the advertiser that has access to the assignment. If the parent inventory source group is partner-owned, only advertisers to which the parent group is explicitly shared can access the assigned inventory source.
		 * @param {string} filter Allows filtering by assigned inventory source fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the `OR` logical operator. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedInventorySourceId` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `assignedInventorySourceId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `assignedInventorySourceId desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAssignedInventorySources` method. If not specified, the first page of results will be returned.
		 * @param {string} partnerId The ID of the partner that has access to the assignment. If the parent inventory source group is advertiser-owned, the assignment cannot be accessed via a partner.
		 * @return {ListAssignedInventorySourcesResponse} Successful response
		 */
		Displayvideo_inventorySourceGroups_assignedInventorySources_list(inventorySourceGroupId: string, advertiserId: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, partnerId: string | null | undefined): Observable<ListAssignedInventorySourcesResponse> {
			return this.http.get<ListAssignedInventorySourcesResponse>(this.baseUri + 'v3/inventorySourceGroups/' + (inventorySourceGroupId == null ? '' : encodeURIComponent(inventorySourceGroupId)) + '/assignedInventorySources&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Creates an assignment between an inventory source and an inventory source group.
		 * Post v3/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources
		 * @param {string} inventorySourceGroupId Required. The ID of the inventory source group to which the assignment will be assigned.
		 * @param {string} advertiserId The ID of the advertiser that owns the parent inventory source group. The parent partner will not have access to this assigned inventory source.
		 * @param {string} partnerId The ID of the partner that owns the parent inventory source group. Only this partner will have write access to this assigned inventory source.
		 * @return {AssignedInventorySource} Successful response
		 */
		Displayvideo_inventorySourceGroups_assignedInventorySources_create(inventorySourceGroupId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined, requestBody: AssignedInventorySource): Observable<AssignedInventorySource> {
			return this.http.post<AssignedInventorySource>(this.baseUri + 'v3/inventorySourceGroups/' + (inventorySourceGroupId == null ? '' : encodeURIComponent(inventorySourceGroupId)) + '/assignedInventorySources&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the assignment between an inventory source and an inventory source group.
		 * Delete v3/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources/{assignedInventorySourceId}
		 * @param {string} inventorySourceGroupId Required. The ID of the inventory source group to which this assignment is assigned.
		 * @param {string} assignedInventorySourceId Required. The ID of the assigned inventory source to delete.
		 * @param {string} advertiserId The ID of the advertiser that owns the parent inventory source group. The parent partner does not have access to this assigned inventory source.
		 * @param {string} partnerId The ID of the partner that owns the parent inventory source group. Only this partner has write access to this assigned inventory source.
		 * @return {Empty} Successful response
		 */
		Displayvideo_inventorySourceGroups_assignedInventorySources_delete(inventorySourceGroupId: string, assignedInventorySourceId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/inventorySourceGroups/' + (inventorySourceGroupId == null ? '' : encodeURIComponent(inventorySourceGroupId)) + '/assignedInventorySources/' + (assignedInventorySourceId == null ? '' : encodeURIComponent(assignedInventorySourceId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.
		 * Post v3/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources:bulkEdit
		 * @param {string} inventorySourceGroupId Required. The ID of the inventory source group to which the assignments are assigned.
		 * @return {BulkEditAssignedInventorySourcesResponse} Successful response
		 */
		Displayvideo_inventorySourceGroups_assignedInventorySources_bulkEdit(inventorySourceGroupId: string, requestBody: BulkEditAssignedInventorySourcesRequest): Observable<BulkEditAssignedInventorySourcesResponse> {
			return this.http.post<BulkEditAssignedInventorySourcesResponse>(this.baseUri + 'v3/inventorySourceGroups/' + (inventorySourceGroupId == null ? '' : encodeURIComponent(inventorySourceGroupId)) + '/assignedInventorySources:bulkEdit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
		 * Get v3/inventorySources
		 * @param {string} advertiserId The ID of the advertiser that has access to the inventory source.
		 * @param {string} filter Allows filtering by inventory source fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `status.entityStatus` * `commitment` * `deliveryMethod` * `rateDetails.rateType` * `exchange` Examples: * All active inventory sources: `status.entityStatus="ENTITY_STATUS_ACTIVE"` * Inventory sources belonging to Google Ad Manager or Rubicon exchanges: `exchange="EXCHANGE_GOOGLE_AD_MANAGER" OR exchange="EXCHANGE_RUBICON"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInventorySources` method. If not specified, the first page of results will be returned.
		 * @param {string} partnerId The ID of the partner that has access to the inventory source.
		 * @return {ListInventorySourcesResponse} Successful response
		 */
		Displayvideo_inventorySources_list(advertiserId: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, partnerId: string | null | undefined): Observable<ListInventorySourcesResponse> {
			return this.http.get<ListInventorySourcesResponse>(this.baseUri + 'v3/inventorySources?advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Creates a new inventory source. Returns the newly created inventory source if successful.
		 * Post v3/inventorySources
		 * @param {string} advertiserId The ID of the advertiser that the request is being made within.
		 * @param {string} partnerId The ID of the partner that the request is being made within.
		 * @return {InventorySource} Successful response
		 */
		Displayvideo_inventorySources_create(advertiserId: string | null | undefined, partnerId: string | null | undefined, requestBody: InventorySource): Observable<InventorySource> {
			return this.http.post<InventorySource>(this.baseUri + 'v3/inventorySources?advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets an inventory source.
		 * Get v3/inventorySources/{inventorySourceId}
		 * @param {string} inventorySourceId Required. The ID of the inventory source to fetch.
		 * @param {string} advertiserId Optional. The ID of the DV360 advertiser to which the fetched inventory source is permissioned. If the user only has access to the advertiser and not the parent partner, use this field to specify the relevant advertiser.
		 * @param {string} partnerId Required. The ID of the DV360 partner to which the fetched inventory source is permissioned.
		 * @return {InventorySource} Successful response
		 */
		Displayvideo_inventorySources_get(inventorySourceId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined): Observable<InventorySource> {
			return this.http.get<InventorySource>(this.baseUri + 'v3/inventorySources/' + (inventorySourceId == null ? '' : encodeURIComponent(inventorySourceId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Updates an existing inventory source. Returns the updated inventory source if successful.
		 * Patch v3/inventorySources/{inventorySourceId}
		 * @param {string} inventorySourceId Output only. The unique ID of the inventory source. Assigned by the system.
		 * @param {string} advertiserId The ID of the advertiser that the request is being made within.
		 * @param {string} partnerId The ID of the partner that the request is being made within.
		 * @param {string} updateMask Required. The mask to control which fields to update.
		 * @return {InventorySource} Successful response
		 */
		Displayvideo_inventorySources_patch(inventorySourceId: string, advertiserId: string | null | undefined, partnerId: string | null | undefined, updateMask: string | null | undefined, requestBody: InventorySource): Observable<InventorySource> {
			return this.http.patch<InventorySource>(this.baseUri + 'v3/inventorySources/' + (inventorySourceId == null ? '' : encodeURIComponent(inventorySourceId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&partnerId=' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.
		 * Post v3/inventorySources/{inventorySourceId}:editInventorySourceReadWriteAccessors
		 * @param {string} inventorySourceId Required. The ID of inventory source to update.
		 * @return {InventorySourceAccessors} Successful response
		 */
		Displayvideo_inventorySources_editInventorySourceReadWriteAccessors(inventorySourceId: string, requestBody: EditInventorySourceReadWriteAccessorsRequest): Observable<InventorySourceAccessors> {
			return this.http.post<InventorySourceAccessors>(this.baseUri + 'v3/inventorySources/' + (inventorySourceId == null ? '' : encodeURIComponent(inventorySourceId)) + ':editInventorySourceReadWriteAccessors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
		 * Get v3/partners
		 * @param {string} filter Allows filtering by partner fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `entityStatus` Examples: * All active partners: `entityStatus="ENTITY_STATUS_ACTIVE"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListPartners` method. If not specified, the first page of results will be returned.
		 * @return {ListPartnersResponse} Successful response
		 */
		Displayvideo_partners_list(filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPartnersResponse> {
			return this.http.get<ListPartnersResponse>(this.baseUri + 'v3/partners?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets a partner.
		 * Get v3/partners/{partnerId}
		 * @param {string} partnerId Required. The ID of the partner to fetch.
		 * @return {Partner} Successful response
		 */
		Displayvideo_partners_get(partnerId: string): Observable<Partner> {
			return this.http.get<Partner>(this.baseUri + 'v3/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)), {});
		}

		/**
		 * Lists channels for a partner or advertiser.
		 * Get v3/partners/{partnerId}/channels
		 * @param {string} partnerId The ID of the partner that owns the channels.
		 * @param {string} advertiserId The ID of the advertiser that owns the channels.
		 * @param {string} filter Allows filtering by channel fields. Supported syntax: * Filter expressions for channel can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All channels for which the display name contains "google": `displayName : "google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `displayName` (default) * `channelId` The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListChannels` method. If not specified, the first page of results will be returned.
		 * @return {ListChannelsResponse} Successful response
		 */
		Displayvideo_partners_channels_list(partnerId: string, advertiserId: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListChannelsResponse> {
			return this.http.get<ListChannelsResponse>(this.baseUri + 'v3/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/channels&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new channel. Returns the newly created channel if successful.
		 * Post v3/partners/{partnerId}/channels
		 * @param {string} partnerId The ID of the partner that owns the created channel.
		 * @param {string} advertiserId The ID of the advertiser that owns the created channel.
		 * @return {Channel} Successful response
		 */
		Displayvideo_partners_channels_create(partnerId: string, advertiserId: string | null | undefined, requestBody: Channel): Observable<Channel> {
			return this.http.post<Channel>(this.baseUri + 'v3/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/channels&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a channel. Returns the updated channel if successful.
		 * Patch v3/partners/{partnerId}/channels/{channelId}
		 * @param {string} partnerId The ID of the partner that owns the created channel.
		 * @param {string} channelId Output only. The unique ID of the channel. Assigned by the system.
		 * @param {string} advertiserId The ID of the advertiser that owns the created channel.
		 * @param {string} updateMask Required. The mask to control which fields to update.
		 * @return {Channel} Successful response
		 */
		Displayvideo_partners_channels_patch(partnerId: string, channelId: string, advertiserId: string | null | undefined, updateMask: string | null | undefined, requestBody: Channel): Observable<Channel> {
			return this.http.patch<Channel>(this.baseUri + 'v3/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists sites in a channel.
		 * Get v3/partners/{partnerId}/channels/{channelId}/sites
		 * @param {string} partnerId The ID of the partner that owns the parent channel.
		 * @param {string} channelId Required. The ID of the parent channel to which the requested sites belong.
		 * @param {string} advertiserId The ID of the advertiser that owns the parent channel.
		 * @param {string} filter Allows filtering by site fields. Supported syntax: * Filter expressions for site retrieval can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `urlOrAppId` Examples: * All sites for which the URL or app ID contains "google": `urlOrAppId : "google"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `urlOrAppId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `urlOrAppId desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `10000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListSites` method. If not specified, the first page of results will be returned.
		 * @return {ListSitesResponse} Successful response
		 */
		Displayvideo_partners_channels_sites_list(partnerId: string, channelId: string, advertiserId: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSitesResponse> {
			return this.http.get<ListSitesResponse>(this.baseUri + 'v3/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/sites&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Deletes a site from a channel.
		 * Delete v3/partners/{partnerId}/channels/{channelId}/sites/{urlOrAppId}
		 * @param {string} partnerId The ID of the partner that owns the parent channel.
		 * @param {string} channelId Required. The ID of the parent channel to which the site belongs.
		 * @param {string} urlOrAppId Required. The URL or app ID of the site to delete.
		 * @param {string} advertiserId The ID of the advertiser that owns the parent channel.
		 * @return {Empty} Successful response
		 */
		Displayvideo_partners_channels_sites_delete(partnerId: string, channelId: string, urlOrAppId: string, advertiserId: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/sites/' + (urlOrAppId == null ? '' : encodeURIComponent(urlOrAppId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)), {});
		}

		/**
		 * Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
		 * Post v3/partners/{partnerId}/channels/{channelId}/sites:bulkEdit
		 * @param {string} partnerId The ID of the partner that owns the parent channel.
		 * @param {string} channelId Required. The ID of the parent channel to which the sites belong.
		 * @return {BulkEditSitesResponse} Successful response
		 */
		Displayvideo_partners_channels_sites_bulkEdit(partnerId: string, channelId: string, requestBody: BulkEditSitesRequest): Observable<BulkEditSitesResponse> {
			return this.http.post<BulkEditSitesResponse>(this.baseUri + 'v3/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/sites:bulkEdit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
		 * Post v3/partners/{partnerId}/channels/{channelId}/sites:replace
		 * @param {string} partnerId The ID of the partner that owns the parent channel.
		 * @param {string} channelId Required. The ID of the parent channel whose sites will be replaced.
		 * @return {ReplaceSitesResponse} Successful response
		 */
		Displayvideo_partners_channels_sites_replace(partnerId: string, channelId: string, requestBody: ReplaceSitesRequest): Observable<ReplaceSitesResponse> {
			return this.http.post<ReplaceSitesResponse>(this.baseUri + 'v3/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/sites:replace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the targeting options assigned to a partner.
		 * Get v3/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions
		 * @param {string} partnerId Required. The ID of the partner.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_CHANNEL`
		 * @param {string} filter Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `assignedTargetingOptionId` Examples: * `AssignedTargetingOption` resource with ID 123456: `assignedTargetingOptionId="123456"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListPartnerAssignedTargetingOptions` method. If not specified, the first page of results will be returned.
		 * @return {ListPartnerAssignedTargetingOptionsResponse} Successful response
		 */
		Displayvideo_partners_targetingTypes_assignedTargetingOptions_list(partnerId: string, targetingType: AssignedTargetingOptionTargetingType, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPartnerAssignedTargetingOptionsResponse> {
			return this.http.get<ListPartnerAssignedTargetingOptionsResponse>(this.baseUri + 'v3/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
		 * Post v3/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions
		 * @param {string} partnerId Required. The ID of the partner.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL`
		 * @return {AssignedTargetingOption} Successful response
		 */
		Displayvideo_partners_targetingTypes_assignedTargetingOptions_create(partnerId: string, targetingType: AssignedTargetingOptionTargetingType, requestBody: AssignedTargetingOption): Observable<AssignedTargetingOption> {
			return this.http.post<AssignedTargetingOption>(this.baseUri + 'v3/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an assigned targeting option from a partner.
		 * Delete v3/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
		 * @param {string} partnerId Required. The ID of the partner.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL`
		 * @param {string} assignedTargetingOptionId Required. The ID of the assigned targeting option to delete.
		 * @return {Empty} Successful response
		 */
		Displayvideo_partners_targetingTypes_assignedTargetingOptions_delete(partnerId: string, targetingType: AssignedTargetingOptionTargetingType, assignedTargetingOptionId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions/' + (assignedTargetingOptionId == null ? '' : encodeURIComponent(assignedTargetingOptionId)), {});
		}

		/**
		 * Gets a single targeting option assigned to a partner.
		 * Get v3/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}
		 * @param {string} partnerId Required. The ID of the partner.
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL`
		 * @param {string} assignedTargetingOptionId Required. An identifier unique to the targeting type in this partner that identifies the assigned targeting option being requested.
		 * @return {AssignedTargetingOption} Successful response
		 */
		Displayvideo_partners_targetingTypes_assignedTargetingOptions_get(partnerId: string, targetingType: AssignedTargetingOptionTargetingType, assignedTargetingOptionId: string): Observable<AssignedTargetingOption> {
			return this.http.get<AssignedTargetingOption>(this.baseUri + 'v3/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + '/targetingTypes/' + targetingType + '/assignedTargetingOptions/' + (assignedTargetingOptionId == null ? '' : encodeURIComponent(assignedTargetingOptionId)), {});
		}

		/**
		 * Edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
		 * Post v3/partners/{partnerId}:editAssignedTargetingOptions
		 * @param {string} partnerId Required. The ID of the partner.
		 * @return {BulkEditPartnerAssignedTargetingOptionsResponse} Successful response
		 */
		Displayvideo_partners_editAssignedTargetingOptions(partnerId: string, requestBody: BulkEditPartnerAssignedTargetingOptionsRequest): Observable<BulkEditPartnerAssignedTargetingOptionsResponse> {
			return this.http.post<BulkEditPartnerAssignedTargetingOptionsResponse>(this.baseUri + 'v3/partners/' + (partnerId == null ? '' : encodeURIComponent(partnerId)) + ':editAssignedTargetingOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an SDF Download Task. Returns an Operation. An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with sdfdownloadtask.operations.get. Any errors can be found in the error.message. Note that error.details is expected to be empty.
		 * Post v3/sdfdownloadtasks
		 * @return {Operation} Successful response
		 */
		Displayvideo_sdfdownloadtasks_create(requestBody: CreateSdfDownloadTaskRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/sdfdownloadtasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists targeting options of a given type.
		 * Get v3/targetingTypes/{targetingType}/targetingOptions
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. The type of targeting option to be listed. Accepted values are: * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID`
		 * @param {string} advertiserId Required. The Advertiser this request is being made in the context of.
		 * @param {string} filter Allows filtering by targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `OR` logical operators. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `carrierAndIspDetails.type` * `geoRegionDetails.geoRegionType` * `targetingOptionId` Examples: * All `GEO REGION` targeting options that belong to sub type `GEO_REGION_TYPE_COUNTRY` or `GEO_REGION_TYPE_STATE`: `geoRegionDetails.geoRegionType="GEO_REGION_TYPE_COUNTRY" OR geoRegionDetails.geoRegionType="GEO_REGION_TYPE_STATE"` * All `CARRIER AND ISP` targeting options that belong to sub type `CARRIER_AND_ISP_TYPE_CARRIER`: `carrierAndIspDetails.type="CARRIER_AND_ISP_TYPE_CARRIER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `targetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingOptionId desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListTargetingOptions` method. If not specified, the first page of results will be returned.
		 * @return {ListTargetingOptionsResponse} Successful response
		 */
		Displayvideo_targetingTypes_targetingOptions_list(targetingType: AssignedTargetingOptionTargetingType, advertiserId: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTargetingOptionsResponse> {
			return this.http.get<ListTargetingOptionsResponse>(this.baseUri + 'v3/targetingTypes/' + targetingType + '/targetingOptions?advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets a single targeting option.
		 * Get v3/targetingTypes/{targetingType}/targetingOptions/{targetingOptionId}
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. The type of targeting option to retrieve. Accepted values are: * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID`
		 * @param {string} targetingOptionId Required. The ID of the of targeting option to retrieve.
		 * @param {string} advertiserId Required. The Advertiser this request is being made in the context of.
		 * @return {TargetingOption} Successful response
		 */
		Displayvideo_targetingTypes_targetingOptions_get(targetingType: AssignedTargetingOptionTargetingType, targetingOptionId: string, advertiserId: string | null | undefined): Observable<TargetingOption> {
			return this.http.get<TargetingOption>(this.baseUri + 'v3/targetingTypes/' + targetingType + '/targetingOptions/' + (targetingOptionId == null ? '' : encodeURIComponent(targetingOptionId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)), {});
		}

		/**
		 * Searches for targeting options of a given type based on the given search terms.
		 * Post v3/targetingTypes/{targetingType}/targetingOptions:search
		 * @param {AssignedTargetingOptionTargetingType} targetingType Required. The type of targeting options to retrieve. Accepted values are: * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_BUSINESS_CHAIN`
		 * @return {SearchTargetingOptionsResponse} Successful response
		 */
		Displayvideo_targetingTypes_targetingOptions_search(targetingType: AssignedTargetingOptionTargetingType, requestBody: SearchTargetingOptionsRequest): Observable<SearchTargetingOptionsResponse> {
			return this.http.post<SearchTargetingOptionsResponse>(this.baseUri + 'v3/targetingTypes/' + targetingType + '/targetingOptions:search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
		 * Get v3/users
		 * @param {string} filter Allows filtering by user fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `budget.budget_segments.date_range.end_date` field must use the `LESS THAN (<)` operator. * The `displayName and `email` field must use the `HAS (:)` operator. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `assignedUserRole.advertiserId` * `assignedUserRole.entityType` * This is synthetic field of `AssignedUserRole` used for filtering. Identifies the type of entity to which the user role is assigned. Valid values are `Partner` and `Advertiser`. * `assignedUserRole.parentPartnerId` * This is a synthetic field of `AssignedUserRole` used for filtering. Identifies the parent partner of the entity to which the user role is assigned. * `assignedUserRole.partnerId` * `assignedUserRole.userRole` * `displayName` * `email` Examples: * The user with `displayName` containing "foo": `displayName:"foo"` * The user with `email` containing "bar": `email:"bar"` * All users with standard user roles: `assignedUserRole.userRole="STANDARD"` * All users with user roles for partner 123: `assignedUserRole.partnerId="123"` * All users with user roles for advertiser 123: `assignedUserRole.advertiserId="123"` * All users with partner level user roles: `entityType="PARTNER"` * All users with user roles for partner 123 and advertisers under partner 123: `parentPartnerId="123"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information.
		 * @param {string} orderBy Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.
		 * @param {number} pageSize Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListUsers` method. If not specified, the first page of results will be returned.
		 * @return {ListUsersResponse} Successful response
		 */
		Displayvideo_users_list(filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListUsersResponse> {
			return this.http.get<ListUsersResponse>(this.baseUri + 'v3/users?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new user. Returns the newly created user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
		 * Post v3/users
		 * @return {User} Successful response
		 */
		Displayvideo_users_create(requestBody: User): Observable<User> {
			return this.http.post<User>(this.baseUri + 'v3/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
		 * Delete v3/users/{userId}
		 * @param {string} userId Required. The ID of the user to delete.
		 * @return {Empty} Successful response
		 */
		Displayvideo_users_delete(userId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/users/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Gets a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
		 * Get v3/users/{userId}
		 * @param {string} userId Required. The ID of the user to fetch.
		 * @return {User} Successful response
		 */
		Displayvideo_users_get(userId: string): Observable<User> {
			return this.http.get<User>(this.baseUri + 'v3/users/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Updates an existing user. Returns the updated user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
		 * Patch v3/users/{userId}
		 * @param {string} userId Output only. The unique ID of the user. Assigned by the system.
		 * @param {string} updateMask Required. The mask to control which fields to update.
		 * @return {User} Successful response
		 */
		Displayvideo_users_patch(userId: string, updateMask: string | null | undefined, requestBody: User): Observable<User> {
			return this.http.patch<User>(this.baseUri + 'v3/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
		 * Post v3/users/{userId}:bulkEditAssignedUserRoles
		 * @param {string} userId Required. The ID of the user to which the assigned user roles belong.
		 * @return {BulkEditAssignedUserRolesResponse} Successful response
		 */
		Displayvideo_users_bulkEditAssignedUserRoles(userId: string, requestBody: BulkEditAssignedUserRolesRequest): Observable<BulkEditAssignedUserRolesResponse> {
			return this.http.post<BulkEditAssignedUserRolesResponse>(this.baseUri + 'v3/users/' + (userId == null ? '' : encodeURIComponent(userId)) + ':bulkEditAssignedUserRoles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.
		 * Get v3/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Displayvideo_sdfdownloadtasks_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)), {});
		}
	}

	export enum Displayvideo_advertisers_invoices_listLoiSapinInvoiceType { LOI_SAPIN_INVOICE_TYPE_UNSPECIFIED = 'LOI_SAPIN_INVOICE_TYPE_UNSPECIFIED', LOI_SAPIN_INVOICE_TYPE_MEDIA = 'LOI_SAPIN_INVOICE_TYPE_MEDIA', LOI_SAPIN_INVOICE_TYPE_PLATFORM = 'LOI_SAPIN_INVOICE_TYPE_PLATFORM' }

}

