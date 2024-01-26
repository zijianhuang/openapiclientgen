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

	export enum PathQueryOptionsFilterFilter { FILTER_UNKNOWN = 0, FILTER_DATE = 1, FILTER_DAY_OF_WEEK = 2, FILTER_WEEK = 3, FILTER_MONTH = 4, FILTER_YEAR = 5, FILTER_TIME_OF_DAY = 6, FILTER_CONVERSION_DELAY = 7, FILTER_CREATIVE_ID = 8, FILTER_CREATIVE_SIZE = 9, FILTER_CREATIVE_TYPE = 10, FILTER_EXCHANGE_ID = 11, FILTER_AD_POSITION = 12, FILTER_PUBLIC_INVENTORY = 13, FILTER_INVENTORY_SOURCE = 14, FILTER_CITY = 15, FILTER_REGION = 16, FILTER_DMA = 17, FILTER_COUNTRY = 18, FILTER_SITE_ID = 19, FILTER_CHANNEL_ID = 20, FILTER_PARTNER = 21, FILTER_ADVERTISER = 22, FILTER_INSERTION_ORDER = 23, FILTER_LINE_ITEM = 24, FILTER_PARTNER_CURRENCY = 25, FILTER_ADVERTISER_CURRENCY = 26, FILTER_ADVERTISER_TIMEZONE = 27, FILTER_LINE_ITEM_TYPE = 28, FILTER_USER_LIST = 29, FILTER_USER_LIST_FIRST_PARTY = 30, FILTER_USER_LIST_THIRD_PARTY = 31, FILTER_TARGETED_USER_LIST = 32, FILTER_DATA_PROVIDER = 33, FILTER_ORDER_ID = 34, FILTER_VIDEO_PLAYER_SIZE = 35, FILTER_VIDEO_DURATION_SECONDS = 36, FILTER_KEYWORD = 37, FILTER_PAGE_CATEGORY = 38, FILTER_CAMPAIGN_DAILY_FREQUENCY = 39, FILTER_LINE_ITEM_DAILY_FREQUENCY = 40, FILTER_LINE_ITEM_LIFETIME_FREQUENCY = 41, FILTER_OS = 42, FILTER_BROWSER = 43, FILTER_CARRIER = 44, FILTER_SITE_LANGUAGE = 45, FILTER_INVENTORY_FORMAT = 46, FILTER_ZIP_CODE = 47, FILTER_VIDEO_RATING_TIER = 48, FILTER_VIDEO_FORMAT_SUPPORT = 49, FILTER_VIDEO_SKIPPABLE_SUPPORT = 50, FILTER_VIDEO_CREATIVE_DURATION = 51, FILTER_PAGE_LAYOUT = 52, FILTER_VIDEO_AD_POSITION_IN_STREAM = 53, FILTER_AGE = 54, FILTER_GENDER = 55, FILTER_QUARTER = 56, FILTER_TRUEVIEW_CONVERSION_TYPE = 57, FILTER_MOBILE_GEO = 58, FILTER_MRAID_SUPPORT = 59, FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY = 60, FILTER_VIDEO_CREATIVE_DURATION_SKIPPABLE = 61, FILTER_NIELSEN_COUNTRY_CODE = 62, FILTER_NIELSEN_DEVICE_ID = 63, FILTER_NIELSEN_GENDER = 64, FILTER_NIELSEN_AGE = 65, FILTER_INVENTORY_SOURCE_TYPE = 66, FILTER_CREATIVE_WIDTH = 67, FILTER_CREATIVE_HEIGHT = 68, FILTER_DFP_ORDER_ID = 69, FILTER_TRUEVIEW_AGE = 70, FILTER_TRUEVIEW_GENDER = 71, FILTER_TRUEVIEW_PARENTAL_STATUS = 72, FILTER_TRUEVIEW_REMARKETING_LIST = 73, FILTER_TRUEVIEW_INTEREST = 74, FILTER_TRUEVIEW_AD_GROUP_ID = 75, FILTER_TRUEVIEW_AD_GROUP_AD_ID = 76, FILTER_TRUEVIEW_IAR_LANGUAGE = 77, FILTER_TRUEVIEW_IAR_GENDER = 78, FILTER_TRUEVIEW_IAR_AGE = 79, FILTER_TRUEVIEW_IAR_CATEGORY = 80, FILTER_TRUEVIEW_IAR_COUNTRY = 81, FILTER_TRUEVIEW_IAR_CITY = 82, FILTER_TRUEVIEW_IAR_REGION = 83, FILTER_TRUEVIEW_IAR_ZIPCODE = 84, FILTER_TRUEVIEW_IAR_REMARKETING_LIST = 85, FILTER_TRUEVIEW_IAR_INTEREST = 86, FILTER_TRUEVIEW_IAR_PARENTAL_STATUS = 87, FILTER_TRUEVIEW_IAR_TIME_OF_DAY = 88, FILTER_TRUEVIEW_CUSTOM_AFFINITY = 89, FILTER_TRUEVIEW_CATEGORY = 90, FILTER_TRUEVIEW_KEYWORD = 91, FILTER_TRUEVIEW_PLACEMENT = 92, FILTER_TRUEVIEW_URL = 93, FILTER_TRUEVIEW_COUNTRY = 94, FILTER_TRUEVIEW_REGION = 95, FILTER_TRUEVIEW_CITY = 96, FILTER_TRUEVIEW_DMA = 97, FILTER_TRUEVIEW_ZIPCODE = 98, FILTER_NOT_SUPPORTED = 99, FILTER_MEDIA_PLAN = 100, FILTER_TRUEVIEW_IAR_YOUTUBE_CHANNEL = 101, FILTER_TRUEVIEW_IAR_YOUTUBE_VIDEO = 102, FILTER_SKIPPABLE_SUPPORT = 103, FILTER_COMPANION_CREATIVE_ID = 104, FILTER_BUDGET_SEGMENT_DESCRIPTION = 105, FILTER_FLOODLIGHT_ACTIVITY_ID = 106, FILTER_DEVICE_MODEL = 107, FILTER_DEVICE_MAKE = 108, FILTER_DEVICE_TYPE = 109, FILTER_CREATIVE_ATTRIBUTE = 110, FILTER_INVENTORY_COMMITMENT_TYPE = 111, FILTER_INVENTORY_RATE_TYPE = 112, FILTER_INVENTORY_DELIVERY_METHOD = 113, FILTER_INVENTORY_SOURCE_EXTERNAL_ID = 114, FILTER_AUTHORIZED_SELLER_STATE = 115, FILTER_VIDEO_DURATION_SECONDS_RANGE = 116, FILTER_PARTNER_NAME = 117, FILTER_PARTNER_STATUS = 118, FILTER_ADVERTISER_NAME = 119, FILTER_ADVERTISER_INTEGRATION_CODE = 120, FILTER_ADVERTISER_INTEGRATION_STATUS = 121, FILTER_CARRIER_NAME = 122, FILTER_CHANNEL_NAME = 123, FILTER_CITY_NAME = 124, FILTER_COMPANION_CREATIVE_NAME = 125, FILTER_USER_LIST_FIRST_PARTY_NAME = 126, FILTER_USER_LIST_THIRD_PARTY_NAME = 127, FILTER_NIELSEN_RESTATEMENT_DATE = 128, FILTER_NIELSEN_DATE_RANGE = 129, FILTER_INSERTION_ORDER_NAME = 130, FILTER_REGION_NAME = 131, FILTER_DMA_NAME = 132, FILTER_TRUEVIEW_IAR_REGION_NAME = 133, FILTER_TRUEVIEW_DMA_NAME = 134, FILTER_TRUEVIEW_REGION_NAME = 135, FILTER_ACTIVE_VIEW_CUSTOM_METRIC_ID = 136, FILTER_ACTIVE_VIEW_CUSTOM_METRIC_NAME = 137, FILTER_AD_TYPE = 138, FILTER_ALGORITHM = 139, FILTER_ALGORITHM_ID = 140, FILTER_AMP_PAGE_REQUEST = 141, FILTER_ANONYMOUS_INVENTORY_MODELING = 142, FILTER_APP_URL = 143, FILTER_APP_URL_EXCLUDED = 144, FILTER_ATTRIBUTED_USERLIST = 145, FILTER_ATTRIBUTED_USERLIST_COST = 146, FILTER_ATTRIBUTED_USERLIST_TYPE = 147, FILTER_ATTRIBUTION_MODEL = 148, FILTER_AUDIENCE_LIST = 149, FILTER_AUDIENCE_LIST_COST = 150, FILTER_AUDIENCE_LIST_TYPE = 151, FILTER_AUDIENCE_NAME = 152, FILTER_AUDIENCE_TYPE = 153, FILTER_BILLABLE_OUTCOME = 154, FILTER_BRAND_LIFT_TYPE = 155, FILTER_CHANNEL_TYPE = 156, FILTER_CM_PLACEMENT_ID = 157, FILTER_CONVERSION_SOURCE = 158, FILTER_CONVERSION_SOURCE_ID = 159, FILTER_COUNTRY_ID = 160, FILTER_CREATIVE = 161, FILTER_CREATIVE_ASSET = 162, FILTER_CREATIVE_INTEGRATION_CODE = 163, FILTER_CREATIVE_RENDERED_IN_AMP = 164, FILTER_CREATIVE_SOURCE = 165, FILTER_CREATIVE_STATUS = 166, FILTER_DATA_PROVIDER_NAME = 167, FILTER_DETAILED_DEMOGRAPHICS = 168, FILTER_DETAILED_DEMOGRAPHICS_ID = 169, FILTER_DEVICE = 170, FILTER_GAM_INSERTION_ORDER = 171, FILTER_GAM_LINE_ITEM = 172, FILTER_GAM_LINE_ITEM_ID = 173, FILTER_DIGITAL_CONTENT_LABEL = 174, FILTER_DOMAIN = 175, FILTER_ELIGIBLE_COOKIES_ON_FIRST_PARTY_AUDIENCE_LIST = 176, FILTER_ELIGIBLE_COOKIES_ON_THIRD_PARTY_AUDIENCE_LIST_AND_INTEREST = 177, FILTER_EXCHANGE = 178, FILTER_EXCHANGE_CODE = 179, FILTER_EXTENSION = 180, FILTER_EXTENSION_STATUS = 181, FILTER_EXTENSION_TYPE = 182, FILTER_FIRST_PARTY_AUDIENCE_LIST_COST = 183, FILTER_FIRST_PARTY_AUDIENCE_LIST_TYPE = 184, FILTER_FLOODLIGHT_ACTIVITY = 185, FILTER_FORMAT = 186, FILTER_GMAIL_AGE = 187, FILTER_GMAIL_CITY = 188, FILTER_GMAIL_COUNTRY = 189, FILTER_GMAIL_COUNTRY_NAME = 190, FILTER_GMAIL_DEVICE_TYPE = 191, FILTER_GMAIL_DEVICE_TYPE_NAME = 192, FILTER_GMAIL_GENDER = 193, FILTER_GMAIL_REGION = 194, FILTER_GMAIL_REMARKETING_LIST = 195, FILTER_HOUSEHOLD_INCOME = 196, FILTER_IMPRESSION_COUNTING_METHOD = 197, FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_INSERTION_ORDER = 198, FILTER_INSERTION_ORDER_INTEGRATION_CODE = 199, FILTER_INSERTION_ORDER_STATUS = 200, FILTER_INTEREST = 201, FILTER_INVENTORY_SOURCE_GROUP = 202, FILTER_INVENTORY_SOURCE_GROUP_ID = 203, FILTER_INVENTORY_SOURCE_ID = 204, FILTER_INVENTORY_SOURCE_NAME = 205, FILTER_LIFE_EVENT = 206, FILTER_LIFE_EVENTS = 207, FILTER_LINE_ITEM_INTEGRATION_CODE = 208, FILTER_LINE_ITEM_NAME = 209, FILTER_LINE_ITEM_STATUS = 210, FILTER_MATCH_RATIO = 211, FILTER_MEASUREMENT_SOURCE = 212, FILTER_MEDIA_PLAN_NAME = 213, FILTER_PARENTAL_STATUS = 214, FILTER_PLACEMENT_ALL_YOUTUBE_CHANNELS = 215, FILTER_PLATFORM = 216, FILTER_PLAYBACK_METHOD = 217, FILTER_POSITION_IN_CONTENT = 218, FILTER_PUBLISHER_PROPERTY = 219, FILTER_PUBLISHER_PROPERTY_ID = 220, FILTER_PUBLISHER_PROPERTY_SECTION = 221, FILTER_PUBLISHER_PROPERTY_SECTION_ID = 222, FILTER_REFUND_REASON = 223, FILTER_REMARKETING_LIST = 224, FILTER_REWARDED = 225, FILTER_SENSITIVE_CATEGORY = 226, FILTER_SERVED_PIXEL_DENSITY = 227, FILTER_TARGETED_DATA_PROVIDERS = 228, FILTER_THIRD_PARTY_AUDIENCE_LIST_COST = 229, FILTER_THIRD_PARTY_AUDIENCE_LIST_TYPE = 230, FILTER_TRUEVIEW_AD = 231, FILTER_TRUEVIEW_AD_GROUP = 232, FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS = 233, FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS_ID = 234, FILTER_TRUEVIEW_HOUSEHOLD_INCOME = 235, FILTER_TRUEVIEW_IAR_COUNTRY_NAME = 236, FILTER_TRUEVIEW_REMARKETING_LIST_NAME = 237, FILTER_VARIANT_ID = 238, FILTER_VARIANT_NAME = 239, FILTER_VARIANT_VERSION = 240, FILTER_VERIFICATION_VIDEO_PLAYER_SIZE = 241, FILTER_VERIFICATION_VIDEO_POSITION = 242, FILTER_VIDEO_COMPANION_CREATIVE_SIZE = 243, FILTER_VIDEO_CONTINUOUS_PLAY = 244, FILTER_VIDEO_DURATION = 245, FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST = 246, FILTER_YOUTUBE_AD_VIDEO = 247, FILTER_YOUTUBE_AD_VIDEO_ID = 248, FILTER_YOUTUBE_CHANNEL = 249, FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_ADVERTISER = 250, FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_PARTNER = 251, FILTER_YOUTUBE_VIDEO = 252, FILTER_ZIP_POSTAL_CODE = 253, FILTER_PLACEMENT_NAME_ALL_YOUTUBE_CHANNELS = 254, FILTER_TRUEVIEW_PLACEMENT_ID = 255, FILTER_PATH_PATTERN_ID = 256, FILTER_PATH_EVENT_INDEX = 257, FILTER_EVENT_TYPE = 258, FILTER_CHANNEL_GROUPING = 259, FILTER_OM_SDK_AVAILABLE = 260, FILTER_DATA_SOURCE = 261, FILTER_CM360_PLACEMENT_ID = 262, FILTER_TRUEVIEW_CLICK_TYPE_NAME = 263, FILTER_TRUEVIEW_AD_TYPE_NAME = 264, FILTER_VIDEO_CONTENT_DURATION = 265, FILTER_MATCHED_GENRE_TARGET = 266, FILTER_VIDEO_CONTENT_LIVE_STREAM = 267, FILTER_BUDGET_SEGMENT_TYPE = 268, FILTER_BUDGET_SEGMENT_BUDGET = 269, FILTER_BUDGET_SEGMENT_START_DATE = 270, FILTER_BUDGET_SEGMENT_END_DATE = 271, FILTER_BUDGET_SEGMENT_PACING_PERCENTAGE = 272, FILTER_LINE_ITEM_BUDGET = 273, FILTER_LINE_ITEM_START_DATE = 274, FILTER_LINE_ITEM_END_DATE = 275, FILTER_INSERTION_ORDER_GOAL_TYPE = 276, FILTER_LINE_ITEM_PACING_PERCENTAGE = 277, FILTER_INSERTION_ORDER_GOAL_VALUE = 278, FILTER_OMID_CAPABLE = 279, FILTER_VENDOR_MEASUREMENT_MODE = 280, FILTER_IMPRESSION_LOSS_REJECTION_REASON = 281, FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_START = 282, FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_FIRST_QUARTILE = 283, FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_MID_POINT = 284, FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_THIRD_QUARTILE = 285, FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_COMPLETE = 286, FILTER_VERIFICATION_VIDEO_RESIZED = 287, FILTER_VERIFICATION_AUDIBILITY_START = 288, FILTER_VERIFICATION_AUDIBILITY_COMPLETE = 289, FILTER_MEDIA_TYPE = 290, FILTER_AUDIO_FEED_TYPE_NAME = 291, FILTER_TRUEVIEW_TARGETING_EXPANSION = 292, FILTER_PUBLISHER_TRAFFIC_SOURCE = 293 }

	export enum PathQueryOptionsFilterMatch { UNKNOWN = 0, EXACT = 1, PARTIAL = 2, BEGINS_WITH = 3, WILDCARD_EXPRESSION = 4 }


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

	export enum QueryMetadataDataRange { CUSTOM_DATES = 0, CURRENT_DAY = 1, PREVIOUS_DAY = 2, WEEK_TO_DATE = 3, MONTH_TO_DATE = 4, QUARTER_TO_DATE = 5, YEAR_TO_DATE = 6, PREVIOUS_WEEK = 7, PREVIOUS_HALF_MONTH = 8, PREVIOUS_MONTH = 9, PREVIOUS_QUARTER = 10, PREVIOUS_YEAR = 11, LAST_7_DAYS = 12, LAST_30_DAYS = 13, LAST_90_DAYS = 14, LAST_365_DAYS = 15, ALL_TIME = 16, LAST_14_DAYS = 17, TYPE_NOT_SUPPORTED = 18, LAST_60_DAYS = 19 }

	export enum QueryMetadataFormat { CSV = 0, EXCEL_CSV = 1, XLSX = 2 }


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

	export enum PathFilterPathMatchPosition { ANY = 0, FIRST = 1, LAST = 2 }

	export enum ParametersType { TYPE_GENERAL = 0, TYPE_AUDIENCE_PERFORMANCE = 1, TYPE_INVENTORY_AVAILABILITY = 2, TYPE_KEYWORD = 3, TYPE_PIXEL_LOAD = 4, TYPE_AUDIENCE_COMPOSITION = 5, TYPE_CROSS_PARTNER = 6, TYPE_PAGE_CATEGORY = 7, TYPE_THIRD_PARTY_DATA_PROVIDER = 8, TYPE_CROSS_PARTNER_THIRD_PARTY_DATA_PROVIDER = 9, TYPE_CLIENT_SAFE = 10, TYPE_ORDER_ID = 11, TYPE_FEE = 12, TYPE_CROSS_FEE = 13, TYPE_ACTIVE_GRP = 14, TYPE_YOUTUBE_VERTICAL = 15, TYPE_COMSCORE_VCE = 16, TYPE_TRUEVIEW = 17, TYPE_NIELSEN_AUDIENCE_PROFILE = 18, TYPE_NIELSEN_DAILY_REACH_BUILD = 19, TYPE_NIELSEN_SITE = 20, TYPE_REACH_AND_FREQUENCY = 21, TYPE_ESTIMATED_CONVERSION = 22, TYPE_VERIFICATION = 23, TYPE_TRUEVIEW_IAR = 24, TYPE_NIELSEN_ONLINE_GLOBAL_MARKET = 25, TYPE_PETRA_NIELSEN_AUDIENCE_PROFILE = 26, TYPE_PETRA_NIELSEN_DAILY_REACH_BUILD = 27, TYPE_PETRA_NIELSEN_ONLINE_GLOBAL_MARKET = 28, TYPE_NOT_SUPPORTED = 29, TYPE_REACH_AUDIENCE = 30, TYPE_LINEAR_TV_SEARCH_LIFT = 31, TYPE_PATH = 32, TYPE_PATH_ATTRIBUTION = 33 }


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

	export enum QueryScheduleFrequency { ONE_TIME = 0, DAILY = 1, WEEKLY = 2, SEMI_MONTHLY = 3, MONTHLY = 4, QUARTERLY = 5, YEARLY = 6 }


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

	export enum ReportFailureErrorCode { AUTHENTICATION_ERROR = 0, UNAUTHORIZED_API_ACCESS = 1, SERVER_ERROR = 2, VALIDATION_ERROR = 3, REPORTING_FATAL_ERROR = 4, REPORTING_TRANSIENT_ERROR = 5, REPORTING_IMCOMPATIBLE_METRICS = 6, REPORTING_ILLEGAL_FILENAME = 7, REPORTING_QUERY_NOT_FOUND = 8, REPORTING_BUCKET_NOT_FOUND = 9, REPORTING_CREATE_BUCKET_FAILED = 10, REPORTING_DELETE_BUCKET_FAILED = 11, REPORTING_UPDATE_BUCKET_PERMISSION_FAILED = 12, REPORTING_WRITE_BUCKET_OBJECT_FAILED = 13, DEPRECATED_REPORTING_INVALID_QUERY = 14, REPORTING_INVALID_QUERY_TOO_MANY_UNFILTERED_LARGE_GROUP_BYS = 15, REPORTING_INVALID_QUERY_TITLE_MISSING = 16, REPORTING_INVALID_QUERY_MISSING_PARTNER_AND_ADVERTISER_FILTERS = 17 }

	export enum ReportStatusState { RUNNING = 0, DONE = 1, FAILED = 2 }


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

