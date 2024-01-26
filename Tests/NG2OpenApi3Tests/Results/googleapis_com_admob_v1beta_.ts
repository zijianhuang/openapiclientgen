import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Definition of a mediation ad source. */
	export interface AdSource {

		/** ID of this ad source. */
		adSourceId?: string | null;

		/** Resource name of this ad source. Format is: accounts/{publisher_id}/adSources/{ad_source_id} */
		name?: string | null;

		/** Display name of this ad source. */
		title?: string | null;
	}

	/** Definition of a mediation ad source. */
	export interface AdSourceFormProperties {

		/** ID of this ad source. */
		adSourceId: FormControl<string | null | undefined>,

		/** Resource name of this ad source. Format is: accounts/{publisher_id}/adSources/{ad_source_id} */
		name: FormControl<string | null | undefined>,

		/** Display name of this ad source. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAdSourceFormGroup() {
		return new FormGroup<AdSourceFormProperties>({
			adSourceId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


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

		/** Settings for a rewarded ad unit. */
		rewardSettings?: AdUnitRewardSettings;
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


	/** Settings for a rewarded ad unit. */
	export interface AdUnitRewardSettings {

		/** Reward amount for this ad unit. */
		unitAmount?: string | null;

		/** Reward item for this ad unit. */
		unitType?: string | null;
	}

	/** Settings for a rewarded ad unit. */
	export interface AdUnitRewardSettingsFormProperties {

		/** Reward amount for this ad unit. */
		unitAmount: FormControl<string | null | undefined>,

		/** Reward item for this ad unit. */
		unitType: FormControl<string | null | undefined>,
	}
	export function CreateAdUnitRewardSettingsFormGroup() {
		return new FormGroup<AdUnitRewardSettingsFormProperties>({
			unitAmount: new FormControl<string | null | undefined>(undefined),
			unitType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings to map an AdMob ad unit to a 3rd party ad unit. */
	export interface AdUnitMapping {

		/** Settings for the specified ad unit to make an ad request to 3rd party ad network. Key-value pairs with values set by the user for the keys requested by the ad network. Please see https://support.google.com/admob/answer/3245073 for details on how to configure the network settings. */
		adUnitConfigurations?: {[id: string]: string };

		/** The ID of mediation ad source adapter used by this ad unit mapping. The adapter determines the information needed in the ad_network_settings. */
		adapterId?: string | null;

		/** Optional. The display name of this ad unit mapping instance. */
		displayName?: string | null;

		/** Resource name of this ad unit mapping. Format is: accounts/{publisher_id}/adUnits/{ad_unit_id_fragment}/adUnitMappings/{ad_unit_mapping_id} Example: accounts/pub-1234567890123456/adUnits/0123456789/adUnitMappings/987654321 */
		name?: string | null;

		/** Output only. The status of this ad unit mapping. */
		state?: AdUnitMappingState | null;
	}

	/** Settings to map an AdMob ad unit to a 3rd party ad unit. */
	export interface AdUnitMappingFormProperties {

		/** Settings for the specified ad unit to make an ad request to 3rd party ad network. Key-value pairs with values set by the user for the keys requested by the ad network. Please see https://support.google.com/admob/answer/3245073 for details on how to configure the network settings. */
		adUnitConfigurations: FormControl<{[id: string]: string } | null | undefined>,

		/** The ID of mediation ad source adapter used by this ad unit mapping. The adapter determines the information needed in the ad_network_settings. */
		adapterId: FormControl<string | null | undefined>,

		/** Optional. The display name of this ad unit mapping instance. */
		displayName: FormControl<string | null | undefined>,

		/** Resource name of this ad unit mapping. Format is: accounts/{publisher_id}/adUnits/{ad_unit_id_fragment}/adUnitMappings/{ad_unit_mapping_id} Example: accounts/pub-1234567890123456/adUnits/0123456789/adUnitMappings/987654321 */
		name: FormControl<string | null | undefined>,

		/** Output only. The status of this ad unit mapping. */
		state: FormControl<AdUnitMappingState | null | undefined>,
	}
	export function CreateAdUnitMappingFormGroup() {
		return new FormGroup<AdUnitMappingFormProperties>({
			adUnitConfigurations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			adapterId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AdUnitMappingState | null | undefined>(undefined),
		});

	}

	export enum AdUnitMappingState { STATE_UNSPECIFIED = 0, ENABLED = 1 }


	/** Describes adapters supported by each mediation ad source. Adapters correspond to a specific SDK implementation of the ad source, and are each associated with a single platform and a list of supported ad unit formats. Adapters may also require setting some configurations to perform ad requests. Configurations can be specified in the AdUnitMapping by setting the [ad_unit_configurations](#AdUnitMapping.ad_unit_configurations) key/value pairs. For example, the ad_unit_configurations can be used to pass various IDs to the adapter's third-party SDK. */
	export interface Adapter {

		/** Output only. Configuration metadata associated with this adapter. */
		adapterConfigMetadata?: Array<AdapterAdapterConfigMetadata>;

		/** Output only. ID of this adapter. It is used to set [adapter_id](#AdUnitMapping.adapter_id). */
		adapterId?: string | null;

		/** Output only. Indicates the formats of the ad units supported by this adapter. */
		formats?: Array<string>;

		/** Output only. Resource name of the adapter. Format is: accounts/{publisher_id}/adSources/{ad_source_id}/adapters/{adapter_id}. */
		name?: string | null;

		/** Output only. Mobile application platform supported by this adapter. Supported values are: IOS, ANDROID, WINDOWS_PHONE */
		platform?: string | null;

		/** Output only. The display name of this adapter. */
		title?: string | null;
	}

	/** Describes adapters supported by each mediation ad source. Adapters correspond to a specific SDK implementation of the ad source, and are each associated with a single platform and a list of supported ad unit formats. Adapters may also require setting some configurations to perform ad requests. Configurations can be specified in the AdUnitMapping by setting the [ad_unit_configurations](#AdUnitMapping.ad_unit_configurations) key/value pairs. For example, the ad_unit_configurations can be used to pass various IDs to the adapter's third-party SDK. */
	export interface AdapterFormProperties {

		/** Output only. ID of this adapter. It is used to set [adapter_id](#AdUnitMapping.adapter_id). */
		adapterId: FormControl<string | null | undefined>,

		/** Output only. Resource name of the adapter. Format is: accounts/{publisher_id}/adSources/{ad_source_id}/adapters/{adapter_id}. */
		name: FormControl<string | null | undefined>,

		/** Output only. Mobile application platform supported by this adapter. Supported values are: IOS, ANDROID, WINDOWS_PHONE */
		platform: FormControl<string | null | undefined>,

		/** Output only. The display name of this adapter. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAdapterFormGroup() {
		return new FormGroup<AdapterFormProperties>({
			adapterId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration metadata associated with this adapter. They are used to define the ad_unit_configurations associated with AdUnitMappings for the this adapter. */
	export interface AdapterAdapterConfigMetadata {

		/** This is used to fill the key of the [ad_unit_configurations](#AdUnitMapping.ad_unit_configurations). */
		adapterConfigMetadataId?: string | null;

		/** Name of the adapter configuration metadata. */
		adapterConfigMetadataLabel?: string | null;

		/** Whether this metadata is required for configuring the AdUnitMappings. */
		isRequired?: boolean | null;
	}

	/** Configuration metadata associated with this adapter. They are used to define the ad_unit_configurations associated with AdUnitMappings for the this adapter. */
	export interface AdapterAdapterConfigMetadataFormProperties {

		/** This is used to fill the key of the [ad_unit_configurations](#AdUnitMapping.ad_unit_configurations). */
		adapterConfigMetadataId: FormControl<string | null | undefined>,

		/** Name of the adapter configuration metadata. */
		adapterConfigMetadataLabel: FormControl<string | null | undefined>,

		/** Whether this metadata is required for configuring the AdUnitMappings. */
		isRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateAdapterAdapterConfigMetadataFormGroup() {
		return new FormGroup<AdapterAdapterConfigMetadataFormProperties>({
			adapterConfigMetadataId: new FormControl<string | null | undefined>(undefined),
			adapterConfigMetadataLabel: new FormControl<string | null | undefined>(undefined),
			isRequired: new FormControl<boolean | null | undefined>(undefined),
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

		/** Optional. The app store information for published Android apps. This field is only used for apps on the Android platform and will be ignored if the PLATFORM is set to iOS. The default value is the Google Play App store. This field can be updated after app is created. If the app is not published, this field will not be included in the response. */
		androidAppStores?: Array<string>;

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


	/** Request to create a batch of ad unit mappings under the specific AdMob account. */
	export interface BatchCreateAdUnitMappingsRequest {

		/** Required. The request message specifying the ad unit mappings to create. A maximum of 100 ad unit mappings can be created in a batch. If the number of ad unit mappings in the batch request exceed 100, the entire request will be rejected and no ad unit mappings will be created. */
		requests?: Array<CreateAdUnitMappingRequest>;
	}

	/** Request to create a batch of ad unit mappings under the specific AdMob account. */
	export interface BatchCreateAdUnitMappingsRequestFormProperties {
	}
	export function CreateBatchCreateAdUnitMappingsRequestFormGroup() {
		return new FormGroup<BatchCreateAdUnitMappingsRequestFormProperties>({
		});

	}


	/** Request to create an ad unit mapping under the specific AdMob account and ad unit. */
	export interface CreateAdUnitMappingRequest {

		/** Settings to map an AdMob ad unit to a 3rd party ad unit. */
		adUnitMapping?: AdUnitMapping;

		/** Required. The parent which owns the ad unit mapping. Format: accounts/{publisher_id}/adUnits/{ad_unit_id} */
		parent?: string | null;
	}

	/** Request to create an ad unit mapping under the specific AdMob account and ad unit. */
	export interface CreateAdUnitMappingRequestFormProperties {

		/** Required. The parent which owns the ad unit mapping. Format: accounts/{publisher_id}/adUnits/{ad_unit_id} */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateCreateAdUnitMappingRequestFormGroup() {
		return new FormGroup<CreateAdUnitMappingRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing a batch of created ad unit mappings. */
	export interface BatchCreateAdUnitMappingsResponse {

		/** The Ad units mappings created under the requested account. */
		adUnitMappings?: Array<AdUnitMapping>;
	}

	/** Response containing a batch of created ad unit mappings. */
	export interface BatchCreateAdUnitMappingsResponseFormProperties {
	}
	export function CreateBatchCreateAdUnitMappingsResponseFormGroup() {
		return new FormGroup<BatchCreateAdUnitMappingsResponseFormProperties>({
		});

	}


	/** The specification for generating a Campaign report. For example, the specification to get IMPRESSIONS and CLICKS sliced by CAMPAIGN_ID can look like the following example: { "date_range": { "start_date": {"year": 2021, "month": 12, "day": 1}, "end_date": {"year": 2021, "month": 12, "day": 30} }, "dimensions": ["CAMPAIGN_ID"], "metrics": ["IMPRESSIONS", "CLICKS"], } */
	export interface CampaignReportSpec {

		/** Specification of a single date range. Both dates are inclusive. */
		dateRange?: DateRange;

		/** List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account. */
		dimensions?: Array<string>;

		/** Language used for any localized text, such as certain applicable dimension values. The language tag is defined in the IETF BCP47. Defaults to 'en-US' if unspecified or invalid. */
		languageCode?: string | null;

		/** List of metrics of the report. A report must specify at least one metric. */
		metrics?: Array<string>;
	}

	/** The specification for generating a Campaign report. For example, the specification to get IMPRESSIONS and CLICKS sliced by CAMPAIGN_ID can look like the following example: { "date_range": { "start_date": {"year": 2021, "month": 12, "day": 1}, "end_date": {"year": 2021, "month": 12, "day": 30} }, "dimensions": ["CAMPAIGN_ID"], "metrics": ["IMPRESSIONS", "CLICKS"], } */
	export interface CampaignReportSpecFormProperties {

		/** Language used for any localized text, such as certain applicable dimension values. The language tag is defined in the IETF BCP47. Defaults to 'en-US' if unspecified or invalid. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateCampaignReportSpecFormGroup() {
		return new FormGroup<CampaignReportSpecFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
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


	/** Request to generate campaign report. */
	export interface GenerateCampaignReportRequest {

		/** The specification for generating a Campaign report. For example, the specification to get IMPRESSIONS and CLICKS sliced by CAMPAIGN_ID can look like the following example: { "date_range": { "start_date": {"year": 2021, "month": 12, "day": 1}, "end_date": {"year": 2021, "month": 12, "day": 30} }, "dimensions": ["CAMPAIGN_ID"], "metrics": ["IMPRESSIONS", "CLICKS"], } */
		reportSpec?: CampaignReportSpec;
	}

	/** Request to generate campaign report. */
	export interface GenerateCampaignReportRequestFormProperties {
	}
	export function CreateGenerateCampaignReportRequestFormGroup() {
		return new FormGroup<GenerateCampaignReportRequestFormProperties>({
		});

	}


	/** Campaign Report API response. */
	export interface GenerateCampaignReportResponse {

		/** The campaign report data from the specified publisher. At most 100000 rows will be returned from the API. */
		rows?: Array<ReportRow>;
	}

	/** Campaign Report API response. */
	export interface GenerateCampaignReportResponseFormProperties {
	}
	export function CreateGenerateCampaignReportResponseFormGroup() {
		return new FormGroup<GenerateCampaignReportResponseFormProperties>({
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


	/** Response for the ListAdSourcesRequest. */
	export interface ListAdSourcesResponse {

		/** The ad sources. */
		adSources?: Array<AdSource>;

		/** Used to set the `page_token` in the `ListAdSourcesRequest` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response for the ListAdSourcesRequest. */
	export interface ListAdSourcesResponseFormProperties {

		/** Used to set the `page_token` in the `ListAdSourcesRequest` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAdSourcesResponseFormGroup() {
		return new FormGroup<ListAdSourcesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the ListAdUnitMappingsRequest. */
	export interface ListAdUnitMappingsResponse {

		/** The ad unit mappings from the specified account and ad unit. */
		adUnitMappings?: Array<AdUnitMapping>;

		/** Used to set the `page_token` in the `ListAdUnitMappingsRequest` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response for the ListAdUnitMappingsRequest. */
	export interface ListAdUnitMappingsResponseFormProperties {

		/** Used to set the `page_token` in the `ListAdUnitMappingsRequest` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAdUnitMappingsResponseFormGroup() {
		return new FormGroup<ListAdUnitMappingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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


	/** Response for the ListAdaptersRequest. */
	export interface ListAdaptersResponse {

		/** The adapter. */
		adapters?: Array<Adapter>;

		/** Used to set the `page_token` in the `ListAdapterRequest` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response for the ListAdaptersRequest. */
	export interface ListAdaptersResponseFormProperties {

		/** Used to set the `page_token` in the `ListAdapterRequest` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAdaptersResponseFormGroup() {
		return new FormGroup<ListAdaptersResponseFormProperties>({
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


	/** Response for the mediation groups list request. */
	export interface ListMediationGroupsResponse {

		/** The resulting mediation groups for the requested account. */
		mediationGroups?: Array<MediationGroup>;

		/** If not empty, indicates that there may be more mediation groups for the request; this value should be passed in a new `ListMediationGroupsRequest`. */
		nextPageToken?: string | null;
	}

	/** Response for the mediation groups list request. */
	export interface ListMediationGroupsResponseFormProperties {

		/** If not empty, indicates that there may be more mediation groups for the request; this value should be passed in a new `ListMediationGroupsRequest`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMediationGroupsResponseFormGroup() {
		return new FormGroup<ListMediationGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an AdMob mediation group. */
	export interface MediationGroup {

		/** User provided name for the mediation group. The maximum length allowed is 120 characters. */
		displayName?: string | null;

		/** Output only. The state of the mediation a/b experiment that belongs to this mediation group. */
		mediationAbExperimentState?: MediationGroupMediationAbExperimentState | null;

		/** The ID of the mediation group. Example: "0123456789". This is a read only property. */
		mediationGroupId?: string | null;

		/** The mediation lines used for serving for this mediation group. Key is the ID of the mediation group line. For creation, use distinct negative values as placeholder. */
		mediationGroupLines?: {[id: string]: MediationGroupMediationGroupLine };

		/** Resource name for this mediation group. Format is: accounts/{publisher_id}/mediationGroups/{mediation_group_id} Example: accounts/pub-9876543210987654/mediationGroups/0123456789 */
		name?: string | null;

		/** The status of the mediation group. Only enabled mediation groups will be served. */
		state?: MediationGroupState | null;

		/** Set of criteria targeted by this mediation group. For example, a mediation group can target specific ad unit IDs, platform, format and geo location. */
		targeting?: MediationGroupTargeting;
	}

	/** Describes an AdMob mediation group. */
	export interface MediationGroupFormProperties {

		/** User provided name for the mediation group. The maximum length allowed is 120 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The state of the mediation a/b experiment that belongs to this mediation group. */
		mediationAbExperimentState: FormControl<MediationGroupMediationAbExperimentState | null | undefined>,

		/** The ID of the mediation group. Example: "0123456789". This is a read only property. */
		mediationGroupId: FormControl<string | null | undefined>,

		/** The mediation lines used for serving for this mediation group. Key is the ID of the mediation group line. For creation, use distinct negative values as placeholder. */
		mediationGroupLines: FormControl<{[id: string]: MediationGroupMediationGroupLine } | null | undefined>,

		/** Resource name for this mediation group. Format is: accounts/{publisher_id}/mediationGroups/{mediation_group_id} Example: accounts/pub-9876543210987654/mediationGroups/0123456789 */
		name: FormControl<string | null | undefined>,

		/** The status of the mediation group. Only enabled mediation groups will be served. */
		state: FormControl<MediationGroupState | null | undefined>,
	}
	export function CreateMediationGroupFormGroup() {
		return new FormGroup<MediationGroupFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			mediationAbExperimentState: new FormControl<MediationGroupMediationAbExperimentState | null | undefined>(undefined),
			mediationGroupId: new FormControl<string | null | undefined>(undefined),
			mediationGroupLines: new FormControl<{[id: string]: MediationGroupMediationGroupLine } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MediationGroupState | null | undefined>(undefined),
		});

	}

	export enum MediationGroupMediationAbExperimentState { EXPERIMENT_STATE_UNSPECIFIED = 0, RUNNING = 1, NOT_RUNNING = 2 }


	/** Settings for an ad network used by a mediation group. */
	export interface MediationGroupMediationGroupLine {

		/** The ID of the ad source this mediation line is associated with. */
		adSourceId?: string | null;

		/** References of the ad unit mappings for each ad unit associated with this mediation line. Key is the ad unit ID, value is resource name of the ad unit mapping. For mediation lines where the ad source id is the AdMob Network, ad unit mappings will be ignored. */
		adUnitMappings?: {[id: string]: string };

		/** The CPM for this allocation line. $0.01 is the minimum allowed amount. For LIVE CPM modes, the default amount is $0.01. This value is ignored if `cpm_mode` is `LIVE`. **Warning:** "USD" is the only supported currency at the moment. The unit is in micros. */
		cpmMicros?: string | null;

		/** Indicates how the CPM for this mediation line is provided. Note that `MANUAL` and `LIVE` are the only fully-supported mode at the moment. Please use the AdMob UI (https://admob.google.com) if you wish to create or update to other cpm modes. */
		cpmMode?: MediationGroupMediationGroupLineCpmMode | null;

		/** User-provided label for this mediation line. The maximum length allowed is 255 characters. */
		displayName?: string | null;

		/** Output only. The Mediation A/B experiment variant to which the mediation group line belongs to. */
		experimentVariant?: MediationGroupMediationGroupLineExperimentVariant | null;

		/** The 16 digit ID for this mediation line e.g. 0123456789012345. When creating a new mediation group line, use a distinct negative integer as the ID place holder. */
		id?: string | null;

		/** The status of the mediation group line. Only enabled mediation group lines will be served. */
		state?: MediationGroupMediationGroupLineState | null;
	}

	/** Settings for an ad network used by a mediation group. */
	export interface MediationGroupMediationGroupLineFormProperties {

		/** The ID of the ad source this mediation line is associated with. */
		adSourceId: FormControl<string | null | undefined>,

		/** References of the ad unit mappings for each ad unit associated with this mediation line. Key is the ad unit ID, value is resource name of the ad unit mapping. For mediation lines where the ad source id is the AdMob Network, ad unit mappings will be ignored. */
		adUnitMappings: FormControl<{[id: string]: string } | null | undefined>,

		/** The CPM for this allocation line. $0.01 is the minimum allowed amount. For LIVE CPM modes, the default amount is $0.01. This value is ignored if `cpm_mode` is `LIVE`. **Warning:** "USD" is the only supported currency at the moment. The unit is in micros. */
		cpmMicros: FormControl<string | null | undefined>,

		/** Indicates how the CPM for this mediation line is provided. Note that `MANUAL` and `LIVE` are the only fully-supported mode at the moment. Please use the AdMob UI (https://admob.google.com) if you wish to create or update to other cpm modes. */
		cpmMode: FormControl<MediationGroupMediationGroupLineCpmMode | null | undefined>,

		/** User-provided label for this mediation line. The maximum length allowed is 255 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The Mediation A/B experiment variant to which the mediation group line belongs to. */
		experimentVariant: FormControl<MediationGroupMediationGroupLineExperimentVariant | null | undefined>,

		/** The 16 digit ID for this mediation line e.g. 0123456789012345. When creating a new mediation group line, use a distinct negative integer as the ID place holder. */
		id: FormControl<string | null | undefined>,

		/** The status of the mediation group line. Only enabled mediation group lines will be served. */
		state: FormControl<MediationGroupMediationGroupLineState | null | undefined>,
	}
	export function CreateMediationGroupMediationGroupLineFormGroup() {
		return new FormGroup<MediationGroupMediationGroupLineFormProperties>({
			adSourceId: new FormControl<string | null | undefined>(undefined),
			adUnitMappings: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			cpmMicros: new FormControl<string | null | undefined>(undefined),
			cpmMode: new FormControl<MediationGroupMediationGroupLineCpmMode | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			experimentVariant: new FormControl<MediationGroupMediationGroupLineExperimentVariant | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MediationGroupMediationGroupLineState | null | undefined>(undefined),
		});

	}

	export enum MediationGroupMediationGroupLineCpmMode { CPM_MODE_UNSPECIFIED = 0, LIVE = 1, MANUAL = 2, ANO = 3 }

	export enum MediationGroupMediationGroupLineExperimentVariant { VARIANT_UNSPECIFIED = 0, VARIANT_A = 1, VARIANT_B = 2, ORIGINAL = 3 }

	export enum MediationGroupMediationGroupLineState { STATE_UNSPECIFIED = 0, ENABLED = 1, DISABLED = 2, REMOVED = 3 }

	export enum MediationGroupState { STATE_UNSPECIFIED = 0, ENABLED = 1, DISABLED = 2 }


	/** Set of criteria targeted by this mediation group. For example, a mediation group can target specific ad unit IDs, platform, format and geo location. */
	export interface MediationGroupTargeting {

		/** Ad units targeted by this mediation group. Example: "ca-app-pub-1234/8790". */
		adUnitIds?: Array<string>;

		/** The Unicode country/region code (CLDR) of a location, such as "US". Unset if this mediation group does not exclude any region. */
		excludedRegionCodes?: Array<string>;

		/** Ad format targeted by this mediation group. Examples: "banner", "native". */
		format?: string | null;

		/** The parameter can be used to target ad requests based on the availability of the IDFA. If set to ALL, the mediation group applies to all ad requests (with or without IDFA). If set to AVAILABLE, the mediation group applies to ad requests with IDFA. If set to NOT_AVAILABLE, the mediation group applies to ad requests without IDFA. Doesn't need to be specified for an ANDROID device. */
		idfaTargeting?: MediationGroupTargetingIdfaTargeting | null;

		/** Describes the platform of the app. Examples: "IOS", "Android". */
		platform?: string | null;

		/** The Unicode country/region code (CLDR) of a location, such as "US". Unset if this mediation group targets all available regions. For more information, see http://www.unicode.org/reports/tr35/#unicode_region_subtag. */
		targetedRegionCodes?: Array<string>;
	}

	/** Set of criteria targeted by this mediation group. For example, a mediation group can target specific ad unit IDs, platform, format and geo location. */
	export interface MediationGroupTargetingFormProperties {

		/** Ad format targeted by this mediation group. Examples: "banner", "native". */
		format: FormControl<string | null | undefined>,

		/** The parameter can be used to target ad requests based on the availability of the IDFA. If set to ALL, the mediation group applies to all ad requests (with or without IDFA). If set to AVAILABLE, the mediation group applies to ad requests with IDFA. If set to NOT_AVAILABLE, the mediation group applies to ad requests without IDFA. Doesn't need to be specified for an ANDROID device. */
		idfaTargeting: FormControl<MediationGroupTargetingIdfaTargeting | null | undefined>,

		/** Describes the platform of the app. Examples: "IOS", "Android". */
		platform: FormControl<string | null | undefined>,
	}
	export function CreateMediationGroupTargetingFormGroup() {
		return new FormGroup<MediationGroupTargetingFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			idfaTargeting: new FormControl<MediationGroupTargetingIdfaTargeting | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MediationGroupTargetingIdfaTargeting { IDFA_TARGETING_UNSPECIFIED = 0, ALL = 1, AVAILABLE = 2, NOT_AVAILABLE = 3 }


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


	/** The mediation A/B experiment. */
	export interface MediationAbExperiment {

		/** Output only. The experiment mediation lines for control. They are inherited from the parent mediation group. It is an output only field. */
		controlMediationLines?: Array<MediationAbExperimentExperimentMediationLine>;

		/** The display name for the mediation A/B experiment. */
		displayName?: string | null;

		/** Output only. The time at which the experiment was ended or target to end (in UTC). */
		endTime?: string | null;

		/** Output only. Unique identifier for the mediation A/B experiment. It is an output only property. */
		experimentId?: string | null;

		/** Output only. The mediation group id this experiment belongs to. This can be used for filtering the experiments in the list experiments API. */
		mediationGroupId?: string | null;

		/** Resource name for this experiment. The format is accounts/{publisher_id}/ mediationGroups/{mediation_group_id}/mediationAbExperiment/ {mediation_group_experiment_id}. For example: accounts/pub-9876543210987654/mediationGroups/0123456789/ mediationAbExperiment/12345 */
		name?: string | null;

		/** Output only. The time at which the experiment was started (in UTC). */
		startTime?: string | null;

		/** Output only. The state of the experiment. It is an output only field. */
		state?: MediationAbExperimentState | null;

		/** The experiment mediation lines created for the treatment. They will be used for serving when the experiment status is RUNNING. */
		treatmentMediationLines?: Array<MediationAbExperimentExperimentMediationLine>;

		/** The percentage of the mediation A/B experiment traffic that will be send to the treatment (variant B). The remainder is sent to the control (variant A). The percentage is expressed as an integer in the inclusive range of [1,99]. See https://support.google.com/admob/answer/9572326 for details. */
		treatmentTrafficPercentage?: string | null;

		/** Output only. The variant leader for the experiment according to some key metrics. */
		variantLeader?: MediationAbExperimentVariantLeader | null;
	}

	/** The mediation A/B experiment. */
	export interface MediationAbExperimentFormProperties {

		/** The display name for the mediation A/B experiment. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The time at which the experiment was ended or target to end (in UTC). */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Unique identifier for the mediation A/B experiment. It is an output only property. */
		experimentId: FormControl<string | null | undefined>,

		/** Output only. The mediation group id this experiment belongs to. This can be used for filtering the experiments in the list experiments API. */
		mediationGroupId: FormControl<string | null | undefined>,

		/** Resource name for this experiment. The format is accounts/{publisher_id}/ mediationGroups/{mediation_group_id}/mediationAbExperiment/ {mediation_group_experiment_id}. For example: accounts/pub-9876543210987654/mediationGroups/0123456789/ mediationAbExperiment/12345 */
		name: FormControl<string | null | undefined>,

		/** Output only. The time at which the experiment was started (in UTC). */
		startTime: FormControl<string | null | undefined>,

		/** Output only. The state of the experiment. It is an output only field. */
		state: FormControl<MediationAbExperimentState | null | undefined>,

		/** The percentage of the mediation A/B experiment traffic that will be send to the treatment (variant B). The remainder is sent to the control (variant A). The percentage is expressed as an integer in the inclusive range of [1,99]. See https://support.google.com/admob/answer/9572326 for details. */
		treatmentTrafficPercentage: FormControl<string | null | undefined>,

		/** Output only. The variant leader for the experiment according to some key metrics. */
		variantLeader: FormControl<MediationAbExperimentVariantLeader | null | undefined>,
	}
	export function CreateMediationAbExperimentFormGroup() {
		return new FormGroup<MediationAbExperimentFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			experimentId: new FormControl<string | null | undefined>(undefined),
			mediationGroupId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MediationAbExperimentState | null | undefined>(undefined),
			treatmentTrafficPercentage: new FormControl<string | null | undefined>(undefined),
			variantLeader: new FormControl<MediationAbExperimentVariantLeader | null | undefined>(undefined),
		});

	}


	/** The mediation group line for the experiment. It will be used for serving during the run of the experiment. */
	export interface MediationAbExperimentExperimentMediationLine {

		/** Settings for an ad network used by a mediation group. */
		mediationGroupLine?: MediationGroupMediationGroupLine;
	}

	/** The mediation group line for the experiment. It will be used for serving during the run of the experiment. */
	export interface MediationAbExperimentExperimentMediationLineFormProperties {
	}
	export function CreateMediationAbExperimentExperimentMediationLineFormGroup() {
		return new FormGroup<MediationAbExperimentExperimentMediationLineFormProperties>({
		});

	}

	export enum MediationAbExperimentState { EXPERIMENT_STATE_UNSPECIFIED = 0, EXPIRED = 1, RUNNING = 2, ENDED = 3 }

	export enum MediationAbExperimentVariantLeader { VARIANT_LEADER_UNSPECIFIED = 0, CONTROL = 1, TREATMENT = 2 }


	/** Request to end the mediation A/B experiment and choose a winning variant. */
	export interface StopMediationAbExperimentRequest {

		/** The choice for the winning variant. */
		variantChoice?: StopMediationAbExperimentRequestVariantChoice | null;
	}

	/** Request to end the mediation A/B experiment and choose a winning variant. */
	export interface StopMediationAbExperimentRequestFormProperties {

		/** The choice for the winning variant. */
		variantChoice: FormControl<StopMediationAbExperimentRequestVariantChoice | null | undefined>,
	}
	export function CreateStopMediationAbExperimentRequestFormGroup() {
		return new FormGroup<StopMediationAbExperimentRequestFormProperties>({
			variantChoice: new FormControl<StopMediationAbExperimentRequestVariantChoice | null | undefined>(undefined),
		});

	}

	export enum StopMediationAbExperimentRequestVariantChoice { VARIANT_CHOICE_UNSPECIFIED = 0, VARIANT_CHOICE_A = 1, VARIANT_CHOICE_B = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.
		 * Get v1beta/accounts
		 * @param {number} pageSize Maximum number of accounts to return.
		 * @param {string} pageToken The value returned by the last `ListPublisherAccountsResponse`; indicates that this is a continuation of a prior `ListPublisherAccounts` call, and that the system should return the next page of data.
		 * @return {ListPublisherAccountsResponse} Successful response
		 */
		Admob_accounts_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPublisherAccountsResponse> {
			return this.http.get<ListPublisherAccountsResponse>(this.baseUri + 'v1beta/accounts?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets information about the specified AdMob publisher account.
		 * Get v1beta/{name}
		 * @param {string} name Resource name of the publisher account to retrieve. Example: accounts/pub-9876543210987654
		 * @return {PublisherAccount} Successful response
		 */
		Admob_accounts_get(name: string): Observable<PublisherAccount> {
			return this.http.get<PublisherAccount>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update the specified mediation group under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
		 * Patch v1beta/{name}
		 * @param {string} name Resource name for this mediation group. Format is: accounts/{publisher_id}/mediationGroups/{mediation_group_id} Example: accounts/pub-9876543210987654/mediationGroups/0123456789
		 * @param {string} updateMask List of mediation group fields to be updated. Updates to repeated fields such as items in a list will fully replace the existing value(s) with the new value(s). Updates to individual values in a map can be done by indexing by the key. The following field masks are supported for mediation group updates: - "mediation_group_lines[\"{mediation_group_line_id}\"]" clang-format off - "mediation_group_lines[\"{mediation_group_line_id}\"].ad_unit_mappings[\"{ad_unit_id}\"]" clang-format on - "mediation_group_lines[\"{mediation_group_line_id}\"].cpm_micros" - "mediation_group_lines[\"{mediation_group_line_id}\"].cpm_mode" - "mediation_group_lines[\"{mediation_group_line_id}\"].state" - "mediation_group_lines[\"{mediation_group_line_id}\"].display_name" - "targeting.ad_unit_ids" To update a mediation group with a new mediation group line, use a distinct negative number for the "mediation_group_line_id". For Example: update_mask { paths: "mediation_group_lines[\"123456789012345\"].cpm_micros" }
		 * @return {MediationGroup} Successful response
		 */
		Admob_accounts_mediationGroups_patch(name: string, updateMask: string | null | undefined, requestBody: MediationGroup): Observable<MediationGroup> {
			return this.http.patch<MediationGroup>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stop the mediation A/B experiment and choose a variant. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
		 * Post v1beta/{name}:stop
		 * @param {string} name Name of the mediation group, the experiment for which to choose a variant for. Example: accounts/pub-9876543210987654/mediationGroups/0123456789/ mediationAbExperiments
		 * @return {MediationAbExperiment} Successful response
		 */
		Admob_accounts_mediationGroups_mediationAbExperiments_stop(name: string, requestBody: StopMediationAbExperimentRequest): Observable<MediationAbExperiment> {
			return this.http.post<MediationAbExperiment>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the ad sources.
		 * Get v1beta/{parent}/adSources
		 * @param {string} parent Required. The parent which owns this collection of ad sources. Format: accounts/{publisher_id}
		 * @param {number} pageSize The maximum number of ad sources to return. If unspecified or 0, at most 10,000 ad sources will be returned. The maximum value is 20,000; values above 10,000 will be coerced to 20,000.
		 * @param {string} pageToken A page token, received from a previous `ListAdSources` call. Provide this to retrieve the subsequent page.
		 * @return {ListAdSourcesResponse} Successful response
		 */
		Admob_accounts_adSources_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAdSourcesResponse> {
			return this.http.get<ListAdSourcesResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/adSources&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List ad unit mappings under the specified AdMob account and ad unit. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
		 * Get v1beta/{parent}/adUnitMappings
		 * @param {string} parent Required. The parent which owns this collection of ad unit mappings. Format: accounts/{publisher_id}/adUnits/{ad_unit_id}
		 * @param {string} filter The filter string that uses [EBNF grammar syntax](https://google.aip.dev/assets/misc/ebnf-filtering.txt). Possible field to filter by is: - "DISPLAY_NAME" Possible filter function is: - `IN`: Used to filter fields that represent a singleton including "DISPLAY_NAME". The filter functions can be added together using `AND`. `OR` functionality is not supported. Example: filter: IN(DISPLAY_NAME, "Test Ad Unit Mapping 1", "Test Ad Unit Mapping 2")
		 * @param {number} pageSize The maximum number of ad unit mappings to return. If unspecified or 0, at most 10,000 ad unit mappings will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
		 * @param {string} pageToken A page token, received from a previous `ListAdUnitMappings` call. Provide this to retrieve the subsequent page.
		 * @return {ListAdUnitMappingsResponse} Successful response
		 */
		Admob_accounts_adUnits_adUnitMappings_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAdUnitMappingsResponse> {
			return this.http.get<ListAdUnitMappingsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/adUnitMappings&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create an ad unit mapping under the specific AdMob account and ad unit. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
		 * Post v1beta/{parent}/adUnitMappings
		 * @param {string} parent Required. The parent which owns the ad unit mapping. Format: accounts/{publisher_id}/adUnits/{ad_unit_id}
		 * @return {AdUnitMapping} Successful response
		 */
		Admob_accounts_adUnits_adUnitMappings_create(parent: string, requestBody: AdUnitMapping): Observable<AdUnitMapping> {
			return this.http.post<AdUnitMapping>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/adUnitMappings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batch create the ad unit mappings under the specific AdMob account. The maximum allowed batch size is 100. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
		 * Post v1beta/{parent}/adUnitMappings:batchCreate
		 * @param {string} parent Required. The AdMob account which owns this collection of ad unit mappings. Format: accounts/{publisher_id} See https://support.google.com/admob/answer/2784578 for instructions on how to find your AdMob publisher ID.
		 * @return {BatchCreateAdUnitMappingsResponse} Successful response
		 */
		Admob_accounts_adUnitMappings_batchCreate(parent: string, requestBody: BatchCreateAdUnitMappingsRequest): Observable<BatchCreateAdUnitMappingsResponse> {
			return this.http.post<BatchCreateAdUnitMappingsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/adUnitMappings:batchCreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the ad units under the specified AdMob account.
		 * Get v1beta/{parent}/adUnits
		 * @param {string} parent Required. Resource name of the account to list ad units for. Example: accounts/pub-9876543210987654
		 * @param {number} pageSize The maximum number of ad units to return. If unspecified or 0, at most 10,000 ad units will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
		 * @param {string} pageToken The value returned by the last `ListAdUnitsResponse`; indicates that this is a continuation of a prior `ListAdUnits` call, and that the system should return the next page of data.
		 * @return {ListAdUnitsResponse} Successful response
		 */
		Admob_accounts_adUnits_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAdUnitsResponse> {
			return this.http.get<ListAdUnitsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/adUnits&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an ad unit under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
		 * Post v1beta/{parent}/adUnits
		 * @param {string} parent Required. Resource name of the account to create the specified ad unit for. Example: accounts/pub-9876543210987654
		 * @return {AdUnit} Successful response
		 */
		Admob_accounts_adUnits_create(parent: string, requestBody: AdUnit): Observable<AdUnit> {
			return this.http.post<AdUnit>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/adUnits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the adapters of the ad source.
		 * Get v1beta/{parent}/adapters
		 * @param {string} parent Required. The parent which owns this collection of adapters. Format: accounts/{publisher_id}/adSources/{ad_source_id}
		 * @param {number} pageSize The maximum number of adapters to return. If unspecified or 0, at most 10,000 adapters will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
		 * @param {string} pageToken A page token, received from a previous `ListAdapters` call. Provide this to retrieve the subsequent page.
		 * @return {ListAdaptersResponse} Successful response
		 */
		Admob_accounts_adSources_adapters_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAdaptersResponse> {
			return this.http.get<ListAdaptersResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/adapters&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List the apps under the specified AdMob account.
		 * Get v1beta/{parent}/apps
		 * @param {string} parent Required. Resource name of the account to list apps for. Example: accounts/pub-9876543210987654
		 * @param {number} pageSize The maximum number of apps to return. If unspecified or 0, at most 10,000 apps will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
		 * @param {string} pageToken The value returned by the last `ListAppsResponse`; indicates that this is a continuation of a prior `ListApps` call, and that the system should return the next page of data.
		 * @return {ListAppsResponse} Successful response
		 */
		Admob_accounts_apps_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAppsResponse> {
			return this.http.get<ListAppsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an app under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
		 * Post v1beta/{parent}/apps
		 * @param {string} parent Required. Resource name of the account for which the app is being created. Example: accounts/pub-9876543210987654
		 * @return {App} Successful response
		 */
		Admob_accounts_apps_create(parent: string, requestBody: App): Observable<App> {
			return this.http.post<App>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/apps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates Campaign Report based on provided specifications.
		 * Post v1beta/{parent}/campaignReport:generate
		 * @param {string} parent Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
		 * @return {GenerateCampaignReportResponse} Successful response
		 */
		Admob_accounts_campaignReport_generate(parent: string, requestBody: GenerateCampaignReportRequest): Observable<GenerateCampaignReportResponse> {
			return this.http.post<GenerateCampaignReportResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/campaignReport:generate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create an A/B testing experiment for a specified AdMob account and a mediation group. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
		 * Post v1beta/{parent}/mediationAbExperiments
		 * @param {string} parent Required. The parent which owns the mediation group. Format: accounts/{publisher_id}/mediationGroups/{mediation_group_id}
		 * @return {MediationAbExperiment} Successful response
		 */
		Admob_accounts_mediationGroups_mediationAbExperiments_create(parent: string, requestBody: MediationAbExperiment): Observable<MediationAbExperiment> {
			return this.http.post<MediationAbExperiment>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/mediationAbExperiments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List mediation groups under the specified AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
		 * Get v1beta/{parent}/mediationGroups
		 * @param {string} parent Required. Resource name of the account to list mediation groups for. Example: accounts/pub-9876543210987654
		 * @param {string} filter The filter string that uses [EBNF grammar syntax](https://google.aip.dev/assets/misc/ebnf-filtering.txt). Possible fields to filter by are: - "AD_SOURCE_IDS" - "AD_UNIT_IDS" - "APP_IDS" - "DISPLAY_NAME" - "FORMAT" - "MEDIATION_GROUP_ID" - "PLATFORM" - "STATE" - "TARGETED_REGION_CODES" Possible filter functions are: - `IN`: Used to filter fields that represent a singleton including "MEDIATION_GROUP_ID", "DISPLAY_NAME", "STATE", "PLATFORM", and "FORMAT". - `CONTAINS_ANY`: Used to filter fields that represent a collection including "AD_SOURCE_IDS", "AD_UNIT_IDS", "APP_IDS", and "TARGETED_REGION_CODES". The filter functions can be added together using `AND`. `OR` functionality is not supported. Example: filter: IN(DISPLAY_NAME, "Test Group 1", "Test Group 2") AND IN(PLATFORM, "ANDROID") AND CONTAINS_ANY(AD_SOURCE_IDS, "5450213213286189855")
		 * @param {number} pageSize The maximum number of mediation groups to return. If unspecified or 0, at most 10,000 mediation groups will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
		 * @param {string} pageToken The value returned by the last `ListMediationGroupsResponse`; indicates that this is a continuation of a prior `ListMediationGroups` call, and that the system should return the next page of data.
		 * @return {ListMediationGroupsResponse} Successful response
		 */
		Admob_accounts_mediationGroups_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListMediationGroupsResponse> {
			return this.http.get<ListMediationGroupsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/mediationGroups&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a mediation group under the specific AdMob account. This method has limited access. If you see a 403 permission denied error, please reach out to your account manager for access.
		 * Post v1beta/{parent}/mediationGroups
		 * @param {string} parent Required. The parent which owns the mediation group. Format: accounts/{publisher_id}
		 * @return {MediationGroup} Successful response
		 */
		Admob_accounts_mediationGroups_create(parent: string, requestBody: MediationGroup): Observable<MediationGroup> {
			return this.http.post<MediationGroup>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/mediationGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates an AdMob mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
		 * Post v1beta/{parent}/mediationReport:generate
		 * @param {string} parent Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
		 * @return {GenerateMediationReportResponse} Successful response
		 */
		Admob_accounts_mediationReport_generate(parent: string, requestBody: GenerateMediationReportRequest): Observable<GenerateMediationReportResponse> {
			return this.http.post<GenerateMediationReportResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/mediationReport:generate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
		 * Post v1beta/{parent}/networkReport:generate
		 * @param {string} parent Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
		 * @return {GenerateNetworkReportResponse} Successful response
		 */
		Admob_accounts_networkReport_generate(parent: string, requestBody: GenerateNetworkReportRequest): Observable<GenerateNetworkReportResponse> {
			return this.http.post<GenerateNetworkReportResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/networkReport:generate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

