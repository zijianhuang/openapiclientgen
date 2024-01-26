import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Additional information that is surfaced in AdWords. */
	export interface AdWordsLocationExtensions {

		/** Required. An alternate phone number to display on AdWords location extensions instead of the location's primary phone number. */
		adPhone?: string | null;
	}

	/** Additional information that is surfaced in AdWords. */
	export interface AdWordsLocationExtensionsFormProperties {

		/** Required. An alternate phone number to display on AdWords location extensions instead of the location's primary phone number. */
		adPhone: FormControl<string | null | undefined>,
	}
	export function CreateAdWordsLocationExtensionsFormGroup() {
		return new FormGroup<AdWordsLocationExtensionsFormProperties>({
			adPhone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes. */
	export interface Attribute {

		/** Required. The resource name for this attribute. */
		name?: string | null;

		/** Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified. */
		repeatedEnumValue?: RepeatedEnumAttributeValue;

		/** When the attribute value type is URL, this field contains the value(s) for this attribute, and the other values fields must be empty. */
		uriValues?: Array<UriAttributeValue>;

		/** Output only. The type of value that this attribute contains. This should be used to determine how to interpret the value. */
		valueType?: AttributeValueType | null;

		/** The values for this attribute. The type of the values supplied must match that expected for that attribute. This is a repeated field where multiple attribute values may be provided. Attribute types only support one value. */
		values?: Array<string>;
	}

	/** A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes. */
	export interface AttributeFormProperties {

		/** Required. The resource name for this attribute. */
		name: FormControl<string | null | undefined>,

		/** Output only. The type of value that this attribute contains. This should be used to determine how to interpret the value. */
		valueType: FormControl<AttributeValueType | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<AttributeValueType | null | undefined>(undefined),
		});

	}


	/** Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified. */
	export interface RepeatedEnumAttributeValue {

		/** Enum values that are set. */
		setValues?: Array<string>;

		/** Enum values that are unset. */
		unsetValues?: Array<string>;
	}

	/** Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified. */
	export interface RepeatedEnumAttributeValueFormProperties {
	}
	export function CreateRepeatedEnumAttributeValueFormGroup() {
		return new FormGroup<RepeatedEnumAttributeValueFormProperties>({
		});

	}


	/** Values for an attribute with a `value_type` of URL. */
	export interface UriAttributeValue {

		/** Required. The proposed URI value for this attribute. */
		uri?: string | null;
	}

	/** Values for an attribute with a `value_type` of URL. */
	export interface UriAttributeValueFormProperties {

		/** Required. The proposed URI value for this attribute. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateUriAttributeValueFormGroup() {
		return new FormGroup<UriAttributeValueFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AttributeValueType { ATTRIBUTE_VALUE_TYPE_UNSPECIFIED = 0, BOOL = 1, ENUM = 2, URL = 3, REPEATED_ENUM = 4 }


	/** Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together. */
	export interface AttributeMetadata {

		/** If true, the attribute is deprecated and should no longer be used. If deprecated, updating this attribute will not result in an error, but updates will not be saved. At some point after being deprecated, the attribute will be removed entirely and it will become an error. */
		deprecated?: boolean | null;

		/** The localized display name for the attribute, if available; otherwise, the English display name. */
		displayName?: string | null;

		/** The localized display name of the group that contains this attribute, if available; otherwise, the English group name. Related attributes are collected into a group and should be displayed together under the heading given here. */
		groupDisplayName?: string | null;

		/** The unique identifier for the attribute. */
		parent?: string | null;

		/** If true, the attribute supports multiple values. If false, only a single value should be provided. */
		repeatable?: boolean | null;

		/** For some types of attributes (for example, enums), a list of supported values and corresponding display names for those values is provided. */
		valueMetadata?: Array<AttributeValueMetadata>;

		/** The value type for the attribute. Values set and retrieved should be expected to be of this type. */
		valueType?: AttributeValueType | null;
	}

	/** Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together. */
	export interface AttributeMetadataFormProperties {

		/** If true, the attribute is deprecated and should no longer be used. If deprecated, updating this attribute will not result in an error, but updates will not be saved. At some point after being deprecated, the attribute will be removed entirely and it will become an error. */
		deprecated: FormControl<boolean | null | undefined>,

		/** The localized display name for the attribute, if available; otherwise, the English display name. */
		displayName: FormControl<string | null | undefined>,

		/** The localized display name of the group that contains this attribute, if available; otherwise, the English group name. Related attributes are collected into a group and should be displayed together under the heading given here. */
		groupDisplayName: FormControl<string | null | undefined>,

		/** The unique identifier for the attribute. */
		parent: FormControl<string | null | undefined>,

		/** If true, the attribute supports multiple values. If false, only a single value should be provided. */
		repeatable: FormControl<boolean | null | undefined>,

		/** The value type for the attribute. Values set and retrieved should be expected to be of this type. */
		valueType: FormControl<AttributeValueType | null | undefined>,
	}
	export function CreateAttributeMetadataFormGroup() {
		return new FormGroup<AttributeMetadataFormProperties>({
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			groupDisplayName: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			repeatable: new FormControl<boolean | null | undefined>(undefined),
			valueType: new FormControl<AttributeValueType | null | undefined>(undefined),
		});

	}


	/** Metadata for supported attribute values. */
	export interface AttributeValueMetadata {

		/** The display name for this value, localized where available; otherwise, in English. The value display name is intended to be used in context with the attribute display name. For example, for a "WiFi" enum attribute, this could contain "Paid" to represent paid Wi-Fi. */
		displayName?: string | null;

		/** The attribute value. */
		value?: any;
	}

	/** Metadata for supported attribute values. */
	export interface AttributeValueMetadataFormProperties {

		/** The display name for this value, localized where available; otherwise, in English. The value display name is intended to be used in context with the attribute display name. For example, for a "WiFi" enum attribute, this could contain "Paid" to represent paid Wi-Fi. */
		displayName: FormControl<string | null | undefined>,

		/** The attribute value. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateAttributeValueMetadataFormGroup() {
		return new FormGroup<AttributeValueMetadataFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** A container for all the attributes for a given location. */
	export interface Attributes {

		/** A collection of attributes that need to be updated. */
		attributes?: Array<Attribute>;

		/** Required. Google identifier for this location in the form of `locations/{location_id}/attributes`. */
		name?: string | null;
	}

	/** A container for all the attributes for a given location. */
	export interface AttributesFormProperties {

		/** Required. Google identifier for this location in the form of `locations/{location_id}/attributes`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAttributesFormGroup() {
		return new FormGroup<AttributesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BusinessCategories.BatchGetBusinessCategories. */
	export interface BatchGetCategoriesResponse {

		/** Categories that match the GConcept ids provided in the request. They will not come in the same order as category ids in the request. */
		categories?: Array<Category>;
	}

	/** Response message for BusinessCategories.BatchGetBusinessCategories. */
	export interface BatchGetCategoriesResponseFormProperties {
	}
	export function CreateBatchGetCategoriesResponseFormGroup() {
		return new FormGroup<BatchGetCategoriesResponseFormProperties>({
		});

	}


	/** A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`. */
	export interface Category {

		/** Output only. The human-readable name of the category. This is set when reading the location. When modifying the location, `category_id` must be set. */
		displayName?: string | null;

		/** Output only. More hours types that are available for this business category. */
		moreHoursTypes?: Array<MoreHoursType>;

		/** Required. A stable ID (provided by Google) for this category. The value must be specified when modifying the category (when creating or updating a location). */
		name?: string | null;

		/** Output only. A list of all the service types that are available for this business category. */
		serviceTypes?: Array<ServiceType>;
	}

	/** A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`. */
	export interface CategoryFormProperties {

		/** Output only. The human-readable name of the category. This is set when reading the location. When modifying the location, `category_id` must be set. */
		displayName: FormControl<string | null | undefined>,

		/** Required. A stable ID (provided by Google) for this category. The value must be specified when modifying the category (when creating or updating a location). */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** More hours types that a business can offers, in addition to its regular hours. */
	export interface MoreHoursType {

		/** Output only. The human-readable English display name for the hours type. */
		displayName?: string | null;

		/** Output only. A stable ID provided by Google for this hours type. */
		hoursTypeId?: string | null;

		/** Output only. The human-readable localized display name for the hours type. */
		localizedDisplayName?: string | null;
	}

	/** More hours types that a business can offers, in addition to its regular hours. */
	export interface MoreHoursTypeFormProperties {

		/** Output only. The human-readable English display name for the hours type. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. A stable ID provided by Google for this hours type. */
		hoursTypeId: FormControl<string | null | undefined>,

		/** Output only. The human-readable localized display name for the hours type. */
		localizedDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateMoreHoursTypeFormGroup() {
		return new FormGroup<MoreHoursTypeFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			hoursTypeId: new FormControl<string | null | undefined>(undefined),
			localizedDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message describing a service type that the business offers. */
	export interface ServiceType {

		/** Output only. The human-readable display name for the service type. */
		displayName?: string | null;

		/** Output only. A stable ID (provided by Google) for this service type. */
		serviceTypeId?: string | null;
	}

	/** A message describing a service type that the business offers. */
	export interface ServiceTypeFormProperties {

		/** Output only. The human-readable display name for the service type. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. A stable ID (provided by Google) for this service type. */
		serviceTypeId: FormControl<string | null | undefined>,
	}
	export function CreateServiceTypeFormGroup() {
		return new FormGroup<ServiceTypeFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			serviceTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances. */
	export interface BusinessHours {

		/** Required. A collection of times that this location is open for business. Each period represents a range of hours when the location is open during the week. */
		periods?: Array<TimePeriod>;
	}

	/** Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances. */
	export interface BusinessHoursFormProperties {
	}
	export function CreateBusinessHoursFormGroup() {
		return new FormGroup<BusinessHoursFormProperties>({
		});

	}


	/** Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day. */
	export interface TimePeriod {

		/** Required. Indicates the day of the week this period ends on. */
		closeDay?: TimePeriodCloseDay | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		closeTime?: TimeOfDay;

		/** Required. Indicates the day of the week this period starts on. */
		openDay?: TimePeriodCloseDay | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		openTime?: TimeOfDay;
	}

	/** Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day. */
	export interface TimePeriodFormProperties {

		/** Required. Indicates the day of the week this period ends on. */
		closeDay: FormControl<TimePeriodCloseDay | null | undefined>,

		/** Required. Indicates the day of the week this period starts on. */
		openDay: FormControl<TimePeriodCloseDay | null | undefined>,
	}
	export function CreateTimePeriodFormGroup() {
		return new FormGroup<TimePeriodFormProperties>({
			closeDay: new FormControl<TimePeriodCloseDay | null | undefined>(undefined),
			openDay: new FormControl<TimePeriodCloseDay | null | undefined>(undefined),
		});

	}

	export enum TimePeriodCloseDay { DAY_OF_WEEK_UNSPECIFIED = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6, SUNDAY = 7 }


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


	/** A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask. */
	export interface Categories {

		/** Optional. Additional categories to describe your business. Categories help your customers find accurate, specific results for services they're interested in. To keep your business information accurate and live, make sure that you use as few categories as possible to describe your overall core business. Choose categories that are as specific as possible, but representative of your main business. */
		additionalCategories?: Array<Category>;

		/** A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`. */
		primaryCategory?: Category;
	}

	/** A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask. */
	export interface CategoriesFormProperties {
	}
	export function CreateCategoriesFormGroup() {
		return new FormGroup<CategoriesFormProperties>({
		});

	}


	/** A chain is a brand that your business's locations can be affiliated with. */
	export interface Chain {

		/** Names of the chain. */
		chainNames?: Array<ChainName>;

		/** Number of locations that are part of this chain. */
		locationCount?: number | null;

		/** Required. The chain's resource name, in the format `chains/{chain_id}`. */
		name?: string | null;

		/** Websites of the chain. */
		websites?: Array<ChainUri>;
	}

	/** A chain is a brand that your business's locations can be affiliated with. */
	export interface ChainFormProperties {

		/** Number of locations that are part of this chain. */
		locationCount: FormControl<number | null | undefined>,

		/** Required. The chain's resource name, in the format `chains/{chain_id}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateChainFormGroup() {
		return new FormGroup<ChainFormProperties>({
			locationCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Name to be used when displaying the chain. */
	export interface ChainName {

		/** The display name for this chain. */
		displayName?: string | null;

		/** The BCP 47 code of language of the name. */
		languageCode?: string | null;
	}

	/** Name to be used when displaying the chain. */
	export interface ChainNameFormProperties {

		/** The display name for this chain. */
		displayName: FormControl<string | null | undefined>,

		/** The BCP 47 code of language of the name. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateChainNameFormGroup() {
		return new FormGroup<ChainNameFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Url to be used when displaying the chain. */
	export interface ChainUri {

		/** The uri for this chain. */
		uri?: string | null;
	}

	/** Url to be used when displaying the chain. */
	export interface ChainUriFormProperties {

		/** The uri for this chain. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateChainUriFormGroup() {
		return new FormGroup<ChainUriFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
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


	/** Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface. */
	export interface FreeFormServiceItem {

		/** Required. This field represents the category name (i.e. the category's stable ID). The `category` and `service_type_id` should match the possible combinations provided in the `Category` message. */
		category?: string | null;

		/** Label to be used when displaying the price list, section, or item. */
		label?: Label;
	}

	/** Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface. */
	export interface FreeFormServiceItemFormProperties {

		/** Required. This field represents the category name (i.e. the category's stable ID). The `category` and `service_type_id` should match the possible combinations provided in the `Category` message. */
		category: FormControl<string | null | undefined>,
	}
	export function CreateFreeFormServiceItemFormGroup() {
		return new FormGroup<FreeFormServiceItemFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Label to be used when displaying the price list, section, or item. */
	export interface Label {

		/** Optional. Description of the price list, section, or item. */
		description?: string | null;

		/** Required. Display name for the price list, section, or item. */
		displayName?: string | null;

		/** Optional. The BCP-47 language code that these strings apply for. Only one set of labels may be set per language. */
		languageCode?: string | null;
	}

	/** Label to be used when displaying the price list, section, or item. */
	export interface LabelFormProperties {

		/** Optional. Description of the price list, section, or item. */
		description: FormControl<string | null | undefined>,

		/** Required. Display name for the price list, section, or item. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. The BCP-47 language code that these strings apply for. Only one set of labels may be set per language. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateLabelFormGroup() {
		return new FormGroup<LabelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed. */
	export interface GoogleLocation {

		/** A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories. */
		location?: Location;

		/** Resource name of this GoogleLocation, in the format `googleLocations/{googleLocationId}`. */
		name?: string | null;

		/** A URL that will redirect the user to the request admin rights UI. This field is only present if the location has already been claimed by any user, including the current user. */
		requestAdminRightsUri?: string | null;
	}

	/** Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed. */
	export interface GoogleLocationFormProperties {

		/** Resource name of this GoogleLocation, in the format `googleLocations/{googleLocationId}`. */
		name: FormControl<string | null | undefined>,

		/** A URL that will redirect the user to the request admin rights UI. This field is only present if the location has already been claimed by any user, including the current user. */
		requestAdminRightsUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLocationFormGroup() {
		return new FormGroup<GoogleLocationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			requestAdminRightsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories. */
	export interface Location {

		/** Additional information that is surfaced in AdWords. */
		adWordsLocationExtensions?: AdWordsLocationExtensions;

		/** A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask. */
		categories?: Categories;

		/** Optional. A collection of free-form strings to allow you to tag your business. These labels are NOT user facing; only you can see them. Must be between 1-255 characters per label. */
		labels?: Array<string>;

		/** Immutable. The language of the location. Set during creation and not updateable. */
		languageCode?: string | null;

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		latlng?: LatLng;

		/** Additional non-user-editable information about the location. */
		metadata?: Metadata;

		/** Optional. More hours for a business's different departments or specific customers. */
		moreHours?: Array<MoreHours>;

		/** Google identifier for this location in the form: `locations/{location_id}`. */
		name?: string | null;

		/** Information related to the opening state of the business. */
		openInfo?: OpenInfo;

		/** A collection of phone numbers for the business. During updates, both fields must be set. Clients may not update just the primary or additional phone numbers using the update mask. International phone format is preferred, such as "+1 415 555 0132", see more in (https://developers.google.com/style/phone-numbers#international-phone-numbers). */
		phoneNumbers?: PhoneNumbers;

		/** All information pertaining to the location's profile. */
		profile?: Profile;

		/** Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances. */
		regularHours?: BusinessHours;

		/** Information of all parent and children locations related to this one. */
		relationshipData?: RelationshipData;

		/** Service area businesses provide their service at the customer's location (for example, a locksmith or plumber). */
		serviceArea?: ServiceAreaBusiness;

		/** Optional. List of services supported by merchants. A service can be haircut, install water heater, etc. Duplicated service items will be removed automatically. */
		serviceItems?: Array<ServiceItem>;

		/** Represents a set of time periods when a location's operational hours differ from its normal business hours. */
		specialHours?: SpecialHours;

		/** Optional. External identifier for this location, which must be unique within a given account. This is a means of associating the location with your own records. */
		storeCode?: string | null;

		/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
		storefrontAddress?: PostalAddress;

		/** Required. Location name should reflect your business's real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, `Address`, `Categories`). Don't add unnecessary information to your name (for example, prefer "Google" over "Google Inc. - Mountain View Corporate Headquarters"). Don't include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, "Chase ATM in Duane Reade"). */
		title?: string | null;

		/** Optional. A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand. */
		websiteUri?: string | null;
	}

	/** A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories. */
	export interface LocationFormProperties {

		/** Immutable. The language of the location. Set during creation and not updateable. */
		languageCode: FormControl<string | null | undefined>,

		/** Google identifier for this location in the form: `locations/{location_id}`. */
		name: FormControl<string | null | undefined>,

		/** Optional. External identifier for this location, which must be unique within a given account. This is a means of associating the location with your own records. */
		storeCode: FormControl<string | null | undefined>,

		/** Required. Location name should reflect your business's real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, `Address`, `Categories`). Don't add unnecessary information to your name (for example, prefer "Google" over "Google Inc. - Mountain View Corporate Headquarters"). Don't include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, "Chase ATM in Duane Reade"). */
		title: FormControl<string | null | undefined>,

		/** Optional. A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand. */
		websiteUri: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			storeCode: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			websiteUri: new FormControl<string | null | undefined>(undefined),
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


	/** Additional non-user-editable information about the location. */
	export interface Metadata {

		/** Output only. Indicates whether the location can be deleted using the API. */
		canDelete?: boolean | null;

		/** Output only. Indicates if the listing is eligible for business calls. */
		canHaveBusinessCalls?: boolean | null;

		/** Output only. Indicates if the listing is eligible for food menu. */
		canHaveFoodMenus?: boolean | null;

		/** Output only. Indicates if the listing can modify the service list. */
		canModifyServiceList?: boolean | null;

		/** Output only. Indicates whether the location can operate on Health data. */
		canOperateHealthData?: boolean | null;

		/** Output only. Indicates if the listing can manage local posts. */
		canOperateLocalPost?: boolean | null;

		/** Output only. Indicates whether the location can operate on Lodging data. */
		canOperateLodgingData?: boolean | null;

		/** Output only. The location resource that this location duplicates. */
		duplicateLocation?: string | null;

		/** Output only. Indicates whether the place ID associated with this location has updates that need to be updated or rejected by the client. If this boolean is set, you should call the `getGoogleUpdated` method to lookup information that's needs to be verified. */
		hasGoogleUpdated?: boolean | null;

		/** Output only. Indicates whether any of this Location's properties are in the edit pending state. */
		hasPendingEdits?: boolean | null;

		/** Output only. Indicates if the listing has Voice of Merchant. If this boolean is false, you should call the locations.getVoiceOfMerchantState API to get details as to why they do not have Voice of Merchant. */
		hasVoiceOfMerchant?: boolean | null;

		/** Output only. A link to the location on Maps. */
		mapsUri?: string | null;

		/** Output only. A link to the page on Google Search where a customer can leave a review for the location. */
		newReviewUri?: string | null;

		/** Output only. If this locationappears on Google Maps, this field is populated with the place ID for the location. This ID can be used in various Places APIs. This field can be set during Create calls, but not for Update. */
		placeId?: string | null;
	}

	/** Additional non-user-editable information about the location. */
	export interface MetadataFormProperties {

		/** Output only. Indicates whether the location can be deleted using the API. */
		canDelete: FormControl<boolean | null | undefined>,

		/** Output only. Indicates if the listing is eligible for business calls. */
		canHaveBusinessCalls: FormControl<boolean | null | undefined>,

		/** Output only. Indicates if the listing is eligible for food menu. */
		canHaveFoodMenus: FormControl<boolean | null | undefined>,

		/** Output only. Indicates if the listing can modify the service list. */
		canModifyServiceList: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether the location can operate on Health data. */
		canOperateHealthData: FormControl<boolean | null | undefined>,

		/** Output only. Indicates if the listing can manage local posts. */
		canOperateLocalPost: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether the location can operate on Lodging data. */
		canOperateLodgingData: FormControl<boolean | null | undefined>,

		/** Output only. The location resource that this location duplicates. */
		duplicateLocation: FormControl<string | null | undefined>,

		/** Output only. Indicates whether the place ID associated with this location has updates that need to be updated or rejected by the client. If this boolean is set, you should call the `getGoogleUpdated` method to lookup information that's needs to be verified. */
		hasGoogleUpdated: FormControl<boolean | null | undefined>,

		/** Output only. Indicates whether any of this Location's properties are in the edit pending state. */
		hasPendingEdits: FormControl<boolean | null | undefined>,

		/** Output only. Indicates if the listing has Voice of Merchant. If this boolean is false, you should call the locations.getVoiceOfMerchantState API to get details as to why they do not have Voice of Merchant. */
		hasVoiceOfMerchant: FormControl<boolean | null | undefined>,

		/** Output only. A link to the location on Maps. */
		mapsUri: FormControl<string | null | undefined>,

		/** Output only. A link to the page on Google Search where a customer can leave a review for the location. */
		newReviewUri: FormControl<string | null | undefined>,

		/** Output only. If this locationappears on Google Maps, this field is populated with the place ID for the location. This ID can be used in various Places APIs. This field can be set during Create calls, but not for Update. */
		placeId: FormControl<string | null | undefined>,
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
			canDelete: new FormControl<boolean | null | undefined>(undefined),
			canHaveBusinessCalls: new FormControl<boolean | null | undefined>(undefined),
			canHaveFoodMenus: new FormControl<boolean | null | undefined>(undefined),
			canModifyServiceList: new FormControl<boolean | null | undefined>(undefined),
			canOperateHealthData: new FormControl<boolean | null | undefined>(undefined),
			canOperateLocalPost: new FormControl<boolean | null | undefined>(undefined),
			canOperateLodgingData: new FormControl<boolean | null | undefined>(undefined),
			duplicateLocation: new FormControl<string | null | undefined>(undefined),
			hasGoogleUpdated: new FormControl<boolean | null | undefined>(undefined),
			hasPendingEdits: new FormControl<boolean | null | undefined>(undefined),
			hasVoiceOfMerchant: new FormControl<boolean | null | undefined>(undefined),
			mapsUri: new FormControl<string | null | undefined>(undefined),
			newReviewUri: new FormControl<string | null | undefined>(undefined),
			placeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The time periods during which a location is open for certain types of business. */
	export interface MoreHours {

		/** Required. Type of hours. Clients should call {#link businessCategories:BatchGet} to get supported hours types for categories of their locations. */
		hoursTypeId?: string | null;

		/** Required. A collection of times that this location is open. Each period represents a range of hours when the location is open during the week. */
		periods?: Array<TimePeriod>;
	}

	/** The time periods during which a location is open for certain types of business. */
	export interface MoreHoursFormProperties {

		/** Required. Type of hours. Clients should call {#link businessCategories:BatchGet} to get supported hours types for categories of their locations. */
		hoursTypeId: FormControl<string | null | undefined>,
	}
	export function CreateMoreHoursFormGroup() {
		return new FormGroup<MoreHoursFormProperties>({
			hoursTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information related to the opening state of the business. */
	export interface OpenInfo {

		/** Output only. Indicates whether this business is eligible for re-open. */
		canReopen?: boolean | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		openingDate?: Date;

		/** Required. Indicates whether or not the Location is currently open for business. All locations are open by default, unless updated to be closed. */
		status?: OpenInfoStatus | null;
	}

	/** Information related to the opening state of the business. */
	export interface OpenInfoFormProperties {

		/** Output only. Indicates whether this business is eligible for re-open. */
		canReopen: FormControl<boolean | null | undefined>,

		/** Required. Indicates whether or not the Location is currently open for business. All locations are open by default, unless updated to be closed. */
		status: FormControl<OpenInfoStatus | null | undefined>,
	}
	export function CreateOpenInfoFormGroup() {
		return new FormGroup<OpenInfoFormProperties>({
			canReopen: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<OpenInfoStatus | null | undefined>(undefined),
		});

	}

	export enum OpenInfoStatus { OPEN_FOR_BUSINESS_UNSPECIFIED = 0, OPEN = 1, CLOSED_PERMANENTLY = 2, CLOSED_TEMPORARILY = 3 }


	/** A collection of phone numbers for the business. During updates, both fields must be set. Clients may not update just the primary or additional phone numbers using the update mask. International phone format is preferred, such as "+1 415 555 0132", see more in (https://developers.google.com/style/phone-numbers#international-phone-numbers). */
	export interface PhoneNumbers {

		/** Optional. Up to two phone numbers (mobile or landline, no fax) at which your business can be called, in addition to your primary phone number. */
		additionalPhones?: Array<string>;

		/** Required. A phone number that connects to your individual business location as directly as possible. Use a local phone number instead of a central, call center helpline number whenever possible. */
		primaryPhone?: string | null;
	}

	/** A collection of phone numbers for the business. During updates, both fields must be set. Clients may not update just the primary or additional phone numbers using the update mask. International phone format is preferred, such as "+1 415 555 0132", see more in (https://developers.google.com/style/phone-numbers#international-phone-numbers). */
	export interface PhoneNumbersFormProperties {

		/** Required. A phone number that connects to your individual business location as directly as possible. Use a local phone number instead of a central, call center helpline number whenever possible. */
		primaryPhone: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumbersFormGroup() {
		return new FormGroup<PhoneNumbersFormProperties>({
			primaryPhone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** All information pertaining to the location's profile. */
	export interface Profile {

		/** Required. Description of the location in your own voice, not editable by anyone else. */
		description?: string | null;
	}

	/** All information pertaining to the location's profile. */
	export interface ProfileFormProperties {

		/** Required. Description of the location in your own voice, not editable by anyone else. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information of all parent and children locations related to this one. */
	export interface RelationshipData {

		/** The list of children locations that this location has relations with. */
		childrenLocations?: Array<RelevantLocation>;

		/** The resource name of the Chain that this location is member of. How to find Chain ID */
		parentChain?: string | null;

		/** Information about another location that is related to current one. The relation can be any one of DEPARTMENT_OF or INDEPENDENT_ESTABLISHMENT_OF, and the location specified here can be on either side (parent/child) of the location. */
		parentLocation?: RelevantLocation;
	}

	/** Information of all parent and children locations related to this one. */
	export interface RelationshipDataFormProperties {

		/** The resource name of the Chain that this location is member of. How to find Chain ID */
		parentChain: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipDataFormGroup() {
		return new FormGroup<RelationshipDataFormProperties>({
			parentChain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about another location that is related to current one. The relation can be any one of DEPARTMENT_OF or INDEPENDENT_ESTABLISHMENT_OF, and the location specified here can be on either side (parent/child) of the location. */
	export interface RelevantLocation {

		/** Required. Specify the location that is on the other side of the relation by its placeID. */
		placeId?: string | null;

		/** Required. The type of the relationship. */
		relationType?: RelevantLocationRelationType | null;
	}

	/** Information about another location that is related to current one. The relation can be any one of DEPARTMENT_OF or INDEPENDENT_ESTABLISHMENT_OF, and the location specified here can be on either side (parent/child) of the location. */
	export interface RelevantLocationFormProperties {

		/** Required. Specify the location that is on the other side of the relation by its placeID. */
		placeId: FormControl<string | null | undefined>,

		/** Required. The type of the relationship. */
		relationType: FormControl<RelevantLocationRelationType | null | undefined>,
	}
	export function CreateRelevantLocationFormGroup() {
		return new FormGroup<RelevantLocationFormProperties>({
			placeId: new FormControl<string | null | undefined>(undefined),
			relationType: new FormControl<RelevantLocationRelationType | null | undefined>(undefined),
		});

	}

	export enum RelevantLocationRelationType { RELATION_TYPE_UNSPECIFIED = 0, DEPARTMENT_OF = 1, INDEPENDENT_ESTABLISHMENT_IN = 2 }


	/** Service area businesses provide their service at the customer's location (for example, a locksmith or plumber). */
	export interface ServiceAreaBusiness {

		/** Required. Indicates the type of the service area business. */
		businessType?: ServiceAreaBusinessBusinessType | null;

		/** Defines the union of areas represented by a set of places. */
		places?: Places;

		/** Immutable. CLDR region code of the country/region that this service area business is based in. See http://cldr.unicode.org/ and http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. This field is required for CUSTOMER_LOCATION_ONLY businesses, and is ignored otherwise. The region specified here can be different from regions for the areas that this business serves (e.g. service area businesses that provide services in regions other than the one that they are based in). If this location requires verification after creation, the address provided for verification purposes *must* be located within this region, and the business owner or their authorized representative *must* be able to receive postal mail at the provided verification address. */
		regionCode?: string | null;
	}

	/** Service area businesses provide their service at the customer's location (for example, a locksmith or plumber). */
	export interface ServiceAreaBusinessFormProperties {

		/** Required. Indicates the type of the service area business. */
		businessType: FormControl<ServiceAreaBusinessBusinessType | null | undefined>,

		/** Immutable. CLDR region code of the country/region that this service area business is based in. See http://cldr.unicode.org/ and http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. This field is required for CUSTOMER_LOCATION_ONLY businesses, and is ignored otherwise. The region specified here can be different from regions for the areas that this business serves (e.g. service area businesses that provide services in regions other than the one that they are based in). If this location requires verification after creation, the address provided for verification purposes *must* be located within this region, and the business owner or their authorized representative *must* be able to receive postal mail at the provided verification address. */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateServiceAreaBusinessFormGroup() {
		return new FormGroup<ServiceAreaBusinessFormProperties>({
			businessType: new FormControl<ServiceAreaBusinessBusinessType | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceAreaBusinessBusinessType { BUSINESS_TYPE_UNSPECIFIED = 0, CUSTOMER_LOCATION_ONLY = 1, CUSTOMER_AND_BUSINESS_LOCATION = 2 }


	/** Defines the union of areas represented by a set of places. */
	export interface Places {

		/** The areas represented by place IDs. Limited to a maximum of 20 places. */
		placeInfos?: Array<PlaceInfo>;
	}

	/** Defines the union of areas represented by a set of places. */
	export interface PlacesFormProperties {
	}
	export function CreatePlacesFormGroup() {
		return new FormGroup<PlacesFormProperties>({
		});

	}


	/** Defines an area that's represented by a place ID. */
	export interface PlaceInfo {

		/** Required. The ID of the place. Must correspond to a region. (https://developers.google.com/places/web-service/supported_types#table3) */
		placeId?: string | null;

		/** Required. The localized name of the place. For example, `Scottsdale, AZ`. */
		placeName?: string | null;
	}

	/** Defines an area that's represented by a place ID. */
	export interface PlaceInfoFormProperties {

		/** Required. The ID of the place. Must correspond to a region. (https://developers.google.com/places/web-service/supported_types#table3) */
		placeId: FormControl<string | null | undefined>,

		/** Required. The localized name of the place. For example, `Scottsdale, AZ`. */
		placeName: FormControl<string | null | undefined>,
	}
	export function CreatePlaceInfoFormGroup() {
		return new FormGroup<PlaceInfoFormProperties>({
			placeId: new FormControl<string | null | undefined>(undefined),
			placeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service. */
	export interface ServiceItem {

		/** Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface. */
		freeFormServiceItem?: FreeFormServiceItem;

		/** Represents an amount of money with its currency type. */
		price?: Money;

		/** Represents a structured service offered by the merchant. For eg: toilet_installation. */
		structuredServiceItem?: StructuredServiceItem;
	}

	/** A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service. */
	export interface ServiceItemFormProperties {
	}
	export function CreateServiceItemFormGroup() {
		return new FormGroup<ServiceItemFormProperties>({
		});

	}


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


	/** Represents a structured service offered by the merchant. For eg: toilet_installation. */
	export interface StructuredServiceItem {

		/** Optional. Description of structured service item. The character limit is 300. */
		description?: string | null;

		/** Required. The `service_type_id` field is a Google provided unique ID that can be found in `ServiceType`. This information is provided by `BatchGetCategories` rpc service. */
		serviceTypeId?: string | null;
	}

	/** Represents a structured service offered by the merchant. For eg: toilet_installation. */
	export interface StructuredServiceItemFormProperties {

		/** Optional. Description of structured service item. The character limit is 300. */
		description: FormControl<string | null | undefined>,

		/** Required. The `service_type_id` field is a Google provided unique ID that can be found in `ServiceType`. This information is provided by `BatchGetCategories` rpc service. */
		serviceTypeId: FormControl<string | null | undefined>,
	}
	export function CreateStructuredServiceItemFormGroup() {
		return new FormGroup<StructuredServiceItemFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			serviceTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a set of time periods when a location's operational hours differ from its normal business hours. */
	export interface SpecialHours {

		/** Required. A list of exceptions to the business's regular hours. */
		specialHourPeriods?: Array<SpecialHourPeriod>;
	}

	/** Represents a set of time periods when a location's operational hours differ from its normal business hours. */
	export interface SpecialHoursFormProperties {
	}
	export function CreateSpecialHoursFormGroup() {
		return new FormGroup<SpecialHoursFormProperties>({
		});

	}


	/** Represents a single time period when a location's operational hours differ from its normal business hours. A special hour period must represent a range of less than 24 hours. The `open_time` and `start_date` must predate the `close_time` and `end_date`. The `close_time` and `end_date` can extend to 11:59 a.m. on the day after the specified `start_date`. For example, the following inputs are valid: start_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=11:59 The following inputs are not valid: start_date=2015-11-23, open_time=13:00, close_time=11:59 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=12:00 start_date=2015-11-23, end_date=2015-11-25, open_time=08:00, close_time=18:00 */
	export interface SpecialHourPeriod {

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		closeTime?: TimeOfDay;

		/** Optional. If true, `end_date`, `open_time`, and `close_time` are ignored, and the date specified in `start_date` is treated as the location being closed for the entire day. */
		closed?: boolean | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		endDate?: Date;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		openTime?: TimeOfDay;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		startDate?: Date;
	}

	/** Represents a single time period when a location's operational hours differ from its normal business hours. A special hour period must represent a range of less than 24 hours. The `open_time` and `start_date` must predate the `close_time` and `end_date`. The `close_time` and `end_date` can extend to 11:59 a.m. on the day after the specified `start_date`. For example, the following inputs are valid: start_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=11:59 The following inputs are not valid: start_date=2015-11-23, open_time=13:00, close_time=11:59 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=12:00 start_date=2015-11-23, end_date=2015-11-25, open_time=08:00, close_time=18:00 */
	export interface SpecialHourPeriodFormProperties {

		/** Optional. If true, `end_date`, `open_time`, and `close_time` are ignored, and the date specified in `start_date` is treated as the location being closed for the entire day. */
		closed: FormControl<boolean | null | undefined>,
	}
	export function CreateSpecialHourPeriodFormGroup() {
		return new FormGroup<SpecialHourPeriodFormProperties>({
			closed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
	export interface PostalAddress {

		/** Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas). */
		addressLines?: Array<string>;

		/** Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated. */
		administrativeArea?: string | null;

		/** Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en". */
		languageCode?: string | null;

		/** Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines. */
		locality?: string | null;

		/** Optional. The name of the organization at the address. */
		organization?: string | null;

		/** Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.). */
		postalCode?: string | null;

		/** Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information. */
		recipients?: Array<string>;

		/** Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
		regionCode?: string | null;

		/** The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions. */
		revision?: number | null;

		/** Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire). */
		sortingCode?: string | null;

		/** Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts. */
		sublocality?: string | null;
	}

	/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
	export interface PostalAddressFormProperties {

		/** Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated. */
		administrativeArea: FormControl<string | null | undefined>,

		/** Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en". */
		languageCode: FormControl<string | null | undefined>,

		/** Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines. */
		locality: FormControl<string | null | undefined>,

		/** Optional. The name of the organization at the address. */
		organization: FormControl<string | null | undefined>,

		/** Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.). */
		postalCode: FormControl<string | null | undefined>,

		/** Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
		regionCode: FormControl<string | null | undefined>,

		/** The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions. */
		revision: FormControl<number | null | undefined>,

		/** Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire). */
		sortingCode: FormControl<string | null | undefined>,

		/** Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts. */
		sublocality: FormControl<string | null | undefined>,
	}
	export function CreatePostalAddressFormGroup() {
		return new FormGroup<PostalAddressFormProperties>({
			administrativeArea: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			sortingCode: new FormControl<string | null | undefined>(undefined),
			sublocality: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a location that was modified by Google. */
	export interface GoogleUpdatedLocation {

		/** The fields that Google updated. */
		diffMask?: string | null;

		/** A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories. */
		location?: Location;

		/** The fields that have pending edits that haven't yet been pushed to Maps and Search. */
		pendingMask?: string | null;
	}

	/** Represents a location that was modified by Google. */
	export interface GoogleUpdatedLocationFormProperties {

		/** The fields that Google updated. */
		diffMask: FormControl<string | null | undefined>,

		/** The fields that have pending edits that haven't yet been pushed to Maps and Search. */
		pendingMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleUpdatedLocationFormGroup() {
		return new FormGroup<GoogleUpdatedLocationFormProperties>({
			diffMask: new FormControl<string | null | undefined>(undefined),
			pendingMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for AttributesService.ListAttributeMetadata. */
	export interface ListAttributeMetadataResponse {

		/** A collection of attribute metadata for the available attributes. */
		attributeMetadata?: Array<AttributeMetadata>;

		/** If the number of attributes exceeded the requested page size, this field will be populated with a token to fetch the next page of attributes on a subsequent call to `attributes.list`. If there are no more attributes, this field will not be present in the response. */
		nextPageToken?: string | null;
	}

	/** Response for AttributesService.ListAttributeMetadata. */
	export interface ListAttributeMetadataResponseFormProperties {

		/** If the number of attributes exceeded the requested page size, this field will be populated with a token to fetch the next page of attributes on a subsequent call to `attributes.list`. If there are no more attributes, this field will not be present in the response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAttributeMetadataResponseFormGroup() {
		return new FormGroup<ListAttributeMetadataResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BusinessCategories.ListCategories. */
	export interface ListCategoriesResponse {

		/** The matching categories based on the requested parameters. */
		categories?: Array<Category>;

		/** If the number of categories exceeded the requested page size, this field will be populated with a token to fetch the next page of categories on a subsequent call to `ListCategories`. */
		nextPageToken?: string | null;
	}

	/** Response message for BusinessCategories.ListCategories. */
	export interface ListCategoriesResponseFormProperties {

		/** If the number of categories exceeded the requested page size, this field will be populated with a token to fetch the next page of categories on a subsequent call to `ListCategories`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCategoriesResponseFormGroup() {
		return new FormGroup<ListCategoriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** The locations. */
		locations?: Array<Location>;

		/** If the number of locations exceeded the requested page size, this field is populated with a token to fetch the next page of locations on a subsequent call to `ListLocations`. If there are no more locations, this field is not present in the response. */
		nextPageToken?: string | null;

		/** The approximate number of Locations in the list irrespective of pagination. This field will only be returned if `filter` is used as a query parameter. */
		totalSize?: number | null;
	}

	/** Response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** If the number of locations exceeded the requested page size, this field is populated with a token to fetch the next page of locations on a subsequent call to `ListLocations`. If there are no more locations, this field is not present in the response. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The approximate number of Locations in the list irrespective of pagination. This field will only be returned if `filter` is used as a query parameter. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for Locations.SearchChains. */
	export interface SearchChainsResponse {

		/** Chains that match the queried chain_display_name in SearchChainsRequest. If there are no matches, this field will be empty. Results are listed in order of relevance. */
		chains?: Array<Chain>;
	}

	/** Response message for Locations.SearchChains. */
	export interface SearchChainsResponseFormProperties {
	}
	export function CreateSearchChainsResponseFormGroup() {
		return new FormGroup<SearchChainsResponseFormProperties>({
		});

	}


	/** Request message for GoogleLocations.SearchGoogleLocations. */
	export interface SearchGoogleLocationsRequest {

		/** A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories. */
		location?: Location;

		/** The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination. */
		pageSize?: number | null;

		/** Text query to search for. The search results from a query string will be less accurate than if providing an exact location, but can provide more inexact matches. */
		query?: string | null;
	}

	/** Request message for GoogleLocations.SearchGoogleLocations. */
	export interface SearchGoogleLocationsRequestFormProperties {

		/** The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination. */
		pageSize: FormControl<number | null | undefined>,

		/** Text query to search for. The search results from a query string will be less accurate than if providing an exact location, but can provide more inexact matches. */
		query: FormControl<string | null | undefined>,
	}
	export function CreateSearchGoogleLocationsRequestFormGroup() {
		return new FormGroup<SearchGoogleLocationsRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for GoogleLocations.SearchGoogleLocations. */
	export interface SearchGoogleLocationsResponse {

		/** A collection of GoogleLocations that are potential matches to the specified request, listed in order from most to least accuracy. */
		googleLocations?: Array<GoogleLocation>;
	}

	/** Response message for GoogleLocations.SearchGoogleLocations. */
	export interface SearchGoogleLocationsResponseFormProperties {
	}
	export function CreateSearchGoogleLocationsResponseFormGroup() {
		return new FormGroup<SearchGoogleLocationsResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the list of attributes that would be available for a location with the given primary category and country.
		 * Get v1/attributes
		 * @param {string} categoryName The primary category stable ID to find available attributes. Must be of the format categories/{category_id}.
		 * @param {string} languageCode The BCP 47 code of language to get attribute display names in. If this language is not available, they will be provided in English.
		 * @param {number} pageSize How many attributes to include per page. Default is 200, minimum is 1.
		 * @param {string} pageToken If specified, the next page of attribute metadata is retrieved.
		 * @param {string} parent Resource name of the location to look up available attributes. If this field is set, category_name, region_code, language_code and show_all are not required and must not be set.
		 * @param {string} regionCode The ISO 3166-1 alpha-2 country code to find available attributes.
		 * @param {boolean} showAll Metadata for all available attributes are returned when this field is set to true, disregarding parent and category_name fields. language_code and region_code are required when show_all is set to true.
		 * @return {ListAttributeMetadataResponse} Successful response
		 */
		Mybusinessbusinessinformation_attributes_list(categoryName: string | null | undefined, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined, regionCode: string | null | undefined, showAll: boolean | null | undefined): Observable<ListAttributeMetadataResponse> {
			return this.http.get<ListAttributeMetadataResponse>(this.baseUri + 'v1/attributes?categoryName=' + (categoryName == null ? '' : encodeURIComponent(categoryName)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)) + '&regionCode=' + (regionCode == null ? '' : encodeURIComponent(regionCode)) + '&showAll=' + showAll, {});
		}

		/**
		 * Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').
		 * Get v1/categories
		 * @param {string} filter Optional. Filter string from user. The only field that supported is `displayName`. Eg: `filter=displayName=foo`.
		 * @param {string} languageCode Required. The BCP 47 code of language.
		 * @param {number} pageSize Optional. How many categories to fetch per page. Default is 100, minimum is 1, and maximum page size is 100.
		 * @param {string} pageToken Optional. If specified, the next page of categories will be fetched.
		 * @param {string} regionCode Required. The ISO 3166-1 alpha-2 country code.
		 * @param {Mybusinessbusinessinformation_categories_listView} view Required. Specifies which parts to the Category resource should be returned in the response.
		 * @return {ListCategoriesResponse} Successful response
		 */
		Mybusinessbusinessinformation_categories_list(filter: string | null | undefined, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, regionCode: string | null | undefined, view: Mybusinessbusinessinformation_categories_listView | null | undefined): Observable<ListCategoriesResponse> {
			return this.http.get<ListCategoriesResponse>(this.baseUri + 'v1/categories?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&regionCode=' + (regionCode == null ? '' : encodeURIComponent(regionCode)) + '&view=' + view, {});
		}

		/**
		 * Returns a list of business categories for the provided language and GConcept ids.
		 * Get v1/categories:batchGet
		 * @param {string} languageCode Required. The BCP 47 code of language that the category names should be returned in.
		 * @param {Array<string>} names Required. At least one name must be set. The GConcept ids the localized category names should be returned for. To return details for more than one category, repeat this parameter in the request.
		 * @param {string} regionCode Optional. The ISO 3166-1 alpha-2 country code used to infer non-standard language.
		 * @param {Mybusinessbusinessinformation_categories_listView} view Required. Specifies which parts to the Category resource should be returned in the response.
		 * @return {BatchGetCategoriesResponse} Successful response
		 */
		Mybusinessbusinessinformation_categories_batchGet(languageCode: string | null | undefined, names: Array<string> | null | undefined, regionCode: string | null | undefined, view: Mybusinessbusinessinformation_categories_listView | null | undefined): Observable<BatchGetCategoriesResponse> {
			return this.http.get<BatchGetCategoriesResponse>(this.baseUri + 'v1/categories:batchGet?languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&') + '&regionCode=' + (regionCode == null ? '' : encodeURIComponent(regionCode)) + '&view=' + view, {});
		}

		/**
		 * Searches the chain based on chain name.
		 * Get v1/chains:search
		 * @param {string} chainName Required. Search for a chain by its name. Exact/partial/fuzzy/related queries are supported. Examples: "walmart", "wal-mart", "walmmmart", "沃尔玛"
		 * @param {number} pageSize The maximum number of matched chains to return from this query. The default is 10. The maximum possible value is 500.
		 * @return {SearchChainsResponse} Successful response
		 */
		Mybusinessbusinessinformation_chains_search(chainName: string | null | undefined, pageSize: number | null | undefined): Observable<SearchChainsResponse> {
			return this.http.get<SearchChainsResponse>(this.baseUri + 'v1/chains:search?chainName=' + (chainName == null ? '' : encodeURIComponent(chainName)) + '&pageSize=' + pageSize, {});
		}

		/**
		 * Search all of the possible locations that are a match to the specified request.
		 * Post v1/googleLocations:search
		 * @return {SearchGoogleLocationsResponse} Successful response
		 */
		Mybusinessbusinessinformation_googleLocations_search(requestBody: SearchGoogleLocationsRequest): Observable<SearchGoogleLocationsResponse> {
			return this.http.post<SearchGoogleLocationsResponse>(this.baseUri + 'v1/googleLocations:search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the location to delete.
		 * @return {Empty} Successful response
		 */
		Mybusinessbusinessinformation_locations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Looks up all the attributes set for a given location.
		 * Get v1/{name}
		 * @param {string} name Required. Google identifier for this location in the form of `locations/{location_id}/attributes`.
		 * @return {Attributes} Successful response
		 */
		Mybusinessbusinessinformation_locations_getAttributes(name: string): Observable<Attributes> {
			return this.http.get<Attributes>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update attributes for a given location.
		 * Patch v1/{name}
		 * @param {string} name Required. Google identifier for this location in the form of `locations/{location_id}/attributes`.
		 * @param {string} attributeMask Required. Attribute name of attributes that you'd like to update. Represented by `attributes/{attribute}`. Updates: All attributes provided in the attributes field that you would like to update must be set in the `attribute_mask`. Attributes set in the above list but not in the `attribute_mask` will be ignored. Deletes: If you'd like to delete certain attributes, they must be specified in the `attribute_mask` with no matching entry in the attributes list. If you'd like to delete all attributes set on a location, you should look up all the applicable attributes for the location and then add them to the `attribute_mask` with an empty attributes field.
		 * @return {Attributes} Successful response
		 */
		Mybusinessbusinessinformation_locations_updateAttributes(name: string, attributeMask: string | null | undefined, requestBody: Attributes): Observable<Attributes> {
			return this.http.patch<Attributes>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&attributeMask=' + (attributeMask == null ? '' : encodeURIComponent(attributeMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the Google-updated version of the specified location.
		 * Get v1/{name}:getGoogleUpdated
		 * @param {string} name Required. Google identifier for this location in the form of `locations/{location_id}/attributes`.
		 * @param {string} readMask Required. Read mask to specify what fields will be returned in the response.
		 * @return {Attributes} Successful response
		 */
		Mybusinessbusinessinformation_locations_attributes_getGoogleUpdated(name: string, readMask: string | null | undefined): Observable<Attributes> {
			return this.http.get<Attributes>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':getGoogleUpdated&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Lists the locations for the specified account.
		 * Get v1/{parent}/locations
		 * @param {string} parent Required. The name of the account to fetch locations from. If the parent Account is of AccountType PERSONAL, only Locations that are directly owned by the Account are returned, otherwise it will return all accessible locations from the Account, either directly or indirectly.
		 * @param {string} filter Optional. A filter constraining the locations to return. The response includes only entries that match the filter. If `filter` is empty, then constraints are applied and all locations (paginated) are retrieved for the requested account. For more information about valid fields and example usage, see [Work with Location Data Guide](https://developers.google.com/my-business/content/location-data#filter_results_when_you_list_locations).
		 * @param {string} orderBy Optional. Sorting order for the request. Multiple fields should be comma-separated, following SQL syntax. The default sorting order is ascending. To specify descending order, a suffix " desc" should be added. Valid fields to order_by are title and store_code. For example: "title, store_code desc" or "title" or "store_code desc"
		 * @param {number} pageSize Optional. How many locations to fetch per page. Default value is 10 if not set. Minimum is 1, and maximum page size is 100.
		 * @param {string} pageToken Optional. If specified, it fetches the next `page` of locations. The page token is returned by previous calls to `ListLocations` when there were more locations than could fit in the requested page size.
		 * @param {string} readMask Required. Read mask to specify what fields will be returned in the response.
		 * @return {ListLocationsResponse} Successful response
		 */
		Mybusinessbusinessinformation_accounts_locations_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, readMask: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Creates a new Location that will be owned by the logged in user.
		 * Post v1/{parent}/locations
		 * @param {string} parent Required. The name of the account in which to create this location.
		 * @param {string} requestId Optional. A unique request ID for the server to detect duplicated requests. We recommend using UUIDs. Max length is 50 characters.
		 * @param {boolean} validateOnly Optional. If true, the request is validated without actually creating the location.
		 * @return {Location} Successful response
		 */
		Mybusinessbusinessinformation_accounts_locations_create(parent: string, requestId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Location): Observable<Location> {
			return this.http.post<Location>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Mybusinessbusinessinformation_categories_listView { CATEGORY_VIEW_UNSPECIFIED = 0, BASIC = 1, FULL = 2 }

}

