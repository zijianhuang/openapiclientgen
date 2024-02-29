import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents an AdSchedule criterion. AdSchedule is specified as the day of the week and a time interval within which ads will be shown. No more than six AdSchedules can be added for the same day. */
	export interface GoogleAdsSearchads360V0Common__AdScheduleInfo {

		/** Day of the week the schedule applies to. This field is required for CREATE operations and is prohibited on UPDATE operations. */
		dayOfWeek?: GoogleAdsSearchads360V0Common__AdScheduleInfoDayOfWeek | null;

		/**
		 * Ending hour in 24 hour time; 24 signifies end of the day. This field must be between 0 and 24, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		endHour?: number | null;

		/** Minutes after the end hour at which this schedule ends. The schedule is exclusive of the end minute. This field is required for CREATE operations and is prohibited on UPDATE operations. */
		endMinute?: GoogleAdsSearchads360V0Common__AdScheduleInfoEndMinute | null;

		/**
		 * Starting hour in 24 hour time. This field must be between 0 and 23, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		startHour?: number | null;

		/** Minutes after the start hour at which this schedule starts. This field is required for CREATE operations and is prohibited on UPDATE operations. */
		startMinute?: GoogleAdsSearchads360V0Common__AdScheduleInfoEndMinute | null;
	}

	/** Represents an AdSchedule criterion. AdSchedule is specified as the day of the week and a time interval within which ads will be shown. No more than six AdSchedules can be added for the same day. */
	export interface GoogleAdsSearchads360V0Common__AdScheduleInfoFormProperties {

		/** Day of the week the schedule applies to. This field is required for CREATE operations and is prohibited on UPDATE operations. */
		dayOfWeek: FormControl<GoogleAdsSearchads360V0Common__AdScheduleInfoDayOfWeek | null | undefined>,

		/**
		 * Ending hour in 24 hour time; 24 signifies end of the day. This field must be between 0 and 24, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		endHour: FormControl<number | null | undefined>,

		/** Minutes after the end hour at which this schedule ends. The schedule is exclusive of the end minute. This field is required for CREATE operations and is prohibited on UPDATE operations. */
		endMinute: FormControl<GoogleAdsSearchads360V0Common__AdScheduleInfoEndMinute | null | undefined>,

		/**
		 * Starting hour in 24 hour time. This field must be between 0 and 23, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		startHour: FormControl<number | null | undefined>,

		/** Minutes after the start hour at which this schedule starts. This field is required for CREATE operations and is prohibited on UPDATE operations. */
		startMinute: FormControl<GoogleAdsSearchads360V0Common__AdScheduleInfoEndMinute | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__AdScheduleInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__AdScheduleInfoFormProperties>({
			dayOfWeek: new FormControl<GoogleAdsSearchads360V0Common__AdScheduleInfoDayOfWeek | null | undefined>(undefined),
			endHour: new FormControl<number | null | undefined>(undefined),
			endMinute: new FormControl<GoogleAdsSearchads360V0Common__AdScheduleInfoEndMinute | null | undefined>(undefined),
			startHour: new FormControl<number | null | undefined>(undefined),
			startMinute: new FormControl<GoogleAdsSearchads360V0Common__AdScheduleInfoEndMinute | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__AdScheduleInfoDayOfWeek { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', MONDAY = 'MONDAY', TUESDAY = 'TUESDAY', WEDNESDAY = 'WEDNESDAY', THURSDAY = 'THURSDAY', FRIDAY = 'FRIDAY', SATURDAY = 'SATURDAY', SUNDAY = 'SUNDAY' }

	export enum GoogleAdsSearchads360V0Common__AdScheduleInfoEndMinute { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', ZERO = 'ZERO', FIFTEEN = 'FIFTEEN', THIRTY = 'THIRTY', FORTY_FIVE = 'FORTY_FIVE' }


	/** An age range criterion. */
	export interface GoogleAdsSearchads360V0Common__AgeRangeInfo {

		/** Type of the age range. */
		type?: GoogleAdsSearchads360V0Common__AgeRangeInfoType | null;
	}

	/** An age range criterion. */
	export interface GoogleAdsSearchads360V0Common__AgeRangeInfoFormProperties {

		/** Type of the age range. */
		type: FormControl<GoogleAdsSearchads360V0Common__AgeRangeInfoType | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__AgeRangeInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__AgeRangeInfoFormProperties>({
			type: new FormControl<GoogleAdsSearchads360V0Common__AgeRangeInfoType | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__AgeRangeInfoType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', AGE_RANGE_18_24 = 'AGE_RANGE_18_24', AGE_RANGE_25_34 = 'AGE_RANGE_25_34', AGE_RANGE_35_44 = 'AGE_RANGE_35_44', AGE_RANGE_45_54 = 'AGE_RANGE_45_54', AGE_RANGE_55_64 = 'AGE_RANGE_55_64', AGE_RANGE_65_UP = 'AGE_RANGE_65_UP', AGE_RANGE_UNDETERMINED = 'AGE_RANGE_UNDETERMINED' }


	/** An AssetInteractionTarget segment. */
	export interface GoogleAdsSearchads360V0Common__AssetInteractionTarget {

		/** The asset resource name. */
		asset?: string | null;

		/** Only used with CustomerAsset, CampaignAsset and AdGroupAsset metrics. Indicates whether the interaction metrics occurred on the asset itself or a different asset or ad unit. */
		interactionOnThisAsset?: boolean | null;
	}

	/** An AssetInteractionTarget segment. */
	export interface GoogleAdsSearchads360V0Common__AssetInteractionTargetFormProperties {

		/** The asset resource name. */
		asset: FormControl<string | null | undefined>,

		/** Only used with CustomerAsset, CampaignAsset and AdGroupAsset metrics. Indicates whether the interaction metrics occurred on the asset itself or a different asset or ad unit. */
		interactionOnThisAsset: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__AssetInteractionTargetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__AssetInteractionTargetFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
			interactionOnThisAsset: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the usage information of the asset. */
	export interface GoogleAdsSearchads360V0Common__AssetUsage {

		/** Resource name of the asset. */
		asset?: string | null;

		/** The served field type of the asset. */
		servedAssetFieldType?: GoogleAdsSearchads360V0Common__AssetUsageServedAssetFieldType | null;
	}

	/** Contains the usage information of the asset. */
	export interface GoogleAdsSearchads360V0Common__AssetUsageFormProperties {

		/** Resource name of the asset. */
		asset: FormControl<string | null | undefined>,

		/** The served field type of the asset. */
		servedAssetFieldType: FormControl<GoogleAdsSearchads360V0Common__AssetUsageServedAssetFieldType | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__AssetUsageFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__AssetUsageFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
			servedAssetFieldType: new FormControl<GoogleAdsSearchads360V0Common__AssetUsageServedAssetFieldType | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__AssetUsageServedAssetFieldType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', HEADLINE_1 = 'HEADLINE_1', HEADLINE_2 = 'HEADLINE_2', HEADLINE_3 = 'HEADLINE_3', DESCRIPTION_1 = 'DESCRIPTION_1', DESCRIPTION_2 = 'DESCRIPTION_2', HEADLINE = 'HEADLINE', HEADLINE_IN_PORTRAIT = 'HEADLINE_IN_PORTRAIT', LONG_HEADLINE = 'LONG_HEADLINE', DESCRIPTION = 'DESCRIPTION', DESCRIPTION_IN_PORTRAIT = 'DESCRIPTION_IN_PORTRAIT', BUSINESS_NAME_IN_PORTRAIT = 'BUSINESS_NAME_IN_PORTRAIT', BUSINESS_NAME = 'BUSINESS_NAME', MARKETING_IMAGE = 'MARKETING_IMAGE', MARKETING_IMAGE_IN_PORTRAIT = 'MARKETING_IMAGE_IN_PORTRAIT', SQUARE_MARKETING_IMAGE = 'SQUARE_MARKETING_IMAGE', PORTRAIT_MARKETING_IMAGE = 'PORTRAIT_MARKETING_IMAGE', LOGO = 'LOGO', LANDSCAPE_LOGO = 'LANDSCAPE_LOGO', CALL_TO_ACTION = 'CALL_TO_ACTION', YOU_TUBE_VIDEO = 'YOU_TUBE_VIDEO', SITELINK = 'SITELINK', CALL = 'CALL', MOBILE_APP = 'MOBILE_APP', CALLOUT = 'CALLOUT', STRUCTURED_SNIPPET = 'STRUCTURED_SNIPPET', PRICE = 'PRICE', PROMOTION = 'PROMOTION', AD_IMAGE = 'AD_IMAGE', LEAD_FORM = 'LEAD_FORM', BUSINESS_LOGO = 'BUSINESS_LOGO' }


	/** An audience criterion. */
	export interface GoogleAdsSearchads360V0Common__AudienceInfo {

		/** The Audience resource name. */
		audience?: string | null;
	}

	/** An audience criterion. */
	export interface GoogleAdsSearchads360V0Common__AudienceInfoFormProperties {

		/** The Audience resource name. */
		audience: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__AudienceInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__AudienceInfoFormProperties>({
			audience: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Business Profile location data synced from the linked Business Profile account. */
	export interface GoogleAdsSearchads360V0Common__BusinessProfileLocation {

		/** Advertiser specified label for the location on the Business Profile account. This is synced from the Business Profile account. */
		labels?: Array<string>;

		/** Listing ID of this Business Profile location. This is synced from the linked Business Profile account. */
		listingId?: string | null;

		/** Business Profile store code of this location. This is synced from the Business Profile account. */
		storeCode?: string | null;
	}

	/** Business Profile location data synced from the linked Business Profile account. */
	export interface GoogleAdsSearchads360V0Common__BusinessProfileLocationFormProperties {

		/** Listing ID of this Business Profile location. This is synced from the linked Business Profile account. */
		listingId: FormControl<string | null | undefined>,

		/** Business Profile store code of this location. This is synced from the Business Profile account. */
		storeCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__BusinessProfileLocationFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__BusinessProfileLocationFormProperties>({
			listingId: new FormControl<string | null | undefined>(undefined),
			storeCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A call to action asset. */
	export interface GoogleAdsSearchads360V0Common__CallToActionAsset {

		/** Call to action. */
		callToAction?: GoogleAdsSearchads360V0Common__CallToActionAssetCallToAction | null;
	}

	/** A call to action asset. */
	export interface GoogleAdsSearchads360V0Common__CallToActionAssetFormProperties {

		/** Call to action. */
		callToAction: FormControl<GoogleAdsSearchads360V0Common__CallToActionAssetCallToAction | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__CallToActionAssetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__CallToActionAssetFormProperties>({
			callToAction: new FormControl<GoogleAdsSearchads360V0Common__CallToActionAssetCallToAction | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__CallToActionAssetCallToAction { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', LEARN_MORE = 'LEARN_MORE', GET_QUOTE = 'GET_QUOTE', APPLY_NOW = 'APPLY_NOW', SIGN_UP = 'SIGN_UP', CONTACT_US = 'CONTACT_US', SUBSCRIBE = 'SUBSCRIBE', DOWNLOAD = 'DOWNLOAD', BOOK_NOW = 'BOOK_NOW', SHOP_NOW = 'SHOP_NOW', BUY_NOW = 'BUY_NOW', DONATE_NOW = 'DONATE_NOW', ORDER_NOW = 'ORDER_NOW', PLAY_NOW = 'PLAY_NOW', SEE_MORE = 'SEE_MORE', START_NOW = 'START_NOW', VISIT_SITE = 'VISIT_SITE', WATCH_NOW = 'WATCH_NOW' }


	/** A mapping that can be used by custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`. */
	export interface GoogleAdsSearchads360V0Common__CustomParameter {

		/** The key matching the parameter tag name. */
		key?: string | null;

		/** The value to be substituted. */
		value?: string | null;
	}

	/** A mapping that can be used by custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`. */
	export interface GoogleAdsSearchads360V0Common__CustomParameterFormProperties {

		/** The key matching the parameter tag name. */
		key: FormControl<string | null | undefined>,

		/** The value to be substituted. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__CustomParameterFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__CustomParameterFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A device criterion. */
	export interface GoogleAdsSearchads360V0Common__DeviceInfo {

		/** Type of the device. */
		type?: GoogleAdsSearchads360V0Common__DeviceInfoType | null;
	}

	/** A device criterion. */
	export interface GoogleAdsSearchads360V0Common__DeviceInfoFormProperties {

		/** Type of the device. */
		type: FormControl<GoogleAdsSearchads360V0Common__DeviceInfoType | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__DeviceInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__DeviceInfoFormProperties>({
			type: new FormControl<GoogleAdsSearchads360V0Common__DeviceInfoType | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__DeviceInfoType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', MOBILE = 'MOBILE', TABLET = 'TABLET', DESKTOP = 'DESKTOP', CONNECTED_TV = 'CONNECTED_TV', OTHER = 'OTHER' }


	/** An automated bidding strategy that raises bids for clicks that seem more likely to lead to a conversion and lowers them for clicks where they seem less likely. This bidding strategy is deprecated and cannot be created anymore. Use ManualCpc with enhanced_cpc_enabled set to true for equivalent functionality. */
	export interface GoogleAdsSearchads360V0Common__EnhancedCpc {
	}

	/** An automated bidding strategy that raises bids for clicks that seem more likely to lead to a conversion and lowers them for clicks where they seem less likely. This bidding strategy is deprecated and cannot be created anymore. Use ManualCpc with enhanced_cpc_enabled set to true for equivalent functionality. */
	export interface GoogleAdsSearchads360V0Common__EnhancedCpcFormProperties {
	}
	export function CreateGoogleAdsSearchads360V0Common__EnhancedCpcFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__EnhancedCpcFormProperties>({
		});

	}


	/** A rule specifying the maximum number of times an ad (or some set of ads) can be shown to a user over a particular time period. */
	export interface GoogleAdsSearchads360V0Common__FrequencyCapEntry {
	}

	/** A rule specifying the maximum number of times an ad (or some set of ads) can be shown to a user over a particular time period. */
	export interface GoogleAdsSearchads360V0Common__FrequencyCapEntryFormProperties {
	}
	export function CreateGoogleAdsSearchads360V0Common__FrequencyCapEntryFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__FrequencyCapEntryFormProperties>({
		});

	}


	/** A gender criterion. */
	export interface GoogleAdsSearchads360V0Common__GenderInfo {

		/** Type of the gender. */
		type?: GoogleAdsSearchads360V0Common__GenderInfoType | null;
	}

	/** A gender criterion. */
	export interface GoogleAdsSearchads360V0Common__GenderInfoFormProperties {

		/** Type of the gender. */
		type: FormControl<GoogleAdsSearchads360V0Common__GenderInfoType | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__GenderInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__GenderInfoFormProperties>({
			type: new FormControl<GoogleAdsSearchads360V0Common__GenderInfoType | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__GenderInfoType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', MALE = 'MALE', FEMALE = 'FEMALE', UNDETERMINED = 'UNDETERMINED' }


	/** An Image asset. */
	export interface GoogleAdsSearchads360V0Common__ImageAsset {

		/** File size of the image asset in bytes. */
		fileSize?: string | null;

		/** Metadata for an image at a certain size, either original or resized. */
		fullSize?: GoogleAdsSearchads360V0Common__ImageDimension;

		/** MIME type of the image asset. */
		mimeType?: GoogleAdsSearchads360V0Common__ImageAssetMimeType | null;
	}

	/** An Image asset. */
	export interface GoogleAdsSearchads360V0Common__ImageAssetFormProperties {

		/** File size of the image asset in bytes. */
		fileSize: FormControl<string | null | undefined>,

		/** MIME type of the image asset. */
		mimeType: FormControl<GoogleAdsSearchads360V0Common__ImageAssetMimeType | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__ImageAssetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__ImageAssetFormProperties>({
			fileSize: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<GoogleAdsSearchads360V0Common__ImageAssetMimeType | null | undefined>(undefined),
		});

	}


	/** Metadata for an image at a certain size, either original or resized. */
	export interface GoogleAdsSearchads360V0Common__ImageDimension {

		/** Height of the image. */
		heightPixels?: string | null;

		/** A URL that returns the image with this height and width. */
		url?: string | null;

		/** Width of the image. */
		widthPixels?: string | null;
	}

	/** Metadata for an image at a certain size, either original or resized. */
	export interface GoogleAdsSearchads360V0Common__ImageDimensionFormProperties {

		/** Height of the image. */
		heightPixels: FormControl<string | null | undefined>,

		/** A URL that returns the image with this height and width. */
		url: FormControl<string | null | undefined>,

		/** Width of the image. */
		widthPixels: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__ImageDimensionFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__ImageDimensionFormProperties>({
			heightPixels: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			widthPixels: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__ImageAssetMimeType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', IMAGE_JPEG = 'IMAGE_JPEG', IMAGE_GIF = 'IMAGE_GIF', IMAGE_PNG = 'IMAGE_PNG', FLASH = 'FLASH', TEXT_HTML = 'TEXT_HTML', PDF = 'PDF', MSWORD = 'MSWORD', MSEXCEL = 'MSEXCEL', RTF = 'RTF', AUDIO_WAV = 'AUDIO_WAV', AUDIO_MP3 = 'AUDIO_MP3', HTML5_AD_ZIP = 'HTML5_AD_ZIP' }


	/** A Keyword criterion segment. */
	export interface GoogleAdsSearchads360V0Common__Keyword {

		/** The AdGroupCriterion resource name. */
		adGroupCriterion?: string | null;

		/** A keyword criterion. */
		info?: GoogleAdsSearchads360V0Common__KeywordInfo;
	}

	/** A Keyword criterion segment. */
	export interface GoogleAdsSearchads360V0Common__KeywordFormProperties {

		/** The AdGroupCriterion resource name. */
		adGroupCriterion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__KeywordFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__KeywordFormProperties>({
			adGroupCriterion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A keyword criterion. */
	export interface GoogleAdsSearchads360V0Common__KeywordInfo {

		/** The match type of the keyword. */
		matchType?: GoogleAdsSearchads360V0Common__KeywordInfoMatchType | null;

		/** The text of the keyword (at most 80 characters and 10 words). */
		text?: string | null;
	}

	/** A keyword criterion. */
	export interface GoogleAdsSearchads360V0Common__KeywordInfoFormProperties {

		/** The match type of the keyword. */
		matchType: FormControl<GoogleAdsSearchads360V0Common__KeywordInfoMatchType | null | undefined>,

		/** The text of the keyword (at most 80 characters and 10 words). */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__KeywordInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__KeywordInfoFormProperties>({
			matchType: new FormControl<GoogleAdsSearchads360V0Common__KeywordInfoMatchType | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__KeywordInfoMatchType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', EXACT = 'EXACT', PHRASE = 'PHRASE', BROAD = 'BROAD' }


	/** A language criterion. */
	export interface GoogleAdsSearchads360V0Common__LanguageInfo {

		/** The language constant resource name. */
		languageConstant?: string | null;
	}

	/** A language criterion. */
	export interface GoogleAdsSearchads360V0Common__LanguageInfoFormProperties {

		/** The language constant resource name. */
		languageConstant: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__LanguageInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__LanguageInfoFormProperties>({
			languageConstant: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A listing group criterion. */
	export interface GoogleAdsSearchads360V0Common__ListingGroupInfo {

		/** Type of the listing group. */
		type?: GoogleAdsSearchads360V0Common__ListingGroupInfoType | null;
	}

	/** A listing group criterion. */
	export interface GoogleAdsSearchads360V0Common__ListingGroupInfoFormProperties {

		/** Type of the listing group. */
		type: FormControl<GoogleAdsSearchads360V0Common__ListingGroupInfoType | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__ListingGroupInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__ListingGroupInfoFormProperties>({
			type: new FormControl<GoogleAdsSearchads360V0Common__ListingGroupInfoType | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__ListingGroupInfoType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', SUBDIVISION = 'SUBDIVISION', UNIT = 'UNIT' }


	/** A radius around a list of locations specified through a feed. */
	export interface GoogleAdsSearchads360V0Common__LocationGroupInfo {

		/** FeedItemSets whose FeedItems are targeted. If multiple IDs are specified, then all items that appear in at least one set are targeted. This field cannot be used with geo_target_constants. This is optional and can only be set in CREATE operations. */
		feedItemSets?: Array<string>;

		/** Geo target constant(s) restricting the scope of the geographic area within the feed. Currently only one geo target constant is allowed. */
		geoTargetConstants?: Array<string>;

		/** Distance in units specifying the radius around targeted locations. This is required and must be set in CREATE operations. */
		radius?: string | null;

		/** Unit of the radius. Miles and meters are supported for geo target constants. Milli miles and meters are supported for feed item sets. This is required and must be set in CREATE operations. */
		radiusUnits?: GoogleAdsSearchads360V0Common__LocationGroupInfoRadiusUnits | null;
	}

	/** A radius around a list of locations specified through a feed. */
	export interface GoogleAdsSearchads360V0Common__LocationGroupInfoFormProperties {

		/** Distance in units specifying the radius around targeted locations. This is required and must be set in CREATE operations. */
		radius: FormControl<string | null | undefined>,

		/** Unit of the radius. Miles and meters are supported for geo target constants. Milli miles and meters are supported for feed item sets. This is required and must be set in CREATE operations. */
		radiusUnits: FormControl<GoogleAdsSearchads360V0Common__LocationGroupInfoRadiusUnits | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__LocationGroupInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__LocationGroupInfoFormProperties>({
			radius: new FormControl<string | null | undefined>(undefined),
			radiusUnits: new FormControl<GoogleAdsSearchads360V0Common__LocationGroupInfoRadiusUnits | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__LocationGroupInfoRadiusUnits { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', METERS = 'METERS', MILES = 'MILES', MILLI_MILES = 'MILLI_MILES' }


	/** A location criterion. */
	export interface GoogleAdsSearchads360V0Common__LocationInfo {

		/** The geo target constant resource name. */
		geoTargetConstant?: string | null;
	}

	/** A location criterion. */
	export interface GoogleAdsSearchads360V0Common__LocationInfoFormProperties {

		/** The geo target constant resource name. */
		geoTargetConstant: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__LocationInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__LocationInfoFormProperties>({
			geoTargetConstant: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Manual bidding strategy that allows advertiser to set the bid per advertiser-specified action. */
	export interface GoogleAdsSearchads360V0Common__ManualCpa {
	}

	/** Manual bidding strategy that allows advertiser to set the bid per advertiser-specified action. */
	export interface GoogleAdsSearchads360V0Common__ManualCpaFormProperties {
	}
	export function CreateGoogleAdsSearchads360V0Common__ManualCpaFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__ManualCpaFormProperties>({
		});

	}


	/** Manual click-based bidding where user pays per click. */
	export interface GoogleAdsSearchads360V0Common__ManualCpc {

		/** Whether bids are to be enhanced based on conversion optimizer data. */
		enhancedCpcEnabled?: boolean | null;
	}

	/** Manual click-based bidding where user pays per click. */
	export interface GoogleAdsSearchads360V0Common__ManualCpcFormProperties {

		/** Whether bids are to be enhanced based on conversion optimizer data. */
		enhancedCpcEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__ManualCpcFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__ManualCpcFormProperties>({
			enhancedCpcEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Manual impression-based bidding where user pays per thousand impressions. */
	export interface GoogleAdsSearchads360V0Common__ManualCpm {
	}

	/** Manual impression-based bidding where user pays per thousand impressions. */
	export interface GoogleAdsSearchads360V0Common__ManualCpmFormProperties {
	}
	export function CreateGoogleAdsSearchads360V0Common__ManualCpmFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__ManualCpmFormProperties>({
		});

	}


	/** An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget. */
	export interface GoogleAdsSearchads360V0Common__MaximizeConversionValue {

		/** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. */
		cpcBidCeilingMicros?: string | null;

		/** Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. */
		cpcBidFloorMicros?: string | null;

		/**
		 * The target return on ad spend (ROAS) option. If set, the bid strategy will maximize revenue while averaging the target return on ad spend. If the target ROAS is high, the bid strategy may not be able to spend the full budget. If the target ROAS is not set, the bid strategy will aim to achieve the highest possible ROAS for the budget.
		 * Type: double
		 */
		targetRoas?: number | null;
	}

	/** An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget. */
	export interface GoogleAdsSearchads360V0Common__MaximizeConversionValueFormProperties {

		/** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. */
		cpcBidCeilingMicros: FormControl<string | null | undefined>,

		/** Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. */
		cpcBidFloorMicros: FormControl<string | null | undefined>,

		/**
		 * The target return on ad spend (ROAS) option. If set, the bid strategy will maximize revenue while averaging the target return on ad spend. If the target ROAS is high, the bid strategy may not be able to spend the full budget. If the target ROAS is not set, the bid strategy will aim to achieve the highest possible ROAS for the budget.
		 * Type: double
		 */
		targetRoas: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__MaximizeConversionValueFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__MaximizeConversionValueFormProperties>({
			cpcBidCeilingMicros: new FormControl<string | null | undefined>(undefined),
			cpcBidFloorMicros: new FormControl<string | null | undefined>(undefined),
			targetRoas: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An automated bidding strategy to help get the most conversions for your campaigns while spending your budget. */
	export interface GoogleAdsSearchads360V0Common__MaximizeConversions {

		/** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. */
		cpcBidCeilingMicros?: string | null;

		/** Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. */
		cpcBidFloorMicros?: string | null;

		/** The target cost-per-action (CPA) option. This is the average amount that you would like to spend per conversion action specified in micro units of the bidding strategy's currency. If set, the bid strategy will get as many conversions as possible at or below the target cost-per-action. If the target CPA is not set, the bid strategy will aim to achieve the lowest possible CPA given the budget. */
		targetCpaMicros?: string | null;
	}

	/** An automated bidding strategy to help get the most conversions for your campaigns while spending your budget. */
	export interface GoogleAdsSearchads360V0Common__MaximizeConversionsFormProperties {

		/** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. */
		cpcBidCeilingMicros: FormControl<string | null | undefined>,

		/** Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. */
		cpcBidFloorMicros: FormControl<string | null | undefined>,

		/** The target cost-per-action (CPA) option. This is the average amount that you would like to spend per conversion action specified in micro units of the bidding strategy's currency. If set, the bid strategy will get as many conversions as possible at or below the target cost-per-action. If the target CPA is not set, the bid strategy will aim to achieve the lowest possible CPA given the budget. */
		targetCpaMicros: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__MaximizeConversionsFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__MaximizeConversionsFormProperties>({
			cpcBidCeilingMicros: new FormControl<string | null | undefined>(undefined),
			cpcBidFloorMicros: new FormControl<string | null | undefined>(undefined),
			targetCpaMicros: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metrics data. */
	export interface GoogleAdsSearchads360V0Common__Metrics {

		/**
		 * The percent of your ad impressions that are shown as the very first ad above the organic search results.
		 * Type: double
		 */
		absoluteTopImpressionPercentage?: number | null;

		/**
		 * The total number of conversions. This includes all conversions regardless of the value of include_in_conversions_metric.
		 * Type: double
		 */
		allConversions?: number | null;

		/**
		 * The total number of conversions. This includes all conversions regardless of the value of include_in_conversions_metric. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.
		 * Type: double
		 */
		allConversionsByConversionDate?: number | null;

		/**
		 * The number of times people clicked the "Call" button to call a store during or after clicking an ad. This number doesn't include whether or not calls were connected, or the duration of any calls. This metric applies to feed items only.
		 * Type: double
		 */
		allConversionsFromClickToCall?: number | null;

		/**
		 * The number of times people clicked a "Get directions" button to navigate to a store after clicking an ad. This metric applies to feed items only.
		 * Type: double
		 */
		allConversionsFromDirections?: number | null;

		/**
		 * All conversions from interactions (as oppose to view through conversions) divided by the number of ad interactions.
		 * Type: double
		 */
		allConversionsFromInteractionsRate?: number | null;

		/**
		 * The value of all conversions from interactions divided by the total number of interactions.
		 * Type: double
		 */
		allConversionsFromInteractionsValuePerInteraction?: number | null;

		/**
		 * The number of times people clicked a link to view a store's menu after clicking an ad. This metric applies to feed items only.
		 * Type: double
		 */
		allConversionsFromMenu?: number | null;

		/**
		 * The number of times people placed an order at a store after clicking an ad. This metric applies to feed items only.
		 * Type: double
		 */
		allConversionsFromOrder?: number | null;

		/**
		 * The number of other conversions (for example, posting a review or saving a location for a store) that occurred after people clicked an ad. This metric applies to feed items only.
		 * Type: double
		 */
		allConversionsFromOtherEngagement?: number | null;

		/**
		 * Estimated number of times people visited a store after clicking an ad. This metric applies to feed items only.
		 * Type: double
		 */
		allConversionsFromStoreVisit?: number | null;

		/**
		 * The number of times that people were taken to a store's URL after clicking an ad. This metric applies to feed items only.
		 * Type: double
		 */
		allConversionsFromStoreWebsite?: number | null;

		/**
		 * The value of all conversions.
		 * Type: double
		 */
		allConversionsValue?: number | null;

		/**
		 * The value of all conversions. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.
		 * Type: double
		 */
		allConversionsValueByConversionDate?: number | null;

		/**
		 * The value of all conversions divided by the total cost of ad interactions (such as clicks for text ads or views for video ads).
		 * Type: double
		 */
		allConversionsValuePerCost?: number | null;

		/**
		 * The average amount you pay per interaction. This amount is the total cost of your ads divided by the total number of interactions.
		 * Type: double
		 */
		averageCost?: number | null;

		/**
		 * The total cost of all clicks divided by the total number of clicks received. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
		 * Type: double
		 */
		averageCpc?: number | null;

		/**
		 * Average cost-per-thousand impressions (CPM). This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
		 * Type: double
		 */
		averageCpm?: number | null;

		/** The number of clicks. */
		clicks?: string | null;

		/**
		 * The number of client account conversions. This only includes conversion actions which include_in_client_account_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
		 * Type: double
		 */
		clientAccountConversions?: number | null;

		/**
		 * The value of client account conversions. This only includes conversion actions which include_in_client_account_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
		 * Type: double
		 */
		clientAccountConversionsValue?: number | null;

		/** Client account cross-sell cost of goods sold (COGS) is the total cost of products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell cost of goods sold is the total cost of the products sold that weren't advertised. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The cross-sell cost of goods sold for this order is $5. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		clientAccountCrossSellCostOfGoodsSoldMicros?: string | null;

		/** Client account cross-sell gross profit is the profit you made from products sold as a result of advertising a different product, minus cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the purchase is a sold product. If these products don't match then this is considered cross-sell. Cross-sell gross profit is the revenue you made from cross-sell attributed to your ads minus the cost of the goods sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The shirt is priced $20 and has a cost of goods sold value of $5. The cross-sell gross profit of this order is $15 = $20 - $5. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		clientAccountCrossSellGrossProfitMicros?: string | null;

		/** Client account cross-sell revenue is the total amount you made from products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell revenue is the total value you made from cross-sell attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and the shirt is priced $20. The cross-sell revenue of this order is $20. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		clientAccountCrossSellRevenueMicros?: string | null;

		/**
		 * Client account cross-sell units sold is the total number of products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell units sold is the total number of cross-sold products from all orders attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The cross-sell units sold in this order is 2. This metric is only available if you report conversions with cart data.
		 * Type: double
		 */
		clientAccountCrossSellUnitsSold?: number | null;

		/** Client account lead cost of goods sold (COGS) is the total cost of products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the cost of these goods is counted under lead cost of goods sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The lead cost of goods sold for this order is $3. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		clientAccountLeadCostOfGoodsSoldMicros?: string | null;

		/** Client account lead gross profit is the profit you made from products sold as a result of advertising the same product, minus cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the revenue you made from these sales minus the cost of goods sold is your lead gross profit. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and has a cost of goods sold value of $3. The lead gross profit of this order is $7 = $10 - $3. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		clientAccountLeadGrossProfitMicros?: string | null;

		/** Client account lead revenue is the total amount you made from products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the total value you made from the sales of these products is shown under lead revenue. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and the shirt is priced $20. The lead revenue of this order is $10. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		clientAccountLeadRevenueMicros?: string | null;

		/**
		 * Client account lead units sold is the total number of products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the total number of these products sold is shown under lead units sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The lead units sold in this order is 1. This metric is only available if you report conversions with cart data.
		 * Type: double
		 */
		clientAccountLeadUnitsSold?: number | null;

		/** The total number of view-through conversions. These happen when a customer sees an image or rich media ad, then later completes a conversion on your site without interacting with (for example, clicking on) another ad. */
		clientAccountViewThroughConversions?: string | null;

		/**
		 * The estimated percent of times that your ad was eligible to show on the Display Network but didn't because your budget was too low. Note: Content budget lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
		 * Type: double
		 */
		contentBudgetLostImpressionShare?: number | null;

		/**
		 * The impressions you've received on the Display Network divided by the estimated number of impressions you were eligible to receive. Note: Content impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
		 * Type: double
		 */
		contentImpressionShare?: number | null;

		/**
		 * The estimated percentage of impressions on the Display Network that your ads didn't receive due to poor Ad Rank. Note: Content rank lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
		 * Type: double
		 */
		contentRankLostImpressionShare?: number | null;

		/**
		 * The number of conversions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
		 * Type: double
		 */
		conversions?: number | null;

		/**
		 * The sum of conversions by conversion date for biddable conversion types. Can be fractional due to attribution modeling. When this column is selected with date, the values in date column means the conversion date.
		 * Type: double
		 */
		conversionsByConversionDate?: number | null;

		/**
		 * Average biddable conversions (from interaction) per conversion eligible interaction. Shows how often, on average, an ad interaction leads to a biddable conversion.
		 * Type: double
		 */
		conversionsFromInteractionsRate?: number | null;

		/**
		 * The value of conversions from interactions divided by the number of ad interactions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
		 * Type: double
		 */
		conversionsFromInteractionsValuePerInteraction?: number | null;

		/**
		 * The sum of conversion values for the conversions included in the "conversions" field. This metric is useful only if you entered a value for your conversion actions.
		 * Type: double
		 */
		conversionsValue?: number | null;

		/**
		 * The sum of biddable conversions value by conversion date. When this column is selected with date, the values in date column means the conversion date.
		 * Type: double
		 */
		conversionsValueByConversionDate?: number | null;

		/**
		 * The value of biddable conversion divided by the total cost of conversion eligible interactions.
		 * Type: double
		 */
		conversionsValuePerCost?: number | null;

		/** The sum of your cost-per-click (CPC) and cost-per-thousand impressions (CPM) costs during this period. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		costMicros?: string | null;

		/**
		 * The cost of ad interactions divided by all conversions.
		 * Type: double
		 */
		costPerAllConversions?: number | null;

		/**
		 * Average conversion eligible cost per biddable conversion.
		 * Type: double
		 */
		costPerConversion?: number | null;

		/**
		 * The cost of ad interactions divided by current model attributed conversions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
		 * Type: double
		 */
		costPerCurrentModelAttributedConversion?: number | null;

		/**
		 * Conversions from when a customer clicks on an ad on one device, then converts on a different device or browser. Cross-device conversions are already included in all_conversions.
		 * Type: double
		 */
		crossDeviceConversions?: number | null;

		/**
		 * The sum of the value of cross-device conversions.
		 * Type: double
		 */
		crossDeviceConversionsValue?: number | null;

		/** Cross-sell cost of goods sold (COGS) is the total cost of products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell cost of goods sold is the total cost of the products sold that weren't advertised. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The cross-sell cost of goods sold for this order is $5. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		crossSellCostOfGoodsSoldMicros?: string | null;

		/** Cross-sell gross profit is the profit you made from products sold as a result of advertising a different product, minus cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the purchase is a sold product. If these products don't match then this is considered cross-sell. Cross-sell gross profit is the revenue you made from cross-sell attributed to your ads minus the cost of the goods sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The shirt is priced $20 and has a cost of goods sold value of $5. The cross-sell gross profit of this order is $15 = $20 - $5. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		crossSellGrossProfitMicros?: string | null;

		/** Cross-sell revenue is the total amount you made from products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell revenue is the total value you made from cross-sell attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and the shirt is priced $20. The cross-sell revenue of this order is $20. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		crossSellRevenueMicros?: string | null;

		/**
		 * Cross-sell units sold is the total number of products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell units sold is the total number of cross-sold products from all orders attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The cross-sell units sold in this order is 2. This metric is only available if you report conversions with cart data.
		 * Type: double
		 */
		crossSellUnitsSold?: number | null;

		/**
		 * The number of clicks your ad receives (Clicks) divided by the number of times your ad is shown (Impressions).
		 * Type: double
		 */
		ctr?: number | null;

		/** The creative historical quality score. */
		historicalCreativeQualityScore?: GoogleAdsSearchads360V0Common__MetricsHistoricalCreativeQualityScore | null;

		/** The quality of historical landing page experience. */
		historicalLandingPageQualityScore?: GoogleAdsSearchads360V0Common__MetricsHistoricalCreativeQualityScore | null;

		/** The historical quality score. */
		historicalQualityScore?: string | null;

		/** The historical search predicted click through rate (CTR). */
		historicalSearchPredictedCtr?: GoogleAdsSearchads360V0Common__MetricsHistoricalCreativeQualityScore | null;

		/** Count of how often your ad has appeared on a search results page or website on the Google Network. */
		impressions?: string | null;

		/** The types of payable and free interactions. */
		interactionEventTypes?: Array<string>;

		/**
		 * How often people interact with your ad after it is shown to them. This is the number of interactions divided by the number of times your ad is shown.
		 * Type: double
		 */
		interactionRate?: number | null;

		/** The number of interactions. An interaction is the main user action associated with an ad format-clicks for text and shopping ads, views for video ads, and so on. */
		interactions?: string | null;

		/**
		 * The percentage of clicks filtered out of your total number of clicks (filtered + non-filtered clicks) during the reporting period.
		 * Type: double
		 */
		invalidClickRate?: number | null;

		/** Number of clicks Google considers illegitimate and doesn't charge you for. */
		invalidClicks?: string | null;

		/** Lead cost of goods sold (COGS) is the total cost of products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the cost of these goods is counted under lead cost of goods sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The lead cost of goods sold for this order is $3. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		leadCostOfGoodsSoldMicros?: string | null;

		/** Lead gross profit is the profit you made from products sold as a result of advertising the same product, minus cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the revenue you made from these sales minus the cost of goods sold is your lead gross profit. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and has a cost of goods sold value of $3. The lead gross profit of this order is $7 = $10 - $3. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		leadGrossProfitMicros?: string | null;

		/** Lead revenue is the total amount you made from products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the total value you made from the sales of these products is shown under lead revenue. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and the shirt is priced $20. The lead revenue of this order is $10. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		leadRevenueMicros?: string | null;

		/**
		 * Lead units sold is the total number of products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the total number of these products sold is shown under lead units sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The lead units sold in this order is 1. This metric is only available if you report conversions with cart data.
		 * Type: double
		 */
		leadUnitsSold?: number | null;

		/**
		 * The percentage of mobile clicks that go to a mobile-friendly page.
		 * Type: double
		 */
		mobileFriendlyClicksPercentage?: number | null;

		/**
		 * The percentage of the customer's Shopping or Search ad impressions that are shown in the most prominent Shopping position. See https://support.google.com/sa360/answer/9566729 for details. Any value below 0.1 is reported as 0.0999.
		 * Type: double
		 */
		searchAbsoluteTopImpressionShare?: number | null;

		/**
		 * The number estimating how often your ad wasn't the very first ad above the organic search results due to a low budget. Note: Search budget lost absolute top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
		 * Type: double
		 */
		searchBudgetLostAbsoluteTopImpressionShare?: number | null;

		/**
		 * The estimated percent of times that your ad was eligible to show on the Search Network but didn't because your budget was too low. Note: Search budget lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
		 * Type: double
		 */
		searchBudgetLostImpressionShare?: number | null;

		/**
		 * The number estimating how often your ad didn't show anywhere above the organic search results due to a low budget. Note: Search budget lost top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
		 * Type: double
		 */
		searchBudgetLostTopImpressionShare?: number | null;

		/**
		 * The number of clicks you've received on the Search Network divided by the estimated number of clicks you were eligible to receive. Note: Search click share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
		 * Type: double
		 */
		searchClickShare?: number | null;

		/**
		 * The impressions you've received divided by the estimated number of impressions you were eligible to receive on the Search Network for search terms that matched your keywords exactly (or were close variants of your keyword), regardless of your keyword match types. Note: Search exact match impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
		 * Type: double
		 */
		searchExactMatchImpressionShare?: number | null;

		/**
		 * The impressions you've received on the Search Network divided by the estimated number of impressions you were eligible to receive. Note: Search impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
		 * Type: double
		 */
		searchImpressionShare?: number | null;

		/**
		 * The number estimating how often your ad wasn't the very first ad above the organic search results due to poor Ad Rank. Note: Search rank lost absolute top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
		 * Type: double
		 */
		searchRankLostAbsoluteTopImpressionShare?: number | null;

		/**
		 * The estimated percentage of impressions on the Search Network that your ads didn't receive due to poor Ad Rank. Note: Search rank lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
		 * Type: double
		 */
		searchRankLostImpressionShare?: number | null;

		/**
		 * The number estimating how often your ad didn't show anywhere above the organic search results due to poor Ad Rank. Note: Search rank lost top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
		 * Type: double
		 */
		searchRankLostTopImpressionShare?: number | null;

		/**
		 * The impressions you've received in the top location (anywhere above the organic search results) compared to the estimated number of impressions you were eligible to receive in the top location. Note: Search top impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
		 * Type: double
		 */
		searchTopImpressionShare?: number | null;

		/**
		 * The percent of your ad impressions that are shown anywhere above the organic search results.
		 * Type: double
		 */
		topImpressionPercentage?: number | null;

		/**
		 * The value of all conversions divided by the number of all conversions.
		 * Type: double
		 */
		valuePerAllConversions?: number | null;

		/**
		 * The value of all conversions divided by the number of all conversions. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.
		 * Type: double
		 */
		valuePerAllConversionsByConversionDate?: number | null;

		/**
		 * The value of biddable conversion divided by the number of biddable conversions. Shows how much, on average, each of the biddable conversions is worth.
		 * Type: double
		 */
		valuePerConversion?: number | null;

		/**
		 * Biddable conversions value by conversion date divided by biddable conversions by conversion date. Shows how much, on average, each of the biddable conversions is worth (by conversion date). When this column is selected with date, the values in date column means the conversion date.
		 * Type: double
		 */
		valuePerConversionsByConversionDate?: number | null;

		/**
		 * Clicks that Search Ads 360 has successfully recorded and forwarded to an advertiser's landing page.
		 * Type: double
		 */
		visits?: number | null;
	}

	/** Metrics data. */
	export interface GoogleAdsSearchads360V0Common__MetricsFormProperties {

		/**
		 * The percent of your ad impressions that are shown as the very first ad above the organic search results.
		 * Type: double
		 */
		absoluteTopImpressionPercentage: FormControl<number | null | undefined>,

		/**
		 * The total number of conversions. This includes all conversions regardless of the value of include_in_conversions_metric.
		 * Type: double
		 */
		allConversions: FormControl<number | null | undefined>,

		/**
		 * The total number of conversions. This includes all conversions regardless of the value of include_in_conversions_metric. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.
		 * Type: double
		 */
		allConversionsByConversionDate: FormControl<number | null | undefined>,

		/**
		 * The number of times people clicked the "Call" button to call a store during or after clicking an ad. This number doesn't include whether or not calls were connected, or the duration of any calls. This metric applies to feed items only.
		 * Type: double
		 */
		allConversionsFromClickToCall: FormControl<number | null | undefined>,

		/**
		 * The number of times people clicked a "Get directions" button to navigate to a store after clicking an ad. This metric applies to feed items only.
		 * Type: double
		 */
		allConversionsFromDirections: FormControl<number | null | undefined>,

		/**
		 * All conversions from interactions (as oppose to view through conversions) divided by the number of ad interactions.
		 * Type: double
		 */
		allConversionsFromInteractionsRate: FormControl<number | null | undefined>,

		/**
		 * The value of all conversions from interactions divided by the total number of interactions.
		 * Type: double
		 */
		allConversionsFromInteractionsValuePerInteraction: FormControl<number | null | undefined>,

		/**
		 * The number of times people clicked a link to view a store's menu after clicking an ad. This metric applies to feed items only.
		 * Type: double
		 */
		allConversionsFromMenu: FormControl<number | null | undefined>,

		/**
		 * The number of times people placed an order at a store after clicking an ad. This metric applies to feed items only.
		 * Type: double
		 */
		allConversionsFromOrder: FormControl<number | null | undefined>,

		/**
		 * The number of other conversions (for example, posting a review or saving a location for a store) that occurred after people clicked an ad. This metric applies to feed items only.
		 * Type: double
		 */
		allConversionsFromOtherEngagement: FormControl<number | null | undefined>,

		/**
		 * Estimated number of times people visited a store after clicking an ad. This metric applies to feed items only.
		 * Type: double
		 */
		allConversionsFromStoreVisit: FormControl<number | null | undefined>,

		/**
		 * The number of times that people were taken to a store's URL after clicking an ad. This metric applies to feed items only.
		 * Type: double
		 */
		allConversionsFromStoreWebsite: FormControl<number | null | undefined>,

		/**
		 * The value of all conversions.
		 * Type: double
		 */
		allConversionsValue: FormControl<number | null | undefined>,

		/**
		 * The value of all conversions. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.
		 * Type: double
		 */
		allConversionsValueByConversionDate: FormControl<number | null | undefined>,

		/**
		 * The value of all conversions divided by the total cost of ad interactions (such as clicks for text ads or views for video ads).
		 * Type: double
		 */
		allConversionsValuePerCost: FormControl<number | null | undefined>,

		/**
		 * The average amount you pay per interaction. This amount is the total cost of your ads divided by the total number of interactions.
		 * Type: double
		 */
		averageCost: FormControl<number | null | undefined>,

		/**
		 * The total cost of all clicks divided by the total number of clicks received. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
		 * Type: double
		 */
		averageCpc: FormControl<number | null | undefined>,

		/**
		 * Average cost-per-thousand impressions (CPM). This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause
		 * Type: double
		 */
		averageCpm: FormControl<number | null | undefined>,

		/** The number of clicks. */
		clicks: FormControl<string | null | undefined>,

		/**
		 * The number of client account conversions. This only includes conversion actions which include_in_client_account_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
		 * Type: double
		 */
		clientAccountConversions: FormControl<number | null | undefined>,

		/**
		 * The value of client account conversions. This only includes conversion actions which include_in_client_account_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
		 * Type: double
		 */
		clientAccountConversionsValue: FormControl<number | null | undefined>,

		/** Client account cross-sell cost of goods sold (COGS) is the total cost of products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell cost of goods sold is the total cost of the products sold that weren't advertised. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The cross-sell cost of goods sold for this order is $5. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		clientAccountCrossSellCostOfGoodsSoldMicros: FormControl<string | null | undefined>,

		/** Client account cross-sell gross profit is the profit you made from products sold as a result of advertising a different product, minus cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the purchase is a sold product. If these products don't match then this is considered cross-sell. Cross-sell gross profit is the revenue you made from cross-sell attributed to your ads minus the cost of the goods sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The shirt is priced $20 and has a cost of goods sold value of $5. The cross-sell gross profit of this order is $15 = $20 - $5. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		clientAccountCrossSellGrossProfitMicros: FormControl<string | null | undefined>,

		/** Client account cross-sell revenue is the total amount you made from products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell revenue is the total value you made from cross-sell attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and the shirt is priced $20. The cross-sell revenue of this order is $20. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		clientAccountCrossSellRevenueMicros: FormControl<string | null | undefined>,

		/**
		 * Client account cross-sell units sold is the total number of products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell units sold is the total number of cross-sold products from all orders attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The cross-sell units sold in this order is 2. This metric is only available if you report conversions with cart data.
		 * Type: double
		 */
		clientAccountCrossSellUnitsSold: FormControl<number | null | undefined>,

		/** Client account lead cost of goods sold (COGS) is the total cost of products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the cost of these goods is counted under lead cost of goods sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The lead cost of goods sold for this order is $3. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		clientAccountLeadCostOfGoodsSoldMicros: FormControl<string | null | undefined>,

		/** Client account lead gross profit is the profit you made from products sold as a result of advertising the same product, minus cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the revenue you made from these sales minus the cost of goods sold is your lead gross profit. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and has a cost of goods sold value of $3. The lead gross profit of this order is $7 = $10 - $3. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		clientAccountLeadGrossProfitMicros: FormControl<string | null | undefined>,

		/** Client account lead revenue is the total amount you made from products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the total value you made from the sales of these products is shown under lead revenue. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and the shirt is priced $20. The lead revenue of this order is $10. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		clientAccountLeadRevenueMicros: FormControl<string | null | undefined>,

		/**
		 * Client account lead units sold is the total number of products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the total number of these products sold is shown under lead units sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The lead units sold in this order is 1. This metric is only available if you report conversions with cart data.
		 * Type: double
		 */
		clientAccountLeadUnitsSold: FormControl<number | null | undefined>,

		/** The total number of view-through conversions. These happen when a customer sees an image or rich media ad, then later completes a conversion on your site without interacting with (for example, clicking on) another ad. */
		clientAccountViewThroughConversions: FormControl<string | null | undefined>,

		/**
		 * The estimated percent of times that your ad was eligible to show on the Display Network but didn't because your budget was too low. Note: Content budget lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
		 * Type: double
		 */
		contentBudgetLostImpressionShare: FormControl<number | null | undefined>,

		/**
		 * The impressions you've received on the Display Network divided by the estimated number of impressions you were eligible to receive. Note: Content impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
		 * Type: double
		 */
		contentImpressionShare: FormControl<number | null | undefined>,

		/**
		 * The estimated percentage of impressions on the Display Network that your ads didn't receive due to poor Ad Rank. Note: Content rank lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
		 * Type: double
		 */
		contentRankLostImpressionShare: FormControl<number | null | undefined>,

		/**
		 * The number of conversions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
		 * Type: double
		 */
		conversions: FormControl<number | null | undefined>,

		/**
		 * The sum of conversions by conversion date for biddable conversion types. Can be fractional due to attribution modeling. When this column is selected with date, the values in date column means the conversion date.
		 * Type: double
		 */
		conversionsByConversionDate: FormControl<number | null | undefined>,

		/**
		 * Average biddable conversions (from interaction) per conversion eligible interaction. Shows how often, on average, an ad interaction leads to a biddable conversion.
		 * Type: double
		 */
		conversionsFromInteractionsRate: FormControl<number | null | undefined>,

		/**
		 * The value of conversions from interactions divided by the number of ad interactions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
		 * Type: double
		 */
		conversionsFromInteractionsValuePerInteraction: FormControl<number | null | undefined>,

		/**
		 * The sum of conversion values for the conversions included in the "conversions" field. This metric is useful only if you entered a value for your conversion actions.
		 * Type: double
		 */
		conversionsValue: FormControl<number | null | undefined>,

		/**
		 * The sum of biddable conversions value by conversion date. When this column is selected with date, the values in date column means the conversion date.
		 * Type: double
		 */
		conversionsValueByConversionDate: FormControl<number | null | undefined>,

		/**
		 * The value of biddable conversion divided by the total cost of conversion eligible interactions.
		 * Type: double
		 */
		conversionsValuePerCost: FormControl<number | null | undefined>,

		/** The sum of your cost-per-click (CPC) and cost-per-thousand impressions (CPM) costs during this period. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		costMicros: FormControl<string | null | undefined>,

		/**
		 * The cost of ad interactions divided by all conversions.
		 * Type: double
		 */
		costPerAllConversions: FormControl<number | null | undefined>,

		/**
		 * Average conversion eligible cost per biddable conversion.
		 * Type: double
		 */
		costPerConversion: FormControl<number | null | undefined>,

		/**
		 * The cost of ad interactions divided by current model attributed conversions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
		 * Type: double
		 */
		costPerCurrentModelAttributedConversion: FormControl<number | null | undefined>,

		/**
		 * Conversions from when a customer clicks on an ad on one device, then converts on a different device or browser. Cross-device conversions are already included in all_conversions.
		 * Type: double
		 */
		crossDeviceConversions: FormControl<number | null | undefined>,

		/**
		 * The sum of the value of cross-device conversions.
		 * Type: double
		 */
		crossDeviceConversionsValue: FormControl<number | null | undefined>,

		/** Cross-sell cost of goods sold (COGS) is the total cost of products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell cost of goods sold is the total cost of the products sold that weren't advertised. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The cross-sell cost of goods sold for this order is $5. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		crossSellCostOfGoodsSoldMicros: FormControl<string | null | undefined>,

		/** Cross-sell gross profit is the profit you made from products sold as a result of advertising a different product, minus cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the purchase is a sold product. If these products don't match then this is considered cross-sell. Cross-sell gross profit is the revenue you made from cross-sell attributed to your ads minus the cost of the goods sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The shirt is priced $20 and has a cost of goods sold value of $5. The cross-sell gross profit of this order is $15 = $20 - $5. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		crossSellGrossProfitMicros: FormControl<string | null | undefined>,

		/** Cross-sell revenue is the total amount you made from products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell revenue is the total value you made from cross-sell attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and the shirt is priced $20. The cross-sell revenue of this order is $20. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		crossSellRevenueMicros: FormControl<string | null | undefined>,

		/**
		 * Cross-sell units sold is the total number of products sold as a result of advertising a different product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If these products don't match then this is considered cross-sell. Cross-sell units sold is the total number of cross-sold products from all orders attributed to your ads. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The cross-sell units sold in this order is 2. This metric is only available if you report conversions with cart data.
		 * Type: double
		 */
		crossSellUnitsSold: FormControl<number | null | undefined>,

		/**
		 * The number of clicks your ad receives (Clicks) divided by the number of times your ad is shown (Impressions).
		 * Type: double
		 */
		ctr: FormControl<number | null | undefined>,

		/** The creative historical quality score. */
		historicalCreativeQualityScore: FormControl<GoogleAdsSearchads360V0Common__MetricsHistoricalCreativeQualityScore | null | undefined>,

		/** The quality of historical landing page experience. */
		historicalLandingPageQualityScore: FormControl<GoogleAdsSearchads360V0Common__MetricsHistoricalCreativeQualityScore | null | undefined>,

		/** The historical quality score. */
		historicalQualityScore: FormControl<string | null | undefined>,

		/** The historical search predicted click through rate (CTR). */
		historicalSearchPredictedCtr: FormControl<GoogleAdsSearchads360V0Common__MetricsHistoricalCreativeQualityScore | null | undefined>,

		/** Count of how often your ad has appeared on a search results page or website on the Google Network. */
		impressions: FormControl<string | null | undefined>,

		/**
		 * How often people interact with your ad after it is shown to them. This is the number of interactions divided by the number of times your ad is shown.
		 * Type: double
		 */
		interactionRate: FormControl<number | null | undefined>,

		/** The number of interactions. An interaction is the main user action associated with an ad format-clicks for text and shopping ads, views for video ads, and so on. */
		interactions: FormControl<string | null | undefined>,

		/**
		 * The percentage of clicks filtered out of your total number of clicks (filtered + non-filtered clicks) during the reporting period.
		 * Type: double
		 */
		invalidClickRate: FormControl<number | null | undefined>,

		/** Number of clicks Google considers illegitimate and doesn't charge you for. */
		invalidClicks: FormControl<string | null | undefined>,

		/** Lead cost of goods sold (COGS) is the total cost of products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the cost of these goods is counted under lead cost of goods sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat has a cost of goods sold value of $3, the shirt has a cost of goods sold value of $5. The lead cost of goods sold for this order is $3. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		leadCostOfGoodsSoldMicros: FormControl<string | null | undefined>,

		/** Lead gross profit is the profit you made from products sold as a result of advertising the same product, minus cost of goods sold (COGS). How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the revenue you made from these sales minus the cost of goods sold is your lead gross profit. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and has a cost of goods sold value of $3. The lead gross profit of this order is $7 = $10 - $3. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		leadGrossProfitMicros: FormControl<string | null | undefined>,

		/** Lead revenue is the total amount you made from products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the total value you made from the sales of these products is shown under lead revenue. Example: Someone clicked on a Shopping ad for a hat then bought the same hat and a shirt. The hat is priced $10 and the shirt is priced $20. The lead revenue of this order is $10. This metric is only available if you report conversions with cart data. This metric is a monetary value and returned in the customer's currency by default. See the metrics_currency parameter at https://developers.google.com/search-ads/reporting/query/query-structure#parameters_clause */
		leadRevenueMicros: FormControl<string | null | undefined>,

		/**
		 * Lead units sold is the total number of products sold as a result of advertising the same product. How it works: You report conversions with cart data for completed purchases on your website. If the ad that was interacted with before the purchase has an associated product (see Shopping Ads) then this product is considered the advertised product. Any product included in the order the customer places is a sold product. If the advertised and sold products match, then the total number of these products sold is shown under lead units sold. Example: Someone clicked on a Shopping ad for a hat then bought the same hat, a shirt and a jacket. The lead units sold in this order is 1. This metric is only available if you report conversions with cart data.
		 * Type: double
		 */
		leadUnitsSold: FormControl<number | null | undefined>,

		/**
		 * The percentage of mobile clicks that go to a mobile-friendly page.
		 * Type: double
		 */
		mobileFriendlyClicksPercentage: FormControl<number | null | undefined>,

		/**
		 * The percentage of the customer's Shopping or Search ad impressions that are shown in the most prominent Shopping position. See https://support.google.com/sa360/answer/9566729 for details. Any value below 0.1 is reported as 0.0999.
		 * Type: double
		 */
		searchAbsoluteTopImpressionShare: FormControl<number | null | undefined>,

		/**
		 * The number estimating how often your ad wasn't the very first ad above the organic search results due to a low budget. Note: Search budget lost absolute top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
		 * Type: double
		 */
		searchBudgetLostAbsoluteTopImpressionShare: FormControl<number | null | undefined>,

		/**
		 * The estimated percent of times that your ad was eligible to show on the Search Network but didn't because your budget was too low. Note: Search budget lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
		 * Type: double
		 */
		searchBudgetLostImpressionShare: FormControl<number | null | undefined>,

		/**
		 * The number estimating how often your ad didn't show anywhere above the organic search results due to a low budget. Note: Search budget lost top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
		 * Type: double
		 */
		searchBudgetLostTopImpressionShare: FormControl<number | null | undefined>,

		/**
		 * The number of clicks you've received on the Search Network divided by the estimated number of clicks you were eligible to receive. Note: Search click share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
		 * Type: double
		 */
		searchClickShare: FormControl<number | null | undefined>,

		/**
		 * The impressions you've received divided by the estimated number of impressions you were eligible to receive on the Search Network for search terms that matched your keywords exactly (or were close variants of your keyword), regardless of your keyword match types. Note: Search exact match impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
		 * Type: double
		 */
		searchExactMatchImpressionShare: FormControl<number | null | undefined>,

		/**
		 * The impressions you've received on the Search Network divided by the estimated number of impressions you were eligible to receive. Note: Search impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
		 * Type: double
		 */
		searchImpressionShare: FormControl<number | null | undefined>,

		/**
		 * The number estimating how often your ad wasn't the very first ad above the organic search results due to poor Ad Rank. Note: Search rank lost absolute top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
		 * Type: double
		 */
		searchRankLostAbsoluteTopImpressionShare: FormControl<number | null | undefined>,

		/**
		 * The estimated percentage of impressions on the Search Network that your ads didn't receive due to poor Ad Rank. Note: Search rank lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
		 * Type: double
		 */
		searchRankLostImpressionShare: FormControl<number | null | undefined>,

		/**
		 * The number estimating how often your ad didn't show anywhere above the organic search results due to poor Ad Rank. Note: Search rank lost top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
		 * Type: double
		 */
		searchRankLostTopImpressionShare: FormControl<number | null | undefined>,

		/**
		 * The impressions you've received in the top location (anywhere above the organic search results) compared to the estimated number of impressions you were eligible to receive in the top location. Note: Search top impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
		 * Type: double
		 */
		searchTopImpressionShare: FormControl<number | null | undefined>,

		/**
		 * The percent of your ad impressions that are shown anywhere above the organic search results.
		 * Type: double
		 */
		topImpressionPercentage: FormControl<number | null | undefined>,

		/**
		 * The value of all conversions divided by the number of all conversions.
		 * Type: double
		 */
		valuePerAllConversions: FormControl<number | null | undefined>,

		/**
		 * The value of all conversions divided by the number of all conversions. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.
		 * Type: double
		 */
		valuePerAllConversionsByConversionDate: FormControl<number | null | undefined>,

		/**
		 * The value of biddable conversion divided by the number of biddable conversions. Shows how much, on average, each of the biddable conversions is worth.
		 * Type: double
		 */
		valuePerConversion: FormControl<number | null | undefined>,

		/**
		 * Biddable conversions value by conversion date divided by biddable conversions by conversion date. Shows how much, on average, each of the biddable conversions is worth (by conversion date). When this column is selected with date, the values in date column means the conversion date.
		 * Type: double
		 */
		valuePerConversionsByConversionDate: FormControl<number | null | undefined>,

		/**
		 * Clicks that Search Ads 360 has successfully recorded and forwarded to an advertiser's landing page.
		 * Type: double
		 */
		visits: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__MetricsFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__MetricsFormProperties>({
			absoluteTopImpressionPercentage: new FormControl<number | null | undefined>(undefined),
			allConversions: new FormControl<number | null | undefined>(undefined),
			allConversionsByConversionDate: new FormControl<number | null | undefined>(undefined),
			allConversionsFromClickToCall: new FormControl<number | null | undefined>(undefined),
			allConversionsFromDirections: new FormControl<number | null | undefined>(undefined),
			allConversionsFromInteractionsRate: new FormControl<number | null | undefined>(undefined),
			allConversionsFromInteractionsValuePerInteraction: new FormControl<number | null | undefined>(undefined),
			allConversionsFromMenu: new FormControl<number | null | undefined>(undefined),
			allConversionsFromOrder: new FormControl<number | null | undefined>(undefined),
			allConversionsFromOtherEngagement: new FormControl<number | null | undefined>(undefined),
			allConversionsFromStoreVisit: new FormControl<number | null | undefined>(undefined),
			allConversionsFromStoreWebsite: new FormControl<number | null | undefined>(undefined),
			allConversionsValue: new FormControl<number | null | undefined>(undefined),
			allConversionsValueByConversionDate: new FormControl<number | null | undefined>(undefined),
			allConversionsValuePerCost: new FormControl<number | null | undefined>(undefined),
			averageCost: new FormControl<number | null | undefined>(undefined),
			averageCpc: new FormControl<number | null | undefined>(undefined),
			averageCpm: new FormControl<number | null | undefined>(undefined),
			clicks: new FormControl<string | null | undefined>(undefined),
			clientAccountConversions: new FormControl<number | null | undefined>(undefined),
			clientAccountConversionsValue: new FormControl<number | null | undefined>(undefined),
			clientAccountCrossSellCostOfGoodsSoldMicros: new FormControl<string | null | undefined>(undefined),
			clientAccountCrossSellGrossProfitMicros: new FormControl<string | null | undefined>(undefined),
			clientAccountCrossSellRevenueMicros: new FormControl<string | null | undefined>(undefined),
			clientAccountCrossSellUnitsSold: new FormControl<number | null | undefined>(undefined),
			clientAccountLeadCostOfGoodsSoldMicros: new FormControl<string | null | undefined>(undefined),
			clientAccountLeadGrossProfitMicros: new FormControl<string | null | undefined>(undefined),
			clientAccountLeadRevenueMicros: new FormControl<string | null | undefined>(undefined),
			clientAccountLeadUnitsSold: new FormControl<number | null | undefined>(undefined),
			clientAccountViewThroughConversions: new FormControl<string | null | undefined>(undefined),
			contentBudgetLostImpressionShare: new FormControl<number | null | undefined>(undefined),
			contentImpressionShare: new FormControl<number | null | undefined>(undefined),
			contentRankLostImpressionShare: new FormControl<number | null | undefined>(undefined),
			conversions: new FormControl<number | null | undefined>(undefined),
			conversionsByConversionDate: new FormControl<number | null | undefined>(undefined),
			conversionsFromInteractionsRate: new FormControl<number | null | undefined>(undefined),
			conversionsFromInteractionsValuePerInteraction: new FormControl<number | null | undefined>(undefined),
			conversionsValue: new FormControl<number | null | undefined>(undefined),
			conversionsValueByConversionDate: new FormControl<number | null | undefined>(undefined),
			conversionsValuePerCost: new FormControl<number | null | undefined>(undefined),
			costMicros: new FormControl<string | null | undefined>(undefined),
			costPerAllConversions: new FormControl<number | null | undefined>(undefined),
			costPerConversion: new FormControl<number | null | undefined>(undefined),
			costPerCurrentModelAttributedConversion: new FormControl<number | null | undefined>(undefined),
			crossDeviceConversions: new FormControl<number | null | undefined>(undefined),
			crossDeviceConversionsValue: new FormControl<number | null | undefined>(undefined),
			crossSellCostOfGoodsSoldMicros: new FormControl<string | null | undefined>(undefined),
			crossSellGrossProfitMicros: new FormControl<string | null | undefined>(undefined),
			crossSellRevenueMicros: new FormControl<string | null | undefined>(undefined),
			crossSellUnitsSold: new FormControl<number | null | undefined>(undefined),
			ctr: new FormControl<number | null | undefined>(undefined),
			historicalCreativeQualityScore: new FormControl<GoogleAdsSearchads360V0Common__MetricsHistoricalCreativeQualityScore | null | undefined>(undefined),
			historicalLandingPageQualityScore: new FormControl<GoogleAdsSearchads360V0Common__MetricsHistoricalCreativeQualityScore | null | undefined>(undefined),
			historicalQualityScore: new FormControl<string | null | undefined>(undefined),
			historicalSearchPredictedCtr: new FormControl<GoogleAdsSearchads360V0Common__MetricsHistoricalCreativeQualityScore | null | undefined>(undefined),
			impressions: new FormControl<string | null | undefined>(undefined),
			interactionRate: new FormControl<number | null | undefined>(undefined),
			interactions: new FormControl<string | null | undefined>(undefined),
			invalidClickRate: new FormControl<number | null | undefined>(undefined),
			invalidClicks: new FormControl<string | null | undefined>(undefined),
			leadCostOfGoodsSoldMicros: new FormControl<string | null | undefined>(undefined),
			leadGrossProfitMicros: new FormControl<string | null | undefined>(undefined),
			leadRevenueMicros: new FormControl<string | null | undefined>(undefined),
			leadUnitsSold: new FormControl<number | null | undefined>(undefined),
			mobileFriendlyClicksPercentage: new FormControl<number | null | undefined>(undefined),
			searchAbsoluteTopImpressionShare: new FormControl<number | null | undefined>(undefined),
			searchBudgetLostAbsoluteTopImpressionShare: new FormControl<number | null | undefined>(undefined),
			searchBudgetLostImpressionShare: new FormControl<number | null | undefined>(undefined),
			searchBudgetLostTopImpressionShare: new FormControl<number | null | undefined>(undefined),
			searchClickShare: new FormControl<number | null | undefined>(undefined),
			searchExactMatchImpressionShare: new FormControl<number | null | undefined>(undefined),
			searchImpressionShare: new FormControl<number | null | undefined>(undefined),
			searchRankLostAbsoluteTopImpressionShare: new FormControl<number | null | undefined>(undefined),
			searchRankLostImpressionShare: new FormControl<number | null | undefined>(undefined),
			searchRankLostTopImpressionShare: new FormControl<number | null | undefined>(undefined),
			searchTopImpressionShare: new FormControl<number | null | undefined>(undefined),
			topImpressionPercentage: new FormControl<number | null | undefined>(undefined),
			valuePerAllConversions: new FormControl<number | null | undefined>(undefined),
			valuePerAllConversionsByConversionDate: new FormControl<number | null | undefined>(undefined),
			valuePerConversion: new FormControl<number | null | undefined>(undefined),
			valuePerConversionsByConversionDate: new FormControl<number | null | undefined>(undefined),
			visits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__MetricsHistoricalCreativeQualityScore { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', BELOW_AVERAGE = 'BELOW_AVERAGE', AVERAGE = 'AVERAGE', ABOVE_AVERAGE = 'ABOVE_AVERAGE' }


	/** An asset representing a mobile app. */
	export interface GoogleAdsSearchads360V0Common__MobileAppAsset {

		/** Required. A string that uniquely identifies a mobile application. It should just contain the platform native id, like "com.android.ebay" for Android or "12345689" for iOS. */
		appId?: string | null;

		/** Required. The application store that distributes this specific app. */
		appStore?: GoogleAdsSearchads360V0Common__MobileAppAssetAppStore | null;
	}

	/** An asset representing a mobile app. */
	export interface GoogleAdsSearchads360V0Common__MobileAppAssetFormProperties {

		/** Required. A string that uniquely identifies a mobile application. It should just contain the platform native id, like "com.android.ebay" for Android or "12345689" for iOS. */
		appId: FormControl<string | null | undefined>,

		/** Required. The application store that distributes this specific app. */
		appStore: FormControl<GoogleAdsSearchads360V0Common__MobileAppAssetAppStore | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__MobileAppAssetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__MobileAppAssetFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			appStore: new FormControl<GoogleAdsSearchads360V0Common__MobileAppAssetAppStore | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__MobileAppAssetAppStore { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', APPLE_APP_STORE = 'APPLE_APP_STORE', GOOGLE_APP_STORE = 'GOOGLE_APP_STORE' }


	/** A bidding strategy where bids are a fraction of the advertised price for some good or service. */
	export interface GoogleAdsSearchads360V0Common__PercentCpc {

		/** Maximum bid limit that can be set by the bid strategy. This is an optional field entered by the advertiser and specified in local micros. Note: A zero value is interpreted in the same way as having bid_ceiling undefined. */
		cpcBidCeilingMicros?: string | null;

		/** Adjusts the bid for each auction upward or downward, depending on the likelihood of a conversion. Individual bids may exceed cpc_bid_ceiling_micros, but the average bid amount for a campaign should not. */
		enhancedCpcEnabled?: boolean | null;
	}

	/** A bidding strategy where bids are a fraction of the advertised price for some good or service. */
	export interface GoogleAdsSearchads360V0Common__PercentCpcFormProperties {

		/** Maximum bid limit that can be set by the bid strategy. This is an optional field entered by the advertiser and specified in local micros. Note: A zero value is interpreted in the same way as having bid_ceiling undefined. */
		cpcBidCeilingMicros: FormControl<string | null | undefined>,

		/** Adjusts the bid for each auction upward or downward, depending on the likelihood of a conversion. Individual bids may exceed cpc_bid_ceiling_micros, but the average bid amount for a campaign should not. */
		enhancedCpcEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__PercentCpcFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__PercentCpcFormProperties>({
			cpcBidCeilingMicros: new FormControl<string | null | undefined>(undefined),
			enhancedCpcEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Settings for Real-Time Bidding, a feature only available for campaigns targeting the Ad Exchange network. */
	export interface GoogleAdsSearchads360V0Common__RealTimeBiddingSetting {

		/** Whether the campaign is opted in to real-time bidding. */
		optIn?: boolean | null;
	}

	/** Settings for Real-Time Bidding, a feature only available for campaigns targeting the Ad Exchange network. */
	export interface GoogleAdsSearchads360V0Common__RealTimeBiddingSettingFormProperties {

		/** Whether the campaign is opted in to real-time bidding. */
		optIn: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__RealTimeBiddingSettingFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__RealTimeBiddingSettingFormProperties>({
			optIn: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An expanded dynamic search ad. */
	export interface GoogleAdsSearchads360V0Common__SearchAds360ExpandedDynamicSearchAdInfo {

		/** The tracking id of the ad. */
		adTrackingId?: string | null;

		/** The first line of the ad's description. */
		description1?: string | null;

		/** The second line of the ad's description. */
		description2?: string | null;
	}

	/** An expanded dynamic search ad. */
	export interface GoogleAdsSearchads360V0Common__SearchAds360ExpandedDynamicSearchAdInfoFormProperties {

		/** The tracking id of the ad. */
		adTrackingId: FormControl<string | null | undefined>,

		/** The first line of the ad's description. */
		description1: FormControl<string | null | undefined>,

		/** The second line of the ad's description. */
		description2: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__SearchAds360ExpandedDynamicSearchAdInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__SearchAds360ExpandedDynamicSearchAdInfoFormProperties>({
			adTrackingId: new FormControl<string | null | undefined>(undefined),
			description1: new FormControl<string | null | undefined>(undefined),
			description2: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Search Ads 360 expanded text ad. */
	export interface GoogleAdsSearchads360V0Common__SearchAds360ExpandedTextAdInfo {

		/** The tracking id of the ad. */
		adTrackingId?: string | null;

		/** The first line of the ad's description. */
		description1?: string | null;

		/** The second line of the ad's description. */
		description2?: string | null;

		/** The headline of the ad. */
		headline?: string | null;

		/** The second headline of the ad. */
		headline2?: string | null;

		/** The third headline of the ad. */
		headline3?: string | null;

		/** Text appended to the auto-generated visible URL with a delimiter. */
		path1?: string | null;

		/** Text appended to path1 with a delimiter. */
		path2?: string | null;
	}

	/** A Search Ads 360 expanded text ad. */
	export interface GoogleAdsSearchads360V0Common__SearchAds360ExpandedTextAdInfoFormProperties {

		/** The tracking id of the ad. */
		adTrackingId: FormControl<string | null | undefined>,

		/** The first line of the ad's description. */
		description1: FormControl<string | null | undefined>,

		/** The second line of the ad's description. */
		description2: FormControl<string | null | undefined>,

		/** The headline of the ad. */
		headline: FormControl<string | null | undefined>,

		/** The second headline of the ad. */
		headline2: FormControl<string | null | undefined>,

		/** The third headline of the ad. */
		headline3: FormControl<string | null | undefined>,

		/** Text appended to the auto-generated visible URL with a delimiter. */
		path1: FormControl<string | null | undefined>,

		/** Text appended to path1 with a delimiter. */
		path2: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__SearchAds360ExpandedTextAdInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__SearchAds360ExpandedTextAdInfoFormProperties>({
			adTrackingId: new FormControl<string | null | undefined>(undefined),
			description1: new FormControl<string | null | undefined>(undefined),
			description2: new FormControl<string | null | undefined>(undefined),
			headline: new FormControl<string | null | undefined>(undefined),
			headline2: new FormControl<string | null | undefined>(undefined),
			headline3: new FormControl<string | null | undefined>(undefined),
			path1: new FormControl<string | null | undefined>(undefined),
			path2: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Search Ads 360 product ad. */
	export interface GoogleAdsSearchads360V0Common__SearchAds360ProductAdInfo {
	}

	/** A Search Ads 360 product ad. */
	export interface GoogleAdsSearchads360V0Common__SearchAds360ProductAdInfoFormProperties {
	}
	export function CreateGoogleAdsSearchads360V0Common__SearchAds360ProductAdInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__SearchAds360ProductAdInfoFormProperties>({
		});

	}


	/** A Search Ads 360 responsive search ad. */
	export interface GoogleAdsSearchads360V0Common__SearchAds360ResponsiveSearchAdInfo {

		/** The tracking id of the ad. */
		adTrackingId?: string | null;

		/** Text appended to the auto-generated visible URL with a delimiter. */
		path1?: string | null;

		/** Text appended to path1 with a delimiter. */
		path2?: string | null;
	}

	/** A Search Ads 360 responsive search ad. */
	export interface GoogleAdsSearchads360V0Common__SearchAds360ResponsiveSearchAdInfoFormProperties {

		/** The tracking id of the ad. */
		adTrackingId: FormControl<string | null | undefined>,

		/** Text appended to the auto-generated visible URL with a delimiter. */
		path1: FormControl<string | null | undefined>,

		/** Text appended to path1 with a delimiter. */
		path2: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__SearchAds360ResponsiveSearchAdInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__SearchAds360ResponsiveSearchAdInfoFormProperties>({
			adTrackingId: new FormControl<string | null | undefined>(undefined),
			path1: new FormControl<string | null | undefined>(undefined),
			path2: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Search Ads 360 text ad. */
	export interface GoogleAdsSearchads360V0Common__SearchAds360TextAdInfo {

		/** The tracking id of the ad. */
		adTrackingId?: string | null;

		/** The first line of the ad's description. */
		description1?: string | null;

		/** The second line of the ad's description. */
		description2?: string | null;

		/** The displayed mobile URL of the ad. */
		displayMobileUrl?: string | null;

		/** The displayed URL of the ad. */
		displayUrl?: string | null;

		/** The headline of the ad. */
		headline?: string | null;
	}

	/** A Search Ads 360 text ad. */
	export interface GoogleAdsSearchads360V0Common__SearchAds360TextAdInfoFormProperties {

		/** The tracking id of the ad. */
		adTrackingId: FormControl<string | null | undefined>,

		/** The first line of the ad's description. */
		description1: FormControl<string | null | undefined>,

		/** The second line of the ad's description. */
		description2: FormControl<string | null | undefined>,

		/** The displayed mobile URL of the ad. */
		displayMobileUrl: FormControl<string | null | undefined>,

		/** The displayed URL of the ad. */
		displayUrl: FormControl<string | null | undefined>,

		/** The headline of the ad. */
		headline: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__SearchAds360TextAdInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__SearchAds360TextAdInfoFormProperties>({
			adTrackingId: new FormControl<string | null | undefined>(undefined),
			description1: new FormControl<string | null | undefined>(undefined),
			description2: new FormControl<string | null | undefined>(undefined),
			displayMobileUrl: new FormControl<string | null | undefined>(undefined),
			displayUrl: new FormControl<string | null | undefined>(undefined),
			headline: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Segment only fields. */
	export interface GoogleAdsSearchads360V0Common__Segments {

		/** Ad network type. */
		adNetworkType?: GoogleAdsSearchads360V0Common__SegmentsAdNetworkType | null;

		/** An AssetInteractionTarget segment. */
		assetInteractionTarget?: GoogleAdsSearchads360V0Common__AssetInteractionTarget;

		/** Resource name of the conversion action. */
		conversionAction?: string | null;

		/** Conversion action category. */
		conversionActionCategory?: GoogleAdsSearchads360V0Common__SegmentsConversionActionCategory | null;

		/** Conversion action name. */
		conversionActionName?: string | null;

		/** Date to which metrics apply. yyyy-MM-dd format, for example, 2018-04-17. */
		date?: string | null;

		/** Day of the week, for example, MONDAY. */
		dayOfWeek?: GoogleAdsSearchads360V0Common__AdScheduleInfoDayOfWeek | null;

		/** Device to which metrics apply. */
		device?: GoogleAdsSearchads360V0Common__DeviceInfoType | null;

		/** A Keyword criterion segment. */
		keyword?: GoogleAdsSearchads360V0Common__Keyword;

		/** Month as represented by the date of the first day of a month. Formatted as yyyy-MM-dd. */
		month?: string | null;

		/** Bidding category (level 1) of the product. */
		productBiddingCategoryLevel1?: string | null;

		/** Bidding category (level 2) of the product. */
		productBiddingCategoryLevel2?: string | null;

		/** Bidding category (level 3) of the product. */
		productBiddingCategoryLevel3?: string | null;

		/** Bidding category (level 4) of the product. */
		productBiddingCategoryLevel4?: string | null;

		/** Bidding category (level 5) of the product. */
		productBiddingCategoryLevel5?: string | null;

		/** Brand of the product. */
		productBrand?: string | null;

		/** Channel of the product. */
		productChannel?: GoogleAdsSearchads360V0Common__SegmentsProductChannel | null;

		/** Channel exclusivity of the product. */
		productChannelExclusivity?: GoogleAdsSearchads360V0Common__SegmentsProductChannelExclusivity | null;

		/** Condition of the product. */
		productCondition?: GoogleAdsSearchads360V0Common__SegmentsProductCondition | null;

		/** Resource name of the geo target constant for the country of sale of the product. */
		productCountry?: string | null;

		/** Custom attribute 0 of the product. */
		productCustomAttribute0?: string | null;

		/** Custom attribute 1 of the product. */
		productCustomAttribute1?: string | null;

		/** Custom attribute 2 of the product. */
		productCustomAttribute2?: string | null;

		/** Custom attribute 3 of the product. */
		productCustomAttribute3?: string | null;

		/** Custom attribute 4 of the product. */
		productCustomAttribute4?: string | null;

		/** Item ID of the product. */
		productItemId?: string | null;

		/** Resource name of the language constant for the language of the product. */
		productLanguage?: string | null;

		/** Bidding category (level 1) of the product sold. */
		productSoldBiddingCategoryLevel1?: string | null;

		/** Bidding category (level 2) of the product sold. */
		productSoldBiddingCategoryLevel2?: string | null;

		/** Bidding category (level 3) of the product sold. */
		productSoldBiddingCategoryLevel3?: string | null;

		/** Bidding category (level 4) of the product sold. */
		productSoldBiddingCategoryLevel4?: string | null;

		/** Bidding category (level 5) of the product sold. */
		productSoldBiddingCategoryLevel5?: string | null;

		/** Brand of the product sold. */
		productSoldBrand?: string | null;

		/** Condition of the product sold. */
		productSoldCondition?: GoogleAdsSearchads360V0Common__SegmentsProductCondition | null;

		/** Custom attribute 0 of the product sold. */
		productSoldCustomAttribute0?: string | null;

		/** Custom attribute 1 of the product sold. */
		productSoldCustomAttribute1?: string | null;

		/** Custom attribute 2 of the product sold. */
		productSoldCustomAttribute2?: string | null;

		/** Custom attribute 3 of the product sold. */
		productSoldCustomAttribute3?: string | null;

		/** Custom attribute 4 of the product sold. */
		productSoldCustomAttribute4?: string | null;

		/** Item ID of the product sold. */
		productSoldItemId?: string | null;

		/** Title of the product sold. */
		productSoldTitle?: string | null;

		/** Type (level 1) of the product sold. */
		productSoldTypeL1?: string | null;

		/** Type (level 2) of the product sold. */
		productSoldTypeL2?: string | null;

		/** Type (level 3) of the product sold. */
		productSoldTypeL3?: string | null;

		/** Type (level 4) of the product sold. */
		productSoldTypeL4?: string | null;

		/** Type (level 5) of the product sold. */
		productSoldTypeL5?: string | null;

		/** Store ID of the product. */
		productStoreId?: string | null;

		/** Title of the product. */
		productTitle?: string | null;

		/** Type (level 1) of the product. */
		productTypeL1?: string | null;

		/** Type (level 2) of the product. */
		productTypeL2?: string | null;

		/** Type (level 3) of the product. */
		productTypeL3?: string | null;

		/** Type (level 4) of the product. */
		productTypeL4?: string | null;

		/** Type (level 5) of the product. */
		productTypeL5?: string | null;

		/** Quarter as represented by the date of the first day of a quarter. Uses the calendar year for quarters, for example, the second quarter of 2018 starts on 2018-04-01. Formatted as yyyy-MM-dd. */
		quarter?: string | null;

		/** Week as defined as Monday through Sunday, and represented by the date of Monday. Formatted as yyyy-MM-dd. */
		week?: string | null;

		/**
		 * Year, formatted as yyyy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}

	/** Segment only fields. */
	export interface GoogleAdsSearchads360V0Common__SegmentsFormProperties {

		/** Ad network type. */
		adNetworkType: FormControl<GoogleAdsSearchads360V0Common__SegmentsAdNetworkType | null | undefined>,

		/** Resource name of the conversion action. */
		conversionAction: FormControl<string | null | undefined>,

		/** Conversion action category. */
		conversionActionCategory: FormControl<GoogleAdsSearchads360V0Common__SegmentsConversionActionCategory | null | undefined>,

		/** Conversion action name. */
		conversionActionName: FormControl<string | null | undefined>,

		/** Date to which metrics apply. yyyy-MM-dd format, for example, 2018-04-17. */
		date: FormControl<string | null | undefined>,

		/** Day of the week, for example, MONDAY. */
		dayOfWeek: FormControl<GoogleAdsSearchads360V0Common__AdScheduleInfoDayOfWeek | null | undefined>,

		/** Device to which metrics apply. */
		device: FormControl<GoogleAdsSearchads360V0Common__DeviceInfoType | null | undefined>,

		/** Month as represented by the date of the first day of a month. Formatted as yyyy-MM-dd. */
		month: FormControl<string | null | undefined>,

		/** Bidding category (level 1) of the product. */
		productBiddingCategoryLevel1: FormControl<string | null | undefined>,

		/** Bidding category (level 2) of the product. */
		productBiddingCategoryLevel2: FormControl<string | null | undefined>,

		/** Bidding category (level 3) of the product. */
		productBiddingCategoryLevel3: FormControl<string | null | undefined>,

		/** Bidding category (level 4) of the product. */
		productBiddingCategoryLevel4: FormControl<string | null | undefined>,

		/** Bidding category (level 5) of the product. */
		productBiddingCategoryLevel5: FormControl<string | null | undefined>,

		/** Brand of the product. */
		productBrand: FormControl<string | null | undefined>,

		/** Channel of the product. */
		productChannel: FormControl<GoogleAdsSearchads360V0Common__SegmentsProductChannel | null | undefined>,

		/** Channel exclusivity of the product. */
		productChannelExclusivity: FormControl<GoogleAdsSearchads360V0Common__SegmentsProductChannelExclusivity | null | undefined>,

		/** Condition of the product. */
		productCondition: FormControl<GoogleAdsSearchads360V0Common__SegmentsProductCondition | null | undefined>,

		/** Resource name of the geo target constant for the country of sale of the product. */
		productCountry: FormControl<string | null | undefined>,

		/** Custom attribute 0 of the product. */
		productCustomAttribute0: FormControl<string | null | undefined>,

		/** Custom attribute 1 of the product. */
		productCustomAttribute1: FormControl<string | null | undefined>,

		/** Custom attribute 2 of the product. */
		productCustomAttribute2: FormControl<string | null | undefined>,

		/** Custom attribute 3 of the product. */
		productCustomAttribute3: FormControl<string | null | undefined>,

		/** Custom attribute 4 of the product. */
		productCustomAttribute4: FormControl<string | null | undefined>,

		/** Item ID of the product. */
		productItemId: FormControl<string | null | undefined>,

		/** Resource name of the language constant for the language of the product. */
		productLanguage: FormControl<string | null | undefined>,

		/** Bidding category (level 1) of the product sold. */
		productSoldBiddingCategoryLevel1: FormControl<string | null | undefined>,

		/** Bidding category (level 2) of the product sold. */
		productSoldBiddingCategoryLevel2: FormControl<string | null | undefined>,

		/** Bidding category (level 3) of the product sold. */
		productSoldBiddingCategoryLevel3: FormControl<string | null | undefined>,

		/** Bidding category (level 4) of the product sold. */
		productSoldBiddingCategoryLevel4: FormControl<string | null | undefined>,

		/** Bidding category (level 5) of the product sold. */
		productSoldBiddingCategoryLevel5: FormControl<string | null | undefined>,

		/** Brand of the product sold. */
		productSoldBrand: FormControl<string | null | undefined>,

		/** Condition of the product sold. */
		productSoldCondition: FormControl<GoogleAdsSearchads360V0Common__SegmentsProductCondition | null | undefined>,

		/** Custom attribute 0 of the product sold. */
		productSoldCustomAttribute0: FormControl<string | null | undefined>,

		/** Custom attribute 1 of the product sold. */
		productSoldCustomAttribute1: FormControl<string | null | undefined>,

		/** Custom attribute 2 of the product sold. */
		productSoldCustomAttribute2: FormControl<string | null | undefined>,

		/** Custom attribute 3 of the product sold. */
		productSoldCustomAttribute3: FormControl<string | null | undefined>,

		/** Custom attribute 4 of the product sold. */
		productSoldCustomAttribute4: FormControl<string | null | undefined>,

		/** Item ID of the product sold. */
		productSoldItemId: FormControl<string | null | undefined>,

		/** Title of the product sold. */
		productSoldTitle: FormControl<string | null | undefined>,

		/** Type (level 1) of the product sold. */
		productSoldTypeL1: FormControl<string | null | undefined>,

		/** Type (level 2) of the product sold. */
		productSoldTypeL2: FormControl<string | null | undefined>,

		/** Type (level 3) of the product sold. */
		productSoldTypeL3: FormControl<string | null | undefined>,

		/** Type (level 4) of the product sold. */
		productSoldTypeL4: FormControl<string | null | undefined>,

		/** Type (level 5) of the product sold. */
		productSoldTypeL5: FormControl<string | null | undefined>,

		/** Store ID of the product. */
		productStoreId: FormControl<string | null | undefined>,

		/** Title of the product. */
		productTitle: FormControl<string | null | undefined>,

		/** Type (level 1) of the product. */
		productTypeL1: FormControl<string | null | undefined>,

		/** Type (level 2) of the product. */
		productTypeL2: FormControl<string | null | undefined>,

		/** Type (level 3) of the product. */
		productTypeL3: FormControl<string | null | undefined>,

		/** Type (level 4) of the product. */
		productTypeL4: FormControl<string | null | undefined>,

		/** Type (level 5) of the product. */
		productTypeL5: FormControl<string | null | undefined>,

		/** Quarter as represented by the date of the first day of a quarter. Uses the calendar year for quarters, for example, the second quarter of 2018 starts on 2018-04-01. Formatted as yyyy-MM-dd. */
		quarter: FormControl<string | null | undefined>,

		/** Week as defined as Monday through Sunday, and represented by the date of Monday. Formatted as yyyy-MM-dd. */
		week: FormControl<string | null | undefined>,

		/**
		 * Year, formatted as yyyy.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__SegmentsFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__SegmentsFormProperties>({
			adNetworkType: new FormControl<GoogleAdsSearchads360V0Common__SegmentsAdNetworkType | null | undefined>(undefined),
			conversionAction: new FormControl<string | null | undefined>(undefined),
			conversionActionCategory: new FormControl<GoogleAdsSearchads360V0Common__SegmentsConversionActionCategory | null | undefined>(undefined),
			conversionActionName: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			dayOfWeek: new FormControl<GoogleAdsSearchads360V0Common__AdScheduleInfoDayOfWeek | null | undefined>(undefined),
			device: new FormControl<GoogleAdsSearchads360V0Common__DeviceInfoType | null | undefined>(undefined),
			month: new FormControl<string | null | undefined>(undefined),
			productBiddingCategoryLevel1: new FormControl<string | null | undefined>(undefined),
			productBiddingCategoryLevel2: new FormControl<string | null | undefined>(undefined),
			productBiddingCategoryLevel3: new FormControl<string | null | undefined>(undefined),
			productBiddingCategoryLevel4: new FormControl<string | null | undefined>(undefined),
			productBiddingCategoryLevel5: new FormControl<string | null | undefined>(undefined),
			productBrand: new FormControl<string | null | undefined>(undefined),
			productChannel: new FormControl<GoogleAdsSearchads360V0Common__SegmentsProductChannel | null | undefined>(undefined),
			productChannelExclusivity: new FormControl<GoogleAdsSearchads360V0Common__SegmentsProductChannelExclusivity | null | undefined>(undefined),
			productCondition: new FormControl<GoogleAdsSearchads360V0Common__SegmentsProductCondition | null | undefined>(undefined),
			productCountry: new FormControl<string | null | undefined>(undefined),
			productCustomAttribute0: new FormControl<string | null | undefined>(undefined),
			productCustomAttribute1: new FormControl<string | null | undefined>(undefined),
			productCustomAttribute2: new FormControl<string | null | undefined>(undefined),
			productCustomAttribute3: new FormControl<string | null | undefined>(undefined),
			productCustomAttribute4: new FormControl<string | null | undefined>(undefined),
			productItemId: new FormControl<string | null | undefined>(undefined),
			productLanguage: new FormControl<string | null | undefined>(undefined),
			productSoldBiddingCategoryLevel1: new FormControl<string | null | undefined>(undefined),
			productSoldBiddingCategoryLevel2: new FormControl<string | null | undefined>(undefined),
			productSoldBiddingCategoryLevel3: new FormControl<string | null | undefined>(undefined),
			productSoldBiddingCategoryLevel4: new FormControl<string | null | undefined>(undefined),
			productSoldBiddingCategoryLevel5: new FormControl<string | null | undefined>(undefined),
			productSoldBrand: new FormControl<string | null | undefined>(undefined),
			productSoldCondition: new FormControl<GoogleAdsSearchads360V0Common__SegmentsProductCondition | null | undefined>(undefined),
			productSoldCustomAttribute0: new FormControl<string | null | undefined>(undefined),
			productSoldCustomAttribute1: new FormControl<string | null | undefined>(undefined),
			productSoldCustomAttribute2: new FormControl<string | null | undefined>(undefined),
			productSoldCustomAttribute3: new FormControl<string | null | undefined>(undefined),
			productSoldCustomAttribute4: new FormControl<string | null | undefined>(undefined),
			productSoldItemId: new FormControl<string | null | undefined>(undefined),
			productSoldTitle: new FormControl<string | null | undefined>(undefined),
			productSoldTypeL1: new FormControl<string | null | undefined>(undefined),
			productSoldTypeL2: new FormControl<string | null | undefined>(undefined),
			productSoldTypeL3: new FormControl<string | null | undefined>(undefined),
			productSoldTypeL4: new FormControl<string | null | undefined>(undefined),
			productSoldTypeL5: new FormControl<string | null | undefined>(undefined),
			productStoreId: new FormControl<string | null | undefined>(undefined),
			productTitle: new FormControl<string | null | undefined>(undefined),
			productTypeL1: new FormControl<string | null | undefined>(undefined),
			productTypeL2: new FormControl<string | null | undefined>(undefined),
			productTypeL3: new FormControl<string | null | undefined>(undefined),
			productTypeL4: new FormControl<string | null | undefined>(undefined),
			productTypeL5: new FormControl<string | null | undefined>(undefined),
			quarter: new FormControl<string | null | undefined>(undefined),
			week: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__SegmentsAdNetworkType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', SEARCH = 'SEARCH', SEARCH_PARTNERS = 'SEARCH_PARTNERS', CONTENT = 'CONTENT', YOUTUBE_SEARCH = 'YOUTUBE_SEARCH', YOUTUBE_WATCH = 'YOUTUBE_WATCH', MIXED = 'MIXED' }

	export enum GoogleAdsSearchads360V0Common__SegmentsConversionActionCategory { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', DEFAULT = 'DEFAULT', PAGE_VIEW = 'PAGE_VIEW', PURCHASE = 'PURCHASE', SIGNUP = 'SIGNUP', LEAD = 'LEAD', DOWNLOAD = 'DOWNLOAD', ADD_TO_CART = 'ADD_TO_CART', BEGIN_CHECKOUT = 'BEGIN_CHECKOUT', SUBSCRIBE_PAID = 'SUBSCRIBE_PAID', PHONE_CALL_LEAD = 'PHONE_CALL_LEAD', IMPORTED_LEAD = 'IMPORTED_LEAD', SUBMIT_LEAD_FORM = 'SUBMIT_LEAD_FORM', BOOK_APPOINTMENT = 'BOOK_APPOINTMENT', REQUEST_QUOTE = 'REQUEST_QUOTE', GET_DIRECTIONS = 'GET_DIRECTIONS', OUTBOUND_CLICK = 'OUTBOUND_CLICK', CONTACT = 'CONTACT', ENGAGEMENT = 'ENGAGEMENT', STORE_VISIT = 'STORE_VISIT', STORE_SALE = 'STORE_SALE', QUALIFIED_LEAD = 'QUALIFIED_LEAD', CONVERTED_LEAD = 'CONVERTED_LEAD' }

	export enum GoogleAdsSearchads360V0Common__SegmentsProductChannel { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', ONLINE = 'ONLINE', LOCAL = 'LOCAL' }

	export enum GoogleAdsSearchads360V0Common__SegmentsProductChannelExclusivity { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', SINGLE_CHANNEL = 'SINGLE_CHANNEL', MULTI_CHANNEL = 'MULTI_CHANNEL' }

	export enum GoogleAdsSearchads360V0Common__SegmentsProductCondition { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', OLD = 'OLD', NEW = 'NEW', REFURBISHED = 'REFURBISHED', USED = 'USED' }


	/** An automated bid strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set. */
	export interface GoogleAdsSearchads360V0Common__TargetCpa {

		/** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. */
		cpcBidCeilingMicros?: string | null;

		/** Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. */
		cpcBidFloorMicros?: string | null;

		/** Average CPA target. This target should be greater than or equal to minimum billable unit based on the currency for the account. */
		targetCpaMicros?: string | null;
	}

	/** An automated bid strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set. */
	export interface GoogleAdsSearchads360V0Common__TargetCpaFormProperties {

		/** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. */
		cpcBidCeilingMicros: FormControl<string | null | undefined>,

		/** Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. */
		cpcBidFloorMicros: FormControl<string | null | undefined>,

		/** Average CPA target. This target should be greater than or equal to minimum billable unit based on the currency for the account. */
		targetCpaMicros: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__TargetCpaFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__TargetCpaFormProperties>({
			cpcBidCeilingMicros: new FormControl<string | null | undefined>(undefined),
			cpcBidFloorMicros: new FormControl<string | null | undefined>(undefined),
			targetCpaMicros: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Target CPM (cost per thousand impressions) is an automated bidding strategy that sets bids to optimize performance given the target CPM you set. */
	export interface GoogleAdsSearchads360V0Common__TargetCpm {
	}

	/** Target CPM (cost per thousand impressions) is an automated bidding strategy that sets bids to optimize performance given the target CPM you set. */
	export interface GoogleAdsSearchads360V0Common__TargetCpmFormProperties {
	}
	export function CreateGoogleAdsSearchads360V0Common__TargetCpmFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__TargetCpmFormProperties>({
		});

	}


	/** An automated bidding strategy that sets bids so that a certain percentage of search ads are shown at the top of the first page (or other targeted location). */
	export interface GoogleAdsSearchads360V0Common__TargetImpressionShare {

		/** The highest CPC bid the automated bidding system is permitted to specify. This is a required field entered by the advertiser that sets the ceiling and specified in local micros. */
		cpcBidCeilingMicros?: string | null;

		/** The targeted location on the search results page. */
		location?: GoogleAdsSearchads360V0Common__TargetImpressionShareLocation | null;

		/** The chosen fraction of ads to be shown in the targeted location in micros. For example, 1% equals 10,000. */
		locationFractionMicros?: string | null;
	}

	/** An automated bidding strategy that sets bids so that a certain percentage of search ads are shown at the top of the first page (or other targeted location). */
	export interface GoogleAdsSearchads360V0Common__TargetImpressionShareFormProperties {

		/** The highest CPC bid the automated bidding system is permitted to specify. This is a required field entered by the advertiser that sets the ceiling and specified in local micros. */
		cpcBidCeilingMicros: FormControl<string | null | undefined>,

		/** The targeted location on the search results page. */
		location: FormControl<GoogleAdsSearchads360V0Common__TargetImpressionShareLocation | null | undefined>,

		/** The chosen fraction of ads to be shown in the targeted location in micros. For example, 1% equals 10,000. */
		locationFractionMicros: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__TargetImpressionShareFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__TargetImpressionShareFormProperties>({
			cpcBidCeilingMicros: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<GoogleAdsSearchads360V0Common__TargetImpressionShareLocation | null | undefined>(undefined),
			locationFractionMicros: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__TargetImpressionShareLocation { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', ANYWHERE_ON_PAGE = 'ANYWHERE_ON_PAGE', TOP_OF_PAGE = 'TOP_OF_PAGE', ABSOLUTE_TOP_OF_PAGE = 'ABSOLUTE_TOP_OF_PAGE' }


	/** An automated bidding strategy that sets bids based on the target fraction of auctions where the advertiser should outrank a specific competitor. This strategy is deprecated. */
	export interface GoogleAdsSearchads360V0Common__TargetOutrankShare {

		/** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. */
		cpcBidCeilingMicros?: string | null;
	}

	/** An automated bidding strategy that sets bids based on the target fraction of auctions where the advertiser should outrank a specific competitor. This strategy is deprecated. */
	export interface GoogleAdsSearchads360V0Common__TargetOutrankShareFormProperties {

		/** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. */
		cpcBidCeilingMicros: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__TargetOutrankShareFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__TargetOutrankShareFormProperties>({
			cpcBidCeilingMicros: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of per-targeting-dimension targeting settings. */
	export interface GoogleAdsSearchads360V0Common__TargetRestriction {

		/** Indicates whether to restrict your ads to show only for the criteria you have selected for this targeting_dimension, or to target all values for this targeting_dimension and show ads based on your targeting in other TargetingDimensions. A value of `true` means that these criteria will only apply bid modifiers, and not affect targeting. A value of `false` means that these criteria will restrict targeting as well as applying bid modifiers. */
		bidOnly?: boolean | null;

		/** The targeting dimension that these settings apply to. */
		targetingDimension?: GoogleAdsSearchads360V0Common__TargetRestrictionTargetingDimension | null;
	}

	/** The list of per-targeting-dimension targeting settings. */
	export interface GoogleAdsSearchads360V0Common__TargetRestrictionFormProperties {

		/** Indicates whether to restrict your ads to show only for the criteria you have selected for this targeting_dimension, or to target all values for this targeting_dimension and show ads based on your targeting in other TargetingDimensions. A value of `true` means that these criteria will only apply bid modifiers, and not affect targeting. A value of `false` means that these criteria will restrict targeting as well as applying bid modifiers. */
		bidOnly: FormControl<boolean | null | undefined>,

		/** The targeting dimension that these settings apply to. */
		targetingDimension: FormControl<GoogleAdsSearchads360V0Common__TargetRestrictionTargetingDimension | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__TargetRestrictionFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__TargetRestrictionFormProperties>({
			bidOnly: new FormControl<boolean | null | undefined>(undefined),
			targetingDimension: new FormControl<GoogleAdsSearchads360V0Common__TargetRestrictionTargetingDimension | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__TargetRestrictionTargetingDimension { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', KEYWORD = 'KEYWORD', AUDIENCE = 'AUDIENCE', TOPIC = 'TOPIC', GENDER = 'GENDER', AGE_RANGE = 'AGE_RANGE', PLACEMENT = 'PLACEMENT', PARENTAL_STATUS = 'PARENTAL_STATUS', INCOME_RANGE = 'INCOME_RANGE' }


	/** An automated bidding strategy that helps you maximize revenue while averaging a specific target return on ad spend (ROAS). */
	export interface GoogleAdsSearchads360V0Common__TargetRoas {

		/** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. */
		cpcBidCeilingMicros?: string | null;

		/** Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. */
		cpcBidFloorMicros?: string | null;

		/**
		 * Required. The chosen revenue (based on conversion data) per unit of spend. Value must be between 0.01 and 1000.0, inclusive.
		 * Type: double
		 */
		targetRoas?: number | null;
	}

	/** An automated bidding strategy that helps you maximize revenue while averaging a specific target return on ad spend (ROAS). */
	export interface GoogleAdsSearchads360V0Common__TargetRoasFormProperties {

		/** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. */
		cpcBidCeilingMicros: FormControl<string | null | undefined>,

		/** Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. */
		cpcBidFloorMicros: FormControl<string | null | undefined>,

		/**
		 * Required. The chosen revenue (based on conversion data) per unit of spend. Value must be between 0.01 and 1000.0, inclusive.
		 * Type: double
		 */
		targetRoas: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__TargetRoasFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__TargetRoasFormProperties>({
			cpcBidCeilingMicros: new FormControl<string | null | undefined>(undefined),
			cpcBidFloorMicros: new FormControl<string | null | undefined>(undefined),
			targetRoas: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An automated bid strategy that sets your bids to help get as many clicks as possible within your budget. */
	export interface GoogleAdsSearchads360V0Common__TargetSpend {

		/** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. */
		cpcBidCeilingMicros?: string | null;

		/** The spend target under which to maximize clicks. A TargetSpend bidder will attempt to spend the smaller of this value or the natural throttling spend amount. If not specified, the budget is used as the spend target. This field is deprecated and should no longer be used. See https://ads-developers.googleblog.com/2020/05/reminder-about-sunset-creation-of.html for details. */
		targetSpendMicros?: string | null;
	}

	/** An automated bid strategy that sets your bids to help get as many clicks as possible within your budget. */
	export interface GoogleAdsSearchads360V0Common__TargetSpendFormProperties {

		/** Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. */
		cpcBidCeilingMicros: FormControl<string | null | undefined>,

		/** The spend target under which to maximize clicks. A TargetSpend bidder will attempt to spend the smaller of this value or the natural throttling spend amount. If not specified, the budget is used as the spend target. This field is deprecated and should no longer be used. See https://ads-developers.googleblog.com/2020/05/reminder-about-sunset-creation-of.html for details. */
		targetSpendMicros: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__TargetSpendFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__TargetSpendFormProperties>({
			cpcBidCeilingMicros: new FormControl<string | null | undefined>(undefined),
			targetSpendMicros: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for the targeting-related features, at the campaign and ad group levels. For more details about the targeting setting, visit https://support.google.com/google-ads/answer/7365594 */
	export interface GoogleAdsSearchads360V0Common__TargetingSetting {

		/** The per-targeting-dimension setting to restrict the reach of your campaign or ad group. */
		targetRestrictions?: Array<GoogleAdsSearchads360V0Common__TargetRestriction>;
	}

	/** Settings for the targeting-related features, at the campaign and ad group levels. For more details about the targeting setting, visit https://support.google.com/google-ads/answer/7365594 */
	export interface GoogleAdsSearchads360V0Common__TargetingSettingFormProperties {
	}
	export function CreateGoogleAdsSearchads360V0Common__TargetingSettingFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__TargetingSettingFormProperties>({
		});

	}


	/** A Text asset. */
	export interface GoogleAdsSearchads360V0Common__TextAsset {

		/** Text content of the text asset. */
		text?: string | null;
	}

	/** A Text asset. */
	export interface GoogleAdsSearchads360V0Common__TextAssetFormProperties {

		/** Text content of the text asset. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__TextAssetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__TextAssetFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type of label displaying text on a colored background. */
	export interface GoogleAdsSearchads360V0Common__TextLabel {

		/** Background color of the label in RGB format. This string must match the regular expression '^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'. Note: The background color may not be visible for manager accounts. */
		backgroundColor?: string | null;

		/** A short description of the label. The length must be no more than 200 characters. */
		description?: string | null;
	}

	/** A type of label displaying text on a colored background. */
	export interface GoogleAdsSearchads360V0Common__TextLabelFormProperties {

		/** Background color of the label in RGB format. This string must match the regular expression '^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'. Note: The background color may not be visible for manager accounts. */
		backgroundColor: FormControl<string | null | undefined>,

		/** A short description of the label. The length must be no more than 200 characters. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__TextLabelFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__TextLabelFormProperties>({
			backgroundColor: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A unified call asset. */
	export interface GoogleAdsSearchads360V0Common__UnifiedCallAsset {

		/** List of non-overlapping schedules specifying all time intervals for which the asset may serve. There can be a maximum of 6 schedules per day, 42 in total. */
		adScheduleTargets?: Array<GoogleAdsSearchads360V0Common__AdScheduleInfo>;

		/** The conversion action to attribute a call conversion to. If not set, the default conversion action is used. This field only has effect if call_conversion_reporting_state is set to USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION. */
		callConversionAction?: string | null;

		/** Output only. Indicates whether this CallAsset should use its own call conversion setting, follow the account level setting, or disable call conversion. */
		callConversionReportingState?: GoogleAdsSearchads360V0Common__UnifiedCallAssetCallConversionReportingState | null;

		/** Whether the call only shows the phone number without a link to the website. Applies to Microsoft Ads. */
		callOnly?: boolean | null;

		/** Whether the call should be enabled on call tracking. Applies to Microsoft Ads. */
		callTrackingEnabled?: boolean | null;

		/** Two-letter country code of the phone number. Examples: 'US', 'us'. */
		countryCode?: string | null;

		/** Last date of when this asset is effective and still serving, in yyyy-MM-dd format. */
		endDate?: string | null;

		/** The advertiser's raw phone number. Examples: '1234567890', '(123)456-7890' */
		phoneNumber?: string | null;

		/** Start date of when this asset is effective and can begin serving, in yyyy-MM-dd format. */
		startDate?: string | null;

		/** Whether to show the call extension in search user's time zone. Applies to Microsoft Ads. */
		useSearcherTimeZone?: boolean | null;
	}

	/** A unified call asset. */
	export interface GoogleAdsSearchads360V0Common__UnifiedCallAssetFormProperties {

		/** The conversion action to attribute a call conversion to. If not set, the default conversion action is used. This field only has effect if call_conversion_reporting_state is set to USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION. */
		callConversionAction: FormControl<string | null | undefined>,

		/** Output only. Indicates whether this CallAsset should use its own call conversion setting, follow the account level setting, or disable call conversion. */
		callConversionReportingState: FormControl<GoogleAdsSearchads360V0Common__UnifiedCallAssetCallConversionReportingState | null | undefined>,

		/** Whether the call only shows the phone number without a link to the website. Applies to Microsoft Ads. */
		callOnly: FormControl<boolean | null | undefined>,

		/** Whether the call should be enabled on call tracking. Applies to Microsoft Ads. */
		callTrackingEnabled: FormControl<boolean | null | undefined>,

		/** Two-letter country code of the phone number. Examples: 'US', 'us'. */
		countryCode: FormControl<string | null | undefined>,

		/** Last date of when this asset is effective and still serving, in yyyy-MM-dd format. */
		endDate: FormControl<string | null | undefined>,

		/** The advertiser's raw phone number. Examples: '1234567890', '(123)456-7890' */
		phoneNumber: FormControl<string | null | undefined>,

		/** Start date of when this asset is effective and can begin serving, in yyyy-MM-dd format. */
		startDate: FormControl<string | null | undefined>,

		/** Whether to show the call extension in search user's time zone. Applies to Microsoft Ads. */
		useSearcherTimeZone: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__UnifiedCallAssetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__UnifiedCallAssetFormProperties>({
			callConversionAction: new FormControl<string | null | undefined>(undefined),
			callConversionReportingState: new FormControl<GoogleAdsSearchads360V0Common__UnifiedCallAssetCallConversionReportingState | null | undefined>(undefined),
			callOnly: new FormControl<boolean | null | undefined>(undefined),
			callTrackingEnabled: new FormControl<boolean | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			useSearcherTimeZone: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__UnifiedCallAssetCallConversionReportingState { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', DISABLED = 'DISABLED', USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION = 'USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION', USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION = 'USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION' }


	/** A unified callout asset. */
	export interface GoogleAdsSearchads360V0Common__UnifiedCalloutAsset {

		/** List of non-overlapping schedules specifying all time intervals for which the asset may serve. There can be a maximum of 6 schedules per day, 42 in total. */
		adScheduleTargets?: Array<GoogleAdsSearchads360V0Common__AdScheduleInfo>;

		/** The callout text. The length of this string should be between 1 and 25, inclusive. */
		calloutText?: string | null;

		/** Last date of when this asset is effective and still serving, in yyyy-MM-dd format. */
		endDate?: string | null;

		/** Start date of when this asset is effective and can begin serving, in yyyy-MM-dd format. */
		startDate?: string | null;

		/** Whether to show the asset in search user's time zone. Applies to Microsoft Ads. */
		useSearcherTimeZone?: boolean | null;
	}

	/** A unified callout asset. */
	export interface GoogleAdsSearchads360V0Common__UnifiedCalloutAssetFormProperties {

		/** The callout text. The length of this string should be between 1 and 25, inclusive. */
		calloutText: FormControl<string | null | undefined>,

		/** Last date of when this asset is effective and still serving, in yyyy-MM-dd format. */
		endDate: FormControl<string | null | undefined>,

		/** Start date of when this asset is effective and can begin serving, in yyyy-MM-dd format. */
		startDate: FormControl<string | null | undefined>,

		/** Whether to show the asset in search user's time zone. Applies to Microsoft Ads. */
		useSearcherTimeZone: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__UnifiedCalloutAssetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__UnifiedCalloutAssetFormProperties>({
			calloutText: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			useSearcherTimeZone: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A unified location asset. */
	export interface GoogleAdsSearchads360V0Common__UnifiedLocationAsset {

		/** The list of business locations for the customer. This will only be returned if the Location Asset is syncing from the Business Profile account. It is possible to have multiple Business Profile listings under the same account that point to the same Place ID. */
		businessProfileLocations?: Array<GoogleAdsSearchads360V0Common__BusinessProfileLocation>;

		/** The type of location ownership. If the type is BUSINESS_OWNER, it will be served as a location extension. If the type is AFFILIATE, it will be served as an affiliate location. */
		locationOwnershipType?: GoogleAdsSearchads360V0Common__UnifiedLocationAssetLocationOwnershipType | null;

		/** Place IDs uniquely identify a place in the Google Places database and on Google Maps. This field is unique for a given customer ID and asset type. See https://developers.google.com/places/web-service/place-id to learn more about Place ID. */
		placeId?: string | null;
	}

	/** A unified location asset. */
	export interface GoogleAdsSearchads360V0Common__UnifiedLocationAssetFormProperties {

		/** The type of location ownership. If the type is BUSINESS_OWNER, it will be served as a location extension. If the type is AFFILIATE, it will be served as an affiliate location. */
		locationOwnershipType: FormControl<GoogleAdsSearchads360V0Common__UnifiedLocationAssetLocationOwnershipType | null | undefined>,

		/** Place IDs uniquely identify a place in the Google Places database and on Google Maps. This field is unique for a given customer ID and asset type. See https://developers.google.com/places/web-service/place-id to learn more about Place ID. */
		placeId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__UnifiedLocationAssetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__UnifiedLocationAssetFormProperties>({
			locationOwnershipType: new FormControl<GoogleAdsSearchads360V0Common__UnifiedLocationAssetLocationOwnershipType | null | undefined>(undefined),
			placeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__UnifiedLocationAssetLocationOwnershipType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', BUSINESS_OWNER = 'BUSINESS_OWNER', AFFILIATE = 'AFFILIATE' }


	/** A Unified Page Feed asset. */
	export interface GoogleAdsSearchads360V0Common__UnifiedPageFeedAsset {

		/** Labels used to group the page urls. */
		labels?: Array<string>;

		/** The webpage that advertisers want to target. */
		pageUrl?: string | null;
	}

	/** A Unified Page Feed asset. */
	export interface GoogleAdsSearchads360V0Common__UnifiedPageFeedAssetFormProperties {

		/** The webpage that advertisers want to target. */
		pageUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__UnifiedPageFeedAssetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__UnifiedPageFeedAssetFormProperties>({
			pageUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A unified sitelink asset. */
	export interface GoogleAdsSearchads360V0Common__UnifiedSitelinkAsset {

		/** List of non-overlapping schedules specifying all time intervals for which the asset may serve. There can be a maximum of 6 schedules per day, 42 in total. */
		adScheduleTargets?: Array<GoogleAdsSearchads360V0Common__AdScheduleInfo>;

		/** First line of the description for the sitelink. If set, the length should be between 1 and 35, inclusive, and description2 must also be set. */
		description1?: string | null;

		/** Second line of the description for the sitelink. If set, the length should be between 1 and 35, inclusive, and description1 must also be set. */
		description2?: string | null;

		/** Last date of when this asset is effective and still serving, in yyyy-MM-dd format. */
		endDate?: string | null;

		/** URL display text for the sitelink. The length of this string should be between 1 and 25, inclusive. */
		linkText?: string | null;

		/** Whether the preference is for the sitelink asset to be displayed on mobile devices. Applies to Microsoft Ads. */
		mobilePreferred?: boolean | null;

		/** Start date of when this asset is effective and can begin serving, in yyyy-MM-dd format. */
		startDate?: string | null;

		/** ID used for tracking clicks for the sitelink asset. This is a Yahoo! Japan only field. */
		trackingId?: string | null;

		/** Whether to show the sitelink asset in search user's time zone. Applies to Microsoft Ads. */
		useSearcherTimeZone?: boolean | null;
	}

	/** A unified sitelink asset. */
	export interface GoogleAdsSearchads360V0Common__UnifiedSitelinkAssetFormProperties {

		/** First line of the description for the sitelink. If set, the length should be between 1 and 35, inclusive, and description2 must also be set. */
		description1: FormControl<string | null | undefined>,

		/** Second line of the description for the sitelink. If set, the length should be between 1 and 35, inclusive, and description1 must also be set. */
		description2: FormControl<string | null | undefined>,

		/** Last date of when this asset is effective and still serving, in yyyy-MM-dd format. */
		endDate: FormControl<string | null | undefined>,

		/** URL display text for the sitelink. The length of this string should be between 1 and 25, inclusive. */
		linkText: FormControl<string | null | undefined>,

		/** Whether the preference is for the sitelink asset to be displayed on mobile devices. Applies to Microsoft Ads. */
		mobilePreferred: FormControl<boolean | null | undefined>,

		/** Start date of when this asset is effective and can begin serving, in yyyy-MM-dd format. */
		startDate: FormControl<string | null | undefined>,

		/** ID used for tracking clicks for the sitelink asset. This is a Yahoo! Japan only field. */
		trackingId: FormControl<string | null | undefined>,

		/** Whether to show the sitelink asset in search user's time zone. Applies to Microsoft Ads. */
		useSearcherTimeZone: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__UnifiedSitelinkAssetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__UnifiedSitelinkAssetFormProperties>({
			description1: new FormControl<string | null | undefined>(undefined),
			description2: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			linkText: new FormControl<string | null | undefined>(undefined),
			mobilePreferred: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
			useSearcherTimeZone: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A User List criterion. Represents a user list that is defined by the advertiser to be targeted. */
	export interface GoogleAdsSearchads360V0Common__UserListInfo {

		/** The User List resource name. */
		userList?: string | null;
	}

	/** A User List criterion. Represents a user list that is defined by the advertiser to be targeted. */
	export interface GoogleAdsSearchads360V0Common__UserListInfoFormProperties {

		/** The User List resource name. */
		userList: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__UserListInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__UserListInfoFormProperties>({
			userList: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic data container. */
	export interface GoogleAdsSearchads360V0Common__Value {

		/** A boolean. */
		booleanValue?: boolean | null;

		/**
		 * A double.
		 * Type: double
		 */
		doubleValue?: number | null;

		/**
		 * A float.
		 * Type: float
		 */
		floatValue?: number | null;

		/** An int64. */
		int64Value?: string | null;

		/** A string. */
		stringValue?: string | null;
	}

	/** A generic data container. */
	export interface GoogleAdsSearchads360V0Common__ValueFormProperties {

		/** A boolean. */
		booleanValue: FormControl<boolean | null | undefined>,

		/**
		 * A double.
		 * Type: double
		 */
		doubleValue: FormControl<number | null | undefined>,

		/**
		 * A float.
		 * Type: float
		 */
		floatValue: FormControl<number | null | undefined>,

		/** An int64. */
		int64Value: FormControl<string | null | undefined>,

		/** A string. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__ValueFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__ValueFormProperties>({
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			floatValue: new FormControl<number | null | undefined>(undefined),
			int64Value: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Logical expression for targeting webpages of an advertiser's website. */
	export interface GoogleAdsSearchads360V0Common__WebpageConditionInfo {

		/** Argument of webpage targeting condition. */
		argument?: string | null;

		/** Operand of webpage targeting condition. */
		operand?: GoogleAdsSearchads360V0Common__WebpageConditionInfoOperand | null;

		/** Operator of webpage targeting condition. */
		operator?: GoogleAdsSearchads360V0Common__WebpageConditionInfoOperator | null;
	}

	/** Logical expression for targeting webpages of an advertiser's website. */
	export interface GoogleAdsSearchads360V0Common__WebpageConditionInfoFormProperties {

		/** Argument of webpage targeting condition. */
		argument: FormControl<string | null | undefined>,

		/** Operand of webpage targeting condition. */
		operand: FormControl<GoogleAdsSearchads360V0Common__WebpageConditionInfoOperand | null | undefined>,

		/** Operator of webpage targeting condition. */
		operator: FormControl<GoogleAdsSearchads360V0Common__WebpageConditionInfoOperator | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__WebpageConditionInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__WebpageConditionInfoFormProperties>({
			argument: new FormControl<string | null | undefined>(undefined),
			operand: new FormControl<GoogleAdsSearchads360V0Common__WebpageConditionInfoOperand | null | undefined>(undefined),
			operator: new FormControl<GoogleAdsSearchads360V0Common__WebpageConditionInfoOperator | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Common__WebpageConditionInfoOperand { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', URL = 'URL', CATEGORY = 'CATEGORY', PAGE_TITLE = 'PAGE_TITLE', PAGE_CONTENT = 'PAGE_CONTENT', CUSTOM_LABEL = 'CUSTOM_LABEL' }

	export enum GoogleAdsSearchads360V0Common__WebpageConditionInfoOperator { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', EQUALS = 'EQUALS', CONTAINS = 'CONTAINS' }


	/** Represents a criterion for targeting webpages of an advertiser's website. */
	export interface GoogleAdsSearchads360V0Common__WebpageInfo {

		/** Conditions, or logical expressions, for webpage targeting. The list of webpage targeting conditions are and-ed together when evaluated for targeting. An empty list of conditions indicates all pages of the campaign's website are targeted. This field is required for CREATE operations and is prohibited on UPDATE operations. */
		conditions?: Array<GoogleAdsSearchads360V0Common__WebpageConditionInfo>;

		/**
		 * Website criteria coverage percentage. This is the computed percentage of website coverage based on the website target, negative website target and negative keywords in the ad group and campaign. For instance, when coverage returns as 1, it indicates it has 100% coverage. This field is read-only.
		 * Type: double
		 */
		coveragePercentage?: number | null;

		/** The name of the criterion that is defined by this parameter. The name value will be used for identifying, sorting and filtering criteria with this type of parameters. This field is required for CREATE operations and is prohibited on UPDATE operations. */
		criterionName?: string | null;
	}

	/** Represents a criterion for targeting webpages of an advertiser's website. */
	export interface GoogleAdsSearchads360V0Common__WebpageInfoFormProperties {

		/**
		 * Website criteria coverage percentage. This is the computed percentage of website coverage based on the website target, negative website target and negative keywords in the ad group and campaign. For instance, when coverage returns as 1, it indicates it has 100% coverage. This field is read-only.
		 * Type: double
		 */
		coveragePercentage: FormControl<number | null | undefined>,

		/** The name of the criterion that is defined by this parameter. The name value will be used for identifying, sorting and filtering criteria with this type of parameters. This field is required for CREATE operations and is prohibited on UPDATE operations. */
		criterionName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__WebpageInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__WebpageInfoFormProperties>({
			coveragePercentage: new FormControl<number | null | undefined>(undefined),
			criterionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A YouTube asset. */
	export interface GoogleAdsSearchads360V0Common__YoutubeVideoAsset {

		/** YouTube video id. This is the 11 character string value used in the YouTube video URL. */
		youtubeVideoId?: string | null;

		/** YouTube video title. */
		youtubeVideoTitle?: string | null;
	}

	/** A YouTube asset. */
	export interface GoogleAdsSearchads360V0Common__YoutubeVideoAssetFormProperties {

		/** YouTube video id. This is the 11 character string value used in the YouTube video URL. */
		youtubeVideoId: FormControl<string | null | undefined>,

		/** YouTube video title. */
		youtubeVideoTitle: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Common__YoutubeVideoAssetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Common__YoutubeVideoAssetFormProperties>({
			youtubeVideoId: new FormControl<string | null | undefined>(undefined),
			youtubeVideoTitle: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A part of a field path. */
	export interface GoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElement {

		/** The name of a field or a oneof */
		fieldName?: string | null;

		/**
		 * If field_name is a repeated field, this is the element that failed
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index?: number | null;
	}

	/** A part of a field path. */
	export interface GoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElementFormProperties {

		/** The name of a field or a oneof */
		fieldName: FormControl<string | null | undefined>,

		/**
		 * If field_name is a repeated field, this is the element that failed
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElementFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElementFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The error reason represented by type and enum. */
	export interface GoogleAdsSearchads360V0Errors__ErrorCode {

		/** Indicates failure to properly authenticate user. */
		authenticationError?: GoogleAdsSearchads360V0Errors__ErrorCodeAuthenticationError | null;

		/** An error encountered when trying to authorize a user. */
		authorizationError?: GoogleAdsSearchads360V0Errors__ErrorCodeAuthorizationError | null;

		/** The reasons for the custom column error */
		customColumnError?: GoogleAdsSearchads360V0Errors__ErrorCodeCustomColumnError | null;

		/** The reasons for the date error */
		dateError?: GoogleAdsSearchads360V0Errors__ErrorCodeDateError | null;

		/** The reasons for the date range error */
		dateRangeError?: GoogleAdsSearchads360V0Errors__ErrorCodeDateRangeError | null;

		/** The reasons for the distinct error */
		distinctError?: GoogleAdsSearchads360V0Errors__ErrorCodeDistinctError | null;

		/** The reasons for the header error. */
		headerError?: GoogleAdsSearchads360V0Errors__ErrorCodeHeaderError | null;

		/** An unexpected server-side error. */
		internalError?: GoogleAdsSearchads360V0Errors__ErrorCodeInternalError | null;

		/** The reasons for invalid parameter errors. */
		invalidParameterError?: GoogleAdsSearchads360V0Errors__ErrorCodeInvalidParameterError | null;

		/** An error with the query */
		queryError?: GoogleAdsSearchads360V0Errors__ErrorCodeQueryError | null;

		/** An error with the amount of quota remaining. */
		quotaError?: GoogleAdsSearchads360V0Errors__ErrorCodeQuotaError | null;

		/** An error caused by the request */
		requestError?: GoogleAdsSearchads360V0Errors__ErrorCodeRequestError | null;

		/** The reasons for the size limit error */
		sizeLimitError?: GoogleAdsSearchads360V0Errors__ErrorCodeSizeLimitError | null;
	}

	/** The error reason represented by type and enum. */
	export interface GoogleAdsSearchads360V0Errors__ErrorCodeFormProperties {

		/** Indicates failure to properly authenticate user. */
		authenticationError: FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeAuthenticationError | null | undefined>,

		/** An error encountered when trying to authorize a user. */
		authorizationError: FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeAuthorizationError | null | undefined>,

		/** The reasons for the custom column error */
		customColumnError: FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeCustomColumnError | null | undefined>,

		/** The reasons for the date error */
		dateError: FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeDateError | null | undefined>,

		/** The reasons for the date range error */
		dateRangeError: FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeDateRangeError | null | undefined>,

		/** The reasons for the distinct error */
		distinctError: FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeDistinctError | null | undefined>,

		/** The reasons for the header error. */
		headerError: FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeHeaderError | null | undefined>,

		/** An unexpected server-side error. */
		internalError: FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeInternalError | null | undefined>,

		/** The reasons for invalid parameter errors. */
		invalidParameterError: FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeInvalidParameterError | null | undefined>,

		/** An error with the query */
		queryError: FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeQueryError | null | undefined>,

		/** An error with the amount of quota remaining. */
		quotaError: FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeQuotaError | null | undefined>,

		/** An error caused by the request */
		requestError: FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeRequestError | null | undefined>,

		/** The reasons for the size limit error */
		sizeLimitError: FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeSizeLimitError | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Errors__ErrorCodeFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Errors__ErrorCodeFormProperties>({
			authenticationError: new FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeAuthenticationError | null | undefined>(undefined),
			authorizationError: new FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeAuthorizationError | null | undefined>(undefined),
			customColumnError: new FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeCustomColumnError | null | undefined>(undefined),
			dateError: new FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeDateError | null | undefined>(undefined),
			dateRangeError: new FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeDateRangeError | null | undefined>(undefined),
			distinctError: new FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeDistinctError | null | undefined>(undefined),
			headerError: new FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeHeaderError | null | undefined>(undefined),
			internalError: new FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeInternalError | null | undefined>(undefined),
			invalidParameterError: new FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeInvalidParameterError | null | undefined>(undefined),
			queryError: new FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeQueryError | null | undefined>(undefined),
			quotaError: new FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeQuotaError | null | undefined>(undefined),
			requestError: new FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeRequestError | null | undefined>(undefined),
			sizeLimitError: new FormControl<GoogleAdsSearchads360V0Errors__ErrorCodeSizeLimitError | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Errors__ErrorCodeAuthenticationError { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR', CLIENT_CUSTOMER_ID_INVALID = 'CLIENT_CUSTOMER_ID_INVALID', CUSTOMER_NOT_FOUND = 'CUSTOMER_NOT_FOUND', GOOGLE_ACCOUNT_DELETED = 'GOOGLE_ACCOUNT_DELETED', GOOGLE_ACCOUNT_COOKIE_INVALID = 'GOOGLE_ACCOUNT_COOKIE_INVALID', GOOGLE_ACCOUNT_AUTHENTICATION_FAILED = 'GOOGLE_ACCOUNT_AUTHENTICATION_FAILED', GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH = 'GOOGLE_ACCOUNT_USER_AND_ADS_USER_MISMATCH', LOGIN_COOKIE_REQUIRED = 'LOGIN_COOKIE_REQUIRED', NOT_ADS_USER = 'NOT_ADS_USER', OAUTH_TOKEN_INVALID = 'OAUTH_TOKEN_INVALID', OAUTH_TOKEN_EXPIRED = 'OAUTH_TOKEN_EXPIRED', OAUTH_TOKEN_DISABLED = 'OAUTH_TOKEN_DISABLED', OAUTH_TOKEN_REVOKED = 'OAUTH_TOKEN_REVOKED', OAUTH_TOKEN_HEADER_INVALID = 'OAUTH_TOKEN_HEADER_INVALID', LOGIN_COOKIE_INVALID = 'LOGIN_COOKIE_INVALID', USER_ID_INVALID = 'USER_ID_INVALID', TWO_STEP_VERIFICATION_NOT_ENROLLED = 'TWO_STEP_VERIFICATION_NOT_ENROLLED', ADVANCED_PROTECTION_NOT_ENROLLED = 'ADVANCED_PROTECTION_NOT_ENROLLED' }

	export enum GoogleAdsSearchads360V0Errors__ErrorCodeAuthorizationError { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', USER_PERMISSION_DENIED = 'USER_PERMISSION_DENIED', PROJECT_DISABLED = 'PROJECT_DISABLED', AUTHORIZATION_ERROR = 'AUTHORIZATION_ERROR', ACTION_NOT_PERMITTED = 'ACTION_NOT_PERMITTED', INCOMPLETE_SIGNUP = 'INCOMPLETE_SIGNUP', CUSTOMER_NOT_ENABLED = 'CUSTOMER_NOT_ENABLED', MISSING_TOS = 'MISSING_TOS', INVALID_LOGIN_CUSTOMER_ID_SERVING_CUSTOMER_ID_COMBINATION = 'INVALID_LOGIN_CUSTOMER_ID_SERVING_CUSTOMER_ID_COMBINATION', SERVICE_ACCESS_DENIED = 'SERVICE_ACCESS_DENIED', ACCESS_DENIED_FOR_ACCOUNT_TYPE = 'ACCESS_DENIED_FOR_ACCOUNT_TYPE', METRIC_ACCESS_DENIED = 'METRIC_ACCESS_DENIED' }

	export enum GoogleAdsSearchads360V0Errors__ErrorCodeCustomColumnError { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', CUSTOM_COLUMN_NOT_FOUND = 'CUSTOM_COLUMN_NOT_FOUND', CUSTOM_COLUMN_NOT_AVAILABLE = 'CUSTOM_COLUMN_NOT_AVAILABLE' }

	export enum GoogleAdsSearchads360V0Errors__ErrorCodeDateError { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', INVALID_FIELD_VALUES_IN_DATE = 'INVALID_FIELD_VALUES_IN_DATE', INVALID_FIELD_VALUES_IN_DATE_TIME = 'INVALID_FIELD_VALUES_IN_DATE_TIME', INVALID_STRING_DATE = 'INVALID_STRING_DATE', INVALID_STRING_DATE_TIME_MICROS = 'INVALID_STRING_DATE_TIME_MICROS', INVALID_STRING_DATE_TIME_SECONDS = 'INVALID_STRING_DATE_TIME_SECONDS', INVALID_STRING_DATE_TIME_SECONDS_WITH_OFFSET = 'INVALID_STRING_DATE_TIME_SECONDS_WITH_OFFSET', EARLIER_THAN_MINIMUM_DATE = 'EARLIER_THAN_MINIMUM_DATE', LATER_THAN_MAXIMUM_DATE = 'LATER_THAN_MAXIMUM_DATE', DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE = 'DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE', DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL = 'DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL' }

	export enum GoogleAdsSearchads360V0Errors__ErrorCodeDateRangeError { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', INVALID_DATE = 'INVALID_DATE', START_DATE_AFTER_END_DATE = 'START_DATE_AFTER_END_DATE', CANNOT_SET_DATE_TO_PAST = 'CANNOT_SET_DATE_TO_PAST', AFTER_MAXIMUM_ALLOWABLE_DATE = 'AFTER_MAXIMUM_ALLOWABLE_DATE', CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED = 'CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED' }

	export enum GoogleAdsSearchads360V0Errors__ErrorCodeDistinctError { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', DUPLICATE_ELEMENT = 'DUPLICATE_ELEMENT', DUPLICATE_TYPE = 'DUPLICATE_TYPE' }

	export enum GoogleAdsSearchads360V0Errors__ErrorCodeHeaderError { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', INVALID_USER_SELECTED_CUSTOMER_ID = 'INVALID_USER_SELECTED_CUSTOMER_ID', INVALID_LOGIN_CUSTOMER_ID = 'INVALID_LOGIN_CUSTOMER_ID' }

	export enum GoogleAdsSearchads360V0Errors__ErrorCodeInternalError { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', INTERNAL_ERROR = 'INTERNAL_ERROR', ERROR_CODE_NOT_PUBLISHED = 'ERROR_CODE_NOT_PUBLISHED', TRANSIENT_ERROR = 'TRANSIENT_ERROR', DEADLINE_EXCEEDED = 'DEADLINE_EXCEEDED' }

	export enum GoogleAdsSearchads360V0Errors__ErrorCodeInvalidParameterError { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', INVALID_CURRENCY_CODE = 'INVALID_CURRENCY_CODE' }

	export enum GoogleAdsSearchads360V0Errors__ErrorCodeQueryError { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', QUERY_ERROR = 'QUERY_ERROR', BAD_ENUM_CONSTANT = 'BAD_ENUM_CONSTANT', BAD_ESCAPE_SEQUENCE = 'BAD_ESCAPE_SEQUENCE', BAD_FIELD_NAME = 'BAD_FIELD_NAME', BAD_LIMIT_VALUE = 'BAD_LIMIT_VALUE', BAD_NUMBER = 'BAD_NUMBER', BAD_OPERATOR = 'BAD_OPERATOR', BAD_PARAMETER_NAME = 'BAD_PARAMETER_NAME', BAD_PARAMETER_VALUE = 'BAD_PARAMETER_VALUE', BAD_RESOURCE_TYPE_IN_FROM_CLAUSE = 'BAD_RESOURCE_TYPE_IN_FROM_CLAUSE', BAD_SYMBOL = 'BAD_SYMBOL', BAD_VALUE = 'BAD_VALUE', DATE_RANGE_TOO_WIDE = 'DATE_RANGE_TOO_WIDE', DATE_RANGE_TOO_NARROW = 'DATE_RANGE_TOO_NARROW', EXPECTED_AND = 'EXPECTED_AND', EXPECTED_BY = 'EXPECTED_BY', EXPECTED_DIMENSION_FIELD_IN_SELECT_CLAUSE = 'EXPECTED_DIMENSION_FIELD_IN_SELECT_CLAUSE', EXPECTED_FILTERS_ON_DATE_RANGE = 'EXPECTED_FILTERS_ON_DATE_RANGE', EXPECTED_FROM = 'EXPECTED_FROM', EXPECTED_LIST = 'EXPECTED_LIST', EXPECTED_REFERENCED_FIELD_IN_SELECT_CLAUSE = 'EXPECTED_REFERENCED_FIELD_IN_SELECT_CLAUSE', EXPECTED_SELECT = 'EXPECTED_SELECT', EXPECTED_SINGLE_VALUE = 'EXPECTED_SINGLE_VALUE', EXPECTED_VALUE_WITH_BETWEEN_OPERATOR = 'EXPECTED_VALUE_WITH_BETWEEN_OPERATOR', INVALID_DATE_FORMAT = 'INVALID_DATE_FORMAT', MISALIGNED_DATE_FOR_FILTER = 'MISALIGNED_DATE_FOR_FILTER', INVALID_STRING_VALUE = 'INVALID_STRING_VALUE', INVALID_VALUE_WITH_BETWEEN_OPERATOR = 'INVALID_VALUE_WITH_BETWEEN_OPERATOR', INVALID_VALUE_WITH_DURING_OPERATOR = 'INVALID_VALUE_WITH_DURING_OPERATOR', INVALID_VALUE_WITH_LIKE_OPERATOR = 'INVALID_VALUE_WITH_LIKE_OPERATOR', OPERATOR_FIELD_MISMATCH = 'OPERATOR_FIELD_MISMATCH', PROHIBITED_EMPTY_LIST_IN_CONDITION = 'PROHIBITED_EMPTY_LIST_IN_CONDITION', PROHIBITED_ENUM_CONSTANT = 'PROHIBITED_ENUM_CONSTANT', PROHIBITED_FIELD_COMBINATION_IN_SELECT_CLAUSE = 'PROHIBITED_FIELD_COMBINATION_IN_SELECT_CLAUSE', PROHIBITED_FIELD_IN_ORDER_BY_CLAUSE = 'PROHIBITED_FIELD_IN_ORDER_BY_CLAUSE', PROHIBITED_FIELD_IN_SELECT_CLAUSE = 'PROHIBITED_FIELD_IN_SELECT_CLAUSE', PROHIBITED_FIELD_IN_WHERE_CLAUSE = 'PROHIBITED_FIELD_IN_WHERE_CLAUSE', PROHIBITED_RESOURCE_TYPE_IN_FROM_CLAUSE = 'PROHIBITED_RESOURCE_TYPE_IN_FROM_CLAUSE', PROHIBITED_RESOURCE_TYPE_IN_SELECT_CLAUSE = 'PROHIBITED_RESOURCE_TYPE_IN_SELECT_CLAUSE', PROHIBITED_RESOURCE_TYPE_IN_WHERE_CLAUSE = 'PROHIBITED_RESOURCE_TYPE_IN_WHERE_CLAUSE', PROHIBITED_METRIC_IN_SELECT_OR_WHERE_CLAUSE = 'PROHIBITED_METRIC_IN_SELECT_OR_WHERE_CLAUSE', PROHIBITED_SEGMENT_IN_SELECT_OR_WHERE_CLAUSE = 'PROHIBITED_SEGMENT_IN_SELECT_OR_WHERE_CLAUSE', PROHIBITED_SEGMENT_WITH_METRIC_IN_SELECT_OR_WHERE_CLAUSE = 'PROHIBITED_SEGMENT_WITH_METRIC_IN_SELECT_OR_WHERE_CLAUSE', LIMIT_VALUE_TOO_LOW = 'LIMIT_VALUE_TOO_LOW', PROHIBITED_NEWLINE_IN_STRING = 'PROHIBITED_NEWLINE_IN_STRING', PROHIBITED_VALUE_COMBINATION_IN_LIST = 'PROHIBITED_VALUE_COMBINATION_IN_LIST', PROHIBITED_VALUE_COMBINATION_WITH_BETWEEN_OPERATOR = 'PROHIBITED_VALUE_COMBINATION_WITH_BETWEEN_OPERATOR', STRING_NOT_TERMINATED = 'STRING_NOT_TERMINATED', TOO_MANY_SEGMENTS = 'TOO_MANY_SEGMENTS', UNEXPECTED_END_OF_QUERY = 'UNEXPECTED_END_OF_QUERY', UNEXPECTED_FROM_CLAUSE = 'UNEXPECTED_FROM_CLAUSE', UNRECOGNIZED_FIELD = 'UNRECOGNIZED_FIELD', UNEXPECTED_INPUT = 'UNEXPECTED_INPUT', REQUESTED_METRICS_FOR_MANAGER = 'REQUESTED_METRICS_FOR_MANAGER', FILTER_HAS_TOO_MANY_VALUES = 'FILTER_HAS_TOO_MANY_VALUES' }

	export enum GoogleAdsSearchads360V0Errors__ErrorCodeQuotaError { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', RESOURCE_EXHAUSTED = 'RESOURCE_EXHAUSTED', RESOURCE_TEMPORARILY_EXHAUSTED = 'RESOURCE_TEMPORARILY_EXHAUSTED' }

	export enum GoogleAdsSearchads360V0Errors__ErrorCodeRequestError { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', RESOURCE_NAME_MISSING = 'RESOURCE_NAME_MISSING', RESOURCE_NAME_MALFORMED = 'RESOURCE_NAME_MALFORMED', BAD_RESOURCE_ID = 'BAD_RESOURCE_ID', INVALID_PRODUCT_NAME = 'INVALID_PRODUCT_NAME', INVALID_CUSTOMER_ID = 'INVALID_CUSTOMER_ID', OPERATION_REQUIRED = 'OPERATION_REQUIRED', RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND', INVALID_PAGE_TOKEN = 'INVALID_PAGE_TOKEN', EXPIRED_PAGE_TOKEN = 'EXPIRED_PAGE_TOKEN', INVALID_PAGE_SIZE = 'INVALID_PAGE_SIZE', REQUIRED_FIELD_MISSING = 'REQUIRED_FIELD_MISSING', IMMUTABLE_FIELD = 'IMMUTABLE_FIELD', TOO_MANY_MUTATE_OPERATIONS = 'TOO_MANY_MUTATE_OPERATIONS', CANNOT_BE_EXECUTED_BY_MANAGER_ACCOUNT = 'CANNOT_BE_EXECUTED_BY_MANAGER_ACCOUNT', CANNOT_MODIFY_FOREIGN_FIELD = 'CANNOT_MODIFY_FOREIGN_FIELD', INVALID_ENUM_VALUE = 'INVALID_ENUM_VALUE', LOGIN_CUSTOMER_ID_PARAMETER_MISSING = 'LOGIN_CUSTOMER_ID_PARAMETER_MISSING', LOGIN_OR_LINKED_CUSTOMER_ID_PARAMETER_REQUIRED = 'LOGIN_OR_LINKED_CUSTOMER_ID_PARAMETER_REQUIRED', VALIDATE_ONLY_REQUEST_HAS_PAGE_TOKEN = 'VALIDATE_ONLY_REQUEST_HAS_PAGE_TOKEN', CANNOT_RETURN_SUMMARY_ROW_FOR_REQUEST_WITHOUT_METRICS = 'CANNOT_RETURN_SUMMARY_ROW_FOR_REQUEST_WITHOUT_METRICS', CANNOT_RETURN_SUMMARY_ROW_FOR_VALIDATE_ONLY_REQUESTS = 'CANNOT_RETURN_SUMMARY_ROW_FOR_VALIDATE_ONLY_REQUESTS', INCONSISTENT_RETURN_SUMMARY_ROW_VALUE = 'INCONSISTENT_RETURN_SUMMARY_ROW_VALUE', TOTAL_RESULTS_COUNT_NOT_ORIGINALLY_REQUESTED = 'TOTAL_RESULTS_COUNT_NOT_ORIGINALLY_REQUESTED', RPC_DEADLINE_TOO_SHORT = 'RPC_DEADLINE_TOO_SHORT', PRODUCT_NOT_SUPPORTED = 'PRODUCT_NOT_SUPPORTED' }

	export enum GoogleAdsSearchads360V0Errors__ErrorCodeSizeLimitError { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', REQUEST_SIZE_LIMIT_EXCEEDED = 'REQUEST_SIZE_LIMIT_EXCEEDED', RESPONSE_SIZE_LIMIT_EXCEEDED = 'RESPONSE_SIZE_LIMIT_EXCEEDED' }


	/** Additional error details. */
	export interface GoogleAdsSearchads360V0Errors__ErrorDetails {

		/** Additional quota error details when there is QuotaError. */
		quotaErrorDetails?: GoogleAdsSearchads360V0Errors__QuotaErrorDetails;

		/** The error code that should have been returned, but wasn't. This is used when the error code is not published in the client specified version. */
		unpublishedErrorCode?: string | null;
	}

	/** Additional error details. */
	export interface GoogleAdsSearchads360V0Errors__ErrorDetailsFormProperties {

		/** The error code that should have been returned, but wasn't. This is used when the error code is not published in the client specified version. */
		unpublishedErrorCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Errors__ErrorDetailsFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Errors__ErrorDetailsFormProperties>({
			unpublishedErrorCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional quota error details when there is QuotaError. */
	export interface GoogleAdsSearchads360V0Errors__QuotaErrorDetails {

		/** The high level description of the quota bucket. Examples are "Get requests for standard access" or "Requests per account". */
		rateName?: string | null;

		/** The rate scope of the quota limit. */
		rateScope?: GoogleAdsSearchads360V0Errors__QuotaErrorDetailsRateScope | null;

		/** Backoff period that customers should wait before sending next request. */
		retryDelay?: string | null;
	}

	/** Additional quota error details when there is QuotaError. */
	export interface GoogleAdsSearchads360V0Errors__QuotaErrorDetailsFormProperties {

		/** The high level description of the quota bucket. Examples are "Get requests for standard access" or "Requests per account". */
		rateName: FormControl<string | null | undefined>,

		/** The rate scope of the quota limit. */
		rateScope: FormControl<GoogleAdsSearchads360V0Errors__QuotaErrorDetailsRateScope | null | undefined>,

		/** Backoff period that customers should wait before sending next request. */
		retryDelay: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Errors__QuotaErrorDetailsFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Errors__QuotaErrorDetailsFormProperties>({
			rateName: new FormControl<string | null | undefined>(undefined),
			rateScope: new FormControl<GoogleAdsSearchads360V0Errors__QuotaErrorDetailsRateScope | null | undefined>(undefined),
			retryDelay: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Errors__QuotaErrorDetailsRateScope { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', ACCOUNT = 'ACCOUNT', DEVELOPER = 'DEVELOPER' }


	/** Describes the part of the request proto that caused the error. */
	export interface GoogleAdsSearchads360V0Errors__ErrorLocation {

		/** A field path that indicates which field was invalid in the request. */
		fieldPathElements?: Array<GoogleAdsSearchads360V0Errors_ErrorLocation_FieldPathElement>;
	}

	/** Describes the part of the request proto that caused the error. */
	export interface GoogleAdsSearchads360V0Errors__ErrorLocationFormProperties {
	}
	export function CreateGoogleAdsSearchads360V0Errors__ErrorLocationFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Errors__ErrorLocationFormProperties>({
		});

	}


	/** SearchAds360-specific error. */
	export interface GoogleAdsSearchads360V0Errors__SearchAds360Error {

		/** Additional error details. */
		details?: GoogleAdsSearchads360V0Errors__ErrorDetails;

		/** The error reason represented by type and enum. */
		errorCode?: GoogleAdsSearchads360V0Errors__ErrorCode;

		/** Describes the part of the request proto that caused the error. */
		location?: GoogleAdsSearchads360V0Errors__ErrorLocation;

		/** A human-readable description of the error. */
		message?: string | null;

		/** A generic data container. */
		trigger?: GoogleAdsSearchads360V0Common__Value;
	}

	/** SearchAds360-specific error. */
	export interface GoogleAdsSearchads360V0Errors__SearchAds360ErrorFormProperties {

		/** A human-readable description of the error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Errors__SearchAds360ErrorFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Errors__SearchAds360ErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes how a Search Ads 360 API call failed. It's returned inside google.rpc.Status.details when a call fails. */
	export interface GoogleAdsSearchads360V0Errors__SearchAds360Failure {

		/** The list of errors that occurred. */
		errors?: Array<GoogleAdsSearchads360V0Errors__SearchAds360Error>;

		/** The unique ID of the request that is used for debugging purposes. */
		requestId?: string | null;
	}

	/** Describes how a Search Ads 360 API call failed. It's returned inside google.rpc.Status.details when a call fails. */
	export interface GoogleAdsSearchads360V0Errors__SearchAds360FailureFormProperties {

		/** The unique ID of the request that is used for debugging purposes. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Errors__SearchAds360FailureFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Errors__SearchAds360FailureFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Estimates for criterion bids at various positions. */
	export interface GoogleAdsSearchads360V0Resources_AdGroupCriterion_PositionEstimates {

		/** Output only. The estimate of the CPC bid required for ad to be displayed at the top of the first page of search results. */
		topOfPageCpcMicros?: string | null;
	}

	/** Estimates for criterion bids at various positions. */
	export interface GoogleAdsSearchads360V0Resources_AdGroupCriterion_PositionEstimatesFormProperties {

		/** Output only. The estimate of the CPC bid required for ad to be displayed at the top of the first page of search results. */
		topOfPageCpcMicros: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_AdGroupCriterion_PositionEstimatesFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_AdGroupCriterion_PositionEstimatesFormProperties>({
			topOfPageCpcMicros: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container for ad group criterion quality information. */
	export interface GoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfo {

		/**
		 * Output only. The quality score. This field may not be populated if Google does not have enough information to determine a value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		qualityScore?: number | null;
	}

	/** A container for ad group criterion quality information. */
	export interface GoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfoFormProperties {

		/**
		 * Output only. The quality score. This field may not be populated if Google does not have enough information to determine a value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		qualityScore: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfoFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfoFormProperties>({
			qualityScore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The setting for controlling Dynamic Search Ads (DSA). */
	export interface GoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSetting {

		/** Required. The Internet domain name that this setting represents, for example, "google.com" or "www.google.com". */
		domainName?: string | null;

		/** Required. The language code specifying the language of the domain, for example, "en". */
		languageCode?: string | null;

		/** Whether the campaign uses advertiser supplied URLs exclusively. */
		useSuppliedUrlsOnly?: boolean | null;
	}

	/** The setting for controlling Dynamic Search Ads (DSA). */
	export interface GoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSettingFormProperties {

		/** Required. The Internet domain name that this setting represents, for example, "google.com" or "www.google.com". */
		domainName: FormControl<string | null | undefined>,

		/** Required. The language code specifying the language of the domain, for example, "en". */
		languageCode: FormControl<string | null | undefined>,

		/** Whether the campaign uses advertiser supplied URLs exclusively. */
		useSuppliedUrlsOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSettingFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSettingFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			useSuppliedUrlsOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a collection of settings related to ads geotargeting. */
	export interface GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSetting {

		/** The setting used for negative geotargeting in this particular campaign. */
		negativeGeoTargetType?: GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSettingNegativeGeoTargetType | null;

		/** The setting used for positive geotargeting in this particular campaign. */
		positiveGeoTargetType?: GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSettingPositiveGeoTargetType | null;
	}

	/** Represents a collection of settings related to ads geotargeting. */
	export interface GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSettingFormProperties {

		/** The setting used for negative geotargeting in this particular campaign. */
		negativeGeoTargetType: FormControl<GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSettingNegativeGeoTargetType | null | undefined>,

		/** The setting used for positive geotargeting in this particular campaign. */
		positiveGeoTargetType: FormControl<GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSettingPositiveGeoTargetType | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSettingFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSettingFormProperties>({
			negativeGeoTargetType: new FormControl<GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSettingNegativeGeoTargetType | null | undefined>(undefined),
			positiveGeoTargetType: new FormControl<GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSettingPositiveGeoTargetType | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSettingNegativeGeoTargetType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', PRESENCE_OR_INTEREST = 'PRESENCE_OR_INTEREST', PRESENCE = 'PRESENCE' }

	export enum GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSettingPositiveGeoTargetType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', PRESENCE_OR_INTEREST = 'PRESENCE_OR_INTEREST', SEARCH_INTEREST = 'SEARCH_INTEREST', PRESENCE = 'PRESENCE' }


	/** The network settings for the campaign. */
	export interface GoogleAdsSearchads360V0Resources_Campaign_NetworkSettings {

		/** Whether ads will be served on specified placements in the Google Display Network. Placements are specified using the Placement criterion. */
		targetContentNetwork?: boolean | null;

		/** Whether ads will be served with google.com search results. */
		targetGoogleSearch?: boolean | null;

		/** Whether ads will be served on the Google Partner Network. This is available only to some select Google partner accounts. */
		targetPartnerSearchNetwork?: boolean | null;

		/** Whether ads will be served on partner sites in the Google Search Network (requires `target_google_search` to also be `true`). */
		targetSearchNetwork?: boolean | null;
	}

	/** The network settings for the campaign. */
	export interface GoogleAdsSearchads360V0Resources_Campaign_NetworkSettingsFormProperties {

		/** Whether ads will be served on specified placements in the Google Display Network. Placements are specified using the Placement criterion. */
		targetContentNetwork: FormControl<boolean | null | undefined>,

		/** Whether ads will be served with google.com search results. */
		targetGoogleSearch: FormControl<boolean | null | undefined>,

		/** Whether ads will be served on the Google Partner Network. This is available only to some select Google partner accounts. */
		targetPartnerSearchNetwork: FormControl<boolean | null | undefined>,

		/** Whether ads will be served on partner sites in the Google Search Network (requires `target_google_search` to also be `true`). */
		targetSearchNetwork: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_Campaign_NetworkSettingsFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_Campaign_NetworkSettingsFormProperties>({
			targetContentNetwork: new FormControl<boolean | null | undefined>(undefined),
			targetGoogleSearch: new FormControl<boolean | null | undefined>(undefined),
			targetPartnerSearchNetwork: new FormControl<boolean | null | undefined>(undefined),
			targetSearchNetwork: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Optimization goal setting for this campaign, which includes a set of optimization goal types. */
	export interface GoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSetting {

		/** The list of optimization goal types. */
		optimizationGoalTypes?: Array<string>;
	}

	/** Optimization goal setting for this campaign, which includes a set of optimization goal types. */
	export interface GoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSettingFormProperties {
	}
	export function CreateGoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSettingFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSettingFormProperties>({
		});

	}


	/** Selective optimization setting for this campaign, which includes a set of conversion actions to optimize this campaign towards. This feature only applies to app campaigns that use MULTI_CHANNEL as AdvertisingChannelType and APP_CAMPAIGN or APP_CAMPAIGN_FOR_ENGAGEMENT as AdvertisingChannelSubType. */
	export interface GoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimization {

		/** The selected set of conversion actions for optimizing this campaign. */
		conversionActions?: Array<string>;
	}

	/** Selective optimization setting for this campaign, which includes a set of conversion actions to optimize this campaign towards. This feature only applies to app campaigns that use MULTI_CHANNEL as AdvertisingChannelType and APP_CAMPAIGN or APP_CAMPAIGN_FOR_ENGAGEMENT as AdvertisingChannelSubType. */
	export interface GoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimizationFormProperties {
	}
	export function CreateGoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimizationFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimizationFormProperties>({
		});

	}


	/** The setting for Shopping campaigns. Defines the universe of products that can be advertised by the campaign, and how this campaign interacts with other Shopping campaigns. */
	export interface GoogleAdsSearchads360V0Resources_Campaign_ShoppingSetting {

		/**
		 * Priority of the campaign. Campaigns with numerically higher priorities take precedence over those with lower priorities. This field is required for Shopping campaigns, with values between 0 and 2, inclusive. This field is optional for Smart Shopping campaigns, but must be equal to 3 if set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		campaignPriority?: number | null;

		/** Whether to include local products. */
		enableLocal?: boolean | null;

		/** Feed label of products to include in the campaign. Only one of feed_label or sales_country can be set. If used instead of sales_country, the feed_label field accepts country codes in the same format for example: 'XX'. Otherwise can be any string used for feed label in Google Merchant Center. */
		feedLabel?: string | null;

		/** Immutable. ID of the Merchant Center account. This field is required for create operations. This field is immutable for Shopping campaigns. */
		merchantId?: string | null;

		/** Sales country of products to include in the campaign. */
		salesCountry?: string | null;

		/** Immutable. Whether to target Vehicle Listing inventory. */
		useVehicleInventory?: boolean | null;
	}

	/** The setting for Shopping campaigns. Defines the universe of products that can be advertised by the campaign, and how this campaign interacts with other Shopping campaigns. */
	export interface GoogleAdsSearchads360V0Resources_Campaign_ShoppingSettingFormProperties {

		/**
		 * Priority of the campaign. Campaigns with numerically higher priorities take precedence over those with lower priorities. This field is required for Shopping campaigns, with values between 0 and 2, inclusive. This field is optional for Smart Shopping campaigns, but must be equal to 3 if set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		campaignPriority: FormControl<number | null | undefined>,

		/** Whether to include local products. */
		enableLocal: FormControl<boolean | null | undefined>,

		/** Feed label of products to include in the campaign. Only one of feed_label or sales_country can be set. If used instead of sales_country, the feed_label field accepts country codes in the same format for example: 'XX'. Otherwise can be any string used for feed label in Google Merchant Center. */
		feedLabel: FormControl<string | null | undefined>,

		/** Immutable. ID of the Merchant Center account. This field is required for create operations. This field is immutable for Shopping campaigns. */
		merchantId: FormControl<string | null | undefined>,

		/** Sales country of products to include in the campaign. */
		salesCountry: FormControl<string | null | undefined>,

		/** Immutable. Whether to target Vehicle Listing inventory. */
		useVehicleInventory: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_Campaign_ShoppingSettingFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_Campaign_ShoppingSettingFormProperties>({
			campaignPriority: new FormControl<number | null | undefined>(undefined),
			enableLocal: new FormControl<boolean | null | undefined>(undefined),
			feedLabel: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			salesCountry: new FormControl<string | null | undefined>(undefined),
			useVehicleInventory: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Campaign-level settings for tracking information. */
	export interface GoogleAdsSearchads360V0Resources_Campaign_TrackingSetting {

		/** Output only. The url used for dynamic tracking. */
		trackingUrl?: string | null;
	}

	/** Campaign-level settings for tracking information. */
	export interface GoogleAdsSearchads360V0Resources_Campaign_TrackingSettingFormProperties {

		/** Output only. The url used for dynamic tracking. */
		trackingUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_Campaign_TrackingSettingFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_Campaign_TrackingSettingFormProperties>({
			trackingUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings related to this conversion action's attribution model. */
	export interface GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettings {

		/** The attribution model type of this conversion action. */
		attributionModel?: GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettingsAttributionModel | null;

		/** Output only. The status of the data-driven attribution model for the conversion action. */
		dataDrivenModelStatus?: GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettingsDataDrivenModelStatus | null;
	}

	/** Settings related to this conversion action's attribution model. */
	export interface GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettingsFormProperties {

		/** The attribution model type of this conversion action. */
		attributionModel: FormControl<GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettingsAttributionModel | null | undefined>,

		/** Output only. The status of the data-driven attribution model for the conversion action. */
		dataDrivenModelStatus: FormControl<GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettingsDataDrivenModelStatus | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettingsFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettingsFormProperties>({
			attributionModel: new FormControl<GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettingsAttributionModel | null | undefined>(undefined),
			dataDrivenModelStatus: new FormControl<GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettingsDataDrivenModelStatus | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettingsAttributionModel { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', EXTERNAL = 'EXTERNAL', GOOGLE_ADS_LAST_CLICK = 'GOOGLE_ADS_LAST_CLICK', GOOGLE_SEARCH_ATTRIBUTION_FIRST_CLICK = 'GOOGLE_SEARCH_ATTRIBUTION_FIRST_CLICK', GOOGLE_SEARCH_ATTRIBUTION_LINEAR = 'GOOGLE_SEARCH_ATTRIBUTION_LINEAR', GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY = 'GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY', GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED = 'GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED', GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN = 'GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN' }

	export enum GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettingsDataDrivenModelStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', AVAILABLE = 'AVAILABLE', STALE = 'STALE', EXPIRED = 'EXPIRED', NEVER_GENERATED = 'NEVER_GENERATED' }


	/** Settings related to a Floodlight conversion action. */
	export interface GoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettings {

		/** Output only. String used to identify a Floodlight activity group when reporting conversions. */
		activityGroupTag?: string | null;

		/** Output only. ID of the Floodlight activity in DoubleClick Campaign Manager (DCM). */
		activityId?: string | null;

		/** Output only. String used to identify a Floodlight activity when reporting conversions. */
		activityTag?: string | null;
	}

	/** Settings related to a Floodlight conversion action. */
	export interface GoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettingsFormProperties {

		/** Output only. String used to identify a Floodlight activity group when reporting conversions. */
		activityGroupTag: FormControl<string | null | undefined>,

		/** Output only. ID of the Floodlight activity in DoubleClick Campaign Manager (DCM). */
		activityId: FormControl<string | null | undefined>,

		/** Output only. String used to identify a Floodlight activity when reporting conversions. */
		activityTag: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettingsFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettingsFormProperties>({
			activityGroupTag: new FormControl<string | null | undefined>(undefined),
			activityId: new FormControl<string | null | undefined>(undefined),
			activityTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings related to the value for conversion events associated with this conversion action. */
	export interface GoogleAdsSearchads360V0Resources_ConversionAction_ValueSettings {

		/** Controls whether the default value and default currency code are used in place of the value and currency code specified in conversion events for this conversion action. */
		alwaysUseDefaultValue?: boolean | null;

		/** The currency code to use when conversion events for this conversion action are sent with an invalid or missing currency code, or when this conversion action is configured to always use the default value. */
		defaultCurrencyCode?: string | null;

		/**
		 * The value to use when conversion events for this conversion action are sent with an invalid, disallowed or missing value, or when this conversion action is configured to always use the default value.
		 * Type: double
		 */
		defaultValue?: number | null;
	}

	/** Settings related to the value for conversion events associated with this conversion action. */
	export interface GoogleAdsSearchads360V0Resources_ConversionAction_ValueSettingsFormProperties {

		/** Controls whether the default value and default currency code are used in place of the value and currency code specified in conversion events for this conversion action. */
		alwaysUseDefaultValue: FormControl<boolean | null | undefined>,

		/** The currency code to use when conversion events for this conversion action are sent with an invalid or missing currency code, or when this conversion action is configured to always use the default value. */
		defaultCurrencyCode: FormControl<string | null | undefined>,

		/**
		 * The value to use when conversion events for this conversion action are sent with an invalid, disallowed or missing value, or when this conversion action is configured to always use the default value.
		 * Type: double
		 */
		defaultValue: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_ConversionAction_ValueSettingsFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_ConversionAction_ValueSettingsFormProperties>({
			alwaysUseDefaultValue: new FormControl<boolean | null | undefined>(undefined),
			defaultCurrencyCode: new FormControl<string | null | undefined>(undefined),
			defaultValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** One element of a bidding category at a certain level. Top-level categories are at level 1, their children at level 2, and so on. We currently support up to 5 levels. The user must specify a dimension type that indicates the level of the category. All cases of the same subdivision must have the same dimension type (category level). */
	export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategory {

		/** ID of the product bidding category. This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436 */
		id?: string | null;

		/** Indicates the level of the category in the taxonomy. */
		level?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategoryLevel | null;
	}

	/** One element of a bidding category at a certain level. Top-level categories are at level 1, their children at level 2, and so on. We currently support up to 5 levels. The user must specify a dimension type that indicates the level of the category. All cases of the same subdivision must have the same dimension type (category level). */
	export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategoryFormProperties {

		/** ID of the product bidding category. This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436 */
		id: FormControl<string | null | undefined>,

		/** Indicates the level of the category in the taxonomy. */
		level: FormControl<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategoryLevel | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategoryFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategoryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategoryLevel | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategoryLevel { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', LEVEL1 = 'LEVEL1', LEVEL2 = 'LEVEL2', LEVEL3 = 'LEVEL3', LEVEL4 = 'LEVEL4', LEVEL5 = 'LEVEL5' }


	/** Brand of the product. */
	export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBrand {

		/** String value of the product brand. */
		value?: string | null;
	}

	/** Brand of the product. */
	export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBrandFormProperties {

		/** String value of the product brand. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBrandFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBrandFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Locality of a product offer. */
	export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductChannel {

		/** Value of the locality. */
		channel?: GoogleAdsSearchads360V0Common__SegmentsProductChannel | null;
	}

	/** Locality of a product offer. */
	export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductChannelFormProperties {

		/** Value of the locality. */
		channel: FormControl<GoogleAdsSearchads360V0Common__SegmentsProductChannel | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductChannelFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductChannelFormProperties>({
			channel: new FormControl<GoogleAdsSearchads360V0Common__SegmentsProductChannel | null | undefined>(undefined),
		});

	}


	/** Condition of a product offer. */
	export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCondition {

		/** Value of the condition. */
		condition?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductConditionCondition | null;
	}

	/** Condition of a product offer. */
	export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductConditionFormProperties {

		/** Value of the condition. */
		condition: FormControl<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductConditionCondition | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductConditionFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductConditionFormProperties>({
			condition: new FormControl<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductConditionCondition | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductConditionCondition { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', NEW = 'NEW', REFURBISHED = 'REFURBISHED', USED = 'USED' }


	/** Custom attribute of a product offer. */
	export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttribute {

		/** Indicates the index of the custom attribute. */
		index?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttributeIndex | null;

		/** String value of the product custom attribute. */
		value?: string | null;
	}

	/** Custom attribute of a product offer. */
	export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttributeFormProperties {

		/** Indicates the index of the custom attribute. */
		index: FormControl<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttributeIndex | null | undefined>,

		/** String value of the product custom attribute. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttributeFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttributeFormProperties>({
			index: new FormControl<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttributeIndex | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttributeIndex { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', INDEX0 = 'INDEX0', INDEX1 = 'INDEX1', INDEX2 = 'INDEX2', INDEX3 = 'INDEX3', INDEX4 = 'INDEX4' }


	/** Item id of a product offer. */
	export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductItemId {

		/** Value of the id. */
		value?: string | null;
	}

	/** Item id of a product offer. */
	export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductItemIdFormProperties {

		/** Value of the id. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductItemIdFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductItemIdFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Type of a product offer. */
	export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductType {

		/** Level of the type. */
		level?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategoryLevel | null;

		/** Value of the type. */
		value?: string | null;
	}

	/** Type of a product offer. */
	export interface GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductTypeFormProperties {

		/** Level of the type. */
		level: FormControl<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategoryLevel | null | undefined>,

		/** Value of the type. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductTypeFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductTypeFormProperties>({
			level: new FormControl<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategoryLevel | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An ad. */
	export interface GoogleAdsSearchads360V0Resources__Ad {

		/** The URL that appears in the ad description for some ad formats. */
		displayUrl?: string | null;

		/** An expanded dynamic search ad. */
		expandedDynamicSearchAd?: GoogleAdsSearchads360V0Common__SearchAds360ExpandedDynamicSearchAdInfo;

		/** A Search Ads 360 expanded text ad. */
		expandedTextAd?: GoogleAdsSearchads360V0Common__SearchAds360ExpandedTextAdInfo;

		/** The list of possible final URLs after all cross-domain redirects for the ad. */
		finalUrls?: Array<string>;

		/** Output only. The ID of the ad. */
		id?: string | null;

		/** Immutable. The name of the ad. This is only used to be able to identify the ad. It does not need to be unique and does not affect the served ad. The name field is currently only supported for DisplayUploadAd, ImageAd, ShoppingComparisonListingAd and VideoAd. */
		name?: string | null;

		/** A Search Ads 360 product ad. */
		productAd?: GoogleAdsSearchads360V0Common__SearchAds360ProductAdInfo;

		/** Immutable. The resource name of the ad. Ad resource names have the form: `customers/{customer_id}/ads/{ad_id}` */
		resourceName?: string | null;

		/** A Search Ads 360 responsive search ad. */
		responsiveSearchAd?: GoogleAdsSearchads360V0Common__SearchAds360ResponsiveSearchAdInfo;

		/** A Search Ads 360 text ad. */
		textAd?: GoogleAdsSearchads360V0Common__SearchAds360TextAdInfo;

		/** Output only. The type of ad. */
		type?: GoogleAdsSearchads360V0Resources__AdType | null;
	}

	/** An ad. */
	export interface GoogleAdsSearchads360V0Resources__AdFormProperties {

		/** The URL that appears in the ad description for some ad formats. */
		displayUrl: FormControl<string | null | undefined>,

		/** Output only. The ID of the ad. */
		id: FormControl<string | null | undefined>,

		/** Immutable. The name of the ad. This is only used to be able to identify the ad. It does not need to be unique and does not affect the served ad. The name field is currently only supported for DisplayUploadAd, ImageAd, ShoppingComparisonListingAd and VideoAd. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the ad. Ad resource names have the form: `customers/{customer_id}/ads/{ad_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. The type of ad. */
		type: FormControl<GoogleAdsSearchads360V0Resources__AdType | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AdFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AdFormProperties>({
			displayUrl: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleAdsSearchads360V0Resources__AdType | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__AdType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', TEXT_AD = 'TEXT_AD', EXPANDED_TEXT_AD = 'EXPANDED_TEXT_AD', CALL_ONLY_AD = 'CALL_ONLY_AD', EXPANDED_DYNAMIC_SEARCH_AD = 'EXPANDED_DYNAMIC_SEARCH_AD', HOTEL_AD = 'HOTEL_AD', SHOPPING_SMART_AD = 'SHOPPING_SMART_AD', SHOPPING_PRODUCT_AD = 'SHOPPING_PRODUCT_AD', VIDEO_AD = 'VIDEO_AD', GMAIL_AD = 'GMAIL_AD', IMAGE_AD = 'IMAGE_AD', RESPONSIVE_SEARCH_AD = 'RESPONSIVE_SEARCH_AD', LEGACY_RESPONSIVE_DISPLAY_AD = 'LEGACY_RESPONSIVE_DISPLAY_AD', APP_AD = 'APP_AD', LEGACY_APP_INSTALL_AD = 'LEGACY_APP_INSTALL_AD', RESPONSIVE_DISPLAY_AD = 'RESPONSIVE_DISPLAY_AD', LOCAL_AD = 'LOCAL_AD', HTML5_UPLOAD_AD = 'HTML5_UPLOAD_AD', DYNAMIC_HTML5_AD = 'DYNAMIC_HTML5_AD', APP_ENGAGEMENT_AD = 'APP_ENGAGEMENT_AD', SHOPPING_COMPARISON_LISTING_AD = 'SHOPPING_COMPARISON_LISTING_AD', VIDEO_BUMPER_AD = 'VIDEO_BUMPER_AD', VIDEO_NON_SKIPPABLE_IN_STREAM_AD = 'VIDEO_NON_SKIPPABLE_IN_STREAM_AD', VIDEO_OUTSTREAM_AD = 'VIDEO_OUTSTREAM_AD', VIDEO_TRUEVIEW_DISCOVERY_AD = 'VIDEO_TRUEVIEW_DISCOVERY_AD', VIDEO_TRUEVIEW_IN_STREAM_AD = 'VIDEO_TRUEVIEW_IN_STREAM_AD', VIDEO_RESPONSIVE_AD = 'VIDEO_RESPONSIVE_AD', SMART_CAMPAIGN_AD = 'SMART_CAMPAIGN_AD', APP_PRE_REGISTRATION_AD = 'APP_PRE_REGISTRATION_AD', DISCOVERY_MULTI_ASSET_AD = 'DISCOVERY_MULTI_ASSET_AD', DISCOVERY_CAROUSEL_AD = 'DISCOVERY_CAROUSEL_AD', TRAVEL_AD = 'TRAVEL_AD', DISCOVERY_VIDEO_RESPONSIVE_AD = 'DISCOVERY_VIDEO_RESPONSIVE_AD' }


	/** An ad group. */
	export interface GoogleAdsSearchads360V0Resources__AdGroup {

		/** The ad rotation mode of the ad group. */
		adRotationMode?: GoogleAdsSearchads360V0Resources__AdGroupAdRotationMode | null;

		/** The maximum CPC (cost-per-click) bid. */
		cpcBidMicros?: string | null;

		/** Output only. The timestamp when this ad_group was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
		creationTime?: string | null;

		/** Output only. Date when the ad group ends serving ads. By default, the ad group ends on the ad group's end date. If this field is set, then the ad group ends at the end of the specified date in the customer's time zone. This field is only available for Microsoft Advertising and Facebook gateway accounts. Format: YYYY-MM-DD Example: 2019-03-14 */
		endDate?: string | null;

		/** Output only. ID of the ad group in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use "ad_group.id" instead. */
		engineId?: string | null;

		/** Output only. The Engine Status for ad group. */
		engineStatus?: GoogleAdsSearchads360V0Resources__AdGroupEngineStatus | null;

		/** Output only. The ID of the ad group. */
		id?: string | null;

		/** Output only. The resource names of labels attached to this ad group. */
		labels?: Array<string>;

		/** Output only. The language of the ads and keywords in an ad group. This field is only available for Microsoft Advertising accounts. More details: https://docs.microsoft.com/en-us/advertising/guides/ad-languages?view=bingads-13#adlanguage */
		languageCode?: string | null;

		/** Output only. The datetime when this ad group was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
		lastModifiedTime?: string | null;

		/** The name of the ad group. This field is required and should not be empty when creating new ad groups. It must contain fewer than 255 UTF-8 full-width characters. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters. */
		name?: string | null;

		/** Immutable. The resource name of the ad group. Ad group resource names have the form: `customers/{customer_id}/adGroups/{ad_group_id}` */
		resourceName?: string | null;

		/** Output only. Date when this ad group starts serving ads. By default, the ad group starts now or the ad group's start date, whichever is later. If this field is set, then the ad group starts at the beginning of the specified date in the customer's time zone. This field is only available for Microsoft Advertising and Facebook gateway accounts. Format: YYYY-MM-DD Example: 2019-03-14 */
		startDate?: string | null;

		/** The status of the ad group. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupStatus | null;

		/** Settings for the targeting-related features, at the campaign and ad group levels. For more details about the targeting setting, visit https://support.google.com/google-ads/answer/7365594 */
		targetingSetting?: GoogleAdsSearchads360V0Common__TargetingSetting;

		/** Immutable. The type of the ad group. */
		type?: GoogleAdsSearchads360V0Resources__AdGroupType | null;
	}

	/** An ad group. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupFormProperties {

		/** The ad rotation mode of the ad group. */
		adRotationMode: FormControl<GoogleAdsSearchads360V0Resources__AdGroupAdRotationMode | null | undefined>,

		/** The maximum CPC (cost-per-click) bid. */
		cpcBidMicros: FormControl<string | null | undefined>,

		/** Output only. The timestamp when this ad_group was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
		creationTime: FormControl<string | null | undefined>,

		/** Output only. Date when the ad group ends serving ads. By default, the ad group ends on the ad group's end date. If this field is set, then the ad group ends at the end of the specified date in the customer's time zone. This field is only available for Microsoft Advertising and Facebook gateway accounts. Format: YYYY-MM-DD Example: 2019-03-14 */
		endDate: FormControl<string | null | undefined>,

		/** Output only. ID of the ad group in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use "ad_group.id" instead. */
		engineId: FormControl<string | null | undefined>,

		/** Output only. The Engine Status for ad group. */
		engineStatus: FormControl<GoogleAdsSearchads360V0Resources__AdGroupEngineStatus | null | undefined>,

		/** Output only. The ID of the ad group. */
		id: FormControl<string | null | undefined>,

		/** Output only. The language of the ads and keywords in an ad group. This field is only available for Microsoft Advertising accounts. More details: https://docs.microsoft.com/en-us/advertising/guides/ad-languages?view=bingads-13#adlanguage */
		languageCode: FormControl<string | null | undefined>,

		/** Output only. The datetime when this ad group was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** The name of the ad group. This field is required and should not be empty when creating new ad groups. It must contain fewer than 255 UTF-8 full-width characters. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the ad group. Ad group resource names have the form: `customers/{customer_id}/adGroups/{ad_group_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. Date when this ad group starts serving ads. By default, the ad group starts now or the ad group's start date, whichever is later. If this field is set, then the ad group starts at the beginning of the specified date in the customer's time zone. This field is only available for Microsoft Advertising and Facebook gateway accounts. Format: YYYY-MM-DD Example: 2019-03-14 */
		startDate: FormControl<string | null | undefined>,

		/** The status of the ad group. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupStatus | null | undefined>,

		/** Immutable. The type of the ad group. */
		type: FormControl<GoogleAdsSearchads360V0Resources__AdGroupType | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AdGroupFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AdGroupFormProperties>({
			adRotationMode: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupAdRotationMode | null | undefined>(undefined),
			cpcBidMicros: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			engineId: new FormControl<string | null | undefined>(undefined),
			engineStatus: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupEngineStatus | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupStatus | null | undefined>(undefined),
			type: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupType | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__AdGroupAdRotationMode { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', OPTIMIZE = 'OPTIMIZE', ROTATE_FOREVER = 'ROTATE_FOREVER' }

	export enum GoogleAdsSearchads360V0Resources__AdGroupEngineStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', AD_GROUP_ELIGIBLE = 'AD_GROUP_ELIGIBLE', AD_GROUP_EXPIRED = 'AD_GROUP_EXPIRED', AD_GROUP_REMOVED = 'AD_GROUP_REMOVED', AD_GROUP_DRAFT = 'AD_GROUP_DRAFT', AD_GROUP_PAUSED = 'AD_GROUP_PAUSED', AD_GROUP_SERVING = 'AD_GROUP_SERVING', AD_GROUP_SUBMITTED = 'AD_GROUP_SUBMITTED', CAMPAIGN_PAUSED = 'CAMPAIGN_PAUSED', ACCOUNT_PAUSED = 'ACCOUNT_PAUSED' }

	export enum GoogleAdsSearchads360V0Resources__AdGroupStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', ENABLED = 'ENABLED', PAUSED = 'PAUSED', REMOVED = 'REMOVED' }

	export enum GoogleAdsSearchads360V0Resources__AdGroupType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', SEARCH_STANDARD = 'SEARCH_STANDARD', DISPLAY_STANDARD = 'DISPLAY_STANDARD', SHOPPING_PRODUCT_ADS = 'SHOPPING_PRODUCT_ADS', SHOPPING_SHOWCASE_ADS = 'SHOPPING_SHOWCASE_ADS', HOTEL_ADS = 'HOTEL_ADS', SHOPPING_SMART_ADS = 'SHOPPING_SMART_ADS', VIDEO_BUMPER = 'VIDEO_BUMPER', VIDEO_TRUE_VIEW_IN_STREAM = 'VIDEO_TRUE_VIEW_IN_STREAM', VIDEO_TRUE_VIEW_IN_DISPLAY = 'VIDEO_TRUE_VIEW_IN_DISPLAY', VIDEO_NON_SKIPPABLE_IN_STREAM = 'VIDEO_NON_SKIPPABLE_IN_STREAM', VIDEO_OUTSTREAM = 'VIDEO_OUTSTREAM', SEARCH_DYNAMIC_ADS = 'SEARCH_DYNAMIC_ADS', SHOPPING_COMPARISON_LISTING_ADS = 'SHOPPING_COMPARISON_LISTING_ADS', PROMOTED_HOTEL_ADS = 'PROMOTED_HOTEL_ADS', VIDEO_RESPONSIVE = 'VIDEO_RESPONSIVE', VIDEO_EFFICIENT_REACH = 'VIDEO_EFFICIENT_REACH', SMART_CAMPAIGN_ADS = 'SMART_CAMPAIGN_ADS', TRAVEL_ADS = 'TRAVEL_ADS' }


	/** An ad group ad. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupAd {

		/** An ad. */
		ad?: GoogleAdsSearchads360V0Resources__Ad;

		/** Output only. The timestamp when this ad_group_ad was created. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
		creationTime?: string | null;

		/** Output only. ID of the ad in the external engine account. This field is for SearchAds 360 account only, for example, Yahoo Japan, Microsoft, Baidu etc. For non-SearchAds 360 entity, use "ad_group_ad.ad.id" instead. */
		engineId?: string | null;

		/** Output only. Additional status of the ad in the external engine account. Possible statuses (depending on the type of external account) include active, eligible, pending review, etc. */
		engineStatus?: GoogleAdsSearchads360V0Resources__AdGroupAdEngineStatus | null;

		/** Output only. The resource names of labels attached to this ad group ad. */
		labels?: Array<string>;

		/** Output only. The datetime when this ad group ad was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
		lastModifiedTime?: string | null;

		/** Immutable. The resource name of the ad. Ad group ad resource names have the form: `customers/{customer_id}/adGroupAds/{ad_group_id}~{ad_id}` */
		resourceName?: string | null;

		/** The status of the ad. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupStatus | null;
	}

	/** An ad group ad. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupAdFormProperties {

		/** Output only. The timestamp when this ad_group_ad was created. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
		creationTime: FormControl<string | null | undefined>,

		/** Output only. ID of the ad in the external engine account. This field is for SearchAds 360 account only, for example, Yahoo Japan, Microsoft, Baidu etc. For non-SearchAds 360 entity, use "ad_group_ad.ad.id" instead. */
		engineId: FormControl<string | null | undefined>,

		/** Output only. Additional status of the ad in the external engine account. Possible statuses (depending on the type of external account) include active, eligible, pending review, etc. */
		engineStatus: FormControl<GoogleAdsSearchads360V0Resources__AdGroupAdEngineStatus | null | undefined>,

		/** Output only. The datetime when this ad group ad was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the ad. Ad group ad resource names have the form: `customers/{customer_id}/adGroupAds/{ad_group_id}~{ad_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** The status of the ad. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupStatus | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AdGroupAdFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AdGroupAdFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			engineId: new FormControl<string | null | undefined>(undefined),
			engineStatus: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupAdEngineStatus | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupStatus | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__AdGroupAdEngineStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', AD_GROUP_AD_ELIGIBLE = 'AD_GROUP_AD_ELIGIBLE', AD_GROUP_AD_INAPPROPRIATE_FOR_CAMPAIGN = 'AD_GROUP_AD_INAPPROPRIATE_FOR_CAMPAIGN', AD_GROUP_AD_MOBILE_URL_UNDER_REVIEW = 'AD_GROUP_AD_MOBILE_URL_UNDER_REVIEW', AD_GROUP_AD_PARTIALLY_INVALID = 'AD_GROUP_AD_PARTIALLY_INVALID', AD_GROUP_AD_TO_BE_ACTIVATED = 'AD_GROUP_AD_TO_BE_ACTIVATED', AD_GROUP_AD_NOT_REVIEWED = 'AD_GROUP_AD_NOT_REVIEWED', AD_GROUP_AD_ON_HOLD = 'AD_GROUP_AD_ON_HOLD', AD_GROUP_AD_PAUSED = 'AD_GROUP_AD_PAUSED', AD_GROUP_AD_REMOVED = 'AD_GROUP_AD_REMOVED', AD_GROUP_AD_PENDING_REVIEW = 'AD_GROUP_AD_PENDING_REVIEW', AD_GROUP_AD_UNDER_REVIEW = 'AD_GROUP_AD_UNDER_REVIEW', AD_GROUP_AD_APPROVED = 'AD_GROUP_AD_APPROVED', AD_GROUP_AD_DISAPPROVED = 'AD_GROUP_AD_DISAPPROVED', AD_GROUP_AD_SERVING = 'AD_GROUP_AD_SERVING', AD_GROUP_AD_ACCOUNT_PAUSED = 'AD_GROUP_AD_ACCOUNT_PAUSED', AD_GROUP_AD_CAMPAIGN_PAUSED = 'AD_GROUP_AD_CAMPAIGN_PAUSED', AD_GROUP_AD_AD_GROUP_PAUSED = 'AD_GROUP_AD_AD_GROUP_PAUSED' }


	/** A relationship between an ad group ad and a label. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupAdLabel {

		/** Immutable. The ad group ad to which the label is attached. */
		adGroupAd?: string | null;

		/** Immutable. The label assigned to the ad group ad. */
		label?: string | null;

		/** Immutable. The resource name of the ad group ad label. Ad group ad label resource names have the form: `customers/{customer_id}/adGroupAdLabels/{ad_group_id}~{ad_id}~{label_id}` */
		resourceName?: string | null;
	}

	/** A relationship between an ad group ad and a label. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupAdLabelFormProperties {

		/** Immutable. The ad group ad to which the label is attached. */
		adGroupAd: FormControl<string | null | undefined>,

		/** Immutable. The label assigned to the ad group ad. */
		label: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the ad group ad label. Ad group ad label resource names have the form: `customers/{customer_id}/adGroupAdLabels/{ad_group_id}~{ad_id}~{label_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AdGroupAdLabelFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AdGroupAdLabelFormProperties>({
			adGroupAd: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A link between an ad group and an asset. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupAsset {

		/** Required. Immutable. The ad group to which the asset is linked. */
		adGroup?: string | null;

		/** Required. Immutable. The asset which is linked to the ad group. */
		asset?: string | null;

		/** Immutable. The resource name of the ad group asset. AdGroupAsset resource names have the form: `customers/{customer_id}/adGroupAssets/{ad_group_id}~{asset_id}~{field_type}` */
		resourceName?: string | null;

		/** Status of the ad group asset. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupAssetStatus | null;
	}

	/** A link between an ad group and an asset. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupAssetFormProperties {

		/** Required. Immutable. The ad group to which the asset is linked. */
		adGroup: FormControl<string | null | undefined>,

		/** Required. Immutable. The asset which is linked to the ad group. */
		asset: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the ad group asset. AdGroupAsset resource names have the form: `customers/{customer_id}/adGroupAssets/{ad_group_id}~{asset_id}~{field_type}` */
		resourceName: FormControl<string | null | undefined>,

		/** Status of the ad group asset. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetStatus | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AdGroupAssetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AdGroupAssetFormProperties>({
			adGroup: new FormControl<string | null | undefined>(undefined),
			asset: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetStatus | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__AdGroupAssetStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', ENABLED = 'ENABLED', REMOVED = 'REMOVED', PAUSED = 'PAUSED' }


	/** AdGroupAssetSet is the linkage between an ad group and an asset set. Creating an AdGroupAssetSet links an asset set with an ad group. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupAssetSet {

		/** Immutable. The ad group to which this asset set is linked. */
		adGroup?: string | null;

		/** Immutable. The asset set which is linked to the ad group. */
		assetSet?: string | null;

		/** Immutable. The resource name of the ad group asset set. Ad group asset set resource names have the form: `customers/{customer_id}/adGroupAssetSets/{ad_group_id}~{asset_set_id}` */
		resourceName?: string | null;

		/** Output only. The status of the ad group asset set. Read-only. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null;
	}

	/** AdGroupAssetSet is the linkage between an ad group and an asset set. Creating an AdGroupAssetSet links an asset set with an ad group. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupAssetSetFormProperties {

		/** Immutable. The ad group to which this asset set is linked. */
		adGroup: FormControl<string | null | undefined>,

		/** Immutable. The asset set which is linked to the ad group. */
		assetSet: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the ad group asset set. Ad group asset set resource names have the form: `customers/{customer_id}/adGroupAssetSets/{ad_group_id}~{asset_set_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. The status of the ad group asset set. Read-only. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AdGroupAssetSetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AdGroupAssetSetFormProperties>({
			adGroup: new FormControl<string | null | undefined>(undefined),
			assetSet: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', ENABLED = 'ENABLED', REMOVED = 'REMOVED' }


	/** An ad group audience view. Includes performance data from interests and remarketing lists for Display Network and YouTube Network ads, and remarketing lists for search ads (RLSA), aggregated at the audience level. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupAudienceView {

		/** Output only. The resource name of the ad group audience view. Ad group audience view resource names have the form: `customers/{customer_id}/adGroupAudienceViews/{ad_group_id}~{criterion_id}` */
		resourceName?: string | null;
	}

	/** An ad group audience view. Includes performance data from interests and remarketing lists for Display Network and YouTube Network ads, and remarketing lists for search ads (RLSA), aggregated at the audience level. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupAudienceViewFormProperties {

		/** Output only. The resource name of the ad group audience view. Ad group audience view resource names have the form: `customers/{customer_id}/adGroupAudienceViews/{ad_group_id}~{criterion_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AdGroupAudienceViewFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AdGroupAudienceViewFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an ad group bid modifier. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupBidModifier {

		/**
		 * The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. The range is 1.0 - 6.0 for PreferredContent. Use 0 to opt out of a Device type.
		 * Type: double
		 */
		bidModifier?: number | null;

		/** A device criterion. */
		device?: GoogleAdsSearchads360V0Common__DeviceInfo;

		/** Immutable. The resource name of the ad group bid modifier. Ad group bid modifier resource names have the form: `customers/{customer_id}/adGroupBidModifiers/{ad_group_id}~{criterion_id}` */
		resourceName?: string | null;
	}

	/** Represents an ad group bid modifier. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupBidModifierFormProperties {

		/**
		 * The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. The range is 1.0 - 6.0 for PreferredContent. Use 0 to opt out of a Device type.
		 * Type: double
		 */
		bidModifier: FormControl<number | null | undefined>,

		/** Immutable. The resource name of the ad group bid modifier. Ad group bid modifier resource names have the form: `customers/{customer_id}/adGroupBidModifiers/{ad_group_id}~{criterion_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AdGroupBidModifierFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AdGroupBidModifierFormProperties>({
			bidModifier: new FormControl<number | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An ad group criterion. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupCriterion {

		/** Immutable. The ad group to which the criterion belongs. */
		adGroup?: string | null;

		/** An age range criterion. */
		ageRange?: GoogleAdsSearchads360V0Common__AgeRangeInfo;

		/**
		 * The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers.
		 * Type: double
		 */
		bidModifier?: number | null;

		/** The CPC (cost-per-click) bid. */
		cpcBidMicros?: string | null;

		/** Output only. The timestamp when this ad group criterion was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
		creationTime?: string | null;

		/** Output only. The ID of the criterion. */
		criterionId?: string | null;

		/** Output only. The effective CPC (cost-per-click) bid. */
		effectiveCpcBidMicros?: string | null;

		/** Output only. ID of the ad group criterion in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use "ad_group_criterion.criterion_id" instead. */
		engineId?: string | null;

		/** Output only. The Engine Status for ad group criterion. */
		engineStatus?: GoogleAdsSearchads360V0Resources__AdGroupCriterionEngineStatus | null;

		/** URL template for appending params to final URL. */
		finalUrlSuffix?: string | null;

		/** The list of possible final URLs after all cross-domain redirects for the ad. */
		finalUrls?: Array<string>;

		/** A gender criterion. */
		gender?: GoogleAdsSearchads360V0Common__GenderInfo;

		/** A keyword criterion. */
		keyword?: GoogleAdsSearchads360V0Common__KeywordInfo;

		/** Output only. The resource names of labels attached to this ad group criterion. */
		labels?: Array<string>;

		/** Output only. The datetime when this ad group criterion was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
		lastModifiedTime?: string | null;

		/** A listing group criterion. */
		listingGroup?: GoogleAdsSearchads360V0Common__ListingGroupInfo;

		/** A location criterion. */
		location?: GoogleAdsSearchads360V0Common__LocationInfo;

		/** Immutable. Whether to target (`false`) or exclude (`true`) the criterion. This field is immutable. To switch a criterion from positive to negative, remove then re-add it. */
		negative?: boolean | null;

		/** Estimates for criterion bids at various positions. */
		positionEstimates?: GoogleAdsSearchads360V0Resources_AdGroupCriterion_PositionEstimates;

		/** A container for ad group criterion quality information. */
		qualityInfo?: GoogleAdsSearchads360V0Resources_AdGroupCriterion_QualityInfo;

		/** Immutable. The resource name of the ad group criterion. Ad group criterion resource names have the form: `customers/{customer_id}/adGroupCriteria/{ad_group_id}~{criterion_id}` */
		resourceName?: string | null;

		/** The status of the criterion. This is the status of the ad group criterion entity, set by the client. Note: UI reports may incorporate additional information that affects whether a criterion is eligible to run. In some cases a criterion that's REMOVED in the API can still show as enabled in the UI. For example, campaigns by default show to users of all age ranges unless excluded. The UI will show each age range as "enabled", since they're eligible to see the ads; but AdGroupCriterion.status will show "removed", since no positive criterion was added. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupStatus | null;

		/** The URL template for constructing a tracking URL. */
		trackingUrlTemplate?: string | null;

		/** Output only. The type of the criterion. */
		type?: GoogleAdsSearchads360V0Resources__AdGroupCriterionType | null;

		/** A User List criterion. Represents a user list that is defined by the advertiser to be targeted. */
		userList?: GoogleAdsSearchads360V0Common__UserListInfo;

		/** Represents a criterion for targeting webpages of an advertiser's website. */
		webpage?: GoogleAdsSearchads360V0Common__WebpageInfo;
	}

	/** An ad group criterion. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupCriterionFormProperties {

		/** Immutable. The ad group to which the criterion belongs. */
		adGroup: FormControl<string | null | undefined>,

		/**
		 * The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers.
		 * Type: double
		 */
		bidModifier: FormControl<number | null | undefined>,

		/** The CPC (cost-per-click) bid. */
		cpcBidMicros: FormControl<string | null | undefined>,

		/** Output only. The timestamp when this ad group criterion was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
		creationTime: FormControl<string | null | undefined>,

		/** Output only. The ID of the criterion. */
		criterionId: FormControl<string | null | undefined>,

		/** Output only. The effective CPC (cost-per-click) bid. */
		effectiveCpcBidMicros: FormControl<string | null | undefined>,

		/** Output only. ID of the ad group criterion in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use "ad_group_criterion.criterion_id" instead. */
		engineId: FormControl<string | null | undefined>,

		/** Output only. The Engine Status for ad group criterion. */
		engineStatus: FormControl<GoogleAdsSearchads360V0Resources__AdGroupCriterionEngineStatus | null | undefined>,

		/** URL template for appending params to final URL. */
		finalUrlSuffix: FormControl<string | null | undefined>,

		/** Output only. The datetime when this ad group criterion was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** Immutable. Whether to target (`false`) or exclude (`true`) the criterion. This field is immutable. To switch a criterion from positive to negative, remove then re-add it. */
		negative: FormControl<boolean | null | undefined>,

		/** Immutable. The resource name of the ad group criterion. Ad group criterion resource names have the form: `customers/{customer_id}/adGroupCriteria/{ad_group_id}~{criterion_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** The status of the criterion. This is the status of the ad group criterion entity, set by the client. Note: UI reports may incorporate additional information that affects whether a criterion is eligible to run. In some cases a criterion that's REMOVED in the API can still show as enabled in the UI. For example, campaigns by default show to users of all age ranges unless excluded. The UI will show each age range as "enabled", since they're eligible to see the ads; but AdGroupCriterion.status will show "removed", since no positive criterion was added. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupStatus | null | undefined>,

		/** The URL template for constructing a tracking URL. */
		trackingUrlTemplate: FormControl<string | null | undefined>,

		/** Output only. The type of the criterion. */
		type: FormControl<GoogleAdsSearchads360V0Resources__AdGroupCriterionType | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AdGroupCriterionFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AdGroupCriterionFormProperties>({
			adGroup: new FormControl<string | null | undefined>(undefined),
			bidModifier: new FormControl<number | null | undefined>(undefined),
			cpcBidMicros: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			criterionId: new FormControl<string | null | undefined>(undefined),
			effectiveCpcBidMicros: new FormControl<string | null | undefined>(undefined),
			engineId: new FormControl<string | null | undefined>(undefined),
			engineStatus: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupCriterionEngineStatus | null | undefined>(undefined),
			finalUrlSuffix: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			negative: new FormControl<boolean | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupStatus | null | undefined>(undefined),
			trackingUrlTemplate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupCriterionType | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__AdGroupCriterionEngineStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', AD_GROUP_CRITERION_ELIGIBLE = 'AD_GROUP_CRITERION_ELIGIBLE', AD_GROUP_CRITERION_INAPPROPRIATE_FOR_CAMPAIGN = 'AD_GROUP_CRITERION_INAPPROPRIATE_FOR_CAMPAIGN', AD_GROUP_CRITERION_INVALID_MOBILE_SEARCH = 'AD_GROUP_CRITERION_INVALID_MOBILE_SEARCH', AD_GROUP_CRITERION_INVALID_PC_SEARCH = 'AD_GROUP_CRITERION_INVALID_PC_SEARCH', AD_GROUP_CRITERION_INVALID_SEARCH = 'AD_GROUP_CRITERION_INVALID_SEARCH', AD_GROUP_CRITERION_LOW_SEARCH_VOLUME = 'AD_GROUP_CRITERION_LOW_SEARCH_VOLUME', AD_GROUP_CRITERION_MOBILE_URL_UNDER_REVIEW = 'AD_GROUP_CRITERION_MOBILE_URL_UNDER_REVIEW', AD_GROUP_CRITERION_PARTIALLY_INVALID = 'AD_GROUP_CRITERION_PARTIALLY_INVALID', AD_GROUP_CRITERION_TO_BE_ACTIVATED = 'AD_GROUP_CRITERION_TO_BE_ACTIVATED', AD_GROUP_CRITERION_UNDER_REVIEW = 'AD_GROUP_CRITERION_UNDER_REVIEW', AD_GROUP_CRITERION_NOT_REVIEWED = 'AD_GROUP_CRITERION_NOT_REVIEWED', AD_GROUP_CRITERION_ON_HOLD = 'AD_GROUP_CRITERION_ON_HOLD', AD_GROUP_CRITERION_PENDING_REVIEW = 'AD_GROUP_CRITERION_PENDING_REVIEW', AD_GROUP_CRITERION_PAUSED = 'AD_GROUP_CRITERION_PAUSED', AD_GROUP_CRITERION_REMOVED = 'AD_GROUP_CRITERION_REMOVED', AD_GROUP_CRITERION_APPROVED = 'AD_GROUP_CRITERION_APPROVED', AD_GROUP_CRITERION_DISAPPROVED = 'AD_GROUP_CRITERION_DISAPPROVED', AD_GROUP_CRITERION_SERVING = 'AD_GROUP_CRITERION_SERVING', AD_GROUP_CRITERION_ACCOUNT_PAUSED = 'AD_GROUP_CRITERION_ACCOUNT_PAUSED' }

	export enum GoogleAdsSearchads360V0Resources__AdGroupCriterionType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', KEYWORD = 'KEYWORD', PLACEMENT = 'PLACEMENT', MOBILE_APP_CATEGORY = 'MOBILE_APP_CATEGORY', MOBILE_APPLICATION = 'MOBILE_APPLICATION', DEVICE = 'DEVICE', LOCATION = 'LOCATION', LISTING_GROUP = 'LISTING_GROUP', AD_SCHEDULE = 'AD_SCHEDULE', AGE_RANGE = 'AGE_RANGE', GENDER = 'GENDER', INCOME_RANGE = 'INCOME_RANGE', PARENTAL_STATUS = 'PARENTAL_STATUS', YOUTUBE_VIDEO = 'YOUTUBE_VIDEO', YOUTUBE_CHANNEL = 'YOUTUBE_CHANNEL', USER_LIST = 'USER_LIST', PROXIMITY = 'PROXIMITY', TOPIC = 'TOPIC', LISTING_SCOPE = 'LISTING_SCOPE', LANGUAGE = 'LANGUAGE', IP_BLOCK = 'IP_BLOCK', CONTENT_LABEL = 'CONTENT_LABEL', CARRIER = 'CARRIER', USER_INTEREST = 'USER_INTEREST', WEBPAGE = 'WEBPAGE', OPERATING_SYSTEM_VERSION = 'OPERATING_SYSTEM_VERSION', APP_PAYMENT_MODEL = 'APP_PAYMENT_MODEL', MOBILE_DEVICE = 'MOBILE_DEVICE', CUSTOM_AFFINITY = 'CUSTOM_AFFINITY', CUSTOM_INTENT = 'CUSTOM_INTENT', LOCATION_GROUP = 'LOCATION_GROUP', CUSTOM_AUDIENCE = 'CUSTOM_AUDIENCE', COMBINED_AUDIENCE = 'COMBINED_AUDIENCE', KEYWORD_THEME = 'KEYWORD_THEME', AUDIENCE = 'AUDIENCE', LOCAL_SERVICE_ID = 'LOCAL_SERVICE_ID', BRAND = 'BRAND', BRAND_LIST = 'BRAND_LIST' }


	/** A relationship between an ad group criterion and a label. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupCriterionLabel {

		/** Immutable. The ad group criterion to which the label is attached. */
		adGroupCriterion?: string | null;

		/** Immutable. The label assigned to the ad group criterion. */
		label?: string | null;

		/** Immutable. The resource name of the ad group criterion label. Ad group criterion label resource names have the form: `customers/{customer_id}/adGroupCriterionLabels/{ad_group_id}~{criterion_id}~{label_id}` */
		resourceName?: string | null;
	}

	/** A relationship between an ad group criterion and a label. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupCriterionLabelFormProperties {

		/** Immutable. The ad group criterion to which the label is attached. */
		adGroupCriterion: FormControl<string | null | undefined>,

		/** Immutable. The label assigned to the ad group criterion. */
		label: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the ad group criterion label. Ad group criterion label resource names have the form: `customers/{customer_id}/adGroupCriterionLabels/{ad_group_id}~{criterion_id}~{label_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AdGroupCriterionLabelFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AdGroupCriterionLabelFormProperties>({
			adGroupCriterion: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A relationship between an ad group and a label. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupLabel {

		/** Immutable. The ad group to which the label is attached. */
		adGroup?: string | null;

		/** Immutable. The label assigned to the ad group. */
		label?: string | null;

		/** Immutable. The resource name of the ad group label. Ad group label resource names have the form: `customers/{customer_id}/adGroupLabels/{ad_group_id}~{label_id}` */
		resourceName?: string | null;
	}

	/** A relationship between an ad group and a label. */
	export interface GoogleAdsSearchads360V0Resources__AdGroupLabelFormProperties {

		/** Immutable. The ad group to which the label is attached. */
		adGroup: FormControl<string | null | undefined>,

		/** Immutable. The label assigned to the ad group. */
		label: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the ad group label. Ad group label resource names have the form: `customers/{customer_id}/adGroupLabels/{ad_group_id}~{label_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AdGroupLabelFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AdGroupLabelFormProperties>({
			adGroup: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An age range view. */
	export interface GoogleAdsSearchads360V0Resources__AgeRangeView {

		/** Output only. The resource name of the age range view. Age range view resource names have the form: `customers/{customer_id}/ageRangeViews/{ad_group_id}~{criterion_id}` */
		resourceName?: string | null;
	}

	/** An age range view. */
	export interface GoogleAdsSearchads360V0Resources__AgeRangeViewFormProperties {

		/** Output only. The resource name of the age range view. Age range view resource names have the form: `customers/{customer_id}/ageRangeViews/{ad_group_id}~{criterion_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AgeRangeViewFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AgeRangeViewFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Asset is a part of an ad which can be shared across multiple ads. It can be an image (ImageAsset), a video (YoutubeVideoAsset), etc. Assets are immutable and cannot be removed. To stop an asset from serving, remove the asset from the entity that is using it. */
	export interface GoogleAdsSearchads360V0Resources__Asset {

		/** A unified call asset. */
		callAsset?: GoogleAdsSearchads360V0Common__UnifiedCallAsset;

		/** A call to action asset. */
		callToActionAsset?: GoogleAdsSearchads360V0Common__CallToActionAsset;

		/** A unified callout asset. */
		calloutAsset?: GoogleAdsSearchads360V0Common__UnifiedCalloutAsset;

		/** Output only. The timestamp when this asset was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
		creationTime?: string | null;

		/** Output only. The Engine Status for an asset. */
		engineStatus?: GoogleAdsSearchads360V0Resources__AssetEngineStatus | null;

		/** A list of possible final URLs after all cross domain redirects. */
		finalUrls?: Array<string>;

		/** Output only. The ID of the asset. */
		id?: string | null;

		/** An Image asset. */
		imageAsset?: GoogleAdsSearchads360V0Common__ImageAsset;

		/** Output only. The datetime when this asset was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
		lastModifiedTime?: string | null;

		/** A unified location asset. */
		locationAsset?: GoogleAdsSearchads360V0Common__UnifiedLocationAsset;

		/** An asset representing a mobile app. */
		mobileAppAsset?: GoogleAdsSearchads360V0Common__MobileAppAsset;

		/** Optional name of the asset. */
		name?: string | null;

		/** A Unified Page Feed asset. */
		pageFeedAsset?: GoogleAdsSearchads360V0Common__UnifiedPageFeedAsset;

		/** Immutable. The resource name of the asset. Asset resource names have the form: `customers/{customer_id}/assets/{asset_id}` */
		resourceName?: string | null;

		/** A unified sitelink asset. */
		sitelinkAsset?: GoogleAdsSearchads360V0Common__UnifiedSitelinkAsset;

		/** Output only. The status of the asset. */
		status?: GoogleAdsSearchads360V0Resources__AssetStatus | null;

		/** A Text asset. */
		textAsset?: GoogleAdsSearchads360V0Common__TextAsset;

		/** URL template for constructing a tracking URL. */
		trackingUrlTemplate?: string | null;

		/** Output only. Type of the asset. */
		type?: GoogleAdsSearchads360V0Resources__AssetType | null;

		/** A YouTube asset. */
		youtubeVideoAsset?: GoogleAdsSearchads360V0Common__YoutubeVideoAsset;
	}

	/** Asset is a part of an ad which can be shared across multiple ads. It can be an image (ImageAsset), a video (YoutubeVideoAsset), etc. Assets are immutable and cannot be removed. To stop an asset from serving, remove the asset from the entity that is using it. */
	export interface GoogleAdsSearchads360V0Resources__AssetFormProperties {

		/** Output only. The timestamp when this asset was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
		creationTime: FormControl<string | null | undefined>,

		/** Output only. The Engine Status for an asset. */
		engineStatus: FormControl<GoogleAdsSearchads360V0Resources__AssetEngineStatus | null | undefined>,

		/** Output only. The ID of the asset. */
		id: FormControl<string | null | undefined>,

		/** Output only. The datetime when this asset was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** Optional name of the asset. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the asset. Asset resource names have the form: `customers/{customer_id}/assets/{asset_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. The status of the asset. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AssetStatus | null | undefined>,

		/** URL template for constructing a tracking URL. */
		trackingUrlTemplate: FormControl<string | null | undefined>,

		/** Output only. Type of the asset. */
		type: FormControl<GoogleAdsSearchads360V0Resources__AssetType | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AssetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AssetFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			engineStatus: new FormControl<GoogleAdsSearchads360V0Resources__AssetEngineStatus | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AssetStatus | null | undefined>(undefined),
			trackingUrlTemplate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleAdsSearchads360V0Resources__AssetType | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__AssetEngineStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', SERVING = 'SERVING', SERVING_LIMITED = 'SERVING_LIMITED', DISAPPROVED = 'DISAPPROVED', DISABLED = 'DISABLED', REMOVED = 'REMOVED' }

	export enum GoogleAdsSearchads360V0Resources__AssetStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', ENABLED = 'ENABLED', REMOVED = 'REMOVED', ARCHIVED = 'ARCHIVED', PENDING_SYSTEM_GENERATED = 'PENDING_SYSTEM_GENERATED' }

	export enum GoogleAdsSearchads360V0Resources__AssetType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', YOUTUBE_VIDEO = 'YOUTUBE_VIDEO', MEDIA_BUNDLE = 'MEDIA_BUNDLE', IMAGE = 'IMAGE', TEXT = 'TEXT', LEAD_FORM = 'LEAD_FORM', BOOK_ON_GOOGLE = 'BOOK_ON_GOOGLE', PROMOTION = 'PROMOTION', CALLOUT = 'CALLOUT', STRUCTURED_SNIPPET = 'STRUCTURED_SNIPPET', SITELINK = 'SITELINK', PAGE_FEED = 'PAGE_FEED', DYNAMIC_EDUCATION = 'DYNAMIC_EDUCATION', MOBILE_APP = 'MOBILE_APP', HOTEL_CALLOUT = 'HOTEL_CALLOUT', CALL = 'CALL', PRICE = 'PRICE', CALL_TO_ACTION = 'CALL_TO_ACTION', DYNAMIC_REAL_ESTATE = 'DYNAMIC_REAL_ESTATE', DYNAMIC_CUSTOM = 'DYNAMIC_CUSTOM', DYNAMIC_HOTELS_AND_RENTALS = 'DYNAMIC_HOTELS_AND_RENTALS', DYNAMIC_FLIGHTS = 'DYNAMIC_FLIGHTS', DISCOVERY_CAROUSEL_CARD = 'DISCOVERY_CAROUSEL_CARD', DYNAMIC_TRAVEL = 'DYNAMIC_TRAVEL', DYNAMIC_LOCAL = 'DYNAMIC_LOCAL', DYNAMIC_JOBS = 'DYNAMIC_JOBS', LOCATION = 'LOCATION', HOTEL_PROPERTY = 'HOTEL_PROPERTY' }


	/** An asset group. AssetGroupAsset is used to link an asset to the asset group. AssetGroupSignal is used to associate a signal to an asset group. */
	export interface GoogleAdsSearchads360V0Resources__AssetGroup {

		/** Output only. Overall ad strength of this asset group. */
		adStrength?: GoogleAdsSearchads360V0Resources__AssetGroupAdStrength | null;

		/** Immutable. The campaign with which this asset group is associated. The asset which is linked to the asset group. */
		campaign?: string | null;

		/** A list of final mobile URLs after all cross domain redirects. In performance max, by default, the urls are eligible for expansion unless opted out. */
		finalMobileUrls?: Array<string>;

		/** A list of final URLs after all cross domain redirects. In performance max, by default, the urls are eligible for expansion unless opted out. */
		finalUrls?: Array<string>;

		/** Output only. The ID of the asset group. */
		id?: string | null;

		/** Required. Name of the asset group. Required. It must have a minimum length of 1 and maximum length of 128. It must be unique under a campaign. */
		name?: string | null;

		/** First part of text that may appear appended to the url displayed in the ad. */
		path1?: string | null;

		/** Second part of text that may appear appended to the url displayed in the ad. This field can only be set when path1 is set. */
		path2?: string | null;

		/** Immutable. The resource name of the asset group. Asset group resource names have the form: `customers/{customer_id}/assetGroups/{asset_group_id}` */
		resourceName?: string | null;

		/** The status of the asset group. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupStatus | null;
	}

	/** An asset group. AssetGroupAsset is used to link an asset to the asset group. AssetGroupSignal is used to associate a signal to an asset group. */
	export interface GoogleAdsSearchads360V0Resources__AssetGroupFormProperties {

		/** Output only. Overall ad strength of this asset group. */
		adStrength: FormControl<GoogleAdsSearchads360V0Resources__AssetGroupAdStrength | null | undefined>,

		/** Immutable. The campaign with which this asset group is associated. The asset which is linked to the asset group. */
		campaign: FormControl<string | null | undefined>,

		/** Output only. The ID of the asset group. */
		id: FormControl<string | null | undefined>,

		/** Required. Name of the asset group. Required. It must have a minimum length of 1 and maximum length of 128. It must be unique under a campaign. */
		name: FormControl<string | null | undefined>,

		/** First part of text that may appear appended to the url displayed in the ad. */
		path1: FormControl<string | null | undefined>,

		/** Second part of text that may appear appended to the url displayed in the ad. This field can only be set when path1 is set. */
		path2: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the asset group. Asset group resource names have the form: `customers/{customer_id}/assetGroups/{asset_group_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** The status of the asset group. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupStatus | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AssetGroupFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AssetGroupFormProperties>({
			adStrength: new FormControl<GoogleAdsSearchads360V0Resources__AssetGroupAdStrength | null | undefined>(undefined),
			campaign: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path1: new FormControl<string | null | undefined>(undefined),
			path2: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupStatus | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__AssetGroupAdStrength { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', PENDING = 'PENDING', NO_ADS = 'NO_ADS', POOR = 'POOR', AVERAGE = 'AVERAGE', GOOD = 'GOOD', EXCELLENT = 'EXCELLENT' }


	/** AssetGroupAsset is the link between an asset and an asset group. Adding an AssetGroupAsset links an asset with an asset group. */
	export interface GoogleAdsSearchads360V0Resources__AssetGroupAsset {

		/** Immutable. The asset which this asset group asset is linking. */
		asset?: string | null;

		/** Immutable. The asset group which this asset group asset is linking. */
		assetGroup?: string | null;

		/** The description of the placement of the asset within the asset group. For example: HEADLINE, YOUTUBE_VIDEO etc */
		fieldType?: GoogleAdsSearchads360V0Resources__AssetGroupAssetFieldType | null;

		/** Immutable. The resource name of the asset group asset. Asset group asset resource name have the form: `customers/{customer_id}/assetGroupAssets/{asset_group_id}~{asset_id}~{field_type}` */
		resourceName?: string | null;

		/** The status of the link between an asset and asset group. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupAssetStatus | null;
	}

	/** AssetGroupAsset is the link between an asset and an asset group. Adding an AssetGroupAsset links an asset with an asset group. */
	export interface GoogleAdsSearchads360V0Resources__AssetGroupAssetFormProperties {

		/** Immutable. The asset which this asset group asset is linking. */
		asset: FormControl<string | null | undefined>,

		/** Immutable. The asset group which this asset group asset is linking. */
		assetGroup: FormControl<string | null | undefined>,

		/** The description of the placement of the asset within the asset group. For example: HEADLINE, YOUTUBE_VIDEO etc */
		fieldType: FormControl<GoogleAdsSearchads360V0Resources__AssetGroupAssetFieldType | null | undefined>,

		/** Immutable. The resource name of the asset group asset. Asset group asset resource name have the form: `customers/{customer_id}/assetGroupAssets/{asset_group_id}~{asset_id}~{field_type}` */
		resourceName: FormControl<string | null | undefined>,

		/** The status of the link between an asset and asset group. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetStatus | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AssetGroupAssetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AssetGroupAssetFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
			assetGroup: new FormControl<string | null | undefined>(undefined),
			fieldType: new FormControl<GoogleAdsSearchads360V0Resources__AssetGroupAssetFieldType | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetStatus | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__AssetGroupAssetFieldType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', HEADLINE = 'HEADLINE', DESCRIPTION = 'DESCRIPTION', MANDATORY_AD_TEXT = 'MANDATORY_AD_TEXT', MARKETING_IMAGE = 'MARKETING_IMAGE', MEDIA_BUNDLE = 'MEDIA_BUNDLE', YOUTUBE_VIDEO = 'YOUTUBE_VIDEO', BOOK_ON_GOOGLE = 'BOOK_ON_GOOGLE', LEAD_FORM = 'LEAD_FORM', PROMOTION = 'PROMOTION', CALLOUT = 'CALLOUT', STRUCTURED_SNIPPET = 'STRUCTURED_SNIPPET', SITELINK = 'SITELINK', MOBILE_APP = 'MOBILE_APP', HOTEL_CALLOUT = 'HOTEL_CALLOUT', CALL = 'CALL', PRICE = 'PRICE', LONG_HEADLINE = 'LONG_HEADLINE', BUSINESS_NAME = 'BUSINESS_NAME', SQUARE_MARKETING_IMAGE = 'SQUARE_MARKETING_IMAGE', PORTRAIT_MARKETING_IMAGE = 'PORTRAIT_MARKETING_IMAGE', LOGO = 'LOGO', LANDSCAPE_LOGO = 'LANDSCAPE_LOGO', VIDEO = 'VIDEO', CALL_TO_ACTION_SELECTION = 'CALL_TO_ACTION_SELECTION', AD_IMAGE = 'AD_IMAGE', BUSINESS_LOGO = 'BUSINESS_LOGO', HOTEL_PROPERTY = 'HOTEL_PROPERTY' }


	/** Asset group asset combination data */
	export interface GoogleAdsSearchads360V0Resources__AssetGroupAssetCombinationData {

		/** Output only. Served assets. */
		assetCombinationServedAssets?: Array<GoogleAdsSearchads360V0Common__AssetUsage>;
	}

	/** Asset group asset combination data */
	export interface GoogleAdsSearchads360V0Resources__AssetGroupAssetCombinationDataFormProperties {
	}
	export function CreateGoogleAdsSearchads360V0Resources__AssetGroupAssetCombinationDataFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AssetGroupAssetCombinationDataFormProperties>({
		});

	}


	/** AssetGroupListingGroupFilter represents a listing group filter tree node in an asset group. */
	export interface GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilter {

		/** Immutable. The asset group which this asset group listing group filter is part of. */
		assetGroup?: string | null;

		/** Listing dimensions for the asset group listing group filter. */
		caseValue?: GoogleAdsSearchads360V0Resources__ListingGroupFilterDimension;

		/** Output only. The ID of the ListingGroupFilter. */
		id?: string | null;

		/** Immutable. Resource name of the parent listing group subdivision. Null for the root listing group filter node. */
		parentListingGroupFilter?: string | null;

		/** The path defining of dimensions defining a listing group filter. */
		path?: GoogleAdsSearchads360V0Resources__ListingGroupFilterDimensionPath;

		/** Immutable. The resource name of the asset group listing group filter. Asset group listing group filter resource name have the form: `customers/{customer_id}/assetGroupListingGroupFilters/{asset_group_id}~{listing_group_filter_id}` */
		resourceName?: string | null;

		/** Immutable. Type of a listing group filter node. */
		type?: GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilterType | null;

		/** Immutable. The vertical the current node tree represents. All nodes in the same tree must belong to the same vertical. */
		vertical?: GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilterVertical | null;
	}

	/** AssetGroupListingGroupFilter represents a listing group filter tree node in an asset group. */
	export interface GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilterFormProperties {

		/** Immutable. The asset group which this asset group listing group filter is part of. */
		assetGroup: FormControl<string | null | undefined>,

		/** Output only. The ID of the ListingGroupFilter. */
		id: FormControl<string | null | undefined>,

		/** Immutable. Resource name of the parent listing group subdivision. Null for the root listing group filter node. */
		parentListingGroupFilter: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the asset group listing group filter. Asset group listing group filter resource name have the form: `customers/{customer_id}/assetGroupListingGroupFilters/{asset_group_id}~{listing_group_filter_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Immutable. Type of a listing group filter node. */
		type: FormControl<GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilterType | null | undefined>,

		/** Immutable. The vertical the current node tree represents. All nodes in the same tree must belong to the same vertical. */
		vertical: FormControl<GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilterVertical | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilterFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilterFormProperties>({
			assetGroup: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			parentListingGroupFilter: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilterType | null | undefined>(undefined),
			vertical: new FormControl<GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilterVertical | null | undefined>(undefined),
		});

	}


	/** Listing dimensions for the asset group listing group filter. */
	export interface GoogleAdsSearchads360V0Resources__ListingGroupFilterDimension {

		/** One element of a bidding category at a certain level. Top-level categories are at level 1, their children at level 2, and so on. We currently support up to 5 levels. The user must specify a dimension type that indicates the level of the category. All cases of the same subdivision must have the same dimension type (category level). */
		productBiddingCategory?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategory;

		/** Brand of the product. */
		productBrand?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBrand;

		/** Locality of a product offer. */
		productChannel?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductChannel;

		/** Condition of a product offer. */
		productCondition?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCondition;

		/** Custom attribute of a product offer. */
		productCustomAttribute?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductCustomAttribute;

		/** Item id of a product offer. */
		productItemId?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductItemId;

		/** Type of a product offer. */
		productType?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductType;
	}

	/** Listing dimensions for the asset group listing group filter. */
	export interface GoogleAdsSearchads360V0Resources__ListingGroupFilterDimensionFormProperties {
	}
	export function CreateGoogleAdsSearchads360V0Resources__ListingGroupFilterDimensionFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__ListingGroupFilterDimensionFormProperties>({
		});

	}


	/** The path defining of dimensions defining a listing group filter. */
	export interface GoogleAdsSearchads360V0Resources__ListingGroupFilterDimensionPath {

		/** Output only. The complete path of dimensions through the listing group filter hierarchy (excluding the root node) to this listing group filter. */
		dimensions?: Array<GoogleAdsSearchads360V0Resources__ListingGroupFilterDimension>;
	}

	/** The path defining of dimensions defining a listing group filter. */
	export interface GoogleAdsSearchads360V0Resources__ListingGroupFilterDimensionPathFormProperties {
	}
	export function CreateGoogleAdsSearchads360V0Resources__ListingGroupFilterDimensionPathFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__ListingGroupFilterDimensionPathFormProperties>({
		});

	}

	export enum GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilterType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', SUBDIVISION = 'SUBDIVISION', UNIT_INCLUDED = 'UNIT_INCLUDED', UNIT_EXCLUDED = 'UNIT_EXCLUDED' }

	export enum GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilterVertical { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', SHOPPING = 'SHOPPING' }


	/** AssetGroupSignal represents a signal in an asset group. The existence of a signal tells the performance max campaign who's most likely to convert. Performance Max uses the signal to look for new people with similar or stronger intent to find conversions across Search, Display, Video, and more. */
	export interface GoogleAdsSearchads360V0Resources__AssetGroupSignal {

		/** Immutable. The asset group which this asset group signal belongs to. */
		assetGroup?: string | null;

		/** An audience criterion. */
		audience?: GoogleAdsSearchads360V0Common__AudienceInfo;

		/** Immutable. The resource name of the asset group signal. Asset group signal resource name have the form: `customers/{customer_id}/assetGroupSignals/{asset_group_id}~{signal_id}` */
		resourceName?: string | null;
	}

	/** AssetGroupSignal represents a signal in an asset group. The existence of a signal tells the performance max campaign who's most likely to convert. Performance Max uses the signal to look for new people with similar or stronger intent to find conversions across Search, Display, Video, and more. */
	export interface GoogleAdsSearchads360V0Resources__AssetGroupSignalFormProperties {

		/** Immutable. The asset group which this asset group signal belongs to. */
		assetGroup: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the asset group signal. Asset group signal resource name have the form: `customers/{customer_id}/assetGroupSignals/{asset_group_id}~{signal_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AssetGroupSignalFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AssetGroupSignalFormProperties>({
			assetGroup: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A view on the usage of ad group ad asset combination. */
	export interface GoogleAdsSearchads360V0Resources__AssetGroupTopCombinationView {

		/** Output only. The top combinations of assets that served together. */
		assetGroupTopCombinations?: Array<GoogleAdsSearchads360V0Resources__AssetGroupAssetCombinationData>;

		/** Output only. The resource name of the asset group top combination view. AssetGroup Top Combination view resource names have the form: `"customers/{customer_id}/assetGroupTopCombinationViews/{asset_group_id}~{asset_combination_category}" */
		resourceName?: string | null;
	}

	/** A view on the usage of ad group ad asset combination. */
	export interface GoogleAdsSearchads360V0Resources__AssetGroupTopCombinationViewFormProperties {

		/** Output only. The resource name of the asset group top combination view. AssetGroup Top Combination view resource names have the form: `"customers/{customer_id}/assetGroupTopCombinationViews/{asset_group_id}~{asset_combination_category}" */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AssetGroupTopCombinationViewFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AssetGroupTopCombinationViewFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An asset set representing a collection of assets. Use AssetSetAsset to link an asset to the asset set. */
	export interface GoogleAdsSearchads360V0Resources__AssetSet {

		/** Output only. The ID of the asset set. */
		id?: string | null;

		/** Immutable. The resource name of the asset set. Asset set resource names have the form: `customers/{customer_id}/assetSets/{asset_set_id}` */
		resourceName?: string | null;
	}

	/** An asset set representing a collection of assets. Use AssetSetAsset to link an asset to the asset set. */
	export interface GoogleAdsSearchads360V0Resources__AssetSetFormProperties {

		/** Output only. The ID of the asset set. */
		id: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the asset set. Asset set resource names have the form: `customers/{customer_id}/assetSets/{asset_set_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AssetSetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AssetSetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AssetSetAsset is the link between an asset and an asset set. Adding an AssetSetAsset links an asset with an asset set. */
	export interface GoogleAdsSearchads360V0Resources__AssetSetAsset {

		/** Immutable. The asset which this asset set asset is linking to. */
		asset?: string | null;

		/** Immutable. The asset set which this asset set asset is linking to. */
		assetSet?: string | null;

		/** Immutable. The resource name of the asset set asset. Asset set asset resource names have the form: `customers/{customer_id}/assetSetAssets/{asset_set_id}~{asset_id}` */
		resourceName?: string | null;

		/** Output only. The status of the asset set asset. Read-only. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null;
	}

	/** AssetSetAsset is the link between an asset and an asset set. Adding an AssetSetAsset links an asset with an asset set. */
	export interface GoogleAdsSearchads360V0Resources__AssetSetAssetFormProperties {

		/** Immutable. The asset which this asset set asset is linking to. */
		asset: FormControl<string | null | undefined>,

		/** Immutable. The asset set which this asset set asset is linking to. */
		assetSet: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the asset set asset. Asset set asset resource names have the form: `customers/{customer_id}/assetSetAssets/{asset_set_id}~{asset_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. The status of the asset set asset. Read-only. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AssetSetAssetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AssetSetAssetFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
			assetSet: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null | undefined>(undefined),
		});

	}


	/** Audience is an effective targeting option that lets you intersect different segment attributes, such as detailed demographics and affinities, to create audiences that represent sections of your target segments. */
	export interface GoogleAdsSearchads360V0Resources__Audience {

		/** Description of this audience. */
		description?: string | null;

		/** Output only. ID of the audience. */
		id?: string | null;

		/** Required. Name of the audience. It should be unique across all audiences. It must have a minimum length of 1 and maximum length of 255. */
		name?: string | null;

		/** Immutable. The resource name of the audience. Audience names have the form: `customers/{customer_id}/audiences/{audience_id}` */
		resourceName?: string | null;
	}

	/** Audience is an effective targeting option that lets you intersect different segment attributes, such as detailed demographics and affinities, to create audiences that represent sections of your target segments. */
	export interface GoogleAdsSearchads360V0Resources__AudienceFormProperties {

		/** Description of this audience. */
		description: FormControl<string | null | undefined>,

		/** Output only. ID of the audience. */
		id: FormControl<string | null | undefined>,

		/** Required. Name of the audience. It should be unique across all audiences. It must have a minimum length of 1 and maximum length of 255. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the audience. Audience names have the form: `customers/{customer_id}/audiences/{audience_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__AudienceFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__AudienceFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A bidding strategy. */
	export interface GoogleAdsSearchads360V0Resources__BiddingStrategy {

		/** Output only. The number of campaigns attached to this bidding strategy. This field is read-only. */
		campaignCount?: string | null;

		/** Immutable. The currency used by the bidding strategy (ISO 4217 three-letter code). For bidding strategies in manager customers, this currency can be set on creation and defaults to the manager customer's currency. For serving customers, this field cannot be set; all strategies in a serving customer implicitly use the serving customer's currency. In all cases the effective_currency_code field returns the currency used by the strategy. */
		currencyCode?: string | null;

		/** Output only. The currency used by the bidding strategy (ISO 4217 three-letter code). For bidding strategies in manager customers, this is the currency set by the advertiser when creating the strategy. For serving customers, this is the customer's currency_code. Bidding strategy metrics are reported in this currency. This field is read-only. */
		effectiveCurrencyCode?: string | null;

		/** An automated bidding strategy that raises bids for clicks that seem more likely to lead to a conversion and lowers them for clicks where they seem less likely. This bidding strategy is deprecated and cannot be created anymore. Use ManualCpc with enhanced_cpc_enabled set to true for equivalent functionality. */
		enhancedCpc?: GoogleAdsSearchads360V0Common__EnhancedCpc;

		/** Output only. The ID of the bidding strategy. */
		id?: string | null;

		/** An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget. */
		maximizeConversionValue?: GoogleAdsSearchads360V0Common__MaximizeConversionValue;

		/** An automated bidding strategy to help get the most conversions for your campaigns while spending your budget. */
		maximizeConversions?: GoogleAdsSearchads360V0Common__MaximizeConversions;

		/** The name of the bidding strategy. All bidding strategies within an account must be named distinctly. The length of this string should be between 1 and 255, inclusive, in UTF-8 bytes, (trimmed). */
		name?: string | null;

		/** Output only. The number of non-removed campaigns attached to this bidding strategy. This field is read-only. */
		nonRemovedCampaignCount?: string | null;

		/** Immutable. The resource name of the bidding strategy. Bidding strategy resource names have the form: `customers/{customer_id}/biddingStrategies/{bidding_strategy_id}` */
		resourceName?: string | null;

		/** Output only. The status of the bidding strategy. This field is read-only. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null;

		/** An automated bid strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set. */
		targetCpa?: GoogleAdsSearchads360V0Common__TargetCpa;

		/** An automated bidding strategy that sets bids so that a certain percentage of search ads are shown at the top of the first page (or other targeted location). */
		targetImpressionShare?: GoogleAdsSearchads360V0Common__TargetImpressionShare;

		/** An automated bidding strategy that sets bids based on the target fraction of auctions where the advertiser should outrank a specific competitor. This strategy is deprecated. */
		targetOutrankShare?: GoogleAdsSearchads360V0Common__TargetOutrankShare;

		/** An automated bidding strategy that helps you maximize revenue while averaging a specific target return on ad spend (ROAS). */
		targetRoas?: GoogleAdsSearchads360V0Common__TargetRoas;

		/** An automated bid strategy that sets your bids to help get as many clicks as possible within your budget. */
		targetSpend?: GoogleAdsSearchads360V0Common__TargetSpend;

		/** Output only. The type of the bidding strategy. Create a bidding strategy by setting the bidding scheme. This field is read-only. */
		type?: GoogleAdsSearchads360V0Resources__BiddingStrategyType | null;
	}

	/** A bidding strategy. */
	export interface GoogleAdsSearchads360V0Resources__BiddingStrategyFormProperties {

		/** Output only. The number of campaigns attached to this bidding strategy. This field is read-only. */
		campaignCount: FormControl<string | null | undefined>,

		/** Immutable. The currency used by the bidding strategy (ISO 4217 three-letter code). For bidding strategies in manager customers, this currency can be set on creation and defaults to the manager customer's currency. For serving customers, this field cannot be set; all strategies in a serving customer implicitly use the serving customer's currency. In all cases the effective_currency_code field returns the currency used by the strategy. */
		currencyCode: FormControl<string | null | undefined>,

		/** Output only. The currency used by the bidding strategy (ISO 4217 three-letter code). For bidding strategies in manager customers, this is the currency set by the advertiser when creating the strategy. For serving customers, this is the customer's currency_code. Bidding strategy metrics are reported in this currency. This field is read-only. */
		effectiveCurrencyCode: FormControl<string | null | undefined>,

		/** Output only. The ID of the bidding strategy. */
		id: FormControl<string | null | undefined>,

		/** The name of the bidding strategy. All bidding strategies within an account must be named distinctly. The length of this string should be between 1 and 255, inclusive, in UTF-8 bytes, (trimmed). */
		name: FormControl<string | null | undefined>,

		/** Output only. The number of non-removed campaigns attached to this bidding strategy. This field is read-only. */
		nonRemovedCampaignCount: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the bidding strategy. Bidding strategy resource names have the form: `customers/{customer_id}/biddingStrategies/{bidding_strategy_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. The status of the bidding strategy. This field is read-only. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null | undefined>,

		/** Output only. The type of the bidding strategy. Create a bidding strategy by setting the bidding scheme. This field is read-only. */
		type: FormControl<GoogleAdsSearchads360V0Resources__BiddingStrategyType | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__BiddingStrategyFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__BiddingStrategyFormProperties>({
			campaignCount: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			effectiveCurrencyCode: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nonRemovedCampaignCount: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null | undefined>(undefined),
			type: new FormControl<GoogleAdsSearchads360V0Resources__BiddingStrategyType | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__BiddingStrategyType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', COMMISSION = 'COMMISSION', ENHANCED_CPC = 'ENHANCED_CPC', INVALID = 'INVALID', MANUAL_CPA = 'MANUAL_CPA', MANUAL_CPC = 'MANUAL_CPC', MANUAL_CPM = 'MANUAL_CPM', MANUAL_CPV = 'MANUAL_CPV', MAXIMIZE_CONVERSIONS = 'MAXIMIZE_CONVERSIONS', MAXIMIZE_CONVERSION_VALUE = 'MAXIMIZE_CONVERSION_VALUE', PAGE_ONE_PROMOTED = 'PAGE_ONE_PROMOTED', PERCENT_CPC = 'PERCENT_CPC', TARGET_CPA = 'TARGET_CPA', TARGET_CPM = 'TARGET_CPM', TARGET_IMPRESSION_SHARE = 'TARGET_IMPRESSION_SHARE', TARGET_OUTRANK_SHARE = 'TARGET_OUTRANK_SHARE', TARGET_ROAS = 'TARGET_ROAS', TARGET_SPEND = 'TARGET_SPEND' }


	/** A campaign. */
	export interface GoogleAdsSearchads360V0Resources__Campaign {

		/** The ad serving optimization status of the campaign. */
		adServingOptimizationStatus?: GoogleAdsSearchads360V0Resources__CampaignAdServingOptimizationStatus | null;

		/** Immutable. Optional refinement to `advertising_channel_type`. Must be a valid sub-type of the parent channel type. Can be set only when creating campaigns. After campaign is created, the field can not be changed. */
		advertisingChannelSubType?: GoogleAdsSearchads360V0Resources__CampaignAdvertisingChannelSubType | null;

		/** Immutable. The primary serving target for ads within the campaign. The targeting options can be refined in `network_settings`. This field is required and should not be empty when creating new campaigns. Can be set only when creating campaigns. After the campaign is created, the field can not be changed. */
		advertisingChannelType?: GoogleAdsSearchads360V0Resources__CampaignAdvertisingChannelType | null;

		/** Portfolio bidding strategy used by campaign. */
		biddingStrategy?: string | null;

		/** Output only. The system status of the campaign's bidding strategy. */
		biddingStrategySystemStatus?: GoogleAdsSearchads360V0Resources__CampaignBiddingStrategySystemStatus | null;

		/** Output only. The type of bidding strategy. A bidding strategy can be created by setting either the bidding scheme to create a standard bidding strategy or the `bidding_strategy` field to create a portfolio bidding strategy. This field is read-only. */
		biddingStrategyType?: GoogleAdsSearchads360V0Resources__BiddingStrategyType | null;

		/** The budget of the campaign. */
		campaignBudget?: string | null;

		/** Output only. The timestamp when this campaign was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. create_time will be deprecated in v1. Use creation_time instead. */
		createTime?: string | null;

		/** Output only. The timestamp when this campaign was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
		creationTime?: string | null;

		/** The setting for controlling Dynamic Search Ads (DSA). */
		dynamicSearchAdsSetting?: GoogleAdsSearchads360V0Resources_Campaign_DynamicSearchAdsSetting;

		/** The last day of the campaign in serving customer's timezone in YYYY-MM-DD format. On create, defaults to 2037-12-30, which means the campaign will run indefinitely. To set an existing campaign to run indefinitely, set this field to 2037-12-30. */
		endDate?: string | null;

		/** Output only. ID of the campaign in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use "campaign.id" instead. */
		engineId?: string | null;

		/** The asset field types that should be excluded from this campaign. Asset links with these field types will not be inherited by this campaign from the upper level. */
		excludedParentAssetFieldTypes?: Array<GoogleAdsSearchads360V0Resources__AssetGroupAssetFieldType>;

		/** Suffix used to append query parameters to landing pages that are served with parallel tracking. */
		finalUrlSuffix?: string | null;

		/** A list that limits how often each user will see this campaign's ads. */
		frequencyCaps?: Array<GoogleAdsSearchads360V0Common__FrequencyCapEntry>;

		/** Represents a collection of settings related to ads geotargeting. */
		geoTargetTypeSetting?: GoogleAdsSearchads360V0Resources_Campaign_GeoTargetTypeSetting;

		/** Output only. The ID of the campaign. */
		id?: string | null;

		/** Output only. The resource names of labels attached to this campaign. */
		labels?: Array<string>;

		/** Output only. The datetime when this campaign was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
		lastModifiedTime?: string | null;

		/** Manual bidding strategy that allows advertiser to set the bid per advertiser-specified action. */
		manualCpa?: GoogleAdsSearchads360V0Common__ManualCpa;

		/** Manual click-based bidding where user pays per click. */
		manualCpc?: GoogleAdsSearchads360V0Common__ManualCpc;

		/** Manual impression-based bidding where user pays per thousand impressions. */
		manualCpm?: GoogleAdsSearchads360V0Common__ManualCpm;

		/** An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget. */
		maximizeConversionValue?: GoogleAdsSearchads360V0Common__MaximizeConversionValue;

		/** An automated bidding strategy to help get the most conversions for your campaigns while spending your budget. */
		maximizeConversions?: GoogleAdsSearchads360V0Common__MaximizeConversions;

		/** The name of the campaign. This field is required and should not be empty when creating new campaigns. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters. */
		name?: string | null;

		/** The network settings for the campaign. */
		networkSettings?: GoogleAdsSearchads360V0Resources_Campaign_NetworkSettings;

		/** Optimization goal setting for this campaign, which includes a set of optimization goal types. */
		optimizationGoalSetting?: GoogleAdsSearchads360V0Resources_Campaign_OptimizationGoalSetting;

		/** A bidding strategy where bids are a fraction of the advertised price for some good or service. */
		percentCpc?: GoogleAdsSearchads360V0Common__PercentCpc;

		/** Settings for Real-Time Bidding, a feature only available for campaigns targeting the Ad Exchange network. */
		realTimeBiddingSetting?: GoogleAdsSearchads360V0Common__RealTimeBiddingSetting;

		/** Immutable. The resource name of the campaign. Campaign resource names have the form: `customers/{customer_id}/campaigns/{campaign_id}` */
		resourceName?: string | null;

		/** Selective optimization setting for this campaign, which includes a set of conversion actions to optimize this campaign towards. This feature only applies to app campaigns that use MULTI_CHANNEL as AdvertisingChannelType and APP_CAMPAIGN or APP_CAMPAIGN_FOR_ENGAGEMENT as AdvertisingChannelSubType. */
		selectiveOptimization?: GoogleAdsSearchads360V0Resources_Campaign_SelectiveOptimization;

		/** Output only. The ad serving status of the campaign. */
		servingStatus?: GoogleAdsSearchads360V0Resources__CampaignServingStatus | null;

		/** The setting for Shopping campaigns. Defines the universe of products that can be advertised by the campaign, and how this campaign interacts with other Shopping campaigns. */
		shoppingSetting?: GoogleAdsSearchads360V0Resources_Campaign_ShoppingSetting;

		/** The date when campaign started in serving customer's timezone in YYYY-MM-DD format. */
		startDate?: string | null;

		/** The status of the campaign. When a new campaign is added, the status defaults to ENABLED. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupStatus | null;

		/** An automated bid strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set. */
		targetCpa?: GoogleAdsSearchads360V0Common__TargetCpa;

		/** Target CPM (cost per thousand impressions) is an automated bidding strategy that sets bids to optimize performance given the target CPM you set. */
		targetCpm?: GoogleAdsSearchads360V0Common__TargetCpm;

		/** An automated bidding strategy that sets bids so that a certain percentage of search ads are shown at the top of the first page (or other targeted location). */
		targetImpressionShare?: GoogleAdsSearchads360V0Common__TargetImpressionShare;

		/** An automated bidding strategy that helps you maximize revenue while averaging a specific target return on ad spend (ROAS). */
		targetRoas?: GoogleAdsSearchads360V0Common__TargetRoas;

		/** An automated bid strategy that sets your bids to help get as many clicks as possible within your budget. */
		targetSpend?: GoogleAdsSearchads360V0Common__TargetSpend;

		/** Campaign-level settings for tracking information. */
		trackingSetting?: GoogleAdsSearchads360V0Resources_Campaign_TrackingSetting;

		/** The URL template for constructing a tracking URL. */
		trackingUrlTemplate?: string | null;

		/** The list of mappings used to substitute custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`. */
		urlCustomParameters?: Array<GoogleAdsSearchads360V0Common__CustomParameter>;

		/** Represents opting out of URL expansion to more targeted URLs. If opted out (true), only the final URLs in the asset group or URLs specified in the advertiser's Google Merchant Center or business data feeds are targeted. If opted in (false), the entire domain will be targeted. This field can only be set for Performance Max campaigns, where the default value is false. */
		urlExpansionOptOut?: boolean | null;
	}

	/** A campaign. */
	export interface GoogleAdsSearchads360V0Resources__CampaignFormProperties {

		/** The ad serving optimization status of the campaign. */
		adServingOptimizationStatus: FormControl<GoogleAdsSearchads360V0Resources__CampaignAdServingOptimizationStatus | null | undefined>,

		/** Immutable. Optional refinement to `advertising_channel_type`. Must be a valid sub-type of the parent channel type. Can be set only when creating campaigns. After campaign is created, the field can not be changed. */
		advertisingChannelSubType: FormControl<GoogleAdsSearchads360V0Resources__CampaignAdvertisingChannelSubType | null | undefined>,

		/** Immutable. The primary serving target for ads within the campaign. The targeting options can be refined in `network_settings`. This field is required and should not be empty when creating new campaigns. Can be set only when creating campaigns. After the campaign is created, the field can not be changed. */
		advertisingChannelType: FormControl<GoogleAdsSearchads360V0Resources__CampaignAdvertisingChannelType | null | undefined>,

		/** Portfolio bidding strategy used by campaign. */
		biddingStrategy: FormControl<string | null | undefined>,

		/** Output only. The system status of the campaign's bidding strategy. */
		biddingStrategySystemStatus: FormControl<GoogleAdsSearchads360V0Resources__CampaignBiddingStrategySystemStatus | null | undefined>,

		/** Output only. The type of bidding strategy. A bidding strategy can be created by setting either the bidding scheme to create a standard bidding strategy or the `bidding_strategy` field to create a portfolio bidding strategy. This field is read-only. */
		biddingStrategyType: FormControl<GoogleAdsSearchads360V0Resources__BiddingStrategyType | null | undefined>,

		/** The budget of the campaign. */
		campaignBudget: FormControl<string | null | undefined>,

		/** Output only. The timestamp when this campaign was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. create_time will be deprecated in v1. Use creation_time instead. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The timestamp when this campaign was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
		creationTime: FormControl<string | null | undefined>,

		/** The last day of the campaign in serving customer's timezone in YYYY-MM-DD format. On create, defaults to 2037-12-30, which means the campaign will run indefinitely. To set an existing campaign to run indefinitely, set this field to 2037-12-30. */
		endDate: FormControl<string | null | undefined>,

		/** Output only. ID of the campaign in the external engine account. This field is for non-Google Ads account only, for example, Yahoo Japan, Microsoft, Baidu etc. For Google Ads entity, use "campaign.id" instead. */
		engineId: FormControl<string | null | undefined>,

		/** Suffix used to append query parameters to landing pages that are served with parallel tracking. */
		finalUrlSuffix: FormControl<string | null | undefined>,

		/** Output only. The ID of the campaign. */
		id: FormControl<string | null | undefined>,

		/** Output only. The datetime when this campaign was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** The name of the campaign. This field is required and should not be empty when creating new campaigns. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the campaign. Campaign resource names have the form: `customers/{customer_id}/campaigns/{campaign_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. The ad serving status of the campaign. */
		servingStatus: FormControl<GoogleAdsSearchads360V0Resources__CampaignServingStatus | null | undefined>,

		/** The date when campaign started in serving customer's timezone in YYYY-MM-DD format. */
		startDate: FormControl<string | null | undefined>,

		/** The status of the campaign. When a new campaign is added, the status defaults to ENABLED. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupStatus | null | undefined>,

		/** The URL template for constructing a tracking URL. */
		trackingUrlTemplate: FormControl<string | null | undefined>,

		/** Represents opting out of URL expansion to more targeted URLs. If opted out (true), only the final URLs in the asset group or URLs specified in the advertiser's Google Merchant Center or business data feeds are targeted. If opted in (false), the entire domain will be targeted. This field can only be set for Performance Max campaigns, where the default value is false. */
		urlExpansionOptOut: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__CampaignFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__CampaignFormProperties>({
			adServingOptimizationStatus: new FormControl<GoogleAdsSearchads360V0Resources__CampaignAdServingOptimizationStatus | null | undefined>(undefined),
			advertisingChannelSubType: new FormControl<GoogleAdsSearchads360V0Resources__CampaignAdvertisingChannelSubType | null | undefined>(undefined),
			advertisingChannelType: new FormControl<GoogleAdsSearchads360V0Resources__CampaignAdvertisingChannelType | null | undefined>(undefined),
			biddingStrategy: new FormControl<string | null | undefined>(undefined),
			biddingStrategySystemStatus: new FormControl<GoogleAdsSearchads360V0Resources__CampaignBiddingStrategySystemStatus | null | undefined>(undefined),
			biddingStrategyType: new FormControl<GoogleAdsSearchads360V0Resources__BiddingStrategyType | null | undefined>(undefined),
			campaignBudget: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			engineId: new FormControl<string | null | undefined>(undefined),
			finalUrlSuffix: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			servingStatus: new FormControl<GoogleAdsSearchads360V0Resources__CampaignServingStatus | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupStatus | null | undefined>(undefined),
			trackingUrlTemplate: new FormControl<string | null | undefined>(undefined),
			urlExpansionOptOut: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__CampaignAdServingOptimizationStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', OPTIMIZE = 'OPTIMIZE', CONVERSION_OPTIMIZE = 'CONVERSION_OPTIMIZE', ROTATE = 'ROTATE', ROTATE_INDEFINITELY = 'ROTATE_INDEFINITELY', UNAVAILABLE = 'UNAVAILABLE' }

	export enum GoogleAdsSearchads360V0Resources__CampaignAdvertisingChannelSubType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', SEARCH_MOBILE_APP = 'SEARCH_MOBILE_APP', DISPLAY_MOBILE_APP = 'DISPLAY_MOBILE_APP', SEARCH_EXPRESS = 'SEARCH_EXPRESS', DISPLAY_EXPRESS = 'DISPLAY_EXPRESS', SHOPPING_SMART_ADS = 'SHOPPING_SMART_ADS', DISPLAY_GMAIL_AD = 'DISPLAY_GMAIL_AD', DISPLAY_SMART_CAMPAIGN = 'DISPLAY_SMART_CAMPAIGN', VIDEO_OUTSTREAM = 'VIDEO_OUTSTREAM', VIDEO_ACTION = 'VIDEO_ACTION', VIDEO_NON_SKIPPABLE = 'VIDEO_NON_SKIPPABLE', APP_CAMPAIGN = 'APP_CAMPAIGN', APP_CAMPAIGN_FOR_ENGAGEMENT = 'APP_CAMPAIGN_FOR_ENGAGEMENT', LOCAL_CAMPAIGN = 'LOCAL_CAMPAIGN', SHOPPING_COMPARISON_LISTING_ADS = 'SHOPPING_COMPARISON_LISTING_ADS', SMART_CAMPAIGN = 'SMART_CAMPAIGN', VIDEO_SEQUENCE = 'VIDEO_SEQUENCE', APP_CAMPAIGN_FOR_PRE_REGISTRATION = 'APP_CAMPAIGN_FOR_PRE_REGISTRATION', VIDEO_REACH_TARGET_FREQUENCY = 'VIDEO_REACH_TARGET_FREQUENCY', TRAVEL_ACTIVITIES = 'TRAVEL_ACTIVITIES' }

	export enum GoogleAdsSearchads360V0Resources__CampaignAdvertisingChannelType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', SEARCH = 'SEARCH', DISPLAY = 'DISPLAY', SHOPPING = 'SHOPPING', HOTEL = 'HOTEL', VIDEO = 'VIDEO', MULTI_CHANNEL = 'MULTI_CHANNEL', LOCAL = 'LOCAL', SMART = 'SMART', PERFORMANCE_MAX = 'PERFORMANCE_MAX', LOCAL_SERVICES = 'LOCAL_SERVICES', DISCOVERY = 'DISCOVERY', TRAVEL = 'TRAVEL' }

	export enum GoogleAdsSearchads360V0Resources__CampaignBiddingStrategySystemStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', ENABLED = 'ENABLED', LEARNING_NEW = 'LEARNING_NEW', LEARNING_SETTING_CHANGE = 'LEARNING_SETTING_CHANGE', LEARNING_BUDGET_CHANGE = 'LEARNING_BUDGET_CHANGE', LEARNING_COMPOSITION_CHANGE = 'LEARNING_COMPOSITION_CHANGE', LEARNING_CONVERSION_TYPE_CHANGE = 'LEARNING_CONVERSION_TYPE_CHANGE', LEARNING_CONVERSION_SETTING_CHANGE = 'LEARNING_CONVERSION_SETTING_CHANGE', LIMITED_BY_CPC_BID_CEILING = 'LIMITED_BY_CPC_BID_CEILING', LIMITED_BY_CPC_BID_FLOOR = 'LIMITED_BY_CPC_BID_FLOOR', LIMITED_BY_DATA = 'LIMITED_BY_DATA', LIMITED_BY_BUDGET = 'LIMITED_BY_BUDGET', LIMITED_BY_LOW_PRIORITY_SPEND = 'LIMITED_BY_LOW_PRIORITY_SPEND', LIMITED_BY_LOW_QUALITY = 'LIMITED_BY_LOW_QUALITY', LIMITED_BY_INVENTORY = 'LIMITED_BY_INVENTORY', MISCONFIGURED_ZERO_ELIGIBILITY = 'MISCONFIGURED_ZERO_ELIGIBILITY', MISCONFIGURED_CONVERSION_TYPES = 'MISCONFIGURED_CONVERSION_TYPES', MISCONFIGURED_CONVERSION_SETTINGS = 'MISCONFIGURED_CONVERSION_SETTINGS', MISCONFIGURED_SHARED_BUDGET = 'MISCONFIGURED_SHARED_BUDGET', MISCONFIGURED_STRATEGY_TYPE = 'MISCONFIGURED_STRATEGY_TYPE', PAUSED = 'PAUSED', UNAVAILABLE = 'UNAVAILABLE', MULTIPLE_LEARNING = 'MULTIPLE_LEARNING', MULTIPLE_LIMITED = 'MULTIPLE_LIMITED', MULTIPLE_MISCONFIGURED = 'MULTIPLE_MISCONFIGURED', MULTIPLE = 'MULTIPLE' }

	export enum GoogleAdsSearchads360V0Resources__CampaignServingStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', SERVING = 'SERVING', NONE = 'NONE', ENDED = 'ENDED', PENDING = 'PENDING', SUSPENDED = 'SUSPENDED' }


	/** A link between a Campaign and an Asset. */
	export interface GoogleAdsSearchads360V0Resources__CampaignAsset {

		/** Immutable. The asset which is linked to the campaign. */
		asset?: string | null;

		/** Immutable. The campaign to which the asset is linked. */
		campaign?: string | null;

		/** Immutable. The resource name of the campaign asset. CampaignAsset resource names have the form: `customers/{customer_id}/campaignAssets/{campaign_id}~{asset_id}~{field_type}` */
		resourceName?: string | null;

		/** Output only. Status of the campaign asset. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupAssetStatus | null;
	}

	/** A link between a Campaign and an Asset. */
	export interface GoogleAdsSearchads360V0Resources__CampaignAssetFormProperties {

		/** Immutable. The asset which is linked to the campaign. */
		asset: FormControl<string | null | undefined>,

		/** Immutable. The campaign to which the asset is linked. */
		campaign: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the campaign asset. CampaignAsset resource names have the form: `customers/{customer_id}/campaignAssets/{campaign_id}~{asset_id}~{field_type}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. Status of the campaign asset. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetStatus | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__CampaignAssetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__CampaignAssetFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
			campaign: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetStatus | null | undefined>(undefined),
		});

	}


	/** CampaignAssetSet is the linkage between a campaign and an asset set. Adding a CampaignAssetSet links an asset set with a campaign. */
	export interface GoogleAdsSearchads360V0Resources__CampaignAssetSet {

		/** Immutable. The asset set which is linked to the campaign. */
		assetSet?: string | null;

		/** Immutable. The campaign to which this asset set is linked. */
		campaign?: string | null;

		/** Immutable. The resource name of the campaign asset set. Asset set asset resource names have the form: `customers/{customer_id}/campaignAssetSets/{campaign_id}~{asset_set_id}` */
		resourceName?: string | null;

		/** Output only. The status of the campaign asset set asset. Read-only. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null;
	}

	/** CampaignAssetSet is the linkage between a campaign and an asset set. Adding a CampaignAssetSet links an asset set with a campaign. */
	export interface GoogleAdsSearchads360V0Resources__CampaignAssetSetFormProperties {

		/** Immutable. The asset set which is linked to the campaign. */
		assetSet: FormControl<string | null | undefined>,

		/** Immutable. The campaign to which this asset set is linked. */
		campaign: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the campaign asset set. Asset set asset resource names have the form: `customers/{customer_id}/campaignAssetSets/{campaign_id}~{asset_set_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. The status of the campaign asset set asset. Read-only. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__CampaignAssetSetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__CampaignAssetSetFormProperties>({
			assetSet: new FormControl<string | null | undefined>(undefined),
			campaign: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null | undefined>(undefined),
		});

	}


	/** A campaign audience view. Includes performance data from interests and remarketing lists for Display Network and YouTube Network ads, and remarketing lists for search ads (RLSA), aggregated by campaign and audience criterion. This view only includes audiences attached at the campaign level. */
	export interface GoogleAdsSearchads360V0Resources__CampaignAudienceView {

		/** Output only. The resource name of the campaign audience view. Campaign audience view resource names have the form: `customers/{customer_id}/campaignAudienceViews/{campaign_id}~{criterion_id}` */
		resourceName?: string | null;
	}

	/** A campaign audience view. Includes performance data from interests and remarketing lists for Display Network and YouTube Network ads, and remarketing lists for search ads (RLSA), aggregated by campaign and audience criterion. This view only includes audiences attached at the campaign level. */
	export interface GoogleAdsSearchads360V0Resources__CampaignAudienceViewFormProperties {

		/** Output only. The resource name of the campaign audience view. Campaign audience view resource names have the form: `customers/{customer_id}/campaignAudienceViews/{campaign_id}~{criterion_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__CampaignAudienceViewFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__CampaignAudienceViewFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A campaign budget. */
	export interface GoogleAdsSearchads360V0Resources__CampaignBudget {

		/** The amount of the budget, in the local currency for the account. Amount is specified in micros, where one million is equivalent to one currency unit. Monthly spend is capped at 30.4 times this amount. */
		amountMicros?: string | null;

		/** The delivery method that determines the rate at which the campaign budget is spent. Defaults to STANDARD if unspecified in a create operation. */
		deliveryMethod?: GoogleAdsSearchads360V0Resources__CampaignBudgetDeliveryMethod | null;

		/** Immutable. Period over which to spend the budget. Defaults to DAILY if not specified. */
		period?: GoogleAdsSearchads360V0Resources__CampaignBudgetPeriod | null;

		/** Immutable. The resource name of the campaign budget. Campaign budget resource names have the form: `customers/{customer_id}/campaignBudgets/{campaign_budget_id}` */
		resourceName?: string | null;
	}

	/** A campaign budget. */
	export interface GoogleAdsSearchads360V0Resources__CampaignBudgetFormProperties {

		/** The amount of the budget, in the local currency for the account. Amount is specified in micros, where one million is equivalent to one currency unit. Monthly spend is capped at 30.4 times this amount. */
		amountMicros: FormControl<string | null | undefined>,

		/** The delivery method that determines the rate at which the campaign budget is spent. Defaults to STANDARD if unspecified in a create operation. */
		deliveryMethod: FormControl<GoogleAdsSearchads360V0Resources__CampaignBudgetDeliveryMethod | null | undefined>,

		/** Immutable. Period over which to spend the budget. Defaults to DAILY if not specified. */
		period: FormControl<GoogleAdsSearchads360V0Resources__CampaignBudgetPeriod | null | undefined>,

		/** Immutable. The resource name of the campaign budget. Campaign budget resource names have the form: `customers/{customer_id}/campaignBudgets/{campaign_budget_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__CampaignBudgetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__CampaignBudgetFormProperties>({
			amountMicros: new FormControl<string | null | undefined>(undefined),
			deliveryMethod: new FormControl<GoogleAdsSearchads360V0Resources__CampaignBudgetDeliveryMethod | null | undefined>(undefined),
			period: new FormControl<GoogleAdsSearchads360V0Resources__CampaignBudgetPeriod | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__CampaignBudgetDeliveryMethod { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', STANDARD = 'STANDARD', ACCELERATED = 'ACCELERATED' }

	export enum GoogleAdsSearchads360V0Resources__CampaignBudgetPeriod { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', DAILY = 'DAILY', FIXED_DAILY = 'FIXED_DAILY', CUSTOM_PERIOD = 'CUSTOM_PERIOD' }


	/** A campaign criterion. */
	export interface GoogleAdsSearchads360V0Resources__CampaignCriterion {

		/** An age range criterion. */
		ageRange?: GoogleAdsSearchads360V0Common__AgeRangeInfo;

		/**
		 * The modifier for the bids when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers. Use 0 to opt out of a Device type.
		 * Type: float
		 */
		bidModifier?: number | null;

		/** Output only. The ID of the criterion. This field is ignored during mutate. */
		criterionId?: string | null;

		/** A device criterion. */
		device?: GoogleAdsSearchads360V0Common__DeviceInfo;

		/** Output only. The display name of the criterion. This field is ignored for mutates. */
		displayName?: string | null;

		/** A gender criterion. */
		gender?: GoogleAdsSearchads360V0Common__GenderInfo;

		/** A keyword criterion. */
		keyword?: GoogleAdsSearchads360V0Common__KeywordInfo;

		/** A language criterion. */
		language?: GoogleAdsSearchads360V0Common__LanguageInfo;

		/** Output only. The datetime when this campaign criterion was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
		lastModifiedTime?: string | null;

		/** A location criterion. */
		location?: GoogleAdsSearchads360V0Common__LocationInfo;

		/** A radius around a list of locations specified through a feed. */
		locationGroup?: GoogleAdsSearchads360V0Common__LocationGroupInfo;

		/** Immutable. Whether to target (`false`) or exclude (`true`) the criterion. */
		negative?: boolean | null;

		/** Immutable. The resource name of the campaign criterion. Campaign criterion resource names have the form: `customers/{customer_id}/campaignCriteria/{campaign_id}~{criterion_id}` */
		resourceName?: string | null;

		/** The status of the criterion. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupStatus | null;

		/** Output only. The type of the criterion. */
		type?: GoogleAdsSearchads360V0Resources__AdGroupCriterionType | null;

		/** A User List criterion. Represents a user list that is defined by the advertiser to be targeted. */
		userList?: GoogleAdsSearchads360V0Common__UserListInfo;

		/** Represents a criterion for targeting webpages of an advertiser's website. */
		webpage?: GoogleAdsSearchads360V0Common__WebpageInfo;
	}

	/** A campaign criterion. */
	export interface GoogleAdsSearchads360V0Resources__CampaignCriterionFormProperties {

		/**
		 * The modifier for the bids when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers. Use 0 to opt out of a Device type.
		 * Type: float
		 */
		bidModifier: FormControl<number | null | undefined>,

		/** Output only. The ID of the criterion. This field is ignored during mutate. */
		criterionId: FormControl<string | null | undefined>,

		/** Output only. The display name of the criterion. This field is ignored for mutates. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The datetime when this campaign criterion was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** Immutable. Whether to target (`false`) or exclude (`true`) the criterion. */
		negative: FormControl<boolean | null | undefined>,

		/** Immutable. The resource name of the campaign criterion. Campaign criterion resource names have the form: `customers/{customer_id}/campaignCriteria/{campaign_id}~{criterion_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** The status of the criterion. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupStatus | null | undefined>,

		/** Output only. The type of the criterion. */
		type: FormControl<GoogleAdsSearchads360V0Resources__AdGroupCriterionType | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__CampaignCriterionFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__CampaignCriterionFormProperties>({
			bidModifier: new FormControl<number | null | undefined>(undefined),
			criterionId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			negative: new FormControl<boolean | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupStatus | null | undefined>(undefined),
			type: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupCriterionType | null | undefined>(undefined),
		});

	}


	/** Represents a relationship between a campaign and a label. */
	export interface GoogleAdsSearchads360V0Resources__CampaignLabel {

		/** Immutable. The campaign to which the label is attached. */
		campaign?: string | null;

		/** Immutable. The label assigned to the campaign. */
		label?: string | null;

		/** Immutable. Name of the resource. Campaign label resource names have the form: `customers/{customer_id}/campaignLabels/{campaign_id}~{label_id}` */
		resourceName?: string | null;
	}

	/** Represents a relationship between a campaign and a label. */
	export interface GoogleAdsSearchads360V0Resources__CampaignLabelFormProperties {

		/** Immutable. The campaign to which the label is attached. */
		campaign: FormControl<string | null | undefined>,

		/** Immutable. The label assigned to the campaign. */
		label: FormControl<string | null | undefined>,

		/** Immutable. Name of the resource. Campaign label resource names have the form: `customers/{customer_id}/campaignLabels/{campaign_id}~{label_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__CampaignLabelFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__CampaignLabelFormProperties>({
			campaign: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cart data sales view. */
	export interface GoogleAdsSearchads360V0Resources__CartDataSalesView {

		/** Output only. The resource name of the Cart data sales view. Cart data sales view resource names have the form: `customers/{customer_id}/cartDataSalesView` */
		resourceName?: string | null;
	}

	/** Cart data sales view. */
	export interface GoogleAdsSearchads360V0Resources__CartDataSalesViewFormProperties {

		/** Output only. The resource name of the Cart data sales view. Cart data sales view resource names have the form: `customers/{customer_id}/cartDataSalesView` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__CartDataSalesViewFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__CartDataSalesViewFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A conversion. */
	export interface GoogleAdsSearchads360V0Resources__Conversion {

		/** Output only. Ad ID. A value of 0 indicates that the ad is unattributed. */
		adId?: string | null;

		/** Output only. For offline conversions, this is an ID provided by advertisers. If an advertiser doesn't specify such an ID, Search Ads 360 generates one. For online conversions, this is equal to the id column or the floodlight_order_id column depending on the advertiser's Floodlight instructions. */
		advertiserConversionId?: string | null;

		/** Output only. Asset field type of the conversion event. */
		assetFieldType?: GoogleAdsSearchads360V0Resources__AssetGroupAssetFieldType | null;

		/** Output only. ID of the asset which was interacted with during the conversion event. */
		assetId?: string | null;

		/** Output only. What the conversion is attributed to: Visit or Keyword+Ad. */
		attributionType?: GoogleAdsSearchads360V0Resources__ConversionAttributionType | null;

		/** Output only. A unique string, for the visit that the conversion is attributed to, that is passed to the landing page as the click id URL parameter. */
		clickId?: string | null;

		/** Output only. The timestamp of the conversion event. */
		conversionDateTime?: string | null;

		/** Output only. The timestamp of the last time the conversion was modified. */
		conversionLastModifiedDateTime?: string | null;

		/** Output only. The quantity of items recorded by the conversion, as determined by the qty url parameter. The advertiser is responsible for dynamically populating the parameter (such as number of items sold in the conversion), otherwise it defaults to 1. */
		conversionQuantity?: string | null;

		/** Output only. The adjusted revenue in micros for the conversion event. This will always be in the currency of the serving account. */
		conversionRevenueMicros?: string | null;

		/** Output only. The timestamp of the visit that the conversion is attributed to. */
		conversionVisitDateTime?: string | null;

		/** Output only. Search Ads 360 criterion ID. A value of 0 indicates that the criterion is unattributed. */
		criterionId?: string | null;

		/** Output only. The Floodlight order ID provided by the advertiser for the conversion. */
		floodlightOrderId?: string | null;

		/** Output only. The original, unchanged revenue associated with the Floodlight event (in the currency of the current report), before Floodlight currency instruction modifications. */
		floodlightOriginalRevenue?: string | null;

		/** Output only. The ID of the conversion */
		id?: string | null;

		/** Output only. The SearchAds360 inventory account ID containing the product that was clicked on. SearchAds360 generates this ID when you link an inventory account in SearchAds360. */
		merchantId?: string | null;

		/** Output only. The sales channel of the product that was clicked on: Online or Local. */
		productChannel?: GoogleAdsSearchads360V0Common__SegmentsProductChannel | null;

		/** Output only. The country (ISO-3166-format) registered for the inventory feed that contains the product clicked on. */
		productCountryCode?: string | null;

		/** Output only. The ID of the product clicked on. */
		productId?: string | null;

		/** Output only. The language (ISO-639-1) that has been set for the Merchant Center feed containing data about the product. */
		productLanguageCode?: string | null;

		/** Output only. The store in the Local Inventory Ad that was clicked on. This should match the store IDs used in your local products feed. */
		productStoreId?: string | null;

		/** Output only. The resource name of the conversion. Conversion resource names have the form: `customers/{customer_id}/conversions/{ad_group_id}~{criterion_id}~{ds_conversion_id}` */
		resourceName?: string | null;

		/** Output only. The status of the conversion, either ENABLED or REMOVED.. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null;

		/** Output only. The SearchAds360 visit ID that the conversion is attributed to. */
		visitId?: string | null;
	}

	/** A conversion. */
	export interface GoogleAdsSearchads360V0Resources__ConversionFormProperties {

		/** Output only. Ad ID. A value of 0 indicates that the ad is unattributed. */
		adId: FormControl<string | null | undefined>,

		/** Output only. For offline conversions, this is an ID provided by advertisers. If an advertiser doesn't specify such an ID, Search Ads 360 generates one. For online conversions, this is equal to the id column or the floodlight_order_id column depending on the advertiser's Floodlight instructions. */
		advertiserConversionId: FormControl<string | null | undefined>,

		/** Output only. Asset field type of the conversion event. */
		assetFieldType: FormControl<GoogleAdsSearchads360V0Resources__AssetGroupAssetFieldType | null | undefined>,

		/** Output only. ID of the asset which was interacted with during the conversion event. */
		assetId: FormControl<string | null | undefined>,

		/** Output only. What the conversion is attributed to: Visit or Keyword+Ad. */
		attributionType: FormControl<GoogleAdsSearchads360V0Resources__ConversionAttributionType | null | undefined>,

		/** Output only. A unique string, for the visit that the conversion is attributed to, that is passed to the landing page as the click id URL parameter. */
		clickId: FormControl<string | null | undefined>,

		/** Output only. The timestamp of the conversion event. */
		conversionDateTime: FormControl<string | null | undefined>,

		/** Output only. The timestamp of the last time the conversion was modified. */
		conversionLastModifiedDateTime: FormControl<string | null | undefined>,

		/** Output only. The quantity of items recorded by the conversion, as determined by the qty url parameter. The advertiser is responsible for dynamically populating the parameter (such as number of items sold in the conversion), otherwise it defaults to 1. */
		conversionQuantity: FormControl<string | null | undefined>,

		/** Output only. The adjusted revenue in micros for the conversion event. This will always be in the currency of the serving account. */
		conversionRevenueMicros: FormControl<string | null | undefined>,

		/** Output only. The timestamp of the visit that the conversion is attributed to. */
		conversionVisitDateTime: FormControl<string | null | undefined>,

		/** Output only. Search Ads 360 criterion ID. A value of 0 indicates that the criterion is unattributed. */
		criterionId: FormControl<string | null | undefined>,

		/** Output only. The Floodlight order ID provided by the advertiser for the conversion. */
		floodlightOrderId: FormControl<string | null | undefined>,

		/** Output only. The original, unchanged revenue associated with the Floodlight event (in the currency of the current report), before Floodlight currency instruction modifications. */
		floodlightOriginalRevenue: FormControl<string | null | undefined>,

		/** Output only. The ID of the conversion */
		id: FormControl<string | null | undefined>,

		/** Output only. The SearchAds360 inventory account ID containing the product that was clicked on. SearchAds360 generates this ID when you link an inventory account in SearchAds360. */
		merchantId: FormControl<string | null | undefined>,

		/** Output only. The sales channel of the product that was clicked on: Online or Local. */
		productChannel: FormControl<GoogleAdsSearchads360V0Common__SegmentsProductChannel | null | undefined>,

		/** Output only. The country (ISO-3166-format) registered for the inventory feed that contains the product clicked on. */
		productCountryCode: FormControl<string | null | undefined>,

		/** Output only. The ID of the product clicked on. */
		productId: FormControl<string | null | undefined>,

		/** Output only. The language (ISO-639-1) that has been set for the Merchant Center feed containing data about the product. */
		productLanguageCode: FormControl<string | null | undefined>,

		/** Output only. The store in the Local Inventory Ad that was clicked on. This should match the store IDs used in your local products feed. */
		productStoreId: FormControl<string | null | undefined>,

		/** Output only. The resource name of the conversion. Conversion resource names have the form: `customers/{customer_id}/conversions/{ad_group_id}~{criterion_id}~{ds_conversion_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. The status of the conversion, either ENABLED or REMOVED.. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null | undefined>,

		/** Output only. The SearchAds360 visit ID that the conversion is attributed to. */
		visitId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__ConversionFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__ConversionFormProperties>({
			adId: new FormControl<string | null | undefined>(undefined),
			advertiserConversionId: new FormControl<string | null | undefined>(undefined),
			assetFieldType: new FormControl<GoogleAdsSearchads360V0Resources__AssetGroupAssetFieldType | null | undefined>(undefined),
			assetId: new FormControl<string | null | undefined>(undefined),
			attributionType: new FormControl<GoogleAdsSearchads360V0Resources__ConversionAttributionType | null | undefined>(undefined),
			clickId: new FormControl<string | null | undefined>(undefined),
			conversionDateTime: new FormControl<string | null | undefined>(undefined),
			conversionLastModifiedDateTime: new FormControl<string | null | undefined>(undefined),
			conversionQuantity: new FormControl<string | null | undefined>(undefined),
			conversionRevenueMicros: new FormControl<string | null | undefined>(undefined),
			conversionVisitDateTime: new FormControl<string | null | undefined>(undefined),
			criterionId: new FormControl<string | null | undefined>(undefined),
			floodlightOrderId: new FormControl<string | null | undefined>(undefined),
			floodlightOriginalRevenue: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			productChannel: new FormControl<GoogleAdsSearchads360V0Common__SegmentsProductChannel | null | undefined>(undefined),
			productCountryCode: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			productLanguageCode: new FormControl<string | null | undefined>(undefined),
			productStoreId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null | undefined>(undefined),
			visitId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__ConversionAttributionType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', VISIT = 'VISIT', CRITERION_AD = 'CRITERION_AD' }


	/** A conversion action. */
	export interface GoogleAdsSearchads360V0Resources__ConversionAction {

		/** App ID for an app conversion action. */
		appId?: string | null;

		/** Settings related to this conversion action's attribution model. */
		attributionModelSettings?: GoogleAdsSearchads360V0Resources_ConversionAction_AttributionModelSettings;

		/** The category of conversions reported for this conversion action. */
		category?: GoogleAdsSearchads360V0Common__SegmentsConversionActionCategory | null;

		/** The maximum number of days that may elapse between an interaction (for example, a click) and a conversion event. */
		clickThroughLookbackWindowDays?: string | null;

		/** Output only. Timestamp of the Floodlight activity's creation, formatted in ISO 8601. */
		creationTime?: string | null;

		/** Settings related to a Floodlight conversion action. */
		floodlightSettings?: GoogleAdsSearchads360V0Resources_ConversionAction_FloodlightSettings;

		/** Output only. The ID of the conversion action. */
		id?: string | null;

		/** Whether this conversion action should be included in the "client_account_conversions" metric. */
		includeInClientAccountConversionsMetric?: boolean | null;

		/** Output only. Whether this conversion action should be included in the "conversions" metric. */
		includeInConversionsMetric?: boolean | null;

		/** The name of the conversion action. This field is required and should not be empty when creating new conversion actions. */
		name?: string | null;

		/** Output only. The resource name of the conversion action owner customer, or null if this is a system-defined conversion action. */
		ownerCustomer?: string | null;

		/** If a conversion action's primary_for_goal bit is false, the conversion action is non-biddable for all campaigns regardless of their customer conversion goal or campaign conversion goal. However, custom conversion goals do not respect primary_for_goal, so if a campaign has a custom conversion goal configured with a primary_for_goal = false conversion action, that conversion action is still biddable. By default, primary_for_goal will be true if not set. In V9, primary_for_goal can only be set to false after creation through an 'update' operation because it's not declared as optional. */
		primaryForGoal?: boolean | null;

		/** Immutable. The resource name of the conversion action. Conversion action resource names have the form: `customers/{customer_id}/conversionActions/{conversion_action_id}` */
		resourceName?: string | null;

		/** The status of this conversion action for conversion event accrual. */
		status?: GoogleAdsSearchads360V0Resources__ConversionActionStatus | null;

		/** Immutable. The type of this conversion action. */
		type?: GoogleAdsSearchads360V0Resources__ConversionActionType | null;

		/** Settings related to the value for conversion events associated with this conversion action. */
		valueSettings?: GoogleAdsSearchads360V0Resources_ConversionAction_ValueSettings;
	}

	/** A conversion action. */
	export interface GoogleAdsSearchads360V0Resources__ConversionActionFormProperties {

		/** App ID for an app conversion action. */
		appId: FormControl<string | null | undefined>,

		/** The category of conversions reported for this conversion action. */
		category: FormControl<GoogleAdsSearchads360V0Common__SegmentsConversionActionCategory | null | undefined>,

		/** The maximum number of days that may elapse between an interaction (for example, a click) and a conversion event. */
		clickThroughLookbackWindowDays: FormControl<string | null | undefined>,

		/** Output only. Timestamp of the Floodlight activity's creation, formatted in ISO 8601. */
		creationTime: FormControl<string | null | undefined>,

		/** Output only. The ID of the conversion action. */
		id: FormControl<string | null | undefined>,

		/** Whether this conversion action should be included in the "client_account_conversions" metric. */
		includeInClientAccountConversionsMetric: FormControl<boolean | null | undefined>,

		/** Output only. Whether this conversion action should be included in the "conversions" metric. */
		includeInConversionsMetric: FormControl<boolean | null | undefined>,

		/** The name of the conversion action. This field is required and should not be empty when creating new conversion actions. */
		name: FormControl<string | null | undefined>,

		/** Output only. The resource name of the conversion action owner customer, or null if this is a system-defined conversion action. */
		ownerCustomer: FormControl<string | null | undefined>,

		/** If a conversion action's primary_for_goal bit is false, the conversion action is non-biddable for all campaigns regardless of their customer conversion goal or campaign conversion goal. However, custom conversion goals do not respect primary_for_goal, so if a campaign has a custom conversion goal configured with a primary_for_goal = false conversion action, that conversion action is still biddable. By default, primary_for_goal will be true if not set. In V9, primary_for_goal can only be set to false after creation through an 'update' operation because it's not declared as optional. */
		primaryForGoal: FormControl<boolean | null | undefined>,

		/** Immutable. The resource name of the conversion action. Conversion action resource names have the form: `customers/{customer_id}/conversionActions/{conversion_action_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** The status of this conversion action for conversion event accrual. */
		status: FormControl<GoogleAdsSearchads360V0Resources__ConversionActionStatus | null | undefined>,

		/** Immutable. The type of this conversion action. */
		type: FormControl<GoogleAdsSearchads360V0Resources__ConversionActionType | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__ConversionActionFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__ConversionActionFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<GoogleAdsSearchads360V0Common__SegmentsConversionActionCategory | null | undefined>(undefined),
			clickThroughLookbackWindowDays: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			includeInClientAccountConversionsMetric: new FormControl<boolean | null | undefined>(undefined),
			includeInConversionsMetric: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ownerCustomer: new FormControl<string | null | undefined>(undefined),
			primaryForGoal: new FormControl<boolean | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__ConversionActionStatus | null | undefined>(undefined),
			type: new FormControl<GoogleAdsSearchads360V0Resources__ConversionActionType | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__ConversionActionStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', ENABLED = 'ENABLED', REMOVED = 'REMOVED', HIDDEN = 'HIDDEN' }

	export enum GoogleAdsSearchads360V0Resources__ConversionActionType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', AD_CALL = 'AD_CALL', CLICK_TO_CALL = 'CLICK_TO_CALL', GOOGLE_PLAY_DOWNLOAD = 'GOOGLE_PLAY_DOWNLOAD', GOOGLE_PLAY_IN_APP_PURCHASE = 'GOOGLE_PLAY_IN_APP_PURCHASE', UPLOAD_CALLS = 'UPLOAD_CALLS', UPLOAD_CLICKS = 'UPLOAD_CLICKS', WEBPAGE = 'WEBPAGE', WEBSITE_CALL = 'WEBSITE_CALL', STORE_SALES_DIRECT_UPLOAD = 'STORE_SALES_DIRECT_UPLOAD', STORE_SALES = 'STORE_SALES', FIREBASE_ANDROID_FIRST_OPEN = 'FIREBASE_ANDROID_FIRST_OPEN', FIREBASE_ANDROID_IN_APP_PURCHASE = 'FIREBASE_ANDROID_IN_APP_PURCHASE', FIREBASE_ANDROID_CUSTOM = 'FIREBASE_ANDROID_CUSTOM', FIREBASE_IOS_FIRST_OPEN = 'FIREBASE_IOS_FIRST_OPEN', FIREBASE_IOS_IN_APP_PURCHASE = 'FIREBASE_IOS_IN_APP_PURCHASE', FIREBASE_IOS_CUSTOM = 'FIREBASE_IOS_CUSTOM', THIRD_PARTY_APP_ANALYTICS_ANDROID_FIRST_OPEN = 'THIRD_PARTY_APP_ANALYTICS_ANDROID_FIRST_OPEN', THIRD_PARTY_APP_ANALYTICS_ANDROID_IN_APP_PURCHASE = 'THIRD_PARTY_APP_ANALYTICS_ANDROID_IN_APP_PURCHASE', THIRD_PARTY_APP_ANALYTICS_ANDROID_CUSTOM = 'THIRD_PARTY_APP_ANALYTICS_ANDROID_CUSTOM', THIRD_PARTY_APP_ANALYTICS_IOS_FIRST_OPEN = 'THIRD_PARTY_APP_ANALYTICS_IOS_FIRST_OPEN', THIRD_PARTY_APP_ANALYTICS_IOS_IN_APP_PURCHASE = 'THIRD_PARTY_APP_ANALYTICS_IOS_IN_APP_PURCHASE', THIRD_PARTY_APP_ANALYTICS_IOS_CUSTOM = 'THIRD_PARTY_APP_ANALYTICS_IOS_CUSTOM', ANDROID_APP_PRE_REGISTRATION = 'ANDROID_APP_PRE_REGISTRATION', ANDROID_INSTALLS_ALL_OTHER_APPS = 'ANDROID_INSTALLS_ALL_OTHER_APPS', FLOODLIGHT_ACTION = 'FLOODLIGHT_ACTION', FLOODLIGHT_TRANSACTION = 'FLOODLIGHT_TRANSACTION', GOOGLE_HOSTED = 'GOOGLE_HOSTED', LEAD_FORM_SUBMIT = 'LEAD_FORM_SUBMIT', SALESFORCE = 'SALESFORCE', SEARCH_ADS_360 = 'SEARCH_ADS_360', SMART_CAMPAIGN_AD_CLICKS_TO_CALL = 'SMART_CAMPAIGN_AD_CLICKS_TO_CALL', SMART_CAMPAIGN_MAP_CLICKS_TO_CALL = 'SMART_CAMPAIGN_MAP_CLICKS_TO_CALL', SMART_CAMPAIGN_MAP_DIRECTIONS = 'SMART_CAMPAIGN_MAP_DIRECTIONS', SMART_CAMPAIGN_TRACKED_CALLS = 'SMART_CAMPAIGN_TRACKED_CALLS', STORE_VISITS = 'STORE_VISITS', WEBPAGE_CODELESS = 'WEBPAGE_CODELESS', UNIVERSAL_ANALYTICS_GOAL = 'UNIVERSAL_ANALYTICS_GOAL', UNIVERSAL_ANALYTICS_TRANSACTION = 'UNIVERSAL_ANALYTICS_TRANSACTION', GOOGLE_ANALYTICS_4_CUSTOM = 'GOOGLE_ANALYTICS_4_CUSTOM', GOOGLE_ANALYTICS_4_PURCHASE = 'GOOGLE_ANALYTICS_4_PURCHASE' }


	/** A collection of customer-wide settings related to Search Ads 360 Conversion Tracking. */
	export interface GoogleAdsSearchads360V0Resources__ConversionTrackingSetting {

		/** Output only. Whether the customer has accepted customer data terms. If using cross-account conversion tracking, this value is inherited from the manager. This field is read-only. For more information, see https://support.google.com/adspolicy/answer/7475709. */
		acceptedCustomerDataTerms?: boolean | null;

		/** Output only. The conversion tracking id used for this account. This id doesn't indicate whether the customer uses conversion tracking (conversion_tracking_status does). This field is read-only. */
		conversionTrackingId?: string | null;

		/** Output only. Conversion tracking status. It indicates whether the customer is using conversion tracking, and who is the conversion tracking owner of this customer. If this customer is using cross-account conversion tracking, the value returned will differ based on the `login-customer-id` of the request. */
		conversionTrackingStatus?: GoogleAdsSearchads360V0Resources__ConversionTrackingSettingConversionTrackingStatus | null;

		/** Output only. The conversion tracking id of the customer's manager. This is set when the customer is opted into cross-account conversion tracking, and it overrides conversion_tracking_id. */
		crossAccountConversionTrackingId?: string | null;

		/** Output only. Whether the customer is opted-in for enhanced conversions for leads. If using cross-account conversion tracking, this value is inherited from the manager. This field is read-only. */
		enhancedConversionsForLeadsEnabled?: boolean | null;

		/** Output only. The resource name of the customer where conversions are created and managed. This field is read-only. */
		googleAdsConversionCustomer?: string | null;

		/** Output only. The conversion tracking id of the customer's manager. This is set when the customer is opted into conversion tracking, and it overrides conversion_tracking_id. This field can only be managed through the Google Ads UI. This field is read-only. */
		googleAdsCrossAccountConversionTrackingId?: string | null;
	}

	/** A collection of customer-wide settings related to Search Ads 360 Conversion Tracking. */
	export interface GoogleAdsSearchads360V0Resources__ConversionTrackingSettingFormProperties {

		/** Output only. Whether the customer has accepted customer data terms. If using cross-account conversion tracking, this value is inherited from the manager. This field is read-only. For more information, see https://support.google.com/adspolicy/answer/7475709. */
		acceptedCustomerDataTerms: FormControl<boolean | null | undefined>,

		/** Output only. The conversion tracking id used for this account. This id doesn't indicate whether the customer uses conversion tracking (conversion_tracking_status does). This field is read-only. */
		conversionTrackingId: FormControl<string | null | undefined>,

		/** Output only. Conversion tracking status. It indicates whether the customer is using conversion tracking, and who is the conversion tracking owner of this customer. If this customer is using cross-account conversion tracking, the value returned will differ based on the `login-customer-id` of the request. */
		conversionTrackingStatus: FormControl<GoogleAdsSearchads360V0Resources__ConversionTrackingSettingConversionTrackingStatus | null | undefined>,

		/** Output only. The conversion tracking id of the customer's manager. This is set when the customer is opted into cross-account conversion tracking, and it overrides conversion_tracking_id. */
		crossAccountConversionTrackingId: FormControl<string | null | undefined>,

		/** Output only. Whether the customer is opted-in for enhanced conversions for leads. If using cross-account conversion tracking, this value is inherited from the manager. This field is read-only. */
		enhancedConversionsForLeadsEnabled: FormControl<boolean | null | undefined>,

		/** Output only. The resource name of the customer where conversions are created and managed. This field is read-only. */
		googleAdsConversionCustomer: FormControl<string | null | undefined>,

		/** Output only. The conversion tracking id of the customer's manager. This is set when the customer is opted into conversion tracking, and it overrides conversion_tracking_id. This field can only be managed through the Google Ads UI. This field is read-only. */
		googleAdsCrossAccountConversionTrackingId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__ConversionTrackingSettingFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__ConversionTrackingSettingFormProperties>({
			acceptedCustomerDataTerms: new FormControl<boolean | null | undefined>(undefined),
			conversionTrackingId: new FormControl<string | null | undefined>(undefined),
			conversionTrackingStatus: new FormControl<GoogleAdsSearchads360V0Resources__ConversionTrackingSettingConversionTrackingStatus | null | undefined>(undefined),
			crossAccountConversionTrackingId: new FormControl<string | null | undefined>(undefined),
			enhancedConversionsForLeadsEnabled: new FormControl<boolean | null | undefined>(undefined),
			googleAdsConversionCustomer: new FormControl<string | null | undefined>(undefined),
			googleAdsCrossAccountConversionTrackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__ConversionTrackingSettingConversionTrackingStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', NOT_CONVERSION_TRACKED = 'NOT_CONVERSION_TRACKED', CONVERSION_TRACKING_MANAGED_BY_SELF = 'CONVERSION_TRACKING_MANAGED_BY_SELF', CONVERSION_TRACKING_MANAGED_BY_THIS_MANAGER = 'CONVERSION_TRACKING_MANAGED_BY_THIS_MANAGER', CONVERSION_TRACKING_MANAGED_BY_ANOTHER_MANAGER = 'CONVERSION_TRACKING_MANAGED_BY_ANOTHER_MANAGER' }


	/** A custom column. See Search Ads 360 custom column at https://support.google.com/sa360/answer/9633916 */
	export interface GoogleAdsSearchads360V0Resources__CustomColumn {

		/** Output only. User-defined description of the custom column. */
		description?: string | null;

		/** Output only. ID of the custom column. */
		id?: string | null;

		/** Output only. User-defined name of the custom column. */
		name?: string | null;

		/** Output only. True when the custom column is available to be used in the query of SearchAds360Service.Search and SearchAds360Service.SearchStream. */
		queryable?: boolean | null;

		/** Output only. The list of the referenced system columns of this custom column. For example, A custom column "sum of impressions and clicks" has referenced system columns of {"metrics.clicks", "metrics.impressions"}. */
		referencedSystemColumns?: Array<string>;

		/** Output only. True when the custom column is referring to one or more attributes. */
		referencesAttributes?: boolean | null;

		/** Output only. True when the custom column is referring to one or more metrics. */
		referencesMetrics?: boolean | null;

		/** Immutable. The resource name of the custom column. Custom column resource names have the form: `customers/{customer_id}/customColumns/{custom_column_id}` */
		resourceName?: string | null;

		/** Output only. The type of the result value of the custom column. */
		valueType?: GoogleAdsSearchads360V0Resources__CustomColumnValueType | null;
	}

	/** A custom column. See Search Ads 360 custom column at https://support.google.com/sa360/answer/9633916 */
	export interface GoogleAdsSearchads360V0Resources__CustomColumnFormProperties {

		/** Output only. User-defined description of the custom column. */
		description: FormControl<string | null | undefined>,

		/** Output only. ID of the custom column. */
		id: FormControl<string | null | undefined>,

		/** Output only. User-defined name of the custom column. */
		name: FormControl<string | null | undefined>,

		/** Output only. True when the custom column is available to be used in the query of SearchAds360Service.Search and SearchAds360Service.SearchStream. */
		queryable: FormControl<boolean | null | undefined>,

		/** Output only. True when the custom column is referring to one or more attributes. */
		referencesAttributes: FormControl<boolean | null | undefined>,

		/** Output only. True when the custom column is referring to one or more metrics. */
		referencesMetrics: FormControl<boolean | null | undefined>,

		/** Immutable. The resource name of the custom column. Custom column resource names have the form: `customers/{customer_id}/customColumns/{custom_column_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. The type of the result value of the custom column. */
		valueType: FormControl<GoogleAdsSearchads360V0Resources__CustomColumnValueType | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__CustomColumnFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__CustomColumnFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			queryable: new FormControl<boolean | null | undefined>(undefined),
			referencesAttributes: new FormControl<boolean | null | undefined>(undefined),
			referencesMetrics: new FormControl<boolean | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<GoogleAdsSearchads360V0Resources__CustomColumnValueType | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__CustomColumnValueType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', STRING = 'STRING', INT64 = 'INT64', DOUBLE = 'DOUBLE', BOOLEAN = 'BOOLEAN' }


	/** A customer. */
	export interface GoogleAdsSearchads360V0Resources__Customer {

		/** Output only. Account status, for example, Enabled, Paused, Removed, etc. */
		accountStatus?: GoogleAdsSearchads360V0Resources__CustomerAccountStatus | null;

		/** Output only. Engine account type, for example, Google Ads, Microsoft Advertising, Yahoo Japan, Baidu, Facebook, Engine Track, etc. */
		accountType?: GoogleAdsSearchads360V0Resources__CustomerAccountType | null;

		/** Whether auto-tagging is enabled for the customer. */
		autoTaggingEnabled?: boolean | null;

		/** A collection of customer-wide settings related to Search Ads 360 Conversion Tracking. */
		conversionTrackingSetting?: GoogleAdsSearchads360V0Resources__ConversionTrackingSetting;

		/** Output only. The timestamp when this customer was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
		creationTime?: string | null;

		/** Immutable. The currency in which the account operates. A subset of the currency codes from the ISO 4217 standard is supported. */
		currencyCode?: string | null;

		/** Optional, non-unique descriptive name of the customer. */
		descriptiveName?: string | null;

		/** DoubleClick Campaign Manager (DCM) setting for a manager customer. */
		doubleClickCampaignManagerSetting?: GoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSetting;

		/** Output only. ID of the account in the external engine account. */
		engineId?: string | null;

		/** The URL template for appending params to the final URL. */
		finalUrlSuffix?: string | null;

		/** Output only. The ID of the customer. */
		id?: string | null;

		/** Output only. The datetime when this customer was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
		lastModifiedTime?: string | null;

		/** Output only. Whether the customer is a manager. */
		manager?: boolean | null;

		/** Immutable. The resource name of the customer. Customer resource names have the form: `customers/{customer_id}` */
		resourceName?: string | null;

		/** Output only. The status of the customer. */
		status?: GoogleAdsSearchads360V0Resources__CustomerStatus | null;

		/** Immutable. The local timezone ID of the customer. */
		timeZone?: string | null;

		/** The URL template for constructing a tracking URL out of parameters. */
		trackingUrlTemplate?: string | null;
	}

	/** A customer. */
	export interface GoogleAdsSearchads360V0Resources__CustomerFormProperties {

		/** Output only. Account status, for example, Enabled, Paused, Removed, etc. */
		accountStatus: FormControl<GoogleAdsSearchads360V0Resources__CustomerAccountStatus | null | undefined>,

		/** Output only. Engine account type, for example, Google Ads, Microsoft Advertising, Yahoo Japan, Baidu, Facebook, Engine Track, etc. */
		accountType: FormControl<GoogleAdsSearchads360V0Resources__CustomerAccountType | null | undefined>,

		/** Whether auto-tagging is enabled for the customer. */
		autoTaggingEnabled: FormControl<boolean | null | undefined>,

		/** Output only. The timestamp when this customer was created. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
		creationTime: FormControl<string | null | undefined>,

		/** Immutable. The currency in which the account operates. A subset of the currency codes from the ISO 4217 standard is supported. */
		currencyCode: FormControl<string | null | undefined>,

		/** Optional, non-unique descriptive name of the customer. */
		descriptiveName: FormControl<string | null | undefined>,

		/** Output only. ID of the account in the external engine account. */
		engineId: FormControl<string | null | undefined>,

		/** The URL template for appending params to the final URL. */
		finalUrlSuffix: FormControl<string | null | undefined>,

		/** Output only. The ID of the customer. */
		id: FormControl<string | null | undefined>,

		/** Output only. The datetime when this customer was last modified. The datetime is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss.ssssss" format. */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** Output only. Whether the customer is a manager. */
		manager: FormControl<boolean | null | undefined>,

		/** Immutable. The resource name of the customer. Customer resource names have the form: `customers/{customer_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. The status of the customer. */
		status: FormControl<GoogleAdsSearchads360V0Resources__CustomerStatus | null | undefined>,

		/** Immutable. The local timezone ID of the customer. */
		timeZone: FormControl<string | null | undefined>,

		/** The URL template for constructing a tracking URL out of parameters. */
		trackingUrlTemplate: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__CustomerFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__CustomerFormProperties>({
			accountStatus: new FormControl<GoogleAdsSearchads360V0Resources__CustomerAccountStatus | null | undefined>(undefined),
			accountType: new FormControl<GoogleAdsSearchads360V0Resources__CustomerAccountType | null | undefined>(undefined),
			autoTaggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			descriptiveName: new FormControl<string | null | undefined>(undefined),
			engineId: new FormControl<string | null | undefined>(undefined),
			finalUrlSuffix: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			manager: new FormControl<boolean | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__CustomerStatus | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			trackingUrlTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__CustomerAccountStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', ENABLED = 'ENABLED', PAUSED = 'PAUSED', SUSPENDED = 'SUSPENDED', REMOVED = 'REMOVED', DRAFT = 'DRAFT' }

	export enum GoogleAdsSearchads360V0Resources__CustomerAccountType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', BAIDU = 'BAIDU', ENGINE_TRACK = 'ENGINE_TRACK', FACEBOOK = 'FACEBOOK', FACEBOOK_GATEWAY = 'FACEBOOK_GATEWAY', GOOGLE_ADS = 'GOOGLE_ADS', MICROSOFT = 'MICROSOFT', SEARCH_ADS_360 = 'SEARCH_ADS_360', YAHOO_JAPAN = 'YAHOO_JAPAN' }


	/** DoubleClick Campaign Manager (DCM) setting for a manager customer. */
	export interface GoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSetting {

		/** Output only. ID of the Campaign Manager advertiser associated with this customer. */
		advertiserId?: string | null;

		/** Output only. ID of the Campaign Manager network associated with this customer. */
		networkId?: string | null;

		/** Output only. Time zone of the Campaign Manager network associated with this customer in IANA Time Zone Database format, such as America/New_York. */
		timeZone?: string | null;
	}

	/** DoubleClick Campaign Manager (DCM) setting for a manager customer. */
	export interface GoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSettingFormProperties {

		/** Output only. ID of the Campaign Manager advertiser associated with this customer. */
		advertiserId: FormControl<string | null | undefined>,

		/** Output only. ID of the Campaign Manager network associated with this customer. */
		networkId: FormControl<string | null | undefined>,

		/** Output only. Time zone of the Campaign Manager network associated with this customer in IANA Time Zone Database format, such as America/New_York. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSettingFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__DoubleClickCampaignManagerSettingFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			networkId: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__CustomerStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', ENABLED = 'ENABLED', CANCELED = 'CANCELED', SUSPENDED = 'SUSPENDED', CLOSED = 'CLOSED' }


	/** A link between a customer and an asset. */
	export interface GoogleAdsSearchads360V0Resources__CustomerAsset {

		/** Required. Immutable. The asset which is linked to the customer. */
		asset?: string | null;

		/** Immutable. The resource name of the customer asset. CustomerAsset resource names have the form: `customers/{customer_id}/customerAssets/{asset_id}~{field_type}` */
		resourceName?: string | null;

		/** Status of the customer asset. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupAssetStatus | null;
	}

	/** A link between a customer and an asset. */
	export interface GoogleAdsSearchads360V0Resources__CustomerAssetFormProperties {

		/** Required. Immutable. The asset which is linked to the customer. */
		asset: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the customer asset. CustomerAsset resource names have the form: `customers/{customer_id}/customerAssets/{asset_id}~{field_type}` */
		resourceName: FormControl<string | null | undefined>,

		/** Status of the customer asset. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetStatus | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__CustomerAssetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__CustomerAssetFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetStatus | null | undefined>(undefined),
		});

	}


	/** CustomerAssetSet is the linkage between a customer and an asset set. Adding a CustomerAssetSet links an asset set with a customer. */
	export interface GoogleAdsSearchads360V0Resources__CustomerAssetSet {

		/** Immutable. The asset set which is linked to the customer. */
		assetSet?: string | null;

		/** Immutable. The customer to which this asset set is linked. */
		customer?: string | null;

		/** Immutable. The resource name of the customer asset set. Asset set asset resource names have the form: `customers/{customer_id}/customerAssetSets/{asset_set_id}` */
		resourceName?: string | null;

		/** Output only. The status of the customer asset set asset. Read-only. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null;
	}

	/** CustomerAssetSet is the linkage between a customer and an asset set. Adding a CustomerAssetSet links an asset set with a customer. */
	export interface GoogleAdsSearchads360V0Resources__CustomerAssetSetFormProperties {

		/** Immutable. The asset set which is linked to the customer. */
		assetSet: FormControl<string | null | undefined>,

		/** Immutable. The customer to which this asset set is linked. */
		customer: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the customer asset set. Asset set asset resource names have the form: `customers/{customer_id}/customerAssetSets/{asset_set_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. The status of the customer asset set asset. Read-only. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__CustomerAssetSetFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__CustomerAssetSetFormProperties>({
			assetSet: new FormControl<string | null | undefined>(undefined),
			customer: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null | undefined>(undefined),
		});

	}


	/** A link between the given customer and a client customer. CustomerClients only exist for manager customers. All direct and indirect client customers are included, as well as the manager itself. */
	export interface GoogleAdsSearchads360V0Resources__CustomerClient {

		/** Output only. The resource names of the labels owned by the requesting customer that are applied to the client customer. Label resource names have the form: `customers/{customer_id}/labels/{label_id}` */
		appliedLabels?: Array<string>;

		/** Output only. The resource name of the client-customer which is linked to the given customer. Read only. */
		clientCustomer?: string | null;

		/** Output only. Currency code (for example, 'USD', 'EUR') for the client. Read only. */
		currencyCode?: string | null;

		/** Output only. Descriptive name for the client. Read only. */
		descriptiveName?: string | null;

		/** Output only. Specifies whether this is a hidden account. Read only. */
		hidden?: boolean | null;

		/** Output only. The ID of the client customer. Read only. */
		id?: string | null;

		/** Output only. Distance between given customer and client. For self link, the level value will be 0. Read only. */
		level?: string | null;

		/** Output only. Identifies if the client is a manager. Read only. */
		manager?: boolean | null;

		/** Output only. The resource name of the customer client. CustomerClient resource names have the form: `customers/{customer_id}/customerClients/{client_customer_id}` */
		resourceName?: string | null;

		/** Output only. The status of the client customer. Read only. */
		status?: GoogleAdsSearchads360V0Resources__CustomerStatus | null;

		/** Output only. Identifies if the client is a test account. Read only. */
		testAccount?: boolean | null;

		/** Output only. Common Locale Data Repository (CLDR) string representation of the time zone of the client, for example, America/Los_Angeles. Read only. */
		timeZone?: string | null;
	}

	/** A link between the given customer and a client customer. CustomerClients only exist for manager customers. All direct and indirect client customers are included, as well as the manager itself. */
	export interface GoogleAdsSearchads360V0Resources__CustomerClientFormProperties {

		/** Output only. The resource name of the client-customer which is linked to the given customer. Read only. */
		clientCustomer: FormControl<string | null | undefined>,

		/** Output only. Currency code (for example, 'USD', 'EUR') for the client. Read only. */
		currencyCode: FormControl<string | null | undefined>,

		/** Output only. Descriptive name for the client. Read only. */
		descriptiveName: FormControl<string | null | undefined>,

		/** Output only. Specifies whether this is a hidden account. Read only. */
		hidden: FormControl<boolean | null | undefined>,

		/** Output only. The ID of the client customer. Read only. */
		id: FormControl<string | null | undefined>,

		/** Output only. Distance between given customer and client. For self link, the level value will be 0. Read only. */
		level: FormControl<string | null | undefined>,

		/** Output only. Identifies if the client is a manager. Read only. */
		manager: FormControl<boolean | null | undefined>,

		/** Output only. The resource name of the customer client. CustomerClient resource names have the form: `customers/{customer_id}/customerClients/{client_customer_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. The status of the client customer. Read only. */
		status: FormControl<GoogleAdsSearchads360V0Resources__CustomerStatus | null | undefined>,

		/** Output only. Identifies if the client is a test account. Read only. */
		testAccount: FormControl<boolean | null | undefined>,

		/** Output only. Common Locale Data Repository (CLDR) string representation of the time zone of the client, for example, America/Los_Angeles. Read only. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__CustomerClientFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__CustomerClientFormProperties>({
			clientCustomer: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			descriptiveName: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<string | null | undefined>(undefined),
			manager: new FormControl<boolean | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__CustomerStatus | null | undefined>(undefined),
			testAccount: new FormControl<boolean | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents customer-manager link relationship. */
	export interface GoogleAdsSearchads360V0Resources__CustomerManagerLink {

		/** Output only. The manager customer linked to the customer. */
		managerCustomer?: string | null;

		/** Output only. ID of the customer-manager link. This field is read only. */
		managerLinkId?: string | null;

		/** Immutable. Name of the resource. CustomerManagerLink resource names have the form: `customers/{customer_id}/customerManagerLinks/{manager_customer_id}~{manager_link_id}` */
		resourceName?: string | null;

		/** Status of the link between the customer and the manager. */
		status?: GoogleAdsSearchads360V0Resources__CustomerManagerLinkStatus | null;
	}

	/** Represents customer-manager link relationship. */
	export interface GoogleAdsSearchads360V0Resources__CustomerManagerLinkFormProperties {

		/** Output only. The manager customer linked to the customer. */
		managerCustomer: FormControl<string | null | undefined>,

		/** Output only. ID of the customer-manager link. This field is read only. */
		managerLinkId: FormControl<string | null | undefined>,

		/** Immutable. Name of the resource. CustomerManagerLink resource names have the form: `customers/{customer_id}/customerManagerLinks/{manager_customer_id}~{manager_link_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Status of the link between the customer and the manager. */
		status: FormControl<GoogleAdsSearchads360V0Resources__CustomerManagerLinkStatus | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__CustomerManagerLinkFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__CustomerManagerLinkFormProperties>({
			managerCustomer: new FormControl<string | null | undefined>(undefined),
			managerLinkId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__CustomerManagerLinkStatus | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__CustomerManagerLinkStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE', PENDING = 'PENDING', REFUSED = 'REFUSED', CANCELED = 'CANCELED' }


	/** A dynamic search ads search term view. */
	export interface GoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermView {

		/** Output only. The dynamically selected landing page URL of the impression. This field is read-only. */
		landingPage?: string | null;

		/** Output only. The resource name of the dynamic search ads search term view. Dynamic search ads search term view resource names have the form: `customers/{customer_id}/dynamicSearchAdsSearchTermViews/{ad_group_id}~{search_term_fingerprint}~{headline_fingerprint}~{landing_page_fingerprint}~{page_url_fingerprint}` */
		resourceName?: string | null;
	}

	/** A dynamic search ads search term view. */
	export interface GoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermViewFormProperties {

		/** Output only. The dynamically selected landing page URL of the impression. This field is read-only. */
		landingPage: FormControl<string | null | undefined>,

		/** Output only. The resource name of the dynamic search ads search term view. Dynamic search ads search term view resource names have the form: `customers/{customer_id}/dynamicSearchAdsSearchTermViews/{ad_group_id}~{search_term_fingerprint}~{headline_fingerprint}~{landing_page_fingerprint}~{page_url_fingerprint}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermViewFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermViewFormProperties>({
			landingPage: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A gender view. */
	export interface GoogleAdsSearchads360V0Resources__GenderView {

		/** Output only. The resource name of the gender view. Gender view resource names have the form: `customers/{customer_id}/genderViews/{ad_group_id}~{criterion_id}` */
		resourceName?: string | null;
	}

	/** A gender view. */
	export interface GoogleAdsSearchads360V0Resources__GenderViewFormProperties {

		/** Output only. The resource name of the gender view. Gender view resource names have the form: `customers/{customer_id}/genderViews/{ad_group_id}~{criterion_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__GenderViewFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__GenderViewFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A geo target constant. */
	export interface GoogleAdsSearchads360V0Resources__GeoTargetConstant {

		/** Output only. The fully qualified English name, consisting of the target's name and that of its parent and country. */
		canonicalName?: string | null;

		/** Output only. The ISO-3166-1 alpha-2 country code that is associated with the target. */
		countryCode?: string | null;

		/** Output only. The ID of the geo target constant. */
		id?: string | null;

		/** Output only. Geo target constant English name. */
		name?: string | null;

		/** Output only. The resource name of the parent geo target constant. Geo target constant resource names have the form: `geoTargetConstants/{parent_geo_target_constant_id}` */
		parentGeoTarget?: string | null;

		/** Output only. The resource name of the geo target constant. Geo target constant resource names have the form: `geoTargetConstants/{geo_target_constant_id}` */
		resourceName?: string | null;

		/** Output only. Geo target constant status. */
		status?: GoogleAdsSearchads360V0Resources__GeoTargetConstantStatus | null;

		/** Output only. Geo target constant target type. */
		targetType?: string | null;
	}

	/** A geo target constant. */
	export interface GoogleAdsSearchads360V0Resources__GeoTargetConstantFormProperties {

		/** Output only. The fully qualified English name, consisting of the target's name and that of its parent and country. */
		canonicalName: FormControl<string | null | undefined>,

		/** Output only. The ISO-3166-1 alpha-2 country code that is associated with the target. */
		countryCode: FormControl<string | null | undefined>,

		/** Output only. The ID of the geo target constant. */
		id: FormControl<string | null | undefined>,

		/** Output only. Geo target constant English name. */
		name: FormControl<string | null | undefined>,

		/** Output only. The resource name of the parent geo target constant. Geo target constant resource names have the form: `geoTargetConstants/{parent_geo_target_constant_id}` */
		parentGeoTarget: FormControl<string | null | undefined>,

		/** Output only. The resource name of the geo target constant. Geo target constant resource names have the form: `geoTargetConstants/{geo_target_constant_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. Geo target constant status. */
		status: FormControl<GoogleAdsSearchads360V0Resources__GeoTargetConstantStatus | null | undefined>,

		/** Output only. Geo target constant target type. */
		targetType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__GeoTargetConstantFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__GeoTargetConstantFormProperties>({
			canonicalName: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentGeoTarget: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__GeoTargetConstantStatus | null | undefined>(undefined),
			targetType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__GeoTargetConstantStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', ENABLED = 'ENABLED', REMOVAL_PLANNED = 'REMOVAL_PLANNED' }


	/** A keyword view. */
	export interface GoogleAdsSearchads360V0Resources__KeywordView {

		/** Output only. The resource name of the keyword view. Keyword view resource names have the form: `customers/{customer_id}/keywordViews/{ad_group_id}~{criterion_id}` */
		resourceName?: string | null;
	}

	/** A keyword view. */
	export interface GoogleAdsSearchads360V0Resources__KeywordViewFormProperties {

		/** Output only. The resource name of the keyword view. Keyword view resource names have the form: `customers/{customer_id}/keywordViews/{ad_group_id}~{criterion_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__KeywordViewFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__KeywordViewFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A label. */
	export interface GoogleAdsSearchads360V0Resources__Label {

		/** Output only. ID of the label. Read only. */
		id?: string | null;

		/** The name of the label. This field is required and should not be empty when creating a new label. The length of this string should be between 1 and 80, inclusive. */
		name?: string | null;

		/** Immutable. Name of the resource. Label resource names have the form: `customers/{customer_id}/labels/{label_id}` */
		resourceName?: string | null;

		/** Output only. Status of the label. Read only. */
		status?: GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null;

		/** A type of label displaying text on a colored background. */
		textLabel?: GoogleAdsSearchads360V0Common__TextLabel;
	}

	/** A label. */
	export interface GoogleAdsSearchads360V0Resources__LabelFormProperties {

		/** Output only. ID of the label. Read only. */
		id: FormControl<string | null | undefined>,

		/** The name of the label. This field is required and should not be empty when creating a new label. The length of this string should be between 1 and 80, inclusive. */
		name: FormControl<string | null | undefined>,

		/** Immutable. Name of the resource. Label resource names have the form: `customers/{customer_id}/labels/{label_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. Status of the label. Read only. */
		status: FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__LabelFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__LabelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__AdGroupAssetSetStatus | null | undefined>(undefined),
		});

	}


	/** A language. */
	export interface GoogleAdsSearchads360V0Resources__LanguageConstant {

		/** Output only. The language code, for example, "en_US", "en_AU", "es", "fr", etc. */
		code?: string | null;

		/** Output only. The ID of the language constant. */
		id?: string | null;

		/** Output only. The full name of the language in English, for example, "English (US)", "Spanish", etc. */
		name?: string | null;

		/** Output only. The resource name of the language constant. Language constant resource names have the form: `languageConstants/{criterion_id}` */
		resourceName?: string | null;

		/** Output only. Whether the language is targetable. */
		targetable?: boolean | null;
	}

	/** A language. */
	export interface GoogleAdsSearchads360V0Resources__LanguageConstantFormProperties {

		/** Output only. The language code, for example, "en_US", "en_AU", "es", "fr", etc. */
		code: FormControl<string | null | undefined>,

		/** Output only. The ID of the language constant. */
		id: FormControl<string | null | undefined>,

		/** Output only. The full name of the language in English, for example, "English (US)", "Spanish", etc. */
		name: FormControl<string | null | undefined>,

		/** Output only. The resource name of the language constant. Language constant resource names have the form: `languageConstants/{criterion_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. Whether the language is targetable. */
		targetable: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__LanguageConstantFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__LanguageConstantFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			targetable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A location view summarizes the performance of campaigns by Location criteria. */
	export interface GoogleAdsSearchads360V0Resources__LocationView {

		/** Output only. The resource name of the location view. Location view resource names have the form: `customers/{customer_id}/locationViews/{campaign_id}~{criterion_id}` */
		resourceName?: string | null;
	}

	/** A location view summarizes the performance of campaigns by Location criteria. */
	export interface GoogleAdsSearchads360V0Resources__LocationViewFormProperties {

		/** Output only. The resource name of the location view. Location view resource names have the form: `customers/{customer_id}/locationViews/{campaign_id}~{criterion_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__LocationViewFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__LocationViewFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Product Bidding Category. */
	export interface GoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstant {

		/** Output only. Two-letter upper-case country code of the product bidding category. */
		countryCode?: string | null;

		/** Output only. ID of the product bidding category. This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436. */
		id?: string | null;

		/** Output only. Language code of the product bidding category. */
		languageCode?: string | null;

		/** Output only. Level of the product bidding category. */
		level?: GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategoryLevel | null;

		/** Output only. Display value of the product bidding category localized according to language_code. */
		localizedName?: string | null;

		/** Output only. Resource name of the parent product bidding category. */
		productBiddingCategoryConstantParent?: string | null;

		/** Output only. The resource name of the product bidding category. Product bidding category resource names have the form: `productBiddingCategoryConstants/{country_code}~{level}~{id}` */
		resourceName?: string | null;

		/** Output only. Status of the product bidding category. */
		status?: GoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstantStatus | null;
	}

	/** A Product Bidding Category. */
	export interface GoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstantFormProperties {

		/** Output only. Two-letter upper-case country code of the product bidding category. */
		countryCode: FormControl<string | null | undefined>,

		/** Output only. ID of the product bidding category. This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436. */
		id: FormControl<string | null | undefined>,

		/** Output only. Language code of the product bidding category. */
		languageCode: FormControl<string | null | undefined>,

		/** Output only. Level of the product bidding category. */
		level: FormControl<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategoryLevel | null | undefined>,

		/** Output only. Display value of the product bidding category localized according to language_code. */
		localizedName: FormControl<string | null | undefined>,

		/** Output only. Resource name of the parent product bidding category. */
		productBiddingCategoryConstantParent: FormControl<string | null | undefined>,

		/** Output only. The resource name of the product bidding category. Product bidding category resource names have the form: `productBiddingCategoryConstants/{country_code}~{level}~{id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. Status of the product bidding category. */
		status: FormControl<GoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstantStatus | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstantFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstantFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<GoogleAdsSearchads360V0Resources_ListingGroupFilterDimension_ProductBiddingCategoryLevel | null | undefined>(undefined),
			localizedName: new FormControl<string | null | undefined>(undefined),
			productBiddingCategoryConstantParent: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstantStatus | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstantStatus { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', ACTIVE = 'ACTIVE', OBSOLETE = 'OBSOLETE' }


	/** A product group view. */
	export interface GoogleAdsSearchads360V0Resources__ProductGroupView {

		/** Output only. The resource name of the product group view. Product group view resource names have the form: `customers/{customer_id}/productGroupViews/{ad_group_id}~{criterion_id}` */
		resourceName?: string | null;
	}

	/** A product group view. */
	export interface GoogleAdsSearchads360V0Resources__ProductGroupViewFormProperties {

		/** Output only. The resource name of the product group view. Product group view resource names have the form: `customers/{customer_id}/productGroupViews/{ad_group_id}~{criterion_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__ProductGroupViewFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__ProductGroupViewFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A field or resource (artifact) used by SearchAds360Service. */
	export interface GoogleAdsSearchads360V0Resources__SearchAds360Field {

		/** Output only. The names of all resources that are selectable with the described artifact. Fields from these resources do not segment metrics when included in search queries. This field is only set for artifacts whose category is RESOURCE. */
		attributeResources?: Array<string>;

		/** Output only. The category of the artifact. */
		category?: GoogleAdsSearchads360V0Resources__SearchAds360FieldCategory | null;

		/** Output only. This field determines the operators that can be used with the artifact in WHERE clauses. */
		dataType?: GoogleAdsSearchads360V0Resources__SearchAds360FieldDataType | null;

		/** Output only. Values the artifact can assume if it is a field of type ENUM. This field is only set for artifacts of category SEGMENT or ATTRIBUTE. */
		enumValues?: Array<string>;

		/** Output only. Whether the artifact can be used in a WHERE clause in search queries. */
		filterable?: boolean | null;

		/** Output only. Whether the field artifact is repeated. */
		isRepeated?: boolean | null;

		/** Output only. This field lists the names of all metrics that are selectable with the described artifact when it is used in the FROM clause. It is only set for artifacts whose category is RESOURCE. */
		metrics?: Array<string>;

		/** Output only. The name of the artifact. */
		name?: string | null;

		/** Output only. The resource name of the artifact. Artifact resource names have the form: `SearchAds360Fields/{name}` */
		resourceName?: string | null;

		/** Output only. This field lists the names of all artifacts, whether a segment or another resource, that segment metrics when included in search queries and when the described artifact is used in the FROM clause. It is only set for artifacts whose category is RESOURCE. */
		segments?: Array<string>;

		/** Output only. Whether the artifact can be used in a SELECT clause in search queries. */
		selectable?: boolean | null;

		/** Output only. The names of all resources, segments, and metrics that are selectable with the described artifact. */
		selectableWith?: Array<string>;

		/** Output only. Whether the artifact can be used in a ORDER BY clause in search queries. */
		sortable?: boolean | null;

		/** Output only. The URL of proto describing the artifact's data type. */
		typeUrl?: string | null;
	}

	/** A field or resource (artifact) used by SearchAds360Service. */
	export interface GoogleAdsSearchads360V0Resources__SearchAds360FieldFormProperties {

		/** Output only. The category of the artifact. */
		category: FormControl<GoogleAdsSearchads360V0Resources__SearchAds360FieldCategory | null | undefined>,

		/** Output only. This field determines the operators that can be used with the artifact in WHERE clauses. */
		dataType: FormControl<GoogleAdsSearchads360V0Resources__SearchAds360FieldDataType | null | undefined>,

		/** Output only. Whether the artifact can be used in a WHERE clause in search queries. */
		filterable: FormControl<boolean | null | undefined>,

		/** Output only. Whether the field artifact is repeated. */
		isRepeated: FormControl<boolean | null | undefined>,

		/** Output only. The name of the artifact. */
		name: FormControl<string | null | undefined>,

		/** Output only. The resource name of the artifact. Artifact resource names have the form: `SearchAds360Fields/{name}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. Whether the artifact can be used in a SELECT clause in search queries. */
		selectable: FormControl<boolean | null | undefined>,

		/** Output only. Whether the artifact can be used in a ORDER BY clause in search queries. */
		sortable: FormControl<boolean | null | undefined>,

		/** Output only. The URL of proto describing the artifact's data type. */
		typeUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__SearchAds360FieldFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__SearchAds360FieldFormProperties>({
			category: new FormControl<GoogleAdsSearchads360V0Resources__SearchAds360FieldCategory | null | undefined>(undefined),
			dataType: new FormControl<GoogleAdsSearchads360V0Resources__SearchAds360FieldDataType | null | undefined>(undefined),
			filterable: new FormControl<boolean | null | undefined>(undefined),
			isRepeated: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			selectable: new FormControl<boolean | null | undefined>(undefined),
			sortable: new FormControl<boolean | null | undefined>(undefined),
			typeUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__SearchAds360FieldCategory { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', RESOURCE = 'RESOURCE', ATTRIBUTE = 'ATTRIBUTE', SEGMENT = 'SEGMENT', METRIC = 'METRIC' }

	export enum GoogleAdsSearchads360V0Resources__SearchAds360FieldDataType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', BOOLEAN = 'BOOLEAN', DATE = 'DATE', DOUBLE = 'DOUBLE', ENUM = 'ENUM', FLOAT = 'FLOAT', INT32 = 'INT32', INT64 = 'INT64', MESSAGE = 'MESSAGE', RESOURCE_NAME = 'RESOURCE_NAME', STRING = 'STRING', UINT64 = 'UINT64' }


	/** Shopping performance view. Provides Shopping campaign statistics aggregated at several product dimension levels. Product dimension values from Merchant Center such as brand, category, custom attributes, product condition and product type will reflect the state of each dimension as of the date and time when the corresponding event was recorded. */
	export interface GoogleAdsSearchads360V0Resources__ShoppingPerformanceView {

		/** Output only. The resource name of the Shopping performance view. Shopping performance view resource names have the form: `customers/{customer_id}/shoppingPerformanceView` */
		resourceName?: string | null;
	}

	/** Shopping performance view. Provides Shopping campaign statistics aggregated at several product dimension levels. Product dimension values from Merchant Center such as brand, category, custom attributes, product condition and product type will reflect the state of each dimension as of the date and time when the corresponding event was recorded. */
	export interface GoogleAdsSearchads360V0Resources__ShoppingPerformanceViewFormProperties {

		/** Output only. The resource name of the Shopping performance view. Shopping performance view resource names have the form: `customers/{customer_id}/shoppingPerformanceView` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__ShoppingPerformanceViewFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__ShoppingPerformanceViewFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A user list. This is a list of users a customer may target. */
	export interface GoogleAdsSearchads360V0Resources__UserList {

		/** Output only. Id of the user list. */
		id?: string | null;

		/** Name of this user list. Depending on its access_reason, the user list name may not be unique (for example, if access_reason=SHARED) */
		name?: string | null;

		/** Immutable. The resource name of the user list. User list resource names have the form: `customers/{customer_id}/userLists/{user_list_id}` */
		resourceName?: string | null;

		/** Output only. Type of this list. This field is read-only. */
		type?: GoogleAdsSearchads360V0Resources__UserListType | null;
	}

	/** A user list. This is a list of users a customer may target. */
	export interface GoogleAdsSearchads360V0Resources__UserListFormProperties {

		/** Output only. Id of the user list. */
		id: FormControl<string | null | undefined>,

		/** Name of this user list. Depending on its access_reason, the user list name may not be unique (for example, if access_reason=SHARED) */
		name: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the user list. User list resource names have the form: `customers/{customer_id}/userLists/{user_list_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. Type of this list. This field is read-only. */
		type: FormControl<GoogleAdsSearchads360V0Resources__UserListType | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__UserListFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__UserListFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleAdsSearchads360V0Resources__UserListType | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Resources__UserListType { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', REMARKETING = 'REMARKETING', LOGICAL = 'LOGICAL', EXTERNAL_REMARKETING = 'EXTERNAL_REMARKETING', RULE_BASED = 'RULE_BASED', SIMILAR = 'SIMILAR', CRM_BASED = 'CRM_BASED' }


	/** A visit. */
	export interface GoogleAdsSearchads360V0Resources__Visit {

		/** Output only. Ad ID. A value of 0 indicates that the ad is unattributed. */
		adId?: string | null;

		/** Output only. Asset field type of the visit event. */
		assetFieldType?: GoogleAdsSearchads360V0Resources__AssetGroupAssetFieldType | null;

		/** Output only. ID of the asset which was interacted with during the visit event. */
		assetId?: string | null;

		/** Output only. A unique string for each visit that is passed to the landing page as the click id URL parameter. */
		clickId?: string | null;

		/** Output only. Search Ads 360 keyword ID. A value of 0 indicates that the keyword is unattributed. */
		criterionId?: string | null;

		/** Output only. The ID of the visit. */
		id?: string | null;

		/** Output only. The Search Ads 360 inventory account ID containing the product that was clicked on. Search Ads 360 generates this ID when you link an inventory account in Search Ads 360. */
		merchantId?: string | null;

		/** Output only. The sales channel of the product that was clicked on: Online or Local. */
		productChannel?: GoogleAdsSearchads360V0Common__SegmentsProductChannel | null;

		/** Output only. The country (ISO-3166 format) registered for the inventory feed that contains the product clicked on. */
		productCountryCode?: string | null;

		/** Output only. The ID of the product clicked on. */
		productId?: string | null;

		/** Output only. The language (ISO-639-1) that has been set for the Merchant Center feed containing data about the product. */
		productLanguageCode?: string | null;

		/** Output only. The store in the Local Inventory Ad that was clicked on. This should match the store IDs used in your local products feed. */
		productStoreId?: string | null;

		/** Output only. The resource name of the visit. Visit resource names have the form: `customers/{customer_id}/visits/{ad_group_id}~{criterion_id}~{ds_visit_id}` */
		resourceName?: string | null;

		/** Output only. The timestamp of the visit event. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
		visitDateTime?: string | null;
	}

	/** A visit. */
	export interface GoogleAdsSearchads360V0Resources__VisitFormProperties {

		/** Output only. Ad ID. A value of 0 indicates that the ad is unattributed. */
		adId: FormControl<string | null | undefined>,

		/** Output only. Asset field type of the visit event. */
		assetFieldType: FormControl<GoogleAdsSearchads360V0Resources__AssetGroupAssetFieldType | null | undefined>,

		/** Output only. ID of the asset which was interacted with during the visit event. */
		assetId: FormControl<string | null | undefined>,

		/** Output only. A unique string for each visit that is passed to the landing page as the click id URL parameter. */
		clickId: FormControl<string | null | undefined>,

		/** Output only. Search Ads 360 keyword ID. A value of 0 indicates that the keyword is unattributed. */
		criterionId: FormControl<string | null | undefined>,

		/** Output only. The ID of the visit. */
		id: FormControl<string | null | undefined>,

		/** Output only. The Search Ads 360 inventory account ID containing the product that was clicked on. Search Ads 360 generates this ID when you link an inventory account in Search Ads 360. */
		merchantId: FormControl<string | null | undefined>,

		/** Output only. The sales channel of the product that was clicked on: Online or Local. */
		productChannel: FormControl<GoogleAdsSearchads360V0Common__SegmentsProductChannel | null | undefined>,

		/** Output only. The country (ISO-3166 format) registered for the inventory feed that contains the product clicked on. */
		productCountryCode: FormControl<string | null | undefined>,

		/** Output only. The ID of the product clicked on. */
		productId: FormControl<string | null | undefined>,

		/** Output only. The language (ISO-639-1) that has been set for the Merchant Center feed containing data about the product. */
		productLanguageCode: FormControl<string | null | undefined>,

		/** Output only. The store in the Local Inventory Ad that was clicked on. This should match the store IDs used in your local products feed. */
		productStoreId: FormControl<string | null | undefined>,

		/** Output only. The resource name of the visit. Visit resource names have the form: `customers/{customer_id}/visits/{ad_group_id}~{criterion_id}~{ds_visit_id}` */
		resourceName: FormControl<string | null | undefined>,

		/** Output only. The timestamp of the visit event. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. */
		visitDateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__VisitFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__VisitFormProperties>({
			adId: new FormControl<string | null | undefined>(undefined),
			assetFieldType: new FormControl<GoogleAdsSearchads360V0Resources__AssetGroupAssetFieldType | null | undefined>(undefined),
			assetId: new FormControl<string | null | undefined>(undefined),
			clickId: new FormControl<string | null | undefined>(undefined),
			criterionId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			productChannel: new FormControl<GoogleAdsSearchads360V0Common__SegmentsProductChannel | null | undefined>(undefined),
			productCountryCode: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			productLanguageCode: new FormControl<string | null | undefined>(undefined),
			productStoreId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			visitDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A webpage view. */
	export interface GoogleAdsSearchads360V0Resources__WebpageView {

		/** Output only. The resource name of the webpage view. Webpage view resource names have the form: `customers/{customer_id}/webpageViews/{ad_group_id}~{criterion_id}` */
		resourceName?: string | null;
	}

	/** A webpage view. */
	export interface GoogleAdsSearchads360V0Resources__WebpageViewFormProperties {

		/** Output only. The resource name of the webpage view. Webpage view resource names have the form: `customers/{customer_id}/webpageViews/{ad_group_id}~{criterion_id}` */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Resources__WebpageViewFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Resources__WebpageViewFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for custom column header. */
	export interface GoogleAdsSearchads360V0Services__CustomColumnHeader {

		/** The custom column ID. */
		id?: string | null;

		/** The user defined name of the custom column. */
		name?: string | null;

		/** True when the custom column references metrics. */
		referencesMetrics?: boolean | null;
	}

	/** Message for custom column header. */
	export interface GoogleAdsSearchads360V0Services__CustomColumnHeaderFormProperties {

		/** The custom column ID. */
		id: FormControl<string | null | undefined>,

		/** The user defined name of the custom column. */
		name: FormControl<string | null | undefined>,

		/** True when the custom column references metrics. */
		referencesMetrics: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Services__CustomColumnHeaderFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Services__CustomColumnHeaderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			referencesMetrics: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for CustomerService.ListAccessibleCustomers. */
	export interface GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse {

		/** Resource name of customers directly accessible by the user authenticating the call. */
		resourceNames?: Array<string>;
	}

	/** Response message for CustomerService.ListAccessibleCustomers. */
	export interface GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponseFormProperties {
	}
	export function CreateGoogleAdsSearchads360V0Services__ListAccessibleCustomersResponseFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponseFormProperties>({
		});

	}


	/** Response message for fetching all custom columns associated with a customer. */
	export interface GoogleAdsSearchads360V0Services__ListCustomColumnsResponse {

		/** The CustomColumns owned by the provided customer. */
		customColumns?: Array<GoogleAdsSearchads360V0Resources__CustomColumn>;
	}

	/** Response message for fetching all custom columns associated with a customer. */
	export interface GoogleAdsSearchads360V0Services__ListCustomColumnsResponseFormProperties {
	}
	export function CreateGoogleAdsSearchads360V0Services__ListCustomColumnsResponseFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Services__ListCustomColumnsResponseFormProperties>({
		});

	}


	/** A returned row from the query. */
	export interface GoogleAdsSearchads360V0Services__SearchAds360Row {

		/** An ad group. */
		adGroup?: GoogleAdsSearchads360V0Resources__AdGroup;

		/** An ad group ad. */
		adGroupAd?: GoogleAdsSearchads360V0Resources__AdGroupAd;

		/** A relationship between an ad group ad and a label. */
		adGroupAdLabel?: GoogleAdsSearchads360V0Resources__AdGroupAdLabel;

		/** A link between an ad group and an asset. */
		adGroupAsset?: GoogleAdsSearchads360V0Resources__AdGroupAsset;

		/** AdGroupAssetSet is the linkage between an ad group and an asset set. Creating an AdGroupAssetSet links an asset set with an ad group. */
		adGroupAssetSet?: GoogleAdsSearchads360V0Resources__AdGroupAssetSet;

		/** An ad group audience view. Includes performance data from interests and remarketing lists for Display Network and YouTube Network ads, and remarketing lists for search ads (RLSA), aggregated at the audience level. */
		adGroupAudienceView?: GoogleAdsSearchads360V0Resources__AdGroupAudienceView;

		/** Represents an ad group bid modifier. */
		adGroupBidModifier?: GoogleAdsSearchads360V0Resources__AdGroupBidModifier;

		/** An ad group criterion. */
		adGroupCriterion?: GoogleAdsSearchads360V0Resources__AdGroupCriterion;

		/** A relationship between an ad group criterion and a label. */
		adGroupCriterionLabel?: GoogleAdsSearchads360V0Resources__AdGroupCriterionLabel;

		/** A relationship between an ad group and a label. */
		adGroupLabel?: GoogleAdsSearchads360V0Resources__AdGroupLabel;

		/** An age range view. */
		ageRangeView?: GoogleAdsSearchads360V0Resources__AgeRangeView;

		/** Asset is a part of an ad which can be shared across multiple ads. It can be an image (ImageAsset), a video (YoutubeVideoAsset), etc. Assets are immutable and cannot be removed. To stop an asset from serving, remove the asset from the entity that is using it. */
		asset?: GoogleAdsSearchads360V0Resources__Asset;

		/** An asset group. AssetGroupAsset is used to link an asset to the asset group. AssetGroupSignal is used to associate a signal to an asset group. */
		assetGroup?: GoogleAdsSearchads360V0Resources__AssetGroup;

		/** AssetGroupAsset is the link between an asset and an asset group. Adding an AssetGroupAsset links an asset with an asset group. */
		assetGroupAsset?: GoogleAdsSearchads360V0Resources__AssetGroupAsset;

		/** AssetGroupListingGroupFilter represents a listing group filter tree node in an asset group. */
		assetGroupListingGroupFilter?: GoogleAdsSearchads360V0Resources__AssetGroupListingGroupFilter;

		/** AssetGroupSignal represents a signal in an asset group. The existence of a signal tells the performance max campaign who's most likely to convert. Performance Max uses the signal to look for new people with similar or stronger intent to find conversions across Search, Display, Video, and more. */
		assetGroupSignal?: GoogleAdsSearchads360V0Resources__AssetGroupSignal;

		/** A view on the usage of ad group ad asset combination. */
		assetGroupTopCombinationView?: GoogleAdsSearchads360V0Resources__AssetGroupTopCombinationView;

		/** An asset set representing a collection of assets. Use AssetSetAsset to link an asset to the asset set. */
		assetSet?: GoogleAdsSearchads360V0Resources__AssetSet;

		/** AssetSetAsset is the link between an asset and an asset set. Adding an AssetSetAsset links an asset with an asset set. */
		assetSetAsset?: GoogleAdsSearchads360V0Resources__AssetSetAsset;

		/** Audience is an effective targeting option that lets you intersect different segment attributes, such as detailed demographics and affinities, to create audiences that represent sections of your target segments. */
		audience?: GoogleAdsSearchads360V0Resources__Audience;

		/** A bidding strategy. */
		biddingStrategy?: GoogleAdsSearchads360V0Resources__BiddingStrategy;

		/** A campaign. */
		campaign?: GoogleAdsSearchads360V0Resources__Campaign;

		/** A link between a Campaign and an Asset. */
		campaignAsset?: GoogleAdsSearchads360V0Resources__CampaignAsset;

		/** CampaignAssetSet is the linkage between a campaign and an asset set. Adding a CampaignAssetSet links an asset set with a campaign. */
		campaignAssetSet?: GoogleAdsSearchads360V0Resources__CampaignAssetSet;

		/** A campaign audience view. Includes performance data from interests and remarketing lists for Display Network and YouTube Network ads, and remarketing lists for search ads (RLSA), aggregated by campaign and audience criterion. This view only includes audiences attached at the campaign level. */
		campaignAudienceView?: GoogleAdsSearchads360V0Resources__CampaignAudienceView;

		/** A campaign budget. */
		campaignBudget?: GoogleAdsSearchads360V0Resources__CampaignBudget;

		/** A campaign criterion. */
		campaignCriterion?: GoogleAdsSearchads360V0Resources__CampaignCriterion;

		/** Represents a relationship between a campaign and a label. */
		campaignLabel?: GoogleAdsSearchads360V0Resources__CampaignLabel;

		/** Cart data sales view. */
		cartDataSalesView?: GoogleAdsSearchads360V0Resources__CartDataSalesView;

		/** A conversion. */
		conversion?: GoogleAdsSearchads360V0Resources__Conversion;

		/** A conversion action. */
		conversionAction?: GoogleAdsSearchads360V0Resources__ConversionAction;

		/** The custom columns. */
		customColumns?: Array<GoogleAdsSearchads360V0Common__Value>;

		/** A customer. */
		customer?: GoogleAdsSearchads360V0Resources__Customer;

		/** A link between a customer and an asset. */
		customerAsset?: GoogleAdsSearchads360V0Resources__CustomerAsset;

		/** CustomerAssetSet is the linkage between a customer and an asset set. Adding a CustomerAssetSet links an asset set with a customer. */
		customerAssetSet?: GoogleAdsSearchads360V0Resources__CustomerAssetSet;

		/** A link between the given customer and a client customer. CustomerClients only exist for manager customers. All direct and indirect client customers are included, as well as the manager itself. */
		customerClient?: GoogleAdsSearchads360V0Resources__CustomerClient;

		/** Represents customer-manager link relationship. */
		customerManagerLink?: GoogleAdsSearchads360V0Resources__CustomerManagerLink;

		/** A dynamic search ads search term view. */
		dynamicSearchAdsSearchTermView?: GoogleAdsSearchads360V0Resources__DynamicSearchAdsSearchTermView;

		/** A gender view. */
		genderView?: GoogleAdsSearchads360V0Resources__GenderView;

		/** A geo target constant. */
		geoTargetConstant?: GoogleAdsSearchads360V0Resources__GeoTargetConstant;

		/** A keyword view. */
		keywordView?: GoogleAdsSearchads360V0Resources__KeywordView;

		/** A label. */
		label?: GoogleAdsSearchads360V0Resources__Label;

		/** A language. */
		languageConstant?: GoogleAdsSearchads360V0Resources__LanguageConstant;

		/** A location view summarizes the performance of campaigns by Location criteria. */
		locationView?: GoogleAdsSearchads360V0Resources__LocationView;

		/** Metrics data. */
		metrics?: GoogleAdsSearchads360V0Common__Metrics;

		/** A Product Bidding Category. */
		productBiddingCategoryConstant?: GoogleAdsSearchads360V0Resources__ProductBiddingCategoryConstant;

		/** A product group view. */
		productGroupView?: GoogleAdsSearchads360V0Resources__ProductGroupView;

		/** Segment only fields. */
		segments?: GoogleAdsSearchads360V0Common__Segments;

		/** Shopping performance view. Provides Shopping campaign statistics aggregated at several product dimension levels. Product dimension values from Merchant Center such as brand, category, custom attributes, product condition and product type will reflect the state of each dimension as of the date and time when the corresponding event was recorded. */
		shoppingPerformanceView?: GoogleAdsSearchads360V0Resources__ShoppingPerformanceView;

		/** A user list. This is a list of users a customer may target. */
		userList?: GoogleAdsSearchads360V0Resources__UserList;

		/** A visit. */
		visit?: GoogleAdsSearchads360V0Resources__Visit;

		/** A webpage view. */
		webpageView?: GoogleAdsSearchads360V0Resources__WebpageView;
	}

	/** A returned row from the query. */
	export interface GoogleAdsSearchads360V0Services__SearchAds360RowFormProperties {
	}
	export function CreateGoogleAdsSearchads360V0Services__SearchAds360RowFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Services__SearchAds360RowFormProperties>({
		});

	}


	/** Request message for SearchAds360FieldService.SearchSearchAds360Fields. */
	export interface GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequest {

		/**
		 * Number of elements to retrieve in a single page. When too large a page is requested, the server may decide to further limit the number of returned resources.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize?: number | null;

		/** Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results. */
		pageToken?: string | null;

		/** Required. The query string. */
		query?: string | null;
	}

	/** Request message for SearchAds360FieldService.SearchSearchAds360Fields. */
	export interface GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequestFormProperties {

		/**
		 * Number of elements to retrieve in a single page. When too large a page is requested, the server may decide to further limit the number of returned resources.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize: FormControl<number | null | undefined>,

		/** Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results. */
		pageToken: FormControl<string | null | undefined>,

		/** Required. The query string. */
		query: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequestFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for SearchAds360FieldService.SearchSearchAds360Fields. */
	export interface GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse {

		/** Pagination token used to retrieve the next page of results. Pass the content of this string as the `page_token` attribute of the next request. `next_page_token` is not returned for the last page. */
		nextPageToken?: string | null;

		/** The list of fields that matched the query. */
		results?: Array<GoogleAdsSearchads360V0Resources__SearchAds360Field>;

		/** Total number of results that match the query ignoring the LIMIT clause. */
		totalResultsCount?: string | null;
	}

	/** Response message for SearchAds360FieldService.SearchSearchAds360Fields. */
	export interface GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponseFormProperties {

		/** Pagination token used to retrieve the next page of results. Pass the content of this string as the `page_token` attribute of the next request. `next_page_token` is not returned for the last page. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Total number of results that match the query ignoring the LIMIT clause. */
		totalResultsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponseFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalResultsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for SearchAds360Service.Search. */
	export interface GoogleAdsSearchads360V0Services__SearchSearchAds360Request {

		/**
		 * Number of elements to retrieve in a single page. When too large a page is requested, the server may decide to further limit the number of returned resources.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize?: number | null;

		/** Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results. */
		pageToken?: string | null;

		/** Required. The query string. */
		query?: string | null;

		/** If true, the total number of results that match the query ignoring the LIMIT clause will be included in the response. Default is false. */
		returnTotalResultsCount?: boolean | null;

		/** Determines whether a summary row will be returned. By default, summary row is not returned. If requested, the summary row will be sent in a response by itself after all other query results are returned. */
		summaryRowSetting?: GoogleAdsSearchads360V0Services__SearchSearchAds360RequestSummaryRowSetting | null;

		/** If true, the request is validated but not executed. */
		validateOnly?: boolean | null;
	}

	/** Request message for SearchAds360Service.Search. */
	export interface GoogleAdsSearchads360V0Services__SearchSearchAds360RequestFormProperties {

		/**
		 * Number of elements to retrieve in a single page. When too large a page is requested, the server may decide to further limit the number of returned resources.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize: FormControl<number | null | undefined>,

		/** Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results. */
		pageToken: FormControl<string | null | undefined>,

		/** Required. The query string. */
		query: FormControl<string | null | undefined>,

		/** If true, the total number of results that match the query ignoring the LIMIT clause will be included in the response. Default is false. */
		returnTotalResultsCount: FormControl<boolean | null | undefined>,

		/** Determines whether a summary row will be returned. By default, summary row is not returned. If requested, the summary row will be sent in a response by itself after all other query results are returned. */
		summaryRowSetting: FormControl<GoogleAdsSearchads360V0Services__SearchSearchAds360RequestSummaryRowSetting | null | undefined>,

		/** If true, the request is validated but not executed. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Services__SearchSearchAds360RequestFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Services__SearchSearchAds360RequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			returnTotalResultsCount: new FormControl<boolean | null | undefined>(undefined),
			summaryRowSetting: new FormControl<GoogleAdsSearchads360V0Services__SearchSearchAds360RequestSummaryRowSetting | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleAdsSearchads360V0Services__SearchSearchAds360RequestSummaryRowSetting { UNSPECIFIED = 'UNSPECIFIED', UNKNOWN = 'UNKNOWN', NO_SUMMARY_ROW = 'NO_SUMMARY_ROW', SUMMARY_ROW_WITH_RESULTS = 'SUMMARY_ROW_WITH_RESULTS', SUMMARY_ROW_ONLY = 'SUMMARY_ROW_ONLY' }


	/** Response message for SearchAds360Service.Search. */
	export interface GoogleAdsSearchads360V0Services__SearchSearchAds360Response {

		/** The headers of the custom columns in the results. */
		customColumnHeaders?: Array<GoogleAdsSearchads360V0Services__CustomColumnHeader>;

		/** FieldMask that represents what fields were requested by the user. */
		fieldMask?: string | null;

		/** Pagination token used to retrieve the next page of results. Pass the content of this string as the `page_token` attribute of the next request. `next_page_token` is not returned for the last page. */
		nextPageToken?: string | null;

		/** The list of rows that matched the query. */
		results?: Array<GoogleAdsSearchads360V0Services__SearchAds360Row>;

		/** A returned row from the query. */
		summaryRow?: GoogleAdsSearchads360V0Services__SearchAds360Row;

		/** Total number of results that match the query ignoring the LIMIT clause. */
		totalResultsCount?: string | null;
	}

	/** Response message for SearchAds360Service.Search. */
	export interface GoogleAdsSearchads360V0Services__SearchSearchAds360ResponseFormProperties {

		/** FieldMask that represents what fields were requested by the user. */
		fieldMask: FormControl<string | null | undefined>,

		/** Pagination token used to retrieve the next page of results. Pass the content of this string as the `page_token` attribute of the next request. `next_page_token` is not returned for the last page. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Total number of results that match the query ignoring the LIMIT clause. */
		totalResultsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAdsSearchads360V0Services__SearchSearchAds360ResponseFormGroup() {
		return new FormGroup<GoogleAdsSearchads360V0Services__SearchSearchAds360ResponseFormProperties>({
			fieldMask: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalResultsCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns all the custom columns associated with the customer in full detail.
		 * Get v0/customers/{customerId}/customColumns
		 * @param {string} customerId Required. The ID of the customer to apply the CustomColumn list operation to.
		 * @return {GoogleAdsSearchads360V0Services__ListCustomColumnsResponse} Successful response
		 */
		Searchads360_customers_customColumns_list(customerId: string): Observable<GoogleAdsSearchads360V0Services__ListCustomColumnsResponse> {
			return this.http.get<GoogleAdsSearchads360V0Services__ListCustomColumnsResponse>(this.baseUri + 'v0/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/customColumns', {});
		}

		/**
		 * Returns all rows that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()
		 * Post v0/customers/{customerId}/searchAds360:search
		 * @param {string} customerId Required. The ID of the customer being queried.
		 * @return {GoogleAdsSearchads360V0Services__SearchSearchAds360Response} Successful response
		 */
		Searchads360_customers_searchAds360_search(customerId: string, requestBody: GoogleAdsSearchads360V0Services__SearchSearchAds360Request): Observable<GoogleAdsSearchads360V0Services__SearchSearchAds360Response> {
			return this.http.post<GoogleAdsSearchads360V0Services__SearchSearchAds360Response>(this.baseUri + 'v0/customers/' + (customerId == null ? '' : encodeURIComponent(customerId)) + '/searchAds360:search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns resource names of customers directly accessible by the user authenticating the call. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
		 * Get v0/customers:listAccessibleCustomers
		 * @return {GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse} Successful response
		 */
		Searchads360_customers_listAccessibleCustomers(): Observable<GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse> {
			return this.http.get<GoogleAdsSearchads360V0Services__ListAccessibleCustomersResponse>(this.baseUri + 'v0/customers:listAccessibleCustomers', {});
		}

		/**
		 * Returns all fields that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()
		 * Post v0/searchAds360Fields:search
		 * @return {GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse} Successful response
		 */
		Searchads360_searchAds360Fields_search(requestBody: GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsRequest): Observable<GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse> {
			return this.http.post<GoogleAdsSearchads360V0Services__SearchSearchAds360FieldsResponse>(this.baseUri + 'v0/searchAds360Fields:search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns just the requested field. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
		 * Get v0/{resourceName}
		 * @param {string} resourceName Required. The resource name of the field to get.
		 * @return {GoogleAdsSearchads360V0Resources__SearchAds360Field} Successful response
		 */
		Searchads360_searchAds360Fields_get(resourceName: string): Observable<GoogleAdsSearchads360V0Resources__SearchAds360Field> {
			return this.http.get<GoogleAdsSearchads360V0Resources__SearchAds360Field>(this.baseUri + 'v0/' + (resourceName == null ? '' : encodeURIComponent(resourceName)), {});
		}
	}

}

