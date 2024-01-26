import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes an AdMob ad unit. */
	export interface AdUnit {

		/** AdFormat of the ad unit. Possible values are as follows: "APP_OPEN" - App Open ad format. "BANNER" - Banner ad format. "BANNER_INTERSTITIAL" - Legacy format that can be used as either banner or interstitial. This format can no longer be created but can be targeted by mediation groups. "INTERSTITIAL" - A full screen ad. Supported ad types are "RICH_MEDIA" and "VIDEO". "NATIVE" - Native ad format. "REWARDED" - An ad that, once viewed, gets a callback verifying the view so that a reward can be given to the user. Supported ad types are "RICH_MEDIA" (interactive) and video where video can not be excluded. "REWARDED_INTERSTITIAL" - Rewarded Interstitial ad format. Only supports video ad type. See https://support.google.com/admob/answer/9884467. */
		adFormat?: string | null;

		/** Ad media type supported by this ad unit. Possible values as follows: "RICH_MEDIA" - Text, image, and other non-video media. "VIDEO" - Video media. */
		adTypes?: Array<string>;

		/** The externally visible ID of the ad unit which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654/0123456789 */
		adUnitId?: string | null;

		/** The externally visible ID of the app this ad unit is associated with. Example: ca-app-pub-9876543210987654~0123456789 */
		appId?: string | null;

		/** The display name of the ad unit as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters. */
		displayName?: string | null;

		/** Resource name for this ad unit. Format is accounts/{publisher_id}/adUnits/{ad_unit_id_fragment} Example: accounts/pub-9876543210987654/adUnits/0123456789 */
		name?: string | null;
	}

	/** Describes an AdMob ad unit. */
	export interface AdUnitFormProperties {

		/** AdFormat of the ad unit. Possible values are as follows: "APP_OPEN" - App Open ad format. "BANNER" - Banner ad format. "BANNER_INTERSTITIAL" - Legacy format that can be used as either banner or interstitial. This format can no longer be created but can be targeted by mediation groups. "INTERSTITIAL" - A full screen ad. Supported ad types are "RICH_MEDIA" and "VIDEO". "NATIVE" - Native ad format. "REWARDED" - An ad that, once viewed, gets a callback verifying the view so that a reward can be given to the user. Supported ad types are "RICH_MEDIA" (interactive) and video where video can not be excluded. "REWARDED_INTERSTITIAL" - Rewarded Interstitial ad format. Only supports video ad type. See https://support.google.com/admob/answer/9884467. */
		adFormat: FormControl<string | null | undefined>,

		/** The externally visible ID of the ad unit which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654/0123456789 */
		adUnitId: FormControl<string | null | undefined>,

		/** The externally visible ID of the app this ad unit is associated with. Example: ca-app-pub-9876543210987654~0123456789 */
		appId: FormControl<string | null | undefined>,

		/** The display name of the ad unit as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Resource name for this ad unit. Format is accounts/{publisher_id}/adUnits/{ad_unit_id_fragment} Example: accounts/pub-9876543210987654/adUnits/0123456789 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAdUnitFormGroup() {
		return new FormGroup<AdUnitFormProperties>({
			adFormat: new FormControl<string | null | undefined>(undefined),
			adUnitId: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an AdMob app for a specific platform (For example: Android or iOS). */
	export interface App {

		/** Output only. The approval state for the app. The field is read-only. */
		appApprovalState?: AppAppApprovalState | null;

		/** The externally visible ID of the app which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654~0123456789 */
		appId?: string | null;

		/** Information from the app store if the app is linked to an app store. */
		linkedAppInfo?: AppLinkedAppInfo;

		/** Information provided for manual apps which are not linked to an application store (Example: Google Play, App Store). */
		manualAppInfo?: AppManualAppInfo;

		/** Resource name for this app. Format is accounts/{publisher_id}/apps/{app_id_fragment} Example: accounts/pub-9876543210987654/apps/0123456789 */
		name?: string | null;

		/** Describes the platform of the app. Limited to "IOS" and "ANDROID". */
		platform?: string | null;
	}

	/** Describes an AdMob app for a specific platform (For example: Android or iOS). */
	export interface AppFormProperties {

		/** Output only. The approval state for the app. The field is read-only. */
		appApprovalState: FormControl<AppAppApprovalState | null | undefined>,

		/** The externally visible ID of the app which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654~0123456789 */
		appId: FormControl<string | null | undefined>,

		/** Resource name for this app. Format is accounts/{publisher_id}/apps/{app_id_fragment} Example: accounts/pub-9876543210987654/apps/0123456789 */
		name: FormControl<string | null | undefined>,

		/** Describes the platform of the app. Limited to "IOS" and "ANDROID". */
		platform: FormControl<string | null | undefined>,
	}
	export function CreateAppFormGroup() {
		return new FormGroup<AppFormProperties>({
			appApprovalState: new FormControl<AppAppApprovalState | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppAppApprovalState { APP_APPROVAL_STATE_UNSPECIFIED = 0, ACTION_REQUIRED = 1, IN_REVIEW = 2, APPROVED = 3 }


	/** Information from the app store if the app is linked to an app store. */
	export interface AppLinkedAppInfo {

		/** The app store ID of the app; present if and only if the app is linked to an app store. If the app is added to the Google Play store, it will be the application ID of the app. For example: "com.example.myapp". See https://developer.android.com/studio/build/application-id. If the app is added to the Apple App Store, it will be app store ID. For example "105169111". Note that setting the app store id is considered an irreversible action. Once an app is linked, it cannot be unlinked. */
		appStoreId?: string | null;

		/** Output only. Display name of the app as it appears in the app store. This is an output-only field, and may be empty if the app cannot be found in the store. */
		displayName?: string | null;
	}

	/** Information from the app store if the app is linked to an app store. */
	export interface AppLinkedAppInfoFormProperties {

		/** The app store ID of the app; present if and only if the app is linked to an app store. If the app is added to the Google Play store, it will be the application ID of the app. For example: "com.example.myapp". See https://developer.android.com/studio/build/application-id. If the app is added to the Apple App Store, it will be app store ID. For example "105169111". Note that setting the app store id is considered an irreversible action. Once an app is linked, it cannot be unlinked. */
		appStoreId: FormControl<string | null | undefined>,

		/** Output only. Display name of the app as it appears in the app store. This is an output-only field, and may be empty if the app cannot be found in the store. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateAppLinkedAppInfoFormGroup() {
		return new FormGroup<AppLinkedAppInfoFormProperties>({
			appStoreId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information provided for manual apps which are not linked to an application store (Example: Google Play, App Store). */
	export interface AppManualAppInfo {

		/** The display name of the app as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters. */
		displayName?: string | null;
	}

	/** Information provided for manual apps which are not linked to an application store (Example: Google Play, App Store). */
	export interface AppManualAppInfoFormProperties {

		/** The display name of the app as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateAppManualAppInfoFormGroup() {
		return new FormGroup<AppManualAppInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
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


	/** Specification of a single date range. Both dates are inclusive. */
	export interface DateRange {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		endDate?: Date;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		startDate?: Date;
	}

	/** Specification of a single date range. Both dates are inclusive. */
	export interface DateRangeFormProperties {
	}
	export function CreateDateRangeFormGroup() {
		return new FormGroup<DateRangeFormProperties>({
		});

	}


	/** Request to generate an AdMob mediation report. */
	export interface GenerateMediationReportRequest {

		/** The specification for generating an AdMob Mediation report. For example, the specification to get observed ECPM sliced by ad source and app for the 'US' and 'CN' countries can look like the following example: { "date_range": { "start_date": {"year": 2021, "month": 9, "day": 1}, "end_date": {"year": 2021, "month": 9, "day": 30} }, "dimensions": ["AD_SOURCE", "APP", "COUNTRY"], "metrics": ["OBSERVED_ECPM"], "dimension_filters": [ { "dimension": "COUNTRY", "matches_any": {"values": [{"value": "US", "value": "CN"}]} } ], "sort_conditions": [ {"dimension":"APP", order: "ASCENDING"} ], "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT AD_SOURCE, APP, COUNTRY, OBSERVED_ECPM FROM MEDIATION_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY AD_SOURCE, APP, COUNTRY ORDER BY APP ASC; */
		reportSpec?: MediationReportSpec;
	}

	/** Request to generate an AdMob mediation report. */
	export interface GenerateMediationReportRequestFormProperties {
	}
	export function CreateGenerateMediationReportRequestFormGroup() {
		return new FormGroup<GenerateMediationReportRequestFormProperties>({
		});

	}


	/** The specification for generating an AdMob Mediation report. For example, the specification to get observed ECPM sliced by ad source and app for the 'US' and 'CN' countries can look like the following example: { "date_range": { "start_date": {"year": 2021, "month": 9, "day": 1}, "end_date": {"year": 2021, "month": 9, "day": 30} }, "dimensions": ["AD_SOURCE", "APP", "COUNTRY"], "metrics": ["OBSERVED_ECPM"], "dimension_filters": [ { "dimension": "COUNTRY", "matches_any": {"values": [{"value": "US", "value": "CN"}]} } ], "sort_conditions": [ {"dimension":"APP", order: "ASCENDING"} ], "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT AD_SOURCE, APP, COUNTRY, OBSERVED_ECPM FROM MEDIATION_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY AD_SOURCE, APP, COUNTRY ORDER BY APP ASC; */
	export interface MediationReportSpec {

		/** Specification of a single date range. Both dates are inclusive. */
		dateRange?: DateRange;

		/** Describes which report rows to match based on their dimension values. */
		dimensionFilters?: Array<MediationReportSpecDimensionFilter>;

		/** List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account. */
		dimensions?: Array<MediationReportSpecDimensionFilterDimension>;

		/** Localization settings for reports, such as currency and language. It affects how metrics are calculated. */
		localizationSettings?: LocalizationSettings;

		/** Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error. */
		maxReportRows?: number | null;

		/** List of metrics of the report. A report must specify at least one metric. */
		metrics?: Array<string>;

		/** Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined. */
		sortConditions?: Array<MediationReportSpecSortCondition>;

		/** A report time zone. Accepts an IANA TZ name values, such as "America/Los_Angeles." If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The "America/Los_Angeles" is the only supported value at the moment. */
		timeZone?: string | null;
	}

	/** The specification for generating an AdMob Mediation report. For example, the specification to get observed ECPM sliced by ad source and app for the 'US' and 'CN' countries can look like the following example: { "date_range": { "start_date": {"year": 2021, "month": 9, "day": 1}, "end_date": {"year": 2021, "month": 9, "day": 30} }, "dimensions": ["AD_SOURCE", "APP", "COUNTRY"], "metrics": ["OBSERVED_ECPM"], "dimension_filters": [ { "dimension": "COUNTRY", "matches_any": {"values": [{"value": "US", "value": "CN"}]} } ], "sort_conditions": [ {"dimension":"APP", order: "ASCENDING"} ], "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT AD_SOURCE, APP, COUNTRY, OBSERVED_ECPM FROM MEDIATION_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY AD_SOURCE, APP, COUNTRY ORDER BY APP ASC; */
	export interface MediationReportSpecFormProperties {

		/** Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error. */
		maxReportRows: FormControl<number | null | undefined>,

		/** A report time zone. Accepts an IANA TZ name values, such as "America/Los_Angeles." If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The "America/Los_Angeles" is the only supported value at the moment. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateMediationReportSpecFormGroup() {
		return new FormGroup<MediationReportSpecFormProperties>({
			maxReportRows: new FormControl<number | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes which report rows to match based on their dimension values. */
	export interface MediationReportSpecDimensionFilter {

		/** Applies the filter criterion to the specified dimension. */
		dimension?: MediationReportSpecDimensionFilterDimension | null;

		/** List of string values. */
		matchesAny?: StringList;
	}

	/** Describes which report rows to match based on their dimension values. */
	export interface MediationReportSpecDimensionFilterFormProperties {

		/** Applies the filter criterion to the specified dimension. */
		dimension: FormControl<MediationReportSpecDimensionFilterDimension | null | undefined>,
	}
	export function CreateMediationReportSpecDimensionFilterFormGroup() {
		return new FormGroup<MediationReportSpecDimensionFilterFormProperties>({
			dimension: new FormControl<MediationReportSpecDimensionFilterDimension | null | undefined>(undefined),
		});

	}

	export enum MediationReportSpecDimensionFilterDimension { DIMENSION_UNSPECIFIED = 0, DATE = 1, MONTH = 2, WEEK = 3, AD_SOURCE = 4, AD_SOURCE_INSTANCE = 5, AD_UNIT = 6, APP = 7, MEDIATION_GROUP = 8, COUNTRY = 9, FORMAT = 10, PLATFORM = 11, MOBILE_OS_VERSION = 12, GMA_SDK_VERSION = 13, APP_VERSION_NAME = 14, SERVING_RESTRICTION = 15 }


	/** List of string values. */
	export interface StringList {

		/** The string values. */
		values?: Array<string>;
	}

	/** List of string values. */
	export interface StringListFormProperties {
	}
	export function CreateStringListFormGroup() {
		return new FormGroup<StringListFormProperties>({
		});

	}


	/** Localization settings for reports, such as currency and language. It affects how metrics are calculated. */
	export interface LocalizationSettings {

		/** Currency code of the earning related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion. Defaults to the account currency code if unspecified. */
		currencyCode?: string | null;

		/** Language used for any localized text, such as some dimension value display labels. The language tag defined in the IETF BCP47. Defaults to 'en-US' if unspecified. */
		languageCode?: string | null;
	}

	/** Localization settings for reports, such as currency and language. It affects how metrics are calculated. */
	export interface LocalizationSettingsFormProperties {

		/** Currency code of the earning related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion. Defaults to the account currency code if unspecified. */
		currencyCode: FormControl<string | null | undefined>,

		/** Language used for any localized text, such as some dimension value display labels. The language tag defined in the IETF BCP47. Defaults to 'en-US' if unspecified. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateLocalizationSettingsFormGroup() {
		return new FormGroup<LocalizationSettingsFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sorting direction to be applied on a dimension or a metric. */
	export interface MediationReportSpecSortCondition {

		/** Sort by the specified dimension. */
		dimension?: MediationReportSpecDimensionFilterDimension | null;

		/** Sort by the specified metric. */
		metric?: MediationReportSpecSortConditionMetric | null;

		/** Sorting order of the dimension or metric. */
		order?: MediationReportSpecSortConditionOrder | null;
	}

	/** Sorting direction to be applied on a dimension or a metric. */
	export interface MediationReportSpecSortConditionFormProperties {

		/** Sort by the specified dimension. */
		dimension: FormControl<MediationReportSpecDimensionFilterDimension | null | undefined>,

		/** Sort by the specified metric. */
		metric: FormControl<MediationReportSpecSortConditionMetric | null | undefined>,

		/** Sorting order of the dimension or metric. */
		order: FormControl<MediationReportSpecSortConditionOrder | null | undefined>,
	}
	export function CreateMediationReportSpecSortConditionFormGroup() {
		return new FormGroup<MediationReportSpecSortConditionFormProperties>({
			dimension: new FormControl<MediationReportSpecDimensionFilterDimension | null | undefined>(undefined),
			metric: new FormControl<MediationReportSpecSortConditionMetric | null | undefined>(undefined),
			order: new FormControl<MediationReportSpecSortConditionOrder | null | undefined>(undefined),
		});

	}

	export enum MediationReportSpecSortConditionMetric { METRIC_UNSPECIFIED = 0, AD_REQUESTS = 1, CLICKS = 2, ESTIMATED_EARNINGS = 3, IMPRESSIONS = 4, IMPRESSION_CTR = 5, MATCHED_REQUESTS = 6, MATCH_RATE = 7, OBSERVED_ECPM = 8 }

	export enum MediationReportSpecSortConditionOrder { SORT_ORDER_UNSPECIFIED = 0, ASCENDING = 1, DESCENDING = 2 }


	/** The streaming response for the AdMob mediation report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "date_range": { "start_date": {"year": 2018, "month": 9, "day": 1}, "end_date": {"year": 2018, "month": 9, "day": 1} }, "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } }, { "row": { "dimension_values": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", "display_label": "My app name!" } }, "metric_values": { "ESTIMATED_EARNINGS": {"decimal_value": "1324746"} } } }, { "footer": {"matching_row_count": 1} }] */
	export interface GenerateMediationReportResponse {

		/** Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response. */
		footer?: ReportFooter;

		/** Groups data helps to treat the generated report. Always sent as a first message in the stream response. */
		header?: ReportHeader;

		/** A row of the returning report. */
		row?: ReportRow;
	}

	/** The streaming response for the AdMob mediation report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "date_range": { "start_date": {"year": 2018, "month": 9, "day": 1}, "end_date": {"year": 2018, "month": 9, "day": 1} }, "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } }, { "row": { "dimension_values": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", "display_label": "My app name!" } }, "metric_values": { "ESTIMATED_EARNINGS": {"decimal_value": "1324746"} } } }, { "footer": {"matching_row_count": 1} }] */
	export interface GenerateMediationReportResponseFormProperties {
	}
	export function CreateGenerateMediationReportResponseFormGroup() {
		return new FormGroup<GenerateMediationReportResponseFormProperties>({
		});

	}


	/** Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response. */
	export interface ReportFooter {

		/** Total number of rows that matched the request. Warning: This count does NOT always match the number of rows in the response. Do not make that assumption when processing the response. */
		matchingRowCount?: string | null;

		/** Warnings associated with generation of the report. */
		warnings?: Array<ReportWarning>;
	}

	/** Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response. */
	export interface ReportFooterFormProperties {

		/** Total number of rows that matched the request. Warning: This count does NOT always match the number of rows in the response. Do not make that assumption when processing the response. */
		matchingRowCount: FormControl<string | null | undefined>,
	}
	export function CreateReportFooterFormGroup() {
		return new FormGroup<ReportFooterFormProperties>({
			matchingRowCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Warnings associated with generation of the report. */
	export interface ReportWarning {

		/** Describes the details of the warning message, in English. */
		description?: string | null;

		/** Type of the warning. */
		type?: ReportWarningType | null;
	}

	/** Warnings associated with generation of the report. */
	export interface ReportWarningFormProperties {

		/** Describes the details of the warning message, in English. */
		description: FormControl<string | null | undefined>,

		/** Type of the warning. */
		type: FormControl<ReportWarningType | null | undefined>,
	}
	export function CreateReportWarningFormGroup() {
		return new FormGroup<ReportWarningFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ReportWarningType | null | undefined>(undefined),
		});

	}

	export enum ReportWarningType { TYPE_UNSPECIFIED = 0, DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE = 1, DATA_DELAYED = 2, OTHER = 3, REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY = 4 }


	/** Groups data helps to treat the generated report. Always sent as a first message in the stream response. */
	export interface ReportHeader {

		/** Specification of a single date range. Both dates are inclusive. */
		dateRange?: DateRange;

		/** Localization settings for reports, such as currency and language. It affects how metrics are calculated. */
		localizationSettings?: LocalizationSettings;

		/** The report time zone. The value is a time-zone ID as specified by the CLDR project, for example, "America/Los_Angeles". */
		reportingTimeZone?: string | null;
	}

	/** Groups data helps to treat the generated report. Always sent as a first message in the stream response. */
	export interface ReportHeaderFormProperties {

		/** The report time zone. The value is a time-zone ID as specified by the CLDR project, for example, "America/Los_Angeles". */
		reportingTimeZone: FormControl<string | null | undefined>,
	}
	export function CreateReportHeaderFormGroup() {
		return new FormGroup<ReportHeaderFormProperties>({
			reportingTimeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A row of the returning report. */
	export interface ReportRow {

		/** Map of dimension values in a row, with keys as enum name of the dimensions. */
		dimensionValues?: {[id: string]: ReportRowDimensionValue };

		/** Map of metric values in a row, with keys as enum name of the metrics. If a metric being requested has no value returned, the map will not include it. */
		metricValues?: {[id: string]: ReportRowMetricValue };
	}

	/** A row of the returning report. */
	export interface ReportRowFormProperties {

		/** Map of dimension values in a row, with keys as enum name of the dimensions. */
		dimensionValues: FormControl<{[id: string]: ReportRowDimensionValue } | null | undefined>,

		/** Map of metric values in a row, with keys as enum name of the metrics. If a metric being requested has no value returned, the map will not include it. */
		metricValues: FormControl<{[id: string]: ReportRowMetricValue } | null | undefined>,
	}
	export function CreateReportRowFormGroup() {
		return new FormGroup<ReportRowFormProperties>({
			dimensionValues: new FormControl<{[id: string]: ReportRowDimensionValue } | null | undefined>(undefined),
			metricValues: new FormControl<{[id: string]: ReportRowMetricValue } | null | undefined>(undefined),
		});

	}


	/** Representation of a dimension value. */
	export interface ReportRowDimensionValue {

		/** The localized string representation of the value. If unspecified, the display label should be derived from the value. */
		displayLabel?: string | null;

		/** Dimension value in the format specified in the report's spec Dimension enum. */
		value?: string | null;
	}

	/** Representation of a dimension value. */
	export interface ReportRowDimensionValueFormProperties {

		/** The localized string representation of the value. If unspecified, the display label should be derived from the value. */
		displayLabel: FormControl<string | null | undefined>,

		/** Dimension value in the format specified in the report's spec Dimension enum. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateReportRowDimensionValueFormGroup() {
		return new FormGroup<ReportRowDimensionValueFormProperties>({
			displayLabel: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of a metric value. */
	export interface ReportRowMetricValue {

		/** Double precision (approximate) decimal values. Rates are from 0 to 1. */
		doubleValue?: number | null;

		/** Metric integer value. */
		integerValue?: string | null;

		/** Amount in micros. One million is equivalent to one unit. Currency value is in the unit (USD, EUR or other) specified by the request. For example, $6.50 whould be represented as 6500000 micros. */
		microsValue?: string | null;
	}

	/** Representation of a metric value. */
	export interface ReportRowMetricValueFormProperties {

		/** Double precision (approximate) decimal values. Rates are from 0 to 1. */
		doubleValue: FormControl<number | null | undefined>,

		/** Metric integer value. */
		integerValue: FormControl<string | null | undefined>,

		/** Amount in micros. One million is equivalent to one unit. Currency value is in the unit (USD, EUR or other) specified by the request. For example, $6.50 whould be represented as 6500000 micros. */
		microsValue: FormControl<string | null | undefined>,
	}
	export function CreateReportRowMetricValueFormGroup() {
		return new FormGroup<ReportRowMetricValueFormProperties>({
			doubleValue: new FormControl<number | null | undefined>(undefined),
			integerValue: new FormControl<string | null | undefined>(undefined),
			microsValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to generate an AdMob Network report. */
	export interface GenerateNetworkReportRequest {

		/** The specification for generating an AdMob Network report. For example, the specification to get clicks and estimated earnings for only the 'US' and 'CN' countries can look like the following example: { 'date_range': { 'start_date': {'year': 2021, 'month': 9, 'day': 1}, 'end_date': {'year': 2021, 'month': 9, 'day': 30} }, 'dimensions': ['DATE', 'APP', 'COUNTRY'], 'metrics': ['CLICKS', 'ESTIMATED_EARNINGS'], 'dimension_filters': [ { 'dimension': 'COUNTRY', 'matches_any': {'values': [{'value': 'US', 'value': 'CN'}]} } ], 'sort_conditions': [ {'dimension':'APP', order: 'ASCENDING'}, {'metric':'CLICKS', order: 'DESCENDING'} ], 'localization_settings': { 'currency_code': 'USD', 'language_code': 'en-US' } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT DATE, APP, COUNTRY, CLICKS, ESTIMATED_EARNINGS FROM NETWORK_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY DATE, APP, COUNTRY ORDER BY APP ASC, CLICKS DESC; */
		reportSpec?: NetworkReportSpec;
	}

	/** Request to generate an AdMob Network report. */
	export interface GenerateNetworkReportRequestFormProperties {
	}
	export function CreateGenerateNetworkReportRequestFormGroup() {
		return new FormGroup<GenerateNetworkReportRequestFormProperties>({
		});

	}


	/** The specification for generating an AdMob Network report. For example, the specification to get clicks and estimated earnings for only the 'US' and 'CN' countries can look like the following example: { 'date_range': { 'start_date': {'year': 2021, 'month': 9, 'day': 1}, 'end_date': {'year': 2021, 'month': 9, 'day': 30} }, 'dimensions': ['DATE', 'APP', 'COUNTRY'], 'metrics': ['CLICKS', 'ESTIMATED_EARNINGS'], 'dimension_filters': [ { 'dimension': 'COUNTRY', 'matches_any': {'values': [{'value': 'US', 'value': 'CN'}]} } ], 'sort_conditions': [ {'dimension':'APP', order: 'ASCENDING'}, {'metric':'CLICKS', order: 'DESCENDING'} ], 'localization_settings': { 'currency_code': 'USD', 'language_code': 'en-US' } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT DATE, APP, COUNTRY, CLICKS, ESTIMATED_EARNINGS FROM NETWORK_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY DATE, APP, COUNTRY ORDER BY APP ASC, CLICKS DESC; */
	export interface NetworkReportSpec {

		/** Specification of a single date range. Both dates are inclusive. */
		dateRange?: DateRange;

		/** Describes which report rows to match based on their dimension values. */
		dimensionFilters?: Array<NetworkReportSpecDimensionFilter>;

		/** List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account. */
		dimensions?: Array<NetworkReportSpecDimensionFilterDimension>;

		/** Localization settings for reports, such as currency and language. It affects how metrics are calculated. */
		localizationSettings?: LocalizationSettings;

		/** Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error. */
		maxReportRows?: number | null;

		/** List of metrics of the report. A report must specify at least one metric. */
		metrics?: Array<string>;

		/** Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined. */
		sortConditions?: Array<NetworkReportSpecSortCondition>;

		/** A report time zone. Accepts an IANA TZ name values, such as "America/Los_Angeles." If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The "America/Los_Angeles" is the only supported value at the moment. */
		timeZone?: string | null;
	}

	/** The specification for generating an AdMob Network report. For example, the specification to get clicks and estimated earnings for only the 'US' and 'CN' countries can look like the following example: { 'date_range': { 'start_date': {'year': 2021, 'month': 9, 'day': 1}, 'end_date': {'year': 2021, 'month': 9, 'day': 30} }, 'dimensions': ['DATE', 'APP', 'COUNTRY'], 'metrics': ['CLICKS', 'ESTIMATED_EARNINGS'], 'dimension_filters': [ { 'dimension': 'COUNTRY', 'matches_any': {'values': [{'value': 'US', 'value': 'CN'}]} } ], 'sort_conditions': [ {'dimension':'APP', order: 'ASCENDING'}, {'metric':'CLICKS', order: 'DESCENDING'} ], 'localization_settings': { 'currency_code': 'USD', 'language_code': 'en-US' } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT DATE, APP, COUNTRY, CLICKS, ESTIMATED_EARNINGS FROM NETWORK_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY DATE, APP, COUNTRY ORDER BY APP ASC, CLICKS DESC; */
	export interface NetworkReportSpecFormProperties {

		/** Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error. */
		maxReportRows: FormControl<number | null | undefined>,

		/** A report time zone. Accepts an IANA TZ name values, such as "America/Los_Angeles." If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The "America/Los_Angeles" is the only supported value at the moment. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateNetworkReportSpecFormGroup() {
		return new FormGroup<NetworkReportSpecFormProperties>({
			maxReportRows: new FormControl<number | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes which report rows to match based on their dimension values. */
	export interface NetworkReportSpecDimensionFilter {

		/** Applies the filter criterion to the specified dimension. */
		dimension?: NetworkReportSpecDimensionFilterDimension | null;

		/** List of string values. */
		matchesAny?: StringList;
	}

	/** Describes which report rows to match based on their dimension values. */
	export interface NetworkReportSpecDimensionFilterFormProperties {

		/** Applies the filter criterion to the specified dimension. */
		dimension: FormControl<NetworkReportSpecDimensionFilterDimension | null | undefined>,
	}
	export function CreateNetworkReportSpecDimensionFilterFormGroup() {
		return new FormGroup<NetworkReportSpecDimensionFilterFormProperties>({
			dimension: new FormControl<NetworkReportSpecDimensionFilterDimension | null | undefined>(undefined),
		});

	}

	export enum NetworkReportSpecDimensionFilterDimension { DIMENSION_UNSPECIFIED = 0, DATE = 1, MONTH = 2, WEEK = 3, AD_UNIT = 4, APP = 5, AD_TYPE = 6, COUNTRY = 7, FORMAT = 8, PLATFORM = 9, MOBILE_OS_VERSION = 10, GMA_SDK_VERSION = 11, APP_VERSION_NAME = 12, SERVING_RESTRICTION = 13 }


	/** Sorting direction to be applied on a dimension or a metric. */
	export interface NetworkReportSpecSortCondition {

		/** Sort by the specified dimension. */
		dimension?: NetworkReportSpecDimensionFilterDimension | null;

		/** Sort by the specified metric. */
		metric?: NetworkReportSpecSortConditionMetric | null;

		/** Sorting order of the dimension or metric. */
		order?: MediationReportSpecSortConditionOrder | null;
	}

	/** Sorting direction to be applied on a dimension or a metric. */
	export interface NetworkReportSpecSortConditionFormProperties {

		/** Sort by the specified dimension. */
		dimension: FormControl<NetworkReportSpecDimensionFilterDimension | null | undefined>,

		/** Sort by the specified metric. */
		metric: FormControl<NetworkReportSpecSortConditionMetric | null | undefined>,

		/** Sorting order of the dimension or metric. */
		order: FormControl<MediationReportSpecSortConditionOrder | null | undefined>,
	}
	export function CreateNetworkReportSpecSortConditionFormGroup() {
		return new FormGroup<NetworkReportSpecSortConditionFormProperties>({
			dimension: new FormControl<NetworkReportSpecDimensionFilterDimension | null | undefined>(undefined),
			metric: new FormControl<NetworkReportSpecSortConditionMetric | null | undefined>(undefined),
			order: new FormControl<MediationReportSpecSortConditionOrder | null | undefined>(undefined),
		});

	}

	export enum NetworkReportSpecSortConditionMetric { METRIC_UNSPECIFIED = 0, AD_REQUESTS = 1, CLICKS = 2, ESTIMATED_EARNINGS = 3, IMPRESSIONS = 4, IMPRESSION_CTR = 5, IMPRESSION_RPM = 6, MATCHED_REQUESTS = 7, MATCH_RATE = 8, SHOW_RATE = 9 }


	/** The streaming response for the AdMob Network report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "dateRange": { "startDate": {"year": 2018, "month": 9, "day": 1}, "endDate": {"year": 2018, "month": 9, "day": 1} }, "localizationSettings": { "currencyCode": "USD", "languageCode": "en-US" } } }, { "row": { "dimensionValues": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", displayLabel: "My app name!" } }, "metricValues": { "ESTIMATED_EARNINGS": {"microsValue": 6500000} } } }, { "footer": {"matchingRowCount": 1} }] */
	export interface GenerateNetworkReportResponse {

		/** Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response. */
		footer?: ReportFooter;

		/** Groups data helps to treat the generated report. Always sent as a first message in the stream response. */
		header?: ReportHeader;

		/** A row of the returning report. */
		row?: ReportRow;
	}

	/** The streaming response for the AdMob Network report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "dateRange": { "startDate": {"year": 2018, "month": 9, "day": 1}, "endDate": {"year": 2018, "month": 9, "day": 1} }, "localizationSettings": { "currencyCode": "USD", "languageCode": "en-US" } } }, { "row": { "dimensionValues": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", displayLabel: "My app name!" } }, "metricValues": { "ESTIMATED_EARNINGS": {"microsValue": 6500000} } } }, { "footer": {"matchingRowCount": 1} }] */
	export interface GenerateNetworkReportResponseFormProperties {
	}
	export function CreateGenerateNetworkReportResponseFormGroup() {
		return new FormGroup<GenerateNetworkReportResponseFormProperties>({
		});

	}


	/** Response for the ad units list request. */
	export interface ListAdUnitsResponse {

		/** The resulting ad units for the requested account. */
		adUnits?: Array<AdUnit>;

		/** If not empty, indicates that there may be more ad units for the request; this value should be passed in a new `ListAdUnitsRequest`. */
		nextPageToken?: string | null;
	}

	/** Response for the ad units list request. */
	export interface ListAdUnitsResponseFormProperties {

		/** If not empty, indicates that there may be more ad units for the request; this value should be passed in a new `ListAdUnitsRequest`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAdUnitsResponseFormGroup() {
		return new FormGroup<ListAdUnitsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the apps list request. */
	export interface ListAppsResponse {

		/** The resulting apps for the requested account. */
		apps?: Array<App>;

		/** If not empty, indicates that there may be more apps for the request; this value should be passed in a new `ListAppsRequest`. */
		nextPageToken?: string | null;
	}

	/** Response for the apps list request. */
	export interface ListAppsResponseFormProperties {

		/** If not empty, indicates that there may be more apps for the request; this value should be passed in a new `ListAppsRequest`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppsResponseFormGroup() {
		return new FormGroup<ListAppsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the publisher account list request. */
	export interface ListPublisherAccountsResponse {

		/** Publisher that the client credentials can access. */
		account?: Array<PublisherAccount>;

		/** If not empty, indicates that there might be more accounts for the request; you must pass this value in a new `ListPublisherAccountsRequest`. */
		nextPageToken?: string | null;
	}

	/** Response for the publisher account list request. */
	export interface ListPublisherAccountsResponseFormProperties {

		/** If not empty, indicates that there might be more accounts for the request; you must pass this value in a new `ListPublisherAccountsRequest`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPublisherAccountsResponseFormGroup() {
		return new FormGroup<ListPublisherAccountsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A publisher account contains information relevant to the use of this API, such as the time zone used for the reports. */
	export interface PublisherAccount {

		/** Currency code of the earning-related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion. */
		currencyCode?: string | null;

		/** Resource name of this account. Format is accounts/{publisher_id}. */
		name?: string | null;

		/** The unique ID by which this publisher account can be identified in the API requests (for example, pub-1234567890). */
		publisherId?: string | null;

		/** The time zone that is used in reports that are generated for this account. The value is a time-zone ID as specified by the CLDR project, for example, "America/Los_Angeles". */
		reportingTimeZone?: string | null;
	}

	/** A publisher account contains information relevant to the use of this API, such as the time zone used for the reports. */
	export interface PublisherAccountFormProperties {

		/** Currency code of the earning-related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion. */
		currencyCode: FormControl<string | null | undefined>,

		/** Resource name of this account. Format is accounts/{publisher_id}. */
		name: FormControl<string | null | undefined>,

		/** The unique ID by which this publisher account can be identified in the API requests (for example, pub-1234567890). */
		publisherId: FormControl<string | null | undefined>,

		/** The time zone that is used in reports that are generated for this account. The value is a time-zone ID as specified by the CLDR project, for example, "America/Los_Angeles". */
		reportingTimeZone: FormControl<string | null | undefined>,
	}
	export function CreatePublisherAccountFormGroup() {
		return new FormGroup<PublisherAccountFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			publisherId: new FormControl<string | null | undefined>(undefined),
			reportingTimeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.
		 * Get v1/accounts
		 * @param {number} pageSize Maximum number of accounts to return.
		 * @param {string} pageToken The value returned by the last `ListPublisherAccountsResponse`; indicates that this is a continuation of a prior `ListPublisherAccounts` call, and that the system should return the next page of data.
		 * @return {ListPublisherAccountsResponse} Successful response
		 */
		Admob_accounts_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPublisherAccountsResponse> {
			return this.http.get<ListPublisherAccountsResponse>(this.baseUri + 'v1/accounts?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets information about the specified AdMob publisher account.
		 * Get v1/{name}
		 * @param {string} name Resource name of the publisher account to retrieve. Example: accounts/pub-9876543210987654
		 * @return {PublisherAccount} Successful response
		 */
		Admob_accounts_get(name: string): Observable<PublisherAccount> {
			return this.http.get<PublisherAccount>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * List the ad units under the specified AdMob account.
		 * Get v1/{parent}/adUnits
		 * @param {string} parent Required. Resource name of the account to list ad units for. Example: accounts/pub-9876543210987654
		 * @param {number} pageSize The maximum number of ad units to return. If unspecified or 0, at most 10,000 ad units will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
		 * @param {string} pageToken The value returned by the last `ListAdUnitsResponse`; indicates that this is a continuation of a prior `ListAdUnits` call, and that the system should return the next page of data.
		 * @return {ListAdUnitsResponse} Successful response
		 */
		Admob_accounts_adUnits_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAdUnitsResponse> {
			return this.http.get<ListAdUnitsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/adUnits&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List the apps under the specified AdMob account.
		 * Get v1/{parent}/apps
		 * @param {string} parent Required. Resource name of the account to list apps for. Example: accounts/pub-9876543210987654
		 * @param {number} pageSize The maximum number of apps to return. If unspecified or 0, at most 10,000 apps will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
		 * @param {string} pageToken The value returned by the last `ListAppsResponse`; indicates that this is a continuation of a prior `ListApps` call, and that the system should return the next page of data.
		 * @return {ListAppsResponse} Successful response
		 */
		Admob_accounts_apps_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAppsResponse> {
			return this.http.get<ListAppsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Generates an AdMob mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
		 * Post v1/{parent}/mediationReport:generate
		 * @param {string} parent Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
		 * @return {GenerateMediationReportResponse} Successful response
		 */
		Admob_accounts_mediationReport_generate(parent: string, requestBody: GenerateMediationReportRequest): Observable<GenerateMediationReportResponse> {
			return this.http.post<GenerateMediationReportResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/mediationReport:generate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
		 * Post v1/{parent}/networkReport:generate
		 * @param {string} parent Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
		 * @return {GenerateNetworkReportResponse} Successful response
		 */
		Admob_accounts_networkReport_generate(parent: string, requestBody: GenerateNetworkReportRequest): Observable<GenerateNetworkReportResponse> {
			return this.http.post<GenerateNetworkReportResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/networkReport:generate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

