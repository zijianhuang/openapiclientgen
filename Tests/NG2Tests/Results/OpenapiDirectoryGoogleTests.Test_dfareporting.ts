import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Contains properties of a Campaign Manager account. */
	export interface Account {

		/** Account permissions assigned to this account. */
		accountPermissionIds?: Array<string>;

		/** Profile for this account. This is a read-only field that can be left blank. */
		accountProfile?: AccountAccountProfile;

		/** Whether this account is active. */
		active?: boolean;

		/** Maximum number of active ads allowed for this account. */
		activeAdsLimitTier?: AccountActiveAdsLimitTier;

		/** Whether to serve creatives with Active View tags. If disabled, viewability data will not be available for any impressions. */
		activeViewOptOut?: boolean;

		/** User role permissions available to the user roles of this account. */
		availablePermissionIds?: Array<string>;

		/** ID of the country associated with this account. */
		countryId?: string;

		/**
		 * ID of currency associated with this account. This is a required field.
		 * Acceptable values are:
		 * - "1" for USD
		 * - "2" for GBP
		 * - "3" for ESP
		 * - "4" for SEK
		 * - "5" for CAD
		 * - "6" for JPY
		 * - "7" for DEM
		 * - "8" for AUD
		 * - "9" for FRF
		 * - "10" for ITL
		 * - "11" for DKK
		 * - "12" for NOK
		 * - "13" for FIM
		 * - "14" for ZAR
		 * - "15" for IEP
		 * - "16" for NLG
		 * - "17" for EUR
		 * - "18" for KRW
		 * - "19" for TWD
		 * - "20" for SGD
		 * - "21" for CNY
		 * - "22" for HKD
		 * - "23" for NZD
		 * - "24" for MYR
		 * - "25" for BRL
		 * - "26" for PTE
		 * - "27" for MXP
		 * - "28" for CLP
		 * - "29" for TRY
		 * - "30" for ARS
		 * - "31" for PEN
		 * - "32" for ILS
		 * - "33" for CHF
		 * - "34" for VEF
		 * - "35" for COP
		 * - "36" for GTQ
		 * - "37" for PLN
		 * - "39" for INR
		 * - "40" for THB
		 * - "41" for IDR
		 * - "42" for CZK
		 * - "43" for RON
		 * - "44" for HUF
		 * - "45" for RUB
		 * - "46" for AED
		 * - "47" for BGN
		 * - "48" for HRK
		 * - "49" for MXN
		 * - "50" for NGN
		 * - "51" for EGP
		 */
		currencyId?: string;

		/** Default placement dimensions for this account. */
		defaultCreativeSizeId?: string;

		/** Description of this account. */
		description?: string;

		/** ID of this account. This is a read-only, auto-generated field. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#account". */
		kind?: string;

		/**
		 * Locale of this account.
		 * Acceptable values are:
		 * - "cs" (Czech)
		 * - "de" (German)
		 * - "en" (English)
		 * - "en-GB" (English United Kingdom)
		 * - "es" (Spanish)
		 * - "fr" (French)
		 * - "it" (Italian)
		 * - "ja" (Japanese)
		 * - "ko" (Korean)
		 * - "pl" (Polish)
		 * - "pt-BR" (Portuguese Brazil)
		 * - "ru" (Russian)
		 * - "sv" (Swedish)
		 * - "tr" (Turkish)
		 * - "zh-CN" (Chinese Simplified)
		 * - "zh-TW" (Chinese Traditional)
		 */
		locale?: string;

		/** Maximum image size allowed for this account, in kilobytes. Value must be greater than or equal to 1. */
		maximumImageSize?: string;

		/** Name of this account. This is a required field, and must be less than 128 characters long and be globally unique. */
		name?: string;

		/** Whether campaigns created in this account will be enabled for Nielsen OCR reach ratings by default. */
		nielsenOcrEnabled?: boolean;

		/** Reporting Configuration */
		reportsConfiguration?: ReportsConfiguration;

		/** Share Path to Conversion reports with Twitter. */
		shareReportsWithTwitter?: boolean;

		/** File size limit in kilobytes of Rich Media teaser creatives. Acceptable values are 1 to 10240, inclusive. */
		teaserSizeLimit?: string;
	}

	export enum AccountAccountProfile { ACCOUNT_PROFILE_BASIC = 0, ACCOUNT_PROFILE_STANDARD = 1 }

	export enum AccountActiveAdsLimitTier { ACTIVE_ADS_TIER_100K = 0, ACTIVE_ADS_TIER_1M = 1, ACTIVE_ADS_TIER_200K = 2, ACTIVE_ADS_TIER_300K = 3, ACTIVE_ADS_TIER_40K = 4, ACTIVE_ADS_TIER_500K = 5, ACTIVE_ADS_TIER_750K = 6, ACTIVE_ADS_TIER_75K = 7 }


	/** Reporting Configuration */
	export interface ReportsConfiguration {

		/** Whether the exposure to conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting. */
		exposureToConversionEnabled?: boolean;

		/** Lookback configuration settings. */
		lookbackConfiguration?: LookbackConfiguration;

		/**
		 * Report generation time zone ID of this account. This is a required field that can only be changed by a superuser.
		 * Acceptable values are:
		 * - "1" for "America/New_York"
		 * - "2" for "Europe/London"
		 * - "3" for "Europe/Paris"
		 * - "4" for "Africa/Johannesburg"
		 * - "5" for "Asia/Jerusalem"
		 * - "6" for "Asia/Shanghai"
		 * - "7" for "Asia/Hong_Kong"
		 * - "8" for "Asia/Tokyo"
		 * - "9" for "Australia/Sydney"
		 * - "10" for "Asia/Dubai"
		 * - "11" for "America/Los_Angeles"
		 * - "12" for "Pacific/Auckland"
		 * - "13" for "America/Sao_Paulo"
		 * - "16" for "America/Asuncion"
		 * - "17" for "America/Chicago"
		 * - "18" for "America/Denver"
		 * - "19" for "America/St_Johns"
		 * - "20" for "Asia/Dhaka"
		 * - "21" for "Asia/Jakarta"
		 * - "22" for "Asia/Kabul"
		 * - "23" for "Asia/Karachi"
		 * - "24" for "Asia/Calcutta"
		 * - "25" for "Asia/Pyongyang"
		 * - "26" for "Asia/Rangoon"
		 * - "27" for "Atlantic/Cape_Verde"
		 * - "28" for "Atlantic/South_Georgia"
		 * - "29" for "Australia/Adelaide"
		 * - "30" for "Australia/Lord_Howe"
		 * - "31" for "Europe/Moscow"
		 * - "32" for "Pacific/Kiritimati"
		 * - "35" for "Pacific/Norfolk"
		 * - "36" for "Pacific/Tongatapu"
		 */
		reportGenerationTimeZoneId?: string;
	}


	/** Lookback configuration settings. */
	export interface LookbackConfiguration {

		/** Lookback window, in days, from the last time a given user clicked on one of your ads. If you enter 0, clicks will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive. */
		clickDuration?: number;

		/** Lookback window, in days, from the last time a given user viewed one of your ads. If you enter 0, impressions will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive. */
		postImpressionActivitiesDuration?: number;
	}


	/** Gets a summary of active ads in an account. */
	export interface AccountActiveAdSummary {

		/** ID of the account. */
		accountId?: string;

		/** Ads that have been activated for the account */
		activeAds?: string;

		/** Maximum number of active ads allowed for the account. */
		activeAdsLimitTier?: AccountActiveAdsLimitTier;

		/** Ads that can be activated for the account. */
		availableAds?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountActiveAdSummary". */
		kind?: string;
	}


	/** AccountPermissions contains information about a particular account permission. Some features of Campaign Manager require an account permission to be present in the account. */
	export interface AccountPermission {

		/**
		 * Account profiles associated with this account permission.
		 * Possible values are:
		 * - "ACCOUNT_PROFILE_BASIC"
		 * - "ACCOUNT_PROFILE_STANDARD"
		 */
		accountProfiles?: Array<AccountAccountProfile>;

		/** ID of this account permission. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermission". */
		kind?: string;

		/** Administrative level required to enable this account permission. */
		level?: AccountPermissionLevel;

		/** Name of this account permission. */
		name?: string;

		/** Permission group of this account permission. */
		permissionGroupId?: string;
	}

	export enum AccountPermissionLevel { ADMINISTRATOR = 0, USER = 1 }


	/** AccountPermissionGroups contains a mapping of permission group IDs to names. A permission group is a grouping of account permissions. */
	export interface AccountPermissionGroup {

		/** ID of this account permission group. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroup". */
		kind?: string;

		/** Name of this account permission group. */
		name?: string;
	}


	/** Account Permission Group List Response */
	export interface AccountPermissionGroupsListResponse {

		/** Account permission group collection. */
		accountPermissionGroups?: Array<AccountPermissionGroup>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroupsListResponse". */
		kind?: string;
	}


	/** Account Permission List Response */
	export interface AccountPermissionsListResponse {

		/** Account permission collection. */
		accountPermissions?: Array<AccountPermission>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionsListResponse". */
		kind?: string;
	}


	/** AccountUserProfiles contains properties of a Campaign Manager user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API. */
	export interface AccountUserProfile {

		/** Account ID of the user profile. This is a read-only field that can be left blank. */
		accountId?: string;

		/** Whether this user profile is active. This defaults to false, and must be set true on insert for the user profile to be usable. */
		active?: boolean;

		/** Object Filter. */
		advertiserFilter?: ObjectFilter;

		/** Object Filter. */
		campaignFilter?: ObjectFilter;

		/** Comments for this user profile. */
		comments?: string;

		/** Email of the user profile. The email addresss must be linked to a Google Account. This field is required on insertion and is read-only after insertion. */
		email?: string;

		/** ID of the user profile. This is a read-only, auto-generated field. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfile". */
		kind?: string;

		/**
		 * Locale of the user profile. This is a required field.
		 * Acceptable values are:
		 * - "cs" (Czech)
		 * - "de" (German)
		 * - "en" (English)
		 * - "en-GB" (English United Kingdom)
		 * - "es" (Spanish)
		 * - "fr" (French)
		 * - "it" (Italian)
		 * - "ja" (Japanese)
		 * - "ko" (Korean)
		 * - "pl" (Polish)
		 * - "pt-BR" (Portuguese Brazil)
		 * - "ru" (Russian)
		 * - "sv" (Swedish)
		 * - "tr" (Turkish)
		 * - "zh-CN" (Chinese Simplified)
		 * - "zh-TW" (Chinese Traditional)
		 */
		locale?: string;

		/** Name of the user profile. This is a required field. Must be less than 64 characters long, must be globally unique, and cannot contain whitespace or any of the following characters: "&;"#%,". */
		name?: string;

		/** Object Filter. */
		siteFilter?: ObjectFilter;

		/** Subaccount ID of the user profile. This is a read-only field that can be left blank. */
		subaccountId?: string;

		/** Trafficker type of this user profile. This is a read-only field. */
		traffickerType?: AccountUserProfileTraffickerType;

		/** User type of the user profile. This is a read-only field that can be left blank. */
		userAccessType?: AccountUserProfileUserAccessType;

		/** Object Filter. */
		userRoleFilter?: ObjectFilter;

		/** User role ID of the user profile. This is a required field. */
		userRoleId?: string;
	}


	/** Object Filter. */
	export interface ObjectFilter {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#objectFilter". */
		kind?: string;

		/** Applicable when status is ASSIGNED. The user has access to objects with these object IDs. */
		objectIds?: Array<string>;

		/** Status of the filter. NONE means the user has access to none of the objects. ALL means the user has access to all objects. ASSIGNED means the user has access to the objects with IDs in the objectIds list. */
		status?: ObjectFilterStatus;
	}

	export enum ObjectFilterStatus { ALL = 0, ASSIGNED = 1, NONE = 2 }

	export enum AccountUserProfileTraffickerType { EXTERNAL_TRAFFICKER = 0, INTERNAL_NON_TRAFFICKER = 1, INTERNAL_TRAFFICKER = 2 }

	export enum AccountUserProfileUserAccessType { INTERNAL_ADMINISTRATOR = 0, NORMAL_USER = 1, READ_ONLY_SUPER_USER = 2, SUPER_USER = 3 }


	/** Account User Profile List Response */
	export interface AccountUserProfilesListResponse {

		/** Account user profile collection. */
		accountUserProfiles?: Array<AccountUserProfile>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfilesListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Account List Response */
	export interface AccountsListResponse {

		/** Account collection. */
		accounts?: Array<Account>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Represents an activity group. */
	export interface Activities {

		/** List of activity filters. The dimension values need to be all either of type "dfa:activity" or "dfa:activityGroup". */
		filters?: Array<DimensionValue>;

		/** The kind of resource this is, in this case dfareporting#activities. */
		kind?: string;

		/** List of names of floodlight activity metrics. */
		metricNames?: Array<string>;
	}


	/** Represents a DimensionValue resource. */
	export interface DimensionValue {

		/** The name of the dimension. */
		dimensionName?: string;

		/** The eTag of this response for caching purposes. */
		etag?: string;

		/** The ID associated with the value if available. */
		id?: string;

		/** The kind of resource this is, in this case dfareporting#dimensionValue. */
		kind?: string;

		/** Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT. */
		matchType?: DimensionValueMatchType;

		/** The value of the dimension. */
		value?: string;
	}

	export enum DimensionValueMatchType { BEGINS_WITH = 0, CONTAINS = 1, EXACT = 2, WILDCARD_EXPRESSION = 3 }


	/** Contains properties of a Campaign Manager ad. */
	export interface Ad {

		/** Account ID of this ad. This is a read-only field that can be left blank. */
		accountId?: string;

		/** Whether this ad is active. When true, archived must be false. */
		active?: boolean;

		/** Advertiser ID of this ad. This is a required field on insertion. */
		advertiserId?: string;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Whether this ad is archived. When true, active must be false. */
		archived?: boolean;

		/** Audience segment ID that is being targeted for this ad. Applicable when type is AD_SERVING_STANDARD_AD. */
		audienceSegmentId?: string;

		/** Campaign ID of this ad. This is a required field on insertion. */
		campaignId?: string;

		/** Represents a DimensionValue resource. */
		campaignIdDimensionValue?: DimensionValue;

		/** Click-through URL */
		clickThroughUrl?: ClickThroughUrl;

		/** Click Through URL Suffix settings. */
		clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties;

		/** Comments for this ad. */
		comments?: string;

		/** Compatibility of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to either rendering on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are only used for existing default ads. New mobile placements must be assigned DISPLAY or DISPLAY_INTERSTITIAL and default ads created for those placements will be limited to those compatibility types. IN_STREAM_VIDEO refers to rendering in-stream video ads developed with the VAST standard. */
		compatibility?: AdCompatibility;

		/** Modification timestamp. */
		createInfo?: LastModifiedInfo;

		/** Creative group assignments for this ad. Applicable when type is AD_SERVING_CLICK_TRACKER. Only one assignment per creative group number is allowed for a maximum of two assignments. */
		creativeGroupAssignments?: Array<CreativeGroupAssignment>;

		/** Creative Rotation. */
		creativeRotation?: CreativeRotation;

		/** Day Part Targeting. */
		dayPartTargeting?: DayPartTargeting;

		/** Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further. */
		defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties;

		/** Delivery Schedule. */
		deliverySchedule?: DeliverySchedule;

		/** Whether this ad is a dynamic click tracker. Applicable when type is AD_SERVING_CLICK_TRACKER. This is a required field on insert, and is read-only after insert. */
		dynamicClickTracker?: boolean;

		/** Date and time that this ad should stop serving. Must be later than the start time. This is a required field on insertion. */
		endTime?: Date;

		/** Event tag overrides for this ad. */
		eventTagOverrides?: Array<EventTagOverride>;

		/** Geographical Targeting. */
		geoTargeting?: GeoTargeting;

		/** ID of this ad. This is a read-only, auto-generated field. */
		id?: string;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Key Value Targeting Expression. */
		keyValueTargetingExpression?: KeyValueTargetingExpression;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#ad". */
		kind?: string;

		/** Language Targeting. */
		languageTargeting?: LanguageTargeting;

		/** Modification timestamp. */
		lastModifiedInfo?: LastModifiedInfo;

		/** Name of this ad. This is a required field and must be less than 256 characters long. */
		name?: string;

		/** Placement assignments for this ad. */
		placementAssignments?: Array<PlacementAssignment>;

		/** Remarketing List Targeting Expression. */
		remarketingListExpression?: ListTargetingExpression;

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		size?: Size;

		/** Whether this ad is ssl compliant. This is a read-only field that is auto-generated when the ad is inserted or updated. */
		sslCompliant?: boolean;

		/** Whether this ad requires ssl. This is a read-only field that is auto-generated when the ad is inserted or updated. */
		sslRequired?: boolean;

		/** Date and time that this ad should start serving. If creating an ad, this field must be a time in the future. This is a required field on insertion. */
		startTime?: Date;

		/** Subaccount ID of this ad. This is a read-only field that can be left blank. */
		subaccountId?: string;

		/** Targeting template ID, used to apply preconfigured targeting information to this ad. This cannot be set while any of dayPartTargeting, geoTargeting, keyValueTargetingExpression, languageTargeting, remarketingListExpression, or technologyTargeting are set. Applicable when type is AD_SERVING_STANDARD_AD. */
		targetingTemplateId?: string;

		/** Technology Targeting. */
		technologyTargeting?: TechnologyTargeting;

		/** Type of ad. This is a required field on insertion. Note that default ads (AD_SERVING_DEFAULT_AD) cannot be created directly (see Creative resource). */
		type?: AdType;
	}


	/** Click-through URL */
	export interface ClickThroughUrl {

		/**
		 * Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows:
		 * - If defaultLandingPage is enabled then the campaign's default landing page URL is assigned to this field.
		 * - If defaultLandingPage is not enabled and a landingPageId is specified then that landing page's URL is assigned to this field.
		 * - If neither of the above cases apply, then the customClickThroughUrl is assigned to this field.
		 */
		computedClickThroughUrl?: string;

		/** Custom click-through URL. Applicable if the defaultLandingPage field is set to false and the landingPageId field is left unset. */
		customClickThroughUrl?: string;

		/** Whether the campaign default landing page is used. */
		defaultLandingPage?: boolean;

		/** ID of the landing page for the click-through URL. Applicable if the defaultLandingPage field is set to false. */
		landingPageId?: string;
	}


	/** Click Through URL Suffix settings. */
	export interface ClickThroughUrlSuffixProperties {

		/** Click-through URL suffix to apply to all ads in this entity's scope. Must be less than 128 characters long. */
		clickThroughUrlSuffix?: string;

		/** Whether this entity should override the inherited click-through URL suffix with its own defined value. */
		overrideInheritedSuffix?: boolean;
	}

	export enum AdCompatibility { APP = 0, APP_INTERSTITIAL = 1, DISPLAY = 2, DISPLAY_INTERSTITIAL = 3, IN_STREAM_AUDIO = 4, IN_STREAM_VIDEO = 5 }


	/** Modification timestamp. */
	export interface LastModifiedInfo {

		/** Timestamp of the last change in milliseconds since epoch. */
		time?: string;
	}


	/** Creative Group Assignment. */
	export interface CreativeGroupAssignment {

		/** ID of the creative group to be assigned. */
		creativeGroupId?: string;

		/** Creative group number of the creative group assignment. */
		creativeGroupNumber?: CreativeGroupAssignmentCreativeGroupNumber;
	}

	export enum CreativeGroupAssignmentCreativeGroupNumber { CREATIVE_GROUP_ONE = 0, CREATIVE_GROUP_TWO = 1 }


	/** Creative Rotation. */
	export interface CreativeRotation {

		/** Creative assignments in this creative rotation. */
		creativeAssignments?: Array<CreativeAssignment>;

		/** Creative optimization configuration that is used by this ad. It should refer to one of the existing optimization configurations in the ad's campaign. If it is unset or set to 0, then the campaign's default optimization configuration will be used for this ad. */
		creativeOptimizationConfigurationId?: string;

		/** Type of creative rotation. Can be used to specify whether to use sequential or random rotation. */
		type?: CreativeRotationType;

		/** Strategy for calculating weights. Used with CREATIVE_ROTATION_TYPE_RANDOM. */
		weightCalculationStrategy?: CreativeRotationWeightCalculationStrategy;
	}


	/** Creative Assignment. */
	export interface CreativeAssignment {

		/** Whether this creative assignment is active. When true, the creative will be included in the ad's rotation. */
		active?: boolean;

		/** Whether applicable event tags should fire when this creative assignment is rendered. If this value is unset when the ad is inserted or updated, it will default to true for all creative types EXCEPT for INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO. */
		applyEventTags?: boolean;

		/** Click-through URL */
		clickThroughUrl?: ClickThroughUrl;

		/** Companion creative overrides for this creative assignment. Applicable to video ads. */
		companionCreativeOverrides?: Array<CompanionClickThroughOverride>;

		/** Creative group assignments for this creative assignment. Only one assignment per creative group number is allowed for a maximum of two assignments. */
		creativeGroupAssignments?: Array<CreativeGroupAssignment>;

		/** ID of the creative to be assigned. This is a required field. */
		creativeId?: string;

		/** Represents a DimensionValue resource. */
		creativeIdDimensionValue?: DimensionValue;

		/** Date and time that the assigned creative should stop serving. Must be later than the start time. */
		endTime?: Date;

		/**
		 * Rich media exit overrides for this creative assignment.
		 * Applicable when the creative type is any of the following:
		 * - DISPLAY
		 * - RICH_MEDIA_INPAGE
		 * - RICH_MEDIA_INPAGE_FLOATING
		 * - RICH_MEDIA_IM_EXPAND
		 * - RICH_MEDIA_EXPANDING
		 * - RICH_MEDIA_INTERSTITIAL_FLOAT
		 * - RICH_MEDIA_MOBILE_IN_APP
		 * - RICH_MEDIA_MULTI_FLOATING
		 * - RICH_MEDIA_PEEL_DOWN
		 * - VPAID_LINEAR
		 * - VPAID_NON_LINEAR
		 */
		richMediaExitOverrides?: Array<RichMediaExitOverride>;

		/** Sequence number of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_SEQUENTIAL. Acceptable values are 1 to 65535, inclusive. */
		sequence?: number;

		/** Whether the creative to be assigned is SSL-compliant. This is a read-only field that is auto-generated when the ad is inserted or updated. */
		sslCompliant?: boolean;

		/** Date and time that the assigned creative should start serving. */
		startTime?: Date;

		/** Weight of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_RANDOM. Value must be greater than or equal to 1. */
		weight?: number;
	}


	/** Companion Click-through override. */
	export interface CompanionClickThroughOverride {

		/** Click-through URL */
		clickThroughUrl?: ClickThroughUrl;

		/** ID of the creative for this companion click-through override. */
		creativeId?: string;
	}


	/** Rich Media Exit Override. */
	export interface RichMediaExitOverride {

		/** Click-through URL */
		clickThroughUrl?: ClickThroughUrl;

		/** Whether to use the clickThroughUrl. If false, the creative-level exit will be used. */
		enabled?: boolean;

		/** ID for the override to refer to a specific exit in the creative. */
		exitId?: string;
	}

	export enum CreativeRotationType { CREATIVE_ROTATION_TYPE_RANDOM = 0, CREATIVE_ROTATION_TYPE_SEQUENTIAL = 1 }

	export enum CreativeRotationWeightCalculationStrategy { WEIGHT_STRATEGY_CUSTOM = 0, WEIGHT_STRATEGY_EQUAL = 1, WEIGHT_STRATEGY_HIGHEST_CTR = 2, WEIGHT_STRATEGY_OPTIMIZED = 3 }


	/** Day Part Targeting. */
	export interface DayPartTargeting {

		/**
		 * Days of the week when the ad will serve.
		 * Acceptable values are:
		 * - "SUNDAY"
		 * - "MONDAY"
		 * - "TUESDAY"
		 * - "WEDNESDAY"
		 * - "THURSDAY"
		 * - "FRIDAY"
		 * - "SATURDAY"
		 */
		daysOfWeek?: Array<string>;

		/** Hours of the day when the ad will serve, where 0 is midnight to 1 AM and 23 is 11 PM to midnight. Can be specified with days of week, in which case the ad would serve during these hours on the specified days. For example if Monday, Wednesday, Friday are the days of week specified and 9-10am, 3-5pm (hours 9, 15, and 16) is specified, the ad would serve Monday, Wednesdays, and Fridays at 9-10am and 3-5pm. Acceptable values are 0 to 23, inclusive. */
		hoursOfDay?: Array<number>;

		/** Whether or not to use the user's local time. If false, the America/New York time zone applies. */
		userLocalTime?: boolean;
	}


	/** Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further. */
	export interface DefaultClickThroughEventTagProperties {

		/** ID of the click-through event tag to apply to all ads in this entity's scope. */
		defaultClickThroughEventTagId?: string;

		/** Whether this entity should override the inherited default click-through event tag with its own defined value. */
		overrideInheritedEventTag?: boolean;
	}


	/** Delivery Schedule. */
	export interface DeliverySchedule {

		/** Frequency Cap. */
		frequencyCap?: FrequencyCap;

		/** Whether or not hard cutoff is enabled. If true, the ad will not serve after the end date and time. Otherwise the ad will continue to be served until it has reached its delivery goals. */
		hardCutoff?: boolean;

		/** Impression ratio for this ad. This ratio determines how often each ad is served relative to the others. For example, if ad A has an impression ratio of 1 and ad B has an impression ratio of 3, then Campaign Manager will serve ad B three times as often as ad A. Acceptable values are 1 to 10, inclusive. */
		impressionRatio?: string;

		/** Serving priority of an ad, with respect to other ads. The lower the priority number, the greater the priority with which it is served. */
		priority?: DeliverySchedulePriority;
	}


	/** Frequency Cap. */
	export interface FrequencyCap {

		/** Duration of time, in seconds, for this frequency cap. The maximum duration is 90 days. Acceptable values are 1 to 7776000, inclusive. */
		duration?: string;

		/** Number of times an individual user can be served the ad within the specified duration. Acceptable values are 1 to 15, inclusive. */
		impressions?: string;
	}

	export enum DeliverySchedulePriority { AD_PRIORITY_01 = 0, AD_PRIORITY_02 = 1, AD_PRIORITY_03 = 2, AD_PRIORITY_04 = 3, AD_PRIORITY_05 = 4, AD_PRIORITY_06 = 5, AD_PRIORITY_07 = 6, AD_PRIORITY_08 = 7, AD_PRIORITY_09 = 8, AD_PRIORITY_10 = 9, AD_PRIORITY_11 = 10, AD_PRIORITY_12 = 11, AD_PRIORITY_13 = 12, AD_PRIORITY_14 = 13, AD_PRIORITY_15 = 14, AD_PRIORITY_16 = 15 }


	/** Event tag override information. */
	export interface EventTagOverride {

		/** Whether this override is enabled. */
		enabled?: boolean;

		/** ID of this event tag override. This is a read-only, auto-generated field. */
		id?: string;
	}


	/** Geographical Targeting. */
	export interface GeoTargeting {

		/** Cities to be targeted. For each city only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a city, do not target or exclude the country of the city, and do not target the metro or region of the city. */
		cities?: Array<City>;

		/** Countries to be targeted or excluded from targeting, depending on the setting of the excludeCountries field. For each country only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting or excluding a country, do not target regions, cities, metros, or postal codes in the same country. */
		countries?: Array<Country>;

		/** Whether or not to exclude the countries in the countries field from targeting. If false, the countries field refers to countries which will be targeted by the ad. */
		excludeCountries?: boolean;

		/** Metros to be targeted. For each metro only dmaId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a metro, do not target or exclude the country of the metro. */
		metros?: Array<Metro>;

		/** Postal codes to be targeted. For each postal code only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a postal code, do not target or exclude the country of the postal code. */
		postalCodes?: Array<PostalCode>;

		/** Regions to be targeted. For each region only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a region, do not target or exclude the country of the region. */
		regions?: Array<Region>;
	}


	/** Contains information about a city that can be targeted by ads. */
	export interface City {

		/** Country code of the country to which this city belongs. */
		countryCode?: string;

		/** DART ID of the country to which this city belongs. */
		countryDartId?: string;

		/** DART ID of this city. This is the ID used for targeting and generating reports. */
		dartId?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#city". */
		kind?: string;

		/** Metro region code of the metro region (DMA) to which this city belongs. */
		metroCode?: string;

		/** ID of the metro region (DMA) to which this city belongs. */
		metroDmaId?: string;

		/** Name of this city. */
		name?: string;

		/** Region code of the region to which this city belongs. */
		regionCode?: string;

		/** DART ID of the region to which this city belongs. */
		regionDartId?: string;
	}


	/** Contains information about a country that can be targeted by ads. */
	export interface Country {

		/** Country code. */
		countryCode?: string;

		/** DART ID of this country. This is the ID used for targeting and generating reports. */
		dartId?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#country". */
		kind?: string;

		/** Name of this country. */
		name?: string;

		/** Whether ad serving supports secure servers in this country. */
		sslEnabled?: boolean;
	}


	/** Contains information about a metro region that can be targeted by ads. */
	export interface Metro {

		/** Country code of the country to which this metro region belongs. */
		countryCode?: string;

		/** DART ID of the country to which this metro region belongs. */
		countryDartId?: string;

		/** DART ID of this metro region. */
		dartId?: string;

		/** DMA ID of this metro region. This is the ID used for targeting and generating reports, and is equivalent to metro_code. */
		dmaId?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#metro". */
		kind?: string;

		/** Metro code of this metro region. This is equivalent to dma_id. */
		metroCode?: string;

		/** Name of this metro region. */
		name?: string;
	}


	/** Contains information about a postal code that can be targeted by ads. */
	export interface PostalCode {

		/** Postal code. This is equivalent to the id field. */
		code?: string;

		/** Country code of the country to which this postal code belongs. */
		countryCode?: string;

		/** DART ID of the country to which this postal code belongs. */
		countryDartId?: string;

		/** ID of this postal code. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCode". */
		kind?: string;
	}


	/** Contains information about a region that can be targeted by ads. */
	export interface Region {

		/** Country code of the country to which this region belongs. */
		countryCode?: string;

		/** DART ID of the country to which this region belongs. */
		countryDartId?: string;

		/** DART ID of this region. */
		dartId?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#region". */
		kind?: string;

		/** Name of this region. */
		name?: string;

		/** Region code. */
		regionCode?: string;
	}


	/** Key Value Targeting Expression. */
	export interface KeyValueTargetingExpression {

		/** Keyword expression being targeted by the ad. */
		expression?: string;
	}


	/** Language Targeting. */
	export interface LanguageTargeting {

		/** Languages that this ad targets. For each language only languageId is required. The other fields are populated automatically when the ad is inserted or updated. */
		languages?: Array<Language>;
	}


	/** Contains information about a language that can be targeted by ads. */
	export interface Language {

		/** Language ID of this language. This is the ID used for targeting and generating reports. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#language". */
		kind?: string;

		/** Format of language code is an ISO 639 two-letter language code optionally followed by an underscore followed by an ISO 3166 code. Examples are "en" for English or "zh_CN" for Simplified Chinese. */
		languageCode?: string;

		/** Name of this language. */
		name?: string;
	}


	/** Placement Assignment. */
	export interface PlacementAssignment {

		/** Whether this placement assignment is active. When true, the placement will be included in the ad's rotation. */
		active?: boolean;

		/** ID of the placement to be assigned. This is a required field. */
		placementId?: string;

		/** Represents a DimensionValue resource. */
		placementIdDimensionValue?: DimensionValue;

		/** Whether the placement to be assigned requires SSL. This is a read-only field that is auto-generated when the ad is inserted or updated. */
		sslRequired?: boolean;
	}


	/** Remarketing List Targeting Expression. */
	export interface ListTargetingExpression {

		/** Expression describing which lists are being targeted by the ad. */
		expression?: string;
	}


	/** Represents the dimensions of ads, placements, creatives, or creative assets. */
	export interface Size {

		/** Height of this size. Acceptable values are 0 to 32767, inclusive. */
		height?: number;

		/** IAB standard size. This is a read-only, auto-generated field. */
		iab?: boolean;

		/** ID of this size. This is a read-only, auto-generated field. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#size". */
		kind?: string;

		/** Width of this size. Acceptable values are 0 to 32767, inclusive. */
		width?: number;
	}


	/** Technology Targeting. */
	export interface TechnologyTargeting {

		/** Browsers that this ad targets. For each browser either set browserVersionId or dartId along with the version numbers. If both are specified, only browserVersionId will be used. The other fields are populated automatically when the ad is inserted or updated. */
		browsers?: Array<Browser>;

		/** Connection types that this ad targets. For each connection type only id is required. The other fields are populated automatically when the ad is inserted or updated. */
		connectionTypes?: Array<ConnectionType>;

		/** Mobile carriers that this ad targets. For each mobile carrier only id is required, and the other fields are populated automatically when the ad is inserted or updated. If targeting a mobile carrier, do not set targeting for any zip codes. */
		mobileCarriers?: Array<MobileCarrier>;

		/** Operating system versions that this ad targets. To target all versions, use operatingSystems. For each operating system version, only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system version, do not set targeting for the corresponding operating system in operatingSystems. */
		operatingSystemVersions?: Array<OperatingSystemVersion>;

		/** Operating systems that this ad targets. To target specific versions, use operatingSystemVersions. For each operating system only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system, do not set targeting for operating system versions for the same operating system. */
		operatingSystems?: Array<OperatingSystem>;

		/** Platform types that this ad targets. For example, desktop, mobile, or tablet. For each platform type, only id is required, and the other fields are populated automatically when the ad is inserted or updated. */
		platformTypes?: Array<PlatformType>;
	}


	/** Contains information about a browser that can be targeted by ads. */
	export interface Browser {

		/** ID referring to this grouping of browser and version numbers. This is the ID used for targeting. */
		browserVersionId?: string;

		/** DART ID of this browser. This is the ID used when generating reports. */
		dartId?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#browser". */
		kind?: string;

		/** Major version number (leftmost number) of this browser. For example, for Chrome 5.0.376.86 beta, this field should be set to 5. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is. */
		majorVersion?: string;

		/** Minor version number (number after first dot on left) of this browser. For example, for Chrome 5.0.375.86 beta, this field should be set to 0. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is. */
		minorVersion?: string;

		/** Name of this browser. */
		name?: string;
	}


	/** Contains information about an internet connection type that can be targeted by ads. Clients can use the connection type to target mobile vs. broadband users. */
	export interface ConnectionType {

		/** ID of this connection type. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionType". */
		kind?: string;

		/** Name of this connection type. */
		name?: string;
	}


	/** Contains information about a mobile carrier that can be targeted by ads. */
	export interface MobileCarrier {

		/** Country code of the country to which this mobile carrier belongs. */
		countryCode?: string;

		/** DART ID of the country to which this mobile carrier belongs. */
		countryDartId?: string;

		/** ID of this mobile carrier. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarrier". */
		kind?: string;

		/** Name of this mobile carrier. */
		name?: string;
	}


	/** Contains information about a particular version of an operating system that can be targeted by ads. */
	export interface OperatingSystemVersion {

		/** ID of this operating system version. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersion". */
		kind?: string;

		/** Major version (leftmost number) of this operating system version. */
		majorVersion?: string;

		/** Minor version (number after the first dot) of this operating system version. */
		minorVersion?: string;

		/** Name of this operating system version. */
		name?: string;

		/** Contains information about an operating system that can be targeted by ads. */
		operatingSystem?: OperatingSystem;
	}


	/** Contains information about an operating system that can be targeted by ads. */
	export interface OperatingSystem {

		/** DART ID of this operating system. This is the ID used for targeting. */
		dartId?: string;

		/** Whether this operating system is for desktop. */
		desktop?: boolean;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystem". */
		kind?: string;

		/** Whether this operating system is for mobile. */
		mobile?: boolean;

		/** Name of this operating system. */
		name?: string;
	}


	/** Contains information about a platform type that can be targeted by ads. */
	export interface PlatformType {

		/** ID of this platform type. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformType". */
		kind?: string;

		/** Name of this platform type. */
		name?: string;
	}

	export enum AdType { AD_SERVING_CLICK_TRACKER = 0, AD_SERVING_DEFAULT_AD = 1, AD_SERVING_STANDARD_AD = 2, AD_SERVING_TRACKING = 3 }


	/** Campaign ad blocking settings. */
	export interface AdBlockingConfiguration {

		/** Click-through URL used by brand-neutral ads. This is a required field when overrideClickThroughUrl is set to true. */
		clickThroughUrl?: string;

		/** ID of a creative bundle to use for this campaign. If set, brand-neutral ads will select creatives from this bundle. Otherwise, a default transparent pixel will be used. */
		creativeBundleId?: string;

		/** Whether this campaign has enabled ad blocking. When true, ad blocking is enabled for placements in the campaign, but this may be overridden by site and placement settings. When false, ad blocking is disabled for all placements under the campaign, regardless of site and placement settings. */
		enabled?: boolean;

		/** Whether the brand-neutral ad's click-through URL comes from the campaign's creative bundle or the override URL. Must be set to true if ad blocking is enabled and no creative bundle is configured. */
		overrideClickThroughUrl?: boolean;
	}


	/** Ad Slot */
	export interface AdSlot {

		/** Comment for this ad slot. */
		comment?: string;

		/** Ad slot compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop, mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. */
		compatibility?: AdCompatibility;

		/** Height of this ad slot. */
		height?: string;

		/** ID of the placement from an external platform that is linked to this ad slot. */
		linkedPlacementId?: string;

		/** Name of this ad slot. */
		name?: string;

		/** Payment source type of this ad slot. */
		paymentSourceType?: AdSlotPaymentSourceType;

		/** Primary ad slot of a roadblock inventory item. */
		primary?: boolean;

		/** Width of this ad slot. */
		width?: string;
	}

	export enum AdSlotPaymentSourceType { PLANNING_PAYMENT_SOURCE_TYPE_AGENCY_PAID = 0, PLANNING_PAYMENT_SOURCE_TYPE_PUBLISHER_PAID = 1 }


	/** Ad List Response */
	export interface AdsListResponse {

		/** Ad collection. */
		ads?: Array<Ad>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#adsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Contains properties of a Campaign Manager advertiser. */
	export interface Advertiser {

		/** Account ID of this advertiser.This is a read-only field that can be left blank. */
		accountId?: string;

		/** ID of the advertiser group this advertiser belongs to. You can group advertisers for reporting purposes, allowing you to see aggregated information for all advertisers in each group. */
		advertiserGroupId?: string;

		/** Suffix added to click-through URL of ad creative associations under this advertiser. Must be less than 129 characters long. */
		clickThroughUrlSuffix?: string;

		/** ID of the click-through event tag to apply by default to the landing pages of this advertiser's campaigns. */
		defaultClickThroughEventTagId?: string;

		/** Default email address used in sender field for tag emails. */
		defaultEmail?: string;

		/**
		 * Floodlight configuration ID of this advertiser. The floodlight configuration ID will be created automatically, so on insert this field should be left blank. This field can be set to another advertiser's floodlight configuration ID in order to share that advertiser's floodlight configuration with this advertiser, so long as:
		 * - This advertiser's original floodlight configuration is not already associated with floodlight activities or floodlight activity groups.
		 * - This advertiser's original floodlight configuration is not already shared with another advertiser.
		 */
		floodlightConfigurationId?: string;

		/** Represents a DimensionValue resource. */
		floodlightConfigurationIdDimensionValue?: DimensionValue;

		/** ID of this advertiser. This is a read-only, auto-generated field. */
		id?: string;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiser". */
		kind?: string;

		/** Name of this advertiser. This is a required field and must be less than 256 characters long and unique among advertisers of the same account. */
		name?: string;

		/** Original floodlight configuration before any sharing occurred. Set the floodlightConfigurationId of this advertiser to originalFloodlightConfigurationId to unshare the advertiser's current floodlight configuration. You cannot unshare an advertiser's floodlight configuration if the shared configuration has activities associated with any campaign or placement. */
		originalFloodlightConfigurationId?: string;

		/** Status of this advertiser. */
		status?: AdvertiserStatus;

		/** Subaccount ID of this advertiser.This is a read-only field that can be left blank. */
		subaccountId?: string;

		/** Suspension status of this advertiser. */
		suspended?: boolean;
	}

	export enum AdvertiserStatus { APPROVED = 0, ON_HOLD = 1 }


	/** Groups advertisers together so that reports can be generated for the entire group at once. */
	export interface AdvertiserGroup {

		/** Account ID of this advertiser group. This is a read-only field that can be left blank. */
		accountId?: string;

		/** ID of this advertiser group. This is a read-only, auto-generated field. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroup". */
		kind?: string;

		/** Name of this advertiser group. This is a required field and must be less than 256 characters long and unique among advertiser groups of the same account. */
		name?: string;
	}


	/** Advertiser Group List Response */
	export interface AdvertiserGroupsListResponse {

		/** Advertiser group collection. */
		advertiserGroups?: Array<AdvertiserGroup>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroupsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Landing Page List Response */
	export interface AdvertiserLandingPagesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserLandingPagesListResponse". */
		kind?: string;

		/** Landing page collection */
		landingPages?: Array<LandingPage>;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Contains information about where a user's browser is taken after the user clicks an ad. */
	export interface LandingPage {

		/** Advertiser ID of this landing page. This is a required field. */
		advertiserId?: string;

		/** Whether this landing page has been archived. */
		archived?: boolean;

		/** Links that will direct the user to a mobile app, if installed. */
		deepLinks?: Array<DeepLink>;

		/** ID of this landing page. This is a read-only, auto-generated field. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#landingPage". */
		kind?: string;

		/** Name of this landing page. This is a required field. It must be less than 256 characters long. */
		name?: string;

		/** URL of this landing page. This is a required field. */
		url?: string;
	}


	/** Contains information about a landing page deep link. */
	export interface DeepLink {

		/** The URL of the mobile app being linked to. */
		appUrl?: string;

		/** The fallback URL. This URL will be served to users who do not have the mobile app installed. */
		fallbackUrl?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#deepLink". */
		kind?: string;

		/** Contains information about a mobile app. Used as a landing page deep link. */
		mobileApp?: MobileApp;

		/** Ads served to users on these remarketing lists will use this deep link. Applicable when mobileApp.directory is APPLE_APP_STORE. */
		remarketingListIds?: Array<string>;
	}


	/** Contains information about a mobile app. Used as a landing page deep link. */
	export interface MobileApp {

		/** Mobile app directory. */
		directory?: MobileAppDirectory;

		/** ID of this mobile app. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileApp". */
		kind?: string;

		/** Publisher name. */
		publisherName?: string;

		/** Title of this mobile app. */
		title?: string;
	}

	export enum MobileAppDirectory { APPLE_APP_STORE = 0, GOOGLE_PLAY_STORE = 1, UNKNOWN = 2 }


	/** Advertiser List Response */
	export interface AdvertisersListResponse {

		/** Advertiser collection. */
		advertisers?: Array<Advertiser>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertisersListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Audience Segment. */
	export interface AudienceSegment {

		/** Weight allocated to this segment. The weight assigned will be understood in proportion to the weights assigned to other segments in the same segment group. Acceptable values are 1 to 1000, inclusive. */
		allocation?: number;

		/** ID of this audience segment. This is a read-only, auto-generated field. */
		id?: string;

		/** Name of this audience segment. This is a required field and must be less than 65 characters long. */
		name?: string;
	}


	/** Audience Segment Group. */
	export interface AudienceSegmentGroup {

		/** Audience segments assigned to this group. The number of segments must be between 2 and 100. */
		audienceSegments?: Array<AudienceSegment>;

		/** ID of this audience segment group. This is a read-only, auto-generated field. */
		id?: string;

		/** Name of this audience segment group. This is a required field and must be less than 65 characters long. */
		name?: string;
	}


	/** Browser List Response */
	export interface BrowsersListResponse {

		/** Browser collection. */
		browsers?: Array<Browser>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#browsersListResponse". */
		kind?: string;
	}


	/** Contains properties of a Campaign Manager campaign. */
	export interface Campaign {

		/** Account ID of this campaign. This is a read-only field that can be left blank. */
		accountId?: string;

		/** Campaign ad blocking settings. */
		adBlockingConfiguration?: AdBlockingConfiguration;

		/** Additional creative optimization configurations for the campaign. */
		additionalCreativeOptimizationConfigurations?: Array<CreativeOptimizationConfiguration>;

		/** Advertiser group ID of the associated advertiser. */
		advertiserGroupId?: string;

		/** Advertiser ID of this campaign. This is a required field. */
		advertiserId?: string;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Whether this campaign has been archived. */
		archived?: boolean;

		/** Audience segment groups assigned to this campaign. Cannot have more than 300 segment groups. */
		audienceSegmentGroups?: Array<AudienceSegmentGroup>;

		/** Billing invoice code included in the Campaign Manager client billing invoices associated with the campaign. */
		billingInvoiceCode?: string;

		/** Click Through URL Suffix settings. */
		clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties;

		/** Arbitrary comments about this campaign. Must be less than 256 characters long. */
		comment?: string;

		/** Modification timestamp. */
		createInfo?: LastModifiedInfo;

		/** List of creative group IDs that are assigned to the campaign. */
		creativeGroupIds?: Array<string>;

		/** Creative optimization settings. */
		creativeOptimizationConfiguration?: CreativeOptimizationConfiguration;

		/** Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further. */
		defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties;

		/** The default landing page ID for this campaign. */
		defaultLandingPageId?: string;

		/** Date on which the campaign will stop running. On insert, the end date must be today or a future date. The end date must be later than or be the same as the start date. If, for example, you set 6/25/2015 as both the start and end dates, the effective campaign run date is just that day only, 6/25/2015. The hours, minutes, and seconds of the end date should not be set, as doing so will result in an error. This is a required field. */
		endDate?: Date;

		/** Overrides that can be used to activate or deactivate advertiser event tags. */
		eventTagOverrides?: Array<EventTagOverride>;

		/** External ID for this campaign. */
		externalId?: string;

		/** ID of this campaign. This is a read-only auto-generated field. */
		id?: string;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaign". */
		kind?: string;

		/** Modification timestamp. */
		lastModifiedInfo?: LastModifiedInfo;

		/** Name of this campaign. This is a required field and must be less than 256 characters long and unique among campaigns of the same advertiser. */
		name?: string;

		/** Whether Nielsen reports are enabled for this campaign. */
		nielsenOcrEnabled?: boolean;

		/** Date on which the campaign starts running. The start date can be any date. The hours, minutes, and seconds of the start date should not be set, as doing so will result in an error. This is a required field. */
		startDate?: Date;

		/** Subaccount ID of this campaign. This is a read-only field that can be left blank. */
		subaccountId?: string;

		/** Campaign trafficker contact emails. */
		traffickerEmails?: Array<string>;
	}


	/** Creative optimization settings. */
	export interface CreativeOptimizationConfiguration {

		/** ID of this creative optimization config. This field is auto-generated when the campaign is inserted or updated. It can be null for existing campaigns. */
		id?: string;

		/** Name of this creative optimization config. This is a required field and must be less than 129 characters long. */
		name?: string;

		/** List of optimization activities associated with this configuration. */
		optimizationActivitys?: Array<OptimizationActivity>;

		/** Optimization model for this configuration. */
		optimizationModel?: CreativeOptimizationConfigurationOptimizationModel;
	}


	/** Creative optimization activity. */
	export interface OptimizationActivity {

		/** Floodlight activity ID of this optimization activity. This is a required field. */
		floodlightActivityId?: string;

		/** Represents a DimensionValue resource. */
		floodlightActivityIdDimensionValue?: DimensionValue;

		/** Weight associated with this optimization. The weight assigned will be understood in proportion to the weights assigned to the other optimization activities. Value must be greater than or equal to 1. */
		weight?: number;
	}

	export enum CreativeOptimizationConfigurationOptimizationModel { CLICK = 0, POST_CLICK = 1, POST_CLICK_AND_IMPRESSION = 2, POST_IMPRESSION = 3, VIDEO_COMPLETION = 4 }


	/** Identifies a creative which has been associated with a given campaign. */
	export interface CampaignCreativeAssociation {

		/** ID of the creative associated with the campaign. This is a required field. */
		creativeId?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociation". */
		kind?: string;
	}


	/** Campaign Creative Association List Response */
	export interface CampaignCreativeAssociationsListResponse {

		/** Campaign creative association collection */
		campaignCreativeAssociations?: Array<CampaignCreativeAssociation>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociationsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Campaign List Response */
	export interface CampaignsListResponse {

		/** Campaign collection. */
		campaigns?: Array<Campaign>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Describes a change that a user has made to a resource. */
	export interface ChangeLog {

		/** Account ID of the modified object. */
		accountId?: string;

		/** Action which caused the change. */
		action?: string;

		/** Time when the object was modified. */
		changeTime?: Date;

		/** Field name of the object which changed. */
		fieldName?: string;

		/** ID of this change log. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLog". */
		kind?: string;

		/** New value of the object field. */
		newValue?: string;

		/** ID of the object of this change log. The object could be a campaign, placement, ad, or other type. */
		objectId?: string;

		/** Object type of the change log. */
		objectType?: string;

		/** Old value of the object field. */
		oldValue?: string;

		/** Subaccount ID of the modified object. */
		subaccountId?: string;

		/** Transaction ID of this change log. When a single API call results in many changes, each change will have a separate ID in the change log but will share the same transactionId. */
		transactionId?: string;

		/** ID of the user who modified the object. */
		userProfileId?: string;

		/** User profile name of the user who modified the object. */
		userProfileName?: string;
	}


	/** Change Log List Response */
	export interface ChangeLogsListResponse {

		/** Change log collection. */
		changeLogs?: Array<ChangeLog>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLogsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** City List Response */
	export interface CitiesListResponse {

		/** City collection. */
		cities?: Array<City>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#citiesListResponse". */
		kind?: string;
	}


	/** Creative Click Tag. */
	export interface ClickTag {

		/** Click-through URL */
		clickThroughUrl?: CreativeClickThroughUrl;

		/** Advertiser event name associated with the click tag. This field is used by DISPLAY_IMAGE_GALLERY and HTML5_BANNER creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		eventName?: string;

		/** Parameter name for the specified click tag. For DISPLAY_IMAGE_GALLERY creative assets, this field must match the value of the creative asset's creativeAssetId.name field. */
		name?: string;
	}


	/** Click-through URL */
	export interface CreativeClickThroughUrl {

		/**
		 * Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows:
		 * - If landingPageId is specified then that landing page's URL is assigned to this field.
		 * - Otherwise, the customClickThroughUrl is assigned to this field.
		 */
		computedClickThroughUrl?: string;

		/** Custom click-through URL. Applicable if the landingPageId field is left unset. */
		customClickThroughUrl?: string;

		/** ID of the landing page for the click-through URL. */
		landingPageId?: string;
	}


	/** Companion Settings */
	export interface CompanionSetting {

		/** Whether companions are disabled for this placement. */
		companionsDisabled?: boolean;

		/** Whitelist of companion sizes to be served to this placement. Set this list to null or empty to serve all companion sizes. */
		enabledSizes?: Array<Size>;

		/** Whether to serve only static images as companions. */
		imageOnly?: boolean;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#companionSetting". */
		kind?: string;
	}


	/** Represents a response to the queryCompatibleFields method. */
	export interface CompatibleFields {

		/** Represents fields that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH". */
		crossDimensionReachReportCompatibleFields?: CrossDimensionReachReportCompatibleFields;

		/** Represents fields that are compatible to be selected for a report of type "FlOODLIGHT". */
		floodlightReportCompatibleFields?: FloodlightReportCompatibleFields;

		/** The kind of resource this is, in this case dfareporting#compatibleFields. */
		kind?: string;

		/** Represents fields that are compatible to be selected for a report of type "PATH_TO_CONVERSION". */
		pathToConversionReportCompatibleFields?: PathToConversionReportCompatibleFields;

		/** Represents fields that are compatible to be selected for a report of type "REACH". */
		reachReportCompatibleFields?: ReachReportCompatibleFields;

		/** Represents fields that are compatible to be selected for a report of type "STANDARD". */
		reportCompatibleFields?: ReportCompatibleFields;
	}


	/** Represents fields that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH". */
	export interface CrossDimensionReachReportCompatibleFields {

		/** Dimensions which are compatible to be selected in the "breakdown" section of the report. */
		breakdown?: Array<Dimension>;

		/** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
		dimensionFilters?: Array<Dimension>;

		/** The kind of resource this is, in this case dfareporting#crossDimensionReachReportCompatibleFields. */
		kind?: string;

		/** Metrics which are compatible to be selected in the "metricNames" section of the report. */
		metrics?: Array<Metric>;

		/** Metrics which are compatible to be selected in the "overlapMetricNames" section of the report. */
		overlapMetrics?: Array<Metric>;
	}


	/** Represents a dimension. */
	export interface Dimension {

		/** The kind of resource this is, in this case dfareporting#dimension. */
		kind?: string;

		/** The dimension name, e.g. dfa:advertiser */
		name?: string;
	}


	/** Represents a metric. */
	export interface Metric {

		/** The kind of resource this is, in this case dfareporting#metric. */
		kind?: string;

		/** The metric name, e.g. dfa:impressions */
		name?: string;
	}


	/** Represents fields that are compatible to be selected for a report of type "FlOODLIGHT". */
	export interface FloodlightReportCompatibleFields {

		/** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
		dimensionFilters?: Array<Dimension>;

		/** Dimensions which are compatible to be selected in the "dimensions" section of the report. */
		dimensions?: Array<Dimension>;

		/** The kind of resource this is, in this case dfareporting#floodlightReportCompatibleFields. */
		kind?: string;

		/** Metrics which are compatible to be selected in the "metricNames" section of the report. */
		metrics?: Array<Metric>;
	}


	/** Represents fields that are compatible to be selected for a report of type "PATH_TO_CONVERSION". */
	export interface PathToConversionReportCompatibleFields {

		/** Conversion dimensions which are compatible to be selected in the "conversionDimensions" section of the report. */
		conversionDimensions?: Array<Dimension>;

		/** Custom floodlight variables which are compatible to be selected in the "customFloodlightVariables" section of the report. */
		customFloodlightVariables?: Array<Dimension>;

		/** The kind of resource this is, in this case dfareporting#pathToConversionReportCompatibleFields. */
		kind?: string;

		/** Metrics which are compatible to be selected in the "metricNames" section of the report. */
		metrics?: Array<Metric>;

		/** Per-interaction dimensions which are compatible to be selected in the "perInteractionDimensions" section of the report. */
		perInteractionDimensions?: Array<Dimension>;
	}


	/** Represents fields that are compatible to be selected for a report of type "REACH". */
	export interface ReachReportCompatibleFields {

		/** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
		dimensionFilters?: Array<Dimension>;

		/** Dimensions which are compatible to be selected in the "dimensions" section of the report. */
		dimensions?: Array<Dimension>;

		/** The kind of resource this is, in this case dfareporting#reachReportCompatibleFields. */
		kind?: string;

		/** Metrics which are compatible to be selected in the "metricNames" section of the report. */
		metrics?: Array<Metric>;

		/** Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report. */
		pivotedActivityMetrics?: Array<Metric>;

		/** Metrics which are compatible to be selected in the "reachByFrequencyMetricNames" section of the report. */
		reachByFrequencyMetrics?: Array<Metric>;
	}


	/** Represents fields that are compatible to be selected for a report of type "STANDARD". */
	export interface ReportCompatibleFields {

		/** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
		dimensionFilters?: Array<Dimension>;

		/** Dimensions which are compatible to be selected in the "dimensions" section of the report. */
		dimensions?: Array<Dimension>;

		/** The kind of resource this is, in this case dfareporting#reportCompatibleFields. */
		kind?: string;

		/** Metrics which are compatible to be selected in the "metricNames" section of the report. */
		metrics?: Array<Metric>;

		/** Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report. */
		pivotedActivityMetrics?: Array<Metric>;
	}


	/** Connection Type List Response */
	export interface ConnectionTypesListResponse {

		/** Collection of connection types such as broadband and mobile. */
		connectionTypes?: Array<ConnectionType>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionTypesListResponse". */
		kind?: string;
	}


	/** Content Category List Response */
	export interface ContentCategoriesListResponse {

		/** Content category collection. */
		contentCategories?: Array<ContentCategory>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategoriesListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Organizes placements according to the contents of their associated webpages. */
	export interface ContentCategory {

		/** Account ID of this content category. This is a read-only field that can be left blank. */
		accountId?: string;

		/** ID of this content category. This is a read-only, auto-generated field. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategory". */
		kind?: string;

		/** Name of this content category. This is a required field and must be less than 256 characters long and unique among content categories of the same account. */
		name?: string;
	}


	/** A Conversion represents when a user successfully performs a desired action after seeing an ad. */
	export interface Conversion {

		/** Whether this particular request may come from a user under the age of 13, under COPPA compliance. */
		childDirectedTreatment?: boolean;

		/** Custom floodlight variables. */
		customVariables?: Array<CustomFloodlightVariable>;

		/** The alphanumeric encrypted user ID. When set, encryptionInfo should also be specified. This field is mutually exclusive with encryptedUserIdCandidates[], matchId, mobileDeviceId and gclid. This or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid is a required field. */
		encryptedUserId?: string;

		/** A list of the alphanumeric encrypted user IDs. Any user ID with exposure prior to the conversion timestamp will be used in the inserted conversion. If no such user ID is found then the conversion will be rejected with INVALID_ARGUMENT error. When set, encryptionInfo should also be specified. This field may only be used when calling batchinsert; it is not supported by batchupdate. This field is mutually exclusive with encryptedUserId, matchId, mobileDeviceId and gclid. This or encryptedUserId or matchId or mobileDeviceId or gclid is a required field. */
		encryptedUserIdCandidates?: Array<string>;

		/** Floodlight Activity ID of this conversion. This is a required field. */
		floodlightActivityId?: string;

		/** Floodlight Configuration ID of this conversion. This is a required field. */
		floodlightConfigurationId?: string;

		/** The Google click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId and mobileDeviceId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId is a required field. */
		gclid?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversion". */
		kind?: string;

		/** Whether Limit Ad Tracking is enabled. When set to true, the conversion will be used for reporting but not targeting. This will prevent remarketing. */
		limitAdTracking?: boolean;

		/** The match ID field. A match ID is your own first-party identifier that has been synced with Google using the match ID feature in Floodlight. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[],mobileDeviceId and gclid. This or encryptedUserId or encryptedUserIdCandidates[] or mobileDeviceId or gclid is a required field. */
		matchId?: string;

		/** The mobile device ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId and gclid. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or gclid is a required field. */
		mobileDeviceId?: string;

		/** Whether the conversion was for a non personalized ad. */
		nonPersonalizedAd?: boolean;

		/** The ordinal of the conversion. Use this field to control how conversions of the same user and day are de-duplicated. This is a required field. */
		ordinal?: string;

		/** The quantity of the conversion. */
		quantity?: string;

		/** The timestamp of conversion, in Unix epoch micros. This is a required field. */
		timestampMicros?: string;

		/** Whether this particular request may come from a user under the age of 16 (may differ by country), under compliance with the European Union's General Data Protection Regulation (GDPR). */
		treatmentForUnderage?: boolean;

		/** The value of the conversion. */
		value?: number;
	}


	/** A custom floodlight variable. */
	export interface CustomFloodlightVariable {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#customFloodlightVariable". */
		kind?: string;

		/** The type of custom floodlight variable to supply a value for. These map to the "u[1-20]=" in the tags. */
		type?: CustomFloodlightVariableType;

		/** The value of the custom floodlight variable. The length of string must not exceed 50 characters. */
		value?: string;
	}

	export enum CustomFloodlightVariableType { U1 = 0, U10 = 1, U100 = 2, U11 = 3, U12 = 4, U13 = 5, U14 = 6, U15 = 7, U16 = 8, U17 = 9, U18 = 10, U19 = 11, U2 = 12, U20 = 13, U21 = 14, U22 = 15, U23 = 16, U24 = 17, U25 = 18, U26 = 19, U27 = 20, U28 = 21, U29 = 22, U3 = 23, U30 = 24, U31 = 25, U32 = 26, U33 = 27, U34 = 28, U35 = 29, U36 = 30, U37 = 31, U38 = 32, U39 = 33, U4 = 34, U40 = 35, U41 = 36, U42 = 37, U43 = 38, U44 = 39, U45 = 40, U46 = 41, U47 = 42, U48 = 43, U49 = 44, U5 = 45, U50 = 46, U51 = 47, U52 = 48, U53 = 49, U54 = 50, U55 = 51, U56 = 52, U57 = 53, U58 = 54, U59 = 55, U6 = 56, U60 = 57, U61 = 58, U62 = 59, U63 = 60, U64 = 61, U65 = 62, U66 = 63, U67 = 64, U68 = 65, U69 = 66, U7 = 67, U70 = 68, U71 = 69, U72 = 70, U73 = 71, U74 = 72, U75 = 73, U76 = 74, U77 = 75, U78 = 76, U79 = 77, U8 = 78, U80 = 79, U81 = 80, U82 = 81, U83 = 82, U84 = 83, U85 = 84, U86 = 85, U87 = 86, U88 = 87, U89 = 88, U9 = 89, U90 = 90, U91 = 91, U92 = 92, U93 = 93, U94 = 94, U95 = 95, U96 = 96, U97 = 97, U98 = 98, U99 = 99 }


	/** The error code and description for a conversion that failed to insert or update. */
	export interface ConversionError {

		/** The error code. */
		code?: ConversionErrorCode;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionError". */
		kind?: string;

		/** A description of the error. */
		message?: string;
	}

	export enum ConversionErrorCode { INTERNAL = 0, INVALID_ARGUMENT = 1, NOT_FOUND = 2, PERMISSION_DENIED = 3 }


	/** The original conversion that was inserted or updated and whether there were any errors. */
	export interface ConversionStatus {

		/** A Conversion represents when a user successfully performs a desired action after seeing an ad. */
		conversion?: Conversion;

		/** A list of errors related to this conversion. */
		errors?: Array<ConversionError>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionStatus". */
		kind?: string;
	}


	/** Insert Conversions Request. */
	export interface ConversionsBatchInsertRequest {

		/** The set of conversions to insert. */
		conversions?: Array<Conversion>;

		/** A description of how user IDs are encrypted. */
		encryptionInfo?: EncryptionInfo;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertRequest". */
		kind?: string;
	}


	/** A description of how user IDs are encrypted. */
	export interface EncryptionInfo {

		/** The encryption entity ID. This should match the encryption configuration for ad serving or Data Transfer. */
		encryptionEntityId?: string;

		/** The encryption entity type. This should match the encryption configuration for ad serving or Data Transfer. */
		encryptionEntityType?: EncryptionInfoEncryptionEntityType;

		/** Describes whether the encrypted cookie was received from ad serving (the %m macro) or from Data Transfer. */
		encryptionSource?: EncryptionInfoEncryptionSource;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#encryptionInfo". */
		kind?: string;
	}

	export enum EncryptionInfoEncryptionEntityType { ADWORDS_CUSTOMER = 0, DBM_ADVERTISER = 1, DBM_PARTNER = 2, DCM_ACCOUNT = 3, DCM_ADVERTISER = 4, DFP_NETWORK_CODE = 5, ENCRYPTION_ENTITY_TYPE_UNKNOWN = 6 }

	export enum EncryptionInfoEncryptionSource { AD_SERVING = 0, DATA_TRANSFER = 1, ENCRYPTION_SCOPE_UNKNOWN = 2 }


	/** Insert Conversions Response. */
	export interface ConversionsBatchInsertResponse {

		/** Indicates that some or all conversions failed to insert. */
		hasFailures?: boolean;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertResponse". */
		kind?: string;

		/** The insert status of each conversion. Statuses are returned in the same order that conversions are inserted. */
		status?: Array<ConversionStatus>;
	}


	/** Update Conversions Request. */
	export interface ConversionsBatchUpdateRequest {

		/** The set of conversions to update. */
		conversions?: Array<Conversion>;

		/** A description of how user IDs are encrypted. */
		encryptionInfo?: EncryptionInfo;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateRequest". */
		kind?: string;
	}


	/** Update Conversions Response. */
	export interface ConversionsBatchUpdateResponse {

		/** Indicates that some or all conversions failed to update. */
		hasFailures?: boolean;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateResponse". */
		kind?: string;

		/** The update status of each conversion. Statuses are returned in the same order that conversions are updated. */
		status?: Array<ConversionStatus>;
	}


	/** Country List Response */
	export interface CountriesListResponse {

		/** Country collection. */
		countries?: Array<Country>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#countriesListResponse". */
		kind?: string;
	}


	/** Contains properties of a Creative. */
	export interface Creative {

		/** Account ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types. */
		accountId?: string;

		/** Whether the creative is active. Applicable to all creative types. */
		active?: boolean;

		/** Ad parameters user for VPAID creative. This is a read-only field. Applicable to the following creative types: all VPAID. */
		adParameters?: string;

		/** Keywords for a Rich Media creative. Keywords let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use keywords to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		adTagKeys?: Array<string>;

		/** Additional sizes associated with a responsive creative. When inserting or updating a creative either the size ID field or size width and height fields can be used. Applicable to DISPLAY creatives when the primary asset type is HTML_IMAGE. */
		additionalSizes?: Array<Size>;

		/** Advertiser ID of this creative. This is a required field. Applicable to all creative types. */
		advertiserId?: string;

		/** Whether script access is allowed for this creative. This is a read-only and deprecated field which will automatically be set to true on update. Applicable to the following creative types: FLASH_INPAGE. */
		allowScriptAccess?: boolean;

		/** Whether the creative is archived. Applicable to all creative types. */
		archived?: boolean;

		/** Type of artwork used for the creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		artworkType?: CreativeArtworkType;

		/** Source application where creative was authored. Presently, only DBM authored creatives will have this field set. Applicable to all creative types. */
		authoringSource?: CreativeAuthoringSource;

		/** Authoring tool for HTML5 banner creatives. This is a read-only field. Applicable to the following creative types: HTML5_BANNER. */
		authoringTool?: CreativeAuthoringTool;

		/** Whether images are automatically advanced for image gallery creatives. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY. */
		autoAdvanceImages?: boolean;

		/** The 6-character HTML color code, beginning with #, for the background of the window area where the Flash file is displayed. Default is white. Applicable to the following creative types: FLASH_INPAGE. */
		backgroundColor?: string;

		/** Click-through URL */
		backupImageClickThroughUrl?: CreativeClickThroughUrl;

		/** List of feature dependencies that will cause a backup image to be served if the browser that serves the ad does not support them. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative asset correctly. This field is initially auto-generated to contain all features detected by Campaign Manager for all the assets of this creative and can then be modified by the client. To reset this field, copy over all the creativeAssets' detected features. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		backupImageFeatures?: Array<string>;

		/** Reporting label used for HTML5 banner backup image. Applicable to the following creative types: DISPLAY when the primary asset type is not HTML_IMAGE. */
		backupImageReportingLabel?: string;

		/** Target Window. */
		backupImageTargetWindow?: TargetWindow;

		/** Click tags of the creative. For DISPLAY, FLASH_INPAGE, and HTML5_BANNER creatives, this is a subset of detected click tags for the assets associated with this creative. After creating a flash asset, detected click tags will be returned in the creativeAssetMetadata. When inserting the creative, populate the creative clickTags field using the creativeAssetMetadata.clickTags field. For DISPLAY_IMAGE_GALLERY creatives, there should be exactly one entry in this list for each image creative asset. A click tag is matched with a corresponding creative asset by matching the clickTag.name field with the creativeAsset.assetIdentifier.name field. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		clickTags?: Array<ClickTag>;

		/** Industry standard ID assigned to creative for reach and frequency. Applicable to INSTREAM_VIDEO_REDIRECT creatives. */
		commercialId?: string;

		/** List of companion creatives assigned to an in-Stream video creative. Acceptable values include IDs of existing flash and image creatives. Applicable to the following creative types: all VPAID, all INSTREAM_AUDIO and all INSTREAM_VIDEO with dynamicAssetSelection set to false. */
		companionCreatives?: Array<string>;

		/**
		 * Compatibilities associated with this creative. This is a read-only field. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. Only pre-existing creatives may have these compatibilities since new creatives will either be assigned DISPLAY or DISPLAY_INTERSTITIAL instead. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. IN_STREAM_AUDIO refers to rendering in in-stream audio ads developed with the VAST standard. Applicable to all creative types.
		 * Acceptable values are:
		 * - "APP"
		 * - "APP_INTERSTITIAL"
		 * - "IN_STREAM_VIDEO"
		 * - "IN_STREAM_AUDIO"
		 * - "DISPLAY"
		 * - "DISPLAY_INTERSTITIAL"
		 */
		compatibility?: Array<AdCompatibility>;

		/** Whether Flash assets associated with the creative need to be automatically converted to HTML5. This flag is enabled by default and users can choose to disable it if they don't want the system to generate and use HTML5 asset for this creative. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		convertFlashToHtml5?: boolean;

		/** List of counter events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. */
		counterCustomEvents?: Array<CreativeCustomEvent>;

		/** Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to INSTREAM_VIDEO creatives. */
		creativeAssetSelection?: CreativeAssetSelection;

		/** Assets associated with a creative. Applicable to all but the following creative types: INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and REDIRECT */
		creativeAssets?: Array<CreativeAsset>;

		/** Creative field assignments for this creative. Applicable to all creative types. */
		creativeFieldAssignments?: Array<CreativeFieldAssignment>;

		/** Custom key-values for a Rich Media creative. Key-values let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use key-values to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		customKeyValues?: Array<string>;

		/** Set this to true to enable the use of rules to target individual assets in this creative. When set to true creativeAssetSelection must be set. This also controls asset-level companions. When this is true, companion creatives should be assigned to creative assets. Learn more. Applicable to INSTREAM_VIDEO creatives. */
		dynamicAssetSelection?: boolean;

		/** List of exit events configured for the creative. For DISPLAY and DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags, For DISPLAY, an event is also created from the backupImageReportingLabel. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		exitCustomEvents?: Array<CreativeCustomEvent>;

		/** FsCommand. */
		fsCommand?: FsCommand;

		/** HTML code for the creative. This is a required field when applicable. This field is ignored if htmlCodeLocked is true. Applicable to the following creative types: all CUSTOM, FLASH_INPAGE, and HTML5_BANNER, and all RICH_MEDIA. */
		htmlCode?: string;

		/** Whether HTML code is generated by Campaign Manager or manually entered. Set to true to ignore changes to htmlCode. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER. */
		htmlCodeLocked?: boolean;

		/** ID of this creative. This is a read-only, auto-generated field. Applicable to all creative types. */
		id?: string;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creative". */
		kind?: string;

		/** Modification timestamp. */
		lastModifiedInfo?: LastModifiedInfo;

		/** Latest Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		latestTraffickedCreativeId?: string;

		/** Description of the audio or video ad. Applicable to the following creative types: all INSTREAM_VIDEO, INSTREAM_AUDIO, and all VPAID. */
		mediaDescription?: string;

		/** Creative audio or video duration in seconds. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO, INSTREAM_AUDIO, all RICH_MEDIA, and all VPAID. */
		mediaDuration?: number;

		/** Name of the creative. This is a required field and must be less than 256 characters long. Applicable to all creative types. */
		name?: string;

		/** Override CSS value for rich media creatives. Applicable to the following creative types: all RICH_MEDIA. */
		overrideCss?: string;

		/** Video Offset */
		progressOffset?: VideoOffset;

		/** URL of hosted image or hosted video or another ad tag. For INSTREAM_VIDEO_REDIRECT creatives this is the in-stream video redirect URL. The standard for a VAST (Video Ad Serving Template) ad response allows for a redirect link to another VAST 2.0 or 3.0 call. This is a required field when applicable. Applicable to the following creative types: DISPLAY_REDIRECT, INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO_REDIRECT */
		redirectUrl?: string;

		/** ID of current rendering version. This is a read-only field. Applicable to all creative types. */
		renderingId?: string;

		/** Represents a DimensionValue resource. */
		renderingIdDimensionValue?: DimensionValue;

		/** The minimum required Flash plugin version for this creative. For example, 11.2.202.235. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		requiredFlashPluginVersion?: string;

		/** The internal Flash version for this creative as calculated by Studio. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		requiredFlashVersion?: number;

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		size?: Size;

		/** Video Offset */
		skipOffset?: VideoOffset;

		/** Whether the user can choose to skip the creative. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID. */
		skippable?: boolean;

		/** Whether the creative is SSL-compliant. This is a read-only field. Applicable to all creative types. */
		sslCompliant?: boolean;

		/** Whether creative should be treated as SSL compliant even if the system scan shows it's not. Applicable to all creative types. */
		sslOverride?: boolean;

		/** Studio advertiser ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		studioAdvertiserId?: string;

		/** Studio creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		studioCreativeId?: string;

		/** Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		studioTraffickedCreativeId?: string;

		/** Subaccount ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types. */
		subaccountId?: string;

		/** Third-party URL used to record backup image impressions. Applicable to the following creative types: all RICH_MEDIA. */
		thirdPartyBackupImageImpressionsUrl?: string;

		/** Third-party URL used to record rich media impressions. Applicable to the following creative types: all RICH_MEDIA. */
		thirdPartyRichMediaImpressionsUrl?: string;

		/** Third-party URLs for tracking in-stream creative events. Applicable to the following creative types: all INSTREAM_VIDEO, all INSTREAM_AUDIO, and all VPAID. */
		thirdPartyUrls?: Array<ThirdPartyTrackingUrl>;

		/** List of timer events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset is not HTML_IMAGE. */
		timerCustomEvents?: Array<CreativeCustomEvent>;

		/** Combined size of all creative assets. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		totalFileSize?: string;

		/**
		 * Type of this creative. This is a required field. Applicable to all creative types.
		 * Note: FLASH_INPAGE, HTML5_BANNER, and IMAGE are only used for existing creatives. New creatives should use DISPLAY as a replacement for these types.
		 */
		type?: CreativeType;

		/** A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID. */
		universalAdId?: UniversalAdId;

		/** The version number helps you keep track of multiple versions of your creative in your reports. The version number will always be auto-generated during insert operations to start at 1. For tracking creatives the version cannot be incremented and will always remain at 1. For all other creative types the version can be incremented only by 1 during update operations. In addition, the version will be automatically incremented by 1 when undergoing Rich Media creative merging. Applicable to all creative types. */
		version?: number;
	}

	export enum CreativeArtworkType { ARTWORK_TYPE_FLASH = 0, ARTWORK_TYPE_HTML5 = 1, ARTWORK_TYPE_IMAGE = 2, ARTWORK_TYPE_MIXED = 3 }

	export enum CreativeAuthoringSource { CREATIVE_AUTHORING_SOURCE_DBM = 0, CREATIVE_AUTHORING_SOURCE_DCM = 1, CREATIVE_AUTHORING_SOURCE_STUDIO = 2 }

	export enum CreativeAuthoringTool { NINJA = 0, SWIFFY = 1 }


	/** Target Window. */
	export interface TargetWindow {

		/** User-entered value. */
		customHtml?: string;

		/** Type of browser window for which the backup image of the flash creative can be displayed. */
		targetWindowOption?: TargetWindowTargetWindowOption;
	}

	export enum TargetWindowTargetWindowOption { CURRENT_WINDOW = 0, CUSTOM = 1, NEW_WINDOW = 2 }


	/** Creative Custom Event. */
	export interface CreativeCustomEvent {

		/** Unique ID of this event used by Reporting and Data Transfer. This is a read-only field. */
		advertiserCustomEventId?: string;

		/** User-entered name for the event. */
		advertiserCustomEventName?: string;

		/** Type of the event. This is a read-only field. */
		advertiserCustomEventType?: CreativeCustomEventAdvertiserCustomEventType;

		/** Artwork label column, used to link events in Campaign Manager back to events in Studio. This is a required field and should not be modified after insertion. */
		artworkLabel?: string;

		/** Artwork type used by the creative.This is a read-only field. */
		artworkType?: CreativeArtworkType;

		/** Click-through URL */
		exitClickThroughUrl?: CreativeClickThroughUrl;

		/** ID of this event. This is a required field and should not be modified after insertion. */
		id?: string;

		/** Popup Window Properties. */
		popupWindowProperties?: PopupWindowProperties;

		/** Target type used by the event. */
		targetType?: CreativeCustomEventTargetType;

		/** Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field. */
		videoReportingId?: string;
	}

	export enum CreativeCustomEventAdvertiserCustomEventType { ADVERTISER_EVENT_COUNTER = 0, ADVERTISER_EVENT_EXIT = 1, ADVERTISER_EVENT_TIMER = 2 }


	/** Popup Window Properties. */
	export interface PopupWindowProperties {

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		dimension?: Size;

		/** Offset Position. */
		offset?: OffsetPosition;

		/** Popup window position either centered or at specific coordinate. */
		positionType?: PopupWindowPropertiesPositionType;

		/** Whether to display the browser address bar. */
		showAddressBar?: boolean;

		/** Whether to display the browser menu bar. */
		showMenuBar?: boolean;

		/** Whether to display the browser scroll bar. */
		showScrollBar?: boolean;

		/** Whether to display the browser status bar. */
		showStatusBar?: boolean;

		/** Whether to display the browser tool bar. */
		showToolBar?: boolean;

		/** Title of popup window. */
		title?: string;
	}


	/** Offset Position. */
	export interface OffsetPosition {

		/** Offset distance from left side of an asset or a window. */
		left?: number;

		/** Offset distance from top side of an asset or a window. */
		top?: number;
	}

	export enum PopupWindowPropertiesPositionType { CENTER = 0, COORDINATES = 1 }

	export enum CreativeCustomEventTargetType { TARGET_BLANK = 0, TARGET_PARENT = 1, TARGET_POPUP = 2, TARGET_SELF = 3, TARGET_TOP = 4 }


	/** Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to INSTREAM_VIDEO creatives. */
	export interface CreativeAssetSelection {

		/** A creativeAssets[].id. This should refer to one of the parent assets in this creative, and will be served if none of the rules match. This is a required field. */
		defaultAssetId?: string;

		/** Rules determine which asset will be served to a viewer. Rules will be evaluated in the order in which they are stored in this list. This list must contain at least one rule. Applicable to INSTREAM_VIDEO creatives. */
		rules?: Array<Rule>;
	}


	/** A rule associates an asset with a targeting template for asset-level targeting. Applicable to INSTREAM_VIDEO creatives. */
	export interface Rule {

		/** A creativeAssets[].id. This should refer to one of the parent assets in this creative. This is a required field. */
		assetId?: string;

		/** A user-friendly name for this rule. This is a required field. */
		name?: string;

		/** A targeting template ID. The targeting from the targeting template will be used to determine whether this asset should be served. This is a required field. */
		targetingTemplateId?: string;
	}


	/** Creative Asset. */
	export interface CreativeAsset {

		/** Whether ActionScript3 is enabled for the flash asset. This is a read-only field. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		actionScript3?: boolean;

		/** Whether the video or audio asset is active. This is a read-only field for VPAID_NON_LINEAR_VIDEO assets. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		active?: boolean;

		/** Additional sizes associated with this creative asset. HTML5 asset generated by compatible software such as GWD will be able to support more sizes this creative asset can render. */
		additionalSizes?: Array<Size>;

		/** Possible alignments for an asset. This is a read-only field. Applicable to the following creative types: RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL. */
		alignment?: CreativeAssetAlignment;

		/** Artwork type of rich media creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
		artworkType?: CreativeArtworkType;

		/** Creative Asset ID. */
		assetIdentifier?: CreativeAssetId;

		/** Audio stream bit rate in kbps. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		audioBitRate?: number;

		/** Audio sample bit rate in hertz. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		audioSampleRate?: number;

		/** Creative Custom Event. */
		backupImageExit?: CreativeCustomEvent;

		/** Detected bit-rate for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		bitRate?: number;

		/** Rich media child asset type. This is a read-only field. Applicable to the following creative types: all VPAID. */
		childAssetType?: CreativeAssetChildAssetType;

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		collapsedSize?: Size;

		/** List of companion creatives assigned to an in-stream video creative asset. Acceptable values include IDs of existing flash and image creatives. Applicable to INSTREAM_VIDEO creative type with dynamicAssetSelection set to true. */
		companionCreativeIds?: Array<string>;

		/** Custom start time in seconds for making the asset visible. Applicable to the following creative types: all RICH_MEDIA. Value must be greater than or equal to 0. */
		customStartTimeValue?: number;

		/** List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		detectedFeatures?: Array<string>;

		/** Type of rich media asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
		displayType?: CreativeAssetDisplayType;

		/** Duration in seconds for which an asset will be displayed. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID_LINEAR_VIDEO. Value must be greater than or equal to 1. */
		duration?: number;

		/** Duration type for which an asset will be displayed. Applicable to the following creative types: all RICH_MEDIA. */
		durationType?: CreativeAssetDurationType;

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		expandedDimension?: Size;

		/** File size associated with this creative asset. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
		fileSize?: string;

		/** Flash version of the asset. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		flashVersion?: number;

		/** Video frame rate for video asset in frames per second. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
		frameRate?: number;

		/** Whether to hide Flash objects flag for an asset. Applicable to the following creative types: all RICH_MEDIA. */
		hideFlashObjects?: boolean;

		/** Whether to hide selection boxes flag for an asset. Applicable to the following creative types: all RICH_MEDIA. */
		hideSelectionBoxes?: boolean;

		/** Whether the asset is horizontally locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
		horizontallyLocked?: boolean;

		/** Numeric ID of this creative asset. This is a required field and should not be modified. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
		id?: string;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Detected duration for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		mediaDuration?: number;

		/** Detected MIME type for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		mimeType?: string;

		/** Offset Position. */
		offset?: OffsetPosition;

		/** Orientation of video asset. This is a read-only, auto-generated field. */
		orientation?: CreativeAssetOrientation;

		/** Whether the backup asset is original or changed by the user in Campaign Manager. Applicable to the following creative types: all RICH_MEDIA. */
		originalBackup?: boolean;

		/** Whether this asset is used as a polite load asset. */
		politeLoad?: boolean;

		/** Offset Position. */
		position?: OffsetPosition;

		/** Offset left unit for an asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
		positionLeftUnit?: CreativeAssetPositionLeftUnit;

		/** Offset top unit for an asset. This is a read-only field if the asset displayType is ASSET_DISPLAY_TYPE_OVERLAY. Applicable to the following creative types: all RICH_MEDIA. */
		positionTopUnit?: CreativeAssetPositionLeftUnit;

		/** Progressive URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
		progressiveServingUrl?: string;

		/** Whether the asset pushes down other content. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable when the asset offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height. */
		pushdown?: boolean;

		/** Pushdown duration in seconds for an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable when the asset pushdown field is true, the offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height. Acceptable values are 0 to 9.99, inclusive. */
		pushdownDuration?: number;

		/**
		 * Role of the asset in relation to creative. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. This is a required field.
		 * PRIMARY applies to DISPLAY, FLASH_INPAGE, HTML5_BANNER, IMAGE, DISPLAY_IMAGE_GALLERY, all RICH_MEDIA (which may contain multiple primary assets), and all VPAID creatives.
		 * BACKUP_IMAGE applies to FLASH_INPAGE, HTML5_BANNER, all RICH_MEDIA, and all VPAID creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
		 * ADDITIONAL_IMAGE and ADDITIONAL_FLASH apply to FLASH_INPAGE creatives.
		 * OTHER refers to assets from sources other than Campaign Manager, such as Studio uploaded assets, applicable to all RICH_MEDIA and all VPAID creatives.
		 * PARENT_VIDEO refers to videos uploaded by the user in Campaign Manager and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives.
		 * TRANSCODED_VIDEO refers to videos transcoded by Campaign Manager from PARENT_VIDEO assets and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives.
		 * ALTERNATE_VIDEO refers to the Campaign Manager representation of child asset videos from Studio, and is applicable to VPAID_LINEAR_VIDEO creatives. These cannot be added or removed within Campaign Manager.
		 * For VPAID_LINEAR_VIDEO creatives, PARENT_VIDEO, TRANSCODED_VIDEO and ALTERNATE_VIDEO assets that are marked active serve as backup in case the VPAID creative cannot be served. Only PARENT_VIDEO assets can be added or removed for an INSTREAM_VIDEO or VPAID_LINEAR_VIDEO creative.
		 * PARENT_AUDIO refers to audios uploaded by the user in Campaign Manager and is applicable to INSTREAM_AUDIO creatives.
		 * TRANSCODED_AUDIO refers to audios transcoded by Campaign Manager from PARENT_AUDIO assets and is applicable to INSTREAM_AUDIO creatives.
		 */
		role?: CreativeAssetRole;

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		size?: Size;

		/** Whether the asset is SSL-compliant. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
		sslCompliant?: boolean;

		/** Initial wait time type before making the asset visible. Applicable to the following creative types: all RICH_MEDIA. */
		startTimeType?: CreativeAssetStartTimeType;

		/** Streaming URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
		streamingServingUrl?: string;

		/** Whether the asset is transparent. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable to HTML5 assets. */
		transparency?: boolean;

		/** Whether the asset is vertically locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
		verticallyLocked?: boolean;

		/** Window mode options for flash assets. Applicable to the following creative types: FLASH_INPAGE, RICH_MEDIA_DISPLAY_EXPANDING, RICH_MEDIA_IM_EXPAND, RICH_MEDIA_DISPLAY_BANNER, and RICH_MEDIA_INPAGE_FLOATING. */
		windowMode?: CreativeAssetWindowMode;

		/** zIndex value of an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable to assets whose displayType is NOT one of the following types: ASSET_DISPLAY_TYPE_INPAGE or ASSET_DISPLAY_TYPE_OVERLAY. Acceptable values are -999999999 to 999999999, inclusive. */
		zIndex?: number;

		/** File name of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER. */
		zipFilename?: string;

		/** Size of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER. */
		zipFilesize?: string;
	}

	export enum CreativeAssetAlignment { ALIGNMENT_BOTTOM = 0, ALIGNMENT_LEFT = 1, ALIGNMENT_RIGHT = 2, ALIGNMENT_TOP = 3 }


	/** Creative Asset ID. */
	export interface CreativeAssetId {

		/** Name of the creative asset. This is a required field while inserting an asset. After insertion, this assetIdentifier is used to identify the uploaded asset. Characters in the name must be alphanumeric or one of the following: ".-_ ". Spaces are allowed. */
		name?: string;

		/** Type of asset to upload. This is a required field. FLASH and IMAGE are no longer supported for new uploads. All image assets should use HTML_IMAGE. */
		type?: CreativeAssetIdType;
	}

	export enum CreativeAssetIdType { AUDIO = 0, FLASH = 1, HTML = 2, HTML_IMAGE = 3, IMAGE = 4, VIDEO = 5 }

	export enum CreativeAssetChildAssetType { CHILD_ASSET_TYPE_DATA = 0, CHILD_ASSET_TYPE_FLASH = 1, CHILD_ASSET_TYPE_IMAGE = 2, CHILD_ASSET_TYPE_VIDEO = 3 }

	export enum CreativeAssetDisplayType { ASSET_DISPLAY_TYPE_BACKDROP = 0, ASSET_DISPLAY_TYPE_EXPANDING = 1, ASSET_DISPLAY_TYPE_FLASH_IN_FLASH = 2, ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING = 3, ASSET_DISPLAY_TYPE_FLOATING = 4, ASSET_DISPLAY_TYPE_INPAGE = 5, ASSET_DISPLAY_TYPE_OVERLAY = 6, ASSET_DISPLAY_TYPE_PEEL_DOWN = 7, ASSET_DISPLAY_TYPE_VPAID_LINEAR = 8, ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR = 9 }

	export enum CreativeAssetDurationType { ASSET_DURATION_TYPE_AUTO = 0, ASSET_DURATION_TYPE_CUSTOM = 1, ASSET_DURATION_TYPE_NONE = 2 }

	export enum CreativeAssetOrientation { LANDSCAPE = 0, PORTRAIT = 1, SQUARE = 2 }

	export enum CreativeAssetPositionLeftUnit { OFFSET_UNIT_PERCENT = 0, OFFSET_UNIT_PIXEL = 1, OFFSET_UNIT_PIXEL_FROM_CENTER = 2 }

	export enum CreativeAssetRole { ADDITIONAL_FLASH = 0, ADDITIONAL_IMAGE = 1, ALTERNATE_VIDEO = 2, BACKUP_IMAGE = 3, OTHER = 4, PARENT_AUDIO = 5, PARENT_VIDEO = 6, PRIMARY = 7, TRANSCODED_AUDIO = 8, TRANSCODED_VIDEO = 9 }

	export enum CreativeAssetStartTimeType { ASSET_START_TIME_TYPE_CUSTOM = 0, ASSET_START_TIME_TYPE_NONE = 1 }

	export enum CreativeAssetWindowMode { OPAQUE = 0, TRANSPARENT = 1, WINDOW = 2 }


	/** Creative Field Assignment. */
	export interface CreativeFieldAssignment {

		/** ID of the creative field. */
		creativeFieldId?: string;

		/** ID of the creative field value. */
		creativeFieldValueId?: string;
	}


	/** FsCommand. */
	export interface FsCommand {

		/** Distance from the left of the browser.Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER. */
		left?: number;

		/** Position in the browser where the window will open. */
		positionOption?: FsCommandPositionOption;

		/** Distance from the top of the browser. Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER. */
		top?: number;

		/** Height of the window. */
		windowHeight?: number;

		/** Width of the window. */
		windowWidth?: number;
	}

	export enum FsCommandPositionOption { CENTERED = 0, DISTANCE_FROM_TOP_LEFT_CORNER = 1 }


	/** Video Offset */
	export interface VideoOffset {

		/** Duration, as a percentage of video duration. Do not set when offsetSeconds is set. Acceptable values are 0 to 100, inclusive. */
		offsetPercentage?: number;

		/** Duration, in seconds. Do not set when offsetPercentage is set. Acceptable values are 0 to 86399, inclusive. */
		offsetSeconds?: number;
	}


	/** Third-party Tracking URL. */
	export interface ThirdPartyTrackingUrl {

		/** Third-party URL type for in-stream video and in-stream audio creatives. */
		thirdPartyUrlType?: ThirdPartyTrackingUrlThirdPartyUrlType;

		/** URL for the specified third-party URL type. */
		url?: string;
	}

	export enum ThirdPartyTrackingUrlThirdPartyUrlType { CLICK_TRACKING = 0, IMPRESSION = 1, RICH_MEDIA_BACKUP_IMPRESSION = 2, RICH_MEDIA_IMPRESSION = 3, RICH_MEDIA_RM_IMPRESSION = 4, SURVEY = 5, VIDEO_COMPLETE = 6, VIDEO_CUSTOM = 7, VIDEO_FIRST_QUARTILE = 8, VIDEO_FULLSCREEN = 9, VIDEO_MIDPOINT = 10, VIDEO_MUTE = 11, VIDEO_PAUSE = 12, VIDEO_PROGRESS = 13, VIDEO_REWIND = 14, VIDEO_SKIP = 15, VIDEO_START = 16, VIDEO_STOP = 17, VIDEO_THIRD_QUARTILE = 18 }

	export enum CreativeType { BRAND_SAFE_DEFAULT_INSTREAM_VIDEO = 0, CUSTOM_DISPLAY = 1, CUSTOM_DISPLAY_INTERSTITIAL = 2, DISPLAY = 3, DISPLAY_IMAGE_GALLERY = 4, DISPLAY_REDIRECT = 5, FLASH_INPAGE = 6, HTML5_BANNER = 7, IMAGE = 8, INSTREAM_AUDIO = 9, INSTREAM_VIDEO = 10, INSTREAM_VIDEO_REDIRECT = 11, INTERNAL_REDIRECT = 12, INTERSTITIAL_INTERNAL_REDIRECT = 13, RICH_MEDIA_DISPLAY_BANNER = 14, RICH_MEDIA_DISPLAY_EXPANDING = 15, RICH_MEDIA_DISPLAY_INTERSTITIAL = 16, RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL = 17, RICH_MEDIA_IM_EXPAND = 18, RICH_MEDIA_INPAGE_FLOATING = 19, RICH_MEDIA_MOBILE_IN_APP = 20, RICH_MEDIA_PEEL_DOWN = 21, TRACKING_TEXT = 22, VPAID_LINEAR_VIDEO = 23, VPAID_NON_LINEAR_VIDEO = 24 }


	/** A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID. */
	export interface UniversalAdId {

		/** Registry used for the Ad ID value. */
		registry?: UniversalAdIdRegistry;

		/** ID value for this creative. Only alphanumeric characters and the following symbols are valid: "_/\-". Maximum length is 64 characters. Read only when registry is DCM. */
		value?: string;
	}

	export enum UniversalAdIdRegistry { AD_ID_ORG = 0, CLEARCAST = 1, DCM = 2, OTHER = 3 }


	/** CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer to the creative sample code for how to upload assets and insert a creative. */
	export interface CreativeAssetMetadata {

		/** Creative Asset ID. */
		assetIdentifier?: CreativeAssetId;

		/** List of detected click tags for assets. This is a read-only, auto-generated field. This field is empty for a rich media asset. */
		clickTags?: Array<ClickTag>;

		/** List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field. */
		detectedFeatures?: Array<string>;

		/** Numeric ID of the asset. This is a read-only, auto-generated field. */
		id?: string;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeAssetMetadata". */
		kind?: string;

		/**
		 * Rules validated during code generation that generated a warning. This is a read-only, auto-generated field.
		 * Possible values are:
		 * - "ADMOB_REFERENCED"
		 * - "ASSET_FORMAT_UNSUPPORTED_DCM"
		 * - "ASSET_INVALID"
		 * - "CLICK_TAG_HARD_CODED"
		 * - "CLICK_TAG_INVALID"
		 * - "CLICK_TAG_IN_GWD"
		 * - "CLICK_TAG_MISSING"
		 * - "CLICK_TAG_MORE_THAN_ONE"
		 * - "CLICK_TAG_NON_TOP_LEVEL"
		 * - "COMPONENT_UNSUPPORTED_DCM"
		 * - "ENABLER_UNSUPPORTED_METHOD_DCM"
		 * - "EXTERNAL_FILE_REFERENCED"
		 * - "FILE_DETAIL_EMPTY"
		 * - "FILE_TYPE_INVALID"
		 * - "GWD_PROPERTIES_INVALID"
		 * - "HTML5_FEATURE_UNSUPPORTED"
		 * - "LINKED_FILE_NOT_FOUND"
		 * - "MAX_FLASH_VERSION_11"
		 * - "MRAID_REFERENCED"
		 * - "NOT_SSL_COMPLIANT"
		 * - "ORPHANED_ASSET"
		 * - "PRIMARY_HTML_MISSING"
		 * - "SVG_INVALID"
		 * - "ZIP_INVALID"
		 */
		warnedValidationRules?: Array<string>;
	}


	/** Contains properties of a creative field. */
	export interface CreativeField {

		/** Account ID of this creative field. This is a read-only field that can be left blank. */
		accountId?: string;

		/** Advertiser ID of this creative field. This is a required field on insertion. */
		advertiserId?: string;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** ID of this creative field. This is a read-only, auto-generated field. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeField". */
		kind?: string;

		/** Name of this creative field. This is a required field and must be less than 256 characters long and unique among creative fields of the same advertiser. */
		name?: string;

		/** Subaccount ID of this creative field. This is a read-only field that can be left blank. */
		subaccountId?: string;
	}


	/** Contains properties of a creative field value. */
	export interface CreativeFieldValue {

		/** ID of this creative field value. This is a read-only, auto-generated field. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValue". */
		kind?: string;

		/** Value of this creative field value. It needs to be less than 256 characters in length and unique per creative field. */
		value?: string;
	}


	/** Creative Field Value List Response */
	export interface CreativeFieldValuesListResponse {

		/** Creative field value collection. */
		creativeFieldValues?: Array<CreativeFieldValue>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValuesListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Creative Field List Response */
	export interface CreativeFieldsListResponse {

		/** Creative field collection. */
		creativeFields?: Array<CreativeField>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Contains properties of a creative group. */
	export interface CreativeGroup {

		/** Account ID of this creative group. This is a read-only field that can be left blank. */
		accountId?: string;

		/** Advertiser ID of this creative group. This is a required field on insertion. */
		advertiserId?: string;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Subgroup of the creative group. Assign your creative groups to a subgroup in order to filter or manage them more easily. This field is required on insertion and is read-only after insertion. Acceptable values are 1 to 2, inclusive. */
		groupNumber?: number;

		/** ID of this creative group. This is a read-only, auto-generated field. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroup". */
		kind?: string;

		/** Name of this creative group. This is a required field and must be less than 256 characters long and unique among creative groups of the same advertiser. */
		name?: string;

		/** Subaccount ID of this creative group. This is a read-only field that can be left blank. */
		subaccountId?: string;
	}


	/** Creative Group List Response */
	export interface CreativeGroupsListResponse {

		/** Creative group collection. */
		creativeGroups?: Array<CreativeGroup>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroupsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Creative List Response */
	export interface CreativesListResponse {

		/** Creative collection. */
		creatives?: Array<Creative>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativesListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Represents a Custom Rich Media Events group. */
	export interface CustomRichMediaEvents {

		/** List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName. */
		filteredEventIds?: Array<DimensionValue>;

		/** The kind of resource this is, in this case dfareporting#customRichMediaEvents. */
		kind?: string;
	}


	/** Custom Viewability Metric */
	export interface CustomViewabilityMetric {

		/** The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric. */
		configuration?: CustomViewabilityMetricConfiguration;

		/** ID of the custom viewability metric. */
		id?: string;

		/** Name of the custom viewability metric. */
		name?: string;
	}


	/** The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric. */
	export interface CustomViewabilityMetricConfiguration {

		/** Whether the video must be audible to count an impression. */
		audible?: boolean;

		/** The time in milliseconds the video must play for the Custom Viewability Metric to count an impression. If both this and timePercent are specified, the earlier of the two will be used. */
		timeMillis?: number;

		/** The percentage of video that must play for the Custom Viewability Metric to count an impression. If both this and timeMillis are specified, the earlier of the two will be used. */
		timePercent?: number;

		/** The percentage of video that must be on screen for the Custom Viewability Metric to count an impression. */
		viewabilityPercent?: number;
	}


	/** Represents a date range. */
	export interface DateRange {

		/** The end date of the date range, inclusive. A string of the format: "yyyy-MM-dd". */
		endDate?: Date;

		/** The kind of resource this is, in this case dfareporting#dateRange. */
		kind?: string;

		/** The date range relative to the date of when the report is run. */
		relativeDateRange?: DateRangeRelativeDateRange;

		/** The start date of the date range, inclusive. A string of the format: "yyyy-MM-dd". */
		startDate?: Date;
	}

	export enum DateRangeRelativeDateRange { LAST_14_DAYS = 0, LAST_24_MONTHS = 1, LAST_30_DAYS = 2, LAST_365_DAYS = 3, LAST_60_DAYS = 4, LAST_7_DAYS = 5, LAST_90_DAYS = 6, MONTH_TO_DATE = 7, PREVIOUS_MONTH = 8, PREVIOUS_QUARTER = 9, PREVIOUS_WEEK = 10, PREVIOUS_YEAR = 11, QUARTER_TO_DATE = 12, TODAY = 13, WEEK_TO_DATE = 14, YEAR_TO_DATE = 15, YESTERDAY = 16 }


	/** Google Ad Manager Settings */
	export interface DfpSettings {

		/** Ad Manager network code for this directory site. */
		dfpNetworkCode?: string;

		/** Ad Manager network name for this directory site. */
		dfpNetworkName?: string;

		/** Whether this directory site accepts programmatic placements. */
		programmaticPlacementAccepted?: boolean;

		/** Whether this directory site accepts publisher-paid tags. */
		pubPaidPlacementAccepted?: boolean;

		/** Whether this directory site is available only via Publisher Portal. */
		publisherPortalOnly?: boolean;
	}


	/** Represents a dimension filter. */
	export interface DimensionFilter {

		/** The name of the dimension to filter. */
		dimensionName?: string;

		/** The kind of resource this is, in this case dfareporting#dimensionFilter. */
		kind?: string;

		/** The value of the dimension to filter. */
		value?: string;
	}


	/** Represents the list of DimensionValue resources. */
	export interface DimensionValueList {

		/** The eTag of this response for caching purposes. */
		etag?: string;

		/** The dimension values returned in this response. */
		items?: Array<DimensionValue>;

		/** The kind of list this is, in this case dfareporting#dimensionValueList. */
		kind?: string;

		/** Continuation token used to page through dimension values. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. */
		nextPageToken?: string;
	}


	/** Represents a DimensionValuesRequest. */
	export interface DimensionValueRequest {

		/** The name of the dimension for which values should be requested. */
		dimensionName?: string;

		/** The end date of the date range for which to retrieve dimension values. A string of the format "yyyy-MM-dd". */
		endDate?: Date;

		/** The list of filters by which to filter values. The filters are ANDed. */
		filters?: Array<DimensionFilter>;

		/** The kind of request this is, in this case dfareporting#dimensionValueRequest. */
		kind?: string;

		/** The start date of the date range for which to retrieve dimension values. A string of the format "yyyy-MM-dd". */
		startDate?: Date;
	}


	/** DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement. */
	export interface DirectorySite {

		/** Whether this directory site is active. */
		active?: boolean;

		/** ID of this directory site. This is a read-only, auto-generated field. */
		id?: string;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/**
		 * Tag types for regular placements.
		 * Acceptable values are:
		 * - "STANDARD"
		 * - "IFRAME_JAVASCRIPT_INPAGE"
		 * - "INTERNAL_REDIRECT_INPAGE"
		 * - "JAVASCRIPT_INPAGE"
		 */
		inpageTagFormats?: Array<string>;

		/**
		 * Tag types for interstitial placements.
		 * Acceptable values are:
		 * - "IFRAME_JAVASCRIPT_INTERSTITIAL"
		 * - "INTERNAL_REDIRECT_INTERSTITIAL"
		 * - "JAVASCRIPT_INTERSTITIAL"
		 */
		interstitialTagFormats?: Array<string>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySite". */
		kind?: string;

		/** Name of this directory site. */
		name?: string;

		/** Directory Site Settings */
		settings?: DirectorySiteSettings;

		/** URL of this directory site. */
		url?: string;
	}


	/** Directory Site Settings */
	export interface DirectorySiteSettings {

		/** Whether this directory site has disabled active view creatives. */
		activeViewOptOut?: boolean;

		/** Google Ad Manager Settings */
		dfpSettings?: DfpSettings;

		/** Whether this site accepts in-stream video ads. */
		instreamVideoPlacementAccepted?: boolean;

		/** Whether this site accepts interstitial ads. */
		interstitialPlacementAccepted?: boolean;
	}


	/** Directory Site List Response */
	export interface DirectorySitesListResponse {

		/** Directory site collection. */
		directorySites?: Array<DirectorySite>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySitesListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Contains properties of a dynamic targeting key. Dynamic targeting keys are unique, user-friendly labels, created at the advertiser level in DCM, that can be assigned to ads, creatives, and placements and used for targeting with Studio dynamic creatives. Use these labels instead of numeric Campaign Manager IDs (such as placement IDs) to save time and avoid errors in your dynamic feeds. */
	export interface DynamicTargetingKey {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKey". */
		kind?: string;

		/** Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase. */
		name?: string;

		/** ID of the object of this dynamic targeting key. This is a required field. */
		objectId?: string;

		/** Type of the object of this dynamic targeting key. This is a required field. */
		objectType?: DynamicTargetingKeyObjectType;
	}

	export enum DynamicTargetingKeyObjectType { OBJECT_AD = 0, OBJECT_ADVERTISER = 1, OBJECT_CREATIVE = 2, OBJECT_PLACEMENT = 3 }


	/** Dynamic Targeting Key List Response */
	export interface DynamicTargetingKeysListResponse {

		/** Dynamic targeting key collection. */
		dynamicTargetingKeys?: Array<DynamicTargetingKey>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKeysListResponse". */
		kind?: string;
	}


	/** Contains properties of an event tag. */
	export interface EventTag {

		/** Account ID of this event tag. This is a read-only field that can be left blank. */
		accountId?: string;

		/** Advertiser ID of this event tag. This field or the campaignId field is required on insertion. */
		advertiserId?: string;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Campaign ID of this event tag. This field or the advertiserId field is required on insertion. */
		campaignId?: string;

		/** Represents a DimensionValue resource. */
		campaignIdDimensionValue?: DimensionValue;

		/** Whether this event tag should be automatically enabled for all of the advertiser's campaigns and ads. */
		enabledByDefault?: boolean;

		/** Whether to remove this event tag from ads that are trafficked through Display & Video 360 to Ad Exchange. This may be useful if the event tag uses a pixel that is unapproved for Ad Exchange bids on one or more networks, such as the Google Display Network. */
		excludeFromAdxRequests?: boolean;

		/** ID of this event tag. This is a read-only, auto-generated field. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTag". */
		kind?: string;

		/** Name of this event tag. This is a required field and must be less than 256 characters long. */
		name?: string;

		/** Site filter type for this event tag. If no type is specified then the event tag will be applied to all sites. */
		siteFilterType?: EventTagSiteFilterType;

		/** Filter list of site IDs associated with this event tag. The siteFilterType determines whether this is a whitelist or blacklist filter. */
		siteIds?: Array<string>;

		/** Whether this tag is SSL-compliant or not. This is a read-only field. */
		sslCompliant?: boolean;

		/** Status of this event tag. Must be ENABLED for this event tag to fire. This is a required field. */
		status?: EventTagStatus;

		/** Subaccount ID of this event tag. This is a read-only field that can be left blank. */
		subaccountId?: string;

		/** Event tag type. Can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking. This is a required field. */
		type?: EventTagType;

		/** Payload URL for this event tag. The URL on a click-through event tag should have a landing page URL appended to the end of it. This field is required on insertion. */
		url?: string;

		/** Number of times the landing page URL should be URL-escaped before being appended to the click-through event tag URL. Only applies to click-through event tags as specified by the event tag type. */
		urlEscapeLevels?: number;
	}

	export enum EventTagSiteFilterType { BLACKLIST = 0, WHITELIST = 1 }

	export enum EventTagStatus { DISABLED = 0, ENABLED = 1 }

	export enum EventTagType { CLICK_THROUGH_EVENT_TAG = 0, IMPRESSION_IMAGE_EVENT_TAG = 1, IMPRESSION_JAVASCRIPT_EVENT_TAG = 2 }


	/** Event Tag List Response */
	export interface EventTagsListResponse {

		/** Event tag collection. */
		eventTags?: Array<EventTag>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTagsListResponse". */
		kind?: string;
	}


	/** Represents a File resource. A file contains the metadata for a report run. It shows the status of the run and holds the URLs to the generated report data if the run is finished and the status is "REPORT_AVAILABLE". */
	export interface File {

		/** Represents a date range. */
		dateRange?: DateRange;

		/** Etag of this resource. */
		etag?: string;

		/** The filename of the file. */
		fileName?: string;

		/** The output format of the report. Only available once the file is available. */
		format?: string;

		/** The unique ID of this report file. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#file". */
		kind?: string;

		/** The timestamp in milliseconds since epoch when this file was last modified. */
		lastModifiedTime?: string;

		/** The ID of the report this file was generated from. */
		reportId?: string;

		/** The status of the report file. */
		status?: string;

		/** The URLs where the completed report file can be downloaded. */
		urls?: FileUrls;
	}

	export interface FileUrls {

		/** The URL for downloading the report data through the API. */
		apiUrl?: string;

		/** The URL for downloading the report data through a browser. */
		browserUrl?: string;
	}

	export interface FileList {

		/** Etag of this resource. */
		etag?: string;
		items?: Array<File>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#fileList". */
		kind?: string;

		/** Continuation token used to page through files. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. */
		nextPageToken?: string;
	}


	/** Flight */
	export interface Flight {

		/** Inventory item flight end date. */
		endDate?: Date;

		/** Rate or cost of this flight. */
		rateOrCost?: string;

		/** Inventory item flight start date. */
		startDate?: Date;

		/** Units of this flight. */
		units?: string;
	}


	/** Floodlight Activity GenerateTag Response */
	export interface FloodlightActivitiesGenerateTagResponse {

		/** Generated tag for this Floodlight activity. For global site tags, this is the event snippet. */
		floodlightActivityTag?: string;

		/** The global snippet section of a global site tag. The global site tag sets new cookies on your domain, which will store a unique identifier for a user or the ad click that brought the user to your site. Learn more. */
		globalSiteTagGlobalSnippet?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesGenerateTagResponse". */
		kind?: string;
	}


	/** Floodlight Activity List Response */
	export interface FloodlightActivitiesListResponse {

		/** Floodlight activity collection. */
		floodlightActivities?: Array<FloodlightActivity>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Contains properties of a Floodlight activity. */
	export interface FloodlightActivity {

		/** Account ID of this floodlight activity. This is a read-only field that can be left blank. */
		accountId?: string;

		/** Advertiser ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's advertiser or the existing activity's advertiser. */
		advertiserId?: string;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Code type used for cache busting in the generated tag. Applicable only when floodlightActivityGroupType is COUNTER and countingMethod is STANDARD_COUNTING or UNIQUE_COUNTING. */
		cacheBustingType?: FloodlightActivityCacheBustingType;

		/** Counting method for conversions for this floodlight activity. This is a required field. */
		countingMethod?: FloodlightActivityCountingMethod;

		/** Dynamic floodlight tags. */
		defaultTags?: Array<FloodlightActivityDynamicTag>;

		/** URL where this tag will be deployed. If specified, must be less than 256 characters long. */
		expectedUrl?: string;

		/** Floodlight activity group ID of this floodlight activity. This is a required field. */
		floodlightActivityGroupId?: string;

		/** Name of the associated floodlight activity group. This is a read-only field. */
		floodlightActivityGroupName?: string;

		/** Tag string of the associated floodlight activity group. This is a read-only field. */
		floodlightActivityGroupTagString?: string;

		/** Type of the associated floodlight activity group. This is a read-only field. */
		floodlightActivityGroupType?: FloodlightActivityFloodlightActivityGroupType;

		/** Floodlight configuration ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's floodlight configuration or from the existing activity's floodlight configuration. */
		floodlightConfigurationId?: string;

		/** Represents a DimensionValue resource. */
		floodlightConfigurationIdDimensionValue?: DimensionValue;

		/** The type of Floodlight tag this activity will generate. This is a required field. */
		floodlightTagType?: FloodlightActivityFloodlightTagType;

		/** Whether this activity is archived. */
		hidden?: boolean;

		/** ID of this floodlight activity. This is a read-only, auto-generated field. */
		id?: string;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivity". */
		kind?: string;

		/** Name of this floodlight activity. This is a required field. Must be less than 129 characters long and cannot contain quotes. */
		name?: string;

		/** General notes or implementation instructions for the tag. */
		notes?: string;

		/** Publisher dynamic floodlight tags. */
		publisherTags?: Array<FloodlightActivityPublisherDynamicTag>;

		/** Whether this tag should use SSL. */
		secure?: boolean;

		/** Whether the floodlight activity is SSL-compliant. This is a read-only field, its value detected by the system from the floodlight tags. */
		sslCompliant?: boolean;

		/** Whether this floodlight activity must be SSL-compliant. */
		sslRequired?: boolean;

		/** Subaccount ID of this floodlight activity. This is a read-only field that can be left blank. */
		subaccountId?: string;

		/** Tag format type for the floodlight activity. If left blank, the tag format will default to HTML. */
		tagFormat?: FloodlightActivityTagFormat;

		/** Value of the cat= parameter in the floodlight tag, which the ad servers use to identify the activity. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being [a-z][A-Z][0-9][-][ _ ]. This tag string must also be unique among activities of the same activity group. This field is read-only after insertion. */
		tagString?: string;

		/**
		 * List of the user-defined variables used by this conversion tag. These map to the "u[1-100]=" in the tags. Each of these can have a user defined type.
		 * Acceptable values are U1 to U100, inclusive.
		 */
		userDefinedVariableTypes?: Array<CustomFloodlightVariableType>;
	}

	export enum FloodlightActivityCacheBustingType { ACTIVE_SERVER_PAGE = 0, COLD_FUSION = 1, JAVASCRIPT = 2, JSP = 3, PHP = 4 }

	export enum FloodlightActivityCountingMethod { ITEMS_SOLD_COUNTING = 0, SESSION_COUNTING = 1, STANDARD_COUNTING = 2, TRANSACTIONS_COUNTING = 3, UNIQUE_COUNTING = 4 }


	/** Dynamic Tag */
	export interface FloodlightActivityDynamicTag {

		/** ID of this dynamic tag. This is a read-only, auto-generated field. */
		id?: string;

		/** Name of this tag. */
		name?: string;

		/** Tag code. */
		tag?: string;
	}

	export enum FloodlightActivityFloodlightActivityGroupType { COUNTER = 0, SALE = 1 }

	export enum FloodlightActivityFloodlightTagType { GLOBAL_SITE_TAG = 0, IFRAME = 1, IMAGE = 2 }


	/** Publisher Dynamic Tag */
	export interface FloodlightActivityPublisherDynamicTag {

		/** Whether this tag is applicable only for click-throughs. */
		clickThrough?: boolean;

		/** Directory site ID of this dynamic tag. This is a write-only field that can be used as an alternative to the siteId field. When this resource is retrieved, only the siteId field will be populated. */
		directorySiteId?: string;

		/** Dynamic Tag */
		dynamicTag?: FloodlightActivityDynamicTag;

		/** Site ID of this dynamic tag. */
		siteId?: string;

		/** Represents a DimensionValue resource. */
		siteIdDimensionValue?: DimensionValue;

		/** Whether this tag is applicable only for view-throughs. */
		viewThrough?: boolean;
	}

	export enum FloodlightActivityTagFormat { HTML = 0, XHTML = 1 }


	/** Contains properties of a Floodlight activity group. */
	export interface FloodlightActivityGroup {

		/** Account ID of this floodlight activity group. This is a read-only field that can be left blank. */
		accountId?: string;

		/** Advertiser ID of this floodlight activity group. If this field is left blank, the value will be copied over either from the floodlight configuration's advertiser or from the existing activity group's advertiser. */
		advertiserId?: string;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Floodlight configuration ID of this floodlight activity group. This is a required field. */
		floodlightConfigurationId?: string;

		/** Represents a DimensionValue resource. */
		floodlightConfigurationIdDimensionValue?: DimensionValue;

		/** ID of this floodlight activity group. This is a read-only, auto-generated field. */
		id?: string;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroup". */
		kind?: string;

		/** Name of this floodlight activity group. This is a required field. Must be less than 65 characters long and cannot contain quotes. */
		name?: string;

		/** Subaccount ID of this floodlight activity group. This is a read-only field that can be left blank. */
		subaccountId?: string;

		/** Value of the type= parameter in the floodlight tag, which the ad servers use to identify the activity group that the activity belongs to. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being [a-z][A-Z][0-9][-][ _ ]. This tag string must also be unique among activity groups of the same floodlight configuration. This field is read-only after insertion. */
		tagString?: string;

		/** Type of the floodlight activity group. This is a required field that is read-only after insertion. */
		type?: FloodlightActivityFloodlightActivityGroupType;
	}


	/** Floodlight Activity Group List Response */
	export interface FloodlightActivityGroupsListResponse {

		/** Floodlight activity group collection. */
		floodlightActivityGroups?: Array<FloodlightActivityGroup>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroupsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Contains properties of a Floodlight configuration. */
	export interface FloodlightConfiguration {

		/** Account ID of this floodlight configuration. This is a read-only field that can be left blank. */
		accountId?: string;

		/** Advertiser ID of the parent advertiser of this floodlight configuration. */
		advertiserId?: string;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Whether advertiser data is shared with Google Analytics. */
		analyticsDataSharingEnabled?: boolean;

		/** Custom Viewability Metric */
		customViewabilityMetric?: CustomViewabilityMetric;

		/** Whether the exposure-to-conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting. */
		exposureToConversionEnabled?: boolean;

		/** Day that will be counted as the first day of the week in reports. This is a required field. */
		firstDayOfWeek?: FloodlightConfigurationFirstDayOfWeek;

		/** ID of this floodlight configuration. This is a read-only, auto-generated field. */
		id?: string;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Whether in-app attribution tracking is enabled. */
		inAppAttributionTrackingEnabled?: boolean;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfiguration". */
		kind?: string;

		/** Lookback configuration settings. */
		lookbackConfiguration?: LookbackConfiguration;

		/** Types of attribution options for natural search conversions. */
		naturalSearchConversionAttributionOption?: FloodlightConfigurationNaturalSearchConversionAttributionOption;

		/** Omniture Integration Settings. */
		omnitureSettings?: OmnitureSettings;

		/** Subaccount ID of this floodlight configuration. This is a read-only field that can be left blank. */
		subaccountId?: string;

		/** Dynamic and Image Tag Settings. */
		tagSettings?: TagSettings;

		/** List of third-party authentication tokens enabled for this configuration. */
		thirdPartyAuthenticationTokens?: Array<ThirdPartyAuthenticationToken>;

		/** List of user defined variables enabled for this configuration. */
		userDefinedVariableConfigurations?: Array<UserDefinedVariableConfiguration>;
	}

	export enum FloodlightConfigurationFirstDayOfWeek { MONDAY = 0, SUNDAY = 1 }

	export enum FloodlightConfigurationNaturalSearchConversionAttributionOption { EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION = 0, INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION = 1, INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION = 2 }


	/** Omniture Integration Settings. */
	export interface OmnitureSettings {

		/** Whether placement cost data will be sent to Omniture. This property can be enabled only if omnitureIntegrationEnabled is true. */
		omnitureCostDataEnabled?: boolean;

		/** Whether Omniture integration is enabled. This property can be enabled only when the "Advanced Ad Serving" account setting is enabled. */
		omnitureIntegrationEnabled?: boolean;
	}


	/** Dynamic and Image Tag Settings. */
	export interface TagSettings {

		/** Whether dynamic floodlight tags are enabled. */
		dynamicTagEnabled?: boolean;

		/** Whether image tags are enabled. */
		imageTagEnabled?: boolean;
	}


	/** Third Party Authentication Token */
	export interface ThirdPartyAuthenticationToken {

		/** Name of the third-party authentication token. */
		name?: string;

		/** Value of the third-party authentication token. This is a read-only, auto-generated field. */
		value?: string;
	}


	/** User Defined Variable configuration. */
	export interface UserDefinedVariableConfiguration {

		/** Data type for the variable. This is a required field. */
		dataType?: UserDefinedVariableConfigurationDataType;

		/** User-friendly name for the variable which will appear in reports. This is a required field, must be less than 64 characters long, and cannot contain the following characters: ""<>". */
		reportName?: string;

		/** Variable name in the tag. This is a required field. */
		variableType?: CustomFloodlightVariableType;
	}

	export enum UserDefinedVariableConfigurationDataType { NUMBER = 0, STRING = 1 }


	/** Floodlight Configuration List Response */
	export interface FloodlightConfigurationsListResponse {

		/** Floodlight configuration collection. */
		floodlightConfigurations?: Array<FloodlightConfiguration>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfigurationsListResponse". */
		kind?: string;
	}


	/** Represents a buy from the Planning inventory store. */
	export interface InventoryItem {

		/** Account ID of this inventory item. */
		accountId?: string;

		/** Ad slots of this inventory item. If this inventory item represents a standalone placement, there will be exactly one ad slot. If this inventory item represents a placement group, there will be more than one ad slot, each representing one child placement in that placement group. */
		adSlots?: Array<AdSlot>;

		/** Advertiser ID of this inventory item. */
		advertiserId?: string;

		/** Content category ID of this inventory item. */
		contentCategoryId?: string;

		/** Estimated click-through rate of this inventory item. */
		estimatedClickThroughRate?: string;

		/** Estimated conversion rate of this inventory item. */
		estimatedConversionRate?: string;

		/** ID of this inventory item. */
		id?: string;

		/** Whether this inventory item is in plan. */
		inPlan?: boolean;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItem". */
		kind?: string;

		/** Modification timestamp. */
		lastModifiedInfo?: LastModifiedInfo;

		/** Name of this inventory item. For standalone inventory items, this is the same name as that of its only ad slot. For group inventory items, this can differ from the name of any of its ad slots. */
		name?: string;

		/** Negotiation channel ID of this inventory item. */
		negotiationChannelId?: string;

		/** Order ID of this inventory item. */
		orderId?: string;

		/** Placement strategy ID of this inventory item. */
		placementStrategyId?: string;

		/** Pricing Information */
		pricing?: Pricing;

		/** Project ID of this inventory item. */
		projectId?: string;

		/** RFP ID of this inventory item. */
		rfpId?: string;

		/** ID of the site this inventory item is associated with. */
		siteId?: string;

		/** Subaccount ID of this inventory item. */
		subaccountId?: string;

		/** Type of inventory item. */
		type?: InventoryItemType;
	}


	/** Pricing Information */
	export interface Pricing {

		/** Cap cost type of this inventory item. */
		capCostType?: PricingCapCostType;

		/** End date of this inventory item. */
		endDate?: Date;

		/** Flights of this inventory item. A flight (a.k.a. pricing period) represents the inventory item pricing information for a specific period of time. */
		flights?: Array<Flight>;

		/** Group type of this inventory item if it represents a placement group. Is null otherwise. There are two type of placement groups: PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE is a simple group of inventory items that acts as a single pricing point for a group of tags. PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK is a group of inventory items that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned inventory items to be marked as primary. */
		groupType?: PricingGroupType;

		/** Pricing type of this inventory item. */
		pricingType?: PricingPricingType;

		/** Start date of this inventory item. */
		startDate?: Date;
	}

	export enum PricingCapCostType { PLANNING_PLACEMENT_CAP_COST_TYPE_CUMULATIVE = 0, PLANNING_PLACEMENT_CAP_COST_TYPE_MONTHLY = 1, PLANNING_PLACEMENT_CAP_COST_TYPE_NONE = 2 }

	export enum PricingGroupType { PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE = 0, PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK = 1 }

	export enum PricingPricingType { PLANNING_PLACEMENT_PRICING_TYPE_CLICKS = 0, PLANNING_PLACEMENT_PRICING_TYPE_CPA = 1, PLANNING_PLACEMENT_PRICING_TYPE_CPC = 2, PLANNING_PLACEMENT_PRICING_TYPE_CPM = 3, PLANNING_PLACEMENT_PRICING_TYPE_CPM_ACTIVEVIEW = 4, PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_CLICKS = 5, PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_IMPRESSIONS = 6, PLANNING_PLACEMENT_PRICING_TYPE_IMPRESSIONS = 7 }

	export enum InventoryItemType { PLANNING_PLACEMENT_TYPE_CREDIT = 0, PLANNING_PLACEMENT_TYPE_REGULAR = 1 }


	/** Inventory item List Response */
	export interface InventoryItemsListResponse {

		/** Inventory item collection */
		inventoryItems?: Array<InventoryItem>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItemsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Language List Response */
	export interface LanguagesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#languagesListResponse". */
		kind?: string;

		/** Language collection. */
		languages?: Array<Language>;
	}


	/** A group clause made up of list population terms representing constraints joined by ORs. */
	export interface ListPopulationClause {

		/** Terms of this list population clause. Each clause is made up of list population terms representing constraints and are joined by ORs. */
		terms?: Array<ListPopulationTerm>;
	}


	/** Remarketing List Population Rule Term. */
	export interface ListPopulationTerm {

		/** Will be true if the term should check if the user is in the list and false if the term should check if the user is not in the list. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. False by default. */
		contains?: boolean;

		/** Whether to negate the comparison result of this term during rule evaluation. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
		negation?: boolean;

		/** Comparison operator of this term. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
		operator?: ListPopulationTermOperator;

		/** ID of the list in question. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. */
		remarketingListId?: string;

		/** List population term type determines the applicable fields in this object. If left unset or set to CUSTOM_VARIABLE_TERM, then variableName, variableFriendlyName, operator, value, and negation are applicable. If set to LIST_MEMBERSHIP_TERM then remarketingListId and contains are applicable. If set to REFERRER_TERM then operator, value, and negation are applicable. */
		type?: ListPopulationTermType;

		/** Literal to compare the variable to. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
		value?: string;

		/** Friendly name of this term's variable. This is a read-only, auto-generated field. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM. */
		variableFriendlyName?: string;

		/** Name of the variable (U1, U2, etc.) being compared in this term. This field is only relevant when type is set to null, CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
		variableName?: string;
	}

	export enum ListPopulationTermOperator { NUM_EQUALS = 0, NUM_GREATER_THAN = 1, NUM_GREATER_THAN_EQUAL = 2, NUM_LESS_THAN = 3, NUM_LESS_THAN_EQUAL = 4, STRING_CONTAINS = 5, STRING_EQUALS = 6 }

	export enum ListPopulationTermType { CUSTOM_VARIABLE_TERM = 0, LIST_MEMBERSHIP_TERM = 1, REFERRER_TERM = 2 }


	/** Remarketing List Population Rule. */
	export interface ListPopulationRule {

		/** Floodlight activity ID associated with this rule. This field can be left blank. */
		floodlightActivityId?: string;

		/** Name of floodlight activity associated with this rule. This is a read-only, auto-generated field. */
		floodlightActivityName?: string;

		/** Clauses that make up this list population rule. Clauses are joined by ANDs, and the clauses themselves are made up of list population terms which are joined by ORs. */
		listPopulationClauses?: Array<ListPopulationClause>;
	}


	/** Metro List Response */
	export interface MetrosListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#metrosListResponse". */
		kind?: string;

		/** Metro collection. */
		metros?: Array<Metro>;
	}


	/** Mobile app List Response */
	export interface MobileAppsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileAppsListResponse". */
		kind?: string;

		/** Mobile apps collection. */
		mobileApps?: Array<MobileApp>;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;
	}


	/** Mobile Carrier List Response */
	export interface MobileCarriersListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarriersListResponse". */
		kind?: string;

		/** Mobile carrier collection. */
		mobileCarriers?: Array<MobileCarrier>;
	}


	/** Operating System Version List Response */
	export interface OperatingSystemVersionsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersionsListResponse". */
		kind?: string;

		/** Operating system version collection. */
		operatingSystemVersions?: Array<OperatingSystemVersion>;
	}


	/** Operating System List Response */
	export interface OperatingSystemsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemsListResponse". */
		kind?: string;

		/** Operating system collection. */
		operatingSystems?: Array<OperatingSystem>;
	}


	/** Describes properties of a Planning order. */
	export interface Order {

		/** Account ID of this order. */
		accountId?: string;

		/** Advertiser ID of this order. */
		advertiserId?: string;

		/** IDs for users that have to approve documents created for this order. */
		approverUserProfileIds?: Array<string>;

		/** Buyer invoice ID associated with this order. */
		buyerInvoiceId?: string;

		/** Name of the buyer organization. */
		buyerOrganizationName?: string;

		/** Comments in this order. */
		comments?: string;

		/** Contacts for this order. */
		contacts?: Array<OrderContact>;

		/** ID of this order. This is a read-only, auto-generated field. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#order". */
		kind?: string;

		/** Modification timestamp. */
		lastModifiedInfo?: LastModifiedInfo;

		/** Name of this order. */
		name?: string;

		/** Notes of this order. */
		notes?: string;

		/** ID of the terms and conditions template used in this order. */
		planningTermId?: string;

		/** Project ID of this order. */
		projectId?: string;

		/** Seller order ID associated with this order. */
		sellerOrderId?: string;

		/** Name of the seller organization. */
		sellerOrganizationName?: string;

		/** Site IDs this order is associated with. */
		siteId?: Array<string>;

		/** Free-form site names this order is associated with. */
		siteNames?: Array<string>;

		/** Subaccount ID of this order. */
		subaccountId?: string;

		/** Terms and conditions of this order. */
		termsAndConditions?: string;
	}


	/** Contact of an order. */
	export interface OrderContact {

		/** Free-form information about this contact. It could be any information related to this contact in addition to type, title, name, and signature user profile ID. */
		contactInfo?: string;

		/** Name of this contact. */
		contactName?: string;

		/** Title of this contact. */
		contactTitle?: string;

		/** Type of this contact. */
		contactType?: OrderContactContactType;

		/** ID of the user profile containing the signature that will be embedded into order documents. */
		signatureUserProfileId?: string;
	}

	export enum OrderContactContactType { PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT = 0, PLANNING_ORDER_CONTACT_BUYER_CONTACT = 1, PLANNING_ORDER_CONTACT_SELLER_CONTACT = 2 }


	/** Contains properties of a Planning order document. */
	export interface OrderDocument {

		/** Account ID of this order document. */
		accountId?: string;

		/** Advertiser ID of this order document. */
		advertiserId?: string;

		/** The amended order document ID of this order document. An order document can be created by optionally amending another order document so that the change history can be preserved. */
		amendedOrderDocumentId?: string;

		/** IDs of users who have approved this order document. */
		approvedByUserProfileIds?: Array<string>;

		/** Whether this order document is cancelled. */
		cancelled?: boolean;

		/** Modification timestamp. */
		createdInfo?: LastModifiedInfo;

		/** Effective date of this order document. */
		effectiveDate?: Date;

		/** ID of this order document. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#orderDocument". */
		kind?: string;

		/** List of email addresses that received the last sent document. */
		lastSentRecipients?: Array<string>;

		/** Timestamp of the last email sent with this order document. */
		lastSentTime?: Date;

		/** ID of the order from which this order document is created. */
		orderId?: string;

		/** Project ID of this order document. */
		projectId?: string;

		/** Whether this order document has been signed. */
		signed?: boolean;

		/** Subaccount ID of this order document. */
		subaccountId?: string;

		/** Title of this order document. */
		title?: string;

		/** Type of this order document */
		type?: OrderDocumentType;
	}

	export enum OrderDocumentType { PLANNING_ORDER_TYPE_CHANGE_ORDER = 0, PLANNING_ORDER_TYPE_INSERTION_ORDER = 1 }


	/** Order document List Response */
	export interface OrderDocumentsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#orderDocumentsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;

		/** Order document collection */
		orderDocuments?: Array<OrderDocument>;
	}


	/** Order List Response */
	export interface OrdersListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#ordersListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;

		/** Order collection. */
		orders?: Array<Order>;
	}


	/** Contains properties of a placement. */
	export interface Placement {

		/** Account ID of this placement. This field can be left blank. */
		accountId?: string;

		/** Whether this placement opts out of ad blocking. When true, ad blocking is disabled for this placement. When false, the campaign and site settings take effect. */
		adBlockingOptOut?: boolean;

		/** Additional sizes associated with this placement. When inserting or updating a placement, only the size ID field is used. */
		additionalSizes?: Array<Size>;

		/** Advertiser ID of this placement. This field can be left blank. */
		advertiserId?: string;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Whether this placement is archived. */
		archived?: boolean;

		/** Campaign ID of this placement. This field is a required field on insertion. */
		campaignId?: string;

		/** Represents a DimensionValue resource. */
		campaignIdDimensionValue?: DimensionValue;

		/** Comments for this placement. */
		comment?: string;

		/** Placement compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering on desktop, on mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are no longer allowed for new placement insertions. Instead, use DISPLAY or DISPLAY_INTERSTITIAL. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. This field is required on insertion. */
		compatibility?: AdCompatibility;

		/** ID of the content category assigned to this placement. */
		contentCategoryId?: string;

		/** Modification timestamp. */
		createInfo?: LastModifiedInfo;

		/** Directory site ID of this placement. On insert, you must set either this field or the siteId field to specify the site associated with this placement. This is a required field that is read-only after insertion. */
		directorySiteId?: string;

		/** Represents a DimensionValue resource. */
		directorySiteIdDimensionValue?: DimensionValue;

		/** External ID for this placement. */
		externalId?: string;

		/** ID of this placement. This is a read-only, auto-generated field. */
		id?: string;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Key name of this placement. This is a read-only, auto-generated field. */
		keyName?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placement". */
		kind?: string;

		/** Modification timestamp. */
		lastModifiedInfo?: LastModifiedInfo;

		/** Lookback configuration settings. */
		lookbackConfiguration?: LookbackConfiguration;

		/** Name of this placement.This is a required field and must be less than 256 characters long. */
		name?: string;

		/** Whether payment was approved for this placement. This is a read-only field relevant only to publisher-paid placements. */
		paymentApproved?: boolean;

		/** Payment source for this placement. This is a required field that is read-only after insertion. */
		paymentSource?: PlacementPaymentSource;

		/** ID of this placement's group, if applicable. */
		placementGroupId?: string;

		/** Represents a DimensionValue resource. */
		placementGroupIdDimensionValue?: DimensionValue;

		/** ID of the placement strategy assigned to this placement. */
		placementStrategyId?: string;

		/** Pricing Schedule */
		pricingSchedule?: PricingSchedule;

		/** Whether this placement is the primary placement of a roadblock (placement group). You cannot change this field from true to false. Setting this field to true will automatically set the primary field on the original primary placement of the roadblock to false, and it will automatically set the roadblock's primaryPlacementId field to the ID of this placement. */
		primary?: boolean;

		/** Modification timestamp. */
		publisherUpdateInfo?: LastModifiedInfo;

		/** Site ID associated with this placement. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement. This is a required field that is read-only after insertion. */
		siteId?: string;

		/** Represents a DimensionValue resource. */
		siteIdDimensionValue?: DimensionValue;

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		size?: Size;

		/** Whether creatives assigned to this placement must be SSL-compliant. */
		sslRequired?: boolean;

		/** Third-party placement status. */
		status?: PlacementStatus;

		/** Subaccount ID of this placement. This field can be left blank. */
		subaccountId?: string;

		/**
		 * Tag formats to generate for this placement. This field is required on insertion.
		 * Acceptable values are:
		 * - "PLACEMENT_TAG_STANDARD"
		 * - "PLACEMENT_TAG_IFRAME_JAVASCRIPT"
		 * - "PLACEMENT_TAG_IFRAME_ILAYER"
		 * - "PLACEMENT_TAG_INTERNAL_REDIRECT"
		 * - "PLACEMENT_TAG_JAVASCRIPT"
		 * - "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT"
		 * - "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT"
		 * - "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT"
		 * - "PLACEMENT_TAG_CLICK_COMMANDS"
		 * - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH"
		 * - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3"
		 * - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4"
		 * - "PLACEMENT_TAG_TRACKING"
		 * - "PLACEMENT_TAG_TRACKING_IFRAME"
		 * - "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
		 */
		tagFormats?: Array<string>;

		/** Tag Settings */
		tagSetting?: TagSetting;

		/** Whether Verification and ActiveView are disabled for in-stream video creatives for this placement. The same setting videoActiveViewOptOut exists on the site level -- the opt out occurs if either of these settings are true. These settings are distinct from DirectorySites.settings.activeViewOptOut or Sites.siteSettings.activeViewOptOut which only apply to display ads. However, Accounts.activeViewOptOut opts out both video traffic, as well as display ads, from Verification and ActiveView. */
		videoActiveViewOptOut?: boolean;

		/** Video Settings */
		videoSettings?: VideoSettings;

		/**
		 * VPAID adapter setting for this placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to this placement.
		 * Note: Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.
		 */
		vpaidAdapterChoice?: PlacementVpaidAdapterChoice;
	}

	export enum PlacementPaymentSource { PLACEMENT_AGENCY_PAID = 0, PLACEMENT_PUBLISHER_PAID = 1 }


	/** Pricing Schedule */
	export interface PricingSchedule {

		/** Placement cap cost option. */
		capCostOption?: PricingScheduleCapCostOption;

		/** Whether cap costs are ignored by ad serving. */
		disregardOverdelivery?: boolean;

		/** Placement end date. This date must be later than, or the same day as, the placement start date, but not later than the campaign end date. If, for example, you set 6/25/2015 as both the start and end dates, the effective placement date is just that day only, 6/25/2015. The hours, minutes, and seconds of the end date should not be set, as doing so will result in an error. This field is required on insertion. */
		endDate?: Date;

		/** Whether this placement is flighted. If true, pricing periods will be computed automatically. */
		flighted?: boolean;

		/** Floodlight activity ID associated with this placement. This field should be set when placement pricing type is set to PRICING_TYPE_CPA. */
		floodlightActivityId?: string;

		/** Pricing periods for this placement. */
		pricingPeriods?: Array<PricingSchedulePricingPeriod>;

		/** Placement pricing type. This field is required on insertion. */
		pricingType?: PricingSchedulePricingType;

		/** Placement start date. This date must be later than, or the same day as, the campaign start date. The hours, minutes, and seconds of the start date should not be set, as doing so will result in an error. This field is required on insertion. */
		startDate?: Date;

		/** Testing start date of this placement. The hours, minutes, and seconds of the start date should not be set, as doing so will result in an error. */
		testingStartDate?: Date;
	}

	export enum PricingScheduleCapCostOption { CAP_COST_CUMULATIVE = 0, CAP_COST_MONTHLY = 1, CAP_COST_NONE = 2 }


	/** Pricing Period */
	export interface PricingSchedulePricingPeriod {

		/** Pricing period end date. This date must be later than, or the same day as, the pricing period start date, but not later than the placement end date. The period end date can be the same date as the period start date. If, for example, you set 6/25/2015 as both the start and end dates, the effective pricing period date is just that day only, 6/25/2015. The hours, minutes, and seconds of the end date should not be set, as doing so will result in an error. */
		endDate?: Date;

		/** Comments for this pricing period. */
		pricingComment?: string;

		/** Rate or cost of this pricing period in nanos (i.e., multipled by 1000000000). Acceptable values are 0 to 1000000000000000000, inclusive. */
		rateOrCostNanos?: string;

		/** Pricing period start date. This date must be later than, or the same day as, the placement start date. The hours, minutes, and seconds of the start date should not be set, as doing so will result in an error. */
		startDate?: Date;

		/** Units of this pricing period. Acceptable values are 0 to 10000000000, inclusive. */
		units?: string;
	}

	export enum PricingSchedulePricingType { PRICING_TYPE_CPA = 0, PRICING_TYPE_CPC = 1, PRICING_TYPE_CPM = 2, PRICING_TYPE_CPM_ACTIVEVIEW = 3, PRICING_TYPE_FLAT_RATE_CLICKS = 4, PRICING_TYPE_FLAT_RATE_IMPRESSIONS = 5 }

	export enum PlacementStatus { ACKNOWLEDGE_ACCEPTANCE = 0, ACKNOWLEDGE_REJECTION = 1, DRAFT = 2, PAYMENT_ACCEPTED = 3, PAYMENT_REJECTED = 4, PENDING_REVIEW = 5 }


	/** Tag Settings */
	export interface TagSetting {

		/** Additional key-values to be included in tags. Each key-value pair must be of the form key=value, and pairs must be separated by a semicolon (;). Keys and values must not contain commas. For example, id=2;color=red is a valid value for this field. */
		additionalKeyValues?: string;

		/** Whether static landing page URLs should be included in the tags. This setting applies only to placements. */
		includeClickThroughUrls?: boolean;

		/** Whether click-tracking string should be included in the tags. */
		includeClickTracking?: boolean;

		/** Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders are inserted in placement tags for this site. Publishers can then add keywords to those placeholders. */
		keywordOption?: TagSettingKeywordOption;
	}

	export enum TagSettingKeywordOption { GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD = 0, IGNORE = 1, PLACEHOLDER_WITH_LIST_OF_KEYWORDS = 2 }


	/** Video Settings */
	export interface VideoSettings {

		/** Companion Settings */
		companionSettings?: CompanionSetting;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoSettings". */
		kind?: string;

		/** Orientation of a video placement. If this value is set, placement will return assets matching the specified orientation. */
		orientation?: VideoSettingsOrientation;

		/** Skippable Settings */
		skippableSettings?: SkippableSetting;

		/** Transcode Settings */
		transcodeSettings?: TranscodeSetting;
	}

	export enum VideoSettingsOrientation { ANY = 0, LANDSCAPE = 1, PORTRAIT = 2 }


	/** Skippable Settings */
	export interface SkippableSetting {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#skippableSetting". */
		kind?: string;

		/** Video Offset */
		progressOffset?: VideoOffset;

		/** Video Offset */
		skipOffset?: VideoOffset;

		/** Whether the user can skip creatives served to this placement. */
		skippable?: boolean;
	}


	/** Transcode Settings */
	export interface TranscodeSetting {

		/** Whitelist of video formats to be served to this placement. Set this list to null or empty to serve all video formats. */
		enabledVideoFormats?: Array<number>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#transcodeSetting". */
		kind?: string;
	}

	export enum PlacementVpaidAdapterChoice { BOTH = 0, DEFAULT = 1, FLASH = 2, HTML5 = 3 }


	/** Contains properties of a package or roadblock. */
	export interface PlacementGroup {

		/** Account ID of this placement group. This is a read-only field that can be left blank. */
		accountId?: string;

		/** Advertiser ID of this placement group. This is a required field on insertion. */
		advertiserId?: string;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Whether this placement group is archived. */
		archived?: boolean;

		/** Campaign ID of this placement group. This field is required on insertion. */
		campaignId?: string;

		/** Represents a DimensionValue resource. */
		campaignIdDimensionValue?: DimensionValue;

		/** IDs of placements which are assigned to this placement group. This is a read-only, auto-generated field. */
		childPlacementIds?: Array<string>;

		/** Comments for this placement group. */
		comment?: string;

		/** ID of the content category assigned to this placement group. */
		contentCategoryId?: string;

		/** Modification timestamp. */
		createInfo?: LastModifiedInfo;

		/** Directory site ID associated with this placement group. On insert, you must set either this field or the site_id field to specify the site associated with this placement group. This is a required field that is read-only after insertion. */
		directorySiteId?: string;

		/** Represents a DimensionValue resource. */
		directorySiteIdDimensionValue?: DimensionValue;

		/** External ID for this placement. */
		externalId?: string;

		/** ID of this placement group. This is a read-only, auto-generated field. */
		id?: string;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroup". */
		kind?: string;

		/** Modification timestamp. */
		lastModifiedInfo?: LastModifiedInfo;

		/** Name of this placement group. This is a required field and must be less than 256 characters long. */
		name?: string;

		/** Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. This field is required on insertion. */
		placementGroupType?: PlacementGroupPlacementGroupType;

		/** ID of the placement strategy assigned to this placement group. */
		placementStrategyId?: string;

		/** Pricing Schedule */
		pricingSchedule?: PricingSchedule;

		/** ID of the primary placement, used to calculate the media cost of a roadblock (placement group). Modifying this field will automatically modify the primary field on all affected roadblock child placements. */
		primaryPlacementId?: string;

		/** Represents a DimensionValue resource. */
		primaryPlacementIdDimensionValue?: DimensionValue;

		/** Site ID associated with this placement group. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement group. This is a required field that is read-only after insertion. */
		siteId?: string;

		/** Represents a DimensionValue resource. */
		siteIdDimensionValue?: DimensionValue;

		/** Subaccount ID of this placement group. This is a read-only field that can be left blank. */
		subaccountId?: string;
	}

	export enum PlacementGroupPlacementGroupType { PLACEMENT_PACKAGE = 0, PLACEMENT_ROADBLOCK = 1 }


	/** Placement Group List Response */
	export interface PlacementGroupsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroupsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;

		/** Placement group collection. */
		placementGroups?: Array<PlacementGroup>;
	}


	/** Placement Strategy List Response */
	export interface PlacementStrategiesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategiesListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;

		/** Placement strategy collection. */
		placementStrategies?: Array<PlacementStrategy>;
	}


	/** Contains properties of a placement strategy. */
	export interface PlacementStrategy {

		/** Account ID of this placement strategy.This is a read-only field that can be left blank. */
		accountId?: string;

		/** ID of this placement strategy. This is a read-only, auto-generated field. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategy". */
		kind?: string;

		/** Name of this placement strategy. This is a required field. It must be less than 256 characters long and unique among placement strategies of the same account. */
		name?: string;
	}


	/** Placement Tag */
	export interface PlacementTag {

		/** Placement ID */
		placementId?: string;

		/** Tags generated for this placement. */
		tagDatas?: Array<TagData>;
	}


	/** Placement Tag Data */
	export interface TagData {

		/** Ad associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING. */
		adId?: string;

		/** Tag string to record a click. */
		clickTag?: string;

		/** Creative associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING. */
		creativeId?: string;

		/** TagData tag format of this tag. */
		format?: TagDataFormat;

		/** Tag string for serving an ad. */
		impressionTag?: string;
	}

	export enum TagDataFormat { PLACEMENT_TAG_CLICK_COMMANDS = 0, PLACEMENT_TAG_IFRAME_ILAYER = 1, PLACEMENT_TAG_IFRAME_JAVASCRIPT = 2, PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY = 3, PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH = 4, PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3 = 5, PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4 = 6, PLACEMENT_TAG_INTERNAL_REDIRECT = 7, PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT = 8, PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY = 9, PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT = 10, PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT = 11, PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY = 12, PLACEMENT_TAG_JAVASCRIPT = 13, PLACEMENT_TAG_JAVASCRIPT_LEGACY = 14, PLACEMENT_TAG_STANDARD = 15, PLACEMENT_TAG_TRACKING = 16, PLACEMENT_TAG_TRACKING_IFRAME = 17, PLACEMENT_TAG_TRACKING_JAVASCRIPT = 18 }


	/** Placement GenerateTags Response */
	export interface PlacementsGenerateTagsResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsGenerateTagsResponse". */
		kind?: string;

		/** Set of generated tags for the specified placements. */
		placementTags?: Array<PlacementTag>;
	}


	/** Placement List Response */
	export interface PlacementsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;

		/** Placement collection. */
		placements?: Array<Placement>;
	}


	/** Platform Type List Response */
	export interface PlatformTypesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformTypesListResponse". */
		kind?: string;

		/** Platform type collection. */
		platformTypes?: Array<PlatformType>;
	}


	/** Postal Code List Response */
	export interface PostalCodesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCodesListResponse". */
		kind?: string;

		/** Postal code collection. */
		postalCodes?: Array<PostalCode>;
	}


	/** Contains properties of a Planning project. */
	export interface Project {

		/** Account ID of this project. */
		accountId?: string;

		/** Advertiser ID of this project. */
		advertiserId?: string;

		/** Audience age group of this project. */
		audienceAgeGroup?: ProjectAudienceAgeGroup;

		/** Audience gender of this project. */
		audienceGender?: ProjectAudienceGender;

		/** Budget of this project in the currency specified by the current account. The value stored in this field represents only the non-fractional amount. For example, for USD, the smallest value that can be represented by this field is 1 US dollar. */
		budget?: string;

		/** Client billing code of this project. */
		clientBillingCode?: string;

		/** Name of the project client. */
		clientName?: string;

		/** End date of the project. */
		endDate?: Date;

		/** ID of this project. This is a read-only, auto-generated field. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#project". */
		kind?: string;

		/** Modification timestamp. */
		lastModifiedInfo?: LastModifiedInfo;

		/** Name of this project. */
		name?: string;

		/** Overview of this project. */
		overview?: string;

		/** Start date of the project. */
		startDate?: Date;

		/** Subaccount ID of this project. */
		subaccountId?: string;

		/** Number of clicks that the advertiser is targeting. */
		targetClicks?: string;

		/** Number of conversions that the advertiser is targeting. */
		targetConversions?: string;

		/** CPA that the advertiser is targeting. */
		targetCpaNanos?: string;

		/** CPC that the advertiser is targeting. */
		targetCpcNanos?: string;

		/** vCPM from Active View that the advertiser is targeting. */
		targetCpmActiveViewNanos?: string;

		/** CPM that the advertiser is targeting. */
		targetCpmNanos?: string;

		/** Number of impressions that the advertiser is targeting. */
		targetImpressions?: string;
	}

	export enum ProjectAudienceAgeGroup { PLANNING_AUDIENCE_AGE_18_24 = 0, PLANNING_AUDIENCE_AGE_25_34 = 1, PLANNING_AUDIENCE_AGE_35_44 = 2, PLANNING_AUDIENCE_AGE_45_54 = 3, PLANNING_AUDIENCE_AGE_55_64 = 4, PLANNING_AUDIENCE_AGE_65_OR_MORE = 5, PLANNING_AUDIENCE_AGE_UNKNOWN = 6 }

	export enum ProjectAudienceGender { PLANNING_AUDIENCE_GENDER_FEMALE = 0, PLANNING_AUDIENCE_GENDER_MALE = 1 }


	/** Project List Response */
	export interface ProjectsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#projectsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;

		/** Project collection. */
		projects?: Array<Project>;
	}


	/** Represents a recipient. */
	export interface Recipient {

		/** The delivery type for the recipient. */
		deliveryType?: RecipientDeliveryType;

		/** The email address of the recipient. */
		email?: string;

		/** The kind of resource this is, in this case dfareporting#recipient. */
		kind?: string;
	}

	export enum RecipientDeliveryType { ATTACHMENT = 0, LINK = 1 }


	/** Region List Response */
	export interface RegionsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#regionsListResponse". */
		kind?: string;

		/** Region collection. */
		regions?: Array<Region>;
	}


	/** Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that are shared to your advertiser or account, use the TargetableRemarketingLists resource. */
	export interface RemarketingList {

		/** Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
		accountId?: string;

		/** Whether this remarketing list is active. */
		active?: boolean;

		/** Dimension value for the advertiser ID that owns this remarketing list. This is a required field. */
		advertiserId?: string;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Remarketing list description. */
		description?: string;

		/** Remarketing list ID. This is a read-only, auto-generated field. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingList". */
		kind?: string;

		/** Number of days that a user should remain in the remarketing list without an impression. Acceptable values are 1 to 540, inclusive. */
		lifeSpan?: string;

		/** Remarketing List Population Rule. */
		listPopulationRule?: ListPopulationRule;

		/** Number of users currently in the list. This is a read-only field. */
		listSize?: string;

		/** Product from which this remarketing list was originated. */
		listSource?: RemarketingListListSource;

		/** Name of the remarketing list. This is a required field. Must be no greater than 128 characters long. */
		name?: string;

		/** Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
		subaccountId?: string;
	}

	export enum RemarketingListListSource { REMARKETING_LIST_SOURCE_ADX = 0, REMARKETING_LIST_SOURCE_DBM = 1, REMARKETING_LIST_SOURCE_DFA = 2, REMARKETING_LIST_SOURCE_DFP = 3, REMARKETING_LIST_SOURCE_DMP = 4, REMARKETING_LIST_SOURCE_GA = 5, REMARKETING_LIST_SOURCE_GPLUS = 6, REMARKETING_LIST_SOURCE_OTHER = 7, REMARKETING_LIST_SOURCE_PLAY_STORE = 8, REMARKETING_LIST_SOURCE_XFP = 9, REMARKETING_LIST_SOURCE_YOUTUBE = 10 }


	/** Contains properties of a remarketing list's sharing information. Sharing allows other accounts or advertisers to target to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and advertisers. */
	export interface RemarketingListShare {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListShare". */
		kind?: string;

		/** Remarketing list ID. This is a read-only, auto-generated field. */
		remarketingListId?: string;

		/** Accounts that the remarketing list is shared with. */
		sharedAccountIds?: Array<string>;

		/** Advertisers that the remarketing list is shared with. */
		sharedAdvertiserIds?: Array<string>;
	}


	/** Remarketing list response */
	export interface RemarketingListsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;

		/** Remarketing list collection. */
		remarketingLists?: Array<RemarketingList>;
	}


	/** Represents a Report resource. */
	export interface Report {

		/** The account ID to which this report belongs. */
		accountId?: string;

		/** The report criteria for a report of type "STANDARD". */
		criteria?: ReportCriteria;

		/** The report criteria for a report of type "CROSS_DIMENSION_REACH". */
		crossDimensionReachCriteria?: ReportCrossDimensionReachCriteria;

		/** The report's email delivery settings. */
		delivery?: ReportDelivery;

		/** The eTag of this response for caching purposes. */
		etag?: string;

		/** The filename used when generating report files for this report. */
		fileName?: string;

		/** The report criteria for a report of type "FLOODLIGHT". */
		floodlightCriteria?: ReportFloodlightCriteria;

		/** The output format of the report. If not specified, default format is "CSV". Note that the actual format in the completed report file might differ if for instance the report's size exceeds the format's capabilities. "CSV" will then be the fallback format. */
		format?: ReportFormat;

		/** The unique ID identifying this report resource. */
		id?: string;

		/** The kind of resource this is, in this case dfareporting#report. */
		kind?: string;

		/** The timestamp (in milliseconds since epoch) of when this report was last modified. */
		lastModifiedTime?: string;

		/** The name of the report. */
		name?: string;

		/** The user profile id of the owner of this report. */
		ownerProfileId?: string;

		/** The report criteria for a report of type "PATH_TO_CONVERSION". */
		pathToConversionCriteria?: ReportPathToConversionCriteria;

		/** The report criteria for a report of type "REACH". */
		reachCriteria?: ReportReachCriteria;

		/** The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY". */
		schedule?: ReportSchedule;

		/** The subaccount ID to which this report belongs if applicable. */
		subAccountId?: string;

		/** The type of the report. */
		type?: ReportType;
	}

	export interface ReportCriteria {

		/** Represents an activity group. */
		activities?: Activities;

		/** Represents a Custom Rich Media Events group. */
		customRichMediaEvents?: CustomRichMediaEvents;

		/** Represents a date range. */
		dateRange?: DateRange;

		/**
		 * The list of filters on which dimensions are filtered.
		 * Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
		 */
		dimensionFilters?: Array<DimensionValue>;

		/** The list of standard dimensions the report should include. */
		dimensions?: Array<SortedDimension>;

		/** The list of names of metrics the report should include. */
		metricNames?: Array<string>;
	}


	/** Represents a sorted dimension. */
	export interface SortedDimension {

		/** The kind of resource this is, in this case dfareporting#sortedDimension. */
		kind?: string;

		/** The name of the dimension. */
		name?: string;

		/** An optional sort order for the dimension column. */
		sortOrder?: SortedDimensionSortOrder;
	}

	export enum SortedDimensionSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ReportCrossDimensionReachCriteria {

		/** The list of dimensions the report should include. */
		breakdown?: Array<SortedDimension>;

		/** Represents a date range. */
		dateRange?: DateRange;

		/** The dimension option. */
		dimension?: ReportCrossDimensionReachCriteriaDimension;

		/** The list of filters on which dimensions are filtered. */
		dimensionFilters?: Array<DimensionValue>;

		/** The list of names of metrics the report should include. */
		metricNames?: Array<string>;

		/** The list of names of overlap metrics the report should include. */
		overlapMetricNames?: Array<string>;

		/** Whether the report is pivoted or not. Defaults to true. */
		pivoted?: boolean;
	}

	export enum ReportCrossDimensionReachCriteriaDimension { ADVERTISER = 0, CAMPAIGN = 1, SITE_BY_ADVERTISER = 2, SITE_BY_CAMPAIGN = 3 }

	export interface ReportDelivery {

		/** Whether the report should be emailed to the report owner. */
		emailOwner?: boolean;

		/** The type of delivery for the owner to receive, if enabled. */
		emailOwnerDeliveryType?: RecipientDeliveryType;

		/** The message to be sent with each email. */
		message?: string;

		/** The list of recipients to which to email the report. */
		recipients?: Array<Recipient>;
	}

	export interface ReportFloodlightCriteria {

		/** The list of custom rich media events to include. */
		customRichMediaEvents?: Array<DimensionValue>;

		/** Represents a date range. */
		dateRange?: DateRange;

		/**
		 * The list of filters on which dimensions are filtered.
		 * Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
		 */
		dimensionFilters?: Array<DimensionValue>;

		/** The list of dimensions the report should include. */
		dimensions?: Array<SortedDimension>;

		/** Represents a DimensionValue resource. */
		floodlightConfigId?: DimensionValue;

		/** The list of names of metrics the report should include. */
		metricNames?: Array<string>;

		/** The properties of the report. */
		reportProperties?: ReportFloodlightCriteriaReportProperties;
	}

	export interface ReportFloodlightCriteriaReportProperties {

		/** Include conversions that have no cookie, but do have an exposure path. */
		includeAttributedIPConversions?: boolean;

		/** Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window. */
		includeUnattributedCookieConversions?: boolean;

		/** Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion. */
		includeUnattributedIPConversions?: boolean;
	}

	export enum ReportFormat { CSV = 0, EXCEL = 1 }

	export interface ReportPathToConversionCriteria {

		/** The list of 'dfa:activity' values to filter on. */
		activityFilters?: Array<DimensionValue>;

		/** The list of conversion dimensions the report should include. */
		conversionDimensions?: Array<SortedDimension>;

		/** The list of custom floodlight variables the report should include. */
		customFloodlightVariables?: Array<SortedDimension>;

		/** The list of custom rich media events to include. */
		customRichMediaEvents?: Array<DimensionValue>;

		/** Represents a date range. */
		dateRange?: DateRange;

		/** Represents a DimensionValue resource. */
		floodlightConfigId?: DimensionValue;

		/** The list of names of metrics the report should include. */
		metricNames?: Array<string>;

		/** The list of per interaction dimensions the report should include. */
		perInteractionDimensions?: Array<SortedDimension>;

		/** The properties of the report. */
		reportProperties?: ReportPathToConversionCriteriaReportProperties;
	}

	export interface ReportPathToConversionCriteriaReportProperties {

		/** DFA checks to see if a click interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90. */
		clicksLookbackWindow?: number;

		/** DFA checks to see if an impression interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90. */
		impressionsLookbackWindow?: number;

		/** Deprecated: has no effect. */
		includeAttributedIPConversions?: boolean;

		/** Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window. */
		includeUnattributedCookieConversions?: boolean;

		/** Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion. */
		includeUnattributedIPConversions?: boolean;

		/** The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report. */
		maximumClickInteractions?: number;

		/** The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report. */
		maximumImpressionInteractions?: number;

		/** The maximum amount of time that can take place between interactions (clicks or impressions) by the same user. Valid values: 1-90. */
		maximumInteractionGap?: number;

		/** Enable pivoting on interaction path. */
		pivotOnInteractionPath?: boolean;
	}

	export interface ReportReachCriteria {

		/** Represents an activity group. */
		activities?: Activities;

		/** Represents a Custom Rich Media Events group. */
		customRichMediaEvents?: CustomRichMediaEvents;

		/** Represents a date range. */
		dateRange?: DateRange;

		/**
		 * The list of filters on which dimensions are filtered.
		 * Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
		 */
		dimensionFilters?: Array<DimensionValue>;

		/** The list of dimensions the report should include. */
		dimensions?: Array<SortedDimension>;

		/** Whether to enable all reach dimension combinations in the report. Defaults to false. If enabled, the date range of the report should be within the last 42 days. */
		enableAllDimensionCombinations?: boolean;

		/** The list of names of metrics the report should include. */
		metricNames?: Array<string>;

		/** The list of names of  Reach By Frequency metrics the report should include. */
		reachByFrequencyMetricNames?: Array<string>;
	}

	export interface ReportSchedule {

		/** Whether the schedule is active or not. Must be set to either true or false. */
		active?: boolean;

		/** Defines every how many days, weeks or months the report should be run. Needs to be set when "repeats" is either "DAILY", "WEEKLY" or "MONTHLY". */
		every?: number;

		/** The expiration date when the scheduled report stops running. */
		expirationDate?: Date;

		/**
		 * The interval for which the report is repeated. Note:
		 * - "DAILY" also requires field "every" to be set.
		 * - "WEEKLY" also requires fields "every" and "repeatsOnWeekDays" to be set.
		 * - "MONTHLY" also requires fields "every" and "runsOnDayOfMonth" to be set.
		 */
		repeats?: string;

		/** List of week days "WEEKLY" on which scheduled reports should run. */
		repeatsOnWeekDays?: Array<string>;

		/**
		 * Enum to define for "MONTHLY" scheduled reports whether reports should be repeated on the same day of the month as "startDate" or the same day of the week of the month.
		 * Example: If 'startDate' is Monday, April 2nd 2012 (2012-04-02), "DAY_OF_MONTH" would run subsequent reports on the 2nd of every Month, and "WEEK_OF_MONTH" would run subsequent reports on the first Monday of the month.
		 */
		runsOnDayOfMonth?: ReportScheduleRunsOnDayOfMonth;

		/** Start date of date range for which scheduled reports should be run. */
		startDate?: Date;
	}

	export enum ReportScheduleRunsOnDayOfMonth { DAY_OF_MONTH = 0, WEEK_OF_MONTH = 1 }

	export enum ReportType { CROSS_DIMENSION_REACH = 0, FLOODLIGHT = 1, PATH_TO_CONVERSION = 2, REACH = 3, STANDARD = 4 }


	/** Represents the list of reports. */
	export interface ReportList {

		/** The eTag of this response for caching purposes. */
		etag?: string;

		/** The reports returned in this response. */
		items?: Array<Report>;

		/** The kind of list this is, in this case dfareporting#reportList. */
		kind?: string;

		/** Continuation token used to page through reports. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. */
		nextPageToken?: string;
	}


	/** Contains properties of a site. */
	export interface Site {

		/** Account ID of this site. This is a read-only field that can be left blank. */
		accountId?: string;

		/** Whether this site is approved. */
		approved?: boolean;

		/** Directory site associated with this site. This is a required field that is read-only after insertion. */
		directorySiteId?: string;

		/** Represents a DimensionValue resource. */
		directorySiteIdDimensionValue?: DimensionValue;

		/** ID of this site. This is a read-only, auto-generated field. */
		id?: string;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Key name of this site. This is a read-only, auto-generated field. */
		keyName?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#site". */
		kind?: string;

		/** Name of this site.This is a required field. Must be less than 128 characters long. If this site is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this site is a top-level site, and the name must be unique among top-level sites of the same account. */
		name?: string;

		/** Site contacts. */
		siteContacts?: Array<SiteContact>;

		/** Site Settings */
		siteSettings?: SiteSettings;

		/** Subaccount ID of this site. This is a read-only field that can be left blank. */
		subaccountId?: string;

		/** Video Settings */
		videoSettings?: SiteVideoSettings;
	}


	/** Site Contact */
	export interface SiteContact {

		/** Address of this site contact. */
		address?: string;

		/** Site contact type. */
		contactType?: SiteContactContactType;

		/** Email address of this site contact. This is a required field. */
		email?: string;

		/** First name of this site contact. */
		firstName?: string;

		/** ID of this site contact. This is a read-only, auto-generated field. */
		id?: string;

		/** Last name of this site contact. */
		lastName?: string;

		/** Primary phone number of this site contact. */
		phone?: string;

		/** Title or designation of this site contact. */
		title?: string;
	}

	export enum SiteContactContactType { SALES_PERSON = 0, TRAFFICKER = 1 }


	/** Site Settings */
	export interface SiteSettings {

		/** Whether active view creatives are disabled for this site. */
		activeViewOptOut?: boolean;

		/** Whether this site opts out of ad blocking. When true, ad blocking is disabled for all placements under the site, regardless of the individual placement settings. When false, the campaign and placement settings take effect. */
		adBlockingOptOut?: boolean;

		/** Whether new cookies are disabled for this site. */
		disableNewCookie?: boolean;

		/** Tag Settings */
		tagSetting?: TagSetting;

		/** Whether Verification and ActiveView for in-stream video creatives are disabled by default for new placements created under this site. This value will be used to populate the placement.videoActiveViewOptOut field, when no value is specified for the new placement. */
		videoActiveViewOptOutTemplate?: boolean;

		/**
		 * Default VPAID adapter setting for new placements created under this site. This value will be used to populate the placements.vpaidAdapterChoice field, when no value is specified for the new placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to the placement. The publisher's specifications will typically determine this setting. For VPAID creatives, the adapter format will match the VPAID format (HTML5 VPAID creatives use the HTML5 adapter).
		 * Note: Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.
		 */
		vpaidAdapterChoiceTemplate?: PlacementVpaidAdapterChoice;
	}


	/** Video Settings */
	export interface SiteVideoSettings {

		/** Companion Settings */
		companionSettings?: SiteCompanionSetting;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteVideoSettings". */
		kind?: string;

		/** Orientation of a site template used for video. This will act as default for new placements created under this site. */
		orientation?: VideoSettingsOrientation;

		/** Skippable Settings */
		skippableSettings?: SiteSkippableSetting;

		/** Transcode Settings */
		transcodeSettings?: SiteTranscodeSetting;
	}


	/** Companion Settings */
	export interface SiteCompanionSetting {

		/** Whether companions are disabled for this site template. */
		companionsDisabled?: boolean;

		/** Whitelist of companion sizes to be served via this site template. Set this list to null or empty to serve all companion sizes. */
		enabledSizes?: Array<Size>;

		/** Whether to serve only static images as companions. */
		imageOnly?: boolean;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteCompanionSetting". */
		kind?: string;
	}


	/** Skippable Settings */
	export interface SiteSkippableSetting {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteSkippableSetting". */
		kind?: string;

		/** Video Offset */
		progressOffset?: VideoOffset;

		/** Video Offset */
		skipOffset?: VideoOffset;

		/** Whether the user can skip creatives served to this site. This will act as default for new placements created under this site. */
		skippable?: boolean;
	}


	/** Transcode Settings */
	export interface SiteTranscodeSetting {

		/** Whitelist of video formats to be served to this site template. Set this list to null or empty to serve all video formats. */
		enabledVideoFormats?: Array<number>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteTranscodeSetting". */
		kind?: string;
	}


	/** Site List Response */
	export interface SitesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#sitesListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;

		/** Site collection. */
		sites?: Array<Site>;
	}


	/** Size List Response */
	export interface SizesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#sizesListResponse". */
		kind?: string;

		/** Size collection. */
		sizes?: Array<Size>;
	}


	/** Contains properties of a Campaign Manager subaccount. */
	export interface Subaccount {

		/** ID of the account that contains this subaccount. This is a read-only field that can be left blank. */
		accountId?: string;

		/** IDs of the available user role permissions for this subaccount. */
		availablePermissionIds?: Array<string>;

		/** ID of this subaccount. This is a read-only, auto-generated field. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccount". */
		kind?: string;

		/** Name of this subaccount. This is a required field. Must be less than 128 characters long and be unique among subaccounts of the same account. */
		name?: string;
	}


	/** Subaccount List Response */
	export interface SubaccountsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccountsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;

		/** Subaccount collection. */
		subaccounts?: Array<Subaccount>;
	}


	/** Contains properties of a targetable remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource is a read-only view of a remarketing list to be used to faciliate targeting ads to specific lists. Remarketing lists that are owned by your advertisers and those that are shared to your advertisers or account are accessible via this resource. To manage remarketing lists that are owned by your advertisers, use the RemarketingLists resource. */
	export interface TargetableRemarketingList {

		/** Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
		accountId?: string;

		/** Whether this targetable remarketing list is active. */
		active?: boolean;

		/** Dimension value for the advertiser ID that owns this targetable remarketing list. */
		advertiserId?: string;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Targetable remarketing list description. */
		description?: string;

		/** Targetable remarketing list ID. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingList". */
		kind?: string;

		/** Number of days that a user should remain in the targetable remarketing list without an impression. */
		lifeSpan?: string;

		/** Number of users currently in the list. This is a read-only field. */
		listSize?: string;

		/** Product from which this targetable remarketing list was originated. */
		listSource?: RemarketingListListSource;

		/** Name of the targetable remarketing list. Is no greater than 128 characters long. */
		name?: string;

		/** Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
		subaccountId?: string;
	}


	/** Targetable remarketing list response */
	export interface TargetableRemarketingListsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingListsListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;

		/** Targetable remarketing list collection. */
		targetableRemarketingLists?: Array<TargetableRemarketingList>;
	}


	/** Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads. */
	export interface TargetingTemplate {

		/** Account ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert. */
		accountId?: string;

		/** Advertiser ID of this targeting template. This is a required field on insert and is read-only after insert. */
		advertiserId?: string;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Day Part Targeting. */
		dayPartTargeting?: DayPartTargeting;

		/** Geographical Targeting. */
		geoTargeting?: GeoTargeting;

		/** ID of this targeting template. This is a read-only, auto-generated field. */
		id?: string;

		/** Key Value Targeting Expression. */
		keyValueTargetingExpression?: KeyValueTargetingExpression;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplate". */
		kind?: string;

		/** Language Targeting. */
		languageTargeting?: LanguageTargeting;

		/** Remarketing List Targeting Expression. */
		listTargetingExpression?: ListTargetingExpression;

		/** Name of this targeting template. This field is required. It must be less than 256 characters long and unique within an advertiser. */
		name?: string;

		/** Subaccount ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert. */
		subaccountId?: string;

		/** Technology Targeting. */
		technologyTargeting?: TechnologyTargeting;
	}


	/** Targeting Template List Response */
	export interface TargetingTemplatesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplatesListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;

		/** Targeting template collection. */
		targetingTemplates?: Array<TargetingTemplate>;
	}


	/** A UserProfile resource lets you list all DFA user profiles that are associated with a Google user account. The profile_id needs to be specified in other API requests.  */
	export interface UserProfile {

		/** The account ID to which this profile belongs. */
		accountId?: string;

		/** The account name this profile belongs to. */
		accountName?: string;

		/** Etag of this resource. */
		etag?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfile". */
		kind?: string;

		/** The unique ID of the user profile. */
		profileId?: string;

		/** The sub account ID this profile belongs to if applicable. */
		subAccountId?: string;

		/** The sub account name this profile belongs to if applicable. */
		subAccountName?: string;

		/** The user name. */
		userName?: string;
	}


	/** Represents the list of user profiles. */
	export interface UserProfileList {

		/** Etag of this resource. */
		etag?: string;

		/** The user profiles returned in this response. */
		items?: Array<UserProfile>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfileList". */
		kind?: string;
	}


	/** Contains properties of auser role, which is used to manage user access. */
	export interface UserRole {

		/** Account ID of this user role. This is a read-only field that can be left blank. */
		accountId?: string;

		/** Whether this is a default user role. Default user roles are created by the system for the account/subaccount and cannot be modified or deleted. Each default user role comes with a basic set of preassigned permissions. */
		defaultUserRole?: boolean;

		/** ID of this user role. This is a read-only, auto-generated field. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRole". */
		kind?: string;

		/** Name of this user role. This is a required field. Must be less than 256 characters long. If this user role is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this user role is a top-level user role, and the name must be unique among top-level user roles of the same account. */
		name?: string;

		/** ID of the user role that this user role is based on or copied from. This is a required field. */
		parentUserRoleId?: string;

		/** List of permissions associated with this user role. */
		permissions?: Array<UserRolePermission>;

		/** Subaccount ID of this user role. This is a read-only field that can be left blank. */
		subaccountId?: string;
	}


	/** Contains properties of a user role permission. */
	export interface UserRolePermission {

		/** Levels of availability for a user role permission. */
		availability?: UserRolePermissionAvailability;

		/** ID of this user role permission. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermission". */
		kind?: string;

		/** Name of this user role permission. */
		name?: string;

		/** ID of the permission group that this user role permission belongs to. */
		permissionGroupId?: string;
	}

	export enum UserRolePermissionAvailability { ACCOUNT_ALWAYS = 0, ACCOUNT_BY_DEFAULT = 1, NOT_AVAILABLE_BY_DEFAULT = 2, SUBACCOUNT_AND_ACCOUNT_ALWAYS = 3, SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT = 4 }


	/** Represents a grouping of related user role permissions. */
	export interface UserRolePermissionGroup {

		/** ID of this user role permission. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroup". */
		kind?: string;

		/** Name of this user role permission group. */
		name?: string;
	}


	/** User Role Permission Group List Response */
	export interface UserRolePermissionGroupsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroupsListResponse". */
		kind?: string;

		/** User role permission group collection. */
		userRolePermissionGroups?: Array<UserRolePermissionGroup>;
	}


	/** User Role Permission List Response */
	export interface UserRolePermissionsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionsListResponse". */
		kind?: string;

		/** User role permission collection. */
		userRolePermissions?: Array<UserRolePermission>;
	}


	/** User Role List Response */
	export interface UserRolesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolesListResponse". */
		kind?: string;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string;

		/** User role collection. */
		userRoles?: Array<UserRole>;
	}


	/** Contains information about supported video formats. */
	export interface VideoFormat {

		/** File type of the video format. */
		fileType?: VideoFormatFileType;

		/** ID of the video format. */
		id?: number;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormat". */
		kind?: string;

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		resolution?: Size;

		/** The target bit rate of this video format. */
		targetBitRate?: number;
	}

	export enum VideoFormatFileType { FLV = 0, M3U8 = 1, MP4 = 2, THREEGPP = 3, WEBM = 4 }


	/** Video Format List Response */
	export interface VideoFormatsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormatsListResponse". */
		kind?: string;

		/** Video format collection. */
		videoFormats?: Array<VideoFormat>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves a report file by its report ID and file ID. This method supports media download.
		 * Get reports/{reportId}/files/{fileId}
		 * @param {string} reportId The ID of the report.
		 * @param {string} fileId The ID of the report file.
		 * @return {void} Successful response
		 */
		Dfareporting_files_get(reportId: string, fileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reports/' + (reportId == null ? '' : encodeURIComponent(reportId)) + '/files/' + (fileId == null ? '' : encodeURIComponent(fileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves list of user profiles for a user.
		 * Get userprofiles
		 * @return {void} Successful response
		 */
		Dfareporting_userProfiles_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one user profile by ID.
		 * Get userprofiles/{profileId}
		 * @param {string} profileId The user profile ID.
		 * @return {void} Successful response
		 */
		Dfareporting_userProfiles_get(profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the account's active ad summary by account ID.
		 * Get userprofiles/{profileId}/accountActiveAdSummaries/{summaryAccountId}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} summaryAccountId Account ID.
		 * @return {void} Successful response
		 */
		Dfareporting_accountActiveAdSummaries_get(profileId: string, summaryAccountId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountActiveAdSummaries/' + (summaryAccountId == null ? '' : encodeURIComponent(summaryAccountId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the list of account permission groups.
		 * Get userprofiles/{profileId}/accountPermissionGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_accountPermissionGroups_list(profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountPermissionGroups', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one account permission group by ID.
		 * Get userprofiles/{profileId}/accountPermissionGroups/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Account permission group ID.
		 * @return {void} Successful response
		 */
		Dfareporting_accountPermissionGroups_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountPermissionGroups/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the list of account permissions.
		 * Get userprofiles/{profileId}/accountPermissions
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_accountPermissions_list(profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountPermissions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one account permission by ID.
		 * Get userprofiles/{profileId}/accountPermissions/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Account permission ID.
		 * @return {void} Successful response
		 */
		Dfareporting_accountPermissions_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountPermissions/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of account user profiles, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/accountUserProfiles
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {boolean} active Select only active user profiles.
		 * @param {Array<string>} ids Select only user profiles with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "user profile*2015" will return objects with names like "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or simply "user profile".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @param {string} subaccountId Select only user profiles with the specified subaccount ID.
		 * @param {string} userRoleId Select only user profiles with the specified user role ID.
		 * @return {void} Successful response
		 */
		Dfareporting_accountUserProfiles_list(profileId: string, active: boolean, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder, subaccountId: string, userRoleId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountUserProfiles&active=' + active + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&subaccountId=' + (subaccountId == null ? '' : encodeURIComponent(subaccountId)) + '&userRoleId=' + (userRoleId == null ? '' : encodeURIComponent(userRoleId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing account user profile. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/accountUserProfiles
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id User profile ID.
		 * @return {void} Successful response
		 */
		Dfareporting_accountUserProfiles_patch(profileId: string, id: string, requestBody: AccountUserProfile): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountUserProfiles&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new account user profile.
		 * Post userprofiles/{profileId}/accountUserProfiles
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_accountUserProfiles_insert(profileId: string, requestBody: AccountUserProfile): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountUserProfiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing account user profile.
		 * Put userprofiles/{profileId}/accountUserProfiles
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_accountUserProfiles_update(profileId: string, requestBody: AccountUserProfile): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountUserProfiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one account user profile by ID.
		 * Get userprofiles/{profileId}/accountUserProfiles/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id User profile ID.
		 * @return {void} Successful response
		 */
		Dfareporting_accountUserProfiles_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountUserProfiles/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the list of accounts, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/accounts
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {boolean} active Select only active accounts. Don't set this field to select both active and non-active accounts.
		 * @param {Array<string>} ids Select only accounts with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "account*2015" will return objects with names like "account June 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_accounts_list(profileId: string, active: boolean, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accounts&active=' + active + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing account. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/accounts
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Account ID.
		 * @return {void} Successful response
		 */
		Dfareporting_accounts_patch(profileId: string, id: string, requestBody: Account): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accounts&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing account.
		 * Put userprofiles/{profileId}/accounts
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_accounts_update(profileId: string, requestBody: Account): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one account by ID.
		 * Get userprofiles/{profileId}/accounts/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Account ID.
		 * @return {void} Successful response
		 */
		Dfareporting_accounts_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accounts/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of ads, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/ads
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {boolean} active Select only active ads.
		 * @param {string} advertiserId Select only ads with this advertiser ID.
		 * @param {boolean} archived Select only archived ads.
		 * @param {Array<string>} audienceSegmentIds Select only ads with these audience segment IDs.
		 * @param {Array<string>} campaignIds Select only ads with these campaign IDs.
		 * @param {AdCompatibility} compatibility Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
		 * @param {Array<string>} creativeIds Select only ads with these creative IDs assigned.
		 * @param {Array<string>} creativeOptimizationConfigurationIds Select only ads with these creative optimization configuration IDs.
		 * @param {boolean} dynamicClickTracker Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both.
		 * @param {Array<string>} ids Select only ads with these IDs.
		 * @param {Array<string>} landingPageIds Select only ads with these landing page IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} overriddenEventTagId Select only ads with this event tag override ID.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {Array<string>} placementIds Select only ads with these placement IDs assigned.
		 * @param {Array<string>} remarketingListIds Select only ads whose list targeting expression use these remarketing list IDs.
		 * @param {string} searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad".
		 * @param {Array<string>} sizeIds Select only ads with these size IDs.
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @param {boolean} sslCompliant Select only ads that are SSL-compliant.
		 * @param {boolean} sslRequired Select only ads that require SSL.
		 * @param {Array<AdType>} type Select only ads with these types.
		 * @return {void} Successful response
		 */
		Dfareporting_ads_list(profileId: string, active: boolean, advertiserId: string, archived: boolean, audienceSegmentIds: Array<string>, campaignIds: Array<string>, compatibility: AdCompatibility, creativeIds: Array<string>, creativeOptimizationConfigurationIds: Array<string>, dynamicClickTracker: boolean, ids: Array<string>, landingPageIds: Array<string>, maxResults: number, overriddenEventTagId: string, pageToken: string, placementIds: Array<string>, remarketingListIds: Array<string>, searchString: string, sizeIds: Array<string>, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder, sslCompliant: boolean, sslRequired: boolean, type: Array<AdType>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/ads&active=' + active + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&archived=' + archived + '&' + audienceSegmentIds.map(z => `audienceSegmentIds=${encodeURIComponent(z)}`).join('&') + '&' + campaignIds.map(z => `campaignIds=${encodeURIComponent(z)}`).join('&') + '&compatibility=' + compatibility + '&' + creativeIds.map(z => `creativeIds=${encodeURIComponent(z)}`).join('&') + '&' + creativeOptimizationConfigurationIds.map(z => `creativeOptimizationConfigurationIds=${encodeURIComponent(z)}`).join('&') + '&dynamicClickTracker=' + dynamicClickTracker + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&' + landingPageIds.map(z => `landingPageIds=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&overriddenEventTagId=' + (overriddenEventTagId == null ? '' : encodeURIComponent(overriddenEventTagId)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + placementIds.map(z => `placementIds=${encodeURIComponent(z)}`).join('&') + '&' + remarketingListIds.map(z => `remarketingListIds=${encodeURIComponent(z)}`).join('&') + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&' + sizeIds.map(z => `sizeIds=${encodeURIComponent(z)}`).join('&') + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&sslCompliant=' + sslCompliant + '&sslRequired=' + sslRequired + '&' + type.map(z => `type=${z}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing ad. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/ads
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Ad ID.
		 * @return {void} Successful response
		 */
		Dfareporting_ads_patch(profileId: string, id: string, requestBody: Ad): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/ads&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new ad.
		 * Post userprofiles/{profileId}/ads
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_ads_insert(profileId: string, requestBody: Ad): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/ads', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing ad.
		 * Put userprofiles/{profileId}/ads
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_ads_update(profileId: string, requestBody: Ad): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/ads', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one ad by ID.
		 * Get userprofiles/{profileId}/ads/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Ad ID.
		 * @return {void} Successful response
		 */
		Dfareporting_ads_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/ads/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/advertiserGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} ids Select only advertiser groups with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup 2015", or simply "advertisergroup".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_advertiserGroups_list(profileId: string, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserGroups&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing advertiser group. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/advertiserGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Advertiser group ID.
		 * @return {void} Successful response
		 */
		Dfareporting_advertiserGroups_patch(profileId: string, id: string, requestBody: AdvertiserGroup): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserGroups&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new advertiser group.
		 * Post userprofiles/{profileId}/advertiserGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_advertiserGroups_insert(profileId: string, requestBody: AdvertiserGroup): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing advertiser group.
		 * Put userprofiles/{profileId}/advertiserGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_advertiserGroups_update(profileId: string, requestBody: AdvertiserGroup): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing advertiser group.
		 * Delete userprofiles/{profileId}/advertiserGroups/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Advertiser group ID.
		 * @return {void} Successful response
		 */
		Dfareporting_advertiserGroups_delete(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserGroups/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one advertiser group by ID.
		 * Get userprofiles/{profileId}/advertiserGroups/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Advertiser group ID.
		 * @return {void} Successful response
		 */
		Dfareporting_advertiserGroups_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserGroups/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of landing pages.
		 * Get userprofiles/{profileId}/advertiserLandingPages
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} advertiserIds Select only landing pages that belong to these advertisers.
		 * @param {boolean} archived Select only archived landing pages. Don't set this field to select both archived and non-archived landing pages.
		 * @param {Array<string>} campaignIds Select only landing pages that are associated with these campaigns.
		 * @param {Array<string>} ids Select only landing pages with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for landing pages by name or ID. Wildcards (*) are allowed. For example, "landingpage*2017" will return landing pages with names like "landingpage July 2017", "landingpage March 2017", or simply "landingpage 2017". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "landingpage" will match campaigns with name "my landingpage", "landingpage 2015", or simply "landingpage".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @param {string} subaccountId Select only landing pages that belong to this subaccount.
		 * @return {void} Successful response
		 */
		Dfareporting_advertiserLandingPages_list(profileId: string, advertiserIds: Array<string>, archived: boolean, campaignIds: Array<string>, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder, subaccountId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserLandingPages&' + advertiserIds.map(z => `advertiserIds=${encodeURIComponent(z)}`).join('&') + '&archived=' + archived + '&' + campaignIds.map(z => `campaignIds=${encodeURIComponent(z)}`).join('&') + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&subaccountId=' + (subaccountId == null ? '' : encodeURIComponent(subaccountId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing landing page. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/advertiserLandingPages
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Landing page ID.
		 * @return {void} Successful response
		 */
		Dfareporting_advertiserLandingPages_patch(profileId: string, id: string, requestBody: LandingPage): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserLandingPages&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new landing page.
		 * Post userprofiles/{profileId}/advertiserLandingPages
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_advertiserLandingPages_insert(profileId: string, requestBody: LandingPage): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserLandingPages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing landing page.
		 * Put userprofiles/{profileId}/advertiserLandingPages
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_advertiserLandingPages_update(profileId: string, requestBody: LandingPage): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserLandingPages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one landing page by ID.
		 * Get userprofiles/{profileId}/advertiserLandingPages/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Landing page ID.
		 * @return {void} Successful response
		 */
		Dfareporting_advertiserLandingPages_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserLandingPages/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of advertisers, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/advertisers
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} advertiserGroupIds Select only advertisers with these advertiser group IDs.
		 * @param {Array<string>} floodlightConfigurationIds Select only advertisers with these floodlight configuration IDs.
		 * @param {Array<string>} ids Select only advertisers with these IDs.
		 * @param {boolean} includeAdvertisersWithoutGroupsOnly Select only advertisers which do not belong to any advertiser group.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {boolean} onlyParent Select only advertisers which use another advertiser's floodlight configuration.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @param {AdvertiserStatus} status Select only advertisers with the specified status.
		 * @param {string} subaccountId Select only advertisers with these subaccount IDs.
		 * @return {void} Successful response
		 */
		Dfareporting_advertisers_list(profileId: string, advertiserGroupIds: Array<string>, floodlightConfigurationIds: Array<string>, ids: Array<string>, includeAdvertisersWithoutGroupsOnly: boolean, maxResults: number, onlyParent: boolean, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder, status: AdvertiserStatus, subaccountId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertisers&' + advertiserGroupIds.map(z => `advertiserGroupIds=${encodeURIComponent(z)}`).join('&') + '&' + floodlightConfigurationIds.map(z => `floodlightConfigurationIds=${encodeURIComponent(z)}`).join('&') + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&includeAdvertisersWithoutGroupsOnly=' + includeAdvertisersWithoutGroupsOnly + '&maxResults=' + maxResults + '&onlyParent=' + onlyParent + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&status=' + status + '&subaccountId=' + (subaccountId == null ? '' : encodeURIComponent(subaccountId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing advertiser. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/advertisers
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Advertiser ID.
		 * @return {void} Successful response
		 */
		Dfareporting_advertisers_patch(profileId: string, id: string, requestBody: Advertiser): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertisers&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new advertiser.
		 * Post userprofiles/{profileId}/advertisers
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_advertisers_insert(profileId: string, requestBody: Advertiser): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertisers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing advertiser.
		 * Put userprofiles/{profileId}/advertisers
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_advertisers_update(profileId: string, requestBody: Advertiser): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertisers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one advertiser by ID.
		 * Get userprofiles/{profileId}/advertisers/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Advertiser ID.
		 * @return {void} Successful response
		 */
		Dfareporting_advertisers_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertisers/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of browsers.
		 * Get userprofiles/{profileId}/browsers
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_browsers_list(profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/browsers', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of campaigns, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/campaigns
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} advertiserGroupIds Select only campaigns whose advertisers belong to these advertiser groups.
		 * @param {Array<string>} advertiserIds Select only campaigns that belong to these advertisers.
		 * @param {boolean} archived Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns.
		 * @param {boolean} atLeastOneOptimizationActivity Select only campaigns that have at least one optimization activity.
		 * @param {Array<string>} excludedIds Exclude campaigns with these IDs.
		 * @param {Array<string>} ids Select only campaigns with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} overriddenEventTagId Select only campaigns that have overridden this event tag ID.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @param {string} subaccountId Select only campaigns that belong to this subaccount.
		 * @return {void} Successful response
		 */
		Dfareporting_campaigns_list(profileId: string, advertiserGroupIds: Array<string>, advertiserIds: Array<string>, archived: boolean, atLeastOneOptimizationActivity: boolean, excludedIds: Array<string>, ids: Array<string>, maxResults: number, overriddenEventTagId: string, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder, subaccountId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/campaigns&' + advertiserGroupIds.map(z => `advertiserGroupIds=${encodeURIComponent(z)}`).join('&') + '&' + advertiserIds.map(z => `advertiserIds=${encodeURIComponent(z)}`).join('&') + '&archived=' + archived + '&atLeastOneOptimizationActivity=' + atLeastOneOptimizationActivity + '&' + excludedIds.map(z => `excludedIds=${encodeURIComponent(z)}`).join('&') + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&overriddenEventTagId=' + (overriddenEventTagId == null ? '' : encodeURIComponent(overriddenEventTagId)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&subaccountId=' + (subaccountId == null ? '' : encodeURIComponent(subaccountId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing campaign. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/campaigns
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Campaign ID.
		 * @return {void} Successful response
		 */
		Dfareporting_campaigns_patch(profileId: string, id: string, requestBody: Campaign): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/campaigns&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new campaign.
		 * Post userprofiles/{profileId}/campaigns
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_campaigns_insert(profileId: string, requestBody: Campaign): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/campaigns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing campaign.
		 * Put userprofiles/{profileId}/campaigns
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_campaigns_update(profileId: string, requestBody: Campaign): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/campaigns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
		 * Get userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} campaignId Campaign ID in this association.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_campaignCreativeAssociations_list(profileId: string, campaignId: string, maxResults: number, pageToken: string, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/campaigns/' + (campaignId == null ? '' : encodeURIComponent(campaignId)) + '/campaignCreativeAssociations&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
		 * Post userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} campaignId Campaign ID in this association.
		 * @return {void} Successful response
		 */
		Dfareporting_campaignCreativeAssociations_insert(profileId: string, campaignId: string, requestBody: CampaignCreativeAssociation): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/campaigns/' + (campaignId == null ? '' : encodeURIComponent(campaignId)) + '/campaignCreativeAssociations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one campaign by ID.
		 * Get userprofiles/{profileId}/campaigns/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Campaign ID.
		 * @return {void} Successful response
		 */
		Dfareporting_campaigns_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/campaigns/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of change logs. This method supports paging.
		 * Get userprofiles/{profileId}/changeLogs
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Dfareporting_changeLogs_listAction} action Select only change logs with the specified action.
		 * @param {Array<string>} ids Select only change logs with these IDs.
		 * @param {string} maxChangeTime Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} minChangeTime Select only change logs whose change time is after the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
		 * @param {Array<string>} objectIds Select only change logs with these object IDs.
		 * @param {Dfareporting_changeLogs_listObjectType} objectType Select only change logs with the specified object type.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Select only change logs whose object ID, user name, old or new values match the search string.
		 * @param {Array<string>} userProfileIds Select only change logs with these user profile IDs.
		 * @return {void} Successful response
		 */
		Dfareporting_changeLogs_list(profileId: string, action: Dfareporting_changeLogs_listAction, ids: Array<string>, maxChangeTime: string, maxResults: number, minChangeTime: string, objectIds: Array<string>, objectType: Dfareporting_changeLogs_listObjectType, pageToken: string, searchString: string, userProfileIds: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/changeLogs&action=' + action + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxChangeTime=' + (maxChangeTime == null ? '' : encodeURIComponent(maxChangeTime)) + '&maxResults=' + maxResults + '&minChangeTime=' + (minChangeTime == null ? '' : encodeURIComponent(minChangeTime)) + '&' + objectIds.map(z => `objectIds=${encodeURIComponent(z)}`).join('&') + '&objectType=' + objectType + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&' + userProfileIds.map(z => `userProfileIds=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one change log by ID.
		 * Get userprofiles/{profileId}/changeLogs/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Change log ID.
		 * @return {void} Successful response
		 */
		Dfareporting_changeLogs_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/changeLogs/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of cities, possibly filtered.
		 * Get userprofiles/{profileId}/cities
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} countryDartIds Select only cities from these countries.
		 * @param {Array<string>} dartIds Select only cities with these DART IDs.
		 * @param {string} namePrefix Select only cities with names starting with this prefix.
		 * @param {Array<string>} regionDartIds Select only cities from these regions.
		 * @return {void} Successful response
		 */
		Dfareporting_cities_list(profileId: string, countryDartIds: Array<string>, dartIds: Array<string>, namePrefix: string, regionDartIds: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/cities&' + countryDartIds.map(z => `countryDartIds=${encodeURIComponent(z)}`).join('&') + '&' + dartIds.map(z => `dartIds=${encodeURIComponent(z)}`).join('&') + '&namePrefix=' + (namePrefix == null ? '' : encodeURIComponent(namePrefix)) + '&' + regionDartIds.map(z => `regionDartIds=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of connection types.
		 * Get userprofiles/{profileId}/connectionTypes
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_connectionTypes_list(profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/connectionTypes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one connection type by ID.
		 * Get userprofiles/{profileId}/connectionTypes/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Connection type ID.
		 * @return {void} Successful response
		 */
		Dfareporting_connectionTypes_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/connectionTypes/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of content categories, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/contentCategories
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} ids Select only content categories with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "contentcategory*2015" will return objects with names like "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory", "contentcategory 2015", or simply "contentcategory".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_contentCategories_list(profileId: string, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/contentCategories&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing content category. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/contentCategories
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Content category ID.
		 * @return {void} Successful response
		 */
		Dfareporting_contentCategories_patch(profileId: string, id: string, requestBody: ContentCategory): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/contentCategories&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new content category.
		 * Post userprofiles/{profileId}/contentCategories
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_contentCategories_insert(profileId: string, requestBody: ContentCategory): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/contentCategories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing content category.
		 * Put userprofiles/{profileId}/contentCategories
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_contentCategories_update(profileId: string, requestBody: ContentCategory): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/contentCategories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing content category.
		 * Delete userprofiles/{profileId}/contentCategories/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Content category ID.
		 * @return {void} Successful response
		 */
		Dfareporting_contentCategories_delete(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/contentCategories/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one content category by ID.
		 * Get userprofiles/{profileId}/contentCategories/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Content category ID.
		 * @return {void} Successful response
		 */
		Dfareporting_contentCategories_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/contentCategories/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts conversions.
		 * Post userprofiles/{profileId}/conversions/batchinsert
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_conversions_batchinsert(profileId: string, requestBody: ConversionsBatchInsertRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/conversions/batchinsert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates existing conversions.
		 * Post userprofiles/{profileId}/conversions/batchupdate
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_conversions_batchupdate(profileId: string, requestBody: ConversionsBatchUpdateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/conversions/batchupdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of countries.
		 * Get userprofiles/{profileId}/countries
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_countries_list(profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/countries', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one country by ID.
		 * Get userprofiles/{profileId}/countries/{dartId}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} dartId Country DART ID.
		 * @return {void} Successful response
		 */
		Dfareporting_countries_get(profileId: string, dartId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/countries/' + (dartId == null ? '' : encodeURIComponent(dartId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of creative fields, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/creativeFields
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} advertiserIds Select only creative fields that belong to these advertisers.
		 * @param {Array<string>} ids Select only creative fields with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, "creativefield*2015" will return creative fields with names like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield", "creativefield 2015", or simply "creativefield".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_creativeFields_list(profileId: string, advertiserIds: Array<string>, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields&' + advertiserIds.map(z => `advertiserIds=${encodeURIComponent(z)}`).join('&') + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing creative field. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/creativeFields
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Creative Field ID
		 * @return {void} Successful response
		 */
		Dfareporting_creativeFields_patch(profileId: string, id: string, requestBody: CreativeField): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new creative field.
		 * Post userprofiles/{profileId}/creativeFields
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_creativeFields_insert(profileId: string, requestBody: CreativeField): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing creative field.
		 * Put userprofiles/{profileId}/creativeFields
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_creativeFields_update(profileId: string, requestBody: CreativeField): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of creative field values, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} creativeFieldId Creative field ID for this creative field value.
		 * @param {Array<string>} ids Select only creative field values with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed.
		 * @param {Dfareporting_creativeFieldValues_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_creativeFieldValues_list(profileId: string, creativeFieldId: string, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_creativeFieldValues_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields/' + (creativeFieldId == null ? '' : encodeURIComponent(creativeFieldId)) + '/creativeFieldValues&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing creative field value. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} creativeFieldId Creative field ID for this creative field value.
		 * @param {string} id Creative Field Value ID
		 * @return {void} Successful response
		 */
		Dfareporting_creativeFieldValues_patch(profileId: string, creativeFieldId: string, id: string, requestBody: CreativeFieldValue): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields/' + (creativeFieldId == null ? '' : encodeURIComponent(creativeFieldId)) + '/creativeFieldValues&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new creative field value.
		 * Post userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} creativeFieldId Creative field ID for this creative field value.
		 * @return {void} Successful response
		 */
		Dfareporting_creativeFieldValues_insert(profileId: string, creativeFieldId: string, requestBody: CreativeFieldValue): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields/' + (creativeFieldId == null ? '' : encodeURIComponent(creativeFieldId)) + '/creativeFieldValues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing creative field value.
		 * Put userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} creativeFieldId Creative field ID for this creative field value.
		 * @return {void} Successful response
		 */
		Dfareporting_creativeFieldValues_update(profileId: string, creativeFieldId: string, requestBody: CreativeFieldValue): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields/' + (creativeFieldId == null ? '' : encodeURIComponent(creativeFieldId)) + '/creativeFieldValues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing creative field value.
		 * Delete userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} creativeFieldId Creative field ID for this creative field value.
		 * @param {string} id Creative Field Value ID
		 * @return {void} Successful response
		 */
		Dfareporting_creativeFieldValues_delete(profileId: string, creativeFieldId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields/' + (creativeFieldId == null ? '' : encodeURIComponent(creativeFieldId)) + '/creativeFieldValues/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one creative field value by ID.
		 * Get userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} creativeFieldId Creative field ID for this creative field value.
		 * @param {string} id Creative Field Value ID
		 * @return {void} Successful response
		 */
		Dfareporting_creativeFieldValues_get(profileId: string, creativeFieldId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields/' + (creativeFieldId == null ? '' : encodeURIComponent(creativeFieldId)) + '/creativeFieldValues/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing creative field.
		 * Delete userprofiles/{profileId}/creativeFields/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Creative Field ID
		 * @return {void} Successful response
		 */
		Dfareporting_creativeFields_delete(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one creative field by ID.
		 * Get userprofiles/{profileId}/creativeFields/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Creative Field ID
		 * @return {void} Successful response
		 */
		Dfareporting_creativeFields_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of creative groups, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/creativeGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} advertiserIds Select only creative groups that belong to these advertisers.
		 * @param {number} groupNumber Select only creative groups that belong to this subgroup.
		 * @param {Array<string>} ids Select only creative groups with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, "creativegroup*2015" will return creative groups with names like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup", "creativegroup 2015", or simply "creativegroup".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_creativeGroups_list(profileId: string, advertiserIds: Array<string>, groupNumber: number, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeGroups&' + advertiserIds.map(z => `advertiserIds=${encodeURIComponent(z)}`).join('&') + '&groupNumber=' + groupNumber + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing creative group. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/creativeGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Creative group ID.
		 * @return {void} Successful response
		 */
		Dfareporting_creativeGroups_patch(profileId: string, id: string, requestBody: CreativeGroup): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeGroups&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new creative group.
		 * Post userprofiles/{profileId}/creativeGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_creativeGroups_insert(profileId: string, requestBody: CreativeGroup): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing creative group.
		 * Put userprofiles/{profileId}/creativeGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_creativeGroups_update(profileId: string, requestBody: CreativeGroup): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one creative group by ID.
		 * Get userprofiles/{profileId}/creativeGroups/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Creative group ID.
		 * @return {void} Successful response
		 */
		Dfareporting_creativeGroups_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeGroups/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of creatives, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/creatives
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {boolean} active Select only active creatives. Leave blank to select active and inactive creatives.
		 * @param {string} advertiserId Select only creatives with this advertiser ID.
		 * @param {boolean} archived Select only archived creatives. Leave blank to select archived and unarchived creatives.
		 * @param {string} campaignId Select only creatives with this campaign ID.
		 * @param {Array<string>} companionCreativeIds Select only in-stream video creatives with these companion IDs.
		 * @param {Array<string>} creativeFieldIds Select only creatives with these creative field IDs.
		 * @param {Array<string>} ids Select only creatives with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {Array<string>} renderingIds Select only creatives with these rendering IDs.
		 * @param {string} searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative".
		 * @param {Array<string>} sizeIds Select only creatives with these size IDs.
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @param {string} studioCreativeId Select only creatives corresponding to this Studio creative ID.
		 * @param {Array<CreativeType>} types Select only creatives with these creative types.
		 * @return {void} Successful response
		 */
		Dfareporting_creatives_list(profileId: string, active: boolean, advertiserId: string, archived: boolean, campaignId: string, companionCreativeIds: Array<string>, creativeFieldIds: Array<string>, ids: Array<string>, maxResults: number, pageToken: string, renderingIds: Array<string>, searchString: string, sizeIds: Array<string>, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder, studioCreativeId: string, types: Array<CreativeType>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creatives&active=' + active + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&archived=' + archived + '&campaignId=' + (campaignId == null ? '' : encodeURIComponent(campaignId)) + '&' + companionCreativeIds.map(z => `companionCreativeIds=${encodeURIComponent(z)}`).join('&') + '&' + creativeFieldIds.map(z => `creativeFieldIds=${encodeURIComponent(z)}`).join('&') + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + renderingIds.map(z => `renderingIds=${encodeURIComponent(z)}`).join('&') + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&' + sizeIds.map(z => `sizeIds=${encodeURIComponent(z)}`).join('&') + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&studioCreativeId=' + (studioCreativeId == null ? '' : encodeURIComponent(studioCreativeId)) + '&' + types.map(z => `types=${z}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing creative. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/creatives
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Creative ID.
		 * @return {void} Successful response
		 */
		Dfareporting_creatives_patch(profileId: string, id: string, requestBody: Creative): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creatives&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new creative.
		 * Post userprofiles/{profileId}/creatives
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_creatives_insert(profileId: string, requestBody: Creative): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creatives', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing creative.
		 * Put userprofiles/{profileId}/creatives
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_creatives_update(profileId: string, requestBody: Creative): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creatives', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one creative by ID.
		 * Get userprofiles/{profileId}/creatives/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Creative ID.
		 * @return {void} Successful response
		 */
		Dfareporting_creatives_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creatives/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves list of report dimension values for a list of filters.
		 * Post userprofiles/{profileId}/dimensionvalues/query
		 * @param {string} profileId The DFA user profile ID.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken The value of the nextToken from the previous result page.
		 * @return {void} Successful response
		 */
		Dfareporting_dimensionValues_query(profileId: string, maxResults: number, pageToken: string, requestBody: DimensionValueRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/dimensionvalues/query&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of directory sites, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/directorySites
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {boolean} acceptsInStreamVideoPlacements This search filter is no longer supported and will have no effect on the results returned.
		 * @param {boolean} acceptsInterstitialPlacements This search filter is no longer supported and will have no effect on the results returned.
		 * @param {boolean} acceptsPublisherPaidPlacements Select only directory sites that accept publisher paid placements. This field can be left blank.
		 * @param {boolean} active Select only active directory sites. Leave blank to retrieve both active and inactive directory sites.
		 * @param {string} dfpNetworkCode Select only directory sites with this Ad Manager network code.
		 * @param {Array<string>} ids Select only directory sites with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, "directory site*2015" will return objects with names like "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory site 2015" or simply, "directory site".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_directorySites_list(profileId: string, acceptsInStreamVideoPlacements: boolean, acceptsInterstitialPlacements: boolean, acceptsPublisherPaidPlacements: boolean, active: boolean, dfpNetworkCode: string, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/directorySites&acceptsInStreamVideoPlacements=' + acceptsInStreamVideoPlacements + '&acceptsInterstitialPlacements=' + acceptsInterstitialPlacements + '&acceptsPublisherPaidPlacements=' + acceptsPublisherPaidPlacements + '&active=' + active + '&dfpNetworkCode=' + (dfpNetworkCode == null ? '' : encodeURIComponent(dfpNetworkCode)) + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new directory site.
		 * Post userprofiles/{profileId}/directorySites
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_directorySites_insert(profileId: string, requestBody: DirectorySite): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/directorySites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one directory site by ID.
		 * Get userprofiles/{profileId}/directorySites/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Directory site ID.
		 * @return {void} Successful response
		 */
		Dfareporting_directorySites_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/directorySites/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of dynamic targeting keys.
		 * Get userprofiles/{profileId}/dynamicTargetingKeys
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} advertiserId Select only dynamic targeting keys whose object has this advertiser ID.
		 * @param {Array<string>} names Select only dynamic targeting keys exactly matching these names.
		 * @param {string} objectId Select only dynamic targeting keys with this object ID.
		 * @param {DynamicTargetingKeyObjectType} objectType Select only dynamic targeting keys with this object type.
		 * @return {void} Successful response
		 */
		Dfareporting_dynamicTargetingKeys_list(profileId: string, advertiserId: string, names: Array<string>, objectId: string, objectType: DynamicTargetingKeyObjectType): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/dynamicTargetingKeys&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&' + names.map(z => `names=${encodeURIComponent(z)}`).join('&') + '&objectId=' + (objectId == null ? '' : encodeURIComponent(objectId)) + '&objectType=' + objectType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
		 * Post userprofiles/{profileId}/dynamicTargetingKeys
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_dynamicTargetingKeys_insert(profileId: string, requestBody: DynamicTargetingKey): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/dynamicTargetingKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing dynamic targeting key.
		 * Delete userprofiles/{profileId}/dynamicTargetingKeys/{objectId}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} objectId ID of the object of this dynamic targeting key. This is a required field.
		 * @param {string} name Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.
		 * @param {DynamicTargetingKeyObjectType} objectType Type of the object of this dynamic targeting key. This is a required field.
		 * @return {void} Successful response
		 */
		Dfareporting_dynamicTargetingKeys_delete(profileId: string, objectId: string, name: string, objectType: DynamicTargetingKeyObjectType): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/dynamicTargetingKeys/' + (objectId == null ? '' : encodeURIComponent(objectId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&objectType=' + objectType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of event tags, possibly filtered.
		 * Get userprofiles/{profileId}/eventTags
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} adId Select only event tags that belong to this ad.
		 * @param {string} advertiserId Select only event tags that belong to this advertiser.
		 * @param {string} campaignId Select only event tags that belong to this campaign.
		 * @param {boolean} definitionsOnly Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags.
		 * @param {boolean} enabled Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well.
		 * @param {Array<EventTagType>} eventTagTypes Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking.
		 * @param {Array<string>} ids Select only event tags with these IDs.
		 * @param {string} searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "eventtag*2015" will return objects with names like "eventtag June 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_eventTags_list(profileId: string, adId: string, advertiserId: string, campaignId: string, definitionsOnly: boolean, enabled: boolean, eventTagTypes: Array<EventTagType>, ids: Array<string>, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/eventTags&adId=' + (adId == null ? '' : encodeURIComponent(adId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&campaignId=' + (campaignId == null ? '' : encodeURIComponent(campaignId)) + '&definitionsOnly=' + definitionsOnly + '&enabled=' + enabled + '&' + eventTagTypes.map(z => `eventTagTypes=${z}`).join('&') + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing event tag. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/eventTags
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Event tag ID.
		 * @return {void} Successful response
		 */
		Dfareporting_eventTags_patch(profileId: string, id: string, requestBody: EventTag): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/eventTags&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new event tag.
		 * Post userprofiles/{profileId}/eventTags
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_eventTags_insert(profileId: string, requestBody: EventTag): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/eventTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing event tag.
		 * Put userprofiles/{profileId}/eventTags
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_eventTags_update(profileId: string, requestBody: EventTag): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/eventTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing event tag.
		 * Delete userprofiles/{profileId}/eventTags/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Event tag ID.
		 * @return {void} Successful response
		 */
		Dfareporting_eventTags_delete(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/eventTags/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one event tag by ID.
		 * Get userprofiles/{profileId}/eventTags/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Event tag ID.
		 * @return {void} Successful response
		 */
		Dfareporting_eventTags_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/eventTags/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists files for a user profile.
		 * Get userprofiles/{profileId}/files
		 * @param {string} profileId The DFA profile ID.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken The value of the nextToken from the previous result page.
		 * @param {Dfareporting_files_listScope} scope The scope that defines which results are returned.
		 * @param {Dfareporting_files_listSortField} sortField The field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_files_list(profileId: string, maxResults: number, pageToken: string, scope: Dfareporting_files_listScope, sortField: Dfareporting_files_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/files&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&scope=' + scope + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/floodlightActivities
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} advertiserId Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
		 * @param {Array<string>} floodlightActivityGroupIds Select only floodlight activities with the specified floodlight activity group IDs.
		 * @param {string} floodlightActivityGroupName Select only floodlight activities with the specified floodlight activity group name.
		 * @param {string} floodlightActivityGroupTagString Select only floodlight activities with the specified floodlight activity group tag string.
		 * @param {FloodlightActivityFloodlightActivityGroupType} floodlightActivityGroupType Select only floodlight activities with the specified floodlight activity group type.
		 * @param {string} floodlightConfigurationId Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
		 * @param {Array<string>} ids Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @param {string} tagString Select only floodlight activities with the specified tag string.
		 * @return {void} Successful response
		 */
		Dfareporting_floodlightActivities_list(profileId: string, advertiserId: string, floodlightActivityGroupIds: Array<string>, floodlightActivityGroupName: string, floodlightActivityGroupTagString: string, floodlightActivityGroupType: FloodlightActivityFloodlightActivityGroupType, floodlightConfigurationId: string, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder, tagString: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivities&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&' + floodlightActivityGroupIds.map(z => `floodlightActivityGroupIds=${encodeURIComponent(z)}`).join('&') + '&floodlightActivityGroupName=' + (floodlightActivityGroupName == null ? '' : encodeURIComponent(floodlightActivityGroupName)) + '&floodlightActivityGroupTagString=' + (floodlightActivityGroupTagString == null ? '' : encodeURIComponent(floodlightActivityGroupTagString)) + '&floodlightActivityGroupType=' + floodlightActivityGroupType + '&floodlightConfigurationId=' + (floodlightConfigurationId == null ? '' : encodeURIComponent(floodlightConfigurationId)) + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&tagString=' + (tagString == null ? '' : encodeURIComponent(tagString)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing floodlight activity. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/floodlightActivities
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Floodlight activity ID.
		 * @return {void} Successful response
		 */
		Dfareporting_floodlightActivities_patch(profileId: string, id: string, requestBody: FloodlightActivity): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivities&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new floodlight activity.
		 * Post userprofiles/{profileId}/floodlightActivities
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_floodlightActivities_insert(profileId: string, requestBody: FloodlightActivity): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing floodlight activity.
		 * Put userprofiles/{profileId}/floodlightActivities
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_floodlightActivities_update(profileId: string, requestBody: FloodlightActivity): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates a tag for a floodlight activity.
		 * Post userprofiles/{profileId}/floodlightActivities/generatetag
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} floodlightActivityId Floodlight activity ID for which we want to generate a tag.
		 * @return {void} Successful response
		 */
		Dfareporting_floodlightActivities_generatetag(profileId: string, floodlightActivityId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivities/generatetag&floodlightActivityId=' + (floodlightActivityId == null ? '' : encodeURIComponent(floodlightActivityId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing floodlight activity.
		 * Delete userprofiles/{profileId}/floodlightActivities/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Floodlight activity ID.
		 * @return {void} Successful response
		 */
		Dfareporting_floodlightActivities_delete(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivities/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one floodlight activity by ID.
		 * Get userprofiles/{profileId}/floodlightActivities/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Floodlight activity ID.
		 * @return {void} Successful response
		 */
		Dfareporting_floodlightActivities_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivities/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/floodlightActivityGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} advertiserId Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
		 * @param {string} floodlightConfigurationId Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result.
		 * @param {Array<string>} ids Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivitygroup*2015" will return objects with names like "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @param {FloodlightActivityFloodlightActivityGroupType} type Select only floodlight activity groups with the specified floodlight activity group type.
		 * @return {void} Successful response
		 */
		Dfareporting_floodlightActivityGroups_list(profileId: string, advertiserId: string, floodlightConfigurationId: string, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder, type: FloodlightActivityFloodlightActivityGroupType): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivityGroups&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&floodlightConfigurationId=' + (floodlightConfigurationId == null ? '' : encodeURIComponent(floodlightConfigurationId)) + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&type=' + type, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing floodlight activity group. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/floodlightActivityGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Floodlight activity Group ID.
		 * @return {void} Successful response
		 */
		Dfareporting_floodlightActivityGroups_patch(profileId: string, id: string, requestBody: FloodlightActivityGroup): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivityGroups&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new floodlight activity group.
		 * Post userprofiles/{profileId}/floodlightActivityGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_floodlightActivityGroups_insert(profileId: string, requestBody: FloodlightActivityGroup): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivityGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing floodlight activity group.
		 * Put userprofiles/{profileId}/floodlightActivityGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_floodlightActivityGroups_update(profileId: string, requestBody: FloodlightActivityGroup): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivityGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one floodlight activity group by ID.
		 * Get userprofiles/{profileId}/floodlightActivityGroups/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Floodlight activity Group ID.
		 * @return {void} Successful response
		 */
		Dfareporting_floodlightActivityGroups_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivityGroups/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of floodlight configurations, possibly filtered.
		 * Get userprofiles/{profileId}/floodlightConfigurations
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} ids Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned.
		 * @return {void} Successful response
		 */
		Dfareporting_floodlightConfigurations_list(profileId: string, ids: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightConfigurations&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing floodlight configuration. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/floodlightConfigurations
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Floodlight configuration ID.
		 * @return {void} Successful response
		 */
		Dfareporting_floodlightConfigurations_patch(profileId: string, id: string, requestBody: FloodlightConfiguration): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightConfigurations&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing floodlight configuration.
		 * Put userprofiles/{profileId}/floodlightConfigurations
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_floodlightConfigurations_update(profileId: string, requestBody: FloodlightConfiguration): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one floodlight configuration by ID.
		 * Get userprofiles/{profileId}/floodlightConfigurations/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Floodlight configuration ID.
		 * @return {void} Successful response
		 */
		Dfareporting_floodlightConfigurations_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightConfigurations/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of languages.
		 * Get userprofiles/{profileId}/languages
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_languages_list(profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/languages', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of metros.
		 * Get userprofiles/{profileId}/metros
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_metros_list(profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/metros', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves list of available mobile apps.
		 * Get userprofiles/{profileId}/mobileApps
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<MobileAppDirectory>} directories Select only apps from these directories.
		 * @param {Array<string>} ids Select only apps with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "app*2015" will return objects with names like "app Jan 2018", "app Jan 2018", or simply "app 2018". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "app" will match objects with name "my app", "app 2018", or simply "app".
		 * @return {void} Successful response
		 */
		Dfareporting_mobileApps_list(profileId: string, directories: Array<MobileAppDirectory>, ids: Array<string>, maxResults: number, pageToken: string, searchString: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/mobileApps&' + directories.map(z => `directories=${z}`).join('&') + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one mobile app by ID.
		 * Get userprofiles/{profileId}/mobileApps/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Mobile app ID.
		 * @return {void} Successful response
		 */
		Dfareporting_mobileApps_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/mobileApps/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of mobile carriers.
		 * Get userprofiles/{profileId}/mobileCarriers
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_mobileCarriers_list(profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/mobileCarriers', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one mobile carrier by ID.
		 * Get userprofiles/{profileId}/mobileCarriers/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Mobile carrier ID.
		 * @return {void} Successful response
		 */
		Dfareporting_mobileCarriers_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/mobileCarriers/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of operating system versions.
		 * Get userprofiles/{profileId}/operatingSystemVersions
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_operatingSystemVersions_list(profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/operatingSystemVersions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one operating system version by ID.
		 * Get userprofiles/{profileId}/operatingSystemVersions/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Operating system version ID.
		 * @return {void} Successful response
		 */
		Dfareporting_operatingSystemVersions_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/operatingSystemVersions/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of operating systems.
		 * Get userprofiles/{profileId}/operatingSystems
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_operatingSystems_list(profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/operatingSystems', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one operating system by DART ID.
		 * Get userprofiles/{profileId}/operatingSystems/{dartId}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} dartId Operating system DART ID.
		 * @return {void} Successful response
		 */
		Dfareporting_operatingSystems_get(profileId: string, dartId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/operatingSystems/' + (dartId == null ? '' : encodeURIComponent(dartId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of placement groups, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/placementGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} advertiserIds Select only placement groups that belong to these advertisers.
		 * @param {boolean} archived Select only archived placements. Don't set this field to select both archived and non-archived placements.
		 * @param {Array<string>} campaignIds Select only placement groups that belong to these campaigns.
		 * @param {Array<string>} contentCategoryIds Select only placement groups that are associated with these content categories.
		 * @param {Array<string>} directorySiteIds Select only placement groups that are associated with these directory sites.
		 * @param {Array<string>} ids Select only placement groups with these IDs.
		 * @param {string} maxEndDate Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} maxStartDate Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
		 * @param {string} minEndDate Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
		 * @param {string} minStartDate Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {PlacementGroupPlacementGroupType} placementGroupType Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.
		 * @param {Array<string>} placementStrategyIds Select only placement groups that are associated with these placement strategies.
		 * @param {Array<PricingSchedulePricingType>} pricingTypes Select only placement groups with these pricing types.
		 * @param {string} searchString Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup".
		 * @param {Array<string>} siteIds Select only placement groups that are associated with these sites.
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_placementGroups_list(profileId: string, advertiserIds: Array<string>, archived: boolean, campaignIds: Array<string>, contentCategoryIds: Array<string>, directorySiteIds: Array<string>, ids: Array<string>, maxEndDate: string, maxResults: number, maxStartDate: string, minEndDate: string, minStartDate: string, pageToken: string, placementGroupType: PlacementGroupPlacementGroupType, placementStrategyIds: Array<string>, pricingTypes: Array<PricingSchedulePricingType>, searchString: string, siteIds: Array<string>, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementGroups&' + advertiserIds.map(z => `advertiserIds=${encodeURIComponent(z)}`).join('&') + '&archived=' + archived + '&' + campaignIds.map(z => `campaignIds=${encodeURIComponent(z)}`).join('&') + '&' + contentCategoryIds.map(z => `contentCategoryIds=${encodeURIComponent(z)}`).join('&') + '&' + directorySiteIds.map(z => `directorySiteIds=${encodeURIComponent(z)}`).join('&') + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxEndDate=' + (maxEndDate == null ? '' : encodeURIComponent(maxEndDate)) + '&maxResults=' + maxResults + '&maxStartDate=' + (maxStartDate == null ? '' : encodeURIComponent(maxStartDate)) + '&minEndDate=' + (minEndDate == null ? '' : encodeURIComponent(minEndDate)) + '&minStartDate=' + (minStartDate == null ? '' : encodeURIComponent(minStartDate)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&placementGroupType=' + placementGroupType + '&' + placementStrategyIds.map(z => `placementStrategyIds=${encodeURIComponent(z)}`).join('&') + '&' + pricingTypes.map(z => `pricingTypes=${z}`).join('&') + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&' + siteIds.map(z => `siteIds=${encodeURIComponent(z)}`).join('&') + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing placement group. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/placementGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Placement group ID.
		 * @return {void} Successful response
		 */
		Dfareporting_placementGroups_patch(profileId: string, id: string, requestBody: PlacementGroup): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementGroups&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new placement group.
		 * Post userprofiles/{profileId}/placementGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_placementGroups_insert(profileId: string, requestBody: PlacementGroup): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing placement group.
		 * Put userprofiles/{profileId}/placementGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_placementGroups_update(profileId: string, requestBody: PlacementGroup): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one placement group by ID.
		 * Get userprofiles/{profileId}/placementGroups/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Placement group ID.
		 * @return {void} Successful response
		 */
		Dfareporting_placementGroups_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementGroups/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of placement strategies, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/placementStrategies
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} ids Select only placement strategies with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_placementStrategies_list(profileId: string, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementStrategies&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing placement strategy. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/placementStrategies
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Placement strategy ID.
		 * @return {void} Successful response
		 */
		Dfareporting_placementStrategies_patch(profileId: string, id: string, requestBody: PlacementStrategy): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementStrategies&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new placement strategy.
		 * Post userprofiles/{profileId}/placementStrategies
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_placementStrategies_insert(profileId: string, requestBody: PlacementStrategy): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementStrategies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing placement strategy.
		 * Put userprofiles/{profileId}/placementStrategies
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_placementStrategies_update(profileId: string, requestBody: PlacementStrategy): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementStrategies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing placement strategy.
		 * Delete userprofiles/{profileId}/placementStrategies/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Placement strategy ID.
		 * @return {void} Successful response
		 */
		Dfareporting_placementStrategies_delete(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementStrategies/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one placement strategy by ID.
		 * Get userprofiles/{profileId}/placementStrategies/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Placement strategy ID.
		 * @return {void} Successful response
		 */
		Dfareporting_placementStrategies_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementStrategies/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of placements, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/placements
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} advertiserIds Select only placements that belong to these advertisers.
		 * @param {boolean} archived Select only archived placements. Don't set this field to select both archived and non-archived placements.
		 * @param {Array<string>} campaignIds Select only placements that belong to these campaigns.
		 * @param {Array<AdCompatibility>} compatibilities Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
		 * @param {Array<string>} contentCategoryIds Select only placements that are associated with these content categories.
		 * @param {Array<string>} directorySiteIds Select only placements that are associated with these directory sites.
		 * @param {Array<string>} groupIds Select only placements that belong to these placement groups.
		 * @param {Array<string>} ids Select only placements with these IDs.
		 * @param {string} maxEndDate Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} maxStartDate Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
		 * @param {string} minEndDate Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
		 * @param {string} minStartDate Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {PlacementPaymentSource} paymentSource Select only placements with this payment source.
		 * @param {Array<string>} placementStrategyIds Select only placements that are associated with these placement strategies.
		 * @param {Array<PricingSchedulePricingType>} pricingTypes Select only placements with these pricing types.
		 * @param {string} searchString Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement".
		 * @param {Array<string>} siteIds Select only placements that are associated with these sites.
		 * @param {Array<string>} sizeIds Select only placements that are associated with these sizes.
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_placements_list(profileId: string, advertiserIds: Array<string>, archived: boolean, campaignIds: Array<string>, compatibilities: Array<AdCompatibility>, contentCategoryIds: Array<string>, directorySiteIds: Array<string>, groupIds: Array<string>, ids: Array<string>, maxEndDate: string, maxResults: number, maxStartDate: string, minEndDate: string, minStartDate: string, pageToken: string, paymentSource: PlacementPaymentSource, placementStrategyIds: Array<string>, pricingTypes: Array<PricingSchedulePricingType>, searchString: string, siteIds: Array<string>, sizeIds: Array<string>, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placements&' + advertiserIds.map(z => `advertiserIds=${encodeURIComponent(z)}`).join('&') + '&archived=' + archived + '&' + campaignIds.map(z => `campaignIds=${encodeURIComponent(z)}`).join('&') + '&' + compatibilities.map(z => `compatibilities=${z}`).join('&') + '&' + contentCategoryIds.map(z => `contentCategoryIds=${encodeURIComponent(z)}`).join('&') + '&' + directorySiteIds.map(z => `directorySiteIds=${encodeURIComponent(z)}`).join('&') + '&' + groupIds.map(z => `groupIds=${encodeURIComponent(z)}`).join('&') + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxEndDate=' + (maxEndDate == null ? '' : encodeURIComponent(maxEndDate)) + '&maxResults=' + maxResults + '&maxStartDate=' + (maxStartDate == null ? '' : encodeURIComponent(maxStartDate)) + '&minEndDate=' + (minEndDate == null ? '' : encodeURIComponent(minEndDate)) + '&minStartDate=' + (minStartDate == null ? '' : encodeURIComponent(minStartDate)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&paymentSource=' + paymentSource + '&' + placementStrategyIds.map(z => `placementStrategyIds=${encodeURIComponent(z)}`).join('&') + '&' + pricingTypes.map(z => `pricingTypes=${z}`).join('&') + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&' + siteIds.map(z => `siteIds=${encodeURIComponent(z)}`).join('&') + '&' + sizeIds.map(z => `sizeIds=${encodeURIComponent(z)}`).join('&') + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing placement. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/placements
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Placement ID.
		 * @return {void} Successful response
		 */
		Dfareporting_placements_patch(profileId: string, id: string, requestBody: Placement): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placements&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new placement.
		 * Post userprofiles/{profileId}/placements
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_placements_insert(profileId: string, requestBody: Placement): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing placement.
		 * Put userprofiles/{profileId}/placements
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_placements_update(profileId: string, requestBody: Placement): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates tags for a placement.
		 * Post userprofiles/{profileId}/placements/generatetags
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} campaignId Generate placements belonging to this campaign. This is a required field.
		 * @param {Array<string>} placementIds Generate tags for these placements.
		 * @param {Array<TagDataFormat>} tagFormats Tag formats to generate for these placements.
		 * Note: PLACEMENT_TAG_STANDARD can only be generated for 1x1 placements.
		 * @return {void} Successful response
		 */
		Dfareporting_placements_generatetags(profileId: string, campaignId: string, placementIds: Array<string>, tagFormats: Array<TagDataFormat>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placements/generatetags&campaignId=' + (campaignId == null ? '' : encodeURIComponent(campaignId)) + '&' + placementIds.map(z => `placementIds=${encodeURIComponent(z)}`).join('&') + '&' + tagFormats.map(z => `tagFormats=${z}`).join('&'), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one placement by ID.
		 * Get userprofiles/{profileId}/placements/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Placement ID.
		 * @return {void} Successful response
		 */
		Dfareporting_placements_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placements/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of platform types.
		 * Get userprofiles/{profileId}/platformTypes
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_platformTypes_list(profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/platformTypes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one platform type by ID.
		 * Get userprofiles/{profileId}/platformTypes/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Platform type ID.
		 * @return {void} Successful response
		 */
		Dfareporting_platformTypes_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/platformTypes/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of postal codes.
		 * Get userprofiles/{profileId}/postalCodes
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_postalCodes_list(profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/postalCodes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one postal code by ID.
		 * Get userprofiles/{profileId}/postalCodes/{code}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} code Postal code ID.
		 * @return {void} Successful response
		 */
		Dfareporting_postalCodes_get(profileId: string, code: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/postalCodes/' + (code == null ? '' : encodeURIComponent(code)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of projects, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/projects
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} advertiserIds Select only projects with these advertiser IDs.
		 * @param {Array<string>} ids Select only projects with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for projects by name or ID. Wildcards (*) are allowed. For example, "project*2015" will return projects with names like "project June 2015", "project April 2015", or simply "project 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "project" will match projects with name "my project", "project 2015", or simply "project".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_projects_list(profileId: string, advertiserIds: Array<string>, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/projects&' + advertiserIds.map(z => `advertiserIds=${encodeURIComponent(z)}`).join('&') + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one project by ID.
		 * Get userprofiles/{profileId}/projects/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Project ID.
		 * @return {void} Successful response
		 */
		Dfareporting_projects_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/projects/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of inventory items, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/projects/{projectId}/inventoryItems
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} projectId Project ID for order documents.
		 * @param {Array<string>} ids Select only inventory items with these IDs.
		 * @param {boolean} inPlan Select only inventory items that are in plan.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {Array<string>} orderId Select only inventory items that belong to specified orders.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {Array<string>} siteId Select only inventory items that are associated with these sites.
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @param {InventoryItemType} type Select only inventory items with this type.
		 * @return {void} Successful response
		 */
		Dfareporting_inventoryItems_list(profileId: string, projectId: string, ids: Array<string>, inPlan: boolean, maxResults: number, orderId: Array<string>, pageToken: string, siteId: Array<string>, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder, type: InventoryItemType): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/inventoryItems&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&inPlan=' + inPlan + '&maxResults=' + maxResults + '&' + orderId.map(z => `orderId=${encodeURIComponent(z)}`).join('&') + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + siteId.map(z => `siteId=${encodeURIComponent(z)}`).join('&') + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&type=' + type, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one inventory item by ID.
		 * Get userprofiles/{profileId}/projects/{projectId}/inventoryItems/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} projectId Project ID for order documents.
		 * @param {string} id Inventory item ID.
		 * @return {void} Successful response
		 */
		Dfareporting_inventoryItems_get(profileId: string, projectId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/inventoryItems/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of order documents, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/projects/{projectId}/orderDocuments
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} projectId Project ID for order documents.
		 * @param {boolean} approved Select only order documents that have been approved by at least one user.
		 * @param {Array<string>} ids Select only order documents with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {Array<string>} orderId Select only order documents for specified orders.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for order documents by name or ID. Wildcards (*) are allowed. For example, "orderdocument*2015" will return order documents with names like "orderdocument June 2015", "orderdocument April 2015", or simply "orderdocument 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "orderdocument" will match order documents with name "my orderdocument", "orderdocument 2015", or simply "orderdocument".
		 * @param {Array<string>} siteId Select only order documents that are associated with these sites.
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_orderDocuments_list(profileId: string, projectId: string, approved: boolean, ids: Array<string>, maxResults: number, orderId: Array<string>, pageToken: string, searchString: string, siteId: Array<string>, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/orderDocuments&approved=' + approved + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&' + orderId.map(z => `orderId=${encodeURIComponent(z)}`).join('&') + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&' + siteId.map(z => `siteId=${encodeURIComponent(z)}`).join('&') + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one order document by ID.
		 * Get userprofiles/{profileId}/projects/{projectId}/orderDocuments/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} projectId Project ID for order documents.
		 * @param {string} id Order document ID.
		 * @return {void} Successful response
		 */
		Dfareporting_orderDocuments_get(profileId: string, projectId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/orderDocuments/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of orders, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/projects/{projectId}/orders
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} projectId Project ID for orders.
		 * @param {Array<string>} ids Select only orders with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for orders by name or ID. Wildcards (*) are allowed. For example, "order*2015" will return orders with names like "order June 2015", "order April 2015", or simply "order 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "order" will match orders with name "my order", "order 2015", or simply "order".
		 * @param {Array<string>} siteId Select only orders that are associated with these site IDs.
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_orders_list(profileId: string, projectId: string, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, siteId: Array<string>, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/orders&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&' + siteId.map(z => `siteId=${encodeURIComponent(z)}`).join('&') + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one order by ID.
		 * Get userprofiles/{profileId}/projects/{projectId}/orders/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} projectId Project ID for orders.
		 * @param {string} id Order ID.
		 * @return {void} Successful response
		 */
		Dfareporting_orders_get(profileId: string, projectId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/orders/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of regions.
		 * Get userprofiles/{profileId}/regions
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_regions_list(profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/regions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing remarketing list share. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/remarketingListShares
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} remarketingListId Remarketing list ID.
		 * @return {void} Successful response
		 */
		Dfareporting_remarketingListShares_patch(profileId: string, remarketingListId: string, requestBody: RemarketingListShare): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/remarketingListShares&remarketingListId=' + (remarketingListId == null ? '' : encodeURIComponent(remarketingListId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing remarketing list share.
		 * Put userprofiles/{profileId}/remarketingListShares
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_remarketingListShares_update(profileId: string, requestBody: RemarketingListShare): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/remarketingListShares', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one remarketing list share by remarketing list ID.
		 * Get userprofiles/{profileId}/remarketingListShares/{remarketingListId}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} remarketingListId Remarketing list ID.
		 * @return {void} Successful response
		 */
		Dfareporting_remarketingListShares_get(profileId: string, remarketingListId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/remarketingListShares/' + (remarketingListId == null ? '' : encodeURIComponent(remarketingListId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/remarketingLists
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} advertiserId Select only remarketing lists owned by this advertiser.
		 * @param {boolean} active Select only active or only inactive remarketing lists.
		 * @param {string} floodlightActivityId Select only remarketing lists that have this floodlight activity ID.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} name Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_remarketingLists_list(profileId: string, advertiserId: string, active: boolean, floodlightActivityId: string, maxResults: number, name: string, pageToken: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/remarketingLists&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&active=' + active + '&floodlightActivityId=' + (floodlightActivityId == null ? '' : encodeURIComponent(floodlightActivityId)) + '&maxResults=' + maxResults + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing remarketing list. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/remarketingLists
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Remarketing list ID.
		 * @return {void} Successful response
		 */
		Dfareporting_remarketingLists_patch(profileId: string, id: string, requestBody: RemarketingList): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/remarketingLists&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new remarketing list.
		 * Post userprofiles/{profileId}/remarketingLists
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_remarketingLists_insert(profileId: string, requestBody: RemarketingList): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/remarketingLists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing remarketing list.
		 * Put userprofiles/{profileId}/remarketingLists
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_remarketingLists_update(profileId: string, requestBody: RemarketingList): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/remarketingLists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one remarketing list by ID.
		 * Get userprofiles/{profileId}/remarketingLists/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Remarketing list ID.
		 * @return {void} Successful response
		 */
		Dfareporting_remarketingLists_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/remarketingLists/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves list of reports.
		 * Get userprofiles/{profileId}/reports
		 * @param {string} profileId The DFA user profile ID.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken The value of the nextToken from the previous result page.
		 * @param {Dfareporting_reports_listScope} scope The scope that defines which results are returned.
		 * @param {Dfareporting_reports_listSortField} sortField The field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_reports_list(profileId: string, maxResults: number, pageToken: string, scope: Dfareporting_reports_listScope, sortField: Dfareporting_reports_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&scope=' + scope + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a report.
		 * Post userprofiles/{profileId}/reports
		 * @param {string} profileId The DFA user profile ID.
		 * @return {void} Successful response
		 */
		Dfareporting_reports_insert(profileId: string, requestBody: Report): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
		 * Post userprofiles/{profileId}/reports/compatiblefields/query
		 * @param {string} profileId The DFA user profile ID.
		 * @return {void} Successful response
		 */
		Dfareporting_reports_compatibleFields_query(profileId: string, requestBody: Report): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports/compatiblefields/query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a report by its ID.
		 * Delete userprofiles/{profileId}/reports/{reportId}
		 * @param {string} profileId The DFA user profile ID.
		 * @param {string} reportId The ID of the report.
		 * @return {void} Successful response
		 */
		Dfareporting_reports_delete(profileId: string, reportId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a report by its ID.
		 * Get userprofiles/{profileId}/reports/{reportId}
		 * @param {string} profileId The DFA user profile ID.
		 * @param {string} reportId The ID of the report.
		 * @return {void} Successful response
		 */
		Dfareporting_reports_get(profileId: string, reportId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a report. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/reports/{reportId}
		 * @param {string} profileId The DFA user profile ID.
		 * @param {string} reportId The ID of the report.
		 * @return {void} Successful response
		 */
		Dfareporting_reports_patch(profileId: string, reportId: string, requestBody: Report): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a report.
		 * Put userprofiles/{profileId}/reports/{reportId}
		 * @param {string} profileId The DFA user profile ID.
		 * @param {string} reportId The ID of the report.
		 * @return {void} Successful response
		 */
		Dfareporting_reports_update(profileId: string, reportId: string, requestBody: Report): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists files for a report.
		 * Get userprofiles/{profileId}/reports/{reportId}/files
		 * @param {string} profileId The DFA user profile ID.
		 * @param {string} reportId The ID of the report.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken The value of the nextToken from the previous result page.
		 * @param {Dfareporting_files_listSortField} sortField The field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_reports_files_list(profileId: string, reportId: string, maxResults: number, pageToken: string, sortField: Dfareporting_files_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)) + '/files&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a report file by its report ID and file ID. This method supports media download.
		 * Get userprofiles/{profileId}/reports/{reportId}/files/{fileId}
		 * @param {string} profileId The DFA user profile ID.
		 * @param {string} reportId The ID of the report.
		 * @param {string} fileId The ID of the report file.
		 * @return {void} Successful response
		 */
		Dfareporting_reports_files_get(profileId: string, reportId: string, fileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)) + '/files/' + (fileId == null ? '' : encodeURIComponent(fileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Runs a report.
		 * Post userprofiles/{profileId}/reports/{reportId}/run
		 * @param {string} profileId The DFA profile ID.
		 * @param {string} reportId The ID of the report.
		 * @param {boolean} synchronous If set and true, tries to run the report synchronously.
		 * @return {void} Successful response
		 */
		Dfareporting_reports_run(profileId: string, reportId: string, synchronous: boolean): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)) + '/run&synchronous=' + synchronous, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of sites, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/sites
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {boolean} acceptsInStreamVideoPlacements This search filter is no longer supported and will have no effect on the results returned.
		 * @param {boolean} acceptsInterstitialPlacements This search filter is no longer supported and will have no effect on the results returned.
		 * @param {boolean} acceptsPublisherPaidPlacements Select only sites that accept publisher paid placements.
		 * @param {boolean} adWordsSite Select only AdWords sites.
		 * @param {boolean} approved Select only approved sites.
		 * @param {Array<string>} campaignIds Select only sites with these campaign IDs.
		 * @param {Array<string>} directorySiteIds Select only sites with these directory site IDs.
		 * @param {Array<string>} ids Select only sites with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @param {string} subaccountId Select only sites with this subaccount ID.
		 * @param {boolean} unmappedSite Select only sites that have not been mapped to a directory site.
		 * @return {void} Successful response
		 */
		Dfareporting_sites_list(profileId: string, acceptsInStreamVideoPlacements: boolean, acceptsInterstitialPlacements: boolean, acceptsPublisherPaidPlacements: boolean, adWordsSite: boolean, approved: boolean, campaignIds: Array<string>, directorySiteIds: Array<string>, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder, subaccountId: string, unmappedSite: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/sites&acceptsInStreamVideoPlacements=' + acceptsInStreamVideoPlacements + '&acceptsInterstitialPlacements=' + acceptsInterstitialPlacements + '&acceptsPublisherPaidPlacements=' + acceptsPublisherPaidPlacements + '&adWordsSite=' + adWordsSite + '&approved=' + approved + '&' + campaignIds.map(z => `campaignIds=${encodeURIComponent(z)}`).join('&') + '&' + directorySiteIds.map(z => `directorySiteIds=${encodeURIComponent(z)}`).join('&') + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&subaccountId=' + (subaccountId == null ? '' : encodeURIComponent(subaccountId)) + '&unmappedSite=' + unmappedSite, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing site. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/sites
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Site ID.
		 * @return {void} Successful response
		 */
		Dfareporting_sites_patch(profileId: string, id: string, requestBody: Site): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/sites&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new site.
		 * Post userprofiles/{profileId}/sites
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_sites_insert(profileId: string, requestBody: Site): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/sites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing site.
		 * Put userprofiles/{profileId}/sites
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_sites_update(profileId: string, requestBody: Site): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/sites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one site by ID.
		 * Get userprofiles/{profileId}/sites/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Site ID.
		 * @return {void} Successful response
		 */
		Dfareporting_sites_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/sites/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.
		 * Get userprofiles/{profileId}/sizes
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {number} height Select only sizes with this height.
		 * @param {boolean} iabStandard Select only IAB standard sizes.
		 * @param {Array<string>} ids Select only sizes with these IDs.
		 * @param {number} width Select only sizes with this width.
		 * @return {void} Successful response
		 */
		Dfareporting_sizes_list(profileId: string, height: number, iabStandard: boolean, ids: Array<string>, width: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/sizes&height=' + height + '&iabStandard=' + iabStandard + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&width=' + width, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new size.
		 * Post userprofiles/{profileId}/sizes
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_sizes_insert(profileId: string, requestBody: Size): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/sizes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one size by ID.
		 * Get userprofiles/{profileId}/sizes/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Size ID.
		 * @return {void} Successful response
		 */
		Dfareporting_sizes_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/sizes/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of subaccounts, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/subaccounts
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} ids Select only subaccounts with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_subaccounts_list(profileId: string, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/subaccounts&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing subaccount. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/subaccounts
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Subaccount ID.
		 * @return {void} Successful response
		 */
		Dfareporting_subaccounts_patch(profileId: string, id: string, requestBody: Subaccount): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/subaccounts&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new subaccount.
		 * Post userprofiles/{profileId}/subaccounts
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_subaccounts_insert(profileId: string, requestBody: Subaccount): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/subaccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing subaccount.
		 * Put userprofiles/{profileId}/subaccounts
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_subaccounts_update(profileId: string, requestBody: Subaccount): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/subaccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one subaccount by ID.
		 * Get userprofiles/{profileId}/subaccounts/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Subaccount ID.
		 * @return {void} Successful response
		 */
		Dfareporting_subaccounts_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/subaccounts/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/targetableRemarketingLists
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} advertiserId Select only targetable remarketing lists targetable by these advertisers.
		 * @param {boolean} active Select only active or only inactive targetable remarketing lists.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} name Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_targetableRemarketingLists_list(profileId: string, advertiserId: string, active: boolean, maxResults: number, name: string, pageToken: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/targetableRemarketingLists&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&active=' + active + '&maxResults=' + maxResults + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one remarketing list by ID.
		 * Get userprofiles/{profileId}/targetableRemarketingLists/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Remarketing list ID.
		 * @return {void} Successful response
		 */
		Dfareporting_targetableRemarketingLists_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/targetableRemarketingLists/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of targeting templates, optionally filtered. This method supports paging.
		 * Get userprofiles/{profileId}/targetingTemplates
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} advertiserId Select only targeting templates with this advertiser ID.
		 * @param {Array<string>} ids Select only targeting templates with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "template*2015" will return objects with names like "template June 2015", "template April 2015", or simply "template 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "template" will match objects with name "my template", "template 2015", or simply "template".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {void} Successful response
		 */
		Dfareporting_targetingTemplates_list(profileId: string, advertiserId: string, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/targetingTemplates&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing targeting template. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/targetingTemplates
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Targeting template ID.
		 * @return {void} Successful response
		 */
		Dfareporting_targetingTemplates_patch(profileId: string, id: string, requestBody: TargetingTemplate): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/targetingTemplates&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new targeting template.
		 * Post userprofiles/{profileId}/targetingTemplates
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_targetingTemplates_insert(profileId: string, requestBody: TargetingTemplate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/targetingTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing targeting template.
		 * Put userprofiles/{profileId}/targetingTemplates
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_targetingTemplates_update(profileId: string, requestBody: TargetingTemplate): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/targetingTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one targeting template by ID.
		 * Get userprofiles/{profileId}/targetingTemplates/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Targeting template ID.
		 * @return {void} Successful response
		 */
		Dfareporting_targetingTemplates_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/targetingTemplates/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of all supported user role permission groups.
		 * Get userprofiles/{profileId}/userRolePermissionGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_userRolePermissionGroups_list(profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRolePermissionGroups', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one user role permission group by ID.
		 * Get userprofiles/{profileId}/userRolePermissionGroups/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id User role permission group ID.
		 * @return {void} Successful response
		 */
		Dfareporting_userRolePermissionGroups_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRolePermissionGroups/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of user role permissions, possibly filtered.
		 * Get userprofiles/{profileId}/userRolePermissions
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} ids Select only user role permissions with these IDs.
		 * @return {void} Successful response
		 */
		Dfareporting_userRolePermissions_list(profileId: string, ids: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRolePermissions&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one user role permission by ID.
		 * Get userprofiles/{profileId}/userRolePermissions/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id User role permission ID.
		 * @return {void} Successful response
		 */
		Dfareporting_userRolePermissions_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRolePermissions/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of user roles, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/userRoles
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {boolean} accountUserRoleOnly Select only account level user roles not associated with any specific subaccount.
		 * @param {Array<string>} ids Select only user roles with the specified IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @param {string} subaccountId Select only user roles that belong to this subaccount.
		 * @return {void} Successful response
		 */
		Dfareporting_userRoles_list(profileId: string, accountUserRoleOnly: boolean, ids: Array<string>, maxResults: number, pageToken: string, searchString: string, sortField: Dfareporting_accountUserProfiles_listSortField, sortOrder: SortedDimensionSortOrder, subaccountId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRoles&accountUserRoleOnly=' + accountUserRoleOnly + '&' + ids.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&subaccountId=' + (subaccountId == null ? '' : encodeURIComponent(subaccountId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing user role. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/userRoles
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id User role ID.
		 * @return {void} Successful response
		 */
		Dfareporting_userRoles_patch(profileId: string, id: string, requestBody: UserRole): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRoles&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a new user role.
		 * Post userprofiles/{profileId}/userRoles
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_userRoles_insert(profileId: string, requestBody: UserRole): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRoles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing user role.
		 * Put userprofiles/{profileId}/userRoles
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_userRoles_update(profileId: string, requestBody: UserRole): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRoles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing user role.
		 * Delete userprofiles/{profileId}/userRoles/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id User role ID.
		 * @return {void} Successful response
		 */
		Dfareporting_userRoles_delete(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRoles/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one user role by ID.
		 * Get userprofiles/{profileId}/userRoles/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id User role ID.
		 * @return {void} Successful response
		 */
		Dfareporting_userRoles_get(profileId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRoles/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists available video formats.
		 * Get userprofiles/{profileId}/videoFormats
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {void} Successful response
		 */
		Dfareporting_videoFormats_list(profileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/videoFormats', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one video format by ID.
		 * Get userprofiles/{profileId}/videoFormats/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {number} id Video format ID.
		 * @return {void} Successful response
		 */
		Dfareporting_videoFormats_get(profileId: string, id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/videoFormats/' + id, { observe: 'response', responseType: 'text' });
		}
	}

	export enum Dfareporting_accountUserProfiles_listSortField { ID = 0, NAME = 1 }

	export enum Dfareporting_changeLogs_listAction { ACTION_ADD = 0, ACTION_ASSIGN = 1, ACTION_ASSOCIATE = 2, ACTION_CREATE = 3, ACTION_DELETE = 4, ACTION_DISABLE = 5, ACTION_EMAIL_TAGS = 6, ACTION_ENABLE = 7, ACTION_LINK = 8, ACTION_MARK_AS_DEFAULT = 9, ACTION_PUSH = 10, ACTION_REMOVE = 11, ACTION_SEND = 12, ACTION_SHARE = 13, ACTION_UNASSIGN = 14, ACTION_UNLINK = 15, ACTION_UPDATE = 16 }

	export enum Dfareporting_changeLogs_listObjectType { OBJECT_ACCOUNT = 0, OBJECT_ACCOUNT_BILLING_FEATURE = 1, OBJECT_AD = 2, OBJECT_ADVERTISER = 3, OBJECT_ADVERTISER_GROUP = 4, OBJECT_BILLING_ACCOUNT_GROUP = 5, OBJECT_BILLING_FEATURE = 6, OBJECT_BILLING_MINIMUM_FEE = 7, OBJECT_BILLING_PROFILE = 8, OBJECT_CAMPAIGN = 9, OBJECT_CONTENT_CATEGORY = 10, OBJECT_CREATIVE = 11, OBJECT_CREATIVE_ASSET = 12, OBJECT_CREATIVE_BUNDLE = 13, OBJECT_CREATIVE_FIELD = 14, OBJECT_CREATIVE_GROUP = 15, OBJECT_DFA_SITE = 16, OBJECT_EVENT_TAG = 17, OBJECT_FLOODLIGHT_ACTIVITY_GROUP = 18, OBJECT_FLOODLIGHT_ACTVITY = 19, OBJECT_FLOODLIGHT_CONFIGURATION = 20, OBJECT_FLOODLIGHT_DV360_LINK = 21, OBJECT_INSTREAM_CREATIVE = 22, OBJECT_LANDING_PAGE = 23, OBJECT_MEDIA_ORDER = 24, OBJECT_PLACEMENT = 25, OBJECT_PLACEMENT_STRATEGY = 26, OBJECT_PLAYSTORE_LINK = 27, OBJECT_PROVIDED_LIST_CLIENT = 28, OBJECT_RATE_CARD = 29, OBJECT_REMARKETING_LIST = 30, OBJECT_RICHMEDIA_CREATIVE = 31, OBJECT_SD_SITE = 32, OBJECT_SEARCH_LIFT_STUDY = 33, OBJECT_SIZE = 34, OBJECT_SUBACCOUNT = 35, OBJECT_TARGETING_TEMPLATE = 36, OBJECT_USER_PROFILE = 37, OBJECT_USER_PROFILE_FILTER = 38, OBJECT_USER_ROLE = 39 }

	export enum Dfareporting_creativeFieldValues_listSortField { ID = 0, VALUE = 1 }

	export enum Dfareporting_files_listScope { ALL = 0, MINE = 1, SHARED_WITH_ME = 2 }

	export enum Dfareporting_files_listSortField { ID = 0, LAST_MODIFIED_TIME = 1 }

	export enum Dfareporting_reports_listScope { ALL = 0, MINE = 1 }

	export enum Dfareporting_reports_listSortField { ID = 0, LAST_MODIFIED_TIME = 1, NAME = 2 }

}

