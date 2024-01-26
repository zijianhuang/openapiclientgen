import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains properties of a Campaign Manager account. */
	export interface Account {

		/** Account permissions assigned to this account. */
		accountPermissionIds?: Array<string>;

		/** Profile for this account. This is a read-only field that can be left blank. */
		accountProfile?: AccountAccountProfile | null;

		/** Whether this account is active. */
		active?: boolean | null;

		/** Maximum number of active ads allowed for this account. */
		activeAdsLimitTier?: AccountActiveAdsLimitTier | null;

		/** Whether to serve creatives with Active View tags. If disabled, viewability data will not be available for any impressions. */
		activeViewOptOut?: boolean | null;

		/** User role permissions available to the user roles of this account. */
		availablePermissionIds?: Array<string>;

		/** ID of the country associated with this account. */
		countryId?: string | null;

		/** ID of currency associated with this account. This is a required field. Acceptable values are: - "1" for USD - "2" for GBP - "3" for ESP - "4" for SEK - "5" for CAD - "6" for JPY - "7" for DEM - "8" for AUD - "9" for FRF - "10" for ITL - "11" for DKK - "12" for NOK - "13" for FIM - "14" for ZAR - "15" for IEP - "16" for NLG - "17" for EUR - "18" for KRW - "19" for TWD - "20" for SGD - "21" for CNY - "22" for HKD - "23" for NZD - "24" for MYR - "25" for BRL - "26" for PTE - "28" for CLP - "29" for TRY - "30" for ARS - "31" for PEN - "32" for ILS - "33" for CHF - "34" for VEF - "35" for COP - "36" for GTQ - "37" for PLN - "39" for INR - "40" for THB - "41" for IDR - "42" for CZK - "43" for RON - "44" for HUF - "45" for RUB - "46" for AED - "47" for BGN - "48" for HRK - "49" for MXN - "50" for NGN - "51" for EGP */
		currencyId?: string | null;

		/** Default placement dimensions for this account. */
		defaultCreativeSizeId?: string | null;

		/** Description of this account. */
		description?: string | null;

		/** ID of this account. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#account". */
		kind?: string | null;

		/** Locale of this account. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese Traditional) */
		locale?: string | null;

		/** Maximum image size allowed for this account, in kilobytes. Value must be greater than or equal to 1. */
		maximumImageSize?: string | null;

		/** Name of this account. This is a required field, and must be less than 128 characters long and be globally unique. */
		name?: string | null;

		/** Whether campaigns created in this account will be enabled for Nielsen OCR reach ratings by default. */
		nielsenOcrEnabled?: boolean | null;

		/** Reporting Configuration */
		reportsConfiguration?: ReportsConfiguration;

		/** Share Path to Conversion reports with Twitter. */
		shareReportsWithTwitter?: boolean | null;

		/** File size limit in kilobytes of Rich Media teaser creatives. Acceptable values are 1 to 10240, inclusive. */
		teaserSizeLimit?: string | null;
	}

	/** Contains properties of a Campaign Manager account. */
	export interface AccountFormProperties {

		/** Profile for this account. This is a read-only field that can be left blank. */
		accountProfile: FormControl<AccountAccountProfile | null | undefined>,

		/** Whether this account is active. */
		active: FormControl<boolean | null | undefined>,

		/** Maximum number of active ads allowed for this account. */
		activeAdsLimitTier: FormControl<AccountActiveAdsLimitTier | null | undefined>,

		/** Whether to serve creatives with Active View tags. If disabled, viewability data will not be available for any impressions. */
		activeViewOptOut: FormControl<boolean | null | undefined>,

		/** ID of the country associated with this account. */
		countryId: FormControl<string | null | undefined>,

		/** ID of currency associated with this account. This is a required field. Acceptable values are: - "1" for USD - "2" for GBP - "3" for ESP - "4" for SEK - "5" for CAD - "6" for JPY - "7" for DEM - "8" for AUD - "9" for FRF - "10" for ITL - "11" for DKK - "12" for NOK - "13" for FIM - "14" for ZAR - "15" for IEP - "16" for NLG - "17" for EUR - "18" for KRW - "19" for TWD - "20" for SGD - "21" for CNY - "22" for HKD - "23" for NZD - "24" for MYR - "25" for BRL - "26" for PTE - "28" for CLP - "29" for TRY - "30" for ARS - "31" for PEN - "32" for ILS - "33" for CHF - "34" for VEF - "35" for COP - "36" for GTQ - "37" for PLN - "39" for INR - "40" for THB - "41" for IDR - "42" for CZK - "43" for RON - "44" for HUF - "45" for RUB - "46" for AED - "47" for BGN - "48" for HRK - "49" for MXN - "50" for NGN - "51" for EGP */
		currencyId: FormControl<string | null | undefined>,

		/** Default placement dimensions for this account. */
		defaultCreativeSizeId: FormControl<string | null | undefined>,

		/** Description of this account. */
		description: FormControl<string | null | undefined>,

		/** ID of this account. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#account". */
		kind: FormControl<string | null | undefined>,

		/** Locale of this account. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese Traditional) */
		locale: FormControl<string | null | undefined>,

		/** Maximum image size allowed for this account, in kilobytes. Value must be greater than or equal to 1. */
		maximumImageSize: FormControl<string | null | undefined>,

		/** Name of this account. This is a required field, and must be less than 128 characters long and be globally unique. */
		name: FormControl<string | null | undefined>,

		/** Whether campaigns created in this account will be enabled for Nielsen OCR reach ratings by default. */
		nielsenOcrEnabled: FormControl<boolean | null | undefined>,

		/** Share Path to Conversion reports with Twitter. */
		shareReportsWithTwitter: FormControl<boolean | null | undefined>,

		/** File size limit in kilobytes of Rich Media teaser creatives. Acceptable values are 1 to 10240, inclusive. */
		teaserSizeLimit: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			accountProfile: new FormControl<AccountAccountProfile | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			activeAdsLimitTier: new FormControl<AccountActiveAdsLimitTier | null | undefined>(undefined),
			activeViewOptOut: new FormControl<boolean | null | undefined>(undefined),
			countryId: new FormControl<string | null | undefined>(undefined),
			currencyId: new FormControl<string | null | undefined>(undefined),
			defaultCreativeSizeId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			maximumImageSize: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nielsenOcrEnabled: new FormControl<boolean | null | undefined>(undefined),
			shareReportsWithTwitter: new FormControl<boolean | null | undefined>(undefined),
			teaserSizeLimit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccountAccountProfile { ACCOUNT_PROFILE_BASIC = 0, ACCOUNT_PROFILE_STANDARD = 1 }

	export enum AccountActiveAdsLimitTier { ACTIVE_ADS_TIER_40K = 0, ACTIVE_ADS_TIER_75K = 1, ACTIVE_ADS_TIER_100K = 2, ACTIVE_ADS_TIER_200K = 3, ACTIVE_ADS_TIER_300K = 4, ACTIVE_ADS_TIER_500K = 5, ACTIVE_ADS_TIER_750K = 6, ACTIVE_ADS_TIER_1M = 7 }


	/** Reporting Configuration */
	export interface ReportsConfiguration {

		/** Whether the exposure to conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting. */
		exposureToConversionEnabled?: boolean | null;

		/** Lookback configuration settings. */
		lookbackConfiguration?: LookbackConfiguration;

		/** Report generation time zone ID of this account. This is a required field that cannot be changed on update. Acceptable values are: - "1" for "America/New_York" - "2" for "Europe/London" - "3" for "Europe/Paris" - "4" for "Africa/Johannesburg" - "5" for "Asia/Jerusalem" - "6" for "Asia/Shanghai" - "7" for "Asia/Hong_Kong" - "8" for "Asia/Tokyo" - "9" for "Australia/Sydney" - "10" for "Asia/Dubai" - "11" for "America/Los_Angeles" - "12" for "Pacific/Auckland" - "13" for "America/Sao_Paulo" - "16" for "America/Asuncion" - "17" for "America/Chicago" - "18" for "America/Denver" - "19" for "America/St_Johns" - "20" for "Asia/Dhaka" - "21" for "Asia/Jakarta" - "22" for "Asia/Kabul" - "23" for "Asia/Karachi" - "24" for "Asia/Calcutta" - "25" for "Asia/Pyongyang" - "26" for "Asia/Rangoon" - "27" for "Atlantic/Cape_Verde" - "28" for "Atlantic/South_Georgia" - "29" for "Australia/Adelaide" - "30" for "Australia/Lord_Howe" - "31" for "Europe/Moscow" - "32" for "Pacific/Kiritimati" - "35" for "Pacific/Norfolk" - "36" for "Pacific/Tongatapu" */
		reportGenerationTimeZoneId?: string | null;
	}

	/** Reporting Configuration */
	export interface ReportsConfigurationFormProperties {

		/** Whether the exposure to conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting. */
		exposureToConversionEnabled: FormControl<boolean | null | undefined>,

		/** Report generation time zone ID of this account. This is a required field that cannot be changed on update. Acceptable values are: - "1" for "America/New_York" - "2" for "Europe/London" - "3" for "Europe/Paris" - "4" for "Africa/Johannesburg" - "5" for "Asia/Jerusalem" - "6" for "Asia/Shanghai" - "7" for "Asia/Hong_Kong" - "8" for "Asia/Tokyo" - "9" for "Australia/Sydney" - "10" for "Asia/Dubai" - "11" for "America/Los_Angeles" - "12" for "Pacific/Auckland" - "13" for "America/Sao_Paulo" - "16" for "America/Asuncion" - "17" for "America/Chicago" - "18" for "America/Denver" - "19" for "America/St_Johns" - "20" for "Asia/Dhaka" - "21" for "Asia/Jakarta" - "22" for "Asia/Kabul" - "23" for "Asia/Karachi" - "24" for "Asia/Calcutta" - "25" for "Asia/Pyongyang" - "26" for "Asia/Rangoon" - "27" for "Atlantic/Cape_Verde" - "28" for "Atlantic/South_Georgia" - "29" for "Australia/Adelaide" - "30" for "Australia/Lord_Howe" - "31" for "Europe/Moscow" - "32" for "Pacific/Kiritimati" - "35" for "Pacific/Norfolk" - "36" for "Pacific/Tongatapu" */
		reportGenerationTimeZoneId: FormControl<string | null | undefined>,
	}
	export function CreateReportsConfigurationFormGroup() {
		return new FormGroup<ReportsConfigurationFormProperties>({
			exposureToConversionEnabled: new FormControl<boolean | null | undefined>(undefined),
			reportGenerationTimeZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lookback configuration settings. */
	export interface LookbackConfiguration {

		/** Lookback window, in days, from the last time a given user clicked on one of your ads. If you enter 0, clicks will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive. */
		clickDuration?: number | null;

		/** Lookback window, in days, from the last time a given user viewed one of your ads. If you enter 0, impressions will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive. */
		postImpressionActivitiesDuration?: number | null;
	}

	/** Lookback configuration settings. */
	export interface LookbackConfigurationFormProperties {

		/** Lookback window, in days, from the last time a given user clicked on one of your ads. If you enter 0, clicks will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive. */
		clickDuration: FormControl<number | null | undefined>,

		/** Lookback window, in days, from the last time a given user viewed one of your ads. If you enter 0, impressions will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive. */
		postImpressionActivitiesDuration: FormControl<number | null | undefined>,
	}
	export function CreateLookbackConfigurationFormGroup() {
		return new FormGroup<LookbackConfigurationFormProperties>({
			clickDuration: new FormControl<number | null | undefined>(undefined),
			postImpressionActivitiesDuration: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Gets a summary of active ads in an account. */
	export interface AccountActiveAdSummary {

		/** ID of the account. */
		accountId?: string | null;

		/** Ads that have been activated for the account */
		activeAds?: string | null;

		/** Maximum number of active ads allowed for the account. */
		activeAdsLimitTier?: AccountActiveAdsLimitTier | null;

		/** Ads that can be activated for the account. */
		availableAds?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountActiveAdSummary". */
		kind?: string | null;
	}

	/** Gets a summary of active ads in an account. */
	export interface AccountActiveAdSummaryFormProperties {

		/** ID of the account. */
		accountId: FormControl<string | null | undefined>,

		/** Ads that have been activated for the account */
		activeAds: FormControl<string | null | undefined>,

		/** Maximum number of active ads allowed for the account. */
		activeAdsLimitTier: FormControl<AccountActiveAdsLimitTier | null | undefined>,

		/** Ads that can be activated for the account. */
		availableAds: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountActiveAdSummary". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountActiveAdSummaryFormGroup() {
		return new FormGroup<AccountActiveAdSummaryFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			activeAds: new FormControl<string | null | undefined>(undefined),
			activeAdsLimitTier: new FormControl<AccountActiveAdsLimitTier | null | undefined>(undefined),
			availableAds: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AccountPermissions contains information about a particular account permission. Some features of Campaign Manager require an account permission to be present in the account. */
	export interface AccountPermission {

		/** Account profiles associated with this account permission. Possible values are: - "ACCOUNT_PROFILE_BASIC" - "ACCOUNT_PROFILE_STANDARD" */
		accountProfiles?: Array<AccountAccountProfile>;

		/** ID of this account permission. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermission". */
		kind?: string | null;

		/** Administrative level required to enable this account permission. */
		level?: AccountPermissionLevel | null;

		/** Name of this account permission. */
		name?: string | null;

		/** Permission group of this account permission. */
		permissionGroupId?: string | null;
	}

	/** AccountPermissions contains information about a particular account permission. Some features of Campaign Manager require an account permission to be present in the account. */
	export interface AccountPermissionFormProperties {

		/** ID of this account permission. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermission". */
		kind: FormControl<string | null | undefined>,

		/** Administrative level required to enable this account permission. */
		level: FormControl<AccountPermissionLevel | null | undefined>,

		/** Name of this account permission. */
		name: FormControl<string | null | undefined>,

		/** Permission group of this account permission. */
		permissionGroupId: FormControl<string | null | undefined>,
	}
	export function CreateAccountPermissionFormGroup() {
		return new FormGroup<AccountPermissionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<AccountPermissionLevel | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			permissionGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccountPermissionLevel { USER = 0, ADMINISTRATOR = 1 }


	/** AccountPermissionGroups contains a mapping of permission group IDs to names. A permission group is a grouping of account permissions. */
	export interface AccountPermissionGroup {

		/** ID of this account permission group. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroup". */
		kind?: string | null;

		/** Name of this account permission group. */
		name?: string | null;
	}

	/** AccountPermissionGroups contains a mapping of permission group IDs to names. A permission group is a grouping of account permissions. */
	export interface AccountPermissionGroupFormProperties {

		/** ID of this account permission group. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroup". */
		kind: FormControl<string | null | undefined>,

		/** Name of this account permission group. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAccountPermissionGroupFormGroup() {
		return new FormGroup<AccountPermissionGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Account Permission Group List Response */
	export interface AccountPermissionGroupsListResponse {

		/** Account permission group collection. */
		accountPermissionGroups?: Array<AccountPermissionGroup>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroupGroupsListResponse". */
		kind?: string | null;
	}

	/** Account Permission Group List Response */
	export interface AccountPermissionGroupsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroupGroupsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountPermissionGroupsListResponseFormGroup() {
		return new FormGroup<AccountPermissionGroupsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Account Permission List Response */
	export interface AccountPermissionsListResponse {

		/** Account permission collection. */
		accountPermissions?: Array<AccountPermission>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionsListResponse". */
		kind?: string | null;
	}

	/** Account Permission List Response */
	export interface AccountPermissionsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountPermissionsListResponseFormGroup() {
		return new FormGroup<AccountPermissionsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AccountUserProfiles contains properties of a Campaign Manager user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API. */
	export interface AccountUserProfile {

		/** Account ID of the user profile. This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** Whether this user profile is active. This defaults to false, and must be set true on insert for the user profile to be usable. */
		active?: boolean | null;

		/** Object Filter. */
		advertiserFilter?: ObjectFilter;

		/** Object Filter. */
		campaignFilter?: ObjectFilter;

		/** Comments for this user profile. */
		comments?: string | null;

		/** Email of the user profile. The email addresss must be linked to a Google Account. This field is required on insertion and is read-only after insertion. */
		email?: string | null;

		/** ID of the user profile. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfile". */
		kind?: string | null;

		/** Locale of the user profile. This is a required field. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese Traditional) */
		locale?: string | null;

		/** Name of the user profile. This is a required field. Must be less than 64 characters long, must be globally unique, and cannot contain whitespace or any of the following characters: "&;<>"#%,". */
		name?: string | null;

		/** Object Filter. */
		siteFilter?: ObjectFilter;

		/** Subaccount ID of the user profile. This is a read-only field that can be left blank. */
		subaccountId?: string | null;

		/** Trafficker type of this user profile. This is a read-only field. */
		traffickerType?: AccountUserProfileTraffickerType | null;

		/** User type of the user profile. This is a read-only field that can be left blank. */
		userAccessType?: AccountUserProfileUserAccessType | null;

		/** Object Filter. */
		userRoleFilter?: ObjectFilter;

		/** User role ID of the user profile. This is a required field. */
		userRoleId?: string | null;
	}

	/** AccountUserProfiles contains properties of a Campaign Manager user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API. */
	export interface AccountUserProfileFormProperties {

		/** Account ID of the user profile. This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** Whether this user profile is active. This defaults to false, and must be set true on insert for the user profile to be usable. */
		active: FormControl<boolean | null | undefined>,

		/** Comments for this user profile. */
		comments: FormControl<string | null | undefined>,

		/** Email of the user profile. The email addresss must be linked to a Google Account. This field is required on insertion and is read-only after insertion. */
		email: FormControl<string | null | undefined>,

		/** ID of the user profile. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfile". */
		kind: FormControl<string | null | undefined>,

		/** Locale of the user profile. This is a required field. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese Traditional) */
		locale: FormControl<string | null | undefined>,

		/** Name of the user profile. This is a required field. Must be less than 64 characters long, must be globally unique, and cannot contain whitespace or any of the following characters: "&;<>"#%,". */
		name: FormControl<string | null | undefined>,

		/** Subaccount ID of the user profile. This is a read-only field that can be left blank. */
		subaccountId: FormControl<string | null | undefined>,

		/** Trafficker type of this user profile. This is a read-only field. */
		traffickerType: FormControl<AccountUserProfileTraffickerType | null | undefined>,

		/** User type of the user profile. This is a read-only field that can be left blank. */
		userAccessType: FormControl<AccountUserProfileUserAccessType | null | undefined>,

		/** User role ID of the user profile. This is a required field. */
		userRoleId: FormControl<string | null | undefined>,
	}
	export function CreateAccountUserProfileFormGroup() {
		return new FormGroup<AccountUserProfileFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			comments: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
			traffickerType: new FormControl<AccountUserProfileTraffickerType | null | undefined>(undefined),
			userAccessType: new FormControl<AccountUserProfileUserAccessType | null | undefined>(undefined),
			userRoleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object Filter. */
	export interface ObjectFilter {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#objectFilter". */
		kind?: string | null;

		/** Applicable when status is ASSIGNED. The user has access to objects with these object IDs. */
		objectIds?: Array<string>;

		/** Status of the filter. NONE means the user has access to none of the objects. ALL means the user has access to all objects. ASSIGNED means the user has access to the objects with IDs in the objectIds list. */
		status?: ObjectFilterStatus | null;
	}

	/** Object Filter. */
	export interface ObjectFilterFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#objectFilter". */
		kind: FormControl<string | null | undefined>,

		/** Status of the filter. NONE means the user has access to none of the objects. ALL means the user has access to all objects. ASSIGNED means the user has access to the objects with IDs in the objectIds list. */
		status: FormControl<ObjectFilterStatus | null | undefined>,
	}
	export function CreateObjectFilterFormGroup() {
		return new FormGroup<ObjectFilterFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ObjectFilterStatus | null | undefined>(undefined),
		});

	}

	export enum ObjectFilterStatus { NONE = 0, ASSIGNED = 1, ALL = 2 }

	export enum AccountUserProfileTraffickerType { INTERNAL_NON_TRAFFICKER = 0, INTERNAL_TRAFFICKER = 1, EXTERNAL_TRAFFICKER = 2 }

	export enum AccountUserProfileUserAccessType { NORMAL_USER = 0, SUPER_USER = 1, INTERNAL_ADMINISTRATOR = 2, READ_ONLY_SUPER_USER = 3 }


	/** Account User Profile List Response */
	export interface AccountUserProfilesListResponse {

		/** Account user profile collection. */
		accountUserProfiles?: Array<AccountUserProfile>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfilesListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Account User Profile List Response */
	export interface AccountUserProfilesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfilesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAccountUserProfilesListResponseFormGroup() {
		return new FormGroup<AccountUserProfilesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Account List Response */
	export interface AccountsListResponse {

		/** Account collection. */
		accounts?: Array<Account>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountsListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Account List Response */
	export interface AccountsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAccountsListResponseFormGroup() {
		return new FormGroup<AccountsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an activity group. */
	export interface Activities {

		/** List of activity filters. The dimension values need to be all either of type "dfa:activity" or "dfa:activityGroup". */
		filters?: Array<DimensionValue>;

		/** The kind of resource this is, in this case dfareporting#activities. */
		kind?: string | null;

		/** List of names of floodlight activity metrics. */
		metricNames?: Array<string>;
	}

	/** Represents an activity group. */
	export interface ActivitiesFormProperties {

		/** The kind of resource this is, in this case dfareporting#activities. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateActivitiesFormGroup() {
		return new FormGroup<ActivitiesFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a DimensionValue resource. */
	export interface DimensionValue {

		/** The name of the dimension. */
		dimensionName?: string | null;

		/** The eTag of this response for caching purposes. */
		etag?: string | null;

		/** The ID associated with the value if available. */
		id?: string | null;

		/** The kind of resource this is, in this case dfareporting#dimensionValue. */
		kind?: string | null;

		/** Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT. */
		matchType?: DimensionValueMatchType | null;

		/** The value of the dimension. */
		value?: string | null;
	}

	/** Represents a DimensionValue resource. */
	export interface DimensionValueFormProperties {

		/** The name of the dimension. */
		dimensionName: FormControl<string | null | undefined>,

		/** The eTag of this response for caching purposes. */
		etag: FormControl<string | null | undefined>,

		/** The ID associated with the value if available. */
		id: FormControl<string | null | undefined>,

		/** The kind of resource this is, in this case dfareporting#dimensionValue. */
		kind: FormControl<string | null | undefined>,

		/** Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT. */
		matchType: FormControl<DimensionValueMatchType | null | undefined>,

		/** The value of the dimension. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDimensionValueFormGroup() {
		return new FormGroup<DimensionValueFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			matchType: new FormControl<DimensionValueMatchType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DimensionValueMatchType { EXACT = 0, BEGINS_WITH = 1, CONTAINS = 2, WILDCARD_EXPRESSION = 3 }


	/** Contains properties of a Campaign Manager ad. */
	export interface Ad {

		/** Account ID of this ad. This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** Whether this ad is active. When true, archived must be false. */
		active?: boolean | null;

		/** Advertiser ID of this ad. This is a required field on insertion. */
		advertiserId?: string | null;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Whether this ad is archived. When true, active must be false. */
		archived?: boolean | null;

		/** Audience segment ID that is being targeted for this ad. Applicable when type is AD_SERVING_STANDARD_AD. */
		audienceSegmentId?: string | null;

		/** Campaign ID of this ad. This is a required field on insertion. */
		campaignId?: string | null;

		/** Represents a DimensionValue resource. */
		campaignIdDimensionValue?: DimensionValue;

		/** Click-through URL */
		clickThroughUrl?: ClickThroughUrl;

		/** Click Through URL Suffix settings. */
		clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties;

		/** Comments for this ad. */
		comments?: string | null;

		/** Compatibility of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to either rendering on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are only used for existing default ads. New mobile placements must be assigned DISPLAY or DISPLAY_INTERSTITIAL and default ads created for those placements will be limited to those compatibility types. IN_STREAM_VIDEO refers to rendering in-stream video ads developed with the VAST standard. */
		compatibility?: AdCompatibility | null;

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
		dynamicClickTracker?: boolean | null;
		endTime?: Date | null;

		/** Event tag overrides for this ad. */
		eventTagOverrides?: Array<EventTagOverride>;

		/** Geographical Targeting. */
		geoTargeting?: GeoTargeting;

		/** ID of this ad. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Key Value Targeting Expression. */
		keyValueTargetingExpression?: KeyValueTargetingExpression;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#ad". */
		kind?: string | null;

		/** Language Targeting. */
		languageTargeting?: LanguageTargeting;

		/** Modification timestamp. */
		lastModifiedInfo?: LastModifiedInfo;

		/** Name of this ad. This is a required field and must be less than 256 characters long. */
		name?: string | null;

		/** Placement assignments for this ad. */
		placementAssignments?: Array<PlacementAssignment>;

		/** Remarketing List Targeting Expression. */
		remarketingListExpression?: ListTargetingExpression;

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		size?: Size;

		/** Whether this ad is ssl compliant. This is a read-only field that is auto-generated when the ad is inserted or updated. */
		sslCompliant?: boolean | null;

		/** Whether this ad requires ssl. This is a read-only field that is auto-generated when the ad is inserted or updated. */
		sslRequired?: boolean | null;
		startTime?: Date | null;

		/** Subaccount ID of this ad. This is a read-only field that can be left blank. */
		subaccountId?: string | null;

		/** Targeting template ID, used to apply preconfigured targeting information to this ad. This cannot be set while any of dayPartTargeting, geoTargeting, keyValueTargetingExpression, languageTargeting, remarketingListExpression, or technologyTargeting are set. Applicable when type is AD_SERVING_STANDARD_AD. */
		targetingTemplateId?: string | null;

		/** Technology Targeting. */
		technologyTargeting?: TechnologyTargeting;

		/** Type of ad. This is a required field on insertion. Note that default ads ( AD_SERVING_DEFAULT_AD) cannot be created directly (see Creative resource). */
		type?: AdType | null;
	}

	/** Contains properties of a Campaign Manager ad. */
	export interface AdFormProperties {

		/** Account ID of this ad. This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** Whether this ad is active. When true, archived must be false. */
		active: FormControl<boolean | null | undefined>,

		/** Advertiser ID of this ad. This is a required field on insertion. */
		advertiserId: FormControl<string | null | undefined>,

		/** Whether this ad is archived. When true, active must be false. */
		archived: FormControl<boolean | null | undefined>,

		/** Audience segment ID that is being targeted for this ad. Applicable when type is AD_SERVING_STANDARD_AD. */
		audienceSegmentId: FormControl<string | null | undefined>,

		/** Campaign ID of this ad. This is a required field on insertion. */
		campaignId: FormControl<string | null | undefined>,

		/** Comments for this ad. */
		comments: FormControl<string | null | undefined>,

		/** Compatibility of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to either rendering on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are only used for existing default ads. New mobile placements must be assigned DISPLAY or DISPLAY_INTERSTITIAL and default ads created for those placements will be limited to those compatibility types. IN_STREAM_VIDEO refers to rendering in-stream video ads developed with the VAST standard. */
		compatibility: FormControl<AdCompatibility | null | undefined>,

		/** Whether this ad is a dynamic click tracker. Applicable when type is AD_SERVING_CLICK_TRACKER. This is a required field on insert, and is read-only after insert. */
		dynamicClickTracker: FormControl<boolean | null | undefined>,
		endTime: FormControl<Date | null | undefined>,

		/** ID of this ad. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#ad". */
		kind: FormControl<string | null | undefined>,

		/** Name of this ad. This is a required field and must be less than 256 characters long. */
		name: FormControl<string | null | undefined>,

		/** Whether this ad is ssl compliant. This is a read-only field that is auto-generated when the ad is inserted or updated. */
		sslCompliant: FormControl<boolean | null | undefined>,

		/** Whether this ad requires ssl. This is a read-only field that is auto-generated when the ad is inserted or updated. */
		sslRequired: FormControl<boolean | null | undefined>,
		startTime: FormControl<Date | null | undefined>,

		/** Subaccount ID of this ad. This is a read-only field that can be left blank. */
		subaccountId: FormControl<string | null | undefined>,

		/** Targeting template ID, used to apply preconfigured targeting information to this ad. This cannot be set while any of dayPartTargeting, geoTargeting, keyValueTargetingExpression, languageTargeting, remarketingListExpression, or technologyTargeting are set. Applicable when type is AD_SERVING_STANDARD_AD. */
		targetingTemplateId: FormControl<string | null | undefined>,

		/** Type of ad. This is a required field on insertion. Note that default ads ( AD_SERVING_DEFAULT_AD) cannot be created directly (see Creative resource). */
		type: FormControl<AdType | null | undefined>,
	}
	export function CreateAdFormGroup() {
		return new FormGroup<AdFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			archived: new FormControl<boolean | null | undefined>(undefined),
			audienceSegmentId: new FormControl<string | null | undefined>(undefined),
			campaignId: new FormControl<string | null | undefined>(undefined),
			comments: new FormControl<string | null | undefined>(undefined),
			compatibility: new FormControl<AdCompatibility | null | undefined>(undefined),
			dynamicClickTracker: new FormControl<boolean | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sslCompliant: new FormControl<boolean | null | undefined>(undefined),
			sslRequired: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
			targetingTemplateId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AdType | null | undefined>(undefined),
		});

	}


	/** Click-through URL */
	export interface ClickThroughUrl {

		/** Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If defaultLandingPage is enabled then the campaign's default landing page URL is assigned to this field. - If defaultLandingPage is not enabled and a landingPageId is specified then that landing page's URL is assigned to this field. - If neither of the above cases apply, then the customClickThroughUrl is assigned to this field. */
		computedClickThroughUrl?: string | null;

		/** Custom click-through URL. Applicable if the defaultLandingPage field is set to false and the landingPageId field is left unset. */
		customClickThroughUrl?: string | null;

		/** Whether the campaign default landing page is used. */
		defaultLandingPage?: boolean | null;

		/** ID of the landing page for the click-through URL. Applicable if the defaultLandingPage field is set to false. */
		landingPageId?: string | null;
	}

	/** Click-through URL */
	export interface ClickThroughUrlFormProperties {

		/** Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If defaultLandingPage is enabled then the campaign's default landing page URL is assigned to this field. - If defaultLandingPage is not enabled and a landingPageId is specified then that landing page's URL is assigned to this field. - If neither of the above cases apply, then the customClickThroughUrl is assigned to this field. */
		computedClickThroughUrl: FormControl<string | null | undefined>,

		/** Custom click-through URL. Applicable if the defaultLandingPage field is set to false and the landingPageId field is left unset. */
		customClickThroughUrl: FormControl<string | null | undefined>,

		/** Whether the campaign default landing page is used. */
		defaultLandingPage: FormControl<boolean | null | undefined>,

		/** ID of the landing page for the click-through URL. Applicable if the defaultLandingPage field is set to false. */
		landingPageId: FormControl<string | null | undefined>,
	}
	export function CreateClickThroughUrlFormGroup() {
		return new FormGroup<ClickThroughUrlFormProperties>({
			computedClickThroughUrl: new FormControl<string | null | undefined>(undefined),
			customClickThroughUrl: new FormControl<string | null | undefined>(undefined),
			defaultLandingPage: new FormControl<boolean | null | undefined>(undefined),
			landingPageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Click Through URL Suffix settings. */
	export interface ClickThroughUrlSuffixProperties {

		/** Click-through URL suffix to apply to all ads in this entity's scope. Must be less than 128 characters long. */
		clickThroughUrlSuffix?: string | null;

		/** Whether this entity should override the inherited click-through URL suffix with its own defined value. */
		overrideInheritedSuffix?: boolean | null;
	}

	/** Click Through URL Suffix settings. */
	export interface ClickThroughUrlSuffixPropertiesFormProperties {

		/** Click-through URL suffix to apply to all ads in this entity's scope. Must be less than 128 characters long. */
		clickThroughUrlSuffix: FormControl<string | null | undefined>,

		/** Whether this entity should override the inherited click-through URL suffix with its own defined value. */
		overrideInheritedSuffix: FormControl<boolean | null | undefined>,
	}
	export function CreateClickThroughUrlSuffixPropertiesFormGroup() {
		return new FormGroup<ClickThroughUrlSuffixPropertiesFormProperties>({
			clickThroughUrlSuffix: new FormControl<string | null | undefined>(undefined),
			overrideInheritedSuffix: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AdCompatibility { DISPLAY = 0, DISPLAY_INTERSTITIAL = 1, APP = 2, APP_INTERSTITIAL = 3, IN_STREAM_VIDEO = 4, IN_STREAM_AUDIO = 5 }


	/** Modification timestamp. */
	export interface LastModifiedInfo {

		/** Timestamp of the last change in milliseconds since epoch. */
		time?: string | null;
	}

	/** Modification timestamp. */
	export interface LastModifiedInfoFormProperties {

		/** Timestamp of the last change in milliseconds since epoch. */
		time: FormControl<string | null | undefined>,
	}
	export function CreateLastModifiedInfoFormGroup() {
		return new FormGroup<LastModifiedInfoFormProperties>({
			time: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creative Group Assignment. */
	export interface CreativeGroupAssignment {

		/** ID of the creative group to be assigned. */
		creativeGroupId?: string | null;

		/** Creative group number of the creative group assignment. */
		creativeGroupNumber?: CreativeGroupAssignmentCreativeGroupNumber | null;
	}

	/** Creative Group Assignment. */
	export interface CreativeGroupAssignmentFormProperties {

		/** ID of the creative group to be assigned. */
		creativeGroupId: FormControl<string | null | undefined>,

		/** Creative group number of the creative group assignment. */
		creativeGroupNumber: FormControl<CreativeGroupAssignmentCreativeGroupNumber | null | undefined>,
	}
	export function CreateCreativeGroupAssignmentFormGroup() {
		return new FormGroup<CreativeGroupAssignmentFormProperties>({
			creativeGroupId: new FormControl<string | null | undefined>(undefined),
			creativeGroupNumber: new FormControl<CreativeGroupAssignmentCreativeGroupNumber | null | undefined>(undefined),
		});

	}

	export enum CreativeGroupAssignmentCreativeGroupNumber { CREATIVE_GROUP_ONE = 0, CREATIVE_GROUP_TWO = 1 }


	/** Creative Rotation. */
	export interface CreativeRotation {

		/** Creative assignments in this creative rotation. */
		creativeAssignments?: Array<CreativeAssignment>;

		/** Creative optimization configuration that is used by this ad. It should refer to one of the existing optimization configurations in the ad's campaign. If it is unset or set to 0, then the campaign's default optimization configuration will be used for this ad. */
		creativeOptimizationConfigurationId?: string | null;

		/** Type of creative rotation. Can be used to specify whether to use sequential or random rotation. */
		type?: CreativeRotationType | null;

		/** Strategy for calculating weights. Used with CREATIVE_ROTATION_TYPE_RANDOM. */
		weightCalculationStrategy?: CreativeRotationWeightCalculationStrategy | null;
	}

	/** Creative Rotation. */
	export interface CreativeRotationFormProperties {

		/** Creative optimization configuration that is used by this ad. It should refer to one of the existing optimization configurations in the ad's campaign. If it is unset or set to 0, then the campaign's default optimization configuration will be used for this ad. */
		creativeOptimizationConfigurationId: FormControl<string | null | undefined>,

		/** Type of creative rotation. Can be used to specify whether to use sequential or random rotation. */
		type: FormControl<CreativeRotationType | null | undefined>,

		/** Strategy for calculating weights. Used with CREATIVE_ROTATION_TYPE_RANDOM. */
		weightCalculationStrategy: FormControl<CreativeRotationWeightCalculationStrategy | null | undefined>,
	}
	export function CreateCreativeRotationFormGroup() {
		return new FormGroup<CreativeRotationFormProperties>({
			creativeOptimizationConfigurationId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CreativeRotationType | null | undefined>(undefined),
			weightCalculationStrategy: new FormControl<CreativeRotationWeightCalculationStrategy | null | undefined>(undefined),
		});

	}


	/** Creative Assignment. */
	export interface CreativeAssignment {

		/** Whether this creative assignment is active. When true, the creative will be included in the ad's rotation. */
		active?: boolean | null;

		/** Whether applicable event tags should fire when this creative assignment is rendered. If this value is unset when the ad is inserted or updated, it will default to true for all creative types EXCEPT for INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO. */
		applyEventTags?: boolean | null;

		/** Click-through URL */
		clickThroughUrl?: ClickThroughUrl;

		/** Companion creative overrides for this creative assignment. Applicable to video ads. */
		companionCreativeOverrides?: Array<CompanionClickThroughOverride>;

		/** Creative group assignments for this creative assignment. Only one assignment per creative group number is allowed for a maximum of two assignments. */
		creativeGroupAssignments?: Array<CreativeGroupAssignment>;

		/** ID of the creative to be assigned. This is a required field. */
		creativeId?: string | null;

		/** Represents a DimensionValue resource. */
		creativeIdDimensionValue?: DimensionValue;
		endTime?: Date | null;

		/** Rich media exit overrides for this creative assignment. Applicable when the creative type is any of the following: - DISPLAY - RICH_MEDIA_INPAGE - RICH_MEDIA_INPAGE_FLOATING - RICH_MEDIA_IM_EXPAND - RICH_MEDIA_EXPANDING - RICH_MEDIA_INTERSTITIAL_FLOAT - RICH_MEDIA_MOBILE_IN_APP - RICH_MEDIA_MULTI_FLOATING - RICH_MEDIA_PEEL_DOWN - VPAID_LINEAR - VPAID_NON_LINEAR */
		richMediaExitOverrides?: Array<RichMediaExitOverride>;

		/** Sequence number of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_SEQUENTIAL. Acceptable values are 1 to 65535, inclusive. */
		sequence?: number | null;

		/** Whether the creative to be assigned is SSL-compliant. This is a read-only field that is auto-generated when the ad is inserted or updated. */
		sslCompliant?: boolean | null;
		startTime?: Date | null;

		/** Weight of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_RANDOM. Value must be greater than or equal to 1. */
		weight?: number | null;
	}

	/** Creative Assignment. */
	export interface CreativeAssignmentFormProperties {

		/** Whether this creative assignment is active. When true, the creative will be included in the ad's rotation. */
		active: FormControl<boolean | null | undefined>,

		/** Whether applicable event tags should fire when this creative assignment is rendered. If this value is unset when the ad is inserted or updated, it will default to true for all creative types EXCEPT for INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO. */
		applyEventTags: FormControl<boolean | null | undefined>,

		/** ID of the creative to be assigned. This is a required field. */
		creativeId: FormControl<string | null | undefined>,
		endTime: FormControl<Date | null | undefined>,

		/** Sequence number of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_SEQUENTIAL. Acceptable values are 1 to 65535, inclusive. */
		sequence: FormControl<number | null | undefined>,

		/** Whether the creative to be assigned is SSL-compliant. This is a read-only field that is auto-generated when the ad is inserted or updated. */
		sslCompliant: FormControl<boolean | null | undefined>,
		startTime: FormControl<Date | null | undefined>,

		/** Weight of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_RANDOM. Value must be greater than or equal to 1. */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateCreativeAssignmentFormGroup() {
		return new FormGroup<CreativeAssignmentFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			applyEventTags: new FormControl<boolean | null | undefined>(undefined),
			creativeId: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			sequence: new FormControl<number | null | undefined>(undefined),
			sslCompliant: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Companion Click-through override. */
	export interface CompanionClickThroughOverride {

		/** Click-through URL */
		clickThroughUrl?: ClickThroughUrl;

		/** ID of the creative for this companion click-through override. */
		creativeId?: string | null;
	}

	/** Companion Click-through override. */
	export interface CompanionClickThroughOverrideFormProperties {

		/** ID of the creative for this companion click-through override. */
		creativeId: FormControl<string | null | undefined>,
	}
	export function CreateCompanionClickThroughOverrideFormGroup() {
		return new FormGroup<CompanionClickThroughOverrideFormProperties>({
			creativeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Rich Media Exit Override. */
	export interface RichMediaExitOverride {

		/** Click-through URL */
		clickThroughUrl?: ClickThroughUrl;

		/** Whether to use the clickThroughUrl. If false, the creative-level exit will be used. */
		enabled?: boolean | null;

		/** ID for the override to refer to a specific exit in the creative. */
		exitId?: string | null;
	}

	/** Rich Media Exit Override. */
	export interface RichMediaExitOverrideFormProperties {

		/** Whether to use the clickThroughUrl. If false, the creative-level exit will be used. */
		enabled: FormControl<boolean | null | undefined>,

		/** ID for the override to refer to a specific exit in the creative. */
		exitId: FormControl<string | null | undefined>,
	}
	export function CreateRichMediaExitOverrideFormGroup() {
		return new FormGroup<RichMediaExitOverrideFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			exitId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreativeRotationType { CREATIVE_ROTATION_TYPE_SEQUENTIAL = 0, CREATIVE_ROTATION_TYPE_RANDOM = 1 }

	export enum CreativeRotationWeightCalculationStrategy { WEIGHT_STRATEGY_EQUAL = 0, WEIGHT_STRATEGY_CUSTOM = 1, WEIGHT_STRATEGY_HIGHEST_CTR = 2, WEIGHT_STRATEGY_OPTIMIZED = 3 }


	/** Day Part Targeting. */
	export interface DayPartTargeting {

		/** Days of the week when the ad will serve. Acceptable values are: - "SUNDAY" - "MONDAY" - "TUESDAY" - "WEDNESDAY" - "THURSDAY" - "FRIDAY" - "SATURDAY" */
		daysOfWeek?: Array<string>;

		/** Hours of the day when the ad will serve, where 0 is midnight to 1 AM and 23 is 11 PM to midnight. Can be specified with days of week, in which case the ad would serve during these hours on the specified days. For example if Monday, Wednesday, Friday are the days of week specified and 9-10am, 3-5pm (hours 9, 15, and 16) is specified, the ad would serve Monday, Wednesdays, and Fridays at 9-10am and 3-5pm. Acceptable values are 0 to 23, inclusive. */
		hoursOfDay?: Array<number>;

		/** Whether or not to use the user's local time. If false, the America/New York time zone applies. */
		userLocalTime?: boolean | null;
	}

	/** Day Part Targeting. */
	export interface DayPartTargetingFormProperties {

		/** Whether or not to use the user's local time. If false, the America/New York time zone applies. */
		userLocalTime: FormControl<boolean | null | undefined>,
	}
	export function CreateDayPartTargetingFormGroup() {
		return new FormGroup<DayPartTargetingFormProperties>({
			userLocalTime: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further. */
	export interface DefaultClickThroughEventTagProperties {

		/** ID of the click-through event tag to apply to all ads in this entity's scope. */
		defaultClickThroughEventTagId?: string | null;

		/** Whether this entity should override the inherited default click-through event tag with its own defined value. */
		overrideInheritedEventTag?: boolean | null;
	}

	/** Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further. */
	export interface DefaultClickThroughEventTagPropertiesFormProperties {

		/** ID of the click-through event tag to apply to all ads in this entity's scope. */
		defaultClickThroughEventTagId: FormControl<string | null | undefined>,

		/** Whether this entity should override the inherited default click-through event tag with its own defined value. */
		overrideInheritedEventTag: FormControl<boolean | null | undefined>,
	}
	export function CreateDefaultClickThroughEventTagPropertiesFormGroup() {
		return new FormGroup<DefaultClickThroughEventTagPropertiesFormProperties>({
			defaultClickThroughEventTagId: new FormControl<string | null | undefined>(undefined),
			overrideInheritedEventTag: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Delivery Schedule. */
	export interface DeliverySchedule {

		/** Frequency Cap. */
		frequencyCap?: FrequencyCap;

		/** Whether or not hard cutoff is enabled. If true, the ad will not serve after the end date and time. Otherwise the ad will continue to be served until it has reached its delivery goals. */
		hardCutoff?: boolean | null;

		/** Impression ratio for this ad. This ratio determines how often each ad is served relative to the others. For example, if ad A has an impression ratio of 1 and ad B has an impression ratio of 3, then Campaign Manager will serve ad B three times as often as ad A. Acceptable values are 1 to 10, inclusive. */
		impressionRatio?: string | null;

		/** Serving priority of an ad, with respect to other ads. The lower the priority number, the greater the priority with which it is served. */
		priority?: DeliverySchedulePriority | null;
	}

	/** Delivery Schedule. */
	export interface DeliveryScheduleFormProperties {

		/** Whether or not hard cutoff is enabled. If true, the ad will not serve after the end date and time. Otherwise the ad will continue to be served until it has reached its delivery goals. */
		hardCutoff: FormControl<boolean | null | undefined>,

		/** Impression ratio for this ad. This ratio determines how often each ad is served relative to the others. For example, if ad A has an impression ratio of 1 and ad B has an impression ratio of 3, then Campaign Manager will serve ad B three times as often as ad A. Acceptable values are 1 to 10, inclusive. */
		impressionRatio: FormControl<string | null | undefined>,

		/** Serving priority of an ad, with respect to other ads. The lower the priority number, the greater the priority with which it is served. */
		priority: FormControl<DeliverySchedulePriority | null | undefined>,
	}
	export function CreateDeliveryScheduleFormGroup() {
		return new FormGroup<DeliveryScheduleFormProperties>({
			hardCutoff: new FormControl<boolean | null | undefined>(undefined),
			impressionRatio: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<DeliverySchedulePriority | null | undefined>(undefined),
		});

	}


	/** Frequency Cap. */
	export interface FrequencyCap {

		/** Duration of time, in seconds, for this frequency cap. The maximum duration is 90 days. Acceptable values are 1 to 7776000, inclusive. */
		duration?: string | null;

		/** Number of times an individual user can be served the ad within the specified duration. Acceptable values are 1 to 15, inclusive. */
		impressions?: string | null;
	}

	/** Frequency Cap. */
	export interface FrequencyCapFormProperties {

		/** Duration of time, in seconds, for this frequency cap. The maximum duration is 90 days. Acceptable values are 1 to 7776000, inclusive. */
		duration: FormControl<string | null | undefined>,

		/** Number of times an individual user can be served the ad within the specified duration. Acceptable values are 1 to 15, inclusive. */
		impressions: FormControl<string | null | undefined>,
	}
	export function CreateFrequencyCapFormGroup() {
		return new FormGroup<FrequencyCapFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			impressions: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeliverySchedulePriority { AD_PRIORITY_01 = 0, AD_PRIORITY_02 = 1, AD_PRIORITY_03 = 2, AD_PRIORITY_04 = 3, AD_PRIORITY_05 = 4, AD_PRIORITY_06 = 5, AD_PRIORITY_07 = 6, AD_PRIORITY_08 = 7, AD_PRIORITY_09 = 8, AD_PRIORITY_10 = 9, AD_PRIORITY_11 = 10, AD_PRIORITY_12 = 11, AD_PRIORITY_13 = 12, AD_PRIORITY_14 = 13, AD_PRIORITY_15 = 14, AD_PRIORITY_16 = 15 }


	/** Event tag override information. */
	export interface EventTagOverride {

		/** Whether this override is enabled. */
		enabled?: boolean | null;

		/** ID of this event tag override. This is a read-only, auto-generated field. */
		id?: string | null;
	}

	/** Event tag override information. */
	export interface EventTagOverrideFormProperties {

		/** Whether this override is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** ID of this event tag override. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateEventTagOverrideFormGroup() {
		return new FormGroup<EventTagOverrideFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Geographical Targeting. */
	export interface GeoTargeting {

		/** Cities to be targeted. For each city only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a city, do not target or exclude the country of the city, and do not target the metro or region of the city. */
		cities?: Array<City>;

		/** Countries to be targeted or excluded from targeting, depending on the setting of the excludeCountries field. For each country only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting or excluding a country, do not target regions, cities, metros, or postal codes in the same country. */
		countries?: Array<Country>;

		/** Whether or not to exclude the countries in the countries field from targeting. If false, the countries field refers to countries which will be targeted by the ad. */
		excludeCountries?: boolean | null;

		/** Metros to be targeted. For each metro only dmaId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a metro, do not target or exclude the country of the metro. */
		metros?: Array<Metro>;

		/** Postal codes to be targeted. For each postal code only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a postal code, do not target or exclude the country of the postal code. */
		postalCodes?: Array<PostalCode>;

		/** Regions to be targeted. For each region only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a region, do not target or exclude the country of the region. */
		regions?: Array<Region>;
	}

	/** Geographical Targeting. */
	export interface GeoTargetingFormProperties {

		/** Whether or not to exclude the countries in the countries field from targeting. If false, the countries field refers to countries which will be targeted by the ad. */
		excludeCountries: FormControl<boolean | null | undefined>,
	}
	export function CreateGeoTargetingFormGroup() {
		return new FormGroup<GeoTargetingFormProperties>({
			excludeCountries: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about a city that can be targeted by ads. */
	export interface City {

		/** Country code of the country to which this city belongs. */
		countryCode?: string | null;

		/** DART ID of the country to which this city belongs. */
		countryDartId?: string | null;

		/** DART ID of this city. This is the ID used for targeting and generating reports. */
		dartId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#city". */
		kind?: string | null;

		/** Metro region code of the metro region (DMA) to which this city belongs. */
		metroCode?: string | null;

		/** ID of the metro region (DMA) to which this city belongs. */
		metroDmaId?: string | null;

		/** Name of this city. */
		name?: string | null;

		/** Region code of the region to which this city belongs. */
		regionCode?: string | null;

		/** DART ID of the region to which this city belongs. */
		regionDartId?: string | null;
	}

	/** Contains information about a city that can be targeted by ads. */
	export interface CityFormProperties {

		/** Country code of the country to which this city belongs. */
		countryCode: FormControl<string | null | undefined>,

		/** DART ID of the country to which this city belongs. */
		countryDartId: FormControl<string | null | undefined>,

		/** DART ID of this city. This is the ID used for targeting and generating reports. */
		dartId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#city". */
		kind: FormControl<string | null | undefined>,

		/** Metro region code of the metro region (DMA) to which this city belongs. */
		metroCode: FormControl<string | null | undefined>,

		/** ID of the metro region (DMA) to which this city belongs. */
		metroDmaId: FormControl<string | null | undefined>,

		/** Name of this city. */
		name: FormControl<string | null | undefined>,

		/** Region code of the region to which this city belongs. */
		regionCode: FormControl<string | null | undefined>,

		/** DART ID of the region to which this city belongs. */
		regionDartId: FormControl<string | null | undefined>,
	}
	export function CreateCityFormGroup() {
		return new FormGroup<CityFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			countryDartId: new FormControl<string | null | undefined>(undefined),
			dartId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			metroCode: new FormControl<string | null | undefined>(undefined),
			metroDmaId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
			regionDartId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a country that can be targeted by ads. */
	export interface Country {

		/** Country code. */
		countryCode?: string | null;

		/** DART ID of this country. This is the ID used for targeting and generating reports. */
		dartId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#country". */
		kind?: string | null;

		/** Name of this country. */
		name?: string | null;

		/** Whether ad serving supports secure servers in this country. */
		sslEnabled?: boolean | null;
	}

	/** Contains information about a country that can be targeted by ads. */
	export interface CountryFormProperties {

		/** Country code. */
		countryCode: FormControl<string | null | undefined>,

		/** DART ID of this country. This is the ID used for targeting and generating reports. */
		dartId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#country". */
		kind: FormControl<string | null | undefined>,

		/** Name of this country. */
		name: FormControl<string | null | undefined>,

		/** Whether ad serving supports secure servers in this country. */
		sslEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			dartId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sslEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains information about a metro region that can be targeted by ads. */
	export interface Metro {

		/** Country code of the country to which this metro region belongs. */
		countryCode?: string | null;

		/** DART ID of the country to which this metro region belongs. */
		countryDartId?: string | null;

		/** DART ID of this metro region. */
		dartId?: string | null;

		/** DMA ID of this metro region. This is the ID used for targeting and generating reports, and is equivalent to metro_code. */
		dmaId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#metro". */
		kind?: string | null;

		/** Metro code of this metro region. This is equivalent to dma_id. */
		metroCode?: string | null;

		/** Name of this metro region. */
		name?: string | null;
	}

	/** Contains information about a metro region that can be targeted by ads. */
	export interface MetroFormProperties {

		/** Country code of the country to which this metro region belongs. */
		countryCode: FormControl<string | null | undefined>,

		/** DART ID of the country to which this metro region belongs. */
		countryDartId: FormControl<string | null | undefined>,

		/** DART ID of this metro region. */
		dartId: FormControl<string | null | undefined>,

		/** DMA ID of this metro region. This is the ID used for targeting and generating reports, and is equivalent to metro_code. */
		dmaId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#metro". */
		kind: FormControl<string | null | undefined>,

		/** Metro code of this metro region. This is equivalent to dma_id. */
		metroCode: FormControl<string | null | undefined>,

		/** Name of this metro region. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMetroFormGroup() {
		return new FormGroup<MetroFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			countryDartId: new FormControl<string | null | undefined>(undefined),
			dartId: new FormControl<string | null | undefined>(undefined),
			dmaId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			metroCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a postal code that can be targeted by ads. */
	export interface PostalCode {

		/** Postal code. This is equivalent to the id field. */
		code?: string | null;

		/** Country code of the country to which this postal code belongs. */
		countryCode?: string | null;

		/** DART ID of the country to which this postal code belongs. */
		countryDartId?: string | null;

		/** ID of this postal code. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCode". */
		kind?: string | null;
	}

	/** Contains information about a postal code that can be targeted by ads. */
	export interface PostalCodeFormProperties {

		/** Postal code. This is equivalent to the id field. */
		code: FormControl<string | null | undefined>,

		/** Country code of the country to which this postal code belongs. */
		countryCode: FormControl<string | null | undefined>,

		/** DART ID of the country to which this postal code belongs. */
		countryDartId: FormControl<string | null | undefined>,

		/** ID of this postal code. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCode". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePostalCodeFormGroup() {
		return new FormGroup<PostalCodeFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			countryDartId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a region that can be targeted by ads. */
	export interface Region {

		/** Country code of the country to which this region belongs. */
		countryCode?: string | null;

		/** DART ID of the country to which this region belongs. */
		countryDartId?: string | null;

		/** DART ID of this region. */
		dartId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#region". */
		kind?: string | null;

		/** Name of this region. */
		name?: string | null;

		/** Region code. */
		regionCode?: string | null;
	}

	/** Contains information about a region that can be targeted by ads. */
	export interface RegionFormProperties {

		/** Country code of the country to which this region belongs. */
		countryCode: FormControl<string | null | undefined>,

		/** DART ID of the country to which this region belongs. */
		countryDartId: FormControl<string | null | undefined>,

		/** DART ID of this region. */
		dartId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#region". */
		kind: FormControl<string | null | undefined>,

		/** Name of this region. */
		name: FormControl<string | null | undefined>,

		/** Region code. */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateRegionFormGroup() {
		return new FormGroup<RegionFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			countryDartId: new FormControl<string | null | undefined>(undefined),
			dartId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Key Value Targeting Expression. */
	export interface KeyValueTargetingExpression {

		/** Keyword expression being targeted by the ad. */
		expression?: string | null;
	}

	/** Key Value Targeting Expression. */
	export interface KeyValueTargetingExpressionFormProperties {

		/** Keyword expression being targeted by the ad. */
		expression: FormControl<string | null | undefined>,
	}
	export function CreateKeyValueTargetingExpressionFormGroup() {
		return new FormGroup<KeyValueTargetingExpressionFormProperties>({
			expression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Language Targeting. */
	export interface LanguageTargeting {

		/** Languages that this ad targets. For each language only languageId is required. The other fields are populated automatically when the ad is inserted or updated. */
		languages?: Array<Language>;
	}

	/** Language Targeting. */
	export interface LanguageTargetingFormProperties {
	}
	export function CreateLanguageTargetingFormGroup() {
		return new FormGroup<LanguageTargetingFormProperties>({
		});

	}


	/** Contains information about a language that can be targeted by ads. */
	export interface Language {

		/** Language ID of this language. This is the ID used for targeting and generating reports. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#language". */
		kind?: string | null;

		/** Format of language code is an ISO 639 two-letter language code optionally followed by an underscore followed by an ISO 3166 code. Examples are "en" for English or "zh_CN" for Simplified Chinese. */
		languageCode?: string | null;

		/** Name of this language. */
		name?: string | null;
	}

	/** Contains information about a language that can be targeted by ads. */
	export interface LanguageFormProperties {

		/** Language ID of this language. This is the ID used for targeting and generating reports. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#language". */
		kind: FormControl<string | null | undefined>,

		/** Format of language code is an ISO 639 two-letter language code optionally followed by an underscore followed by an ISO 3166 code. Examples are "en" for English or "zh_CN" for Simplified Chinese. */
		languageCode: FormControl<string | null | undefined>,

		/** Name of this language. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLanguageFormGroup() {
		return new FormGroup<LanguageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placement Assignment. */
	export interface PlacementAssignment {

		/** Whether this placement assignment is active. When true, the placement will be included in the ad's rotation. */
		active?: boolean | null;

		/** ID of the placement to be assigned. This is a required field. */
		placementId?: string | null;

		/** Represents a DimensionValue resource. */
		placementIdDimensionValue?: DimensionValue;

		/** Whether the placement to be assigned requires SSL. This is a read-only field that is auto-generated when the ad is inserted or updated. */
		sslRequired?: boolean | null;
	}

	/** Placement Assignment. */
	export interface PlacementAssignmentFormProperties {

		/** Whether this placement assignment is active. When true, the placement will be included in the ad's rotation. */
		active: FormControl<boolean | null | undefined>,

		/** ID of the placement to be assigned. This is a required field. */
		placementId: FormControl<string | null | undefined>,

		/** Whether the placement to be assigned requires SSL. This is a read-only field that is auto-generated when the ad is inserted or updated. */
		sslRequired: FormControl<boolean | null | undefined>,
	}
	export function CreatePlacementAssignmentFormGroup() {
		return new FormGroup<PlacementAssignmentFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			placementId: new FormControl<string | null | undefined>(undefined),
			sslRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Remarketing List Targeting Expression. */
	export interface ListTargetingExpression {

		/** Expression describing which lists are being targeted by the ad. */
		expression?: string | null;
	}

	/** Remarketing List Targeting Expression. */
	export interface ListTargetingExpressionFormProperties {

		/** Expression describing which lists are being targeted by the ad. */
		expression: FormControl<string | null | undefined>,
	}
	export function CreateListTargetingExpressionFormGroup() {
		return new FormGroup<ListTargetingExpressionFormProperties>({
			expression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the dimensions of ads, placements, creatives, or creative assets. */
	export interface Size {

		/** Height of this size. Acceptable values are 0 to 32767, inclusive. */
		height?: number | null;

		/** IAB standard size. This is a read-only, auto-generated field. */
		iab?: boolean | null;

		/** ID of this size. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#size". */
		kind?: string | null;

		/** Width of this size. Acceptable values are 0 to 32767, inclusive. */
		width?: number | null;
	}

	/** Represents the dimensions of ads, placements, creatives, or creative assets. */
	export interface SizeFormProperties {

		/** Height of this size. Acceptable values are 0 to 32767, inclusive. */
		height: FormControl<number | null | undefined>,

		/** IAB standard size. This is a read-only, auto-generated field. */
		iab: FormControl<boolean | null | undefined>,

		/** ID of this size. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#size". */
		kind: FormControl<string | null | undefined>,

		/** Width of this size. Acceptable values are 0 to 32767, inclusive. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateSizeFormGroup() {
		return new FormGroup<SizeFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			iab: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

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

	/** Technology Targeting. */
	export interface TechnologyTargetingFormProperties {
	}
	export function CreateTechnologyTargetingFormGroup() {
		return new FormGroup<TechnologyTargetingFormProperties>({
		});

	}


	/** Contains information about a browser that can be targeted by ads. */
	export interface Browser {

		/** ID referring to this grouping of browser and version numbers. This is the ID used for targeting. */
		browserVersionId?: string | null;

		/** DART ID of this browser. This is the ID used when generating reports. */
		dartId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#browser". */
		kind?: string | null;

		/** Major version number (leftmost number) of this browser. For example, for Chrome 5.0.376.86 beta, this field should be set to 5. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is. */
		majorVersion?: string | null;

		/** Minor version number (number after first dot on left) of this browser. For example, for Chrome 5.0.375.86 beta, this field should be set to 0. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is. */
		minorVersion?: string | null;

		/** Name of this browser. */
		name?: string | null;
	}

	/** Contains information about a browser that can be targeted by ads. */
	export interface BrowserFormProperties {

		/** ID referring to this grouping of browser and version numbers. This is the ID used for targeting. */
		browserVersionId: FormControl<string | null | undefined>,

		/** DART ID of this browser. This is the ID used when generating reports. */
		dartId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#browser". */
		kind: FormControl<string | null | undefined>,

		/** Major version number (leftmost number) of this browser. For example, for Chrome 5.0.376.86 beta, this field should be set to 5. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is. */
		majorVersion: FormControl<string | null | undefined>,

		/** Minor version number (number after first dot on left) of this browser. For example, for Chrome 5.0.375.86 beta, this field should be set to 0. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is. */
		minorVersion: FormControl<string | null | undefined>,

		/** Name of this browser. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBrowserFormGroup() {
		return new FormGroup<BrowserFormProperties>({
			browserVersionId: new FormControl<string | null | undefined>(undefined),
			dartId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			majorVersion: new FormControl<string | null | undefined>(undefined),
			minorVersion: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an internet connection type that can be targeted by ads. Clients can use the connection type to target mobile vs. broadband users. */
	export interface ConnectionType {

		/** ID of this connection type. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionType". */
		kind?: string | null;

		/** Name of this connection type. */
		name?: string | null;
	}

	/** Contains information about an internet connection type that can be targeted by ads. Clients can use the connection type to target mobile vs. broadband users. */
	export interface ConnectionTypeFormProperties {

		/** ID of this connection type. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionType". */
		kind: FormControl<string | null | undefined>,

		/** Name of this connection type. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateConnectionTypeFormGroup() {
		return new FormGroup<ConnectionTypeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a mobile carrier that can be targeted by ads. */
	export interface MobileCarrier {

		/** Country code of the country to which this mobile carrier belongs. */
		countryCode?: string | null;

		/** DART ID of the country to which this mobile carrier belongs. */
		countryDartId?: string | null;

		/** ID of this mobile carrier. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarrier". */
		kind?: string | null;

		/** Name of this mobile carrier. */
		name?: string | null;
	}

	/** Contains information about a mobile carrier that can be targeted by ads. */
	export interface MobileCarrierFormProperties {

		/** Country code of the country to which this mobile carrier belongs. */
		countryCode: FormControl<string | null | undefined>,

		/** DART ID of the country to which this mobile carrier belongs. */
		countryDartId: FormControl<string | null | undefined>,

		/** ID of this mobile carrier. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarrier". */
		kind: FormControl<string | null | undefined>,

		/** Name of this mobile carrier. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMobileCarrierFormGroup() {
		return new FormGroup<MobileCarrierFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			countryDartId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a particular version of an operating system that can be targeted by ads. */
	export interface OperatingSystemVersion {

		/** ID of this operating system version. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersion". */
		kind?: string | null;

		/** Major version (leftmost number) of this operating system version. */
		majorVersion?: string | null;

		/** Minor version (number after the first dot) of this operating system version. */
		minorVersion?: string | null;

		/** Name of this operating system version. */
		name?: string | null;

		/** Contains information about an operating system that can be targeted by ads. */
		operatingSystem?: OperatingSystem;
	}

	/** Contains information about a particular version of an operating system that can be targeted by ads. */
	export interface OperatingSystemVersionFormProperties {

		/** ID of this operating system version. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersion". */
		kind: FormControl<string | null | undefined>,

		/** Major version (leftmost number) of this operating system version. */
		majorVersion: FormControl<string | null | undefined>,

		/** Minor version (number after the first dot) of this operating system version. */
		minorVersion: FormControl<string | null | undefined>,

		/** Name of this operating system version. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperatingSystemVersionFormGroup() {
		return new FormGroup<OperatingSystemVersionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			majorVersion: new FormControl<string | null | undefined>(undefined),
			minorVersion: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an operating system that can be targeted by ads. */
	export interface OperatingSystem {

		/** DART ID of this operating system. This is the ID used for targeting. */
		dartId?: string | null;

		/** Whether this operating system is for desktop. */
		desktop?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystem". */
		kind?: string | null;

		/** Whether this operating system is for mobile. */
		mobile?: boolean | null;

		/** Name of this operating system. */
		name?: string | null;
	}

	/** Contains information about an operating system that can be targeted by ads. */
	export interface OperatingSystemFormProperties {

		/** DART ID of this operating system. This is the ID used for targeting. */
		dartId: FormControl<string | null | undefined>,

		/** Whether this operating system is for desktop. */
		desktop: FormControl<boolean | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystem". */
		kind: FormControl<string | null | undefined>,

		/** Whether this operating system is for mobile. */
		mobile: FormControl<boolean | null | undefined>,

		/** Name of this operating system. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperatingSystemFormGroup() {
		return new FormGroup<OperatingSystemFormProperties>({
			dartId: new FormControl<string | null | undefined>(undefined),
			desktop: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			mobile: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a platform type that can be targeted by ads. */
	export interface PlatformType {

		/** ID of this platform type. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformType". */
		kind?: string | null;

		/** Name of this platform type. */
		name?: string | null;
	}

	/** Contains information about a platform type that can be targeted by ads. */
	export interface PlatformTypeFormProperties {

		/** ID of this platform type. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformType". */
		kind: FormControl<string | null | undefined>,

		/** Name of this platform type. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePlatformTypeFormGroup() {
		return new FormGroup<PlatformTypeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AdType { AD_SERVING_STANDARD_AD = 0, AD_SERVING_DEFAULT_AD = 1, AD_SERVING_CLICK_TRACKER = 2, AD_SERVING_TRACKING = 3, AD_SERVING_BRAND_SAFE_AD = 4 }


	/** Campaign ad blocking settings. */
	export interface AdBlockingConfiguration {

		/** Whether this campaign has enabled ad blocking. When true, ad blocking is enabled for placements in the campaign, but this may be overridden by site and placement settings. When false, ad blocking is disabled for all placements under the campaign, regardless of site and placement settings. */
		enabled?: boolean | null;
	}

	/** Campaign ad blocking settings. */
	export interface AdBlockingConfigurationFormProperties {

		/** Whether this campaign has enabled ad blocking. When true, ad blocking is enabled for placements in the campaign, but this may be overridden by site and placement settings. When false, ad blocking is disabled for all placements under the campaign, regardless of site and placement settings. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdBlockingConfigurationFormGroup() {
		return new FormGroup<AdBlockingConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Ad Slot */
	export interface AdSlot {

		/** Comment for this ad slot. */
		comment?: string | null;

		/** Ad slot compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop, mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. */
		compatibility?: AdCompatibility | null;

		/** Height of this ad slot. */
		height?: string | null;

		/** ID of the placement from an external platform that is linked to this ad slot. */
		linkedPlacementId?: string | null;

		/** Name of this ad slot. */
		name?: string | null;

		/** Payment source type of this ad slot. */
		paymentSourceType?: AdSlotPaymentSourceType | null;

		/** Primary ad slot of a roadblock inventory item. */
		primary?: boolean | null;

		/** Width of this ad slot. */
		width?: string | null;
	}

	/** Ad Slot */
	export interface AdSlotFormProperties {

		/** Comment for this ad slot. */
		comment: FormControl<string | null | undefined>,

		/** Ad slot compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop, mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. */
		compatibility: FormControl<AdCompatibility | null | undefined>,

		/** Height of this ad slot. */
		height: FormControl<string | null | undefined>,

		/** ID of the placement from an external platform that is linked to this ad slot. */
		linkedPlacementId: FormControl<string | null | undefined>,

		/** Name of this ad slot. */
		name: FormControl<string | null | undefined>,

		/** Payment source type of this ad slot. */
		paymentSourceType: FormControl<AdSlotPaymentSourceType | null | undefined>,

		/** Primary ad slot of a roadblock inventory item. */
		primary: FormControl<boolean | null | undefined>,

		/** Width of this ad slot. */
		width: FormControl<string | null | undefined>,
	}
	export function CreateAdSlotFormGroup() {
		return new FormGroup<AdSlotFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			compatibility: new FormControl<AdCompatibility | null | undefined>(undefined),
			height: new FormControl<string | null | undefined>(undefined),
			linkedPlacementId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			paymentSourceType: new FormControl<AdSlotPaymentSourceType | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
			width: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AdSlotPaymentSourceType { PLANNING_PAYMENT_SOURCE_TYPE_AGENCY_PAID = 0, PLANNING_PAYMENT_SOURCE_TYPE_PUBLISHER_PAID = 1 }


	/** Ad List Response */
	export interface AdsListResponse {

		/** Ad collection. */
		ads?: Array<Ad>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#adsListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Ad List Response */
	export interface AdsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#adsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAdsListResponseFormGroup() {
		return new FormGroup<AdsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a Campaign Manager advertiser. */
	export interface Advertiser {

		/** Account ID of this advertiser.This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** ID of the advertiser group this advertiser belongs to. You can group advertisers for reporting purposes, allowing you to see aggregated information for all advertisers in each group. */
		advertiserGroupId?: string | null;

		/** Suffix added to click-through URL of ad creative associations under this advertiser. Must be less than 129 characters long. */
		clickThroughUrlSuffix?: string | null;

		/** ID of the click-through event tag to apply by default to the landing pages of this advertiser's campaigns. */
		defaultClickThroughEventTagId?: string | null;

		/** Default email address used in sender field for tag emails. */
		defaultEmail?: string | null;

		/** Floodlight configuration ID of this advertiser. The floodlight configuration ID will be created automatically, so on insert this field should be left blank. This field can be set to another advertiser's floodlight configuration ID in order to share that advertiser's floodlight configuration with this advertiser, so long as: - This advertiser's original floodlight configuration is not already associated with floodlight activities or floodlight activity groups. - This advertiser's original floodlight configuration is not already shared with another advertiser. */
		floodlightConfigurationId?: string | null;

		/** Represents a DimensionValue resource. */
		floodlightConfigurationIdDimensionValue?: DimensionValue;

		/** ID of this advertiser. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiser". */
		kind?: string | null;
		measurementPartnerLink?: MeasurementPartnerAdvertiserLink;

		/** Name of this advertiser. This is a required field and must be less than 256 characters long and unique among advertisers of the same account. */
		name?: string | null;

		/** Original floodlight configuration before any sharing occurred. Set the floodlightConfigurationId of this advertiser to originalFloodlightConfigurationId to unshare the advertiser's current floodlight configuration. You cannot unshare an advertiser's floodlight configuration if the shared configuration has activities associated with any campaign or placement. */
		originalFloodlightConfigurationId?: string | null;

		/** Status of this advertiser. */
		status?: AdvertiserStatus | null;

		/** Subaccount ID of this advertiser.This is a read-only field that can be left blank. */
		subaccountId?: string | null;

		/** Suspension status of this advertiser. */
		suspended?: boolean | null;
	}

	/** Contains properties of a Campaign Manager advertiser. */
	export interface AdvertiserFormProperties {

		/** Account ID of this advertiser.This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** ID of the advertiser group this advertiser belongs to. You can group advertisers for reporting purposes, allowing you to see aggregated information for all advertisers in each group. */
		advertiserGroupId: FormControl<string | null | undefined>,

		/** Suffix added to click-through URL of ad creative associations under this advertiser. Must be less than 129 characters long. */
		clickThroughUrlSuffix: FormControl<string | null | undefined>,

		/** ID of the click-through event tag to apply by default to the landing pages of this advertiser's campaigns. */
		defaultClickThroughEventTagId: FormControl<string | null | undefined>,

		/** Default email address used in sender field for tag emails. */
		defaultEmail: FormControl<string | null | undefined>,

		/** Floodlight configuration ID of this advertiser. The floodlight configuration ID will be created automatically, so on insert this field should be left blank. This field can be set to another advertiser's floodlight configuration ID in order to share that advertiser's floodlight configuration with this advertiser, so long as: - This advertiser's original floodlight configuration is not already associated with floodlight activities or floodlight activity groups. - This advertiser's original floodlight configuration is not already shared with another advertiser. */
		floodlightConfigurationId: FormControl<string | null | undefined>,

		/** ID of this advertiser. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiser". */
		kind: FormControl<string | null | undefined>,

		/** Name of this advertiser. This is a required field and must be less than 256 characters long and unique among advertisers of the same account. */
		name: FormControl<string | null | undefined>,

		/** Original floodlight configuration before any sharing occurred. Set the floodlightConfigurationId of this advertiser to originalFloodlightConfigurationId to unshare the advertiser's current floodlight configuration. You cannot unshare an advertiser's floodlight configuration if the shared configuration has activities associated with any campaign or placement. */
		originalFloodlightConfigurationId: FormControl<string | null | undefined>,

		/** Status of this advertiser. */
		status: FormControl<AdvertiserStatus | null | undefined>,

		/** Subaccount ID of this advertiser.This is a read-only field that can be left blank. */
		subaccountId: FormControl<string | null | undefined>,

		/** Suspension status of this advertiser. */
		suspended: FormControl<boolean | null | undefined>,
	}
	export function CreateAdvertiserFormGroup() {
		return new FormGroup<AdvertiserFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			advertiserGroupId: new FormControl<string | null | undefined>(undefined),
			clickThroughUrlSuffix: new FormControl<string | null | undefined>(undefined),
			defaultClickThroughEventTagId: new FormControl<string | null | undefined>(undefined),
			defaultEmail: new FormControl<string | null | undefined>(undefined),
			floodlightConfigurationId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			originalFloodlightConfigurationId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AdvertiserStatus | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
			suspended: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MeasurementPartnerAdvertiserLink {

		/** Status of the partner link. */
		linkStatus?: MeasurementPartnerAdvertiserLinkLinkStatus | null;

		/** Measurement partner used for tag wrapping. */
		measurementPartner?: MeasurementPartnerAdvertiserLinkMeasurementPartner | null;

		/** partner Advertiser Id. */
		partnerAdvertiserId?: string | null;
	}
	export interface MeasurementPartnerAdvertiserLinkFormProperties {

		/** Status of the partner link. */
		linkStatus: FormControl<MeasurementPartnerAdvertiserLinkLinkStatus | null | undefined>,

		/** Measurement partner used for tag wrapping. */
		measurementPartner: FormControl<MeasurementPartnerAdvertiserLinkMeasurementPartner | null | undefined>,

		/** partner Advertiser Id. */
		partnerAdvertiserId: FormControl<string | null | undefined>,
	}
	export function CreateMeasurementPartnerAdvertiserLinkFormGroup() {
		return new FormGroup<MeasurementPartnerAdvertiserLinkFormProperties>({
			linkStatus: new FormControl<MeasurementPartnerAdvertiserLinkLinkStatus | null | undefined>(undefined),
			measurementPartner: new FormControl<MeasurementPartnerAdvertiserLinkMeasurementPartner | null | undefined>(undefined),
			partnerAdvertiserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MeasurementPartnerAdvertiserLinkLinkStatus { MEASUREMENT_PARTNER_UNLINKED = 0, MEASUREMENT_PARTNER_LINKED = 1, MEASUREMENT_PARTNER_LINK_PENDING = 2, MEASUREMENT_PARTNER_LINK_FAILURE = 3, MEASUREMENT_PARTNER_LINK_OPT_OUT = 4, MEASUREMENT_PARTNER_LINK_OPT_OUT_PENDING = 5, MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING = 6, MEASUREMENT_PARTNER_MODE_CHANGE_PENDING = 7 }

	export enum MeasurementPartnerAdvertiserLinkMeasurementPartner { NONE = 0, INTEGRAL_AD_SCIENCE = 1, DOUBLE_VERIFY = 2 }

	export enum AdvertiserStatus { APPROVED = 0, ON_HOLD = 1 }


	/** Groups advertisers together so that reports can be generated for the entire group at once. */
	export interface AdvertiserGroup {

		/** Account ID of this advertiser group. This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** ID of this advertiser group. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroup". */
		kind?: string | null;

		/** Name of this advertiser group. This is a required field and must be less than 256 characters long and unique among advertiser groups of the same account. */
		name?: string | null;
	}

	/** Groups advertisers together so that reports can be generated for the entire group at once. */
	export interface AdvertiserGroupFormProperties {

		/** Account ID of this advertiser group. This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** ID of this advertiser group. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroup". */
		kind: FormControl<string | null | undefined>,

		/** Name of this advertiser group. This is a required field and must be less than 256 characters long and unique among advertiser groups of the same account. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAdvertiserGroupFormGroup() {
		return new FormGroup<AdvertiserGroupFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Advertiser Group List Response */
	export interface AdvertiserGroupsListResponse {

		/** Advertiser group collection. */
		advertiserGroups?: Array<AdvertiserGroup>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroupsListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Advertiser Group List Response */
	export interface AdvertiserGroupsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroupsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAdvertiserGroupsListResponseFormGroup() {
		return new FormGroup<AdvertiserGroupsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Invoice List Response */
	export interface AdvertiserInvoicesListResponse {

		/** Invoice collection */
		invoices?: Array<Invoice>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserInvoicesListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Invoice List Response */
	export interface AdvertiserInvoicesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserInvoicesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAdvertiserInvoicesListResponseFormGroup() {
		return new FormGroup<AdvertiserInvoicesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a single invoice */
	export interface Invoice {

		/** The list of summarized campaign information associated with this invoice. */
		campaign_summaries?: Array<CampaignSummary>;

		/** The originally issued invoice that is being adjusted by this invoice, if applicable. May appear on invoice PDF as *Reference invoice number*. */
		correctedInvoiceId?: string | null;

		/** Invoice currency code in ISO 4217 format. */
		currencyCode?: string | null;

		/** The invoice due date. */
		dueDate?: string | null;

		/** ID of this invoice. */
		id?: string | null;

		/** The type of invoice document. */
		invoiceType?: InvoiceInvoiceType | null;

		/** The date when the invoice was issued. */
		issueDate?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#invoice". */
		kind?: string | null;

		/** The ID of the payments account the invoice belongs to. Appears on the invoice PDF as *Billing Account Number*. */
		paymentsAccountId?: string | null;

		/** The ID of the payments profile the invoice belongs to. Appears on the invoice PDF as *Billing ID*. */
		paymentsProfileId?: string | null;

		/** The URL to download a PDF copy of the invoice. Note that this URL is user specific and requires a valid OAuth 2.0 access token to access. The access token must be provided in an *Authorization: Bearer* HTTP header. The URL will only be usable for 7 days from when the api is called. */
		pdfUrl?: string | null;

		/** Purchase order number associated with the invoice. */
		purchaseOrderNumber?: string | null;

		/** The originally issued invoice(s) that is being cancelled by this invoice, if applicable. May appear on invoice PDF as *Replaced invoice numbers*. Note: There may be multiple replaced invoices due to consolidation of multiple invoices into a single invoice. */
		replacedInvoiceIds?: Array<string>;

		/** The invoice service end date. */
		serviceEndDate?: string | null;

		/** The invoice service start date. */
		serviceStartDate?: string | null;

		/** The pre-tax subtotal amount, in micros of the invoice's currency. */
		subtotalAmountMicros?: string | null;

		/** The invoice total amount, in micros of the invoice's currency. */
		totalAmountMicros?: string | null;

		/** The sum of all taxes in invoice, in micros of the invoice's currency. */
		totalTaxAmountMicros?: string | null;
	}

	/** Contains information about a single invoice */
	export interface InvoiceFormProperties {

		/** The originally issued invoice that is being adjusted by this invoice, if applicable. May appear on invoice PDF as *Reference invoice number*. */
		correctedInvoiceId: FormControl<string | null | undefined>,

		/** Invoice currency code in ISO 4217 format. */
		currencyCode: FormControl<string | null | undefined>,

		/** The invoice due date. */
		dueDate: FormControl<string | null | undefined>,

		/** ID of this invoice. */
		id: FormControl<string | null | undefined>,

		/** The type of invoice document. */
		invoiceType: FormControl<InvoiceInvoiceType | null | undefined>,

		/** The date when the invoice was issued. */
		issueDate: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#invoice". */
		kind: FormControl<string | null | undefined>,

		/** The ID of the payments account the invoice belongs to. Appears on the invoice PDF as *Billing Account Number*. */
		paymentsAccountId: FormControl<string | null | undefined>,

		/** The ID of the payments profile the invoice belongs to. Appears on the invoice PDF as *Billing ID*. */
		paymentsProfileId: FormControl<string | null | undefined>,

		/** The URL to download a PDF copy of the invoice. Note that this URL is user specific and requires a valid OAuth 2.0 access token to access. The access token must be provided in an *Authorization: Bearer* HTTP header. The URL will only be usable for 7 days from when the api is called. */
		pdfUrl: FormControl<string | null | undefined>,

		/** Purchase order number associated with the invoice. */
		purchaseOrderNumber: FormControl<string | null | undefined>,

		/** The invoice service end date. */
		serviceEndDate: FormControl<string | null | undefined>,

		/** The invoice service start date. */
		serviceStartDate: FormControl<string | null | undefined>,

		/** The pre-tax subtotal amount, in micros of the invoice's currency. */
		subtotalAmountMicros: FormControl<string | null | undefined>,

		/** The invoice total amount, in micros of the invoice's currency. */
		totalAmountMicros: FormControl<string | null | undefined>,

		/** The sum of all taxes in invoice, in micros of the invoice's currency. */
		totalTaxAmountMicros: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceFormGroup() {
		return new FormGroup<InvoiceFormProperties>({
			correctedInvoiceId: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			dueDate: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			invoiceType: new FormControl<InvoiceInvoiceType | null | undefined>(undefined),
			issueDate: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			paymentsAccountId: new FormControl<string | null | undefined>(undefined),
			paymentsProfileId: new FormControl<string | null | undefined>(undefined),
			pdfUrl: new FormControl<string | null | undefined>(undefined),
			purchaseOrderNumber: new FormControl<string | null | undefined>(undefined),
			serviceEndDate: new FormControl<string | null | undefined>(undefined),
			serviceStartDate: new FormControl<string | null | undefined>(undefined),
			subtotalAmountMicros: new FormControl<string | null | undefined>(undefined),
			totalAmountMicros: new FormControl<string | null | undefined>(undefined),
			totalTaxAmountMicros: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a summarized campaign information associated with this invoice. */
	export interface CampaignSummary {

		/** Campaign billing invoice code. */
		billingInvoiceCode?: string | null;

		/** Campaign ID. */
		campaignId?: string | null;

		/** The pre-tax amount for this campaign, in micros of the invoice's currency. */
		preTaxAmountMicros?: string | null;

		/** The tax amount for this campaign, in micros of the invoice's currency. */
		taxAmountMicros?: string | null;

		/** The total amount of charges for this campaign, in micros of the invoice's currency. */
		totalAmountMicros?: string | null;
	}

	/** Represents a summarized campaign information associated with this invoice. */
	export interface CampaignSummaryFormProperties {

		/** Campaign billing invoice code. */
		billingInvoiceCode: FormControl<string | null | undefined>,

		/** Campaign ID. */
		campaignId: FormControl<string | null | undefined>,

		/** The pre-tax amount for this campaign, in micros of the invoice's currency. */
		preTaxAmountMicros: FormControl<string | null | undefined>,

		/** The tax amount for this campaign, in micros of the invoice's currency. */
		taxAmountMicros: FormControl<string | null | undefined>,

		/** The total amount of charges for this campaign, in micros of the invoice's currency. */
		totalAmountMicros: FormControl<string | null | undefined>,
	}
	export function CreateCampaignSummaryFormGroup() {
		return new FormGroup<CampaignSummaryFormProperties>({
			billingInvoiceCode: new FormControl<string | null | undefined>(undefined),
			campaignId: new FormControl<string | null | undefined>(undefined),
			preTaxAmountMicros: new FormControl<string | null | undefined>(undefined),
			taxAmountMicros: new FormControl<string | null | undefined>(undefined),
			totalAmountMicros: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InvoiceInvoiceType { INVOICE_TYPE_UNSPECIFIED = 0, INVOICE_TYPE_CREDIT = 1, INVOICE_TYPE_INVOICE = 2 }


	/** Landing Page List Response */
	export interface AdvertiserLandingPagesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserLandingPagesListResponse". */
		kind?: string | null;

		/** Landing page collection */
		landingPages?: Array<LandingPage>;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Landing Page List Response */
	export interface AdvertiserLandingPagesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserLandingPagesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAdvertiserLandingPagesListResponseFormGroup() {
		return new FormGroup<AdvertiserLandingPagesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about where a user's browser is taken after the user clicks an ad. */
	export interface LandingPage {

		/** Advertiser ID of this landing page. This is a required field. */
		advertiserId?: string | null;

		/** Whether this landing page has been archived. */
		archived?: boolean | null;

		/** Links that will direct the user to a mobile app, if installed. */
		deepLinks?: Array<DeepLink>;

		/** ID of this landing page. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#landingPage". */
		kind?: string | null;

		/** Name of this landing page. This is a required field. It must be less than 256 characters long. */
		name?: string | null;

		/** URL of this landing page. This is a required field. */
		url?: string | null;
	}

	/** Contains information about where a user's browser is taken after the user clicks an ad. */
	export interface LandingPageFormProperties {

		/** Advertiser ID of this landing page. This is a required field. */
		advertiserId: FormControl<string | null | undefined>,

		/** Whether this landing page has been archived. */
		archived: FormControl<boolean | null | undefined>,

		/** ID of this landing page. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#landingPage". */
		kind: FormControl<string | null | undefined>,

		/** Name of this landing page. This is a required field. It must be less than 256 characters long. */
		name: FormControl<string | null | undefined>,

		/** URL of this landing page. This is a required field. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateLandingPageFormGroup() {
		return new FormGroup<LandingPageFormProperties>({
			advertiserId: new FormControl<string | null | undefined>(undefined),
			archived: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a landing page deep link. */
	export interface DeepLink {

		/** The URL of the mobile app being linked to. */
		appUrl?: string | null;

		/** The fallback URL. This URL will be served to users who do not have the mobile app installed. */
		fallbackUrl?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#deepLink". */
		kind?: string | null;

		/** Contains information about a mobile app. Used as a landing page deep link. */
		mobileApp?: MobileApp;

		/** Ads served to users on these remarketing lists will use this deep link. Applicable when mobileApp.directory is APPLE_APP_STORE. */
		remarketingListIds?: Array<string>;
	}

	/** Contains information about a landing page deep link. */
	export interface DeepLinkFormProperties {

		/** The URL of the mobile app being linked to. */
		appUrl: FormControl<string | null | undefined>,

		/** The fallback URL. This URL will be served to users who do not have the mobile app installed. */
		fallbackUrl: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#deepLink". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDeepLinkFormGroup() {
		return new FormGroup<DeepLinkFormProperties>({
			appUrl: new FormControl<string | null | undefined>(undefined),
			fallbackUrl: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a mobile app. Used as a landing page deep link. */
	export interface MobileApp {

		/** Mobile app directory. */
		directory?: MobileAppDirectory | null;

		/** ID of this mobile app. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileApp". */
		kind?: string | null;

		/** Publisher name. */
		publisherName?: string | null;

		/** Title of this mobile app. */
		title?: string | null;
	}

	/** Contains information about a mobile app. Used as a landing page deep link. */
	export interface MobileAppFormProperties {

		/** Mobile app directory. */
		directory: FormControl<MobileAppDirectory | null | undefined>,

		/** ID of this mobile app. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileApp". */
		kind: FormControl<string | null | undefined>,

		/** Publisher name. */
		publisherName: FormControl<string | null | undefined>,

		/** Title of this mobile app. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateMobileAppFormGroup() {
		return new FormGroup<MobileAppFormProperties>({
			directory: new FormControl<MobileAppDirectory | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			publisherName: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MobileAppDirectory { UNKNOWN = 0, APPLE_APP_STORE = 1, GOOGLE_PLAY_STORE = 2, ROKU_APP_STORE = 3, AMAZON_FIRETV_APP_STORE = 4, PLAYSTATION_APP_STORE = 5, APPLE_TV_APP_STORE = 6, XBOX_APP_STORE = 7, SAMSUNG_TV_APP_STORE = 8, ANDROID_TV_APP_STORE = 9, GENERIC_CTV_APP_STORE = 10 }


	/** Advertiser List Response */
	export interface AdvertisersListResponse {

		/** Advertiser collection. */
		advertisers?: Array<Advertiser>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertisersListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Advertiser List Response */
	export interface AdvertisersListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertisersListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAdvertisersListResponseFormGroup() {
		return new FormGroup<AdvertisersListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Audience Segment. */
	export interface AudienceSegment {

		/** Weight allocated to this segment. The weight assigned will be understood in proportion to the weights assigned to other segments in the same segment group. Acceptable values are 1 to 1000, inclusive. */
		allocation?: number | null;

		/** ID of this audience segment. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Name of this audience segment. This is a required field and must be less than 65 characters long. */
		name?: string | null;
	}

	/** Audience Segment. */
	export interface AudienceSegmentFormProperties {

		/** Weight allocated to this segment. The weight assigned will be understood in proportion to the weights assigned to other segments in the same segment group. Acceptable values are 1 to 1000, inclusive. */
		allocation: FormControl<number | null | undefined>,

		/** ID of this audience segment. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Name of this audience segment. This is a required field and must be less than 65 characters long. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAudienceSegmentFormGroup() {
		return new FormGroup<AudienceSegmentFormProperties>({
			allocation: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Audience Segment Group. */
	export interface AudienceSegmentGroup {

		/** Audience segments assigned to this group. The number of segments must be between 2 and 100. */
		audienceSegments?: Array<AudienceSegment>;

		/** ID of this audience segment group. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Name of this audience segment group. This is a required field and must be less than 65 characters long. */
		name?: string | null;
	}

	/** Audience Segment Group. */
	export interface AudienceSegmentGroupFormProperties {

		/** ID of this audience segment group. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Name of this audience segment group. This is a required field and must be less than 65 characters long. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAudienceSegmentGroupFormGroup() {
		return new FormGroup<AudienceSegmentGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List account, subaccount, advertiser, and campaign associated with a given Billing Profile. */
	export interface BillingAssignment {

		/** ID of the account associated with the billing assignment.This is a read-only, auto-generated field. */
		accountId?: string | null;

		/** ID of the advertiser associated with the billing assignment.Wildcard (*) means this assignment is not limited to a single advertiser */
		advertiserId?: string | null;

		/** ID of the campaign associated with the billing assignment. Wildcard (*) means this assignment is not limited to a single campaign */
		campaignId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingAssignment". */
		kind?: string | null;

		/** ID of the subaccount associated with the billing assignment.Wildcard (*) means this assignment is not limited to a single subaccountThis is a read-only, auto-generated field. */
		subaccountId?: string | null;
	}

	/** List account, subaccount, advertiser, and campaign associated with a given Billing Profile. */
	export interface BillingAssignmentFormProperties {

		/** ID of the account associated with the billing assignment.This is a read-only, auto-generated field. */
		accountId: FormControl<string | null | undefined>,

		/** ID of the advertiser associated with the billing assignment.Wildcard (*) means this assignment is not limited to a single advertiser */
		advertiserId: FormControl<string | null | undefined>,

		/** ID of the campaign associated with the billing assignment. Wildcard (*) means this assignment is not limited to a single campaign */
		campaignId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingAssignment". */
		kind: FormControl<string | null | undefined>,

		/** ID of the subaccount associated with the billing assignment.Wildcard (*) means this assignment is not limited to a single subaccountThis is a read-only, auto-generated field. */
		subaccountId: FormControl<string | null | undefined>,
	}
	export function CreateBillingAssignmentFormGroup() {
		return new FormGroup<BillingAssignmentFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			campaignId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Billing assignment List Response */
	export interface BillingAssignmentsListResponse {

		/** Billing assignments collection. */
		billingAssignments?: Array<BillingAssignment>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingAssignmentsListResponse". */
		kind?: string | null;
	}

	/** Billing assignment List Response */
	export interface BillingAssignmentsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingAssignmentsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBillingAssignmentsListResponseFormGroup() {
		return new FormGroup<BillingAssignmentsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a Campaign Manager Billing Profile. */
	export interface BillingProfile {

		/** Consolidated invoice option for this billing profile. Used to get a single, consolidated invoice across the chosen invoice level. */
		consolidatedInvoice?: boolean | null;

		/** Country code of this billing profile.This is a read-only field. */
		countryCode?: string | null;

		/** Billing currency code in ISO 4217 format.This is a read-only field. */
		currencyCode?: string | null;

		/** ID of this billing profile. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Invoice level for this billing profile. Used to group fees into separate invoices by account, advertiser, or campaign. */
		invoiceLevel?: BillingProfileInvoiceLevel | null;

		/** True if the billing profile is the account default profile. This is a read-only field. */
		isDefault?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingProfile". */
		kind?: string | null;

		/** Name of this billing profile. This is a required field and must be less than 256 characters long and must be unique among billing profile in the same account. */
		name?: string | null;

		/** The ID of the payment account the billing profile belongs to. This is a read-only field. */
		paymentsAccountId?: string | null;

		/** The ID of the payment customer the billing profile belongs to. This is a read-only field. */
		paymentsCustomerId?: string | null;

		/** Purchase order (PO) for this billing profile. This PO number is used in the invoices for all of the advertisers in this billing profile. */
		purchaseOrder?: string | null;

		/** The ID of the secondary payment customer the billing profile belongs to. This is a read-only field. */
		secondaryPaymentsCustomerId?: string | null;

		/** Status of this billing profile.This is a read-only field. */
		status?: BillingProfileStatus | null;
	}

	/** Contains properties of a Campaign Manager Billing Profile. */
	export interface BillingProfileFormProperties {

		/** Consolidated invoice option for this billing profile. Used to get a single, consolidated invoice across the chosen invoice level. */
		consolidatedInvoice: FormControl<boolean | null | undefined>,

		/** Country code of this billing profile.This is a read-only field. */
		countryCode: FormControl<string | null | undefined>,

		/** Billing currency code in ISO 4217 format.This is a read-only field. */
		currencyCode: FormControl<string | null | undefined>,

		/** ID of this billing profile. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Invoice level for this billing profile. Used to group fees into separate invoices by account, advertiser, or campaign. */
		invoiceLevel: FormControl<BillingProfileInvoiceLevel | null | undefined>,

		/** True if the billing profile is the account default profile. This is a read-only field. */
		isDefault: FormControl<boolean | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingProfile". */
		kind: FormControl<string | null | undefined>,

		/** Name of this billing profile. This is a required field and must be less than 256 characters long and must be unique among billing profile in the same account. */
		name: FormControl<string | null | undefined>,

		/** The ID of the payment account the billing profile belongs to. This is a read-only field. */
		paymentsAccountId: FormControl<string | null | undefined>,

		/** The ID of the payment customer the billing profile belongs to. This is a read-only field. */
		paymentsCustomerId: FormControl<string | null | undefined>,

		/** Purchase order (PO) for this billing profile. This PO number is used in the invoices for all of the advertisers in this billing profile. */
		purchaseOrder: FormControl<string | null | undefined>,

		/** The ID of the secondary payment customer the billing profile belongs to. This is a read-only field. */
		secondaryPaymentsCustomerId: FormControl<string | null | undefined>,

		/** Status of this billing profile.This is a read-only field. */
		status: FormControl<BillingProfileStatus | null | undefined>,
	}
	export function CreateBillingProfileFormGroup() {
		return new FormGroup<BillingProfileFormProperties>({
			consolidatedInvoice: new FormControl<boolean | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			invoiceLevel: new FormControl<BillingProfileInvoiceLevel | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			paymentsAccountId: new FormControl<string | null | undefined>(undefined),
			paymentsCustomerId: new FormControl<string | null | undefined>(undefined),
			purchaseOrder: new FormControl<string | null | undefined>(undefined),
			secondaryPaymentsCustomerId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<BillingProfileStatus | null | undefined>(undefined),
		});

	}

	export enum BillingProfileInvoiceLevel { ACCOUNT_LEVEL = 0, ADVERTISER_LEVEL = 1, CAMPAIGN_LEVEL = 2 }

	export enum BillingProfileStatus { UNDER_REVIEW = 0, ACTIVE = 1, ARCHIVED = 2 }


	/** Billing profile List Response */
	export interface BillingProfilesListResponse {

		/** Billing profiles collection. */
		billingProfiles?: Array<BillingProfile>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingProfilesListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Billing profile List Response */
	export interface BillingProfilesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingProfilesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateBillingProfilesListResponseFormGroup() {
		return new FormGroup<BillingProfilesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BillingRate {

		/** Billing currency code in ISO 4217 format. */
		currencyCode?: string | null;

		/** End date of this billing rate. */
		endDate?: string | null;

		/** ID of this billing rate. */
		id?: string | null;

		/** Name of this billing rate. This must be less than 256 characters long. */
		name?: string | null;

		/** Flat rate in micros of this billing rate. This cannot co-exist with tiered rate. */
		rateInMicros?: string | null;

		/** Start date of this billing rate. */
		startDate?: string | null;

		/** Tiered rate of this billing rate. This cannot co-exist with flat rate. */
		tieredRates?: Array<BillingRateTieredRate>;

		/** Type of this billing rate. */
		type?: BillingRateType | null;

		/** Unit of measure for this billing rate. */
		unitOfMeasure?: BillingRateUnitOfMeasure | null;
	}
	export interface BillingRateFormProperties {

		/** Billing currency code in ISO 4217 format. */
		currencyCode: FormControl<string | null | undefined>,

		/** End date of this billing rate. */
		endDate: FormControl<string | null | undefined>,

		/** ID of this billing rate. */
		id: FormControl<string | null | undefined>,

		/** Name of this billing rate. This must be less than 256 characters long. */
		name: FormControl<string | null | undefined>,

		/** Flat rate in micros of this billing rate. This cannot co-exist with tiered rate. */
		rateInMicros: FormControl<string | null | undefined>,

		/** Start date of this billing rate. */
		startDate: FormControl<string | null | undefined>,

		/** Type of this billing rate. */
		type: FormControl<BillingRateType | null | undefined>,

		/** Unit of measure for this billing rate. */
		unitOfMeasure: FormControl<BillingRateUnitOfMeasure | null | undefined>,
	}
	export function CreateBillingRateFormGroup() {
		return new FormGroup<BillingRateFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rateInMicros: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BillingRateType | null | undefined>(undefined),
			unitOfMeasure: new FormControl<BillingRateUnitOfMeasure | null | undefined>(undefined),
		});

	}

	export interface BillingRateTieredRate {

		/** The maximum for this tier range. */
		highValue?: string | null;

		/** The minimum for this tier range. */
		lowValue?: string | null;

		/** Rate in micros for this tier. */
		rateInMicros?: string | null;
	}
	export interface BillingRateTieredRateFormProperties {

		/** The maximum for this tier range. */
		highValue: FormControl<string | null | undefined>,

		/** The minimum for this tier range. */
		lowValue: FormControl<string | null | undefined>,

		/** Rate in micros for this tier. */
		rateInMicros: FormControl<string | null | undefined>,
	}
	export function CreateBillingRateTieredRateFormGroup() {
		return new FormGroup<BillingRateTieredRateFormProperties>({
			highValue: new FormControl<string | null | undefined>(undefined),
			lowValue: new FormControl<string | null | undefined>(undefined),
			rateInMicros: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BillingRateType { AD_SERVING = 0, CLICKS = 1, MINIMUM_SERVICE = 2, PATH_TO_CONVERSION = 3, RICH_MEDIA_INPAGE = 4, RICH_MEDIA_EXPANDING = 5, RICH_MEDIA_FLOATING = 6, RICH_MEDIA_VIDEO = 7, RICH_MEDIA_TEASER = 8, RICH_MEDIA_VPAID = 9, INSTREAM_VIDEO = 10, PIXEL = 11, TRACKING = 12, TRAFFICKING_FEATURE = 13, CUSTOM_REPORTS = 14, EXPOSURE_TO_CONVERSION = 15, DATA_TRANSFER = 16, DATA_TRANSFER_SETUP = 17, STARTUP = 18, STATEMENT_OF_WORK = 19, PROVIDED_LIST = 20, PROVIDED_LIST_SETUP = 21, ENHANCED_FORMATS = 22, TRACKING_AD_IMPRESSIONS = 23, TRACKING_AD_CLICKS = 24, NIELSEN_DIGITAL_AD_RATINGS_FEE = 25, INSTREAM_VIDEO_REDIRECT = 26, INSTREAM_VIDEO_VPAID = 27, DISPLAY_AD_SERVING = 28, VIDEO_AD_SERVING = 29, AUDIO_AD_SERVING = 30, ADVANCED_DISPLAY_AD_SERVING = 31 }

	export enum BillingRateUnitOfMeasure { CPM = 0, CPC = 1, EA = 2, P2C = 3 }


	/** Billing Rate List Response */
	export interface BillingRatesListResponse {

		/** Billing rates collection. */
		billingRates?: Array<BillingRate>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingRatesListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Billing Rate List Response */
	export interface BillingRatesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#billingRatesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateBillingRatesListResponseFormGroup() {
		return new FormGroup<BillingRatesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Browser List Response */
	export interface BrowsersListResponse {

		/** Browser collection. */
		browsers?: Array<Browser>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#browsersListResponse". */
		kind?: string | null;
	}

	/** Browser List Response */
	export interface BrowsersListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#browsersListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBrowsersListResponseFormGroup() {
		return new FormGroup<BrowsersListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a Campaign Manager campaign. */
	export interface Campaign {

		/** Account ID of this campaign. This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** Campaign ad blocking settings. */
		adBlockingConfiguration?: AdBlockingConfiguration;

		/** Additional creative optimization configurations for the campaign. */
		additionalCreativeOptimizationConfigurations?: Array<CreativeOptimizationConfiguration>;

		/** Advertiser group ID of the associated advertiser. */
		advertiserGroupId?: string | null;

		/** Advertiser ID of this campaign. This is a required field. */
		advertiserId?: string | null;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Whether this campaign has been archived. */
		archived?: boolean | null;

		/** Audience segment groups assigned to this campaign. Cannot have more than 300 segment groups. */
		audienceSegmentGroups?: Array<AudienceSegmentGroup>;

		/** Billing invoice code included in the Campaign Manager client billing invoices associated with the campaign. */
		billingInvoiceCode?: string | null;

		/** Click Through URL Suffix settings. */
		clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties;

		/** Arbitrary comments about this campaign. Must be less than 256 characters long. */
		comment?: string | null;

		/** Modification timestamp. */
		createInfo?: LastModifiedInfo;

		/** List of creative group IDs that are assigned to the campaign. */
		creativeGroupIds?: Array<string>;

		/** Creative optimization settings. */
		creativeOptimizationConfiguration?: CreativeOptimizationConfiguration;

		/** Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further. */
		defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties;

		/** The default landing page ID for this campaign. */
		defaultLandingPageId?: string | null;
		endDate?: Date | null;

		/** Overrides that can be used to activate or deactivate advertiser event tags. */
		eventTagOverrides?: Array<EventTagOverride>;

		/** External ID for this campaign. */
		externalId?: string | null;

		/** ID of this campaign. This is a read-only auto-generated field. */
		id?: string | null;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaign". */
		kind?: string | null;

		/** Modification timestamp. */
		lastModifiedInfo?: LastModifiedInfo;
		measurementPartnerLink?: MeasurementPartnerCampaignLink;

		/** Name of this campaign. This is a required field and must be less than 512 characters long and unique among campaigns of the same advertiser. */
		name?: string | null;
		startDate?: Date | null;

		/** Subaccount ID of this campaign. This is a read-only field that can be left blank. */
		subaccountId?: string | null;
	}

	/** Contains properties of a Campaign Manager campaign. */
	export interface CampaignFormProperties {

		/** Account ID of this campaign. This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** Advertiser group ID of the associated advertiser. */
		advertiserGroupId: FormControl<string | null | undefined>,

		/** Advertiser ID of this campaign. This is a required field. */
		advertiserId: FormControl<string | null | undefined>,

		/** Whether this campaign has been archived. */
		archived: FormControl<boolean | null | undefined>,

		/** Billing invoice code included in the Campaign Manager client billing invoices associated with the campaign. */
		billingInvoiceCode: FormControl<string | null | undefined>,

		/** Arbitrary comments about this campaign. Must be less than 256 characters long. */
		comment: FormControl<string | null | undefined>,

		/** The default landing page ID for this campaign. */
		defaultLandingPageId: FormControl<string | null | undefined>,
		endDate: FormControl<Date | null | undefined>,

		/** External ID for this campaign. */
		externalId: FormControl<string | null | undefined>,

		/** ID of this campaign. This is a read-only auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaign". */
		kind: FormControl<string | null | undefined>,

		/** Name of this campaign. This is a required field and must be less than 512 characters long and unique among campaigns of the same advertiser. */
		name: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,

		/** Subaccount ID of this campaign. This is a read-only field that can be left blank. */
		subaccountId: FormControl<string | null | undefined>,
	}
	export function CreateCampaignFormGroup() {
		return new FormGroup<CampaignFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			advertiserGroupId: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			archived: new FormControl<boolean | null | undefined>(undefined),
			billingInvoiceCode: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			defaultLandingPageId: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creative optimization settings. */
	export interface CreativeOptimizationConfiguration {

		/** ID of this creative optimization config. This field is auto-generated when the campaign is inserted or updated. It can be null for existing campaigns. */
		id?: string | null;

		/** Name of this creative optimization config. This is a required field and must be less than 129 characters long. */
		name?: string | null;

		/** List of optimization activities associated with this configuration. */
		optimizationActivitys?: Array<OptimizationActivity>;

		/** Optimization model for this configuration. */
		optimizationModel?: CreativeOptimizationConfigurationOptimizationModel | null;
	}

	/** Creative optimization settings. */
	export interface CreativeOptimizationConfigurationFormProperties {

		/** ID of this creative optimization config. This field is auto-generated when the campaign is inserted or updated. It can be null for existing campaigns. */
		id: FormControl<string | null | undefined>,

		/** Name of this creative optimization config. This is a required field and must be less than 129 characters long. */
		name: FormControl<string | null | undefined>,

		/** Optimization model for this configuration. */
		optimizationModel: FormControl<CreativeOptimizationConfigurationOptimizationModel | null | undefined>,
	}
	export function CreateCreativeOptimizationConfigurationFormGroup() {
		return new FormGroup<CreativeOptimizationConfigurationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			optimizationModel: new FormControl<CreativeOptimizationConfigurationOptimizationModel | null | undefined>(undefined),
		});

	}


	/** Creative optimization activity. */
	export interface OptimizationActivity {

		/** Floodlight activity ID of this optimization activity. This is a required field. */
		floodlightActivityId?: string | null;

		/** Represents a DimensionValue resource. */
		floodlightActivityIdDimensionValue?: DimensionValue;

		/** Weight associated with this optimization. The weight assigned will be understood in proportion to the weights assigned to the other optimization activities. Value must be greater than or equal to 1. */
		weight?: number | null;
	}

	/** Creative optimization activity. */
	export interface OptimizationActivityFormProperties {

		/** Floodlight activity ID of this optimization activity. This is a required field. */
		floodlightActivityId: FormControl<string | null | undefined>,

		/** Weight associated with this optimization. The weight assigned will be understood in proportion to the weights assigned to the other optimization activities. Value must be greater than or equal to 1. */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateOptimizationActivityFormGroup() {
		return new FormGroup<OptimizationActivityFormProperties>({
			floodlightActivityId: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CreativeOptimizationConfigurationOptimizationModel { CLICK = 0, POST_CLICK = 1, POST_IMPRESSION = 2, POST_CLICK_AND_IMPRESSION = 3, VIDEO_COMPLETION = 4 }

	export interface MeasurementPartnerCampaignLink {

		/** . */
		linkStatus?: MeasurementPartnerAdvertiserLinkLinkStatus | null;

		/** Measurement partner used for tag wrapping. */
		measurementPartner?: MeasurementPartnerAdvertiserLinkMeasurementPartner | null;

		/** Partner campaign ID needed for establishing linking with Measurement partner. */
		partnerCampaignId?: string | null;
	}
	export interface MeasurementPartnerCampaignLinkFormProperties {

		/** . */
		linkStatus: FormControl<MeasurementPartnerAdvertiserLinkLinkStatus | null | undefined>,

		/** Measurement partner used for tag wrapping. */
		measurementPartner: FormControl<MeasurementPartnerAdvertiserLinkMeasurementPartner | null | undefined>,

		/** Partner campaign ID needed for establishing linking with Measurement partner. */
		partnerCampaignId: FormControl<string | null | undefined>,
	}
	export function CreateMeasurementPartnerCampaignLinkFormGroup() {
		return new FormGroup<MeasurementPartnerCampaignLinkFormProperties>({
			linkStatus: new FormControl<MeasurementPartnerAdvertiserLinkLinkStatus | null | undefined>(undefined),
			measurementPartner: new FormControl<MeasurementPartnerAdvertiserLinkMeasurementPartner | null | undefined>(undefined),
			partnerCampaignId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies a creative which has been associated with a given campaign. */
	export interface CampaignCreativeAssociation {

		/** ID of the creative associated with the campaign. This is a required field. */
		creativeId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociation". */
		kind?: string | null;
	}

	/** Identifies a creative which has been associated with a given campaign. */
	export interface CampaignCreativeAssociationFormProperties {

		/** ID of the creative associated with the campaign. This is a required field. */
		creativeId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociation". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateCampaignCreativeAssociationFormGroup() {
		return new FormGroup<CampaignCreativeAssociationFormProperties>({
			creativeId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Campaign Creative Association List Response */
	export interface CampaignCreativeAssociationsListResponse {

		/** Campaign creative association collection */
		campaignCreativeAssociations?: Array<CampaignCreativeAssociation>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociationsListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Campaign Creative Association List Response */
	export interface CampaignCreativeAssociationsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociationsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateCampaignCreativeAssociationsListResponseFormGroup() {
		return new FormGroup<CampaignCreativeAssociationsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Campaign List Response */
	export interface CampaignsListResponse {

		/** Campaign collection. */
		campaigns?: Array<Campaign>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignsListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Campaign List Response */
	export interface CampaignsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateCampaignsListResponseFormGroup() {
		return new FormGroup<CampaignsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a change that a user has made to a resource. */
	export interface ChangeLog {

		/** Account ID of the modified object. */
		accountId?: string | null;

		/** Action which caused the change. */
		action?: string | null;
		changeTime?: Date | null;

		/** Field name of the object which changed. */
		fieldName?: string | null;

		/** ID of this change log. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLog". */
		kind?: string | null;

		/** New value of the object field. */
		newValue?: string | null;

		/** ID of the object of this change log. The object could be a campaign, placement, ad, or other type. */
		objectId?: string | null;

		/** Object type of the change log. */
		objectType?: string | null;

		/** Old value of the object field. */
		oldValue?: string | null;

		/** Subaccount ID of the modified object. */
		subaccountId?: string | null;

		/** Transaction ID of this change log. When a single API call results in many changes, each change will have a separate ID in the change log but will share the same transactionId. */
		transactionId?: string | null;

		/** ID of the user who modified the object. */
		userProfileId?: string | null;

		/** User profile name of the user who modified the object. */
		userProfileName?: string | null;
	}

	/** Describes a change that a user has made to a resource. */
	export interface ChangeLogFormProperties {

		/** Account ID of the modified object. */
		accountId: FormControl<string | null | undefined>,

		/** Action which caused the change. */
		action: FormControl<string | null | undefined>,
		changeTime: FormControl<Date | null | undefined>,

		/** Field name of the object which changed. */
		fieldName: FormControl<string | null | undefined>,

		/** ID of this change log. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLog". */
		kind: FormControl<string | null | undefined>,

		/** New value of the object field. */
		newValue: FormControl<string | null | undefined>,

		/** ID of the object of this change log. The object could be a campaign, placement, ad, or other type. */
		objectId: FormControl<string | null | undefined>,

		/** Object type of the change log. */
		objectType: FormControl<string | null | undefined>,

		/** Old value of the object field. */
		oldValue: FormControl<string | null | undefined>,

		/** Subaccount ID of the modified object. */
		subaccountId: FormControl<string | null | undefined>,

		/** Transaction ID of this change log. When a single API call results in many changes, each change will have a separate ID in the change log but will share the same transactionId. */
		transactionId: FormControl<string | null | undefined>,

		/** ID of the user who modified the object. */
		userProfileId: FormControl<string | null | undefined>,

		/** User profile name of the user who modified the object. */
		userProfileName: FormControl<string | null | undefined>,
	}
	export function CreateChangeLogFormGroup() {
		return new FormGroup<ChangeLogFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			action: new FormControl<string | null | undefined>(undefined),
			changeTime: new FormControl<Date | null | undefined>(undefined),
			fieldName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			newValue: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			oldValue: new FormControl<string | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
			userProfileId: new FormControl<string | null | undefined>(undefined),
			userProfileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Change Log List Response */
	export interface ChangeLogsListResponse {

		/** Change log collection. */
		changeLogs?: Array<ChangeLog>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLogsListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Change Log List Response */
	export interface ChangeLogsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLogsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateChangeLogsListResponseFormGroup() {
		return new FormGroup<ChangeLogsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a DfaReporting channel grouping. */
	export interface ChannelGrouping {

		/** ChannelGrouping fallback name. */
		fallbackName?: string | null;

		/** The kind of resource this is, in this case dfareporting#channelGrouping. */
		kind?: string | null;

		/** ChannelGrouping name. */
		name?: string | null;

		/** The rules contained within this channel grouping. */
		rules?: Array<ChannelGroupingRule>;
	}

	/** Represents a DfaReporting channel grouping. */
	export interface ChannelGroupingFormProperties {

		/** ChannelGrouping fallback name. */
		fallbackName: FormControl<string | null | undefined>,

		/** The kind of resource this is, in this case dfareporting#channelGrouping. */
		kind: FormControl<string | null | undefined>,

		/** ChannelGrouping name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateChannelGroupingFormGroup() {
		return new FormGroup<ChannelGroupingFormProperties>({
			fallbackName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a DfaReporting channel grouping rule. */
	export interface ChannelGroupingRule {

		/** The disjunctive match statements contained within this rule. */
		disjunctiveMatchStatements?: Array<DisjunctiveMatchStatement>;

		/** The kind of resource this is, in this case dfareporting#channelGroupingRule. */
		kind?: string | null;

		/** Rule name. */
		name?: string | null;
	}

	/** Represents a DfaReporting channel grouping rule. */
	export interface ChannelGroupingRuleFormProperties {

		/** The kind of resource this is, in this case dfareporting#channelGroupingRule. */
		kind: FormControl<string | null | undefined>,

		/** Rule name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateChannelGroupingRuleFormGroup() {
		return new FormGroup<ChannelGroupingRuleFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Disjunctive Match Statement resource, which is a conjunction (and) of disjunctive (or) boolean statements. */
	export interface DisjunctiveMatchStatement {

		/** The event filters contained within this disjunctive match statement. */
		eventFilters?: Array<EventFilter>;

		/** The kind of resource this is, in this case dfareporting#disjunctiveMatchStatement. */
		kind?: string | null;
	}

	/** Represents a Disjunctive Match Statement resource, which is a conjunction (and) of disjunctive (or) boolean statements. */
	export interface DisjunctiveMatchStatementFormProperties {

		/** The kind of resource this is, in this case dfareporting#disjunctiveMatchStatement. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDisjunctiveMatchStatementFormGroup() {
		return new FormGroup<DisjunctiveMatchStatementFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a DfaReporting event filter. */
	export interface EventFilter {

		/** Represents a PathReportDimensionValue resource. */
		dimensionFilter?: PathReportDimensionValue;

		/** The kind of resource this is, in this case dfareporting#eventFilter. */
		kind?: string | null;

		/** Defines the filtering on a single uvar. */
		uvarFilter?: UvarFilter;
	}

	/** Represents a DfaReporting event filter. */
	export interface EventFilterFormProperties {

		/** The kind of resource this is, in this case dfareporting#eventFilter. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateEventFilterFormGroup() {
		return new FormGroup<EventFilterFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a PathReportDimensionValue resource. */
	export interface PathReportDimensionValue {

		/** The name of the dimension. */
		dimensionName?: string | null;

		/** The possible ID's associated with the value if available. */
		ids?: Array<string>;

		/** The kind of resource this is, in this case dfareporting#pathReportDimensionValue. */
		kind?: string | null;

		/** Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT. */
		matchType?: DimensionValueMatchType | null;

		/** The possible values of the dimension. */
		values?: Array<string>;
	}

	/** Represents a PathReportDimensionValue resource. */
	export interface PathReportDimensionValueFormProperties {

		/** The name of the dimension. */
		dimensionName: FormControl<string | null | undefined>,

		/** The kind of resource this is, in this case dfareporting#pathReportDimensionValue. */
		kind: FormControl<string | null | undefined>,

		/** Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT. */
		matchType: FormControl<DimensionValueMatchType | null | undefined>,
	}
	export function CreatePathReportDimensionValueFormGroup() {
		return new FormGroup<PathReportDimensionValueFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			matchType: new FormControl<DimensionValueMatchType | null | undefined>(undefined),
		});

	}


	/** Defines the filtering on a single uvar. */
	export interface UvarFilter {

		/** Return rows which don't match this filter. */
		complement?: boolean | null;

		/** Custom variable index the filter is applied to. */
		index?: string | null;

		/** The kind of resource this is, in this case dfareporting#uvarFilter. */
		kind?: string | null;

		/** Indicates how the filter should be matched to the values. */
		match?: UvarFilterMatch | null;

		/** Values to filter on. */
		values?: Array<string>;
	}

	/** Defines the filtering on a single uvar. */
	export interface UvarFilterFormProperties {

		/** Return rows which don't match this filter. */
		complement: FormControl<boolean | null | undefined>,

		/** Custom variable index the filter is applied to. */
		index: FormControl<string | null | undefined>,

		/** The kind of resource this is, in this case dfareporting#uvarFilter. */
		kind: FormControl<string | null | undefined>,

		/** Indicates how the filter should be matched to the values. */
		match: FormControl<UvarFilterMatch | null | undefined>,
	}
	export function CreateUvarFilterFormGroup() {
		return new FormGroup<UvarFilterFormProperties>({
			complement: new FormControl<boolean | null | undefined>(undefined),
			index: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			match: new FormControl<UvarFilterMatch | null | undefined>(undefined),
		});

	}

	export enum UvarFilterMatch { UNSPECIFIED = 0, EXACT = 1, CONTAINS = 2 }


	/** City List Response */
	export interface CitiesListResponse {

		/** City collection. */
		cities?: Array<City>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#citiesListResponse". */
		kind?: string | null;
	}

	/** City List Response */
	export interface CitiesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#citiesListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateCitiesListResponseFormGroup() {
		return new FormGroup<CitiesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creative Click Tag. */
	export interface ClickTag {

		/** Click-through URL */
		clickThroughUrl?: CreativeClickThroughUrl;

		/** Advertiser event name associated with the click tag. This field is used by DISPLAY_IMAGE_GALLERY and HTML5_BANNER creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		eventName?: string | null;

		/** Parameter name for the specified click tag. For DISPLAY_IMAGE_GALLERY creative assets, this field must match the value of the creative asset's creativeAssetId.name field. */
		name?: string | null;
	}

	/** Creative Click Tag. */
	export interface ClickTagFormProperties {

		/** Advertiser event name associated with the click tag. This field is used by DISPLAY_IMAGE_GALLERY and HTML5_BANNER creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		eventName: FormControl<string | null | undefined>,

		/** Parameter name for the specified click tag. For DISPLAY_IMAGE_GALLERY creative assets, this field must match the value of the creative asset's creativeAssetId.name field. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateClickTagFormGroup() {
		return new FormGroup<ClickTagFormProperties>({
			eventName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Click-through URL */
	export interface CreativeClickThroughUrl {

		/** Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If landingPageId is specified then that landing page's URL is assigned to this field. - Otherwise, the customClickThroughUrl is assigned to this field. */
		computedClickThroughUrl?: string | null;

		/** Custom click-through URL. Applicable if the landingPageId field is left unset. */
		customClickThroughUrl?: string | null;

		/** ID of the landing page for the click-through URL. */
		landingPageId?: string | null;
	}

	/** Click-through URL */
	export interface CreativeClickThroughUrlFormProperties {

		/** Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If landingPageId is specified then that landing page's URL is assigned to this field. - Otherwise, the customClickThroughUrl is assigned to this field. */
		computedClickThroughUrl: FormControl<string | null | undefined>,

		/** Custom click-through URL. Applicable if the landingPageId field is left unset. */
		customClickThroughUrl: FormControl<string | null | undefined>,

		/** ID of the landing page for the click-through URL. */
		landingPageId: FormControl<string | null | undefined>,
	}
	export function CreateCreativeClickThroughUrlFormGroup() {
		return new FormGroup<CreativeClickThroughUrlFormProperties>({
			computedClickThroughUrl: new FormControl<string | null | undefined>(undefined),
			customClickThroughUrl: new FormControl<string | null | undefined>(undefined),
			landingPageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Companion Settings */
	export interface CompanionSetting {

		/** Whether companions are disabled for this placement. */
		companionsDisabled?: boolean | null;

		/** Allowlist of companion sizes to be served to this placement. Set this list to null or empty to serve all companion sizes. */
		enabledSizes?: Array<Size>;

		/** Whether to serve only static images as companions. */
		imageOnly?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#companionSetting". */
		kind?: string | null;
	}

	/** Companion Settings */
	export interface CompanionSettingFormProperties {

		/** Whether companions are disabled for this placement. */
		companionsDisabled: FormControl<boolean | null | undefined>,

		/** Whether to serve only static images as companions. */
		imageOnly: FormControl<boolean | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#companionSetting". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateCompanionSettingFormGroup() {
		return new FormGroup<CompanionSettingFormProperties>({
			companionsDisabled: new FormControl<boolean | null | undefined>(undefined),
			imageOnly: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a response to the queryCompatibleFields method. */
	export interface CompatibleFields {

		/** Represents fields that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH". */
		crossDimensionReachReportCompatibleFields?: CrossDimensionReachReportCompatibleFields;

		/** Represents fields that are compatible to be selected for a report of type "FlOODLIGHT". */
		floodlightReportCompatibleFields?: FloodlightReportCompatibleFields;

		/** The kind of resource this is, in this case dfareporting#compatibleFields. */
		kind?: string | null;

		/** Represents fields that are compatible to be selected for a report of type "PATH". */
		pathAttributionReportCompatibleFields?: PathReportCompatibleFields;

		/** Represents fields that are compatible to be selected for a report of type "PATH". */
		pathReportCompatibleFields?: PathReportCompatibleFields;

		/** Represents fields that are compatible to be selected for a report of type "PATH_TO_CONVERSION". */
		pathToConversionReportCompatibleFields?: PathToConversionReportCompatibleFields;

		/** Represents fields that are compatible to be selected for a report of type "REACH". */
		reachReportCompatibleFields?: ReachReportCompatibleFields;

		/** Represents fields that are compatible to be selected for a report of type "STANDARD". */
		reportCompatibleFields?: ReportCompatibleFields;
	}

	/** Represents a response to the queryCompatibleFields method. */
	export interface CompatibleFieldsFormProperties {

		/** The kind of resource this is, in this case dfareporting#compatibleFields. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateCompatibleFieldsFormGroup() {
		return new FormGroup<CompatibleFieldsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents fields that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH". */
	export interface CrossDimensionReachReportCompatibleFields {

		/** Dimensions which are compatible to be selected in the "breakdown" section of the report. */
		breakdown?: Array<Dimension>;

		/** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
		dimensionFilters?: Array<Dimension>;

		/** The kind of resource this is, in this case dfareporting#crossDimensionReachReportCompatibleFields. */
		kind?: string | null;

		/** Metrics which are compatible to be selected in the "metricNames" section of the report. */
		metrics?: Array<Metric>;

		/** Metrics which are compatible to be selected in the "overlapMetricNames" section of the report. */
		overlapMetrics?: Array<Metric>;
	}

	/** Represents fields that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH". */
	export interface CrossDimensionReachReportCompatibleFieldsFormProperties {

		/** The kind of resource this is, in this case dfareporting#crossDimensionReachReportCompatibleFields. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateCrossDimensionReachReportCompatibleFieldsFormGroup() {
		return new FormGroup<CrossDimensionReachReportCompatibleFieldsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a dimension. */
	export interface Dimension {

		/** The kind of resource this is, in this case dfareporting#dimension. */
		kind?: string | null;

		/** The dimension name, e.g. advertiser */
		name?: string | null;
	}

	/** Represents a dimension. */
	export interface DimensionFormProperties {

		/** The kind of resource this is, in this case dfareporting#dimension. */
		kind: FormControl<string | null | undefined>,

		/** The dimension name, e.g. advertiser */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a metric. */
	export interface Metric {

		/** The kind of resource this is, in this case dfareporting#metric. */
		kind?: string | null;

		/** The metric name, e.g. impressions */
		name?: string | null;
	}

	/** Represents a metric. */
	export interface MetricFormProperties {

		/** The kind of resource this is, in this case dfareporting#metric. */
		kind: FormControl<string | null | undefined>,

		/** The metric name, e.g. impressions */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents fields that are compatible to be selected for a report of type "FlOODLIGHT". */
	export interface FloodlightReportCompatibleFields {

		/** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
		dimensionFilters?: Array<Dimension>;

		/** Dimensions which are compatible to be selected in the "dimensions" section of the report. */
		dimensions?: Array<Dimension>;

		/** The kind of resource this is, in this case dfareporting#floodlightReportCompatibleFields. */
		kind?: string | null;

		/** Metrics which are compatible to be selected in the "metricNames" section of the report. */
		metrics?: Array<Metric>;
	}

	/** Represents fields that are compatible to be selected for a report of type "FlOODLIGHT". */
	export interface FloodlightReportCompatibleFieldsFormProperties {

		/** The kind of resource this is, in this case dfareporting#floodlightReportCompatibleFields. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateFloodlightReportCompatibleFieldsFormGroup() {
		return new FormGroup<FloodlightReportCompatibleFieldsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents fields that are compatible to be selected for a report of type "PATH". */
	export interface PathReportCompatibleFields {

		/** Dimensions which are compatible to be selected in the "channelGroupings" section of the report. */
		channelGroupings?: Array<Dimension>;

		/** Dimensions which are compatible to be selected in the "dimensions" section of the report. */
		dimensions?: Array<Dimension>;

		/** The kind of resource this is, in this case dfareporting#pathReportCompatibleFields. */
		kind?: string | null;

		/** Metrics which are compatible to be selected in the "metricNames" section of the report. */
		metrics?: Array<Metric>;

		/** Dimensions which are compatible to be selected in the "pathFilters" section of the report. */
		pathFilters?: Array<Dimension>;
	}

	/** Represents fields that are compatible to be selected for a report of type "PATH". */
	export interface PathReportCompatibleFieldsFormProperties {

		/** The kind of resource this is, in this case dfareporting#pathReportCompatibleFields. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePathReportCompatibleFieldsFormGroup() {
		return new FormGroup<PathReportCompatibleFieldsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents fields that are compatible to be selected for a report of type "PATH_TO_CONVERSION". */
	export interface PathToConversionReportCompatibleFields {

		/** Conversion dimensions which are compatible to be selected in the "conversionDimensions" section of the report. */
		conversionDimensions?: Array<Dimension>;

		/** Custom floodlight variables which are compatible to be selected in the "customFloodlightVariables" section of the report. */
		customFloodlightVariables?: Array<Dimension>;

		/** The kind of resource this is, in this case dfareporting#pathToConversionReportCompatibleFields. */
		kind?: string | null;

		/** Metrics which are compatible to be selected in the "metricNames" section of the report. */
		metrics?: Array<Metric>;

		/** Per-interaction dimensions which are compatible to be selected in the "perInteractionDimensions" section of the report. */
		perInteractionDimensions?: Array<Dimension>;
	}

	/** Represents fields that are compatible to be selected for a report of type "PATH_TO_CONVERSION". */
	export interface PathToConversionReportCompatibleFieldsFormProperties {

		/** The kind of resource this is, in this case dfareporting#pathToConversionReportCompatibleFields. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePathToConversionReportCompatibleFieldsFormGroup() {
		return new FormGroup<PathToConversionReportCompatibleFieldsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents fields that are compatible to be selected for a report of type "REACH". */
	export interface ReachReportCompatibleFields {

		/** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
		dimensionFilters?: Array<Dimension>;

		/** Dimensions which are compatible to be selected in the "dimensions" section of the report. */
		dimensions?: Array<Dimension>;

		/** The kind of resource this is, in this case dfareporting#reachReportCompatibleFields. */
		kind?: string | null;

		/** Metrics which are compatible to be selected in the "metricNames" section of the report. */
		metrics?: Array<Metric>;

		/** Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report. */
		pivotedActivityMetrics?: Array<Metric>;

		/** Metrics which are compatible to be selected in the "reachByFrequencyMetricNames" section of the report. */
		reachByFrequencyMetrics?: Array<Metric>;
	}

	/** Represents fields that are compatible to be selected for a report of type "REACH". */
	export interface ReachReportCompatibleFieldsFormProperties {

		/** The kind of resource this is, in this case dfareporting#reachReportCompatibleFields. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateReachReportCompatibleFieldsFormGroup() {
		return new FormGroup<ReachReportCompatibleFieldsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents fields that are compatible to be selected for a report of type "STANDARD". */
	export interface ReportCompatibleFields {

		/** Dimensions which are compatible to be selected in the "dimensionFilters" section of the report. */
		dimensionFilters?: Array<Dimension>;

		/** Dimensions which are compatible to be selected in the "dimensions" section of the report. */
		dimensions?: Array<Dimension>;

		/** The kind of resource this is, in this case dfareporting#reportCompatibleFields. */
		kind?: string | null;

		/** Metrics which are compatible to be selected in the "metricNames" section of the report. */
		metrics?: Array<Metric>;

		/** Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report. */
		pivotedActivityMetrics?: Array<Metric>;
	}

	/** Represents fields that are compatible to be selected for a report of type "STANDARD". */
	export interface ReportCompatibleFieldsFormProperties {

		/** The kind of resource this is, in this case dfareporting#reportCompatibleFields. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateReportCompatibleFieldsFormGroup() {
		return new FormGroup<ReportCompatibleFieldsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Connection Type List Response */
	export interface ConnectionTypesListResponse {

		/** Collection of connection types such as broadband and mobile. */
		connectionTypes?: Array<ConnectionType>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionTypesListResponse". */
		kind?: string | null;
	}

	/** Connection Type List Response */
	export interface ConnectionTypesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionTypesListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateConnectionTypesListResponseFormGroup() {
		return new FormGroup<ConnectionTypesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Content Category List Response */
	export interface ContentCategoriesListResponse {

		/** Content category collection. */
		contentCategories?: Array<ContentCategory>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategoriesListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Content Category List Response */
	export interface ContentCategoriesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategoriesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateContentCategoriesListResponseFormGroup() {
		return new FormGroup<ContentCategoriesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContentCategory {

		/** Account ID of this content category. This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** ID of this content category. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategory". */
		kind?: string | null;

		/** Name of this content category. This is a required field and must be less than 256 characters long and unique among content categories of the same account. */
		name?: string | null;
	}
	export interface ContentCategoryFormProperties {

		/** Account ID of this content category. This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** ID of this content category. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategory". */
		kind: FormControl<string | null | undefined>,

		/** Name of this content category. This is a required field and must be less than 256 characters long and unique among content categories of the same account. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateContentCategoryFormGroup() {
		return new FormGroup<ContentCategoryFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Conversion represents when a user successfully performs a desired action after seeing an ad. */
	export interface Conversion {

		/** Whether this particular request may come from a user under the age of 13, under COPPA compliance. */
		childDirectedTreatment?: boolean | null;

		/** Custom floodlight variables. This field may only be used when calling batchinsert; it is not supported by batchupdate. */
		customVariables?: Array<CustomFloodlightVariable>;

		/** The display click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId, gclid, and impressionId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid or impressionId is a required field. */
		dclid?: string | null;

		/** The alphanumeric encrypted user ID. When set, encryptionInfo should also be specified. This field is mutually exclusive with encryptedUserIdCandidates[], matchId, mobileDeviceId, gclid, dclid, and impressionId. This or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid or dclid or impressionId is a required field. */
		encryptedUserId?: string | null;

		/** A list of the alphanumeric encrypted user IDs. Any user ID with exposure prior to the conversion timestamp will be used in the inserted conversion. If no such user ID is found then the conversion will be rejected with INVALID_ARGUMENT error. When set, encryptionInfo should also be specified. This field may only be used when calling batchinsert; it is not supported by batchupdate. This field is mutually exclusive with encryptedUserId, matchId, mobileDeviceId, gclid dclid, and impressionId. This or encryptedUserId or matchId or mobileDeviceId or gclid or dclid or impressionId is a required field. */
		encryptedUserIdCandidates?: Array<string>;

		/** Floodlight Activity ID of this conversion. This is a required field. */
		floodlightActivityId?: string | null;

		/** Floodlight Configuration ID of this conversion. This is a required field. */
		floodlightConfigurationId?: string | null;

		/** The Google click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId, dclid, and impressionId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId or dclid or impressionId is a required field. */
		gclid?: string | null;

		/** The impression ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId, and gclid. One of these identifiers must be set. */
		impressionId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversion". */
		kind?: string | null;

		/** Whether Limit Ad Tracking is enabled. When set to true, the conversion will be used for reporting but not targeting. This will prevent remarketing. */
		limitAdTracking?: boolean | null;

		/** The match ID field. A match ID is your own first-party identifier that has been synced with Google using the match ID feature in Floodlight. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[],mobileDeviceId, gclid, dclid, and impressionId. This or encryptedUserId orencryptedUserIdCandidates[] or mobileDeviceId or gclid or dclid or impressionIdis a required field. */
		matchId?: string | null;

		/** The mobile device ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, gclid, dclid, and impressionId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or gclid or dclid or impressionId is a required field. */
		mobileDeviceId?: string | null;

		/** Whether the conversion was for a non personalized ad. */
		nonPersonalizedAd?: boolean | null;

		/** The ordinal of the conversion. Use this field to control how conversions of the same user and day are de-duplicated. This is a required field. */
		ordinal?: string | null;

		/** The quantity of the conversion. This is a required field. */
		quantity?: string | null;

		/** The timestamp of conversion, in Unix epoch micros. This is a required field. */
		timestampMicros?: string | null;

		/** Whether this particular request may come from a user under the age of 16 (may differ by country), under compliance with the European Union's General Data Protection Regulation (GDPR). */
		treatmentForUnderage?: boolean | null;

		/** The user identifiers to enhance the conversion. The maximum number of user identifiers for each conversion is 5. */
		userIdentifiers?: Array<UserIdentifier>;

		/** The value of the conversion. This is a required field. */
		value?: number | null;
	}

	/** A Conversion represents when a user successfully performs a desired action after seeing an ad. */
	export interface ConversionFormProperties {

		/** Whether this particular request may come from a user under the age of 13, under COPPA compliance. */
		childDirectedTreatment: FormControl<boolean | null | undefined>,

		/** The display click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId, gclid, and impressionId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid or impressionId is a required field. */
		dclid: FormControl<string | null | undefined>,

		/** The alphanumeric encrypted user ID. When set, encryptionInfo should also be specified. This field is mutually exclusive with encryptedUserIdCandidates[], matchId, mobileDeviceId, gclid, dclid, and impressionId. This or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid or dclid or impressionId is a required field. */
		encryptedUserId: FormControl<string | null | undefined>,

		/** Floodlight Activity ID of this conversion. This is a required field. */
		floodlightActivityId: FormControl<string | null | undefined>,

		/** Floodlight Configuration ID of this conversion. This is a required field. */
		floodlightConfigurationId: FormControl<string | null | undefined>,

		/** The Google click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId, dclid, and impressionId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId or dclid or impressionId is a required field. */
		gclid: FormControl<string | null | undefined>,

		/** The impression ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId, and gclid. One of these identifiers must be set. */
		impressionId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversion". */
		kind: FormControl<string | null | undefined>,

		/** Whether Limit Ad Tracking is enabled. When set to true, the conversion will be used for reporting but not targeting. This will prevent remarketing. */
		limitAdTracking: FormControl<boolean | null | undefined>,

		/** The match ID field. A match ID is your own first-party identifier that has been synced with Google using the match ID feature in Floodlight. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[],mobileDeviceId, gclid, dclid, and impressionId. This or encryptedUserId orencryptedUserIdCandidates[] or mobileDeviceId or gclid or dclid or impressionIdis a required field. */
		matchId: FormControl<string | null | undefined>,

		/** The mobile device ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, gclid, dclid, and impressionId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or gclid or dclid or impressionId is a required field. */
		mobileDeviceId: FormControl<string | null | undefined>,

		/** Whether the conversion was for a non personalized ad. */
		nonPersonalizedAd: FormControl<boolean | null | undefined>,

		/** The ordinal of the conversion. Use this field to control how conversions of the same user and day are de-duplicated. This is a required field. */
		ordinal: FormControl<string | null | undefined>,

		/** The quantity of the conversion. This is a required field. */
		quantity: FormControl<string | null | undefined>,

		/** The timestamp of conversion, in Unix epoch micros. This is a required field. */
		timestampMicros: FormControl<string | null | undefined>,

		/** Whether this particular request may come from a user under the age of 16 (may differ by country), under compliance with the European Union's General Data Protection Regulation (GDPR). */
		treatmentForUnderage: FormControl<boolean | null | undefined>,

		/** The value of the conversion. This is a required field. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateConversionFormGroup() {
		return new FormGroup<ConversionFormProperties>({
			childDirectedTreatment: new FormControl<boolean | null | undefined>(undefined),
			dclid: new FormControl<string | null | undefined>(undefined),
			encryptedUserId: new FormControl<string | null | undefined>(undefined),
			floodlightActivityId: new FormControl<string | null | undefined>(undefined),
			floodlightConfigurationId: new FormControl<string | null | undefined>(undefined),
			gclid: new FormControl<string | null | undefined>(undefined),
			impressionId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			limitAdTracking: new FormControl<boolean | null | undefined>(undefined),
			matchId: new FormControl<string | null | undefined>(undefined),
			mobileDeviceId: new FormControl<string | null | undefined>(undefined),
			nonPersonalizedAd: new FormControl<boolean | null | undefined>(undefined),
			ordinal: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
			timestampMicros: new FormControl<string | null | undefined>(undefined),
			treatmentForUnderage: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A custom floodlight variable. This field may only be used when calling batchinsert; it is not supported by batchupdate. */
	export interface CustomFloodlightVariable {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#customFloodlightVariable". */
		kind?: string | null;

		/** The type of custom floodlight variable to supply a value for. These map to the "u[1-20]=" in the tags. */
		type?: CustomFloodlightVariableType | null;

		/** The value of the custom floodlight variable. The length of string must not exceed 100 characters. */
		value?: string | null;
	}

	/** A custom floodlight variable. This field may only be used when calling batchinsert; it is not supported by batchupdate. */
	export interface CustomFloodlightVariableFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#customFloodlightVariable". */
		kind: FormControl<string | null | undefined>,

		/** The type of custom floodlight variable to supply a value for. These map to the "u[1-20]=" in the tags. */
		type: FormControl<CustomFloodlightVariableType | null | undefined>,

		/** The value of the custom floodlight variable. The length of string must not exceed 100 characters. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustomFloodlightVariableFormGroup() {
		return new FormGroup<CustomFloodlightVariableFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CustomFloodlightVariableType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CustomFloodlightVariableType { U1 = 0, U2 = 1, U3 = 2, U4 = 3, U5 = 4, U6 = 5, U7 = 6, U8 = 7, U9 = 8, U10 = 9, U11 = 10, U12 = 11, U13 = 12, U14 = 13, U15 = 14, U16 = 15, U17 = 16, U18 = 17, U19 = 18, U20 = 19, U21 = 20, U22 = 21, U23 = 22, U24 = 23, U25 = 24, U26 = 25, U27 = 26, U28 = 27, U29 = 28, U30 = 29, U31 = 30, U32 = 31, U33 = 32, U34 = 33, U35 = 34, U36 = 35, U37 = 36, U38 = 37, U39 = 38, U40 = 39, U41 = 40, U42 = 41, U43 = 42, U44 = 43, U45 = 44, U46 = 45, U47 = 46, U48 = 47, U49 = 48, U50 = 49, U51 = 50, U52 = 51, U53 = 52, U54 = 53, U55 = 54, U56 = 55, U57 = 56, U58 = 57, U59 = 58, U60 = 59, U61 = 60, U62 = 61, U63 = 62, U64 = 63, U65 = 64, U66 = 65, U67 = 66, U68 = 67, U69 = 68, U70 = 69, U71 = 70, U72 = 71, U73 = 72, U74 = 73, U75 = 74, U76 = 75, U77 = 76, U78 = 77, U79 = 78, U80 = 79, U81 = 80, U82 = 81, U83 = 82, U84 = 83, U85 = 84, U86 = 85, U87 = 86, U88 = 87, U89 = 88, U90 = 89, U91 = 90, U92 = 91, U93 = 92, U94 = 93, U95 = 94, U96 = 95, U97 = 96, U98 = 97, U99 = 98, U100 = 99 }


	/** User identifying information. Exactly one type of identifier must be specified. */
	export interface UserIdentifier {

		/** Identify a user by name and address. */
		addressInfo?: OfflineUserAddressInfo;

		/** Hashed email address using SHA-256 hash function after normalization. */
		hashedEmail?: string | null;

		/** Hashed phone number using SHA-256 hash function after normalization (E164 standard). */
		hashedPhoneNumber?: string | null;
	}

	/** User identifying information. Exactly one type of identifier must be specified. */
	export interface UserIdentifierFormProperties {

		/** Hashed email address using SHA-256 hash function after normalization. */
		hashedEmail: FormControl<string | null | undefined>,

		/** Hashed phone number using SHA-256 hash function after normalization (E164 standard). */
		hashedPhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentifierFormGroup() {
		return new FormGroup<UserIdentifierFormProperties>({
			hashedEmail: new FormControl<string | null | undefined>(undefined),
			hashedPhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identify a user by name and address. */
	export interface OfflineUserAddressInfo {

		/** City of the address. */
		city?: string | null;

		/** 2-letter country code in ISO-3166-1 alpha-2 of the user's address. */
		countryCode?: string | null;

		/** First name of the user, which is hashed as SHA-256 after normalized (Lowercase all characters; Remove any extra spaces before, after, and in between). */
		hashedFirstName?: string | null;

		/** Last name of the user, which is hashed as SHA-256 after normalized (lower case only and no punctuation). */
		hashedLastName?: string | null;

		/** The street address of the user hashed using SHA-256 hash function after normalization (lower case only). */
		hashedStreetAddress?: string | null;

		/** Postal code of the user's address. */
		postalCode?: string | null;

		/** State code of the address. */
		state?: string | null;
	}

	/** Identify a user by name and address. */
	export interface OfflineUserAddressInfoFormProperties {

		/** City of the address. */
		city: FormControl<string | null | undefined>,

		/** 2-letter country code in ISO-3166-1 alpha-2 of the user's address. */
		countryCode: FormControl<string | null | undefined>,

		/** First name of the user, which is hashed as SHA-256 after normalized (Lowercase all characters; Remove any extra spaces before, after, and in between). */
		hashedFirstName: FormControl<string | null | undefined>,

		/** Last name of the user, which is hashed as SHA-256 after normalized (lower case only and no punctuation). */
		hashedLastName: FormControl<string | null | undefined>,

		/** The street address of the user hashed using SHA-256 hash function after normalization (lower case only). */
		hashedStreetAddress: FormControl<string | null | undefined>,

		/** Postal code of the user's address. */
		postalCode: FormControl<string | null | undefined>,

		/** State code of the address. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateOfflineUserAddressInfoFormGroup() {
		return new FormGroup<OfflineUserAddressInfoFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			hashedFirstName: new FormControl<string | null | undefined>(undefined),
			hashedLastName: new FormControl<string | null | undefined>(undefined),
			hashedStreetAddress: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The error code and description for a conversion that failed to insert or update. */
	export interface ConversionError {

		/** The error code. */
		code?: ConversionErrorCode | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionError". */
		kind?: string | null;

		/** A description of the error. */
		message?: string | null;
	}

	/** The error code and description for a conversion that failed to insert or update. */
	export interface ConversionErrorFormProperties {

		/** The error code. */
		code: FormControl<ConversionErrorCode | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionError". */
		kind: FormControl<string | null | undefined>,

		/** A description of the error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateConversionErrorFormGroup() {
		return new FormGroup<ConversionErrorFormProperties>({
			code: new FormControl<ConversionErrorCode | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConversionErrorCode { INVALID_ARGUMENT = 0, INTERNAL = 1, PERMISSION_DENIED = 2, NOT_FOUND = 3 }


	/** The original conversion that was inserted or updated and whether there were any errors. */
	export interface ConversionStatus {

		/** A Conversion represents when a user successfully performs a desired action after seeing an ad. */
		conversion?: Conversion;

		/** A list of errors related to this conversion. */
		errors?: Array<ConversionError>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionStatus". */
		kind?: string | null;
	}

	/** The original conversion that was inserted or updated and whether there were any errors. */
	export interface ConversionStatusFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionStatus". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateConversionStatusFormGroup() {
		return new FormGroup<ConversionStatusFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Insert Conversions Request. */
	export interface ConversionsBatchInsertRequest {

		/** The set of conversions to insert. */
		conversions?: Array<Conversion>;

		/** A description of how user IDs are encrypted. */
		encryptionInfo?: EncryptionInfo;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertRequest". */
		kind?: string | null;
	}

	/** Insert Conversions Request. */
	export interface ConversionsBatchInsertRequestFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertRequest". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateConversionsBatchInsertRequestFormGroup() {
		return new FormGroup<ConversionsBatchInsertRequestFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of how user IDs are encrypted. */
	export interface EncryptionInfo {

		/** The encryption entity ID. This should match the encryption configuration for ad serving or Data Transfer. */
		encryptionEntityId?: string | null;

		/** The encryption entity type. This should match the encryption configuration for ad serving or Data Transfer. */
		encryptionEntityType?: EncryptionInfoEncryptionEntityType | null;

		/** Describes whether the encrypted cookie was received from ad serving (the %m macro) or from Data Transfer. */
		encryptionSource?: EncryptionInfoEncryptionSource | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#encryptionInfo". */
		kind?: string | null;
	}

	/** A description of how user IDs are encrypted. */
	export interface EncryptionInfoFormProperties {

		/** The encryption entity ID. This should match the encryption configuration for ad serving or Data Transfer. */
		encryptionEntityId: FormControl<string | null | undefined>,

		/** The encryption entity type. This should match the encryption configuration for ad serving or Data Transfer. */
		encryptionEntityType: FormControl<EncryptionInfoEncryptionEntityType | null | undefined>,

		/** Describes whether the encrypted cookie was received from ad serving (the %m macro) or from Data Transfer. */
		encryptionSource: FormControl<EncryptionInfoEncryptionSource | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#encryptionInfo". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionInfoFormGroup() {
		return new FormGroup<EncryptionInfoFormProperties>({
			encryptionEntityId: new FormControl<string | null | undefined>(undefined),
			encryptionEntityType: new FormControl<EncryptionInfoEncryptionEntityType | null | undefined>(undefined),
			encryptionSource: new FormControl<EncryptionInfoEncryptionSource | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EncryptionInfoEncryptionEntityType { ENCRYPTION_ENTITY_TYPE_UNKNOWN = 0, DCM_ACCOUNT = 1, DCM_ADVERTISER = 2, DBM_PARTNER = 3, DBM_ADVERTISER = 4, ADWORDS_CUSTOMER = 5, DFP_NETWORK_CODE = 6 }

	export enum EncryptionInfoEncryptionSource { ENCRYPTION_SCOPE_UNKNOWN = 0, AD_SERVING = 1, DATA_TRANSFER = 2 }


	/** Insert Conversions Response. */
	export interface ConversionsBatchInsertResponse {

		/** Indicates that some or all conversions failed to insert. */
		hasFailures?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertResponse". */
		kind?: string | null;

		/** The insert status of each conversion. Statuses are returned in the same order that conversions are inserted. */
		status?: Array<ConversionStatus>;
	}

	/** Insert Conversions Response. */
	export interface ConversionsBatchInsertResponseFormProperties {

		/** Indicates that some or all conversions failed to insert. */
		hasFailures: FormControl<boolean | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateConversionsBatchInsertResponseFormGroup() {
		return new FormGroup<ConversionsBatchInsertResponseFormProperties>({
			hasFailures: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update Conversions Request. */
	export interface ConversionsBatchUpdateRequest {

		/** The set of conversions to update. */
		conversions?: Array<Conversion>;

		/** A description of how user IDs are encrypted. */
		encryptionInfo?: EncryptionInfo;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateRequest". */
		kind?: string | null;
	}

	/** Update Conversions Request. */
	export interface ConversionsBatchUpdateRequestFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateRequest". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateConversionsBatchUpdateRequestFormGroup() {
		return new FormGroup<ConversionsBatchUpdateRequestFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update Conversions Response. */
	export interface ConversionsBatchUpdateResponse {

		/** Indicates that some or all conversions failed to update. */
		hasFailures?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateResponse". */
		kind?: string | null;

		/** The update status of each conversion. Statuses are returned in the same order that conversions are updated. */
		status?: Array<ConversionStatus>;
	}

	/** Update Conversions Response. */
	export interface ConversionsBatchUpdateResponseFormProperties {

		/** Indicates that some or all conversions failed to update. */
		hasFailures: FormControl<boolean | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateConversionsBatchUpdateResponseFormGroup() {
		return new FormGroup<ConversionsBatchUpdateResponseFormProperties>({
			hasFailures: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Country List Response */
	export interface CountriesListResponse {

		/** Country collection. */
		countries?: Array<Country>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#countriesListResponse". */
		kind?: string | null;
	}

	/** Country List Response */
	export interface CountriesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#countriesListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateCountriesListResponseFormGroup() {
		return new FormGroup<CountriesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a Creative. */
	export interface Creative {

		/** Account ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types. */
		accountId?: string | null;

		/** Whether the creative is active. Applicable to all creative types. */
		active?: boolean | null;

		/** Ad parameters user for VPAID creative. This is a read-only field. Applicable to the following creative types: all VPAID. */
		adParameters?: string | null;

		/** Keywords for a Rich Media creative. Keywords let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use keywords to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		adTagKeys?: Array<string>;

		/** Additional sizes associated with a responsive creative. When inserting or updating a creative either the size ID field or size width and height fields can be used. Applicable to DISPLAY creatives when the primary asset type is HTML_IMAGE. */
		additionalSizes?: Array<Size>;

		/** Required. Advertiser ID of this creative. This is a required field. Applicable to all creative types. */
		advertiserId?: string | null;

		/** Whether script access is allowed for this creative. This is a read-only and deprecated field which will automatically be set to true on update. Applicable to the following creative types: FLASH_INPAGE. */
		allowScriptAccess?: boolean | null;

		/** Whether the creative is archived. Applicable to all creative types. */
		archived?: boolean | null;

		/** Type of artwork used for the creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		artworkType?: CreativeArtworkType | null;

		/** Source application where creative was authored. Presently, only DBM authored creatives will have this field set. Applicable to all creative types. */
		authoringSource?: CreativeAuthoringSource | null;

		/** Authoring tool for HTML5 banner creatives. This is a read-only field. Applicable to the following creative types: HTML5_BANNER. */
		authoringTool?: CreativeAuthoringTool | null;

		/** Whether images are automatically advanced for image gallery creatives. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY. */
		autoAdvanceImages?: boolean | null;

		/** The 6-character HTML color code, beginning with #, for the background of the window area where the Flash file is displayed. Default is white. Applicable to the following creative types: FLASH_INPAGE. */
		backgroundColor?: string | null;

		/** Click-through URL */
		backupImageClickThroughUrl?: CreativeClickThroughUrl;

		/** List of feature dependencies that will cause a backup image to be served if the browser that serves the ad does not support them. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative asset correctly. This field is initially auto-generated to contain all features detected by Campaign Manager for all the assets of this creative and can then be modified by the client. To reset this field, copy over all the creativeAssets' detected features. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		backupImageFeatures?: Array<string>;

		/** Reporting label used for HTML5 banner backup image. Applicable to the following creative types: DISPLAY when the primary asset type is not HTML_IMAGE. */
		backupImageReportingLabel?: string | null;

		/** Target Window. */
		backupImageTargetWindow?: TargetWindow;

		/** Click tags of the creative. For DISPLAY, FLASH_INPAGE, and HTML5_BANNER creatives, this is a subset of detected click tags for the assets associated with this creative. After creating a flash asset, detected click tags will be returned in the creativeAssetMetadata. When inserting the creative, populate the creative clickTags field using the creativeAssetMetadata.clickTags field. For DISPLAY_IMAGE_GALLERY creatives, there should be exactly one entry in this list for each image creative asset. A click tag is matched with a corresponding creative asset by matching the clickTag.name field with the creativeAsset.assetIdentifier.name field. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		clickTags?: Array<ClickTag>;

		/** Industry standard ID assigned to creative for reach and frequency. Applicable to INSTREAM_VIDEO_REDIRECT creatives. */
		commercialId?: string | null;

		/** List of companion creatives assigned to an in-Stream video creative. Acceptable values include IDs of existing flash and image creatives. Applicable to the following creative types: all VPAID, all INSTREAM_AUDIO and all INSTREAM_VIDEO with dynamicAssetSelection set to false. */
		companionCreatives?: Array<string>;

		/** Compatibilities associated with this creative. This is a read-only field. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. Only pre-existing creatives may have these compatibilities since new creatives will either be assigned DISPLAY or DISPLAY_INTERSTITIAL instead. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. IN_STREAM_AUDIO refers to rendering in in-stream audio ads developed with the VAST standard. Applicable to all creative types. Acceptable values are: - "APP" - "APP_INTERSTITIAL" - "IN_STREAM_VIDEO" - "IN_STREAM_AUDIO" - "DISPLAY" - "DISPLAY_INTERSTITIAL" */
		compatibility?: Array<AdCompatibility>;

		/** Whether Flash assets associated with the creative need to be automatically converted to HTML5. This flag is enabled by default and users can choose to disable it if they don't want the system to generate and use HTML5 asset for this creative. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		convertFlashToHtml5?: boolean | null;

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
		dynamicAssetSelection?: boolean | null;

		/** List of exit events configured for the creative. For DISPLAY and DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags, For DISPLAY, an event is also created from the backupImageReportingLabel. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		exitCustomEvents?: Array<CreativeCustomEvent>;

		/** FsCommand. */
		fsCommand?: FsCommand;

		/** HTML code for the creative. This is a required field when applicable. This field is ignored if htmlCodeLocked is true. Applicable to the following creative types: all CUSTOM, FLASH_INPAGE, and HTML5_BANNER, and all RICH_MEDIA. */
		htmlCode?: string | null;

		/** Whether HTML code is generated by Campaign Manager or manually entered. Set to true to ignore changes to htmlCode. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER. */
		htmlCodeLocked?: boolean | null;

		/** ID of this creative. This is a read-only, auto-generated field. Applicable to all creative types. */
		id?: string | null;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creative". */
		kind?: string | null;

		/** Modification timestamp. */
		lastModifiedInfo?: LastModifiedInfo;

		/** Latest Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		latestTraffickedCreativeId?: string | null;

		/** Description of the audio or video ad. Applicable to the following creative types: all INSTREAM_VIDEO, INSTREAM_AUDIO, and all VPAID. */
		mediaDescription?: string | null;

		/** Creative audio or video duration in seconds. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO, INSTREAM_AUDIO, all RICH_MEDIA, and all VPAID. */
		mediaDuration?: number | null;

		/** Required. Name of the creative. This must be less than 256 characters long. Applicable to all creative types. */
		name?: string | null;

		/** Online Behavioral Advertiser icon. */
		obaIcon?: ObaIcon;

		/** Override CSS value for rich media creatives. Applicable to the following creative types: all RICH_MEDIA. */
		overrideCss?: string | null;

		/** Video Offset */
		progressOffset?: VideoOffset;

		/** URL of hosted image or hosted video or another ad tag. For INSTREAM_VIDEO_REDIRECT creatives this is the in-stream video redirect URL. The standard for a VAST (Video Ad Serving Template) ad response allows for a redirect link to another VAST 2.0 or 3.0 call. This is a required field when applicable. Applicable to the following creative types: DISPLAY_REDIRECT, INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO_REDIRECT */
		redirectUrl?: string | null;

		/** ID of current rendering version. This is a read-only field. Applicable to all creative types. */
		renderingId?: string | null;

		/** Represents a DimensionValue resource. */
		renderingIdDimensionValue?: DimensionValue;

		/** The minimum required Flash plugin version for this creative. For example, 11.2.202.235. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		requiredFlashPluginVersion?: string | null;

		/** The internal Flash version for this creative as calculated by Studio. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		requiredFlashVersion?: number | null;

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		size?: Size;

		/** Video Offset */
		skipOffset?: VideoOffset;

		/** Whether the user can choose to skip the creative. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID. */
		skippable?: boolean | null;

		/** Whether the creative is SSL-compliant. This is a read-only field. Applicable to all creative types. */
		sslCompliant?: boolean | null;

		/** Whether creative should be treated as SSL compliant even if the system scan shows it's not. Applicable to all creative types. */
		sslOverride?: boolean | null;

		/** Studio advertiser ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		studioAdvertiserId?: string | null;

		/** Studio creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		studioCreativeId?: string | null;

		/** Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		studioTraffickedCreativeId?: string | null;

		/** Subaccount ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types. */
		subaccountId?: string | null;

		/** Third-party URL used to record backup image impressions. Applicable to the following creative types: all RICH_MEDIA. */
		thirdPartyBackupImageImpressionsUrl?: string | null;

		/** Third-party URL used to record rich media impressions. Applicable to the following creative types: all RICH_MEDIA. */
		thirdPartyRichMediaImpressionsUrl?: string | null;

		/** Third-party URLs for tracking in-stream creative events. Applicable to the following creative types: all INSTREAM_VIDEO, all INSTREAM_AUDIO, and all VPAID. */
		thirdPartyUrls?: Array<ThirdPartyTrackingUrl>;

		/** List of timer events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset is not HTML_IMAGE. */
		timerCustomEvents?: Array<CreativeCustomEvent>;

		/** Combined size of all creative assets. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		totalFileSize?: string | null;

		/** Required. Type of this creative. Applicable to all creative types. *Note:* FLASH_INPAGE, HTML5_BANNER, and IMAGE are only used for existing creatives. New creatives should use DISPLAY as a replacement for these types. */
		type?: CreativeType | null;

		/** A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID. */
		universalAdId?: UniversalAdId;

		/** The version number helps you keep track of multiple versions of your creative in your reports. The version number will always be auto-generated during insert operations to start at 1. For tracking creatives the version cannot be incremented and will always remain at 1. For all other creative types the version can be incremented only by 1 during update operations. In addition, the version will be automatically incremented by 1 when undergoing Rich Media creative merging. Applicable to all creative types. */
		version?: number | null;
	}

	/** Contains properties of a Creative. */
	export interface CreativeFormProperties {

		/** Account ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types. */
		accountId: FormControl<string | null | undefined>,

		/** Whether the creative is active. Applicable to all creative types. */
		active: FormControl<boolean | null | undefined>,

		/** Ad parameters user for VPAID creative. This is a read-only field. Applicable to the following creative types: all VPAID. */
		adParameters: FormControl<string | null | undefined>,

		/** Required. Advertiser ID of this creative. This is a required field. Applicable to all creative types. */
		advertiserId: FormControl<string | null | undefined>,

		/** Whether script access is allowed for this creative. This is a read-only and deprecated field which will automatically be set to true on update. Applicable to the following creative types: FLASH_INPAGE. */
		allowScriptAccess: FormControl<boolean | null | undefined>,

		/** Whether the creative is archived. Applicable to all creative types. */
		archived: FormControl<boolean | null | undefined>,

		/** Type of artwork used for the creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		artworkType: FormControl<CreativeArtworkType | null | undefined>,

		/** Source application where creative was authored. Presently, only DBM authored creatives will have this field set. Applicable to all creative types. */
		authoringSource: FormControl<CreativeAuthoringSource | null | undefined>,

		/** Authoring tool for HTML5 banner creatives. This is a read-only field. Applicable to the following creative types: HTML5_BANNER. */
		authoringTool: FormControl<CreativeAuthoringTool | null | undefined>,

		/** Whether images are automatically advanced for image gallery creatives. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY. */
		autoAdvanceImages: FormControl<boolean | null | undefined>,

		/** The 6-character HTML color code, beginning with #, for the background of the window area where the Flash file is displayed. Default is white. Applicable to the following creative types: FLASH_INPAGE. */
		backgroundColor: FormControl<string | null | undefined>,

		/** Reporting label used for HTML5 banner backup image. Applicable to the following creative types: DISPLAY when the primary asset type is not HTML_IMAGE. */
		backupImageReportingLabel: FormControl<string | null | undefined>,

		/** Industry standard ID assigned to creative for reach and frequency. Applicable to INSTREAM_VIDEO_REDIRECT creatives. */
		commercialId: FormControl<string | null | undefined>,

		/** Whether Flash assets associated with the creative need to be automatically converted to HTML5. This flag is enabled by default and users can choose to disable it if they don't want the system to generate and use HTML5 asset for this creative. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		convertFlashToHtml5: FormControl<boolean | null | undefined>,

		/** Set this to true to enable the use of rules to target individual assets in this creative. When set to true creativeAssetSelection must be set. This also controls asset-level companions. When this is true, companion creatives should be assigned to creative assets. Learn more. Applicable to INSTREAM_VIDEO creatives. */
		dynamicAssetSelection: FormControl<boolean | null | undefined>,

		/** HTML code for the creative. This is a required field when applicable. This field is ignored if htmlCodeLocked is true. Applicable to the following creative types: all CUSTOM, FLASH_INPAGE, and HTML5_BANNER, and all RICH_MEDIA. */
		htmlCode: FormControl<string | null | undefined>,

		/** Whether HTML code is generated by Campaign Manager or manually entered. Set to true to ignore changes to htmlCode. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER. */
		htmlCodeLocked: FormControl<boolean | null | undefined>,

		/** ID of this creative. This is a read-only, auto-generated field. Applicable to all creative types. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creative". */
		kind: FormControl<string | null | undefined>,

		/** Latest Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		latestTraffickedCreativeId: FormControl<string | null | undefined>,

		/** Description of the audio or video ad. Applicable to the following creative types: all INSTREAM_VIDEO, INSTREAM_AUDIO, and all VPAID. */
		mediaDescription: FormControl<string | null | undefined>,

		/** Creative audio or video duration in seconds. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO, INSTREAM_AUDIO, all RICH_MEDIA, and all VPAID. */
		mediaDuration: FormControl<number | null | undefined>,

		/** Required. Name of the creative. This must be less than 256 characters long. Applicable to all creative types. */
		name: FormControl<string | null | undefined>,

		/** Override CSS value for rich media creatives. Applicable to the following creative types: all RICH_MEDIA. */
		overrideCss: FormControl<string | null | undefined>,

		/** URL of hosted image or hosted video or another ad tag. For INSTREAM_VIDEO_REDIRECT creatives this is the in-stream video redirect URL. The standard for a VAST (Video Ad Serving Template) ad response allows for a redirect link to another VAST 2.0 or 3.0 call. This is a required field when applicable. Applicable to the following creative types: DISPLAY_REDIRECT, INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO_REDIRECT */
		redirectUrl: FormControl<string | null | undefined>,

		/** ID of current rendering version. This is a read-only field. Applicable to all creative types. */
		renderingId: FormControl<string | null | undefined>,

		/** The minimum required Flash plugin version for this creative. For example, 11.2.202.235. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		requiredFlashPluginVersion: FormControl<string | null | undefined>,

		/** The internal Flash version for this creative as calculated by Studio. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		requiredFlashVersion: FormControl<number | null | undefined>,

		/** Whether the user can choose to skip the creative. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID. */
		skippable: FormControl<boolean | null | undefined>,

		/** Whether the creative is SSL-compliant. This is a read-only field. Applicable to all creative types. */
		sslCompliant: FormControl<boolean | null | undefined>,

		/** Whether creative should be treated as SSL compliant even if the system scan shows it's not. Applicable to all creative types. */
		sslOverride: FormControl<boolean | null | undefined>,

		/** Studio advertiser ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		studioAdvertiserId: FormControl<string | null | undefined>,

		/** Studio creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		studioCreativeId: FormControl<string | null | undefined>,

		/** Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		studioTraffickedCreativeId: FormControl<string | null | undefined>,

		/** Subaccount ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types. */
		subaccountId: FormControl<string | null | undefined>,

		/** Third-party URL used to record backup image impressions. Applicable to the following creative types: all RICH_MEDIA. */
		thirdPartyBackupImageImpressionsUrl: FormControl<string | null | undefined>,

		/** Third-party URL used to record rich media impressions. Applicable to the following creative types: all RICH_MEDIA. */
		thirdPartyRichMediaImpressionsUrl: FormControl<string | null | undefined>,

		/** Combined size of all creative assets. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID. */
		totalFileSize: FormControl<string | null | undefined>,

		/** Required. Type of this creative. Applicable to all creative types. *Note:* FLASH_INPAGE, HTML5_BANNER, and IMAGE are only used for existing creatives. New creatives should use DISPLAY as a replacement for these types. */
		type: FormControl<CreativeType | null | undefined>,

		/** The version number helps you keep track of multiple versions of your creative in your reports. The version number will always be auto-generated during insert operations to start at 1. For tracking creatives the version cannot be incremented and will always remain at 1. For all other creative types the version can be incremented only by 1 during update operations. In addition, the version will be automatically incremented by 1 when undergoing Rich Media creative merging. Applicable to all creative types. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateCreativeFormGroup() {
		return new FormGroup<CreativeFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			adParameters: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			allowScriptAccess: new FormControl<boolean | null | undefined>(undefined),
			archived: new FormControl<boolean | null | undefined>(undefined),
			artworkType: new FormControl<CreativeArtworkType | null | undefined>(undefined),
			authoringSource: new FormControl<CreativeAuthoringSource | null | undefined>(undefined),
			authoringTool: new FormControl<CreativeAuthoringTool | null | undefined>(undefined),
			autoAdvanceImages: new FormControl<boolean | null | undefined>(undefined),
			backgroundColor: new FormControl<string | null | undefined>(undefined),
			backupImageReportingLabel: new FormControl<string | null | undefined>(undefined),
			commercialId: new FormControl<string | null | undefined>(undefined),
			convertFlashToHtml5: new FormControl<boolean | null | undefined>(undefined),
			dynamicAssetSelection: new FormControl<boolean | null | undefined>(undefined),
			htmlCode: new FormControl<string | null | undefined>(undefined),
			htmlCodeLocked: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			latestTraffickedCreativeId: new FormControl<string | null | undefined>(undefined),
			mediaDescription: new FormControl<string | null | undefined>(undefined),
			mediaDuration: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			overrideCss: new FormControl<string | null | undefined>(undefined),
			redirectUrl: new FormControl<string | null | undefined>(undefined),
			renderingId: new FormControl<string | null | undefined>(undefined),
			requiredFlashPluginVersion: new FormControl<string | null | undefined>(undefined),
			requiredFlashVersion: new FormControl<number | null | undefined>(undefined),
			skippable: new FormControl<boolean | null | undefined>(undefined),
			sslCompliant: new FormControl<boolean | null | undefined>(undefined),
			sslOverride: new FormControl<boolean | null | undefined>(undefined),
			studioAdvertiserId: new FormControl<string | null | undefined>(undefined),
			studioCreativeId: new FormControl<string | null | undefined>(undefined),
			studioTraffickedCreativeId: new FormControl<string | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
			thirdPartyBackupImageImpressionsUrl: new FormControl<string | null | undefined>(undefined),
			thirdPartyRichMediaImpressionsUrl: new FormControl<string | null | undefined>(undefined),
			totalFileSize: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CreativeType | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CreativeArtworkType { ARTWORK_TYPE_FLASH = 0, ARTWORK_TYPE_HTML5 = 1, ARTWORK_TYPE_MIXED = 2, ARTWORK_TYPE_IMAGE = 3 }

	export enum CreativeAuthoringSource { CREATIVE_AUTHORING_SOURCE_DCM = 0, CREATIVE_AUTHORING_SOURCE_DBM = 1, CREATIVE_AUTHORING_SOURCE_STUDIO = 2, CREATIVE_AUTHORING_SOURCE_GWD = 3, CREATIVE_AUTHORING_SOURCE_ACS = 4 }

	export enum CreativeAuthoringTool { NINJA = 0, SWIFFY = 1 }


	/** Target Window. */
	export interface TargetWindow {

		/** User-entered value. */
		customHtml?: string | null;

		/** Type of browser window for which the backup image of the flash creative can be displayed. */
		targetWindowOption?: TargetWindowTargetWindowOption | null;
	}

	/** Target Window. */
	export interface TargetWindowFormProperties {

		/** User-entered value. */
		customHtml: FormControl<string | null | undefined>,

		/** Type of browser window for which the backup image of the flash creative can be displayed. */
		targetWindowOption: FormControl<TargetWindowTargetWindowOption | null | undefined>,
	}
	export function CreateTargetWindowFormGroup() {
		return new FormGroup<TargetWindowFormProperties>({
			customHtml: new FormControl<string | null | undefined>(undefined),
			targetWindowOption: new FormControl<TargetWindowTargetWindowOption | null | undefined>(undefined),
		});

	}

	export enum TargetWindowTargetWindowOption { NEW_WINDOW = 0, CURRENT_WINDOW = 1, CUSTOM = 2 }


	/** Creative Custom Event. */
	export interface CreativeCustomEvent {

		/** Unique ID of this event used by Reporting and Data Transfer. This is a read-only field. */
		advertiserCustomEventId?: string | null;

		/** User-entered name for the event. */
		advertiserCustomEventName?: string | null;

		/** Type of the event. This is a read-only field. */
		advertiserCustomEventType?: CreativeCustomEventAdvertiserCustomEventType | null;

		/** Artwork label column, used to link events in Campaign Manager back to events in Studio. This is a required field and should not be modified after insertion. */
		artworkLabel?: string | null;

		/** Artwork type used by the creative.This is a read-only field. */
		artworkType?: CreativeArtworkType | null;

		/** Click-through URL */
		exitClickThroughUrl?: CreativeClickThroughUrl;

		/** ID of this event. This is a required field and should not be modified after insertion. */
		id?: string | null;

		/** Popup Window Properties. */
		popupWindowProperties?: PopupWindowProperties;

		/** Target type used by the event. */
		targetType?: CreativeCustomEventTargetType | null;

		/** Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field. */
		videoReportingId?: string | null;
	}

	/** Creative Custom Event. */
	export interface CreativeCustomEventFormProperties {

		/** Unique ID of this event used by Reporting and Data Transfer. This is a read-only field. */
		advertiserCustomEventId: FormControl<string | null | undefined>,

		/** User-entered name for the event. */
		advertiserCustomEventName: FormControl<string | null | undefined>,

		/** Type of the event. This is a read-only field. */
		advertiserCustomEventType: FormControl<CreativeCustomEventAdvertiserCustomEventType | null | undefined>,

		/** Artwork label column, used to link events in Campaign Manager back to events in Studio. This is a required field and should not be modified after insertion. */
		artworkLabel: FormControl<string | null | undefined>,

		/** Artwork type used by the creative.This is a read-only field. */
		artworkType: FormControl<CreativeArtworkType | null | undefined>,

		/** ID of this event. This is a required field and should not be modified after insertion. */
		id: FormControl<string | null | undefined>,

		/** Target type used by the event. */
		targetType: FormControl<CreativeCustomEventTargetType | null | undefined>,

		/** Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field. */
		videoReportingId: FormControl<string | null | undefined>,
	}
	export function CreateCreativeCustomEventFormGroup() {
		return new FormGroup<CreativeCustomEventFormProperties>({
			advertiserCustomEventId: new FormControl<string | null | undefined>(undefined),
			advertiserCustomEventName: new FormControl<string | null | undefined>(undefined),
			advertiserCustomEventType: new FormControl<CreativeCustomEventAdvertiserCustomEventType | null | undefined>(undefined),
			artworkLabel: new FormControl<string | null | undefined>(undefined),
			artworkType: new FormControl<CreativeArtworkType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			targetType: new FormControl<CreativeCustomEventTargetType | null | undefined>(undefined),
			videoReportingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreativeCustomEventAdvertiserCustomEventType { ADVERTISER_EVENT_TIMER = 0, ADVERTISER_EVENT_EXIT = 1, ADVERTISER_EVENT_COUNTER = 2 }


	/** Popup Window Properties. */
	export interface PopupWindowProperties {

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		dimension?: Size;

		/** Offset Position. */
		offset?: OffsetPosition;

		/** Popup window position either centered or at specific coordinate. */
		positionType?: PopupWindowPropertiesPositionType | null;

		/** Whether to display the browser address bar. */
		showAddressBar?: boolean | null;

		/** Whether to display the browser menu bar. */
		showMenuBar?: boolean | null;

		/** Whether to display the browser scroll bar. */
		showScrollBar?: boolean | null;

		/** Whether to display the browser status bar. */
		showStatusBar?: boolean | null;

		/** Whether to display the browser tool bar. */
		showToolBar?: boolean | null;

		/** Title of popup window. */
		title?: string | null;
	}

	/** Popup Window Properties. */
	export interface PopupWindowPropertiesFormProperties {

		/** Popup window position either centered or at specific coordinate. */
		positionType: FormControl<PopupWindowPropertiesPositionType | null | undefined>,

		/** Whether to display the browser address bar. */
		showAddressBar: FormControl<boolean | null | undefined>,

		/** Whether to display the browser menu bar. */
		showMenuBar: FormControl<boolean | null | undefined>,

		/** Whether to display the browser scroll bar. */
		showScrollBar: FormControl<boolean | null | undefined>,

		/** Whether to display the browser status bar. */
		showStatusBar: FormControl<boolean | null | undefined>,

		/** Whether to display the browser tool bar. */
		showToolBar: FormControl<boolean | null | undefined>,

		/** Title of popup window. */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePopupWindowPropertiesFormGroup() {
		return new FormGroup<PopupWindowPropertiesFormProperties>({
			positionType: new FormControl<PopupWindowPropertiesPositionType | null | undefined>(undefined),
			showAddressBar: new FormControl<boolean | null | undefined>(undefined),
			showMenuBar: new FormControl<boolean | null | undefined>(undefined),
			showScrollBar: new FormControl<boolean | null | undefined>(undefined),
			showStatusBar: new FormControl<boolean | null | undefined>(undefined),
			showToolBar: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Offset Position. */
	export interface OffsetPosition {

		/** Offset distance from left side of an asset or a window. */
		left?: number | null;

		/** Offset distance from top side of an asset or a window. */
		top?: number | null;
	}

	/** Offset Position. */
	export interface OffsetPositionFormProperties {

		/** Offset distance from left side of an asset or a window. */
		left: FormControl<number | null | undefined>,

		/** Offset distance from top side of an asset or a window. */
		top: FormControl<number | null | undefined>,
	}
	export function CreateOffsetPositionFormGroup() {
		return new FormGroup<OffsetPositionFormProperties>({
			left: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PopupWindowPropertiesPositionType { CENTER = 0, COORDINATES = 1 }

	export enum CreativeCustomEventTargetType { TARGET_BLANK = 0, TARGET_TOP = 1, TARGET_SELF = 2, TARGET_PARENT = 3, TARGET_POPUP = 4 }


	/** Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to INSTREAM_VIDEO creatives. */
	export interface CreativeAssetSelection {

		/** A creativeAssets[].id. This should refer to one of the parent assets in this creative, and will be served if none of the rules match. This is a required field. */
		defaultAssetId?: string | null;

		/** Rules determine which asset will be served to a viewer. Rules will be evaluated in the order in which they are stored in this list. This list must contain at least one rule. Applicable to INSTREAM_VIDEO creatives. */
		rules?: Array<Rule>;
	}

	/** Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to INSTREAM_VIDEO creatives. */
	export interface CreativeAssetSelectionFormProperties {

		/** A creativeAssets[].id. This should refer to one of the parent assets in this creative, and will be served if none of the rules match. This is a required field. */
		defaultAssetId: FormControl<string | null | undefined>,
	}
	export function CreateCreativeAssetSelectionFormGroup() {
		return new FormGroup<CreativeAssetSelectionFormProperties>({
			defaultAssetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A rule associates an asset with a targeting template for asset-level targeting. Applicable to INSTREAM_VIDEO creatives. */
	export interface Rule {

		/** A creativeAssets[].id. This should refer to one of the parent assets in this creative. This is a required field. */
		assetId?: string | null;

		/** A user-friendly name for this rule. This is a required field. */
		name?: string | null;

		/** A targeting template ID. The targeting from the targeting template will be used to determine whether this asset should be served. This is a required field. */
		targetingTemplateId?: string | null;
	}

	/** A rule associates an asset with a targeting template for asset-level targeting. Applicable to INSTREAM_VIDEO creatives. */
	export interface RuleFormProperties {

		/** A creativeAssets[].id. This should refer to one of the parent assets in this creative. This is a required field. */
		assetId: FormControl<string | null | undefined>,

		/** A user-friendly name for this rule. This is a required field. */
		name: FormControl<string | null | undefined>,

		/** A targeting template ID. The targeting from the targeting template will be used to determine whether this asset should be served. This is a required field. */
		targetingTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			targetingTemplateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creative Asset. */
	export interface CreativeAsset {

		/** Whether ActionScript3 is enabled for the flash asset. This is a read-only field. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		actionScript3?: boolean | null;

		/** Whether the video or audio asset is active. This is a read-only field for VPAID_NON_LINEAR_VIDEO assets. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		active?: boolean | null;

		/** Additional sizes associated with this creative asset. HTML5 asset generated by compatible software such as GWD will be able to support more sizes this creative asset can render. */
		additionalSizes?: Array<Size>;

		/** Possible alignments for an asset. This is a read-only field. Applicable to the following creative types: RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL . */
		alignment?: CreativeAssetAlignment | null;

		/** Artwork type of rich media creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
		artworkType?: CreativeArtworkType | null;

		/** Creative Asset ID. */
		assetIdentifier?: CreativeAssetId;

		/** Audio stream bit rate in kbps. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		audioBitRate?: number | null;

		/** Audio sample bit rate in hertz. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		audioSampleRate?: number | null;

		/** Creative Custom Event. */
		backupImageExit?: CreativeCustomEvent;

		/** Detected bit-rate for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		bitRate?: number | null;

		/** Rich media child asset type. This is a read-only field. Applicable to the following creative types: all VPAID. */
		childAssetType?: CreativeAssetChildAssetType | null;

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		collapsedSize?: Size;

		/** List of companion creatives assigned to an in-stream video creative asset. Acceptable values include IDs of existing flash and image creatives. Applicable to INSTREAM_VIDEO creative type with dynamicAssetSelection set to true. */
		companionCreativeIds?: Array<string>;

		/** Custom start time in seconds for making the asset visible. Applicable to the following creative types: all RICH_MEDIA. Value must be greater than or equal to 0. */
		customStartTimeValue?: number | null;

		/** List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		detectedFeatures?: Array<string>;

		/** Type of rich media asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
		displayType?: CreativeAssetDisplayType | null;

		/** Duration in seconds for which an asset will be displayed. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID_LINEAR_VIDEO. Value must be greater than or equal to 1. */
		duration?: number | null;

		/** Duration type for which an asset will be displayed. Applicable to the following creative types: all RICH_MEDIA. */
		durationType?: CreativeAssetDurationType | null;

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		expandedDimension?: Size;

		/** File size associated with this creative asset. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
		fileSize?: string | null;

		/** Flash version of the asset. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		flashVersion?: number | null;

		/** Video frame rate for video asset in frames per second. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
		frameRate?: number | null;

		/** Whether to hide Flash objects flag for an asset. Applicable to the following creative types: all RICH_MEDIA. */
		hideFlashObjects?: boolean | null;

		/** Whether to hide selection boxes flag for an asset. Applicable to the following creative types: all RICH_MEDIA. */
		hideSelectionBoxes?: boolean | null;

		/** Whether the asset is horizontally locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
		horizontallyLocked?: boolean | null;

		/** Numeric ID of this creative asset. This is a required field and should not be modified. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
		id?: string | null;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Detected duration for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		mediaDuration?: number | null;

		/** Detected MIME type for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		mimeType?: string | null;

		/** Offset Position. */
		offset?: OffsetPosition;

		/** Orientation of video asset. This is a read-only, auto-generated field. */
		orientation?: CreativeAssetOrientation | null;

		/** Whether the backup asset is original or changed by the user in Campaign Manager. Applicable to the following creative types: all RICH_MEDIA. */
		originalBackup?: boolean | null;

		/** Whether this asset is used as a polite load asset. */
		politeLoad?: boolean | null;

		/** Offset Position. */
		position?: OffsetPosition;

		/** Offset left unit for an asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
		positionLeftUnit?: CreativeAssetPositionLeftUnit | null;

		/** Offset top unit for an asset. This is a read-only field if the asset displayType is ASSET_DISPLAY_TYPE_OVERLAY. Applicable to the following creative types: all RICH_MEDIA. */
		positionTopUnit?: CreativeAssetPositionLeftUnit | null;

		/** Progressive URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
		progressiveServingUrl?: string | null;

		/** Whether the asset pushes down other content. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable when the asset offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height. */
		pushdown?: boolean | null;

		/** Pushdown duration in seconds for an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable when the asset pushdown field is true, the offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height. Acceptable values are 0 to 9.99, inclusive. */
		pushdownDuration?: number | null;

		/** Role of the asset in relation to creative. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. This is a required field. PRIMARY applies to DISPLAY, FLASH_INPAGE, HTML5_BANNER, IMAGE, DISPLAY_IMAGE_GALLERY, all RICH_MEDIA (which may contain multiple primary assets), and all VPAID creatives. BACKUP_IMAGE applies to FLASH_INPAGE, HTML5_BANNER, all RICH_MEDIA, and all VPAID creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. ADDITIONAL_IMAGE and ADDITIONAL_FLASH apply to FLASH_INPAGE creatives. OTHER refers to assets from sources other than Campaign Manager, such as Studio uploaded assets, applicable to all RICH_MEDIA and all VPAID creatives. PARENT_VIDEO refers to videos uploaded by the user in Campaign Manager and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. TRANSCODED_VIDEO refers to videos transcoded by Campaign Manager from PARENT_VIDEO assets and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. ALTERNATE_VIDEO refers to the Campaign Manager representation of child asset videos from Studio, and is applicable to VPAID_LINEAR_VIDEO creatives. These cannot be added or removed within Campaign Manager. For VPAID_LINEAR_VIDEO creatives, PARENT_VIDEO, TRANSCODED_VIDEO and ALTERNATE_VIDEO assets that are marked active serve as backup in case the VPAID creative cannot be served. Only PARENT_VIDEO assets can be added or removed for an INSTREAM_VIDEO or VPAID_LINEAR_VIDEO creative. PARENT_AUDIO refers to audios uploaded by the user in Campaign Manager and is applicable to INSTREAM_AUDIO creatives. TRANSCODED_AUDIO refers to audios transcoded by Campaign Manager from PARENT_AUDIO assets and is applicable to INSTREAM_AUDIO creatives. */
		role?: CreativeAssetRole | null;

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		size?: Size;

		/** Whether the asset is SSL-compliant. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
		sslCompliant?: boolean | null;

		/** Initial wait time type before making the asset visible. Applicable to the following creative types: all RICH_MEDIA. */
		startTimeType?: CreativeAssetStartTimeType | null;

		/** Streaming URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
		streamingServingUrl?: string | null;

		/** Whether the asset is transparent. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable to HTML5 assets. */
		transparency?: boolean | null;

		/** Whether the asset is vertically locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
		verticallyLocked?: boolean | null;

		/** Window mode options for flash assets. Applicable to the following creative types: FLASH_INPAGE, RICH_MEDIA_DISPLAY_EXPANDING, RICH_MEDIA_IM_EXPAND, RICH_MEDIA_DISPLAY_BANNER, and RICH_MEDIA_INPAGE_FLOATING. */
		windowMode?: CreativeAssetWindowMode | null;

		/** zIndex value of an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable to assets whose displayType is NOT one of the following types: ASSET_DISPLAY_TYPE_INPAGE or ASSET_DISPLAY_TYPE_OVERLAY. Acceptable values are -999999999 to 999999999, inclusive. */
		zIndex?: number | null;

		/** File name of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER. */
		zipFilename?: string | null;

		/** Size of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER. */
		zipFilesize?: string | null;
	}

	/** Creative Asset. */
	export interface CreativeAssetFormProperties {

		/** Whether ActionScript3 is enabled for the flash asset. This is a read-only field. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		actionScript3: FormControl<boolean | null | undefined>,

		/** Whether the video or audio asset is active. This is a read-only field for VPAID_NON_LINEAR_VIDEO assets. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		active: FormControl<boolean | null | undefined>,

		/** Possible alignments for an asset. This is a read-only field. Applicable to the following creative types: RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL . */
		alignment: FormControl<CreativeAssetAlignment | null | undefined>,

		/** Artwork type of rich media creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
		artworkType: FormControl<CreativeArtworkType | null | undefined>,

		/** Audio stream bit rate in kbps. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		audioBitRate: FormControl<number | null | undefined>,

		/** Audio sample bit rate in hertz. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		audioSampleRate: FormControl<number | null | undefined>,

		/** Detected bit-rate for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		bitRate: FormControl<number | null | undefined>,

		/** Rich media child asset type. This is a read-only field. Applicable to the following creative types: all VPAID. */
		childAssetType: FormControl<CreativeAssetChildAssetType | null | undefined>,

		/** Custom start time in seconds for making the asset visible. Applicable to the following creative types: all RICH_MEDIA. Value must be greater than or equal to 0. */
		customStartTimeValue: FormControl<number | null | undefined>,

		/** Type of rich media asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
		displayType: FormControl<CreativeAssetDisplayType | null | undefined>,

		/** Duration in seconds for which an asset will be displayed. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID_LINEAR_VIDEO. Value must be greater than or equal to 1. */
		duration: FormControl<number | null | undefined>,

		/** Duration type for which an asset will be displayed. Applicable to the following creative types: all RICH_MEDIA. */
		durationType: FormControl<CreativeAssetDurationType | null | undefined>,

		/** File size associated with this creative asset. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
		fileSize: FormControl<string | null | undefined>,

		/** Flash version of the asset. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. */
		flashVersion: FormControl<number | null | undefined>,

		/** Video frame rate for video asset in frames per second. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
		frameRate: FormControl<number | null | undefined>,

		/** Whether to hide Flash objects flag for an asset. Applicable to the following creative types: all RICH_MEDIA. */
		hideFlashObjects: FormControl<boolean | null | undefined>,

		/** Whether to hide selection boxes flag for an asset. Applicable to the following creative types: all RICH_MEDIA. */
		hideSelectionBoxes: FormControl<boolean | null | undefined>,

		/** Whether the asset is horizontally locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
		horizontallyLocked: FormControl<boolean | null | undefined>,

		/** Numeric ID of this creative asset. This is a required field and should not be modified. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
		id: FormControl<string | null | undefined>,

		/** Detected duration for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		mediaDuration: FormControl<number | null | undefined>,

		/** Detected MIME type for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID. */
		mimeType: FormControl<string | null | undefined>,

		/** Orientation of video asset. This is a read-only, auto-generated field. */
		orientation: FormControl<CreativeAssetOrientation | null | undefined>,

		/** Whether the backup asset is original or changed by the user in Campaign Manager. Applicable to the following creative types: all RICH_MEDIA. */
		originalBackup: FormControl<boolean | null | undefined>,

		/** Whether this asset is used as a polite load asset. */
		politeLoad: FormControl<boolean | null | undefined>,

		/** Offset left unit for an asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
		positionLeftUnit: FormControl<CreativeAssetPositionLeftUnit | null | undefined>,

		/** Offset top unit for an asset. This is a read-only field if the asset displayType is ASSET_DISPLAY_TYPE_OVERLAY. Applicable to the following creative types: all RICH_MEDIA. */
		positionTopUnit: FormControl<CreativeAssetPositionLeftUnit | null | undefined>,

		/** Progressive URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
		progressiveServingUrl: FormControl<string | null | undefined>,

		/** Whether the asset pushes down other content. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable when the asset offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height. */
		pushdown: FormControl<boolean | null | undefined>,

		/** Pushdown duration in seconds for an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable when the asset pushdown field is true, the offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height. Acceptable values are 0 to 9.99, inclusive. */
		pushdownDuration: FormControl<number | null | undefined>,

		/** Role of the asset in relation to creative. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. This is a required field. PRIMARY applies to DISPLAY, FLASH_INPAGE, HTML5_BANNER, IMAGE, DISPLAY_IMAGE_GALLERY, all RICH_MEDIA (which may contain multiple primary assets), and all VPAID creatives. BACKUP_IMAGE applies to FLASH_INPAGE, HTML5_BANNER, all RICH_MEDIA, and all VPAID creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. ADDITIONAL_IMAGE and ADDITIONAL_FLASH apply to FLASH_INPAGE creatives. OTHER refers to assets from sources other than Campaign Manager, such as Studio uploaded assets, applicable to all RICH_MEDIA and all VPAID creatives. PARENT_VIDEO refers to videos uploaded by the user in Campaign Manager and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. TRANSCODED_VIDEO refers to videos transcoded by Campaign Manager from PARENT_VIDEO assets and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. ALTERNATE_VIDEO refers to the Campaign Manager representation of child asset videos from Studio, and is applicable to VPAID_LINEAR_VIDEO creatives. These cannot be added or removed within Campaign Manager. For VPAID_LINEAR_VIDEO creatives, PARENT_VIDEO, TRANSCODED_VIDEO and ALTERNATE_VIDEO assets that are marked active serve as backup in case the VPAID creative cannot be served. Only PARENT_VIDEO assets can be added or removed for an INSTREAM_VIDEO or VPAID_LINEAR_VIDEO creative. PARENT_AUDIO refers to audios uploaded by the user in Campaign Manager and is applicable to INSTREAM_AUDIO creatives. TRANSCODED_AUDIO refers to audios transcoded by Campaign Manager from PARENT_AUDIO assets and is applicable to INSTREAM_AUDIO creatives. */
		role: FormControl<CreativeAssetRole | null | undefined>,

		/** Whether the asset is SSL-compliant. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. */
		sslCompliant: FormControl<boolean | null | undefined>,

		/** Initial wait time type before making the asset visible. Applicable to the following creative types: all RICH_MEDIA. */
		startTimeType: FormControl<CreativeAssetStartTimeType | null | undefined>,

		/** Streaming URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID. */
		streamingServingUrl: FormControl<string | null | undefined>,

		/** Whether the asset is transparent. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable to HTML5 assets. */
		transparency: FormControl<boolean | null | undefined>,

		/** Whether the asset is vertically locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA. */
		verticallyLocked: FormControl<boolean | null | undefined>,

		/** Window mode options for flash assets. Applicable to the following creative types: FLASH_INPAGE, RICH_MEDIA_DISPLAY_EXPANDING, RICH_MEDIA_IM_EXPAND, RICH_MEDIA_DISPLAY_BANNER, and RICH_MEDIA_INPAGE_FLOATING. */
		windowMode: FormControl<CreativeAssetWindowMode | null | undefined>,

		/** zIndex value of an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable to assets whose displayType is NOT one of the following types: ASSET_DISPLAY_TYPE_INPAGE or ASSET_DISPLAY_TYPE_OVERLAY. Acceptable values are -999999999 to 999999999, inclusive. */
		zIndex: FormControl<number | null | undefined>,

		/** File name of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER. */
		zipFilename: FormControl<string | null | undefined>,

		/** Size of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER. */
		zipFilesize: FormControl<string | null | undefined>,
	}
	export function CreateCreativeAssetFormGroup() {
		return new FormGroup<CreativeAssetFormProperties>({
			actionScript3: new FormControl<boolean | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			alignment: new FormControl<CreativeAssetAlignment | null | undefined>(undefined),
			artworkType: new FormControl<CreativeArtworkType | null | undefined>(undefined),
			audioBitRate: new FormControl<number | null | undefined>(undefined),
			audioSampleRate: new FormControl<number | null | undefined>(undefined),
			bitRate: new FormControl<number | null | undefined>(undefined),
			childAssetType: new FormControl<CreativeAssetChildAssetType | null | undefined>(undefined),
			customStartTimeValue: new FormControl<number | null | undefined>(undefined),
			displayType: new FormControl<CreativeAssetDisplayType | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			durationType: new FormControl<CreativeAssetDurationType | null | undefined>(undefined),
			fileSize: new FormControl<string | null | undefined>(undefined),
			flashVersion: new FormControl<number | null | undefined>(undefined),
			frameRate: new FormControl<number | null | undefined>(undefined),
			hideFlashObjects: new FormControl<boolean | null | undefined>(undefined),
			hideSelectionBoxes: new FormControl<boolean | null | undefined>(undefined),
			horizontallyLocked: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			mediaDuration: new FormControl<number | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			orientation: new FormControl<CreativeAssetOrientation | null | undefined>(undefined),
			originalBackup: new FormControl<boolean | null | undefined>(undefined),
			politeLoad: new FormControl<boolean | null | undefined>(undefined),
			positionLeftUnit: new FormControl<CreativeAssetPositionLeftUnit | null | undefined>(undefined),
			positionTopUnit: new FormControl<CreativeAssetPositionLeftUnit | null | undefined>(undefined),
			progressiveServingUrl: new FormControl<string | null | undefined>(undefined),
			pushdown: new FormControl<boolean | null | undefined>(undefined),
			pushdownDuration: new FormControl<number | null | undefined>(undefined),
			role: new FormControl<CreativeAssetRole | null | undefined>(undefined),
			sslCompliant: new FormControl<boolean | null | undefined>(undefined),
			startTimeType: new FormControl<CreativeAssetStartTimeType | null | undefined>(undefined),
			streamingServingUrl: new FormControl<string | null | undefined>(undefined),
			transparency: new FormControl<boolean | null | undefined>(undefined),
			verticallyLocked: new FormControl<boolean | null | undefined>(undefined),
			windowMode: new FormControl<CreativeAssetWindowMode | null | undefined>(undefined),
			zIndex: new FormControl<number | null | undefined>(undefined),
			zipFilename: new FormControl<string | null | undefined>(undefined),
			zipFilesize: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreativeAssetAlignment { ALIGNMENT_TOP = 0, ALIGNMENT_RIGHT = 1, ALIGNMENT_BOTTOM = 2, ALIGNMENT_LEFT = 3 }


	/** Creative Asset ID. */
	export interface CreativeAssetId {

		/** Name of the creative asset. This is a required field while inserting an asset. After insertion, this assetIdentifier is used to identify the uploaded asset. Characters in the name must be alphanumeric or one of the following: ".-_ ". Spaces are allowed. */
		name?: string | null;

		/** Type of asset to upload. This is a required field. FLASH and IMAGE are no longer supported for new uploads. All image assets should use HTML_IMAGE. */
		type?: CreativeAssetIdType | null;
	}

	/** Creative Asset ID. */
	export interface CreativeAssetIdFormProperties {

		/** Name of the creative asset. This is a required field while inserting an asset. After insertion, this assetIdentifier is used to identify the uploaded asset. Characters in the name must be alphanumeric or one of the following: ".-_ ". Spaces are allowed. */
		name: FormControl<string | null | undefined>,

		/** Type of asset to upload. This is a required field. FLASH and IMAGE are no longer supported for new uploads. All image assets should use HTML_IMAGE. */
		type: FormControl<CreativeAssetIdType | null | undefined>,
	}
	export function CreateCreativeAssetIdFormGroup() {
		return new FormGroup<CreativeAssetIdFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CreativeAssetIdType | null | undefined>(undefined),
		});

	}

	export enum CreativeAssetIdType { IMAGE = 0, FLASH = 1, VIDEO = 2, HTML = 3, HTML_IMAGE = 4, AUDIO = 5 }

	export enum CreativeAssetChildAssetType { CHILD_ASSET_TYPE_FLASH = 0, CHILD_ASSET_TYPE_VIDEO = 1, CHILD_ASSET_TYPE_IMAGE = 2, CHILD_ASSET_TYPE_DATA = 3 }

	export enum CreativeAssetDisplayType { ASSET_DISPLAY_TYPE_INPAGE = 0, ASSET_DISPLAY_TYPE_FLOATING = 1, ASSET_DISPLAY_TYPE_OVERLAY = 2, ASSET_DISPLAY_TYPE_EXPANDING = 3, ASSET_DISPLAY_TYPE_FLASH_IN_FLASH = 4, ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING = 5, ASSET_DISPLAY_TYPE_PEEL_DOWN = 6, ASSET_DISPLAY_TYPE_VPAID_LINEAR = 7, ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR = 8, ASSET_DISPLAY_TYPE_BACKDROP = 9 }

	export enum CreativeAssetDurationType { ASSET_DURATION_TYPE_AUTO = 0, ASSET_DURATION_TYPE_NONE = 1, ASSET_DURATION_TYPE_CUSTOM = 2 }

	export enum CreativeAssetOrientation { LANDSCAPE = 0, PORTRAIT = 1, SQUARE = 2 }

	export enum CreativeAssetPositionLeftUnit { OFFSET_UNIT_PIXEL = 0, OFFSET_UNIT_PERCENT = 1, OFFSET_UNIT_PIXEL_FROM_CENTER = 2 }

	export enum CreativeAssetRole { PRIMARY = 0, BACKUP_IMAGE = 1, ADDITIONAL_IMAGE = 2, ADDITIONAL_FLASH = 3, PARENT_VIDEO = 4, TRANSCODED_VIDEO = 5, OTHER = 6, ALTERNATE_VIDEO = 7, PARENT_AUDIO = 8, TRANSCODED_AUDIO = 9 }

	export enum CreativeAssetStartTimeType { ASSET_START_TIME_TYPE_NONE = 0, ASSET_START_TIME_TYPE_CUSTOM = 1 }

	export enum CreativeAssetWindowMode { OPAQUE = 0, WINDOW = 1, TRANSPARENT = 2 }


	/** Creative Field Assignment. */
	export interface CreativeFieldAssignment {

		/** ID of the creative field. */
		creativeFieldId?: string | null;

		/** ID of the creative field value. */
		creativeFieldValueId?: string | null;
	}

	/** Creative Field Assignment. */
	export interface CreativeFieldAssignmentFormProperties {

		/** ID of the creative field. */
		creativeFieldId: FormControl<string | null | undefined>,

		/** ID of the creative field value. */
		creativeFieldValueId: FormControl<string | null | undefined>,
	}
	export function CreateCreativeFieldAssignmentFormGroup() {
		return new FormGroup<CreativeFieldAssignmentFormProperties>({
			creativeFieldId: new FormControl<string | null | undefined>(undefined),
			creativeFieldValueId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** FsCommand. */
	export interface FsCommand {

		/** Distance from the left of the browser.Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER. */
		left?: number | null;

		/** Position in the browser where the window will open. */
		positionOption?: FsCommandPositionOption | null;

		/** Distance from the top of the browser. Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER. */
		top?: number | null;

		/** Height of the window. */
		windowHeight?: number | null;

		/** Width of the window. */
		windowWidth?: number | null;
	}

	/** FsCommand. */
	export interface FsCommandFormProperties {

		/** Distance from the left of the browser.Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER. */
		left: FormControl<number | null | undefined>,

		/** Position in the browser where the window will open. */
		positionOption: FormControl<FsCommandPositionOption | null | undefined>,

		/** Distance from the top of the browser. Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER. */
		top: FormControl<number | null | undefined>,

		/** Height of the window. */
		windowHeight: FormControl<number | null | undefined>,

		/** Width of the window. */
		windowWidth: FormControl<number | null | undefined>,
	}
	export function CreateFsCommandFormGroup() {
		return new FormGroup<FsCommandFormProperties>({
			left: new FormControl<number | null | undefined>(undefined),
			positionOption: new FormControl<FsCommandPositionOption | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
			windowHeight: new FormControl<number | null | undefined>(undefined),
			windowWidth: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FsCommandPositionOption { CENTERED = 0, DISTANCE_FROM_TOP_LEFT_CORNER = 1 }


	/** Online Behavioral Advertiser icon. */
	export interface ObaIcon {

		/** URL to redirect to when an OBA icon is clicked. */
		iconClickThroughUrl?: string | null;

		/** URL to track click when an OBA icon is clicked. */
		iconClickTrackingUrl?: string | null;

		/** URL to track view when an OBA icon is clicked. */
		iconViewTrackingUrl?: string | null;

		/** Identifies the industry initiative that the icon supports. For example, AdChoices. */
		program?: string | null;

		/** OBA icon resource URL. Campaign Manager only supports image and JavaScript icons. Learn more */
		resourceUrl?: string | null;

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		size?: Size;

		/** OBA icon x coordinate position. Accepted values are left or right. */
		xPosition?: string | null;

		/** OBA icon y coordinate position. Accepted values are top or bottom. */
		yPosition?: string | null;
	}

	/** Online Behavioral Advertiser icon. */
	export interface ObaIconFormProperties {

		/** URL to redirect to when an OBA icon is clicked. */
		iconClickThroughUrl: FormControl<string | null | undefined>,

		/** URL to track click when an OBA icon is clicked. */
		iconClickTrackingUrl: FormControl<string | null | undefined>,

		/** URL to track view when an OBA icon is clicked. */
		iconViewTrackingUrl: FormControl<string | null | undefined>,

		/** Identifies the industry initiative that the icon supports. For example, AdChoices. */
		program: FormControl<string | null | undefined>,

		/** OBA icon resource URL. Campaign Manager only supports image and JavaScript icons. Learn more */
		resourceUrl: FormControl<string | null | undefined>,

		/** OBA icon x coordinate position. Accepted values are left or right. */
		xPosition: FormControl<string | null | undefined>,

		/** OBA icon y coordinate position. Accepted values are top or bottom. */
		yPosition: FormControl<string | null | undefined>,
	}
	export function CreateObaIconFormGroup() {
		return new FormGroup<ObaIconFormProperties>({
			iconClickThroughUrl: new FormControl<string | null | undefined>(undefined),
			iconClickTrackingUrl: new FormControl<string | null | undefined>(undefined),
			iconViewTrackingUrl: new FormControl<string | null | undefined>(undefined),
			program: new FormControl<string | null | undefined>(undefined),
			resourceUrl: new FormControl<string | null | undefined>(undefined),
			xPosition: new FormControl<string | null | undefined>(undefined),
			yPosition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Video Offset */
	export interface VideoOffset {

		/** Duration, as a percentage of video duration. Do not set when offsetSeconds is set. Acceptable values are 0 to 100, inclusive. */
		offsetPercentage?: number | null;

		/** Duration, in seconds. Do not set when offsetPercentage is set. Acceptable values are 0 to 86399, inclusive. */
		offsetSeconds?: number | null;
	}

	/** Video Offset */
	export interface VideoOffsetFormProperties {

		/** Duration, as a percentage of video duration. Do not set when offsetSeconds is set. Acceptable values are 0 to 100, inclusive. */
		offsetPercentage: FormControl<number | null | undefined>,

		/** Duration, in seconds. Do not set when offsetPercentage is set. Acceptable values are 0 to 86399, inclusive. */
		offsetSeconds: FormControl<number | null | undefined>,
	}
	export function CreateVideoOffsetFormGroup() {
		return new FormGroup<VideoOffsetFormProperties>({
			offsetPercentage: new FormControl<number | null | undefined>(undefined),
			offsetSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Third-party Tracking URL. */
	export interface ThirdPartyTrackingUrl {

		/** Third-party URL type for in-stream video and in-stream audio creatives. */
		thirdPartyUrlType?: ThirdPartyTrackingUrlThirdPartyUrlType | null;

		/** URL for the specified third-party URL type. */
		url?: string | null;
	}

	/** Third-party Tracking URL. */
	export interface ThirdPartyTrackingUrlFormProperties {

		/** Third-party URL type for in-stream video and in-stream audio creatives. */
		thirdPartyUrlType: FormControl<ThirdPartyTrackingUrlThirdPartyUrlType | null | undefined>,

		/** URL for the specified third-party URL type. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateThirdPartyTrackingUrlFormGroup() {
		return new FormGroup<ThirdPartyTrackingUrlFormProperties>({
			thirdPartyUrlType: new FormControl<ThirdPartyTrackingUrlThirdPartyUrlType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ThirdPartyTrackingUrlThirdPartyUrlType { IMPRESSION = 0, CLICK_TRACKING = 1, VIDEO_START = 2, VIDEO_FIRST_QUARTILE = 3, VIDEO_MIDPOINT = 4, VIDEO_THIRD_QUARTILE = 5, VIDEO_COMPLETE = 6, VIDEO_MUTE = 7, VIDEO_PAUSE = 8, VIDEO_REWIND = 9, VIDEO_FULLSCREEN = 10, VIDEO_STOP = 11, VIDEO_CUSTOM = 12, SURVEY = 13, RICH_MEDIA_IMPRESSION = 14, RICH_MEDIA_RM_IMPRESSION = 15, RICH_MEDIA_BACKUP_IMPRESSION = 16, VIDEO_SKIP = 17, VIDEO_PROGRESS = 18 }

	export enum CreativeType { IMAGE = 0, DISPLAY_REDIRECT = 1, CUSTOM_DISPLAY = 2, INTERNAL_REDIRECT = 3, CUSTOM_DISPLAY_INTERSTITIAL = 4, INTERSTITIAL_INTERNAL_REDIRECT = 5, TRACKING_TEXT = 6, RICH_MEDIA_DISPLAY_BANNER = 7, RICH_MEDIA_INPAGE_FLOATING = 8, RICH_MEDIA_IM_EXPAND = 9, RICH_MEDIA_DISPLAY_EXPANDING = 10, RICH_MEDIA_DISPLAY_INTERSTITIAL = 11, RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL = 12, RICH_MEDIA_MOBILE_IN_APP = 13, FLASH_INPAGE = 14, INSTREAM_VIDEO = 15, VPAID_LINEAR_VIDEO = 16, VPAID_NON_LINEAR_VIDEO = 17, INSTREAM_VIDEO_REDIRECT = 18, RICH_MEDIA_PEEL_DOWN = 19, HTML5_BANNER = 20, DISPLAY = 21, DISPLAY_IMAGE_GALLERY = 22, BRAND_SAFE_DEFAULT_INSTREAM_VIDEO = 23, INSTREAM_AUDIO = 24 }


	/** A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID. */
	export interface UniversalAdId {

		/** Registry used for the Ad ID value. */
		registry?: UniversalAdIdRegistry | null;

		/** ID value for this creative. Only alphanumeric characters and the following symbols are valid: "_/\-". Maximum length is 64 characters. Read only when registry is DCM. */
		value?: string | null;
	}

	/** A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID. */
	export interface UniversalAdIdFormProperties {

		/** Registry used for the Ad ID value. */
		registry: FormControl<UniversalAdIdRegistry | null | undefined>,

		/** ID value for this creative. Only alphanumeric characters and the following symbols are valid: "_/\-". Maximum length is 64 characters. Read only when registry is DCM. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUniversalAdIdFormGroup() {
		return new FormGroup<UniversalAdIdFormProperties>({
			registry: new FormControl<UniversalAdIdRegistry | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UniversalAdIdRegistry { OTHER = 0, AD_ID_OFFICIAL = 1, CLEARCAST = 2, DCM = 3 }


	/** CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer to the creative sample code for how to upload assets and insert a creative. */
	export interface CreativeAssetMetadata {

		/** Creative Asset ID. */
		assetIdentifier?: CreativeAssetId;

		/** List of detected click tags for assets. This is a read-only, auto-generated field. This field is empty for a rich media asset. */
		clickTags?: Array<ClickTag>;

		/** List of counter events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset. */
		counterCustomEvents?: Array<CreativeCustomEvent>;

		/** List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field. */
		detectedFeatures?: Array<string>;

		/** List of exit events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset. */
		exitCustomEvents?: Array<CreativeCustomEvent>;

		/** Numeric ID of the asset. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeAssetMetadata". */
		kind?: string | null;

		/** True if the uploaded asset is a rich media asset. This is a read-only, auto-generated field. */
		richMedia?: boolean | null;

		/** List of timer events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset. */
		timerCustomEvents?: Array<CreativeCustomEvent>;

		/** Rules validated during code generation that generated a warning. This is a read-only, auto-generated field. Possible values are: - "ADMOB_REFERENCED" - "ASSET_FORMAT_UNSUPPORTED_DCM" - "ASSET_INVALID" - "CLICK_TAG_HARD_CODED" - "CLICK_TAG_INVALID" - "CLICK_TAG_IN_GWD" - "CLICK_TAG_MISSING" - "CLICK_TAG_MORE_THAN_ONE" - "CLICK_TAG_NON_TOP_LEVEL" - "COMPONENT_UNSUPPORTED_DCM" - "ENABLER_UNSUPPORTED_METHOD_DCM" - "EXTERNAL_FILE_REFERENCED" - "FILE_DETAIL_EMPTY" - "FILE_TYPE_INVALID" - "GWD_PROPERTIES_INVALID" - "HTML5_FEATURE_UNSUPPORTED" - "LINKED_FILE_NOT_FOUND" - "MAX_FLASH_VERSION_11" - "MRAID_REFERENCED" - "NOT_SSL_COMPLIANT" - "ORPHANED_ASSET" - "PRIMARY_HTML_MISSING" - "SVG_INVALID" - "ZIP_INVALID" */
		warnedValidationRules?: Array<string>;
	}

	/** CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer to the creative sample code for how to upload assets and insert a creative. */
	export interface CreativeAssetMetadataFormProperties {

		/** Numeric ID of the asset. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeAssetMetadata". */
		kind: FormControl<string | null | undefined>,

		/** True if the uploaded asset is a rich media asset. This is a read-only, auto-generated field. */
		richMedia: FormControl<boolean | null | undefined>,
	}
	export function CreateCreativeAssetMetadataFormGroup() {
		return new FormGroup<CreativeAssetMetadataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			richMedia: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains properties of a creative field. */
	export interface CreativeField {

		/** Account ID of this creative field. This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** Advertiser ID of this creative field. This is a required field on insertion. */
		advertiserId?: string | null;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** ID of this creative field. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeField". */
		kind?: string | null;

		/** Name of this creative field. This is a required field and must be less than 256 characters long and unique among creative fields of the same advertiser. */
		name?: string | null;

		/** Subaccount ID of this creative field. This is a read-only field that can be left blank. */
		subaccountId?: string | null;
	}

	/** Contains properties of a creative field. */
	export interface CreativeFieldFormProperties {

		/** Account ID of this creative field. This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** Advertiser ID of this creative field. This is a required field on insertion. */
		advertiserId: FormControl<string | null | undefined>,

		/** ID of this creative field. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeField". */
		kind: FormControl<string | null | undefined>,

		/** Name of this creative field. This is a required field and must be less than 256 characters long and unique among creative fields of the same advertiser. */
		name: FormControl<string | null | undefined>,

		/** Subaccount ID of this creative field. This is a read-only field that can be left blank. */
		subaccountId: FormControl<string | null | undefined>,
	}
	export function CreateCreativeFieldFormGroup() {
		return new FormGroup<CreativeFieldFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a creative field value. */
	export interface CreativeFieldValue {

		/** ID of this creative field value. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValue". */
		kind?: string | null;

		/** Value of this creative field value. It needs to be less than 256 characters in length and unique per creative field. */
		value?: string | null;
	}

	/** Contains properties of a creative field value. */
	export interface CreativeFieldValueFormProperties {

		/** ID of this creative field value. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValue". */
		kind: FormControl<string | null | undefined>,

		/** Value of this creative field value. It needs to be less than 256 characters in length and unique per creative field. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCreativeFieldValueFormGroup() {
		return new FormGroup<CreativeFieldValueFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creative Field Value List Response */
	export interface CreativeFieldValuesListResponse {

		/** Creative field value collection. */
		creativeFieldValues?: Array<CreativeFieldValue>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValuesListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Creative Field Value List Response */
	export interface CreativeFieldValuesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValuesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateCreativeFieldValuesListResponseFormGroup() {
		return new FormGroup<CreativeFieldValuesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creative Field List Response */
	export interface CreativeFieldsListResponse {

		/** Creative field collection. */
		creativeFields?: Array<CreativeField>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldsListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Creative Field List Response */
	export interface CreativeFieldsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateCreativeFieldsListResponseFormGroup() {
		return new FormGroup<CreativeFieldsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a creative group. */
	export interface CreativeGroup {

		/** Account ID of this creative group. This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** Advertiser ID of this creative group. This is a required field on insertion. */
		advertiserId?: string | null;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Subgroup of the creative group. Assign your creative groups to a subgroup in order to filter or manage them more easily. This field is required on insertion and is read-only after insertion. Acceptable values are 1 to 2, inclusive. */
		groupNumber?: number | null;

		/** ID of this creative group. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroup". */
		kind?: string | null;

		/** Name of this creative group. This is a required field and must be less than 256 characters long and unique among creative groups of the same advertiser. */
		name?: string | null;

		/** Subaccount ID of this creative group. This is a read-only field that can be left blank. */
		subaccountId?: string | null;
	}

	/** Contains properties of a creative group. */
	export interface CreativeGroupFormProperties {

		/** Account ID of this creative group. This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** Advertiser ID of this creative group. This is a required field on insertion. */
		advertiserId: FormControl<string | null | undefined>,

		/** Subgroup of the creative group. Assign your creative groups to a subgroup in order to filter or manage them more easily. This field is required on insertion and is read-only after insertion. Acceptable values are 1 to 2, inclusive. */
		groupNumber: FormControl<number | null | undefined>,

		/** ID of this creative group. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroup". */
		kind: FormControl<string | null | undefined>,

		/** Name of this creative group. This is a required field and must be less than 256 characters long and unique among creative groups of the same advertiser. */
		name: FormControl<string | null | undefined>,

		/** Subaccount ID of this creative group. This is a read-only field that can be left blank. */
		subaccountId: FormControl<string | null | undefined>,
	}
	export function CreateCreativeGroupFormGroup() {
		return new FormGroup<CreativeGroupFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			groupNumber: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creative Group List Response */
	export interface CreativeGroupsListResponse {

		/** Creative group collection. */
		creativeGroups?: Array<CreativeGroup>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroupsListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Creative Group List Response */
	export interface CreativeGroupsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroupsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateCreativeGroupsListResponseFormGroup() {
		return new FormGroup<CreativeGroupsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creative List Response */
	export interface CreativesListResponse {

		/** Creative collection. */
		creatives?: Array<Creative>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativesListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Creative List Response */
	export interface CreativesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateCreativesListResponseFormGroup() {
		return new FormGroup<CreativesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Custom Rich Media Events group. */
	export interface CustomRichMediaEvents {

		/** List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName. */
		filteredEventIds?: Array<DimensionValue>;

		/** The kind of resource this is, in this case dfareporting#customRichMediaEvents. */
		kind?: string | null;
	}

	/** Represents a Custom Rich Media Events group. */
	export interface CustomRichMediaEventsFormProperties {

		/** The kind of resource this is, in this case dfareporting#customRichMediaEvents. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateCustomRichMediaEventsFormGroup() {
		return new FormGroup<CustomRichMediaEventsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Custom Viewability Metric */
	export interface CustomViewabilityMetric {

		/** The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric. */
		configuration?: CustomViewabilityMetricConfiguration;

		/** ID of the custom viewability metric. */
		id?: string | null;

		/** Name of the custom viewability metric. */
		name?: string | null;
	}

	/** Custom Viewability Metric */
	export interface CustomViewabilityMetricFormProperties {

		/** ID of the custom viewability metric. */
		id: FormControl<string | null | undefined>,

		/** Name of the custom viewability metric. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomViewabilityMetricFormGroup() {
		return new FormGroup<CustomViewabilityMetricFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric. */
	export interface CustomViewabilityMetricConfiguration {

		/** Whether the video must be audible to count an impression. */
		audible?: boolean | null;

		/** The time in milliseconds the video must play for the Custom Viewability Metric to count an impression. If both this and timePercent are specified, the earlier of the two will be used. */
		timeMillis?: number | null;

		/** The percentage of video that must play for the Custom Viewability Metric to count an impression. If both this and timeMillis are specified, the earlier of the two will be used. */
		timePercent?: number | null;

		/** The percentage of video that must be on screen for the Custom Viewability Metric to count an impression. */
		viewabilityPercent?: number | null;
	}

	/** The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric. */
	export interface CustomViewabilityMetricConfigurationFormProperties {

		/** Whether the video must be audible to count an impression. */
		audible: FormControl<boolean | null | undefined>,

		/** The time in milliseconds the video must play for the Custom Viewability Metric to count an impression. If both this and timePercent are specified, the earlier of the two will be used. */
		timeMillis: FormControl<number | null | undefined>,

		/** The percentage of video that must play for the Custom Viewability Metric to count an impression. If both this and timeMillis are specified, the earlier of the two will be used. */
		timePercent: FormControl<number | null | undefined>,

		/** The percentage of video that must be on screen for the Custom Viewability Metric to count an impression. */
		viewabilityPercent: FormControl<number | null | undefined>,
	}
	export function CreateCustomViewabilityMetricConfigurationFormGroup() {
		return new FormGroup<CustomViewabilityMetricConfigurationFormProperties>({
			audible: new FormControl<boolean | null | undefined>(undefined),
			timeMillis: new FormControl<number | null | undefined>(undefined),
			timePercent: new FormControl<number | null | undefined>(undefined),
			viewabilityPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a date range. */
	export interface DateRange {
		endDate?: Date | null;

		/** The kind of resource this is, in this case dfareporting#dateRange. */
		kind?: string | null;

		/** The date range relative to the date of when the report is run. */
		relativeDateRange?: DateRangeRelativeDateRange | null;
		startDate?: Date | null;
	}

	/** Represents a date range. */
	export interface DateRangeFormProperties {
		endDate: FormControl<Date | null | undefined>,

		/** The kind of resource this is, in this case dfareporting#dateRange. */
		kind: FormControl<string | null | undefined>,

		/** The date range relative to the date of when the report is run. */
		relativeDateRange: FormControl<DateRangeRelativeDateRange | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateDateRangeFormGroup() {
		return new FormGroup<DateRangeFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			relativeDateRange: new FormControl<DateRangeRelativeDateRange | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DateRangeRelativeDateRange { TODAY = 0, YESTERDAY = 1, WEEK_TO_DATE = 2, MONTH_TO_DATE = 3, QUARTER_TO_DATE = 4, YEAR_TO_DATE = 5, PREVIOUS_WEEK = 6, PREVIOUS_MONTH = 7, PREVIOUS_QUARTER = 8, PREVIOUS_YEAR = 9, LAST_7_DAYS = 10, LAST_30_DAYS = 11, LAST_90_DAYS = 12, LAST_365_DAYS = 13, LAST_24_MONTHS = 14, LAST_14_DAYS = 15, LAST_60_DAYS = 16 }


	/** Google Ad Manager Settings */
	export interface DfpSettings {

		/** Ad Manager network code for this directory site. */
		dfpNetworkCode?: string | null;

		/** Ad Manager network name for this directory site. */
		dfpNetworkName?: string | null;

		/** Whether this directory site accepts programmatic placements. */
		programmaticPlacementAccepted?: boolean | null;

		/** Whether this directory site accepts publisher-paid tags. */
		pubPaidPlacementAccepted?: boolean | null;

		/** Whether this directory site is available only via Publisher Portal. */
		publisherPortalOnly?: boolean | null;
	}

	/** Google Ad Manager Settings */
	export interface DfpSettingsFormProperties {

		/** Ad Manager network code for this directory site. */
		dfpNetworkCode: FormControl<string | null | undefined>,

		/** Ad Manager network name for this directory site. */
		dfpNetworkName: FormControl<string | null | undefined>,

		/** Whether this directory site accepts programmatic placements. */
		programmaticPlacementAccepted: FormControl<boolean | null | undefined>,

		/** Whether this directory site accepts publisher-paid tags. */
		pubPaidPlacementAccepted: FormControl<boolean | null | undefined>,

		/** Whether this directory site is available only via Publisher Portal. */
		publisherPortalOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateDfpSettingsFormGroup() {
		return new FormGroup<DfpSettingsFormProperties>({
			dfpNetworkCode: new FormControl<string | null | undefined>(undefined),
			dfpNetworkName: new FormControl<string | null | undefined>(undefined),
			programmaticPlacementAccepted: new FormControl<boolean | null | undefined>(undefined),
			pubPaidPlacementAccepted: new FormControl<boolean | null | undefined>(undefined),
			publisherPortalOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a dimension filter. */
	export interface DimensionFilter {

		/** The name of the dimension to filter. */
		dimensionName?: string | null;

		/** The kind of resource this is, in this case dfareporting#dimensionFilter. */
		kind?: string | null;

		/** The value of the dimension to filter. */
		value?: string | null;
	}

	/** Represents a dimension filter. */
	export interface DimensionFilterFormProperties {

		/** The name of the dimension to filter. */
		dimensionName: FormControl<string | null | undefined>,

		/** The kind of resource this is, in this case dfareporting#dimensionFilter. */
		kind: FormControl<string | null | undefined>,

		/** The value of the dimension to filter. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDimensionFilterFormGroup() {
		return new FormGroup<DimensionFilterFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the list of DimensionValue resources. */
	export interface DimensionValueList {

		/** The eTag of this response for caching purposes. */
		etag?: string | null;

		/** The dimension values returned in this response. */
		items?: Array<DimensionValue>;

		/** The kind of list this is, in this case dfareporting#dimensionValueList. */
		kind?: string | null;

		/** Continuation token used to page through dimension values. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. */
		nextPageToken?: string | null;
	}

	/** Represents the list of DimensionValue resources. */
	export interface DimensionValueListFormProperties {

		/** The eTag of this response for caching purposes. */
		etag: FormControl<string | null | undefined>,

		/** The kind of list this is, in this case dfareporting#dimensionValueList. */
		kind: FormControl<string | null | undefined>,

		/** Continuation token used to page through dimension values. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDimensionValueListFormGroup() {
		return new FormGroup<DimensionValueListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a DimensionValuesRequest. */
	export interface DimensionValueRequest {

		/** The name of the dimension for which values should be requested. */
		dimensionName?: string | null;
		endDate?: Date | null;

		/** The list of filters by which to filter values. The filters are ANDed. */
		filters?: Array<DimensionFilter>;

		/** The kind of request this is, in this case dfareporting#dimensionValueRequest . */
		kind?: string | null;
		startDate?: Date | null;
	}

	/** Represents a DimensionValuesRequest. */
	export interface DimensionValueRequestFormProperties {

		/** The name of the dimension for which values should be requested. */
		dimensionName: FormControl<string | null | undefined>,
		endDate: FormControl<Date | null | undefined>,

		/** The kind of request this is, in this case dfareporting#dimensionValueRequest . */
		kind: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateDimensionValueRequestFormGroup() {
		return new FormGroup<DimensionValueRequestFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement. */
	export interface DirectorySite {

		/** ID of this directory site. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Tag types for regular placements. Acceptable values are: - "STANDARD" - "IFRAME_JAVASCRIPT_INPAGE" - "INTERNAL_REDIRECT_INPAGE" - "JAVASCRIPT_INPAGE" */
		inpageTagFormats?: Array<string>;

		/** Tag types for interstitial placements. Acceptable values are: - "IFRAME_JAVASCRIPT_INTERSTITIAL" - "INTERNAL_REDIRECT_INTERSTITIAL" - "JAVASCRIPT_INTERSTITIAL" */
		interstitialTagFormats?: Array<string>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySite". */
		kind?: string | null;

		/** Name of this directory site. */
		name?: string | null;

		/** Directory Site Settings */
		settings?: DirectorySiteSettings;

		/** URL of this directory site. */
		url?: string | null;
	}

	/** DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement. */
	export interface DirectorySiteFormProperties {

		/** ID of this directory site. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySite". */
		kind: FormControl<string | null | undefined>,

		/** Name of this directory site. */
		name: FormControl<string | null | undefined>,

		/** URL of this directory site. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateDirectorySiteFormGroup() {
		return new FormGroup<DirectorySiteFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Directory Site Settings */
	export interface DirectorySiteSettings {

		/** Whether this directory site has disabled active view creatives. */
		activeViewOptOut?: boolean | null;

		/** Google Ad Manager Settings */
		dfpSettings?: DfpSettings;

		/** Whether this site accepts in-stream video ads. */
		instreamVideoPlacementAccepted?: boolean | null;

		/** Whether this site accepts interstitial ads. */
		interstitialPlacementAccepted?: boolean | null;
	}

	/** Directory Site Settings */
	export interface DirectorySiteSettingsFormProperties {

		/** Whether this directory site has disabled active view creatives. */
		activeViewOptOut: FormControl<boolean | null | undefined>,

		/** Whether this site accepts in-stream video ads. */
		instreamVideoPlacementAccepted: FormControl<boolean | null | undefined>,

		/** Whether this site accepts interstitial ads. */
		interstitialPlacementAccepted: FormControl<boolean | null | undefined>,
	}
	export function CreateDirectorySiteSettingsFormGroup() {
		return new FormGroup<DirectorySiteSettingsFormProperties>({
			activeViewOptOut: new FormControl<boolean | null | undefined>(undefined),
			instreamVideoPlacementAccepted: new FormControl<boolean | null | undefined>(undefined),
			interstitialPlacementAccepted: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Directory Site List Response */
	export interface DirectorySitesListResponse {

		/** Directory site collection. */
		directorySites?: Array<DirectorySite>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySitesListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Directory Site List Response */
	export interface DirectorySitesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySitesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDirectorySitesListResponseFormGroup() {
		return new FormGroup<DirectorySitesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a dynamic targeting key. Dynamic targeting keys are unique, user-friendly labels, created at the advertiser level in DCM, that can be assigned to ads, creatives, and placements and used for targeting with Studio dynamic creatives. Use these labels instead of numeric Campaign Manager IDs (such as placement IDs) to save time and avoid errors in your dynamic feeds. */
	export interface DynamicTargetingKey {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKey". */
		kind?: string | null;

		/** Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase. */
		name?: string | null;

		/** ID of the object of this dynamic targeting key. This is a required field. */
		objectId?: string | null;

		/** Type of the object of this dynamic targeting key. This is a required field. */
		objectType?: DynamicTargetingKeyObjectType | null;
	}

	/** Contains properties of a dynamic targeting key. Dynamic targeting keys are unique, user-friendly labels, created at the advertiser level in DCM, that can be assigned to ads, creatives, and placements and used for targeting with Studio dynamic creatives. Use these labels instead of numeric Campaign Manager IDs (such as placement IDs) to save time and avoid errors in your dynamic feeds. */
	export interface DynamicTargetingKeyFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKey". */
		kind: FormControl<string | null | undefined>,

		/** Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase. */
		name: FormControl<string | null | undefined>,

		/** ID of the object of this dynamic targeting key. This is a required field. */
		objectId: FormControl<string | null | undefined>,

		/** Type of the object of this dynamic targeting key. This is a required field. */
		objectType: FormControl<DynamicTargetingKeyObjectType | null | undefined>,
	}
	export function CreateDynamicTargetingKeyFormGroup() {
		return new FormGroup<DynamicTargetingKeyFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<DynamicTargetingKeyObjectType | null | undefined>(undefined),
		});

	}

	export enum DynamicTargetingKeyObjectType { OBJECT_ADVERTISER = 0, OBJECT_AD = 1, OBJECT_CREATIVE = 2, OBJECT_PLACEMENT = 3 }


	/** Dynamic Targeting Key List Response */
	export interface DynamicTargetingKeysListResponse {

		/** Dynamic targeting key collection. */
		dynamicTargetingKeys?: Array<DynamicTargetingKey>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKeysListResponse". */
		kind?: string | null;
	}

	/** Dynamic Targeting Key List Response */
	export interface DynamicTargetingKeysListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKeysListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDynamicTargetingKeysListResponseFormGroup() {
		return new FormGroup<DynamicTargetingKeysListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of an event tag. */
	export interface EventTag {

		/** Account ID of this event tag. This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** Advertiser ID of this event tag. This field or the campaignId field is required on insertion. */
		advertiserId?: string | null;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Campaign ID of this event tag. This field or the advertiserId field is required on insertion. */
		campaignId?: string | null;

		/** Represents a DimensionValue resource. */
		campaignIdDimensionValue?: DimensionValue;

		/** Whether this event tag should be automatically enabled for all of the advertiser's campaigns and ads. */
		enabledByDefault?: boolean | null;

		/** Whether to remove this event tag from ads that are trafficked through Display & Video 360 to Ad Exchange. This may be useful if the event tag uses a pixel that is unapproved for Ad Exchange bids on one or more networks, such as the Google Display Network. */
		excludeFromAdxRequests?: boolean | null;

		/** ID of this event tag. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTag". */
		kind?: string | null;

		/** Name of this event tag. This is a required field and must be less than 256 characters long. */
		name?: string | null;

		/** Site filter type for this event tag. If no type is specified then the event tag will be applied to all sites. */
		siteFilterType?: EventTagSiteFilterType | null;

		/** Filter list of site IDs associated with this event tag. The siteFilterType determines whether this is a allowlist or blocklist filter. */
		siteIds?: Array<string>;

		/** Whether this tag is SSL-compliant or not. This is a read-only field. */
		sslCompliant?: boolean | null;

		/** Status of this event tag. Must be ENABLED for this event tag to fire. This is a required field. */
		status?: EventTagStatus | null;

		/** Subaccount ID of this event tag. This is a read-only field that can be left blank. */
		subaccountId?: string | null;

		/** Event tag type. Can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking. This is a required field. */
		type?: EventTagType | null;

		/** Payload URL for this event tag. The URL on a click-through event tag should have a landing page URL appended to the end of it. This field is required on insertion. */
		url?: string | null;

		/** Number of times the landing page URL should be URL-escaped before being appended to the click-through event tag URL. Only applies to click-through event tags as specified by the event tag type. */
		urlEscapeLevels?: number | null;
	}

	/** Contains properties of an event tag. */
	export interface EventTagFormProperties {

		/** Account ID of this event tag. This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** Advertiser ID of this event tag. This field or the campaignId field is required on insertion. */
		advertiserId: FormControl<string | null | undefined>,

		/** Campaign ID of this event tag. This field or the advertiserId field is required on insertion. */
		campaignId: FormControl<string | null | undefined>,

		/** Whether this event tag should be automatically enabled for all of the advertiser's campaigns and ads. */
		enabledByDefault: FormControl<boolean | null | undefined>,

		/** Whether to remove this event tag from ads that are trafficked through Display & Video 360 to Ad Exchange. This may be useful if the event tag uses a pixel that is unapproved for Ad Exchange bids on one or more networks, such as the Google Display Network. */
		excludeFromAdxRequests: FormControl<boolean | null | undefined>,

		/** ID of this event tag. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTag". */
		kind: FormControl<string | null | undefined>,

		/** Name of this event tag. This is a required field and must be less than 256 characters long. */
		name: FormControl<string | null | undefined>,

		/** Site filter type for this event tag. If no type is specified then the event tag will be applied to all sites. */
		siteFilterType: FormControl<EventTagSiteFilterType | null | undefined>,

		/** Whether this tag is SSL-compliant or not. This is a read-only field. */
		sslCompliant: FormControl<boolean | null | undefined>,

		/** Status of this event tag. Must be ENABLED for this event tag to fire. This is a required field. */
		status: FormControl<EventTagStatus | null | undefined>,

		/** Subaccount ID of this event tag. This is a read-only field that can be left blank. */
		subaccountId: FormControl<string | null | undefined>,

		/** Event tag type. Can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking. This is a required field. */
		type: FormControl<EventTagType | null | undefined>,

		/** Payload URL for this event tag. The URL on a click-through event tag should have a landing page URL appended to the end of it. This field is required on insertion. */
		url: FormControl<string | null | undefined>,

		/** Number of times the landing page URL should be URL-escaped before being appended to the click-through event tag URL. Only applies to click-through event tags as specified by the event tag type. */
		urlEscapeLevels: FormControl<number | null | undefined>,
	}
	export function CreateEventTagFormGroup() {
		return new FormGroup<EventTagFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			campaignId: new FormControl<string | null | undefined>(undefined),
			enabledByDefault: new FormControl<boolean | null | undefined>(undefined),
			excludeFromAdxRequests: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			siteFilterType: new FormControl<EventTagSiteFilterType | null | undefined>(undefined),
			sslCompliant: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<EventTagStatus | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EventTagType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			urlEscapeLevels: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EventTagSiteFilterType { ALLOWLIST = 0, BLOCKLIST = 1 }

	export enum EventTagStatus { ENABLED = 0, DISABLED = 1 }

	export enum EventTagType { IMPRESSION_IMAGE_EVENT_TAG = 0, IMPRESSION_JAVASCRIPT_EVENT_TAG = 1, CLICK_THROUGH_EVENT_TAG = 2 }


	/** Event Tag List Response */
	export interface EventTagsListResponse {

		/** Event tag collection. */
		eventTags?: Array<EventTag>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTagsListResponse". */
		kind?: string | null;
	}

	/** Event Tag List Response */
	export interface EventTagsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTagsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateEventTagsListResponseFormGroup() {
		return new FormGroup<EventTagsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a File resource. A file contains the metadata for a report run. It shows the status of the run and holds the URLs to the generated report data if the run is finished and the status is "REPORT_AVAILABLE". */
	export interface File {

		/** Represents a date range. */
		dateRange?: DateRange;

		/** Etag of this resource. */
		etag?: string | null;

		/** The filename of the file. */
		fileName?: string | null;

		/** The output format of the report. Only available once the file is available. */
		format?: FileFormat | null;

		/** The unique ID of this report file. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#file". */
		kind?: string | null;

		/** The timestamp in milliseconds since epoch when this file was last modified. */
		lastModifiedTime?: string | null;

		/** The ID of the report this file was generated from. */
		reportId?: string | null;

		/** The status of the report file. */
		status?: FileStatus | null;

		/** The URLs where the completed report file can be downloaded. */
		urls?: FileUrls;
	}

	/** Represents a File resource. A file contains the metadata for a report run. It shows the status of the run and holds the URLs to the generated report data if the run is finished and the status is "REPORT_AVAILABLE". */
	export interface FileFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** The filename of the file. */
		fileName: FormControl<string | null | undefined>,

		/** The output format of the report. Only available once the file is available. */
		format: FormControl<FileFormat | null | undefined>,

		/** The unique ID of this report file. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#file". */
		kind: FormControl<string | null | undefined>,

		/** The timestamp in milliseconds since epoch when this file was last modified. */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** The ID of the report this file was generated from. */
		reportId: FormControl<string | null | undefined>,

		/** The status of the report file. */
		status: FormControl<FileStatus | null | undefined>,
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<FileFormat | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			reportId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<FileStatus | null | undefined>(undefined),
		});

	}

	export enum FileFormat { CSV = 0, EXCEL = 1 }

	export enum FileStatus { PROCESSING = 0, REPORT_AVAILABLE = 1, FAILED = 2, CANCELLED = 3, QUEUED = 4 }

	export interface FileUrls {

		/** The URL for downloading the report data through the API. */
		apiUrl?: string | null;

		/** The URL for downloading the report data through a browser. */
		browserUrl?: string | null;
	}
	export interface FileUrlsFormProperties {

		/** The URL for downloading the report data through the API. */
		apiUrl: FormControl<string | null | undefined>,

		/** The URL for downloading the report data through a browser. */
		browserUrl: FormControl<string | null | undefined>,
	}
	export function CreateFileUrlsFormGroup() {
		return new FormGroup<FileUrlsFormProperties>({
			apiUrl: new FormControl<string | null | undefined>(undefined),
			browserUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of files for a report. */
	export interface FileList {

		/** Etag of this resource. */
		etag?: string | null;

		/** The files returned in this response. */
		items?: Array<File>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#fileList". */
		kind?: string | null;

		/** Continuation token used to page through files. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. */
		nextPageToken?: string | null;
	}

	/** List of files for a report. */
	export interface FileListFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#fileList". */
		kind: FormControl<string | null | undefined>,

		/** Continuation token used to page through files. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateFileListFormGroup() {
		return new FormGroup<FileListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Flight */
	export interface Flight {
		endDate?: Date | null;

		/** Rate or cost of this flight. */
		rateOrCost?: string | null;
		startDate?: Date | null;

		/** Units of this flight. */
		units?: string | null;
	}

	/** Flight */
	export interface FlightFormProperties {
		endDate: FormControl<Date | null | undefined>,

		/** Rate or cost of this flight. */
		rateOrCost: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,

		/** Units of this flight. */
		units: FormControl<string | null | undefined>,
	}
	export function CreateFlightFormGroup() {
		return new FormGroup<FlightFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			rateOrCost: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Floodlight Activity GenerateTag Response */
	export interface FloodlightActivitiesGenerateTagResponse {

		/** Generated tag for this Floodlight activity. For global site tags, this is the event snippet. */
		floodlightActivityTag?: string | null;

		/** The global snippet section of a global site tag. The global site tag sets new cookies on your domain, which will store a unique identifier for a user or the ad click that brought the user to your site. Learn more. */
		globalSiteTagGlobalSnippet?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesGenerateTagResponse". */
		kind?: string | null;
	}

	/** Floodlight Activity GenerateTag Response */
	export interface FloodlightActivitiesGenerateTagResponseFormProperties {

		/** Generated tag for this Floodlight activity. For global site tags, this is the event snippet. */
		floodlightActivityTag: FormControl<string | null | undefined>,

		/** The global snippet section of a global site tag. The global site tag sets new cookies on your domain, which will store a unique identifier for a user or the ad click that brought the user to your site. Learn more. */
		globalSiteTagGlobalSnippet: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesGenerateTagResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateFloodlightActivitiesGenerateTagResponseFormGroup() {
		return new FormGroup<FloodlightActivitiesGenerateTagResponseFormProperties>({
			floodlightActivityTag: new FormControl<string | null | undefined>(undefined),
			globalSiteTagGlobalSnippet: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Floodlight Activity List Response */
	export interface FloodlightActivitiesListResponse {

		/** Floodlight activity collection. */
		floodlightActivities?: Array<FloodlightActivity>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Floodlight Activity List Response */
	export interface FloodlightActivitiesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateFloodlightActivitiesListResponseFormGroup() {
		return new FormGroup<FloodlightActivitiesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a Floodlight activity. */
	export interface FloodlightActivity {

		/** Account ID of this floodlight activity. This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** Advertiser ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's advertiser or the existing activity's advertiser. */
		advertiserId?: string | null;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Whether the activity is enabled for attribution. */
		attributionEnabled?: boolean | null;

		/** Code type used for cache busting in the generated tag. Applicable only when floodlightActivityGroupType is COUNTER and countingMethod is STANDARD_COUNTING or UNIQUE_COUNTING. */
		cacheBustingType?: FloodlightActivityCacheBustingType | null;

		/** Counting method for conversions for this floodlight activity. This is a required field. */
		countingMethod?: FloodlightActivityCountingMethod | null;

		/** Dynamic floodlight tags. */
		defaultTags?: Array<FloodlightActivityDynamicTag>;

		/** URL where this tag will be deployed. If specified, must be less than 256 characters long. */
		expectedUrl?: string | null;

		/** Floodlight activity group ID of this floodlight activity. This is a required field. */
		floodlightActivityGroupId?: string | null;

		/** Name of the associated floodlight activity group. This is a read-only field. */
		floodlightActivityGroupName?: string | null;

		/** Tag string of the associated floodlight activity group. This is a read-only field. */
		floodlightActivityGroupTagString?: string | null;

		/** Type of the associated floodlight activity group. This is a read-only field. */
		floodlightActivityGroupType?: FloodlightActivityFloodlightActivityGroupType | null;

		/** Floodlight configuration ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's floodlight configuration or from the existing activity's floodlight configuration. */
		floodlightConfigurationId?: string | null;

		/** Represents a DimensionValue resource. */
		floodlightConfigurationIdDimensionValue?: DimensionValue;

		/** The type of Floodlight tag this activity will generate. This is a required field. */
		floodlightTagType?: FloodlightActivityFloodlightTagType | null;

		/** ID of this floodlight activity. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivity". */
		kind?: string | null;

		/** Name of this floodlight activity. This is a required field. Must be less than 129 characters long and cannot contain quotes. */
		name?: string | null;

		/** General notes or implementation instructions for the tag. */
		notes?: string | null;

		/** Publisher dynamic floodlight tags. */
		publisherTags?: Array<FloodlightActivityPublisherDynamicTag>;

		/** Whether this tag should use SSL. */
		secure?: boolean | null;

		/** Whether the floodlight activity is SSL-compliant. This is a read-only field, its value detected by the system from the floodlight tags. */
		sslCompliant?: boolean | null;

		/** Whether this floodlight activity must be SSL-compliant. */
		sslRequired?: boolean | null;

		/** The status of the activity. This can only be set to ACTIVE or ARCHIVED_AND_DISABLED. The ARCHIVED status is no longer supported and cannot be set for Floodlight activities. The DISABLED_POLICY status indicates that a Floodlight activity is violating Google policy. Contact your account manager for more information. */
		status?: FloodlightActivityStatus | null;

		/** Subaccount ID of this floodlight activity. This is a read-only field that can be left blank. */
		subaccountId?: string | null;

		/** Tag format type for the floodlight activity. If left blank, the tag format will default to HTML. */
		tagFormat?: FloodlightActivityTagFormat | null;

		/** Value of the cat= parameter in the floodlight tag, which the ad servers use to identify the activity. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activities of the same activity group. This field is read-only after insertion. */
		tagString?: string | null;

		/** List of the user-defined variables used by this conversion tag. These map to the "u[1-100]=" in the tags. Each of these can have a user defined type. Acceptable values are U1 to U100, inclusive. */
		userDefinedVariableTypes?: Array<CustomFloodlightVariableType>;
	}

	/** Contains properties of a Floodlight activity. */
	export interface FloodlightActivityFormProperties {

		/** Account ID of this floodlight activity. This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** Advertiser ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's advertiser or the existing activity's advertiser. */
		advertiserId: FormControl<string | null | undefined>,

		/** Whether the activity is enabled for attribution. */
		attributionEnabled: FormControl<boolean | null | undefined>,

		/** Code type used for cache busting in the generated tag. Applicable only when floodlightActivityGroupType is COUNTER and countingMethod is STANDARD_COUNTING or UNIQUE_COUNTING. */
		cacheBustingType: FormControl<FloodlightActivityCacheBustingType | null | undefined>,

		/** Counting method for conversions for this floodlight activity. This is a required field. */
		countingMethod: FormControl<FloodlightActivityCountingMethod | null | undefined>,

		/** URL where this tag will be deployed. If specified, must be less than 256 characters long. */
		expectedUrl: FormControl<string | null | undefined>,

		/** Floodlight activity group ID of this floodlight activity. This is a required field. */
		floodlightActivityGroupId: FormControl<string | null | undefined>,

		/** Name of the associated floodlight activity group. This is a read-only field. */
		floodlightActivityGroupName: FormControl<string | null | undefined>,

		/** Tag string of the associated floodlight activity group. This is a read-only field. */
		floodlightActivityGroupTagString: FormControl<string | null | undefined>,

		/** Type of the associated floodlight activity group. This is a read-only field. */
		floodlightActivityGroupType: FormControl<FloodlightActivityFloodlightActivityGroupType | null | undefined>,

		/** Floodlight configuration ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's floodlight configuration or from the existing activity's floodlight configuration. */
		floodlightConfigurationId: FormControl<string | null | undefined>,

		/** The type of Floodlight tag this activity will generate. This is a required field. */
		floodlightTagType: FormControl<FloodlightActivityFloodlightTagType | null | undefined>,

		/** ID of this floodlight activity. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivity". */
		kind: FormControl<string | null | undefined>,

		/** Name of this floodlight activity. This is a required field. Must be less than 129 characters long and cannot contain quotes. */
		name: FormControl<string | null | undefined>,

		/** General notes or implementation instructions for the tag. */
		notes: FormControl<string | null | undefined>,

		/** Whether this tag should use SSL. */
		secure: FormControl<boolean | null | undefined>,

		/** Whether the floodlight activity is SSL-compliant. This is a read-only field, its value detected by the system from the floodlight tags. */
		sslCompliant: FormControl<boolean | null | undefined>,

		/** Whether this floodlight activity must be SSL-compliant. */
		sslRequired: FormControl<boolean | null | undefined>,

		/** The status of the activity. This can only be set to ACTIVE or ARCHIVED_AND_DISABLED. The ARCHIVED status is no longer supported and cannot be set for Floodlight activities. The DISABLED_POLICY status indicates that a Floodlight activity is violating Google policy. Contact your account manager for more information. */
		status: FormControl<FloodlightActivityStatus | null | undefined>,

		/** Subaccount ID of this floodlight activity. This is a read-only field that can be left blank. */
		subaccountId: FormControl<string | null | undefined>,

		/** Tag format type for the floodlight activity. If left blank, the tag format will default to HTML. */
		tagFormat: FormControl<FloodlightActivityTagFormat | null | undefined>,

		/** Value of the cat= parameter in the floodlight tag, which the ad servers use to identify the activity. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activities of the same activity group. This field is read-only after insertion. */
		tagString: FormControl<string | null | undefined>,
	}
	export function CreateFloodlightActivityFormGroup() {
		return new FormGroup<FloodlightActivityFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			attributionEnabled: new FormControl<boolean | null | undefined>(undefined),
			cacheBustingType: new FormControl<FloodlightActivityCacheBustingType | null | undefined>(undefined),
			countingMethod: new FormControl<FloodlightActivityCountingMethod | null | undefined>(undefined),
			expectedUrl: new FormControl<string | null | undefined>(undefined),
			floodlightActivityGroupId: new FormControl<string | null | undefined>(undefined),
			floodlightActivityGroupName: new FormControl<string | null | undefined>(undefined),
			floodlightActivityGroupTagString: new FormControl<string | null | undefined>(undefined),
			floodlightActivityGroupType: new FormControl<FloodlightActivityFloodlightActivityGroupType | null | undefined>(undefined),
			floodlightConfigurationId: new FormControl<string | null | undefined>(undefined),
			floodlightTagType: new FormControl<FloodlightActivityFloodlightTagType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			secure: new FormControl<boolean | null | undefined>(undefined),
			sslCompliant: new FormControl<boolean | null | undefined>(undefined),
			sslRequired: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<FloodlightActivityStatus | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
			tagFormat: new FormControl<FloodlightActivityTagFormat | null | undefined>(undefined),
			tagString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FloodlightActivityCacheBustingType { JAVASCRIPT = 0, ACTIVE_SERVER_PAGE = 1, JSP = 2, PHP = 3, COLD_FUSION = 4 }

	export enum FloodlightActivityCountingMethod { STANDARD_COUNTING = 0, UNIQUE_COUNTING = 1, SESSION_COUNTING = 2, TRANSACTIONS_COUNTING = 3, ITEMS_SOLD_COUNTING = 4 }


	/** Dynamic Tag */
	export interface FloodlightActivityDynamicTag {

		/** ID of this dynamic tag. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Name of this tag. */
		name?: string | null;

		/** Tag code. */
		tag?: string | null;
	}

	/** Dynamic Tag */
	export interface FloodlightActivityDynamicTagFormProperties {

		/** ID of this dynamic tag. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Name of this tag. */
		name: FormControl<string | null | undefined>,

		/** Tag code. */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateFloodlightActivityDynamicTagFormGroup() {
		return new FormGroup<FloodlightActivityDynamicTagFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FloodlightActivityFloodlightActivityGroupType { COUNTER = 0, SALE = 1 }

	export enum FloodlightActivityFloodlightTagType { IFRAME = 0, IMAGE = 1, GLOBAL_SITE_TAG = 2 }


	/** Publisher Dynamic Tag */
	export interface FloodlightActivityPublisherDynamicTag {

		/** Whether this tag is applicable only for click-throughs. */
		clickThrough?: boolean | null;

		/** Directory site ID of this dynamic tag. This is a write-only field that can be used as an alternative to the siteId field. When this resource is retrieved, only the siteId field will be populated. */
		directorySiteId?: string | null;

		/** Dynamic Tag */
		dynamicTag?: FloodlightActivityDynamicTag;

		/** Site ID of this dynamic tag. */
		siteId?: string | null;

		/** Represents a DimensionValue resource. */
		siteIdDimensionValue?: DimensionValue;

		/** Whether this tag is applicable only for view-throughs. */
		viewThrough?: boolean | null;
	}

	/** Publisher Dynamic Tag */
	export interface FloodlightActivityPublisherDynamicTagFormProperties {

		/** Whether this tag is applicable only for click-throughs. */
		clickThrough: FormControl<boolean | null | undefined>,

		/** Directory site ID of this dynamic tag. This is a write-only field that can be used as an alternative to the siteId field. When this resource is retrieved, only the siteId field will be populated. */
		directorySiteId: FormControl<string | null | undefined>,

		/** Site ID of this dynamic tag. */
		siteId: FormControl<string | null | undefined>,

		/** Whether this tag is applicable only for view-throughs. */
		viewThrough: FormControl<boolean | null | undefined>,
	}
	export function CreateFloodlightActivityPublisherDynamicTagFormGroup() {
		return new FormGroup<FloodlightActivityPublisherDynamicTagFormProperties>({
			clickThrough: new FormControl<boolean | null | undefined>(undefined),
			directorySiteId: new FormControl<string | null | undefined>(undefined),
			siteId: new FormControl<string | null | undefined>(undefined),
			viewThrough: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum FloodlightActivityStatus { ACTIVE = 0, ARCHIVED_AND_DISABLED = 1, ARCHIVED = 2, DISABLED_POLICY = 3 }

	export enum FloodlightActivityTagFormat { HTML = 0, XHTML = 1 }


	/** Contains properties of a Floodlight activity group. */
	export interface FloodlightActivityGroup {

		/** Account ID of this floodlight activity group. This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** Advertiser ID of this floodlight activity group. If this field is left blank, the value will be copied over either from the floodlight configuration's advertiser or from the existing activity group's advertiser. */
		advertiserId?: string | null;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Floodlight configuration ID of this floodlight activity group. This is a required field. */
		floodlightConfigurationId?: string | null;

		/** Represents a DimensionValue resource. */
		floodlightConfigurationIdDimensionValue?: DimensionValue;

		/** ID of this floodlight activity group. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroup". */
		kind?: string | null;

		/** Name of this floodlight activity group. This is a required field. Must be less than 65 characters long and cannot contain quotes. */
		name?: string | null;

		/** Subaccount ID of this floodlight activity group. This is a read-only field that can be left blank. */
		subaccountId?: string | null;

		/** Value of the type= parameter in the floodlight tag, which the ad servers use to identify the activity group that the activity belongs to. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activity groups of the same floodlight configuration. This field is read-only after insertion. */
		tagString?: string | null;

		/** Type of the floodlight activity group. This is a required field that is read-only after insertion. */
		type?: FloodlightActivityFloodlightActivityGroupType | null;
	}

	/** Contains properties of a Floodlight activity group. */
	export interface FloodlightActivityGroupFormProperties {

		/** Account ID of this floodlight activity group. This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** Advertiser ID of this floodlight activity group. If this field is left blank, the value will be copied over either from the floodlight configuration's advertiser or from the existing activity group's advertiser. */
		advertiserId: FormControl<string | null | undefined>,

		/** Floodlight configuration ID of this floodlight activity group. This is a required field. */
		floodlightConfigurationId: FormControl<string | null | undefined>,

		/** ID of this floodlight activity group. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroup". */
		kind: FormControl<string | null | undefined>,

		/** Name of this floodlight activity group. This is a required field. Must be less than 65 characters long and cannot contain quotes. */
		name: FormControl<string | null | undefined>,

		/** Subaccount ID of this floodlight activity group. This is a read-only field that can be left blank. */
		subaccountId: FormControl<string | null | undefined>,

		/** Value of the type= parameter in the floodlight tag, which the ad servers use to identify the activity group that the activity belongs to. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activity groups of the same floodlight configuration. This field is read-only after insertion. */
		tagString: FormControl<string | null | undefined>,

		/** Type of the floodlight activity group. This is a required field that is read-only after insertion. */
		type: FormControl<FloodlightActivityFloodlightActivityGroupType | null | undefined>,
	}
	export function CreateFloodlightActivityGroupFormGroup() {
		return new FormGroup<FloodlightActivityGroupFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			floodlightConfigurationId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
			tagString: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FloodlightActivityFloodlightActivityGroupType | null | undefined>(undefined),
		});

	}


	/** Floodlight Activity Group List Response */
	export interface FloodlightActivityGroupsListResponse {

		/** Floodlight activity group collection. */
		floodlightActivityGroups?: Array<FloodlightActivityGroup>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroupsListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Floodlight Activity Group List Response */
	export interface FloodlightActivityGroupsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroupsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateFloodlightActivityGroupsListResponseFormGroup() {
		return new FormGroup<FloodlightActivityGroupsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a Floodlight configuration. */
	export interface FloodlightConfiguration {

		/** Account ID of this floodlight configuration. This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** Advertiser ID of the parent advertiser of this floodlight configuration. */
		advertiserId?: string | null;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Whether advertiser data is shared with Google Analytics. */
		analyticsDataSharingEnabled?: boolean | null;

		/** Custom Viewability Metric */
		customViewabilityMetric?: CustomViewabilityMetric;

		/** Whether the exposure-to-conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting. */
		exposureToConversionEnabled?: boolean | null;
		firstDayOfWeek?: FloodlightConfigurationFirstDayOfWeek | null;

		/** ID of this floodlight configuration. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Whether in-app attribution tracking is enabled. */
		inAppAttributionTrackingEnabled?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfiguration". */
		kind?: string | null;

		/** Lookback configuration settings. */
		lookbackConfiguration?: LookbackConfiguration;

		/** Types of attribution options for natural search conversions. */
		naturalSearchConversionAttributionOption?: FloodlightConfigurationNaturalSearchConversionAttributionOption | null;

		/** Omniture Integration Settings. */
		omnitureSettings?: OmnitureSettings;

		/** Subaccount ID of this floodlight configuration. This is a read-only field that can be left blank. */
		subaccountId?: string | null;

		/** Dynamic and Image Tag Settings. */
		tagSettings?: TagSettings;

		/** List of third-party authentication tokens enabled for this configuration. */
		thirdPartyAuthenticationTokens?: Array<ThirdPartyAuthenticationToken>;

		/** List of user defined variables enabled for this configuration. */
		userDefinedVariableConfigurations?: Array<UserDefinedVariableConfiguration>;
	}

	/** Contains properties of a Floodlight configuration. */
	export interface FloodlightConfigurationFormProperties {

		/** Account ID of this floodlight configuration. This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** Advertiser ID of the parent advertiser of this floodlight configuration. */
		advertiserId: FormControl<string | null | undefined>,

		/** Whether advertiser data is shared with Google Analytics. */
		analyticsDataSharingEnabled: FormControl<boolean | null | undefined>,

		/** Whether the exposure-to-conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting. */
		exposureToConversionEnabled: FormControl<boolean | null | undefined>,
		firstDayOfWeek: FormControl<FloodlightConfigurationFirstDayOfWeek | null | undefined>,

		/** ID of this floodlight configuration. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Whether in-app attribution tracking is enabled. */
		inAppAttributionTrackingEnabled: FormControl<boolean | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfiguration". */
		kind: FormControl<string | null | undefined>,

		/** Types of attribution options for natural search conversions. */
		naturalSearchConversionAttributionOption: FormControl<FloodlightConfigurationNaturalSearchConversionAttributionOption | null | undefined>,

		/** Subaccount ID of this floodlight configuration. This is a read-only field that can be left blank. */
		subaccountId: FormControl<string | null | undefined>,
	}
	export function CreateFloodlightConfigurationFormGroup() {
		return new FormGroup<FloodlightConfigurationFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			analyticsDataSharingEnabled: new FormControl<boolean | null | undefined>(undefined),
			exposureToConversionEnabled: new FormControl<boolean | null | undefined>(undefined),
			firstDayOfWeek: new FormControl<FloodlightConfigurationFirstDayOfWeek | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			inAppAttributionTrackingEnabled: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			naturalSearchConversionAttributionOption: new FormControl<FloodlightConfigurationNaturalSearchConversionAttributionOption | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FloodlightConfigurationFirstDayOfWeek { SUNDAY = 0, MONDAY = 1 }

	export enum FloodlightConfigurationNaturalSearchConversionAttributionOption { EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION = 0, INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION = 1, INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION = 2 }


	/** Omniture Integration Settings. */
	export interface OmnitureSettings {

		/** Whether placement cost data will be sent to Omniture. This property can be enabled only if omnitureIntegrationEnabled is true. */
		omnitureCostDataEnabled?: boolean | null;

		/** Whether Omniture integration is enabled. This property can be enabled only when the "Advanced Ad Serving" account setting is enabled. */
		omnitureIntegrationEnabled?: boolean | null;
	}

	/** Omniture Integration Settings. */
	export interface OmnitureSettingsFormProperties {

		/** Whether placement cost data will be sent to Omniture. This property can be enabled only if omnitureIntegrationEnabled is true. */
		omnitureCostDataEnabled: FormControl<boolean | null | undefined>,

		/** Whether Omniture integration is enabled. This property can be enabled only when the "Advanced Ad Serving" account setting is enabled. */
		omnitureIntegrationEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateOmnitureSettingsFormGroup() {
		return new FormGroup<OmnitureSettingsFormProperties>({
			omnitureCostDataEnabled: new FormControl<boolean | null | undefined>(undefined),
			omnitureIntegrationEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Dynamic and Image Tag Settings. */
	export interface TagSettings {

		/** Whether dynamic floodlight tags are enabled. */
		dynamicTagEnabled?: boolean | null;

		/** Whether image tags are enabled. */
		imageTagEnabled?: boolean | null;
	}

	/** Dynamic and Image Tag Settings. */
	export interface TagSettingsFormProperties {

		/** Whether dynamic floodlight tags are enabled. */
		dynamicTagEnabled: FormControl<boolean | null | undefined>,

		/** Whether image tags are enabled. */
		imageTagEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateTagSettingsFormGroup() {
		return new FormGroup<TagSettingsFormProperties>({
			dynamicTagEnabled: new FormControl<boolean | null | undefined>(undefined),
			imageTagEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Third Party Authentication Token */
	export interface ThirdPartyAuthenticationToken {

		/** Name of the third-party authentication token. */
		name?: string | null;

		/** Value of the third-party authentication token. This is a read-only, auto-generated field. */
		value?: string | null;
	}

	/** Third Party Authentication Token */
	export interface ThirdPartyAuthenticationTokenFormProperties {

		/** Name of the third-party authentication token. */
		name: FormControl<string | null | undefined>,

		/** Value of the third-party authentication token. This is a read-only, auto-generated field. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateThirdPartyAuthenticationTokenFormGroup() {
		return new FormGroup<ThirdPartyAuthenticationTokenFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User Defined Variable configuration. */
	export interface UserDefinedVariableConfiguration {

		/** Data type for the variable. This is a required field. */
		dataType?: UserDefinedVariableConfigurationDataType | null;

		/** User-friendly name for the variable which will appear in reports. This is a required field, must be less than 64 characters long, and cannot contain the following characters: ""<>". */
		reportName?: string | null;

		/** Variable name in the tag. This is a required field. */
		variableType?: CustomFloodlightVariableType | null;
	}

	/** User Defined Variable configuration. */
	export interface UserDefinedVariableConfigurationFormProperties {

		/** Data type for the variable. This is a required field. */
		dataType: FormControl<UserDefinedVariableConfigurationDataType | null | undefined>,

		/** User-friendly name for the variable which will appear in reports. This is a required field, must be less than 64 characters long, and cannot contain the following characters: ""<>". */
		reportName: FormControl<string | null | undefined>,

		/** Variable name in the tag. This is a required field. */
		variableType: FormControl<CustomFloodlightVariableType | null | undefined>,
	}
	export function CreateUserDefinedVariableConfigurationFormGroup() {
		return new FormGroup<UserDefinedVariableConfigurationFormProperties>({
			dataType: new FormControl<UserDefinedVariableConfigurationDataType | null | undefined>(undefined),
			reportName: new FormControl<string | null | undefined>(undefined),
			variableType: new FormControl<CustomFloodlightVariableType | null | undefined>(undefined),
		});

	}

	export enum UserDefinedVariableConfigurationDataType { STRING = 0, NUMBER = 1 }


	/** Floodlight Configuration List Response */
	export interface FloodlightConfigurationsListResponse {

		/** Floodlight configuration collection. */
		floodlightConfigurations?: Array<FloodlightConfiguration>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfigurationsListResponse". */
		kind?: string | null;
	}

	/** Floodlight Configuration List Response */
	export interface FloodlightConfigurationsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfigurationsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateFloodlightConfigurationsListResponseFormGroup() {
		return new FormGroup<FloodlightConfigurationsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a buy from the Planning inventory store. */
	export interface InventoryItem {

		/** Account ID of this inventory item. */
		accountId?: string | null;

		/** Ad slots of this inventory item. If this inventory item represents a standalone placement, there will be exactly one ad slot. If this inventory item represents a placement group, there will be more than one ad slot, each representing one child placement in that placement group. */
		adSlots?: Array<AdSlot>;

		/** Advertiser ID of this inventory item. */
		advertiserId?: string | null;

		/** Content category ID of this inventory item. */
		contentCategoryId?: string | null;

		/** Estimated click-through rate of this inventory item. */
		estimatedClickThroughRate?: string | null;

		/** Estimated conversion rate of this inventory item. */
		estimatedConversionRate?: string | null;

		/** ID of this inventory item. */
		id?: string | null;

		/** Whether this inventory item is in plan. */
		inPlan?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItem". */
		kind?: string | null;

		/** Modification timestamp. */
		lastModifiedInfo?: LastModifiedInfo;

		/** Name of this inventory item. For standalone inventory items, this is the same name as that of its only ad slot. For group inventory items, this can differ from the name of any of its ad slots. */
		name?: string | null;

		/** Negotiation channel ID of this inventory item. */
		negotiationChannelId?: string | null;

		/** Order ID of this inventory item. */
		orderId?: string | null;

		/** Placement strategy ID of this inventory item. */
		placementStrategyId?: string | null;
		pricing?: Pricing;

		/** Project ID of this inventory item. */
		projectId?: string | null;

		/** RFP ID of this inventory item. */
		rfpId?: string | null;

		/** ID of the site this inventory item is associated with. */
		siteId?: string | null;

		/** Subaccount ID of this inventory item. */
		subaccountId?: string | null;

		/** Type of inventory item. */
		type?: InventoryItemType | null;
	}

	/** Represents a buy from the Planning inventory store. */
	export interface InventoryItemFormProperties {

		/** Account ID of this inventory item. */
		accountId: FormControl<string | null | undefined>,

		/** Advertiser ID of this inventory item. */
		advertiserId: FormControl<string | null | undefined>,

		/** Content category ID of this inventory item. */
		contentCategoryId: FormControl<string | null | undefined>,

		/** Estimated click-through rate of this inventory item. */
		estimatedClickThroughRate: FormControl<string | null | undefined>,

		/** Estimated conversion rate of this inventory item. */
		estimatedConversionRate: FormControl<string | null | undefined>,

		/** ID of this inventory item. */
		id: FormControl<string | null | undefined>,

		/** Whether this inventory item is in plan. */
		inPlan: FormControl<boolean | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItem". */
		kind: FormControl<string | null | undefined>,

		/** Name of this inventory item. For standalone inventory items, this is the same name as that of its only ad slot. For group inventory items, this can differ from the name of any of its ad slots. */
		name: FormControl<string | null | undefined>,

		/** Negotiation channel ID of this inventory item. */
		negotiationChannelId: FormControl<string | null | undefined>,

		/** Order ID of this inventory item. */
		orderId: FormControl<string | null | undefined>,

		/** Placement strategy ID of this inventory item. */
		placementStrategyId: FormControl<string | null | undefined>,

		/** Project ID of this inventory item. */
		projectId: FormControl<string | null | undefined>,

		/** RFP ID of this inventory item. */
		rfpId: FormControl<string | null | undefined>,

		/** ID of the site this inventory item is associated with. */
		siteId: FormControl<string | null | undefined>,

		/** Subaccount ID of this inventory item. */
		subaccountId: FormControl<string | null | undefined>,

		/** Type of inventory item. */
		type: FormControl<InventoryItemType | null | undefined>,
	}
	export function CreateInventoryItemFormGroup() {
		return new FormGroup<InventoryItemFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			contentCategoryId: new FormControl<string | null | undefined>(undefined),
			estimatedClickThroughRate: new FormControl<string | null | undefined>(undefined),
			estimatedConversionRate: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			inPlan: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			negotiationChannelId: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			placementStrategyId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			rfpId: new FormControl<string | null | undefined>(undefined),
			siteId: new FormControl<string | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<InventoryItemType | null | undefined>(undefined),
		});

	}

	export interface Pricing {

		/** Cap cost type of this inventory item. */
		capCostType?: PricingCapCostType | null;
		endDate?: Date | null;

		/** Flights of this inventory item. A flight (a.k.a. pricing period) represents the inventory item pricing information for a specific period of time. */
		flights?: Array<Flight>;

		/** Group type of this inventory item if it represents a placement group. Is null otherwise. There are two type of placement groups: PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE is a simple group of inventory items that acts as a single pricing point for a group of tags. PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK is a group of inventory items that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned inventory items to be marked as primary. */
		groupType?: PricingGroupType | null;

		/** Pricing type of this inventory item. */
		pricingType?: PricingPricingType | null;
		startDate?: Date | null;
	}
	export interface PricingFormProperties {

		/** Cap cost type of this inventory item. */
		capCostType: FormControl<PricingCapCostType | null | undefined>,
		endDate: FormControl<Date | null | undefined>,

		/** Group type of this inventory item if it represents a placement group. Is null otherwise. There are two type of placement groups: PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE is a simple group of inventory items that acts as a single pricing point for a group of tags. PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK is a group of inventory items that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned inventory items to be marked as primary. */
		groupType: FormControl<PricingGroupType | null | undefined>,

		/** Pricing type of this inventory item. */
		pricingType: FormControl<PricingPricingType | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreatePricingFormGroup() {
		return new FormGroup<PricingFormProperties>({
			capCostType: new FormControl<PricingCapCostType | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			groupType: new FormControl<PricingGroupType | null | undefined>(undefined),
			pricingType: new FormControl<PricingPricingType | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PricingCapCostType { PLANNING_PLACEMENT_CAP_COST_TYPE_NONE = 0, PLANNING_PLACEMENT_CAP_COST_TYPE_MONTHLY = 1, PLANNING_PLACEMENT_CAP_COST_TYPE_CUMULATIVE = 2 }

	export enum PricingGroupType { PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE = 0, PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK = 1 }

	export enum PricingPricingType { PLANNING_PLACEMENT_PRICING_TYPE_IMPRESSIONS = 0, PLANNING_PLACEMENT_PRICING_TYPE_CPM = 1, PLANNING_PLACEMENT_PRICING_TYPE_CLICKS = 2, PLANNING_PLACEMENT_PRICING_TYPE_CPC = 3, PLANNING_PLACEMENT_PRICING_TYPE_CPA = 4, PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_IMPRESSIONS = 5, PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_CLICKS = 6, PLANNING_PLACEMENT_PRICING_TYPE_CPM_ACTIVEVIEW = 7 }

	export enum InventoryItemType { PLANNING_PLACEMENT_TYPE_REGULAR = 0, PLANNING_PLACEMENT_TYPE_CREDIT = 1 }


	/** Inventory item List Response */
	export interface InventoryItemsListResponse {

		/** Inventory item collection */
		inventoryItems?: Array<InventoryItem>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItemsListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Inventory item List Response */
	export interface InventoryItemsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItemsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateInventoryItemsListResponseFormGroup() {
		return new FormGroup<InventoryItemsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Language List Response */
	export interface LanguagesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#languagesListResponse". */
		kind?: string | null;

		/** Language collection. */
		languages?: Array<Language>;
	}

	/** Language List Response */
	export interface LanguagesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#languagesListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLanguagesListResponseFormGroup() {
		return new FormGroup<LanguagesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A group clause made up of list population terms representing constraints joined by ORs. */
	export interface ListPopulationClause {

		/** Terms of this list population clause. Each clause is made up of list population terms representing constraints and are joined by ORs. */
		terms?: Array<ListPopulationTerm>;
	}

	/** A group clause made up of list population terms representing constraints joined by ORs. */
	export interface ListPopulationClauseFormProperties {
	}
	export function CreateListPopulationClauseFormGroup() {
		return new FormGroup<ListPopulationClauseFormProperties>({
		});

	}


	/** Remarketing List Population Rule Term. */
	export interface ListPopulationTerm {

		/** Will be true if the term should check if the user is in the list and false if the term should check if the user is not in the list. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. False by default. */
		contains?: boolean | null;

		/** Whether to negate the comparison result of this term during rule evaluation. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
		negation?: boolean | null;

		/** Comparison operator of this term. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
		operator?: ListPopulationTermOperator | null;

		/** ID of the list in question. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. */
		remarketingListId?: string | null;

		/** List population term type determines the applicable fields in this object. If left unset or set to CUSTOM_VARIABLE_TERM, then variableName, variableFriendlyName, operator, value, and negation are applicable. If set to LIST_MEMBERSHIP_TERM then remarketingListId and contains are applicable. If set to REFERRER_TERM then operator, value, and negation are applicable. */
		type?: ListPopulationTermType | null;

		/** Literal to compare the variable to. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
		value?: string | null;

		/** Friendly name of this term's variable. This is a read-only, auto-generated field. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM. */
		variableFriendlyName?: string | null;

		/** Name of the variable (U1, U2, etc.) being compared in this term. This field is only relevant when type is set to null, CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
		variableName?: string | null;
	}

	/** Remarketing List Population Rule Term. */
	export interface ListPopulationTermFormProperties {

		/** Will be true if the term should check if the user is in the list and false if the term should check if the user is not in the list. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. False by default. */
		contains: FormControl<boolean | null | undefined>,

		/** Whether to negate the comparison result of this term during rule evaluation. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
		negation: FormControl<boolean | null | undefined>,

		/** Comparison operator of this term. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
		operator: FormControl<ListPopulationTermOperator | null | undefined>,

		/** ID of the list in question. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. */
		remarketingListId: FormControl<string | null | undefined>,

		/** List population term type determines the applicable fields in this object. If left unset or set to CUSTOM_VARIABLE_TERM, then variableName, variableFriendlyName, operator, value, and negation are applicable. If set to LIST_MEMBERSHIP_TERM then remarketingListId and contains are applicable. If set to REFERRER_TERM then operator, value, and negation are applicable. */
		type: FormControl<ListPopulationTermType | null | undefined>,

		/** Literal to compare the variable to. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
		value: FormControl<string | null | undefined>,

		/** Friendly name of this term's variable. This is a read-only, auto-generated field. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM. */
		variableFriendlyName: FormControl<string | null | undefined>,

		/** Name of the variable (U1, U2, etc.) being compared in this term. This field is only relevant when type is set to null, CUSTOM_VARIABLE_TERM or REFERRER_TERM. */
		variableName: FormControl<string | null | undefined>,
	}
	export function CreateListPopulationTermFormGroup() {
		return new FormGroup<ListPopulationTermFormProperties>({
			contains: new FormControl<boolean | null | undefined>(undefined),
			negation: new FormControl<boolean | null | undefined>(undefined),
			operator: new FormControl<ListPopulationTermOperator | null | undefined>(undefined),
			remarketingListId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ListPopulationTermType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			variableFriendlyName: new FormControl<string | null | undefined>(undefined),
			variableName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ListPopulationTermOperator { NUM_EQUALS = 0, NUM_LESS_THAN = 1, NUM_LESS_THAN_EQUAL = 2, NUM_GREATER_THAN = 3, NUM_GREATER_THAN_EQUAL = 4, STRING_EQUALS = 5, STRING_CONTAINS = 6 }

	export enum ListPopulationTermType { CUSTOM_VARIABLE_TERM = 0, LIST_MEMBERSHIP_TERM = 1, REFERRER_TERM = 2 }


	/** Remarketing List Population Rule. */
	export interface ListPopulationRule {

		/** Floodlight activity ID associated with this rule. This field can be left blank. */
		floodlightActivityId?: string | null;

		/** Name of floodlight activity associated with this rule. This is a read-only, auto-generated field. */
		floodlightActivityName?: string | null;

		/** Clauses that make up this list population rule. Clauses are joined by ANDs, and the clauses themselves are made up of list population terms which are joined by ORs. */
		listPopulationClauses?: Array<ListPopulationClause>;
	}

	/** Remarketing List Population Rule. */
	export interface ListPopulationRuleFormProperties {

		/** Floodlight activity ID associated with this rule. This field can be left blank. */
		floodlightActivityId: FormControl<string | null | undefined>,

		/** Name of floodlight activity associated with this rule. This is a read-only, auto-generated field. */
		floodlightActivityName: FormControl<string | null | undefined>,
	}
	export function CreateListPopulationRuleFormGroup() {
		return new FormGroup<ListPopulationRuleFormProperties>({
			floodlightActivityId: new FormControl<string | null | undefined>(undefined),
			floodlightActivityName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placement tag wrapping */
	export interface MeasurementPartnerWrappingData {

		/** Placement wrapping status. */
		linkStatus?: MeasurementPartnerAdvertiserLinkLinkStatus | null;

		/** Measurement partner used for wrapping the placement. */
		measurementPartner?: MeasurementPartnerAdvertiserLinkMeasurementPartner | null;

		/** Measurement mode for the wrapped placement. */
		tagWrappingMode?: MeasurementPartnerWrappingDataTagWrappingMode | null;

		/** Tag provided by the measurement partner during wrapping. */
		wrappedTag?: string | null;
	}

	/** Placement tag wrapping */
	export interface MeasurementPartnerWrappingDataFormProperties {

		/** Placement wrapping status. */
		linkStatus: FormControl<MeasurementPartnerAdvertiserLinkLinkStatus | null | undefined>,

		/** Measurement partner used for wrapping the placement. */
		measurementPartner: FormControl<MeasurementPartnerAdvertiserLinkMeasurementPartner | null | undefined>,

		/** Measurement mode for the wrapped placement. */
		tagWrappingMode: FormControl<MeasurementPartnerWrappingDataTagWrappingMode | null | undefined>,

		/** Tag provided by the measurement partner during wrapping. */
		wrappedTag: FormControl<string | null | undefined>,
	}
	export function CreateMeasurementPartnerWrappingDataFormGroup() {
		return new FormGroup<MeasurementPartnerWrappingDataFormProperties>({
			linkStatus: new FormControl<MeasurementPartnerAdvertiserLinkLinkStatus | null | undefined>(undefined),
			measurementPartner: new FormControl<MeasurementPartnerAdvertiserLinkMeasurementPartner | null | undefined>(undefined),
			tagWrappingMode: new FormControl<MeasurementPartnerWrappingDataTagWrappingMode | null | undefined>(undefined),
			wrappedTag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MeasurementPartnerWrappingDataTagWrappingMode { NONE = 0, BLOCKING = 1, MONITORING = 2, MONITORING_READ_ONLY = 3, VIDEO_PIXEL_MONITORING = 4, TRACKING = 5, VPAID_MONITORING = 6, VPAID_BLOCKING = 7, NON_VPAID_MONITORING = 8, VPAID_ONLY_MONITORING = 9, VPAID_ONLY_BLOCKING = 10, VPAID_ONLY_FILTERING = 11, VPAID_FILTERING = 12, NON_VPAID_FILTERING = 13 }


	/** Metro List Response */
	export interface MetrosListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#metrosListResponse". */
		kind?: string | null;

		/** Metro collection. */
		metros?: Array<Metro>;
	}

	/** Metro List Response */
	export interface MetrosListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#metrosListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateMetrosListResponseFormGroup() {
		return new FormGroup<MetrosListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Mobile app List Response */
	export interface MobileAppsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileAppsListResponse". */
		kind?: string | null;

		/** Mobile apps collection. */
		mobileApps?: Array<MobileApp>;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;
	}

	/** Mobile app List Response */
	export interface MobileAppsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileAppsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateMobileAppsListResponseFormGroup() {
		return new FormGroup<MobileAppsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Mobile Carrier List Response */
	export interface MobileCarriersListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarriersListResponse". */
		kind?: string | null;

		/** Mobile carrier collection. */
		mobileCarriers?: Array<MobileCarrier>;
	}

	/** Mobile Carrier List Response */
	export interface MobileCarriersListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarriersListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateMobileCarriersListResponseFormGroup() {
		return new FormGroup<MobileCarriersListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operating System Version List Response */
	export interface OperatingSystemVersionsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersionsListResponse". */
		kind?: string | null;

		/** Operating system version collection. */
		operatingSystemVersions?: Array<OperatingSystemVersion>;
	}

	/** Operating System Version List Response */
	export interface OperatingSystemVersionsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersionsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOperatingSystemVersionsListResponseFormGroup() {
		return new FormGroup<OperatingSystemVersionsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operating System List Response */
	export interface OperatingSystemsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemsListResponse". */
		kind?: string | null;

		/** Operating system collection. */
		operatingSystems?: Array<OperatingSystem>;
	}

	/** Operating System List Response */
	export interface OperatingSystemsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOperatingSystemsListResponseFormGroup() {
		return new FormGroup<OperatingSystemsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes properties of a Planning order. */
	export interface Order {

		/** Account ID of this order. */
		accountId?: string | null;

		/** Advertiser ID of this order. */
		advertiserId?: string | null;

		/** IDs for users that have to approve documents created for this order. */
		approverUserProfileIds?: Array<string>;

		/** Buyer invoice ID associated with this order. */
		buyerInvoiceId?: string | null;

		/** Name of the buyer organization. */
		buyerOrganizationName?: string | null;

		/** Comments in this order. */
		comments?: string | null;

		/** Contacts for this order. */
		contacts?: Array<OrderContact>;

		/** ID of this order. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#order". */
		kind?: string | null;

		/** Modification timestamp. */
		lastModifiedInfo?: LastModifiedInfo;

		/** Name of this order. */
		name?: string | null;

		/** Notes of this order. */
		notes?: string | null;

		/** ID of the terms and conditions template used in this order. */
		planningTermId?: string | null;

		/** Project ID of this order. */
		projectId?: string | null;

		/** Seller order ID associated with this order. */
		sellerOrderId?: string | null;

		/** Name of the seller organization. */
		sellerOrganizationName?: string | null;

		/** Site IDs this order is associated with. */
		siteId?: Array<string>;

		/** Free-form site names this order is associated with. */
		siteNames?: Array<string>;

		/** Subaccount ID of this order. */
		subaccountId?: string | null;

		/** Terms and conditions of this order. */
		termsAndConditions?: string | null;
	}

	/** Describes properties of a Planning order. */
	export interface OrderFormProperties {

		/** Account ID of this order. */
		accountId: FormControl<string | null | undefined>,

		/** Advertiser ID of this order. */
		advertiserId: FormControl<string | null | undefined>,

		/** Buyer invoice ID associated with this order. */
		buyerInvoiceId: FormControl<string | null | undefined>,

		/** Name of the buyer organization. */
		buyerOrganizationName: FormControl<string | null | undefined>,

		/** Comments in this order. */
		comments: FormControl<string | null | undefined>,

		/** ID of this order. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#order". */
		kind: FormControl<string | null | undefined>,

		/** Name of this order. */
		name: FormControl<string | null | undefined>,

		/** Notes of this order. */
		notes: FormControl<string | null | undefined>,

		/** ID of the terms and conditions template used in this order. */
		planningTermId: FormControl<string | null | undefined>,

		/** Project ID of this order. */
		projectId: FormControl<string | null | undefined>,

		/** Seller order ID associated with this order. */
		sellerOrderId: FormControl<string | null | undefined>,

		/** Name of the seller organization. */
		sellerOrganizationName: FormControl<string | null | undefined>,

		/** Subaccount ID of this order. */
		subaccountId: FormControl<string | null | undefined>,

		/** Terms and conditions of this order. */
		termsAndConditions: FormControl<string | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			buyerInvoiceId: new FormControl<string | null | undefined>(undefined),
			buyerOrganizationName: new FormControl<string | null | undefined>(undefined),
			comments: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			planningTermId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			sellerOrderId: new FormControl<string | null | undefined>(undefined),
			sellerOrganizationName: new FormControl<string | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
			termsAndConditions: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contact of an order. */
	export interface OrderContact {

		/** Free-form information about this contact. It could be any information related to this contact in addition to type, title, name, and signature user profile ID. */
		contactInfo?: string | null;

		/** Name of this contact. */
		contactName?: string | null;

		/** Title of this contact. */
		contactTitle?: string | null;

		/** Type of this contact. */
		contactType?: OrderContactContactType | null;

		/** ID of the user profile containing the signature that will be embedded into order documents. */
		signatureUserProfileId?: string | null;
	}

	/** Contact of an order. */
	export interface OrderContactFormProperties {

		/** Free-form information about this contact. It could be any information related to this contact in addition to type, title, name, and signature user profile ID. */
		contactInfo: FormControl<string | null | undefined>,

		/** Name of this contact. */
		contactName: FormControl<string | null | undefined>,

		/** Title of this contact. */
		contactTitle: FormControl<string | null | undefined>,

		/** Type of this contact. */
		contactType: FormControl<OrderContactContactType | null | undefined>,

		/** ID of the user profile containing the signature that will be embedded into order documents. */
		signatureUserProfileId: FormControl<string | null | undefined>,
	}
	export function CreateOrderContactFormGroup() {
		return new FormGroup<OrderContactFormProperties>({
			contactInfo: new FormControl<string | null | undefined>(undefined),
			contactName: new FormControl<string | null | undefined>(undefined),
			contactTitle: new FormControl<string | null | undefined>(undefined),
			contactType: new FormControl<OrderContactContactType | null | undefined>(undefined),
			signatureUserProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrderContactContactType { PLANNING_ORDER_CONTACT_BUYER_CONTACT = 0, PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT = 1, PLANNING_ORDER_CONTACT_SELLER_CONTACT = 2 }


	/** Order List Response */
	export interface OrdersListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#ordersListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;

		/** Order collection. */
		orders?: Array<Order>;
	}

	/** Order List Response */
	export interface OrdersListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#ordersListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateOrdersListResponseFormGroup() {
		return new FormGroup<OrdersListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a DfaReporting path filter. */
	export interface PathFilter {

		/** Event filters in path report. */
		eventFilters?: Array<EventFilter>;

		/** The kind of resource this is, in this case dfareporting#pathFilter. */
		kind?: string | null;

		/** Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT. */
		pathMatchPosition?: PathFilterPathMatchPosition | null;
	}

	/** Represents a DfaReporting path filter. */
	export interface PathFilterFormProperties {

		/** The kind of resource this is, in this case dfareporting#pathFilter. */
		kind: FormControl<string | null | undefined>,

		/** Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT. */
		pathMatchPosition: FormControl<PathFilterPathMatchPosition | null | undefined>,
	}
	export function CreatePathFilterFormGroup() {
		return new FormGroup<PathFilterFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			pathMatchPosition: new FormControl<PathFilterPathMatchPosition | null | undefined>(undefined),
		});

	}

	export enum PathFilterPathMatchPosition { PATH_MATCH_POSITION_UNSPECIFIED = 0, ANY = 1, FIRST = 2, LAST = 3 }


	/** Contains properties of a placement. */
	export interface Placement {

		/** Account ID of this placement. This field can be left blank. */
		accountId?: string | null;

		/** Whether this placement is active, inactive, archived or permanently archived. */
		activeStatus?: PlacementActiveStatus | null;

		/** Whether this placement opts out of ad blocking. When true, ad blocking is disabled for this placement. When false, the campaign and site settings take effect. */
		adBlockingOptOut?: boolean | null;

		/** Additional sizes associated with this placement. When inserting or updating a placement, only the size ID field is used. */
		additionalSizes?: Array<Size>;

		/** Advertiser ID of this placement. This field can be left blank. */
		advertiserId?: string | null;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Campaign ID of this placement. This field is a required field on insertion. */
		campaignId?: string | null;

		/** Represents a DimensionValue resource. */
		campaignIdDimensionValue?: DimensionValue;

		/** Comments for this placement. */
		comment?: string | null;

		/** Placement compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering on desktop, on mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are no longer allowed for new placement insertions. Instead, use DISPLAY or DISPLAY_INTERSTITIAL. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. This field is required on insertion. */
		compatibility?: AdCompatibility | null;

		/** ID of the content category assigned to this placement. */
		contentCategoryId?: string | null;

		/** Modification timestamp. */
		createInfo?: LastModifiedInfo;

		/** Directory site ID of this placement. On insert, you must set either this field or the siteId field to specify the site associated with this placement. This is a required field that is read-only after insertion. */
		directorySiteId?: string | null;

		/** Represents a DimensionValue resource. */
		directorySiteIdDimensionValue?: DimensionValue;

		/** External ID for this placement. */
		externalId?: string | null;

		/** ID of this placement. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Key name of this placement. This is a read-only, auto-generated field. */
		keyName?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placement". */
		kind?: string | null;

		/** Modification timestamp. */
		lastModifiedInfo?: LastModifiedInfo;

		/** Lookback configuration settings. */
		lookbackConfiguration?: LookbackConfiguration;

		/** Name of this placement.This is a required field and must be less than or equal to 512 characters long. */
		name?: string | null;

		/** Placement tag wrapping */
		partnerWrappingData?: MeasurementPartnerWrappingData;

		/** Whether payment was approved for this placement. This is a read-only field relevant only to publisher-paid placements. */
		paymentApproved?: boolean | null;

		/** Payment source for this placement. This is a required field that is read-only after insertion. */
		paymentSource?: PlacementPaymentSource | null;

		/** ID of this placement's group, if applicable. */
		placementGroupId?: string | null;

		/** Represents a DimensionValue resource. */
		placementGroupIdDimensionValue?: DimensionValue;

		/** ID of the placement strategy assigned to this placement. */
		placementStrategyId?: string | null;

		/** Pricing Schedule */
		pricingSchedule?: PricingSchedule;

		/** Whether this placement is the primary placement of a roadblock (placement group). You cannot change this field from true to false. Setting this field to true will automatically set the primary field on the original primary placement of the roadblock to false, and it will automatically set the roadblock's primaryPlacementId field to the ID of this placement. */
		primary?: boolean | null;

		/** Modification timestamp. */
		publisherUpdateInfo?: LastModifiedInfo;

		/** Site ID associated with this placement. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement. This is a required field that is read-only after insertion. */
		siteId?: string | null;

		/** Represents a DimensionValue resource. */
		siteIdDimensionValue?: DimensionValue;

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		size?: Size;

		/** Whether creatives assigned to this placement must be SSL-compliant. */
		sslRequired?: boolean | null;

		/** Third-party placement status. */
		status?: PlacementStatus | null;

		/** Subaccount ID of this placement. This field can be left blank. */
		subaccountId?: string | null;

		/** Tag formats to generate for this placement. This field is required on insertion. Acceptable values are: - "PLACEMENT_TAG_STANDARD" - "PLACEMENT_TAG_IFRAME_JAVASCRIPT" - "PLACEMENT_TAG_IFRAME_ILAYER" - "PLACEMENT_TAG_INTERNAL_REDIRECT" - "PLACEMENT_TAG_JAVASCRIPT" - "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT" - "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT" - "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT" - "PLACEMENT_TAG_CLICK_COMMANDS" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4" - "PLACEMENT_TAG_TRACKING" - "PLACEMENT_TAG_TRACKING_IFRAME" - "PLACEMENT_TAG_TRACKING_JAVASCRIPT" */
		tagFormats?: Array<string>;

		/** Tag Settings */
		tagSetting?: TagSetting;

		/** Whether Verification and ActiveView are disabled for in-stream video creatives for this placement. The same setting videoActiveViewOptOut exists on the site level -- the opt out occurs if either of these settings are true. These settings are distinct from DirectorySites.settings.activeViewOptOut or Sites.siteSettings.activeViewOptOut which only apply to display ads. However, Accounts.activeViewOptOut opts out both video traffic, as well as display ads, from Verification and ActiveView. */
		videoActiveViewOptOut?: boolean | null;

		/** Video Settings */
		videoSettings?: VideoSettings;

		/** VPAID adapter setting for this placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to this placement. *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH. */
		vpaidAdapterChoice?: PlacementVpaidAdapterChoice | null;

		/** Whether this placement opts out of tag wrapping. */
		wrappingOptOut?: boolean | null;
	}

	/** Contains properties of a placement. */
	export interface PlacementFormProperties {

		/** Account ID of this placement. This field can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** Whether this placement is active, inactive, archived or permanently archived. */
		activeStatus: FormControl<PlacementActiveStatus | null | undefined>,

		/** Whether this placement opts out of ad blocking. When true, ad blocking is disabled for this placement. When false, the campaign and site settings take effect. */
		adBlockingOptOut: FormControl<boolean | null | undefined>,

		/** Advertiser ID of this placement. This field can be left blank. */
		advertiserId: FormControl<string | null | undefined>,

		/** Campaign ID of this placement. This field is a required field on insertion. */
		campaignId: FormControl<string | null | undefined>,

		/** Comments for this placement. */
		comment: FormControl<string | null | undefined>,

		/** Placement compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering on desktop, on mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are no longer allowed for new placement insertions. Instead, use DISPLAY or DISPLAY_INTERSTITIAL. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. This field is required on insertion. */
		compatibility: FormControl<AdCompatibility | null | undefined>,

		/** ID of the content category assigned to this placement. */
		contentCategoryId: FormControl<string | null | undefined>,

		/** Directory site ID of this placement. On insert, you must set either this field or the siteId field to specify the site associated with this placement. This is a required field that is read-only after insertion. */
		directorySiteId: FormControl<string | null | undefined>,

		/** External ID for this placement. */
		externalId: FormControl<string | null | undefined>,

		/** ID of this placement. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Key name of this placement. This is a read-only, auto-generated field. */
		keyName: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placement". */
		kind: FormControl<string | null | undefined>,

		/** Name of this placement.This is a required field and must be less than or equal to 512 characters long. */
		name: FormControl<string | null | undefined>,

		/** Whether payment was approved for this placement. This is a read-only field relevant only to publisher-paid placements. */
		paymentApproved: FormControl<boolean | null | undefined>,

		/** Payment source for this placement. This is a required field that is read-only after insertion. */
		paymentSource: FormControl<PlacementPaymentSource | null | undefined>,

		/** ID of this placement's group, if applicable. */
		placementGroupId: FormControl<string | null | undefined>,

		/** ID of the placement strategy assigned to this placement. */
		placementStrategyId: FormControl<string | null | undefined>,

		/** Whether this placement is the primary placement of a roadblock (placement group). You cannot change this field from true to false. Setting this field to true will automatically set the primary field on the original primary placement of the roadblock to false, and it will automatically set the roadblock's primaryPlacementId field to the ID of this placement. */
		primary: FormControl<boolean | null | undefined>,

		/** Site ID associated with this placement. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement. This is a required field that is read-only after insertion. */
		siteId: FormControl<string | null | undefined>,

		/** Whether creatives assigned to this placement must be SSL-compliant. */
		sslRequired: FormControl<boolean | null | undefined>,

		/** Third-party placement status. */
		status: FormControl<PlacementStatus | null | undefined>,

		/** Subaccount ID of this placement. This field can be left blank. */
		subaccountId: FormControl<string | null | undefined>,

		/** Whether Verification and ActiveView are disabled for in-stream video creatives for this placement. The same setting videoActiveViewOptOut exists on the site level -- the opt out occurs if either of these settings are true. These settings are distinct from DirectorySites.settings.activeViewOptOut or Sites.siteSettings.activeViewOptOut which only apply to display ads. However, Accounts.activeViewOptOut opts out both video traffic, as well as display ads, from Verification and ActiveView. */
		videoActiveViewOptOut: FormControl<boolean | null | undefined>,

		/** VPAID adapter setting for this placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to this placement. *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH. */
		vpaidAdapterChoice: FormControl<PlacementVpaidAdapterChoice | null | undefined>,

		/** Whether this placement opts out of tag wrapping. */
		wrappingOptOut: FormControl<boolean | null | undefined>,
	}
	export function CreatePlacementFormGroup() {
		return new FormGroup<PlacementFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			activeStatus: new FormControl<PlacementActiveStatus | null | undefined>(undefined),
			adBlockingOptOut: new FormControl<boolean | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			campaignId: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			compatibility: new FormControl<AdCompatibility | null | undefined>(undefined),
			contentCategoryId: new FormControl<string | null | undefined>(undefined),
			directorySiteId: new FormControl<string | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			keyName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			paymentApproved: new FormControl<boolean | null | undefined>(undefined),
			paymentSource: new FormControl<PlacementPaymentSource | null | undefined>(undefined),
			placementGroupId: new FormControl<string | null | undefined>(undefined),
			placementStrategyId: new FormControl<string | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
			siteId: new FormControl<string | null | undefined>(undefined),
			sslRequired: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<PlacementStatus | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
			videoActiveViewOptOut: new FormControl<boolean | null | undefined>(undefined),
			vpaidAdapterChoice: new FormControl<PlacementVpaidAdapterChoice | null | undefined>(undefined),
			wrappingOptOut: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PlacementActiveStatus { PLACEMENT_STATUS_UNKNOWN = 0, PLACEMENT_STATUS_ACTIVE = 1, PLACEMENT_STATUS_INACTIVE = 2, PLACEMENT_STATUS_ARCHIVED = 3, PLACEMENT_STATUS_PERMANENTLY_ARCHIVED = 4 }

	export enum PlacementPaymentSource { PLACEMENT_AGENCY_PAID = 0, PLACEMENT_PUBLISHER_PAID = 1 }


	/** Pricing Schedule */
	export interface PricingSchedule {

		/** Placement cap cost option. */
		capCostOption?: PricingScheduleCapCostOption | null;
		endDate?: Date | null;

		/** Whether this placement is flighted. If true, pricing periods will be computed automatically. */
		flighted?: boolean | null;

		/** Floodlight activity ID associated with this placement. This field should be set when placement pricing type is set to PRICING_TYPE_CPA. */
		floodlightActivityId?: string | null;

		/** Pricing periods for this placement. */
		pricingPeriods?: Array<PricingSchedulePricingPeriod>;

		/** Placement pricing type. This field is required on insertion. */
		pricingType?: PricingSchedulePricingType | null;
		startDate?: Date | null;
		testingStartDate?: Date | null;
	}

	/** Pricing Schedule */
	export interface PricingScheduleFormProperties {

		/** Placement cap cost option. */
		capCostOption: FormControl<PricingScheduleCapCostOption | null | undefined>,
		endDate: FormControl<Date | null | undefined>,

		/** Whether this placement is flighted. If true, pricing periods will be computed automatically. */
		flighted: FormControl<boolean | null | undefined>,

		/** Floodlight activity ID associated with this placement. This field should be set when placement pricing type is set to PRICING_TYPE_CPA. */
		floodlightActivityId: FormControl<string | null | undefined>,

		/** Placement pricing type. This field is required on insertion. */
		pricingType: FormControl<PricingSchedulePricingType | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		testingStartDate: FormControl<Date | null | undefined>,
	}
	export function CreatePricingScheduleFormGroup() {
		return new FormGroup<PricingScheduleFormProperties>({
			capCostOption: new FormControl<PricingScheduleCapCostOption | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			flighted: new FormControl<boolean | null | undefined>(undefined),
			floodlightActivityId: new FormControl<string | null | undefined>(undefined),
			pricingType: new FormControl<PricingSchedulePricingType | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			testingStartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PricingScheduleCapCostOption { CAP_COST_NONE = 0, CAP_COST_MONTHLY = 1, CAP_COST_CUMULATIVE = 2 }


	/** Pricing Period */
	export interface PricingSchedulePricingPeriod {
		endDate?: Date | null;

		/** Comments for this pricing period. */
		pricingComment?: string | null;

		/** Rate or cost of this pricing period in nanos (i.e., multiplied by 1000000000). Acceptable values are 0 to 1000000000000000000, inclusive. */
		rateOrCostNanos?: string | null;
		startDate?: Date | null;

		/** Units of this pricing period. Acceptable values are 0 to 10000000000, inclusive. */
		units?: string | null;
	}

	/** Pricing Period */
	export interface PricingSchedulePricingPeriodFormProperties {
		endDate: FormControl<Date | null | undefined>,

		/** Comments for this pricing period. */
		pricingComment: FormControl<string | null | undefined>,

		/** Rate or cost of this pricing period in nanos (i.e., multiplied by 1000000000). Acceptable values are 0 to 1000000000000000000, inclusive. */
		rateOrCostNanos: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,

		/** Units of this pricing period. Acceptable values are 0 to 10000000000, inclusive. */
		units: FormControl<string | null | undefined>,
	}
	export function CreatePricingSchedulePricingPeriodFormGroup() {
		return new FormGroup<PricingSchedulePricingPeriodFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			pricingComment: new FormControl<string | null | undefined>(undefined),
			rateOrCostNanos: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PricingSchedulePricingType { PRICING_TYPE_CPM = 0, PRICING_TYPE_CPC = 1, PRICING_TYPE_CPA = 2, PRICING_TYPE_FLAT_RATE_IMPRESSIONS = 3, PRICING_TYPE_FLAT_RATE_CLICKS = 4, PRICING_TYPE_CPM_ACTIVEVIEW = 5 }

	export enum PlacementStatus { PENDING_REVIEW = 0, PAYMENT_ACCEPTED = 1, PAYMENT_REJECTED = 2, ACKNOWLEDGE_REJECTION = 3, ACKNOWLEDGE_ACCEPTANCE = 4, DRAFT = 5 }


	/** Tag Settings */
	export interface TagSetting {

		/** Additional key-values to be included in tags. Each key-value pair must be of the form key=value, and pairs must be separated by a semicolon (;). Keys and values must not contain commas. For example, id=2;color=red is a valid value for this field. */
		additionalKeyValues?: string | null;

		/** Whether static landing page URLs should be included in the tags. This setting applies only to placements. */
		includeClickThroughUrls?: boolean | null;

		/** Whether click-tracking string should be included in the tags. */
		includeClickTracking?: boolean | null;

		/** Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders are inserted in placement tags for this site. Publishers can then add keywords to those placeholders. */
		keywordOption?: TagSettingKeywordOption | null;
	}

	/** Tag Settings */
	export interface TagSettingFormProperties {

		/** Additional key-values to be included in tags. Each key-value pair must be of the form key=value, and pairs must be separated by a semicolon (;). Keys and values must not contain commas. For example, id=2;color=red is a valid value for this field. */
		additionalKeyValues: FormControl<string | null | undefined>,

		/** Whether static landing page URLs should be included in the tags. This setting applies only to placements. */
		includeClickThroughUrls: FormControl<boolean | null | undefined>,

		/** Whether click-tracking string should be included in the tags. */
		includeClickTracking: FormControl<boolean | null | undefined>,

		/** Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders are inserted in placement tags for this site. Publishers can then add keywords to those placeholders. */
		keywordOption: FormControl<TagSettingKeywordOption | null | undefined>,
	}
	export function CreateTagSettingFormGroup() {
		return new FormGroup<TagSettingFormProperties>({
			additionalKeyValues: new FormControl<string | null | undefined>(undefined),
			includeClickThroughUrls: new FormControl<boolean | null | undefined>(undefined),
			includeClickTracking: new FormControl<boolean | null | undefined>(undefined),
			keywordOption: new FormControl<TagSettingKeywordOption | null | undefined>(undefined),
		});

	}

	export enum TagSettingKeywordOption { PLACEHOLDER_WITH_LIST_OF_KEYWORDS = 0, IGNORE = 1, GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD = 2 }


	/** Video Settings */
	export interface VideoSettings {

		/** Companion Settings */
		companionSettings?: CompanionSetting;

		/** Duration of a video placement in seconds. */
		durationSeconds?: number | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoSettings". */
		kind?: string | null;

		/** Whether OBA icons are enabled for this placement. */
		obaEnabled?: boolean | null;

		/** Online Behavioral Advertiser icon. */
		obaSettings?: ObaIcon;

		/** Orientation of a video placement. If this value is set, placement will return assets matching the specified orientation. */
		orientation?: VideoSettingsOrientation | null;

		/** Publisher specification ID of a video placement. */
		publisherSpecificationId?: string | null;

		/** Skippable Settings */
		skippableSettings?: SkippableSetting;

		/** Transcode Settings */
		transcodeSettings?: TranscodeSetting;
	}

	/** Video Settings */
	export interface VideoSettingsFormProperties {

		/** Duration of a video placement in seconds. */
		durationSeconds: FormControl<number | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoSettings". */
		kind: FormControl<string | null | undefined>,

		/** Whether OBA icons are enabled for this placement. */
		obaEnabled: FormControl<boolean | null | undefined>,

		/** Orientation of a video placement. If this value is set, placement will return assets matching the specified orientation. */
		orientation: FormControl<VideoSettingsOrientation | null | undefined>,

		/** Publisher specification ID of a video placement. */
		publisherSpecificationId: FormControl<string | null | undefined>,
	}
	export function CreateVideoSettingsFormGroup() {
		return new FormGroup<VideoSettingsFormProperties>({
			durationSeconds: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			obaEnabled: new FormControl<boolean | null | undefined>(undefined),
			orientation: new FormControl<VideoSettingsOrientation | null | undefined>(undefined),
			publisherSpecificationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VideoSettingsOrientation { ANY = 0, LANDSCAPE = 1, PORTRAIT = 2 }


	/** Skippable Settings */
	export interface SkippableSetting {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#skippableSetting". */
		kind?: string | null;

		/** Video Offset */
		progressOffset?: VideoOffset;

		/** Video Offset */
		skipOffset?: VideoOffset;

		/** Whether the user can skip creatives served to this placement. */
		skippable?: boolean | null;
	}

	/** Skippable Settings */
	export interface SkippableSettingFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#skippableSetting". */
		kind: FormControl<string | null | undefined>,

		/** Whether the user can skip creatives served to this placement. */
		skippable: FormControl<boolean | null | undefined>,
	}
	export function CreateSkippableSettingFormGroup() {
		return new FormGroup<SkippableSettingFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			skippable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Transcode Settings */
	export interface TranscodeSetting {

		/** Allowlist of video formats to be served to this placement. Set this list to null or empty to serve all video formats. */
		enabledVideoFormats?: Array<number>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#transcodeSetting". */
		kind?: string | null;
	}

	/** Transcode Settings */
	export interface TranscodeSettingFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#transcodeSetting". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateTranscodeSettingFormGroup() {
		return new FormGroup<TranscodeSettingFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PlacementVpaidAdapterChoice { DEFAULT = 0, FLASH = 1, HTML5 = 2, BOTH = 3 }


	/** Contains properties of a package or roadblock. */
	export interface PlacementGroup {

		/** Account ID of this placement group. This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** Whether this placement group is active, inactive, archived or permanently archived. */
		activeStatus?: PlacementActiveStatus | null;

		/** Advertiser ID of this placement group. This is a required field on insertion. */
		advertiserId?: string | null;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Campaign ID of this placement group. This field is required on insertion. */
		campaignId?: string | null;

		/** Represents a DimensionValue resource. */
		campaignIdDimensionValue?: DimensionValue;

		/** IDs of placements which are assigned to this placement group. This is a read-only, auto-generated field. */
		childPlacementIds?: Array<string>;

		/** Comments for this placement group. */
		comment?: string | null;

		/** ID of the content category assigned to this placement group. */
		contentCategoryId?: string | null;

		/** Modification timestamp. */
		createInfo?: LastModifiedInfo;

		/** Directory site ID associated with this placement group. On insert, you must set either this field or the site_id field to specify the site associated with this placement group. This is a required field that is read-only after insertion. */
		directorySiteId?: string | null;

		/** Represents a DimensionValue resource. */
		directorySiteIdDimensionValue?: DimensionValue;

		/** External ID for this placement. */
		externalId?: string | null;

		/** ID of this placement group. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroup". */
		kind?: string | null;

		/** Modification timestamp. */
		lastModifiedInfo?: LastModifiedInfo;

		/** Name of this placement group. This is a required field and must be less than 256 characters long. */
		name?: string | null;

		/** Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. This field is required on insertion. */
		placementGroupType?: PlacementGroupPlacementGroupType | null;

		/** ID of the placement strategy assigned to this placement group. */
		placementStrategyId?: string | null;

		/** Pricing Schedule */
		pricingSchedule?: PricingSchedule;

		/** ID of the primary placement, used to calculate the media cost of a roadblock (placement group). Modifying this field will automatically modify the primary field on all affected roadblock child placements. */
		primaryPlacementId?: string | null;

		/** Represents a DimensionValue resource. */
		primaryPlacementIdDimensionValue?: DimensionValue;

		/** Site ID associated with this placement group. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement group. This is a required field that is read-only after insertion. */
		siteId?: string | null;

		/** Represents a DimensionValue resource. */
		siteIdDimensionValue?: DimensionValue;

		/** Subaccount ID of this placement group. This is a read-only field that can be left blank. */
		subaccountId?: string | null;
	}

	/** Contains properties of a package or roadblock. */
	export interface PlacementGroupFormProperties {

		/** Account ID of this placement group. This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** Whether this placement group is active, inactive, archived or permanently archived. */
		activeStatus: FormControl<PlacementActiveStatus | null | undefined>,

		/** Advertiser ID of this placement group. This is a required field on insertion. */
		advertiserId: FormControl<string | null | undefined>,

		/** Campaign ID of this placement group. This field is required on insertion. */
		campaignId: FormControl<string | null | undefined>,

		/** Comments for this placement group. */
		comment: FormControl<string | null | undefined>,

		/** ID of the content category assigned to this placement group. */
		contentCategoryId: FormControl<string | null | undefined>,

		/** Directory site ID associated with this placement group. On insert, you must set either this field or the site_id field to specify the site associated with this placement group. This is a required field that is read-only after insertion. */
		directorySiteId: FormControl<string | null | undefined>,

		/** External ID for this placement. */
		externalId: FormControl<string | null | undefined>,

		/** ID of this placement group. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroup". */
		kind: FormControl<string | null | undefined>,

		/** Name of this placement group. This is a required field and must be less than 256 characters long. */
		name: FormControl<string | null | undefined>,

		/** Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. This field is required on insertion. */
		placementGroupType: FormControl<PlacementGroupPlacementGroupType | null | undefined>,

		/** ID of the placement strategy assigned to this placement group. */
		placementStrategyId: FormControl<string | null | undefined>,

		/** ID of the primary placement, used to calculate the media cost of a roadblock (placement group). Modifying this field will automatically modify the primary field on all affected roadblock child placements. */
		primaryPlacementId: FormControl<string | null | undefined>,

		/** Site ID associated with this placement group. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement group. This is a required field that is read-only after insertion. */
		siteId: FormControl<string | null | undefined>,

		/** Subaccount ID of this placement group. This is a read-only field that can be left blank. */
		subaccountId: FormControl<string | null | undefined>,
	}
	export function CreatePlacementGroupFormGroup() {
		return new FormGroup<PlacementGroupFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			activeStatus: new FormControl<PlacementActiveStatus | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			campaignId: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			contentCategoryId: new FormControl<string | null | undefined>(undefined),
			directorySiteId: new FormControl<string | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			placementGroupType: new FormControl<PlacementGroupPlacementGroupType | null | undefined>(undefined),
			placementStrategyId: new FormControl<string | null | undefined>(undefined),
			primaryPlacementId: new FormControl<string | null | undefined>(undefined),
			siteId: new FormControl<string | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PlacementGroupPlacementGroupType { PLACEMENT_PACKAGE = 0, PLACEMENT_ROADBLOCK = 1 }


	/** Placement Group List Response */
	export interface PlacementGroupsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroupsListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;

		/** Placement group collection. */
		placementGroups?: Array<PlacementGroup>;
	}

	/** Placement Group List Response */
	export interface PlacementGroupsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroupsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreatePlacementGroupsListResponseFormGroup() {
		return new FormGroup<PlacementGroupsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placement Strategy List Response */
	export interface PlacementStrategiesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategiesListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;

		/** Placement strategy collection. */
		placementStrategies?: Array<PlacementStrategy>;
	}

	/** Placement Strategy List Response */
	export interface PlacementStrategiesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategiesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreatePlacementStrategiesListResponseFormGroup() {
		return new FormGroup<PlacementStrategiesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a placement strategy. */
	export interface PlacementStrategy {

		/** Account ID of this placement strategy.This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** ID of this placement strategy. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategy". */
		kind?: string | null;

		/** Name of this placement strategy. This is a required field. It must be less than 256 characters long and unique among placement strategies of the same account. */
		name?: string | null;
	}

	/** Contains properties of a placement strategy. */
	export interface PlacementStrategyFormProperties {

		/** Account ID of this placement strategy.This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** ID of this placement strategy. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategy". */
		kind: FormControl<string | null | undefined>,

		/** Name of this placement strategy. This is a required field. It must be less than 256 characters long and unique among placement strategies of the same account. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePlacementStrategyFormGroup() {
		return new FormGroup<PlacementStrategyFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placement Tag */
	export interface PlacementTag {

		/** Placement ID */
		placementId?: string | null;

		/** Tags generated for this placement. */
		tagDatas?: Array<TagData>;
	}

	/** Placement Tag */
	export interface PlacementTagFormProperties {

		/** Placement ID */
		placementId: FormControl<string | null | undefined>,
	}
	export function CreatePlacementTagFormGroup() {
		return new FormGroup<PlacementTagFormProperties>({
			placementId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placement Tag Data */
	export interface TagData {

		/** Ad associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING. */
		adId?: string | null;

		/** Tag string to record a click. */
		clickTag?: string | null;

		/** Creative associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING. */
		creativeId?: string | null;

		/** TagData tag format of this tag. */
		format?: TagDataFormat | null;

		/** Tag string for serving an ad. */
		impressionTag?: string | null;
	}

	/** Placement Tag Data */
	export interface TagDataFormProperties {

		/** Ad associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING. */
		adId: FormControl<string | null | undefined>,

		/** Tag string to record a click. */
		clickTag: FormControl<string | null | undefined>,

		/** Creative associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING. */
		creativeId: FormControl<string | null | undefined>,

		/** TagData tag format of this tag. */
		format: FormControl<TagDataFormat | null | undefined>,

		/** Tag string for serving an ad. */
		impressionTag: FormControl<string | null | undefined>,
	}
	export function CreateTagDataFormGroup() {
		return new FormGroup<TagDataFormProperties>({
			adId: new FormControl<string | null | undefined>(undefined),
			clickTag: new FormControl<string | null | undefined>(undefined),
			creativeId: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<TagDataFormat | null | undefined>(undefined),
			impressionTag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TagDataFormat { PLACEMENT_TAG_STANDARD = 0, PLACEMENT_TAG_IFRAME_JAVASCRIPT = 1, PLACEMENT_TAG_IFRAME_ILAYER = 2, PLACEMENT_TAG_INTERNAL_REDIRECT = 3, PLACEMENT_TAG_JAVASCRIPT = 4, PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT = 5, PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT = 6, PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT = 7, PLACEMENT_TAG_CLICK_COMMANDS = 8, PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH = 9, PLACEMENT_TAG_TRACKING = 10, PLACEMENT_TAG_TRACKING_IFRAME = 11, PLACEMENT_TAG_TRACKING_JAVASCRIPT = 12, PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3 = 13, PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY = 14, PLACEMENT_TAG_JAVASCRIPT_LEGACY = 15, PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY = 16, PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY = 17, PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4 = 18, PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT = 19 }


	/** Placement GenerateTags Response */
	export interface PlacementsGenerateTagsResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsGenerateTagsResponse". */
		kind?: string | null;

		/** Set of generated tags for the specified placements. */
		placementTags?: Array<PlacementTag>;
	}

	/** Placement GenerateTags Response */
	export interface PlacementsGenerateTagsResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsGenerateTagsResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePlacementsGenerateTagsResponseFormGroup() {
		return new FormGroup<PlacementsGenerateTagsResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Placement List Response */
	export interface PlacementsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;

		/** Placement collection. */
		placements?: Array<Placement>;
	}

	/** Placement List Response */
	export interface PlacementsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreatePlacementsListResponseFormGroup() {
		return new FormGroup<PlacementsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Platform Type List Response */
	export interface PlatformTypesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformTypesListResponse". */
		kind?: string | null;

		/** Platform type collection. */
		platformTypes?: Array<PlatformType>;
	}

	/** Platform Type List Response */
	export interface PlatformTypesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformTypesListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePlatformTypesListResponseFormGroup() {
		return new FormGroup<PlatformTypesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Postal Code List Response */
	export interface PostalCodesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCodesListResponse". */
		kind?: string | null;

		/** Postal code collection. */
		postalCodes?: Array<PostalCode>;
	}

	/** Postal Code List Response */
	export interface PostalCodesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCodesListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePostalCodesListResponseFormGroup() {
		return new FormGroup<PostalCodesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a Planning project. */
	export interface Project {

		/** Account ID of this project. */
		accountId?: string | null;

		/** Advertiser ID of this project. */
		advertiserId?: string | null;

		/** Audience age group of this project. */
		audienceAgeGroup?: ProjectAudienceAgeGroup | null;

		/** Audience gender of this project. */
		audienceGender?: ProjectAudienceGender | null;

		/** Budget of this project in the currency specified by the current account. The value stored in this field represents only the non-fractional amount. For example, for USD, the smallest value that can be represented by this field is 1 US dollar. */
		budget?: string | null;

		/** Client billing code of this project. */
		clientBillingCode?: string | null;

		/** Name of the project client. */
		clientName?: string | null;
		endDate?: Date | null;

		/** ID of this project. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#project". */
		kind?: string | null;

		/** Modification timestamp. */
		lastModifiedInfo?: LastModifiedInfo;

		/** Name of this project. */
		name?: string | null;

		/** Overview of this project. */
		overview?: string | null;
		startDate?: Date | null;

		/** Subaccount ID of this project. */
		subaccountId?: string | null;

		/** Number of clicks that the advertiser is targeting. */
		targetClicks?: string | null;

		/** Number of conversions that the advertiser is targeting. */
		targetConversions?: string | null;

		/** CPA that the advertiser is targeting. */
		targetCpaNanos?: string | null;

		/** CPC that the advertiser is targeting. */
		targetCpcNanos?: string | null;

		/** vCPM from Active View that the advertiser is targeting. */
		targetCpmActiveViewNanos?: string | null;

		/** CPM that the advertiser is targeting. */
		targetCpmNanos?: string | null;

		/** Number of impressions that the advertiser is targeting. */
		targetImpressions?: string | null;
	}

	/** Contains properties of a Planning project. */
	export interface ProjectFormProperties {

		/** Account ID of this project. */
		accountId: FormControl<string | null | undefined>,

		/** Advertiser ID of this project. */
		advertiserId: FormControl<string | null | undefined>,

		/** Audience age group of this project. */
		audienceAgeGroup: FormControl<ProjectAudienceAgeGroup | null | undefined>,

		/** Audience gender of this project. */
		audienceGender: FormControl<ProjectAudienceGender | null | undefined>,

		/** Budget of this project in the currency specified by the current account. The value stored in this field represents only the non-fractional amount. For example, for USD, the smallest value that can be represented by this field is 1 US dollar. */
		budget: FormControl<string | null | undefined>,

		/** Client billing code of this project. */
		clientBillingCode: FormControl<string | null | undefined>,

		/** Name of the project client. */
		clientName: FormControl<string | null | undefined>,
		endDate: FormControl<Date | null | undefined>,

		/** ID of this project. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#project". */
		kind: FormControl<string | null | undefined>,

		/** Name of this project. */
		name: FormControl<string | null | undefined>,

		/** Overview of this project. */
		overview: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,

		/** Subaccount ID of this project. */
		subaccountId: FormControl<string | null | undefined>,

		/** Number of clicks that the advertiser is targeting. */
		targetClicks: FormControl<string | null | undefined>,

		/** Number of conversions that the advertiser is targeting. */
		targetConversions: FormControl<string | null | undefined>,

		/** CPA that the advertiser is targeting. */
		targetCpaNanos: FormControl<string | null | undefined>,

		/** CPC that the advertiser is targeting. */
		targetCpcNanos: FormControl<string | null | undefined>,

		/** vCPM from Active View that the advertiser is targeting. */
		targetCpmActiveViewNanos: FormControl<string | null | undefined>,

		/** CPM that the advertiser is targeting. */
		targetCpmNanos: FormControl<string | null | undefined>,

		/** Number of impressions that the advertiser is targeting. */
		targetImpressions: FormControl<string | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			audienceAgeGroup: new FormControl<ProjectAudienceAgeGroup | null | undefined>(undefined),
			audienceGender: new FormControl<ProjectAudienceGender | null | undefined>(undefined),
			budget: new FormControl<string | null | undefined>(undefined),
			clientBillingCode: new FormControl<string | null | undefined>(undefined),
			clientName: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			overview: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
			targetClicks: new FormControl<string | null | undefined>(undefined),
			targetConversions: new FormControl<string | null | undefined>(undefined),
			targetCpaNanos: new FormControl<string | null | undefined>(undefined),
			targetCpcNanos: new FormControl<string | null | undefined>(undefined),
			targetCpmActiveViewNanos: new FormControl<string | null | undefined>(undefined),
			targetCpmNanos: new FormControl<string | null | undefined>(undefined),
			targetImpressions: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProjectAudienceAgeGroup { PLANNING_AUDIENCE_AGE_18_24 = 0, PLANNING_AUDIENCE_AGE_25_34 = 1, PLANNING_AUDIENCE_AGE_35_44 = 2, PLANNING_AUDIENCE_AGE_45_54 = 3, PLANNING_AUDIENCE_AGE_55_64 = 4, PLANNING_AUDIENCE_AGE_65_OR_MORE = 5, PLANNING_AUDIENCE_AGE_UNKNOWN = 6 }

	export enum ProjectAudienceGender { PLANNING_AUDIENCE_GENDER_MALE = 0, PLANNING_AUDIENCE_GENDER_FEMALE = 1 }


	/** Project List Response */
	export interface ProjectsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#projectsListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;

		/** Project collection. */
		projects?: Array<Project>;
	}

	/** Project List Response */
	export interface ProjectsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#projectsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateProjectsListResponseFormGroup() {
		return new FormGroup<ProjectsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a recipient. */
	export interface Recipient {

		/** The delivery type for the recipient. */
		deliveryType?: RecipientDeliveryType | null;

		/** The email address of the recipient. */
		email?: string | null;

		/** The kind of resource this is, in this case dfareporting#recipient. */
		kind?: string | null;
	}

	/** Represents a recipient. */
	export interface RecipientFormProperties {

		/** The delivery type for the recipient. */
		deliveryType: FormControl<RecipientDeliveryType | null | undefined>,

		/** The email address of the recipient. */
		email: FormControl<string | null | undefined>,

		/** The kind of resource this is, in this case dfareporting#recipient. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateRecipientFormGroup() {
		return new FormGroup<RecipientFormProperties>({
			deliveryType: new FormControl<RecipientDeliveryType | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RecipientDeliveryType { LINK = 0, ATTACHMENT = 1 }


	/** Region List Response */
	export interface RegionsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#regionsListResponse". */
		kind?: string | null;

		/** Region collection. */
		regions?: Array<Region>;
	}

	/** Region List Response */
	export interface RegionsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#regionsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateRegionsListResponseFormGroup() {
		return new FormGroup<RegionsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that are shared to your advertiser or account, use the TargetableRemarketingLists resource. */
	export interface RemarketingList {

		/** Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
		accountId?: string | null;

		/** Whether this remarketing list is active. */
		active?: boolean | null;

		/** Dimension value for the advertiser ID that owns this remarketing list. This is a required field. */
		advertiserId?: string | null;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Remarketing list description. */
		description?: string | null;

		/** Remarketing list ID. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingList". */
		kind?: string | null;

		/** Number of days that a user should remain in the remarketing list without an impression. Acceptable values are 1 to 540, inclusive. */
		lifeSpan?: string | null;

		/** Remarketing List Population Rule. */
		listPopulationRule?: ListPopulationRule;

		/** Number of users currently in the list. This is a read-only field. */
		listSize?: string | null;

		/** Product from which this remarketing list was originated. */
		listSource?: RemarketingListListSource | null;

		/** Name of the remarketing list. This is a required field. Must be no greater than 128 characters long. */
		name?: string | null;

		/** Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
		subaccountId?: string | null;
	}

	/** Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that are shared to your advertiser or account, use the TargetableRemarketingLists resource. */
	export interface RemarketingListFormProperties {

		/** Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
		accountId: FormControl<string | null | undefined>,

		/** Whether this remarketing list is active. */
		active: FormControl<boolean | null | undefined>,

		/** Dimension value for the advertiser ID that owns this remarketing list. This is a required field. */
		advertiserId: FormControl<string | null | undefined>,

		/** Remarketing list description. */
		description: FormControl<string | null | undefined>,

		/** Remarketing list ID. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingList". */
		kind: FormControl<string | null | undefined>,

		/** Number of days that a user should remain in the remarketing list without an impression. Acceptable values are 1 to 540, inclusive. */
		lifeSpan: FormControl<string | null | undefined>,

		/** Number of users currently in the list. This is a read-only field. */
		listSize: FormControl<string | null | undefined>,

		/** Product from which this remarketing list was originated. */
		listSource: FormControl<RemarketingListListSource | null | undefined>,

		/** Name of the remarketing list. This is a required field. Must be no greater than 128 characters long. */
		name: FormControl<string | null | undefined>,

		/** Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
		subaccountId: FormControl<string | null | undefined>,
	}
	export function CreateRemarketingListFormGroup() {
		return new FormGroup<RemarketingListFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lifeSpan: new FormControl<string | null | undefined>(undefined),
			listSize: new FormControl<string | null | undefined>(undefined),
			listSource: new FormControl<RemarketingListListSource | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RemarketingListListSource { REMARKETING_LIST_SOURCE_OTHER = 0, REMARKETING_LIST_SOURCE_ADX = 1, REMARKETING_LIST_SOURCE_DFP = 2, REMARKETING_LIST_SOURCE_XFP = 3, REMARKETING_LIST_SOURCE_DFA = 4, REMARKETING_LIST_SOURCE_GA = 5, REMARKETING_LIST_SOURCE_YOUTUBE = 6, REMARKETING_LIST_SOURCE_DBM = 7, REMARKETING_LIST_SOURCE_GPLUS = 8, REMARKETING_LIST_SOURCE_DMP = 9, REMARKETING_LIST_SOURCE_PLAY_STORE = 10 }


	/** Contains properties of a remarketing list's sharing information. Sharing allows other accounts or advertisers to target to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and advertisers. */
	export interface RemarketingListShare {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListShare". */
		kind?: string | null;

		/** Remarketing list ID. This is a read-only, auto-generated field. */
		remarketingListId?: string | null;

		/** Accounts that the remarketing list is shared with. */
		sharedAccountIds?: Array<string>;

		/** Advertisers that the remarketing list is shared with. */
		sharedAdvertiserIds?: Array<string>;
	}

	/** Contains properties of a remarketing list's sharing information. Sharing allows other accounts or advertisers to target to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and advertisers. */
	export interface RemarketingListShareFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListShare". */
		kind: FormControl<string | null | undefined>,

		/** Remarketing list ID. This is a read-only, auto-generated field. */
		remarketingListId: FormControl<string | null | undefined>,
	}
	export function CreateRemarketingListShareFormGroup() {
		return new FormGroup<RemarketingListShareFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			remarketingListId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Remarketing list response */
	export interface RemarketingListsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListsListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;

		/** Remarketing list collection. */
		remarketingLists?: Array<RemarketingList>;
	}

	/** Remarketing list response */
	export interface RemarketingListsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateRemarketingListsListResponseFormGroup() {
		return new FormGroup<RemarketingListsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Report resource. */
	export interface Report {

		/** The account ID to which this report belongs. */
		accountId?: string | null;

		/** The report criteria for a report of type "STANDARD". */
		criteria?: ReportCriteria;

		/** The report criteria for a report of type "CROSS_DIMENSION_REACH". */
		crossDimensionReachCriteria?: ReportCrossDimensionReachCriteria;

		/** The report's email delivery settings. */
		delivery?: ReportDelivery;

		/** The eTag of this response for caching purposes. */
		etag?: string | null;

		/** The filename used when generating report files for this report. */
		fileName?: string | null;

		/** The report criteria for a report of type "FLOODLIGHT". */
		floodlightCriteria?: ReportFloodlightCriteria;

		/** The output format of the report. If not specified, default format is "CSV". Note that the actual format in the completed report file might differ if for instance the report's size exceeds the format's capabilities. "CSV" will then be the fallback format. */
		format?: FileFormat | null;

		/** The unique ID identifying this report resource. */
		id?: string | null;

		/** The kind of resource this is, in this case dfareporting#report. */
		kind?: string | null;

		/** The timestamp (in milliseconds since epoch) of when this report was last modified. */
		lastModifiedTime?: string | null;

		/** The name of the report. */
		name?: string | null;

		/** The user profile id of the owner of this report. */
		ownerProfileId?: string | null;

		/** The report criteria for a report of type "PATH_ATTRIBUTION". */
		pathAttributionCriteria?: ReportPathAttributionCriteria;

		/** The report criteria for a report of type "PATH". */
		pathCriteria?: ReportPathCriteria;

		/** The report criteria for a report of type "PATH_TO_CONVERSION". */
		pathToConversionCriteria?: ReportPathToConversionCriteria;

		/** The report criteria for a report of type "REACH". */
		reachCriteria?: ReportReachCriteria;

		/** The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY". */
		schedule?: ReportSchedule;

		/** The subaccount ID to which this report belongs if applicable. */
		subAccountId?: string | null;

		/** The type of the report. */
		type?: ReportType | null;
	}

	/** Represents a Report resource. */
	export interface ReportFormProperties {

		/** The account ID to which this report belongs. */
		accountId: FormControl<string | null | undefined>,

		/** The eTag of this response for caching purposes. */
		etag: FormControl<string | null | undefined>,

		/** The filename used when generating report files for this report. */
		fileName: FormControl<string | null | undefined>,

		/** The output format of the report. If not specified, default format is "CSV". Note that the actual format in the completed report file might differ if for instance the report's size exceeds the format's capabilities. "CSV" will then be the fallback format. */
		format: FormControl<FileFormat | null | undefined>,

		/** The unique ID identifying this report resource. */
		id: FormControl<string | null | undefined>,

		/** The kind of resource this is, in this case dfareporting#report. */
		kind: FormControl<string | null | undefined>,

		/** The timestamp (in milliseconds since epoch) of when this report was last modified. */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** The name of the report. */
		name: FormControl<string | null | undefined>,

		/** The user profile id of the owner of this report. */
		ownerProfileId: FormControl<string | null | undefined>,

		/** The subaccount ID to which this report belongs if applicable. */
		subAccountId: FormControl<string | null | undefined>,

		/** The type of the report. */
		type: FormControl<ReportType | null | undefined>,
	}
	export function CreateReportFormGroup() {
		return new FormGroup<ReportFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<FileFormat | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ownerProfileId: new FormControl<string | null | undefined>(undefined),
			subAccountId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ReportType | null | undefined>(undefined),
		});

	}

	export interface ReportCriteria {

		/** Represents an activity group. */
		activities?: Activities;

		/** Represents a Custom Rich Media Events group. */
		customRichMediaEvents?: CustomRichMediaEvents;

		/** Represents a date range. */
		dateRange?: DateRange;

		/** The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed. */
		dimensionFilters?: Array<DimensionValue>;

		/** The list of standard dimensions the report should include. */
		dimensions?: Array<SortedDimension>;

		/** The list of names of metrics the report should include. */
		metricNames?: Array<string>;
	}
	export interface ReportCriteriaFormProperties {
	}
	export function CreateReportCriteriaFormGroup() {
		return new FormGroup<ReportCriteriaFormProperties>({
		});

	}


	/** Represents a sorted dimension. */
	export interface SortedDimension {

		/** The kind of resource this is, in this case dfareporting#sortedDimension. */
		kind?: string | null;

		/** The name of the dimension. */
		name?: string | null;

		/** An optional sort order for the dimension column. */
		sortOrder?: SortedDimensionSortOrder | null;
	}

	/** Represents a sorted dimension. */
	export interface SortedDimensionFormProperties {

		/** The kind of resource this is, in this case dfareporting#sortedDimension. */
		kind: FormControl<string | null | undefined>,

		/** The name of the dimension. */
		name: FormControl<string | null | undefined>,

		/** An optional sort order for the dimension column. */
		sortOrder: FormControl<SortedDimensionSortOrder | null | undefined>,
	}
	export function CreateSortedDimensionFormGroup() {
		return new FormGroup<SortedDimensionFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<SortedDimensionSortOrder | null | undefined>(undefined),
		});

	}

	export enum SortedDimensionSortOrder { ASCENDING = 0, DESCENDING = 1 }

	export interface ReportCrossDimensionReachCriteria {

		/** The list of dimensions the report should include. */
		breakdown?: Array<SortedDimension>;

		/** Represents a date range. */
		dateRange?: DateRange;

		/** The dimension option. */
		dimension?: ReportCrossDimensionReachCriteriaDimension | null;

		/** The list of filters on which dimensions are filtered. */
		dimensionFilters?: Array<DimensionValue>;

		/** The list of names of metrics the report should include. */
		metricNames?: Array<string>;

		/** The list of names of overlap metrics the report should include. */
		overlapMetricNames?: Array<string>;

		/** Whether the report is pivoted or not. Defaults to true. */
		pivoted?: boolean | null;
	}
	export interface ReportCrossDimensionReachCriteriaFormProperties {

		/** The dimension option. */
		dimension: FormControl<ReportCrossDimensionReachCriteriaDimension | null | undefined>,

		/** Whether the report is pivoted or not. Defaults to true. */
		pivoted: FormControl<boolean | null | undefined>,
	}
	export function CreateReportCrossDimensionReachCriteriaFormGroup() {
		return new FormGroup<ReportCrossDimensionReachCriteriaFormProperties>({
			dimension: new FormControl<ReportCrossDimensionReachCriteriaDimension | null | undefined>(undefined),
			pivoted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ReportCrossDimensionReachCriteriaDimension { ADVERTISER = 0, CAMPAIGN = 1, SITE_BY_ADVERTISER = 2, SITE_BY_CAMPAIGN = 3 }

	export interface ReportDelivery {

		/** Whether the report should be emailed to the report owner. */
		emailOwner?: boolean | null;

		/** The type of delivery for the owner to receive, if enabled. */
		emailOwnerDeliveryType?: RecipientDeliveryType | null;

		/** The message to be sent with each email. */
		message?: string | null;

		/** The list of recipients to which to email the report. */
		recipients?: Array<Recipient>;
	}
	export interface ReportDeliveryFormProperties {

		/** Whether the report should be emailed to the report owner. */
		emailOwner: FormControl<boolean | null | undefined>,

		/** The type of delivery for the owner to receive, if enabled. */
		emailOwnerDeliveryType: FormControl<RecipientDeliveryType | null | undefined>,

		/** The message to be sent with each email. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateReportDeliveryFormGroup() {
		return new FormGroup<ReportDeliveryFormProperties>({
			emailOwner: new FormControl<boolean | null | undefined>(undefined),
			emailOwnerDeliveryType: new FormControl<RecipientDeliveryType | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportFloodlightCriteria {

		/** The list of custom rich media events to include. */
		customRichMediaEvents?: Array<DimensionValue>;

		/** Represents a date range. */
		dateRange?: DateRange;

		/** The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed. */
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
	export interface ReportFloodlightCriteriaFormProperties {
	}
	export function CreateReportFloodlightCriteriaFormGroup() {
		return new FormGroup<ReportFloodlightCriteriaFormProperties>({
		});

	}

	export interface ReportFloodlightCriteriaReportProperties {

		/** Include conversions that have no cookie, but do have an exposure path. */
		includeAttributedIPConversions?: boolean | null;

		/** Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window. */
		includeUnattributedCookieConversions?: boolean | null;

		/** Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion. */
		includeUnattributedIPConversions?: boolean | null;
	}
	export interface ReportFloodlightCriteriaReportPropertiesFormProperties {

		/** Include conversions that have no cookie, but do have an exposure path. */
		includeAttributedIPConversions: FormControl<boolean | null | undefined>,

		/** Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window. */
		includeUnattributedCookieConversions: FormControl<boolean | null | undefined>,

		/** Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion. */
		includeUnattributedIPConversions: FormControl<boolean | null | undefined>,
	}
	export function CreateReportFloodlightCriteriaReportPropertiesFormGroup() {
		return new FormGroup<ReportFloodlightCriteriaReportPropertiesFormProperties>({
			includeAttributedIPConversions: new FormControl<boolean | null | undefined>(undefined),
			includeUnattributedCookieConversions: new FormControl<boolean | null | undefined>(undefined),
			includeUnattributedIPConversions: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ReportPathAttributionCriteria {

		/** The list of 'dfa:activity' values to filter on. */
		activityFilters?: Array<DimensionValue>;

		/** Represents a DfaReporting channel grouping. */
		customChannelGrouping?: ChannelGrouping;

		/** Represents a date range. */
		dateRange?: DateRange;

		/** The list of dimensions the report should include. */
		dimensions?: Array<SortedDimension>;

		/** Represents a DimensionValue resource. */
		floodlightConfigId?: DimensionValue;

		/** The list of names of metrics the report should include. */
		metricNames?: Array<string>;

		/** Path Filters. */
		pathFilters?: Array<PathFilter>;
	}
	export interface ReportPathAttributionCriteriaFormProperties {
	}
	export function CreateReportPathAttributionCriteriaFormGroup() {
		return new FormGroup<ReportPathAttributionCriteriaFormProperties>({
		});

	}

	export interface ReportPathCriteria {

		/** The list of 'dfa:activity' values to filter on. */
		activityFilters?: Array<DimensionValue>;

		/** Represents a DfaReporting channel grouping. */
		customChannelGrouping?: ChannelGrouping;

		/** Represents a date range. */
		dateRange?: DateRange;

		/** The list of dimensions the report should include. */
		dimensions?: Array<SortedDimension>;

		/** Represents a DimensionValue resource. */
		floodlightConfigId?: DimensionValue;

		/** The list of names of metrics the report should include. */
		metricNames?: Array<string>;

		/** Path Filters. */
		pathFilters?: Array<PathFilter>;
	}
	export interface ReportPathCriteriaFormProperties {
	}
	export function CreateReportPathCriteriaFormGroup() {
		return new FormGroup<ReportPathCriteriaFormProperties>({
		});

	}

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
	export interface ReportPathToConversionCriteriaFormProperties {
	}
	export function CreateReportPathToConversionCriteriaFormGroup() {
		return new FormGroup<ReportPathToConversionCriteriaFormProperties>({
		});

	}

	export interface ReportPathToConversionCriteriaReportProperties {

		/** CM360 checks to see if a click interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90. */
		clicksLookbackWindow?: number | null;

		/** CM360 checks to see if an impression interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90. */
		impressionsLookbackWindow?: number | null;

		/** Deprecated: has no effect. */
		includeAttributedIPConversions?: boolean | null;

		/** Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window. */
		includeUnattributedCookieConversions?: boolean | null;

		/** Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion. */
		includeUnattributedIPConversions?: boolean | null;

		/** The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report. */
		maximumClickInteractions?: number | null;

		/** The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report. */
		maximumImpressionInteractions?: number | null;

		/** The maximum amount of time that can take place between interactions (clicks or impressions) by the same user. Valid values: 1-90. */
		maximumInteractionGap?: number | null;

		/** Enable pivoting on interaction path. */
		pivotOnInteractionPath?: boolean | null;
	}
	export interface ReportPathToConversionCriteriaReportPropertiesFormProperties {

		/** CM360 checks to see if a click interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90. */
		clicksLookbackWindow: FormControl<number | null | undefined>,

		/** CM360 checks to see if an impression interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90. */
		impressionsLookbackWindow: FormControl<number | null | undefined>,

		/** Deprecated: has no effect. */
		includeAttributedIPConversions: FormControl<boolean | null | undefined>,

		/** Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window. */
		includeUnattributedCookieConversions: FormControl<boolean | null | undefined>,

		/** Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion. */
		includeUnattributedIPConversions: FormControl<boolean | null | undefined>,

		/** The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report. */
		maximumClickInteractions: FormControl<number | null | undefined>,

		/** The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report. */
		maximumImpressionInteractions: FormControl<number | null | undefined>,

		/** The maximum amount of time that can take place between interactions (clicks or impressions) by the same user. Valid values: 1-90. */
		maximumInteractionGap: FormControl<number | null | undefined>,

		/** Enable pivoting on interaction path. */
		pivotOnInteractionPath: FormControl<boolean | null | undefined>,
	}
	export function CreateReportPathToConversionCriteriaReportPropertiesFormGroup() {
		return new FormGroup<ReportPathToConversionCriteriaReportPropertiesFormProperties>({
			clicksLookbackWindow: new FormControl<number | null | undefined>(undefined),
			impressionsLookbackWindow: new FormControl<number | null | undefined>(undefined),
			includeAttributedIPConversions: new FormControl<boolean | null | undefined>(undefined),
			includeUnattributedCookieConversions: new FormControl<boolean | null | undefined>(undefined),
			includeUnattributedIPConversions: new FormControl<boolean | null | undefined>(undefined),
			maximumClickInteractions: new FormControl<number | null | undefined>(undefined),
			maximumImpressionInteractions: new FormControl<number | null | undefined>(undefined),
			maximumInteractionGap: new FormControl<number | null | undefined>(undefined),
			pivotOnInteractionPath: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ReportReachCriteria {

		/** Represents an activity group. */
		activities?: Activities;

		/** Represents a Custom Rich Media Events group. */
		customRichMediaEvents?: CustomRichMediaEvents;

		/** Represents a date range. */
		dateRange?: DateRange;

		/** The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed. */
		dimensionFilters?: Array<DimensionValue>;

		/** The list of dimensions the report should include. */
		dimensions?: Array<SortedDimension>;

		/** Whether to enable all reach dimension combinations in the report. Defaults to false. If enabled, the date range of the report should be within the last 42 days. */
		enableAllDimensionCombinations?: boolean | null;

		/** The list of names of metrics the report should include. */
		metricNames?: Array<string>;

		/** The list of names of Reach By Frequency metrics the report should include. */
		reachByFrequencyMetricNames?: Array<string>;
	}
	export interface ReportReachCriteriaFormProperties {

		/** Whether to enable all reach dimension combinations in the report. Defaults to false. If enabled, the date range of the report should be within the last 42 days. */
		enableAllDimensionCombinations: FormControl<boolean | null | undefined>,
	}
	export function CreateReportReachCriteriaFormGroup() {
		return new FormGroup<ReportReachCriteriaFormProperties>({
			enableAllDimensionCombinations: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ReportSchedule {

		/** Whether the schedule is active or not. Must be set to either true or false. */
		active?: boolean | null;

		/** Defines every how many days, weeks or months the report should be run. Needs to be set when "repeats" is either "DAILY", "WEEKLY" or "MONTHLY". */
		every?: number | null;
		expirationDate?: Date | null;

		/** The interval for which the report is repeated. Note: - "DAILY" also requires field "every" to be set. - "WEEKLY" also requires fields "every" and "repeatsOnWeekDays" to be set. - "MONTHLY" also requires fields "every" and "runsOnDayOfMonth" to be set. */
		repeats?: string | null;

		/** List of week days "WEEKLY" on which scheduled reports should run. */
		repeatsOnWeekDays?: Array<string>;

		/** Enum to define for "MONTHLY" scheduled reports whether reports should be repeated on the same day of the month as "startDate" or the same day of the week of the month. Example: If 'startDate' is Monday, April 2nd 2012 (2012-04-02), "DAY_OF_MONTH" would run subsequent reports on the 2nd of every Month, and "WEEK_OF_MONTH" would run subsequent reports on the first Monday of the month. */
		runsOnDayOfMonth?: ReportScheduleRunsOnDayOfMonth | null;
		startDate?: Date | null;

		/** The timezone when the report will run. */
		timezone?: string | null;
	}
	export interface ReportScheduleFormProperties {

		/** Whether the schedule is active or not. Must be set to either true or false. */
		active: FormControl<boolean | null | undefined>,

		/** Defines every how many days, weeks or months the report should be run. Needs to be set when "repeats" is either "DAILY", "WEEKLY" or "MONTHLY". */
		every: FormControl<number | null | undefined>,
		expirationDate: FormControl<Date | null | undefined>,

		/** The interval for which the report is repeated. Note: - "DAILY" also requires field "every" to be set. - "WEEKLY" also requires fields "every" and "repeatsOnWeekDays" to be set. - "MONTHLY" also requires fields "every" and "runsOnDayOfMonth" to be set. */
		repeats: FormControl<string | null | undefined>,

		/** Enum to define for "MONTHLY" scheduled reports whether reports should be repeated on the same day of the month as "startDate" or the same day of the week of the month. Example: If 'startDate' is Monday, April 2nd 2012 (2012-04-02), "DAY_OF_MONTH" would run subsequent reports on the 2nd of every Month, and "WEEK_OF_MONTH" would run subsequent reports on the first Monday of the month. */
		runsOnDayOfMonth: FormControl<ReportScheduleRunsOnDayOfMonth | null | undefined>,
		startDate: FormControl<Date | null | undefined>,

		/** The timezone when the report will run. */
		timezone: FormControl<string | null | undefined>,
	}
	export function CreateReportScheduleFormGroup() {
		return new FormGroup<ReportScheduleFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			every: new FormControl<number | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			repeats: new FormControl<string | null | undefined>(undefined),
			runsOnDayOfMonth: new FormControl<ReportScheduleRunsOnDayOfMonth | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReportScheduleRunsOnDayOfMonth { DAY_OF_MONTH = 0, WEEK_OF_MONTH = 1 }

	export enum ReportType { STANDARD = 0, REACH = 1, PATH_TO_CONVERSION = 2, CROSS_DIMENSION_REACH = 3, FLOODLIGHT = 4, PATH = 5, PATH_ATTRIBUTION = 6 }


	/** Represents the list of reports. */
	export interface ReportList {

		/** The eTag of this response for caching purposes. */
		etag?: string | null;

		/** The reports returned in this response. */
		items?: Array<Report>;

		/** The kind of list this is, in this case dfareporting#reportList. */
		kind?: string | null;

		/** Continuation token used to page through reports. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. */
		nextPageToken?: string | null;
	}

	/** Represents the list of reports. */
	export interface ReportListFormProperties {

		/** The eTag of this response for caching purposes. */
		etag: FormControl<string | null | undefined>,

		/** The kind of list this is, in this case dfareporting#reportList. */
		kind: FormControl<string | null | undefined>,

		/** Continuation token used to page through reports. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateReportListFormGroup() {
		return new FormGroup<ReportListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a site. */
	export interface Site {

		/** Account ID of this site. This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** Whether this site is approved. */
		approved?: boolean | null;

		/** Directory site associated with this site. This is a required field that is read-only after insertion. */
		directorySiteId?: string | null;

		/** Represents a DimensionValue resource. */
		directorySiteIdDimensionValue?: DimensionValue;

		/** ID of this site. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Represents a DimensionValue resource. */
		idDimensionValue?: DimensionValue;

		/** Key name of this site. This is a read-only, auto-generated field. */
		keyName?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#site". */
		kind?: string | null;

		/** Name of this site.This is a required field. Must be less than 128 characters long. If this site is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this site is a top-level site, and the name must be unique among top-level sites of the same account. */
		name?: string | null;

		/** Site contacts. */
		siteContacts?: Array<SiteContact>;

		/** Site Settings */
		siteSettings?: SiteSettings;

		/** Subaccount ID of this site. This is a read-only field that can be left blank. */
		subaccountId?: string | null;

		/** Video Settings */
		videoSettings?: SiteVideoSettings;
	}

	/** Contains properties of a site. */
	export interface SiteFormProperties {

		/** Account ID of this site. This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** Whether this site is approved. */
		approved: FormControl<boolean | null | undefined>,

		/** Directory site associated with this site. This is a required field that is read-only after insertion. */
		directorySiteId: FormControl<string | null | undefined>,

		/** ID of this site. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Key name of this site. This is a read-only, auto-generated field. */
		keyName: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#site". */
		kind: FormControl<string | null | undefined>,

		/** Name of this site.This is a required field. Must be less than 128 characters long. If this site is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this site is a top-level site, and the name must be unique among top-level sites of the same account. */
		name: FormControl<string | null | undefined>,

		/** Subaccount ID of this site. This is a read-only field that can be left blank. */
		subaccountId: FormControl<string | null | undefined>,
	}
	export function CreateSiteFormGroup() {
		return new FormGroup<SiteFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			approved: new FormControl<boolean | null | undefined>(undefined),
			directorySiteId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			keyName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Site Contact */
	export interface SiteContact {

		/** Address of this site contact. */
		address?: string | null;

		/** Site contact type. */
		contactType?: SiteContactContactType | null;

		/** Email address of this site contact. This is a required field. */
		email?: string | null;

		/** First name of this site contact. */
		firstName?: string | null;

		/** ID of this site contact. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Last name of this site contact. */
		lastName?: string | null;

		/** Primary phone number of this site contact. */
		phone?: string | null;

		/** Title or designation of this site contact. */
		title?: string | null;
	}

	/** Site Contact */
	export interface SiteContactFormProperties {

		/** Address of this site contact. */
		address: FormControl<string | null | undefined>,

		/** Site contact type. */
		contactType: FormControl<SiteContactContactType | null | undefined>,

		/** Email address of this site contact. This is a required field. */
		email: FormControl<string | null | undefined>,

		/** First name of this site contact. */
		firstName: FormControl<string | null | undefined>,

		/** ID of this site contact. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Last name of this site contact. */
		lastName: FormControl<string | null | undefined>,

		/** Primary phone number of this site contact. */
		phone: FormControl<string | null | undefined>,

		/** Title or designation of this site contact. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateSiteContactFormGroup() {
		return new FormGroup<SiteContactFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			contactType: new FormControl<SiteContactContactType | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SiteContactContactType { SALES_PERSON = 0, TRAFFICKER = 1 }


	/** Site Settings */
	export interface SiteSettings {

		/** Whether active view creatives are disabled for this site. */
		activeViewOptOut?: boolean | null;

		/** Whether this site opts out of ad blocking. When true, ad blocking is disabled for all placements under the site, regardless of the individual placement settings. When false, the campaign and placement settings take effect. */
		adBlockingOptOut?: boolean | null;

		/** Whether new cookies are disabled for this site. */
		disableNewCookie?: boolean | null;

		/** Tag Settings */
		tagSetting?: TagSetting;

		/** Whether Verification and ActiveView for in-stream video creatives are disabled by default for new placements created under this site. This value will be used to populate the placement.videoActiveViewOptOut field, when no value is specified for the new placement. */
		videoActiveViewOptOutTemplate?: boolean | null;

		/** Default VPAID adapter setting for new placements created under this site. This value will be used to populate the placements.vpaidAdapterChoice field, when no value is specified for the new placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to the placement. The publisher's specifications will typically determine this setting. For VPAID creatives, the adapter format will match the VPAID format (HTML5 VPAID creatives use the HTML5 adapter). *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH. */
		vpaidAdapterChoiceTemplate?: PlacementVpaidAdapterChoice | null;
	}

	/** Site Settings */
	export interface SiteSettingsFormProperties {

		/** Whether active view creatives are disabled for this site. */
		activeViewOptOut: FormControl<boolean | null | undefined>,

		/** Whether this site opts out of ad blocking. When true, ad blocking is disabled for all placements under the site, regardless of the individual placement settings. When false, the campaign and placement settings take effect. */
		adBlockingOptOut: FormControl<boolean | null | undefined>,

		/** Whether new cookies are disabled for this site. */
		disableNewCookie: FormControl<boolean | null | undefined>,

		/** Whether Verification and ActiveView for in-stream video creatives are disabled by default for new placements created under this site. This value will be used to populate the placement.videoActiveViewOptOut field, when no value is specified for the new placement. */
		videoActiveViewOptOutTemplate: FormControl<boolean | null | undefined>,

		/** Default VPAID adapter setting for new placements created under this site. This value will be used to populate the placements.vpaidAdapterChoice field, when no value is specified for the new placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to the placement. The publisher's specifications will typically determine this setting. For VPAID creatives, the adapter format will match the VPAID format (HTML5 VPAID creatives use the HTML5 adapter). *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH. */
		vpaidAdapterChoiceTemplate: FormControl<PlacementVpaidAdapterChoice | null | undefined>,
	}
	export function CreateSiteSettingsFormGroup() {
		return new FormGroup<SiteSettingsFormProperties>({
			activeViewOptOut: new FormControl<boolean | null | undefined>(undefined),
			adBlockingOptOut: new FormControl<boolean | null | undefined>(undefined),
			disableNewCookie: new FormControl<boolean | null | undefined>(undefined),
			videoActiveViewOptOutTemplate: new FormControl<boolean | null | undefined>(undefined),
			vpaidAdapterChoiceTemplate: new FormControl<PlacementVpaidAdapterChoice | null | undefined>(undefined),
		});

	}


	/** Video Settings */
	export interface SiteVideoSettings {

		/** Companion Settings */
		companionSettings?: SiteCompanionSetting;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteVideoSettings". */
		kind?: string | null;

		/** Whether OBA icons are enabled for this placement. */
		obaEnabled?: boolean | null;

		/** Online Behavioral Advertiser icon. */
		obaSettings?: ObaIcon;

		/** Orientation of a site template used for video. This will act as default for new placements created under this site. */
		orientation?: VideoSettingsOrientation | null;

		/** Publisher specification ID used to identify site-associated publisher requirements and automatically populate transcode settings. If publisher specification ID is specified, it will take precedence over transcode settings. */
		publisherSpecificationId?: string | null;

		/** Skippable Settings */
		skippableSettings?: SiteSkippableSetting;

		/** Transcode Settings */
		transcodeSettings?: SiteTranscodeSetting;
	}

	/** Video Settings */
	export interface SiteVideoSettingsFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteVideoSettings". */
		kind: FormControl<string | null | undefined>,

		/** Whether OBA icons are enabled for this placement. */
		obaEnabled: FormControl<boolean | null | undefined>,

		/** Orientation of a site template used for video. This will act as default for new placements created under this site. */
		orientation: FormControl<VideoSettingsOrientation | null | undefined>,

		/** Publisher specification ID used to identify site-associated publisher requirements and automatically populate transcode settings. If publisher specification ID is specified, it will take precedence over transcode settings. */
		publisherSpecificationId: FormControl<string | null | undefined>,
	}
	export function CreateSiteVideoSettingsFormGroup() {
		return new FormGroup<SiteVideoSettingsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			obaEnabled: new FormControl<boolean | null | undefined>(undefined),
			orientation: new FormControl<VideoSettingsOrientation | null | undefined>(undefined),
			publisherSpecificationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Companion Settings */
	export interface SiteCompanionSetting {

		/** Whether companions are disabled for this site template. */
		companionsDisabled?: boolean | null;

		/** Allowlist of companion sizes to be served via this site template. Set this list to null or empty to serve all companion sizes. */
		enabledSizes?: Array<Size>;

		/** Whether to serve only static images as companions. */
		imageOnly?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteCompanionSetting". */
		kind?: string | null;
	}

	/** Companion Settings */
	export interface SiteCompanionSettingFormProperties {

		/** Whether companions are disabled for this site template. */
		companionsDisabled: FormControl<boolean | null | undefined>,

		/** Whether to serve only static images as companions. */
		imageOnly: FormControl<boolean | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteCompanionSetting". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSiteCompanionSettingFormGroup() {
		return new FormGroup<SiteCompanionSettingFormProperties>({
			companionsDisabled: new FormControl<boolean | null | undefined>(undefined),
			imageOnly: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Skippable Settings */
	export interface SiteSkippableSetting {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteSkippableSetting". */
		kind?: string | null;

		/** Video Offset */
		progressOffset?: VideoOffset;

		/** Video Offset */
		skipOffset?: VideoOffset;

		/** Whether the user can skip creatives served to this site. This will act as default for new placements created under this site. */
		skippable?: boolean | null;
	}

	/** Skippable Settings */
	export interface SiteSkippableSettingFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteSkippableSetting". */
		kind: FormControl<string | null | undefined>,

		/** Whether the user can skip creatives served to this site. This will act as default for new placements created under this site. */
		skippable: FormControl<boolean | null | undefined>,
	}
	export function CreateSiteSkippableSettingFormGroup() {
		return new FormGroup<SiteSkippableSettingFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			skippable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Transcode Settings */
	export interface SiteTranscodeSetting {

		/** Allowlist of video formats to be served to this site template. Set this list to null or empty to serve all video formats. */
		enabledVideoFormats?: Array<number>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteTranscodeSetting". */
		kind?: string | null;
	}

	/** Transcode Settings */
	export interface SiteTranscodeSettingFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteTranscodeSetting". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSiteTranscodeSettingFormGroup() {
		return new FormGroup<SiteTranscodeSettingFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Site List Response */
	export interface SitesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#sitesListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;

		/** Site collection. */
		sites?: Array<Site>;
	}

	/** Site List Response */
	export interface SitesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#sitesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSitesListResponseFormGroup() {
		return new FormGroup<SitesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Size List Response */
	export interface SizesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#sizesListResponse". */
		kind?: string | null;

		/** Size collection. */
		sizes?: Array<Size>;
	}

	/** Size List Response */
	export interface SizesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#sizesListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSizesListResponseFormGroup() {
		return new FormGroup<SizesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a Campaign Manager subaccount. */
	export interface Subaccount {

		/** ID of the account that contains this subaccount. This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** IDs of the available user role permissions for this subaccount. */
		availablePermissionIds?: Array<string>;

		/** ID of this subaccount. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccount". */
		kind?: string | null;

		/** Name of this subaccount. This is a required field. Must be less than 128 characters long and be unique among subaccounts of the same account. */
		name?: string | null;
	}

	/** Contains properties of a Campaign Manager subaccount. */
	export interface SubaccountFormProperties {

		/** ID of the account that contains this subaccount. This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** ID of this subaccount. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccount". */
		kind: FormControl<string | null | undefined>,

		/** Name of this subaccount. This is a required field. Must be less than 128 characters long and be unique among subaccounts of the same account. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSubaccountFormGroup() {
		return new FormGroup<SubaccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Subaccount List Response */
	export interface SubaccountsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccountsListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;

		/** Subaccount collection. */
		subaccounts?: Array<Subaccount>;
	}

	/** Subaccount List Response */
	export interface SubaccountsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccountsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSubaccountsListResponseFormGroup() {
		return new FormGroup<SubaccountsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a targetable remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource is a read-only view of a remarketing list to be used to facilitate targeting ads to specific lists. Remarketing lists that are owned by your advertisers and those that are shared to your advertisers or account are accessible via this resource. To manage remarketing lists that are owned by your advertisers, use the RemarketingLists resource. */
	export interface TargetableRemarketingList {

		/** Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
		accountId?: string | null;

		/** Whether this targetable remarketing list is active. */
		active?: boolean | null;

		/** Dimension value for the advertiser ID that owns this targetable remarketing list. */
		advertiserId?: string | null;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Targetable remarketing list description. */
		description?: string | null;

		/** Targetable remarketing list ID. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingList". */
		kind?: string | null;

		/** Number of days that a user should remain in the targetable remarketing list without an impression. */
		lifeSpan?: string | null;

		/** Number of users currently in the list. This is a read-only field. */
		listSize?: string | null;

		/** Product from which this targetable remarketing list was originated. */
		listSource?: RemarketingListListSource | null;

		/** Name of the targetable remarketing list. Is no greater than 128 characters long. */
		name?: string | null;

		/** Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
		subaccountId?: string | null;
	}

	/** Contains properties of a targetable remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource is a read-only view of a remarketing list to be used to facilitate targeting ads to specific lists. Remarketing lists that are owned by your advertisers and those that are shared to your advertisers or account are accessible via this resource. To manage remarketing lists that are owned by your advertisers, use the RemarketingLists resource. */
	export interface TargetableRemarketingListFormProperties {

		/** Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
		accountId: FormControl<string | null | undefined>,

		/** Whether this targetable remarketing list is active. */
		active: FormControl<boolean | null | undefined>,

		/** Dimension value for the advertiser ID that owns this targetable remarketing list. */
		advertiserId: FormControl<string | null | undefined>,

		/** Targetable remarketing list description. */
		description: FormControl<string | null | undefined>,

		/** Targetable remarketing list ID. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingList". */
		kind: FormControl<string | null | undefined>,

		/** Number of days that a user should remain in the targetable remarketing list without an impression. */
		lifeSpan: FormControl<string | null | undefined>,

		/** Number of users currently in the list. This is a read-only field. */
		listSize: FormControl<string | null | undefined>,

		/** Product from which this targetable remarketing list was originated. */
		listSource: FormControl<RemarketingListListSource | null | undefined>,

		/** Name of the targetable remarketing list. Is no greater than 128 characters long. */
		name: FormControl<string | null | undefined>,

		/** Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests. */
		subaccountId: FormControl<string | null | undefined>,
	}
	export function CreateTargetableRemarketingListFormGroup() {
		return new FormGroup<TargetableRemarketingListFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lifeSpan: new FormControl<string | null | undefined>(undefined),
			listSize: new FormControl<string | null | undefined>(undefined),
			listSource: new FormControl<RemarketingListListSource | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Targetable remarketing list response */
	export interface TargetableRemarketingListsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingListsListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;

		/** Targetable remarketing list collection. */
		targetableRemarketingLists?: Array<TargetableRemarketingList>;
	}

	/** Targetable remarketing list response */
	export interface TargetableRemarketingListsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingListsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateTargetableRemarketingListsListResponseFormGroup() {
		return new FormGroup<TargetableRemarketingListsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads. */
	export interface TargetingTemplate {

		/** Account ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert. */
		accountId?: string | null;

		/** Advertiser ID of this targeting template. This is a required field on insert and is read-only after insert. */
		advertiserId?: string | null;

		/** Represents a DimensionValue resource. */
		advertiserIdDimensionValue?: DimensionValue;

		/** Day Part Targeting. */
		dayPartTargeting?: DayPartTargeting;

		/** Geographical Targeting. */
		geoTargeting?: GeoTargeting;

		/** ID of this targeting template. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Key Value Targeting Expression. */
		keyValueTargetingExpression?: KeyValueTargetingExpression;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplate". */
		kind?: string | null;

		/** Language Targeting. */
		languageTargeting?: LanguageTargeting;

		/** Remarketing List Targeting Expression. */
		listTargetingExpression?: ListTargetingExpression;

		/** Name of this targeting template. This field is required. It must be less than 256 characters long and unique within an advertiser. */
		name?: string | null;

		/** Subaccount ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert. */
		subaccountId?: string | null;

		/** Technology Targeting. */
		technologyTargeting?: TechnologyTargeting;
	}

	/** Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads. */
	export interface TargetingTemplateFormProperties {

		/** Account ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert. */
		accountId: FormControl<string | null | undefined>,

		/** Advertiser ID of this targeting template. This is a required field on insert and is read-only after insert. */
		advertiserId: FormControl<string | null | undefined>,

		/** ID of this targeting template. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplate". */
		kind: FormControl<string | null | undefined>,

		/** Name of this targeting template. This field is required. It must be less than 256 characters long and unique within an advertiser. */
		name: FormControl<string | null | undefined>,

		/** Subaccount ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert. */
		subaccountId: FormControl<string | null | undefined>,
	}
	export function CreateTargetingTemplateFormGroup() {
		return new FormGroup<TargetingTemplateFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			advertiserId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Targeting Template List Response */
	export interface TargetingTemplatesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplatesListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;

		/** Targeting template collection. */
		targetingTemplates?: Array<TargetingTemplate>;
	}

	/** Targeting Template List Response */
	export interface TargetingTemplatesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplatesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateTargetingTemplatesListResponseFormGroup() {
		return new FormGroup<TargetingTemplatesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A UserProfile resource lets you list all DFA user profiles that are associated with a Google user account. The profile_id needs to be specified in other API requests.  */
	export interface UserProfile {

		/** The account ID to which this profile belongs. */
		accountId?: string | null;

		/** The account name this profile belongs to. */
		accountName?: string | null;

		/** Etag of this resource. */
		etag?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfile". */
		kind?: string | null;

		/** The unique ID of the user profile. */
		profileId?: string | null;

		/** The sub account ID this profile belongs to if applicable. */
		subAccountId?: string | null;

		/** The sub account name this profile belongs to if applicable. */
		subAccountName?: string | null;

		/** The user name. */
		userName?: string | null;
	}

	/** A UserProfile resource lets you list all DFA user profiles that are associated with a Google user account. The profile_id needs to be specified in other API requests.  */
	export interface UserProfileFormProperties {

		/** The account ID to which this profile belongs. */
		accountId: FormControl<string | null | undefined>,

		/** The account name this profile belongs to. */
		accountName: FormControl<string | null | undefined>,

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfile". */
		kind: FormControl<string | null | undefined>,

		/** The unique ID of the user profile. */
		profileId: FormControl<string | null | undefined>,

		/** The sub account ID this profile belongs to if applicable. */
		subAccountId: FormControl<string | null | undefined>,

		/** The sub account name this profile belongs to if applicable. */
		subAccountName: FormControl<string | null | undefined>,

		/** The user name. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateUserProfileFormGroup() {
		return new FormGroup<UserProfileFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			profileId: new FormControl<string | null | undefined>(undefined),
			subAccountId: new FormControl<string | null | undefined>(undefined),
			subAccountName: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the list of user profiles. */
	export interface UserProfileList {

		/** Etag of this resource. */
		etag?: string | null;

		/** The user profiles returned in this response. */
		items?: Array<UserProfile>;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfileList". */
		kind?: string | null;
	}

	/** Represents the list of user profiles. */
	export interface UserProfileListFormProperties {

		/** Etag of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfileList". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateUserProfileListFormGroup() {
		return new FormGroup<UserProfileListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of auser role, which is used to manage user access. */
	export interface UserRole {

		/** Account ID of this user role. This is a read-only field that can be left blank. */
		accountId?: string | null;

		/** Whether this is a default user role. Default user roles are created by the system for the account/subaccount and cannot be modified or deleted. Each default user role comes with a basic set of preassigned permissions. */
		defaultUserRole?: boolean | null;

		/** ID of this user role. This is a read-only, auto-generated field. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRole". */
		kind?: string | null;

		/** Name of this user role. This is a required field. Must be less than 256 characters long. If this user role is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this user role is a top-level user role, and the name must be unique among top-level user roles of the same account. */
		name?: string | null;

		/** ID of the user role that this user role is based on or copied from. This is a required field. */
		parentUserRoleId?: string | null;

		/** List of permissions associated with this user role. */
		permissions?: Array<UserRolePermission>;

		/** Subaccount ID of this user role. This is a read-only field that can be left blank. */
		subaccountId?: string | null;
	}

	/** Contains properties of auser role, which is used to manage user access. */
	export interface UserRoleFormProperties {

		/** Account ID of this user role. This is a read-only field that can be left blank. */
		accountId: FormControl<string | null | undefined>,

		/** Whether this is a default user role. Default user roles are created by the system for the account/subaccount and cannot be modified or deleted. Each default user role comes with a basic set of preassigned permissions. */
		defaultUserRole: FormControl<boolean | null | undefined>,

		/** ID of this user role. This is a read-only, auto-generated field. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRole". */
		kind: FormControl<string | null | undefined>,

		/** Name of this user role. This is a required field. Must be less than 256 characters long. If this user role is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this user role is a top-level user role, and the name must be unique among top-level user roles of the same account. */
		name: FormControl<string | null | undefined>,

		/** ID of the user role that this user role is based on or copied from. This is a required field. */
		parentUserRoleId: FormControl<string | null | undefined>,

		/** Subaccount ID of this user role. This is a read-only field that can be left blank. */
		subaccountId: FormControl<string | null | undefined>,
	}
	export function CreateUserRoleFormGroup() {
		return new FormGroup<UserRoleFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			defaultUserRole: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentUserRoleId: new FormControl<string | null | undefined>(undefined),
			subaccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains properties of a user role permission. */
	export interface UserRolePermission {

		/** Levels of availability for a user role permission. */
		availability?: UserRolePermissionAvailability | null;

		/** ID of this user role permission. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermission". */
		kind?: string | null;

		/** Name of this user role permission. */
		name?: string | null;

		/** ID of the permission group that this user role permission belongs to. */
		permissionGroupId?: string | null;
	}

	/** Contains properties of a user role permission. */
	export interface UserRolePermissionFormProperties {

		/** Levels of availability for a user role permission. */
		availability: FormControl<UserRolePermissionAvailability | null | undefined>,

		/** ID of this user role permission. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermission". */
		kind: FormControl<string | null | undefined>,

		/** Name of this user role permission. */
		name: FormControl<string | null | undefined>,

		/** ID of the permission group that this user role permission belongs to. */
		permissionGroupId: FormControl<string | null | undefined>,
	}
	export function CreateUserRolePermissionFormGroup() {
		return new FormGroup<UserRolePermissionFormProperties>({
			availability: new FormControl<UserRolePermissionAvailability | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			permissionGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserRolePermissionAvailability { NOT_AVAILABLE_BY_DEFAULT = 0, ACCOUNT_BY_DEFAULT = 1, SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT = 2, ACCOUNT_ALWAYS = 3, SUBACCOUNT_AND_ACCOUNT_ALWAYS = 4, USER_PROFILE_ONLY = 5 }


	/** Represents a grouping of related user role permissions. */
	export interface UserRolePermissionGroup {

		/** ID of this user role permission. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroup". */
		kind?: string | null;

		/** Name of this user role permission group. */
		name?: string | null;
	}

	/** Represents a grouping of related user role permissions. */
	export interface UserRolePermissionGroupFormProperties {

		/** ID of this user role permission. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroup". */
		kind: FormControl<string | null | undefined>,

		/** Name of this user role permission group. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserRolePermissionGroupFormGroup() {
		return new FormGroup<UserRolePermissionGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User Role Permission Group List Response */
	export interface UserRolePermissionGroupsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroupsListResponse". */
		kind?: string | null;

		/** User role permission group collection. */
		userRolePermissionGroups?: Array<UserRolePermissionGroup>;
	}

	/** User Role Permission Group List Response */
	export interface UserRolePermissionGroupsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroupsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateUserRolePermissionGroupsListResponseFormGroup() {
		return new FormGroup<UserRolePermissionGroupsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User Role Permission List Response */
	export interface UserRolePermissionsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionsListResponse". */
		kind?: string | null;

		/** User role permission collection. */
		userRolePermissions?: Array<UserRolePermission>;
	}

	/** User Role Permission List Response */
	export interface UserRolePermissionsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateUserRolePermissionsListResponseFormGroup() {
		return new FormGroup<UserRolePermissionsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User Role List Response */
	export interface UserRolesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolesListResponse". */
		kind?: string | null;

		/** Pagination token to be used for the next list operation. */
		nextPageToken?: string | null;

		/** User role collection. */
		userRoles?: Array<UserRole>;
	}

	/** User Role List Response */
	export interface UserRolesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to be used for the next list operation. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateUserRolesListResponseFormGroup() {
		return new FormGroup<UserRolesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about supported video formats. */
	export interface VideoFormat {

		/** File type of the video format. */
		fileType?: VideoFormatFileType | null;

		/** ID of the video format. */
		id?: number | null;

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormat". */
		kind?: string | null;

		/** Represents the dimensions of ads, placements, creatives, or creative assets. */
		resolution?: Size;

		/** The target bit rate of this video format. */
		targetBitRate?: number | null;
	}

	/** Contains information about supported video formats. */
	export interface VideoFormatFormProperties {

		/** File type of the video format. */
		fileType: FormControl<VideoFormatFileType | null | undefined>,

		/** ID of the video format. */
		id: FormControl<number | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormat". */
		kind: FormControl<string | null | undefined>,

		/** The target bit rate of this video format. */
		targetBitRate: FormControl<number | null | undefined>,
	}
	export function CreateVideoFormatFormGroup() {
		return new FormGroup<VideoFormatFormProperties>({
			fileType: new FormControl<VideoFormatFileType | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			targetBitRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum VideoFormatFileType { FLV = 0, THREEGPP = 1, MP4 = 2, WEBM = 3, M3U8 = 4 }


	/** Video Format List Response */
	export interface VideoFormatsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormatsListResponse". */
		kind?: string | null;

		/** Video format collection. */
		videoFormats?: Array<VideoFormat>;
	}

	/** Video Format List Response */
	export interface VideoFormatsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormatsListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateVideoFormatsListResponseFormGroup() {
		return new FormGroup<VideoFormatsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

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
		 * @return {File} Successful response
		 */
		Dfareporting_files_get(reportId: string, fileId: string): Observable<File> {
			return this.http.get<File>(this.baseUri + 'reports/' + (reportId == null ? '' : encodeURIComponent(reportId)) + '/files/' + (fileId == null ? '' : encodeURIComponent(fileId)), {});
		}

		/**
		 * Retrieves list of user profiles for a user.
		 * Get userprofiles
		 * @return {UserProfileList} Successful response
		 */
		Dfareporting_userProfiles_list(): Observable<UserProfileList> {
			return this.http.get<UserProfileList>(this.baseUri + 'userprofiles', {});
		}

		/**
		 * Gets one user profile by ID.
		 * Get userprofiles/{profileId}
		 * @param {string} profileId The user profile ID.
		 * @return {UserProfile} Successful response
		 */
		Dfareporting_userProfiles_get(profileId: string): Observable<UserProfile> {
			return this.http.get<UserProfile>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)), {});
		}

		/**
		 * Gets the account's active ad summary by account ID.
		 * Get userprofiles/{profileId}/accountActiveAdSummaries/{summaryAccountId}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} summaryAccountId Account ID.
		 * @return {AccountActiveAdSummary} Successful response
		 */
		Dfareporting_accountActiveAdSummaries_get(profileId: string, summaryAccountId: string): Observable<AccountActiveAdSummary> {
			return this.http.get<AccountActiveAdSummary>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountActiveAdSummaries/' + (summaryAccountId == null ? '' : encodeURIComponent(summaryAccountId)), {});
		}

		/**
		 * Retrieves the list of account permission groups.
		 * Get userprofiles/{profileId}/accountPermissionGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {AccountPermissionGroupsListResponse} Successful response
		 */
		Dfareporting_accountPermissionGroups_list(profileId: string): Observable<AccountPermissionGroupsListResponse> {
			return this.http.get<AccountPermissionGroupsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountPermissionGroups', {});
		}

		/**
		 * Gets one account permission group by ID.
		 * Get userprofiles/{profileId}/accountPermissionGroups/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Account permission group ID.
		 * @return {AccountPermissionGroup} Successful response
		 */
		Dfareporting_accountPermissionGroups_get(profileId: string, id: string): Observable<AccountPermissionGroup> {
			return this.http.get<AccountPermissionGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountPermissionGroups/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves the list of account permissions.
		 * Get userprofiles/{profileId}/accountPermissions
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {AccountPermissionsListResponse} Successful response
		 */
		Dfareporting_accountPermissions_list(profileId: string): Observable<AccountPermissionsListResponse> {
			return this.http.get<AccountPermissionsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountPermissions', {});
		}

		/**
		 * Gets one account permission by ID.
		 * Get userprofiles/{profileId}/accountPermissions/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Account permission ID.
		 * @return {AccountPermission} Successful response
		 */
		Dfareporting_accountPermissions_get(profileId: string, id: string): Observable<AccountPermission> {
			return this.http.get<AccountPermission>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountPermissions/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @return {AccountUserProfilesListResponse} Successful response
		 */
		Dfareporting_accountUserProfiles_list(profileId: string, active: boolean | null | undefined, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined, subaccountId: string | null | undefined, userRoleId: string | null | undefined): Observable<AccountUserProfilesListResponse> {
			return this.http.get<AccountUserProfilesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountUserProfiles&active=' + active + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&subaccountId=' + (subaccountId == null ? '' : encodeURIComponent(subaccountId)) + '&userRoleId=' + (userRoleId == null ? '' : encodeURIComponent(userRoleId)), {});
		}

		/**
		 * Updates an existing user role. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/accountUserProfiles
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. AccountUserProfile ID.
		 * @return {AccountUserProfile} Successful response
		 */
		Dfareporting_accountUserProfiles_patch(profileId: string, id: string, requestBody: AccountUserProfile): Observable<AccountUserProfile> {
			return this.http.patch<AccountUserProfile>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountUserProfiles&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new account user profile.
		 * Post userprofiles/{profileId}/accountUserProfiles
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {AccountUserProfile} Successful response
		 */
		Dfareporting_accountUserProfiles_insert(profileId: string, requestBody: AccountUserProfile): Observable<AccountUserProfile> {
			return this.http.post<AccountUserProfile>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountUserProfiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing account user profile.
		 * Put userprofiles/{profileId}/accountUserProfiles
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {AccountUserProfile} Successful response
		 */
		Dfareporting_accountUserProfiles_update(profileId: string, requestBody: AccountUserProfile): Observable<AccountUserProfile> {
			return this.http.put<AccountUserProfile>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountUserProfiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one account user profile by ID.
		 * Get userprofiles/{profileId}/accountUserProfiles/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id User profile ID.
		 * @return {AccountUserProfile} Successful response
		 */
		Dfareporting_accountUserProfiles_get(profileId: string, id: string): Observable<AccountUserProfile> {
			return this.http.get<AccountUserProfile>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accountUserProfiles/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @return {AccountsListResponse} Successful response
		 */
		Dfareporting_accounts_list(profileId: string, active: boolean | null | undefined, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<AccountsListResponse> {
			return this.http.get<AccountsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accounts&active=' + active + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Updates an existing account. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/accounts
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. Account ID.
		 * @return {Account} Successful response
		 */
		Dfareporting_accounts_patch(profileId: string, id: string, requestBody: Account): Observable<Account> {
			return this.http.patch<Account>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accounts&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing account.
		 * Put userprofiles/{profileId}/accounts
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {Account} Successful response
		 */
		Dfareporting_accounts_update(profileId: string, requestBody: Account): Observable<Account> {
			return this.http.put<Account>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one account by ID.
		 * Get userprofiles/{profileId}/accounts/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Account ID.
		 * @return {Account} Successful response
		 */
		Dfareporting_accounts_get(profileId: string, id: string): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/accounts/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @return {AdsListResponse} Successful response
		 */
		Dfareporting_ads_list(profileId: string, active: boolean | null | undefined, advertiserId: string | null | undefined, archived: boolean | null | undefined, audienceSegmentIds: Array<string> | null | undefined, campaignIds: Array<string> | null | undefined, compatibility: AdCompatibility | null | undefined, creativeIds: Array<string> | null | undefined, creativeOptimizationConfigurationIds: Array<string> | null | undefined, dynamicClickTracker: boolean | null | undefined, ids: Array<string> | null | undefined, landingPageIds: Array<string> | null | undefined, maxResults: number | null | undefined, overriddenEventTagId: string | null | undefined, pageToken: string | null | undefined, placementIds: Array<string> | null | undefined, remarketingListIds: Array<string> | null | undefined, searchString: string | null | undefined, sizeIds: Array<string> | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined, sslCompliant: boolean | null | undefined, sslRequired: boolean | null | undefined, type: Array<AdType> | null | undefined): Observable<AdsListResponse> {
			return this.http.get<AdsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/ads&active=' + active + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&archived=' + archived + '&' + audienceSegmentIds?.map(z => `audienceSegmentIds=${encodeURIComponent(z)}`).join('&') + '&' + campaignIds?.map(z => `campaignIds=${encodeURIComponent(z)}`).join('&') + '&compatibility=' + compatibility + '&' + creativeIds?.map(z => `creativeIds=${encodeURIComponent(z)}`).join('&') + '&' + creativeOptimizationConfigurationIds?.map(z => `creativeOptimizationConfigurationIds=${encodeURIComponent(z)}`).join('&') + '&dynamicClickTracker=' + dynamicClickTracker + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&' + landingPageIds?.map(z => `landingPageIds=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&overriddenEventTagId=' + (overriddenEventTagId == null ? '' : encodeURIComponent(overriddenEventTagId)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + placementIds?.map(z => `placementIds=${encodeURIComponent(z)}`).join('&') + '&' + remarketingListIds?.map(z => `remarketingListIds=${encodeURIComponent(z)}`).join('&') + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&' + sizeIds?.map(z => `sizeIds=${encodeURIComponent(z)}`).join('&') + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&sslCompliant=' + sslCompliant + '&sslRequired=' + sslRequired + '&' + type?.map(z => `type=${z}`).join('&'), {});
		}

		/**
		 * Updates an existing event tag. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/ads
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. RemarketingList ID.
		 * @return {Ad} Successful response
		 */
		Dfareporting_ads_patch(profileId: string, id: string, requestBody: Ad): Observable<Ad> {
			return this.http.patch<Ad>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/ads&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new ad.
		 * Post userprofiles/{profileId}/ads
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {Ad} Successful response
		 */
		Dfareporting_ads_insert(profileId: string, requestBody: Ad): Observable<Ad> {
			return this.http.post<Ad>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/ads', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing ad.
		 * Put userprofiles/{profileId}/ads
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {Ad} Successful response
		 */
		Dfareporting_ads_update(profileId: string, requestBody: Ad): Observable<Ad> {
			return this.http.put<Ad>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/ads', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one ad by ID.
		 * Get userprofiles/{profileId}/ads/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Ad ID.
		 * @return {Ad} Successful response
		 */
		Dfareporting_ads_get(profileId: string, id: string): Observable<Ad> {
			return this.http.get<Ad>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/ads/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @return {AdvertiserGroupsListResponse} Successful response
		 */
		Dfareporting_advertiserGroups_list(profileId: string, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<AdvertiserGroupsListResponse> {
			return this.http.get<AdvertiserGroupsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserGroups&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Updates an existing advertiser group. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/advertiserGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. Advertiser Group ID.
		 * @return {AdvertiserGroup} Successful response
		 */
		Dfareporting_advertiserGroups_patch(profileId: string, id: string, requestBody: AdvertiserGroup): Observable<AdvertiserGroup> {
			return this.http.patch<AdvertiserGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserGroups&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new advertiser group.
		 * Post userprofiles/{profileId}/advertiserGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {AdvertiserGroup} Successful response
		 */
		Dfareporting_advertiserGroups_insert(profileId: string, requestBody: AdvertiserGroup): Observable<AdvertiserGroup> {
			return this.http.post<AdvertiserGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing advertiser group.
		 * Put userprofiles/{profileId}/advertiserGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {AdvertiserGroup} Successful response
		 */
		Dfareporting_advertiserGroups_update(profileId: string, requestBody: AdvertiserGroup): Observable<AdvertiserGroup> {
			return this.http.put<AdvertiserGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @return {AdvertiserGroup} Successful response
		 */
		Dfareporting_advertiserGroups_get(profileId: string, id: string): Observable<AdvertiserGroup> {
			return this.http.get<AdvertiserGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserGroups/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @return {AdvertiserLandingPagesListResponse} Successful response
		 */
		Dfareporting_advertiserLandingPages_list(profileId: string, advertiserIds: Array<string> | null | undefined, archived: boolean | null | undefined, campaignIds: Array<string> | null | undefined, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined, subaccountId: string | null | undefined): Observable<AdvertiserLandingPagesListResponse> {
			return this.http.get<AdvertiserLandingPagesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserLandingPages&' + advertiserIds?.map(z => `advertiserIds=${encodeURIComponent(z)}`).join('&') + '&archived=' + archived + '&' + campaignIds?.map(z => `campaignIds=${encodeURIComponent(z)}`).join('&') + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&subaccountId=' + (subaccountId == null ? '' : encodeURIComponent(subaccountId)), {});
		}

		/**
		 * Updates an existing advertiser. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/advertiserLandingPages
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. Landing Page ID.
		 * @return {LandingPage} Successful response
		 */
		Dfareporting_advertiserLandingPages_patch(profileId: string, id: string, requestBody: LandingPage): Observable<LandingPage> {
			return this.http.patch<LandingPage>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserLandingPages&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new landing page.
		 * Post userprofiles/{profileId}/advertiserLandingPages
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {LandingPage} Successful response
		 */
		Dfareporting_advertiserLandingPages_insert(profileId: string, requestBody: LandingPage): Observable<LandingPage> {
			return this.http.post<LandingPage>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserLandingPages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing landing page.
		 * Put userprofiles/{profileId}/advertiserLandingPages
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {LandingPage} Successful response
		 */
		Dfareporting_advertiserLandingPages_update(profileId: string, requestBody: LandingPage): Observable<LandingPage> {
			return this.http.put<LandingPage>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserLandingPages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one landing page by ID.
		 * Get userprofiles/{profileId}/advertiserLandingPages/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Landing page ID.
		 * @return {LandingPage} Successful response
		 */
		Dfareporting_advertiserLandingPages_get(profileId: string, id: string): Observable<LandingPage> {
			return this.http.get<LandingPage>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertiserLandingPages/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @param {string} searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser" .
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @param {AdvertiserStatus} status Select only advertisers with the specified status.
		 * @param {string} subaccountId Select only advertisers with these subaccount IDs.
		 * @return {AdvertisersListResponse} Successful response
		 */
		Dfareporting_advertisers_list(profileId: string, advertiserGroupIds: Array<string> | null | undefined, floodlightConfigurationIds: Array<string> | null | undefined, ids: Array<string> | null | undefined, includeAdvertisersWithoutGroupsOnly: boolean | null | undefined, maxResults: number | null | undefined, onlyParent: boolean | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined, status: AdvertiserStatus | null | undefined, subaccountId: string | null | undefined): Observable<AdvertisersListResponse> {
			return this.http.get<AdvertisersListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertisers&' + advertiserGroupIds?.map(z => `advertiserGroupIds=${encodeURIComponent(z)}`).join('&') + '&' + floodlightConfigurationIds?.map(z => `floodlightConfigurationIds=${encodeURIComponent(z)}`).join('&') + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&includeAdvertisersWithoutGroupsOnly=' + includeAdvertisersWithoutGroupsOnly + '&maxResults=' + maxResults + '&onlyParent=' + onlyParent + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&status=' + status + '&subaccountId=' + (subaccountId == null ? '' : encodeURIComponent(subaccountId)), {});
		}

		/**
		 * Updates an existing advertiser. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/advertisers
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. Advertiser ID.
		 * @return {Advertiser} Successful response
		 */
		Dfareporting_advertisers_patch(profileId: string, id: string, requestBody: Advertiser): Observable<Advertiser> {
			return this.http.patch<Advertiser>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertisers&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new advertiser.
		 * Post userprofiles/{profileId}/advertisers
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {Advertiser} Successful response
		 */
		Dfareporting_advertisers_insert(profileId: string, requestBody: Advertiser): Observable<Advertiser> {
			return this.http.post<Advertiser>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertisers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing advertiser.
		 * Put userprofiles/{profileId}/advertisers
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {Advertiser} Successful response
		 */
		Dfareporting_advertisers_update(profileId: string, requestBody: Advertiser): Observable<Advertiser> {
			return this.http.put<Advertiser>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertisers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level.
		 * Get userprofiles/{profileId}/advertisers/{advertiserId}/invoices
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} advertiserId Advertiser ID of this invoice.
		 * @param {string} issueMonth Month for which invoices are needed in the format YYYYMM. Required field
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @return {AdvertiserInvoicesListResponse} Successful response
		 */
		Dfareporting_advertiserInvoices_list(profileId: string, advertiserId: string, issueMonth: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<AdvertiserInvoicesListResponse> {
			return this.http.get<AdvertiserInvoicesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertisers/' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '/invoices&issueMonth=' + (issueMonth == null ? '' : encodeURIComponent(issueMonth)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets one advertiser by ID.
		 * Get userprofiles/{profileId}/advertisers/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Advertiser ID.
		 * @return {Advertiser} Successful response
		 */
		Dfareporting_advertisers_get(profileId: string, id: string): Observable<Advertiser> {
			return this.http.get<Advertiser>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/advertisers/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a list of billing profiles, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/billingProfiles
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} currency_code Select only billing profile with currency.
		 * @param {Array<string>} ids Select only billing profile with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} name Allows searching for billing profiles by name. Wildcards (*) are allowed. For example, "profile*2020" will return objects with names like "profile June 2020", "profile April 2020", or simply "profile 2020". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "profile" will match objects with name "my profile", "profile 2021", or simply "profile".
		 * @param {boolean} onlySuggestion Select only billing profile which is suggested for the currency_code & subaccount_id using the Billing Suggestion API.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @param {Array<BillingProfileStatus>} status Select only billing profile with the specified status.
		 * @param {Array<string>} subaccountIds Select only billing profile with the specified subaccount.When only_suggestion is true, only a single subaccount_id is supported.
		 * @return {BillingProfilesListResponse} Successful response
		 */
		Dfareporting_billingProfiles_list(profileId: string, currency_code: string | null | undefined, ids: Array<string> | null | undefined, maxResults: number | null | undefined, name: string | null | undefined, onlySuggestion: boolean | null | undefined, pageToken: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined, status: Array<BillingProfileStatus> | null | undefined, subaccountIds: Array<string> | null | undefined): Observable<BillingProfilesListResponse> {
			return this.http.get<BillingProfilesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/billingProfiles&currency_code=' + (currency_code == null ? '' : encodeURIComponent(currency_code)) + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&onlySuggestion=' + onlySuggestion + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&' + status?.map(z => `status=${z}`).join('&') + '&' + subaccountIds?.map(z => `subaccountIds=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates an existing billing profile.
		 * Put userprofiles/{profileId}/billingProfiles
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {BillingProfile} Successful response
		 */
		Dfareporting_billingProfiles_update(profileId: string, requestBody: BillingProfile): Observable<BillingProfile> {
			return this.http.put<BillingProfile>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/billingProfiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of billing assignments.
		 * Get userprofiles/{profileId}/billingProfiles/{billingProfileId}/billingAssignments
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} billingProfileId Billing profile ID of this billing assignment.
		 * @return {BillingAssignmentsListResponse} Successful response
		 */
		Dfareporting_billingAssignments_list(profileId: string, billingProfileId: string): Observable<BillingAssignmentsListResponse> {
			return this.http.get<BillingAssignmentsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/billingProfiles/' + (billingProfileId == null ? '' : encodeURIComponent(billingProfileId)) + '/billingAssignments', {});
		}

		/**
		 * Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned.
		 * Post userprofiles/{profileId}/billingProfiles/{billingProfileId}/billingAssignments
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} billingProfileId Billing profile ID of this billing assignment.
		 * @return {BillingAssignment} Successful response
		 */
		Dfareporting_billingAssignments_insert(profileId: string, billingProfileId: string, requestBody: BillingAssignment): Observable<BillingAssignment> {
			return this.http.post<BillingAssignment>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/billingProfiles/' + (billingProfileId == null ? '' : encodeURIComponent(billingProfileId)) + '/billingAssignments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of billing rates. This method supports paging.
		 * Get userprofiles/{profileId}/billingProfiles/{billingProfileId}/billingRates
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} billingProfileId Billing profile ID of this billing rate.
		 * @return {BillingRatesListResponse} Successful response
		 */
		Dfareporting_billingRates_list(profileId: string, billingProfileId: string): Observable<BillingRatesListResponse> {
			return this.http.get<BillingRatesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/billingProfiles/' + (billingProfileId == null ? '' : encodeURIComponent(billingProfileId)) + '/billingRates', {});
		}

		/**
		 * Gets one billing profile by ID.
		 * Get userprofiles/{profileId}/billingProfiles/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Billing Profile ID.
		 * @return {BillingProfile} Successful response
		 */
		Dfareporting_billingProfiles_get(profileId: string, id: string): Observable<BillingProfile> {
			return this.http.get<BillingProfile>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/billingProfiles/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a list of browsers.
		 * Get userprofiles/{profileId}/browsers
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {BrowsersListResponse} Successful response
		 */
		Dfareporting_browsers_list(profileId: string): Observable<BrowsersListResponse> {
			return this.http.get<BrowsersListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/browsers', {});
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
		 * @return {CampaignsListResponse} Successful response
		 */
		Dfareporting_campaigns_list(profileId: string, advertiserGroupIds: Array<string> | null | undefined, advertiserIds: Array<string> | null | undefined, archived: boolean | null | undefined, atLeastOneOptimizationActivity: boolean | null | undefined, excludedIds: Array<string> | null | undefined, ids: Array<string> | null | undefined, maxResults: number | null | undefined, overriddenEventTagId: string | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined, subaccountId: string | null | undefined): Observable<CampaignsListResponse> {
			return this.http.get<CampaignsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/campaigns&' + advertiserGroupIds?.map(z => `advertiserGroupIds=${encodeURIComponent(z)}`).join('&') + '&' + advertiserIds?.map(z => `advertiserIds=${encodeURIComponent(z)}`).join('&') + '&archived=' + archived + '&atLeastOneOptimizationActivity=' + atLeastOneOptimizationActivity + '&' + excludedIds?.map(z => `excludedIds=${encodeURIComponent(z)}`).join('&') + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&overriddenEventTagId=' + (overriddenEventTagId == null ? '' : encodeURIComponent(overriddenEventTagId)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&subaccountId=' + (subaccountId == null ? '' : encodeURIComponent(subaccountId)), {});
		}

		/**
		 * Updates an existing creative. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/campaigns
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. Campaign ID.
		 * @return {Campaign} Successful response
		 */
		Dfareporting_campaigns_patch(profileId: string, id: string, requestBody: Campaign): Observable<Campaign> {
			return this.http.patch<Campaign>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/campaigns&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new campaign.
		 * Post userprofiles/{profileId}/campaigns
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {Campaign} Successful response
		 */
		Dfareporting_campaigns_insert(profileId: string, requestBody: Campaign): Observable<Campaign> {
			return this.http.post<Campaign>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/campaigns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing campaign.
		 * Put userprofiles/{profileId}/campaigns
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {Campaign} Successful response
		 */
		Dfareporting_campaigns_update(profileId: string, requestBody: Campaign): Observable<Campaign> {
			return this.http.put<Campaign>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/campaigns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.
		 * Get userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} campaignId Campaign ID in this association.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {CampaignCreativeAssociationsListResponse} Successful response
		 */
		Dfareporting_campaignCreativeAssociations_list(profileId: string, campaignId: string, maxResults: number | null | undefined, pageToken: string | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<CampaignCreativeAssociationsListResponse> {
			return this.http.get<CampaignCreativeAssociationsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/campaigns/' + (campaignId == null ? '' : encodeURIComponent(campaignId)) + '/campaignCreativeAssociations&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
		 * Post userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} campaignId Campaign ID in this association.
		 * @return {CampaignCreativeAssociation} Successful response
		 */
		Dfareporting_campaignCreativeAssociations_insert(profileId: string, campaignId: string, requestBody: CampaignCreativeAssociation): Observable<CampaignCreativeAssociation> {
			return this.http.post<CampaignCreativeAssociation>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/campaigns/' + (campaignId == null ? '' : encodeURIComponent(campaignId)) + '/campaignCreativeAssociations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one campaign by ID.
		 * Get userprofiles/{profileId}/campaigns/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Campaign ID.
		 * @return {Campaign} Successful response
		 */
		Dfareporting_campaigns_get(profileId: string, id: string): Observable<Campaign> {
			return this.http.get<Campaign>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/campaigns/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @return {ChangeLogsListResponse} Successful response
		 */
		Dfareporting_changeLogs_list(profileId: string, action: Dfareporting_changeLogs_listAction | null | undefined, ids: Array<string> | null | undefined, maxChangeTime: string | null | undefined, maxResults: number | null | undefined, minChangeTime: string | null | undefined, objectIds: Array<string> | null | undefined, objectType: Dfareporting_changeLogs_listObjectType | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, userProfileIds: Array<string> | null | undefined): Observable<ChangeLogsListResponse> {
			return this.http.get<ChangeLogsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/changeLogs&action=' + action + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxChangeTime=' + (maxChangeTime == null ? '' : encodeURIComponent(maxChangeTime)) + '&maxResults=' + maxResults + '&minChangeTime=' + (minChangeTime == null ? '' : encodeURIComponent(minChangeTime)) + '&' + objectIds?.map(z => `objectIds=${encodeURIComponent(z)}`).join('&') + '&objectType=' + objectType + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&' + userProfileIds?.map(z => `userProfileIds=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Gets one change log by ID.
		 * Get userprofiles/{profileId}/changeLogs/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Change log ID.
		 * @return {ChangeLog} Successful response
		 */
		Dfareporting_changeLogs_get(profileId: string, id: string): Observable<ChangeLog> {
			return this.http.get<ChangeLog>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/changeLogs/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a list of cities, possibly filtered.
		 * Get userprofiles/{profileId}/cities
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} countryDartIds Select only cities from these countries.
		 * @param {Array<string>} dartIds Select only cities with these DART IDs.
		 * @param {string} namePrefix Select only cities with names starting with this prefix.
		 * @param {Array<string>} regionDartIds Select only cities from these regions.
		 * @return {CitiesListResponse} Successful response
		 */
		Dfareporting_cities_list(profileId: string, countryDartIds: Array<string> | null | undefined, dartIds: Array<string> | null | undefined, namePrefix: string | null | undefined, regionDartIds: Array<string> | null | undefined): Observable<CitiesListResponse> {
			return this.http.get<CitiesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/cities&' + countryDartIds?.map(z => `countryDartIds=${encodeURIComponent(z)}`).join('&') + '&' + dartIds?.map(z => `dartIds=${encodeURIComponent(z)}`).join('&') + '&namePrefix=' + (namePrefix == null ? '' : encodeURIComponent(namePrefix)) + '&' + regionDartIds?.map(z => `regionDartIds=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Retrieves a list of connection types.
		 * Get userprofiles/{profileId}/connectionTypes
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {ConnectionTypesListResponse} Successful response
		 */
		Dfareporting_connectionTypes_list(profileId: string): Observable<ConnectionTypesListResponse> {
			return this.http.get<ConnectionTypesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/connectionTypes', {});
		}

		/**
		 * Gets one connection type by ID.
		 * Get userprofiles/{profileId}/connectionTypes/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Connection type ID.
		 * @return {ConnectionType} Successful response
		 */
		Dfareporting_connectionTypes_get(profileId: string, id: string): Observable<ConnectionType> {
			return this.http.get<ConnectionType>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/connectionTypes/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @return {ContentCategoriesListResponse} Successful response
		 */
		Dfareporting_contentCategories_list(profileId: string, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<ContentCategoriesListResponse> {
			return this.http.get<ContentCategoriesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/contentCategories&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Updates an existing content category. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/contentCategories
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. ContentCategory ID.
		 * @return {ContentCategory} Successful response
		 */
		Dfareporting_contentCategories_patch(profileId: string, id: string, requestBody: ContentCategory): Observable<ContentCategory> {
			return this.http.patch<ContentCategory>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/contentCategories&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new content category.
		 * Post userprofiles/{profileId}/contentCategories
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {ContentCategory} Successful response
		 */
		Dfareporting_contentCategories_insert(profileId: string, requestBody: ContentCategory): Observable<ContentCategory> {
			return this.http.post<ContentCategory>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/contentCategories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing content category.
		 * Put userprofiles/{profileId}/contentCategories
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {ContentCategory} Successful response
		 */
		Dfareporting_contentCategories_update(profileId: string, requestBody: ContentCategory): Observable<ContentCategory> {
			return this.http.put<ContentCategory>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/contentCategories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @return {ContentCategory} Successful response
		 */
		Dfareporting_contentCategories_get(profileId: string, id: string): Observable<ContentCategory> {
			return this.http.get<ContentCategory>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/contentCategories/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Inserts conversions.
		 * Post userprofiles/{profileId}/conversions/batchinsert
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {ConversionsBatchInsertResponse} Successful response
		 */
		Dfareporting_conversions_batchinsert(profileId: string, requestBody: ConversionsBatchInsertRequest): Observable<ConversionsBatchInsertResponse> {
			return this.http.post<ConversionsBatchInsertResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/conversions/batchinsert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates existing conversions.
		 * Post userprofiles/{profileId}/conversions/batchupdate
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {ConversionsBatchUpdateResponse} Successful response
		 */
		Dfareporting_conversions_batchupdate(profileId: string, requestBody: ConversionsBatchUpdateRequest): Observable<ConversionsBatchUpdateResponse> {
			return this.http.post<ConversionsBatchUpdateResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/conversions/batchupdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of countries.
		 * Get userprofiles/{profileId}/countries
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {CountriesListResponse} Successful response
		 */
		Dfareporting_countries_list(profileId: string): Observable<CountriesListResponse> {
			return this.http.get<CountriesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/countries', {});
		}

		/**
		 * Gets one country by ID.
		 * Get userprofiles/{profileId}/countries/{dartId}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} dartId Country DART ID.
		 * @return {Country} Successful response
		 */
		Dfareporting_countries_get(profileId: string, dartId: string): Observable<Country> {
			return this.http.get<Country>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/countries/' + (dartId == null ? '' : encodeURIComponent(dartId)), {});
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
		 * @return {CreativeFieldsListResponse} Successful response
		 */
		Dfareporting_creativeFields_list(profileId: string, advertiserIds: Array<string> | null | undefined, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<CreativeFieldsListResponse> {
			return this.http.get<CreativeFieldsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields&' + advertiserIds?.map(z => `advertiserIds=${encodeURIComponent(z)}`).join('&') + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Updates an existing creative field. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/creativeFields
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id CreativeField ID.
		 * @return {CreativeField} Successful response
		 */
		Dfareporting_creativeFields_patch(profileId: string, id: string, requestBody: CreativeField): Observable<CreativeField> {
			return this.http.patch<CreativeField>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new creative field.
		 * Post userprofiles/{profileId}/creativeFields
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {CreativeField} Successful response
		 */
		Dfareporting_creativeFields_insert(profileId: string, requestBody: CreativeField): Observable<CreativeField> {
			return this.http.post<CreativeField>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing creative field.
		 * Put userprofiles/{profileId}/creativeFields
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {CreativeField} Successful response
		 */
		Dfareporting_creativeFields_update(profileId: string, requestBody: CreativeField): Observable<CreativeField> {
			return this.http.put<CreativeField>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @return {CreativeFieldValuesListResponse} Successful response
		 */
		Dfareporting_creativeFieldValues_list(profileId: string, creativeFieldId: string, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_creativeFieldValues_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<CreativeFieldValuesListResponse> {
			return this.http.get<CreativeFieldValuesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields/' + (creativeFieldId == null ? '' : encodeURIComponent(creativeFieldId)) + '/creativeFieldValues&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Updates an existing creative field value. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} creativeFieldId CreativeField ID.
		 * @param {string} id CreativeFieldValue ID.
		 * @return {CreativeFieldValue} Successful response
		 */
		Dfareporting_creativeFieldValues_patch(profileId: string, creativeFieldId: string, id: string, requestBody: CreativeFieldValue): Observable<CreativeFieldValue> {
			return this.http.patch<CreativeFieldValue>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields/' + (creativeFieldId == null ? '' : encodeURIComponent(creativeFieldId)) + '/creativeFieldValues&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new creative field value.
		 * Post userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} creativeFieldId Creative field ID for this creative field value.
		 * @return {CreativeFieldValue} Successful response
		 */
		Dfareporting_creativeFieldValues_insert(profileId: string, creativeFieldId: string, requestBody: CreativeFieldValue): Observable<CreativeFieldValue> {
			return this.http.post<CreativeFieldValue>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields/' + (creativeFieldId == null ? '' : encodeURIComponent(creativeFieldId)) + '/creativeFieldValues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing creative field value.
		 * Put userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} creativeFieldId Creative field ID for this creative field value.
		 * @return {CreativeFieldValue} Successful response
		 */
		Dfareporting_creativeFieldValues_update(profileId: string, creativeFieldId: string, requestBody: CreativeFieldValue): Observable<CreativeFieldValue> {
			return this.http.put<CreativeFieldValue>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields/' + (creativeFieldId == null ? '' : encodeURIComponent(creativeFieldId)) + '/creativeFieldValues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @return {CreativeFieldValue} Successful response
		 */
		Dfareporting_creativeFieldValues_get(profileId: string, creativeFieldId: string, id: string): Observable<CreativeFieldValue> {
			return this.http.get<CreativeFieldValue>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields/' + (creativeFieldId == null ? '' : encodeURIComponent(creativeFieldId)) + '/creativeFieldValues/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @return {CreativeField} Successful response
		 */
		Dfareporting_creativeFields_get(profileId: string, id: string): Observable<CreativeField> {
			return this.http.get<CreativeField>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeFields/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @return {CreativeGroupsListResponse} Successful response
		 */
		Dfareporting_creativeGroups_list(profileId: string, advertiserIds: Array<string> | null | undefined, groupNumber: number | null | undefined, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<CreativeGroupsListResponse> {
			return this.http.get<CreativeGroupsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeGroups&' + advertiserIds?.map(z => `advertiserIds=${encodeURIComponent(z)}`).join('&') + '&groupNumber=' + groupNumber + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Updates an existing creative group. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/creativeGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. Creative Group ID.
		 * @return {CreativeGroup} Successful response
		 */
		Dfareporting_creativeGroups_patch(profileId: string, id: string, requestBody: CreativeGroup): Observable<CreativeGroup> {
			return this.http.patch<CreativeGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeGroups&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new creative group.
		 * Post userprofiles/{profileId}/creativeGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {CreativeGroup} Successful response
		 */
		Dfareporting_creativeGroups_insert(profileId: string, requestBody: CreativeGroup): Observable<CreativeGroup> {
			return this.http.post<CreativeGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing creative group.
		 * Put userprofiles/{profileId}/creativeGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {CreativeGroup} Successful response
		 */
		Dfareporting_creativeGroups_update(profileId: string, requestBody: CreativeGroup): Observable<CreativeGroup> {
			return this.http.put<CreativeGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one creative group by ID.
		 * Get userprofiles/{profileId}/creativeGroups/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Creative group ID.
		 * @return {CreativeGroup} Successful response
		 */
		Dfareporting_creativeGroups_get(profileId: string, id: string): Observable<CreativeGroup> {
			return this.http.get<CreativeGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creativeGroups/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @return {CreativesListResponse} Successful response
		 */
		Dfareporting_creatives_list(profileId: string, active: boolean | null | undefined, advertiserId: string | null | undefined, archived: boolean | null | undefined, campaignId: string | null | undefined, companionCreativeIds: Array<string> | null | undefined, creativeFieldIds: Array<string> | null | undefined, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, renderingIds: Array<string> | null | undefined, searchString: string | null | undefined, sizeIds: Array<string> | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined, studioCreativeId: string | null | undefined, types: Array<CreativeType> | null | undefined): Observable<CreativesListResponse> {
			return this.http.get<CreativesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creatives&active=' + active + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&archived=' + archived + '&campaignId=' + (campaignId == null ? '' : encodeURIComponent(campaignId)) + '&' + companionCreativeIds?.map(z => `companionCreativeIds=${encodeURIComponent(z)}`).join('&') + '&' + creativeFieldIds?.map(z => `creativeFieldIds=${encodeURIComponent(z)}`).join('&') + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + renderingIds?.map(z => `renderingIds=${encodeURIComponent(z)}`).join('&') + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&' + sizeIds?.map(z => `sizeIds=${encodeURIComponent(z)}`).join('&') + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&studioCreativeId=' + (studioCreativeId == null ? '' : encodeURIComponent(studioCreativeId)) + '&' + types?.map(z => `types=${z}`).join('&'), {});
		}

		/**
		 * Updates an existing creative. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/creatives
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. Creative ID.
		 * @return {Creative} Successful response
		 */
		Dfareporting_creatives_patch(profileId: string, id: string, requestBody: Creative): Observable<Creative> {
			return this.http.patch<Creative>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creatives&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new creative.
		 * Post userprofiles/{profileId}/creatives
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {Creative} Successful response
		 */
		Dfareporting_creatives_insert(profileId: string, requestBody: Creative): Observable<Creative> {
			return this.http.post<Creative>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creatives', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing creative.
		 * Put userprofiles/{profileId}/creatives
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {Creative} Successful response
		 */
		Dfareporting_creatives_update(profileId: string, requestBody: Creative): Observable<Creative> {
			return this.http.put<Creative>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creatives', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one creative by ID.
		 * Get userprofiles/{profileId}/creatives/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Creative ID.
		 * @return {Creative} Successful response
		 */
		Dfareporting_creatives_get(profileId: string, id: string): Observable<Creative> {
			return this.http.get<Creative>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/creatives/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves list of report dimension values for a list of filters.
		 * Post userprofiles/{profileId}/dimensionvalues/query
		 * @param {string} profileId The Campaign Manager 360 user profile ID.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken The value of the nextToken from the previous result page.
		 * @return {DimensionValueList} Successful response
		 */
		Dfareporting_dimensionValues_query(profileId: string, maxResults: number | null | undefined, pageToken: string | null | undefined, requestBody: DimensionValueRequest): Observable<DimensionValueList> {
			return this.http.post<DimensionValueList>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/dimensionvalues/query&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @return {DirectorySitesListResponse} Successful response
		 */
		Dfareporting_directorySites_list(profileId: string, acceptsInStreamVideoPlacements: boolean | null | undefined, acceptsInterstitialPlacements: boolean | null | undefined, acceptsPublisherPaidPlacements: boolean | null | undefined, active: boolean | null | undefined, dfpNetworkCode: string | null | undefined, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<DirectorySitesListResponse> {
			return this.http.get<DirectorySitesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/directorySites&acceptsInStreamVideoPlacements=' + acceptsInStreamVideoPlacements + '&acceptsInterstitialPlacements=' + acceptsInterstitialPlacements + '&acceptsPublisherPaidPlacements=' + acceptsPublisherPaidPlacements + '&active=' + active + '&dfpNetworkCode=' + (dfpNetworkCode == null ? '' : encodeURIComponent(dfpNetworkCode)) + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Inserts a new directory site.
		 * Post userprofiles/{profileId}/directorySites
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {DirectorySite} Successful response
		 */
		Dfareporting_directorySites_insert(profileId: string, requestBody: DirectorySite): Observable<DirectorySite> {
			return this.http.post<DirectorySite>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/directorySites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one directory site by ID.
		 * Get userprofiles/{profileId}/directorySites/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Directory site ID.
		 * @return {DirectorySite} Successful response
		 */
		Dfareporting_directorySites_get(profileId: string, id: string): Observable<DirectorySite> {
			return this.http.get<DirectorySite>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/directorySites/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a list of dynamic targeting keys.
		 * Get userprofiles/{profileId}/dynamicTargetingKeys
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} advertiserId Select only dynamic targeting keys whose object has this advertiser ID.
		 * @param {Array<string>} names Select only dynamic targeting keys exactly matching these names.
		 * @param {string} objectId Select only dynamic targeting keys with this object ID.
		 * @param {DynamicTargetingKeyObjectType} objectType Select only dynamic targeting keys with this object type.
		 * @return {DynamicTargetingKeysListResponse} Successful response
		 */
		Dfareporting_dynamicTargetingKeys_list(profileId: string, advertiserId: string | null | undefined, names: Array<string> | null | undefined, objectId: string | null | undefined, objectType: DynamicTargetingKeyObjectType | null | undefined): Observable<DynamicTargetingKeysListResponse> {
			return this.http.get<DynamicTargetingKeysListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/dynamicTargetingKeys&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&') + '&objectId=' + (objectId == null ? '' : encodeURIComponent(objectId)) + '&objectType=' + objectType, {});
		}

		/**
		 * Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
		 * Post userprofiles/{profileId}/dynamicTargetingKeys
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {DynamicTargetingKey} Successful response
		 */
		Dfareporting_dynamicTargetingKeys_insert(profileId: string, requestBody: DynamicTargetingKey): Observable<DynamicTargetingKey> {
			return this.http.post<DynamicTargetingKey>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/dynamicTargetingKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing dynamic targeting key.
		 * Delete userprofiles/{profileId}/dynamicTargetingKeys/{objectId}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} objectId ID of the object of this dynamic targeting key. This is a required field.
		 * @param {string} name Required. Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.
		 * @param {DynamicTargetingKeyObjectType} objectType Required. Type of the object of this dynamic targeting key. This is a required field.
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
		 * @return {EventTagsListResponse} Successful response
		 */
		Dfareporting_eventTags_list(profileId: string, adId: string | null | undefined, advertiserId: string | null | undefined, campaignId: string | null | undefined, definitionsOnly: boolean | null | undefined, enabled: boolean | null | undefined, eventTagTypes: Array<EventTagType> | null | undefined, ids: Array<string> | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<EventTagsListResponse> {
			return this.http.get<EventTagsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/eventTags&adId=' + (adId == null ? '' : encodeURIComponent(adId)) + '&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&campaignId=' + (campaignId == null ? '' : encodeURIComponent(campaignId)) + '&definitionsOnly=' + definitionsOnly + '&enabled=' + enabled + '&' + eventTagTypes?.map(z => `eventTagTypes=${z}`).join('&') + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Updates an existing event tag. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/eventTags
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. EventTag ID.
		 * @return {EventTag} Successful response
		 */
		Dfareporting_eventTags_patch(profileId: string, id: string, requestBody: EventTag): Observable<EventTag> {
			return this.http.patch<EventTag>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/eventTags&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new event tag.
		 * Post userprofiles/{profileId}/eventTags
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {EventTag} Successful response
		 */
		Dfareporting_eventTags_insert(profileId: string, requestBody: EventTag): Observable<EventTag> {
			return this.http.post<EventTag>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/eventTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing event tag.
		 * Put userprofiles/{profileId}/eventTags
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {EventTag} Successful response
		 */
		Dfareporting_eventTags_update(profileId: string, requestBody: EventTag): Observable<EventTag> {
			return this.http.put<EventTag>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/eventTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @return {EventTag} Successful response
		 */
		Dfareporting_eventTags_get(profileId: string, id: string): Observable<EventTag> {
			return this.http.get<EventTag>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/eventTags/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Lists files for a user profile.
		 * Get userprofiles/{profileId}/files
		 * @param {string} profileId The Campaign Manager 360 user profile ID.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken The value of the nextToken from the previous result page.
		 * @param {Dfareporting_files_listScope} scope The scope that defines which results are returned.
		 * @param {Dfareporting_files_listSortField} sortField The field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {FileList} Successful response
		 */
		Dfareporting_files_list(profileId: string, maxResults: number | null | undefined, pageToken: string | null | undefined, scope: Dfareporting_files_listScope | null | undefined, sortField: Dfareporting_files_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<FileList> {
			return this.http.get<FileList>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/files&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&scope=' + scope + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
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
		 * @return {FloodlightActivitiesListResponse} Successful response
		 */
		Dfareporting_floodlightActivities_list(profileId: string, advertiserId: string | null | undefined, floodlightActivityGroupIds: Array<string> | null | undefined, floodlightActivityGroupName: string | null | undefined, floodlightActivityGroupTagString: string | null | undefined, floodlightActivityGroupType: FloodlightActivityFloodlightActivityGroupType | null | undefined, floodlightConfigurationId: string | null | undefined, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined, tagString: string | null | undefined): Observable<FloodlightActivitiesListResponse> {
			return this.http.get<FloodlightActivitiesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivities&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&' + floodlightActivityGroupIds?.map(z => `floodlightActivityGroupIds=${encodeURIComponent(z)}`).join('&') + '&floodlightActivityGroupName=' + (floodlightActivityGroupName == null ? '' : encodeURIComponent(floodlightActivityGroupName)) + '&floodlightActivityGroupTagString=' + (floodlightActivityGroupTagString == null ? '' : encodeURIComponent(floodlightActivityGroupTagString)) + '&floodlightActivityGroupType=' + floodlightActivityGroupType + '&floodlightConfigurationId=' + (floodlightConfigurationId == null ? '' : encodeURIComponent(floodlightConfigurationId)) + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&tagString=' + (tagString == null ? '' : encodeURIComponent(tagString)), {});
		}

		/**
		 * Updates an existing event tag. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/floodlightActivities
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. EventTag ID.
		 * @return {FloodlightActivity} Successful response
		 */
		Dfareporting_floodlightActivities_patch(profileId: string, id: string, requestBody: FloodlightActivity): Observable<FloodlightActivity> {
			return this.http.patch<FloodlightActivity>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivities&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new floodlight activity.
		 * Post userprofiles/{profileId}/floodlightActivities
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {FloodlightActivity} Successful response
		 */
		Dfareporting_floodlightActivities_insert(profileId: string, requestBody: FloodlightActivity): Observable<FloodlightActivity> {
			return this.http.post<FloodlightActivity>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing floodlight activity.
		 * Put userprofiles/{profileId}/floodlightActivities
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {FloodlightActivity} Successful response
		 */
		Dfareporting_floodlightActivities_update(profileId: string, requestBody: FloodlightActivity): Observable<FloodlightActivity> {
			return this.http.put<FloodlightActivity>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates a tag for a floodlight activity.
		 * Post userprofiles/{profileId}/floodlightActivities/generatetag
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} floodlightActivityId Floodlight activity ID for which we want to generate a tag.
		 * @return {FloodlightActivitiesGenerateTagResponse} Successful response
		 */
		Dfareporting_floodlightActivities_generatetag(profileId: string, floodlightActivityId: string | null | undefined): Observable<FloodlightActivitiesGenerateTagResponse> {
			return this.http.post<FloodlightActivitiesGenerateTagResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivities/generatetag&floodlightActivityId=' + (floodlightActivityId == null ? '' : encodeURIComponent(floodlightActivityId)), null, {});
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
		 * @return {FloodlightActivity} Successful response
		 */
		Dfareporting_floodlightActivities_get(profileId: string, id: string): Observable<FloodlightActivity> {
			return this.http.get<FloodlightActivity>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivities/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @return {FloodlightActivityGroupsListResponse} Successful response
		 */
		Dfareporting_floodlightActivityGroups_list(profileId: string, advertiserId: string | null | undefined, floodlightConfigurationId: string | null | undefined, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined, type: FloodlightActivityFloodlightActivityGroupType | null | undefined): Observable<FloodlightActivityGroupsListResponse> {
			return this.http.get<FloodlightActivityGroupsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivityGroups&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&floodlightConfigurationId=' + (floodlightConfigurationId == null ? '' : encodeURIComponent(floodlightConfigurationId)) + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&type=' + type, {});
		}

		/**
		 * Updates an existing event tag. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/floodlightActivityGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. EventTag ID.
		 * @return {FloodlightActivityGroup} Successful response
		 */
		Dfareporting_floodlightActivityGroups_patch(profileId: string, id: string, requestBody: FloodlightActivityGroup): Observable<FloodlightActivityGroup> {
			return this.http.patch<FloodlightActivityGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivityGroups&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new floodlight activity group.
		 * Post userprofiles/{profileId}/floodlightActivityGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {FloodlightActivityGroup} Successful response
		 */
		Dfareporting_floodlightActivityGroups_insert(profileId: string, requestBody: FloodlightActivityGroup): Observable<FloodlightActivityGroup> {
			return this.http.post<FloodlightActivityGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivityGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing floodlight activity group.
		 * Put userprofiles/{profileId}/floodlightActivityGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {FloodlightActivityGroup} Successful response
		 */
		Dfareporting_floodlightActivityGroups_update(profileId: string, requestBody: FloodlightActivityGroup): Observable<FloodlightActivityGroup> {
			return this.http.put<FloodlightActivityGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivityGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one floodlight activity group by ID.
		 * Get userprofiles/{profileId}/floodlightActivityGroups/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Floodlight activity Group ID.
		 * @return {FloodlightActivityGroup} Successful response
		 */
		Dfareporting_floodlightActivityGroups_get(profileId: string, id: string): Observable<FloodlightActivityGroup> {
			return this.http.get<FloodlightActivityGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightActivityGroups/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a list of floodlight configurations, possibly filtered.
		 * Get userprofiles/{profileId}/floodlightConfigurations
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} ids Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned.
		 * @return {FloodlightConfigurationsListResponse} Successful response
		 */
		Dfareporting_floodlightConfigurations_list(profileId: string, ids: Array<string> | null | undefined): Observable<FloodlightConfigurationsListResponse> {
			return this.http.get<FloodlightConfigurationsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightConfigurations&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates an existing event tag. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/floodlightConfigurations
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. EventTag ID.
		 * @return {FloodlightConfiguration} Successful response
		 */
		Dfareporting_floodlightConfigurations_patch(profileId: string, id: string, requestBody: FloodlightConfiguration): Observable<FloodlightConfiguration> {
			return this.http.patch<FloodlightConfiguration>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightConfigurations&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing floodlight configuration.
		 * Put userprofiles/{profileId}/floodlightConfigurations
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {FloodlightConfiguration} Successful response
		 */
		Dfareporting_floodlightConfigurations_update(profileId: string, requestBody: FloodlightConfiguration): Observable<FloodlightConfiguration> {
			return this.http.put<FloodlightConfiguration>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one floodlight configuration by ID.
		 * Get userprofiles/{profileId}/floodlightConfigurations/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Floodlight configuration ID.
		 * @return {FloodlightConfiguration} Successful response
		 */
		Dfareporting_floodlightConfigurations_get(profileId: string, id: string): Observable<FloodlightConfiguration> {
			return this.http.get<FloodlightConfiguration>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/floodlightConfigurations/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a list of languages.
		 * Get userprofiles/{profileId}/languages
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {LanguagesListResponse} Successful response
		 */
		Dfareporting_languages_list(profileId: string): Observable<LanguagesListResponse> {
			return this.http.get<LanguagesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/languages', {});
		}

		/**
		 * Retrieves a list of metros.
		 * Get userprofiles/{profileId}/metros
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {MetrosListResponse} Successful response
		 */
		Dfareporting_metros_list(profileId: string): Observable<MetrosListResponse> {
			return this.http.get<MetrosListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/metros', {});
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
		 * @return {MobileAppsListResponse} Successful response
		 */
		Dfareporting_mobileApps_list(profileId: string, directories: Array<MobileAppDirectory> | null | undefined, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined): Observable<MobileAppsListResponse> {
			return this.http.get<MobileAppsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/mobileApps&' + directories?.map(z => `directories=${z}`).join('&') + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)), {});
		}

		/**
		 * Gets one mobile app by ID.
		 * Get userprofiles/{profileId}/mobileApps/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Mobile app ID.
		 * @return {MobileApp} Successful response
		 */
		Dfareporting_mobileApps_get(profileId: string, id: string): Observable<MobileApp> {
			return this.http.get<MobileApp>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/mobileApps/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a list of mobile carriers.
		 * Get userprofiles/{profileId}/mobileCarriers
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {MobileCarriersListResponse} Successful response
		 */
		Dfareporting_mobileCarriers_list(profileId: string): Observable<MobileCarriersListResponse> {
			return this.http.get<MobileCarriersListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/mobileCarriers', {});
		}

		/**
		 * Gets one mobile carrier by ID.
		 * Get userprofiles/{profileId}/mobileCarriers/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Mobile carrier ID.
		 * @return {MobileCarrier} Successful response
		 */
		Dfareporting_mobileCarriers_get(profileId: string, id: string): Observable<MobileCarrier> {
			return this.http.get<MobileCarrier>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/mobileCarriers/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a list of operating system versions.
		 * Get userprofiles/{profileId}/operatingSystemVersions
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {OperatingSystemVersionsListResponse} Successful response
		 */
		Dfareporting_operatingSystemVersions_list(profileId: string): Observable<OperatingSystemVersionsListResponse> {
			return this.http.get<OperatingSystemVersionsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/operatingSystemVersions', {});
		}

		/**
		 * Gets one operating system version by ID.
		 * Get userprofiles/{profileId}/operatingSystemVersions/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Operating system version ID.
		 * @return {OperatingSystemVersion} Successful response
		 */
		Dfareporting_operatingSystemVersions_get(profileId: string, id: string): Observable<OperatingSystemVersion> {
			return this.http.get<OperatingSystemVersion>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/operatingSystemVersions/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a list of operating systems.
		 * Get userprofiles/{profileId}/operatingSystems
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {OperatingSystemsListResponse} Successful response
		 */
		Dfareporting_operatingSystems_list(profileId: string): Observable<OperatingSystemsListResponse> {
			return this.http.get<OperatingSystemsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/operatingSystems', {});
		}

		/**
		 * Gets one operating system by DART ID.
		 * Get userprofiles/{profileId}/operatingSystems/{dartId}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} dartId Operating system DART ID.
		 * @return {OperatingSystem} Successful response
		 */
		Dfareporting_operatingSystems_get(profileId: string, dartId: string): Observable<OperatingSystem> {
			return this.http.get<OperatingSystem>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/operatingSystems/' + (dartId == null ? '' : encodeURIComponent(dartId)), {});
		}

		/**
		 * Retrieves a list of placement groups, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/placementGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<PlacementActiveStatus>} activeStatus Select only placements with these active statuses.
		 * @param {Array<string>} advertiserIds Select only placement groups that belong to these advertisers.
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
		 * @return {PlacementGroupsListResponse} Successful response
		 */
		Dfareporting_placementGroups_list(profileId: string, activeStatus: Array<PlacementActiveStatus> | null | undefined, advertiserIds: Array<string> | null | undefined, campaignIds: Array<string> | null | undefined, contentCategoryIds: Array<string> | null | undefined, directorySiteIds: Array<string> | null | undefined, ids: Array<string> | null | undefined, maxEndDate: string | null | undefined, maxResults: number | null | undefined, maxStartDate: string | null | undefined, minEndDate: string | null | undefined, minStartDate: string | null | undefined, pageToken: string | null | undefined, placementGroupType: PlacementGroupPlacementGroupType | null | undefined, placementStrategyIds: Array<string> | null | undefined, pricingTypes: Array<PricingSchedulePricingType> | null | undefined, searchString: string | null | undefined, siteIds: Array<string> | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<PlacementGroupsListResponse> {
			return this.http.get<PlacementGroupsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementGroups&' + activeStatus?.map(z => `activeStatus=${z}`).join('&') + '&' + advertiserIds?.map(z => `advertiserIds=${encodeURIComponent(z)}`).join('&') + '&' + campaignIds?.map(z => `campaignIds=${encodeURIComponent(z)}`).join('&') + '&' + contentCategoryIds?.map(z => `contentCategoryIds=${encodeURIComponent(z)}`).join('&') + '&' + directorySiteIds?.map(z => `directorySiteIds=${encodeURIComponent(z)}`).join('&') + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxEndDate=' + (maxEndDate == null ? '' : encodeURIComponent(maxEndDate)) + '&maxResults=' + maxResults + '&maxStartDate=' + (maxStartDate == null ? '' : encodeURIComponent(maxStartDate)) + '&minEndDate=' + (minEndDate == null ? '' : encodeURIComponent(minEndDate)) + '&minStartDate=' + (minStartDate == null ? '' : encodeURIComponent(minStartDate)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&placementGroupType=' + placementGroupType + '&' + placementStrategyIds?.map(z => `placementStrategyIds=${encodeURIComponent(z)}`).join('&') + '&' + pricingTypes?.map(z => `pricingTypes=${z}`).join('&') + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&' + siteIds?.map(z => `siteIds=${encodeURIComponent(z)}`).join('&') + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Updates an existing placement group. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/placementGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. Placement ID.
		 * @return {PlacementGroup} Successful response
		 */
		Dfareporting_placementGroups_patch(profileId: string, id: string, requestBody: PlacementGroup): Observable<PlacementGroup> {
			return this.http.patch<PlacementGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementGroups&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new placement group.
		 * Post userprofiles/{profileId}/placementGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {PlacementGroup} Successful response
		 */
		Dfareporting_placementGroups_insert(profileId: string, requestBody: PlacementGroup): Observable<PlacementGroup> {
			return this.http.post<PlacementGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing placement group.
		 * Put userprofiles/{profileId}/placementGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {PlacementGroup} Successful response
		 */
		Dfareporting_placementGroups_update(profileId: string, requestBody: PlacementGroup): Observable<PlacementGroup> {
			return this.http.put<PlacementGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one placement group by ID.
		 * Get userprofiles/{profileId}/placementGroups/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Placement group ID.
		 * @return {PlacementGroup} Successful response
		 */
		Dfareporting_placementGroups_get(profileId: string, id: string): Observable<PlacementGroup> {
			return this.http.get<PlacementGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementGroups/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @return {PlacementStrategiesListResponse} Successful response
		 */
		Dfareporting_placementStrategies_list(profileId: string, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<PlacementStrategiesListResponse> {
			return this.http.get<PlacementStrategiesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementStrategies&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Updates an existing placement strategy. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/placementStrategies
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. PlacementStrategy ID.
		 * @return {PlacementStrategy} Successful response
		 */
		Dfareporting_placementStrategies_patch(profileId: string, id: string, requestBody: PlacementStrategy): Observable<PlacementStrategy> {
			return this.http.patch<PlacementStrategy>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementStrategies&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new placement strategy.
		 * Post userprofiles/{profileId}/placementStrategies
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {PlacementStrategy} Successful response
		 */
		Dfareporting_placementStrategies_insert(profileId: string, requestBody: PlacementStrategy): Observable<PlacementStrategy> {
			return this.http.post<PlacementStrategy>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementStrategies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing placement strategy.
		 * Put userprofiles/{profileId}/placementStrategies
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {PlacementStrategy} Successful response
		 */
		Dfareporting_placementStrategies_update(profileId: string, requestBody: PlacementStrategy): Observable<PlacementStrategy> {
			return this.http.put<PlacementStrategy>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementStrategies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @return {PlacementStrategy} Successful response
		 */
		Dfareporting_placementStrategies_get(profileId: string, id: string): Observable<PlacementStrategy> {
			return this.http.get<PlacementStrategy>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placementStrategies/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a list of placements, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/placements
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<PlacementActiveStatus>} activeStatus Select only placements with these active statuses.
		 * @param {Array<string>} advertiserIds Select only placements that belong to these advertisers.
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
		 * @param {string} searchString Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement" .
		 * @param {Array<string>} siteIds Select only placements that are associated with these sites.
		 * @param {Array<string>} sizeIds Select only placements that are associated with these sizes.
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {PlacementsListResponse} Successful response
		 */
		Dfareporting_placements_list(profileId: string, activeStatus: Array<PlacementActiveStatus> | null | undefined, advertiserIds: Array<string> | null | undefined, campaignIds: Array<string> | null | undefined, compatibilities: Array<AdCompatibility> | null | undefined, contentCategoryIds: Array<string> | null | undefined, directorySiteIds: Array<string> | null | undefined, groupIds: Array<string> | null | undefined, ids: Array<string> | null | undefined, maxEndDate: string | null | undefined, maxResults: number | null | undefined, maxStartDate: string | null | undefined, minEndDate: string | null | undefined, minStartDate: string | null | undefined, pageToken: string | null | undefined, paymentSource: PlacementPaymentSource | null | undefined, placementStrategyIds: Array<string> | null | undefined, pricingTypes: Array<PricingSchedulePricingType> | null | undefined, searchString: string | null | undefined, siteIds: Array<string> | null | undefined, sizeIds: Array<string> | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<PlacementsListResponse> {
			return this.http.get<PlacementsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placements&' + activeStatus?.map(z => `activeStatus=${z}`).join('&') + '&' + advertiserIds?.map(z => `advertiserIds=${encodeURIComponent(z)}`).join('&') + '&' + campaignIds?.map(z => `campaignIds=${encodeURIComponent(z)}`).join('&') + '&' + compatibilities?.map(z => `compatibilities=${z}`).join('&') + '&' + contentCategoryIds?.map(z => `contentCategoryIds=${encodeURIComponent(z)}`).join('&') + '&' + directorySiteIds?.map(z => `directorySiteIds=${encodeURIComponent(z)}`).join('&') + '&' + groupIds?.map(z => `groupIds=${encodeURIComponent(z)}`).join('&') + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxEndDate=' + (maxEndDate == null ? '' : encodeURIComponent(maxEndDate)) + '&maxResults=' + maxResults + '&maxStartDate=' + (maxStartDate == null ? '' : encodeURIComponent(maxStartDate)) + '&minEndDate=' + (minEndDate == null ? '' : encodeURIComponent(minEndDate)) + '&minStartDate=' + (minStartDate == null ? '' : encodeURIComponent(minStartDate)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&paymentSource=' + paymentSource + '&' + placementStrategyIds?.map(z => `placementStrategyIds=${encodeURIComponent(z)}`).join('&') + '&' + pricingTypes?.map(z => `pricingTypes=${z}`).join('&') + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&' + siteIds?.map(z => `siteIds=${encodeURIComponent(z)}`).join('&') + '&' + sizeIds?.map(z => `sizeIds=${encodeURIComponent(z)}`).join('&') + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Updates an existing placement. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/placements
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. Placement ID.
		 * @return {Placement} Successful response
		 */
		Dfareporting_placements_patch(profileId: string, id: string, requestBody: Placement): Observable<Placement> {
			return this.http.patch<Placement>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placements&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new placement.
		 * Post userprofiles/{profileId}/placements
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {Placement} Successful response
		 */
		Dfareporting_placements_insert(profileId: string, requestBody: Placement): Observable<Placement> {
			return this.http.post<Placement>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing placement.
		 * Put userprofiles/{profileId}/placements
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {Placement} Successful response
		 */
		Dfareporting_placements_update(profileId: string, requestBody: Placement): Observable<Placement> {
			return this.http.put<Placement>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates tags for a placement.
		 * Post userprofiles/{profileId}/placements/generatetags
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} campaignId Generate placements belonging to this campaign. This is a required field.
		 * @param {Array<string>} placementIds Generate tags for these placements.
		 * @param {Array<TagDataFormat>} tagFormats Tag formats to generate for these placements. *Note:* PLACEMENT_TAG_STANDARD can only be generated for 1x1 placements.
		 * @return {PlacementsGenerateTagsResponse} Successful response
		 */
		Dfareporting_placements_generatetags(profileId: string, campaignId: string | null | undefined, placementIds: Array<string> | null | undefined, tagFormats: Array<TagDataFormat> | null | undefined): Observable<PlacementsGenerateTagsResponse> {
			return this.http.post<PlacementsGenerateTagsResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placements/generatetags&campaignId=' + (campaignId == null ? '' : encodeURIComponent(campaignId)) + '&' + placementIds?.map(z => `placementIds=${encodeURIComponent(z)}`).join('&') + '&' + tagFormats?.map(z => `tagFormats=${z}`).join('&'), null, {});
		}

		/**
		 * Gets one placement by ID.
		 * Get userprofiles/{profileId}/placements/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Placement ID.
		 * @return {Placement} Successful response
		 */
		Dfareporting_placements_get(profileId: string, id: string): Observable<Placement> {
			return this.http.get<Placement>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/placements/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a list of platform types.
		 * Get userprofiles/{profileId}/platformTypes
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {PlatformTypesListResponse} Successful response
		 */
		Dfareporting_platformTypes_list(profileId: string): Observable<PlatformTypesListResponse> {
			return this.http.get<PlatformTypesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/platformTypes', {});
		}

		/**
		 * Gets one platform type by ID.
		 * Get userprofiles/{profileId}/platformTypes/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Platform type ID.
		 * @return {PlatformType} Successful response
		 */
		Dfareporting_platformTypes_get(profileId: string, id: string): Observable<PlatformType> {
			return this.http.get<PlatformType>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/platformTypes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a list of postal codes.
		 * Get userprofiles/{profileId}/postalCodes
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {PostalCodesListResponse} Successful response
		 */
		Dfareporting_postalCodes_list(profileId: string): Observable<PostalCodesListResponse> {
			return this.http.get<PostalCodesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/postalCodes', {});
		}

		/**
		 * Gets one postal code by ID.
		 * Get userprofiles/{profileId}/postalCodes/{code}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} code Postal code ID.
		 * @return {PostalCode} Successful response
		 */
		Dfareporting_postalCodes_get(profileId: string, code: string): Observable<PostalCode> {
			return this.http.get<PostalCode>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/postalCodes/' + (code == null ? '' : encodeURIComponent(code)), {});
		}

		/**
		 * Retrieves a list of projects, possibly filtered. This method supports paging .
		 * Get userprofiles/{profileId}/projects
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} advertiserIds Select only projects with these advertiser IDs.
		 * @param {Array<string>} ids Select only projects with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for projects by name or ID. Wildcards (*) are allowed. For example, "project*2015" will return projects with names like "project June 2015", "project April 2015", or simply "project 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "project" will match projects with name "my project", "project 2015", or simply "project".
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {ProjectsListResponse} Successful response
		 */
		Dfareporting_projects_list(profileId: string, advertiserIds: Array<string> | null | undefined, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<ProjectsListResponse> {
			return this.http.get<ProjectsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/projects&' + advertiserIds?.map(z => `advertiserIds=${encodeURIComponent(z)}`).join('&') + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Gets one project by ID.
		 * Get userprofiles/{profileId}/projects/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Project ID.
		 * @return {Project} Successful response
		 */
		Dfareporting_projects_get(profileId: string, id: string): Observable<Project> {
			return this.http.get<Project>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/projects/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @return {InventoryItemsListResponse} Successful response
		 */
		Dfareporting_inventoryItems_list(profileId: string, projectId: string, ids: Array<string> | null | undefined, inPlan: boolean | null | undefined, maxResults: number | null | undefined, orderId: Array<string> | null | undefined, pageToken: string | null | undefined, siteId: Array<string> | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined, type: InventoryItemType | null | undefined): Observable<InventoryItemsListResponse> {
			return this.http.get<InventoryItemsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/inventoryItems&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&inPlan=' + inPlan + '&maxResults=' + maxResults + '&' + orderId?.map(z => `orderId=${encodeURIComponent(z)}`).join('&') + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + siteId?.map(z => `siteId=${encodeURIComponent(z)}`).join('&') + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&type=' + type, {});
		}

		/**
		 * Gets one inventory item by ID.
		 * Get userprofiles/{profileId}/projects/{projectId}/inventoryItems/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} projectId Project ID for order documents.
		 * @param {string} id Inventory item ID.
		 * @return {InventoryItem} Successful response
		 */
		Dfareporting_inventoryItems_get(profileId: string, projectId: string, id: string): Observable<InventoryItem> {
			return this.http.get<InventoryItem>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/inventoryItems/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @return {OrdersListResponse} Successful response
		 */
		Dfareporting_orders_list(profileId: string, projectId: string, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, siteId: Array<string> | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<OrdersListResponse> {
			return this.http.get<OrdersListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/orders&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&' + siteId?.map(z => `siteId=${encodeURIComponent(z)}`).join('&') + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Gets one order by ID.
		 * Get userprofiles/{profileId}/projects/{projectId}/orders/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} projectId Project ID for orders.
		 * @param {string} id Order ID.
		 * @return {Order} Successful response
		 */
		Dfareporting_orders_get(profileId: string, projectId: string, id: string): Observable<Order> {
			return this.http.get<Order>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/orders/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a list of regions.
		 * Get userprofiles/{profileId}/regions
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {RegionsListResponse} Successful response
		 */
		Dfareporting_regions_list(profileId: string): Observable<RegionsListResponse> {
			return this.http.get<RegionsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/regions', {});
		}

		/**
		 * Updates an existing RemarketingListShare. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/remarketingListShares
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. RemarketingList ID.
		 * @return {RemarketingListShare} Successful response
		 */
		Dfareporting_remarketingListShares_patch(profileId: string, id: string, requestBody: RemarketingListShare): Observable<RemarketingListShare> {
			return this.http.patch<RemarketingListShare>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/remarketingListShares&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing remarketing list share.
		 * Put userprofiles/{profileId}/remarketingListShares
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {RemarketingListShare} Successful response
		 */
		Dfareporting_remarketingListShares_update(profileId: string, requestBody: RemarketingListShare): Observable<RemarketingListShare> {
			return this.http.put<RemarketingListShare>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/remarketingListShares', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one remarketing list share by remarketing list ID.
		 * Get userprofiles/{profileId}/remarketingListShares/{remarketingListId}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} remarketingListId Remarketing list ID.
		 * @return {RemarketingListShare} Successful response
		 */
		Dfareporting_remarketingListShares_get(profileId: string, remarketingListId: string): Observable<RemarketingListShare> {
			return this.http.get<RemarketingListShare>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/remarketingListShares/' + (remarketingListId == null ? '' : encodeURIComponent(remarketingListId)), {});
		}

		/**
		 * Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/remarketingLists
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} advertiserId Required. Select only remarketing lists owned by this advertiser.
		 * @param {boolean} active Select only active or only inactive remarketing lists.
		 * @param {string} floodlightActivityId Select only remarketing lists that have this floodlight activity ID.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} name Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {RemarketingListsListResponse} Successful response
		 */
		Dfareporting_remarketingLists_list(profileId: string, advertiserId: string, active: boolean | null | undefined, floodlightActivityId: string | null | undefined, maxResults: number | null | undefined, name: string | null | undefined, pageToken: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<RemarketingListsListResponse> {
			return this.http.get<RemarketingListsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/remarketingLists&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&active=' + active + '&floodlightActivityId=' + (floodlightActivityId == null ? '' : encodeURIComponent(floodlightActivityId)) + '&maxResults=' + maxResults + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Updates an existing RemarketingList. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/remarketingLists
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. RemarketingList ID.
		 * @return {RemarketingList} Successful response
		 */
		Dfareporting_remarketingLists_patch(profileId: string, id: string, requestBody: RemarketingList): Observable<RemarketingList> {
			return this.http.patch<RemarketingList>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/remarketingLists&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new remarketing list.
		 * Post userprofiles/{profileId}/remarketingLists
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {RemarketingList} Successful response
		 */
		Dfareporting_remarketingLists_insert(profileId: string, requestBody: RemarketingList): Observable<RemarketingList> {
			return this.http.post<RemarketingList>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/remarketingLists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing remarketing list.
		 * Put userprofiles/{profileId}/remarketingLists
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {RemarketingList} Successful response
		 */
		Dfareporting_remarketingLists_update(profileId: string, requestBody: RemarketingList): Observable<RemarketingList> {
			return this.http.put<RemarketingList>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/remarketingLists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one remarketing list by ID.
		 * Get userprofiles/{profileId}/remarketingLists/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Remarketing list ID.
		 * @return {RemarketingList} Successful response
		 */
		Dfareporting_remarketingLists_get(profileId: string, id: string): Observable<RemarketingList> {
			return this.http.get<RemarketingList>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/remarketingLists/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves list of reports.
		 * Get userprofiles/{profileId}/reports
		 * @param {string} profileId The Campaign Manager 360 user profile ID.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken The value of the nextToken from the previous result page.
		 * @param {Dfareporting_reports_listScope} scope The scope that defines which results are returned.
		 * @param {Dfareporting_reports_listSortField} sortField The field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {ReportList} Successful response
		 */
		Dfareporting_reports_list(profileId: string, maxResults: number | null | undefined, pageToken: string | null | undefined, scope: Dfareporting_reports_listScope | null | undefined, sortField: Dfareporting_reports_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<ReportList> {
			return this.http.get<ReportList>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&scope=' + scope + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Creates a report.
		 * Post userprofiles/{profileId}/reports
		 * @param {string} profileId The Campaign Manager 360 user profile ID.
		 * @return {Report} Successful response
		 */
		Dfareporting_reports_insert(profileId: string, requestBody: Report): Observable<Report> {
			return this.http.post<Report>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
		 * Post userprofiles/{profileId}/reports/compatiblefields/query
		 * @param {string} profileId The Campaign Manager 360 user profile ID.
		 * @return {CompatibleFields} Successful response
		 */
		Dfareporting_reports_compatibleFields_query(profileId: string, requestBody: Report): Observable<CompatibleFields> {
			return this.http.post<CompatibleFields>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports/compatiblefields/query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a report by its ID.
		 * Delete userprofiles/{profileId}/reports/{reportId}
		 * @param {string} profileId The Campaign Manager 360 user profile ID.
		 * @param {string} reportId The ID of the report.
		 * @return {void} Successful response
		 */
		Dfareporting_reports_delete(profileId: string, reportId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a report by its ID.
		 * Get userprofiles/{profileId}/reports/{reportId}
		 * @param {string} profileId The Campaign Manager 360 user profile ID.
		 * @param {string} reportId The ID of the report.
		 * @return {Report} Successful response
		 */
		Dfareporting_reports_get(profileId: string, reportId: string): Observable<Report> {
			return this.http.get<Report>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)), {});
		}

		/**
		 * Updates an existing report. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/reports/{reportId}
		 * @param {string} profileId The Campaign Manager 360 user profile ID.
		 * @param {string} reportId The ID of the report.
		 * @return {Report} Successful response
		 */
		Dfareporting_reports_patch(profileId: string, reportId: string, requestBody: Report): Observable<Report> {
			return this.http.patch<Report>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a report.
		 * Put userprofiles/{profileId}/reports/{reportId}
		 * @param {string} profileId The Campaign Manager 360 user profile ID.
		 * @param {string} reportId The ID of the report.
		 * @return {Report} Successful response
		 */
		Dfareporting_reports_update(profileId: string, reportId: string, requestBody: Report): Observable<Report> {
			return this.http.put<Report>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists files for a report.
		 * Get userprofiles/{profileId}/reports/{reportId}/files
		 * @param {string} profileId The Campaign Manager 360 user profile ID.
		 * @param {string} reportId The ID of the parent report.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken The value of the nextToken from the previous result page.
		 * @param {Dfareporting_files_listSortField} sortField The field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {FileList} Successful response
		 */
		Dfareporting_reports_files_list(profileId: string, reportId: string, maxResults: number | null | undefined, pageToken: string | null | undefined, sortField: Dfareporting_files_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<FileList> {
			return this.http.get<FileList>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)) + '/files&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Retrieves a report file by its report ID and file ID. This method supports media download.
		 * Get userprofiles/{profileId}/reports/{reportId}/files/{fileId}
		 * @param {string} profileId The Campaign Manager 360 user profile ID.
		 * @param {string} reportId The ID of the report.
		 * @param {string} fileId The ID of the report file.
		 * @return {File} Successful response
		 */
		Dfareporting_reports_files_get(profileId: string, reportId: string, fileId: string): Observable<File> {
			return this.http.get<File>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)) + '/files/' + (fileId == null ? '' : encodeURIComponent(fileId)), {});
		}

		/**
		 * Runs a report.
		 * Post userprofiles/{profileId}/reports/{reportId}/run
		 * @param {string} profileId The Campaign Manager 360 user profile ID.
		 * @param {string} reportId The ID of the report.
		 * @param {boolean} synchronous If set and true, tries to run the report synchronously.
		 * @return {File} Successful response
		 */
		Dfareporting_reports_run(profileId: string, reportId: string, synchronous: boolean | null | undefined): Observable<File> {
			return this.http.post<File>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/reports/' + (reportId == null ? '' : encodeURIComponent(reportId)) + '/run&synchronous=' + synchronous, null, {});
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
		 * @return {SitesListResponse} Successful response
		 */
		Dfareporting_sites_list(profileId: string, acceptsInStreamVideoPlacements: boolean | null | undefined, acceptsInterstitialPlacements: boolean | null | undefined, acceptsPublisherPaidPlacements: boolean | null | undefined, adWordsSite: boolean | null | undefined, approved: boolean | null | undefined, campaignIds: Array<string> | null | undefined, directorySiteIds: Array<string> | null | undefined, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined, subaccountId: string | null | undefined, unmappedSite: boolean | null | undefined): Observable<SitesListResponse> {
			return this.http.get<SitesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/sites&acceptsInStreamVideoPlacements=' + acceptsInStreamVideoPlacements + '&acceptsInterstitialPlacements=' + acceptsInterstitialPlacements + '&acceptsPublisherPaidPlacements=' + acceptsPublisherPaidPlacements + '&adWordsSite=' + adWordsSite + '&approved=' + approved + '&' + campaignIds?.map(z => `campaignIds=${encodeURIComponent(z)}`).join('&') + '&' + directorySiteIds?.map(z => `directorySiteIds=${encodeURIComponent(z)}`).join('&') + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&subaccountId=' + (subaccountId == null ? '' : encodeURIComponent(subaccountId)) + '&unmappedSite=' + unmappedSite, {});
		}

		/**
		 * Updates an existing site. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/sites
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. Site ID.
		 * @return {Site} Successful response
		 */
		Dfareporting_sites_patch(profileId: string, id: string, requestBody: Site): Observable<Site> {
			return this.http.patch<Site>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/sites&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new site.
		 * Post userprofiles/{profileId}/sites
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {Site} Successful response
		 */
		Dfareporting_sites_insert(profileId: string, requestBody: Site): Observable<Site> {
			return this.http.post<Site>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/sites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing site.
		 * Put userprofiles/{profileId}/sites
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {Site} Successful response
		 */
		Dfareporting_sites_update(profileId: string, requestBody: Site): Observable<Site> {
			return this.http.put<Site>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/sites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one site by ID.
		 * Get userprofiles/{profileId}/sites/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Site ID.
		 * @return {Site} Successful response
		 */
		Dfareporting_sites_get(profileId: string, id: string): Observable<Site> {
			return this.http.get<Site>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/sites/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.
		 * Get userprofiles/{profileId}/sizes
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {number} height Select only sizes with this height.
		 * @param {boolean} iabStandard Select only IAB standard sizes.
		 * @param {Array<string>} ids Select only sizes with these IDs.
		 * @param {number} width Select only sizes with this width.
		 * @return {SizesListResponse} Successful response
		 */
		Dfareporting_sizes_list(profileId: string, height: number | null | undefined, iabStandard: boolean | null | undefined, ids: Array<string> | null | undefined, width: number | null | undefined): Observable<SizesListResponse> {
			return this.http.get<SizesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/sizes&height=' + height + '&iabStandard=' + iabStandard + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&width=' + width, {});
		}

		/**
		 * Inserts a new size.
		 * Post userprofiles/{profileId}/sizes
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {Size} Successful response
		 */
		Dfareporting_sizes_insert(profileId: string, requestBody: Size): Observable<Size> {
			return this.http.post<Size>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/sizes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one size by ID.
		 * Get userprofiles/{profileId}/sizes/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Size ID.
		 * @return {Size} Successful response
		 */
		Dfareporting_sizes_get(profileId: string, id: string): Observable<Size> {
			return this.http.get<Size>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/sizes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets a list of subaccounts, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/subaccounts
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} ids Select only subaccounts with these IDs.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {string} searchString Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount" .
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {SubaccountsListResponse} Successful response
		 */
		Dfareporting_subaccounts_list(profileId: string, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<SubaccountsListResponse> {
			return this.http.get<SubaccountsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/subaccounts&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Updates an existing subaccount. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/subaccounts
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. Subaccount ID.
		 * @return {Subaccount} Successful response
		 */
		Dfareporting_subaccounts_patch(profileId: string, id: string, requestBody: Subaccount): Observable<Subaccount> {
			return this.http.patch<Subaccount>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/subaccounts&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new subaccount.
		 * Post userprofiles/{profileId}/subaccounts
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {Subaccount} Successful response
		 */
		Dfareporting_subaccounts_insert(profileId: string, requestBody: Subaccount): Observable<Subaccount> {
			return this.http.post<Subaccount>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/subaccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing subaccount.
		 * Put userprofiles/{profileId}/subaccounts
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {Subaccount} Successful response
		 */
		Dfareporting_subaccounts_update(profileId: string, requestBody: Subaccount): Observable<Subaccount> {
			return this.http.put<Subaccount>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/subaccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one subaccount by ID.
		 * Get userprofiles/{profileId}/subaccounts/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Subaccount ID.
		 * @return {Subaccount} Successful response
		 */
		Dfareporting_subaccounts_get(profileId: string, id: string): Observable<Subaccount> {
			return this.http.get<Subaccount>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/subaccounts/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
		 * Get userprofiles/{profileId}/targetableRemarketingLists
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} advertiserId Required. Select only targetable remarketing lists targetable by these advertisers.
		 * @param {boolean} active Select only active or only inactive targetable remarketing lists.
		 * @param {number} maxResults Maximum number of results to return.
		 * @param {string} name Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
		 * @param {string} pageToken Value of the nextPageToken from the previous result page.
		 * @param {Dfareporting_accountUserProfiles_listSortField} sortField Field by which to sort the list.
		 * @param {SortedDimensionSortOrder} sortOrder Order of sorted results.
		 * @return {TargetableRemarketingListsListResponse} Successful response
		 */
		Dfareporting_targetableRemarketingLists_list(profileId: string, advertiserId: string, active: boolean | null | undefined, maxResults: number | null | undefined, name: string | null | undefined, pageToken: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<TargetableRemarketingListsListResponse> {
			return this.http.get<TargetableRemarketingListsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/targetableRemarketingLists&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&active=' + active + '&maxResults=' + maxResults + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Gets one remarketing list by ID.
		 * Get userprofiles/{profileId}/targetableRemarketingLists/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Remarketing list ID.
		 * @return {TargetableRemarketingList} Successful response
		 */
		Dfareporting_targetableRemarketingLists_get(profileId: string, id: string): Observable<TargetableRemarketingList> {
			return this.http.get<TargetableRemarketingList>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/targetableRemarketingLists/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @return {TargetingTemplatesListResponse} Successful response
		 */
		Dfareporting_targetingTemplates_list(profileId: string, advertiserId: string | null | undefined, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined): Observable<TargetingTemplatesListResponse> {
			return this.http.get<TargetingTemplatesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/targetingTemplates&advertiserId=' + (advertiserId == null ? '' : encodeURIComponent(advertiserId)) + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder, {});
		}

		/**
		 * Updates an existing targeting template. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/targetingTemplates
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. RemarketingList ID.
		 * @return {TargetingTemplate} Successful response
		 */
		Dfareporting_targetingTemplates_patch(profileId: string, id: string, requestBody: TargetingTemplate): Observable<TargetingTemplate> {
			return this.http.patch<TargetingTemplate>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/targetingTemplates&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new targeting template.
		 * Post userprofiles/{profileId}/targetingTemplates
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {TargetingTemplate} Successful response
		 */
		Dfareporting_targetingTemplates_insert(profileId: string, requestBody: TargetingTemplate): Observable<TargetingTemplate> {
			return this.http.post<TargetingTemplate>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/targetingTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing targeting template.
		 * Put userprofiles/{profileId}/targetingTemplates
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {TargetingTemplate} Successful response
		 */
		Dfareporting_targetingTemplates_update(profileId: string, requestBody: TargetingTemplate): Observable<TargetingTemplate> {
			return this.http.put<TargetingTemplate>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/targetingTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one targeting template by ID.
		 * Get userprofiles/{profileId}/targetingTemplates/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Targeting template ID.
		 * @return {TargetingTemplate} Successful response
		 */
		Dfareporting_targetingTemplates_get(profileId: string, id: string): Observable<TargetingTemplate> {
			return this.http.get<TargetingTemplate>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/targetingTemplates/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets a list of all supported user role permission groups.
		 * Get userprofiles/{profileId}/userRolePermissionGroups
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {UserRolePermissionGroupsListResponse} Successful response
		 */
		Dfareporting_userRolePermissionGroups_list(profileId: string): Observable<UserRolePermissionGroupsListResponse> {
			return this.http.get<UserRolePermissionGroupsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRolePermissionGroups', {});
		}

		/**
		 * Gets one user role permission group by ID.
		 * Get userprofiles/{profileId}/userRolePermissionGroups/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id User role permission group ID.
		 * @return {UserRolePermissionGroup} Successful response
		 */
		Dfareporting_userRolePermissionGroups_get(profileId: string, id: string): Observable<UserRolePermissionGroup> {
			return this.http.get<UserRolePermissionGroup>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRolePermissionGroups/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets a list of user role permissions, possibly filtered.
		 * Get userprofiles/{profileId}/userRolePermissions
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {Array<string>} ids Select only user role permissions with these IDs.
		 * @return {UserRolePermissionsListResponse} Successful response
		 */
		Dfareporting_userRolePermissions_list(profileId: string, ids: Array<string> | null | undefined): Observable<UserRolePermissionsListResponse> {
			return this.http.get<UserRolePermissionsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRolePermissions&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Gets one user role permission by ID.
		 * Get userprofiles/{profileId}/userRolePermissions/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id User role permission ID.
		 * @return {UserRolePermission} Successful response
		 */
		Dfareporting_userRolePermissions_get(profileId: string, id: string): Observable<UserRolePermission> {
			return this.http.get<UserRolePermission>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRolePermissions/' + (id == null ? '' : encodeURIComponent(id)), {});
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
		 * @return {UserRolesListResponse} Successful response
		 */
		Dfareporting_userRoles_list(profileId: string, accountUserRoleOnly: boolean | null | undefined, ids: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, searchString: string | null | undefined, sortField: Dfareporting_accountUserProfiles_listSortField | null | undefined, sortOrder: SortedDimensionSortOrder | null | undefined, subaccountId: string | null | undefined): Observable<UserRolesListResponse> {
			return this.http.get<UserRolesListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRoles&accountUserRoleOnly=' + accountUserRoleOnly + '&' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&searchString=' + (searchString == null ? '' : encodeURIComponent(searchString)) + '&sortField=' + sortField + '&sortOrder=' + sortOrder + '&subaccountId=' + (subaccountId == null ? '' : encodeURIComponent(subaccountId)), {});
		}

		/**
		 * Updates an existing user role. This method supports patch semantics.
		 * Patch userprofiles/{profileId}/userRoles
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {string} id Required. UserRole ID.
		 * @return {UserRole} Successful response
		 */
		Dfareporting_userRoles_patch(profileId: string, id: string, requestBody: UserRole): Observable<UserRole> {
			return this.http.patch<UserRole>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRoles&id=' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inserts a new user role.
		 * Post userprofiles/{profileId}/userRoles
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {UserRole} Successful response
		 */
		Dfareporting_userRoles_insert(profileId: string, requestBody: UserRole): Observable<UserRole> {
			return this.http.post<UserRole>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRoles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing user role.
		 * Put userprofiles/{profileId}/userRoles
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {UserRole} Successful response
		 */
		Dfareporting_userRoles_update(profileId: string, requestBody: UserRole): Observable<UserRole> {
			return this.http.put<UserRole>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRoles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @return {UserRole} Successful response
		 */
		Dfareporting_userRoles_get(profileId: string, id: string): Observable<UserRole> {
			return this.http.get<UserRole>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/userRoles/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Lists available video formats.
		 * Get userprofiles/{profileId}/videoFormats
		 * @param {string} profileId User profile ID associated with this request.
		 * @return {VideoFormatsListResponse} Successful response
		 */
		Dfareporting_videoFormats_list(profileId: string): Observable<VideoFormatsListResponse> {
			return this.http.get<VideoFormatsListResponse>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/videoFormats', {});
		}

		/**
		 * Gets one video format by ID.
		 * Get userprofiles/{profileId}/videoFormats/{id}
		 * @param {string} profileId User profile ID associated with this request.
		 * @param {number} id Video format ID.
		 * @return {VideoFormat} Successful response
		 */
		Dfareporting_videoFormats_get(profileId: string, id: number): Observable<VideoFormat> {
			return this.http.get<VideoFormat>(this.baseUri + 'userprofiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/videoFormats/' + id, {});
		}
	}

	export enum Dfareporting_accountUserProfiles_listSortField { ID = 0, NAME = 1 }

	export enum Dfareporting_changeLogs_listAction { ACTION_CREATE = 0, ACTION_UPDATE = 1, ACTION_DELETE = 2, ACTION_ENABLE = 3, ACTION_DISABLE = 4, ACTION_ADD = 5, ACTION_REMOVE = 6, ACTION_MARK_AS_DEFAULT = 7, ACTION_ASSOCIATE = 8, ACTION_ASSIGN = 9, ACTION_UNASSIGN = 10, ACTION_SEND = 11, ACTION_LINK = 12, ACTION_UNLINK = 13, ACTION_PUSH = 14, ACTION_EMAIL_TAGS = 15, ACTION_SHARE = 16 }

	export enum Dfareporting_changeLogs_listObjectType { OBJECT_ADVERTISER = 0, OBJECT_FLOODLIGHT_CONFIGURATION = 1, OBJECT_AD = 2, OBJECT_FLOODLIGHT_ACTVITY = 3, OBJECT_CAMPAIGN = 4, OBJECT_FLOODLIGHT_ACTIVITY_GROUP = 5, OBJECT_CREATIVE = 6, OBJECT_PLACEMENT = 7, OBJECT_DFA_SITE = 8, OBJECT_USER_ROLE = 9, OBJECT_USER_PROFILE = 10, OBJECT_ADVERTISER_GROUP = 11, OBJECT_ACCOUNT = 12, OBJECT_SUBACCOUNT = 13, OBJECT_RICHMEDIA_CREATIVE = 14, OBJECT_INSTREAM_CREATIVE = 15, OBJECT_MEDIA_ORDER = 16, OBJECT_CONTENT_CATEGORY = 17, OBJECT_PLACEMENT_STRATEGY = 18, OBJECT_SD_SITE = 19, OBJECT_SIZE = 20, OBJECT_CREATIVE_GROUP = 21, OBJECT_CREATIVE_ASSET = 22, OBJECT_USER_PROFILE_FILTER = 23, OBJECT_LANDING_PAGE = 24, OBJECT_CREATIVE_FIELD = 25, OBJECT_REMARKETING_LIST = 26, OBJECT_PROVIDED_LIST_CLIENT = 27, OBJECT_EVENT_TAG = 28, OBJECT_CREATIVE_BUNDLE = 29, OBJECT_BILLING_ACCOUNT_GROUP = 30, OBJECT_BILLING_FEATURE = 31, OBJECT_RATE_CARD = 32, OBJECT_ACCOUNT_BILLING_FEATURE = 33, OBJECT_BILLING_MINIMUM_FEE = 34, OBJECT_BILLING_PROFILE = 35, OBJECT_PLAYSTORE_LINK = 36, OBJECT_TARGETING_TEMPLATE = 37, OBJECT_SEARCH_LIFT_STUDY = 38, OBJECT_FLOODLIGHT_DV360_LINK = 39, OBJECT_ADVERTISER_CUSTOMER_LINK = 40, OBJECT_CONVERSION_DOMAIN = 41, OBJECT_ACCOUNT_CONVERSION_DOMAIN = 42 }

	export enum Dfareporting_creativeFieldValues_listSortField { ID = 0, VALUE = 1 }

	export enum Dfareporting_files_listScope { ALL = 0, MINE = 1, SHARED_WITH_ME = 2 }

	export enum Dfareporting_files_listSortField { ID = 0, LAST_MODIFIED_TIME = 1 }

	export enum Dfareporting_reports_listScope { ALL = 0, MINE = 1 }

	export enum Dfareporting_reports_listSortField { ID = 0, LAST_MODIFIED_TIME = 1, NAME = 2 }

}

