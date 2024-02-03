import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An account link. Represents the link between a Google Ads customer and a Hotel Ads (Hotel Center) account. An account link defines the set of hotels under the Hotel Center account that is linked to the Google Ads customer. */
	export interface AccountLink {

		/** Defines whether all properties or a subset of properties in the Hotel Center account can be managed with the linked Google Ads account. If a subset, the specific properties are specified. */
		accountLinkTarget?: AccountLinkTarget;

		/** Required for CREATE requests. The value representing the Google Ads customer ID in the format `customers/{google_ads_customer_id}`. For example: `customers/0123456789`. Note that the `googleAdsCustomerName` field is not returned in responses to GET requests. */
		googleAdsCustomerName?: string | null;

		/** The resource name for the account link in the format `accounts/{account_id}/accountLinks/{account_link_id}`. */
		name?: string | null;

		/** The current status of the account link. */
		status?: AccountLinkStatus | null;
	}

	/** An account link. Represents the link between a Google Ads customer and a Hotel Ads (Hotel Center) account. An account link defines the set of hotels under the Hotel Center account that is linked to the Google Ads customer. */
	export interface AccountLinkFormProperties {

		/** Required for CREATE requests. The value representing the Google Ads customer ID in the format `customers/{google_ads_customer_id}`. For example: `customers/0123456789`. Note that the `googleAdsCustomerName` field is not returned in responses to GET requests. */
		googleAdsCustomerName: FormControl<string | null | undefined>,

		/** The resource name for the account link in the format `accounts/{account_id}/accountLinks/{account_link_id}`. */
		name: FormControl<string | null | undefined>,

		/** The current status of the account link. */
		status: FormControl<AccountLinkStatus | null | undefined>,
	}
	export function CreateAccountLinkFormGroup() {
		return new FormGroup<AccountLinkFormProperties>({
			googleAdsCustomerName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AccountLinkStatus | null | undefined>(undefined),
		});

	}


	/** Defines whether all properties or a subset of properties in the Hotel Center account can be managed with the linked Google Ads account. If a subset, the specific properties are specified. */
	export interface AccountLinkTarget {

		/** True if all properties under the Hotel Center account are made available to the account link. The default is `false`. */
		allHotels?: boolean | null;

		/** The properties in the Hotel Center account that can be managed with the Google Ads account. */
		hotelList?: HotelList;
	}

	/** Defines whether all properties or a subset of properties in the Hotel Center account can be managed with the linked Google Ads account. If a subset, the specific properties are specified. */
	export interface AccountLinkTargetFormProperties {

		/** True if all properties under the Hotel Center account are made available to the account link. The default is `false`. */
		allHotels: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountLinkTargetFormGroup() {
		return new FormGroup<AccountLinkTargetFormProperties>({
			allHotels: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The properties in the Hotel Center account that can be managed with the Google Ads account. */
	export interface HotelList {

		/** Hotel IDs. */
		partnerHotelIds?: Array<string>;
	}

	/** The properties in the Hotel Center account that can be managed with the Google Ads account. */
	export interface HotelListFormProperties {
	}
	export function CreateHotelListFormGroup() {
		return new FormGroup<HotelListFormProperties>({
		});

	}

	export enum AccountLinkStatus { ACCOUNT_LINK_STATUS_UNSPECIFIED = 'ACCOUNT_LINK_STATUS_UNSPECIFIED', ACCOUNT_LINK_STATUS_UNKNOWN = 'ACCOUNT_LINK_STATUS_UNKNOWN', REQUESTED_FROM_HOTEL_CENTER = 'REQUESTED_FROM_HOTEL_CENTER', REQUESTED_FROM_GOOGLE_ADS = 'REQUESTED_FROM_GOOGLE_ADS', APPROVED = 'APPROVED' }


	/** Brand-level icon and display name configuration. Once approved, the icon and display name appear in the search results for properties that the partner has assigned to this brand. */
	export interface Brand {

		/** Output only. The brand's active display names in all provided languages, only present if the display name is approved for all provided languages. */
		activeDisplayNames?: Array<LocalizedText>;

		/** Output only. The brand's active [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource). The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`. An active icon is one that has been approved. */
		activeIcon?: string | null;

		/** Output only. URL of the active icon, only present when the icon has been approved. */
		activeIconUri?: string | null;

		/** Output only. Display name's disapproval reason. Only applies to display names with the review state 'REJECTED'. */
		displayNameDisapprovalReason?: Array<DisplayNameDisapprovalReason>;

		/** Output only. The brand's display names review state, which applies to all display name language entries. If there are both submitted and active display names, this refers to the submitted display names. */
		displayNameState?: BrandDisplayNameState | null;

		/** Input only. The name Google displays for the brand's properties. Setting the display names is only necessary if you want to override the landing page display name or account-level display name for the brand. Google reviews the display names for appropriate content. When there are multiple languages, Google will only show the display names once Google approves all the languages. */
		displayNames?: Array<LocalizedText>;

		/** Input only. The brand's [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource) identifying the brand's icon. The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`. */
		icon?: string | null;

		/** Output only. The icon's disapproval reason(s). Only applies to submitted icons with `REJECTED` state. */
		iconDisapprovalReasons?: Array<string>;

		/** Output only. The brand's icon's review state. If there are both submitted and active icons, this refers to the submitted icon. */
		iconState?: BrandDisplayNameState | null;

		/** Output only. The resource name for the brand in the format `accounts/{account_id}/brands/{brand_id}`. The `brand_id` corresponds to the partner's brand identifier used for landing page matching and the property-level brand identifier. A default brand is applied to properties that do not have a brand. The `brand_id` of the default brand is `NO_BRAND_ID`. It can be fetched and updated like any configured brand. */
		name?: string | null;

		/** Output only. The number of properties with the corresponding brand ID. */
		propertyCount?: string | null;

		/** Output only. The brand's submitted display names in all provided languages, only present if the display name is new or rejected for any language. */
		submittedDisplayNames?: Array<LocalizedText>;

		/** Output only. The brand's submitted [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource). The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`. A submitted icon is one that is new or rejected. */
		submittedIcon?: string | null;
	}

	/** Brand-level icon and display name configuration. Once approved, the icon and display name appear in the search results for properties that the partner has assigned to this brand. */
	export interface BrandFormProperties {

		/** Output only. The brand's active [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource). The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`. An active icon is one that has been approved. */
		activeIcon: FormControl<string | null | undefined>,

		/** Output only. URL of the active icon, only present when the icon has been approved. */
		activeIconUri: FormControl<string | null | undefined>,

		/** Output only. The brand's display names review state, which applies to all display name language entries. If there are both submitted and active display names, this refers to the submitted display names. */
		displayNameState: FormControl<BrandDisplayNameState | null | undefined>,

		/** Input only. The brand's [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource) identifying the brand's icon. The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`. */
		icon: FormControl<string | null | undefined>,

		/** Output only. The brand's icon's review state. If there are both submitted and active icons, this refers to the submitted icon. */
		iconState: FormControl<BrandDisplayNameState | null | undefined>,

		/** Output only. The resource name for the brand in the format `accounts/{account_id}/brands/{brand_id}`. The `brand_id` corresponds to the partner's brand identifier used for landing page matching and the property-level brand identifier. A default brand is applied to properties that do not have a brand. The `brand_id` of the default brand is `NO_BRAND_ID`. It can be fetched and updated like any configured brand. */
		name: FormControl<string | null | undefined>,

		/** Output only. The number of properties with the corresponding brand ID. */
		propertyCount: FormControl<string | null | undefined>,

		/** Output only. The brand's submitted [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource). The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`. A submitted icon is one that is new or rejected. */
		submittedIcon: FormControl<string | null | undefined>,
	}
	export function CreateBrandFormGroup() {
		return new FormGroup<BrandFormProperties>({
			activeIcon: new FormControl<string | null | undefined>(undefined),
			activeIconUri: new FormControl<string | null | undefined>(undefined),
			displayNameState: new FormControl<BrandDisplayNameState | null | undefined>(undefined),
			icon: new FormControl<string | null | undefined>(undefined),
			iconState: new FormControl<BrandDisplayNameState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			propertyCount: new FormControl<string | null | undefined>(undefined),
			submittedIcon: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Localized variant of a text in a particular language. */
	export interface LocalizedText {

		/** The text's BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** Localized string in the language corresponding to `language_code' below. */
		text?: string | null;
	}

	/** Localized variant of a text in a particular language. */
	export interface LocalizedTextFormProperties {

		/** The text's BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,

		/** Localized string in the language corresponding to `language_code' below. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateLocalizedTextFormGroup() {
		return new FormGroup<LocalizedTextFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Disapproval reason of the display name in a specific language. */
	export interface DisplayNameDisapprovalReason {

		/** Disapproval reason. */
		disapprovalReason?: DisplayNameDisapprovalReasonDisapprovalReason | null;

		/** Language of the disapproved display name. */
		languageCode?: string | null;
	}

	/** Disapproval reason of the display name in a specific language. */
	export interface DisplayNameDisapprovalReasonFormProperties {

		/** Disapproval reason. */
		disapprovalReason: FormControl<DisplayNameDisapprovalReasonDisapprovalReason | null | undefined>,

		/** Language of the disapproved display name. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateDisplayNameDisapprovalReasonFormGroup() {
		return new FormGroup<DisplayNameDisapprovalReasonFormProperties>({
			disapprovalReason: new FormControl<DisplayNameDisapprovalReasonDisapprovalReason | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DisplayNameDisapprovalReasonDisapprovalReason { DISAPPROVAL_REASON_UNSPECIFIED = 'DISAPPROVAL_REASON_UNSPECIFIED', PUNCTUATION = 'PUNCTUATION', MARKETING_LANGUAGE = 'MARKETING_LANGUAGE', LANDING_PAGE_NOT_MATCHED = 'LANDING_PAGE_NOT_MATCHED' }

	export enum BrandDisplayNameState { REVIEW_STATE_UNSPECIFIED = 'REVIEW_STATE_UNSPECIFIED', REVIEW_STATE_NEW = 'REVIEW_STATE_NEW', APPROVED = 'APPROVED', REJECTED = 'REJECTED' }


	/** Response message for ReconciliationReportService.CreateReconciliationReport. */
	export interface CreateReconciliationReportResponse {

		/** Issues that were encountered when validating the file. */
		issues?: Array<ReconciliationReportValidationIssue>;

		/** Reconciliation report (Hotel Ads only). Covers the Reconciliation Reports functionality in pre-v3.0 API versions. Lets you see the status, validate, and upload your Commissions reconciliation reports. This only applies if you are in the Google Hotel Ads Commissions Program (GHACP). For more information about working with reconciliation reports in Hotel Center, refer to [Reconciliation reports](//support.google.com/hotelprices/answer/7019060#sending). */
		reconciliationReport?: ReconciliationReport;

		/** The number of commission records that were successfully saved. */
		successfulRecordCount?: number | null;
	}

	/** Response message for ReconciliationReportService.CreateReconciliationReport. */
	export interface CreateReconciliationReportResponseFormProperties {

		/** The number of commission records that were successfully saved. */
		successfulRecordCount: FormControl<number | null | undefined>,
	}
	export function CreateCreateReconciliationReportResponseFormGroup() {
		return new FormGroup<CreateReconciliationReportResponseFormProperties>({
			successfulRecordCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents an issue encountered when validating a reconciliation report. */
	export interface ReconciliationReportValidationIssue {

		/** Text description of the issue, typically including what was seen and why it was invalid. */
		description?: string | null;

		/** Name of the invalid field. If no field name is given, this issue applies to the whole line (or file). */
		fieldName?: string | null;

		/** The line number on which the issue was detected. If this field is 0, the issue applies to the whole file. */
		lineNum?: number | null;
	}

	/** Represents an issue encountered when validating a reconciliation report. */
	export interface ReconciliationReportValidationIssueFormProperties {

		/** Text description of the issue, typically including what was seen and why it was invalid. */
		description: FormControl<string | null | undefined>,

		/** Name of the invalid field. If no field name is given, this issue applies to the whole line (or file). */
		fieldName: FormControl<string | null | undefined>,

		/** The line number on which the issue was detected. If this field is 0, the issue applies to the whole file. */
		lineNum: FormControl<number | null | undefined>,
	}
	export function CreateReconciliationReportValidationIssueFormGroup() {
		return new FormGroup<ReconciliationReportValidationIssueFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			fieldName: new FormControl<string | null | undefined>(undefined),
			lineNum: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Reconciliation report (Hotel Ads only). Covers the Reconciliation Reports functionality in pre-v3.0 API versions. Lets you see the status, validate, and upload your Commissions reconciliation reports. This only applies if you are in the Google Hotel Ads Commissions Program (GHACP). For more information about working with reconciliation reports in Hotel Center, refer to [Reconciliation reports](//support.google.com/hotelprices/answer/7019060#sending). */
	export interface ReconciliationReport {

		/** Required. The contents of the commission report. Report contents must conform to the requirements specified in [Reconciliation reports] (//support.google.com/hotelprices/answer/7019060#creating). */
		contents?: string | null;

		/** Required. Desired filename of the reconciliation report. */
		fileName?: string | null;

		/** Resource name in the format `accounts/{account_id}/reconciliationReports/{datetime}~{filename}`. The value for `{datetime}` must be from 0001-01-01T00:00:00 to 9999-12-31T23:59:59 inclusive. */
		name?: string | null;
	}

	/** Reconciliation report (Hotel Ads only). Covers the Reconciliation Reports functionality in pre-v3.0 API versions. Lets you see the status, validate, and upload your Commissions reconciliation reports. This only applies if you are in the Google Hotel Ads Commissions Program (GHACP). For more information about working with reconciliation reports in Hotel Center, refer to [Reconciliation reports](//support.google.com/hotelprices/answer/7019060#sending). */
	export interface ReconciliationReportFormProperties {

		/** Required. The contents of the commission report. Report contents must conform to the requirements specified in [Reconciliation reports] (//support.google.com/hotelprices/answer/7019060#creating). */
		contents: FormControl<string | null | undefined>,

		/** Required. Desired filename of the reconciliation report. */
		fileName: FormControl<string | null | undefined>,

		/** Resource name in the format `accounts/{account_id}/reconciliationReports/{datetime}~{filename}`. The value for `{datetime}` must be from 0001-01-01T00:00:00 to 9999-12-31T23:59:59 inclusive. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateReconciliationReportFormGroup() {
		return new FormGroup<ReconciliationReportFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details on a data issue in the listing. */
	export interface DataIssueDetail {

		/** The severity of the data issue. */
		dataIssueSeverity?: DataIssueDetailDataIssueSeverity | null;

		/** The type of the data issue. */
		dataIssueType?: DataIssueDetailDataIssueType | null;

		/** Whether or not the issue is self-resolving. If true, the issue is expected to resolve itself. If false or not set, action is needed to resolve the issue. Refer to documentation on the data issue’s type for further information. */
		isSelfResolving?: boolean | null;
	}

	/** Details on a data issue in the listing. */
	export interface DataIssueDetailFormProperties {

		/** The severity of the data issue. */
		dataIssueSeverity: FormControl<DataIssueDetailDataIssueSeverity | null | undefined>,

		/** The type of the data issue. */
		dataIssueType: FormControl<DataIssueDetailDataIssueType | null | undefined>,

		/** Whether or not the issue is self-resolving. If true, the issue is expected to resolve itself. If false or not set, action is needed to resolve the issue. Refer to documentation on the data issue’s type for further information. */
		isSelfResolving: FormControl<boolean | null | undefined>,
	}
	export function CreateDataIssueDetailFormGroup() {
		return new FormGroup<DataIssueDetailFormProperties>({
			dataIssueSeverity: new FormControl<DataIssueDetailDataIssueSeverity | null | undefined>(undefined),
			dataIssueType: new FormControl<DataIssueDetailDataIssueType | null | undefined>(undefined),
			isSelfResolving: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DataIssueDetailDataIssueSeverity { DATA_ISSUE_SEVERITY_UNSPECIFIED = 'DATA_ISSUE_SEVERITY_UNSPECIFIED', ERROR = 'ERROR', WARNING = 'WARNING', INFO = 'INFO' }

	export enum DataIssueDetailDataIssueType { FEED_DATA_ISSUE_UNSPECIFIED = 'FEED_DATA_ISSUE_UNSPECIFIED', FEED_DATA_ISSUE_UNKNOWN = 'FEED_DATA_ISSUE_UNKNOWN', NO_DATA_ISSUE = 'NO_DATA_ISSUE', DUPLICATE_ADDRESS = 'DUPLICATE_ADDRESS', MISSING_PHYSICAL_STREET_ADDRESS = 'MISSING_PHYSICAL_STREET_ADDRESS', MISSING_STREET_NAME = 'MISSING_STREET_NAME', MISSING_STREET_NUMBER = 'MISSING_STREET_NUMBER', MISSING_ADDRESS = 'MISSING_ADDRESS', MISSING_COUNTRY = 'MISSING_COUNTRY', INVALID_POSTAL_CODE = 'INVALID_POSTAL_CODE', INVALID_POSTAL_CODE_SUFFIX = 'INVALID_POSTAL_CODE_SUFFIX', UNEXPECTED_POSTAL_CODE_SUFFIX = 'UNEXPECTED_POSTAL_CODE_SUFFIX', UNEXPECTED_POSTAL_CODE = 'UNEXPECTED_POSTAL_CODE', INVALID_AMENITIES = 'INVALID_AMENITIES', INVALID_EMAIL_ADDRESS = 'INVALID_EMAIL_ADDRESS', DUPLICATE_LATLONG = 'DUPLICATE_LATLONG', LATLONG_INCONSISTENT_WITH_ADDRESS = 'LATLONG_INCONSISTENT_WITH_ADDRESS', MISSING_LATLONG = 'MISSING_LATLONG', COULD_NOT_GEOCODE = 'COULD_NOT_GEOCODE', MISSING_HOTEL_NAME = 'MISSING_HOTEL_NAME', HOTEL_NAME_EMPTY = 'HOTEL_NAME_EMPTY', INVALID_HOTEL_NAME = 'INVALID_HOTEL_NAME', HOTEL_NAME_TOO_LONG = 'HOTEL_NAME_TOO_LONG', PARSE_ERROR_IN_XML = 'PARSE_ERROR_IN_XML', UNEXPECTED_ATTRIBUTE_IN_XML = 'UNEXPECTED_ATTRIBUTE_IN_XML', DUPLICATE_PHONE_NUMBER = 'DUPLICATE_PHONE_NUMBER', MISSING_PHONE_NUMBER = 'MISSING_PHONE_NUMBER', MISSING_VOICE_PHONE_NUMBER = 'MISSING_VOICE_PHONE_NUMBER', INVALID_PHONE_NUMBER_FORMAT = 'INVALID_PHONE_NUMBER_FORMAT', INVALID_PHONE_NUMBER = 'INVALID_PHONE_NUMBER', INVALID_PHONE_NUMBER_COUNTRY_CODE = 'INVALID_PHONE_NUMBER_COUNTRY_CODE', PHONE_NUMBER_TOO_LONG = 'PHONE_NUMBER_TOO_LONG', PHONE_NUMBER_TOO_SHORT = 'PHONE_NUMBER_TOO_SHORT', INVALID_WEBSITE_URL = 'INVALID_WEBSITE_URL', ADWORDS_ATTRIBUTE_TOO_LONG = 'ADWORDS_ATTRIBUTE_TOO_LONG', BRAND_NOT_ALLOWED = 'BRAND_NOT_ALLOWED', FLAGGED_DUE_TO_SUSPICIOUS_METADATA = 'FLAGGED_DUE_TO_SUSPICIOUS_METADATA', NOT_ENOUGH_IMAGES_PROVIDED = 'NOT_ENOUGH_IMAGES_PROVIDED', IMAGE_PROCESSING_IN_PROGRESS = 'IMAGE_PROCESSING_IN_PROGRESS', CANNOT_FETCH_IMAGES = 'CANNOT_FETCH_IMAGES', INCOMPATIBLE_IMAGE_SIZE_OR_LOW_QUALITY = 'INCOMPATIBLE_IMAGE_SIZE_OR_LOW_QUALITY', MISSING_LANG_IN_RAW_LISTING = 'MISSING_LANG_IN_RAW_LISTING', IS_HOTEL = 'IS_HOTEL', MISSING_REQ_ATTR = 'MISSING_REQ_ATTR', MISSING_NAME = 'MISSING_NAME', MISSING_LANG_IN_NAME = 'MISSING_LANG_IN_NAME', VR_NAME_TOO_LONG = 'VR_NAME_TOO_LONG', TEST_PROPERTY = 'TEST_PROPERTY', NON_VR_ACCOMMODATION_TYPE_BASED_ON_LISTING_NAME = 'NON_VR_ACCOMMODATION_TYPE_BASED_ON_LISTING_NAME', BRAND_NAME_TOO_LONG = 'BRAND_NAME_TOO_LONG', MISSING_BRAND_NAME = 'MISSING_BRAND_NAME', INVALID_REVIEW_RATING = 'INVALID_REVIEW_RATING', INVALID_CHECKIN_FORMAT = 'INVALID_CHECKIN_FORMAT', INVALID_CHECKOUT_FORMAT = 'INVALID_CHECKOUT_FORMAT' }


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


	/** **DEPRECATED:** Use `PropertyPerformanceResult` with `PropertyPerformanceReportService` instead. Represents a result from querying for free booking link stats for an account. */
	export interface FreeBookingLinksResult {

		/** The total number of clicks that were recorded for this result. */
		clickCount?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		date?: Date;

		/** The user’s device type. Only present if `deviceType` is specified in `aggregateBy` in the request. */
		deviceType?: FreeBookingLinksResultDeviceType | null;

		/** Partner's hotel name. Only present if `partnerHotelDisplayName` is specified in `aggregateBy` in the request. */
		partnerHotelDisplayName?: string | null;

		/** Partner's hotel ID. Only present if `partnerHotelId` is specified in `aggregateBy` in the request. */
		partnerHotelId?: string | null;

		/** ISO 3116 region code of the country/region of the user. Only present if `userRegionCode` is specified in `aggregateBy` in the request */
		userRegionCode?: string | null;
	}

	/** **DEPRECATED:** Use `PropertyPerformanceResult` with `PropertyPerformanceReportService` instead. Represents a result from querying for free booking link stats for an account. */
	export interface FreeBookingLinksResultFormProperties {

		/** The total number of clicks that were recorded for this result. */
		clickCount: FormControl<string | null | undefined>,

		/** The user’s device type. Only present if `deviceType` is specified in `aggregateBy` in the request. */
		deviceType: FormControl<FreeBookingLinksResultDeviceType | null | undefined>,

		/** Partner's hotel name. Only present if `partnerHotelDisplayName` is specified in `aggregateBy` in the request. */
		partnerHotelDisplayName: FormControl<string | null | undefined>,

		/** Partner's hotel ID. Only present if `partnerHotelId` is specified in `aggregateBy` in the request. */
		partnerHotelId: FormControl<string | null | undefined>,

		/** ISO 3116 region code of the country/region of the user. Only present if `userRegionCode` is specified in `aggregateBy` in the request */
		userRegionCode: FormControl<string | null | undefined>,
	}
	export function CreateFreeBookingLinksResultFormGroup() {
		return new FormGroup<FreeBookingLinksResultFormProperties>({
			clickCount: new FormControl<string | null | undefined>(undefined),
			deviceType: new FormControl<FreeBookingLinksResultDeviceType | null | undefined>(undefined),
			partnerHotelDisplayName: new FormControl<string | null | undefined>(undefined),
			partnerHotelId: new FormControl<string | null | undefined>(undefined),
			userRegionCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FreeBookingLinksResultDeviceType { DEVICE_UNSPECIFIED = 'DEVICE_UNSPECIFIED', DEVICE_UNKNOWN = 'DEVICE_UNKNOWN', DESKTOP = 'DESKTOP', MOBILE = 'MOBILE', TABLET = 'TABLET' }


	/** Hotel price for a given itinerary. */
	export interface HotelPricePerItinerary {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		checkinDate?: Date;

		/** Currency for `price`, `taxes`, and `fees`. */
		currencyCode?: string | null;

		/** Fees for this itinerary. */
		fees?: number | null;

		/** Number of nights for the itinerary. */
		lengthOfStayDays?: number | null;

		/** Hotel price for this itinerary. */
		price?: number | null;

		/** Taxes for this itinerary. */
		taxes?: number | null;

		/** Update timestamp for this hotel price. */
		updateTime?: string | null;
	}

	/** Hotel price for a given itinerary. */
	export interface HotelPricePerItineraryFormProperties {

		/** Currency for `price`, `taxes`, and `fees`. */
		currencyCode: FormControl<string | null | undefined>,

		/** Fees for this itinerary. */
		fees: FormControl<number | null | undefined>,

		/** Number of nights for the itinerary. */
		lengthOfStayDays: FormControl<number | null | undefined>,

		/** Hotel price for this itinerary. */
		price: FormControl<number | null | undefined>,

		/** Taxes for this itinerary. */
		taxes: FormControl<number | null | undefined>,

		/** Update timestamp for this hotel price. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateHotelPricePerItineraryFormGroup() {
		return new FormGroup<HotelPricePerItineraryFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			fees: new FormControl<number | null | undefined>(undefined),
			lengthOfStayDays: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			taxes: new FormControl<number | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A hotel view. */
	export interface HotelView {

		/** The type and severity of each data quality issue in the feed. If your feed contains data issues, update the feed and resubmit it. For more information, refer to this article. */
		dataIssueDetail?: Array<DataIssueDetail>;

		/** DEPRECATED. Indicates that the hotel has data quality issues. The value of this field indicates the type of error. This has been replaced with the data_issue_detail field. If your feed contains data issues, update the feed and resubmit it. For more information, refer to this article. */
		dataIssues?: Array<DataIssueDetailDataIssueType>;

		/** The Google Maps identifier for the hotel. */
		googleClusterId?: string | null;

		/** Google's hotel name. */
		googleHotelDisplayName?: string | null;

		/** Google's canonical ID for the hotel. */
		googleHotelId?: string | null;

		/** Optional. Whether the hotel appears in Google's hotel booking links. Declaration & behavior to get detection of presence/absence in JSON conversion. */
		liveOnGoogle?: boolean | null;

		/** Current matching status of the hotel. */
		matchStatus?: HotelViewMatchStatus | null;

		/** Other hotels with which the hotel is overclustered. If your feed contains overclustered hotels, update the feed and resubmit it. To do this, you can use the manual match tool. */
		overclusteredPartnerHotelIds?: Array<string>;

		/** Partner's hotel name. */
		partnerHotelDisplayName?: string | null;

		/** The unique ID of the hotel that the partner provides in their Hotel List Feed. */
		partnerHotelId?: string | null;

		/** The primary hotel in the overclustered set. */
		primaryOverclusteredPartnerHotelId?: string | null;

		/** Optional. A URL to the property on Google. Only available for properties that are listed. */
		propertyDetails?: string | null;
	}

	/** A hotel view. */
	export interface HotelViewFormProperties {

		/** The Google Maps identifier for the hotel. */
		googleClusterId: FormControl<string | null | undefined>,

		/** Google's hotel name. */
		googleHotelDisplayName: FormControl<string | null | undefined>,

		/** Google's canonical ID for the hotel. */
		googleHotelId: FormControl<string | null | undefined>,

		/** Optional. Whether the hotel appears in Google's hotel booking links. Declaration & behavior to get detection of presence/absence in JSON conversion. */
		liveOnGoogle: FormControl<boolean | null | undefined>,

		/** Current matching status of the hotel. */
		matchStatus: FormControl<HotelViewMatchStatus | null | undefined>,

		/** Partner's hotel name. */
		partnerHotelDisplayName: FormControl<string | null | undefined>,

		/** The unique ID of the hotel that the partner provides in their Hotel List Feed. */
		partnerHotelId: FormControl<string | null | undefined>,

		/** The primary hotel in the overclustered set. */
		primaryOverclusteredPartnerHotelId: FormControl<string | null | undefined>,

		/** Optional. A URL to the property on Google. Only available for properties that are listed. */
		propertyDetails: FormControl<string | null | undefined>,
	}
	export function CreateHotelViewFormGroup() {
		return new FormGroup<HotelViewFormProperties>({
			googleClusterId: new FormControl<string | null | undefined>(undefined),
			googleHotelDisplayName: new FormControl<string | null | undefined>(undefined),
			googleHotelId: new FormControl<string | null | undefined>(undefined),
			liveOnGoogle: new FormControl<boolean | null | undefined>(undefined),
			matchStatus: new FormControl<HotelViewMatchStatus | null | undefined>(undefined),
			partnerHotelDisplayName: new FormControl<string | null | undefined>(undefined),
			partnerHotelId: new FormControl<string | null | undefined>(undefined),
			primaryOverclusteredPartnerHotelId: new FormControl<string | null | undefined>(undefined),
			propertyDetails: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HotelViewMatchStatus { MATCH_STATUS_UNSPECIFIED = 'MATCH_STATUS_UNSPECIFIED', MATCH_STATUS_UNKNOWN = 'MATCH_STATUS_UNKNOWN', NOT_MATCHED = 'NOT_MATCHED', MATCHED = 'MATCHED', MAP_OVERLAP = 'MAP_OVERLAP' }


	/** Information about a partner's icon. */
	export interface Icon {

		/** Output only. The icon's disapproval reason(s). Only applies to icons with `REJECTED` state. */
		disapprovalReasons?: Array<string>;

		/** Output only. The approved icon's Google-hosted URI. Only applies to icons with `APPROVED` state. */
		iconUri?: string | null;

		/** Required. Input only. The icon contents, which must be in PNG format, or convertible to PNG. */
		imageData?: string | null;

		/** Required. Output only. The resource name for the icon in the format `accounts/{account_id}/icons/{icon_id}`. Google generates the `icon_id` during the `create` operation. Use the `icon_id` to associate the icon with a brand using the [accounts.brands](/hotels/hotel-prices/api-reference/rest/v3/accounts.brands#resource:-brand) API. */
		name?: string | null;

		/** Optional. Value for tracking the icon. It could be the primary key to your icon in your system, or the icon's filename. Google does not use this value. */
		reference?: string | null;

		/** Output only. The icon's current state. */
		state?: IconState | null;
	}

	/** Information about a partner's icon. */
	export interface IconFormProperties {

		/** Output only. The approved icon's Google-hosted URI. Only applies to icons with `APPROVED` state. */
		iconUri: FormControl<string | null | undefined>,

		/** Required. Input only. The icon contents, which must be in PNG format, or convertible to PNG. */
		imageData: FormControl<string | null | undefined>,

		/** Required. Output only. The resource name for the icon in the format `accounts/{account_id}/icons/{icon_id}`. Google generates the `icon_id` during the `create` operation. Use the `icon_id` to associate the icon with a brand using the [accounts.brands](/hotels/hotel-prices/api-reference/rest/v3/accounts.brands#resource:-brand) API. */
		name: FormControl<string | null | undefined>,

		/** Optional. Value for tracking the icon. It could be the primary key to your icon in your system, or the icon's filename. Google does not use this value. */
		reference: FormControl<string | null | undefined>,

		/** Output only. The icon's current state. */
		state: FormControl<IconState | null | undefined>,
	}
	export function CreateIconFormGroup() {
		return new FormGroup<IconFormProperties>({
			iconUri: new FormControl<string | null | undefined>(undefined),
			imageData: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<IconState | null | undefined>(undefined),
		});

	}

	export enum IconState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', NEW = 'NEW', APPROVED = 'APPROVED', REJECTED = 'REJECTED' }


	/** A single image in a VR Listing. Title and gallery URL are stored per locale. NEXT ID: 4 */
	export interface Image {

		/** URL that is deeplink to the image in a gallery (or a webpage). */
		galleryUri?: Array<LocalizedText>;

		/** Title of the image. */
		title?: Array<LocalizedText>;

		/** URL that points to the binary image content directly. */
		uri?: string | null;
	}

	/** A single image in a VR Listing. Title and gallery URL are stored per locale. NEXT ID: 4 */
	export interface ImageFormProperties {

		/** URL that points to the binary image content directly. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Key of a result. */
	export interface Key {

		/** The number of days in advance the user wants to book the itinerary. If `advanceBookingWindow` is not a value of the `aggregateBy` parameter in the request call, then the `advanceBookingWindow` field is not returned in the `Key`. */
		advanceBookingWindow?: number | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		checkinDate?: Date;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		date?: Date;

		/** The user’s device type. If `deviceType` is not a value of the `aggregateBy` parameter in the request call, then the `deviceType` field is not returned in the `Key`. */
		deviceType?: FreeBookingLinksResultDeviceType | null;

		/** CLDR region code of the country/region of the hotel. If `hotelRegionCode` is not a value of the `aggregateBy` parameter in the request call, then the `hotelRegionCode` field is not returned in the `Key`. */
		hotelRegionCode?: string | null;

		/** The number of nights for the itinerary. If `lengthOfStayDays` is not a value of the `aggregateBy` parameter in the request call, then the `lengthOfStayDays` field is not returned in the `Key`. */
		lengthOfStayDays?: number | null;

		/** The total occupancy of the itinerary. If `occupancy` is not a value of the `aggregateBy` parameter in the request call, then the `occupancy` field is not returned in the `Key`. */
		occupancy?: number | null;

		/** Partner's hotel ID. If `partnerHotelId` is not a value of the `aggregateBy` parameter in the request call, then the `partnerHotelId` field is not returned in the `Key`. */
		partnerHotelId?: string | null;

		/** ISO 3116 region code of the country/region of the user. If `userRegionCode` is not a value of the `aggregateBy` parameter in the request call, then the `userRegionCode` field is not returned in the `Key`. */
		userRegionCode?: string | null;
	}

	/** Key of a result. */
	export interface KeyFormProperties {

		/** The number of days in advance the user wants to book the itinerary. If `advanceBookingWindow` is not a value of the `aggregateBy` parameter in the request call, then the `advanceBookingWindow` field is not returned in the `Key`. */
		advanceBookingWindow: FormControl<number | null | undefined>,

		/** The user’s device type. If `deviceType` is not a value of the `aggregateBy` parameter in the request call, then the `deviceType` field is not returned in the `Key`. */
		deviceType: FormControl<FreeBookingLinksResultDeviceType | null | undefined>,

		/** CLDR region code of the country/region of the hotel. If `hotelRegionCode` is not a value of the `aggregateBy` parameter in the request call, then the `hotelRegionCode` field is not returned in the `Key`. */
		hotelRegionCode: FormControl<string | null | undefined>,

		/** The number of nights for the itinerary. If `lengthOfStayDays` is not a value of the `aggregateBy` parameter in the request call, then the `lengthOfStayDays` field is not returned in the `Key`. */
		lengthOfStayDays: FormControl<number | null | undefined>,

		/** The total occupancy of the itinerary. If `occupancy` is not a value of the `aggregateBy` parameter in the request call, then the `occupancy` field is not returned in the `Key`. */
		occupancy: FormControl<number | null | undefined>,

		/** Partner's hotel ID. If `partnerHotelId` is not a value of the `aggregateBy` parameter in the request call, then the `partnerHotelId` field is not returned in the `Key`. */
		partnerHotelId: FormControl<string | null | undefined>,

		/** ISO 3116 region code of the country/region of the user. If `userRegionCode` is not a value of the `aggregateBy` parameter in the request call, then the `userRegionCode` field is not returned in the `Key`. */
		userRegionCode: FormControl<string | null | undefined>,
	}
	export function CreateKeyFormGroup() {
		return new FormGroup<KeyFormProperties>({
			advanceBookingWindow: new FormControl<number | null | undefined>(undefined),
			deviceType: new FormControl<FreeBookingLinksResultDeviceType | null | undefined>(undefined),
			hotelRegionCode: new FormControl<string | null | undefined>(undefined),
			lengthOfStayDays: new FormControl<number | null | undefined>(undefined),
			occupancy: new FormControl<number | null | undefined>(undefined),
			partnerHotelId: new FormControl<string | null | undefined>(undefined),
			userRegionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface LatLng {

		/** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
		latitude?: number | null;

		/** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
		longitude?: number | null;
	}

	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface LatLngFormProperties {

		/** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
		latitude: FormControl<number | null | undefined>,

		/** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateLatLngFormGroup() {
		return new FormGroup<LatLngFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for AccountLinkService.ListAccountLinks. */
	export interface ListAccountLinksResponse {

		/** A list of all account links associated with the Hotel Center account being queried. */
		accountLinks?: Array<AccountLink>;
	}

	/** Response message for AccountLinkService.ListAccountLinks. */
	export interface ListAccountLinksResponseFormProperties {
	}
	export function CreateListAccountLinksResponseFormGroup() {
		return new FormGroup<ListAccountLinksResponseFormProperties>({
		});

	}


	/** Response message for BrandService.ListBrands. */
	export interface ListBrandsResponse {

		/** A list of all brands associated with the Hotel Center account being queried. */
		brands?: Array<Brand>;
	}

	/** Response message for BrandService.ListBrands. */
	export interface ListBrandsResponseFormProperties {
	}
	export function CreateListBrandsResponseFormGroup() {
		return new FormGroup<ListBrandsResponseFormProperties>({
		});

	}


	/** Response message for HotelViewService.ListHotelViews. */
	export interface ListHotelViewsResponse {

		/** The list of rows that match the query. */
		hotelViews?: Array<HotelView>;

		/** Pagination token used to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for HotelViewService.ListHotelViews. */
	export interface ListHotelViewsResponseFormProperties {

		/** Pagination token used to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListHotelViewsResponseFormGroup() {
		return new FormGroup<ListHotelViewsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for IconService.ListIcons. */
	export interface ListIconsResponse {

		/** A list of all icons associated with the queried partner account. */
		icons?: Array<Icon>;
	}

	/** Response message for IconService.ListIcons. */
	export interface ListIconsResponseFormProperties {
	}
	export function CreateListIconsResponseFormGroup() {
		return new FormGroup<ListIconsResponseFormProperties>({
		});

	}


	/** Response message for PriceAccuracyViewService.ListPriceAccuracyViews. */
	export interface ListPriceAccuracyViewsResponse {

		/** The list of rows that match the query. */
		priceAccuracyViews?: Array<PriceAccuracyView>;
	}

	/** Response message for PriceAccuracyViewService.ListPriceAccuracyViews. */
	export interface ListPriceAccuracyViewsResponseFormProperties {
	}
	export function CreateListPriceAccuracyViewsResponseFormGroup() {
		return new FormGroup<ListPriceAccuracyViewsResponseFormProperties>({
		});

	}


	/** A price accuracy view. Covers the price accuracy reports functionality in pre-v3.0 API versions. For more information, refer to [Price Accuracy report](https://support.google.com/hotelprices/answer/6318506). */
	export interface PriceAccuracyView {

		/** Resource name should be in the format `accounts/{account_id}/priceAccuracyViews/{report_date}`. */
		name?: string | null;

		/** The list of rows that match the query. */
		results?: Array<PriceAccuracyRow>;
	}

	/** A price accuracy view. Covers the price accuracy reports functionality in pre-v3.0 API versions. For more information, refer to [Price Accuracy report](https://support.google.com/hotelprices/answer/6318506). */
	export interface PriceAccuracyViewFormProperties {

		/** Resource name should be in the format `accounts/{account_id}/priceAccuracyViews/{report_date}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePriceAccuracyViewFormGroup() {
		return new FormGroup<PriceAccuracyViewFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A price accuracy row. */
	export interface PriceAccuracyRow {

		/** The number of adults in the occupancy details of the validation query. */
		adultOccupancy?: number | null;

		/** True if this row affects the placement of a price. This field has been renamed to “Affects placement” in Hotel Center. */
		affectsScore?: boolean | null;

		/** A price record. */
		cachedPriceRecord?: PriceRecord;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		checkinDate?: Date;

		/** The number of children in the occupancy details of the validation query. */
		childOccupancy?: number | null;

		/** Time at which an incorrect price is updated to a correct price. */
		correctionTime?: string | null;

		/** The user's device type. */
		deviceType?: FreeBookingLinksResultDeviceType | null;

		/** A price record. */
		fetchedPriceRecord?: PriceRecord;

		/** The domain of the final page from which prices are read. */
		finalDomain?: string | null;

		/** Partner-defined hotel ID. */
		hotel?: string | null;

		/** The country of the hotel (based on address). */
		hotelCountryCode?: string | null;

		/** Length of stay. */
		lengthOfStayDays?: number | null;

		/** The reason why the fetched price didn't match the cached price. */
		mismatchReason?: PriceAccuracyRowMismatchReason | null;

		/** The rate rule of the advertised price for non-public rates. */
		rateRuleId?: string | null;

		/** Source of the price accuracy signal. */
		signalSource?: PriceAccuracyRowSignalSource | null;

		/** Initial URL visited on the partner website. */
		url?: string | null;

		/** The user's region. */
		userRegionCode?: string | null;
	}

	/** A price accuracy row. */
	export interface PriceAccuracyRowFormProperties {

		/** The number of adults in the occupancy details of the validation query. */
		adultOccupancy: FormControl<number | null | undefined>,

		/** True if this row affects the placement of a price. This field has been renamed to “Affects placement” in Hotel Center. */
		affectsScore: FormControl<boolean | null | undefined>,

		/** The number of children in the occupancy details of the validation query. */
		childOccupancy: FormControl<number | null | undefined>,

		/** Time at which an incorrect price is updated to a correct price. */
		correctionTime: FormControl<string | null | undefined>,

		/** The user's device type. */
		deviceType: FormControl<FreeBookingLinksResultDeviceType | null | undefined>,

		/** The domain of the final page from which prices are read. */
		finalDomain: FormControl<string | null | undefined>,

		/** Partner-defined hotel ID. */
		hotel: FormControl<string | null | undefined>,

		/** The country of the hotel (based on address). */
		hotelCountryCode: FormControl<string | null | undefined>,

		/** Length of stay. */
		lengthOfStayDays: FormControl<number | null | undefined>,

		/** The reason why the fetched price didn't match the cached price. */
		mismatchReason: FormControl<PriceAccuracyRowMismatchReason | null | undefined>,

		/** The rate rule of the advertised price for non-public rates. */
		rateRuleId: FormControl<string | null | undefined>,

		/** Source of the price accuracy signal. */
		signalSource: FormControl<PriceAccuracyRowSignalSource | null | undefined>,

		/** Initial URL visited on the partner website. */
		url: FormControl<string | null | undefined>,

		/** The user's region. */
		userRegionCode: FormControl<string | null | undefined>,
	}
	export function CreatePriceAccuracyRowFormGroup() {
		return new FormGroup<PriceAccuracyRowFormProperties>({
			adultOccupancy: new FormControl<number | null | undefined>(undefined),
			affectsScore: new FormControl<boolean | null | undefined>(undefined),
			childOccupancy: new FormControl<number | null | undefined>(undefined),
			correctionTime: new FormControl<string | null | undefined>(undefined),
			deviceType: new FormControl<FreeBookingLinksResultDeviceType | null | undefined>(undefined),
			finalDomain: new FormControl<string | null | undefined>(undefined),
			hotel: new FormControl<string | null | undefined>(undefined),
			hotelCountryCode: new FormControl<string | null | undefined>(undefined),
			lengthOfStayDays: new FormControl<number | null | undefined>(undefined),
			mismatchReason: new FormControl<PriceAccuracyRowMismatchReason | null | undefined>(undefined),
			rateRuleId: new FormControl<string | null | undefined>(undefined),
			signalSource: new FormControl<PriceAccuracyRowSignalSource | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			userRegionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A price record. */
	export interface PriceRecord {

		/** Base price. */
		basePrice?: number | null;

		/** ISO 4217 currency code. */
		currencyCode?: string | null;

		/** Taxes and fees. */
		taxesAndFees?: number | null;

		/** Timestamp of this price record. */
		time?: string | null;
	}

	/** A price record. */
	export interface PriceRecordFormProperties {

		/** Base price. */
		basePrice: FormControl<number | null | undefined>,

		/** ISO 4217 currency code. */
		currencyCode: FormControl<string | null | undefined>,

		/** Taxes and fees. */
		taxesAndFees: FormControl<number | null | undefined>,

		/** Timestamp of this price record. */
		time: FormControl<string | null | undefined>,
	}
	export function CreatePriceRecordFormGroup() {
		return new FormGroup<PriceRecordFormProperties>({
			basePrice: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			taxesAndFees: new FormControl<number | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PriceAccuracyRowMismatchReason { MISMATCH_REASON_UNSPECIFIED = 'MISMATCH_REASON_UNSPECIFIED', MISMATCH_REASON_UNKNOWN = 'MISMATCH_REASON_UNKNOWN', TAX_MISMATCH = 'TAX_MISMATCH', ROOM_UNAVAILABLE = 'ROOM_UNAVAILABLE', SITE_ERROR = 'SITE_ERROR', PRICE_FEED_DELAYED = 'PRICE_FEED_DELAYED', DISCOUNT_MISSING = 'DISCOUNT_MISSING', INCORRECT_DISCOUNT_VALUE = 'INCORRECT_DISCOUNT_VALUE', WRONG_ITINERARY = 'WRONG_ITINERARY' }

	export enum PriceAccuracyRowSignalSource { SIGNAL_SOURCE_UNSPECIFIED = 'SIGNAL_SOURCE_UNSPECIFIED', SIGNAL_SOURCE_UNKNOWN = 'SIGNAL_SOURCE_UNKNOWN', FETCHED = 'FETCHED', PIXEL = 'PIXEL' }


	/** Response message for PriceCoverageViewService.ListPriceCoverageViews. */
	export interface ListPriceCoverageViewsResponse {

		/** Hotel price coverage stats. */
		priceCoverageViews?: Array<PriceCoverageView>;
	}

	/** Response message for PriceCoverageViewService.ListPriceCoverageViews. */
	export interface ListPriceCoverageViewsResponseFormProperties {
	}
	export function CreateListPriceCoverageViewsResponseFormGroup() {
		return new FormGroup<ListPriceCoverageViewsResponseFormProperties>({
		});

	}


	/** A price coverage view. Covers the `price_coverage_stats` Scorecard functionality in pre-v3.0 API versions. For more information, refer to Price Coverage for Push and Hint partners. */
	export interface PriceCoverageView {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		calculationDate?: Date;

		/** The total number of properties that have prices for the given itineraries. */
		matchedPropertyCount?: number | null;

		/** The ratio between the number of hotels which have at least one price for the calculation period and `matched_property_count`. */
		priceCoverageBinaryPercent?: number | null;

		/** Price coverage stats for combinations of advance booking window and length of stay ranges. */
		priceCoverageBuckets?: Array<PriceCoverageBucket>;

		/** The overall price coverage for an account. This value is the ratio between the number of hotel prices for the calculation booking window and length of stay range divided by the number of all possible prices, which is `matched_property_count` times 330 (for advance book window) times 30 (for length of stay). */
		priceCoveragePercent?: number | null;
	}

	/** A price coverage view. Covers the `price_coverage_stats` Scorecard functionality in pre-v3.0 API versions. For more information, refer to Price Coverage for Push and Hint partners. */
	export interface PriceCoverageViewFormProperties {

		/** The total number of properties that have prices for the given itineraries. */
		matchedPropertyCount: FormControl<number | null | undefined>,

		/** The ratio between the number of hotels which have at least one price for the calculation period and `matched_property_count`. */
		priceCoverageBinaryPercent: FormControl<number | null | undefined>,

		/** The overall price coverage for an account. This value is the ratio between the number of hotel prices for the calculation booking window and length of stay range divided by the number of all possible prices, which is `matched_property_count` times 330 (for advance book window) times 30 (for length of stay). */
		priceCoveragePercent: FormControl<number | null | undefined>,
	}
	export function CreatePriceCoverageViewFormGroup() {
		return new FormGroup<PriceCoverageViewFormProperties>({
			matchedPropertyCount: new FormControl<number | null | undefined>(undefined),
			priceCoverageBinaryPercent: new FormControl<number | null | undefined>(undefined),
			priceCoveragePercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Coverage stats for one combination of advance booking window and length of stay. */
	export interface PriceCoverageBucket {

		/** Advance booking window range. */
		advanceBookingWindowRange?: PriceCoverageBucketAdvanceBookingWindowRange | null;

		/** Number of prices for this advance booking window bucket and length of stay bucket. */
		availablePriceCount?: string | null;

		/** Length of stay range. */
		lengthOfStayRange?: PriceCoverageBucketLengthOfStayRange | null;

		/** The percent of itineraries for which you have coverage for this advance booking window bucket and length of stay bucket. */
		priceCoveragePercent?: number | null;
	}

	/** Coverage stats for one combination of advance booking window and length of stay. */
	export interface PriceCoverageBucketFormProperties {

		/** Advance booking window range. */
		advanceBookingWindowRange: FormControl<PriceCoverageBucketAdvanceBookingWindowRange | null | undefined>,

		/** Number of prices for this advance booking window bucket and length of stay bucket. */
		availablePriceCount: FormControl<string | null | undefined>,

		/** Length of stay range. */
		lengthOfStayRange: FormControl<PriceCoverageBucketLengthOfStayRange | null | undefined>,

		/** The percent of itineraries for which you have coverage for this advance booking window bucket and length of stay bucket. */
		priceCoveragePercent: FormControl<number | null | undefined>,
	}
	export function CreatePriceCoverageBucketFormGroup() {
		return new FormGroup<PriceCoverageBucketFormProperties>({
			advanceBookingWindowRange: new FormControl<PriceCoverageBucketAdvanceBookingWindowRange | null | undefined>(undefined),
			availablePriceCount: new FormControl<string | null | undefined>(undefined),
			lengthOfStayRange: new FormControl<PriceCoverageBucketLengthOfStayRange | null | undefined>(undefined),
			priceCoveragePercent: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PriceCoverageBucketAdvanceBookingWindowRange { ADVANCE_BOOKING_WINDOW_RANGE_UNSPECIFIED = 'ADVANCE_BOOKING_WINDOW_RANGE_UNSPECIFIED', ADVANCE_BOOKING_WINDOW_RANGE_UNKNOWN = 'ADVANCE_BOOKING_WINDOW_RANGE_UNKNOWN', DAYS_0_TO_30 = 'DAYS_0_TO_30', DAYS_31_TO_60 = 'DAYS_31_TO_60', DAYS_61_TO_90 = 'DAYS_61_TO_90', DAYS_91_TO_120 = 'DAYS_91_TO_120', DAYS_121_TO_150 = 'DAYS_121_TO_150', DAYS_151_TO_180 = 'DAYS_151_TO_180', DAYS_181_TO_210 = 'DAYS_181_TO_210', DAYS_211_TO_240 = 'DAYS_211_TO_240', DAYS_241_TO_270 = 'DAYS_241_TO_270', DAYS_271_TO_300 = 'DAYS_271_TO_300', DAYS_301_TO_330 = 'DAYS_301_TO_330' }

	export enum PriceCoverageBucketLengthOfStayRange { LENGTH_OF_STAY_RANGE_UNSPECIFIED = 'LENGTH_OF_STAY_RANGE_UNSPECIFIED', LENGTH_OF_STAY_RANGE_UNKNOWN = 'LENGTH_OF_STAY_RANGE_UNKNOWN', LENGTH_OF_STAY_1_TO_7 = 'LENGTH_OF_STAY_1_TO_7', LENGTH_OF_STAY_8_TO_14 = 'LENGTH_OF_STAY_8_TO_14', LENGTH_OF_STAY_15_TO_30 = 'LENGTH_OF_STAY_15_TO_30' }


	/** Response message for ReconciliationReportService.ListReconciliationReports. */
	export interface ListReconciliationReportsResponse {

		/** The list of names of reconciliation reports. Note that the `contents` and `fileName` fields of each `ReconciliationReport` object are not returned by this call. */
		reconciliationReports?: Array<ReconciliationReport>;
	}

	/** Response message for ReconciliationReportService.ListReconciliationReports. */
	export interface ListReconciliationReportsResponseFormProperties {
	}
	export function CreateListReconciliationReportsResponseFormGroup() {
		return new FormGroup<ListReconciliationReportsResponseFormProperties>({
		});

	}


	/** Missed participation count broken down by reason. */
	export interface MissedParticipationCountDetails {

		/** The total number of missed participations due to one or more of your hotels being suspended due to price accuracy violations. */
		hotelSuspendedCount?: string | null;

		/** The total number of missed participation due to the hotel/itinerary combination being unavailable, or the traveler was ineligible for the rates. To participate in these auctions, you may need to provide more pricing information. */
		noAvailabilityCount?: string | null;

		/** No landing page matched the user. */
		noLandingPageCount?: string | null;

		/** The total number of missed participations due to a price not being offered for the requested itinerary. */
		noPriceCount?: string | null;

		/** The reasons that contributed to the no price count and the total count for each reason. */
		noPriceCountDetails?: NoPriceCountDetails;

		/** The total number of missed participation due to one or more of your hotels not specifying taxes and fees separately. */
		noTaxBreakdownCount?: string | null;

		/** Hotel did not participate for an unknown reason. */
		otherReasonCount?: string | null;

		/** The total number of missed participations due to either a price not being present in Google's cache or failing to successfully respond to live pricing. Comprised of the following: * Bandwidth depleted * Cache rate missing * Itinerary blocked * Live pricing not set up * Live pricing timeout * Live pricing error */
		priceMissingCount?: string | null;

		/** The reasons that contributed to the price missing count and the total count for each reason. */
		priceMissingCountDetails?: PriceMissingCountDetails;

		/** The total number of missed participation due to an issue with the accuracy of the price provided for the itinerary. Comprised of the following: * Hotel suspended * Price unusually high * Price unusually low * Taxes and feeds missing */
		priceProblemCount?: string | null;

		/** The reasons that contributed to the price problem count and the total count for each reason. */
		priceProblemCountDetails?: PriceProblemCountDetails;

		/** The total number of missed participation due to price listed as unavailable (-1) for the requested itinerary. Comprised of the following: * Price unavailable * Participation not likely * Other */
		priceUnavailableCount?: string | null;

		/** The reasons that contributed to the price unavailable count and the total count for each reason. */
		priceUnavailableCountDetails?: PriceUnavailableCountDetails;
	}

	/** Missed participation count broken down by reason. */
	export interface MissedParticipationCountDetailsFormProperties {

		/** The total number of missed participations due to one or more of your hotels being suspended due to price accuracy violations. */
		hotelSuspendedCount: FormControl<string | null | undefined>,

		/** The total number of missed participation due to the hotel/itinerary combination being unavailable, or the traveler was ineligible for the rates. To participate in these auctions, you may need to provide more pricing information. */
		noAvailabilityCount: FormControl<string | null | undefined>,

		/** No landing page matched the user. */
		noLandingPageCount: FormControl<string | null | undefined>,

		/** The total number of missed participations due to a price not being offered for the requested itinerary. */
		noPriceCount: FormControl<string | null | undefined>,

		/** The total number of missed participation due to one or more of your hotels not specifying taxes and fees separately. */
		noTaxBreakdownCount: FormControl<string | null | undefined>,

		/** Hotel did not participate for an unknown reason. */
		otherReasonCount: FormControl<string | null | undefined>,

		/** The total number of missed participations due to either a price not being present in Google's cache or failing to successfully respond to live pricing. Comprised of the following: * Bandwidth depleted * Cache rate missing * Itinerary blocked * Live pricing not set up * Live pricing timeout * Live pricing error */
		priceMissingCount: FormControl<string | null | undefined>,

		/** The total number of missed participation due to an issue with the accuracy of the price provided for the itinerary. Comprised of the following: * Hotel suspended * Price unusually high * Price unusually low * Taxes and feeds missing */
		priceProblemCount: FormControl<string | null | undefined>,

		/** The total number of missed participation due to price listed as unavailable (-1) for the requested itinerary. Comprised of the following: * Price unavailable * Participation not likely * Other */
		priceUnavailableCount: FormControl<string | null | undefined>,
	}
	export function CreateMissedParticipationCountDetailsFormGroup() {
		return new FormGroup<MissedParticipationCountDetailsFormProperties>({
			hotelSuspendedCount: new FormControl<string | null | undefined>(undefined),
			noAvailabilityCount: new FormControl<string | null | undefined>(undefined),
			noLandingPageCount: new FormControl<string | null | undefined>(undefined),
			noPriceCount: new FormControl<string | null | undefined>(undefined),
			noTaxBreakdownCount: new FormControl<string | null | undefined>(undefined),
			otherReasonCount: new FormControl<string | null | undefined>(undefined),
			priceMissingCount: new FormControl<string | null | undefined>(undefined),
			priceProblemCount: new FormControl<string | null | undefined>(undefined),
			priceUnavailableCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The reasons that contributed to the no price count and the total count for each reason. */
	export interface NoPriceCountDetails {

		/** The total number of missed participation due to live pricing not being triggered for any of the following reasons: * You didn't have live pricing configured for these searches. * You restricted Google from accessing the hotel itinerary in question. */
		livePricingConfigIssueCount?: string | null;

		/** The total number of missed participation due to live pricing being unavailable. Live pricing will not be triggered for certain default itineraries or UIs. In this scenario, partners will need a cached price to participate. */
		livePricingNotAvailableCount?: string | null;

		/** The total number of missed participation due to live pricing not being triggered for any of the following reasons: * You didn't set a bid. * You didn't have a valid landing page. * There weren't enough prices in the cache. */
		livePricingNotTriggeredCount?: string | null;

		/** The number of missed participations due to other issues with live pricing. */
		livePricingOtherReasonCount?: string | null;

		/** The total number of missed participation due to technical issues with live pricing for any of the following reasons: * You didn’t respond quickly enough and exceeded the response deadline (around 4000 milliseconds). * You returned an error. * Your response was malformed. */
		livePricingTechnicalIssueCount?: string | null;
	}

	/** The reasons that contributed to the no price count and the total count for each reason. */
	export interface NoPriceCountDetailsFormProperties {

		/** The total number of missed participation due to live pricing not being triggered for any of the following reasons: * You didn't have live pricing configured for these searches. * You restricted Google from accessing the hotel itinerary in question. */
		livePricingConfigIssueCount: FormControl<string | null | undefined>,

		/** The total number of missed participation due to live pricing being unavailable. Live pricing will not be triggered for certain default itineraries or UIs. In this scenario, partners will need a cached price to participate. */
		livePricingNotAvailableCount: FormControl<string | null | undefined>,

		/** The total number of missed participation due to live pricing not being triggered for any of the following reasons: * You didn't set a bid. * You didn't have a valid landing page. * There weren't enough prices in the cache. */
		livePricingNotTriggeredCount: FormControl<string | null | undefined>,

		/** The number of missed participations due to other issues with live pricing. */
		livePricingOtherReasonCount: FormControl<string | null | undefined>,

		/** The total number of missed participation due to technical issues with live pricing for any of the following reasons: * You didn’t respond quickly enough and exceeded the response deadline (around 4000 milliseconds). * You returned an error. * Your response was malformed. */
		livePricingTechnicalIssueCount: FormControl<string | null | undefined>,
	}
	export function CreateNoPriceCountDetailsFormGroup() {
		return new FormGroup<NoPriceCountDetailsFormProperties>({
			livePricingConfigIssueCount: new FormControl<string | null | undefined>(undefined),
			livePricingNotAvailableCount: new FormControl<string | null | undefined>(undefined),
			livePricingNotTriggeredCount: new FormControl<string | null | undefined>(undefined),
			livePricingOtherReasonCount: new FormControl<string | null | undefined>(undefined),
			livePricingTechnicalIssueCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The reasons that contributed to the price missing count and the total count for each reason. */
	export interface PriceMissingCountDetails {

		/** No price was cached for this itinerary, and there was no live query quota remaining. */
		bandwidthDepletedCount?: string | null;

		/** No price exists in the cache for this itinerary. A live query was not done due to page constraints. */
		cacheRateMissingCount?: string | null;

		/** The itinerary was outside of your basic parameters, so no price was pulled for the itinerary from either live query or cache fill. */
		itineraryBlockedCount?: string | null;

		/** No price was cached for this itinerary. A live query did not time out, but your system returned an error. */
		livePricingErrorCount?: string | null;

		/** No price was cached for this itinerary, and live query was not configured for this account. */
		livePricingNotSetupCount?: string | null;

		/** No price was cached for this itinerary, and a live query sent to your system timed out. */
		livePricingTimeoutCount?: string | null;
	}

	/** The reasons that contributed to the price missing count and the total count for each reason. */
	export interface PriceMissingCountDetailsFormProperties {

		/** No price was cached for this itinerary, and there was no live query quota remaining. */
		bandwidthDepletedCount: FormControl<string | null | undefined>,

		/** No price exists in the cache for this itinerary. A live query was not done due to page constraints. */
		cacheRateMissingCount: FormControl<string | null | undefined>,

		/** The itinerary was outside of your basic parameters, so no price was pulled for the itinerary from either live query or cache fill. */
		itineraryBlockedCount: FormControl<string | null | undefined>,

		/** No price was cached for this itinerary. A live query did not time out, but your system returned an error. */
		livePricingErrorCount: FormControl<string | null | undefined>,

		/** No price was cached for this itinerary, and live query was not configured for this account. */
		livePricingNotSetupCount: FormControl<string | null | undefined>,

		/** No price was cached for this itinerary, and a live query sent to your system timed out. */
		livePricingTimeoutCount: FormControl<string | null | undefined>,
	}
	export function CreatePriceMissingCountDetailsFormGroup() {
		return new FormGroup<PriceMissingCountDetailsFormProperties>({
			bandwidthDepletedCount: new FormControl<string | null | undefined>(undefined),
			cacheRateMissingCount: new FormControl<string | null | undefined>(undefined),
			itineraryBlockedCount: new FormControl<string | null | undefined>(undefined),
			livePricingErrorCount: new FormControl<string | null | undefined>(undefined),
			livePricingNotSetupCount: new FormControl<string | null | undefined>(undefined),
			livePricingTimeoutCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The reasons that contributed to the price problem count and the total count for each reason. */
	export interface PriceProblemCountDetails {

		/** The hotel was suspended. This may be due to persistent problems in areas such as incorrect taxes and fees. */
		hotelSuspendedCount?: string | null;

		/** The price given for this itinerary seemed oddly high compared to regional trends. */
		priceUnusuallyHighCount?: string | null;

		/** The price given for this itinerary seemed oddly low compared to regional trends. */
		priceUnusuallyLowCount?: string | null;

		/** Taxes and fees were missing from pricing. */
		taxesAndFeesMissingCount?: string | null;
	}

	/** The reasons that contributed to the price problem count and the total count for each reason. */
	export interface PriceProblemCountDetailsFormProperties {

		/** The hotel was suspended. This may be due to persistent problems in areas such as incorrect taxes and fees. */
		hotelSuspendedCount: FormControl<string | null | undefined>,

		/** The price given for this itinerary seemed oddly high compared to regional trends. */
		priceUnusuallyHighCount: FormControl<string | null | undefined>,

		/** The price given for this itinerary seemed oddly low compared to regional trends. */
		priceUnusuallyLowCount: FormControl<string | null | undefined>,

		/** Taxes and fees were missing from pricing. */
		taxesAndFeesMissingCount: FormControl<string | null | undefined>,
	}
	export function CreatePriceProblemCountDetailsFormGroup() {
		return new FormGroup<PriceProblemCountDetailsFormProperties>({
			hotelSuspendedCount: new FormControl<string | null | undefined>(undefined),
			priceUnusuallyHighCount: new FormControl<string | null | undefined>(undefined),
			priceUnusuallyLowCount: new FormControl<string | null | undefined>(undefined),
			taxesAndFeesMissingCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The reasons that contributed to the price unavailable count and the total count for each reason. */
	export interface PriceUnavailableCountDetails {

		/** No price was cached for this itinerary, and no live query was done because your server usually tells us the hotel is unavailable or sold out. */
		participationNotLikelyCount?: string | null;

		/** Hotel did not participate because it wasn't available for the itinerary dates. */
		priceUnavailableCount?: string | null;
	}

	/** The reasons that contributed to the price unavailable count and the total count for each reason. */
	export interface PriceUnavailableCountDetailsFormProperties {

		/** No price was cached for this itinerary, and no live query was done because your server usually tells us the hotel is unavailable or sold out. */
		participationNotLikelyCount: FormControl<string | null | undefined>,

		/** Hotel did not participate because it wasn't available for the itinerary dates. */
		priceUnavailableCount: FormControl<string | null | undefined>,
	}
	export function CreatePriceUnavailableCountDetailsFormGroup() {
		return new FormGroup<PriceUnavailableCountDetailsFormProperties>({
			participationNotLikelyCount: new FormControl<string | null | undefined>(undefined),
			priceUnavailableCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A parsed listing */
	export interface ParsedListing {

		/** If not empty, it indicates that this listing belongs to a brand of the feed. */
		brand?: string | null;

		/** The partner provided category (accommodation type) of the property. */
		category?: Array<LocalizedText>;

		/** Data issues about this listing */
		dataIssueDetail?: Array<DataIssueDetail>;

		/** Description of the property. */
		description?: Array<LocalizedText>;

		/** Images associated with this listing, localized. */
		image?: Array<Image>;

		/** Represents the accuracy of the location. The listing can be anywhere within the defined circular area. */
		imprecisionRadiusMeters?: number | null;

		/** Whether the listing can be served based on non image data alone. */
		isServed?: boolean | null;

		/** List of localized names. */
		listingName?: Array<LocalizedText>;

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		location?: LatLng;

		/** The list id on partner lec feed, provided by partner. */
		partnerListId?: string | null;

		/** The country code where the listing is located. */
		regionCode?: string | null;

		/** Reviews associated with this listing. Each review proto has a single language attached to it. */
		review?: Array<Review>;

		/** VR List attribute. */
		unitAttributes?: {[id: string]: string };
	}

	/** A parsed listing */
	export interface ParsedListingFormProperties {

		/** If not empty, it indicates that this listing belongs to a brand of the feed. */
		brand: FormControl<string | null | undefined>,

		/** Represents the accuracy of the location. The listing can be anywhere within the defined circular area. */
		imprecisionRadiusMeters: FormControl<number | null | undefined>,

		/** Whether the listing can be served based on non image data alone. */
		isServed: FormControl<boolean | null | undefined>,

		/** The list id on partner lec feed, provided by partner. */
		partnerListId: FormControl<string | null | undefined>,

		/** The country code where the listing is located. */
		regionCode: FormControl<string | null | undefined>,

		/** VR List attribute. */
		unitAttributes: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateParsedListingFormGroup() {
		return new FormGroup<ParsedListingFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined),
			imprecisionRadiusMeters: new FormControl<number | null | undefined>(undefined),
			isServed: new FormControl<boolean | null | undefined>(undefined),
			partnerListId: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
			unitAttributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A single review in a VR Listing. NEXT ID: 10 */
	export interface Review {

		/** The author of the review. */
		author?: string | null;

		/** The body of the review. */
		body?: string | null;

		/** Language of the review, such as "en", "de", etc. */
		languageCode?: string | null;

		/** The url of the review. */
		link?: string | null;

		/** Any ratings associated with this review. This is repeated because reviews can include ratings on different aspects of a listing, e.g. location, cleanliness, etc. */
		rating?: Array<Rating>;

		/** Unix timestamp (in seconds) of the review, in UTC+0. */
		reviewTime?: string | null;

		/** The title of the review, for example: Great three bedrooms. */
		title?: string | null;

		/** The type of the review. */
		type?: ReviewType | null;

		/** Unix timestamp (in seconds) of when the stay was, in UTC+0. */
		visitTime?: string | null;
	}

	/** A single review in a VR Listing. NEXT ID: 10 */
	export interface ReviewFormProperties {

		/** The author of the review. */
		author: FormControl<string | null | undefined>,

		/** The body of the review. */
		body: FormControl<string | null | undefined>,

		/** Language of the review, such as "en", "de", etc. */
		languageCode: FormControl<string | null | undefined>,

		/** The url of the review. */
		link: FormControl<string | null | undefined>,

		/** Unix timestamp (in seconds) of the review, in UTC+0. */
		reviewTime: FormControl<string | null | undefined>,

		/** The title of the review, for example: Great three bedrooms. */
		title: FormControl<string | null | undefined>,

		/** The type of the review. */
		type: FormControl<ReviewType | null | undefined>,

		/** Unix timestamp (in seconds) of when the stay was, in UTC+0. */
		visitTime: FormControl<string | null | undefined>,
	}
	export function CreateReviewFormGroup() {
		return new FormGroup<ReviewFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			reviewTime: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ReviewType | null | undefined>(undefined),
			visitTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A rating within a vacation rentals Listing. NEXT ID: 4 */
	export interface Rating {

		/** Maximum rating possible. */
		ratingScale?: number | null;

		/** The rating score. (e.g. 8.5) */
		score?: number | null;

		/** The type of the rating. */
		type?: RatingType | null;
	}

	/** A rating within a vacation rentals Listing. NEXT ID: 4 */
	export interface RatingFormProperties {

		/** Maximum rating possible. */
		ratingScale: FormControl<number | null | undefined>,

		/** The rating score. (e.g. 8.5) */
		score: FormControl<number | null | undefined>,

		/** The type of the rating. */
		type: FormControl<RatingType | null | undefined>,
	}
	export function CreateRatingFormGroup() {
		return new FormGroup<RatingFormProperties>({
			ratingScale: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<RatingType | null | undefined>(undefined),
		});

	}

	export enum RatingType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', OVERALL = 'OVERALL' }

	export enum ReviewType { UNKNOWN = 'UNKNOWN', EDITORIAL = 'EDITORIAL', USER = 'USER' }


	/** Represents a result from querying for participation stats for an account. */
	export interface ParticipationResult {

		/** Key of a result. */
		key?: Key;

		/** The total number of opportunities **not** eligible for the Google Ads auction process. Comprised of the following: * Landing page missing * Price missing * Price problem * Price unavailable * Other */
		missedParticipationCount?: string | null;

		/** Missed participation count broken down by reason. */
		missedParticipationCountDetails?: MissedParticipationCountDetails;

		/** For a specific hotel, the total number of opportunities that were available. Opportunities are the total number of instances when a hotel ad could have been displayed to a user. */
		opportunityCount?: string | null;

		/** The total number of opportunities for which you were eligible to enter in the Google Ads auction process. */
		participationCount?: string | null;

		/** The percentage rate of participation where the number of successfully participated opportunities is divided by the total number of opportunities. For example, if a property was eligible to enter the Google Ads auction 90 times out of 100 opportunities, the participation rate is 90%. */
		participationPercent?: number | null;

		/** Partner's hotel display name. This field is only populated when the result is aggregated by `partnerHotelId`. */
		partnerHotelDisplayName?: string | null;
	}

	/** Represents a result from querying for participation stats for an account. */
	export interface ParticipationResultFormProperties {

		/** The total number of opportunities **not** eligible for the Google Ads auction process. Comprised of the following: * Landing page missing * Price missing * Price problem * Price unavailable * Other */
		missedParticipationCount: FormControl<string | null | undefined>,

		/** For a specific hotel, the total number of opportunities that were available. Opportunities are the total number of instances when a hotel ad could have been displayed to a user. */
		opportunityCount: FormControl<string | null | undefined>,

		/** The total number of opportunities for which you were eligible to enter in the Google Ads auction process. */
		participationCount: FormControl<string | null | undefined>,

		/** The percentage rate of participation where the number of successfully participated opportunities is divided by the total number of opportunities. For example, if a property was eligible to enter the Google Ads auction 90 times out of 100 opportunities, the participation rate is 90%. */
		participationPercent: FormControl<number | null | undefined>,

		/** Partner's hotel display name. This field is only populated when the result is aggregated by `partnerHotelId`. */
		partnerHotelDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateParticipationResultFormGroup() {
		return new FormGroup<ParticipationResultFormProperties>({
			missedParticipationCount: new FormControl<string | null | undefined>(undefined),
			opportunityCount: new FormControl<string | null | undefined>(undefined),
			participationCount: new FormControl<string | null | undefined>(undefined),
			participationPercent: new FormControl<number | null | undefined>(undefined),
			partnerHotelDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A price view. Covers the Prices functionality in pre-v3.0 API versions. */
	export interface PriceView {

		/** Resource name in the format `accounts/{account_id}/priceViews/{partner_hotel_id}`. */
		name?: string | null;

		/** Price for each itinerary. */
		perItineraryPrices?: Array<HotelPricePerItinerary>;
	}

	/** A price view. Covers the Prices functionality in pre-v3.0 API versions. */
	export interface PriceViewFormProperties {

		/** Resource name in the format `accounts/{account_id}/priceViews/{partner_hotel_id}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePriceViewFormGroup() {
		return new FormGroup<PriceViewFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a result from querying for the property performance report for an account. */
	export interface PropertyPerformanceResult {

		/** The total number of ad clicks that were recorded for this result. */
		adsClickCount?: string | null;

		/** Equal to `ads_click_count` divided by `ads_impression_count`. */
		adsClickthroughRate?: number | null;

		/** The total number of ad impressions that were recorded for this result. */
		adsImpressionCount?: string | null;

		/** Difference in days between query date and check-in date in property's local timezone. Only present if `advanceBookingWindow` is specified in `aggregateBy` in the request. */
		advanceBookingWindow?: PropertyPerformanceResultAdvanceBookingWindow | null;

		/** Partner-specified brand for the property. Only present if `brand` is specified in `aggregateBy` in the request. */
		brand?: string | null;

		/** The total number of free booking link clicks that were recorded for this result. */
		clickCount?: string | null;

		/** Equal to `click_count` divided by `impression_count`. */
		clickthroughRate?: number | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		date?: Date;

		/** The user’s device type. Only present if `deviceType` is specified in `aggregateBy` in the request. */
		deviceType?: FreeBookingLinksResultDeviceType | null;

		/** Whether the user’s query indicated a strong interest in booking. Only present if `highIntentUsers` is specified in `aggregateBy` in the request. */
		highIntentUsers?: boolean | null;

		/** The total number of free booking link impressions that were recorded for this result. This value is rounded to preserve user privacy. */
		impressionCount?: string | null;

		/** Number of nights between check-in and check-out dates specified by user. Only present if `lengthOfStay` is specified in `aggregateBy` in the request. */
		lengthOfStay?: PropertyPerformanceResultLengthOfStay | null;

		/** Requested number of people staying at the property. Only present if `partnerPropertyId` is specified in `aggregateBy` in the request. */
		occupancy?: PropertyPerformanceResultOccupancy | null;

		/** Partner's property name. Only present if `partnerPropertyDisplayName` is specified in `aggregateBy` in the request. */
		partnerPropertyDisplayName?: string | null;

		/** Partner's property ID. Only present if `partnerPropertyId` is specified in `aggregateBy` in the request. */
		partnerPropertyId?: string | null;

		/** ISO 3116 region code of the country/region of the property. Only present if `propertyRegionCode` is specified in `aggregateBy` in the request */
		propertyRegionCode?: string | null;

		/** ISO 3116 region code of the country/region of the user. Only present if `userRegionCode` is specified in `aggregateBy` in the request */
		userRegionCode?: string | null;

		/** The total number of clicks on the "Website" button on Google for vacation rentals. */
		vrWebsiteButtonClicks?: string | null;
	}

	/** Represents a result from querying for the property performance report for an account. */
	export interface PropertyPerformanceResultFormProperties {

		/** The total number of ad clicks that were recorded for this result. */
		adsClickCount: FormControl<string | null | undefined>,

		/** Equal to `ads_click_count` divided by `ads_impression_count`. */
		adsClickthroughRate: FormControl<number | null | undefined>,

		/** The total number of ad impressions that were recorded for this result. */
		adsImpressionCount: FormControl<string | null | undefined>,

		/** Difference in days between query date and check-in date in property's local timezone. Only present if `advanceBookingWindow` is specified in `aggregateBy` in the request. */
		advanceBookingWindow: FormControl<PropertyPerformanceResultAdvanceBookingWindow | null | undefined>,

		/** Partner-specified brand for the property. Only present if `brand` is specified in `aggregateBy` in the request. */
		brand: FormControl<string | null | undefined>,

		/** The total number of free booking link clicks that were recorded for this result. */
		clickCount: FormControl<string | null | undefined>,

		/** Equal to `click_count` divided by `impression_count`. */
		clickthroughRate: FormControl<number | null | undefined>,

		/** The user’s device type. Only present if `deviceType` is specified in `aggregateBy` in the request. */
		deviceType: FormControl<FreeBookingLinksResultDeviceType | null | undefined>,

		/** Whether the user’s query indicated a strong interest in booking. Only present if `highIntentUsers` is specified in `aggregateBy` in the request. */
		highIntentUsers: FormControl<boolean | null | undefined>,

		/** The total number of free booking link impressions that were recorded for this result. This value is rounded to preserve user privacy. */
		impressionCount: FormControl<string | null | undefined>,

		/** Number of nights between check-in and check-out dates specified by user. Only present if `lengthOfStay` is specified in `aggregateBy` in the request. */
		lengthOfStay: FormControl<PropertyPerformanceResultLengthOfStay | null | undefined>,

		/** Requested number of people staying at the property. Only present if `partnerPropertyId` is specified in `aggregateBy` in the request. */
		occupancy: FormControl<PropertyPerformanceResultOccupancy | null | undefined>,

		/** Partner's property name. Only present if `partnerPropertyDisplayName` is specified in `aggregateBy` in the request. */
		partnerPropertyDisplayName: FormControl<string | null | undefined>,

		/** Partner's property ID. Only present if `partnerPropertyId` is specified in `aggregateBy` in the request. */
		partnerPropertyId: FormControl<string | null | undefined>,

		/** ISO 3116 region code of the country/region of the property. Only present if `propertyRegionCode` is specified in `aggregateBy` in the request */
		propertyRegionCode: FormControl<string | null | undefined>,

		/** ISO 3116 region code of the country/region of the user. Only present if `userRegionCode` is specified in `aggregateBy` in the request */
		userRegionCode: FormControl<string | null | undefined>,

		/** The total number of clicks on the "Website" button on Google for vacation rentals. */
		vrWebsiteButtonClicks: FormControl<string | null | undefined>,
	}
	export function CreatePropertyPerformanceResultFormGroup() {
		return new FormGroup<PropertyPerformanceResultFormProperties>({
			adsClickCount: new FormControl<string | null | undefined>(undefined),
			adsClickthroughRate: new FormControl<number | null | undefined>(undefined),
			adsImpressionCount: new FormControl<string | null | undefined>(undefined),
			advanceBookingWindow: new FormControl<PropertyPerformanceResultAdvanceBookingWindow | null | undefined>(undefined),
			brand: new FormControl<string | null | undefined>(undefined),
			clickCount: new FormControl<string | null | undefined>(undefined),
			clickthroughRate: new FormControl<number | null | undefined>(undefined),
			deviceType: new FormControl<FreeBookingLinksResultDeviceType | null | undefined>(undefined),
			highIntentUsers: new FormControl<boolean | null | undefined>(undefined),
			impressionCount: new FormControl<string | null | undefined>(undefined),
			lengthOfStay: new FormControl<PropertyPerformanceResultLengthOfStay | null | undefined>(undefined),
			occupancy: new FormControl<PropertyPerformanceResultOccupancy | null | undefined>(undefined),
			partnerPropertyDisplayName: new FormControl<string | null | undefined>(undefined),
			partnerPropertyId: new FormControl<string | null | undefined>(undefined),
			propertyRegionCode: new FormControl<string | null | undefined>(undefined),
			userRegionCode: new FormControl<string | null | undefined>(undefined),
			vrWebsiteButtonClicks: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PropertyPerformanceResultAdvanceBookingWindow { ADVANCE_BOOKING_WINDOW_UNSPECIFIED = 'ADVANCE_BOOKING_WINDOW_UNSPECIFIED', ADVANCE_BOOKING_WINDOW_SAME_DAY = 'ADVANCE_BOOKING_WINDOW_SAME_DAY', ADVANCE_BOOKING_WINDOW_NEXT_DAY = 'ADVANCE_BOOKING_WINDOW_NEXT_DAY', ADVANCE_BOOKING_WINDOW_DAYS_2_TO_7 = 'ADVANCE_BOOKING_WINDOW_DAYS_2_TO_7', ADVANCE_BOOKING_WINDOW_DAYS_8_TO_14 = 'ADVANCE_BOOKING_WINDOW_DAYS_8_TO_14', ADVANCE_BOOKING_WINDOW_DAYS_15_TO_30 = 'ADVANCE_BOOKING_WINDOW_DAYS_15_TO_30', ADVANCE_BOOKING_WINDOW_DAYS_31_TO_60 = 'ADVANCE_BOOKING_WINDOW_DAYS_31_TO_60', ADVANCE_BOOKING_WINDOW_DAYS_61_TO_90 = 'ADVANCE_BOOKING_WINDOW_DAYS_61_TO_90', ADVANCE_BOOKING_WINDOW_DAYS_91_TO_120 = 'ADVANCE_BOOKING_WINDOW_DAYS_91_TO_120', ADVANCE_BOOKING_WINDOW_DAYS_121_TO_150 = 'ADVANCE_BOOKING_WINDOW_DAYS_121_TO_150', ADVANCE_BOOKING_WINDOW_DAYS_151_TO_180 = 'ADVANCE_BOOKING_WINDOW_DAYS_151_TO_180', ADVANCE_BOOKING_WINDOW_DAYS_OVER_180 = 'ADVANCE_BOOKING_WINDOW_DAYS_OVER_180' }

	export enum PropertyPerformanceResultLengthOfStay { LENGTH_OF_STAY_UNSPECIFIED = 'LENGTH_OF_STAY_UNSPECIFIED', LENGTH_OF_STAY_NIGHTS_1 = 'LENGTH_OF_STAY_NIGHTS_1', LENGTH_OF_STAY_NIGHTS_2 = 'LENGTH_OF_STAY_NIGHTS_2', LENGTH_OF_STAY_NIGHTS_3 = 'LENGTH_OF_STAY_NIGHTS_3', LENGTH_OF_STAY_NIGHTS_4_TO_7 = 'LENGTH_OF_STAY_NIGHTS_4_TO_7', LENGTH_OF_STAY_NIGHTS_8_TO_14 = 'LENGTH_OF_STAY_NIGHTS_8_TO_14', LENGTH_OF_STAY_NIGHTS_15_TO_21 = 'LENGTH_OF_STAY_NIGHTS_15_TO_21', LENGTH_OF_STAY_NIGHTS_22_TO_30 = 'LENGTH_OF_STAY_NIGHTS_22_TO_30', LENGTH_OF_STAY_NIGHTS_OVER_30 = 'LENGTH_OF_STAY_NIGHTS_OVER_30' }

	export enum PropertyPerformanceResultOccupancy { OCCUPANCY_UNSPECIFIED = 'OCCUPANCY_UNSPECIFIED', OCCUPANCY_1 = 'OCCUPANCY_1', OCCUPANCY_2 = 'OCCUPANCY_2', OCCUPANCY_3 = 'OCCUPANCY_3', OCCUPANCY_4 = 'OCCUPANCY_4', OCCUPANCY_OVER_4 = 'OCCUPANCY_OVER_4' }


	/** **DEPRECATED:** Use `QueryPropertyPerformanceReportResponse` with `PropertyPerformanceReportService` instead. Response message for FreeBookingLinksReportService.QueryFreeBookingLinksReport. */
	export interface QueryFreeBookingLinksReportResponse {

		/** Pagination token used to retrieve the next page of results. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The list of results that match the query. */
		results?: Array<FreeBookingLinksResult>;
	}

	/** **DEPRECATED:** Use `QueryPropertyPerformanceReportResponse` with `PropertyPerformanceReportService` instead. Response message for FreeBookingLinksReportService.QueryFreeBookingLinksReport. */
	export interface QueryFreeBookingLinksReportResponseFormProperties {

		/** Pagination token used to retrieve the next page of results. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryFreeBookingLinksReportResponseFormGroup() {
		return new FormGroup<QueryFreeBookingLinksReportResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ParticipationReportService.QueryParticipationReport. */
	export interface QueryParticipationReportResponse {

		/** Pagination token used to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The list of results that matches the query. */
		results?: Array<ParticipationResult>;
	}

	/** Response message for ParticipationReportService.QueryParticipationReport. */
	export interface QueryParticipationReportResponseFormProperties {

		/** Pagination token used to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryParticipationReportResponseFormGroup() {
		return new FormGroup<QueryParticipationReportResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for PropertyPerformanceReportService.QueryPropertyPerformanceReport. */
	export interface QueryPropertyPerformanceReportResponse {

		/** Pagination token used to retrieve the next page of results. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The list of results that match the query. */
		results?: Array<PropertyPerformanceResult>;
	}

	/** Response message for PropertyPerformanceReportService.QueryPropertyPerformanceReport. */
	export interface QueryPropertyPerformanceReportResponseFormProperties {

		/** Pagination token used to retrieve the next page of results. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryPropertyPerformanceReportResponseFormGroup() {
		return new FormGroup<QueryPropertyPerformanceReportResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for HotelService.SetLiveOnGoogle. */
	export interface SetLiveOnGoogleRequest {

		/** Required. Whether the property will show on Google. When true, Google will show the properties if their integration is complete and the property is available. When false, Google will never show the properties. */
		liveOnGoogle?: boolean | null;

		/** Required. Identifies the properties to update with the liveOnGoogle setting. */
		partnerHotelIds?: Array<string>;
	}

	/** Request message for HotelService.SetLiveOnGoogle. */
	export interface SetLiveOnGoogleRequestFormProperties {

		/** Required. Whether the property will show on Google. When true, Google will show the properties if their integration is complete and the property is available. When false, Google will never show the properties. */
		liveOnGoogle: FormControl<boolean | null | undefined>,
	}
	export function CreateSetLiveOnGoogleRequestFormGroup() {
		return new FormGroup<SetLiveOnGoogleRequestFormProperties>({
			liveOnGoogle: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for HotelService.SetLiveOnGoogle. */
	export interface SetLiveOnGoogleResponse {

		/** Identifies properties that Google could not update. */
		failedHotelIds?: Array<string>;

		/** Identifies the updated properties. */
		updatedHotelIds?: Array<string>;
	}

	/** Response message for HotelService.SetLiveOnGoogle. */
	export interface SetLiveOnGoogleResponseFormProperties {
	}
	export function CreateSetLiveOnGoogleResponseFormGroup() {
		return new FormGroup<SetLiveOnGoogleResponseFormProperties>({
		});

	}


	/** Response message for HotelViewService.SummarizeHotelViews. */
	export interface SummarizeHotelViewsResponse {

		/** Timestamp of the last hotel feed submission. */
		lastFeedSubmissionTime?: string | null;

		/** Timestamp of the last hotel manifest update. */
		lastManifestUpdateTime?: string | null;

		/** The number of properties that are Live on Google. */
		liveOnGooglePropertyCount?: string | null;

		/** The number of properties that match Google's manifest. */
		matchedPropertyCount?: string | null;

		/** The number of hotels that are considered overclustered. */
		overclusteredPropertyCount?: string | null;

		/** The number of overclustered properties that have data-related errors. */
		overclusteredPropertyWithErrorsCount?: string | null;

		/** The number of properties that are considered unmatched. */
		unmatchedPropertyCount?: string | null;

		/** The number of unmatched properties that have data-related errors. */
		unmatchedPropertyWithErrorsCount?: string | null;
	}

	/** Response message for HotelViewService.SummarizeHotelViews. */
	export interface SummarizeHotelViewsResponseFormProperties {

		/** Timestamp of the last hotel feed submission. */
		lastFeedSubmissionTime: FormControl<string | null | undefined>,

		/** Timestamp of the last hotel manifest update. */
		lastManifestUpdateTime: FormControl<string | null | undefined>,

		/** The number of properties that are Live on Google. */
		liveOnGooglePropertyCount: FormControl<string | null | undefined>,

		/** The number of properties that match Google's manifest. */
		matchedPropertyCount: FormControl<string | null | undefined>,

		/** The number of hotels that are considered overclustered. */
		overclusteredPropertyCount: FormControl<string | null | undefined>,

		/** The number of overclustered properties that have data-related errors. */
		overclusteredPropertyWithErrorsCount: FormControl<string | null | undefined>,

		/** The number of properties that are considered unmatched. */
		unmatchedPropertyCount: FormControl<string | null | undefined>,

		/** The number of unmatched properties that have data-related errors. */
		unmatchedPropertyWithErrorsCount: FormControl<string | null | undefined>,
	}
	export function CreateSummarizeHotelViewsResponseFormGroup() {
		return new FormGroup<SummarizeHotelViewsResponseFormProperties>({
			lastFeedSubmissionTime: new FormControl<string | null | undefined>(undefined),
			lastManifestUpdateTime: new FormControl<string | null | undefined>(undefined),
			liveOnGooglePropertyCount: new FormControl<string | null | undefined>(undefined),
			matchedPropertyCount: new FormControl<string | null | undefined>(undefined),
			overclusteredPropertyCount: new FormControl<string | null | undefined>(undefined),
			overclusteredPropertyWithErrorsCount: new FormControl<string | null | undefined>(undefined),
			unmatchedPropertyCount: new FormControl<string | null | undefined>(undefined),
			unmatchedPropertyWithErrorsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for PriceAccuracyViewService.SummarizePriceAccuracy. */
	export interface SummarizePriceAccuracyResponse {

		/** The current Book on Google price accuracy score. */
		currentBookOnGoogleScore?: SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null;

		/** The current price accuracy score combining both website and Book on Google scores. */
		currentOverallScore?: SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null;

		/** The current price accuracy score. Contains the same value as `current_website_score`. For clarity, use either `current_website_score` or 'current_overall_score` depending upon which is needed. */
		currentScore?: SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null;

		/** The current website price accuracy score. */
		currentWebsiteScore?: SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null;

		/** The predicted Book on Google price accuracy score. */
		predictedBookOnGoogleScore?: SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null;

		/** The predicted price accuracy score combining both website and Book on Google scores. */
		predictedOverallScore?: SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null;

		/** The predicted price accuracy score. Contains the same value as `predicted_website_score`. For clarity, use either `predicted_website_score` or 'predicted_overall_score` depending upon which is needed. */
		predictedScore?: SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null;

		/** The predicted website price accuracy score. */
		predictedWebsiteScore?: SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null;

		/** The update timestamp for the current score. */
		updateTime?: string | null;
	}

	/** Response message for PriceAccuracyViewService.SummarizePriceAccuracy. */
	export interface SummarizePriceAccuracyResponseFormProperties {

		/** The current Book on Google price accuracy score. */
		currentBookOnGoogleScore: FormControl<SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null | undefined>,

		/** The current price accuracy score combining both website and Book on Google scores. */
		currentOverallScore: FormControl<SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null | undefined>,

		/** The current price accuracy score. Contains the same value as `current_website_score`. For clarity, use either `current_website_score` or 'current_overall_score` depending upon which is needed. */
		currentScore: FormControl<SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null | undefined>,

		/** The current website price accuracy score. */
		currentWebsiteScore: FormControl<SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null | undefined>,

		/** The predicted Book on Google price accuracy score. */
		predictedBookOnGoogleScore: FormControl<SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null | undefined>,

		/** The predicted price accuracy score combining both website and Book on Google scores. */
		predictedOverallScore: FormControl<SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null | undefined>,

		/** The predicted price accuracy score. Contains the same value as `predicted_website_score`. For clarity, use either `predicted_website_score` or 'predicted_overall_score` depending upon which is needed. */
		predictedScore: FormControl<SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null | undefined>,

		/** The predicted website price accuracy score. */
		predictedWebsiteScore: FormControl<SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null | undefined>,

		/** The update timestamp for the current score. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateSummarizePriceAccuracyResponseFormGroup() {
		return new FormGroup<SummarizePriceAccuracyResponseFormProperties>({
			currentBookOnGoogleScore: new FormControl<SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null | undefined>(undefined),
			currentOverallScore: new FormControl<SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null | undefined>(undefined),
			currentScore: new FormControl<SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null | undefined>(undefined),
			currentWebsiteScore: new FormControl<SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null | undefined>(undefined),
			predictedBookOnGoogleScore: new FormControl<SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null | undefined>(undefined),
			predictedOverallScore: new FormControl<SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null | undefined>(undefined),
			predictedScore: new FormControl<SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null | undefined>(undefined),
			predictedWebsiteScore: new FormControl<SummarizePriceAccuracyResponseCurrentBookOnGoogleScore | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SummarizePriceAccuracyResponseCurrentBookOnGoogleScore { PRICE_ACCURACY_STATE_UNSPECIFIED = 'PRICE_ACCURACY_STATE_UNSPECIFIED', PRICE_ACCURACY_STATE_UNKNOWN = 'PRICE_ACCURACY_STATE_UNKNOWN', EXCELLENT = 'EXCELLENT', GOOD = 'GOOD', POOR = 'POOR', AT_RISK = 'AT_RISK', FAILED = 'FAILED' }


	/** Response message for ReconciliationReportService.ValidateReconciliationReport. */
	export interface ValidateReconciliationReportResponse {

		/** Issues that were encountered when validating the file. */
		issues?: Array<ReconciliationReportValidationIssue>;

		/** The number of commission records that were successfully validated. */
		successfulRecordCount?: number | null;
	}

	/** Response message for ReconciliationReportService.ValidateReconciliationReport. */
	export interface ValidateReconciliationReportResponseFormProperties {

		/** The number of commission records that were successfully validated. */
		successfulRecordCount: FormControl<number | null | undefined>,
	}
	export function CreateValidateReconciliationReportResponseFormGroup() {
		return new FormGroup<ValidateReconciliationReportResponseFormProperties>({
			successfulRecordCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for VRPartnerListingVerificationService.VerifyPartnerListings. */
	export interface VerifyListingsRequest {

		/** A listing that follows the XML format specified in https://developers.google.com/hotels/hotel-prices/xml-reference/hotel-list-feed. */
		xmlListing?: string | null;
	}

	/** Request message for VRPartnerListingVerificationService.VerifyPartnerListings. */
	export interface VerifyListingsRequestFormProperties {

		/** A listing that follows the XML format specified in https://developers.google.com/hotels/hotel-prices/xml-reference/hotel-list-feed. */
		xmlListing: FormControl<string | null | undefined>,
	}
	export function CreateVerifyListingsRequestFormGroup() {
		return new FormGroup<VerifyListingsRequestFormProperties>({
			xmlListing: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for VRPartnerListingVerificationService.VerifyPartnerListings. */
	export interface VerifyListingsResponse {

		/** A parsed listing */
		parsedListing?: ParsedListing;
	}

	/** Response message for VRPartnerListingVerificationService.VerifyPartnerListings. */
	export interface VerifyListingsResponseFormProperties {
	}
	export function CreateVerifyListingsResponseFormGroup() {
		return new FormGroup<VerifyListingsResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Collection-level custom method to update the Live on Google status for multiple properties. Each call can turn on or off multiple hotels. To turn some hotels on and turn some hotels off, you will have to make multiple calls.
		 * Post v3/{account}/hotels:setLiveOnGoogle
		 * @param {string} account Required. The resource name of the account. The format is accounts/{account_id}.
		 * @return {SetLiveOnGoogleResponse} Successful response
		 */
		Travelpartner_accounts_hotels_setLiveOnGoogle(account: string, requestBody: SetLiveOnGoogleRequest): Observable<SetLiveOnGoogleResponse> {
			return this.http.post<SetLiveOnGoogleResponse>(this.baseUri + 'v3/' + (account == null ? '' : encodeURIComponent(account)) + '/hotels:setLiveOnGoogle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an account link.
		 * Delete v3/{name}
		 * @param {string} name Required. The resource name of the account link being deleted. The format is `accounts/{account_id}/accountLinks/{account_link_id}`.
		 * @return {Empty} Successful response
		 */
		Travelpartner_accounts_accountLinks_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns a reconciliation report.
		 * Get v3/{name}
		 * @param {string} name The resource name of the reconciliation report to fetch. The format is `accounts/{account_id}/reconciliationReports/{datetime}~{filename}`.
		 * @param {boolean} includeMatchedPrices Set to true if matched prices are to be added into the report.
		 * @param {boolean} includeNonScoring Set to true if non-account impacting rows are to be added into the report.
		 * @param {boolean} includePixels Set to true if pixel signals are to be added into the report.
		 * @return {ReconciliationReport} Successful response
		 */
		Travelpartner_accounts_reconciliationReports_get(name: string, includeMatchedPrices: boolean | null | undefined, includeNonScoring: boolean | null | undefined, includePixels: boolean | null | undefined): Observable<ReconciliationReport> {
			return this.http.get<ReconciliationReport>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '&includeMatchedPrices=' + includeMatchedPrices + '&includeNonScoring=' + includeNonScoring + '&includePixels=' + includePixels, {});
		}

		/**
		 * Updates a brand.
		 * Patch v3/{name}
		 * @param {string} name Output only. The resource name for the brand in the format `accounts/{account_id}/brands/{brand_id}`. The `brand_id` corresponds to the partner's brand identifier used for landing page matching and the property-level brand identifier. A default brand is applied to properties that do not have a brand. The `brand_id` of the default brand is `NO_BRAND_ID`. It can be fetched and updated like any configured brand.
		 * @param {boolean} allowMissing When true, and the Brand is not found, a new Brand will be created. In this situation, `update_mask` is ignored.
		 * @param {string} updateMask Required. The field to update. Only the `display_names` and `icon` fields can be updated. Use the syntax shown in the example URI below and provide the new value in the request body. Example request URI and request body: ``` PATCH https://travelpartner.googleapis.com/v3/accounts/123456789/ brands/my-brand?update_mask=brand.display_names ``` ``` { "display_names": [{ "language": "en" "text": "Gilles' Gites" }] } ``` The information above is sufficient for forming the URI and request body. The sentence below is auto-generated, supplemental information about the `FieldMask` format in general.
		 * @return {Brand} Successful response
		 */
		Travelpartner_accounts_brands_patch(name: string, allowMissing: boolean | null | undefined, updateMask: string | null | undefined, requestBody: Brand): Observable<Brand> {
			return this.http.patch<Brand>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * **DEPRECATED:** Use PropertyPerformanceReportService.QueryPropertyPerformanceReport, which also has impression reporting, instead. Provides the ability to query (get, filter, and segment) a free booking links report for a specific account.
		 * Get v3/{name}/freeBookingLinksReportViews:query
		 * @param {string} name The resource name of the account being queried. Format: accounts/{account_id}
		 * @param {string} aggregateBy Specifies how to segment the metrics returned by the query. For example, if `userRegionCode` is specified, the `freeBookingLinksResult` will provide metrics aggregated by user region. The string value is a comma-separated list of fields. Valid fields are: `date`, `userRegionCode`, `deviceType`, `partnerHotelId`, and `partnerHotelDisplayName`. Only fields specified here are included in the FreeBookingLinksResult.
		 * @param {string} filter The conditions (fields and expressions) used to filter the free booking link metrics for the account being queried. The syntax requires spaces surrounding the `in` operator. Otherwise, spaces can be omitted. Conditions can be joined using the `and` operator. The `date` field is required. All other fields are optional. The `date` field values are inclusive and must be in YYYY-MM-DD format. The earliest acceptable date is 2021-03-09; earlier date values will be coerced to 2021-03-09. Values for `partnerHotelDisplayName` are matched case-insensitively. Examples of valid conditions are as follows: * `date = '2021-12-03'` * `date between '2021-12-03' and '2021-12-08'` * `deviceType = 'TABLET'` * `deviceType in ('MOBILE', 'TABLET')` * `partnerHotelId = 'AAA'` * `partnerHotelId in ('AAA', 'BBB')` * `partnerHotelDisplayName = 'hotel A'` * `partnerHotelDisplayName in ('Hotel A', 'HOTEL b')` * `userRegionCode = 'US'` * `userRegionCode in ('US', 'CA')`
		 * @param {number} pageSize The maximum number of participation results to return. The service may return fewer than this value. If unspecified, at most 10,000 results will be returned. The maximum value is 10,000; values above 10,000 will be coerced to 10,000.
		 * @param {string} pageToken A page token, received from a previous QueryParticipationReport request. Provide this to receive the subsequent page. When paginating, all other parameters provided to QueryParticipationReport must match the call that provided the page token.
		 * @return {QueryFreeBookingLinksReportResponse} Successful response
		 */
		Travelpartner_accounts_freeBookingLinksReportViews_query(name: string, aggregateBy: string | null | undefined, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<QueryFreeBookingLinksReportResponse> {
			return this.http.get<QueryFreeBookingLinksReportResponse>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/freeBookingLinksReportViews:query&aggregateBy=' + (aggregateBy == null ? '' : encodeURIComponent(aggregateBy)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Provides the ability to query (get, filter, and segment) a participation report for a particular account.
		 * Get v3/{name}/participationReportViews:query
		 * @param {string} name The resource name of the account being queried. The format is `accounts/{account_id}`.
		 * @param {string} aggregateBy Specifies how to segment the metrics returned by the query. For example, if `userRegionCode` is specified as the `aggregate_by` value, the `participationResult` will provide metrics aggregated by user region. The string value is a comma-separated list of fields. Valid fields are: `date`, `userRegionCode`, `deviceType`, `partnerHotelId`, `hotelRegionCode`, `advanceBookingWindow`, `lengthOfStayDays`, `checkinDate`, and `occupancy`. Fields that are not specified are not included in the ParticipationResult. Using an `aggregateBy` specification that produces a large number of rows will cause an error. This is especially true when aggregating by `partnerHotelId` or more than two fields. To reduce the possibiliy of an error, filter by `partnerHotelId` and `date` to only include a select number of hotels and dates. Accounts with a large number of hotels will need to further reduce data with more filtering.
		 * @param {string} filter The conditions (fields and expressions) used to filter the participation metrics for the account being queried. The syntax requires spaces surrounding the `in` operator. Otherwise, spaces can be omitted. Conditions can be joined using the `and` operator. The `date` field is required. All other fields are optional. Examples of valid conditions are as follows: * `advanceBookingWindow = 2` * `advanceBookingWindow >= 0` * `advanceBookingWindow <= 5` * `advanceBookingWindow between 1 and 5` * `checkinDate = '2020-10-01'` * `checkinDate >= '2020-10-01'` * `checkinDate <= '2020-10-01'` * `checkinDate between '2020-10-01' and '2020-10-05'` * `date = '2020-02-04'` * `date between '2020-02-04' and '2020-02-09'` * `deviceType = 'TABLET'` * `deviceType in ('MOBILE', 'TABLET')` * `hotelRegionCode = 'US'` * `hotelRegionCode in ('US', 'CA')` * `lengthOfStayDays = 2` * `lengthOfStayDays >= 0` * `lengthOfStayDays <= 5` * `lengthOfStayDays between 1 and 5` * `occupancy = 2` * `occupancy >= 0` * `occupancy <= 5` * `occupancy between 1 and 5` * `partnerHotelId = 'AAA'` * `partnerHotelId in ('AAA', 'BBB')` * `userRegionCode = 'US'` * `userRegionCode in ('US', 'CA')`
		 * @param {number} pageSize The maximum number of participation results to return. The service may return fewer than this value. If unspecified, at most 10,000 results will be returned. The maximum value is 10,000; values above 10,000 will be coerced to 10,000.
		 * @param {string} pageToken A page token, received from a previous QueryParticipationReport request. Provide this to receive the subsequent page. When paginating, all other parameters provided to QueryParticipationReport must match the call that provided the page token.
		 * @return {QueryParticipationReportResponse} Successful response
		 */
		Travelpartner_accounts_participationReportViews_query(name: string, aggregateBy: string | null | undefined, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<QueryParticipationReportResponse> {
			return this.http.get<QueryParticipationReportResponse>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/participationReportViews:query&aggregateBy=' + (aggregateBy == null ? '' : encodeURIComponent(aggregateBy)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Provides the ability to query (get, filter, and segment) a property performance links report for a specific account.
		 * Get v3/{name}/propertyPerformanceReportViews:query
		 * @param {string} name The resource name of the account being queried. Format: accounts/{account_id}
		 * @param {string} aggregateBy Specifies how to segment the metrics returned by the query. For example, if `userRegionCode` is specified, the `PropertyPerformanceResult` will provide metrics aggregated by user region. The string value is a comma-separated list of fields. Valid fields are: `advanceBookingWindow`, `brand`, `date`, `deviceType`, `highIntentUsers`, `lengthOfStay`, `propertyRegionCode`, `occupancy`, `partnerPropertyId`, `partnerPropertyDisplayName`, and `userRegionCode`. Only fields specified here are included in the PropertyPerformanceResult.
		 * @param {string} filter The conditions (fields and expressions) used to filter the property performance metrics for the account being queried. The syntax requires spaces surrounding the `in` operator. Otherwise, spaces can be omitted. Conditions can be joined using the `and` operator. The `date` field is required. All other fields are optional. The `date` field values are inclusive and must be in YYYY-MM-DD format. The earliest acceptable date is 2021-03-09; earlier date values will be coerced to 2021-03-09. Values for `partnerPropertyDisplayName` and `brand` are matched case-insensitively. Examples of valid conditions are as follows: * `advanceBookingWindow = 'ADVANCE_BOOKING_WINDOW_SAME_DAY'` * `advanceBookingWindow in ('ADVANCE_BOOKING_WINDOW_SAME_DAY', 'ADVANCE_BOOKING_WINDOW_DAYS_61_TO_90')` * `brand = 'Brand A'` * `brand in ('Brand A', 'brand B')` * `date = '2021-12-03'` * `date between '2021-12-03' and '2021-12-08'` * `deviceType = 'TABLET'` * `deviceType in ('MOBILE', 'TABLET')` * `highIntentUsers = 'TRUE'` * `highIntentUsers = 'FALSE'` * `lengthOfStay = 'LENGTH_OF_STAY_NIGHTS_2'` * `lengthOfStay in ('LENGTH_OF_STAY_NIGHTS_2', 'LENGTH_OF_STAY_NIGHTS_4_TO_7')` * `propertyRegionCode = 'US'` * `propertyRegionCode in ('US', 'CA')` * `occupancy = 'OCCUPANCY_2'` * `occupancy in ('OCCUPANCY_2', 'OCCUPANCY_OVER_4')` * `partnerPropertyId = 'AAA'` * `partnerPropertyId in ('AAA', 'BBB')` * `partnerPropertyDisplayName = 'hotel A'` * `partnerPropertyDisplayName in ('Hotel A', 'HOTEL b')` * `userRegionCode = 'US'` * `userRegionCode in ('US', 'CA')`
		 * @param {number} pageSize The maximum number of participation results to return. The service may return fewer than this value. If unspecified, at most 10,000 results will be returned. The maximum value is 10,000; values above 10,000 will be coerced to 10,000.
		 * @param {string} pageToken A page token, received from a previous QueryParticipationReport request. Provide this to receive the subsequent page. When paginating, all other parameters provided to QueryParticipationReport must match the call that provided the page token.
		 * @return {QueryPropertyPerformanceReportResponse} Successful response
		 */
		Travelpartner_accounts_propertyPerformanceReportViews_query(name: string, aggregateBy: string | null | undefined, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<QueryPropertyPerformanceReportResponse> {
			return this.http.get<QueryPropertyPerformanceReportResponse>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/propertyPerformanceReportViews:query&aggregateBy=' + (aggregateBy == null ? '' : encodeURIComponent(aggregateBy)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns the account links for a Hotel Center account.
		 * Get v3/{parent}/accountLinks
		 * @param {string} parent The resource name of the account being queried. The format is `accounts/{account_id}`.
		 * @return {ListAccountLinksResponse} Successful response
		 */
		Travelpartner_accounts_accountLinks_list(parent: string): Observable<ListAccountLinksResponse> {
			return this.http.get<ListAccountLinksResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/accountLinks', {});
		}

		/**
		 * Creates a new account link between a Hotel Center account and a Google Ads account.
		 * Post v3/{parent}/accountLinks
		 * @param {string} parent The resource name of the Hotel Center account being queried. The format is `accounts/{account_id}`.
		 * @return {AccountLink} Successful response
		 */
		Travelpartner_accounts_accountLinks_create(parent: string, requestBody: AccountLink): Observable<AccountLink> {
			return this.http.post<AccountLink>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/accountLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the brands for a partner account.
		 * Get v3/{parent}/brands
		 * @param {string} parent Required. The resource name of the account being queried. The format is `accounts/{account_id}`.
		 * @return {ListBrandsResponse} Successful response
		 */
		Travelpartner_accounts_brands_list(parent: string): Observable<ListBrandsResponse> {
			return this.http.get<ListBrandsResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/brands', {});
		}

		/**
		 * Creates a new brand. Because Google detects brands from your existing properties, you only need this operation when you want to configure a brand before you send its properties to Google. Note that it might take a couple of days after your listing feed first provides a brand for the brand to appear.
		 * Post v3/{parent}/brands
		 * @param {string} parent Required. The resource name of the Hotel Center account being queried. The format is `accounts/{account_id}`.
		 * @param {string} brandId Required. The partner-determined brand identifier.
		 * @return {Brand} Successful response
		 */
		Travelpartner_accounts_brands_create(parent: string, brandId: string | null | undefined, requestBody: Brand): Observable<Brand> {
			return this.http.post<Brand>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/brands&brandId=' + (brandId == null ? '' : encodeURIComponent(brandId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of hotel views.
		 * Get v3/{parent}/hotelViews
		 * @param {string} parent The resource name of the account being queried. The format is `accounts/{account_id}`.
		 * @param {string} filter Optional. The conditions (fields and expressions) used to filter HotelViews. The syntax requires spaces surrounding the `in` operator. Otherwise, spaces can be omitted. Conditions cannot be joined. The `hotelId` field can be used to select specific hotels. The `liveOnGoogle` field can select properties that Google shows, or properties that are omitted in google search results. The `matchStatus` field can be used to filter the list of HotelViews returned for the account. Examples of valid conditions and their syntax are as follows: * `hotelId = 'hotel_ABC'` * `hotelId in ('hotel_ABC', 'hotel_XYZ')` * `liveOnGoogle = 'TRUE'` * `liveOnGoogle = 'FALSE'` * `matchStatus = 'NOT_MATCHED'` * `matchStatus in ('NOT_MATCHED', 'MATCHED', 'MAP_OVERLAP')`
		 * @param {number} pageSize Number of elements to retrieve in a single page.
		 * @param {string} pageToken Token of the page to retrieve.
		 * @return {ListHotelViewsResponse} Successful response
		 */
		Travelpartner_accounts_hotelViews_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListHotelViewsResponse> {
			return this.http.get<ListHotelViewsResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/hotelViews&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns summarized information about hotels.
		 * Get v3/{parent}/hotelViews:summarize
		 * @param {string} parent The resource name of the account being queried. The format is `accounts/{account_id}`.
		 * @return {SummarizeHotelViewsResponse} Successful response
		 */
		Travelpartner_accounts_hotelViews_summarize(parent: string): Observable<SummarizeHotelViewsResponse> {
			return this.http.get<SummarizeHotelViewsResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/hotelViews:summarize', {});
		}

		/**
		 * Returns the `Icon`s for a partner account.
		 * Get v3/{parent}/icons
		 * @param {string} parent Required. The resource name of the queried partner account. The format is `accounts/{account_id}`.
		 * @return {ListIconsResponse} Successful response
		 */
		Travelpartner_accounts_icons_list(parent: string): Observable<ListIconsResponse> {
			return this.http.get<ListIconsResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/icons', {});
		}

		/**
		 * Uploads a new icon and starts its review process. Generates an `icon_id` and includes it in the icon's resource name, which is the format `accounts/{account_id}/icons/{icon_id}` Returns HTTP status 400 and doesn't trigger the review process if the icon has any of these conditions: * Image is not in PNG format, or not convertible to PNG format. * Size less than 72 pixels * Size greater than 1200 pixels * Aspect ratio other than 1:1
		 * Post v3/{parent}/icons
		 * @param {string} parent Required. The resource name of the partner account owning the icon. The format is `accounts/{account_id}`.
		 * @return {Icon} Successful response
		 */
		Travelpartner_accounts_icons_create(parent: string, requestBody: Icon): Observable<Icon> {
			return this.http.post<Icon>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/icons', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * returns verified listings with data issues and serving eligibilities
		 * Post v3/{parent}/listings:verify
		 * @param {string} parent The resource name of the account being queried. The format is `accounts/{account_id}`.
		 * @return {VerifyListingsResponse} Successful response
		 */
		Travelpartner_accounts_listings_verify(parent: string, requestBody: VerifyListingsRequest): Observable<VerifyListingsResponse> {
			return this.http.post<VerifyListingsResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/listings:verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the available price accuracy views.
		 * Get v3/{parent}/priceAccuracyViews
		 * @param {string} parent The resource name of the account being queried. The format is `accounts/{account_id}`.
		 * @return {ListPriceAccuracyViewsResponse} Successful response
		 */
		Travelpartner_accounts_priceAccuracyViews_list(parent: string): Observable<ListPriceAccuracyViewsResponse> {
			return this.http.get<ListPriceAccuracyViewsResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/priceAccuracyViews', {});
		}

		/**
		 * Returns the price accuracy summary.
		 * Get v3/{parent}/priceAccuracyViews:summarize
		 * @param {string} parent The resource name of the account that is being queried. The format is `accounts/{account_id}`.
		 * @return {SummarizePriceAccuracyResponse} Successful response
		 */
		Travelpartner_accounts_priceAccuracyViews_summarize(parent: string): Observable<SummarizePriceAccuracyResponse> {
			return this.http.get<SummarizePriceAccuracyResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/priceAccuracyViews:summarize', {});
		}

		/**
		 * Returns the entire price coverage history.
		 * Get v3/{parent}/priceCoverageViews
		 * @param {string} parent The resource name of the account being queried. The format is `accounts/{account_id}`.
		 * @return {ListPriceCoverageViewsResponse} Successful response
		 */
		Travelpartner_accounts_priceCoverageViews_list(parent: string): Observable<ListPriceCoverageViewsResponse> {
			return this.http.get<ListPriceCoverageViewsResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/priceCoverageViews', {});
		}

		/**
		 * Returns the latest price coverage view in full detail.
		 * Get v3/{parent}/priceCoverageViews:latest
		 * @param {string} parent The resource name of the account being queried. The format is `accounts/{account_id}`.
		 * @return {PriceCoverageView} Successful response
		 */
		Travelpartner_accounts_priceCoverageViews_getLatest(parent: string): Observable<PriceCoverageView> {
			return this.http.get<PriceCoverageView>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/priceCoverageViews:latest', {});
		}

		/**
		 * Returns a list of the names of created reconciliation reports.
		 * Get v3/{parent}/reconciliationReports
		 * @param {string} parent The resource name of the account being queried. The format is `accounts/{account_id}`.
		 * @param {string} endDate End of date range to fetch files for. Format is yyyy-mm-dd[THH[:MM[:SS]]]. If empty, reports until the end of time are fetched.
		 * @param {string} startDate Beginning of date range to fetch files for. Format is yyyy-MM-dd[THH[:mm[:SS]]]. If empty, reports from the beginning of time onwards are fetched.
		 * @return {ListReconciliationReportsResponse} Successful response
		 */
		Travelpartner_accounts_reconciliationReports_list(parent: string, endDate: string | null | undefined, startDate: string | null | undefined): Observable<ListReconciliationReportsResponse> {
			return this.http.get<ListReconciliationReportsResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reconciliationReports&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)), {});
		}

		/**
		 * Creates a reconciliation report and uploads it to Google.
		 * Post v3/{parent}/reconciliationReports
		 * @param {string} parent The resource name of the account being queried. The format is `accounts/{account_id}`.
		 * @return {CreateReconciliationReportResponse} Successful response
		 */
		Travelpartner_accounts_reconciliationReports_create(parent: string, requestBody: ReconciliationReport): Observable<CreateReconciliationReportResponse> {
			return this.http.post<CreateReconciliationReportResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reconciliationReports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a reconciliation report.
		 * Post v3/{parent}/reconciliationReports:validate
		 * @param {string} parent The resource name of the account being queried. The format is `accounts/{account_id}`.
		 * @return {ValidateReconciliationReportResponse} Successful response
		 */
		Travelpartner_accounts_reconciliationReports_validate(parent: string, requestBody: ReconciliationReport): Observable<ValidateReconciliationReportResponse> {
			return this.http.post<ValidateReconciliationReportResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reconciliationReports:validate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

