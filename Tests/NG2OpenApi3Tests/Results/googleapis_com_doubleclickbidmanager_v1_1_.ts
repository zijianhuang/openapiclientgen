import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A channel grouping defines a set of rules that can be used to categorize events in a path report. */
	export interface ChannelGrouping {

		/** The name to apply to an event that does not match any of the rules in the channel grouping. */
		fallbackName?: string | null;

		/** Channel Grouping name. */
		name?: string | null;

		/** Rules within Channel Grouping. There is a limit of 100 rules that can be set per channel grouping. */
		rules?: Array<Rule>;
	}

	/** A channel grouping defines a set of rules that can be used to categorize events in a path report. */
	export interface ChannelGroupingFormProperties {

		/** The name to apply to an event that does not match any of the rules in the channel grouping. */
		fallbackName: FormControl<string | null | undefined>,

		/** Channel Grouping name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateChannelGroupingFormGroup() {
		return new FormGroup<ChannelGroupingFormProperties>({
			fallbackName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Rule defines a name, and a boolean expression in [conjunctive normal form](http: //mathworld.wolfram.com/ConjunctiveNormalForm.html){.external} that can be // applied to a path event to determine if that name should be applied. */
	export interface Rule {
		disjunctiveMatchStatements?: Array<DisjunctiveMatchStatement>;

		/** Rule name. */
		name?: string | null;
	}

	/** A Rule defines a name, and a boolean expression in [conjunctive normal form](http: //mathworld.wolfram.com/ConjunctiveNormalForm.html){.external} that can be // applied to a path event to determine if that name should be applied. */
	export interface RuleFormProperties {

		/** Rule name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DisjunctiveMatchStatement that OR's all contained filters. */
	export interface DisjunctiveMatchStatement {

		/** Filters. There is a limit of 100 filters that can be set per disjunctive match statement. */
		eventFilters?: Array<EventFilter>;
	}

	/** DisjunctiveMatchStatement that OR's all contained filters. */
	export interface DisjunctiveMatchStatementFormProperties {
	}
	export function CreateDisjunctiveMatchStatementFormGroup() {
		return new FormGroup<DisjunctiveMatchStatementFormProperties>({
		});

	}


	/** Defines the type of filter to be applied to the path, a DV360 event dimension filter. */
	export interface EventFilter {

		/** Dimension Filter on path events. */
		dimensionFilter?: PathQueryOptionsFilter;
	}

	/** Defines the type of filter to be applied to the path, a DV360 event dimension filter. */
	export interface EventFilterFormProperties {
	}
	export function CreateEventFilterFormGroup() {
		return new FormGroup<EventFilterFormProperties>({
		});

	}


	/** Dimension Filter on path events. */
	export interface PathQueryOptionsFilter {

		/** Dimension the filter is applied to. */
		filter?: PathQueryOptionsFilterFilter | null;

		/** Indicates how the filter should be matched to the value. */
		match?: PathQueryOptionsFilterMatch | null;

		/** Value to filter on. */
		values?: Array<string>;
	}

	/** Dimension Filter on path events. */
	export interface PathQueryOptionsFilterFormProperties {

		/** Dimension the filter is applied to. */
		filter: FormControl<PathQueryOptionsFilterFilter | null | undefined>,

		/** Indicates how the filter should be matched to the value. */
		match: FormControl<PathQueryOptionsFilterMatch | null | undefined>,
	}
	export function CreatePathQueryOptionsFilterFormGroup() {
		return new FormGroup<PathQueryOptionsFilterFormProperties>({
			filter: new FormControl<PathQueryOptionsFilterFilter | null | undefined>(undefined),
			match: new FormControl<PathQueryOptionsFilterMatch | null | undefined>(undefined),
		});

	}

	export enum PathQueryOptionsFilterFilter { FILTER_UNKNOWN = 'FILTER_UNKNOWN', FILTER_DATE = 'FILTER_DATE', FILTER_DAY_OF_WEEK = 'FILTER_DAY_OF_WEEK', FILTER_WEEK = 'FILTER_WEEK', FILTER_MONTH = 'FILTER_MONTH', FILTER_YEAR = 'FILTER_YEAR', FILTER_TIME_OF_DAY = 'FILTER_TIME_OF_DAY', FILTER_CONVERSION_DELAY = 'FILTER_CONVERSION_DELAY', FILTER_CREATIVE_ID = 'FILTER_CREATIVE_ID', FILTER_CREATIVE_SIZE = 'FILTER_CREATIVE_SIZE', FILTER_CREATIVE_TYPE = 'FILTER_CREATIVE_TYPE', FILTER_EXCHANGE_ID = 'FILTER_EXCHANGE_ID', FILTER_AD_POSITION = 'FILTER_AD_POSITION', FILTER_PUBLIC_INVENTORY = 'FILTER_PUBLIC_INVENTORY', FILTER_INVENTORY_SOURCE = 'FILTER_INVENTORY_SOURCE', FILTER_CITY = 'FILTER_CITY', FILTER_REGION = 'FILTER_REGION', FILTER_DMA = 'FILTER_DMA', FILTER_COUNTRY = 'FILTER_COUNTRY', FILTER_SITE_ID = 'FILTER_SITE_ID', FILTER_CHANNEL_ID = 'FILTER_CHANNEL_ID', FILTER_PARTNER = 'FILTER_PARTNER', FILTER_ADVERTISER = 'FILTER_ADVERTISER', FILTER_INSERTION_ORDER = 'FILTER_INSERTION_ORDER', FILTER_LINE_ITEM = 'FILTER_LINE_ITEM', FILTER_PARTNER_CURRENCY = 'FILTER_PARTNER_CURRENCY', FILTER_ADVERTISER_CURRENCY = 'FILTER_ADVERTISER_CURRENCY', FILTER_ADVERTISER_TIMEZONE = 'FILTER_ADVERTISER_TIMEZONE', FILTER_LINE_ITEM_TYPE = 'FILTER_LINE_ITEM_TYPE', FILTER_USER_LIST = 'FILTER_USER_LIST', FILTER_USER_LIST_FIRST_PARTY = 'FILTER_USER_LIST_FIRST_PARTY', FILTER_USER_LIST_THIRD_PARTY = 'FILTER_USER_LIST_THIRD_PARTY', FILTER_TARGETED_USER_LIST = 'FILTER_TARGETED_USER_LIST', FILTER_DATA_PROVIDER = 'FILTER_DATA_PROVIDER', FILTER_ORDER_ID = 'FILTER_ORDER_ID', FILTER_VIDEO_PLAYER_SIZE = 'FILTER_VIDEO_PLAYER_SIZE', FILTER_VIDEO_DURATION_SECONDS = 'FILTER_VIDEO_DURATION_SECONDS', FILTER_KEYWORD = 'FILTER_KEYWORD', FILTER_PAGE_CATEGORY = 'FILTER_PAGE_CATEGORY', FILTER_CAMPAIGN_DAILY_FREQUENCY = 'FILTER_CAMPAIGN_DAILY_FREQUENCY', FILTER_LINE_ITEM_DAILY_FREQUENCY = 'FILTER_LINE_ITEM_DAILY_FREQUENCY', FILTER_LINE_ITEM_LIFETIME_FREQUENCY = 'FILTER_LINE_ITEM_LIFETIME_FREQUENCY', FILTER_OS = 'FILTER_OS', FILTER_BROWSER = 'FILTER_BROWSER', FILTER_CARRIER = 'FILTER_CARRIER', FILTER_SITE_LANGUAGE = 'FILTER_SITE_LANGUAGE', FILTER_INVENTORY_FORMAT = 'FILTER_INVENTORY_FORMAT', FILTER_ZIP_CODE = 'FILTER_ZIP_CODE', FILTER_VIDEO_RATING_TIER = 'FILTER_VIDEO_RATING_TIER', FILTER_VIDEO_FORMAT_SUPPORT = 'FILTER_VIDEO_FORMAT_SUPPORT', FILTER_VIDEO_SKIPPABLE_SUPPORT = 'FILTER_VIDEO_SKIPPABLE_SUPPORT', FILTER_VIDEO_CREATIVE_DURATION = 'FILTER_VIDEO_CREATIVE_DURATION', FILTER_PAGE_LAYOUT = 'FILTER_PAGE_LAYOUT', FILTER_VIDEO_AD_POSITION_IN_STREAM = 'FILTER_VIDEO_AD_POSITION_IN_STREAM', FILTER_AGE = 'FILTER_AGE', FILTER_GENDER = 'FILTER_GENDER', FILTER_QUARTER = 'FILTER_QUARTER', FILTER_TRUEVIEW_CONVERSION_TYPE = 'FILTER_TRUEVIEW_CONVERSION_TYPE', FILTER_MOBILE_GEO = 'FILTER_MOBILE_GEO', FILTER_MRAID_SUPPORT = 'FILTER_MRAID_SUPPORT', FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY = 'FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY', FILTER_VIDEO_CREATIVE_DURATION_SKIPPABLE = 'FILTER_VIDEO_CREATIVE_DURATION_SKIPPABLE', FILTER_NIELSEN_COUNTRY_CODE = 'FILTER_NIELSEN_COUNTRY_CODE', FILTER_NIELSEN_DEVICE_ID = 'FILTER_NIELSEN_DEVICE_ID', FILTER_NIELSEN_GENDER = 'FILTER_NIELSEN_GENDER', FILTER_NIELSEN_AGE = 'FILTER_NIELSEN_AGE', FILTER_INVENTORY_SOURCE_TYPE = 'FILTER_INVENTORY_SOURCE_TYPE', FILTER_CREATIVE_WIDTH = 'FILTER_CREATIVE_WIDTH', FILTER_CREATIVE_HEIGHT = 'FILTER_CREATIVE_HEIGHT', FILTER_DFP_ORDER_ID = 'FILTER_DFP_ORDER_ID', FILTER_TRUEVIEW_AGE = 'FILTER_TRUEVIEW_AGE', FILTER_TRUEVIEW_GENDER = 'FILTER_TRUEVIEW_GENDER', FILTER_TRUEVIEW_PARENTAL_STATUS = 'FILTER_TRUEVIEW_PARENTAL_STATUS', FILTER_TRUEVIEW_REMARKETING_LIST = 'FILTER_TRUEVIEW_REMARKETING_LIST', FILTER_TRUEVIEW_INTEREST = 'FILTER_TRUEVIEW_INTEREST', FILTER_TRUEVIEW_AD_GROUP_ID = 'FILTER_TRUEVIEW_AD_GROUP_ID', FILTER_TRUEVIEW_AD_GROUP_AD_ID = 'FILTER_TRUEVIEW_AD_GROUP_AD_ID', FILTER_TRUEVIEW_IAR_LANGUAGE = 'FILTER_TRUEVIEW_IAR_LANGUAGE', FILTER_TRUEVIEW_IAR_GENDER = 'FILTER_TRUEVIEW_IAR_GENDER', FILTER_TRUEVIEW_IAR_AGE = 'FILTER_TRUEVIEW_IAR_AGE', FILTER_TRUEVIEW_IAR_CATEGORY = 'FILTER_TRUEVIEW_IAR_CATEGORY', FILTER_TRUEVIEW_IAR_COUNTRY = 'FILTER_TRUEVIEW_IAR_COUNTRY', FILTER_TRUEVIEW_IAR_CITY = 'FILTER_TRUEVIEW_IAR_CITY', FILTER_TRUEVIEW_IAR_REGION = 'FILTER_TRUEVIEW_IAR_REGION', FILTER_TRUEVIEW_IAR_ZIPCODE = 'FILTER_TRUEVIEW_IAR_ZIPCODE', FILTER_TRUEVIEW_IAR_REMARKETING_LIST = 'FILTER_TRUEVIEW_IAR_REMARKETING_LIST', FILTER_TRUEVIEW_IAR_INTEREST = 'FILTER_TRUEVIEW_IAR_INTEREST', FILTER_TRUEVIEW_IAR_PARENTAL_STATUS = 'FILTER_TRUEVIEW_IAR_PARENTAL_STATUS', FILTER_TRUEVIEW_IAR_TIME_OF_DAY = 'FILTER_TRUEVIEW_IAR_TIME_OF_DAY', FILTER_TRUEVIEW_CUSTOM_AFFINITY = 'FILTER_TRUEVIEW_CUSTOM_AFFINITY', FILTER_TRUEVIEW_CATEGORY = 'FILTER_TRUEVIEW_CATEGORY', FILTER_TRUEVIEW_KEYWORD = 'FILTER_TRUEVIEW_KEYWORD', FILTER_TRUEVIEW_PLACEMENT = 'FILTER_TRUEVIEW_PLACEMENT', FILTER_TRUEVIEW_URL = 'FILTER_TRUEVIEW_URL', FILTER_TRUEVIEW_COUNTRY = 'FILTER_TRUEVIEW_COUNTRY', FILTER_TRUEVIEW_REGION = 'FILTER_TRUEVIEW_REGION', FILTER_TRUEVIEW_CITY = 'FILTER_TRUEVIEW_CITY', FILTER_TRUEVIEW_DMA = 'FILTER_TRUEVIEW_DMA', FILTER_TRUEVIEW_ZIPCODE = 'FILTER_TRUEVIEW_ZIPCODE', FILTER_NOT_SUPPORTED = 'FILTER_NOT_SUPPORTED', FILTER_MEDIA_PLAN = 'FILTER_MEDIA_PLAN', FILTER_TRUEVIEW_IAR_YOUTUBE_CHANNEL = 'FILTER_TRUEVIEW_IAR_YOUTUBE_CHANNEL', FILTER_TRUEVIEW_IAR_YOUTUBE_VIDEO = 'FILTER_TRUEVIEW_IAR_YOUTUBE_VIDEO', FILTER_SKIPPABLE_SUPPORT = 'FILTER_SKIPPABLE_SUPPORT', FILTER_COMPANION_CREATIVE_ID = 'FILTER_COMPANION_CREATIVE_ID', FILTER_BUDGET_SEGMENT_DESCRIPTION = 'FILTER_BUDGET_SEGMENT_DESCRIPTION', FILTER_FLOODLIGHT_ACTIVITY_ID = 'FILTER_FLOODLIGHT_ACTIVITY_ID', FILTER_DEVICE_MODEL = 'FILTER_DEVICE_MODEL', FILTER_DEVICE_MAKE = 'FILTER_DEVICE_MAKE', FILTER_DEVICE_TYPE = 'FILTER_DEVICE_TYPE', FILTER_CREATIVE_ATTRIBUTE = 'FILTER_CREATIVE_ATTRIBUTE', FILTER_INVENTORY_COMMITMENT_TYPE = 'FILTER_INVENTORY_COMMITMENT_TYPE', FILTER_INVENTORY_RATE_TYPE = 'FILTER_INVENTORY_RATE_TYPE', FILTER_INVENTORY_DELIVERY_METHOD = 'FILTER_INVENTORY_DELIVERY_METHOD', FILTER_INVENTORY_SOURCE_EXTERNAL_ID = 'FILTER_INVENTORY_SOURCE_EXTERNAL_ID', FILTER_AUTHORIZED_SELLER_STATE = 'FILTER_AUTHORIZED_SELLER_STATE', FILTER_VIDEO_DURATION_SECONDS_RANGE = 'FILTER_VIDEO_DURATION_SECONDS_RANGE', FILTER_PARTNER_NAME = 'FILTER_PARTNER_NAME', FILTER_PARTNER_STATUS = 'FILTER_PARTNER_STATUS', FILTER_ADVERTISER_NAME = 'FILTER_ADVERTISER_NAME', FILTER_ADVERTISER_INTEGRATION_CODE = 'FILTER_ADVERTISER_INTEGRATION_CODE', FILTER_ADVERTISER_INTEGRATION_STATUS = 'FILTER_ADVERTISER_INTEGRATION_STATUS', FILTER_CARRIER_NAME = 'FILTER_CARRIER_NAME', FILTER_CHANNEL_NAME = 'FILTER_CHANNEL_NAME', FILTER_CITY_NAME = 'FILTER_CITY_NAME', FILTER_COMPANION_CREATIVE_NAME = 'FILTER_COMPANION_CREATIVE_NAME', FILTER_USER_LIST_FIRST_PARTY_NAME = 'FILTER_USER_LIST_FIRST_PARTY_NAME', FILTER_USER_LIST_THIRD_PARTY_NAME = 'FILTER_USER_LIST_THIRD_PARTY_NAME', FILTER_NIELSEN_RESTATEMENT_DATE = 'FILTER_NIELSEN_RESTATEMENT_DATE', FILTER_NIELSEN_DATE_RANGE = 'FILTER_NIELSEN_DATE_RANGE', FILTER_INSERTION_ORDER_NAME = 'FILTER_INSERTION_ORDER_NAME', FILTER_REGION_NAME = 'FILTER_REGION_NAME', FILTER_DMA_NAME = 'FILTER_DMA_NAME', FILTER_TRUEVIEW_IAR_REGION_NAME = 'FILTER_TRUEVIEW_IAR_REGION_NAME', FILTER_TRUEVIEW_DMA_NAME = 'FILTER_TRUEVIEW_DMA_NAME', FILTER_TRUEVIEW_REGION_NAME = 'FILTER_TRUEVIEW_REGION_NAME', FILTER_ACTIVE_VIEW_CUSTOM_METRIC_ID = 'FILTER_ACTIVE_VIEW_CUSTOM_METRIC_ID', FILTER_ACTIVE_VIEW_CUSTOM_METRIC_NAME = 'FILTER_ACTIVE_VIEW_CUSTOM_METRIC_NAME', FILTER_AD_TYPE = 'FILTER_AD_TYPE', FILTER_ALGORITHM = 'FILTER_ALGORITHM', FILTER_ALGORITHM_ID = 'FILTER_ALGORITHM_ID', FILTER_AMP_PAGE_REQUEST = 'FILTER_AMP_PAGE_REQUEST', FILTER_ANONYMOUS_INVENTORY_MODELING = 'FILTER_ANONYMOUS_INVENTORY_MODELING', FILTER_APP_URL = 'FILTER_APP_URL', FILTER_APP_URL_EXCLUDED = 'FILTER_APP_URL_EXCLUDED', FILTER_ATTRIBUTED_USERLIST = 'FILTER_ATTRIBUTED_USERLIST', FILTER_ATTRIBUTED_USERLIST_COST = 'FILTER_ATTRIBUTED_USERLIST_COST', FILTER_ATTRIBUTED_USERLIST_TYPE = 'FILTER_ATTRIBUTED_USERLIST_TYPE', FILTER_ATTRIBUTION_MODEL = 'FILTER_ATTRIBUTION_MODEL', FILTER_AUDIENCE_LIST = 'FILTER_AUDIENCE_LIST', FILTER_AUDIENCE_LIST_COST = 'FILTER_AUDIENCE_LIST_COST', FILTER_AUDIENCE_LIST_TYPE = 'FILTER_AUDIENCE_LIST_TYPE', FILTER_AUDIENCE_NAME = 'FILTER_AUDIENCE_NAME', FILTER_AUDIENCE_TYPE = 'FILTER_AUDIENCE_TYPE', FILTER_BILLABLE_OUTCOME = 'FILTER_BILLABLE_OUTCOME', FILTER_BRAND_LIFT_TYPE = 'FILTER_BRAND_LIFT_TYPE', FILTER_CHANNEL_TYPE = 'FILTER_CHANNEL_TYPE', FILTER_CM_PLACEMENT_ID = 'FILTER_CM_PLACEMENT_ID', FILTER_CONVERSION_SOURCE = 'FILTER_CONVERSION_SOURCE', FILTER_CONVERSION_SOURCE_ID = 'FILTER_CONVERSION_SOURCE_ID', FILTER_COUNTRY_ID = 'FILTER_COUNTRY_ID', FILTER_CREATIVE = 'FILTER_CREATIVE', FILTER_CREATIVE_ASSET = 'FILTER_CREATIVE_ASSET', FILTER_CREATIVE_INTEGRATION_CODE = 'FILTER_CREATIVE_INTEGRATION_CODE', FILTER_CREATIVE_RENDERED_IN_AMP = 'FILTER_CREATIVE_RENDERED_IN_AMP', FILTER_CREATIVE_SOURCE = 'FILTER_CREATIVE_SOURCE', FILTER_CREATIVE_STATUS = 'FILTER_CREATIVE_STATUS', FILTER_DATA_PROVIDER_NAME = 'FILTER_DATA_PROVIDER_NAME', FILTER_DETAILED_DEMOGRAPHICS = 'FILTER_DETAILED_DEMOGRAPHICS', FILTER_DETAILED_DEMOGRAPHICS_ID = 'FILTER_DETAILED_DEMOGRAPHICS_ID', FILTER_DEVICE = 'FILTER_DEVICE', FILTER_GAM_INSERTION_ORDER = 'FILTER_GAM_INSERTION_ORDER', FILTER_GAM_LINE_ITEM = 'FILTER_GAM_LINE_ITEM', FILTER_GAM_LINE_ITEM_ID = 'FILTER_GAM_LINE_ITEM_ID', FILTER_DIGITAL_CONTENT_LABEL = 'FILTER_DIGITAL_CONTENT_LABEL', FILTER_DOMAIN = 'FILTER_DOMAIN', FILTER_ELIGIBLE_COOKIES_ON_FIRST_PARTY_AUDIENCE_LIST = 'FILTER_ELIGIBLE_COOKIES_ON_FIRST_PARTY_AUDIENCE_LIST', FILTER_ELIGIBLE_COOKIES_ON_THIRD_PARTY_AUDIENCE_LIST_AND_INTEREST = 'FILTER_ELIGIBLE_COOKIES_ON_THIRD_PARTY_AUDIENCE_LIST_AND_INTEREST', FILTER_EXCHANGE = 'FILTER_EXCHANGE', FILTER_EXCHANGE_CODE = 'FILTER_EXCHANGE_CODE', FILTER_EXTENSION = 'FILTER_EXTENSION', FILTER_EXTENSION_STATUS = 'FILTER_EXTENSION_STATUS', FILTER_EXTENSION_TYPE = 'FILTER_EXTENSION_TYPE', FILTER_FIRST_PARTY_AUDIENCE_LIST_COST = 'FILTER_FIRST_PARTY_AUDIENCE_LIST_COST', FILTER_FIRST_PARTY_AUDIENCE_LIST_TYPE = 'FILTER_FIRST_PARTY_AUDIENCE_LIST_TYPE', FILTER_FLOODLIGHT_ACTIVITY = 'FILTER_FLOODLIGHT_ACTIVITY', FILTER_FORMAT = 'FILTER_FORMAT', FILTER_GMAIL_AGE = 'FILTER_GMAIL_AGE', FILTER_GMAIL_CITY = 'FILTER_GMAIL_CITY', FILTER_GMAIL_COUNTRY = 'FILTER_GMAIL_COUNTRY', FILTER_GMAIL_COUNTRY_NAME = 'FILTER_GMAIL_COUNTRY_NAME', FILTER_GMAIL_DEVICE_TYPE = 'FILTER_GMAIL_DEVICE_TYPE', FILTER_GMAIL_DEVICE_TYPE_NAME = 'FILTER_GMAIL_DEVICE_TYPE_NAME', FILTER_GMAIL_GENDER = 'FILTER_GMAIL_GENDER', FILTER_GMAIL_REGION = 'FILTER_GMAIL_REGION', FILTER_GMAIL_REMARKETING_LIST = 'FILTER_GMAIL_REMARKETING_LIST', FILTER_HOUSEHOLD_INCOME = 'FILTER_HOUSEHOLD_INCOME', FILTER_IMPRESSION_COUNTING_METHOD = 'FILTER_IMPRESSION_COUNTING_METHOD', FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_INSERTION_ORDER = 'FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_INSERTION_ORDER', FILTER_INSERTION_ORDER_INTEGRATION_CODE = 'FILTER_INSERTION_ORDER_INTEGRATION_CODE', FILTER_INSERTION_ORDER_STATUS = 'FILTER_INSERTION_ORDER_STATUS', FILTER_INTEREST = 'FILTER_INTEREST', FILTER_INVENTORY_SOURCE_GROUP = 'FILTER_INVENTORY_SOURCE_GROUP', FILTER_INVENTORY_SOURCE_GROUP_ID = 'FILTER_INVENTORY_SOURCE_GROUP_ID', FILTER_INVENTORY_SOURCE_ID = 'FILTER_INVENTORY_SOURCE_ID', FILTER_INVENTORY_SOURCE_NAME = 'FILTER_INVENTORY_SOURCE_NAME', FILTER_LIFE_EVENT = 'FILTER_LIFE_EVENT', FILTER_LIFE_EVENTS = 'FILTER_LIFE_EVENTS', FILTER_LINE_ITEM_INTEGRATION_CODE = 'FILTER_LINE_ITEM_INTEGRATION_CODE', FILTER_LINE_ITEM_NAME = 'FILTER_LINE_ITEM_NAME', FILTER_LINE_ITEM_STATUS = 'FILTER_LINE_ITEM_STATUS', FILTER_MATCH_RATIO = 'FILTER_MATCH_RATIO', FILTER_MEASUREMENT_SOURCE = 'FILTER_MEASUREMENT_SOURCE', FILTER_MEDIA_PLAN_NAME = 'FILTER_MEDIA_PLAN_NAME', FILTER_PARENTAL_STATUS = 'FILTER_PARENTAL_STATUS', FILTER_PLACEMENT_ALL_YOUTUBE_CHANNELS = 'FILTER_PLACEMENT_ALL_YOUTUBE_CHANNELS', FILTER_PLATFORM = 'FILTER_PLATFORM', FILTER_PLAYBACK_METHOD = 'FILTER_PLAYBACK_METHOD', FILTER_POSITION_IN_CONTENT = 'FILTER_POSITION_IN_CONTENT', FILTER_PUBLISHER_PROPERTY = 'FILTER_PUBLISHER_PROPERTY', FILTER_PUBLISHER_PROPERTY_ID = 'FILTER_PUBLISHER_PROPERTY_ID', FILTER_PUBLISHER_PROPERTY_SECTION = 'FILTER_PUBLISHER_PROPERTY_SECTION', FILTER_PUBLISHER_PROPERTY_SECTION_ID = 'FILTER_PUBLISHER_PROPERTY_SECTION_ID', FILTER_REFUND_REASON = 'FILTER_REFUND_REASON', FILTER_REMARKETING_LIST = 'FILTER_REMARKETING_LIST', FILTER_REWARDED = 'FILTER_REWARDED', FILTER_SENSITIVE_CATEGORY = 'FILTER_SENSITIVE_CATEGORY', FILTER_SERVED_PIXEL_DENSITY = 'FILTER_SERVED_PIXEL_DENSITY', FILTER_TARGETED_DATA_PROVIDERS = 'FILTER_TARGETED_DATA_PROVIDERS', FILTER_THIRD_PARTY_AUDIENCE_LIST_COST = 'FILTER_THIRD_PARTY_AUDIENCE_LIST_COST', FILTER_THIRD_PARTY_AUDIENCE_LIST_TYPE = 'FILTER_THIRD_PARTY_AUDIENCE_LIST_TYPE', FILTER_TRUEVIEW_AD = 'FILTER_TRUEVIEW_AD', FILTER_TRUEVIEW_AD_GROUP = 'FILTER_TRUEVIEW_AD_GROUP', FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS = 'FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS', FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS_ID = 'FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS_ID', FILTER_TRUEVIEW_HOUSEHOLD_INCOME = 'FILTER_TRUEVIEW_HOUSEHOLD_INCOME', FILTER_TRUEVIEW_IAR_COUNTRY_NAME = 'FILTER_TRUEVIEW_IAR_COUNTRY_NAME', FILTER_TRUEVIEW_REMARKETING_LIST_NAME = 'FILTER_TRUEVIEW_REMARKETING_LIST_NAME', FILTER_VARIANT_ID = 'FILTER_VARIANT_ID', FILTER_VARIANT_NAME = 'FILTER_VARIANT_NAME', FILTER_VARIANT_VERSION = 'FILTER_VARIANT_VERSION', FILTER_VERIFICATION_VIDEO_PLAYER_SIZE = 'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE', FILTER_VERIFICATION_VIDEO_POSITION = 'FILTER_VERIFICATION_VIDEO_POSITION', FILTER_VIDEO_COMPANION_CREATIVE_SIZE = 'FILTER_VIDEO_COMPANION_CREATIVE_SIZE', FILTER_VIDEO_CONTINUOUS_PLAY = 'FILTER_VIDEO_CONTINUOUS_PLAY', FILTER_VIDEO_DURATION = 'FILTER_VIDEO_DURATION', FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST = 'FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST', FILTER_YOUTUBE_AD_VIDEO = 'FILTER_YOUTUBE_AD_VIDEO', FILTER_YOUTUBE_AD_VIDEO_ID = 'FILTER_YOUTUBE_AD_VIDEO_ID', FILTER_YOUTUBE_CHANNEL = 'FILTER_YOUTUBE_CHANNEL', FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_ADVERTISER = 'FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_ADVERTISER', FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_PARTNER = 'FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_PARTNER', FILTER_YOUTUBE_VIDEO = 'FILTER_YOUTUBE_VIDEO', FILTER_ZIP_POSTAL_CODE = 'FILTER_ZIP_POSTAL_CODE', FILTER_PLACEMENT_NAME_ALL_YOUTUBE_CHANNELS = 'FILTER_PLACEMENT_NAME_ALL_YOUTUBE_CHANNELS', FILTER_TRUEVIEW_PLACEMENT_ID = 'FILTER_TRUEVIEW_PLACEMENT_ID', FILTER_PATH_PATTERN_ID = 'FILTER_PATH_PATTERN_ID', FILTER_PATH_EVENT_INDEX = 'FILTER_PATH_EVENT_INDEX', FILTER_EVENT_TYPE = 'FILTER_EVENT_TYPE', FILTER_CHANNEL_GROUPING = 'FILTER_CHANNEL_GROUPING', FILTER_OM_SDK_AVAILABLE = 'FILTER_OM_SDK_AVAILABLE', FILTER_DATA_SOURCE = 'FILTER_DATA_SOURCE', FILTER_CM360_PLACEMENT_ID = 'FILTER_CM360_PLACEMENT_ID', FILTER_TRUEVIEW_CLICK_TYPE_NAME = 'FILTER_TRUEVIEW_CLICK_TYPE_NAME', FILTER_TRUEVIEW_AD_TYPE_NAME = 'FILTER_TRUEVIEW_AD_TYPE_NAME', FILTER_VIDEO_CONTENT_DURATION = 'FILTER_VIDEO_CONTENT_DURATION', FILTER_MATCHED_GENRE_TARGET = 'FILTER_MATCHED_GENRE_TARGET', FILTER_VIDEO_CONTENT_LIVE_STREAM = 'FILTER_VIDEO_CONTENT_LIVE_STREAM', FILTER_BUDGET_SEGMENT_TYPE = 'FILTER_BUDGET_SEGMENT_TYPE', FILTER_BUDGET_SEGMENT_BUDGET = 'FILTER_BUDGET_SEGMENT_BUDGET', FILTER_BUDGET_SEGMENT_START_DATE = 'FILTER_BUDGET_SEGMENT_START_DATE', FILTER_BUDGET_SEGMENT_END_DATE = 'FILTER_BUDGET_SEGMENT_END_DATE', FILTER_BUDGET_SEGMENT_PACING_PERCENTAGE = 'FILTER_BUDGET_SEGMENT_PACING_PERCENTAGE', FILTER_LINE_ITEM_BUDGET = 'FILTER_LINE_ITEM_BUDGET', FILTER_LINE_ITEM_START_DATE = 'FILTER_LINE_ITEM_START_DATE', FILTER_LINE_ITEM_END_DATE = 'FILTER_LINE_ITEM_END_DATE', FILTER_INSERTION_ORDER_GOAL_TYPE = 'FILTER_INSERTION_ORDER_GOAL_TYPE', FILTER_LINE_ITEM_PACING_PERCENTAGE = 'FILTER_LINE_ITEM_PACING_PERCENTAGE', FILTER_INSERTION_ORDER_GOAL_VALUE = 'FILTER_INSERTION_ORDER_GOAL_VALUE', FILTER_OMID_CAPABLE = 'FILTER_OMID_CAPABLE', FILTER_VENDOR_MEASUREMENT_MODE = 'FILTER_VENDOR_MEASUREMENT_MODE', FILTER_IMPRESSION_LOSS_REJECTION_REASON = 'FILTER_IMPRESSION_LOSS_REJECTION_REASON', FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_START = 'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_START', FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_FIRST_QUARTILE = 'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_FIRST_QUARTILE', FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_MID_POINT = 'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_MID_POINT', FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_THIRD_QUARTILE = 'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_THIRD_QUARTILE', FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_COMPLETE = 'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_COMPLETE', FILTER_VERIFICATION_VIDEO_RESIZED = 'FILTER_VERIFICATION_VIDEO_RESIZED', FILTER_VERIFICATION_AUDIBILITY_START = 'FILTER_VERIFICATION_AUDIBILITY_START', FILTER_VERIFICATION_AUDIBILITY_COMPLETE = 'FILTER_VERIFICATION_AUDIBILITY_COMPLETE', FILTER_MEDIA_TYPE = 'FILTER_MEDIA_TYPE', FILTER_AUDIO_FEED_TYPE_NAME = 'FILTER_AUDIO_FEED_TYPE_NAME', FILTER_TRUEVIEW_TARGETING_EXPANSION = 'FILTER_TRUEVIEW_TARGETING_EXPANSION', FILTER_PUBLISHER_TRAFFIC_SOURCE = 'FILTER_PUBLISHER_TRAFFIC_SOURCE' }

	export enum PathQueryOptionsFilterMatch { UNKNOWN = 'UNKNOWN', EXACT = 'EXACT', PARTIAL = 'PARTIAL', BEGINS_WITH = 'BEGINS_WITH', WILDCARD_EXPRESSION = 'WILDCARD_EXPRESSION' }


	/** Filter used to match traffic data in your report. */
	export interface FilterPair {

		/** Filter type. */
		type?: PathQueryOptionsFilterFilter | null;

		/** Filter value. */
		value?: string | null;
	}

	/** Filter used to match traffic data in your report. */
	export interface FilterPairFormProperties {

		/** Filter type. */
		type: FormControl<PathQueryOptionsFilterFilter | null | undefined>,

		/** Filter value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFilterPairFormGroup() {
		return new FormGroup<FilterPairFormProperties>({
			type: new FormControl<PathQueryOptionsFilterFilter | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List queries response. */
	export interface ListQueriesResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listQueriesResponse". */
		kind?: string | null;

		/** Next page's pagination token if one exists. */
		nextPageToken?: string | null;

		/** Retrieved queries. */
		queries?: Array<Query>;
	}

	/** List queries response. */
	export interface ListQueriesResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listQueriesResponse". */
		kind: FormControl<string | null | undefined>,

		/** Next page's pagination token if one exists. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListQueriesResponseFormGroup() {
		return new FormGroup<ListQueriesResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a query. */
	export interface Query {

		/** Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#query". */
		kind?: string | null;

		/** Query metadata. */
		metadata?: QueryMetadata;

		/** Parameters of a query or report. */
		params?: Parameters;

		/** Query ID. */
		queryId?: string | null;

		/** The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise. */
		reportDataEndTimeMs?: string | null;

		/** The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise. */
		reportDataStartTimeMs?: string | null;

		/** Information on how frequently and when to run a query. */
		schedule?: QuerySchedule;

		/** Canonical timezone code for report data time. Defaults to America/New_York. */
		timezoneCode?: string | null;
	}

	/** Represents a query. */
	export interface QueryFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#query". */
		kind: FormControl<string | null | undefined>,

		/** Query ID. */
		queryId: FormControl<string | null | undefined>,

		/** The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise. */
		reportDataEndTimeMs: FormControl<string | null | undefined>,

		/** The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise. */
		reportDataStartTimeMs: FormControl<string | null | undefined>,

		/** Canonical timezone code for report data time. Defaults to America/New_York. */
		timezoneCode: FormControl<string | null | undefined>,
	}
	export function CreateQueryFormGroup() {
		return new FormGroup<QueryFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			queryId: new FormControl<string | null | undefined>(undefined),
			reportDataEndTimeMs: new FormControl<string | null | undefined>(undefined),
			reportDataStartTimeMs: new FormControl<string | null | undefined>(undefined),
			timezoneCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Query metadata. */
	export interface QueryMetadata {

		/** Range of report data. */
		dataRange?: QueryMetadataDataRange | null;

		/** Format of the generated report. */
		format?: QueryMetadataFormat | null;

		/** The path to the location in Google Cloud Storage where the latest report is stored. */
		googleCloudStoragePathForLatestReport?: string | null;

		/** The path in Google Drive for the latest report. */
		googleDrivePathForLatestReport?: string | null;

		/** The time when the latest report started to run. */
		latestReportRunTimeMs?: string | null;

		/** Locale of the generated reports. Valid values are cs CZECH de GERMAN en ENGLISH es SPANISH fr FRENCH it ITALIAN ja JAPANESE ko KOREAN pl POLISH pt-BR BRAZILIAN_PORTUGUESE ru RUSSIAN tr TURKISH uk UKRAINIAN zh-CN CHINA_CHINESE zh-TW TAIWAN_CHINESE An locale string not in the list above will generate reports in English. */
		locale?: string | null;

		/** Number of reports that have been generated for the query. */
		reportCount?: number | null;

		/** Whether the latest report is currently running. */
		running?: boolean | null;

		/** Whether to send an email notification when a report is ready. Default to false. */
		sendNotification?: boolean | null;

		/** List of email addresses which are sent email notifications when the report is finished. Separate from sendNotification. */
		shareEmailAddress?: Array<string>;

		/** Query title. It is used to name the reports generated from this query. */
		title?: string | null;
	}

	/** Query metadata. */
	export interface QueryMetadataFormProperties {

		/** Range of report data. */
		dataRange: FormControl<QueryMetadataDataRange | null | undefined>,

		/** Format of the generated report. */
		format: FormControl<QueryMetadataFormat | null | undefined>,

		/** The path to the location in Google Cloud Storage where the latest report is stored. */
		googleCloudStoragePathForLatestReport: FormControl<string | null | undefined>,

		/** The path in Google Drive for the latest report. */
		googleDrivePathForLatestReport: FormControl<string | null | undefined>,

		/** The time when the latest report started to run. */
		latestReportRunTimeMs: FormControl<string | null | undefined>,

		/** Locale of the generated reports. Valid values are cs CZECH de GERMAN en ENGLISH es SPANISH fr FRENCH it ITALIAN ja JAPANESE ko KOREAN pl POLISH pt-BR BRAZILIAN_PORTUGUESE ru RUSSIAN tr TURKISH uk UKRAINIAN zh-CN CHINA_CHINESE zh-TW TAIWAN_CHINESE An locale string not in the list above will generate reports in English. */
		locale: FormControl<string | null | undefined>,

		/** Number of reports that have been generated for the query. */
		reportCount: FormControl<number | null | undefined>,

		/** Whether the latest report is currently running. */
		running: FormControl<boolean | null | undefined>,

		/** Whether to send an email notification when a report is ready. Default to false. */
		sendNotification: FormControl<boolean | null | undefined>,

		/** Query title. It is used to name the reports generated from this query. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateQueryMetadataFormGroup() {
		return new FormGroup<QueryMetadataFormProperties>({
			dataRange: new FormControl<QueryMetadataDataRange | null | undefined>(undefined),
			format: new FormControl<QueryMetadataFormat | null | undefined>(undefined),
			googleCloudStoragePathForLatestReport: new FormControl<string | null | undefined>(undefined),
			googleDrivePathForLatestReport: new FormControl<string | null | undefined>(undefined),
			latestReportRunTimeMs: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			reportCount: new FormControl<number | null | undefined>(undefined),
			running: new FormControl<boolean | null | undefined>(undefined),
			sendNotification: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QueryMetadataDataRange { CUSTOM_DATES = 'CUSTOM_DATES', CURRENT_DAY = 'CURRENT_DAY', PREVIOUS_DAY = 'PREVIOUS_DAY', WEEK_TO_DATE = 'WEEK_TO_DATE', MONTH_TO_DATE = 'MONTH_TO_DATE', QUARTER_TO_DATE = 'QUARTER_TO_DATE', YEAR_TO_DATE = 'YEAR_TO_DATE', PREVIOUS_WEEK = 'PREVIOUS_WEEK', PREVIOUS_HALF_MONTH = 'PREVIOUS_HALF_MONTH', PREVIOUS_MONTH = 'PREVIOUS_MONTH', PREVIOUS_QUARTER = 'PREVIOUS_QUARTER', PREVIOUS_YEAR = 'PREVIOUS_YEAR', LAST_7_DAYS = 'LAST_7_DAYS', LAST_30_DAYS = 'LAST_30_DAYS', LAST_90_DAYS = 'LAST_90_DAYS', LAST_365_DAYS = 'LAST_365_DAYS', ALL_TIME = 'ALL_TIME', LAST_14_DAYS = 'LAST_14_DAYS', TYPE_NOT_SUPPORTED = 'TYPE_NOT_SUPPORTED', LAST_60_DAYS = 'LAST_60_DAYS' }

	export enum QueryMetadataFormat { CSV = 'CSV', EXCEL_CSV = 'EXCEL_CSV', XLSX = 'XLSX' }


	/** Parameters of a query or report. */
	export interface Parameters {

		/** Filters used to match traffic data in your report. */
		filters?: Array<FilterPair>;

		/** Data is grouped by the filters listed in this field. */
		groupBys?: Array<PathQueryOptionsFilterFilter>;

		/** Deprecated. This field is no longer in use. */
		includeInviteData?: boolean | null;

		/** Metrics to include as columns in your report. */
		metrics?: Array<string>;

		/** Additional query options. */
		options?: Options;

		/** Report type. */
		type?: ParametersType | null;
	}

	/** Parameters of a query or report. */
	export interface ParametersFormProperties {

		/** Deprecated. This field is no longer in use. */
		includeInviteData: FormControl<boolean | null | undefined>,

		/** Report type. */
		type: FormControl<ParametersType | null | undefined>,
	}
	export function CreateParametersFormGroup() {
		return new FormGroup<ParametersFormProperties>({
			includeInviteData: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<ParametersType | null | undefined>(undefined),
		});

	}


	/** Additional query options. */
	export interface Options {

		/** Set to true and filter your report by `FILTER_INSERTION_ORDER` or `FILTER_LINE_ITEM` to include data for audience lists specifically targeted by those items. */
		includeOnlyTargetedUserLists?: boolean | null;

		/** Path Query Options for Report Options. */
		pathQueryOptions?: PathQueryOptions;
	}

	/** Additional query options. */
	export interface OptionsFormProperties {

		/** Set to true and filter your report by `FILTER_INSERTION_ORDER` or `FILTER_LINE_ITEM` to include data for audience lists specifically targeted by those items. */
		includeOnlyTargetedUserLists: FormControl<boolean | null | undefined>,
	}
	export function CreateOptionsFormGroup() {
		return new FormGroup<OptionsFormProperties>({
			includeOnlyTargetedUserLists: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Path Query Options for Report Options. */
	export interface PathQueryOptions {

		/** A channel grouping defines a set of rules that can be used to categorize events in a path report. */
		channelGrouping?: ChannelGrouping;

		/** Path Filters. There is a limit of 100 path filters that can be set per report. */
		pathFilters?: Array<PathFilter>;
	}

	/** Path Query Options for Report Options. */
	export interface PathQueryOptionsFormProperties {
	}
	export function CreatePathQueryOptionsFormGroup() {
		return new FormGroup<PathQueryOptionsFormProperties>({
		});

	}


	/** Path filters specify which paths to include in a report. A path is the result of combining DV360 events based on User ID to create a workflow of users' actions. When a path filter is set, the resulting report will only include paths that match the specified event at the specified position. All other paths will be excluded. */
	export interface PathFilter {

		/** Filter on an event to be applied to some part of the path. */
		eventFilters?: Array<EventFilter>;

		/** Indicates the position of the path the filter should match to (first, last, or any event in path). */
		pathMatchPosition?: PathFilterPathMatchPosition | null;
	}

	/** Path filters specify which paths to include in a report. A path is the result of combining DV360 events based on User ID to create a workflow of users' actions. When a path filter is set, the resulting report will only include paths that match the specified event at the specified position. All other paths will be excluded. */
	export interface PathFilterFormProperties {

		/** Indicates the position of the path the filter should match to (first, last, or any event in path). */
		pathMatchPosition: FormControl<PathFilterPathMatchPosition | null | undefined>,
	}
	export function CreatePathFilterFormGroup() {
		return new FormGroup<PathFilterFormProperties>({
			pathMatchPosition: new FormControl<PathFilterPathMatchPosition | null | undefined>(undefined),
		});

	}

	export enum PathFilterPathMatchPosition { ANY = 'ANY', FIRST = 'FIRST', LAST = 'LAST' }

	export enum ParametersType { TYPE_GENERAL = 'TYPE_GENERAL', TYPE_AUDIENCE_PERFORMANCE = 'TYPE_AUDIENCE_PERFORMANCE', TYPE_INVENTORY_AVAILABILITY = 'TYPE_INVENTORY_AVAILABILITY', TYPE_KEYWORD = 'TYPE_KEYWORD', TYPE_PIXEL_LOAD = 'TYPE_PIXEL_LOAD', TYPE_AUDIENCE_COMPOSITION = 'TYPE_AUDIENCE_COMPOSITION', TYPE_CROSS_PARTNER = 'TYPE_CROSS_PARTNER', TYPE_PAGE_CATEGORY = 'TYPE_PAGE_CATEGORY', TYPE_THIRD_PARTY_DATA_PROVIDER = 'TYPE_THIRD_PARTY_DATA_PROVIDER', TYPE_CROSS_PARTNER_THIRD_PARTY_DATA_PROVIDER = 'TYPE_CROSS_PARTNER_THIRD_PARTY_DATA_PROVIDER', TYPE_CLIENT_SAFE = 'TYPE_CLIENT_SAFE', TYPE_ORDER_ID = 'TYPE_ORDER_ID', TYPE_FEE = 'TYPE_FEE', TYPE_CROSS_FEE = 'TYPE_CROSS_FEE', TYPE_ACTIVE_GRP = 'TYPE_ACTIVE_GRP', TYPE_YOUTUBE_VERTICAL = 'TYPE_YOUTUBE_VERTICAL', TYPE_COMSCORE_VCE = 'TYPE_COMSCORE_VCE', TYPE_TRUEVIEW = 'TYPE_TRUEVIEW', TYPE_NIELSEN_AUDIENCE_PROFILE = 'TYPE_NIELSEN_AUDIENCE_PROFILE', TYPE_NIELSEN_DAILY_REACH_BUILD = 'TYPE_NIELSEN_DAILY_REACH_BUILD', TYPE_NIELSEN_SITE = 'TYPE_NIELSEN_SITE', TYPE_REACH_AND_FREQUENCY = 'TYPE_REACH_AND_FREQUENCY', TYPE_ESTIMATED_CONVERSION = 'TYPE_ESTIMATED_CONVERSION', TYPE_VERIFICATION = 'TYPE_VERIFICATION', TYPE_TRUEVIEW_IAR = 'TYPE_TRUEVIEW_IAR', TYPE_NIELSEN_ONLINE_GLOBAL_MARKET = 'TYPE_NIELSEN_ONLINE_GLOBAL_MARKET', TYPE_PETRA_NIELSEN_AUDIENCE_PROFILE = 'TYPE_PETRA_NIELSEN_AUDIENCE_PROFILE', TYPE_PETRA_NIELSEN_DAILY_REACH_BUILD = 'TYPE_PETRA_NIELSEN_DAILY_REACH_BUILD', TYPE_PETRA_NIELSEN_ONLINE_GLOBAL_MARKET = 'TYPE_PETRA_NIELSEN_ONLINE_GLOBAL_MARKET', TYPE_NOT_SUPPORTED = 'TYPE_NOT_SUPPORTED', TYPE_REACH_AUDIENCE = 'TYPE_REACH_AUDIENCE', TYPE_LINEAR_TV_SEARCH_LIFT = 'TYPE_LINEAR_TV_SEARCH_LIFT', TYPE_PATH = 'TYPE_PATH', TYPE_PATH_ATTRIBUTION = 'TYPE_PATH_ATTRIBUTION' }


	/** Information on how frequently and when to run a query. */
	export interface QuerySchedule {

		/** Datetime to periodically run the query until. */
		endTimeMs?: string | null;

		/** How often the query is run. */
		frequency?: QueryScheduleFrequency | null;

		/** Time of day at which a new report will be generated, represented as minutes past midnight. Range is 0 to 1439. Only applies to scheduled reports. */
		nextRunMinuteOfDay?: number | null;

		/** Canonical timezone code for report generation time. Defaults to America/New_York. */
		nextRunTimezoneCode?: string | null;

		/** When to start running the query. Not applicable to `ONE_TIME` frequency. */
		startTimeMs?: string | null;
	}

	/** Information on how frequently and when to run a query. */
	export interface QueryScheduleFormProperties {

		/** Datetime to periodically run the query until. */
		endTimeMs: FormControl<string | null | undefined>,

		/** How often the query is run. */
		frequency: FormControl<QueryScheduleFrequency | null | undefined>,

		/** Time of day at which a new report will be generated, represented as minutes past midnight. Range is 0 to 1439. Only applies to scheduled reports. */
		nextRunMinuteOfDay: FormControl<number | null | undefined>,

		/** Canonical timezone code for report generation time. Defaults to America/New_York. */
		nextRunTimezoneCode: FormControl<string | null | undefined>,

		/** When to start running the query. Not applicable to `ONE_TIME` frequency. */
		startTimeMs: FormControl<string | null | undefined>,
	}
	export function CreateQueryScheduleFormGroup() {
		return new FormGroup<QueryScheduleFormProperties>({
			endTimeMs: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<QueryScheduleFrequency | null | undefined>(undefined),
			nextRunMinuteOfDay: new FormControl<number | null | undefined>(undefined),
			nextRunTimezoneCode: new FormControl<string | null | undefined>(undefined),
			startTimeMs: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QueryScheduleFrequency { ONE_TIME = 'ONE_TIME', DAILY = 'DAILY', WEEKLY = 'WEEKLY', SEMI_MONTHLY = 'SEMI_MONTHLY', MONTHLY = 'MONTHLY', QUARTERLY = 'QUARTERLY', YEARLY = 'YEARLY' }


	/** List reports response. */
	export interface ListReportsResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listReportsResponse". */
		kind?: string | null;

		/** Next page's pagination token if one exists. */
		nextPageToken?: string | null;

		/** Retrieved reports. */
		reports?: Array<Report>;
	}

	/** List reports response. */
	export interface ListReportsResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listReportsResponse". */
		kind: FormControl<string | null | undefined>,

		/** Next page's pagination token if one exists. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListReportsResponseFormGroup() {
		return new FormGroup<ListReportsResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a report. */
	export interface Report {

		/** Key used to identify a report. */
		key?: ReportKey;

		/** Report metadata. */
		metadata?: ReportMetadata;

		/** Parameters of a query or report. */
		params?: Parameters;
	}

	/** Represents a report. */
	export interface ReportFormProperties {
	}
	export function CreateReportFormGroup() {
		return new FormGroup<ReportFormProperties>({
		});

	}


	/** Key used to identify a report. */
	export interface ReportKey {

		/** Query ID. */
		queryId?: string | null;

		/** Report ID. */
		reportId?: string | null;
	}

	/** Key used to identify a report. */
	export interface ReportKeyFormProperties {

		/** Query ID. */
		queryId: FormControl<string | null | undefined>,

		/** Report ID. */
		reportId: FormControl<string | null | undefined>,
	}
	export function CreateReportKeyFormGroup() {
		return new FormGroup<ReportKeyFormProperties>({
			queryId: new FormControl<string | null | undefined>(undefined),
			reportId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Report metadata. */
	export interface ReportMetadata {

		/** The path to the location in Google Cloud Storage where the report is stored. */
		googleCloudStoragePath?: string | null;

		/** The ending time for the data that is shown in the report. */
		reportDataEndTimeMs?: string | null;

		/** The starting time for the data that is shown in the report. */
		reportDataStartTimeMs?: string | null;

		/** Report status. */
		status?: ReportStatus;
	}

	/** Report metadata. */
	export interface ReportMetadataFormProperties {

		/** The path to the location in Google Cloud Storage where the report is stored. */
		googleCloudStoragePath: FormControl<string | null | undefined>,

		/** The ending time for the data that is shown in the report. */
		reportDataEndTimeMs: FormControl<string | null | undefined>,

		/** The starting time for the data that is shown in the report. */
		reportDataStartTimeMs: FormControl<string | null | undefined>,
	}
	export function CreateReportMetadataFormGroup() {
		return new FormGroup<ReportMetadataFormProperties>({
			googleCloudStoragePath: new FormControl<string | null | undefined>(undefined),
			reportDataEndTimeMs: new FormControl<string | null | undefined>(undefined),
			reportDataStartTimeMs: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Report status. */
	export interface ReportStatus {

		/** An explanation of a report failure. */
		failure?: ReportFailure;

		/** The time when this report either completed successfully or failed. */
		finishTimeMs?: string | null;

		/** The file type of the report. */
		format?: QueryMetadataFormat | null;

		/** The state of the report. */
		state?: ReportStatusState | null;
	}

	/** Report status. */
	export interface ReportStatusFormProperties {

		/** The time when this report either completed successfully or failed. */
		finishTimeMs: FormControl<string | null | undefined>,

		/** The file type of the report. */
		format: FormControl<QueryMetadataFormat | null | undefined>,

		/** The state of the report. */
		state: FormControl<ReportStatusState | null | undefined>,
	}
	export function CreateReportStatusFormGroup() {
		return new FormGroup<ReportStatusFormProperties>({
			finishTimeMs: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<QueryMetadataFormat | null | undefined>(undefined),
			state: new FormControl<ReportStatusState | null | undefined>(undefined),
		});

	}


	/** An explanation of a report failure. */
	export interface ReportFailure {

		/** Error code that shows why the report was not created. */
		errorCode?: ReportFailureErrorCode | null;
	}

	/** An explanation of a report failure. */
	export interface ReportFailureFormProperties {

		/** Error code that shows why the report was not created. */
		errorCode: FormControl<ReportFailureErrorCode | null | undefined>,
	}
	export function CreateReportFailureFormGroup() {
		return new FormGroup<ReportFailureFormProperties>({
			errorCode: new FormControl<ReportFailureErrorCode | null | undefined>(undefined),
		});

	}

	export enum ReportFailureErrorCode { AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR', UNAUTHORIZED_API_ACCESS = 'UNAUTHORIZED_API_ACCESS', SERVER_ERROR = 'SERVER_ERROR', VALIDATION_ERROR = 'VALIDATION_ERROR', REPORTING_FATAL_ERROR = 'REPORTING_FATAL_ERROR', REPORTING_TRANSIENT_ERROR = 'REPORTING_TRANSIENT_ERROR', REPORTING_IMCOMPATIBLE_METRICS = 'REPORTING_IMCOMPATIBLE_METRICS', REPORTING_ILLEGAL_FILENAME = 'REPORTING_ILLEGAL_FILENAME', REPORTING_QUERY_NOT_FOUND = 'REPORTING_QUERY_NOT_FOUND', REPORTING_BUCKET_NOT_FOUND = 'REPORTING_BUCKET_NOT_FOUND', REPORTING_CREATE_BUCKET_FAILED = 'REPORTING_CREATE_BUCKET_FAILED', REPORTING_DELETE_BUCKET_FAILED = 'REPORTING_DELETE_BUCKET_FAILED', REPORTING_UPDATE_BUCKET_PERMISSION_FAILED = 'REPORTING_UPDATE_BUCKET_PERMISSION_FAILED', REPORTING_WRITE_BUCKET_OBJECT_FAILED = 'REPORTING_WRITE_BUCKET_OBJECT_FAILED', DEPRECATED_REPORTING_INVALID_QUERY = 'DEPRECATED_REPORTING_INVALID_QUERY', REPORTING_INVALID_QUERY_TOO_MANY_UNFILTERED_LARGE_GROUP_BYS = 'REPORTING_INVALID_QUERY_TOO_MANY_UNFILTERED_LARGE_GROUP_BYS', REPORTING_INVALID_QUERY_TITLE_MISSING = 'REPORTING_INVALID_QUERY_TITLE_MISSING', REPORTING_INVALID_QUERY_MISSING_PARTNER_AND_ADVERTISER_FILTERS = 'REPORTING_INVALID_QUERY_MISSING_PARTNER_AND_ADVERTISER_FILTERS' }

	export enum ReportStatusState { RUNNING = 'RUNNING', DONE = 'DONE', FAILED = 'FAILED' }


	/** Request to run a stored query to generate a report. */
	export interface RunQueryRequest {

		/** Report data range used to generate the report. */
		dataRange?: QueryMetadataDataRange | null;

		/** The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise. */
		reportDataEndTimeMs?: string | null;

		/** The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise. */
		reportDataStartTimeMs?: string | null;

		/** Canonical timezone code for report data time. Defaults to America/New_York. */
		timezoneCode?: string | null;
	}

	/** Request to run a stored query to generate a report. */
	export interface RunQueryRequestFormProperties {

		/** Report data range used to generate the report. */
		dataRange: FormControl<QueryMetadataDataRange | null | undefined>,

		/** The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise. */
		reportDataEndTimeMs: FormControl<string | null | undefined>,

		/** The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise. */
		reportDataStartTimeMs: FormControl<string | null | undefined>,

		/** Canonical timezone code for report data time. Defaults to America/New_York. */
		timezoneCode: FormControl<string | null | undefined>,
	}
	export function CreateRunQueryRequestFormGroup() {
		return new FormGroup<RunQueryRequestFormProperties>({
			dataRange: new FormControl<QueryMetadataDataRange | null | undefined>(undefined),
			reportDataEndTimeMs: new FormControl<string | null | undefined>(undefined),
			reportDataStartTimeMs: new FormControl<string | null | undefined>(undefined),
			timezoneCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves stored queries.
		 * Get queries
		 * @param {number} pageSize Maximum number of results per page. Must be between 1 and 100. Defaults to 100 if unspecified.
		 * @param {string} pageToken Optional pagination token.
		 * @return {ListQueriesResponse} Successful response
		 */
		Doubleclickbidmanager_queries_listqueries(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListQueriesResponse> {
			return this.http.get<ListQueriesResponse>(this.baseUri + 'queries?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Retrieves stored reports.
		 * Get queries/{queryId}/reports
		 * @param {string} queryId Query ID with which the reports are associated.
		 * @param {number} pageSize Maximum number of results per page. Must be between 1 and 100. Defaults to 100 if unspecified.
		 * @param {string} pageToken Optional pagination token.
		 * @return {ListReportsResponse} Successful response
		 */
		Doubleclickbidmanager_reports_listreports(queryId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListReportsResponse> {
			return this.http.get<ListReportsResponse>(this.baseUri + 'queries/' + (queryId == null ? '' : encodeURIComponent(queryId)) + '/reports&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a query.
		 * Post query
		 * @param {boolean} asynchronous If true, tries to run the query asynchronously. Only applicable when the frequency is ONE_TIME.
		 * @return {Query} Successful response
		 */
		Doubleclickbidmanager_queries_createquery(asynchronous: boolean | null | undefined, requestBody: Query): Observable<Query> {
			return this.http.post<Query>(this.baseUri + 'query?asynchronous=' + asynchronous, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a stored query as well as the associated stored reports.
		 * Delete query/{queryId}
		 * @param {string} queryId Query ID to delete.
		 * @return {void} Successful response
		 */
		Doubleclickbidmanager_queries_deletequery(queryId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'query/' + (queryId == null ? '' : encodeURIComponent(queryId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a stored query.
		 * Get query/{queryId}
		 * @param {string} queryId Query ID to retrieve.
		 * @return {Query} Successful response
		 */
		Doubleclickbidmanager_queries_getquery(queryId: string): Observable<Query> {
			return this.http.get<Query>(this.baseUri + 'query/' + (queryId == null ? '' : encodeURIComponent(queryId)), {});
		}

		/**
		 * Runs a stored query to generate a report.
		 * Post query/{queryId}
		 * @param {string} queryId Query ID to run.
		 * @param {boolean} asynchronous If true, tries to run the query asynchronously.
		 * @return {void} Successful response
		 */
		Doubleclickbidmanager_queries_runquery(queryId: string, asynchronous: boolean | null | undefined, requestBody: RunQueryRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'query/' + (queryId == null ? '' : encodeURIComponent(queryId)) + '&asynchronous=' + asynchronous, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

